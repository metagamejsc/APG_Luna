var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i352 = root || request.c( 'UnityEngine.JointSpring' )
  var i353 = data
  i352.spring = i353[0]
  i352.damper = i353[1]
  i352.targetPosition = i353[2]
  return i352
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i354 = root || request.c( 'UnityEngine.JointMotor' )
  var i355 = data
  i354.m_TargetVelocity = i355[0]
  i354.m_Force = i355[1]
  i354.m_FreeSpin = i355[2]
  return i354
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i356 = root || request.c( 'UnityEngine.JointLimits' )
  var i357 = data
  i356.m_Min = i357[0]
  i356.m_Max = i357[1]
  i356.m_Bounciness = i357[2]
  i356.m_BounceMinVelocity = i357[3]
  i356.m_ContactDistance = i357[4]
  i356.minBounce = i357[5]
  i356.maxBounce = i357[6]
  return i356
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i358 = root || request.c( 'UnityEngine.JointDrive' )
  var i359 = data
  i358.m_PositionSpring = i359[0]
  i358.m_PositionDamper = i359[1]
  i358.m_MaximumForce = i359[2]
  i358.m_UseAcceleration = i359[3]
  return i358
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i360 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i361 = data
  i360.m_Spring = i361[0]
  i360.m_Damper = i361[1]
  return i360
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i362 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i363 = data
  i362.m_Limit = i363[0]
  i362.m_Bounciness = i363[1]
  i362.m_ContactDistance = i363[2]
  return i362
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i364 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i365 = data
  i364.m_ExtremumSlip = i365[0]
  i364.m_ExtremumValue = i365[1]
  i364.m_AsymptoteSlip = i365[2]
  i364.m_AsymptoteValue = i365[3]
  i364.m_Stiffness = i365[4]
  return i364
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i366 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i367 = data
  i366.m_LowerAngle = i367[0]
  i366.m_UpperAngle = i367[1]
  return i366
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i369 = data
  i368.m_MotorSpeed = i369[0]
  i368.m_MaximumMotorTorque = i369[1]
  return i368
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i370 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i371 = data
  i370.m_DampingRatio = i371[0]
  i370.m_Frequency = i371[1]
  i370.m_Angle = i371[2]
  return i370
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i373 = data
  i372.m_LowerTranslation = i373[0]
  i372.m_UpperTranslation = i373[1]
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i375 = data
  i374.name = i375[0]
  i374.width = i375[1]
  i374.height = i375[2]
  i374.mipmapCount = i375[3]
  i374.anisoLevel = i375[4]
  i374.filterMode = i375[5]
  i374.hdr = !!i375[6]
  i374.format = i375[7]
  i374.wrapMode = i375[8]
  i374.alphaIsTransparency = !!i375[9]
  i374.alphaSource = i375[10]
  i374.graphicsFormat = i375[11]
  i374.sRGBTexture = !!i375[12]
  i374.desiredColorSpace = i375[13]
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i376 = root || new pc.UnityMaterial()
  var i377 = data
  i376.name = i377[0]
  request.r(i377[1], i377[2], 0, i376, 'shader')
  i376.renderQueue = i377[3]
  i376.enableInstancing = !!i377[4]
  var i379 = i377[5]
  var i378 = []
  for(var i = 0; i < i379.length; i += 1) {
    i378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i379[i + 0]) );
  }
  i376.floatParameters = i378
  var i381 = i377[6]
  var i380 = []
  for(var i = 0; i < i381.length; i += 1) {
    i380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i381[i + 0]) );
  }
  i376.colorParameters = i380
  var i383 = i377[7]
  var i382 = []
  for(var i = 0; i < i383.length; i += 1) {
    i382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i383[i + 0]) );
  }
  i376.vectorParameters = i382
  var i385 = i377[8]
  var i384 = []
  for(var i = 0; i < i385.length; i += 1) {
    i384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i385[i + 0]) );
  }
  i376.textureParameters = i384
  var i387 = i377[9]
  var i386 = []
  for(var i = 0; i < i387.length; i += 1) {
    i386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i387[i + 0]) );
  }
  i376.materialFlags = i386
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i391 = data
  i390.name = i391[0]
  i390.value = i391[1]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i395 = data
  i394.name = i395[0]
  i394.value = new pc.Color(i395[1], i395[2], i395[3], i395[4])
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i399 = data
  i398.name = i399[0]
  i398.value = new pc.Vec4( i399[1], i399[2], i399[3], i399[4] )
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i403 = data
  i402.name = i403[0]
  request.r(i403[1], i403[2], 0, i402, 'value')
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i407 = data
  i406.name = i407[0]
  i406.enabled = !!i407[1]
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i409 = data
  i408.pivot = new pc.Vec2( i409[0], i409[1] )
  i408.anchorMin = new pc.Vec2( i409[2], i409[3] )
  i408.anchorMax = new pc.Vec2( i409[4], i409[5] )
  i408.sizeDelta = new pc.Vec2( i409[6], i409[7] )
  i408.anchoredPosition3D = new pc.Vec3( i409[8], i409[9], i409[10] )
  i408.rotation = new pc.Quat(i409[11], i409[12], i409[13], i409[14])
  i408.scale = new pc.Vec3( i409[15], i409[16], i409[17] )
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i411 = data
  i410.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i411[0], i410.main)
  i410.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i411[1], i410.colorBySpeed)
  i410.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i411[2], i410.colorOverLifetime)
  i410.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i411[3], i410.emission)
  i410.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i411[4], i410.rotationBySpeed)
  i410.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i411[5], i410.rotationOverLifetime)
  i410.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i411[6], i410.shape)
  i410.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i411[7], i410.sizeBySpeed)
  i410.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i411[8], i410.sizeOverLifetime)
  i410.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i411[9], i410.textureSheetAnimation)
  i410.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i411[10], i410.velocityOverLifetime)
  i410.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i411[11], i410.noise)
  i410.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i411[12], i410.inheritVelocity)
  i410.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i411[13], i410.forceOverLifetime)
  i410.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i411[14], i410.limitVelocityOverLifetime)
  i410.useAutoRandomSeed = !!i411[15]
  i410.randomSeed = i411[16]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i412 = root || new pc.ParticleSystemMain()
  var i413 = data
  i412.duration = i413[0]
  i412.loop = !!i413[1]
  i412.prewarm = !!i413[2]
  i412.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i413[3], i412.startDelay)
  i412.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i413[4], i412.startLifetime)
  i412.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i413[5], i412.startSpeed)
  i412.startSize3D = !!i413[6]
  i412.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i413[7], i412.startSizeX)
  i412.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i413[8], i412.startSizeY)
  i412.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i413[9], i412.startSizeZ)
  i412.startRotation3D = !!i413[10]
  i412.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i413[11], i412.startRotationX)
  i412.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i413[12], i412.startRotationY)
  i412.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i413[13], i412.startRotationZ)
  i412.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i413[14], i412.startColor)
  i412.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i413[15], i412.gravityModifier)
  i412.simulationSpace = i413[16]
  request.r(i413[17], i413[18], 0, i412, 'customSimulationSpace')
  i412.simulationSpeed = i413[19]
  i412.useUnscaledTime = !!i413[20]
  i412.scalingMode = i413[21]
  i412.playOnAwake = !!i413[22]
  i412.maxParticles = i413[23]
  i412.emitterVelocityMode = i413[24]
  i412.stopAction = i413[25]
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i414 = root || new pc.MinMaxCurve()
  var i415 = data
  i414.mode = i415[0]
  i414.curveMin = new pc.AnimationCurve( { keys_flow: i415[1] } )
  i414.curveMax = new pc.AnimationCurve( { keys_flow: i415[2] } )
  i414.curveMultiplier = i415[3]
  i414.constantMin = i415[4]
  i414.constantMax = i415[5]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i416 = root || new pc.MinMaxGradient()
  var i417 = data
  i416.mode = i417[0]
  i416.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i417[1], i416.gradientMin)
  i416.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i417[2], i416.gradientMax)
  i416.colorMin = new pc.Color(i417[3], i417[4], i417[5], i417[6])
  i416.colorMax = new pc.Color(i417[7], i417[8], i417[9], i417[10])
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i419 = data
  i418.mode = i419[0]
  var i421 = i419[1]
  var i420 = []
  for(var i = 0; i < i421.length; i += 1) {
    i420.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i421[i + 0]) );
  }
  i418.colorKeys = i420
  var i423 = i419[2]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i423[i + 0]) );
  }
  i418.alphaKeys = i422
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i424 = root || new pc.ParticleSystemColorBySpeed()
  var i425 = data
  i424.enabled = !!i425[0]
  i424.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i425[1], i424.color)
  i424.range = new pc.Vec2( i425[2], i425[3] )
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i429 = data
  i428.color = new pc.Color(i429[0], i429[1], i429[2], i429[3])
  i428.time = i429[4]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i433 = data
  i432.alpha = i433[0]
  i432.time = i433[1]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i434 = root || new pc.ParticleSystemColorOverLifetime()
  var i435 = data
  i434.enabled = !!i435[0]
  i434.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i435[1], i434.color)
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i436 = root || new pc.ParticleSystemEmitter()
  var i437 = data
  i436.enabled = !!i437[0]
  i436.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i437[1], i436.rateOverTime)
  i436.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i437[2], i436.rateOverDistance)
  var i439 = i437[3]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i439[i + 0]) );
  }
  i436.bursts = i438
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i442 = root || new pc.ParticleSystemBurst()
  var i443 = data
  i442.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i443[0], i442.count)
  i442.cycleCount = i443[1]
  i442.minCount = i443[2]
  i442.maxCount = i443[3]
  i442.repeatInterval = i443[4]
  i442.time = i443[5]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i444 = root || new pc.ParticleSystemRotationBySpeed()
  var i445 = data
  i444.enabled = !!i445[0]
  i444.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i445[1], i444.x)
  i444.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i445[2], i444.y)
  i444.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i445[3], i444.z)
  i444.separateAxes = !!i445[4]
  i444.range = new pc.Vec2( i445[5], i445[6] )
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i446 = root || new pc.ParticleSystemRotationOverLifetime()
  var i447 = data
  i446.enabled = !!i447[0]
  i446.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i447[1], i446.x)
  i446.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i447[2], i446.y)
  i446.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i447[3], i446.z)
  i446.separateAxes = !!i447[4]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i448 = root || new pc.ParticleSystemShape()
  var i449 = data
  i448.enabled = !!i449[0]
  i448.shapeType = i449[1]
  i448.randomDirectionAmount = i449[2]
  i448.sphericalDirectionAmount = i449[3]
  i448.randomPositionAmount = i449[4]
  i448.alignToDirection = !!i449[5]
  i448.radius = i449[6]
  i448.radiusMode = i449[7]
  i448.radiusSpread = i449[8]
  i448.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i449[9], i448.radiusSpeed)
  i448.radiusThickness = i449[10]
  i448.angle = i449[11]
  i448.length = i449[12]
  i448.boxThickness = new pc.Vec3( i449[13], i449[14], i449[15] )
  i448.meshShapeType = i449[16]
  request.r(i449[17], i449[18], 0, i448, 'mesh')
  request.r(i449[19], i449[20], 0, i448, 'meshRenderer')
  request.r(i449[21], i449[22], 0, i448, 'skinnedMeshRenderer')
  i448.useMeshMaterialIndex = !!i449[23]
  i448.meshMaterialIndex = i449[24]
  i448.useMeshColors = !!i449[25]
  i448.normalOffset = i449[26]
  i448.arc = i449[27]
  i448.arcMode = i449[28]
  i448.arcSpread = i449[29]
  i448.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i449[30], i448.arcSpeed)
  i448.donutRadius = i449[31]
  i448.position = new pc.Vec3( i449[32], i449[33], i449[34] )
  i448.rotation = new pc.Vec3( i449[35], i449[36], i449[37] )
  i448.scale = new pc.Vec3( i449[38], i449[39], i449[40] )
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i450 = root || new pc.ParticleSystemSizeBySpeed()
  var i451 = data
  i450.enabled = !!i451[0]
  i450.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i451[1], i450.x)
  i450.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i451[2], i450.y)
  i450.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i451[3], i450.z)
  i450.separateAxes = !!i451[4]
  i450.range = new pc.Vec2( i451[5], i451[6] )
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i452 = root || new pc.ParticleSystemSizeOverLifetime()
  var i453 = data
  i452.enabled = !!i453[0]
  i452.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i453[1], i452.x)
  i452.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i453[2], i452.y)
  i452.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i453[3], i452.z)
  i452.separateAxes = !!i453[4]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i454 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i455 = data
  i454.enabled = !!i455[0]
  i454.mode = i455[1]
  i454.animation = i455[2]
  i454.numTilesX = i455[3]
  i454.numTilesY = i455[4]
  i454.useRandomRow = !!i455[5]
  i454.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i455[6], i454.frameOverTime)
  i454.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i455[7], i454.startFrame)
  i454.cycleCount = i455[8]
  i454.rowIndex = i455[9]
  i454.flipU = i455[10]
  i454.flipV = i455[11]
  i454.spriteCount = i455[12]
  var i457 = i455[13]
  var i456 = []
  for(var i = 0; i < i457.length; i += 2) {
  request.r(i457[i + 0], i457[i + 1], 2, i456, '')
  }
  i454.sprites = i456
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i460 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i461 = data
  i460.enabled = !!i461[0]
  i460.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[1], i460.x)
  i460.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[2], i460.y)
  i460.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[3], i460.z)
  i460.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[4], i460.radial)
  i460.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[5], i460.speedModifier)
  i460.space = i461[6]
  i460.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[7], i460.orbitalX)
  i460.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[8], i460.orbitalY)
  i460.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[9], i460.orbitalZ)
  i460.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[10], i460.orbitalOffsetX)
  i460.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[11], i460.orbitalOffsetY)
  i460.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[12], i460.orbitalOffsetZ)
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i462 = root || new pc.ParticleSystemNoise()
  var i463 = data
  i462.enabled = !!i463[0]
  i462.separateAxes = !!i463[1]
  i462.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i463[2], i462.strengthX)
  i462.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i463[3], i462.strengthY)
  i462.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i463[4], i462.strengthZ)
  i462.frequency = i463[5]
  i462.damping = !!i463[6]
  i462.octaveCount = i463[7]
  i462.octaveMultiplier = i463[8]
  i462.octaveScale = i463[9]
  i462.quality = i463[10]
  i462.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i463[11], i462.scrollSpeed)
  i462.scrollSpeedMultiplier = i463[12]
  i462.remapEnabled = !!i463[13]
  i462.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i463[14], i462.remapX)
  i462.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i463[15], i462.remapY)
  i462.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i463[16], i462.remapZ)
  i462.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i463[17], i462.positionAmount)
  i462.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i463[18], i462.rotationAmount)
  i462.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i463[19], i462.sizeAmount)
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i464 = root || new pc.ParticleSystemInheritVelocity()
  var i465 = data
  i464.enabled = !!i465[0]
  i464.mode = i465[1]
  i464.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[2], i464.curve)
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i466 = root || new pc.ParticleSystemForceOverLifetime()
  var i467 = data
  i466.enabled = !!i467[0]
  i466.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[1], i466.x)
  i466.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[2], i466.y)
  i466.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[3], i466.z)
  i466.space = i467[4]
  i466.randomized = !!i467[5]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i468 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i469 = data
  i468.enabled = !!i469[0]
  i468.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[1], i468.limit)
  i468.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[2], i468.limitX)
  i468.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[3], i468.limitY)
  i468.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[4], i468.limitZ)
  i468.dampen = i469[5]
  i468.separateAxes = !!i469[6]
  i468.space = i469[7]
  i468.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[8], i468.drag)
  i468.multiplyDragByParticleSize = !!i469[9]
  i468.multiplyDragByParticleVelocity = !!i469[10]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i471 = data
  i470.enabled = !!i471[0]
  request.r(i471[1], i471[2], 0, i470, 'sharedMaterial')
  var i473 = i471[3]
  var i472 = []
  for(var i = 0; i < i473.length; i += 2) {
  request.r(i473[i + 0], i473[i + 1], 2, i472, '')
  }
  i470.sharedMaterials = i472
  i470.receiveShadows = !!i471[4]
  i470.shadowCastingMode = i471[5]
  i470.sortingLayerID = i471[6]
  i470.sortingOrder = i471[7]
  i470.lightmapIndex = i471[8]
  i470.lightmapSceneIndex = i471[9]
  i470.lightmapScaleOffset = new pc.Vec4( i471[10], i471[11], i471[12], i471[13] )
  i470.lightProbeUsage = i471[14]
  i470.reflectionProbeUsage = i471[15]
  request.r(i471[16], i471[17], 0, i470, 'mesh')
  i470.meshCount = i471[18]
  i470.activeVertexStreamsCount = i471[19]
  i470.alignment = i471[20]
  i470.renderMode = i471[21]
  i470.sortMode = i471[22]
  i470.lengthScale = i471[23]
  i470.velocityScale = i471[24]
  i470.cameraVelocityScale = i471[25]
  i470.normalDirection = i471[26]
  i470.sortingFudge = i471[27]
  i470.minParticleSize = i471[28]
  i470.maxParticleSize = i471[29]
  i470.pivot = new pc.Vec3( i471[30], i471[31], i471[32] )
  request.r(i471[33], i471[34], 0, i470, 'trailMaterial')
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i477 = data
  i476.position = new pc.Vec3( i477[0], i477[1], i477[2] )
  i476.scale = new pc.Vec3( i477[3], i477[4], i477[5] )
  i476.rotation = new pc.Quat(i477[6], i477[7], i477[8], i477[9])
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i479 = data
  i478.name = i479[0]
  i478.tagId = i479[1]
  i478.enabled = !!i479[2]
  i478.isStatic = !!i479[3]
  i478.layer = i479[4]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i481 = data
  i480.name = i481[0]
  i480.index = i481[1]
  i480.startup = !!i481[2]
  return i480
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i483 = data
  request.r(i483[0], i483[1], 0, i482, 'm_FirstSelected')
  i482.m_sendNavigationEvents = !!i483[2]
  i482.m_DragThreshold = i483[3]
  return i482
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i485 = data
  i484.m_HorizontalAxis = i485[0]
  i484.m_VerticalAxis = i485[1]
  i484.m_SubmitButton = i485[2]
  i484.m_CancelButton = i485[3]
  i484.m_InputActionsPerSecond = i485[4]
  i484.m_RepeatDelay = i485[5]
  i484.m_ForceModuleActive = !!i485[6]
  i484.m_SendPointerHoverToParent = !!i485[7]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i487 = data
  i486.enabled = !!i487[0]
  i486.aspect = i487[1]
  i486.orthographic = !!i487[2]
  i486.orthographicSize = i487[3]
  i486.backgroundColor = new pc.Color(i487[4], i487[5], i487[6], i487[7])
  i486.nearClipPlane = i487[8]
  i486.farClipPlane = i487[9]
  i486.fieldOfView = i487[10]
  i486.depth = i487[11]
  i486.clearFlags = i487[12]
  i486.cullingMask = i487[13]
  i486.rect = i487[14]
  request.r(i487[15], i487[16], 0, i486, 'targetTexture')
  i486.usePhysicalProperties = !!i487[17]
  i486.focalLength = i487[18]
  i486.sensorSize = new pc.Vec2( i487[19], i487[20] )
  i486.lensShift = new pc.Vec2( i487[21], i487[22] )
  i486.gateFit = i487[23]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i489 = data
  i488.enabled = !!i489[0]
  i488.planeDistance = i489[1]
  i488.referencePixelsPerUnit = i489[2]
  i488.isFallbackOverlay = !!i489[3]
  i488.renderMode = i489[4]
  i488.renderOrder = i489[5]
  i488.sortingLayerName = i489[6]
  i488.sortingOrder = i489[7]
  i488.scaleFactor = i489[8]
  request.r(i489[9], i489[10], 0, i488, 'worldCamera')
  i488.overrideSorting = !!i489[11]
  i488.pixelPerfect = !!i489[12]
  i488.targetDisplay = i489[13]
  i488.overridePixelPerfect = !!i489[14]
  return i488
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i491 = data
  i490.m_UiScaleMode = i491[0]
  i490.m_ReferencePixelsPerUnit = i491[1]
  i490.m_ScaleFactor = i491[2]
  i490.m_ReferenceResolution = new pc.Vec2( i491[3], i491[4] )
  i490.m_ScreenMatchMode = i491[5]
  i490.m_MatchWidthOrHeight = i491[6]
  i490.m_PhysicalUnit = i491[7]
  i490.m_FallbackScreenDPI = i491[8]
  i490.m_DefaultSpriteDPI = i491[9]
  i490.m_DynamicPixelsPerUnit = i491[10]
  i490.m_PresetInfoIsWorld = !!i491[11]
  return i490
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i493 = data
  i492.m_IgnoreReversedGraphics = !!i493[0]
  i492.m_BlockingObjects = i493[1]
  i492.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i493[2] )
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i495 = data
  request.r(i495[0], i495[1], 0, i494, 'clip')
  request.r(i495[2], i495[3], 0, i494, 'outputAudioMixerGroup')
  i494.playOnAwake = !!i495[4]
  i494.loop = !!i495[5]
  i494.time = i495[6]
  i494.volume = i495[7]
  i494.pitch = i495[8]
  i494.enabled = !!i495[9]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i497 = data
  i496.usedByComposite = !!i497[0]
  i496.autoTiling = !!i497[1]
  i496.size = new pc.Vec2( i497[2], i497[3] )
  i496.edgeRadius = i497[4]
  i496.enabled = !!i497[5]
  i496.isTrigger = !!i497[6]
  i496.usedByEffector = !!i497[7]
  i496.density = i497[8]
  i496.offset = new pc.Vec2( i497[9], i497[10] )
  request.r(i497[11], i497[12], 0, i496, 'material')
  return i496
}

Deserializers["DropZone"] = function (request, data, root) {
  var i498 = root || request.c( 'DropZone' )
  var i499 = data
  var i501 = i499[0]
  var i500 = []
  for(var i = 0; i < i501.length; i += 2) {
  request.r(i501[i + 0], i501[i + 1], 2, i500, '')
  }
  i498.steps = i500
  i498.isActive = !!i499[1]
  request.r(i499[2], i499[3], 0, i498, 'spriteUpgrade')
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i505 = data
  i504.cullTransparentMesh = !!i505[0]
  return i504
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.UI.Image' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, 'm_Sprite')
  i506.m_Type = i507[2]
  i506.m_PreserveAspect = !!i507[3]
  i506.m_FillCenter = !!i507[4]
  i506.m_FillMethod = i507[5]
  i506.m_FillAmount = i507[6]
  i506.m_FillClockwise = !!i507[7]
  i506.m_FillOrigin = i507[8]
  i506.m_UseSpriteMesh = !!i507[9]
  i506.m_PixelsPerUnitMultiplier = i507[10]
  request.r(i507[11], i507[12], 0, i506, 'm_Material')
  i506.m_Maskable = !!i507[13]
  i506.m_Color = new pc.Color(i507[14], i507[15], i507[16], i507[17])
  i506.m_RaycastTarget = !!i507[18]
  i506.m_RaycastPadding = new pc.Vec4( i507[19], i507[20], i507[21], i507[22] )
  return i506
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i508 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i509 = data
  request.r(i509[0], i509[1], 0, i508, 'skeletonDataAsset')
  request.r(i509[2], i509[3], 0, i508, 'additiveMaterial')
  request.r(i509[4], i509[5], 0, i508, 'multiplyMaterial')
  request.r(i509[6], i509[7], 0, i508, 'screenMaterial')
  i508.initialSkinName = i509[8]
  i508.initialFlipX = !!i509[9]
  i508.initialFlipY = !!i509[10]
  i508.startingAnimation = i509[11]
  i508.startingLoop = !!i509[12]
  i508.timeScale = i509[13]
  i508.freeze = !!i509[14]
  i508.layoutScaleMode = i509[15]
  i508.updateWhenInvisible = i509[16]
  i508.allowMultipleCanvasRenderers = !!i509[17]
  var i511 = i509[18]
  var i510 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i511.length; i += 2) {
  request.r(i511[i + 0], i511[i + 1], 1, i510, '')
  }
  i508.canvasRenderers = i510
  i508.enableSeparatorSlots = !!i509[19]
  i508.updateSeparatorPartLocation = !!i509[20]
  i508.updateSeparatorPartScale = !!i509[21]
  i508.disableMeshAssignmentOnOverride = !!i509[22]
  i508.referenceSize = new pc.Vec2( i509[23], i509[24] )
  i508.referenceScale = i509[25]
  i508.rectTransformSize = new pc.Vec2( i509[26], i509[27] )
  i508.editReferenceRect = !!i509[28]
  var i513 = i509[29]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( i513[i + 0] );
  }
  i508.separatorSlotNames = i512
  var i515 = i509[30]
  var i514 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i515.length; i += 2) {
  request.r(i515[i + 0], i515[i + 1], 1, i514, '')
  }
  i508.separatorParts = i514
  i508.meshGenerator = request.d('Spine.Unity.MeshGenerator', i509[31], i508.meshGenerator)
  i508.updateTiming = i509[32]
  i508.unscaledTime = !!i509[33]
  request.r(i509[34], i509[35], 0, i508, 'm_Material')
  i508.m_Maskable = !!i509[36]
  i508.m_Color = new pc.Color(i509[37], i509[38], i509[39], i509[40])
  i508.m_RaycastTarget = !!i509[41]
  i508.m_RaycastPadding = new pc.Vec4( i509[42], i509[43], i509[44], i509[45] )
  return i508
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i522 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i523 = data
  i522.settings = request.d('Spine.Unity.MeshGenerator+Settings', i523[0], i522.settings)
  return i522
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i524 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i525 = data
  i524.useClipping = !!i525[0]
  i524.zSpacing = i525[1]
  i524.pmaVertexColors = !!i525[2]
  i524.tintBlack = !!i525[3]
  i524.canvasGroupTintBlack = !!i525[4]
  i524.calculateTangents = !!i525[5]
  i524.addNormals = !!i525[6]
  i524.immutableTriangles = !!i525[7]
  return i524
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i526 = root || request.c( 'DraggableItem' )
  var i527 = data
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i529 = data
  i528.m_Alpha = i529[0]
  i528.m_Interactable = !!i529[1]
  i528.m_BlocksRaycasts = !!i529[2]
  i528.m_IgnoreParentGroups = !!i529[3]
  i528.enabled = !!i529[4]
  return i528
}

Deserializers["GameController"] = function (request, data, root) {
  var i530 = root || request.c( 'GameController' )
  var i531 = data
  i530.numStep = i531[0]
  var i533 = i531[1]
  var i532 = []
  for(var i = 0; i < i533.length; i += 2) {
  request.r(i533[i + 0], i533[i + 1], 2, i532, '')
  }
  i530.colliders = i532
  i530.isUpgrade = !!i531[2]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i537 = data
  i536.ambientIntensity = i537[0]
  i536.reflectionIntensity = i537[1]
  i536.ambientMode = i537[2]
  i536.ambientLight = new pc.Color(i537[3], i537[4], i537[5], i537[6])
  i536.ambientSkyColor = new pc.Color(i537[7], i537[8], i537[9], i537[10])
  i536.ambientGroundColor = new pc.Color(i537[11], i537[12], i537[13], i537[14])
  i536.ambientEquatorColor = new pc.Color(i537[15], i537[16], i537[17], i537[18])
  i536.fogColor = new pc.Color(i537[19], i537[20], i537[21], i537[22])
  i536.fogEndDistance = i537[23]
  i536.fogStartDistance = i537[24]
  i536.fogDensity = i537[25]
  i536.fog = !!i537[26]
  request.r(i537[27], i537[28], 0, i536, 'skybox')
  i536.fogMode = i537[29]
  var i539 = i537[30]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i539[i + 0]) );
  }
  i536.lightmaps = i538
  i536.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i537[31], i536.lightProbes)
  i536.lightmapsMode = i537[32]
  i536.mixedBakeMode = i537[33]
  i536.environmentLightingMode = i537[34]
  i536.ambientProbe = new pc.SphericalHarmonicsL2(i537[35])
  i536.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i537[36])
  i536.useReferenceAmbientProbe = !!i537[37]
  request.r(i537[38], i537[39], 0, i536, 'customReflection')
  request.r(i537[40], i537[41], 0, i536, 'defaultReflection')
  i536.defaultReflectionMode = i537[42]
  i536.defaultReflectionResolution = i537[43]
  i536.sunLightObjectId = i537[44]
  i536.pixelLightCount = i537[45]
  i536.defaultReflectionHDR = !!i537[46]
  i536.hasLightDataAsset = !!i537[47]
  i536.hasManualGenerate = !!i537[48]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'lightmapColor')
  request.r(i543[2], i543[3], 0, i542, 'lightmapDirection')
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i544 = root || new UnityEngine.LightProbes()
  var i545 = data
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i553 = data
  var i555 = i553[0]
  var i554 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i555.length; i += 1) {
    i554.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i555[i + 0]));
  }
  i552.ShaderCompilationErrors = i554
  i552.name = i553[1]
  i552.guid = i553[2]
  var i557 = i553[3]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( i557[i + 0] );
  }
  i552.shaderDefinedKeywords = i556
  var i559 = i553[4]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i559[i + 0]) );
  }
  i552.passes = i558
  var i561 = i553[5]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i561[i + 0]) );
  }
  i552.usePasses = i560
  var i563 = i553[6]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i563[i + 0]) );
  }
  i552.defaultParameterValues = i562
  request.r(i553[7], i553[8], 0, i552, 'unityFallbackShader')
  i552.readDepth = !!i553[9]
  i552.isCreatedByShaderGraph = !!i553[10]
  i552.usedBatchUniforms = i553[11]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i567 = data
  i566.shaderName = i567[0]
  i566.errorMessage = i567[1]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i570 = root || new pc.UnityShaderPass()
  var i571 = data
  i570.id = i571[0]
  i570.subShaderIndex = i571[1]
  i570.name = i571[2]
  i570.passType = i571[3]
  i570.grabPassTextureName = i571[4]
  i570.usePass = !!i571[5]
  i570.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i571[6], i570.zTest)
  i570.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i571[7], i570.zWrite)
  i570.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i571[8], i570.culling)
  i570.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i571[9], i570.blending)
  i570.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i571[10], i570.alphaBlending)
  i570.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i571[11], i570.colorWriteMask)
  i570.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i571[12], i570.offsetUnits)
  i570.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i571[13], i570.offsetFactor)
  i570.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i571[14], i570.stencilRef)
  i570.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i571[15], i570.stencilReadMask)
  i570.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i571[16], i570.stencilWriteMask)
  i570.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i571[17], i570.stencilOp)
  i570.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i571[18], i570.stencilOpFront)
  i570.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i571[19], i570.stencilOpBack)
  var i573 = i571[20]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i573[i + 0]) );
  }
  i570.tags = i572
  var i575 = i571[21]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( i575[i + 0] );
  }
  i570.passDefinedKeywords = i574
  var i577 = i571[22]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i577[i + 0]) );
  }
  i570.passDefinedKeywordGroups = i576
  var i579 = i571[23]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i579[i + 0]) );
  }
  i570.variants = i578
  var i581 = i571[24]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i581[i + 0]) );
  }
  i570.excludedVariants = i580
  i570.hasDepthReader = !!i571[25]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i583 = data
  i582.val = i583[0]
  i582.name = i583[1]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i585 = data
  i584.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i585[0], i584.src)
  i584.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i585[1], i584.dst)
  i584.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i585[2], i584.op)
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i587 = data
  i586.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i587[0], i586.pass)
  i586.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i587[1], i586.fail)
  i586.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i587[2], i586.zFail)
  i586.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i587[3], i586.comp)
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i591 = data
  i590.name = i591[0]
  i590.value = i591[1]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i595 = data
  var i597 = i595[0]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( i597[i + 0] );
  }
  i594.keywords = i596
  i594.hasDiscard = !!i595[1]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i601 = data
  i600.passId = i601[0]
  i600.subShaderIndex = i601[1]
  var i603 = i601[2]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( i603[i + 0] );
  }
  i600.keywords = i602
  i600.vertexProgram = i601[3]
  i600.fragmentProgram = i601[4]
  i600.compiledForWebGL2 = !!i601[5]
  i600.readDepth = !!i601[6]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'shader')
  i606.pass = i607[2]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i611 = data
  i610.name = i611[0]
  i610.type = i611[1]
  i610.value = new pc.Vec4( i611[2], i611[3], i611[4], i611[5] )
  i610.textureValue = i611[6]
  i610.shaderPropertyFlag = i611[7]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i613 = data
  i612.name = i613[0]
  request.r(i613[1], i613[2], 0, i612, 'texture')
  i612.aabb = i613[3]
  i612.vertices = i613[4]
  i612.triangles = i613[5]
  i612.textureRect = UnityEngine.Rect.MinMaxRect(i613[6], i613[7], i613[8], i613[9])
  i612.packedRect = UnityEngine.Rect.MinMaxRect(i613[10], i613[11], i613[12], i613[13])
  i612.border = new pc.Vec4( i613[14], i613[15], i613[16], i613[17] )
  i612.transparency = i613[18]
  i612.bounds = i613[19]
  i612.pixelsPerUnit = i613[20]
  i612.textureWidth = i613[21]
  i612.textureHeight = i613[22]
  i612.nativeSize = new pc.Vec2( i613[23], i613[24] )
  i612.pivot = new pc.Vec2( i613[25], i613[26] )
  i612.textureRectOffset = new pc.Vec2( i613[27], i613[28] )
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i615 = data
  i614.name = i615[0]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i617 = data
  i616.name = i617[0]
  i616.bytes64 = i617[1]
  i616.data = i617[2]
  return i616
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i618 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i619 = data
  var i621 = i619[0]
  var i620 = []
  for(var i = 0; i < i621.length; i += 2) {
  request.r(i621[i + 0], i621[i + 1], 2, i620, '')
  }
  i618.atlasAssets = i620
  i618.scale = i619[1]
  request.r(i619[2], i619[3], 0, i618, 'skeletonJSON')
  i618.isUpgradingBlendModeMaterials = !!i619[4]
  i618.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i619[5], i618.blendModeMaterials)
  var i623 = i619[6]
  var i622 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 1, i622, '')
  }
  i618.skeletonDataModifiers = i622
  var i625 = i619[7]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( i625[i + 0] );
  }
  i618.fromAnimation = i624
  var i627 = i619[8]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( i627[i + 0] );
  }
  i618.toAnimation = i626
  i618.duration = i619[9]
  i618.defaultMix = i619[10]
  request.r(i619[11], i619[12], 0, i618, 'controller')
  return i618
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i630 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i631 = data
  i630.applyAdditiveMaterial = !!i631[0]
  var i633 = i631[1]
  var i632 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i633.length; i += 1) {
    i632.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i633[i + 0]));
  }
  i630.additiveMaterials = i632
  var i635 = i631[2]
  var i634 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i635.length; i += 1) {
    i634.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i635[i + 0]));
  }
  i630.multiplyMaterials = i634
  var i637 = i631[3]
  var i636 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i637.length; i += 1) {
    i636.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i637[i + 0]));
  }
  i630.screenMaterials = i636
  i630.requiresBlendModeMaterials = !!i631[4]
  return i630
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i640 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i641 = data
  i640.pageName = i641[0]
  request.r(i641[1], i641[2], 0, i640, 'material')
  return i640
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i644 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'atlasFile')
  var i647 = i645[2]
  var i646 = []
  for(var i = 0; i < i647.length; i += 2) {
  request.r(i647[i + 0], i647[i + 1], 2, i646, '')
  }
  i644.materials = i646
  i644.textureLoadingMode = i645[3]
  request.r(i645[4], i645[5], 0, i644, 'onDemandTextureLoader')
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i649 = data
  var i651 = i649[0]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i651[i + 0]) );
  }
  i648.files = i650
  i648.componentToPrefabIds = i649[1]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i655 = data
  i654.path = i655[0]
  request.r(i655[1], i655[2], 0, i654, 'unityObject')
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i657 = data
  var i659 = i657[0]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i659[i + 0]) );
  }
  i656.scriptsExecutionOrder = i658
  var i661 = i657[1]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i661[i + 0]) );
  }
  i656.sortingLayers = i660
  var i663 = i657[2]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i663[i + 0]) );
  }
  i656.cullingLayers = i662
  i656.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i657[3], i656.timeSettings)
  i656.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i657[4], i656.physicsSettings)
  i656.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i657[5], i656.physics2DSettings)
  i656.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i657[6], i656.qualitySettings)
  i656.enableRealtimeShadows = !!i657[7]
  i656.enableAutoInstancing = !!i657[8]
  i656.enableDynamicBatching = !!i657[9]
  i656.lightmapEncodingQuality = i657[10]
  i656.desiredColorSpace = i657[11]
  var i665 = i657[12]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( i665[i + 0] );
  }
  i656.allTags = i664
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i669 = data
  i668.name = i669[0]
  i668.value = i669[1]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i673 = data
  i672.id = i673[0]
  i672.name = i673[1]
  i672.value = i673[2]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i677 = data
  i676.id = i677[0]
  i676.name = i677[1]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i679 = data
  i678.fixedDeltaTime = i679[0]
  i678.maximumDeltaTime = i679[1]
  i678.timeScale = i679[2]
  i678.maximumParticleTimestep = i679[3]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i681 = data
  i680.gravity = new pc.Vec3( i681[0], i681[1], i681[2] )
  i680.defaultSolverIterations = i681[3]
  i680.bounceThreshold = i681[4]
  i680.autoSyncTransforms = !!i681[5]
  i680.autoSimulation = !!i681[6]
  var i683 = i681[7]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i683[i + 0]) );
  }
  i680.collisionMatrix = i682
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i687 = data
  i686.enabled = !!i687[0]
  i686.layerId = i687[1]
  i686.otherLayerId = i687[2]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'material')
  i688.gravity = new pc.Vec2( i689[2], i689[3] )
  i688.positionIterations = i689[4]
  i688.velocityIterations = i689[5]
  i688.velocityThreshold = i689[6]
  i688.maxLinearCorrection = i689[7]
  i688.maxAngularCorrection = i689[8]
  i688.maxTranslationSpeed = i689[9]
  i688.maxRotationSpeed = i689[10]
  i688.baumgarteScale = i689[11]
  i688.baumgarteTOIScale = i689[12]
  i688.timeToSleep = i689[13]
  i688.linearSleepTolerance = i689[14]
  i688.angularSleepTolerance = i689[15]
  i688.defaultContactOffset = i689[16]
  i688.autoSimulation = !!i689[17]
  i688.queriesHitTriggers = !!i689[18]
  i688.queriesStartInColliders = !!i689[19]
  i688.callbacksOnDisable = !!i689[20]
  i688.reuseCollisionCallbacks = !!i689[21]
  i688.autoSyncTransforms = !!i689[22]
  var i691 = i689[23]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i691[i + 0]) );
  }
  i688.collisionMatrix = i690
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i695 = data
  i694.enabled = !!i695[0]
  i694.layerId = i695[1]
  i694.otherLayerId = i695[2]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i697 = data
  var i699 = i697[0]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i699[i + 0]) );
  }
  i696.qualityLevels = i698
  var i701 = i697[1]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( i701[i + 0] );
  }
  i696.names = i700
  i696.shadows = i697[2]
  i696.anisotropicFiltering = i697[3]
  i696.antiAliasing = i697[4]
  i696.lodBias = i697[5]
  i696.shadowCascades = i697[6]
  i696.shadowDistance = i697[7]
  i696.shadowmaskMode = i697[8]
  i696.shadowProjection = i697[9]
  i696.shadowResolution = i697[10]
  i696.softParticles = !!i697[11]
  i696.softVegetation = !!i697[12]
  i696.activeColorSpace = i697[13]
  i696.desiredColorSpace = i697[14]
  i696.masterTextureLimit = i697[15]
  i696.maxQueuedFrames = i697[16]
  i696.particleRaycastBudget = i697[17]
  i696.pixelLightCount = i697[18]
  i696.realtimeReflectionProbes = !!i697[19]
  i696.shadowCascade2Split = i697[20]
  i696.shadowCascade4Split = new pc.Vec3( i697[21], i697[22], i697[23] )
  i696.streamingMipmapsActive = !!i697[24]
  i696.vSyncCount = i697[25]
  i696.asyncUploadBufferSize = i697[26]
  i696.asyncUploadTimeSlice = i697[27]
  i696.billboardsFaceCameraPosition = !!i697[28]
  i696.shadowNearPlaneOffset = i697[29]
  i696.streamingMipmapsMemoryBudget = i697[30]
  i696.maximumLODLevel = i697[31]
  i696.streamingMipmapsAddAllCameras = !!i697[32]
  i696.streamingMipmapsMaxLevelReduction = i697[33]
  i696.streamingMipmapsRenderersPerFrame = i697[34]
  i696.resolutionScalingFixedDPIFactor = i697[35]
  i696.streamingMipmapsMaxFileIORequests = i697[36]
  i696.currentQualityLevel = i697[37]
  return i696
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"31":[32],"33":[32],"34":[32],"35":[32],"36":[32],"37":[32],"38":[39],"40":[10],"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[42],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[50],"58":[50],"59":[50],"60":[50],"61":[50],"62":[50],"63":[10],"64":[65],"66":[67],"68":[67],"12":[2],"69":[70],"71":[72],"73":[70],"74":[2],"75":[2],"14":[12],"22":[21,2],"76":[2],"13":[12],"77":[2],"78":[2],"79":[2],"80":[2],"81":[2],"82":[2],"83":[2],"84":[2],"85":[2],"86":[21,2],"87":[2],"88":[2],"89":[2],"90":[2],"91":[21,2],"92":[2],"93":[8],"94":[8],"9":[8],"95":[8],"96":[10],"97":[10],"98":[99],"100":[10],"101":[102],"103":[2],"104":[21,2],"105":[65],"24":[21,2],"106":[107,65],"108":[65],"109":[65,110],"111":[42],"112":[50],"113":[102],"114":[115],"116":[2],"117":[65,2],"118":[2,21],"119":[2],"120":[21,2],"121":[65],"122":[21,2],"123":[2],"124":[70]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Transform","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.BoxCollider2D","UnityEngine.MonoBehaviour","DropZone","UnityEngine.GameObject","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","DraggableItem","UnityEngine.CanvasGroup","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "04/15/2025 07:07:05";

Deserializers.lunaDaysRunning = "1.0";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "20984";

Deserializers.projectId = "cc2b1186a2056e546bb13add5b988034";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1762";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3347";

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

Deserializers.buildID = "e7ee79a7-737d-4e79-9a94-ebc1a6519bb0";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

