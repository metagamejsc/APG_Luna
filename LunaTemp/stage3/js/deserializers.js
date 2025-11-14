var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i10294 = root || request.c( 'UnityEngine.JointSpring' )
  var i10295 = data
  i10294.spring = i10295[0]
  i10294.damper = i10295[1]
  i10294.targetPosition = i10295[2]
  return i10294
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i10296 = root || request.c( 'UnityEngine.JointMotor' )
  var i10297 = data
  i10296.m_TargetVelocity = i10297[0]
  i10296.m_Force = i10297[1]
  i10296.m_FreeSpin = i10297[2]
  return i10296
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i10298 = root || request.c( 'UnityEngine.JointLimits' )
  var i10299 = data
  i10298.m_Min = i10299[0]
  i10298.m_Max = i10299[1]
  i10298.m_Bounciness = i10299[2]
  i10298.m_BounceMinVelocity = i10299[3]
  i10298.m_ContactDistance = i10299[4]
  i10298.minBounce = i10299[5]
  i10298.maxBounce = i10299[6]
  return i10298
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i10300 = root || request.c( 'UnityEngine.JointDrive' )
  var i10301 = data
  i10300.m_PositionSpring = i10301[0]
  i10300.m_PositionDamper = i10301[1]
  i10300.m_MaximumForce = i10301[2]
  i10300.m_UseAcceleration = i10301[3]
  return i10300
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i10302 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i10303 = data
  i10302.m_Spring = i10303[0]
  i10302.m_Damper = i10303[1]
  return i10302
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i10304 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i10305 = data
  i10304.m_Limit = i10305[0]
  i10304.m_Bounciness = i10305[1]
  i10304.m_ContactDistance = i10305[2]
  return i10304
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i10306 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i10307 = data
  i10306.m_ExtremumSlip = i10307[0]
  i10306.m_ExtremumValue = i10307[1]
  i10306.m_AsymptoteSlip = i10307[2]
  i10306.m_AsymptoteValue = i10307[3]
  i10306.m_Stiffness = i10307[4]
  return i10306
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i10308 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i10309 = data
  i10308.m_LowerAngle = i10309[0]
  i10308.m_UpperAngle = i10309[1]
  return i10308
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i10310 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i10311 = data
  i10310.m_MotorSpeed = i10311[0]
  i10310.m_MaximumMotorTorque = i10311[1]
  return i10310
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i10312 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i10313 = data
  i10312.m_DampingRatio = i10313[0]
  i10312.m_Frequency = i10313[1]
  i10312.m_Angle = i10313[2]
  return i10312
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i10314 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i10315 = data
  i10314.m_LowerTranslation = i10315[0]
  i10314.m_UpperTranslation = i10315[1]
  return i10314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i10316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i10317 = data
  i10316.name = i10317[0]
  i10316.width = i10317[1]
  i10316.height = i10317[2]
  i10316.mipmapCount = i10317[3]
  i10316.anisoLevel = i10317[4]
  i10316.filterMode = i10317[5]
  i10316.hdr = !!i10317[6]
  i10316.format = i10317[7]
  i10316.wrapMode = i10317[8]
  i10316.alphaIsTransparency = !!i10317[9]
  i10316.alphaSource = i10317[10]
  i10316.graphicsFormat = i10317[11]
  i10316.sRGBTexture = !!i10317[12]
  i10316.desiredColorSpace = i10317[13]
  return i10316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i10318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i10319 = data
  i10318.position = new pc.Vec3( i10319[0], i10319[1], i10319[2] )
  i10318.scale = new pc.Vec3( i10319[3], i10319[4], i10319[5] )
  i10318.rotation = new pc.Quat(i10319[6], i10319[7], i10319[8], i10319[9])
  return i10318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i10320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i10321 = data
  request.r(i10321[0], i10321[1], 0, i10320, 'clip')
  request.r(i10321[2], i10321[3], 0, i10320, 'outputAudioMixerGroup')
  i10320.playOnAwake = !!i10321[4]
  i10320.loop = !!i10321[5]
  i10320.time = i10321[6]
  i10320.volume = i10321[7]
  i10320.pitch = i10321[8]
  i10320.enabled = !!i10321[9]
  return i10320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i10322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i10323 = data
  i10322.enabled = !!i10323[0]
  request.r(i10323[1], i10323[2], 0, i10322, 'sharedMaterial')
  var i10325 = i10323[3]
  var i10324 = []
  for(var i = 0; i < i10325.length; i += 2) {
  request.r(i10325[i + 0], i10325[i + 1], 2, i10324, '')
  }
  i10322.sharedMaterials = i10324
  i10322.receiveShadows = !!i10323[4]
  i10322.shadowCastingMode = i10323[5]
  i10322.sortingLayerID = i10323[6]
  i10322.sortingOrder = i10323[7]
  i10322.lightmapIndex = i10323[8]
  i10322.lightmapSceneIndex = i10323[9]
  i10322.lightmapScaleOffset = new pc.Vec4( i10323[10], i10323[11], i10323[12], i10323[13] )
  i10322.lightProbeUsage = i10323[14]
  i10322.reflectionProbeUsage = i10323[15]
  i10322.color = new pc.Color(i10323[16], i10323[17], i10323[18], i10323[19])
  request.r(i10323[20], i10323[21], 0, i10322, 'sprite')
  i10322.flipX = !!i10323[22]
  i10322.flipY = !!i10323[23]
  i10322.drawMode = i10323[24]
  i10322.size = new pc.Vec2( i10323[25], i10323[26] )
  i10322.tileMode = i10323[27]
  i10322.adaptiveModeThreshold = i10323[28]
  i10322.maskInteraction = i10323[29]
  i10322.spriteSortPoint = i10323[30]
  return i10322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i10328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i10329 = data
  i10328.name = i10329[0]
  i10328.tagId = i10329[1]
  i10328.enabled = !!i10329[2]
  i10328.isStatic = !!i10329[3]
  i10328.layer = i10329[4]
  return i10328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i10330 = root || new pc.UnityMaterial()
  var i10331 = data
  i10330.name = i10331[0]
  request.r(i10331[1], i10331[2], 0, i10330, 'shader')
  i10330.renderQueue = i10331[3]
  i10330.enableInstancing = !!i10331[4]
  var i10333 = i10331[5]
  var i10332 = []
  for(var i = 0; i < i10333.length; i += 1) {
    i10332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i10333[i + 0]) );
  }
  i10330.floatParameters = i10332
  var i10335 = i10331[6]
  var i10334 = []
  for(var i = 0; i < i10335.length; i += 1) {
    i10334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i10335[i + 0]) );
  }
  i10330.colorParameters = i10334
  var i10337 = i10331[7]
  var i10336 = []
  for(var i = 0; i < i10337.length; i += 1) {
    i10336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i10337[i + 0]) );
  }
  i10330.vectorParameters = i10336
  var i10339 = i10331[8]
  var i10338 = []
  for(var i = 0; i < i10339.length; i += 1) {
    i10338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i10339[i + 0]) );
  }
  i10330.textureParameters = i10338
  var i10341 = i10331[9]
  var i10340 = []
  for(var i = 0; i < i10341.length; i += 1) {
    i10340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i10341[i + 0]) );
  }
  i10330.materialFlags = i10340
  return i10330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i10344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i10345 = data
  i10344.name = i10345[0]
  i10344.value = i10345[1]
  return i10344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i10348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i10349 = data
  i10348.name = i10349[0]
  i10348.value = new pc.Color(i10349[1], i10349[2], i10349[3], i10349[4])
  return i10348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i10352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i10353 = data
  i10352.name = i10353[0]
  i10352.value = new pc.Vec4( i10353[1], i10353[2], i10353[3], i10353[4] )
  return i10352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i10356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i10357 = data
  i10356.name = i10357[0]
  request.r(i10357[1], i10357[2], 0, i10356, 'value')
  return i10356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i10360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i10361 = data
  i10360.name = i10361[0]
  i10360.enabled = !!i10361[1]
  return i10360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i10362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i10363 = data
  i10362.name = i10363[0]
  i10362.halfPrecision = !!i10363[1]
  i10362.vertexCount = i10363[2]
  i10362.aabb = i10363[3]
  var i10365 = i10363[4]
  var i10364 = []
  for(var i = 0; i < i10365.length; i += 1) {
    i10364.push( !!i10365[i + 0] );
  }
  i10362.streams = i10364
  i10362.vertices = i10363[5]
  var i10367 = i10363[6]
  var i10366 = []
  for(var i = 0; i < i10367.length; i += 1) {
    i10366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i10367[i + 0]) );
  }
  i10362.subMeshes = i10366
  var i10369 = i10363[7]
  var i10368 = []
  for(var i = 0; i < i10369.length; i += 16) {
    i10368.push( new pc.Mat4().setData(i10369[i + 0], i10369[i + 1], i10369[i + 2], i10369[i + 3],  i10369[i + 4], i10369[i + 5], i10369[i + 6], i10369[i + 7],  i10369[i + 8], i10369[i + 9], i10369[i + 10], i10369[i + 11],  i10369[i + 12], i10369[i + 13], i10369[i + 14], i10369[i + 15]) );
  }
  i10362.bindposes = i10368
  var i10371 = i10363[8]
  var i10370 = []
  for(var i = 0; i < i10371.length; i += 1) {
    i10370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i10371[i + 0]) );
  }
  i10362.blendShapes = i10370
  return i10362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i10376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i10377 = data
  i10376.triangles = i10377[0]
  return i10376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i10382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i10383 = data
  i10382.name = i10383[0]
  var i10385 = i10383[1]
  var i10384 = []
  for(var i = 0; i < i10385.length; i += 1) {
    i10384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i10385[i + 0]) );
  }
  i10382.frames = i10384
  return i10382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i10386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i10387 = data
  i10386.name = i10387[0]
  i10386.index = i10387[1]
  i10386.startup = !!i10387[2]
  return i10386
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i10388 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i10389 = data
  request.r(i10389[0], i10389[1], 0, i10388, 'm_FirstSelected')
  i10388.m_sendNavigationEvents = !!i10389[2]
  i10388.m_DragThreshold = i10389[3]
  return i10388
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i10390 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i10391 = data
  i10390.m_HorizontalAxis = i10391[0]
  i10390.m_VerticalAxis = i10391[1]
  i10390.m_SubmitButton = i10391[2]
  i10390.m_CancelButton = i10391[3]
  i10390.m_InputActionsPerSecond = i10391[4]
  i10390.m_RepeatDelay = i10391[5]
  i10390.m_ForceModuleActive = !!i10391[6]
  i10390.m_SendPointerHoverToParent = !!i10391[7]
  return i10390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i10392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i10393 = data
  i10392.pivot = new pc.Vec2( i10393[0], i10393[1] )
  i10392.anchorMin = new pc.Vec2( i10393[2], i10393[3] )
  i10392.anchorMax = new pc.Vec2( i10393[4], i10393[5] )
  i10392.sizeDelta = new pc.Vec2( i10393[6], i10393[7] )
  i10392.anchoredPosition3D = new pc.Vec3( i10393[8], i10393[9], i10393[10] )
  i10392.rotation = new pc.Quat(i10393[11], i10393[12], i10393[13], i10393[14])
  i10392.scale = new pc.Vec3( i10393[15], i10393[16], i10393[17] )
  return i10392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i10394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i10395 = data
  i10394.enabled = !!i10395[0]
  i10394.planeDistance = i10395[1]
  i10394.referencePixelsPerUnit = i10395[2]
  i10394.isFallbackOverlay = !!i10395[3]
  i10394.renderMode = i10395[4]
  i10394.renderOrder = i10395[5]
  i10394.sortingLayerName = i10395[6]
  i10394.sortingOrder = i10395[7]
  i10394.scaleFactor = i10395[8]
  request.r(i10395[9], i10395[10], 0, i10394, 'worldCamera')
  i10394.overrideSorting = !!i10395[11]
  i10394.pixelPerfect = !!i10395[12]
  i10394.targetDisplay = i10395[13]
  i10394.overridePixelPerfect = !!i10395[14]
  return i10394
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i10396 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i10397 = data
  i10396.m_UiScaleMode = i10397[0]
  i10396.m_ReferencePixelsPerUnit = i10397[1]
  i10396.m_ScaleFactor = i10397[2]
  i10396.m_ReferenceResolution = new pc.Vec2( i10397[3], i10397[4] )
  i10396.m_ScreenMatchMode = i10397[5]
  i10396.m_MatchWidthOrHeight = i10397[6]
  i10396.m_PhysicalUnit = i10397[7]
  i10396.m_FallbackScreenDPI = i10397[8]
  i10396.m_DefaultSpriteDPI = i10397[9]
  i10396.m_DynamicPixelsPerUnit = i10397[10]
  i10396.m_PresetInfoIsWorld = !!i10397[11]
  return i10396
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i10398 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i10399 = data
  i10398.m_IgnoreReversedGraphics = !!i10399[0]
  i10398.m_BlockingObjects = i10399[1]
  i10398.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i10399[2] )
  return i10398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i10400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i10401 = data
  i10400.cullTransparentMesh = !!i10401[0]
  return i10400
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i10402 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i10403 = data
  request.r(i10403[0], i10403[1], 0, i10402, 'm_Texture')
  i10402.m_UVRect = UnityEngine.Rect.MinMaxRect(i10403[2], i10403[3], i10403[4], i10403[5])
  request.r(i10403[6], i10403[7], 0, i10402, 'm_Material')
  i10402.m_Maskable = !!i10403[8]
  i10402.m_Color = new pc.Color(i10403[9], i10403[10], i10403[11], i10403[12])
  i10402.m_RaycastTarget = !!i10403[13]
  i10402.m_RaycastPadding = new pc.Vec4( i10403[14], i10403[15], i10403[16], i10403[17] )
  return i10402
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i10404 = root || request.c( 'LunaManager' )
  var i10405 = data
  var i10407 = i10405[0]
  var i10406 = []
  for(var i = 0; i < i10407.length; i += 2) {
  request.r(i10407[i + 0], i10407[i + 1], 2, i10406, '')
  }
  i10404.lstBtnInstall = i10406
  request.r(i10405[1], i10405[2], 0, i10404, 'EndCard')
  i10404.countPlay = i10405[3]
  i10404.countPlayFinal = i10405[4]
  i10404.timeDropFinal = i10405[5]
  i10404.colorBG = new pc.Color(i10405[6], i10405[7], i10405[8], i10405[9])
  request.r(i10405[10], i10405[11], 0, i10404, 'texture2D')
  request.r(i10405[12], i10405[13], 0, i10404, 'rawImageBG')
  request.r(i10405[14], i10405[15], 0, i10404, 'hand')
  request.r(i10405[16], i10405[17], 0, i10404, 'iQFill')
  request.r(i10405[18], i10405[19], 0, i10404, 'timeFillImage')
  request.r(i10405[20], i10405[21], 0, i10404, 'timeText')
  i10404.isEndGame = !!i10405[22]
  return i10404
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i10410 = root || request.c( 'UnityEngine.UI.Image' )
  var i10411 = data
  request.r(i10411[0], i10411[1], 0, i10410, 'm_Sprite')
  i10410.m_Type = i10411[2]
  i10410.m_PreserveAspect = !!i10411[3]
  i10410.m_FillCenter = !!i10411[4]
  i10410.m_FillMethod = i10411[5]
  i10410.m_FillAmount = i10411[6]
  i10410.m_FillClockwise = !!i10411[7]
  i10410.m_FillOrigin = i10411[8]
  i10410.m_UseSpriteMesh = !!i10411[9]
  i10410.m_PixelsPerUnitMultiplier = i10411[10]
  request.r(i10411[11], i10411[12], 0, i10410, 'm_Material')
  i10410.m_Maskable = !!i10411[13]
  i10410.m_Color = new pc.Color(i10411[14], i10411[15], i10411[16], i10411[17])
  i10410.m_RaycastTarget = !!i10411[18]
  i10410.m_RaycastPadding = new pc.Vec4( i10411[19], i10411[20], i10411[21], i10411[22] )
  return i10410
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i10412 = root || request.c( 'UnityEngine.UI.Button' )
  var i10413 = data
  i10412.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i10413[0], i10412.m_OnClick)
  i10412.m_Navigation = request.d('UnityEngine.UI.Navigation', i10413[1], i10412.m_Navigation)
  i10412.m_Transition = i10413[2]
  i10412.m_Colors = request.d('UnityEngine.UI.ColorBlock', i10413[3], i10412.m_Colors)
  i10412.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i10413[4], i10412.m_SpriteState)
  i10412.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i10413[5], i10412.m_AnimationTriggers)
  i10412.m_Interactable = !!i10413[6]
  request.r(i10413[7], i10413[8], 0, i10412, 'm_TargetGraphic')
  return i10412
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i10414 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i10415 = data
  i10414.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i10415[0], i10414.m_PersistentCalls)
  return i10414
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i10416 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i10417 = data
  var i10419 = i10417[0]
  var i10418 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i10419.length; i += 1) {
    i10418.add(request.d('UnityEngine.Events.PersistentCall', i10419[i + 0]));
  }
  i10416.m_Calls = i10418
  return i10416
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i10422 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i10423 = data
  request.r(i10423[0], i10423[1], 0, i10422, 'm_Target')
  i10422.m_TargetAssemblyTypeName = i10423[2]
  i10422.m_MethodName = i10423[3]
  i10422.m_Mode = i10423[4]
  i10422.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i10423[5], i10422.m_Arguments)
  i10422.m_CallState = i10423[6]
  return i10422
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i10424 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i10425 = data
  i10424.m_Mode = i10425[0]
  i10424.m_WrapAround = !!i10425[1]
  request.r(i10425[2], i10425[3], 0, i10424, 'm_SelectOnUp')
  request.r(i10425[4], i10425[5], 0, i10424, 'm_SelectOnDown')
  request.r(i10425[6], i10425[7], 0, i10424, 'm_SelectOnLeft')
  request.r(i10425[8], i10425[9], 0, i10424, 'm_SelectOnRight')
  return i10424
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i10426 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i10427 = data
  i10426.m_NormalColor = new pc.Color(i10427[0], i10427[1], i10427[2], i10427[3])
  i10426.m_HighlightedColor = new pc.Color(i10427[4], i10427[5], i10427[6], i10427[7])
  i10426.m_PressedColor = new pc.Color(i10427[8], i10427[9], i10427[10], i10427[11])
  i10426.m_SelectedColor = new pc.Color(i10427[12], i10427[13], i10427[14], i10427[15])
  i10426.m_DisabledColor = new pc.Color(i10427[16], i10427[17], i10427[18], i10427[19])
  i10426.m_ColorMultiplier = i10427[20]
  i10426.m_FadeDuration = i10427[21]
  return i10426
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i10428 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i10429 = data
  request.r(i10429[0], i10429[1], 0, i10428, 'm_HighlightedSprite')
  request.r(i10429[2], i10429[3], 0, i10428, 'm_PressedSprite')
  request.r(i10429[4], i10429[5], 0, i10428, 'm_SelectedSprite')
  request.r(i10429[6], i10429[7], 0, i10428, 'm_DisabledSprite')
  return i10428
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i10430 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i10431 = data
  i10430.m_NormalTrigger = i10431[0]
  i10430.m_HighlightedTrigger = i10431[1]
  i10430.m_PressedTrigger = i10431[2]
  i10430.m_SelectedTrigger = i10431[3]
  i10430.m_DisabledTrigger = i10431[4]
  return i10430
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i10432 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i10433 = data
  i10432.m_hasFontAssetChanged = !!i10433[0]
  request.r(i10433[1], i10433[2], 0, i10432, 'm_baseMaterial')
  i10432.m_maskOffset = new pc.Vec4( i10433[3], i10433[4], i10433[5], i10433[6] )
  i10432.m_text = i10433[7]
  i10432.m_isRightToLeft = !!i10433[8]
  request.r(i10433[9], i10433[10], 0, i10432, 'm_fontAsset')
  request.r(i10433[11], i10433[12], 0, i10432, 'm_sharedMaterial')
  var i10435 = i10433[13]
  var i10434 = []
  for(var i = 0; i < i10435.length; i += 2) {
  request.r(i10435[i + 0], i10435[i + 1], 2, i10434, '')
  }
  i10432.m_fontSharedMaterials = i10434
  request.r(i10433[14], i10433[15], 0, i10432, 'm_fontMaterial')
  var i10437 = i10433[16]
  var i10436 = []
  for(var i = 0; i < i10437.length; i += 2) {
  request.r(i10437[i + 0], i10437[i + 1], 2, i10436, '')
  }
  i10432.m_fontMaterials = i10436
  i10432.m_fontColor32 = UnityEngine.Color32.ConstructColor(i10433[17], i10433[18], i10433[19], i10433[20])
  i10432.m_fontColor = new pc.Color(i10433[21], i10433[22], i10433[23], i10433[24])
  i10432.m_enableVertexGradient = !!i10433[25]
  i10432.m_colorMode = i10433[26]
  i10432.m_fontColorGradient = request.d('TMPro.VertexGradient', i10433[27], i10432.m_fontColorGradient)
  request.r(i10433[28], i10433[29], 0, i10432, 'm_fontColorGradientPreset')
  request.r(i10433[30], i10433[31], 0, i10432, 'm_spriteAsset')
  i10432.m_tintAllSprites = !!i10433[32]
  request.r(i10433[33], i10433[34], 0, i10432, 'm_StyleSheet')
  i10432.m_TextStyleHashCode = i10433[35]
  i10432.m_overrideHtmlColors = !!i10433[36]
  i10432.m_faceColor = UnityEngine.Color32.ConstructColor(i10433[37], i10433[38], i10433[39], i10433[40])
  i10432.m_fontSize = i10433[41]
  i10432.m_fontSizeBase = i10433[42]
  i10432.m_fontWeight = i10433[43]
  i10432.m_enableAutoSizing = !!i10433[44]
  i10432.m_fontSizeMin = i10433[45]
  i10432.m_fontSizeMax = i10433[46]
  i10432.m_fontStyle = i10433[47]
  i10432.m_HorizontalAlignment = i10433[48]
  i10432.m_VerticalAlignment = i10433[49]
  i10432.m_textAlignment = i10433[50]
  i10432.m_characterSpacing = i10433[51]
  i10432.m_wordSpacing = i10433[52]
  i10432.m_lineSpacing = i10433[53]
  i10432.m_lineSpacingMax = i10433[54]
  i10432.m_paragraphSpacing = i10433[55]
  i10432.m_charWidthMaxAdj = i10433[56]
  i10432.m_enableWordWrapping = !!i10433[57]
  i10432.m_wordWrappingRatios = i10433[58]
  i10432.m_overflowMode = i10433[59]
  request.r(i10433[60], i10433[61], 0, i10432, 'm_linkedTextComponent')
  request.r(i10433[62], i10433[63], 0, i10432, 'parentLinkedComponent')
  i10432.m_enableKerning = !!i10433[64]
  i10432.m_enableExtraPadding = !!i10433[65]
  i10432.checkPaddingRequired = !!i10433[66]
  i10432.m_isRichText = !!i10433[67]
  i10432.m_parseCtrlCharacters = !!i10433[68]
  i10432.m_isOrthographic = !!i10433[69]
  i10432.m_isCullingEnabled = !!i10433[70]
  i10432.m_horizontalMapping = i10433[71]
  i10432.m_verticalMapping = i10433[72]
  i10432.m_uvLineOffset = i10433[73]
  i10432.m_geometrySortingOrder = i10433[74]
  i10432.m_IsTextObjectScaleStatic = !!i10433[75]
  i10432.m_VertexBufferAutoSizeReduction = !!i10433[76]
  i10432.m_useMaxVisibleDescender = !!i10433[77]
  i10432.m_pageToDisplay = i10433[78]
  i10432.m_margin = new pc.Vec4( i10433[79], i10433[80], i10433[81], i10433[82] )
  i10432.m_isUsingLegacyAnimationComponent = !!i10433[83]
  i10432.m_isVolumetricText = !!i10433[84]
  request.r(i10433[85], i10433[86], 0, i10432, 'm_Material')
  i10432.m_Maskable = !!i10433[87]
  i10432.m_Color = new pc.Color(i10433[88], i10433[89], i10433[90], i10433[91])
  i10432.m_RaycastTarget = !!i10433[92]
  i10432.m_RaycastPadding = new pc.Vec4( i10433[93], i10433[94], i10433[95], i10433[96] )
  return i10432
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i10438 = root || request.c( 'TMPro.VertexGradient' )
  var i10439 = data
  i10438.topLeft = new pc.Color(i10439[0], i10439[1], i10439[2], i10439[3])
  i10438.topRight = new pc.Color(i10439[4], i10439[5], i10439[6], i10439[7])
  i10438.bottomLeft = new pc.Color(i10439[8], i10439[9], i10439[10], i10439[11])
  i10438.bottomRight = new pc.Color(i10439[12], i10439[13], i10439[14], i10439[15])
  return i10438
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i10440 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i10441 = data
  request.r(i10441[0], i10441[1], 0, i10440, 'm_ObjectArgument')
  i10440.m_ObjectArgumentAssemblyTypeName = i10441[2]
  i10440.m_IntArgument = i10441[3]
  i10440.m_FloatArgument = i10441[4]
  i10440.m_StringArgument = i10441[5]
  i10440.m_BoolArgument = !!i10441[6]
  return i10440
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i10442 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i10443 = data
  i10442.targetIsSelf = !!i10443[0]
  request.r(i10443[1], i10443[2], 0, i10442, 'targetGO')
  i10442.tweenTargetIsTargetGO = !!i10443[3]
  i10442.delay = i10443[4]
  i10442.duration = i10443[5]
  i10442.easeType = i10443[6]
  i10442.easeCurve = new pc.AnimationCurve( { keys_flow: i10443[7] } )
  i10442.loopType = i10443[8]
  i10442.loops = i10443[9]
  i10442.id = i10443[10]
  i10442.isRelative = !!i10443[11]
  i10442.isFrom = !!i10443[12]
  i10442.isIndependentUpdate = !!i10443[13]
  i10442.autoKill = !!i10443[14]
  i10442.autoGenerate = !!i10443[15]
  i10442.isActive = !!i10443[16]
  i10442.isValid = !!i10443[17]
  request.r(i10443[18], i10443[19], 0, i10442, 'target')
  i10442.animationType = i10443[20]
  i10442.targetType = i10443[21]
  i10442.forcedTargetType = i10443[22]
  i10442.autoPlay = !!i10443[23]
  i10442.useTargetAsV3 = !!i10443[24]
  i10442.endValueFloat = i10443[25]
  i10442.endValueV3 = new pc.Vec3( i10443[26], i10443[27], i10443[28] )
  i10442.endValueV2 = new pc.Vec2( i10443[29], i10443[30] )
  i10442.endValueColor = new pc.Color(i10443[31], i10443[32], i10443[33], i10443[34])
  i10442.endValueString = i10443[35]
  i10442.endValueRect = UnityEngine.Rect.MinMaxRect(i10443[36], i10443[37], i10443[38], i10443[39])
  request.r(i10443[40], i10443[41], 0, i10442, 'endValueTransform')
  i10442.optionalBool0 = !!i10443[42]
  i10442.optionalBool1 = !!i10443[43]
  i10442.optionalFloat0 = i10443[44]
  i10442.optionalInt0 = i10443[45]
  i10442.optionalRotationMode = i10443[46]
  i10442.optionalScrambleMode = i10443[47]
  i10442.optionalShakeRandomnessMode = i10443[48]
  i10442.optionalString = i10443[49]
  i10442.updateType = i10443[50]
  i10442.isSpeedBased = !!i10443[51]
  i10442.hasOnStart = !!i10443[52]
  i10442.hasOnPlay = !!i10443[53]
  i10442.hasOnUpdate = !!i10443[54]
  i10442.hasOnStepComplete = !!i10443[55]
  i10442.hasOnComplete = !!i10443[56]
  i10442.hasOnTweenCreated = !!i10443[57]
  i10442.hasOnRewind = !!i10443[58]
  i10442.onStart = request.d('UnityEngine.Events.UnityEvent', i10443[59], i10442.onStart)
  i10442.onPlay = request.d('UnityEngine.Events.UnityEvent', i10443[60], i10442.onPlay)
  i10442.onUpdate = request.d('UnityEngine.Events.UnityEvent', i10443[61], i10442.onUpdate)
  i10442.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i10443[62], i10442.onStepComplete)
  i10442.onComplete = request.d('UnityEngine.Events.UnityEvent', i10443[63], i10442.onComplete)
  i10442.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i10443[64], i10442.onTweenCreated)
  i10442.onRewind = request.d('UnityEngine.Events.UnityEvent', i10443[65], i10442.onRewind)
  return i10442
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i10444 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i10445 = data
  i10444.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i10445[0], i10444.m_PersistentCalls)
  return i10444
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i10446 = root || request.c( 'UnityEngine.UI.Mask' )
  var i10447 = data
  i10446.m_ShowMaskGraphic = !!i10447[0]
  return i10446
}

Deserializers["StepManager"] = function (request, data, root) {
  var i10448 = root || request.c( 'StepManager' )
  var i10449 = data
  var i10451 = i10449[0]
  var i10450 = new (System.Collections.Generic.List$1(Bridge.ns('StepData')))
  for(var i = 0; i < i10451.length; i += 1) {
    i10450.add(request.d('StepData', i10451[i + 0]));
  }
  i10448.steps = i10450
  request.r(i10449[1], i10449[2], 0, i10448, 'playerTransform')
  i10448.moveDuration = i10449[3]
  request.r(i10449[4], i10449[5], 0, i10448, 'progressFillImage')
  request.r(i10449[6], i10449[7], 0, i10448, 'stepProgressText')
  i10448.maxStep = i10449[8]
  return i10448
}

Deserializers["StepData"] = function (request, data, root) {
  var i10454 = root || request.c( 'StepData' )
  var i10455 = data
  request.r(i10455[0], i10455[1], 0, i10454, 'object1')
  request.r(i10455[2], i10455[3], 0, i10454, 'targetSkeleton')
  request.r(i10455[4], i10455[5], 0, i10454, 'Skeletondata')
  i10454.targetAnimation = i10455[6]
  var i10457 = i10455[7]
  var i10456 = []
  for(var i = 0; i < i10457.length; i += 1) {
    i10456.push( i10457[i + 0] );
  }
  i10454.listEvent = i10456
  i10454.movePlayerAfterStep = !!i10455[8]
  return i10454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i10460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i10461 = data
  i10460.usedByComposite = !!i10461[0]
  i10460.autoTiling = !!i10461[1]
  i10460.size = new pc.Vec2( i10461[2], i10461[3] )
  i10460.edgeRadius = i10461[4]
  i10460.enabled = !!i10461[5]
  i10460.isTrigger = !!i10461[6]
  i10460.usedByEffector = !!i10461[7]
  i10460.density = i10461[8]
  i10460.offset = new pc.Vec2( i10461[9], i10461[10] )
  request.r(i10461[11], i10461[12], 0, i10460, 'material')
  return i10460
}

Deserializers["DragHandler"] = function (request, data, root) {
  var i10462 = root || request.c( 'DragHandler' )
  var i10463 = data
  request.r(i10463[0], i10463[1], 0, i10462, 'childSkeleton')
  i10462.correctDropAnimation = i10463[2]
  i10462.correctSkin = i10463[3]
  return i10462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i10464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i10465 = data
  request.r(i10465[0], i10465[1], 0, i10464, 'additionalVertexStreams')
  i10464.enabled = !!i10465[2]
  request.r(i10465[3], i10465[4], 0, i10464, 'sharedMaterial')
  var i10467 = i10465[5]
  var i10466 = []
  for(var i = 0; i < i10467.length; i += 2) {
  request.r(i10467[i + 0], i10467[i + 1], 2, i10466, '')
  }
  i10464.sharedMaterials = i10466
  i10464.receiveShadows = !!i10465[6]
  i10464.shadowCastingMode = i10465[7]
  i10464.sortingLayerID = i10465[8]
  i10464.sortingOrder = i10465[9]
  i10464.lightmapIndex = i10465[10]
  i10464.lightmapSceneIndex = i10465[11]
  i10464.lightmapScaleOffset = new pc.Vec4( i10465[12], i10465[13], i10465[14], i10465[15] )
  i10464.lightProbeUsage = i10465[16]
  i10464.reflectionProbeUsage = i10465[17]
  return i10464
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i10468 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i10469 = data
  i10468.loop = !!i10469[0]
  i10468.timeScale = i10469[1]
  request.r(i10469[2], i10469[3], 0, i10468, 'skeletonDataAsset')
  i10468.initialSkinName = i10469[4]
  i10468.fixPrefabOverrideViaMeshFilter = i10469[5]
  i10468.initialFlipX = !!i10469[6]
  i10468.initialFlipY = !!i10469[7]
  i10468.updateWhenInvisible = i10469[8]
  i10468.zSpacing = i10469[9]
  i10468.useClipping = !!i10469[10]
  i10468.immutableTriangles = !!i10469[11]
  i10468.pmaVertexColors = !!i10469[12]
  i10468.clearStateOnDisable = !!i10469[13]
  i10468.tintBlack = !!i10469[14]
  i10468.singleSubmesh = !!i10469[15]
  i10468.fixDrawOrder = !!i10469[16]
  i10468.addNormals = !!i10469[17]
  i10468.calculateTangents = !!i10469[18]
  i10468.maskInteraction = i10469[19]
  i10468.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i10469[20], i10468.maskMaterials)
  i10468.disableRenderingOnOverride = !!i10469[21]
  i10468.updateTiming = i10469[22]
  i10468.unscaledTime = !!i10469[23]
  i10468._animationName = i10469[24]
  var i10471 = i10469[25]
  var i10470 = []
  for(var i = 0; i < i10471.length; i += 1) {
    i10470.push( i10471[i + 0] );
  }
  i10468.separatorSlotNames = i10470
  i10468.physicsPositionInheritanceFactor = new pc.Vec2( i10469[26], i10469[27] )
  i10468.physicsRotationInheritanceFactor = i10469[28]
  request.r(i10469[29], i10469[30], 0, i10468, 'physicsMovementRelativeTo')
  return i10468
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i10472 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i10473 = data
  var i10475 = i10473[0]
  var i10474 = []
  for(var i = 0; i < i10475.length; i += 2) {
  request.r(i10475[i + 0], i10475[i + 1], 2, i10474, '')
  }
  i10472.materialsMaskDisabled = i10474
  var i10477 = i10473[1]
  var i10476 = []
  for(var i = 0; i < i10477.length; i += 2) {
  request.r(i10477[i + 0], i10477[i + 1], 2, i10476, '')
  }
  i10472.materialsInsideMask = i10476
  var i10479 = i10473[2]
  var i10478 = []
  for(var i = 0; i < i10479.length; i += 2) {
  request.r(i10479[i + 0], i10479[i + 1], 2, i10478, '')
  }
  i10472.materialsOutsideMask = i10478
  return i10472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i10480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i10481 = data
  request.r(i10481[0], i10481[1], 0, i10480, 'sharedMesh')
  return i10480
}

Deserializers["StepController"] = function (request, data, root) {
  var i10482 = root || request.c( 'StepController' )
  var i10483 = data
  var i10485 = i10483[0]
  var i10484 = new (System.Collections.Generic.List$1(Bridge.ns('AudioSkeAnim')))
  for(var i = 0; i < i10485.length; i += 1) {
    i10484.add(request.d('AudioSkeAnim', i10485[i + 0]));
  }
  i10482.listSoundEvent = i10484
  return i10482
}

Deserializers["AudioSkeAnim"] = function (request, data, root) {
  var i10488 = root || request.c( 'AudioSkeAnim' )
  var i10489 = data
  i10488.Event = i10489[0]
  request.r(i10489[1], i10489[2], 0, i10488, 'sound')
  return i10488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i10490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i10491 = data
  i10490.enabled = !!i10491[0]
  i10490.aspect = i10491[1]
  i10490.orthographic = !!i10491[2]
  i10490.orthographicSize = i10491[3]
  i10490.backgroundColor = new pc.Color(i10491[4], i10491[5], i10491[6], i10491[7])
  i10490.nearClipPlane = i10491[8]
  i10490.farClipPlane = i10491[9]
  i10490.fieldOfView = i10491[10]
  i10490.depth = i10491[11]
  i10490.clearFlags = i10491[12]
  i10490.cullingMask = i10491[13]
  i10490.rect = i10491[14]
  request.r(i10491[15], i10491[16], 0, i10490, 'targetTexture')
  i10490.usePhysicalProperties = !!i10491[17]
  i10490.focalLength = i10491[18]
  i10490.sensorSize = new pc.Vec2( i10491[19], i10491[20] )
  i10490.lensShift = new pc.Vec2( i10491[21], i10491[22] )
  i10490.gateFit = i10491[23]
  return i10490
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i10492 = root || request.c( 'AudioManager' )
  var i10493 = data
  return i10492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i10494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i10495 = data
  i10494.ambientIntensity = i10495[0]
  i10494.reflectionIntensity = i10495[1]
  i10494.ambientMode = i10495[2]
  i10494.ambientLight = new pc.Color(i10495[3], i10495[4], i10495[5], i10495[6])
  i10494.ambientSkyColor = new pc.Color(i10495[7], i10495[8], i10495[9], i10495[10])
  i10494.ambientGroundColor = new pc.Color(i10495[11], i10495[12], i10495[13], i10495[14])
  i10494.ambientEquatorColor = new pc.Color(i10495[15], i10495[16], i10495[17], i10495[18])
  i10494.fogColor = new pc.Color(i10495[19], i10495[20], i10495[21], i10495[22])
  i10494.fogEndDistance = i10495[23]
  i10494.fogStartDistance = i10495[24]
  i10494.fogDensity = i10495[25]
  i10494.fog = !!i10495[26]
  request.r(i10495[27], i10495[28], 0, i10494, 'skybox')
  i10494.fogMode = i10495[29]
  var i10497 = i10495[30]
  var i10496 = []
  for(var i = 0; i < i10497.length; i += 1) {
    i10496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i10497[i + 0]) );
  }
  i10494.lightmaps = i10496
  i10494.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i10495[31], i10494.lightProbes)
  i10494.lightmapsMode = i10495[32]
  i10494.mixedBakeMode = i10495[33]
  i10494.environmentLightingMode = i10495[34]
  i10494.ambientProbe = new pc.SphericalHarmonicsL2(i10495[35])
  i10494.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i10495[36])
  i10494.useReferenceAmbientProbe = !!i10495[37]
  request.r(i10495[38], i10495[39], 0, i10494, 'customReflection')
  request.r(i10495[40], i10495[41], 0, i10494, 'defaultReflection')
  i10494.defaultReflectionMode = i10495[42]
  i10494.defaultReflectionResolution = i10495[43]
  i10494.sunLightObjectId = i10495[44]
  i10494.pixelLightCount = i10495[45]
  i10494.defaultReflectionHDR = !!i10495[46]
  i10494.hasLightDataAsset = !!i10495[47]
  i10494.hasManualGenerate = !!i10495[48]
  return i10494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i10500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i10501 = data
  request.r(i10501[0], i10501[1], 0, i10500, 'lightmapColor')
  request.r(i10501[2], i10501[3], 0, i10500, 'lightmapDirection')
  return i10500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i10502 = root || new UnityEngine.LightProbes()
  var i10503 = data
  return i10502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i10510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i10511 = data
  var i10513 = i10511[0]
  var i10512 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i10513.length; i += 1) {
    i10512.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i10513[i + 0]));
  }
  i10510.ShaderCompilationErrors = i10512
  i10510.name = i10511[1]
  i10510.guid = i10511[2]
  var i10515 = i10511[3]
  var i10514 = []
  for(var i = 0; i < i10515.length; i += 1) {
    i10514.push( i10515[i + 0] );
  }
  i10510.shaderDefinedKeywords = i10514
  var i10517 = i10511[4]
  var i10516 = []
  for(var i = 0; i < i10517.length; i += 1) {
    i10516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i10517[i + 0]) );
  }
  i10510.passes = i10516
  var i10519 = i10511[5]
  var i10518 = []
  for(var i = 0; i < i10519.length; i += 1) {
    i10518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i10519[i + 0]) );
  }
  i10510.usePasses = i10518
  var i10521 = i10511[6]
  var i10520 = []
  for(var i = 0; i < i10521.length; i += 1) {
    i10520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i10521[i + 0]) );
  }
  i10510.defaultParameterValues = i10520
  request.r(i10511[7], i10511[8], 0, i10510, 'unityFallbackShader')
  i10510.readDepth = !!i10511[9]
  i10510.isCreatedByShaderGraph = !!i10511[10]
  i10510.usedBatchUniforms = i10511[11]
  return i10510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i10524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i10525 = data
  i10524.shaderName = i10525[0]
  i10524.errorMessage = i10525[1]
  return i10524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i10528 = root || new pc.UnityShaderPass()
  var i10529 = data
  i10528.id = i10529[0]
  i10528.subShaderIndex = i10529[1]
  i10528.name = i10529[2]
  i10528.passType = i10529[3]
  i10528.grabPassTextureName = i10529[4]
  i10528.usePass = !!i10529[5]
  i10528.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10529[6], i10528.zTest)
  i10528.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10529[7], i10528.zWrite)
  i10528.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10529[8], i10528.culling)
  i10528.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i10529[9], i10528.blending)
  i10528.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i10529[10], i10528.alphaBlending)
  i10528.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10529[11], i10528.colorWriteMask)
  i10528.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10529[12], i10528.offsetUnits)
  i10528.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10529[13], i10528.offsetFactor)
  i10528.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10529[14], i10528.stencilRef)
  i10528.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10529[15], i10528.stencilReadMask)
  i10528.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10529[16], i10528.stencilWriteMask)
  i10528.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i10529[17], i10528.stencilOp)
  i10528.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i10529[18], i10528.stencilOpFront)
  i10528.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i10529[19], i10528.stencilOpBack)
  var i10531 = i10529[20]
  var i10530 = []
  for(var i = 0; i < i10531.length; i += 1) {
    i10530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i10531[i + 0]) );
  }
  i10528.tags = i10530
  var i10533 = i10529[21]
  var i10532 = []
  for(var i = 0; i < i10533.length; i += 1) {
    i10532.push( i10533[i + 0] );
  }
  i10528.passDefinedKeywords = i10532
  var i10535 = i10529[22]
  var i10534 = []
  for(var i = 0; i < i10535.length; i += 1) {
    i10534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i10535[i + 0]) );
  }
  i10528.passDefinedKeywordGroups = i10534
  var i10537 = i10529[23]
  var i10536 = []
  for(var i = 0; i < i10537.length; i += 1) {
    i10536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i10537[i + 0]) );
  }
  i10528.variants = i10536
  var i10539 = i10529[24]
  var i10538 = []
  for(var i = 0; i < i10539.length; i += 1) {
    i10538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i10539[i + 0]) );
  }
  i10528.excludedVariants = i10538
  i10528.hasDepthReader = !!i10529[25]
  return i10528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i10540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i10541 = data
  i10540.val = i10541[0]
  i10540.name = i10541[1]
  return i10540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i10542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i10543 = data
  i10542.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10543[0], i10542.src)
  i10542.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10543[1], i10542.dst)
  i10542.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10543[2], i10542.op)
  return i10542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i10544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i10545 = data
  i10544.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10545[0], i10544.pass)
  i10544.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10545[1], i10544.fail)
  i10544.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10545[2], i10544.zFail)
  i10544.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10545[3], i10544.comp)
  return i10544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i10548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i10549 = data
  i10548.name = i10549[0]
  i10548.value = i10549[1]
  return i10548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i10552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i10553 = data
  var i10555 = i10553[0]
  var i10554 = []
  for(var i = 0; i < i10555.length; i += 1) {
    i10554.push( i10555[i + 0] );
  }
  i10552.keywords = i10554
  i10552.hasDiscard = !!i10553[1]
  return i10552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i10558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i10559 = data
  i10558.passId = i10559[0]
  i10558.subShaderIndex = i10559[1]
  var i10561 = i10559[2]
  var i10560 = []
  for(var i = 0; i < i10561.length; i += 1) {
    i10560.push( i10561[i + 0] );
  }
  i10558.keywords = i10560
  i10558.vertexProgram = i10559[3]
  i10558.fragmentProgram = i10559[4]
  i10558.compiledForWebGL2 = !!i10559[5]
  i10558.readDepth = !!i10559[6]
  return i10558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i10564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i10565 = data
  request.r(i10565[0], i10565[1], 0, i10564, 'shader')
  i10564.pass = i10565[2]
  return i10564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i10568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i10569 = data
  i10568.name = i10569[0]
  i10568.type = i10569[1]
  i10568.value = new pc.Vec4( i10569[2], i10569[3], i10569[4], i10569[5] )
  i10568.textureValue = i10569[6]
  i10568.shaderPropertyFlag = i10569[7]
  return i10568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i10570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i10571 = data
  i10570.name = i10571[0]
  request.r(i10571[1], i10571[2], 0, i10570, 'texture')
  i10570.aabb = i10571[3]
  i10570.vertices = i10571[4]
  i10570.triangles = i10571[5]
  i10570.textureRect = UnityEngine.Rect.MinMaxRect(i10571[6], i10571[7], i10571[8], i10571[9])
  i10570.packedRect = UnityEngine.Rect.MinMaxRect(i10571[10], i10571[11], i10571[12], i10571[13])
  i10570.border = new pc.Vec4( i10571[14], i10571[15], i10571[16], i10571[17] )
  i10570.transparency = i10571[18]
  i10570.bounds = i10571[19]
  i10570.pixelsPerUnit = i10571[20]
  i10570.textureWidth = i10571[21]
  i10570.textureHeight = i10571[22]
  i10570.nativeSize = new pc.Vec2( i10571[23], i10571[24] )
  i10570.pivot = new pc.Vec2( i10571[25], i10571[26] )
  i10570.textureRectOffset = new pc.Vec2( i10571[27], i10571[28] )
  return i10570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i10572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i10573 = data
  i10572.name = i10573[0]
  return i10572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i10574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i10575 = data
  i10574.name = i10575[0]
  i10574.ascent = i10575[1]
  i10574.originalLineHeight = i10575[2]
  i10574.fontSize = i10575[3]
  var i10577 = i10575[4]
  var i10576 = []
  for(var i = 0; i < i10577.length; i += 1) {
    i10576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i10577[i + 0]) );
  }
  i10574.characterInfo = i10576
  request.r(i10575[5], i10575[6], 0, i10574, 'texture')
  i10574.originalFontSize = i10575[7]
  return i10574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i10580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i10581 = data
  i10580.index = i10581[0]
  i10580.advance = i10581[1]
  i10580.bearing = i10581[2]
  i10580.glyphWidth = i10581[3]
  i10580.glyphHeight = i10581[4]
  i10580.minX = i10581[5]
  i10580.maxX = i10581[6]
  i10580.minY = i10581[7]
  i10580.maxY = i10581[8]
  i10580.uvBottomLeftX = i10581[9]
  i10580.uvBottomLeftY = i10581[10]
  i10580.uvBottomRightX = i10581[11]
  i10580.uvBottomRightY = i10581[12]
  i10580.uvTopLeftX = i10581[13]
  i10580.uvTopLeftY = i10581[14]
  i10580.uvTopRightX = i10581[15]
  i10580.uvTopRightY = i10581[16]
  return i10580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i10582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i10583 = data
  i10582.name = i10583[0]
  i10582.bytes64 = i10583[1]
  i10582.data = i10583[2]
  return i10582
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i10584 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i10585 = data
  var i10587 = i10585[0]
  var i10586 = []
  for(var i = 0; i < i10587.length; i += 2) {
  request.r(i10587[i + 0], i10587[i + 1], 2, i10586, '')
  }
  i10584.atlasAssets = i10586
  i10584.scale = i10585[1]
  request.r(i10585[2], i10585[3], 0, i10584, 'skeletonJSON')
  i10584.isUpgradingBlendModeMaterials = !!i10585[4]
  i10584.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i10585[5], i10584.blendModeMaterials)
  var i10589 = i10585[6]
  var i10588 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i10589.length; i += 2) {
  request.r(i10589[i + 0], i10589[i + 1], 1, i10588, '')
  }
  i10584.skeletonDataModifiers = i10588
  var i10591 = i10585[7]
  var i10590 = []
  for(var i = 0; i < i10591.length; i += 1) {
    i10590.push( i10591[i + 0] );
  }
  i10584.fromAnimation = i10590
  var i10593 = i10585[8]
  var i10592 = []
  for(var i = 0; i < i10593.length; i += 1) {
    i10592.push( i10593[i + 0] );
  }
  i10584.toAnimation = i10592
  i10584.duration = i10585[9]
  i10584.defaultMix = i10585[10]
  request.r(i10585[11], i10585[12], 0, i10584, 'controller')
  return i10584
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i10596 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i10597 = data
  i10596.applyAdditiveMaterial = !!i10597[0]
  var i10599 = i10597[1]
  var i10598 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i10599.length; i += 1) {
    i10598.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i10599[i + 0]));
  }
  i10596.additiveMaterials = i10598
  var i10601 = i10597[2]
  var i10600 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i10601.length; i += 1) {
    i10600.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i10601[i + 0]));
  }
  i10596.multiplyMaterials = i10600
  var i10603 = i10597[3]
  var i10602 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i10603.length; i += 1) {
    i10602.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i10603[i + 0]));
  }
  i10596.screenMaterials = i10602
  i10596.requiresBlendModeMaterials = !!i10597[4]
  return i10596
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i10606 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i10607 = data
  i10606.pageName = i10607[0]
  request.r(i10607[1], i10607[2], 0, i10606, 'material')
  return i10606
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i10610 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i10611 = data
  request.r(i10611[0], i10611[1], 0, i10610, 'atlasFile')
  var i10613 = i10611[2]
  var i10612 = []
  for(var i = 0; i < i10613.length; i += 2) {
  request.r(i10613[i + 0], i10613[i + 1], 2, i10612, '')
  }
  i10610.materials = i10612
  i10610.textureLoadingMode = i10611[3]
  request.r(i10611[4], i10611[5], 0, i10610, 'onDemandTextureLoader')
  return i10610
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i10614 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i10615 = data
  i10614.hashCode = i10615[0]
  request.r(i10615[1], i10615[2], 0, i10614, 'material')
  i10614.materialHashCode = i10615[3]
  request.r(i10615[4], i10615[5], 0, i10614, 'atlas')
  i10614.normalStyle = i10615[6]
  i10614.normalSpacingOffset = i10615[7]
  i10614.boldStyle = i10615[8]
  i10614.boldSpacing = i10615[9]
  i10614.italicStyle = i10615[10]
  i10614.tabSize = i10615[11]
  i10614.m_Version = i10615[12]
  i10614.m_SourceFontFileGUID = i10615[13]
  request.r(i10615[14], i10615[15], 0, i10614, 'm_SourceFontFile_EditorRef')
  request.r(i10615[16], i10615[17], 0, i10614, 'm_SourceFontFile')
  i10614.m_AtlasPopulationMode = i10615[18]
  i10614.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i10615[19], i10614.m_FaceInfo)
  var i10617 = i10615[20]
  var i10616 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i10617.length; i += 1) {
    i10616.add(request.d('UnityEngine.TextCore.Glyph', i10617[i + 0]));
  }
  i10614.m_GlyphTable = i10616
  var i10619 = i10615[21]
  var i10618 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i10619.length; i += 1) {
    i10618.add(request.d('TMPro.TMP_Character', i10619[i + 0]));
  }
  i10614.m_CharacterTable = i10618
  var i10621 = i10615[22]
  var i10620 = []
  for(var i = 0; i < i10621.length; i += 2) {
  request.r(i10621[i + 0], i10621[i + 1], 2, i10620, '')
  }
  i10614.m_AtlasTextures = i10620
  i10614.m_AtlasTextureIndex = i10615[23]
  i10614.m_IsMultiAtlasTexturesEnabled = !!i10615[24]
  i10614.m_ClearDynamicDataOnBuild = !!i10615[25]
  var i10623 = i10615[26]
  var i10622 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i10623.length; i += 1) {
    i10622.add(request.d('UnityEngine.TextCore.GlyphRect', i10623[i + 0]));
  }
  i10614.m_UsedGlyphRects = i10622
  var i10625 = i10615[27]
  var i10624 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i10625.length; i += 1) {
    i10624.add(request.d('UnityEngine.TextCore.GlyphRect', i10625[i + 0]));
  }
  i10614.m_FreeGlyphRects = i10624
  i10614.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i10615[28], i10614.m_fontInfo)
  i10614.m_AtlasWidth = i10615[29]
  i10614.m_AtlasHeight = i10615[30]
  i10614.m_AtlasPadding = i10615[31]
  i10614.m_AtlasRenderMode = i10615[32]
  var i10627 = i10615[33]
  var i10626 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i10627.length; i += 1) {
    i10626.add(request.d('TMPro.TMP_Glyph', i10627[i + 0]));
  }
  i10614.m_glyphInfoList = i10626
  i10614.m_KerningTable = request.d('TMPro.KerningTable', i10615[34], i10614.m_KerningTable)
  i10614.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i10615[35], i10614.m_FontFeatureTable)
  var i10629 = i10615[36]
  var i10628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i10629.length; i += 2) {
  request.r(i10629[i + 0], i10629[i + 1], 1, i10628, '')
  }
  i10614.fallbackFontAssets = i10628
  var i10631 = i10615[37]
  var i10630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i10631.length; i += 2) {
  request.r(i10631[i + 0], i10631[i + 1], 1, i10630, '')
  }
  i10614.m_FallbackFontAssetTable = i10630
  i10614.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i10615[38], i10614.m_CreationSettings)
  var i10633 = i10615[39]
  var i10632 = []
  for(var i = 0; i < i10633.length; i += 1) {
    i10632.push( request.d('TMPro.TMP_FontWeightPair', i10633[i + 0]) );
  }
  i10614.m_FontWeightTable = i10632
  var i10635 = i10615[40]
  var i10634 = []
  for(var i = 0; i < i10635.length; i += 1) {
    i10634.push( request.d('TMPro.TMP_FontWeightPair', i10635[i + 0]) );
  }
  i10614.fontWeights = i10634
  return i10614
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i10636 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i10637 = data
  i10636.m_FaceIndex = i10637[0]
  i10636.m_FamilyName = i10637[1]
  i10636.m_StyleName = i10637[2]
  i10636.m_PointSize = i10637[3]
  i10636.m_Scale = i10637[4]
  i10636.m_UnitsPerEM = i10637[5]
  i10636.m_LineHeight = i10637[6]
  i10636.m_AscentLine = i10637[7]
  i10636.m_CapLine = i10637[8]
  i10636.m_MeanLine = i10637[9]
  i10636.m_Baseline = i10637[10]
  i10636.m_DescentLine = i10637[11]
  i10636.m_SuperscriptOffset = i10637[12]
  i10636.m_SuperscriptSize = i10637[13]
  i10636.m_SubscriptOffset = i10637[14]
  i10636.m_SubscriptSize = i10637[15]
  i10636.m_UnderlineOffset = i10637[16]
  i10636.m_UnderlineThickness = i10637[17]
  i10636.m_StrikethroughOffset = i10637[18]
  i10636.m_StrikethroughThickness = i10637[19]
  i10636.m_TabWidth = i10637[20]
  return i10636
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i10640 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i10641 = data
  i10640.m_Index = i10641[0]
  i10640.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i10641[1], i10640.m_Metrics)
  i10640.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i10641[2], i10640.m_GlyphRect)
  i10640.m_Scale = i10641[3]
  i10640.m_AtlasIndex = i10641[4]
  i10640.m_ClassDefinitionType = i10641[5]
  return i10640
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i10642 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i10643 = data
  i10642.m_Width = i10643[0]
  i10642.m_Height = i10643[1]
  i10642.m_HorizontalBearingX = i10643[2]
  i10642.m_HorizontalBearingY = i10643[3]
  i10642.m_HorizontalAdvance = i10643[4]
  return i10642
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i10644 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i10645 = data
  i10644.m_X = i10645[0]
  i10644.m_Y = i10645[1]
  i10644.m_Width = i10645[2]
  i10644.m_Height = i10645[3]
  return i10644
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i10648 = root || request.c( 'TMPro.TMP_Character' )
  var i10649 = data
  i10648.m_ElementType = i10649[0]
  i10648.m_Unicode = i10649[1]
  i10648.m_GlyphIndex = i10649[2]
  i10648.m_Scale = i10649[3]
  return i10648
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i10654 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i10655 = data
  i10654.Name = i10655[0]
  i10654.PointSize = i10655[1]
  i10654.Scale = i10655[2]
  i10654.CharacterCount = i10655[3]
  i10654.LineHeight = i10655[4]
  i10654.Baseline = i10655[5]
  i10654.Ascender = i10655[6]
  i10654.CapHeight = i10655[7]
  i10654.Descender = i10655[8]
  i10654.CenterLine = i10655[9]
  i10654.SuperscriptOffset = i10655[10]
  i10654.SubscriptOffset = i10655[11]
  i10654.SubSize = i10655[12]
  i10654.Underline = i10655[13]
  i10654.UnderlineThickness = i10655[14]
  i10654.strikethrough = i10655[15]
  i10654.strikethroughThickness = i10655[16]
  i10654.TabWidth = i10655[17]
  i10654.Padding = i10655[18]
  i10654.AtlasWidth = i10655[19]
  i10654.AtlasHeight = i10655[20]
  return i10654
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i10658 = root || request.c( 'TMPro.TMP_Glyph' )
  var i10659 = data
  i10658.id = i10659[0]
  i10658.x = i10659[1]
  i10658.y = i10659[2]
  i10658.width = i10659[3]
  i10658.height = i10659[4]
  i10658.xOffset = i10659[5]
  i10658.yOffset = i10659[6]
  i10658.xAdvance = i10659[7]
  i10658.scale = i10659[8]
  return i10658
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i10660 = root || request.c( 'TMPro.KerningTable' )
  var i10661 = data
  var i10663 = i10661[0]
  var i10662 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i10663.length; i += 1) {
    i10662.add(request.d('TMPro.KerningPair', i10663[i + 0]));
  }
  i10660.kerningPairs = i10662
  return i10660
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i10666 = root || request.c( 'TMPro.KerningPair' )
  var i10667 = data
  i10666.xOffset = i10667[0]
  i10666.m_FirstGlyph = i10667[1]
  i10666.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i10667[2], i10666.m_FirstGlyphAdjustments)
  i10666.m_SecondGlyph = i10667[3]
  i10666.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i10667[4], i10666.m_SecondGlyphAdjustments)
  i10666.m_IgnoreSpacingAdjustments = !!i10667[5]
  return i10666
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i10668 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i10669 = data
  var i10671 = i10669[0]
  var i10670 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i10671.length; i += 1) {
    i10670.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i10671[i + 0]));
  }
  i10668.m_GlyphPairAdjustmentRecords = i10670
  return i10668
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i10674 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i10675 = data
  i10674.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i10675[0], i10674.m_FirstAdjustmentRecord)
  i10674.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i10675[1], i10674.m_SecondAdjustmentRecord)
  i10674.m_FeatureLookupFlags = i10675[2]
  return i10674
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i10678 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i10679 = data
  i10678.sourceFontFileName = i10679[0]
  i10678.sourceFontFileGUID = i10679[1]
  i10678.pointSizeSamplingMode = i10679[2]
  i10678.pointSize = i10679[3]
  i10678.padding = i10679[4]
  i10678.packingMode = i10679[5]
  i10678.atlasWidth = i10679[6]
  i10678.atlasHeight = i10679[7]
  i10678.characterSetSelectionMode = i10679[8]
  i10678.characterSequence = i10679[9]
  i10678.referencedFontAssetGUID = i10679[10]
  i10678.referencedTextAssetGUID = i10679[11]
  i10678.fontStyle = i10679[12]
  i10678.fontStyleModifier = i10679[13]
  i10678.renderMode = i10679[14]
  i10678.includeFontFeatures = !!i10679[15]
  return i10678
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i10682 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i10683 = data
  request.r(i10683[0], i10683[1], 0, i10682, 'regularTypeface')
  request.r(i10683[2], i10683[3], 0, i10682, 'italicTypeface')
  return i10682
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i10684 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i10685 = data
  i10684.m_GlyphIndex = i10685[0]
  i10684.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i10685[1], i10684.m_GlyphValueRecord)
  return i10684
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i10686 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i10687 = data
  i10686.m_XPlacement = i10687[0]
  i10686.m_YPlacement = i10687[1]
  i10686.m_XAdvance = i10687[2]
  i10686.m_YAdvance = i10687[3]
  return i10686
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i10688 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i10689 = data
  i10688.useSafeMode = !!i10689[0]
  i10688.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i10689[1], i10688.safeModeOptions)
  i10688.timeScale = i10689[2]
  i10688.unscaledTimeScale = i10689[3]
  i10688.useSmoothDeltaTime = !!i10689[4]
  i10688.maxSmoothUnscaledTime = i10689[5]
  i10688.rewindCallbackMode = i10689[6]
  i10688.showUnityEditorReport = !!i10689[7]
  i10688.logBehaviour = i10689[8]
  i10688.drawGizmos = !!i10689[9]
  i10688.defaultRecyclable = !!i10689[10]
  i10688.defaultAutoPlay = i10689[11]
  i10688.defaultUpdateType = i10689[12]
  i10688.defaultTimeScaleIndependent = !!i10689[13]
  i10688.defaultEaseType = i10689[14]
  i10688.defaultEaseOvershootOrAmplitude = i10689[15]
  i10688.defaultEasePeriod = i10689[16]
  i10688.defaultAutoKill = !!i10689[17]
  i10688.defaultLoopType = i10689[18]
  i10688.debugMode = !!i10689[19]
  i10688.debugStoreTargetId = !!i10689[20]
  i10688.showPreviewPanel = !!i10689[21]
  i10688.storeSettingsLocation = i10689[22]
  i10688.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i10689[23], i10688.modules)
  i10688.createASMDEF = !!i10689[24]
  i10688.showPlayingTweens = !!i10689[25]
  i10688.showPausedTweens = !!i10689[26]
  return i10688
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i10690 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i10691 = data
  i10690.logBehaviour = i10691[0]
  i10690.nestedTweenFailureBehaviour = i10691[1]
  return i10690
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i10692 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i10693 = data
  i10692.showPanel = !!i10693[0]
  i10692.audioEnabled = !!i10693[1]
  i10692.physicsEnabled = !!i10693[2]
  i10692.physics2DEnabled = !!i10693[3]
  i10692.spriteEnabled = !!i10693[4]
  i10692.uiEnabled = !!i10693[5]
  i10692.textMeshProEnabled = !!i10693[6]
  i10692.tk2DEnabled = !!i10693[7]
  i10692.deAudioEnabled = !!i10693[8]
  i10692.deUnityExtendedEnabled = !!i10693[9]
  i10692.epoOutlineEnabled = !!i10693[10]
  return i10692
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i10694 = root || request.c( 'TMPro.TMP_Settings' )
  var i10695 = data
  i10694.m_enableWordWrapping = !!i10695[0]
  i10694.m_enableKerning = !!i10695[1]
  i10694.m_enableExtraPadding = !!i10695[2]
  i10694.m_enableTintAllSprites = !!i10695[3]
  i10694.m_enableParseEscapeCharacters = !!i10695[4]
  i10694.m_EnableRaycastTarget = !!i10695[5]
  i10694.m_GetFontFeaturesAtRuntime = !!i10695[6]
  i10694.m_missingGlyphCharacter = i10695[7]
  i10694.m_warningsDisabled = !!i10695[8]
  request.r(i10695[9], i10695[10], 0, i10694, 'm_defaultFontAsset')
  i10694.m_defaultFontAssetPath = i10695[11]
  i10694.m_defaultFontSize = i10695[12]
  i10694.m_defaultAutoSizeMinRatio = i10695[13]
  i10694.m_defaultAutoSizeMaxRatio = i10695[14]
  i10694.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i10695[15], i10695[16] )
  i10694.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i10695[17], i10695[18] )
  i10694.m_autoSizeTextContainer = !!i10695[19]
  i10694.m_IsTextObjectScaleStatic = !!i10695[20]
  var i10697 = i10695[21]
  var i10696 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i10697.length; i += 2) {
  request.r(i10697[i + 0], i10697[i + 1], 1, i10696, '')
  }
  i10694.m_fallbackFontAssets = i10696
  i10694.m_matchMaterialPreset = !!i10695[22]
  request.r(i10695[23], i10695[24], 0, i10694, 'm_defaultSpriteAsset')
  i10694.m_defaultSpriteAssetPath = i10695[25]
  i10694.m_enableEmojiSupport = !!i10695[26]
  i10694.m_MissingCharacterSpriteUnicode = i10695[27]
  i10694.m_defaultColorGradientPresetsPath = i10695[28]
  request.r(i10695[29], i10695[30], 0, i10694, 'm_defaultStyleSheet')
  i10694.m_StyleSheetsResourcePath = i10695[31]
  request.r(i10695[32], i10695[33], 0, i10694, 'm_leadingCharacters')
  request.r(i10695[34], i10695[35], 0, i10694, 'm_followingCharacters')
  i10694.m_UseModernHangulLineBreakingRules = !!i10695[36]
  return i10694
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i10698 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i10699 = data
  i10698.hashCode = i10699[0]
  request.r(i10699[1], i10699[2], 0, i10698, 'material')
  i10698.materialHashCode = i10699[3]
  request.r(i10699[4], i10699[5], 0, i10698, 'spriteSheet')
  var i10701 = i10699[6]
  var i10700 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i10701.length; i += 1) {
    i10700.add(request.d('TMPro.TMP_Sprite', i10701[i + 0]));
  }
  i10698.spriteInfoList = i10700
  var i10703 = i10699[7]
  var i10702 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i10703.length; i += 2) {
  request.r(i10703[i + 0], i10703[i + 1], 1, i10702, '')
  }
  i10698.fallbackSpriteAssets = i10702
  i10698.m_Version = i10699[8]
  i10698.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i10699[9], i10698.m_FaceInfo)
  var i10705 = i10699[10]
  var i10704 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i10705.length; i += 1) {
    i10704.add(request.d('TMPro.TMP_SpriteCharacter', i10705[i + 0]));
  }
  i10698.m_SpriteCharacterTable = i10704
  var i10707 = i10699[11]
  var i10706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i10707.length; i += 1) {
    i10706.add(request.d('TMPro.TMP_SpriteGlyph', i10707[i + 0]));
  }
  i10698.m_SpriteGlyphTable = i10706
  return i10698
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i10710 = root || request.c( 'TMPro.TMP_Sprite' )
  var i10711 = data
  i10710.name = i10711[0]
  i10710.hashCode = i10711[1]
  i10710.unicode = i10711[2]
  i10710.pivot = new pc.Vec2( i10711[3], i10711[4] )
  request.r(i10711[5], i10711[6], 0, i10710, 'sprite')
  i10710.id = i10711[7]
  i10710.x = i10711[8]
  i10710.y = i10711[9]
  i10710.width = i10711[10]
  i10710.height = i10711[11]
  i10710.xOffset = i10711[12]
  i10710.yOffset = i10711[13]
  i10710.xAdvance = i10711[14]
  i10710.scale = i10711[15]
  return i10710
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i10716 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i10717 = data
  i10716.m_Name = i10717[0]
  i10716.m_HashCode = i10717[1]
  i10716.m_ElementType = i10717[2]
  i10716.m_Unicode = i10717[3]
  i10716.m_GlyphIndex = i10717[4]
  i10716.m_Scale = i10717[5]
  return i10716
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i10720 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i10721 = data
  request.r(i10721[0], i10721[1], 0, i10720, 'sprite')
  i10720.m_Index = i10721[2]
  i10720.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i10721[3], i10720.m_Metrics)
  i10720.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i10721[4], i10720.m_GlyphRect)
  i10720.m_Scale = i10721[5]
  i10720.m_AtlasIndex = i10721[6]
  i10720.m_ClassDefinitionType = i10721[7]
  return i10720
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i10722 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i10723 = data
  var i10725 = i10723[0]
  var i10724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i10725.length; i += 1) {
    i10724.add(request.d('TMPro.TMP_Style', i10725[i + 0]));
  }
  i10722.m_StyleList = i10724
  return i10722
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i10728 = root || request.c( 'TMPro.TMP_Style' )
  var i10729 = data
  i10728.m_Name = i10729[0]
  i10728.m_HashCode = i10729[1]
  i10728.m_OpeningDefinition = i10729[2]
  i10728.m_ClosingDefinition = i10729[3]
  i10728.m_OpeningTagArray = i10729[4]
  i10728.m_ClosingTagArray = i10729[5]
  i10728.m_OpeningTagUnicodeArray = i10729[6]
  i10728.m_ClosingTagUnicodeArray = i10729[7]
  return i10728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i10730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i10731 = data
  var i10733 = i10731[0]
  var i10732 = []
  for(var i = 0; i < i10733.length; i += 1) {
    i10732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i10733[i + 0]) );
  }
  i10730.files = i10732
  i10730.componentToPrefabIds = i10731[1]
  return i10730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i10736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i10737 = data
  i10736.path = i10737[0]
  request.r(i10737[1], i10737[2], 0, i10736, 'unityObject')
  return i10736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i10738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i10739 = data
  var i10741 = i10739[0]
  var i10740 = []
  for(var i = 0; i < i10741.length; i += 1) {
    i10740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i10741[i + 0]) );
  }
  i10738.scriptsExecutionOrder = i10740
  var i10743 = i10739[1]
  var i10742 = []
  for(var i = 0; i < i10743.length; i += 1) {
    i10742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i10743[i + 0]) );
  }
  i10738.sortingLayers = i10742
  var i10745 = i10739[2]
  var i10744 = []
  for(var i = 0; i < i10745.length; i += 1) {
    i10744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i10745[i + 0]) );
  }
  i10738.cullingLayers = i10744
  i10738.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i10739[3], i10738.timeSettings)
  i10738.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i10739[4], i10738.physicsSettings)
  i10738.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i10739[5], i10738.physics2DSettings)
  i10738.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i10739[6], i10738.qualitySettings)
  i10738.enableRealtimeShadows = !!i10739[7]
  i10738.enableAutoInstancing = !!i10739[8]
  i10738.enableDynamicBatching = !!i10739[9]
  i10738.lightmapEncodingQuality = i10739[10]
  i10738.desiredColorSpace = i10739[11]
  var i10747 = i10739[12]
  var i10746 = []
  for(var i = 0; i < i10747.length; i += 1) {
    i10746.push( i10747[i + 0] );
  }
  i10738.allTags = i10746
  return i10738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i10750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i10751 = data
  i10750.name = i10751[0]
  i10750.value = i10751[1]
  return i10750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i10754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i10755 = data
  i10754.id = i10755[0]
  i10754.name = i10755[1]
  i10754.value = i10755[2]
  return i10754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i10758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i10759 = data
  i10758.id = i10759[0]
  i10758.name = i10759[1]
  return i10758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i10760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i10761 = data
  i10760.fixedDeltaTime = i10761[0]
  i10760.maximumDeltaTime = i10761[1]
  i10760.timeScale = i10761[2]
  i10760.maximumParticleTimestep = i10761[3]
  return i10760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i10762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i10763 = data
  i10762.gravity = new pc.Vec3( i10763[0], i10763[1], i10763[2] )
  i10762.defaultSolverIterations = i10763[3]
  i10762.bounceThreshold = i10763[4]
  i10762.autoSyncTransforms = !!i10763[5]
  i10762.autoSimulation = !!i10763[6]
  var i10765 = i10763[7]
  var i10764 = []
  for(var i = 0; i < i10765.length; i += 1) {
    i10764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i10765[i + 0]) );
  }
  i10762.collisionMatrix = i10764
  return i10762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i10768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i10769 = data
  i10768.enabled = !!i10769[0]
  i10768.layerId = i10769[1]
  i10768.otherLayerId = i10769[2]
  return i10768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i10770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i10771 = data
  request.r(i10771[0], i10771[1], 0, i10770, 'material')
  i10770.gravity = new pc.Vec2( i10771[2], i10771[3] )
  i10770.positionIterations = i10771[4]
  i10770.velocityIterations = i10771[5]
  i10770.velocityThreshold = i10771[6]
  i10770.maxLinearCorrection = i10771[7]
  i10770.maxAngularCorrection = i10771[8]
  i10770.maxTranslationSpeed = i10771[9]
  i10770.maxRotationSpeed = i10771[10]
  i10770.baumgarteScale = i10771[11]
  i10770.baumgarteTOIScale = i10771[12]
  i10770.timeToSleep = i10771[13]
  i10770.linearSleepTolerance = i10771[14]
  i10770.angularSleepTolerance = i10771[15]
  i10770.defaultContactOffset = i10771[16]
  i10770.autoSimulation = !!i10771[17]
  i10770.queriesHitTriggers = !!i10771[18]
  i10770.queriesStartInColliders = !!i10771[19]
  i10770.callbacksOnDisable = !!i10771[20]
  i10770.reuseCollisionCallbacks = !!i10771[21]
  i10770.autoSyncTransforms = !!i10771[22]
  var i10773 = i10771[23]
  var i10772 = []
  for(var i = 0; i < i10773.length; i += 1) {
    i10772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i10773[i + 0]) );
  }
  i10770.collisionMatrix = i10772
  return i10770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i10776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i10777 = data
  i10776.enabled = !!i10777[0]
  i10776.layerId = i10777[1]
  i10776.otherLayerId = i10777[2]
  return i10776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i10778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i10779 = data
  var i10781 = i10779[0]
  var i10780 = []
  for(var i = 0; i < i10781.length; i += 1) {
    i10780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i10781[i + 0]) );
  }
  i10778.qualityLevels = i10780
  var i10783 = i10779[1]
  var i10782 = []
  for(var i = 0; i < i10783.length; i += 1) {
    i10782.push( i10783[i + 0] );
  }
  i10778.names = i10782
  i10778.shadows = i10779[2]
  i10778.anisotropicFiltering = i10779[3]
  i10778.antiAliasing = i10779[4]
  i10778.lodBias = i10779[5]
  i10778.shadowCascades = i10779[6]
  i10778.shadowDistance = i10779[7]
  i10778.shadowmaskMode = i10779[8]
  i10778.shadowProjection = i10779[9]
  i10778.shadowResolution = i10779[10]
  i10778.softParticles = !!i10779[11]
  i10778.softVegetation = !!i10779[12]
  i10778.activeColorSpace = i10779[13]
  i10778.desiredColorSpace = i10779[14]
  i10778.masterTextureLimit = i10779[15]
  i10778.maxQueuedFrames = i10779[16]
  i10778.particleRaycastBudget = i10779[17]
  i10778.pixelLightCount = i10779[18]
  i10778.realtimeReflectionProbes = !!i10779[19]
  i10778.shadowCascade2Split = i10779[20]
  i10778.shadowCascade4Split = new pc.Vec3( i10779[21], i10779[22], i10779[23] )
  i10778.streamingMipmapsActive = !!i10779[24]
  i10778.vSyncCount = i10779[25]
  i10778.asyncUploadBufferSize = i10779[26]
  i10778.asyncUploadTimeSlice = i10779[27]
  i10778.billboardsFaceCameraPosition = !!i10779[28]
  i10778.shadowNearPlaneOffset = i10779[29]
  i10778.streamingMipmapsMemoryBudget = i10779[30]
  i10778.maximumLODLevel = i10779[31]
  i10778.streamingMipmapsAddAllCameras = !!i10779[32]
  i10778.streamingMipmapsMaxLevelReduction = i10779[33]
  i10778.streamingMipmapsRenderersPerFrame = i10779[34]
  i10778.resolutionScalingFixedDPIFactor = i10779[35]
  i10778.streamingMipmapsMaxFileIORequests = i10779[36]
  i10778.currentQualityLevel = i10779[37]
  return i10778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i10788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i10789 = data
  i10788.weight = i10789[0]
  i10788.vertices = i10789[1]
  i10788.normals = i10789[2]
  i10788.tangents = i10789[3]
  return i10788
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i10790 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i10791 = data
  i10790.xPlacement = i10791[0]
  i10790.yPlacement = i10791[1]
  i10790.xAdvance = i10791[2]
  i10790.yAdvance = i10791[3]
  return i10790
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[11],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[11],"78":[32],"79":[80],"81":[80],"10":[9],"31":[82],"83":[84],"85":[3],"86":[84],"87":[9],"88":[9],"13":[10],"20":[14,9],"89":[9],"12":[10],"90":[9],"91":[9],"92":[9],"93":[9],"94":[9],"95":[9],"96":[9],"26":[9],"97":[9],"15":[14,9],"98":[9],"99":[9],"100":[9],"101":[9],"102":[14,9],"103":[9],"104":[7],"105":[7],"8":[7],"106":[7],"107":[11],"108":[11],"109":[110],"111":[11],"112":[113],"114":[9],"115":[14,9],"28":[32],"116":[14,9],"117":[118,32],"119":[32],"120":[32,33],"121":[56],"122":[64],"123":[113],"124":[125],"126":[9],"127":[32,9],"21":[9,14],"128":[9],"129":[14,9],"130":[32],"131":[14,9],"132":[9],"133":[84]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.SpriteRenderer","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.Sprite","TMPro.TMP_FontAsset","UnityEngine.Material","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","StepManager","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","UnityEngine.BoxCollider2D","DragHandler","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Mesh","StepController","UnityEngine.AudioListener","AudioManager","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "09/03/2025 06:54:17";

Deserializers.lunaDaysRunning = "72.1";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "APG_V09_NgocNDL_AnhPD";

Deserializers.lunaAppID = "29138";

Deserializers.projectId = "cc2b1186a2056e546bb13add5b988034";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.9\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1748";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5304";

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

Deserializers.buildID = "8b905e26-4e3a-4b2a-9359-8d3735108b1e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

