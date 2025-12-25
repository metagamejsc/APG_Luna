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
  request.r(i1487[1], i1487[2], 0, i1486, 'StartCard')
  request.r(i1487[3], i1487[4], 0, i1486, 'EndCard')
  i1486.countPlay = i1487[5]
  i1486.countPlayFinal = i1487[6]
  i1486.countPlayMax = i1487[7]
  i1486.timeDropFinal = i1487[8]
  i1486.colorBG = new pc.Color(i1487[9], i1487[10], i1487[11], i1487[12])
  request.r(i1487[13], i1487[14], 0, i1486, 'texture2D')
  request.r(i1487[15], i1487[16], 0, i1486, 'rawImageBG')
  i1486.isHead = !!i1487[17]
  request.r(i1487[18], i1487[19], 0, i1486, 'textProgess')
  request.r(i1487[20], i1487[21], 0, i1486, 'imgProgess')
  request.r(i1487[22], i1487[23], 0, i1486, 'timeText')
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

Deserializers["ClickItem"] = function (request, data, root) {
  var i1518 = root || request.c( 'ClickItem' )
  var i1519 = data
  var i1521 = i1519[0]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 2) {
  request.r(i1521[i + 0], i1521[i + 1], 2, i1520, '')
  }
  i1518.steps = i1520
  i1518.currentStep = i1519[1]
  i1518.isProcess = !!i1519[2]
  return i1518
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1524 = root || request.c( 'UnityEngine.UI.Button' )
  var i1525 = data
  i1524.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1525[0], i1524.m_OnClick)
  i1524.m_Navigation = request.d('UnityEngine.UI.Navigation', i1525[1], i1524.m_Navigation)
  i1524.m_Transition = i1525[2]
  i1524.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1525[3], i1524.m_Colors)
  i1524.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1525[4], i1524.m_SpriteState)
  i1524.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1525[5], i1524.m_AnimationTriggers)
  i1524.m_Interactable = !!i1525[6]
  request.r(i1525[7], i1525[8], 0, i1524, 'm_TargetGraphic')
  return i1524
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1526 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1527 = data
  i1526.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1527[0], i1526.m_PersistentCalls)
  return i1526
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1528 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1529 = data
  var i1531 = i1529[0]
  var i1530 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1531.length; i += 1) {
    i1530.add(request.d('UnityEngine.Events.PersistentCall', i1531[i + 0]));
  }
  i1528.m_Calls = i1530
  return i1528
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1534 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1535 = data
  request.r(i1535[0], i1535[1], 0, i1534, 'm_Target')
  i1534.m_TargetAssemblyTypeName = i1535[2]
  i1534.m_MethodName = i1535[3]
  i1534.m_Mode = i1535[4]
  i1534.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1535[5], i1534.m_Arguments)
  i1534.m_CallState = i1535[6]
  return i1534
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1536 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1537 = data
  request.r(i1537[0], i1537[1], 0, i1536, 'm_ObjectArgument')
  i1536.m_ObjectArgumentAssemblyTypeName = i1537[2]
  i1536.m_IntArgument = i1537[3]
  i1536.m_FloatArgument = i1537[4]
  i1536.m_StringArgument = i1537[5]
  i1536.m_BoolArgument = !!i1537[6]
  return i1536
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1538 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1539 = data
  i1538.m_Mode = i1539[0]
  i1538.m_WrapAround = !!i1539[1]
  request.r(i1539[2], i1539[3], 0, i1538, 'm_SelectOnUp')
  request.r(i1539[4], i1539[5], 0, i1538, 'm_SelectOnDown')
  request.r(i1539[6], i1539[7], 0, i1538, 'm_SelectOnLeft')
  request.r(i1539[8], i1539[9], 0, i1538, 'm_SelectOnRight')
  return i1538
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1540 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1541 = data
  i1540.m_NormalColor = new pc.Color(i1541[0], i1541[1], i1541[2], i1541[3])
  i1540.m_HighlightedColor = new pc.Color(i1541[4], i1541[5], i1541[6], i1541[7])
  i1540.m_PressedColor = new pc.Color(i1541[8], i1541[9], i1541[10], i1541[11])
  i1540.m_SelectedColor = new pc.Color(i1541[12], i1541[13], i1541[14], i1541[15])
  i1540.m_DisabledColor = new pc.Color(i1541[16], i1541[17], i1541[18], i1541[19])
  i1540.m_ColorMultiplier = i1541[20]
  i1540.m_FadeDuration = i1541[21]
  return i1540
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1542 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1543 = data
  request.r(i1543[0], i1543[1], 0, i1542, 'm_HighlightedSprite')
  request.r(i1543[2], i1543[3], 0, i1542, 'm_PressedSprite')
  request.r(i1543[4], i1543[5], 0, i1542, 'm_SelectedSprite')
  request.r(i1543[6], i1543[7], 0, i1542, 'm_DisabledSprite')
  return i1542
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1544 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1545 = data
  i1544.m_NormalTrigger = i1545[0]
  i1544.m_HighlightedTrigger = i1545[1]
  i1544.m_PressedTrigger = i1545[2]
  i1544.m_SelectedTrigger = i1545[3]
  i1544.m_DisabledTrigger = i1545[4]
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

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1556 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1557 = data
  i1556.m_ShowMaskGraphic = !!i1557[0]
  return i1556
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

Deserializers["AudioController"] = function (request, data, root) {
  var i1562 = root || request.c( 'AudioController' )
  var i1563 = data
  request.r(i1563[0], i1563[1], 0, i1562, 'bgmSource')
  request.r(i1563[2], i1563[3], 0, i1562, 'sfxSource')
  var i1565 = i1563[4]
  var i1564 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.add(request.d('AudioEntry', i1565[i + 0]));
  }
  i1562.audioEntries = i1564
  return i1562
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i1568 = root || request.c( 'AudioEntry' )
  var i1569 = data
  i1568.key = i1569[0]
  request.r(i1569[1], i1569[2], 0, i1568, 'clip')
  i1568.volume = i1569[3]
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1571 = data
  i1570.ambientIntensity = i1571[0]
  i1570.reflectionIntensity = i1571[1]
  i1570.ambientMode = i1571[2]
  i1570.ambientLight = new pc.Color(i1571[3], i1571[4], i1571[5], i1571[6])
  i1570.ambientSkyColor = new pc.Color(i1571[7], i1571[8], i1571[9], i1571[10])
  i1570.ambientGroundColor = new pc.Color(i1571[11], i1571[12], i1571[13], i1571[14])
  i1570.ambientEquatorColor = new pc.Color(i1571[15], i1571[16], i1571[17], i1571[18])
  i1570.fogColor = new pc.Color(i1571[19], i1571[20], i1571[21], i1571[22])
  i1570.fogEndDistance = i1571[23]
  i1570.fogStartDistance = i1571[24]
  i1570.fogDensity = i1571[25]
  i1570.fog = !!i1571[26]
  request.r(i1571[27], i1571[28], 0, i1570, 'skybox')
  i1570.fogMode = i1571[29]
  var i1573 = i1571[30]
  var i1572 = []
  for(var i = 0; i < i1573.length; i += 1) {
    i1572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1573[i + 0]) );
  }
  i1570.lightmaps = i1572
  i1570.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1571[31], i1570.lightProbes)
  i1570.lightmapsMode = i1571[32]
  i1570.mixedBakeMode = i1571[33]
  i1570.environmentLightingMode = i1571[34]
  i1570.ambientProbe = new pc.SphericalHarmonicsL2(i1571[35])
  i1570.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1571[36])
  i1570.useReferenceAmbientProbe = !!i1571[37]
  request.r(i1571[38], i1571[39], 0, i1570, 'customReflection')
  request.r(i1571[40], i1571[41], 0, i1570, 'defaultReflection')
  i1570.defaultReflectionMode = i1571[42]
  i1570.defaultReflectionResolution = i1571[43]
  i1570.sunLightObjectId = i1571[44]
  i1570.pixelLightCount = i1571[45]
  i1570.defaultReflectionHDR = !!i1571[46]
  i1570.hasLightDataAsset = !!i1571[47]
  i1570.hasManualGenerate = !!i1571[48]
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1577 = data
  request.r(i1577[0], i1577[1], 0, i1576, 'lightmapColor')
  request.r(i1577[2], i1577[3], 0, i1576, 'lightmapDirection')
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1578 = root || new UnityEngine.LightProbes()
  var i1579 = data
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1587 = data
  var i1589 = i1587[0]
  var i1588 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1589[i + 0]));
  }
  i1586.ShaderCompilationErrors = i1588
  i1586.name = i1587[1]
  i1586.guid = i1587[2]
  var i1591 = i1587[3]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 1) {
    i1590.push( i1591[i + 0] );
  }
  i1586.shaderDefinedKeywords = i1590
  var i1593 = i1587[4]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1593[i + 0]) );
  }
  i1586.passes = i1592
  var i1595 = i1587[5]
  var i1594 = []
  for(var i = 0; i < i1595.length; i += 1) {
    i1594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1595[i + 0]) );
  }
  i1586.usePasses = i1594
  var i1597 = i1587[6]
  var i1596 = []
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1597[i + 0]) );
  }
  i1586.defaultParameterValues = i1596
  request.r(i1587[7], i1587[8], 0, i1586, 'unityFallbackShader')
  i1586.readDepth = !!i1587[9]
  i1586.isCreatedByShaderGraph = !!i1587[10]
  i1586.disableBatching = !!i1587[11]
  i1586.compiled = !!i1587[12]
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1601 = data
  i1600.shaderName = i1601[0]
  i1600.errorMessage = i1601[1]
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1604 = root || new pc.UnityShaderPass()
  var i1605 = data
  i1604.id = i1605[0]
  i1604.subShaderIndex = i1605[1]
  i1604.name = i1605[2]
  i1604.passType = i1605[3]
  i1604.grabPassTextureName = i1605[4]
  i1604.usePass = !!i1605[5]
  i1604.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[6], i1604.zTest)
  i1604.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[7], i1604.zWrite)
  i1604.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[8], i1604.culling)
  i1604.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1605[9], i1604.blending)
  i1604.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1605[10], i1604.alphaBlending)
  i1604.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[11], i1604.colorWriteMask)
  i1604.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[12], i1604.offsetUnits)
  i1604.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[13], i1604.offsetFactor)
  i1604.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[14], i1604.stencilRef)
  i1604.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[15], i1604.stencilReadMask)
  i1604.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[16], i1604.stencilWriteMask)
  i1604.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1605[17], i1604.stencilOp)
  i1604.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1605[18], i1604.stencilOpFront)
  i1604.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1605[19], i1604.stencilOpBack)
  var i1607 = i1605[20]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1607[i + 0]) );
  }
  i1604.tags = i1606
  var i1609 = i1605[21]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.push( i1609[i + 0] );
  }
  i1604.passDefinedKeywords = i1608
  var i1611 = i1605[22]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1611[i + 0]) );
  }
  i1604.passDefinedKeywordGroups = i1610
  var i1613 = i1605[23]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1613[i + 0]) );
  }
  i1604.variants = i1612
  var i1615 = i1605[24]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1615[i + 0]) );
  }
  i1604.excludedVariants = i1614
  i1604.hasDepthReader = !!i1605[25]
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1617 = data
  i1616.val = i1617[0]
  i1616.name = i1617[1]
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1619 = data
  i1618.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1619[0], i1618.src)
  i1618.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1619[1], i1618.dst)
  i1618.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1619[2], i1618.op)
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1621 = data
  i1620.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1621[0], i1620.pass)
  i1620.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1621[1], i1620.fail)
  i1620.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1621[2], i1620.zFail)
  i1620.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1621[3], i1620.comp)
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1625 = data
  i1624.name = i1625[0]
  i1624.value = i1625[1]
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1629 = data
  var i1631 = i1629[0]
  var i1630 = []
  for(var i = 0; i < i1631.length; i += 1) {
    i1630.push( i1631[i + 0] );
  }
  i1628.keywords = i1630
  i1628.hasDiscard = !!i1629[1]
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1635 = data
  i1634.passId = i1635[0]
  i1634.subShaderIndex = i1635[1]
  var i1637 = i1635[2]
  var i1636 = []
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.push( i1637[i + 0] );
  }
  i1634.keywords = i1636
  i1634.vertexProgram = i1635[3]
  i1634.fragmentProgram = i1635[4]
  i1634.exportedForWebGl2 = !!i1635[5]
  i1634.readDepth = !!i1635[6]
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, 'shader')
  i1640.pass = i1641[2]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1645 = data
  i1644.name = i1645[0]
  i1644.type = i1645[1]
  i1644.value = new pc.Vec4( i1645[2], i1645[3], i1645[4], i1645[5] )
  i1644.textureValue = i1645[6]
  i1644.shaderPropertyFlag = i1645[7]
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1647 = data
  i1646.name = i1647[0]
  request.r(i1647[1], i1647[2], 0, i1646, 'texture')
  i1646.aabb = i1647[3]
  i1646.vertices = i1647[4]
  i1646.triangles = i1647[5]
  i1646.textureRect = UnityEngine.Rect.MinMaxRect(i1647[6], i1647[7], i1647[8], i1647[9])
  i1646.packedRect = UnityEngine.Rect.MinMaxRect(i1647[10], i1647[11], i1647[12], i1647[13])
  i1646.border = new pc.Vec4( i1647[14], i1647[15], i1647[16], i1647[17] )
  i1646.transparency = i1647[18]
  i1646.bounds = i1647[19]
  i1646.pixelsPerUnit = i1647[20]
  i1646.textureWidth = i1647[21]
  i1646.textureHeight = i1647[22]
  i1646.nativeSize = new pc.Vec2( i1647[23], i1647[24] )
  i1646.pivot = new pc.Vec2( i1647[25], i1647[26] )
  i1646.textureRectOffset = new pc.Vec2( i1647[27], i1647[28] )
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1649 = data
  i1648.name = i1649[0]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1651 = data
  i1650.name = i1651[0]
  i1650.ascent = i1651[1]
  i1650.originalLineHeight = i1651[2]
  i1650.fontSize = i1651[3]
  var i1653 = i1651[4]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1653[i + 0]) );
  }
  i1650.characterInfo = i1652
  request.r(i1651[5], i1651[6], 0, i1650, 'texture')
  i1650.originalFontSize = i1651[7]
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1657 = data
  i1656.index = i1657[0]
  i1656.advance = i1657[1]
  i1656.bearing = i1657[2]
  i1656.glyphWidth = i1657[3]
  i1656.glyphHeight = i1657[4]
  i1656.minX = i1657[5]
  i1656.maxX = i1657[6]
  i1656.minY = i1657[7]
  i1656.maxY = i1657[8]
  i1656.uvBottomLeftX = i1657[9]
  i1656.uvBottomLeftY = i1657[10]
  i1656.uvBottomRightX = i1657[11]
  i1656.uvBottomRightY = i1657[12]
  i1656.uvTopLeftX = i1657[13]
  i1656.uvTopLeftY = i1657[14]
  i1656.uvTopRightX = i1657[15]
  i1656.uvTopRightY = i1657[16]
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1659 = data
  i1658.name = i1659[0]
  i1658.bytes64 = i1659[1]
  i1658.data = i1659[2]
  return i1658
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1660 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1661 = data
  var i1663 = i1661[0]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 2) {
  request.r(i1663[i + 0], i1663[i + 1], 2, i1662, '')
  }
  i1660.atlasAssets = i1662
  i1660.scale = i1661[1]
  request.r(i1661[2], i1661[3], 0, i1660, 'skeletonJSON')
  i1660.isUpgradingBlendModeMaterials = !!i1661[4]
  i1660.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1661[5], i1660.blendModeMaterials)
  var i1665 = i1661[6]
  var i1664 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1665.length; i += 2) {
  request.r(i1665[i + 0], i1665[i + 1], 1, i1664, '')
  }
  i1660.skeletonDataModifiers = i1664
  var i1667 = i1661[7]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( i1667[i + 0] );
  }
  i1660.fromAnimation = i1666
  var i1669 = i1661[8]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( i1669[i + 0] );
  }
  i1660.toAnimation = i1668
  i1660.duration = i1661[9]
  i1660.defaultMix = i1661[10]
  request.r(i1661[11], i1661[12], 0, i1660, 'controller')
  return i1660
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1672 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1673 = data
  i1672.applyAdditiveMaterial = !!i1673[0]
  var i1675 = i1673[1]
  var i1674 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1675[i + 0]));
  }
  i1672.additiveMaterials = i1674
  var i1677 = i1673[2]
  var i1676 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1677[i + 0]));
  }
  i1672.multiplyMaterials = i1676
  var i1679 = i1673[3]
  var i1678 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1679[i + 0]));
  }
  i1672.screenMaterials = i1678
  i1672.requiresBlendModeMaterials = !!i1673[4]
  return i1672
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1682 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1683 = data
  i1682.pageName = i1683[0]
  request.r(i1683[1], i1683[2], 0, i1682, 'material')
  return i1682
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1686 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1687 = data
  request.r(i1687[0], i1687[1], 0, i1686, 'atlasFile')
  var i1689 = i1687[2]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 2) {
  request.r(i1689[i + 0], i1689[i + 1], 2, i1688, '')
  }
  i1686.materials = i1688
  i1686.textureLoadingMode = i1687[3]
  request.r(i1687[4], i1687[5], 0, i1686, 'onDemandTextureLoader')
  return i1686
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1690 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1691 = data
  request.r(i1691[0], i1691[1], 0, i1690, 'atlas')
  i1690.normalStyle = i1691[2]
  i1690.normalSpacingOffset = i1691[3]
  i1690.boldStyle = i1691[4]
  i1690.boldSpacing = i1691[5]
  i1690.italicStyle = i1691[6]
  i1690.tabSize = i1691[7]
  i1690.hashCode = i1691[8]
  request.r(i1691[9], i1691[10], 0, i1690, 'material')
  i1690.materialHashCode = i1691[11]
  i1690.m_Version = i1691[12]
  i1690.m_SourceFontFileGUID = i1691[13]
  request.r(i1691[14], i1691[15], 0, i1690, 'm_SourceFontFile_EditorRef')
  request.r(i1691[16], i1691[17], 0, i1690, 'm_SourceFontFile')
  i1690.m_AtlasPopulationMode = i1691[18]
  i1690.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1691[19], i1690.m_FaceInfo)
  var i1693 = i1691[20]
  var i1692 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.add(request.d('UnityEngine.TextCore.Glyph', i1693[i + 0]));
  }
  i1690.m_GlyphTable = i1692
  var i1695 = i1691[21]
  var i1694 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.add(request.d('TMPro.TMP_Character', i1695[i + 0]));
  }
  i1690.m_CharacterTable = i1694
  var i1697 = i1691[22]
  var i1696 = []
  for(var i = 0; i < i1697.length; i += 2) {
  request.r(i1697[i + 0], i1697[i + 1], 2, i1696, '')
  }
  i1690.m_AtlasTextures = i1696
  i1690.m_AtlasTextureIndex = i1691[23]
  i1690.m_IsMultiAtlasTexturesEnabled = !!i1691[24]
  i1690.m_ClearDynamicDataOnBuild = !!i1691[25]
  var i1699 = i1691[26]
  var i1698 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.add(request.d('UnityEngine.TextCore.GlyphRect', i1699[i + 0]));
  }
  i1690.m_UsedGlyphRects = i1698
  var i1701 = i1691[27]
  var i1700 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.add(request.d('UnityEngine.TextCore.GlyphRect', i1701[i + 0]));
  }
  i1690.m_FreeGlyphRects = i1700
  i1690.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1691[28], i1690.m_fontInfo)
  i1690.m_AtlasWidth = i1691[29]
  i1690.m_AtlasHeight = i1691[30]
  i1690.m_AtlasPadding = i1691[31]
  i1690.m_AtlasRenderMode = i1691[32]
  var i1703 = i1691[33]
  var i1702 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.add(request.d('TMPro.TMP_Glyph', i1703[i + 0]));
  }
  i1690.m_glyphInfoList = i1702
  i1690.m_KerningTable = request.d('TMPro.KerningTable', i1691[34], i1690.m_KerningTable)
  i1690.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1691[35], i1690.m_FontFeatureTable)
  var i1705 = i1691[36]
  var i1704 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1705.length; i += 2) {
  request.r(i1705[i + 0], i1705[i + 1], 1, i1704, '')
  }
  i1690.fallbackFontAssets = i1704
  var i1707 = i1691[37]
  var i1706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1707.length; i += 2) {
  request.r(i1707[i + 0], i1707[i + 1], 1, i1706, '')
  }
  i1690.m_FallbackFontAssetTable = i1706
  i1690.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1691[38], i1690.m_CreationSettings)
  var i1709 = i1691[39]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('TMPro.TMP_FontWeightPair', i1709[i + 0]) );
  }
  i1690.m_FontWeightTable = i1708
  var i1711 = i1691[40]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( request.d('TMPro.TMP_FontWeightPair', i1711[i + 0]) );
  }
  i1690.fontWeights = i1710
  return i1690
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1712 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1713 = data
  i1712.m_FaceIndex = i1713[0]
  i1712.m_FamilyName = i1713[1]
  i1712.m_StyleName = i1713[2]
  i1712.m_PointSize = i1713[3]
  i1712.m_Scale = i1713[4]
  i1712.m_UnitsPerEM = i1713[5]
  i1712.m_LineHeight = i1713[6]
  i1712.m_AscentLine = i1713[7]
  i1712.m_CapLine = i1713[8]
  i1712.m_MeanLine = i1713[9]
  i1712.m_Baseline = i1713[10]
  i1712.m_DescentLine = i1713[11]
  i1712.m_SuperscriptOffset = i1713[12]
  i1712.m_SuperscriptSize = i1713[13]
  i1712.m_SubscriptOffset = i1713[14]
  i1712.m_SubscriptSize = i1713[15]
  i1712.m_UnderlineOffset = i1713[16]
  i1712.m_UnderlineThickness = i1713[17]
  i1712.m_StrikethroughOffset = i1713[18]
  i1712.m_StrikethroughThickness = i1713[19]
  i1712.m_TabWidth = i1713[20]
  return i1712
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1716 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1717 = data
  i1716.m_Index = i1717[0]
  i1716.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1717[1], i1716.m_Metrics)
  i1716.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1717[2], i1716.m_GlyphRect)
  i1716.m_Scale = i1717[3]
  i1716.m_AtlasIndex = i1717[4]
  i1716.m_ClassDefinitionType = i1717[5]
  return i1716
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1718 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1719 = data
  i1718.m_Width = i1719[0]
  i1718.m_Height = i1719[1]
  i1718.m_HorizontalBearingX = i1719[2]
  i1718.m_HorizontalBearingY = i1719[3]
  i1718.m_HorizontalAdvance = i1719[4]
  return i1718
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1720 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1721 = data
  i1720.m_X = i1721[0]
  i1720.m_Y = i1721[1]
  i1720.m_Width = i1721[2]
  i1720.m_Height = i1721[3]
  return i1720
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1724 = root || request.c( 'TMPro.TMP_Character' )
  var i1725 = data
  i1724.m_ElementType = i1725[0]
  i1724.m_Unicode = i1725[1]
  i1724.m_GlyphIndex = i1725[2]
  i1724.m_Scale = i1725[3]
  return i1724
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1730 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1731 = data
  i1730.Name = i1731[0]
  i1730.PointSize = i1731[1]
  i1730.Scale = i1731[2]
  i1730.CharacterCount = i1731[3]
  i1730.LineHeight = i1731[4]
  i1730.Baseline = i1731[5]
  i1730.Ascender = i1731[6]
  i1730.CapHeight = i1731[7]
  i1730.Descender = i1731[8]
  i1730.CenterLine = i1731[9]
  i1730.SuperscriptOffset = i1731[10]
  i1730.SubscriptOffset = i1731[11]
  i1730.SubSize = i1731[12]
  i1730.Underline = i1731[13]
  i1730.UnderlineThickness = i1731[14]
  i1730.strikethrough = i1731[15]
  i1730.strikethroughThickness = i1731[16]
  i1730.TabWidth = i1731[17]
  i1730.Padding = i1731[18]
  i1730.AtlasWidth = i1731[19]
  i1730.AtlasHeight = i1731[20]
  return i1730
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1734 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1735 = data
  i1734.id = i1735[0]
  i1734.x = i1735[1]
  i1734.y = i1735[2]
  i1734.width = i1735[3]
  i1734.height = i1735[4]
  i1734.xOffset = i1735[5]
  i1734.yOffset = i1735[6]
  i1734.xAdvance = i1735[7]
  i1734.scale = i1735[8]
  return i1734
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1736 = root || request.c( 'TMPro.KerningTable' )
  var i1737 = data
  var i1739 = i1737[0]
  var i1738 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1739.length; i += 1) {
    i1738.add(request.d('TMPro.KerningPair', i1739[i + 0]));
  }
  i1736.kerningPairs = i1738
  return i1736
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1742 = root || request.c( 'TMPro.KerningPair' )
  var i1743 = data
  i1742.xOffset = i1743[0]
  i1742.m_FirstGlyph = i1743[1]
  i1742.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1743[2], i1742.m_FirstGlyphAdjustments)
  i1742.m_SecondGlyph = i1743[3]
  i1742.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1743[4], i1742.m_SecondGlyphAdjustments)
  i1742.m_IgnoreSpacingAdjustments = !!i1743[5]
  return i1742
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1744 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1745 = data
  var i1747 = i1745[0]
  var i1746 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1747[i + 0]));
  }
  i1744.m_GlyphPairAdjustmentRecords = i1746
  return i1744
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1750 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1751 = data
  i1750.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1751[0], i1750.m_FirstAdjustmentRecord)
  i1750.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1751[1], i1750.m_SecondAdjustmentRecord)
  i1750.m_FeatureLookupFlags = i1751[2]
  return i1750
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1754 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1755 = data
  i1754.sourceFontFileName = i1755[0]
  i1754.sourceFontFileGUID = i1755[1]
  i1754.pointSizeSamplingMode = i1755[2]
  i1754.pointSize = i1755[3]
  i1754.padding = i1755[4]
  i1754.packingMode = i1755[5]
  i1754.atlasWidth = i1755[6]
  i1754.atlasHeight = i1755[7]
  i1754.characterSetSelectionMode = i1755[8]
  i1754.characterSequence = i1755[9]
  i1754.referencedFontAssetGUID = i1755[10]
  i1754.referencedTextAssetGUID = i1755[11]
  i1754.fontStyle = i1755[12]
  i1754.fontStyleModifier = i1755[13]
  i1754.renderMode = i1755[14]
  i1754.includeFontFeatures = !!i1755[15]
  return i1754
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1758 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1759 = data
  request.r(i1759[0], i1759[1], 0, i1758, 'regularTypeface')
  request.r(i1759[2], i1759[3], 0, i1758, 'italicTypeface')
  return i1758
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1760 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1761 = data
  i1760.useSafeMode = !!i1761[0]
  i1760.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1761[1], i1760.safeModeOptions)
  i1760.timeScale = i1761[2]
  i1760.unscaledTimeScale = i1761[3]
  i1760.useSmoothDeltaTime = !!i1761[4]
  i1760.maxSmoothUnscaledTime = i1761[5]
  i1760.rewindCallbackMode = i1761[6]
  i1760.showUnityEditorReport = !!i1761[7]
  i1760.logBehaviour = i1761[8]
  i1760.drawGizmos = !!i1761[9]
  i1760.defaultRecyclable = !!i1761[10]
  i1760.defaultAutoPlay = i1761[11]
  i1760.defaultUpdateType = i1761[12]
  i1760.defaultTimeScaleIndependent = !!i1761[13]
  i1760.defaultEaseType = i1761[14]
  i1760.defaultEaseOvershootOrAmplitude = i1761[15]
  i1760.defaultEasePeriod = i1761[16]
  i1760.defaultAutoKill = !!i1761[17]
  i1760.defaultLoopType = i1761[18]
  i1760.debugMode = !!i1761[19]
  i1760.debugStoreTargetId = !!i1761[20]
  i1760.showPreviewPanel = !!i1761[21]
  i1760.storeSettingsLocation = i1761[22]
  i1760.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1761[23], i1760.modules)
  i1760.createASMDEF = !!i1761[24]
  i1760.showPlayingTweens = !!i1761[25]
  i1760.showPausedTweens = !!i1761[26]
  return i1760
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1762 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1763 = data
  i1762.logBehaviour = i1763[0]
  i1762.nestedTweenFailureBehaviour = i1763[1]
  return i1762
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1764 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1765 = data
  i1764.showPanel = !!i1765[0]
  i1764.audioEnabled = !!i1765[1]
  i1764.physicsEnabled = !!i1765[2]
  i1764.physics2DEnabled = !!i1765[3]
  i1764.spriteEnabled = !!i1765[4]
  i1764.uiEnabled = !!i1765[5]
  i1764.textMeshProEnabled = !!i1765[6]
  i1764.tk2DEnabled = !!i1765[7]
  i1764.deAudioEnabled = !!i1765[8]
  i1764.deUnityExtendedEnabled = !!i1765[9]
  i1764.epoOutlineEnabled = !!i1765[10]
  return i1764
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1766 = root || request.c( 'TMPro.TMP_Settings' )
  var i1767 = data
  i1766.m_enableWordWrapping = !!i1767[0]
  i1766.m_enableKerning = !!i1767[1]
  i1766.m_enableExtraPadding = !!i1767[2]
  i1766.m_enableTintAllSprites = !!i1767[3]
  i1766.m_enableParseEscapeCharacters = !!i1767[4]
  i1766.m_EnableRaycastTarget = !!i1767[5]
  i1766.m_GetFontFeaturesAtRuntime = !!i1767[6]
  i1766.m_missingGlyphCharacter = i1767[7]
  i1766.m_warningsDisabled = !!i1767[8]
  request.r(i1767[9], i1767[10], 0, i1766, 'm_defaultFontAsset')
  i1766.m_defaultFontAssetPath = i1767[11]
  i1766.m_defaultFontSize = i1767[12]
  i1766.m_defaultAutoSizeMinRatio = i1767[13]
  i1766.m_defaultAutoSizeMaxRatio = i1767[14]
  i1766.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1767[15], i1767[16] )
  i1766.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1767[17], i1767[18] )
  i1766.m_autoSizeTextContainer = !!i1767[19]
  i1766.m_IsTextObjectScaleStatic = !!i1767[20]
  var i1769 = i1767[21]
  var i1768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1769.length; i += 2) {
  request.r(i1769[i + 0], i1769[i + 1], 1, i1768, '')
  }
  i1766.m_fallbackFontAssets = i1768
  i1766.m_matchMaterialPreset = !!i1767[22]
  request.r(i1767[23], i1767[24], 0, i1766, 'm_defaultSpriteAsset')
  i1766.m_defaultSpriteAssetPath = i1767[25]
  i1766.m_enableEmojiSupport = !!i1767[26]
  i1766.m_MissingCharacterSpriteUnicode = i1767[27]
  i1766.m_defaultColorGradientPresetsPath = i1767[28]
  request.r(i1767[29], i1767[30], 0, i1766, 'm_defaultStyleSheet')
  i1766.m_StyleSheetsResourcePath = i1767[31]
  request.r(i1767[32], i1767[33], 0, i1766, 'm_leadingCharacters')
  request.r(i1767[34], i1767[35], 0, i1766, 'm_followingCharacters')
  i1766.m_UseModernHangulLineBreakingRules = !!i1767[36]
  return i1766
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1770 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1771 = data
  request.r(i1771[0], i1771[1], 0, i1770, 'spriteSheet')
  var i1773 = i1771[2]
  var i1772 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.add(request.d('TMPro.TMP_Sprite', i1773[i + 0]));
  }
  i1770.spriteInfoList = i1772
  var i1775 = i1771[3]
  var i1774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1775.length; i += 2) {
  request.r(i1775[i + 0], i1775[i + 1], 1, i1774, '')
  }
  i1770.fallbackSpriteAssets = i1774
  i1770.hashCode = i1771[4]
  request.r(i1771[5], i1771[6], 0, i1770, 'material')
  i1770.materialHashCode = i1771[7]
  i1770.m_Version = i1771[8]
  i1770.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1771[9], i1770.m_FaceInfo)
  var i1777 = i1771[10]
  var i1776 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1777.length; i += 1) {
    i1776.add(request.d('TMPro.TMP_SpriteCharacter', i1777[i + 0]));
  }
  i1770.m_SpriteCharacterTable = i1776
  var i1779 = i1771[11]
  var i1778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.add(request.d('TMPro.TMP_SpriteGlyph', i1779[i + 0]));
  }
  i1770.m_SpriteGlyphTable = i1778
  return i1770
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1782 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1783 = data
  i1782.name = i1783[0]
  i1782.hashCode = i1783[1]
  i1782.unicode = i1783[2]
  i1782.pivot = new pc.Vec2( i1783[3], i1783[4] )
  request.r(i1783[5], i1783[6], 0, i1782, 'sprite')
  i1782.id = i1783[7]
  i1782.x = i1783[8]
  i1782.y = i1783[9]
  i1782.width = i1783[10]
  i1782.height = i1783[11]
  i1782.xOffset = i1783[12]
  i1782.yOffset = i1783[13]
  i1782.xAdvance = i1783[14]
  i1782.scale = i1783[15]
  return i1782
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1788 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1789 = data
  i1788.m_Name = i1789[0]
  i1788.m_HashCode = i1789[1]
  i1788.m_ElementType = i1789[2]
  i1788.m_Unicode = i1789[3]
  i1788.m_GlyphIndex = i1789[4]
  i1788.m_Scale = i1789[5]
  return i1788
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1792 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1793 = data
  request.r(i1793[0], i1793[1], 0, i1792, 'sprite')
  i1792.m_Index = i1793[2]
  i1792.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1793[3], i1792.m_Metrics)
  i1792.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1793[4], i1792.m_GlyphRect)
  i1792.m_Scale = i1793[5]
  i1792.m_AtlasIndex = i1793[6]
  i1792.m_ClassDefinitionType = i1793[7]
  return i1792
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1794 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1795 = data
  var i1797 = i1795[0]
  var i1796 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.add(request.d('TMPro.TMP_Style', i1797[i + 0]));
  }
  i1794.m_StyleList = i1796
  return i1794
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1800 = root || request.c( 'TMPro.TMP_Style' )
  var i1801 = data
  i1800.m_Name = i1801[0]
  i1800.m_HashCode = i1801[1]
  i1800.m_OpeningDefinition = i1801[2]
  i1800.m_ClosingDefinition = i1801[3]
  i1800.m_OpeningTagArray = i1801[4]
  i1800.m_ClosingTagArray = i1801[5]
  i1800.m_OpeningTagUnicodeArray = i1801[6]
  i1800.m_ClosingTagUnicodeArray = i1801[7]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1803 = data
  var i1805 = i1803[0]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1805[i + 0]) );
  }
  i1802.files = i1804
  i1802.componentToPrefabIds = i1803[1]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1809 = data
  i1808.path = i1809[0]
  request.r(i1809[1], i1809[2], 0, i1808, 'unityObject')
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1811 = data
  var i1813 = i1811[0]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1813[i + 0]) );
  }
  i1810.scriptsExecutionOrder = i1812
  var i1815 = i1811[1]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1815[i + 0]) );
  }
  i1810.sortingLayers = i1814
  var i1817 = i1811[2]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1817[i + 0]) );
  }
  i1810.cullingLayers = i1816
  i1810.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1811[3], i1810.timeSettings)
  i1810.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1811[4], i1810.physicsSettings)
  i1810.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1811[5], i1810.physics2DSettings)
  i1810.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1811[6], i1810.qualitySettings)
  i1810.enableRealtimeShadows = !!i1811[7]
  i1810.enableAutoInstancing = !!i1811[8]
  i1810.enableStaticBatching = !!i1811[9]
  i1810.enableDynamicBatching = !!i1811[10]
  i1810.lightmapEncodingQuality = i1811[11]
  i1810.desiredColorSpace = i1811[12]
  var i1819 = i1811[13]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.push( i1819[i + 0] );
  }
  i1810.allTags = i1818
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1823 = data
  i1822.name = i1823[0]
  i1822.value = i1823[1]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1827 = data
  i1826.id = i1827[0]
  i1826.name = i1827[1]
  i1826.value = i1827[2]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1831 = data
  i1830.id = i1831[0]
  i1830.name = i1831[1]
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1833 = data
  i1832.fixedDeltaTime = i1833[0]
  i1832.maximumDeltaTime = i1833[1]
  i1832.timeScale = i1833[2]
  i1832.maximumParticleTimestep = i1833[3]
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1835 = data
  i1834.gravity = new pc.Vec3( i1835[0], i1835[1], i1835[2] )
  i1834.defaultSolverIterations = i1835[3]
  i1834.bounceThreshold = i1835[4]
  i1834.autoSyncTransforms = !!i1835[5]
  i1834.autoSimulation = !!i1835[6]
  var i1837 = i1835[7]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1837[i + 0]) );
  }
  i1834.collisionMatrix = i1836
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1841 = data
  i1840.enabled = !!i1841[0]
  i1840.layerId = i1841[1]
  i1840.otherLayerId = i1841[2]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1843 = data
  request.r(i1843[0], i1843[1], 0, i1842, 'material')
  i1842.gravity = new pc.Vec2( i1843[2], i1843[3] )
  i1842.positionIterations = i1843[4]
  i1842.velocityIterations = i1843[5]
  i1842.velocityThreshold = i1843[6]
  i1842.maxLinearCorrection = i1843[7]
  i1842.maxAngularCorrection = i1843[8]
  i1842.maxTranslationSpeed = i1843[9]
  i1842.maxRotationSpeed = i1843[10]
  i1842.baumgarteScale = i1843[11]
  i1842.baumgarteTOIScale = i1843[12]
  i1842.timeToSleep = i1843[13]
  i1842.linearSleepTolerance = i1843[14]
  i1842.angularSleepTolerance = i1843[15]
  i1842.defaultContactOffset = i1843[16]
  i1842.autoSimulation = !!i1843[17]
  i1842.queriesHitTriggers = !!i1843[18]
  i1842.queriesStartInColliders = !!i1843[19]
  i1842.callbacksOnDisable = !!i1843[20]
  i1842.reuseCollisionCallbacks = !!i1843[21]
  i1842.autoSyncTransforms = !!i1843[22]
  var i1845 = i1843[23]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1845[i + 0]) );
  }
  i1842.collisionMatrix = i1844
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1849 = data
  i1848.enabled = !!i1849[0]
  i1848.layerId = i1849[1]
  i1848.otherLayerId = i1849[2]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1851 = data
  var i1853 = i1851[0]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1853[i + 0]) );
  }
  i1850.qualityLevels = i1852
  var i1855 = i1851[1]
  var i1854 = []
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.push( i1855[i + 0] );
  }
  i1850.names = i1854
  i1850.shadows = i1851[2]
  i1850.anisotropicFiltering = i1851[3]
  i1850.antiAliasing = i1851[4]
  i1850.lodBias = i1851[5]
  i1850.shadowCascades = i1851[6]
  i1850.shadowDistance = i1851[7]
  i1850.shadowmaskMode = i1851[8]
  i1850.shadowProjection = i1851[9]
  i1850.shadowResolution = i1851[10]
  i1850.softParticles = !!i1851[11]
  i1850.softVegetation = !!i1851[12]
  i1850.activeColorSpace = i1851[13]
  i1850.desiredColorSpace = i1851[14]
  i1850.masterTextureLimit = i1851[15]
  i1850.maxQueuedFrames = i1851[16]
  i1850.particleRaycastBudget = i1851[17]
  i1850.pixelLightCount = i1851[18]
  i1850.realtimeReflectionProbes = !!i1851[19]
  i1850.shadowCascade2Split = i1851[20]
  i1850.shadowCascade4Split = new pc.Vec3( i1851[21], i1851[22], i1851[23] )
  i1850.streamingMipmapsActive = !!i1851[24]
  i1850.vSyncCount = i1851[25]
  i1850.asyncUploadBufferSize = i1851[26]
  i1850.asyncUploadTimeSlice = i1851[27]
  i1850.billboardsFaceCameraPosition = !!i1851[28]
  i1850.shadowNearPlaneOffset = i1851[29]
  i1850.streamingMipmapsMemoryBudget = i1851[30]
  i1850.maximumLODLevel = i1851[31]
  i1850.streamingMipmapsAddAllCameras = !!i1851[32]
  i1850.streamingMipmapsMaxLevelReduction = i1851[33]
  i1850.streamingMipmapsRenderersPerFrame = i1851[34]
  i1850.resolutionScalingFixedDPIFactor = i1851[35]
  i1850.streamingMipmapsMaxFileIORequests = i1851[36]
  i1850.currentQualityLevel = i1851[37]
  return i1850
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1858 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1859 = data
  i1858.xPlacement = i1859[0]
  i1858.yPlacement = i1859[1]
  i1858.xAdvance = i1859[2]
  i1858.yAdvance = i1859[3]
  return i1858
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1860 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1861 = data
  i1860.m_GlyphIndex = i1861[0]
  i1860.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1861[1], i1860.m_GlyphValueRecord)
  return i1860
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1862 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1863 = data
  i1862.m_XPlacement = i1863[0]
  i1862.m_YPlacement = i1863[1]
  i1862.m_XAdvance = i1863[2]
  i1862.m_YAdvance = i1863[3]
  return i1862
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[3],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[3],"71":[72],"73":[74],"75":[74],"9":[8],"76":[77],"78":[79],"80":[77],"81":[8],"82":[8],"11":[9],"18":[19,8],"83":[8],"10":[9],"84":[8],"85":[8],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"28":[8],"91":[8],"16":[19,8],"92":[8],"93":[8],"94":[8],"95":[8],"96":[19,8],"97":[8],"98":[6],"99":[6],"7":[6],"100":[6],"101":[3],"102":[3],"103":[104],"105":[3],"106":[107],"108":[8],"109":[19,8],"110":[72],"23":[19,8],"111":[112,72],"113":[72],"114":[72,115],"116":[49],"117":[57],"118":[107],"119":[120],"121":[8],"122":[72,8],"17":[8,19],"123":[8],"124":[19,8],"125":[72],"126":[19,8],"127":[8],"128":[77]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","ClickItem","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","DG.Tweening.DOTweenAnimation","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "170.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BEQ_V17_NgocNDL_AnhPD";

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

Deserializers.buildID = "e7bbe937-c2dc-4d21-85d8-e34556e48142";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

