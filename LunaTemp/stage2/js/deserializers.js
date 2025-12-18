var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1482 = root || request.c( 'UnityEngine.JointSpring' )
  var i1483 = data
  i1482.spring = i1483[0]
  i1482.damper = i1483[1]
  i1482.targetPosition = i1483[2]
  return i1482
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1484 = root || request.c( 'UnityEngine.JointMotor' )
  var i1485 = data
  i1484.m_TargetVelocity = i1485[0]
  i1484.m_Force = i1485[1]
  i1484.m_FreeSpin = i1485[2]
  return i1484
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1486 = root || request.c( 'UnityEngine.JointLimits' )
  var i1487 = data
  i1486.m_Min = i1487[0]
  i1486.m_Max = i1487[1]
  i1486.m_Bounciness = i1487[2]
  i1486.m_BounceMinVelocity = i1487[3]
  i1486.m_ContactDistance = i1487[4]
  i1486.minBounce = i1487[5]
  i1486.maxBounce = i1487[6]
  return i1486
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1488 = root || request.c( 'UnityEngine.JointDrive' )
  var i1489 = data
  i1488.m_PositionSpring = i1489[0]
  i1488.m_PositionDamper = i1489[1]
  i1488.m_MaximumForce = i1489[2]
  i1488.m_UseAcceleration = i1489[3]
  return i1488
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1491 = data
  i1490.m_Spring = i1491[0]
  i1490.m_Damper = i1491[1]
  return i1490
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1492 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1493 = data
  i1492.m_Limit = i1493[0]
  i1492.m_Bounciness = i1493[1]
  i1492.m_ContactDistance = i1493[2]
  return i1492
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1495 = data
  i1494.m_ExtremumSlip = i1495[0]
  i1494.m_ExtremumValue = i1495[1]
  i1494.m_AsymptoteSlip = i1495[2]
  i1494.m_AsymptoteValue = i1495[3]
  i1494.m_Stiffness = i1495[4]
  return i1494
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1496 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1497 = data
  i1496.m_LowerAngle = i1497[0]
  i1496.m_UpperAngle = i1497[1]
  return i1496
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1498 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1499 = data
  i1498.m_MotorSpeed = i1499[0]
  i1498.m_MaximumMotorTorque = i1499[1]
  return i1498
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1500 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1501 = data
  i1500.m_DampingRatio = i1501[0]
  i1500.m_Frequency = i1501[1]
  i1500.m_Angle = i1501[2]
  return i1500
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1502 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1503 = data
  i1502.m_LowerTranslation = i1503[0]
  i1502.m_UpperTranslation = i1503[1]
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1505 = data
  i1504.name = i1505[0]
  i1504.width = i1505[1]
  i1504.height = i1505[2]
  i1504.mipmapCount = i1505[3]
  i1504.anisoLevel = i1505[4]
  i1504.filterMode = i1505[5]
  i1504.hdr = !!i1505[6]
  i1504.format = i1505[7]
  i1504.wrapMode = i1505[8]
  i1504.alphaIsTransparency = !!i1505[9]
  i1504.alphaSource = i1505[10]
  i1504.graphicsFormat = i1505[11]
  i1504.sRGBTexture = !!i1505[12]
  i1504.desiredColorSpace = i1505[13]
  i1504.wrapU = i1505[14]
  i1504.wrapV = i1505[15]
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1506 = root || new pc.UnityMaterial()
  var i1507 = data
  i1506.name = i1507[0]
  request.r(i1507[1], i1507[2], 0, i1506, 'shader')
  i1506.renderQueue = i1507[3]
  i1506.enableInstancing = !!i1507[4]
  var i1509 = i1507[5]
  var i1508 = []
  for(var i = 0; i < i1509.length; i += 1) {
    i1508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1509[i + 0]) );
  }
  i1506.floatParameters = i1508
  var i1511 = i1507[6]
  var i1510 = []
  for(var i = 0; i < i1511.length; i += 1) {
    i1510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1511[i + 0]) );
  }
  i1506.colorParameters = i1510
  var i1513 = i1507[7]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1513[i + 0]) );
  }
  i1506.vectorParameters = i1512
  var i1515 = i1507[8]
  var i1514 = []
  for(var i = 0; i < i1515.length; i += 1) {
    i1514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1515[i + 0]) );
  }
  i1506.textureParameters = i1514
  var i1517 = i1507[9]
  var i1516 = []
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1517[i + 0]) );
  }
  i1506.materialFlags = i1516
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1521 = data
  i1520.name = i1521[0]
  i1520.value = i1521[1]
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1525 = data
  i1524.name = i1525[0]
  i1524.value = new pc.Color(i1525[1], i1525[2], i1525[3], i1525[4])
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1529 = data
  i1528.name = i1529[0]
  i1528.value = new pc.Vec4( i1529[1], i1529[2], i1529[3], i1529[4] )
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1533 = data
  i1532.name = i1533[0]
  request.r(i1533[1], i1533[2], 0, i1532, 'value')
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1537 = data
  i1536.name = i1537[0]
  i1536.enabled = !!i1537[1]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1541 = data
  i1540.cullTransparentMesh = !!i1541[0]
  return i1540
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1542 = root || request.c( 'UnityEngine.UI.Image' )
  var i1543 = data
  request.r(i1543[0], i1543[1], 0, i1542, 'm_Sprite')
  i1542.m_Type = i1543[2]
  i1542.m_PreserveAspect = !!i1543[3]
  i1542.m_FillCenter = !!i1543[4]
  i1542.m_FillMethod = i1543[5]
  i1542.m_FillAmount = i1543[6]
  i1542.m_FillClockwise = !!i1543[7]
  i1542.m_FillOrigin = i1543[8]
  i1542.m_UseSpriteMesh = !!i1543[9]
  i1542.m_PixelsPerUnitMultiplier = i1543[10]
  i1542.m_Maskable = !!i1543[11]
  request.r(i1543[12], i1543[13], 0, i1542, 'm_Material')
  i1542.m_Color = new pc.Color(i1543[14], i1543[15], i1543[16], i1543[17])
  i1542.m_RaycastTarget = !!i1543[18]
  i1542.m_RaycastPadding = new pc.Vec4( i1543[19], i1543[20], i1543[21], i1543[22] )
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1545 = data
  i1544.name = i1545[0]
  i1544.tagId = i1545[1]
  i1544.enabled = !!i1545[2]
  i1544.isStatic = !!i1545[3]
  i1544.layer = i1545[4]
  return i1544
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1546 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1547 = data
  i1546.m_hasFontAssetChanged = !!i1547[0]
  request.r(i1547[1], i1547[2], 0, i1546, 'm_baseMaterial')
  i1546.m_maskOffset = new pc.Vec4( i1547[3], i1547[4], i1547[5], i1547[6] )
  i1546.m_text = i1547[7]
  i1546.m_isRightToLeft = !!i1547[8]
  request.r(i1547[9], i1547[10], 0, i1546, 'm_fontAsset')
  request.r(i1547[11], i1547[12], 0, i1546, 'm_sharedMaterial')
  var i1549 = i1547[13]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 2) {
  request.r(i1549[i + 0], i1549[i + 1], 2, i1548, '')
  }
  i1546.m_fontSharedMaterials = i1548
  request.r(i1547[14], i1547[15], 0, i1546, 'm_fontMaterial')
  var i1551 = i1547[16]
  var i1550 = []
  for(var i = 0; i < i1551.length; i += 2) {
  request.r(i1551[i + 0], i1551[i + 1], 2, i1550, '')
  }
  i1546.m_fontMaterials = i1550
  i1546.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1547[17], i1547[18], i1547[19], i1547[20])
  i1546.m_fontColor = new pc.Color(i1547[21], i1547[22], i1547[23], i1547[24])
  i1546.m_enableVertexGradient = !!i1547[25]
  i1546.m_colorMode = i1547[26]
  i1546.m_fontColorGradient = request.d('TMPro.VertexGradient', i1547[27], i1546.m_fontColorGradient)
  request.r(i1547[28], i1547[29], 0, i1546, 'm_fontColorGradientPreset')
  request.r(i1547[30], i1547[31], 0, i1546, 'm_spriteAsset')
  i1546.m_tintAllSprites = !!i1547[32]
  request.r(i1547[33], i1547[34], 0, i1546, 'm_StyleSheet')
  i1546.m_TextStyleHashCode = i1547[35]
  i1546.m_overrideHtmlColors = !!i1547[36]
  i1546.m_faceColor = UnityEngine.Color32.ConstructColor(i1547[37], i1547[38], i1547[39], i1547[40])
  i1546.m_fontSize = i1547[41]
  i1546.m_fontSizeBase = i1547[42]
  i1546.m_fontWeight = i1547[43]
  i1546.m_enableAutoSizing = !!i1547[44]
  i1546.m_fontSizeMin = i1547[45]
  i1546.m_fontSizeMax = i1547[46]
  i1546.m_fontStyle = i1547[47]
  i1546.m_HorizontalAlignment = i1547[48]
  i1546.m_VerticalAlignment = i1547[49]
  i1546.m_textAlignment = i1547[50]
  i1546.m_characterSpacing = i1547[51]
  i1546.m_wordSpacing = i1547[52]
  i1546.m_lineSpacing = i1547[53]
  i1546.m_lineSpacingMax = i1547[54]
  i1546.m_paragraphSpacing = i1547[55]
  i1546.m_charWidthMaxAdj = i1547[56]
  i1546.m_enableWordWrapping = !!i1547[57]
  i1546.m_wordWrappingRatios = i1547[58]
  i1546.m_overflowMode = i1547[59]
  request.r(i1547[60], i1547[61], 0, i1546, 'm_linkedTextComponent')
  request.r(i1547[62], i1547[63], 0, i1546, 'parentLinkedComponent')
  i1546.m_enableKerning = !!i1547[64]
  i1546.m_enableExtraPadding = !!i1547[65]
  i1546.checkPaddingRequired = !!i1547[66]
  i1546.m_isRichText = !!i1547[67]
  i1546.m_parseCtrlCharacters = !!i1547[68]
  i1546.m_isOrthographic = !!i1547[69]
  i1546.m_isCullingEnabled = !!i1547[70]
  i1546.m_horizontalMapping = i1547[71]
  i1546.m_verticalMapping = i1547[72]
  i1546.m_uvLineOffset = i1547[73]
  i1546.m_geometrySortingOrder = i1547[74]
  i1546.m_IsTextObjectScaleStatic = !!i1547[75]
  i1546.m_VertexBufferAutoSizeReduction = !!i1547[76]
  i1546.m_useMaxVisibleDescender = !!i1547[77]
  i1546.m_pageToDisplay = i1547[78]
  i1546.m_margin = new pc.Vec4( i1547[79], i1547[80], i1547[81], i1547[82] )
  i1546.m_isUsingLegacyAnimationComponent = !!i1547[83]
  i1546.m_isVolumetricText = !!i1547[84]
  i1546.m_Maskable = !!i1547[85]
  request.r(i1547[86], i1547[87], 0, i1546, 'm_Material')
  i1546.m_Color = new pc.Color(i1547[88], i1547[89], i1547[90], i1547[91])
  i1546.m_RaycastTarget = !!i1547[92]
  i1546.m_RaycastPadding = new pc.Vec4( i1547[93], i1547[94], i1547[95], i1547[96] )
  return i1546
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1554 = root || request.c( 'TMPro.VertexGradient' )
  var i1555 = data
  i1554.topLeft = new pc.Color(i1555[0], i1555[1], i1555[2], i1555[3])
  i1554.topRight = new pc.Color(i1555[4], i1555[5], i1555[6], i1555[7])
  i1554.bottomLeft = new pc.Color(i1555[8], i1555[9], i1555[10], i1555[11])
  i1554.bottomRight = new pc.Color(i1555[12], i1555[13], i1555[14], i1555[15])
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1557 = data
  i1556.name = i1557[0]
  i1556.index = i1557[1]
  i1556.startup = !!i1557[2]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1559 = data
  i1558.position = new pc.Vec3( i1559[0], i1559[1], i1559[2] )
  i1558.scale = new pc.Vec3( i1559[3], i1559[4], i1559[5] )
  i1558.rotation = new pc.Quat(i1559[6], i1559[7], i1559[8], i1559[9])
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1561 = data
  i1560.aspect = i1561[0]
  i1560.orthographic = !!i1561[1]
  i1560.orthographicSize = i1561[2]
  i1560.backgroundColor = new pc.Color(i1561[3], i1561[4], i1561[5], i1561[6])
  i1560.nearClipPlane = i1561[7]
  i1560.farClipPlane = i1561[8]
  i1560.fieldOfView = i1561[9]
  i1560.depth = i1561[10]
  i1560.clearFlags = i1561[11]
  i1560.cullingMask = i1561[12]
  i1560.rect = i1561[13]
  request.r(i1561[14], i1561[15], 0, i1560, 'targetTexture')
  i1560.usePhysicalProperties = !!i1561[16]
  i1560.focalLength = i1561[17]
  i1560.sensorSize = new pc.Vec2( i1561[18], i1561[19] )
  i1560.lensShift = new pc.Vec2( i1561[20], i1561[21] )
  i1560.gateFit = i1561[22]
  i1560.commandBufferCount = i1561[23]
  i1560.cameraType = i1561[24]
  i1560.enabled = !!i1561[25]
  return i1560
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1562 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1563 = data
  request.r(i1563[0], i1563[1], 0, i1562, 'm_FirstSelected')
  i1562.m_sendNavigationEvents = !!i1563[2]
  i1562.m_DragThreshold = i1563[3]
  return i1562
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1564 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1565 = data
  i1564.m_HorizontalAxis = i1565[0]
  i1564.m_VerticalAxis = i1565[1]
  i1564.m_SubmitButton = i1565[2]
  i1564.m_CancelButton = i1565[3]
  i1564.m_InputActionsPerSecond = i1565[4]
  i1564.m_RepeatDelay = i1565[5]
  i1564.m_ForceModuleActive = !!i1565[6]
  i1564.m_SendPointerHoverToParent = !!i1565[7]
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1567 = data
  i1566.planeDistance = i1567[0]
  i1566.referencePixelsPerUnit = i1567[1]
  i1566.isFallbackOverlay = !!i1567[2]
  i1566.renderMode = i1567[3]
  i1566.renderOrder = i1567[4]
  i1566.sortingLayerName = i1567[5]
  i1566.sortingOrder = i1567[6]
  i1566.scaleFactor = i1567[7]
  request.r(i1567[8], i1567[9], 0, i1566, 'worldCamera')
  i1566.overrideSorting = !!i1567[10]
  i1566.pixelPerfect = !!i1567[11]
  i1566.targetDisplay = i1567[12]
  i1566.overridePixelPerfect = !!i1567[13]
  i1566.enabled = !!i1567[14]
  return i1566
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1568 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1569 = data
  i1568.m_UiScaleMode = i1569[0]
  i1568.m_ReferencePixelsPerUnit = i1569[1]
  i1568.m_ScaleFactor = i1569[2]
  i1568.m_ReferenceResolution = new pc.Vec2( i1569[3], i1569[4] )
  i1568.m_ScreenMatchMode = i1569[5]
  i1568.m_MatchWidthOrHeight = i1569[6]
  i1568.m_PhysicalUnit = i1569[7]
  i1568.m_FallbackScreenDPI = i1569[8]
  i1568.m_DefaultSpriteDPI = i1569[9]
  i1568.m_DynamicPixelsPerUnit = i1569[10]
  i1568.m_PresetInfoIsWorld = !!i1569[11]
  return i1568
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1570 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1571 = data
  i1570.m_IgnoreReversedGraphics = !!i1571[0]
  i1570.m_BlockingObjects = i1571[1]
  i1570.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1571[2] )
  return i1570
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1572 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1573 = data
  request.r(i1573[0], i1573[1], 0, i1572, 'm_Texture')
  i1572.m_UVRect = UnityEngine.Rect.MinMaxRect(i1573[2], i1573[3], i1573[4], i1573[5])
  i1572.m_Maskable = !!i1573[6]
  request.r(i1573[7], i1573[8], 0, i1572, 'm_Material')
  i1572.m_Color = new pc.Color(i1573[9], i1573[10], i1573[11], i1573[12])
  i1572.m_RaycastTarget = !!i1573[13]
  i1572.m_RaycastPadding = new pc.Vec4( i1573[14], i1573[15], i1573[16], i1573[17] )
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1575 = data
  request.r(i1575[0], i1575[1], 0, i1574, 'clip')
  request.r(i1575[2], i1575[3], 0, i1574, 'outputAudioMixerGroup')
  i1574.playOnAwake = !!i1575[4]
  i1574.loop = !!i1575[5]
  i1574.time = i1575[6]
  i1574.volume = i1575[7]
  i1574.pitch = i1575[8]
  i1574.enabled = !!i1575[9]
  return i1574
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
  i1576.m_SkeletonColor = new pc.Color(i1577[23], i1577[24], i1577[25], i1577[26])
  i1576.referenceSize = new pc.Vec2( i1577[27], i1577[28] )
  i1576.pivotOffset = new pc.Vec2( i1577[29], i1577[30] )
  i1576.referenceScale = i1577[31]
  i1576.layoutScale = i1577[32]
  i1576.rectTransformSize = new pc.Vec2( i1577[33], i1577[34] )
  i1576.editReferenceRect = !!i1577[35]
  var i1581 = i1577[36]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.push( i1581[i + 0] );
  }
  i1576.separatorSlotNames = i1580
  var i1583 = i1577[37]
  var i1582 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1583.length; i += 2) {
  request.r(i1583[i + 0], i1583[i + 1], 1, i1582, '')
  }
  i1576.separatorParts = i1582
  i1576.physicsPositionInheritanceFactor = new pc.Vec2( i1577[38], i1577[39] )
  i1576.physicsRotationInheritanceFactor = i1577[40]
  request.r(i1577[41], i1577[42], 0, i1576, 'physicsMovementRelativeTo')
  i1576.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1577[43], i1576.meshGenerator)
  i1576.updateTiming = i1577[44]
  i1576.unscaledTime = !!i1577[45]
  i1576.m_Maskable = !!i1577[46]
  request.r(i1577[47], i1577[48], 0, i1576, 'm_Material')
  i1576.m_Color = new pc.Color(i1577[49], i1577[50], i1577[51], i1577[52])
  i1576.m_RaycastTarget = !!i1577[53]
  i1576.m_RaycastPadding = new pc.Vec4( i1577[54], i1577[55], i1577[56], i1577[57] )
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
  i1592.tintBlack = !!i1593[2]
  i1592.canvasGroupCompatible = !!i1593[3]
  i1592.pmaVertexColors = !!i1593[4]
  i1592.addNormals = !!i1593[5]
  i1592.calculateTangents = !!i1593[6]
  i1592.immutableTriangles = !!i1593[7]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1595 = data
  i1594.m_Alpha = i1595[0]
  i1594.m_Interactable = !!i1595[1]
  i1594.m_BlocksRaycasts = !!i1595[2]
  i1594.m_IgnoreParentGroups = !!i1595[3]
  i1594.enabled = !!i1595[4]
  return i1594
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1596 = root || request.c( 'DraggableItem' )
  var i1597 = data
  i1596.idDrag = i1597[0]
  i1596.isProcess = !!i1597[1]
  return i1596
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i1598 = root || request.c( 'ClickItem' )
  var i1599 = data
  var i1601 = i1599[0]
  var i1600 = []
  for(var i = 0; i < i1601.length; i += 2) {
  request.r(i1601[i + 0], i1601[i + 1], 2, i1600, '')
  }
  i1598.steps = i1600
  i1598.currentStep = i1599[1]
  i1598.isProcess = !!i1599[2]
  return i1598
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1604 = root || request.c( 'UnityEngine.UI.Button' )
  var i1605 = data
  i1604.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1605[0], i1604.m_OnClick)
  i1604.m_Navigation = request.d('UnityEngine.UI.Navigation', i1605[1], i1604.m_Navigation)
  i1604.m_Transition = i1605[2]
  i1604.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1605[3], i1604.m_Colors)
  i1604.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1605[4], i1604.m_SpriteState)
  i1604.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1605[5], i1604.m_AnimationTriggers)
  i1604.m_Interactable = !!i1605[6]
  request.r(i1605[7], i1605[8], 0, i1604, 'm_TargetGraphic')
  return i1604
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1606 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1607 = data
  i1606.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1607[0], i1606.m_PersistentCalls)
  return i1606
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1609 = data
  var i1611 = i1609[0]
  var i1610 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.add(request.d('UnityEngine.Events.PersistentCall', i1611[i + 0]));
  }
  i1608.m_Calls = i1610
  return i1608
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1615 = data
  request.r(i1615[0], i1615[1], 0, i1614, 'm_Target')
  i1614.m_TargetAssemblyTypeName = i1615[2]
  i1614.m_MethodName = i1615[3]
  i1614.m_Mode = i1615[4]
  i1614.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1615[5], i1614.m_Arguments)
  i1614.m_CallState = i1615[6]
  return i1614
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1617 = data
  request.r(i1617[0], i1617[1], 0, i1616, 'm_ObjectArgument')
  i1616.m_ObjectArgumentAssemblyTypeName = i1617[2]
  i1616.m_IntArgument = i1617[3]
  i1616.m_FloatArgument = i1617[4]
  i1616.m_StringArgument = i1617[5]
  i1616.m_BoolArgument = !!i1617[6]
  return i1616
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1619 = data
  i1618.m_Mode = i1619[0]
  i1618.m_WrapAround = !!i1619[1]
  request.r(i1619[2], i1619[3], 0, i1618, 'm_SelectOnUp')
  request.r(i1619[4], i1619[5], 0, i1618, 'm_SelectOnDown')
  request.r(i1619[6], i1619[7], 0, i1618, 'm_SelectOnLeft')
  request.r(i1619[8], i1619[9], 0, i1618, 'm_SelectOnRight')
  return i1618
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1620 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1621 = data
  i1620.m_NormalColor = new pc.Color(i1621[0], i1621[1], i1621[2], i1621[3])
  i1620.m_HighlightedColor = new pc.Color(i1621[4], i1621[5], i1621[6], i1621[7])
  i1620.m_PressedColor = new pc.Color(i1621[8], i1621[9], i1621[10], i1621[11])
  i1620.m_SelectedColor = new pc.Color(i1621[12], i1621[13], i1621[14], i1621[15])
  i1620.m_DisabledColor = new pc.Color(i1621[16], i1621[17], i1621[18], i1621[19])
  i1620.m_ColorMultiplier = i1621[20]
  i1620.m_FadeDuration = i1621[21]
  return i1620
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1622 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1623 = data
  request.r(i1623[0], i1623[1], 0, i1622, 'm_HighlightedSprite')
  request.r(i1623[2], i1623[3], 0, i1622, 'm_PressedSprite')
  request.r(i1623[4], i1623[5], 0, i1622, 'm_SelectedSprite')
  request.r(i1623[6], i1623[7], 0, i1622, 'm_DisabledSprite')
  return i1622
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1624 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1625 = data
  i1624.m_NormalTrigger = i1625[0]
  i1624.m_HighlightedTrigger = i1625[1]
  i1624.m_PressedTrigger = i1625[2]
  i1624.m_SelectedTrigger = i1625[3]
  i1624.m_DisabledTrigger = i1625[4]
  return i1624
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1626 = root || request.c( 'DropZone' )
  var i1627 = data
  i1626.idDrop = i1627[0]
  i1626.isLose = !!i1627[1]
  var i1629 = i1627[2]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 2) {
  request.r(i1629[i + 0], i1629[i + 1], 2, i1628, '')
  }
  i1626.steps = i1628
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1631 = data
  i1630.usedByComposite = !!i1631[0]
  i1630.autoTiling = !!i1631[1]
  var i1633 = i1631[2]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 1) {
  var i1635 = i1633[i + 0]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 2) {
    i1634.push( new pc.Vec2( i1635[i + 0], i1635[i + 1] ) );
  }
    i1632.push( i1634 );
  }
  i1630.points = i1632
  i1630.enabled = !!i1631[3]
  i1630.isTrigger = !!i1631[4]
  i1630.usedByEffector = !!i1631[5]
  i1630.density = i1631[6]
  i1630.offset = new pc.Vec2( i1631[7], i1631[8] )
  request.r(i1631[9], i1631[10], 0, i1630, 'material')
  return i1630
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1642 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1643 = data
  i1642.targetIsSelf = !!i1643[0]
  request.r(i1643[1], i1643[2], 0, i1642, 'targetGO')
  i1642.tweenTargetIsTargetGO = !!i1643[3]
  i1642.delay = i1643[4]
  i1642.duration = i1643[5]
  i1642.easeType = i1643[6]
  i1642.easeCurve = new pc.AnimationCurve( { keys_flow: i1643[7] } )
  i1642.loopType = i1643[8]
  i1642.loops = i1643[9]
  i1642.id = i1643[10]
  i1642.isRelative = !!i1643[11]
  i1642.isFrom = !!i1643[12]
  i1642.isIndependentUpdate = !!i1643[13]
  i1642.autoKill = !!i1643[14]
  i1642.autoGenerate = !!i1643[15]
  i1642.isActive = !!i1643[16]
  i1642.isValid = !!i1643[17]
  request.r(i1643[18], i1643[19], 0, i1642, 'target')
  i1642.animationType = i1643[20]
  i1642.targetType = i1643[21]
  i1642.forcedTargetType = i1643[22]
  i1642.autoPlay = !!i1643[23]
  i1642.useTargetAsV3 = !!i1643[24]
  i1642.endValueFloat = i1643[25]
  i1642.endValueV3 = new pc.Vec3( i1643[26], i1643[27], i1643[28] )
  i1642.endValueV2 = new pc.Vec2( i1643[29], i1643[30] )
  i1642.endValueColor = new pc.Color(i1643[31], i1643[32], i1643[33], i1643[34])
  i1642.endValueString = i1643[35]
  i1642.endValueRect = UnityEngine.Rect.MinMaxRect(i1643[36], i1643[37], i1643[38], i1643[39])
  request.r(i1643[40], i1643[41], 0, i1642, 'endValueTransform')
  i1642.optionalBool0 = !!i1643[42]
  i1642.optionalBool1 = !!i1643[43]
  i1642.optionalFloat0 = i1643[44]
  i1642.optionalInt0 = i1643[45]
  i1642.optionalRotationMode = i1643[46]
  i1642.optionalScrambleMode = i1643[47]
  i1642.optionalShakeRandomnessMode = i1643[48]
  i1642.optionalString = i1643[49]
  i1642.updateType = i1643[50]
  i1642.isSpeedBased = !!i1643[51]
  i1642.hasOnStart = !!i1643[52]
  i1642.hasOnPlay = !!i1643[53]
  i1642.hasOnUpdate = !!i1643[54]
  i1642.hasOnStepComplete = !!i1643[55]
  i1642.hasOnComplete = !!i1643[56]
  i1642.hasOnTweenCreated = !!i1643[57]
  i1642.hasOnRewind = !!i1643[58]
  i1642.onStart = request.d('UnityEngine.Events.UnityEvent', i1643[59], i1642.onStart)
  i1642.onPlay = request.d('UnityEngine.Events.UnityEvent', i1643[60], i1642.onPlay)
  i1642.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1643[61], i1642.onUpdate)
  i1642.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1643[62], i1642.onStepComplete)
  i1642.onComplete = request.d('UnityEngine.Events.UnityEvent', i1643[63], i1642.onComplete)
  i1642.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1643[64], i1642.onTweenCreated)
  i1642.onRewind = request.d('UnityEngine.Events.UnityEvent', i1643[65], i1642.onRewind)
  return i1642
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1644 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1645 = data
  i1644.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1645[0], i1644.m_PersistentCalls)
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1647 = data
  i1646.usedByComposite = !!i1647[0]
  i1646.autoTiling = !!i1647[1]
  i1646.size = new pc.Vec2( i1647[2], i1647[3] )
  i1646.edgeRadius = i1647[4]
  i1646.enabled = !!i1647[5]
  i1646.isTrigger = !!i1647[6]
  i1646.usedByEffector = !!i1647[7]
  i1646.density = i1647[8]
  i1646.offset = new pc.Vec2( i1647[9], i1647[10] )
  request.r(i1647[11], i1647[12], 0, i1646, 'material')
  return i1646
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1648 = root || request.c( 'LunaManager' )
  var i1649 = data
  var i1651 = i1649[0]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 2) {
  request.r(i1651[i + 0], i1651[i + 1], 2, i1650, '')
  }
  i1648.lstBtnInstall = i1650
  request.r(i1649[1], i1649[2], 0, i1648, 'StartCard')
  request.r(i1649[3], i1649[4], 0, i1648, 'EndCard')
  request.r(i1649[5], i1649[6], 0, i1648, 'Parent')
  var i1653 = i1649[7]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 2) {
  request.r(i1653[i + 0], i1653[i + 1], 2, i1652, '')
  }
  i1648.tutorial = i1652
  i1648.countPlay = i1649[8]
  i1648.countPlayFinal = i1649[9]
  i1648.countPlayMax = i1649[10]
  i1648.timeDropFinal = i1649[11]
  i1648.colorBG = new pc.Color(i1649[12], i1649[13], i1649[14], i1649[15])
  request.r(i1649[16], i1649[17], 0, i1648, 'texture2D')
  request.r(i1649[18], i1649[19], 0, i1648, 'rawImageBG')
  request.r(i1649[20], i1649[21], 0, i1648, 'textProgess')
  request.r(i1649[22], i1649[23], 0, i1648, 'imgProgess')
  request.r(i1649[24], i1649[25], 0, i1648, 'timeText')
  return i1648
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1656 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1657 = data
  i1656.m_ShowMaskGraphic = !!i1657[0]
  return i1656
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1658 = root || request.c( 'AudioController' )
  var i1659 = data
  request.r(i1659[0], i1659[1], 0, i1658, 'bgmSource')
  request.r(i1659[2], i1659[3], 0, i1658, 'sfxSource')
  var i1661 = i1659[4]
  var i1660 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.add(request.d('AudioEntry', i1661[i + 0]));
  }
  i1658.audioEntries = i1660
  return i1658
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i1664 = root || request.c( 'AudioEntry' )
  var i1665 = data
  i1664.key = i1665[0]
  request.r(i1665[1], i1665[2], 0, i1664, 'clip')
  i1664.volume = i1665[3]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1667 = data
  i1666.ambientIntensity = i1667[0]
  i1666.reflectionIntensity = i1667[1]
  i1666.ambientMode = i1667[2]
  i1666.ambientLight = new pc.Color(i1667[3], i1667[4], i1667[5], i1667[6])
  i1666.ambientSkyColor = new pc.Color(i1667[7], i1667[8], i1667[9], i1667[10])
  i1666.ambientGroundColor = new pc.Color(i1667[11], i1667[12], i1667[13], i1667[14])
  i1666.ambientEquatorColor = new pc.Color(i1667[15], i1667[16], i1667[17], i1667[18])
  i1666.fogColor = new pc.Color(i1667[19], i1667[20], i1667[21], i1667[22])
  i1666.fogEndDistance = i1667[23]
  i1666.fogStartDistance = i1667[24]
  i1666.fogDensity = i1667[25]
  i1666.fog = !!i1667[26]
  request.r(i1667[27], i1667[28], 0, i1666, 'skybox')
  i1666.fogMode = i1667[29]
  var i1669 = i1667[30]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1669[i + 0]) );
  }
  i1666.lightmaps = i1668
  i1666.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1667[31], i1666.lightProbes)
  i1666.lightmapsMode = i1667[32]
  i1666.mixedBakeMode = i1667[33]
  i1666.environmentLightingMode = i1667[34]
  i1666.ambientProbe = new pc.SphericalHarmonicsL2(i1667[35])
  i1666.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1667[36])
  i1666.useReferenceAmbientProbe = !!i1667[37]
  request.r(i1667[38], i1667[39], 0, i1666, 'customReflection')
  request.r(i1667[40], i1667[41], 0, i1666, 'defaultReflection')
  i1666.defaultReflectionMode = i1667[42]
  i1666.defaultReflectionResolution = i1667[43]
  i1666.sunLightObjectId = i1667[44]
  i1666.pixelLightCount = i1667[45]
  i1666.defaultReflectionHDR = !!i1667[46]
  i1666.hasLightDataAsset = !!i1667[47]
  i1666.hasManualGenerate = !!i1667[48]
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1673 = data
  request.r(i1673[0], i1673[1], 0, i1672, 'lightmapColor')
  request.r(i1673[2], i1673[3], 0, i1672, 'lightmapDirection')
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1674 = root || new UnityEngine.LightProbes()
  var i1675 = data
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1683 = data
  var i1685 = i1683[0]
  var i1684 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1685[i + 0]));
  }
  i1682.ShaderCompilationErrors = i1684
  i1682.name = i1683[1]
  i1682.guid = i1683[2]
  var i1687 = i1683[3]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.push( i1687[i + 0] );
  }
  i1682.shaderDefinedKeywords = i1686
  var i1689 = i1683[4]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1689[i + 0]) );
  }
  i1682.passes = i1688
  var i1691 = i1683[5]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1691[i + 0]) );
  }
  i1682.usePasses = i1690
  var i1693 = i1683[6]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1693[i + 0]) );
  }
  i1682.defaultParameterValues = i1692
  request.r(i1683[7], i1683[8], 0, i1682, 'unityFallbackShader')
  i1682.readDepth = !!i1683[9]
  i1682.isCreatedByShaderGraph = !!i1683[10]
  i1682.disableBatching = !!i1683[11]
  i1682.compiled = !!i1683[12]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1697 = data
  i1696.shaderName = i1697[0]
  i1696.errorMessage = i1697[1]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1700 = root || new pc.UnityShaderPass()
  var i1701 = data
  i1700.id = i1701[0]
  i1700.subShaderIndex = i1701[1]
  i1700.name = i1701[2]
  i1700.passType = i1701[3]
  i1700.grabPassTextureName = i1701[4]
  i1700.usePass = !!i1701[5]
  i1700.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[6], i1700.zTest)
  i1700.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[7], i1700.zWrite)
  i1700.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[8], i1700.culling)
  i1700.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1701[9], i1700.blending)
  i1700.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1701[10], i1700.alphaBlending)
  i1700.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[11], i1700.colorWriteMask)
  i1700.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[12], i1700.offsetUnits)
  i1700.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[13], i1700.offsetFactor)
  i1700.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[14], i1700.stencilRef)
  i1700.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[15], i1700.stencilReadMask)
  i1700.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[16], i1700.stencilWriteMask)
  i1700.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1701[17], i1700.stencilOp)
  i1700.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1701[18], i1700.stencilOpFront)
  i1700.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1701[19], i1700.stencilOpBack)
  var i1703 = i1701[20]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1703[i + 0]) );
  }
  i1700.tags = i1702
  var i1705 = i1701[21]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( i1705[i + 0] );
  }
  i1700.passDefinedKeywords = i1704
  var i1707 = i1701[22]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1707[i + 0]) );
  }
  i1700.passDefinedKeywordGroups = i1706
  var i1709 = i1701[23]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1709[i + 0]) );
  }
  i1700.variants = i1708
  var i1711 = i1701[24]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1711[i + 0]) );
  }
  i1700.excludedVariants = i1710
  i1700.hasDepthReader = !!i1701[25]
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1713 = data
  i1712.val = i1713[0]
  i1712.name = i1713[1]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1715 = data
  i1714.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1715[0], i1714.src)
  i1714.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1715[1], i1714.dst)
  i1714.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1715[2], i1714.op)
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1717 = data
  i1716.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[0], i1716.pass)
  i1716.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[1], i1716.fail)
  i1716.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[2], i1716.zFail)
  i1716.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[3], i1716.comp)
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1721 = data
  i1720.name = i1721[0]
  i1720.value = i1721[1]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1725 = data
  var i1727 = i1725[0]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( i1727[i + 0] );
  }
  i1724.keywords = i1726
  i1724.hasDiscard = !!i1725[1]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1731 = data
  i1730.passId = i1731[0]
  i1730.subShaderIndex = i1731[1]
  var i1733 = i1731[2]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( i1733[i + 0] );
  }
  i1730.keywords = i1732
  i1730.vertexProgram = i1731[3]
  i1730.fragmentProgram = i1731[4]
  i1730.exportedForWebGl2 = !!i1731[5]
  i1730.readDepth = !!i1731[6]
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1737 = data
  request.r(i1737[0], i1737[1], 0, i1736, 'shader')
  i1736.pass = i1737[2]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1741 = data
  i1740.name = i1741[0]
  i1740.type = i1741[1]
  i1740.value = new pc.Vec4( i1741[2], i1741[3], i1741[4], i1741[5] )
  i1740.textureValue = i1741[6]
  i1740.shaderPropertyFlag = i1741[7]
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1743 = data
  i1742.name = i1743[0]
  request.r(i1743[1], i1743[2], 0, i1742, 'texture')
  i1742.aabb = i1743[3]
  i1742.vertices = i1743[4]
  i1742.triangles = i1743[5]
  i1742.textureRect = UnityEngine.Rect.MinMaxRect(i1743[6], i1743[7], i1743[8], i1743[9])
  i1742.packedRect = UnityEngine.Rect.MinMaxRect(i1743[10], i1743[11], i1743[12], i1743[13])
  i1742.border = new pc.Vec4( i1743[14], i1743[15], i1743[16], i1743[17] )
  i1742.transparency = i1743[18]
  i1742.bounds = i1743[19]
  i1742.pixelsPerUnit = i1743[20]
  i1742.textureWidth = i1743[21]
  i1742.textureHeight = i1743[22]
  i1742.nativeSize = new pc.Vec2( i1743[23], i1743[24] )
  i1742.pivot = new pc.Vec2( i1743[25], i1743[26] )
  i1742.textureRectOffset = new pc.Vec2( i1743[27], i1743[28] )
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1745 = data
  i1744.name = i1745[0]
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1747 = data
  i1746.name = i1747[0]
  i1746.ascent = i1747[1]
  i1746.originalLineHeight = i1747[2]
  i1746.fontSize = i1747[3]
  var i1749 = i1747[4]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1749[i + 0]) );
  }
  i1746.characterInfo = i1748
  request.r(i1747[5], i1747[6], 0, i1746, 'texture')
  i1746.originalFontSize = i1747[7]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1753 = data
  i1752.index = i1753[0]
  i1752.advance = i1753[1]
  i1752.bearing = i1753[2]
  i1752.glyphWidth = i1753[3]
  i1752.glyphHeight = i1753[4]
  i1752.minX = i1753[5]
  i1752.maxX = i1753[6]
  i1752.minY = i1753[7]
  i1752.maxY = i1753[8]
  i1752.uvBottomLeftX = i1753[9]
  i1752.uvBottomLeftY = i1753[10]
  i1752.uvBottomRightX = i1753[11]
  i1752.uvBottomRightY = i1753[12]
  i1752.uvTopLeftX = i1753[13]
  i1752.uvTopLeftY = i1753[14]
  i1752.uvTopRightX = i1753[15]
  i1752.uvTopRightY = i1753[16]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1755 = data
  i1754.name = i1755[0]
  i1754.bytes64 = i1755[1]
  i1754.data = i1755[2]
  return i1754
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1756 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1757 = data
  var i1759 = i1757[0]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 2) {
  request.r(i1759[i + 0], i1759[i + 1], 2, i1758, '')
  }
  i1756.atlasAssets = i1758
  i1756.scale = i1757[1]
  request.r(i1757[2], i1757[3], 0, i1756, 'skeletonJSON')
  i1756.isUpgradingBlendModeMaterials = !!i1757[4]
  i1756.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1757[5], i1756.blendModeMaterials)
  var i1761 = i1757[6]
  var i1760 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1761.length; i += 2) {
  request.r(i1761[i + 0], i1761[i + 1], 1, i1760, '')
  }
  i1756.skeletonDataModifiers = i1760
  var i1763 = i1757[7]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.push( i1763[i + 0] );
  }
  i1756.fromAnimation = i1762
  var i1765 = i1757[8]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.push( i1765[i + 0] );
  }
  i1756.toAnimation = i1764
  i1756.duration = i1757[9]
  i1756.defaultMix = i1757[10]
  request.r(i1757[11], i1757[12], 0, i1756, 'controller')
  return i1756
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1768 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1769 = data
  i1768.applyAdditiveMaterial = !!i1769[0]
  var i1771 = i1769[1]
  var i1770 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1771[i + 0]));
  }
  i1768.additiveMaterials = i1770
  var i1773 = i1769[2]
  var i1772 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1773[i + 0]));
  }
  i1768.multiplyMaterials = i1772
  var i1775 = i1769[3]
  var i1774 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1775[i + 0]));
  }
  i1768.screenMaterials = i1774
  i1768.requiresBlendModeMaterials = !!i1769[4]
  return i1768
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1778 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1779 = data
  i1778.pageName = i1779[0]
  request.r(i1779[1], i1779[2], 0, i1778, 'material')
  return i1778
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1782 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1783 = data
  request.r(i1783[0], i1783[1], 0, i1782, 'atlasFile')
  var i1785 = i1783[2]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 2) {
  request.r(i1785[i + 0], i1785[i + 1], 2, i1784, '')
  }
  i1782.materials = i1784
  i1782.textureLoadingMode = i1783[3]
  request.r(i1783[4], i1783[5], 0, i1782, 'onDemandTextureLoader')
  return i1782
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1786 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1787 = data
  request.r(i1787[0], i1787[1], 0, i1786, 'atlas')
  i1786.normalStyle = i1787[2]
  i1786.normalSpacingOffset = i1787[3]
  i1786.boldStyle = i1787[4]
  i1786.boldSpacing = i1787[5]
  i1786.italicStyle = i1787[6]
  i1786.tabSize = i1787[7]
  i1786.hashCode = i1787[8]
  request.r(i1787[9], i1787[10], 0, i1786, 'material')
  i1786.materialHashCode = i1787[11]
  i1786.m_Version = i1787[12]
  i1786.m_SourceFontFileGUID = i1787[13]
  request.r(i1787[14], i1787[15], 0, i1786, 'm_SourceFontFile_EditorRef')
  request.r(i1787[16], i1787[17], 0, i1786, 'm_SourceFontFile')
  i1786.m_AtlasPopulationMode = i1787[18]
  i1786.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1787[19], i1786.m_FaceInfo)
  var i1789 = i1787[20]
  var i1788 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.add(request.d('UnityEngine.TextCore.Glyph', i1789[i + 0]));
  }
  i1786.m_GlyphTable = i1788
  var i1791 = i1787[21]
  var i1790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.add(request.d('TMPro.TMP_Character', i1791[i + 0]));
  }
  i1786.m_CharacterTable = i1790
  var i1793 = i1787[22]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 2) {
  request.r(i1793[i + 0], i1793[i + 1], 2, i1792, '')
  }
  i1786.m_AtlasTextures = i1792
  i1786.m_AtlasTextureIndex = i1787[23]
  i1786.m_IsMultiAtlasTexturesEnabled = !!i1787[24]
  i1786.m_ClearDynamicDataOnBuild = !!i1787[25]
  var i1795 = i1787[26]
  var i1794 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1795.length; i += 1) {
    i1794.add(request.d('UnityEngine.TextCore.GlyphRect', i1795[i + 0]));
  }
  i1786.m_UsedGlyphRects = i1794
  var i1797 = i1787[27]
  var i1796 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.add(request.d('UnityEngine.TextCore.GlyphRect', i1797[i + 0]));
  }
  i1786.m_FreeGlyphRects = i1796
  i1786.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1787[28], i1786.m_fontInfo)
  i1786.m_AtlasWidth = i1787[29]
  i1786.m_AtlasHeight = i1787[30]
  i1786.m_AtlasPadding = i1787[31]
  i1786.m_AtlasRenderMode = i1787[32]
  var i1799 = i1787[33]
  var i1798 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.add(request.d('TMPro.TMP_Glyph', i1799[i + 0]));
  }
  i1786.m_glyphInfoList = i1798
  i1786.m_KerningTable = request.d('TMPro.KerningTable', i1787[34], i1786.m_KerningTable)
  i1786.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1787[35], i1786.m_FontFeatureTable)
  var i1801 = i1787[36]
  var i1800 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1801.length; i += 2) {
  request.r(i1801[i + 0], i1801[i + 1], 1, i1800, '')
  }
  i1786.fallbackFontAssets = i1800
  var i1803 = i1787[37]
  var i1802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1803.length; i += 2) {
  request.r(i1803[i + 0], i1803[i + 1], 1, i1802, '')
  }
  i1786.m_FallbackFontAssetTable = i1802
  i1786.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1787[38], i1786.m_CreationSettings)
  var i1805 = i1787[39]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( request.d('TMPro.TMP_FontWeightPair', i1805[i + 0]) );
  }
  i1786.m_FontWeightTable = i1804
  var i1807 = i1787[40]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('TMPro.TMP_FontWeightPair', i1807[i + 0]) );
  }
  i1786.fontWeights = i1806
  return i1786
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1809 = data
  i1808.m_FaceIndex = i1809[0]
  i1808.m_FamilyName = i1809[1]
  i1808.m_StyleName = i1809[2]
  i1808.m_PointSize = i1809[3]
  i1808.m_Scale = i1809[4]
  i1808.m_UnitsPerEM = i1809[5]
  i1808.m_LineHeight = i1809[6]
  i1808.m_AscentLine = i1809[7]
  i1808.m_CapLine = i1809[8]
  i1808.m_MeanLine = i1809[9]
  i1808.m_Baseline = i1809[10]
  i1808.m_DescentLine = i1809[11]
  i1808.m_SuperscriptOffset = i1809[12]
  i1808.m_SuperscriptSize = i1809[13]
  i1808.m_SubscriptOffset = i1809[14]
  i1808.m_SubscriptSize = i1809[15]
  i1808.m_UnderlineOffset = i1809[16]
  i1808.m_UnderlineThickness = i1809[17]
  i1808.m_StrikethroughOffset = i1809[18]
  i1808.m_StrikethroughThickness = i1809[19]
  i1808.m_TabWidth = i1809[20]
  return i1808
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1812 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1813 = data
  i1812.m_Index = i1813[0]
  i1812.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1813[1], i1812.m_Metrics)
  i1812.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1813[2], i1812.m_GlyphRect)
  i1812.m_Scale = i1813[3]
  i1812.m_AtlasIndex = i1813[4]
  i1812.m_ClassDefinitionType = i1813[5]
  return i1812
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1814 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1815 = data
  i1814.m_Width = i1815[0]
  i1814.m_Height = i1815[1]
  i1814.m_HorizontalBearingX = i1815[2]
  i1814.m_HorizontalBearingY = i1815[3]
  i1814.m_HorizontalAdvance = i1815[4]
  return i1814
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1816 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1817 = data
  i1816.m_X = i1817[0]
  i1816.m_Y = i1817[1]
  i1816.m_Width = i1817[2]
  i1816.m_Height = i1817[3]
  return i1816
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1820 = root || request.c( 'TMPro.TMP_Character' )
  var i1821 = data
  i1820.m_ElementType = i1821[0]
  i1820.m_Unicode = i1821[1]
  i1820.m_GlyphIndex = i1821[2]
  i1820.m_Scale = i1821[3]
  return i1820
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1826 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1827 = data
  i1826.Name = i1827[0]
  i1826.PointSize = i1827[1]
  i1826.Scale = i1827[2]
  i1826.CharacterCount = i1827[3]
  i1826.LineHeight = i1827[4]
  i1826.Baseline = i1827[5]
  i1826.Ascender = i1827[6]
  i1826.CapHeight = i1827[7]
  i1826.Descender = i1827[8]
  i1826.CenterLine = i1827[9]
  i1826.SuperscriptOffset = i1827[10]
  i1826.SubscriptOffset = i1827[11]
  i1826.SubSize = i1827[12]
  i1826.Underline = i1827[13]
  i1826.UnderlineThickness = i1827[14]
  i1826.strikethrough = i1827[15]
  i1826.strikethroughThickness = i1827[16]
  i1826.TabWidth = i1827[17]
  i1826.Padding = i1827[18]
  i1826.AtlasWidth = i1827[19]
  i1826.AtlasHeight = i1827[20]
  return i1826
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1830 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1831 = data
  i1830.id = i1831[0]
  i1830.x = i1831[1]
  i1830.y = i1831[2]
  i1830.width = i1831[3]
  i1830.height = i1831[4]
  i1830.xOffset = i1831[5]
  i1830.yOffset = i1831[6]
  i1830.xAdvance = i1831[7]
  i1830.scale = i1831[8]
  return i1830
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1832 = root || request.c( 'TMPro.KerningTable' )
  var i1833 = data
  var i1835 = i1833[0]
  var i1834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.add(request.d('TMPro.KerningPair', i1835[i + 0]));
  }
  i1832.kerningPairs = i1834
  return i1832
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1838 = root || request.c( 'TMPro.KerningPair' )
  var i1839 = data
  i1838.xOffset = i1839[0]
  i1838.m_FirstGlyph = i1839[1]
  i1838.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1839[2], i1838.m_FirstGlyphAdjustments)
  i1838.m_SecondGlyph = i1839[3]
  i1838.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1839[4], i1838.m_SecondGlyphAdjustments)
  i1838.m_IgnoreSpacingAdjustments = !!i1839[5]
  return i1838
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1840 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1841 = data
  var i1843 = i1841[0]
  var i1842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1843.length; i += 1) {
    i1842.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1843[i + 0]));
  }
  i1840.m_GlyphPairAdjustmentRecords = i1842
  return i1840
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1846 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1847 = data
  i1846.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1847[0], i1846.m_FirstAdjustmentRecord)
  i1846.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1847[1], i1846.m_SecondAdjustmentRecord)
  i1846.m_FeatureLookupFlags = i1847[2]
  return i1846
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1850 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1851 = data
  i1850.sourceFontFileName = i1851[0]
  i1850.sourceFontFileGUID = i1851[1]
  i1850.pointSizeSamplingMode = i1851[2]
  i1850.pointSize = i1851[3]
  i1850.padding = i1851[4]
  i1850.packingMode = i1851[5]
  i1850.atlasWidth = i1851[6]
  i1850.atlasHeight = i1851[7]
  i1850.characterSetSelectionMode = i1851[8]
  i1850.characterSequence = i1851[9]
  i1850.referencedFontAssetGUID = i1851[10]
  i1850.referencedTextAssetGUID = i1851[11]
  i1850.fontStyle = i1851[12]
  i1850.fontStyleModifier = i1851[13]
  i1850.renderMode = i1851[14]
  i1850.includeFontFeatures = !!i1851[15]
  return i1850
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1854 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1855 = data
  request.r(i1855[0], i1855[1], 0, i1854, 'regularTypeface')
  request.r(i1855[2], i1855[3], 0, i1854, 'italicTypeface')
  return i1854
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1856 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1857 = data
  i1856.useSafeMode = !!i1857[0]
  i1856.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1857[1], i1856.safeModeOptions)
  i1856.timeScale = i1857[2]
  i1856.unscaledTimeScale = i1857[3]
  i1856.useSmoothDeltaTime = !!i1857[4]
  i1856.maxSmoothUnscaledTime = i1857[5]
  i1856.rewindCallbackMode = i1857[6]
  i1856.showUnityEditorReport = !!i1857[7]
  i1856.logBehaviour = i1857[8]
  i1856.drawGizmos = !!i1857[9]
  i1856.defaultRecyclable = !!i1857[10]
  i1856.defaultAutoPlay = i1857[11]
  i1856.defaultUpdateType = i1857[12]
  i1856.defaultTimeScaleIndependent = !!i1857[13]
  i1856.defaultEaseType = i1857[14]
  i1856.defaultEaseOvershootOrAmplitude = i1857[15]
  i1856.defaultEasePeriod = i1857[16]
  i1856.defaultAutoKill = !!i1857[17]
  i1856.defaultLoopType = i1857[18]
  i1856.debugMode = !!i1857[19]
  i1856.debugStoreTargetId = !!i1857[20]
  i1856.showPreviewPanel = !!i1857[21]
  i1856.storeSettingsLocation = i1857[22]
  i1856.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1857[23], i1856.modules)
  i1856.createASMDEF = !!i1857[24]
  i1856.showPlayingTweens = !!i1857[25]
  i1856.showPausedTweens = !!i1857[26]
  return i1856
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1858 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1859 = data
  i1858.logBehaviour = i1859[0]
  i1858.nestedTweenFailureBehaviour = i1859[1]
  return i1858
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1860 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1861 = data
  i1860.showPanel = !!i1861[0]
  i1860.audioEnabled = !!i1861[1]
  i1860.physicsEnabled = !!i1861[2]
  i1860.physics2DEnabled = !!i1861[3]
  i1860.spriteEnabled = !!i1861[4]
  i1860.uiEnabled = !!i1861[5]
  i1860.textMeshProEnabled = !!i1861[6]
  i1860.tk2DEnabled = !!i1861[7]
  i1860.deAudioEnabled = !!i1861[8]
  i1860.deUnityExtendedEnabled = !!i1861[9]
  i1860.epoOutlineEnabled = !!i1861[10]
  return i1860
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1862 = root || request.c( 'TMPro.TMP_Settings' )
  var i1863 = data
  i1862.m_enableWordWrapping = !!i1863[0]
  i1862.m_enableKerning = !!i1863[1]
  i1862.m_enableExtraPadding = !!i1863[2]
  i1862.m_enableTintAllSprites = !!i1863[3]
  i1862.m_enableParseEscapeCharacters = !!i1863[4]
  i1862.m_EnableRaycastTarget = !!i1863[5]
  i1862.m_GetFontFeaturesAtRuntime = !!i1863[6]
  i1862.m_missingGlyphCharacter = i1863[7]
  i1862.m_warningsDisabled = !!i1863[8]
  request.r(i1863[9], i1863[10], 0, i1862, 'm_defaultFontAsset')
  i1862.m_defaultFontAssetPath = i1863[11]
  i1862.m_defaultFontSize = i1863[12]
  i1862.m_defaultAutoSizeMinRatio = i1863[13]
  i1862.m_defaultAutoSizeMaxRatio = i1863[14]
  i1862.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1863[15], i1863[16] )
  i1862.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1863[17], i1863[18] )
  i1862.m_autoSizeTextContainer = !!i1863[19]
  i1862.m_IsTextObjectScaleStatic = !!i1863[20]
  var i1865 = i1863[21]
  var i1864 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1865.length; i += 2) {
  request.r(i1865[i + 0], i1865[i + 1], 1, i1864, '')
  }
  i1862.m_fallbackFontAssets = i1864
  i1862.m_matchMaterialPreset = !!i1863[22]
  request.r(i1863[23], i1863[24], 0, i1862, 'm_defaultSpriteAsset')
  i1862.m_defaultSpriteAssetPath = i1863[25]
  i1862.m_enableEmojiSupport = !!i1863[26]
  i1862.m_MissingCharacterSpriteUnicode = i1863[27]
  i1862.m_defaultColorGradientPresetsPath = i1863[28]
  request.r(i1863[29], i1863[30], 0, i1862, 'm_defaultStyleSheet')
  i1862.m_StyleSheetsResourcePath = i1863[31]
  request.r(i1863[32], i1863[33], 0, i1862, 'm_leadingCharacters')
  request.r(i1863[34], i1863[35], 0, i1862, 'm_followingCharacters')
  i1862.m_UseModernHangulLineBreakingRules = !!i1863[36]
  return i1862
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1866 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1867 = data
  request.r(i1867[0], i1867[1], 0, i1866, 'spriteSheet')
  var i1869 = i1867[2]
  var i1868 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.add(request.d('TMPro.TMP_Sprite', i1869[i + 0]));
  }
  i1866.spriteInfoList = i1868
  var i1871 = i1867[3]
  var i1870 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1871.length; i += 2) {
  request.r(i1871[i + 0], i1871[i + 1], 1, i1870, '')
  }
  i1866.fallbackSpriteAssets = i1870
  i1866.hashCode = i1867[4]
  request.r(i1867[5], i1867[6], 0, i1866, 'material')
  i1866.materialHashCode = i1867[7]
  i1866.m_Version = i1867[8]
  i1866.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1867[9], i1866.m_FaceInfo)
  var i1873 = i1867[10]
  var i1872 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.add(request.d('TMPro.TMP_SpriteCharacter', i1873[i + 0]));
  }
  i1866.m_SpriteCharacterTable = i1872
  var i1875 = i1867[11]
  var i1874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.add(request.d('TMPro.TMP_SpriteGlyph', i1875[i + 0]));
  }
  i1866.m_SpriteGlyphTable = i1874
  return i1866
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1878 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1879 = data
  i1878.name = i1879[0]
  i1878.hashCode = i1879[1]
  i1878.unicode = i1879[2]
  i1878.pivot = new pc.Vec2( i1879[3], i1879[4] )
  request.r(i1879[5], i1879[6], 0, i1878, 'sprite')
  i1878.id = i1879[7]
  i1878.x = i1879[8]
  i1878.y = i1879[9]
  i1878.width = i1879[10]
  i1878.height = i1879[11]
  i1878.xOffset = i1879[12]
  i1878.yOffset = i1879[13]
  i1878.xAdvance = i1879[14]
  i1878.scale = i1879[15]
  return i1878
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1884 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1885 = data
  i1884.m_Name = i1885[0]
  i1884.m_HashCode = i1885[1]
  i1884.m_ElementType = i1885[2]
  i1884.m_Unicode = i1885[3]
  i1884.m_GlyphIndex = i1885[4]
  i1884.m_Scale = i1885[5]
  return i1884
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1888 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1889 = data
  request.r(i1889[0], i1889[1], 0, i1888, 'sprite')
  i1888.m_Index = i1889[2]
  i1888.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1889[3], i1888.m_Metrics)
  i1888.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1889[4], i1888.m_GlyphRect)
  i1888.m_Scale = i1889[5]
  i1888.m_AtlasIndex = i1889[6]
  i1888.m_ClassDefinitionType = i1889[7]
  return i1888
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1890 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1891 = data
  var i1893 = i1891[0]
  var i1892 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.add(request.d('TMPro.TMP_Style', i1893[i + 0]));
  }
  i1890.m_StyleList = i1892
  return i1890
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1896 = root || request.c( 'TMPro.TMP_Style' )
  var i1897 = data
  i1896.m_Name = i1897[0]
  i1896.m_HashCode = i1897[1]
  i1896.m_OpeningDefinition = i1897[2]
  i1896.m_ClosingDefinition = i1897[3]
  i1896.m_OpeningTagArray = i1897[4]
  i1896.m_ClosingTagArray = i1897[5]
  i1896.m_OpeningTagUnicodeArray = i1897[6]
  i1896.m_ClosingTagUnicodeArray = i1897[7]
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1899 = data
  var i1901 = i1899[0]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1901[i + 0]) );
  }
  i1898.files = i1900
  i1898.componentToPrefabIds = i1899[1]
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1905 = data
  i1904.path = i1905[0]
  request.r(i1905[1], i1905[2], 0, i1904, 'unityObject')
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1907 = data
  var i1909 = i1907[0]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1909[i + 0]) );
  }
  i1906.scriptsExecutionOrder = i1908
  var i1911 = i1907[1]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1911[i + 0]) );
  }
  i1906.sortingLayers = i1910
  var i1913 = i1907[2]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1913[i + 0]) );
  }
  i1906.cullingLayers = i1912
  i1906.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1907[3], i1906.timeSettings)
  i1906.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1907[4], i1906.physicsSettings)
  i1906.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1907[5], i1906.physics2DSettings)
  i1906.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1907[6], i1906.qualitySettings)
  i1906.enableRealtimeShadows = !!i1907[7]
  i1906.enableAutoInstancing = !!i1907[8]
  i1906.enableStaticBatching = !!i1907[9]
  i1906.enableDynamicBatching = !!i1907[10]
  i1906.lightmapEncodingQuality = i1907[11]
  i1906.desiredColorSpace = i1907[12]
  var i1915 = i1907[13]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( i1915[i + 0] );
  }
  i1906.allTags = i1914
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1919 = data
  i1918.name = i1919[0]
  i1918.value = i1919[1]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1923 = data
  i1922.id = i1923[0]
  i1922.name = i1923[1]
  i1922.value = i1923[2]
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1927 = data
  i1926.id = i1927[0]
  i1926.name = i1927[1]
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1929 = data
  i1928.fixedDeltaTime = i1929[0]
  i1928.maximumDeltaTime = i1929[1]
  i1928.timeScale = i1929[2]
  i1928.maximumParticleTimestep = i1929[3]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1931 = data
  i1930.gravity = new pc.Vec3( i1931[0], i1931[1], i1931[2] )
  i1930.defaultSolverIterations = i1931[3]
  i1930.bounceThreshold = i1931[4]
  i1930.autoSyncTransforms = !!i1931[5]
  i1930.autoSimulation = !!i1931[6]
  var i1933 = i1931[7]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1933[i + 0]) );
  }
  i1930.collisionMatrix = i1932
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1937 = data
  i1936.enabled = !!i1937[0]
  i1936.layerId = i1937[1]
  i1936.otherLayerId = i1937[2]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1939 = data
  request.r(i1939[0], i1939[1], 0, i1938, 'material')
  i1938.gravity = new pc.Vec2( i1939[2], i1939[3] )
  i1938.positionIterations = i1939[4]
  i1938.velocityIterations = i1939[5]
  i1938.velocityThreshold = i1939[6]
  i1938.maxLinearCorrection = i1939[7]
  i1938.maxAngularCorrection = i1939[8]
  i1938.maxTranslationSpeed = i1939[9]
  i1938.maxRotationSpeed = i1939[10]
  i1938.baumgarteScale = i1939[11]
  i1938.baumgarteTOIScale = i1939[12]
  i1938.timeToSleep = i1939[13]
  i1938.linearSleepTolerance = i1939[14]
  i1938.angularSleepTolerance = i1939[15]
  i1938.defaultContactOffset = i1939[16]
  i1938.autoSimulation = !!i1939[17]
  i1938.queriesHitTriggers = !!i1939[18]
  i1938.queriesStartInColliders = !!i1939[19]
  i1938.callbacksOnDisable = !!i1939[20]
  i1938.reuseCollisionCallbacks = !!i1939[21]
  i1938.autoSyncTransforms = !!i1939[22]
  var i1941 = i1939[23]
  var i1940 = []
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1941[i + 0]) );
  }
  i1938.collisionMatrix = i1940
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1945 = data
  i1944.enabled = !!i1945[0]
  i1944.layerId = i1945[1]
  i1944.otherLayerId = i1945[2]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1947 = data
  var i1949 = i1947[0]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1949[i + 0]) );
  }
  i1946.qualityLevels = i1948
  var i1951 = i1947[1]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.push( i1951[i + 0] );
  }
  i1946.names = i1950
  i1946.shadows = i1947[2]
  i1946.anisotropicFiltering = i1947[3]
  i1946.antiAliasing = i1947[4]
  i1946.lodBias = i1947[5]
  i1946.shadowCascades = i1947[6]
  i1946.shadowDistance = i1947[7]
  i1946.shadowmaskMode = i1947[8]
  i1946.shadowProjection = i1947[9]
  i1946.shadowResolution = i1947[10]
  i1946.softParticles = !!i1947[11]
  i1946.softVegetation = !!i1947[12]
  i1946.activeColorSpace = i1947[13]
  i1946.desiredColorSpace = i1947[14]
  i1946.masterTextureLimit = i1947[15]
  i1946.maxQueuedFrames = i1947[16]
  i1946.particleRaycastBudget = i1947[17]
  i1946.pixelLightCount = i1947[18]
  i1946.realtimeReflectionProbes = !!i1947[19]
  i1946.shadowCascade2Split = i1947[20]
  i1946.shadowCascade4Split = new pc.Vec3( i1947[21], i1947[22], i1947[23] )
  i1946.streamingMipmapsActive = !!i1947[24]
  i1946.vSyncCount = i1947[25]
  i1946.asyncUploadBufferSize = i1947[26]
  i1946.asyncUploadTimeSlice = i1947[27]
  i1946.billboardsFaceCameraPosition = !!i1947[28]
  i1946.shadowNearPlaneOffset = i1947[29]
  i1946.streamingMipmapsMemoryBudget = i1947[30]
  i1946.maximumLODLevel = i1947[31]
  i1946.streamingMipmapsAddAllCameras = !!i1947[32]
  i1946.streamingMipmapsMaxLevelReduction = i1947[33]
  i1946.streamingMipmapsRenderersPerFrame = i1947[34]
  i1946.resolutionScalingFixedDPIFactor = i1947[35]
  i1946.streamingMipmapsMaxFileIORequests = i1947[36]
  i1946.currentQualityLevel = i1947[37]
  return i1946
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1954 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1955 = data
  i1954.xPlacement = i1955[0]
  i1954.yPlacement = i1955[1]
  i1954.xAdvance = i1955[2]
  i1954.yAdvance = i1955[3]
  return i1954
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1956 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1957 = data
  i1956.m_GlyphIndex = i1957[0]
  i1956.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1957[1], i1956.m_GlyphValueRecord)
  return i1956
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1958 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1959 = data
  i1958.m_XPlacement = i1959[0]
  i1958.m_YPlacement = i1959[1]
  i1958.m_XAdvance = i1959[2]
  i1958.m_YAdvance = i1959[3]
  return i1958
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[11],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[11],"76":[77],"78":[79],"80":[79],"15":[2],"81":[82],"83":[84],"85":[82],"86":[2],"87":[2],"17":[15],"5":[3,2],"88":[2],"16":[15],"89":[2],"90":[2],"91":[2],"92":[2],"93":[2],"94":[2],"95":[2],"34":[2],"96":[2],"18":[3,2],"97":[2],"98":[2],"99":[2],"100":[2],"101":[3,2],"102":[2],"103":[13],"104":[13],"14":[13],"105":[13],"106":[11],"107":[11],"108":[109],"110":[11],"111":[112],"113":[2],"114":[3,2],"115":[77],"21":[3,2],"116":[117,77],"118":[77],"119":[77,120],"121":[54],"122":[62],"123":[112],"124":[125],"126":[2],"127":[77,2],"7":[2,3],"128":[2],"129":[3,2],"130":[77],"131":[3,2],"132":[2],"133":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.RawImage","UnityEngine.AudioSource","UnityEngine.AudioClip","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.CanvasGroup","UnityEngine.MonoBehaviour","DraggableItem","ClickItem","UnityEngine.GameObject","UnityEngine.UI.Button","DropZone","UnityEngine.PolygonCollider2D","DG.Tweening.DOTweenAnimation","UnityEngine.BoxCollider2D","LunaManager","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "163.1";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BM_V07_ManhND_AnhPD";

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

Deserializers.buildID = "0ed30025-66b7-438e-bfc6-0fa6e775a7e2";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

