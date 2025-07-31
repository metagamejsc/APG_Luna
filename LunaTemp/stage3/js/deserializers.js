var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.JointSpring' )
  var i1387 = data
  i1386.spring = i1387[0]
  i1386.damper = i1387[1]
  i1386.targetPosition = i1387[2]
  return i1386
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1388 = root || request.c( 'UnityEngine.JointMotor' )
  var i1389 = data
  i1388.m_TargetVelocity = i1389[0]
  i1388.m_Force = i1389[1]
  i1388.m_FreeSpin = i1389[2]
  return i1388
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1390 = root || request.c( 'UnityEngine.JointLimits' )
  var i1391 = data
  i1390.m_Min = i1391[0]
  i1390.m_Max = i1391[1]
  i1390.m_Bounciness = i1391[2]
  i1390.m_BounceMinVelocity = i1391[3]
  i1390.m_ContactDistance = i1391[4]
  i1390.minBounce = i1391[5]
  i1390.maxBounce = i1391[6]
  return i1390
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1392 = root || request.c( 'UnityEngine.JointDrive' )
  var i1393 = data
  i1392.m_PositionSpring = i1393[0]
  i1392.m_PositionDamper = i1393[1]
  i1392.m_MaximumForce = i1393[2]
  i1392.m_UseAcceleration = i1393[3]
  return i1392
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1394 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1395 = data
  i1394.m_Spring = i1395[0]
  i1394.m_Damper = i1395[1]
  return i1394
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1396 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1397 = data
  i1396.m_Limit = i1397[0]
  i1396.m_Bounciness = i1397[1]
  i1396.m_ContactDistance = i1397[2]
  return i1396
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1398 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1399 = data
  i1398.m_ExtremumSlip = i1399[0]
  i1398.m_ExtremumValue = i1399[1]
  i1398.m_AsymptoteSlip = i1399[2]
  i1398.m_AsymptoteValue = i1399[3]
  i1398.m_Stiffness = i1399[4]
  return i1398
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1400 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1401 = data
  i1400.m_LowerAngle = i1401[0]
  i1400.m_UpperAngle = i1401[1]
  return i1400
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1402 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1403 = data
  i1402.m_MotorSpeed = i1403[0]
  i1402.m_MaximumMotorTorque = i1403[1]
  return i1402
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1404 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1405 = data
  i1404.m_DampingRatio = i1405[0]
  i1404.m_Frequency = i1405[1]
  i1404.m_Angle = i1405[2]
  return i1404
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1406 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1407 = data
  i1406.m_LowerTranslation = i1407[0]
  i1406.m_UpperTranslation = i1407[1]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1409 = data
  i1408.name = i1409[0]
  i1408.width = i1409[1]
  i1408.height = i1409[2]
  i1408.mipmapCount = i1409[3]
  i1408.anisoLevel = i1409[4]
  i1408.filterMode = i1409[5]
  i1408.hdr = !!i1409[6]
  i1408.format = i1409[7]
  i1408.wrapMode = i1409[8]
  i1408.alphaIsTransparency = !!i1409[9]
  i1408.alphaSource = i1409[10]
  i1408.graphicsFormat = i1409[11]
  i1408.sRGBTexture = !!i1409[12]
  i1408.desiredColorSpace = i1409[13]
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1410 = root || new pc.UnityMaterial()
  var i1411 = data
  i1410.name = i1411[0]
  request.r(i1411[1], i1411[2], 0, i1410, 'shader')
  i1410.renderQueue = i1411[3]
  i1410.enableInstancing = !!i1411[4]
  var i1413 = i1411[5]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1413[i + 0]) );
  }
  i1410.floatParameters = i1412
  var i1415 = i1411[6]
  var i1414 = []
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1415[i + 0]) );
  }
  i1410.colorParameters = i1414
  var i1417 = i1411[7]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1417[i + 0]) );
  }
  i1410.vectorParameters = i1416
  var i1419 = i1411[8]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1419[i + 0]) );
  }
  i1410.textureParameters = i1418
  var i1421 = i1411[9]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1421[i + 0]) );
  }
  i1410.materialFlags = i1420
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1425 = data
  i1424.name = i1425[0]
  i1424.value = i1425[1]
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1429 = data
  i1428.name = i1429[0]
  i1428.value = new pc.Color(i1429[1], i1429[2], i1429[3], i1429[4])
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1433 = data
  i1432.name = i1433[0]
  i1432.value = new pc.Vec4( i1433[1], i1433[2], i1433[3], i1433[4] )
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1437 = data
  i1436.name = i1437[0]
  request.r(i1437[1], i1437[2], 0, i1436, 'value')
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1441 = data
  i1440.name = i1441[0]
  i1440.enabled = !!i1441[1]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1443 = data
  i1442.pivot = new pc.Vec2( i1443[0], i1443[1] )
  i1442.anchorMin = new pc.Vec2( i1443[2], i1443[3] )
  i1442.anchorMax = new pc.Vec2( i1443[4], i1443[5] )
  i1442.sizeDelta = new pc.Vec2( i1443[6], i1443[7] )
  i1442.anchoredPosition3D = new pc.Vec3( i1443[8], i1443[9], i1443[10] )
  i1442.rotation = new pc.Quat(i1443[11], i1443[12], i1443[13], i1443[14])
  i1442.scale = new pc.Vec3( i1443[15], i1443[16], i1443[17] )
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1445 = data
  i1444.cullTransparentMesh = !!i1445[0]
  return i1444
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1446 = root || request.c( 'UnityEngine.UI.Image' )
  var i1447 = data
  request.r(i1447[0], i1447[1], 0, i1446, 'm_Sprite')
  i1446.m_Type = i1447[2]
  i1446.m_PreserveAspect = !!i1447[3]
  i1446.m_FillCenter = !!i1447[4]
  i1446.m_FillMethod = i1447[5]
  i1446.m_FillAmount = i1447[6]
  i1446.m_FillClockwise = !!i1447[7]
  i1446.m_FillOrigin = i1447[8]
  i1446.m_UseSpriteMesh = !!i1447[9]
  i1446.m_PixelsPerUnitMultiplier = i1447[10]
  request.r(i1447[11], i1447[12], 0, i1446, 'm_Material')
  i1446.m_Maskable = !!i1447[13]
  i1446.m_Color = new pc.Color(i1447[14], i1447[15], i1447[16], i1447[17])
  i1446.m_RaycastTarget = !!i1447[18]
  i1446.m_RaycastPadding = new pc.Vec4( i1447[19], i1447[20], i1447[21], i1447[22] )
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1449 = data
  i1448.name = i1449[0]
  i1448.tagId = i1449[1]
  i1448.enabled = !!i1449[2]
  i1448.isStatic = !!i1449[3]
  i1448.layer = i1449[4]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1451 = data
  i1450.name = i1451[0]
  i1450.index = i1451[1]
  i1450.startup = !!i1451[2]
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1453 = data
  i1452.position = new pc.Vec3( i1453[0], i1453[1], i1453[2] )
  i1452.scale = new pc.Vec3( i1453[3], i1453[4], i1453[5] )
  i1452.rotation = new pc.Quat(i1453[6], i1453[7], i1453[8], i1453[9])
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1455 = data
  i1454.enabled = !!i1455[0]
  i1454.aspect = i1455[1]
  i1454.orthographic = !!i1455[2]
  i1454.orthographicSize = i1455[3]
  i1454.backgroundColor = new pc.Color(i1455[4], i1455[5], i1455[6], i1455[7])
  i1454.nearClipPlane = i1455[8]
  i1454.farClipPlane = i1455[9]
  i1454.fieldOfView = i1455[10]
  i1454.depth = i1455[11]
  i1454.clearFlags = i1455[12]
  i1454.cullingMask = i1455[13]
  i1454.rect = i1455[14]
  request.r(i1455[15], i1455[16], 0, i1454, 'targetTexture')
  i1454.usePhysicalProperties = !!i1455[17]
  i1454.focalLength = i1455[18]
  i1454.sensorSize = new pc.Vec2( i1455[19], i1455[20] )
  i1454.lensShift = new pc.Vec2( i1455[21], i1455[22] )
  i1454.gateFit = i1455[23]
  return i1454
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1456 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1457 = data
  request.r(i1457[0], i1457[1], 0, i1456, 'm_FirstSelected')
  i1456.m_sendNavigationEvents = !!i1457[2]
  i1456.m_DragThreshold = i1457[3]
  return i1456
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1458 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1459 = data
  i1458.m_HorizontalAxis = i1459[0]
  i1458.m_VerticalAxis = i1459[1]
  i1458.m_SubmitButton = i1459[2]
  i1458.m_CancelButton = i1459[3]
  i1458.m_InputActionsPerSecond = i1459[4]
  i1458.m_RepeatDelay = i1459[5]
  i1458.m_ForceModuleActive = !!i1459[6]
  i1458.m_SendPointerHoverToParent = !!i1459[7]
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1461 = data
  i1460.enabled = !!i1461[0]
  i1460.planeDistance = i1461[1]
  i1460.referencePixelsPerUnit = i1461[2]
  i1460.isFallbackOverlay = !!i1461[3]
  i1460.renderMode = i1461[4]
  i1460.renderOrder = i1461[5]
  i1460.sortingLayerName = i1461[6]
  i1460.sortingOrder = i1461[7]
  i1460.scaleFactor = i1461[8]
  request.r(i1461[9], i1461[10], 0, i1460, 'worldCamera')
  i1460.overrideSorting = !!i1461[11]
  i1460.pixelPerfect = !!i1461[12]
  i1460.targetDisplay = i1461[13]
  i1460.overridePixelPerfect = !!i1461[14]
  return i1460
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1462 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1463 = data
  i1462.m_UiScaleMode = i1463[0]
  i1462.m_ReferencePixelsPerUnit = i1463[1]
  i1462.m_ScaleFactor = i1463[2]
  i1462.m_ReferenceResolution = new pc.Vec2( i1463[3], i1463[4] )
  i1462.m_ScreenMatchMode = i1463[5]
  i1462.m_MatchWidthOrHeight = i1463[6]
  i1462.m_PhysicalUnit = i1463[7]
  i1462.m_FallbackScreenDPI = i1463[8]
  i1462.m_DefaultSpriteDPI = i1463[9]
  i1462.m_DynamicPixelsPerUnit = i1463[10]
  i1462.m_PresetInfoIsWorld = !!i1463[11]
  return i1462
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1464 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1465 = data
  i1464.m_IgnoreReversedGraphics = !!i1465[0]
  i1464.m_BlockingObjects = i1465[1]
  i1464.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1465[2] )
  return i1464
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1466 = root || request.c( 'LunaManager' )
  var i1467 = data
  var i1469 = i1467[0]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 2) {
  request.r(i1469[i + 0], i1469[i + 1], 2, i1468, '')
  }
  i1466.lstBtnInstall = i1468
  request.r(i1467[1], i1467[2], 0, i1466, 'EndCard')
  i1466.countPlay = i1467[3]
  i1466.countPlayFinal = i1467[4]
  i1466.timeDropFinal = i1467[5]
  i1466.colorBG = new pc.Color(i1467[6], i1467[7], i1467[8], i1467[9])
  request.r(i1467[10], i1467[11], 0, i1466, 'texture2D')
  request.r(i1467[12], i1467[13], 0, i1466, 'rawImageBG')
  request.r(i1467[14], i1467[15], 0, i1466, 'hand')
  request.r(i1467[16], i1467[17], 0, i1466, 'iQFill')
  return i1466
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1472 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1473 = data
  request.r(i1473[0], i1473[1], 0, i1472, 'm_Texture')
  i1472.m_UVRect = UnityEngine.Rect.MinMaxRect(i1473[2], i1473[3], i1473[4], i1473[5])
  request.r(i1473[6], i1473[7], 0, i1472, 'm_Material')
  i1472.m_Maskable = !!i1473[8]
  i1472.m_Color = new pc.Color(i1473[9], i1473[10], i1473[11], i1473[12])
  i1472.m_RaycastTarget = !!i1473[13]
  i1472.m_RaycastPadding = new pc.Vec4( i1473[14], i1473[15], i1473[16], i1473[17] )
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1475 = data
  request.r(i1475[0], i1475[1], 0, i1474, 'clip')
  request.r(i1475[2], i1475[3], 0, i1474, 'outputAudioMixerGroup')
  i1474.playOnAwake = !!i1475[4]
  i1474.loop = !!i1475[5]
  i1474.time = i1475[6]
  i1474.volume = i1475[7]
  i1474.pitch = i1475[8]
  i1474.enabled = !!i1475[9]
  return i1474
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1476 = root || request.c( 'UnityEngine.UI.Button' )
  var i1477 = data
  i1476.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1477[0], i1476.m_OnClick)
  i1476.m_Navigation = request.d('UnityEngine.UI.Navigation', i1477[1], i1476.m_Navigation)
  i1476.m_Transition = i1477[2]
  i1476.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1477[3], i1476.m_Colors)
  i1476.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1477[4], i1476.m_SpriteState)
  i1476.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1477[5], i1476.m_AnimationTriggers)
  i1476.m_Interactable = !!i1477[6]
  request.r(i1477[7], i1477[8], 0, i1476, 'm_TargetGraphic')
  return i1476
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1478 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1479 = data
  i1478.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1479[0], i1478.m_PersistentCalls)
  return i1478
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1480 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1481 = data
  var i1483 = i1481[0]
  var i1482 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1483.length; i += 1) {
    i1482.add(request.d('UnityEngine.Events.PersistentCall', i1483[i + 0]));
  }
  i1480.m_Calls = i1482
  return i1480
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1486 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1487 = data
  request.r(i1487[0], i1487[1], 0, i1486, 'm_Target')
  i1486.m_TargetAssemblyTypeName = i1487[2]
  i1486.m_MethodName = i1487[3]
  i1486.m_Mode = i1487[4]
  i1486.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1487[5], i1486.m_Arguments)
  i1486.m_CallState = i1487[6]
  return i1486
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1488 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1489 = data
  request.r(i1489[0], i1489[1], 0, i1488, 'm_ObjectArgument')
  i1488.m_ObjectArgumentAssemblyTypeName = i1489[2]
  i1488.m_IntArgument = i1489[3]
  i1488.m_FloatArgument = i1489[4]
  i1488.m_StringArgument = i1489[5]
  i1488.m_BoolArgument = !!i1489[6]
  return i1488
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1491 = data
  i1490.m_Mode = i1491[0]
  i1490.m_WrapAround = !!i1491[1]
  request.r(i1491[2], i1491[3], 0, i1490, 'm_SelectOnUp')
  request.r(i1491[4], i1491[5], 0, i1490, 'm_SelectOnDown')
  request.r(i1491[6], i1491[7], 0, i1490, 'm_SelectOnLeft')
  request.r(i1491[8], i1491[9], 0, i1490, 'm_SelectOnRight')
  return i1490
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1492 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1493 = data
  i1492.m_NormalColor = new pc.Color(i1493[0], i1493[1], i1493[2], i1493[3])
  i1492.m_HighlightedColor = new pc.Color(i1493[4], i1493[5], i1493[6], i1493[7])
  i1492.m_PressedColor = new pc.Color(i1493[8], i1493[9], i1493[10], i1493[11])
  i1492.m_SelectedColor = new pc.Color(i1493[12], i1493[13], i1493[14], i1493[15])
  i1492.m_DisabledColor = new pc.Color(i1493[16], i1493[17], i1493[18], i1493[19])
  i1492.m_ColorMultiplier = i1493[20]
  i1492.m_FadeDuration = i1493[21]
  return i1492
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1495 = data
  request.r(i1495[0], i1495[1], 0, i1494, 'm_HighlightedSprite')
  request.r(i1495[2], i1495[3], 0, i1494, 'm_PressedSprite')
  request.r(i1495[4], i1495[5], 0, i1494, 'm_SelectedSprite')
  request.r(i1495[6], i1495[7], 0, i1494, 'm_DisabledSprite')
  return i1494
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1496 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1497 = data
  i1496.m_NormalTrigger = i1497[0]
  i1496.m_HighlightedTrigger = i1497[1]
  i1496.m_PressedTrigger = i1497[2]
  i1496.m_SelectedTrigger = i1497[3]
  i1496.m_DisabledTrigger = i1497[4]
  return i1496
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i1498 = root || request.c( 'ClickItem' )
  var i1499 = data
  i1498.isDoor = !!i1499[0]
  var i1501 = i1499[1]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 2) {
  request.r(i1501[i + 0], i1501[i + 1], 2, i1500, '')
  }
  i1498.steps = i1500
  return i1498
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1504 = root || request.c( 'DraggableItem' )
  var i1505 = data
  i1504.itemID = i1505[0]
  i1504.isHammer = !!i1505[1]
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1507 = data
  i1506.m_Alpha = i1507[0]
  i1506.m_Interactable = !!i1507[1]
  i1506.m_BlocksRaycasts = !!i1507[2]
  i1506.m_IgnoreParentGroups = !!i1507[3]
  i1506.enabled = !!i1507[4]
  return i1506
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1508 = root || request.c( 'DropZone' )
  var i1509 = data
  i1508.idDrop = i1509[0]
  var i1511 = i1509[1]
  var i1510 = []
  for(var i = 0; i < i1511.length; i += 2) {
  request.r(i1511[i + 0], i1511[i + 1], 2, i1510, '')
  }
  i1508.steps = i1510
  var i1513 = i1509[2]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 2) {
  request.r(i1513[i + 0], i1513[i + 1], 2, i1512, '')
  }
  i1508.charmPrefabs = i1512
  request.r(i1509[3], i1509[4], 0, i1508, 'tranSpawn')
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1515 = data
  i1514.usedByComposite = !!i1515[0]
  i1514.autoTiling = !!i1515[1]
  i1514.size = new pc.Vec2( i1515[2], i1515[3] )
  i1514.edgeRadius = i1515[4]
  i1514.enabled = !!i1515[5]
  i1514.isTrigger = !!i1515[6]
  i1514.usedByEffector = !!i1515[7]
  i1514.density = i1515[8]
  i1514.offset = new pc.Vec2( i1515[9], i1515[10] )
  request.r(i1515[11], i1515[12], 0, i1514, 'material')
  return i1514
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1516 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1517 = data
  request.r(i1517[0], i1517[1], 0, i1516, 'skeletonDataAsset')
  request.r(i1517[2], i1517[3], 0, i1516, 'additiveMaterial')
  request.r(i1517[4], i1517[5], 0, i1516, 'multiplyMaterial')
  request.r(i1517[6], i1517[7], 0, i1516, 'screenMaterial')
  i1516.initialSkinName = i1517[8]
  i1516.initialFlipX = !!i1517[9]
  i1516.initialFlipY = !!i1517[10]
  i1516.startingAnimation = i1517[11]
  i1516.startingLoop = !!i1517[12]
  i1516.timeScale = i1517[13]
  i1516.freeze = !!i1517[14]
  i1516.layoutScaleMode = i1517[15]
  i1516.updateWhenInvisible = i1517[16]
  i1516.allowMultipleCanvasRenderers = !!i1517[17]
  var i1519 = i1517[18]
  var i1518 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1519.length; i += 2) {
  request.r(i1519[i + 0], i1519[i + 1], 1, i1518, '')
  }
  i1516.canvasRenderers = i1518
  i1516.enableSeparatorSlots = !!i1517[19]
  i1516.updateSeparatorPartLocation = !!i1517[20]
  i1516.updateSeparatorPartScale = !!i1517[21]
  i1516.disableMeshAssignmentOnOverride = !!i1517[22]
  i1516.referenceSize = new pc.Vec2( i1517[23], i1517[24] )
  i1516.referenceScale = i1517[25]
  i1516.rectTransformSize = new pc.Vec2( i1517[26], i1517[27] )
  i1516.editReferenceRect = !!i1517[28]
  var i1521 = i1517[29]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.push( i1521[i + 0] );
  }
  i1516.separatorSlotNames = i1520
  var i1523 = i1517[30]
  var i1522 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1523.length; i += 2) {
  request.r(i1523[i + 0], i1523[i + 1], 1, i1522, '')
  }
  i1516.separatorParts = i1522
  i1516.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1517[31], i1516.meshGenerator)
  i1516.updateTiming = i1517[32]
  i1516.unscaledTime = !!i1517[33]
  request.r(i1517[34], i1517[35], 0, i1516, 'm_Material')
  i1516.m_Maskable = !!i1517[36]
  i1516.m_Color = new pc.Color(i1517[37], i1517[38], i1517[39], i1517[40])
  i1516.m_RaycastTarget = !!i1517[41]
  i1516.m_RaycastPadding = new pc.Vec4( i1517[42], i1517[43], i1517[44], i1517[45] )
  return i1516
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1530 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1531 = data
  i1530.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1531[0], i1530.settings)
  return i1530
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1532 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1533 = data
  i1532.useClipping = !!i1533[0]
  i1532.zSpacing = i1533[1]
  i1532.pmaVertexColors = !!i1533[2]
  i1532.tintBlack = !!i1533[3]
  i1532.canvasGroupTintBlack = !!i1533[4]
  i1532.calculateTangents = !!i1533[5]
  i1532.addNormals = !!i1533[6]
  i1532.immutableTriangles = !!i1533[7]
  return i1532
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1534 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1535 = data
  i1534.m_Spacing = i1535[0]
  i1534.m_ChildForceExpandWidth = !!i1535[1]
  i1534.m_ChildForceExpandHeight = !!i1535[2]
  i1534.m_ChildControlWidth = !!i1535[3]
  i1534.m_ChildControlHeight = !!i1535[4]
  i1534.m_ChildScaleWidth = !!i1535[5]
  i1534.m_ChildScaleHeight = !!i1535[6]
  i1534.m_ReverseArrangement = !!i1535[7]
  i1534.m_Padding = UnityEngine.RectOffset.FromPaddings(i1535[8], i1535[9], i1535[10], i1535[11])
  i1534.m_ChildAlignment = i1535[12]
  return i1534
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1536 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1537 = data
  i1536.m_hasFontAssetChanged = !!i1537[0]
  request.r(i1537[1], i1537[2], 0, i1536, 'm_baseMaterial')
  i1536.m_maskOffset = new pc.Vec4( i1537[3], i1537[4], i1537[5], i1537[6] )
  i1536.m_text = i1537[7]
  i1536.m_isRightToLeft = !!i1537[8]
  request.r(i1537[9], i1537[10], 0, i1536, 'm_fontAsset')
  request.r(i1537[11], i1537[12], 0, i1536, 'm_sharedMaterial')
  var i1539 = i1537[13]
  var i1538 = []
  for(var i = 0; i < i1539.length; i += 2) {
  request.r(i1539[i + 0], i1539[i + 1], 2, i1538, '')
  }
  i1536.m_fontSharedMaterials = i1538
  request.r(i1537[14], i1537[15], 0, i1536, 'm_fontMaterial')
  var i1541 = i1537[16]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 2) {
  request.r(i1541[i + 0], i1541[i + 1], 2, i1540, '')
  }
  i1536.m_fontMaterials = i1540
  i1536.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1537[17], i1537[18], i1537[19], i1537[20])
  i1536.m_fontColor = new pc.Color(i1537[21], i1537[22], i1537[23], i1537[24])
  i1536.m_enableVertexGradient = !!i1537[25]
  i1536.m_colorMode = i1537[26]
  i1536.m_fontColorGradient = request.d('TMPro.VertexGradient', i1537[27], i1536.m_fontColorGradient)
  request.r(i1537[28], i1537[29], 0, i1536, 'm_fontColorGradientPreset')
  request.r(i1537[30], i1537[31], 0, i1536, 'm_spriteAsset')
  i1536.m_tintAllSprites = !!i1537[32]
  request.r(i1537[33], i1537[34], 0, i1536, 'm_StyleSheet')
  i1536.m_TextStyleHashCode = i1537[35]
  i1536.m_overrideHtmlColors = !!i1537[36]
  i1536.m_faceColor = UnityEngine.Color32.ConstructColor(i1537[37], i1537[38], i1537[39], i1537[40])
  i1536.m_fontSize = i1537[41]
  i1536.m_fontSizeBase = i1537[42]
  i1536.m_fontWeight = i1537[43]
  i1536.m_enableAutoSizing = !!i1537[44]
  i1536.m_fontSizeMin = i1537[45]
  i1536.m_fontSizeMax = i1537[46]
  i1536.m_fontStyle = i1537[47]
  i1536.m_HorizontalAlignment = i1537[48]
  i1536.m_VerticalAlignment = i1537[49]
  i1536.m_textAlignment = i1537[50]
  i1536.m_characterSpacing = i1537[51]
  i1536.m_wordSpacing = i1537[52]
  i1536.m_lineSpacing = i1537[53]
  i1536.m_lineSpacingMax = i1537[54]
  i1536.m_paragraphSpacing = i1537[55]
  i1536.m_charWidthMaxAdj = i1537[56]
  i1536.m_enableWordWrapping = !!i1537[57]
  i1536.m_wordWrappingRatios = i1537[58]
  i1536.m_overflowMode = i1537[59]
  request.r(i1537[60], i1537[61], 0, i1536, 'm_linkedTextComponent')
  request.r(i1537[62], i1537[63], 0, i1536, 'parentLinkedComponent')
  i1536.m_enableKerning = !!i1537[64]
  i1536.m_enableExtraPadding = !!i1537[65]
  i1536.checkPaddingRequired = !!i1537[66]
  i1536.m_isRichText = !!i1537[67]
  i1536.m_parseCtrlCharacters = !!i1537[68]
  i1536.m_isOrthographic = !!i1537[69]
  i1536.m_isCullingEnabled = !!i1537[70]
  i1536.m_horizontalMapping = i1537[71]
  i1536.m_verticalMapping = i1537[72]
  i1536.m_uvLineOffset = i1537[73]
  i1536.m_geometrySortingOrder = i1537[74]
  i1536.m_IsTextObjectScaleStatic = !!i1537[75]
  i1536.m_VertexBufferAutoSizeReduction = !!i1537[76]
  i1536.m_useMaxVisibleDescender = !!i1537[77]
  i1536.m_pageToDisplay = i1537[78]
  i1536.m_margin = new pc.Vec4( i1537[79], i1537[80], i1537[81], i1537[82] )
  i1536.m_isUsingLegacyAnimationComponent = !!i1537[83]
  i1536.m_isVolumetricText = !!i1537[84]
  request.r(i1537[85], i1537[86], 0, i1536, 'm_Material')
  i1536.m_Maskable = !!i1537[87]
  i1536.m_Color = new pc.Color(i1537[88], i1537[89], i1537[90], i1537[91])
  i1536.m_RaycastTarget = !!i1537[92]
  i1536.m_RaycastPadding = new pc.Vec4( i1537[93], i1537[94], i1537[95], i1537[96] )
  return i1536
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1544 = root || request.c( 'TMPro.VertexGradient' )
  var i1545 = data
  i1544.topLeft = new pc.Color(i1545[0], i1545[1], i1545[2], i1545[3])
  i1544.topRight = new pc.Color(i1545[4], i1545[5], i1545[6], i1545[7])
  i1544.bottomLeft = new pc.Color(i1545[8], i1545[9], i1545[10], i1545[11])
  i1544.bottomRight = new pc.Color(i1545[12], i1545[13], i1545[14], i1545[15])
  return i1544
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1546 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1547 = data
  i1546.targetIsSelf = !!i1547[0]
  request.r(i1547[1], i1547[2], 0, i1546, 'targetGO')
  i1546.tweenTargetIsTargetGO = !!i1547[3]
  i1546.delay = i1547[4]
  i1546.duration = i1547[5]
  i1546.easeType = i1547[6]
  i1546.easeCurve = new pc.AnimationCurve( { keys_flow: i1547[7] } )
  i1546.loopType = i1547[8]
  i1546.loops = i1547[9]
  i1546.id = i1547[10]
  i1546.isRelative = !!i1547[11]
  i1546.isFrom = !!i1547[12]
  i1546.isIndependentUpdate = !!i1547[13]
  i1546.autoKill = !!i1547[14]
  i1546.autoGenerate = !!i1547[15]
  i1546.isActive = !!i1547[16]
  i1546.isValid = !!i1547[17]
  request.r(i1547[18], i1547[19], 0, i1546, 'target')
  i1546.animationType = i1547[20]
  i1546.targetType = i1547[21]
  i1546.forcedTargetType = i1547[22]
  i1546.autoPlay = !!i1547[23]
  i1546.useTargetAsV3 = !!i1547[24]
  i1546.endValueFloat = i1547[25]
  i1546.endValueV3 = new pc.Vec3( i1547[26], i1547[27], i1547[28] )
  i1546.endValueV2 = new pc.Vec2( i1547[29], i1547[30] )
  i1546.endValueColor = new pc.Color(i1547[31], i1547[32], i1547[33], i1547[34])
  i1546.endValueString = i1547[35]
  i1546.endValueRect = UnityEngine.Rect.MinMaxRect(i1547[36], i1547[37], i1547[38], i1547[39])
  request.r(i1547[40], i1547[41], 0, i1546, 'endValueTransform')
  i1546.optionalBool0 = !!i1547[42]
  i1546.optionalBool1 = !!i1547[43]
  i1546.optionalFloat0 = i1547[44]
  i1546.optionalInt0 = i1547[45]
  i1546.optionalRotationMode = i1547[46]
  i1546.optionalScrambleMode = i1547[47]
  i1546.optionalShakeRandomnessMode = i1547[48]
  i1546.optionalString = i1547[49]
  i1546.updateType = i1547[50]
  i1546.isSpeedBased = !!i1547[51]
  i1546.hasOnStart = !!i1547[52]
  i1546.hasOnPlay = !!i1547[53]
  i1546.hasOnUpdate = !!i1547[54]
  i1546.hasOnStepComplete = !!i1547[55]
  i1546.hasOnComplete = !!i1547[56]
  i1546.hasOnTweenCreated = !!i1547[57]
  i1546.hasOnRewind = !!i1547[58]
  i1546.onStart = request.d('UnityEngine.Events.UnityEvent', i1547[59], i1546.onStart)
  i1546.onPlay = request.d('UnityEngine.Events.UnityEvent', i1547[60], i1546.onPlay)
  i1546.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1547[61], i1546.onUpdate)
  i1546.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1547[62], i1546.onStepComplete)
  i1546.onComplete = request.d('UnityEngine.Events.UnityEvent', i1547[63], i1546.onComplete)
  i1546.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1547[64], i1546.onTweenCreated)
  i1546.onRewind = request.d('UnityEngine.Events.UnityEvent', i1547[65], i1546.onRewind)
  return i1546
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1548 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1549 = data
  i1548.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1549[0], i1548.m_PersistentCalls)
  return i1548
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1550 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1551 = data
  i1550.m_ShowMaskGraphic = !!i1551[0]
  return i1550
}

Deserializers["IQFill"] = function (request, data, root) {
  var i1552 = root || request.c( 'IQFill' )
  var i1553 = data
  request.r(i1553[0], i1553[1], 0, i1552, 'fillImage')
  i1552.maxFillAmount = i1553[2]
  i1552.fillDuration = i1553[3]
  i1552.maxValue = i1553[4]
  i1552.addValue = i1553[5]
  i1552.fillEase = i1553[6]
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1555 = data
  i1554.ambientIntensity = i1555[0]
  i1554.reflectionIntensity = i1555[1]
  i1554.ambientMode = i1555[2]
  i1554.ambientLight = new pc.Color(i1555[3], i1555[4], i1555[5], i1555[6])
  i1554.ambientSkyColor = new pc.Color(i1555[7], i1555[8], i1555[9], i1555[10])
  i1554.ambientGroundColor = new pc.Color(i1555[11], i1555[12], i1555[13], i1555[14])
  i1554.ambientEquatorColor = new pc.Color(i1555[15], i1555[16], i1555[17], i1555[18])
  i1554.fogColor = new pc.Color(i1555[19], i1555[20], i1555[21], i1555[22])
  i1554.fogEndDistance = i1555[23]
  i1554.fogStartDistance = i1555[24]
  i1554.fogDensity = i1555[25]
  i1554.fog = !!i1555[26]
  request.r(i1555[27], i1555[28], 0, i1554, 'skybox')
  i1554.fogMode = i1555[29]
  var i1557 = i1555[30]
  var i1556 = []
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1557[i + 0]) );
  }
  i1554.lightmaps = i1556
  i1554.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1555[31], i1554.lightProbes)
  i1554.lightmapsMode = i1555[32]
  i1554.mixedBakeMode = i1555[33]
  i1554.environmentLightingMode = i1555[34]
  i1554.ambientProbe = new pc.SphericalHarmonicsL2(i1555[35])
  i1554.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1555[36])
  i1554.useReferenceAmbientProbe = !!i1555[37]
  request.r(i1555[38], i1555[39], 0, i1554, 'customReflection')
  request.r(i1555[40], i1555[41], 0, i1554, 'defaultReflection')
  i1554.defaultReflectionMode = i1555[42]
  i1554.defaultReflectionResolution = i1555[43]
  i1554.sunLightObjectId = i1555[44]
  i1554.pixelLightCount = i1555[45]
  i1554.defaultReflectionHDR = !!i1555[46]
  i1554.hasLightDataAsset = !!i1555[47]
  i1554.hasManualGenerate = !!i1555[48]
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1561 = data
  request.r(i1561[0], i1561[1], 0, i1560, 'lightmapColor')
  request.r(i1561[2], i1561[3], 0, i1560, 'lightmapDirection')
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1562 = root || new UnityEngine.LightProbes()
  var i1563 = data
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1571 = data
  var i1573 = i1571[0]
  var i1572 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1573.length; i += 1) {
    i1572.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1573[i + 0]));
  }
  i1570.ShaderCompilationErrors = i1572
  i1570.name = i1571[1]
  i1570.guid = i1571[2]
  var i1575 = i1571[3]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 1) {
    i1574.push( i1575[i + 0] );
  }
  i1570.shaderDefinedKeywords = i1574
  var i1577 = i1571[4]
  var i1576 = []
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1577[i + 0]) );
  }
  i1570.passes = i1576
  var i1579 = i1571[5]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1579[i + 0]) );
  }
  i1570.usePasses = i1578
  var i1581 = i1571[6]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1581[i + 0]) );
  }
  i1570.defaultParameterValues = i1580
  request.r(i1571[7], i1571[8], 0, i1570, 'unityFallbackShader')
  i1570.readDepth = !!i1571[9]
  i1570.isCreatedByShaderGraph = !!i1571[10]
  i1570.usedBatchUniforms = i1571[11]
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1585 = data
  i1584.shaderName = i1585[0]
  i1584.errorMessage = i1585[1]
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1588 = root || new pc.UnityShaderPass()
  var i1589 = data
  i1588.id = i1589[0]
  i1588.subShaderIndex = i1589[1]
  i1588.name = i1589[2]
  i1588.passType = i1589[3]
  i1588.grabPassTextureName = i1589[4]
  i1588.usePass = !!i1589[5]
  i1588.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1589[6], i1588.zTest)
  i1588.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1589[7], i1588.zWrite)
  i1588.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1589[8], i1588.culling)
  i1588.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1589[9], i1588.blending)
  i1588.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1589[10], i1588.alphaBlending)
  i1588.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1589[11], i1588.colorWriteMask)
  i1588.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1589[12], i1588.offsetUnits)
  i1588.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1589[13], i1588.offsetFactor)
  i1588.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1589[14], i1588.stencilRef)
  i1588.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1589[15], i1588.stencilReadMask)
  i1588.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1589[16], i1588.stencilWriteMask)
  i1588.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1589[17], i1588.stencilOp)
  i1588.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1589[18], i1588.stencilOpFront)
  i1588.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1589[19], i1588.stencilOpBack)
  var i1591 = i1589[20]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 1) {
    i1590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1591[i + 0]) );
  }
  i1588.tags = i1590
  var i1593 = i1589[21]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.push( i1593[i + 0] );
  }
  i1588.passDefinedKeywords = i1592
  var i1595 = i1589[22]
  var i1594 = []
  for(var i = 0; i < i1595.length; i += 1) {
    i1594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1595[i + 0]) );
  }
  i1588.passDefinedKeywordGroups = i1594
  var i1597 = i1589[23]
  var i1596 = []
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1597[i + 0]) );
  }
  i1588.variants = i1596
  var i1599 = i1589[24]
  var i1598 = []
  for(var i = 0; i < i1599.length; i += 1) {
    i1598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1599[i + 0]) );
  }
  i1588.excludedVariants = i1598
  i1588.hasDepthReader = !!i1589[25]
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1601 = data
  i1600.val = i1601[0]
  i1600.name = i1601[1]
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1603 = data
  i1602.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1603[0], i1602.src)
  i1602.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1603[1], i1602.dst)
  i1602.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1603[2], i1602.op)
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1605 = data
  i1604.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[0], i1604.pass)
  i1604.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[1], i1604.fail)
  i1604.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[2], i1604.zFail)
  i1604.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[3], i1604.comp)
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1609 = data
  i1608.name = i1609[0]
  i1608.value = i1609[1]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1613 = data
  var i1615 = i1613[0]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.push( i1615[i + 0] );
  }
  i1612.keywords = i1614
  i1612.hasDiscard = !!i1613[1]
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1619 = data
  i1618.passId = i1619[0]
  i1618.subShaderIndex = i1619[1]
  var i1621 = i1619[2]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.push( i1621[i + 0] );
  }
  i1618.keywords = i1620
  i1618.vertexProgram = i1619[3]
  i1618.fragmentProgram = i1619[4]
  i1618.compiledForWebGL2 = !!i1619[5]
  i1618.readDepth = !!i1619[6]
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1625 = data
  request.r(i1625[0], i1625[1], 0, i1624, 'shader')
  i1624.pass = i1625[2]
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1629 = data
  i1628.name = i1629[0]
  i1628.type = i1629[1]
  i1628.value = new pc.Vec4( i1629[2], i1629[3], i1629[4], i1629[5] )
  i1628.textureValue = i1629[6]
  i1628.shaderPropertyFlag = i1629[7]
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1631 = data
  i1630.name = i1631[0]
  request.r(i1631[1], i1631[2], 0, i1630, 'texture')
  i1630.aabb = i1631[3]
  i1630.vertices = i1631[4]
  i1630.triangles = i1631[5]
  i1630.textureRect = UnityEngine.Rect.MinMaxRect(i1631[6], i1631[7], i1631[8], i1631[9])
  i1630.packedRect = UnityEngine.Rect.MinMaxRect(i1631[10], i1631[11], i1631[12], i1631[13])
  i1630.border = new pc.Vec4( i1631[14], i1631[15], i1631[16], i1631[17] )
  i1630.transparency = i1631[18]
  i1630.bounds = i1631[19]
  i1630.pixelsPerUnit = i1631[20]
  i1630.textureWidth = i1631[21]
  i1630.textureHeight = i1631[22]
  i1630.nativeSize = new pc.Vec2( i1631[23], i1631[24] )
  i1630.pivot = new pc.Vec2( i1631[25], i1631[26] )
  i1630.textureRectOffset = new pc.Vec2( i1631[27], i1631[28] )
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1633 = data
  i1632.name = i1633[0]
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1635 = data
  i1634.name = i1635[0]
  i1634.ascent = i1635[1]
  i1634.originalLineHeight = i1635[2]
  i1634.fontSize = i1635[3]
  var i1637 = i1635[4]
  var i1636 = []
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1637[i + 0]) );
  }
  i1634.characterInfo = i1636
  request.r(i1635[5], i1635[6], 0, i1634, 'texture')
  i1634.originalFontSize = i1635[7]
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1641 = data
  i1640.index = i1641[0]
  i1640.advance = i1641[1]
  i1640.bearing = i1641[2]
  i1640.glyphWidth = i1641[3]
  i1640.glyphHeight = i1641[4]
  i1640.minX = i1641[5]
  i1640.maxX = i1641[6]
  i1640.minY = i1641[7]
  i1640.maxY = i1641[8]
  i1640.uvBottomLeftX = i1641[9]
  i1640.uvBottomLeftY = i1641[10]
  i1640.uvBottomRightX = i1641[11]
  i1640.uvBottomRightY = i1641[12]
  i1640.uvTopLeftX = i1641[13]
  i1640.uvTopLeftY = i1641[14]
  i1640.uvTopRightX = i1641[15]
  i1640.uvTopRightY = i1641[16]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1643 = data
  i1642.name = i1643[0]
  i1642.bytes64 = i1643[1]
  i1642.data = i1643[2]
  return i1642
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1644 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1645 = data
  var i1647 = i1645[0]
  var i1646 = []
  for(var i = 0; i < i1647.length; i += 2) {
  request.r(i1647[i + 0], i1647[i + 1], 2, i1646, '')
  }
  i1644.atlasAssets = i1646
  i1644.scale = i1645[1]
  request.r(i1645[2], i1645[3], 0, i1644, 'skeletonJSON')
  i1644.isUpgradingBlendModeMaterials = !!i1645[4]
  i1644.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1645[5], i1644.blendModeMaterials)
  var i1649 = i1645[6]
  var i1648 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1649.length; i += 2) {
  request.r(i1649[i + 0], i1649[i + 1], 1, i1648, '')
  }
  i1644.skeletonDataModifiers = i1648
  var i1651 = i1645[7]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( i1651[i + 0] );
  }
  i1644.fromAnimation = i1650
  var i1653 = i1645[8]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( i1653[i + 0] );
  }
  i1644.toAnimation = i1652
  i1644.duration = i1645[9]
  i1644.defaultMix = i1645[10]
  request.r(i1645[11], i1645[12], 0, i1644, 'controller')
  return i1644
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1656 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1657 = data
  i1656.applyAdditiveMaterial = !!i1657[0]
  var i1659 = i1657[1]
  var i1658 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1659[i + 0]));
  }
  i1656.additiveMaterials = i1658
  var i1661 = i1657[2]
  var i1660 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1661[i + 0]));
  }
  i1656.multiplyMaterials = i1660
  var i1663 = i1657[3]
  var i1662 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1663[i + 0]));
  }
  i1656.screenMaterials = i1662
  i1656.requiresBlendModeMaterials = !!i1657[4]
  return i1656
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1666 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1667 = data
  i1666.pageName = i1667[0]
  request.r(i1667[1], i1667[2], 0, i1666, 'material')
  return i1666
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1670 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1671 = data
  request.r(i1671[0], i1671[1], 0, i1670, 'atlasFile')
  var i1673 = i1671[2]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 2) {
  request.r(i1673[i + 0], i1673[i + 1], 2, i1672, '')
  }
  i1670.materials = i1672
  i1670.textureLoadingMode = i1671[3]
  request.r(i1671[4], i1671[5], 0, i1670, 'onDemandTextureLoader')
  return i1670
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1674 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1675 = data
  i1674.hashCode = i1675[0]
  request.r(i1675[1], i1675[2], 0, i1674, 'material')
  i1674.materialHashCode = i1675[3]
  request.r(i1675[4], i1675[5], 0, i1674, 'atlas')
  i1674.normalStyle = i1675[6]
  i1674.normalSpacingOffset = i1675[7]
  i1674.boldStyle = i1675[8]
  i1674.boldSpacing = i1675[9]
  i1674.italicStyle = i1675[10]
  i1674.tabSize = i1675[11]
  i1674.m_Version = i1675[12]
  i1674.m_SourceFontFileGUID = i1675[13]
  request.r(i1675[14], i1675[15], 0, i1674, 'm_SourceFontFile_EditorRef')
  request.r(i1675[16], i1675[17], 0, i1674, 'm_SourceFontFile')
  i1674.m_AtlasPopulationMode = i1675[18]
  i1674.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1675[19], i1674.m_FaceInfo)
  var i1677 = i1675[20]
  var i1676 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.add(request.d('UnityEngine.TextCore.Glyph', i1677[i + 0]));
  }
  i1674.m_GlyphTable = i1676
  var i1679 = i1675[21]
  var i1678 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.add(request.d('TMPro.TMP_Character', i1679[i + 0]));
  }
  i1674.m_CharacterTable = i1678
  var i1681 = i1675[22]
  var i1680 = []
  for(var i = 0; i < i1681.length; i += 2) {
  request.r(i1681[i + 0], i1681[i + 1], 2, i1680, '')
  }
  i1674.m_AtlasTextures = i1680
  i1674.m_AtlasTextureIndex = i1675[23]
  i1674.m_IsMultiAtlasTexturesEnabled = !!i1675[24]
  i1674.m_ClearDynamicDataOnBuild = !!i1675[25]
  var i1683 = i1675[26]
  var i1682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.add(request.d('UnityEngine.TextCore.GlyphRect', i1683[i + 0]));
  }
  i1674.m_UsedGlyphRects = i1682
  var i1685 = i1675[27]
  var i1684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.add(request.d('UnityEngine.TextCore.GlyphRect', i1685[i + 0]));
  }
  i1674.m_FreeGlyphRects = i1684
  i1674.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1675[28], i1674.m_fontInfo)
  i1674.m_AtlasWidth = i1675[29]
  i1674.m_AtlasHeight = i1675[30]
  i1674.m_AtlasPadding = i1675[31]
  i1674.m_AtlasRenderMode = i1675[32]
  var i1687 = i1675[33]
  var i1686 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.add(request.d('TMPro.TMP_Glyph', i1687[i + 0]));
  }
  i1674.m_glyphInfoList = i1686
  i1674.m_KerningTable = request.d('TMPro.KerningTable', i1675[34], i1674.m_KerningTable)
  i1674.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1675[35], i1674.m_FontFeatureTable)
  var i1689 = i1675[36]
  var i1688 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1689.length; i += 2) {
  request.r(i1689[i + 0], i1689[i + 1], 1, i1688, '')
  }
  i1674.fallbackFontAssets = i1688
  var i1691 = i1675[37]
  var i1690 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1691.length; i += 2) {
  request.r(i1691[i + 0], i1691[i + 1], 1, i1690, '')
  }
  i1674.m_FallbackFontAssetTable = i1690
  i1674.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1675[38], i1674.m_CreationSettings)
  var i1693 = i1675[39]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( request.d('TMPro.TMP_FontWeightPair', i1693[i + 0]) );
  }
  i1674.m_FontWeightTable = i1692
  var i1695 = i1675[40]
  var i1694 = []
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.push( request.d('TMPro.TMP_FontWeightPair', i1695[i + 0]) );
  }
  i1674.fontWeights = i1694
  return i1674
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1696 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1697 = data
  i1696.m_FaceIndex = i1697[0]
  i1696.m_FamilyName = i1697[1]
  i1696.m_StyleName = i1697[2]
  i1696.m_PointSize = i1697[3]
  i1696.m_Scale = i1697[4]
  i1696.m_UnitsPerEM = i1697[5]
  i1696.m_LineHeight = i1697[6]
  i1696.m_AscentLine = i1697[7]
  i1696.m_CapLine = i1697[8]
  i1696.m_MeanLine = i1697[9]
  i1696.m_Baseline = i1697[10]
  i1696.m_DescentLine = i1697[11]
  i1696.m_SuperscriptOffset = i1697[12]
  i1696.m_SuperscriptSize = i1697[13]
  i1696.m_SubscriptOffset = i1697[14]
  i1696.m_SubscriptSize = i1697[15]
  i1696.m_UnderlineOffset = i1697[16]
  i1696.m_UnderlineThickness = i1697[17]
  i1696.m_StrikethroughOffset = i1697[18]
  i1696.m_StrikethroughThickness = i1697[19]
  i1696.m_TabWidth = i1697[20]
  return i1696
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1700 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1701 = data
  i1700.m_Index = i1701[0]
  i1700.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1701[1], i1700.m_Metrics)
  i1700.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1701[2], i1700.m_GlyphRect)
  i1700.m_Scale = i1701[3]
  i1700.m_AtlasIndex = i1701[4]
  i1700.m_ClassDefinitionType = i1701[5]
  return i1700
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1702 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1703 = data
  i1702.m_Width = i1703[0]
  i1702.m_Height = i1703[1]
  i1702.m_HorizontalBearingX = i1703[2]
  i1702.m_HorizontalBearingY = i1703[3]
  i1702.m_HorizontalAdvance = i1703[4]
  return i1702
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1704 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1705 = data
  i1704.m_X = i1705[0]
  i1704.m_Y = i1705[1]
  i1704.m_Width = i1705[2]
  i1704.m_Height = i1705[3]
  return i1704
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1708 = root || request.c( 'TMPro.TMP_Character' )
  var i1709 = data
  i1708.m_ElementType = i1709[0]
  i1708.m_Unicode = i1709[1]
  i1708.m_GlyphIndex = i1709[2]
  i1708.m_Scale = i1709[3]
  return i1708
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1714 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1715 = data
  i1714.Name = i1715[0]
  i1714.PointSize = i1715[1]
  i1714.Scale = i1715[2]
  i1714.CharacterCount = i1715[3]
  i1714.LineHeight = i1715[4]
  i1714.Baseline = i1715[5]
  i1714.Ascender = i1715[6]
  i1714.CapHeight = i1715[7]
  i1714.Descender = i1715[8]
  i1714.CenterLine = i1715[9]
  i1714.SuperscriptOffset = i1715[10]
  i1714.SubscriptOffset = i1715[11]
  i1714.SubSize = i1715[12]
  i1714.Underline = i1715[13]
  i1714.UnderlineThickness = i1715[14]
  i1714.strikethrough = i1715[15]
  i1714.strikethroughThickness = i1715[16]
  i1714.TabWidth = i1715[17]
  i1714.Padding = i1715[18]
  i1714.AtlasWidth = i1715[19]
  i1714.AtlasHeight = i1715[20]
  return i1714
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1718 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1719 = data
  i1718.id = i1719[0]
  i1718.x = i1719[1]
  i1718.y = i1719[2]
  i1718.width = i1719[3]
  i1718.height = i1719[4]
  i1718.xOffset = i1719[5]
  i1718.yOffset = i1719[6]
  i1718.xAdvance = i1719[7]
  i1718.scale = i1719[8]
  return i1718
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1720 = root || request.c( 'TMPro.KerningTable' )
  var i1721 = data
  var i1723 = i1721[0]
  var i1722 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.add(request.d('TMPro.KerningPair', i1723[i + 0]));
  }
  i1720.kerningPairs = i1722
  return i1720
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1726 = root || request.c( 'TMPro.KerningPair' )
  var i1727 = data
  i1726.xOffset = i1727[0]
  i1726.m_FirstGlyph = i1727[1]
  i1726.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1727[2], i1726.m_FirstGlyphAdjustments)
  i1726.m_SecondGlyph = i1727[3]
  i1726.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1727[4], i1726.m_SecondGlyphAdjustments)
  i1726.m_IgnoreSpacingAdjustments = !!i1727[5]
  return i1726
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1728 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1729 = data
  var i1731 = i1729[0]
  var i1730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1731[i + 0]));
  }
  i1728.m_GlyphPairAdjustmentRecords = i1730
  return i1728
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1734 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1735 = data
  i1734.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1735[0], i1734.m_FirstAdjustmentRecord)
  i1734.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1735[1], i1734.m_SecondAdjustmentRecord)
  i1734.m_FeatureLookupFlags = i1735[2]
  return i1734
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1738 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1739 = data
  i1738.sourceFontFileName = i1739[0]
  i1738.sourceFontFileGUID = i1739[1]
  i1738.pointSizeSamplingMode = i1739[2]
  i1738.pointSize = i1739[3]
  i1738.padding = i1739[4]
  i1738.packingMode = i1739[5]
  i1738.atlasWidth = i1739[6]
  i1738.atlasHeight = i1739[7]
  i1738.characterSetSelectionMode = i1739[8]
  i1738.characterSequence = i1739[9]
  i1738.referencedFontAssetGUID = i1739[10]
  i1738.referencedTextAssetGUID = i1739[11]
  i1738.fontStyle = i1739[12]
  i1738.fontStyleModifier = i1739[13]
  i1738.renderMode = i1739[14]
  i1738.includeFontFeatures = !!i1739[15]
  return i1738
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1742 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1743 = data
  request.r(i1743[0], i1743[1], 0, i1742, 'regularTypeface')
  request.r(i1743[2], i1743[3], 0, i1742, 'italicTypeface')
  return i1742
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1744 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1745 = data
  i1744.useSafeMode = !!i1745[0]
  i1744.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1745[1], i1744.safeModeOptions)
  i1744.timeScale = i1745[2]
  i1744.unscaledTimeScale = i1745[3]
  i1744.useSmoothDeltaTime = !!i1745[4]
  i1744.maxSmoothUnscaledTime = i1745[5]
  i1744.rewindCallbackMode = i1745[6]
  i1744.showUnityEditorReport = !!i1745[7]
  i1744.logBehaviour = i1745[8]
  i1744.drawGizmos = !!i1745[9]
  i1744.defaultRecyclable = !!i1745[10]
  i1744.defaultAutoPlay = i1745[11]
  i1744.defaultUpdateType = i1745[12]
  i1744.defaultTimeScaleIndependent = !!i1745[13]
  i1744.defaultEaseType = i1745[14]
  i1744.defaultEaseOvershootOrAmplitude = i1745[15]
  i1744.defaultEasePeriod = i1745[16]
  i1744.defaultAutoKill = !!i1745[17]
  i1744.defaultLoopType = i1745[18]
  i1744.debugMode = !!i1745[19]
  i1744.debugStoreTargetId = !!i1745[20]
  i1744.showPreviewPanel = !!i1745[21]
  i1744.storeSettingsLocation = i1745[22]
  i1744.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1745[23], i1744.modules)
  i1744.createASMDEF = !!i1745[24]
  i1744.showPlayingTweens = !!i1745[25]
  i1744.showPausedTweens = !!i1745[26]
  return i1744
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1746 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1747 = data
  i1746.logBehaviour = i1747[0]
  i1746.nestedTweenFailureBehaviour = i1747[1]
  return i1746
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1748 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1749 = data
  i1748.showPanel = !!i1749[0]
  i1748.audioEnabled = !!i1749[1]
  i1748.physicsEnabled = !!i1749[2]
  i1748.physics2DEnabled = !!i1749[3]
  i1748.spriteEnabled = !!i1749[4]
  i1748.uiEnabled = !!i1749[5]
  i1748.textMeshProEnabled = !!i1749[6]
  i1748.tk2DEnabled = !!i1749[7]
  i1748.deAudioEnabled = !!i1749[8]
  i1748.deUnityExtendedEnabled = !!i1749[9]
  i1748.epoOutlineEnabled = !!i1749[10]
  return i1748
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1750 = root || request.c( 'TMPro.TMP_Settings' )
  var i1751 = data
  i1750.m_enableWordWrapping = !!i1751[0]
  i1750.m_enableKerning = !!i1751[1]
  i1750.m_enableExtraPadding = !!i1751[2]
  i1750.m_enableTintAllSprites = !!i1751[3]
  i1750.m_enableParseEscapeCharacters = !!i1751[4]
  i1750.m_EnableRaycastTarget = !!i1751[5]
  i1750.m_GetFontFeaturesAtRuntime = !!i1751[6]
  i1750.m_missingGlyphCharacter = i1751[7]
  i1750.m_warningsDisabled = !!i1751[8]
  request.r(i1751[9], i1751[10], 0, i1750, 'm_defaultFontAsset')
  i1750.m_defaultFontAssetPath = i1751[11]
  i1750.m_defaultFontSize = i1751[12]
  i1750.m_defaultAutoSizeMinRatio = i1751[13]
  i1750.m_defaultAutoSizeMaxRatio = i1751[14]
  i1750.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1751[15], i1751[16] )
  i1750.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1751[17], i1751[18] )
  i1750.m_autoSizeTextContainer = !!i1751[19]
  i1750.m_IsTextObjectScaleStatic = !!i1751[20]
  var i1753 = i1751[21]
  var i1752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1753.length; i += 2) {
  request.r(i1753[i + 0], i1753[i + 1], 1, i1752, '')
  }
  i1750.m_fallbackFontAssets = i1752
  i1750.m_matchMaterialPreset = !!i1751[22]
  request.r(i1751[23], i1751[24], 0, i1750, 'm_defaultSpriteAsset')
  i1750.m_defaultSpriteAssetPath = i1751[25]
  i1750.m_enableEmojiSupport = !!i1751[26]
  i1750.m_MissingCharacterSpriteUnicode = i1751[27]
  i1750.m_defaultColorGradientPresetsPath = i1751[28]
  request.r(i1751[29], i1751[30], 0, i1750, 'm_defaultStyleSheet')
  i1750.m_StyleSheetsResourcePath = i1751[31]
  request.r(i1751[32], i1751[33], 0, i1750, 'm_leadingCharacters')
  request.r(i1751[34], i1751[35], 0, i1750, 'm_followingCharacters')
  i1750.m_UseModernHangulLineBreakingRules = !!i1751[36]
  return i1750
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1754 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1755 = data
  i1754.m_GlyphIndex = i1755[0]
  i1754.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1755[1], i1754.m_GlyphValueRecord)
  return i1754
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1756 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1757 = data
  i1756.m_XPlacement = i1757[0]
  i1756.m_YPlacement = i1757[1]
  i1756.m_XAdvance = i1757[2]
  i1756.m_YAdvance = i1757[3]
  return i1756
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1758 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1759 = data
  i1758.hashCode = i1759[0]
  request.r(i1759[1], i1759[2], 0, i1758, 'material')
  i1758.materialHashCode = i1759[3]
  request.r(i1759[4], i1759[5], 0, i1758, 'spriteSheet')
  var i1761 = i1759[6]
  var i1760 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.add(request.d('TMPro.TMP_Sprite', i1761[i + 0]));
  }
  i1758.spriteInfoList = i1760
  var i1763 = i1759[7]
  var i1762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1763.length; i += 2) {
  request.r(i1763[i + 0], i1763[i + 1], 1, i1762, '')
  }
  i1758.fallbackSpriteAssets = i1762
  i1758.m_Version = i1759[8]
  i1758.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1759[9], i1758.m_FaceInfo)
  var i1765 = i1759[10]
  var i1764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.add(request.d('TMPro.TMP_SpriteCharacter', i1765[i + 0]));
  }
  i1758.m_SpriteCharacterTable = i1764
  var i1767 = i1759[11]
  var i1766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.add(request.d('TMPro.TMP_SpriteGlyph', i1767[i + 0]));
  }
  i1758.m_SpriteGlyphTable = i1766
  return i1758
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1770 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1771 = data
  i1770.name = i1771[0]
  i1770.hashCode = i1771[1]
  i1770.unicode = i1771[2]
  i1770.pivot = new pc.Vec2( i1771[3], i1771[4] )
  request.r(i1771[5], i1771[6], 0, i1770, 'sprite')
  i1770.id = i1771[7]
  i1770.x = i1771[8]
  i1770.y = i1771[9]
  i1770.width = i1771[10]
  i1770.height = i1771[11]
  i1770.xOffset = i1771[12]
  i1770.yOffset = i1771[13]
  i1770.xAdvance = i1771[14]
  i1770.scale = i1771[15]
  return i1770
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1776 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1777 = data
  i1776.m_Name = i1777[0]
  i1776.m_HashCode = i1777[1]
  i1776.m_ElementType = i1777[2]
  i1776.m_Unicode = i1777[3]
  i1776.m_GlyphIndex = i1777[4]
  i1776.m_Scale = i1777[5]
  return i1776
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1780 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1781 = data
  request.r(i1781[0], i1781[1], 0, i1780, 'sprite')
  i1780.m_Index = i1781[2]
  i1780.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1781[3], i1780.m_Metrics)
  i1780.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1781[4], i1780.m_GlyphRect)
  i1780.m_Scale = i1781[5]
  i1780.m_AtlasIndex = i1781[6]
  i1780.m_ClassDefinitionType = i1781[7]
  return i1780
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1782 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1783 = data
  var i1785 = i1783[0]
  var i1784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.add(request.d('TMPro.TMP_Style', i1785[i + 0]));
  }
  i1782.m_StyleList = i1784
  return i1782
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1788 = root || request.c( 'TMPro.TMP_Style' )
  var i1789 = data
  i1788.m_Name = i1789[0]
  i1788.m_HashCode = i1789[1]
  i1788.m_OpeningDefinition = i1789[2]
  i1788.m_ClosingDefinition = i1789[3]
  i1788.m_OpeningTagArray = i1789[4]
  i1788.m_ClosingTagArray = i1789[5]
  i1788.m_OpeningTagUnicodeArray = i1789[6]
  i1788.m_ClosingTagUnicodeArray = i1789[7]
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
  i1798.enableDynamicBatching = !!i1799[9]
  i1798.lightmapEncodingQuality = i1799[10]
  i1798.desiredColorSpace = i1799[11]
  var i1807 = i1799[12]
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

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1846 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1847 = data
  i1846.xPlacement = i1847[0]
  i1846.yPlacement = i1847[1]
  i1846.xAdvance = i1847[2]
  i1846.yAdvance = i1847[3]
  return i1846
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[8],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[8],"76":[77],"78":[79],"80":[79],"12":[2],"81":[82],"83":[84],"85":[82],"86":[2],"87":[2],"14":[12],"5":[3,2],"88":[2],"13":[12],"89":[2],"90":[2],"91":[2],"92":[2],"93":[2],"94":[2],"31":[2],"35":[2],"95":[2],"19":[3,2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[3,2],"101":[2],"102":[10],"103":[10],"11":[10],"104":[10],"105":[8],"106":[8],"107":[108],"109":[8],"110":[111],"112":[2],"113":[3,2],"114":[77],"28":[3,2],"115":[116,77],"117":[77],"118":[77,119],"120":[54],"121":[62],"122":[111],"123":[124],"125":[2],"126":[77,2],"32":[2,3],"127":[2],"128":[3,2],"129":[77],"130":[3,2],"131":[2],"132":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","IQFill","UnityEngine.AudioSource","UnityEngine.AudioClip","ClickItem","DraggableItem","UnityEngine.CanvasGroup","DropZone","UnityEngine.BoxCollider2D","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.UI.VerticalLayoutGroup","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "22.3";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "APG_V09_NgocNDL_AnhPD";

Deserializers.lunaAppID = "29138";

Deserializers.projectId = "cc2b1186a2056e546bb13add5b988034";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1709";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4626";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "5bc0d263-fc51-4127-8ff3-f999649db0e1";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

