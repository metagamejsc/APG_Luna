var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1464 = root || request.c( 'UnityEngine.JointSpring' )
  var i1465 = data
  i1464.spring = i1465[0]
  i1464.damper = i1465[1]
  i1464.targetPosition = i1465[2]
  return i1464
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1466 = root || request.c( 'UnityEngine.JointMotor' )
  var i1467 = data
  i1466.m_TargetVelocity = i1467[0]
  i1466.m_Force = i1467[1]
  i1466.m_FreeSpin = i1467[2]
  return i1466
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1468 = root || request.c( 'UnityEngine.JointLimits' )
  var i1469 = data
  i1468.m_Min = i1469[0]
  i1468.m_Max = i1469[1]
  i1468.m_Bounciness = i1469[2]
  i1468.m_BounceMinVelocity = i1469[3]
  i1468.m_ContactDistance = i1469[4]
  i1468.minBounce = i1469[5]
  i1468.maxBounce = i1469[6]
  return i1468
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1470 = root || request.c( 'UnityEngine.JointDrive' )
  var i1471 = data
  i1470.m_PositionSpring = i1471[0]
  i1470.m_PositionDamper = i1471[1]
  i1470.m_MaximumForce = i1471[2]
  i1470.m_UseAcceleration = i1471[3]
  return i1470
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1472 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1473 = data
  i1472.m_Spring = i1473[0]
  i1472.m_Damper = i1473[1]
  return i1472
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1474 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1475 = data
  i1474.m_Limit = i1475[0]
  i1474.m_Bounciness = i1475[1]
  i1474.m_ContactDistance = i1475[2]
  return i1474
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1476 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1477 = data
  i1476.m_ExtremumSlip = i1477[0]
  i1476.m_ExtremumValue = i1477[1]
  i1476.m_AsymptoteSlip = i1477[2]
  i1476.m_AsymptoteValue = i1477[3]
  i1476.m_Stiffness = i1477[4]
  return i1476
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1478 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1479 = data
  i1478.m_LowerAngle = i1479[0]
  i1478.m_UpperAngle = i1479[1]
  return i1478
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1480 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1481 = data
  i1480.m_MotorSpeed = i1481[0]
  i1480.m_MaximumMotorTorque = i1481[1]
  return i1480
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1482 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1483 = data
  i1482.m_DampingRatio = i1483[0]
  i1482.m_Frequency = i1483[1]
  i1482.m_Angle = i1483[2]
  return i1482
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1484 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1485 = data
  i1484.m_LowerTranslation = i1485[0]
  i1484.m_UpperTranslation = i1485[1]
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1487 = data
  i1486.name = i1487[0]
  i1486.width = i1487[1]
  i1486.height = i1487[2]
  i1486.mipmapCount = i1487[3]
  i1486.anisoLevel = i1487[4]
  i1486.filterMode = i1487[5]
  i1486.hdr = !!i1487[6]
  i1486.format = i1487[7]
  i1486.wrapMode = i1487[8]
  i1486.alphaIsTransparency = !!i1487[9]
  i1486.alphaSource = i1487[10]
  i1486.graphicsFormat = i1487[11]
  i1486.sRGBTexture = !!i1487[12]
  i1486.desiredColorSpace = i1487[13]
  i1486.wrapU = i1487[14]
  i1486.wrapV = i1487[15]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1488 = root || new pc.UnityMaterial()
  var i1489 = data
  i1488.name = i1489[0]
  request.r(i1489[1], i1489[2], 0, i1488, 'shader')
  i1488.renderQueue = i1489[3]
  i1488.enableInstancing = !!i1489[4]
  var i1491 = i1489[5]
  var i1490 = []
  for(var i = 0; i < i1491.length; i += 1) {
    i1490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1491[i + 0]) );
  }
  i1488.floatParameters = i1490
  var i1493 = i1489[6]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1493[i + 0]) );
  }
  i1488.colorParameters = i1492
  var i1495 = i1489[7]
  var i1494 = []
  for(var i = 0; i < i1495.length; i += 1) {
    i1494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1495[i + 0]) );
  }
  i1488.vectorParameters = i1494
  var i1497 = i1489[8]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1497[i + 0]) );
  }
  i1488.textureParameters = i1496
  var i1499 = i1489[9]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1499[i + 0]) );
  }
  i1488.materialFlags = i1498
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1503 = data
  i1502.name = i1503[0]
  i1502.value = i1503[1]
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1507 = data
  i1506.name = i1507[0]
  i1506.value = new pc.Color(i1507[1], i1507[2], i1507[3], i1507[4])
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1511 = data
  i1510.name = i1511[0]
  i1510.value = new pc.Vec4( i1511[1], i1511[2], i1511[3], i1511[4] )
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1515 = data
  i1514.name = i1515[0]
  request.r(i1515[1], i1515[2], 0, i1514, 'value')
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1519 = data
  i1518.name = i1519[0]
  i1518.enabled = !!i1519[1]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1523 = data
  i1522.cullTransparentMesh = !!i1523[0]
  return i1522
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1524 = root || request.c( 'UnityEngine.UI.Image' )
  var i1525 = data
  request.r(i1525[0], i1525[1], 0, i1524, 'm_Sprite')
  i1524.m_Type = i1525[2]
  i1524.m_PreserveAspect = !!i1525[3]
  i1524.m_FillCenter = !!i1525[4]
  i1524.m_FillMethod = i1525[5]
  i1524.m_FillAmount = i1525[6]
  i1524.m_FillClockwise = !!i1525[7]
  i1524.m_FillOrigin = i1525[8]
  i1524.m_UseSpriteMesh = !!i1525[9]
  i1524.m_PixelsPerUnitMultiplier = i1525[10]
  i1524.m_Maskable = !!i1525[11]
  request.r(i1525[12], i1525[13], 0, i1524, 'm_Material')
  i1524.m_Color = new pc.Color(i1525[14], i1525[15], i1525[16], i1525[17])
  i1524.m_RaycastTarget = !!i1525[18]
  i1524.m_RaycastPadding = new pc.Vec4( i1525[19], i1525[20], i1525[21], i1525[22] )
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1527 = data
  i1526.name = i1527[0]
  i1526.tagId = i1527[1]
  i1526.enabled = !!i1527[2]
  i1526.isStatic = !!i1527[3]
  i1526.layer = i1527[4]
  return i1526
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1528 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1529 = data
  i1528.m_hasFontAssetChanged = !!i1529[0]
  request.r(i1529[1], i1529[2], 0, i1528, 'm_baseMaterial')
  i1528.m_maskOffset = new pc.Vec4( i1529[3], i1529[4], i1529[5], i1529[6] )
  i1528.m_text = i1529[7]
  i1528.m_isRightToLeft = !!i1529[8]
  request.r(i1529[9], i1529[10], 0, i1528, 'm_fontAsset')
  request.r(i1529[11], i1529[12], 0, i1528, 'm_sharedMaterial')
  var i1531 = i1529[13]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 2) {
  request.r(i1531[i + 0], i1531[i + 1], 2, i1530, '')
  }
  i1528.m_fontSharedMaterials = i1530
  request.r(i1529[14], i1529[15], 0, i1528, 'm_fontMaterial')
  var i1533 = i1529[16]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 2) {
  request.r(i1533[i + 0], i1533[i + 1], 2, i1532, '')
  }
  i1528.m_fontMaterials = i1532
  i1528.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1529[17], i1529[18], i1529[19], i1529[20])
  i1528.m_fontColor = new pc.Color(i1529[21], i1529[22], i1529[23], i1529[24])
  i1528.m_enableVertexGradient = !!i1529[25]
  i1528.m_colorMode = i1529[26]
  i1528.m_fontColorGradient = request.d('TMPro.VertexGradient', i1529[27], i1528.m_fontColorGradient)
  request.r(i1529[28], i1529[29], 0, i1528, 'm_fontColorGradientPreset')
  request.r(i1529[30], i1529[31], 0, i1528, 'm_spriteAsset')
  i1528.m_tintAllSprites = !!i1529[32]
  request.r(i1529[33], i1529[34], 0, i1528, 'm_StyleSheet')
  i1528.m_TextStyleHashCode = i1529[35]
  i1528.m_overrideHtmlColors = !!i1529[36]
  i1528.m_faceColor = UnityEngine.Color32.ConstructColor(i1529[37], i1529[38], i1529[39], i1529[40])
  i1528.m_fontSize = i1529[41]
  i1528.m_fontSizeBase = i1529[42]
  i1528.m_fontWeight = i1529[43]
  i1528.m_enableAutoSizing = !!i1529[44]
  i1528.m_fontSizeMin = i1529[45]
  i1528.m_fontSizeMax = i1529[46]
  i1528.m_fontStyle = i1529[47]
  i1528.m_HorizontalAlignment = i1529[48]
  i1528.m_VerticalAlignment = i1529[49]
  i1528.m_textAlignment = i1529[50]
  i1528.m_characterSpacing = i1529[51]
  i1528.m_wordSpacing = i1529[52]
  i1528.m_lineSpacing = i1529[53]
  i1528.m_lineSpacingMax = i1529[54]
  i1528.m_paragraphSpacing = i1529[55]
  i1528.m_charWidthMaxAdj = i1529[56]
  i1528.m_enableWordWrapping = !!i1529[57]
  i1528.m_wordWrappingRatios = i1529[58]
  i1528.m_overflowMode = i1529[59]
  request.r(i1529[60], i1529[61], 0, i1528, 'm_linkedTextComponent')
  request.r(i1529[62], i1529[63], 0, i1528, 'parentLinkedComponent')
  i1528.m_enableKerning = !!i1529[64]
  i1528.m_enableExtraPadding = !!i1529[65]
  i1528.checkPaddingRequired = !!i1529[66]
  i1528.m_isRichText = !!i1529[67]
  i1528.m_parseCtrlCharacters = !!i1529[68]
  i1528.m_isOrthographic = !!i1529[69]
  i1528.m_isCullingEnabled = !!i1529[70]
  i1528.m_horizontalMapping = i1529[71]
  i1528.m_verticalMapping = i1529[72]
  i1528.m_uvLineOffset = i1529[73]
  i1528.m_geometrySortingOrder = i1529[74]
  i1528.m_IsTextObjectScaleStatic = !!i1529[75]
  i1528.m_VertexBufferAutoSizeReduction = !!i1529[76]
  i1528.m_useMaxVisibleDescender = !!i1529[77]
  i1528.m_pageToDisplay = i1529[78]
  i1528.m_margin = new pc.Vec4( i1529[79], i1529[80], i1529[81], i1529[82] )
  i1528.m_isUsingLegacyAnimationComponent = !!i1529[83]
  i1528.m_isVolumetricText = !!i1529[84]
  i1528.m_Maskable = !!i1529[85]
  request.r(i1529[86], i1529[87], 0, i1528, 'm_Material')
  i1528.m_Color = new pc.Color(i1529[88], i1529[89], i1529[90], i1529[91])
  i1528.m_RaycastTarget = !!i1529[92]
  i1528.m_RaycastPadding = new pc.Vec4( i1529[93], i1529[94], i1529[95], i1529[96] )
  return i1528
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1536 = root || request.c( 'TMPro.VertexGradient' )
  var i1537 = data
  i1536.topLeft = new pc.Color(i1537[0], i1537[1], i1537[2], i1537[3])
  i1536.topRight = new pc.Color(i1537[4], i1537[5], i1537[6], i1537[7])
  i1536.bottomLeft = new pc.Color(i1537[8], i1537[9], i1537[10], i1537[11])
  i1536.bottomRight = new pc.Color(i1537[12], i1537[13], i1537[14], i1537[15])
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1539 = data
  i1538.name = i1539[0]
  i1538.index = i1539[1]
  i1538.startup = !!i1539[2]
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1541 = data
  i1540.position = new pc.Vec3( i1541[0], i1541[1], i1541[2] )
  i1540.scale = new pc.Vec3( i1541[3], i1541[4], i1541[5] )
  i1540.rotation = new pc.Quat(i1541[6], i1541[7], i1541[8], i1541[9])
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1543 = data
  i1542.aspect = i1543[0]
  i1542.orthographic = !!i1543[1]
  i1542.orthographicSize = i1543[2]
  i1542.backgroundColor = new pc.Color(i1543[3], i1543[4], i1543[5], i1543[6])
  i1542.nearClipPlane = i1543[7]
  i1542.farClipPlane = i1543[8]
  i1542.fieldOfView = i1543[9]
  i1542.depth = i1543[10]
  i1542.clearFlags = i1543[11]
  i1542.cullingMask = i1543[12]
  i1542.rect = i1543[13]
  request.r(i1543[14], i1543[15], 0, i1542, 'targetTexture')
  i1542.usePhysicalProperties = !!i1543[16]
  i1542.focalLength = i1543[17]
  i1542.sensorSize = new pc.Vec2( i1543[18], i1543[19] )
  i1542.lensShift = new pc.Vec2( i1543[20], i1543[21] )
  i1542.gateFit = i1543[22]
  i1542.commandBufferCount = i1543[23]
  i1542.cameraType = i1543[24]
  i1542.enabled = !!i1543[25]
  return i1542
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1544 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1545 = data
  request.r(i1545[0], i1545[1], 0, i1544, 'm_FirstSelected')
  i1544.m_sendNavigationEvents = !!i1545[2]
  i1544.m_DragThreshold = i1545[3]
  return i1544
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1546 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1547 = data
  i1546.m_HorizontalAxis = i1547[0]
  i1546.m_VerticalAxis = i1547[1]
  i1546.m_SubmitButton = i1547[2]
  i1546.m_CancelButton = i1547[3]
  i1546.m_InputActionsPerSecond = i1547[4]
  i1546.m_RepeatDelay = i1547[5]
  i1546.m_ForceModuleActive = !!i1547[6]
  i1546.m_SendPointerHoverToParent = !!i1547[7]
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1549 = data
  i1548.planeDistance = i1549[0]
  i1548.referencePixelsPerUnit = i1549[1]
  i1548.isFallbackOverlay = !!i1549[2]
  i1548.renderMode = i1549[3]
  i1548.renderOrder = i1549[4]
  i1548.sortingLayerName = i1549[5]
  i1548.sortingOrder = i1549[6]
  i1548.scaleFactor = i1549[7]
  request.r(i1549[8], i1549[9], 0, i1548, 'worldCamera')
  i1548.overrideSorting = !!i1549[10]
  i1548.pixelPerfect = !!i1549[11]
  i1548.targetDisplay = i1549[12]
  i1548.overridePixelPerfect = !!i1549[13]
  i1548.enabled = !!i1549[14]
  return i1548
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1550 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1551 = data
  i1550.m_UiScaleMode = i1551[0]
  i1550.m_ReferencePixelsPerUnit = i1551[1]
  i1550.m_ScaleFactor = i1551[2]
  i1550.m_ReferenceResolution = new pc.Vec2( i1551[3], i1551[4] )
  i1550.m_ScreenMatchMode = i1551[5]
  i1550.m_MatchWidthOrHeight = i1551[6]
  i1550.m_PhysicalUnit = i1551[7]
  i1550.m_FallbackScreenDPI = i1551[8]
  i1550.m_DefaultSpriteDPI = i1551[9]
  i1550.m_DynamicPixelsPerUnit = i1551[10]
  i1550.m_PresetInfoIsWorld = !!i1551[11]
  return i1550
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1552 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1553 = data
  i1552.m_IgnoreReversedGraphics = !!i1553[0]
  i1552.m_BlockingObjects = i1553[1]
  i1552.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1553[2] )
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

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1558 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1559 = data
  request.r(i1559[0], i1559[1], 0, i1558, 'skeletonDataAsset')
  request.r(i1559[2], i1559[3], 0, i1558, 'additiveMaterial')
  request.r(i1559[4], i1559[5], 0, i1558, 'multiplyMaterial')
  request.r(i1559[6], i1559[7], 0, i1558, 'screenMaterial')
  i1558.initialSkinName = i1559[8]
  i1558.initialFlipX = !!i1559[9]
  i1558.initialFlipY = !!i1559[10]
  i1558.startingAnimation = i1559[11]
  i1558.startingLoop = !!i1559[12]
  i1558.timeScale = i1559[13]
  i1558.freeze = !!i1559[14]
  i1558.layoutScaleMode = i1559[15]
  i1558.updateWhenInvisible = i1559[16]
  i1558.allowMultipleCanvasRenderers = !!i1559[17]
  var i1561 = i1559[18]
  var i1560 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1561.length; i += 2) {
  request.r(i1561[i + 0], i1561[i + 1], 1, i1560, '')
  }
  i1558.canvasRenderers = i1560
  i1558.enableSeparatorSlots = !!i1559[19]
  i1558.updateSeparatorPartLocation = !!i1559[20]
  i1558.updateSeparatorPartScale = !!i1559[21]
  i1558.disableMeshAssignmentOnOverride = !!i1559[22]
  i1558.m_SkeletonColor = new pc.Color(i1559[23], i1559[24], i1559[25], i1559[26])
  i1558.referenceSize = new pc.Vec2( i1559[27], i1559[28] )
  i1558.pivotOffset = new pc.Vec2( i1559[29], i1559[30] )
  i1558.referenceScale = i1559[31]
  i1558.layoutScale = i1559[32]
  i1558.rectTransformSize = new pc.Vec2( i1559[33], i1559[34] )
  i1558.editReferenceRect = !!i1559[35]
  var i1563 = i1559[36]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.push( i1563[i + 0] );
  }
  i1558.separatorSlotNames = i1562
  var i1565 = i1559[37]
  var i1564 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1565.length; i += 2) {
  request.r(i1565[i + 0], i1565[i + 1], 1, i1564, '')
  }
  i1558.separatorParts = i1564
  i1558.physicsPositionInheritanceFactor = new pc.Vec2( i1559[38], i1559[39] )
  i1558.physicsRotationInheritanceFactor = i1559[40]
  request.r(i1559[41], i1559[42], 0, i1558, 'physicsMovementRelativeTo')
  i1558.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1559[43], i1558.meshGenerator)
  i1558.updateTiming = i1559[44]
  i1558.unscaledTime = !!i1559[45]
  i1558.m_Maskable = !!i1559[46]
  request.r(i1559[47], i1559[48], 0, i1558, 'm_Material')
  i1558.m_Color = new pc.Color(i1559[49], i1559[50], i1559[51], i1559[52])
  i1558.m_RaycastTarget = !!i1559[53]
  i1558.m_RaycastPadding = new pc.Vec4( i1559[54], i1559[55], i1559[56], i1559[57] )
  return i1558
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1572 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1573 = data
  i1572.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1573[0], i1572.settings)
  return i1572
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1574 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1575 = data
  i1574.useClipping = !!i1575[0]
  i1574.zSpacing = i1575[1]
  i1574.tintBlack = !!i1575[2]
  i1574.canvasGroupCompatible = !!i1575[3]
  i1574.pmaVertexColors = !!i1575[4]
  i1574.addNormals = !!i1575[5]
  i1574.calculateTangents = !!i1575[6]
  i1574.immutableTriangles = !!i1575[7]
  return i1574
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1576 = root || request.c( 'DropZone' )
  var i1577 = data
  i1576.idDrop = i1577[0]
  i1576.isLose = !!i1577[1]
  var i1579 = i1577[2]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 2) {
  request.r(i1579[i + 0], i1579[i + 1], 2, i1578, '')
  }
  i1576.steps = i1578
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1583 = data
  i1582.usedByComposite = !!i1583[0]
  i1582.autoTiling = !!i1583[1]
  i1582.size = new pc.Vec2( i1583[2], i1583[3] )
  i1582.edgeRadius = i1583[4]
  i1582.enabled = !!i1583[5]
  i1582.isTrigger = !!i1583[6]
  i1582.usedByEffector = !!i1583[7]
  i1582.density = i1583[8]
  i1582.offset = new pc.Vec2( i1583[9], i1583[10] )
  request.r(i1583[11], i1583[12], 0, i1582, 'material')
  return i1582
}

Deserializers["DragSpawn"] = function (request, data, root) {
  var i1584 = root || request.c( 'DragSpawn' )
  var i1585 = data
  i1584.idDrag = i1585[0]
  i1584.isProcess = !!i1585[1]
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1587 = data
  i1586.m_Alpha = i1587[0]
  i1586.m_Interactable = !!i1587[1]
  i1586.m_BlocksRaycasts = !!i1587[2]
  i1586.m_IgnoreParentGroups = !!i1587[3]
  i1586.enabled = !!i1587[4]
  return i1586
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i1588 = root || request.c( 'ClickItem' )
  var i1589 = data
  var i1591 = i1589[0]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 2) {
  request.r(i1591[i + 0], i1591[i + 1], 2, i1590, '')
  }
  i1588.steps = i1590
  i1588.currentStep = i1589[1]
  i1588.isProcess = !!i1589[2]
  return i1588
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.UI.Button' )
  var i1593 = data
  i1592.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1593[0], i1592.m_OnClick)
  i1592.m_Navigation = request.d('UnityEngine.UI.Navigation', i1593[1], i1592.m_Navigation)
  i1592.m_Transition = i1593[2]
  i1592.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1593[3], i1592.m_Colors)
  i1592.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1593[4], i1592.m_SpriteState)
  i1592.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1593[5], i1592.m_AnimationTriggers)
  i1592.m_Interactable = !!i1593[6]
  request.r(i1593[7], i1593[8], 0, i1592, 'm_TargetGraphic')
  return i1592
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1594 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1595 = data
  i1594.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1595[0], i1594.m_PersistentCalls)
  return i1594
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1596 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1597 = data
  var i1599 = i1597[0]
  var i1598 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1599.length; i += 1) {
    i1598.add(request.d('UnityEngine.Events.PersistentCall', i1599[i + 0]));
  }
  i1596.m_Calls = i1598
  return i1596
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1602 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1603 = data
  request.r(i1603[0], i1603[1], 0, i1602, 'm_Target')
  i1602.m_TargetAssemblyTypeName = i1603[2]
  i1602.m_MethodName = i1603[3]
  i1602.m_Mode = i1603[4]
  i1602.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1603[5], i1602.m_Arguments)
  i1602.m_CallState = i1603[6]
  return i1602
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1604 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1605 = data
  i1604.m_Mode = i1605[0]
  i1604.m_WrapAround = !!i1605[1]
  request.r(i1605[2], i1605[3], 0, i1604, 'm_SelectOnUp')
  request.r(i1605[4], i1605[5], 0, i1604, 'm_SelectOnDown')
  request.r(i1605[6], i1605[7], 0, i1604, 'm_SelectOnLeft')
  request.r(i1605[8], i1605[9], 0, i1604, 'm_SelectOnRight')
  return i1604
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1606 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1607 = data
  i1606.m_NormalColor = new pc.Color(i1607[0], i1607[1], i1607[2], i1607[3])
  i1606.m_HighlightedColor = new pc.Color(i1607[4], i1607[5], i1607[6], i1607[7])
  i1606.m_PressedColor = new pc.Color(i1607[8], i1607[9], i1607[10], i1607[11])
  i1606.m_SelectedColor = new pc.Color(i1607[12], i1607[13], i1607[14], i1607[15])
  i1606.m_DisabledColor = new pc.Color(i1607[16], i1607[17], i1607[18], i1607[19])
  i1606.m_ColorMultiplier = i1607[20]
  i1606.m_FadeDuration = i1607[21]
  return i1606
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1609 = data
  request.r(i1609[0], i1609[1], 0, i1608, 'm_HighlightedSprite')
  request.r(i1609[2], i1609[3], 0, i1608, 'm_PressedSprite')
  request.r(i1609[4], i1609[5], 0, i1608, 'm_SelectedSprite')
  request.r(i1609[6], i1609[7], 0, i1608, 'm_DisabledSprite')
  return i1608
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1610 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1611 = data
  i1610.m_NormalTrigger = i1611[0]
  i1610.m_HighlightedTrigger = i1611[1]
  i1610.m_PressedTrigger = i1611[2]
  i1610.m_SelectedTrigger = i1611[3]
  i1610.m_DisabledTrigger = i1611[4]
  return i1610
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1612 = root || request.c( 'DraggableItem' )
  var i1613 = data
  i1612.idDrag = i1613[0]
  i1612.isProcess = !!i1613[1]
  return i1612
}

Deserializers["DropSpawn"] = function (request, data, root) {
  var i1614 = root || request.c( 'DropSpawn' )
  var i1615 = data
  var i1617 = i1615[0]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 2) {
  request.r(i1617[i + 0], i1617[i + 1], 2, i1616, '')
  }
  i1614.spawnPrefabs = i1616
  request.r(i1615[1], i1615[2], 0, i1614, 'transSpawn')
  request.r(i1615[3], i1615[4], 0, i1614, 'idleHumman')
  request.r(i1615[5], i1615[6], 0, i1614, 'moveHumman')
  var i1619 = i1615[7]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 3) {
    i1618.push( new pc.Vec3( i1619[i + 0], i1619[i + 1], i1619[i + 2] ) );
  }
  i1614.transMoves = i1618
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1623 = data
  i1622.usedByComposite = !!i1623[0]
  i1622.autoTiling = !!i1623[1]
  var i1625 = i1623[2]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 1) {
  var i1627 = i1625[i + 0]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 2) {
    i1626.push( new pc.Vec2( i1627[i + 0], i1627[i + 1] ) );
  }
    i1624.push( i1626 );
  }
  i1622.points = i1624
  i1622.enabled = !!i1623[3]
  i1622.isTrigger = !!i1623[4]
  i1622.usedByEffector = !!i1623[5]
  i1622.density = i1623[6]
  i1622.offset = new pc.Vec2( i1623[7], i1623[8] )
  request.r(i1623[9], i1623[10], 0, i1622, 'material')
  return i1622
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1634 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1635 = data
  i1634.m_Spacing = i1635[0]
  i1634.m_ChildForceExpandWidth = !!i1635[1]
  i1634.m_ChildForceExpandHeight = !!i1635[2]
  i1634.m_ChildControlWidth = !!i1635[3]
  i1634.m_ChildControlHeight = !!i1635[4]
  i1634.m_ChildScaleWidth = !!i1635[5]
  i1634.m_ChildScaleHeight = !!i1635[6]
  i1634.m_ReverseArrangement = !!i1635[7]
  i1634.m_Padding = UnityEngine.RectOffset.FromPaddings(i1635[8], i1635[9], i1635[10], i1635[11])
  i1634.m_ChildAlignment = i1635[12]
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

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1640 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, 'm_ObjectArgument')
  i1640.m_ObjectArgumentAssemblyTypeName = i1641[2]
  i1640.m_IntArgument = i1641[3]
  i1640.m_FloatArgument = i1641[4]
  i1640.m_StringArgument = i1641[5]
  i1640.m_BoolArgument = !!i1641[6]
  return i1640
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1642 = root || request.c( 'LunaManager' )
  var i1643 = data
  var i1645 = i1643[0]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 2) {
  request.r(i1645[i + 0], i1645[i + 1], 2, i1644, '')
  }
  i1642.lstBtnInstall = i1644
  request.r(i1643[1], i1643[2], 0, i1642, 'StartCard')
  request.r(i1643[3], i1643[4], 0, i1642, 'EndCard')
  request.r(i1643[5], i1643[6], 0, i1642, 'Parent')
  request.r(i1643[7], i1643[8], 0, i1642, 'LoseTitle')
  var i1647 = i1643[9]
  var i1646 = []
  for(var i = 0; i < i1647.length; i += 2) {
  request.r(i1647[i + 0], i1647[i + 1], 2, i1646, '')
  }
  i1642.tutorial = i1646
  i1642.isDrag = !!i1643[10]
  i1642.countPlay = i1643[11]
  i1642.countPlayFinal = i1643[12]
  i1642.countPlayMax = i1643[13]
  i1642.timeDropFinal = i1643[14]
  i1642.colorBG = new pc.Color(i1643[15], i1643[16], i1643[17], i1643[18])
  request.r(i1643[19], i1643[20], 0, i1642, 'texture2D')
  request.r(i1643[21], i1643[22], 0, i1642, 'rawImageBG')
  request.r(i1643[23], i1643[24], 0, i1642, 'textProgess')
  request.r(i1643[25], i1643[26], 0, i1642, 'imgProgess')
  request.r(i1643[27], i1643[28], 0, i1642, 'timeText')
  return i1642
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1650 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1651 = data
  i1650.m_ShowMaskGraphic = !!i1651[0]
  return i1650
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1652 = root || request.c( 'AudioController' )
  var i1653 = data
  request.r(i1653[0], i1653[1], 0, i1652, 'bgmSource')
  request.r(i1653[2], i1653[3], 0, i1652, 'sfxSource')
  var i1655 = i1653[4]
  var i1654 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.add(request.d('AudioEntry', i1655[i + 0]));
  }
  i1652.audioEntries = i1654
  return i1652
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i1658 = root || request.c( 'AudioEntry' )
  var i1659 = data
  i1658.key = i1659[0]
  request.r(i1659[1], i1659[2], 0, i1658, 'clip')
  i1658.volume = i1659[3]
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1661 = data
  i1660.ambientIntensity = i1661[0]
  i1660.reflectionIntensity = i1661[1]
  i1660.ambientMode = i1661[2]
  i1660.ambientLight = new pc.Color(i1661[3], i1661[4], i1661[5], i1661[6])
  i1660.ambientSkyColor = new pc.Color(i1661[7], i1661[8], i1661[9], i1661[10])
  i1660.ambientGroundColor = new pc.Color(i1661[11], i1661[12], i1661[13], i1661[14])
  i1660.ambientEquatorColor = new pc.Color(i1661[15], i1661[16], i1661[17], i1661[18])
  i1660.fogColor = new pc.Color(i1661[19], i1661[20], i1661[21], i1661[22])
  i1660.fogEndDistance = i1661[23]
  i1660.fogStartDistance = i1661[24]
  i1660.fogDensity = i1661[25]
  i1660.fog = !!i1661[26]
  request.r(i1661[27], i1661[28], 0, i1660, 'skybox')
  i1660.fogMode = i1661[29]
  var i1663 = i1661[30]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1663[i + 0]) );
  }
  i1660.lightmaps = i1662
  i1660.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1661[31], i1660.lightProbes)
  i1660.lightmapsMode = i1661[32]
  i1660.mixedBakeMode = i1661[33]
  i1660.environmentLightingMode = i1661[34]
  i1660.ambientProbe = new pc.SphericalHarmonicsL2(i1661[35])
  i1660.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1661[36])
  i1660.useReferenceAmbientProbe = !!i1661[37]
  request.r(i1661[38], i1661[39], 0, i1660, 'customReflection')
  request.r(i1661[40], i1661[41], 0, i1660, 'defaultReflection')
  i1660.defaultReflectionMode = i1661[42]
  i1660.defaultReflectionResolution = i1661[43]
  i1660.sunLightObjectId = i1661[44]
  i1660.pixelLightCount = i1661[45]
  i1660.defaultReflectionHDR = !!i1661[46]
  i1660.hasLightDataAsset = !!i1661[47]
  i1660.hasManualGenerate = !!i1661[48]
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1667 = data
  request.r(i1667[0], i1667[1], 0, i1666, 'lightmapColor')
  request.r(i1667[2], i1667[3], 0, i1666, 'lightmapDirection')
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1668 = root || new UnityEngine.LightProbes()
  var i1669 = data
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1675 = data
  var i1677 = i1675[0]
  var i1676 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1677[i + 0]));
  }
  i1674.ShaderCompilationErrors = i1676
  i1674.name = i1675[1]
  i1674.guid = i1675[2]
  var i1679 = i1675[3]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.push( i1679[i + 0] );
  }
  i1674.shaderDefinedKeywords = i1678
  var i1681 = i1675[4]
  var i1680 = []
  for(var i = 0; i < i1681.length; i += 1) {
    i1680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1681[i + 0]) );
  }
  i1674.passes = i1680
  var i1683 = i1675[5]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1683[i + 0]) );
  }
  i1674.usePasses = i1682
  var i1685 = i1675[6]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1685[i + 0]) );
  }
  i1674.defaultParameterValues = i1684
  request.r(i1675[7], i1675[8], 0, i1674, 'unityFallbackShader')
  i1674.readDepth = !!i1675[9]
  i1674.isCreatedByShaderGraph = !!i1675[10]
  i1674.disableBatching = !!i1675[11]
  i1674.compiled = !!i1675[12]
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1689 = data
  i1688.shaderName = i1689[0]
  i1688.errorMessage = i1689[1]
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1692 = root || new pc.UnityShaderPass()
  var i1693 = data
  i1692.id = i1693[0]
  i1692.subShaderIndex = i1693[1]
  i1692.name = i1693[2]
  i1692.passType = i1693[3]
  i1692.grabPassTextureName = i1693[4]
  i1692.usePass = !!i1693[5]
  i1692.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1693[6], i1692.zTest)
  i1692.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1693[7], i1692.zWrite)
  i1692.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1693[8], i1692.culling)
  i1692.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1693[9], i1692.blending)
  i1692.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1693[10], i1692.alphaBlending)
  i1692.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1693[11], i1692.colorWriteMask)
  i1692.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1693[12], i1692.offsetUnits)
  i1692.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1693[13], i1692.offsetFactor)
  i1692.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1693[14], i1692.stencilRef)
  i1692.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1693[15], i1692.stencilReadMask)
  i1692.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1693[16], i1692.stencilWriteMask)
  i1692.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1693[17], i1692.stencilOp)
  i1692.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1693[18], i1692.stencilOpFront)
  i1692.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1693[19], i1692.stencilOpBack)
  var i1695 = i1693[20]
  var i1694 = []
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1695[i + 0]) );
  }
  i1692.tags = i1694
  var i1697 = i1693[21]
  var i1696 = []
  for(var i = 0; i < i1697.length; i += 1) {
    i1696.push( i1697[i + 0] );
  }
  i1692.passDefinedKeywords = i1696
  var i1699 = i1693[22]
  var i1698 = []
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1699[i + 0]) );
  }
  i1692.passDefinedKeywordGroups = i1698
  var i1701 = i1693[23]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1701[i + 0]) );
  }
  i1692.variants = i1700
  var i1703 = i1693[24]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1703[i + 0]) );
  }
  i1692.excludedVariants = i1702
  i1692.hasDepthReader = !!i1693[25]
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1705 = data
  i1704.val = i1705[0]
  i1704.name = i1705[1]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1707 = data
  i1706.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1707[0], i1706.src)
  i1706.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1707[1], i1706.dst)
  i1706.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1707[2], i1706.op)
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1709 = data
  i1708.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1709[0], i1708.pass)
  i1708.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1709[1], i1708.fail)
  i1708.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1709[2], i1708.zFail)
  i1708.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1709[3], i1708.comp)
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1713 = data
  i1712.name = i1713[0]
  i1712.value = i1713[1]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1717 = data
  var i1719 = i1717[0]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( i1719[i + 0] );
  }
  i1716.keywords = i1718
  i1716.hasDiscard = !!i1717[1]
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1723 = data
  i1722.passId = i1723[0]
  i1722.subShaderIndex = i1723[1]
  var i1725 = i1723[2]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( i1725[i + 0] );
  }
  i1722.keywords = i1724
  i1722.vertexProgram = i1723[3]
  i1722.fragmentProgram = i1723[4]
  i1722.exportedForWebGl2 = !!i1723[5]
  i1722.readDepth = !!i1723[6]
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1729 = data
  request.r(i1729[0], i1729[1], 0, i1728, 'shader')
  i1728.pass = i1729[2]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1733 = data
  i1732.name = i1733[0]
  i1732.type = i1733[1]
  i1732.value = new pc.Vec4( i1733[2], i1733[3], i1733[4], i1733[5] )
  i1732.textureValue = i1733[6]
  i1732.shaderPropertyFlag = i1733[7]
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1735 = data
  i1734.name = i1735[0]
  request.r(i1735[1], i1735[2], 0, i1734, 'texture')
  i1734.aabb = i1735[3]
  i1734.vertices = i1735[4]
  i1734.triangles = i1735[5]
  i1734.textureRect = UnityEngine.Rect.MinMaxRect(i1735[6], i1735[7], i1735[8], i1735[9])
  i1734.packedRect = UnityEngine.Rect.MinMaxRect(i1735[10], i1735[11], i1735[12], i1735[13])
  i1734.border = new pc.Vec4( i1735[14], i1735[15], i1735[16], i1735[17] )
  i1734.transparency = i1735[18]
  i1734.bounds = i1735[19]
  i1734.pixelsPerUnit = i1735[20]
  i1734.textureWidth = i1735[21]
  i1734.textureHeight = i1735[22]
  i1734.nativeSize = new pc.Vec2( i1735[23], i1735[24] )
  i1734.pivot = new pc.Vec2( i1735[25], i1735[26] )
  i1734.textureRectOffset = new pc.Vec2( i1735[27], i1735[28] )
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1737 = data
  i1736.name = i1737[0]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1739 = data
  i1738.name = i1739[0]
  i1738.ascent = i1739[1]
  i1738.originalLineHeight = i1739[2]
  i1738.fontSize = i1739[3]
  var i1741 = i1739[4]
  var i1740 = []
  for(var i = 0; i < i1741.length; i += 1) {
    i1740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1741[i + 0]) );
  }
  i1738.characterInfo = i1740
  request.r(i1739[5], i1739[6], 0, i1738, 'texture')
  i1738.originalFontSize = i1739[7]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1745 = data
  i1744.index = i1745[0]
  i1744.advance = i1745[1]
  i1744.bearing = i1745[2]
  i1744.glyphWidth = i1745[3]
  i1744.glyphHeight = i1745[4]
  i1744.minX = i1745[5]
  i1744.maxX = i1745[6]
  i1744.minY = i1745[7]
  i1744.maxY = i1745[8]
  i1744.uvBottomLeftX = i1745[9]
  i1744.uvBottomLeftY = i1745[10]
  i1744.uvBottomRightX = i1745[11]
  i1744.uvBottomRightY = i1745[12]
  i1744.uvTopLeftX = i1745[13]
  i1744.uvTopLeftY = i1745[14]
  i1744.uvTopRightX = i1745[15]
  i1744.uvTopRightY = i1745[16]
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1747 = data
  i1746.name = i1747[0]
  i1746.bytes64 = i1747[1]
  i1746.data = i1747[2]
  return i1746
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1748 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1749 = data
  var i1751 = i1749[0]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 2) {
  request.r(i1751[i + 0], i1751[i + 1], 2, i1750, '')
  }
  i1748.atlasAssets = i1750
  i1748.scale = i1749[1]
  request.r(i1749[2], i1749[3], 0, i1748, 'skeletonJSON')
  i1748.isUpgradingBlendModeMaterials = !!i1749[4]
  i1748.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1749[5], i1748.blendModeMaterials)
  var i1753 = i1749[6]
  var i1752 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1753.length; i += 2) {
  request.r(i1753[i + 0], i1753[i + 1], 1, i1752, '')
  }
  i1748.skeletonDataModifiers = i1752
  var i1755 = i1749[7]
  var i1754 = []
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.push( i1755[i + 0] );
  }
  i1748.fromAnimation = i1754
  var i1757 = i1749[8]
  var i1756 = []
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.push( i1757[i + 0] );
  }
  i1748.toAnimation = i1756
  i1748.duration = i1749[9]
  i1748.defaultMix = i1749[10]
  request.r(i1749[11], i1749[12], 0, i1748, 'controller')
  return i1748
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1760 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1761 = data
  i1760.applyAdditiveMaterial = !!i1761[0]
  var i1763 = i1761[1]
  var i1762 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1763[i + 0]));
  }
  i1760.additiveMaterials = i1762
  var i1765 = i1761[2]
  var i1764 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1765[i + 0]));
  }
  i1760.multiplyMaterials = i1764
  var i1767 = i1761[3]
  var i1766 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1767[i + 0]));
  }
  i1760.screenMaterials = i1766
  i1760.requiresBlendModeMaterials = !!i1761[4]
  return i1760
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1770 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1771 = data
  i1770.pageName = i1771[0]
  request.r(i1771[1], i1771[2], 0, i1770, 'material')
  return i1770
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1774 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1775 = data
  request.r(i1775[0], i1775[1], 0, i1774, 'atlasFile')
  var i1777 = i1775[2]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 2) {
  request.r(i1777[i + 0], i1777[i + 1], 2, i1776, '')
  }
  i1774.materials = i1776
  i1774.textureLoadingMode = i1775[3]
  request.r(i1775[4], i1775[5], 0, i1774, 'onDemandTextureLoader')
  return i1774
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1778 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1779 = data
  request.r(i1779[0], i1779[1], 0, i1778, 'atlas')
  i1778.normalStyle = i1779[2]
  i1778.normalSpacingOffset = i1779[3]
  i1778.boldStyle = i1779[4]
  i1778.boldSpacing = i1779[5]
  i1778.italicStyle = i1779[6]
  i1778.tabSize = i1779[7]
  i1778.hashCode = i1779[8]
  request.r(i1779[9], i1779[10], 0, i1778, 'material')
  i1778.materialHashCode = i1779[11]
  i1778.m_Version = i1779[12]
  i1778.m_SourceFontFileGUID = i1779[13]
  request.r(i1779[14], i1779[15], 0, i1778, 'm_SourceFontFile_EditorRef')
  request.r(i1779[16], i1779[17], 0, i1778, 'm_SourceFontFile')
  i1778.m_AtlasPopulationMode = i1779[18]
  i1778.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1779[19], i1778.m_FaceInfo)
  var i1781 = i1779[20]
  var i1780 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.add(request.d('UnityEngine.TextCore.Glyph', i1781[i + 0]));
  }
  i1778.m_GlyphTable = i1780
  var i1783 = i1779[21]
  var i1782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.add(request.d('TMPro.TMP_Character', i1783[i + 0]));
  }
  i1778.m_CharacterTable = i1782
  var i1785 = i1779[22]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 2) {
  request.r(i1785[i + 0], i1785[i + 1], 2, i1784, '')
  }
  i1778.m_AtlasTextures = i1784
  i1778.m_AtlasTextureIndex = i1779[23]
  i1778.m_IsMultiAtlasTexturesEnabled = !!i1779[24]
  i1778.m_ClearDynamicDataOnBuild = !!i1779[25]
  var i1787 = i1779[26]
  var i1786 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.add(request.d('UnityEngine.TextCore.GlyphRect', i1787[i + 0]));
  }
  i1778.m_UsedGlyphRects = i1786
  var i1789 = i1779[27]
  var i1788 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.add(request.d('UnityEngine.TextCore.GlyphRect', i1789[i + 0]));
  }
  i1778.m_FreeGlyphRects = i1788
  i1778.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1779[28], i1778.m_fontInfo)
  i1778.m_AtlasWidth = i1779[29]
  i1778.m_AtlasHeight = i1779[30]
  i1778.m_AtlasPadding = i1779[31]
  i1778.m_AtlasRenderMode = i1779[32]
  var i1791 = i1779[33]
  var i1790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.add(request.d('TMPro.TMP_Glyph', i1791[i + 0]));
  }
  i1778.m_glyphInfoList = i1790
  i1778.m_KerningTable = request.d('TMPro.KerningTable', i1779[34], i1778.m_KerningTable)
  i1778.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1779[35], i1778.m_FontFeatureTable)
  var i1793 = i1779[36]
  var i1792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1793.length; i += 2) {
  request.r(i1793[i + 0], i1793[i + 1], 1, i1792, '')
  }
  i1778.fallbackFontAssets = i1792
  var i1795 = i1779[37]
  var i1794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1795.length; i += 2) {
  request.r(i1795[i + 0], i1795[i + 1], 1, i1794, '')
  }
  i1778.m_FallbackFontAssetTable = i1794
  i1778.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1779[38], i1778.m_CreationSettings)
  var i1797 = i1779[39]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.push( request.d('TMPro.TMP_FontWeightPair', i1797[i + 0]) );
  }
  i1778.m_FontWeightTable = i1796
  var i1799 = i1779[40]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('TMPro.TMP_FontWeightPair', i1799[i + 0]) );
  }
  i1778.fontWeights = i1798
  return i1778
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1801 = data
  i1800.m_FaceIndex = i1801[0]
  i1800.m_FamilyName = i1801[1]
  i1800.m_StyleName = i1801[2]
  i1800.m_PointSize = i1801[3]
  i1800.m_Scale = i1801[4]
  i1800.m_UnitsPerEM = i1801[5]
  i1800.m_LineHeight = i1801[6]
  i1800.m_AscentLine = i1801[7]
  i1800.m_CapLine = i1801[8]
  i1800.m_MeanLine = i1801[9]
  i1800.m_Baseline = i1801[10]
  i1800.m_DescentLine = i1801[11]
  i1800.m_SuperscriptOffset = i1801[12]
  i1800.m_SuperscriptSize = i1801[13]
  i1800.m_SubscriptOffset = i1801[14]
  i1800.m_SubscriptSize = i1801[15]
  i1800.m_UnderlineOffset = i1801[16]
  i1800.m_UnderlineThickness = i1801[17]
  i1800.m_StrikethroughOffset = i1801[18]
  i1800.m_StrikethroughThickness = i1801[19]
  i1800.m_TabWidth = i1801[20]
  return i1800
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1805 = data
  i1804.m_Index = i1805[0]
  i1804.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1805[1], i1804.m_Metrics)
  i1804.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1805[2], i1804.m_GlyphRect)
  i1804.m_Scale = i1805[3]
  i1804.m_AtlasIndex = i1805[4]
  i1804.m_ClassDefinitionType = i1805[5]
  return i1804
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1807 = data
  i1806.m_Width = i1807[0]
  i1806.m_Height = i1807[1]
  i1806.m_HorizontalBearingX = i1807[2]
  i1806.m_HorizontalBearingY = i1807[3]
  i1806.m_HorizontalAdvance = i1807[4]
  return i1806
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1809 = data
  i1808.m_X = i1809[0]
  i1808.m_Y = i1809[1]
  i1808.m_Width = i1809[2]
  i1808.m_Height = i1809[3]
  return i1808
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1812 = root || request.c( 'TMPro.TMP_Character' )
  var i1813 = data
  i1812.m_ElementType = i1813[0]
  i1812.m_Unicode = i1813[1]
  i1812.m_GlyphIndex = i1813[2]
  i1812.m_Scale = i1813[3]
  return i1812
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1818 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1819 = data
  i1818.Name = i1819[0]
  i1818.PointSize = i1819[1]
  i1818.Scale = i1819[2]
  i1818.CharacterCount = i1819[3]
  i1818.LineHeight = i1819[4]
  i1818.Baseline = i1819[5]
  i1818.Ascender = i1819[6]
  i1818.CapHeight = i1819[7]
  i1818.Descender = i1819[8]
  i1818.CenterLine = i1819[9]
  i1818.SuperscriptOffset = i1819[10]
  i1818.SubscriptOffset = i1819[11]
  i1818.SubSize = i1819[12]
  i1818.Underline = i1819[13]
  i1818.UnderlineThickness = i1819[14]
  i1818.strikethrough = i1819[15]
  i1818.strikethroughThickness = i1819[16]
  i1818.TabWidth = i1819[17]
  i1818.Padding = i1819[18]
  i1818.AtlasWidth = i1819[19]
  i1818.AtlasHeight = i1819[20]
  return i1818
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1822 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1823 = data
  i1822.id = i1823[0]
  i1822.x = i1823[1]
  i1822.y = i1823[2]
  i1822.width = i1823[3]
  i1822.height = i1823[4]
  i1822.xOffset = i1823[5]
  i1822.yOffset = i1823[6]
  i1822.xAdvance = i1823[7]
  i1822.scale = i1823[8]
  return i1822
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1824 = root || request.c( 'TMPro.KerningTable' )
  var i1825 = data
  var i1827 = i1825[0]
  var i1826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1827.length; i += 1) {
    i1826.add(request.d('TMPro.KerningPair', i1827[i + 0]));
  }
  i1824.kerningPairs = i1826
  return i1824
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1830 = root || request.c( 'TMPro.KerningPair' )
  var i1831 = data
  i1830.xOffset = i1831[0]
  i1830.m_FirstGlyph = i1831[1]
  i1830.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1831[2], i1830.m_FirstGlyphAdjustments)
  i1830.m_SecondGlyph = i1831[3]
  i1830.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1831[4], i1830.m_SecondGlyphAdjustments)
  i1830.m_IgnoreSpacingAdjustments = !!i1831[5]
  return i1830
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1832 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1833 = data
  var i1835 = i1833[0]
  var i1834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1835[i + 0]));
  }
  i1832.m_GlyphPairAdjustmentRecords = i1834
  return i1832
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1838 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1839 = data
  i1838.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1839[0], i1838.m_FirstAdjustmentRecord)
  i1838.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1839[1], i1838.m_SecondAdjustmentRecord)
  i1838.m_FeatureLookupFlags = i1839[2]
  return i1838
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1842 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1843 = data
  i1842.sourceFontFileName = i1843[0]
  i1842.sourceFontFileGUID = i1843[1]
  i1842.pointSizeSamplingMode = i1843[2]
  i1842.pointSize = i1843[3]
  i1842.padding = i1843[4]
  i1842.packingMode = i1843[5]
  i1842.atlasWidth = i1843[6]
  i1842.atlasHeight = i1843[7]
  i1842.characterSetSelectionMode = i1843[8]
  i1842.characterSequence = i1843[9]
  i1842.referencedFontAssetGUID = i1843[10]
  i1842.referencedTextAssetGUID = i1843[11]
  i1842.fontStyle = i1843[12]
  i1842.fontStyleModifier = i1843[13]
  i1842.renderMode = i1843[14]
  i1842.includeFontFeatures = !!i1843[15]
  return i1842
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1846 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1847 = data
  request.r(i1847[0], i1847[1], 0, i1846, 'regularTypeface')
  request.r(i1847[2], i1847[3], 0, i1846, 'italicTypeface')
  return i1846
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1848 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1849 = data
  i1848.useSafeMode = !!i1849[0]
  i1848.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1849[1], i1848.safeModeOptions)
  i1848.timeScale = i1849[2]
  i1848.unscaledTimeScale = i1849[3]
  i1848.useSmoothDeltaTime = !!i1849[4]
  i1848.maxSmoothUnscaledTime = i1849[5]
  i1848.rewindCallbackMode = i1849[6]
  i1848.showUnityEditorReport = !!i1849[7]
  i1848.logBehaviour = i1849[8]
  i1848.drawGizmos = !!i1849[9]
  i1848.defaultRecyclable = !!i1849[10]
  i1848.defaultAutoPlay = i1849[11]
  i1848.defaultUpdateType = i1849[12]
  i1848.defaultTimeScaleIndependent = !!i1849[13]
  i1848.defaultEaseType = i1849[14]
  i1848.defaultEaseOvershootOrAmplitude = i1849[15]
  i1848.defaultEasePeriod = i1849[16]
  i1848.defaultAutoKill = !!i1849[17]
  i1848.defaultLoopType = i1849[18]
  i1848.debugMode = !!i1849[19]
  i1848.debugStoreTargetId = !!i1849[20]
  i1848.showPreviewPanel = !!i1849[21]
  i1848.storeSettingsLocation = i1849[22]
  i1848.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1849[23], i1848.modules)
  i1848.createASMDEF = !!i1849[24]
  i1848.showPlayingTweens = !!i1849[25]
  i1848.showPausedTweens = !!i1849[26]
  return i1848
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1850 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1851 = data
  i1850.logBehaviour = i1851[0]
  i1850.nestedTweenFailureBehaviour = i1851[1]
  return i1850
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1852 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1853 = data
  i1852.showPanel = !!i1853[0]
  i1852.audioEnabled = !!i1853[1]
  i1852.physicsEnabled = !!i1853[2]
  i1852.physics2DEnabled = !!i1853[3]
  i1852.spriteEnabled = !!i1853[4]
  i1852.uiEnabled = !!i1853[5]
  i1852.textMeshProEnabled = !!i1853[6]
  i1852.tk2DEnabled = !!i1853[7]
  i1852.deAudioEnabled = !!i1853[8]
  i1852.deUnityExtendedEnabled = !!i1853[9]
  i1852.epoOutlineEnabled = !!i1853[10]
  return i1852
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1854 = root || request.c( 'TMPro.TMP_Settings' )
  var i1855 = data
  i1854.m_enableWordWrapping = !!i1855[0]
  i1854.m_enableKerning = !!i1855[1]
  i1854.m_enableExtraPadding = !!i1855[2]
  i1854.m_enableTintAllSprites = !!i1855[3]
  i1854.m_enableParseEscapeCharacters = !!i1855[4]
  i1854.m_EnableRaycastTarget = !!i1855[5]
  i1854.m_GetFontFeaturesAtRuntime = !!i1855[6]
  i1854.m_missingGlyphCharacter = i1855[7]
  i1854.m_warningsDisabled = !!i1855[8]
  request.r(i1855[9], i1855[10], 0, i1854, 'm_defaultFontAsset')
  i1854.m_defaultFontAssetPath = i1855[11]
  i1854.m_defaultFontSize = i1855[12]
  i1854.m_defaultAutoSizeMinRatio = i1855[13]
  i1854.m_defaultAutoSizeMaxRatio = i1855[14]
  i1854.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1855[15], i1855[16] )
  i1854.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1855[17], i1855[18] )
  i1854.m_autoSizeTextContainer = !!i1855[19]
  i1854.m_IsTextObjectScaleStatic = !!i1855[20]
  var i1857 = i1855[21]
  var i1856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1857.length; i += 2) {
  request.r(i1857[i + 0], i1857[i + 1], 1, i1856, '')
  }
  i1854.m_fallbackFontAssets = i1856
  i1854.m_matchMaterialPreset = !!i1855[22]
  request.r(i1855[23], i1855[24], 0, i1854, 'm_defaultSpriteAsset')
  i1854.m_defaultSpriteAssetPath = i1855[25]
  i1854.m_enableEmojiSupport = !!i1855[26]
  i1854.m_MissingCharacterSpriteUnicode = i1855[27]
  i1854.m_defaultColorGradientPresetsPath = i1855[28]
  request.r(i1855[29], i1855[30], 0, i1854, 'm_defaultStyleSheet')
  i1854.m_StyleSheetsResourcePath = i1855[31]
  request.r(i1855[32], i1855[33], 0, i1854, 'm_leadingCharacters')
  request.r(i1855[34], i1855[35], 0, i1854, 'm_followingCharacters')
  i1854.m_UseModernHangulLineBreakingRules = !!i1855[36]
  return i1854
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1858 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1859 = data
  request.r(i1859[0], i1859[1], 0, i1858, 'spriteSheet')
  var i1861 = i1859[2]
  var i1860 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.add(request.d('TMPro.TMP_Sprite', i1861[i + 0]));
  }
  i1858.spriteInfoList = i1860
  var i1863 = i1859[3]
  var i1862 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1863.length; i += 2) {
  request.r(i1863[i + 0], i1863[i + 1], 1, i1862, '')
  }
  i1858.fallbackSpriteAssets = i1862
  i1858.hashCode = i1859[4]
  request.r(i1859[5], i1859[6], 0, i1858, 'material')
  i1858.materialHashCode = i1859[7]
  i1858.m_Version = i1859[8]
  i1858.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1859[9], i1858.m_FaceInfo)
  var i1865 = i1859[10]
  var i1864 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.add(request.d('TMPro.TMP_SpriteCharacter', i1865[i + 0]));
  }
  i1858.m_SpriteCharacterTable = i1864
  var i1867 = i1859[11]
  var i1866 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.add(request.d('TMPro.TMP_SpriteGlyph', i1867[i + 0]));
  }
  i1858.m_SpriteGlyphTable = i1866
  return i1858
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1870 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1871 = data
  i1870.name = i1871[0]
  i1870.hashCode = i1871[1]
  i1870.unicode = i1871[2]
  i1870.pivot = new pc.Vec2( i1871[3], i1871[4] )
  request.r(i1871[5], i1871[6], 0, i1870, 'sprite')
  i1870.id = i1871[7]
  i1870.x = i1871[8]
  i1870.y = i1871[9]
  i1870.width = i1871[10]
  i1870.height = i1871[11]
  i1870.xOffset = i1871[12]
  i1870.yOffset = i1871[13]
  i1870.xAdvance = i1871[14]
  i1870.scale = i1871[15]
  return i1870
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1876 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1877 = data
  i1876.m_Name = i1877[0]
  i1876.m_HashCode = i1877[1]
  i1876.m_ElementType = i1877[2]
  i1876.m_Unicode = i1877[3]
  i1876.m_GlyphIndex = i1877[4]
  i1876.m_Scale = i1877[5]
  return i1876
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1880 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1881 = data
  request.r(i1881[0], i1881[1], 0, i1880, 'sprite')
  i1880.m_Index = i1881[2]
  i1880.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1881[3], i1880.m_Metrics)
  i1880.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1881[4], i1880.m_GlyphRect)
  i1880.m_Scale = i1881[5]
  i1880.m_AtlasIndex = i1881[6]
  i1880.m_ClassDefinitionType = i1881[7]
  return i1880
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1882 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1883 = data
  var i1885 = i1883[0]
  var i1884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.add(request.d('TMPro.TMP_Style', i1885[i + 0]));
  }
  i1882.m_StyleList = i1884
  return i1882
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1888 = root || request.c( 'TMPro.TMP_Style' )
  var i1889 = data
  i1888.m_Name = i1889[0]
  i1888.m_HashCode = i1889[1]
  i1888.m_OpeningDefinition = i1889[2]
  i1888.m_ClosingDefinition = i1889[3]
  i1888.m_OpeningTagArray = i1889[4]
  i1888.m_ClosingTagArray = i1889[5]
  i1888.m_OpeningTagUnicodeArray = i1889[6]
  i1888.m_ClosingTagUnicodeArray = i1889[7]
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1891 = data
  var i1893 = i1891[0]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1893[i + 0]) );
  }
  i1890.files = i1892
  i1890.componentToPrefabIds = i1891[1]
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1897 = data
  i1896.path = i1897[0]
  request.r(i1897[1], i1897[2], 0, i1896, 'unityObject')
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1899 = data
  var i1901 = i1899[0]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1901[i + 0]) );
  }
  i1898.scriptsExecutionOrder = i1900
  var i1903 = i1899[1]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1903[i + 0]) );
  }
  i1898.sortingLayers = i1902
  var i1905 = i1899[2]
  var i1904 = []
  for(var i = 0; i < i1905.length; i += 1) {
    i1904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1905[i + 0]) );
  }
  i1898.cullingLayers = i1904
  i1898.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1899[3], i1898.timeSettings)
  i1898.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1899[4], i1898.physicsSettings)
  i1898.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1899[5], i1898.physics2DSettings)
  i1898.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1899[6], i1898.qualitySettings)
  i1898.enableRealtimeShadows = !!i1899[7]
  i1898.enableAutoInstancing = !!i1899[8]
  i1898.enableStaticBatching = !!i1899[9]
  i1898.enableDynamicBatching = !!i1899[10]
  i1898.lightmapEncodingQuality = i1899[11]
  i1898.desiredColorSpace = i1899[12]
  var i1907 = i1899[13]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 1) {
    i1906.push( i1907[i + 0] );
  }
  i1898.allTags = i1906
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1911 = data
  i1910.name = i1911[0]
  i1910.value = i1911[1]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1915 = data
  i1914.id = i1915[0]
  i1914.name = i1915[1]
  i1914.value = i1915[2]
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1919 = data
  i1918.id = i1919[0]
  i1918.name = i1919[1]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1921 = data
  i1920.fixedDeltaTime = i1921[0]
  i1920.maximumDeltaTime = i1921[1]
  i1920.timeScale = i1921[2]
  i1920.maximumParticleTimestep = i1921[3]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1923 = data
  i1922.gravity = new pc.Vec3( i1923[0], i1923[1], i1923[2] )
  i1922.defaultSolverIterations = i1923[3]
  i1922.bounceThreshold = i1923[4]
  i1922.autoSyncTransforms = !!i1923[5]
  i1922.autoSimulation = !!i1923[6]
  var i1925 = i1923[7]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1925[i + 0]) );
  }
  i1922.collisionMatrix = i1924
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1929 = data
  i1928.enabled = !!i1929[0]
  i1928.layerId = i1929[1]
  i1928.otherLayerId = i1929[2]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1931 = data
  request.r(i1931[0], i1931[1], 0, i1930, 'material')
  i1930.gravity = new pc.Vec2( i1931[2], i1931[3] )
  i1930.positionIterations = i1931[4]
  i1930.velocityIterations = i1931[5]
  i1930.velocityThreshold = i1931[6]
  i1930.maxLinearCorrection = i1931[7]
  i1930.maxAngularCorrection = i1931[8]
  i1930.maxTranslationSpeed = i1931[9]
  i1930.maxRotationSpeed = i1931[10]
  i1930.baumgarteScale = i1931[11]
  i1930.baumgarteTOIScale = i1931[12]
  i1930.timeToSleep = i1931[13]
  i1930.linearSleepTolerance = i1931[14]
  i1930.angularSleepTolerance = i1931[15]
  i1930.defaultContactOffset = i1931[16]
  i1930.autoSimulation = !!i1931[17]
  i1930.queriesHitTriggers = !!i1931[18]
  i1930.queriesStartInColliders = !!i1931[19]
  i1930.callbacksOnDisable = !!i1931[20]
  i1930.reuseCollisionCallbacks = !!i1931[21]
  i1930.autoSyncTransforms = !!i1931[22]
  var i1933 = i1931[23]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1933[i + 0]) );
  }
  i1930.collisionMatrix = i1932
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1937 = data
  i1936.enabled = !!i1937[0]
  i1936.layerId = i1937[1]
  i1936.otherLayerId = i1937[2]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1939 = data
  var i1941 = i1939[0]
  var i1940 = []
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1941[i + 0]) );
  }
  i1938.qualityLevels = i1940
  var i1943 = i1939[1]
  var i1942 = []
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.push( i1943[i + 0] );
  }
  i1938.names = i1942
  i1938.shadows = i1939[2]
  i1938.anisotropicFiltering = i1939[3]
  i1938.antiAliasing = i1939[4]
  i1938.lodBias = i1939[5]
  i1938.shadowCascades = i1939[6]
  i1938.shadowDistance = i1939[7]
  i1938.shadowmaskMode = i1939[8]
  i1938.shadowProjection = i1939[9]
  i1938.shadowResolution = i1939[10]
  i1938.softParticles = !!i1939[11]
  i1938.softVegetation = !!i1939[12]
  i1938.activeColorSpace = i1939[13]
  i1938.desiredColorSpace = i1939[14]
  i1938.masterTextureLimit = i1939[15]
  i1938.maxQueuedFrames = i1939[16]
  i1938.particleRaycastBudget = i1939[17]
  i1938.pixelLightCount = i1939[18]
  i1938.realtimeReflectionProbes = !!i1939[19]
  i1938.shadowCascade2Split = i1939[20]
  i1938.shadowCascade4Split = new pc.Vec3( i1939[21], i1939[22], i1939[23] )
  i1938.streamingMipmapsActive = !!i1939[24]
  i1938.vSyncCount = i1939[25]
  i1938.asyncUploadBufferSize = i1939[26]
  i1938.asyncUploadTimeSlice = i1939[27]
  i1938.billboardsFaceCameraPosition = !!i1939[28]
  i1938.shadowNearPlaneOffset = i1939[29]
  i1938.streamingMipmapsMemoryBudget = i1939[30]
  i1938.maximumLODLevel = i1939[31]
  i1938.streamingMipmapsAddAllCameras = !!i1939[32]
  i1938.streamingMipmapsMaxLevelReduction = i1939[33]
  i1938.streamingMipmapsRenderersPerFrame = i1939[34]
  i1938.resolutionScalingFixedDPIFactor = i1939[35]
  i1938.streamingMipmapsMaxFileIORequests = i1939[36]
  i1938.currentQualityLevel = i1939[37]
  return i1938
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1946 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1947 = data
  i1946.xPlacement = i1947[0]
  i1946.yPlacement = i1947[1]
  i1946.xAdvance = i1947[2]
  i1946.yAdvance = i1947[3]
  return i1946
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1948 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1949 = data
  i1948.m_GlyphIndex = i1949[0]
  i1948.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1949[1], i1948.m_GlyphValueRecord)
  return i1948
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1950 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1951 = data
  i1950.m_XPlacement = i1951[0]
  i1950.m_YPlacement = i1951[1]
  i1950.m_XAdvance = i1951[2]
  i1950.m_YAdvance = i1951[3]
  return i1950
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[11],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[11],"79":[80],"81":[82],"83":[82],"15":[2],"84":[85],"86":[87],"88":[85],"89":[2],"90":[2],"17":[15],"5":[3,2],"91":[2],"16":[15],"92":[2],"93":[2],"34":[2],"94":[2],"95":[2],"96":[2],"97":[2],"37":[2],"98":[2],"18":[3,2],"99":[2],"100":[2],"101":[2],"102":[2],"103":[3,2],"104":[2],"105":[13],"106":[13],"14":[13],"107":[13],"108":[11],"109":[11],"110":[111],"112":[11],"113":[114],"115":[2],"116":[3,2],"117":[80],"21":[3,2],"118":[119,80],"120":[80],"121":[80,122],"123":[57],"124":[65],"125":[114],"126":[127],"128":[2],"129":[80,2],"7":[2,3],"130":[2],"131":[3,2],"132":[80],"133":[3,2],"134":[2],"135":[85]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.RawImage","UnityEngine.AudioSource","UnityEngine.AudioClip","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.MonoBehaviour","DropZone","UnityEngine.GameObject","UnityEngine.BoxCollider2D","DragSpawn","UnityEngine.CanvasGroup","ClickItem","UnityEngine.UI.Button","DraggableItem","DropSpawn","UnityEngine.PolygonCollider2D","UnityEngine.UI.HorizontalLayoutGroup","DG.Tweening.DOTweenAnimation","LunaManager","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "171.2";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BM_V02_ManhND_AnhPD";

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

Deserializers.buildID = "56392444-b7ea-4d08-ae52-f0e9bbd2d55e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

