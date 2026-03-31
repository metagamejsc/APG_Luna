var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1440 = root || request.c( 'UnityEngine.JointSpring' )
  var i1441 = data
  i1440.spring = i1441[0]
  i1440.damper = i1441[1]
  i1440.targetPosition = i1441[2]
  return i1440
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1442 = root || request.c( 'UnityEngine.JointMotor' )
  var i1443 = data
  i1442.m_TargetVelocity = i1443[0]
  i1442.m_Force = i1443[1]
  i1442.m_FreeSpin = i1443[2]
  return i1442
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1444 = root || request.c( 'UnityEngine.JointLimits' )
  var i1445 = data
  i1444.m_Min = i1445[0]
  i1444.m_Max = i1445[1]
  i1444.m_Bounciness = i1445[2]
  i1444.m_BounceMinVelocity = i1445[3]
  i1444.m_ContactDistance = i1445[4]
  i1444.minBounce = i1445[5]
  i1444.maxBounce = i1445[6]
  return i1444
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1446 = root || request.c( 'UnityEngine.JointDrive' )
  var i1447 = data
  i1446.m_PositionSpring = i1447[0]
  i1446.m_PositionDamper = i1447[1]
  i1446.m_MaximumForce = i1447[2]
  i1446.m_UseAcceleration = i1447[3]
  return i1446
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1448 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1449 = data
  i1448.m_Spring = i1449[0]
  i1448.m_Damper = i1449[1]
  return i1448
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1450 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1451 = data
  i1450.m_Limit = i1451[0]
  i1450.m_Bounciness = i1451[1]
  i1450.m_ContactDistance = i1451[2]
  return i1450
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1452 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1453 = data
  i1452.m_ExtremumSlip = i1453[0]
  i1452.m_ExtremumValue = i1453[1]
  i1452.m_AsymptoteSlip = i1453[2]
  i1452.m_AsymptoteValue = i1453[3]
  i1452.m_Stiffness = i1453[4]
  return i1452
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1454 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1455 = data
  i1454.m_LowerAngle = i1455[0]
  i1454.m_UpperAngle = i1455[1]
  return i1454
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1456 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1457 = data
  i1456.m_MotorSpeed = i1457[0]
  i1456.m_MaximumMotorTorque = i1457[1]
  return i1456
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1458 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1459 = data
  i1458.m_DampingRatio = i1459[0]
  i1458.m_Frequency = i1459[1]
  i1458.m_Angle = i1459[2]
  return i1458
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1460 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1461 = data
  i1460.m_LowerTranslation = i1461[0]
  i1460.m_UpperTranslation = i1461[1]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1463 = data
  i1462.name = i1463[0]
  i1462.width = i1463[1]
  i1462.height = i1463[2]
  i1462.mipmapCount = i1463[3]
  i1462.anisoLevel = i1463[4]
  i1462.filterMode = i1463[5]
  i1462.hdr = !!i1463[6]
  i1462.format = i1463[7]
  i1462.wrapMode = i1463[8]
  i1462.alphaIsTransparency = !!i1463[9]
  i1462.alphaSource = i1463[10]
  i1462.graphicsFormat = i1463[11]
  i1462.sRGBTexture = !!i1463[12]
  i1462.desiredColorSpace = i1463[13]
  i1462.wrapU = i1463[14]
  i1462.wrapV = i1463[15]
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1464 = root || new pc.UnityMaterial()
  var i1465 = data
  i1464.name = i1465[0]
  request.r(i1465[1], i1465[2], 0, i1464, 'shader')
  i1464.renderQueue = i1465[3]
  i1464.enableInstancing = !!i1465[4]
  var i1467 = i1465[5]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1467[i + 0]) );
  }
  i1464.floatParameters = i1466
  var i1469 = i1465[6]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1469[i + 0]) );
  }
  i1464.colorParameters = i1468
  var i1471 = i1465[7]
  var i1470 = []
  for(var i = 0; i < i1471.length; i += 1) {
    i1470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1471[i + 0]) );
  }
  i1464.vectorParameters = i1470
  var i1473 = i1465[8]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1473[i + 0]) );
  }
  i1464.textureParameters = i1472
  var i1475 = i1465[9]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1475[i + 0]) );
  }
  i1464.materialFlags = i1474
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1479 = data
  i1478.name = i1479[0]
  i1478.value = i1479[1]
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1483 = data
  i1482.name = i1483[0]
  i1482.value = new pc.Color(i1483[1], i1483[2], i1483[3], i1483[4])
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1487 = data
  i1486.name = i1487[0]
  i1486.value = new pc.Vec4( i1487[1], i1487[2], i1487[3], i1487[4] )
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1491 = data
  i1490.name = i1491[0]
  request.r(i1491[1], i1491[2], 0, i1490, 'value')
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1495 = data
  i1494.name = i1495[0]
  i1494.enabled = !!i1495[1]
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1497 = data
  i1496.name = i1497[0]
  i1496.index = i1497[1]
  i1496.startup = !!i1497[2]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1499 = data
  i1498.position = new pc.Vec3( i1499[0], i1499[1], i1499[2] )
  i1498.scale = new pc.Vec3( i1499[3], i1499[4], i1499[5] )
  i1498.rotation = new pc.Quat(i1499[6], i1499[7], i1499[8], i1499[9])
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1501 = data
  i1500.aspect = i1501[0]
  i1500.orthographic = !!i1501[1]
  i1500.orthographicSize = i1501[2]
  i1500.backgroundColor = new pc.Color(i1501[3], i1501[4], i1501[5], i1501[6])
  i1500.nearClipPlane = i1501[7]
  i1500.farClipPlane = i1501[8]
  i1500.fieldOfView = i1501[9]
  i1500.depth = i1501[10]
  i1500.clearFlags = i1501[11]
  i1500.cullingMask = i1501[12]
  i1500.rect = i1501[13]
  request.r(i1501[14], i1501[15], 0, i1500, 'targetTexture')
  i1500.usePhysicalProperties = !!i1501[16]
  i1500.focalLength = i1501[17]
  i1500.sensorSize = new pc.Vec2( i1501[18], i1501[19] )
  i1500.lensShift = new pc.Vec2( i1501[20], i1501[21] )
  i1500.gateFit = i1501[22]
  i1500.commandBufferCount = i1501[23]
  i1500.cameraType = i1501[24]
  i1500.enabled = !!i1501[25]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1503 = data
  i1502.name = i1503[0]
  i1502.tagId = i1503[1]
  i1502.enabled = !!i1503[2]
  i1502.isStatic = !!i1503[3]
  i1502.layer = i1503[4]
  return i1502
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1504 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1505 = data
  request.r(i1505[0], i1505[1], 0, i1504, 'm_FirstSelected')
  i1504.m_sendNavigationEvents = !!i1505[2]
  i1504.m_DragThreshold = i1505[3]
  return i1504
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1506 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1507 = data
  i1506.m_HorizontalAxis = i1507[0]
  i1506.m_VerticalAxis = i1507[1]
  i1506.m_SubmitButton = i1507[2]
  i1506.m_CancelButton = i1507[3]
  i1506.m_InputActionsPerSecond = i1507[4]
  i1506.m_RepeatDelay = i1507[5]
  i1506.m_ForceModuleActive = !!i1507[6]
  i1506.m_SendPointerHoverToParent = !!i1507[7]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1509 = data
  i1508.pivot = new pc.Vec2( i1509[0], i1509[1] )
  i1508.anchorMin = new pc.Vec2( i1509[2], i1509[3] )
  i1508.anchorMax = new pc.Vec2( i1509[4], i1509[5] )
  i1508.sizeDelta = new pc.Vec2( i1509[6], i1509[7] )
  i1508.anchoredPosition3D = new pc.Vec3( i1509[8], i1509[9], i1509[10] )
  i1508.rotation = new pc.Quat(i1509[11], i1509[12], i1509[13], i1509[14])
  i1508.scale = new pc.Vec3( i1509[15], i1509[16], i1509[17] )
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1511 = data
  i1510.planeDistance = i1511[0]
  i1510.referencePixelsPerUnit = i1511[1]
  i1510.isFallbackOverlay = !!i1511[2]
  i1510.renderMode = i1511[3]
  i1510.renderOrder = i1511[4]
  i1510.sortingLayerName = i1511[5]
  i1510.sortingOrder = i1511[6]
  i1510.scaleFactor = i1511[7]
  request.r(i1511[8], i1511[9], 0, i1510, 'worldCamera')
  i1510.overrideSorting = !!i1511[10]
  i1510.pixelPerfect = !!i1511[11]
  i1510.targetDisplay = i1511[12]
  i1510.overridePixelPerfect = !!i1511[13]
  i1510.enabled = !!i1511[14]
  return i1510
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1512 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1513 = data
  i1512.m_UiScaleMode = i1513[0]
  i1512.m_ReferencePixelsPerUnit = i1513[1]
  i1512.m_ScaleFactor = i1513[2]
  i1512.m_ReferenceResolution = new pc.Vec2( i1513[3], i1513[4] )
  i1512.m_ScreenMatchMode = i1513[5]
  i1512.m_MatchWidthOrHeight = i1513[6]
  i1512.m_PhysicalUnit = i1513[7]
  i1512.m_FallbackScreenDPI = i1513[8]
  i1512.m_DefaultSpriteDPI = i1513[9]
  i1512.m_DynamicPixelsPerUnit = i1513[10]
  i1512.m_PresetInfoIsWorld = !!i1513[11]
  return i1512
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1514 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1515 = data
  i1514.m_IgnoreReversedGraphics = !!i1515[0]
  i1514.m_BlockingObjects = i1515[1]
  i1514.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1515[2] )
  return i1514
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1516 = root || request.c( 'LunaManager' )
  var i1517 = data
  var i1519 = i1517[0]
  var i1518 = []
  for(var i = 0; i < i1519.length; i += 2) {
  request.r(i1519[i + 0], i1519[i + 1], 2, i1518, '')
  }
  i1516.lstBtnInstall = i1518
  request.r(i1517[1], i1517[2], 0, i1516, 'WinGO')
  request.r(i1517[3], i1517[4], 0, i1516, 'LoseGO')
  request.r(i1517[5], i1517[6], 0, i1516, 'StartCard')
  request.r(i1517[7], i1517[8], 0, i1516, 'EndCard')
  request.r(i1517[9], i1517[10], 0, i1516, 'Parent')
  i1516.isDrag = !!i1517[11]
  i1516.timeDrag = i1517[12]
  i1516.countPlay = i1517[13]
  i1516.countPlayFinal = i1517[14]
  i1516.countPlayMax = i1517[15]
  i1516.timeDropFinal = i1517[16]
  i1516.colorBG = new pc.Color(i1517[17], i1517[18], i1517[19], i1517[20])
  request.r(i1517[21], i1517[22], 0, i1516, 'texture2D')
  request.r(i1517[23], i1517[24], 0, i1516, 'rawImageBG')
  request.r(i1517[25], i1517[26], 0, i1516, 'MSSGroom')
  request.r(i1517[27], i1517[28], 0, i1516, 'MSSBride')
  request.r(i1517[29], i1517[30], 0, i1516, 'textProgess')
  request.r(i1517[31], i1517[32], 0, i1516, 'imgProgess')
  request.r(i1517[33], i1517[34], 0, i1516, 'timeText')
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1523 = data
  i1522.cullTransparentMesh = !!i1523[0]
  return i1522
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1524 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1525 = data
  request.r(i1525[0], i1525[1], 0, i1524, 'm_Texture')
  i1524.m_UVRect = UnityEngine.Rect.MinMaxRect(i1525[2], i1525[3], i1525[4], i1525[5])
  i1524.m_Maskable = !!i1525[6]
  request.r(i1525[7], i1525[8], 0, i1524, 'm_Material')
  i1524.m_Color = new pc.Color(i1525[9], i1525[10], i1525[11], i1525[12])
  i1524.m_RaycastTarget = !!i1525[13]
  i1524.m_RaycastPadding = new pc.Vec4( i1525[14], i1525[15], i1525[16], i1525[17] )
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1527 = data
  request.r(i1527[0], i1527[1], 0, i1526, 'clip')
  request.r(i1527[2], i1527[3], 0, i1526, 'outputAudioMixerGroup')
  i1526.playOnAwake = !!i1527[4]
  i1526.loop = !!i1527[5]
  i1526.time = i1527[6]
  i1526.volume = i1527[7]
  i1526.pitch = i1527[8]
  i1526.enabled = !!i1527[9]
  return i1526
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1528 = root || request.c( 'UnityEngine.UI.Image' )
  var i1529 = data
  request.r(i1529[0], i1529[1], 0, i1528, 'm_Sprite')
  i1528.m_Type = i1529[2]
  i1528.m_PreserveAspect = !!i1529[3]
  i1528.m_FillCenter = !!i1529[4]
  i1528.m_FillMethod = i1529[5]
  i1528.m_FillAmount = i1529[6]
  i1528.m_FillClockwise = !!i1529[7]
  i1528.m_FillOrigin = i1529[8]
  i1528.m_UseSpriteMesh = !!i1529[9]
  i1528.m_PixelsPerUnitMultiplier = i1529[10]
  i1528.m_Maskable = !!i1529[11]
  request.r(i1529[12], i1529[13], 0, i1528, 'm_Material')
  i1528.m_Color = new pc.Color(i1529[14], i1529[15], i1529[16], i1529[17])
  i1528.m_RaycastTarget = !!i1529[18]
  i1528.m_RaycastPadding = new pc.Vec4( i1529[19], i1529[20], i1529[21], i1529[22] )
  return i1528
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i1530 = root || request.c( 'ClickItem' )
  var i1531 = data
  var i1533 = i1531[0]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 2) {
  request.r(i1533[i + 0], i1533[i + 1], 2, i1532, '')
  }
  i1530.steps = i1532
  i1530.currentStep = i1531[1]
  i1530.isProcess = !!i1531[2]
  return i1530
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1536 = root || request.c( 'UnityEngine.UI.Button' )
  var i1537 = data
  i1536.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1537[0], i1536.m_OnClick)
  i1536.m_Navigation = request.d('UnityEngine.UI.Navigation', i1537[1], i1536.m_Navigation)
  i1536.m_Transition = i1537[2]
  i1536.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1537[3], i1536.m_Colors)
  i1536.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1537[4], i1536.m_SpriteState)
  i1536.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1537[5], i1536.m_AnimationTriggers)
  i1536.m_Interactable = !!i1537[6]
  request.r(i1537[7], i1537[8], 0, i1536, 'm_TargetGraphic')
  return i1536
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1538 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1539 = data
  i1538.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1539[0], i1538.m_PersistentCalls)
  return i1538
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1540 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1541 = data
  var i1543 = i1541[0]
  var i1542 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.add(request.d('UnityEngine.Events.PersistentCall', i1543[i + 0]));
  }
  i1540.m_Calls = i1542
  return i1540
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1546 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1547 = data
  request.r(i1547[0], i1547[1], 0, i1546, 'm_Target')
  i1546.m_TargetAssemblyTypeName = i1547[2]
  i1546.m_MethodName = i1547[3]
  i1546.m_Mode = i1547[4]
  i1546.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1547[5], i1546.m_Arguments)
  i1546.m_CallState = i1547[6]
  return i1546
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1548 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1549 = data
  i1548.m_Mode = i1549[0]
  i1548.m_WrapAround = !!i1549[1]
  request.r(i1549[2], i1549[3], 0, i1548, 'm_SelectOnUp')
  request.r(i1549[4], i1549[5], 0, i1548, 'm_SelectOnDown')
  request.r(i1549[6], i1549[7], 0, i1548, 'm_SelectOnLeft')
  request.r(i1549[8], i1549[9], 0, i1548, 'm_SelectOnRight')
  return i1548
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1550 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1551 = data
  i1550.m_NormalColor = new pc.Color(i1551[0], i1551[1], i1551[2], i1551[3])
  i1550.m_HighlightedColor = new pc.Color(i1551[4], i1551[5], i1551[6], i1551[7])
  i1550.m_PressedColor = new pc.Color(i1551[8], i1551[9], i1551[10], i1551[11])
  i1550.m_SelectedColor = new pc.Color(i1551[12], i1551[13], i1551[14], i1551[15])
  i1550.m_DisabledColor = new pc.Color(i1551[16], i1551[17], i1551[18], i1551[19])
  i1550.m_ColorMultiplier = i1551[20]
  i1550.m_FadeDuration = i1551[21]
  return i1550
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1552 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1553 = data
  request.r(i1553[0], i1553[1], 0, i1552, 'm_HighlightedSprite')
  request.r(i1553[2], i1553[3], 0, i1552, 'm_PressedSprite')
  request.r(i1553[4], i1553[5], 0, i1552, 'm_SelectedSprite')
  request.r(i1553[6], i1553[7], 0, i1552, 'm_DisabledSprite')
  return i1552
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1554 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1555 = data
  i1554.m_NormalTrigger = i1555[0]
  i1554.m_HighlightedTrigger = i1555[1]
  i1554.m_PressedTrigger = i1555[2]
  i1554.m_SelectedTrigger = i1555[3]
  i1554.m_DisabledTrigger = i1555[4]
  return i1554
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1556 = root || request.c( 'DraggableItem' )
  var i1557 = data
  i1556.idDrag = i1557[0]
  i1556.isProcess = !!i1557[1]
  i1556.isLose = !!i1557[2]
  i1556.isHide = !!i1557[3]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1559 = data
  i1558.m_Alpha = i1559[0]
  i1558.m_Interactable = !!i1559[1]
  i1558.m_BlocksRaycasts = !!i1559[2]
  i1558.m_IgnoreParentGroups = !!i1559[3]
  i1558.enabled = !!i1559[4]
  return i1558
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1560 = root || request.c( 'DropZone' )
  var i1561 = data
  i1560.idDrop = i1561[0]
  var i1563 = i1561[1]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 2) {
  request.r(i1563[i + 0], i1563[i + 1], 2, i1562, '')
  }
  i1560.steps = i1562
  request.r(i1561[2], i1561[3], 0, i1560, 'stepLose')
  return i1560
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

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1576 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1577 = data
  request.r(i1577[0], i1577[1], 0, i1576, 'skeletonDataAsset')
  request.r(i1577[2], i1577[3], 0, i1576, 'additiveMaterial')
  request.r(i1577[4], i1577[5], 0, i1576, 'multiplyMaterial')
  request.r(i1577[6], i1577[7], 0, i1576, 'screenMaterial')
  i1576.initialSkinName = i1577[8]
  i1576.initialFlipX = !!i1577[9]
  i1576.initialFlipY = !!i1577[10]
  i1576.startingAnimation = i1577[11]
  i1576.startingLoop = !!i1577[12]
  i1576.timeScale = i1577[13]
  i1576.freeze = !!i1577[14]
  i1576.layoutScaleMode = i1577[15]
  i1576.updateWhenInvisible = i1577[16]
  i1576.allowMultipleCanvasRenderers = !!i1577[17]
  var i1579 = i1577[18]
  var i1578 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1579.length; i += 2) {
  request.r(i1579[i + 0], i1579[i + 1], 1, i1578, '')
  }
  i1576.canvasRenderers = i1578
  i1576.enableSeparatorSlots = !!i1577[19]
  i1576.updateSeparatorPartLocation = !!i1577[20]
  i1576.updateSeparatorPartScale = !!i1577[21]
  i1576.disableMeshAssignmentOnOverride = !!i1577[22]
  i1576.referenceSize = new pc.Vec2( i1577[23], i1577[24] )
  i1576.referenceScale = i1577[25]
  i1576.rectTransformSize = new pc.Vec2( i1577[26], i1577[27] )
  i1576.editReferenceRect = !!i1577[28]
  var i1581 = i1577[29]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.push( i1581[i + 0] );
  }
  i1576.separatorSlotNames = i1580
  var i1583 = i1577[30]
  var i1582 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1583.length; i += 2) {
  request.r(i1583[i + 0], i1583[i + 1], 1, i1582, '')
  }
  i1576.separatorParts = i1582
  i1576.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1577[31], i1576.meshGenerator)
  i1576.updateTiming = i1577[32]
  i1576.unscaledTime = !!i1577[33]
  i1576.m_Maskable = !!i1577[34]
  request.r(i1577[35], i1577[36], 0, i1576, 'm_Material')
  i1576.m_Color = new pc.Color(i1577[37], i1577[38], i1577[39], i1577[40])
  i1576.m_RaycastTarget = !!i1577[41]
  i1576.m_RaycastPadding = new pc.Vec4( i1577[42], i1577[43], i1577[44], i1577[45] )
  return i1576
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1590 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1591 = data
  i1590.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1591[0], i1590.settings)
  return i1590
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1592 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1593 = data
  i1592.useClipping = !!i1593[0]
  i1592.zSpacing = i1593[1]
  i1592.pmaVertexColors = !!i1593[2]
  i1592.tintBlack = !!i1593[3]
  i1592.canvasGroupTintBlack = !!i1593[4]
  i1592.calculateTangents = !!i1593[5]
  i1592.addNormals = !!i1593[6]
  i1592.immutableTriangles = !!i1593[7]
  return i1592
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1594 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1595 = data
  i1594.targetIsSelf = !!i1595[0]
  request.r(i1595[1], i1595[2], 0, i1594, 'targetGO')
  i1594.tweenTargetIsTargetGO = !!i1595[3]
  i1594.delay = i1595[4]
  i1594.duration = i1595[5]
  i1594.easeType = i1595[6]
  i1594.easeCurve = new pc.AnimationCurve( { keys_flow: i1595[7] } )
  i1594.loopType = i1595[8]
  i1594.loops = i1595[9]
  i1594.id = i1595[10]
  i1594.isRelative = !!i1595[11]
  i1594.isFrom = !!i1595[12]
  i1594.isIndependentUpdate = !!i1595[13]
  i1594.autoKill = !!i1595[14]
  i1594.autoGenerate = !!i1595[15]
  i1594.isActive = !!i1595[16]
  i1594.isValid = !!i1595[17]
  request.r(i1595[18], i1595[19], 0, i1594, 'target')
  i1594.animationType = i1595[20]
  i1594.targetType = i1595[21]
  i1594.forcedTargetType = i1595[22]
  i1594.autoPlay = !!i1595[23]
  i1594.useTargetAsV3 = !!i1595[24]
  i1594.endValueFloat = i1595[25]
  i1594.endValueV3 = new pc.Vec3( i1595[26], i1595[27], i1595[28] )
  i1594.endValueV2 = new pc.Vec2( i1595[29], i1595[30] )
  i1594.endValueColor = new pc.Color(i1595[31], i1595[32], i1595[33], i1595[34])
  i1594.endValueString = i1595[35]
  i1594.endValueRect = UnityEngine.Rect.MinMaxRect(i1595[36], i1595[37], i1595[38], i1595[39])
  request.r(i1595[40], i1595[41], 0, i1594, 'endValueTransform')
  i1594.optionalBool0 = !!i1595[42]
  i1594.optionalBool1 = !!i1595[43]
  i1594.optionalFloat0 = i1595[44]
  i1594.optionalInt0 = i1595[45]
  i1594.optionalRotationMode = i1595[46]
  i1594.optionalScrambleMode = i1595[47]
  i1594.optionalShakeRandomnessMode = i1595[48]
  i1594.optionalString = i1595[49]
  i1594.updateType = i1595[50]
  i1594.isSpeedBased = !!i1595[51]
  i1594.hasOnStart = !!i1595[52]
  i1594.hasOnPlay = !!i1595[53]
  i1594.hasOnUpdate = !!i1595[54]
  i1594.hasOnStepComplete = !!i1595[55]
  i1594.hasOnComplete = !!i1595[56]
  i1594.hasOnTweenCreated = !!i1595[57]
  i1594.hasOnRewind = !!i1595[58]
  i1594.onStart = request.d('UnityEngine.Events.UnityEvent', i1595[59], i1594.onStart)
  i1594.onPlay = request.d('UnityEngine.Events.UnityEvent', i1595[60], i1594.onPlay)
  i1594.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1595[61], i1594.onUpdate)
  i1594.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1595[62], i1594.onStepComplete)
  i1594.onComplete = request.d('UnityEngine.Events.UnityEvent', i1595[63], i1594.onComplete)
  i1594.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1595[64], i1594.onTweenCreated)
  i1594.onRewind = request.d('UnityEngine.Events.UnityEvent', i1595[65], i1594.onRewind)
  return i1594
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1596 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1597 = data
  i1596.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1597[0], i1596.m_PersistentCalls)
  return i1596
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1598 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1599 = data
  request.r(i1599[0], i1599[1], 0, i1598, 'm_ObjectArgument')
  i1598.m_ObjectArgumentAssemblyTypeName = i1599[2]
  i1598.m_IntArgument = i1599[3]
  i1598.m_FloatArgument = i1599[4]
  i1598.m_StringArgument = i1599[5]
  i1598.m_BoolArgument = !!i1599[6]
  return i1598
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i1600 = root || request.c( 'MixSkeletonSkin' )
  var i1601 = data
  request.r(i1601[0], i1601[1], 0, i1600, 'skeletonAnimation')
  var i1603 = i1601[2]
  var i1602 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1603.length; i += 1) {
    i1602.add(i1603[i + 0]);
  }
  i1600.skinNames = i1602
  i1600.defaultAnim = i1601[3]
  return i1600
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1606 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1607 = data
  i1606.m_hasFontAssetChanged = !!i1607[0]
  request.r(i1607[1], i1607[2], 0, i1606, 'm_baseMaterial')
  i1606.m_maskOffset = new pc.Vec4( i1607[3], i1607[4], i1607[5], i1607[6] )
  i1606.m_text = i1607[7]
  i1606.m_isRightToLeft = !!i1607[8]
  request.r(i1607[9], i1607[10], 0, i1606, 'm_fontAsset')
  request.r(i1607[11], i1607[12], 0, i1606, 'm_sharedMaterial')
  var i1609 = i1607[13]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 2) {
  request.r(i1609[i + 0], i1609[i + 1], 2, i1608, '')
  }
  i1606.m_fontSharedMaterials = i1608
  request.r(i1607[14], i1607[15], 0, i1606, 'm_fontMaterial')
  var i1611 = i1607[16]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 2) {
  request.r(i1611[i + 0], i1611[i + 1], 2, i1610, '')
  }
  i1606.m_fontMaterials = i1610
  i1606.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1607[17], i1607[18], i1607[19], i1607[20])
  i1606.m_fontColor = new pc.Color(i1607[21], i1607[22], i1607[23], i1607[24])
  i1606.m_enableVertexGradient = !!i1607[25]
  i1606.m_colorMode = i1607[26]
  i1606.m_fontColorGradient = request.d('TMPro.VertexGradient', i1607[27], i1606.m_fontColorGradient)
  request.r(i1607[28], i1607[29], 0, i1606, 'm_fontColorGradientPreset')
  request.r(i1607[30], i1607[31], 0, i1606, 'm_spriteAsset')
  i1606.m_tintAllSprites = !!i1607[32]
  request.r(i1607[33], i1607[34], 0, i1606, 'm_StyleSheet')
  i1606.m_TextStyleHashCode = i1607[35]
  i1606.m_overrideHtmlColors = !!i1607[36]
  i1606.m_faceColor = UnityEngine.Color32.ConstructColor(i1607[37], i1607[38], i1607[39], i1607[40])
  i1606.m_fontSize = i1607[41]
  i1606.m_fontSizeBase = i1607[42]
  i1606.m_fontWeight = i1607[43]
  i1606.m_enableAutoSizing = !!i1607[44]
  i1606.m_fontSizeMin = i1607[45]
  i1606.m_fontSizeMax = i1607[46]
  i1606.m_fontStyle = i1607[47]
  i1606.m_HorizontalAlignment = i1607[48]
  i1606.m_VerticalAlignment = i1607[49]
  i1606.m_textAlignment = i1607[50]
  i1606.m_characterSpacing = i1607[51]
  i1606.m_wordSpacing = i1607[52]
  i1606.m_lineSpacing = i1607[53]
  i1606.m_lineSpacingMax = i1607[54]
  i1606.m_paragraphSpacing = i1607[55]
  i1606.m_charWidthMaxAdj = i1607[56]
  i1606.m_enableWordWrapping = !!i1607[57]
  i1606.m_wordWrappingRatios = i1607[58]
  i1606.m_overflowMode = i1607[59]
  request.r(i1607[60], i1607[61], 0, i1606, 'm_linkedTextComponent')
  request.r(i1607[62], i1607[63], 0, i1606, 'parentLinkedComponent')
  i1606.m_enableKerning = !!i1607[64]
  i1606.m_enableExtraPadding = !!i1607[65]
  i1606.checkPaddingRequired = !!i1607[66]
  i1606.m_isRichText = !!i1607[67]
  i1606.m_parseCtrlCharacters = !!i1607[68]
  i1606.m_isOrthographic = !!i1607[69]
  i1606.m_isCullingEnabled = !!i1607[70]
  i1606.m_horizontalMapping = i1607[71]
  i1606.m_verticalMapping = i1607[72]
  i1606.m_uvLineOffset = i1607[73]
  i1606.m_geometrySortingOrder = i1607[74]
  i1606.m_IsTextObjectScaleStatic = !!i1607[75]
  i1606.m_VertexBufferAutoSizeReduction = !!i1607[76]
  i1606.m_useMaxVisibleDescender = !!i1607[77]
  i1606.m_pageToDisplay = i1607[78]
  i1606.m_margin = new pc.Vec4( i1607[79], i1607[80], i1607[81], i1607[82] )
  i1606.m_isUsingLegacyAnimationComponent = !!i1607[83]
  i1606.m_isVolumetricText = !!i1607[84]
  i1606.m_Maskable = !!i1607[85]
  request.r(i1607[86], i1607[87], 0, i1606, 'm_Material')
  i1606.m_Color = new pc.Color(i1607[88], i1607[89], i1607[90], i1607[91])
  i1606.m_RaycastTarget = !!i1607[92]
  i1606.m_RaycastPadding = new pc.Vec4( i1607[93], i1607[94], i1607[95], i1607[96] )
  return i1606
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1614 = root || request.c( 'TMPro.VertexGradient' )
  var i1615 = data
  i1614.topLeft = new pc.Color(i1615[0], i1615[1], i1615[2], i1615[3])
  i1614.topRight = new pc.Color(i1615[4], i1615[5], i1615[6], i1615[7])
  i1614.bottomLeft = new pc.Color(i1615[8], i1615[9], i1615[10], i1615[11])
  i1614.bottomRight = new pc.Color(i1615[12], i1615[13], i1615[14], i1615[15])
  return i1614
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1617 = data
  i1616.m_ShowMaskGraphic = !!i1617[0]
  return i1616
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1618 = root || request.c( 'AudioController' )
  var i1619 = data
  request.r(i1619[0], i1619[1], 0, i1618, 'bgmSource')
  request.r(i1619[2], i1619[3], 0, i1618, 'sfxSource')
  var i1621 = i1619[4]
  var i1620 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.add(request.d('AudioEntry', i1621[i + 0]));
  }
  i1618.audioEntries = i1620
  return i1618
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i1624 = root || request.c( 'AudioEntry' )
  var i1625 = data
  i1624.key = i1625[0]
  request.r(i1625[1], i1625[2], 0, i1624, 'clip')
  i1624.volume = i1625[3]
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1627 = data
  i1626.ambientIntensity = i1627[0]
  i1626.reflectionIntensity = i1627[1]
  i1626.ambientMode = i1627[2]
  i1626.ambientLight = new pc.Color(i1627[3], i1627[4], i1627[5], i1627[6])
  i1626.ambientSkyColor = new pc.Color(i1627[7], i1627[8], i1627[9], i1627[10])
  i1626.ambientGroundColor = new pc.Color(i1627[11], i1627[12], i1627[13], i1627[14])
  i1626.ambientEquatorColor = new pc.Color(i1627[15], i1627[16], i1627[17], i1627[18])
  i1626.fogColor = new pc.Color(i1627[19], i1627[20], i1627[21], i1627[22])
  i1626.fogEndDistance = i1627[23]
  i1626.fogStartDistance = i1627[24]
  i1626.fogDensity = i1627[25]
  i1626.fog = !!i1627[26]
  request.r(i1627[27], i1627[28], 0, i1626, 'skybox')
  i1626.fogMode = i1627[29]
  var i1629 = i1627[30]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1629[i + 0]) );
  }
  i1626.lightmaps = i1628
  i1626.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1627[31], i1626.lightProbes)
  i1626.lightmapsMode = i1627[32]
  i1626.mixedBakeMode = i1627[33]
  i1626.environmentLightingMode = i1627[34]
  i1626.ambientProbe = new pc.SphericalHarmonicsL2(i1627[35])
  i1626.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1627[36])
  i1626.useReferenceAmbientProbe = !!i1627[37]
  request.r(i1627[38], i1627[39], 0, i1626, 'customReflection')
  request.r(i1627[40], i1627[41], 0, i1626, 'defaultReflection')
  i1626.defaultReflectionMode = i1627[42]
  i1626.defaultReflectionResolution = i1627[43]
  i1626.sunLightObjectId = i1627[44]
  i1626.pixelLightCount = i1627[45]
  i1626.defaultReflectionHDR = !!i1627[46]
  i1626.hasLightDataAsset = !!i1627[47]
  i1626.hasManualGenerate = !!i1627[48]
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1633 = data
  request.r(i1633[0], i1633[1], 0, i1632, 'lightmapColor')
  request.r(i1633[2], i1633[3], 0, i1632, 'lightmapDirection')
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1634 = root || new UnityEngine.LightProbes()
  var i1635 = data
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1643 = data
  var i1645 = i1643[0]
  var i1644 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1645[i + 0]));
  }
  i1642.ShaderCompilationErrors = i1644
  i1642.name = i1643[1]
  i1642.guid = i1643[2]
  var i1647 = i1643[3]
  var i1646 = []
  for(var i = 0; i < i1647.length; i += 1) {
    i1646.push( i1647[i + 0] );
  }
  i1642.shaderDefinedKeywords = i1646
  var i1649 = i1643[4]
  var i1648 = []
  for(var i = 0; i < i1649.length; i += 1) {
    i1648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1649[i + 0]) );
  }
  i1642.passes = i1648
  var i1651 = i1643[5]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1651[i + 0]) );
  }
  i1642.usePasses = i1650
  var i1653 = i1643[6]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1653[i + 0]) );
  }
  i1642.defaultParameterValues = i1652
  request.r(i1643[7], i1643[8], 0, i1642, 'unityFallbackShader')
  i1642.readDepth = !!i1643[9]
  i1642.isCreatedByShaderGraph = !!i1643[10]
  i1642.disableBatching = !!i1643[11]
  i1642.compiled = !!i1643[12]
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1657 = data
  i1656.shaderName = i1657[0]
  i1656.errorMessage = i1657[1]
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1660 = root || new pc.UnityShaderPass()
  var i1661 = data
  i1660.id = i1661[0]
  i1660.subShaderIndex = i1661[1]
  i1660.name = i1661[2]
  i1660.passType = i1661[3]
  i1660.grabPassTextureName = i1661[4]
  i1660.usePass = !!i1661[5]
  i1660.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1661[6], i1660.zTest)
  i1660.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1661[7], i1660.zWrite)
  i1660.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1661[8], i1660.culling)
  i1660.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1661[9], i1660.blending)
  i1660.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1661[10], i1660.alphaBlending)
  i1660.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1661[11], i1660.colorWriteMask)
  i1660.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1661[12], i1660.offsetUnits)
  i1660.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1661[13], i1660.offsetFactor)
  i1660.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1661[14], i1660.stencilRef)
  i1660.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1661[15], i1660.stencilReadMask)
  i1660.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1661[16], i1660.stencilWriteMask)
  i1660.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1661[17], i1660.stencilOp)
  i1660.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1661[18], i1660.stencilOpFront)
  i1660.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1661[19], i1660.stencilOpBack)
  var i1663 = i1661[20]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1663[i + 0]) );
  }
  i1660.tags = i1662
  var i1665 = i1661[21]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 1) {
    i1664.push( i1665[i + 0] );
  }
  i1660.passDefinedKeywords = i1664
  var i1667 = i1661[22]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1667[i + 0]) );
  }
  i1660.passDefinedKeywordGroups = i1666
  var i1669 = i1661[23]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1669[i + 0]) );
  }
  i1660.variants = i1668
  var i1671 = i1661[24]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1671[i + 0]) );
  }
  i1660.excludedVariants = i1670
  i1660.hasDepthReader = !!i1661[25]
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1673 = data
  i1672.val = i1673[0]
  i1672.name = i1673[1]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1675 = data
  i1674.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1675[0], i1674.src)
  i1674.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1675[1], i1674.dst)
  i1674.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1675[2], i1674.op)
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1677 = data
  i1676.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1677[0], i1676.pass)
  i1676.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1677[1], i1676.fail)
  i1676.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1677[2], i1676.zFail)
  i1676.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1677[3], i1676.comp)
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1681 = data
  i1680.name = i1681[0]
  i1680.value = i1681[1]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1685 = data
  var i1687 = i1685[0]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.push( i1687[i + 0] );
  }
  i1684.keywords = i1686
  i1684.hasDiscard = !!i1685[1]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1691 = data
  i1690.passId = i1691[0]
  i1690.subShaderIndex = i1691[1]
  var i1693 = i1691[2]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( i1693[i + 0] );
  }
  i1690.keywords = i1692
  i1690.vertexProgram = i1691[3]
  i1690.fragmentProgram = i1691[4]
  i1690.exportedForWebGl2 = !!i1691[5]
  i1690.readDepth = !!i1691[6]
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1697 = data
  request.r(i1697[0], i1697[1], 0, i1696, 'shader')
  i1696.pass = i1697[2]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1701 = data
  i1700.name = i1701[0]
  i1700.type = i1701[1]
  i1700.value = new pc.Vec4( i1701[2], i1701[3], i1701[4], i1701[5] )
  i1700.textureValue = i1701[6]
  i1700.shaderPropertyFlag = i1701[7]
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1703 = data
  i1702.name = i1703[0]
  request.r(i1703[1], i1703[2], 0, i1702, 'texture')
  i1702.aabb = i1703[3]
  i1702.vertices = i1703[4]
  i1702.triangles = i1703[5]
  i1702.textureRect = UnityEngine.Rect.MinMaxRect(i1703[6], i1703[7], i1703[8], i1703[9])
  i1702.packedRect = UnityEngine.Rect.MinMaxRect(i1703[10], i1703[11], i1703[12], i1703[13])
  i1702.border = new pc.Vec4( i1703[14], i1703[15], i1703[16], i1703[17] )
  i1702.transparency = i1703[18]
  i1702.bounds = i1703[19]
  i1702.pixelsPerUnit = i1703[20]
  i1702.textureWidth = i1703[21]
  i1702.textureHeight = i1703[22]
  i1702.nativeSize = new pc.Vec2( i1703[23], i1703[24] )
  i1702.pivot = new pc.Vec2( i1703[25], i1703[26] )
  i1702.textureRectOffset = new pc.Vec2( i1703[27], i1703[28] )
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1705 = data
  i1704.name = i1705[0]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1707 = data
  i1706.name = i1707[0]
  i1706.ascent = i1707[1]
  i1706.originalLineHeight = i1707[2]
  i1706.fontSize = i1707[3]
  var i1709 = i1707[4]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1709[i + 0]) );
  }
  i1706.characterInfo = i1708
  request.r(i1707[5], i1707[6], 0, i1706, 'texture')
  i1706.originalFontSize = i1707[7]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1713 = data
  i1712.index = i1713[0]
  i1712.advance = i1713[1]
  i1712.bearing = i1713[2]
  i1712.glyphWidth = i1713[3]
  i1712.glyphHeight = i1713[4]
  i1712.minX = i1713[5]
  i1712.maxX = i1713[6]
  i1712.minY = i1713[7]
  i1712.maxY = i1713[8]
  i1712.uvBottomLeftX = i1713[9]
  i1712.uvBottomLeftY = i1713[10]
  i1712.uvBottomRightX = i1713[11]
  i1712.uvBottomRightY = i1713[12]
  i1712.uvTopLeftX = i1713[13]
  i1712.uvTopLeftY = i1713[14]
  i1712.uvTopRightX = i1713[15]
  i1712.uvTopRightY = i1713[16]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1715 = data
  i1714.name = i1715[0]
  i1714.bytes64 = i1715[1]
  i1714.data = i1715[2]
  return i1714
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1716 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1717 = data
  var i1719 = i1717[0]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 2) {
  request.r(i1719[i + 0], i1719[i + 1], 2, i1718, '')
  }
  i1716.atlasAssets = i1718
  i1716.scale = i1717[1]
  request.r(i1717[2], i1717[3], 0, i1716, 'skeletonJSON')
  i1716.isUpgradingBlendModeMaterials = !!i1717[4]
  i1716.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1717[5], i1716.blendModeMaterials)
  var i1721 = i1717[6]
  var i1720 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1721.length; i += 2) {
  request.r(i1721[i + 0], i1721[i + 1], 1, i1720, '')
  }
  i1716.skeletonDataModifiers = i1720
  var i1723 = i1717[7]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( i1723[i + 0] );
  }
  i1716.fromAnimation = i1722
  var i1725 = i1717[8]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( i1725[i + 0] );
  }
  i1716.toAnimation = i1724
  i1716.duration = i1717[9]
  i1716.defaultMix = i1717[10]
  request.r(i1717[11], i1717[12], 0, i1716, 'controller')
  return i1716
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1728 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1729 = data
  i1728.applyAdditiveMaterial = !!i1729[0]
  var i1731 = i1729[1]
  var i1730 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1731[i + 0]));
  }
  i1728.additiveMaterials = i1730
  var i1733 = i1729[2]
  var i1732 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1733[i + 0]));
  }
  i1728.multiplyMaterials = i1732
  var i1735 = i1729[3]
  var i1734 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1735.length; i += 1) {
    i1734.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1735[i + 0]));
  }
  i1728.screenMaterials = i1734
  i1728.requiresBlendModeMaterials = !!i1729[4]
  return i1728
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1738 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1739 = data
  i1738.pageName = i1739[0]
  request.r(i1739[1], i1739[2], 0, i1738, 'material')
  return i1738
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1742 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1743 = data
  request.r(i1743[0], i1743[1], 0, i1742, 'atlasFile')
  var i1745 = i1743[2]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 2) {
  request.r(i1745[i + 0], i1745[i + 1], 2, i1744, '')
  }
  i1742.materials = i1744
  i1742.textureLoadingMode = i1743[3]
  request.r(i1743[4], i1743[5], 0, i1742, 'onDemandTextureLoader')
  return i1742
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1746 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1747 = data
  request.r(i1747[0], i1747[1], 0, i1746, 'atlas')
  i1746.normalStyle = i1747[2]
  i1746.normalSpacingOffset = i1747[3]
  i1746.boldStyle = i1747[4]
  i1746.boldSpacing = i1747[5]
  i1746.italicStyle = i1747[6]
  i1746.tabSize = i1747[7]
  i1746.hashCode = i1747[8]
  request.r(i1747[9], i1747[10], 0, i1746, 'material')
  i1746.materialHashCode = i1747[11]
  i1746.m_Version = i1747[12]
  i1746.m_SourceFontFileGUID = i1747[13]
  request.r(i1747[14], i1747[15], 0, i1746, 'm_SourceFontFile_EditorRef')
  request.r(i1747[16], i1747[17], 0, i1746, 'm_SourceFontFile')
  i1746.m_AtlasPopulationMode = i1747[18]
  i1746.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1747[19], i1746.m_FaceInfo)
  var i1749 = i1747[20]
  var i1748 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.add(request.d('UnityEngine.TextCore.Glyph', i1749[i + 0]));
  }
  i1746.m_GlyphTable = i1748
  var i1751 = i1747[21]
  var i1750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.add(request.d('TMPro.TMP_Character', i1751[i + 0]));
  }
  i1746.m_CharacterTable = i1750
  var i1753 = i1747[22]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 2) {
  request.r(i1753[i + 0], i1753[i + 1], 2, i1752, '')
  }
  i1746.m_AtlasTextures = i1752
  i1746.m_AtlasTextureIndex = i1747[23]
  i1746.m_IsMultiAtlasTexturesEnabled = !!i1747[24]
  i1746.m_ClearDynamicDataOnBuild = !!i1747[25]
  var i1755 = i1747[26]
  var i1754 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.add(request.d('UnityEngine.TextCore.GlyphRect', i1755[i + 0]));
  }
  i1746.m_UsedGlyphRects = i1754
  var i1757 = i1747[27]
  var i1756 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.add(request.d('UnityEngine.TextCore.GlyphRect', i1757[i + 0]));
  }
  i1746.m_FreeGlyphRects = i1756
  i1746.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1747[28], i1746.m_fontInfo)
  i1746.m_AtlasWidth = i1747[29]
  i1746.m_AtlasHeight = i1747[30]
  i1746.m_AtlasPadding = i1747[31]
  i1746.m_AtlasRenderMode = i1747[32]
  var i1759 = i1747[33]
  var i1758 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.add(request.d('TMPro.TMP_Glyph', i1759[i + 0]));
  }
  i1746.m_glyphInfoList = i1758
  i1746.m_KerningTable = request.d('TMPro.KerningTable', i1747[34], i1746.m_KerningTable)
  i1746.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1747[35], i1746.m_FontFeatureTable)
  var i1761 = i1747[36]
  var i1760 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1761.length; i += 2) {
  request.r(i1761[i + 0], i1761[i + 1], 1, i1760, '')
  }
  i1746.fallbackFontAssets = i1760
  var i1763 = i1747[37]
  var i1762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1763.length; i += 2) {
  request.r(i1763[i + 0], i1763[i + 1], 1, i1762, '')
  }
  i1746.m_FallbackFontAssetTable = i1762
  i1746.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1747[38], i1746.m_CreationSettings)
  var i1765 = i1747[39]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.push( request.d('TMPro.TMP_FontWeightPair', i1765[i + 0]) );
  }
  i1746.m_FontWeightTable = i1764
  var i1767 = i1747[40]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( request.d('TMPro.TMP_FontWeightPair', i1767[i + 0]) );
  }
  i1746.fontWeights = i1766
  return i1746
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1768 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1769 = data
  i1768.m_FaceIndex = i1769[0]
  i1768.m_FamilyName = i1769[1]
  i1768.m_StyleName = i1769[2]
  i1768.m_PointSize = i1769[3]
  i1768.m_Scale = i1769[4]
  i1768.m_UnitsPerEM = i1769[5]
  i1768.m_LineHeight = i1769[6]
  i1768.m_AscentLine = i1769[7]
  i1768.m_CapLine = i1769[8]
  i1768.m_MeanLine = i1769[9]
  i1768.m_Baseline = i1769[10]
  i1768.m_DescentLine = i1769[11]
  i1768.m_SuperscriptOffset = i1769[12]
  i1768.m_SuperscriptSize = i1769[13]
  i1768.m_SubscriptOffset = i1769[14]
  i1768.m_SubscriptSize = i1769[15]
  i1768.m_UnderlineOffset = i1769[16]
  i1768.m_UnderlineThickness = i1769[17]
  i1768.m_StrikethroughOffset = i1769[18]
  i1768.m_StrikethroughThickness = i1769[19]
  i1768.m_TabWidth = i1769[20]
  return i1768
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1772 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1773 = data
  i1772.m_Index = i1773[0]
  i1772.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1773[1], i1772.m_Metrics)
  i1772.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1773[2], i1772.m_GlyphRect)
  i1772.m_Scale = i1773[3]
  i1772.m_AtlasIndex = i1773[4]
  i1772.m_ClassDefinitionType = i1773[5]
  return i1772
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1774 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1775 = data
  i1774.m_Width = i1775[0]
  i1774.m_Height = i1775[1]
  i1774.m_HorizontalBearingX = i1775[2]
  i1774.m_HorizontalBearingY = i1775[3]
  i1774.m_HorizontalAdvance = i1775[4]
  return i1774
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1776 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1777 = data
  i1776.m_X = i1777[0]
  i1776.m_Y = i1777[1]
  i1776.m_Width = i1777[2]
  i1776.m_Height = i1777[3]
  return i1776
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1780 = root || request.c( 'TMPro.TMP_Character' )
  var i1781 = data
  i1780.m_ElementType = i1781[0]
  i1780.m_Unicode = i1781[1]
  i1780.m_GlyphIndex = i1781[2]
  i1780.m_Scale = i1781[3]
  return i1780
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1786 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1787 = data
  i1786.Name = i1787[0]
  i1786.PointSize = i1787[1]
  i1786.Scale = i1787[2]
  i1786.CharacterCount = i1787[3]
  i1786.LineHeight = i1787[4]
  i1786.Baseline = i1787[5]
  i1786.Ascender = i1787[6]
  i1786.CapHeight = i1787[7]
  i1786.Descender = i1787[8]
  i1786.CenterLine = i1787[9]
  i1786.SuperscriptOffset = i1787[10]
  i1786.SubscriptOffset = i1787[11]
  i1786.SubSize = i1787[12]
  i1786.Underline = i1787[13]
  i1786.UnderlineThickness = i1787[14]
  i1786.strikethrough = i1787[15]
  i1786.strikethroughThickness = i1787[16]
  i1786.TabWidth = i1787[17]
  i1786.Padding = i1787[18]
  i1786.AtlasWidth = i1787[19]
  i1786.AtlasHeight = i1787[20]
  return i1786
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1790 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1791 = data
  i1790.id = i1791[0]
  i1790.x = i1791[1]
  i1790.y = i1791[2]
  i1790.width = i1791[3]
  i1790.height = i1791[4]
  i1790.xOffset = i1791[5]
  i1790.yOffset = i1791[6]
  i1790.xAdvance = i1791[7]
  i1790.scale = i1791[8]
  return i1790
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1792 = root || request.c( 'TMPro.KerningTable' )
  var i1793 = data
  var i1795 = i1793[0]
  var i1794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1795.length; i += 1) {
    i1794.add(request.d('TMPro.KerningPair', i1795[i + 0]));
  }
  i1792.kerningPairs = i1794
  return i1792
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1798 = root || request.c( 'TMPro.KerningPair' )
  var i1799 = data
  i1798.xOffset = i1799[0]
  i1798.m_FirstGlyph = i1799[1]
  i1798.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1799[2], i1798.m_FirstGlyphAdjustments)
  i1798.m_SecondGlyph = i1799[3]
  i1798.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1799[4], i1798.m_SecondGlyphAdjustments)
  i1798.m_IgnoreSpacingAdjustments = !!i1799[5]
  return i1798
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1800 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1801 = data
  var i1803 = i1801[0]
  var i1802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1803.length; i += 1) {
    i1802.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1803[i + 0]));
  }
  i1800.m_GlyphPairAdjustmentRecords = i1802
  return i1800
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1806 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1807 = data
  i1806.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1807[0], i1806.m_FirstAdjustmentRecord)
  i1806.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1807[1], i1806.m_SecondAdjustmentRecord)
  i1806.m_FeatureLookupFlags = i1807[2]
  return i1806
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1810 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1811 = data
  i1810.sourceFontFileName = i1811[0]
  i1810.sourceFontFileGUID = i1811[1]
  i1810.pointSizeSamplingMode = i1811[2]
  i1810.pointSize = i1811[3]
  i1810.padding = i1811[4]
  i1810.packingMode = i1811[5]
  i1810.atlasWidth = i1811[6]
  i1810.atlasHeight = i1811[7]
  i1810.characterSetSelectionMode = i1811[8]
  i1810.characterSequence = i1811[9]
  i1810.referencedFontAssetGUID = i1811[10]
  i1810.referencedTextAssetGUID = i1811[11]
  i1810.fontStyle = i1811[12]
  i1810.fontStyleModifier = i1811[13]
  i1810.renderMode = i1811[14]
  i1810.includeFontFeatures = !!i1811[15]
  return i1810
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1814 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1815 = data
  request.r(i1815[0], i1815[1], 0, i1814, 'regularTypeface')
  request.r(i1815[2], i1815[3], 0, i1814, 'italicTypeface')
  return i1814
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1816 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1817 = data
  i1816.useSafeMode = !!i1817[0]
  i1816.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1817[1], i1816.safeModeOptions)
  i1816.timeScale = i1817[2]
  i1816.unscaledTimeScale = i1817[3]
  i1816.useSmoothDeltaTime = !!i1817[4]
  i1816.maxSmoothUnscaledTime = i1817[5]
  i1816.rewindCallbackMode = i1817[6]
  i1816.showUnityEditorReport = !!i1817[7]
  i1816.logBehaviour = i1817[8]
  i1816.drawGizmos = !!i1817[9]
  i1816.defaultRecyclable = !!i1817[10]
  i1816.defaultAutoPlay = i1817[11]
  i1816.defaultUpdateType = i1817[12]
  i1816.defaultTimeScaleIndependent = !!i1817[13]
  i1816.defaultEaseType = i1817[14]
  i1816.defaultEaseOvershootOrAmplitude = i1817[15]
  i1816.defaultEasePeriod = i1817[16]
  i1816.defaultAutoKill = !!i1817[17]
  i1816.defaultLoopType = i1817[18]
  i1816.debugMode = !!i1817[19]
  i1816.debugStoreTargetId = !!i1817[20]
  i1816.showPreviewPanel = !!i1817[21]
  i1816.storeSettingsLocation = i1817[22]
  i1816.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1817[23], i1816.modules)
  i1816.createASMDEF = !!i1817[24]
  i1816.showPlayingTweens = !!i1817[25]
  i1816.showPausedTweens = !!i1817[26]
  return i1816
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1818 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1819 = data
  i1818.logBehaviour = i1819[0]
  i1818.nestedTweenFailureBehaviour = i1819[1]
  return i1818
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1820 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1821 = data
  i1820.showPanel = !!i1821[0]
  i1820.audioEnabled = !!i1821[1]
  i1820.physicsEnabled = !!i1821[2]
  i1820.physics2DEnabled = !!i1821[3]
  i1820.spriteEnabled = !!i1821[4]
  i1820.uiEnabled = !!i1821[5]
  i1820.textMeshProEnabled = !!i1821[6]
  i1820.tk2DEnabled = !!i1821[7]
  i1820.deAudioEnabled = !!i1821[8]
  i1820.deUnityExtendedEnabled = !!i1821[9]
  i1820.epoOutlineEnabled = !!i1821[10]
  return i1820
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1822 = root || request.c( 'TMPro.TMP_Settings' )
  var i1823 = data
  i1822.m_enableWordWrapping = !!i1823[0]
  i1822.m_enableKerning = !!i1823[1]
  i1822.m_enableExtraPadding = !!i1823[2]
  i1822.m_enableTintAllSprites = !!i1823[3]
  i1822.m_enableParseEscapeCharacters = !!i1823[4]
  i1822.m_EnableRaycastTarget = !!i1823[5]
  i1822.m_GetFontFeaturesAtRuntime = !!i1823[6]
  i1822.m_missingGlyphCharacter = i1823[7]
  i1822.m_warningsDisabled = !!i1823[8]
  request.r(i1823[9], i1823[10], 0, i1822, 'm_defaultFontAsset')
  i1822.m_defaultFontAssetPath = i1823[11]
  i1822.m_defaultFontSize = i1823[12]
  i1822.m_defaultAutoSizeMinRatio = i1823[13]
  i1822.m_defaultAutoSizeMaxRatio = i1823[14]
  i1822.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1823[15], i1823[16] )
  i1822.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1823[17], i1823[18] )
  i1822.m_autoSizeTextContainer = !!i1823[19]
  i1822.m_IsTextObjectScaleStatic = !!i1823[20]
  var i1825 = i1823[21]
  var i1824 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1825.length; i += 2) {
  request.r(i1825[i + 0], i1825[i + 1], 1, i1824, '')
  }
  i1822.m_fallbackFontAssets = i1824
  i1822.m_matchMaterialPreset = !!i1823[22]
  request.r(i1823[23], i1823[24], 0, i1822, 'm_defaultSpriteAsset')
  i1822.m_defaultSpriteAssetPath = i1823[25]
  i1822.m_enableEmojiSupport = !!i1823[26]
  i1822.m_MissingCharacterSpriteUnicode = i1823[27]
  i1822.m_defaultColorGradientPresetsPath = i1823[28]
  request.r(i1823[29], i1823[30], 0, i1822, 'm_defaultStyleSheet')
  i1822.m_StyleSheetsResourcePath = i1823[31]
  request.r(i1823[32], i1823[33], 0, i1822, 'm_leadingCharacters')
  request.r(i1823[34], i1823[35], 0, i1822, 'm_followingCharacters')
  i1822.m_UseModernHangulLineBreakingRules = !!i1823[36]
  return i1822
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1826 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1827 = data
  request.r(i1827[0], i1827[1], 0, i1826, 'spriteSheet')
  var i1829 = i1827[2]
  var i1828 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.add(request.d('TMPro.TMP_Sprite', i1829[i + 0]));
  }
  i1826.spriteInfoList = i1828
  var i1831 = i1827[3]
  var i1830 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1831.length; i += 2) {
  request.r(i1831[i + 0], i1831[i + 1], 1, i1830, '')
  }
  i1826.fallbackSpriteAssets = i1830
  i1826.hashCode = i1827[4]
  request.r(i1827[5], i1827[6], 0, i1826, 'material')
  i1826.materialHashCode = i1827[7]
  i1826.m_Version = i1827[8]
  i1826.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1827[9], i1826.m_FaceInfo)
  var i1833 = i1827[10]
  var i1832 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.add(request.d('TMPro.TMP_SpriteCharacter', i1833[i + 0]));
  }
  i1826.m_SpriteCharacterTable = i1832
  var i1835 = i1827[11]
  var i1834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.add(request.d('TMPro.TMP_SpriteGlyph', i1835[i + 0]));
  }
  i1826.m_SpriteGlyphTable = i1834
  return i1826
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1838 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1839 = data
  i1838.name = i1839[0]
  i1838.hashCode = i1839[1]
  i1838.unicode = i1839[2]
  i1838.pivot = new pc.Vec2( i1839[3], i1839[4] )
  request.r(i1839[5], i1839[6], 0, i1838, 'sprite')
  i1838.id = i1839[7]
  i1838.x = i1839[8]
  i1838.y = i1839[9]
  i1838.width = i1839[10]
  i1838.height = i1839[11]
  i1838.xOffset = i1839[12]
  i1838.yOffset = i1839[13]
  i1838.xAdvance = i1839[14]
  i1838.scale = i1839[15]
  return i1838
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1844 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1845 = data
  i1844.m_Name = i1845[0]
  i1844.m_HashCode = i1845[1]
  i1844.m_ElementType = i1845[2]
  i1844.m_Unicode = i1845[3]
  i1844.m_GlyphIndex = i1845[4]
  i1844.m_Scale = i1845[5]
  return i1844
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1848 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1849 = data
  request.r(i1849[0], i1849[1], 0, i1848, 'sprite')
  i1848.m_Index = i1849[2]
  i1848.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1849[3], i1848.m_Metrics)
  i1848.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1849[4], i1848.m_GlyphRect)
  i1848.m_Scale = i1849[5]
  i1848.m_AtlasIndex = i1849[6]
  i1848.m_ClassDefinitionType = i1849[7]
  return i1848
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1850 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1851 = data
  var i1853 = i1851[0]
  var i1852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.add(request.d('TMPro.TMP_Style', i1853[i + 0]));
  }
  i1850.m_StyleList = i1852
  return i1850
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1856 = root || request.c( 'TMPro.TMP_Style' )
  var i1857 = data
  i1856.m_Name = i1857[0]
  i1856.m_HashCode = i1857[1]
  i1856.m_OpeningDefinition = i1857[2]
  i1856.m_ClosingDefinition = i1857[3]
  i1856.m_OpeningTagArray = i1857[4]
  i1856.m_ClosingTagArray = i1857[5]
  i1856.m_OpeningTagUnicodeArray = i1857[6]
  i1856.m_ClosingTagUnicodeArray = i1857[7]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1859 = data
  var i1861 = i1859[0]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1861[i + 0]) );
  }
  i1858.files = i1860
  i1858.componentToPrefabIds = i1859[1]
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1865 = data
  i1864.path = i1865[0]
  request.r(i1865[1], i1865[2], 0, i1864, 'unityObject')
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1867 = data
  var i1869 = i1867[0]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1869[i + 0]) );
  }
  i1866.scriptsExecutionOrder = i1868
  var i1871 = i1867[1]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1871[i + 0]) );
  }
  i1866.sortingLayers = i1870
  var i1873 = i1867[2]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1873[i + 0]) );
  }
  i1866.cullingLayers = i1872
  i1866.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1867[3], i1866.timeSettings)
  i1866.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1867[4], i1866.physicsSettings)
  i1866.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1867[5], i1866.physics2DSettings)
  i1866.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1867[6], i1866.qualitySettings)
  i1866.enableRealtimeShadows = !!i1867[7]
  i1866.enableAutoInstancing = !!i1867[8]
  i1866.enableStaticBatching = !!i1867[9]
  i1866.enableDynamicBatching = !!i1867[10]
  i1866.lightmapEncodingQuality = i1867[11]
  i1866.desiredColorSpace = i1867[12]
  var i1875 = i1867[13]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( i1875[i + 0] );
  }
  i1866.allTags = i1874
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1879 = data
  i1878.name = i1879[0]
  i1878.value = i1879[1]
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1883 = data
  i1882.id = i1883[0]
  i1882.name = i1883[1]
  i1882.value = i1883[2]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1887 = data
  i1886.id = i1887[0]
  i1886.name = i1887[1]
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1889 = data
  i1888.fixedDeltaTime = i1889[0]
  i1888.maximumDeltaTime = i1889[1]
  i1888.timeScale = i1889[2]
  i1888.maximumParticleTimestep = i1889[3]
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1891 = data
  i1890.gravity = new pc.Vec3( i1891[0], i1891[1], i1891[2] )
  i1890.defaultSolverIterations = i1891[3]
  i1890.bounceThreshold = i1891[4]
  i1890.autoSyncTransforms = !!i1891[5]
  i1890.autoSimulation = !!i1891[6]
  var i1893 = i1891[7]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1893[i + 0]) );
  }
  i1890.collisionMatrix = i1892
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1897 = data
  i1896.enabled = !!i1897[0]
  i1896.layerId = i1897[1]
  i1896.otherLayerId = i1897[2]
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1899 = data
  request.r(i1899[0], i1899[1], 0, i1898, 'material')
  i1898.gravity = new pc.Vec2( i1899[2], i1899[3] )
  i1898.positionIterations = i1899[4]
  i1898.velocityIterations = i1899[5]
  i1898.velocityThreshold = i1899[6]
  i1898.maxLinearCorrection = i1899[7]
  i1898.maxAngularCorrection = i1899[8]
  i1898.maxTranslationSpeed = i1899[9]
  i1898.maxRotationSpeed = i1899[10]
  i1898.baumgarteScale = i1899[11]
  i1898.baumgarteTOIScale = i1899[12]
  i1898.timeToSleep = i1899[13]
  i1898.linearSleepTolerance = i1899[14]
  i1898.angularSleepTolerance = i1899[15]
  i1898.defaultContactOffset = i1899[16]
  i1898.autoSimulation = !!i1899[17]
  i1898.queriesHitTriggers = !!i1899[18]
  i1898.queriesStartInColliders = !!i1899[19]
  i1898.callbacksOnDisable = !!i1899[20]
  i1898.reuseCollisionCallbacks = !!i1899[21]
  i1898.autoSyncTransforms = !!i1899[22]
  var i1901 = i1899[23]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1901[i + 0]) );
  }
  i1898.collisionMatrix = i1900
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1905 = data
  i1904.enabled = !!i1905[0]
  i1904.layerId = i1905[1]
  i1904.otherLayerId = i1905[2]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1907 = data
  var i1909 = i1907[0]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1909[i + 0]) );
  }
  i1906.qualityLevels = i1908
  var i1911 = i1907[1]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( i1911[i + 0] );
  }
  i1906.names = i1910
  i1906.shadows = i1907[2]
  i1906.anisotropicFiltering = i1907[3]
  i1906.antiAliasing = i1907[4]
  i1906.lodBias = i1907[5]
  i1906.shadowCascades = i1907[6]
  i1906.shadowDistance = i1907[7]
  i1906.shadowmaskMode = i1907[8]
  i1906.shadowProjection = i1907[9]
  i1906.shadowResolution = i1907[10]
  i1906.softParticles = !!i1907[11]
  i1906.softVegetation = !!i1907[12]
  i1906.activeColorSpace = i1907[13]
  i1906.desiredColorSpace = i1907[14]
  i1906.masterTextureLimit = i1907[15]
  i1906.maxQueuedFrames = i1907[16]
  i1906.particleRaycastBudget = i1907[17]
  i1906.pixelLightCount = i1907[18]
  i1906.realtimeReflectionProbes = !!i1907[19]
  i1906.shadowCascade2Split = i1907[20]
  i1906.shadowCascade4Split = new pc.Vec3( i1907[21], i1907[22], i1907[23] )
  i1906.streamingMipmapsActive = !!i1907[24]
  i1906.vSyncCount = i1907[25]
  i1906.asyncUploadBufferSize = i1907[26]
  i1906.asyncUploadTimeSlice = i1907[27]
  i1906.billboardsFaceCameraPosition = !!i1907[28]
  i1906.shadowNearPlaneOffset = i1907[29]
  i1906.streamingMipmapsMemoryBudget = i1907[30]
  i1906.maximumLODLevel = i1907[31]
  i1906.streamingMipmapsAddAllCameras = !!i1907[32]
  i1906.streamingMipmapsMaxLevelReduction = i1907[33]
  i1906.streamingMipmapsRenderersPerFrame = i1907[34]
  i1906.resolutionScalingFixedDPIFactor = i1907[35]
  i1906.streamingMipmapsMaxFileIORequests = i1907[36]
  i1906.currentQualityLevel = i1907[37]
  return i1906
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1914 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1915 = data
  i1914.xPlacement = i1915[0]
  i1914.yPlacement = i1915[1]
  i1914.xAdvance = i1915[2]
  i1914.yAdvance = i1915[3]
  return i1914
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1916 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1917 = data
  i1916.m_GlyphIndex = i1917[0]
  i1916.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1917[1], i1916.m_GlyphValueRecord)
  return i1916
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1918 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1919 = data
  i1918.m_XPlacement = i1919[0]
  i1918.m_YPlacement = i1919[1]
  i1918.m_XAdvance = i1919[2]
  i1918.m_YAdvance = i1919[3]
  return i1918
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[3],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[3],"76":[77],"78":[79],"80":[79],"9":[8],"81":[82],"83":[84],"85":[82],"86":[8],"87":[8],"11":[9],"19":[20,8],"88":[8],"10":[9],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"34":[8],"96":[8],"16":[20,8],"97":[8],"98":[8],"99":[8],"100":[8],"101":[20,8],"102":[8],"103":[6],"104":[6],"7":[6],"105":[6],"106":[3],"107":[3],"108":[109],"110":[3],"111":[112],"113":[8],"114":[20,8],"115":[77],"29":[20,8],"116":[117,77],"118":[77],"119":[77,120],"121":[54],"122":[62],"123":[112],"124":[125],"126":[8],"127":[77,8],"18":[8,20],"128":[8],"129":[20,8],"130":[77],"131":[20,8],"132":[8],"133":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","MixSkeletonSkin","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","ClickItem","DraggableItem","UnityEngine.CanvasGroup","DropZone","UnityEngine.PolygonCollider2D","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DG.Tweening.DOTweenAnimation","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "266.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BEQ_V22_NgocNDL_AnhPD";

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

Deserializers.buildID = "56b159ec-aba9-44bb-8666-ff340084e328";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

