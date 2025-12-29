var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1470 = root || request.c( 'UnityEngine.JointSpring' )
  var i1471 = data
  i1470.spring = i1471[0]
  i1470.damper = i1471[1]
  i1470.targetPosition = i1471[2]
  return i1470
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1472 = root || request.c( 'UnityEngine.JointMotor' )
  var i1473 = data
  i1472.m_TargetVelocity = i1473[0]
  i1472.m_Force = i1473[1]
  i1472.m_FreeSpin = i1473[2]
  return i1472
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1474 = root || request.c( 'UnityEngine.JointLimits' )
  var i1475 = data
  i1474.m_Min = i1475[0]
  i1474.m_Max = i1475[1]
  i1474.m_Bounciness = i1475[2]
  i1474.m_BounceMinVelocity = i1475[3]
  i1474.m_ContactDistance = i1475[4]
  i1474.minBounce = i1475[5]
  i1474.maxBounce = i1475[6]
  return i1474
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1476 = root || request.c( 'UnityEngine.JointDrive' )
  var i1477 = data
  i1476.m_PositionSpring = i1477[0]
  i1476.m_PositionDamper = i1477[1]
  i1476.m_MaximumForce = i1477[2]
  i1476.m_UseAcceleration = i1477[3]
  return i1476
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1478 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1479 = data
  i1478.m_Spring = i1479[0]
  i1478.m_Damper = i1479[1]
  return i1478
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1480 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1481 = data
  i1480.m_Limit = i1481[0]
  i1480.m_Bounciness = i1481[1]
  i1480.m_ContactDistance = i1481[2]
  return i1480
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1482 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1483 = data
  i1482.m_ExtremumSlip = i1483[0]
  i1482.m_ExtremumValue = i1483[1]
  i1482.m_AsymptoteSlip = i1483[2]
  i1482.m_AsymptoteValue = i1483[3]
  i1482.m_Stiffness = i1483[4]
  return i1482
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1484 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1485 = data
  i1484.m_LowerAngle = i1485[0]
  i1484.m_UpperAngle = i1485[1]
  return i1484
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1486 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1487 = data
  i1486.m_MotorSpeed = i1487[0]
  i1486.m_MaximumMotorTorque = i1487[1]
  return i1486
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1488 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1489 = data
  i1488.m_DampingRatio = i1489[0]
  i1488.m_Frequency = i1489[1]
  i1488.m_Angle = i1489[2]
  return i1488
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1491 = data
  i1490.m_LowerTranslation = i1491[0]
  i1490.m_UpperTranslation = i1491[1]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1493 = data
  i1492.name = i1493[0]
  i1492.width = i1493[1]
  i1492.height = i1493[2]
  i1492.mipmapCount = i1493[3]
  i1492.anisoLevel = i1493[4]
  i1492.filterMode = i1493[5]
  i1492.hdr = !!i1493[6]
  i1492.format = i1493[7]
  i1492.wrapMode = i1493[8]
  i1492.alphaIsTransparency = !!i1493[9]
  i1492.alphaSource = i1493[10]
  i1492.graphicsFormat = i1493[11]
  i1492.sRGBTexture = !!i1493[12]
  i1492.desiredColorSpace = i1493[13]
  i1492.wrapU = i1493[14]
  i1492.wrapV = i1493[15]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1494 = root || new pc.UnityMaterial()
  var i1495 = data
  i1494.name = i1495[0]
  request.r(i1495[1], i1495[2], 0, i1494, 'shader')
  i1494.renderQueue = i1495[3]
  i1494.enableInstancing = !!i1495[4]
  var i1497 = i1495[5]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1497[i + 0]) );
  }
  i1494.floatParameters = i1496
  var i1499 = i1495[6]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1499[i + 0]) );
  }
  i1494.colorParameters = i1498
  var i1501 = i1495[7]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1501[i + 0]) );
  }
  i1494.vectorParameters = i1500
  var i1503 = i1495[8]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1503[i + 0]) );
  }
  i1494.textureParameters = i1502
  var i1505 = i1495[9]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1505[i + 0]) );
  }
  i1494.materialFlags = i1504
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1509 = data
  i1508.name = i1509[0]
  i1508.value = i1509[1]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1513 = data
  i1512.name = i1513[0]
  i1512.value = new pc.Color(i1513[1], i1513[2], i1513[3], i1513[4])
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1517 = data
  i1516.name = i1517[0]
  i1516.value = new pc.Vec4( i1517[1], i1517[2], i1517[3], i1517[4] )
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1521 = data
  i1520.name = i1521[0]
  request.r(i1521[1], i1521[2], 0, i1520, 'value')
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1525 = data
  i1524.name = i1525[0]
  i1524.enabled = !!i1525[1]
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1527 = data
  i1526.name = i1527[0]
  i1526.index = i1527[1]
  i1526.startup = !!i1527[2]
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1529 = data
  i1528.position = new pc.Vec3( i1529[0], i1529[1], i1529[2] )
  i1528.scale = new pc.Vec3( i1529[3], i1529[4], i1529[5] )
  i1528.rotation = new pc.Quat(i1529[6], i1529[7], i1529[8], i1529[9])
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1531 = data
  i1530.aspect = i1531[0]
  i1530.orthographic = !!i1531[1]
  i1530.orthographicSize = i1531[2]
  i1530.backgroundColor = new pc.Color(i1531[3], i1531[4], i1531[5], i1531[6])
  i1530.nearClipPlane = i1531[7]
  i1530.farClipPlane = i1531[8]
  i1530.fieldOfView = i1531[9]
  i1530.depth = i1531[10]
  i1530.clearFlags = i1531[11]
  i1530.cullingMask = i1531[12]
  i1530.rect = i1531[13]
  request.r(i1531[14], i1531[15], 0, i1530, 'targetTexture')
  i1530.usePhysicalProperties = !!i1531[16]
  i1530.focalLength = i1531[17]
  i1530.sensorSize = new pc.Vec2( i1531[18], i1531[19] )
  i1530.lensShift = new pc.Vec2( i1531[20], i1531[21] )
  i1530.gateFit = i1531[22]
  i1530.commandBufferCount = i1531[23]
  i1530.cameraType = i1531[24]
  i1530.enabled = !!i1531[25]
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1533 = data
  i1532.name = i1533[0]
  i1532.tagId = i1533[1]
  i1532.enabled = !!i1533[2]
  i1532.isStatic = !!i1533[3]
  i1532.layer = i1533[4]
  return i1532
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1534 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1535 = data
  request.r(i1535[0], i1535[1], 0, i1534, 'm_FirstSelected')
  i1534.m_sendNavigationEvents = !!i1535[2]
  i1534.m_DragThreshold = i1535[3]
  return i1534
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1536 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1537 = data
  i1536.m_HorizontalAxis = i1537[0]
  i1536.m_VerticalAxis = i1537[1]
  i1536.m_SubmitButton = i1537[2]
  i1536.m_CancelButton = i1537[3]
  i1536.m_InputActionsPerSecond = i1537[4]
  i1536.m_RepeatDelay = i1537[5]
  i1536.m_ForceModuleActive = !!i1537[6]
  i1536.m_SendPointerHoverToParent = !!i1537[7]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1539 = data
  i1538.pivot = new pc.Vec2( i1539[0], i1539[1] )
  i1538.anchorMin = new pc.Vec2( i1539[2], i1539[3] )
  i1538.anchorMax = new pc.Vec2( i1539[4], i1539[5] )
  i1538.sizeDelta = new pc.Vec2( i1539[6], i1539[7] )
  i1538.anchoredPosition3D = new pc.Vec3( i1539[8], i1539[9], i1539[10] )
  i1538.rotation = new pc.Quat(i1539[11], i1539[12], i1539[13], i1539[14])
  i1538.scale = new pc.Vec3( i1539[15], i1539[16], i1539[17] )
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1541 = data
  i1540.planeDistance = i1541[0]
  i1540.referencePixelsPerUnit = i1541[1]
  i1540.isFallbackOverlay = !!i1541[2]
  i1540.renderMode = i1541[3]
  i1540.renderOrder = i1541[4]
  i1540.sortingLayerName = i1541[5]
  i1540.sortingOrder = i1541[6]
  i1540.scaleFactor = i1541[7]
  request.r(i1541[8], i1541[9], 0, i1540, 'worldCamera')
  i1540.overrideSorting = !!i1541[10]
  i1540.pixelPerfect = !!i1541[11]
  i1540.targetDisplay = i1541[12]
  i1540.overridePixelPerfect = !!i1541[13]
  i1540.enabled = !!i1541[14]
  return i1540
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1542 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1543 = data
  i1542.m_UiScaleMode = i1543[0]
  i1542.m_ReferencePixelsPerUnit = i1543[1]
  i1542.m_ScaleFactor = i1543[2]
  i1542.m_ReferenceResolution = new pc.Vec2( i1543[3], i1543[4] )
  i1542.m_ScreenMatchMode = i1543[5]
  i1542.m_MatchWidthOrHeight = i1543[6]
  i1542.m_PhysicalUnit = i1543[7]
  i1542.m_FallbackScreenDPI = i1543[8]
  i1542.m_DefaultSpriteDPI = i1543[9]
  i1542.m_DynamicPixelsPerUnit = i1543[10]
  i1542.m_PresetInfoIsWorld = !!i1543[11]
  return i1542
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1544 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1545 = data
  i1544.m_IgnoreReversedGraphics = !!i1545[0]
  i1544.m_BlockingObjects = i1545[1]
  i1544.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1545[2] )
  return i1544
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1546 = root || request.c( 'LunaManager' )
  var i1547 = data
  var i1549 = i1547[0]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 2) {
  request.r(i1549[i + 0], i1549[i + 1], 2, i1548, '')
  }
  i1546.lstBtnInstall = i1548
  request.r(i1547[1], i1547[2], 0, i1546, 'StartCard')
  request.r(i1547[3], i1547[4], 0, i1546, 'EndCard')
  i1546.countPlay = i1547[5]
  i1546.countPlayFinal = i1547[6]
  i1546.countPlayMax = i1547[7]
  i1546.timeDropFinal = i1547[8]
  i1546.colorBG = new pc.Color(i1547[9], i1547[10], i1547[11], i1547[12])
  request.r(i1547[13], i1547[14], 0, i1546, 'texture2D')
  request.r(i1547[15], i1547[16], 0, i1546, 'rawImageBG')
  i1546.isHead = !!i1547[17]
  request.r(i1547[18], i1547[19], 0, i1546, 'textProgess')
  request.r(i1547[20], i1547[21], 0, i1546, 'imgProgess')
  request.r(i1547[22], i1547[23], 0, i1546, 'timeText')
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1553 = data
  i1552.cullTransparentMesh = !!i1553[0]
  return i1552
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1554 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1555 = data
  request.r(i1555[0], i1555[1], 0, i1554, 'm_Texture')
  i1554.m_UVRect = UnityEngine.Rect.MinMaxRect(i1555[2], i1555[3], i1555[4], i1555[5])
  i1554.m_Maskable = !!i1555[6]
  request.r(i1555[7], i1555[8], 0, i1554, 'm_Material')
  i1554.m_Color = new pc.Color(i1555[9], i1555[10], i1555[11], i1555[12])
  i1554.m_RaycastTarget = !!i1555[13]
  i1554.m_RaycastPadding = new pc.Vec4( i1555[14], i1555[15], i1555[16], i1555[17] )
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1557 = data
  request.r(i1557[0], i1557[1], 0, i1556, 'clip')
  request.r(i1557[2], i1557[3], 0, i1556, 'outputAudioMixerGroup')
  i1556.playOnAwake = !!i1557[4]
  i1556.loop = !!i1557[5]
  i1556.time = i1557[6]
  i1556.volume = i1557[7]
  i1556.pitch = i1557[8]
  i1556.enabled = !!i1557[9]
  return i1556
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1565 = data
  i1564.usedByComposite = !!i1565[0]
  i1564.autoTiling = !!i1565[1]
  var i1567 = i1565[2]
  var i1566 = []
  for(var i = 0; i < i1567.length; i += 1) {
  var i1569 = i1567[i + 0]
  var i1568 = []
  for(var i = 0; i < i1569.length; i += 2) {
    i1568.push( new pc.Vec2( i1569[i + 0], i1569[i + 1] ) );
  }
    i1566.push( i1568 );
  }
  i1564.points = i1566
  i1564.enabled = !!i1565[3]
  i1564.isTrigger = !!i1565[4]
  i1564.usedByEffector = !!i1565[5]
  i1564.density = i1565[6]
  i1564.offset = new pc.Vec2( i1565[7], i1565[8] )
  request.r(i1565[9], i1565[10], 0, i1564, 'material')
  return i1564
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1576 = root || request.c( 'UnityEngine.UI.Image' )
  var i1577 = data
  request.r(i1577[0], i1577[1], 0, i1576, 'm_Sprite')
  i1576.m_Type = i1577[2]
  i1576.m_PreserveAspect = !!i1577[3]
  i1576.m_FillCenter = !!i1577[4]
  i1576.m_FillMethod = i1577[5]
  i1576.m_FillAmount = i1577[6]
  i1576.m_FillClockwise = !!i1577[7]
  i1576.m_FillOrigin = i1577[8]
  i1576.m_UseSpriteMesh = !!i1577[9]
  i1576.m_PixelsPerUnitMultiplier = i1577[10]
  i1576.m_Maskable = !!i1577[11]
  request.r(i1577[12], i1577[13], 0, i1576, 'm_Material')
  i1576.m_Color = new pc.Color(i1577[14], i1577[15], i1577[16], i1577[17])
  i1576.m_RaycastTarget = !!i1577[18]
  i1576.m_RaycastPadding = new pc.Vec4( i1577[19], i1577[20], i1577[21], i1577[22] )
  return i1576
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i1578 = root || request.c( 'ClickItem' )
  var i1579 = data
  var i1581 = i1579[0]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 2) {
  request.r(i1581[i + 0], i1581[i + 1], 2, i1580, '')
  }
  i1578.steps = i1580
  i1578.currentStep = i1579[1]
  i1578.isProcess = !!i1579[2]
  return i1578
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1582 = root || request.c( 'UnityEngine.UI.Button' )
  var i1583 = data
  i1582.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1583[0], i1582.m_OnClick)
  i1582.m_Navigation = request.d('UnityEngine.UI.Navigation', i1583[1], i1582.m_Navigation)
  i1582.m_Transition = i1583[2]
  i1582.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1583[3], i1582.m_Colors)
  i1582.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1583[4], i1582.m_SpriteState)
  i1582.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1583[5], i1582.m_AnimationTriggers)
  i1582.m_Interactable = !!i1583[6]
  request.r(i1583[7], i1583[8], 0, i1582, 'm_TargetGraphic')
  return i1582
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1585 = data
  i1584.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1585[0], i1584.m_PersistentCalls)
  return i1584
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1587 = data
  var i1589 = i1587[0]
  var i1588 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.add(request.d('UnityEngine.Events.PersistentCall', i1589[i + 0]));
  }
  i1586.m_Calls = i1588
  return i1586
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1593 = data
  request.r(i1593[0], i1593[1], 0, i1592, 'm_Target')
  i1592.m_TargetAssemblyTypeName = i1593[2]
  i1592.m_MethodName = i1593[3]
  i1592.m_Mode = i1593[4]
  i1592.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1593[5], i1592.m_Arguments)
  i1592.m_CallState = i1593[6]
  return i1592
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1594 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1595 = data
  i1594.m_Mode = i1595[0]
  i1594.m_WrapAround = !!i1595[1]
  request.r(i1595[2], i1595[3], 0, i1594, 'm_SelectOnUp')
  request.r(i1595[4], i1595[5], 0, i1594, 'm_SelectOnDown')
  request.r(i1595[6], i1595[7], 0, i1594, 'm_SelectOnLeft')
  request.r(i1595[8], i1595[9], 0, i1594, 'm_SelectOnRight')
  return i1594
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1596 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1597 = data
  i1596.m_NormalColor = new pc.Color(i1597[0], i1597[1], i1597[2], i1597[3])
  i1596.m_HighlightedColor = new pc.Color(i1597[4], i1597[5], i1597[6], i1597[7])
  i1596.m_PressedColor = new pc.Color(i1597[8], i1597[9], i1597[10], i1597[11])
  i1596.m_SelectedColor = new pc.Color(i1597[12], i1597[13], i1597[14], i1597[15])
  i1596.m_DisabledColor = new pc.Color(i1597[16], i1597[17], i1597[18], i1597[19])
  i1596.m_ColorMultiplier = i1597[20]
  i1596.m_FadeDuration = i1597[21]
  return i1596
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1598 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1599 = data
  request.r(i1599[0], i1599[1], 0, i1598, 'm_HighlightedSprite')
  request.r(i1599[2], i1599[3], 0, i1598, 'm_PressedSprite')
  request.r(i1599[4], i1599[5], 0, i1598, 'm_SelectedSprite')
  request.r(i1599[6], i1599[7], 0, i1598, 'm_DisabledSprite')
  return i1598
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1600 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1601 = data
  i1600.m_NormalTrigger = i1601[0]
  i1600.m_HighlightedTrigger = i1601[1]
  i1600.m_PressedTrigger = i1601[2]
  i1600.m_SelectedTrigger = i1601[3]
  i1600.m_DisabledTrigger = i1601[4]
  return i1600
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1602 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1603 = data
  request.r(i1603[0], i1603[1], 0, i1602, 'skeletonDataAsset')
  request.r(i1603[2], i1603[3], 0, i1602, 'additiveMaterial')
  request.r(i1603[4], i1603[5], 0, i1602, 'multiplyMaterial')
  request.r(i1603[6], i1603[7], 0, i1602, 'screenMaterial')
  i1602.initialSkinName = i1603[8]
  i1602.initialFlipX = !!i1603[9]
  i1602.initialFlipY = !!i1603[10]
  i1602.startingAnimation = i1603[11]
  i1602.startingLoop = !!i1603[12]
  i1602.timeScale = i1603[13]
  i1602.freeze = !!i1603[14]
  i1602.layoutScaleMode = i1603[15]
  i1602.updateWhenInvisible = i1603[16]
  i1602.allowMultipleCanvasRenderers = !!i1603[17]
  var i1605 = i1603[18]
  var i1604 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1605.length; i += 2) {
  request.r(i1605[i + 0], i1605[i + 1], 1, i1604, '')
  }
  i1602.canvasRenderers = i1604
  i1602.enableSeparatorSlots = !!i1603[19]
  i1602.updateSeparatorPartLocation = !!i1603[20]
  i1602.updateSeparatorPartScale = !!i1603[21]
  i1602.disableMeshAssignmentOnOverride = !!i1603[22]
  i1602.referenceSize = new pc.Vec2( i1603[23], i1603[24] )
  i1602.referenceScale = i1603[25]
  i1602.rectTransformSize = new pc.Vec2( i1603[26], i1603[27] )
  i1602.editReferenceRect = !!i1603[28]
  var i1607 = i1603[29]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( i1607[i + 0] );
  }
  i1602.separatorSlotNames = i1606
  var i1609 = i1603[30]
  var i1608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1609.length; i += 2) {
  request.r(i1609[i + 0], i1609[i + 1], 1, i1608, '')
  }
  i1602.separatorParts = i1608
  i1602.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1603[31], i1602.meshGenerator)
  i1602.updateTiming = i1603[32]
  i1602.unscaledTime = !!i1603[33]
  i1602.m_Maskable = !!i1603[34]
  request.r(i1603[35], i1603[36], 0, i1602, 'm_Material')
  i1602.m_Color = new pc.Color(i1603[37], i1603[38], i1603[39], i1603[40])
  i1602.m_RaycastTarget = !!i1603[41]
  i1602.m_RaycastPadding = new pc.Vec4( i1603[42], i1603[43], i1603[44], i1603[45] )
  return i1602
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1616 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1617 = data
  i1616.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1617[0], i1616.settings)
  return i1616
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1618 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1619 = data
  i1618.useClipping = !!i1619[0]
  i1618.zSpacing = i1619[1]
  i1618.pmaVertexColors = !!i1619[2]
  i1618.tintBlack = !!i1619[3]
  i1618.canvasGroupTintBlack = !!i1619[4]
  i1618.calculateTangents = !!i1619[5]
  i1618.addNormals = !!i1619[6]
  i1618.immutableTriangles = !!i1619[7]
  return i1618
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1620 = root || request.c( 'DraggableItem' )
  var i1621 = data
  i1620.idDrag = i1621[0]
  i1620.isProcess = !!i1621[1]
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1623 = data
  i1622.m_Alpha = i1623[0]
  i1622.m_Interactable = !!i1623[1]
  i1622.m_BlocksRaycasts = !!i1623[2]
  i1622.m_IgnoreParentGroups = !!i1623[3]
  i1622.enabled = !!i1623[4]
  return i1622
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1624 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1625 = data
  i1624.m_hasFontAssetChanged = !!i1625[0]
  request.r(i1625[1], i1625[2], 0, i1624, 'm_baseMaterial')
  i1624.m_maskOffset = new pc.Vec4( i1625[3], i1625[4], i1625[5], i1625[6] )
  i1624.m_text = i1625[7]
  i1624.m_isRightToLeft = !!i1625[8]
  request.r(i1625[9], i1625[10], 0, i1624, 'm_fontAsset')
  request.r(i1625[11], i1625[12], 0, i1624, 'm_sharedMaterial')
  var i1627 = i1625[13]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 2) {
  request.r(i1627[i + 0], i1627[i + 1], 2, i1626, '')
  }
  i1624.m_fontSharedMaterials = i1626
  request.r(i1625[14], i1625[15], 0, i1624, 'm_fontMaterial')
  var i1629 = i1625[16]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 2) {
  request.r(i1629[i + 0], i1629[i + 1], 2, i1628, '')
  }
  i1624.m_fontMaterials = i1628
  i1624.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1625[17], i1625[18], i1625[19], i1625[20])
  i1624.m_fontColor = new pc.Color(i1625[21], i1625[22], i1625[23], i1625[24])
  i1624.m_enableVertexGradient = !!i1625[25]
  i1624.m_colorMode = i1625[26]
  i1624.m_fontColorGradient = request.d('TMPro.VertexGradient', i1625[27], i1624.m_fontColorGradient)
  request.r(i1625[28], i1625[29], 0, i1624, 'm_fontColorGradientPreset')
  request.r(i1625[30], i1625[31], 0, i1624, 'm_spriteAsset')
  i1624.m_tintAllSprites = !!i1625[32]
  request.r(i1625[33], i1625[34], 0, i1624, 'm_StyleSheet')
  i1624.m_TextStyleHashCode = i1625[35]
  i1624.m_overrideHtmlColors = !!i1625[36]
  i1624.m_faceColor = UnityEngine.Color32.ConstructColor(i1625[37], i1625[38], i1625[39], i1625[40])
  i1624.m_fontSize = i1625[41]
  i1624.m_fontSizeBase = i1625[42]
  i1624.m_fontWeight = i1625[43]
  i1624.m_enableAutoSizing = !!i1625[44]
  i1624.m_fontSizeMin = i1625[45]
  i1624.m_fontSizeMax = i1625[46]
  i1624.m_fontStyle = i1625[47]
  i1624.m_HorizontalAlignment = i1625[48]
  i1624.m_VerticalAlignment = i1625[49]
  i1624.m_textAlignment = i1625[50]
  i1624.m_characterSpacing = i1625[51]
  i1624.m_wordSpacing = i1625[52]
  i1624.m_lineSpacing = i1625[53]
  i1624.m_lineSpacingMax = i1625[54]
  i1624.m_paragraphSpacing = i1625[55]
  i1624.m_charWidthMaxAdj = i1625[56]
  i1624.m_enableWordWrapping = !!i1625[57]
  i1624.m_wordWrappingRatios = i1625[58]
  i1624.m_overflowMode = i1625[59]
  request.r(i1625[60], i1625[61], 0, i1624, 'm_linkedTextComponent')
  request.r(i1625[62], i1625[63], 0, i1624, 'parentLinkedComponent')
  i1624.m_enableKerning = !!i1625[64]
  i1624.m_enableExtraPadding = !!i1625[65]
  i1624.checkPaddingRequired = !!i1625[66]
  i1624.m_isRichText = !!i1625[67]
  i1624.m_parseCtrlCharacters = !!i1625[68]
  i1624.m_isOrthographic = !!i1625[69]
  i1624.m_isCullingEnabled = !!i1625[70]
  i1624.m_horizontalMapping = i1625[71]
  i1624.m_verticalMapping = i1625[72]
  i1624.m_uvLineOffset = i1625[73]
  i1624.m_geometrySortingOrder = i1625[74]
  i1624.m_IsTextObjectScaleStatic = !!i1625[75]
  i1624.m_VertexBufferAutoSizeReduction = !!i1625[76]
  i1624.m_useMaxVisibleDescender = !!i1625[77]
  i1624.m_pageToDisplay = i1625[78]
  i1624.m_margin = new pc.Vec4( i1625[79], i1625[80], i1625[81], i1625[82] )
  i1624.m_isUsingLegacyAnimationComponent = !!i1625[83]
  i1624.m_isVolumetricText = !!i1625[84]
  i1624.m_Maskable = !!i1625[85]
  request.r(i1625[86], i1625[87], 0, i1624, 'm_Material')
  i1624.m_Color = new pc.Color(i1625[88], i1625[89], i1625[90], i1625[91])
  i1624.m_RaycastTarget = !!i1625[92]
  i1624.m_RaycastPadding = new pc.Vec4( i1625[93], i1625[94], i1625[95], i1625[96] )
  return i1624
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1632 = root || request.c( 'TMPro.VertexGradient' )
  var i1633 = data
  i1632.topLeft = new pc.Color(i1633[0], i1633[1], i1633[2], i1633[3])
  i1632.topRight = new pc.Color(i1633[4], i1633[5], i1633[6], i1633[7])
  i1632.bottomLeft = new pc.Color(i1633[8], i1633[9], i1633[10], i1633[11])
  i1632.bottomRight = new pc.Color(i1633[12], i1633[13], i1633[14], i1633[15])
  return i1632
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1634 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1635 = data
  request.r(i1635[0], i1635[1], 0, i1634, 'm_ObjectArgument')
  i1634.m_ObjectArgumentAssemblyTypeName = i1635[2]
  i1634.m_IntArgument = i1635[3]
  i1634.m_FloatArgument = i1635[4]
  i1634.m_StringArgument = i1635[5]
  i1634.m_BoolArgument = !!i1635[6]
  return i1634
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1636 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1637 = data
  i1636.targetIsSelf = !!i1637[0]
  request.r(i1637[1], i1637[2], 0, i1636, 'targetGO')
  i1636.tweenTargetIsTargetGO = !!i1637[3]
  i1636.delay = i1637[4]
  i1636.duration = i1637[5]
  i1636.easeType = i1637[6]
  i1636.easeCurve = new pc.AnimationCurve( { keys_flow: i1637[7] } )
  i1636.loopType = i1637[8]
  i1636.loops = i1637[9]
  i1636.id = i1637[10]
  i1636.isRelative = !!i1637[11]
  i1636.isFrom = !!i1637[12]
  i1636.isIndependentUpdate = !!i1637[13]
  i1636.autoKill = !!i1637[14]
  i1636.autoGenerate = !!i1637[15]
  i1636.isActive = !!i1637[16]
  i1636.isValid = !!i1637[17]
  request.r(i1637[18], i1637[19], 0, i1636, 'target')
  i1636.animationType = i1637[20]
  i1636.targetType = i1637[21]
  i1636.forcedTargetType = i1637[22]
  i1636.autoPlay = !!i1637[23]
  i1636.useTargetAsV3 = !!i1637[24]
  i1636.endValueFloat = i1637[25]
  i1636.endValueV3 = new pc.Vec3( i1637[26], i1637[27], i1637[28] )
  i1636.endValueV2 = new pc.Vec2( i1637[29], i1637[30] )
  i1636.endValueColor = new pc.Color(i1637[31], i1637[32], i1637[33], i1637[34])
  i1636.endValueString = i1637[35]
  i1636.endValueRect = UnityEngine.Rect.MinMaxRect(i1637[36], i1637[37], i1637[38], i1637[39])
  request.r(i1637[40], i1637[41], 0, i1636, 'endValueTransform')
  i1636.optionalBool0 = !!i1637[42]
  i1636.optionalBool1 = !!i1637[43]
  i1636.optionalFloat0 = i1637[44]
  i1636.optionalInt0 = i1637[45]
  i1636.optionalRotationMode = i1637[46]
  i1636.optionalScrambleMode = i1637[47]
  i1636.optionalShakeRandomnessMode = i1637[48]
  i1636.optionalString = i1637[49]
  i1636.updateType = i1637[50]
  i1636.isSpeedBased = !!i1637[51]
  i1636.hasOnStart = !!i1637[52]
  i1636.hasOnPlay = !!i1637[53]
  i1636.hasOnUpdate = !!i1637[54]
  i1636.hasOnStepComplete = !!i1637[55]
  i1636.hasOnComplete = !!i1637[56]
  i1636.hasOnTweenCreated = !!i1637[57]
  i1636.hasOnRewind = !!i1637[58]
  i1636.onStart = request.d('UnityEngine.Events.UnityEvent', i1637[59], i1636.onStart)
  i1636.onPlay = request.d('UnityEngine.Events.UnityEvent', i1637[60], i1636.onPlay)
  i1636.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1637[61], i1636.onUpdate)
  i1636.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1637[62], i1636.onStepComplete)
  i1636.onComplete = request.d('UnityEngine.Events.UnityEvent', i1637[63], i1636.onComplete)
  i1636.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1637[64], i1636.onTweenCreated)
  i1636.onRewind = request.d('UnityEngine.Events.UnityEvent', i1637[65], i1636.onRewind)
  return i1636
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1638 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1639 = data
  i1638.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1639[0], i1638.m_PersistentCalls)
  return i1638
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1640 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1641 = data
  i1640.m_ShowMaskGraphic = !!i1641[0]
  return i1640
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1642 = root || request.c( 'AudioController' )
  var i1643 = data
  request.r(i1643[0], i1643[1], 0, i1642, 'bgmSource')
  request.r(i1643[2], i1643[3], 0, i1642, 'sfxSource')
  var i1645 = i1643[4]
  var i1644 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.add(request.d('AudioEntry', i1645[i + 0]));
  }
  i1642.audioEntries = i1644
  return i1642
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i1648 = root || request.c( 'AudioEntry' )
  var i1649 = data
  i1648.key = i1649[0]
  request.r(i1649[1], i1649[2], 0, i1648, 'clip')
  i1648.volume = i1649[3]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1651 = data
  i1650.ambientIntensity = i1651[0]
  i1650.reflectionIntensity = i1651[1]
  i1650.ambientMode = i1651[2]
  i1650.ambientLight = new pc.Color(i1651[3], i1651[4], i1651[5], i1651[6])
  i1650.ambientSkyColor = new pc.Color(i1651[7], i1651[8], i1651[9], i1651[10])
  i1650.ambientGroundColor = new pc.Color(i1651[11], i1651[12], i1651[13], i1651[14])
  i1650.ambientEquatorColor = new pc.Color(i1651[15], i1651[16], i1651[17], i1651[18])
  i1650.fogColor = new pc.Color(i1651[19], i1651[20], i1651[21], i1651[22])
  i1650.fogEndDistance = i1651[23]
  i1650.fogStartDistance = i1651[24]
  i1650.fogDensity = i1651[25]
  i1650.fog = !!i1651[26]
  request.r(i1651[27], i1651[28], 0, i1650, 'skybox')
  i1650.fogMode = i1651[29]
  var i1653 = i1651[30]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1653[i + 0]) );
  }
  i1650.lightmaps = i1652
  i1650.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1651[31], i1650.lightProbes)
  i1650.lightmapsMode = i1651[32]
  i1650.mixedBakeMode = i1651[33]
  i1650.environmentLightingMode = i1651[34]
  i1650.ambientProbe = new pc.SphericalHarmonicsL2(i1651[35])
  i1650.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1651[36])
  i1650.useReferenceAmbientProbe = !!i1651[37]
  request.r(i1651[38], i1651[39], 0, i1650, 'customReflection')
  request.r(i1651[40], i1651[41], 0, i1650, 'defaultReflection')
  i1650.defaultReflectionMode = i1651[42]
  i1650.defaultReflectionResolution = i1651[43]
  i1650.sunLightObjectId = i1651[44]
  i1650.pixelLightCount = i1651[45]
  i1650.defaultReflectionHDR = !!i1651[46]
  i1650.hasLightDataAsset = !!i1651[47]
  i1650.hasManualGenerate = !!i1651[48]
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1657 = data
  request.r(i1657[0], i1657[1], 0, i1656, 'lightmapColor')
  request.r(i1657[2], i1657[3], 0, i1656, 'lightmapDirection')
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1658 = root || new UnityEngine.LightProbes()
  var i1659 = data
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1667 = data
  var i1669 = i1667[0]
  var i1668 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1669[i + 0]));
  }
  i1666.ShaderCompilationErrors = i1668
  i1666.name = i1667[1]
  i1666.guid = i1667[2]
  var i1671 = i1667[3]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.push( i1671[i + 0] );
  }
  i1666.shaderDefinedKeywords = i1670
  var i1673 = i1667[4]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1673[i + 0]) );
  }
  i1666.passes = i1672
  var i1675 = i1667[5]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1675[i + 0]) );
  }
  i1666.usePasses = i1674
  var i1677 = i1667[6]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1677[i + 0]) );
  }
  i1666.defaultParameterValues = i1676
  request.r(i1667[7], i1667[8], 0, i1666, 'unityFallbackShader')
  i1666.readDepth = !!i1667[9]
  i1666.isCreatedByShaderGraph = !!i1667[10]
  i1666.disableBatching = !!i1667[11]
  i1666.compiled = !!i1667[12]
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1681 = data
  i1680.shaderName = i1681[0]
  i1680.errorMessage = i1681[1]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1684 = root || new pc.UnityShaderPass()
  var i1685 = data
  i1684.id = i1685[0]
  i1684.subShaderIndex = i1685[1]
  i1684.name = i1685[2]
  i1684.passType = i1685[3]
  i1684.grabPassTextureName = i1685[4]
  i1684.usePass = !!i1685[5]
  i1684.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[6], i1684.zTest)
  i1684.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[7], i1684.zWrite)
  i1684.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[8], i1684.culling)
  i1684.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1685[9], i1684.blending)
  i1684.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1685[10], i1684.alphaBlending)
  i1684.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[11], i1684.colorWriteMask)
  i1684.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[12], i1684.offsetUnits)
  i1684.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[13], i1684.offsetFactor)
  i1684.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[14], i1684.stencilRef)
  i1684.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[15], i1684.stencilReadMask)
  i1684.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[16], i1684.stencilWriteMask)
  i1684.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1685[17], i1684.stencilOp)
  i1684.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1685[18], i1684.stencilOpFront)
  i1684.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1685[19], i1684.stencilOpBack)
  var i1687 = i1685[20]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1687[i + 0]) );
  }
  i1684.tags = i1686
  var i1689 = i1685[21]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( i1689[i + 0] );
  }
  i1684.passDefinedKeywords = i1688
  var i1691 = i1685[22]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1691[i + 0]) );
  }
  i1684.passDefinedKeywordGroups = i1690
  var i1693 = i1685[23]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1693[i + 0]) );
  }
  i1684.variants = i1692
  var i1695 = i1685[24]
  var i1694 = []
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1695[i + 0]) );
  }
  i1684.excludedVariants = i1694
  i1684.hasDepthReader = !!i1685[25]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1697 = data
  i1696.val = i1697[0]
  i1696.name = i1697[1]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1699 = data
  i1698.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[0], i1698.src)
  i1698.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[1], i1698.dst)
  i1698.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[2], i1698.op)
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1701 = data
  i1700.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[0], i1700.pass)
  i1700.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[1], i1700.fail)
  i1700.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[2], i1700.zFail)
  i1700.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[3], i1700.comp)
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1705 = data
  i1704.name = i1705[0]
  i1704.value = i1705[1]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1709 = data
  var i1711 = i1709[0]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( i1711[i + 0] );
  }
  i1708.keywords = i1710
  i1708.hasDiscard = !!i1709[1]
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1715 = data
  i1714.passId = i1715[0]
  i1714.subShaderIndex = i1715[1]
  var i1717 = i1715[2]
  var i1716 = []
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.push( i1717[i + 0] );
  }
  i1714.keywords = i1716
  i1714.vertexProgram = i1715[3]
  i1714.fragmentProgram = i1715[4]
  i1714.exportedForWebGl2 = !!i1715[5]
  i1714.readDepth = !!i1715[6]
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1721 = data
  request.r(i1721[0], i1721[1], 0, i1720, 'shader')
  i1720.pass = i1721[2]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1725 = data
  i1724.name = i1725[0]
  i1724.type = i1725[1]
  i1724.value = new pc.Vec4( i1725[2], i1725[3], i1725[4], i1725[5] )
  i1724.textureValue = i1725[6]
  i1724.shaderPropertyFlag = i1725[7]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1727 = data
  i1726.name = i1727[0]
  request.r(i1727[1], i1727[2], 0, i1726, 'texture')
  i1726.aabb = i1727[3]
  i1726.vertices = i1727[4]
  i1726.triangles = i1727[5]
  i1726.textureRect = UnityEngine.Rect.MinMaxRect(i1727[6], i1727[7], i1727[8], i1727[9])
  i1726.packedRect = UnityEngine.Rect.MinMaxRect(i1727[10], i1727[11], i1727[12], i1727[13])
  i1726.border = new pc.Vec4( i1727[14], i1727[15], i1727[16], i1727[17] )
  i1726.transparency = i1727[18]
  i1726.bounds = i1727[19]
  i1726.pixelsPerUnit = i1727[20]
  i1726.textureWidth = i1727[21]
  i1726.textureHeight = i1727[22]
  i1726.nativeSize = new pc.Vec2( i1727[23], i1727[24] )
  i1726.pivot = new pc.Vec2( i1727[25], i1727[26] )
  i1726.textureRectOffset = new pc.Vec2( i1727[27], i1727[28] )
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1729 = data
  i1728.name = i1729[0]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1731 = data
  i1730.name = i1731[0]
  i1730.ascent = i1731[1]
  i1730.originalLineHeight = i1731[2]
  i1730.fontSize = i1731[3]
  var i1733 = i1731[4]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1733[i + 0]) );
  }
  i1730.characterInfo = i1732
  request.r(i1731[5], i1731[6], 0, i1730, 'texture')
  i1730.originalFontSize = i1731[7]
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1737 = data
  i1736.index = i1737[0]
  i1736.advance = i1737[1]
  i1736.bearing = i1737[2]
  i1736.glyphWidth = i1737[3]
  i1736.glyphHeight = i1737[4]
  i1736.minX = i1737[5]
  i1736.maxX = i1737[6]
  i1736.minY = i1737[7]
  i1736.maxY = i1737[8]
  i1736.uvBottomLeftX = i1737[9]
  i1736.uvBottomLeftY = i1737[10]
  i1736.uvBottomRightX = i1737[11]
  i1736.uvBottomRightY = i1737[12]
  i1736.uvTopLeftX = i1737[13]
  i1736.uvTopLeftY = i1737[14]
  i1736.uvTopRightX = i1737[15]
  i1736.uvTopRightY = i1737[16]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1739 = data
  i1738.name = i1739[0]
  i1738.bytes64 = i1739[1]
  i1738.data = i1739[2]
  return i1738
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1740 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1741 = data
  var i1743 = i1741[0]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 2) {
  request.r(i1743[i + 0], i1743[i + 1], 2, i1742, '')
  }
  i1740.atlasAssets = i1742
  i1740.scale = i1741[1]
  request.r(i1741[2], i1741[3], 0, i1740, 'skeletonJSON')
  i1740.isUpgradingBlendModeMaterials = !!i1741[4]
  i1740.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1741[5], i1740.blendModeMaterials)
  var i1745 = i1741[6]
  var i1744 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1745.length; i += 2) {
  request.r(i1745[i + 0], i1745[i + 1], 1, i1744, '')
  }
  i1740.skeletonDataModifiers = i1744
  var i1747 = i1741[7]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.push( i1747[i + 0] );
  }
  i1740.fromAnimation = i1746
  var i1749 = i1741[8]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.push( i1749[i + 0] );
  }
  i1740.toAnimation = i1748
  i1740.duration = i1741[9]
  i1740.defaultMix = i1741[10]
  request.r(i1741[11], i1741[12], 0, i1740, 'controller')
  return i1740
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1752 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1753 = data
  i1752.applyAdditiveMaterial = !!i1753[0]
  var i1755 = i1753[1]
  var i1754 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1755[i + 0]));
  }
  i1752.additiveMaterials = i1754
  var i1757 = i1753[2]
  var i1756 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1757[i + 0]));
  }
  i1752.multiplyMaterials = i1756
  var i1759 = i1753[3]
  var i1758 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1759[i + 0]));
  }
  i1752.screenMaterials = i1758
  i1752.requiresBlendModeMaterials = !!i1753[4]
  return i1752
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1762 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1763 = data
  i1762.pageName = i1763[0]
  request.r(i1763[1], i1763[2], 0, i1762, 'material')
  return i1762
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1766 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1767 = data
  request.r(i1767[0], i1767[1], 0, i1766, 'atlasFile')
  var i1769 = i1767[2]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 2) {
  request.r(i1769[i + 0], i1769[i + 1], 2, i1768, '')
  }
  i1766.materials = i1768
  i1766.textureLoadingMode = i1767[3]
  request.r(i1767[4], i1767[5], 0, i1766, 'onDemandTextureLoader')
  return i1766
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1770 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1771 = data
  request.r(i1771[0], i1771[1], 0, i1770, 'atlas')
  i1770.normalStyle = i1771[2]
  i1770.normalSpacingOffset = i1771[3]
  i1770.boldStyle = i1771[4]
  i1770.boldSpacing = i1771[5]
  i1770.italicStyle = i1771[6]
  i1770.tabSize = i1771[7]
  i1770.hashCode = i1771[8]
  request.r(i1771[9], i1771[10], 0, i1770, 'material')
  i1770.materialHashCode = i1771[11]
  i1770.m_Version = i1771[12]
  i1770.m_SourceFontFileGUID = i1771[13]
  request.r(i1771[14], i1771[15], 0, i1770, 'm_SourceFontFile_EditorRef')
  request.r(i1771[16], i1771[17], 0, i1770, 'm_SourceFontFile')
  i1770.m_AtlasPopulationMode = i1771[18]
  i1770.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1771[19], i1770.m_FaceInfo)
  var i1773 = i1771[20]
  var i1772 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.add(request.d('UnityEngine.TextCore.Glyph', i1773[i + 0]));
  }
  i1770.m_GlyphTable = i1772
  var i1775 = i1771[21]
  var i1774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.add(request.d('TMPro.TMP_Character', i1775[i + 0]));
  }
  i1770.m_CharacterTable = i1774
  var i1777 = i1771[22]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 2) {
  request.r(i1777[i + 0], i1777[i + 1], 2, i1776, '')
  }
  i1770.m_AtlasTextures = i1776
  i1770.m_AtlasTextureIndex = i1771[23]
  i1770.m_IsMultiAtlasTexturesEnabled = !!i1771[24]
  i1770.m_ClearDynamicDataOnBuild = !!i1771[25]
  var i1779 = i1771[26]
  var i1778 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.add(request.d('UnityEngine.TextCore.GlyphRect', i1779[i + 0]));
  }
  i1770.m_UsedGlyphRects = i1778
  var i1781 = i1771[27]
  var i1780 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.add(request.d('UnityEngine.TextCore.GlyphRect', i1781[i + 0]));
  }
  i1770.m_FreeGlyphRects = i1780
  i1770.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1771[28], i1770.m_fontInfo)
  i1770.m_AtlasWidth = i1771[29]
  i1770.m_AtlasHeight = i1771[30]
  i1770.m_AtlasPadding = i1771[31]
  i1770.m_AtlasRenderMode = i1771[32]
  var i1783 = i1771[33]
  var i1782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.add(request.d('TMPro.TMP_Glyph', i1783[i + 0]));
  }
  i1770.m_glyphInfoList = i1782
  i1770.m_KerningTable = request.d('TMPro.KerningTable', i1771[34], i1770.m_KerningTable)
  i1770.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1771[35], i1770.m_FontFeatureTable)
  var i1785 = i1771[36]
  var i1784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1785.length; i += 2) {
  request.r(i1785[i + 0], i1785[i + 1], 1, i1784, '')
  }
  i1770.fallbackFontAssets = i1784
  var i1787 = i1771[37]
  var i1786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1787.length; i += 2) {
  request.r(i1787[i + 0], i1787[i + 1], 1, i1786, '')
  }
  i1770.m_FallbackFontAssetTable = i1786
  i1770.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1771[38], i1770.m_CreationSettings)
  var i1789 = i1771[39]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( request.d('TMPro.TMP_FontWeightPair', i1789[i + 0]) );
  }
  i1770.m_FontWeightTable = i1788
  var i1791 = i1771[40]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('TMPro.TMP_FontWeightPair', i1791[i + 0]) );
  }
  i1770.fontWeights = i1790
  return i1770
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1792 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1793 = data
  i1792.m_FaceIndex = i1793[0]
  i1792.m_FamilyName = i1793[1]
  i1792.m_StyleName = i1793[2]
  i1792.m_PointSize = i1793[3]
  i1792.m_Scale = i1793[4]
  i1792.m_UnitsPerEM = i1793[5]
  i1792.m_LineHeight = i1793[6]
  i1792.m_AscentLine = i1793[7]
  i1792.m_CapLine = i1793[8]
  i1792.m_MeanLine = i1793[9]
  i1792.m_Baseline = i1793[10]
  i1792.m_DescentLine = i1793[11]
  i1792.m_SuperscriptOffset = i1793[12]
  i1792.m_SuperscriptSize = i1793[13]
  i1792.m_SubscriptOffset = i1793[14]
  i1792.m_SubscriptSize = i1793[15]
  i1792.m_UnderlineOffset = i1793[16]
  i1792.m_UnderlineThickness = i1793[17]
  i1792.m_StrikethroughOffset = i1793[18]
  i1792.m_StrikethroughThickness = i1793[19]
  i1792.m_TabWidth = i1793[20]
  return i1792
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1797 = data
  i1796.m_Index = i1797[0]
  i1796.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1797[1], i1796.m_Metrics)
  i1796.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1797[2], i1796.m_GlyphRect)
  i1796.m_Scale = i1797[3]
  i1796.m_AtlasIndex = i1797[4]
  i1796.m_ClassDefinitionType = i1797[5]
  return i1796
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1798 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1799 = data
  i1798.m_Width = i1799[0]
  i1798.m_Height = i1799[1]
  i1798.m_HorizontalBearingX = i1799[2]
  i1798.m_HorizontalBearingY = i1799[3]
  i1798.m_HorizontalAdvance = i1799[4]
  return i1798
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1801 = data
  i1800.m_X = i1801[0]
  i1800.m_Y = i1801[1]
  i1800.m_Width = i1801[2]
  i1800.m_Height = i1801[3]
  return i1800
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1804 = root || request.c( 'TMPro.TMP_Character' )
  var i1805 = data
  i1804.m_ElementType = i1805[0]
  i1804.m_Unicode = i1805[1]
  i1804.m_GlyphIndex = i1805[2]
  i1804.m_Scale = i1805[3]
  return i1804
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1810 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1811 = data
  i1810.Name = i1811[0]
  i1810.PointSize = i1811[1]
  i1810.Scale = i1811[2]
  i1810.CharacterCount = i1811[3]
  i1810.LineHeight = i1811[4]
  i1810.Baseline = i1811[5]
  i1810.Ascender = i1811[6]
  i1810.CapHeight = i1811[7]
  i1810.Descender = i1811[8]
  i1810.CenterLine = i1811[9]
  i1810.SuperscriptOffset = i1811[10]
  i1810.SubscriptOffset = i1811[11]
  i1810.SubSize = i1811[12]
  i1810.Underline = i1811[13]
  i1810.UnderlineThickness = i1811[14]
  i1810.strikethrough = i1811[15]
  i1810.strikethroughThickness = i1811[16]
  i1810.TabWidth = i1811[17]
  i1810.Padding = i1811[18]
  i1810.AtlasWidth = i1811[19]
  i1810.AtlasHeight = i1811[20]
  return i1810
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1814 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1815 = data
  i1814.id = i1815[0]
  i1814.x = i1815[1]
  i1814.y = i1815[2]
  i1814.width = i1815[3]
  i1814.height = i1815[4]
  i1814.xOffset = i1815[5]
  i1814.yOffset = i1815[6]
  i1814.xAdvance = i1815[7]
  i1814.scale = i1815[8]
  return i1814
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1816 = root || request.c( 'TMPro.KerningTable' )
  var i1817 = data
  var i1819 = i1817[0]
  var i1818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.add(request.d('TMPro.KerningPair', i1819[i + 0]));
  }
  i1816.kerningPairs = i1818
  return i1816
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1822 = root || request.c( 'TMPro.KerningPair' )
  var i1823 = data
  i1822.xOffset = i1823[0]
  i1822.m_FirstGlyph = i1823[1]
  i1822.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1823[2], i1822.m_FirstGlyphAdjustments)
  i1822.m_SecondGlyph = i1823[3]
  i1822.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1823[4], i1822.m_SecondGlyphAdjustments)
  i1822.m_IgnoreSpacingAdjustments = !!i1823[5]
  return i1822
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1824 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1825 = data
  var i1827 = i1825[0]
  var i1826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1827.length; i += 1) {
    i1826.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1827[i + 0]));
  }
  i1824.m_GlyphPairAdjustmentRecords = i1826
  return i1824
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1830 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1831 = data
  i1830.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1831[0], i1830.m_FirstAdjustmentRecord)
  i1830.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1831[1], i1830.m_SecondAdjustmentRecord)
  i1830.m_FeatureLookupFlags = i1831[2]
  return i1830
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1834 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1835 = data
  i1834.sourceFontFileName = i1835[0]
  i1834.sourceFontFileGUID = i1835[1]
  i1834.pointSizeSamplingMode = i1835[2]
  i1834.pointSize = i1835[3]
  i1834.padding = i1835[4]
  i1834.packingMode = i1835[5]
  i1834.atlasWidth = i1835[6]
  i1834.atlasHeight = i1835[7]
  i1834.characterSetSelectionMode = i1835[8]
  i1834.characterSequence = i1835[9]
  i1834.referencedFontAssetGUID = i1835[10]
  i1834.referencedTextAssetGUID = i1835[11]
  i1834.fontStyle = i1835[12]
  i1834.fontStyleModifier = i1835[13]
  i1834.renderMode = i1835[14]
  i1834.includeFontFeatures = !!i1835[15]
  return i1834
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1838 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1839 = data
  request.r(i1839[0], i1839[1], 0, i1838, 'regularTypeface')
  request.r(i1839[2], i1839[3], 0, i1838, 'italicTypeface')
  return i1838
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1840 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1841 = data
  i1840.useSafeMode = !!i1841[0]
  i1840.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1841[1], i1840.safeModeOptions)
  i1840.timeScale = i1841[2]
  i1840.unscaledTimeScale = i1841[3]
  i1840.useSmoothDeltaTime = !!i1841[4]
  i1840.maxSmoothUnscaledTime = i1841[5]
  i1840.rewindCallbackMode = i1841[6]
  i1840.showUnityEditorReport = !!i1841[7]
  i1840.logBehaviour = i1841[8]
  i1840.drawGizmos = !!i1841[9]
  i1840.defaultRecyclable = !!i1841[10]
  i1840.defaultAutoPlay = i1841[11]
  i1840.defaultUpdateType = i1841[12]
  i1840.defaultTimeScaleIndependent = !!i1841[13]
  i1840.defaultEaseType = i1841[14]
  i1840.defaultEaseOvershootOrAmplitude = i1841[15]
  i1840.defaultEasePeriod = i1841[16]
  i1840.defaultAutoKill = !!i1841[17]
  i1840.defaultLoopType = i1841[18]
  i1840.debugMode = !!i1841[19]
  i1840.debugStoreTargetId = !!i1841[20]
  i1840.showPreviewPanel = !!i1841[21]
  i1840.storeSettingsLocation = i1841[22]
  i1840.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1841[23], i1840.modules)
  i1840.createASMDEF = !!i1841[24]
  i1840.showPlayingTweens = !!i1841[25]
  i1840.showPausedTweens = !!i1841[26]
  return i1840
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1842 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1843 = data
  i1842.logBehaviour = i1843[0]
  i1842.nestedTweenFailureBehaviour = i1843[1]
  return i1842
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1844 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1845 = data
  i1844.showPanel = !!i1845[0]
  i1844.audioEnabled = !!i1845[1]
  i1844.physicsEnabled = !!i1845[2]
  i1844.physics2DEnabled = !!i1845[3]
  i1844.spriteEnabled = !!i1845[4]
  i1844.uiEnabled = !!i1845[5]
  i1844.textMeshProEnabled = !!i1845[6]
  i1844.tk2DEnabled = !!i1845[7]
  i1844.deAudioEnabled = !!i1845[8]
  i1844.deUnityExtendedEnabled = !!i1845[9]
  i1844.epoOutlineEnabled = !!i1845[10]
  return i1844
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1846 = root || request.c( 'TMPro.TMP_Settings' )
  var i1847 = data
  i1846.m_enableWordWrapping = !!i1847[0]
  i1846.m_enableKerning = !!i1847[1]
  i1846.m_enableExtraPadding = !!i1847[2]
  i1846.m_enableTintAllSprites = !!i1847[3]
  i1846.m_enableParseEscapeCharacters = !!i1847[4]
  i1846.m_EnableRaycastTarget = !!i1847[5]
  i1846.m_GetFontFeaturesAtRuntime = !!i1847[6]
  i1846.m_missingGlyphCharacter = i1847[7]
  i1846.m_warningsDisabled = !!i1847[8]
  request.r(i1847[9], i1847[10], 0, i1846, 'm_defaultFontAsset')
  i1846.m_defaultFontAssetPath = i1847[11]
  i1846.m_defaultFontSize = i1847[12]
  i1846.m_defaultAutoSizeMinRatio = i1847[13]
  i1846.m_defaultAutoSizeMaxRatio = i1847[14]
  i1846.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1847[15], i1847[16] )
  i1846.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1847[17], i1847[18] )
  i1846.m_autoSizeTextContainer = !!i1847[19]
  i1846.m_IsTextObjectScaleStatic = !!i1847[20]
  var i1849 = i1847[21]
  var i1848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1849.length; i += 2) {
  request.r(i1849[i + 0], i1849[i + 1], 1, i1848, '')
  }
  i1846.m_fallbackFontAssets = i1848
  i1846.m_matchMaterialPreset = !!i1847[22]
  request.r(i1847[23], i1847[24], 0, i1846, 'm_defaultSpriteAsset')
  i1846.m_defaultSpriteAssetPath = i1847[25]
  i1846.m_enableEmojiSupport = !!i1847[26]
  i1846.m_MissingCharacterSpriteUnicode = i1847[27]
  i1846.m_defaultColorGradientPresetsPath = i1847[28]
  request.r(i1847[29], i1847[30], 0, i1846, 'm_defaultStyleSheet')
  i1846.m_StyleSheetsResourcePath = i1847[31]
  request.r(i1847[32], i1847[33], 0, i1846, 'm_leadingCharacters')
  request.r(i1847[34], i1847[35], 0, i1846, 'm_followingCharacters')
  i1846.m_UseModernHangulLineBreakingRules = !!i1847[36]
  return i1846
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1850 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1851 = data
  request.r(i1851[0], i1851[1], 0, i1850, 'spriteSheet')
  var i1853 = i1851[2]
  var i1852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.add(request.d('TMPro.TMP_Sprite', i1853[i + 0]));
  }
  i1850.spriteInfoList = i1852
  var i1855 = i1851[3]
  var i1854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1855.length; i += 2) {
  request.r(i1855[i + 0], i1855[i + 1], 1, i1854, '')
  }
  i1850.fallbackSpriteAssets = i1854
  i1850.hashCode = i1851[4]
  request.r(i1851[5], i1851[6], 0, i1850, 'material')
  i1850.materialHashCode = i1851[7]
  i1850.m_Version = i1851[8]
  i1850.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1851[9], i1850.m_FaceInfo)
  var i1857 = i1851[10]
  var i1856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.add(request.d('TMPro.TMP_SpriteCharacter', i1857[i + 0]));
  }
  i1850.m_SpriteCharacterTable = i1856
  var i1859 = i1851[11]
  var i1858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.add(request.d('TMPro.TMP_SpriteGlyph', i1859[i + 0]));
  }
  i1850.m_SpriteGlyphTable = i1858
  return i1850
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1862 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1863 = data
  i1862.name = i1863[0]
  i1862.hashCode = i1863[1]
  i1862.unicode = i1863[2]
  i1862.pivot = new pc.Vec2( i1863[3], i1863[4] )
  request.r(i1863[5], i1863[6], 0, i1862, 'sprite')
  i1862.id = i1863[7]
  i1862.x = i1863[8]
  i1862.y = i1863[9]
  i1862.width = i1863[10]
  i1862.height = i1863[11]
  i1862.xOffset = i1863[12]
  i1862.yOffset = i1863[13]
  i1862.xAdvance = i1863[14]
  i1862.scale = i1863[15]
  return i1862
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1868 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1869 = data
  i1868.m_Name = i1869[0]
  i1868.m_HashCode = i1869[1]
  i1868.m_ElementType = i1869[2]
  i1868.m_Unicode = i1869[3]
  i1868.m_GlyphIndex = i1869[4]
  i1868.m_Scale = i1869[5]
  return i1868
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1872 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1873 = data
  request.r(i1873[0], i1873[1], 0, i1872, 'sprite')
  i1872.m_Index = i1873[2]
  i1872.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1873[3], i1872.m_Metrics)
  i1872.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1873[4], i1872.m_GlyphRect)
  i1872.m_Scale = i1873[5]
  i1872.m_AtlasIndex = i1873[6]
  i1872.m_ClassDefinitionType = i1873[7]
  return i1872
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1874 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1875 = data
  var i1877 = i1875[0]
  var i1876 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.add(request.d('TMPro.TMP_Style', i1877[i + 0]));
  }
  i1874.m_StyleList = i1876
  return i1874
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1880 = root || request.c( 'TMPro.TMP_Style' )
  var i1881 = data
  i1880.m_Name = i1881[0]
  i1880.m_HashCode = i1881[1]
  i1880.m_OpeningDefinition = i1881[2]
  i1880.m_ClosingDefinition = i1881[3]
  i1880.m_OpeningTagArray = i1881[4]
  i1880.m_ClosingTagArray = i1881[5]
  i1880.m_OpeningTagUnicodeArray = i1881[6]
  i1880.m_ClosingTagUnicodeArray = i1881[7]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1883 = data
  var i1885 = i1883[0]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1885[i + 0]) );
  }
  i1882.files = i1884
  i1882.componentToPrefabIds = i1883[1]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1889 = data
  i1888.path = i1889[0]
  request.r(i1889[1], i1889[2], 0, i1888, 'unityObject')
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1891 = data
  var i1893 = i1891[0]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1893[i + 0]) );
  }
  i1890.scriptsExecutionOrder = i1892
  var i1895 = i1891[1]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1895[i + 0]) );
  }
  i1890.sortingLayers = i1894
  var i1897 = i1891[2]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1897[i + 0]) );
  }
  i1890.cullingLayers = i1896
  i1890.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1891[3], i1890.timeSettings)
  i1890.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1891[4], i1890.physicsSettings)
  i1890.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1891[5], i1890.physics2DSettings)
  i1890.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1891[6], i1890.qualitySettings)
  i1890.enableRealtimeShadows = !!i1891[7]
  i1890.enableAutoInstancing = !!i1891[8]
  i1890.enableStaticBatching = !!i1891[9]
  i1890.enableDynamicBatching = !!i1891[10]
  i1890.lightmapEncodingQuality = i1891[11]
  i1890.desiredColorSpace = i1891[12]
  var i1899 = i1891[13]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( i1899[i + 0] );
  }
  i1890.allTags = i1898
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1903 = data
  i1902.name = i1903[0]
  i1902.value = i1903[1]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1907 = data
  i1906.id = i1907[0]
  i1906.name = i1907[1]
  i1906.value = i1907[2]
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1911 = data
  i1910.id = i1911[0]
  i1910.name = i1911[1]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1913 = data
  i1912.fixedDeltaTime = i1913[0]
  i1912.maximumDeltaTime = i1913[1]
  i1912.timeScale = i1913[2]
  i1912.maximumParticleTimestep = i1913[3]
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1915 = data
  i1914.gravity = new pc.Vec3( i1915[0], i1915[1], i1915[2] )
  i1914.defaultSolverIterations = i1915[3]
  i1914.bounceThreshold = i1915[4]
  i1914.autoSyncTransforms = !!i1915[5]
  i1914.autoSimulation = !!i1915[6]
  var i1917 = i1915[7]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1917[i + 0]) );
  }
  i1914.collisionMatrix = i1916
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1921 = data
  i1920.enabled = !!i1921[0]
  i1920.layerId = i1921[1]
  i1920.otherLayerId = i1921[2]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1923 = data
  request.r(i1923[0], i1923[1], 0, i1922, 'material')
  i1922.gravity = new pc.Vec2( i1923[2], i1923[3] )
  i1922.positionIterations = i1923[4]
  i1922.velocityIterations = i1923[5]
  i1922.velocityThreshold = i1923[6]
  i1922.maxLinearCorrection = i1923[7]
  i1922.maxAngularCorrection = i1923[8]
  i1922.maxTranslationSpeed = i1923[9]
  i1922.maxRotationSpeed = i1923[10]
  i1922.baumgarteScale = i1923[11]
  i1922.baumgarteTOIScale = i1923[12]
  i1922.timeToSleep = i1923[13]
  i1922.linearSleepTolerance = i1923[14]
  i1922.angularSleepTolerance = i1923[15]
  i1922.defaultContactOffset = i1923[16]
  i1922.autoSimulation = !!i1923[17]
  i1922.queriesHitTriggers = !!i1923[18]
  i1922.queriesStartInColliders = !!i1923[19]
  i1922.callbacksOnDisable = !!i1923[20]
  i1922.reuseCollisionCallbacks = !!i1923[21]
  i1922.autoSyncTransforms = !!i1923[22]
  var i1925 = i1923[23]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1925[i + 0]) );
  }
  i1922.collisionMatrix = i1924
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1929 = data
  i1928.enabled = !!i1929[0]
  i1928.layerId = i1929[1]
  i1928.otherLayerId = i1929[2]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1931 = data
  var i1933 = i1931[0]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1933[i + 0]) );
  }
  i1930.qualityLevels = i1932
  var i1935 = i1931[1]
  var i1934 = []
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.push( i1935[i + 0] );
  }
  i1930.names = i1934
  i1930.shadows = i1931[2]
  i1930.anisotropicFiltering = i1931[3]
  i1930.antiAliasing = i1931[4]
  i1930.lodBias = i1931[5]
  i1930.shadowCascades = i1931[6]
  i1930.shadowDistance = i1931[7]
  i1930.shadowmaskMode = i1931[8]
  i1930.shadowProjection = i1931[9]
  i1930.shadowResolution = i1931[10]
  i1930.softParticles = !!i1931[11]
  i1930.softVegetation = !!i1931[12]
  i1930.activeColorSpace = i1931[13]
  i1930.desiredColorSpace = i1931[14]
  i1930.masterTextureLimit = i1931[15]
  i1930.maxQueuedFrames = i1931[16]
  i1930.particleRaycastBudget = i1931[17]
  i1930.pixelLightCount = i1931[18]
  i1930.realtimeReflectionProbes = !!i1931[19]
  i1930.shadowCascade2Split = i1931[20]
  i1930.shadowCascade4Split = new pc.Vec3( i1931[21], i1931[22], i1931[23] )
  i1930.streamingMipmapsActive = !!i1931[24]
  i1930.vSyncCount = i1931[25]
  i1930.asyncUploadBufferSize = i1931[26]
  i1930.asyncUploadTimeSlice = i1931[27]
  i1930.billboardsFaceCameraPosition = !!i1931[28]
  i1930.shadowNearPlaneOffset = i1931[29]
  i1930.streamingMipmapsMemoryBudget = i1931[30]
  i1930.maximumLODLevel = i1931[31]
  i1930.streamingMipmapsAddAllCameras = !!i1931[32]
  i1930.streamingMipmapsMaxLevelReduction = i1931[33]
  i1930.streamingMipmapsRenderersPerFrame = i1931[34]
  i1930.resolutionScalingFixedDPIFactor = i1931[35]
  i1930.streamingMipmapsMaxFileIORequests = i1931[36]
  i1930.currentQualityLevel = i1931[37]
  return i1930
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1938 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1939 = data
  i1938.xPlacement = i1939[0]
  i1938.yPlacement = i1939[1]
  i1938.xAdvance = i1939[2]
  i1938.yAdvance = i1939[3]
  return i1938
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1940 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1941 = data
  i1940.m_GlyphIndex = i1941[0]
  i1940.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1941[1], i1940.m_GlyphValueRecord)
  return i1940
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1942 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1943 = data
  i1942.m_XPlacement = i1943[0]
  i1942.m_YPlacement = i1943[1]
  i1942.m_XAdvance = i1943[2]
  i1942.m_YAdvance = i1943[3]
  return i1942
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[3],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[3],"75":[76],"77":[78],"79":[78],"9":[8],"80":[81],"82":[83],"84":[81],"85":[8],"86":[8],"11":[9],"18":[19,8],"87":[8],"10":[9],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"33":[8],"95":[8],"16":[19,8],"96":[8],"97":[8],"98":[8],"99":[8],"100":[19,8],"101":[8],"102":[6],"103":[6],"7":[6],"104":[6],"105":[3],"106":[3],"107":[108],"109":[3],"110":[111],"112":[8],"113":[19,8],"114":[76],"26":[19,8],"115":[116,76],"117":[76],"118":[76,119],"120":[53],"121":[61],"122":[111],"123":[124],"125":[8],"126":[76,8],"17":[8,19],"127":[8],"128":[19,8],"129":[76],"130":[19,8],"131":[8],"132":[81]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","DropZone","UnityEngine.PolygonCollider2D","UnityEngine.Sprite","ClickItem","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DraggableItem","UnityEngine.CanvasGroup","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "174.4";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BEQ_V18_NgocNDL_AnhPD";

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

Deserializers.buildID = "9e0ac832-7ad6-42b0-a60a-d78eb5c59def";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

