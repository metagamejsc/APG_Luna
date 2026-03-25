var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4266 = root || request.c( 'UnityEngine.JointSpring' )
  var i4267 = data
  i4266.spring = i4267[0]
  i4266.damper = i4267[1]
  i4266.targetPosition = i4267[2]
  return i4266
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4268 = root || request.c( 'UnityEngine.JointMotor' )
  var i4269 = data
  i4268.m_TargetVelocity = i4269[0]
  i4268.m_Force = i4269[1]
  i4268.m_FreeSpin = i4269[2]
  return i4268
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4270 = root || request.c( 'UnityEngine.JointLimits' )
  var i4271 = data
  i4270.m_Min = i4271[0]
  i4270.m_Max = i4271[1]
  i4270.m_Bounciness = i4271[2]
  i4270.m_BounceMinVelocity = i4271[3]
  i4270.m_ContactDistance = i4271[4]
  i4270.minBounce = i4271[5]
  i4270.maxBounce = i4271[6]
  return i4270
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4272 = root || request.c( 'UnityEngine.JointDrive' )
  var i4273 = data
  i4272.m_PositionSpring = i4273[0]
  i4272.m_PositionDamper = i4273[1]
  i4272.m_MaximumForce = i4273[2]
  i4272.m_UseAcceleration = i4273[3]
  return i4272
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4274 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4275 = data
  i4274.m_Spring = i4275[0]
  i4274.m_Damper = i4275[1]
  return i4274
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4276 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4277 = data
  i4276.m_Limit = i4277[0]
  i4276.m_Bounciness = i4277[1]
  i4276.m_ContactDistance = i4277[2]
  return i4276
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4278 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4279 = data
  i4278.m_ExtremumSlip = i4279[0]
  i4278.m_ExtremumValue = i4279[1]
  i4278.m_AsymptoteSlip = i4279[2]
  i4278.m_AsymptoteValue = i4279[3]
  i4278.m_Stiffness = i4279[4]
  return i4278
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4280 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4281 = data
  i4280.m_LowerAngle = i4281[0]
  i4280.m_UpperAngle = i4281[1]
  return i4280
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4282 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4283 = data
  i4282.m_MotorSpeed = i4283[0]
  i4282.m_MaximumMotorTorque = i4283[1]
  return i4282
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4284 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4285 = data
  i4284.m_DampingRatio = i4285[0]
  i4284.m_Frequency = i4285[1]
  i4284.m_Angle = i4285[2]
  return i4284
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4286 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4287 = data
  i4286.m_LowerTranslation = i4287[0]
  i4286.m_UpperTranslation = i4287[1]
  return i4286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4289 = data
  i4288.name = i4289[0]
  i4288.width = i4289[1]
  i4288.height = i4289[2]
  i4288.mipmapCount = i4289[3]
  i4288.anisoLevel = i4289[4]
  i4288.filterMode = i4289[5]
  i4288.hdr = !!i4289[6]
  i4288.format = i4289[7]
  i4288.wrapMode = i4289[8]
  i4288.alphaIsTransparency = !!i4289[9]
  i4288.alphaSource = i4289[10]
  i4288.graphicsFormat = i4289[11]
  i4288.sRGBTexture = !!i4289[12]
  i4288.desiredColorSpace = i4289[13]
  i4288.wrapU = i4289[14]
  i4288.wrapV = i4289[15]
  return i4288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4290 = root || new pc.UnityMaterial()
  var i4291 = data
  i4290.name = i4291[0]
  request.r(i4291[1], i4291[2], 0, i4290, 'shader')
  i4290.renderQueue = i4291[3]
  i4290.enableInstancing = !!i4291[4]
  var i4293 = i4291[5]
  var i4292 = []
  for(var i = 0; i < i4293.length; i += 1) {
    i4292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4293[i + 0]) );
  }
  i4290.floatParameters = i4292
  var i4295 = i4291[6]
  var i4294 = []
  for(var i = 0; i < i4295.length; i += 1) {
    i4294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4295[i + 0]) );
  }
  i4290.colorParameters = i4294
  var i4297 = i4291[7]
  var i4296 = []
  for(var i = 0; i < i4297.length; i += 1) {
    i4296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4297[i + 0]) );
  }
  i4290.vectorParameters = i4296
  var i4299 = i4291[8]
  var i4298 = []
  for(var i = 0; i < i4299.length; i += 1) {
    i4298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4299[i + 0]) );
  }
  i4290.textureParameters = i4298
  var i4301 = i4291[9]
  var i4300 = []
  for(var i = 0; i < i4301.length; i += 1) {
    i4300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4301[i + 0]) );
  }
  i4290.materialFlags = i4300
  return i4290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4305 = data
  i4304.name = i4305[0]
  i4304.value = i4305[1]
  return i4304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4309 = data
  i4308.name = i4309[0]
  i4308.value = new pc.Color(i4309[1], i4309[2], i4309[3], i4309[4])
  return i4308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4313 = data
  i4312.name = i4313[0]
  i4312.value = new pc.Vec4( i4313[1], i4313[2], i4313[3], i4313[4] )
  return i4312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4317 = data
  i4316.name = i4317[0]
  request.r(i4317[1], i4317[2], 0, i4316, 'value')
  return i4316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4321 = data
  i4320.name = i4321[0]
  i4320.enabled = !!i4321[1]
  return i4320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4323 = data
  i4322.name = i4323[0]
  i4322.index = i4323[1]
  i4322.startup = !!i4323[2]
  return i4322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4325 = data
  i4324.position = new pc.Vec3( i4325[0], i4325[1], i4325[2] )
  i4324.scale = new pc.Vec3( i4325[3], i4325[4], i4325[5] )
  i4324.rotation = new pc.Quat(i4325[6], i4325[7], i4325[8], i4325[9])
  return i4324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4327 = data
  i4326.aspect = i4327[0]
  i4326.orthographic = !!i4327[1]
  i4326.orthographicSize = i4327[2]
  i4326.backgroundColor = new pc.Color(i4327[3], i4327[4], i4327[5], i4327[6])
  i4326.nearClipPlane = i4327[7]
  i4326.farClipPlane = i4327[8]
  i4326.fieldOfView = i4327[9]
  i4326.depth = i4327[10]
  i4326.clearFlags = i4327[11]
  i4326.cullingMask = i4327[12]
  i4326.rect = i4327[13]
  request.r(i4327[14], i4327[15], 0, i4326, 'targetTexture')
  i4326.usePhysicalProperties = !!i4327[16]
  i4326.focalLength = i4327[17]
  i4326.sensorSize = new pc.Vec2( i4327[18], i4327[19] )
  i4326.lensShift = new pc.Vec2( i4327[20], i4327[21] )
  i4326.gateFit = i4327[22]
  i4326.commandBufferCount = i4327[23]
  i4326.cameraType = i4327[24]
  i4326.enabled = !!i4327[25]
  return i4326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4329 = data
  i4328.name = i4329[0]
  i4328.tagId = i4329[1]
  i4328.enabled = !!i4329[2]
  i4328.isStatic = !!i4329[3]
  i4328.layer = i4329[4]
  return i4328
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4330 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4331 = data
  request.r(i4331[0], i4331[1], 0, i4330, 'm_FirstSelected')
  i4330.m_sendNavigationEvents = !!i4331[2]
  i4330.m_DragThreshold = i4331[3]
  return i4330
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4332 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4333 = data
  i4332.m_HorizontalAxis = i4333[0]
  i4332.m_VerticalAxis = i4333[1]
  i4332.m_SubmitButton = i4333[2]
  i4332.m_CancelButton = i4333[3]
  i4332.m_InputActionsPerSecond = i4333[4]
  i4332.m_RepeatDelay = i4333[5]
  i4332.m_ForceModuleActive = !!i4333[6]
  i4332.m_SendPointerHoverToParent = !!i4333[7]
  return i4332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4335 = data
  i4334.pivot = new pc.Vec2( i4335[0], i4335[1] )
  i4334.anchorMin = new pc.Vec2( i4335[2], i4335[3] )
  i4334.anchorMax = new pc.Vec2( i4335[4], i4335[5] )
  i4334.sizeDelta = new pc.Vec2( i4335[6], i4335[7] )
  i4334.anchoredPosition3D = new pc.Vec3( i4335[8], i4335[9], i4335[10] )
  i4334.rotation = new pc.Quat(i4335[11], i4335[12], i4335[13], i4335[14])
  i4334.scale = new pc.Vec3( i4335[15], i4335[16], i4335[17] )
  return i4334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4337 = data
  i4336.planeDistance = i4337[0]
  i4336.referencePixelsPerUnit = i4337[1]
  i4336.isFallbackOverlay = !!i4337[2]
  i4336.renderMode = i4337[3]
  i4336.renderOrder = i4337[4]
  i4336.sortingLayerName = i4337[5]
  i4336.sortingOrder = i4337[6]
  i4336.scaleFactor = i4337[7]
  request.r(i4337[8], i4337[9], 0, i4336, 'worldCamera')
  i4336.overrideSorting = !!i4337[10]
  i4336.pixelPerfect = !!i4337[11]
  i4336.targetDisplay = i4337[12]
  i4336.overridePixelPerfect = !!i4337[13]
  i4336.enabled = !!i4337[14]
  return i4336
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4338 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4339 = data
  i4338.m_UiScaleMode = i4339[0]
  i4338.m_ReferencePixelsPerUnit = i4339[1]
  i4338.m_ScaleFactor = i4339[2]
  i4338.m_ReferenceResolution = new pc.Vec2( i4339[3], i4339[4] )
  i4338.m_ScreenMatchMode = i4339[5]
  i4338.m_MatchWidthOrHeight = i4339[6]
  i4338.m_PhysicalUnit = i4339[7]
  i4338.m_FallbackScreenDPI = i4339[8]
  i4338.m_DefaultSpriteDPI = i4339[9]
  i4338.m_DynamicPixelsPerUnit = i4339[10]
  i4338.m_PresetInfoIsWorld = !!i4339[11]
  return i4338
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4340 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4341 = data
  i4340.m_IgnoreReversedGraphics = !!i4341[0]
  i4340.m_BlockingObjects = i4341[1]
  i4340.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4341[2] )
  return i4340
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i4342 = root || request.c( 'LunaManager' )
  var i4343 = data
  var i4345 = i4343[0]
  var i4344 = []
  for(var i = 0; i < i4345.length; i += 2) {
  request.r(i4345[i + 0], i4345[i + 1], 2, i4344, '')
  }
  i4342.lstBtnInstall = i4344
  request.r(i4343[1], i4343[2], 0, i4342, 'WinGO')
  request.r(i4343[3], i4343[4], 0, i4342, 'LoseGO')
  request.r(i4343[5], i4343[6], 0, i4342, 'StartCard')
  request.r(i4343[7], i4343[8], 0, i4342, 'EndCard')
  request.r(i4343[9], i4343[10], 0, i4342, 'Parent')
  i4342.isDrag = !!i4343[11]
  i4342.timeDrag = i4343[12]
  i4342.countPlay = i4343[13]
  i4342.countPlayFinal = i4343[14]
  i4342.countPlayMax = i4343[15]
  i4342.timeDropFinal = i4343[16]
  i4342.colorBG = new pc.Color(i4343[17], i4343[18], i4343[19], i4343[20])
  request.r(i4343[21], i4343[22], 0, i4342, 'texture2D')
  request.r(i4343[23], i4343[24], 0, i4342, 'rawImageBG')
  request.r(i4343[25], i4343[26], 0, i4342, 'MSSGirl')
  request.r(i4343[27], i4343[28], 0, i4342, 'MSSBoy')
  request.r(i4343[29], i4343[30], 0, i4342, 'MSSGroom')
  request.r(i4343[31], i4343[32], 0, i4342, 'MSSBride')
  request.r(i4343[33], i4343[34], 0, i4342, 'textProgess')
  request.r(i4343[35], i4343[36], 0, i4342, 'imgProgess')
  request.r(i4343[37], i4343[38], 0, i4342, 'timeText')
  return i4342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4349 = data
  i4348.cullTransparentMesh = !!i4349[0]
  return i4348
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i4350 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i4351 = data
  request.r(i4351[0], i4351[1], 0, i4350, 'm_Texture')
  i4350.m_UVRect = UnityEngine.Rect.MinMaxRect(i4351[2], i4351[3], i4351[4], i4351[5])
  i4350.m_Maskable = !!i4351[6]
  request.r(i4351[7], i4351[8], 0, i4350, 'm_Material')
  i4350.m_Color = new pc.Color(i4351[9], i4351[10], i4351[11], i4351[12])
  i4350.m_RaycastTarget = !!i4351[13]
  i4350.m_RaycastPadding = new pc.Vec4( i4351[14], i4351[15], i4351[16], i4351[17] )
  return i4350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4353 = data
  request.r(i4353[0], i4353[1], 0, i4352, 'clip')
  request.r(i4353[2], i4353[3], 0, i4352, 'outputAudioMixerGroup')
  i4352.playOnAwake = !!i4353[4]
  i4352.loop = !!i4353[5]
  i4352.time = i4353[6]
  i4352.volume = i4353[7]
  i4352.pitch = i4353[8]
  i4352.enabled = !!i4353[9]
  return i4352
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4354 = root || request.c( 'UnityEngine.UI.Image' )
  var i4355 = data
  request.r(i4355[0], i4355[1], 0, i4354, 'm_Sprite')
  i4354.m_Type = i4355[2]
  i4354.m_PreserveAspect = !!i4355[3]
  i4354.m_FillCenter = !!i4355[4]
  i4354.m_FillMethod = i4355[5]
  i4354.m_FillAmount = i4355[6]
  i4354.m_FillClockwise = !!i4355[7]
  i4354.m_FillOrigin = i4355[8]
  i4354.m_UseSpriteMesh = !!i4355[9]
  i4354.m_PixelsPerUnitMultiplier = i4355[10]
  i4354.m_Maskable = !!i4355[11]
  request.r(i4355[12], i4355[13], 0, i4354, 'm_Material')
  i4354.m_Color = new pc.Color(i4355[14], i4355[15], i4355[16], i4355[17])
  i4354.m_RaycastTarget = !!i4355[18]
  i4354.m_RaycastPadding = new pc.Vec4( i4355[19], i4355[20], i4355[21], i4355[22] )
  return i4354
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i4356 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i4357 = data
  request.r(i4357[0], i4357[1], 0, i4356, 'skeletonDataAsset')
  request.r(i4357[2], i4357[3], 0, i4356, 'additiveMaterial')
  request.r(i4357[4], i4357[5], 0, i4356, 'multiplyMaterial')
  request.r(i4357[6], i4357[7], 0, i4356, 'screenMaterial')
  i4356.initialSkinName = i4357[8]
  i4356.initialFlipX = !!i4357[9]
  i4356.initialFlipY = !!i4357[10]
  i4356.startingAnimation = i4357[11]
  i4356.startingLoop = !!i4357[12]
  i4356.timeScale = i4357[13]
  i4356.freeze = !!i4357[14]
  i4356.layoutScaleMode = i4357[15]
  i4356.updateWhenInvisible = i4357[16]
  i4356.allowMultipleCanvasRenderers = !!i4357[17]
  var i4359 = i4357[18]
  var i4358 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i4359.length; i += 2) {
  request.r(i4359[i + 0], i4359[i + 1], 1, i4358, '')
  }
  i4356.canvasRenderers = i4358
  i4356.enableSeparatorSlots = !!i4357[19]
  i4356.updateSeparatorPartLocation = !!i4357[20]
  i4356.updateSeparatorPartScale = !!i4357[21]
  i4356.disableMeshAssignmentOnOverride = !!i4357[22]
  i4356.referenceSize = new pc.Vec2( i4357[23], i4357[24] )
  i4356.referenceScale = i4357[25]
  i4356.rectTransformSize = new pc.Vec2( i4357[26], i4357[27] )
  i4356.editReferenceRect = !!i4357[28]
  var i4361 = i4357[29]
  var i4360 = []
  for(var i = 0; i < i4361.length; i += 1) {
    i4360.push( i4361[i + 0] );
  }
  i4356.separatorSlotNames = i4360
  var i4363 = i4357[30]
  var i4362 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i4363.length; i += 2) {
  request.r(i4363[i + 0], i4363[i + 1], 1, i4362, '')
  }
  i4356.separatorParts = i4362
  i4356.meshGenerator = request.d('Spine.Unity.MeshGenerator', i4357[31], i4356.meshGenerator)
  i4356.updateTiming = i4357[32]
  i4356.unscaledTime = !!i4357[33]
  i4356.m_Maskable = !!i4357[34]
  request.r(i4357[35], i4357[36], 0, i4356, 'm_Material')
  i4356.m_Color = new pc.Color(i4357[37], i4357[38], i4357[39], i4357[40])
  i4356.m_RaycastTarget = !!i4357[41]
  i4356.m_RaycastPadding = new pc.Vec4( i4357[42], i4357[43], i4357[44], i4357[45] )
  return i4356
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i4370 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i4371 = data
  i4370.settings = request.d('Spine.Unity.MeshGenerator+Settings', i4371[0], i4370.settings)
  return i4370
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i4372 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i4373 = data
  i4372.useClipping = !!i4373[0]
  i4372.zSpacing = i4373[1]
  i4372.pmaVertexColors = !!i4373[2]
  i4372.tintBlack = !!i4373[3]
  i4372.canvasGroupTintBlack = !!i4373[4]
  i4372.calculateTangents = !!i4373[5]
  i4372.addNormals = !!i4373[6]
  i4372.immutableTriangles = !!i4373[7]
  return i4372
}

Deserializers["DropZone"] = function (request, data, root) {
  var i4374 = root || request.c( 'DropZone' )
  var i4375 = data
  i4374.idDrop = i4375[0]
  var i4377 = i4375[1]
  var i4376 = []
  for(var i = 0; i < i4377.length; i += 2) {
  request.r(i4377[i + 0], i4377[i + 1], 2, i4376, '')
  }
  i4374.steps = i4376
  request.r(i4375[2], i4375[3], 0, i4374, 'stepLose')
  return i4374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i4380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i4381 = data
  i4380.usedByComposite = !!i4381[0]
  i4380.autoTiling = !!i4381[1]
  var i4383 = i4381[2]
  var i4382 = []
  for(var i = 0; i < i4383.length; i += 1) {
  var i4385 = i4383[i + 0]
  var i4384 = []
  for(var i = 0; i < i4385.length; i += 2) {
    i4384.push( new pc.Vec2( i4385[i + 0], i4385[i + 1] ) );
  }
    i4382.push( i4384 );
  }
  i4380.points = i4382
  i4380.enabled = !!i4381[3]
  i4380.isTrigger = !!i4381[4]
  i4380.usedByEffector = !!i4381[5]
  i4380.density = i4381[6]
  i4380.offset = new pc.Vec2( i4381[7], i4381[8] )
  request.r(i4381[9], i4381[10], 0, i4380, 'material')
  return i4380
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i4392 = root || request.c( 'ClickItem' )
  var i4393 = data
  var i4395 = i4393[0]
  var i4394 = []
  for(var i = 0; i < i4395.length; i += 2) {
  request.r(i4395[i + 0], i4395[i + 1], 2, i4394, '')
  }
  i4392.steps = i4394
  i4392.currentStep = i4393[1]
  i4392.isProcess = !!i4393[2]
  return i4392
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4396 = root || request.c( 'UnityEngine.UI.Button' )
  var i4397 = data
  i4396.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4397[0], i4396.m_OnClick)
  i4396.m_Navigation = request.d('UnityEngine.UI.Navigation', i4397[1], i4396.m_Navigation)
  i4396.m_Transition = i4397[2]
  i4396.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4397[3], i4396.m_Colors)
  i4396.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4397[4], i4396.m_SpriteState)
  i4396.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4397[5], i4396.m_AnimationTriggers)
  i4396.m_Interactable = !!i4397[6]
  request.r(i4397[7], i4397[8], 0, i4396, 'm_TargetGraphic')
  return i4396
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4398 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4399 = data
  i4398.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4399[0], i4398.m_PersistentCalls)
  return i4398
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4400 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4401 = data
  var i4403 = i4401[0]
  var i4402 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4403.length; i += 1) {
    i4402.add(request.d('UnityEngine.Events.PersistentCall', i4403[i + 0]));
  }
  i4400.m_Calls = i4402
  return i4400
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4406 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4407 = data
  request.r(i4407[0], i4407[1], 0, i4406, 'm_Target')
  i4406.m_TargetAssemblyTypeName = i4407[2]
  i4406.m_MethodName = i4407[3]
  i4406.m_Mode = i4407[4]
  i4406.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4407[5], i4406.m_Arguments)
  i4406.m_CallState = i4407[6]
  return i4406
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4408 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4409 = data
  i4408.m_Mode = i4409[0]
  i4408.m_WrapAround = !!i4409[1]
  request.r(i4409[2], i4409[3], 0, i4408, 'm_SelectOnUp')
  request.r(i4409[4], i4409[5], 0, i4408, 'm_SelectOnDown')
  request.r(i4409[6], i4409[7], 0, i4408, 'm_SelectOnLeft')
  request.r(i4409[8], i4409[9], 0, i4408, 'm_SelectOnRight')
  return i4408
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4410 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4411 = data
  i4410.m_NormalColor = new pc.Color(i4411[0], i4411[1], i4411[2], i4411[3])
  i4410.m_HighlightedColor = new pc.Color(i4411[4], i4411[5], i4411[6], i4411[7])
  i4410.m_PressedColor = new pc.Color(i4411[8], i4411[9], i4411[10], i4411[11])
  i4410.m_SelectedColor = new pc.Color(i4411[12], i4411[13], i4411[14], i4411[15])
  i4410.m_DisabledColor = new pc.Color(i4411[16], i4411[17], i4411[18], i4411[19])
  i4410.m_ColorMultiplier = i4411[20]
  i4410.m_FadeDuration = i4411[21]
  return i4410
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4412 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4413 = data
  request.r(i4413[0], i4413[1], 0, i4412, 'm_HighlightedSprite')
  request.r(i4413[2], i4413[3], 0, i4412, 'm_PressedSprite')
  request.r(i4413[4], i4413[5], 0, i4412, 'm_SelectedSprite')
  request.r(i4413[6], i4413[7], 0, i4412, 'm_DisabledSprite')
  return i4412
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4414 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4415 = data
  i4414.m_NormalTrigger = i4415[0]
  i4414.m_HighlightedTrigger = i4415[1]
  i4414.m_PressedTrigger = i4415[2]
  i4414.m_SelectedTrigger = i4415[3]
  i4414.m_DisabledTrigger = i4415[4]
  return i4414
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i4416 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i4417 = data
  i4416.targetIsSelf = !!i4417[0]
  request.r(i4417[1], i4417[2], 0, i4416, 'targetGO')
  i4416.tweenTargetIsTargetGO = !!i4417[3]
  i4416.delay = i4417[4]
  i4416.duration = i4417[5]
  i4416.easeType = i4417[6]
  i4416.easeCurve = new pc.AnimationCurve( { keys_flow: i4417[7] } )
  i4416.loopType = i4417[8]
  i4416.loops = i4417[9]
  i4416.id = i4417[10]
  i4416.isRelative = !!i4417[11]
  i4416.isFrom = !!i4417[12]
  i4416.isIndependentUpdate = !!i4417[13]
  i4416.autoKill = !!i4417[14]
  i4416.autoGenerate = !!i4417[15]
  i4416.isActive = !!i4417[16]
  i4416.isValid = !!i4417[17]
  request.r(i4417[18], i4417[19], 0, i4416, 'target')
  i4416.animationType = i4417[20]
  i4416.targetType = i4417[21]
  i4416.forcedTargetType = i4417[22]
  i4416.autoPlay = !!i4417[23]
  i4416.useTargetAsV3 = !!i4417[24]
  i4416.endValueFloat = i4417[25]
  i4416.endValueV3 = new pc.Vec3( i4417[26], i4417[27], i4417[28] )
  i4416.endValueV2 = new pc.Vec2( i4417[29], i4417[30] )
  i4416.endValueColor = new pc.Color(i4417[31], i4417[32], i4417[33], i4417[34])
  i4416.endValueString = i4417[35]
  i4416.endValueRect = UnityEngine.Rect.MinMaxRect(i4417[36], i4417[37], i4417[38], i4417[39])
  request.r(i4417[40], i4417[41], 0, i4416, 'endValueTransform')
  i4416.optionalBool0 = !!i4417[42]
  i4416.optionalBool1 = !!i4417[43]
  i4416.optionalFloat0 = i4417[44]
  i4416.optionalInt0 = i4417[45]
  i4416.optionalRotationMode = i4417[46]
  i4416.optionalScrambleMode = i4417[47]
  i4416.optionalShakeRandomnessMode = i4417[48]
  i4416.optionalString = i4417[49]
  i4416.updateType = i4417[50]
  i4416.isSpeedBased = !!i4417[51]
  i4416.hasOnStart = !!i4417[52]
  i4416.hasOnPlay = !!i4417[53]
  i4416.hasOnUpdate = !!i4417[54]
  i4416.hasOnStepComplete = !!i4417[55]
  i4416.hasOnComplete = !!i4417[56]
  i4416.hasOnTweenCreated = !!i4417[57]
  i4416.hasOnRewind = !!i4417[58]
  i4416.onStart = request.d('UnityEngine.Events.UnityEvent', i4417[59], i4416.onStart)
  i4416.onPlay = request.d('UnityEngine.Events.UnityEvent', i4417[60], i4416.onPlay)
  i4416.onUpdate = request.d('UnityEngine.Events.UnityEvent', i4417[61], i4416.onUpdate)
  i4416.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i4417[62], i4416.onStepComplete)
  i4416.onComplete = request.d('UnityEngine.Events.UnityEvent', i4417[63], i4416.onComplete)
  i4416.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i4417[64], i4416.onTweenCreated)
  i4416.onRewind = request.d('UnityEngine.Events.UnityEvent', i4417[65], i4416.onRewind)
  return i4416
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i4418 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i4419 = data
  i4418.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4419[0], i4418.m_PersistentCalls)
  return i4418
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4420 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4421 = data
  request.r(i4421[0], i4421[1], 0, i4420, 'm_ObjectArgument')
  i4420.m_ObjectArgumentAssemblyTypeName = i4421[2]
  i4420.m_IntArgument = i4421[3]
  i4420.m_FloatArgument = i4421[4]
  i4420.m_StringArgument = i4421[5]
  i4420.m_BoolArgument = !!i4421[6]
  return i4420
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i4422 = root || request.c( 'DraggableItem' )
  var i4423 = data
  i4422.idDrag = i4423[0]
  i4422.isProcess = !!i4423[1]
  i4422.isLose = !!i4423[2]
  i4422.isHide = !!i4423[3]
  return i4422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i4424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i4425 = data
  i4424.m_Alpha = i4425[0]
  i4424.m_Interactable = !!i4425[1]
  i4424.m_BlocksRaycasts = !!i4425[2]
  i4424.m_IgnoreParentGroups = !!i4425[3]
  i4424.enabled = !!i4425[4]
  return i4424
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4426 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4427 = data
  i4426.m_hasFontAssetChanged = !!i4427[0]
  request.r(i4427[1], i4427[2], 0, i4426, 'm_baseMaterial')
  i4426.m_maskOffset = new pc.Vec4( i4427[3], i4427[4], i4427[5], i4427[6] )
  i4426.m_text = i4427[7]
  i4426.m_isRightToLeft = !!i4427[8]
  request.r(i4427[9], i4427[10], 0, i4426, 'm_fontAsset')
  request.r(i4427[11], i4427[12], 0, i4426, 'm_sharedMaterial')
  var i4429 = i4427[13]
  var i4428 = []
  for(var i = 0; i < i4429.length; i += 2) {
  request.r(i4429[i + 0], i4429[i + 1], 2, i4428, '')
  }
  i4426.m_fontSharedMaterials = i4428
  request.r(i4427[14], i4427[15], 0, i4426, 'm_fontMaterial')
  var i4431 = i4427[16]
  var i4430 = []
  for(var i = 0; i < i4431.length; i += 2) {
  request.r(i4431[i + 0], i4431[i + 1], 2, i4430, '')
  }
  i4426.m_fontMaterials = i4430
  i4426.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4427[17], i4427[18], i4427[19], i4427[20])
  i4426.m_fontColor = new pc.Color(i4427[21], i4427[22], i4427[23], i4427[24])
  i4426.m_enableVertexGradient = !!i4427[25]
  i4426.m_colorMode = i4427[26]
  i4426.m_fontColorGradient = request.d('TMPro.VertexGradient', i4427[27], i4426.m_fontColorGradient)
  request.r(i4427[28], i4427[29], 0, i4426, 'm_fontColorGradientPreset')
  request.r(i4427[30], i4427[31], 0, i4426, 'm_spriteAsset')
  i4426.m_tintAllSprites = !!i4427[32]
  request.r(i4427[33], i4427[34], 0, i4426, 'm_StyleSheet')
  i4426.m_TextStyleHashCode = i4427[35]
  i4426.m_overrideHtmlColors = !!i4427[36]
  i4426.m_faceColor = UnityEngine.Color32.ConstructColor(i4427[37], i4427[38], i4427[39], i4427[40])
  i4426.m_fontSize = i4427[41]
  i4426.m_fontSizeBase = i4427[42]
  i4426.m_fontWeight = i4427[43]
  i4426.m_enableAutoSizing = !!i4427[44]
  i4426.m_fontSizeMin = i4427[45]
  i4426.m_fontSizeMax = i4427[46]
  i4426.m_fontStyle = i4427[47]
  i4426.m_HorizontalAlignment = i4427[48]
  i4426.m_VerticalAlignment = i4427[49]
  i4426.m_textAlignment = i4427[50]
  i4426.m_characterSpacing = i4427[51]
  i4426.m_wordSpacing = i4427[52]
  i4426.m_lineSpacing = i4427[53]
  i4426.m_lineSpacingMax = i4427[54]
  i4426.m_paragraphSpacing = i4427[55]
  i4426.m_charWidthMaxAdj = i4427[56]
  i4426.m_enableWordWrapping = !!i4427[57]
  i4426.m_wordWrappingRatios = i4427[58]
  i4426.m_overflowMode = i4427[59]
  request.r(i4427[60], i4427[61], 0, i4426, 'm_linkedTextComponent')
  request.r(i4427[62], i4427[63], 0, i4426, 'parentLinkedComponent')
  i4426.m_enableKerning = !!i4427[64]
  i4426.m_enableExtraPadding = !!i4427[65]
  i4426.checkPaddingRequired = !!i4427[66]
  i4426.m_isRichText = !!i4427[67]
  i4426.m_parseCtrlCharacters = !!i4427[68]
  i4426.m_isOrthographic = !!i4427[69]
  i4426.m_isCullingEnabled = !!i4427[70]
  i4426.m_horizontalMapping = i4427[71]
  i4426.m_verticalMapping = i4427[72]
  i4426.m_uvLineOffset = i4427[73]
  i4426.m_geometrySortingOrder = i4427[74]
  i4426.m_IsTextObjectScaleStatic = !!i4427[75]
  i4426.m_VertexBufferAutoSizeReduction = !!i4427[76]
  i4426.m_useMaxVisibleDescender = !!i4427[77]
  i4426.m_pageToDisplay = i4427[78]
  i4426.m_margin = new pc.Vec4( i4427[79], i4427[80], i4427[81], i4427[82] )
  i4426.m_isUsingLegacyAnimationComponent = !!i4427[83]
  i4426.m_isVolumetricText = !!i4427[84]
  i4426.m_Maskable = !!i4427[85]
  request.r(i4427[86], i4427[87], 0, i4426, 'm_Material')
  i4426.m_Color = new pc.Color(i4427[88], i4427[89], i4427[90], i4427[91])
  i4426.m_RaycastTarget = !!i4427[92]
  i4426.m_RaycastPadding = new pc.Vec4( i4427[93], i4427[94], i4427[95], i4427[96] )
  return i4426
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i4434 = root || request.c( 'TMPro.VertexGradient' )
  var i4435 = data
  i4434.topLeft = new pc.Color(i4435[0], i4435[1], i4435[2], i4435[3])
  i4434.topRight = new pc.Color(i4435[4], i4435[5], i4435[6], i4435[7])
  i4434.bottomLeft = new pc.Color(i4435[8], i4435[9], i4435[10], i4435[11])
  i4434.bottomRight = new pc.Color(i4435[12], i4435[13], i4435[14], i4435[15])
  return i4434
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i4436 = root || request.c( 'UnityEngine.UI.Mask' )
  var i4437 = data
  i4436.m_ShowMaskGraphic = !!i4437[0]
  return i4436
}

Deserializers["AudioController"] = function (request, data, root) {
  var i4438 = root || request.c( 'AudioController' )
  var i4439 = data
  request.r(i4439[0], i4439[1], 0, i4438, 'bgmSource')
  request.r(i4439[2], i4439[3], 0, i4438, 'sfxSource')
  var i4441 = i4439[4]
  var i4440 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i4441.length; i += 1) {
    i4440.add(request.d('AudioEntry', i4441[i + 0]));
  }
  i4438.audioEntries = i4440
  return i4438
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i4444 = root || request.c( 'AudioEntry' )
  var i4445 = data
  i4444.key = i4445[0]
  request.r(i4445[1], i4445[2], 0, i4444, 'clip')
  i4444.volume = i4445[3]
  return i4444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4447 = data
  i4446.ambientIntensity = i4447[0]
  i4446.reflectionIntensity = i4447[1]
  i4446.ambientMode = i4447[2]
  i4446.ambientLight = new pc.Color(i4447[3], i4447[4], i4447[5], i4447[6])
  i4446.ambientSkyColor = new pc.Color(i4447[7], i4447[8], i4447[9], i4447[10])
  i4446.ambientGroundColor = new pc.Color(i4447[11], i4447[12], i4447[13], i4447[14])
  i4446.ambientEquatorColor = new pc.Color(i4447[15], i4447[16], i4447[17], i4447[18])
  i4446.fogColor = new pc.Color(i4447[19], i4447[20], i4447[21], i4447[22])
  i4446.fogEndDistance = i4447[23]
  i4446.fogStartDistance = i4447[24]
  i4446.fogDensity = i4447[25]
  i4446.fog = !!i4447[26]
  request.r(i4447[27], i4447[28], 0, i4446, 'skybox')
  i4446.fogMode = i4447[29]
  var i4449 = i4447[30]
  var i4448 = []
  for(var i = 0; i < i4449.length; i += 1) {
    i4448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4449[i + 0]) );
  }
  i4446.lightmaps = i4448
  i4446.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4447[31], i4446.lightProbes)
  i4446.lightmapsMode = i4447[32]
  i4446.mixedBakeMode = i4447[33]
  i4446.environmentLightingMode = i4447[34]
  i4446.ambientProbe = new pc.SphericalHarmonicsL2(i4447[35])
  i4446.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4447[36])
  i4446.useReferenceAmbientProbe = !!i4447[37]
  request.r(i4447[38], i4447[39], 0, i4446, 'customReflection')
  request.r(i4447[40], i4447[41], 0, i4446, 'defaultReflection')
  i4446.defaultReflectionMode = i4447[42]
  i4446.defaultReflectionResolution = i4447[43]
  i4446.sunLightObjectId = i4447[44]
  i4446.pixelLightCount = i4447[45]
  i4446.defaultReflectionHDR = !!i4447[46]
  i4446.hasLightDataAsset = !!i4447[47]
  i4446.hasManualGenerate = !!i4447[48]
  return i4446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4453 = data
  request.r(i4453[0], i4453[1], 0, i4452, 'lightmapColor')
  request.r(i4453[2], i4453[3], 0, i4452, 'lightmapDirection')
  return i4452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4454 = root || new UnityEngine.LightProbes()
  var i4455 = data
  return i4454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4463 = data
  var i4465 = i4463[0]
  var i4464 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4465.length; i += 1) {
    i4464.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4465[i + 0]));
  }
  i4462.ShaderCompilationErrors = i4464
  i4462.name = i4463[1]
  i4462.guid = i4463[2]
  var i4467 = i4463[3]
  var i4466 = []
  for(var i = 0; i < i4467.length; i += 1) {
    i4466.push( i4467[i + 0] );
  }
  i4462.shaderDefinedKeywords = i4466
  var i4469 = i4463[4]
  var i4468 = []
  for(var i = 0; i < i4469.length; i += 1) {
    i4468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4469[i + 0]) );
  }
  i4462.passes = i4468
  var i4471 = i4463[5]
  var i4470 = []
  for(var i = 0; i < i4471.length; i += 1) {
    i4470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4471[i + 0]) );
  }
  i4462.usePasses = i4470
  var i4473 = i4463[6]
  var i4472 = []
  for(var i = 0; i < i4473.length; i += 1) {
    i4472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4473[i + 0]) );
  }
  i4462.defaultParameterValues = i4472
  request.r(i4463[7], i4463[8], 0, i4462, 'unityFallbackShader')
  i4462.readDepth = !!i4463[9]
  i4462.isCreatedByShaderGraph = !!i4463[10]
  i4462.disableBatching = !!i4463[11]
  i4462.compiled = !!i4463[12]
  return i4462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4477 = data
  i4476.shaderName = i4477[0]
  i4476.errorMessage = i4477[1]
  return i4476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4480 = root || new pc.UnityShaderPass()
  var i4481 = data
  i4480.id = i4481[0]
  i4480.subShaderIndex = i4481[1]
  i4480.name = i4481[2]
  i4480.passType = i4481[3]
  i4480.grabPassTextureName = i4481[4]
  i4480.usePass = !!i4481[5]
  i4480.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4481[6], i4480.zTest)
  i4480.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4481[7], i4480.zWrite)
  i4480.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4481[8], i4480.culling)
  i4480.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4481[9], i4480.blending)
  i4480.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4481[10], i4480.alphaBlending)
  i4480.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4481[11], i4480.colorWriteMask)
  i4480.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4481[12], i4480.offsetUnits)
  i4480.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4481[13], i4480.offsetFactor)
  i4480.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4481[14], i4480.stencilRef)
  i4480.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4481[15], i4480.stencilReadMask)
  i4480.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4481[16], i4480.stencilWriteMask)
  i4480.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4481[17], i4480.stencilOp)
  i4480.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4481[18], i4480.stencilOpFront)
  i4480.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4481[19], i4480.stencilOpBack)
  var i4483 = i4481[20]
  var i4482 = []
  for(var i = 0; i < i4483.length; i += 1) {
    i4482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4483[i + 0]) );
  }
  i4480.tags = i4482
  var i4485 = i4481[21]
  var i4484 = []
  for(var i = 0; i < i4485.length; i += 1) {
    i4484.push( i4485[i + 0] );
  }
  i4480.passDefinedKeywords = i4484
  var i4487 = i4481[22]
  var i4486 = []
  for(var i = 0; i < i4487.length; i += 1) {
    i4486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4487[i + 0]) );
  }
  i4480.passDefinedKeywordGroups = i4486
  var i4489 = i4481[23]
  var i4488 = []
  for(var i = 0; i < i4489.length; i += 1) {
    i4488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4489[i + 0]) );
  }
  i4480.variants = i4488
  var i4491 = i4481[24]
  var i4490 = []
  for(var i = 0; i < i4491.length; i += 1) {
    i4490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4491[i + 0]) );
  }
  i4480.excludedVariants = i4490
  i4480.hasDepthReader = !!i4481[25]
  return i4480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4493 = data
  i4492.val = i4493[0]
  i4492.name = i4493[1]
  return i4492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4495 = data
  i4494.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4495[0], i4494.src)
  i4494.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4495[1], i4494.dst)
  i4494.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4495[2], i4494.op)
  return i4494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4497 = data
  i4496.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4497[0], i4496.pass)
  i4496.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4497[1], i4496.fail)
  i4496.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4497[2], i4496.zFail)
  i4496.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4497[3], i4496.comp)
  return i4496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4501 = data
  i4500.name = i4501[0]
  i4500.value = i4501[1]
  return i4500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4505 = data
  var i4507 = i4505[0]
  var i4506 = []
  for(var i = 0; i < i4507.length; i += 1) {
    i4506.push( i4507[i + 0] );
  }
  i4504.keywords = i4506
  i4504.hasDiscard = !!i4505[1]
  return i4504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4511 = data
  i4510.passId = i4511[0]
  i4510.subShaderIndex = i4511[1]
  var i4513 = i4511[2]
  var i4512 = []
  for(var i = 0; i < i4513.length; i += 1) {
    i4512.push( i4513[i + 0] );
  }
  i4510.keywords = i4512
  i4510.vertexProgram = i4511[3]
  i4510.fragmentProgram = i4511[4]
  i4510.exportedForWebGl2 = !!i4511[5]
  i4510.readDepth = !!i4511[6]
  return i4510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4517 = data
  request.r(i4517[0], i4517[1], 0, i4516, 'shader')
  i4516.pass = i4517[2]
  return i4516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4521 = data
  i4520.name = i4521[0]
  i4520.type = i4521[1]
  i4520.value = new pc.Vec4( i4521[2], i4521[3], i4521[4], i4521[5] )
  i4520.textureValue = i4521[6]
  i4520.shaderPropertyFlag = i4521[7]
  return i4520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4523 = data
  i4522.name = i4523[0]
  request.r(i4523[1], i4523[2], 0, i4522, 'texture')
  i4522.aabb = i4523[3]
  i4522.vertices = i4523[4]
  i4522.triangles = i4523[5]
  i4522.textureRect = UnityEngine.Rect.MinMaxRect(i4523[6], i4523[7], i4523[8], i4523[9])
  i4522.packedRect = UnityEngine.Rect.MinMaxRect(i4523[10], i4523[11], i4523[12], i4523[13])
  i4522.border = new pc.Vec4( i4523[14], i4523[15], i4523[16], i4523[17] )
  i4522.transparency = i4523[18]
  i4522.bounds = i4523[19]
  i4522.pixelsPerUnit = i4523[20]
  i4522.textureWidth = i4523[21]
  i4522.textureHeight = i4523[22]
  i4522.nativeSize = new pc.Vec2( i4523[23], i4523[24] )
  i4522.pivot = new pc.Vec2( i4523[25], i4523[26] )
  i4522.textureRectOffset = new pc.Vec2( i4523[27], i4523[28] )
  return i4522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4525 = data
  i4524.name = i4525[0]
  return i4524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4527 = data
  i4526.name = i4527[0]
  i4526.ascent = i4527[1]
  i4526.originalLineHeight = i4527[2]
  i4526.fontSize = i4527[3]
  var i4529 = i4527[4]
  var i4528 = []
  for(var i = 0; i < i4529.length; i += 1) {
    i4528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4529[i + 0]) );
  }
  i4526.characterInfo = i4528
  request.r(i4527[5], i4527[6], 0, i4526, 'texture')
  i4526.originalFontSize = i4527[7]
  return i4526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4533 = data
  i4532.index = i4533[0]
  i4532.advance = i4533[1]
  i4532.bearing = i4533[2]
  i4532.glyphWidth = i4533[3]
  i4532.glyphHeight = i4533[4]
  i4532.minX = i4533[5]
  i4532.maxX = i4533[6]
  i4532.minY = i4533[7]
  i4532.maxY = i4533[8]
  i4532.uvBottomLeftX = i4533[9]
  i4532.uvBottomLeftY = i4533[10]
  i4532.uvBottomRightX = i4533[11]
  i4532.uvBottomRightY = i4533[12]
  i4532.uvTopLeftX = i4533[13]
  i4532.uvTopLeftY = i4533[14]
  i4532.uvTopRightX = i4533[15]
  i4532.uvTopRightY = i4533[16]
  return i4532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4535 = data
  i4534.name = i4535[0]
  i4534.bytes64 = i4535[1]
  i4534.data = i4535[2]
  return i4534
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i4536 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i4537 = data
  var i4539 = i4537[0]
  var i4538 = []
  for(var i = 0; i < i4539.length; i += 2) {
  request.r(i4539[i + 0], i4539[i + 1], 2, i4538, '')
  }
  i4536.atlasAssets = i4538
  i4536.scale = i4537[1]
  request.r(i4537[2], i4537[3], 0, i4536, 'skeletonJSON')
  i4536.isUpgradingBlendModeMaterials = !!i4537[4]
  i4536.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i4537[5], i4536.blendModeMaterials)
  var i4541 = i4537[6]
  var i4540 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i4541.length; i += 2) {
  request.r(i4541[i + 0], i4541[i + 1], 1, i4540, '')
  }
  i4536.skeletonDataModifiers = i4540
  var i4543 = i4537[7]
  var i4542 = []
  for(var i = 0; i < i4543.length; i += 1) {
    i4542.push( i4543[i + 0] );
  }
  i4536.fromAnimation = i4542
  var i4545 = i4537[8]
  var i4544 = []
  for(var i = 0; i < i4545.length; i += 1) {
    i4544.push( i4545[i + 0] );
  }
  i4536.toAnimation = i4544
  i4536.duration = i4537[9]
  i4536.defaultMix = i4537[10]
  request.r(i4537[11], i4537[12], 0, i4536, 'controller')
  return i4536
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i4548 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i4549 = data
  i4548.applyAdditiveMaterial = !!i4549[0]
  var i4551 = i4549[1]
  var i4550 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4551.length; i += 1) {
    i4550.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4551[i + 0]));
  }
  i4548.additiveMaterials = i4550
  var i4553 = i4549[2]
  var i4552 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4553.length; i += 1) {
    i4552.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4553[i + 0]));
  }
  i4548.multiplyMaterials = i4552
  var i4555 = i4549[3]
  var i4554 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4555.length; i += 1) {
    i4554.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4555[i + 0]));
  }
  i4548.screenMaterials = i4554
  i4548.requiresBlendModeMaterials = !!i4549[4]
  return i4548
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i4558 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i4559 = data
  i4558.pageName = i4559[0]
  request.r(i4559[1], i4559[2], 0, i4558, 'material')
  return i4558
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i4562 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i4563 = data
  request.r(i4563[0], i4563[1], 0, i4562, 'atlasFile')
  var i4565 = i4563[2]
  var i4564 = []
  for(var i = 0; i < i4565.length; i += 2) {
  request.r(i4565[i + 0], i4565[i + 1], 2, i4564, '')
  }
  i4562.materials = i4564
  i4562.textureLoadingMode = i4563[3]
  request.r(i4563[4], i4563[5], 0, i4562, 'onDemandTextureLoader')
  return i4562
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4566 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4567 = data
  request.r(i4567[0], i4567[1], 0, i4566, 'atlas')
  i4566.normalStyle = i4567[2]
  i4566.normalSpacingOffset = i4567[3]
  i4566.boldStyle = i4567[4]
  i4566.boldSpacing = i4567[5]
  i4566.italicStyle = i4567[6]
  i4566.tabSize = i4567[7]
  i4566.hashCode = i4567[8]
  request.r(i4567[9], i4567[10], 0, i4566, 'material')
  i4566.materialHashCode = i4567[11]
  i4566.m_Version = i4567[12]
  i4566.m_SourceFontFileGUID = i4567[13]
  request.r(i4567[14], i4567[15], 0, i4566, 'm_SourceFontFile_EditorRef')
  request.r(i4567[16], i4567[17], 0, i4566, 'm_SourceFontFile')
  i4566.m_AtlasPopulationMode = i4567[18]
  i4566.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4567[19], i4566.m_FaceInfo)
  var i4569 = i4567[20]
  var i4568 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4569.length; i += 1) {
    i4568.add(request.d('UnityEngine.TextCore.Glyph', i4569[i + 0]));
  }
  i4566.m_GlyphTable = i4568
  var i4571 = i4567[21]
  var i4570 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4571.length; i += 1) {
    i4570.add(request.d('TMPro.TMP_Character', i4571[i + 0]));
  }
  i4566.m_CharacterTable = i4570
  var i4573 = i4567[22]
  var i4572 = []
  for(var i = 0; i < i4573.length; i += 2) {
  request.r(i4573[i + 0], i4573[i + 1], 2, i4572, '')
  }
  i4566.m_AtlasTextures = i4572
  i4566.m_AtlasTextureIndex = i4567[23]
  i4566.m_IsMultiAtlasTexturesEnabled = !!i4567[24]
  i4566.m_ClearDynamicDataOnBuild = !!i4567[25]
  var i4575 = i4567[26]
  var i4574 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4575.length; i += 1) {
    i4574.add(request.d('UnityEngine.TextCore.GlyphRect', i4575[i + 0]));
  }
  i4566.m_UsedGlyphRects = i4574
  var i4577 = i4567[27]
  var i4576 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4577.length; i += 1) {
    i4576.add(request.d('UnityEngine.TextCore.GlyphRect', i4577[i + 0]));
  }
  i4566.m_FreeGlyphRects = i4576
  i4566.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4567[28], i4566.m_fontInfo)
  i4566.m_AtlasWidth = i4567[29]
  i4566.m_AtlasHeight = i4567[30]
  i4566.m_AtlasPadding = i4567[31]
  i4566.m_AtlasRenderMode = i4567[32]
  var i4579 = i4567[33]
  var i4578 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4579.length; i += 1) {
    i4578.add(request.d('TMPro.TMP_Glyph', i4579[i + 0]));
  }
  i4566.m_glyphInfoList = i4578
  i4566.m_KerningTable = request.d('TMPro.KerningTable', i4567[34], i4566.m_KerningTable)
  i4566.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4567[35], i4566.m_FontFeatureTable)
  var i4581 = i4567[36]
  var i4580 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4581.length; i += 2) {
  request.r(i4581[i + 0], i4581[i + 1], 1, i4580, '')
  }
  i4566.fallbackFontAssets = i4580
  var i4583 = i4567[37]
  var i4582 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4583.length; i += 2) {
  request.r(i4583[i + 0], i4583[i + 1], 1, i4582, '')
  }
  i4566.m_FallbackFontAssetTable = i4582
  i4566.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4567[38], i4566.m_CreationSettings)
  var i4585 = i4567[39]
  var i4584 = []
  for(var i = 0; i < i4585.length; i += 1) {
    i4584.push( request.d('TMPro.TMP_FontWeightPair', i4585[i + 0]) );
  }
  i4566.m_FontWeightTable = i4584
  var i4587 = i4567[40]
  var i4586 = []
  for(var i = 0; i < i4587.length; i += 1) {
    i4586.push( request.d('TMPro.TMP_FontWeightPair', i4587[i + 0]) );
  }
  i4566.fontWeights = i4586
  return i4566
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4588 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4589 = data
  i4588.m_FaceIndex = i4589[0]
  i4588.m_FamilyName = i4589[1]
  i4588.m_StyleName = i4589[2]
  i4588.m_PointSize = i4589[3]
  i4588.m_Scale = i4589[4]
  i4588.m_UnitsPerEM = i4589[5]
  i4588.m_LineHeight = i4589[6]
  i4588.m_AscentLine = i4589[7]
  i4588.m_CapLine = i4589[8]
  i4588.m_MeanLine = i4589[9]
  i4588.m_Baseline = i4589[10]
  i4588.m_DescentLine = i4589[11]
  i4588.m_SuperscriptOffset = i4589[12]
  i4588.m_SuperscriptSize = i4589[13]
  i4588.m_SubscriptOffset = i4589[14]
  i4588.m_SubscriptSize = i4589[15]
  i4588.m_UnderlineOffset = i4589[16]
  i4588.m_UnderlineThickness = i4589[17]
  i4588.m_StrikethroughOffset = i4589[18]
  i4588.m_StrikethroughThickness = i4589[19]
  i4588.m_TabWidth = i4589[20]
  return i4588
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4592 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4593 = data
  i4592.m_Index = i4593[0]
  i4592.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4593[1], i4592.m_Metrics)
  i4592.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4593[2], i4592.m_GlyphRect)
  i4592.m_Scale = i4593[3]
  i4592.m_AtlasIndex = i4593[4]
  i4592.m_ClassDefinitionType = i4593[5]
  return i4592
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4594 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4595 = data
  i4594.m_Width = i4595[0]
  i4594.m_Height = i4595[1]
  i4594.m_HorizontalBearingX = i4595[2]
  i4594.m_HorizontalBearingY = i4595[3]
  i4594.m_HorizontalAdvance = i4595[4]
  return i4594
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4596 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4597 = data
  i4596.m_X = i4597[0]
  i4596.m_Y = i4597[1]
  i4596.m_Width = i4597[2]
  i4596.m_Height = i4597[3]
  return i4596
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4600 = root || request.c( 'TMPro.TMP_Character' )
  var i4601 = data
  i4600.m_ElementType = i4601[0]
  i4600.m_Unicode = i4601[1]
  i4600.m_GlyphIndex = i4601[2]
  i4600.m_Scale = i4601[3]
  return i4600
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4606 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4607 = data
  i4606.Name = i4607[0]
  i4606.PointSize = i4607[1]
  i4606.Scale = i4607[2]
  i4606.CharacterCount = i4607[3]
  i4606.LineHeight = i4607[4]
  i4606.Baseline = i4607[5]
  i4606.Ascender = i4607[6]
  i4606.CapHeight = i4607[7]
  i4606.Descender = i4607[8]
  i4606.CenterLine = i4607[9]
  i4606.SuperscriptOffset = i4607[10]
  i4606.SubscriptOffset = i4607[11]
  i4606.SubSize = i4607[12]
  i4606.Underline = i4607[13]
  i4606.UnderlineThickness = i4607[14]
  i4606.strikethrough = i4607[15]
  i4606.strikethroughThickness = i4607[16]
  i4606.TabWidth = i4607[17]
  i4606.Padding = i4607[18]
  i4606.AtlasWidth = i4607[19]
  i4606.AtlasHeight = i4607[20]
  return i4606
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4610 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4611 = data
  i4610.id = i4611[0]
  i4610.x = i4611[1]
  i4610.y = i4611[2]
  i4610.width = i4611[3]
  i4610.height = i4611[4]
  i4610.xOffset = i4611[5]
  i4610.yOffset = i4611[6]
  i4610.xAdvance = i4611[7]
  i4610.scale = i4611[8]
  return i4610
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4612 = root || request.c( 'TMPro.KerningTable' )
  var i4613 = data
  var i4615 = i4613[0]
  var i4614 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4615.length; i += 1) {
    i4614.add(request.d('TMPro.KerningPair', i4615[i + 0]));
  }
  i4612.kerningPairs = i4614
  return i4612
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4618 = root || request.c( 'TMPro.KerningPair' )
  var i4619 = data
  i4618.xOffset = i4619[0]
  i4618.m_FirstGlyph = i4619[1]
  i4618.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4619[2], i4618.m_FirstGlyphAdjustments)
  i4618.m_SecondGlyph = i4619[3]
  i4618.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4619[4], i4618.m_SecondGlyphAdjustments)
  i4618.m_IgnoreSpacingAdjustments = !!i4619[5]
  return i4618
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4620 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4621 = data
  var i4623 = i4621[0]
  var i4622 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4623.length; i += 1) {
    i4622.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i4623[i + 0]));
  }
  i4620.m_GlyphPairAdjustmentRecords = i4622
  return i4620
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4626 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i4627 = data
  i4626.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4627[0], i4626.m_FirstAdjustmentRecord)
  i4626.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4627[1], i4626.m_SecondAdjustmentRecord)
  i4626.m_FeatureLookupFlags = i4627[2]
  return i4626
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4630 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4631 = data
  i4630.sourceFontFileName = i4631[0]
  i4630.sourceFontFileGUID = i4631[1]
  i4630.pointSizeSamplingMode = i4631[2]
  i4630.pointSize = i4631[3]
  i4630.padding = i4631[4]
  i4630.packingMode = i4631[5]
  i4630.atlasWidth = i4631[6]
  i4630.atlasHeight = i4631[7]
  i4630.characterSetSelectionMode = i4631[8]
  i4630.characterSequence = i4631[9]
  i4630.referencedFontAssetGUID = i4631[10]
  i4630.referencedTextAssetGUID = i4631[11]
  i4630.fontStyle = i4631[12]
  i4630.fontStyleModifier = i4631[13]
  i4630.renderMode = i4631[14]
  i4630.includeFontFeatures = !!i4631[15]
  return i4630
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4634 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4635 = data
  request.r(i4635[0], i4635[1], 0, i4634, 'regularTypeface')
  request.r(i4635[2], i4635[3], 0, i4634, 'italicTypeface')
  return i4634
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4636 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4637 = data
  i4636.useSafeMode = !!i4637[0]
  i4636.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4637[1], i4636.safeModeOptions)
  i4636.timeScale = i4637[2]
  i4636.unscaledTimeScale = i4637[3]
  i4636.useSmoothDeltaTime = !!i4637[4]
  i4636.maxSmoothUnscaledTime = i4637[5]
  i4636.rewindCallbackMode = i4637[6]
  i4636.showUnityEditorReport = !!i4637[7]
  i4636.logBehaviour = i4637[8]
  i4636.drawGizmos = !!i4637[9]
  i4636.defaultRecyclable = !!i4637[10]
  i4636.defaultAutoPlay = i4637[11]
  i4636.defaultUpdateType = i4637[12]
  i4636.defaultTimeScaleIndependent = !!i4637[13]
  i4636.defaultEaseType = i4637[14]
  i4636.defaultEaseOvershootOrAmplitude = i4637[15]
  i4636.defaultEasePeriod = i4637[16]
  i4636.defaultAutoKill = !!i4637[17]
  i4636.defaultLoopType = i4637[18]
  i4636.debugMode = !!i4637[19]
  i4636.debugStoreTargetId = !!i4637[20]
  i4636.showPreviewPanel = !!i4637[21]
  i4636.storeSettingsLocation = i4637[22]
  i4636.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4637[23], i4636.modules)
  i4636.createASMDEF = !!i4637[24]
  i4636.showPlayingTweens = !!i4637[25]
  i4636.showPausedTweens = !!i4637[26]
  return i4636
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4638 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4639 = data
  i4638.logBehaviour = i4639[0]
  i4638.nestedTweenFailureBehaviour = i4639[1]
  return i4638
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4640 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4641 = data
  i4640.showPanel = !!i4641[0]
  i4640.audioEnabled = !!i4641[1]
  i4640.physicsEnabled = !!i4641[2]
  i4640.physics2DEnabled = !!i4641[3]
  i4640.spriteEnabled = !!i4641[4]
  i4640.uiEnabled = !!i4641[5]
  i4640.textMeshProEnabled = !!i4641[6]
  i4640.tk2DEnabled = !!i4641[7]
  i4640.deAudioEnabled = !!i4641[8]
  i4640.deUnityExtendedEnabled = !!i4641[9]
  i4640.epoOutlineEnabled = !!i4641[10]
  return i4640
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4642 = root || request.c( 'TMPro.TMP_Settings' )
  var i4643 = data
  i4642.m_enableWordWrapping = !!i4643[0]
  i4642.m_enableKerning = !!i4643[1]
  i4642.m_enableExtraPadding = !!i4643[2]
  i4642.m_enableTintAllSprites = !!i4643[3]
  i4642.m_enableParseEscapeCharacters = !!i4643[4]
  i4642.m_EnableRaycastTarget = !!i4643[5]
  i4642.m_GetFontFeaturesAtRuntime = !!i4643[6]
  i4642.m_missingGlyphCharacter = i4643[7]
  i4642.m_warningsDisabled = !!i4643[8]
  request.r(i4643[9], i4643[10], 0, i4642, 'm_defaultFontAsset')
  i4642.m_defaultFontAssetPath = i4643[11]
  i4642.m_defaultFontSize = i4643[12]
  i4642.m_defaultAutoSizeMinRatio = i4643[13]
  i4642.m_defaultAutoSizeMaxRatio = i4643[14]
  i4642.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4643[15], i4643[16] )
  i4642.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4643[17], i4643[18] )
  i4642.m_autoSizeTextContainer = !!i4643[19]
  i4642.m_IsTextObjectScaleStatic = !!i4643[20]
  var i4645 = i4643[21]
  var i4644 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4645.length; i += 2) {
  request.r(i4645[i + 0], i4645[i + 1], 1, i4644, '')
  }
  i4642.m_fallbackFontAssets = i4644
  i4642.m_matchMaterialPreset = !!i4643[22]
  request.r(i4643[23], i4643[24], 0, i4642, 'm_defaultSpriteAsset')
  i4642.m_defaultSpriteAssetPath = i4643[25]
  i4642.m_enableEmojiSupport = !!i4643[26]
  i4642.m_MissingCharacterSpriteUnicode = i4643[27]
  i4642.m_defaultColorGradientPresetsPath = i4643[28]
  request.r(i4643[29], i4643[30], 0, i4642, 'm_defaultStyleSheet')
  i4642.m_StyleSheetsResourcePath = i4643[31]
  request.r(i4643[32], i4643[33], 0, i4642, 'm_leadingCharacters')
  request.r(i4643[34], i4643[35], 0, i4642, 'm_followingCharacters')
  i4642.m_UseModernHangulLineBreakingRules = !!i4643[36]
  return i4642
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4646 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4647 = data
  request.r(i4647[0], i4647[1], 0, i4646, 'spriteSheet')
  var i4649 = i4647[2]
  var i4648 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4649.length; i += 1) {
    i4648.add(request.d('TMPro.TMP_Sprite', i4649[i + 0]));
  }
  i4646.spriteInfoList = i4648
  var i4651 = i4647[3]
  var i4650 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4651.length; i += 2) {
  request.r(i4651[i + 0], i4651[i + 1], 1, i4650, '')
  }
  i4646.fallbackSpriteAssets = i4650
  i4646.hashCode = i4647[4]
  request.r(i4647[5], i4647[6], 0, i4646, 'material')
  i4646.materialHashCode = i4647[7]
  i4646.m_Version = i4647[8]
  i4646.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4647[9], i4646.m_FaceInfo)
  var i4653 = i4647[10]
  var i4652 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4653.length; i += 1) {
    i4652.add(request.d('TMPro.TMP_SpriteCharacter', i4653[i + 0]));
  }
  i4646.m_SpriteCharacterTable = i4652
  var i4655 = i4647[11]
  var i4654 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4655.length; i += 1) {
    i4654.add(request.d('TMPro.TMP_SpriteGlyph', i4655[i + 0]));
  }
  i4646.m_SpriteGlyphTable = i4654
  return i4646
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4658 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4659 = data
  i4658.name = i4659[0]
  i4658.hashCode = i4659[1]
  i4658.unicode = i4659[2]
  i4658.pivot = new pc.Vec2( i4659[3], i4659[4] )
  request.r(i4659[5], i4659[6], 0, i4658, 'sprite')
  i4658.id = i4659[7]
  i4658.x = i4659[8]
  i4658.y = i4659[9]
  i4658.width = i4659[10]
  i4658.height = i4659[11]
  i4658.xOffset = i4659[12]
  i4658.yOffset = i4659[13]
  i4658.xAdvance = i4659[14]
  i4658.scale = i4659[15]
  return i4658
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4664 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4665 = data
  i4664.m_Name = i4665[0]
  i4664.m_HashCode = i4665[1]
  i4664.m_ElementType = i4665[2]
  i4664.m_Unicode = i4665[3]
  i4664.m_GlyphIndex = i4665[4]
  i4664.m_Scale = i4665[5]
  return i4664
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4668 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4669 = data
  request.r(i4669[0], i4669[1], 0, i4668, 'sprite')
  i4668.m_Index = i4669[2]
  i4668.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4669[3], i4668.m_Metrics)
  i4668.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4669[4], i4668.m_GlyphRect)
  i4668.m_Scale = i4669[5]
  i4668.m_AtlasIndex = i4669[6]
  i4668.m_ClassDefinitionType = i4669[7]
  return i4668
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4670 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4671 = data
  var i4673 = i4671[0]
  var i4672 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4673.length; i += 1) {
    i4672.add(request.d('TMPro.TMP_Style', i4673[i + 0]));
  }
  i4670.m_StyleList = i4672
  return i4670
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4676 = root || request.c( 'TMPro.TMP_Style' )
  var i4677 = data
  i4676.m_Name = i4677[0]
  i4676.m_HashCode = i4677[1]
  i4676.m_OpeningDefinition = i4677[2]
  i4676.m_ClosingDefinition = i4677[3]
  i4676.m_OpeningTagArray = i4677[4]
  i4676.m_ClosingTagArray = i4677[5]
  i4676.m_OpeningTagUnicodeArray = i4677[6]
  i4676.m_ClosingTagUnicodeArray = i4677[7]
  return i4676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4679 = data
  var i4681 = i4679[0]
  var i4680 = []
  for(var i = 0; i < i4681.length; i += 1) {
    i4680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4681[i + 0]) );
  }
  i4678.files = i4680
  i4678.componentToPrefabIds = i4679[1]
  return i4678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4685 = data
  i4684.path = i4685[0]
  request.r(i4685[1], i4685[2], 0, i4684, 'unityObject')
  return i4684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4687 = data
  var i4689 = i4687[0]
  var i4688 = []
  for(var i = 0; i < i4689.length; i += 1) {
    i4688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4689[i + 0]) );
  }
  i4686.scriptsExecutionOrder = i4688
  var i4691 = i4687[1]
  var i4690 = []
  for(var i = 0; i < i4691.length; i += 1) {
    i4690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4691[i + 0]) );
  }
  i4686.sortingLayers = i4690
  var i4693 = i4687[2]
  var i4692 = []
  for(var i = 0; i < i4693.length; i += 1) {
    i4692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4693[i + 0]) );
  }
  i4686.cullingLayers = i4692
  i4686.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4687[3], i4686.timeSettings)
  i4686.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4687[4], i4686.physicsSettings)
  i4686.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4687[5], i4686.physics2DSettings)
  i4686.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4687[6], i4686.qualitySettings)
  i4686.enableRealtimeShadows = !!i4687[7]
  i4686.enableAutoInstancing = !!i4687[8]
  i4686.enableStaticBatching = !!i4687[9]
  i4686.enableDynamicBatching = !!i4687[10]
  i4686.lightmapEncodingQuality = i4687[11]
  i4686.desiredColorSpace = i4687[12]
  var i4695 = i4687[13]
  var i4694 = []
  for(var i = 0; i < i4695.length; i += 1) {
    i4694.push( i4695[i + 0] );
  }
  i4686.allTags = i4694
  return i4686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4699 = data
  i4698.name = i4699[0]
  i4698.value = i4699[1]
  return i4698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4703 = data
  i4702.id = i4703[0]
  i4702.name = i4703[1]
  i4702.value = i4703[2]
  return i4702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4707 = data
  i4706.id = i4707[0]
  i4706.name = i4707[1]
  return i4706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4709 = data
  i4708.fixedDeltaTime = i4709[0]
  i4708.maximumDeltaTime = i4709[1]
  i4708.timeScale = i4709[2]
  i4708.maximumParticleTimestep = i4709[3]
  return i4708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4711 = data
  i4710.gravity = new pc.Vec3( i4711[0], i4711[1], i4711[2] )
  i4710.defaultSolverIterations = i4711[3]
  i4710.bounceThreshold = i4711[4]
  i4710.autoSyncTransforms = !!i4711[5]
  i4710.autoSimulation = !!i4711[6]
  var i4713 = i4711[7]
  var i4712 = []
  for(var i = 0; i < i4713.length; i += 1) {
    i4712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4713[i + 0]) );
  }
  i4710.collisionMatrix = i4712
  return i4710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4717 = data
  i4716.enabled = !!i4717[0]
  i4716.layerId = i4717[1]
  i4716.otherLayerId = i4717[2]
  return i4716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4719 = data
  request.r(i4719[0], i4719[1], 0, i4718, 'material')
  i4718.gravity = new pc.Vec2( i4719[2], i4719[3] )
  i4718.positionIterations = i4719[4]
  i4718.velocityIterations = i4719[5]
  i4718.velocityThreshold = i4719[6]
  i4718.maxLinearCorrection = i4719[7]
  i4718.maxAngularCorrection = i4719[8]
  i4718.maxTranslationSpeed = i4719[9]
  i4718.maxRotationSpeed = i4719[10]
  i4718.baumgarteScale = i4719[11]
  i4718.baumgarteTOIScale = i4719[12]
  i4718.timeToSleep = i4719[13]
  i4718.linearSleepTolerance = i4719[14]
  i4718.angularSleepTolerance = i4719[15]
  i4718.defaultContactOffset = i4719[16]
  i4718.autoSimulation = !!i4719[17]
  i4718.queriesHitTriggers = !!i4719[18]
  i4718.queriesStartInColliders = !!i4719[19]
  i4718.callbacksOnDisable = !!i4719[20]
  i4718.reuseCollisionCallbacks = !!i4719[21]
  i4718.autoSyncTransforms = !!i4719[22]
  var i4721 = i4719[23]
  var i4720 = []
  for(var i = 0; i < i4721.length; i += 1) {
    i4720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4721[i + 0]) );
  }
  i4718.collisionMatrix = i4720
  return i4718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4725 = data
  i4724.enabled = !!i4725[0]
  i4724.layerId = i4725[1]
  i4724.otherLayerId = i4725[2]
  return i4724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4727 = data
  var i4729 = i4727[0]
  var i4728 = []
  for(var i = 0; i < i4729.length; i += 1) {
    i4728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4729[i + 0]) );
  }
  i4726.qualityLevels = i4728
  var i4731 = i4727[1]
  var i4730 = []
  for(var i = 0; i < i4731.length; i += 1) {
    i4730.push( i4731[i + 0] );
  }
  i4726.names = i4730
  i4726.shadows = i4727[2]
  i4726.anisotropicFiltering = i4727[3]
  i4726.antiAliasing = i4727[4]
  i4726.lodBias = i4727[5]
  i4726.shadowCascades = i4727[6]
  i4726.shadowDistance = i4727[7]
  i4726.shadowmaskMode = i4727[8]
  i4726.shadowProjection = i4727[9]
  i4726.shadowResolution = i4727[10]
  i4726.softParticles = !!i4727[11]
  i4726.softVegetation = !!i4727[12]
  i4726.activeColorSpace = i4727[13]
  i4726.desiredColorSpace = i4727[14]
  i4726.masterTextureLimit = i4727[15]
  i4726.maxQueuedFrames = i4727[16]
  i4726.particleRaycastBudget = i4727[17]
  i4726.pixelLightCount = i4727[18]
  i4726.realtimeReflectionProbes = !!i4727[19]
  i4726.shadowCascade2Split = i4727[20]
  i4726.shadowCascade4Split = new pc.Vec3( i4727[21], i4727[22], i4727[23] )
  i4726.streamingMipmapsActive = !!i4727[24]
  i4726.vSyncCount = i4727[25]
  i4726.asyncUploadBufferSize = i4727[26]
  i4726.asyncUploadTimeSlice = i4727[27]
  i4726.billboardsFaceCameraPosition = !!i4727[28]
  i4726.shadowNearPlaneOffset = i4727[29]
  i4726.streamingMipmapsMemoryBudget = i4727[30]
  i4726.maximumLODLevel = i4727[31]
  i4726.streamingMipmapsAddAllCameras = !!i4727[32]
  i4726.streamingMipmapsMaxLevelReduction = i4727[33]
  i4726.streamingMipmapsRenderersPerFrame = i4727[34]
  i4726.resolutionScalingFixedDPIFactor = i4727[35]
  i4726.streamingMipmapsMaxFileIORequests = i4727[36]
  i4726.currentQualityLevel = i4727[37]
  return i4726
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4734 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4735 = data
  i4734.xPlacement = i4735[0]
  i4734.yPlacement = i4735[1]
  i4734.xAdvance = i4735[2]
  i4734.yAdvance = i4735[3]
  return i4734
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4736 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i4737 = data
  i4736.m_GlyphIndex = i4737[0]
  i4736.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i4737[1], i4736.m_GlyphValueRecord)
  return i4736
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i4738 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i4739 = data
  i4738.m_XPlacement = i4739[0]
  i4738.m_YPlacement = i4739[1]
  i4738.m_XAdvance = i4739[2]
  i4738.m_YAdvance = i4739[3]
  return i4738
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[3],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[3],"75":[76],"77":[78],"79":[78],"9":[8],"80":[81],"82":[83],"84":[81],"85":[8],"86":[8],"11":[9],"18":[19,8],"87":[8],"10":[9],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"33":[8],"95":[8],"16":[19,8],"96":[8],"97":[8],"98":[8],"99":[8],"100":[19,8],"101":[8],"102":[6],"103":[6],"7":[6],"104":[6],"105":[3],"106":[3],"107":[108],"109":[3],"110":[111],"112":[8],"113":[19,8],"114":[76],"23":[19,8],"115":[116,76],"117":[76],"118":[76,119],"120":[53],"121":[61],"122":[111],"123":[124],"125":[8],"126":[76,8],"17":[8,19],"127":[8],"128":[19,8],"129":[76],"130":[19,8],"131":[8],"132":[81]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DropZone","UnityEngine.PolygonCollider2D","ClickItem","DG.Tweening.DOTweenAnimation","DraggableItem","UnityEngine.CanvasGroup","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "Minecraft Clone";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "260.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "TBAP_V14_NgocNDL_AnhPD";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1805";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4733";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Minecraft-Clone";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "0757e180-f655-4d5f-855b-45b3c11778eb";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

