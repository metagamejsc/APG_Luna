var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1554 = root || request.c( 'UnityEngine.JointSpring' )
  var i1555 = data
  i1554.spring = i1555[0]
  i1554.damper = i1555[1]
  i1554.targetPosition = i1555[2]
  return i1554
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1556 = root || request.c( 'UnityEngine.JointMotor' )
  var i1557 = data
  i1556.m_TargetVelocity = i1557[0]
  i1556.m_Force = i1557[1]
  i1556.m_FreeSpin = i1557[2]
  return i1556
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1558 = root || request.c( 'UnityEngine.JointLimits' )
  var i1559 = data
  i1558.m_Min = i1559[0]
  i1558.m_Max = i1559[1]
  i1558.m_Bounciness = i1559[2]
  i1558.m_BounceMinVelocity = i1559[3]
  i1558.m_ContactDistance = i1559[4]
  i1558.minBounce = i1559[5]
  i1558.maxBounce = i1559[6]
  return i1558
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1560 = root || request.c( 'UnityEngine.JointDrive' )
  var i1561 = data
  i1560.m_PositionSpring = i1561[0]
  i1560.m_PositionDamper = i1561[1]
  i1560.m_MaximumForce = i1561[2]
  i1560.m_UseAcceleration = i1561[3]
  return i1560
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1562 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1563 = data
  i1562.m_Spring = i1563[0]
  i1562.m_Damper = i1563[1]
  return i1562
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1564 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1565 = data
  i1564.m_Limit = i1565[0]
  i1564.m_Bounciness = i1565[1]
  i1564.m_ContactDistance = i1565[2]
  return i1564
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1566 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1567 = data
  i1566.m_ExtremumSlip = i1567[0]
  i1566.m_ExtremumValue = i1567[1]
  i1566.m_AsymptoteSlip = i1567[2]
  i1566.m_AsymptoteValue = i1567[3]
  i1566.m_Stiffness = i1567[4]
  return i1566
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1568 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1569 = data
  i1568.m_LowerAngle = i1569[0]
  i1568.m_UpperAngle = i1569[1]
  return i1568
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1570 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1571 = data
  i1570.m_MotorSpeed = i1571[0]
  i1570.m_MaximumMotorTorque = i1571[1]
  return i1570
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1572 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1573 = data
  i1572.m_DampingRatio = i1573[0]
  i1572.m_Frequency = i1573[1]
  i1572.m_Angle = i1573[2]
  return i1572
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1574 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1575 = data
  i1574.m_LowerTranslation = i1575[0]
  i1574.m_UpperTranslation = i1575[1]
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1577 = data
  i1576.name = i1577[0]
  i1576.width = i1577[1]
  i1576.height = i1577[2]
  i1576.mipmapCount = i1577[3]
  i1576.anisoLevel = i1577[4]
  i1576.filterMode = i1577[5]
  i1576.hdr = !!i1577[6]
  i1576.format = i1577[7]
  i1576.wrapMode = i1577[8]
  i1576.alphaIsTransparency = !!i1577[9]
  i1576.alphaSource = i1577[10]
  i1576.graphicsFormat = i1577[11]
  i1576.sRGBTexture = !!i1577[12]
  i1576.desiredColorSpace = i1577[13]
  i1576.wrapU = i1577[14]
  i1576.wrapV = i1577[15]
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1578 = root || new pc.UnityMaterial()
  var i1579 = data
  i1578.name = i1579[0]
  request.r(i1579[1], i1579[2], 0, i1578, 'shader')
  i1578.renderQueue = i1579[3]
  i1578.enableInstancing = !!i1579[4]
  var i1581 = i1579[5]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1581[i + 0]) );
  }
  i1578.floatParameters = i1580
  var i1583 = i1579[6]
  var i1582 = []
  for(var i = 0; i < i1583.length; i += 1) {
    i1582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1583[i + 0]) );
  }
  i1578.colorParameters = i1582
  var i1585 = i1579[7]
  var i1584 = []
  for(var i = 0; i < i1585.length; i += 1) {
    i1584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1585[i + 0]) );
  }
  i1578.vectorParameters = i1584
  var i1587 = i1579[8]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1587[i + 0]) );
  }
  i1578.textureParameters = i1586
  var i1589 = i1579[9]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1589[i + 0]) );
  }
  i1578.materialFlags = i1588
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1593 = data
  i1592.name = i1593[0]
  i1592.value = i1593[1]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1597 = data
  i1596.name = i1597[0]
  i1596.value = new pc.Color(i1597[1], i1597[2], i1597[3], i1597[4])
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1601 = data
  i1600.name = i1601[0]
  i1600.value = new pc.Vec4( i1601[1], i1601[2], i1601[3], i1601[4] )
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1605 = data
  i1604.name = i1605[0]
  request.r(i1605[1], i1605[2], 0, i1604, 'value')
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1609 = data
  i1608.name = i1609[0]
  i1608.enabled = !!i1609[1]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1611 = data
  i1610.name = i1611[0]
  i1610.index = i1611[1]
  i1610.startup = !!i1611[2]
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1613 = data
  i1612.position = new pc.Vec3( i1613[0], i1613[1], i1613[2] )
  i1612.scale = new pc.Vec3( i1613[3], i1613[4], i1613[5] )
  i1612.rotation = new pc.Quat(i1613[6], i1613[7], i1613[8], i1613[9])
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1615 = data
  i1614.aspect = i1615[0]
  i1614.orthographic = !!i1615[1]
  i1614.orthographicSize = i1615[2]
  i1614.backgroundColor = new pc.Color(i1615[3], i1615[4], i1615[5], i1615[6])
  i1614.nearClipPlane = i1615[7]
  i1614.farClipPlane = i1615[8]
  i1614.fieldOfView = i1615[9]
  i1614.depth = i1615[10]
  i1614.clearFlags = i1615[11]
  i1614.cullingMask = i1615[12]
  i1614.rect = i1615[13]
  request.r(i1615[14], i1615[15], 0, i1614, 'targetTexture')
  i1614.usePhysicalProperties = !!i1615[16]
  i1614.focalLength = i1615[17]
  i1614.sensorSize = new pc.Vec2( i1615[18], i1615[19] )
  i1614.lensShift = new pc.Vec2( i1615[20], i1615[21] )
  i1614.gateFit = i1615[22]
  i1614.commandBufferCount = i1615[23]
  i1614.cameraType = i1615[24]
  i1614.enabled = !!i1615[25]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1617 = data
  i1616.name = i1617[0]
  i1616.tagId = i1617[1]
  i1616.enabled = !!i1617[2]
  i1616.isStatic = !!i1617[3]
  i1616.layer = i1617[4]
  return i1616
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1619 = data
  request.r(i1619[0], i1619[1], 0, i1618, 'm_FirstSelected')
  i1618.m_sendNavigationEvents = !!i1619[2]
  i1618.m_DragThreshold = i1619[3]
  return i1618
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1620 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1621 = data
  i1620.m_HorizontalAxis = i1621[0]
  i1620.m_VerticalAxis = i1621[1]
  i1620.m_SubmitButton = i1621[2]
  i1620.m_CancelButton = i1621[3]
  i1620.m_InputActionsPerSecond = i1621[4]
  i1620.m_RepeatDelay = i1621[5]
  i1620.m_ForceModuleActive = !!i1621[6]
  i1620.m_SendPointerHoverToParent = !!i1621[7]
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1623 = data
  i1622.pivot = new pc.Vec2( i1623[0], i1623[1] )
  i1622.anchorMin = new pc.Vec2( i1623[2], i1623[3] )
  i1622.anchorMax = new pc.Vec2( i1623[4], i1623[5] )
  i1622.sizeDelta = new pc.Vec2( i1623[6], i1623[7] )
  i1622.anchoredPosition3D = new pc.Vec3( i1623[8], i1623[9], i1623[10] )
  i1622.rotation = new pc.Quat(i1623[11], i1623[12], i1623[13], i1623[14])
  i1622.scale = new pc.Vec3( i1623[15], i1623[16], i1623[17] )
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1625 = data
  i1624.planeDistance = i1625[0]
  i1624.referencePixelsPerUnit = i1625[1]
  i1624.isFallbackOverlay = !!i1625[2]
  i1624.renderMode = i1625[3]
  i1624.renderOrder = i1625[4]
  i1624.sortingLayerName = i1625[5]
  i1624.sortingOrder = i1625[6]
  i1624.scaleFactor = i1625[7]
  request.r(i1625[8], i1625[9], 0, i1624, 'worldCamera')
  i1624.overrideSorting = !!i1625[10]
  i1624.pixelPerfect = !!i1625[11]
  i1624.targetDisplay = i1625[12]
  i1624.overridePixelPerfect = !!i1625[13]
  i1624.enabled = !!i1625[14]
  return i1624
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1627 = data
  i1626.m_UiScaleMode = i1627[0]
  i1626.m_ReferencePixelsPerUnit = i1627[1]
  i1626.m_ScaleFactor = i1627[2]
  i1626.m_ReferenceResolution = new pc.Vec2( i1627[3], i1627[4] )
  i1626.m_ScreenMatchMode = i1627[5]
  i1626.m_MatchWidthOrHeight = i1627[6]
  i1626.m_PhysicalUnit = i1627[7]
  i1626.m_FallbackScreenDPI = i1627[8]
  i1626.m_DefaultSpriteDPI = i1627[9]
  i1626.m_DynamicPixelsPerUnit = i1627[10]
  i1626.m_PresetInfoIsWorld = !!i1627[11]
  return i1626
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1629 = data
  i1628.m_IgnoreReversedGraphics = !!i1629[0]
  i1628.m_BlockingObjects = i1629[1]
  i1628.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1629[2] )
  return i1628
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1630 = root || request.c( 'LunaManager' )
  var i1631 = data
  var i1633 = i1631[0]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 2) {
  request.r(i1633[i + 0], i1633[i + 1], 2, i1632, '')
  }
  i1630.lstBtnInstall = i1632
  request.r(i1631[1], i1631[2], 0, i1630, 'WinGO')
  request.r(i1631[3], i1631[4], 0, i1630, 'LoseGO')
  request.r(i1631[5], i1631[6], 0, i1630, 'StartCard')
  request.r(i1631[7], i1631[8], 0, i1630, 'EndCard')
  request.r(i1631[9], i1631[10], 0, i1630, 'Parent')
  i1630.isDrag = !!i1631[11]
  i1630.timeDrag = i1631[12]
  i1630.countPlay = i1631[13]
  i1630.countPlayFinal = i1631[14]
  i1630.countPlayMax = i1631[15]
  i1630.timeDropFinal = i1631[16]
  i1630.colorBG = new pc.Color(i1631[17], i1631[18], i1631[19], i1631[20])
  request.r(i1631[21], i1631[22], 0, i1630, 'texture2D')
  request.r(i1631[23], i1631[24], 0, i1630, 'rawImageBG')
  request.r(i1631[25], i1631[26], 0, i1630, 'MSSGirl')
  request.r(i1631[27], i1631[28], 0, i1630, 'MSSBoy')
  request.r(i1631[29], i1631[30], 0, i1630, 'MSSGroom')
  request.r(i1631[31], i1631[32], 0, i1630, 'MSSBride')
  request.r(i1631[33], i1631[34], 0, i1630, 'textProgess')
  request.r(i1631[35], i1631[36], 0, i1630, 'imgProgess')
  request.r(i1631[37], i1631[38], 0, i1630, 'timeText')
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1637 = data
  i1636.cullTransparentMesh = !!i1637[0]
  return i1636
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1638 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1639 = data
  request.r(i1639[0], i1639[1], 0, i1638, 'm_Texture')
  i1638.m_UVRect = UnityEngine.Rect.MinMaxRect(i1639[2], i1639[3], i1639[4], i1639[5])
  i1638.m_Maskable = !!i1639[6]
  request.r(i1639[7], i1639[8], 0, i1638, 'm_Material')
  i1638.m_Color = new pc.Color(i1639[9], i1639[10], i1639[11], i1639[12])
  i1638.m_RaycastTarget = !!i1639[13]
  i1638.m_RaycastPadding = new pc.Vec4( i1639[14], i1639[15], i1639[16], i1639[17] )
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, 'clip')
  request.r(i1641[2], i1641[3], 0, i1640, 'outputAudioMixerGroup')
  i1640.playOnAwake = !!i1641[4]
  i1640.loop = !!i1641[5]
  i1640.time = i1641[6]
  i1640.volume = i1641[7]
  i1640.pitch = i1641[8]
  i1640.enabled = !!i1641[9]
  return i1640
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1642 = root || request.c( 'UnityEngine.UI.Image' )
  var i1643 = data
  request.r(i1643[0], i1643[1], 0, i1642, 'm_Sprite')
  i1642.m_Type = i1643[2]
  i1642.m_PreserveAspect = !!i1643[3]
  i1642.m_FillCenter = !!i1643[4]
  i1642.m_FillMethod = i1643[5]
  i1642.m_FillAmount = i1643[6]
  i1642.m_FillClockwise = !!i1643[7]
  i1642.m_FillOrigin = i1643[8]
  i1642.m_UseSpriteMesh = !!i1643[9]
  i1642.m_PixelsPerUnitMultiplier = i1643[10]
  i1642.m_Maskable = !!i1643[11]
  request.r(i1643[12], i1643[13], 0, i1642, 'm_Material')
  i1642.m_Color = new pc.Color(i1643[14], i1643[15], i1643[16], i1643[17])
  i1642.m_RaycastTarget = !!i1643[18]
  i1642.m_RaycastPadding = new pc.Vec4( i1643[19], i1643[20], i1643[21], i1643[22] )
  return i1642
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i1644 = root || request.c( 'ClickItem' )
  var i1645 = data
  var i1647 = i1645[0]
  var i1646 = []
  for(var i = 0; i < i1647.length; i += 2) {
  request.r(i1647[i + 0], i1647[i + 1], 2, i1646, '')
  }
  i1644.steps = i1646
  i1644.currentStep = i1645[1]
  i1644.isProcess = !!i1645[2]
  return i1644
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1650 = root || request.c( 'UnityEngine.UI.Button' )
  var i1651 = data
  i1650.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1651[0], i1650.m_OnClick)
  i1650.m_Navigation = request.d('UnityEngine.UI.Navigation', i1651[1], i1650.m_Navigation)
  i1650.m_Transition = i1651[2]
  i1650.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1651[3], i1650.m_Colors)
  i1650.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1651[4], i1650.m_SpriteState)
  i1650.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1651[5], i1650.m_AnimationTriggers)
  i1650.m_Interactable = !!i1651[6]
  request.r(i1651[7], i1651[8], 0, i1650, 'm_TargetGraphic')
  return i1650
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1652 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1653 = data
  i1652.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1653[0], i1652.m_PersistentCalls)
  return i1652
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1654 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1655 = data
  var i1657 = i1655[0]
  var i1656 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.add(request.d('UnityEngine.Events.PersistentCall', i1657[i + 0]));
  }
  i1654.m_Calls = i1656
  return i1654
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1660 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1661 = data
  request.r(i1661[0], i1661[1], 0, i1660, 'm_Target')
  i1660.m_TargetAssemblyTypeName = i1661[2]
  i1660.m_MethodName = i1661[3]
  i1660.m_Mode = i1661[4]
  i1660.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1661[5], i1660.m_Arguments)
  i1660.m_CallState = i1661[6]
  return i1660
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1663 = data
  i1662.m_Mode = i1663[0]
  i1662.m_WrapAround = !!i1663[1]
  request.r(i1663[2], i1663[3], 0, i1662, 'm_SelectOnUp')
  request.r(i1663[4], i1663[5], 0, i1662, 'm_SelectOnDown')
  request.r(i1663[6], i1663[7], 0, i1662, 'm_SelectOnLeft')
  request.r(i1663[8], i1663[9], 0, i1662, 'm_SelectOnRight')
  return i1662
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1664 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1665 = data
  i1664.m_NormalColor = new pc.Color(i1665[0], i1665[1], i1665[2], i1665[3])
  i1664.m_HighlightedColor = new pc.Color(i1665[4], i1665[5], i1665[6], i1665[7])
  i1664.m_PressedColor = new pc.Color(i1665[8], i1665[9], i1665[10], i1665[11])
  i1664.m_SelectedColor = new pc.Color(i1665[12], i1665[13], i1665[14], i1665[15])
  i1664.m_DisabledColor = new pc.Color(i1665[16], i1665[17], i1665[18], i1665[19])
  i1664.m_ColorMultiplier = i1665[20]
  i1664.m_FadeDuration = i1665[21]
  return i1664
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1666 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1667 = data
  request.r(i1667[0], i1667[1], 0, i1666, 'm_HighlightedSprite')
  request.r(i1667[2], i1667[3], 0, i1666, 'm_PressedSprite')
  request.r(i1667[4], i1667[5], 0, i1666, 'm_SelectedSprite')
  request.r(i1667[6], i1667[7], 0, i1666, 'm_DisabledSprite')
  return i1666
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1669 = data
  i1668.m_NormalTrigger = i1669[0]
  i1668.m_HighlightedTrigger = i1669[1]
  i1668.m_PressedTrigger = i1669[2]
  i1668.m_SelectedTrigger = i1669[3]
  i1668.m_DisabledTrigger = i1669[4]
  return i1668
}

Deserializers["DragID"] = function (request, data, root) {
  var i1670 = root || request.c( 'DragID' )
  var i1671 = data
  i1670.idDrag = i1671[0]
  i1670.isProcess = !!i1671[1]
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1673 = data
  i1672.m_Alpha = i1673[0]
  i1672.m_Interactable = !!i1673[1]
  i1672.m_BlocksRaycasts = !!i1673[2]
  i1672.m_IgnoreParentGroups = !!i1673[3]
  i1672.enabled = !!i1673[4]
  return i1672
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1674 = root || request.c( 'DropZone' )
  var i1675 = data
  i1674.idDrop = i1675[0]
  var i1677 = i1675[1]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 2) {
  request.r(i1677[i + 0], i1677[i + 1], 2, i1676, '')
  }
  i1674.steps = i1676
  request.r(i1675[2], i1675[3], 0, i1674, 'stepLose')
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1679 = data
  i1678.usedByComposite = !!i1679[0]
  i1678.autoTiling = !!i1679[1]
  var i1681 = i1679[2]
  var i1680 = []
  for(var i = 0; i < i1681.length; i += 1) {
  var i1683 = i1681[i + 0]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 2) {
    i1682.push( new pc.Vec2( i1683[i + 0], i1683[i + 1] ) );
  }
    i1680.push( i1682 );
  }
  i1678.points = i1680
  i1678.enabled = !!i1679[3]
  i1678.isTrigger = !!i1679[4]
  i1678.usedByEffector = !!i1679[5]
  i1678.density = i1679[6]
  i1678.offset = new pc.Vec2( i1679[7], i1679[8] )
  request.r(i1679[9], i1679[10], 0, i1678, 'material')
  return i1678
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1690 = root || request.c( 'DraggableItem' )
  var i1691 = data
  i1690.idDrag = i1691[0]
  i1690.isProcess = !!i1691[1]
  i1690.isLose = !!i1691[2]
  i1690.isHide = !!i1691[3]
  return i1690
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1692 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1693 = data
  request.r(i1693[0], i1693[1], 0, i1692, 'skeletonDataAsset')
  request.r(i1693[2], i1693[3], 0, i1692, 'additiveMaterial')
  request.r(i1693[4], i1693[5], 0, i1692, 'multiplyMaterial')
  request.r(i1693[6], i1693[7], 0, i1692, 'screenMaterial')
  i1692.initialSkinName = i1693[8]
  i1692.initialFlipX = !!i1693[9]
  i1692.initialFlipY = !!i1693[10]
  i1692.startingAnimation = i1693[11]
  i1692.startingLoop = !!i1693[12]
  i1692.timeScale = i1693[13]
  i1692.freeze = !!i1693[14]
  i1692.layoutScaleMode = i1693[15]
  i1692.updateWhenInvisible = i1693[16]
  i1692.allowMultipleCanvasRenderers = !!i1693[17]
  var i1695 = i1693[18]
  var i1694 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1695.length; i += 2) {
  request.r(i1695[i + 0], i1695[i + 1], 1, i1694, '')
  }
  i1692.canvasRenderers = i1694
  i1692.enableSeparatorSlots = !!i1693[19]
  i1692.updateSeparatorPartLocation = !!i1693[20]
  i1692.updateSeparatorPartScale = !!i1693[21]
  i1692.disableMeshAssignmentOnOverride = !!i1693[22]
  i1692.referenceSize = new pc.Vec2( i1693[23], i1693[24] )
  i1692.referenceScale = i1693[25]
  i1692.rectTransformSize = new pc.Vec2( i1693[26], i1693[27] )
  i1692.editReferenceRect = !!i1693[28]
  var i1697 = i1693[29]
  var i1696 = []
  for(var i = 0; i < i1697.length; i += 1) {
    i1696.push( i1697[i + 0] );
  }
  i1692.separatorSlotNames = i1696
  var i1699 = i1693[30]
  var i1698 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1699.length; i += 2) {
  request.r(i1699[i + 0], i1699[i + 1], 1, i1698, '')
  }
  i1692.separatorParts = i1698
  i1692.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1693[31], i1692.meshGenerator)
  i1692.updateTiming = i1693[32]
  i1692.unscaledTime = !!i1693[33]
  i1692.m_Maskable = !!i1693[34]
  request.r(i1693[35], i1693[36], 0, i1692, 'm_Material')
  i1692.m_Color = new pc.Color(i1693[37], i1693[38], i1693[39], i1693[40])
  i1692.m_RaycastTarget = !!i1693[41]
  i1692.m_RaycastPadding = new pc.Vec4( i1693[42], i1693[43], i1693[44], i1693[45] )
  return i1692
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1706 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1707 = data
  i1706.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1707[0], i1706.settings)
  return i1706
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1708 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1709 = data
  i1708.useClipping = !!i1709[0]
  i1708.zSpacing = i1709[1]
  i1708.pmaVertexColors = !!i1709[2]
  i1708.tintBlack = !!i1709[3]
  i1708.canvasGroupTintBlack = !!i1709[4]
  i1708.calculateTangents = !!i1709[5]
  i1708.addNormals = !!i1709[6]
  i1708.immutableTriangles = !!i1709[7]
  return i1708
}

Deserializers["DropID"] = function (request, data, root) {
  var i1710 = root || request.c( 'DropID' )
  var i1711 = data
  request.r(i1711[0], i1711[1], 0, i1710, 'mixSkeletonSkin')
  request.r(i1711[2], i1711[3], 0, i1710, 'casetteSkeleton')
  var i1713 = i1711[4]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 2) {
  request.r(i1713[i + 0], i1713[i + 1], 2, i1712, '')
  }
  i1710.SlotItems = i1712
  return i1710
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i1714 = root || request.c( 'MixSkeletonSkin' )
  var i1715 = data
  request.r(i1715[0], i1715[1], 0, i1714, 'skeletonAnimation')
  var i1717 = i1715[2]
  var i1716 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.add(i1717[i + 0]);
  }
  i1714.skinNames = i1716
  i1714.defaultAnim = i1715[3]
  return i1714
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1720 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1721 = data
  i1720.m_hasFontAssetChanged = !!i1721[0]
  request.r(i1721[1], i1721[2], 0, i1720, 'm_baseMaterial')
  i1720.m_maskOffset = new pc.Vec4( i1721[3], i1721[4], i1721[5], i1721[6] )
  i1720.m_text = i1721[7]
  i1720.m_isRightToLeft = !!i1721[8]
  request.r(i1721[9], i1721[10], 0, i1720, 'm_fontAsset')
  request.r(i1721[11], i1721[12], 0, i1720, 'm_sharedMaterial')
  var i1723 = i1721[13]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 2) {
  request.r(i1723[i + 0], i1723[i + 1], 2, i1722, '')
  }
  i1720.m_fontSharedMaterials = i1722
  request.r(i1721[14], i1721[15], 0, i1720, 'm_fontMaterial')
  var i1725 = i1721[16]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 2) {
  request.r(i1725[i + 0], i1725[i + 1], 2, i1724, '')
  }
  i1720.m_fontMaterials = i1724
  i1720.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1721[17], i1721[18], i1721[19], i1721[20])
  i1720.m_fontColor = new pc.Color(i1721[21], i1721[22], i1721[23], i1721[24])
  i1720.m_enableVertexGradient = !!i1721[25]
  i1720.m_colorMode = i1721[26]
  i1720.m_fontColorGradient = request.d('TMPro.VertexGradient', i1721[27], i1720.m_fontColorGradient)
  request.r(i1721[28], i1721[29], 0, i1720, 'm_fontColorGradientPreset')
  request.r(i1721[30], i1721[31], 0, i1720, 'm_spriteAsset')
  i1720.m_tintAllSprites = !!i1721[32]
  request.r(i1721[33], i1721[34], 0, i1720, 'm_StyleSheet')
  i1720.m_TextStyleHashCode = i1721[35]
  i1720.m_overrideHtmlColors = !!i1721[36]
  i1720.m_faceColor = UnityEngine.Color32.ConstructColor(i1721[37], i1721[38], i1721[39], i1721[40])
  i1720.m_fontSize = i1721[41]
  i1720.m_fontSizeBase = i1721[42]
  i1720.m_fontWeight = i1721[43]
  i1720.m_enableAutoSizing = !!i1721[44]
  i1720.m_fontSizeMin = i1721[45]
  i1720.m_fontSizeMax = i1721[46]
  i1720.m_fontStyle = i1721[47]
  i1720.m_HorizontalAlignment = i1721[48]
  i1720.m_VerticalAlignment = i1721[49]
  i1720.m_textAlignment = i1721[50]
  i1720.m_characterSpacing = i1721[51]
  i1720.m_wordSpacing = i1721[52]
  i1720.m_lineSpacing = i1721[53]
  i1720.m_lineSpacingMax = i1721[54]
  i1720.m_paragraphSpacing = i1721[55]
  i1720.m_charWidthMaxAdj = i1721[56]
  i1720.m_enableWordWrapping = !!i1721[57]
  i1720.m_wordWrappingRatios = i1721[58]
  i1720.m_overflowMode = i1721[59]
  request.r(i1721[60], i1721[61], 0, i1720, 'm_linkedTextComponent')
  request.r(i1721[62], i1721[63], 0, i1720, 'parentLinkedComponent')
  i1720.m_enableKerning = !!i1721[64]
  i1720.m_enableExtraPadding = !!i1721[65]
  i1720.checkPaddingRequired = !!i1721[66]
  i1720.m_isRichText = !!i1721[67]
  i1720.m_parseCtrlCharacters = !!i1721[68]
  i1720.m_isOrthographic = !!i1721[69]
  i1720.m_isCullingEnabled = !!i1721[70]
  i1720.m_horizontalMapping = i1721[71]
  i1720.m_verticalMapping = i1721[72]
  i1720.m_uvLineOffset = i1721[73]
  i1720.m_geometrySortingOrder = i1721[74]
  i1720.m_IsTextObjectScaleStatic = !!i1721[75]
  i1720.m_VertexBufferAutoSizeReduction = !!i1721[76]
  i1720.m_useMaxVisibleDescender = !!i1721[77]
  i1720.m_pageToDisplay = i1721[78]
  i1720.m_margin = new pc.Vec4( i1721[79], i1721[80], i1721[81], i1721[82] )
  i1720.m_isUsingLegacyAnimationComponent = !!i1721[83]
  i1720.m_isVolumetricText = !!i1721[84]
  i1720.m_Maskable = !!i1721[85]
  request.r(i1721[86], i1721[87], 0, i1720, 'm_Material')
  i1720.m_Color = new pc.Color(i1721[88], i1721[89], i1721[90], i1721[91])
  i1720.m_RaycastTarget = !!i1721[92]
  i1720.m_RaycastPadding = new pc.Vec4( i1721[93], i1721[94], i1721[95], i1721[96] )
  return i1720
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1728 = root || request.c( 'TMPro.VertexGradient' )
  var i1729 = data
  i1728.topLeft = new pc.Color(i1729[0], i1729[1], i1729[2], i1729[3])
  i1728.topRight = new pc.Color(i1729[4], i1729[5], i1729[6], i1729[7])
  i1728.bottomLeft = new pc.Color(i1729[8], i1729[9], i1729[10], i1729[11])
  i1728.bottomRight = new pc.Color(i1729[12], i1729[13], i1729[14], i1729[15])
  return i1728
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1730 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1731 = data
  request.r(i1731[0], i1731[1], 0, i1730, 'm_ObjectArgument')
  i1730.m_ObjectArgumentAssemblyTypeName = i1731[2]
  i1730.m_IntArgument = i1731[3]
  i1730.m_FloatArgument = i1731[4]
  i1730.m_StringArgument = i1731[5]
  i1730.m_BoolArgument = !!i1731[6]
  return i1730
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1732 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1733 = data
  i1732.targetIsSelf = !!i1733[0]
  request.r(i1733[1], i1733[2], 0, i1732, 'targetGO')
  i1732.tweenTargetIsTargetGO = !!i1733[3]
  i1732.delay = i1733[4]
  i1732.duration = i1733[5]
  i1732.easeType = i1733[6]
  i1732.easeCurve = new pc.AnimationCurve( { keys_flow: i1733[7] } )
  i1732.loopType = i1733[8]
  i1732.loops = i1733[9]
  i1732.id = i1733[10]
  i1732.isRelative = !!i1733[11]
  i1732.isFrom = !!i1733[12]
  i1732.isIndependentUpdate = !!i1733[13]
  i1732.autoKill = !!i1733[14]
  i1732.autoGenerate = !!i1733[15]
  i1732.isActive = !!i1733[16]
  i1732.isValid = !!i1733[17]
  request.r(i1733[18], i1733[19], 0, i1732, 'target')
  i1732.animationType = i1733[20]
  i1732.targetType = i1733[21]
  i1732.forcedTargetType = i1733[22]
  i1732.autoPlay = !!i1733[23]
  i1732.useTargetAsV3 = !!i1733[24]
  i1732.endValueFloat = i1733[25]
  i1732.endValueV3 = new pc.Vec3( i1733[26], i1733[27], i1733[28] )
  i1732.endValueV2 = new pc.Vec2( i1733[29], i1733[30] )
  i1732.endValueColor = new pc.Color(i1733[31], i1733[32], i1733[33], i1733[34])
  i1732.endValueString = i1733[35]
  i1732.endValueRect = UnityEngine.Rect.MinMaxRect(i1733[36], i1733[37], i1733[38], i1733[39])
  request.r(i1733[40], i1733[41], 0, i1732, 'endValueTransform')
  i1732.optionalBool0 = !!i1733[42]
  i1732.optionalBool1 = !!i1733[43]
  i1732.optionalFloat0 = i1733[44]
  i1732.optionalInt0 = i1733[45]
  i1732.optionalRotationMode = i1733[46]
  i1732.optionalScrambleMode = i1733[47]
  i1732.optionalShakeRandomnessMode = i1733[48]
  i1732.optionalString = i1733[49]
  i1732.updateType = i1733[50]
  i1732.isSpeedBased = !!i1733[51]
  i1732.hasOnStart = !!i1733[52]
  i1732.hasOnPlay = !!i1733[53]
  i1732.hasOnUpdate = !!i1733[54]
  i1732.hasOnStepComplete = !!i1733[55]
  i1732.hasOnComplete = !!i1733[56]
  i1732.hasOnTweenCreated = !!i1733[57]
  i1732.hasOnRewind = !!i1733[58]
  i1732.onStart = request.d('UnityEngine.Events.UnityEvent', i1733[59], i1732.onStart)
  i1732.onPlay = request.d('UnityEngine.Events.UnityEvent', i1733[60], i1732.onPlay)
  i1732.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1733[61], i1732.onUpdate)
  i1732.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1733[62], i1732.onStepComplete)
  i1732.onComplete = request.d('UnityEngine.Events.UnityEvent', i1733[63], i1732.onComplete)
  i1732.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1733[64], i1732.onTweenCreated)
  i1732.onRewind = request.d('UnityEngine.Events.UnityEvent', i1733[65], i1732.onRewind)
  return i1732
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1734 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1735 = data
  i1734.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1735[0], i1734.m_PersistentCalls)
  return i1734
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1736 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1737 = data
  i1736.m_ShowMaskGraphic = !!i1737[0]
  return i1736
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1738 = root || request.c( 'AudioController' )
  var i1739 = data
  request.r(i1739[0], i1739[1], 0, i1738, 'bgmSource')
  request.r(i1739[2], i1739[3], 0, i1738, 'sfxSource')
  var i1741 = i1739[4]
  var i1740 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i1741.length; i += 1) {
    i1740.add(request.d('AudioEntry', i1741[i + 0]));
  }
  i1738.audioEntries = i1740
  return i1738
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i1744 = root || request.c( 'AudioEntry' )
  var i1745 = data
  i1744.key = i1745[0]
  request.r(i1745[1], i1745[2], 0, i1744, 'clip')
  i1744.volume = i1745[3]
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1747 = data
  i1746.ambientIntensity = i1747[0]
  i1746.reflectionIntensity = i1747[1]
  i1746.ambientMode = i1747[2]
  i1746.ambientLight = new pc.Color(i1747[3], i1747[4], i1747[5], i1747[6])
  i1746.ambientSkyColor = new pc.Color(i1747[7], i1747[8], i1747[9], i1747[10])
  i1746.ambientGroundColor = new pc.Color(i1747[11], i1747[12], i1747[13], i1747[14])
  i1746.ambientEquatorColor = new pc.Color(i1747[15], i1747[16], i1747[17], i1747[18])
  i1746.fogColor = new pc.Color(i1747[19], i1747[20], i1747[21], i1747[22])
  i1746.fogEndDistance = i1747[23]
  i1746.fogStartDistance = i1747[24]
  i1746.fogDensity = i1747[25]
  i1746.fog = !!i1747[26]
  request.r(i1747[27], i1747[28], 0, i1746, 'skybox')
  i1746.fogMode = i1747[29]
  var i1749 = i1747[30]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1749[i + 0]) );
  }
  i1746.lightmaps = i1748
  i1746.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1747[31], i1746.lightProbes)
  i1746.lightmapsMode = i1747[32]
  i1746.mixedBakeMode = i1747[33]
  i1746.environmentLightingMode = i1747[34]
  i1746.ambientProbe = new pc.SphericalHarmonicsL2(i1747[35])
  i1746.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1747[36])
  i1746.useReferenceAmbientProbe = !!i1747[37]
  request.r(i1747[38], i1747[39], 0, i1746, 'customReflection')
  request.r(i1747[40], i1747[41], 0, i1746, 'defaultReflection')
  i1746.defaultReflectionMode = i1747[42]
  i1746.defaultReflectionResolution = i1747[43]
  i1746.sunLightObjectId = i1747[44]
  i1746.pixelLightCount = i1747[45]
  i1746.defaultReflectionHDR = !!i1747[46]
  i1746.hasLightDataAsset = !!i1747[47]
  i1746.hasManualGenerate = !!i1747[48]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1753 = data
  request.r(i1753[0], i1753[1], 0, i1752, 'lightmapColor')
  request.r(i1753[2], i1753[3], 0, i1752, 'lightmapDirection')
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1754 = root || new UnityEngine.LightProbes()
  var i1755 = data
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1763 = data
  var i1765 = i1763[0]
  var i1764 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1765[i + 0]));
  }
  i1762.ShaderCompilationErrors = i1764
  i1762.name = i1763[1]
  i1762.guid = i1763[2]
  var i1767 = i1763[3]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( i1767[i + 0] );
  }
  i1762.shaderDefinedKeywords = i1766
  var i1769 = i1763[4]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1769[i + 0]) );
  }
  i1762.passes = i1768
  var i1771 = i1763[5]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1771[i + 0]) );
  }
  i1762.usePasses = i1770
  var i1773 = i1763[6]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1773[i + 0]) );
  }
  i1762.defaultParameterValues = i1772
  request.r(i1763[7], i1763[8], 0, i1762, 'unityFallbackShader')
  i1762.readDepth = !!i1763[9]
  i1762.isCreatedByShaderGraph = !!i1763[10]
  i1762.disableBatching = !!i1763[11]
  i1762.compiled = !!i1763[12]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1777 = data
  i1776.shaderName = i1777[0]
  i1776.errorMessage = i1777[1]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1780 = root || new pc.UnityShaderPass()
  var i1781 = data
  i1780.id = i1781[0]
  i1780.subShaderIndex = i1781[1]
  i1780.name = i1781[2]
  i1780.passType = i1781[3]
  i1780.grabPassTextureName = i1781[4]
  i1780.usePass = !!i1781[5]
  i1780.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[6], i1780.zTest)
  i1780.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[7], i1780.zWrite)
  i1780.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[8], i1780.culling)
  i1780.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1781[9], i1780.blending)
  i1780.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1781[10], i1780.alphaBlending)
  i1780.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[11], i1780.colorWriteMask)
  i1780.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[12], i1780.offsetUnits)
  i1780.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[13], i1780.offsetFactor)
  i1780.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[14], i1780.stencilRef)
  i1780.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[15], i1780.stencilReadMask)
  i1780.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[16], i1780.stencilWriteMask)
  i1780.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1781[17], i1780.stencilOp)
  i1780.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1781[18], i1780.stencilOpFront)
  i1780.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1781[19], i1780.stencilOpBack)
  var i1783 = i1781[20]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1783[i + 0]) );
  }
  i1780.tags = i1782
  var i1785 = i1781[21]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( i1785[i + 0] );
  }
  i1780.passDefinedKeywords = i1784
  var i1787 = i1781[22]
  var i1786 = []
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1787[i + 0]) );
  }
  i1780.passDefinedKeywordGroups = i1786
  var i1789 = i1781[23]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1789[i + 0]) );
  }
  i1780.variants = i1788
  var i1791 = i1781[24]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1791[i + 0]) );
  }
  i1780.excludedVariants = i1790
  i1780.hasDepthReader = !!i1781[25]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1793 = data
  i1792.val = i1793[0]
  i1792.name = i1793[1]
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1795 = data
  i1794.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1795[0], i1794.src)
  i1794.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1795[1], i1794.dst)
  i1794.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1795[2], i1794.op)
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1797 = data
  i1796.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[0], i1796.pass)
  i1796.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[1], i1796.fail)
  i1796.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[2], i1796.zFail)
  i1796.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[3], i1796.comp)
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1801 = data
  i1800.name = i1801[0]
  i1800.value = i1801[1]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1805 = data
  var i1807 = i1805[0]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( i1807[i + 0] );
  }
  i1804.keywords = i1806
  i1804.hasDiscard = !!i1805[1]
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1811 = data
  i1810.passId = i1811[0]
  i1810.subShaderIndex = i1811[1]
  var i1813 = i1811[2]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.push( i1813[i + 0] );
  }
  i1810.keywords = i1812
  i1810.vertexProgram = i1811[3]
  i1810.fragmentProgram = i1811[4]
  i1810.exportedForWebGl2 = !!i1811[5]
  i1810.readDepth = !!i1811[6]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1817 = data
  request.r(i1817[0], i1817[1], 0, i1816, 'shader')
  i1816.pass = i1817[2]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1821 = data
  i1820.name = i1821[0]
  i1820.type = i1821[1]
  i1820.value = new pc.Vec4( i1821[2], i1821[3], i1821[4], i1821[5] )
  i1820.textureValue = i1821[6]
  i1820.shaderPropertyFlag = i1821[7]
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1823 = data
  i1822.name = i1823[0]
  request.r(i1823[1], i1823[2], 0, i1822, 'texture')
  i1822.aabb = i1823[3]
  i1822.vertices = i1823[4]
  i1822.triangles = i1823[5]
  i1822.textureRect = UnityEngine.Rect.MinMaxRect(i1823[6], i1823[7], i1823[8], i1823[9])
  i1822.packedRect = UnityEngine.Rect.MinMaxRect(i1823[10], i1823[11], i1823[12], i1823[13])
  i1822.border = new pc.Vec4( i1823[14], i1823[15], i1823[16], i1823[17] )
  i1822.transparency = i1823[18]
  i1822.bounds = i1823[19]
  i1822.pixelsPerUnit = i1823[20]
  i1822.textureWidth = i1823[21]
  i1822.textureHeight = i1823[22]
  i1822.nativeSize = new pc.Vec2( i1823[23], i1823[24] )
  i1822.pivot = new pc.Vec2( i1823[25], i1823[26] )
  i1822.textureRectOffset = new pc.Vec2( i1823[27], i1823[28] )
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1825 = data
  i1824.name = i1825[0]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1827 = data
  i1826.name = i1827[0]
  i1826.ascent = i1827[1]
  i1826.originalLineHeight = i1827[2]
  i1826.fontSize = i1827[3]
  var i1829 = i1827[4]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1829[i + 0]) );
  }
  i1826.characterInfo = i1828
  request.r(i1827[5], i1827[6], 0, i1826, 'texture')
  i1826.originalFontSize = i1827[7]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1833 = data
  i1832.index = i1833[0]
  i1832.advance = i1833[1]
  i1832.bearing = i1833[2]
  i1832.glyphWidth = i1833[3]
  i1832.glyphHeight = i1833[4]
  i1832.minX = i1833[5]
  i1832.maxX = i1833[6]
  i1832.minY = i1833[7]
  i1832.maxY = i1833[8]
  i1832.uvBottomLeftX = i1833[9]
  i1832.uvBottomLeftY = i1833[10]
  i1832.uvBottomRightX = i1833[11]
  i1832.uvBottomRightY = i1833[12]
  i1832.uvTopLeftX = i1833[13]
  i1832.uvTopLeftY = i1833[14]
  i1832.uvTopRightX = i1833[15]
  i1832.uvTopRightY = i1833[16]
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1835 = data
  i1834.name = i1835[0]
  i1834.bytes64 = i1835[1]
  i1834.data = i1835[2]
  return i1834
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1836 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1837 = data
  var i1839 = i1837[0]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 2) {
  request.r(i1839[i + 0], i1839[i + 1], 2, i1838, '')
  }
  i1836.atlasAssets = i1838
  i1836.scale = i1837[1]
  request.r(i1837[2], i1837[3], 0, i1836, 'skeletonJSON')
  i1836.isUpgradingBlendModeMaterials = !!i1837[4]
  i1836.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1837[5], i1836.blendModeMaterials)
  var i1841 = i1837[6]
  var i1840 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1841.length; i += 2) {
  request.r(i1841[i + 0], i1841[i + 1], 1, i1840, '')
  }
  i1836.skeletonDataModifiers = i1840
  var i1843 = i1837[7]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 1) {
    i1842.push( i1843[i + 0] );
  }
  i1836.fromAnimation = i1842
  var i1845 = i1837[8]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( i1845[i + 0] );
  }
  i1836.toAnimation = i1844
  i1836.duration = i1837[9]
  i1836.defaultMix = i1837[10]
  request.r(i1837[11], i1837[12], 0, i1836, 'controller')
  return i1836
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1848 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1849 = data
  i1848.applyAdditiveMaterial = !!i1849[0]
  var i1851 = i1849[1]
  var i1850 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1851[i + 0]));
  }
  i1848.additiveMaterials = i1850
  var i1853 = i1849[2]
  var i1852 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1853[i + 0]));
  }
  i1848.multiplyMaterials = i1852
  var i1855 = i1849[3]
  var i1854 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1855[i + 0]));
  }
  i1848.screenMaterials = i1854
  i1848.requiresBlendModeMaterials = !!i1849[4]
  return i1848
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1858 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1859 = data
  i1858.pageName = i1859[0]
  request.r(i1859[1], i1859[2], 0, i1858, 'material')
  return i1858
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1862 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1863 = data
  request.r(i1863[0], i1863[1], 0, i1862, 'atlasFile')
  var i1865 = i1863[2]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 2) {
  request.r(i1865[i + 0], i1865[i + 1], 2, i1864, '')
  }
  i1862.materials = i1864
  i1862.textureLoadingMode = i1863[3]
  request.r(i1863[4], i1863[5], 0, i1862, 'onDemandTextureLoader')
  return i1862
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1866 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1867 = data
  request.r(i1867[0], i1867[1], 0, i1866, 'atlas')
  i1866.normalStyle = i1867[2]
  i1866.normalSpacingOffset = i1867[3]
  i1866.boldStyle = i1867[4]
  i1866.boldSpacing = i1867[5]
  i1866.italicStyle = i1867[6]
  i1866.tabSize = i1867[7]
  i1866.hashCode = i1867[8]
  request.r(i1867[9], i1867[10], 0, i1866, 'material')
  i1866.materialHashCode = i1867[11]
  i1866.m_Version = i1867[12]
  i1866.m_SourceFontFileGUID = i1867[13]
  request.r(i1867[14], i1867[15], 0, i1866, 'm_SourceFontFile_EditorRef')
  request.r(i1867[16], i1867[17], 0, i1866, 'm_SourceFontFile')
  i1866.m_AtlasPopulationMode = i1867[18]
  i1866.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1867[19], i1866.m_FaceInfo)
  var i1869 = i1867[20]
  var i1868 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.add(request.d('UnityEngine.TextCore.Glyph', i1869[i + 0]));
  }
  i1866.m_GlyphTable = i1868
  var i1871 = i1867[21]
  var i1870 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.add(request.d('TMPro.TMP_Character', i1871[i + 0]));
  }
  i1866.m_CharacterTable = i1870
  var i1873 = i1867[22]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 2) {
  request.r(i1873[i + 0], i1873[i + 1], 2, i1872, '')
  }
  i1866.m_AtlasTextures = i1872
  i1866.m_AtlasTextureIndex = i1867[23]
  i1866.m_IsMultiAtlasTexturesEnabled = !!i1867[24]
  i1866.m_ClearDynamicDataOnBuild = !!i1867[25]
  var i1875 = i1867[26]
  var i1874 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.add(request.d('UnityEngine.TextCore.GlyphRect', i1875[i + 0]));
  }
  i1866.m_UsedGlyphRects = i1874
  var i1877 = i1867[27]
  var i1876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.add(request.d('UnityEngine.TextCore.GlyphRect', i1877[i + 0]));
  }
  i1866.m_FreeGlyphRects = i1876
  i1866.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1867[28], i1866.m_fontInfo)
  i1866.m_AtlasWidth = i1867[29]
  i1866.m_AtlasHeight = i1867[30]
  i1866.m_AtlasPadding = i1867[31]
  i1866.m_AtlasRenderMode = i1867[32]
  var i1879 = i1867[33]
  var i1878 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.add(request.d('TMPro.TMP_Glyph', i1879[i + 0]));
  }
  i1866.m_glyphInfoList = i1878
  i1866.m_KerningTable = request.d('TMPro.KerningTable', i1867[34], i1866.m_KerningTable)
  i1866.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1867[35], i1866.m_FontFeatureTable)
  var i1881 = i1867[36]
  var i1880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1881.length; i += 2) {
  request.r(i1881[i + 0], i1881[i + 1], 1, i1880, '')
  }
  i1866.fallbackFontAssets = i1880
  var i1883 = i1867[37]
  var i1882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1883.length; i += 2) {
  request.r(i1883[i + 0], i1883[i + 1], 1, i1882, '')
  }
  i1866.m_FallbackFontAssetTable = i1882
  i1866.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1867[38], i1866.m_CreationSettings)
  var i1885 = i1867[39]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('TMPro.TMP_FontWeightPair', i1885[i + 0]) );
  }
  i1866.m_FontWeightTable = i1884
  var i1887 = i1867[40]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('TMPro.TMP_FontWeightPair', i1887[i + 0]) );
  }
  i1866.fontWeights = i1886
  return i1866
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1888 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1889 = data
  i1888.m_FaceIndex = i1889[0]
  i1888.m_FamilyName = i1889[1]
  i1888.m_StyleName = i1889[2]
  i1888.m_PointSize = i1889[3]
  i1888.m_Scale = i1889[4]
  i1888.m_UnitsPerEM = i1889[5]
  i1888.m_LineHeight = i1889[6]
  i1888.m_AscentLine = i1889[7]
  i1888.m_CapLine = i1889[8]
  i1888.m_MeanLine = i1889[9]
  i1888.m_Baseline = i1889[10]
  i1888.m_DescentLine = i1889[11]
  i1888.m_SuperscriptOffset = i1889[12]
  i1888.m_SuperscriptSize = i1889[13]
  i1888.m_SubscriptOffset = i1889[14]
  i1888.m_SubscriptSize = i1889[15]
  i1888.m_UnderlineOffset = i1889[16]
  i1888.m_UnderlineThickness = i1889[17]
  i1888.m_StrikethroughOffset = i1889[18]
  i1888.m_StrikethroughThickness = i1889[19]
  i1888.m_TabWidth = i1889[20]
  return i1888
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1892 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1893 = data
  i1892.m_Index = i1893[0]
  i1892.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1893[1], i1892.m_Metrics)
  i1892.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1893[2], i1892.m_GlyphRect)
  i1892.m_Scale = i1893[3]
  i1892.m_AtlasIndex = i1893[4]
  i1892.m_ClassDefinitionType = i1893[5]
  return i1892
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1894 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1895 = data
  i1894.m_Width = i1895[0]
  i1894.m_Height = i1895[1]
  i1894.m_HorizontalBearingX = i1895[2]
  i1894.m_HorizontalBearingY = i1895[3]
  i1894.m_HorizontalAdvance = i1895[4]
  return i1894
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1896 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1897 = data
  i1896.m_X = i1897[0]
  i1896.m_Y = i1897[1]
  i1896.m_Width = i1897[2]
  i1896.m_Height = i1897[3]
  return i1896
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1900 = root || request.c( 'TMPro.TMP_Character' )
  var i1901 = data
  i1900.m_ElementType = i1901[0]
  i1900.m_Unicode = i1901[1]
  i1900.m_GlyphIndex = i1901[2]
  i1900.m_Scale = i1901[3]
  return i1900
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1906 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1907 = data
  i1906.Name = i1907[0]
  i1906.PointSize = i1907[1]
  i1906.Scale = i1907[2]
  i1906.CharacterCount = i1907[3]
  i1906.LineHeight = i1907[4]
  i1906.Baseline = i1907[5]
  i1906.Ascender = i1907[6]
  i1906.CapHeight = i1907[7]
  i1906.Descender = i1907[8]
  i1906.CenterLine = i1907[9]
  i1906.SuperscriptOffset = i1907[10]
  i1906.SubscriptOffset = i1907[11]
  i1906.SubSize = i1907[12]
  i1906.Underline = i1907[13]
  i1906.UnderlineThickness = i1907[14]
  i1906.strikethrough = i1907[15]
  i1906.strikethroughThickness = i1907[16]
  i1906.TabWidth = i1907[17]
  i1906.Padding = i1907[18]
  i1906.AtlasWidth = i1907[19]
  i1906.AtlasHeight = i1907[20]
  return i1906
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1910 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1911 = data
  i1910.id = i1911[0]
  i1910.x = i1911[1]
  i1910.y = i1911[2]
  i1910.width = i1911[3]
  i1910.height = i1911[4]
  i1910.xOffset = i1911[5]
  i1910.yOffset = i1911[6]
  i1910.xAdvance = i1911[7]
  i1910.scale = i1911[8]
  return i1910
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1912 = root || request.c( 'TMPro.KerningTable' )
  var i1913 = data
  var i1915 = i1913[0]
  var i1914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.add(request.d('TMPro.KerningPair', i1915[i + 0]));
  }
  i1912.kerningPairs = i1914
  return i1912
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1918 = root || request.c( 'TMPro.KerningPair' )
  var i1919 = data
  i1918.xOffset = i1919[0]
  i1918.m_FirstGlyph = i1919[1]
  i1918.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1919[2], i1918.m_FirstGlyphAdjustments)
  i1918.m_SecondGlyph = i1919[3]
  i1918.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1919[4], i1918.m_SecondGlyphAdjustments)
  i1918.m_IgnoreSpacingAdjustments = !!i1919[5]
  return i1918
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1920 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1921 = data
  var i1923 = i1921[0]
  var i1922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1923[i + 0]));
  }
  i1920.m_GlyphPairAdjustmentRecords = i1922
  return i1920
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1926 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1927 = data
  i1926.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1927[0], i1926.m_FirstAdjustmentRecord)
  i1926.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1927[1], i1926.m_SecondAdjustmentRecord)
  i1926.m_FeatureLookupFlags = i1927[2]
  return i1926
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1930 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1931 = data
  i1930.sourceFontFileName = i1931[0]
  i1930.sourceFontFileGUID = i1931[1]
  i1930.pointSizeSamplingMode = i1931[2]
  i1930.pointSize = i1931[3]
  i1930.padding = i1931[4]
  i1930.packingMode = i1931[5]
  i1930.atlasWidth = i1931[6]
  i1930.atlasHeight = i1931[7]
  i1930.characterSetSelectionMode = i1931[8]
  i1930.characterSequence = i1931[9]
  i1930.referencedFontAssetGUID = i1931[10]
  i1930.referencedTextAssetGUID = i1931[11]
  i1930.fontStyle = i1931[12]
  i1930.fontStyleModifier = i1931[13]
  i1930.renderMode = i1931[14]
  i1930.includeFontFeatures = !!i1931[15]
  return i1930
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1934 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1935 = data
  request.r(i1935[0], i1935[1], 0, i1934, 'regularTypeface')
  request.r(i1935[2], i1935[3], 0, i1934, 'italicTypeface')
  return i1934
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1936 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1937 = data
  i1936.useSafeMode = !!i1937[0]
  i1936.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1937[1], i1936.safeModeOptions)
  i1936.timeScale = i1937[2]
  i1936.unscaledTimeScale = i1937[3]
  i1936.useSmoothDeltaTime = !!i1937[4]
  i1936.maxSmoothUnscaledTime = i1937[5]
  i1936.rewindCallbackMode = i1937[6]
  i1936.showUnityEditorReport = !!i1937[7]
  i1936.logBehaviour = i1937[8]
  i1936.drawGizmos = !!i1937[9]
  i1936.defaultRecyclable = !!i1937[10]
  i1936.defaultAutoPlay = i1937[11]
  i1936.defaultUpdateType = i1937[12]
  i1936.defaultTimeScaleIndependent = !!i1937[13]
  i1936.defaultEaseType = i1937[14]
  i1936.defaultEaseOvershootOrAmplitude = i1937[15]
  i1936.defaultEasePeriod = i1937[16]
  i1936.defaultAutoKill = !!i1937[17]
  i1936.defaultLoopType = i1937[18]
  i1936.debugMode = !!i1937[19]
  i1936.debugStoreTargetId = !!i1937[20]
  i1936.showPreviewPanel = !!i1937[21]
  i1936.storeSettingsLocation = i1937[22]
  i1936.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1937[23], i1936.modules)
  i1936.createASMDEF = !!i1937[24]
  i1936.showPlayingTweens = !!i1937[25]
  i1936.showPausedTweens = !!i1937[26]
  return i1936
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1938 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1939 = data
  i1938.logBehaviour = i1939[0]
  i1938.nestedTweenFailureBehaviour = i1939[1]
  return i1938
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1940 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1941 = data
  i1940.showPanel = !!i1941[0]
  i1940.audioEnabled = !!i1941[1]
  i1940.physicsEnabled = !!i1941[2]
  i1940.physics2DEnabled = !!i1941[3]
  i1940.spriteEnabled = !!i1941[4]
  i1940.uiEnabled = !!i1941[5]
  i1940.textMeshProEnabled = !!i1941[6]
  i1940.tk2DEnabled = !!i1941[7]
  i1940.deAudioEnabled = !!i1941[8]
  i1940.deUnityExtendedEnabled = !!i1941[9]
  i1940.epoOutlineEnabled = !!i1941[10]
  return i1940
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1942 = root || request.c( 'TMPro.TMP_Settings' )
  var i1943 = data
  i1942.m_enableWordWrapping = !!i1943[0]
  i1942.m_enableKerning = !!i1943[1]
  i1942.m_enableExtraPadding = !!i1943[2]
  i1942.m_enableTintAllSprites = !!i1943[3]
  i1942.m_enableParseEscapeCharacters = !!i1943[4]
  i1942.m_EnableRaycastTarget = !!i1943[5]
  i1942.m_GetFontFeaturesAtRuntime = !!i1943[6]
  i1942.m_missingGlyphCharacter = i1943[7]
  i1942.m_warningsDisabled = !!i1943[8]
  request.r(i1943[9], i1943[10], 0, i1942, 'm_defaultFontAsset')
  i1942.m_defaultFontAssetPath = i1943[11]
  i1942.m_defaultFontSize = i1943[12]
  i1942.m_defaultAutoSizeMinRatio = i1943[13]
  i1942.m_defaultAutoSizeMaxRatio = i1943[14]
  i1942.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1943[15], i1943[16] )
  i1942.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1943[17], i1943[18] )
  i1942.m_autoSizeTextContainer = !!i1943[19]
  i1942.m_IsTextObjectScaleStatic = !!i1943[20]
  var i1945 = i1943[21]
  var i1944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1945.length; i += 2) {
  request.r(i1945[i + 0], i1945[i + 1], 1, i1944, '')
  }
  i1942.m_fallbackFontAssets = i1944
  i1942.m_matchMaterialPreset = !!i1943[22]
  request.r(i1943[23], i1943[24], 0, i1942, 'm_defaultSpriteAsset')
  i1942.m_defaultSpriteAssetPath = i1943[25]
  i1942.m_enableEmojiSupport = !!i1943[26]
  i1942.m_MissingCharacterSpriteUnicode = i1943[27]
  i1942.m_defaultColorGradientPresetsPath = i1943[28]
  request.r(i1943[29], i1943[30], 0, i1942, 'm_defaultStyleSheet')
  i1942.m_StyleSheetsResourcePath = i1943[31]
  request.r(i1943[32], i1943[33], 0, i1942, 'm_leadingCharacters')
  request.r(i1943[34], i1943[35], 0, i1942, 'm_followingCharacters')
  i1942.m_UseModernHangulLineBreakingRules = !!i1943[36]
  return i1942
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1946 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1947 = data
  request.r(i1947[0], i1947[1], 0, i1946, 'spriteSheet')
  var i1949 = i1947[2]
  var i1948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.add(request.d('TMPro.TMP_Sprite', i1949[i + 0]));
  }
  i1946.spriteInfoList = i1948
  var i1951 = i1947[3]
  var i1950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1951.length; i += 2) {
  request.r(i1951[i + 0], i1951[i + 1], 1, i1950, '')
  }
  i1946.fallbackSpriteAssets = i1950
  i1946.hashCode = i1947[4]
  request.r(i1947[5], i1947[6], 0, i1946, 'material')
  i1946.materialHashCode = i1947[7]
  i1946.m_Version = i1947[8]
  i1946.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1947[9], i1946.m_FaceInfo)
  var i1953 = i1947[10]
  var i1952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.add(request.d('TMPro.TMP_SpriteCharacter', i1953[i + 0]));
  }
  i1946.m_SpriteCharacterTable = i1952
  var i1955 = i1947[11]
  var i1954 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1955.length; i += 1) {
    i1954.add(request.d('TMPro.TMP_SpriteGlyph', i1955[i + 0]));
  }
  i1946.m_SpriteGlyphTable = i1954
  return i1946
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1958 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1959 = data
  i1958.name = i1959[0]
  i1958.hashCode = i1959[1]
  i1958.unicode = i1959[2]
  i1958.pivot = new pc.Vec2( i1959[3], i1959[4] )
  request.r(i1959[5], i1959[6], 0, i1958, 'sprite')
  i1958.id = i1959[7]
  i1958.x = i1959[8]
  i1958.y = i1959[9]
  i1958.width = i1959[10]
  i1958.height = i1959[11]
  i1958.xOffset = i1959[12]
  i1958.yOffset = i1959[13]
  i1958.xAdvance = i1959[14]
  i1958.scale = i1959[15]
  return i1958
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1964 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1965 = data
  i1964.m_Name = i1965[0]
  i1964.m_HashCode = i1965[1]
  i1964.m_ElementType = i1965[2]
  i1964.m_Unicode = i1965[3]
  i1964.m_GlyphIndex = i1965[4]
  i1964.m_Scale = i1965[5]
  return i1964
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1968 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1969 = data
  request.r(i1969[0], i1969[1], 0, i1968, 'sprite')
  i1968.m_Index = i1969[2]
  i1968.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1969[3], i1968.m_Metrics)
  i1968.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1969[4], i1968.m_GlyphRect)
  i1968.m_Scale = i1969[5]
  i1968.m_AtlasIndex = i1969[6]
  i1968.m_ClassDefinitionType = i1969[7]
  return i1968
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1970 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1971 = data
  var i1973 = i1971[0]
  var i1972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.add(request.d('TMPro.TMP_Style', i1973[i + 0]));
  }
  i1970.m_StyleList = i1972
  return i1970
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1976 = root || request.c( 'TMPro.TMP_Style' )
  var i1977 = data
  i1976.m_Name = i1977[0]
  i1976.m_HashCode = i1977[1]
  i1976.m_OpeningDefinition = i1977[2]
  i1976.m_ClosingDefinition = i1977[3]
  i1976.m_OpeningTagArray = i1977[4]
  i1976.m_ClosingTagArray = i1977[5]
  i1976.m_OpeningTagUnicodeArray = i1977[6]
  i1976.m_ClosingTagUnicodeArray = i1977[7]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1979 = data
  var i1981 = i1979[0]
  var i1980 = []
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1981[i + 0]) );
  }
  i1978.files = i1980
  i1978.componentToPrefabIds = i1979[1]
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1985 = data
  i1984.path = i1985[0]
  request.r(i1985[1], i1985[2], 0, i1984, 'unityObject')
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1987 = data
  var i1989 = i1987[0]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1989[i + 0]) );
  }
  i1986.scriptsExecutionOrder = i1988
  var i1991 = i1987[1]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 1) {
    i1990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1991[i + 0]) );
  }
  i1986.sortingLayers = i1990
  var i1993 = i1987[2]
  var i1992 = []
  for(var i = 0; i < i1993.length; i += 1) {
    i1992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1993[i + 0]) );
  }
  i1986.cullingLayers = i1992
  i1986.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1987[3], i1986.timeSettings)
  i1986.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1987[4], i1986.physicsSettings)
  i1986.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1987[5], i1986.physics2DSettings)
  i1986.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1987[6], i1986.qualitySettings)
  i1986.enableRealtimeShadows = !!i1987[7]
  i1986.enableAutoInstancing = !!i1987[8]
  i1986.enableStaticBatching = !!i1987[9]
  i1986.enableDynamicBatching = !!i1987[10]
  i1986.lightmapEncodingQuality = i1987[11]
  i1986.desiredColorSpace = i1987[12]
  var i1995 = i1987[13]
  var i1994 = []
  for(var i = 0; i < i1995.length; i += 1) {
    i1994.push( i1995[i + 0] );
  }
  i1986.allTags = i1994
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1999 = data
  i1998.name = i1999[0]
  i1998.value = i1999[1]
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2003 = data
  i2002.id = i2003[0]
  i2002.name = i2003[1]
  i2002.value = i2003[2]
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2007 = data
  i2006.id = i2007[0]
  i2006.name = i2007[1]
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2009 = data
  i2008.fixedDeltaTime = i2009[0]
  i2008.maximumDeltaTime = i2009[1]
  i2008.timeScale = i2009[2]
  i2008.maximumParticleTimestep = i2009[3]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2011 = data
  i2010.gravity = new pc.Vec3( i2011[0], i2011[1], i2011[2] )
  i2010.defaultSolverIterations = i2011[3]
  i2010.bounceThreshold = i2011[4]
  i2010.autoSyncTransforms = !!i2011[5]
  i2010.autoSimulation = !!i2011[6]
  var i2013 = i2011[7]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 1) {
    i2012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2013[i + 0]) );
  }
  i2010.collisionMatrix = i2012
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2017 = data
  i2016.enabled = !!i2017[0]
  i2016.layerId = i2017[1]
  i2016.otherLayerId = i2017[2]
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2019 = data
  request.r(i2019[0], i2019[1], 0, i2018, 'material')
  i2018.gravity = new pc.Vec2( i2019[2], i2019[3] )
  i2018.positionIterations = i2019[4]
  i2018.velocityIterations = i2019[5]
  i2018.velocityThreshold = i2019[6]
  i2018.maxLinearCorrection = i2019[7]
  i2018.maxAngularCorrection = i2019[8]
  i2018.maxTranslationSpeed = i2019[9]
  i2018.maxRotationSpeed = i2019[10]
  i2018.baumgarteScale = i2019[11]
  i2018.baumgarteTOIScale = i2019[12]
  i2018.timeToSleep = i2019[13]
  i2018.linearSleepTolerance = i2019[14]
  i2018.angularSleepTolerance = i2019[15]
  i2018.defaultContactOffset = i2019[16]
  i2018.autoSimulation = !!i2019[17]
  i2018.queriesHitTriggers = !!i2019[18]
  i2018.queriesStartInColliders = !!i2019[19]
  i2018.callbacksOnDisable = !!i2019[20]
  i2018.reuseCollisionCallbacks = !!i2019[21]
  i2018.autoSyncTransforms = !!i2019[22]
  var i2021 = i2019[23]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2021[i + 0]) );
  }
  i2018.collisionMatrix = i2020
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2025 = data
  i2024.enabled = !!i2025[0]
  i2024.layerId = i2025[1]
  i2024.otherLayerId = i2025[2]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2027 = data
  var i2029 = i2027[0]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2029[i + 0]) );
  }
  i2026.qualityLevels = i2028
  var i2031 = i2027[1]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.push( i2031[i + 0] );
  }
  i2026.names = i2030
  i2026.shadows = i2027[2]
  i2026.anisotropicFiltering = i2027[3]
  i2026.antiAliasing = i2027[4]
  i2026.lodBias = i2027[5]
  i2026.shadowCascades = i2027[6]
  i2026.shadowDistance = i2027[7]
  i2026.shadowmaskMode = i2027[8]
  i2026.shadowProjection = i2027[9]
  i2026.shadowResolution = i2027[10]
  i2026.softParticles = !!i2027[11]
  i2026.softVegetation = !!i2027[12]
  i2026.activeColorSpace = i2027[13]
  i2026.desiredColorSpace = i2027[14]
  i2026.masterTextureLimit = i2027[15]
  i2026.maxQueuedFrames = i2027[16]
  i2026.particleRaycastBudget = i2027[17]
  i2026.pixelLightCount = i2027[18]
  i2026.realtimeReflectionProbes = !!i2027[19]
  i2026.shadowCascade2Split = i2027[20]
  i2026.shadowCascade4Split = new pc.Vec3( i2027[21], i2027[22], i2027[23] )
  i2026.streamingMipmapsActive = !!i2027[24]
  i2026.vSyncCount = i2027[25]
  i2026.asyncUploadBufferSize = i2027[26]
  i2026.asyncUploadTimeSlice = i2027[27]
  i2026.billboardsFaceCameraPosition = !!i2027[28]
  i2026.shadowNearPlaneOffset = i2027[29]
  i2026.streamingMipmapsMemoryBudget = i2027[30]
  i2026.maximumLODLevel = i2027[31]
  i2026.streamingMipmapsAddAllCameras = !!i2027[32]
  i2026.streamingMipmapsMaxLevelReduction = i2027[33]
  i2026.streamingMipmapsRenderersPerFrame = i2027[34]
  i2026.resolutionScalingFixedDPIFactor = i2027[35]
  i2026.streamingMipmapsMaxFileIORequests = i2027[36]
  i2026.currentQualityLevel = i2027[37]
  return i2026
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2034 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2035 = data
  i2034.xPlacement = i2035[0]
  i2034.yPlacement = i2035[1]
  i2034.xAdvance = i2035[2]
  i2034.yAdvance = i2035[3]
  return i2034
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2036 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2037 = data
  i2036.m_GlyphIndex = i2037[0]
  i2036.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2037[1], i2036.m_GlyphValueRecord)
  return i2036
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2038 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2039 = data
  i2038.m_XPlacement = i2039[0]
  i2038.m_YPlacement = i2039[1]
  i2038.m_XAdvance = i2039[2]
  i2038.m_YAdvance = i2039[3]
  return i2038
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[3],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[3],"78":[79],"80":[81],"82":[81],"9":[8],"83":[84],"85":[86],"87":[84],"88":[8],"89":[8],"11":[9],"18":[19,8],"90":[8],"10":[9],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"96":[8],"97":[8],"36":[8],"98":[8],"16":[19,8],"99":[8],"100":[8],"101":[8],"102":[8],"103":[19,8],"104":[8],"105":[6],"106":[6],"7":[6],"107":[6],"108":[3],"109":[3],"110":[111],"112":[3],"113":[114],"115":[8],"116":[19,8],"117":[79],"29":[19,8],"118":[119,79],"120":[79],"121":[79,122],"123":[56],"124":[64],"125":[114],"126":[127],"128":[8],"129":[79,8],"17":[8,19],"130":[8],"131":[19,8],"132":[79],"133":[19,8],"134":[8],"135":[84]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","ClickItem","DragID","UnityEngine.CanvasGroup","DropZone","UnityEngine.PolygonCollider2D","DraggableItem","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DropID","MixSkeletonSkin","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "281.0";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BM_V18_NgocBTU_AnhPD";

Deserializers.lunaAppID = "34530";

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

Deserializers.buildID = "16de55d9-2261-4638-a685-ae97e11a3e0c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

