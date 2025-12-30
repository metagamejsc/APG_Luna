var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointSpring' )
  var i479 = data
  i478.spring = i479[0]
  i478.damper = i479[1]
  i478.targetPosition = i479[2]
  return i478
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointMotor' )
  var i481 = data
  i480.m_TargetVelocity = i481[0]
  i480.m_Force = i481[1]
  i480.m_FreeSpin = i481[2]
  return i480
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointLimits' )
  var i483 = data
  i482.m_Min = i483[0]
  i482.m_Max = i483[1]
  i482.m_Bounciness = i483[2]
  i482.m_BounceMinVelocity = i483[3]
  i482.m_ContactDistance = i483[4]
  i482.minBounce = i483[5]
  i482.maxBounce = i483[6]
  return i482
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointDrive' )
  var i485 = data
  i484.m_PositionSpring = i485[0]
  i484.m_PositionDamper = i485[1]
  i484.m_MaximumForce = i485[2]
  i484.m_UseAcceleration = i485[3]
  return i484
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i487 = data
  i486.m_Spring = i487[0]
  i486.m_Damper = i487[1]
  return i486
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i489 = data
  i488.m_Limit = i489[0]
  i488.m_Bounciness = i489[1]
  i488.m_ContactDistance = i489[2]
  return i488
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i491 = data
  i490.m_ExtremumSlip = i491[0]
  i490.m_ExtremumValue = i491[1]
  i490.m_AsymptoteSlip = i491[2]
  i490.m_AsymptoteValue = i491[3]
  i490.m_Stiffness = i491[4]
  return i490
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i493 = data
  i492.m_LowerAngle = i493[0]
  i492.m_UpperAngle = i493[1]
  return i492
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i495 = data
  i494.m_MotorSpeed = i495[0]
  i494.m_MaximumMotorTorque = i495[1]
  return i494
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i497 = data
  i496.m_DampingRatio = i497[0]
  i496.m_Frequency = i497[1]
  i496.m_Angle = i497[2]
  return i496
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i499 = data
  i498.m_LowerTranslation = i499[0]
  i498.m_UpperTranslation = i499[1]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i501 = data
  i500.name = i501[0]
  i500.width = i501[1]
  i500.height = i501[2]
  i500.mipmapCount = i501[3]
  i500.anisoLevel = i501[4]
  i500.filterMode = i501[5]
  i500.hdr = !!i501[6]
  i500.format = i501[7]
  i500.wrapMode = i501[8]
  i500.alphaIsTransparency = !!i501[9]
  i500.alphaSource = i501[10]
  i500.graphicsFormat = i501[11]
  i500.sRGBTexture = !!i501[12]
  i500.desiredColorSpace = i501[13]
  i500.wrapU = i501[14]
  i500.wrapV = i501[15]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i502 = root || new pc.UnityMaterial()
  var i503 = data
  i502.name = i503[0]
  request.r(i503[1], i503[2], 0, i502, 'shader')
  i502.renderQueue = i503[3]
  i502.enableInstancing = !!i503[4]
  var i505 = i503[5]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i505[i + 0]) );
  }
  i502.floatParameters = i504
  var i507 = i503[6]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i507[i + 0]) );
  }
  i502.colorParameters = i506
  var i509 = i503[7]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i509[i + 0]) );
  }
  i502.vectorParameters = i508
  var i511 = i503[8]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i511[i + 0]) );
  }
  i502.textureParameters = i510
  var i513 = i503[9]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i513[i + 0]) );
  }
  i502.materialFlags = i512
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i517 = data
  i516.name = i517[0]
  i516.value = i517[1]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i521 = data
  i520.name = i521[0]
  i520.value = new pc.Color(i521[1], i521[2], i521[3], i521[4])
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i525 = data
  i524.name = i525[0]
  i524.value = new pc.Vec4( i525[1], i525[2], i525[3], i525[4] )
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i529 = data
  i528.name = i529[0]
  request.r(i529[1], i529[2], 0, i528, 'value')
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i533 = data
  i532.name = i533[0]
  i532.enabled = !!i533[1]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i535 = data
  i534.pivot = new pc.Vec2( i535[0], i535[1] )
  i534.anchorMin = new pc.Vec2( i535[2], i535[3] )
  i534.anchorMax = new pc.Vec2( i535[4], i535[5] )
  i534.sizeDelta = new pc.Vec2( i535[6], i535[7] )
  i534.anchoredPosition3D = new pc.Vec3( i535[8], i535[9], i535[10] )
  i534.rotation = new pc.Quat(i535[11], i535[12], i535[13], i535[14])
  i534.scale = new pc.Vec3( i535[15], i535[16], i535[17] )
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i537 = data
  i536.cullTransparentMesh = !!i537[0]
  return i536
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i538 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i539 = data
  request.r(i539[0], i539[1], 0, i538, 'skeletonDataAsset')
  request.r(i539[2], i539[3], 0, i538, 'additiveMaterial')
  request.r(i539[4], i539[5], 0, i538, 'multiplyMaterial')
  request.r(i539[6], i539[7], 0, i538, 'screenMaterial')
  i538.initialSkinName = i539[8]
  i538.initialFlipX = !!i539[9]
  i538.initialFlipY = !!i539[10]
  i538.startingAnimation = i539[11]
  i538.startingLoop = !!i539[12]
  i538.timeScale = i539[13]
  i538.freeze = !!i539[14]
  i538.layoutScaleMode = i539[15]
  i538.updateWhenInvisible = i539[16]
  i538.allowMultipleCanvasRenderers = !!i539[17]
  var i541 = i539[18]
  var i540 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i541.length; i += 2) {
  request.r(i541[i + 0], i541[i + 1], 1, i540, '')
  }
  i538.canvasRenderers = i540
  i538.enableSeparatorSlots = !!i539[19]
  i538.updateSeparatorPartLocation = !!i539[20]
  i538.updateSeparatorPartScale = !!i539[21]
  i538.disableMeshAssignmentOnOverride = !!i539[22]
  i538.m_SkeletonColor = new pc.Color(i539[23], i539[24], i539[25], i539[26])
  i538.referenceSize = new pc.Vec2( i539[27], i539[28] )
  i538.pivotOffset = new pc.Vec2( i539[29], i539[30] )
  i538.referenceScale = i539[31]
  i538.layoutScale = i539[32]
  i538.rectTransformSize = new pc.Vec2( i539[33], i539[34] )
  i538.editReferenceRect = !!i539[35]
  var i543 = i539[36]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( i543[i + 0] );
  }
  i538.separatorSlotNames = i542
  var i545 = i539[37]
  var i544 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i545.length; i += 2) {
  request.r(i545[i + 0], i545[i + 1], 1, i544, '')
  }
  i538.separatorParts = i544
  i538.physicsPositionInheritanceFactor = new pc.Vec2( i539[38], i539[39] )
  i538.physicsRotationInheritanceFactor = i539[40]
  request.r(i539[41], i539[42], 0, i538, 'physicsMovementRelativeTo')
  i538.meshGenerator = request.d('Spine.Unity.MeshGenerator', i539[43], i538.meshGenerator)
  i538.updateTiming = i539[44]
  i538.unscaledTime = !!i539[45]
  i538.m_Maskable = !!i539[46]
  request.r(i539[47], i539[48], 0, i538, 'm_Material')
  i538.m_Color = new pc.Color(i539[49], i539[50], i539[51], i539[52])
  i538.m_RaycastTarget = !!i539[53]
  i538.m_RaycastPadding = new pc.Vec4( i539[54], i539[55], i539[56], i539[57] )
  return i538
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i552 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i553 = data
  i552.settings = request.d('Spine.Unity.MeshGenerator+Settings', i553[0], i552.settings)
  return i552
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i554 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i555 = data
  i554.useClipping = !!i555[0]
  i554.zSpacing = i555[1]
  i554.tintBlack = !!i555[2]
  i554.canvasGroupCompatible = !!i555[3]
  i554.pmaVertexColors = !!i555[4]
  i554.addNormals = !!i555[5]
  i554.calculateTangents = !!i555[6]
  i554.immutableTriangles = !!i555[7]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i557 = data
  i556.name = i557[0]
  i556.tagId = i557[1]
  i556.enabled = !!i557[2]
  i556.isStatic = !!i557[3]
  i556.layer = i557[4]
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

Deserializers["Item"] = function (request, data, root) {
  var i560 = root || request.c( 'Item' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'nodeHumman')
  request.r(i561[2], i561[3], 0, i560, 'nodeItem')
  return i560
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.UI.Image' )
  var i563 = data
  request.r(i563[0], i563[1], 0, i562, 'm_Sprite')
  i562.m_Type = i563[2]
  i562.m_PreserveAspect = !!i563[3]
  i562.m_FillCenter = !!i563[4]
  i562.m_FillMethod = i563[5]
  i562.m_FillAmount = i563[6]
  i562.m_FillClockwise = !!i563[7]
  i562.m_FillOrigin = i563[8]
  i562.m_UseSpriteMesh = !!i563[9]
  i562.m_PixelsPerUnitMultiplier = i563[10]
  i562.m_Maskable = !!i563[11]
  request.r(i563[12], i563[13], 0, i562, 'm_Material')
  i562.m_Color = new pc.Color(i563[14], i563[15], i563[16], i563[17])
  i562.m_RaycastTarget = !!i563[18]
  i562.m_RaycastPadding = new pc.Vec4( i563[19], i563[20], i563[21], i563[22] )
  return i562
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i564 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i565 = data
  i564.m_hasFontAssetChanged = !!i565[0]
  request.r(i565[1], i565[2], 0, i564, 'm_baseMaterial')
  i564.m_maskOffset = new pc.Vec4( i565[3], i565[4], i565[5], i565[6] )
  i564.m_text = i565[7]
  i564.m_isRightToLeft = !!i565[8]
  request.r(i565[9], i565[10], 0, i564, 'm_fontAsset')
  request.r(i565[11], i565[12], 0, i564, 'm_sharedMaterial')
  var i567 = i565[13]
  var i566 = []
  for(var i = 0; i < i567.length; i += 2) {
  request.r(i567[i + 0], i567[i + 1], 2, i566, '')
  }
  i564.m_fontSharedMaterials = i566
  request.r(i565[14], i565[15], 0, i564, 'm_fontMaterial')
  var i569 = i565[16]
  var i568 = []
  for(var i = 0; i < i569.length; i += 2) {
  request.r(i569[i + 0], i569[i + 1], 2, i568, '')
  }
  i564.m_fontMaterials = i568
  i564.m_fontColor32 = UnityEngine.Color32.ConstructColor(i565[17], i565[18], i565[19], i565[20])
  i564.m_fontColor = new pc.Color(i565[21], i565[22], i565[23], i565[24])
  i564.m_enableVertexGradient = !!i565[25]
  i564.m_colorMode = i565[26]
  i564.m_fontColorGradient = request.d('TMPro.VertexGradient', i565[27], i564.m_fontColorGradient)
  request.r(i565[28], i565[29], 0, i564, 'm_fontColorGradientPreset')
  request.r(i565[30], i565[31], 0, i564, 'm_spriteAsset')
  i564.m_tintAllSprites = !!i565[32]
  request.r(i565[33], i565[34], 0, i564, 'm_StyleSheet')
  i564.m_TextStyleHashCode = i565[35]
  i564.m_overrideHtmlColors = !!i565[36]
  i564.m_faceColor = UnityEngine.Color32.ConstructColor(i565[37], i565[38], i565[39], i565[40])
  i564.m_fontSize = i565[41]
  i564.m_fontSizeBase = i565[42]
  i564.m_fontWeight = i565[43]
  i564.m_enableAutoSizing = !!i565[44]
  i564.m_fontSizeMin = i565[45]
  i564.m_fontSizeMax = i565[46]
  i564.m_fontStyle = i565[47]
  i564.m_HorizontalAlignment = i565[48]
  i564.m_VerticalAlignment = i565[49]
  i564.m_textAlignment = i565[50]
  i564.m_characterSpacing = i565[51]
  i564.m_wordSpacing = i565[52]
  i564.m_lineSpacing = i565[53]
  i564.m_lineSpacingMax = i565[54]
  i564.m_paragraphSpacing = i565[55]
  i564.m_charWidthMaxAdj = i565[56]
  i564.m_enableWordWrapping = !!i565[57]
  i564.m_wordWrappingRatios = i565[58]
  i564.m_overflowMode = i565[59]
  request.r(i565[60], i565[61], 0, i564, 'm_linkedTextComponent')
  request.r(i565[62], i565[63], 0, i564, 'parentLinkedComponent')
  i564.m_enableKerning = !!i565[64]
  i564.m_enableExtraPadding = !!i565[65]
  i564.checkPaddingRequired = !!i565[66]
  i564.m_isRichText = !!i565[67]
  i564.m_parseCtrlCharacters = !!i565[68]
  i564.m_isOrthographic = !!i565[69]
  i564.m_isCullingEnabled = !!i565[70]
  i564.m_horizontalMapping = i565[71]
  i564.m_verticalMapping = i565[72]
  i564.m_uvLineOffset = i565[73]
  i564.m_geometrySortingOrder = i565[74]
  i564.m_IsTextObjectScaleStatic = !!i565[75]
  i564.m_VertexBufferAutoSizeReduction = !!i565[76]
  i564.m_useMaxVisibleDescender = !!i565[77]
  i564.m_pageToDisplay = i565[78]
  i564.m_margin = new pc.Vec4( i565[79], i565[80], i565[81], i565[82] )
  i564.m_isUsingLegacyAnimationComponent = !!i565[83]
  i564.m_isVolumetricText = !!i565[84]
  i564.m_Maskable = !!i565[85]
  request.r(i565[86], i565[87], 0, i564, 'm_Material')
  i564.m_Color = new pc.Color(i565[88], i565[89], i565[90], i565[91])
  i564.m_RaycastTarget = !!i565[92]
  i564.m_RaycastPadding = new pc.Vec4( i565[93], i565[94], i565[95], i565[96] )
  return i564
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i572 = root || request.c( 'TMPro.VertexGradient' )
  var i573 = data
  i572.topLeft = new pc.Color(i573[0], i573[1], i573[2], i573[3])
  i572.topRight = new pc.Color(i573[4], i573[5], i573[6], i573[7])
  i572.bottomLeft = new pc.Color(i573[8], i573[9], i573[10], i573[11])
  i572.bottomRight = new pc.Color(i573[12], i573[13], i573[14], i573[15])
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i575 = data
  i574.name = i575[0]
  i574.index = i575[1]
  i574.startup = !!i575[2]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i577 = data
  i576.position = new pc.Vec3( i577[0], i577[1], i577[2] )
  i576.scale = new pc.Vec3( i577[3], i577[4], i577[5] )
  i576.rotation = new pc.Quat(i577[6], i577[7], i577[8], i577[9])
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i579 = data
  i578.aspect = i579[0]
  i578.orthographic = !!i579[1]
  i578.orthographicSize = i579[2]
  i578.backgroundColor = new pc.Color(i579[3], i579[4], i579[5], i579[6])
  i578.nearClipPlane = i579[7]
  i578.farClipPlane = i579[8]
  i578.fieldOfView = i579[9]
  i578.depth = i579[10]
  i578.clearFlags = i579[11]
  i578.cullingMask = i579[12]
  i578.rect = i579[13]
  request.r(i579[14], i579[15], 0, i578, 'targetTexture')
  i578.usePhysicalProperties = !!i579[16]
  i578.focalLength = i579[17]
  i578.sensorSize = new pc.Vec2( i579[18], i579[19] )
  i578.lensShift = new pc.Vec2( i579[20], i579[21] )
  i578.gateFit = i579[22]
  i578.commandBufferCount = i579[23]
  i578.cameraType = i579[24]
  i578.enabled = !!i579[25]
  return i578
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'm_FirstSelected')
  i580.m_sendNavigationEvents = !!i581[2]
  i580.m_DragThreshold = i581[3]
  return i580
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i583 = data
  i582.m_HorizontalAxis = i583[0]
  i582.m_VerticalAxis = i583[1]
  i582.m_SubmitButton = i583[2]
  i582.m_CancelButton = i583[3]
  i582.m_InputActionsPerSecond = i583[4]
  i582.m_RepeatDelay = i583[5]
  i582.m_ForceModuleActive = !!i583[6]
  i582.m_SendPointerHoverToParent = !!i583[7]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i585 = data
  i584.planeDistance = i585[0]
  i584.referencePixelsPerUnit = i585[1]
  i584.isFallbackOverlay = !!i585[2]
  i584.renderMode = i585[3]
  i584.renderOrder = i585[4]
  i584.sortingLayerName = i585[5]
  i584.sortingOrder = i585[6]
  i584.scaleFactor = i585[7]
  request.r(i585[8], i585[9], 0, i584, 'worldCamera')
  i584.overrideSorting = !!i585[10]
  i584.pixelPerfect = !!i585[11]
  i584.targetDisplay = i585[12]
  i584.overridePixelPerfect = !!i585[13]
  i584.enabled = !!i585[14]
  return i584
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i587 = data
  i586.m_UiScaleMode = i587[0]
  i586.m_ReferencePixelsPerUnit = i587[1]
  i586.m_ScaleFactor = i587[2]
  i586.m_ReferenceResolution = new pc.Vec2( i587[3], i587[4] )
  i586.m_ScreenMatchMode = i587[5]
  i586.m_MatchWidthOrHeight = i587[6]
  i586.m_PhysicalUnit = i587[7]
  i586.m_FallbackScreenDPI = i587[8]
  i586.m_DefaultSpriteDPI = i587[9]
  i586.m_DynamicPixelsPerUnit = i587[10]
  i586.m_PresetInfoIsWorld = !!i587[11]
  return i586
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i589 = data
  i588.m_IgnoreReversedGraphics = !!i589[0]
  i588.m_BlockingObjects = i589[1]
  i588.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i589[2] )
  return i588
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'm_Texture')
  i590.m_UVRect = UnityEngine.Rect.MinMaxRect(i591[2], i591[3], i591[4], i591[5])
  i590.m_Maskable = !!i591[6]
  request.r(i591[7], i591[8], 0, i590, 'm_Material')
  i590.m_Color = new pc.Color(i591[9], i591[10], i591[11], i591[12])
  i590.m_RaycastTarget = !!i591[13]
  i590.m_RaycastPadding = new pc.Vec4( i591[14], i591[15], i591[16], i591[17] )
  return i590
}

Deserializers["DropSpawn"] = function (request, data, root) {
  var i592 = root || request.c( 'DropSpawn' )
  var i593 = data
  var i595 = i593[0]
  var i594 = []
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 2, i594, '')
  }
  i592.spawnPrefabs = i594
  request.r(i593[1], i593[2], 0, i592, 'transSpawn')
  request.r(i593[3], i593[4], 0, i592, 'fireMan')
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i599 = data
  i598.usedByComposite = !!i599[0]
  i598.autoTiling = !!i599[1]
  var i601 = i599[2]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
  var i603 = i601[i + 0]
  var i602 = []
  for(var i = 0; i < i603.length; i += 2) {
    i602.push( new pc.Vec2( i603[i + 0], i603[i + 1] ) );
  }
    i600.push( i602 );
  }
  i598.points = i600
  i598.enabled = !!i599[3]
  i598.isTrigger = !!i599[4]
  i598.usedByEffector = !!i599[5]
  i598.density = i599[6]
  i598.offset = new pc.Vec2( i599[7], i599[8] )
  request.r(i599[9], i599[10], 0, i598, 'material')
  return i598
}

Deserializers["DragSpawn"] = function (request, data, root) {
  var i610 = root || request.c( 'DragSpawn' )
  var i611 = data
  i610.idDrag = i611[0]
  i610.isProcess = !!i611[1]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i613 = data
  i612.m_Alpha = i613[0]
  i612.m_Interactable = !!i613[1]
  i612.m_BlocksRaycasts = !!i613[2]
  i612.m_IgnoreParentGroups = !!i613[3]
  i612.enabled = !!i613[4]
  return i612
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i614 = root || request.c( 'ClickItem' )
  var i615 = data
  var i617 = i615[0]
  var i616 = []
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 2, i616, '')
  }
  i614.steps = i616
  i614.currentStep = i615[1]
  i614.isProcess = !!i615[2]
  return i614
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.Button' )
  var i619 = data
  i618.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i619[0], i618.m_OnClick)
  i618.m_Navigation = request.d('UnityEngine.UI.Navigation', i619[1], i618.m_Navigation)
  i618.m_Transition = i619[2]
  i618.m_Colors = request.d('UnityEngine.UI.ColorBlock', i619[3], i618.m_Colors)
  i618.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i619[4], i618.m_SpriteState)
  i618.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i619[5], i618.m_AnimationTriggers)
  i618.m_Interactable = !!i619[6]
  request.r(i619[7], i619[8], 0, i618, 'm_TargetGraphic')
  return i618
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i621 = data
  i620.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i621[0], i620.m_PersistentCalls)
  return i620
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i623 = data
  var i625 = i623[0]
  var i624 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i625.length; i += 1) {
    i624.add(request.d('UnityEngine.Events.PersistentCall', i625[i + 0]));
  }
  i622.m_Calls = i624
  return i622
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'm_Target')
  i628.m_TargetAssemblyTypeName = i629[2]
  i628.m_MethodName = i629[3]
  i628.m_Mode = i629[4]
  i628.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i629[5], i628.m_Arguments)
  i628.m_CallState = i629[6]
  return i628
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i631 = data
  i630.m_Mode = i631[0]
  i630.m_WrapAround = !!i631[1]
  request.r(i631[2], i631[3], 0, i630, 'm_SelectOnUp')
  request.r(i631[4], i631[5], 0, i630, 'm_SelectOnDown')
  request.r(i631[6], i631[7], 0, i630, 'm_SelectOnLeft')
  request.r(i631[8], i631[9], 0, i630, 'm_SelectOnRight')
  return i630
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i633 = data
  i632.m_NormalColor = new pc.Color(i633[0], i633[1], i633[2], i633[3])
  i632.m_HighlightedColor = new pc.Color(i633[4], i633[5], i633[6], i633[7])
  i632.m_PressedColor = new pc.Color(i633[8], i633[9], i633[10], i633[11])
  i632.m_SelectedColor = new pc.Color(i633[12], i633[13], i633[14], i633[15])
  i632.m_DisabledColor = new pc.Color(i633[16], i633[17], i633[18], i633[19])
  i632.m_ColorMultiplier = i633[20]
  i632.m_FadeDuration = i633[21]
  return i632
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'm_HighlightedSprite')
  request.r(i635[2], i635[3], 0, i634, 'm_PressedSprite')
  request.r(i635[4], i635[5], 0, i634, 'm_SelectedSprite')
  request.r(i635[6], i635[7], 0, i634, 'm_DisabledSprite')
  return i634
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i637 = data
  i636.m_NormalTrigger = i637[0]
  i636.m_HighlightedTrigger = i637[1]
  i636.m_PressedTrigger = i637[2]
  i636.m_SelectedTrigger = i637[3]
  i636.m_DisabledTrigger = i637[4]
  return i636
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i638 = root || request.c( 'LunaManager' )
  var i639 = data
  var i641 = i639[0]
  var i640 = []
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 2, i640, '')
  }
  i638.lstBtnInstall = i640
  request.r(i639[1], i639[2], 0, i638, 'StartCard')
  request.r(i639[3], i639[4], 0, i638, 'EndCard')
  request.r(i639[5], i639[6], 0, i638, 'Parent')
  request.r(i639[7], i639[8], 0, i638, 'LoseTitle')
  var i643 = i639[9]
  var i642 = []
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 2, i642, '')
  }
  i638.tutorial = i642
  i638.timeDrag = i639[10]
  i638.isDrag = !!i639[11]
  i638.countPlay = i639[12]
  i638.countPlayFinal = i639[13]
  i638.countPlayMax = i639[14]
  i638.timeDropFinal = i639[15]
  i638.colorBG = new pc.Color(i639[16], i639[17], i639[18], i639[19])
  request.r(i639[20], i639[21], 0, i638, 'texture2D')
  request.r(i639[22], i639[23], 0, i638, 'rawImageBG')
  request.r(i639[24], i639[25], 0, i638, 'textProgess')
  request.r(i639[26], i639[27], 0, i638, 'imgProgess')
  request.r(i639[28], i639[29], 0, i638, 'timeText')
  return i638
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i646 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i647 = data
  i646.targetIsSelf = !!i647[0]
  request.r(i647[1], i647[2], 0, i646, 'targetGO')
  i646.tweenTargetIsTargetGO = !!i647[3]
  i646.delay = i647[4]
  i646.duration = i647[5]
  i646.easeType = i647[6]
  i646.easeCurve = new pc.AnimationCurve( { keys_flow: i647[7] } )
  i646.loopType = i647[8]
  i646.loops = i647[9]
  i646.id = i647[10]
  i646.isRelative = !!i647[11]
  i646.isFrom = !!i647[12]
  i646.isIndependentUpdate = !!i647[13]
  i646.autoKill = !!i647[14]
  i646.autoGenerate = !!i647[15]
  i646.isActive = !!i647[16]
  i646.isValid = !!i647[17]
  request.r(i647[18], i647[19], 0, i646, 'target')
  i646.animationType = i647[20]
  i646.targetType = i647[21]
  i646.forcedTargetType = i647[22]
  i646.autoPlay = !!i647[23]
  i646.useTargetAsV3 = !!i647[24]
  i646.endValueFloat = i647[25]
  i646.endValueV3 = new pc.Vec3( i647[26], i647[27], i647[28] )
  i646.endValueV2 = new pc.Vec2( i647[29], i647[30] )
  i646.endValueColor = new pc.Color(i647[31], i647[32], i647[33], i647[34])
  i646.endValueString = i647[35]
  i646.endValueRect = UnityEngine.Rect.MinMaxRect(i647[36], i647[37], i647[38], i647[39])
  request.r(i647[40], i647[41], 0, i646, 'endValueTransform')
  i646.optionalBool0 = !!i647[42]
  i646.optionalBool1 = !!i647[43]
  i646.optionalFloat0 = i647[44]
  i646.optionalInt0 = i647[45]
  i646.optionalRotationMode = i647[46]
  i646.optionalScrambleMode = i647[47]
  i646.optionalShakeRandomnessMode = i647[48]
  i646.optionalString = i647[49]
  i646.updateType = i647[50]
  i646.isSpeedBased = !!i647[51]
  i646.hasOnStart = !!i647[52]
  i646.hasOnPlay = !!i647[53]
  i646.hasOnUpdate = !!i647[54]
  i646.hasOnStepComplete = !!i647[55]
  i646.hasOnComplete = !!i647[56]
  i646.hasOnTweenCreated = !!i647[57]
  i646.hasOnRewind = !!i647[58]
  i646.onStart = request.d('UnityEngine.Events.UnityEvent', i647[59], i646.onStart)
  i646.onPlay = request.d('UnityEngine.Events.UnityEvent', i647[60], i646.onPlay)
  i646.onUpdate = request.d('UnityEngine.Events.UnityEvent', i647[61], i646.onUpdate)
  i646.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i647[62], i646.onStepComplete)
  i646.onComplete = request.d('UnityEngine.Events.UnityEvent', i647[63], i646.onComplete)
  i646.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i647[64], i646.onTweenCreated)
  i646.onRewind = request.d('UnityEngine.Events.UnityEvent', i647[65], i646.onRewind)
  return i646
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i649 = data
  i648.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i649[0], i648.m_PersistentCalls)
  return i648
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.Mask' )
  var i651 = data
  i650.m_ShowMaskGraphic = !!i651[0]
  return i650
}

Deserializers["AudioController"] = function (request, data, root) {
  var i652 = root || request.c( 'AudioController' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'bgmSource')
  request.r(i653[2], i653[3], 0, i652, 'sfxSource')
  var i655 = i653[4]
  var i654 = new (System.Collections.Generic.List$1(Bridge.ns('AudioEntry')))
  for(var i = 0; i < i655.length; i += 1) {
    i654.add(request.d('AudioEntry', i655[i + 0]));
  }
  i652.audioEntries = i654
  return i652
}

Deserializers["AudioEntry"] = function (request, data, root) {
  var i658 = root || request.c( 'AudioEntry' )
  var i659 = data
  i658.key = i659[0]
  request.r(i659[1], i659[2], 0, i658, 'clip')
  i658.volume = i659[3]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i661 = data
  i660.ambientIntensity = i661[0]
  i660.reflectionIntensity = i661[1]
  i660.ambientMode = i661[2]
  i660.ambientLight = new pc.Color(i661[3], i661[4], i661[5], i661[6])
  i660.ambientSkyColor = new pc.Color(i661[7], i661[8], i661[9], i661[10])
  i660.ambientGroundColor = new pc.Color(i661[11], i661[12], i661[13], i661[14])
  i660.ambientEquatorColor = new pc.Color(i661[15], i661[16], i661[17], i661[18])
  i660.fogColor = new pc.Color(i661[19], i661[20], i661[21], i661[22])
  i660.fogEndDistance = i661[23]
  i660.fogStartDistance = i661[24]
  i660.fogDensity = i661[25]
  i660.fog = !!i661[26]
  request.r(i661[27], i661[28], 0, i660, 'skybox')
  i660.fogMode = i661[29]
  var i663 = i661[30]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i663[i + 0]) );
  }
  i660.lightmaps = i662
  i660.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i661[31], i660.lightProbes)
  i660.lightmapsMode = i661[32]
  i660.mixedBakeMode = i661[33]
  i660.environmentLightingMode = i661[34]
  i660.ambientProbe = new pc.SphericalHarmonicsL2(i661[35])
  i660.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i661[36])
  i660.useReferenceAmbientProbe = !!i661[37]
  request.r(i661[38], i661[39], 0, i660, 'customReflection')
  request.r(i661[40], i661[41], 0, i660, 'defaultReflection')
  i660.defaultReflectionMode = i661[42]
  i660.defaultReflectionResolution = i661[43]
  i660.sunLightObjectId = i661[44]
  i660.pixelLightCount = i661[45]
  i660.defaultReflectionHDR = !!i661[46]
  i660.hasLightDataAsset = !!i661[47]
  i660.hasManualGenerate = !!i661[48]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'lightmapColor')
  request.r(i667[2], i667[3], 0, i666, 'lightmapDirection')
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i668 = root || new UnityEngine.LightProbes()
  var i669 = data
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i677 = data
  var i679 = i677[0]
  var i678 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i679.length; i += 1) {
    i678.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i679[i + 0]));
  }
  i676.ShaderCompilationErrors = i678
  i676.name = i677[1]
  i676.guid = i677[2]
  var i681 = i677[3]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( i681[i + 0] );
  }
  i676.shaderDefinedKeywords = i680
  var i683 = i677[4]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i683[i + 0]) );
  }
  i676.passes = i682
  var i685 = i677[5]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i685[i + 0]) );
  }
  i676.usePasses = i684
  var i687 = i677[6]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i687[i + 0]) );
  }
  i676.defaultParameterValues = i686
  request.r(i677[7], i677[8], 0, i676, 'unityFallbackShader')
  i676.readDepth = !!i677[9]
  i676.isCreatedByShaderGraph = !!i677[10]
  i676.disableBatching = !!i677[11]
  i676.compiled = !!i677[12]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i691 = data
  i690.shaderName = i691[0]
  i690.errorMessage = i691[1]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i694 = root || new pc.UnityShaderPass()
  var i695 = data
  i694.id = i695[0]
  i694.subShaderIndex = i695[1]
  i694.name = i695[2]
  i694.passType = i695[3]
  i694.grabPassTextureName = i695[4]
  i694.usePass = !!i695[5]
  i694.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[6], i694.zTest)
  i694.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[7], i694.zWrite)
  i694.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[8], i694.culling)
  i694.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i695[9], i694.blending)
  i694.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i695[10], i694.alphaBlending)
  i694.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[11], i694.colorWriteMask)
  i694.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[12], i694.offsetUnits)
  i694.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[13], i694.offsetFactor)
  i694.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[14], i694.stencilRef)
  i694.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[15], i694.stencilReadMask)
  i694.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[16], i694.stencilWriteMask)
  i694.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i695[17], i694.stencilOp)
  i694.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i695[18], i694.stencilOpFront)
  i694.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i695[19], i694.stencilOpBack)
  var i697 = i695[20]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i697[i + 0]) );
  }
  i694.tags = i696
  var i699 = i695[21]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( i699[i + 0] );
  }
  i694.passDefinedKeywords = i698
  var i701 = i695[22]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i701[i + 0]) );
  }
  i694.passDefinedKeywordGroups = i700
  var i703 = i695[23]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i703[i + 0]) );
  }
  i694.variants = i702
  var i705 = i695[24]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i705[i + 0]) );
  }
  i694.excludedVariants = i704
  i694.hasDepthReader = !!i695[25]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i707 = data
  i706.val = i707[0]
  i706.name = i707[1]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i709 = data
  i708.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[0], i708.src)
  i708.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[1], i708.dst)
  i708.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[2], i708.op)
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i711 = data
  i710.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[0], i710.pass)
  i710.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[1], i710.fail)
  i710.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[2], i710.zFail)
  i710.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[3], i710.comp)
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i715 = data
  i714.name = i715[0]
  i714.value = i715[1]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i719 = data
  var i721 = i719[0]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( i721[i + 0] );
  }
  i718.keywords = i720
  i718.hasDiscard = !!i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i725 = data
  i724.passId = i725[0]
  i724.subShaderIndex = i725[1]
  var i727 = i725[2]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( i727[i + 0] );
  }
  i724.keywords = i726
  i724.vertexProgram = i725[3]
  i724.fragmentProgram = i725[4]
  i724.exportedForWebGl2 = !!i725[5]
  i724.readDepth = !!i725[6]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'shader')
  i730.pass = i731[2]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i735 = data
  i734.name = i735[0]
  i734.type = i735[1]
  i734.value = new pc.Vec4( i735[2], i735[3], i735[4], i735[5] )
  i734.textureValue = i735[6]
  i734.shaderPropertyFlag = i735[7]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i737 = data
  i736.name = i737[0]
  request.r(i737[1], i737[2], 0, i736, 'texture')
  i736.aabb = i737[3]
  i736.vertices = i737[4]
  i736.triangles = i737[5]
  i736.textureRect = UnityEngine.Rect.MinMaxRect(i737[6], i737[7], i737[8], i737[9])
  i736.packedRect = UnityEngine.Rect.MinMaxRect(i737[10], i737[11], i737[12], i737[13])
  i736.border = new pc.Vec4( i737[14], i737[15], i737[16], i737[17] )
  i736.transparency = i737[18]
  i736.bounds = i737[19]
  i736.pixelsPerUnit = i737[20]
  i736.textureWidth = i737[21]
  i736.textureHeight = i737[22]
  i736.nativeSize = new pc.Vec2( i737[23], i737[24] )
  i736.pivot = new pc.Vec2( i737[25], i737[26] )
  i736.textureRectOffset = new pc.Vec2( i737[27], i737[28] )
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i739 = data
  i738.name = i739[0]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i741 = data
  i740.name = i741[0]
  i740.ascent = i741[1]
  i740.originalLineHeight = i741[2]
  i740.fontSize = i741[3]
  var i743 = i741[4]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i743[i + 0]) );
  }
  i740.characterInfo = i742
  request.r(i741[5], i741[6], 0, i740, 'texture')
  i740.originalFontSize = i741[7]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i747 = data
  i746.index = i747[0]
  i746.advance = i747[1]
  i746.bearing = i747[2]
  i746.glyphWidth = i747[3]
  i746.glyphHeight = i747[4]
  i746.minX = i747[5]
  i746.maxX = i747[6]
  i746.minY = i747[7]
  i746.maxY = i747[8]
  i746.uvBottomLeftX = i747[9]
  i746.uvBottomLeftY = i747[10]
  i746.uvBottomRightX = i747[11]
  i746.uvBottomRightY = i747[12]
  i746.uvTopLeftX = i747[13]
  i746.uvTopLeftY = i747[14]
  i746.uvTopRightX = i747[15]
  i746.uvTopRightY = i747[16]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i749 = data
  i748.name = i749[0]
  i748.bytes64 = i749[1]
  i748.data = i749[2]
  return i748
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i750 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i751 = data
  var i753 = i751[0]
  var i752 = []
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 2, i752, '')
  }
  i750.atlasAssets = i752
  i750.scale = i751[1]
  request.r(i751[2], i751[3], 0, i750, 'skeletonJSON')
  i750.isUpgradingBlendModeMaterials = !!i751[4]
  i750.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i751[5], i750.blendModeMaterials)
  var i755 = i751[6]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 1, i754, '')
  }
  i750.skeletonDataModifiers = i754
  var i757 = i751[7]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( i757[i + 0] );
  }
  i750.fromAnimation = i756
  var i759 = i751[8]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( i759[i + 0] );
  }
  i750.toAnimation = i758
  i750.duration = i751[9]
  i750.defaultMix = i751[10]
  request.r(i751[11], i751[12], 0, i750, 'controller')
  return i750
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i762 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i763 = data
  i762.applyAdditiveMaterial = !!i763[0]
  var i765 = i763[1]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i765.length; i += 1) {
    i764.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i765[i + 0]));
  }
  i762.additiveMaterials = i764
  var i767 = i763[2]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i767.length; i += 1) {
    i766.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i767[i + 0]));
  }
  i762.multiplyMaterials = i766
  var i769 = i763[3]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i769[i + 0]));
  }
  i762.screenMaterials = i768
  i762.requiresBlendModeMaterials = !!i763[4]
  return i762
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i772 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i773 = data
  i772.pageName = i773[0]
  request.r(i773[1], i773[2], 0, i772, 'material')
  return i772
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i776 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'atlasFile')
  var i779 = i777[2]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i776.materials = i778
  i776.textureLoadingMode = i777[3]
  request.r(i777[4], i777[5], 0, i776, 'onDemandTextureLoader')
  return i776
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i780 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'atlas')
  i780.normalStyle = i781[2]
  i780.normalSpacingOffset = i781[3]
  i780.boldStyle = i781[4]
  i780.boldSpacing = i781[5]
  i780.italicStyle = i781[6]
  i780.tabSize = i781[7]
  i780.hashCode = i781[8]
  request.r(i781[9], i781[10], 0, i780, 'material')
  i780.materialHashCode = i781[11]
  i780.m_Version = i781[12]
  i780.m_SourceFontFileGUID = i781[13]
  request.r(i781[14], i781[15], 0, i780, 'm_SourceFontFile_EditorRef')
  request.r(i781[16], i781[17], 0, i780, 'm_SourceFontFile')
  i780.m_AtlasPopulationMode = i781[18]
  i780.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i781[19], i780.m_FaceInfo)
  var i783 = i781[20]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('UnityEngine.TextCore.Glyph', i783[i + 0]));
  }
  i780.m_GlyphTable = i782
  var i785 = i781[21]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i785.length; i += 1) {
    i784.add(request.d('TMPro.TMP_Character', i785[i + 0]));
  }
  i780.m_CharacterTable = i784
  var i787 = i781[22]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i780.m_AtlasTextures = i786
  i780.m_AtlasTextureIndex = i781[23]
  i780.m_IsMultiAtlasTexturesEnabled = !!i781[24]
  i780.m_ClearDynamicDataOnBuild = !!i781[25]
  var i789 = i781[26]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i789.length; i += 1) {
    i788.add(request.d('UnityEngine.TextCore.GlyphRect', i789[i + 0]));
  }
  i780.m_UsedGlyphRects = i788
  var i791 = i781[27]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('UnityEngine.TextCore.GlyphRect', i791[i + 0]));
  }
  i780.m_FreeGlyphRects = i790
  i780.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i781[28], i780.m_fontInfo)
  i780.m_AtlasWidth = i781[29]
  i780.m_AtlasHeight = i781[30]
  i780.m_AtlasPadding = i781[31]
  i780.m_AtlasRenderMode = i781[32]
  var i793 = i781[33]
  var i792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i793.length; i += 1) {
    i792.add(request.d('TMPro.TMP_Glyph', i793[i + 0]));
  }
  i780.m_glyphInfoList = i792
  i780.m_KerningTable = request.d('TMPro.KerningTable', i781[34], i780.m_KerningTable)
  i780.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i781[35], i780.m_FontFeatureTable)
  var i795 = i781[36]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 1, i794, '')
  }
  i780.fallbackFontAssets = i794
  var i797 = i781[37]
  var i796 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 1, i796, '')
  }
  i780.m_FallbackFontAssetTable = i796
  i780.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i781[38], i780.m_CreationSettings)
  var i799 = i781[39]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('TMPro.TMP_FontWeightPair', i799[i + 0]) );
  }
  i780.m_FontWeightTable = i798
  var i801 = i781[40]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('TMPro.TMP_FontWeightPair', i801[i + 0]) );
  }
  i780.fontWeights = i800
  return i780
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i803 = data
  i802.m_FaceIndex = i803[0]
  i802.m_FamilyName = i803[1]
  i802.m_StyleName = i803[2]
  i802.m_PointSize = i803[3]
  i802.m_Scale = i803[4]
  i802.m_UnitsPerEM = i803[5]
  i802.m_LineHeight = i803[6]
  i802.m_AscentLine = i803[7]
  i802.m_CapLine = i803[8]
  i802.m_MeanLine = i803[9]
  i802.m_Baseline = i803[10]
  i802.m_DescentLine = i803[11]
  i802.m_SuperscriptOffset = i803[12]
  i802.m_SuperscriptSize = i803[13]
  i802.m_SubscriptOffset = i803[14]
  i802.m_SubscriptSize = i803[15]
  i802.m_UnderlineOffset = i803[16]
  i802.m_UnderlineThickness = i803[17]
  i802.m_StrikethroughOffset = i803[18]
  i802.m_StrikethroughThickness = i803[19]
  i802.m_TabWidth = i803[20]
  return i802
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i807 = data
  i806.m_Index = i807[0]
  i806.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i807[1], i806.m_Metrics)
  i806.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i807[2], i806.m_GlyphRect)
  i806.m_Scale = i807[3]
  i806.m_AtlasIndex = i807[4]
  i806.m_ClassDefinitionType = i807[5]
  return i806
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i809 = data
  i808.m_Width = i809[0]
  i808.m_Height = i809[1]
  i808.m_HorizontalBearingX = i809[2]
  i808.m_HorizontalBearingY = i809[3]
  i808.m_HorizontalAdvance = i809[4]
  return i808
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i811 = data
  i810.m_X = i811[0]
  i810.m_Y = i811[1]
  i810.m_Width = i811[2]
  i810.m_Height = i811[3]
  return i810
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i814 = root || request.c( 'TMPro.TMP_Character' )
  var i815 = data
  i814.m_ElementType = i815[0]
  i814.m_Unicode = i815[1]
  i814.m_GlyphIndex = i815[2]
  i814.m_Scale = i815[3]
  return i814
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i820 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i821 = data
  i820.Name = i821[0]
  i820.PointSize = i821[1]
  i820.Scale = i821[2]
  i820.CharacterCount = i821[3]
  i820.LineHeight = i821[4]
  i820.Baseline = i821[5]
  i820.Ascender = i821[6]
  i820.CapHeight = i821[7]
  i820.Descender = i821[8]
  i820.CenterLine = i821[9]
  i820.SuperscriptOffset = i821[10]
  i820.SubscriptOffset = i821[11]
  i820.SubSize = i821[12]
  i820.Underline = i821[13]
  i820.UnderlineThickness = i821[14]
  i820.strikethrough = i821[15]
  i820.strikethroughThickness = i821[16]
  i820.TabWidth = i821[17]
  i820.Padding = i821[18]
  i820.AtlasWidth = i821[19]
  i820.AtlasHeight = i821[20]
  return i820
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.TMP_Glyph' )
  var i825 = data
  i824.id = i825[0]
  i824.x = i825[1]
  i824.y = i825[2]
  i824.width = i825[3]
  i824.height = i825[4]
  i824.xOffset = i825[5]
  i824.yOffset = i825[6]
  i824.xAdvance = i825[7]
  i824.scale = i825[8]
  return i824
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i826 = root || request.c( 'TMPro.KerningTable' )
  var i827 = data
  var i829 = i827[0]
  var i828 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i829.length; i += 1) {
    i828.add(request.d('TMPro.KerningPair', i829[i + 0]));
  }
  i826.kerningPairs = i828
  return i826
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.KerningPair' )
  var i833 = data
  i832.xOffset = i833[0]
  i832.m_FirstGlyph = i833[1]
  i832.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i833[2], i832.m_FirstGlyphAdjustments)
  i832.m_SecondGlyph = i833[3]
  i832.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i833[4], i832.m_SecondGlyphAdjustments)
  i832.m_IgnoreSpacingAdjustments = !!i833[5]
  return i832
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i834 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i835 = data
  var i837 = i835[0]
  var i836 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i837.length; i += 1) {
    i836.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i837[i + 0]));
  }
  i834.m_GlyphPairAdjustmentRecords = i836
  return i834
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i840 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i841 = data
  i840.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i841[0], i840.m_FirstAdjustmentRecord)
  i840.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i841[1], i840.m_SecondAdjustmentRecord)
  i840.m_FeatureLookupFlags = i841[2]
  return i840
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i844 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i845 = data
  i844.sourceFontFileName = i845[0]
  i844.sourceFontFileGUID = i845[1]
  i844.pointSizeSamplingMode = i845[2]
  i844.pointSize = i845[3]
  i844.padding = i845[4]
  i844.packingMode = i845[5]
  i844.atlasWidth = i845[6]
  i844.atlasHeight = i845[7]
  i844.characterSetSelectionMode = i845[8]
  i844.characterSequence = i845[9]
  i844.referencedFontAssetGUID = i845[10]
  i844.referencedTextAssetGUID = i845[11]
  i844.fontStyle = i845[12]
  i844.fontStyleModifier = i845[13]
  i844.renderMode = i845[14]
  i844.includeFontFeatures = !!i845[15]
  return i844
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i848 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'regularTypeface')
  request.r(i849[2], i849[3], 0, i848, 'italicTypeface')
  return i848
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i850 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i851 = data
  i850.useSafeMode = !!i851[0]
  i850.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i851[1], i850.safeModeOptions)
  i850.timeScale = i851[2]
  i850.unscaledTimeScale = i851[3]
  i850.useSmoothDeltaTime = !!i851[4]
  i850.maxSmoothUnscaledTime = i851[5]
  i850.rewindCallbackMode = i851[6]
  i850.showUnityEditorReport = !!i851[7]
  i850.logBehaviour = i851[8]
  i850.drawGizmos = !!i851[9]
  i850.defaultRecyclable = !!i851[10]
  i850.defaultAutoPlay = i851[11]
  i850.defaultUpdateType = i851[12]
  i850.defaultTimeScaleIndependent = !!i851[13]
  i850.defaultEaseType = i851[14]
  i850.defaultEaseOvershootOrAmplitude = i851[15]
  i850.defaultEasePeriod = i851[16]
  i850.defaultAutoKill = !!i851[17]
  i850.defaultLoopType = i851[18]
  i850.debugMode = !!i851[19]
  i850.debugStoreTargetId = !!i851[20]
  i850.showPreviewPanel = !!i851[21]
  i850.storeSettingsLocation = i851[22]
  i850.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i851[23], i850.modules)
  i850.createASMDEF = !!i851[24]
  i850.showPlayingTweens = !!i851[25]
  i850.showPausedTweens = !!i851[26]
  return i850
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i852 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i853 = data
  i852.logBehaviour = i853[0]
  i852.nestedTweenFailureBehaviour = i853[1]
  return i852
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i854 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i855 = data
  i854.showPanel = !!i855[0]
  i854.audioEnabled = !!i855[1]
  i854.physicsEnabled = !!i855[2]
  i854.physics2DEnabled = !!i855[3]
  i854.spriteEnabled = !!i855[4]
  i854.uiEnabled = !!i855[5]
  i854.textMeshProEnabled = !!i855[6]
  i854.tk2DEnabled = !!i855[7]
  i854.deAudioEnabled = !!i855[8]
  i854.deUnityExtendedEnabled = !!i855[9]
  i854.epoOutlineEnabled = !!i855[10]
  return i854
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i856 = root || request.c( 'TMPro.TMP_Settings' )
  var i857 = data
  i856.m_enableWordWrapping = !!i857[0]
  i856.m_enableKerning = !!i857[1]
  i856.m_enableExtraPadding = !!i857[2]
  i856.m_enableTintAllSprites = !!i857[3]
  i856.m_enableParseEscapeCharacters = !!i857[4]
  i856.m_EnableRaycastTarget = !!i857[5]
  i856.m_GetFontFeaturesAtRuntime = !!i857[6]
  i856.m_missingGlyphCharacter = i857[7]
  i856.m_warningsDisabled = !!i857[8]
  request.r(i857[9], i857[10], 0, i856, 'm_defaultFontAsset')
  i856.m_defaultFontAssetPath = i857[11]
  i856.m_defaultFontSize = i857[12]
  i856.m_defaultAutoSizeMinRatio = i857[13]
  i856.m_defaultAutoSizeMaxRatio = i857[14]
  i856.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i857[15], i857[16] )
  i856.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i857[17], i857[18] )
  i856.m_autoSizeTextContainer = !!i857[19]
  i856.m_IsTextObjectScaleStatic = !!i857[20]
  var i859 = i857[21]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 1, i858, '')
  }
  i856.m_fallbackFontAssets = i858
  i856.m_matchMaterialPreset = !!i857[22]
  request.r(i857[23], i857[24], 0, i856, 'm_defaultSpriteAsset')
  i856.m_defaultSpriteAssetPath = i857[25]
  i856.m_enableEmojiSupport = !!i857[26]
  i856.m_MissingCharacterSpriteUnicode = i857[27]
  i856.m_defaultColorGradientPresetsPath = i857[28]
  request.r(i857[29], i857[30], 0, i856, 'm_defaultStyleSheet')
  i856.m_StyleSheetsResourcePath = i857[31]
  request.r(i857[32], i857[33], 0, i856, 'm_leadingCharacters')
  request.r(i857[34], i857[35], 0, i856, 'm_followingCharacters')
  i856.m_UseModernHangulLineBreakingRules = !!i857[36]
  return i856
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i860 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'spriteSheet')
  var i863 = i861[2]
  var i862 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i863.length; i += 1) {
    i862.add(request.d('TMPro.TMP_Sprite', i863[i + 0]));
  }
  i860.spriteInfoList = i862
  var i865 = i861[3]
  var i864 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 1, i864, '')
  }
  i860.fallbackSpriteAssets = i864
  i860.hashCode = i861[4]
  request.r(i861[5], i861[6], 0, i860, 'material')
  i860.materialHashCode = i861[7]
  i860.m_Version = i861[8]
  i860.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i861[9], i860.m_FaceInfo)
  var i867 = i861[10]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i867.length; i += 1) {
    i866.add(request.d('TMPro.TMP_SpriteCharacter', i867[i + 0]));
  }
  i860.m_SpriteCharacterTable = i866
  var i869 = i861[11]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i869.length; i += 1) {
    i868.add(request.d('TMPro.TMP_SpriteGlyph', i869[i + 0]));
  }
  i860.m_SpriteGlyphTable = i868
  return i860
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i872 = root || request.c( 'TMPro.TMP_Sprite' )
  var i873 = data
  i872.name = i873[0]
  i872.hashCode = i873[1]
  i872.unicode = i873[2]
  i872.pivot = new pc.Vec2( i873[3], i873[4] )
  request.r(i873[5], i873[6], 0, i872, 'sprite')
  i872.id = i873[7]
  i872.x = i873[8]
  i872.y = i873[9]
  i872.width = i873[10]
  i872.height = i873[11]
  i872.xOffset = i873[12]
  i872.yOffset = i873[13]
  i872.xAdvance = i873[14]
  i872.scale = i873[15]
  return i872
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i879 = data
  i878.m_Name = i879[0]
  i878.m_HashCode = i879[1]
  i878.m_ElementType = i879[2]
  i878.m_Unicode = i879[3]
  i878.m_GlyphIndex = i879[4]
  i878.m_Scale = i879[5]
  return i878
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i882 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'sprite')
  i882.m_Index = i883[2]
  i882.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i883[3], i882.m_Metrics)
  i882.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i883[4], i882.m_GlyphRect)
  i882.m_Scale = i883[5]
  i882.m_AtlasIndex = i883[6]
  i882.m_ClassDefinitionType = i883[7]
  return i882
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i885 = data
  var i887 = i885[0]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i887.length; i += 1) {
    i886.add(request.d('TMPro.TMP_Style', i887[i + 0]));
  }
  i884.m_StyleList = i886
  return i884
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i890 = root || request.c( 'TMPro.TMP_Style' )
  var i891 = data
  i890.m_Name = i891[0]
  i890.m_HashCode = i891[1]
  i890.m_OpeningDefinition = i891[2]
  i890.m_ClosingDefinition = i891[3]
  i890.m_OpeningTagArray = i891[4]
  i890.m_ClosingTagArray = i891[5]
  i890.m_OpeningTagUnicodeArray = i891[6]
  i890.m_ClosingTagUnicodeArray = i891[7]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i893 = data
  var i895 = i893[0]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i895[i + 0]) );
  }
  i892.files = i894
  i892.componentToPrefabIds = i893[1]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i899 = data
  i898.path = i899[0]
  request.r(i899[1], i899[2], 0, i898, 'unityObject')
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i901 = data
  var i903 = i901[0]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i903[i + 0]) );
  }
  i900.scriptsExecutionOrder = i902
  var i905 = i901[1]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i905[i + 0]) );
  }
  i900.sortingLayers = i904
  var i907 = i901[2]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i907[i + 0]) );
  }
  i900.cullingLayers = i906
  i900.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i901[3], i900.timeSettings)
  i900.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i901[4], i900.physicsSettings)
  i900.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i901[5], i900.physics2DSettings)
  i900.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i901[6], i900.qualitySettings)
  i900.enableRealtimeShadows = !!i901[7]
  i900.enableAutoInstancing = !!i901[8]
  i900.enableStaticBatching = !!i901[9]
  i900.enableDynamicBatching = !!i901[10]
  i900.lightmapEncodingQuality = i901[11]
  i900.desiredColorSpace = i901[12]
  var i909 = i901[13]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( i909[i + 0] );
  }
  i900.allTags = i908
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i913 = data
  i912.name = i913[0]
  i912.value = i913[1]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i917 = data
  i916.id = i917[0]
  i916.name = i917[1]
  i916.value = i917[2]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i921 = data
  i920.id = i921[0]
  i920.name = i921[1]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i923 = data
  i922.fixedDeltaTime = i923[0]
  i922.maximumDeltaTime = i923[1]
  i922.timeScale = i923[2]
  i922.maximumParticleTimestep = i923[3]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i925 = data
  i924.gravity = new pc.Vec3( i925[0], i925[1], i925[2] )
  i924.defaultSolverIterations = i925[3]
  i924.bounceThreshold = i925[4]
  i924.autoSyncTransforms = !!i925[5]
  i924.autoSimulation = !!i925[6]
  var i927 = i925[7]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i927[i + 0]) );
  }
  i924.collisionMatrix = i926
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i931 = data
  i930.enabled = !!i931[0]
  i930.layerId = i931[1]
  i930.otherLayerId = i931[2]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'material')
  i932.gravity = new pc.Vec2( i933[2], i933[3] )
  i932.positionIterations = i933[4]
  i932.velocityIterations = i933[5]
  i932.velocityThreshold = i933[6]
  i932.maxLinearCorrection = i933[7]
  i932.maxAngularCorrection = i933[8]
  i932.maxTranslationSpeed = i933[9]
  i932.maxRotationSpeed = i933[10]
  i932.baumgarteScale = i933[11]
  i932.baumgarteTOIScale = i933[12]
  i932.timeToSleep = i933[13]
  i932.linearSleepTolerance = i933[14]
  i932.angularSleepTolerance = i933[15]
  i932.defaultContactOffset = i933[16]
  i932.autoSimulation = !!i933[17]
  i932.queriesHitTriggers = !!i933[18]
  i932.queriesStartInColliders = !!i933[19]
  i932.callbacksOnDisable = !!i933[20]
  i932.reuseCollisionCallbacks = !!i933[21]
  i932.autoSyncTransforms = !!i933[22]
  var i935 = i933[23]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i935[i + 0]) );
  }
  i932.collisionMatrix = i934
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i939 = data
  i938.enabled = !!i939[0]
  i938.layerId = i939[1]
  i938.otherLayerId = i939[2]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i941 = data
  var i943 = i941[0]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i943[i + 0]) );
  }
  i940.qualityLevels = i942
  var i945 = i941[1]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( i945[i + 0] );
  }
  i940.names = i944
  i940.shadows = i941[2]
  i940.anisotropicFiltering = i941[3]
  i940.antiAliasing = i941[4]
  i940.lodBias = i941[5]
  i940.shadowCascades = i941[6]
  i940.shadowDistance = i941[7]
  i940.shadowmaskMode = i941[8]
  i940.shadowProjection = i941[9]
  i940.shadowResolution = i941[10]
  i940.softParticles = !!i941[11]
  i940.softVegetation = !!i941[12]
  i940.activeColorSpace = i941[13]
  i940.desiredColorSpace = i941[14]
  i940.masterTextureLimit = i941[15]
  i940.maxQueuedFrames = i941[16]
  i940.particleRaycastBudget = i941[17]
  i940.pixelLightCount = i941[18]
  i940.realtimeReflectionProbes = !!i941[19]
  i940.shadowCascade2Split = i941[20]
  i940.shadowCascade4Split = new pc.Vec3( i941[21], i941[22], i941[23] )
  i940.streamingMipmapsActive = !!i941[24]
  i940.vSyncCount = i941[25]
  i940.asyncUploadBufferSize = i941[26]
  i940.asyncUploadTimeSlice = i941[27]
  i940.billboardsFaceCameraPosition = !!i941[28]
  i940.shadowNearPlaneOffset = i941[29]
  i940.streamingMipmapsMemoryBudget = i941[30]
  i940.maximumLODLevel = i941[31]
  i940.streamingMipmapsAddAllCameras = !!i941[32]
  i940.streamingMipmapsMaxLevelReduction = i941[33]
  i940.streamingMipmapsRenderersPerFrame = i941[34]
  i940.resolutionScalingFixedDPIFactor = i941[35]
  i940.streamingMipmapsMaxFileIORequests = i941[36]
  i940.currentQualityLevel = i941[37]
  return i940
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'm_ObjectArgument')
  i948.m_ObjectArgumentAssemblyTypeName = i949[2]
  i948.m_IntArgument = i949[3]
  i948.m_FloatArgument = i949[4]
  i948.m_StringArgument = i949[5]
  i948.m_BoolArgument = !!i949[6]
  return i948
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i951 = data
  i950.xPlacement = i951[0]
  i950.yPlacement = i951[1]
  i950.xAdvance = i951[2]
  i950.yAdvance = i951[3]
  return i950
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i953 = data
  i952.m_GlyphIndex = i953[0]
  i952.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i953[1], i952.m_GlyphValueRecord)
  return i952
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i955 = data
  i954.m_XPlacement = i955[0]
  i954.m_YPlacement = i955[1]
  i954.m_XAdvance = i955[2]
  i954.m_YAdvance = i955[3]
  return i954
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[18],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[18],"76":[77],"78":[79],"80":[79],"22":[2],"81":[82],"83":[84],"85":[82],"86":[2],"87":[2],"24":[22],"13":[3,2],"88":[2],"23":[22],"89":[2],"90":[2],"91":[2],"92":[2],"93":[2],"94":[2],"95":[2],"34":[2],"96":[2],"25":[3,2],"97":[2],"98":[2],"99":[2],"100":[2],"101":[3,2],"102":[2],"103":[20],"104":[20],"21":[20],"105":[20],"106":[18],"107":[18],"108":[109],"110":[18],"111":[112],"113":[2],"114":[3,2],"115":[77],"5":[3,2],"116":[117,77],"118":[77],"119":[77,120],"121":[54],"122":[62],"123":[112],"124":[125],"126":[2],"127":[77,2],"15":[2,3],"128":[2],"129":[3,2],"130":[77],"131":[3,2],"132":[2],"133":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.MonoBehaviour","Item","UnityEngine.GameObject","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.RawImage","DropSpawn","UnityEngine.PolygonCollider2D","DragSpawn","UnityEngine.CanvasGroup","ClickItem","UnityEngine.UI.Button","LunaManager","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","AudioController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "175.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BM_V04_ManhND_AnhPD";

Deserializers.lunaAppID = "34530";

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

Deserializers.buildID = "0f14bcaf-3165-4fe2-b1fe-dd6caf47edbe";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

