var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1434 = root || request.c( 'UnityEngine.JointSpring' )
  var i1435 = data
  i1434.spring = i1435[0]
  i1434.damper = i1435[1]
  i1434.targetPosition = i1435[2]
  return i1434
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1436 = root || request.c( 'UnityEngine.JointMotor' )
  var i1437 = data
  i1436.m_TargetVelocity = i1437[0]
  i1436.m_Force = i1437[1]
  i1436.m_FreeSpin = i1437[2]
  return i1436
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1438 = root || request.c( 'UnityEngine.JointLimits' )
  var i1439 = data
  i1438.m_Min = i1439[0]
  i1438.m_Max = i1439[1]
  i1438.m_Bounciness = i1439[2]
  i1438.m_BounceMinVelocity = i1439[3]
  i1438.m_ContactDistance = i1439[4]
  i1438.minBounce = i1439[5]
  i1438.maxBounce = i1439[6]
  return i1438
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1440 = root || request.c( 'UnityEngine.JointDrive' )
  var i1441 = data
  i1440.m_PositionSpring = i1441[0]
  i1440.m_PositionDamper = i1441[1]
  i1440.m_MaximumForce = i1441[2]
  i1440.m_UseAcceleration = i1441[3]
  return i1440
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1442 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1443 = data
  i1442.m_Spring = i1443[0]
  i1442.m_Damper = i1443[1]
  return i1442
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1444 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1445 = data
  i1444.m_Limit = i1445[0]
  i1444.m_Bounciness = i1445[1]
  i1444.m_ContactDistance = i1445[2]
  return i1444
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1446 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1447 = data
  i1446.m_ExtremumSlip = i1447[0]
  i1446.m_ExtremumValue = i1447[1]
  i1446.m_AsymptoteSlip = i1447[2]
  i1446.m_AsymptoteValue = i1447[3]
  i1446.m_Stiffness = i1447[4]
  return i1446
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1448 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1449 = data
  i1448.m_LowerAngle = i1449[0]
  i1448.m_UpperAngle = i1449[1]
  return i1448
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1450 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1451 = data
  i1450.m_MotorSpeed = i1451[0]
  i1450.m_MaximumMotorTorque = i1451[1]
  return i1450
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1452 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1453 = data
  i1452.m_DampingRatio = i1453[0]
  i1452.m_Frequency = i1453[1]
  i1452.m_Angle = i1453[2]
  return i1452
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1454 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1455 = data
  i1454.m_LowerTranslation = i1455[0]
  i1454.m_UpperTranslation = i1455[1]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1457 = data
  i1456.name = i1457[0]
  i1456.width = i1457[1]
  i1456.height = i1457[2]
  i1456.mipmapCount = i1457[3]
  i1456.anisoLevel = i1457[4]
  i1456.filterMode = i1457[5]
  i1456.hdr = !!i1457[6]
  i1456.format = i1457[7]
  i1456.wrapMode = i1457[8]
  i1456.alphaIsTransparency = !!i1457[9]
  i1456.alphaSource = i1457[10]
  i1456.graphicsFormat = i1457[11]
  i1456.sRGBTexture = !!i1457[12]
  i1456.desiredColorSpace = i1457[13]
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1458 = root || new pc.UnityMaterial()
  var i1459 = data
  i1458.name = i1459[0]
  request.r(i1459[1], i1459[2], 0, i1458, 'shader')
  i1458.renderQueue = i1459[3]
  i1458.enableInstancing = !!i1459[4]
  var i1461 = i1459[5]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1461[i + 0]) );
  }
  i1458.floatParameters = i1460
  var i1463 = i1459[6]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1463[i + 0]) );
  }
  i1458.colorParameters = i1462
  var i1465 = i1459[7]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1465[i + 0]) );
  }
  i1458.vectorParameters = i1464
  var i1467 = i1459[8]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1467[i + 0]) );
  }
  i1458.textureParameters = i1466
  var i1469 = i1459[9]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1469[i + 0]) );
  }
  i1458.materialFlags = i1468
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1473 = data
  i1472.name = i1473[0]
  i1472.value = i1473[1]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1477 = data
  i1476.name = i1477[0]
  i1476.value = new pc.Color(i1477[1], i1477[2], i1477[3], i1477[4])
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1481 = data
  i1480.name = i1481[0]
  i1480.value = new pc.Vec4( i1481[1], i1481[2], i1481[3], i1481[4] )
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1485 = data
  i1484.name = i1485[0]
  request.r(i1485[1], i1485[2], 0, i1484, 'value')
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1489 = data
  i1488.name = i1489[0]
  i1488.enabled = !!i1489[1]
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1491 = data
  i1490.name = i1491[0]
  i1490.index = i1491[1]
  i1490.startup = !!i1491[2]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1493 = data
  i1492.position = new pc.Vec3( i1493[0], i1493[1], i1493[2] )
  i1492.scale = new pc.Vec3( i1493[3], i1493[4], i1493[5] )
  i1492.rotation = new pc.Quat(i1493[6], i1493[7], i1493[8], i1493[9])
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1495 = data
  i1494.enabled = !!i1495[0]
  i1494.aspect = i1495[1]
  i1494.orthographic = !!i1495[2]
  i1494.orthographicSize = i1495[3]
  i1494.backgroundColor = new pc.Color(i1495[4], i1495[5], i1495[6], i1495[7])
  i1494.nearClipPlane = i1495[8]
  i1494.farClipPlane = i1495[9]
  i1494.fieldOfView = i1495[10]
  i1494.depth = i1495[11]
  i1494.clearFlags = i1495[12]
  i1494.cullingMask = i1495[13]
  i1494.rect = i1495[14]
  request.r(i1495[15], i1495[16], 0, i1494, 'targetTexture')
  i1494.usePhysicalProperties = !!i1495[17]
  i1494.focalLength = i1495[18]
  i1494.sensorSize = new pc.Vec2( i1495[19], i1495[20] )
  i1494.lensShift = new pc.Vec2( i1495[21], i1495[22] )
  i1494.gateFit = i1495[23]
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1497 = data
  i1496.name = i1497[0]
  i1496.tagId = i1497[1]
  i1496.enabled = !!i1497[2]
  i1496.isStatic = !!i1497[3]
  i1496.layer = i1497[4]
  return i1496
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1498 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1499 = data
  request.r(i1499[0], i1499[1], 0, i1498, 'm_FirstSelected')
  i1498.m_sendNavigationEvents = !!i1499[2]
  i1498.m_DragThreshold = i1499[3]
  return i1498
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1500 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1501 = data
  i1500.m_HorizontalAxis = i1501[0]
  i1500.m_VerticalAxis = i1501[1]
  i1500.m_SubmitButton = i1501[2]
  i1500.m_CancelButton = i1501[3]
  i1500.m_InputActionsPerSecond = i1501[4]
  i1500.m_RepeatDelay = i1501[5]
  i1500.m_ForceModuleActive = !!i1501[6]
  i1500.m_SendPointerHoverToParent = !!i1501[7]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1503 = data
  i1502.pivot = new pc.Vec2( i1503[0], i1503[1] )
  i1502.anchorMin = new pc.Vec2( i1503[2], i1503[3] )
  i1502.anchorMax = new pc.Vec2( i1503[4], i1503[5] )
  i1502.sizeDelta = new pc.Vec2( i1503[6], i1503[7] )
  i1502.anchoredPosition3D = new pc.Vec3( i1503[8], i1503[9], i1503[10] )
  i1502.rotation = new pc.Quat(i1503[11], i1503[12], i1503[13], i1503[14])
  i1502.scale = new pc.Vec3( i1503[15], i1503[16], i1503[17] )
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1505 = data
  i1504.enabled = !!i1505[0]
  i1504.planeDistance = i1505[1]
  i1504.referencePixelsPerUnit = i1505[2]
  i1504.isFallbackOverlay = !!i1505[3]
  i1504.renderMode = i1505[4]
  i1504.renderOrder = i1505[5]
  i1504.sortingLayerName = i1505[6]
  i1504.sortingOrder = i1505[7]
  i1504.scaleFactor = i1505[8]
  request.r(i1505[9], i1505[10], 0, i1504, 'worldCamera')
  i1504.overrideSorting = !!i1505[11]
  i1504.pixelPerfect = !!i1505[12]
  i1504.targetDisplay = i1505[13]
  i1504.overridePixelPerfect = !!i1505[14]
  return i1504
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1506 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1507 = data
  i1506.m_UiScaleMode = i1507[0]
  i1506.m_ReferencePixelsPerUnit = i1507[1]
  i1506.m_ScaleFactor = i1507[2]
  i1506.m_ReferenceResolution = new pc.Vec2( i1507[3], i1507[4] )
  i1506.m_ScreenMatchMode = i1507[5]
  i1506.m_MatchWidthOrHeight = i1507[6]
  i1506.m_PhysicalUnit = i1507[7]
  i1506.m_FallbackScreenDPI = i1507[8]
  i1506.m_DefaultSpriteDPI = i1507[9]
  i1506.m_DynamicPixelsPerUnit = i1507[10]
  i1506.m_PresetInfoIsWorld = !!i1507[11]
  return i1506
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1508 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1509 = data
  i1508.m_IgnoreReversedGraphics = !!i1509[0]
  i1508.m_BlockingObjects = i1509[1]
  i1508.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1509[2] )
  return i1508
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1510 = root || request.c( 'LunaManager' )
  var i1511 = data
  var i1513 = i1511[0]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 2) {
  request.r(i1513[i + 0], i1513[i + 1], 2, i1512, '')
  }
  i1510.lstBtnInstall = i1512
  request.r(i1511[1], i1511[2], 0, i1510, 'StartCard')
  request.r(i1511[3], i1511[4], 0, i1510, 'EndCard')
  i1510.countPlay = i1511[5]
  i1510.countPlayFinal = i1511[6]
  i1510.countPlayMax = i1511[7]
  i1510.timeDropFinal = i1511[8]
  i1510.colorBG = new pc.Color(i1511[9], i1511[10], i1511[11], i1511[12])
  request.r(i1511[13], i1511[14], 0, i1510, 'texture2D')
  request.r(i1511[15], i1511[16], 0, i1510, 'rawImageBG')
  i1510.isHead = !!i1511[17]
  request.r(i1511[18], i1511[19], 0, i1510, 'textProgess')
  request.r(i1511[20], i1511[21], 0, i1510, 'imgProgess')
  request.r(i1511[22], i1511[23], 0, i1510, 'timeText')
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1517 = data
  i1516.cullTransparentMesh = !!i1517[0]
  return i1516
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1518 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1519 = data
  request.r(i1519[0], i1519[1], 0, i1518, 'm_Texture')
  i1518.m_UVRect = UnityEngine.Rect.MinMaxRect(i1519[2], i1519[3], i1519[4], i1519[5])
  request.r(i1519[6], i1519[7], 0, i1518, 'm_Material')
  i1518.m_Maskable = !!i1519[8]
  i1518.m_Color = new pc.Color(i1519[9], i1519[10], i1519[11], i1519[12])
  i1518.m_RaycastTarget = !!i1519[13]
  i1518.m_RaycastPadding = new pc.Vec4( i1519[14], i1519[15], i1519[16], i1519[17] )
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1521 = data
  request.r(i1521[0], i1521[1], 0, i1520, 'clip')
  request.r(i1521[2], i1521[3], 0, i1520, 'outputAudioMixerGroup')
  i1520.playOnAwake = !!i1521[4]
  i1520.loop = !!i1521[5]
  i1520.time = i1521[6]
  i1520.volume = i1521[7]
  i1520.pitch = i1521[8]
  i1520.enabled = !!i1521[9]
  return i1520
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1522 = root || request.c( 'UnityEngine.UI.Image' )
  var i1523 = data
  request.r(i1523[0], i1523[1], 0, i1522, 'm_Sprite')
  i1522.m_Type = i1523[2]
  i1522.m_PreserveAspect = !!i1523[3]
  i1522.m_FillCenter = !!i1523[4]
  i1522.m_FillMethod = i1523[5]
  i1522.m_FillAmount = i1523[6]
  i1522.m_FillClockwise = !!i1523[7]
  i1522.m_FillOrigin = i1523[8]
  i1522.m_UseSpriteMesh = !!i1523[9]
  i1522.m_PixelsPerUnitMultiplier = i1523[10]
  request.r(i1523[11], i1523[12], 0, i1522, 'm_Material')
  i1522.m_Maskable = !!i1523[13]
  i1522.m_Color = new pc.Color(i1523[14], i1523[15], i1523[16], i1523[17])
  i1522.m_RaycastTarget = !!i1523[18]
  i1522.m_RaycastPadding = new pc.Vec4( i1523[19], i1523[20], i1523[21], i1523[22] )
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1525 = data
  i1524.m_Alpha = i1525[0]
  i1524.m_Interactable = !!i1525[1]
  i1524.m_BlocksRaycasts = !!i1525[2]
  i1524.m_IgnoreParentGroups = !!i1525[3]
  i1524.enabled = !!i1525[4]
  return i1524
}

Deserializers["DragCustom"] = function (request, data, root) {
  var i1526 = root || request.c( 'DragCustom' )
  var i1527 = data
  i1526.idDrag = i1527[0]
  i1526.animationName = i1527[1]
  i1526.isProcess = !!i1527[2]
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1529 = data
  i1528.enabled = !!i1529[0]
  i1528.isTrigger = !!i1529[1]
  i1528.usedByEffector = !!i1529[2]
  i1528.density = i1529[3]
  i1528.offset = new pc.Vec2( i1529[4], i1529[5] )
  request.r(i1529[6], i1529[7], 0, i1528, 'material')
  i1528.usedByComposite = !!i1529[8]
  i1528.autoTiling = !!i1529[9]
  var i1531 = i1529[10]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 1) {
  var i1533 = i1531[i + 0]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 2) {
    i1532.push( new pc.Vec2( i1533[i + 0], i1533[i + 1] ) );
  }
    i1530.push( i1532 );
  }
  i1528.points = i1530
  return i1528
}

Deserializers["DropCustom"] = function (request, data, root) {
  var i1540 = root || request.c( 'DropCustom' )
  var i1541 = data
  i1540.idDrop = i1541[0]
  var i1543 = i1541[1]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 2) {
  request.r(i1543[i + 0], i1543[i + 1], 2, i1542, '')
  }
  i1540.steps = i1542
  request.r(i1541[2], i1541[3], 0, i1540, 'skeletonGraphic')
  i1540.animationNameDefault = i1541[4]
  request.r(i1541[5], i1541[6], 0, i1540, 'mixSkeletonSkin')
  return i1540
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1546 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1547 = data
  request.r(i1547[0], i1547[1], 0, i1546, 'skeletonDataAsset')
  request.r(i1547[2], i1547[3], 0, i1546, 'additiveMaterial')
  request.r(i1547[4], i1547[5], 0, i1546, 'multiplyMaterial')
  request.r(i1547[6], i1547[7], 0, i1546, 'screenMaterial')
  i1546.initialSkinName = i1547[8]
  i1546.initialFlipX = !!i1547[9]
  i1546.initialFlipY = !!i1547[10]
  i1546.startingAnimation = i1547[11]
  i1546.startingLoop = !!i1547[12]
  i1546.timeScale = i1547[13]
  i1546.freeze = !!i1547[14]
  i1546.layoutScaleMode = i1547[15]
  i1546.updateWhenInvisible = i1547[16]
  i1546.allowMultipleCanvasRenderers = !!i1547[17]
  var i1549 = i1547[18]
  var i1548 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1549.length; i += 2) {
  request.r(i1549[i + 0], i1549[i + 1], 1, i1548, '')
  }
  i1546.canvasRenderers = i1548
  i1546.enableSeparatorSlots = !!i1547[19]
  i1546.updateSeparatorPartLocation = !!i1547[20]
  i1546.updateSeparatorPartScale = !!i1547[21]
  i1546.disableMeshAssignmentOnOverride = !!i1547[22]
  i1546.referenceSize = new pc.Vec2( i1547[23], i1547[24] )
  i1546.referenceScale = i1547[25]
  i1546.rectTransformSize = new pc.Vec2( i1547[26], i1547[27] )
  i1546.editReferenceRect = !!i1547[28]
  var i1551 = i1547[29]
  var i1550 = []
  for(var i = 0; i < i1551.length; i += 1) {
    i1550.push( i1551[i + 0] );
  }
  i1546.separatorSlotNames = i1550
  var i1553 = i1547[30]
  var i1552 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1553.length; i += 2) {
  request.r(i1553[i + 0], i1553[i + 1], 1, i1552, '')
  }
  i1546.separatorParts = i1552
  i1546.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1547[31], i1546.meshGenerator)
  i1546.updateTiming = i1547[32]
  i1546.unscaledTime = !!i1547[33]
  request.r(i1547[34], i1547[35], 0, i1546, 'm_Material')
  i1546.m_Maskable = !!i1547[36]
  i1546.m_Color = new pc.Color(i1547[37], i1547[38], i1547[39], i1547[40])
  i1546.m_RaycastTarget = !!i1547[41]
  i1546.m_RaycastPadding = new pc.Vec4( i1547[42], i1547[43], i1547[44], i1547[45] )
  return i1546
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1560 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1561 = data
  i1560.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1561[0], i1560.settings)
  return i1560
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1562 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1563 = data
  i1562.useClipping = !!i1563[0]
  i1562.zSpacing = i1563[1]
  i1562.pmaVertexColors = !!i1563[2]
  i1562.tintBlack = !!i1563[3]
  i1562.canvasGroupTintBlack = !!i1563[4]
  i1562.calculateTangents = !!i1563[5]
  i1562.addNormals = !!i1563[6]
  i1562.immutableTriangles = !!i1563[7]
  return i1562
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1564 = root || request.c( 'UnityEngine.UI.Button' )
  var i1565 = data
  i1564.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1565[0], i1564.m_OnClick)
  i1564.m_Navigation = request.d('UnityEngine.UI.Navigation', i1565[1], i1564.m_Navigation)
  i1564.m_Transition = i1565[2]
  i1564.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1565[3], i1564.m_Colors)
  i1564.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1565[4], i1564.m_SpriteState)
  i1564.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1565[5], i1564.m_AnimationTriggers)
  i1564.m_Interactable = !!i1565[6]
  request.r(i1565[7], i1565[8], 0, i1564, 'm_TargetGraphic')
  return i1564
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1566 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1567 = data
  i1566.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1567[0], i1566.m_PersistentCalls)
  return i1566
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1568 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1569 = data
  var i1571 = i1569[0]
  var i1570 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1571.length; i += 1) {
    i1570.add(request.d('UnityEngine.Events.PersistentCall', i1571[i + 0]));
  }
  i1568.m_Calls = i1570
  return i1568
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1574 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1575 = data
  request.r(i1575[0], i1575[1], 0, i1574, 'm_Target')
  i1574.m_TargetAssemblyTypeName = i1575[2]
  i1574.m_MethodName = i1575[3]
  i1574.m_Mode = i1575[4]
  i1574.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1575[5], i1574.m_Arguments)
  i1574.m_CallState = i1575[6]
  return i1574
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1576 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1577 = data
  request.r(i1577[0], i1577[1], 0, i1576, 'm_ObjectArgument')
  i1576.m_ObjectArgumentAssemblyTypeName = i1577[2]
  i1576.m_IntArgument = i1577[3]
  i1576.m_FloatArgument = i1577[4]
  i1576.m_StringArgument = i1577[5]
  i1576.m_BoolArgument = !!i1577[6]
  return i1576
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1578 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1579 = data
  i1578.m_Mode = i1579[0]
  i1578.m_WrapAround = !!i1579[1]
  request.r(i1579[2], i1579[3], 0, i1578, 'm_SelectOnUp')
  request.r(i1579[4], i1579[5], 0, i1578, 'm_SelectOnDown')
  request.r(i1579[6], i1579[7], 0, i1578, 'm_SelectOnLeft')
  request.r(i1579[8], i1579[9], 0, i1578, 'm_SelectOnRight')
  return i1578
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1580 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1581 = data
  i1580.m_NormalColor = new pc.Color(i1581[0], i1581[1], i1581[2], i1581[3])
  i1580.m_HighlightedColor = new pc.Color(i1581[4], i1581[5], i1581[6], i1581[7])
  i1580.m_PressedColor = new pc.Color(i1581[8], i1581[9], i1581[10], i1581[11])
  i1580.m_SelectedColor = new pc.Color(i1581[12], i1581[13], i1581[14], i1581[15])
  i1580.m_DisabledColor = new pc.Color(i1581[16], i1581[17], i1581[18], i1581[19])
  i1580.m_ColorMultiplier = i1581[20]
  i1580.m_FadeDuration = i1581[21]
  return i1580
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1582 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1583 = data
  request.r(i1583[0], i1583[1], 0, i1582, 'm_HighlightedSprite')
  request.r(i1583[2], i1583[3], 0, i1582, 'm_PressedSprite')
  request.r(i1583[4], i1583[5], 0, i1582, 'm_SelectedSprite')
  request.r(i1583[6], i1583[7], 0, i1582, 'm_DisabledSprite')
  return i1582
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1585 = data
  i1584.m_NormalTrigger = i1585[0]
  i1584.m_HighlightedTrigger = i1585[1]
  i1584.m_PressedTrigger = i1585[2]
  i1584.m_SelectedTrigger = i1585[3]
  i1584.m_DisabledTrigger = i1585[4]
  return i1584
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i1586 = root || request.c( 'MixSkeletonSkin' )
  var i1587 = data
  request.r(i1587[0], i1587[1], 0, i1586, 'skeletonAnimation')
  var i1589 = i1587[2]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( i1589[i + 0] );
  }
  i1586.skinNames = i1588
  return i1586
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i1590 = root || request.c( 'ClickItem' )
  var i1591 = data
  var i1593 = i1591[0]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 2) {
  request.r(i1593[i + 0], i1593[i + 1], 2, i1592, '')
  }
  i1590.steps = i1592
  i1590.currentStep = i1591[1]
  i1590.isProcess = !!i1591[2]
  return i1590
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1594 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1595 = data
  i1594.m_hasFontAssetChanged = !!i1595[0]
  request.r(i1595[1], i1595[2], 0, i1594, 'm_baseMaterial')
  i1594.m_maskOffset = new pc.Vec4( i1595[3], i1595[4], i1595[5], i1595[6] )
  i1594.m_text = i1595[7]
  i1594.m_isRightToLeft = !!i1595[8]
  request.r(i1595[9], i1595[10], 0, i1594, 'm_fontAsset')
  request.r(i1595[11], i1595[12], 0, i1594, 'm_sharedMaterial')
  var i1597 = i1595[13]
  var i1596 = []
  for(var i = 0; i < i1597.length; i += 2) {
  request.r(i1597[i + 0], i1597[i + 1], 2, i1596, '')
  }
  i1594.m_fontSharedMaterials = i1596
  request.r(i1595[14], i1595[15], 0, i1594, 'm_fontMaterial')
  var i1599 = i1595[16]
  var i1598 = []
  for(var i = 0; i < i1599.length; i += 2) {
  request.r(i1599[i + 0], i1599[i + 1], 2, i1598, '')
  }
  i1594.m_fontMaterials = i1598
  i1594.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1595[17], i1595[18], i1595[19], i1595[20])
  i1594.m_fontColor = new pc.Color(i1595[21], i1595[22], i1595[23], i1595[24])
  i1594.m_enableVertexGradient = !!i1595[25]
  i1594.m_colorMode = i1595[26]
  i1594.m_fontColorGradient = request.d('TMPro.VertexGradient', i1595[27], i1594.m_fontColorGradient)
  request.r(i1595[28], i1595[29], 0, i1594, 'm_fontColorGradientPreset')
  request.r(i1595[30], i1595[31], 0, i1594, 'm_spriteAsset')
  i1594.m_tintAllSprites = !!i1595[32]
  request.r(i1595[33], i1595[34], 0, i1594, 'm_StyleSheet')
  i1594.m_TextStyleHashCode = i1595[35]
  i1594.m_overrideHtmlColors = !!i1595[36]
  i1594.m_faceColor = UnityEngine.Color32.ConstructColor(i1595[37], i1595[38], i1595[39], i1595[40])
  i1594.m_fontSize = i1595[41]
  i1594.m_fontSizeBase = i1595[42]
  i1594.m_fontWeight = i1595[43]
  i1594.m_enableAutoSizing = !!i1595[44]
  i1594.m_fontSizeMin = i1595[45]
  i1594.m_fontSizeMax = i1595[46]
  i1594.m_fontStyle = i1595[47]
  i1594.m_HorizontalAlignment = i1595[48]
  i1594.m_VerticalAlignment = i1595[49]
  i1594.m_textAlignment = i1595[50]
  i1594.m_characterSpacing = i1595[51]
  i1594.m_wordSpacing = i1595[52]
  i1594.m_lineSpacing = i1595[53]
  i1594.m_lineSpacingMax = i1595[54]
  i1594.m_paragraphSpacing = i1595[55]
  i1594.m_charWidthMaxAdj = i1595[56]
  i1594.m_enableWordWrapping = !!i1595[57]
  i1594.m_wordWrappingRatios = i1595[58]
  i1594.m_overflowMode = i1595[59]
  request.r(i1595[60], i1595[61], 0, i1594, 'm_linkedTextComponent')
  request.r(i1595[62], i1595[63], 0, i1594, 'parentLinkedComponent')
  i1594.m_enableKerning = !!i1595[64]
  i1594.m_enableExtraPadding = !!i1595[65]
  i1594.checkPaddingRequired = !!i1595[66]
  i1594.m_isRichText = !!i1595[67]
  i1594.m_parseCtrlCharacters = !!i1595[68]
  i1594.m_isOrthographic = !!i1595[69]
  i1594.m_isCullingEnabled = !!i1595[70]
  i1594.m_horizontalMapping = i1595[71]
  i1594.m_verticalMapping = i1595[72]
  i1594.m_uvLineOffset = i1595[73]
  i1594.m_geometrySortingOrder = i1595[74]
  i1594.m_IsTextObjectScaleStatic = !!i1595[75]
  i1594.m_VertexBufferAutoSizeReduction = !!i1595[76]
  i1594.m_useMaxVisibleDescender = !!i1595[77]
  i1594.m_pageToDisplay = i1595[78]
  i1594.m_margin = new pc.Vec4( i1595[79], i1595[80], i1595[81], i1595[82] )
  i1594.m_isUsingLegacyAnimationComponent = !!i1595[83]
  i1594.m_isVolumetricText = !!i1595[84]
  request.r(i1595[85], i1595[86], 0, i1594, 'm_Material')
  i1594.m_Maskable = !!i1595[87]
  i1594.m_Color = new pc.Color(i1595[88], i1595[89], i1595[90], i1595[91])
  i1594.m_RaycastTarget = !!i1595[92]
  i1594.m_RaycastPadding = new pc.Vec4( i1595[93], i1595[94], i1595[95], i1595[96] )
  return i1594
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1602 = root || request.c( 'TMPro.VertexGradient' )
  var i1603 = data
  i1602.topLeft = new pc.Color(i1603[0], i1603[1], i1603[2], i1603[3])
  i1602.topRight = new pc.Color(i1603[4], i1603[5], i1603[6], i1603[7])
  i1602.bottomLeft = new pc.Color(i1603[8], i1603[9], i1603[10], i1603[11])
  i1602.bottomRight = new pc.Color(i1603[12], i1603[13], i1603[14], i1603[15])
  return i1602
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1604 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1605 = data
  i1604.targetIsSelf = !!i1605[0]
  request.r(i1605[1], i1605[2], 0, i1604, 'targetGO')
  i1604.tweenTargetIsTargetGO = !!i1605[3]
  i1604.delay = i1605[4]
  i1604.duration = i1605[5]
  i1604.easeType = i1605[6]
  i1604.easeCurve = new pc.AnimationCurve( { keys_flow: i1605[7] } )
  i1604.loopType = i1605[8]
  i1604.loops = i1605[9]
  i1604.id = i1605[10]
  i1604.isRelative = !!i1605[11]
  i1604.isFrom = !!i1605[12]
  i1604.isIndependentUpdate = !!i1605[13]
  i1604.autoKill = !!i1605[14]
  i1604.autoGenerate = !!i1605[15]
  i1604.isActive = !!i1605[16]
  i1604.isValid = !!i1605[17]
  request.r(i1605[18], i1605[19], 0, i1604, 'target')
  i1604.animationType = i1605[20]
  i1604.targetType = i1605[21]
  i1604.forcedTargetType = i1605[22]
  i1604.autoPlay = !!i1605[23]
  i1604.useTargetAsV3 = !!i1605[24]
  i1604.endValueFloat = i1605[25]
  i1604.endValueV3 = new pc.Vec3( i1605[26], i1605[27], i1605[28] )
  i1604.endValueV2 = new pc.Vec2( i1605[29], i1605[30] )
  i1604.endValueColor = new pc.Color(i1605[31], i1605[32], i1605[33], i1605[34])
  i1604.endValueString = i1605[35]
  i1604.endValueRect = UnityEngine.Rect.MinMaxRect(i1605[36], i1605[37], i1605[38], i1605[39])
  request.r(i1605[40], i1605[41], 0, i1604, 'endValueTransform')
  i1604.optionalBool0 = !!i1605[42]
  i1604.optionalBool1 = !!i1605[43]
  i1604.optionalFloat0 = i1605[44]
  i1604.optionalInt0 = i1605[45]
  i1604.optionalRotationMode = i1605[46]
  i1604.optionalScrambleMode = i1605[47]
  i1604.optionalShakeRandomnessMode = i1605[48]
  i1604.optionalString = i1605[49]
  i1604.updateType = i1605[50]
  i1604.isSpeedBased = !!i1605[51]
  i1604.hasOnStart = !!i1605[52]
  i1604.hasOnPlay = !!i1605[53]
  i1604.hasOnUpdate = !!i1605[54]
  i1604.hasOnStepComplete = !!i1605[55]
  i1604.hasOnComplete = !!i1605[56]
  i1604.hasOnTweenCreated = !!i1605[57]
  i1604.hasOnRewind = !!i1605[58]
  i1604.onStart = request.d('UnityEngine.Events.UnityEvent', i1605[59], i1604.onStart)
  i1604.onPlay = request.d('UnityEngine.Events.UnityEvent', i1605[60], i1604.onPlay)
  i1604.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1605[61], i1604.onUpdate)
  i1604.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1605[62], i1604.onStepComplete)
  i1604.onComplete = request.d('UnityEngine.Events.UnityEvent', i1605[63], i1604.onComplete)
  i1604.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1605[64], i1604.onTweenCreated)
  i1604.onRewind = request.d('UnityEngine.Events.UnityEvent', i1605[65], i1604.onRewind)
  return i1604
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1606 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1607 = data
  i1606.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1607[0], i1606.m_PersistentCalls)
  return i1606
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1609 = data
  i1608.m_ShowMaskGraphic = !!i1609[0]
  return i1608
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1610 = root || request.c( 'AudioController' )
  var i1611 = data
  request.r(i1611[0], i1611[1], 0, i1610, 'bgmSource')
  request.r(i1611[2], i1611[3], 0, i1610, 'sfxSource')
  var i1613 = i1611[4]
  var i1612 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.add(request.d('AudioEntry', i1613[i + 0]));
  }
  i1610.audioEntries = i1612
  return i1610
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i1616 = root || request.c( 'AudioEntry' )
  var i1617 = data
  i1616.key = i1617[0]
  request.r(i1617[1], i1617[2], 0, i1616, 'clip')
  i1616.volume = i1617[3]
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1619 = data
  i1618.ambientIntensity = i1619[0]
  i1618.reflectionIntensity = i1619[1]
  i1618.ambientMode = i1619[2]
  i1618.ambientLight = new pc.Color(i1619[3], i1619[4], i1619[5], i1619[6])
  i1618.ambientSkyColor = new pc.Color(i1619[7], i1619[8], i1619[9], i1619[10])
  i1618.ambientGroundColor = new pc.Color(i1619[11], i1619[12], i1619[13], i1619[14])
  i1618.ambientEquatorColor = new pc.Color(i1619[15], i1619[16], i1619[17], i1619[18])
  i1618.fogColor = new pc.Color(i1619[19], i1619[20], i1619[21], i1619[22])
  i1618.fogEndDistance = i1619[23]
  i1618.fogStartDistance = i1619[24]
  i1618.fogDensity = i1619[25]
  i1618.fog = !!i1619[26]
  request.r(i1619[27], i1619[28], 0, i1618, 'skybox')
  i1618.fogMode = i1619[29]
  var i1621 = i1619[30]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1621[i + 0]) );
  }
  i1618.lightmaps = i1620
  i1618.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1619[31], i1618.lightProbes)
  i1618.lightmapsMode = i1619[32]
  i1618.mixedBakeMode = i1619[33]
  i1618.environmentLightingMode = i1619[34]
  i1618.ambientProbe = new pc.SphericalHarmonicsL2(i1619[35])
  i1618.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1619[36])
  i1618.useReferenceAmbientProbe = !!i1619[37]
  request.r(i1619[38], i1619[39], 0, i1618, 'customReflection')
  request.r(i1619[40], i1619[41], 0, i1618, 'defaultReflection')
  i1618.defaultReflectionMode = i1619[42]
  i1618.defaultReflectionResolution = i1619[43]
  i1618.sunLightObjectId = i1619[44]
  i1618.pixelLightCount = i1619[45]
  i1618.defaultReflectionHDR = !!i1619[46]
  i1618.hasLightDataAsset = !!i1619[47]
  i1618.hasManualGenerate = !!i1619[48]
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1625 = data
  request.r(i1625[0], i1625[1], 0, i1624, 'lightmapColor')
  request.r(i1625[2], i1625[3], 0, i1624, 'lightmapDirection')
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1626 = root || new UnityEngine.LightProbes()
  var i1627 = data
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1635 = data
  var i1637 = i1635[0]
  var i1636 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1637[i + 0]));
  }
  i1634.ShaderCompilationErrors = i1636
  i1634.name = i1635[1]
  i1634.guid = i1635[2]
  var i1639 = i1635[3]
  var i1638 = []
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.push( i1639[i + 0] );
  }
  i1634.shaderDefinedKeywords = i1638
  var i1641 = i1635[4]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 1) {
    i1640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1641[i + 0]) );
  }
  i1634.passes = i1640
  var i1643 = i1635[5]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1643[i + 0]) );
  }
  i1634.usePasses = i1642
  var i1645 = i1635[6]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1645[i + 0]) );
  }
  i1634.defaultParameterValues = i1644
  request.r(i1635[7], i1635[8], 0, i1634, 'unityFallbackShader')
  i1634.readDepth = !!i1635[9]
  i1634.isCreatedByShaderGraph = !!i1635[10]
  i1634.usedBatchUniforms = i1635[11]
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1649 = data
  i1648.shaderName = i1649[0]
  i1648.errorMessage = i1649[1]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1652 = root || new pc.UnityShaderPass()
  var i1653 = data
  i1652.id = i1653[0]
  i1652.subShaderIndex = i1653[1]
  i1652.name = i1653[2]
  i1652.passType = i1653[3]
  i1652.grabPassTextureName = i1653[4]
  i1652.usePass = !!i1653[5]
  i1652.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[6], i1652.zTest)
  i1652.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[7], i1652.zWrite)
  i1652.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[8], i1652.culling)
  i1652.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1653[9], i1652.blending)
  i1652.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1653[10], i1652.alphaBlending)
  i1652.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[11], i1652.colorWriteMask)
  i1652.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[12], i1652.offsetUnits)
  i1652.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[13], i1652.offsetFactor)
  i1652.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[14], i1652.stencilRef)
  i1652.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[15], i1652.stencilReadMask)
  i1652.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[16], i1652.stencilWriteMask)
  i1652.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1653[17], i1652.stencilOp)
  i1652.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1653[18], i1652.stencilOpFront)
  i1652.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1653[19], i1652.stencilOpBack)
  var i1655 = i1653[20]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1655[i + 0]) );
  }
  i1652.tags = i1654
  var i1657 = i1653[21]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.push( i1657[i + 0] );
  }
  i1652.passDefinedKeywords = i1656
  var i1659 = i1653[22]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1659[i + 0]) );
  }
  i1652.passDefinedKeywordGroups = i1658
  var i1661 = i1653[23]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1661[i + 0]) );
  }
  i1652.variants = i1660
  var i1663 = i1653[24]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1663[i + 0]) );
  }
  i1652.excludedVariants = i1662
  i1652.hasDepthReader = !!i1653[25]
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1665 = data
  i1664.val = i1665[0]
  i1664.name = i1665[1]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1667 = data
  i1666.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1667[0], i1666.src)
  i1666.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1667[1], i1666.dst)
  i1666.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1667[2], i1666.op)
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1669 = data
  i1668.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1669[0], i1668.pass)
  i1668.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1669[1], i1668.fail)
  i1668.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1669[2], i1668.zFail)
  i1668.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1669[3], i1668.comp)
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1673 = data
  i1672.name = i1673[0]
  i1672.value = i1673[1]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1677 = data
  var i1679 = i1677[0]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.push( i1679[i + 0] );
  }
  i1676.keywords = i1678
  i1676.hasDiscard = !!i1677[1]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1683 = data
  i1682.passId = i1683[0]
  i1682.subShaderIndex = i1683[1]
  var i1685 = i1683[2]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( i1685[i + 0] );
  }
  i1682.keywords = i1684
  i1682.vertexProgram = i1683[3]
  i1682.fragmentProgram = i1683[4]
  i1682.compiledForWebGL2 = !!i1683[5]
  i1682.readDepth = !!i1683[6]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1689 = data
  request.r(i1689[0], i1689[1], 0, i1688, 'shader')
  i1688.pass = i1689[2]
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1693 = data
  i1692.name = i1693[0]
  i1692.type = i1693[1]
  i1692.value = new pc.Vec4( i1693[2], i1693[3], i1693[4], i1693[5] )
  i1692.textureValue = i1693[6]
  i1692.shaderPropertyFlag = i1693[7]
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1695 = data
  i1694.name = i1695[0]
  request.r(i1695[1], i1695[2], 0, i1694, 'texture')
  i1694.aabb = i1695[3]
  i1694.vertices = i1695[4]
  i1694.triangles = i1695[5]
  i1694.textureRect = UnityEngine.Rect.MinMaxRect(i1695[6], i1695[7], i1695[8], i1695[9])
  i1694.packedRect = UnityEngine.Rect.MinMaxRect(i1695[10], i1695[11], i1695[12], i1695[13])
  i1694.border = new pc.Vec4( i1695[14], i1695[15], i1695[16], i1695[17] )
  i1694.transparency = i1695[18]
  i1694.bounds = i1695[19]
  i1694.pixelsPerUnit = i1695[20]
  i1694.textureWidth = i1695[21]
  i1694.textureHeight = i1695[22]
  i1694.nativeSize = new pc.Vec2( i1695[23], i1695[24] )
  i1694.pivot = new pc.Vec2( i1695[25], i1695[26] )
  i1694.textureRectOffset = new pc.Vec2( i1695[27], i1695[28] )
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1697 = data
  i1696.name = i1697[0]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1699 = data
  i1698.name = i1699[0]
  i1698.ascent = i1699[1]
  i1698.originalLineHeight = i1699[2]
  i1698.fontSize = i1699[3]
  var i1701 = i1699[4]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1701[i + 0]) );
  }
  i1698.characterInfo = i1700
  request.r(i1699[5], i1699[6], 0, i1698, 'texture')
  i1698.originalFontSize = i1699[7]
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1705 = data
  i1704.index = i1705[0]
  i1704.advance = i1705[1]
  i1704.bearing = i1705[2]
  i1704.glyphWidth = i1705[3]
  i1704.glyphHeight = i1705[4]
  i1704.minX = i1705[5]
  i1704.maxX = i1705[6]
  i1704.minY = i1705[7]
  i1704.maxY = i1705[8]
  i1704.uvBottomLeftX = i1705[9]
  i1704.uvBottomLeftY = i1705[10]
  i1704.uvBottomRightX = i1705[11]
  i1704.uvBottomRightY = i1705[12]
  i1704.uvTopLeftX = i1705[13]
  i1704.uvTopLeftY = i1705[14]
  i1704.uvTopRightX = i1705[15]
  i1704.uvTopRightY = i1705[16]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1707 = data
  i1706.name = i1707[0]
  i1706.bytes64 = i1707[1]
  i1706.data = i1707[2]
  return i1706
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1708 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1709 = data
  var i1711 = i1709[0]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 2) {
  request.r(i1711[i + 0], i1711[i + 1], 2, i1710, '')
  }
  i1708.atlasAssets = i1710
  i1708.scale = i1709[1]
  request.r(i1709[2], i1709[3], 0, i1708, 'skeletonJSON')
  i1708.isUpgradingBlendModeMaterials = !!i1709[4]
  i1708.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1709[5], i1708.blendModeMaterials)
  var i1713 = i1709[6]
  var i1712 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1713.length; i += 2) {
  request.r(i1713[i + 0], i1713[i + 1], 1, i1712, '')
  }
  i1708.skeletonDataModifiers = i1712
  var i1715 = i1709[7]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.push( i1715[i + 0] );
  }
  i1708.fromAnimation = i1714
  var i1717 = i1709[8]
  var i1716 = []
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.push( i1717[i + 0] );
  }
  i1708.toAnimation = i1716
  i1708.duration = i1709[9]
  i1708.defaultMix = i1709[10]
  request.r(i1709[11], i1709[12], 0, i1708, 'controller')
  return i1708
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1720 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1721 = data
  i1720.applyAdditiveMaterial = !!i1721[0]
  var i1723 = i1721[1]
  var i1722 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1723[i + 0]));
  }
  i1720.additiveMaterials = i1722
  var i1725 = i1721[2]
  var i1724 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1725[i + 0]));
  }
  i1720.multiplyMaterials = i1724
  var i1727 = i1721[3]
  var i1726 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1727[i + 0]));
  }
  i1720.screenMaterials = i1726
  i1720.requiresBlendModeMaterials = !!i1721[4]
  return i1720
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1730 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1731 = data
  i1730.pageName = i1731[0]
  request.r(i1731[1], i1731[2], 0, i1730, 'material')
  return i1730
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1734 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1735 = data
  request.r(i1735[0], i1735[1], 0, i1734, 'atlasFile')
  var i1737 = i1735[2]
  var i1736 = []
  for(var i = 0; i < i1737.length; i += 2) {
  request.r(i1737[i + 0], i1737[i + 1], 2, i1736, '')
  }
  i1734.materials = i1736
  i1734.textureLoadingMode = i1735[3]
  request.r(i1735[4], i1735[5], 0, i1734, 'onDemandTextureLoader')
  return i1734
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1738 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1739 = data
  i1738.hashCode = i1739[0]
  request.r(i1739[1], i1739[2], 0, i1738, 'material')
  i1738.materialHashCode = i1739[3]
  request.r(i1739[4], i1739[5], 0, i1738, 'atlas')
  i1738.normalStyle = i1739[6]
  i1738.normalSpacingOffset = i1739[7]
  i1738.boldStyle = i1739[8]
  i1738.boldSpacing = i1739[9]
  i1738.italicStyle = i1739[10]
  i1738.tabSize = i1739[11]
  i1738.m_Version = i1739[12]
  i1738.m_SourceFontFileGUID = i1739[13]
  request.r(i1739[14], i1739[15], 0, i1738, 'm_SourceFontFile_EditorRef')
  request.r(i1739[16], i1739[17], 0, i1738, 'm_SourceFontFile')
  i1738.m_AtlasPopulationMode = i1739[18]
  i1738.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1739[19], i1738.m_FaceInfo)
  var i1741 = i1739[20]
  var i1740 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1741.length; i += 1) {
    i1740.add(request.d('UnityEngine.TextCore.Glyph', i1741[i + 0]));
  }
  i1738.m_GlyphTable = i1740
  var i1743 = i1739[21]
  var i1742 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.add(request.d('TMPro.TMP_Character', i1743[i + 0]));
  }
  i1738.m_CharacterTable = i1742
  var i1745 = i1739[22]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 2) {
  request.r(i1745[i + 0], i1745[i + 1], 2, i1744, '')
  }
  i1738.m_AtlasTextures = i1744
  i1738.m_AtlasTextureIndex = i1739[23]
  i1738.m_IsMultiAtlasTexturesEnabled = !!i1739[24]
  i1738.m_ClearDynamicDataOnBuild = !!i1739[25]
  var i1747 = i1739[26]
  var i1746 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.add(request.d('UnityEngine.TextCore.GlyphRect', i1747[i + 0]));
  }
  i1738.m_UsedGlyphRects = i1746
  var i1749 = i1739[27]
  var i1748 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.add(request.d('UnityEngine.TextCore.GlyphRect', i1749[i + 0]));
  }
  i1738.m_FreeGlyphRects = i1748
  i1738.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1739[28], i1738.m_fontInfo)
  i1738.m_AtlasWidth = i1739[29]
  i1738.m_AtlasHeight = i1739[30]
  i1738.m_AtlasPadding = i1739[31]
  i1738.m_AtlasRenderMode = i1739[32]
  var i1751 = i1739[33]
  var i1750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.add(request.d('TMPro.TMP_Glyph', i1751[i + 0]));
  }
  i1738.m_glyphInfoList = i1750
  i1738.m_KerningTable = request.d('TMPro.KerningTable', i1739[34], i1738.m_KerningTable)
  i1738.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1739[35], i1738.m_FontFeatureTable)
  var i1753 = i1739[36]
  var i1752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1753.length; i += 2) {
  request.r(i1753[i + 0], i1753[i + 1], 1, i1752, '')
  }
  i1738.fallbackFontAssets = i1752
  var i1755 = i1739[37]
  var i1754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1755.length; i += 2) {
  request.r(i1755[i + 0], i1755[i + 1], 1, i1754, '')
  }
  i1738.m_FallbackFontAssetTable = i1754
  i1738.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1739[38], i1738.m_CreationSettings)
  var i1757 = i1739[39]
  var i1756 = []
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.push( request.d('TMPro.TMP_FontWeightPair', i1757[i + 0]) );
  }
  i1738.m_FontWeightTable = i1756
  var i1759 = i1739[40]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.push( request.d('TMPro.TMP_FontWeightPair', i1759[i + 0]) );
  }
  i1738.fontWeights = i1758
  return i1738
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1760 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1761 = data
  i1760.m_FaceIndex = i1761[0]
  i1760.m_FamilyName = i1761[1]
  i1760.m_StyleName = i1761[2]
  i1760.m_PointSize = i1761[3]
  i1760.m_Scale = i1761[4]
  i1760.m_UnitsPerEM = i1761[5]
  i1760.m_LineHeight = i1761[6]
  i1760.m_AscentLine = i1761[7]
  i1760.m_CapLine = i1761[8]
  i1760.m_MeanLine = i1761[9]
  i1760.m_Baseline = i1761[10]
  i1760.m_DescentLine = i1761[11]
  i1760.m_SuperscriptOffset = i1761[12]
  i1760.m_SuperscriptSize = i1761[13]
  i1760.m_SubscriptOffset = i1761[14]
  i1760.m_SubscriptSize = i1761[15]
  i1760.m_UnderlineOffset = i1761[16]
  i1760.m_UnderlineThickness = i1761[17]
  i1760.m_StrikethroughOffset = i1761[18]
  i1760.m_StrikethroughThickness = i1761[19]
  i1760.m_TabWidth = i1761[20]
  return i1760
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1764 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1765 = data
  i1764.m_Index = i1765[0]
  i1764.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1765[1], i1764.m_Metrics)
  i1764.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1765[2], i1764.m_GlyphRect)
  i1764.m_Scale = i1765[3]
  i1764.m_AtlasIndex = i1765[4]
  i1764.m_ClassDefinitionType = i1765[5]
  return i1764
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1766 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1767 = data
  i1766.m_Width = i1767[0]
  i1766.m_Height = i1767[1]
  i1766.m_HorizontalBearingX = i1767[2]
  i1766.m_HorizontalBearingY = i1767[3]
  i1766.m_HorizontalAdvance = i1767[4]
  return i1766
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1768 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1769 = data
  i1768.m_X = i1769[0]
  i1768.m_Y = i1769[1]
  i1768.m_Width = i1769[2]
  i1768.m_Height = i1769[3]
  return i1768
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1772 = root || request.c( 'TMPro.TMP_Character' )
  var i1773 = data
  i1772.m_ElementType = i1773[0]
  i1772.m_Unicode = i1773[1]
  i1772.m_GlyphIndex = i1773[2]
  i1772.m_Scale = i1773[3]
  return i1772
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1778 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1779 = data
  i1778.Name = i1779[0]
  i1778.PointSize = i1779[1]
  i1778.Scale = i1779[2]
  i1778.CharacterCount = i1779[3]
  i1778.LineHeight = i1779[4]
  i1778.Baseline = i1779[5]
  i1778.Ascender = i1779[6]
  i1778.CapHeight = i1779[7]
  i1778.Descender = i1779[8]
  i1778.CenterLine = i1779[9]
  i1778.SuperscriptOffset = i1779[10]
  i1778.SubscriptOffset = i1779[11]
  i1778.SubSize = i1779[12]
  i1778.Underline = i1779[13]
  i1778.UnderlineThickness = i1779[14]
  i1778.strikethrough = i1779[15]
  i1778.strikethroughThickness = i1779[16]
  i1778.TabWidth = i1779[17]
  i1778.Padding = i1779[18]
  i1778.AtlasWidth = i1779[19]
  i1778.AtlasHeight = i1779[20]
  return i1778
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1782 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1783 = data
  i1782.id = i1783[0]
  i1782.x = i1783[1]
  i1782.y = i1783[2]
  i1782.width = i1783[3]
  i1782.height = i1783[4]
  i1782.xOffset = i1783[5]
  i1782.yOffset = i1783[6]
  i1782.xAdvance = i1783[7]
  i1782.scale = i1783[8]
  return i1782
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1784 = root || request.c( 'TMPro.KerningTable' )
  var i1785 = data
  var i1787 = i1785[0]
  var i1786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.add(request.d('TMPro.KerningPair', i1787[i + 0]));
  }
  i1784.kerningPairs = i1786
  return i1784
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1790 = root || request.c( 'TMPro.KerningPair' )
  var i1791 = data
  i1790.xOffset = i1791[0]
  i1790.m_FirstGlyph = i1791[1]
  i1790.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1791[2], i1790.m_FirstGlyphAdjustments)
  i1790.m_SecondGlyph = i1791[3]
  i1790.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1791[4], i1790.m_SecondGlyphAdjustments)
  i1790.m_IgnoreSpacingAdjustments = !!i1791[5]
  return i1790
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1792 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1793 = data
  var i1795 = i1793[0]
  var i1794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1795.length; i += 1) {
    i1794.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1795[i + 0]));
  }
  i1792.m_GlyphPairAdjustmentRecords = i1794
  return i1792
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1798 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1799 = data
  i1798.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1799[0], i1798.m_FirstAdjustmentRecord)
  i1798.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1799[1], i1798.m_SecondAdjustmentRecord)
  i1798.m_FeatureLookupFlags = i1799[2]
  return i1798
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1802 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1803 = data
  i1802.sourceFontFileName = i1803[0]
  i1802.sourceFontFileGUID = i1803[1]
  i1802.pointSizeSamplingMode = i1803[2]
  i1802.pointSize = i1803[3]
  i1802.padding = i1803[4]
  i1802.packingMode = i1803[5]
  i1802.atlasWidth = i1803[6]
  i1802.atlasHeight = i1803[7]
  i1802.characterSetSelectionMode = i1803[8]
  i1802.characterSequence = i1803[9]
  i1802.referencedFontAssetGUID = i1803[10]
  i1802.referencedTextAssetGUID = i1803[11]
  i1802.fontStyle = i1803[12]
  i1802.fontStyleModifier = i1803[13]
  i1802.renderMode = i1803[14]
  i1802.includeFontFeatures = !!i1803[15]
  return i1802
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1806 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1807 = data
  request.r(i1807[0], i1807[1], 0, i1806, 'regularTypeface')
  request.r(i1807[2], i1807[3], 0, i1806, 'italicTypeface')
  return i1806
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1808 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1809 = data
  i1808.useSafeMode = !!i1809[0]
  i1808.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1809[1], i1808.safeModeOptions)
  i1808.timeScale = i1809[2]
  i1808.unscaledTimeScale = i1809[3]
  i1808.useSmoothDeltaTime = !!i1809[4]
  i1808.maxSmoothUnscaledTime = i1809[5]
  i1808.rewindCallbackMode = i1809[6]
  i1808.showUnityEditorReport = !!i1809[7]
  i1808.logBehaviour = i1809[8]
  i1808.drawGizmos = !!i1809[9]
  i1808.defaultRecyclable = !!i1809[10]
  i1808.defaultAutoPlay = i1809[11]
  i1808.defaultUpdateType = i1809[12]
  i1808.defaultTimeScaleIndependent = !!i1809[13]
  i1808.defaultEaseType = i1809[14]
  i1808.defaultEaseOvershootOrAmplitude = i1809[15]
  i1808.defaultEasePeriod = i1809[16]
  i1808.defaultAutoKill = !!i1809[17]
  i1808.defaultLoopType = i1809[18]
  i1808.debugMode = !!i1809[19]
  i1808.debugStoreTargetId = !!i1809[20]
  i1808.showPreviewPanel = !!i1809[21]
  i1808.storeSettingsLocation = i1809[22]
  i1808.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1809[23], i1808.modules)
  i1808.createASMDEF = !!i1809[24]
  i1808.showPlayingTweens = !!i1809[25]
  i1808.showPausedTweens = !!i1809[26]
  return i1808
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1810 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1811 = data
  i1810.logBehaviour = i1811[0]
  i1810.nestedTweenFailureBehaviour = i1811[1]
  return i1810
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1812 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1813 = data
  i1812.showPanel = !!i1813[0]
  i1812.audioEnabled = !!i1813[1]
  i1812.physicsEnabled = !!i1813[2]
  i1812.physics2DEnabled = !!i1813[3]
  i1812.spriteEnabled = !!i1813[4]
  i1812.uiEnabled = !!i1813[5]
  i1812.textMeshProEnabled = !!i1813[6]
  i1812.tk2DEnabled = !!i1813[7]
  i1812.deAudioEnabled = !!i1813[8]
  i1812.deUnityExtendedEnabled = !!i1813[9]
  i1812.epoOutlineEnabled = !!i1813[10]
  return i1812
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1814 = root || request.c( 'TMPro.TMP_Settings' )
  var i1815 = data
  i1814.m_enableWordWrapping = !!i1815[0]
  i1814.m_enableKerning = !!i1815[1]
  i1814.m_enableExtraPadding = !!i1815[2]
  i1814.m_enableTintAllSprites = !!i1815[3]
  i1814.m_enableParseEscapeCharacters = !!i1815[4]
  i1814.m_EnableRaycastTarget = !!i1815[5]
  i1814.m_GetFontFeaturesAtRuntime = !!i1815[6]
  i1814.m_missingGlyphCharacter = i1815[7]
  i1814.m_warningsDisabled = !!i1815[8]
  request.r(i1815[9], i1815[10], 0, i1814, 'm_defaultFontAsset')
  i1814.m_defaultFontAssetPath = i1815[11]
  i1814.m_defaultFontSize = i1815[12]
  i1814.m_defaultAutoSizeMinRatio = i1815[13]
  i1814.m_defaultAutoSizeMaxRatio = i1815[14]
  i1814.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1815[15], i1815[16] )
  i1814.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1815[17], i1815[18] )
  i1814.m_autoSizeTextContainer = !!i1815[19]
  i1814.m_IsTextObjectScaleStatic = !!i1815[20]
  var i1817 = i1815[21]
  var i1816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1817.length; i += 2) {
  request.r(i1817[i + 0], i1817[i + 1], 1, i1816, '')
  }
  i1814.m_fallbackFontAssets = i1816
  i1814.m_matchMaterialPreset = !!i1815[22]
  request.r(i1815[23], i1815[24], 0, i1814, 'm_defaultSpriteAsset')
  i1814.m_defaultSpriteAssetPath = i1815[25]
  i1814.m_enableEmojiSupport = !!i1815[26]
  i1814.m_MissingCharacterSpriteUnicode = i1815[27]
  i1814.m_defaultColorGradientPresetsPath = i1815[28]
  request.r(i1815[29], i1815[30], 0, i1814, 'm_defaultStyleSheet')
  i1814.m_StyleSheetsResourcePath = i1815[31]
  request.r(i1815[32], i1815[33], 0, i1814, 'm_leadingCharacters')
  request.r(i1815[34], i1815[35], 0, i1814, 'm_followingCharacters')
  i1814.m_UseModernHangulLineBreakingRules = !!i1815[36]
  return i1814
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1818 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1819 = data
  i1818.hashCode = i1819[0]
  request.r(i1819[1], i1819[2], 0, i1818, 'material')
  i1818.materialHashCode = i1819[3]
  request.r(i1819[4], i1819[5], 0, i1818, 'spriteSheet')
  var i1821 = i1819[6]
  var i1820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.add(request.d('TMPro.TMP_Sprite', i1821[i + 0]));
  }
  i1818.spriteInfoList = i1820
  var i1823 = i1819[7]
  var i1822 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1823.length; i += 2) {
  request.r(i1823[i + 0], i1823[i + 1], 1, i1822, '')
  }
  i1818.fallbackSpriteAssets = i1822
  i1818.m_Version = i1819[8]
  i1818.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1819[9], i1818.m_FaceInfo)
  var i1825 = i1819[10]
  var i1824 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.add(request.d('TMPro.TMP_SpriteCharacter', i1825[i + 0]));
  }
  i1818.m_SpriteCharacterTable = i1824
  var i1827 = i1819[11]
  var i1826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1827.length; i += 1) {
    i1826.add(request.d('TMPro.TMP_SpriteGlyph', i1827[i + 0]));
  }
  i1818.m_SpriteGlyphTable = i1826
  return i1818
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1830 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1831 = data
  i1830.name = i1831[0]
  i1830.hashCode = i1831[1]
  i1830.unicode = i1831[2]
  i1830.pivot = new pc.Vec2( i1831[3], i1831[4] )
  request.r(i1831[5], i1831[6], 0, i1830, 'sprite')
  i1830.id = i1831[7]
  i1830.x = i1831[8]
  i1830.y = i1831[9]
  i1830.width = i1831[10]
  i1830.height = i1831[11]
  i1830.xOffset = i1831[12]
  i1830.yOffset = i1831[13]
  i1830.xAdvance = i1831[14]
  i1830.scale = i1831[15]
  return i1830
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1836 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1837 = data
  i1836.m_Name = i1837[0]
  i1836.m_HashCode = i1837[1]
  i1836.m_ElementType = i1837[2]
  i1836.m_Unicode = i1837[3]
  i1836.m_GlyphIndex = i1837[4]
  i1836.m_Scale = i1837[5]
  return i1836
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1840 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1841 = data
  request.r(i1841[0], i1841[1], 0, i1840, 'sprite')
  i1840.m_Index = i1841[2]
  i1840.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1841[3], i1840.m_Metrics)
  i1840.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1841[4], i1840.m_GlyphRect)
  i1840.m_Scale = i1841[5]
  i1840.m_AtlasIndex = i1841[6]
  i1840.m_ClassDefinitionType = i1841[7]
  return i1840
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1842 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1843 = data
  var i1845 = i1843[0]
  var i1844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.add(request.d('TMPro.TMP_Style', i1845[i + 0]));
  }
  i1842.m_StyleList = i1844
  return i1842
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1848 = root || request.c( 'TMPro.TMP_Style' )
  var i1849 = data
  i1848.m_Name = i1849[0]
  i1848.m_HashCode = i1849[1]
  i1848.m_OpeningDefinition = i1849[2]
  i1848.m_ClosingDefinition = i1849[3]
  i1848.m_OpeningTagArray = i1849[4]
  i1848.m_ClosingTagArray = i1849[5]
  i1848.m_OpeningTagUnicodeArray = i1849[6]
  i1848.m_ClosingTagUnicodeArray = i1849[7]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1851 = data
  var i1853 = i1851[0]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1853[i + 0]) );
  }
  i1850.files = i1852
  i1850.componentToPrefabIds = i1851[1]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1857 = data
  i1856.path = i1857[0]
  request.r(i1857[1], i1857[2], 0, i1856, 'unityObject')
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1859 = data
  var i1861 = i1859[0]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1861[i + 0]) );
  }
  i1858.scriptsExecutionOrder = i1860
  var i1863 = i1859[1]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1863[i + 0]) );
  }
  i1858.sortingLayers = i1862
  var i1865 = i1859[2]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1865[i + 0]) );
  }
  i1858.cullingLayers = i1864
  i1858.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1859[3], i1858.timeSettings)
  i1858.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1859[4], i1858.physicsSettings)
  i1858.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1859[5], i1858.physics2DSettings)
  i1858.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1859[6], i1858.qualitySettings)
  i1858.enableRealtimeShadows = !!i1859[7]
  i1858.enableAutoInstancing = !!i1859[8]
  i1858.enableDynamicBatching = !!i1859[9]
  i1858.lightmapEncodingQuality = i1859[10]
  i1858.desiredColorSpace = i1859[11]
  var i1867 = i1859[12]
  var i1866 = []
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.push( i1867[i + 0] );
  }
  i1858.allTags = i1866
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1871 = data
  i1870.name = i1871[0]
  i1870.value = i1871[1]
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1875 = data
  i1874.id = i1875[0]
  i1874.name = i1875[1]
  i1874.value = i1875[2]
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1879 = data
  i1878.id = i1879[0]
  i1878.name = i1879[1]
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1881 = data
  i1880.fixedDeltaTime = i1881[0]
  i1880.maximumDeltaTime = i1881[1]
  i1880.timeScale = i1881[2]
  i1880.maximumParticleTimestep = i1881[3]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1883 = data
  i1882.gravity = new pc.Vec3( i1883[0], i1883[1], i1883[2] )
  i1882.defaultSolverIterations = i1883[3]
  i1882.bounceThreshold = i1883[4]
  i1882.autoSyncTransforms = !!i1883[5]
  i1882.autoSimulation = !!i1883[6]
  var i1885 = i1883[7]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1885[i + 0]) );
  }
  i1882.collisionMatrix = i1884
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1889 = data
  i1888.enabled = !!i1889[0]
  i1888.layerId = i1889[1]
  i1888.otherLayerId = i1889[2]
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1891 = data
  request.r(i1891[0], i1891[1], 0, i1890, 'material')
  i1890.gravity = new pc.Vec2( i1891[2], i1891[3] )
  i1890.positionIterations = i1891[4]
  i1890.velocityIterations = i1891[5]
  i1890.velocityThreshold = i1891[6]
  i1890.maxLinearCorrection = i1891[7]
  i1890.maxAngularCorrection = i1891[8]
  i1890.maxTranslationSpeed = i1891[9]
  i1890.maxRotationSpeed = i1891[10]
  i1890.baumgarteScale = i1891[11]
  i1890.baumgarteTOIScale = i1891[12]
  i1890.timeToSleep = i1891[13]
  i1890.linearSleepTolerance = i1891[14]
  i1890.angularSleepTolerance = i1891[15]
  i1890.defaultContactOffset = i1891[16]
  i1890.autoSimulation = !!i1891[17]
  i1890.queriesHitTriggers = !!i1891[18]
  i1890.queriesStartInColliders = !!i1891[19]
  i1890.callbacksOnDisable = !!i1891[20]
  i1890.reuseCollisionCallbacks = !!i1891[21]
  i1890.autoSyncTransforms = !!i1891[22]
  var i1893 = i1891[23]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1893[i + 0]) );
  }
  i1890.collisionMatrix = i1892
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1897 = data
  i1896.enabled = !!i1897[0]
  i1896.layerId = i1897[1]
  i1896.otherLayerId = i1897[2]
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1899 = data
  var i1901 = i1899[0]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1901[i + 0]) );
  }
  i1898.qualityLevels = i1900
  var i1903 = i1899[1]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.push( i1903[i + 0] );
  }
  i1898.names = i1902
  i1898.shadows = i1899[2]
  i1898.anisotropicFiltering = i1899[3]
  i1898.antiAliasing = i1899[4]
  i1898.lodBias = i1899[5]
  i1898.shadowCascades = i1899[6]
  i1898.shadowDistance = i1899[7]
  i1898.shadowmaskMode = i1899[8]
  i1898.shadowProjection = i1899[9]
  i1898.shadowResolution = i1899[10]
  i1898.softParticles = !!i1899[11]
  i1898.softVegetation = !!i1899[12]
  i1898.activeColorSpace = i1899[13]
  i1898.desiredColorSpace = i1899[14]
  i1898.masterTextureLimit = i1899[15]
  i1898.maxQueuedFrames = i1899[16]
  i1898.particleRaycastBudget = i1899[17]
  i1898.pixelLightCount = i1899[18]
  i1898.realtimeReflectionProbes = !!i1899[19]
  i1898.shadowCascade2Split = i1899[20]
  i1898.shadowCascade4Split = new pc.Vec3( i1899[21], i1899[22], i1899[23] )
  i1898.streamingMipmapsActive = !!i1899[24]
  i1898.vSyncCount = i1899[25]
  i1898.asyncUploadBufferSize = i1899[26]
  i1898.asyncUploadTimeSlice = i1899[27]
  i1898.billboardsFaceCameraPosition = !!i1899[28]
  i1898.shadowNearPlaneOffset = i1899[29]
  i1898.streamingMipmapsMemoryBudget = i1899[30]
  i1898.maximumLODLevel = i1899[31]
  i1898.streamingMipmapsAddAllCameras = !!i1899[32]
  i1898.streamingMipmapsMaxLevelReduction = i1899[33]
  i1898.streamingMipmapsRenderersPerFrame = i1899[34]
  i1898.resolutionScalingFixedDPIFactor = i1899[35]
  i1898.streamingMipmapsMaxFileIORequests = i1899[36]
  i1898.currentQualityLevel = i1899[37]
  return i1898
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1906 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1907 = data
  i1906.xPlacement = i1907[0]
  i1906.yPlacement = i1907[1]
  i1906.xAdvance = i1907[2]
  i1906.yAdvance = i1907[3]
  return i1906
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1908 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1909 = data
  i1908.m_GlyphIndex = i1909[0]
  i1908.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1909[1], i1908.m_GlyphValueRecord)
  return i1908
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1910 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1911 = data
  i1910.m_XPlacement = i1911[0]
  i1910.m_YPlacement = i1911[1]
  i1910.m_XAdvance = i1911[2]
  i1910.m_YAdvance = i1911[3]
  return i1910
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[3],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[3],"76":[77],"78":[79],"80":[79],"9":[8],"81":[82],"83":[84],"85":[82],"86":[8],"87":[8],"11":[9],"18":[19,8],"88":[8],"10":[9],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"34":[8],"96":[8],"16":[19,8],"97":[8],"98":[8],"99":[8],"100":[8],"101":[19,8],"102":[8],"103":[6],"104":[6],"7":[6],"105":[6],"106":[3],"107":[3],"108":[109],"110":[3],"111":[112],"113":[8],"114":[19,8],"115":[77],"27":[19,8],"116":[117,77],"118":[77],"119":[77,120],"121":[54],"122":[62],"123":[112],"124":[125],"126":[8],"127":[77,8],"17":[8,19],"128":[8],"129":[19,8],"130":[77],"131":[19,8],"132":[8],"133":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.CanvasGroup","DragCustom","UnityEngine.PolygonCollider2D","DropCustom","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","MixSkeletonSkin","ClickItem","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "155.1";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1716";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4667";

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

Deserializers.buildID = "4509b8bc-4ae9-4508-b6ff-6f12adffa254";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

