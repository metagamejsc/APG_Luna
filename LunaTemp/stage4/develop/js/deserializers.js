var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointSpring' )
  var i553 = data
  i552.spring = i553[0]
  i552.damper = i553[1]
  i552.targetPosition = i553[2]
  return i552
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointMotor' )
  var i555 = data
  i554.m_TargetVelocity = i555[0]
  i554.m_Force = i555[1]
  i554.m_FreeSpin = i555[2]
  return i554
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.JointLimits' )
  var i557 = data
  i556.m_Min = i557[0]
  i556.m_Max = i557[1]
  i556.m_Bounciness = i557[2]
  i556.m_BounceMinVelocity = i557[3]
  i556.m_ContactDistance = i557[4]
  i556.minBounce = i557[5]
  i556.maxBounce = i557[6]
  return i556
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.JointDrive' )
  var i559 = data
  i558.m_PositionSpring = i559[0]
  i558.m_PositionDamper = i559[1]
  i558.m_MaximumForce = i559[2]
  i558.m_UseAcceleration = i559[3]
  return i558
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i561 = data
  i560.m_Spring = i561[0]
  i560.m_Damper = i561[1]
  return i560
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i563 = data
  i562.m_Limit = i563[0]
  i562.m_Bounciness = i563[1]
  i562.m_ContactDistance = i563[2]
  return i562
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i565 = data
  i564.m_ExtremumSlip = i565[0]
  i564.m_ExtremumValue = i565[1]
  i564.m_AsymptoteSlip = i565[2]
  i564.m_AsymptoteValue = i565[3]
  i564.m_Stiffness = i565[4]
  return i564
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i567 = data
  i566.m_LowerAngle = i567[0]
  i566.m_UpperAngle = i567[1]
  return i566
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i569 = data
  i568.m_MotorSpeed = i569[0]
  i568.m_MaximumMotorTorque = i569[1]
  return i568
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i571 = data
  i570.m_DampingRatio = i571[0]
  i570.m_Frequency = i571[1]
  i570.m_Angle = i571[2]
  return i570
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i573 = data
  i572.m_LowerTranslation = i573[0]
  i572.m_UpperTranslation = i573[1]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i575 = data
  i574.name = i575[0]
  i574.width = i575[1]
  i574.height = i575[2]
  i574.mipmapCount = i575[3]
  i574.anisoLevel = i575[4]
  i574.filterMode = i575[5]
  i574.hdr = !!i575[6]
  i574.format = i575[7]
  i574.wrapMode = i575[8]
  i574.alphaIsTransparency = !!i575[9]
  i574.alphaSource = i575[10]
  i574.graphicsFormat = i575[11]
  i574.sRGBTexture = !!i575[12]
  i574.desiredColorSpace = i575[13]
  i574.wrapU = i575[14]
  i574.wrapV = i575[15]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i576 = root || new pc.UnityMaterial()
  var i577 = data
  i576.name = i577[0]
  request.r(i577[1], i577[2], 0, i576, 'shader')
  i576.renderQueue = i577[3]
  i576.enableInstancing = !!i577[4]
  var i579 = i577[5]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i579[i + 0]) );
  }
  i576.floatParameters = i578
  var i581 = i577[6]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i581[i + 0]) );
  }
  i576.colorParameters = i580
  var i583 = i577[7]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i583[i + 0]) );
  }
  i576.vectorParameters = i582
  var i585 = i577[8]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i585[i + 0]) );
  }
  i576.textureParameters = i584
  var i587 = i577[9]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i587[i + 0]) );
  }
  i576.materialFlags = i586
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i591 = data
  i590.name = i591[0]
  i590.value = i591[1]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i595 = data
  i594.name = i595[0]
  i594.value = new pc.Color(i595[1], i595[2], i595[3], i595[4])
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i599 = data
  i598.name = i599[0]
  i598.value = new pc.Vec4( i599[1], i599[2], i599[3], i599[4] )
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i603 = data
  i602.name = i603[0]
  request.r(i603[1], i603[2], 0, i602, 'value')
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i607 = data
  i606.name = i607[0]
  i606.enabled = !!i607[1]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i609 = data
  i608.name = i609[0]
  i608.index = i609[1]
  i608.startup = !!i609[2]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i611 = data
  i610.aspect = i611[0]
  i610.orthographic = !!i611[1]
  i610.orthographicSize = i611[2]
  i610.backgroundColor = new pc.Color(i611[3], i611[4], i611[5], i611[6])
  i610.nearClipPlane = i611[7]
  i610.farClipPlane = i611[8]
  i610.fieldOfView = i611[9]
  i610.depth = i611[10]
  i610.clearFlags = i611[11]
  i610.cullingMask = i611[12]
  i610.rect = i611[13]
  request.r(i611[14], i611[15], 0, i610, 'targetTexture')
  i610.usePhysicalProperties = !!i611[16]
  i610.focalLength = i611[17]
  i610.sensorSize = new pc.Vec2( i611[18], i611[19] )
  i610.lensShift = new pc.Vec2( i611[20], i611[21] )
  i610.gateFit = i611[22]
  i610.commandBufferCount = i611[23]
  i610.cameraType = i611[24]
  i610.enabled = !!i611[25]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i613 = data
  i612.name = i613[0]
  i612.tagId = i613[1]
  i612.enabled = !!i613[2]
  i612.isStatic = !!i613[3]
  i612.layer = i613[4]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i615 = data
  i614.pivot = new pc.Vec2( i615[0], i615[1] )
  i614.anchorMin = new pc.Vec2( i615[2], i615[3] )
  i614.anchorMax = new pc.Vec2( i615[4], i615[5] )
  i614.sizeDelta = new pc.Vec2( i615[6], i615[7] )
  i614.anchoredPosition3D = new pc.Vec3( i615[8], i615[9], i615[10] )
  i614.rotation = new pc.Quat(i615[11], i615[12], i615[13], i615[14])
  i614.scale = new pc.Vec3( i615[15], i615[16], i615[17] )
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i617 = data
  i616.planeDistance = i617[0]
  i616.referencePixelsPerUnit = i617[1]
  i616.isFallbackOverlay = !!i617[2]
  i616.renderMode = i617[3]
  i616.renderOrder = i617[4]
  i616.sortingLayerName = i617[5]
  i616.sortingOrder = i617[6]
  i616.scaleFactor = i617[7]
  request.r(i617[8], i617[9], 0, i616, 'worldCamera')
  i616.overrideSorting = !!i617[10]
  i616.pixelPerfect = !!i617[11]
  i616.targetDisplay = i617[12]
  i616.overridePixelPerfect = !!i617[13]
  i616.enabled = !!i617[14]
  return i616
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i619 = data
  i618.m_UiScaleMode = i619[0]
  i618.m_ReferencePixelsPerUnit = i619[1]
  i618.m_ScaleFactor = i619[2]
  i618.m_ReferenceResolution = new pc.Vec2( i619[3], i619[4] )
  i618.m_ScreenMatchMode = i619[5]
  i618.m_MatchWidthOrHeight = i619[6]
  i618.m_PhysicalUnit = i619[7]
  i618.m_FallbackScreenDPI = i619[8]
  i618.m_DefaultSpriteDPI = i619[9]
  i618.m_DynamicPixelsPerUnit = i619[10]
  i618.m_PresetInfoIsWorld = !!i619[11]
  return i618
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i621 = data
  i620.m_IgnoreReversedGraphics = !!i621[0]
  i620.m_BlockingObjects = i621[1]
  i620.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i621[2] )
  return i620
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i622 = root || request.c( 'Playable.GameManager' )
  var i623 = data
  i622.EventCountdownEndGame = request.d('System.Action', i623[0], i622.EventCountdownEndGame)
  i622._totalEvent = i623[1]
  i622._maxEvent = i623[2]
  i622._endTime = i623[3]
  request.r(i623[4], i623[5], 0, i622, '_backgroundMusic')
  request.r(i623[6], i623[7], 0, i622, '_backgroundTexture')
  request.r(i623[8], i623[9], 0, i622, '_btnBlock')
  request.r(i623[10], i623[11], 0, i622, '_background')
  request.r(i623[12], i623[13], 0, i622, '_progressFillImage')
  request.r(i623[14], i623[15], 0, i622, '_progressText')
  i622._progressTweenDuration = i623[16]
  request.r(i623[17], i623[18], 0, i622, '_timerFillImage')
  request.r(i623[19], i623[20], 0, i622, '_timerText')
  i622._timerPunchScale = i623[21]
  return i622
}

Deserializers["System.Action"] = function (request, data, root) {
  var i624 = root || request.c( 'System.Action' )
  var i625 = data
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i627 = data
  i626.cullTransparentMesh = !!i627[0]
  return i626
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.Image' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'm_Sprite')
  i628.m_Type = i629[2]
  i628.m_PreserveAspect = !!i629[3]
  i628.m_FillCenter = !!i629[4]
  i628.m_FillMethod = i629[5]
  i628.m_FillAmount = i629[6]
  i628.m_FillClockwise = !!i629[7]
  i628.m_FillOrigin = i629[8]
  i628.m_UseSpriteMesh = !!i629[9]
  i628.m_PixelsPerUnitMultiplier = i629[10]
  request.r(i629[11], i629[12], 0, i628, 'm_Material')
  i628.m_Maskable = !!i629[13]
  i628.m_Color = new pc.Color(i629[14], i629[15], i629[16], i629[17])
  i628.m_RaycastTarget = !!i629[18]
  i628.m_RaycastPadding = new pc.Vec4( i629[19], i629[20], i629[21], i629[22] )
  return i628
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'm_Texture')
  i630.m_UVRect = UnityEngine.Rect.MinMaxRect(i631[2], i631[3], i631[4], i631[5])
  request.r(i631[6], i631[7], 0, i630, 'm_Material')
  i630.m_Maskable = !!i631[8]
  i630.m_Color = new pc.Color(i631[9], i631[10], i631[11], i631[12])
  i630.m_RaycastTarget = !!i631[13]
  i630.m_RaycastPadding = new pc.Vec4( i631[14], i631[15], i631[16], i631[17] )
  return i630
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i632 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i633 = data
  i632.m_hasFontAssetChanged = !!i633[0]
  request.r(i633[1], i633[2], 0, i632, 'm_baseMaterial')
  i632.m_maskOffset = new pc.Vec4( i633[3], i633[4], i633[5], i633[6] )
  i632.m_text = i633[7]
  i632.m_isRightToLeft = !!i633[8]
  request.r(i633[9], i633[10], 0, i632, 'm_fontAsset')
  request.r(i633[11], i633[12], 0, i632, 'm_sharedMaterial')
  var i635 = i633[13]
  var i634 = []
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 2, i634, '')
  }
  i632.m_fontSharedMaterials = i634
  request.r(i633[14], i633[15], 0, i632, 'm_fontMaterial')
  var i637 = i633[16]
  var i636 = []
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 2, i636, '')
  }
  i632.m_fontMaterials = i636
  i632.m_fontColor32 = UnityEngine.Color32.ConstructColor(i633[17], i633[18], i633[19], i633[20])
  i632.m_fontColor = new pc.Color(i633[21], i633[22], i633[23], i633[24])
  i632.m_enableVertexGradient = !!i633[25]
  i632.m_colorMode = i633[26]
  i632.m_fontColorGradient = request.d('TMPro.VertexGradient', i633[27], i632.m_fontColorGradient)
  request.r(i633[28], i633[29], 0, i632, 'm_fontColorGradientPreset')
  request.r(i633[30], i633[31], 0, i632, 'm_spriteAsset')
  i632.m_tintAllSprites = !!i633[32]
  request.r(i633[33], i633[34], 0, i632, 'm_StyleSheet')
  i632.m_TextStyleHashCode = i633[35]
  i632.m_overrideHtmlColors = !!i633[36]
  i632.m_faceColor = UnityEngine.Color32.ConstructColor(i633[37], i633[38], i633[39], i633[40])
  i632.m_fontSize = i633[41]
  i632.m_fontSizeBase = i633[42]
  i632.m_fontWeight = i633[43]
  i632.m_enableAutoSizing = !!i633[44]
  i632.m_fontSizeMin = i633[45]
  i632.m_fontSizeMax = i633[46]
  i632.m_fontStyle = i633[47]
  i632.m_HorizontalAlignment = i633[48]
  i632.m_VerticalAlignment = i633[49]
  i632.m_textAlignment = i633[50]
  i632.m_characterSpacing = i633[51]
  i632.m_wordSpacing = i633[52]
  i632.m_lineSpacing = i633[53]
  i632.m_lineSpacingMax = i633[54]
  i632.m_paragraphSpacing = i633[55]
  i632.m_charWidthMaxAdj = i633[56]
  i632.m_TextWrappingMode = i633[57]
  i632.m_wordWrappingRatios = i633[58]
  i632.m_overflowMode = i633[59]
  request.r(i633[60], i633[61], 0, i632, 'm_linkedTextComponent')
  request.r(i633[62], i633[63], 0, i632, 'parentLinkedComponent')
  i632.m_enableKerning = !!i633[64]
  var i639 = i633[65]
  var i638 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i639.length; i += 1) {
    i638.add(i639[i + 0]);
  }
  i632.m_ActiveFontFeatures = i638
  i632.m_enableExtraPadding = !!i633[66]
  i632.checkPaddingRequired = !!i633[67]
  i632.m_isRichText = !!i633[68]
  i632.m_parseCtrlCharacters = !!i633[69]
  i632.m_isOrthographic = !!i633[70]
  i632.m_isCullingEnabled = !!i633[71]
  i632.m_horizontalMapping = i633[72]
  i632.m_verticalMapping = i633[73]
  i632.m_uvLineOffset = i633[74]
  i632.m_geometrySortingOrder = i633[75]
  i632.m_IsTextObjectScaleStatic = !!i633[76]
  i632.m_VertexBufferAutoSizeReduction = !!i633[77]
  i632.m_useMaxVisibleDescender = !!i633[78]
  i632.m_pageToDisplay = i633[79]
  i632.m_margin = new pc.Vec4( i633[80], i633[81], i633[82], i633[83] )
  i632.m_isUsingLegacyAnimationComponent = !!i633[84]
  i632.m_isVolumetricText = !!i633[85]
  request.r(i633[86], i633[87], 0, i632, 'm_Material')
  i632.m_EmojiFallbackSupport = !!i633[88]
  i632.m_Maskable = !!i633[89]
  i632.m_Color = new pc.Color(i633[90], i633[91], i633[92], i633[93])
  i632.m_RaycastTarget = !!i633[94]
  i632.m_RaycastPadding = new pc.Vec4( i633[95], i633[96], i633[97], i633[98] )
  return i632
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i642 = root || request.c( 'TMPro.VertexGradient' )
  var i643 = data
  i642.topLeft = new pc.Color(i643[0], i643[1], i643[2], i643[3])
  i642.topRight = new pc.Color(i643[4], i643[5], i643[6], i643[7])
  i642.bottomLeft = new pc.Color(i643[8], i643[9], i643[10], i643[11])
  i642.bottomRight = new pc.Color(i643[12], i643[13], i643[14], i643[15])
  return i642
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.Button' )
  var i647 = data
  i646.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i647[0], i646.m_OnClick)
  i646.m_Navigation = request.d('UnityEngine.UI.Navigation', i647[1], i646.m_Navigation)
  i646.m_Transition = i647[2]
  i646.m_Colors = request.d('UnityEngine.UI.ColorBlock', i647[3], i646.m_Colors)
  i646.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i647[4], i646.m_SpriteState)
  i646.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i647[5], i646.m_AnimationTriggers)
  i646.m_Interactable = !!i647[6]
  request.r(i647[7], i647[8], 0, i646, 'm_TargetGraphic')
  return i646
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i649 = data
  i648.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i649[0], i648.m_PersistentCalls)
  return i648
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i651 = data
  var i653 = i651[0]
  var i652 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i653.length; i += 1) {
    i652.add(request.d('UnityEngine.Events.PersistentCall', i653[i + 0]));
  }
  i650.m_Calls = i652
  return i650
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'm_Target')
  i656.m_TargetAssemblyTypeName = i657[2]
  i656.m_MethodName = i657[3]
  i656.m_Mode = i657[4]
  i656.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i657[5], i656.m_Arguments)
  i656.m_CallState = i657[6]
  return i656
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'm_ObjectArgument')
  i658.m_ObjectArgumentAssemblyTypeName = i659[2]
  i658.m_IntArgument = i659[3]
  i658.m_FloatArgument = i659[4]
  i658.m_StringArgument = i659[5]
  i658.m_BoolArgument = !!i659[6]
  return i658
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i661 = data
  i660.m_Mode = i661[0]
  i660.m_WrapAround = !!i661[1]
  request.r(i661[2], i661[3], 0, i660, 'm_SelectOnUp')
  request.r(i661[4], i661[5], 0, i660, 'm_SelectOnDown')
  request.r(i661[6], i661[7], 0, i660, 'm_SelectOnLeft')
  request.r(i661[8], i661[9], 0, i660, 'm_SelectOnRight')
  return i660
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i663 = data
  i662.m_NormalColor = new pc.Color(i663[0], i663[1], i663[2], i663[3])
  i662.m_HighlightedColor = new pc.Color(i663[4], i663[5], i663[6], i663[7])
  i662.m_PressedColor = new pc.Color(i663[8], i663[9], i663[10], i663[11])
  i662.m_SelectedColor = new pc.Color(i663[12], i663[13], i663[14], i663[15])
  i662.m_DisabledColor = new pc.Color(i663[16], i663[17], i663[18], i663[19])
  i662.m_ColorMultiplier = i663[20]
  i662.m_FadeDuration = i663[21]
  return i662
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'm_HighlightedSprite')
  request.r(i665[2], i665[3], 0, i664, 'm_PressedSprite')
  request.r(i665[4], i665[5], 0, i664, 'm_SelectedSprite')
  request.r(i665[6], i665[7], 0, i664, 'm_DisabledSprite')
  return i664
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i667 = data
  i666.m_NormalTrigger = i667[0]
  i666.m_HighlightedTrigger = i667[1]
  i666.m_PressedTrigger = i667[2]
  i666.m_SelectedTrigger = i667[3]
  i666.m_DisabledTrigger = i667[4]
  return i666
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.UI.Mask' )
  var i669 = data
  i668.m_ShowMaskGraphic = !!i669[0]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'clip')
  request.r(i671[2], i671[3], 0, i670, 'outputAudioMixerGroup')
  i670.playOnAwake = !!i671[4]
  i670.loop = !!i671[5]
  i670.time = i671[6]
  i670.volume = i671[7]
  i670.pitch = i671[8]
  i670.enabled = !!i671[9]
  return i670
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i673 = data
  i672.m_Padding = new pc.Vec4( i673[0], i673[1], i673[2], i673[3] )
  i672.m_Softness = new pc.Vec2( i673[4], i673[5] )
  return i672
}

Deserializers["GameController"] = function (request, data, root) {
  var i674 = root || request.c( 'GameController' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, '_tutorialHand')
  request.r(i675[2], i675[3], 0, i674, '_tutorialInPlace')
  request.r(i675[4], i675[5], 0, i674, '_tutorialFrom')
  request.r(i675[6], i675[7], 0, i674, '_tutorialTo')
  i674._tutorialScaleDuration = i675[8]
  i674._tutorialMoveDuration = i675[9]
  i674._tutorialStartDelay = i675[10]
  return i674
}

Deserializers["Item"] = function (request, data, root) {
  var i676 = root || request.c( 'Item' )
  var i677 = data
  var i679 = i677[0]
  var i678 = new (System.Collections.Generic.List$1(Bridge.ns('Item+ItemData')))
  for(var i = 0; i < i679.length; i += 1) {
    i678.add(request.d('Item+ItemData', i679[i + 0]));
  }
  i676._data = i678
  i676._dragSortingOrder = i677[1]
  return i676
}

Deserializers["Item+ItemData"] = function (request, data, root) {
  var i682 = root || request.c( 'Item+ItemData' )
  var i683 = data
  i682.id = i683[0]
  i682.stateChange = request.d('Item+GirlStateChange', i683[1], i682.stateChange)
  i682.animationStateTiming = i683[2]
  i682.result = i683[3]
  return i682
}

Deserializers["Item+GirlStateChange"] = function (request, data, root) {
  var i684 = root || request.c( 'Item+GirlStateChange' )
  var i685 = data
  i684.changeBodyShape = !!i685[0]
  i684.bodyShape = i685[1]
  i684.changeOutfit = !!i685[2]
  i684.outfit = i685[3]
  i684.changeRestraint = !!i685[4]
  i684.restraint = i685[5]
  return i684
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i686 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'skeletonDataAsset')
  request.r(i687[2], i687[3], 0, i686, 'additiveMaterial')
  request.r(i687[4], i687[5], 0, i686, 'multiplyMaterial')
  request.r(i687[6], i687[7], 0, i686, 'screenMaterial')
  i686.initialSkinName = i687[8]
  i686.initialFlipX = !!i687[9]
  i686.initialFlipY = !!i687[10]
  i686.startingAnimation = i687[11]
  i686.startingLoop = !!i687[12]
  i686.timeScale = i687[13]
  i686.freeze = !!i687[14]
  i686.layoutScaleMode = i687[15]
  i686.updateWhenInvisible = i687[16]
  i686.allowMultipleCanvasRenderers = !!i687[17]
  var i689 = i687[18]
  var i688 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i689.length; i += 2) {
  request.r(i689[i + 0], i689[i + 1], 1, i688, '')
  }
  i686.canvasRenderers = i688
  i686.enableSeparatorSlots = !!i687[19]
  i686.updateSeparatorPartLocation = !!i687[20]
  i686.updateSeparatorPartScale = !!i687[21]
  i686.disableMeshAssignmentOnOverride = !!i687[22]
  i686.referenceSize = new pc.Vec2( i687[23], i687[24] )
  i686.referenceScale = i687[25]
  i686.rectTransformSize = new pc.Vec2( i687[26], i687[27] )
  i686.editReferenceRect = !!i687[28]
  var i691 = i687[29]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( i691[i + 0] );
  }
  i686.separatorSlotNames = i690
  var i693 = i687[30]
  var i692 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 1, i692, '')
  }
  i686.separatorParts = i692
  i686.meshGenerator = request.d('Spine.Unity.MeshGenerator', i687[31], i686.meshGenerator)
  i686.updateTiming = i687[32]
  i686.unscaledTime = !!i687[33]
  request.r(i687[34], i687[35], 0, i686, 'm_Material')
  i686.m_Maskable = !!i687[36]
  i686.m_Color = new pc.Color(i687[37], i687[38], i687[39], i687[40])
  i686.m_RaycastTarget = !!i687[41]
  i686.m_RaycastPadding = new pc.Vec4( i687[42], i687[43], i687[44], i687[45] )
  return i686
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i700 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i701 = data
  i700.settings = request.d('Spine.Unity.MeshGenerator+Settings', i701[0], i700.settings)
  return i700
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i702 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i703 = data
  i702.useClipping = !!i703[0]
  i702.zSpacing = i703[1]
  i702.pmaVertexColors = !!i703[2]
  i702.tintBlack = !!i703[3]
  i702.canvasGroupTintBlack = !!i703[4]
  i702.calculateTangents = !!i703[5]
  i702.addNormals = !!i703[6]
  i702.immutableTriangles = !!i703[7]
  return i702
}

Deserializers["Playable.Door"] = function (request, data, root) {
  var i704 = root || request.c( 'Playable.Door' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, '_image')
  request.r(i705[2], i705[3], 0, i704, '_open')
  request.r(i705[4], i705[5], 0, i704, '_close')
  return i704
}

Deserializers["Girl"] = function (request, data, root) {
  var i706 = root || request.c( 'Girl' )
  var i707 = data
  i706._enableDebugLogs = !!i707[0]
  i706._status = request.d('GirlStatus', i707[1], i706._status)
  var i709 = i707[2]
  var i708 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+BodyShapeSkins')))
  for(var i = 0; i < i709.length; i += 1) {
    i708.add(request.d('Girl+BodyShapeSkins', i709[i + 0]));
  }
  i706._bodyShapeSkins = i708
  var i711 = i707[3]
  var i710 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+OutfitSkins')))
  for(var i = 0; i < i711.length; i += 1) {
    i710.add(request.d('Girl+OutfitSkins', i711[i + 0]));
  }
  i706._outfitSkins = i710
  var i713 = i707[4]
  var i712 = new (System.Collections.Generic.List$1(Bridge.ns('Girl+RestraintSkins')))
  for(var i = 0; i < i713.length; i += 1) {
    i712.add(request.d('Girl+RestraintSkins', i713[i + 0]));
  }
  i706._restraintSkins = i712
  request.r(i707[5], i707[6], 0, i706, '_skeletonGraphic')
  var i715 = i707[7]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( i715[i + 0] );
  }
  i706._defaultSkins = i714
  i706._defaultAnimation = request.d('Target+GirlAnimation', i707[8], i706._defaultAnimation)
  var i717 = i707[9]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('Target+GirlAnimation')))
  for(var i = 0; i < i717.length; i += 1) {
    i716.add(request.d('Target+GirlAnimation', i717[i + 0]));
  }
  i706._removeGlassesAnimations = i716
  i706._endGameDelay = i707[10]
  i706._boy1 = request.d('Girl+BoyAnimationData', i707[11], i706._boy1)
  i706._boy2 = request.d('Girl+BoyAnimationData', i707[12], i706._boy2)
  return i706
}

Deserializers["GirlStatus"] = function (request, data, root) {
  var i718 = root || request.c( 'GirlStatus' )
  var i719 = data
  i718.bodyShape = i719[0]
  i718.outfit = i719[1]
  i718.restraint = i719[2]
  return i718
}

Deserializers["Girl+BodyShapeSkins"] = function (request, data, root) {
  var i722 = root || request.c( 'Girl+BodyShapeSkins' )
  var i723 = data
  i722.bodyShape = i723[0]
  var i725 = i723[1]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( i725[i + 0] );
  }
  i722.skins = i724
  return i722
}

Deserializers["Girl+OutfitSkins"] = function (request, data, root) {
  var i728 = root || request.c( 'Girl+OutfitSkins' )
  var i729 = data
  i728.outfit = i729[0]
  var i731 = i729[1]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( i731[i + 0] );
  }
  i728.skins = i730
  return i728
}

Deserializers["Girl+RestraintSkins"] = function (request, data, root) {
  var i734 = root || request.c( 'Girl+RestraintSkins' )
  var i735 = data
  i734.restraint = i735[0]
  var i737 = i735[1]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( i737[i + 0] );
  }
  i734.skins = i736
  return i734
}

Deserializers["Target+GirlAnimation"] = function (request, data, root) {
  var i738 = root || request.c( 'Target+GirlAnimation' )
  var i739 = data
  i738.animationName = i739[0]
  i738.loop = !!i739[1]
  return i738
}

Deserializers["Girl+BoyAnimationData"] = function (request, data, root) {
  var i742 = root || request.c( 'Girl+BoyAnimationData' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'skeletonGraphic')
  i742.idleAnimation = i743[2]
  i742.winAnimation = i743[3]
  i742.loseAnimation = i743[4]
  return i742
}

Deserializers["Target"] = function (request, data, root) {
  var i744 = root || request.c( 'Target' )
  var i745 = data
  i744._part = i745[0]
  request.r(i745[1], i745[2], 0, i744, '_girl')
  request.r(i745[3], i745[4], 0, i744, '_skeletonGraphic')
  var i747 = i745[5]
  var i746 = new (System.Collections.Generic.List$1(Bridge.ns('Target+ItemReaction')))
  for(var i = 0; i < i747.length; i += 1) {
    i746.add(request.d('Target+ItemReaction', i747[i + 0]));
  }
  i744._itemReactions = i746
  return i744
}

Deserializers["Target+ItemReaction"] = function (request, data, root) {
  var i750 = root || request.c( 'Target+ItemReaction' )
  var i751 = data
  i750.itemId = i751[0]
  var i753 = i751[1]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('Target+AnimationRule')))
  for(var i = 0; i < i753.length; i += 1) {
    i752.add(request.d('Target+AnimationRule', i753[i + 0]));
  }
  i750.animationRules = i752
  var i755 = i751[2]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( i755[i + 0] );
  }
  i750.skinAdded = i754
  var i757 = i751[3]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( i757[i + 0] );
  }
  i750.skinRemoved = i756
  request.r(i751[4], i751[5], 0, i750, 'audioClip')
  return i750
}

Deserializers["Target+AnimationRule"] = function (request, data, root) {
  var i760 = root || request.c( 'Target+AnimationRule' )
  var i761 = data
  i760.checkBodyShape = !!i761[0]
  i760.bodyShape = i761[1]
  i760.checkOutfit = !!i761[2]
  i760.outfit = i761[3]
  i760.checkRestraint = !!i761[4]
  i760.restraint = i761[5]
  var i763 = i761[6]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('Target+GirlAnimation')))
  for(var i = 0; i < i763.length; i += 1) {
    i762.add(request.d('Target+GirlAnimation', i763[i + 0]));
  }
  i760.animations = i762
  return i760
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i764 = root || request.c( 'Playable.AudioManager' )
  var i765 = data
  var i767 = i765[0]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i767.length; i += 1) {
    i766.add(request.d('Playable.SoundData', i767[i + 0]));
  }
  i764._sounds = i766
  request.r(i765[1], i765[2], 0, i764, '_audioMusic')
  request.r(i765[3], i765[4], 0, i764, '_audioSound')
  return i764
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i770 = root || request.c( 'Playable.SoundData' )
  var i771 = data
  i770.Type = i771[0]
  request.r(i771[1], i771[2], 0, i770, 'Clip')
  return i770
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'm_FirstSelected')
  i772.m_sendNavigationEvents = !!i773[2]
  i772.m_DragThreshold = i773[3]
  return i772
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i775 = data
  i774.m_HorizontalAxis = i775[0]
  i774.m_VerticalAxis = i775[1]
  i774.m_SubmitButton = i775[2]
  i774.m_CancelButton = i775[3]
  i774.m_InputActionsPerSecond = i775[4]
  i774.m_RepeatDelay = i775[5]
  i774.m_ForceModuleActive = !!i775[6]
  i774.m_SendPointerHoverToParent = !!i775[7]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i777 = data
  i776.ambientIntensity = i777[0]
  i776.reflectionIntensity = i777[1]
  i776.ambientMode = i777[2]
  i776.ambientLight = new pc.Color(i777[3], i777[4], i777[5], i777[6])
  i776.ambientSkyColor = new pc.Color(i777[7], i777[8], i777[9], i777[10])
  i776.ambientGroundColor = new pc.Color(i777[11], i777[12], i777[13], i777[14])
  i776.ambientEquatorColor = new pc.Color(i777[15], i777[16], i777[17], i777[18])
  i776.fogColor = new pc.Color(i777[19], i777[20], i777[21], i777[22])
  i776.fogEndDistance = i777[23]
  i776.fogStartDistance = i777[24]
  i776.fogDensity = i777[25]
  i776.fog = !!i777[26]
  request.r(i777[27], i777[28], 0, i776, 'skybox')
  i776.fogMode = i777[29]
  var i779 = i777[30]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i779[i + 0]) );
  }
  i776.lightmaps = i778
  i776.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i777[31], i776.lightProbes)
  i776.lightmapsMode = i777[32]
  i776.mixedBakeMode = i777[33]
  i776.environmentLightingMode = i777[34]
  i776.ambientProbe = new pc.SphericalHarmonicsL2(i777[35])
  request.r(i777[36], i777[37], 0, i776, 'customReflection')
  request.r(i777[38], i777[39], 0, i776, 'defaultReflection')
  i776.defaultReflectionMode = i777[40]
  i776.defaultReflectionResolution = i777[41]
  i776.sunLightObjectId = i777[42]
  i776.pixelLightCount = i777[43]
  i776.defaultReflectionHDR = !!i777[44]
  i776.hasLightDataAsset = !!i777[45]
  i776.hasManualGenerate = !!i777[46]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'lightmapColor')
  request.r(i783[2], i783[3], 0, i782, 'lightmapDirection')
  request.r(i783[4], i783[5], 0, i782, 'shadowMask')
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i784 = root || new UnityEngine.LightProbes()
  var i785 = data
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i793 = data
  var i795 = i793[0]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i795.length; i += 1) {
    i794.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i795[i + 0]));
  }
  i792.ShaderCompilationErrors = i794
  i792.name = i793[1]
  i792.guid = i793[2]
  var i797 = i793[3]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( i797[i + 0] );
  }
  i792.shaderDefinedKeywords = i796
  var i799 = i793[4]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i799[i + 0]) );
  }
  i792.passes = i798
  var i801 = i793[5]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i801[i + 0]) );
  }
  i792.usePasses = i800
  var i803 = i793[6]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i803[i + 0]) );
  }
  i792.defaultParameterValues = i802
  request.r(i793[7], i793[8], 0, i792, 'unityFallbackShader')
  i792.readDepth = !!i793[9]
  i792.hasDepthOnlyPass = !!i793[10]
  i792.isCreatedByShaderGraph = !!i793[11]
  i792.disableBatching = !!i793[12]
  i792.compiled = !!i793[13]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i807 = data
  i806.shaderName = i807[0]
  i806.errorMessage = i807[1]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i810 = root || new pc.UnityShaderPass()
  var i811 = data
  i810.id = i811[0]
  i810.subShaderIndex = i811[1]
  i810.name = i811[2]
  i810.passType = i811[3]
  i810.grabPassTextureName = i811[4]
  i810.usePass = !!i811[5]
  i810.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[6], i810.zTest)
  i810.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[7], i810.zWrite)
  i810.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[8], i810.culling)
  i810.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i811[9], i810.blending)
  i810.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i811[10], i810.alphaBlending)
  i810.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[11], i810.colorWriteMask)
  i810.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[12], i810.offsetUnits)
  i810.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[13], i810.offsetFactor)
  i810.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[14], i810.stencilRef)
  i810.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[15], i810.stencilReadMask)
  i810.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[16], i810.stencilWriteMask)
  i810.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i811[17], i810.stencilOp)
  i810.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i811[18], i810.stencilOpFront)
  i810.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i811[19], i810.stencilOpBack)
  var i813 = i811[20]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i813[i + 0]) );
  }
  i810.tags = i812
  var i815 = i811[21]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( i815[i + 0] );
  }
  i810.passDefinedKeywords = i814
  var i817 = i811[22]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i817[i + 0]) );
  }
  i810.passDefinedKeywordGroups = i816
  var i819 = i811[23]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i819[i + 0]) );
  }
  i810.variants = i818
  var i821 = i811[24]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i821[i + 0]) );
  }
  i810.excludedVariants = i820
  i810.hasDepthReader = !!i811[25]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i823 = data
  i822.val = i823[0]
  i822.name = i823[1]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i825 = data
  i824.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i825[0], i824.src)
  i824.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i825[1], i824.dst)
  i824.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i825[2], i824.op)
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i827 = data
  i826.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[0], i826.pass)
  i826.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[1], i826.fail)
  i826.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[2], i826.zFail)
  i826.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[3], i826.comp)
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i831 = data
  i830.name = i831[0]
  i830.value = i831[1]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i835 = data
  var i837 = i835[0]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( i837[i + 0] );
  }
  i834.keywords = i836
  i834.hasDiscard = !!i835[1]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i841 = data
  i840.passId = i841[0]
  i840.subShaderIndex = i841[1]
  var i843 = i841[2]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( i843[i + 0] );
  }
  i840.keywords = i842
  i840.vertexProgram = i841[3]
  i840.fragmentProgram = i841[4]
  i840.exportedForWebGl2 = !!i841[5]
  i840.readDepth = !!i841[6]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'shader')
  i846.pass = i847[2]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i851 = data
  i850.name = i851[0]
  i850.type = i851[1]
  i850.value = new pc.Vec4( i851[2], i851[3], i851[4], i851[5] )
  i850.textureValue = i851[6]
  i850.shaderPropertyFlag = i851[7]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i853 = data
  i852.name = i853[0]
  request.r(i853[1], i853[2], 0, i852, 'texture')
  i852.aabb = i853[3]
  i852.vertices = i853[4]
  i852.triangles = i853[5]
  i852.textureRect = UnityEngine.Rect.MinMaxRect(i853[6], i853[7], i853[8], i853[9])
  i852.packedRect = UnityEngine.Rect.MinMaxRect(i853[10], i853[11], i853[12], i853[13])
  i852.border = new pc.Vec4( i853[14], i853[15], i853[16], i853[17] )
  i852.transparency = i853[18]
  i852.bounds = i853[19]
  i852.pixelsPerUnit = i853[20]
  i852.textureWidth = i853[21]
  i852.textureHeight = i853[22]
  i852.nativeSize = new pc.Vec2( i853[23], i853[24] )
  i852.pivot = new pc.Vec2( i853[25], i853[26] )
  i852.textureRectOffset = new pc.Vec2( i853[27], i853[28] )
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i855 = data
  i854.name = i855[0]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i857 = data
  i856.name = i857[0]
  i856.ascent = i857[1]
  i856.originalLineHeight = i857[2]
  i856.fontSize = i857[3]
  var i859 = i857[4]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i859[i + 0]) );
  }
  i856.characterInfo = i858
  request.r(i857[5], i857[6], 0, i856, 'texture')
  i856.originalFontSize = i857[7]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i863 = data
  i862.index = i863[0]
  i862.advance = i863[1]
  i862.bearing = i863[2]
  i862.glyphWidth = i863[3]
  i862.glyphHeight = i863[4]
  i862.minX = i863[5]
  i862.maxX = i863[6]
  i862.minY = i863[7]
  i862.maxY = i863[8]
  i862.uvBottomLeftX = i863[9]
  i862.uvBottomLeftY = i863[10]
  i862.uvBottomRightX = i863[11]
  i862.uvBottomRightY = i863[12]
  i862.uvTopLeftX = i863[13]
  i862.uvTopLeftY = i863[14]
  i862.uvTopRightX = i863[15]
  i862.uvTopRightY = i863[16]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i865 = data
  i864.name = i865[0]
  i864.bytes64 = i865[1]
  i864.data = i865[2]
  return i864
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i867 = data
  i866.normalStyle = i867[0]
  i866.normalSpacingOffset = i867[1]
  i866.boldStyle = i867[2]
  i866.boldSpacing = i867[3]
  i866.italicStyle = i867[4]
  i866.tabSize = i867[5]
  request.r(i867[6], i867[7], 0, i866, 'atlas')
  i866.m_SourceFontFileGUID = i867[8]
  i866.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i867[9], i866.m_CreationSettings)
  request.r(i867[10], i867[11], 0, i866, 'm_SourceFontFile')
  i866.m_SourceFontFilePath = i867[12]
  i866.m_AtlasPopulationMode = i867[13]
  i866.InternalDynamicOS = !!i867[14]
  var i869 = i867[15]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i869.length; i += 1) {
    i868.add(request.d('UnityEngine.TextCore.Glyph', i869[i + 0]));
  }
  i866.m_GlyphTable = i868
  var i871 = i867[16]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i871.length; i += 1) {
    i870.add(request.d('TMPro.TMP_Character', i871[i + 0]));
  }
  i866.m_CharacterTable = i870
  var i873 = i867[17]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i866.m_AtlasTextures = i872
  i866.m_AtlasTextureIndex = i867[18]
  i866.m_IsMultiAtlasTexturesEnabled = !!i867[19]
  i866.m_GetFontFeatures = !!i867[20]
  i866.m_ClearDynamicDataOnBuild = !!i867[21]
  i866.m_AtlasWidth = i867[22]
  i866.m_AtlasHeight = i867[23]
  i866.m_AtlasPadding = i867[24]
  i866.m_AtlasRenderMode = i867[25]
  var i875 = i867[26]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i875.length; i += 1) {
    i874.add(request.d('UnityEngine.TextCore.GlyphRect', i875[i + 0]));
  }
  i866.m_UsedGlyphRects = i874
  var i877 = i867[27]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i877.length; i += 1) {
    i876.add(request.d('UnityEngine.TextCore.GlyphRect', i877[i + 0]));
  }
  i866.m_FreeGlyphRects = i876
  i866.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i867[28], i866.m_FontFeatureTable)
  i866.m_ShouldReimportFontFeatures = !!i867[29]
  var i879 = i867[30]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 1, i878, '')
  }
  i866.m_FallbackFontAssetTable = i878
  var i881 = i867[31]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('TMPro.TMP_FontWeightPair', i881[i + 0]) );
  }
  i866.m_FontWeightTable = i880
  var i883 = i867[32]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('TMPro.TMP_FontWeightPair', i883[i + 0]) );
  }
  i866.fontWeights = i882
  i866.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i867[33], i866.m_fontInfo)
  var i885 = i867[34]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(request.d('TMPro.TMP_Glyph', i885[i + 0]));
  }
  i866.m_glyphInfoList = i884
  i866.m_KerningTable = request.d('TMPro.KerningTable', i867[35], i866.m_KerningTable)
  var i887 = i867[36]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 1, i886, '')
  }
  i866.fallbackFontAssets = i886
  i866.m_Version = i867[37]
  i866.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i867[38], i866.m_FaceInfo)
  request.r(i867[39], i867[40], 0, i866, 'm_Material')
  return i866
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i888 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i889 = data
  i888.sourceFontFileName = i889[0]
  i888.sourceFontFileGUID = i889[1]
  i888.faceIndex = i889[2]
  i888.pointSizeSamplingMode = i889[3]
  i888.pointSize = i889[4]
  i888.padding = i889[5]
  i888.paddingMode = i889[6]
  i888.packingMode = i889[7]
  i888.atlasWidth = i889[8]
  i888.atlasHeight = i889[9]
  i888.characterSetSelectionMode = i889[10]
  i888.characterSequence = i889[11]
  i888.referencedFontAssetGUID = i889[12]
  i888.referencedTextAssetGUID = i889[13]
  i888.fontStyle = i889[14]
  i888.fontStyleModifier = i889[15]
  i888.renderMode = i889[16]
  i888.includeFontFeatures = !!i889[17]
  return i888
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i893 = data
  i892.m_Index = i893[0]
  i892.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i893[1], i892.m_Metrics)
  i892.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i893[2], i892.m_GlyphRect)
  i892.m_Scale = i893[3]
  i892.m_AtlasIndex = i893[4]
  i892.m_ClassDefinitionType = i893[5]
  return i892
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i895 = data
  i894.m_Width = i895[0]
  i894.m_Height = i895[1]
  i894.m_HorizontalBearingX = i895[2]
  i894.m_HorizontalBearingY = i895[3]
  i894.m_HorizontalAdvance = i895[4]
  return i894
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i897 = data
  i896.m_X = i897[0]
  i896.m_Y = i897[1]
  i896.m_Width = i897[2]
  i896.m_Height = i897[3]
  return i896
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i900 = root || request.c( 'TMPro.TMP_Character' )
  var i901 = data
  i900.m_ElementType = i901[0]
  i900.m_Unicode = i901[1]
  i900.m_GlyphIndex = i901[2]
  i900.m_Scale = i901[3]
  return i900
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i906 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i907 = data
  var i909 = i907[0]
  var i908 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i909.length; i += 1) {
    i908.add(request.d('TMPro.MultipleSubstitutionRecord', i909[i + 0]));
  }
  i906.m_MultipleSubstitutionRecords = i908
  var i911 = i907[1]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i911.length; i += 1) {
    i910.add(request.d('TMPro.LigatureSubstitutionRecord', i911[i + 0]));
  }
  i906.m_LigatureSubstitutionRecords = i910
  var i913 = i907[2]
  var i912 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i913.length; i += 1) {
    i912.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i913[i + 0]));
  }
  i906.m_GlyphPairAdjustmentRecords = i912
  var i915 = i907[3]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i915.length; i += 1) {
    i914.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i915[i + 0]));
  }
  i906.m_MarkToBaseAdjustmentRecords = i914
  var i917 = i907[4]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i917.length; i += 1) {
    i916.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i917[i + 0]));
  }
  i906.m_MarkToMarkAdjustmentRecords = i916
  return i906
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i920 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i921 = data
  i920.m_TargetGlyphID = i921[0]
  i920.m_SubstituteGlyphIDs = i921[1]
  return i920
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i924 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i925 = data
  i924.m_ComponentGlyphIDs = i925[0]
  i924.m_LigatureGlyphID = i925[1]
  return i924
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i929 = data
  i928.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i929[0], i928.m_FirstAdjustmentRecord)
  i928.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i929[1], i928.m_SecondAdjustmentRecord)
  i928.m_FeatureLookupFlags = i929[2]
  return i928
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i932 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i933 = data
  i932.m_BaseGlyphID = i933[0]
  i932.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i933[1], i932.m_BaseGlyphAnchorPoint)
  i932.m_MarkGlyphID = i933[2]
  i932.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i933[3], i932.m_MarkPositionAdjustment)
  return i932
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i936 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i937 = data
  i936.m_BaseMarkGlyphID = i937[0]
  i936.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i937[1], i936.m_BaseMarkGlyphAnchorPoint)
  i936.m_CombiningMarkGlyphID = i937[2]
  i936.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i937[3], i936.m_CombiningMarkPositionAdjustment)
  return i936
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'regularTypeface')
  request.r(i943[2], i943[3], 0, i942, 'italicTypeface')
  return i942
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i944 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i945 = data
  i944.Name = i945[0]
  i944.PointSize = i945[1]
  i944.Scale = i945[2]
  i944.CharacterCount = i945[3]
  i944.LineHeight = i945[4]
  i944.Baseline = i945[5]
  i944.Ascender = i945[6]
  i944.CapHeight = i945[7]
  i944.Descender = i945[8]
  i944.CenterLine = i945[9]
  i944.SuperscriptOffset = i945[10]
  i944.SubscriptOffset = i945[11]
  i944.SubSize = i945[12]
  i944.Underline = i945[13]
  i944.UnderlineThickness = i945[14]
  i944.strikethrough = i945[15]
  i944.strikethroughThickness = i945[16]
  i944.TabWidth = i945[17]
  i944.Padding = i945[18]
  i944.AtlasWidth = i945[19]
  i944.AtlasHeight = i945[20]
  return i944
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.TMP_Glyph' )
  var i949 = data
  i948.id = i949[0]
  i948.x = i949[1]
  i948.y = i949[2]
  i948.width = i949[3]
  i948.height = i949[4]
  i948.xOffset = i949[5]
  i948.yOffset = i949[6]
  i948.xAdvance = i949[7]
  i948.scale = i949[8]
  return i948
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.KerningTable' )
  var i951 = data
  var i953 = i951[0]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('TMPro.KerningPair', i953[i + 0]));
  }
  i950.kerningPairs = i952
  return i950
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i956 = root || request.c( 'TMPro.KerningPair' )
  var i957 = data
  i956.xOffset = i957[0]
  i956.m_FirstGlyph = i957[1]
  i956.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i957[2], i956.m_FirstGlyphAdjustments)
  i956.m_SecondGlyph = i957[3]
  i956.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i957[4], i956.m_SecondGlyphAdjustments)
  i956.m_IgnoreSpacingAdjustments = !!i957[5]
  return i956
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i959 = data
  i958.m_FaceIndex = i959[0]
  i958.m_FamilyName = i959[1]
  i958.m_StyleName = i959[2]
  i958.m_PointSize = i959[3]
  i958.m_Scale = i959[4]
  i958.m_UnitsPerEM = i959[5]
  i958.m_LineHeight = i959[6]
  i958.m_AscentLine = i959[7]
  i958.m_CapLine = i959[8]
  i958.m_MeanLine = i959[9]
  i958.m_Baseline = i959[10]
  i958.m_DescentLine = i959[11]
  i958.m_SuperscriptOffset = i959[12]
  i958.m_SuperscriptSize = i959[13]
  i958.m_SubscriptOffset = i959[14]
  i958.m_SubscriptSize = i959[15]
  i958.m_UnderlineOffset = i959[16]
  i958.m_UnderlineThickness = i959[17]
  i958.m_StrikethroughOffset = i959[18]
  i958.m_StrikethroughThickness = i959[19]
  i958.m_TabWidth = i959[20]
  return i958
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i960 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i961 = data
  var i963 = i961[0]
  var i962 = []
  for(var i = 0; i < i963.length; i += 2) {
  request.r(i963[i + 0], i963[i + 1], 2, i962, '')
  }
  i960.atlasAssets = i962
  i960.scale = i961[1]
  request.r(i961[2], i961[3], 0, i960, 'skeletonJSON')
  i960.isUpgradingBlendModeMaterials = !!i961[4]
  i960.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i961[5], i960.blendModeMaterials)
  var i965 = i961[6]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i965.length; i += 2) {
  request.r(i965[i + 0], i965[i + 1], 1, i964, '')
  }
  i960.skeletonDataModifiers = i964
  var i967 = i961[7]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( i967[i + 0] );
  }
  i960.fromAnimation = i966
  var i969 = i961[8]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( i969[i + 0] );
  }
  i960.toAnimation = i968
  i960.duration = i961[9]
  i960.defaultMix = i961[10]
  request.r(i961[11], i961[12], 0, i960, 'controller')
  return i960
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i972 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i973 = data
  i972.applyAdditiveMaterial = !!i973[0]
  var i975 = i973[1]
  var i974 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i975.length; i += 1) {
    i974.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i975[i + 0]));
  }
  i972.additiveMaterials = i974
  var i977 = i973[2]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i977.length; i += 1) {
    i976.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i977[i + 0]));
  }
  i972.multiplyMaterials = i976
  var i979 = i973[3]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i979.length; i += 1) {
    i978.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i979[i + 0]));
  }
  i972.screenMaterials = i978
  i972.requiresBlendModeMaterials = !!i973[4]
  return i972
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i982 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i983 = data
  i982.pageName = i983[0]
  request.r(i983[1], i983[2], 0, i982, 'material')
  return i982
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i986 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'atlasFile')
  var i989 = i987[2]
  var i988 = []
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 2, i988, '')
  }
  i986.materials = i988
  i986.textureLoadingMode = i987[3]
  request.r(i987[4], i987[5], 0, i986, 'onDemandTextureLoader')
  return i986
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i990 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i991 = data
  i990.useSafeMode = !!i991[0]
  i990.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i991[1], i990.safeModeOptions)
  i990.timeScale = i991[2]
  i990.unscaledTimeScale = i991[3]
  i990.useSmoothDeltaTime = !!i991[4]
  i990.maxSmoothUnscaledTime = i991[5]
  i990.rewindCallbackMode = i991[6]
  i990.showUnityEditorReport = !!i991[7]
  i990.logBehaviour = i991[8]
  i990.drawGizmos = !!i991[9]
  i990.defaultRecyclable = !!i991[10]
  i990.defaultAutoPlay = i991[11]
  i990.defaultUpdateType = i991[12]
  i990.defaultTimeScaleIndependent = !!i991[13]
  i990.defaultEaseType = i991[14]
  i990.defaultEaseOvershootOrAmplitude = i991[15]
  i990.defaultEasePeriod = i991[16]
  i990.defaultAutoKill = !!i991[17]
  i990.defaultLoopType = i991[18]
  i990.debugMode = !!i991[19]
  i990.debugStoreTargetId = !!i991[20]
  i990.showPreviewPanel = !!i991[21]
  i990.storeSettingsLocation = i991[22]
  i990.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i991[23], i990.modules)
  i990.createASMDEF = !!i991[24]
  i990.showPlayingTweens = !!i991[25]
  i990.showPausedTweens = !!i991[26]
  return i990
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i992 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i993 = data
  i992.logBehaviour = i993[0]
  i992.nestedTweenFailureBehaviour = i993[1]
  return i992
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i994 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i995 = data
  i994.showPanel = !!i995[0]
  i994.audioEnabled = !!i995[1]
  i994.physicsEnabled = !!i995[2]
  i994.physics2DEnabled = !!i995[3]
  i994.spriteEnabled = !!i995[4]
  i994.uiEnabled = !!i995[5]
  i994.uiToolkitEnabled = !!i995[6]
  i994.textMeshProEnabled = !!i995[7]
  i994.tk2DEnabled = !!i995[8]
  i994.deAudioEnabled = !!i995[9]
  i994.deUnityExtendedEnabled = !!i995[10]
  i994.epoOutlineEnabled = !!i995[11]
  return i994
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i996 = root || request.c( 'TMPro.TMP_Settings' )
  var i997 = data
  i996.assetVersion = i997[0]
  i996.m_TextWrappingMode = i997[1]
  i996.m_enableKerning = !!i997[2]
  var i999 = i997[3]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i999.length; i += 1) {
    i998.add(i999[i + 0]);
  }
  i996.m_ActiveFontFeatures = i998
  i996.m_enableExtraPadding = !!i997[4]
  i996.m_enableTintAllSprites = !!i997[5]
  i996.m_enableParseEscapeCharacters = !!i997[6]
  i996.m_EnableRaycastTarget = !!i997[7]
  i996.m_GetFontFeaturesAtRuntime = !!i997[8]
  i996.m_missingGlyphCharacter = i997[9]
  i996.m_ClearDynamicDataOnBuild = !!i997[10]
  i996.m_warningsDisabled = !!i997[11]
  request.r(i997[12], i997[13], 0, i996, 'm_defaultFontAsset')
  i996.m_defaultFontAssetPath = i997[14]
  i996.m_defaultFontSize = i997[15]
  i996.m_defaultAutoSizeMinRatio = i997[16]
  i996.m_defaultAutoSizeMaxRatio = i997[17]
  i996.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i997[18], i997[19] )
  i996.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i997[20], i997[21] )
  i996.m_autoSizeTextContainer = !!i997[22]
  i996.m_IsTextObjectScaleStatic = !!i997[23]
  var i1001 = i997[24]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 1, i1000, '')
  }
  i996.m_fallbackFontAssets = i1000
  i996.m_matchMaterialPreset = !!i997[25]
  i996.m_HideSubTextObjects = !!i997[26]
  request.r(i997[27], i997[28], 0, i996, 'm_defaultSpriteAsset')
  i996.m_defaultSpriteAssetPath = i997[29]
  i996.m_enableEmojiSupport = !!i997[30]
  i996.m_MissingCharacterSpriteUnicode = i997[31]
  var i1003 = i997[32]
  var i1002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1003.length; i += 2) {
  request.r(i1003[i + 0], i1003[i + 1], 1, i1002, '')
  }
  i996.m_EmojiFallbackTextAssets = i1002
  i996.m_defaultColorGradientPresetsPath = i997[33]
  request.r(i997[34], i997[35], 0, i996, 'm_defaultStyleSheet')
  i996.m_StyleSheetsResourcePath = i997[36]
  request.r(i997[37], i997[38], 0, i996, 'm_leadingCharacters')
  request.r(i997[39], i997[40], 0, i996, 'm_followingCharacters')
  i996.m_UseModernHangulLineBreakingRules = !!i997[41]
  return i996
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1007 = data
  i1006.m_GlyphIndex = i1007[0]
  i1006.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1007[1], i1006.m_GlyphValueRecord)
  return i1006
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1009 = data
  i1008.m_XPlacement = i1009[0]
  i1008.m_YPlacement = i1009[1]
  i1008.m_XAdvance = i1009[2]
  i1008.m_YAdvance = i1009[3]
  return i1008
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1010 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'spriteSheet')
  var i1013 = i1011[2]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.add(request.d('TMPro.TMP_Sprite', i1013[i + 0]));
  }
  i1010.spriteInfoList = i1012
  var i1015 = i1011[3]
  var i1014 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1015.length; i += 2) {
  request.r(i1015[i + 0], i1015[i + 1], 1, i1014, '')
  }
  i1010.fallbackSpriteAssets = i1014
  var i1017 = i1011[4]
  var i1016 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.add(request.d('TMPro.TMP_SpriteCharacter', i1017[i + 0]));
  }
  i1010.m_SpriteCharacterTable = i1016
  var i1019 = i1011[5]
  var i1018 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.add(request.d('TMPro.TMP_SpriteGlyph', i1019[i + 0]));
  }
  i1010.m_GlyphTable = i1018
  i1010.m_Version = i1011[6]
  i1010.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1011[7], i1010.m_FaceInfo)
  request.r(i1011[8], i1011[9], 0, i1010, 'm_Material')
  return i1010
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1022 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1023 = data
  i1022.name = i1023[0]
  i1022.hashCode = i1023[1]
  i1022.unicode = i1023[2]
  i1022.pivot = new pc.Vec2( i1023[3], i1023[4] )
  request.r(i1023[5], i1023[6], 0, i1022, 'sprite')
  i1022.id = i1023[7]
  i1022.x = i1023[8]
  i1022.y = i1023[9]
  i1022.width = i1023[10]
  i1022.height = i1023[11]
  i1022.xOffset = i1023[12]
  i1022.yOffset = i1023[13]
  i1022.xAdvance = i1023[14]
  i1022.scale = i1023[15]
  return i1022
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1028 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1029 = data
  i1028.m_Name = i1029[0]
  i1028.m_ElementType = i1029[1]
  i1028.m_Unicode = i1029[2]
  i1028.m_GlyphIndex = i1029[3]
  i1028.m_Scale = i1029[4]
  return i1028
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1032 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1033 = data
  request.r(i1033[0], i1033[1], 0, i1032, 'sprite')
  i1032.m_Index = i1033[2]
  i1032.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1033[3], i1032.m_Metrics)
  i1032.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1033[4], i1032.m_GlyphRect)
  i1032.m_Scale = i1033[5]
  i1032.m_AtlasIndex = i1033[6]
  i1032.m_ClassDefinitionType = i1033[7]
  return i1032
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1034 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1035 = data
  var i1037 = i1035[0]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.add(request.d('TMPro.TMP_Style', i1037[i + 0]));
  }
  i1034.m_StyleList = i1036
  return i1034
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1040 = root || request.c( 'TMPro.TMP_Style' )
  var i1041 = data
  i1040.m_Name = i1041[0]
  i1040.m_HashCode = i1041[1]
  i1040.m_OpeningDefinition = i1041[2]
  i1040.m_ClosingDefinition = i1041[3]
  i1040.m_OpeningTagArray = i1041[4]
  i1040.m_ClosingTagArray = i1041[5]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1043 = data
  var i1045 = i1043[0]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1045[i + 0]) );
  }
  i1042.files = i1044
  i1042.componentToPrefabIds = i1043[1]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1049 = data
  i1048.path = i1049[0]
  request.r(i1049[1], i1049[2], 0, i1048, 'unityObject')
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1051 = data
  var i1053 = i1051[0]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1053[i + 0]) );
  }
  i1050.scriptsExecutionOrder = i1052
  var i1055 = i1051[1]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1055[i + 0]) );
  }
  i1050.sortingLayers = i1054
  var i1057 = i1051[2]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1057[i + 0]) );
  }
  i1050.cullingLayers = i1056
  i1050.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1051[3], i1050.timeSettings)
  i1050.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1051[4], i1050.physicsSettings)
  i1050.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1051[5], i1050.physics2DSettings)
  i1050.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1051[6], i1050.qualitySettings)
  i1050.enableRealtimeShadows = !!i1051[7]
  i1050.enableAutoInstancing = !!i1051[8]
  i1050.enableStaticBatching = !!i1051[9]
  i1050.enableDynamicBatching = !!i1051[10]
  i1050.usePreservativeDynamicBatching = !!i1051[11]
  i1050.lightmapEncodingQuality = i1051[12]
  i1050.desiredColorSpace = i1051[13]
  var i1059 = i1051[14]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( i1059[i + 0] );
  }
  i1050.allTags = i1058
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1063 = data
  i1062.name = i1063[0]
  i1062.value = i1063[1]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1067 = data
  i1066.id = i1067[0]
  i1066.name = i1067[1]
  i1066.value = i1067[2]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1071 = data
  i1070.id = i1071[0]
  i1070.name = i1071[1]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1073 = data
  i1072.fixedDeltaTime = i1073[0]
  i1072.maximumDeltaTime = i1073[1]
  i1072.timeScale = i1073[2]
  i1072.maximumParticleTimestep = i1073[3]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1075 = data
  i1074.gravity = new pc.Vec3( i1075[0], i1075[1], i1075[2] )
  i1074.defaultSolverIterations = i1075[3]
  i1074.bounceThreshold = i1075[4]
  i1074.autoSyncTransforms = !!i1075[5]
  i1074.autoSimulation = !!i1075[6]
  var i1077 = i1075[7]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1077[i + 0]) );
  }
  i1074.collisionMatrix = i1076
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1081 = data
  i1080.enabled = !!i1081[0]
  i1080.layerId = i1081[1]
  i1080.otherLayerId = i1081[2]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1083 = data
  request.r(i1083[0], i1083[1], 0, i1082, 'material')
  i1082.gravity = new pc.Vec2( i1083[2], i1083[3] )
  i1082.positionIterations = i1083[4]
  i1082.velocityIterations = i1083[5]
  i1082.velocityThreshold = i1083[6]
  i1082.maxLinearCorrection = i1083[7]
  i1082.maxAngularCorrection = i1083[8]
  i1082.maxTranslationSpeed = i1083[9]
  i1082.maxRotationSpeed = i1083[10]
  i1082.baumgarteScale = i1083[11]
  i1082.baumgarteTOIScale = i1083[12]
  i1082.timeToSleep = i1083[13]
  i1082.linearSleepTolerance = i1083[14]
  i1082.angularSleepTolerance = i1083[15]
  i1082.defaultContactOffset = i1083[16]
  i1082.autoSimulation = !!i1083[17]
  i1082.queriesHitTriggers = !!i1083[18]
  i1082.queriesStartInColliders = !!i1083[19]
  i1082.callbacksOnDisable = !!i1083[20]
  i1082.reuseCollisionCallbacks = !!i1083[21]
  i1082.autoSyncTransforms = !!i1083[22]
  var i1085 = i1083[23]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1085[i + 0]) );
  }
  i1082.collisionMatrix = i1084
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1089 = data
  i1088.enabled = !!i1089[0]
  i1088.layerId = i1089[1]
  i1088.otherLayerId = i1089[2]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1091 = data
  var i1093 = i1091[0]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1093[i + 0]) );
  }
  i1090.qualityLevels = i1092
  var i1095 = i1091[1]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( i1095[i + 0] );
  }
  i1090.names = i1094
  i1090.shadows = i1091[2]
  i1090.anisotropicFiltering = i1091[3]
  i1090.antiAliasing = i1091[4]
  i1090.lodBias = i1091[5]
  i1090.shadowCascades = i1091[6]
  i1090.shadowDistance = i1091[7]
  i1090.shadowmaskMode = i1091[8]
  i1090.shadowProjection = i1091[9]
  i1090.shadowResolution = i1091[10]
  i1090.softParticles = !!i1091[11]
  i1090.softVegetation = !!i1091[12]
  i1090.activeColorSpace = i1091[13]
  i1090.desiredColorSpace = i1091[14]
  i1090.masterTextureLimit = i1091[15]
  i1090.maxQueuedFrames = i1091[16]
  i1090.particleRaycastBudget = i1091[17]
  i1090.pixelLightCount = i1091[18]
  i1090.realtimeReflectionProbes = !!i1091[19]
  i1090.shadowCascade2Split = i1091[20]
  i1090.shadowCascade4Split = new pc.Vec3( i1091[21], i1091[22], i1091[23] )
  i1090.streamingMipmapsActive = !!i1091[24]
  i1090.vSyncCount = i1091[25]
  i1090.asyncUploadBufferSize = i1091[26]
  i1090.asyncUploadTimeSlice = i1091[27]
  i1090.billboardsFaceCameraPosition = !!i1091[28]
  i1090.shadowNearPlaneOffset = i1091[29]
  i1090.streamingMipmapsMemoryBudget = i1091[30]
  i1090.maximumLODLevel = i1091[31]
  i1090.streamingMipmapsAddAllCameras = !!i1091[32]
  i1090.streamingMipmapsMaxLevelReduction = i1091[33]
  i1090.streamingMipmapsRenderersPerFrame = i1091[34]
  i1090.resolutionScalingFixedDPIFactor = i1091[35]
  i1090.streamingMipmapsMaxFileIORequests = i1091[36]
  i1090.currentQualityLevel = i1091[37]
  return i1090
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1098 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1099 = data
  i1098.m_XCoordinate = i1099[0]
  i1098.m_YCoordinate = i1099[1]
  return i1098
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1100 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1101 = data
  i1100.m_XPositionAdjustment = i1101[0]
  i1100.m_YPositionAdjustment = i1101[1]
  return i1100
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1102 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1103 = data
  i1102.xPlacement = i1103[0]
  i1102.yPlacement = i1103[1]
  i1102.xAdvance = i1103[2]
  i1102.yAdvance = i1103[3]
  return i1102
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[2],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[59],"67":[59],"68":[59],"69":[59],"70":[59],"71":[59],"72":[2],"73":[74],"75":[76],"77":[76],"5":[4],"24":[4],"78":[79],"80":[4],"81":[15,4],"82":[74],"25":[15,4],"83":[84,74],"85":[74],"86":[74,87],"88":[52],"89":[59],"90":[79],"91":[92],"93":[94],"95":[32],"96":[5],"97":[4],"98":[74,4],"14":[4,15],"99":[4],"100":[15,4],"101":[74],"102":[15,4],"103":[4],"104":[105],"106":[105],"107":[105],"108":[4],"109":[4],"8":[5],"13":[15,4],"110":[4],"7":[5],"111":[4],"112":[4],"113":[4],"114":[4],"115":[4],"116":[4],"117":[4],"20":[4],"118":[4],"16":[15,4],"22":[4],"119":[4],"120":[4],"121":[4],"122":[15,4],"123":[4],"124":[32],"125":[32],"33":[32],"126":[32],"127":[2],"128":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.GameManager","UnityEngine.AudioClip","UnityEngine.UI.Button","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.UI.Mask","UnityEngine.AudioSource","UnityEngine.UI.RectMask2D","GameController","Item","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","Playable.Door","UnityEngine.GameObject","Girl","Target","Playable.AudioManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "PA_BEQ";

Deserializers.lunaInitializationTime = "08/04/2026 10:21:04";

Deserializers.lunaDaysRunning = "30.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BEQ_V35_NgocNDL_HuyNQ";

Deserializers.lunaAppID = "29138";

Deserializers.projectId = "2908ef2555f4afa4ab6241b85cbb2f84";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.2\ncom.unity.timeline: 1.8.13\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1850";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4470";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.PA-BEQ";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "1fb3acd8-7b8f-465f-a6a7-aad9de34f88f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

