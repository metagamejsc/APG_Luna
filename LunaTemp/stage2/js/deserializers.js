var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.JointSpring' )
  var i2271 = data
  i2270.spring = i2271[0]
  i2270.damper = i2271[1]
  i2270.targetPosition = i2271[2]
  return i2270
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2272 = root || request.c( 'UnityEngine.JointMotor' )
  var i2273 = data
  i2272.m_TargetVelocity = i2273[0]
  i2272.m_Force = i2273[1]
  i2272.m_FreeSpin = i2273[2]
  return i2272
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2274 = root || request.c( 'UnityEngine.JointLimits' )
  var i2275 = data
  i2274.m_Min = i2275[0]
  i2274.m_Max = i2275[1]
  i2274.m_Bounciness = i2275[2]
  i2274.m_BounceMinVelocity = i2275[3]
  i2274.m_ContactDistance = i2275[4]
  i2274.minBounce = i2275[5]
  i2274.maxBounce = i2275[6]
  return i2274
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2276 = root || request.c( 'UnityEngine.JointDrive' )
  var i2277 = data
  i2276.m_PositionSpring = i2277[0]
  i2276.m_PositionDamper = i2277[1]
  i2276.m_MaximumForce = i2277[2]
  i2276.m_UseAcceleration = i2277[3]
  return i2276
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2278 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2279 = data
  i2278.m_Spring = i2279[0]
  i2278.m_Damper = i2279[1]
  return i2278
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2281 = data
  i2280.m_Limit = i2281[0]
  i2280.m_Bounciness = i2281[1]
  i2280.m_ContactDistance = i2281[2]
  return i2280
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2283 = data
  i2282.m_ExtremumSlip = i2283[0]
  i2282.m_ExtremumValue = i2283[1]
  i2282.m_AsymptoteSlip = i2283[2]
  i2282.m_AsymptoteValue = i2283[3]
  i2282.m_Stiffness = i2283[4]
  return i2282
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2285 = data
  i2284.m_LowerAngle = i2285[0]
  i2284.m_UpperAngle = i2285[1]
  return i2284
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2287 = data
  i2286.m_MotorSpeed = i2287[0]
  i2286.m_MaximumMotorTorque = i2287[1]
  return i2286
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2288 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2289 = data
  i2288.m_DampingRatio = i2289[0]
  i2288.m_Frequency = i2289[1]
  i2288.m_Angle = i2289[2]
  return i2288
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2290 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2291 = data
  i2290.m_LowerTranslation = i2291[0]
  i2290.m_UpperTranslation = i2291[1]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2293 = data
  i2292.name = i2293[0]
  i2292.width = i2293[1]
  i2292.height = i2293[2]
  i2292.mipmapCount = i2293[3]
  i2292.anisoLevel = i2293[4]
  i2292.filterMode = i2293[5]
  i2292.hdr = !!i2293[6]
  i2292.format = i2293[7]
  i2292.wrapMode = i2293[8]
  i2292.alphaIsTransparency = !!i2293[9]
  i2292.alphaSource = i2293[10]
  i2292.graphicsFormat = i2293[11]
  i2292.sRGBTexture = !!i2293[12]
  i2292.desiredColorSpace = i2293[13]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2294 = root || new pc.UnityMaterial()
  var i2295 = data
  i2294.name = i2295[0]
  request.r(i2295[1], i2295[2], 0, i2294, 'shader')
  i2294.renderQueue = i2295[3]
  i2294.enableInstancing = !!i2295[4]
  var i2297 = i2295[5]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2297[i + 0]) );
  }
  i2294.floatParameters = i2296
  var i2299 = i2295[6]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2299[i + 0]) );
  }
  i2294.colorParameters = i2298
  var i2301 = i2295[7]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2301[i + 0]) );
  }
  i2294.vectorParameters = i2300
  var i2303 = i2295[8]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2303[i + 0]) );
  }
  i2294.textureParameters = i2302
  var i2305 = i2295[9]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2305[i + 0]) );
  }
  i2294.materialFlags = i2304
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2309 = data
  i2308.name = i2309[0]
  i2308.value = i2309[1]
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2313 = data
  i2312.name = i2313[0]
  i2312.value = new pc.Color(i2313[1], i2313[2], i2313[3], i2313[4])
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2317 = data
  i2316.name = i2317[0]
  i2316.value = new pc.Vec4( i2317[1], i2317[2], i2317[3], i2317[4] )
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2321 = data
  i2320.name = i2321[0]
  request.r(i2321[1], i2321[2], 0, i2320, 'value')
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2325 = data
  i2324.name = i2325[0]
  i2324.enabled = !!i2325[1]
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2327 = data
  i2326.name = i2327[0]
  i2326.index = i2327[1]
  i2326.startup = !!i2327[2]
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2329 = data
  i2328.position = new pc.Vec3( i2329[0], i2329[1], i2329[2] )
  i2328.scale = new pc.Vec3( i2329[3], i2329[4], i2329[5] )
  i2328.rotation = new pc.Quat(i2329[6], i2329[7], i2329[8], i2329[9])
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2331 = data
  i2330.enabled = !!i2331[0]
  i2330.aspect = i2331[1]
  i2330.orthographic = !!i2331[2]
  i2330.orthographicSize = i2331[3]
  i2330.backgroundColor = new pc.Color(i2331[4], i2331[5], i2331[6], i2331[7])
  i2330.nearClipPlane = i2331[8]
  i2330.farClipPlane = i2331[9]
  i2330.fieldOfView = i2331[10]
  i2330.depth = i2331[11]
  i2330.clearFlags = i2331[12]
  i2330.cullingMask = i2331[13]
  i2330.rect = i2331[14]
  request.r(i2331[15], i2331[16], 0, i2330, 'targetTexture')
  i2330.usePhysicalProperties = !!i2331[17]
  i2330.focalLength = i2331[18]
  i2330.sensorSize = new pc.Vec2( i2331[19], i2331[20] )
  i2330.lensShift = new pc.Vec2( i2331[21], i2331[22] )
  i2330.gateFit = i2331[23]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2333 = data
  i2332.name = i2333[0]
  i2332.tagId = i2333[1]
  i2332.enabled = !!i2333[2]
  i2332.isStatic = !!i2333[3]
  i2332.layer = i2333[4]
  return i2332
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2335 = data
  request.r(i2335[0], i2335[1], 0, i2334, 'm_FirstSelected')
  i2334.m_sendNavigationEvents = !!i2335[2]
  i2334.m_DragThreshold = i2335[3]
  return i2334
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2336 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2337 = data
  i2336.m_HorizontalAxis = i2337[0]
  i2336.m_VerticalAxis = i2337[1]
  i2336.m_SubmitButton = i2337[2]
  i2336.m_CancelButton = i2337[3]
  i2336.m_InputActionsPerSecond = i2337[4]
  i2336.m_RepeatDelay = i2337[5]
  i2336.m_ForceModuleActive = !!i2337[6]
  i2336.m_SendPointerHoverToParent = !!i2337[7]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2339 = data
  i2338.pivot = new pc.Vec2( i2339[0], i2339[1] )
  i2338.anchorMin = new pc.Vec2( i2339[2], i2339[3] )
  i2338.anchorMax = new pc.Vec2( i2339[4], i2339[5] )
  i2338.sizeDelta = new pc.Vec2( i2339[6], i2339[7] )
  i2338.anchoredPosition3D = new pc.Vec3( i2339[8], i2339[9], i2339[10] )
  i2338.rotation = new pc.Quat(i2339[11], i2339[12], i2339[13], i2339[14])
  i2338.scale = new pc.Vec3( i2339[15], i2339[16], i2339[17] )
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2341 = data
  i2340.enabled = !!i2341[0]
  i2340.planeDistance = i2341[1]
  i2340.referencePixelsPerUnit = i2341[2]
  i2340.isFallbackOverlay = !!i2341[3]
  i2340.renderMode = i2341[4]
  i2340.renderOrder = i2341[5]
  i2340.sortingLayerName = i2341[6]
  i2340.sortingOrder = i2341[7]
  i2340.scaleFactor = i2341[8]
  request.r(i2341[9], i2341[10], 0, i2340, 'worldCamera')
  i2340.overrideSorting = !!i2341[11]
  i2340.pixelPerfect = !!i2341[12]
  i2340.targetDisplay = i2341[13]
  i2340.overridePixelPerfect = !!i2341[14]
  return i2340
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2342 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2343 = data
  i2342.m_UiScaleMode = i2343[0]
  i2342.m_ReferencePixelsPerUnit = i2343[1]
  i2342.m_ScaleFactor = i2343[2]
  i2342.m_ReferenceResolution = new pc.Vec2( i2343[3], i2343[4] )
  i2342.m_ScreenMatchMode = i2343[5]
  i2342.m_MatchWidthOrHeight = i2343[6]
  i2342.m_PhysicalUnit = i2343[7]
  i2342.m_FallbackScreenDPI = i2343[8]
  i2342.m_DefaultSpriteDPI = i2343[9]
  i2342.m_DynamicPixelsPerUnit = i2343[10]
  i2342.m_PresetInfoIsWorld = !!i2343[11]
  return i2342
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2344 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2345 = data
  i2344.m_IgnoreReversedGraphics = !!i2345[0]
  i2344.m_BlockingObjects = i2345[1]
  i2344.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2345[2] )
  return i2344
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i2346 = root || request.c( 'LunaManager' )
  var i2347 = data
  var i2349 = i2347[0]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 2) {
  request.r(i2349[i + 0], i2349[i + 1], 2, i2348, '')
  }
  i2346.lstBtnInstall = i2348
  request.r(i2347[1], i2347[2], 0, i2346, 'EndCard')
  i2346.countPlay = i2347[3]
  i2346.countPlayFinal = i2347[4]
  i2346.timeDropFinal = i2347[5]
  i2346.colorBG = new pc.Color(i2347[6], i2347[7], i2347[8], i2347[9])
  request.r(i2347[10], i2347[11], 0, i2346, 'texture2D')
  request.r(i2347[12], i2347[13], 0, i2346, 'rawImageBG')
  request.r(i2347[14], i2347[15], 0, i2346, 'hand')
  request.r(i2347[16], i2347[17], 0, i2346, 'textProgess')
  request.r(i2347[18], i2347[19], 0, i2346, 'imgProgess')
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2353 = data
  i2352.cullTransparentMesh = !!i2353[0]
  return i2352
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2354 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2355 = data
  request.r(i2355[0], i2355[1], 0, i2354, 'm_Texture')
  i2354.m_UVRect = UnityEngine.Rect.MinMaxRect(i2355[2], i2355[3], i2355[4], i2355[5])
  request.r(i2355[6], i2355[7], 0, i2354, 'm_Material')
  i2354.m_Maskable = !!i2355[8]
  i2354.m_Color = new pc.Color(i2355[9], i2355[10], i2355[11], i2355[12])
  i2354.m_RaycastTarget = !!i2355[13]
  i2354.m_RaycastPadding = new pc.Vec4( i2355[14], i2355[15], i2355[16], i2355[17] )
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'clip')
  request.r(i2357[2], i2357[3], 0, i2356, 'outputAudioMixerGroup')
  i2356.playOnAwake = !!i2357[4]
  i2356.loop = !!i2357[5]
  i2356.time = i2357[6]
  i2356.volume = i2357[7]
  i2356.pitch = i2357[8]
  i2356.enabled = !!i2357[9]
  return i2356
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2358 = root || request.c( 'UnityEngine.UI.Image' )
  var i2359 = data
  request.r(i2359[0], i2359[1], 0, i2358, 'm_Sprite')
  i2358.m_Type = i2359[2]
  i2358.m_PreserveAspect = !!i2359[3]
  i2358.m_FillCenter = !!i2359[4]
  i2358.m_FillMethod = i2359[5]
  i2358.m_FillAmount = i2359[6]
  i2358.m_FillClockwise = !!i2359[7]
  i2358.m_FillOrigin = i2359[8]
  i2358.m_UseSpriteMesh = !!i2359[9]
  i2358.m_PixelsPerUnitMultiplier = i2359[10]
  request.r(i2359[11], i2359[12], 0, i2358, 'm_Material')
  i2358.m_Maskable = !!i2359[13]
  i2358.m_Color = new pc.Color(i2359[14], i2359[15], i2359[16], i2359[17])
  i2358.m_RaycastTarget = !!i2359[18]
  i2358.m_RaycastPadding = new pc.Vec4( i2359[19], i2359[20], i2359[21], i2359[22] )
  return i2358
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2360 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2361 = data
  request.r(i2361[0], i2361[1], 0, i2360, 'skeletonDataAsset')
  request.r(i2361[2], i2361[3], 0, i2360, 'additiveMaterial')
  request.r(i2361[4], i2361[5], 0, i2360, 'multiplyMaterial')
  request.r(i2361[6], i2361[7], 0, i2360, 'screenMaterial')
  i2360.initialSkinName = i2361[8]
  i2360.initialFlipX = !!i2361[9]
  i2360.initialFlipY = !!i2361[10]
  i2360.startingAnimation = i2361[11]
  i2360.startingLoop = !!i2361[12]
  i2360.timeScale = i2361[13]
  i2360.freeze = !!i2361[14]
  i2360.layoutScaleMode = i2361[15]
  i2360.updateWhenInvisible = i2361[16]
  i2360.allowMultipleCanvasRenderers = !!i2361[17]
  var i2363 = i2361[18]
  var i2362 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2363.length; i += 2) {
  request.r(i2363[i + 0], i2363[i + 1], 1, i2362, '')
  }
  i2360.canvasRenderers = i2362
  i2360.enableSeparatorSlots = !!i2361[19]
  i2360.updateSeparatorPartLocation = !!i2361[20]
  i2360.updateSeparatorPartScale = !!i2361[21]
  i2360.disableMeshAssignmentOnOverride = !!i2361[22]
  i2360.referenceSize = new pc.Vec2( i2361[23], i2361[24] )
  i2360.referenceScale = i2361[25]
  i2360.rectTransformSize = new pc.Vec2( i2361[26], i2361[27] )
  i2360.editReferenceRect = !!i2361[28]
  var i2365 = i2361[29]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.push( i2365[i + 0] );
  }
  i2360.separatorSlotNames = i2364
  var i2367 = i2361[30]
  var i2366 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2367.length; i += 2) {
  request.r(i2367[i + 0], i2367[i + 1], 1, i2366, '')
  }
  i2360.separatorParts = i2366
  i2360.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2361[31], i2360.meshGenerator)
  i2360.updateTiming = i2361[32]
  i2360.unscaledTime = !!i2361[33]
  request.r(i2361[34], i2361[35], 0, i2360, 'm_Material')
  i2360.m_Maskable = !!i2361[36]
  i2360.m_Color = new pc.Color(i2361[37], i2361[38], i2361[39], i2361[40])
  i2360.m_RaycastTarget = !!i2361[41]
  i2360.m_RaycastPadding = new pc.Vec4( i2361[42], i2361[43], i2361[44], i2361[45] )
  return i2360
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2374 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2375 = data
  i2374.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2375[0], i2374.settings)
  return i2374
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2376 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2377 = data
  i2376.useClipping = !!i2377[0]
  i2376.zSpacing = i2377[1]
  i2376.pmaVertexColors = !!i2377[2]
  i2376.tintBlack = !!i2377[3]
  i2376.canvasGroupTintBlack = !!i2377[4]
  i2376.calculateTangents = !!i2377[5]
  i2376.addNormals = !!i2377[6]
  i2376.immutableTriangles = !!i2377[7]
  return i2376
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i2378 = root || request.c( 'DraggableItem' )
  var i2379 = data
  i2378.idDrag = i2379[0]
  i2378.isClick = !!i2379[1]
  var i2381 = i2379[2]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 2) {
  request.r(i2381[i + 0], i2381[i + 1], 2, i2380, '')
  }
  i2378.steps = i2380
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2385 = data
  i2384.m_Alpha = i2385[0]
  i2384.m_Interactable = !!i2385[1]
  i2384.m_BlocksRaycasts = !!i2385[2]
  i2384.m_IgnoreParentGroups = !!i2385[3]
  i2384.enabled = !!i2385[4]
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2387 = data
  i2386.usedByComposite = !!i2387[0]
  i2386.autoTiling = !!i2387[1]
  i2386.size = new pc.Vec2( i2387[2], i2387[3] )
  i2386.edgeRadius = i2387[4]
  i2386.enabled = !!i2387[5]
  i2386.isTrigger = !!i2387[6]
  i2386.usedByEffector = !!i2387[7]
  i2386.density = i2387[8]
  i2386.offset = new pc.Vec2( i2387[9], i2387[10] )
  request.r(i2387[11], i2387[12], 0, i2386, 'material')
  return i2386
}

Deserializers["DropZone"] = function (request, data, root) {
  var i2388 = root || request.c( 'DropZone' )
  var i2389 = data
  i2388.idDrop = i2389[0]
  var i2391 = i2389[1]
  var i2390 = []
  for(var i = 0; i < i2391.length; i += 2) {
  request.r(i2391[i + 0], i2391[i + 1], 2, i2390, '')
  }
  i2388.steps = i2390
  i2388.isDontWork = !!i2389[2]
  return i2388
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2392 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2393 = data
  i2392.m_hasFontAssetChanged = !!i2393[0]
  request.r(i2393[1], i2393[2], 0, i2392, 'm_baseMaterial')
  i2392.m_maskOffset = new pc.Vec4( i2393[3], i2393[4], i2393[5], i2393[6] )
  i2392.m_text = i2393[7]
  i2392.m_isRightToLeft = !!i2393[8]
  request.r(i2393[9], i2393[10], 0, i2392, 'm_fontAsset')
  request.r(i2393[11], i2393[12], 0, i2392, 'm_sharedMaterial')
  var i2395 = i2393[13]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 2) {
  request.r(i2395[i + 0], i2395[i + 1], 2, i2394, '')
  }
  i2392.m_fontSharedMaterials = i2394
  request.r(i2393[14], i2393[15], 0, i2392, 'm_fontMaterial')
  var i2397 = i2393[16]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 2) {
  request.r(i2397[i + 0], i2397[i + 1], 2, i2396, '')
  }
  i2392.m_fontMaterials = i2396
  i2392.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2393[17], i2393[18], i2393[19], i2393[20])
  i2392.m_fontColor = new pc.Color(i2393[21], i2393[22], i2393[23], i2393[24])
  i2392.m_enableVertexGradient = !!i2393[25]
  i2392.m_colorMode = i2393[26]
  i2392.m_fontColorGradient = request.d('TMPro.VertexGradient', i2393[27], i2392.m_fontColorGradient)
  request.r(i2393[28], i2393[29], 0, i2392, 'm_fontColorGradientPreset')
  request.r(i2393[30], i2393[31], 0, i2392, 'm_spriteAsset')
  i2392.m_tintAllSprites = !!i2393[32]
  request.r(i2393[33], i2393[34], 0, i2392, 'm_StyleSheet')
  i2392.m_TextStyleHashCode = i2393[35]
  i2392.m_overrideHtmlColors = !!i2393[36]
  i2392.m_faceColor = UnityEngine.Color32.ConstructColor(i2393[37], i2393[38], i2393[39], i2393[40])
  i2392.m_fontSize = i2393[41]
  i2392.m_fontSizeBase = i2393[42]
  i2392.m_fontWeight = i2393[43]
  i2392.m_enableAutoSizing = !!i2393[44]
  i2392.m_fontSizeMin = i2393[45]
  i2392.m_fontSizeMax = i2393[46]
  i2392.m_fontStyle = i2393[47]
  i2392.m_HorizontalAlignment = i2393[48]
  i2392.m_VerticalAlignment = i2393[49]
  i2392.m_textAlignment = i2393[50]
  i2392.m_characterSpacing = i2393[51]
  i2392.m_wordSpacing = i2393[52]
  i2392.m_lineSpacing = i2393[53]
  i2392.m_lineSpacingMax = i2393[54]
  i2392.m_paragraphSpacing = i2393[55]
  i2392.m_charWidthMaxAdj = i2393[56]
  i2392.m_enableWordWrapping = !!i2393[57]
  i2392.m_wordWrappingRatios = i2393[58]
  i2392.m_overflowMode = i2393[59]
  request.r(i2393[60], i2393[61], 0, i2392, 'm_linkedTextComponent')
  request.r(i2393[62], i2393[63], 0, i2392, 'parentLinkedComponent')
  i2392.m_enableKerning = !!i2393[64]
  i2392.m_enableExtraPadding = !!i2393[65]
  i2392.checkPaddingRequired = !!i2393[66]
  i2392.m_isRichText = !!i2393[67]
  i2392.m_parseCtrlCharacters = !!i2393[68]
  i2392.m_isOrthographic = !!i2393[69]
  i2392.m_isCullingEnabled = !!i2393[70]
  i2392.m_horizontalMapping = i2393[71]
  i2392.m_verticalMapping = i2393[72]
  i2392.m_uvLineOffset = i2393[73]
  i2392.m_geometrySortingOrder = i2393[74]
  i2392.m_IsTextObjectScaleStatic = !!i2393[75]
  i2392.m_VertexBufferAutoSizeReduction = !!i2393[76]
  i2392.m_useMaxVisibleDescender = !!i2393[77]
  i2392.m_pageToDisplay = i2393[78]
  i2392.m_margin = new pc.Vec4( i2393[79], i2393[80], i2393[81], i2393[82] )
  i2392.m_isUsingLegacyAnimationComponent = !!i2393[83]
  i2392.m_isVolumetricText = !!i2393[84]
  request.r(i2393[85], i2393[86], 0, i2392, 'm_Material')
  i2392.m_Maskable = !!i2393[87]
  i2392.m_Color = new pc.Color(i2393[88], i2393[89], i2393[90], i2393[91])
  i2392.m_RaycastTarget = !!i2393[92]
  i2392.m_RaycastPadding = new pc.Vec4( i2393[93], i2393[94], i2393[95], i2393[96] )
  return i2392
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2400 = root || request.c( 'TMPro.VertexGradient' )
  var i2401 = data
  i2400.topLeft = new pc.Color(i2401[0], i2401[1], i2401[2], i2401[3])
  i2400.topRight = new pc.Color(i2401[4], i2401[5], i2401[6], i2401[7])
  i2400.bottomLeft = new pc.Color(i2401[8], i2401[9], i2401[10], i2401[11])
  i2400.bottomRight = new pc.Color(i2401[12], i2401[13], i2401[14], i2401[15])
  return i2400
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2402 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2403 = data
  i2402.targetIsSelf = !!i2403[0]
  request.r(i2403[1], i2403[2], 0, i2402, 'targetGO')
  i2402.tweenTargetIsTargetGO = !!i2403[3]
  i2402.delay = i2403[4]
  i2402.duration = i2403[5]
  i2402.easeType = i2403[6]
  i2402.easeCurve = new pc.AnimationCurve( { keys_flow: i2403[7] } )
  i2402.loopType = i2403[8]
  i2402.loops = i2403[9]
  i2402.id = i2403[10]
  i2402.isRelative = !!i2403[11]
  i2402.isFrom = !!i2403[12]
  i2402.isIndependentUpdate = !!i2403[13]
  i2402.autoKill = !!i2403[14]
  i2402.autoGenerate = !!i2403[15]
  i2402.isActive = !!i2403[16]
  i2402.isValid = !!i2403[17]
  request.r(i2403[18], i2403[19], 0, i2402, 'target')
  i2402.animationType = i2403[20]
  i2402.targetType = i2403[21]
  i2402.forcedTargetType = i2403[22]
  i2402.autoPlay = !!i2403[23]
  i2402.useTargetAsV3 = !!i2403[24]
  i2402.endValueFloat = i2403[25]
  i2402.endValueV3 = new pc.Vec3( i2403[26], i2403[27], i2403[28] )
  i2402.endValueV2 = new pc.Vec2( i2403[29], i2403[30] )
  i2402.endValueColor = new pc.Color(i2403[31], i2403[32], i2403[33], i2403[34])
  i2402.endValueString = i2403[35]
  i2402.endValueRect = UnityEngine.Rect.MinMaxRect(i2403[36], i2403[37], i2403[38], i2403[39])
  request.r(i2403[40], i2403[41], 0, i2402, 'endValueTransform')
  i2402.optionalBool0 = !!i2403[42]
  i2402.optionalBool1 = !!i2403[43]
  i2402.optionalFloat0 = i2403[44]
  i2402.optionalInt0 = i2403[45]
  i2402.optionalRotationMode = i2403[46]
  i2402.optionalScrambleMode = i2403[47]
  i2402.optionalShakeRandomnessMode = i2403[48]
  i2402.optionalString = i2403[49]
  i2402.updateType = i2403[50]
  i2402.isSpeedBased = !!i2403[51]
  i2402.hasOnStart = !!i2403[52]
  i2402.hasOnPlay = !!i2403[53]
  i2402.hasOnUpdate = !!i2403[54]
  i2402.hasOnStepComplete = !!i2403[55]
  i2402.hasOnComplete = !!i2403[56]
  i2402.hasOnTweenCreated = !!i2403[57]
  i2402.hasOnRewind = !!i2403[58]
  i2402.onStart = request.d('UnityEngine.Events.UnityEvent', i2403[59], i2402.onStart)
  i2402.onPlay = request.d('UnityEngine.Events.UnityEvent', i2403[60], i2402.onPlay)
  i2402.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2403[61], i2402.onUpdate)
  i2402.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2403[62], i2402.onStepComplete)
  i2402.onComplete = request.d('UnityEngine.Events.UnityEvent', i2403[63], i2402.onComplete)
  i2402.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2403[64], i2402.onTweenCreated)
  i2402.onRewind = request.d('UnityEngine.Events.UnityEvent', i2403[65], i2402.onRewind)
  return i2402
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2404 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2405 = data
  i2404.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2405[0], i2404.m_PersistentCalls)
  return i2404
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2406 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2407 = data
  var i2409 = i2407[0]
  var i2408 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.add(request.d('UnityEngine.Events.PersistentCall', i2409[i + 0]));
  }
  i2406.m_Calls = i2408
  return i2406
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2412 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2413 = data
  request.r(i2413[0], i2413[1], 0, i2412, 'm_Target')
  i2412.m_TargetAssemblyTypeName = i2413[2]
  i2412.m_MethodName = i2413[3]
  i2412.m_Mode = i2413[4]
  i2412.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2413[5], i2412.m_Arguments)
  i2412.m_CallState = i2413[6]
  return i2412
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2414 = root || request.c( 'UnityEngine.UI.Button' )
  var i2415 = data
  i2414.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2415[0], i2414.m_OnClick)
  i2414.m_Navigation = request.d('UnityEngine.UI.Navigation', i2415[1], i2414.m_Navigation)
  i2414.m_Transition = i2415[2]
  i2414.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2415[3], i2414.m_Colors)
  i2414.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2415[4], i2414.m_SpriteState)
  i2414.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2415[5], i2414.m_AnimationTriggers)
  i2414.m_Interactable = !!i2415[6]
  request.r(i2415[7], i2415[8], 0, i2414, 'm_TargetGraphic')
  return i2414
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2416 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2417 = data
  i2416.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2417[0], i2416.m_PersistentCalls)
  return i2416
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2418 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2419 = data
  i2418.m_Mode = i2419[0]
  i2418.m_WrapAround = !!i2419[1]
  request.r(i2419[2], i2419[3], 0, i2418, 'm_SelectOnUp')
  request.r(i2419[4], i2419[5], 0, i2418, 'm_SelectOnDown')
  request.r(i2419[6], i2419[7], 0, i2418, 'm_SelectOnLeft')
  request.r(i2419[8], i2419[9], 0, i2418, 'm_SelectOnRight')
  return i2418
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2420 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2421 = data
  i2420.m_NormalColor = new pc.Color(i2421[0], i2421[1], i2421[2], i2421[3])
  i2420.m_HighlightedColor = new pc.Color(i2421[4], i2421[5], i2421[6], i2421[7])
  i2420.m_PressedColor = new pc.Color(i2421[8], i2421[9], i2421[10], i2421[11])
  i2420.m_SelectedColor = new pc.Color(i2421[12], i2421[13], i2421[14], i2421[15])
  i2420.m_DisabledColor = new pc.Color(i2421[16], i2421[17], i2421[18], i2421[19])
  i2420.m_ColorMultiplier = i2421[20]
  i2420.m_FadeDuration = i2421[21]
  return i2420
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2422 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2423 = data
  request.r(i2423[0], i2423[1], 0, i2422, 'm_HighlightedSprite')
  request.r(i2423[2], i2423[3], 0, i2422, 'm_PressedSprite')
  request.r(i2423[4], i2423[5], 0, i2422, 'm_SelectedSprite')
  request.r(i2423[6], i2423[7], 0, i2422, 'm_DisabledSprite')
  return i2422
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2424 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2425 = data
  i2424.m_NormalTrigger = i2425[0]
  i2424.m_HighlightedTrigger = i2425[1]
  i2424.m_PressedTrigger = i2425[2]
  i2424.m_SelectedTrigger = i2425[3]
  i2424.m_DisabledTrigger = i2425[4]
  return i2424
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2426 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2427 = data
  i2426.m_ShowMaskGraphic = !!i2427[0]
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2429 = data
  i2428.ambientIntensity = i2429[0]
  i2428.reflectionIntensity = i2429[1]
  i2428.ambientMode = i2429[2]
  i2428.ambientLight = new pc.Color(i2429[3], i2429[4], i2429[5], i2429[6])
  i2428.ambientSkyColor = new pc.Color(i2429[7], i2429[8], i2429[9], i2429[10])
  i2428.ambientGroundColor = new pc.Color(i2429[11], i2429[12], i2429[13], i2429[14])
  i2428.ambientEquatorColor = new pc.Color(i2429[15], i2429[16], i2429[17], i2429[18])
  i2428.fogColor = new pc.Color(i2429[19], i2429[20], i2429[21], i2429[22])
  i2428.fogEndDistance = i2429[23]
  i2428.fogStartDistance = i2429[24]
  i2428.fogDensity = i2429[25]
  i2428.fog = !!i2429[26]
  request.r(i2429[27], i2429[28], 0, i2428, 'skybox')
  i2428.fogMode = i2429[29]
  var i2431 = i2429[30]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2431[i + 0]) );
  }
  i2428.lightmaps = i2430
  i2428.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2429[31], i2428.lightProbes)
  i2428.lightmapsMode = i2429[32]
  i2428.mixedBakeMode = i2429[33]
  i2428.environmentLightingMode = i2429[34]
  i2428.ambientProbe = new pc.SphericalHarmonicsL2(i2429[35])
  i2428.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2429[36])
  i2428.useReferenceAmbientProbe = !!i2429[37]
  request.r(i2429[38], i2429[39], 0, i2428, 'customReflection')
  request.r(i2429[40], i2429[41], 0, i2428, 'defaultReflection')
  i2428.defaultReflectionMode = i2429[42]
  i2428.defaultReflectionResolution = i2429[43]
  i2428.sunLightObjectId = i2429[44]
  i2428.pixelLightCount = i2429[45]
  i2428.defaultReflectionHDR = !!i2429[46]
  i2428.hasLightDataAsset = !!i2429[47]
  i2428.hasManualGenerate = !!i2429[48]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'lightmapColor')
  request.r(i2435[2], i2435[3], 0, i2434, 'lightmapDirection')
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2436 = root || new UnityEngine.LightProbes()
  var i2437 = data
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2445 = data
  var i2447 = i2445[0]
  var i2446 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2447[i + 0]));
  }
  i2444.ShaderCompilationErrors = i2446
  i2444.name = i2445[1]
  i2444.guid = i2445[2]
  var i2449 = i2445[3]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( i2449[i + 0] );
  }
  i2444.shaderDefinedKeywords = i2448
  var i2451 = i2445[4]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2451[i + 0]) );
  }
  i2444.passes = i2450
  var i2453 = i2445[5]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2453[i + 0]) );
  }
  i2444.usePasses = i2452
  var i2455 = i2445[6]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2455[i + 0]) );
  }
  i2444.defaultParameterValues = i2454
  request.r(i2445[7], i2445[8], 0, i2444, 'unityFallbackShader')
  i2444.readDepth = !!i2445[9]
  i2444.isCreatedByShaderGraph = !!i2445[10]
  i2444.usedBatchUniforms = i2445[11]
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2459 = data
  i2458.shaderName = i2459[0]
  i2458.errorMessage = i2459[1]
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2462 = root || new pc.UnityShaderPass()
  var i2463 = data
  i2462.id = i2463[0]
  i2462.subShaderIndex = i2463[1]
  i2462.name = i2463[2]
  i2462.passType = i2463[3]
  i2462.grabPassTextureName = i2463[4]
  i2462.usePass = !!i2463[5]
  i2462.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[6], i2462.zTest)
  i2462.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[7], i2462.zWrite)
  i2462.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[8], i2462.culling)
  i2462.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2463[9], i2462.blending)
  i2462.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2463[10], i2462.alphaBlending)
  i2462.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[11], i2462.colorWriteMask)
  i2462.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[12], i2462.offsetUnits)
  i2462.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[13], i2462.offsetFactor)
  i2462.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[14], i2462.stencilRef)
  i2462.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[15], i2462.stencilReadMask)
  i2462.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[16], i2462.stencilWriteMask)
  i2462.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2463[17], i2462.stencilOp)
  i2462.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2463[18], i2462.stencilOpFront)
  i2462.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2463[19], i2462.stencilOpBack)
  var i2465 = i2463[20]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2465[i + 0]) );
  }
  i2462.tags = i2464
  var i2467 = i2463[21]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( i2467[i + 0] );
  }
  i2462.passDefinedKeywords = i2466
  var i2469 = i2463[22]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2469[i + 0]) );
  }
  i2462.passDefinedKeywordGroups = i2468
  var i2471 = i2463[23]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2471[i + 0]) );
  }
  i2462.variants = i2470
  var i2473 = i2463[24]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2473[i + 0]) );
  }
  i2462.excludedVariants = i2472
  i2462.hasDepthReader = !!i2463[25]
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2475 = data
  i2474.val = i2475[0]
  i2474.name = i2475[1]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2477 = data
  i2476.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2477[0], i2476.src)
  i2476.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2477[1], i2476.dst)
  i2476.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2477[2], i2476.op)
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2479 = data
  i2478.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[0], i2478.pass)
  i2478.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[1], i2478.fail)
  i2478.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[2], i2478.zFail)
  i2478.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[3], i2478.comp)
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2483 = data
  i2482.name = i2483[0]
  i2482.value = i2483[1]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2487 = data
  var i2489 = i2487[0]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( i2489[i + 0] );
  }
  i2486.keywords = i2488
  i2486.hasDiscard = !!i2487[1]
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2493 = data
  i2492.passId = i2493[0]
  i2492.subShaderIndex = i2493[1]
  var i2495 = i2493[2]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.push( i2495[i + 0] );
  }
  i2492.keywords = i2494
  i2492.vertexProgram = i2493[3]
  i2492.fragmentProgram = i2493[4]
  i2492.compiledForWebGL2 = !!i2493[5]
  i2492.readDepth = !!i2493[6]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2499 = data
  request.r(i2499[0], i2499[1], 0, i2498, 'shader')
  i2498.pass = i2499[2]
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2503 = data
  i2502.name = i2503[0]
  i2502.type = i2503[1]
  i2502.value = new pc.Vec4( i2503[2], i2503[3], i2503[4], i2503[5] )
  i2502.textureValue = i2503[6]
  i2502.shaderPropertyFlag = i2503[7]
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2505 = data
  i2504.name = i2505[0]
  request.r(i2505[1], i2505[2], 0, i2504, 'texture')
  i2504.aabb = i2505[3]
  i2504.vertices = i2505[4]
  i2504.triangles = i2505[5]
  i2504.textureRect = UnityEngine.Rect.MinMaxRect(i2505[6], i2505[7], i2505[8], i2505[9])
  i2504.packedRect = UnityEngine.Rect.MinMaxRect(i2505[10], i2505[11], i2505[12], i2505[13])
  i2504.border = new pc.Vec4( i2505[14], i2505[15], i2505[16], i2505[17] )
  i2504.transparency = i2505[18]
  i2504.bounds = i2505[19]
  i2504.pixelsPerUnit = i2505[20]
  i2504.textureWidth = i2505[21]
  i2504.textureHeight = i2505[22]
  i2504.nativeSize = new pc.Vec2( i2505[23], i2505[24] )
  i2504.pivot = new pc.Vec2( i2505[25], i2505[26] )
  i2504.textureRectOffset = new pc.Vec2( i2505[27], i2505[28] )
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2507 = data
  i2506.name = i2507[0]
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2509 = data
  i2508.name = i2509[0]
  i2508.ascent = i2509[1]
  i2508.originalLineHeight = i2509[2]
  i2508.fontSize = i2509[3]
  var i2511 = i2509[4]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2511[i + 0]) );
  }
  i2508.characterInfo = i2510
  request.r(i2509[5], i2509[6], 0, i2508, 'texture')
  i2508.originalFontSize = i2509[7]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2515 = data
  i2514.index = i2515[0]
  i2514.advance = i2515[1]
  i2514.bearing = i2515[2]
  i2514.glyphWidth = i2515[3]
  i2514.glyphHeight = i2515[4]
  i2514.minX = i2515[5]
  i2514.maxX = i2515[6]
  i2514.minY = i2515[7]
  i2514.maxY = i2515[8]
  i2514.uvBottomLeftX = i2515[9]
  i2514.uvBottomLeftY = i2515[10]
  i2514.uvBottomRightX = i2515[11]
  i2514.uvBottomRightY = i2515[12]
  i2514.uvTopLeftX = i2515[13]
  i2514.uvTopLeftY = i2515[14]
  i2514.uvTopRightX = i2515[15]
  i2514.uvTopRightY = i2515[16]
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2517 = data
  i2516.name = i2517[0]
  i2516.bytes64 = i2517[1]
  i2516.data = i2517[2]
  return i2516
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2518 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2519 = data
  var i2521 = i2519[0]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 2) {
  request.r(i2521[i + 0], i2521[i + 1], 2, i2520, '')
  }
  i2518.atlasAssets = i2520
  i2518.scale = i2519[1]
  request.r(i2519[2], i2519[3], 0, i2518, 'skeletonJSON')
  i2518.isUpgradingBlendModeMaterials = !!i2519[4]
  i2518.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2519[5], i2518.blendModeMaterials)
  var i2523 = i2519[6]
  var i2522 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2523.length; i += 2) {
  request.r(i2523[i + 0], i2523[i + 1], 1, i2522, '')
  }
  i2518.skeletonDataModifiers = i2522
  var i2525 = i2519[7]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( i2525[i + 0] );
  }
  i2518.fromAnimation = i2524
  var i2527 = i2519[8]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( i2527[i + 0] );
  }
  i2518.toAnimation = i2526
  i2518.duration = i2519[9]
  i2518.defaultMix = i2519[10]
  request.r(i2519[11], i2519[12], 0, i2518, 'controller')
  return i2518
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2530 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2531 = data
  i2530.applyAdditiveMaterial = !!i2531[0]
  var i2533 = i2531[1]
  var i2532 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2533[i + 0]));
  }
  i2530.additiveMaterials = i2532
  var i2535 = i2531[2]
  var i2534 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2535[i + 0]));
  }
  i2530.multiplyMaterials = i2534
  var i2537 = i2531[3]
  var i2536 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2537[i + 0]));
  }
  i2530.screenMaterials = i2536
  i2530.requiresBlendModeMaterials = !!i2531[4]
  return i2530
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2540 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2541 = data
  i2540.pageName = i2541[0]
  request.r(i2541[1], i2541[2], 0, i2540, 'material')
  return i2540
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2544 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2545 = data
  request.r(i2545[0], i2545[1], 0, i2544, 'atlasFile')
  var i2547 = i2545[2]
  var i2546 = []
  for(var i = 0; i < i2547.length; i += 2) {
  request.r(i2547[i + 0], i2547[i + 1], 2, i2546, '')
  }
  i2544.materials = i2546
  i2544.textureLoadingMode = i2545[3]
  request.r(i2545[4], i2545[5], 0, i2544, 'onDemandTextureLoader')
  return i2544
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2548 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2549 = data
  i2548.hashCode = i2549[0]
  request.r(i2549[1], i2549[2], 0, i2548, 'material')
  i2548.materialHashCode = i2549[3]
  request.r(i2549[4], i2549[5], 0, i2548, 'atlas')
  i2548.normalStyle = i2549[6]
  i2548.normalSpacingOffset = i2549[7]
  i2548.boldStyle = i2549[8]
  i2548.boldSpacing = i2549[9]
  i2548.italicStyle = i2549[10]
  i2548.tabSize = i2549[11]
  i2548.m_Version = i2549[12]
  i2548.m_SourceFontFileGUID = i2549[13]
  request.r(i2549[14], i2549[15], 0, i2548, 'm_SourceFontFile_EditorRef')
  request.r(i2549[16], i2549[17], 0, i2548, 'm_SourceFontFile')
  i2548.m_AtlasPopulationMode = i2549[18]
  i2548.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2549[19], i2548.m_FaceInfo)
  var i2551 = i2549[20]
  var i2550 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2551.length; i += 1) {
    i2550.add(request.d('UnityEngine.TextCore.Glyph', i2551[i + 0]));
  }
  i2548.m_GlyphTable = i2550
  var i2553 = i2549[21]
  var i2552 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.add(request.d('TMPro.TMP_Character', i2553[i + 0]));
  }
  i2548.m_CharacterTable = i2552
  var i2555 = i2549[22]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 2) {
  request.r(i2555[i + 0], i2555[i + 1], 2, i2554, '')
  }
  i2548.m_AtlasTextures = i2554
  i2548.m_AtlasTextureIndex = i2549[23]
  i2548.m_IsMultiAtlasTexturesEnabled = !!i2549[24]
  i2548.m_ClearDynamicDataOnBuild = !!i2549[25]
  var i2557 = i2549[26]
  var i2556 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.add(request.d('UnityEngine.TextCore.GlyphRect', i2557[i + 0]));
  }
  i2548.m_UsedGlyphRects = i2556
  var i2559 = i2549[27]
  var i2558 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.add(request.d('UnityEngine.TextCore.GlyphRect', i2559[i + 0]));
  }
  i2548.m_FreeGlyphRects = i2558
  i2548.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2549[28], i2548.m_fontInfo)
  i2548.m_AtlasWidth = i2549[29]
  i2548.m_AtlasHeight = i2549[30]
  i2548.m_AtlasPadding = i2549[31]
  i2548.m_AtlasRenderMode = i2549[32]
  var i2561 = i2549[33]
  var i2560 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.add(request.d('TMPro.TMP_Glyph', i2561[i + 0]));
  }
  i2548.m_glyphInfoList = i2560
  i2548.m_KerningTable = request.d('TMPro.KerningTable', i2549[34], i2548.m_KerningTable)
  i2548.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2549[35], i2548.m_FontFeatureTable)
  var i2563 = i2549[36]
  var i2562 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2563.length; i += 2) {
  request.r(i2563[i + 0], i2563[i + 1], 1, i2562, '')
  }
  i2548.fallbackFontAssets = i2562
  var i2565 = i2549[37]
  var i2564 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2565.length; i += 2) {
  request.r(i2565[i + 0], i2565[i + 1], 1, i2564, '')
  }
  i2548.m_FallbackFontAssetTable = i2564
  i2548.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2549[38], i2548.m_CreationSettings)
  var i2567 = i2549[39]
  var i2566 = []
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.push( request.d('TMPro.TMP_FontWeightPair', i2567[i + 0]) );
  }
  i2548.m_FontWeightTable = i2566
  var i2569 = i2549[40]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.push( request.d('TMPro.TMP_FontWeightPair', i2569[i + 0]) );
  }
  i2548.fontWeights = i2568
  return i2548
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2570 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2571 = data
  i2570.m_FaceIndex = i2571[0]
  i2570.m_FamilyName = i2571[1]
  i2570.m_StyleName = i2571[2]
  i2570.m_PointSize = i2571[3]
  i2570.m_Scale = i2571[4]
  i2570.m_UnitsPerEM = i2571[5]
  i2570.m_LineHeight = i2571[6]
  i2570.m_AscentLine = i2571[7]
  i2570.m_CapLine = i2571[8]
  i2570.m_MeanLine = i2571[9]
  i2570.m_Baseline = i2571[10]
  i2570.m_DescentLine = i2571[11]
  i2570.m_SuperscriptOffset = i2571[12]
  i2570.m_SuperscriptSize = i2571[13]
  i2570.m_SubscriptOffset = i2571[14]
  i2570.m_SubscriptSize = i2571[15]
  i2570.m_UnderlineOffset = i2571[16]
  i2570.m_UnderlineThickness = i2571[17]
  i2570.m_StrikethroughOffset = i2571[18]
  i2570.m_StrikethroughThickness = i2571[19]
  i2570.m_TabWidth = i2571[20]
  return i2570
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2574 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2575 = data
  i2574.m_Index = i2575[0]
  i2574.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2575[1], i2574.m_Metrics)
  i2574.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2575[2], i2574.m_GlyphRect)
  i2574.m_Scale = i2575[3]
  i2574.m_AtlasIndex = i2575[4]
  i2574.m_ClassDefinitionType = i2575[5]
  return i2574
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2576 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2577 = data
  i2576.m_Width = i2577[0]
  i2576.m_Height = i2577[1]
  i2576.m_HorizontalBearingX = i2577[2]
  i2576.m_HorizontalBearingY = i2577[3]
  i2576.m_HorizontalAdvance = i2577[4]
  return i2576
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2578 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2579 = data
  i2578.m_X = i2579[0]
  i2578.m_Y = i2579[1]
  i2578.m_Width = i2579[2]
  i2578.m_Height = i2579[3]
  return i2578
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2582 = root || request.c( 'TMPro.TMP_Character' )
  var i2583 = data
  i2582.m_ElementType = i2583[0]
  i2582.m_Unicode = i2583[1]
  i2582.m_GlyphIndex = i2583[2]
  i2582.m_Scale = i2583[3]
  return i2582
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2588 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2589 = data
  i2588.Name = i2589[0]
  i2588.PointSize = i2589[1]
  i2588.Scale = i2589[2]
  i2588.CharacterCount = i2589[3]
  i2588.LineHeight = i2589[4]
  i2588.Baseline = i2589[5]
  i2588.Ascender = i2589[6]
  i2588.CapHeight = i2589[7]
  i2588.Descender = i2589[8]
  i2588.CenterLine = i2589[9]
  i2588.SuperscriptOffset = i2589[10]
  i2588.SubscriptOffset = i2589[11]
  i2588.SubSize = i2589[12]
  i2588.Underline = i2589[13]
  i2588.UnderlineThickness = i2589[14]
  i2588.strikethrough = i2589[15]
  i2588.strikethroughThickness = i2589[16]
  i2588.TabWidth = i2589[17]
  i2588.Padding = i2589[18]
  i2588.AtlasWidth = i2589[19]
  i2588.AtlasHeight = i2589[20]
  return i2588
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2592 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2593 = data
  i2592.id = i2593[0]
  i2592.x = i2593[1]
  i2592.y = i2593[2]
  i2592.width = i2593[3]
  i2592.height = i2593[4]
  i2592.xOffset = i2593[5]
  i2592.yOffset = i2593[6]
  i2592.xAdvance = i2593[7]
  i2592.scale = i2593[8]
  return i2592
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2594 = root || request.c( 'TMPro.KerningTable' )
  var i2595 = data
  var i2597 = i2595[0]
  var i2596 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.add(request.d('TMPro.KerningPair', i2597[i + 0]));
  }
  i2594.kerningPairs = i2596
  return i2594
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2600 = root || request.c( 'TMPro.KerningPair' )
  var i2601 = data
  i2600.xOffset = i2601[0]
  i2600.m_FirstGlyph = i2601[1]
  i2600.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2601[2], i2600.m_FirstGlyphAdjustments)
  i2600.m_SecondGlyph = i2601[3]
  i2600.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2601[4], i2600.m_SecondGlyphAdjustments)
  i2600.m_IgnoreSpacingAdjustments = !!i2601[5]
  return i2600
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2602 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2603 = data
  var i2605 = i2603[0]
  var i2604 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2605[i + 0]));
  }
  i2602.m_GlyphPairAdjustmentRecords = i2604
  return i2602
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2608 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2609 = data
  i2608.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2609[0], i2608.m_FirstAdjustmentRecord)
  i2608.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2609[1], i2608.m_SecondAdjustmentRecord)
  i2608.m_FeatureLookupFlags = i2609[2]
  return i2608
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2612 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2613 = data
  i2612.sourceFontFileName = i2613[0]
  i2612.sourceFontFileGUID = i2613[1]
  i2612.pointSizeSamplingMode = i2613[2]
  i2612.pointSize = i2613[3]
  i2612.padding = i2613[4]
  i2612.packingMode = i2613[5]
  i2612.atlasWidth = i2613[6]
  i2612.atlasHeight = i2613[7]
  i2612.characterSetSelectionMode = i2613[8]
  i2612.characterSequence = i2613[9]
  i2612.referencedFontAssetGUID = i2613[10]
  i2612.referencedTextAssetGUID = i2613[11]
  i2612.fontStyle = i2613[12]
  i2612.fontStyleModifier = i2613[13]
  i2612.renderMode = i2613[14]
  i2612.includeFontFeatures = !!i2613[15]
  return i2612
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2616 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2617 = data
  request.r(i2617[0], i2617[1], 0, i2616, 'regularTypeface')
  request.r(i2617[2], i2617[3], 0, i2616, 'italicTypeface')
  return i2616
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2618 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2619 = data
  i2618.useSafeMode = !!i2619[0]
  i2618.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2619[1], i2618.safeModeOptions)
  i2618.timeScale = i2619[2]
  i2618.unscaledTimeScale = i2619[3]
  i2618.useSmoothDeltaTime = !!i2619[4]
  i2618.maxSmoothUnscaledTime = i2619[5]
  i2618.rewindCallbackMode = i2619[6]
  i2618.showUnityEditorReport = !!i2619[7]
  i2618.logBehaviour = i2619[8]
  i2618.drawGizmos = !!i2619[9]
  i2618.defaultRecyclable = !!i2619[10]
  i2618.defaultAutoPlay = i2619[11]
  i2618.defaultUpdateType = i2619[12]
  i2618.defaultTimeScaleIndependent = !!i2619[13]
  i2618.defaultEaseType = i2619[14]
  i2618.defaultEaseOvershootOrAmplitude = i2619[15]
  i2618.defaultEasePeriod = i2619[16]
  i2618.defaultAutoKill = !!i2619[17]
  i2618.defaultLoopType = i2619[18]
  i2618.debugMode = !!i2619[19]
  i2618.debugStoreTargetId = !!i2619[20]
  i2618.showPreviewPanel = !!i2619[21]
  i2618.storeSettingsLocation = i2619[22]
  i2618.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2619[23], i2618.modules)
  i2618.createASMDEF = !!i2619[24]
  i2618.showPlayingTweens = !!i2619[25]
  i2618.showPausedTweens = !!i2619[26]
  return i2618
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2620 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2621 = data
  i2620.logBehaviour = i2621[0]
  i2620.nestedTweenFailureBehaviour = i2621[1]
  return i2620
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2622 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2623 = data
  i2622.showPanel = !!i2623[0]
  i2622.audioEnabled = !!i2623[1]
  i2622.physicsEnabled = !!i2623[2]
  i2622.physics2DEnabled = !!i2623[3]
  i2622.spriteEnabled = !!i2623[4]
  i2622.uiEnabled = !!i2623[5]
  i2622.textMeshProEnabled = !!i2623[6]
  i2622.tk2DEnabled = !!i2623[7]
  i2622.deAudioEnabled = !!i2623[8]
  i2622.deUnityExtendedEnabled = !!i2623[9]
  i2622.epoOutlineEnabled = !!i2623[10]
  return i2622
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2624 = root || request.c( 'TMPro.TMP_Settings' )
  var i2625 = data
  i2624.m_enableWordWrapping = !!i2625[0]
  i2624.m_enableKerning = !!i2625[1]
  i2624.m_enableExtraPadding = !!i2625[2]
  i2624.m_enableTintAllSprites = !!i2625[3]
  i2624.m_enableParseEscapeCharacters = !!i2625[4]
  i2624.m_EnableRaycastTarget = !!i2625[5]
  i2624.m_GetFontFeaturesAtRuntime = !!i2625[6]
  i2624.m_missingGlyphCharacter = i2625[7]
  i2624.m_warningsDisabled = !!i2625[8]
  request.r(i2625[9], i2625[10], 0, i2624, 'm_defaultFontAsset')
  i2624.m_defaultFontAssetPath = i2625[11]
  i2624.m_defaultFontSize = i2625[12]
  i2624.m_defaultAutoSizeMinRatio = i2625[13]
  i2624.m_defaultAutoSizeMaxRatio = i2625[14]
  i2624.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2625[15], i2625[16] )
  i2624.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2625[17], i2625[18] )
  i2624.m_autoSizeTextContainer = !!i2625[19]
  i2624.m_IsTextObjectScaleStatic = !!i2625[20]
  var i2627 = i2625[21]
  var i2626 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2627.length; i += 2) {
  request.r(i2627[i + 0], i2627[i + 1], 1, i2626, '')
  }
  i2624.m_fallbackFontAssets = i2626
  i2624.m_matchMaterialPreset = !!i2625[22]
  request.r(i2625[23], i2625[24], 0, i2624, 'm_defaultSpriteAsset')
  i2624.m_defaultSpriteAssetPath = i2625[25]
  i2624.m_enableEmojiSupport = !!i2625[26]
  i2624.m_MissingCharacterSpriteUnicode = i2625[27]
  i2624.m_defaultColorGradientPresetsPath = i2625[28]
  request.r(i2625[29], i2625[30], 0, i2624, 'm_defaultStyleSheet')
  i2624.m_StyleSheetsResourcePath = i2625[31]
  request.r(i2625[32], i2625[33], 0, i2624, 'm_leadingCharacters')
  request.r(i2625[34], i2625[35], 0, i2624, 'm_followingCharacters')
  i2624.m_UseModernHangulLineBreakingRules = !!i2625[36]
  return i2624
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2628 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2629 = data
  i2628.m_GlyphIndex = i2629[0]
  i2628.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2629[1], i2628.m_GlyphValueRecord)
  return i2628
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2630 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2631 = data
  i2630.m_XPlacement = i2631[0]
  i2630.m_YPlacement = i2631[1]
  i2630.m_XAdvance = i2631[2]
  i2630.m_YAdvance = i2631[3]
  return i2630
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2632 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2633 = data
  i2632.hashCode = i2633[0]
  request.r(i2633[1], i2633[2], 0, i2632, 'material')
  i2632.materialHashCode = i2633[3]
  request.r(i2633[4], i2633[5], 0, i2632, 'spriteSheet')
  var i2635 = i2633[6]
  var i2634 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.add(request.d('TMPro.TMP_Sprite', i2635[i + 0]));
  }
  i2632.spriteInfoList = i2634
  var i2637 = i2633[7]
  var i2636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2637.length; i += 2) {
  request.r(i2637[i + 0], i2637[i + 1], 1, i2636, '')
  }
  i2632.fallbackSpriteAssets = i2636
  i2632.m_Version = i2633[8]
  i2632.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2633[9], i2632.m_FaceInfo)
  var i2639 = i2633[10]
  var i2638 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.add(request.d('TMPro.TMP_SpriteCharacter', i2639[i + 0]));
  }
  i2632.m_SpriteCharacterTable = i2638
  var i2641 = i2633[11]
  var i2640 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.add(request.d('TMPro.TMP_SpriteGlyph', i2641[i + 0]));
  }
  i2632.m_SpriteGlyphTable = i2640
  return i2632
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2644 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2645 = data
  i2644.name = i2645[0]
  i2644.hashCode = i2645[1]
  i2644.unicode = i2645[2]
  i2644.pivot = new pc.Vec2( i2645[3], i2645[4] )
  request.r(i2645[5], i2645[6], 0, i2644, 'sprite')
  i2644.id = i2645[7]
  i2644.x = i2645[8]
  i2644.y = i2645[9]
  i2644.width = i2645[10]
  i2644.height = i2645[11]
  i2644.xOffset = i2645[12]
  i2644.yOffset = i2645[13]
  i2644.xAdvance = i2645[14]
  i2644.scale = i2645[15]
  return i2644
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2650 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2651 = data
  i2650.m_Name = i2651[0]
  i2650.m_HashCode = i2651[1]
  i2650.m_ElementType = i2651[2]
  i2650.m_Unicode = i2651[3]
  i2650.m_GlyphIndex = i2651[4]
  i2650.m_Scale = i2651[5]
  return i2650
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2654 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2655 = data
  request.r(i2655[0], i2655[1], 0, i2654, 'sprite')
  i2654.m_Index = i2655[2]
  i2654.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2655[3], i2654.m_Metrics)
  i2654.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2655[4], i2654.m_GlyphRect)
  i2654.m_Scale = i2655[5]
  i2654.m_AtlasIndex = i2655[6]
  i2654.m_ClassDefinitionType = i2655[7]
  return i2654
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2656 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2657 = data
  var i2659 = i2657[0]
  var i2658 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.add(request.d('TMPro.TMP_Style', i2659[i + 0]));
  }
  i2656.m_StyleList = i2658
  return i2656
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2662 = root || request.c( 'TMPro.TMP_Style' )
  var i2663 = data
  i2662.m_Name = i2663[0]
  i2662.m_HashCode = i2663[1]
  i2662.m_OpeningDefinition = i2663[2]
  i2662.m_ClosingDefinition = i2663[3]
  i2662.m_OpeningTagArray = i2663[4]
  i2662.m_ClosingTagArray = i2663[5]
  i2662.m_OpeningTagUnicodeArray = i2663[6]
  i2662.m_ClosingTagUnicodeArray = i2663[7]
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2665 = data
  var i2667 = i2665[0]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2667[i + 0]) );
  }
  i2664.files = i2666
  i2664.componentToPrefabIds = i2665[1]
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2671 = data
  i2670.path = i2671[0]
  request.r(i2671[1], i2671[2], 0, i2670, 'unityObject')
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2673 = data
  var i2675 = i2673[0]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2675[i + 0]) );
  }
  i2672.scriptsExecutionOrder = i2674
  var i2677 = i2673[1]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2677[i + 0]) );
  }
  i2672.sortingLayers = i2676
  var i2679 = i2673[2]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2679[i + 0]) );
  }
  i2672.cullingLayers = i2678
  i2672.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2673[3], i2672.timeSettings)
  i2672.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2673[4], i2672.physicsSettings)
  i2672.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2673[5], i2672.physics2DSettings)
  i2672.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2673[6], i2672.qualitySettings)
  i2672.enableRealtimeShadows = !!i2673[7]
  i2672.enableAutoInstancing = !!i2673[8]
  i2672.enableDynamicBatching = !!i2673[9]
  i2672.lightmapEncodingQuality = i2673[10]
  i2672.desiredColorSpace = i2673[11]
  var i2681 = i2673[12]
  var i2680 = []
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.push( i2681[i + 0] );
  }
  i2672.allTags = i2680
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2685 = data
  i2684.name = i2685[0]
  i2684.value = i2685[1]
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2689 = data
  i2688.id = i2689[0]
  i2688.name = i2689[1]
  i2688.value = i2689[2]
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2693 = data
  i2692.id = i2693[0]
  i2692.name = i2693[1]
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2695 = data
  i2694.fixedDeltaTime = i2695[0]
  i2694.maximumDeltaTime = i2695[1]
  i2694.timeScale = i2695[2]
  i2694.maximumParticleTimestep = i2695[3]
  return i2694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2697 = data
  i2696.gravity = new pc.Vec3( i2697[0], i2697[1], i2697[2] )
  i2696.defaultSolverIterations = i2697[3]
  i2696.bounceThreshold = i2697[4]
  i2696.autoSyncTransforms = !!i2697[5]
  i2696.autoSimulation = !!i2697[6]
  var i2699 = i2697[7]
  var i2698 = []
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2699[i + 0]) );
  }
  i2696.collisionMatrix = i2698
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2703 = data
  i2702.enabled = !!i2703[0]
  i2702.layerId = i2703[1]
  i2702.otherLayerId = i2703[2]
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2705 = data
  request.r(i2705[0], i2705[1], 0, i2704, 'material')
  i2704.gravity = new pc.Vec2( i2705[2], i2705[3] )
  i2704.positionIterations = i2705[4]
  i2704.velocityIterations = i2705[5]
  i2704.velocityThreshold = i2705[6]
  i2704.maxLinearCorrection = i2705[7]
  i2704.maxAngularCorrection = i2705[8]
  i2704.maxTranslationSpeed = i2705[9]
  i2704.maxRotationSpeed = i2705[10]
  i2704.baumgarteScale = i2705[11]
  i2704.baumgarteTOIScale = i2705[12]
  i2704.timeToSleep = i2705[13]
  i2704.linearSleepTolerance = i2705[14]
  i2704.angularSleepTolerance = i2705[15]
  i2704.defaultContactOffset = i2705[16]
  i2704.autoSimulation = !!i2705[17]
  i2704.queriesHitTriggers = !!i2705[18]
  i2704.queriesStartInColliders = !!i2705[19]
  i2704.callbacksOnDisable = !!i2705[20]
  i2704.reuseCollisionCallbacks = !!i2705[21]
  i2704.autoSyncTransforms = !!i2705[22]
  var i2707 = i2705[23]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2707[i + 0]) );
  }
  i2704.collisionMatrix = i2706
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2711 = data
  i2710.enabled = !!i2711[0]
  i2710.layerId = i2711[1]
  i2710.otherLayerId = i2711[2]
  return i2710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2713 = data
  var i2715 = i2713[0]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2715[i + 0]) );
  }
  i2712.qualityLevels = i2714
  var i2717 = i2713[1]
  var i2716 = []
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.push( i2717[i + 0] );
  }
  i2712.names = i2716
  i2712.shadows = i2713[2]
  i2712.anisotropicFiltering = i2713[3]
  i2712.antiAliasing = i2713[4]
  i2712.lodBias = i2713[5]
  i2712.shadowCascades = i2713[6]
  i2712.shadowDistance = i2713[7]
  i2712.shadowmaskMode = i2713[8]
  i2712.shadowProjection = i2713[9]
  i2712.shadowResolution = i2713[10]
  i2712.softParticles = !!i2713[11]
  i2712.softVegetation = !!i2713[12]
  i2712.activeColorSpace = i2713[13]
  i2712.desiredColorSpace = i2713[14]
  i2712.masterTextureLimit = i2713[15]
  i2712.maxQueuedFrames = i2713[16]
  i2712.particleRaycastBudget = i2713[17]
  i2712.pixelLightCount = i2713[18]
  i2712.realtimeReflectionProbes = !!i2713[19]
  i2712.shadowCascade2Split = i2713[20]
  i2712.shadowCascade4Split = new pc.Vec3( i2713[21], i2713[22], i2713[23] )
  i2712.streamingMipmapsActive = !!i2713[24]
  i2712.vSyncCount = i2713[25]
  i2712.asyncUploadBufferSize = i2713[26]
  i2712.asyncUploadTimeSlice = i2713[27]
  i2712.billboardsFaceCameraPosition = !!i2713[28]
  i2712.shadowNearPlaneOffset = i2713[29]
  i2712.streamingMipmapsMemoryBudget = i2713[30]
  i2712.maximumLODLevel = i2713[31]
  i2712.streamingMipmapsAddAllCameras = !!i2713[32]
  i2712.streamingMipmapsMaxLevelReduction = i2713[33]
  i2712.streamingMipmapsRenderersPerFrame = i2713[34]
  i2712.resolutionScalingFixedDPIFactor = i2713[35]
  i2712.streamingMipmapsMaxFileIORequests = i2713[36]
  i2712.currentQualityLevel = i2713[37]
  return i2712
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2720 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2721 = data
  request.r(i2721[0], i2721[1], 0, i2720, 'm_ObjectArgument')
  i2720.m_ObjectArgumentAssemblyTypeName = i2721[2]
  i2720.m_IntArgument = i2721[3]
  i2720.m_FloatArgument = i2721[4]
  i2720.m_StringArgument = i2721[5]
  i2720.m_BoolArgument = !!i2721[6]
  return i2720
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2722 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2723 = data
  i2722.xPlacement = i2723[0]
  i2722.yPlacement = i2723[1]
  i2722.xAdvance = i2723[2]
  i2722.yAdvance = i2723[3]
  return i2722
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[3],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[51],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[59],"67":[59],"68":[59],"69":[59],"70":[59],"71":[59],"72":[3],"73":[74],"75":[76],"77":[76],"9":[8],"78":[79],"80":[81],"82":[79],"83":[8],"84":[8],"11":[9],"18":[19,8],"85":[8],"10":[9],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"32":[8],"93":[8],"16":[19,8],"94":[8],"95":[8],"96":[8],"97":[8],"98":[19,8],"99":[8],"100":[6],"101":[6],"7":[6],"102":[6],"103":[3],"104":[3],"105":[106],"107":[3],"108":[109],"110":[8],"111":[19,8],"112":[74],"23":[19,8],"113":[114,74],"115":[74],"116":[74,117],"118":[51],"119":[59],"120":[109],"121":[122],"123":[8],"124":[74,8],"17":[8,19],"125":[8],"126":[19,8],"127":[74],"128":[19,8],"129":[8],"130":[79]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DraggableItem","UnityEngine.CanvasGroup","UnityEngine.BoxCollider2D","DropZone","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "21.1";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "BP_V01_ManhND_AnhPD";

Deserializers.lunaAppID = "31727";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1782";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4276";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, prefabs, mecanim-wasm";

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

Deserializers.buildID = "a3137bc6-5aa2-4a93-b223-793e228cbab2";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

