var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i406 = root || request.c( 'UnityEngine.JointSpring' )
  var i407 = data
  i406.spring = i407[0]
  i406.damper = i407[1]
  i406.targetPosition = i407[2]
  return i406
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.JointMotor' )
  var i409 = data
  i408.m_TargetVelocity = i409[0]
  i408.m_Force = i409[1]
  i408.m_FreeSpin = i409[2]
  return i408
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.JointLimits' )
  var i411 = data
  i410.m_Min = i411[0]
  i410.m_Max = i411[1]
  i410.m_Bounciness = i411[2]
  i410.m_BounceMinVelocity = i411[3]
  i410.m_ContactDistance = i411[4]
  i410.minBounce = i411[5]
  i410.maxBounce = i411[6]
  return i410
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.JointDrive' )
  var i413 = data
  i412.m_PositionSpring = i413[0]
  i412.m_PositionDamper = i413[1]
  i412.m_MaximumForce = i413[2]
  i412.m_UseAcceleration = i413[3]
  return i412
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i415 = data
  i414.m_Spring = i415[0]
  i414.m_Damper = i415[1]
  return i414
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i417 = data
  i416.m_Limit = i417[0]
  i416.m_Bounciness = i417[1]
  i416.m_ContactDistance = i417[2]
  return i416
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i419 = data
  i418.m_ExtremumSlip = i419[0]
  i418.m_ExtremumValue = i419[1]
  i418.m_AsymptoteSlip = i419[2]
  i418.m_AsymptoteValue = i419[3]
  i418.m_Stiffness = i419[4]
  return i418
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i421 = data
  i420.m_LowerAngle = i421[0]
  i420.m_UpperAngle = i421[1]
  return i420
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i423 = data
  i422.m_MotorSpeed = i423[0]
  i422.m_MaximumMotorTorque = i423[1]
  return i422
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i425 = data
  i424.m_DampingRatio = i425[0]
  i424.m_Frequency = i425[1]
  i424.m_Angle = i425[2]
  return i424
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i427 = data
  i426.m_LowerTranslation = i427[0]
  i426.m_UpperTranslation = i427[1]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i429 = data
  i428.name = i429[0]
  i428.width = i429[1]
  i428.height = i429[2]
  i428.mipmapCount = i429[3]
  i428.anisoLevel = i429[4]
  i428.filterMode = i429[5]
  i428.hdr = !!i429[6]
  i428.format = i429[7]
  i428.wrapMode = i429[8]
  i428.alphaIsTransparency = !!i429[9]
  i428.alphaSource = i429[10]
  i428.graphicsFormat = i429[11]
  i428.sRGBTexture = !!i429[12]
  i428.desiredColorSpace = i429[13]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i430 = root || new pc.UnityMaterial()
  var i431 = data
  i430.name = i431[0]
  request.r(i431[1], i431[2], 0, i430, 'shader')
  i430.renderQueue = i431[3]
  i430.enableInstancing = !!i431[4]
  var i433 = i431[5]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i433[i + 0]) );
  }
  i430.floatParameters = i432
  var i435 = i431[6]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i435[i + 0]) );
  }
  i430.colorParameters = i434
  var i437 = i431[7]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i437[i + 0]) );
  }
  i430.vectorParameters = i436
  var i439 = i431[8]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i439[i + 0]) );
  }
  i430.textureParameters = i438
  var i441 = i431[9]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i441[i + 0]) );
  }
  i430.materialFlags = i440
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i445 = data
  i444.name = i445[0]
  i444.value = i445[1]
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i449 = data
  i448.name = i449[0]
  i448.value = new pc.Color(i449[1], i449[2], i449[3], i449[4])
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i453 = data
  i452.name = i453[0]
  i452.value = new pc.Vec4( i453[1], i453[2], i453[3], i453[4] )
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i457 = data
  i456.name = i457[0]
  request.r(i457[1], i457[2], 0, i456, 'value')
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i461 = data
  i460.name = i461[0]
  i460.enabled = !!i461[1]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i463 = data
  i462.pivot = new pc.Vec2( i463[0], i463[1] )
  i462.anchorMin = new pc.Vec2( i463[2], i463[3] )
  i462.anchorMax = new pc.Vec2( i463[4], i463[5] )
  i462.sizeDelta = new pc.Vec2( i463[6], i463[7] )
  i462.anchoredPosition3D = new pc.Vec3( i463[8], i463[9], i463[10] )
  i462.rotation = new pc.Quat(i463[11], i463[12], i463[13], i463[14])
  i462.scale = new pc.Vec3( i463[15], i463[16], i463[17] )
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i465 = data
  i464.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i465[0], i464.main)
  i464.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i465[1], i464.colorBySpeed)
  i464.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i465[2], i464.colorOverLifetime)
  i464.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i465[3], i464.emission)
  i464.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i465[4], i464.rotationBySpeed)
  i464.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i465[5], i464.rotationOverLifetime)
  i464.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i465[6], i464.shape)
  i464.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i465[7], i464.sizeBySpeed)
  i464.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i465[8], i464.sizeOverLifetime)
  i464.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i465[9], i464.textureSheetAnimation)
  i464.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i465[10], i464.velocityOverLifetime)
  i464.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i465[11], i464.noise)
  i464.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i465[12], i464.inheritVelocity)
  i464.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i465[13], i464.forceOverLifetime)
  i464.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i465[14], i464.limitVelocityOverLifetime)
  i464.useAutoRandomSeed = !!i465[15]
  i464.randomSeed = i465[16]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i466 = root || new pc.ParticleSystemMain()
  var i467 = data
  i466.duration = i467[0]
  i466.loop = !!i467[1]
  i466.prewarm = !!i467[2]
  i466.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[3], i466.startDelay)
  i466.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[4], i466.startLifetime)
  i466.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[5], i466.startSpeed)
  i466.startSize3D = !!i467[6]
  i466.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[7], i466.startSizeX)
  i466.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[8], i466.startSizeY)
  i466.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[9], i466.startSizeZ)
  i466.startRotation3D = !!i467[10]
  i466.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[11], i466.startRotationX)
  i466.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[12], i466.startRotationY)
  i466.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[13], i466.startRotationZ)
  i466.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i467[14], i466.startColor)
  i466.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[15], i466.gravityModifier)
  i466.simulationSpace = i467[16]
  request.r(i467[17], i467[18], 0, i466, 'customSimulationSpace')
  i466.simulationSpeed = i467[19]
  i466.useUnscaledTime = !!i467[20]
  i466.scalingMode = i467[21]
  i466.playOnAwake = !!i467[22]
  i466.maxParticles = i467[23]
  i466.emitterVelocityMode = i467[24]
  i466.stopAction = i467[25]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i468 = root || new pc.MinMaxCurve()
  var i469 = data
  i468.mode = i469[0]
  i468.curveMin = new pc.AnimationCurve( { keys_flow: i469[1] } )
  i468.curveMax = new pc.AnimationCurve( { keys_flow: i469[2] } )
  i468.curveMultiplier = i469[3]
  i468.constantMin = i469[4]
  i468.constantMax = i469[5]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i470 = root || new pc.MinMaxGradient()
  var i471 = data
  i470.mode = i471[0]
  i470.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i471[1], i470.gradientMin)
  i470.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i471[2], i470.gradientMax)
  i470.colorMin = new pc.Color(i471[3], i471[4], i471[5], i471[6])
  i470.colorMax = new pc.Color(i471[7], i471[8], i471[9], i471[10])
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i473 = data
  i472.mode = i473[0]
  var i475 = i473[1]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i475[i + 0]) );
  }
  i472.colorKeys = i474
  var i477 = i473[2]
  var i476 = []
  for(var i = 0; i < i477.length; i += 1) {
    i476.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i477[i + 0]) );
  }
  i472.alphaKeys = i476
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i478 = root || new pc.ParticleSystemColorBySpeed()
  var i479 = data
  i478.enabled = !!i479[0]
  i478.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i479[1], i478.color)
  i478.range = new pc.Vec2( i479[2], i479[3] )
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i483 = data
  i482.color = new pc.Color(i483[0], i483[1], i483[2], i483[3])
  i482.time = i483[4]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i487 = data
  i486.alpha = i487[0]
  i486.time = i487[1]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i488 = root || new pc.ParticleSystemColorOverLifetime()
  var i489 = data
  i488.enabled = !!i489[0]
  i488.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i489[1], i488.color)
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i490 = root || new pc.ParticleSystemEmitter()
  var i491 = data
  i490.enabled = !!i491[0]
  i490.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[1], i490.rateOverTime)
  i490.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[2], i490.rateOverDistance)
  var i493 = i491[3]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i493[i + 0]) );
  }
  i490.bursts = i492
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i496 = root || new pc.ParticleSystemBurst()
  var i497 = data
  i496.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[0], i496.count)
  i496.cycleCount = i497[1]
  i496.minCount = i497[2]
  i496.maxCount = i497[3]
  i496.repeatInterval = i497[4]
  i496.time = i497[5]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i498 = root || new pc.ParticleSystemRotationBySpeed()
  var i499 = data
  i498.enabled = !!i499[0]
  i498.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[1], i498.x)
  i498.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[2], i498.y)
  i498.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[3], i498.z)
  i498.separateAxes = !!i499[4]
  i498.range = new pc.Vec2( i499[5], i499[6] )
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i500 = root || new pc.ParticleSystemRotationOverLifetime()
  var i501 = data
  i500.enabled = !!i501[0]
  i500.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[1], i500.x)
  i500.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[2], i500.y)
  i500.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[3], i500.z)
  i500.separateAxes = !!i501[4]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i502 = root || new pc.ParticleSystemShape()
  var i503 = data
  i502.enabled = !!i503[0]
  i502.shapeType = i503[1]
  i502.randomDirectionAmount = i503[2]
  i502.sphericalDirectionAmount = i503[3]
  i502.randomPositionAmount = i503[4]
  i502.alignToDirection = !!i503[5]
  i502.radius = i503[6]
  i502.radiusMode = i503[7]
  i502.radiusSpread = i503[8]
  i502.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[9], i502.radiusSpeed)
  i502.radiusThickness = i503[10]
  i502.angle = i503[11]
  i502.length = i503[12]
  i502.boxThickness = new pc.Vec3( i503[13], i503[14], i503[15] )
  i502.meshShapeType = i503[16]
  request.r(i503[17], i503[18], 0, i502, 'mesh')
  request.r(i503[19], i503[20], 0, i502, 'meshRenderer')
  request.r(i503[21], i503[22], 0, i502, 'skinnedMeshRenderer')
  i502.useMeshMaterialIndex = !!i503[23]
  i502.meshMaterialIndex = i503[24]
  i502.useMeshColors = !!i503[25]
  i502.normalOffset = i503[26]
  i502.arc = i503[27]
  i502.arcMode = i503[28]
  i502.arcSpread = i503[29]
  i502.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[30], i502.arcSpeed)
  i502.donutRadius = i503[31]
  i502.position = new pc.Vec3( i503[32], i503[33], i503[34] )
  i502.rotation = new pc.Vec3( i503[35], i503[36], i503[37] )
  i502.scale = new pc.Vec3( i503[38], i503[39], i503[40] )
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i504 = root || new pc.ParticleSystemSizeBySpeed()
  var i505 = data
  i504.enabled = !!i505[0]
  i504.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[1], i504.x)
  i504.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[2], i504.y)
  i504.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[3], i504.z)
  i504.separateAxes = !!i505[4]
  i504.range = new pc.Vec2( i505[5], i505[6] )
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i506 = root || new pc.ParticleSystemSizeOverLifetime()
  var i507 = data
  i506.enabled = !!i507[0]
  i506.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i507[1], i506.x)
  i506.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i507[2], i506.y)
  i506.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i507[3], i506.z)
  i506.separateAxes = !!i507[4]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i508 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i509 = data
  i508.enabled = !!i509[0]
  i508.mode = i509[1]
  i508.animation = i509[2]
  i508.numTilesX = i509[3]
  i508.numTilesY = i509[4]
  i508.useRandomRow = !!i509[5]
  i508.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[6], i508.frameOverTime)
  i508.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[7], i508.startFrame)
  i508.cycleCount = i509[8]
  i508.rowIndex = i509[9]
  i508.flipU = i509[10]
  i508.flipV = i509[11]
  i508.spriteCount = i509[12]
  var i511 = i509[13]
  var i510 = []
  for(var i = 0; i < i511.length; i += 2) {
  request.r(i511[i + 0], i511[i + 1], 2, i510, '')
  }
  i508.sprites = i510
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i514 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i515 = data
  i514.enabled = !!i515[0]
  i514.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[1], i514.x)
  i514.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[2], i514.y)
  i514.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[3], i514.z)
  i514.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[4], i514.radial)
  i514.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[5], i514.speedModifier)
  i514.space = i515[6]
  i514.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[7], i514.orbitalX)
  i514.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[8], i514.orbitalY)
  i514.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[9], i514.orbitalZ)
  i514.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[10], i514.orbitalOffsetX)
  i514.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[11], i514.orbitalOffsetY)
  i514.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[12], i514.orbitalOffsetZ)
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i516 = root || new pc.ParticleSystemNoise()
  var i517 = data
  i516.enabled = !!i517[0]
  i516.separateAxes = !!i517[1]
  i516.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[2], i516.strengthX)
  i516.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[3], i516.strengthY)
  i516.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[4], i516.strengthZ)
  i516.frequency = i517[5]
  i516.damping = !!i517[6]
  i516.octaveCount = i517[7]
  i516.octaveMultiplier = i517[8]
  i516.octaveScale = i517[9]
  i516.quality = i517[10]
  i516.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[11], i516.scrollSpeed)
  i516.scrollSpeedMultiplier = i517[12]
  i516.remapEnabled = !!i517[13]
  i516.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[14], i516.remapX)
  i516.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[15], i516.remapY)
  i516.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[16], i516.remapZ)
  i516.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[17], i516.positionAmount)
  i516.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[18], i516.rotationAmount)
  i516.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[19], i516.sizeAmount)
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i518 = root || new pc.ParticleSystemInheritVelocity()
  var i519 = data
  i518.enabled = !!i519[0]
  i518.mode = i519[1]
  i518.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[2], i518.curve)
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i520 = root || new pc.ParticleSystemForceOverLifetime()
  var i521 = data
  i520.enabled = !!i521[0]
  i520.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[1], i520.x)
  i520.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[2], i520.y)
  i520.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[3], i520.z)
  i520.space = i521[4]
  i520.randomized = !!i521[5]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i522 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i523 = data
  i522.enabled = !!i523[0]
  i522.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[1], i522.limit)
  i522.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[2], i522.limitX)
  i522.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[3], i522.limitY)
  i522.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[4], i522.limitZ)
  i522.dampen = i523[5]
  i522.separateAxes = !!i523[6]
  i522.space = i523[7]
  i522.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[8], i522.drag)
  i522.multiplyDragByParticleSize = !!i523[9]
  i522.multiplyDragByParticleVelocity = !!i523[10]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i525 = data
  i524.enabled = !!i525[0]
  request.r(i525[1], i525[2], 0, i524, 'sharedMaterial')
  var i527 = i525[3]
  var i526 = []
  for(var i = 0; i < i527.length; i += 2) {
  request.r(i527[i + 0], i527[i + 1], 2, i526, '')
  }
  i524.sharedMaterials = i526
  i524.receiveShadows = !!i525[4]
  i524.shadowCastingMode = i525[5]
  i524.sortingLayerID = i525[6]
  i524.sortingOrder = i525[7]
  i524.lightmapIndex = i525[8]
  i524.lightmapSceneIndex = i525[9]
  i524.lightmapScaleOffset = new pc.Vec4( i525[10], i525[11], i525[12], i525[13] )
  i524.lightProbeUsage = i525[14]
  i524.reflectionProbeUsage = i525[15]
  request.r(i525[16], i525[17], 0, i524, 'mesh')
  i524.meshCount = i525[18]
  i524.activeVertexStreamsCount = i525[19]
  i524.alignment = i525[20]
  i524.renderMode = i525[21]
  i524.sortMode = i525[22]
  i524.lengthScale = i525[23]
  i524.velocityScale = i525[24]
  i524.cameraVelocityScale = i525[25]
  i524.normalDirection = i525[26]
  i524.sortingFudge = i525[27]
  i524.minParticleSize = i525[28]
  i524.maxParticleSize = i525[29]
  i524.pivot = new pc.Vec3( i525[30], i525[31], i525[32] )
  request.r(i525[33], i525[34], 0, i524, 'trailMaterial')
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i531 = data
  i530.position = new pc.Vec3( i531[0], i531[1], i531[2] )
  i530.scale = new pc.Vec3( i531[3], i531[4], i531[5] )
  i530.rotation = new pc.Quat(i531[6], i531[7], i531[8], i531[9])
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i533 = data
  i532.name = i533[0]
  i532.tagId = i533[1]
  i532.enabled = !!i533[2]
  i532.isStatic = !!i533[3]
  i532.layer = i533[4]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i535 = data
  i534.name = i535[0]
  i534.index = i535[1]
  i534.startup = !!i535[2]
  return i534
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i537 = data
  request.r(i537[0], i537[1], 0, i536, 'm_FirstSelected')
  i536.m_sendNavigationEvents = !!i537[2]
  i536.m_DragThreshold = i537[3]
  return i536
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i539 = data
  i538.m_HorizontalAxis = i539[0]
  i538.m_VerticalAxis = i539[1]
  i538.m_SubmitButton = i539[2]
  i538.m_CancelButton = i539[3]
  i538.m_InputActionsPerSecond = i539[4]
  i538.m_RepeatDelay = i539[5]
  i538.m_ForceModuleActive = !!i539[6]
  i538.m_SendPointerHoverToParent = !!i539[7]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i541 = data
  i540.enabled = !!i541[0]
  i540.aspect = i541[1]
  i540.orthographic = !!i541[2]
  i540.orthographicSize = i541[3]
  i540.backgroundColor = new pc.Color(i541[4], i541[5], i541[6], i541[7])
  i540.nearClipPlane = i541[8]
  i540.farClipPlane = i541[9]
  i540.fieldOfView = i541[10]
  i540.depth = i541[11]
  i540.clearFlags = i541[12]
  i540.cullingMask = i541[13]
  i540.rect = i541[14]
  request.r(i541[15], i541[16], 0, i540, 'targetTexture')
  i540.usePhysicalProperties = !!i541[17]
  i540.focalLength = i541[18]
  i540.sensorSize = new pc.Vec2( i541[19], i541[20] )
  i540.lensShift = new pc.Vec2( i541[21], i541[22] )
  i540.gateFit = i541[23]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i543 = data
  i542.enabled = !!i543[0]
  i542.planeDistance = i543[1]
  i542.referencePixelsPerUnit = i543[2]
  i542.isFallbackOverlay = !!i543[3]
  i542.renderMode = i543[4]
  i542.renderOrder = i543[5]
  i542.sortingLayerName = i543[6]
  i542.sortingOrder = i543[7]
  i542.scaleFactor = i543[8]
  request.r(i543[9], i543[10], 0, i542, 'worldCamera')
  i542.overrideSorting = !!i543[11]
  i542.pixelPerfect = !!i543[12]
  i542.targetDisplay = i543[13]
  i542.overridePixelPerfect = !!i543[14]
  return i542
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i545 = data
  i544.m_UiScaleMode = i545[0]
  i544.m_ReferencePixelsPerUnit = i545[1]
  i544.m_ScaleFactor = i545[2]
  i544.m_ReferenceResolution = new pc.Vec2( i545[3], i545[4] )
  i544.m_ScreenMatchMode = i545[5]
  i544.m_MatchWidthOrHeight = i545[6]
  i544.m_PhysicalUnit = i545[7]
  i544.m_FallbackScreenDPI = i545[8]
  i544.m_DefaultSpriteDPI = i545[9]
  i544.m_DynamicPixelsPerUnit = i545[10]
  i544.m_PresetInfoIsWorld = !!i545[11]
  return i544
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i547 = data
  i546.m_IgnoreReversedGraphics = !!i547[0]
  i546.m_BlockingObjects = i547[1]
  i546.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i547[2] )
  return i546
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i548 = root || request.c( 'LunaManager' )
  var i549 = data
  var i551 = i549[0]
  var i550 = []
  for(var i = 0; i < i551.length; i += 2) {
  request.r(i551[i + 0], i551[i + 1], 2, i550, '')
  }
  i548.lstBtnInstall = i550
  request.r(i549[1], i549[2], 0, i548, 'EndCard')
  i548.countPlay = i549[3]
  i548.countPlayFinal = i549[4]
  i548.timeDropFinal = i549[5]
  request.r(i549[6], i549[7], 0, i548, 'bgSprite')
  request.r(i549[8], i549[9], 0, i548, 'imgBG')
  i548.colorBG = new pc.Color(i549[10], i549[11], i549[12], i549[13])
  request.r(i549[14], i549[15], 0, i548, 'logoGame')
  request.r(i549[16], i549[17], 0, i548, 'imgRawLogoGame')
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i555 = data
  i554.cullTransparentMesh = !!i555[0]
  return i554
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i557 = data
  request.r(i557[0], i557[1], 0, i556, 'm_Texture')
  i556.m_UVRect = UnityEngine.Rect.MinMaxRect(i557[2], i557[3], i557[4], i557[5])
  request.r(i557[6], i557[7], 0, i556, 'm_Material')
  i556.m_Maskable = !!i557[8]
  i556.m_Color = new pc.Color(i557[9], i557[10], i557[11], i557[12])
  i556.m_RaycastTarget = !!i557[13]
  i556.m_RaycastPadding = new pc.Vec4( i557[14], i557[15], i557[16], i557[17] )
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, 'clip')
  request.r(i559[2], i559[3], 0, i558, 'outputAudioMixerGroup')
  i558.playOnAwake = !!i559[4]
  i558.loop = !!i559[5]
  i558.time = i559[6]
  i558.volume = i559[7]
  i558.pitch = i559[8]
  i558.enabled = !!i559[9]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i561 = data
  i560.usedByComposite = !!i561[0]
  i560.autoTiling = !!i561[1]
  i560.size = new pc.Vec2( i561[2], i561[3] )
  i560.edgeRadius = i561[4]
  i560.enabled = !!i561[5]
  i560.isTrigger = !!i561[6]
  i560.usedByEffector = !!i561[7]
  i560.density = i561[8]
  i560.offset = new pc.Vec2( i561[9], i561[10] )
  request.r(i561[11], i561[12], 0, i560, 'material')
  return i560
}

Deserializers["DropZone"] = function (request, data, root) {
  var i562 = root || request.c( 'DropZone' )
  var i563 = data
  var i565 = i563[0]
  var i564 = []
  for(var i = 0; i < i565.length; i += 2) {
  request.r(i565[i + 0], i565[i + 1], 2, i564, '')
  }
  i562.steps = i564
  i562.isActive = !!i563[1]
  request.r(i563[2], i563[3], 0, i562, 'spriteUpgrade')
  return i562
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.UI.Image' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'm_Sprite')
  i568.m_Type = i569[2]
  i568.m_PreserveAspect = !!i569[3]
  i568.m_FillCenter = !!i569[4]
  i568.m_FillMethod = i569[5]
  i568.m_FillAmount = i569[6]
  i568.m_FillClockwise = !!i569[7]
  i568.m_FillOrigin = i569[8]
  i568.m_UseSpriteMesh = !!i569[9]
  i568.m_PixelsPerUnitMultiplier = i569[10]
  request.r(i569[11], i569[12], 0, i568, 'm_Material')
  i568.m_Maskable = !!i569[13]
  i568.m_Color = new pc.Color(i569[14], i569[15], i569[16], i569[17])
  i568.m_RaycastTarget = !!i569[18]
  i568.m_RaycastPadding = new pc.Vec4( i569[19], i569[20], i569[21], i569[22] )
  return i568
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i570 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'skeletonDataAsset')
  request.r(i571[2], i571[3], 0, i570, 'additiveMaterial')
  request.r(i571[4], i571[5], 0, i570, 'multiplyMaterial')
  request.r(i571[6], i571[7], 0, i570, 'screenMaterial')
  i570.initialSkinName = i571[8]
  i570.initialFlipX = !!i571[9]
  i570.initialFlipY = !!i571[10]
  i570.startingAnimation = i571[11]
  i570.startingLoop = !!i571[12]
  i570.timeScale = i571[13]
  i570.freeze = !!i571[14]
  i570.layoutScaleMode = i571[15]
  i570.updateWhenInvisible = i571[16]
  i570.allowMultipleCanvasRenderers = !!i571[17]
  var i573 = i571[18]
  var i572 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i573.length; i += 2) {
  request.r(i573[i + 0], i573[i + 1], 1, i572, '')
  }
  i570.canvasRenderers = i572
  i570.enableSeparatorSlots = !!i571[19]
  i570.updateSeparatorPartLocation = !!i571[20]
  i570.updateSeparatorPartScale = !!i571[21]
  i570.disableMeshAssignmentOnOverride = !!i571[22]
  i570.referenceSize = new pc.Vec2( i571[23], i571[24] )
  i570.referenceScale = i571[25]
  i570.rectTransformSize = new pc.Vec2( i571[26], i571[27] )
  i570.editReferenceRect = !!i571[28]
  var i575 = i571[29]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( i575[i + 0] );
  }
  i570.separatorSlotNames = i574
  var i577 = i571[30]
  var i576 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i577.length; i += 2) {
  request.r(i577[i + 0], i577[i + 1], 1, i576, '')
  }
  i570.separatorParts = i576
  i570.meshGenerator = request.d('Spine.Unity.MeshGenerator', i571[31], i570.meshGenerator)
  i570.updateTiming = i571[32]
  i570.unscaledTime = !!i571[33]
  request.r(i571[34], i571[35], 0, i570, 'm_Material')
  i570.m_Maskable = !!i571[36]
  i570.m_Color = new pc.Color(i571[37], i571[38], i571[39], i571[40])
  i570.m_RaycastTarget = !!i571[41]
  i570.m_RaycastPadding = new pc.Vec4( i571[42], i571[43], i571[44], i571[45] )
  return i570
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i584 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i585 = data
  i584.settings = request.d('Spine.Unity.MeshGenerator+Settings', i585[0], i584.settings)
  return i584
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i586 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i587 = data
  i586.useClipping = !!i587[0]
  i586.zSpacing = i587[1]
  i586.pmaVertexColors = !!i587[2]
  i586.tintBlack = !!i587[3]
  i586.canvasGroupTintBlack = !!i587[4]
  i586.calculateTangents = !!i587[5]
  i586.addNormals = !!i587[6]
  i586.immutableTriangles = !!i587[7]
  return i586
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i588 = root || request.c( 'DraggableItem' )
  var i589 = data
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i591 = data
  i590.m_Alpha = i591[0]
  i590.m_Interactable = !!i591[1]
  i590.m_BlocksRaycasts = !!i591[2]
  i590.m_IgnoreParentGroups = !!i591[3]
  i590.enabled = !!i591[4]
  return i590
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.Text' )
  var i593 = data
  i592.m_FontData = request.d('UnityEngine.UI.FontData', i593[0], i592.m_FontData)
  i592.m_Text = i593[1]
  request.r(i593[2], i593[3], 0, i592, 'm_Material')
  i592.m_Maskable = !!i593[4]
  i592.m_Color = new pc.Color(i593[5], i593[6], i593[7], i593[8])
  i592.m_RaycastTarget = !!i593[9]
  i592.m_RaycastPadding = new pc.Vec4( i593[10], i593[11], i593[12], i593[13] )
  return i592
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.FontData' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'm_Font')
  i594.m_FontSize = i595[2]
  i594.m_FontStyle = i595[3]
  i594.m_BestFit = !!i595[4]
  i594.m_MinSize = i595[5]
  i594.m_MaxSize = i595[6]
  i594.m_Alignment = i595[7]
  i594.m_AlignByGeometry = !!i595[8]
  i594.m_RichText = !!i595[9]
  i594.m_HorizontalOverflow = i595[10]
  i594.m_VerticalOverflow = i595[11]
  i594.m_LineSpacing = i595[12]
  return i594
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.UI.Button' )
  var i597 = data
  i596.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i597[0], i596.m_OnClick)
  i596.m_Navigation = request.d('UnityEngine.UI.Navigation', i597[1], i596.m_Navigation)
  i596.m_Transition = i597[2]
  i596.m_Colors = request.d('UnityEngine.UI.ColorBlock', i597[3], i596.m_Colors)
  i596.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i597[4], i596.m_SpriteState)
  i596.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i597[5], i596.m_AnimationTriggers)
  i596.m_Interactable = !!i597[6]
  request.r(i597[7], i597[8], 0, i596, 'm_TargetGraphic')
  return i596
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i599 = data
  i598.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i599[0], i598.m_PersistentCalls)
  return i598
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i601 = data
  var i603 = i601[0]
  var i602 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i603.length; i += 1) {
    i602.add(request.d('UnityEngine.Events.PersistentCall', i603[i + 0]));
  }
  i600.m_Calls = i602
  return i600
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'm_Target')
  i606.m_TargetAssemblyTypeName = i607[2]
  i606.m_MethodName = i607[3]
  i606.m_Mode = i607[4]
  i606.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i607[5], i606.m_Arguments)
  i606.m_CallState = i607[6]
  return i606
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'm_ObjectArgument')
  i608.m_ObjectArgumentAssemblyTypeName = i609[2]
  i608.m_IntArgument = i609[3]
  i608.m_FloatArgument = i609[4]
  i608.m_StringArgument = i609[5]
  i608.m_BoolArgument = !!i609[6]
  return i608
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i611 = data
  i610.m_Mode = i611[0]
  i610.m_WrapAround = !!i611[1]
  request.r(i611[2], i611[3], 0, i610, 'm_SelectOnUp')
  request.r(i611[4], i611[5], 0, i610, 'm_SelectOnDown')
  request.r(i611[6], i611[7], 0, i610, 'm_SelectOnLeft')
  request.r(i611[8], i611[9], 0, i610, 'm_SelectOnRight')
  return i610
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i613 = data
  i612.m_NormalColor = new pc.Color(i613[0], i613[1], i613[2], i613[3])
  i612.m_HighlightedColor = new pc.Color(i613[4], i613[5], i613[6], i613[7])
  i612.m_PressedColor = new pc.Color(i613[8], i613[9], i613[10], i613[11])
  i612.m_SelectedColor = new pc.Color(i613[12], i613[13], i613[14], i613[15])
  i612.m_DisabledColor = new pc.Color(i613[16], i613[17], i613[18], i613[19])
  i612.m_ColorMultiplier = i613[20]
  i612.m_FadeDuration = i613[21]
  return i612
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'm_HighlightedSprite')
  request.r(i615[2], i615[3], 0, i614, 'm_PressedSprite')
  request.r(i615[4], i615[5], 0, i614, 'm_SelectedSprite')
  request.r(i615[6], i615[7], 0, i614, 'm_DisabledSprite')
  return i614
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i617 = data
  i616.m_NormalTrigger = i617[0]
  i616.m_HighlightedTrigger = i617[1]
  i616.m_PressedTrigger = i617[2]
  i616.m_SelectedTrigger = i617[3]
  i616.m_DisabledTrigger = i617[4]
  return i616
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i618 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i619 = data
  i618.targetIsSelf = !!i619[0]
  request.r(i619[1], i619[2], 0, i618, 'targetGO')
  i618.tweenTargetIsTargetGO = !!i619[3]
  i618.delay = i619[4]
  i618.duration = i619[5]
  i618.easeType = i619[6]
  i618.easeCurve = new pc.AnimationCurve( { keys_flow: i619[7] } )
  i618.loopType = i619[8]
  i618.loops = i619[9]
  i618.id = i619[10]
  i618.isRelative = !!i619[11]
  i618.isFrom = !!i619[12]
  i618.isIndependentUpdate = !!i619[13]
  i618.autoKill = !!i619[14]
  i618.autoGenerate = !!i619[15]
  i618.isActive = !!i619[16]
  i618.isValid = !!i619[17]
  request.r(i619[18], i619[19], 0, i618, 'target')
  i618.animationType = i619[20]
  i618.targetType = i619[21]
  i618.forcedTargetType = i619[22]
  i618.autoPlay = !!i619[23]
  i618.useTargetAsV3 = !!i619[24]
  i618.endValueFloat = i619[25]
  i618.endValueV3 = new pc.Vec3( i619[26], i619[27], i619[28] )
  i618.endValueV2 = new pc.Vec2( i619[29], i619[30] )
  i618.endValueColor = new pc.Color(i619[31], i619[32], i619[33], i619[34])
  i618.endValueString = i619[35]
  i618.endValueRect = UnityEngine.Rect.MinMaxRect(i619[36], i619[37], i619[38], i619[39])
  request.r(i619[40], i619[41], 0, i618, 'endValueTransform')
  i618.optionalBool0 = !!i619[42]
  i618.optionalBool1 = !!i619[43]
  i618.optionalFloat0 = i619[44]
  i618.optionalInt0 = i619[45]
  i618.optionalRotationMode = i619[46]
  i618.optionalScrambleMode = i619[47]
  i618.optionalShakeRandomnessMode = i619[48]
  i618.optionalString = i619[49]
  i618.updateType = i619[50]
  i618.isSpeedBased = !!i619[51]
  i618.hasOnStart = !!i619[52]
  i618.hasOnPlay = !!i619[53]
  i618.hasOnUpdate = !!i619[54]
  i618.hasOnStepComplete = !!i619[55]
  i618.hasOnComplete = !!i619[56]
  i618.hasOnTweenCreated = !!i619[57]
  i618.hasOnRewind = !!i619[58]
  i618.onStart = request.d('UnityEngine.Events.UnityEvent', i619[59], i618.onStart)
  i618.onPlay = request.d('UnityEngine.Events.UnityEvent', i619[60], i618.onPlay)
  i618.onUpdate = request.d('UnityEngine.Events.UnityEvent', i619[61], i618.onUpdate)
  i618.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i619[62], i618.onStepComplete)
  i618.onComplete = request.d('UnityEngine.Events.UnityEvent', i619[63], i618.onComplete)
  i618.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i619[64], i618.onTweenCreated)
  i618.onRewind = request.d('UnityEngine.Events.UnityEvent', i619[65], i618.onRewind)
  return i618
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i621 = data
  i620.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i621[0], i620.m_PersistentCalls)
  return i620
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.Mask' )
  var i623 = data
  i622.m_ShowMaskGraphic = !!i623[0]
  return i622
}

Deserializers["GameController"] = function (request, data, root) {
  var i624 = root || request.c( 'GameController' )
  var i625 = data
  var i627 = i625[0]
  var i626 = []
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 2, i626, '')
  }
  i624.colliders = i626
  i624.isUpgrade = !!i625[1]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i631 = data
  i630.ambientIntensity = i631[0]
  i630.reflectionIntensity = i631[1]
  i630.ambientMode = i631[2]
  i630.ambientLight = new pc.Color(i631[3], i631[4], i631[5], i631[6])
  i630.ambientSkyColor = new pc.Color(i631[7], i631[8], i631[9], i631[10])
  i630.ambientGroundColor = new pc.Color(i631[11], i631[12], i631[13], i631[14])
  i630.ambientEquatorColor = new pc.Color(i631[15], i631[16], i631[17], i631[18])
  i630.fogColor = new pc.Color(i631[19], i631[20], i631[21], i631[22])
  i630.fogEndDistance = i631[23]
  i630.fogStartDistance = i631[24]
  i630.fogDensity = i631[25]
  i630.fog = !!i631[26]
  request.r(i631[27], i631[28], 0, i630, 'skybox')
  i630.fogMode = i631[29]
  var i633 = i631[30]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i633[i + 0]) );
  }
  i630.lightmaps = i632
  i630.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i631[31], i630.lightProbes)
  i630.lightmapsMode = i631[32]
  i630.mixedBakeMode = i631[33]
  i630.environmentLightingMode = i631[34]
  i630.ambientProbe = new pc.SphericalHarmonicsL2(i631[35])
  i630.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i631[36])
  i630.useReferenceAmbientProbe = !!i631[37]
  request.r(i631[38], i631[39], 0, i630, 'customReflection')
  request.r(i631[40], i631[41], 0, i630, 'defaultReflection')
  i630.defaultReflectionMode = i631[42]
  i630.defaultReflectionResolution = i631[43]
  i630.sunLightObjectId = i631[44]
  i630.pixelLightCount = i631[45]
  i630.defaultReflectionHDR = !!i631[46]
  i630.hasLightDataAsset = !!i631[47]
  i630.hasManualGenerate = !!i631[48]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'lightmapColor')
  request.r(i637[2], i637[3], 0, i636, 'lightmapDirection')
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i638 = root || new UnityEngine.LightProbes()
  var i639 = data
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i647 = data
  var i649 = i647[0]
  var i648 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i649.length; i += 1) {
    i648.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i649[i + 0]));
  }
  i646.ShaderCompilationErrors = i648
  i646.name = i647[1]
  i646.guid = i647[2]
  var i651 = i647[3]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( i651[i + 0] );
  }
  i646.shaderDefinedKeywords = i650
  var i653 = i647[4]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i653[i + 0]) );
  }
  i646.passes = i652
  var i655 = i647[5]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i655[i + 0]) );
  }
  i646.usePasses = i654
  var i657 = i647[6]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i657[i + 0]) );
  }
  i646.defaultParameterValues = i656
  request.r(i647[7], i647[8], 0, i646, 'unityFallbackShader')
  i646.readDepth = !!i647[9]
  i646.isCreatedByShaderGraph = !!i647[10]
  i646.usedBatchUniforms = i647[11]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i661 = data
  i660.shaderName = i661[0]
  i660.errorMessage = i661[1]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i664 = root || new pc.UnityShaderPass()
  var i665 = data
  i664.id = i665[0]
  i664.subShaderIndex = i665[1]
  i664.name = i665[2]
  i664.passType = i665[3]
  i664.grabPassTextureName = i665[4]
  i664.usePass = !!i665[5]
  i664.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[6], i664.zTest)
  i664.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[7], i664.zWrite)
  i664.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[8], i664.culling)
  i664.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i665[9], i664.blending)
  i664.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i665[10], i664.alphaBlending)
  i664.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[11], i664.colorWriteMask)
  i664.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[12], i664.offsetUnits)
  i664.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[13], i664.offsetFactor)
  i664.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[14], i664.stencilRef)
  i664.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[15], i664.stencilReadMask)
  i664.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i665[16], i664.stencilWriteMask)
  i664.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i665[17], i664.stencilOp)
  i664.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i665[18], i664.stencilOpFront)
  i664.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i665[19], i664.stencilOpBack)
  var i667 = i665[20]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i667[i + 0]) );
  }
  i664.tags = i666
  var i669 = i665[21]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( i669[i + 0] );
  }
  i664.passDefinedKeywords = i668
  var i671 = i665[22]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i671[i + 0]) );
  }
  i664.passDefinedKeywordGroups = i670
  var i673 = i665[23]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i673[i + 0]) );
  }
  i664.variants = i672
  var i675 = i665[24]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i675[i + 0]) );
  }
  i664.excludedVariants = i674
  i664.hasDepthReader = !!i665[25]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i677 = data
  i676.val = i677[0]
  i676.name = i677[1]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i679 = data
  i678.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[0], i678.src)
  i678.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[1], i678.dst)
  i678.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[2], i678.op)
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i681 = data
  i680.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[0], i680.pass)
  i680.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[1], i680.fail)
  i680.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[2], i680.zFail)
  i680.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[3], i680.comp)
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i685 = data
  i684.name = i685[0]
  i684.value = i685[1]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i689 = data
  var i691 = i689[0]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( i691[i + 0] );
  }
  i688.keywords = i690
  i688.hasDiscard = !!i689[1]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i695 = data
  i694.passId = i695[0]
  i694.subShaderIndex = i695[1]
  var i697 = i695[2]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( i697[i + 0] );
  }
  i694.keywords = i696
  i694.vertexProgram = i695[3]
  i694.fragmentProgram = i695[4]
  i694.compiledForWebGL2 = !!i695[5]
  i694.readDepth = !!i695[6]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'shader')
  i700.pass = i701[2]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i705 = data
  i704.name = i705[0]
  i704.type = i705[1]
  i704.value = new pc.Vec4( i705[2], i705[3], i705[4], i705[5] )
  i704.textureValue = i705[6]
  i704.shaderPropertyFlag = i705[7]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i707 = data
  i706.name = i707[0]
  request.r(i707[1], i707[2], 0, i706, 'texture')
  i706.aabb = i707[3]
  i706.vertices = i707[4]
  i706.triangles = i707[5]
  i706.textureRect = UnityEngine.Rect.MinMaxRect(i707[6], i707[7], i707[8], i707[9])
  i706.packedRect = UnityEngine.Rect.MinMaxRect(i707[10], i707[11], i707[12], i707[13])
  i706.border = new pc.Vec4( i707[14], i707[15], i707[16], i707[17] )
  i706.transparency = i707[18]
  i706.bounds = i707[19]
  i706.pixelsPerUnit = i707[20]
  i706.textureWidth = i707[21]
  i706.textureHeight = i707[22]
  i706.nativeSize = new pc.Vec2( i707[23], i707[24] )
  i706.pivot = new pc.Vec2( i707[25], i707[26] )
  i706.textureRectOffset = new pc.Vec2( i707[27], i707[28] )
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i709 = data
  i708.name = i709[0]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i711 = data
  i710.name = i711[0]
  i710.ascent = i711[1]
  i710.originalLineHeight = i711[2]
  i710.fontSize = i711[3]
  var i713 = i711[4]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i713[i + 0]) );
  }
  i710.characterInfo = i712
  request.r(i711[5], i711[6], 0, i710, 'texture')
  i710.originalFontSize = i711[7]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i717 = data
  i716.index = i717[0]
  i716.advance = i717[1]
  i716.bearing = i717[2]
  i716.glyphWidth = i717[3]
  i716.glyphHeight = i717[4]
  i716.minX = i717[5]
  i716.maxX = i717[6]
  i716.minY = i717[7]
  i716.maxY = i717[8]
  i716.uvBottomLeftX = i717[9]
  i716.uvBottomLeftY = i717[10]
  i716.uvBottomRightX = i717[11]
  i716.uvBottomRightY = i717[12]
  i716.uvTopLeftX = i717[13]
  i716.uvTopLeftY = i717[14]
  i716.uvTopRightX = i717[15]
  i716.uvTopRightY = i717[16]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i719 = data
  i718.name = i719[0]
  i718.bytes64 = i719[1]
  i718.data = i719[2]
  return i718
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i720 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i721 = data
  var i723 = i721[0]
  var i722 = []
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 2, i722, '')
  }
  i720.atlasAssets = i722
  i720.scale = i721[1]
  request.r(i721[2], i721[3], 0, i720, 'skeletonJSON')
  i720.isUpgradingBlendModeMaterials = !!i721[4]
  i720.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i721[5], i720.blendModeMaterials)
  var i725 = i721[6]
  var i724 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 1, i724, '')
  }
  i720.skeletonDataModifiers = i724
  var i727 = i721[7]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( i727[i + 0] );
  }
  i720.fromAnimation = i726
  var i729 = i721[8]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( i729[i + 0] );
  }
  i720.toAnimation = i728
  i720.duration = i721[9]
  i720.defaultMix = i721[10]
  request.r(i721[11], i721[12], 0, i720, 'controller')
  return i720
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i732 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i733 = data
  i732.applyAdditiveMaterial = !!i733[0]
  var i735 = i733[1]
  var i734 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i735.length; i += 1) {
    i734.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i735[i + 0]));
  }
  i732.additiveMaterials = i734
  var i737 = i733[2]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i737.length; i += 1) {
    i736.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i737[i + 0]));
  }
  i732.multiplyMaterials = i736
  var i739 = i733[3]
  var i738 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i739.length; i += 1) {
    i738.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i739[i + 0]));
  }
  i732.screenMaterials = i738
  i732.requiresBlendModeMaterials = !!i733[4]
  return i732
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i742 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i743 = data
  i742.pageName = i743[0]
  request.r(i743[1], i743[2], 0, i742, 'material')
  return i742
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i746 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'atlasFile')
  var i749 = i747[2]
  var i748 = []
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 2, i748, '')
  }
  i746.materials = i748
  i746.textureLoadingMode = i747[3]
  request.r(i747[4], i747[5], 0, i746, 'onDemandTextureLoader')
  return i746
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i750 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i751 = data
  i750.useSafeMode = !!i751[0]
  i750.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i751[1], i750.safeModeOptions)
  i750.timeScale = i751[2]
  i750.unscaledTimeScale = i751[3]
  i750.useSmoothDeltaTime = !!i751[4]
  i750.maxSmoothUnscaledTime = i751[5]
  i750.rewindCallbackMode = i751[6]
  i750.showUnityEditorReport = !!i751[7]
  i750.logBehaviour = i751[8]
  i750.drawGizmos = !!i751[9]
  i750.defaultRecyclable = !!i751[10]
  i750.defaultAutoPlay = i751[11]
  i750.defaultUpdateType = i751[12]
  i750.defaultTimeScaleIndependent = !!i751[13]
  i750.defaultEaseType = i751[14]
  i750.defaultEaseOvershootOrAmplitude = i751[15]
  i750.defaultEasePeriod = i751[16]
  i750.defaultAutoKill = !!i751[17]
  i750.defaultLoopType = i751[18]
  i750.debugMode = !!i751[19]
  i750.debugStoreTargetId = !!i751[20]
  i750.showPreviewPanel = !!i751[21]
  i750.storeSettingsLocation = i751[22]
  i750.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i751[23], i750.modules)
  i750.createASMDEF = !!i751[24]
  i750.showPlayingTweens = !!i751[25]
  i750.showPausedTweens = !!i751[26]
  return i750
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i752 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i753 = data
  i752.logBehaviour = i753[0]
  i752.nestedTweenFailureBehaviour = i753[1]
  return i752
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i754 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i755 = data
  i754.showPanel = !!i755[0]
  i754.audioEnabled = !!i755[1]
  i754.physicsEnabled = !!i755[2]
  i754.physics2DEnabled = !!i755[3]
  i754.spriteEnabled = !!i755[4]
  i754.uiEnabled = !!i755[5]
  i754.textMeshProEnabled = !!i755[6]
  i754.tk2DEnabled = !!i755[7]
  i754.deAudioEnabled = !!i755[8]
  i754.deUnityExtendedEnabled = !!i755[9]
  i754.epoOutlineEnabled = !!i755[10]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i757 = data
  var i759 = i757[0]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i759[i + 0]) );
  }
  i756.files = i758
  i756.componentToPrefabIds = i757[1]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i763 = data
  i762.path = i763[0]
  request.r(i763[1], i763[2], 0, i762, 'unityObject')
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i765 = data
  var i767 = i765[0]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i767[i + 0]) );
  }
  i764.scriptsExecutionOrder = i766
  var i769 = i765[1]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i769[i + 0]) );
  }
  i764.sortingLayers = i768
  var i771 = i765[2]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i771[i + 0]) );
  }
  i764.cullingLayers = i770
  i764.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i765[3], i764.timeSettings)
  i764.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i765[4], i764.physicsSettings)
  i764.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i765[5], i764.physics2DSettings)
  i764.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i765[6], i764.qualitySettings)
  i764.enableRealtimeShadows = !!i765[7]
  i764.enableAutoInstancing = !!i765[8]
  i764.enableDynamicBatching = !!i765[9]
  i764.lightmapEncodingQuality = i765[10]
  i764.desiredColorSpace = i765[11]
  var i773 = i765[12]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( i773[i + 0] );
  }
  i764.allTags = i772
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i777 = data
  i776.name = i777[0]
  i776.value = i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i781 = data
  i780.id = i781[0]
  i780.name = i781[1]
  i780.value = i781[2]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i785 = data
  i784.id = i785[0]
  i784.name = i785[1]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i787 = data
  i786.fixedDeltaTime = i787[0]
  i786.maximumDeltaTime = i787[1]
  i786.timeScale = i787[2]
  i786.maximumParticleTimestep = i787[3]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i789 = data
  i788.gravity = new pc.Vec3( i789[0], i789[1], i789[2] )
  i788.defaultSolverIterations = i789[3]
  i788.bounceThreshold = i789[4]
  i788.autoSyncTransforms = !!i789[5]
  i788.autoSimulation = !!i789[6]
  var i791 = i789[7]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i791[i + 0]) );
  }
  i788.collisionMatrix = i790
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i795 = data
  i794.enabled = !!i795[0]
  i794.layerId = i795[1]
  i794.otherLayerId = i795[2]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'material')
  i796.gravity = new pc.Vec2( i797[2], i797[3] )
  i796.positionIterations = i797[4]
  i796.velocityIterations = i797[5]
  i796.velocityThreshold = i797[6]
  i796.maxLinearCorrection = i797[7]
  i796.maxAngularCorrection = i797[8]
  i796.maxTranslationSpeed = i797[9]
  i796.maxRotationSpeed = i797[10]
  i796.baumgarteScale = i797[11]
  i796.baumgarteTOIScale = i797[12]
  i796.timeToSleep = i797[13]
  i796.linearSleepTolerance = i797[14]
  i796.angularSleepTolerance = i797[15]
  i796.defaultContactOffset = i797[16]
  i796.autoSimulation = !!i797[17]
  i796.queriesHitTriggers = !!i797[18]
  i796.queriesStartInColliders = !!i797[19]
  i796.callbacksOnDisable = !!i797[20]
  i796.reuseCollisionCallbacks = !!i797[21]
  i796.autoSyncTransforms = !!i797[22]
  var i799 = i797[23]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i799[i + 0]) );
  }
  i796.collisionMatrix = i798
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i803 = data
  i802.enabled = !!i803[0]
  i802.layerId = i803[1]
  i802.otherLayerId = i803[2]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i805 = data
  var i807 = i805[0]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i807[i + 0]) );
  }
  i804.qualityLevels = i806
  var i809 = i805[1]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( i809[i + 0] );
  }
  i804.names = i808
  i804.shadows = i805[2]
  i804.anisotropicFiltering = i805[3]
  i804.antiAliasing = i805[4]
  i804.lodBias = i805[5]
  i804.shadowCascades = i805[6]
  i804.shadowDistance = i805[7]
  i804.shadowmaskMode = i805[8]
  i804.shadowProjection = i805[9]
  i804.shadowResolution = i805[10]
  i804.softParticles = !!i805[11]
  i804.softVegetation = !!i805[12]
  i804.activeColorSpace = i805[13]
  i804.desiredColorSpace = i805[14]
  i804.masterTextureLimit = i805[15]
  i804.maxQueuedFrames = i805[16]
  i804.particleRaycastBudget = i805[17]
  i804.pixelLightCount = i805[18]
  i804.realtimeReflectionProbes = !!i805[19]
  i804.shadowCascade2Split = i805[20]
  i804.shadowCascade4Split = new pc.Vec3( i805[21], i805[22], i805[23] )
  i804.streamingMipmapsActive = !!i805[24]
  i804.vSyncCount = i805[25]
  i804.asyncUploadBufferSize = i805[26]
  i804.asyncUploadTimeSlice = i805[27]
  i804.billboardsFaceCameraPosition = !!i805[28]
  i804.shadowNearPlaneOffset = i805[29]
  i804.streamingMipmapsMemoryBudget = i805[30]
  i804.maximumLODLevel = i805[31]
  i804.streamingMipmapsAddAllCameras = !!i805[32]
  i804.streamingMipmapsMaxLevelReduction = i805[33]
  i804.streamingMipmapsRenderersPerFrame = i805[34]
  i804.resolutionScalingFixedDPIFactor = i805[35]
  i804.streamingMipmapsMaxFileIORequests = i805[36]
  i804.currentQualityLevel = i805[37]
  return i804
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[47],"48":[10],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[10],"72":[73],"74":[75],"76":[75],"12":[2],"77":[78],"79":[80],"81":[78],"82":[2],"83":[2],"14":[12],"25":[20,2],"84":[2],"13":[12],"85":[2],"86":[2],"87":[2],"88":[2],"89":[2],"90":[2],"91":[2],"34":[2],"92":[2],"19":[20,2],"93":[2],"94":[2],"95":[2],"96":[2],"31":[20,2],"97":[2],"98":[8],"99":[8],"9":[8],"100":[8],"101":[10],"102":[10],"103":[104],"105":[10],"106":[107],"108":[2],"109":[20,2],"110":[73],"27":[20,2],"111":[112,73],"113":[73],"114":[73,115],"116":[50],"117":[58],"118":[107],"119":[120],"121":[2],"122":[73,2],"123":[2,20],"124":[2],"125":[20,2],"126":[73],"127":[20,2],"128":[2],"129":[78]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Transform","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.BoxCollider2D","DropZone","UnityEngine.UI.Image","UnityEngine.Sprite","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","DraggableItem","UnityEngine.CanvasGroup","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "04/15/2025 07:07:05";

Deserializers.lunaDaysRunning = "1.1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1793";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4222";

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

Deserializers.buildID = "997cc9a7-66d9-4458-ad40-d0e50eadd83d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

