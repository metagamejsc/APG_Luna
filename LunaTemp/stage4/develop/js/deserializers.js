var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1632 = root || request.c( 'UnityEngine.JointSpring' )
  var i1633 = data
  i1632.spring = i1633[0]
  i1632.damper = i1633[1]
  i1632.targetPosition = i1633[2]
  return i1632
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1634 = root || request.c( 'UnityEngine.JointMotor' )
  var i1635 = data
  i1634.m_TargetVelocity = i1635[0]
  i1634.m_Force = i1635[1]
  i1634.m_FreeSpin = i1635[2]
  return i1634
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1636 = root || request.c( 'UnityEngine.JointLimits' )
  var i1637 = data
  i1636.m_Min = i1637[0]
  i1636.m_Max = i1637[1]
  i1636.m_Bounciness = i1637[2]
  i1636.m_BounceMinVelocity = i1637[3]
  i1636.m_ContactDistance = i1637[4]
  i1636.minBounce = i1637[5]
  i1636.maxBounce = i1637[6]
  return i1636
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1638 = root || request.c( 'UnityEngine.JointDrive' )
  var i1639 = data
  i1638.m_PositionSpring = i1639[0]
  i1638.m_PositionDamper = i1639[1]
  i1638.m_MaximumForce = i1639[2]
  i1638.m_UseAcceleration = i1639[3]
  return i1638
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1640 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1641 = data
  i1640.m_Spring = i1641[0]
  i1640.m_Damper = i1641[1]
  return i1640
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1642 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1643 = data
  i1642.m_Limit = i1643[0]
  i1642.m_Bounciness = i1643[1]
  i1642.m_ContactDistance = i1643[2]
  return i1642
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1644 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1645 = data
  i1644.m_ExtremumSlip = i1645[0]
  i1644.m_ExtremumValue = i1645[1]
  i1644.m_AsymptoteSlip = i1645[2]
  i1644.m_AsymptoteValue = i1645[3]
  i1644.m_Stiffness = i1645[4]
  return i1644
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1646 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1647 = data
  i1646.m_LowerAngle = i1647[0]
  i1646.m_UpperAngle = i1647[1]
  return i1646
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1648 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1649 = data
  i1648.m_MotorSpeed = i1649[0]
  i1648.m_MaximumMotorTorque = i1649[1]
  return i1648
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1650 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1651 = data
  i1650.m_DampingRatio = i1651[0]
  i1650.m_Frequency = i1651[1]
  i1650.m_Angle = i1651[2]
  return i1650
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1652 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1653 = data
  i1652.m_LowerTranslation = i1653[0]
  i1652.m_UpperTranslation = i1653[1]
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1655 = data
  i1654.name = i1655[0]
  i1654.width = i1655[1]
  i1654.height = i1655[2]
  i1654.mipmapCount = i1655[3]
  i1654.anisoLevel = i1655[4]
  i1654.filterMode = i1655[5]
  i1654.hdr = !!i1655[6]
  i1654.format = i1655[7]
  i1654.wrapMode = i1655[8]
  i1654.alphaIsTransparency = !!i1655[9]
  i1654.alphaSource = i1655[10]
  i1654.graphicsFormat = i1655[11]
  i1654.sRGBTexture = !!i1655[12]
  i1654.desiredColorSpace = i1655[13]
  i1654.wrapU = i1655[14]
  i1654.wrapV = i1655[15]
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1656 = root || new pc.UnityMaterial()
  var i1657 = data
  i1656.name = i1657[0]
  request.r(i1657[1], i1657[2], 0, i1656, 'shader')
  i1656.renderQueue = i1657[3]
  i1656.enableInstancing = !!i1657[4]
  var i1659 = i1657[5]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1659[i + 0]) );
  }
  i1656.floatParameters = i1658
  var i1661 = i1657[6]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1661[i + 0]) );
  }
  i1656.colorParameters = i1660
  var i1663 = i1657[7]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1663[i + 0]) );
  }
  i1656.vectorParameters = i1662
  var i1665 = i1657[8]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 1) {
    i1664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1665[i + 0]) );
  }
  i1656.textureParameters = i1664
  var i1667 = i1657[9]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1667[i + 0]) );
  }
  i1656.materialFlags = i1666
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1671 = data
  i1670.name = i1671[0]
  i1670.value = i1671[1]
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1675 = data
  i1674.name = i1675[0]
  i1674.value = new pc.Color(i1675[1], i1675[2], i1675[3], i1675[4])
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1679 = data
  i1678.name = i1679[0]
  i1678.value = new pc.Vec4( i1679[1], i1679[2], i1679[3], i1679[4] )
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1683 = data
  i1682.name = i1683[0]
  request.r(i1683[1], i1683[2], 0, i1682, 'value')
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1687 = data
  i1686.name = i1687[0]
  i1686.enabled = !!i1687[1]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1689 = data
  i1688.name = i1689[0]
  i1688.index = i1689[1]
  i1688.startup = !!i1689[2]
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1691 = data
  i1690.position = new pc.Vec3( i1691[0], i1691[1], i1691[2] )
  i1690.scale = new pc.Vec3( i1691[3], i1691[4], i1691[5] )
  i1690.rotation = new pc.Quat(i1691[6], i1691[7], i1691[8], i1691[9])
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1693 = data
  i1692.aspect = i1693[0]
  i1692.orthographic = !!i1693[1]
  i1692.orthographicSize = i1693[2]
  i1692.backgroundColor = new pc.Color(i1693[3], i1693[4], i1693[5], i1693[6])
  i1692.nearClipPlane = i1693[7]
  i1692.farClipPlane = i1693[8]
  i1692.fieldOfView = i1693[9]
  i1692.depth = i1693[10]
  i1692.clearFlags = i1693[11]
  i1692.cullingMask = i1693[12]
  i1692.rect = i1693[13]
  request.r(i1693[14], i1693[15], 0, i1692, 'targetTexture')
  i1692.usePhysicalProperties = !!i1693[16]
  i1692.focalLength = i1693[17]
  i1692.sensorSize = new pc.Vec2( i1693[18], i1693[19] )
  i1692.lensShift = new pc.Vec2( i1693[20], i1693[21] )
  i1692.gateFit = i1693[22]
  i1692.commandBufferCount = i1693[23]
  i1692.cameraType = i1693[24]
  i1692.enabled = !!i1693[25]
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1695 = data
  i1694.name = i1695[0]
  i1694.tagId = i1695[1]
  i1694.enabled = !!i1695[2]
  i1694.isStatic = !!i1695[3]
  i1694.layer = i1695[4]
  return i1694
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1696 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1697 = data
  request.r(i1697[0], i1697[1], 0, i1696, 'm_FirstSelected')
  i1696.m_sendNavigationEvents = !!i1697[2]
  i1696.m_DragThreshold = i1697[3]
  return i1696
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1698 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1699 = data
  i1698.m_HorizontalAxis = i1699[0]
  i1698.m_VerticalAxis = i1699[1]
  i1698.m_SubmitButton = i1699[2]
  i1698.m_CancelButton = i1699[3]
  i1698.m_InputActionsPerSecond = i1699[4]
  i1698.m_RepeatDelay = i1699[5]
  i1698.m_ForceModuleActive = !!i1699[6]
  i1698.m_SendPointerHoverToParent = !!i1699[7]
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1701 = data
  i1700.pivot = new pc.Vec2( i1701[0], i1701[1] )
  i1700.anchorMin = new pc.Vec2( i1701[2], i1701[3] )
  i1700.anchorMax = new pc.Vec2( i1701[4], i1701[5] )
  i1700.sizeDelta = new pc.Vec2( i1701[6], i1701[7] )
  i1700.anchoredPosition3D = new pc.Vec3( i1701[8], i1701[9], i1701[10] )
  i1700.rotation = new pc.Quat(i1701[11], i1701[12], i1701[13], i1701[14])
  i1700.scale = new pc.Vec3( i1701[15], i1701[16], i1701[17] )
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1703 = data
  i1702.planeDistance = i1703[0]
  i1702.referencePixelsPerUnit = i1703[1]
  i1702.isFallbackOverlay = !!i1703[2]
  i1702.renderMode = i1703[3]
  i1702.renderOrder = i1703[4]
  i1702.sortingLayerName = i1703[5]
  i1702.sortingOrder = i1703[6]
  i1702.scaleFactor = i1703[7]
  request.r(i1703[8], i1703[9], 0, i1702, 'worldCamera')
  i1702.overrideSorting = !!i1703[10]
  i1702.pixelPerfect = !!i1703[11]
  i1702.targetDisplay = i1703[12]
  i1702.overridePixelPerfect = !!i1703[13]
  i1702.enabled = !!i1703[14]
  return i1702
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1704 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1705 = data
  i1704.m_UiScaleMode = i1705[0]
  i1704.m_ReferencePixelsPerUnit = i1705[1]
  i1704.m_ScaleFactor = i1705[2]
  i1704.m_ReferenceResolution = new pc.Vec2( i1705[3], i1705[4] )
  i1704.m_ScreenMatchMode = i1705[5]
  i1704.m_MatchWidthOrHeight = i1705[6]
  i1704.m_PhysicalUnit = i1705[7]
  i1704.m_FallbackScreenDPI = i1705[8]
  i1704.m_DefaultSpriteDPI = i1705[9]
  i1704.m_DynamicPixelsPerUnit = i1705[10]
  i1704.m_PresetInfoIsWorld = !!i1705[11]
  return i1704
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1706 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1707 = data
  i1706.m_IgnoreReversedGraphics = !!i1707[0]
  i1706.m_BlockingObjects = i1707[1]
  i1706.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1707[2] )
  return i1706
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1708 = root || request.c( 'LunaManager' )
  var i1709 = data
  var i1711 = i1709[0]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 2) {
  request.r(i1711[i + 0], i1711[i + 1], 2, i1710, '')
  }
  i1708.lstBtnInstall = i1710
  request.r(i1709[1], i1709[2], 0, i1708, 'WinGO')
  request.r(i1709[3], i1709[4], 0, i1708, 'LoseGO')
  request.r(i1709[5], i1709[6], 0, i1708, 'StartCard')
  request.r(i1709[7], i1709[8], 0, i1708, 'EndCard')
  request.r(i1709[9], i1709[10], 0, i1708, 'Parent')
  i1708.isDrag = !!i1709[11]
  i1708.timeDrag = i1709[12]
  i1708.countPlay = i1709[13]
  i1708.countPlayFinal = i1709[14]
  i1708.countPlayMax = i1709[15]
  i1708.timeDropFinal = i1709[16]
  i1708.colorBG = new pc.Color(i1709[17], i1709[18], i1709[19], i1709[20])
  request.r(i1709[21], i1709[22], 0, i1708, 'texture2D')
  request.r(i1709[23], i1709[24], 0, i1708, 'rawImageBG')
  request.r(i1709[25], i1709[26], 0, i1708, 'MSSGirl')
  request.r(i1709[27], i1709[28], 0, i1708, 'MSSBoy')
  request.r(i1709[29], i1709[30], 0, i1708, 'MSSGroom')
  request.r(i1709[31], i1709[32], 0, i1708, 'MSSBride')
  request.r(i1709[33], i1709[34], 0, i1708, 'textProgess')
  request.r(i1709[35], i1709[36], 0, i1708, 'imgProgess')
  request.r(i1709[37], i1709[38], 0, i1708, 'timeText')
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1715 = data
  i1714.cullTransparentMesh = !!i1715[0]
  return i1714
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1716 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1717 = data
  request.r(i1717[0], i1717[1], 0, i1716, 'm_Texture')
  i1716.m_UVRect = UnityEngine.Rect.MinMaxRect(i1717[2], i1717[3], i1717[4], i1717[5])
  i1716.m_Maskable = !!i1717[6]
  request.r(i1717[7], i1717[8], 0, i1716, 'm_Material')
  i1716.m_Color = new pc.Color(i1717[9], i1717[10], i1717[11], i1717[12])
  i1716.m_RaycastTarget = !!i1717[13]
  i1716.m_RaycastPadding = new pc.Vec4( i1717[14], i1717[15], i1717[16], i1717[17] )
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1719 = data
  request.r(i1719[0], i1719[1], 0, i1718, 'clip')
  request.r(i1719[2], i1719[3], 0, i1718, 'outputAudioMixerGroup')
  i1718.playOnAwake = !!i1719[4]
  i1718.loop = !!i1719[5]
  i1718.time = i1719[6]
  i1718.volume = i1719[7]
  i1718.pitch = i1719[8]
  i1718.enabled = !!i1719[9]
  return i1718
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1720 = root || request.c( 'UnityEngine.UI.Image' )
  var i1721 = data
  request.r(i1721[0], i1721[1], 0, i1720, 'm_Sprite')
  i1720.m_Type = i1721[2]
  i1720.m_PreserveAspect = !!i1721[3]
  i1720.m_FillCenter = !!i1721[4]
  i1720.m_FillMethod = i1721[5]
  i1720.m_FillAmount = i1721[6]
  i1720.m_FillClockwise = !!i1721[7]
  i1720.m_FillOrigin = i1721[8]
  i1720.m_UseSpriteMesh = !!i1721[9]
  i1720.m_PixelsPerUnitMultiplier = i1721[10]
  i1720.m_Maskable = !!i1721[11]
  request.r(i1721[12], i1721[13], 0, i1720, 'm_Material')
  i1720.m_Color = new pc.Color(i1721[14], i1721[15], i1721[16], i1721[17])
  i1720.m_RaycastTarget = !!i1721[18]
  i1720.m_RaycastPadding = new pc.Vec4( i1721[19], i1721[20], i1721[21], i1721[22] )
  return i1720
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1722 = root || request.c( 'DropZone' )
  var i1723 = data
  i1722.idDrop = i1723[0]
  var i1725 = i1723[1]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 2) {
  request.r(i1725[i + 0], i1725[i + 1], 2, i1724, '')
  }
  i1722.steps = i1724
  request.r(i1723[2], i1723[3], 0, i1722, 'stepLose')
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1729 = data
  i1728.usedByComposite = !!i1729[0]
  i1728.autoTiling = !!i1729[1]
  var i1731 = i1729[2]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
  var i1733 = i1731[i + 0]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 2) {
    i1732.push( new pc.Vec2( i1733[i + 0], i1733[i + 1] ) );
  }
    i1730.push( i1732 );
  }
  i1728.points = i1730
  i1728.enabled = !!i1729[3]
  i1728.isTrigger = !!i1729[4]
  i1728.usedByEffector = !!i1729[5]
  i1728.density = i1729[6]
  i1728.offset = new pc.Vec2( i1729[7], i1729[8] )
  request.r(i1729[9], i1729[10], 0, i1728, 'material')
  return i1728
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1740 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1741 = data
  request.r(i1741[0], i1741[1], 0, i1740, 'skeletonDataAsset')
  request.r(i1741[2], i1741[3], 0, i1740, 'additiveMaterial')
  request.r(i1741[4], i1741[5], 0, i1740, 'multiplyMaterial')
  request.r(i1741[6], i1741[7], 0, i1740, 'screenMaterial')
  i1740.initialSkinName = i1741[8]
  i1740.initialFlipX = !!i1741[9]
  i1740.initialFlipY = !!i1741[10]
  i1740.startingAnimation = i1741[11]
  i1740.startingLoop = !!i1741[12]
  i1740.timeScale = i1741[13]
  i1740.freeze = !!i1741[14]
  i1740.layoutScaleMode = i1741[15]
  i1740.updateWhenInvisible = i1741[16]
  i1740.allowMultipleCanvasRenderers = !!i1741[17]
  var i1743 = i1741[18]
  var i1742 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1743.length; i += 2) {
  request.r(i1743[i + 0], i1743[i + 1], 1, i1742, '')
  }
  i1740.canvasRenderers = i1742
  i1740.enableSeparatorSlots = !!i1741[19]
  i1740.updateSeparatorPartLocation = !!i1741[20]
  i1740.updateSeparatorPartScale = !!i1741[21]
  i1740.disableMeshAssignmentOnOverride = !!i1741[22]
  i1740.referenceSize = new pc.Vec2( i1741[23], i1741[24] )
  i1740.referenceScale = i1741[25]
  i1740.rectTransformSize = new pc.Vec2( i1741[26], i1741[27] )
  i1740.editReferenceRect = !!i1741[28]
  var i1745 = i1741[29]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.push( i1745[i + 0] );
  }
  i1740.separatorSlotNames = i1744
  var i1747 = i1741[30]
  var i1746 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1747.length; i += 2) {
  request.r(i1747[i + 0], i1747[i + 1], 1, i1746, '')
  }
  i1740.separatorParts = i1746
  i1740.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1741[31], i1740.meshGenerator)
  i1740.updateTiming = i1741[32]
  i1740.unscaledTime = !!i1741[33]
  i1740.m_Maskable = !!i1741[34]
  request.r(i1741[35], i1741[36], 0, i1740, 'm_Material')
  i1740.m_Color = new pc.Color(i1741[37], i1741[38], i1741[39], i1741[40])
  i1740.m_RaycastTarget = !!i1741[41]
  i1740.m_RaycastPadding = new pc.Vec4( i1741[42], i1741[43], i1741[44], i1741[45] )
  return i1740
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1754 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1755 = data
  i1754.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1755[0], i1754.settings)
  return i1754
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1756 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1757 = data
  i1756.useClipping = !!i1757[0]
  i1756.zSpacing = i1757[1]
  i1756.pmaVertexColors = !!i1757[2]
  i1756.tintBlack = !!i1757[3]
  i1756.canvasGroupTintBlack = !!i1757[4]
  i1756.calculateTangents = !!i1757[5]
  i1756.addNormals = !!i1757[6]
  i1756.immutableTriangles = !!i1757[7]
  return i1756
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i1758 = root || request.c( 'MixSkeletonSkin' )
  var i1759 = data
  request.r(i1759[0], i1759[1], 0, i1758, 'skeletonAnimation')
  var i1761 = i1759[2]
  var i1760 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.add(i1761[i + 0]);
  }
  i1758.skinNames = i1760
  i1758.defaultAnim = i1759[3]
  return i1758
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1764 = root || request.c( 'DraggableItem' )
  var i1765 = data
  i1764.idDrag = i1765[0]
  i1764.isProcess = !!i1765[1]
  i1764.isLose = !!i1765[2]
  i1764.isHide = !!i1765[3]
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1767 = data
  i1766.m_Alpha = i1767[0]
  i1766.m_Interactable = !!i1767[1]
  i1766.m_BlocksRaycasts = !!i1767[2]
  i1766.m_IgnoreParentGroups = !!i1767[3]
  i1766.enabled = !!i1767[4]
  return i1766
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i1768 = root || request.c( 'ClickItem' )
  var i1769 = data
  var i1771 = i1769[0]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 2) {
  request.r(i1771[i + 0], i1771[i + 1], 2, i1770, '')
  }
  i1768.steps = i1770
  i1768.currentStep = i1769[1]
  i1768.isProcess = !!i1769[2]
  return i1768
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1772 = root || request.c( 'UnityEngine.UI.Button' )
  var i1773 = data
  i1772.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1773[0], i1772.m_OnClick)
  i1772.m_Navigation = request.d('UnityEngine.UI.Navigation', i1773[1], i1772.m_Navigation)
  i1772.m_Transition = i1773[2]
  i1772.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1773[3], i1772.m_Colors)
  i1772.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1773[4], i1772.m_SpriteState)
  i1772.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1773[5], i1772.m_AnimationTriggers)
  i1772.m_Interactable = !!i1773[6]
  request.r(i1773[7], i1773[8], 0, i1772, 'm_TargetGraphic')
  return i1772
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1774 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1775 = data
  i1774.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1775[0], i1774.m_PersistentCalls)
  return i1774
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1776 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1777 = data
  var i1779 = i1777[0]
  var i1778 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.add(request.d('UnityEngine.Events.PersistentCall', i1779[i + 0]));
  }
  i1776.m_Calls = i1778
  return i1776
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1782 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1783 = data
  request.r(i1783[0], i1783[1], 0, i1782, 'm_Target')
  i1782.m_TargetAssemblyTypeName = i1783[2]
  i1782.m_MethodName = i1783[3]
  i1782.m_Mode = i1783[4]
  i1782.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1783[5], i1782.m_Arguments)
  i1782.m_CallState = i1783[6]
  return i1782
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1784 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1785 = data
  i1784.m_Mode = i1785[0]
  i1784.m_WrapAround = !!i1785[1]
  request.r(i1785[2], i1785[3], 0, i1784, 'm_SelectOnUp')
  request.r(i1785[4], i1785[5], 0, i1784, 'm_SelectOnDown')
  request.r(i1785[6], i1785[7], 0, i1784, 'm_SelectOnLeft')
  request.r(i1785[8], i1785[9], 0, i1784, 'm_SelectOnRight')
  return i1784
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1786 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1787 = data
  i1786.m_NormalColor = new pc.Color(i1787[0], i1787[1], i1787[2], i1787[3])
  i1786.m_HighlightedColor = new pc.Color(i1787[4], i1787[5], i1787[6], i1787[7])
  i1786.m_PressedColor = new pc.Color(i1787[8], i1787[9], i1787[10], i1787[11])
  i1786.m_SelectedColor = new pc.Color(i1787[12], i1787[13], i1787[14], i1787[15])
  i1786.m_DisabledColor = new pc.Color(i1787[16], i1787[17], i1787[18], i1787[19])
  i1786.m_ColorMultiplier = i1787[20]
  i1786.m_FadeDuration = i1787[21]
  return i1786
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1788 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1789 = data
  request.r(i1789[0], i1789[1], 0, i1788, 'm_HighlightedSprite')
  request.r(i1789[2], i1789[3], 0, i1788, 'm_PressedSprite')
  request.r(i1789[4], i1789[5], 0, i1788, 'm_SelectedSprite')
  request.r(i1789[6], i1789[7], 0, i1788, 'm_DisabledSprite')
  return i1788
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1790 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1791 = data
  i1790.m_NormalTrigger = i1791[0]
  i1790.m_HighlightedTrigger = i1791[1]
  i1790.m_PressedTrigger = i1791[2]
  i1790.m_SelectedTrigger = i1791[3]
  i1790.m_DisabledTrigger = i1791[4]
  return i1790
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1792 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1793 = data
  i1792.targetIsSelf = !!i1793[0]
  request.r(i1793[1], i1793[2], 0, i1792, 'targetGO')
  i1792.tweenTargetIsTargetGO = !!i1793[3]
  i1792.delay = i1793[4]
  i1792.duration = i1793[5]
  i1792.easeType = i1793[6]
  i1792.easeCurve = new pc.AnimationCurve( { keys_flow: i1793[7] } )
  i1792.loopType = i1793[8]
  i1792.loops = i1793[9]
  i1792.id = i1793[10]
  i1792.isRelative = !!i1793[11]
  i1792.isFrom = !!i1793[12]
  i1792.isIndependentUpdate = !!i1793[13]
  i1792.autoKill = !!i1793[14]
  i1792.autoGenerate = !!i1793[15]
  i1792.isActive = !!i1793[16]
  i1792.isValid = !!i1793[17]
  request.r(i1793[18], i1793[19], 0, i1792, 'target')
  i1792.animationType = i1793[20]
  i1792.targetType = i1793[21]
  i1792.forcedTargetType = i1793[22]
  i1792.autoPlay = !!i1793[23]
  i1792.useTargetAsV3 = !!i1793[24]
  i1792.endValueFloat = i1793[25]
  i1792.endValueV3 = new pc.Vec3( i1793[26], i1793[27], i1793[28] )
  i1792.endValueV2 = new pc.Vec2( i1793[29], i1793[30] )
  i1792.endValueColor = new pc.Color(i1793[31], i1793[32], i1793[33], i1793[34])
  i1792.endValueString = i1793[35]
  i1792.endValueRect = UnityEngine.Rect.MinMaxRect(i1793[36], i1793[37], i1793[38], i1793[39])
  request.r(i1793[40], i1793[41], 0, i1792, 'endValueTransform')
  i1792.optionalBool0 = !!i1793[42]
  i1792.optionalBool1 = !!i1793[43]
  i1792.optionalFloat0 = i1793[44]
  i1792.optionalInt0 = i1793[45]
  i1792.optionalRotationMode = i1793[46]
  i1792.optionalScrambleMode = i1793[47]
  i1792.optionalShakeRandomnessMode = i1793[48]
  i1792.optionalString = i1793[49]
  i1792.updateType = i1793[50]
  i1792.isSpeedBased = !!i1793[51]
  i1792.hasOnStart = !!i1793[52]
  i1792.hasOnPlay = !!i1793[53]
  i1792.hasOnUpdate = !!i1793[54]
  i1792.hasOnStepComplete = !!i1793[55]
  i1792.hasOnComplete = !!i1793[56]
  i1792.hasOnTweenCreated = !!i1793[57]
  i1792.hasOnRewind = !!i1793[58]
  i1792.onStart = request.d('UnityEngine.Events.UnityEvent', i1793[59], i1792.onStart)
  i1792.onPlay = request.d('UnityEngine.Events.UnityEvent', i1793[60], i1792.onPlay)
  i1792.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1793[61], i1792.onUpdate)
  i1792.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1793[62], i1792.onStepComplete)
  i1792.onComplete = request.d('UnityEngine.Events.UnityEvent', i1793[63], i1792.onComplete)
  i1792.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1793[64], i1792.onTweenCreated)
  i1792.onRewind = request.d('UnityEngine.Events.UnityEvent', i1793[65], i1792.onRewind)
  return i1792
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1795 = data
  i1794.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1795[0], i1794.m_PersistentCalls)
  return i1794
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1797 = data
  request.r(i1797[0], i1797[1], 0, i1796, 'm_ObjectArgument')
  i1796.m_ObjectArgumentAssemblyTypeName = i1797[2]
  i1796.m_IntArgument = i1797[3]
  i1796.m_FloatArgument = i1797[4]
  i1796.m_StringArgument = i1797[5]
  i1796.m_BoolArgument = !!i1797[6]
  return i1796
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1798 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1799 = data
  i1798.m_hasFontAssetChanged = !!i1799[0]
  request.r(i1799[1], i1799[2], 0, i1798, 'm_baseMaterial')
  i1798.m_maskOffset = new pc.Vec4( i1799[3], i1799[4], i1799[5], i1799[6] )
  i1798.m_text = i1799[7]
  i1798.m_isRightToLeft = !!i1799[8]
  request.r(i1799[9], i1799[10], 0, i1798, 'm_fontAsset')
  request.r(i1799[11], i1799[12], 0, i1798, 'm_sharedMaterial')
  var i1801 = i1799[13]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 2) {
  request.r(i1801[i + 0], i1801[i + 1], 2, i1800, '')
  }
  i1798.m_fontSharedMaterials = i1800
  request.r(i1799[14], i1799[15], 0, i1798, 'm_fontMaterial')
  var i1803 = i1799[16]
  var i1802 = []
  for(var i = 0; i < i1803.length; i += 2) {
  request.r(i1803[i + 0], i1803[i + 1], 2, i1802, '')
  }
  i1798.m_fontMaterials = i1802
  i1798.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1799[17], i1799[18], i1799[19], i1799[20])
  i1798.m_fontColor = new pc.Color(i1799[21], i1799[22], i1799[23], i1799[24])
  i1798.m_enableVertexGradient = !!i1799[25]
  i1798.m_colorMode = i1799[26]
  i1798.m_fontColorGradient = request.d('TMPro.VertexGradient', i1799[27], i1798.m_fontColorGradient)
  request.r(i1799[28], i1799[29], 0, i1798, 'm_fontColorGradientPreset')
  request.r(i1799[30], i1799[31], 0, i1798, 'm_spriteAsset')
  i1798.m_tintAllSprites = !!i1799[32]
  request.r(i1799[33], i1799[34], 0, i1798, 'm_StyleSheet')
  i1798.m_TextStyleHashCode = i1799[35]
  i1798.m_overrideHtmlColors = !!i1799[36]
  i1798.m_faceColor = UnityEngine.Color32.ConstructColor(i1799[37], i1799[38], i1799[39], i1799[40])
  i1798.m_fontSize = i1799[41]
  i1798.m_fontSizeBase = i1799[42]
  i1798.m_fontWeight = i1799[43]
  i1798.m_enableAutoSizing = !!i1799[44]
  i1798.m_fontSizeMin = i1799[45]
  i1798.m_fontSizeMax = i1799[46]
  i1798.m_fontStyle = i1799[47]
  i1798.m_HorizontalAlignment = i1799[48]
  i1798.m_VerticalAlignment = i1799[49]
  i1798.m_textAlignment = i1799[50]
  i1798.m_characterSpacing = i1799[51]
  i1798.m_wordSpacing = i1799[52]
  i1798.m_lineSpacing = i1799[53]
  i1798.m_lineSpacingMax = i1799[54]
  i1798.m_paragraphSpacing = i1799[55]
  i1798.m_charWidthMaxAdj = i1799[56]
  i1798.m_enableWordWrapping = !!i1799[57]
  i1798.m_wordWrappingRatios = i1799[58]
  i1798.m_overflowMode = i1799[59]
  request.r(i1799[60], i1799[61], 0, i1798, 'm_linkedTextComponent')
  request.r(i1799[62], i1799[63], 0, i1798, 'parentLinkedComponent')
  i1798.m_enableKerning = !!i1799[64]
  i1798.m_enableExtraPadding = !!i1799[65]
  i1798.checkPaddingRequired = !!i1799[66]
  i1798.m_isRichText = !!i1799[67]
  i1798.m_parseCtrlCharacters = !!i1799[68]
  i1798.m_isOrthographic = !!i1799[69]
  i1798.m_isCullingEnabled = !!i1799[70]
  i1798.m_horizontalMapping = i1799[71]
  i1798.m_verticalMapping = i1799[72]
  i1798.m_uvLineOffset = i1799[73]
  i1798.m_geometrySortingOrder = i1799[74]
  i1798.m_IsTextObjectScaleStatic = !!i1799[75]
  i1798.m_VertexBufferAutoSizeReduction = !!i1799[76]
  i1798.m_useMaxVisibleDescender = !!i1799[77]
  i1798.m_pageToDisplay = i1799[78]
  i1798.m_margin = new pc.Vec4( i1799[79], i1799[80], i1799[81], i1799[82] )
  i1798.m_isUsingLegacyAnimationComponent = !!i1799[83]
  i1798.m_isVolumetricText = !!i1799[84]
  i1798.m_Maskable = !!i1799[85]
  request.r(i1799[86], i1799[87], 0, i1798, 'm_Material')
  i1798.m_Color = new pc.Color(i1799[88], i1799[89], i1799[90], i1799[91])
  i1798.m_RaycastTarget = !!i1799[92]
  i1798.m_RaycastPadding = new pc.Vec4( i1799[93], i1799[94], i1799[95], i1799[96] )
  return i1798
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1806 = root || request.c( 'TMPro.VertexGradient' )
  var i1807 = data
  i1806.topLeft = new pc.Color(i1807[0], i1807[1], i1807[2], i1807[3])
  i1806.topRight = new pc.Color(i1807[4], i1807[5], i1807[6], i1807[7])
  i1806.bottomLeft = new pc.Color(i1807[8], i1807[9], i1807[10], i1807[11])
  i1806.bottomRight = new pc.Color(i1807[12], i1807[13], i1807[14], i1807[15])
  return i1806
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1809 = data
  i1808.m_ShowMaskGraphic = !!i1809[0]
  return i1808
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1810 = root || request.c( 'AudioController' )
  var i1811 = data
  request.r(i1811[0], i1811[1], 0, i1810, 'bgmSource')
  request.r(i1811[2], i1811[3], 0, i1810, 'sfxSource')
  var i1813 = i1811[4]
  var i1812 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.add(request.d('AudioEntry', i1813[i + 0]));
  }
  i1810.audioEntries = i1812
  return i1810
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i1816 = root || request.c( 'AudioEntry' )
  var i1817 = data
  i1816.key = i1817[0]
  request.r(i1817[1], i1817[2], 0, i1816, 'clip')
  i1816.volume = i1817[3]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1819 = data
  i1818.ambientIntensity = i1819[0]
  i1818.reflectionIntensity = i1819[1]
  i1818.ambientMode = i1819[2]
  i1818.ambientLight = new pc.Color(i1819[3], i1819[4], i1819[5], i1819[6])
  i1818.ambientSkyColor = new pc.Color(i1819[7], i1819[8], i1819[9], i1819[10])
  i1818.ambientGroundColor = new pc.Color(i1819[11], i1819[12], i1819[13], i1819[14])
  i1818.ambientEquatorColor = new pc.Color(i1819[15], i1819[16], i1819[17], i1819[18])
  i1818.fogColor = new pc.Color(i1819[19], i1819[20], i1819[21], i1819[22])
  i1818.fogEndDistance = i1819[23]
  i1818.fogStartDistance = i1819[24]
  i1818.fogDensity = i1819[25]
  i1818.fog = !!i1819[26]
  request.r(i1819[27], i1819[28], 0, i1818, 'skybox')
  i1818.fogMode = i1819[29]
  var i1821 = i1819[30]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1821[i + 0]) );
  }
  i1818.lightmaps = i1820
  i1818.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1819[31], i1818.lightProbes)
  i1818.lightmapsMode = i1819[32]
  i1818.mixedBakeMode = i1819[33]
  i1818.environmentLightingMode = i1819[34]
  i1818.ambientProbe = new pc.SphericalHarmonicsL2(i1819[35])
  i1818.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1819[36])
  i1818.useReferenceAmbientProbe = !!i1819[37]
  request.r(i1819[38], i1819[39], 0, i1818, 'customReflection')
  request.r(i1819[40], i1819[41], 0, i1818, 'defaultReflection')
  i1818.defaultReflectionMode = i1819[42]
  i1818.defaultReflectionResolution = i1819[43]
  i1818.sunLightObjectId = i1819[44]
  i1818.pixelLightCount = i1819[45]
  i1818.defaultReflectionHDR = !!i1819[46]
  i1818.hasLightDataAsset = !!i1819[47]
  i1818.hasManualGenerate = !!i1819[48]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1825 = data
  request.r(i1825[0], i1825[1], 0, i1824, 'lightmapColor')
  request.r(i1825[2], i1825[3], 0, i1824, 'lightmapDirection')
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1826 = root || new UnityEngine.LightProbes()
  var i1827 = data
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1835 = data
  var i1837 = i1835[0]
  var i1836 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1837[i + 0]));
  }
  i1834.ShaderCompilationErrors = i1836
  i1834.name = i1835[1]
  i1834.guid = i1835[2]
  var i1839 = i1835[3]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( i1839[i + 0] );
  }
  i1834.shaderDefinedKeywords = i1838
  var i1841 = i1835[4]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1841[i + 0]) );
  }
  i1834.passes = i1840
  var i1843 = i1835[5]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 1) {
    i1842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1843[i + 0]) );
  }
  i1834.usePasses = i1842
  var i1845 = i1835[6]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1845[i + 0]) );
  }
  i1834.defaultParameterValues = i1844
  request.r(i1835[7], i1835[8], 0, i1834, 'unityFallbackShader')
  i1834.readDepth = !!i1835[9]
  i1834.isCreatedByShaderGraph = !!i1835[10]
  i1834.disableBatching = !!i1835[11]
  i1834.compiled = !!i1835[12]
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1849 = data
  i1848.shaderName = i1849[0]
  i1848.errorMessage = i1849[1]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1852 = root || new pc.UnityShaderPass()
  var i1853 = data
  i1852.id = i1853[0]
  i1852.subShaderIndex = i1853[1]
  i1852.name = i1853[2]
  i1852.passType = i1853[3]
  i1852.grabPassTextureName = i1853[4]
  i1852.usePass = !!i1853[5]
  i1852.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1853[6], i1852.zTest)
  i1852.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1853[7], i1852.zWrite)
  i1852.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1853[8], i1852.culling)
  i1852.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1853[9], i1852.blending)
  i1852.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1853[10], i1852.alphaBlending)
  i1852.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1853[11], i1852.colorWriteMask)
  i1852.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1853[12], i1852.offsetUnits)
  i1852.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1853[13], i1852.offsetFactor)
  i1852.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1853[14], i1852.stencilRef)
  i1852.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1853[15], i1852.stencilReadMask)
  i1852.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1853[16], i1852.stencilWriteMask)
  i1852.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1853[17], i1852.stencilOp)
  i1852.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1853[18], i1852.stencilOpFront)
  i1852.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1853[19], i1852.stencilOpBack)
  var i1855 = i1853[20]
  var i1854 = []
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1855[i + 0]) );
  }
  i1852.tags = i1854
  var i1857 = i1853[21]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( i1857[i + 0] );
  }
  i1852.passDefinedKeywords = i1856
  var i1859 = i1853[22]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1859[i + 0]) );
  }
  i1852.passDefinedKeywordGroups = i1858
  var i1861 = i1853[23]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1861[i + 0]) );
  }
  i1852.variants = i1860
  var i1863 = i1853[24]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1863[i + 0]) );
  }
  i1852.excludedVariants = i1862
  i1852.hasDepthReader = !!i1853[25]
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1865 = data
  i1864.val = i1865[0]
  i1864.name = i1865[1]
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1867 = data
  i1866.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1867[0], i1866.src)
  i1866.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1867[1], i1866.dst)
  i1866.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1867[2], i1866.op)
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1869 = data
  i1868.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1869[0], i1868.pass)
  i1868.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1869[1], i1868.fail)
  i1868.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1869[2], i1868.zFail)
  i1868.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1869[3], i1868.comp)
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1873 = data
  i1872.name = i1873[0]
  i1872.value = i1873[1]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1877 = data
  var i1879 = i1877[0]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( i1879[i + 0] );
  }
  i1876.keywords = i1878
  i1876.hasDiscard = !!i1877[1]
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1883 = data
  i1882.passId = i1883[0]
  i1882.subShaderIndex = i1883[1]
  var i1885 = i1883[2]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( i1885[i + 0] );
  }
  i1882.keywords = i1884
  i1882.vertexProgram = i1883[3]
  i1882.fragmentProgram = i1883[4]
  i1882.exportedForWebGl2 = !!i1883[5]
  i1882.readDepth = !!i1883[6]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1889 = data
  request.r(i1889[0], i1889[1], 0, i1888, 'shader')
  i1888.pass = i1889[2]
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1893 = data
  i1892.name = i1893[0]
  i1892.type = i1893[1]
  i1892.value = new pc.Vec4( i1893[2], i1893[3], i1893[4], i1893[5] )
  i1892.textureValue = i1893[6]
  i1892.shaderPropertyFlag = i1893[7]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1895 = data
  i1894.name = i1895[0]
  request.r(i1895[1], i1895[2], 0, i1894, 'texture')
  i1894.aabb = i1895[3]
  i1894.vertices = i1895[4]
  i1894.triangles = i1895[5]
  i1894.textureRect = UnityEngine.Rect.MinMaxRect(i1895[6], i1895[7], i1895[8], i1895[9])
  i1894.packedRect = UnityEngine.Rect.MinMaxRect(i1895[10], i1895[11], i1895[12], i1895[13])
  i1894.border = new pc.Vec4( i1895[14], i1895[15], i1895[16], i1895[17] )
  i1894.transparency = i1895[18]
  i1894.bounds = i1895[19]
  i1894.pixelsPerUnit = i1895[20]
  i1894.textureWidth = i1895[21]
  i1894.textureHeight = i1895[22]
  i1894.nativeSize = new pc.Vec2( i1895[23], i1895[24] )
  i1894.pivot = new pc.Vec2( i1895[25], i1895[26] )
  i1894.textureRectOffset = new pc.Vec2( i1895[27], i1895[28] )
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1897 = data
  i1896.name = i1897[0]
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1899 = data
  i1898.name = i1899[0]
  i1898.ascent = i1899[1]
  i1898.originalLineHeight = i1899[2]
  i1898.fontSize = i1899[3]
  var i1901 = i1899[4]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1901[i + 0]) );
  }
  i1898.characterInfo = i1900
  request.r(i1899[5], i1899[6], 0, i1898, 'texture')
  i1898.originalFontSize = i1899[7]
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1905 = data
  i1904.index = i1905[0]
  i1904.advance = i1905[1]
  i1904.bearing = i1905[2]
  i1904.glyphWidth = i1905[3]
  i1904.glyphHeight = i1905[4]
  i1904.minX = i1905[5]
  i1904.maxX = i1905[6]
  i1904.minY = i1905[7]
  i1904.maxY = i1905[8]
  i1904.uvBottomLeftX = i1905[9]
  i1904.uvBottomLeftY = i1905[10]
  i1904.uvBottomRightX = i1905[11]
  i1904.uvBottomRightY = i1905[12]
  i1904.uvTopLeftX = i1905[13]
  i1904.uvTopLeftY = i1905[14]
  i1904.uvTopRightX = i1905[15]
  i1904.uvTopRightY = i1905[16]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1907 = data
  i1906.name = i1907[0]
  i1906.bytes64 = i1907[1]
  i1906.data = i1907[2]
  return i1906
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1908 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1909 = data
  var i1911 = i1909[0]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 2) {
  request.r(i1911[i + 0], i1911[i + 1], 2, i1910, '')
  }
  i1908.atlasAssets = i1910
  i1908.scale = i1909[1]
  request.r(i1909[2], i1909[3], 0, i1908, 'skeletonJSON')
  i1908.isUpgradingBlendModeMaterials = !!i1909[4]
  i1908.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1909[5], i1908.blendModeMaterials)
  var i1913 = i1909[6]
  var i1912 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1913.length; i += 2) {
  request.r(i1913[i + 0], i1913[i + 1], 1, i1912, '')
  }
  i1908.skeletonDataModifiers = i1912
  var i1915 = i1909[7]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( i1915[i + 0] );
  }
  i1908.fromAnimation = i1914
  var i1917 = i1909[8]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( i1917[i + 0] );
  }
  i1908.toAnimation = i1916
  i1908.duration = i1909[9]
  i1908.defaultMix = i1909[10]
  request.r(i1909[11], i1909[12], 0, i1908, 'controller')
  return i1908
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1920 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1921 = data
  i1920.applyAdditiveMaterial = !!i1921[0]
  var i1923 = i1921[1]
  var i1922 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1923[i + 0]));
  }
  i1920.additiveMaterials = i1922
  var i1925 = i1921[2]
  var i1924 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1925[i + 0]));
  }
  i1920.multiplyMaterials = i1924
  var i1927 = i1921[3]
  var i1926 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1927[i + 0]));
  }
  i1920.screenMaterials = i1926
  i1920.requiresBlendModeMaterials = !!i1921[4]
  return i1920
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1930 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1931 = data
  i1930.pageName = i1931[0]
  request.r(i1931[1], i1931[2], 0, i1930, 'material')
  return i1930
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1934 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1935 = data
  request.r(i1935[0], i1935[1], 0, i1934, 'atlasFile')
  var i1937 = i1935[2]
  var i1936 = []
  for(var i = 0; i < i1937.length; i += 2) {
  request.r(i1937[i + 0], i1937[i + 1], 2, i1936, '')
  }
  i1934.materials = i1936
  i1934.textureLoadingMode = i1935[3]
  request.r(i1935[4], i1935[5], 0, i1934, 'onDemandTextureLoader')
  return i1934
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1938 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1939 = data
  request.r(i1939[0], i1939[1], 0, i1938, 'atlas')
  i1938.normalStyle = i1939[2]
  i1938.normalSpacingOffset = i1939[3]
  i1938.boldStyle = i1939[4]
  i1938.boldSpacing = i1939[5]
  i1938.italicStyle = i1939[6]
  i1938.tabSize = i1939[7]
  i1938.hashCode = i1939[8]
  request.r(i1939[9], i1939[10], 0, i1938, 'material')
  i1938.materialHashCode = i1939[11]
  i1938.m_Version = i1939[12]
  i1938.m_SourceFontFileGUID = i1939[13]
  request.r(i1939[14], i1939[15], 0, i1938, 'm_SourceFontFile_EditorRef')
  request.r(i1939[16], i1939[17], 0, i1938, 'm_SourceFontFile')
  i1938.m_AtlasPopulationMode = i1939[18]
  i1938.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1939[19], i1938.m_FaceInfo)
  var i1941 = i1939[20]
  var i1940 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.add(request.d('UnityEngine.TextCore.Glyph', i1941[i + 0]));
  }
  i1938.m_GlyphTable = i1940
  var i1943 = i1939[21]
  var i1942 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.add(request.d('TMPro.TMP_Character', i1943[i + 0]));
  }
  i1938.m_CharacterTable = i1942
  var i1945 = i1939[22]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 2) {
  request.r(i1945[i + 0], i1945[i + 1], 2, i1944, '')
  }
  i1938.m_AtlasTextures = i1944
  i1938.m_AtlasTextureIndex = i1939[23]
  i1938.m_IsMultiAtlasTexturesEnabled = !!i1939[24]
  i1938.m_ClearDynamicDataOnBuild = !!i1939[25]
  var i1947 = i1939[26]
  var i1946 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.add(request.d('UnityEngine.TextCore.GlyphRect', i1947[i + 0]));
  }
  i1938.m_UsedGlyphRects = i1946
  var i1949 = i1939[27]
  var i1948 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.add(request.d('UnityEngine.TextCore.GlyphRect', i1949[i + 0]));
  }
  i1938.m_FreeGlyphRects = i1948
  i1938.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1939[28], i1938.m_fontInfo)
  i1938.m_AtlasWidth = i1939[29]
  i1938.m_AtlasHeight = i1939[30]
  i1938.m_AtlasPadding = i1939[31]
  i1938.m_AtlasRenderMode = i1939[32]
  var i1951 = i1939[33]
  var i1950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.add(request.d('TMPro.TMP_Glyph', i1951[i + 0]));
  }
  i1938.m_glyphInfoList = i1950
  i1938.m_KerningTable = request.d('TMPro.KerningTable', i1939[34], i1938.m_KerningTable)
  i1938.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1939[35], i1938.m_FontFeatureTable)
  var i1953 = i1939[36]
  var i1952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1953.length; i += 2) {
  request.r(i1953[i + 0], i1953[i + 1], 1, i1952, '')
  }
  i1938.fallbackFontAssets = i1952
  var i1955 = i1939[37]
  var i1954 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1955.length; i += 2) {
  request.r(i1955[i + 0], i1955[i + 1], 1, i1954, '')
  }
  i1938.m_FallbackFontAssetTable = i1954
  i1938.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1939[38], i1938.m_CreationSettings)
  var i1957 = i1939[39]
  var i1956 = []
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.push( request.d('TMPro.TMP_FontWeightPair', i1957[i + 0]) );
  }
  i1938.m_FontWeightTable = i1956
  var i1959 = i1939[40]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.push( request.d('TMPro.TMP_FontWeightPair', i1959[i + 0]) );
  }
  i1938.fontWeights = i1958
  return i1938
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1960 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1961 = data
  i1960.m_FaceIndex = i1961[0]
  i1960.m_FamilyName = i1961[1]
  i1960.m_StyleName = i1961[2]
  i1960.m_PointSize = i1961[3]
  i1960.m_Scale = i1961[4]
  i1960.m_UnitsPerEM = i1961[5]
  i1960.m_LineHeight = i1961[6]
  i1960.m_AscentLine = i1961[7]
  i1960.m_CapLine = i1961[8]
  i1960.m_MeanLine = i1961[9]
  i1960.m_Baseline = i1961[10]
  i1960.m_DescentLine = i1961[11]
  i1960.m_SuperscriptOffset = i1961[12]
  i1960.m_SuperscriptSize = i1961[13]
  i1960.m_SubscriptOffset = i1961[14]
  i1960.m_SubscriptSize = i1961[15]
  i1960.m_UnderlineOffset = i1961[16]
  i1960.m_UnderlineThickness = i1961[17]
  i1960.m_StrikethroughOffset = i1961[18]
  i1960.m_StrikethroughThickness = i1961[19]
  i1960.m_TabWidth = i1961[20]
  return i1960
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1964 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1965 = data
  i1964.m_Index = i1965[0]
  i1964.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1965[1], i1964.m_Metrics)
  i1964.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1965[2], i1964.m_GlyphRect)
  i1964.m_Scale = i1965[3]
  i1964.m_AtlasIndex = i1965[4]
  i1964.m_ClassDefinitionType = i1965[5]
  return i1964
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1966 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1967 = data
  i1966.m_Width = i1967[0]
  i1966.m_Height = i1967[1]
  i1966.m_HorizontalBearingX = i1967[2]
  i1966.m_HorizontalBearingY = i1967[3]
  i1966.m_HorizontalAdvance = i1967[4]
  return i1966
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1968 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1969 = data
  i1968.m_X = i1969[0]
  i1968.m_Y = i1969[1]
  i1968.m_Width = i1969[2]
  i1968.m_Height = i1969[3]
  return i1968
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1972 = root || request.c( 'TMPro.TMP_Character' )
  var i1973 = data
  i1972.m_ElementType = i1973[0]
  i1972.m_Unicode = i1973[1]
  i1972.m_GlyphIndex = i1973[2]
  i1972.m_Scale = i1973[3]
  return i1972
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1978 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1979 = data
  i1978.Name = i1979[0]
  i1978.PointSize = i1979[1]
  i1978.Scale = i1979[2]
  i1978.CharacterCount = i1979[3]
  i1978.LineHeight = i1979[4]
  i1978.Baseline = i1979[5]
  i1978.Ascender = i1979[6]
  i1978.CapHeight = i1979[7]
  i1978.Descender = i1979[8]
  i1978.CenterLine = i1979[9]
  i1978.SuperscriptOffset = i1979[10]
  i1978.SubscriptOffset = i1979[11]
  i1978.SubSize = i1979[12]
  i1978.Underline = i1979[13]
  i1978.UnderlineThickness = i1979[14]
  i1978.strikethrough = i1979[15]
  i1978.strikethroughThickness = i1979[16]
  i1978.TabWidth = i1979[17]
  i1978.Padding = i1979[18]
  i1978.AtlasWidth = i1979[19]
  i1978.AtlasHeight = i1979[20]
  return i1978
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1982 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1983 = data
  i1982.id = i1983[0]
  i1982.x = i1983[1]
  i1982.y = i1983[2]
  i1982.width = i1983[3]
  i1982.height = i1983[4]
  i1982.xOffset = i1983[5]
  i1982.yOffset = i1983[6]
  i1982.xAdvance = i1983[7]
  i1982.scale = i1983[8]
  return i1982
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1984 = root || request.c( 'TMPro.KerningTable' )
  var i1985 = data
  var i1987 = i1985[0]
  var i1986 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.add(request.d('TMPro.KerningPair', i1987[i + 0]));
  }
  i1984.kerningPairs = i1986
  return i1984
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1990 = root || request.c( 'TMPro.KerningPair' )
  var i1991 = data
  i1990.xOffset = i1991[0]
  i1990.m_FirstGlyph = i1991[1]
  i1990.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1991[2], i1990.m_FirstGlyphAdjustments)
  i1990.m_SecondGlyph = i1991[3]
  i1990.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1991[4], i1990.m_SecondGlyphAdjustments)
  i1990.m_IgnoreSpacingAdjustments = !!i1991[5]
  return i1990
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1992 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1993 = data
  var i1995 = i1993[0]
  var i1994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1995.length; i += 1) {
    i1994.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1995[i + 0]));
  }
  i1992.m_GlyphPairAdjustmentRecords = i1994
  return i1992
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1998 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1999 = data
  i1998.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1999[0], i1998.m_FirstAdjustmentRecord)
  i1998.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1999[1], i1998.m_SecondAdjustmentRecord)
  i1998.m_FeatureLookupFlags = i1999[2]
  return i1998
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2002 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2003 = data
  i2002.sourceFontFileName = i2003[0]
  i2002.sourceFontFileGUID = i2003[1]
  i2002.pointSizeSamplingMode = i2003[2]
  i2002.pointSize = i2003[3]
  i2002.padding = i2003[4]
  i2002.packingMode = i2003[5]
  i2002.atlasWidth = i2003[6]
  i2002.atlasHeight = i2003[7]
  i2002.characterSetSelectionMode = i2003[8]
  i2002.characterSequence = i2003[9]
  i2002.referencedFontAssetGUID = i2003[10]
  i2002.referencedTextAssetGUID = i2003[11]
  i2002.fontStyle = i2003[12]
  i2002.fontStyleModifier = i2003[13]
  i2002.renderMode = i2003[14]
  i2002.includeFontFeatures = !!i2003[15]
  return i2002
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2006 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2007 = data
  request.r(i2007[0], i2007[1], 0, i2006, 'regularTypeface')
  request.r(i2007[2], i2007[3], 0, i2006, 'italicTypeface')
  return i2006
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2008 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2009 = data
  i2008.useSafeMode = !!i2009[0]
  i2008.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2009[1], i2008.safeModeOptions)
  i2008.timeScale = i2009[2]
  i2008.unscaledTimeScale = i2009[3]
  i2008.useSmoothDeltaTime = !!i2009[4]
  i2008.maxSmoothUnscaledTime = i2009[5]
  i2008.rewindCallbackMode = i2009[6]
  i2008.showUnityEditorReport = !!i2009[7]
  i2008.logBehaviour = i2009[8]
  i2008.drawGizmos = !!i2009[9]
  i2008.defaultRecyclable = !!i2009[10]
  i2008.defaultAutoPlay = i2009[11]
  i2008.defaultUpdateType = i2009[12]
  i2008.defaultTimeScaleIndependent = !!i2009[13]
  i2008.defaultEaseType = i2009[14]
  i2008.defaultEaseOvershootOrAmplitude = i2009[15]
  i2008.defaultEasePeriod = i2009[16]
  i2008.defaultAutoKill = !!i2009[17]
  i2008.defaultLoopType = i2009[18]
  i2008.debugMode = !!i2009[19]
  i2008.debugStoreTargetId = !!i2009[20]
  i2008.showPreviewPanel = !!i2009[21]
  i2008.storeSettingsLocation = i2009[22]
  i2008.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2009[23], i2008.modules)
  i2008.createASMDEF = !!i2009[24]
  i2008.showPlayingTweens = !!i2009[25]
  i2008.showPausedTweens = !!i2009[26]
  return i2008
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2010 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2011 = data
  i2010.logBehaviour = i2011[0]
  i2010.nestedTweenFailureBehaviour = i2011[1]
  return i2010
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2012 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2013 = data
  i2012.showPanel = !!i2013[0]
  i2012.audioEnabled = !!i2013[1]
  i2012.physicsEnabled = !!i2013[2]
  i2012.physics2DEnabled = !!i2013[3]
  i2012.spriteEnabled = !!i2013[4]
  i2012.uiEnabled = !!i2013[5]
  i2012.textMeshProEnabled = !!i2013[6]
  i2012.tk2DEnabled = !!i2013[7]
  i2012.deAudioEnabled = !!i2013[8]
  i2012.deUnityExtendedEnabled = !!i2013[9]
  i2012.epoOutlineEnabled = !!i2013[10]
  return i2012
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2014 = root || request.c( 'TMPro.TMP_Settings' )
  var i2015 = data
  i2014.m_enableWordWrapping = !!i2015[0]
  i2014.m_enableKerning = !!i2015[1]
  i2014.m_enableExtraPadding = !!i2015[2]
  i2014.m_enableTintAllSprites = !!i2015[3]
  i2014.m_enableParseEscapeCharacters = !!i2015[4]
  i2014.m_EnableRaycastTarget = !!i2015[5]
  i2014.m_GetFontFeaturesAtRuntime = !!i2015[6]
  i2014.m_missingGlyphCharacter = i2015[7]
  i2014.m_warningsDisabled = !!i2015[8]
  request.r(i2015[9], i2015[10], 0, i2014, 'm_defaultFontAsset')
  i2014.m_defaultFontAssetPath = i2015[11]
  i2014.m_defaultFontSize = i2015[12]
  i2014.m_defaultAutoSizeMinRatio = i2015[13]
  i2014.m_defaultAutoSizeMaxRatio = i2015[14]
  i2014.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2015[15], i2015[16] )
  i2014.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2015[17], i2015[18] )
  i2014.m_autoSizeTextContainer = !!i2015[19]
  i2014.m_IsTextObjectScaleStatic = !!i2015[20]
  var i2017 = i2015[21]
  var i2016 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2017.length; i += 2) {
  request.r(i2017[i + 0], i2017[i + 1], 1, i2016, '')
  }
  i2014.m_fallbackFontAssets = i2016
  i2014.m_matchMaterialPreset = !!i2015[22]
  request.r(i2015[23], i2015[24], 0, i2014, 'm_defaultSpriteAsset')
  i2014.m_defaultSpriteAssetPath = i2015[25]
  i2014.m_enableEmojiSupport = !!i2015[26]
  i2014.m_MissingCharacterSpriteUnicode = i2015[27]
  i2014.m_defaultColorGradientPresetsPath = i2015[28]
  request.r(i2015[29], i2015[30], 0, i2014, 'm_defaultStyleSheet')
  i2014.m_StyleSheetsResourcePath = i2015[31]
  request.r(i2015[32], i2015[33], 0, i2014, 'm_leadingCharacters')
  request.r(i2015[34], i2015[35], 0, i2014, 'm_followingCharacters')
  i2014.m_UseModernHangulLineBreakingRules = !!i2015[36]
  return i2014
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2018 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2019 = data
  request.r(i2019[0], i2019[1], 0, i2018, 'spriteSheet')
  var i2021 = i2019[2]
  var i2020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.add(request.d('TMPro.TMP_Sprite', i2021[i + 0]));
  }
  i2018.spriteInfoList = i2020
  var i2023 = i2019[3]
  var i2022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2023.length; i += 2) {
  request.r(i2023[i + 0], i2023[i + 1], 1, i2022, '')
  }
  i2018.fallbackSpriteAssets = i2022
  i2018.hashCode = i2019[4]
  request.r(i2019[5], i2019[6], 0, i2018, 'material')
  i2018.materialHashCode = i2019[7]
  i2018.m_Version = i2019[8]
  i2018.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2019[9], i2018.m_FaceInfo)
  var i2025 = i2019[10]
  var i2024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.add(request.d('TMPro.TMP_SpriteCharacter', i2025[i + 0]));
  }
  i2018.m_SpriteCharacterTable = i2024
  var i2027 = i2019[11]
  var i2026 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2027.length; i += 1) {
    i2026.add(request.d('TMPro.TMP_SpriteGlyph', i2027[i + 0]));
  }
  i2018.m_SpriteGlyphTable = i2026
  return i2018
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2030 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2031 = data
  i2030.name = i2031[0]
  i2030.hashCode = i2031[1]
  i2030.unicode = i2031[2]
  i2030.pivot = new pc.Vec2( i2031[3], i2031[4] )
  request.r(i2031[5], i2031[6], 0, i2030, 'sprite')
  i2030.id = i2031[7]
  i2030.x = i2031[8]
  i2030.y = i2031[9]
  i2030.width = i2031[10]
  i2030.height = i2031[11]
  i2030.xOffset = i2031[12]
  i2030.yOffset = i2031[13]
  i2030.xAdvance = i2031[14]
  i2030.scale = i2031[15]
  return i2030
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2036 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2037 = data
  i2036.m_Name = i2037[0]
  i2036.m_HashCode = i2037[1]
  i2036.m_ElementType = i2037[2]
  i2036.m_Unicode = i2037[3]
  i2036.m_GlyphIndex = i2037[4]
  i2036.m_Scale = i2037[5]
  return i2036
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2040 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2041 = data
  request.r(i2041[0], i2041[1], 0, i2040, 'sprite')
  i2040.m_Index = i2041[2]
  i2040.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2041[3], i2040.m_Metrics)
  i2040.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2041[4], i2040.m_GlyphRect)
  i2040.m_Scale = i2041[5]
  i2040.m_AtlasIndex = i2041[6]
  i2040.m_ClassDefinitionType = i2041[7]
  return i2040
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2042 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2043 = data
  var i2045 = i2043[0]
  var i2044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.add(request.d('TMPro.TMP_Style', i2045[i + 0]));
  }
  i2042.m_StyleList = i2044
  return i2042
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2048 = root || request.c( 'TMPro.TMP_Style' )
  var i2049 = data
  i2048.m_Name = i2049[0]
  i2048.m_HashCode = i2049[1]
  i2048.m_OpeningDefinition = i2049[2]
  i2048.m_ClosingDefinition = i2049[3]
  i2048.m_OpeningTagArray = i2049[4]
  i2048.m_ClosingTagArray = i2049[5]
  i2048.m_OpeningTagUnicodeArray = i2049[6]
  i2048.m_ClosingTagUnicodeArray = i2049[7]
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2051 = data
  var i2053 = i2051[0]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2053[i + 0]) );
  }
  i2050.files = i2052
  i2050.componentToPrefabIds = i2051[1]
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2057 = data
  i2056.path = i2057[0]
  request.r(i2057[1], i2057[2], 0, i2056, 'unityObject')
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2059 = data
  var i2061 = i2059[0]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2061[i + 0]) );
  }
  i2058.scriptsExecutionOrder = i2060
  var i2063 = i2059[1]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2063[i + 0]) );
  }
  i2058.sortingLayers = i2062
  var i2065 = i2059[2]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2065[i + 0]) );
  }
  i2058.cullingLayers = i2064
  i2058.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2059[3], i2058.timeSettings)
  i2058.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2059[4], i2058.physicsSettings)
  i2058.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2059[5], i2058.physics2DSettings)
  i2058.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2059[6], i2058.qualitySettings)
  i2058.enableRealtimeShadows = !!i2059[7]
  i2058.enableAutoInstancing = !!i2059[8]
  i2058.enableStaticBatching = !!i2059[9]
  i2058.enableDynamicBatching = !!i2059[10]
  i2058.lightmapEncodingQuality = i2059[11]
  i2058.desiredColorSpace = i2059[12]
  var i2067 = i2059[13]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( i2067[i + 0] );
  }
  i2058.allTags = i2066
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2071 = data
  i2070.name = i2071[0]
  i2070.value = i2071[1]
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2075 = data
  i2074.id = i2075[0]
  i2074.name = i2075[1]
  i2074.value = i2075[2]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2079 = data
  i2078.id = i2079[0]
  i2078.name = i2079[1]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2081 = data
  i2080.fixedDeltaTime = i2081[0]
  i2080.maximumDeltaTime = i2081[1]
  i2080.timeScale = i2081[2]
  i2080.maximumParticleTimestep = i2081[3]
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2083 = data
  i2082.gravity = new pc.Vec3( i2083[0], i2083[1], i2083[2] )
  i2082.defaultSolverIterations = i2083[3]
  i2082.bounceThreshold = i2083[4]
  i2082.autoSyncTransforms = !!i2083[5]
  i2082.autoSimulation = !!i2083[6]
  var i2085 = i2083[7]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2085[i + 0]) );
  }
  i2082.collisionMatrix = i2084
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2089 = data
  i2088.enabled = !!i2089[0]
  i2088.layerId = i2089[1]
  i2088.otherLayerId = i2089[2]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2091 = data
  request.r(i2091[0], i2091[1], 0, i2090, 'material')
  i2090.gravity = new pc.Vec2( i2091[2], i2091[3] )
  i2090.positionIterations = i2091[4]
  i2090.velocityIterations = i2091[5]
  i2090.velocityThreshold = i2091[6]
  i2090.maxLinearCorrection = i2091[7]
  i2090.maxAngularCorrection = i2091[8]
  i2090.maxTranslationSpeed = i2091[9]
  i2090.maxRotationSpeed = i2091[10]
  i2090.baumgarteScale = i2091[11]
  i2090.baumgarteTOIScale = i2091[12]
  i2090.timeToSleep = i2091[13]
  i2090.linearSleepTolerance = i2091[14]
  i2090.angularSleepTolerance = i2091[15]
  i2090.defaultContactOffset = i2091[16]
  i2090.autoSimulation = !!i2091[17]
  i2090.queriesHitTriggers = !!i2091[18]
  i2090.queriesStartInColliders = !!i2091[19]
  i2090.callbacksOnDisable = !!i2091[20]
  i2090.reuseCollisionCallbacks = !!i2091[21]
  i2090.autoSyncTransforms = !!i2091[22]
  var i2093 = i2091[23]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2093[i + 0]) );
  }
  i2090.collisionMatrix = i2092
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2097 = data
  i2096.enabled = !!i2097[0]
  i2096.layerId = i2097[1]
  i2096.otherLayerId = i2097[2]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2099 = data
  var i2101 = i2099[0]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2101[i + 0]) );
  }
  i2098.qualityLevels = i2100
  var i2103 = i2099[1]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( i2103[i + 0] );
  }
  i2098.names = i2102
  i2098.shadows = i2099[2]
  i2098.anisotropicFiltering = i2099[3]
  i2098.antiAliasing = i2099[4]
  i2098.lodBias = i2099[5]
  i2098.shadowCascades = i2099[6]
  i2098.shadowDistance = i2099[7]
  i2098.shadowmaskMode = i2099[8]
  i2098.shadowProjection = i2099[9]
  i2098.shadowResolution = i2099[10]
  i2098.softParticles = !!i2099[11]
  i2098.softVegetation = !!i2099[12]
  i2098.activeColorSpace = i2099[13]
  i2098.desiredColorSpace = i2099[14]
  i2098.masterTextureLimit = i2099[15]
  i2098.maxQueuedFrames = i2099[16]
  i2098.particleRaycastBudget = i2099[17]
  i2098.pixelLightCount = i2099[18]
  i2098.realtimeReflectionProbes = !!i2099[19]
  i2098.shadowCascade2Split = i2099[20]
  i2098.shadowCascade4Split = new pc.Vec3( i2099[21], i2099[22], i2099[23] )
  i2098.streamingMipmapsActive = !!i2099[24]
  i2098.vSyncCount = i2099[25]
  i2098.asyncUploadBufferSize = i2099[26]
  i2098.asyncUploadTimeSlice = i2099[27]
  i2098.billboardsFaceCameraPosition = !!i2099[28]
  i2098.shadowNearPlaneOffset = i2099[29]
  i2098.streamingMipmapsMemoryBudget = i2099[30]
  i2098.maximumLODLevel = i2099[31]
  i2098.streamingMipmapsAddAllCameras = !!i2099[32]
  i2098.streamingMipmapsMaxLevelReduction = i2099[33]
  i2098.streamingMipmapsRenderersPerFrame = i2099[34]
  i2098.resolutionScalingFixedDPIFactor = i2099[35]
  i2098.streamingMipmapsMaxFileIORequests = i2099[36]
  i2098.currentQualityLevel = i2099[37]
  return i2098
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2106 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2107 = data
  i2106.xPlacement = i2107[0]
  i2106.yPlacement = i2107[1]
  i2106.xAdvance = i2107[2]
  i2106.yAdvance = i2107[3]
  return i2106
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2108 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2109 = data
  i2108.m_GlyphIndex = i2109[0]
  i2108.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2109[1], i2108.m_GlyphValueRecord)
  return i2108
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2110 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2111 = data
  i2110.m_XPlacement = i2111[0]
  i2110.m_YPlacement = i2111[1]
  i2110.m_XAdvance = i2111[2]
  i2110.m_YAdvance = i2111[3]
  return i2110
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[3],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[3],"76":[77],"78":[79],"80":[79],"9":[8],"81":[82],"83":[84],"85":[82],"86":[8],"87":[8],"11":[9],"19":[20,8],"88":[8],"10":[9],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"34":[8],"96":[8],"16":[20,8],"97":[8],"98":[8],"99":[8],"100":[8],"101":[20,8],"102":[8],"103":[6],"104":[6],"7":[6],"105":[6],"106":[3],"107":[3],"108":[109],"110":[3],"111":[112],"113":[8],"114":[20,8],"115":[77],"26":[20,8],"116":[117,77],"118":[77],"119":[77,120],"121":[54],"122":[62],"123":[112],"124":[125],"126":[8],"127":[77,8],"18":[8,20],"128":[8],"129":[20,8],"130":[77],"131":[20,8],"132":[8],"133":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","MixSkeletonSkin","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","DropZone","UnityEngine.PolygonCollider2D","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DraggableItem","UnityEngine.CanvasGroup","ClickItem","DG.Tweening.DOTweenAnimation","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "259.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BEQ_V20_NgocNDL_AnhPD";

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

Deserializers.buildID = "fb960d64-8c5a-4bf6-a892-e8870bf54223";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

