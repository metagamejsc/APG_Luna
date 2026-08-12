var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1434 = root || request.c( 'UnityEngine.JointSpring' )
  var i1435 = data
  i1434.spring = i1435[0]
  i1434.damper = i1435[1]
  i1434.targetPosition = i1435[2]
  return i1434
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1436 = root || request.c( 'UnityEngine.JointMotor' )
  var i1437 = data
  i1436.m_TargetVelocity = i1437[0]
  i1436.m_Force = i1437[1]
  i1436.m_FreeSpin = i1437[2]
  return i1436
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1438 = root || request.c( 'UnityEngine.JointLimits' )
  var i1439 = data
  i1438.m_Min = i1439[0]
  i1438.m_Max = i1439[1]
  i1438.m_Bounciness = i1439[2]
  i1438.m_BounceMinVelocity = i1439[3]
  i1438.m_ContactDistance = i1439[4]
  i1438.minBounce = i1439[5]
  i1438.maxBounce = i1439[6]
  return i1438
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1440 = root || request.c( 'UnityEngine.JointDrive' )
  var i1441 = data
  i1440.m_PositionSpring = i1441[0]
  i1440.m_PositionDamper = i1441[1]
  i1440.m_MaximumForce = i1441[2]
  i1440.m_UseAcceleration = i1441[3]
  return i1440
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1442 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1443 = data
  i1442.m_Spring = i1443[0]
  i1442.m_Damper = i1443[1]
  return i1442
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1444 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1445 = data
  i1444.m_Limit = i1445[0]
  i1444.m_Bounciness = i1445[1]
  i1444.m_ContactDistance = i1445[2]
  return i1444
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1446 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1447 = data
  i1446.m_ExtremumSlip = i1447[0]
  i1446.m_ExtremumValue = i1447[1]
  i1446.m_AsymptoteSlip = i1447[2]
  i1446.m_AsymptoteValue = i1447[3]
  i1446.m_Stiffness = i1447[4]
  return i1446
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1448 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1449 = data
  i1448.m_LowerAngle = i1449[0]
  i1448.m_UpperAngle = i1449[1]
  return i1448
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1450 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1451 = data
  i1450.m_MotorSpeed = i1451[0]
  i1450.m_MaximumMotorTorque = i1451[1]
  return i1450
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1452 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1453 = data
  i1452.m_DampingRatio = i1453[0]
  i1452.m_Frequency = i1453[1]
  i1452.m_Angle = i1453[2]
  return i1452
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1454 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1455 = data
  i1454.m_LowerTranslation = i1455[0]
  i1454.m_UpperTranslation = i1455[1]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1456 = root || new pc.UnityMaterial()
  var i1457 = data
  i1456.name = i1457[0]
  request.r(i1457[1], i1457[2], 0, i1456, 'shader')
  i1456.renderQueue = i1457[3]
  i1456.enableInstancing = !!i1457[4]
  var i1459 = i1457[5]
  var i1458 = []
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1459[i + 0]) );
  }
  i1456.floatParameters = i1458
  var i1461 = i1457[6]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1461[i + 0]) );
  }
  i1456.colorParameters = i1460
  var i1463 = i1457[7]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1463[i + 0]) );
  }
  i1456.vectorParameters = i1462
  var i1465 = i1457[8]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1465[i + 0]) );
  }
  i1456.textureParameters = i1464
  var i1467 = i1457[9]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1467[i + 0]) );
  }
  i1456.materialFlags = i1466
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1471 = data
  i1470.name = i1471[0]
  i1470.value = i1471[1]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1475 = data
  i1474.name = i1475[0]
  i1474.value = new pc.Color(i1475[1], i1475[2], i1475[3], i1475[4])
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1479 = data
  i1478.name = i1479[0]
  i1478.value = new pc.Vec4( i1479[1], i1479[2], i1479[3], i1479[4] )
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1483 = data
  i1482.name = i1483[0]
  request.r(i1483[1], i1483[2], 0, i1482, 'value')
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1487 = data
  i1486.name = i1487[0]
  i1486.enabled = !!i1487[1]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1489 = data
  i1488.name = i1489[0]
  i1488.width = i1489[1]
  i1488.height = i1489[2]
  i1488.mipmapCount = i1489[3]
  i1488.anisoLevel = i1489[4]
  i1488.filterMode = i1489[5]
  i1488.hdr = !!i1489[6]
  i1488.format = i1489[7]
  i1488.wrapMode = i1489[8]
  i1488.alphaIsTransparency = !!i1489[9]
  i1488.alphaSource = i1489[10]
  i1488.graphicsFormat = i1489[11]
  i1488.sRGBTexture = !!i1489[12]
  i1488.desiredColorSpace = i1489[13]
  i1488.wrapU = i1489[14]
  i1488.wrapV = i1489[15]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1493 = data
  i1492.aspect = i1493[0]
  i1492.orthographic = !!i1493[1]
  i1492.orthographicSize = i1493[2]
  i1492.backgroundColor = new pc.Color(i1493[3], i1493[4], i1493[5], i1493[6])
  i1492.nearClipPlane = i1493[7]
  i1492.farClipPlane = i1493[8]
  i1492.fieldOfView = i1493[9]
  i1492.depth = i1493[10]
  i1492.clearFlags = i1493[11]
  i1492.cullingMask = i1493[12]
  i1492.rect = i1493[13]
  request.r(i1493[14], i1493[15], 0, i1492, 'targetTexture')
  i1492.usePhysicalProperties = !!i1493[16]
  i1492.focalLength = i1493[17]
  i1492.sensorSize = new pc.Vec2( i1493[18], i1493[19] )
  i1492.lensShift = new pc.Vec2( i1493[20], i1493[21] )
  i1492.gateFit = i1493[22]
  i1492.commandBufferCount = i1493[23]
  i1492.cameraType = i1493[24]
  i1492.enabled = !!i1493[25]
  return i1492
}

Deserializers["CameraAutoSize"] = function (request, data, root) {
  var i1494 = root || request.c( 'CameraAutoSize' )
  var i1495 = data
  request.r(i1495[0], i1495[1], 0, i1494, 'targetCamera')
  i1494.referenceResolution = new pc.Vec2( i1495[2], i1495[3] )
  i1494.referenceOrthographicSize = i1495[4]
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1497 = data
  i1496.name = i1497[0]
  i1496.tagId = i1497[1]
  i1496.enabled = !!i1497[2]
  i1496.isStatic = !!i1497[3]
  i1496.layer = i1497[4]
  return i1496
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1498 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1499 = data
  request.r(i1499[0], i1499[1], 0, i1498, 'm_FirstSelected')
  i1498.m_sendNavigationEvents = !!i1499[2]
  i1498.m_DragThreshold = i1499[3]
  return i1498
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1500 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1501 = data
  i1500.m_HorizontalAxis = i1501[0]
  i1500.m_VerticalAxis = i1501[1]
  i1500.m_SubmitButton = i1501[2]
  i1500.m_CancelButton = i1501[3]
  i1500.m_InputActionsPerSecond = i1501[4]
  i1500.m_RepeatDelay = i1501[5]
  i1500.m_ForceModuleActive = !!i1501[6]
  i1500.m_SendPointerHoverToParent = !!i1501[7]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1503 = data
  i1502.pivot = new pc.Vec2( i1503[0], i1503[1] )
  i1502.anchorMin = new pc.Vec2( i1503[2], i1503[3] )
  i1502.anchorMax = new pc.Vec2( i1503[4], i1503[5] )
  i1502.sizeDelta = new pc.Vec2( i1503[6], i1503[7] )
  i1502.anchoredPosition3D = new pc.Vec3( i1503[8], i1503[9], i1503[10] )
  i1502.rotation = new pc.Quat(i1503[11], i1503[12], i1503[13], i1503[14])
  i1502.scale = new pc.Vec3( i1503[15], i1503[16], i1503[17] )
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1505 = data
  i1504.planeDistance = i1505[0]
  i1504.referencePixelsPerUnit = i1505[1]
  i1504.isFallbackOverlay = !!i1505[2]
  i1504.renderMode = i1505[3]
  i1504.renderOrder = i1505[4]
  i1504.sortingLayerName = i1505[5]
  i1504.sortingOrder = i1505[6]
  i1504.scaleFactor = i1505[7]
  request.r(i1505[8], i1505[9], 0, i1504, 'worldCamera')
  i1504.overrideSorting = !!i1505[10]
  i1504.pixelPerfect = !!i1505[11]
  i1504.targetDisplay = i1505[12]
  i1504.overridePixelPerfect = !!i1505[13]
  i1504.enabled = !!i1505[14]
  return i1504
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1506 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1507 = data
  i1506.m_UiScaleMode = i1507[0]
  i1506.m_ReferencePixelsPerUnit = i1507[1]
  i1506.m_ScaleFactor = i1507[2]
  i1506.m_ReferenceResolution = new pc.Vec2( i1507[3], i1507[4] )
  i1506.m_ScreenMatchMode = i1507[5]
  i1506.m_MatchWidthOrHeight = i1507[6]
  i1506.m_PhysicalUnit = i1507[7]
  i1506.m_FallbackScreenDPI = i1507[8]
  i1506.m_DefaultSpriteDPI = i1507[9]
  i1506.m_DynamicPixelsPerUnit = i1507[10]
  i1506.m_PresetInfoIsWorld = !!i1507[11]
  return i1506
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1508 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1509 = data
  i1508.m_IgnoreReversedGraphics = !!i1509[0]
  i1508.m_BlockingObjects = i1509[1]
  i1508.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1509[2] )
  return i1508
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i1510 = root || request.c( 'Playable.GameManager' )
  var i1511 = data
  i1510._totalEvent = i1511[0]
  i1510._endTime = i1511[1]
  request.r(i1511[2], i1511[3], 0, i1510, '_backgroundMusic')
  request.r(i1511[4], i1511[5], 0, i1510, '_backgroundTexture')
  i1510._backgroundColor = new pc.Color(i1511[6], i1511[7], i1511[8], i1511[9])
  request.r(i1511[10], i1511[11], 0, i1510, '_progressCount')
  request.r(i1511[12], i1511[13], 0, i1510, '_txtCount')
  request.r(i1511[14], i1511[15], 0, i1510, '_txtTime')
  var i1513 = i1511[16]
  var i1512 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1513.length; i += 2) {
  request.r(i1513[i + 0], i1513[i + 1], 1, i1512, '')
  }
  i1510._btnCTA = i1512
  request.r(i1511[17], i1511[18], 0, i1510, '_objEndGame')
  request.r(i1511[19], i1511[20], 0, i1510, '_background')
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1517 = data
  i1516.cullTransparentMesh = !!i1517[0]
  return i1516
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1518 = root || request.c( 'UnityEngine.UI.Image' )
  var i1519 = data
  request.r(i1519[0], i1519[1], 0, i1518, 'm_Sprite')
  i1518.m_Type = i1519[2]
  i1518.m_PreserveAspect = !!i1519[3]
  i1518.m_FillCenter = !!i1519[4]
  i1518.m_FillMethod = i1519[5]
  i1518.m_FillAmount = i1519[6]
  i1518.m_FillClockwise = !!i1519[7]
  i1518.m_FillOrigin = i1519[8]
  i1518.m_UseSpriteMesh = !!i1519[9]
  i1518.m_PixelsPerUnitMultiplier = i1519[10]
  request.r(i1519[11], i1519[12], 0, i1518, 'm_Material')
  i1518.m_Maskable = !!i1519[13]
  i1518.m_Color = new pc.Color(i1519[14], i1519[15], i1519[16], i1519[17])
  i1518.m_RaycastTarget = !!i1519[18]
  i1518.m_RaycastPadding = new pc.Vec4( i1519[19], i1519[20], i1519[21], i1519[22] )
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

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1522 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1523 = data
  i1522.m_hasFontAssetChanged = !!i1523[0]
  request.r(i1523[1], i1523[2], 0, i1522, 'm_baseMaterial')
  i1522.m_maskOffset = new pc.Vec4( i1523[3], i1523[4], i1523[5], i1523[6] )
  i1522.m_text = i1523[7]
  i1522.m_isRightToLeft = !!i1523[8]
  request.r(i1523[9], i1523[10], 0, i1522, 'm_fontAsset')
  request.r(i1523[11], i1523[12], 0, i1522, 'm_sharedMaterial')
  var i1525 = i1523[13]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 2) {
  request.r(i1525[i + 0], i1525[i + 1], 2, i1524, '')
  }
  i1522.m_fontSharedMaterials = i1524
  request.r(i1523[14], i1523[15], 0, i1522, 'm_fontMaterial')
  var i1527 = i1523[16]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 2) {
  request.r(i1527[i + 0], i1527[i + 1], 2, i1526, '')
  }
  i1522.m_fontMaterials = i1526
  i1522.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1523[17], i1523[18], i1523[19], i1523[20])
  i1522.m_fontColor = new pc.Color(i1523[21], i1523[22], i1523[23], i1523[24])
  i1522.m_enableVertexGradient = !!i1523[25]
  i1522.m_colorMode = i1523[26]
  i1522.m_fontColorGradient = request.d('TMPro.VertexGradient', i1523[27], i1522.m_fontColorGradient)
  request.r(i1523[28], i1523[29], 0, i1522, 'm_fontColorGradientPreset')
  request.r(i1523[30], i1523[31], 0, i1522, 'm_spriteAsset')
  i1522.m_tintAllSprites = !!i1523[32]
  request.r(i1523[33], i1523[34], 0, i1522, 'm_StyleSheet')
  i1522.m_TextStyleHashCode = i1523[35]
  i1522.m_overrideHtmlColors = !!i1523[36]
  i1522.m_faceColor = UnityEngine.Color32.ConstructColor(i1523[37], i1523[38], i1523[39], i1523[40])
  i1522.m_fontSize = i1523[41]
  i1522.m_fontSizeBase = i1523[42]
  i1522.m_fontWeight = i1523[43]
  i1522.m_enableAutoSizing = !!i1523[44]
  i1522.m_fontSizeMin = i1523[45]
  i1522.m_fontSizeMax = i1523[46]
  i1522.m_fontStyle = i1523[47]
  i1522.m_HorizontalAlignment = i1523[48]
  i1522.m_VerticalAlignment = i1523[49]
  i1522.m_textAlignment = i1523[50]
  i1522.m_characterSpacing = i1523[51]
  i1522.m_wordSpacing = i1523[52]
  i1522.m_lineSpacing = i1523[53]
  i1522.m_lineSpacingMax = i1523[54]
  i1522.m_paragraphSpacing = i1523[55]
  i1522.m_charWidthMaxAdj = i1523[56]
  i1522.m_enableWordWrapping = !!i1523[57]
  i1522.m_wordWrappingRatios = i1523[58]
  i1522.m_overflowMode = i1523[59]
  request.r(i1523[60], i1523[61], 0, i1522, 'm_linkedTextComponent')
  request.r(i1523[62], i1523[63], 0, i1522, 'parentLinkedComponent')
  i1522.m_enableKerning = !!i1523[64]
  i1522.m_enableExtraPadding = !!i1523[65]
  i1522.checkPaddingRequired = !!i1523[66]
  i1522.m_isRichText = !!i1523[67]
  i1522.m_parseCtrlCharacters = !!i1523[68]
  i1522.m_isOrthographic = !!i1523[69]
  i1522.m_isCullingEnabled = !!i1523[70]
  i1522.m_horizontalMapping = i1523[71]
  i1522.m_verticalMapping = i1523[72]
  i1522.m_uvLineOffset = i1523[73]
  i1522.m_geometrySortingOrder = i1523[74]
  i1522.m_IsTextObjectScaleStatic = !!i1523[75]
  i1522.m_VertexBufferAutoSizeReduction = !!i1523[76]
  i1522.m_useMaxVisibleDescender = !!i1523[77]
  i1522.m_pageToDisplay = i1523[78]
  i1522.m_margin = new pc.Vec4( i1523[79], i1523[80], i1523[81], i1523[82] )
  i1522.m_isUsingLegacyAnimationComponent = !!i1523[83]
  i1522.m_isVolumetricText = !!i1523[84]
  request.r(i1523[85], i1523[86], 0, i1522, 'm_Material')
  i1522.m_Maskable = !!i1523[87]
  i1522.m_Color = new pc.Color(i1523[88], i1523[89], i1523[90], i1523[91])
  i1522.m_RaycastTarget = !!i1523[92]
  i1522.m_RaycastPadding = new pc.Vec4( i1523[93], i1523[94], i1523[95], i1523[96] )
  return i1522
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1530 = root || request.c( 'TMPro.VertexGradient' )
  var i1531 = data
  i1530.topLeft = new pc.Color(i1531[0], i1531[1], i1531[2], i1531[3])
  i1530.topRight = new pc.Color(i1531[4], i1531[5], i1531[6], i1531[7])
  i1530.bottomLeft = new pc.Color(i1531[8], i1531[9], i1531[10], i1531[11])
  i1530.bottomRight = new pc.Color(i1531[12], i1531[13], i1531[14], i1531[15])
  return i1530
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1532 = root || request.c( 'UnityEngine.UI.Button' )
  var i1533 = data
  i1532.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1533[0], i1532.m_OnClick)
  i1532.m_Navigation = request.d('UnityEngine.UI.Navigation', i1533[1], i1532.m_Navigation)
  i1532.m_Transition = i1533[2]
  i1532.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1533[3], i1532.m_Colors)
  i1532.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1533[4], i1532.m_SpriteState)
  i1532.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1533[5], i1532.m_AnimationTriggers)
  i1532.m_Interactable = !!i1533[6]
  request.r(i1533[7], i1533[8], 0, i1532, 'm_TargetGraphic')
  return i1532
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1534 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1535 = data
  i1534.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1535[0], i1534.m_PersistentCalls)
  return i1534
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1536 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1537 = data
  var i1539 = i1537[0]
  var i1538 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.add(request.d('UnityEngine.Events.PersistentCall', i1539[i + 0]));
  }
  i1536.m_Calls = i1538
  return i1536
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1542 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1543 = data
  request.r(i1543[0], i1543[1], 0, i1542, 'm_Target')
  i1542.m_TargetAssemblyTypeName = i1543[2]
  i1542.m_MethodName = i1543[3]
  i1542.m_Mode = i1543[4]
  i1542.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1543[5], i1542.m_Arguments)
  i1542.m_CallState = i1543[6]
  return i1542
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1544 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1545 = data
  request.r(i1545[0], i1545[1], 0, i1544, 'm_ObjectArgument')
  i1544.m_ObjectArgumentAssemblyTypeName = i1545[2]
  i1544.m_IntArgument = i1545[3]
  i1544.m_FloatArgument = i1545[4]
  i1544.m_StringArgument = i1545[5]
  i1544.m_BoolArgument = !!i1545[6]
  return i1544
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1546 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1547 = data
  i1546.m_Mode = i1547[0]
  i1546.m_WrapAround = !!i1547[1]
  request.r(i1547[2], i1547[3], 0, i1546, 'm_SelectOnUp')
  request.r(i1547[4], i1547[5], 0, i1546, 'm_SelectOnDown')
  request.r(i1547[6], i1547[7], 0, i1546, 'm_SelectOnLeft')
  request.r(i1547[8], i1547[9], 0, i1546, 'm_SelectOnRight')
  return i1546
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1548 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1549 = data
  i1548.m_NormalColor = new pc.Color(i1549[0], i1549[1], i1549[2], i1549[3])
  i1548.m_HighlightedColor = new pc.Color(i1549[4], i1549[5], i1549[6], i1549[7])
  i1548.m_PressedColor = new pc.Color(i1549[8], i1549[9], i1549[10], i1549[11])
  i1548.m_SelectedColor = new pc.Color(i1549[12], i1549[13], i1549[14], i1549[15])
  i1548.m_DisabledColor = new pc.Color(i1549[16], i1549[17], i1549[18], i1549[19])
  i1548.m_ColorMultiplier = i1549[20]
  i1548.m_FadeDuration = i1549[21]
  return i1548
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1550 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1551 = data
  request.r(i1551[0], i1551[1], 0, i1550, 'm_HighlightedSprite')
  request.r(i1551[2], i1551[3], 0, i1550, 'm_PressedSprite')
  request.r(i1551[4], i1551[5], 0, i1550, 'm_SelectedSprite')
  request.r(i1551[6], i1551[7], 0, i1550, 'm_DisabledSprite')
  return i1550
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1552 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1553 = data
  i1552.m_NormalTrigger = i1553[0]
  i1552.m_HighlightedTrigger = i1553[1]
  i1552.m_PressedTrigger = i1553[2]
  i1552.m_SelectedTrigger = i1553[3]
  i1552.m_DisabledTrigger = i1553[4]
  return i1552
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1554 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1555 = data
  i1554.m_ShowMaskGraphic = !!i1555[0]
  return i1554
}

Deserializers["Playable.GameController"] = function (request, data, root) {
  var i1556 = root || request.c( 'Playable.GameController' )
  var i1557 = data
  request.r(i1557[0], i1557[1], 0, i1556, 'skeletonAnimation')
  var i1559 = i1557[2]
  var i1558 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1559.length; i += 1) {
    i1558.add(i1559[i + 0]);
  }
  i1556._nameSkin = i1558
  request.r(i1557[3], i1557[4], 0, i1556, '_hand')
  request.r(i1557[5], i1557[6], 0, i1556, '_pos1')
  request.r(i1557[7], i1557[8], 0, i1556, '_pos2')
  request.r(i1557[9], i1557[10], 0, i1556, '_handSkeleton')
  i1556._handAnimName = i1557[11]
  i1556._handAnimDelay = i1557[12]
  i1556._handMoveDuration = i1557[13]
  request.r(i1557[14], i1557[15], 0, i1556, '_txtSub')
  request.r(i1557[16], i1557[17], 0, i1556, '_soundIntro')
  return i1556
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1562 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1563 = data
  request.r(i1563[0], i1563[1], 0, i1562, 'skeletonDataAsset')
  request.r(i1563[2], i1563[3], 0, i1562, 'additiveMaterial')
  request.r(i1563[4], i1563[5], 0, i1562, 'multiplyMaterial')
  request.r(i1563[6], i1563[7], 0, i1562, 'screenMaterial')
  i1562.forceAdditiveMaterial = !!i1563[8]
  i1562.initialSkinName = i1563[9]
  i1562.initialFlipX = !!i1563[10]
  i1562.initialFlipY = !!i1563[11]
  i1562.startingAnimation = i1563[12]
  i1562.startingLoop = !!i1563[13]
  i1562.timeScale = i1563[14]
  i1562.freeze = !!i1563[15]
  i1562.layoutScaleMode = i1563[16]
  i1562.updateWhenInvisible = i1563[17]
  i1562.allowMultipleCanvasRenderers = !!i1563[18]
  var i1565 = i1563[19]
  var i1564 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1565.length; i += 2) {
  request.r(i1565[i + 0], i1565[i + 1], 1, i1564, '')
  }
  i1562.canvasRenderers = i1564
  i1562.enableSeparatorSlots = !!i1563[20]
  i1562.updateSeparatorPartLocation = !!i1563[21]
  i1562.updateSeparatorPartScale = !!i1563[22]
  i1562.disableMeshAssignmentOnOverride = !!i1563[23]
  i1562.m_SkeletonColor = new pc.Color(i1563[24], i1563[25], i1563[26], i1563[27])
  i1562.referenceSize = new pc.Vec2( i1563[28], i1563[29] )
  i1562.pivotOffset = new pc.Vec2( i1563[30], i1563[31] )
  i1562.referenceScale = i1563[32]
  i1562.layoutScale = i1563[33]
  i1562.rectTransformSize = new pc.Vec2( i1563[34], i1563[35] )
  i1562.editReferenceRect = !!i1563[36]
  var i1567 = i1563[37]
  var i1566 = []
  for(var i = 0; i < i1567.length; i += 1) {
    i1566.push( i1567[i + 0] );
  }
  i1562.separatorSlotNames = i1566
  var i1569 = i1563[38]
  var i1568 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1569.length; i += 2) {
  request.r(i1569[i + 0], i1569[i + 1], 1, i1568, '')
  }
  i1562.separatorParts = i1568
  i1562.physicsPositionInheritanceFactor = new pc.Vec2( i1563[39], i1563[40] )
  i1562.physicsRotationInheritanceFactor = i1563[41]
  request.r(i1563[42], i1563[43], 0, i1562, 'physicsMovementRelativeTo')
  i1562.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1563[44], i1562.meshGenerator)
  i1562.updateTiming = i1563[45]
  i1562.unscaledTime = !!i1563[46]
  request.r(i1563[47], i1563[48], 0, i1562, 'm_Material')
  i1562.m_Maskable = !!i1563[49]
  i1562.m_Color = new pc.Color(i1563[50], i1563[51], i1563[52], i1563[53])
  i1562.m_RaycastTarget = !!i1563[54]
  i1562.m_RaycastPadding = new pc.Vec4( i1563[55], i1563[56], i1563[57], i1563[58] )
  return i1562
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1576 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1577 = data
  i1576.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1577[0], i1576.settings)
  return i1576
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1578 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1579 = data
  i1578.useClipping = !!i1579[0]
  i1578.zSpacing = i1579[1]
  i1578.tintBlack = !!i1579[2]
  i1578.canvasGroupCompatible = !!i1579[3]
  i1578.pmaVertexColors = !!i1579[4]
  i1578.addNormals = !!i1579[5]
  i1578.calculateTangents = !!i1579[6]
  i1578.immutableTriangles = !!i1579[7]
  return i1578
}

Deserializers["SpineEventSoundPlayer"] = function (request, data, root) {
  var i1580 = root || request.c( 'SpineEventSoundPlayer' )
  var i1581 = data
  request.r(i1581[0], i1581[1], 0, i1580, 'skeletonAnimation')
  request.r(i1581[2], i1581[3], 0, i1580, 'skeletonGraphic')
  request.r(i1581[4], i1581[5], 0, i1580, 'audioSource')
  var i1583 = i1581[6]
  var i1582 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i1583.length; i += 2) {
  request.r(i1583[i + 0], i1583[i + 1], 1, i1582, '')
  }
  i1580.audioClips = i1582
  return i1580
}

Deserializers["Playable.TargetLevel37"] = function (request, data, root) {
  var i1586 = root || request.c( 'Playable.TargetLevel37' )
  var i1587 = data
  var i1589 = i1587[0]
  var i1588 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.BoyInfo')))
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.add(request.d('Playable.BoyInfo', i1589[i + 0]));
  }
  i1586.boyInfos = i1588
  i1586._isKeepLastBoy = !!i1587[1]
  i1586._delayDeactivate = i1587[2]
  i1586._delayTime = i1587[3]
  i1586._isInteractable = !!i1587[4]
  request.r(i1587[5], i1587[6], 0, i1586, 'targetRect')
  return i1586
}

Deserializers["Playable.BoyInfo"] = function (request, data, root) {
  var i1592 = root || request.c( 'Playable.BoyInfo' )
  var i1593 = data
  i1592.Type = i1593[0]
  request.r(i1593[1], i1593[2], 0, i1592, 'Root')
  i1592.AnimInfo = request.d('Playable.AnimInfo', i1593[3], i1592.AnimInfo)
  i1592.IsClickable = !!i1593[4]
  request.r(i1593[5], i1593[6], 0, i1592, 'Sound')
  i1592.Sub = i1593[7]
  return i1592
}

Deserializers["Playable.AnimInfo"] = function (request, data, root) {
  var i1594 = root || request.c( 'Playable.AnimInfo' )
  var i1595 = data
  request.r(i1595[0], i1595[1], 0, i1594, 'Skeleton')
  request.r(i1595[2], i1595[3], 0, i1594, 'Item')
  request.r(i1595[4], i1595[5], 0, i1594, 'Meter')
  i1594.AnimDefault = i1595[6]
  var i1597 = i1595[7]
  var i1596 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.AnimStep')))
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.add(request.d('Playable.AnimStep', i1597[i + 0]));
  }
  i1594.AnimWin = i1596
  var i1599 = i1595[8]
  var i1598 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.AnimStep')))
  for(var i = 0; i < i1599.length; i += 1) {
    i1598.add(request.d('Playable.AnimStep', i1599[i + 0]));
  }
  i1594.AnimLoseSteps = i1598
  var i1601 = i1595[9]
  var i1600 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1601.length; i += 1) {
    i1600.add(i1601[i + 0]);
  }
  i1594.AnimItem = i1600
  i1594.MeterAnim = i1595[10]
  return i1594
}

Deserializers["Playable.AnimStep"] = function (request, data, root) {
  var i1604 = root || request.c( 'Playable.AnimStep' )
  var i1605 = data
  i1604.Name = i1605[0]
  i1604.IsLoop = !!i1605[1]
  return i1604
}

Deserializers["Playable.ItemLevel37"] = function (request, data, root) {
  var i1606 = root || request.c( 'Playable.ItemLevel37' )
  var i1607 = data
  i1606._targetType = i1607[0]
  i1606._isHaveAnim = !!i1607[1]
  i1606._nameSkin = i1607[2]
  request.r(i1607[3], i1607[4], 0, i1606, '_objActive')
  var i1609 = i1607[5]
  var i1608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1609.length; i += 2) {
  request.r(i1609[i + 0], i1609[i + 1], 1, i1608, '')
  }
  i1606._objsDisabled = i1608
  i1606._isTriggerOnDragOut = !!i1607[6]
  request.r(i1607[7], i1607[8], 0, i1606, '_dragOutTarget')
  i1606._isInteractable = !!i1607[9]
  i1606.returnDuration = i1607[10]
  request.r(i1607[11], i1607[12], 0, i1606, 'itemRect')
  request.r(i1607[13], i1607[14], 0, i1606, 'pressSound')
  return i1606
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1612 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1613 = data
  i1612.targetIsSelf = !!i1613[0]
  request.r(i1613[1], i1613[2], 0, i1612, 'targetGO')
  i1612.tweenTargetIsTargetGO = !!i1613[3]
  i1612.delay = i1613[4]
  i1612.duration = i1613[5]
  i1612.easeType = i1613[6]
  i1612.easeCurve = new pc.AnimationCurve( { keys_flow: i1613[7] } )
  i1612.loopType = i1613[8]
  i1612.loops = i1613[9]
  i1612.id = i1613[10]
  i1612.isRelative = !!i1613[11]
  i1612.isFrom = !!i1613[12]
  i1612.isIndependentUpdate = !!i1613[13]
  i1612.autoKill = !!i1613[14]
  i1612.autoGenerate = !!i1613[15]
  i1612.isActive = !!i1613[16]
  i1612.isValid = !!i1613[17]
  request.r(i1613[18], i1613[19], 0, i1612, 'target')
  i1612.animationType = i1613[20]
  i1612.targetType = i1613[21]
  i1612.forcedTargetType = i1613[22]
  i1612.autoPlay = !!i1613[23]
  i1612.useTargetAsV3 = !!i1613[24]
  i1612.endValueFloat = i1613[25]
  i1612.endValueV3 = new pc.Vec3( i1613[26], i1613[27], i1613[28] )
  i1612.endValueV2 = new pc.Vec2( i1613[29], i1613[30] )
  i1612.endValueColor = new pc.Color(i1613[31], i1613[32], i1613[33], i1613[34])
  i1612.endValueString = i1613[35]
  i1612.endValueRect = UnityEngine.Rect.MinMaxRect(i1613[36], i1613[37], i1613[38], i1613[39])
  request.r(i1613[40], i1613[41], 0, i1612, 'endValueTransform')
  i1612.optionalBool0 = !!i1613[42]
  i1612.optionalBool1 = !!i1613[43]
  i1612.optionalFloat0 = i1613[44]
  i1612.optionalInt0 = i1613[45]
  i1612.optionalRotationMode = i1613[46]
  i1612.optionalScrambleMode = i1613[47]
  i1612.optionalShakeRandomnessMode = i1613[48]
  i1612.optionalString = i1613[49]
  i1612.updateType = i1613[50]
  i1612.isSpeedBased = !!i1613[51]
  i1612.hasOnStart = !!i1613[52]
  i1612.hasOnPlay = !!i1613[53]
  i1612.hasOnUpdate = !!i1613[54]
  i1612.hasOnStepComplete = !!i1613[55]
  i1612.hasOnComplete = !!i1613[56]
  i1612.hasOnTweenCreated = !!i1613[57]
  i1612.hasOnRewind = !!i1613[58]
  i1612.onStart = request.d('UnityEngine.Events.UnityEvent', i1613[59], i1612.onStart)
  i1612.onPlay = request.d('UnityEngine.Events.UnityEvent', i1613[60], i1612.onPlay)
  i1612.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1613[61], i1612.onUpdate)
  i1612.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1613[62], i1612.onStepComplete)
  i1612.onComplete = request.d('UnityEngine.Events.UnityEvent', i1613[63], i1612.onComplete)
  i1612.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1613[64], i1612.onTweenCreated)
  i1612.onRewind = request.d('UnityEngine.Events.UnityEvent', i1613[65], i1612.onRewind)
  return i1612
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1615 = data
  i1614.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1615[0], i1614.m_PersistentCalls)
  return i1614
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i1616 = root || request.c( 'Playable.AudioManager' )
  var i1617 = data
  request.r(i1617[0], i1617[1], 0, i1616, '_audioMusic')
  request.r(i1617[2], i1617[3], 0, i1616, '_audioSound')
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1619 = data
  i1618.ambientIntensity = i1619[0]
  i1618.reflectionIntensity = i1619[1]
  i1618.ambientMode = i1619[2]
  i1618.ambientLight = new pc.Color(i1619[3], i1619[4], i1619[5], i1619[6])
  i1618.ambientSkyColor = new pc.Color(i1619[7], i1619[8], i1619[9], i1619[10])
  i1618.ambientGroundColor = new pc.Color(i1619[11], i1619[12], i1619[13], i1619[14])
  i1618.ambientEquatorColor = new pc.Color(i1619[15], i1619[16], i1619[17], i1619[18])
  i1618.fogColor = new pc.Color(i1619[19], i1619[20], i1619[21], i1619[22])
  i1618.fogEndDistance = i1619[23]
  i1618.fogStartDistance = i1619[24]
  i1618.fogDensity = i1619[25]
  i1618.fog = !!i1619[26]
  request.r(i1619[27], i1619[28], 0, i1618, 'skybox')
  i1618.fogMode = i1619[29]
  var i1621 = i1619[30]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1621[i + 0]) );
  }
  i1618.lightmaps = i1620
  i1618.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1619[31], i1618.lightProbes)
  i1618.lightmapsMode = i1619[32]
  i1618.mixedBakeMode = i1619[33]
  i1618.environmentLightingMode = i1619[34]
  i1618.ambientProbe = new pc.SphericalHarmonicsL2(i1619[35])
  request.r(i1619[36], i1619[37], 0, i1618, 'customReflection')
  request.r(i1619[38], i1619[39], 0, i1618, 'defaultReflection')
  i1618.defaultReflectionMode = i1619[40]
  i1618.defaultReflectionResolution = i1619[41]
  i1618.sunLightObjectId = i1619[42]
  i1618.pixelLightCount = i1619[43]
  i1618.defaultReflectionHDR = !!i1619[44]
  i1618.hasLightDataAsset = !!i1619[45]
  i1618.hasManualGenerate = !!i1619[46]
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1625 = data
  request.r(i1625[0], i1625[1], 0, i1624, 'lightmapColor')
  request.r(i1625[2], i1625[3], 0, i1624, 'lightmapDirection')
  request.r(i1625[4], i1625[5], 0, i1624, 'shadowMask')
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1626 = root || new UnityEngine.LightProbes()
  var i1627 = data
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1635 = data
  var i1637 = i1635[0]
  var i1636 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1637[i + 0]));
  }
  i1634.ShaderCompilationErrors = i1636
  i1634.name = i1635[1]
  i1634.guid = i1635[2]
  var i1639 = i1635[3]
  var i1638 = []
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.push( i1639[i + 0] );
  }
  i1634.shaderDefinedKeywords = i1638
  var i1641 = i1635[4]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 1) {
    i1640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1641[i + 0]) );
  }
  i1634.passes = i1640
  var i1643 = i1635[5]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1643[i + 0]) );
  }
  i1634.usePasses = i1642
  var i1645 = i1635[6]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1645[i + 0]) );
  }
  i1634.defaultParameterValues = i1644
  request.r(i1635[7], i1635[8], 0, i1634, 'unityFallbackShader')
  i1634.readDepth = !!i1635[9]
  i1634.hasDepthOnlyPass = !!i1635[10]
  i1634.isCreatedByShaderGraph = !!i1635[11]
  i1634.disableBatching = !!i1635[12]
  i1634.compiled = !!i1635[13]
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1649 = data
  i1648.shaderName = i1649[0]
  i1648.errorMessage = i1649[1]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1652 = root || new pc.UnityShaderPass()
  var i1653 = data
  i1652.id = i1653[0]
  i1652.subShaderIndex = i1653[1]
  i1652.name = i1653[2]
  i1652.passType = i1653[3]
  i1652.grabPassTextureName = i1653[4]
  i1652.usePass = !!i1653[5]
  i1652.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[6], i1652.zTest)
  i1652.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[7], i1652.zWrite)
  i1652.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[8], i1652.culling)
  i1652.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1653[9], i1652.blending)
  i1652.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1653[10], i1652.alphaBlending)
  i1652.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[11], i1652.colorWriteMask)
  i1652.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[12], i1652.offsetUnits)
  i1652.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[13], i1652.offsetFactor)
  i1652.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[14], i1652.stencilRef)
  i1652.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[15], i1652.stencilReadMask)
  i1652.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1653[16], i1652.stencilWriteMask)
  i1652.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1653[17], i1652.stencilOp)
  i1652.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1653[18], i1652.stencilOpFront)
  i1652.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1653[19], i1652.stencilOpBack)
  var i1655 = i1653[20]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1655[i + 0]) );
  }
  i1652.tags = i1654
  var i1657 = i1653[21]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.push( i1657[i + 0] );
  }
  i1652.passDefinedKeywords = i1656
  var i1659 = i1653[22]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1659[i + 0]) );
  }
  i1652.passDefinedKeywordGroups = i1658
  var i1661 = i1653[23]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1661[i + 0]) );
  }
  i1652.variants = i1660
  var i1663 = i1653[24]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1663[i + 0]) );
  }
  i1652.excludedVariants = i1662
  i1652.hasDepthReader = !!i1653[25]
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1665 = data
  i1664.val = i1665[0]
  i1664.name = i1665[1]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1667 = data
  i1666.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1667[0], i1666.src)
  i1666.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1667[1], i1666.dst)
  i1666.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1667[2], i1666.op)
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1669 = data
  i1668.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1669[0], i1668.pass)
  i1668.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1669[1], i1668.fail)
  i1668.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1669[2], i1668.zFail)
  i1668.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1669[3], i1668.comp)
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1673 = data
  i1672.name = i1673[0]
  i1672.value = i1673[1]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1677 = data
  var i1679 = i1677[0]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.push( i1679[i + 0] );
  }
  i1676.keywords = i1678
  i1676.hasDiscard = !!i1677[1]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1683 = data
  i1682.passId = i1683[0]
  i1682.subShaderIndex = i1683[1]
  var i1685 = i1683[2]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( i1685[i + 0] );
  }
  i1682.keywords = i1684
  i1682.vertexProgram = i1683[3]
  i1682.fragmentProgram = i1683[4]
  i1682.exportedForWebGl2 = !!i1683[5]
  i1682.readDepth = !!i1683[6]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1689 = data
  request.r(i1689[0], i1689[1], 0, i1688, 'shader')
  i1688.pass = i1689[2]
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1693 = data
  i1692.name = i1693[0]
  i1692.type = i1693[1]
  i1692.value = new pc.Vec4( i1693[2], i1693[3], i1693[4], i1693[5] )
  i1692.textureValue = i1693[6]
  i1692.shaderPropertyFlag = i1693[7]
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1695 = data
  i1694.name = i1695[0]
  request.r(i1695[1], i1695[2], 0, i1694, 'texture')
  i1694.aabb = i1695[3]
  i1694.vertices = i1695[4]
  i1694.triangles = i1695[5]
  i1694.textureRect = UnityEngine.Rect.MinMaxRect(i1695[6], i1695[7], i1695[8], i1695[9])
  i1694.packedRect = UnityEngine.Rect.MinMaxRect(i1695[10], i1695[11], i1695[12], i1695[13])
  i1694.border = new pc.Vec4( i1695[14], i1695[15], i1695[16], i1695[17] )
  i1694.transparency = i1695[18]
  i1694.bounds = i1695[19]
  i1694.pixelsPerUnit = i1695[20]
  i1694.textureWidth = i1695[21]
  i1694.textureHeight = i1695[22]
  i1694.nativeSize = new pc.Vec2( i1695[23], i1695[24] )
  i1694.pivot = new pc.Vec2( i1695[25], i1695[26] )
  i1694.textureRectOffset = new pc.Vec2( i1695[27], i1695[28] )
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1697 = data
  i1696.name = i1697[0]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1699 = data
  i1698.name = i1699[0]
  i1698.ascent = i1699[1]
  i1698.originalLineHeight = i1699[2]
  i1698.fontSize = i1699[3]
  var i1701 = i1699[4]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1701[i + 0]) );
  }
  i1698.characterInfo = i1700
  request.r(i1699[5], i1699[6], 0, i1698, 'texture')
  i1698.originalFontSize = i1699[7]
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1705 = data
  i1704.index = i1705[0]
  i1704.advance = i1705[1]
  i1704.bearing = i1705[2]
  i1704.glyphWidth = i1705[3]
  i1704.glyphHeight = i1705[4]
  i1704.minX = i1705[5]
  i1704.maxX = i1705[6]
  i1704.minY = i1705[7]
  i1704.maxY = i1705[8]
  i1704.uvBottomLeftX = i1705[9]
  i1704.uvBottomLeftY = i1705[10]
  i1704.uvBottomRightX = i1705[11]
  i1704.uvBottomRightY = i1705[12]
  i1704.uvTopLeftX = i1705[13]
  i1704.uvTopLeftY = i1705[14]
  i1704.uvTopRightX = i1705[15]
  i1704.uvTopRightY = i1705[16]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1707 = data
  i1706.name = i1707[0]
  i1706.bytes64 = i1707[1]
  i1706.data = i1707[2]
  return i1706
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1708 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1709 = data
  request.r(i1709[0], i1709[1], 0, i1708, 'atlas')
  i1708.normalStyle = i1709[2]
  i1708.normalSpacingOffset = i1709[3]
  i1708.boldStyle = i1709[4]
  i1708.boldSpacing = i1709[5]
  i1708.italicStyle = i1709[6]
  i1708.tabSize = i1709[7]
  i1708.hashCode = i1709[8]
  request.r(i1709[9], i1709[10], 0, i1708, 'material')
  i1708.materialHashCode = i1709[11]
  i1708.m_Version = i1709[12]
  i1708.m_SourceFontFileGUID = i1709[13]
  request.r(i1709[14], i1709[15], 0, i1708, 'm_SourceFontFile_EditorRef')
  request.r(i1709[16], i1709[17], 0, i1708, 'm_SourceFontFile')
  i1708.m_AtlasPopulationMode = i1709[18]
  i1708.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1709[19], i1708.m_FaceInfo)
  var i1711 = i1709[20]
  var i1710 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.add(request.d('UnityEngine.TextCore.Glyph', i1711[i + 0]));
  }
  i1708.m_GlyphTable = i1710
  var i1713 = i1709[21]
  var i1712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1713.length; i += 1) {
    i1712.add(request.d('TMPro.TMP_Character', i1713[i + 0]));
  }
  i1708.m_CharacterTable = i1712
  var i1715 = i1709[22]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 2) {
  request.r(i1715[i + 0], i1715[i + 1], 2, i1714, '')
  }
  i1708.m_AtlasTextures = i1714
  i1708.m_AtlasTextureIndex = i1709[23]
  i1708.m_IsMultiAtlasTexturesEnabled = !!i1709[24]
  i1708.m_ClearDynamicDataOnBuild = !!i1709[25]
  var i1717 = i1709[26]
  var i1716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.add(request.d('UnityEngine.TextCore.GlyphRect', i1717[i + 0]));
  }
  i1708.m_UsedGlyphRects = i1716
  var i1719 = i1709[27]
  var i1718 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.add(request.d('UnityEngine.TextCore.GlyphRect', i1719[i + 0]));
  }
  i1708.m_FreeGlyphRects = i1718
  i1708.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1709[28], i1708.m_fontInfo)
  i1708.m_AtlasWidth = i1709[29]
  i1708.m_AtlasHeight = i1709[30]
  i1708.m_AtlasPadding = i1709[31]
  i1708.m_AtlasRenderMode = i1709[32]
  var i1721 = i1709[33]
  var i1720 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1721.length; i += 1) {
    i1720.add(request.d('TMPro.TMP_Glyph', i1721[i + 0]));
  }
  i1708.m_glyphInfoList = i1720
  i1708.m_KerningTable = request.d('TMPro.KerningTable', i1709[34], i1708.m_KerningTable)
  i1708.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1709[35], i1708.m_FontFeatureTable)
  var i1723 = i1709[36]
  var i1722 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1723.length; i += 2) {
  request.r(i1723[i + 0], i1723[i + 1], 1, i1722, '')
  }
  i1708.fallbackFontAssets = i1722
  var i1725 = i1709[37]
  var i1724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1725.length; i += 2) {
  request.r(i1725[i + 0], i1725[i + 1], 1, i1724, '')
  }
  i1708.m_FallbackFontAssetTable = i1724
  i1708.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1709[38], i1708.m_CreationSettings)
  var i1727 = i1709[39]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( request.d('TMPro.TMP_FontWeightPair', i1727[i + 0]) );
  }
  i1708.m_FontWeightTable = i1726
  var i1729 = i1709[40]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( request.d('TMPro.TMP_FontWeightPair', i1729[i + 0]) );
  }
  i1708.fontWeights = i1728
  return i1708
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1730 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1731 = data
  i1730.m_FaceIndex = i1731[0]
  i1730.m_FamilyName = i1731[1]
  i1730.m_StyleName = i1731[2]
  i1730.m_PointSize = i1731[3]
  i1730.m_Scale = i1731[4]
  i1730.m_UnitsPerEM = i1731[5]
  i1730.m_LineHeight = i1731[6]
  i1730.m_AscentLine = i1731[7]
  i1730.m_CapLine = i1731[8]
  i1730.m_MeanLine = i1731[9]
  i1730.m_Baseline = i1731[10]
  i1730.m_DescentLine = i1731[11]
  i1730.m_SuperscriptOffset = i1731[12]
  i1730.m_SuperscriptSize = i1731[13]
  i1730.m_SubscriptOffset = i1731[14]
  i1730.m_SubscriptSize = i1731[15]
  i1730.m_UnderlineOffset = i1731[16]
  i1730.m_UnderlineThickness = i1731[17]
  i1730.m_StrikethroughOffset = i1731[18]
  i1730.m_StrikethroughThickness = i1731[19]
  i1730.m_TabWidth = i1731[20]
  return i1730
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1734 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1735 = data
  i1734.m_Index = i1735[0]
  i1734.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1735[1], i1734.m_Metrics)
  i1734.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1735[2], i1734.m_GlyphRect)
  i1734.m_Scale = i1735[3]
  i1734.m_AtlasIndex = i1735[4]
  i1734.m_ClassDefinitionType = i1735[5]
  return i1734
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1736 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1737 = data
  i1736.m_Width = i1737[0]
  i1736.m_Height = i1737[1]
  i1736.m_HorizontalBearingX = i1737[2]
  i1736.m_HorizontalBearingY = i1737[3]
  i1736.m_HorizontalAdvance = i1737[4]
  return i1736
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1738 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1739 = data
  i1738.m_X = i1739[0]
  i1738.m_Y = i1739[1]
  i1738.m_Width = i1739[2]
  i1738.m_Height = i1739[3]
  return i1738
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1742 = root || request.c( 'TMPro.TMP_Character' )
  var i1743 = data
  i1742.m_ElementType = i1743[0]
  i1742.m_Unicode = i1743[1]
  i1742.m_GlyphIndex = i1743[2]
  i1742.m_Scale = i1743[3]
  return i1742
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1748 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1749 = data
  i1748.Name = i1749[0]
  i1748.PointSize = i1749[1]
  i1748.Scale = i1749[2]
  i1748.CharacterCount = i1749[3]
  i1748.LineHeight = i1749[4]
  i1748.Baseline = i1749[5]
  i1748.Ascender = i1749[6]
  i1748.CapHeight = i1749[7]
  i1748.Descender = i1749[8]
  i1748.CenterLine = i1749[9]
  i1748.SuperscriptOffset = i1749[10]
  i1748.SubscriptOffset = i1749[11]
  i1748.SubSize = i1749[12]
  i1748.Underline = i1749[13]
  i1748.UnderlineThickness = i1749[14]
  i1748.strikethrough = i1749[15]
  i1748.strikethroughThickness = i1749[16]
  i1748.TabWidth = i1749[17]
  i1748.Padding = i1749[18]
  i1748.AtlasWidth = i1749[19]
  i1748.AtlasHeight = i1749[20]
  return i1748
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1752 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1753 = data
  i1752.id = i1753[0]
  i1752.x = i1753[1]
  i1752.y = i1753[2]
  i1752.width = i1753[3]
  i1752.height = i1753[4]
  i1752.xOffset = i1753[5]
  i1752.yOffset = i1753[6]
  i1752.xAdvance = i1753[7]
  i1752.scale = i1753[8]
  return i1752
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1754 = root || request.c( 'TMPro.KerningTable' )
  var i1755 = data
  var i1757 = i1755[0]
  var i1756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.add(request.d('TMPro.KerningPair', i1757[i + 0]));
  }
  i1754.kerningPairs = i1756
  return i1754
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1760 = root || request.c( 'TMPro.KerningPair' )
  var i1761 = data
  i1760.xOffset = i1761[0]
  i1760.m_FirstGlyph = i1761[1]
  i1760.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1761[2], i1760.m_FirstGlyphAdjustments)
  i1760.m_SecondGlyph = i1761[3]
  i1760.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1761[4], i1760.m_SecondGlyphAdjustments)
  i1760.m_IgnoreSpacingAdjustments = !!i1761[5]
  return i1760
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1762 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1763 = data
  var i1765 = i1763[0]
  var i1764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1765[i + 0]));
  }
  i1762.m_GlyphPairAdjustmentRecords = i1764
  return i1762
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1768 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1769 = data
  i1768.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1769[0], i1768.m_FirstAdjustmentRecord)
  i1768.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1769[1], i1768.m_SecondAdjustmentRecord)
  i1768.m_FeatureLookupFlags = i1769[2]
  return i1768
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1772 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1773 = data
  i1772.sourceFontFileName = i1773[0]
  i1772.sourceFontFileGUID = i1773[1]
  i1772.pointSizeSamplingMode = i1773[2]
  i1772.pointSize = i1773[3]
  i1772.padding = i1773[4]
  i1772.packingMode = i1773[5]
  i1772.atlasWidth = i1773[6]
  i1772.atlasHeight = i1773[7]
  i1772.characterSetSelectionMode = i1773[8]
  i1772.characterSequence = i1773[9]
  i1772.referencedFontAssetGUID = i1773[10]
  i1772.referencedTextAssetGUID = i1773[11]
  i1772.fontStyle = i1773[12]
  i1772.fontStyleModifier = i1773[13]
  i1772.renderMode = i1773[14]
  i1772.includeFontFeatures = !!i1773[15]
  return i1772
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1776 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1777 = data
  request.r(i1777[0], i1777[1], 0, i1776, 'regularTypeface')
  request.r(i1777[2], i1777[3], 0, i1776, 'italicTypeface')
  return i1776
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1778 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1779 = data
  var i1781 = i1779[0]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 2) {
  request.r(i1781[i + 0], i1781[i + 1], 2, i1780, '')
  }
  i1778.atlasAssets = i1780
  i1778.scale = i1779[1]
  request.r(i1779[2], i1779[3], 0, i1778, 'skeletonJSON')
  i1778.isUpgradingBlendModeMaterials = !!i1779[4]
  i1778.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1779[5], i1778.blendModeMaterials)
  var i1783 = i1779[6]
  var i1782 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1783.length; i += 2) {
  request.r(i1783[i + 0], i1783[i + 1], 1, i1782, '')
  }
  i1778.skeletonDataModifiers = i1782
  var i1785 = i1779[7]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( i1785[i + 0] );
  }
  i1778.fromAnimation = i1784
  var i1787 = i1779[8]
  var i1786 = []
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.push( i1787[i + 0] );
  }
  i1778.toAnimation = i1786
  i1778.duration = i1779[9]
  i1778.defaultMix = i1779[10]
  request.r(i1779[11], i1779[12], 0, i1778, 'controller')
  return i1778
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1790 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1791 = data
  i1790.applyAdditiveMaterial = !!i1791[0]
  var i1793 = i1791[1]
  var i1792 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1793[i + 0]));
  }
  i1790.additiveMaterials = i1792
  var i1795 = i1791[2]
  var i1794 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1795.length; i += 1) {
    i1794.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1795[i + 0]));
  }
  i1790.multiplyMaterials = i1794
  var i1797 = i1791[3]
  var i1796 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1797[i + 0]));
  }
  i1790.screenMaterials = i1796
  i1790.requiresBlendModeMaterials = !!i1791[4]
  return i1790
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1800 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1801 = data
  i1800.pageName = i1801[0]
  request.r(i1801[1], i1801[2], 0, i1800, 'material')
  return i1800
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1804 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1805 = data
  request.r(i1805[0], i1805[1], 0, i1804, 'atlasFile')
  var i1807 = i1805[2]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 2) {
  request.r(i1807[i + 0], i1807[i + 1], 2, i1806, '')
  }
  i1804.materials = i1806
  i1804.textureLoadingMode = i1805[3]
  request.r(i1805[4], i1805[5], 0, i1804, 'onDemandTextureLoader')
  return i1804
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1808 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1809 = data
  i1808.useSafeMode = !!i1809[0]
  i1808.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1809[1], i1808.safeModeOptions)
  i1808.timeScale = i1809[2]
  i1808.unscaledTimeScale = i1809[3]
  i1808.useSmoothDeltaTime = !!i1809[4]
  i1808.maxSmoothUnscaledTime = i1809[5]
  i1808.rewindCallbackMode = i1809[6]
  i1808.showUnityEditorReport = !!i1809[7]
  i1808.logBehaviour = i1809[8]
  i1808.drawGizmos = !!i1809[9]
  i1808.defaultRecyclable = !!i1809[10]
  i1808.defaultAutoPlay = i1809[11]
  i1808.defaultUpdateType = i1809[12]
  i1808.defaultTimeScaleIndependent = !!i1809[13]
  i1808.defaultEaseType = i1809[14]
  i1808.defaultEaseOvershootOrAmplitude = i1809[15]
  i1808.defaultEasePeriod = i1809[16]
  i1808.defaultAutoKill = !!i1809[17]
  i1808.defaultLoopType = i1809[18]
  i1808.debugMode = !!i1809[19]
  i1808.debugStoreTargetId = !!i1809[20]
  i1808.showPreviewPanel = !!i1809[21]
  i1808.storeSettingsLocation = i1809[22]
  i1808.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1809[23], i1808.modules)
  i1808.createASMDEF = !!i1809[24]
  i1808.showPlayingTweens = !!i1809[25]
  i1808.showPausedTweens = !!i1809[26]
  return i1808
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1810 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1811 = data
  i1810.logBehaviour = i1811[0]
  i1810.nestedTweenFailureBehaviour = i1811[1]
  return i1810
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1812 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1813 = data
  i1812.showPanel = !!i1813[0]
  i1812.audioEnabled = !!i1813[1]
  i1812.physicsEnabled = !!i1813[2]
  i1812.physics2DEnabled = !!i1813[3]
  i1812.spriteEnabled = !!i1813[4]
  i1812.uiEnabled = !!i1813[5]
  i1812.textMeshProEnabled = !!i1813[6]
  i1812.tk2DEnabled = !!i1813[7]
  i1812.deAudioEnabled = !!i1813[8]
  i1812.deUnityExtendedEnabled = !!i1813[9]
  i1812.epoOutlineEnabled = !!i1813[10]
  return i1812
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1814 = root || request.c( 'TMPro.TMP_Settings' )
  var i1815 = data
  i1814.m_enableWordWrapping = !!i1815[0]
  i1814.m_enableKerning = !!i1815[1]
  i1814.m_enableExtraPadding = !!i1815[2]
  i1814.m_enableTintAllSprites = !!i1815[3]
  i1814.m_enableParseEscapeCharacters = !!i1815[4]
  i1814.m_EnableRaycastTarget = !!i1815[5]
  i1814.m_GetFontFeaturesAtRuntime = !!i1815[6]
  i1814.m_missingGlyphCharacter = i1815[7]
  i1814.m_warningsDisabled = !!i1815[8]
  request.r(i1815[9], i1815[10], 0, i1814, 'm_defaultFontAsset')
  i1814.m_defaultFontAssetPath = i1815[11]
  i1814.m_defaultFontSize = i1815[12]
  i1814.m_defaultAutoSizeMinRatio = i1815[13]
  i1814.m_defaultAutoSizeMaxRatio = i1815[14]
  i1814.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1815[15], i1815[16] )
  i1814.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1815[17], i1815[18] )
  i1814.m_autoSizeTextContainer = !!i1815[19]
  i1814.m_IsTextObjectScaleStatic = !!i1815[20]
  var i1817 = i1815[21]
  var i1816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1817.length; i += 2) {
  request.r(i1817[i + 0], i1817[i + 1], 1, i1816, '')
  }
  i1814.m_fallbackFontAssets = i1816
  i1814.m_matchMaterialPreset = !!i1815[22]
  request.r(i1815[23], i1815[24], 0, i1814, 'm_defaultSpriteAsset')
  i1814.m_defaultSpriteAssetPath = i1815[25]
  i1814.m_enableEmojiSupport = !!i1815[26]
  i1814.m_MissingCharacterSpriteUnicode = i1815[27]
  i1814.m_defaultColorGradientPresetsPath = i1815[28]
  request.r(i1815[29], i1815[30], 0, i1814, 'm_defaultStyleSheet')
  i1814.m_StyleSheetsResourcePath = i1815[31]
  request.r(i1815[32], i1815[33], 0, i1814, 'm_leadingCharacters')
  request.r(i1815[34], i1815[35], 0, i1814, 'm_followingCharacters')
  i1814.m_UseModernHangulLineBreakingRules = !!i1815[36]
  return i1814
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1818 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1819 = data
  i1818.m_GlyphIndex = i1819[0]
  i1818.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1819[1], i1818.m_GlyphValueRecord)
  return i1818
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1820 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1821 = data
  i1820.m_XPlacement = i1821[0]
  i1820.m_YPlacement = i1821[1]
  i1820.m_XAdvance = i1821[2]
  i1820.m_YAdvance = i1821[3]
  return i1820
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1822 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1823 = data
  request.r(i1823[0], i1823[1], 0, i1822, 'spriteSheet')
  var i1825 = i1823[2]
  var i1824 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.add(request.d('TMPro.TMP_Sprite', i1825[i + 0]));
  }
  i1822.spriteInfoList = i1824
  var i1827 = i1823[3]
  var i1826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1827.length; i += 2) {
  request.r(i1827[i + 0], i1827[i + 1], 1, i1826, '')
  }
  i1822.fallbackSpriteAssets = i1826
  i1822.hashCode = i1823[4]
  request.r(i1823[5], i1823[6], 0, i1822, 'material')
  i1822.materialHashCode = i1823[7]
  i1822.m_Version = i1823[8]
  i1822.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1823[9], i1822.m_FaceInfo)
  var i1829 = i1823[10]
  var i1828 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.add(request.d('TMPro.TMP_SpriteCharacter', i1829[i + 0]));
  }
  i1822.m_SpriteCharacterTable = i1828
  var i1831 = i1823[11]
  var i1830 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.add(request.d('TMPro.TMP_SpriteGlyph', i1831[i + 0]));
  }
  i1822.m_SpriteGlyphTable = i1830
  return i1822
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1834 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1835 = data
  i1834.name = i1835[0]
  i1834.hashCode = i1835[1]
  i1834.unicode = i1835[2]
  i1834.pivot = new pc.Vec2( i1835[3], i1835[4] )
  request.r(i1835[5], i1835[6], 0, i1834, 'sprite')
  i1834.id = i1835[7]
  i1834.x = i1835[8]
  i1834.y = i1835[9]
  i1834.width = i1835[10]
  i1834.height = i1835[11]
  i1834.xOffset = i1835[12]
  i1834.yOffset = i1835[13]
  i1834.xAdvance = i1835[14]
  i1834.scale = i1835[15]
  return i1834
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1840 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1841 = data
  i1840.m_Name = i1841[0]
  i1840.m_HashCode = i1841[1]
  i1840.m_ElementType = i1841[2]
  i1840.m_Unicode = i1841[3]
  i1840.m_GlyphIndex = i1841[4]
  i1840.m_Scale = i1841[5]
  return i1840
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1844 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1845 = data
  request.r(i1845[0], i1845[1], 0, i1844, 'sprite')
  i1844.m_Index = i1845[2]
  i1844.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1845[3], i1844.m_Metrics)
  i1844.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1845[4], i1844.m_GlyphRect)
  i1844.m_Scale = i1845[5]
  i1844.m_AtlasIndex = i1845[6]
  i1844.m_ClassDefinitionType = i1845[7]
  return i1844
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1846 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1847 = data
  var i1849 = i1847[0]
  var i1848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.add(request.d('TMPro.TMP_Style', i1849[i + 0]));
  }
  i1846.m_StyleList = i1848
  return i1846
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1852 = root || request.c( 'TMPro.TMP_Style' )
  var i1853 = data
  i1852.m_Name = i1853[0]
  i1852.m_HashCode = i1853[1]
  i1852.m_OpeningDefinition = i1853[2]
  i1852.m_ClosingDefinition = i1853[3]
  i1852.m_OpeningTagArray = i1853[4]
  i1852.m_ClosingTagArray = i1853[5]
  i1852.m_OpeningTagUnicodeArray = i1853[6]
  i1852.m_ClosingTagUnicodeArray = i1853[7]
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1855 = data
  var i1857 = i1855[0]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1857[i + 0]) );
  }
  i1854.files = i1856
  i1854.componentToPrefabIds = i1855[1]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1861 = data
  i1860.path = i1861[0]
  request.r(i1861[1], i1861[2], 0, i1860, 'unityObject')
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1863 = data
  var i1865 = i1863[0]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1865[i + 0]) );
  }
  i1862.scriptsExecutionOrder = i1864
  var i1867 = i1863[1]
  var i1866 = []
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1867[i + 0]) );
  }
  i1862.sortingLayers = i1866
  var i1869 = i1863[2]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1869[i + 0]) );
  }
  i1862.cullingLayers = i1868
  i1862.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1863[3], i1862.timeSettings)
  i1862.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1863[4], i1862.physicsSettings)
  i1862.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1863[5], i1862.physics2DSettings)
  i1862.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1863[6], i1862.qualitySettings)
  i1862.enableRealtimeShadows = !!i1863[7]
  i1862.enableAutoInstancing = !!i1863[8]
  i1862.enableStaticBatching = !!i1863[9]
  i1862.enableDynamicBatching = !!i1863[10]
  i1862.usePreservativeDynamicBatching = !!i1863[11]
  i1862.lightmapEncodingQuality = i1863[12]
  i1862.desiredColorSpace = i1863[13]
  var i1871 = i1863[14]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( i1871[i + 0] );
  }
  i1862.allTags = i1870
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1875 = data
  i1874.name = i1875[0]
  i1874.value = i1875[1]
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1879 = data
  i1878.id = i1879[0]
  i1878.name = i1879[1]
  i1878.value = i1879[2]
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1883 = data
  i1882.id = i1883[0]
  i1882.name = i1883[1]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1885 = data
  i1884.fixedDeltaTime = i1885[0]
  i1884.maximumDeltaTime = i1885[1]
  i1884.timeScale = i1885[2]
  i1884.maximumParticleTimestep = i1885[3]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1887 = data
  i1886.gravity = new pc.Vec3( i1887[0], i1887[1], i1887[2] )
  i1886.defaultSolverIterations = i1887[3]
  i1886.bounceThreshold = i1887[4]
  i1886.autoSyncTransforms = !!i1887[5]
  i1886.autoSimulation = !!i1887[6]
  var i1889 = i1887[7]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1889[i + 0]) );
  }
  i1886.collisionMatrix = i1888
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1893 = data
  i1892.enabled = !!i1893[0]
  i1892.layerId = i1893[1]
  i1892.otherLayerId = i1893[2]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1895 = data
  request.r(i1895[0], i1895[1], 0, i1894, 'material')
  i1894.gravity = new pc.Vec2( i1895[2], i1895[3] )
  i1894.positionIterations = i1895[4]
  i1894.velocityIterations = i1895[5]
  i1894.velocityThreshold = i1895[6]
  i1894.maxLinearCorrection = i1895[7]
  i1894.maxAngularCorrection = i1895[8]
  i1894.maxTranslationSpeed = i1895[9]
  i1894.maxRotationSpeed = i1895[10]
  i1894.baumgarteScale = i1895[11]
  i1894.baumgarteTOIScale = i1895[12]
  i1894.timeToSleep = i1895[13]
  i1894.linearSleepTolerance = i1895[14]
  i1894.angularSleepTolerance = i1895[15]
  i1894.defaultContactOffset = i1895[16]
  i1894.autoSimulation = !!i1895[17]
  i1894.queriesHitTriggers = !!i1895[18]
  i1894.queriesStartInColliders = !!i1895[19]
  i1894.callbacksOnDisable = !!i1895[20]
  i1894.reuseCollisionCallbacks = !!i1895[21]
  i1894.autoSyncTransforms = !!i1895[22]
  var i1897 = i1895[23]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1897[i + 0]) );
  }
  i1894.collisionMatrix = i1896
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1901 = data
  i1900.enabled = !!i1901[0]
  i1900.layerId = i1901[1]
  i1900.otherLayerId = i1901[2]
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1903 = data
  var i1905 = i1903[0]
  var i1904 = []
  for(var i = 0; i < i1905.length; i += 1) {
    i1904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1905[i + 0]) );
  }
  i1902.qualityLevels = i1904
  var i1907 = i1903[1]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 1) {
    i1906.push( i1907[i + 0] );
  }
  i1902.names = i1906
  i1902.shadows = i1903[2]
  i1902.anisotropicFiltering = i1903[3]
  i1902.antiAliasing = i1903[4]
  i1902.lodBias = i1903[5]
  i1902.shadowCascades = i1903[6]
  i1902.shadowDistance = i1903[7]
  i1902.shadowmaskMode = i1903[8]
  i1902.shadowProjection = i1903[9]
  i1902.shadowResolution = i1903[10]
  i1902.softParticles = !!i1903[11]
  i1902.softVegetation = !!i1903[12]
  i1902.activeColorSpace = i1903[13]
  i1902.desiredColorSpace = i1903[14]
  i1902.masterTextureLimit = i1903[15]
  i1902.maxQueuedFrames = i1903[16]
  i1902.particleRaycastBudget = i1903[17]
  i1902.pixelLightCount = i1903[18]
  i1902.realtimeReflectionProbes = !!i1903[19]
  i1902.shadowCascade2Split = i1903[20]
  i1902.shadowCascade4Split = new pc.Vec3( i1903[21], i1903[22], i1903[23] )
  i1902.streamingMipmapsActive = !!i1903[24]
  i1902.vSyncCount = i1903[25]
  i1902.asyncUploadBufferSize = i1903[26]
  i1902.asyncUploadTimeSlice = i1903[27]
  i1902.billboardsFaceCameraPosition = !!i1903[28]
  i1902.shadowNearPlaneOffset = i1903[29]
  i1902.streamingMipmapsMemoryBudget = i1903[30]
  i1902.maximumLODLevel = i1903[31]
  i1902.streamingMipmapsAddAllCameras = !!i1903[32]
  i1902.streamingMipmapsMaxLevelReduction = i1903[33]
  i1902.streamingMipmapsRenderersPerFrame = i1903[34]
  i1902.resolutionScalingFixedDPIFactor = i1903[35]
  i1902.streamingMipmapsMaxFileIORequests = i1903[36]
  i1902.currentQualityLevel = i1903[37]
  return i1902
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1910 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1911 = data
  i1910.xPlacement = i1911[0]
  i1910.yPlacement = i1911[1]
  i1910.xAdvance = i1911[2]
  i1910.yAdvance = i1911[3]
  return i1910
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[2],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[51],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[59],"67":[59],"68":[59],"69":[59],"70":[59],"71":[59],"72":[2],"73":[74],"75":[76],"77":[76],"10":[9],"28":[20],"5":[2],"78":[9],"79":[11],"80":[9],"30":[9],"29":[9],"81":[82],"83":[84],"85":[82],"86":[9],"87":[9],"12":[10],"15":[19,9],"88":[9],"11":[10],"89":[9],"90":[9],"91":[9],"92":[9],"93":[9],"94":[9],"95":[9],"24":[9],"96":[9],"97":[19,9],"98":[9],"99":[9],"100":[9],"101":[9],"102":[19,9],"103":[9],"104":[7],"105":[7],"8":[7],"106":[7],"107":[2],"108":[2],"109":[110],"111":[2],"112":[113],"114":[9],"115":[19,9],"116":[74],"26":[19,9],"117":[118,74],"119":[74],"120":[74,121],"122":[51],"123":[59],"124":[113],"125":[126],"127":[9],"128":[74,9],"16":[9,19],"129":[9],"130":[19,9],"131":[74],"132":[19,9],"133":[9],"134":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAutoSize","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Playable.GameManager","UnityEngine.AudioClip","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.UI.Mask","Playable.GameController","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","SpineEventSoundPlayer","Playable.TargetLevel37","Playable.ItemLevel37","DG.Tweening.DOTweenAnimation","Playable.AudioManager","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Item","ResponsiveCanvasScaler","Target","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "08/04/2026 10:21:04";

Deserializers.lunaDaysRunning = "6.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BMTP_V06_NgocBTU_HuyNQ";

Deserializers.lunaAppID = "38020";

Deserializers.projectId = "e0c7d7b99f381904ba55b26de53e9500";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1837";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5373";

Deserializers.runtimeAnalysisExcludedModules = "particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Minecraft-Clone";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "f07ab758-9f78-4eb1-9cd9-6290fad18ad5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

