var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1452 = root || request.c( 'UnityEngine.JointSpring' )
  var i1453 = data
  i1452.spring = i1453[0]
  i1452.damper = i1453[1]
  i1452.targetPosition = i1453[2]
  return i1452
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1454 = root || request.c( 'UnityEngine.JointMotor' )
  var i1455 = data
  i1454.m_TargetVelocity = i1455[0]
  i1454.m_Force = i1455[1]
  i1454.m_FreeSpin = i1455[2]
  return i1454
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1456 = root || request.c( 'UnityEngine.JointLimits' )
  var i1457 = data
  i1456.m_Min = i1457[0]
  i1456.m_Max = i1457[1]
  i1456.m_Bounciness = i1457[2]
  i1456.m_BounceMinVelocity = i1457[3]
  i1456.m_ContactDistance = i1457[4]
  i1456.minBounce = i1457[5]
  i1456.maxBounce = i1457[6]
  return i1456
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1458 = root || request.c( 'UnityEngine.JointDrive' )
  var i1459 = data
  i1458.m_PositionSpring = i1459[0]
  i1458.m_PositionDamper = i1459[1]
  i1458.m_MaximumForce = i1459[2]
  i1458.m_UseAcceleration = i1459[3]
  return i1458
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1460 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1461 = data
  i1460.m_Spring = i1461[0]
  i1460.m_Damper = i1461[1]
  return i1460
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1462 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1463 = data
  i1462.m_Limit = i1463[0]
  i1462.m_Bounciness = i1463[1]
  i1462.m_ContactDistance = i1463[2]
  return i1462
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1464 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1465 = data
  i1464.m_ExtremumSlip = i1465[0]
  i1464.m_ExtremumValue = i1465[1]
  i1464.m_AsymptoteSlip = i1465[2]
  i1464.m_AsymptoteValue = i1465[3]
  i1464.m_Stiffness = i1465[4]
  return i1464
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1466 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1467 = data
  i1466.m_LowerAngle = i1467[0]
  i1466.m_UpperAngle = i1467[1]
  return i1466
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1468 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1469 = data
  i1468.m_MotorSpeed = i1469[0]
  i1468.m_MaximumMotorTorque = i1469[1]
  return i1468
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1470 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1471 = data
  i1470.m_DampingRatio = i1471[0]
  i1470.m_Frequency = i1471[1]
  i1470.m_Angle = i1471[2]
  return i1470
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1472 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1473 = data
  i1472.m_LowerTranslation = i1473[0]
  i1472.m_UpperTranslation = i1473[1]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1475 = data
  i1474.name = i1475[0]
  i1474.width = i1475[1]
  i1474.height = i1475[2]
  i1474.mipmapCount = i1475[3]
  i1474.anisoLevel = i1475[4]
  i1474.filterMode = i1475[5]
  i1474.hdr = !!i1475[6]
  i1474.format = i1475[7]
  i1474.wrapMode = i1475[8]
  i1474.alphaIsTransparency = !!i1475[9]
  i1474.alphaSource = i1475[10]
  i1474.graphicsFormat = i1475[11]
  i1474.sRGBTexture = !!i1475[12]
  i1474.desiredColorSpace = i1475[13]
  i1474.wrapU = i1475[14]
  i1474.wrapV = i1475[15]
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1476 = root || new pc.UnityMaterial()
  var i1477 = data
  i1476.name = i1477[0]
  request.r(i1477[1], i1477[2], 0, i1476, 'shader')
  i1476.renderQueue = i1477[3]
  i1476.enableInstancing = !!i1477[4]
  var i1479 = i1477[5]
  var i1478 = []
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1479[i + 0]) );
  }
  i1476.floatParameters = i1478
  var i1481 = i1477[6]
  var i1480 = []
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1481[i + 0]) );
  }
  i1476.colorParameters = i1480
  var i1483 = i1477[7]
  var i1482 = []
  for(var i = 0; i < i1483.length; i += 1) {
    i1482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1483[i + 0]) );
  }
  i1476.vectorParameters = i1482
  var i1485 = i1477[8]
  var i1484 = []
  for(var i = 0; i < i1485.length; i += 1) {
    i1484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1485[i + 0]) );
  }
  i1476.textureParameters = i1484
  var i1487 = i1477[9]
  var i1486 = []
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1487[i + 0]) );
  }
  i1476.materialFlags = i1486
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1491 = data
  i1490.name = i1491[0]
  i1490.value = i1491[1]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1495 = data
  i1494.name = i1495[0]
  i1494.value = new pc.Color(i1495[1], i1495[2], i1495[3], i1495[4])
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1499 = data
  i1498.name = i1499[0]
  i1498.value = new pc.Vec4( i1499[1], i1499[2], i1499[3], i1499[4] )
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1503 = data
  i1502.name = i1503[0]
  request.r(i1503[1], i1503[2], 0, i1502, 'value')
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1507 = data
  i1506.name = i1507[0]
  i1506.enabled = !!i1507[1]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1509 = data
  i1508.name = i1509[0]
  i1508.index = i1509[1]
  i1508.startup = !!i1509[2]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1511 = data
  i1510.position = new pc.Vec3( i1511[0], i1511[1], i1511[2] )
  i1510.scale = new pc.Vec3( i1511[3], i1511[4], i1511[5] )
  i1510.rotation = new pc.Quat(i1511[6], i1511[7], i1511[8], i1511[9])
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1513 = data
  i1512.aspect = i1513[0]
  i1512.orthographic = !!i1513[1]
  i1512.orthographicSize = i1513[2]
  i1512.backgroundColor = new pc.Color(i1513[3], i1513[4], i1513[5], i1513[6])
  i1512.nearClipPlane = i1513[7]
  i1512.farClipPlane = i1513[8]
  i1512.fieldOfView = i1513[9]
  i1512.depth = i1513[10]
  i1512.clearFlags = i1513[11]
  i1512.cullingMask = i1513[12]
  i1512.rect = i1513[13]
  request.r(i1513[14], i1513[15], 0, i1512, 'targetTexture')
  i1512.usePhysicalProperties = !!i1513[16]
  i1512.focalLength = i1513[17]
  i1512.sensorSize = new pc.Vec2( i1513[18], i1513[19] )
  i1512.lensShift = new pc.Vec2( i1513[20], i1513[21] )
  i1512.gateFit = i1513[22]
  i1512.commandBufferCount = i1513[23]
  i1512.cameraType = i1513[24]
  i1512.enabled = !!i1513[25]
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1515 = data
  i1514.name = i1515[0]
  i1514.tagId = i1515[1]
  i1514.enabled = !!i1515[2]
  i1514.isStatic = !!i1515[3]
  i1514.layer = i1515[4]
  return i1514
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1516 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1517 = data
  request.r(i1517[0], i1517[1], 0, i1516, 'm_FirstSelected')
  i1516.m_sendNavigationEvents = !!i1517[2]
  i1516.m_DragThreshold = i1517[3]
  return i1516
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1518 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1519 = data
  i1518.m_HorizontalAxis = i1519[0]
  i1518.m_VerticalAxis = i1519[1]
  i1518.m_SubmitButton = i1519[2]
  i1518.m_CancelButton = i1519[3]
  i1518.m_InputActionsPerSecond = i1519[4]
  i1518.m_RepeatDelay = i1519[5]
  i1518.m_ForceModuleActive = !!i1519[6]
  i1518.m_SendPointerHoverToParent = !!i1519[7]
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1521 = data
  i1520.pivot = new pc.Vec2( i1521[0], i1521[1] )
  i1520.anchorMin = new pc.Vec2( i1521[2], i1521[3] )
  i1520.anchorMax = new pc.Vec2( i1521[4], i1521[5] )
  i1520.sizeDelta = new pc.Vec2( i1521[6], i1521[7] )
  i1520.anchoredPosition3D = new pc.Vec3( i1521[8], i1521[9], i1521[10] )
  i1520.rotation = new pc.Quat(i1521[11], i1521[12], i1521[13], i1521[14])
  i1520.scale = new pc.Vec3( i1521[15], i1521[16], i1521[17] )
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1523 = data
  i1522.planeDistance = i1523[0]
  i1522.referencePixelsPerUnit = i1523[1]
  i1522.isFallbackOverlay = !!i1523[2]
  i1522.renderMode = i1523[3]
  i1522.renderOrder = i1523[4]
  i1522.sortingLayerName = i1523[5]
  i1522.sortingOrder = i1523[6]
  i1522.scaleFactor = i1523[7]
  request.r(i1523[8], i1523[9], 0, i1522, 'worldCamera')
  i1522.overrideSorting = !!i1523[10]
  i1522.pixelPerfect = !!i1523[11]
  i1522.targetDisplay = i1523[12]
  i1522.overridePixelPerfect = !!i1523[13]
  i1522.enabled = !!i1523[14]
  return i1522
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1524 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1525 = data
  i1524.m_UiScaleMode = i1525[0]
  i1524.m_ReferencePixelsPerUnit = i1525[1]
  i1524.m_ScaleFactor = i1525[2]
  i1524.m_ReferenceResolution = new pc.Vec2( i1525[3], i1525[4] )
  i1524.m_ScreenMatchMode = i1525[5]
  i1524.m_MatchWidthOrHeight = i1525[6]
  i1524.m_PhysicalUnit = i1525[7]
  i1524.m_FallbackScreenDPI = i1525[8]
  i1524.m_DefaultSpriteDPI = i1525[9]
  i1524.m_DynamicPixelsPerUnit = i1525[10]
  i1524.m_PresetInfoIsWorld = !!i1525[11]
  return i1524
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1526 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1527 = data
  i1526.m_IgnoreReversedGraphics = !!i1527[0]
  i1526.m_BlockingObjects = i1527[1]
  i1526.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1527[2] )
  return i1526
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1528 = root || request.c( 'LunaManager' )
  var i1529 = data
  var i1531 = i1529[0]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 2) {
  request.r(i1531[i + 0], i1531[i + 1], 2, i1530, '')
  }
  i1528.lstBtnInstall = i1530
  request.r(i1529[1], i1529[2], 0, i1528, 'WinGO')
  request.r(i1529[3], i1529[4], 0, i1528, 'LoseGO')
  request.r(i1529[5], i1529[6], 0, i1528, 'StartCard')
  request.r(i1529[7], i1529[8], 0, i1528, 'EndCard')
  request.r(i1529[9], i1529[10], 0, i1528, 'Parent')
  i1528.isDrag = !!i1529[11]
  i1528.timeDrag = i1529[12]
  i1528.countPlay = i1529[13]
  i1528.countPlayFinal = i1529[14]
  i1528.countPlayMax = i1529[15]
  i1528.timeDropFinal = i1529[16]
  i1528.colorBG = new pc.Color(i1529[17], i1529[18], i1529[19], i1529[20])
  request.r(i1529[21], i1529[22], 0, i1528, 'texture2D')
  request.r(i1529[23], i1529[24], 0, i1528, 'rawImageBG')
  var i1533 = i1529[25]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 2) {
  request.r(i1533[i + 0], i1533[i + 1], 2, i1532, '')
  }
  i1528.skeDogs = i1532
  request.r(i1529[26], i1529[27], 0, i1528, 'textProgess')
  request.r(i1529[28], i1529[29], 0, i1528, 'imgProgess')
  request.r(i1529[30], i1529[31], 0, i1528, 'timeText')
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1539 = data
  i1538.cullTransparentMesh = !!i1539[0]
  return i1538
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1540 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1541 = data
  request.r(i1541[0], i1541[1], 0, i1540, 'm_Texture')
  i1540.m_UVRect = UnityEngine.Rect.MinMaxRect(i1541[2], i1541[3], i1541[4], i1541[5])
  i1540.m_Maskable = !!i1541[6]
  request.r(i1541[7], i1541[8], 0, i1540, 'm_Material')
  i1540.m_Color = new pc.Color(i1541[9], i1541[10], i1541[11], i1541[12])
  i1540.m_RaycastTarget = !!i1541[13]
  i1540.m_RaycastPadding = new pc.Vec4( i1541[14], i1541[15], i1541[16], i1541[17] )
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1543 = data
  request.r(i1543[0], i1543[1], 0, i1542, 'clip')
  request.r(i1543[2], i1543[3], 0, i1542, 'outputAudioMixerGroup')
  i1542.playOnAwake = !!i1543[4]
  i1542.loop = !!i1543[5]
  i1542.time = i1543[6]
  i1542.volume = i1543[7]
  i1542.pitch = i1543[8]
  i1542.enabled = !!i1543[9]
  return i1542
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1544 = root || request.c( 'UnityEngine.UI.Image' )
  var i1545 = data
  request.r(i1545[0], i1545[1], 0, i1544, 'm_Sprite')
  i1544.m_Type = i1545[2]
  i1544.m_PreserveAspect = !!i1545[3]
  i1544.m_FillCenter = !!i1545[4]
  i1544.m_FillMethod = i1545[5]
  i1544.m_FillAmount = i1545[6]
  i1544.m_FillClockwise = !!i1545[7]
  i1544.m_FillOrigin = i1545[8]
  i1544.m_UseSpriteMesh = !!i1545[9]
  i1544.m_PixelsPerUnitMultiplier = i1545[10]
  i1544.m_Maskable = !!i1545[11]
  request.r(i1545[12], i1545[13], 0, i1544, 'm_Material')
  i1544.m_Color = new pc.Color(i1545[14], i1545[15], i1545[16], i1545[17])
  i1544.m_RaycastTarget = !!i1545[18]
  i1544.m_RaycastPadding = new pc.Vec4( i1545[19], i1545[20], i1545[21], i1545[22] )
  return i1544
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
  i1546.m_Maskable = !!i1547[34]
  request.r(i1547[35], i1547[36], 0, i1546, 'm_Material')
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

Deserializers["ClickItem"] = function (request, data, root) {
  var i1564 = root || request.c( 'ClickItem' )
  var i1565 = data
  var i1567 = i1565[0]
  var i1566 = []
  for(var i = 0; i < i1567.length; i += 2) {
  request.r(i1567[i + 0], i1567[i + 1], 2, i1566, '')
  }
  i1564.steps = i1566
  i1564.currentStep = i1565[1]
  i1564.isProcess = !!i1565[2]
  return i1564
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1570 = root || request.c( 'UnityEngine.UI.Button' )
  var i1571 = data
  i1570.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1571[0], i1570.m_OnClick)
  i1570.m_Navigation = request.d('UnityEngine.UI.Navigation', i1571[1], i1570.m_Navigation)
  i1570.m_Transition = i1571[2]
  i1570.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1571[3], i1570.m_Colors)
  i1570.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1571[4], i1570.m_SpriteState)
  i1570.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1571[5], i1570.m_AnimationTriggers)
  i1570.m_Interactable = !!i1571[6]
  request.r(i1571[7], i1571[8], 0, i1570, 'm_TargetGraphic')
  return i1570
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1572 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1573 = data
  i1572.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1573[0], i1572.m_PersistentCalls)
  return i1572
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1574 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1575 = data
  var i1577 = i1575[0]
  var i1576 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.add(request.d('UnityEngine.Events.PersistentCall', i1577[i + 0]));
  }
  i1574.m_Calls = i1576
  return i1574
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1580 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1581 = data
  request.r(i1581[0], i1581[1], 0, i1580, 'm_Target')
  i1580.m_TargetAssemblyTypeName = i1581[2]
  i1580.m_MethodName = i1581[3]
  i1580.m_Mode = i1581[4]
  i1580.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1581[5], i1580.m_Arguments)
  i1580.m_CallState = i1581[6]
  return i1580
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1582 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1583 = data
  i1582.m_Mode = i1583[0]
  i1582.m_WrapAround = !!i1583[1]
  request.r(i1583[2], i1583[3], 0, i1582, 'm_SelectOnUp')
  request.r(i1583[4], i1583[5], 0, i1582, 'm_SelectOnDown')
  request.r(i1583[6], i1583[7], 0, i1582, 'm_SelectOnLeft')
  request.r(i1583[8], i1583[9], 0, i1582, 'm_SelectOnRight')
  return i1582
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1585 = data
  i1584.m_NormalColor = new pc.Color(i1585[0], i1585[1], i1585[2], i1585[3])
  i1584.m_HighlightedColor = new pc.Color(i1585[4], i1585[5], i1585[6], i1585[7])
  i1584.m_PressedColor = new pc.Color(i1585[8], i1585[9], i1585[10], i1585[11])
  i1584.m_SelectedColor = new pc.Color(i1585[12], i1585[13], i1585[14], i1585[15])
  i1584.m_DisabledColor = new pc.Color(i1585[16], i1585[17], i1585[18], i1585[19])
  i1584.m_ColorMultiplier = i1585[20]
  i1584.m_FadeDuration = i1585[21]
  return i1584
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1587 = data
  request.r(i1587[0], i1587[1], 0, i1586, 'm_HighlightedSprite')
  request.r(i1587[2], i1587[3], 0, i1586, 'm_PressedSprite')
  request.r(i1587[4], i1587[5], 0, i1586, 'm_SelectedSprite')
  request.r(i1587[6], i1587[7], 0, i1586, 'm_DisabledSprite')
  return i1586
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1588 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1589 = data
  i1588.m_NormalTrigger = i1589[0]
  i1588.m_HighlightedTrigger = i1589[1]
  i1588.m_PressedTrigger = i1589[2]
  i1588.m_SelectedTrigger = i1589[3]
  i1588.m_DisabledTrigger = i1589[4]
  return i1588
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1590 = root || request.c( 'DraggableItem' )
  var i1591 = data
  i1590.idDrag = i1591[0]
  i1590.isProcess = !!i1591[1]
  i1590.isLose = !!i1591[2]
  i1590.isHide = !!i1591[3]
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1593 = data
  i1592.m_Alpha = i1593[0]
  i1592.m_Interactable = !!i1593[1]
  i1592.m_BlocksRaycasts = !!i1593[2]
  i1592.m_IgnoreParentGroups = !!i1593[3]
  i1592.enabled = !!i1593[4]
  return i1592
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1594 = root || request.c( 'DropZone' )
  var i1595 = data
  i1594.idDrop = i1595[0]
  var i1597 = i1595[1]
  var i1596 = []
  for(var i = 0; i < i1597.length; i += 2) {
  request.r(i1597[i + 0], i1597[i + 1], 2, i1596, '')
  }
  i1594.steps = i1596
  request.r(i1595[2], i1595[3], 0, i1594, 'stepLose')
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1599 = data
  i1598.usedByComposite = !!i1599[0]
  i1598.autoTiling = !!i1599[1]
  var i1601 = i1599[2]
  var i1600 = []
  for(var i = 0; i < i1601.length; i += 1) {
  var i1603 = i1601[i + 0]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 2) {
    i1602.push( new pc.Vec2( i1603[i + 0], i1603[i + 1] ) );
  }
    i1600.push( i1602 );
  }
  i1598.points = i1600
  i1598.enabled = !!i1599[3]
  i1598.isTrigger = !!i1599[4]
  i1598.usedByEffector = !!i1599[5]
  i1598.density = i1599[6]
  i1598.offset = new pc.Vec2( i1599[7], i1599[8] )
  request.r(i1599[9], i1599[10], 0, i1598, 'material')
  return i1598
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i1610 = root || request.c( 'MixSkeletonSkin' )
  var i1611 = data
  request.r(i1611[0], i1611[1], 0, i1610, 'skeletonAnimation')
  var i1613 = i1611[2]
  var i1612 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.add(i1613[i + 0]);
  }
  i1610.skinNames = i1612
  i1610.defaultAnim = i1611[3]
  return i1610
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1616 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1617 = data
  i1616.targetIsSelf = !!i1617[0]
  request.r(i1617[1], i1617[2], 0, i1616, 'targetGO')
  i1616.tweenTargetIsTargetGO = !!i1617[3]
  i1616.delay = i1617[4]
  i1616.duration = i1617[5]
  i1616.easeType = i1617[6]
  i1616.easeCurve = new pc.AnimationCurve( { keys_flow: i1617[7] } )
  i1616.loopType = i1617[8]
  i1616.loops = i1617[9]
  i1616.id = i1617[10]
  i1616.isRelative = !!i1617[11]
  i1616.isFrom = !!i1617[12]
  i1616.isIndependentUpdate = !!i1617[13]
  i1616.autoKill = !!i1617[14]
  i1616.autoGenerate = !!i1617[15]
  i1616.isActive = !!i1617[16]
  i1616.isValid = !!i1617[17]
  request.r(i1617[18], i1617[19], 0, i1616, 'target')
  i1616.animationType = i1617[20]
  i1616.targetType = i1617[21]
  i1616.forcedTargetType = i1617[22]
  i1616.autoPlay = !!i1617[23]
  i1616.useTargetAsV3 = !!i1617[24]
  i1616.endValueFloat = i1617[25]
  i1616.endValueV3 = new pc.Vec3( i1617[26], i1617[27], i1617[28] )
  i1616.endValueV2 = new pc.Vec2( i1617[29], i1617[30] )
  i1616.endValueColor = new pc.Color(i1617[31], i1617[32], i1617[33], i1617[34])
  i1616.endValueString = i1617[35]
  i1616.endValueRect = UnityEngine.Rect.MinMaxRect(i1617[36], i1617[37], i1617[38], i1617[39])
  request.r(i1617[40], i1617[41], 0, i1616, 'endValueTransform')
  i1616.optionalBool0 = !!i1617[42]
  i1616.optionalBool1 = !!i1617[43]
  i1616.optionalFloat0 = i1617[44]
  i1616.optionalInt0 = i1617[45]
  i1616.optionalRotationMode = i1617[46]
  i1616.optionalScrambleMode = i1617[47]
  i1616.optionalShakeRandomnessMode = i1617[48]
  i1616.optionalString = i1617[49]
  i1616.updateType = i1617[50]
  i1616.isSpeedBased = !!i1617[51]
  i1616.hasOnStart = !!i1617[52]
  i1616.hasOnPlay = !!i1617[53]
  i1616.hasOnUpdate = !!i1617[54]
  i1616.hasOnStepComplete = !!i1617[55]
  i1616.hasOnComplete = !!i1617[56]
  i1616.hasOnTweenCreated = !!i1617[57]
  i1616.hasOnRewind = !!i1617[58]
  i1616.onStart = request.d('UnityEngine.Events.UnityEvent', i1617[59], i1616.onStart)
  i1616.onPlay = request.d('UnityEngine.Events.UnityEvent', i1617[60], i1616.onPlay)
  i1616.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1617[61], i1616.onUpdate)
  i1616.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1617[62], i1616.onStepComplete)
  i1616.onComplete = request.d('UnityEngine.Events.UnityEvent', i1617[63], i1616.onComplete)
  i1616.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1617[64], i1616.onTweenCreated)
  i1616.onRewind = request.d('UnityEngine.Events.UnityEvent', i1617[65], i1616.onRewind)
  return i1616
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1619 = data
  i1618.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1619[0], i1618.m_PersistentCalls)
  return i1618
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1620 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1621 = data
  request.r(i1621[0], i1621[1], 0, i1620, 'm_ObjectArgument')
  i1620.m_ObjectArgumentAssemblyTypeName = i1621[2]
  i1620.m_IntArgument = i1621[3]
  i1620.m_FloatArgument = i1621[4]
  i1620.m_StringArgument = i1621[5]
  i1620.m_BoolArgument = !!i1621[6]
  return i1620
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1622 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1623 = data
  i1622.m_hasFontAssetChanged = !!i1623[0]
  request.r(i1623[1], i1623[2], 0, i1622, 'm_baseMaterial')
  i1622.m_maskOffset = new pc.Vec4( i1623[3], i1623[4], i1623[5], i1623[6] )
  i1622.m_text = i1623[7]
  i1622.m_isRightToLeft = !!i1623[8]
  request.r(i1623[9], i1623[10], 0, i1622, 'm_fontAsset')
  request.r(i1623[11], i1623[12], 0, i1622, 'm_sharedMaterial')
  var i1625 = i1623[13]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 2) {
  request.r(i1625[i + 0], i1625[i + 1], 2, i1624, '')
  }
  i1622.m_fontSharedMaterials = i1624
  request.r(i1623[14], i1623[15], 0, i1622, 'm_fontMaterial')
  var i1627 = i1623[16]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 2) {
  request.r(i1627[i + 0], i1627[i + 1], 2, i1626, '')
  }
  i1622.m_fontMaterials = i1626
  i1622.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1623[17], i1623[18], i1623[19], i1623[20])
  i1622.m_fontColor = new pc.Color(i1623[21], i1623[22], i1623[23], i1623[24])
  i1622.m_enableVertexGradient = !!i1623[25]
  i1622.m_colorMode = i1623[26]
  i1622.m_fontColorGradient = request.d('TMPro.VertexGradient', i1623[27], i1622.m_fontColorGradient)
  request.r(i1623[28], i1623[29], 0, i1622, 'm_fontColorGradientPreset')
  request.r(i1623[30], i1623[31], 0, i1622, 'm_spriteAsset')
  i1622.m_tintAllSprites = !!i1623[32]
  request.r(i1623[33], i1623[34], 0, i1622, 'm_StyleSheet')
  i1622.m_TextStyleHashCode = i1623[35]
  i1622.m_overrideHtmlColors = !!i1623[36]
  i1622.m_faceColor = UnityEngine.Color32.ConstructColor(i1623[37], i1623[38], i1623[39], i1623[40])
  i1622.m_fontSize = i1623[41]
  i1622.m_fontSizeBase = i1623[42]
  i1622.m_fontWeight = i1623[43]
  i1622.m_enableAutoSizing = !!i1623[44]
  i1622.m_fontSizeMin = i1623[45]
  i1622.m_fontSizeMax = i1623[46]
  i1622.m_fontStyle = i1623[47]
  i1622.m_HorizontalAlignment = i1623[48]
  i1622.m_VerticalAlignment = i1623[49]
  i1622.m_textAlignment = i1623[50]
  i1622.m_characterSpacing = i1623[51]
  i1622.m_wordSpacing = i1623[52]
  i1622.m_lineSpacing = i1623[53]
  i1622.m_lineSpacingMax = i1623[54]
  i1622.m_paragraphSpacing = i1623[55]
  i1622.m_charWidthMaxAdj = i1623[56]
  i1622.m_enableWordWrapping = !!i1623[57]
  i1622.m_wordWrappingRatios = i1623[58]
  i1622.m_overflowMode = i1623[59]
  request.r(i1623[60], i1623[61], 0, i1622, 'm_linkedTextComponent')
  request.r(i1623[62], i1623[63], 0, i1622, 'parentLinkedComponent')
  i1622.m_enableKerning = !!i1623[64]
  i1622.m_enableExtraPadding = !!i1623[65]
  i1622.checkPaddingRequired = !!i1623[66]
  i1622.m_isRichText = !!i1623[67]
  i1622.m_parseCtrlCharacters = !!i1623[68]
  i1622.m_isOrthographic = !!i1623[69]
  i1622.m_isCullingEnabled = !!i1623[70]
  i1622.m_horizontalMapping = i1623[71]
  i1622.m_verticalMapping = i1623[72]
  i1622.m_uvLineOffset = i1623[73]
  i1622.m_geometrySortingOrder = i1623[74]
  i1622.m_IsTextObjectScaleStatic = !!i1623[75]
  i1622.m_VertexBufferAutoSizeReduction = !!i1623[76]
  i1622.m_useMaxVisibleDescender = !!i1623[77]
  i1622.m_pageToDisplay = i1623[78]
  i1622.m_margin = new pc.Vec4( i1623[79], i1623[80], i1623[81], i1623[82] )
  i1622.m_isUsingLegacyAnimationComponent = !!i1623[83]
  i1622.m_isVolumetricText = !!i1623[84]
  i1622.m_Maskable = !!i1623[85]
  request.r(i1623[86], i1623[87], 0, i1622, 'm_Material')
  i1622.m_Color = new pc.Color(i1623[88], i1623[89], i1623[90], i1623[91])
  i1622.m_RaycastTarget = !!i1623[92]
  i1622.m_RaycastPadding = new pc.Vec4( i1623[93], i1623[94], i1623[95], i1623[96] )
  return i1622
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1630 = root || request.c( 'TMPro.VertexGradient' )
  var i1631 = data
  i1630.topLeft = new pc.Color(i1631[0], i1631[1], i1631[2], i1631[3])
  i1630.topRight = new pc.Color(i1631[4], i1631[5], i1631[6], i1631[7])
  i1630.bottomLeft = new pc.Color(i1631[8], i1631[9], i1631[10], i1631[11])
  i1630.bottomRight = new pc.Color(i1631[12], i1631[13], i1631[14], i1631[15])
  return i1630
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1632 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1633 = data
  i1632.m_ShowMaskGraphic = !!i1633[0]
  return i1632
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1634 = root || request.c( 'AudioController' )
  var i1635 = data
  request.r(i1635[0], i1635[1], 0, i1634, 'bgmSource')
  request.r(i1635[2], i1635[3], 0, i1634, 'sfxSource')
  var i1637 = i1635[4]
  var i1636 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.add(request.d('AudioEntry', i1637[i + 0]));
  }
  i1634.audioEntries = i1636
  return i1634
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i1640 = root || request.c( 'AudioEntry' )
  var i1641 = data
  i1640.key = i1641[0]
  request.r(i1641[1], i1641[2], 0, i1640, 'clip')
  i1640.volume = i1641[3]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1643 = data
  i1642.ambientIntensity = i1643[0]
  i1642.reflectionIntensity = i1643[1]
  i1642.ambientMode = i1643[2]
  i1642.ambientLight = new pc.Color(i1643[3], i1643[4], i1643[5], i1643[6])
  i1642.ambientSkyColor = new pc.Color(i1643[7], i1643[8], i1643[9], i1643[10])
  i1642.ambientGroundColor = new pc.Color(i1643[11], i1643[12], i1643[13], i1643[14])
  i1642.ambientEquatorColor = new pc.Color(i1643[15], i1643[16], i1643[17], i1643[18])
  i1642.fogColor = new pc.Color(i1643[19], i1643[20], i1643[21], i1643[22])
  i1642.fogEndDistance = i1643[23]
  i1642.fogStartDistance = i1643[24]
  i1642.fogDensity = i1643[25]
  i1642.fog = !!i1643[26]
  request.r(i1643[27], i1643[28], 0, i1642, 'skybox')
  i1642.fogMode = i1643[29]
  var i1645 = i1643[30]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1645[i + 0]) );
  }
  i1642.lightmaps = i1644
  i1642.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1643[31], i1642.lightProbes)
  i1642.lightmapsMode = i1643[32]
  i1642.mixedBakeMode = i1643[33]
  i1642.environmentLightingMode = i1643[34]
  i1642.ambientProbe = new pc.SphericalHarmonicsL2(i1643[35])
  i1642.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1643[36])
  i1642.useReferenceAmbientProbe = !!i1643[37]
  request.r(i1643[38], i1643[39], 0, i1642, 'customReflection')
  request.r(i1643[40], i1643[41], 0, i1642, 'defaultReflection')
  i1642.defaultReflectionMode = i1643[42]
  i1642.defaultReflectionResolution = i1643[43]
  i1642.sunLightObjectId = i1643[44]
  i1642.pixelLightCount = i1643[45]
  i1642.defaultReflectionHDR = !!i1643[46]
  i1642.hasLightDataAsset = !!i1643[47]
  i1642.hasManualGenerate = !!i1643[48]
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1649 = data
  request.r(i1649[0], i1649[1], 0, i1648, 'lightmapColor')
  request.r(i1649[2], i1649[3], 0, i1648, 'lightmapDirection')
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1650 = root || new UnityEngine.LightProbes()
  var i1651 = data
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1659 = data
  var i1661 = i1659[0]
  var i1660 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1661[i + 0]));
  }
  i1658.ShaderCompilationErrors = i1660
  i1658.name = i1659[1]
  i1658.guid = i1659[2]
  var i1663 = i1659[3]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.push( i1663[i + 0] );
  }
  i1658.shaderDefinedKeywords = i1662
  var i1665 = i1659[4]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 1) {
    i1664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1665[i + 0]) );
  }
  i1658.passes = i1664
  var i1667 = i1659[5]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1667[i + 0]) );
  }
  i1658.usePasses = i1666
  var i1669 = i1659[6]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1669[i + 0]) );
  }
  i1658.defaultParameterValues = i1668
  request.r(i1659[7], i1659[8], 0, i1658, 'unityFallbackShader')
  i1658.readDepth = !!i1659[9]
  i1658.isCreatedByShaderGraph = !!i1659[10]
  i1658.disableBatching = !!i1659[11]
  i1658.compiled = !!i1659[12]
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1673 = data
  i1672.shaderName = i1673[0]
  i1672.errorMessage = i1673[1]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1676 = root || new pc.UnityShaderPass()
  var i1677 = data
  i1676.id = i1677[0]
  i1676.subShaderIndex = i1677[1]
  i1676.name = i1677[2]
  i1676.passType = i1677[3]
  i1676.grabPassTextureName = i1677[4]
  i1676.usePass = !!i1677[5]
  i1676.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1677[6], i1676.zTest)
  i1676.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1677[7], i1676.zWrite)
  i1676.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1677[8], i1676.culling)
  i1676.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1677[9], i1676.blending)
  i1676.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1677[10], i1676.alphaBlending)
  i1676.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1677[11], i1676.colorWriteMask)
  i1676.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1677[12], i1676.offsetUnits)
  i1676.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1677[13], i1676.offsetFactor)
  i1676.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1677[14], i1676.stencilRef)
  i1676.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1677[15], i1676.stencilReadMask)
  i1676.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1677[16], i1676.stencilWriteMask)
  i1676.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1677[17], i1676.stencilOp)
  i1676.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1677[18], i1676.stencilOpFront)
  i1676.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1677[19], i1676.stencilOpBack)
  var i1679 = i1677[20]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1679[i + 0]) );
  }
  i1676.tags = i1678
  var i1681 = i1677[21]
  var i1680 = []
  for(var i = 0; i < i1681.length; i += 1) {
    i1680.push( i1681[i + 0] );
  }
  i1676.passDefinedKeywords = i1680
  var i1683 = i1677[22]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1683[i + 0]) );
  }
  i1676.passDefinedKeywordGroups = i1682
  var i1685 = i1677[23]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1685[i + 0]) );
  }
  i1676.variants = i1684
  var i1687 = i1677[24]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1687[i + 0]) );
  }
  i1676.excludedVariants = i1686
  i1676.hasDepthReader = !!i1677[25]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1689 = data
  i1688.val = i1689[0]
  i1688.name = i1689[1]
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1691 = data
  i1690.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1691[0], i1690.src)
  i1690.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1691[1], i1690.dst)
  i1690.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1691[2], i1690.op)
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1693 = data
  i1692.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1693[0], i1692.pass)
  i1692.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1693[1], i1692.fail)
  i1692.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1693[2], i1692.zFail)
  i1692.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1693[3], i1692.comp)
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1697 = data
  i1696.name = i1697[0]
  i1696.value = i1697[1]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1701 = data
  var i1703 = i1701[0]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.push( i1703[i + 0] );
  }
  i1700.keywords = i1702
  i1700.hasDiscard = !!i1701[1]
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1707 = data
  i1706.passId = i1707[0]
  i1706.subShaderIndex = i1707[1]
  var i1709 = i1707[2]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( i1709[i + 0] );
  }
  i1706.keywords = i1708
  i1706.vertexProgram = i1707[3]
  i1706.fragmentProgram = i1707[4]
  i1706.exportedForWebGl2 = !!i1707[5]
  i1706.readDepth = !!i1707[6]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1713 = data
  request.r(i1713[0], i1713[1], 0, i1712, 'shader')
  i1712.pass = i1713[2]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1717 = data
  i1716.name = i1717[0]
  i1716.type = i1717[1]
  i1716.value = new pc.Vec4( i1717[2], i1717[3], i1717[4], i1717[5] )
  i1716.textureValue = i1717[6]
  i1716.shaderPropertyFlag = i1717[7]
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1719 = data
  i1718.name = i1719[0]
  request.r(i1719[1], i1719[2], 0, i1718, 'texture')
  i1718.aabb = i1719[3]
  i1718.vertices = i1719[4]
  i1718.triangles = i1719[5]
  i1718.textureRect = UnityEngine.Rect.MinMaxRect(i1719[6], i1719[7], i1719[8], i1719[9])
  i1718.packedRect = UnityEngine.Rect.MinMaxRect(i1719[10], i1719[11], i1719[12], i1719[13])
  i1718.border = new pc.Vec4( i1719[14], i1719[15], i1719[16], i1719[17] )
  i1718.transparency = i1719[18]
  i1718.bounds = i1719[19]
  i1718.pixelsPerUnit = i1719[20]
  i1718.textureWidth = i1719[21]
  i1718.textureHeight = i1719[22]
  i1718.nativeSize = new pc.Vec2( i1719[23], i1719[24] )
  i1718.pivot = new pc.Vec2( i1719[25], i1719[26] )
  i1718.textureRectOffset = new pc.Vec2( i1719[27], i1719[28] )
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1721 = data
  i1720.name = i1721[0]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1723 = data
  i1722.name = i1723[0]
  i1722.ascent = i1723[1]
  i1722.originalLineHeight = i1723[2]
  i1722.fontSize = i1723[3]
  var i1725 = i1723[4]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1725[i + 0]) );
  }
  i1722.characterInfo = i1724
  request.r(i1723[5], i1723[6], 0, i1722, 'texture')
  i1722.originalFontSize = i1723[7]
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1729 = data
  i1728.index = i1729[0]
  i1728.advance = i1729[1]
  i1728.bearing = i1729[2]
  i1728.glyphWidth = i1729[3]
  i1728.glyphHeight = i1729[4]
  i1728.minX = i1729[5]
  i1728.maxX = i1729[6]
  i1728.minY = i1729[7]
  i1728.maxY = i1729[8]
  i1728.uvBottomLeftX = i1729[9]
  i1728.uvBottomLeftY = i1729[10]
  i1728.uvBottomRightX = i1729[11]
  i1728.uvBottomRightY = i1729[12]
  i1728.uvTopLeftX = i1729[13]
  i1728.uvTopLeftY = i1729[14]
  i1728.uvTopRightX = i1729[15]
  i1728.uvTopRightY = i1729[16]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1731 = data
  i1730.name = i1731[0]
  i1730.bytes64 = i1731[1]
  i1730.data = i1731[2]
  return i1730
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1732 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1733 = data
  var i1735 = i1733[0]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 2) {
  request.r(i1735[i + 0], i1735[i + 1], 2, i1734, '')
  }
  i1732.atlasAssets = i1734
  i1732.scale = i1733[1]
  request.r(i1733[2], i1733[3], 0, i1732, 'skeletonJSON')
  i1732.isUpgradingBlendModeMaterials = !!i1733[4]
  i1732.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1733[5], i1732.blendModeMaterials)
  var i1737 = i1733[6]
  var i1736 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1737.length; i += 2) {
  request.r(i1737[i + 0], i1737[i + 1], 1, i1736, '')
  }
  i1732.skeletonDataModifiers = i1736
  var i1739 = i1733[7]
  var i1738 = []
  for(var i = 0; i < i1739.length; i += 1) {
    i1738.push( i1739[i + 0] );
  }
  i1732.fromAnimation = i1738
  var i1741 = i1733[8]
  var i1740 = []
  for(var i = 0; i < i1741.length; i += 1) {
    i1740.push( i1741[i + 0] );
  }
  i1732.toAnimation = i1740
  i1732.duration = i1733[9]
  i1732.defaultMix = i1733[10]
  request.r(i1733[11], i1733[12], 0, i1732, 'controller')
  return i1732
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1744 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1745 = data
  i1744.applyAdditiveMaterial = !!i1745[0]
  var i1747 = i1745[1]
  var i1746 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1747[i + 0]));
  }
  i1744.additiveMaterials = i1746
  var i1749 = i1745[2]
  var i1748 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1749[i + 0]));
  }
  i1744.multiplyMaterials = i1748
  var i1751 = i1745[3]
  var i1750 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1751[i + 0]));
  }
  i1744.screenMaterials = i1750
  i1744.requiresBlendModeMaterials = !!i1745[4]
  return i1744
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1754 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1755 = data
  i1754.pageName = i1755[0]
  request.r(i1755[1], i1755[2], 0, i1754, 'material')
  return i1754
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1758 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1759 = data
  request.r(i1759[0], i1759[1], 0, i1758, 'atlasFile')
  var i1761 = i1759[2]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 2) {
  request.r(i1761[i + 0], i1761[i + 1], 2, i1760, '')
  }
  i1758.materials = i1760
  i1758.textureLoadingMode = i1759[3]
  request.r(i1759[4], i1759[5], 0, i1758, 'onDemandTextureLoader')
  return i1758
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1762 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1763 = data
  request.r(i1763[0], i1763[1], 0, i1762, 'atlas')
  i1762.normalStyle = i1763[2]
  i1762.normalSpacingOffset = i1763[3]
  i1762.boldStyle = i1763[4]
  i1762.boldSpacing = i1763[5]
  i1762.italicStyle = i1763[6]
  i1762.tabSize = i1763[7]
  i1762.hashCode = i1763[8]
  request.r(i1763[9], i1763[10], 0, i1762, 'material')
  i1762.materialHashCode = i1763[11]
  i1762.m_Version = i1763[12]
  i1762.m_SourceFontFileGUID = i1763[13]
  request.r(i1763[14], i1763[15], 0, i1762, 'm_SourceFontFile_EditorRef')
  request.r(i1763[16], i1763[17], 0, i1762, 'm_SourceFontFile')
  i1762.m_AtlasPopulationMode = i1763[18]
  i1762.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1763[19], i1762.m_FaceInfo)
  var i1765 = i1763[20]
  var i1764 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.add(request.d('UnityEngine.TextCore.Glyph', i1765[i + 0]));
  }
  i1762.m_GlyphTable = i1764
  var i1767 = i1763[21]
  var i1766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.add(request.d('TMPro.TMP_Character', i1767[i + 0]));
  }
  i1762.m_CharacterTable = i1766
  var i1769 = i1763[22]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 2) {
  request.r(i1769[i + 0], i1769[i + 1], 2, i1768, '')
  }
  i1762.m_AtlasTextures = i1768
  i1762.m_AtlasTextureIndex = i1763[23]
  i1762.m_IsMultiAtlasTexturesEnabled = !!i1763[24]
  i1762.m_ClearDynamicDataOnBuild = !!i1763[25]
  var i1771 = i1763[26]
  var i1770 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.add(request.d('UnityEngine.TextCore.GlyphRect', i1771[i + 0]));
  }
  i1762.m_UsedGlyphRects = i1770
  var i1773 = i1763[27]
  var i1772 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.add(request.d('UnityEngine.TextCore.GlyphRect', i1773[i + 0]));
  }
  i1762.m_FreeGlyphRects = i1772
  i1762.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1763[28], i1762.m_fontInfo)
  i1762.m_AtlasWidth = i1763[29]
  i1762.m_AtlasHeight = i1763[30]
  i1762.m_AtlasPadding = i1763[31]
  i1762.m_AtlasRenderMode = i1763[32]
  var i1775 = i1763[33]
  var i1774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.add(request.d('TMPro.TMP_Glyph', i1775[i + 0]));
  }
  i1762.m_glyphInfoList = i1774
  i1762.m_KerningTable = request.d('TMPro.KerningTable', i1763[34], i1762.m_KerningTable)
  i1762.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1763[35], i1762.m_FontFeatureTable)
  var i1777 = i1763[36]
  var i1776 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1777.length; i += 2) {
  request.r(i1777[i + 0], i1777[i + 1], 1, i1776, '')
  }
  i1762.fallbackFontAssets = i1776
  var i1779 = i1763[37]
  var i1778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1779.length; i += 2) {
  request.r(i1779[i + 0], i1779[i + 1], 1, i1778, '')
  }
  i1762.m_FallbackFontAssetTable = i1778
  i1762.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1763[38], i1762.m_CreationSettings)
  var i1781 = i1763[39]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.push( request.d('TMPro.TMP_FontWeightPair', i1781[i + 0]) );
  }
  i1762.m_FontWeightTable = i1780
  var i1783 = i1763[40]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( request.d('TMPro.TMP_FontWeightPair', i1783[i + 0]) );
  }
  i1762.fontWeights = i1782
  return i1762
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1784 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1785 = data
  i1784.m_FaceIndex = i1785[0]
  i1784.m_FamilyName = i1785[1]
  i1784.m_StyleName = i1785[2]
  i1784.m_PointSize = i1785[3]
  i1784.m_Scale = i1785[4]
  i1784.m_UnitsPerEM = i1785[5]
  i1784.m_LineHeight = i1785[6]
  i1784.m_AscentLine = i1785[7]
  i1784.m_CapLine = i1785[8]
  i1784.m_MeanLine = i1785[9]
  i1784.m_Baseline = i1785[10]
  i1784.m_DescentLine = i1785[11]
  i1784.m_SuperscriptOffset = i1785[12]
  i1784.m_SuperscriptSize = i1785[13]
  i1784.m_SubscriptOffset = i1785[14]
  i1784.m_SubscriptSize = i1785[15]
  i1784.m_UnderlineOffset = i1785[16]
  i1784.m_UnderlineThickness = i1785[17]
  i1784.m_StrikethroughOffset = i1785[18]
  i1784.m_StrikethroughThickness = i1785[19]
  i1784.m_TabWidth = i1785[20]
  return i1784
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1788 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1789 = data
  i1788.m_Index = i1789[0]
  i1788.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1789[1], i1788.m_Metrics)
  i1788.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1789[2], i1788.m_GlyphRect)
  i1788.m_Scale = i1789[3]
  i1788.m_AtlasIndex = i1789[4]
  i1788.m_ClassDefinitionType = i1789[5]
  return i1788
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1790 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1791 = data
  i1790.m_Width = i1791[0]
  i1790.m_Height = i1791[1]
  i1790.m_HorizontalBearingX = i1791[2]
  i1790.m_HorizontalBearingY = i1791[3]
  i1790.m_HorizontalAdvance = i1791[4]
  return i1790
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1792 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1793 = data
  i1792.m_X = i1793[0]
  i1792.m_Y = i1793[1]
  i1792.m_Width = i1793[2]
  i1792.m_Height = i1793[3]
  return i1792
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1796 = root || request.c( 'TMPro.TMP_Character' )
  var i1797 = data
  i1796.m_ElementType = i1797[0]
  i1796.m_Unicode = i1797[1]
  i1796.m_GlyphIndex = i1797[2]
  i1796.m_Scale = i1797[3]
  return i1796
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1802 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1803 = data
  i1802.Name = i1803[0]
  i1802.PointSize = i1803[1]
  i1802.Scale = i1803[2]
  i1802.CharacterCount = i1803[3]
  i1802.LineHeight = i1803[4]
  i1802.Baseline = i1803[5]
  i1802.Ascender = i1803[6]
  i1802.CapHeight = i1803[7]
  i1802.Descender = i1803[8]
  i1802.CenterLine = i1803[9]
  i1802.SuperscriptOffset = i1803[10]
  i1802.SubscriptOffset = i1803[11]
  i1802.SubSize = i1803[12]
  i1802.Underline = i1803[13]
  i1802.UnderlineThickness = i1803[14]
  i1802.strikethrough = i1803[15]
  i1802.strikethroughThickness = i1803[16]
  i1802.TabWidth = i1803[17]
  i1802.Padding = i1803[18]
  i1802.AtlasWidth = i1803[19]
  i1802.AtlasHeight = i1803[20]
  return i1802
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1806 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1807 = data
  i1806.id = i1807[0]
  i1806.x = i1807[1]
  i1806.y = i1807[2]
  i1806.width = i1807[3]
  i1806.height = i1807[4]
  i1806.xOffset = i1807[5]
  i1806.yOffset = i1807[6]
  i1806.xAdvance = i1807[7]
  i1806.scale = i1807[8]
  return i1806
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1808 = root || request.c( 'TMPro.KerningTable' )
  var i1809 = data
  var i1811 = i1809[0]
  var i1810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1811.length; i += 1) {
    i1810.add(request.d('TMPro.KerningPair', i1811[i + 0]));
  }
  i1808.kerningPairs = i1810
  return i1808
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1814 = root || request.c( 'TMPro.KerningPair' )
  var i1815 = data
  i1814.xOffset = i1815[0]
  i1814.m_FirstGlyph = i1815[1]
  i1814.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1815[2], i1814.m_FirstGlyphAdjustments)
  i1814.m_SecondGlyph = i1815[3]
  i1814.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1815[4], i1814.m_SecondGlyphAdjustments)
  i1814.m_IgnoreSpacingAdjustments = !!i1815[5]
  return i1814
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1816 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1817 = data
  var i1819 = i1817[0]
  var i1818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1819[i + 0]));
  }
  i1816.m_GlyphPairAdjustmentRecords = i1818
  return i1816
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1822 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1823 = data
  i1822.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1823[0], i1822.m_FirstAdjustmentRecord)
  i1822.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1823[1], i1822.m_SecondAdjustmentRecord)
  i1822.m_FeatureLookupFlags = i1823[2]
  return i1822
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1826 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1827 = data
  i1826.sourceFontFileName = i1827[0]
  i1826.sourceFontFileGUID = i1827[1]
  i1826.pointSizeSamplingMode = i1827[2]
  i1826.pointSize = i1827[3]
  i1826.padding = i1827[4]
  i1826.packingMode = i1827[5]
  i1826.atlasWidth = i1827[6]
  i1826.atlasHeight = i1827[7]
  i1826.characterSetSelectionMode = i1827[8]
  i1826.characterSequence = i1827[9]
  i1826.referencedFontAssetGUID = i1827[10]
  i1826.referencedTextAssetGUID = i1827[11]
  i1826.fontStyle = i1827[12]
  i1826.fontStyleModifier = i1827[13]
  i1826.renderMode = i1827[14]
  i1826.includeFontFeatures = !!i1827[15]
  return i1826
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1830 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1831 = data
  request.r(i1831[0], i1831[1], 0, i1830, 'regularTypeface')
  request.r(i1831[2], i1831[3], 0, i1830, 'italicTypeface')
  return i1830
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1832 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1833 = data
  i1832.useSafeMode = !!i1833[0]
  i1832.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1833[1], i1832.safeModeOptions)
  i1832.timeScale = i1833[2]
  i1832.unscaledTimeScale = i1833[3]
  i1832.useSmoothDeltaTime = !!i1833[4]
  i1832.maxSmoothUnscaledTime = i1833[5]
  i1832.rewindCallbackMode = i1833[6]
  i1832.showUnityEditorReport = !!i1833[7]
  i1832.logBehaviour = i1833[8]
  i1832.drawGizmos = !!i1833[9]
  i1832.defaultRecyclable = !!i1833[10]
  i1832.defaultAutoPlay = i1833[11]
  i1832.defaultUpdateType = i1833[12]
  i1832.defaultTimeScaleIndependent = !!i1833[13]
  i1832.defaultEaseType = i1833[14]
  i1832.defaultEaseOvershootOrAmplitude = i1833[15]
  i1832.defaultEasePeriod = i1833[16]
  i1832.defaultAutoKill = !!i1833[17]
  i1832.defaultLoopType = i1833[18]
  i1832.debugMode = !!i1833[19]
  i1832.debugStoreTargetId = !!i1833[20]
  i1832.showPreviewPanel = !!i1833[21]
  i1832.storeSettingsLocation = i1833[22]
  i1832.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1833[23], i1832.modules)
  i1832.createASMDEF = !!i1833[24]
  i1832.showPlayingTweens = !!i1833[25]
  i1832.showPausedTweens = !!i1833[26]
  return i1832
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1834 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1835 = data
  i1834.logBehaviour = i1835[0]
  i1834.nestedTweenFailureBehaviour = i1835[1]
  return i1834
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1836 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1837 = data
  i1836.showPanel = !!i1837[0]
  i1836.audioEnabled = !!i1837[1]
  i1836.physicsEnabled = !!i1837[2]
  i1836.physics2DEnabled = !!i1837[3]
  i1836.spriteEnabled = !!i1837[4]
  i1836.uiEnabled = !!i1837[5]
  i1836.textMeshProEnabled = !!i1837[6]
  i1836.tk2DEnabled = !!i1837[7]
  i1836.deAudioEnabled = !!i1837[8]
  i1836.deUnityExtendedEnabled = !!i1837[9]
  i1836.epoOutlineEnabled = !!i1837[10]
  return i1836
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1838 = root || request.c( 'TMPro.TMP_Settings' )
  var i1839 = data
  i1838.m_enableWordWrapping = !!i1839[0]
  i1838.m_enableKerning = !!i1839[1]
  i1838.m_enableExtraPadding = !!i1839[2]
  i1838.m_enableTintAllSprites = !!i1839[3]
  i1838.m_enableParseEscapeCharacters = !!i1839[4]
  i1838.m_EnableRaycastTarget = !!i1839[5]
  i1838.m_GetFontFeaturesAtRuntime = !!i1839[6]
  i1838.m_missingGlyphCharacter = i1839[7]
  i1838.m_warningsDisabled = !!i1839[8]
  request.r(i1839[9], i1839[10], 0, i1838, 'm_defaultFontAsset')
  i1838.m_defaultFontAssetPath = i1839[11]
  i1838.m_defaultFontSize = i1839[12]
  i1838.m_defaultAutoSizeMinRatio = i1839[13]
  i1838.m_defaultAutoSizeMaxRatio = i1839[14]
  i1838.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1839[15], i1839[16] )
  i1838.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1839[17], i1839[18] )
  i1838.m_autoSizeTextContainer = !!i1839[19]
  i1838.m_IsTextObjectScaleStatic = !!i1839[20]
  var i1841 = i1839[21]
  var i1840 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1841.length; i += 2) {
  request.r(i1841[i + 0], i1841[i + 1], 1, i1840, '')
  }
  i1838.m_fallbackFontAssets = i1840
  i1838.m_matchMaterialPreset = !!i1839[22]
  request.r(i1839[23], i1839[24], 0, i1838, 'm_defaultSpriteAsset')
  i1838.m_defaultSpriteAssetPath = i1839[25]
  i1838.m_enableEmojiSupport = !!i1839[26]
  i1838.m_MissingCharacterSpriteUnicode = i1839[27]
  i1838.m_defaultColorGradientPresetsPath = i1839[28]
  request.r(i1839[29], i1839[30], 0, i1838, 'm_defaultStyleSheet')
  i1838.m_StyleSheetsResourcePath = i1839[31]
  request.r(i1839[32], i1839[33], 0, i1838, 'm_leadingCharacters')
  request.r(i1839[34], i1839[35], 0, i1838, 'm_followingCharacters')
  i1838.m_UseModernHangulLineBreakingRules = !!i1839[36]
  return i1838
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1842 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1843 = data
  request.r(i1843[0], i1843[1], 0, i1842, 'spriteSheet')
  var i1845 = i1843[2]
  var i1844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.add(request.d('TMPro.TMP_Sprite', i1845[i + 0]));
  }
  i1842.spriteInfoList = i1844
  var i1847 = i1843[3]
  var i1846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1847.length; i += 2) {
  request.r(i1847[i + 0], i1847[i + 1], 1, i1846, '')
  }
  i1842.fallbackSpriteAssets = i1846
  i1842.hashCode = i1843[4]
  request.r(i1843[5], i1843[6], 0, i1842, 'material')
  i1842.materialHashCode = i1843[7]
  i1842.m_Version = i1843[8]
  i1842.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1843[9], i1842.m_FaceInfo)
  var i1849 = i1843[10]
  var i1848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.add(request.d('TMPro.TMP_SpriteCharacter', i1849[i + 0]));
  }
  i1842.m_SpriteCharacterTable = i1848
  var i1851 = i1843[11]
  var i1850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.add(request.d('TMPro.TMP_SpriteGlyph', i1851[i + 0]));
  }
  i1842.m_SpriteGlyphTable = i1850
  return i1842
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1854 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1855 = data
  i1854.name = i1855[0]
  i1854.hashCode = i1855[1]
  i1854.unicode = i1855[2]
  i1854.pivot = new pc.Vec2( i1855[3], i1855[4] )
  request.r(i1855[5], i1855[6], 0, i1854, 'sprite')
  i1854.id = i1855[7]
  i1854.x = i1855[8]
  i1854.y = i1855[9]
  i1854.width = i1855[10]
  i1854.height = i1855[11]
  i1854.xOffset = i1855[12]
  i1854.yOffset = i1855[13]
  i1854.xAdvance = i1855[14]
  i1854.scale = i1855[15]
  return i1854
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1860 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1861 = data
  i1860.m_Name = i1861[0]
  i1860.m_HashCode = i1861[1]
  i1860.m_ElementType = i1861[2]
  i1860.m_Unicode = i1861[3]
  i1860.m_GlyphIndex = i1861[4]
  i1860.m_Scale = i1861[5]
  return i1860
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1864 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1865 = data
  request.r(i1865[0], i1865[1], 0, i1864, 'sprite')
  i1864.m_Index = i1865[2]
  i1864.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1865[3], i1864.m_Metrics)
  i1864.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1865[4], i1864.m_GlyphRect)
  i1864.m_Scale = i1865[5]
  i1864.m_AtlasIndex = i1865[6]
  i1864.m_ClassDefinitionType = i1865[7]
  return i1864
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1866 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1867 = data
  var i1869 = i1867[0]
  var i1868 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.add(request.d('TMPro.TMP_Style', i1869[i + 0]));
  }
  i1866.m_StyleList = i1868
  return i1866
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1872 = root || request.c( 'TMPro.TMP_Style' )
  var i1873 = data
  i1872.m_Name = i1873[0]
  i1872.m_HashCode = i1873[1]
  i1872.m_OpeningDefinition = i1873[2]
  i1872.m_ClosingDefinition = i1873[3]
  i1872.m_OpeningTagArray = i1873[4]
  i1872.m_ClosingTagArray = i1873[5]
  i1872.m_OpeningTagUnicodeArray = i1873[6]
  i1872.m_ClosingTagUnicodeArray = i1873[7]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1875 = data
  var i1877 = i1875[0]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1877[i + 0]) );
  }
  i1874.files = i1876
  i1874.componentToPrefabIds = i1875[1]
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1881 = data
  i1880.path = i1881[0]
  request.r(i1881[1], i1881[2], 0, i1880, 'unityObject')
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1883 = data
  var i1885 = i1883[0]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1885[i + 0]) );
  }
  i1882.scriptsExecutionOrder = i1884
  var i1887 = i1883[1]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1887[i + 0]) );
  }
  i1882.sortingLayers = i1886
  var i1889 = i1883[2]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1889[i + 0]) );
  }
  i1882.cullingLayers = i1888
  i1882.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1883[3], i1882.timeSettings)
  i1882.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1883[4], i1882.physicsSettings)
  i1882.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1883[5], i1882.physics2DSettings)
  i1882.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1883[6], i1882.qualitySettings)
  i1882.enableRealtimeShadows = !!i1883[7]
  i1882.enableAutoInstancing = !!i1883[8]
  i1882.enableStaticBatching = !!i1883[9]
  i1882.enableDynamicBatching = !!i1883[10]
  i1882.lightmapEncodingQuality = i1883[11]
  i1882.desiredColorSpace = i1883[12]
  var i1891 = i1883[13]
  var i1890 = []
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.push( i1891[i + 0] );
  }
  i1882.allTags = i1890
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1895 = data
  i1894.name = i1895[0]
  i1894.value = i1895[1]
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1899 = data
  i1898.id = i1899[0]
  i1898.name = i1899[1]
  i1898.value = i1899[2]
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1903 = data
  i1902.id = i1903[0]
  i1902.name = i1903[1]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1905 = data
  i1904.fixedDeltaTime = i1905[0]
  i1904.maximumDeltaTime = i1905[1]
  i1904.timeScale = i1905[2]
  i1904.maximumParticleTimestep = i1905[3]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1907 = data
  i1906.gravity = new pc.Vec3( i1907[0], i1907[1], i1907[2] )
  i1906.defaultSolverIterations = i1907[3]
  i1906.bounceThreshold = i1907[4]
  i1906.autoSyncTransforms = !!i1907[5]
  i1906.autoSimulation = !!i1907[6]
  var i1909 = i1907[7]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1909[i + 0]) );
  }
  i1906.collisionMatrix = i1908
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1913 = data
  i1912.enabled = !!i1913[0]
  i1912.layerId = i1913[1]
  i1912.otherLayerId = i1913[2]
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1915 = data
  request.r(i1915[0], i1915[1], 0, i1914, 'material')
  i1914.gravity = new pc.Vec2( i1915[2], i1915[3] )
  i1914.positionIterations = i1915[4]
  i1914.velocityIterations = i1915[5]
  i1914.velocityThreshold = i1915[6]
  i1914.maxLinearCorrection = i1915[7]
  i1914.maxAngularCorrection = i1915[8]
  i1914.maxTranslationSpeed = i1915[9]
  i1914.maxRotationSpeed = i1915[10]
  i1914.baumgarteScale = i1915[11]
  i1914.baumgarteTOIScale = i1915[12]
  i1914.timeToSleep = i1915[13]
  i1914.linearSleepTolerance = i1915[14]
  i1914.angularSleepTolerance = i1915[15]
  i1914.defaultContactOffset = i1915[16]
  i1914.autoSimulation = !!i1915[17]
  i1914.queriesHitTriggers = !!i1915[18]
  i1914.queriesStartInColliders = !!i1915[19]
  i1914.callbacksOnDisable = !!i1915[20]
  i1914.reuseCollisionCallbacks = !!i1915[21]
  i1914.autoSyncTransforms = !!i1915[22]
  var i1917 = i1915[23]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1917[i + 0]) );
  }
  i1914.collisionMatrix = i1916
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1921 = data
  i1920.enabled = !!i1921[0]
  i1920.layerId = i1921[1]
  i1920.otherLayerId = i1921[2]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1923 = data
  var i1925 = i1923[0]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1925[i + 0]) );
  }
  i1922.qualityLevels = i1924
  var i1927 = i1923[1]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( i1927[i + 0] );
  }
  i1922.names = i1926
  i1922.shadows = i1923[2]
  i1922.anisotropicFiltering = i1923[3]
  i1922.antiAliasing = i1923[4]
  i1922.lodBias = i1923[5]
  i1922.shadowCascades = i1923[6]
  i1922.shadowDistance = i1923[7]
  i1922.shadowmaskMode = i1923[8]
  i1922.shadowProjection = i1923[9]
  i1922.shadowResolution = i1923[10]
  i1922.softParticles = !!i1923[11]
  i1922.softVegetation = !!i1923[12]
  i1922.activeColorSpace = i1923[13]
  i1922.desiredColorSpace = i1923[14]
  i1922.masterTextureLimit = i1923[15]
  i1922.maxQueuedFrames = i1923[16]
  i1922.particleRaycastBudget = i1923[17]
  i1922.pixelLightCount = i1923[18]
  i1922.realtimeReflectionProbes = !!i1923[19]
  i1922.shadowCascade2Split = i1923[20]
  i1922.shadowCascade4Split = new pc.Vec3( i1923[21], i1923[22], i1923[23] )
  i1922.streamingMipmapsActive = !!i1923[24]
  i1922.vSyncCount = i1923[25]
  i1922.asyncUploadBufferSize = i1923[26]
  i1922.asyncUploadTimeSlice = i1923[27]
  i1922.billboardsFaceCameraPosition = !!i1923[28]
  i1922.shadowNearPlaneOffset = i1923[29]
  i1922.streamingMipmapsMemoryBudget = i1923[30]
  i1922.maximumLODLevel = i1923[31]
  i1922.streamingMipmapsAddAllCameras = !!i1923[32]
  i1922.streamingMipmapsMaxLevelReduction = i1923[33]
  i1922.streamingMipmapsRenderersPerFrame = i1923[34]
  i1922.resolutionScalingFixedDPIFactor = i1923[35]
  i1922.streamingMipmapsMaxFileIORequests = i1923[36]
  i1922.currentQualityLevel = i1923[37]
  return i1922
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1930 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1931 = data
  i1930.xPlacement = i1931[0]
  i1930.yPlacement = i1931[1]
  i1930.xAdvance = i1931[2]
  i1930.yAdvance = i1931[3]
  return i1930
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1932 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1933 = data
  i1932.m_GlyphIndex = i1933[0]
  i1932.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1933[1], i1932.m_GlyphValueRecord)
  return i1932
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1934 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1935 = data
  i1934.m_XPlacement = i1935[0]
  i1934.m_YPlacement = i1935[1]
  i1934.m_XAdvance = i1935[2]
  i1934.m_YAdvance = i1935[3]
  return i1934
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[3],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[3],"76":[77],"78":[79],"80":[79],"9":[8],"81":[82],"83":[84],"85":[82],"86":[8],"87":[8],"11":[9],"19":[20,8],"88":[8],"10":[9],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"34":[8],"96":[8],"16":[20,8],"97":[8],"98":[8],"99":[8],"100":[8],"101":[20,8],"102":[8],"103":[6],"104":[6],"7":[6],"105":[6],"106":[3],"107":[3],"108":[109],"110":[3],"111":[112],"113":[8],"114":[20,8],"115":[77],"24":[20,8],"116":[117,77],"118":[77],"119":[77,120],"121":[54],"122":[62],"123":[112],"124":[125],"126":[8],"127":[77,8],"18":[8,20],"128":[8],"129":[20,8],"130":[77],"131":[20,8],"132":[8],"133":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","MixSkeletonSkin","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","ClickItem","DraggableItem","UnityEngine.CanvasGroup","DropZone","UnityEngine.PolygonCollider2D","DG.Tweening.DOTweenAnimation","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "267.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BTTP_V15_NgocBTU_AnhPD";

Deserializers.lunaAppID = "36041";

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

Deserializers.buildID = "d2ef239e-6068-401b-9740-13f1d22b883f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

