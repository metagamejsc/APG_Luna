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

Deserializers["LunaManager"] = function (request, data, root) {
  var i1550 = root || request.c( 'LunaManager' )
  var i1551 = data
  var i1553 = i1551[0]
  var i1552 = []
  for(var i = 0; i < i1553.length; i += 2) {
  request.r(i1553[i + 0], i1553[i + 1], 2, i1552, '')
  }
  i1550.lstBtnInstall = i1552
  request.r(i1551[1], i1551[2], 0, i1550, 'StartCard')
  request.r(i1551[3], i1551[4], 0, i1550, 'EndCard')
  request.r(i1551[5], i1551[6], 0, i1550, 'Parent')
  request.r(i1551[7], i1551[8], 0, i1550, 'LoseTitle')
  var i1555 = i1551[9]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 2) {
  request.r(i1555[i + 0], i1555[i + 1], 2, i1554, '')
  }
  i1550.tutorial = i1554
  i1550.timeDrag = i1551[10]
  i1550.isDrag = !!i1551[11]
  i1550.countPlay = i1551[12]
  i1550.countPlayFinal = i1551[13]
  i1550.countPlayMax = i1551[14]
  i1550.timeDropFinal = i1551[15]
  i1550.colorBG = new pc.Color(i1551[16], i1551[17], i1551[18], i1551[19])
  request.r(i1551[20], i1551[21], 0, i1550, 'texture2D')
  request.r(i1551[22], i1551[23], 0, i1550, 'rawImageBG')
  request.r(i1551[24], i1551[25], 0, i1550, 'textProgess')
  request.r(i1551[26], i1551[27], 0, i1550, 'imgProgess')
  request.r(i1551[28], i1551[29], 0, i1550, 'timeText')
  return i1550
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1558 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1559 = data
  i1558.targetIsSelf = !!i1559[0]
  request.r(i1559[1], i1559[2], 0, i1558, 'targetGO')
  i1558.tweenTargetIsTargetGO = !!i1559[3]
  i1558.delay = i1559[4]
  i1558.duration = i1559[5]
  i1558.easeType = i1559[6]
  i1558.easeCurve = new pc.AnimationCurve( { keys_flow: i1559[7] } )
  i1558.loopType = i1559[8]
  i1558.loops = i1559[9]
  i1558.id = i1559[10]
  i1558.isRelative = !!i1559[11]
  i1558.isFrom = !!i1559[12]
  i1558.isIndependentUpdate = !!i1559[13]
  i1558.autoKill = !!i1559[14]
  i1558.autoGenerate = !!i1559[15]
  i1558.isActive = !!i1559[16]
  i1558.isValid = !!i1559[17]
  request.r(i1559[18], i1559[19], 0, i1558, 'target')
  i1558.animationType = i1559[20]
  i1558.targetType = i1559[21]
  i1558.forcedTargetType = i1559[22]
  i1558.autoPlay = !!i1559[23]
  i1558.useTargetAsV3 = !!i1559[24]
  i1558.endValueFloat = i1559[25]
  i1558.endValueV3 = new pc.Vec3( i1559[26], i1559[27], i1559[28] )
  i1558.endValueV2 = new pc.Vec2( i1559[29], i1559[30] )
  i1558.endValueColor = new pc.Color(i1559[31], i1559[32], i1559[33], i1559[34])
  i1558.endValueString = i1559[35]
  i1558.endValueRect = UnityEngine.Rect.MinMaxRect(i1559[36], i1559[37], i1559[38], i1559[39])
  request.r(i1559[40], i1559[41], 0, i1558, 'endValueTransform')
  i1558.optionalBool0 = !!i1559[42]
  i1558.optionalBool1 = !!i1559[43]
  i1558.optionalFloat0 = i1559[44]
  i1558.optionalInt0 = i1559[45]
  i1558.optionalRotationMode = i1559[46]
  i1558.optionalScrambleMode = i1559[47]
  i1558.optionalShakeRandomnessMode = i1559[48]
  i1558.optionalString = i1559[49]
  i1558.updateType = i1559[50]
  i1558.isSpeedBased = !!i1559[51]
  i1558.hasOnStart = !!i1559[52]
  i1558.hasOnPlay = !!i1559[53]
  i1558.hasOnUpdate = !!i1559[54]
  i1558.hasOnStepComplete = !!i1559[55]
  i1558.hasOnComplete = !!i1559[56]
  i1558.hasOnTweenCreated = !!i1559[57]
  i1558.hasOnRewind = !!i1559[58]
  i1558.onStart = request.d('UnityEngine.Events.UnityEvent', i1559[59], i1558.onStart)
  i1558.onPlay = request.d('UnityEngine.Events.UnityEvent', i1559[60], i1558.onPlay)
  i1558.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1559[61], i1558.onUpdate)
  i1558.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1559[62], i1558.onStepComplete)
  i1558.onComplete = request.d('UnityEngine.Events.UnityEvent', i1559[63], i1558.onComplete)
  i1558.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1559[64], i1558.onTweenCreated)
  i1558.onRewind = request.d('UnityEngine.Events.UnityEvent', i1559[65], i1558.onRewind)
  return i1558
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1560 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1561 = data
  i1560.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1561[0], i1560.m_PersistentCalls)
  return i1560
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1562 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1563 = data
  var i1565 = i1563[0]
  var i1564 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.add(request.d('UnityEngine.Events.PersistentCall', i1565[i + 0]));
  }
  i1562.m_Calls = i1564
  return i1562
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1568 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1569 = data
  request.r(i1569[0], i1569[1], 0, i1568, 'm_Target')
  i1568.m_TargetAssemblyTypeName = i1569[2]
  i1568.m_MethodName = i1569[3]
  i1568.m_Mode = i1569[4]
  i1568.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1569[5], i1568.m_Arguments)
  i1568.m_CallState = i1569[6]
  return i1568
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

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1574 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1575 = data
  i1574.m_Mode = i1575[0]
  i1574.m_WrapAround = !!i1575[1]
  request.r(i1575[2], i1575[3], 0, i1574, 'm_SelectOnUp')
  request.r(i1575[4], i1575[5], 0, i1574, 'm_SelectOnDown')
  request.r(i1575[6], i1575[7], 0, i1574, 'm_SelectOnLeft')
  request.r(i1575[8], i1575[9], 0, i1574, 'm_SelectOnRight')
  return i1574
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1576 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1577 = data
  i1576.m_NormalColor = new pc.Color(i1577[0], i1577[1], i1577[2], i1577[3])
  i1576.m_HighlightedColor = new pc.Color(i1577[4], i1577[5], i1577[6], i1577[7])
  i1576.m_PressedColor = new pc.Color(i1577[8], i1577[9], i1577[10], i1577[11])
  i1576.m_SelectedColor = new pc.Color(i1577[12], i1577[13], i1577[14], i1577[15])
  i1576.m_DisabledColor = new pc.Color(i1577[16], i1577[17], i1577[18], i1577[19])
  i1576.m_ColorMultiplier = i1577[20]
  i1576.m_FadeDuration = i1577[21]
  return i1576
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1578 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1579 = data
  request.r(i1579[0], i1579[1], 0, i1578, 'm_HighlightedSprite')
  request.r(i1579[2], i1579[3], 0, i1578, 'm_PressedSprite')
  request.r(i1579[4], i1579[5], 0, i1578, 'm_SelectedSprite')
  request.r(i1579[6], i1579[7], 0, i1578, 'm_DisabledSprite')
  return i1578
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1580 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1581 = data
  i1580.m_NormalTrigger = i1581[0]
  i1580.m_HighlightedTrigger = i1581[1]
  i1580.m_PressedTrigger = i1581[2]
  i1580.m_SelectedTrigger = i1581[3]
  i1580.m_DisabledTrigger = i1581[4]
  return i1580
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1582 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1583 = data
  i1582.m_ShowMaskGraphic = !!i1583[0]
  return i1582
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1584 = root || request.c( 'AudioController' )
  var i1585 = data
  request.r(i1585[0], i1585[1], 0, i1584, 'bgmSource')
  request.r(i1585[2], i1585[3], 0, i1584, 'sfxSource')
  var i1587 = i1585[4]
  var i1586 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.add(request.d('AudioEntry', i1587[i + 0]));
  }
  i1584.audioEntries = i1586
  return i1584
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i1590 = root || request.c( 'AudioEntry' )
  var i1591 = data
  i1590.key = i1591[0]
  request.r(i1591[1], i1591[2], 0, i1590, 'clip')
  i1590.volume = i1591[3]
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1593 = data
  i1592.ambientIntensity = i1593[0]
  i1592.reflectionIntensity = i1593[1]
  i1592.ambientMode = i1593[2]
  i1592.ambientLight = new pc.Color(i1593[3], i1593[4], i1593[5], i1593[6])
  i1592.ambientSkyColor = new pc.Color(i1593[7], i1593[8], i1593[9], i1593[10])
  i1592.ambientGroundColor = new pc.Color(i1593[11], i1593[12], i1593[13], i1593[14])
  i1592.ambientEquatorColor = new pc.Color(i1593[15], i1593[16], i1593[17], i1593[18])
  i1592.fogColor = new pc.Color(i1593[19], i1593[20], i1593[21], i1593[22])
  i1592.fogEndDistance = i1593[23]
  i1592.fogStartDistance = i1593[24]
  i1592.fogDensity = i1593[25]
  i1592.fog = !!i1593[26]
  request.r(i1593[27], i1593[28], 0, i1592, 'skybox')
  i1592.fogMode = i1593[29]
  var i1595 = i1593[30]
  var i1594 = []
  for(var i = 0; i < i1595.length; i += 1) {
    i1594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1595[i + 0]) );
  }
  i1592.lightmaps = i1594
  i1592.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1593[31], i1592.lightProbes)
  i1592.lightmapsMode = i1593[32]
  i1592.mixedBakeMode = i1593[33]
  i1592.environmentLightingMode = i1593[34]
  i1592.ambientProbe = new pc.SphericalHarmonicsL2(i1593[35])
  i1592.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1593[36])
  i1592.useReferenceAmbientProbe = !!i1593[37]
  request.r(i1593[38], i1593[39], 0, i1592, 'customReflection')
  request.r(i1593[40], i1593[41], 0, i1592, 'defaultReflection')
  i1592.defaultReflectionMode = i1593[42]
  i1592.defaultReflectionResolution = i1593[43]
  i1592.sunLightObjectId = i1593[44]
  i1592.pixelLightCount = i1593[45]
  i1592.defaultReflectionHDR = !!i1593[46]
  i1592.hasLightDataAsset = !!i1593[47]
  i1592.hasManualGenerate = !!i1593[48]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1599 = data
  request.r(i1599[0], i1599[1], 0, i1598, 'lightmapColor')
  request.r(i1599[2], i1599[3], 0, i1598, 'lightmapDirection')
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1600 = root || new UnityEngine.LightProbes()
  var i1601 = data
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1609 = data
  var i1611 = i1609[0]
  var i1610 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1611[i + 0]));
  }
  i1608.ShaderCompilationErrors = i1610
  i1608.name = i1609[1]
  i1608.guid = i1609[2]
  var i1613 = i1609[3]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.push( i1613[i + 0] );
  }
  i1608.shaderDefinedKeywords = i1612
  var i1615 = i1609[4]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1615[i + 0]) );
  }
  i1608.passes = i1614
  var i1617 = i1609[5]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 1) {
    i1616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1617[i + 0]) );
  }
  i1608.usePasses = i1616
  var i1619 = i1609[6]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 1) {
    i1618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1619[i + 0]) );
  }
  i1608.defaultParameterValues = i1618
  request.r(i1609[7], i1609[8], 0, i1608, 'unityFallbackShader')
  i1608.readDepth = !!i1609[9]
  i1608.isCreatedByShaderGraph = !!i1609[10]
  i1608.disableBatching = !!i1609[11]
  i1608.compiled = !!i1609[12]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1623 = data
  i1622.shaderName = i1623[0]
  i1622.errorMessage = i1623[1]
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1626 = root || new pc.UnityShaderPass()
  var i1627 = data
  i1626.id = i1627[0]
  i1626.subShaderIndex = i1627[1]
  i1626.name = i1627[2]
  i1626.passType = i1627[3]
  i1626.grabPassTextureName = i1627[4]
  i1626.usePass = !!i1627[5]
  i1626.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1627[6], i1626.zTest)
  i1626.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1627[7], i1626.zWrite)
  i1626.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1627[8], i1626.culling)
  i1626.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1627[9], i1626.blending)
  i1626.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1627[10], i1626.alphaBlending)
  i1626.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1627[11], i1626.colorWriteMask)
  i1626.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1627[12], i1626.offsetUnits)
  i1626.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1627[13], i1626.offsetFactor)
  i1626.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1627[14], i1626.stencilRef)
  i1626.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1627[15], i1626.stencilReadMask)
  i1626.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1627[16], i1626.stencilWriteMask)
  i1626.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1627[17], i1626.stencilOp)
  i1626.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1627[18], i1626.stencilOpFront)
  i1626.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1627[19], i1626.stencilOpBack)
  var i1629 = i1627[20]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1629[i + 0]) );
  }
  i1626.tags = i1628
  var i1631 = i1627[21]
  var i1630 = []
  for(var i = 0; i < i1631.length; i += 1) {
    i1630.push( i1631[i + 0] );
  }
  i1626.passDefinedKeywords = i1630
  var i1633 = i1627[22]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 1) {
    i1632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1633[i + 0]) );
  }
  i1626.passDefinedKeywordGroups = i1632
  var i1635 = i1627[23]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 1) {
    i1634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1635[i + 0]) );
  }
  i1626.variants = i1634
  var i1637 = i1627[24]
  var i1636 = []
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1637[i + 0]) );
  }
  i1626.excludedVariants = i1636
  i1626.hasDepthReader = !!i1627[25]
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1639 = data
  i1638.val = i1639[0]
  i1638.name = i1639[1]
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1641 = data
  i1640.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1641[0], i1640.src)
  i1640.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1641[1], i1640.dst)
  i1640.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1641[2], i1640.op)
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1643 = data
  i1642.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1643[0], i1642.pass)
  i1642.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1643[1], i1642.fail)
  i1642.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1643[2], i1642.zFail)
  i1642.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1643[3], i1642.comp)
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1647 = data
  i1646.name = i1647[0]
  i1646.value = i1647[1]
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1651 = data
  var i1653 = i1651[0]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( i1653[i + 0] );
  }
  i1650.keywords = i1652
  i1650.hasDiscard = !!i1651[1]
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1657 = data
  i1656.passId = i1657[0]
  i1656.subShaderIndex = i1657[1]
  var i1659 = i1657[2]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( i1659[i + 0] );
  }
  i1656.keywords = i1658
  i1656.vertexProgram = i1657[3]
  i1656.fragmentProgram = i1657[4]
  i1656.exportedForWebGl2 = !!i1657[5]
  i1656.readDepth = !!i1657[6]
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1663 = data
  request.r(i1663[0], i1663[1], 0, i1662, 'shader')
  i1662.pass = i1663[2]
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1667 = data
  i1666.name = i1667[0]
  i1666.type = i1667[1]
  i1666.value = new pc.Vec4( i1667[2], i1667[3], i1667[4], i1667[5] )
  i1666.textureValue = i1667[6]
  i1666.shaderPropertyFlag = i1667[7]
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1669 = data
  i1668.name = i1669[0]
  request.r(i1669[1], i1669[2], 0, i1668, 'texture')
  i1668.aabb = i1669[3]
  i1668.vertices = i1669[4]
  i1668.triangles = i1669[5]
  i1668.textureRect = UnityEngine.Rect.MinMaxRect(i1669[6], i1669[7], i1669[8], i1669[9])
  i1668.packedRect = UnityEngine.Rect.MinMaxRect(i1669[10], i1669[11], i1669[12], i1669[13])
  i1668.border = new pc.Vec4( i1669[14], i1669[15], i1669[16], i1669[17] )
  i1668.transparency = i1669[18]
  i1668.bounds = i1669[19]
  i1668.pixelsPerUnit = i1669[20]
  i1668.textureWidth = i1669[21]
  i1668.textureHeight = i1669[22]
  i1668.nativeSize = new pc.Vec2( i1669[23], i1669[24] )
  i1668.pivot = new pc.Vec2( i1669[25], i1669[26] )
  i1668.textureRectOffset = new pc.Vec2( i1669[27], i1669[28] )
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1671 = data
  i1670.name = i1671[0]
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1673 = data
  i1672.name = i1673[0]
  i1672.ascent = i1673[1]
  i1672.originalLineHeight = i1673[2]
  i1672.fontSize = i1673[3]
  var i1675 = i1673[4]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1675[i + 0]) );
  }
  i1672.characterInfo = i1674
  request.r(i1673[5], i1673[6], 0, i1672, 'texture')
  i1672.originalFontSize = i1673[7]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1679 = data
  i1678.index = i1679[0]
  i1678.advance = i1679[1]
  i1678.bearing = i1679[2]
  i1678.glyphWidth = i1679[3]
  i1678.glyphHeight = i1679[4]
  i1678.minX = i1679[5]
  i1678.maxX = i1679[6]
  i1678.minY = i1679[7]
  i1678.maxY = i1679[8]
  i1678.uvBottomLeftX = i1679[9]
  i1678.uvBottomLeftY = i1679[10]
  i1678.uvBottomRightX = i1679[11]
  i1678.uvBottomRightY = i1679[12]
  i1678.uvTopLeftX = i1679[13]
  i1678.uvTopLeftY = i1679[14]
  i1678.uvTopRightX = i1679[15]
  i1678.uvTopRightY = i1679[16]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1681 = data
  i1680.name = i1681[0]
  i1680.bytes64 = i1681[1]
  i1680.data = i1681[2]
  return i1680
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1682 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1683 = data
  var i1685 = i1683[0]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 2) {
  request.r(i1685[i + 0], i1685[i + 1], 2, i1684, '')
  }
  i1682.atlasAssets = i1684
  i1682.scale = i1683[1]
  request.r(i1683[2], i1683[3], 0, i1682, 'skeletonJSON')
  i1682.isUpgradingBlendModeMaterials = !!i1683[4]
  i1682.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1683[5], i1682.blendModeMaterials)
  var i1687 = i1683[6]
  var i1686 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1687.length; i += 2) {
  request.r(i1687[i + 0], i1687[i + 1], 1, i1686, '')
  }
  i1682.skeletonDataModifiers = i1686
  var i1689 = i1683[7]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( i1689[i + 0] );
  }
  i1682.fromAnimation = i1688
  var i1691 = i1683[8]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( i1691[i + 0] );
  }
  i1682.toAnimation = i1690
  i1682.duration = i1683[9]
  i1682.defaultMix = i1683[10]
  request.r(i1683[11], i1683[12], 0, i1682, 'controller')
  return i1682
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1694 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1695 = data
  i1694.applyAdditiveMaterial = !!i1695[0]
  var i1697 = i1695[1]
  var i1696 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1697.length; i += 1) {
    i1696.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1697[i + 0]));
  }
  i1694.additiveMaterials = i1696
  var i1699 = i1695[2]
  var i1698 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1699[i + 0]));
  }
  i1694.multiplyMaterials = i1698
  var i1701 = i1695[3]
  var i1700 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1701[i + 0]));
  }
  i1694.screenMaterials = i1700
  i1694.requiresBlendModeMaterials = !!i1695[4]
  return i1694
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1704 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1705 = data
  i1704.pageName = i1705[0]
  request.r(i1705[1], i1705[2], 0, i1704, 'material')
  return i1704
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1708 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1709 = data
  request.r(i1709[0], i1709[1], 0, i1708, 'atlasFile')
  var i1711 = i1709[2]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 2) {
  request.r(i1711[i + 0], i1711[i + 1], 2, i1710, '')
  }
  i1708.materials = i1710
  i1708.textureLoadingMode = i1709[3]
  request.r(i1709[4], i1709[5], 0, i1708, 'onDemandTextureLoader')
  return i1708
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1712 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1713 = data
  request.r(i1713[0], i1713[1], 0, i1712, 'atlas')
  i1712.normalStyle = i1713[2]
  i1712.normalSpacingOffset = i1713[3]
  i1712.boldStyle = i1713[4]
  i1712.boldSpacing = i1713[5]
  i1712.italicStyle = i1713[6]
  i1712.tabSize = i1713[7]
  i1712.hashCode = i1713[8]
  request.r(i1713[9], i1713[10], 0, i1712, 'material')
  i1712.materialHashCode = i1713[11]
  i1712.m_Version = i1713[12]
  i1712.m_SourceFontFileGUID = i1713[13]
  request.r(i1713[14], i1713[15], 0, i1712, 'm_SourceFontFile_EditorRef')
  request.r(i1713[16], i1713[17], 0, i1712, 'm_SourceFontFile')
  i1712.m_AtlasPopulationMode = i1713[18]
  i1712.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1713[19], i1712.m_FaceInfo)
  var i1715 = i1713[20]
  var i1714 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.add(request.d('UnityEngine.TextCore.Glyph', i1715[i + 0]));
  }
  i1712.m_GlyphTable = i1714
  var i1717 = i1713[21]
  var i1716 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.add(request.d('TMPro.TMP_Character', i1717[i + 0]));
  }
  i1712.m_CharacterTable = i1716
  var i1719 = i1713[22]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 2) {
  request.r(i1719[i + 0], i1719[i + 1], 2, i1718, '')
  }
  i1712.m_AtlasTextures = i1718
  i1712.m_AtlasTextureIndex = i1713[23]
  i1712.m_IsMultiAtlasTexturesEnabled = !!i1713[24]
  i1712.m_ClearDynamicDataOnBuild = !!i1713[25]
  var i1721 = i1713[26]
  var i1720 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1721.length; i += 1) {
    i1720.add(request.d('UnityEngine.TextCore.GlyphRect', i1721[i + 0]));
  }
  i1712.m_UsedGlyphRects = i1720
  var i1723 = i1713[27]
  var i1722 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.add(request.d('UnityEngine.TextCore.GlyphRect', i1723[i + 0]));
  }
  i1712.m_FreeGlyphRects = i1722
  i1712.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1713[28], i1712.m_fontInfo)
  i1712.m_AtlasWidth = i1713[29]
  i1712.m_AtlasHeight = i1713[30]
  i1712.m_AtlasPadding = i1713[31]
  i1712.m_AtlasRenderMode = i1713[32]
  var i1725 = i1713[33]
  var i1724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.add(request.d('TMPro.TMP_Glyph', i1725[i + 0]));
  }
  i1712.m_glyphInfoList = i1724
  i1712.m_KerningTable = request.d('TMPro.KerningTable', i1713[34], i1712.m_KerningTable)
  i1712.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1713[35], i1712.m_FontFeatureTable)
  var i1727 = i1713[36]
  var i1726 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1727.length; i += 2) {
  request.r(i1727[i + 0], i1727[i + 1], 1, i1726, '')
  }
  i1712.fallbackFontAssets = i1726
  var i1729 = i1713[37]
  var i1728 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1729.length; i += 2) {
  request.r(i1729[i + 0], i1729[i + 1], 1, i1728, '')
  }
  i1712.m_FallbackFontAssetTable = i1728
  i1712.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1713[38], i1712.m_CreationSettings)
  var i1731 = i1713[39]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( request.d('TMPro.TMP_FontWeightPair', i1731[i + 0]) );
  }
  i1712.m_FontWeightTable = i1730
  var i1733 = i1713[40]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('TMPro.TMP_FontWeightPair', i1733[i + 0]) );
  }
  i1712.fontWeights = i1732
  return i1712
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1734 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1735 = data
  i1734.m_FaceIndex = i1735[0]
  i1734.m_FamilyName = i1735[1]
  i1734.m_StyleName = i1735[2]
  i1734.m_PointSize = i1735[3]
  i1734.m_Scale = i1735[4]
  i1734.m_UnitsPerEM = i1735[5]
  i1734.m_LineHeight = i1735[6]
  i1734.m_AscentLine = i1735[7]
  i1734.m_CapLine = i1735[8]
  i1734.m_MeanLine = i1735[9]
  i1734.m_Baseline = i1735[10]
  i1734.m_DescentLine = i1735[11]
  i1734.m_SuperscriptOffset = i1735[12]
  i1734.m_SuperscriptSize = i1735[13]
  i1734.m_SubscriptOffset = i1735[14]
  i1734.m_SubscriptSize = i1735[15]
  i1734.m_UnderlineOffset = i1735[16]
  i1734.m_UnderlineThickness = i1735[17]
  i1734.m_StrikethroughOffset = i1735[18]
  i1734.m_StrikethroughThickness = i1735[19]
  i1734.m_TabWidth = i1735[20]
  return i1734
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1738 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1739 = data
  i1738.m_Index = i1739[0]
  i1738.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1739[1], i1738.m_Metrics)
  i1738.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1739[2], i1738.m_GlyphRect)
  i1738.m_Scale = i1739[3]
  i1738.m_AtlasIndex = i1739[4]
  i1738.m_ClassDefinitionType = i1739[5]
  return i1738
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1740 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1741 = data
  i1740.m_Width = i1741[0]
  i1740.m_Height = i1741[1]
  i1740.m_HorizontalBearingX = i1741[2]
  i1740.m_HorizontalBearingY = i1741[3]
  i1740.m_HorizontalAdvance = i1741[4]
  return i1740
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1742 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1743 = data
  i1742.m_X = i1743[0]
  i1742.m_Y = i1743[1]
  i1742.m_Width = i1743[2]
  i1742.m_Height = i1743[3]
  return i1742
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1746 = root || request.c( 'TMPro.TMP_Character' )
  var i1747 = data
  i1746.m_ElementType = i1747[0]
  i1746.m_Unicode = i1747[1]
  i1746.m_GlyphIndex = i1747[2]
  i1746.m_Scale = i1747[3]
  return i1746
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1752 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1753 = data
  i1752.Name = i1753[0]
  i1752.PointSize = i1753[1]
  i1752.Scale = i1753[2]
  i1752.CharacterCount = i1753[3]
  i1752.LineHeight = i1753[4]
  i1752.Baseline = i1753[5]
  i1752.Ascender = i1753[6]
  i1752.CapHeight = i1753[7]
  i1752.Descender = i1753[8]
  i1752.CenterLine = i1753[9]
  i1752.SuperscriptOffset = i1753[10]
  i1752.SubscriptOffset = i1753[11]
  i1752.SubSize = i1753[12]
  i1752.Underline = i1753[13]
  i1752.UnderlineThickness = i1753[14]
  i1752.strikethrough = i1753[15]
  i1752.strikethroughThickness = i1753[16]
  i1752.TabWidth = i1753[17]
  i1752.Padding = i1753[18]
  i1752.AtlasWidth = i1753[19]
  i1752.AtlasHeight = i1753[20]
  return i1752
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1756 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1757 = data
  i1756.id = i1757[0]
  i1756.x = i1757[1]
  i1756.y = i1757[2]
  i1756.width = i1757[3]
  i1756.height = i1757[4]
  i1756.xOffset = i1757[5]
  i1756.yOffset = i1757[6]
  i1756.xAdvance = i1757[7]
  i1756.scale = i1757[8]
  return i1756
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1758 = root || request.c( 'TMPro.KerningTable' )
  var i1759 = data
  var i1761 = i1759[0]
  var i1760 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.add(request.d('TMPro.KerningPair', i1761[i + 0]));
  }
  i1758.kerningPairs = i1760
  return i1758
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1764 = root || request.c( 'TMPro.KerningPair' )
  var i1765 = data
  i1764.xOffset = i1765[0]
  i1764.m_FirstGlyph = i1765[1]
  i1764.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1765[2], i1764.m_FirstGlyphAdjustments)
  i1764.m_SecondGlyph = i1765[3]
  i1764.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1765[4], i1764.m_SecondGlyphAdjustments)
  i1764.m_IgnoreSpacingAdjustments = !!i1765[5]
  return i1764
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1766 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1767 = data
  var i1769 = i1767[0]
  var i1768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1769[i + 0]));
  }
  i1766.m_GlyphPairAdjustmentRecords = i1768
  return i1766
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1772 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1773 = data
  i1772.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1773[0], i1772.m_FirstAdjustmentRecord)
  i1772.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1773[1], i1772.m_SecondAdjustmentRecord)
  i1772.m_FeatureLookupFlags = i1773[2]
  return i1772
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1776 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1777 = data
  i1776.sourceFontFileName = i1777[0]
  i1776.sourceFontFileGUID = i1777[1]
  i1776.pointSizeSamplingMode = i1777[2]
  i1776.pointSize = i1777[3]
  i1776.padding = i1777[4]
  i1776.packingMode = i1777[5]
  i1776.atlasWidth = i1777[6]
  i1776.atlasHeight = i1777[7]
  i1776.characterSetSelectionMode = i1777[8]
  i1776.characterSequence = i1777[9]
  i1776.referencedFontAssetGUID = i1777[10]
  i1776.referencedTextAssetGUID = i1777[11]
  i1776.fontStyle = i1777[12]
  i1776.fontStyleModifier = i1777[13]
  i1776.renderMode = i1777[14]
  i1776.includeFontFeatures = !!i1777[15]
  return i1776
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1780 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1781 = data
  request.r(i1781[0], i1781[1], 0, i1780, 'regularTypeface')
  request.r(i1781[2], i1781[3], 0, i1780, 'italicTypeface')
  return i1780
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1782 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1783 = data
  i1782.useSafeMode = !!i1783[0]
  i1782.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1783[1], i1782.safeModeOptions)
  i1782.timeScale = i1783[2]
  i1782.unscaledTimeScale = i1783[3]
  i1782.useSmoothDeltaTime = !!i1783[4]
  i1782.maxSmoothUnscaledTime = i1783[5]
  i1782.rewindCallbackMode = i1783[6]
  i1782.showUnityEditorReport = !!i1783[7]
  i1782.logBehaviour = i1783[8]
  i1782.drawGizmos = !!i1783[9]
  i1782.defaultRecyclable = !!i1783[10]
  i1782.defaultAutoPlay = i1783[11]
  i1782.defaultUpdateType = i1783[12]
  i1782.defaultTimeScaleIndependent = !!i1783[13]
  i1782.defaultEaseType = i1783[14]
  i1782.defaultEaseOvershootOrAmplitude = i1783[15]
  i1782.defaultEasePeriod = i1783[16]
  i1782.defaultAutoKill = !!i1783[17]
  i1782.defaultLoopType = i1783[18]
  i1782.debugMode = !!i1783[19]
  i1782.debugStoreTargetId = !!i1783[20]
  i1782.showPreviewPanel = !!i1783[21]
  i1782.storeSettingsLocation = i1783[22]
  i1782.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1783[23], i1782.modules)
  i1782.createASMDEF = !!i1783[24]
  i1782.showPlayingTweens = !!i1783[25]
  i1782.showPausedTweens = !!i1783[26]
  return i1782
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1784 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1785 = data
  i1784.logBehaviour = i1785[0]
  i1784.nestedTweenFailureBehaviour = i1785[1]
  return i1784
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1786 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1787 = data
  i1786.showPanel = !!i1787[0]
  i1786.audioEnabled = !!i1787[1]
  i1786.physicsEnabled = !!i1787[2]
  i1786.physics2DEnabled = !!i1787[3]
  i1786.spriteEnabled = !!i1787[4]
  i1786.uiEnabled = !!i1787[5]
  i1786.textMeshProEnabled = !!i1787[6]
  i1786.tk2DEnabled = !!i1787[7]
  i1786.deAudioEnabled = !!i1787[8]
  i1786.deUnityExtendedEnabled = !!i1787[9]
  i1786.epoOutlineEnabled = !!i1787[10]
  return i1786
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1788 = root || request.c( 'TMPro.TMP_Settings' )
  var i1789 = data
  i1788.m_enableWordWrapping = !!i1789[0]
  i1788.m_enableKerning = !!i1789[1]
  i1788.m_enableExtraPadding = !!i1789[2]
  i1788.m_enableTintAllSprites = !!i1789[3]
  i1788.m_enableParseEscapeCharacters = !!i1789[4]
  i1788.m_EnableRaycastTarget = !!i1789[5]
  i1788.m_GetFontFeaturesAtRuntime = !!i1789[6]
  i1788.m_missingGlyphCharacter = i1789[7]
  i1788.m_warningsDisabled = !!i1789[8]
  request.r(i1789[9], i1789[10], 0, i1788, 'm_defaultFontAsset')
  i1788.m_defaultFontAssetPath = i1789[11]
  i1788.m_defaultFontSize = i1789[12]
  i1788.m_defaultAutoSizeMinRatio = i1789[13]
  i1788.m_defaultAutoSizeMaxRatio = i1789[14]
  i1788.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1789[15], i1789[16] )
  i1788.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1789[17], i1789[18] )
  i1788.m_autoSizeTextContainer = !!i1789[19]
  i1788.m_IsTextObjectScaleStatic = !!i1789[20]
  var i1791 = i1789[21]
  var i1790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1791.length; i += 2) {
  request.r(i1791[i + 0], i1791[i + 1], 1, i1790, '')
  }
  i1788.m_fallbackFontAssets = i1790
  i1788.m_matchMaterialPreset = !!i1789[22]
  request.r(i1789[23], i1789[24], 0, i1788, 'm_defaultSpriteAsset')
  i1788.m_defaultSpriteAssetPath = i1789[25]
  i1788.m_enableEmojiSupport = !!i1789[26]
  i1788.m_MissingCharacterSpriteUnicode = i1789[27]
  i1788.m_defaultColorGradientPresetsPath = i1789[28]
  request.r(i1789[29], i1789[30], 0, i1788, 'm_defaultStyleSheet')
  i1788.m_StyleSheetsResourcePath = i1789[31]
  request.r(i1789[32], i1789[33], 0, i1788, 'm_leadingCharacters')
  request.r(i1789[34], i1789[35], 0, i1788, 'm_followingCharacters')
  i1788.m_UseModernHangulLineBreakingRules = !!i1789[36]
  return i1788
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1792 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1793 = data
  request.r(i1793[0], i1793[1], 0, i1792, 'spriteSheet')
  var i1795 = i1793[2]
  var i1794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1795.length; i += 1) {
    i1794.add(request.d('TMPro.TMP_Sprite', i1795[i + 0]));
  }
  i1792.spriteInfoList = i1794
  var i1797 = i1793[3]
  var i1796 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1797.length; i += 2) {
  request.r(i1797[i + 0], i1797[i + 1], 1, i1796, '')
  }
  i1792.fallbackSpriteAssets = i1796
  i1792.hashCode = i1793[4]
  request.r(i1793[5], i1793[6], 0, i1792, 'material')
  i1792.materialHashCode = i1793[7]
  i1792.m_Version = i1793[8]
  i1792.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1793[9], i1792.m_FaceInfo)
  var i1799 = i1793[10]
  var i1798 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.add(request.d('TMPro.TMP_SpriteCharacter', i1799[i + 0]));
  }
  i1792.m_SpriteCharacterTable = i1798
  var i1801 = i1793[11]
  var i1800 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.add(request.d('TMPro.TMP_SpriteGlyph', i1801[i + 0]));
  }
  i1792.m_SpriteGlyphTable = i1800
  return i1792
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1804 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1805 = data
  i1804.name = i1805[0]
  i1804.hashCode = i1805[1]
  i1804.unicode = i1805[2]
  i1804.pivot = new pc.Vec2( i1805[3], i1805[4] )
  request.r(i1805[5], i1805[6], 0, i1804, 'sprite')
  i1804.id = i1805[7]
  i1804.x = i1805[8]
  i1804.y = i1805[9]
  i1804.width = i1805[10]
  i1804.height = i1805[11]
  i1804.xOffset = i1805[12]
  i1804.yOffset = i1805[13]
  i1804.xAdvance = i1805[14]
  i1804.scale = i1805[15]
  return i1804
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1810 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1811 = data
  i1810.m_Name = i1811[0]
  i1810.m_HashCode = i1811[1]
  i1810.m_ElementType = i1811[2]
  i1810.m_Unicode = i1811[3]
  i1810.m_GlyphIndex = i1811[4]
  i1810.m_Scale = i1811[5]
  return i1810
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1814 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1815 = data
  request.r(i1815[0], i1815[1], 0, i1814, 'sprite')
  i1814.m_Index = i1815[2]
  i1814.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1815[3], i1814.m_Metrics)
  i1814.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1815[4], i1814.m_GlyphRect)
  i1814.m_Scale = i1815[5]
  i1814.m_AtlasIndex = i1815[6]
  i1814.m_ClassDefinitionType = i1815[7]
  return i1814
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1816 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1817 = data
  var i1819 = i1817[0]
  var i1818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.add(request.d('TMPro.TMP_Style', i1819[i + 0]));
  }
  i1816.m_StyleList = i1818
  return i1816
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1822 = root || request.c( 'TMPro.TMP_Style' )
  var i1823 = data
  i1822.m_Name = i1823[0]
  i1822.m_HashCode = i1823[1]
  i1822.m_OpeningDefinition = i1823[2]
  i1822.m_ClosingDefinition = i1823[3]
  i1822.m_OpeningTagArray = i1823[4]
  i1822.m_ClosingTagArray = i1823[5]
  i1822.m_OpeningTagUnicodeArray = i1823[6]
  i1822.m_ClosingTagUnicodeArray = i1823[7]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1825 = data
  var i1827 = i1825[0]
  var i1826 = []
  for(var i = 0; i < i1827.length; i += 1) {
    i1826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1827[i + 0]) );
  }
  i1824.files = i1826
  i1824.componentToPrefabIds = i1825[1]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1831 = data
  i1830.path = i1831[0]
  request.r(i1831[1], i1831[2], 0, i1830, 'unityObject')
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1833 = data
  var i1835 = i1833[0]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1835[i + 0]) );
  }
  i1832.scriptsExecutionOrder = i1834
  var i1837 = i1833[1]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1837[i + 0]) );
  }
  i1832.sortingLayers = i1836
  var i1839 = i1833[2]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1839[i + 0]) );
  }
  i1832.cullingLayers = i1838
  i1832.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1833[3], i1832.timeSettings)
  i1832.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1833[4], i1832.physicsSettings)
  i1832.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1833[5], i1832.physics2DSettings)
  i1832.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1833[6], i1832.qualitySettings)
  i1832.enableRealtimeShadows = !!i1833[7]
  i1832.enableAutoInstancing = !!i1833[8]
  i1832.enableStaticBatching = !!i1833[9]
  i1832.enableDynamicBatching = !!i1833[10]
  i1832.lightmapEncodingQuality = i1833[11]
  i1832.desiredColorSpace = i1833[12]
  var i1841 = i1833[13]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( i1841[i + 0] );
  }
  i1832.allTags = i1840
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1845 = data
  i1844.name = i1845[0]
  i1844.value = i1845[1]
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1849 = data
  i1848.id = i1849[0]
  i1848.name = i1849[1]
  i1848.value = i1849[2]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1853 = data
  i1852.id = i1853[0]
  i1852.name = i1853[1]
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1855 = data
  i1854.fixedDeltaTime = i1855[0]
  i1854.maximumDeltaTime = i1855[1]
  i1854.timeScale = i1855[2]
  i1854.maximumParticleTimestep = i1855[3]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1857 = data
  i1856.gravity = new pc.Vec3( i1857[0], i1857[1], i1857[2] )
  i1856.defaultSolverIterations = i1857[3]
  i1856.bounceThreshold = i1857[4]
  i1856.autoSyncTransforms = !!i1857[5]
  i1856.autoSimulation = !!i1857[6]
  var i1859 = i1857[7]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1859[i + 0]) );
  }
  i1856.collisionMatrix = i1858
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1863 = data
  i1862.enabled = !!i1863[0]
  i1862.layerId = i1863[1]
  i1862.otherLayerId = i1863[2]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1865 = data
  request.r(i1865[0], i1865[1], 0, i1864, 'material')
  i1864.gravity = new pc.Vec2( i1865[2], i1865[3] )
  i1864.positionIterations = i1865[4]
  i1864.velocityIterations = i1865[5]
  i1864.velocityThreshold = i1865[6]
  i1864.maxLinearCorrection = i1865[7]
  i1864.maxAngularCorrection = i1865[8]
  i1864.maxTranslationSpeed = i1865[9]
  i1864.maxRotationSpeed = i1865[10]
  i1864.baumgarteScale = i1865[11]
  i1864.baumgarteTOIScale = i1865[12]
  i1864.timeToSleep = i1865[13]
  i1864.linearSleepTolerance = i1865[14]
  i1864.angularSleepTolerance = i1865[15]
  i1864.defaultContactOffset = i1865[16]
  i1864.autoSimulation = !!i1865[17]
  i1864.queriesHitTriggers = !!i1865[18]
  i1864.queriesStartInColliders = !!i1865[19]
  i1864.callbacksOnDisable = !!i1865[20]
  i1864.reuseCollisionCallbacks = !!i1865[21]
  i1864.autoSyncTransforms = !!i1865[22]
  var i1867 = i1865[23]
  var i1866 = []
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1867[i + 0]) );
  }
  i1864.collisionMatrix = i1866
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1871 = data
  i1870.enabled = !!i1871[0]
  i1870.layerId = i1871[1]
  i1870.otherLayerId = i1871[2]
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1873 = data
  var i1875 = i1873[0]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1875[i + 0]) );
  }
  i1872.qualityLevels = i1874
  var i1877 = i1873[1]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( i1877[i + 0] );
  }
  i1872.names = i1876
  i1872.shadows = i1873[2]
  i1872.anisotropicFiltering = i1873[3]
  i1872.antiAliasing = i1873[4]
  i1872.lodBias = i1873[5]
  i1872.shadowCascades = i1873[6]
  i1872.shadowDistance = i1873[7]
  i1872.shadowmaskMode = i1873[8]
  i1872.shadowProjection = i1873[9]
  i1872.shadowResolution = i1873[10]
  i1872.softParticles = !!i1873[11]
  i1872.softVegetation = !!i1873[12]
  i1872.activeColorSpace = i1873[13]
  i1872.desiredColorSpace = i1873[14]
  i1872.masterTextureLimit = i1873[15]
  i1872.maxQueuedFrames = i1873[16]
  i1872.particleRaycastBudget = i1873[17]
  i1872.pixelLightCount = i1873[18]
  i1872.realtimeReflectionProbes = !!i1873[19]
  i1872.shadowCascade2Split = i1873[20]
  i1872.shadowCascade4Split = new pc.Vec3( i1873[21], i1873[22], i1873[23] )
  i1872.streamingMipmapsActive = !!i1873[24]
  i1872.vSyncCount = i1873[25]
  i1872.asyncUploadBufferSize = i1873[26]
  i1872.asyncUploadTimeSlice = i1873[27]
  i1872.billboardsFaceCameraPosition = !!i1873[28]
  i1872.shadowNearPlaneOffset = i1873[29]
  i1872.streamingMipmapsMemoryBudget = i1873[30]
  i1872.maximumLODLevel = i1873[31]
  i1872.streamingMipmapsAddAllCameras = !!i1873[32]
  i1872.streamingMipmapsMaxLevelReduction = i1873[33]
  i1872.streamingMipmapsRenderersPerFrame = i1873[34]
  i1872.resolutionScalingFixedDPIFactor = i1873[35]
  i1872.streamingMipmapsMaxFileIORequests = i1873[36]
  i1872.currentQualityLevel = i1873[37]
  return i1872
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1880 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1881 = data
  request.r(i1881[0], i1881[1], 0, i1880, 'm_ObjectArgument')
  i1880.m_ObjectArgumentAssemblyTypeName = i1881[2]
  i1880.m_IntArgument = i1881[3]
  i1880.m_FloatArgument = i1881[4]
  i1880.m_StringArgument = i1881[5]
  i1880.m_BoolArgument = !!i1881[6]
  return i1880
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

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.RawImage","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.MonoBehaviour","DropZone","UnityEngine.GameObject","UnityEngine.PolygonCollider2D","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.CanvasGroup","DraggableItem","LunaManager","UnityEngine.UI.Button","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "164.0";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BM_V03_ManhND_AnhPD";

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

Deserializers.buildID = "4bedcf14-eb1b-4ad7-b319-7ae31235a027";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

