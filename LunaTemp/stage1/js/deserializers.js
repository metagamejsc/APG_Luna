var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1422 = root || request.c( 'UnityEngine.JointSpring' )
  var i1423 = data
  i1422.spring = i1423[0]
  i1422.damper = i1423[1]
  i1422.targetPosition = i1423[2]
  return i1422
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1424 = root || request.c( 'UnityEngine.JointMotor' )
  var i1425 = data
  i1424.m_TargetVelocity = i1425[0]
  i1424.m_Force = i1425[1]
  i1424.m_FreeSpin = i1425[2]
  return i1424
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1426 = root || request.c( 'UnityEngine.JointLimits' )
  var i1427 = data
  i1426.m_Min = i1427[0]
  i1426.m_Max = i1427[1]
  i1426.m_Bounciness = i1427[2]
  i1426.m_BounceMinVelocity = i1427[3]
  i1426.m_ContactDistance = i1427[4]
  i1426.minBounce = i1427[5]
  i1426.maxBounce = i1427[6]
  return i1426
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1428 = root || request.c( 'UnityEngine.JointDrive' )
  var i1429 = data
  i1428.m_PositionSpring = i1429[0]
  i1428.m_PositionDamper = i1429[1]
  i1428.m_MaximumForce = i1429[2]
  i1428.m_UseAcceleration = i1429[3]
  return i1428
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1430 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1431 = data
  i1430.m_Spring = i1431[0]
  i1430.m_Damper = i1431[1]
  return i1430
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1432 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1433 = data
  i1432.m_Limit = i1433[0]
  i1432.m_Bounciness = i1433[1]
  i1432.m_ContactDistance = i1433[2]
  return i1432
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1434 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1435 = data
  i1434.m_ExtremumSlip = i1435[0]
  i1434.m_ExtremumValue = i1435[1]
  i1434.m_AsymptoteSlip = i1435[2]
  i1434.m_AsymptoteValue = i1435[3]
  i1434.m_Stiffness = i1435[4]
  return i1434
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1436 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1437 = data
  i1436.m_LowerAngle = i1437[0]
  i1436.m_UpperAngle = i1437[1]
  return i1436
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1438 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1439 = data
  i1438.m_MotorSpeed = i1439[0]
  i1438.m_MaximumMotorTorque = i1439[1]
  return i1438
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1440 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1441 = data
  i1440.m_DampingRatio = i1441[0]
  i1440.m_Frequency = i1441[1]
  i1440.m_Angle = i1441[2]
  return i1440
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1442 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1443 = data
  i1442.m_LowerTranslation = i1443[0]
  i1442.m_UpperTranslation = i1443[1]
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1445 = data
  i1444.name = i1445[0]
  i1444.width = i1445[1]
  i1444.height = i1445[2]
  i1444.mipmapCount = i1445[3]
  i1444.anisoLevel = i1445[4]
  i1444.filterMode = i1445[5]
  i1444.hdr = !!i1445[6]
  i1444.format = i1445[7]
  i1444.wrapMode = i1445[8]
  i1444.alphaIsTransparency = !!i1445[9]
  i1444.alphaSource = i1445[10]
  i1444.graphicsFormat = i1445[11]
  i1444.sRGBTexture = !!i1445[12]
  i1444.desiredColorSpace = i1445[13]
  i1444.wrapU = i1445[14]
  i1444.wrapV = i1445[15]
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1446 = root || new pc.UnityMaterial()
  var i1447 = data
  i1446.name = i1447[0]
  request.r(i1447[1], i1447[2], 0, i1446, 'shader')
  i1446.renderQueue = i1447[3]
  i1446.enableInstancing = !!i1447[4]
  var i1449 = i1447[5]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1449[i + 0]) );
  }
  i1446.floatParameters = i1448
  var i1451 = i1447[6]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1451[i + 0]) );
  }
  i1446.colorParameters = i1450
  var i1453 = i1447[7]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1453[i + 0]) );
  }
  i1446.vectorParameters = i1452
  var i1455 = i1447[8]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1455[i + 0]) );
  }
  i1446.textureParameters = i1454
  var i1457 = i1447[9]
  var i1456 = []
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1457[i + 0]) );
  }
  i1446.materialFlags = i1456
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1461 = data
  i1460.name = i1461[0]
  i1460.value = i1461[1]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1465 = data
  i1464.name = i1465[0]
  i1464.value = new pc.Color(i1465[1], i1465[2], i1465[3], i1465[4])
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1469 = data
  i1468.name = i1469[0]
  i1468.value = new pc.Vec4( i1469[1], i1469[2], i1469[3], i1469[4] )
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1473 = data
  i1472.name = i1473[0]
  request.r(i1473[1], i1473[2], 0, i1472, 'value')
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1477 = data
  i1476.name = i1477[0]
  i1476.enabled = !!i1477[1]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1479 = data
  i1478.pivot = new pc.Vec2( i1479[0], i1479[1] )
  i1478.anchorMin = new pc.Vec2( i1479[2], i1479[3] )
  i1478.anchorMax = new pc.Vec2( i1479[4], i1479[5] )
  i1478.sizeDelta = new pc.Vec2( i1479[6], i1479[7] )
  i1478.anchoredPosition3D = new pc.Vec3( i1479[8], i1479[9], i1479[10] )
  i1478.rotation = new pc.Quat(i1479[11], i1479[12], i1479[13], i1479[14])
  i1478.scale = new pc.Vec3( i1479[15], i1479[16], i1479[17] )
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1481 = data
  i1480.cullTransparentMesh = !!i1481[0]
  return i1480
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1482 = root || request.c( 'UnityEngine.UI.Image' )
  var i1483 = data
  request.r(i1483[0], i1483[1], 0, i1482, 'm_Sprite')
  i1482.m_Type = i1483[2]
  i1482.m_PreserveAspect = !!i1483[3]
  i1482.m_FillCenter = !!i1483[4]
  i1482.m_FillMethod = i1483[5]
  i1482.m_FillAmount = i1483[6]
  i1482.m_FillClockwise = !!i1483[7]
  i1482.m_FillOrigin = i1483[8]
  i1482.m_UseSpriteMesh = !!i1483[9]
  i1482.m_PixelsPerUnitMultiplier = i1483[10]
  i1482.m_Maskable = !!i1483[11]
  request.r(i1483[12], i1483[13], 0, i1482, 'm_Material')
  i1482.m_Color = new pc.Color(i1483[14], i1483[15], i1483[16], i1483[17])
  i1482.m_RaycastTarget = !!i1483[18]
  i1482.m_RaycastPadding = new pc.Vec4( i1483[19], i1483[20], i1483[21], i1483[22] )
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1485 = data
  i1484.name = i1485[0]
  i1484.tagId = i1485[1]
  i1484.enabled = !!i1485[2]
  i1484.isStatic = !!i1485[3]
  i1484.layer = i1485[4]
  return i1484
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1486 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1487 = data
  i1486.m_hasFontAssetChanged = !!i1487[0]
  request.r(i1487[1], i1487[2], 0, i1486, 'm_baseMaterial')
  i1486.m_maskOffset = new pc.Vec4( i1487[3], i1487[4], i1487[5], i1487[6] )
  i1486.m_text = i1487[7]
  i1486.m_isRightToLeft = !!i1487[8]
  request.r(i1487[9], i1487[10], 0, i1486, 'm_fontAsset')
  request.r(i1487[11], i1487[12], 0, i1486, 'm_sharedMaterial')
  var i1489 = i1487[13]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 2) {
  request.r(i1489[i + 0], i1489[i + 1], 2, i1488, '')
  }
  i1486.m_fontSharedMaterials = i1488
  request.r(i1487[14], i1487[15], 0, i1486, 'm_fontMaterial')
  var i1491 = i1487[16]
  var i1490 = []
  for(var i = 0; i < i1491.length; i += 2) {
  request.r(i1491[i + 0], i1491[i + 1], 2, i1490, '')
  }
  i1486.m_fontMaterials = i1490
  i1486.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1487[17], i1487[18], i1487[19], i1487[20])
  i1486.m_fontColor = new pc.Color(i1487[21], i1487[22], i1487[23], i1487[24])
  i1486.m_enableVertexGradient = !!i1487[25]
  i1486.m_colorMode = i1487[26]
  i1486.m_fontColorGradient = request.d('TMPro.VertexGradient', i1487[27], i1486.m_fontColorGradient)
  request.r(i1487[28], i1487[29], 0, i1486, 'm_fontColorGradientPreset')
  request.r(i1487[30], i1487[31], 0, i1486, 'm_spriteAsset')
  i1486.m_tintAllSprites = !!i1487[32]
  request.r(i1487[33], i1487[34], 0, i1486, 'm_StyleSheet')
  i1486.m_TextStyleHashCode = i1487[35]
  i1486.m_overrideHtmlColors = !!i1487[36]
  i1486.m_faceColor = UnityEngine.Color32.ConstructColor(i1487[37], i1487[38], i1487[39], i1487[40])
  i1486.m_fontSize = i1487[41]
  i1486.m_fontSizeBase = i1487[42]
  i1486.m_fontWeight = i1487[43]
  i1486.m_enableAutoSizing = !!i1487[44]
  i1486.m_fontSizeMin = i1487[45]
  i1486.m_fontSizeMax = i1487[46]
  i1486.m_fontStyle = i1487[47]
  i1486.m_HorizontalAlignment = i1487[48]
  i1486.m_VerticalAlignment = i1487[49]
  i1486.m_textAlignment = i1487[50]
  i1486.m_characterSpacing = i1487[51]
  i1486.m_wordSpacing = i1487[52]
  i1486.m_lineSpacing = i1487[53]
  i1486.m_lineSpacingMax = i1487[54]
  i1486.m_paragraphSpacing = i1487[55]
  i1486.m_charWidthMaxAdj = i1487[56]
  i1486.m_enableWordWrapping = !!i1487[57]
  i1486.m_wordWrappingRatios = i1487[58]
  i1486.m_overflowMode = i1487[59]
  request.r(i1487[60], i1487[61], 0, i1486, 'm_linkedTextComponent')
  request.r(i1487[62], i1487[63], 0, i1486, 'parentLinkedComponent')
  i1486.m_enableKerning = !!i1487[64]
  i1486.m_enableExtraPadding = !!i1487[65]
  i1486.checkPaddingRequired = !!i1487[66]
  i1486.m_isRichText = !!i1487[67]
  i1486.m_parseCtrlCharacters = !!i1487[68]
  i1486.m_isOrthographic = !!i1487[69]
  i1486.m_isCullingEnabled = !!i1487[70]
  i1486.m_horizontalMapping = i1487[71]
  i1486.m_verticalMapping = i1487[72]
  i1486.m_uvLineOffset = i1487[73]
  i1486.m_geometrySortingOrder = i1487[74]
  i1486.m_IsTextObjectScaleStatic = !!i1487[75]
  i1486.m_VertexBufferAutoSizeReduction = !!i1487[76]
  i1486.m_useMaxVisibleDescender = !!i1487[77]
  i1486.m_pageToDisplay = i1487[78]
  i1486.m_margin = new pc.Vec4( i1487[79], i1487[80], i1487[81], i1487[82] )
  i1486.m_isUsingLegacyAnimationComponent = !!i1487[83]
  i1486.m_isVolumetricText = !!i1487[84]
  i1486.m_Maskable = !!i1487[85]
  request.r(i1487[86], i1487[87], 0, i1486, 'm_Material')
  i1486.m_Color = new pc.Color(i1487[88], i1487[89], i1487[90], i1487[91])
  i1486.m_RaycastTarget = !!i1487[92]
  i1486.m_RaycastPadding = new pc.Vec4( i1487[93], i1487[94], i1487[95], i1487[96] )
  return i1486
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1494 = root || request.c( 'TMPro.VertexGradient' )
  var i1495 = data
  i1494.topLeft = new pc.Color(i1495[0], i1495[1], i1495[2], i1495[3])
  i1494.topRight = new pc.Color(i1495[4], i1495[5], i1495[6], i1495[7])
  i1494.bottomLeft = new pc.Color(i1495[8], i1495[9], i1495[10], i1495[11])
  i1494.bottomRight = new pc.Color(i1495[12], i1495[13], i1495[14], i1495[15])
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

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1502 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1503 = data
  request.r(i1503[0], i1503[1], 0, i1502, 'm_FirstSelected')
  i1502.m_sendNavigationEvents = !!i1503[2]
  i1502.m_DragThreshold = i1503[3]
  return i1502
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1504 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1505 = data
  i1504.m_HorizontalAxis = i1505[0]
  i1504.m_VerticalAxis = i1505[1]
  i1504.m_SubmitButton = i1505[2]
  i1504.m_CancelButton = i1505[3]
  i1504.m_InputActionsPerSecond = i1505[4]
  i1504.m_RepeatDelay = i1505[5]
  i1504.m_ForceModuleActive = !!i1505[6]
  i1504.m_SendPointerHoverToParent = !!i1505[7]
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1507 = data
  i1506.planeDistance = i1507[0]
  i1506.referencePixelsPerUnit = i1507[1]
  i1506.isFallbackOverlay = !!i1507[2]
  i1506.renderMode = i1507[3]
  i1506.renderOrder = i1507[4]
  i1506.sortingLayerName = i1507[5]
  i1506.sortingOrder = i1507[6]
  i1506.scaleFactor = i1507[7]
  request.r(i1507[8], i1507[9], 0, i1506, 'worldCamera')
  i1506.overrideSorting = !!i1507[10]
  i1506.pixelPerfect = !!i1507[11]
  i1506.targetDisplay = i1507[12]
  i1506.overridePixelPerfect = !!i1507[13]
  i1506.enabled = !!i1507[14]
  return i1506
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1508 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1509 = data
  i1508.m_UiScaleMode = i1509[0]
  i1508.m_ReferencePixelsPerUnit = i1509[1]
  i1508.m_ScaleFactor = i1509[2]
  i1508.m_ReferenceResolution = new pc.Vec2( i1509[3], i1509[4] )
  i1508.m_ScreenMatchMode = i1509[5]
  i1508.m_MatchWidthOrHeight = i1509[6]
  i1508.m_PhysicalUnit = i1509[7]
  i1508.m_FallbackScreenDPI = i1509[8]
  i1508.m_DefaultSpriteDPI = i1509[9]
  i1508.m_DynamicPixelsPerUnit = i1509[10]
  i1508.m_PresetInfoIsWorld = !!i1509[11]
  return i1508
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1510 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1511 = data
  i1510.m_IgnoreReversedGraphics = !!i1511[0]
  i1510.m_BlockingObjects = i1511[1]
  i1510.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1511[2] )
  return i1510
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1512 = root || request.c( 'LunaManager' )
  var i1513 = data
  var i1515 = i1513[0]
  var i1514 = []
  for(var i = 0; i < i1515.length; i += 2) {
  request.r(i1515[i + 0], i1515[i + 1], 2, i1514, '')
  }
  i1512.lstBtnInstall = i1514
  request.r(i1513[1], i1513[2], 0, i1512, 'StartCard')
  request.r(i1513[3], i1513[4], 0, i1512, 'EndCard')
  request.r(i1513[5], i1513[6], 0, i1512, 'Parent')
  i1512.isDrag = !!i1513[7]
  i1512.timeDrag = i1513[8]
  i1512.countPlay = i1513[9]
  i1512.countPlayFinal = i1513[10]
  i1512.countPlayMax = i1513[11]
  i1512.timeDropFinal = i1513[12]
  i1512.colorBG = new pc.Color(i1513[13], i1513[14], i1513[15], i1513[16])
  request.r(i1513[17], i1513[18], 0, i1512, 'texture2D')
  request.r(i1513[19], i1513[20], 0, i1512, 'rawImageBG')
  request.r(i1513[21], i1513[22], 0, i1512, 'girlFan')
  request.r(i1513[23], i1513[24], 0, i1512, 'dog')
  request.r(i1513[25], i1513[26], 0, i1512, 'water')
  request.r(i1513[27], i1513[28], 0, i1512, 'womanDecor')
  request.r(i1513[29], i1513[30], 0, i1512, 'textProgess')
  request.r(i1513[31], i1513[32], 0, i1512, 'imgProgess')
  request.r(i1513[33], i1513[34], 0, i1512, 'timeText')
  return i1512
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1518 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1519 = data
  request.r(i1519[0], i1519[1], 0, i1518, 'm_Texture')
  i1518.m_UVRect = UnityEngine.Rect.MinMaxRect(i1519[2], i1519[3], i1519[4], i1519[5])
  i1518.m_Maskable = !!i1519[6]
  request.r(i1519[7], i1519[8], 0, i1518, 'm_Material')
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

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1522 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1523 = data
  request.r(i1523[0], i1523[1], 0, i1522, 'skeletonDataAsset')
  request.r(i1523[2], i1523[3], 0, i1522, 'additiveMaterial')
  request.r(i1523[4], i1523[5], 0, i1522, 'multiplyMaterial')
  request.r(i1523[6], i1523[7], 0, i1522, 'screenMaterial')
  i1522.initialSkinName = i1523[8]
  i1522.initialFlipX = !!i1523[9]
  i1522.initialFlipY = !!i1523[10]
  i1522.startingAnimation = i1523[11]
  i1522.startingLoop = !!i1523[12]
  i1522.timeScale = i1523[13]
  i1522.freeze = !!i1523[14]
  i1522.layoutScaleMode = i1523[15]
  i1522.updateWhenInvisible = i1523[16]
  i1522.allowMultipleCanvasRenderers = !!i1523[17]
  var i1525 = i1523[18]
  var i1524 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1525.length; i += 2) {
  request.r(i1525[i + 0], i1525[i + 1], 1, i1524, '')
  }
  i1522.canvasRenderers = i1524
  i1522.enableSeparatorSlots = !!i1523[19]
  i1522.updateSeparatorPartLocation = !!i1523[20]
  i1522.updateSeparatorPartScale = !!i1523[21]
  i1522.disableMeshAssignmentOnOverride = !!i1523[22]
  i1522.referenceSize = new pc.Vec2( i1523[23], i1523[24] )
  i1522.referenceScale = i1523[25]
  i1522.rectTransformSize = new pc.Vec2( i1523[26], i1523[27] )
  i1522.editReferenceRect = !!i1523[28]
  var i1527 = i1523[29]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.push( i1527[i + 0] );
  }
  i1522.separatorSlotNames = i1526
  var i1529 = i1523[30]
  var i1528 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1529.length; i += 2) {
  request.r(i1529[i + 0], i1529[i + 1], 1, i1528, '')
  }
  i1522.separatorParts = i1528
  i1522.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1523[31], i1522.meshGenerator)
  i1522.updateTiming = i1523[32]
  i1522.unscaledTime = !!i1523[33]
  i1522.m_Maskable = !!i1523[34]
  request.r(i1523[35], i1523[36], 0, i1522, 'm_Material')
  i1522.m_Color = new pc.Color(i1523[37], i1523[38], i1523[39], i1523[40])
  i1522.m_RaycastTarget = !!i1523[41]
  i1522.m_RaycastPadding = new pc.Vec4( i1523[42], i1523[43], i1523[44], i1523[45] )
  return i1522
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1536 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1537 = data
  i1536.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1537[0], i1536.settings)
  return i1536
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1538 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1539 = data
  i1538.useClipping = !!i1539[0]
  i1538.zSpacing = i1539[1]
  i1538.pmaVertexColors = !!i1539[2]
  i1538.tintBlack = !!i1539[3]
  i1538.canvasGroupTintBlack = !!i1539[4]
  i1538.calculateTangents = !!i1539[5]
  i1538.addNormals = !!i1539[6]
  i1538.immutableTriangles = !!i1539[7]
  return i1538
}

Deserializers["DragID"] = function (request, data, root) {
  var i1540 = root || request.c( 'DragID' )
  var i1541 = data
  i1540.idDrag = i1541[0]
  i1540.isProcess = !!i1541[1]
  i1540.isInvisible = !!i1541[2]
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1543 = data
  i1542.m_Alpha = i1543[0]
  i1542.m_Interactable = !!i1543[1]
  i1542.m_BlocksRaycasts = !!i1543[2]
  i1542.m_IgnoreParentGroups = !!i1543[3]
  i1542.enabled = !!i1543[4]
  return i1542
}

Deserializers["DropID"] = function (request, data, root) {
  var i1544 = root || request.c( 'DropID' )
  var i1545 = data
  request.r(i1545[0], i1545[1], 0, i1544, 'GridMan')
  var i1547 = i1545[2]
  var i1546 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1547.length; i += 2) {
  request.r(i1547[i + 0], i1547[i + 1], 1, i1546, '')
  }
  i1544.girls = i1546
  var i1549 = i1545[3]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 2) {
  request.r(i1549[i + 0], i1549[i + 1], 2, i1548, '')
  }
  i1544.skeletonDataAssets = i1548
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1555 = data
  i1554.usedByComposite = !!i1555[0]
  i1554.autoTiling = !!i1555[1]
  var i1557 = i1555[2]
  var i1556 = []
  for(var i = 0; i < i1557.length; i += 1) {
  var i1559 = i1557[i + 0]
  var i1558 = []
  for(var i = 0; i < i1559.length; i += 2) {
    i1558.push( new pc.Vec2( i1559[i + 0], i1559[i + 1] ) );
  }
    i1556.push( i1558 );
  }
  i1554.points = i1556
  i1554.enabled = !!i1555[3]
  i1554.isTrigger = !!i1555[4]
  i1554.usedByEffector = !!i1555[5]
  i1554.density = i1555[6]
  i1554.offset = new pc.Vec2( i1555[7], i1555[8] )
  request.r(i1555[9], i1555[10], 0, i1554, 'material')
  return i1554
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1566 = root || request.c( 'UnityEngine.UI.Button' )
  var i1567 = data
  i1566.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1567[0], i1566.m_OnClick)
  i1566.m_Navigation = request.d('UnityEngine.UI.Navigation', i1567[1], i1566.m_Navigation)
  i1566.m_Transition = i1567[2]
  i1566.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1567[3], i1566.m_Colors)
  i1566.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1567[4], i1566.m_SpriteState)
  i1566.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1567[5], i1566.m_AnimationTriggers)
  i1566.m_Interactable = !!i1567[6]
  request.r(i1567[7], i1567[8], 0, i1566, 'm_TargetGraphic')
  return i1566
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1568 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1569 = data
  i1568.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1569[0], i1568.m_PersistentCalls)
  return i1568
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1570 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1571 = data
  var i1573 = i1571[0]
  var i1572 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1573.length; i += 1) {
    i1572.add(request.d('UnityEngine.Events.PersistentCall', i1573[i + 0]));
  }
  i1570.m_Calls = i1572
  return i1570
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1576 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1577 = data
  request.r(i1577[0], i1577[1], 0, i1576, 'm_Target')
  i1576.m_TargetAssemblyTypeName = i1577[2]
  i1576.m_MethodName = i1577[3]
  i1576.m_Mode = i1577[4]
  i1576.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1577[5], i1576.m_Arguments)
  i1576.m_CallState = i1577[6]
  return i1576
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1578 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1579 = data
  request.r(i1579[0], i1579[1], 0, i1578, 'm_ObjectArgument')
  i1578.m_ObjectArgumentAssemblyTypeName = i1579[2]
  i1578.m_IntArgument = i1579[3]
  i1578.m_FloatArgument = i1579[4]
  i1578.m_StringArgument = i1579[5]
  i1578.m_BoolArgument = !!i1579[6]
  return i1578
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1580 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1581 = data
  i1580.m_Mode = i1581[0]
  i1580.m_WrapAround = !!i1581[1]
  request.r(i1581[2], i1581[3], 0, i1580, 'm_SelectOnUp')
  request.r(i1581[4], i1581[5], 0, i1580, 'm_SelectOnDown')
  request.r(i1581[6], i1581[7], 0, i1580, 'm_SelectOnLeft')
  request.r(i1581[8], i1581[9], 0, i1580, 'm_SelectOnRight')
  return i1580
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1582 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1583 = data
  i1582.m_NormalColor = new pc.Color(i1583[0], i1583[1], i1583[2], i1583[3])
  i1582.m_HighlightedColor = new pc.Color(i1583[4], i1583[5], i1583[6], i1583[7])
  i1582.m_PressedColor = new pc.Color(i1583[8], i1583[9], i1583[10], i1583[11])
  i1582.m_SelectedColor = new pc.Color(i1583[12], i1583[13], i1583[14], i1583[15])
  i1582.m_DisabledColor = new pc.Color(i1583[16], i1583[17], i1583[18], i1583[19])
  i1582.m_ColorMultiplier = i1583[20]
  i1582.m_FadeDuration = i1583[21]
  return i1582
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1585 = data
  request.r(i1585[0], i1585[1], 0, i1584, 'm_HighlightedSprite')
  request.r(i1585[2], i1585[3], 0, i1584, 'm_PressedSprite')
  request.r(i1585[4], i1585[5], 0, i1584, 'm_SelectedSprite')
  request.r(i1585[6], i1585[7], 0, i1584, 'm_DisabledSprite')
  return i1584
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1587 = data
  i1586.m_NormalTrigger = i1587[0]
  i1586.m_HighlightedTrigger = i1587[1]
  i1586.m_PressedTrigger = i1587[2]
  i1586.m_SelectedTrigger = i1587[3]
  i1586.m_DisabledTrigger = i1587[4]
  return i1586
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1588 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1589 = data
  i1588.targetIsSelf = !!i1589[0]
  request.r(i1589[1], i1589[2], 0, i1588, 'targetGO')
  i1588.tweenTargetIsTargetGO = !!i1589[3]
  i1588.delay = i1589[4]
  i1588.duration = i1589[5]
  i1588.easeType = i1589[6]
  i1588.easeCurve = new pc.AnimationCurve( { keys_flow: i1589[7] } )
  i1588.loopType = i1589[8]
  i1588.loops = i1589[9]
  i1588.id = i1589[10]
  i1588.isRelative = !!i1589[11]
  i1588.isFrom = !!i1589[12]
  i1588.isIndependentUpdate = !!i1589[13]
  i1588.autoKill = !!i1589[14]
  i1588.autoGenerate = !!i1589[15]
  i1588.isActive = !!i1589[16]
  i1588.isValid = !!i1589[17]
  request.r(i1589[18], i1589[19], 0, i1588, 'target')
  i1588.animationType = i1589[20]
  i1588.targetType = i1589[21]
  i1588.forcedTargetType = i1589[22]
  i1588.autoPlay = !!i1589[23]
  i1588.useTargetAsV3 = !!i1589[24]
  i1588.endValueFloat = i1589[25]
  i1588.endValueV3 = new pc.Vec3( i1589[26], i1589[27], i1589[28] )
  i1588.endValueV2 = new pc.Vec2( i1589[29], i1589[30] )
  i1588.endValueColor = new pc.Color(i1589[31], i1589[32], i1589[33], i1589[34])
  i1588.endValueString = i1589[35]
  i1588.endValueRect = UnityEngine.Rect.MinMaxRect(i1589[36], i1589[37], i1589[38], i1589[39])
  request.r(i1589[40], i1589[41], 0, i1588, 'endValueTransform')
  i1588.optionalBool0 = !!i1589[42]
  i1588.optionalBool1 = !!i1589[43]
  i1588.optionalFloat0 = i1589[44]
  i1588.optionalInt0 = i1589[45]
  i1588.optionalRotationMode = i1589[46]
  i1588.optionalScrambleMode = i1589[47]
  i1588.optionalShakeRandomnessMode = i1589[48]
  i1588.optionalString = i1589[49]
  i1588.updateType = i1589[50]
  i1588.isSpeedBased = !!i1589[51]
  i1588.hasOnStart = !!i1589[52]
  i1588.hasOnPlay = !!i1589[53]
  i1588.hasOnUpdate = !!i1589[54]
  i1588.hasOnStepComplete = !!i1589[55]
  i1588.hasOnComplete = !!i1589[56]
  i1588.hasOnTweenCreated = !!i1589[57]
  i1588.hasOnRewind = !!i1589[58]
  i1588.onStart = request.d('UnityEngine.Events.UnityEvent', i1589[59], i1588.onStart)
  i1588.onPlay = request.d('UnityEngine.Events.UnityEvent', i1589[60], i1588.onPlay)
  i1588.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1589[61], i1588.onUpdate)
  i1588.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1589[62], i1588.onStepComplete)
  i1588.onComplete = request.d('UnityEngine.Events.UnityEvent', i1589[63], i1588.onComplete)
  i1588.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1589[64], i1588.onTweenCreated)
  i1588.onRewind = request.d('UnityEngine.Events.UnityEvent', i1589[65], i1588.onRewind)
  return i1588
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1591 = data
  i1590.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1591[0], i1590.m_PersistentCalls)
  return i1590
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1593 = data
  i1592.m_ShowMaskGraphic = !!i1593[0]
  return i1592
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1594 = root || request.c( 'AudioController' )
  var i1595 = data
  request.r(i1595[0], i1595[1], 0, i1594, 'bgmSource')
  request.r(i1595[2], i1595[3], 0, i1594, 'sfxSource')
  var i1597 = i1595[4]
  var i1596 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.add(request.d('AudioEntry', i1597[i + 0]));
  }
  i1594.audioEntries = i1596
  return i1594
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i1600 = root || request.c( 'AudioEntry' )
  var i1601 = data
  i1600.key = i1601[0]
  request.r(i1601[1], i1601[2], 0, i1600, 'clip')
  i1600.volume = i1601[3]
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1603 = data
  i1602.ambientIntensity = i1603[0]
  i1602.reflectionIntensity = i1603[1]
  i1602.ambientMode = i1603[2]
  i1602.ambientLight = new pc.Color(i1603[3], i1603[4], i1603[5], i1603[6])
  i1602.ambientSkyColor = new pc.Color(i1603[7], i1603[8], i1603[9], i1603[10])
  i1602.ambientGroundColor = new pc.Color(i1603[11], i1603[12], i1603[13], i1603[14])
  i1602.ambientEquatorColor = new pc.Color(i1603[15], i1603[16], i1603[17], i1603[18])
  i1602.fogColor = new pc.Color(i1603[19], i1603[20], i1603[21], i1603[22])
  i1602.fogEndDistance = i1603[23]
  i1602.fogStartDistance = i1603[24]
  i1602.fogDensity = i1603[25]
  i1602.fog = !!i1603[26]
  request.r(i1603[27], i1603[28], 0, i1602, 'skybox')
  i1602.fogMode = i1603[29]
  var i1605 = i1603[30]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1605[i + 0]) );
  }
  i1602.lightmaps = i1604
  i1602.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1603[31], i1602.lightProbes)
  i1602.lightmapsMode = i1603[32]
  i1602.mixedBakeMode = i1603[33]
  i1602.environmentLightingMode = i1603[34]
  i1602.ambientProbe = new pc.SphericalHarmonicsL2(i1603[35])
  i1602.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1603[36])
  i1602.useReferenceAmbientProbe = !!i1603[37]
  request.r(i1603[38], i1603[39], 0, i1602, 'customReflection')
  request.r(i1603[40], i1603[41], 0, i1602, 'defaultReflection')
  i1602.defaultReflectionMode = i1603[42]
  i1602.defaultReflectionResolution = i1603[43]
  i1602.sunLightObjectId = i1603[44]
  i1602.pixelLightCount = i1603[45]
  i1602.defaultReflectionHDR = !!i1603[46]
  i1602.hasLightDataAsset = !!i1603[47]
  i1602.hasManualGenerate = !!i1603[48]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1609 = data
  request.r(i1609[0], i1609[1], 0, i1608, 'lightmapColor')
  request.r(i1609[2], i1609[3], 0, i1608, 'lightmapDirection')
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1610 = root || new UnityEngine.LightProbes()
  var i1611 = data
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1619 = data
  var i1621 = i1619[0]
  var i1620 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1621[i + 0]));
  }
  i1618.ShaderCompilationErrors = i1620
  i1618.name = i1619[1]
  i1618.guid = i1619[2]
  var i1623 = i1619[3]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.push( i1623[i + 0] );
  }
  i1618.shaderDefinedKeywords = i1622
  var i1625 = i1619[4]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1625[i + 0]) );
  }
  i1618.passes = i1624
  var i1627 = i1619[5]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1627[i + 0]) );
  }
  i1618.usePasses = i1626
  var i1629 = i1619[6]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1629[i + 0]) );
  }
  i1618.defaultParameterValues = i1628
  request.r(i1619[7], i1619[8], 0, i1618, 'unityFallbackShader')
  i1618.readDepth = !!i1619[9]
  i1618.isCreatedByShaderGraph = !!i1619[10]
  i1618.disableBatching = !!i1619[11]
  i1618.compiled = !!i1619[12]
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1633 = data
  i1632.shaderName = i1633[0]
  i1632.errorMessage = i1633[1]
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1636 = root || new pc.UnityShaderPass()
  var i1637 = data
  i1636.id = i1637[0]
  i1636.subShaderIndex = i1637[1]
  i1636.name = i1637[2]
  i1636.passType = i1637[3]
  i1636.grabPassTextureName = i1637[4]
  i1636.usePass = !!i1637[5]
  i1636.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[6], i1636.zTest)
  i1636.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[7], i1636.zWrite)
  i1636.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[8], i1636.culling)
  i1636.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1637[9], i1636.blending)
  i1636.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1637[10], i1636.alphaBlending)
  i1636.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[11], i1636.colorWriteMask)
  i1636.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[12], i1636.offsetUnits)
  i1636.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[13], i1636.offsetFactor)
  i1636.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[14], i1636.stencilRef)
  i1636.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[15], i1636.stencilReadMask)
  i1636.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[16], i1636.stencilWriteMask)
  i1636.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1637[17], i1636.stencilOp)
  i1636.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1637[18], i1636.stencilOpFront)
  i1636.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1637[19], i1636.stencilOpBack)
  var i1639 = i1637[20]
  var i1638 = []
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1639[i + 0]) );
  }
  i1636.tags = i1638
  var i1641 = i1637[21]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 1) {
    i1640.push( i1641[i + 0] );
  }
  i1636.passDefinedKeywords = i1640
  var i1643 = i1637[22]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1643[i + 0]) );
  }
  i1636.passDefinedKeywordGroups = i1642
  var i1645 = i1637[23]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1645[i + 0]) );
  }
  i1636.variants = i1644
  var i1647 = i1637[24]
  var i1646 = []
  for(var i = 0; i < i1647.length; i += 1) {
    i1646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1647[i + 0]) );
  }
  i1636.excludedVariants = i1646
  i1636.hasDepthReader = !!i1637[25]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1649 = data
  i1648.val = i1649[0]
  i1648.name = i1649[1]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1651 = data
  i1650.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1651[0], i1650.src)
  i1650.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1651[1], i1650.dst)
  i1650.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1651[2], i1650.op)
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1653 = data
  i1652.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[0], i1652.pass)
  i1652.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[1], i1652.fail)
  i1652.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[2], i1652.zFail)
  i1652.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[3], i1652.comp)
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1657 = data
  i1656.name = i1657[0]
  i1656.value = i1657[1]
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1661 = data
  var i1663 = i1661[0]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.push( i1663[i + 0] );
  }
  i1660.keywords = i1662
  i1660.hasDiscard = !!i1661[1]
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1667 = data
  i1666.passId = i1667[0]
  i1666.subShaderIndex = i1667[1]
  var i1669 = i1667[2]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( i1669[i + 0] );
  }
  i1666.keywords = i1668
  i1666.vertexProgram = i1667[3]
  i1666.fragmentProgram = i1667[4]
  i1666.exportedForWebGl2 = !!i1667[5]
  i1666.readDepth = !!i1667[6]
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1673 = data
  request.r(i1673[0], i1673[1], 0, i1672, 'shader')
  i1672.pass = i1673[2]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1677 = data
  i1676.name = i1677[0]
  i1676.type = i1677[1]
  i1676.value = new pc.Vec4( i1677[2], i1677[3], i1677[4], i1677[5] )
  i1676.textureValue = i1677[6]
  i1676.shaderPropertyFlag = i1677[7]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1679 = data
  i1678.name = i1679[0]
  request.r(i1679[1], i1679[2], 0, i1678, 'texture')
  i1678.aabb = i1679[3]
  i1678.vertices = i1679[4]
  i1678.triangles = i1679[5]
  i1678.textureRect = UnityEngine.Rect.MinMaxRect(i1679[6], i1679[7], i1679[8], i1679[9])
  i1678.packedRect = UnityEngine.Rect.MinMaxRect(i1679[10], i1679[11], i1679[12], i1679[13])
  i1678.border = new pc.Vec4( i1679[14], i1679[15], i1679[16], i1679[17] )
  i1678.transparency = i1679[18]
  i1678.bounds = i1679[19]
  i1678.pixelsPerUnit = i1679[20]
  i1678.textureWidth = i1679[21]
  i1678.textureHeight = i1679[22]
  i1678.nativeSize = new pc.Vec2( i1679[23], i1679[24] )
  i1678.pivot = new pc.Vec2( i1679[25], i1679[26] )
  i1678.textureRectOffset = new pc.Vec2( i1679[27], i1679[28] )
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1681 = data
  i1680.name = i1681[0]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1683 = data
  i1682.name = i1683[0]
  i1682.ascent = i1683[1]
  i1682.originalLineHeight = i1683[2]
  i1682.fontSize = i1683[3]
  var i1685 = i1683[4]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1685[i + 0]) );
  }
  i1682.characterInfo = i1684
  request.r(i1683[5], i1683[6], 0, i1682, 'texture')
  i1682.originalFontSize = i1683[7]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1689 = data
  i1688.index = i1689[0]
  i1688.advance = i1689[1]
  i1688.bearing = i1689[2]
  i1688.glyphWidth = i1689[3]
  i1688.glyphHeight = i1689[4]
  i1688.minX = i1689[5]
  i1688.maxX = i1689[6]
  i1688.minY = i1689[7]
  i1688.maxY = i1689[8]
  i1688.uvBottomLeftX = i1689[9]
  i1688.uvBottomLeftY = i1689[10]
  i1688.uvBottomRightX = i1689[11]
  i1688.uvBottomRightY = i1689[12]
  i1688.uvTopLeftX = i1689[13]
  i1688.uvTopLeftY = i1689[14]
  i1688.uvTopRightX = i1689[15]
  i1688.uvTopRightY = i1689[16]
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1691 = data
  i1690.name = i1691[0]
  i1690.bytes64 = i1691[1]
  i1690.data = i1691[2]
  return i1690
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1692 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1693 = data
  var i1695 = i1693[0]
  var i1694 = []
  for(var i = 0; i < i1695.length; i += 2) {
  request.r(i1695[i + 0], i1695[i + 1], 2, i1694, '')
  }
  i1692.atlasAssets = i1694
  i1692.scale = i1693[1]
  request.r(i1693[2], i1693[3], 0, i1692, 'skeletonJSON')
  i1692.isUpgradingBlendModeMaterials = !!i1693[4]
  i1692.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1693[5], i1692.blendModeMaterials)
  var i1697 = i1693[6]
  var i1696 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1697.length; i += 2) {
  request.r(i1697[i + 0], i1697[i + 1], 1, i1696, '')
  }
  i1692.skeletonDataModifiers = i1696
  var i1699 = i1693[7]
  var i1698 = []
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.push( i1699[i + 0] );
  }
  i1692.fromAnimation = i1698
  var i1701 = i1693[8]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( i1701[i + 0] );
  }
  i1692.toAnimation = i1700
  i1692.duration = i1693[9]
  i1692.defaultMix = i1693[10]
  request.r(i1693[11], i1693[12], 0, i1692, 'controller')
  return i1692
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1704 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1705 = data
  i1704.applyAdditiveMaterial = !!i1705[0]
  var i1707 = i1705[1]
  var i1706 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1707[i + 0]));
  }
  i1704.additiveMaterials = i1706
  var i1709 = i1705[2]
  var i1708 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1709[i + 0]));
  }
  i1704.multiplyMaterials = i1708
  var i1711 = i1705[3]
  var i1710 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1711[i + 0]));
  }
  i1704.screenMaterials = i1710
  i1704.requiresBlendModeMaterials = !!i1705[4]
  return i1704
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1714 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1715 = data
  i1714.pageName = i1715[0]
  request.r(i1715[1], i1715[2], 0, i1714, 'material')
  return i1714
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1718 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1719 = data
  request.r(i1719[0], i1719[1], 0, i1718, 'atlasFile')
  var i1721 = i1719[2]
  var i1720 = []
  for(var i = 0; i < i1721.length; i += 2) {
  request.r(i1721[i + 0], i1721[i + 1], 2, i1720, '')
  }
  i1718.materials = i1720
  i1718.textureLoadingMode = i1719[3]
  request.r(i1719[4], i1719[5], 0, i1718, 'onDemandTextureLoader')
  return i1718
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1722 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1723 = data
  request.r(i1723[0], i1723[1], 0, i1722, 'atlas')
  i1722.normalStyle = i1723[2]
  i1722.normalSpacingOffset = i1723[3]
  i1722.boldStyle = i1723[4]
  i1722.boldSpacing = i1723[5]
  i1722.italicStyle = i1723[6]
  i1722.tabSize = i1723[7]
  i1722.hashCode = i1723[8]
  request.r(i1723[9], i1723[10], 0, i1722, 'material')
  i1722.materialHashCode = i1723[11]
  i1722.m_Version = i1723[12]
  i1722.m_SourceFontFileGUID = i1723[13]
  request.r(i1723[14], i1723[15], 0, i1722, 'm_SourceFontFile_EditorRef')
  request.r(i1723[16], i1723[17], 0, i1722, 'm_SourceFontFile')
  i1722.m_AtlasPopulationMode = i1723[18]
  i1722.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1723[19], i1722.m_FaceInfo)
  var i1725 = i1723[20]
  var i1724 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.add(request.d('UnityEngine.TextCore.Glyph', i1725[i + 0]));
  }
  i1722.m_GlyphTable = i1724
  var i1727 = i1723[21]
  var i1726 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.add(request.d('TMPro.TMP_Character', i1727[i + 0]));
  }
  i1722.m_CharacterTable = i1726
  var i1729 = i1723[22]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 2) {
  request.r(i1729[i + 0], i1729[i + 1], 2, i1728, '')
  }
  i1722.m_AtlasTextures = i1728
  i1722.m_AtlasTextureIndex = i1723[23]
  i1722.m_IsMultiAtlasTexturesEnabled = !!i1723[24]
  i1722.m_ClearDynamicDataOnBuild = !!i1723[25]
  var i1731 = i1723[26]
  var i1730 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.add(request.d('UnityEngine.TextCore.GlyphRect', i1731[i + 0]));
  }
  i1722.m_UsedGlyphRects = i1730
  var i1733 = i1723[27]
  var i1732 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.add(request.d('UnityEngine.TextCore.GlyphRect', i1733[i + 0]));
  }
  i1722.m_FreeGlyphRects = i1732
  i1722.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1723[28], i1722.m_fontInfo)
  i1722.m_AtlasWidth = i1723[29]
  i1722.m_AtlasHeight = i1723[30]
  i1722.m_AtlasPadding = i1723[31]
  i1722.m_AtlasRenderMode = i1723[32]
  var i1735 = i1723[33]
  var i1734 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1735.length; i += 1) {
    i1734.add(request.d('TMPro.TMP_Glyph', i1735[i + 0]));
  }
  i1722.m_glyphInfoList = i1734
  i1722.m_KerningTable = request.d('TMPro.KerningTable', i1723[34], i1722.m_KerningTable)
  i1722.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1723[35], i1722.m_FontFeatureTable)
  var i1737 = i1723[36]
  var i1736 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1737.length; i += 2) {
  request.r(i1737[i + 0], i1737[i + 1], 1, i1736, '')
  }
  i1722.fallbackFontAssets = i1736
  var i1739 = i1723[37]
  var i1738 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1739.length; i += 2) {
  request.r(i1739[i + 0], i1739[i + 1], 1, i1738, '')
  }
  i1722.m_FallbackFontAssetTable = i1738
  i1722.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1723[38], i1722.m_CreationSettings)
  var i1741 = i1723[39]
  var i1740 = []
  for(var i = 0; i < i1741.length; i += 1) {
    i1740.push( request.d('TMPro.TMP_FontWeightPair', i1741[i + 0]) );
  }
  i1722.m_FontWeightTable = i1740
  var i1743 = i1723[40]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( request.d('TMPro.TMP_FontWeightPair', i1743[i + 0]) );
  }
  i1722.fontWeights = i1742
  return i1722
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1744 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1745 = data
  i1744.m_FaceIndex = i1745[0]
  i1744.m_FamilyName = i1745[1]
  i1744.m_StyleName = i1745[2]
  i1744.m_PointSize = i1745[3]
  i1744.m_Scale = i1745[4]
  i1744.m_UnitsPerEM = i1745[5]
  i1744.m_LineHeight = i1745[6]
  i1744.m_AscentLine = i1745[7]
  i1744.m_CapLine = i1745[8]
  i1744.m_MeanLine = i1745[9]
  i1744.m_Baseline = i1745[10]
  i1744.m_DescentLine = i1745[11]
  i1744.m_SuperscriptOffset = i1745[12]
  i1744.m_SuperscriptSize = i1745[13]
  i1744.m_SubscriptOffset = i1745[14]
  i1744.m_SubscriptSize = i1745[15]
  i1744.m_UnderlineOffset = i1745[16]
  i1744.m_UnderlineThickness = i1745[17]
  i1744.m_StrikethroughOffset = i1745[18]
  i1744.m_StrikethroughThickness = i1745[19]
  i1744.m_TabWidth = i1745[20]
  return i1744
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1748 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1749 = data
  i1748.m_Index = i1749[0]
  i1748.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1749[1], i1748.m_Metrics)
  i1748.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1749[2], i1748.m_GlyphRect)
  i1748.m_Scale = i1749[3]
  i1748.m_AtlasIndex = i1749[4]
  i1748.m_ClassDefinitionType = i1749[5]
  return i1748
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1750 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1751 = data
  i1750.m_Width = i1751[0]
  i1750.m_Height = i1751[1]
  i1750.m_HorizontalBearingX = i1751[2]
  i1750.m_HorizontalBearingY = i1751[3]
  i1750.m_HorizontalAdvance = i1751[4]
  return i1750
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1752 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1753 = data
  i1752.m_X = i1753[0]
  i1752.m_Y = i1753[1]
  i1752.m_Width = i1753[2]
  i1752.m_Height = i1753[3]
  return i1752
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1756 = root || request.c( 'TMPro.TMP_Character' )
  var i1757 = data
  i1756.m_ElementType = i1757[0]
  i1756.m_Unicode = i1757[1]
  i1756.m_GlyphIndex = i1757[2]
  i1756.m_Scale = i1757[3]
  return i1756
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1762 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1763 = data
  i1762.Name = i1763[0]
  i1762.PointSize = i1763[1]
  i1762.Scale = i1763[2]
  i1762.CharacterCount = i1763[3]
  i1762.LineHeight = i1763[4]
  i1762.Baseline = i1763[5]
  i1762.Ascender = i1763[6]
  i1762.CapHeight = i1763[7]
  i1762.Descender = i1763[8]
  i1762.CenterLine = i1763[9]
  i1762.SuperscriptOffset = i1763[10]
  i1762.SubscriptOffset = i1763[11]
  i1762.SubSize = i1763[12]
  i1762.Underline = i1763[13]
  i1762.UnderlineThickness = i1763[14]
  i1762.strikethrough = i1763[15]
  i1762.strikethroughThickness = i1763[16]
  i1762.TabWidth = i1763[17]
  i1762.Padding = i1763[18]
  i1762.AtlasWidth = i1763[19]
  i1762.AtlasHeight = i1763[20]
  return i1762
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1766 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1767 = data
  i1766.id = i1767[0]
  i1766.x = i1767[1]
  i1766.y = i1767[2]
  i1766.width = i1767[3]
  i1766.height = i1767[4]
  i1766.xOffset = i1767[5]
  i1766.yOffset = i1767[6]
  i1766.xAdvance = i1767[7]
  i1766.scale = i1767[8]
  return i1766
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1768 = root || request.c( 'TMPro.KerningTable' )
  var i1769 = data
  var i1771 = i1769[0]
  var i1770 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.add(request.d('TMPro.KerningPair', i1771[i + 0]));
  }
  i1768.kerningPairs = i1770
  return i1768
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1774 = root || request.c( 'TMPro.KerningPair' )
  var i1775 = data
  i1774.xOffset = i1775[0]
  i1774.m_FirstGlyph = i1775[1]
  i1774.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1775[2], i1774.m_FirstGlyphAdjustments)
  i1774.m_SecondGlyph = i1775[3]
  i1774.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1775[4], i1774.m_SecondGlyphAdjustments)
  i1774.m_IgnoreSpacingAdjustments = !!i1775[5]
  return i1774
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1776 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1777 = data
  var i1779 = i1777[0]
  var i1778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1779[i + 0]));
  }
  i1776.m_GlyphPairAdjustmentRecords = i1778
  return i1776
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1782 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1783 = data
  i1782.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1783[0], i1782.m_FirstAdjustmentRecord)
  i1782.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1783[1], i1782.m_SecondAdjustmentRecord)
  i1782.m_FeatureLookupFlags = i1783[2]
  return i1782
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1786 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1787 = data
  i1786.sourceFontFileName = i1787[0]
  i1786.sourceFontFileGUID = i1787[1]
  i1786.pointSizeSamplingMode = i1787[2]
  i1786.pointSize = i1787[3]
  i1786.padding = i1787[4]
  i1786.packingMode = i1787[5]
  i1786.atlasWidth = i1787[6]
  i1786.atlasHeight = i1787[7]
  i1786.characterSetSelectionMode = i1787[8]
  i1786.characterSequence = i1787[9]
  i1786.referencedFontAssetGUID = i1787[10]
  i1786.referencedTextAssetGUID = i1787[11]
  i1786.fontStyle = i1787[12]
  i1786.fontStyleModifier = i1787[13]
  i1786.renderMode = i1787[14]
  i1786.includeFontFeatures = !!i1787[15]
  return i1786
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1790 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1791 = data
  request.r(i1791[0], i1791[1], 0, i1790, 'regularTypeface')
  request.r(i1791[2], i1791[3], 0, i1790, 'italicTypeface')
  return i1790
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1792 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1793 = data
  i1792.useSafeMode = !!i1793[0]
  i1792.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1793[1], i1792.safeModeOptions)
  i1792.timeScale = i1793[2]
  i1792.unscaledTimeScale = i1793[3]
  i1792.useSmoothDeltaTime = !!i1793[4]
  i1792.maxSmoothUnscaledTime = i1793[5]
  i1792.rewindCallbackMode = i1793[6]
  i1792.showUnityEditorReport = !!i1793[7]
  i1792.logBehaviour = i1793[8]
  i1792.drawGizmos = !!i1793[9]
  i1792.defaultRecyclable = !!i1793[10]
  i1792.defaultAutoPlay = i1793[11]
  i1792.defaultUpdateType = i1793[12]
  i1792.defaultTimeScaleIndependent = !!i1793[13]
  i1792.defaultEaseType = i1793[14]
  i1792.defaultEaseOvershootOrAmplitude = i1793[15]
  i1792.defaultEasePeriod = i1793[16]
  i1792.defaultAutoKill = !!i1793[17]
  i1792.defaultLoopType = i1793[18]
  i1792.debugMode = !!i1793[19]
  i1792.debugStoreTargetId = !!i1793[20]
  i1792.showPreviewPanel = !!i1793[21]
  i1792.storeSettingsLocation = i1793[22]
  i1792.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1793[23], i1792.modules)
  i1792.createASMDEF = !!i1793[24]
  i1792.showPlayingTweens = !!i1793[25]
  i1792.showPausedTweens = !!i1793[26]
  return i1792
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1794 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1795 = data
  i1794.logBehaviour = i1795[0]
  i1794.nestedTweenFailureBehaviour = i1795[1]
  return i1794
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1796 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1797 = data
  i1796.showPanel = !!i1797[0]
  i1796.audioEnabled = !!i1797[1]
  i1796.physicsEnabled = !!i1797[2]
  i1796.physics2DEnabled = !!i1797[3]
  i1796.spriteEnabled = !!i1797[4]
  i1796.uiEnabled = !!i1797[5]
  i1796.textMeshProEnabled = !!i1797[6]
  i1796.tk2DEnabled = !!i1797[7]
  i1796.deAudioEnabled = !!i1797[8]
  i1796.deUnityExtendedEnabled = !!i1797[9]
  i1796.epoOutlineEnabled = !!i1797[10]
  return i1796
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1798 = root || request.c( 'TMPro.TMP_Settings' )
  var i1799 = data
  i1798.m_enableWordWrapping = !!i1799[0]
  i1798.m_enableKerning = !!i1799[1]
  i1798.m_enableExtraPadding = !!i1799[2]
  i1798.m_enableTintAllSprites = !!i1799[3]
  i1798.m_enableParseEscapeCharacters = !!i1799[4]
  i1798.m_EnableRaycastTarget = !!i1799[5]
  i1798.m_GetFontFeaturesAtRuntime = !!i1799[6]
  i1798.m_missingGlyphCharacter = i1799[7]
  i1798.m_warningsDisabled = !!i1799[8]
  request.r(i1799[9], i1799[10], 0, i1798, 'm_defaultFontAsset')
  i1798.m_defaultFontAssetPath = i1799[11]
  i1798.m_defaultFontSize = i1799[12]
  i1798.m_defaultAutoSizeMinRatio = i1799[13]
  i1798.m_defaultAutoSizeMaxRatio = i1799[14]
  i1798.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1799[15], i1799[16] )
  i1798.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1799[17], i1799[18] )
  i1798.m_autoSizeTextContainer = !!i1799[19]
  i1798.m_IsTextObjectScaleStatic = !!i1799[20]
  var i1801 = i1799[21]
  var i1800 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1801.length; i += 2) {
  request.r(i1801[i + 0], i1801[i + 1], 1, i1800, '')
  }
  i1798.m_fallbackFontAssets = i1800
  i1798.m_matchMaterialPreset = !!i1799[22]
  request.r(i1799[23], i1799[24], 0, i1798, 'm_defaultSpriteAsset')
  i1798.m_defaultSpriteAssetPath = i1799[25]
  i1798.m_enableEmojiSupport = !!i1799[26]
  i1798.m_MissingCharacterSpriteUnicode = i1799[27]
  i1798.m_defaultColorGradientPresetsPath = i1799[28]
  request.r(i1799[29], i1799[30], 0, i1798, 'm_defaultStyleSheet')
  i1798.m_StyleSheetsResourcePath = i1799[31]
  request.r(i1799[32], i1799[33], 0, i1798, 'm_leadingCharacters')
  request.r(i1799[34], i1799[35], 0, i1798, 'm_followingCharacters')
  i1798.m_UseModernHangulLineBreakingRules = !!i1799[36]
  return i1798
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1802 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1803 = data
  request.r(i1803[0], i1803[1], 0, i1802, 'spriteSheet')
  var i1805 = i1803[2]
  var i1804 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.add(request.d('TMPro.TMP_Sprite', i1805[i + 0]));
  }
  i1802.spriteInfoList = i1804
  var i1807 = i1803[3]
  var i1806 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1807.length; i += 2) {
  request.r(i1807[i + 0], i1807[i + 1], 1, i1806, '')
  }
  i1802.fallbackSpriteAssets = i1806
  i1802.hashCode = i1803[4]
  request.r(i1803[5], i1803[6], 0, i1802, 'material')
  i1802.materialHashCode = i1803[7]
  i1802.m_Version = i1803[8]
  i1802.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1803[9], i1802.m_FaceInfo)
  var i1809 = i1803[10]
  var i1808 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.add(request.d('TMPro.TMP_SpriteCharacter', i1809[i + 0]));
  }
  i1802.m_SpriteCharacterTable = i1808
  var i1811 = i1803[11]
  var i1810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1811.length; i += 1) {
    i1810.add(request.d('TMPro.TMP_SpriteGlyph', i1811[i + 0]));
  }
  i1802.m_SpriteGlyphTable = i1810
  return i1802
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1814 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1815 = data
  i1814.name = i1815[0]
  i1814.hashCode = i1815[1]
  i1814.unicode = i1815[2]
  i1814.pivot = new pc.Vec2( i1815[3], i1815[4] )
  request.r(i1815[5], i1815[6], 0, i1814, 'sprite')
  i1814.id = i1815[7]
  i1814.x = i1815[8]
  i1814.y = i1815[9]
  i1814.width = i1815[10]
  i1814.height = i1815[11]
  i1814.xOffset = i1815[12]
  i1814.yOffset = i1815[13]
  i1814.xAdvance = i1815[14]
  i1814.scale = i1815[15]
  return i1814
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1820 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1821 = data
  i1820.m_Name = i1821[0]
  i1820.m_HashCode = i1821[1]
  i1820.m_ElementType = i1821[2]
  i1820.m_Unicode = i1821[3]
  i1820.m_GlyphIndex = i1821[4]
  i1820.m_Scale = i1821[5]
  return i1820
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1824 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1825 = data
  request.r(i1825[0], i1825[1], 0, i1824, 'sprite')
  i1824.m_Index = i1825[2]
  i1824.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1825[3], i1824.m_Metrics)
  i1824.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1825[4], i1824.m_GlyphRect)
  i1824.m_Scale = i1825[5]
  i1824.m_AtlasIndex = i1825[6]
  i1824.m_ClassDefinitionType = i1825[7]
  return i1824
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1826 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1827 = data
  var i1829 = i1827[0]
  var i1828 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.add(request.d('TMPro.TMP_Style', i1829[i + 0]));
  }
  i1826.m_StyleList = i1828
  return i1826
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1832 = root || request.c( 'TMPro.TMP_Style' )
  var i1833 = data
  i1832.m_Name = i1833[0]
  i1832.m_HashCode = i1833[1]
  i1832.m_OpeningDefinition = i1833[2]
  i1832.m_ClosingDefinition = i1833[3]
  i1832.m_OpeningTagArray = i1833[4]
  i1832.m_ClosingTagArray = i1833[5]
  i1832.m_OpeningTagUnicodeArray = i1833[6]
  i1832.m_ClosingTagUnicodeArray = i1833[7]
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1835 = data
  var i1837 = i1835[0]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1837[i + 0]) );
  }
  i1834.files = i1836
  i1834.componentToPrefabIds = i1835[1]
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1841 = data
  i1840.path = i1841[0]
  request.r(i1841[1], i1841[2], 0, i1840, 'unityObject')
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1843 = data
  var i1845 = i1843[0]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1845[i + 0]) );
  }
  i1842.scriptsExecutionOrder = i1844
  var i1847 = i1843[1]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1847[i + 0]) );
  }
  i1842.sortingLayers = i1846
  var i1849 = i1843[2]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1849[i + 0]) );
  }
  i1842.cullingLayers = i1848
  i1842.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1843[3], i1842.timeSettings)
  i1842.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1843[4], i1842.physicsSettings)
  i1842.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1843[5], i1842.physics2DSettings)
  i1842.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1843[6], i1842.qualitySettings)
  i1842.enableRealtimeShadows = !!i1843[7]
  i1842.enableAutoInstancing = !!i1843[8]
  i1842.enableStaticBatching = !!i1843[9]
  i1842.enableDynamicBatching = !!i1843[10]
  i1842.lightmapEncodingQuality = i1843[11]
  i1842.desiredColorSpace = i1843[12]
  var i1851 = i1843[13]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( i1851[i + 0] );
  }
  i1842.allTags = i1850
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1855 = data
  i1854.name = i1855[0]
  i1854.value = i1855[1]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1859 = data
  i1858.id = i1859[0]
  i1858.name = i1859[1]
  i1858.value = i1859[2]
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1863 = data
  i1862.id = i1863[0]
  i1862.name = i1863[1]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1865 = data
  i1864.fixedDeltaTime = i1865[0]
  i1864.maximumDeltaTime = i1865[1]
  i1864.timeScale = i1865[2]
  i1864.maximumParticleTimestep = i1865[3]
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1867 = data
  i1866.gravity = new pc.Vec3( i1867[0], i1867[1], i1867[2] )
  i1866.defaultSolverIterations = i1867[3]
  i1866.bounceThreshold = i1867[4]
  i1866.autoSyncTransforms = !!i1867[5]
  i1866.autoSimulation = !!i1867[6]
  var i1869 = i1867[7]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1869[i + 0]) );
  }
  i1866.collisionMatrix = i1868
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1873 = data
  i1872.enabled = !!i1873[0]
  i1872.layerId = i1873[1]
  i1872.otherLayerId = i1873[2]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1875 = data
  request.r(i1875[0], i1875[1], 0, i1874, 'material')
  i1874.gravity = new pc.Vec2( i1875[2], i1875[3] )
  i1874.positionIterations = i1875[4]
  i1874.velocityIterations = i1875[5]
  i1874.velocityThreshold = i1875[6]
  i1874.maxLinearCorrection = i1875[7]
  i1874.maxAngularCorrection = i1875[8]
  i1874.maxTranslationSpeed = i1875[9]
  i1874.maxRotationSpeed = i1875[10]
  i1874.baumgarteScale = i1875[11]
  i1874.baumgarteTOIScale = i1875[12]
  i1874.timeToSleep = i1875[13]
  i1874.linearSleepTolerance = i1875[14]
  i1874.angularSleepTolerance = i1875[15]
  i1874.defaultContactOffset = i1875[16]
  i1874.autoSimulation = !!i1875[17]
  i1874.queriesHitTriggers = !!i1875[18]
  i1874.queriesStartInColliders = !!i1875[19]
  i1874.callbacksOnDisable = !!i1875[20]
  i1874.reuseCollisionCallbacks = !!i1875[21]
  i1874.autoSyncTransforms = !!i1875[22]
  var i1877 = i1875[23]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1877[i + 0]) );
  }
  i1874.collisionMatrix = i1876
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1881 = data
  i1880.enabled = !!i1881[0]
  i1880.layerId = i1881[1]
  i1880.otherLayerId = i1881[2]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1883 = data
  var i1885 = i1883[0]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1885[i + 0]) );
  }
  i1882.qualityLevels = i1884
  var i1887 = i1883[1]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( i1887[i + 0] );
  }
  i1882.names = i1886
  i1882.shadows = i1883[2]
  i1882.anisotropicFiltering = i1883[3]
  i1882.antiAliasing = i1883[4]
  i1882.lodBias = i1883[5]
  i1882.shadowCascades = i1883[6]
  i1882.shadowDistance = i1883[7]
  i1882.shadowmaskMode = i1883[8]
  i1882.shadowProjection = i1883[9]
  i1882.shadowResolution = i1883[10]
  i1882.softParticles = !!i1883[11]
  i1882.softVegetation = !!i1883[12]
  i1882.activeColorSpace = i1883[13]
  i1882.desiredColorSpace = i1883[14]
  i1882.masterTextureLimit = i1883[15]
  i1882.maxQueuedFrames = i1883[16]
  i1882.particleRaycastBudget = i1883[17]
  i1882.pixelLightCount = i1883[18]
  i1882.realtimeReflectionProbes = !!i1883[19]
  i1882.shadowCascade2Split = i1883[20]
  i1882.shadowCascade4Split = new pc.Vec3( i1883[21], i1883[22], i1883[23] )
  i1882.streamingMipmapsActive = !!i1883[24]
  i1882.vSyncCount = i1883[25]
  i1882.asyncUploadBufferSize = i1883[26]
  i1882.asyncUploadTimeSlice = i1883[27]
  i1882.billboardsFaceCameraPosition = !!i1883[28]
  i1882.shadowNearPlaneOffset = i1883[29]
  i1882.streamingMipmapsMemoryBudget = i1883[30]
  i1882.maximumLODLevel = i1883[31]
  i1882.streamingMipmapsAddAllCameras = !!i1883[32]
  i1882.streamingMipmapsMaxLevelReduction = i1883[33]
  i1882.streamingMipmapsRenderersPerFrame = i1883[34]
  i1882.resolutionScalingFixedDPIFactor = i1883[35]
  i1882.streamingMipmapsMaxFileIORequests = i1883[36]
  i1882.currentQualityLevel = i1883[37]
  return i1882
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1890 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1891 = data
  i1890.xPlacement = i1891[0]
  i1890.yPlacement = i1891[1]
  i1890.xAdvance = i1891[2]
  i1890.yAdvance = i1891[3]
  return i1890
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1892 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1893 = data
  i1892.m_GlyphIndex = i1893[0]
  i1892.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1893[1], i1892.m_GlyphValueRecord)
  return i1892
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1894 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1895 = data
  i1894.m_XPlacement = i1895[0]
  i1894.m_YPlacement = i1895[1]
  i1894.m_XAdvance = i1895[2]
  i1894.m_YAdvance = i1895[3]
  return i1894
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[11],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[52],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[11],"74":[75],"76":[77],"78":[77],"15":[2],"79":[80],"81":[82],"83":[80],"84":[2],"85":[2],"17":[15],"5":[3,2],"86":[2],"16":[15],"87":[2],"88":[2],"89":[2],"90":[2],"91":[2],"92":[2],"93":[2],"32":[2],"94":[2],"22":[3,2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[3,2],"100":[2],"101":[13],"102":[13],"14":[13],"103":[13],"104":[11],"105":[11],"106":[107],"108":[11],"109":[110],"111":[2],"112":[3,2],"113":[75],"25":[3,2],"114":[115,75],"116":[75],"117":[75,118],"119":[52],"120":[60],"121":[110],"122":[123],"124":[2],"125":[75,2],"7":[2,3],"126":[2],"127":[3,2],"128":[75],"129":[3,2],"130":[2],"131":[80]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","UnityEngine.AudioSource","UnityEngine.AudioClip","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","DragID","UnityEngine.CanvasGroup","DropID","UnityEngine.PolygonCollider2D","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "184.4";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "TBAP_V10_ManhND_AnhPD";

Deserializers.lunaAppID = "33901";

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

Deserializers.buildID = "0d1f69aa-03cb-457b-a27c-739f2690d4bc";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

