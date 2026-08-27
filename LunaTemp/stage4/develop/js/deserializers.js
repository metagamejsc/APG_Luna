var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.JointSpring' )
  var i1237 = data
  i1236.spring = i1237[0]
  i1236.damper = i1237[1]
  i1236.targetPosition = i1237[2]
  return i1236
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1238 = root || request.c( 'UnityEngine.JointMotor' )
  var i1239 = data
  i1238.m_TargetVelocity = i1239[0]
  i1238.m_Force = i1239[1]
  i1238.m_FreeSpin = i1239[2]
  return i1238
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1240 = root || request.c( 'UnityEngine.JointLimits' )
  var i1241 = data
  i1240.m_Min = i1241[0]
  i1240.m_Max = i1241[1]
  i1240.m_Bounciness = i1241[2]
  i1240.m_BounceMinVelocity = i1241[3]
  i1240.m_ContactDistance = i1241[4]
  i1240.minBounce = i1241[5]
  i1240.maxBounce = i1241[6]
  return i1240
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1242 = root || request.c( 'UnityEngine.JointDrive' )
  var i1243 = data
  i1242.m_PositionSpring = i1243[0]
  i1242.m_PositionDamper = i1243[1]
  i1242.m_MaximumForce = i1243[2]
  i1242.m_UseAcceleration = i1243[3]
  return i1242
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1245 = data
  i1244.m_Spring = i1245[0]
  i1244.m_Damper = i1245[1]
  return i1244
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1246 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1247 = data
  i1246.m_Limit = i1247[0]
  i1246.m_Bounciness = i1247[1]
  i1246.m_ContactDistance = i1247[2]
  return i1246
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1249 = data
  i1248.m_ExtremumSlip = i1249[0]
  i1248.m_ExtremumValue = i1249[1]
  i1248.m_AsymptoteSlip = i1249[2]
  i1248.m_AsymptoteValue = i1249[3]
  i1248.m_Stiffness = i1249[4]
  return i1248
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1250 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1251 = data
  i1250.m_LowerAngle = i1251[0]
  i1250.m_UpperAngle = i1251[1]
  return i1250
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1252 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1253 = data
  i1252.m_MotorSpeed = i1253[0]
  i1252.m_MaximumMotorTorque = i1253[1]
  return i1252
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1254 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1255 = data
  i1254.m_DampingRatio = i1255[0]
  i1254.m_Frequency = i1255[1]
  i1254.m_Angle = i1255[2]
  return i1254
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1256 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1257 = data
  i1256.m_LowerTranslation = i1257[0]
  i1256.m_UpperTranslation = i1257[1]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1259 = data
  i1258.name = i1259[0]
  i1258.width = i1259[1]
  i1258.height = i1259[2]
  i1258.mipmapCount = i1259[3]
  i1258.anisoLevel = i1259[4]
  i1258.filterMode = i1259[5]
  i1258.hdr = !!i1259[6]
  i1258.format = i1259[7]
  i1258.wrapMode = i1259[8]
  i1258.alphaIsTransparency = !!i1259[9]
  i1258.alphaSource = i1259[10]
  i1258.graphicsFormat = i1259[11]
  i1258.sRGBTexture = !!i1259[12]
  i1258.desiredColorSpace = i1259[13]
  i1258.wrapU = i1259[14]
  i1258.wrapV = i1259[15]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1260 = root || new pc.UnityMaterial()
  var i1261 = data
  i1260.name = i1261[0]
  request.r(i1261[1], i1261[2], 0, i1260, 'shader')
  i1260.renderQueue = i1261[3]
  i1260.enableInstancing = !!i1261[4]
  var i1263 = i1261[5]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1263[i + 0]) );
  }
  i1260.floatParameters = i1262
  var i1265 = i1261[6]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1265[i + 0]) );
  }
  i1260.colorParameters = i1264
  var i1267 = i1261[7]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1267[i + 0]) );
  }
  i1260.vectorParameters = i1266
  var i1269 = i1261[8]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1269[i + 0]) );
  }
  i1260.textureParameters = i1268
  var i1271 = i1261[9]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1271[i + 0]) );
  }
  i1260.materialFlags = i1270
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1275 = data
  i1274.name = i1275[0]
  i1274.value = i1275[1]
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1279 = data
  i1278.name = i1279[0]
  i1278.value = new pc.Color(i1279[1], i1279[2], i1279[3], i1279[4])
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1283 = data
  i1282.name = i1283[0]
  i1282.value = new pc.Vec4( i1283[1], i1283[2], i1283[3], i1283[4] )
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1287 = data
  i1286.name = i1287[0]
  request.r(i1287[1], i1287[2], 0, i1286, 'value')
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1291 = data
  i1290.name = i1291[0]
  i1290.enabled = !!i1291[1]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1293 = data
  i1292.name = i1293[0]
  i1292.index = i1293[1]
  i1292.startup = !!i1293[2]
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1295 = data
  i1294.aspect = i1295[0]
  i1294.orthographic = !!i1295[1]
  i1294.orthographicSize = i1295[2]
  i1294.backgroundColor = new pc.Color(i1295[3], i1295[4], i1295[5], i1295[6])
  i1294.nearClipPlane = i1295[7]
  i1294.farClipPlane = i1295[8]
  i1294.fieldOfView = i1295[9]
  i1294.depth = i1295[10]
  i1294.clearFlags = i1295[11]
  i1294.cullingMask = i1295[12]
  i1294.rect = i1295[13]
  request.r(i1295[14], i1295[15], 0, i1294, 'targetTexture')
  i1294.usePhysicalProperties = !!i1295[16]
  i1294.focalLength = i1295[17]
  i1294.sensorSize = new pc.Vec2( i1295[18], i1295[19] )
  i1294.lensShift = new pc.Vec2( i1295[20], i1295[21] )
  i1294.gateFit = i1295[22]
  i1294.commandBufferCount = i1295[23]
  i1294.cameraType = i1295[24]
  i1294.enabled = !!i1295[25]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1297 = data
  i1296.name = i1297[0]
  i1296.tagId = i1297[1]
  i1296.enabled = !!i1297[2]
  i1296.isStatic = !!i1297[3]
  i1296.layer = i1297[4]
  return i1296
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1298 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1299 = data
  request.r(i1299[0], i1299[1], 0, i1298, 'm_FirstSelected')
  i1298.m_sendNavigationEvents = !!i1299[2]
  i1298.m_DragThreshold = i1299[3]
  return i1298
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1300 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1301 = data
  i1300.m_HorizontalAxis = i1301[0]
  i1300.m_VerticalAxis = i1301[1]
  i1300.m_SubmitButton = i1301[2]
  i1300.m_CancelButton = i1301[3]
  i1300.m_InputActionsPerSecond = i1301[4]
  i1300.m_RepeatDelay = i1301[5]
  i1300.m_ForceModuleActive = !!i1301[6]
  i1300.m_SendPointerHoverToParent = !!i1301[7]
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1303 = data
  i1302.pivot = new pc.Vec2( i1303[0], i1303[1] )
  i1302.anchorMin = new pc.Vec2( i1303[2], i1303[3] )
  i1302.anchorMax = new pc.Vec2( i1303[4], i1303[5] )
  i1302.sizeDelta = new pc.Vec2( i1303[6], i1303[7] )
  i1302.anchoredPosition3D = new pc.Vec3( i1303[8], i1303[9], i1303[10] )
  i1302.rotation = new pc.Quat(i1303[11], i1303[12], i1303[13], i1303[14])
  i1302.scale = new pc.Vec3( i1303[15], i1303[16], i1303[17] )
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1305 = data
  i1304.planeDistance = i1305[0]
  i1304.referencePixelsPerUnit = i1305[1]
  i1304.isFallbackOverlay = !!i1305[2]
  i1304.renderMode = i1305[3]
  i1304.renderOrder = i1305[4]
  i1304.sortingLayerName = i1305[5]
  i1304.sortingOrder = i1305[6]
  i1304.scaleFactor = i1305[7]
  request.r(i1305[8], i1305[9], 0, i1304, 'worldCamera')
  i1304.overrideSorting = !!i1305[10]
  i1304.pixelPerfect = !!i1305[11]
  i1304.targetDisplay = i1305[12]
  i1304.overridePixelPerfect = !!i1305[13]
  i1304.enabled = !!i1305[14]
  return i1304
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1306 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1307 = data
  i1306.m_UiScaleMode = i1307[0]
  i1306.m_ReferencePixelsPerUnit = i1307[1]
  i1306.m_ScaleFactor = i1307[2]
  i1306.m_ReferenceResolution = new pc.Vec2( i1307[3], i1307[4] )
  i1306.m_ScreenMatchMode = i1307[5]
  i1306.m_MatchWidthOrHeight = i1307[6]
  i1306.m_PhysicalUnit = i1307[7]
  i1306.m_FallbackScreenDPI = i1307[8]
  i1306.m_DefaultSpriteDPI = i1307[9]
  i1306.m_DynamicPixelsPerUnit = i1307[10]
  i1306.m_PresetInfoIsWorld = !!i1307[11]
  return i1306
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1308 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1309 = data
  i1308.m_IgnoreReversedGraphics = !!i1309[0]
  i1308.m_BlockingObjects = i1309[1]
  i1308.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1309[2] )
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1311 = data
  i1310.cullTransparentMesh = !!i1311[0]
  return i1310
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1312 = root || request.c( 'UnityEngine.UI.Image' )
  var i1313 = data
  request.r(i1313[0], i1313[1], 0, i1312, 'm_Sprite')
  i1312.m_Type = i1313[2]
  i1312.m_PreserveAspect = !!i1313[3]
  i1312.m_FillCenter = !!i1313[4]
  i1312.m_FillMethod = i1313[5]
  i1312.m_FillAmount = i1313[6]
  i1312.m_FillClockwise = !!i1313[7]
  i1312.m_FillOrigin = i1313[8]
  i1312.m_UseSpriteMesh = !!i1313[9]
  i1312.m_PixelsPerUnitMultiplier = i1313[10]
  request.r(i1313[11], i1313[12], 0, i1312, 'm_Material')
  i1312.m_Maskable = !!i1313[13]
  i1312.m_Color = new pc.Color(i1313[14], i1313[15], i1313[16], i1313[17])
  i1312.m_RaycastTarget = !!i1313[18]
  i1312.m_RaycastPadding = new pc.Vec4( i1313[19], i1313[20], i1313[21], i1313[22] )
  return i1312
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1314 = root || request.c( 'UnityEngine.UI.Text' )
  var i1315 = data
  i1314.m_FontData = request.d('UnityEngine.UI.FontData', i1315[0], i1314.m_FontData)
  i1314.m_Text = i1315[1]
  request.r(i1315[2], i1315[3], 0, i1314, 'm_Material')
  i1314.m_Maskable = !!i1315[4]
  i1314.m_Color = new pc.Color(i1315[5], i1315[6], i1315[7], i1315[8])
  i1314.m_RaycastTarget = !!i1315[9]
  i1314.m_RaycastPadding = new pc.Vec4( i1315[10], i1315[11], i1315[12], i1315[13] )
  return i1314
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1316 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1317 = data
  request.r(i1317[0], i1317[1], 0, i1316, 'm_Font')
  i1316.m_FontSize = i1317[2]
  i1316.m_FontStyle = i1317[3]
  i1316.m_BestFit = !!i1317[4]
  i1316.m_MinSize = i1317[5]
  i1316.m_MaxSize = i1317[6]
  i1316.m_Alignment = i1317[7]
  i1316.m_AlignByGeometry = !!i1317[8]
  i1316.m_RichText = !!i1317[9]
  i1316.m_HorizontalOverflow = i1317[10]
  i1316.m_VerticalOverflow = i1317[11]
  i1316.m_LineSpacing = i1317[12]
  return i1316
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1318 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1319 = data
  request.r(i1319[0], i1319[1], 0, i1318, 'm_FillRect')
  request.r(i1319[2], i1319[3], 0, i1318, 'm_HandleRect')
  i1318.m_Direction = i1319[4]
  i1318.m_MinValue = i1319[5]
  i1318.m_MaxValue = i1319[6]
  i1318.m_WholeNumbers = !!i1319[7]
  i1318.m_Value = i1319[8]
  i1318.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1319[9], i1318.m_OnValueChanged)
  i1318.m_Navigation = request.d('UnityEngine.UI.Navigation', i1319[10], i1318.m_Navigation)
  i1318.m_Transition = i1319[11]
  i1318.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1319[12], i1318.m_Colors)
  i1318.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1319[13], i1318.m_SpriteState)
  i1318.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1319[14], i1318.m_AnimationTriggers)
  i1318.m_Interactable = !!i1319[15]
  request.r(i1319[16], i1319[17], 0, i1318, 'm_TargetGraphic')
  return i1318
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1320 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1321 = data
  i1320.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1321[0], i1320.m_PersistentCalls)
  return i1320
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1322 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1323 = data
  var i1325 = i1323[0]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.add(request.d('UnityEngine.Events.PersistentCall', i1325[i + 0]));
  }
  i1322.m_Calls = i1324
  return i1322
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1328 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1329 = data
  request.r(i1329[0], i1329[1], 0, i1328, 'm_Target')
  i1328.m_TargetAssemblyTypeName = i1329[2]
  i1328.m_MethodName = i1329[3]
  i1328.m_Mode = i1329[4]
  i1328.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1329[5], i1328.m_Arguments)
  i1328.m_CallState = i1329[6]
  return i1328
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1330 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1331 = data
  i1330.m_Mode = i1331[0]
  i1330.m_WrapAround = !!i1331[1]
  request.r(i1331[2], i1331[3], 0, i1330, 'm_SelectOnUp')
  request.r(i1331[4], i1331[5], 0, i1330, 'm_SelectOnDown')
  request.r(i1331[6], i1331[7], 0, i1330, 'm_SelectOnLeft')
  request.r(i1331[8], i1331[9], 0, i1330, 'm_SelectOnRight')
  return i1330
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1332 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1333 = data
  i1332.m_NormalColor = new pc.Color(i1333[0], i1333[1], i1333[2], i1333[3])
  i1332.m_HighlightedColor = new pc.Color(i1333[4], i1333[5], i1333[6], i1333[7])
  i1332.m_PressedColor = new pc.Color(i1333[8], i1333[9], i1333[10], i1333[11])
  i1332.m_SelectedColor = new pc.Color(i1333[12], i1333[13], i1333[14], i1333[15])
  i1332.m_DisabledColor = new pc.Color(i1333[16], i1333[17], i1333[18], i1333[19])
  i1332.m_ColorMultiplier = i1333[20]
  i1332.m_FadeDuration = i1333[21]
  return i1332
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1334 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1335 = data
  request.r(i1335[0], i1335[1], 0, i1334, 'm_HighlightedSprite')
  request.r(i1335[2], i1335[3], 0, i1334, 'm_PressedSprite')
  request.r(i1335[4], i1335[5], 0, i1334, 'm_SelectedSprite')
  request.r(i1335[6], i1335[7], 0, i1334, 'm_DisabledSprite')
  return i1334
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1336 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1337 = data
  i1336.m_NormalTrigger = i1337[0]
  i1336.m_HighlightedTrigger = i1337[1]
  i1336.m_PressedTrigger = i1337[2]
  i1336.m_SelectedTrigger = i1337[3]
  i1336.m_DisabledTrigger = i1337[4]
  return i1336
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1338 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1339 = data
  i1338.m_ShowMaskGraphic = !!i1339[0]
  return i1338
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1340 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1341 = data
  request.r(i1341[0], i1341[1], 0, i1340, 'skeletonDataAsset')
  request.r(i1341[2], i1341[3], 0, i1340, 'additiveMaterial')
  request.r(i1341[4], i1341[5], 0, i1340, 'multiplyMaterial')
  request.r(i1341[6], i1341[7], 0, i1340, 'screenMaterial')
  i1340.forceAdditiveMaterial = !!i1341[8]
  i1340.initialSkinName = i1341[9]
  i1340.initialFlipX = !!i1341[10]
  i1340.initialFlipY = !!i1341[11]
  i1340.startingAnimation = i1341[12]
  i1340.startingLoop = !!i1341[13]
  i1340.timeScale = i1341[14]
  i1340.freeze = !!i1341[15]
  i1340.layoutScaleMode = i1341[16]
  i1340.updateWhenInvisible = i1341[17]
  i1340.allowMultipleCanvasRenderers = !!i1341[18]
  var i1343 = i1341[19]
  var i1342 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1343.length; i += 2) {
  request.r(i1343[i + 0], i1343[i + 1], 1, i1342, '')
  }
  i1340.canvasRenderers = i1342
  i1340.enableSeparatorSlots = !!i1341[20]
  i1340.updateSeparatorPartLocation = !!i1341[21]
  i1340.updateSeparatorPartScale = !!i1341[22]
  i1340.disableMeshAssignmentOnOverride = !!i1341[23]
  i1340.m_SkeletonColor = new pc.Color(i1341[24], i1341[25], i1341[26], i1341[27])
  i1340.referenceSize = new pc.Vec2( i1341[28], i1341[29] )
  i1340.pivotOffset = new pc.Vec2( i1341[30], i1341[31] )
  i1340.referenceScale = i1341[32]
  i1340.layoutScale = i1341[33]
  i1340.rectTransformSize = new pc.Vec2( i1341[34], i1341[35] )
  i1340.editReferenceRect = !!i1341[36]
  var i1345 = i1341[37]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( i1345[i + 0] );
  }
  i1340.separatorSlotNames = i1344
  var i1347 = i1341[38]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1347.length; i += 2) {
  request.r(i1347[i + 0], i1347[i + 1], 1, i1346, '')
  }
  i1340.separatorParts = i1346
  i1340.physicsPositionInheritanceFactor = new pc.Vec2( i1341[39], i1341[40] )
  i1340.physicsRotationInheritanceFactor = i1341[41]
  request.r(i1341[42], i1341[43], 0, i1340, 'physicsMovementRelativeTo')
  i1340.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1341[44], i1340.meshGenerator)
  i1340.updateTiming = i1341[45]
  i1340.unscaledTime = !!i1341[46]
  request.r(i1341[47], i1341[48], 0, i1340, 'm_Material')
  i1340.m_Maskable = !!i1341[49]
  i1340.m_Color = new pc.Color(i1341[50], i1341[51], i1341[52], i1341[53])
  i1340.m_RaycastTarget = !!i1341[54]
  i1340.m_RaycastPadding = new pc.Vec4( i1341[55], i1341[56], i1341[57], i1341[58] )
  return i1340
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1354 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1355 = data
  i1354.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1355[0], i1354.settings)
  return i1354
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1356 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1357 = data
  i1356.useClipping = !!i1357[0]
  i1356.zSpacing = i1357[1]
  i1356.tintBlack = !!i1357[2]
  i1356.canvasGroupCompatible = !!i1357[3]
  i1356.pmaVertexColors = !!i1357[4]
  i1356.addNormals = !!i1357[5]
  i1356.calculateTangents = !!i1357[6]
  i1356.immutableTriangles = !!i1357[7]
  return i1356
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1358 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1359 = data
  i1358.targetIsSelf = !!i1359[0]
  request.r(i1359[1], i1359[2], 0, i1358, 'targetGO')
  i1358.tweenTargetIsTargetGO = !!i1359[3]
  i1358.delay = i1359[4]
  i1358.duration = i1359[5]
  i1358.easeType = i1359[6]
  i1358.easeCurve = new pc.AnimationCurve( { keys_flow: i1359[7] } )
  i1358.loopType = i1359[8]
  i1358.loops = i1359[9]
  i1358.id = i1359[10]
  i1358.isRelative = !!i1359[11]
  i1358.isFrom = !!i1359[12]
  i1358.isIndependentUpdate = !!i1359[13]
  i1358.autoKill = !!i1359[14]
  i1358.autoGenerate = !!i1359[15]
  i1358.isActive = !!i1359[16]
  i1358.isValid = !!i1359[17]
  request.r(i1359[18], i1359[19], 0, i1358, 'target')
  i1358.animationType = i1359[20]
  i1358.targetType = i1359[21]
  i1358.forcedTargetType = i1359[22]
  i1358.autoPlay = !!i1359[23]
  i1358.useTargetAsV3 = !!i1359[24]
  i1358.endValueFloat = i1359[25]
  i1358.endValueV3 = new pc.Vec3( i1359[26], i1359[27], i1359[28] )
  i1358.endValueV2 = new pc.Vec2( i1359[29], i1359[30] )
  i1358.endValueColor = new pc.Color(i1359[31], i1359[32], i1359[33], i1359[34])
  i1358.endValueString = i1359[35]
  i1358.endValueRect = UnityEngine.Rect.MinMaxRect(i1359[36], i1359[37], i1359[38], i1359[39])
  request.r(i1359[40], i1359[41], 0, i1358, 'endValueTransform')
  i1358.optionalBool0 = !!i1359[42]
  i1358.optionalBool1 = !!i1359[43]
  i1358.optionalFloat0 = i1359[44]
  i1358.optionalInt0 = i1359[45]
  i1358.optionalRotationMode = i1359[46]
  i1358.optionalScrambleMode = i1359[47]
  i1358.optionalShakeRandomnessMode = i1359[48]
  i1358.optionalString = i1359[49]
  i1358.updateType = i1359[50]
  i1358.isSpeedBased = !!i1359[51]
  i1358.hasOnStart = !!i1359[52]
  i1358.hasOnPlay = !!i1359[53]
  i1358.hasOnUpdate = !!i1359[54]
  i1358.hasOnStepComplete = !!i1359[55]
  i1358.hasOnComplete = !!i1359[56]
  i1358.hasOnTweenCreated = !!i1359[57]
  i1358.hasOnRewind = !!i1359[58]
  i1358.onStart = request.d('UnityEngine.Events.UnityEvent', i1359[59], i1358.onStart)
  i1358.onPlay = request.d('UnityEngine.Events.UnityEvent', i1359[60], i1358.onPlay)
  i1358.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1359[61], i1358.onUpdate)
  i1358.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1359[62], i1358.onStepComplete)
  i1358.onComplete = request.d('UnityEngine.Events.UnityEvent', i1359[63], i1358.onComplete)
  i1358.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1359[64], i1358.onTweenCreated)
  i1358.onRewind = request.d('UnityEngine.Events.UnityEvent', i1359[65], i1358.onRewind)
  return i1358
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1360 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1361 = data
  i1360.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1361[0], i1360.m_PersistentCalls)
  return i1360
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i1362 = root || request.c( 'AnimationController' )
  var i1363 = data
  request.r(i1363[0], i1363[1], 0, i1362, 'skeleton')
  var i1365 = i1363[2]
  var i1364 = new (System.Collections.Generic.List$1(Bridge.ns('ItemAction')))
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.add(request.d('ItemAction', i1365[i + 0]));
  }
  i1362.actions = i1364
  var i1367 = i1363[3]
  var i1366 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.add(request.d('Anim', i1367[i + 0]));
  }
  i1362.winAnim = i1366
  var i1369 = i1363[4]
  var i1368 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.add(request.d('Anim', i1369[i + 0]));
  }
  i1362.failAnim = i1368
  return i1362
}

Deserializers["ItemAction"] = function (request, data, root) {
  var i1372 = root || request.c( 'ItemAction' )
  var i1373 = data
  request.r(i1373[0], i1373[1], 0, i1372, 'ActionItem')
  request.r(i1373[2], i1373[3], 0, i1372, 'ActionArea')
  var i1375 = i1373[4]
  var i1374 = new (System.Collections.Generic.List$1(Bridge.ns('ActiveObject')))
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.add(request.d('ActiveObject', i1375[i + 0]));
  }
  i1372.activeObj = i1374
  i1372.TimeDelayAnim = i1373[5]
  var i1377 = i1373[6]
  var i1376 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.add(request.d('Anim', i1377[i + 0]));
  }
  i1372.Anim = i1376
  return i1372
}

Deserializers["ActiveObject"] = function (request, data, root) {
  var i1380 = root || request.c( 'ActiveObject' )
  var i1381 = data
  request.r(i1381[0], i1381[1], 0, i1380, 'Obj')
  i1380.TimeDelayActive = i1381[2]
  return i1380
}

Deserializers["Anim"] = function (request, data, root) {
  var i1384 = root || request.c( 'Anim' )
  var i1385 = data
  i1384.Key = i1385[0]
  var i1387 = i1385[1]
  var i1386 = new (System.Collections.Generic.List$1(Bridge.ns('Sound')))
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.add(request.d('Sound', i1387[i + 0]));
  }
  i1384.Sounds = i1386
  i1384.Loop = !!i1385[2]
  i1384.Next = !!i1385[3]
  i1384.NextTime = i1385[4]
  return i1384
}

Deserializers["Sound"] = function (request, data, root) {
  var i1390 = root || request.c( 'Sound' )
  var i1391 = data
  i1390.TimeDelaySound = i1391[0]
  request.r(i1391[1], i1391[2], 0, i1390, 'Clip')
  return i1390
}

Deserializers["ActiceOtherOnActive"] = function (request, data, root) {
  var i1392 = root || request.c( 'ActiceOtherOnActive' )
  var i1393 = data
  request.r(i1393[0], i1393[1], 0, i1392, 'activeObject')
  i1392.delay = i1393[2]
  return i1392
}

Deserializers["DestroyOtherOnActive"] = function (request, data, root) {
  var i1394 = root || request.c( 'DestroyOtherOnActive' )
  var i1395 = data
  request.r(i1395[0], i1395[1], 0, i1394, 'destroyObject')
  i1394.delay = i1395[2]
  return i1394
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1396 = root || request.c( 'UnityEngine.UI.Button' )
  var i1397 = data
  i1396.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1397[0], i1396.m_OnClick)
  i1396.m_Navigation = request.d('UnityEngine.UI.Navigation', i1397[1], i1396.m_Navigation)
  i1396.m_Transition = i1397[2]
  i1396.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1397[3], i1396.m_Colors)
  i1396.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1397[4], i1396.m_SpriteState)
  i1396.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1397[5], i1396.m_AnimationTriggers)
  i1396.m_Interactable = !!i1397[6]
  request.r(i1397[7], i1397[8], 0, i1396, 'm_TargetGraphic')
  return i1396
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1398 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1399 = data
  i1398.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1399[0], i1398.m_PersistentCalls)
  return i1398
}

Deserializers["TutController"] = function (request, data, root) {
  var i1400 = root || request.c( 'TutController' )
  var i1401 = data
  request.r(i1401[0], i1401[1], 0, i1400, 'icon')
  var i1403 = i1401[2]
  var i1402 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1403.length; i += 2) {
  request.r(i1403[i + 0], i1403[i + 1], 1, i1402, '')
  }
  i1400.tutObjects = i1402
  request.r(i1401[3], i1401[4], 0, i1400, 'tutObject')
  i1400.toPos = new pc.Vec3( i1401[5], i1401[6], i1401[7] )
  i1400.timeMove = i1401[8]
  i1400.timeDelay = i1401[9]
  return i1400
}

Deserializers["LockController"] = function (request, data, root) {
  var i1406 = root || request.c( 'LockController' )
  var i1407 = data
  i1406.password = i1407[0]
  i1406.userInput = i1407[1]
  i1406.delayHide = i1407[2]
  request.r(i1407[3], i1407[4], 0, i1406, 'activeObject')
  request.r(i1407[5], i1407[6], 0, i1406, 'activeArea')
  request.r(i1407[7], i1407[8], 0, i1406, 'showButton')
  request.r(i1407[9], i1407[10], 0, i1406, 'hideButton')
  request.r(i1407[11], i1407[12], 0, i1406, 'inputScene')
  request.r(i1407[13], i1407[14], 0, i1406, 'textScene')
  request.r(i1407[15], i1407[16], 0, i1406, 'correctScene')
  request.r(i1407[17], i1407[18], 0, i1406, 'notCorrectScene')
  var i1409 = i1407[19]
  var i1408 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Text')))
  for(var i = 0; i < i1409.length; i += 2) {
  request.r(i1409[i + 0], i1409[i + 1], 1, i1408, '')
  }
  i1406.charText = i1408
  var i1411 = i1407[20]
  var i1410 = new (System.Collections.Generic.List$1(Bridge.ns('InputButton')))
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.add(request.d('InputButton', i1411[i + 0]));
  }
  i1406.inputButtons = i1410
  request.r(i1407[21], i1407[22], 0, i1406, 'lockSkeleton')
  var i1413 = i1407[23]
  var i1412 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.add(request.d('Anim', i1413[i + 0]));
  }
  i1406.showAnim = i1412
  var i1415 = i1407[24]
  var i1414 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.add(request.d('Anim', i1415[i + 0]));
  }
  i1406.hideAnim = i1414
  return i1406
}

Deserializers["InputButton"] = function (request, data, root) {
  var i1420 = root || request.c( 'InputButton' )
  var i1421 = data
  request.r(i1421[0], i1421[1], 0, i1420, 'Button')
  i1420.Number = i1421[2]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1423 = data
  request.r(i1423[0], i1423[1], 0, i1422, 'clip')
  request.r(i1423[2], i1423[3], 0, i1422, 'outputAudioMixerGroup')
  i1422.playOnAwake = !!i1423[4]
  i1422.loop = !!i1423[5]
  i1422.time = i1423[6]
  i1422.volume = i1423[7]
  i1422.pitch = i1423[8]
  i1422.enabled = !!i1423[9]
  return i1422
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1424 = root || request.c( 'LayoutController' )
  var i1425 = data
  request.r(i1425[0], i1425[1], 0, i1424, 'CTA')
  i1424.hide = !!i1425[2]
  return i1424
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1426 = root || request.c( 'AudioController' )
  var i1427 = data
  request.r(i1427[0], i1427[1], 0, i1426, 'BGM')
  request.r(i1427[2], i1427[3], 0, i1426, 'musicSource')
  request.r(i1427[4], i1427[5], 0, i1426, 'SFXPool')
  return i1426
}

Deserializers["InteractController"] = function (request, data, root) {
  var i1428 = root || request.c( 'InteractController' )
  var i1429 = data
  request.r(i1429[0], i1429[1], 0, i1428, 'canvas')
  i1428.maxPos = new pc.Vec2( i1429[2], i1429[3] )
  i1428.minPos = new pc.Vec2( i1429[4], i1429[5] )
  var i1431 = i1429[6]
  var i1430 = new (System.Collections.Generic.List$1(Bridge.ns('ItemDrag')))
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.add(request.d('ItemDrag', i1431[i + 0]));
  }
  i1428.itemDrags = i1430
  i1428.currentTarget = request.d('ItemDrag', i1429[7], i1428.currentTarget)
  request.r(i1429[8], i1429[9], 0, i1428, 'tut2')
  request.r(i1429[10], i1429[11], 0, i1428, 'pickupSound')
  i1428.lockPlay = !!i1429[12]
  return i1428
}

Deserializers["ItemDrag"] = function (request, data, root) {
  var i1434 = root || request.c( 'ItemDrag' )
  var i1435 = data
  request.r(i1435[0], i1435[1], 0, i1434, 'DragArea')
  request.r(i1435[2], i1435[3], 0, i1434, 'Item')
  request.r(i1435[4], i1435[5], 0, i1434, 'Icon')
  return i1434
}

Deserializers["GameController"] = function (request, data, root) {
  var i1436 = root || request.c( 'GameController' )
  var i1437 = data
  i1436.OnComplete = request.d('System.Action', i1437[0], i1436.OnComplete)
  i1436.OnWin = request.d('System.Action', i1437[1], i1436.OnWin)
  i1436.OnFail = request.d('System.Action', i1437[2], i1436.OnFail)
  i1436.CompleteStep = request.d('System.Action', i1437[3], i1436.CompleteStep)
  var i1439 = i1437[4]
  var i1438 = new (System.Collections.Generic.List$1(Bridge.ns('SkeletonMap')))
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.add(request.d('SkeletonMap', i1439[i + 0]));
  }
  i1436.skeletons = i1438
  var i1441 = i1437[5]
  var i1440 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1441.length; i += 2) {
  request.r(i1441[i + 0], i1441[i + 1], 1, i1440, '')
  }
  i1436.itemStep = i1440
  request.r(i1437[6], i1437[7], 0, i1436, 'enemy1')
  request.r(i1437[8], i1437[9], 0, i1436, 'enemy2')
  i1436.complete = !!i1437[10]
  i1436.currentStep = i1437[11]
  i1436.maxStep = i1437[12]
  request.r(i1437[13], i1437[14], 0, i1436, 'currentStepText')
  request.r(i1437[15], i1437[16], 0, i1436, 'maxStepText')
  request.r(i1437[17], i1437[18], 0, i1436, 'slider')
  i1436.delayEnd = i1437[19]
  request.r(i1437[20], i1437[21], 0, i1436, 'winScene')
  request.r(i1437[22], i1437[23], 0, i1436, 'failcene')
  i1436.subTime = i1437[24]
  i1436.startSub = i1437[25]
  i1436.winSub = i1437[26]
  i1436.failSub = i1437[27]
  var i1443 = i1437[28]
  var i1442 = new (System.Collections.Generic.List$1(Bridge.ns('Sub')))
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.add(request.d('Sub', i1443[i + 0]));
  }
  i1436.subs = i1442
  request.r(i1437[29], i1437[30], 0, i1436, 'sub')
  request.r(i1437[31], i1437[32], 0, i1436, 'subText')
  return i1436
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1444 = root || request.c( 'System.Action' )
  var i1445 = data
  return i1444
}

Deserializers["SkeletonMap"] = function (request, data, root) {
  var i1448 = root || request.c( 'SkeletonMap' )
  var i1449 = data
  request.r(i1449[0], i1449[1], 0, i1448, 'Skeleton')
  var i1451 = i1449[2]
  var i1450 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1451.length; i += 2) {
  request.r(i1451[i + 0], i1451[i + 1], 1, i1450, '')
  }
  i1448.Areas = i1450
  return i1448
}

Deserializers["Sub"] = function (request, data, root) {
  var i1454 = root || request.c( 'Sub' )
  var i1455 = data
  request.r(i1455[0], i1455[1], 0, i1454, 'Item')
  i1454.SubText = i1455[2]
  return i1454
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1456 = root || request.c( 'LunaController' )
  var i1457 = data
  i1456.TimePlay = i1457[0]
  i1456.CountPlay = i1457[1]
  i1456.BGColor = new pc.Color(i1457[2], i1457[3], i1457[4], i1457[5])
  i1456.GameBGColor = new pc.Color(i1457[6], i1457[7], i1457[8], i1457[9])
  i1456.LevelTextColor = new pc.Color(i1457[10], i1457[11], i1457[12], i1457[13])
  i1456.TitleTextColor = new pc.Color(i1457[14], i1457[15], i1457[16], i1457[17])
  i1456.SubBGColor = new pc.Color(i1457[18], i1457[19], i1457[20], i1457[21])
  request.r(i1457[22], i1457[23], 0, i1456, 'time')
  request.r(i1457[24], i1457[25], 0, i1456, 'BGImage')
  request.r(i1457[26], i1457[27], 0, i1456, 'GameBGImage')
  request.r(i1457[28], i1457[29], 0, i1456, 'levelText')
  request.r(i1457[30], i1457[31], 0, i1456, 'titleText')
  request.r(i1457[32], i1457[33], 0, i1456, 'subBG')
  request.r(i1457[34], i1457[35], 0, i1456, 'endCard')
  var i1459 = i1457[36]
  var i1458 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1459.length; i += 2) {
  request.r(i1459[i + 0], i1459[i + 1], 1, i1458, '')
  }
  i1456.CTA = i1458
  i1456.count = i1457[37]
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1463 = data
  i1462.ambientIntensity = i1463[0]
  i1462.reflectionIntensity = i1463[1]
  i1462.ambientMode = i1463[2]
  i1462.ambientLight = new pc.Color(i1463[3], i1463[4], i1463[5], i1463[6])
  i1462.ambientSkyColor = new pc.Color(i1463[7], i1463[8], i1463[9], i1463[10])
  i1462.ambientGroundColor = new pc.Color(i1463[11], i1463[12], i1463[13], i1463[14])
  i1462.ambientEquatorColor = new pc.Color(i1463[15], i1463[16], i1463[17], i1463[18])
  i1462.fogColor = new pc.Color(i1463[19], i1463[20], i1463[21], i1463[22])
  i1462.fogEndDistance = i1463[23]
  i1462.fogStartDistance = i1463[24]
  i1462.fogDensity = i1463[25]
  i1462.fog = !!i1463[26]
  request.r(i1463[27], i1463[28], 0, i1462, 'skybox')
  i1462.fogMode = i1463[29]
  var i1465 = i1463[30]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1465[i + 0]) );
  }
  i1462.lightmaps = i1464
  i1462.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1463[31], i1462.lightProbes)
  i1462.lightmapsMode = i1463[32]
  i1462.mixedBakeMode = i1463[33]
  i1462.environmentLightingMode = i1463[34]
  i1462.ambientProbe = new pc.SphericalHarmonicsL2(i1463[35])
  request.r(i1463[36], i1463[37], 0, i1462, 'customReflection')
  request.r(i1463[38], i1463[39], 0, i1462, 'defaultReflection')
  i1462.defaultReflectionMode = i1463[40]
  i1462.defaultReflectionResolution = i1463[41]
  i1462.sunLightObjectId = i1463[42]
  i1462.pixelLightCount = i1463[43]
  i1462.defaultReflectionHDR = !!i1463[44]
  i1462.hasLightDataAsset = !!i1463[45]
  i1462.hasManualGenerate = !!i1463[46]
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1469 = data
  request.r(i1469[0], i1469[1], 0, i1468, 'lightmapColor')
  request.r(i1469[2], i1469[3], 0, i1468, 'lightmapDirection')
  request.r(i1469[4], i1469[5], 0, i1468, 'shadowMask')
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1470 = root || new UnityEngine.LightProbes()
  var i1471 = data
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1479 = data
  var i1481 = i1479[0]
  var i1480 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1481[i + 0]));
  }
  i1478.ShaderCompilationErrors = i1480
  i1478.name = i1479[1]
  i1478.guid = i1479[2]
  var i1483 = i1479[3]
  var i1482 = []
  for(var i = 0; i < i1483.length; i += 1) {
    i1482.push( i1483[i + 0] );
  }
  i1478.shaderDefinedKeywords = i1482
  var i1485 = i1479[4]
  var i1484 = []
  for(var i = 0; i < i1485.length; i += 1) {
    i1484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1485[i + 0]) );
  }
  i1478.passes = i1484
  var i1487 = i1479[5]
  var i1486 = []
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1487[i + 0]) );
  }
  i1478.usePasses = i1486
  var i1489 = i1479[6]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 1) {
    i1488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1489[i + 0]) );
  }
  i1478.defaultParameterValues = i1488
  request.r(i1479[7], i1479[8], 0, i1478, 'unityFallbackShader')
  i1478.readDepth = !!i1479[9]
  i1478.hasDepthOnlyPass = !!i1479[10]
  i1478.isCreatedByShaderGraph = !!i1479[11]
  i1478.disableBatching = !!i1479[12]
  i1478.compiled = !!i1479[13]
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1493 = data
  i1492.shaderName = i1493[0]
  i1492.errorMessage = i1493[1]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1496 = root || new pc.UnityShaderPass()
  var i1497 = data
  i1496.id = i1497[0]
  i1496.subShaderIndex = i1497[1]
  i1496.name = i1497[2]
  i1496.passType = i1497[3]
  i1496.grabPassTextureName = i1497[4]
  i1496.usePass = !!i1497[5]
  i1496.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1497[6], i1496.zTest)
  i1496.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1497[7], i1496.zWrite)
  i1496.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1497[8], i1496.culling)
  i1496.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1497[9], i1496.blending)
  i1496.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1497[10], i1496.alphaBlending)
  i1496.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1497[11], i1496.colorWriteMask)
  i1496.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1497[12], i1496.offsetUnits)
  i1496.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1497[13], i1496.offsetFactor)
  i1496.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1497[14], i1496.stencilRef)
  i1496.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1497[15], i1496.stencilReadMask)
  i1496.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1497[16], i1496.stencilWriteMask)
  i1496.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1497[17], i1496.stencilOp)
  i1496.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1497[18], i1496.stencilOpFront)
  i1496.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1497[19], i1496.stencilOpBack)
  var i1499 = i1497[20]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1499[i + 0]) );
  }
  i1496.tags = i1498
  var i1501 = i1497[21]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.push( i1501[i + 0] );
  }
  i1496.passDefinedKeywords = i1500
  var i1503 = i1497[22]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1503[i + 0]) );
  }
  i1496.passDefinedKeywordGroups = i1502
  var i1505 = i1497[23]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1505[i + 0]) );
  }
  i1496.variants = i1504
  var i1507 = i1497[24]
  var i1506 = []
  for(var i = 0; i < i1507.length; i += 1) {
    i1506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1507[i + 0]) );
  }
  i1496.excludedVariants = i1506
  i1496.hasDepthReader = !!i1497[25]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1509 = data
  i1508.val = i1509[0]
  i1508.name = i1509[1]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1511 = data
  i1510.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1511[0], i1510.src)
  i1510.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1511[1], i1510.dst)
  i1510.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1511[2], i1510.op)
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1513 = data
  i1512.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1513[0], i1512.pass)
  i1512.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1513[1], i1512.fail)
  i1512.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1513[2], i1512.zFail)
  i1512.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1513[3], i1512.comp)
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1517 = data
  i1516.name = i1517[0]
  i1516.value = i1517[1]
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1521 = data
  var i1523 = i1521[0]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( i1523[i + 0] );
  }
  i1520.keywords = i1522
  i1520.hasDiscard = !!i1521[1]
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1527 = data
  i1526.passId = i1527[0]
  i1526.subShaderIndex = i1527[1]
  var i1529 = i1527[2]
  var i1528 = []
  for(var i = 0; i < i1529.length; i += 1) {
    i1528.push( i1529[i + 0] );
  }
  i1526.keywords = i1528
  i1526.vertexProgram = i1527[3]
  i1526.fragmentProgram = i1527[4]
  i1526.exportedForWebGl2 = !!i1527[5]
  i1526.readDepth = !!i1527[6]
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1533 = data
  request.r(i1533[0], i1533[1], 0, i1532, 'shader')
  i1532.pass = i1533[2]
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1537 = data
  i1536.name = i1537[0]
  i1536.type = i1537[1]
  i1536.value = new pc.Vec4( i1537[2], i1537[3], i1537[4], i1537[5] )
  i1536.textureValue = i1537[6]
  i1536.shaderPropertyFlag = i1537[7]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1539 = data
  i1538.name = i1539[0]
  request.r(i1539[1], i1539[2], 0, i1538, 'texture')
  i1538.aabb = i1539[3]
  i1538.vertices = i1539[4]
  i1538.triangles = i1539[5]
  i1538.textureRect = UnityEngine.Rect.MinMaxRect(i1539[6], i1539[7], i1539[8], i1539[9])
  i1538.packedRect = UnityEngine.Rect.MinMaxRect(i1539[10], i1539[11], i1539[12], i1539[13])
  i1538.border = new pc.Vec4( i1539[14], i1539[15], i1539[16], i1539[17] )
  i1538.transparency = i1539[18]
  i1538.bounds = i1539[19]
  i1538.pixelsPerUnit = i1539[20]
  i1538.textureWidth = i1539[21]
  i1538.textureHeight = i1539[22]
  i1538.nativeSize = new pc.Vec2( i1539[23], i1539[24] )
  i1538.pivot = new pc.Vec2( i1539[25], i1539[26] )
  i1538.textureRectOffset = new pc.Vec2( i1539[27], i1539[28] )
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1541 = data
  i1540.name = i1541[0]
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1543 = data
  i1542.name = i1543[0]
  i1542.ascent = i1543[1]
  i1542.originalLineHeight = i1543[2]
  i1542.fontSize = i1543[3]
  var i1545 = i1543[4]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1545[i + 0]) );
  }
  i1542.characterInfo = i1544
  request.r(i1543[5], i1543[6], 0, i1542, 'texture')
  i1542.originalFontSize = i1543[7]
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1549 = data
  i1548.index = i1549[0]
  i1548.advance = i1549[1]
  i1548.bearing = i1549[2]
  i1548.glyphWidth = i1549[3]
  i1548.glyphHeight = i1549[4]
  i1548.minX = i1549[5]
  i1548.maxX = i1549[6]
  i1548.minY = i1549[7]
  i1548.maxY = i1549[8]
  i1548.uvBottomLeftX = i1549[9]
  i1548.uvBottomLeftY = i1549[10]
  i1548.uvBottomRightX = i1549[11]
  i1548.uvBottomRightY = i1549[12]
  i1548.uvTopLeftX = i1549[13]
  i1548.uvTopLeftY = i1549[14]
  i1548.uvTopRightX = i1549[15]
  i1548.uvTopRightY = i1549[16]
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1551 = data
  i1550.name = i1551[0]
  i1550.bytes64 = i1551[1]
  i1550.data = i1551[2]
  return i1550
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1552 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1553 = data
  var i1555 = i1553[0]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 2) {
  request.r(i1555[i + 0], i1555[i + 1], 2, i1554, '')
  }
  i1552.atlasAssets = i1554
  i1552.scale = i1553[1]
  request.r(i1553[2], i1553[3], 0, i1552, 'skeletonJSON')
  i1552.isUpgradingBlendModeMaterials = !!i1553[4]
  i1552.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1553[5], i1552.blendModeMaterials)
  var i1557 = i1553[6]
  var i1556 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1557.length; i += 2) {
  request.r(i1557[i + 0], i1557[i + 1], 1, i1556, '')
  }
  i1552.skeletonDataModifiers = i1556
  var i1559 = i1553[7]
  var i1558 = []
  for(var i = 0; i < i1559.length; i += 1) {
    i1558.push( i1559[i + 0] );
  }
  i1552.fromAnimation = i1558
  var i1561 = i1553[8]
  var i1560 = []
  for(var i = 0; i < i1561.length; i += 1) {
    i1560.push( i1561[i + 0] );
  }
  i1552.toAnimation = i1560
  i1552.duration = i1553[9]
  i1552.defaultMix = i1553[10]
  request.r(i1553[11], i1553[12], 0, i1552, 'controller')
  return i1552
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1564 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1565 = data
  i1564.applyAdditiveMaterial = !!i1565[0]
  var i1567 = i1565[1]
  var i1566 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1567.length; i += 1) {
    i1566.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1567[i + 0]));
  }
  i1564.additiveMaterials = i1566
  var i1569 = i1565[2]
  var i1568 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1569.length; i += 1) {
    i1568.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1569[i + 0]));
  }
  i1564.multiplyMaterials = i1568
  var i1571 = i1565[3]
  var i1570 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1571.length; i += 1) {
    i1570.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1571[i + 0]));
  }
  i1564.screenMaterials = i1570
  i1564.requiresBlendModeMaterials = !!i1565[4]
  return i1564
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1574 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1575 = data
  i1574.pageName = i1575[0]
  request.r(i1575[1], i1575[2], 0, i1574, 'material')
  return i1574
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1578 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1579 = data
  request.r(i1579[0], i1579[1], 0, i1578, 'atlasFile')
  var i1581 = i1579[2]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 2) {
  request.r(i1581[i + 0], i1581[i + 1], 2, i1580, '')
  }
  i1578.materials = i1580
  i1578.textureLoadingMode = i1579[3]
  request.r(i1579[4], i1579[5], 0, i1578, 'onDemandTextureLoader')
  return i1578
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1584 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1585 = data
  i1584.useSafeMode = !!i1585[0]
  i1584.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1585[1], i1584.safeModeOptions)
  i1584.timeScale = i1585[2]
  i1584.unscaledTimeScale = i1585[3]
  i1584.useSmoothDeltaTime = !!i1585[4]
  i1584.maxSmoothUnscaledTime = i1585[5]
  i1584.rewindCallbackMode = i1585[6]
  i1584.showUnityEditorReport = !!i1585[7]
  i1584.logBehaviour = i1585[8]
  i1584.drawGizmos = !!i1585[9]
  i1584.defaultRecyclable = !!i1585[10]
  i1584.defaultAutoPlay = i1585[11]
  i1584.defaultUpdateType = i1585[12]
  i1584.defaultTimeScaleIndependent = !!i1585[13]
  i1584.defaultEaseType = i1585[14]
  i1584.defaultEaseOvershootOrAmplitude = i1585[15]
  i1584.defaultEasePeriod = i1585[16]
  i1584.defaultAutoKill = !!i1585[17]
  i1584.defaultLoopType = i1585[18]
  i1584.debugMode = !!i1585[19]
  i1584.debugStoreTargetId = !!i1585[20]
  i1584.showPreviewPanel = !!i1585[21]
  i1584.storeSettingsLocation = i1585[22]
  i1584.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1585[23], i1584.modules)
  i1584.createASMDEF = !!i1585[24]
  i1584.showPlayingTweens = !!i1585[25]
  i1584.showPausedTweens = !!i1585[26]
  return i1584
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1586 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1587 = data
  i1586.logBehaviour = i1587[0]
  i1586.nestedTweenFailureBehaviour = i1587[1]
  return i1586
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1588 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1589 = data
  i1588.showPanel = !!i1589[0]
  i1588.audioEnabled = !!i1589[1]
  i1588.physicsEnabled = !!i1589[2]
  i1588.physics2DEnabled = !!i1589[3]
  i1588.spriteEnabled = !!i1589[4]
  i1588.uiEnabled = !!i1589[5]
  i1588.textMeshProEnabled = !!i1589[6]
  i1588.tk2DEnabled = !!i1589[7]
  i1588.deAudioEnabled = !!i1589[8]
  i1588.deUnityExtendedEnabled = !!i1589[9]
  i1588.epoOutlineEnabled = !!i1589[10]
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1591 = data
  var i1593 = i1591[0]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1593[i + 0]) );
  }
  i1590.files = i1592
  i1590.componentToPrefabIds = i1591[1]
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1597 = data
  i1596.path = i1597[0]
  request.r(i1597[1], i1597[2], 0, i1596, 'unityObject')
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1599 = data
  var i1601 = i1599[0]
  var i1600 = []
  for(var i = 0; i < i1601.length; i += 1) {
    i1600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1601[i + 0]) );
  }
  i1598.scriptsExecutionOrder = i1600
  var i1603 = i1599[1]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 1) {
    i1602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1603[i + 0]) );
  }
  i1598.sortingLayers = i1602
  var i1605 = i1599[2]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1605[i + 0]) );
  }
  i1598.cullingLayers = i1604
  i1598.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1599[3], i1598.timeSettings)
  i1598.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1599[4], i1598.physicsSettings)
  i1598.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1599[5], i1598.physics2DSettings)
  i1598.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1599[6], i1598.qualitySettings)
  i1598.enableRealtimeShadows = !!i1599[7]
  i1598.enableAutoInstancing = !!i1599[8]
  i1598.enableStaticBatching = !!i1599[9]
  i1598.enableDynamicBatching = !!i1599[10]
  i1598.usePreservativeDynamicBatching = !!i1599[11]
  i1598.lightmapEncodingQuality = i1599[12]
  i1598.desiredColorSpace = i1599[13]
  var i1607 = i1599[14]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( i1607[i + 0] );
  }
  i1598.allTags = i1606
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1611 = data
  i1610.name = i1611[0]
  i1610.value = i1611[1]
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1615 = data
  i1614.id = i1615[0]
  i1614.name = i1615[1]
  i1614.value = i1615[2]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1619 = data
  i1618.id = i1619[0]
  i1618.name = i1619[1]
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1621 = data
  i1620.fixedDeltaTime = i1621[0]
  i1620.maximumDeltaTime = i1621[1]
  i1620.timeScale = i1621[2]
  i1620.maximumParticleTimestep = i1621[3]
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1623 = data
  i1622.gravity = new pc.Vec3( i1623[0], i1623[1], i1623[2] )
  i1622.defaultSolverIterations = i1623[3]
  i1622.bounceThreshold = i1623[4]
  i1622.autoSyncTransforms = !!i1623[5]
  i1622.autoSimulation = !!i1623[6]
  var i1625 = i1623[7]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1625[i + 0]) );
  }
  i1622.collisionMatrix = i1624
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1629 = data
  i1628.enabled = !!i1629[0]
  i1628.layerId = i1629[1]
  i1628.otherLayerId = i1629[2]
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1631 = data
  request.r(i1631[0], i1631[1], 0, i1630, 'material')
  i1630.gravity = new pc.Vec2( i1631[2], i1631[3] )
  i1630.positionIterations = i1631[4]
  i1630.velocityIterations = i1631[5]
  i1630.velocityThreshold = i1631[6]
  i1630.maxLinearCorrection = i1631[7]
  i1630.maxAngularCorrection = i1631[8]
  i1630.maxTranslationSpeed = i1631[9]
  i1630.maxRotationSpeed = i1631[10]
  i1630.baumgarteScale = i1631[11]
  i1630.baumgarteTOIScale = i1631[12]
  i1630.timeToSleep = i1631[13]
  i1630.linearSleepTolerance = i1631[14]
  i1630.angularSleepTolerance = i1631[15]
  i1630.defaultContactOffset = i1631[16]
  i1630.autoSimulation = !!i1631[17]
  i1630.queriesHitTriggers = !!i1631[18]
  i1630.queriesStartInColliders = !!i1631[19]
  i1630.callbacksOnDisable = !!i1631[20]
  i1630.reuseCollisionCallbacks = !!i1631[21]
  i1630.autoSyncTransforms = !!i1631[22]
  var i1633 = i1631[23]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 1) {
    i1632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1633[i + 0]) );
  }
  i1630.collisionMatrix = i1632
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1637 = data
  i1636.enabled = !!i1637[0]
  i1636.layerId = i1637[1]
  i1636.otherLayerId = i1637[2]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1639 = data
  var i1641 = i1639[0]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 1) {
    i1640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1641[i + 0]) );
  }
  i1638.qualityLevels = i1640
  var i1643 = i1639[1]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.push( i1643[i + 0] );
  }
  i1638.names = i1642
  i1638.shadows = i1639[2]
  i1638.anisotropicFiltering = i1639[3]
  i1638.antiAliasing = i1639[4]
  i1638.lodBias = i1639[5]
  i1638.shadowCascades = i1639[6]
  i1638.shadowDistance = i1639[7]
  i1638.shadowmaskMode = i1639[8]
  i1638.shadowProjection = i1639[9]
  i1638.shadowResolution = i1639[10]
  i1638.softParticles = !!i1639[11]
  i1638.softVegetation = !!i1639[12]
  i1638.activeColorSpace = i1639[13]
  i1638.desiredColorSpace = i1639[14]
  i1638.masterTextureLimit = i1639[15]
  i1638.maxQueuedFrames = i1639[16]
  i1638.particleRaycastBudget = i1639[17]
  i1638.pixelLightCount = i1639[18]
  i1638.realtimeReflectionProbes = !!i1639[19]
  i1638.shadowCascade2Split = i1639[20]
  i1638.shadowCascade4Split = new pc.Vec3( i1639[21], i1639[22], i1639[23] )
  i1638.streamingMipmapsActive = !!i1639[24]
  i1638.vSyncCount = i1639[25]
  i1638.asyncUploadBufferSize = i1639[26]
  i1638.asyncUploadTimeSlice = i1639[27]
  i1638.billboardsFaceCameraPosition = !!i1639[28]
  i1638.shadowNearPlaneOffset = i1639[29]
  i1638.streamingMipmapsMemoryBudget = i1639[30]
  i1638.maximumLODLevel = i1639[31]
  i1638.streamingMipmapsAddAllCameras = !!i1639[32]
  i1638.streamingMipmapsMaxLevelReduction = i1639[33]
  i1638.streamingMipmapsRenderersPerFrame = i1639[34]
  i1638.resolutionScalingFixedDPIFactor = i1639[35]
  i1638.streamingMipmapsMaxFileIORequests = i1639[36]
  i1638.currentQualityLevel = i1639[37]
  return i1638
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1646 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1647 = data
  request.r(i1647[0], i1647[1], 0, i1646, 'm_ObjectArgument')
  i1646.m_ObjectArgumentAssemblyTypeName = i1647[2]
  i1646.m_IntArgument = i1647[3]
  i1646.m_FloatArgument = i1647[4]
  i1646.m_StringArgument = i1647[5]
  i1646.m_BoolArgument = !!i1647[6]
  return i1646
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[2],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[59],"67":[59],"68":[59],"69":[59],"70":[59],"71":[59],"72":[2],"73":[74],"75":[76],"77":[76],"8":[7],"23":[18],"78":[79],"80":[7],"81":[11,7],"82":[74],"18":[11,7],"83":[84,74],"85":[74,86],"87":[74],"88":[52],"89":[59],"90":[79],"91":[92],"93":[94],"95":[2],"96":[97],"98":[7],"99":[11,7],"100":[74],"101":[11,7],"102":[7],"103":[7],"104":[74,7],"105":[7,11],"106":[107],"108":[107],"109":[107],"110":[7],"111":[7],"10":[8],"12":[11,7],"112":[7],"9":[8],"113":[7],"114":[7],"115":[7],"116":[7],"117":[7],"118":[7],"119":[7],"17":[7],"120":[7],"121":[11,7],"122":[7],"123":[7],"124":[7],"16":[7],"13":[11,7],"125":[7],"126":[5],"127":[5],"6":[5],"128":[5],"129":[2],"130":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.Slider","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","DG.Tweening.DOTweenAnimation","AnimationController","UnityEngine.GameObject","UnityEngine.AudioClip","ActiceOtherOnActive","DestroyOtherOnActive","UnityEngine.UI.Button","TutController","LockController","UnityEngine.AudioSource","LayoutController","AudioController","UnityEngine.Transform","InteractController","GameController","LunaController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "08/26/2026 04:03:33";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BM_V23_NgocBTU_TamNTM";

Deserializers.lunaAppID = "34530";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1935";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4829";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BMTP_Luna";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "2acd3f50-0145-44df-96b1-6b54456a84b5";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

