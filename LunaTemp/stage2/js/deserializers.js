var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1518 = root || request.c( 'UnityEngine.JointSpring' )
  var i1519 = data
  i1518.spring = i1519[0]
  i1518.damper = i1519[1]
  i1518.targetPosition = i1519[2]
  return i1518
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1520 = root || request.c( 'UnityEngine.JointMotor' )
  var i1521 = data
  i1520.m_TargetVelocity = i1521[0]
  i1520.m_Force = i1521[1]
  i1520.m_FreeSpin = i1521[2]
  return i1520
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1522 = root || request.c( 'UnityEngine.JointLimits' )
  var i1523 = data
  i1522.m_Min = i1523[0]
  i1522.m_Max = i1523[1]
  i1522.m_Bounciness = i1523[2]
  i1522.m_BounceMinVelocity = i1523[3]
  i1522.m_ContactDistance = i1523[4]
  i1522.minBounce = i1523[5]
  i1522.maxBounce = i1523[6]
  return i1522
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1524 = root || request.c( 'UnityEngine.JointDrive' )
  var i1525 = data
  i1524.m_PositionSpring = i1525[0]
  i1524.m_PositionDamper = i1525[1]
  i1524.m_MaximumForce = i1525[2]
  i1524.m_UseAcceleration = i1525[3]
  return i1524
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1526 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1527 = data
  i1526.m_Spring = i1527[0]
  i1526.m_Damper = i1527[1]
  return i1526
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1528 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1529 = data
  i1528.m_Limit = i1529[0]
  i1528.m_Bounciness = i1529[1]
  i1528.m_ContactDistance = i1529[2]
  return i1528
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1530 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1531 = data
  i1530.m_ExtremumSlip = i1531[0]
  i1530.m_ExtremumValue = i1531[1]
  i1530.m_AsymptoteSlip = i1531[2]
  i1530.m_AsymptoteValue = i1531[3]
  i1530.m_Stiffness = i1531[4]
  return i1530
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1532 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1533 = data
  i1532.m_LowerAngle = i1533[0]
  i1532.m_UpperAngle = i1533[1]
  return i1532
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1534 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1535 = data
  i1534.m_MotorSpeed = i1535[0]
  i1534.m_MaximumMotorTorque = i1535[1]
  return i1534
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1536 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1537 = data
  i1536.m_DampingRatio = i1537[0]
  i1536.m_Frequency = i1537[1]
  i1536.m_Angle = i1537[2]
  return i1536
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1538 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1539 = data
  i1538.m_LowerTranslation = i1539[0]
  i1538.m_UpperTranslation = i1539[1]
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1541 = data
  i1540.name = i1541[0]
  i1540.width = i1541[1]
  i1540.height = i1541[2]
  i1540.mipmapCount = i1541[3]
  i1540.anisoLevel = i1541[4]
  i1540.filterMode = i1541[5]
  i1540.hdr = !!i1541[6]
  i1540.format = i1541[7]
  i1540.wrapMode = i1541[8]
  i1540.alphaIsTransparency = !!i1541[9]
  i1540.alphaSource = i1541[10]
  i1540.graphicsFormat = i1541[11]
  i1540.sRGBTexture = !!i1541[12]
  i1540.desiredColorSpace = i1541[13]
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1542 = root || new pc.UnityMaterial()
  var i1543 = data
  i1542.name = i1543[0]
  request.r(i1543[1], i1543[2], 0, i1542, 'shader')
  i1542.renderQueue = i1543[3]
  i1542.enableInstancing = !!i1543[4]
  var i1545 = i1543[5]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1545[i + 0]) );
  }
  i1542.floatParameters = i1544
  var i1547 = i1543[6]
  var i1546 = []
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1547[i + 0]) );
  }
  i1542.colorParameters = i1546
  var i1549 = i1543[7]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 1) {
    i1548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1549[i + 0]) );
  }
  i1542.vectorParameters = i1548
  var i1551 = i1543[8]
  var i1550 = []
  for(var i = 0; i < i1551.length; i += 1) {
    i1550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1551[i + 0]) );
  }
  i1542.textureParameters = i1550
  var i1553 = i1543[9]
  var i1552 = []
  for(var i = 0; i < i1553.length; i += 1) {
    i1552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1553[i + 0]) );
  }
  i1542.materialFlags = i1552
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1557 = data
  i1556.name = i1557[0]
  i1556.value = i1557[1]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1561 = data
  i1560.name = i1561[0]
  i1560.value = new pc.Color(i1561[1], i1561[2], i1561[3], i1561[4])
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1565 = data
  i1564.name = i1565[0]
  i1564.value = new pc.Vec4( i1565[1], i1565[2], i1565[3], i1565[4] )
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1569 = data
  i1568.name = i1569[0]
  request.r(i1569[1], i1569[2], 0, i1568, 'value')
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1573 = data
  i1572.name = i1573[0]
  i1572.enabled = !!i1573[1]
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1575 = data
  i1574.name = i1575[0]
  i1574.halfPrecision = !!i1575[1]
  i1574.vertexCount = i1575[2]
  i1574.aabb = i1575[3]
  var i1577 = i1575[4]
  var i1576 = []
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.push( !!i1577[i + 0] );
  }
  i1574.streams = i1576
  i1574.vertices = i1575[5]
  var i1579 = i1575[6]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1579[i + 0]) );
  }
  i1574.subMeshes = i1578
  var i1581 = i1575[7]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 16) {
    i1580.push( new pc.Mat4().setData(i1581[i + 0], i1581[i + 1], i1581[i + 2], i1581[i + 3],  i1581[i + 4], i1581[i + 5], i1581[i + 6], i1581[i + 7],  i1581[i + 8], i1581[i + 9], i1581[i + 10], i1581[i + 11],  i1581[i + 12], i1581[i + 13], i1581[i + 14], i1581[i + 15]) );
  }
  i1574.bindposes = i1580
  var i1583 = i1575[8]
  var i1582 = []
  for(var i = 0; i < i1583.length; i += 1) {
    i1582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1583[i + 0]) );
  }
  i1574.blendShapes = i1582
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1589 = data
  i1588.triangles = i1589[0]
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1595 = data
  i1594.name = i1595[0]
  var i1597 = i1595[1]
  var i1596 = []
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1597[i + 0]) );
  }
  i1594.frames = i1596
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1599 = data
  i1598.name = i1599[0]
  i1598.index = i1599[1]
  i1598.startup = !!i1599[2]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1601 = data
  i1600.position = new pc.Vec3( i1601[0], i1601[1], i1601[2] )
  i1600.scale = new pc.Vec3( i1601[3], i1601[4], i1601[5] )
  i1600.rotation = new pc.Quat(i1601[6], i1601[7], i1601[8], i1601[9])
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1603 = data
  i1602.enabled = !!i1603[0]
  i1602.aspect = i1603[1]
  i1602.orthographic = !!i1603[2]
  i1602.orthographicSize = i1603[3]
  i1602.backgroundColor = new pc.Color(i1603[4], i1603[5], i1603[6], i1603[7])
  i1602.nearClipPlane = i1603[8]
  i1602.farClipPlane = i1603[9]
  i1602.fieldOfView = i1603[10]
  i1602.depth = i1603[11]
  i1602.clearFlags = i1603[12]
  i1602.cullingMask = i1603[13]
  i1602.rect = i1603[14]
  request.r(i1603[15], i1603[16], 0, i1602, 'targetTexture')
  i1602.usePhysicalProperties = !!i1603[17]
  i1602.focalLength = i1603[18]
  i1602.sensorSize = new pc.Vec2( i1603[19], i1603[20] )
  i1602.lensShift = new pc.Vec2( i1603[21], i1603[22] )
  i1602.gateFit = i1603[23]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1605 = data
  i1604.name = i1605[0]
  i1604.tagId = i1605[1]
  i1604.enabled = !!i1605[2]
  i1604.isStatic = !!i1605[3]
  i1604.layer = i1605[4]
  return i1604
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1606 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1607 = data
  request.r(i1607[0], i1607[1], 0, i1606, 'm_FirstSelected')
  i1606.m_sendNavigationEvents = !!i1607[2]
  i1606.m_DragThreshold = i1607[3]
  return i1606
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1609 = data
  i1608.m_HorizontalAxis = i1609[0]
  i1608.m_VerticalAxis = i1609[1]
  i1608.m_SubmitButton = i1609[2]
  i1608.m_CancelButton = i1609[3]
  i1608.m_InputActionsPerSecond = i1609[4]
  i1608.m_RepeatDelay = i1609[5]
  i1608.m_ForceModuleActive = !!i1609[6]
  i1608.m_SendPointerHoverToParent = !!i1609[7]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1611 = data
  i1610.pivot = new pc.Vec2( i1611[0], i1611[1] )
  i1610.anchorMin = new pc.Vec2( i1611[2], i1611[3] )
  i1610.anchorMax = new pc.Vec2( i1611[4], i1611[5] )
  i1610.sizeDelta = new pc.Vec2( i1611[6], i1611[7] )
  i1610.anchoredPosition3D = new pc.Vec3( i1611[8], i1611[9], i1611[10] )
  i1610.rotation = new pc.Quat(i1611[11], i1611[12], i1611[13], i1611[14])
  i1610.scale = new pc.Vec3( i1611[15], i1611[16], i1611[17] )
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1613 = data
  i1612.enabled = !!i1613[0]
  i1612.planeDistance = i1613[1]
  i1612.referencePixelsPerUnit = i1613[2]
  i1612.isFallbackOverlay = !!i1613[3]
  i1612.renderMode = i1613[4]
  i1612.renderOrder = i1613[5]
  i1612.sortingLayerName = i1613[6]
  i1612.sortingOrder = i1613[7]
  i1612.scaleFactor = i1613[8]
  request.r(i1613[9], i1613[10], 0, i1612, 'worldCamera')
  i1612.overrideSorting = !!i1613[11]
  i1612.pixelPerfect = !!i1613[12]
  i1612.targetDisplay = i1613[13]
  i1612.overridePixelPerfect = !!i1613[14]
  return i1612
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1615 = data
  i1614.m_UiScaleMode = i1615[0]
  i1614.m_ReferencePixelsPerUnit = i1615[1]
  i1614.m_ScaleFactor = i1615[2]
  i1614.m_ReferenceResolution = new pc.Vec2( i1615[3], i1615[4] )
  i1614.m_ScreenMatchMode = i1615[5]
  i1614.m_MatchWidthOrHeight = i1615[6]
  i1614.m_PhysicalUnit = i1615[7]
  i1614.m_FallbackScreenDPI = i1615[8]
  i1614.m_DefaultSpriteDPI = i1615[9]
  i1614.m_DynamicPixelsPerUnit = i1615[10]
  i1614.m_PresetInfoIsWorld = !!i1615[11]
  return i1614
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1617 = data
  i1616.m_IgnoreReversedGraphics = !!i1617[0]
  i1616.m_BlockingObjects = i1617[1]
  i1616.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1617[2] )
  return i1616
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1618 = root || request.c( 'LunaManager' )
  var i1619 = data
  var i1621 = i1619[0]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 2) {
  request.r(i1621[i + 0], i1621[i + 1], 2, i1620, '')
  }
  i1618.lstBtnInstall = i1620
  request.r(i1619[1], i1619[2], 0, i1618, 'EndCard')
  i1618.countPlay = i1619[3]
  i1618.countPlayFinal = i1619[4]
  i1618.timeDropFinal = i1619[5]
  i1618.colorBG = new pc.Color(i1619[6], i1619[7], i1619[8], i1619[9])
  request.r(i1619[10], i1619[11], 0, i1618, 'texture2D')
  request.r(i1619[12], i1619[13], 0, i1618, 'rawImageBG')
  request.r(i1619[14], i1619[15], 0, i1618, 'StartCard')
  request.r(i1619[16], i1619[17], 0, i1618, 'textTarget')
  request.r(i1619[18], i1619[19], 0, i1618, 'imgCircle')
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1625 = data
  i1624.cullTransparentMesh = !!i1625[0]
  return i1624
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1627 = data
  request.r(i1627[0], i1627[1], 0, i1626, 'm_Texture')
  i1626.m_UVRect = UnityEngine.Rect.MinMaxRect(i1627[2], i1627[3], i1627[4], i1627[5])
  request.r(i1627[6], i1627[7], 0, i1626, 'm_Material')
  i1626.m_Maskable = !!i1627[8]
  i1626.m_Color = new pc.Color(i1627[9], i1627[10], i1627[11], i1627[12])
  i1626.m_RaycastTarget = !!i1627[13]
  i1626.m_RaycastPadding = new pc.Vec4( i1627[14], i1627[15], i1627[16], i1627[17] )
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1629 = data
  request.r(i1629[0], i1629[1], 0, i1628, 'clip')
  request.r(i1629[2], i1629[3], 0, i1628, 'outputAudioMixerGroup')
  i1628.playOnAwake = !!i1629[4]
  i1628.loop = !!i1629[5]
  i1628.time = i1629[6]
  i1628.volume = i1629[7]
  i1628.pitch = i1629[8]
  i1628.enabled = !!i1629[9]
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1631 = data
  i1630.usedByComposite = !!i1631[0]
  i1630.autoTiling = !!i1631[1]
  i1630.size = new pc.Vec2( i1631[2], i1631[3] )
  i1630.edgeRadius = i1631[4]
  i1630.enabled = !!i1631[5]
  i1630.isTrigger = !!i1631[6]
  i1630.usedByEffector = !!i1631[7]
  i1630.density = i1631[8]
  i1630.offset = new pc.Vec2( i1631[9], i1631[10] )
  request.r(i1631[11], i1631[12], 0, i1630, 'material')
  return i1630
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1632 = root || request.c( 'DropZone' )
  var i1633 = data
  var i1635 = i1633[0]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 2) {
  request.r(i1635[i + 0], i1635[i + 1], 2, i1634, '')
  }
  i1632.steps = i1634
  i1632.isActive = !!i1633[1]
  request.r(i1633[2], i1633[3], 0, i1632, 'spriteUpgrade')
  return i1632
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1638 = root || request.c( 'UnityEngine.UI.Image' )
  var i1639 = data
  request.r(i1639[0], i1639[1], 0, i1638, 'm_Sprite')
  i1638.m_Type = i1639[2]
  i1638.m_PreserveAspect = !!i1639[3]
  i1638.m_FillCenter = !!i1639[4]
  i1638.m_FillMethod = i1639[5]
  i1638.m_FillAmount = i1639[6]
  i1638.m_FillClockwise = !!i1639[7]
  i1638.m_FillOrigin = i1639[8]
  i1638.m_UseSpriteMesh = !!i1639[9]
  i1638.m_PixelsPerUnitMultiplier = i1639[10]
  request.r(i1639[11], i1639[12], 0, i1638, 'm_Material')
  i1638.m_Maskable = !!i1639[13]
  i1638.m_Color = new pc.Color(i1639[14], i1639[15], i1639[16], i1639[17])
  i1638.m_RaycastTarget = !!i1639[18]
  i1638.m_RaycastPadding = new pc.Vec4( i1639[19], i1639[20], i1639[21], i1639[22] )
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, 'additionalVertexStreams')
  i1640.enabled = !!i1641[2]
  request.r(i1641[3], i1641[4], 0, i1640, 'sharedMaterial')
  var i1643 = i1641[5]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 2) {
  request.r(i1643[i + 0], i1643[i + 1], 2, i1642, '')
  }
  i1640.sharedMaterials = i1642
  i1640.receiveShadows = !!i1641[6]
  i1640.shadowCastingMode = i1641[7]
  i1640.sortingLayerID = i1641[8]
  i1640.sortingOrder = i1641[9]
  i1640.lightmapIndex = i1641[10]
  i1640.lightmapSceneIndex = i1641[11]
  i1640.lightmapScaleOffset = new pc.Vec4( i1641[12], i1641[13], i1641[14], i1641[15] )
  i1640.lightProbeUsage = i1641[16]
  i1640.reflectionProbeUsage = i1641[17]
  return i1640
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1646 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1647 = data
  i1646.loop = !!i1647[0]
  i1646.timeScale = i1647[1]
  request.r(i1647[2], i1647[3], 0, i1646, 'skeletonDataAsset')
  i1646.initialSkinName = i1647[4]
  i1646.fixPrefabOverrideViaMeshFilter = i1647[5]
  i1646.initialFlipX = !!i1647[6]
  i1646.initialFlipY = !!i1647[7]
  i1646.updateWhenInvisible = i1647[8]
  i1646.zSpacing = i1647[9]
  i1646.useClipping = !!i1647[10]
  i1646.immutableTriangles = !!i1647[11]
  i1646.pmaVertexColors = !!i1647[12]
  i1646.clearStateOnDisable = !!i1647[13]
  i1646.tintBlack = !!i1647[14]
  i1646.singleSubmesh = !!i1647[15]
  i1646.fixDrawOrder = !!i1647[16]
  i1646.addNormals = !!i1647[17]
  i1646.calculateTangents = !!i1647[18]
  i1646.maskInteraction = i1647[19]
  i1646.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1647[20], i1646.maskMaterials)
  i1646.disableRenderingOnOverride = !!i1647[21]
  i1646.updateTiming = i1647[22]
  i1646.unscaledTime = !!i1647[23]
  i1646._animationName = i1647[24]
  var i1649 = i1647[25]
  var i1648 = []
  for(var i = 0; i < i1649.length; i += 1) {
    i1648.push( i1649[i + 0] );
  }
  i1646.separatorSlotNames = i1648
  return i1646
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1650 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1651 = data
  var i1653 = i1651[0]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 2) {
  request.r(i1653[i + 0], i1653[i + 1], 2, i1652, '')
  }
  i1650.materialsMaskDisabled = i1652
  var i1655 = i1651[1]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 2) {
  request.r(i1655[i + 0], i1655[i + 1], 2, i1654, '')
  }
  i1650.materialsInsideMask = i1654
  var i1657 = i1651[2]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 2) {
  request.r(i1657[i + 0], i1657[i + 1], 2, i1656, '')
  }
  i1650.materialsOutsideMask = i1656
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1661 = data
  request.r(i1661[0], i1661[1], 0, i1660, 'sharedMesh')
  return i1660
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1662 = root || request.c( 'DraggableItem' )
  var i1663 = data
  i1662.isChease = !!i1663[0]
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1665 = data
  i1664.m_Alpha = i1665[0]
  i1664.m_Interactable = !!i1665[1]
  i1664.m_BlocksRaycasts = !!i1665[2]
  i1664.m_IgnoreParentGroups = !!i1665[3]
  i1664.enabled = !!i1665[4]
  return i1664
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1666 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1667 = data
  i1666.m_hasFontAssetChanged = !!i1667[0]
  request.r(i1667[1], i1667[2], 0, i1666, 'm_baseMaterial')
  i1666.m_maskOffset = new pc.Vec4( i1667[3], i1667[4], i1667[5], i1667[6] )
  i1666.m_text = i1667[7]
  i1666.m_isRightToLeft = !!i1667[8]
  request.r(i1667[9], i1667[10], 0, i1666, 'm_fontAsset')
  request.r(i1667[11], i1667[12], 0, i1666, 'm_sharedMaterial')
  var i1669 = i1667[13]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 2) {
  request.r(i1669[i + 0], i1669[i + 1], 2, i1668, '')
  }
  i1666.m_fontSharedMaterials = i1668
  request.r(i1667[14], i1667[15], 0, i1666, 'm_fontMaterial')
  var i1671 = i1667[16]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 2) {
  request.r(i1671[i + 0], i1671[i + 1], 2, i1670, '')
  }
  i1666.m_fontMaterials = i1670
  i1666.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1667[17], i1667[18], i1667[19], i1667[20])
  i1666.m_fontColor = new pc.Color(i1667[21], i1667[22], i1667[23], i1667[24])
  i1666.m_enableVertexGradient = !!i1667[25]
  i1666.m_colorMode = i1667[26]
  i1666.m_fontColorGradient = request.d('TMPro.VertexGradient', i1667[27], i1666.m_fontColorGradient)
  request.r(i1667[28], i1667[29], 0, i1666, 'm_fontColorGradientPreset')
  request.r(i1667[30], i1667[31], 0, i1666, 'm_spriteAsset')
  i1666.m_tintAllSprites = !!i1667[32]
  request.r(i1667[33], i1667[34], 0, i1666, 'm_StyleSheet')
  i1666.m_TextStyleHashCode = i1667[35]
  i1666.m_overrideHtmlColors = !!i1667[36]
  i1666.m_faceColor = UnityEngine.Color32.ConstructColor(i1667[37], i1667[38], i1667[39], i1667[40])
  i1666.m_fontSize = i1667[41]
  i1666.m_fontSizeBase = i1667[42]
  i1666.m_fontWeight = i1667[43]
  i1666.m_enableAutoSizing = !!i1667[44]
  i1666.m_fontSizeMin = i1667[45]
  i1666.m_fontSizeMax = i1667[46]
  i1666.m_fontStyle = i1667[47]
  i1666.m_HorizontalAlignment = i1667[48]
  i1666.m_VerticalAlignment = i1667[49]
  i1666.m_textAlignment = i1667[50]
  i1666.m_characterSpacing = i1667[51]
  i1666.m_wordSpacing = i1667[52]
  i1666.m_lineSpacing = i1667[53]
  i1666.m_lineSpacingMax = i1667[54]
  i1666.m_paragraphSpacing = i1667[55]
  i1666.m_charWidthMaxAdj = i1667[56]
  i1666.m_enableWordWrapping = !!i1667[57]
  i1666.m_wordWrappingRatios = i1667[58]
  i1666.m_overflowMode = i1667[59]
  request.r(i1667[60], i1667[61], 0, i1666, 'm_linkedTextComponent')
  request.r(i1667[62], i1667[63], 0, i1666, 'parentLinkedComponent')
  i1666.m_enableKerning = !!i1667[64]
  i1666.m_enableExtraPadding = !!i1667[65]
  i1666.checkPaddingRequired = !!i1667[66]
  i1666.m_isRichText = !!i1667[67]
  i1666.m_parseCtrlCharacters = !!i1667[68]
  i1666.m_isOrthographic = !!i1667[69]
  i1666.m_isCullingEnabled = !!i1667[70]
  i1666.m_horizontalMapping = i1667[71]
  i1666.m_verticalMapping = i1667[72]
  i1666.m_uvLineOffset = i1667[73]
  i1666.m_geometrySortingOrder = i1667[74]
  i1666.m_IsTextObjectScaleStatic = !!i1667[75]
  i1666.m_VertexBufferAutoSizeReduction = !!i1667[76]
  i1666.m_useMaxVisibleDescender = !!i1667[77]
  i1666.m_pageToDisplay = i1667[78]
  i1666.m_margin = new pc.Vec4( i1667[79], i1667[80], i1667[81], i1667[82] )
  i1666.m_isUsingLegacyAnimationComponent = !!i1667[83]
  i1666.m_isVolumetricText = !!i1667[84]
  request.r(i1667[85], i1667[86], 0, i1666, 'm_Material')
  i1666.m_Maskable = !!i1667[87]
  i1666.m_Color = new pc.Color(i1667[88], i1667[89], i1667[90], i1667[91])
  i1666.m_RaycastTarget = !!i1667[92]
  i1666.m_RaycastPadding = new pc.Vec4( i1667[93], i1667[94], i1667[95], i1667[96] )
  return i1666
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1672 = root || request.c( 'TMPro.VertexGradient' )
  var i1673 = data
  i1672.topLeft = new pc.Color(i1673[0], i1673[1], i1673[2], i1673[3])
  i1672.topRight = new pc.Color(i1673[4], i1673[5], i1673[6], i1673[7])
  i1672.bottomLeft = new pc.Color(i1673[8], i1673[9], i1673[10], i1673[11])
  i1672.bottomRight = new pc.Color(i1673[12], i1673[13], i1673[14], i1673[15])
  return i1672
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1674 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1675 = data
  request.r(i1675[0], i1675[1], 0, i1674, 'skeletonDataAsset')
  request.r(i1675[2], i1675[3], 0, i1674, 'additiveMaterial')
  request.r(i1675[4], i1675[5], 0, i1674, 'multiplyMaterial')
  request.r(i1675[6], i1675[7], 0, i1674, 'screenMaterial')
  i1674.initialSkinName = i1675[8]
  i1674.initialFlipX = !!i1675[9]
  i1674.initialFlipY = !!i1675[10]
  i1674.startingAnimation = i1675[11]
  i1674.startingLoop = !!i1675[12]
  i1674.timeScale = i1675[13]
  i1674.freeze = !!i1675[14]
  i1674.layoutScaleMode = i1675[15]
  i1674.updateWhenInvisible = i1675[16]
  i1674.allowMultipleCanvasRenderers = !!i1675[17]
  var i1677 = i1675[18]
  var i1676 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1677.length; i += 2) {
  request.r(i1677[i + 0], i1677[i + 1], 1, i1676, '')
  }
  i1674.canvasRenderers = i1676
  i1674.enableSeparatorSlots = !!i1675[19]
  i1674.updateSeparatorPartLocation = !!i1675[20]
  i1674.updateSeparatorPartScale = !!i1675[21]
  i1674.disableMeshAssignmentOnOverride = !!i1675[22]
  i1674.referenceSize = new pc.Vec2( i1675[23], i1675[24] )
  i1674.referenceScale = i1675[25]
  i1674.rectTransformSize = new pc.Vec2( i1675[26], i1675[27] )
  i1674.editReferenceRect = !!i1675[28]
  var i1679 = i1675[29]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.push( i1679[i + 0] );
  }
  i1674.separatorSlotNames = i1678
  var i1681 = i1675[30]
  var i1680 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1681.length; i += 2) {
  request.r(i1681[i + 0], i1681[i + 1], 1, i1680, '')
  }
  i1674.separatorParts = i1680
  i1674.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1675[31], i1674.meshGenerator)
  i1674.updateTiming = i1675[32]
  i1674.unscaledTime = !!i1675[33]
  request.r(i1675[34], i1675[35], 0, i1674, 'm_Material')
  i1674.m_Maskable = !!i1675[36]
  i1674.m_Color = new pc.Color(i1675[37], i1675[38], i1675[39], i1675[40])
  i1674.m_RaycastTarget = !!i1675[41]
  i1674.m_RaycastPadding = new pc.Vec4( i1675[42], i1675[43], i1675[44], i1675[45] )
  return i1674
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1686 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1687 = data
  i1686.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1687[0], i1686.settings)
  return i1686
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1688 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1689 = data
  i1688.useClipping = !!i1689[0]
  i1688.zSpacing = i1689[1]
  i1688.pmaVertexColors = !!i1689[2]
  i1688.tintBlack = !!i1689[3]
  i1688.canvasGroupTintBlack = !!i1689[4]
  i1688.calculateTangents = !!i1689[5]
  i1688.addNormals = !!i1689[6]
  i1688.immutableTriangles = !!i1689[7]
  return i1688
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1690 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1691 = data
  i1690.targetIsSelf = !!i1691[0]
  request.r(i1691[1], i1691[2], 0, i1690, 'targetGO')
  i1690.tweenTargetIsTargetGO = !!i1691[3]
  i1690.delay = i1691[4]
  i1690.duration = i1691[5]
  i1690.easeType = i1691[6]
  i1690.easeCurve = new pc.AnimationCurve( { keys_flow: i1691[7] } )
  i1690.loopType = i1691[8]
  i1690.loops = i1691[9]
  i1690.id = i1691[10]
  i1690.isRelative = !!i1691[11]
  i1690.isFrom = !!i1691[12]
  i1690.isIndependentUpdate = !!i1691[13]
  i1690.autoKill = !!i1691[14]
  i1690.autoGenerate = !!i1691[15]
  i1690.isActive = !!i1691[16]
  i1690.isValid = !!i1691[17]
  request.r(i1691[18], i1691[19], 0, i1690, 'target')
  i1690.animationType = i1691[20]
  i1690.targetType = i1691[21]
  i1690.forcedTargetType = i1691[22]
  i1690.autoPlay = !!i1691[23]
  i1690.useTargetAsV3 = !!i1691[24]
  i1690.endValueFloat = i1691[25]
  i1690.endValueV3 = new pc.Vec3( i1691[26], i1691[27], i1691[28] )
  i1690.endValueV2 = new pc.Vec2( i1691[29], i1691[30] )
  i1690.endValueColor = new pc.Color(i1691[31], i1691[32], i1691[33], i1691[34])
  i1690.endValueString = i1691[35]
  i1690.endValueRect = UnityEngine.Rect.MinMaxRect(i1691[36], i1691[37], i1691[38], i1691[39])
  request.r(i1691[40], i1691[41], 0, i1690, 'endValueTransform')
  i1690.optionalBool0 = !!i1691[42]
  i1690.optionalBool1 = !!i1691[43]
  i1690.optionalFloat0 = i1691[44]
  i1690.optionalInt0 = i1691[45]
  i1690.optionalRotationMode = i1691[46]
  i1690.optionalScrambleMode = i1691[47]
  i1690.optionalShakeRandomnessMode = i1691[48]
  i1690.optionalString = i1691[49]
  i1690.updateType = i1691[50]
  i1690.isSpeedBased = !!i1691[51]
  i1690.hasOnStart = !!i1691[52]
  i1690.hasOnPlay = !!i1691[53]
  i1690.hasOnUpdate = !!i1691[54]
  i1690.hasOnStepComplete = !!i1691[55]
  i1690.hasOnComplete = !!i1691[56]
  i1690.hasOnTweenCreated = !!i1691[57]
  i1690.hasOnRewind = !!i1691[58]
  i1690.onStart = request.d('UnityEngine.Events.UnityEvent', i1691[59], i1690.onStart)
  i1690.onPlay = request.d('UnityEngine.Events.UnityEvent', i1691[60], i1690.onPlay)
  i1690.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1691[61], i1690.onUpdate)
  i1690.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1691[62], i1690.onStepComplete)
  i1690.onComplete = request.d('UnityEngine.Events.UnityEvent', i1691[63], i1690.onComplete)
  i1690.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1691[64], i1690.onTweenCreated)
  i1690.onRewind = request.d('UnityEngine.Events.UnityEvent', i1691[65], i1690.onRewind)
  return i1690
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1692 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1693 = data
  i1692.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1693[0], i1692.m_PersistentCalls)
  return i1692
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1694 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1695 = data
  var i1697 = i1695[0]
  var i1696 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1697.length; i += 1) {
    i1696.add(request.d('UnityEngine.Events.PersistentCall', i1697[i + 0]));
  }
  i1694.m_Calls = i1696
  return i1694
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1700 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1701 = data
  request.r(i1701[0], i1701[1], 0, i1700, 'm_Target')
  i1700.m_TargetAssemblyTypeName = i1701[2]
  i1700.m_MethodName = i1701[3]
  i1700.m_Mode = i1701[4]
  i1700.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1701[5], i1700.m_Arguments)
  i1700.m_CallState = i1701[6]
  return i1700
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1702 = root || request.c( 'UnityEngine.UI.Button' )
  var i1703 = data
  i1702.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1703[0], i1702.m_OnClick)
  i1702.m_Navigation = request.d('UnityEngine.UI.Navigation', i1703[1], i1702.m_Navigation)
  i1702.m_Transition = i1703[2]
  i1702.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1703[3], i1702.m_Colors)
  i1702.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1703[4], i1702.m_SpriteState)
  i1702.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1703[5], i1702.m_AnimationTriggers)
  i1702.m_Interactable = !!i1703[6]
  request.r(i1703[7], i1703[8], 0, i1702, 'm_TargetGraphic')
  return i1702
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1704 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1705 = data
  i1704.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1705[0], i1704.m_PersistentCalls)
  return i1704
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1706 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1707 = data
  i1706.m_Mode = i1707[0]
  i1706.m_WrapAround = !!i1707[1]
  request.r(i1707[2], i1707[3], 0, i1706, 'm_SelectOnUp')
  request.r(i1707[4], i1707[5], 0, i1706, 'm_SelectOnDown')
  request.r(i1707[6], i1707[7], 0, i1706, 'm_SelectOnLeft')
  request.r(i1707[8], i1707[9], 0, i1706, 'm_SelectOnRight')
  return i1706
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1708 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1709 = data
  i1708.m_NormalColor = new pc.Color(i1709[0], i1709[1], i1709[2], i1709[3])
  i1708.m_HighlightedColor = new pc.Color(i1709[4], i1709[5], i1709[6], i1709[7])
  i1708.m_PressedColor = new pc.Color(i1709[8], i1709[9], i1709[10], i1709[11])
  i1708.m_SelectedColor = new pc.Color(i1709[12], i1709[13], i1709[14], i1709[15])
  i1708.m_DisabledColor = new pc.Color(i1709[16], i1709[17], i1709[18], i1709[19])
  i1708.m_ColorMultiplier = i1709[20]
  i1708.m_FadeDuration = i1709[21]
  return i1708
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1710 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1711 = data
  request.r(i1711[0], i1711[1], 0, i1710, 'm_HighlightedSprite')
  request.r(i1711[2], i1711[3], 0, i1710, 'm_PressedSprite')
  request.r(i1711[4], i1711[5], 0, i1710, 'm_SelectedSprite')
  request.r(i1711[6], i1711[7], 0, i1710, 'm_DisabledSprite')
  return i1710
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1712 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1713 = data
  i1712.m_NormalTrigger = i1713[0]
  i1712.m_HighlightedTrigger = i1713[1]
  i1712.m_PressedTrigger = i1713[2]
  i1712.m_SelectedTrigger = i1713[3]
  i1712.m_DisabledTrigger = i1713[4]
  return i1712
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1714 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1715 = data
  i1714.m_ShowMaskGraphic = !!i1715[0]
  return i1714
}

Deserializers["IQFill"] = function (request, data, root) {
  var i1716 = root || request.c( 'IQFill' )
  var i1717 = data
  request.r(i1717[0], i1717[1], 0, i1716, 'fillImage')
  i1716.maxFillAmount = i1717[2]
  i1716.fillDuration = i1717[3]
  i1716.maxValue = i1717[4]
  i1716.addValue = i1717[5]
  i1716.fillEase = i1717[6]
  return i1716
}

Deserializers["GameController"] = function (request, data, root) {
  var i1718 = root || request.c( 'GameController' )
  var i1719 = data
  var i1721 = i1719[0]
  var i1720 = []
  for(var i = 0; i < i1721.length; i += 2) {
  request.r(i1721[i + 0], i1721[i + 1], 2, i1720, '')
  }
  i1718.colliders = i1720
  i1718.isUpgrade = !!i1719[1]
  request.r(i1719[2], i1719[3], 0, i1718, 'IQFill')
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1725 = data
  i1724.ambientIntensity = i1725[0]
  i1724.reflectionIntensity = i1725[1]
  i1724.ambientMode = i1725[2]
  i1724.ambientLight = new pc.Color(i1725[3], i1725[4], i1725[5], i1725[6])
  i1724.ambientSkyColor = new pc.Color(i1725[7], i1725[8], i1725[9], i1725[10])
  i1724.ambientGroundColor = new pc.Color(i1725[11], i1725[12], i1725[13], i1725[14])
  i1724.ambientEquatorColor = new pc.Color(i1725[15], i1725[16], i1725[17], i1725[18])
  i1724.fogColor = new pc.Color(i1725[19], i1725[20], i1725[21], i1725[22])
  i1724.fogEndDistance = i1725[23]
  i1724.fogStartDistance = i1725[24]
  i1724.fogDensity = i1725[25]
  i1724.fog = !!i1725[26]
  request.r(i1725[27], i1725[28], 0, i1724, 'skybox')
  i1724.fogMode = i1725[29]
  var i1727 = i1725[30]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1727[i + 0]) );
  }
  i1724.lightmaps = i1726
  i1724.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1725[31], i1724.lightProbes)
  i1724.lightmapsMode = i1725[32]
  i1724.mixedBakeMode = i1725[33]
  i1724.environmentLightingMode = i1725[34]
  i1724.ambientProbe = new pc.SphericalHarmonicsL2(i1725[35])
  i1724.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1725[36])
  i1724.useReferenceAmbientProbe = !!i1725[37]
  request.r(i1725[38], i1725[39], 0, i1724, 'customReflection')
  request.r(i1725[40], i1725[41], 0, i1724, 'defaultReflection')
  i1724.defaultReflectionMode = i1725[42]
  i1724.defaultReflectionResolution = i1725[43]
  i1724.sunLightObjectId = i1725[44]
  i1724.pixelLightCount = i1725[45]
  i1724.defaultReflectionHDR = !!i1725[46]
  i1724.hasLightDataAsset = !!i1725[47]
  i1724.hasManualGenerate = !!i1725[48]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1731 = data
  request.r(i1731[0], i1731[1], 0, i1730, 'lightmapColor')
  request.r(i1731[2], i1731[3], 0, i1730, 'lightmapDirection')
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1732 = root || new UnityEngine.LightProbes()
  var i1733 = data
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1741 = data
  var i1743 = i1741[0]
  var i1742 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1743[i + 0]));
  }
  i1740.ShaderCompilationErrors = i1742
  i1740.name = i1741[1]
  i1740.guid = i1741[2]
  var i1745 = i1741[3]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.push( i1745[i + 0] );
  }
  i1740.shaderDefinedKeywords = i1744
  var i1747 = i1741[4]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1747[i + 0]) );
  }
  i1740.passes = i1746
  var i1749 = i1741[5]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1749[i + 0]) );
  }
  i1740.usePasses = i1748
  var i1751 = i1741[6]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1751[i + 0]) );
  }
  i1740.defaultParameterValues = i1750
  request.r(i1741[7], i1741[8], 0, i1740, 'unityFallbackShader')
  i1740.readDepth = !!i1741[9]
  i1740.isCreatedByShaderGraph = !!i1741[10]
  i1740.usedBatchUniforms = i1741[11]
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1755 = data
  i1754.shaderName = i1755[0]
  i1754.errorMessage = i1755[1]
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1758 = root || new pc.UnityShaderPass()
  var i1759 = data
  i1758.id = i1759[0]
  i1758.subShaderIndex = i1759[1]
  i1758.name = i1759[2]
  i1758.passType = i1759[3]
  i1758.grabPassTextureName = i1759[4]
  i1758.usePass = !!i1759[5]
  i1758.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1759[6], i1758.zTest)
  i1758.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1759[7], i1758.zWrite)
  i1758.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1759[8], i1758.culling)
  i1758.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1759[9], i1758.blending)
  i1758.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1759[10], i1758.alphaBlending)
  i1758.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1759[11], i1758.colorWriteMask)
  i1758.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1759[12], i1758.offsetUnits)
  i1758.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1759[13], i1758.offsetFactor)
  i1758.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1759[14], i1758.stencilRef)
  i1758.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1759[15], i1758.stencilReadMask)
  i1758.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1759[16], i1758.stencilWriteMask)
  i1758.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1759[17], i1758.stencilOp)
  i1758.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1759[18], i1758.stencilOpFront)
  i1758.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1759[19], i1758.stencilOpBack)
  var i1761 = i1759[20]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1761[i + 0]) );
  }
  i1758.tags = i1760
  var i1763 = i1759[21]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.push( i1763[i + 0] );
  }
  i1758.passDefinedKeywords = i1762
  var i1765 = i1759[22]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1765[i + 0]) );
  }
  i1758.passDefinedKeywordGroups = i1764
  var i1767 = i1759[23]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1767[i + 0]) );
  }
  i1758.variants = i1766
  var i1769 = i1759[24]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1769[i + 0]) );
  }
  i1758.excludedVariants = i1768
  i1758.hasDepthReader = !!i1759[25]
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1771 = data
  i1770.val = i1771[0]
  i1770.name = i1771[1]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1773 = data
  i1772.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[0], i1772.src)
  i1772.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[1], i1772.dst)
  i1772.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[2], i1772.op)
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1775 = data
  i1774.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1775[0], i1774.pass)
  i1774.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1775[1], i1774.fail)
  i1774.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1775[2], i1774.zFail)
  i1774.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1775[3], i1774.comp)
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1779 = data
  i1778.name = i1779[0]
  i1778.value = i1779[1]
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1783 = data
  var i1785 = i1783[0]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( i1785[i + 0] );
  }
  i1782.keywords = i1784
  i1782.hasDiscard = !!i1783[1]
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1789 = data
  i1788.passId = i1789[0]
  i1788.subShaderIndex = i1789[1]
  var i1791 = i1789[2]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( i1791[i + 0] );
  }
  i1788.keywords = i1790
  i1788.vertexProgram = i1789[3]
  i1788.fragmentProgram = i1789[4]
  i1788.compiledForWebGL2 = !!i1789[5]
  i1788.readDepth = !!i1789[6]
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1795 = data
  request.r(i1795[0], i1795[1], 0, i1794, 'shader')
  i1794.pass = i1795[2]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1799 = data
  i1798.name = i1799[0]
  i1798.type = i1799[1]
  i1798.value = new pc.Vec4( i1799[2], i1799[3], i1799[4], i1799[5] )
  i1798.textureValue = i1799[6]
  i1798.shaderPropertyFlag = i1799[7]
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1801 = data
  i1800.name = i1801[0]
  request.r(i1801[1], i1801[2], 0, i1800, 'texture')
  i1800.aabb = i1801[3]
  i1800.vertices = i1801[4]
  i1800.triangles = i1801[5]
  i1800.textureRect = UnityEngine.Rect.MinMaxRect(i1801[6], i1801[7], i1801[8], i1801[9])
  i1800.packedRect = UnityEngine.Rect.MinMaxRect(i1801[10], i1801[11], i1801[12], i1801[13])
  i1800.border = new pc.Vec4( i1801[14], i1801[15], i1801[16], i1801[17] )
  i1800.transparency = i1801[18]
  i1800.bounds = i1801[19]
  i1800.pixelsPerUnit = i1801[20]
  i1800.textureWidth = i1801[21]
  i1800.textureHeight = i1801[22]
  i1800.nativeSize = new pc.Vec2( i1801[23], i1801[24] )
  i1800.pivot = new pc.Vec2( i1801[25], i1801[26] )
  i1800.textureRectOffset = new pc.Vec2( i1801[27], i1801[28] )
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1803 = data
  i1802.name = i1803[0]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1805 = data
  i1804.name = i1805[0]
  i1804.ascent = i1805[1]
  i1804.originalLineHeight = i1805[2]
  i1804.fontSize = i1805[3]
  var i1807 = i1805[4]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1807[i + 0]) );
  }
  i1804.characterInfo = i1806
  request.r(i1805[5], i1805[6], 0, i1804, 'texture')
  i1804.originalFontSize = i1805[7]
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1811 = data
  i1810.index = i1811[0]
  i1810.advance = i1811[1]
  i1810.bearing = i1811[2]
  i1810.glyphWidth = i1811[3]
  i1810.glyphHeight = i1811[4]
  i1810.minX = i1811[5]
  i1810.maxX = i1811[6]
  i1810.minY = i1811[7]
  i1810.maxY = i1811[8]
  i1810.uvBottomLeftX = i1811[9]
  i1810.uvBottomLeftY = i1811[10]
  i1810.uvBottomRightX = i1811[11]
  i1810.uvBottomRightY = i1811[12]
  i1810.uvTopLeftX = i1811[13]
  i1810.uvTopLeftY = i1811[14]
  i1810.uvTopRightX = i1811[15]
  i1810.uvTopRightY = i1811[16]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1813 = data
  i1812.name = i1813[0]
  i1812.bytes64 = i1813[1]
  i1812.data = i1813[2]
  return i1812
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1814 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1815 = data
  var i1817 = i1815[0]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 2) {
  request.r(i1817[i + 0], i1817[i + 1], 2, i1816, '')
  }
  i1814.atlasAssets = i1816
  i1814.scale = i1815[1]
  request.r(i1815[2], i1815[3], 0, i1814, 'skeletonJSON')
  i1814.isUpgradingBlendModeMaterials = !!i1815[4]
  i1814.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1815[5], i1814.blendModeMaterials)
  var i1819 = i1815[6]
  var i1818 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1819.length; i += 2) {
  request.r(i1819[i + 0], i1819[i + 1], 1, i1818, '')
  }
  i1814.skeletonDataModifiers = i1818
  var i1821 = i1815[7]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( i1821[i + 0] );
  }
  i1814.fromAnimation = i1820
  var i1823 = i1815[8]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( i1823[i + 0] );
  }
  i1814.toAnimation = i1822
  i1814.duration = i1815[9]
  i1814.defaultMix = i1815[10]
  request.r(i1815[11], i1815[12], 0, i1814, 'controller')
  return i1814
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1826 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1827 = data
  i1826.applyAdditiveMaterial = !!i1827[0]
  var i1829 = i1827[1]
  var i1828 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1829[i + 0]));
  }
  i1826.additiveMaterials = i1828
  var i1831 = i1827[2]
  var i1830 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1831[i + 0]));
  }
  i1826.multiplyMaterials = i1830
  var i1833 = i1827[3]
  var i1832 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1833[i + 0]));
  }
  i1826.screenMaterials = i1832
  i1826.requiresBlendModeMaterials = !!i1827[4]
  return i1826
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1836 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1837 = data
  i1836.pageName = i1837[0]
  request.r(i1837[1], i1837[2], 0, i1836, 'material')
  return i1836
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1840 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1841 = data
  request.r(i1841[0], i1841[1], 0, i1840, 'atlasFile')
  var i1843 = i1841[2]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 2) {
  request.r(i1843[i + 0], i1843[i + 1], 2, i1842, '')
  }
  i1840.materials = i1842
  i1840.textureLoadingMode = i1841[3]
  request.r(i1841[4], i1841[5], 0, i1840, 'onDemandTextureLoader')
  return i1840
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1844 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1845 = data
  i1844.hashCode = i1845[0]
  request.r(i1845[1], i1845[2], 0, i1844, 'material')
  i1844.materialHashCode = i1845[3]
  request.r(i1845[4], i1845[5], 0, i1844, 'atlas')
  i1844.normalStyle = i1845[6]
  i1844.normalSpacingOffset = i1845[7]
  i1844.boldStyle = i1845[8]
  i1844.boldSpacing = i1845[9]
  i1844.italicStyle = i1845[10]
  i1844.tabSize = i1845[11]
  i1844.m_Version = i1845[12]
  i1844.m_SourceFontFileGUID = i1845[13]
  request.r(i1845[14], i1845[15], 0, i1844, 'm_SourceFontFile_EditorRef')
  request.r(i1845[16], i1845[17], 0, i1844, 'm_SourceFontFile')
  i1844.m_AtlasPopulationMode = i1845[18]
  i1844.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1845[19], i1844.m_FaceInfo)
  var i1847 = i1845[20]
  var i1846 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.add(request.d('UnityEngine.TextCore.Glyph', i1847[i + 0]));
  }
  i1844.m_GlyphTable = i1846
  var i1849 = i1845[21]
  var i1848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.add(request.d('TMPro.TMP_Character', i1849[i + 0]));
  }
  i1844.m_CharacterTable = i1848
  var i1851 = i1845[22]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 2) {
  request.r(i1851[i + 0], i1851[i + 1], 2, i1850, '')
  }
  i1844.m_AtlasTextures = i1850
  i1844.m_AtlasTextureIndex = i1845[23]
  i1844.m_IsMultiAtlasTexturesEnabled = !!i1845[24]
  i1844.m_ClearDynamicDataOnBuild = !!i1845[25]
  var i1853 = i1845[26]
  var i1852 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.add(request.d('UnityEngine.TextCore.GlyphRect', i1853[i + 0]));
  }
  i1844.m_UsedGlyphRects = i1852
  var i1855 = i1845[27]
  var i1854 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.add(request.d('UnityEngine.TextCore.GlyphRect', i1855[i + 0]));
  }
  i1844.m_FreeGlyphRects = i1854
  i1844.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1845[28], i1844.m_fontInfo)
  i1844.m_AtlasWidth = i1845[29]
  i1844.m_AtlasHeight = i1845[30]
  i1844.m_AtlasPadding = i1845[31]
  i1844.m_AtlasRenderMode = i1845[32]
  var i1857 = i1845[33]
  var i1856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.add(request.d('TMPro.TMP_Glyph', i1857[i + 0]));
  }
  i1844.m_glyphInfoList = i1856
  i1844.m_KerningTable = request.d('TMPro.KerningTable', i1845[34], i1844.m_KerningTable)
  i1844.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1845[35], i1844.m_FontFeatureTable)
  var i1859 = i1845[36]
  var i1858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1859.length; i += 2) {
  request.r(i1859[i + 0], i1859[i + 1], 1, i1858, '')
  }
  i1844.fallbackFontAssets = i1858
  var i1861 = i1845[37]
  var i1860 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1861.length; i += 2) {
  request.r(i1861[i + 0], i1861[i + 1], 1, i1860, '')
  }
  i1844.m_FallbackFontAssetTable = i1860
  i1844.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1845[38], i1844.m_CreationSettings)
  var i1863 = i1845[39]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('TMPro.TMP_FontWeightPair', i1863[i + 0]) );
  }
  i1844.m_FontWeightTable = i1862
  var i1865 = i1845[40]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( request.d('TMPro.TMP_FontWeightPair', i1865[i + 0]) );
  }
  i1844.fontWeights = i1864
  return i1844
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1866 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1867 = data
  i1866.m_FaceIndex = i1867[0]
  i1866.m_FamilyName = i1867[1]
  i1866.m_StyleName = i1867[2]
  i1866.m_PointSize = i1867[3]
  i1866.m_Scale = i1867[4]
  i1866.m_UnitsPerEM = i1867[5]
  i1866.m_LineHeight = i1867[6]
  i1866.m_AscentLine = i1867[7]
  i1866.m_CapLine = i1867[8]
  i1866.m_MeanLine = i1867[9]
  i1866.m_Baseline = i1867[10]
  i1866.m_DescentLine = i1867[11]
  i1866.m_SuperscriptOffset = i1867[12]
  i1866.m_SuperscriptSize = i1867[13]
  i1866.m_SubscriptOffset = i1867[14]
  i1866.m_SubscriptSize = i1867[15]
  i1866.m_UnderlineOffset = i1867[16]
  i1866.m_UnderlineThickness = i1867[17]
  i1866.m_StrikethroughOffset = i1867[18]
  i1866.m_StrikethroughThickness = i1867[19]
  i1866.m_TabWidth = i1867[20]
  return i1866
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1870 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1871 = data
  i1870.m_Index = i1871[0]
  i1870.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1871[1], i1870.m_Metrics)
  i1870.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1871[2], i1870.m_GlyphRect)
  i1870.m_Scale = i1871[3]
  i1870.m_AtlasIndex = i1871[4]
  i1870.m_ClassDefinitionType = i1871[5]
  return i1870
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1872 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1873 = data
  i1872.m_Width = i1873[0]
  i1872.m_Height = i1873[1]
  i1872.m_HorizontalBearingX = i1873[2]
  i1872.m_HorizontalBearingY = i1873[3]
  i1872.m_HorizontalAdvance = i1873[4]
  return i1872
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1874 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1875 = data
  i1874.m_X = i1875[0]
  i1874.m_Y = i1875[1]
  i1874.m_Width = i1875[2]
  i1874.m_Height = i1875[3]
  return i1874
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1878 = root || request.c( 'TMPro.TMP_Character' )
  var i1879 = data
  i1878.m_ElementType = i1879[0]
  i1878.m_Unicode = i1879[1]
  i1878.m_GlyphIndex = i1879[2]
  i1878.m_Scale = i1879[3]
  return i1878
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1884 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1885 = data
  i1884.Name = i1885[0]
  i1884.PointSize = i1885[1]
  i1884.Scale = i1885[2]
  i1884.CharacterCount = i1885[3]
  i1884.LineHeight = i1885[4]
  i1884.Baseline = i1885[5]
  i1884.Ascender = i1885[6]
  i1884.CapHeight = i1885[7]
  i1884.Descender = i1885[8]
  i1884.CenterLine = i1885[9]
  i1884.SuperscriptOffset = i1885[10]
  i1884.SubscriptOffset = i1885[11]
  i1884.SubSize = i1885[12]
  i1884.Underline = i1885[13]
  i1884.UnderlineThickness = i1885[14]
  i1884.strikethrough = i1885[15]
  i1884.strikethroughThickness = i1885[16]
  i1884.TabWidth = i1885[17]
  i1884.Padding = i1885[18]
  i1884.AtlasWidth = i1885[19]
  i1884.AtlasHeight = i1885[20]
  return i1884
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1888 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1889 = data
  i1888.id = i1889[0]
  i1888.x = i1889[1]
  i1888.y = i1889[2]
  i1888.width = i1889[3]
  i1888.height = i1889[4]
  i1888.xOffset = i1889[5]
  i1888.yOffset = i1889[6]
  i1888.xAdvance = i1889[7]
  i1888.scale = i1889[8]
  return i1888
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1890 = root || request.c( 'TMPro.KerningTable' )
  var i1891 = data
  var i1893 = i1891[0]
  var i1892 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.add(request.d('TMPro.KerningPair', i1893[i + 0]));
  }
  i1890.kerningPairs = i1892
  return i1890
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1896 = root || request.c( 'TMPro.KerningPair' )
  var i1897 = data
  i1896.xOffset = i1897[0]
  i1896.m_FirstGlyph = i1897[1]
  i1896.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1897[2], i1896.m_FirstGlyphAdjustments)
  i1896.m_SecondGlyph = i1897[3]
  i1896.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1897[4], i1896.m_SecondGlyphAdjustments)
  i1896.m_IgnoreSpacingAdjustments = !!i1897[5]
  return i1896
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1898 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1899 = data
  var i1901 = i1899[0]
  var i1900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1901[i + 0]));
  }
  i1898.m_GlyphPairAdjustmentRecords = i1900
  return i1898
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1904 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1905 = data
  i1904.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1905[0], i1904.m_FirstAdjustmentRecord)
  i1904.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1905[1], i1904.m_SecondAdjustmentRecord)
  i1904.m_FeatureLookupFlags = i1905[2]
  return i1904
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1908 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1909 = data
  i1908.sourceFontFileName = i1909[0]
  i1908.sourceFontFileGUID = i1909[1]
  i1908.pointSizeSamplingMode = i1909[2]
  i1908.pointSize = i1909[3]
  i1908.padding = i1909[4]
  i1908.packingMode = i1909[5]
  i1908.atlasWidth = i1909[6]
  i1908.atlasHeight = i1909[7]
  i1908.characterSetSelectionMode = i1909[8]
  i1908.characterSequence = i1909[9]
  i1908.referencedFontAssetGUID = i1909[10]
  i1908.referencedTextAssetGUID = i1909[11]
  i1908.fontStyle = i1909[12]
  i1908.fontStyleModifier = i1909[13]
  i1908.renderMode = i1909[14]
  i1908.includeFontFeatures = !!i1909[15]
  return i1908
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1912 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1913 = data
  request.r(i1913[0], i1913[1], 0, i1912, 'regularTypeface')
  request.r(i1913[2], i1913[3], 0, i1912, 'italicTypeface')
  return i1912
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1914 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1915 = data
  i1914.useSafeMode = !!i1915[0]
  i1914.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1915[1], i1914.safeModeOptions)
  i1914.timeScale = i1915[2]
  i1914.unscaledTimeScale = i1915[3]
  i1914.useSmoothDeltaTime = !!i1915[4]
  i1914.maxSmoothUnscaledTime = i1915[5]
  i1914.rewindCallbackMode = i1915[6]
  i1914.showUnityEditorReport = !!i1915[7]
  i1914.logBehaviour = i1915[8]
  i1914.drawGizmos = !!i1915[9]
  i1914.defaultRecyclable = !!i1915[10]
  i1914.defaultAutoPlay = i1915[11]
  i1914.defaultUpdateType = i1915[12]
  i1914.defaultTimeScaleIndependent = !!i1915[13]
  i1914.defaultEaseType = i1915[14]
  i1914.defaultEaseOvershootOrAmplitude = i1915[15]
  i1914.defaultEasePeriod = i1915[16]
  i1914.defaultAutoKill = !!i1915[17]
  i1914.defaultLoopType = i1915[18]
  i1914.debugMode = !!i1915[19]
  i1914.debugStoreTargetId = !!i1915[20]
  i1914.showPreviewPanel = !!i1915[21]
  i1914.storeSettingsLocation = i1915[22]
  i1914.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1915[23], i1914.modules)
  i1914.createASMDEF = !!i1915[24]
  i1914.showPlayingTweens = !!i1915[25]
  i1914.showPausedTweens = !!i1915[26]
  return i1914
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1916 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1917 = data
  i1916.logBehaviour = i1917[0]
  i1916.nestedTweenFailureBehaviour = i1917[1]
  return i1916
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1918 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1919 = data
  i1918.showPanel = !!i1919[0]
  i1918.audioEnabled = !!i1919[1]
  i1918.physicsEnabled = !!i1919[2]
  i1918.physics2DEnabled = !!i1919[3]
  i1918.spriteEnabled = !!i1919[4]
  i1918.uiEnabled = !!i1919[5]
  i1918.textMeshProEnabled = !!i1919[6]
  i1918.tk2DEnabled = !!i1919[7]
  i1918.deAudioEnabled = !!i1919[8]
  i1918.deUnityExtendedEnabled = !!i1919[9]
  i1918.epoOutlineEnabled = !!i1919[10]
  return i1918
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1920 = root || request.c( 'TMPro.TMP_Settings' )
  var i1921 = data
  i1920.m_enableWordWrapping = !!i1921[0]
  i1920.m_enableKerning = !!i1921[1]
  i1920.m_enableExtraPadding = !!i1921[2]
  i1920.m_enableTintAllSprites = !!i1921[3]
  i1920.m_enableParseEscapeCharacters = !!i1921[4]
  i1920.m_EnableRaycastTarget = !!i1921[5]
  i1920.m_GetFontFeaturesAtRuntime = !!i1921[6]
  i1920.m_missingGlyphCharacter = i1921[7]
  i1920.m_warningsDisabled = !!i1921[8]
  request.r(i1921[9], i1921[10], 0, i1920, 'm_defaultFontAsset')
  i1920.m_defaultFontAssetPath = i1921[11]
  i1920.m_defaultFontSize = i1921[12]
  i1920.m_defaultAutoSizeMinRatio = i1921[13]
  i1920.m_defaultAutoSizeMaxRatio = i1921[14]
  i1920.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1921[15], i1921[16] )
  i1920.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1921[17], i1921[18] )
  i1920.m_autoSizeTextContainer = !!i1921[19]
  i1920.m_IsTextObjectScaleStatic = !!i1921[20]
  var i1923 = i1921[21]
  var i1922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1923.length; i += 2) {
  request.r(i1923[i + 0], i1923[i + 1], 1, i1922, '')
  }
  i1920.m_fallbackFontAssets = i1922
  i1920.m_matchMaterialPreset = !!i1921[22]
  request.r(i1921[23], i1921[24], 0, i1920, 'm_defaultSpriteAsset')
  i1920.m_defaultSpriteAssetPath = i1921[25]
  i1920.m_enableEmojiSupport = !!i1921[26]
  i1920.m_MissingCharacterSpriteUnicode = i1921[27]
  i1920.m_defaultColorGradientPresetsPath = i1921[28]
  request.r(i1921[29], i1921[30], 0, i1920, 'm_defaultStyleSheet')
  i1920.m_StyleSheetsResourcePath = i1921[31]
  request.r(i1921[32], i1921[33], 0, i1920, 'm_leadingCharacters')
  request.r(i1921[34], i1921[35], 0, i1920, 'm_followingCharacters')
  i1920.m_UseModernHangulLineBreakingRules = !!i1921[36]
  return i1920
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

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1928 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1929 = data
  i1928.hashCode = i1929[0]
  request.r(i1929[1], i1929[2], 0, i1928, 'material')
  i1928.materialHashCode = i1929[3]
  request.r(i1929[4], i1929[5], 0, i1928, 'spriteSheet')
  var i1931 = i1929[6]
  var i1930 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.add(request.d('TMPro.TMP_Sprite', i1931[i + 0]));
  }
  i1928.spriteInfoList = i1930
  var i1933 = i1929[7]
  var i1932 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1933.length; i += 2) {
  request.r(i1933[i + 0], i1933[i + 1], 1, i1932, '')
  }
  i1928.fallbackSpriteAssets = i1932
  i1928.m_Version = i1929[8]
  i1928.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1929[9], i1928.m_FaceInfo)
  var i1935 = i1929[10]
  var i1934 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.add(request.d('TMPro.TMP_SpriteCharacter', i1935[i + 0]));
  }
  i1928.m_SpriteCharacterTable = i1934
  var i1937 = i1929[11]
  var i1936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1937.length; i += 1) {
    i1936.add(request.d('TMPro.TMP_SpriteGlyph', i1937[i + 0]));
  }
  i1928.m_SpriteGlyphTable = i1936
  return i1928
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1940 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1941 = data
  i1940.name = i1941[0]
  i1940.hashCode = i1941[1]
  i1940.unicode = i1941[2]
  i1940.pivot = new pc.Vec2( i1941[3], i1941[4] )
  request.r(i1941[5], i1941[6], 0, i1940, 'sprite')
  i1940.id = i1941[7]
  i1940.x = i1941[8]
  i1940.y = i1941[9]
  i1940.width = i1941[10]
  i1940.height = i1941[11]
  i1940.xOffset = i1941[12]
  i1940.yOffset = i1941[13]
  i1940.xAdvance = i1941[14]
  i1940.scale = i1941[15]
  return i1940
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1946 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1947 = data
  i1946.m_Name = i1947[0]
  i1946.m_HashCode = i1947[1]
  i1946.m_ElementType = i1947[2]
  i1946.m_Unicode = i1947[3]
  i1946.m_GlyphIndex = i1947[4]
  i1946.m_Scale = i1947[5]
  return i1946
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1950 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1951 = data
  request.r(i1951[0], i1951[1], 0, i1950, 'sprite')
  i1950.m_Index = i1951[2]
  i1950.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1951[3], i1950.m_Metrics)
  i1950.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1951[4], i1950.m_GlyphRect)
  i1950.m_Scale = i1951[5]
  i1950.m_AtlasIndex = i1951[6]
  i1950.m_ClassDefinitionType = i1951[7]
  return i1950
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1952 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1953 = data
  var i1955 = i1953[0]
  var i1954 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1955.length; i += 1) {
    i1954.add(request.d('TMPro.TMP_Style', i1955[i + 0]));
  }
  i1952.m_StyleList = i1954
  return i1952
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1958 = root || request.c( 'TMPro.TMP_Style' )
  var i1959 = data
  i1958.m_Name = i1959[0]
  i1958.m_HashCode = i1959[1]
  i1958.m_OpeningDefinition = i1959[2]
  i1958.m_ClosingDefinition = i1959[3]
  i1958.m_OpeningTagArray = i1959[4]
  i1958.m_ClosingTagArray = i1959[5]
  i1958.m_OpeningTagUnicodeArray = i1959[6]
  i1958.m_ClosingTagUnicodeArray = i1959[7]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1961 = data
  var i1963 = i1961[0]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1963[i + 0]) );
  }
  i1960.files = i1962
  i1960.componentToPrefabIds = i1961[1]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1967 = data
  i1966.path = i1967[0]
  request.r(i1967[1], i1967[2], 0, i1966, 'unityObject')
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1969 = data
  var i1971 = i1969[0]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1971[i + 0]) );
  }
  i1968.scriptsExecutionOrder = i1970
  var i1973 = i1969[1]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1973[i + 0]) );
  }
  i1968.sortingLayers = i1972
  var i1975 = i1969[2]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1975[i + 0]) );
  }
  i1968.cullingLayers = i1974
  i1968.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1969[3], i1968.timeSettings)
  i1968.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1969[4], i1968.physicsSettings)
  i1968.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1969[5], i1968.physics2DSettings)
  i1968.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1969[6], i1968.qualitySettings)
  i1968.enableRealtimeShadows = !!i1969[7]
  i1968.enableAutoInstancing = !!i1969[8]
  i1968.enableDynamicBatching = !!i1969[9]
  i1968.lightmapEncodingQuality = i1969[10]
  i1968.desiredColorSpace = i1969[11]
  var i1977 = i1969[12]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.push( i1977[i + 0] );
  }
  i1968.allTags = i1976
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1981 = data
  i1980.name = i1981[0]
  i1980.value = i1981[1]
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1985 = data
  i1984.id = i1985[0]
  i1984.name = i1985[1]
  i1984.value = i1985[2]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1989 = data
  i1988.id = i1989[0]
  i1988.name = i1989[1]
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1991 = data
  i1990.fixedDeltaTime = i1991[0]
  i1990.maximumDeltaTime = i1991[1]
  i1990.timeScale = i1991[2]
  i1990.maximumParticleTimestep = i1991[3]
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1993 = data
  i1992.gravity = new pc.Vec3( i1993[0], i1993[1], i1993[2] )
  i1992.defaultSolverIterations = i1993[3]
  i1992.bounceThreshold = i1993[4]
  i1992.autoSyncTransforms = !!i1993[5]
  i1992.autoSimulation = !!i1993[6]
  var i1995 = i1993[7]
  var i1994 = []
  for(var i = 0; i < i1995.length; i += 1) {
    i1994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1995[i + 0]) );
  }
  i1992.collisionMatrix = i1994
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1999 = data
  i1998.enabled = !!i1999[0]
  i1998.layerId = i1999[1]
  i1998.otherLayerId = i1999[2]
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2001 = data
  request.r(i2001[0], i2001[1], 0, i2000, 'material')
  i2000.gravity = new pc.Vec2( i2001[2], i2001[3] )
  i2000.positionIterations = i2001[4]
  i2000.velocityIterations = i2001[5]
  i2000.velocityThreshold = i2001[6]
  i2000.maxLinearCorrection = i2001[7]
  i2000.maxAngularCorrection = i2001[8]
  i2000.maxTranslationSpeed = i2001[9]
  i2000.maxRotationSpeed = i2001[10]
  i2000.baumgarteScale = i2001[11]
  i2000.baumgarteTOIScale = i2001[12]
  i2000.timeToSleep = i2001[13]
  i2000.linearSleepTolerance = i2001[14]
  i2000.angularSleepTolerance = i2001[15]
  i2000.defaultContactOffset = i2001[16]
  i2000.autoSimulation = !!i2001[17]
  i2000.queriesHitTriggers = !!i2001[18]
  i2000.queriesStartInColliders = !!i2001[19]
  i2000.callbacksOnDisable = !!i2001[20]
  i2000.reuseCollisionCallbacks = !!i2001[21]
  i2000.autoSyncTransforms = !!i2001[22]
  var i2003 = i2001[23]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2003[i + 0]) );
  }
  i2000.collisionMatrix = i2002
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2007 = data
  i2006.enabled = !!i2007[0]
  i2006.layerId = i2007[1]
  i2006.otherLayerId = i2007[2]
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2009 = data
  var i2011 = i2009[0]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2011[i + 0]) );
  }
  i2008.qualityLevels = i2010
  var i2013 = i2009[1]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 1) {
    i2012.push( i2013[i + 0] );
  }
  i2008.names = i2012
  i2008.shadows = i2009[2]
  i2008.anisotropicFiltering = i2009[3]
  i2008.antiAliasing = i2009[4]
  i2008.lodBias = i2009[5]
  i2008.shadowCascades = i2009[6]
  i2008.shadowDistance = i2009[7]
  i2008.shadowmaskMode = i2009[8]
  i2008.shadowProjection = i2009[9]
  i2008.shadowResolution = i2009[10]
  i2008.softParticles = !!i2009[11]
  i2008.softVegetation = !!i2009[12]
  i2008.activeColorSpace = i2009[13]
  i2008.desiredColorSpace = i2009[14]
  i2008.masterTextureLimit = i2009[15]
  i2008.maxQueuedFrames = i2009[16]
  i2008.particleRaycastBudget = i2009[17]
  i2008.pixelLightCount = i2009[18]
  i2008.realtimeReflectionProbes = !!i2009[19]
  i2008.shadowCascade2Split = i2009[20]
  i2008.shadowCascade4Split = new pc.Vec3( i2009[21], i2009[22], i2009[23] )
  i2008.streamingMipmapsActive = !!i2009[24]
  i2008.vSyncCount = i2009[25]
  i2008.asyncUploadBufferSize = i2009[26]
  i2008.asyncUploadTimeSlice = i2009[27]
  i2008.billboardsFaceCameraPosition = !!i2009[28]
  i2008.shadowNearPlaneOffset = i2009[29]
  i2008.streamingMipmapsMemoryBudget = i2009[30]
  i2008.maximumLODLevel = i2009[31]
  i2008.streamingMipmapsAddAllCameras = !!i2009[32]
  i2008.streamingMipmapsMaxLevelReduction = i2009[33]
  i2008.streamingMipmapsRenderersPerFrame = i2009[34]
  i2008.resolutionScalingFixedDPIFactor = i2009[35]
  i2008.streamingMipmapsMaxFileIORequests = i2009[36]
  i2008.currentQualityLevel = i2009[37]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2019 = data
  i2018.weight = i2019[0]
  i2018.vertices = i2019[1]
  i2018.normals = i2019[2]
  i2018.tangents = i2019[3]
  return i2018
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2020 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2021 = data
  request.r(i2021[0], i2021[1], 0, i2020, 'm_ObjectArgument')
  i2020.m_ObjectArgumentAssemblyTypeName = i2021[2]
  i2020.m_IntArgument = i2021[3]
  i2020.m_FloatArgument = i2021[4]
  i2020.m_StringArgument = i2021[5]
  i2020.m_BoolArgument = !!i2021[6]
  return i2020
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2022 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2023 = data
  i2022.xPlacement = i2023[0]
  i2022.yPlacement = i2023[1]
  i2022.xAdvance = i2023[2]
  i2022.yAdvance = i2023[3]
  return i2022
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[3],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[3],"79":[25],"80":[81],"82":[81],"9":[8],"83":[84],"85":[86],"87":[84],"88":[8],"89":[8],"11":[9],"18":[19,8],"90":[8],"10":[9],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"96":[8],"97":[8],"36":[8],"98":[8],"16":[19,8],"99":[8],"100":[8],"101":[8],"102":[8],"103":[19,8],"104":[8],"105":[6],"106":[6],"7":[6],"107":[6],"108":[3],"109":[3],"110":[111],"112":[3],"113":[114],"115":[8],"116":[19,8],"27":[25],"34":[19,8],"117":[118,25],"119":[25],"120":[25,29],"121":[57],"122":[65],"123":[114],"124":[125],"126":[8],"127":[25,8],"17":[8,19],"128":[8],"129":[19,8],"130":[25],"131":[19,8],"132":[8],"133":[84]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.BoxCollider2D","DropZone","UnityEngine.Sprite","UnityEngine.MeshRenderer","UnityEngine.Material","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","UnityEngine.MeshFilter","UnityEngine.Mesh","DraggableItem","UnityEngine.CanvasGroup","TMPro.TMP_FontAsset","Spine.Unity.SkeletonGraphic","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","IQFill","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "1.1";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "APG_V05_TrangHT_AnhPD";

Deserializers.lunaAppID = "29138";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1715";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4653";

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

Deserializers.buildID = "2384b2dd-f983-453e-a700-fca0d37c108c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

