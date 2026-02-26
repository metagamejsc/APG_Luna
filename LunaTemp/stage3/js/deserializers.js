var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1410 = root || request.c( 'UnityEngine.JointSpring' )
  var i1411 = data
  i1410.spring = i1411[0]
  i1410.damper = i1411[1]
  i1410.targetPosition = i1411[2]
  return i1410
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1412 = root || request.c( 'UnityEngine.JointMotor' )
  var i1413 = data
  i1412.m_TargetVelocity = i1413[0]
  i1412.m_Force = i1413[1]
  i1412.m_FreeSpin = i1413[2]
  return i1412
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1414 = root || request.c( 'UnityEngine.JointLimits' )
  var i1415 = data
  i1414.m_Min = i1415[0]
  i1414.m_Max = i1415[1]
  i1414.m_Bounciness = i1415[2]
  i1414.m_BounceMinVelocity = i1415[3]
  i1414.m_ContactDistance = i1415[4]
  i1414.minBounce = i1415[5]
  i1414.maxBounce = i1415[6]
  return i1414
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1416 = root || request.c( 'UnityEngine.JointDrive' )
  var i1417 = data
  i1416.m_PositionSpring = i1417[0]
  i1416.m_PositionDamper = i1417[1]
  i1416.m_MaximumForce = i1417[2]
  i1416.m_UseAcceleration = i1417[3]
  return i1416
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1418 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1419 = data
  i1418.m_Spring = i1419[0]
  i1418.m_Damper = i1419[1]
  return i1418
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1420 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1421 = data
  i1420.m_Limit = i1421[0]
  i1420.m_Bounciness = i1421[1]
  i1420.m_ContactDistance = i1421[2]
  return i1420
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1422 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1423 = data
  i1422.m_ExtremumSlip = i1423[0]
  i1422.m_ExtremumValue = i1423[1]
  i1422.m_AsymptoteSlip = i1423[2]
  i1422.m_AsymptoteValue = i1423[3]
  i1422.m_Stiffness = i1423[4]
  return i1422
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1424 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1425 = data
  i1424.m_LowerAngle = i1425[0]
  i1424.m_UpperAngle = i1425[1]
  return i1424
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1426 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1427 = data
  i1426.m_MotorSpeed = i1427[0]
  i1426.m_MaximumMotorTorque = i1427[1]
  return i1426
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1428 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1429 = data
  i1428.m_DampingRatio = i1429[0]
  i1428.m_Frequency = i1429[1]
  i1428.m_Angle = i1429[2]
  return i1428
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1430 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1431 = data
  i1430.m_LowerTranslation = i1431[0]
  i1430.m_UpperTranslation = i1431[1]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1433 = data
  i1432.name = i1433[0]
  i1432.width = i1433[1]
  i1432.height = i1433[2]
  i1432.mipmapCount = i1433[3]
  i1432.anisoLevel = i1433[4]
  i1432.filterMode = i1433[5]
  i1432.hdr = !!i1433[6]
  i1432.format = i1433[7]
  i1432.wrapMode = i1433[8]
  i1432.alphaIsTransparency = !!i1433[9]
  i1432.alphaSource = i1433[10]
  i1432.graphicsFormat = i1433[11]
  i1432.sRGBTexture = !!i1433[12]
  i1432.desiredColorSpace = i1433[13]
  i1432.wrapU = i1433[14]
  i1432.wrapV = i1433[15]
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1434 = root || new pc.UnityMaterial()
  var i1435 = data
  i1434.name = i1435[0]
  request.r(i1435[1], i1435[2], 0, i1434, 'shader')
  i1434.renderQueue = i1435[3]
  i1434.enableInstancing = !!i1435[4]
  var i1437 = i1435[5]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1437[i + 0]) );
  }
  i1434.floatParameters = i1436
  var i1439 = i1435[6]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1439[i + 0]) );
  }
  i1434.colorParameters = i1438
  var i1441 = i1435[7]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1441[i + 0]) );
  }
  i1434.vectorParameters = i1440
  var i1443 = i1435[8]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1443[i + 0]) );
  }
  i1434.textureParameters = i1442
  var i1445 = i1435[9]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1445[i + 0]) );
  }
  i1434.materialFlags = i1444
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1449 = data
  i1448.name = i1449[0]
  i1448.value = i1449[1]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1453 = data
  i1452.name = i1453[0]
  i1452.value = new pc.Color(i1453[1], i1453[2], i1453[3], i1453[4])
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1457 = data
  i1456.name = i1457[0]
  i1456.value = new pc.Vec4( i1457[1], i1457[2], i1457[3], i1457[4] )
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1461 = data
  i1460.name = i1461[0]
  request.r(i1461[1], i1461[2], 0, i1460, 'value')
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1465 = data
  i1464.name = i1465[0]
  i1464.enabled = !!i1465[1]
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1467 = data
  i1466.name = i1467[0]
  i1466.index = i1467[1]
  i1466.startup = !!i1467[2]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1469 = data
  i1468.position = new pc.Vec3( i1469[0], i1469[1], i1469[2] )
  i1468.scale = new pc.Vec3( i1469[3], i1469[4], i1469[5] )
  i1468.rotation = new pc.Quat(i1469[6], i1469[7], i1469[8], i1469[9])
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1471 = data
  i1470.aspect = i1471[0]
  i1470.orthographic = !!i1471[1]
  i1470.orthographicSize = i1471[2]
  i1470.backgroundColor = new pc.Color(i1471[3], i1471[4], i1471[5], i1471[6])
  i1470.nearClipPlane = i1471[7]
  i1470.farClipPlane = i1471[8]
  i1470.fieldOfView = i1471[9]
  i1470.depth = i1471[10]
  i1470.clearFlags = i1471[11]
  i1470.cullingMask = i1471[12]
  i1470.rect = i1471[13]
  request.r(i1471[14], i1471[15], 0, i1470, 'targetTexture')
  i1470.usePhysicalProperties = !!i1471[16]
  i1470.focalLength = i1471[17]
  i1470.sensorSize = new pc.Vec2( i1471[18], i1471[19] )
  i1470.lensShift = new pc.Vec2( i1471[20], i1471[21] )
  i1470.gateFit = i1471[22]
  i1470.commandBufferCount = i1471[23]
  i1470.cameraType = i1471[24]
  i1470.enabled = !!i1471[25]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1473 = data
  i1472.name = i1473[0]
  i1472.tagId = i1473[1]
  i1472.enabled = !!i1473[2]
  i1472.isStatic = !!i1473[3]
  i1472.layer = i1473[4]
  return i1472
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1474 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1475 = data
  request.r(i1475[0], i1475[1], 0, i1474, 'm_FirstSelected')
  i1474.m_sendNavigationEvents = !!i1475[2]
  i1474.m_DragThreshold = i1475[3]
  return i1474
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1476 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1477 = data
  i1476.m_HorizontalAxis = i1477[0]
  i1476.m_VerticalAxis = i1477[1]
  i1476.m_SubmitButton = i1477[2]
  i1476.m_CancelButton = i1477[3]
  i1476.m_InputActionsPerSecond = i1477[4]
  i1476.m_RepeatDelay = i1477[5]
  i1476.m_ForceModuleActive = !!i1477[6]
  i1476.m_SendPointerHoverToParent = !!i1477[7]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1481 = data
  i1480.planeDistance = i1481[0]
  i1480.referencePixelsPerUnit = i1481[1]
  i1480.isFallbackOverlay = !!i1481[2]
  i1480.renderMode = i1481[3]
  i1480.renderOrder = i1481[4]
  i1480.sortingLayerName = i1481[5]
  i1480.sortingOrder = i1481[6]
  i1480.scaleFactor = i1481[7]
  request.r(i1481[8], i1481[9], 0, i1480, 'worldCamera')
  i1480.overrideSorting = !!i1481[10]
  i1480.pixelPerfect = !!i1481[11]
  i1480.targetDisplay = i1481[12]
  i1480.overridePixelPerfect = !!i1481[13]
  i1480.enabled = !!i1481[14]
  return i1480
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1482 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1483 = data
  i1482.m_UiScaleMode = i1483[0]
  i1482.m_ReferencePixelsPerUnit = i1483[1]
  i1482.m_ScaleFactor = i1483[2]
  i1482.m_ReferenceResolution = new pc.Vec2( i1483[3], i1483[4] )
  i1482.m_ScreenMatchMode = i1483[5]
  i1482.m_MatchWidthOrHeight = i1483[6]
  i1482.m_PhysicalUnit = i1483[7]
  i1482.m_FallbackScreenDPI = i1483[8]
  i1482.m_DefaultSpriteDPI = i1483[9]
  i1482.m_DynamicPixelsPerUnit = i1483[10]
  i1482.m_PresetInfoIsWorld = !!i1483[11]
  return i1482
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1484 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1485 = data
  i1484.m_IgnoreReversedGraphics = !!i1485[0]
  i1484.m_BlockingObjects = i1485[1]
  i1484.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1485[2] )
  return i1484
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1486 = root || request.c( 'LunaManager' )
  var i1487 = data
  var i1489 = i1487[0]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 2) {
  request.r(i1489[i + 0], i1489[i + 1], 2, i1488, '')
  }
  i1486.lstBtnInstall = i1488
  request.r(i1487[1], i1487[2], 0, i1486, 'WinGO')
  request.r(i1487[3], i1487[4], 0, i1486, 'LoseGO')
  request.r(i1487[5], i1487[6], 0, i1486, 'StartCard')
  request.r(i1487[7], i1487[8], 0, i1486, 'EndCard')
  request.r(i1487[9], i1487[10], 0, i1486, 'Parent')
  i1486.isDrag = !!i1487[11]
  i1486.timeDrag = i1487[12]
  i1486.countPlay = i1487[13]
  i1486.countPlayFinal = i1487[14]
  i1486.countPlayMax = i1487[15]
  i1486.timeDropFinal = i1487[16]
  i1486.colorBG = new pc.Color(i1487[17], i1487[18], i1487[19], i1487[20])
  request.r(i1487[21], i1487[22], 0, i1486, 'texture2D')
  request.r(i1487[23], i1487[24], 0, i1486, 'rawImageBG')
  request.r(i1487[25], i1487[26], 0, i1486, 'mixSkeletonSkin')
  request.r(i1487[27], i1487[28], 0, i1486, 'textProgess')
  request.r(i1487[29], i1487[30], 0, i1486, 'imgProgess')
  request.r(i1487[31], i1487[32], 0, i1486, 'timeText')
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1493 = data
  i1492.cullTransparentMesh = !!i1493[0]
  return i1492
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1495 = data
  request.r(i1495[0], i1495[1], 0, i1494, 'm_Texture')
  i1494.m_UVRect = UnityEngine.Rect.MinMaxRect(i1495[2], i1495[3], i1495[4], i1495[5])
  i1494.m_Maskable = !!i1495[6]
  request.r(i1495[7], i1495[8], 0, i1494, 'm_Material')
  i1494.m_Color = new pc.Color(i1495[9], i1495[10], i1495[11], i1495[12])
  i1494.m_RaycastTarget = !!i1495[13]
  i1494.m_RaycastPadding = new pc.Vec4( i1495[14], i1495[15], i1495[16], i1495[17] )
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1497 = data
  request.r(i1497[0], i1497[1], 0, i1496, 'clip')
  request.r(i1497[2], i1497[3], 0, i1496, 'outputAudioMixerGroup')
  i1496.playOnAwake = !!i1497[4]
  i1496.loop = !!i1497[5]
  i1496.time = i1497[6]
  i1496.volume = i1497[7]
  i1496.pitch = i1497[8]
  i1496.enabled = !!i1497[9]
  return i1496
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1498 = root || request.c( 'UnityEngine.UI.Image' )
  var i1499 = data
  request.r(i1499[0], i1499[1], 0, i1498, 'm_Sprite')
  i1498.m_Type = i1499[2]
  i1498.m_PreserveAspect = !!i1499[3]
  i1498.m_FillCenter = !!i1499[4]
  i1498.m_FillMethod = i1499[5]
  i1498.m_FillAmount = i1499[6]
  i1498.m_FillClockwise = !!i1499[7]
  i1498.m_FillOrigin = i1499[8]
  i1498.m_UseSpriteMesh = !!i1499[9]
  i1498.m_PixelsPerUnitMultiplier = i1499[10]
  i1498.m_Maskable = !!i1499[11]
  request.r(i1499[12], i1499[13], 0, i1498, 'm_Material')
  i1498.m_Color = new pc.Color(i1499[14], i1499[15], i1499[16], i1499[17])
  i1498.m_RaycastTarget = !!i1499[18]
  i1498.m_RaycastPadding = new pc.Vec4( i1499[19], i1499[20], i1499[21], i1499[22] )
  return i1498
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1500 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1501 = data
  request.r(i1501[0], i1501[1], 0, i1500, 'skeletonDataAsset')
  request.r(i1501[2], i1501[3], 0, i1500, 'additiveMaterial')
  request.r(i1501[4], i1501[5], 0, i1500, 'multiplyMaterial')
  request.r(i1501[6], i1501[7], 0, i1500, 'screenMaterial')
  i1500.initialSkinName = i1501[8]
  i1500.initialFlipX = !!i1501[9]
  i1500.initialFlipY = !!i1501[10]
  i1500.startingAnimation = i1501[11]
  i1500.startingLoop = !!i1501[12]
  i1500.timeScale = i1501[13]
  i1500.freeze = !!i1501[14]
  i1500.layoutScaleMode = i1501[15]
  i1500.updateWhenInvisible = i1501[16]
  i1500.allowMultipleCanvasRenderers = !!i1501[17]
  var i1503 = i1501[18]
  var i1502 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1503.length; i += 2) {
  request.r(i1503[i + 0], i1503[i + 1], 1, i1502, '')
  }
  i1500.canvasRenderers = i1502
  i1500.enableSeparatorSlots = !!i1501[19]
  i1500.updateSeparatorPartLocation = !!i1501[20]
  i1500.updateSeparatorPartScale = !!i1501[21]
  i1500.disableMeshAssignmentOnOverride = !!i1501[22]
  i1500.referenceSize = new pc.Vec2( i1501[23], i1501[24] )
  i1500.referenceScale = i1501[25]
  i1500.rectTransformSize = new pc.Vec2( i1501[26], i1501[27] )
  i1500.editReferenceRect = !!i1501[28]
  var i1505 = i1501[29]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( i1505[i + 0] );
  }
  i1500.separatorSlotNames = i1504
  var i1507 = i1501[30]
  var i1506 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1507.length; i += 2) {
  request.r(i1507[i + 0], i1507[i + 1], 1, i1506, '')
  }
  i1500.separatorParts = i1506
  i1500.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1501[31], i1500.meshGenerator)
  i1500.updateTiming = i1501[32]
  i1500.unscaledTime = !!i1501[33]
  i1500.m_Maskable = !!i1501[34]
  request.r(i1501[35], i1501[36], 0, i1500, 'm_Material')
  i1500.m_Color = new pc.Color(i1501[37], i1501[38], i1501[39], i1501[40])
  i1500.m_RaycastTarget = !!i1501[41]
  i1500.m_RaycastPadding = new pc.Vec4( i1501[42], i1501[43], i1501[44], i1501[45] )
  return i1500
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1514 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1515 = data
  i1514.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1515[0], i1514.settings)
  return i1514
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1516 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1517 = data
  i1516.useClipping = !!i1517[0]
  i1516.zSpacing = i1517[1]
  i1516.pmaVertexColors = !!i1517[2]
  i1516.tintBlack = !!i1517[3]
  i1516.canvasGroupTintBlack = !!i1517[4]
  i1516.calculateTangents = !!i1517[5]
  i1516.addNormals = !!i1517[6]
  i1516.immutableTriangles = !!i1517[7]
  return i1516
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i1518 = root || request.c( 'MixSkeletonSkin' )
  var i1519 = data
  request.r(i1519[0], i1519[1], 0, i1518, 'skeletonAnimation')
  var i1521 = i1519[2]
  var i1520 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.add(i1521[i + 0]);
  }
  i1518.skinNames = i1520
  i1518.defaultAnim = i1519[3]
  return i1518
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1524 = root || request.c( 'DropZone' )
  var i1525 = data
  i1524.idDrop = i1525[0]
  var i1527 = i1525[1]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 2) {
  request.r(i1527[i + 0], i1527[i + 1], 2, i1526, '')
  }
  i1524.steps = i1526
  request.r(i1525[2], i1525[3], 0, i1524, 'stepLose')
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1531 = data
  i1530.usedByComposite = !!i1531[0]
  i1530.autoTiling = !!i1531[1]
  i1530.size = new pc.Vec2( i1531[2], i1531[3] )
  i1530.edgeRadius = i1531[4]
  i1530.enabled = !!i1531[5]
  i1530.isTrigger = !!i1531[6]
  i1530.usedByEffector = !!i1531[7]
  i1530.density = i1531[8]
  i1530.offset = new pc.Vec2( i1531[9], i1531[10] )
  request.r(i1531[11], i1531[12], 0, i1530, 'material')
  return i1530
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1532 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1533 = data
  i1532.targetIsSelf = !!i1533[0]
  request.r(i1533[1], i1533[2], 0, i1532, 'targetGO')
  i1532.tweenTargetIsTargetGO = !!i1533[3]
  i1532.delay = i1533[4]
  i1532.duration = i1533[5]
  i1532.easeType = i1533[6]
  i1532.easeCurve = new pc.AnimationCurve( { keys_flow: i1533[7] } )
  i1532.loopType = i1533[8]
  i1532.loops = i1533[9]
  i1532.id = i1533[10]
  i1532.isRelative = !!i1533[11]
  i1532.isFrom = !!i1533[12]
  i1532.isIndependentUpdate = !!i1533[13]
  i1532.autoKill = !!i1533[14]
  i1532.autoGenerate = !!i1533[15]
  i1532.isActive = !!i1533[16]
  i1532.isValid = !!i1533[17]
  request.r(i1533[18], i1533[19], 0, i1532, 'target')
  i1532.animationType = i1533[20]
  i1532.targetType = i1533[21]
  i1532.forcedTargetType = i1533[22]
  i1532.autoPlay = !!i1533[23]
  i1532.useTargetAsV3 = !!i1533[24]
  i1532.endValueFloat = i1533[25]
  i1532.endValueV3 = new pc.Vec3( i1533[26], i1533[27], i1533[28] )
  i1532.endValueV2 = new pc.Vec2( i1533[29], i1533[30] )
  i1532.endValueColor = new pc.Color(i1533[31], i1533[32], i1533[33], i1533[34])
  i1532.endValueString = i1533[35]
  i1532.endValueRect = UnityEngine.Rect.MinMaxRect(i1533[36], i1533[37], i1533[38], i1533[39])
  request.r(i1533[40], i1533[41], 0, i1532, 'endValueTransform')
  i1532.optionalBool0 = !!i1533[42]
  i1532.optionalBool1 = !!i1533[43]
  i1532.optionalFloat0 = i1533[44]
  i1532.optionalInt0 = i1533[45]
  i1532.optionalRotationMode = i1533[46]
  i1532.optionalScrambleMode = i1533[47]
  i1532.optionalShakeRandomnessMode = i1533[48]
  i1532.optionalString = i1533[49]
  i1532.updateType = i1533[50]
  i1532.isSpeedBased = !!i1533[51]
  i1532.hasOnStart = !!i1533[52]
  i1532.hasOnPlay = !!i1533[53]
  i1532.hasOnUpdate = !!i1533[54]
  i1532.hasOnStepComplete = !!i1533[55]
  i1532.hasOnComplete = !!i1533[56]
  i1532.hasOnTweenCreated = !!i1533[57]
  i1532.hasOnRewind = !!i1533[58]
  i1532.onStart = request.d('UnityEngine.Events.UnityEvent', i1533[59], i1532.onStart)
  i1532.onPlay = request.d('UnityEngine.Events.UnityEvent', i1533[60], i1532.onPlay)
  i1532.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1533[61], i1532.onUpdate)
  i1532.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1533[62], i1532.onStepComplete)
  i1532.onComplete = request.d('UnityEngine.Events.UnityEvent', i1533[63], i1532.onComplete)
  i1532.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1533[64], i1532.onTweenCreated)
  i1532.onRewind = request.d('UnityEngine.Events.UnityEvent', i1533[65], i1532.onRewind)
  return i1532
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1534 = root || request.c( 'UnityEngine.Events.UnityEvent' )
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

Deserializers["ClickItem"] = function (request, data, root) {
  var i1546 = root || request.c( 'ClickItem' )
  var i1547 = data
  var i1549 = i1547[0]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 2) {
  request.r(i1549[i + 0], i1549[i + 1], 2, i1548, '')
  }
  i1546.steps = i1548
  i1546.currentStep = i1547[1]
  i1546.isProcess = !!i1547[2]
  return i1546
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1550 = root || request.c( 'UnityEngine.UI.Button' )
  var i1551 = data
  i1550.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1551[0], i1550.m_OnClick)
  i1550.m_Navigation = request.d('UnityEngine.UI.Navigation', i1551[1], i1550.m_Navigation)
  i1550.m_Transition = i1551[2]
  i1550.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1551[3], i1550.m_Colors)
  i1550.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1551[4], i1550.m_SpriteState)
  i1550.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1551[5], i1550.m_AnimationTriggers)
  i1550.m_Interactable = !!i1551[6]
  request.r(i1551[7], i1551[8], 0, i1550, 'm_TargetGraphic')
  return i1550
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1552 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1553 = data
  i1552.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1553[0], i1552.m_PersistentCalls)
  return i1552
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1554 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1555 = data
  i1554.m_Mode = i1555[0]
  i1554.m_WrapAround = !!i1555[1]
  request.r(i1555[2], i1555[3], 0, i1554, 'm_SelectOnUp')
  request.r(i1555[4], i1555[5], 0, i1554, 'm_SelectOnDown')
  request.r(i1555[6], i1555[7], 0, i1554, 'm_SelectOnLeft')
  request.r(i1555[8], i1555[9], 0, i1554, 'm_SelectOnRight')
  return i1554
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1556 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1557 = data
  i1556.m_NormalColor = new pc.Color(i1557[0], i1557[1], i1557[2], i1557[3])
  i1556.m_HighlightedColor = new pc.Color(i1557[4], i1557[5], i1557[6], i1557[7])
  i1556.m_PressedColor = new pc.Color(i1557[8], i1557[9], i1557[10], i1557[11])
  i1556.m_SelectedColor = new pc.Color(i1557[12], i1557[13], i1557[14], i1557[15])
  i1556.m_DisabledColor = new pc.Color(i1557[16], i1557[17], i1557[18], i1557[19])
  i1556.m_ColorMultiplier = i1557[20]
  i1556.m_FadeDuration = i1557[21]
  return i1556
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1558 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1559 = data
  request.r(i1559[0], i1559[1], 0, i1558, 'm_HighlightedSprite')
  request.r(i1559[2], i1559[3], 0, i1558, 'm_PressedSprite')
  request.r(i1559[4], i1559[5], 0, i1558, 'm_SelectedSprite')
  request.r(i1559[6], i1559[7], 0, i1558, 'm_DisabledSprite')
  return i1558
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1560 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1561 = data
  i1560.m_NormalTrigger = i1561[0]
  i1560.m_HighlightedTrigger = i1561[1]
  i1560.m_PressedTrigger = i1561[2]
  i1560.m_SelectedTrigger = i1561[3]
  i1560.m_DisabledTrigger = i1561[4]
  return i1560
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1562 = root || request.c( 'DraggableItem' )
  var i1563 = data
  i1562.idDrag = i1563[0]
  i1562.isProcess = !!i1563[1]
  i1562.isLose = !!i1563[2]
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1565 = data
  i1564.m_Alpha = i1565[0]
  i1564.m_Interactable = !!i1565[1]
  i1564.m_BlocksRaycasts = !!i1565[2]
  i1564.m_IgnoreParentGroups = !!i1565[3]
  i1564.enabled = !!i1565[4]
  return i1564
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1566 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1567 = data
  i1566.m_hasFontAssetChanged = !!i1567[0]
  request.r(i1567[1], i1567[2], 0, i1566, 'm_baseMaterial')
  i1566.m_maskOffset = new pc.Vec4( i1567[3], i1567[4], i1567[5], i1567[6] )
  i1566.m_text = i1567[7]
  i1566.m_isRightToLeft = !!i1567[8]
  request.r(i1567[9], i1567[10], 0, i1566, 'm_fontAsset')
  request.r(i1567[11], i1567[12], 0, i1566, 'm_sharedMaterial')
  var i1569 = i1567[13]
  var i1568 = []
  for(var i = 0; i < i1569.length; i += 2) {
  request.r(i1569[i + 0], i1569[i + 1], 2, i1568, '')
  }
  i1566.m_fontSharedMaterials = i1568
  request.r(i1567[14], i1567[15], 0, i1566, 'm_fontMaterial')
  var i1571 = i1567[16]
  var i1570 = []
  for(var i = 0; i < i1571.length; i += 2) {
  request.r(i1571[i + 0], i1571[i + 1], 2, i1570, '')
  }
  i1566.m_fontMaterials = i1570
  i1566.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1567[17], i1567[18], i1567[19], i1567[20])
  i1566.m_fontColor = new pc.Color(i1567[21], i1567[22], i1567[23], i1567[24])
  i1566.m_enableVertexGradient = !!i1567[25]
  i1566.m_colorMode = i1567[26]
  i1566.m_fontColorGradient = request.d('TMPro.VertexGradient', i1567[27], i1566.m_fontColorGradient)
  request.r(i1567[28], i1567[29], 0, i1566, 'm_fontColorGradientPreset')
  request.r(i1567[30], i1567[31], 0, i1566, 'm_spriteAsset')
  i1566.m_tintAllSprites = !!i1567[32]
  request.r(i1567[33], i1567[34], 0, i1566, 'm_StyleSheet')
  i1566.m_TextStyleHashCode = i1567[35]
  i1566.m_overrideHtmlColors = !!i1567[36]
  i1566.m_faceColor = UnityEngine.Color32.ConstructColor(i1567[37], i1567[38], i1567[39], i1567[40])
  i1566.m_fontSize = i1567[41]
  i1566.m_fontSizeBase = i1567[42]
  i1566.m_fontWeight = i1567[43]
  i1566.m_enableAutoSizing = !!i1567[44]
  i1566.m_fontSizeMin = i1567[45]
  i1566.m_fontSizeMax = i1567[46]
  i1566.m_fontStyle = i1567[47]
  i1566.m_HorizontalAlignment = i1567[48]
  i1566.m_VerticalAlignment = i1567[49]
  i1566.m_textAlignment = i1567[50]
  i1566.m_characterSpacing = i1567[51]
  i1566.m_wordSpacing = i1567[52]
  i1566.m_lineSpacing = i1567[53]
  i1566.m_lineSpacingMax = i1567[54]
  i1566.m_paragraphSpacing = i1567[55]
  i1566.m_charWidthMaxAdj = i1567[56]
  i1566.m_enableWordWrapping = !!i1567[57]
  i1566.m_wordWrappingRatios = i1567[58]
  i1566.m_overflowMode = i1567[59]
  request.r(i1567[60], i1567[61], 0, i1566, 'm_linkedTextComponent')
  request.r(i1567[62], i1567[63], 0, i1566, 'parentLinkedComponent')
  i1566.m_enableKerning = !!i1567[64]
  i1566.m_enableExtraPadding = !!i1567[65]
  i1566.checkPaddingRequired = !!i1567[66]
  i1566.m_isRichText = !!i1567[67]
  i1566.m_parseCtrlCharacters = !!i1567[68]
  i1566.m_isOrthographic = !!i1567[69]
  i1566.m_isCullingEnabled = !!i1567[70]
  i1566.m_horizontalMapping = i1567[71]
  i1566.m_verticalMapping = i1567[72]
  i1566.m_uvLineOffset = i1567[73]
  i1566.m_geometrySortingOrder = i1567[74]
  i1566.m_IsTextObjectScaleStatic = !!i1567[75]
  i1566.m_VertexBufferAutoSizeReduction = !!i1567[76]
  i1566.m_useMaxVisibleDescender = !!i1567[77]
  i1566.m_pageToDisplay = i1567[78]
  i1566.m_margin = new pc.Vec4( i1567[79], i1567[80], i1567[81], i1567[82] )
  i1566.m_isUsingLegacyAnimationComponent = !!i1567[83]
  i1566.m_isVolumetricText = !!i1567[84]
  i1566.m_Maskable = !!i1567[85]
  request.r(i1567[86], i1567[87], 0, i1566, 'm_Material')
  i1566.m_Color = new pc.Color(i1567[88], i1567[89], i1567[90], i1567[91])
  i1566.m_RaycastTarget = !!i1567[92]
  i1566.m_RaycastPadding = new pc.Vec4( i1567[93], i1567[94], i1567[95], i1567[96] )
  return i1566
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1574 = root || request.c( 'TMPro.VertexGradient' )
  var i1575 = data
  i1574.topLeft = new pc.Color(i1575[0], i1575[1], i1575[2], i1575[3])
  i1574.topRight = new pc.Color(i1575[4], i1575[5], i1575[6], i1575[7])
  i1574.bottomLeft = new pc.Color(i1575[8], i1575[9], i1575[10], i1575[11])
  i1574.bottomRight = new pc.Color(i1575[12], i1575[13], i1575[14], i1575[15])
  return i1574
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1576 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1577 = data
  i1576.m_ShowMaskGraphic = !!i1577[0]
  return i1576
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1578 = root || request.c( 'AudioController' )
  var i1579 = data
  request.r(i1579[0], i1579[1], 0, i1578, 'bgmSource')
  request.r(i1579[2], i1579[3], 0, i1578, 'sfxSource')
  var i1581 = i1579[4]
  var i1580 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.add(request.d('AudioEntry', i1581[i + 0]));
  }
  i1578.audioEntries = i1580
  return i1578
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i1584 = root || request.c( 'AudioEntry' )
  var i1585 = data
  i1584.key = i1585[0]
  request.r(i1585[1], i1585[2], 0, i1584, 'clip')
  i1584.volume = i1585[3]
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1587 = data
  i1586.ambientIntensity = i1587[0]
  i1586.reflectionIntensity = i1587[1]
  i1586.ambientMode = i1587[2]
  i1586.ambientLight = new pc.Color(i1587[3], i1587[4], i1587[5], i1587[6])
  i1586.ambientSkyColor = new pc.Color(i1587[7], i1587[8], i1587[9], i1587[10])
  i1586.ambientGroundColor = new pc.Color(i1587[11], i1587[12], i1587[13], i1587[14])
  i1586.ambientEquatorColor = new pc.Color(i1587[15], i1587[16], i1587[17], i1587[18])
  i1586.fogColor = new pc.Color(i1587[19], i1587[20], i1587[21], i1587[22])
  i1586.fogEndDistance = i1587[23]
  i1586.fogStartDistance = i1587[24]
  i1586.fogDensity = i1587[25]
  i1586.fog = !!i1587[26]
  request.r(i1587[27], i1587[28], 0, i1586, 'skybox')
  i1586.fogMode = i1587[29]
  var i1589 = i1587[30]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1589[i + 0]) );
  }
  i1586.lightmaps = i1588
  i1586.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1587[31], i1586.lightProbes)
  i1586.lightmapsMode = i1587[32]
  i1586.mixedBakeMode = i1587[33]
  i1586.environmentLightingMode = i1587[34]
  i1586.ambientProbe = new pc.SphericalHarmonicsL2(i1587[35])
  i1586.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1587[36])
  i1586.useReferenceAmbientProbe = !!i1587[37]
  request.r(i1587[38], i1587[39], 0, i1586, 'customReflection')
  request.r(i1587[40], i1587[41], 0, i1586, 'defaultReflection')
  i1586.defaultReflectionMode = i1587[42]
  i1586.defaultReflectionResolution = i1587[43]
  i1586.sunLightObjectId = i1587[44]
  i1586.pixelLightCount = i1587[45]
  i1586.defaultReflectionHDR = !!i1587[46]
  i1586.hasLightDataAsset = !!i1587[47]
  i1586.hasManualGenerate = !!i1587[48]
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1593 = data
  request.r(i1593[0], i1593[1], 0, i1592, 'lightmapColor')
  request.r(i1593[2], i1593[3], 0, i1592, 'lightmapDirection')
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1594 = root || new UnityEngine.LightProbes()
  var i1595 = data
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1603 = data
  var i1605 = i1603[0]
  var i1604 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1605[i + 0]));
  }
  i1602.ShaderCompilationErrors = i1604
  i1602.name = i1603[1]
  i1602.guid = i1603[2]
  var i1607 = i1603[3]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( i1607[i + 0] );
  }
  i1602.shaderDefinedKeywords = i1606
  var i1609 = i1603[4]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1609[i + 0]) );
  }
  i1602.passes = i1608
  var i1611 = i1603[5]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1611[i + 0]) );
  }
  i1602.usePasses = i1610
  var i1613 = i1603[6]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1613[i + 0]) );
  }
  i1602.defaultParameterValues = i1612
  request.r(i1603[7], i1603[8], 0, i1602, 'unityFallbackShader')
  i1602.readDepth = !!i1603[9]
  i1602.isCreatedByShaderGraph = !!i1603[10]
  i1602.disableBatching = !!i1603[11]
  i1602.compiled = !!i1603[12]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1617 = data
  i1616.shaderName = i1617[0]
  i1616.errorMessage = i1617[1]
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1620 = root || new pc.UnityShaderPass()
  var i1621 = data
  i1620.id = i1621[0]
  i1620.subShaderIndex = i1621[1]
  i1620.name = i1621[2]
  i1620.passType = i1621[3]
  i1620.grabPassTextureName = i1621[4]
  i1620.usePass = !!i1621[5]
  i1620.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1621[6], i1620.zTest)
  i1620.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1621[7], i1620.zWrite)
  i1620.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1621[8], i1620.culling)
  i1620.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1621[9], i1620.blending)
  i1620.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1621[10], i1620.alphaBlending)
  i1620.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1621[11], i1620.colorWriteMask)
  i1620.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1621[12], i1620.offsetUnits)
  i1620.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1621[13], i1620.offsetFactor)
  i1620.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1621[14], i1620.stencilRef)
  i1620.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1621[15], i1620.stencilReadMask)
  i1620.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1621[16], i1620.stencilWriteMask)
  i1620.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1621[17], i1620.stencilOp)
  i1620.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1621[18], i1620.stencilOpFront)
  i1620.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1621[19], i1620.stencilOpBack)
  var i1623 = i1621[20]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1623[i + 0]) );
  }
  i1620.tags = i1622
  var i1625 = i1621[21]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.push( i1625[i + 0] );
  }
  i1620.passDefinedKeywords = i1624
  var i1627 = i1621[22]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1627[i + 0]) );
  }
  i1620.passDefinedKeywordGroups = i1626
  var i1629 = i1621[23]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1629[i + 0]) );
  }
  i1620.variants = i1628
  var i1631 = i1621[24]
  var i1630 = []
  for(var i = 0; i < i1631.length; i += 1) {
    i1630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1631[i + 0]) );
  }
  i1620.excludedVariants = i1630
  i1620.hasDepthReader = !!i1621[25]
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1633 = data
  i1632.val = i1633[0]
  i1632.name = i1633[1]
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1635 = data
  i1634.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1635[0], i1634.src)
  i1634.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1635[1], i1634.dst)
  i1634.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1635[2], i1634.op)
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1637 = data
  i1636.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[0], i1636.pass)
  i1636.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[1], i1636.fail)
  i1636.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[2], i1636.zFail)
  i1636.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1637[3], i1636.comp)
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1641 = data
  i1640.name = i1641[0]
  i1640.value = i1641[1]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1645 = data
  var i1647 = i1645[0]
  var i1646 = []
  for(var i = 0; i < i1647.length; i += 1) {
    i1646.push( i1647[i + 0] );
  }
  i1644.keywords = i1646
  i1644.hasDiscard = !!i1645[1]
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1651 = data
  i1650.passId = i1651[0]
  i1650.subShaderIndex = i1651[1]
  var i1653 = i1651[2]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( i1653[i + 0] );
  }
  i1650.keywords = i1652
  i1650.vertexProgram = i1651[3]
  i1650.fragmentProgram = i1651[4]
  i1650.exportedForWebGl2 = !!i1651[5]
  i1650.readDepth = !!i1651[6]
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1657 = data
  request.r(i1657[0], i1657[1], 0, i1656, 'shader')
  i1656.pass = i1657[2]
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1661 = data
  i1660.name = i1661[0]
  i1660.type = i1661[1]
  i1660.value = new pc.Vec4( i1661[2], i1661[3], i1661[4], i1661[5] )
  i1660.textureValue = i1661[6]
  i1660.shaderPropertyFlag = i1661[7]
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1663 = data
  i1662.name = i1663[0]
  request.r(i1663[1], i1663[2], 0, i1662, 'texture')
  i1662.aabb = i1663[3]
  i1662.vertices = i1663[4]
  i1662.triangles = i1663[5]
  i1662.textureRect = UnityEngine.Rect.MinMaxRect(i1663[6], i1663[7], i1663[8], i1663[9])
  i1662.packedRect = UnityEngine.Rect.MinMaxRect(i1663[10], i1663[11], i1663[12], i1663[13])
  i1662.border = new pc.Vec4( i1663[14], i1663[15], i1663[16], i1663[17] )
  i1662.transparency = i1663[18]
  i1662.bounds = i1663[19]
  i1662.pixelsPerUnit = i1663[20]
  i1662.textureWidth = i1663[21]
  i1662.textureHeight = i1663[22]
  i1662.nativeSize = new pc.Vec2( i1663[23], i1663[24] )
  i1662.pivot = new pc.Vec2( i1663[25], i1663[26] )
  i1662.textureRectOffset = new pc.Vec2( i1663[27], i1663[28] )
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1665 = data
  i1664.name = i1665[0]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1667 = data
  i1666.name = i1667[0]
  i1666.ascent = i1667[1]
  i1666.originalLineHeight = i1667[2]
  i1666.fontSize = i1667[3]
  var i1669 = i1667[4]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1669[i + 0]) );
  }
  i1666.characterInfo = i1668
  request.r(i1667[5], i1667[6], 0, i1666, 'texture')
  i1666.originalFontSize = i1667[7]
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1673 = data
  i1672.index = i1673[0]
  i1672.advance = i1673[1]
  i1672.bearing = i1673[2]
  i1672.glyphWidth = i1673[3]
  i1672.glyphHeight = i1673[4]
  i1672.minX = i1673[5]
  i1672.maxX = i1673[6]
  i1672.minY = i1673[7]
  i1672.maxY = i1673[8]
  i1672.uvBottomLeftX = i1673[9]
  i1672.uvBottomLeftY = i1673[10]
  i1672.uvBottomRightX = i1673[11]
  i1672.uvBottomRightY = i1673[12]
  i1672.uvTopLeftX = i1673[13]
  i1672.uvTopLeftY = i1673[14]
  i1672.uvTopRightX = i1673[15]
  i1672.uvTopRightY = i1673[16]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1675 = data
  i1674.name = i1675[0]
  i1674.bytes64 = i1675[1]
  i1674.data = i1675[2]
  return i1674
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1676 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1677 = data
  var i1679 = i1677[0]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 2) {
  request.r(i1679[i + 0], i1679[i + 1], 2, i1678, '')
  }
  i1676.atlasAssets = i1678
  i1676.scale = i1677[1]
  request.r(i1677[2], i1677[3], 0, i1676, 'skeletonJSON')
  i1676.isUpgradingBlendModeMaterials = !!i1677[4]
  i1676.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1677[5], i1676.blendModeMaterials)
  var i1681 = i1677[6]
  var i1680 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1681.length; i += 2) {
  request.r(i1681[i + 0], i1681[i + 1], 1, i1680, '')
  }
  i1676.skeletonDataModifiers = i1680
  var i1683 = i1677[7]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( i1683[i + 0] );
  }
  i1676.fromAnimation = i1682
  var i1685 = i1677[8]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( i1685[i + 0] );
  }
  i1676.toAnimation = i1684
  i1676.duration = i1677[9]
  i1676.defaultMix = i1677[10]
  request.r(i1677[11], i1677[12], 0, i1676, 'controller')
  return i1676
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1688 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1689 = data
  i1688.applyAdditiveMaterial = !!i1689[0]
  var i1691 = i1689[1]
  var i1690 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1691[i + 0]));
  }
  i1688.additiveMaterials = i1690
  var i1693 = i1689[2]
  var i1692 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1693[i + 0]));
  }
  i1688.multiplyMaterials = i1692
  var i1695 = i1689[3]
  var i1694 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1695[i + 0]));
  }
  i1688.screenMaterials = i1694
  i1688.requiresBlendModeMaterials = !!i1689[4]
  return i1688
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1698 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1699 = data
  i1698.pageName = i1699[0]
  request.r(i1699[1], i1699[2], 0, i1698, 'material')
  return i1698
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1702 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1703 = data
  request.r(i1703[0], i1703[1], 0, i1702, 'atlasFile')
  var i1705 = i1703[2]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 2) {
  request.r(i1705[i + 0], i1705[i + 1], 2, i1704, '')
  }
  i1702.materials = i1704
  i1702.textureLoadingMode = i1703[3]
  request.r(i1703[4], i1703[5], 0, i1702, 'onDemandTextureLoader')
  return i1702
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1706 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1707 = data
  request.r(i1707[0], i1707[1], 0, i1706, 'atlas')
  i1706.normalStyle = i1707[2]
  i1706.normalSpacingOffset = i1707[3]
  i1706.boldStyle = i1707[4]
  i1706.boldSpacing = i1707[5]
  i1706.italicStyle = i1707[6]
  i1706.tabSize = i1707[7]
  i1706.hashCode = i1707[8]
  request.r(i1707[9], i1707[10], 0, i1706, 'material')
  i1706.materialHashCode = i1707[11]
  i1706.m_Version = i1707[12]
  i1706.m_SourceFontFileGUID = i1707[13]
  request.r(i1707[14], i1707[15], 0, i1706, 'm_SourceFontFile_EditorRef')
  request.r(i1707[16], i1707[17], 0, i1706, 'm_SourceFontFile')
  i1706.m_AtlasPopulationMode = i1707[18]
  i1706.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1707[19], i1706.m_FaceInfo)
  var i1709 = i1707[20]
  var i1708 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.add(request.d('UnityEngine.TextCore.Glyph', i1709[i + 0]));
  }
  i1706.m_GlyphTable = i1708
  var i1711 = i1707[21]
  var i1710 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.add(request.d('TMPro.TMP_Character', i1711[i + 0]));
  }
  i1706.m_CharacterTable = i1710
  var i1713 = i1707[22]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 2) {
  request.r(i1713[i + 0], i1713[i + 1], 2, i1712, '')
  }
  i1706.m_AtlasTextures = i1712
  i1706.m_AtlasTextureIndex = i1707[23]
  i1706.m_IsMultiAtlasTexturesEnabled = !!i1707[24]
  i1706.m_ClearDynamicDataOnBuild = !!i1707[25]
  var i1715 = i1707[26]
  var i1714 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.add(request.d('UnityEngine.TextCore.GlyphRect', i1715[i + 0]));
  }
  i1706.m_UsedGlyphRects = i1714
  var i1717 = i1707[27]
  var i1716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.add(request.d('UnityEngine.TextCore.GlyphRect', i1717[i + 0]));
  }
  i1706.m_FreeGlyphRects = i1716
  i1706.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1707[28], i1706.m_fontInfo)
  i1706.m_AtlasWidth = i1707[29]
  i1706.m_AtlasHeight = i1707[30]
  i1706.m_AtlasPadding = i1707[31]
  i1706.m_AtlasRenderMode = i1707[32]
  var i1719 = i1707[33]
  var i1718 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.add(request.d('TMPro.TMP_Glyph', i1719[i + 0]));
  }
  i1706.m_glyphInfoList = i1718
  i1706.m_KerningTable = request.d('TMPro.KerningTable', i1707[34], i1706.m_KerningTable)
  i1706.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1707[35], i1706.m_FontFeatureTable)
  var i1721 = i1707[36]
  var i1720 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1721.length; i += 2) {
  request.r(i1721[i + 0], i1721[i + 1], 1, i1720, '')
  }
  i1706.fallbackFontAssets = i1720
  var i1723 = i1707[37]
  var i1722 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1723.length; i += 2) {
  request.r(i1723[i + 0], i1723[i + 1], 1, i1722, '')
  }
  i1706.m_FallbackFontAssetTable = i1722
  i1706.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1707[38], i1706.m_CreationSettings)
  var i1725 = i1707[39]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('TMPro.TMP_FontWeightPair', i1725[i + 0]) );
  }
  i1706.m_FontWeightTable = i1724
  var i1727 = i1707[40]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( request.d('TMPro.TMP_FontWeightPair', i1727[i + 0]) );
  }
  i1706.fontWeights = i1726
  return i1706
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1728 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1729 = data
  i1728.m_FaceIndex = i1729[0]
  i1728.m_FamilyName = i1729[1]
  i1728.m_StyleName = i1729[2]
  i1728.m_PointSize = i1729[3]
  i1728.m_Scale = i1729[4]
  i1728.m_UnitsPerEM = i1729[5]
  i1728.m_LineHeight = i1729[6]
  i1728.m_AscentLine = i1729[7]
  i1728.m_CapLine = i1729[8]
  i1728.m_MeanLine = i1729[9]
  i1728.m_Baseline = i1729[10]
  i1728.m_DescentLine = i1729[11]
  i1728.m_SuperscriptOffset = i1729[12]
  i1728.m_SuperscriptSize = i1729[13]
  i1728.m_SubscriptOffset = i1729[14]
  i1728.m_SubscriptSize = i1729[15]
  i1728.m_UnderlineOffset = i1729[16]
  i1728.m_UnderlineThickness = i1729[17]
  i1728.m_StrikethroughOffset = i1729[18]
  i1728.m_StrikethroughThickness = i1729[19]
  i1728.m_TabWidth = i1729[20]
  return i1728
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1732 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1733 = data
  i1732.m_Index = i1733[0]
  i1732.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1733[1], i1732.m_Metrics)
  i1732.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1733[2], i1732.m_GlyphRect)
  i1732.m_Scale = i1733[3]
  i1732.m_AtlasIndex = i1733[4]
  i1732.m_ClassDefinitionType = i1733[5]
  return i1732
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1734 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1735 = data
  i1734.m_Width = i1735[0]
  i1734.m_Height = i1735[1]
  i1734.m_HorizontalBearingX = i1735[2]
  i1734.m_HorizontalBearingY = i1735[3]
  i1734.m_HorizontalAdvance = i1735[4]
  return i1734
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1736 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1737 = data
  i1736.m_X = i1737[0]
  i1736.m_Y = i1737[1]
  i1736.m_Width = i1737[2]
  i1736.m_Height = i1737[3]
  return i1736
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1740 = root || request.c( 'TMPro.TMP_Character' )
  var i1741 = data
  i1740.m_ElementType = i1741[0]
  i1740.m_Unicode = i1741[1]
  i1740.m_GlyphIndex = i1741[2]
  i1740.m_Scale = i1741[3]
  return i1740
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1746 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1747 = data
  i1746.Name = i1747[0]
  i1746.PointSize = i1747[1]
  i1746.Scale = i1747[2]
  i1746.CharacterCount = i1747[3]
  i1746.LineHeight = i1747[4]
  i1746.Baseline = i1747[5]
  i1746.Ascender = i1747[6]
  i1746.CapHeight = i1747[7]
  i1746.Descender = i1747[8]
  i1746.CenterLine = i1747[9]
  i1746.SuperscriptOffset = i1747[10]
  i1746.SubscriptOffset = i1747[11]
  i1746.SubSize = i1747[12]
  i1746.Underline = i1747[13]
  i1746.UnderlineThickness = i1747[14]
  i1746.strikethrough = i1747[15]
  i1746.strikethroughThickness = i1747[16]
  i1746.TabWidth = i1747[17]
  i1746.Padding = i1747[18]
  i1746.AtlasWidth = i1747[19]
  i1746.AtlasHeight = i1747[20]
  return i1746
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1750 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1751 = data
  i1750.id = i1751[0]
  i1750.x = i1751[1]
  i1750.y = i1751[2]
  i1750.width = i1751[3]
  i1750.height = i1751[4]
  i1750.xOffset = i1751[5]
  i1750.yOffset = i1751[6]
  i1750.xAdvance = i1751[7]
  i1750.scale = i1751[8]
  return i1750
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1752 = root || request.c( 'TMPro.KerningTable' )
  var i1753 = data
  var i1755 = i1753[0]
  var i1754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.add(request.d('TMPro.KerningPair', i1755[i + 0]));
  }
  i1752.kerningPairs = i1754
  return i1752
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1758 = root || request.c( 'TMPro.KerningPair' )
  var i1759 = data
  i1758.xOffset = i1759[0]
  i1758.m_FirstGlyph = i1759[1]
  i1758.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1759[2], i1758.m_FirstGlyphAdjustments)
  i1758.m_SecondGlyph = i1759[3]
  i1758.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1759[4], i1758.m_SecondGlyphAdjustments)
  i1758.m_IgnoreSpacingAdjustments = !!i1759[5]
  return i1758
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1760 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1761 = data
  var i1763 = i1761[0]
  var i1762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1763[i + 0]));
  }
  i1760.m_GlyphPairAdjustmentRecords = i1762
  return i1760
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1766 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1767 = data
  i1766.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1767[0], i1766.m_FirstAdjustmentRecord)
  i1766.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1767[1], i1766.m_SecondAdjustmentRecord)
  i1766.m_FeatureLookupFlags = i1767[2]
  return i1766
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1770 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1771 = data
  i1770.sourceFontFileName = i1771[0]
  i1770.sourceFontFileGUID = i1771[1]
  i1770.pointSizeSamplingMode = i1771[2]
  i1770.pointSize = i1771[3]
  i1770.padding = i1771[4]
  i1770.packingMode = i1771[5]
  i1770.atlasWidth = i1771[6]
  i1770.atlasHeight = i1771[7]
  i1770.characterSetSelectionMode = i1771[8]
  i1770.characterSequence = i1771[9]
  i1770.referencedFontAssetGUID = i1771[10]
  i1770.referencedTextAssetGUID = i1771[11]
  i1770.fontStyle = i1771[12]
  i1770.fontStyleModifier = i1771[13]
  i1770.renderMode = i1771[14]
  i1770.includeFontFeatures = !!i1771[15]
  return i1770
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1774 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1775 = data
  request.r(i1775[0], i1775[1], 0, i1774, 'regularTypeface')
  request.r(i1775[2], i1775[3], 0, i1774, 'italicTypeface')
  return i1774
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1776 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1777 = data
  i1776.useSafeMode = !!i1777[0]
  i1776.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1777[1], i1776.safeModeOptions)
  i1776.timeScale = i1777[2]
  i1776.unscaledTimeScale = i1777[3]
  i1776.useSmoothDeltaTime = !!i1777[4]
  i1776.maxSmoothUnscaledTime = i1777[5]
  i1776.rewindCallbackMode = i1777[6]
  i1776.showUnityEditorReport = !!i1777[7]
  i1776.logBehaviour = i1777[8]
  i1776.drawGizmos = !!i1777[9]
  i1776.defaultRecyclable = !!i1777[10]
  i1776.defaultAutoPlay = i1777[11]
  i1776.defaultUpdateType = i1777[12]
  i1776.defaultTimeScaleIndependent = !!i1777[13]
  i1776.defaultEaseType = i1777[14]
  i1776.defaultEaseOvershootOrAmplitude = i1777[15]
  i1776.defaultEasePeriod = i1777[16]
  i1776.defaultAutoKill = !!i1777[17]
  i1776.defaultLoopType = i1777[18]
  i1776.debugMode = !!i1777[19]
  i1776.debugStoreTargetId = !!i1777[20]
  i1776.showPreviewPanel = !!i1777[21]
  i1776.storeSettingsLocation = i1777[22]
  i1776.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1777[23], i1776.modules)
  i1776.createASMDEF = !!i1777[24]
  i1776.showPlayingTweens = !!i1777[25]
  i1776.showPausedTweens = !!i1777[26]
  return i1776
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1778 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1779 = data
  i1778.logBehaviour = i1779[0]
  i1778.nestedTweenFailureBehaviour = i1779[1]
  return i1778
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1780 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1781 = data
  i1780.showPanel = !!i1781[0]
  i1780.audioEnabled = !!i1781[1]
  i1780.physicsEnabled = !!i1781[2]
  i1780.physics2DEnabled = !!i1781[3]
  i1780.spriteEnabled = !!i1781[4]
  i1780.uiEnabled = !!i1781[5]
  i1780.textMeshProEnabled = !!i1781[6]
  i1780.tk2DEnabled = !!i1781[7]
  i1780.deAudioEnabled = !!i1781[8]
  i1780.deUnityExtendedEnabled = !!i1781[9]
  i1780.epoOutlineEnabled = !!i1781[10]
  return i1780
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1782 = root || request.c( 'TMPro.TMP_Settings' )
  var i1783 = data
  i1782.m_enableWordWrapping = !!i1783[0]
  i1782.m_enableKerning = !!i1783[1]
  i1782.m_enableExtraPadding = !!i1783[2]
  i1782.m_enableTintAllSprites = !!i1783[3]
  i1782.m_enableParseEscapeCharacters = !!i1783[4]
  i1782.m_EnableRaycastTarget = !!i1783[5]
  i1782.m_GetFontFeaturesAtRuntime = !!i1783[6]
  i1782.m_missingGlyphCharacter = i1783[7]
  i1782.m_warningsDisabled = !!i1783[8]
  request.r(i1783[9], i1783[10], 0, i1782, 'm_defaultFontAsset')
  i1782.m_defaultFontAssetPath = i1783[11]
  i1782.m_defaultFontSize = i1783[12]
  i1782.m_defaultAutoSizeMinRatio = i1783[13]
  i1782.m_defaultAutoSizeMaxRatio = i1783[14]
  i1782.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1783[15], i1783[16] )
  i1782.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1783[17], i1783[18] )
  i1782.m_autoSizeTextContainer = !!i1783[19]
  i1782.m_IsTextObjectScaleStatic = !!i1783[20]
  var i1785 = i1783[21]
  var i1784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1785.length; i += 2) {
  request.r(i1785[i + 0], i1785[i + 1], 1, i1784, '')
  }
  i1782.m_fallbackFontAssets = i1784
  i1782.m_matchMaterialPreset = !!i1783[22]
  request.r(i1783[23], i1783[24], 0, i1782, 'm_defaultSpriteAsset')
  i1782.m_defaultSpriteAssetPath = i1783[25]
  i1782.m_enableEmojiSupport = !!i1783[26]
  i1782.m_MissingCharacterSpriteUnicode = i1783[27]
  i1782.m_defaultColorGradientPresetsPath = i1783[28]
  request.r(i1783[29], i1783[30], 0, i1782, 'm_defaultStyleSheet')
  i1782.m_StyleSheetsResourcePath = i1783[31]
  request.r(i1783[32], i1783[33], 0, i1782, 'm_leadingCharacters')
  request.r(i1783[34], i1783[35], 0, i1782, 'm_followingCharacters')
  i1782.m_UseModernHangulLineBreakingRules = !!i1783[36]
  return i1782
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1786 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1787 = data
  request.r(i1787[0], i1787[1], 0, i1786, 'spriteSheet')
  var i1789 = i1787[2]
  var i1788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.add(request.d('TMPro.TMP_Sprite', i1789[i + 0]));
  }
  i1786.spriteInfoList = i1788
  var i1791 = i1787[3]
  var i1790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1791.length; i += 2) {
  request.r(i1791[i + 0], i1791[i + 1], 1, i1790, '')
  }
  i1786.fallbackSpriteAssets = i1790
  i1786.hashCode = i1787[4]
  request.r(i1787[5], i1787[6], 0, i1786, 'material')
  i1786.materialHashCode = i1787[7]
  i1786.m_Version = i1787[8]
  i1786.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1787[9], i1786.m_FaceInfo)
  var i1793 = i1787[10]
  var i1792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.add(request.d('TMPro.TMP_SpriteCharacter', i1793[i + 0]));
  }
  i1786.m_SpriteCharacterTable = i1792
  var i1795 = i1787[11]
  var i1794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1795.length; i += 1) {
    i1794.add(request.d('TMPro.TMP_SpriteGlyph', i1795[i + 0]));
  }
  i1786.m_SpriteGlyphTable = i1794
  return i1786
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1798 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1799 = data
  i1798.name = i1799[0]
  i1798.hashCode = i1799[1]
  i1798.unicode = i1799[2]
  i1798.pivot = new pc.Vec2( i1799[3], i1799[4] )
  request.r(i1799[5], i1799[6], 0, i1798, 'sprite')
  i1798.id = i1799[7]
  i1798.x = i1799[8]
  i1798.y = i1799[9]
  i1798.width = i1799[10]
  i1798.height = i1799[11]
  i1798.xOffset = i1799[12]
  i1798.yOffset = i1799[13]
  i1798.xAdvance = i1799[14]
  i1798.scale = i1799[15]
  return i1798
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1804 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1805 = data
  i1804.m_Name = i1805[0]
  i1804.m_HashCode = i1805[1]
  i1804.m_ElementType = i1805[2]
  i1804.m_Unicode = i1805[3]
  i1804.m_GlyphIndex = i1805[4]
  i1804.m_Scale = i1805[5]
  return i1804
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1808 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1809 = data
  request.r(i1809[0], i1809[1], 0, i1808, 'sprite')
  i1808.m_Index = i1809[2]
  i1808.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1809[3], i1808.m_Metrics)
  i1808.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1809[4], i1808.m_GlyphRect)
  i1808.m_Scale = i1809[5]
  i1808.m_AtlasIndex = i1809[6]
  i1808.m_ClassDefinitionType = i1809[7]
  return i1808
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1810 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1811 = data
  var i1813 = i1811[0]
  var i1812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.add(request.d('TMPro.TMP_Style', i1813[i + 0]));
  }
  i1810.m_StyleList = i1812
  return i1810
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1816 = root || request.c( 'TMPro.TMP_Style' )
  var i1817 = data
  i1816.m_Name = i1817[0]
  i1816.m_HashCode = i1817[1]
  i1816.m_OpeningDefinition = i1817[2]
  i1816.m_ClosingDefinition = i1817[3]
  i1816.m_OpeningTagArray = i1817[4]
  i1816.m_ClosingTagArray = i1817[5]
  i1816.m_OpeningTagUnicodeArray = i1817[6]
  i1816.m_ClosingTagUnicodeArray = i1817[7]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1819 = data
  var i1821 = i1819[0]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1821[i + 0]) );
  }
  i1818.files = i1820
  i1818.componentToPrefabIds = i1819[1]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1825 = data
  i1824.path = i1825[0]
  request.r(i1825[1], i1825[2], 0, i1824, 'unityObject')
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1827 = data
  var i1829 = i1827[0]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1829[i + 0]) );
  }
  i1826.scriptsExecutionOrder = i1828
  var i1831 = i1827[1]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1831[i + 0]) );
  }
  i1826.sortingLayers = i1830
  var i1833 = i1827[2]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1833[i + 0]) );
  }
  i1826.cullingLayers = i1832
  i1826.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1827[3], i1826.timeSettings)
  i1826.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1827[4], i1826.physicsSettings)
  i1826.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1827[5], i1826.physics2DSettings)
  i1826.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1827[6], i1826.qualitySettings)
  i1826.enableRealtimeShadows = !!i1827[7]
  i1826.enableAutoInstancing = !!i1827[8]
  i1826.enableStaticBatching = !!i1827[9]
  i1826.enableDynamicBatching = !!i1827[10]
  i1826.lightmapEncodingQuality = i1827[11]
  i1826.desiredColorSpace = i1827[12]
  var i1835 = i1827[13]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.push( i1835[i + 0] );
  }
  i1826.allTags = i1834
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1839 = data
  i1838.name = i1839[0]
  i1838.value = i1839[1]
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1843 = data
  i1842.id = i1843[0]
  i1842.name = i1843[1]
  i1842.value = i1843[2]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1847 = data
  i1846.id = i1847[0]
  i1846.name = i1847[1]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1849 = data
  i1848.fixedDeltaTime = i1849[0]
  i1848.maximumDeltaTime = i1849[1]
  i1848.timeScale = i1849[2]
  i1848.maximumParticleTimestep = i1849[3]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1851 = data
  i1850.gravity = new pc.Vec3( i1851[0], i1851[1], i1851[2] )
  i1850.defaultSolverIterations = i1851[3]
  i1850.bounceThreshold = i1851[4]
  i1850.autoSyncTransforms = !!i1851[5]
  i1850.autoSimulation = !!i1851[6]
  var i1853 = i1851[7]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1853[i + 0]) );
  }
  i1850.collisionMatrix = i1852
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1857 = data
  i1856.enabled = !!i1857[0]
  i1856.layerId = i1857[1]
  i1856.otherLayerId = i1857[2]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1859 = data
  request.r(i1859[0], i1859[1], 0, i1858, 'material')
  i1858.gravity = new pc.Vec2( i1859[2], i1859[3] )
  i1858.positionIterations = i1859[4]
  i1858.velocityIterations = i1859[5]
  i1858.velocityThreshold = i1859[6]
  i1858.maxLinearCorrection = i1859[7]
  i1858.maxAngularCorrection = i1859[8]
  i1858.maxTranslationSpeed = i1859[9]
  i1858.maxRotationSpeed = i1859[10]
  i1858.baumgarteScale = i1859[11]
  i1858.baumgarteTOIScale = i1859[12]
  i1858.timeToSleep = i1859[13]
  i1858.linearSleepTolerance = i1859[14]
  i1858.angularSleepTolerance = i1859[15]
  i1858.defaultContactOffset = i1859[16]
  i1858.autoSimulation = !!i1859[17]
  i1858.queriesHitTriggers = !!i1859[18]
  i1858.queriesStartInColliders = !!i1859[19]
  i1858.callbacksOnDisable = !!i1859[20]
  i1858.reuseCollisionCallbacks = !!i1859[21]
  i1858.autoSyncTransforms = !!i1859[22]
  var i1861 = i1859[23]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1861[i + 0]) );
  }
  i1858.collisionMatrix = i1860
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1865 = data
  i1864.enabled = !!i1865[0]
  i1864.layerId = i1865[1]
  i1864.otherLayerId = i1865[2]
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1867 = data
  var i1869 = i1867[0]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1869[i + 0]) );
  }
  i1866.qualityLevels = i1868
  var i1871 = i1867[1]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( i1871[i + 0] );
  }
  i1866.names = i1870
  i1866.shadows = i1867[2]
  i1866.anisotropicFiltering = i1867[3]
  i1866.antiAliasing = i1867[4]
  i1866.lodBias = i1867[5]
  i1866.shadowCascades = i1867[6]
  i1866.shadowDistance = i1867[7]
  i1866.shadowmaskMode = i1867[8]
  i1866.shadowProjection = i1867[9]
  i1866.shadowResolution = i1867[10]
  i1866.softParticles = !!i1867[11]
  i1866.softVegetation = !!i1867[12]
  i1866.activeColorSpace = i1867[13]
  i1866.desiredColorSpace = i1867[14]
  i1866.masterTextureLimit = i1867[15]
  i1866.maxQueuedFrames = i1867[16]
  i1866.particleRaycastBudget = i1867[17]
  i1866.pixelLightCount = i1867[18]
  i1866.realtimeReflectionProbes = !!i1867[19]
  i1866.shadowCascade2Split = i1867[20]
  i1866.shadowCascade4Split = new pc.Vec3( i1867[21], i1867[22], i1867[23] )
  i1866.streamingMipmapsActive = !!i1867[24]
  i1866.vSyncCount = i1867[25]
  i1866.asyncUploadBufferSize = i1867[26]
  i1866.asyncUploadTimeSlice = i1867[27]
  i1866.billboardsFaceCameraPosition = !!i1867[28]
  i1866.shadowNearPlaneOffset = i1867[29]
  i1866.streamingMipmapsMemoryBudget = i1867[30]
  i1866.maximumLODLevel = i1867[31]
  i1866.streamingMipmapsAddAllCameras = !!i1867[32]
  i1866.streamingMipmapsMaxLevelReduction = i1867[33]
  i1866.streamingMipmapsRenderersPerFrame = i1867[34]
  i1866.resolutionScalingFixedDPIFactor = i1867[35]
  i1866.streamingMipmapsMaxFileIORequests = i1867[36]
  i1866.currentQualityLevel = i1867[37]
  return i1866
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1874 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1875 = data
  i1874.xPlacement = i1875[0]
  i1874.yPlacement = i1875[1]
  i1874.xAdvance = i1875[2]
  i1874.yAdvance = i1875[3]
  return i1874
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1876 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1877 = data
  i1876.m_GlyphIndex = i1877[0]
  i1876.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1877[1], i1876.m_GlyphValueRecord)
  return i1876
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1878 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1879 = data
  i1878.m_XPlacement = i1879[0]
  i1878.m_YPlacement = i1879[1]
  i1878.m_XAdvance = i1879[2]
  i1878.m_YAdvance = i1879[3]
  return i1878
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[3],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[3],"76":[77],"78":[79],"80":[79],"9":[8],"81":[82],"83":[84],"85":[82],"86":[8],"87":[8],"11":[9],"19":[20,8],"88":[8],"10":[9],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"34":[8],"96":[8],"16":[20,8],"97":[8],"98":[8],"99":[8],"100":[8],"101":[20,8],"102":[8],"103":[6],"104":[6],"7":[6],"105":[6],"106":[3],"107":[3],"108":[109],"110":[3],"111":[112],"113":[8],"114":[20,8],"115":[77],"24":[20,8],"116":[117,77],"118":[77],"119":[77,120],"121":[54],"122":[62],"123":[112],"124":[125],"126":[8],"127":[77,8],"18":[8,20],"128":[8],"129":[20,8],"130":[77],"131":[20,8],"132":[8],"133":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","MixSkeletonSkin","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DropZone","UnityEngine.BoxCollider2D","DG.Tweening.DOTweenAnimation","ClickItem","DraggableItem","UnityEngine.CanvasGroup","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "233.4";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BM_V15_ManhND_AnhPD";

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

Deserializers.buildID = "ab1212f6-b0d1-4adf-b169-5ebcf8757379";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

