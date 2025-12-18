var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1416 = root || request.c( 'UnityEngine.JointSpring' )
  var i1417 = data
  i1416.spring = i1417[0]
  i1416.damper = i1417[1]
  i1416.targetPosition = i1417[2]
  return i1416
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1418 = root || request.c( 'UnityEngine.JointMotor' )
  var i1419 = data
  i1418.m_TargetVelocity = i1419[0]
  i1418.m_Force = i1419[1]
  i1418.m_FreeSpin = i1419[2]
  return i1418
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1420 = root || request.c( 'UnityEngine.JointLimits' )
  var i1421 = data
  i1420.m_Min = i1421[0]
  i1420.m_Max = i1421[1]
  i1420.m_Bounciness = i1421[2]
  i1420.m_BounceMinVelocity = i1421[3]
  i1420.m_ContactDistance = i1421[4]
  i1420.minBounce = i1421[5]
  i1420.maxBounce = i1421[6]
  return i1420
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1422 = root || request.c( 'UnityEngine.JointDrive' )
  var i1423 = data
  i1422.m_PositionSpring = i1423[0]
  i1422.m_PositionDamper = i1423[1]
  i1422.m_MaximumForce = i1423[2]
  i1422.m_UseAcceleration = i1423[3]
  return i1422
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1424 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1425 = data
  i1424.m_Spring = i1425[0]
  i1424.m_Damper = i1425[1]
  return i1424
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1426 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1427 = data
  i1426.m_Limit = i1427[0]
  i1426.m_Bounciness = i1427[1]
  i1426.m_ContactDistance = i1427[2]
  return i1426
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1428 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1429 = data
  i1428.m_ExtremumSlip = i1429[0]
  i1428.m_ExtremumValue = i1429[1]
  i1428.m_AsymptoteSlip = i1429[2]
  i1428.m_AsymptoteValue = i1429[3]
  i1428.m_Stiffness = i1429[4]
  return i1428
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1430 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1431 = data
  i1430.m_LowerAngle = i1431[0]
  i1430.m_UpperAngle = i1431[1]
  return i1430
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1432 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1433 = data
  i1432.m_MotorSpeed = i1433[0]
  i1432.m_MaximumMotorTorque = i1433[1]
  return i1432
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1434 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1435 = data
  i1434.m_DampingRatio = i1435[0]
  i1434.m_Frequency = i1435[1]
  i1434.m_Angle = i1435[2]
  return i1434
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1436 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1437 = data
  i1436.m_LowerTranslation = i1437[0]
  i1436.m_UpperTranslation = i1437[1]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1439 = data
  i1438.name = i1439[0]
  i1438.width = i1439[1]
  i1438.height = i1439[2]
  i1438.mipmapCount = i1439[3]
  i1438.anisoLevel = i1439[4]
  i1438.filterMode = i1439[5]
  i1438.hdr = !!i1439[6]
  i1438.format = i1439[7]
  i1438.wrapMode = i1439[8]
  i1438.alphaIsTransparency = !!i1439[9]
  i1438.alphaSource = i1439[10]
  i1438.graphicsFormat = i1439[11]
  i1438.sRGBTexture = !!i1439[12]
  i1438.desiredColorSpace = i1439[13]
  i1438.wrapU = i1439[14]
  i1438.wrapV = i1439[15]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1440 = root || new pc.UnityMaterial()
  var i1441 = data
  i1440.name = i1441[0]
  request.r(i1441[1], i1441[2], 0, i1440, 'shader')
  i1440.renderQueue = i1441[3]
  i1440.enableInstancing = !!i1441[4]
  var i1443 = i1441[5]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1443[i + 0]) );
  }
  i1440.floatParameters = i1442
  var i1445 = i1441[6]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1445[i + 0]) );
  }
  i1440.colorParameters = i1444
  var i1447 = i1441[7]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1447[i + 0]) );
  }
  i1440.vectorParameters = i1446
  var i1449 = i1441[8]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1449[i + 0]) );
  }
  i1440.textureParameters = i1448
  var i1451 = i1441[9]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1451[i + 0]) );
  }
  i1440.materialFlags = i1450
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1455 = data
  i1454.name = i1455[0]
  i1454.value = i1455[1]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1459 = data
  i1458.name = i1459[0]
  i1458.value = new pc.Color(i1459[1], i1459[2], i1459[3], i1459[4])
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1463 = data
  i1462.name = i1463[0]
  i1462.value = new pc.Vec4( i1463[1], i1463[2], i1463[3], i1463[4] )
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1467 = data
  i1466.name = i1467[0]
  request.r(i1467[1], i1467[2], 0, i1466, 'value')
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1471 = data
  i1470.name = i1471[0]
  i1470.enabled = !!i1471[1]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1473 = data
  i1472.pivot = new pc.Vec2( i1473[0], i1473[1] )
  i1472.anchorMin = new pc.Vec2( i1473[2], i1473[3] )
  i1472.anchorMax = new pc.Vec2( i1473[4], i1473[5] )
  i1472.sizeDelta = new pc.Vec2( i1473[6], i1473[7] )
  i1472.anchoredPosition3D = new pc.Vec3( i1473[8], i1473[9], i1473[10] )
  i1472.rotation = new pc.Quat(i1473[11], i1473[12], i1473[13], i1473[14])
  i1472.scale = new pc.Vec3( i1473[15], i1473[16], i1473[17] )
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1475 = data
  i1474.cullTransparentMesh = !!i1475[0]
  return i1474
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1476 = root || request.c( 'UnityEngine.UI.Image' )
  var i1477 = data
  request.r(i1477[0], i1477[1], 0, i1476, 'm_Sprite')
  i1476.m_Type = i1477[2]
  i1476.m_PreserveAspect = !!i1477[3]
  i1476.m_FillCenter = !!i1477[4]
  i1476.m_FillMethod = i1477[5]
  i1476.m_FillAmount = i1477[6]
  i1476.m_FillClockwise = !!i1477[7]
  i1476.m_FillOrigin = i1477[8]
  i1476.m_UseSpriteMesh = !!i1477[9]
  i1476.m_PixelsPerUnitMultiplier = i1477[10]
  i1476.m_Maskable = !!i1477[11]
  request.r(i1477[12], i1477[13], 0, i1476, 'm_Material')
  i1476.m_Color = new pc.Color(i1477[14], i1477[15], i1477[16], i1477[17])
  i1476.m_RaycastTarget = !!i1477[18]
  i1476.m_RaycastPadding = new pc.Vec4( i1477[19], i1477[20], i1477[21], i1477[22] )
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1479 = data
  i1478.name = i1479[0]
  i1478.tagId = i1479[1]
  i1478.enabled = !!i1479[2]
  i1478.isStatic = !!i1479[3]
  i1478.layer = i1479[4]
  return i1478
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1480 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1481 = data
  i1480.m_hasFontAssetChanged = !!i1481[0]
  request.r(i1481[1], i1481[2], 0, i1480, 'm_baseMaterial')
  i1480.m_maskOffset = new pc.Vec4( i1481[3], i1481[4], i1481[5], i1481[6] )
  i1480.m_text = i1481[7]
  i1480.m_isRightToLeft = !!i1481[8]
  request.r(i1481[9], i1481[10], 0, i1480, 'm_fontAsset')
  request.r(i1481[11], i1481[12], 0, i1480, 'm_sharedMaterial')
  var i1483 = i1481[13]
  var i1482 = []
  for(var i = 0; i < i1483.length; i += 2) {
  request.r(i1483[i + 0], i1483[i + 1], 2, i1482, '')
  }
  i1480.m_fontSharedMaterials = i1482
  request.r(i1481[14], i1481[15], 0, i1480, 'm_fontMaterial')
  var i1485 = i1481[16]
  var i1484 = []
  for(var i = 0; i < i1485.length; i += 2) {
  request.r(i1485[i + 0], i1485[i + 1], 2, i1484, '')
  }
  i1480.m_fontMaterials = i1484
  i1480.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1481[17], i1481[18], i1481[19], i1481[20])
  i1480.m_fontColor = new pc.Color(i1481[21], i1481[22], i1481[23], i1481[24])
  i1480.m_enableVertexGradient = !!i1481[25]
  i1480.m_colorMode = i1481[26]
  i1480.m_fontColorGradient = request.d('TMPro.VertexGradient', i1481[27], i1480.m_fontColorGradient)
  request.r(i1481[28], i1481[29], 0, i1480, 'm_fontColorGradientPreset')
  request.r(i1481[30], i1481[31], 0, i1480, 'm_spriteAsset')
  i1480.m_tintAllSprites = !!i1481[32]
  request.r(i1481[33], i1481[34], 0, i1480, 'm_StyleSheet')
  i1480.m_TextStyleHashCode = i1481[35]
  i1480.m_overrideHtmlColors = !!i1481[36]
  i1480.m_faceColor = UnityEngine.Color32.ConstructColor(i1481[37], i1481[38], i1481[39], i1481[40])
  i1480.m_fontSize = i1481[41]
  i1480.m_fontSizeBase = i1481[42]
  i1480.m_fontWeight = i1481[43]
  i1480.m_enableAutoSizing = !!i1481[44]
  i1480.m_fontSizeMin = i1481[45]
  i1480.m_fontSizeMax = i1481[46]
  i1480.m_fontStyle = i1481[47]
  i1480.m_HorizontalAlignment = i1481[48]
  i1480.m_VerticalAlignment = i1481[49]
  i1480.m_textAlignment = i1481[50]
  i1480.m_characterSpacing = i1481[51]
  i1480.m_wordSpacing = i1481[52]
  i1480.m_lineSpacing = i1481[53]
  i1480.m_lineSpacingMax = i1481[54]
  i1480.m_paragraphSpacing = i1481[55]
  i1480.m_charWidthMaxAdj = i1481[56]
  i1480.m_enableWordWrapping = !!i1481[57]
  i1480.m_wordWrappingRatios = i1481[58]
  i1480.m_overflowMode = i1481[59]
  request.r(i1481[60], i1481[61], 0, i1480, 'm_linkedTextComponent')
  request.r(i1481[62], i1481[63], 0, i1480, 'parentLinkedComponent')
  i1480.m_enableKerning = !!i1481[64]
  i1480.m_enableExtraPadding = !!i1481[65]
  i1480.checkPaddingRequired = !!i1481[66]
  i1480.m_isRichText = !!i1481[67]
  i1480.m_parseCtrlCharacters = !!i1481[68]
  i1480.m_isOrthographic = !!i1481[69]
  i1480.m_isCullingEnabled = !!i1481[70]
  i1480.m_horizontalMapping = i1481[71]
  i1480.m_verticalMapping = i1481[72]
  i1480.m_uvLineOffset = i1481[73]
  i1480.m_geometrySortingOrder = i1481[74]
  i1480.m_IsTextObjectScaleStatic = !!i1481[75]
  i1480.m_VertexBufferAutoSizeReduction = !!i1481[76]
  i1480.m_useMaxVisibleDescender = !!i1481[77]
  i1480.m_pageToDisplay = i1481[78]
  i1480.m_margin = new pc.Vec4( i1481[79], i1481[80], i1481[81], i1481[82] )
  i1480.m_isUsingLegacyAnimationComponent = !!i1481[83]
  i1480.m_isVolumetricText = !!i1481[84]
  i1480.m_Maskable = !!i1481[85]
  request.r(i1481[86], i1481[87], 0, i1480, 'm_Material')
  i1480.m_Color = new pc.Color(i1481[88], i1481[89], i1481[90], i1481[91])
  i1480.m_RaycastTarget = !!i1481[92]
  i1480.m_RaycastPadding = new pc.Vec4( i1481[93], i1481[94], i1481[95], i1481[96] )
  return i1480
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1488 = root || request.c( 'TMPro.VertexGradient' )
  var i1489 = data
  i1488.topLeft = new pc.Color(i1489[0], i1489[1], i1489[2], i1489[3])
  i1488.topRight = new pc.Color(i1489[4], i1489[5], i1489[6], i1489[7])
  i1488.bottomLeft = new pc.Color(i1489[8], i1489[9], i1489[10], i1489[11])
  i1488.bottomRight = new pc.Color(i1489[12], i1489[13], i1489[14], i1489[15])
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
  i1494.aspect = i1495[0]
  i1494.orthographic = !!i1495[1]
  i1494.orthographicSize = i1495[2]
  i1494.backgroundColor = new pc.Color(i1495[3], i1495[4], i1495[5], i1495[6])
  i1494.nearClipPlane = i1495[7]
  i1494.farClipPlane = i1495[8]
  i1494.fieldOfView = i1495[9]
  i1494.depth = i1495[10]
  i1494.clearFlags = i1495[11]
  i1494.cullingMask = i1495[12]
  i1494.rect = i1495[13]
  request.r(i1495[14], i1495[15], 0, i1494, 'targetTexture')
  i1494.usePhysicalProperties = !!i1495[16]
  i1494.focalLength = i1495[17]
  i1494.sensorSize = new pc.Vec2( i1495[18], i1495[19] )
  i1494.lensShift = new pc.Vec2( i1495[20], i1495[21] )
  i1494.gateFit = i1495[22]
  i1494.commandBufferCount = i1495[23]
  i1494.cameraType = i1495[24]
  i1494.enabled = !!i1495[25]
  return i1494
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1496 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1497 = data
  request.r(i1497[0], i1497[1], 0, i1496, 'm_FirstSelected')
  i1496.m_sendNavigationEvents = !!i1497[2]
  i1496.m_DragThreshold = i1497[3]
  return i1496
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1498 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1499 = data
  i1498.m_HorizontalAxis = i1499[0]
  i1498.m_VerticalAxis = i1499[1]
  i1498.m_SubmitButton = i1499[2]
  i1498.m_CancelButton = i1499[3]
  i1498.m_InputActionsPerSecond = i1499[4]
  i1498.m_RepeatDelay = i1499[5]
  i1498.m_ForceModuleActive = !!i1499[6]
  i1498.m_SendPointerHoverToParent = !!i1499[7]
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1501 = data
  i1500.planeDistance = i1501[0]
  i1500.referencePixelsPerUnit = i1501[1]
  i1500.isFallbackOverlay = !!i1501[2]
  i1500.renderMode = i1501[3]
  i1500.renderOrder = i1501[4]
  i1500.sortingLayerName = i1501[5]
  i1500.sortingOrder = i1501[6]
  i1500.scaleFactor = i1501[7]
  request.r(i1501[8], i1501[9], 0, i1500, 'worldCamera')
  i1500.overrideSorting = !!i1501[10]
  i1500.pixelPerfect = !!i1501[11]
  i1500.targetDisplay = i1501[12]
  i1500.overridePixelPerfect = !!i1501[13]
  i1500.enabled = !!i1501[14]
  return i1500
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1502 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1503 = data
  i1502.m_UiScaleMode = i1503[0]
  i1502.m_ReferencePixelsPerUnit = i1503[1]
  i1502.m_ScaleFactor = i1503[2]
  i1502.m_ReferenceResolution = new pc.Vec2( i1503[3], i1503[4] )
  i1502.m_ScreenMatchMode = i1503[5]
  i1502.m_MatchWidthOrHeight = i1503[6]
  i1502.m_PhysicalUnit = i1503[7]
  i1502.m_FallbackScreenDPI = i1503[8]
  i1502.m_DefaultSpriteDPI = i1503[9]
  i1502.m_DynamicPixelsPerUnit = i1503[10]
  i1502.m_PresetInfoIsWorld = !!i1503[11]
  return i1502
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1504 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1505 = data
  i1504.m_IgnoreReversedGraphics = !!i1505[0]
  i1504.m_BlockingObjects = i1505[1]
  i1504.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1505[2] )
  return i1504
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1506 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1507 = data
  request.r(i1507[0], i1507[1], 0, i1506, 'm_Texture')
  i1506.m_UVRect = UnityEngine.Rect.MinMaxRect(i1507[2], i1507[3], i1507[4], i1507[5])
  i1506.m_Maskable = !!i1507[6]
  request.r(i1507[7], i1507[8], 0, i1506, 'm_Material')
  i1506.m_Color = new pc.Color(i1507[9], i1507[10], i1507[11], i1507[12])
  i1506.m_RaycastTarget = !!i1507[13]
  i1506.m_RaycastPadding = new pc.Vec4( i1507[14], i1507[15], i1507[16], i1507[17] )
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1509 = data
  request.r(i1509[0], i1509[1], 0, i1508, 'clip')
  request.r(i1509[2], i1509[3], 0, i1508, 'outputAudioMixerGroup')
  i1508.playOnAwake = !!i1509[4]
  i1508.loop = !!i1509[5]
  i1508.time = i1509[6]
  i1508.volume = i1509[7]
  i1508.pitch = i1509[8]
  i1508.enabled = !!i1509[9]
  return i1508
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1510 = root || request.c( 'DropZone' )
  var i1511 = data
  i1510.idDrop = i1511[0]
  i1510.isLose = !!i1511[1]
  var i1513 = i1511[2]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 2) {
  request.r(i1513[i + 0], i1513[i + 1], 2, i1512, '')
  }
  i1510.steps = i1512
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1517 = data
  i1516.usedByComposite = !!i1517[0]
  i1516.autoTiling = !!i1517[1]
  var i1519 = i1517[2]
  var i1518 = []
  for(var i = 0; i < i1519.length; i += 1) {
  var i1521 = i1519[i + 0]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 2) {
    i1520.push( new pc.Vec2( i1521[i + 0], i1521[i + 1] ) );
  }
    i1518.push( i1520 );
  }
  i1516.points = i1518
  i1516.enabled = !!i1517[3]
  i1516.isTrigger = !!i1517[4]
  i1516.usedByEffector = !!i1517[5]
  i1516.density = i1517[6]
  i1516.offset = new pc.Vec2( i1517[7], i1517[8] )
  request.r(i1517[9], i1517[10], 0, i1516, 'material')
  return i1516
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1528 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1529 = data
  request.r(i1529[0], i1529[1], 0, i1528, 'skeletonDataAsset')
  request.r(i1529[2], i1529[3], 0, i1528, 'additiveMaterial')
  request.r(i1529[4], i1529[5], 0, i1528, 'multiplyMaterial')
  request.r(i1529[6], i1529[7], 0, i1528, 'screenMaterial')
  i1528.initialSkinName = i1529[8]
  i1528.initialFlipX = !!i1529[9]
  i1528.initialFlipY = !!i1529[10]
  i1528.startingAnimation = i1529[11]
  i1528.startingLoop = !!i1529[12]
  i1528.timeScale = i1529[13]
  i1528.freeze = !!i1529[14]
  i1528.layoutScaleMode = i1529[15]
  i1528.updateWhenInvisible = i1529[16]
  i1528.allowMultipleCanvasRenderers = !!i1529[17]
  var i1531 = i1529[18]
  var i1530 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1531.length; i += 2) {
  request.r(i1531[i + 0], i1531[i + 1], 1, i1530, '')
  }
  i1528.canvasRenderers = i1530
  i1528.enableSeparatorSlots = !!i1529[19]
  i1528.updateSeparatorPartLocation = !!i1529[20]
  i1528.updateSeparatorPartScale = !!i1529[21]
  i1528.disableMeshAssignmentOnOverride = !!i1529[22]
  i1528.m_SkeletonColor = new pc.Color(i1529[23], i1529[24], i1529[25], i1529[26])
  i1528.referenceSize = new pc.Vec2( i1529[27], i1529[28] )
  i1528.pivotOffset = new pc.Vec2( i1529[29], i1529[30] )
  i1528.referenceScale = i1529[31]
  i1528.layoutScale = i1529[32]
  i1528.rectTransformSize = new pc.Vec2( i1529[33], i1529[34] )
  i1528.editReferenceRect = !!i1529[35]
  var i1533 = i1529[36]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.push( i1533[i + 0] );
  }
  i1528.separatorSlotNames = i1532
  var i1535 = i1529[37]
  var i1534 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1535.length; i += 2) {
  request.r(i1535[i + 0], i1535[i + 1], 1, i1534, '')
  }
  i1528.separatorParts = i1534
  i1528.physicsPositionInheritanceFactor = new pc.Vec2( i1529[38], i1529[39] )
  i1528.physicsRotationInheritanceFactor = i1529[40]
  request.r(i1529[41], i1529[42], 0, i1528, 'physicsMovementRelativeTo')
  i1528.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1529[43], i1528.meshGenerator)
  i1528.updateTiming = i1529[44]
  i1528.unscaledTime = !!i1529[45]
  i1528.m_Maskable = !!i1529[46]
  request.r(i1529[47], i1529[48], 0, i1528, 'm_Material')
  i1528.m_Color = new pc.Color(i1529[49], i1529[50], i1529[51], i1529[52])
  i1528.m_RaycastTarget = !!i1529[53]
  i1528.m_RaycastPadding = new pc.Vec4( i1529[54], i1529[55], i1529[56], i1529[57] )
  return i1528
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1542 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1543 = data
  i1542.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1543[0], i1542.settings)
  return i1542
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1544 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1545 = data
  i1544.useClipping = !!i1545[0]
  i1544.zSpacing = i1545[1]
  i1544.tintBlack = !!i1545[2]
  i1544.canvasGroupCompatible = !!i1545[3]
  i1544.pmaVertexColors = !!i1545[4]
  i1544.addNormals = !!i1545[5]
  i1544.calculateTangents = !!i1545[6]
  i1544.immutableTriangles = !!i1545[7]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1547 = data
  i1546.m_Alpha = i1547[0]
  i1546.m_Interactable = !!i1547[1]
  i1546.m_BlocksRaycasts = !!i1547[2]
  i1546.m_IgnoreParentGroups = !!i1547[3]
  i1546.enabled = !!i1547[4]
  return i1546
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1548 = root || request.c( 'DraggableItem' )
  var i1549 = data
  i1548.idDrag = i1549[0]
  i1548.isProcess = !!i1549[1]
  return i1548
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1550 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1551 = data
  i1550.targetIsSelf = !!i1551[0]
  request.r(i1551[1], i1551[2], 0, i1550, 'targetGO')
  i1550.tweenTargetIsTargetGO = !!i1551[3]
  i1550.delay = i1551[4]
  i1550.duration = i1551[5]
  i1550.easeType = i1551[6]
  i1550.easeCurve = new pc.AnimationCurve( { keys_flow: i1551[7] } )
  i1550.loopType = i1551[8]
  i1550.loops = i1551[9]
  i1550.id = i1551[10]
  i1550.isRelative = !!i1551[11]
  i1550.isFrom = !!i1551[12]
  i1550.isIndependentUpdate = !!i1551[13]
  i1550.autoKill = !!i1551[14]
  i1550.autoGenerate = !!i1551[15]
  i1550.isActive = !!i1551[16]
  i1550.isValid = !!i1551[17]
  request.r(i1551[18], i1551[19], 0, i1550, 'target')
  i1550.animationType = i1551[20]
  i1550.targetType = i1551[21]
  i1550.forcedTargetType = i1551[22]
  i1550.autoPlay = !!i1551[23]
  i1550.useTargetAsV3 = !!i1551[24]
  i1550.endValueFloat = i1551[25]
  i1550.endValueV3 = new pc.Vec3( i1551[26], i1551[27], i1551[28] )
  i1550.endValueV2 = new pc.Vec2( i1551[29], i1551[30] )
  i1550.endValueColor = new pc.Color(i1551[31], i1551[32], i1551[33], i1551[34])
  i1550.endValueString = i1551[35]
  i1550.endValueRect = UnityEngine.Rect.MinMaxRect(i1551[36], i1551[37], i1551[38], i1551[39])
  request.r(i1551[40], i1551[41], 0, i1550, 'endValueTransform')
  i1550.optionalBool0 = !!i1551[42]
  i1550.optionalBool1 = !!i1551[43]
  i1550.optionalFloat0 = i1551[44]
  i1550.optionalInt0 = i1551[45]
  i1550.optionalRotationMode = i1551[46]
  i1550.optionalScrambleMode = i1551[47]
  i1550.optionalShakeRandomnessMode = i1551[48]
  i1550.optionalString = i1551[49]
  i1550.updateType = i1551[50]
  i1550.isSpeedBased = !!i1551[51]
  i1550.hasOnStart = !!i1551[52]
  i1550.hasOnPlay = !!i1551[53]
  i1550.hasOnUpdate = !!i1551[54]
  i1550.hasOnStepComplete = !!i1551[55]
  i1550.hasOnComplete = !!i1551[56]
  i1550.hasOnTweenCreated = !!i1551[57]
  i1550.hasOnRewind = !!i1551[58]
  i1550.onStart = request.d('UnityEngine.Events.UnityEvent', i1551[59], i1550.onStart)
  i1550.onPlay = request.d('UnityEngine.Events.UnityEvent', i1551[60], i1550.onPlay)
  i1550.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1551[61], i1550.onUpdate)
  i1550.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1551[62], i1550.onStepComplete)
  i1550.onComplete = request.d('UnityEngine.Events.UnityEvent', i1551[63], i1550.onComplete)
  i1550.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1551[64], i1550.onTweenCreated)
  i1550.onRewind = request.d('UnityEngine.Events.UnityEvent', i1551[65], i1550.onRewind)
  return i1550
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1552 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1553 = data
  i1552.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1553[0], i1552.m_PersistentCalls)
  return i1552
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1554 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1555 = data
  var i1557 = i1555[0]
  var i1556 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.add(request.d('UnityEngine.Events.PersistentCall', i1557[i + 0]));
  }
  i1554.m_Calls = i1556
  return i1554
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1560 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1561 = data
  request.r(i1561[0], i1561[1], 0, i1560, 'm_Target')
  i1560.m_TargetAssemblyTypeName = i1561[2]
  i1560.m_MethodName = i1561[3]
  i1560.m_Mode = i1561[4]
  i1560.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1561[5], i1560.m_Arguments)
  i1560.m_CallState = i1561[6]
  return i1560
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1562 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1563 = data
  request.r(i1563[0], i1563[1], 0, i1562, 'm_ObjectArgument')
  i1562.m_ObjectArgumentAssemblyTypeName = i1563[2]
  i1562.m_IntArgument = i1563[3]
  i1562.m_FloatArgument = i1563[4]
  i1562.m_StringArgument = i1563[5]
  i1562.m_BoolArgument = !!i1563[6]
  return i1562
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1564 = root || request.c( 'LunaManager' )
  var i1565 = data
  var i1567 = i1565[0]
  var i1566 = []
  for(var i = 0; i < i1567.length; i += 2) {
  request.r(i1567[i + 0], i1567[i + 1], 2, i1566, '')
  }
  i1564.lstBtnInstall = i1566
  request.r(i1565[1], i1565[2], 0, i1564, 'StartCard')
  request.r(i1565[3], i1565[4], 0, i1564, 'EndCard')
  request.r(i1565[5], i1565[6], 0, i1564, 'Parent')
  request.r(i1565[7], i1565[8], 0, i1564, 'LoseTitle')
  var i1569 = i1565[9]
  var i1568 = []
  for(var i = 0; i < i1569.length; i += 2) {
  request.r(i1569[i + 0], i1569[i + 1], 2, i1568, '')
  }
  i1564.tutorial = i1568
  i1564.isDrag = !!i1565[10]
  i1564.countPlay = i1565[11]
  i1564.countPlayFinal = i1565[12]
  i1564.countPlayMax = i1565[13]
  i1564.timeDropFinal = i1565[14]
  i1564.colorBG = new pc.Color(i1565[15], i1565[16], i1565[17], i1565[18])
  request.r(i1565[19], i1565[20], 0, i1564, 'texture2D')
  request.r(i1565[21], i1565[22], 0, i1564, 'rawImageBG')
  request.r(i1565[23], i1565[24], 0, i1564, 'textProgess')
  request.r(i1565[25], i1565[26], 0, i1564, 'imgProgess')
  request.r(i1565[27], i1565[28], 0, i1564, 'timeText')
  return i1564
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1572 = root || request.c( 'UnityEngine.UI.Button' )
  var i1573 = data
  i1572.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1573[0], i1572.m_OnClick)
  i1572.m_Navigation = request.d('UnityEngine.UI.Navigation', i1573[1], i1572.m_Navigation)
  i1572.m_Transition = i1573[2]
  i1572.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1573[3], i1572.m_Colors)
  i1572.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1573[4], i1572.m_SpriteState)
  i1572.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1573[5], i1572.m_AnimationTriggers)
  i1572.m_Interactable = !!i1573[6]
  request.r(i1573[7], i1573[8], 0, i1572, 'm_TargetGraphic')
  return i1572
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1574 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1575 = data
  i1574.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1575[0], i1574.m_PersistentCalls)
  return i1574
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1576 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1577 = data
  i1576.m_Mode = i1577[0]
  i1576.m_WrapAround = !!i1577[1]
  request.r(i1577[2], i1577[3], 0, i1576, 'm_SelectOnUp')
  request.r(i1577[4], i1577[5], 0, i1576, 'm_SelectOnDown')
  request.r(i1577[6], i1577[7], 0, i1576, 'm_SelectOnLeft')
  request.r(i1577[8], i1577[9], 0, i1576, 'm_SelectOnRight')
  return i1576
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1578 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1579 = data
  i1578.m_NormalColor = new pc.Color(i1579[0], i1579[1], i1579[2], i1579[3])
  i1578.m_HighlightedColor = new pc.Color(i1579[4], i1579[5], i1579[6], i1579[7])
  i1578.m_PressedColor = new pc.Color(i1579[8], i1579[9], i1579[10], i1579[11])
  i1578.m_SelectedColor = new pc.Color(i1579[12], i1579[13], i1579[14], i1579[15])
  i1578.m_DisabledColor = new pc.Color(i1579[16], i1579[17], i1579[18], i1579[19])
  i1578.m_ColorMultiplier = i1579[20]
  i1578.m_FadeDuration = i1579[21]
  return i1578
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1580 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1581 = data
  request.r(i1581[0], i1581[1], 0, i1580, 'm_HighlightedSprite')
  request.r(i1581[2], i1581[3], 0, i1580, 'm_PressedSprite')
  request.r(i1581[4], i1581[5], 0, i1580, 'm_SelectedSprite')
  request.r(i1581[6], i1581[7], 0, i1580, 'm_DisabledSprite')
  return i1580
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1582 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1583 = data
  i1582.m_NormalTrigger = i1583[0]
  i1582.m_HighlightedTrigger = i1583[1]
  i1582.m_PressedTrigger = i1583[2]
  i1582.m_SelectedTrigger = i1583[3]
  i1582.m_DisabledTrigger = i1583[4]
  return i1582
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1585 = data
  i1584.m_ShowMaskGraphic = !!i1585[0]
  return i1584
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1586 = root || request.c( 'AudioController' )
  var i1587 = data
  request.r(i1587[0], i1587[1], 0, i1586, 'bgmSource')
  request.r(i1587[2], i1587[3], 0, i1586, 'sfxSource')
  var i1589 = i1587[4]
  var i1588 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.add(request.d('AudioEntry', i1589[i + 0]));
  }
  i1586.audioEntries = i1588
  return i1586
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i1592 = root || request.c( 'AudioEntry' )
  var i1593 = data
  i1592.key = i1593[0]
  request.r(i1593[1], i1593[2], 0, i1592, 'clip')
  i1592.volume = i1593[3]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1595 = data
  i1594.ambientIntensity = i1595[0]
  i1594.reflectionIntensity = i1595[1]
  i1594.ambientMode = i1595[2]
  i1594.ambientLight = new pc.Color(i1595[3], i1595[4], i1595[5], i1595[6])
  i1594.ambientSkyColor = new pc.Color(i1595[7], i1595[8], i1595[9], i1595[10])
  i1594.ambientGroundColor = new pc.Color(i1595[11], i1595[12], i1595[13], i1595[14])
  i1594.ambientEquatorColor = new pc.Color(i1595[15], i1595[16], i1595[17], i1595[18])
  i1594.fogColor = new pc.Color(i1595[19], i1595[20], i1595[21], i1595[22])
  i1594.fogEndDistance = i1595[23]
  i1594.fogStartDistance = i1595[24]
  i1594.fogDensity = i1595[25]
  i1594.fog = !!i1595[26]
  request.r(i1595[27], i1595[28], 0, i1594, 'skybox')
  i1594.fogMode = i1595[29]
  var i1597 = i1595[30]
  var i1596 = []
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1597[i + 0]) );
  }
  i1594.lightmaps = i1596
  i1594.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1595[31], i1594.lightProbes)
  i1594.lightmapsMode = i1595[32]
  i1594.mixedBakeMode = i1595[33]
  i1594.environmentLightingMode = i1595[34]
  i1594.ambientProbe = new pc.SphericalHarmonicsL2(i1595[35])
  i1594.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1595[36])
  i1594.useReferenceAmbientProbe = !!i1595[37]
  request.r(i1595[38], i1595[39], 0, i1594, 'customReflection')
  request.r(i1595[40], i1595[41], 0, i1594, 'defaultReflection')
  i1594.defaultReflectionMode = i1595[42]
  i1594.defaultReflectionResolution = i1595[43]
  i1594.sunLightObjectId = i1595[44]
  i1594.pixelLightCount = i1595[45]
  i1594.defaultReflectionHDR = !!i1595[46]
  i1594.hasLightDataAsset = !!i1595[47]
  i1594.hasManualGenerate = !!i1595[48]
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1601 = data
  request.r(i1601[0], i1601[1], 0, i1600, 'lightmapColor')
  request.r(i1601[2], i1601[3], 0, i1600, 'lightmapDirection')
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1602 = root || new UnityEngine.LightProbes()
  var i1603 = data
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1611 = data
  var i1613 = i1611[0]
  var i1612 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1613[i + 0]));
  }
  i1610.ShaderCompilationErrors = i1612
  i1610.name = i1611[1]
  i1610.guid = i1611[2]
  var i1615 = i1611[3]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.push( i1615[i + 0] );
  }
  i1610.shaderDefinedKeywords = i1614
  var i1617 = i1611[4]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 1) {
    i1616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1617[i + 0]) );
  }
  i1610.passes = i1616
  var i1619 = i1611[5]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 1) {
    i1618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1619[i + 0]) );
  }
  i1610.usePasses = i1618
  var i1621 = i1611[6]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1621[i + 0]) );
  }
  i1610.defaultParameterValues = i1620
  request.r(i1611[7], i1611[8], 0, i1610, 'unityFallbackShader')
  i1610.readDepth = !!i1611[9]
  i1610.isCreatedByShaderGraph = !!i1611[10]
  i1610.disableBatching = !!i1611[11]
  i1610.compiled = !!i1611[12]
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1625 = data
  i1624.shaderName = i1625[0]
  i1624.errorMessage = i1625[1]
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1628 = root || new pc.UnityShaderPass()
  var i1629 = data
  i1628.id = i1629[0]
  i1628.subShaderIndex = i1629[1]
  i1628.name = i1629[2]
  i1628.passType = i1629[3]
  i1628.grabPassTextureName = i1629[4]
  i1628.usePass = !!i1629[5]
  i1628.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1629[6], i1628.zTest)
  i1628.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1629[7], i1628.zWrite)
  i1628.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1629[8], i1628.culling)
  i1628.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1629[9], i1628.blending)
  i1628.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1629[10], i1628.alphaBlending)
  i1628.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1629[11], i1628.colorWriteMask)
  i1628.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1629[12], i1628.offsetUnits)
  i1628.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1629[13], i1628.offsetFactor)
  i1628.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1629[14], i1628.stencilRef)
  i1628.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1629[15], i1628.stencilReadMask)
  i1628.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1629[16], i1628.stencilWriteMask)
  i1628.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1629[17], i1628.stencilOp)
  i1628.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1629[18], i1628.stencilOpFront)
  i1628.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1629[19], i1628.stencilOpBack)
  var i1631 = i1629[20]
  var i1630 = []
  for(var i = 0; i < i1631.length; i += 1) {
    i1630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1631[i + 0]) );
  }
  i1628.tags = i1630
  var i1633 = i1629[21]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 1) {
    i1632.push( i1633[i + 0] );
  }
  i1628.passDefinedKeywords = i1632
  var i1635 = i1629[22]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 1) {
    i1634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1635[i + 0]) );
  }
  i1628.passDefinedKeywordGroups = i1634
  var i1637 = i1629[23]
  var i1636 = []
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1637[i + 0]) );
  }
  i1628.variants = i1636
  var i1639 = i1629[24]
  var i1638 = []
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1639[i + 0]) );
  }
  i1628.excludedVariants = i1638
  i1628.hasDepthReader = !!i1629[25]
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1641 = data
  i1640.val = i1641[0]
  i1640.name = i1641[1]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1643 = data
  i1642.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1643[0], i1642.src)
  i1642.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1643[1], i1642.dst)
  i1642.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1643[2], i1642.op)
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1645 = data
  i1644.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1645[0], i1644.pass)
  i1644.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1645[1], i1644.fail)
  i1644.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1645[2], i1644.zFail)
  i1644.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1645[3], i1644.comp)
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1649 = data
  i1648.name = i1649[0]
  i1648.value = i1649[1]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1653 = data
  var i1655 = i1653[0]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.push( i1655[i + 0] );
  }
  i1652.keywords = i1654
  i1652.hasDiscard = !!i1653[1]
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1659 = data
  i1658.passId = i1659[0]
  i1658.subShaderIndex = i1659[1]
  var i1661 = i1659[2]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.push( i1661[i + 0] );
  }
  i1658.keywords = i1660
  i1658.vertexProgram = i1659[3]
  i1658.fragmentProgram = i1659[4]
  i1658.exportedForWebGl2 = !!i1659[5]
  i1658.readDepth = !!i1659[6]
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1665 = data
  request.r(i1665[0], i1665[1], 0, i1664, 'shader')
  i1664.pass = i1665[2]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1669 = data
  i1668.name = i1669[0]
  i1668.type = i1669[1]
  i1668.value = new pc.Vec4( i1669[2], i1669[3], i1669[4], i1669[5] )
  i1668.textureValue = i1669[6]
  i1668.shaderPropertyFlag = i1669[7]
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1671 = data
  i1670.name = i1671[0]
  request.r(i1671[1], i1671[2], 0, i1670, 'texture')
  i1670.aabb = i1671[3]
  i1670.vertices = i1671[4]
  i1670.triangles = i1671[5]
  i1670.textureRect = UnityEngine.Rect.MinMaxRect(i1671[6], i1671[7], i1671[8], i1671[9])
  i1670.packedRect = UnityEngine.Rect.MinMaxRect(i1671[10], i1671[11], i1671[12], i1671[13])
  i1670.border = new pc.Vec4( i1671[14], i1671[15], i1671[16], i1671[17] )
  i1670.transparency = i1671[18]
  i1670.bounds = i1671[19]
  i1670.pixelsPerUnit = i1671[20]
  i1670.textureWidth = i1671[21]
  i1670.textureHeight = i1671[22]
  i1670.nativeSize = new pc.Vec2( i1671[23], i1671[24] )
  i1670.pivot = new pc.Vec2( i1671[25], i1671[26] )
  i1670.textureRectOffset = new pc.Vec2( i1671[27], i1671[28] )
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1673 = data
  i1672.name = i1673[0]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1675 = data
  i1674.name = i1675[0]
  i1674.ascent = i1675[1]
  i1674.originalLineHeight = i1675[2]
  i1674.fontSize = i1675[3]
  var i1677 = i1675[4]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1677[i + 0]) );
  }
  i1674.characterInfo = i1676
  request.r(i1675[5], i1675[6], 0, i1674, 'texture')
  i1674.originalFontSize = i1675[7]
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1681 = data
  i1680.index = i1681[0]
  i1680.advance = i1681[1]
  i1680.bearing = i1681[2]
  i1680.glyphWidth = i1681[3]
  i1680.glyphHeight = i1681[4]
  i1680.minX = i1681[5]
  i1680.maxX = i1681[6]
  i1680.minY = i1681[7]
  i1680.maxY = i1681[8]
  i1680.uvBottomLeftX = i1681[9]
  i1680.uvBottomLeftY = i1681[10]
  i1680.uvBottomRightX = i1681[11]
  i1680.uvBottomRightY = i1681[12]
  i1680.uvTopLeftX = i1681[13]
  i1680.uvTopLeftY = i1681[14]
  i1680.uvTopRightX = i1681[15]
  i1680.uvTopRightY = i1681[16]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1683 = data
  i1682.name = i1683[0]
  i1682.bytes64 = i1683[1]
  i1682.data = i1683[2]
  return i1682
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1684 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1685 = data
  var i1687 = i1685[0]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 2) {
  request.r(i1687[i + 0], i1687[i + 1], 2, i1686, '')
  }
  i1684.atlasAssets = i1686
  i1684.scale = i1685[1]
  request.r(i1685[2], i1685[3], 0, i1684, 'skeletonJSON')
  i1684.isUpgradingBlendModeMaterials = !!i1685[4]
  i1684.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1685[5], i1684.blendModeMaterials)
  var i1689 = i1685[6]
  var i1688 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1689.length; i += 2) {
  request.r(i1689[i + 0], i1689[i + 1], 1, i1688, '')
  }
  i1684.skeletonDataModifiers = i1688
  var i1691 = i1685[7]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( i1691[i + 0] );
  }
  i1684.fromAnimation = i1690
  var i1693 = i1685[8]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( i1693[i + 0] );
  }
  i1684.toAnimation = i1692
  i1684.duration = i1685[9]
  i1684.defaultMix = i1685[10]
  request.r(i1685[11], i1685[12], 0, i1684, 'controller')
  return i1684
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1696 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1697 = data
  i1696.applyAdditiveMaterial = !!i1697[0]
  var i1699 = i1697[1]
  var i1698 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1699[i + 0]));
  }
  i1696.additiveMaterials = i1698
  var i1701 = i1697[2]
  var i1700 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1701[i + 0]));
  }
  i1696.multiplyMaterials = i1700
  var i1703 = i1697[3]
  var i1702 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1703[i + 0]));
  }
  i1696.screenMaterials = i1702
  i1696.requiresBlendModeMaterials = !!i1697[4]
  return i1696
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1706 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1707 = data
  i1706.pageName = i1707[0]
  request.r(i1707[1], i1707[2], 0, i1706, 'material')
  return i1706
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1710 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1711 = data
  request.r(i1711[0], i1711[1], 0, i1710, 'atlasFile')
  var i1713 = i1711[2]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 2) {
  request.r(i1713[i + 0], i1713[i + 1], 2, i1712, '')
  }
  i1710.materials = i1712
  i1710.textureLoadingMode = i1711[3]
  request.r(i1711[4], i1711[5], 0, i1710, 'onDemandTextureLoader')
  return i1710
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1714 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1715 = data
  request.r(i1715[0], i1715[1], 0, i1714, 'atlas')
  i1714.normalStyle = i1715[2]
  i1714.normalSpacingOffset = i1715[3]
  i1714.boldStyle = i1715[4]
  i1714.boldSpacing = i1715[5]
  i1714.italicStyle = i1715[6]
  i1714.tabSize = i1715[7]
  i1714.hashCode = i1715[8]
  request.r(i1715[9], i1715[10], 0, i1714, 'material')
  i1714.materialHashCode = i1715[11]
  i1714.m_Version = i1715[12]
  i1714.m_SourceFontFileGUID = i1715[13]
  request.r(i1715[14], i1715[15], 0, i1714, 'm_SourceFontFile_EditorRef')
  request.r(i1715[16], i1715[17], 0, i1714, 'm_SourceFontFile')
  i1714.m_AtlasPopulationMode = i1715[18]
  i1714.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1715[19], i1714.m_FaceInfo)
  var i1717 = i1715[20]
  var i1716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.add(request.d('UnityEngine.TextCore.Glyph', i1717[i + 0]));
  }
  i1714.m_GlyphTable = i1716
  var i1719 = i1715[21]
  var i1718 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.add(request.d('TMPro.TMP_Character', i1719[i + 0]));
  }
  i1714.m_CharacterTable = i1718
  var i1721 = i1715[22]
  var i1720 = []
  for(var i = 0; i < i1721.length; i += 2) {
  request.r(i1721[i + 0], i1721[i + 1], 2, i1720, '')
  }
  i1714.m_AtlasTextures = i1720
  i1714.m_AtlasTextureIndex = i1715[23]
  i1714.m_IsMultiAtlasTexturesEnabled = !!i1715[24]
  i1714.m_ClearDynamicDataOnBuild = !!i1715[25]
  var i1723 = i1715[26]
  var i1722 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.add(request.d('UnityEngine.TextCore.GlyphRect', i1723[i + 0]));
  }
  i1714.m_UsedGlyphRects = i1722
  var i1725 = i1715[27]
  var i1724 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.add(request.d('UnityEngine.TextCore.GlyphRect', i1725[i + 0]));
  }
  i1714.m_FreeGlyphRects = i1724
  i1714.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1715[28], i1714.m_fontInfo)
  i1714.m_AtlasWidth = i1715[29]
  i1714.m_AtlasHeight = i1715[30]
  i1714.m_AtlasPadding = i1715[31]
  i1714.m_AtlasRenderMode = i1715[32]
  var i1727 = i1715[33]
  var i1726 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.add(request.d('TMPro.TMP_Glyph', i1727[i + 0]));
  }
  i1714.m_glyphInfoList = i1726
  i1714.m_KerningTable = request.d('TMPro.KerningTable', i1715[34], i1714.m_KerningTable)
  i1714.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1715[35], i1714.m_FontFeatureTable)
  var i1729 = i1715[36]
  var i1728 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1729.length; i += 2) {
  request.r(i1729[i + 0], i1729[i + 1], 1, i1728, '')
  }
  i1714.fallbackFontAssets = i1728
  var i1731 = i1715[37]
  var i1730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1731.length; i += 2) {
  request.r(i1731[i + 0], i1731[i + 1], 1, i1730, '')
  }
  i1714.m_FallbackFontAssetTable = i1730
  i1714.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1715[38], i1714.m_CreationSettings)
  var i1733 = i1715[39]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('TMPro.TMP_FontWeightPair', i1733[i + 0]) );
  }
  i1714.m_FontWeightTable = i1732
  var i1735 = i1715[40]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 1) {
    i1734.push( request.d('TMPro.TMP_FontWeightPair', i1735[i + 0]) );
  }
  i1714.fontWeights = i1734
  return i1714
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1736 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1737 = data
  i1736.m_FaceIndex = i1737[0]
  i1736.m_FamilyName = i1737[1]
  i1736.m_StyleName = i1737[2]
  i1736.m_PointSize = i1737[3]
  i1736.m_Scale = i1737[4]
  i1736.m_UnitsPerEM = i1737[5]
  i1736.m_LineHeight = i1737[6]
  i1736.m_AscentLine = i1737[7]
  i1736.m_CapLine = i1737[8]
  i1736.m_MeanLine = i1737[9]
  i1736.m_Baseline = i1737[10]
  i1736.m_DescentLine = i1737[11]
  i1736.m_SuperscriptOffset = i1737[12]
  i1736.m_SuperscriptSize = i1737[13]
  i1736.m_SubscriptOffset = i1737[14]
  i1736.m_SubscriptSize = i1737[15]
  i1736.m_UnderlineOffset = i1737[16]
  i1736.m_UnderlineThickness = i1737[17]
  i1736.m_StrikethroughOffset = i1737[18]
  i1736.m_StrikethroughThickness = i1737[19]
  i1736.m_TabWidth = i1737[20]
  return i1736
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1740 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1741 = data
  i1740.m_Index = i1741[0]
  i1740.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1741[1], i1740.m_Metrics)
  i1740.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1741[2], i1740.m_GlyphRect)
  i1740.m_Scale = i1741[3]
  i1740.m_AtlasIndex = i1741[4]
  i1740.m_ClassDefinitionType = i1741[5]
  return i1740
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1742 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1743 = data
  i1742.m_Width = i1743[0]
  i1742.m_Height = i1743[1]
  i1742.m_HorizontalBearingX = i1743[2]
  i1742.m_HorizontalBearingY = i1743[3]
  i1742.m_HorizontalAdvance = i1743[4]
  return i1742
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1744 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1745 = data
  i1744.m_X = i1745[0]
  i1744.m_Y = i1745[1]
  i1744.m_Width = i1745[2]
  i1744.m_Height = i1745[3]
  return i1744
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1748 = root || request.c( 'TMPro.TMP_Character' )
  var i1749 = data
  i1748.m_ElementType = i1749[0]
  i1748.m_Unicode = i1749[1]
  i1748.m_GlyphIndex = i1749[2]
  i1748.m_Scale = i1749[3]
  return i1748
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1754 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1755 = data
  i1754.Name = i1755[0]
  i1754.PointSize = i1755[1]
  i1754.Scale = i1755[2]
  i1754.CharacterCount = i1755[3]
  i1754.LineHeight = i1755[4]
  i1754.Baseline = i1755[5]
  i1754.Ascender = i1755[6]
  i1754.CapHeight = i1755[7]
  i1754.Descender = i1755[8]
  i1754.CenterLine = i1755[9]
  i1754.SuperscriptOffset = i1755[10]
  i1754.SubscriptOffset = i1755[11]
  i1754.SubSize = i1755[12]
  i1754.Underline = i1755[13]
  i1754.UnderlineThickness = i1755[14]
  i1754.strikethrough = i1755[15]
  i1754.strikethroughThickness = i1755[16]
  i1754.TabWidth = i1755[17]
  i1754.Padding = i1755[18]
  i1754.AtlasWidth = i1755[19]
  i1754.AtlasHeight = i1755[20]
  return i1754
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1758 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1759 = data
  i1758.id = i1759[0]
  i1758.x = i1759[1]
  i1758.y = i1759[2]
  i1758.width = i1759[3]
  i1758.height = i1759[4]
  i1758.xOffset = i1759[5]
  i1758.yOffset = i1759[6]
  i1758.xAdvance = i1759[7]
  i1758.scale = i1759[8]
  return i1758
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1760 = root || request.c( 'TMPro.KerningTable' )
  var i1761 = data
  var i1763 = i1761[0]
  var i1762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.add(request.d('TMPro.KerningPair', i1763[i + 0]));
  }
  i1760.kerningPairs = i1762
  return i1760
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1766 = root || request.c( 'TMPro.KerningPair' )
  var i1767 = data
  i1766.xOffset = i1767[0]
  i1766.m_FirstGlyph = i1767[1]
  i1766.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1767[2], i1766.m_FirstGlyphAdjustments)
  i1766.m_SecondGlyph = i1767[3]
  i1766.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1767[4], i1766.m_SecondGlyphAdjustments)
  i1766.m_IgnoreSpacingAdjustments = !!i1767[5]
  return i1766
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1768 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1769 = data
  var i1771 = i1769[0]
  var i1770 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1771[i + 0]));
  }
  i1768.m_GlyphPairAdjustmentRecords = i1770
  return i1768
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1774 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1775 = data
  i1774.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1775[0], i1774.m_FirstAdjustmentRecord)
  i1774.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1775[1], i1774.m_SecondAdjustmentRecord)
  i1774.m_FeatureLookupFlags = i1775[2]
  return i1774
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1778 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1779 = data
  i1778.sourceFontFileName = i1779[0]
  i1778.sourceFontFileGUID = i1779[1]
  i1778.pointSizeSamplingMode = i1779[2]
  i1778.pointSize = i1779[3]
  i1778.padding = i1779[4]
  i1778.packingMode = i1779[5]
  i1778.atlasWidth = i1779[6]
  i1778.atlasHeight = i1779[7]
  i1778.characterSetSelectionMode = i1779[8]
  i1778.characterSequence = i1779[9]
  i1778.referencedFontAssetGUID = i1779[10]
  i1778.referencedTextAssetGUID = i1779[11]
  i1778.fontStyle = i1779[12]
  i1778.fontStyleModifier = i1779[13]
  i1778.renderMode = i1779[14]
  i1778.includeFontFeatures = !!i1779[15]
  return i1778
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1782 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1783 = data
  request.r(i1783[0], i1783[1], 0, i1782, 'regularTypeface')
  request.r(i1783[2], i1783[3], 0, i1782, 'italicTypeface')
  return i1782
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1784 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1785 = data
  i1784.useSafeMode = !!i1785[0]
  i1784.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1785[1], i1784.safeModeOptions)
  i1784.timeScale = i1785[2]
  i1784.unscaledTimeScale = i1785[3]
  i1784.useSmoothDeltaTime = !!i1785[4]
  i1784.maxSmoothUnscaledTime = i1785[5]
  i1784.rewindCallbackMode = i1785[6]
  i1784.showUnityEditorReport = !!i1785[7]
  i1784.logBehaviour = i1785[8]
  i1784.drawGizmos = !!i1785[9]
  i1784.defaultRecyclable = !!i1785[10]
  i1784.defaultAutoPlay = i1785[11]
  i1784.defaultUpdateType = i1785[12]
  i1784.defaultTimeScaleIndependent = !!i1785[13]
  i1784.defaultEaseType = i1785[14]
  i1784.defaultEaseOvershootOrAmplitude = i1785[15]
  i1784.defaultEasePeriod = i1785[16]
  i1784.defaultAutoKill = !!i1785[17]
  i1784.defaultLoopType = i1785[18]
  i1784.debugMode = !!i1785[19]
  i1784.debugStoreTargetId = !!i1785[20]
  i1784.showPreviewPanel = !!i1785[21]
  i1784.storeSettingsLocation = i1785[22]
  i1784.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1785[23], i1784.modules)
  i1784.createASMDEF = !!i1785[24]
  i1784.showPlayingTweens = !!i1785[25]
  i1784.showPausedTweens = !!i1785[26]
  return i1784
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1786 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1787 = data
  i1786.logBehaviour = i1787[0]
  i1786.nestedTweenFailureBehaviour = i1787[1]
  return i1786
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1788 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1789 = data
  i1788.showPanel = !!i1789[0]
  i1788.audioEnabled = !!i1789[1]
  i1788.physicsEnabled = !!i1789[2]
  i1788.physics2DEnabled = !!i1789[3]
  i1788.spriteEnabled = !!i1789[4]
  i1788.uiEnabled = !!i1789[5]
  i1788.textMeshProEnabled = !!i1789[6]
  i1788.tk2DEnabled = !!i1789[7]
  i1788.deAudioEnabled = !!i1789[8]
  i1788.deUnityExtendedEnabled = !!i1789[9]
  i1788.epoOutlineEnabled = !!i1789[10]
  return i1788
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1790 = root || request.c( 'TMPro.TMP_Settings' )
  var i1791 = data
  i1790.m_enableWordWrapping = !!i1791[0]
  i1790.m_enableKerning = !!i1791[1]
  i1790.m_enableExtraPadding = !!i1791[2]
  i1790.m_enableTintAllSprites = !!i1791[3]
  i1790.m_enableParseEscapeCharacters = !!i1791[4]
  i1790.m_EnableRaycastTarget = !!i1791[5]
  i1790.m_GetFontFeaturesAtRuntime = !!i1791[6]
  i1790.m_missingGlyphCharacter = i1791[7]
  i1790.m_warningsDisabled = !!i1791[8]
  request.r(i1791[9], i1791[10], 0, i1790, 'm_defaultFontAsset')
  i1790.m_defaultFontAssetPath = i1791[11]
  i1790.m_defaultFontSize = i1791[12]
  i1790.m_defaultAutoSizeMinRatio = i1791[13]
  i1790.m_defaultAutoSizeMaxRatio = i1791[14]
  i1790.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1791[15], i1791[16] )
  i1790.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1791[17], i1791[18] )
  i1790.m_autoSizeTextContainer = !!i1791[19]
  i1790.m_IsTextObjectScaleStatic = !!i1791[20]
  var i1793 = i1791[21]
  var i1792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1793.length; i += 2) {
  request.r(i1793[i + 0], i1793[i + 1], 1, i1792, '')
  }
  i1790.m_fallbackFontAssets = i1792
  i1790.m_matchMaterialPreset = !!i1791[22]
  request.r(i1791[23], i1791[24], 0, i1790, 'm_defaultSpriteAsset')
  i1790.m_defaultSpriteAssetPath = i1791[25]
  i1790.m_enableEmojiSupport = !!i1791[26]
  i1790.m_MissingCharacterSpriteUnicode = i1791[27]
  i1790.m_defaultColorGradientPresetsPath = i1791[28]
  request.r(i1791[29], i1791[30], 0, i1790, 'm_defaultStyleSheet')
  i1790.m_StyleSheetsResourcePath = i1791[31]
  request.r(i1791[32], i1791[33], 0, i1790, 'm_leadingCharacters')
  request.r(i1791[34], i1791[35], 0, i1790, 'm_followingCharacters')
  i1790.m_UseModernHangulLineBreakingRules = !!i1791[36]
  return i1790
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1794 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1795 = data
  request.r(i1795[0], i1795[1], 0, i1794, 'spriteSheet')
  var i1797 = i1795[2]
  var i1796 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.add(request.d('TMPro.TMP_Sprite', i1797[i + 0]));
  }
  i1794.spriteInfoList = i1796
  var i1799 = i1795[3]
  var i1798 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1799.length; i += 2) {
  request.r(i1799[i + 0], i1799[i + 1], 1, i1798, '')
  }
  i1794.fallbackSpriteAssets = i1798
  i1794.hashCode = i1795[4]
  request.r(i1795[5], i1795[6], 0, i1794, 'material')
  i1794.materialHashCode = i1795[7]
  i1794.m_Version = i1795[8]
  i1794.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1795[9], i1794.m_FaceInfo)
  var i1801 = i1795[10]
  var i1800 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.add(request.d('TMPro.TMP_SpriteCharacter', i1801[i + 0]));
  }
  i1794.m_SpriteCharacterTable = i1800
  var i1803 = i1795[11]
  var i1802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1803.length; i += 1) {
    i1802.add(request.d('TMPro.TMP_SpriteGlyph', i1803[i + 0]));
  }
  i1794.m_SpriteGlyphTable = i1802
  return i1794
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1806 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1807 = data
  i1806.name = i1807[0]
  i1806.hashCode = i1807[1]
  i1806.unicode = i1807[2]
  i1806.pivot = new pc.Vec2( i1807[3], i1807[4] )
  request.r(i1807[5], i1807[6], 0, i1806, 'sprite')
  i1806.id = i1807[7]
  i1806.x = i1807[8]
  i1806.y = i1807[9]
  i1806.width = i1807[10]
  i1806.height = i1807[11]
  i1806.xOffset = i1807[12]
  i1806.yOffset = i1807[13]
  i1806.xAdvance = i1807[14]
  i1806.scale = i1807[15]
  return i1806
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1812 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1813 = data
  i1812.m_Name = i1813[0]
  i1812.m_HashCode = i1813[1]
  i1812.m_ElementType = i1813[2]
  i1812.m_Unicode = i1813[3]
  i1812.m_GlyphIndex = i1813[4]
  i1812.m_Scale = i1813[5]
  return i1812
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1816 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1817 = data
  request.r(i1817[0], i1817[1], 0, i1816, 'sprite')
  i1816.m_Index = i1817[2]
  i1816.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1817[3], i1816.m_Metrics)
  i1816.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1817[4], i1816.m_GlyphRect)
  i1816.m_Scale = i1817[5]
  i1816.m_AtlasIndex = i1817[6]
  i1816.m_ClassDefinitionType = i1817[7]
  return i1816
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1818 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1819 = data
  var i1821 = i1819[0]
  var i1820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.add(request.d('TMPro.TMP_Style', i1821[i + 0]));
  }
  i1818.m_StyleList = i1820
  return i1818
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1824 = root || request.c( 'TMPro.TMP_Style' )
  var i1825 = data
  i1824.m_Name = i1825[0]
  i1824.m_HashCode = i1825[1]
  i1824.m_OpeningDefinition = i1825[2]
  i1824.m_ClosingDefinition = i1825[3]
  i1824.m_OpeningTagArray = i1825[4]
  i1824.m_ClosingTagArray = i1825[5]
  i1824.m_OpeningTagUnicodeArray = i1825[6]
  i1824.m_ClosingTagUnicodeArray = i1825[7]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1827 = data
  var i1829 = i1827[0]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1829[i + 0]) );
  }
  i1826.files = i1828
  i1826.componentToPrefabIds = i1827[1]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1833 = data
  i1832.path = i1833[0]
  request.r(i1833[1], i1833[2], 0, i1832, 'unityObject')
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1835 = data
  var i1837 = i1835[0]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1837[i + 0]) );
  }
  i1834.scriptsExecutionOrder = i1836
  var i1839 = i1835[1]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1839[i + 0]) );
  }
  i1834.sortingLayers = i1838
  var i1841 = i1835[2]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1841[i + 0]) );
  }
  i1834.cullingLayers = i1840
  i1834.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1835[3], i1834.timeSettings)
  i1834.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1835[4], i1834.physicsSettings)
  i1834.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1835[5], i1834.physics2DSettings)
  i1834.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1835[6], i1834.qualitySettings)
  i1834.enableRealtimeShadows = !!i1835[7]
  i1834.enableAutoInstancing = !!i1835[8]
  i1834.enableStaticBatching = !!i1835[9]
  i1834.enableDynamicBatching = !!i1835[10]
  i1834.lightmapEncodingQuality = i1835[11]
  i1834.desiredColorSpace = i1835[12]
  var i1843 = i1835[13]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 1) {
    i1842.push( i1843[i + 0] );
  }
  i1834.allTags = i1842
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1847 = data
  i1846.name = i1847[0]
  i1846.value = i1847[1]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1851 = data
  i1850.id = i1851[0]
  i1850.name = i1851[1]
  i1850.value = i1851[2]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1855 = data
  i1854.id = i1855[0]
  i1854.name = i1855[1]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1857 = data
  i1856.fixedDeltaTime = i1857[0]
  i1856.maximumDeltaTime = i1857[1]
  i1856.timeScale = i1857[2]
  i1856.maximumParticleTimestep = i1857[3]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1859 = data
  i1858.gravity = new pc.Vec3( i1859[0], i1859[1], i1859[2] )
  i1858.defaultSolverIterations = i1859[3]
  i1858.bounceThreshold = i1859[4]
  i1858.autoSyncTransforms = !!i1859[5]
  i1858.autoSimulation = !!i1859[6]
  var i1861 = i1859[7]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1861[i + 0]) );
  }
  i1858.collisionMatrix = i1860
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1865 = data
  i1864.enabled = !!i1865[0]
  i1864.layerId = i1865[1]
  i1864.otherLayerId = i1865[2]
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1867 = data
  request.r(i1867[0], i1867[1], 0, i1866, 'material')
  i1866.gravity = new pc.Vec2( i1867[2], i1867[3] )
  i1866.positionIterations = i1867[4]
  i1866.velocityIterations = i1867[5]
  i1866.velocityThreshold = i1867[6]
  i1866.maxLinearCorrection = i1867[7]
  i1866.maxAngularCorrection = i1867[8]
  i1866.maxTranslationSpeed = i1867[9]
  i1866.maxRotationSpeed = i1867[10]
  i1866.baumgarteScale = i1867[11]
  i1866.baumgarteTOIScale = i1867[12]
  i1866.timeToSleep = i1867[13]
  i1866.linearSleepTolerance = i1867[14]
  i1866.angularSleepTolerance = i1867[15]
  i1866.defaultContactOffset = i1867[16]
  i1866.autoSimulation = !!i1867[17]
  i1866.queriesHitTriggers = !!i1867[18]
  i1866.queriesStartInColliders = !!i1867[19]
  i1866.callbacksOnDisable = !!i1867[20]
  i1866.reuseCollisionCallbacks = !!i1867[21]
  i1866.autoSyncTransforms = !!i1867[22]
  var i1869 = i1867[23]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1869[i + 0]) );
  }
  i1866.collisionMatrix = i1868
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1873 = data
  i1872.enabled = !!i1873[0]
  i1872.layerId = i1873[1]
  i1872.otherLayerId = i1873[2]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1875 = data
  var i1877 = i1875[0]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1877[i + 0]) );
  }
  i1874.qualityLevels = i1876
  var i1879 = i1875[1]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( i1879[i + 0] );
  }
  i1874.names = i1878
  i1874.shadows = i1875[2]
  i1874.anisotropicFiltering = i1875[3]
  i1874.antiAliasing = i1875[4]
  i1874.lodBias = i1875[5]
  i1874.shadowCascades = i1875[6]
  i1874.shadowDistance = i1875[7]
  i1874.shadowmaskMode = i1875[8]
  i1874.shadowProjection = i1875[9]
  i1874.shadowResolution = i1875[10]
  i1874.softParticles = !!i1875[11]
  i1874.softVegetation = !!i1875[12]
  i1874.activeColorSpace = i1875[13]
  i1874.desiredColorSpace = i1875[14]
  i1874.masterTextureLimit = i1875[15]
  i1874.maxQueuedFrames = i1875[16]
  i1874.particleRaycastBudget = i1875[17]
  i1874.pixelLightCount = i1875[18]
  i1874.realtimeReflectionProbes = !!i1875[19]
  i1874.shadowCascade2Split = i1875[20]
  i1874.shadowCascade4Split = new pc.Vec3( i1875[21], i1875[22], i1875[23] )
  i1874.streamingMipmapsActive = !!i1875[24]
  i1874.vSyncCount = i1875[25]
  i1874.asyncUploadBufferSize = i1875[26]
  i1874.asyncUploadTimeSlice = i1875[27]
  i1874.billboardsFaceCameraPosition = !!i1875[28]
  i1874.shadowNearPlaneOffset = i1875[29]
  i1874.streamingMipmapsMemoryBudget = i1875[30]
  i1874.maximumLODLevel = i1875[31]
  i1874.streamingMipmapsAddAllCameras = !!i1875[32]
  i1874.streamingMipmapsMaxLevelReduction = i1875[33]
  i1874.streamingMipmapsRenderersPerFrame = i1875[34]
  i1874.resolutionScalingFixedDPIFactor = i1875[35]
  i1874.streamingMipmapsMaxFileIORequests = i1875[36]
  i1874.currentQualityLevel = i1875[37]
  return i1874
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1882 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1883 = data
  i1882.xPlacement = i1883[0]
  i1882.yPlacement = i1883[1]
  i1882.xAdvance = i1883[2]
  i1882.yAdvance = i1883[3]
  return i1882
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1884 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1885 = data
  i1884.m_GlyphIndex = i1885[0]
  i1884.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1885[1], i1884.m_GlyphValueRecord)
  return i1884
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1886 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1887 = data
  i1886.m_XPlacement = i1887[0]
  i1886.m_YPlacement = i1887[1]
  i1886.m_XAdvance = i1887[2]
  i1886.m_YAdvance = i1887[3]
  return i1886
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[11],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[52],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[11],"74":[75],"76":[77],"78":[77],"15":[2],"79":[80],"81":[82],"83":[80],"84":[2],"85":[2],"17":[15],"5":[3,2],"86":[2],"16":[15],"87":[2],"88":[2],"89":[2],"90":[2],"91":[2],"92":[2],"93":[2],"32":[2],"94":[2],"18":[3,2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[3,2],"100":[2],"101":[13],"102":[13],"14":[13],"103":[13],"104":[11],"105":[11],"106":[107],"108":[11],"109":[110],"111":[2],"112":[3,2],"113":[75],"25":[3,2],"114":[115,75],"116":[75],"117":[75,118],"119":[52],"120":[60],"121":[110],"122":[123],"124":[2],"125":[75,2],"7":[2,3],"126":[2],"127":[3,2],"128":[75],"129":[3,2],"130":[2],"131":[80]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.RawImage","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.MonoBehaviour","DropZone","UnityEngine.GameObject","UnityEngine.PolygonCollider2D","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.CanvasGroup","DraggableItem","DG.Tweening.DOTweenAnimation","LunaManager","UnityEngine.UI.Button","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "163.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BM_V08_ManhND_AnhPD";

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

Deserializers.buildID = "7bba278e-e7c0-4026-9171-06ea534b0a09";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

