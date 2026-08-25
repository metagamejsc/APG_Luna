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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1469 = data
  i1468.aspect = i1469[0]
  i1468.orthographic = !!i1469[1]
  i1468.orthographicSize = i1469[2]
  i1468.backgroundColor = new pc.Color(i1469[3], i1469[4], i1469[5], i1469[6])
  i1468.nearClipPlane = i1469[7]
  i1468.farClipPlane = i1469[8]
  i1468.fieldOfView = i1469[9]
  i1468.depth = i1469[10]
  i1468.clearFlags = i1469[11]
  i1468.cullingMask = i1469[12]
  i1468.rect = i1469[13]
  request.r(i1469[14], i1469[15], 0, i1468, 'targetTexture')
  i1468.usePhysicalProperties = !!i1469[16]
  i1468.focalLength = i1469[17]
  i1468.sensorSize = new pc.Vec2( i1469[18], i1469[19] )
  i1468.lensShift = new pc.Vec2( i1469[20], i1469[21] )
  i1468.gateFit = i1469[22]
  i1468.commandBufferCount = i1469[23]
  i1468.cameraType = i1469[24]
  i1468.enabled = !!i1469[25]
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1471 = data
  i1470.name = i1471[0]
  i1470.tagId = i1471[1]
  i1470.enabled = !!i1471[2]
  i1470.isStatic = !!i1471[3]
  i1470.layer = i1471[4]
  return i1470
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1472 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1473 = data
  request.r(i1473[0], i1473[1], 0, i1472, 'm_FirstSelected')
  i1472.m_sendNavigationEvents = !!i1473[2]
  i1472.m_DragThreshold = i1473[3]
  return i1472
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1474 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1475 = data
  i1474.m_HorizontalAxis = i1475[0]
  i1474.m_VerticalAxis = i1475[1]
  i1474.m_SubmitButton = i1475[2]
  i1474.m_CancelButton = i1475[3]
  i1474.m_InputActionsPerSecond = i1475[4]
  i1474.m_RepeatDelay = i1475[5]
  i1474.m_ForceModuleActive = !!i1475[6]
  i1474.m_SendPointerHoverToParent = !!i1475[7]
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1477 = data
  i1476.pivot = new pc.Vec2( i1477[0], i1477[1] )
  i1476.anchorMin = new pc.Vec2( i1477[2], i1477[3] )
  i1476.anchorMax = new pc.Vec2( i1477[4], i1477[5] )
  i1476.sizeDelta = new pc.Vec2( i1477[6], i1477[7] )
  i1476.anchoredPosition3D = new pc.Vec3( i1477[8], i1477[9], i1477[10] )
  i1476.rotation = new pc.Quat(i1477[11], i1477[12], i1477[13], i1477[14])
  i1476.scale = new pc.Vec3( i1477[15], i1477[16], i1477[17] )
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1479 = data
  i1478.planeDistance = i1479[0]
  i1478.referencePixelsPerUnit = i1479[1]
  i1478.isFallbackOverlay = !!i1479[2]
  i1478.renderMode = i1479[3]
  i1478.renderOrder = i1479[4]
  i1478.sortingLayerName = i1479[5]
  i1478.sortingOrder = i1479[6]
  i1478.scaleFactor = i1479[7]
  request.r(i1479[8], i1479[9], 0, i1478, 'worldCamera')
  i1478.overrideSorting = !!i1479[10]
  i1478.pixelPerfect = !!i1479[11]
  i1478.targetDisplay = i1479[12]
  i1478.overridePixelPerfect = !!i1479[13]
  i1478.enabled = !!i1479[14]
  return i1478
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1480 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1481 = data
  i1480.m_UiScaleMode = i1481[0]
  i1480.m_ReferencePixelsPerUnit = i1481[1]
  i1480.m_ScaleFactor = i1481[2]
  i1480.m_ReferenceResolution = new pc.Vec2( i1481[3], i1481[4] )
  i1480.m_ScreenMatchMode = i1481[5]
  i1480.m_MatchWidthOrHeight = i1481[6]
  i1480.m_PhysicalUnit = i1481[7]
  i1480.m_FallbackScreenDPI = i1481[8]
  i1480.m_DefaultSpriteDPI = i1481[9]
  i1480.m_DynamicPixelsPerUnit = i1481[10]
  i1480.m_PresetInfoIsWorld = !!i1481[11]
  return i1480
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1482 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1483 = data
  i1482.m_IgnoreReversedGraphics = !!i1483[0]
  i1482.m_BlockingObjects = i1483[1]
  i1482.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1483[2] )
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1485 = data
  i1484.cullTransparentMesh = !!i1485[0]
  return i1484
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1486 = root || request.c( 'UnityEngine.UI.Image' )
  var i1487 = data
  request.r(i1487[0], i1487[1], 0, i1486, 'm_Sprite')
  i1486.m_Type = i1487[2]
  i1486.m_PreserveAspect = !!i1487[3]
  i1486.m_FillCenter = !!i1487[4]
  i1486.m_FillMethod = i1487[5]
  i1486.m_FillAmount = i1487[6]
  i1486.m_FillClockwise = !!i1487[7]
  i1486.m_FillOrigin = i1487[8]
  i1486.m_UseSpriteMesh = !!i1487[9]
  i1486.m_PixelsPerUnitMultiplier = i1487[10]
  request.r(i1487[11], i1487[12], 0, i1486, 'm_Material')
  i1486.m_Maskable = !!i1487[13]
  i1486.m_Color = new pc.Color(i1487[14], i1487[15], i1487[16], i1487[17])
  i1486.m_RaycastTarget = !!i1487[18]
  i1486.m_RaycastPadding = new pc.Vec4( i1487[19], i1487[20], i1487[21], i1487[22] )
  return i1486
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1488 = root || request.c( 'UnityEngine.UI.Text' )
  var i1489 = data
  i1488.m_FontData = request.d('UnityEngine.UI.FontData', i1489[0], i1488.m_FontData)
  i1488.m_Text = i1489[1]
  request.r(i1489[2], i1489[3], 0, i1488, 'm_Material')
  i1488.m_Maskable = !!i1489[4]
  i1488.m_Color = new pc.Color(i1489[5], i1489[6], i1489[7], i1489[8])
  i1488.m_RaycastTarget = !!i1489[9]
  i1488.m_RaycastPadding = new pc.Vec4( i1489[10], i1489[11], i1489[12], i1489[13] )
  return i1488
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1491 = data
  request.r(i1491[0], i1491[1], 0, i1490, 'm_Font')
  i1490.m_FontSize = i1491[2]
  i1490.m_FontStyle = i1491[3]
  i1490.m_BestFit = !!i1491[4]
  i1490.m_MinSize = i1491[5]
  i1490.m_MaxSize = i1491[6]
  i1490.m_Alignment = i1491[7]
  i1490.m_AlignByGeometry = !!i1491[8]
  i1490.m_RichText = !!i1491[9]
  i1490.m_HorizontalOverflow = i1491[10]
  i1490.m_VerticalOverflow = i1491[11]
  i1490.m_LineSpacing = i1491[12]
  return i1490
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1492 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1493 = data
  request.r(i1493[0], i1493[1], 0, i1492, 'm_FillRect')
  request.r(i1493[2], i1493[3], 0, i1492, 'm_HandleRect')
  i1492.m_Direction = i1493[4]
  i1492.m_MinValue = i1493[5]
  i1492.m_MaxValue = i1493[6]
  i1492.m_WholeNumbers = !!i1493[7]
  i1492.m_Value = i1493[8]
  i1492.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1493[9], i1492.m_OnValueChanged)
  i1492.m_Navigation = request.d('UnityEngine.UI.Navigation', i1493[10], i1492.m_Navigation)
  i1492.m_Transition = i1493[11]
  i1492.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1493[12], i1492.m_Colors)
  i1492.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1493[13], i1492.m_SpriteState)
  i1492.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1493[14], i1492.m_AnimationTriggers)
  i1492.m_Interactable = !!i1493[15]
  request.r(i1493[16], i1493[17], 0, i1492, 'm_TargetGraphic')
  return i1492
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1495 = data
  i1494.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1495[0], i1494.m_PersistentCalls)
  return i1494
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1496 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1497 = data
  var i1499 = i1497[0]
  var i1498 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.add(request.d('UnityEngine.Events.PersistentCall', i1499[i + 0]));
  }
  i1496.m_Calls = i1498
  return i1496
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1502 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1503 = data
  request.r(i1503[0], i1503[1], 0, i1502, 'm_Target')
  i1502.m_TargetAssemblyTypeName = i1503[2]
  i1502.m_MethodName = i1503[3]
  i1502.m_Mode = i1503[4]
  i1502.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1503[5], i1502.m_Arguments)
  i1502.m_CallState = i1503[6]
  return i1502
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1504 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1505 = data
  i1504.m_Mode = i1505[0]
  i1504.m_WrapAround = !!i1505[1]
  request.r(i1505[2], i1505[3], 0, i1504, 'm_SelectOnUp')
  request.r(i1505[4], i1505[5], 0, i1504, 'm_SelectOnDown')
  request.r(i1505[6], i1505[7], 0, i1504, 'm_SelectOnLeft')
  request.r(i1505[8], i1505[9], 0, i1504, 'm_SelectOnRight')
  return i1504
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1506 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1507 = data
  i1506.m_NormalColor = new pc.Color(i1507[0], i1507[1], i1507[2], i1507[3])
  i1506.m_HighlightedColor = new pc.Color(i1507[4], i1507[5], i1507[6], i1507[7])
  i1506.m_PressedColor = new pc.Color(i1507[8], i1507[9], i1507[10], i1507[11])
  i1506.m_SelectedColor = new pc.Color(i1507[12], i1507[13], i1507[14], i1507[15])
  i1506.m_DisabledColor = new pc.Color(i1507[16], i1507[17], i1507[18], i1507[19])
  i1506.m_ColorMultiplier = i1507[20]
  i1506.m_FadeDuration = i1507[21]
  return i1506
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1508 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1509 = data
  request.r(i1509[0], i1509[1], 0, i1508, 'm_HighlightedSprite')
  request.r(i1509[2], i1509[3], 0, i1508, 'm_PressedSprite')
  request.r(i1509[4], i1509[5], 0, i1508, 'm_SelectedSprite')
  request.r(i1509[6], i1509[7], 0, i1508, 'm_DisabledSprite')
  return i1508
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1510 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1511 = data
  i1510.m_NormalTrigger = i1511[0]
  i1510.m_HighlightedTrigger = i1511[1]
  i1510.m_PressedTrigger = i1511[2]
  i1510.m_SelectedTrigger = i1511[3]
  i1510.m_DisabledTrigger = i1511[4]
  return i1510
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1512 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1513 = data
  i1512.m_ShowMaskGraphic = !!i1513[0]
  return i1512
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1514 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1515 = data
  request.r(i1515[0], i1515[1], 0, i1514, 'skeletonDataAsset')
  request.r(i1515[2], i1515[3], 0, i1514, 'additiveMaterial')
  request.r(i1515[4], i1515[5], 0, i1514, 'multiplyMaterial')
  request.r(i1515[6], i1515[7], 0, i1514, 'screenMaterial')
  i1514.initialSkinName = i1515[8]
  i1514.initialFlipX = !!i1515[9]
  i1514.initialFlipY = !!i1515[10]
  i1514.startingAnimation = i1515[11]
  i1514.startingLoop = !!i1515[12]
  i1514.timeScale = i1515[13]
  i1514.freeze = !!i1515[14]
  i1514.layoutScaleMode = i1515[15]
  i1514.updateWhenInvisible = i1515[16]
  i1514.allowMultipleCanvasRenderers = !!i1515[17]
  var i1517 = i1515[18]
  var i1516 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1517.length; i += 2) {
  request.r(i1517[i + 0], i1517[i + 1], 1, i1516, '')
  }
  i1514.canvasRenderers = i1516
  i1514.enableSeparatorSlots = !!i1515[19]
  i1514.updateSeparatorPartLocation = !!i1515[20]
  i1514.updateSeparatorPartScale = !!i1515[21]
  i1514.disableMeshAssignmentOnOverride = !!i1515[22]
  i1514.referenceSize = new pc.Vec2( i1515[23], i1515[24] )
  i1514.referenceScale = i1515[25]
  i1514.rectTransformSize = new pc.Vec2( i1515[26], i1515[27] )
  i1514.editReferenceRect = !!i1515[28]
  var i1519 = i1515[29]
  var i1518 = []
  for(var i = 0; i < i1519.length; i += 1) {
    i1518.push( i1519[i + 0] );
  }
  i1514.separatorSlotNames = i1518
  var i1521 = i1515[30]
  var i1520 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1521.length; i += 2) {
  request.r(i1521[i + 0], i1521[i + 1], 1, i1520, '')
  }
  i1514.separatorParts = i1520
  i1514.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1515[31], i1514.meshGenerator)
  i1514.updateTiming = i1515[32]
  i1514.unscaledTime = !!i1515[33]
  request.r(i1515[34], i1515[35], 0, i1514, 'm_Material')
  i1514.m_Maskable = !!i1515[36]
  i1514.m_Color = new pc.Color(i1515[37], i1515[38], i1515[39], i1515[40])
  i1514.m_RaycastTarget = !!i1515[41]
  i1514.m_RaycastPadding = new pc.Vec4( i1515[42], i1515[43], i1515[44], i1515[45] )
  return i1514
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1528 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1529 = data
  i1528.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1529[0], i1528.settings)
  return i1528
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1530 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1531 = data
  i1530.useClipping = !!i1531[0]
  i1530.zSpacing = i1531[1]
  i1530.pmaVertexColors = !!i1531[2]
  i1530.tintBlack = !!i1531[3]
  i1530.canvasGroupTintBlack = !!i1531[4]
  i1530.calculateTangents = !!i1531[5]
  i1530.addNormals = !!i1531[6]
  i1530.immutableTriangles = !!i1531[7]
  return i1530
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i1532 = root || request.c( 'AnimationController' )
  var i1533 = data
  request.r(i1533[0], i1533[1], 0, i1532, 'skeleton')
  return i1532
}

Deserializers["CharacterSkinController"] = function (request, data, root) {
  var i1534 = root || request.c( 'CharacterSkinController' )
  var i1535 = data
  request.r(i1535[0], i1535[1], 0, i1534, 'skeletonAnimation')
  var i1537 = i1535[2]
  var i1536 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.add(request.d('Item', i1537[i + 0]));
  }
  i1534.leftItems = i1536
  var i1539 = i1535[3]
  var i1538 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.add(request.d('Item', i1539[i + 0]));
  }
  i1534.rightItems = i1538
  i1534.lastItems = request.d('Item', i1535[4], i1534.lastItems)
  return i1534
}

Deserializers["Item"] = function (request, data, root) {
  var i1542 = root || request.c( 'Item' )
  var i1543 = data
  i1542.Piece = i1543[0]
  request.r(i1543[1], i1543[2], 0, i1542, 'ActiveItem')
  i1542.ActiveSkin = i1543[3]
  request.r(i1543[4], i1543[5], 0, i1542, 'ActiveSound')
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1545 = data
  i1544.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1545[0], i1544.main)
  i1544.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1545[1], i1544.colorBySpeed)
  i1544.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1545[2], i1544.colorOverLifetime)
  i1544.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1545[3], i1544.emission)
  i1544.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1545[4], i1544.rotationBySpeed)
  i1544.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1545[5], i1544.rotationOverLifetime)
  i1544.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1545[6], i1544.shape)
  i1544.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1545[7], i1544.sizeBySpeed)
  i1544.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1545[8], i1544.sizeOverLifetime)
  i1544.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1545[9], i1544.textureSheetAnimation)
  i1544.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1545[10], i1544.velocityOverLifetime)
  i1544.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1545[11], i1544.noise)
  i1544.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1545[12], i1544.inheritVelocity)
  i1544.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1545[13], i1544.forceOverLifetime)
  i1544.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1545[14], i1544.limitVelocityOverLifetime)
  i1544.useAutoRandomSeed = !!i1545[15]
  i1544.randomSeed = i1545[16]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1546 = root || new pc.ParticleSystemMain()
  var i1547 = data
  i1546.duration = i1547[0]
  i1546.loop = !!i1547[1]
  i1546.prewarm = !!i1547[2]
  i1546.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[3], i1546.startDelay)
  i1546.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[4], i1546.startLifetime)
  i1546.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[5], i1546.startSpeed)
  i1546.startSize3D = !!i1547[6]
  i1546.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[7], i1546.startSizeX)
  i1546.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[8], i1546.startSizeY)
  i1546.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[9], i1546.startSizeZ)
  i1546.startRotation3D = !!i1547[10]
  i1546.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[11], i1546.startRotationX)
  i1546.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[12], i1546.startRotationY)
  i1546.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[13], i1546.startRotationZ)
  i1546.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1547[14], i1546.startColor)
  i1546.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[15], i1546.gravityModifier)
  i1546.simulationSpace = i1547[16]
  request.r(i1547[17], i1547[18], 0, i1546, 'customSimulationSpace')
  i1546.simulationSpeed = i1547[19]
  i1546.useUnscaledTime = !!i1547[20]
  i1546.scalingMode = i1547[21]
  i1546.playOnAwake = !!i1547[22]
  i1546.maxParticles = i1547[23]
  i1546.emitterVelocityMode = i1547[24]
  i1546.stopAction = i1547[25]
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1548 = root || new pc.MinMaxCurve()
  var i1549 = data
  i1548.mode = i1549[0]
  i1548.curveMin = new pc.AnimationCurve( { keys_flow: i1549[1] } )
  i1548.curveMax = new pc.AnimationCurve( { keys_flow: i1549[2] } )
  i1548.curveMultiplier = i1549[3]
  i1548.constantMin = i1549[4]
  i1548.constantMax = i1549[5]
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1550 = root || new pc.MinMaxGradient()
  var i1551 = data
  i1550.mode = i1551[0]
  i1550.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1551[1], i1550.gradientMin)
  i1550.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1551[2], i1550.gradientMax)
  i1550.colorMin = new pc.Color(i1551[3], i1551[4], i1551[5], i1551[6])
  i1550.colorMax = new pc.Color(i1551[7], i1551[8], i1551[9], i1551[10])
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1553 = data
  i1552.mode = i1553[0]
  var i1555 = i1553[1]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 1) {
    i1554.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1555[i + 0]) );
  }
  i1552.colorKeys = i1554
  var i1557 = i1553[2]
  var i1556 = []
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1557[i + 0]) );
  }
  i1552.alphaKeys = i1556
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1558 = root || new pc.ParticleSystemColorBySpeed()
  var i1559 = data
  i1558.enabled = !!i1559[0]
  i1558.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1559[1], i1558.color)
  i1558.range = new pc.Vec2( i1559[2], i1559[3] )
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1563 = data
  i1562.color = new pc.Color(i1563[0], i1563[1], i1563[2], i1563[3])
  i1562.time = i1563[4]
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1567 = data
  i1566.alpha = i1567[0]
  i1566.time = i1567[1]
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1568 = root || new pc.ParticleSystemColorOverLifetime()
  var i1569 = data
  i1568.enabled = !!i1569[0]
  i1568.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1569[1], i1568.color)
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1570 = root || new pc.ParticleSystemEmitter()
  var i1571 = data
  i1570.enabled = !!i1571[0]
  i1570.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1571[1], i1570.rateOverTime)
  i1570.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1571[2], i1570.rateOverDistance)
  var i1573 = i1571[3]
  var i1572 = []
  for(var i = 0; i < i1573.length; i += 1) {
    i1572.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1573[i + 0]) );
  }
  i1570.bursts = i1572
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1576 = root || new pc.ParticleSystemBurst()
  var i1577 = data
  i1576.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1577[0], i1576.count)
  i1576.cycleCount = i1577[1]
  i1576.minCount = i1577[2]
  i1576.maxCount = i1577[3]
  i1576.repeatInterval = i1577[4]
  i1576.time = i1577[5]
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1578 = root || new pc.ParticleSystemRotationBySpeed()
  var i1579 = data
  i1578.enabled = !!i1579[0]
  i1578.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[1], i1578.x)
  i1578.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[2], i1578.y)
  i1578.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[3], i1578.z)
  i1578.separateAxes = !!i1579[4]
  i1578.range = new pc.Vec2( i1579[5], i1579[6] )
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1580 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1581 = data
  i1580.enabled = !!i1581[0]
  i1580.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[1], i1580.x)
  i1580.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[2], i1580.y)
  i1580.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[3], i1580.z)
  i1580.separateAxes = !!i1581[4]
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1582 = root || new pc.ParticleSystemShape()
  var i1583 = data
  i1582.enabled = !!i1583[0]
  i1582.shapeType = i1583[1]
  i1582.randomDirectionAmount = i1583[2]
  i1582.sphericalDirectionAmount = i1583[3]
  i1582.randomPositionAmount = i1583[4]
  i1582.alignToDirection = !!i1583[5]
  i1582.radius = i1583[6]
  i1582.radiusMode = i1583[7]
  i1582.radiusSpread = i1583[8]
  i1582.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[9], i1582.radiusSpeed)
  i1582.radiusThickness = i1583[10]
  i1582.angle = i1583[11]
  i1582.length = i1583[12]
  i1582.boxThickness = new pc.Vec3( i1583[13], i1583[14], i1583[15] )
  i1582.meshShapeType = i1583[16]
  request.r(i1583[17], i1583[18], 0, i1582, 'mesh')
  request.r(i1583[19], i1583[20], 0, i1582, 'meshRenderer')
  request.r(i1583[21], i1583[22], 0, i1582, 'skinnedMeshRenderer')
  i1582.useMeshMaterialIndex = !!i1583[23]
  i1582.meshMaterialIndex = i1583[24]
  i1582.useMeshColors = !!i1583[25]
  i1582.normalOffset = i1583[26]
  i1582.arc = i1583[27]
  i1582.arcMode = i1583[28]
  i1582.arcSpread = i1583[29]
  i1582.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[30], i1582.arcSpeed)
  i1582.donutRadius = i1583[31]
  i1582.position = new pc.Vec3( i1583[32], i1583[33], i1583[34] )
  i1582.rotation = new pc.Vec3( i1583[35], i1583[36], i1583[37] )
  i1582.scale = new pc.Vec3( i1583[38], i1583[39], i1583[40] )
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1584 = root || new pc.ParticleSystemSizeBySpeed()
  var i1585 = data
  i1584.enabled = !!i1585[0]
  i1584.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[1], i1584.x)
  i1584.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[2], i1584.y)
  i1584.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[3], i1584.z)
  i1584.separateAxes = !!i1585[4]
  i1584.range = new pc.Vec2( i1585[5], i1585[6] )
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1586 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1587 = data
  i1586.enabled = !!i1587[0]
  i1586.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[1], i1586.x)
  i1586.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[2], i1586.y)
  i1586.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[3], i1586.z)
  i1586.separateAxes = !!i1587[4]
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1588 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1589 = data
  i1588.enabled = !!i1589[0]
  i1588.mode = i1589[1]
  i1588.animation = i1589[2]
  i1588.numTilesX = i1589[3]
  i1588.numTilesY = i1589[4]
  i1588.useRandomRow = !!i1589[5]
  i1588.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[6], i1588.frameOverTime)
  i1588.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[7], i1588.startFrame)
  i1588.cycleCount = i1589[8]
  i1588.rowIndex = i1589[9]
  i1588.flipU = i1589[10]
  i1588.flipV = i1589[11]
  i1588.spriteCount = i1589[12]
  var i1591 = i1589[13]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 2) {
  request.r(i1591[i + 0], i1591[i + 1], 2, i1590, '')
  }
  i1588.sprites = i1590
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1594 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1595 = data
  i1594.enabled = !!i1595[0]
  i1594.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[1], i1594.x)
  i1594.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[2], i1594.y)
  i1594.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[3], i1594.z)
  i1594.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[4], i1594.radial)
  i1594.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[5], i1594.speedModifier)
  i1594.space = i1595[6]
  i1594.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[7], i1594.orbitalX)
  i1594.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[8], i1594.orbitalY)
  i1594.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[9], i1594.orbitalZ)
  i1594.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[10], i1594.orbitalOffsetX)
  i1594.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[11], i1594.orbitalOffsetY)
  i1594.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[12], i1594.orbitalOffsetZ)
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1596 = root || new pc.ParticleSystemNoise()
  var i1597 = data
  i1596.enabled = !!i1597[0]
  i1596.separateAxes = !!i1597[1]
  i1596.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[2], i1596.strengthX)
  i1596.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[3], i1596.strengthY)
  i1596.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[4], i1596.strengthZ)
  i1596.frequency = i1597[5]
  i1596.damping = !!i1597[6]
  i1596.octaveCount = i1597[7]
  i1596.octaveMultiplier = i1597[8]
  i1596.octaveScale = i1597[9]
  i1596.quality = i1597[10]
  i1596.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[11], i1596.scrollSpeed)
  i1596.scrollSpeedMultiplier = i1597[12]
  i1596.remapEnabled = !!i1597[13]
  i1596.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[14], i1596.remapX)
  i1596.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[15], i1596.remapY)
  i1596.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[16], i1596.remapZ)
  i1596.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[17], i1596.positionAmount)
  i1596.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[18], i1596.rotationAmount)
  i1596.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[19], i1596.sizeAmount)
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1598 = root || new pc.ParticleSystemInheritVelocity()
  var i1599 = data
  i1598.enabled = !!i1599[0]
  i1598.mode = i1599[1]
  i1598.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[2], i1598.curve)
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1600 = root || new pc.ParticleSystemForceOverLifetime()
  var i1601 = data
  i1600.enabled = !!i1601[0]
  i1600.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[1], i1600.x)
  i1600.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[2], i1600.y)
  i1600.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[3], i1600.z)
  i1600.space = i1601[4]
  i1600.randomized = !!i1601[5]
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1602 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1603 = data
  i1602.enabled = !!i1603[0]
  i1602.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1603[1], i1602.limit)
  i1602.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1603[2], i1602.limitX)
  i1602.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1603[3], i1602.limitY)
  i1602.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1603[4], i1602.limitZ)
  i1602.dampen = i1603[5]
  i1602.separateAxes = !!i1603[6]
  i1602.space = i1603[7]
  i1602.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1603[8], i1602.drag)
  i1602.multiplyDragByParticleSize = !!i1603[9]
  i1602.multiplyDragByParticleVelocity = !!i1603[10]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1605 = data
  request.r(i1605[0], i1605[1], 0, i1604, 'mesh')
  i1604.meshCount = i1605[2]
  i1604.activeVertexStreamsCount = i1605[3]
  i1604.alignment = i1605[4]
  i1604.renderMode = i1605[5]
  i1604.sortMode = i1605[6]
  i1604.lengthScale = i1605[7]
  i1604.velocityScale = i1605[8]
  i1604.cameraVelocityScale = i1605[9]
  i1604.normalDirection = i1605[10]
  i1604.sortingFudge = i1605[11]
  i1604.minParticleSize = i1605[12]
  i1604.maxParticleSize = i1605[13]
  i1604.pivot = new pc.Vec3( i1605[14], i1605[15], i1605[16] )
  request.r(i1605[17], i1605[18], 0, i1604, 'trailMaterial')
  i1604.applyActiveColorSpace = !!i1605[19]
  i1604.enabled = !!i1605[20]
  request.r(i1605[21], i1605[22], 0, i1604, 'sharedMaterial')
  var i1607 = i1605[23]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 2) {
  request.r(i1607[i + 0], i1607[i + 1], 2, i1606, '')
  }
  i1604.sharedMaterials = i1606
  i1604.receiveShadows = !!i1605[24]
  i1604.shadowCastingMode = i1605[25]
  i1604.sortingLayerID = i1605[26]
  i1604.sortingOrder = i1605[27]
  i1604.lightmapIndex = i1605[28]
  i1604.lightmapSceneIndex = i1605[29]
  i1604.lightmapScaleOffset = new pc.Vec4( i1605[30], i1605[31], i1605[32], i1605[33] )
  i1604.lightProbeUsage = i1605[34]
  i1604.reflectionProbeUsage = i1605[35]
  return i1604
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1610 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1611 = data
  i1610.targetIsSelf = !!i1611[0]
  request.r(i1611[1], i1611[2], 0, i1610, 'targetGO')
  i1610.tweenTargetIsTargetGO = !!i1611[3]
  i1610.delay = i1611[4]
  i1610.duration = i1611[5]
  i1610.easeType = i1611[6]
  i1610.easeCurve = new pc.AnimationCurve( { keys_flow: i1611[7] } )
  i1610.loopType = i1611[8]
  i1610.loops = i1611[9]
  i1610.id = i1611[10]
  i1610.isRelative = !!i1611[11]
  i1610.isFrom = !!i1611[12]
  i1610.isIndependentUpdate = !!i1611[13]
  i1610.autoKill = !!i1611[14]
  i1610.autoGenerate = !!i1611[15]
  i1610.isActive = !!i1611[16]
  i1610.isValid = !!i1611[17]
  request.r(i1611[18], i1611[19], 0, i1610, 'target')
  i1610.animationType = i1611[20]
  i1610.targetType = i1611[21]
  i1610.forcedTargetType = i1611[22]
  i1610.autoPlay = !!i1611[23]
  i1610.useTargetAsV3 = !!i1611[24]
  i1610.endValueFloat = i1611[25]
  i1610.endValueV3 = new pc.Vec3( i1611[26], i1611[27], i1611[28] )
  i1610.endValueV2 = new pc.Vec2( i1611[29], i1611[30] )
  i1610.endValueColor = new pc.Color(i1611[31], i1611[32], i1611[33], i1611[34])
  i1610.endValueString = i1611[35]
  i1610.endValueRect = UnityEngine.Rect.MinMaxRect(i1611[36], i1611[37], i1611[38], i1611[39])
  request.r(i1611[40], i1611[41], 0, i1610, 'endValueTransform')
  i1610.optionalBool0 = !!i1611[42]
  i1610.optionalBool1 = !!i1611[43]
  i1610.optionalFloat0 = i1611[44]
  i1610.optionalInt0 = i1611[45]
  i1610.optionalRotationMode = i1611[46]
  i1610.optionalScrambleMode = i1611[47]
  i1610.optionalShakeRandomnessMode = i1611[48]
  i1610.optionalString = i1611[49]
  i1610.updateType = i1611[50]
  i1610.isSpeedBased = !!i1611[51]
  i1610.hasOnStart = !!i1611[52]
  i1610.hasOnPlay = !!i1611[53]
  i1610.hasOnUpdate = !!i1611[54]
  i1610.hasOnStepComplete = !!i1611[55]
  i1610.hasOnComplete = !!i1611[56]
  i1610.hasOnTweenCreated = !!i1611[57]
  i1610.hasOnRewind = !!i1611[58]
  i1610.onStart = request.d('UnityEngine.Events.UnityEvent', i1611[59], i1610.onStart)
  i1610.onPlay = request.d('UnityEngine.Events.UnityEvent', i1611[60], i1610.onPlay)
  i1610.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1611[61], i1610.onUpdate)
  i1610.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1611[62], i1610.onStepComplete)
  i1610.onComplete = request.d('UnityEngine.Events.UnityEvent', i1611[63], i1610.onComplete)
  i1610.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1611[64], i1610.onTweenCreated)
  i1610.onRewind = request.d('UnityEngine.Events.UnityEvent', i1611[65], i1610.onRewind)
  return i1610
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1612 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1613 = data
  i1612.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1613[0], i1612.m_PersistentCalls)
  return i1612
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.UI.Button' )
  var i1615 = data
  i1614.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1615[0], i1614.m_OnClick)
  i1614.m_Navigation = request.d('UnityEngine.UI.Navigation', i1615[1], i1614.m_Navigation)
  i1614.m_Transition = i1615[2]
  i1614.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1615[3], i1614.m_Colors)
  i1614.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1615[4], i1614.m_SpriteState)
  i1614.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1615[5], i1614.m_AnimationTriggers)
  i1614.m_Interactable = !!i1615[6]
  request.r(i1615[7], i1615[8], 0, i1614, 'm_TargetGraphic')
  return i1614
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1617 = data
  i1616.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1617[0], i1616.m_PersistentCalls)
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1619 = data
  request.r(i1619[0], i1619[1], 0, i1618, 'clip')
  request.r(i1619[2], i1619[3], 0, i1618, 'outputAudioMixerGroup')
  i1618.playOnAwake = !!i1619[4]
  i1618.loop = !!i1619[5]
  i1618.time = i1619[6]
  i1618.volume = i1619[7]
  i1618.pitch = i1619[8]
  i1618.enabled = !!i1619[9]
  return i1618
}

Deserializers["InteractController"] = function (request, data, root) {
  var i1620 = root || request.c( 'InteractController' )
  var i1621 = data
  request.r(i1621[0], i1621[1], 0, i1620, 'canvas')
  i1620.maxPos = new pc.Vec2( i1621[2], i1621[3] )
  i1620.minPos = new pc.Vec2( i1621[4], i1621[5] )
  var i1623 = i1621[6]
  var i1622 = new (System.Collections.Generic.List$1(Bridge.ns('ItemDrag')))
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.add(request.d('ItemDrag', i1623[i + 0]));
  }
  i1620.itemDrags = i1622
  var i1625 = i1621[7]
  var i1624 = new (System.Collections.Generic.List$1(Bridge.ns('ItemClick')))
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.add(request.d('ItemClick', i1625[i + 0]));
  }
  i1620.itemClicks = i1624
  i1620.currentTarget = request.d('ItemDrag', i1621[8], i1620.currentTarget)
  request.r(i1621[9], i1621[10], 0, i1620, 'pickupSound')
  request.r(i1621[11], i1621[12], 0, i1620, 'tut')
  i1620.lockPlay = !!i1621[13]
  return i1620
}

Deserializers["ItemDrag"] = function (request, data, root) {
  var i1628 = root || request.c( 'ItemDrag' )
  var i1629 = data
  request.r(i1629[0], i1629[1], 0, i1628, 'DragArea')
  request.r(i1629[2], i1629[3], 0, i1628, 'Item')
  request.r(i1629[4], i1629[5], 0, i1628, 'Sound')
  request.r(i1629[6], i1629[7], 0, i1628, 'Icon')
  return i1628
}

Deserializers["ItemClick"] = function (request, data, root) {
  var i1632 = root || request.c( 'ItemClick' )
  var i1633 = data
  request.r(i1633[0], i1633[1], 0, i1632, 'ClickArea')
  request.r(i1633[2], i1633[3], 0, i1632, 'Item')
  request.r(i1633[4], i1633[5], 0, i1632, 'Sound')
  request.r(i1633[6], i1633[7], 0, i1632, 'UnActiveObject')
  return i1632
}

Deserializers["GameController"] = function (request, data, root) {
  var i1634 = root || request.c( 'GameController' )
  var i1635 = data
  i1634.OnComplete = request.d('System.Action', i1635[0], i1634.OnComplete)
  i1634.CompleteStep = request.d('System.Action', i1635[1], i1634.CompleteStep)
  var i1637 = i1635[2]
  var i1636 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationController')))
  for(var i = 0; i < i1637.length; i += 2) {
  request.r(i1637[i + 0], i1637[i + 1], 1, i1636, '')
  }
  i1634.skeletons = i1636
  request.r(i1635[3], i1635[4], 0, i1634, 'character')
  var i1639 = i1635[5]
  var i1638 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1639.length; i += 2) {
  request.r(i1639[i + 0], i1639[i + 1], 1, i1638, '')
  }
  i1634.correctItems = i1638
  var i1641 = i1635[6]
  var i1640 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1641.length; i += 2) {
  request.r(i1641[i + 0], i1641[i + 1], 1, i1640, '')
  }
  i1634.phase = i1640
  request.r(i1635[7], i1635[8], 0, i1634, 'loss')
  request.r(i1635[9], i1635[10], 0, i1634, 'win')
  request.r(i1635[11], i1635[12], 0, i1634, 'failScene')
  request.r(i1635[13], i1635[14], 0, i1634, 'winScene')
  i1634.complete = !!i1635[15]
  i1634.end = !!i1635[16]
  i1634.currentStep = i1635[17]
  i1634.correctStep = i1635[18]
  request.r(i1635[19], i1635[20], 0, i1634, 'correctStepText')
  i1634.maxStep = i1635[21]
  request.r(i1635[22], i1635[23], 0, i1634, 'maxStepText')
  request.r(i1635[24], i1635[25], 0, i1634, 'slider')
  i1634.DelayComplete = i1635[26]
  i1634.startSub = request.d('Sub', i1635[27], i1634.startSub)
  i1634.phaseSub = request.d('Sub', i1635[28], i1634.phaseSub)
  i1634.winSub = request.d('Sub', i1635[29], i1634.winSub)
  i1634.failSub = request.d('Sub', i1635[30], i1634.failSub)
  var i1643 = i1635[31]
  var i1642 = new (System.Collections.Generic.List$1(Bridge.ns('Sub')))
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.add(request.d('Sub', i1643[i + 0]));
  }
  i1634.subs = i1642
  request.r(i1635[32], i1635[33], 0, i1634, 'sub')
  request.r(i1635[34], i1635[35], 0, i1634, 'subText')
  i1634.completeSub = !!i1635[36]
  return i1634
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1644 = root || request.c( 'System.Action' )
  var i1645 = data
  return i1644
}

Deserializers["Sub"] = function (request, data, root) {
  var i1650 = root || request.c( 'Sub' )
  var i1651 = data
  i1650.timeSub = i1651[0]
  request.r(i1651[1], i1651[2], 0, i1650, 'Item')
  i1650.SubText = i1651[3]
  request.r(i1651[4], i1651[5], 0, i1650, 'SubSound')
  return i1650
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1654 = root || request.c( 'LayoutController' )
  var i1655 = data
  request.r(i1655[0], i1655[1], 0, i1654, 'CTA')
  i1654.hide = !!i1655[2]
  return i1654
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1656 = root || request.c( 'AudioController' )
  var i1657 = data
  request.r(i1657[0], i1657[1], 0, i1656, 'BGM')
  request.r(i1657[2], i1657[3], 0, i1656, 'musicSource')
  request.r(i1657[4], i1657[5], 0, i1656, 'SFXPool')
  return i1656
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1658 = root || request.c( 'LunaController' )
  var i1659 = data
  i1658.TimePlay = i1659[0]
  i1658.CountPlay = i1659[1]
  i1658.BGColor = new pc.Color(i1659[2], i1659[3], i1659[4], i1659[5])
  i1658.GameBGColor = new pc.Color(i1659[6], i1659[7], i1659[8], i1659[9])
  i1658.LevelTextColor = new pc.Color(i1659[10], i1659[11], i1659[12], i1659[13])
  i1658.TitleTextColor = new pc.Color(i1659[14], i1659[15], i1659[16], i1659[17])
  i1658.SubBGColor = new pc.Color(i1659[18], i1659[19], i1659[20], i1659[21])
  request.r(i1659[22], i1659[23], 0, i1658, 'time')
  request.r(i1659[24], i1659[25], 0, i1658, 'BGImage')
  request.r(i1659[26], i1659[27], 0, i1658, 'GameBGImage')
  request.r(i1659[28], i1659[29], 0, i1658, 'levelText')
  request.r(i1659[30], i1659[31], 0, i1658, 'titleText')
  request.r(i1659[32], i1659[33], 0, i1658, 'subBG')
  request.r(i1659[34], i1659[35], 0, i1658, 'endCard')
  var i1661 = i1659[36]
  var i1660 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1661.length; i += 2) {
  request.r(i1661[i + 0], i1661[i + 1], 1, i1660, '')
  }
  i1658.CTA = i1660
  i1658.count = i1659[37]
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1665 = data
  i1664.ambientIntensity = i1665[0]
  i1664.reflectionIntensity = i1665[1]
  i1664.ambientMode = i1665[2]
  i1664.ambientLight = new pc.Color(i1665[3], i1665[4], i1665[5], i1665[6])
  i1664.ambientSkyColor = new pc.Color(i1665[7], i1665[8], i1665[9], i1665[10])
  i1664.ambientGroundColor = new pc.Color(i1665[11], i1665[12], i1665[13], i1665[14])
  i1664.ambientEquatorColor = new pc.Color(i1665[15], i1665[16], i1665[17], i1665[18])
  i1664.fogColor = new pc.Color(i1665[19], i1665[20], i1665[21], i1665[22])
  i1664.fogEndDistance = i1665[23]
  i1664.fogStartDistance = i1665[24]
  i1664.fogDensity = i1665[25]
  i1664.fog = !!i1665[26]
  request.r(i1665[27], i1665[28], 0, i1664, 'skybox')
  i1664.fogMode = i1665[29]
  var i1667 = i1665[30]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1667[i + 0]) );
  }
  i1664.lightmaps = i1666
  i1664.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1665[31], i1664.lightProbes)
  i1664.lightmapsMode = i1665[32]
  i1664.mixedBakeMode = i1665[33]
  i1664.environmentLightingMode = i1665[34]
  i1664.ambientProbe = new pc.SphericalHarmonicsL2(i1665[35])
  request.r(i1665[36], i1665[37], 0, i1664, 'customReflection')
  request.r(i1665[38], i1665[39], 0, i1664, 'defaultReflection')
  i1664.defaultReflectionMode = i1665[40]
  i1664.defaultReflectionResolution = i1665[41]
  i1664.sunLightObjectId = i1665[42]
  i1664.pixelLightCount = i1665[43]
  i1664.defaultReflectionHDR = !!i1665[44]
  i1664.hasLightDataAsset = !!i1665[45]
  i1664.hasManualGenerate = !!i1665[46]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1671 = data
  request.r(i1671[0], i1671[1], 0, i1670, 'lightmapColor')
  request.r(i1671[2], i1671[3], 0, i1670, 'lightmapDirection')
  request.r(i1671[4], i1671[5], 0, i1670, 'shadowMask')
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1672 = root || new UnityEngine.LightProbes()
  var i1673 = data
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1681 = data
  var i1683 = i1681[0]
  var i1682 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1683[i + 0]));
  }
  i1680.ShaderCompilationErrors = i1682
  i1680.name = i1681[1]
  i1680.guid = i1681[2]
  var i1685 = i1681[3]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( i1685[i + 0] );
  }
  i1680.shaderDefinedKeywords = i1684
  var i1687 = i1681[4]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1687[i + 0]) );
  }
  i1680.passes = i1686
  var i1689 = i1681[5]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1689[i + 0]) );
  }
  i1680.usePasses = i1688
  var i1691 = i1681[6]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1691[i + 0]) );
  }
  i1680.defaultParameterValues = i1690
  request.r(i1681[7], i1681[8], 0, i1680, 'unityFallbackShader')
  i1680.readDepth = !!i1681[9]
  i1680.hasDepthOnlyPass = !!i1681[10]
  i1680.isCreatedByShaderGraph = !!i1681[11]
  i1680.disableBatching = !!i1681[12]
  i1680.compiled = !!i1681[13]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1695 = data
  i1694.shaderName = i1695[0]
  i1694.errorMessage = i1695[1]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1698 = root || new pc.UnityShaderPass()
  var i1699 = data
  i1698.id = i1699[0]
  i1698.subShaderIndex = i1699[1]
  i1698.name = i1699[2]
  i1698.passType = i1699[3]
  i1698.grabPassTextureName = i1699[4]
  i1698.usePass = !!i1699[5]
  i1698.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[6], i1698.zTest)
  i1698.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[7], i1698.zWrite)
  i1698.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[8], i1698.culling)
  i1698.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1699[9], i1698.blending)
  i1698.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1699[10], i1698.alphaBlending)
  i1698.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[11], i1698.colorWriteMask)
  i1698.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[12], i1698.offsetUnits)
  i1698.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[13], i1698.offsetFactor)
  i1698.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[14], i1698.stencilRef)
  i1698.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[15], i1698.stencilReadMask)
  i1698.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[16], i1698.stencilWriteMask)
  i1698.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1699[17], i1698.stencilOp)
  i1698.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1699[18], i1698.stencilOpFront)
  i1698.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1699[19], i1698.stencilOpBack)
  var i1701 = i1699[20]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1701[i + 0]) );
  }
  i1698.tags = i1700
  var i1703 = i1699[21]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.push( i1703[i + 0] );
  }
  i1698.passDefinedKeywords = i1702
  var i1705 = i1699[22]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1705[i + 0]) );
  }
  i1698.passDefinedKeywordGroups = i1704
  var i1707 = i1699[23]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1707[i + 0]) );
  }
  i1698.variants = i1706
  var i1709 = i1699[24]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1709[i + 0]) );
  }
  i1698.excludedVariants = i1708
  i1698.hasDepthReader = !!i1699[25]
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1711 = data
  i1710.val = i1711[0]
  i1710.name = i1711[1]
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1713 = data
  i1712.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1713[0], i1712.src)
  i1712.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1713[1], i1712.dst)
  i1712.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1713[2], i1712.op)
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1715 = data
  i1714.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1715[0], i1714.pass)
  i1714.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1715[1], i1714.fail)
  i1714.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1715[2], i1714.zFail)
  i1714.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1715[3], i1714.comp)
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1719 = data
  i1718.name = i1719[0]
  i1718.value = i1719[1]
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1723 = data
  var i1725 = i1723[0]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( i1725[i + 0] );
  }
  i1722.keywords = i1724
  i1722.hasDiscard = !!i1723[1]
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1729 = data
  i1728.passId = i1729[0]
  i1728.subShaderIndex = i1729[1]
  var i1731 = i1729[2]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( i1731[i + 0] );
  }
  i1728.keywords = i1730
  i1728.vertexProgram = i1729[3]
  i1728.fragmentProgram = i1729[4]
  i1728.exportedForWebGl2 = !!i1729[5]
  i1728.readDepth = !!i1729[6]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1735 = data
  request.r(i1735[0], i1735[1], 0, i1734, 'shader')
  i1734.pass = i1735[2]
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1739 = data
  i1738.name = i1739[0]
  i1738.type = i1739[1]
  i1738.value = new pc.Vec4( i1739[2], i1739[3], i1739[4], i1739[5] )
  i1738.textureValue = i1739[6]
  i1738.shaderPropertyFlag = i1739[7]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1741 = data
  i1740.name = i1741[0]
  request.r(i1741[1], i1741[2], 0, i1740, 'texture')
  i1740.aabb = i1741[3]
  i1740.vertices = i1741[4]
  i1740.triangles = i1741[5]
  i1740.textureRect = UnityEngine.Rect.MinMaxRect(i1741[6], i1741[7], i1741[8], i1741[9])
  i1740.packedRect = UnityEngine.Rect.MinMaxRect(i1741[10], i1741[11], i1741[12], i1741[13])
  i1740.border = new pc.Vec4( i1741[14], i1741[15], i1741[16], i1741[17] )
  i1740.transparency = i1741[18]
  i1740.bounds = i1741[19]
  i1740.pixelsPerUnit = i1741[20]
  i1740.textureWidth = i1741[21]
  i1740.textureHeight = i1741[22]
  i1740.nativeSize = new pc.Vec2( i1741[23], i1741[24] )
  i1740.pivot = new pc.Vec2( i1741[25], i1741[26] )
  i1740.textureRectOffset = new pc.Vec2( i1741[27], i1741[28] )
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1743 = data
  i1742.name = i1743[0]
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1745 = data
  i1744.name = i1745[0]
  i1744.ascent = i1745[1]
  i1744.originalLineHeight = i1745[2]
  i1744.fontSize = i1745[3]
  var i1747 = i1745[4]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1747[i + 0]) );
  }
  i1744.characterInfo = i1746
  request.r(i1745[5], i1745[6], 0, i1744, 'texture')
  i1744.originalFontSize = i1745[7]
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1751 = data
  i1750.index = i1751[0]
  i1750.advance = i1751[1]
  i1750.bearing = i1751[2]
  i1750.glyphWidth = i1751[3]
  i1750.glyphHeight = i1751[4]
  i1750.minX = i1751[5]
  i1750.maxX = i1751[6]
  i1750.minY = i1751[7]
  i1750.maxY = i1751[8]
  i1750.uvBottomLeftX = i1751[9]
  i1750.uvBottomLeftY = i1751[10]
  i1750.uvBottomRightX = i1751[11]
  i1750.uvBottomRightY = i1751[12]
  i1750.uvTopLeftX = i1751[13]
  i1750.uvTopLeftY = i1751[14]
  i1750.uvTopRightX = i1751[15]
  i1750.uvTopRightY = i1751[16]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1753 = data
  i1752.name = i1753[0]
  i1752.bytes64 = i1753[1]
  i1752.data = i1753[2]
  return i1752
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1754 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1755 = data
  var i1757 = i1755[0]
  var i1756 = []
  for(var i = 0; i < i1757.length; i += 2) {
  request.r(i1757[i + 0], i1757[i + 1], 2, i1756, '')
  }
  i1754.atlasAssets = i1756
  i1754.scale = i1755[1]
  request.r(i1755[2], i1755[3], 0, i1754, 'skeletonJSON')
  i1754.isUpgradingBlendModeMaterials = !!i1755[4]
  i1754.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1755[5], i1754.blendModeMaterials)
  var i1759 = i1755[6]
  var i1758 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1759.length; i += 2) {
  request.r(i1759[i + 0], i1759[i + 1], 1, i1758, '')
  }
  i1754.skeletonDataModifiers = i1758
  var i1761 = i1755[7]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.push( i1761[i + 0] );
  }
  i1754.fromAnimation = i1760
  var i1763 = i1755[8]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.push( i1763[i + 0] );
  }
  i1754.toAnimation = i1762
  i1754.duration = i1755[9]
  i1754.defaultMix = i1755[10]
  request.r(i1755[11], i1755[12], 0, i1754, 'controller')
  return i1754
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1766 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1767 = data
  i1766.applyAdditiveMaterial = !!i1767[0]
  var i1769 = i1767[1]
  var i1768 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1769[i + 0]));
  }
  i1766.additiveMaterials = i1768
  var i1771 = i1767[2]
  var i1770 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1771[i + 0]));
  }
  i1766.multiplyMaterials = i1770
  var i1773 = i1767[3]
  var i1772 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1773[i + 0]));
  }
  i1766.screenMaterials = i1772
  i1766.requiresBlendModeMaterials = !!i1767[4]
  return i1766
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1776 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1777 = data
  i1776.pageName = i1777[0]
  request.r(i1777[1], i1777[2], 0, i1776, 'material')
  return i1776
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1780 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1781 = data
  request.r(i1781[0], i1781[1], 0, i1780, 'atlasFile')
  var i1783 = i1781[2]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 2) {
  request.r(i1783[i + 0], i1783[i + 1], 2, i1782, '')
  }
  i1780.materials = i1782
  i1780.textureLoadingMode = i1781[3]
  request.r(i1781[4], i1781[5], 0, i1780, 'onDemandTextureLoader')
  return i1780
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

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1791 = data
  var i1793 = i1791[0]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1793[i + 0]) );
  }
  i1790.files = i1792
  i1790.componentToPrefabIds = i1791[1]
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1797 = data
  i1796.path = i1797[0]
  request.r(i1797[1], i1797[2], 0, i1796, 'unityObject')
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1799 = data
  var i1801 = i1799[0]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1801[i + 0]) );
  }
  i1798.scriptsExecutionOrder = i1800
  var i1803 = i1799[1]
  var i1802 = []
  for(var i = 0; i < i1803.length; i += 1) {
    i1802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1803[i + 0]) );
  }
  i1798.sortingLayers = i1802
  var i1805 = i1799[2]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1805[i + 0]) );
  }
  i1798.cullingLayers = i1804
  i1798.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1799[3], i1798.timeSettings)
  i1798.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1799[4], i1798.physicsSettings)
  i1798.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1799[5], i1798.physics2DSettings)
  i1798.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1799[6], i1798.qualitySettings)
  i1798.enableRealtimeShadows = !!i1799[7]
  i1798.enableAutoInstancing = !!i1799[8]
  i1798.enableStaticBatching = !!i1799[9]
  i1798.enableDynamicBatching = !!i1799[10]
  i1798.usePreservativeDynamicBatching = !!i1799[11]
  i1798.lightmapEncodingQuality = i1799[12]
  i1798.desiredColorSpace = i1799[13]
  var i1807 = i1799[14]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( i1807[i + 0] );
  }
  i1798.allTags = i1806
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1811 = data
  i1810.name = i1811[0]
  i1810.value = i1811[1]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1815 = data
  i1814.id = i1815[0]
  i1814.name = i1815[1]
  i1814.value = i1815[2]
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1819 = data
  i1818.id = i1819[0]
  i1818.name = i1819[1]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1821 = data
  i1820.fixedDeltaTime = i1821[0]
  i1820.maximumDeltaTime = i1821[1]
  i1820.timeScale = i1821[2]
  i1820.maximumParticleTimestep = i1821[3]
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1823 = data
  i1822.gravity = new pc.Vec3( i1823[0], i1823[1], i1823[2] )
  i1822.defaultSolverIterations = i1823[3]
  i1822.bounceThreshold = i1823[4]
  i1822.autoSyncTransforms = !!i1823[5]
  i1822.autoSimulation = !!i1823[6]
  var i1825 = i1823[7]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1825[i + 0]) );
  }
  i1822.collisionMatrix = i1824
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1829 = data
  i1828.enabled = !!i1829[0]
  i1828.layerId = i1829[1]
  i1828.otherLayerId = i1829[2]
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1831 = data
  request.r(i1831[0], i1831[1], 0, i1830, 'material')
  i1830.gravity = new pc.Vec2( i1831[2], i1831[3] )
  i1830.positionIterations = i1831[4]
  i1830.velocityIterations = i1831[5]
  i1830.velocityThreshold = i1831[6]
  i1830.maxLinearCorrection = i1831[7]
  i1830.maxAngularCorrection = i1831[8]
  i1830.maxTranslationSpeed = i1831[9]
  i1830.maxRotationSpeed = i1831[10]
  i1830.baumgarteScale = i1831[11]
  i1830.baumgarteTOIScale = i1831[12]
  i1830.timeToSleep = i1831[13]
  i1830.linearSleepTolerance = i1831[14]
  i1830.angularSleepTolerance = i1831[15]
  i1830.defaultContactOffset = i1831[16]
  i1830.autoSimulation = !!i1831[17]
  i1830.queriesHitTriggers = !!i1831[18]
  i1830.queriesStartInColliders = !!i1831[19]
  i1830.callbacksOnDisable = !!i1831[20]
  i1830.reuseCollisionCallbacks = !!i1831[21]
  i1830.autoSyncTransforms = !!i1831[22]
  var i1833 = i1831[23]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1833[i + 0]) );
  }
  i1830.collisionMatrix = i1832
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1837 = data
  i1836.enabled = !!i1837[0]
  i1836.layerId = i1837[1]
  i1836.otherLayerId = i1837[2]
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1839 = data
  var i1841 = i1839[0]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1841[i + 0]) );
  }
  i1838.qualityLevels = i1840
  var i1843 = i1839[1]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 1) {
    i1842.push( i1843[i + 0] );
  }
  i1838.names = i1842
  i1838.shadows = i1839[2]
  i1838.anisotropicFiltering = i1839[3]
  i1838.antiAliasing = i1839[4]
  i1838.lodBias = i1839[5]
  i1838.shadowCascades = i1839[6]
  i1838.shadowDistance = i1839[7]
  i1838.shadowmaskMode = i1839[8]
  i1838.shadowProjection = i1839[9]
  i1838.shadowResolution = i1839[10]
  i1838.softParticles = !!i1839[11]
  i1838.softVegetation = !!i1839[12]
  i1838.activeColorSpace = i1839[13]
  i1838.desiredColorSpace = i1839[14]
  i1838.masterTextureLimit = i1839[15]
  i1838.maxQueuedFrames = i1839[16]
  i1838.particleRaycastBudget = i1839[17]
  i1838.pixelLightCount = i1839[18]
  i1838.realtimeReflectionProbes = !!i1839[19]
  i1838.shadowCascade2Split = i1839[20]
  i1838.shadowCascade4Split = new pc.Vec3( i1839[21], i1839[22], i1839[23] )
  i1838.streamingMipmapsActive = !!i1839[24]
  i1838.vSyncCount = i1839[25]
  i1838.asyncUploadBufferSize = i1839[26]
  i1838.asyncUploadTimeSlice = i1839[27]
  i1838.billboardsFaceCameraPosition = !!i1839[28]
  i1838.shadowNearPlaneOffset = i1839[29]
  i1838.streamingMipmapsMemoryBudget = i1839[30]
  i1838.maximumLODLevel = i1839[31]
  i1838.streamingMipmapsAddAllCameras = !!i1839[32]
  i1838.streamingMipmapsMaxLevelReduction = i1839[33]
  i1838.streamingMipmapsRenderersPerFrame = i1839[34]
  i1838.resolutionScalingFixedDPIFactor = i1839[35]
  i1838.streamingMipmapsMaxFileIORequests = i1839[36]
  i1838.currentQualityLevel = i1839[37]
  return i1838
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1846 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1847 = data
  request.r(i1847[0], i1847[1], 0, i1846, 'm_ObjectArgument')
  i1846.m_ObjectArgumentAssemblyTypeName = i1847[2]
  i1846.m_IntArgument = i1847[3]
  i1846.m_FloatArgument = i1847[4]
  i1846.m_StringArgument = i1847[5]
  i1846.m_BoolArgument = !!i1847[6]
  return i1846
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[2],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[2],"72":[73],"74":[75],"76":[75],"8":[7],"22":[18],"77":[78],"79":[7],"80":[11,7],"81":[73],"18":[11,7],"82":[83,73],"84":[73,85],"86":[73],"87":[51],"88":[58],"89":[78],"90":[91],"92":[93],"94":[2],"95":[96],"97":[7],"98":[11,7],"99":[73],"100":[11,7],"101":[7],"102":[7],"103":[73,7],"104":[7,11],"105":[106],"107":[106],"108":[106],"109":[7],"110":[7],"10":[8],"12":[11,7],"111":[7],"9":[8],"112":[7],"113":[7],"114":[7],"115":[7],"116":[7],"117":[7],"118":[7],"17":[7],"119":[7],"120":[11,7],"121":[7],"122":[7],"123":[7],"16":[7],"13":[11,7],"124":[7],"125":[5],"126":[5],"6":[5],"127":[5],"128":[2],"129":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.Slider","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","CharacterSkinController","UnityEngine.GameObject","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","UnityEngine.AudioSource","InteractController","GameController","LayoutController","AudioController","UnityEngine.Transform","LunaController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "08/24/2026 10:54:14";

Deserializers.lunaDaysRunning = "0.7";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BEQ_V33_NgocNDL_TamNTM";

Deserializers.lunaAppID = "29138";

Deserializers.projectId = "5b44dfd2230fe054ca8da1b65d37e310";

Deserializers.packagesInfo = "com.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1868";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4329";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "819a9d63-04db-4242-a12a-be0a82b6a2f7";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

