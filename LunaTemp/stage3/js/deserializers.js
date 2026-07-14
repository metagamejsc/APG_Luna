var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6242 = root || request.c( 'UnityEngine.JointSpring' )
  var i6243 = data
  i6242.spring = i6243[0]
  i6242.damper = i6243[1]
  i6242.targetPosition = i6243[2]
  return i6242
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6244 = root || request.c( 'UnityEngine.JointMotor' )
  var i6245 = data
  i6244.m_TargetVelocity = i6245[0]
  i6244.m_Force = i6245[1]
  i6244.m_FreeSpin = i6245[2]
  return i6244
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6246 = root || request.c( 'UnityEngine.JointLimits' )
  var i6247 = data
  i6246.m_Min = i6247[0]
  i6246.m_Max = i6247[1]
  i6246.m_Bounciness = i6247[2]
  i6246.m_BounceMinVelocity = i6247[3]
  i6246.m_ContactDistance = i6247[4]
  i6246.minBounce = i6247[5]
  i6246.maxBounce = i6247[6]
  return i6246
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6248 = root || request.c( 'UnityEngine.JointDrive' )
  var i6249 = data
  i6248.m_PositionSpring = i6249[0]
  i6248.m_PositionDamper = i6249[1]
  i6248.m_MaximumForce = i6249[2]
  i6248.m_UseAcceleration = i6249[3]
  return i6248
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6250 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6251 = data
  i6250.m_Spring = i6251[0]
  i6250.m_Damper = i6251[1]
  return i6250
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6252 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6253 = data
  i6252.m_Limit = i6253[0]
  i6252.m_Bounciness = i6253[1]
  i6252.m_ContactDistance = i6253[2]
  return i6252
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6254 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6255 = data
  i6254.m_ExtremumSlip = i6255[0]
  i6254.m_ExtremumValue = i6255[1]
  i6254.m_AsymptoteSlip = i6255[2]
  i6254.m_AsymptoteValue = i6255[3]
  i6254.m_Stiffness = i6255[4]
  return i6254
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6256 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6257 = data
  i6256.m_LowerAngle = i6257[0]
  i6256.m_UpperAngle = i6257[1]
  return i6256
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6258 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6259 = data
  i6258.m_MotorSpeed = i6259[0]
  i6258.m_MaximumMotorTorque = i6259[1]
  return i6258
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6260 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6261 = data
  i6260.m_DampingRatio = i6261[0]
  i6260.m_Frequency = i6261[1]
  i6260.m_Angle = i6261[2]
  return i6260
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6262 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6263 = data
  i6262.m_LowerTranslation = i6263[0]
  i6262.m_UpperTranslation = i6263[1]
  return i6262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6265 = data
  i6264.name = i6265[0]
  i6264.width = i6265[1]
  i6264.height = i6265[2]
  i6264.mipmapCount = i6265[3]
  i6264.anisoLevel = i6265[4]
  i6264.filterMode = i6265[5]
  i6264.hdr = !!i6265[6]
  i6264.format = i6265[7]
  i6264.wrapMode = i6265[8]
  i6264.alphaIsTransparency = !!i6265[9]
  i6264.alphaSource = i6265[10]
  i6264.graphicsFormat = i6265[11]
  i6264.sRGBTexture = !!i6265[12]
  i6264.desiredColorSpace = i6265[13]
  i6264.wrapU = i6265[14]
  i6264.wrapV = i6265[15]
  return i6264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6266 = root || new pc.UnityMaterial()
  var i6267 = data
  i6266.name = i6267[0]
  request.r(i6267[1], i6267[2], 0, i6266, 'shader')
  i6266.renderQueue = i6267[3]
  i6266.enableInstancing = !!i6267[4]
  var i6269 = i6267[5]
  var i6268 = []
  for(var i = 0; i < i6269.length; i += 1) {
    i6268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6269[i + 0]) );
  }
  i6266.floatParameters = i6268
  var i6271 = i6267[6]
  var i6270 = []
  for(var i = 0; i < i6271.length; i += 1) {
    i6270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6271[i + 0]) );
  }
  i6266.colorParameters = i6270
  var i6273 = i6267[7]
  var i6272 = []
  for(var i = 0; i < i6273.length; i += 1) {
    i6272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6273[i + 0]) );
  }
  i6266.vectorParameters = i6272
  var i6275 = i6267[8]
  var i6274 = []
  for(var i = 0; i < i6275.length; i += 1) {
    i6274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6275[i + 0]) );
  }
  i6266.textureParameters = i6274
  var i6277 = i6267[9]
  var i6276 = []
  for(var i = 0; i < i6277.length; i += 1) {
    i6276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6277[i + 0]) );
  }
  i6266.materialFlags = i6276
  return i6266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6281 = data
  i6280.name = i6281[0]
  i6280.value = i6281[1]
  return i6280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6285 = data
  i6284.name = i6285[0]
  i6284.value = new pc.Color(i6285[1], i6285[2], i6285[3], i6285[4])
  return i6284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6289 = data
  i6288.name = i6289[0]
  i6288.value = new pc.Vec4( i6289[1], i6289[2], i6289[3], i6289[4] )
  return i6288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6293 = data
  i6292.name = i6293[0]
  request.r(i6293[1], i6293[2], 0, i6292, 'value')
  return i6292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6297 = data
  i6296.name = i6297[0]
  i6296.enabled = !!i6297[1]
  return i6296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6299 = data
  i6298.name = i6299[0]
  i6298.index = i6299[1]
  i6298.startup = !!i6299[2]
  return i6298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6301 = data
  i6300.aspect = i6301[0]
  i6300.orthographic = !!i6301[1]
  i6300.orthographicSize = i6301[2]
  i6300.backgroundColor = new pc.Color(i6301[3], i6301[4], i6301[5], i6301[6])
  i6300.nearClipPlane = i6301[7]
  i6300.farClipPlane = i6301[8]
  i6300.fieldOfView = i6301[9]
  i6300.depth = i6301[10]
  i6300.clearFlags = i6301[11]
  i6300.cullingMask = i6301[12]
  i6300.rect = i6301[13]
  request.r(i6301[14], i6301[15], 0, i6300, 'targetTexture')
  i6300.usePhysicalProperties = !!i6301[16]
  i6300.focalLength = i6301[17]
  i6300.sensorSize = new pc.Vec2( i6301[18], i6301[19] )
  i6300.lensShift = new pc.Vec2( i6301[20], i6301[21] )
  i6300.gateFit = i6301[22]
  i6300.commandBufferCount = i6301[23]
  i6300.cameraType = i6301[24]
  i6300.enabled = !!i6301[25]
  return i6300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6303 = data
  i6302.name = i6303[0]
  i6302.tagId = i6303[1]
  i6302.enabled = !!i6303[2]
  i6302.isStatic = !!i6303[3]
  i6302.layer = i6303[4]
  return i6302
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6304 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6305 = data
  request.r(i6305[0], i6305[1], 0, i6304, 'm_FirstSelected')
  i6304.m_sendNavigationEvents = !!i6305[2]
  i6304.m_DragThreshold = i6305[3]
  return i6304
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6306 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6307 = data
  i6306.m_HorizontalAxis = i6307[0]
  i6306.m_VerticalAxis = i6307[1]
  i6306.m_SubmitButton = i6307[2]
  i6306.m_CancelButton = i6307[3]
  i6306.m_InputActionsPerSecond = i6307[4]
  i6306.m_RepeatDelay = i6307[5]
  i6306.m_ForceModuleActive = !!i6307[6]
  i6306.m_SendPointerHoverToParent = !!i6307[7]
  return i6306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6309 = data
  i6308.pivot = new pc.Vec2( i6309[0], i6309[1] )
  i6308.anchorMin = new pc.Vec2( i6309[2], i6309[3] )
  i6308.anchorMax = new pc.Vec2( i6309[4], i6309[5] )
  i6308.sizeDelta = new pc.Vec2( i6309[6], i6309[7] )
  i6308.anchoredPosition3D = new pc.Vec3( i6309[8], i6309[9], i6309[10] )
  i6308.rotation = new pc.Quat(i6309[11], i6309[12], i6309[13], i6309[14])
  i6308.scale = new pc.Vec3( i6309[15], i6309[16], i6309[17] )
  return i6308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6311 = data
  i6310.planeDistance = i6311[0]
  i6310.referencePixelsPerUnit = i6311[1]
  i6310.isFallbackOverlay = !!i6311[2]
  i6310.renderMode = i6311[3]
  i6310.renderOrder = i6311[4]
  i6310.sortingLayerName = i6311[5]
  i6310.sortingOrder = i6311[6]
  i6310.scaleFactor = i6311[7]
  request.r(i6311[8], i6311[9], 0, i6310, 'worldCamera')
  i6310.overrideSorting = !!i6311[10]
  i6310.pixelPerfect = !!i6311[11]
  i6310.targetDisplay = i6311[12]
  i6310.overridePixelPerfect = !!i6311[13]
  i6310.enabled = !!i6311[14]
  return i6310
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6312 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6313 = data
  i6312.m_UiScaleMode = i6313[0]
  i6312.m_ReferencePixelsPerUnit = i6313[1]
  i6312.m_ScaleFactor = i6313[2]
  i6312.m_ReferenceResolution = new pc.Vec2( i6313[3], i6313[4] )
  i6312.m_ScreenMatchMode = i6313[5]
  i6312.m_MatchWidthOrHeight = i6313[6]
  i6312.m_PhysicalUnit = i6313[7]
  i6312.m_FallbackScreenDPI = i6313[8]
  i6312.m_DefaultSpriteDPI = i6313[9]
  i6312.m_DynamicPixelsPerUnit = i6313[10]
  i6312.m_PresetInfoIsWorld = !!i6313[11]
  return i6312
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6314 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6315 = data
  i6314.m_IgnoreReversedGraphics = !!i6315[0]
  i6314.m_BlockingObjects = i6315[1]
  i6314.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6315[2] )
  return i6314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6317 = data
  i6316.cullTransparentMesh = !!i6317[0]
  return i6316
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6318 = root || request.c( 'UnityEngine.UI.Image' )
  var i6319 = data
  request.r(i6319[0], i6319[1], 0, i6318, 'm_Sprite')
  i6318.m_Type = i6319[2]
  i6318.m_PreserveAspect = !!i6319[3]
  i6318.m_FillCenter = !!i6319[4]
  i6318.m_FillMethod = i6319[5]
  i6318.m_FillAmount = i6319[6]
  i6318.m_FillClockwise = !!i6319[7]
  i6318.m_FillOrigin = i6319[8]
  i6318.m_UseSpriteMesh = !!i6319[9]
  i6318.m_PixelsPerUnitMultiplier = i6319[10]
  request.r(i6319[11], i6319[12], 0, i6318, 'm_Material')
  i6318.m_Maskable = !!i6319[13]
  i6318.m_Color = new pc.Color(i6319[14], i6319[15], i6319[16], i6319[17])
  i6318.m_RaycastTarget = !!i6319[18]
  i6318.m_RaycastPadding = new pc.Vec4( i6319[19], i6319[20], i6319[21], i6319[22] )
  return i6318
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i6320 = root || request.c( 'UnityEngine.UI.Mask' )
  var i6321 = data
  i6320.m_ShowMaskGraphic = !!i6321[0]
  return i6320
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i6322 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i6323 = data
  request.r(i6323[0], i6323[1], 0, i6322, 'skeletonDataAsset')
  request.r(i6323[2], i6323[3], 0, i6322, 'additiveMaterial')
  request.r(i6323[4], i6323[5], 0, i6322, 'multiplyMaterial')
  request.r(i6323[6], i6323[7], 0, i6322, 'screenMaterial')
  i6322.initialSkinName = i6323[8]
  i6322.initialFlipX = !!i6323[9]
  i6322.initialFlipY = !!i6323[10]
  i6322.startingAnimation = i6323[11]
  i6322.startingLoop = !!i6323[12]
  i6322.timeScale = i6323[13]
  i6322.freeze = !!i6323[14]
  i6322.layoutScaleMode = i6323[15]
  i6322.updateWhenInvisible = i6323[16]
  i6322.allowMultipleCanvasRenderers = !!i6323[17]
  var i6325 = i6323[18]
  var i6324 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i6325.length; i += 2) {
  request.r(i6325[i + 0], i6325[i + 1], 1, i6324, '')
  }
  i6322.canvasRenderers = i6324
  i6322.enableSeparatorSlots = !!i6323[19]
  i6322.updateSeparatorPartLocation = !!i6323[20]
  i6322.updateSeparatorPartScale = !!i6323[21]
  i6322.disableMeshAssignmentOnOverride = !!i6323[22]
  i6322.referenceSize = new pc.Vec2( i6323[23], i6323[24] )
  i6322.referenceScale = i6323[25]
  i6322.rectTransformSize = new pc.Vec2( i6323[26], i6323[27] )
  i6322.editReferenceRect = !!i6323[28]
  var i6327 = i6323[29]
  var i6326 = []
  for(var i = 0; i < i6327.length; i += 1) {
    i6326.push( i6327[i + 0] );
  }
  i6322.separatorSlotNames = i6326
  var i6329 = i6323[30]
  var i6328 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i6329.length; i += 2) {
  request.r(i6329[i + 0], i6329[i + 1], 1, i6328, '')
  }
  i6322.separatorParts = i6328
  i6322.meshGenerator = request.d('Spine.Unity.MeshGenerator', i6323[31], i6322.meshGenerator)
  i6322.updateTiming = i6323[32]
  i6322.unscaledTime = !!i6323[33]
  request.r(i6323[34], i6323[35], 0, i6322, 'm_Material')
  i6322.m_Maskable = !!i6323[36]
  i6322.m_Color = new pc.Color(i6323[37], i6323[38], i6323[39], i6323[40])
  i6322.m_RaycastTarget = !!i6323[41]
  i6322.m_RaycastPadding = new pc.Vec4( i6323[42], i6323[43], i6323[44], i6323[45] )
  return i6322
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i6336 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i6337 = data
  i6336.settings = request.d('Spine.Unity.MeshGenerator+Settings', i6337[0], i6336.settings)
  return i6336
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i6338 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i6339 = data
  i6338.useClipping = !!i6339[0]
  i6338.zSpacing = i6339[1]
  i6338.pmaVertexColors = !!i6339[2]
  i6338.tintBlack = !!i6339[3]
  i6338.canvasGroupTintBlack = !!i6339[4]
  i6338.calculateTangents = !!i6339[5]
  i6338.addNormals = !!i6339[6]
  i6338.immutableTriangles = !!i6339[7]
  return i6338
}

Deserializers["TutController"] = function (request, data, root) {
  var i6340 = root || request.c( 'TutController' )
  var i6341 = data
  var i6343 = i6341[0]
  var i6342 = new (System.Collections.Generic.List$1(Bridge.ns('SItem')))
  for(var i = 0; i < i6343.length; i += 1) {
    i6342.add(request.d('SItem', i6343[i + 0]));
  }
  i6340.items = i6342
  i6340.moveTime = i6341[1]
  i6340.scaleTime = i6341[2]
  request.r(i6341[3], i6341[4], 0, i6340, 'popSound')
  return i6340
}

Deserializers["SItem"] = function (request, data, root) {
  var i6346 = root || request.c( 'SItem' )
  var i6347 = data
  i6346.Position = new pc.Vec3( i6347[0], i6347[1], i6347[2] )
  request.r(i6347[3], i6347[4], 0, i6346, 'Item')
  return i6346
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i6348 = root || request.c( 'UnityEngine.UI.Text' )
  var i6349 = data
  i6348.m_FontData = request.d('UnityEngine.UI.FontData', i6349[0], i6348.m_FontData)
  i6348.m_Text = i6349[1]
  request.r(i6349[2], i6349[3], 0, i6348, 'm_Material')
  i6348.m_Maskable = !!i6349[4]
  i6348.m_Color = new pc.Color(i6349[5], i6349[6], i6349[7], i6349[8])
  i6348.m_RaycastTarget = !!i6349[9]
  i6348.m_RaycastPadding = new pc.Vec4( i6349[10], i6349[11], i6349[12], i6349[13] )
  return i6348
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i6350 = root || request.c( 'UnityEngine.UI.FontData' )
  var i6351 = data
  request.r(i6351[0], i6351[1], 0, i6350, 'm_Font')
  i6350.m_FontSize = i6351[2]
  i6350.m_FontStyle = i6351[3]
  i6350.m_BestFit = !!i6351[4]
  i6350.m_MinSize = i6351[5]
  i6350.m_MaxSize = i6351[6]
  i6350.m_Alignment = i6351[7]
  i6350.m_AlignByGeometry = !!i6351[8]
  i6350.m_RichText = !!i6351[9]
  i6350.m_HorizontalOverflow = i6351[10]
  i6350.m_VerticalOverflow = i6351[11]
  i6350.m_LineSpacing = i6351[12]
  return i6350
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i6352 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i6353 = data
  request.r(i6353[0], i6353[1], 0, i6352, 'm_Texture')
  i6352.m_UVRect = UnityEngine.Rect.MinMaxRect(i6353[2], i6353[3], i6353[4], i6353[5])
  request.r(i6353[6], i6353[7], 0, i6352, 'm_Material')
  i6352.m_Maskable = !!i6353[8]
  i6352.m_Color = new pc.Color(i6353[9], i6353[10], i6353[11], i6353[12])
  i6352.m_RaycastTarget = !!i6353[13]
  i6352.m_RaycastPadding = new pc.Vec4( i6353[14], i6353[15], i6353[16], i6353[17] )
  return i6352
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i6354 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i6355 = data
  i6354.targetIsSelf = !!i6355[0]
  request.r(i6355[1], i6355[2], 0, i6354, 'targetGO')
  i6354.tweenTargetIsTargetGO = !!i6355[3]
  i6354.delay = i6355[4]
  i6354.duration = i6355[5]
  i6354.easeType = i6355[6]
  i6354.easeCurve = new pc.AnimationCurve( { keys_flow: i6355[7] } )
  i6354.loopType = i6355[8]
  i6354.loops = i6355[9]
  i6354.id = i6355[10]
  i6354.isRelative = !!i6355[11]
  i6354.isFrom = !!i6355[12]
  i6354.isIndependentUpdate = !!i6355[13]
  i6354.autoKill = !!i6355[14]
  i6354.autoGenerate = !!i6355[15]
  i6354.isActive = !!i6355[16]
  i6354.isValid = !!i6355[17]
  request.r(i6355[18], i6355[19], 0, i6354, 'target')
  i6354.animationType = i6355[20]
  i6354.targetType = i6355[21]
  i6354.forcedTargetType = i6355[22]
  i6354.autoPlay = !!i6355[23]
  i6354.useTargetAsV3 = !!i6355[24]
  i6354.endValueFloat = i6355[25]
  i6354.endValueV3 = new pc.Vec3( i6355[26], i6355[27], i6355[28] )
  i6354.endValueV2 = new pc.Vec2( i6355[29], i6355[30] )
  i6354.endValueColor = new pc.Color(i6355[31], i6355[32], i6355[33], i6355[34])
  i6354.endValueString = i6355[35]
  i6354.endValueRect = UnityEngine.Rect.MinMaxRect(i6355[36], i6355[37], i6355[38], i6355[39])
  request.r(i6355[40], i6355[41], 0, i6354, 'endValueTransform')
  i6354.optionalBool0 = !!i6355[42]
  i6354.optionalBool1 = !!i6355[43]
  i6354.optionalFloat0 = i6355[44]
  i6354.optionalInt0 = i6355[45]
  i6354.optionalRotationMode = i6355[46]
  i6354.optionalScrambleMode = i6355[47]
  i6354.optionalShakeRandomnessMode = i6355[48]
  i6354.optionalString = i6355[49]
  i6354.updateType = i6355[50]
  i6354.isSpeedBased = !!i6355[51]
  i6354.hasOnStart = !!i6355[52]
  i6354.hasOnPlay = !!i6355[53]
  i6354.hasOnUpdate = !!i6355[54]
  i6354.hasOnStepComplete = !!i6355[55]
  i6354.hasOnComplete = !!i6355[56]
  i6354.hasOnTweenCreated = !!i6355[57]
  i6354.hasOnRewind = !!i6355[58]
  i6354.onStart = request.d('UnityEngine.Events.UnityEvent', i6355[59], i6354.onStart)
  i6354.onPlay = request.d('UnityEngine.Events.UnityEvent', i6355[60], i6354.onPlay)
  i6354.onUpdate = request.d('UnityEngine.Events.UnityEvent', i6355[61], i6354.onUpdate)
  i6354.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i6355[62], i6354.onStepComplete)
  i6354.onComplete = request.d('UnityEngine.Events.UnityEvent', i6355[63], i6354.onComplete)
  i6354.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i6355[64], i6354.onTweenCreated)
  i6354.onRewind = request.d('UnityEngine.Events.UnityEvent', i6355[65], i6354.onRewind)
  return i6354
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i6356 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i6357 = data
  i6356.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6357[0], i6356.m_PersistentCalls)
  return i6356
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6358 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6359 = data
  var i6361 = i6359[0]
  var i6360 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6361.length; i += 1) {
    i6360.add(request.d('UnityEngine.Events.PersistentCall', i6361[i + 0]));
  }
  i6358.m_Calls = i6360
  return i6358
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6364 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6365 = data
  request.r(i6365[0], i6365[1], 0, i6364, 'm_Target')
  i6364.m_TargetAssemblyTypeName = i6365[2]
  i6364.m_MethodName = i6365[3]
  i6364.m_Mode = i6365[4]
  i6364.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6365[5], i6364.m_Arguments)
  i6364.m_CallState = i6365[6]
  return i6364
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6366 = root || request.c( 'UnityEngine.UI.Button' )
  var i6367 = data
  i6366.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6367[0], i6366.m_OnClick)
  i6366.m_Navigation = request.d('UnityEngine.UI.Navigation', i6367[1], i6366.m_Navigation)
  i6366.m_Transition = i6367[2]
  i6366.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6367[3], i6366.m_Colors)
  i6366.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6367[4], i6366.m_SpriteState)
  i6366.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6367[5], i6366.m_AnimationTriggers)
  i6366.m_Interactable = !!i6367[6]
  request.r(i6367[7], i6367[8], 0, i6366, 'm_TargetGraphic')
  return i6366
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6368 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6369 = data
  i6368.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6369[0], i6368.m_PersistentCalls)
  return i6368
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6370 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6371 = data
  i6370.m_Mode = i6371[0]
  i6370.m_WrapAround = !!i6371[1]
  request.r(i6371[2], i6371[3], 0, i6370, 'm_SelectOnUp')
  request.r(i6371[4], i6371[5], 0, i6370, 'm_SelectOnDown')
  request.r(i6371[6], i6371[7], 0, i6370, 'm_SelectOnLeft')
  request.r(i6371[8], i6371[9], 0, i6370, 'm_SelectOnRight')
  return i6370
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6372 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6373 = data
  i6372.m_NormalColor = new pc.Color(i6373[0], i6373[1], i6373[2], i6373[3])
  i6372.m_HighlightedColor = new pc.Color(i6373[4], i6373[5], i6373[6], i6373[7])
  i6372.m_PressedColor = new pc.Color(i6373[8], i6373[9], i6373[10], i6373[11])
  i6372.m_SelectedColor = new pc.Color(i6373[12], i6373[13], i6373[14], i6373[15])
  i6372.m_DisabledColor = new pc.Color(i6373[16], i6373[17], i6373[18], i6373[19])
  i6372.m_ColorMultiplier = i6373[20]
  i6372.m_FadeDuration = i6373[21]
  return i6372
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6374 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6375 = data
  request.r(i6375[0], i6375[1], 0, i6374, 'm_HighlightedSprite')
  request.r(i6375[2], i6375[3], 0, i6374, 'm_PressedSprite')
  request.r(i6375[4], i6375[5], 0, i6374, 'm_SelectedSprite')
  request.r(i6375[6], i6375[7], 0, i6374, 'm_DisabledSprite')
  return i6374
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6376 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6377 = data
  i6376.m_NormalTrigger = i6377[0]
  i6376.m_HighlightedTrigger = i6377[1]
  i6376.m_PressedTrigger = i6377[2]
  i6376.m_SelectedTrigger = i6377[3]
  i6376.m_DisabledTrigger = i6377[4]
  return i6376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6379 = data
  request.r(i6379[0], i6379[1], 0, i6378, 'clip')
  request.r(i6379[2], i6379[3], 0, i6378, 'outputAudioMixerGroup')
  i6378.playOnAwake = !!i6379[4]
  i6378.loop = !!i6379[5]
  i6378.time = i6379[6]
  i6378.volume = i6379[7]
  i6378.pitch = i6379[8]
  i6378.enabled = !!i6379[9]
  return i6378
}

Deserializers["LunaController"] = function (request, data, root) {
  var i6380 = root || request.c( 'LunaController' )
  var i6381 = data
  i6380.TimePlay = i6381[0]
  i6380.LimitTimePlay = !!i6381[1]
  request.r(i6381[2], i6381[3], 0, i6380, 'LogoTexture')
  i6380.BG1Color = new pc.Color(i6381[4], i6381[5], i6381[6], i6381[7])
  i6380.BG2Color = new pc.Color(i6381[8], i6381[9], i6381[10], i6381[11])
  request.r(i6381[12], i6381[13], 0, i6380, 'logoImage')
  request.r(i6381[14], i6381[15], 0, i6380, 'BG1')
  request.r(i6381[16], i6381[17], 0, i6380, 'BG2')
  request.r(i6381[18], i6381[19], 0, i6380, 'endCard')
  return i6380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6383 = data
  i6382.ambientIntensity = i6383[0]
  i6382.reflectionIntensity = i6383[1]
  i6382.ambientMode = i6383[2]
  i6382.ambientLight = new pc.Color(i6383[3], i6383[4], i6383[5], i6383[6])
  i6382.ambientSkyColor = new pc.Color(i6383[7], i6383[8], i6383[9], i6383[10])
  i6382.ambientGroundColor = new pc.Color(i6383[11], i6383[12], i6383[13], i6383[14])
  i6382.ambientEquatorColor = new pc.Color(i6383[15], i6383[16], i6383[17], i6383[18])
  i6382.fogColor = new pc.Color(i6383[19], i6383[20], i6383[21], i6383[22])
  i6382.fogEndDistance = i6383[23]
  i6382.fogStartDistance = i6383[24]
  i6382.fogDensity = i6383[25]
  i6382.fog = !!i6383[26]
  request.r(i6383[27], i6383[28], 0, i6382, 'skybox')
  i6382.fogMode = i6383[29]
  var i6385 = i6383[30]
  var i6384 = []
  for(var i = 0; i < i6385.length; i += 1) {
    i6384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6385[i + 0]) );
  }
  i6382.lightmaps = i6384
  i6382.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6383[31], i6382.lightProbes)
  i6382.lightmapsMode = i6383[32]
  i6382.mixedBakeMode = i6383[33]
  i6382.environmentLightingMode = i6383[34]
  i6382.ambientProbe = new pc.SphericalHarmonicsL2(i6383[35])
  request.r(i6383[36], i6383[37], 0, i6382, 'customReflection')
  request.r(i6383[38], i6383[39], 0, i6382, 'defaultReflection')
  i6382.defaultReflectionMode = i6383[40]
  i6382.defaultReflectionResolution = i6383[41]
  i6382.sunLightObjectId = i6383[42]
  i6382.pixelLightCount = i6383[43]
  i6382.defaultReflectionHDR = !!i6383[44]
  i6382.hasLightDataAsset = !!i6383[45]
  i6382.hasManualGenerate = !!i6383[46]
  return i6382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6389 = data
  request.r(i6389[0], i6389[1], 0, i6388, 'lightmapColor')
  request.r(i6389[2], i6389[3], 0, i6388, 'lightmapDirection')
  request.r(i6389[4], i6389[5], 0, i6388, 'shadowMask')
  return i6388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6390 = root || new UnityEngine.LightProbes()
  var i6391 = data
  return i6390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6399 = data
  var i6401 = i6399[0]
  var i6400 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6401.length; i += 1) {
    i6400.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6401[i + 0]));
  }
  i6398.ShaderCompilationErrors = i6400
  i6398.name = i6399[1]
  i6398.guid = i6399[2]
  var i6403 = i6399[3]
  var i6402 = []
  for(var i = 0; i < i6403.length; i += 1) {
    i6402.push( i6403[i + 0] );
  }
  i6398.shaderDefinedKeywords = i6402
  var i6405 = i6399[4]
  var i6404 = []
  for(var i = 0; i < i6405.length; i += 1) {
    i6404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6405[i + 0]) );
  }
  i6398.passes = i6404
  var i6407 = i6399[5]
  var i6406 = []
  for(var i = 0; i < i6407.length; i += 1) {
    i6406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6407[i + 0]) );
  }
  i6398.usePasses = i6406
  var i6409 = i6399[6]
  var i6408 = []
  for(var i = 0; i < i6409.length; i += 1) {
    i6408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6409[i + 0]) );
  }
  i6398.defaultParameterValues = i6408
  request.r(i6399[7], i6399[8], 0, i6398, 'unityFallbackShader')
  i6398.readDepth = !!i6399[9]
  i6398.hasDepthOnlyPass = !!i6399[10]
  i6398.isCreatedByShaderGraph = !!i6399[11]
  i6398.disableBatching = !!i6399[12]
  i6398.compiled = !!i6399[13]
  return i6398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6413 = data
  i6412.shaderName = i6413[0]
  i6412.errorMessage = i6413[1]
  return i6412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6416 = root || new pc.UnityShaderPass()
  var i6417 = data
  i6416.id = i6417[0]
  i6416.subShaderIndex = i6417[1]
  i6416.name = i6417[2]
  i6416.passType = i6417[3]
  i6416.grabPassTextureName = i6417[4]
  i6416.usePass = !!i6417[5]
  i6416.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6417[6], i6416.zTest)
  i6416.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6417[7], i6416.zWrite)
  i6416.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6417[8], i6416.culling)
  i6416.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6417[9], i6416.blending)
  i6416.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6417[10], i6416.alphaBlending)
  i6416.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6417[11], i6416.colorWriteMask)
  i6416.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6417[12], i6416.offsetUnits)
  i6416.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6417[13], i6416.offsetFactor)
  i6416.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6417[14], i6416.stencilRef)
  i6416.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6417[15], i6416.stencilReadMask)
  i6416.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6417[16], i6416.stencilWriteMask)
  i6416.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6417[17], i6416.stencilOp)
  i6416.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6417[18], i6416.stencilOpFront)
  i6416.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6417[19], i6416.stencilOpBack)
  var i6419 = i6417[20]
  var i6418 = []
  for(var i = 0; i < i6419.length; i += 1) {
    i6418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6419[i + 0]) );
  }
  i6416.tags = i6418
  var i6421 = i6417[21]
  var i6420 = []
  for(var i = 0; i < i6421.length; i += 1) {
    i6420.push( i6421[i + 0] );
  }
  i6416.passDefinedKeywords = i6420
  var i6423 = i6417[22]
  var i6422 = []
  for(var i = 0; i < i6423.length; i += 1) {
    i6422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6423[i + 0]) );
  }
  i6416.passDefinedKeywordGroups = i6422
  var i6425 = i6417[23]
  var i6424 = []
  for(var i = 0; i < i6425.length; i += 1) {
    i6424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6425[i + 0]) );
  }
  i6416.variants = i6424
  var i6427 = i6417[24]
  var i6426 = []
  for(var i = 0; i < i6427.length; i += 1) {
    i6426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6427[i + 0]) );
  }
  i6416.excludedVariants = i6426
  i6416.hasDepthReader = !!i6417[25]
  return i6416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6429 = data
  i6428.val = i6429[0]
  i6428.name = i6429[1]
  return i6428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6431 = data
  i6430.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6431[0], i6430.src)
  i6430.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6431[1], i6430.dst)
  i6430.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6431[2], i6430.op)
  return i6430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6433 = data
  i6432.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6433[0], i6432.pass)
  i6432.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6433[1], i6432.fail)
  i6432.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6433[2], i6432.zFail)
  i6432.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6433[3], i6432.comp)
  return i6432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6437 = data
  i6436.name = i6437[0]
  i6436.value = i6437[1]
  return i6436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6441 = data
  var i6443 = i6441[0]
  var i6442 = []
  for(var i = 0; i < i6443.length; i += 1) {
    i6442.push( i6443[i + 0] );
  }
  i6440.keywords = i6442
  i6440.hasDiscard = !!i6441[1]
  return i6440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6447 = data
  i6446.passId = i6447[0]
  i6446.subShaderIndex = i6447[1]
  var i6449 = i6447[2]
  var i6448 = []
  for(var i = 0; i < i6449.length; i += 1) {
    i6448.push( i6449[i + 0] );
  }
  i6446.keywords = i6448
  i6446.vertexProgram = i6447[3]
  i6446.fragmentProgram = i6447[4]
  i6446.exportedForWebGl2 = !!i6447[5]
  i6446.readDepth = !!i6447[6]
  return i6446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6453 = data
  request.r(i6453[0], i6453[1], 0, i6452, 'shader')
  i6452.pass = i6453[2]
  return i6452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6457 = data
  i6456.name = i6457[0]
  i6456.type = i6457[1]
  i6456.value = new pc.Vec4( i6457[2], i6457[3], i6457[4], i6457[5] )
  i6456.textureValue = i6457[6]
  i6456.shaderPropertyFlag = i6457[7]
  return i6456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6459 = data
  i6458.name = i6459[0]
  request.r(i6459[1], i6459[2], 0, i6458, 'texture')
  i6458.aabb = i6459[3]
  i6458.vertices = i6459[4]
  i6458.triangles = i6459[5]
  i6458.textureRect = UnityEngine.Rect.MinMaxRect(i6459[6], i6459[7], i6459[8], i6459[9])
  i6458.packedRect = UnityEngine.Rect.MinMaxRect(i6459[10], i6459[11], i6459[12], i6459[13])
  i6458.border = new pc.Vec4( i6459[14], i6459[15], i6459[16], i6459[17] )
  i6458.transparency = i6459[18]
  i6458.bounds = i6459[19]
  i6458.pixelsPerUnit = i6459[20]
  i6458.textureWidth = i6459[21]
  i6458.textureHeight = i6459[22]
  i6458.nativeSize = new pc.Vec2( i6459[23], i6459[24] )
  i6458.pivot = new pc.Vec2( i6459[25], i6459[26] )
  i6458.textureRectOffset = new pc.Vec2( i6459[27], i6459[28] )
  return i6458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6461 = data
  i6460.name = i6461[0]
  return i6460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i6462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i6463 = data
  i6462.name = i6463[0]
  i6462.ascent = i6463[1]
  i6462.originalLineHeight = i6463[2]
  i6462.fontSize = i6463[3]
  var i6465 = i6463[4]
  var i6464 = []
  for(var i = 0; i < i6465.length; i += 1) {
    i6464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i6465[i + 0]) );
  }
  i6462.characterInfo = i6464
  request.r(i6463[5], i6463[6], 0, i6462, 'texture')
  i6462.originalFontSize = i6463[7]
  return i6462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i6468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i6469 = data
  i6468.index = i6469[0]
  i6468.advance = i6469[1]
  i6468.bearing = i6469[2]
  i6468.glyphWidth = i6469[3]
  i6468.glyphHeight = i6469[4]
  i6468.minX = i6469[5]
  i6468.maxX = i6469[6]
  i6468.minY = i6469[7]
  i6468.maxY = i6469[8]
  i6468.uvBottomLeftX = i6469[9]
  i6468.uvBottomLeftY = i6469[10]
  i6468.uvBottomRightX = i6469[11]
  i6468.uvBottomRightY = i6469[12]
  i6468.uvTopLeftX = i6469[13]
  i6468.uvTopLeftY = i6469[14]
  i6468.uvTopRightX = i6469[15]
  i6468.uvTopRightY = i6469[16]
  return i6468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6471 = data
  i6470.name = i6471[0]
  i6470.bytes64 = i6471[1]
  i6470.data = i6471[2]
  return i6470
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i6472 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i6473 = data
  var i6475 = i6473[0]
  var i6474 = []
  for(var i = 0; i < i6475.length; i += 2) {
  request.r(i6475[i + 0], i6475[i + 1], 2, i6474, '')
  }
  i6472.atlasAssets = i6474
  i6472.scale = i6473[1]
  request.r(i6473[2], i6473[3], 0, i6472, 'skeletonJSON')
  i6472.isUpgradingBlendModeMaterials = !!i6473[4]
  i6472.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i6473[5], i6472.blendModeMaterials)
  var i6477 = i6473[6]
  var i6476 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i6477.length; i += 2) {
  request.r(i6477[i + 0], i6477[i + 1], 1, i6476, '')
  }
  i6472.skeletonDataModifiers = i6476
  var i6479 = i6473[7]
  var i6478 = []
  for(var i = 0; i < i6479.length; i += 1) {
    i6478.push( i6479[i + 0] );
  }
  i6472.fromAnimation = i6478
  var i6481 = i6473[8]
  var i6480 = []
  for(var i = 0; i < i6481.length; i += 1) {
    i6480.push( i6481[i + 0] );
  }
  i6472.toAnimation = i6480
  i6472.duration = i6473[9]
  i6472.defaultMix = i6473[10]
  request.r(i6473[11], i6473[12], 0, i6472, 'controller')
  return i6472
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i6484 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i6485 = data
  i6484.applyAdditiveMaterial = !!i6485[0]
  var i6487 = i6485[1]
  var i6486 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6487.length; i += 1) {
    i6486.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6487[i + 0]));
  }
  i6484.additiveMaterials = i6486
  var i6489 = i6485[2]
  var i6488 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6489.length; i += 1) {
    i6488.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6489[i + 0]));
  }
  i6484.multiplyMaterials = i6488
  var i6491 = i6485[3]
  var i6490 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6491.length; i += 1) {
    i6490.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6491[i + 0]));
  }
  i6484.screenMaterials = i6490
  i6484.requiresBlendModeMaterials = !!i6485[4]
  return i6484
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i6494 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i6495 = data
  i6494.pageName = i6495[0]
  request.r(i6495[1], i6495[2], 0, i6494, 'material')
  return i6494
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i6498 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i6499 = data
  request.r(i6499[0], i6499[1], 0, i6498, 'atlasFile')
  var i6501 = i6499[2]
  var i6500 = []
  for(var i = 0; i < i6501.length; i += 2) {
  request.r(i6501[i + 0], i6501[i + 1], 2, i6500, '')
  }
  i6498.materials = i6500
  i6498.textureLoadingMode = i6499[3]
  request.r(i6499[4], i6499[5], 0, i6498, 'onDemandTextureLoader')
  return i6498
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i6504 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i6505 = data
  i6504.useSafeMode = !!i6505[0]
  i6504.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i6505[1], i6504.safeModeOptions)
  i6504.timeScale = i6505[2]
  i6504.unscaledTimeScale = i6505[3]
  i6504.useSmoothDeltaTime = !!i6505[4]
  i6504.maxSmoothUnscaledTime = i6505[5]
  i6504.rewindCallbackMode = i6505[6]
  i6504.showUnityEditorReport = !!i6505[7]
  i6504.logBehaviour = i6505[8]
  i6504.drawGizmos = !!i6505[9]
  i6504.defaultRecyclable = !!i6505[10]
  i6504.defaultAutoPlay = i6505[11]
  i6504.defaultUpdateType = i6505[12]
  i6504.defaultTimeScaleIndependent = !!i6505[13]
  i6504.defaultEaseType = i6505[14]
  i6504.defaultEaseOvershootOrAmplitude = i6505[15]
  i6504.defaultEasePeriod = i6505[16]
  i6504.defaultAutoKill = !!i6505[17]
  i6504.defaultLoopType = i6505[18]
  i6504.debugMode = !!i6505[19]
  i6504.debugStoreTargetId = !!i6505[20]
  i6504.showPreviewPanel = !!i6505[21]
  i6504.storeSettingsLocation = i6505[22]
  i6504.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i6505[23], i6504.modules)
  i6504.createASMDEF = !!i6505[24]
  i6504.showPlayingTweens = !!i6505[25]
  i6504.showPausedTweens = !!i6505[26]
  return i6504
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i6506 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i6507 = data
  i6506.logBehaviour = i6507[0]
  i6506.nestedTweenFailureBehaviour = i6507[1]
  return i6506
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i6508 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i6509 = data
  i6508.showPanel = !!i6509[0]
  i6508.audioEnabled = !!i6509[1]
  i6508.physicsEnabled = !!i6509[2]
  i6508.physics2DEnabled = !!i6509[3]
  i6508.spriteEnabled = !!i6509[4]
  i6508.uiEnabled = !!i6509[5]
  i6508.textMeshProEnabled = !!i6509[6]
  i6508.tk2DEnabled = !!i6509[7]
  i6508.deAudioEnabled = !!i6509[8]
  i6508.deUnityExtendedEnabled = !!i6509[9]
  i6508.epoOutlineEnabled = !!i6509[10]
  return i6508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6511 = data
  var i6513 = i6511[0]
  var i6512 = []
  for(var i = 0; i < i6513.length; i += 1) {
    i6512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6513[i + 0]) );
  }
  i6510.files = i6512
  i6510.componentToPrefabIds = i6511[1]
  return i6510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6517 = data
  i6516.path = i6517[0]
  request.r(i6517[1], i6517[2], 0, i6516, 'unityObject')
  return i6516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6519 = data
  var i6521 = i6519[0]
  var i6520 = []
  for(var i = 0; i < i6521.length; i += 1) {
    i6520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6521[i + 0]) );
  }
  i6518.scriptsExecutionOrder = i6520
  var i6523 = i6519[1]
  var i6522 = []
  for(var i = 0; i < i6523.length; i += 1) {
    i6522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6523[i + 0]) );
  }
  i6518.sortingLayers = i6522
  var i6525 = i6519[2]
  var i6524 = []
  for(var i = 0; i < i6525.length; i += 1) {
    i6524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6525[i + 0]) );
  }
  i6518.cullingLayers = i6524
  i6518.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6519[3], i6518.timeSettings)
  i6518.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6519[4], i6518.physicsSettings)
  i6518.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6519[5], i6518.physics2DSettings)
  i6518.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6519[6], i6518.qualitySettings)
  i6518.enableRealtimeShadows = !!i6519[7]
  i6518.enableAutoInstancing = !!i6519[8]
  i6518.enableStaticBatching = !!i6519[9]
  i6518.enableDynamicBatching = !!i6519[10]
  i6518.usePreservativeDynamicBatching = !!i6519[11]
  i6518.lightmapEncodingQuality = i6519[12]
  i6518.desiredColorSpace = i6519[13]
  var i6527 = i6519[14]
  var i6526 = []
  for(var i = 0; i < i6527.length; i += 1) {
    i6526.push( i6527[i + 0] );
  }
  i6518.allTags = i6526
  return i6518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6531 = data
  i6530.name = i6531[0]
  i6530.value = i6531[1]
  return i6530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6535 = data
  i6534.id = i6535[0]
  i6534.name = i6535[1]
  i6534.value = i6535[2]
  return i6534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6539 = data
  i6538.id = i6539[0]
  i6538.name = i6539[1]
  return i6538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6541 = data
  i6540.fixedDeltaTime = i6541[0]
  i6540.maximumDeltaTime = i6541[1]
  i6540.timeScale = i6541[2]
  i6540.maximumParticleTimestep = i6541[3]
  return i6540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6543 = data
  i6542.gravity = new pc.Vec3( i6543[0], i6543[1], i6543[2] )
  i6542.defaultSolverIterations = i6543[3]
  i6542.bounceThreshold = i6543[4]
  i6542.autoSyncTransforms = !!i6543[5]
  i6542.autoSimulation = !!i6543[6]
  var i6545 = i6543[7]
  var i6544 = []
  for(var i = 0; i < i6545.length; i += 1) {
    i6544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6545[i + 0]) );
  }
  i6542.collisionMatrix = i6544
  return i6542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6549 = data
  i6548.enabled = !!i6549[0]
  i6548.layerId = i6549[1]
  i6548.otherLayerId = i6549[2]
  return i6548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6551 = data
  request.r(i6551[0], i6551[1], 0, i6550, 'material')
  i6550.gravity = new pc.Vec2( i6551[2], i6551[3] )
  i6550.positionIterations = i6551[4]
  i6550.velocityIterations = i6551[5]
  i6550.velocityThreshold = i6551[6]
  i6550.maxLinearCorrection = i6551[7]
  i6550.maxAngularCorrection = i6551[8]
  i6550.maxTranslationSpeed = i6551[9]
  i6550.maxRotationSpeed = i6551[10]
  i6550.baumgarteScale = i6551[11]
  i6550.baumgarteTOIScale = i6551[12]
  i6550.timeToSleep = i6551[13]
  i6550.linearSleepTolerance = i6551[14]
  i6550.angularSleepTolerance = i6551[15]
  i6550.defaultContactOffset = i6551[16]
  i6550.autoSimulation = !!i6551[17]
  i6550.queriesHitTriggers = !!i6551[18]
  i6550.queriesStartInColliders = !!i6551[19]
  i6550.callbacksOnDisable = !!i6551[20]
  i6550.reuseCollisionCallbacks = !!i6551[21]
  i6550.autoSyncTransforms = !!i6551[22]
  var i6553 = i6551[23]
  var i6552 = []
  for(var i = 0; i < i6553.length; i += 1) {
    i6552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6553[i + 0]) );
  }
  i6550.collisionMatrix = i6552
  return i6550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6557 = data
  i6556.enabled = !!i6557[0]
  i6556.layerId = i6557[1]
  i6556.otherLayerId = i6557[2]
  return i6556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6559 = data
  var i6561 = i6559[0]
  var i6560 = []
  for(var i = 0; i < i6561.length; i += 1) {
    i6560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6561[i + 0]) );
  }
  i6558.qualityLevels = i6560
  var i6563 = i6559[1]
  var i6562 = []
  for(var i = 0; i < i6563.length; i += 1) {
    i6562.push( i6563[i + 0] );
  }
  i6558.names = i6562
  i6558.shadows = i6559[2]
  i6558.anisotropicFiltering = i6559[3]
  i6558.antiAliasing = i6559[4]
  i6558.lodBias = i6559[5]
  i6558.shadowCascades = i6559[6]
  i6558.shadowDistance = i6559[7]
  i6558.shadowmaskMode = i6559[8]
  i6558.shadowProjection = i6559[9]
  i6558.shadowResolution = i6559[10]
  i6558.softParticles = !!i6559[11]
  i6558.softVegetation = !!i6559[12]
  i6558.activeColorSpace = i6559[13]
  i6558.desiredColorSpace = i6559[14]
  i6558.masterTextureLimit = i6559[15]
  i6558.maxQueuedFrames = i6559[16]
  i6558.particleRaycastBudget = i6559[17]
  i6558.pixelLightCount = i6559[18]
  i6558.realtimeReflectionProbes = !!i6559[19]
  i6558.shadowCascade2Split = i6559[20]
  i6558.shadowCascade4Split = new pc.Vec3( i6559[21], i6559[22], i6559[23] )
  i6558.streamingMipmapsActive = !!i6559[24]
  i6558.vSyncCount = i6559[25]
  i6558.asyncUploadBufferSize = i6559[26]
  i6558.asyncUploadTimeSlice = i6559[27]
  i6558.billboardsFaceCameraPosition = !!i6559[28]
  i6558.shadowNearPlaneOffset = i6559[29]
  i6558.streamingMipmapsMemoryBudget = i6559[30]
  i6558.maximumLODLevel = i6559[31]
  i6558.streamingMipmapsAddAllCameras = !!i6559[32]
  i6558.streamingMipmapsMaxLevelReduction = i6559[33]
  i6558.streamingMipmapsRenderersPerFrame = i6559[34]
  i6558.resolutionScalingFixedDPIFactor = i6559[35]
  i6558.streamingMipmapsMaxFileIORequests = i6559[36]
  i6558.currentQualityLevel = i6559[37]
  return i6558
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6566 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6567 = data
  request.r(i6567[0], i6567[1], 0, i6566, 'm_ObjectArgument')
  i6566.m_ObjectArgumentAssemblyTypeName = i6567[2]
  i6566.m_IntArgument = i6567[3]
  i6566.m_FloatArgument = i6567[4]
  i6566.m_StringArgument = i6567[5]
  i6566.m_BoolArgument = !!i6567[6]
  return i6566
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"31":[32],"33":[32],"34":[32],"35":[32],"36":[32],"37":[32],"38":[39],"40":[2],"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[49],"57":[49],"58":[49],"59":[49],"60":[49],"61":[49],"62":[2],"63":[64],"65":[66],"67":[66],"8":[7],"68":[69],"70":[7],"71":[11,7],"72":[64],"15":[11,7],"73":[74,64],"75":[64,76],"77":[64],"78":[42],"79":[49],"80":[69],"81":[82],"83":[84],"85":[2],"86":[87],"88":[7],"89":[11,7],"90":[64],"91":[11,7],"92":[7],"93":[7],"94":[64,7],"95":[7,11],"96":[97],"98":[97],"99":[97],"100":[7],"101":[7],"10":[8],"12":[11,7],"102":[7],"9":[8],"103":[7],"104":[7],"105":[7],"106":[7],"107":[7],"108":[7],"109":[7],"13":[7],"110":[7],"22":[11,7],"111":[7],"112":[7],"113":[7],"114":[7],"20":[11,7],"115":[7],"116":[5],"117":[5],"6":[5],"118":[5],"119":[2],"120":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Mask","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","TutController","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.RawImage","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","UnityEngine.AudioSource","UnityEngine.AudioClip","LunaController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BP_V28";

Deserializers.lunaInitializationTime = "07/14/2026 07:31:16";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BP_V28_NgocNDL_TamNTM";

Deserializers.lunaAppID = "31727";

Deserializers.projectId = "60dae4cec6fc7fb41a1125c1e559d6de";

Deserializers.packagesInfo = "com.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1907";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4221";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BP_V28";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "b2ff7f04-c1f9-4232-8e06-37294809ca0f";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

