var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i15912 = root || request.c( 'UnityEngine.JointSpring' )
  var i15913 = data
  i15912.spring = i15913[0]
  i15912.damper = i15913[1]
  i15912.targetPosition = i15913[2]
  return i15912
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i15914 = root || request.c( 'UnityEngine.JointMotor' )
  var i15915 = data
  i15914.m_TargetVelocity = i15915[0]
  i15914.m_Force = i15915[1]
  i15914.m_FreeSpin = i15915[2]
  return i15914
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i15916 = root || request.c( 'UnityEngine.JointLimits' )
  var i15917 = data
  i15916.m_Min = i15917[0]
  i15916.m_Max = i15917[1]
  i15916.m_Bounciness = i15917[2]
  i15916.m_BounceMinVelocity = i15917[3]
  i15916.m_ContactDistance = i15917[4]
  i15916.minBounce = i15917[5]
  i15916.maxBounce = i15917[6]
  return i15916
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i15918 = root || request.c( 'UnityEngine.JointDrive' )
  var i15919 = data
  i15918.m_PositionSpring = i15919[0]
  i15918.m_PositionDamper = i15919[1]
  i15918.m_MaximumForce = i15919[2]
  i15918.m_UseAcceleration = i15919[3]
  return i15918
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i15920 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i15921 = data
  i15920.m_Spring = i15921[0]
  i15920.m_Damper = i15921[1]
  return i15920
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i15922 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i15923 = data
  i15922.m_Limit = i15923[0]
  i15922.m_Bounciness = i15923[1]
  i15922.m_ContactDistance = i15923[2]
  return i15922
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i15924 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i15925 = data
  i15924.m_ExtremumSlip = i15925[0]
  i15924.m_ExtremumValue = i15925[1]
  i15924.m_AsymptoteSlip = i15925[2]
  i15924.m_AsymptoteValue = i15925[3]
  i15924.m_Stiffness = i15925[4]
  return i15924
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i15926 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i15927 = data
  i15926.m_LowerAngle = i15927[0]
  i15926.m_UpperAngle = i15927[1]
  return i15926
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i15928 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i15929 = data
  i15928.m_MotorSpeed = i15929[0]
  i15928.m_MaximumMotorTorque = i15929[1]
  return i15928
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i15930 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i15931 = data
  i15930.m_DampingRatio = i15931[0]
  i15930.m_Frequency = i15931[1]
  i15930.m_Angle = i15931[2]
  return i15930
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i15932 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i15933 = data
  i15932.m_LowerTranslation = i15933[0]
  i15932.m_UpperTranslation = i15933[1]
  return i15932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i15934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i15935 = data
  i15934.name = i15935[0]
  i15934.width = i15935[1]
  i15934.height = i15935[2]
  i15934.mipmapCount = i15935[3]
  i15934.anisoLevel = i15935[4]
  i15934.filterMode = i15935[5]
  i15934.hdr = !!i15935[6]
  i15934.format = i15935[7]
  i15934.wrapMode = i15935[8]
  i15934.alphaIsTransparency = !!i15935[9]
  i15934.alphaSource = i15935[10]
  i15934.graphicsFormat = i15935[11]
  i15934.sRGBTexture = !!i15935[12]
  i15934.desiredColorSpace = i15935[13]
  i15934.wrapU = i15935[14]
  i15934.wrapV = i15935[15]
  return i15934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i15936 = root || new pc.UnityMaterial()
  var i15937 = data
  i15936.name = i15937[0]
  request.r(i15937[1], i15937[2], 0, i15936, 'shader')
  i15936.renderQueue = i15937[3]
  i15936.enableInstancing = !!i15937[4]
  var i15939 = i15937[5]
  var i15938 = []
  for(var i = 0; i < i15939.length; i += 1) {
    i15938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i15939[i + 0]) );
  }
  i15936.floatParameters = i15938
  var i15941 = i15937[6]
  var i15940 = []
  for(var i = 0; i < i15941.length; i += 1) {
    i15940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i15941[i + 0]) );
  }
  i15936.colorParameters = i15940
  var i15943 = i15937[7]
  var i15942 = []
  for(var i = 0; i < i15943.length; i += 1) {
    i15942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i15943[i + 0]) );
  }
  i15936.vectorParameters = i15942
  var i15945 = i15937[8]
  var i15944 = []
  for(var i = 0; i < i15945.length; i += 1) {
    i15944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i15945[i + 0]) );
  }
  i15936.textureParameters = i15944
  var i15947 = i15937[9]
  var i15946 = []
  for(var i = 0; i < i15947.length; i += 1) {
    i15946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i15947[i + 0]) );
  }
  i15936.materialFlags = i15946
  return i15936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i15950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i15951 = data
  i15950.name = i15951[0]
  i15950.value = i15951[1]
  return i15950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i15954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i15955 = data
  i15954.name = i15955[0]
  i15954.value = new pc.Color(i15955[1], i15955[2], i15955[3], i15955[4])
  return i15954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i15958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i15959 = data
  i15958.name = i15959[0]
  i15958.value = new pc.Vec4( i15959[1], i15959[2], i15959[3], i15959[4] )
  return i15958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i15962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i15963 = data
  i15962.name = i15963[0]
  request.r(i15963[1], i15963[2], 0, i15962, 'value')
  return i15962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i15966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i15967 = data
  i15966.name = i15967[0]
  i15966.enabled = !!i15967[1]
  return i15966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i15968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i15969 = data
  i15968.name = i15969[0]
  i15968.index = i15969[1]
  i15968.startup = !!i15969[2]
  return i15968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i15970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i15971 = data
  i15970.aspect = i15971[0]
  i15970.orthographic = !!i15971[1]
  i15970.orthographicSize = i15971[2]
  i15970.backgroundColor = new pc.Color(i15971[3], i15971[4], i15971[5], i15971[6])
  i15970.nearClipPlane = i15971[7]
  i15970.farClipPlane = i15971[8]
  i15970.fieldOfView = i15971[9]
  i15970.depth = i15971[10]
  i15970.clearFlags = i15971[11]
  i15970.cullingMask = i15971[12]
  i15970.rect = i15971[13]
  request.r(i15971[14], i15971[15], 0, i15970, 'targetTexture')
  i15970.usePhysicalProperties = !!i15971[16]
  i15970.focalLength = i15971[17]
  i15970.sensorSize = new pc.Vec2( i15971[18], i15971[19] )
  i15970.lensShift = new pc.Vec2( i15971[20], i15971[21] )
  i15970.gateFit = i15971[22]
  i15970.commandBufferCount = i15971[23]
  i15970.cameraType = i15971[24]
  i15970.enabled = !!i15971[25]
  return i15970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i15972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i15973 = data
  i15972.name = i15973[0]
  i15972.tagId = i15973[1]
  i15972.enabled = !!i15973[2]
  i15972.isStatic = !!i15973[3]
  i15972.layer = i15973[4]
  return i15972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i15974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i15975 = data
  i15974.pivot = new pc.Vec2( i15975[0], i15975[1] )
  i15974.anchorMin = new pc.Vec2( i15975[2], i15975[3] )
  i15974.anchorMax = new pc.Vec2( i15975[4], i15975[5] )
  i15974.sizeDelta = new pc.Vec2( i15975[6], i15975[7] )
  i15974.anchoredPosition3D = new pc.Vec3( i15975[8], i15975[9], i15975[10] )
  i15974.rotation = new pc.Quat(i15975[11], i15975[12], i15975[13], i15975[14])
  i15974.scale = new pc.Vec3( i15975[15], i15975[16], i15975[17] )
  return i15974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i15976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i15977 = data
  i15976.planeDistance = i15977[0]
  i15976.referencePixelsPerUnit = i15977[1]
  i15976.isFallbackOverlay = !!i15977[2]
  i15976.renderMode = i15977[3]
  i15976.renderOrder = i15977[4]
  i15976.sortingLayerName = i15977[5]
  i15976.sortingOrder = i15977[6]
  i15976.scaleFactor = i15977[7]
  request.r(i15977[8], i15977[9], 0, i15976, 'worldCamera')
  i15976.overrideSorting = !!i15977[10]
  i15976.pixelPerfect = !!i15977[11]
  i15976.targetDisplay = i15977[12]
  i15976.overridePixelPerfect = !!i15977[13]
  i15976.enabled = !!i15977[14]
  return i15976
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i15978 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i15979 = data
  i15978.m_UiScaleMode = i15979[0]
  i15978.m_ReferencePixelsPerUnit = i15979[1]
  i15978.m_ScaleFactor = i15979[2]
  i15978.m_ReferenceResolution = new pc.Vec2( i15979[3], i15979[4] )
  i15978.m_ScreenMatchMode = i15979[5]
  i15978.m_MatchWidthOrHeight = i15979[6]
  i15978.m_PhysicalUnit = i15979[7]
  i15978.m_FallbackScreenDPI = i15979[8]
  i15978.m_DefaultSpriteDPI = i15979[9]
  i15978.m_DynamicPixelsPerUnit = i15979[10]
  i15978.m_PresetInfoIsWorld = !!i15979[11]
  return i15978
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i15980 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i15981 = data
  i15980.m_IgnoreReversedGraphics = !!i15981[0]
  i15980.m_BlockingObjects = i15981[1]
  i15980.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i15981[2] )
  return i15980
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i15982 = root || request.c( 'Playable.GameManager' )
  var i15983 = data
  i15982.EventCountdownEndGame = request.d('System.Action', i15983[0], i15982.EventCountdownEndGame)
  i15982._totalEvent = i15983[1]
  i15982._endTime = i15983[2]
  request.r(i15983[3], i15983[4], 0, i15982, '_backgroundMusic')
  request.r(i15983[5], i15983[6], 0, i15982, '_backgroundTexture')
  request.r(i15983[7], i15983[8], 0, i15982, '_btnBlock')
  request.r(i15983[9], i15983[10], 0, i15982, '_background')
  request.r(i15983[11], i15983[12], 0, i15982, '_progressFillImage')
  request.r(i15983[13], i15983[14], 0, i15982, '_progressText')
  i15982._progressTweenDuration = i15983[15]
  request.r(i15983[16], i15983[17], 0, i15982, '_timerFillImage')
  request.r(i15983[18], i15983[19], 0, i15982, '_timerText')
  i15982._timerPunchScale = i15983[20]
  return i15982
}

Deserializers["System.Action"] = function (request, data, root) {
  var i15984 = root || request.c( 'System.Action' )
  var i15985 = data
  return i15984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i15986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i15987 = data
  i15986.cullTransparentMesh = !!i15987[0]
  return i15986
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i15988 = root || request.c( 'UnityEngine.UI.Image' )
  var i15989 = data
  request.r(i15989[0], i15989[1], 0, i15988, 'm_Sprite')
  i15988.m_Type = i15989[2]
  i15988.m_PreserveAspect = !!i15989[3]
  i15988.m_FillCenter = !!i15989[4]
  i15988.m_FillMethod = i15989[5]
  i15988.m_FillAmount = i15989[6]
  i15988.m_FillClockwise = !!i15989[7]
  i15988.m_FillOrigin = i15989[8]
  i15988.m_UseSpriteMesh = !!i15989[9]
  i15988.m_PixelsPerUnitMultiplier = i15989[10]
  request.r(i15989[11], i15989[12], 0, i15988, 'm_Material')
  i15988.m_Maskable = !!i15989[13]
  i15988.m_Color = new pc.Color(i15989[14], i15989[15], i15989[16], i15989[17])
  i15988.m_RaycastTarget = !!i15989[18]
  i15988.m_RaycastPadding = new pc.Vec4( i15989[19], i15989[20], i15989[21], i15989[22] )
  return i15988
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i15990 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i15991 = data
  request.r(i15991[0], i15991[1], 0, i15990, 'm_Texture')
  i15990.m_UVRect = UnityEngine.Rect.MinMaxRect(i15991[2], i15991[3], i15991[4], i15991[5])
  request.r(i15991[6], i15991[7], 0, i15990, 'm_Material')
  i15990.m_Maskable = !!i15991[8]
  i15990.m_Color = new pc.Color(i15991[9], i15991[10], i15991[11], i15991[12])
  i15990.m_RaycastTarget = !!i15991[13]
  i15990.m_RaycastPadding = new pc.Vec4( i15991[14], i15991[15], i15991[16], i15991[17] )
  return i15990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i15992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i15993 = data
  request.r(i15993[0], i15993[1], 0, i15992, 'clip')
  request.r(i15993[2], i15993[3], 0, i15992, 'outputAudioMixerGroup')
  i15992.playOnAwake = !!i15993[4]
  i15992.loop = !!i15993[5]
  i15992.time = i15993[6]
  i15992.volume = i15993[7]
  i15992.pitch = i15993[8]
  i15992.enabled = !!i15993[9]
  return i15992
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i15994 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i15995 = data
  i15994.m_hasFontAssetChanged = !!i15995[0]
  request.r(i15995[1], i15995[2], 0, i15994, 'm_baseMaterial')
  i15994.m_maskOffset = new pc.Vec4( i15995[3], i15995[4], i15995[5], i15995[6] )
  i15994.m_text = i15995[7]
  i15994.m_isRightToLeft = !!i15995[8]
  request.r(i15995[9], i15995[10], 0, i15994, 'm_fontAsset')
  request.r(i15995[11], i15995[12], 0, i15994, 'm_sharedMaterial')
  var i15997 = i15995[13]
  var i15996 = []
  for(var i = 0; i < i15997.length; i += 2) {
  request.r(i15997[i + 0], i15997[i + 1], 2, i15996, '')
  }
  i15994.m_fontSharedMaterials = i15996
  request.r(i15995[14], i15995[15], 0, i15994, 'm_fontMaterial')
  var i15999 = i15995[16]
  var i15998 = []
  for(var i = 0; i < i15999.length; i += 2) {
  request.r(i15999[i + 0], i15999[i + 1], 2, i15998, '')
  }
  i15994.m_fontMaterials = i15998
  i15994.m_fontColor32 = UnityEngine.Color32.ConstructColor(i15995[17], i15995[18], i15995[19], i15995[20])
  i15994.m_fontColor = new pc.Color(i15995[21], i15995[22], i15995[23], i15995[24])
  i15994.m_enableVertexGradient = !!i15995[25]
  i15994.m_colorMode = i15995[26]
  i15994.m_fontColorGradient = request.d('TMPro.VertexGradient', i15995[27], i15994.m_fontColorGradient)
  request.r(i15995[28], i15995[29], 0, i15994, 'm_fontColorGradientPreset')
  request.r(i15995[30], i15995[31], 0, i15994, 'm_spriteAsset')
  i15994.m_tintAllSprites = !!i15995[32]
  request.r(i15995[33], i15995[34], 0, i15994, 'm_StyleSheet')
  i15994.m_TextStyleHashCode = i15995[35]
  i15994.m_overrideHtmlColors = !!i15995[36]
  i15994.m_faceColor = UnityEngine.Color32.ConstructColor(i15995[37], i15995[38], i15995[39], i15995[40])
  i15994.m_fontSize = i15995[41]
  i15994.m_fontSizeBase = i15995[42]
  i15994.m_fontWeight = i15995[43]
  i15994.m_enableAutoSizing = !!i15995[44]
  i15994.m_fontSizeMin = i15995[45]
  i15994.m_fontSizeMax = i15995[46]
  i15994.m_fontStyle = i15995[47]
  i15994.m_HorizontalAlignment = i15995[48]
  i15994.m_VerticalAlignment = i15995[49]
  i15994.m_textAlignment = i15995[50]
  i15994.m_characterSpacing = i15995[51]
  i15994.m_wordSpacing = i15995[52]
  i15994.m_lineSpacing = i15995[53]
  i15994.m_lineSpacingMax = i15995[54]
  i15994.m_paragraphSpacing = i15995[55]
  i15994.m_charWidthMaxAdj = i15995[56]
  i15994.m_TextWrappingMode = i15995[57]
  i15994.m_wordWrappingRatios = i15995[58]
  i15994.m_overflowMode = i15995[59]
  request.r(i15995[60], i15995[61], 0, i15994, 'm_linkedTextComponent')
  request.r(i15995[62], i15995[63], 0, i15994, 'parentLinkedComponent')
  i15994.m_enableKerning = !!i15995[64]
  var i16001 = i15995[65]
  var i16000 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i16001.length; i += 1) {
    i16000.add(i16001[i + 0]);
  }
  i15994.m_ActiveFontFeatures = i16000
  i15994.m_enableExtraPadding = !!i15995[66]
  i15994.checkPaddingRequired = !!i15995[67]
  i15994.m_isRichText = !!i15995[68]
  i15994.m_parseCtrlCharacters = !!i15995[69]
  i15994.m_isOrthographic = !!i15995[70]
  i15994.m_isCullingEnabled = !!i15995[71]
  i15994.m_horizontalMapping = i15995[72]
  i15994.m_verticalMapping = i15995[73]
  i15994.m_uvLineOffset = i15995[74]
  i15994.m_geometrySortingOrder = i15995[75]
  i15994.m_IsTextObjectScaleStatic = !!i15995[76]
  i15994.m_VertexBufferAutoSizeReduction = !!i15995[77]
  i15994.m_useMaxVisibleDescender = !!i15995[78]
  i15994.m_pageToDisplay = i15995[79]
  i15994.m_margin = new pc.Vec4( i15995[80], i15995[81], i15995[82], i15995[83] )
  i15994.m_isUsingLegacyAnimationComponent = !!i15995[84]
  i15994.m_isVolumetricText = !!i15995[85]
  request.r(i15995[86], i15995[87], 0, i15994, 'm_Material')
  i15994.m_EmojiFallbackSupport = !!i15995[88]
  i15994.m_Maskable = !!i15995[89]
  i15994.m_Color = new pc.Color(i15995[90], i15995[91], i15995[92], i15995[93])
  i15994.m_RaycastTarget = !!i15995[94]
  i15994.m_RaycastPadding = new pc.Vec4( i15995[95], i15995[96], i15995[97], i15995[98] )
  return i15994
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i16004 = root || request.c( 'TMPro.VertexGradient' )
  var i16005 = data
  i16004.topLeft = new pc.Color(i16005[0], i16005[1], i16005[2], i16005[3])
  i16004.topRight = new pc.Color(i16005[4], i16005[5], i16005[6], i16005[7])
  i16004.bottomLeft = new pc.Color(i16005[8], i16005[9], i16005[10], i16005[11])
  i16004.bottomRight = new pc.Color(i16005[12], i16005[13], i16005[14], i16005[15])
  return i16004
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i16008 = root || request.c( 'UnityEngine.UI.Button' )
  var i16009 = data
  i16008.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i16009[0], i16008.m_OnClick)
  i16008.m_Navigation = request.d('UnityEngine.UI.Navigation', i16009[1], i16008.m_Navigation)
  i16008.m_Transition = i16009[2]
  i16008.m_Colors = request.d('UnityEngine.UI.ColorBlock', i16009[3], i16008.m_Colors)
  i16008.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i16009[4], i16008.m_SpriteState)
  i16008.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i16009[5], i16008.m_AnimationTriggers)
  i16008.m_Interactable = !!i16009[6]
  request.r(i16009[7], i16009[8], 0, i16008, 'm_TargetGraphic')
  return i16008
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i16010 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i16011 = data
  i16010.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i16011[0], i16010.m_PersistentCalls)
  return i16010
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i16012 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i16013 = data
  var i16015 = i16013[0]
  var i16014 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i16015.length; i += 1) {
    i16014.add(request.d('UnityEngine.Events.PersistentCall', i16015[i + 0]));
  }
  i16012.m_Calls = i16014
  return i16012
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i16018 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i16019 = data
  request.r(i16019[0], i16019[1], 0, i16018, 'm_Target')
  i16018.m_TargetAssemblyTypeName = i16019[2]
  i16018.m_MethodName = i16019[3]
  i16018.m_Mode = i16019[4]
  i16018.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i16019[5], i16018.m_Arguments)
  i16018.m_CallState = i16019[6]
  return i16018
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i16020 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i16021 = data
  i16020.m_Mode = i16021[0]
  i16020.m_WrapAround = !!i16021[1]
  request.r(i16021[2], i16021[3], 0, i16020, 'm_SelectOnUp')
  request.r(i16021[4], i16021[5], 0, i16020, 'm_SelectOnDown')
  request.r(i16021[6], i16021[7], 0, i16020, 'm_SelectOnLeft')
  request.r(i16021[8], i16021[9], 0, i16020, 'm_SelectOnRight')
  return i16020
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i16022 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i16023 = data
  i16022.m_NormalColor = new pc.Color(i16023[0], i16023[1], i16023[2], i16023[3])
  i16022.m_HighlightedColor = new pc.Color(i16023[4], i16023[5], i16023[6], i16023[7])
  i16022.m_PressedColor = new pc.Color(i16023[8], i16023[9], i16023[10], i16023[11])
  i16022.m_SelectedColor = new pc.Color(i16023[12], i16023[13], i16023[14], i16023[15])
  i16022.m_DisabledColor = new pc.Color(i16023[16], i16023[17], i16023[18], i16023[19])
  i16022.m_ColorMultiplier = i16023[20]
  i16022.m_FadeDuration = i16023[21]
  return i16022
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i16024 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i16025 = data
  request.r(i16025[0], i16025[1], 0, i16024, 'm_HighlightedSprite')
  request.r(i16025[2], i16025[3], 0, i16024, 'm_PressedSprite')
  request.r(i16025[4], i16025[5], 0, i16024, 'm_SelectedSprite')
  request.r(i16025[6], i16025[7], 0, i16024, 'm_DisabledSprite')
  return i16024
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i16026 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i16027 = data
  i16026.m_NormalTrigger = i16027[0]
  i16026.m_HighlightedTrigger = i16027[1]
  i16026.m_PressedTrigger = i16027[2]
  i16026.m_SelectedTrigger = i16027[3]
  i16026.m_DisabledTrigger = i16027[4]
  return i16026
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i16028 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i16029 = data
  request.r(i16029[0], i16029[1], 0, i16028, 'm_ObjectArgument')
  i16028.m_ObjectArgumentAssemblyTypeName = i16029[2]
  i16028.m_IntArgument = i16029[3]
  i16028.m_FloatArgument = i16029[4]
  i16028.m_StringArgument = i16029[5]
  i16028.m_BoolArgument = !!i16029[6]
  return i16028
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i16030 = root || request.c( 'UnityEngine.UI.Mask' )
  var i16031 = data
  i16030.m_ShowMaskGraphic = !!i16031[0]
  return i16030
}

Deserializers["Playable.GameController"] = function (request, data, root) {
  var i16032 = root || request.c( 'Playable.GameController' )
  var i16033 = data
  return i16032
}

Deserializers["Playable.BG"] = function (request, data, root) {
  var i16034 = root || request.c( 'Playable.BG' )
  var i16035 = data
  request.r(i16035[0], i16035[1], 0, i16034, '_bg')
  request.r(i16035[2], i16035[3], 0, i16034, '_sprite')
  i16034._onPlay = request.d('UnityEngine.Events.UnityEvent', i16035[4], i16034._onPlay)
  request.r(i16035[5], i16035[6], 0, i16034, '_source')
  return i16034
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i16036 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i16037 = data
  i16036.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i16037[0], i16036.m_PersistentCalls)
  return i16036
}

Deserializers["Playable.Ceiling"] = function (request, data, root) {
  var i16038 = root || request.c( 'Playable.Ceiling' )
  var i16039 = data
  request.r(i16039[0], i16039[1], 0, i16038, '_fan')
  request.r(i16039[2], i16039[3], 0, i16038, '_airCondition')
  request.r(i16039[4], i16039[5], 0, i16038, '_clip')
  i16038._onPlay = request.d('UnityEngine.Events.UnityEvent', i16039[6], i16038._onPlay)
  request.r(i16039[7], i16039[8], 0, i16038, '_source')
  return i16038
}

Deserializers["Playable.Door"] = function (request, data, root) {
  var i16040 = root || request.c( 'Playable.Door' )
  var i16041 = data
  request.r(i16041[0], i16041[1], 0, i16040, '_skeleton')
  i16040._animName = i16041[2]
  request.r(i16041[3], i16041[4], 0, i16040, '_door')
  i16040._onPlay = request.d('UnityEngine.Events.UnityEvent', i16041[5], i16040._onPlay)
  request.r(i16041[6], i16041[7], 0, i16040, '_source')
  return i16040
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i16042 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i16043 = data
  request.r(i16043[0], i16043[1], 0, i16042, 'skeletonDataAsset')
  request.r(i16043[2], i16043[3], 0, i16042, 'additiveMaterial')
  request.r(i16043[4], i16043[5], 0, i16042, 'multiplyMaterial')
  request.r(i16043[6], i16043[7], 0, i16042, 'screenMaterial')
  i16042.initialSkinName = i16043[8]
  i16042.initialFlipX = !!i16043[9]
  i16042.initialFlipY = !!i16043[10]
  i16042.startingAnimation = i16043[11]
  i16042.startingLoop = !!i16043[12]
  i16042.timeScale = i16043[13]
  i16042.freeze = !!i16043[14]
  i16042.layoutScaleMode = i16043[15]
  i16042.updateWhenInvisible = i16043[16]
  i16042.allowMultipleCanvasRenderers = !!i16043[17]
  var i16045 = i16043[18]
  var i16044 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i16045.length; i += 2) {
  request.r(i16045[i + 0], i16045[i + 1], 1, i16044, '')
  }
  i16042.canvasRenderers = i16044
  i16042.enableSeparatorSlots = !!i16043[19]
  i16042.updateSeparatorPartLocation = !!i16043[20]
  i16042.updateSeparatorPartScale = !!i16043[21]
  i16042.disableMeshAssignmentOnOverride = !!i16043[22]
  i16042.referenceSize = new pc.Vec2( i16043[23], i16043[24] )
  i16042.referenceScale = i16043[25]
  i16042.rectTransformSize = new pc.Vec2( i16043[26], i16043[27] )
  i16042.editReferenceRect = !!i16043[28]
  var i16047 = i16043[29]
  var i16046 = []
  for(var i = 0; i < i16047.length; i += 1) {
    i16046.push( i16047[i + 0] );
  }
  i16042.separatorSlotNames = i16046
  var i16049 = i16043[30]
  var i16048 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i16049.length; i += 2) {
  request.r(i16049[i + 0], i16049[i + 1], 1, i16048, '')
  }
  i16042.separatorParts = i16048
  i16042.meshGenerator = request.d('Spine.Unity.MeshGenerator', i16043[31], i16042.meshGenerator)
  i16042.updateTiming = i16043[32]
  i16042.unscaledTime = !!i16043[33]
  request.r(i16043[34], i16043[35], 0, i16042, 'm_Material')
  i16042.m_Maskable = !!i16043[36]
  i16042.m_Color = new pc.Color(i16043[37], i16043[38], i16043[39], i16043[40])
  i16042.m_RaycastTarget = !!i16043[41]
  i16042.m_RaycastPadding = new pc.Vec4( i16043[42], i16043[43], i16043[44], i16043[45] )
  return i16042
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i16056 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i16057 = data
  i16056.settings = request.d('Spine.Unity.MeshGenerator+Settings', i16057[0], i16056.settings)
  return i16056
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i16058 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i16059 = data
  i16058.useClipping = !!i16059[0]
  i16058.zSpacing = i16059[1]
  i16058.pmaVertexColors = !!i16059[2]
  i16058.tintBlack = !!i16059[3]
  i16058.canvasGroupTintBlack = !!i16059[4]
  i16058.calculateTangents = !!i16059[5]
  i16058.addNormals = !!i16059[6]
  i16058.immutableTriangles = !!i16059[7]
  return i16058
}

Deserializers["Playable.Bed"] = function (request, data, root) {
  var i16060 = root || request.c( 'Playable.Bed' )
  var i16061 = data
  request.r(i16061[0], i16061[1], 0, i16060, '_skeleton')
  i16060._animName = i16061[2]
  request.r(i16061[3], i16061[4], 0, i16060, '_bed')
  request.r(i16061[5], i16061[6], 0, i16060, '_clip')
  i16060._onPlay = request.d('UnityEngine.Events.UnityEvent', i16061[7], i16060._onPlay)
  request.r(i16061[8], i16061[9], 0, i16060, '_source')
  return i16060
}

Deserializers["Playable.Bathroom"] = function (request, data, root) {
  var i16062 = root || request.c( 'Playable.Bathroom' )
  var i16063 = data
  request.r(i16063[0], i16063[1], 0, i16062, '_skeleton')
  i16062._animName = i16063[2]
  request.r(i16063[3], i16063[4], 0, i16062, '_mirror')
  request.r(i16063[5], i16063[6], 0, i16062, '_bathroom')
  request.r(i16063[7], i16063[8], 0, i16062, '_clip')
  i16062._onPlay = request.d('UnityEngine.Events.UnityEvent', i16063[9], i16062._onPlay)
  request.r(i16063[10], i16063[11], 0, i16062, '_source')
  return i16062
}

Deserializers["Playable.Computer"] = function (request, data, root) {
  var i16064 = root || request.c( 'Playable.Computer' )
  var i16065 = data
  request.r(i16065[0], i16065[1], 0, i16064, '_skeleton')
  i16064._animName = i16065[2]
  request.r(i16065[3], i16065[4], 0, i16064, '_computerOld')
  request.r(i16065[5], i16065[6], 0, i16064, '_computer')
  i16064._onPlay = request.d('UnityEngine.Events.UnityEvent', i16065[7], i16064._onPlay)
  request.r(i16065[8], i16065[9], 0, i16064, '_source')
  return i16064
}

Deserializers["Playable.Toilet"] = function (request, data, root) {
  var i16066 = root || request.c( 'Playable.Toilet' )
  var i16067 = data
  request.r(i16067[0], i16067[1], 0, i16066, '_skeleton')
  i16066._animName = i16067[2]
  request.r(i16067[3], i16067[4], 0, i16066, '_toilet')
  request.r(i16067[5], i16067[6], 0, i16066, '_clip')
  i16066._onPlay = request.d('UnityEngine.Events.UnityEvent', i16067[7], i16066._onPlay)
  request.r(i16067[8], i16067[9], 0, i16066, '_source')
  return i16066
}

Deserializers["Playable.ItemRoot"] = function (request, data, root) {
  var i16068 = root || request.c( 'Playable.ItemRoot' )
  var i16069 = data
  var i16071 = i16069[0]
  var i16070 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.Item')))
  for(var i = 0; i < i16071.length; i += 2) {
  request.r(i16071[i + 0], i16071[i + 1], 1, i16070, '')
  }
  i16068._itemList = i16070
  request.r(i16069[1], i16069[2], 0, i16068, '_canvas')
  request.r(i16069[3], i16069[4], 0, i16068, '_camera')
  return i16068
}

Deserializers["Playable.Item"] = function (request, data, root) {
  var i16074 = root || request.c( 'Playable.Item' )
  var i16075 = data
  return i16074
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i16076 = root || request.c( 'Playable.AudioManager' )
  var i16077 = data
  var i16079 = i16077[0]
  var i16078 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i16079.length; i += 1) {
    i16078.add(request.d('Playable.SoundData', i16079[i + 0]));
  }
  i16076._sounds = i16078
  request.r(i16077[1], i16077[2], 0, i16076, '_audioMusic')
  request.r(i16077[3], i16077[4], 0, i16076, '_audioSound')
  return i16076
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i16082 = root || request.c( 'Playable.SoundData' )
  var i16083 = data
  i16082.Type = i16083[0]
  request.r(i16083[1], i16083[2], 0, i16082, 'Clip')
  return i16082
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i16084 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i16085 = data
  request.r(i16085[0], i16085[1], 0, i16084, 'm_FirstSelected')
  i16084.m_sendNavigationEvents = !!i16085[2]
  i16084.m_DragThreshold = i16085[3]
  return i16084
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i16086 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i16087 = data
  i16086.m_HorizontalAxis = i16087[0]
  i16086.m_VerticalAxis = i16087[1]
  i16086.m_SubmitButton = i16087[2]
  i16086.m_CancelButton = i16087[3]
  i16086.m_InputActionsPerSecond = i16087[4]
  i16086.m_RepeatDelay = i16087[5]
  i16086.m_ForceModuleActive = !!i16087[6]
  i16086.m_SendPointerHoverToParent = !!i16087[7]
  return i16086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i16088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i16089 = data
  i16088.ambientIntensity = i16089[0]
  i16088.reflectionIntensity = i16089[1]
  i16088.ambientMode = i16089[2]
  i16088.ambientLight = new pc.Color(i16089[3], i16089[4], i16089[5], i16089[6])
  i16088.ambientSkyColor = new pc.Color(i16089[7], i16089[8], i16089[9], i16089[10])
  i16088.ambientGroundColor = new pc.Color(i16089[11], i16089[12], i16089[13], i16089[14])
  i16088.ambientEquatorColor = new pc.Color(i16089[15], i16089[16], i16089[17], i16089[18])
  i16088.fogColor = new pc.Color(i16089[19], i16089[20], i16089[21], i16089[22])
  i16088.fogEndDistance = i16089[23]
  i16088.fogStartDistance = i16089[24]
  i16088.fogDensity = i16089[25]
  i16088.fog = !!i16089[26]
  request.r(i16089[27], i16089[28], 0, i16088, 'skybox')
  i16088.fogMode = i16089[29]
  var i16091 = i16089[30]
  var i16090 = []
  for(var i = 0; i < i16091.length; i += 1) {
    i16090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i16091[i + 0]) );
  }
  i16088.lightmaps = i16090
  i16088.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i16089[31], i16088.lightProbes)
  i16088.lightmapsMode = i16089[32]
  i16088.mixedBakeMode = i16089[33]
  i16088.environmentLightingMode = i16089[34]
  i16088.ambientProbe = new pc.SphericalHarmonicsL2(i16089[35])
  request.r(i16089[36], i16089[37], 0, i16088, 'customReflection')
  request.r(i16089[38], i16089[39], 0, i16088, 'defaultReflection')
  i16088.defaultReflectionMode = i16089[40]
  i16088.defaultReflectionResolution = i16089[41]
  i16088.sunLightObjectId = i16089[42]
  i16088.pixelLightCount = i16089[43]
  i16088.defaultReflectionHDR = !!i16089[44]
  i16088.hasLightDataAsset = !!i16089[45]
  i16088.hasManualGenerate = !!i16089[46]
  return i16088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i16094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i16095 = data
  request.r(i16095[0], i16095[1], 0, i16094, 'lightmapColor')
  request.r(i16095[2], i16095[3], 0, i16094, 'lightmapDirection')
  request.r(i16095[4], i16095[5], 0, i16094, 'shadowMask')
  return i16094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i16096 = root || new UnityEngine.LightProbes()
  var i16097 = data
  return i16096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i16104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i16105 = data
  var i16107 = i16105[0]
  var i16106 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i16107.length; i += 1) {
    i16106.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i16107[i + 0]));
  }
  i16104.ShaderCompilationErrors = i16106
  i16104.name = i16105[1]
  i16104.guid = i16105[2]
  var i16109 = i16105[3]
  var i16108 = []
  for(var i = 0; i < i16109.length; i += 1) {
    i16108.push( i16109[i + 0] );
  }
  i16104.shaderDefinedKeywords = i16108
  var i16111 = i16105[4]
  var i16110 = []
  for(var i = 0; i < i16111.length; i += 1) {
    i16110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i16111[i + 0]) );
  }
  i16104.passes = i16110
  var i16113 = i16105[5]
  var i16112 = []
  for(var i = 0; i < i16113.length; i += 1) {
    i16112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i16113[i + 0]) );
  }
  i16104.usePasses = i16112
  var i16115 = i16105[6]
  var i16114 = []
  for(var i = 0; i < i16115.length; i += 1) {
    i16114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i16115[i + 0]) );
  }
  i16104.defaultParameterValues = i16114
  request.r(i16105[7], i16105[8], 0, i16104, 'unityFallbackShader')
  i16104.readDepth = !!i16105[9]
  i16104.hasDepthOnlyPass = !!i16105[10]
  i16104.isCreatedByShaderGraph = !!i16105[11]
  i16104.disableBatching = !!i16105[12]
  i16104.compiled = !!i16105[13]
  return i16104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i16118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i16119 = data
  i16118.shaderName = i16119[0]
  i16118.errorMessage = i16119[1]
  return i16118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i16122 = root || new pc.UnityShaderPass()
  var i16123 = data
  i16122.id = i16123[0]
  i16122.subShaderIndex = i16123[1]
  i16122.name = i16123[2]
  i16122.passType = i16123[3]
  i16122.grabPassTextureName = i16123[4]
  i16122.usePass = !!i16123[5]
  i16122.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i16123[6], i16122.zTest)
  i16122.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i16123[7], i16122.zWrite)
  i16122.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i16123[8], i16122.culling)
  i16122.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i16123[9], i16122.blending)
  i16122.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i16123[10], i16122.alphaBlending)
  i16122.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i16123[11], i16122.colorWriteMask)
  i16122.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i16123[12], i16122.offsetUnits)
  i16122.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i16123[13], i16122.offsetFactor)
  i16122.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i16123[14], i16122.stencilRef)
  i16122.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i16123[15], i16122.stencilReadMask)
  i16122.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i16123[16], i16122.stencilWriteMask)
  i16122.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i16123[17], i16122.stencilOp)
  i16122.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i16123[18], i16122.stencilOpFront)
  i16122.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i16123[19], i16122.stencilOpBack)
  var i16125 = i16123[20]
  var i16124 = []
  for(var i = 0; i < i16125.length; i += 1) {
    i16124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i16125[i + 0]) );
  }
  i16122.tags = i16124
  var i16127 = i16123[21]
  var i16126 = []
  for(var i = 0; i < i16127.length; i += 1) {
    i16126.push( i16127[i + 0] );
  }
  i16122.passDefinedKeywords = i16126
  var i16129 = i16123[22]
  var i16128 = []
  for(var i = 0; i < i16129.length; i += 1) {
    i16128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i16129[i + 0]) );
  }
  i16122.passDefinedKeywordGroups = i16128
  var i16131 = i16123[23]
  var i16130 = []
  for(var i = 0; i < i16131.length; i += 1) {
    i16130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i16131[i + 0]) );
  }
  i16122.variants = i16130
  var i16133 = i16123[24]
  var i16132 = []
  for(var i = 0; i < i16133.length; i += 1) {
    i16132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i16133[i + 0]) );
  }
  i16122.excludedVariants = i16132
  i16122.hasDepthReader = !!i16123[25]
  return i16122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i16134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i16135 = data
  i16134.val = i16135[0]
  i16134.name = i16135[1]
  return i16134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i16136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i16137 = data
  i16136.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i16137[0], i16136.src)
  i16136.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i16137[1], i16136.dst)
  i16136.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i16137[2], i16136.op)
  return i16136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i16138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i16139 = data
  i16138.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i16139[0], i16138.pass)
  i16138.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i16139[1], i16138.fail)
  i16138.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i16139[2], i16138.zFail)
  i16138.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i16139[3], i16138.comp)
  return i16138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i16142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i16143 = data
  i16142.name = i16143[0]
  i16142.value = i16143[1]
  return i16142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i16146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i16147 = data
  var i16149 = i16147[0]
  var i16148 = []
  for(var i = 0; i < i16149.length; i += 1) {
    i16148.push( i16149[i + 0] );
  }
  i16146.keywords = i16148
  i16146.hasDiscard = !!i16147[1]
  return i16146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i16152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i16153 = data
  i16152.passId = i16153[0]
  i16152.subShaderIndex = i16153[1]
  var i16155 = i16153[2]
  var i16154 = []
  for(var i = 0; i < i16155.length; i += 1) {
    i16154.push( i16155[i + 0] );
  }
  i16152.keywords = i16154
  i16152.vertexProgram = i16153[3]
  i16152.fragmentProgram = i16153[4]
  i16152.exportedForWebGl2 = !!i16153[5]
  i16152.readDepth = !!i16153[6]
  return i16152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i16158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i16159 = data
  request.r(i16159[0], i16159[1], 0, i16158, 'shader')
  i16158.pass = i16159[2]
  return i16158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i16162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i16163 = data
  i16162.name = i16163[0]
  i16162.type = i16163[1]
  i16162.value = new pc.Vec4( i16163[2], i16163[3], i16163[4], i16163[5] )
  i16162.textureValue = i16163[6]
  i16162.shaderPropertyFlag = i16163[7]
  return i16162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i16164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i16165 = data
  i16164.name = i16165[0]
  request.r(i16165[1], i16165[2], 0, i16164, 'texture')
  i16164.aabb = i16165[3]
  i16164.vertices = i16165[4]
  i16164.triangles = i16165[5]
  i16164.textureRect = UnityEngine.Rect.MinMaxRect(i16165[6], i16165[7], i16165[8], i16165[9])
  i16164.packedRect = UnityEngine.Rect.MinMaxRect(i16165[10], i16165[11], i16165[12], i16165[13])
  i16164.border = new pc.Vec4( i16165[14], i16165[15], i16165[16], i16165[17] )
  i16164.transparency = i16165[18]
  i16164.bounds = i16165[19]
  i16164.pixelsPerUnit = i16165[20]
  i16164.textureWidth = i16165[21]
  i16164.textureHeight = i16165[22]
  i16164.nativeSize = new pc.Vec2( i16165[23], i16165[24] )
  i16164.pivot = new pc.Vec2( i16165[25], i16165[26] )
  i16164.textureRectOffset = new pc.Vec2( i16165[27], i16165[28] )
  return i16164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i16166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i16167 = data
  i16166.name = i16167[0]
  return i16166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i16168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i16169 = data
  i16168.name = i16169[0]
  i16168.ascent = i16169[1]
  i16168.originalLineHeight = i16169[2]
  i16168.fontSize = i16169[3]
  var i16171 = i16169[4]
  var i16170 = []
  for(var i = 0; i < i16171.length; i += 1) {
    i16170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i16171[i + 0]) );
  }
  i16168.characterInfo = i16170
  request.r(i16169[5], i16169[6], 0, i16168, 'texture')
  i16168.originalFontSize = i16169[7]
  return i16168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i16174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i16175 = data
  i16174.index = i16175[0]
  i16174.advance = i16175[1]
  i16174.bearing = i16175[2]
  i16174.glyphWidth = i16175[3]
  i16174.glyphHeight = i16175[4]
  i16174.minX = i16175[5]
  i16174.maxX = i16175[6]
  i16174.minY = i16175[7]
  i16174.maxY = i16175[8]
  i16174.uvBottomLeftX = i16175[9]
  i16174.uvBottomLeftY = i16175[10]
  i16174.uvBottomRightX = i16175[11]
  i16174.uvBottomRightY = i16175[12]
  i16174.uvTopLeftX = i16175[13]
  i16174.uvTopLeftY = i16175[14]
  i16174.uvTopRightX = i16175[15]
  i16174.uvTopRightY = i16175[16]
  return i16174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i16176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i16177 = data
  i16176.name = i16177[0]
  i16176.bytes64 = i16177[1]
  i16176.data = i16177[2]
  return i16176
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i16178 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i16179 = data
  i16178.normalStyle = i16179[0]
  i16178.normalSpacingOffset = i16179[1]
  i16178.boldStyle = i16179[2]
  i16178.boldSpacing = i16179[3]
  i16178.italicStyle = i16179[4]
  i16178.tabSize = i16179[5]
  request.r(i16179[6], i16179[7], 0, i16178, 'atlas')
  i16178.m_SourceFontFileGUID = i16179[8]
  i16178.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i16179[9], i16178.m_CreationSettings)
  request.r(i16179[10], i16179[11], 0, i16178, 'm_SourceFontFile')
  i16178.m_SourceFontFilePath = i16179[12]
  i16178.m_AtlasPopulationMode = i16179[13]
  i16178.InternalDynamicOS = !!i16179[14]
  var i16181 = i16179[15]
  var i16180 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i16181.length; i += 1) {
    i16180.add(request.d('UnityEngine.TextCore.Glyph', i16181[i + 0]));
  }
  i16178.m_GlyphTable = i16180
  var i16183 = i16179[16]
  var i16182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i16183.length; i += 1) {
    i16182.add(request.d('TMPro.TMP_Character', i16183[i + 0]));
  }
  i16178.m_CharacterTable = i16182
  var i16185 = i16179[17]
  var i16184 = []
  for(var i = 0; i < i16185.length; i += 2) {
  request.r(i16185[i + 0], i16185[i + 1], 2, i16184, '')
  }
  i16178.m_AtlasTextures = i16184
  i16178.m_AtlasTextureIndex = i16179[18]
  i16178.m_IsMultiAtlasTexturesEnabled = !!i16179[19]
  i16178.m_GetFontFeatures = !!i16179[20]
  i16178.m_ClearDynamicDataOnBuild = !!i16179[21]
  i16178.m_AtlasWidth = i16179[22]
  i16178.m_AtlasHeight = i16179[23]
  i16178.m_AtlasPadding = i16179[24]
  i16178.m_AtlasRenderMode = i16179[25]
  var i16187 = i16179[26]
  var i16186 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i16187.length; i += 1) {
    i16186.add(request.d('UnityEngine.TextCore.GlyphRect', i16187[i + 0]));
  }
  i16178.m_UsedGlyphRects = i16186
  var i16189 = i16179[27]
  var i16188 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i16189.length; i += 1) {
    i16188.add(request.d('UnityEngine.TextCore.GlyphRect', i16189[i + 0]));
  }
  i16178.m_FreeGlyphRects = i16188
  i16178.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i16179[28], i16178.m_FontFeatureTable)
  i16178.m_ShouldReimportFontFeatures = !!i16179[29]
  var i16191 = i16179[30]
  var i16190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i16191.length; i += 2) {
  request.r(i16191[i + 0], i16191[i + 1], 1, i16190, '')
  }
  i16178.m_FallbackFontAssetTable = i16190
  var i16193 = i16179[31]
  var i16192 = []
  for(var i = 0; i < i16193.length; i += 1) {
    i16192.push( request.d('TMPro.TMP_FontWeightPair', i16193[i + 0]) );
  }
  i16178.m_FontWeightTable = i16192
  var i16195 = i16179[32]
  var i16194 = []
  for(var i = 0; i < i16195.length; i += 1) {
    i16194.push( request.d('TMPro.TMP_FontWeightPair', i16195[i + 0]) );
  }
  i16178.fontWeights = i16194
  i16178.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i16179[33], i16178.m_fontInfo)
  var i16197 = i16179[34]
  var i16196 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i16197.length; i += 1) {
    i16196.add(request.d('TMPro.TMP_Glyph', i16197[i + 0]));
  }
  i16178.m_glyphInfoList = i16196
  i16178.m_KerningTable = request.d('TMPro.KerningTable', i16179[35], i16178.m_KerningTable)
  var i16199 = i16179[36]
  var i16198 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i16199.length; i += 2) {
  request.r(i16199[i + 0], i16199[i + 1], 1, i16198, '')
  }
  i16178.fallbackFontAssets = i16198
  i16178.m_Version = i16179[37]
  i16178.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i16179[38], i16178.m_FaceInfo)
  request.r(i16179[39], i16179[40], 0, i16178, 'm_Material')
  return i16178
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i16200 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i16201 = data
  i16200.sourceFontFileName = i16201[0]
  i16200.sourceFontFileGUID = i16201[1]
  i16200.faceIndex = i16201[2]
  i16200.pointSizeSamplingMode = i16201[3]
  i16200.pointSize = i16201[4]
  i16200.padding = i16201[5]
  i16200.paddingMode = i16201[6]
  i16200.packingMode = i16201[7]
  i16200.atlasWidth = i16201[8]
  i16200.atlasHeight = i16201[9]
  i16200.characterSetSelectionMode = i16201[10]
  i16200.characterSequence = i16201[11]
  i16200.referencedFontAssetGUID = i16201[12]
  i16200.referencedTextAssetGUID = i16201[13]
  i16200.fontStyle = i16201[14]
  i16200.fontStyleModifier = i16201[15]
  i16200.renderMode = i16201[16]
  i16200.includeFontFeatures = !!i16201[17]
  return i16200
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i16204 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i16205 = data
  i16204.m_Index = i16205[0]
  i16204.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i16205[1], i16204.m_Metrics)
  i16204.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i16205[2], i16204.m_GlyphRect)
  i16204.m_Scale = i16205[3]
  i16204.m_AtlasIndex = i16205[4]
  i16204.m_ClassDefinitionType = i16205[5]
  return i16204
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i16206 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i16207 = data
  i16206.m_Width = i16207[0]
  i16206.m_Height = i16207[1]
  i16206.m_HorizontalBearingX = i16207[2]
  i16206.m_HorizontalBearingY = i16207[3]
  i16206.m_HorizontalAdvance = i16207[4]
  return i16206
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i16208 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i16209 = data
  i16208.m_X = i16209[0]
  i16208.m_Y = i16209[1]
  i16208.m_Width = i16209[2]
  i16208.m_Height = i16209[3]
  return i16208
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i16212 = root || request.c( 'TMPro.TMP_Character' )
  var i16213 = data
  i16212.m_ElementType = i16213[0]
  i16212.m_Unicode = i16213[1]
  i16212.m_GlyphIndex = i16213[2]
  i16212.m_Scale = i16213[3]
  return i16212
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i16218 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i16219 = data
  var i16221 = i16219[0]
  var i16220 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i16221.length; i += 1) {
    i16220.add(request.d('TMPro.MultipleSubstitutionRecord', i16221[i + 0]));
  }
  i16218.m_MultipleSubstitutionRecords = i16220
  var i16223 = i16219[1]
  var i16222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i16223.length; i += 1) {
    i16222.add(request.d('TMPro.LigatureSubstitutionRecord', i16223[i + 0]));
  }
  i16218.m_LigatureSubstitutionRecords = i16222
  var i16225 = i16219[2]
  var i16224 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i16225.length; i += 1) {
    i16224.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i16225[i + 0]));
  }
  i16218.m_GlyphPairAdjustmentRecords = i16224
  var i16227 = i16219[3]
  var i16226 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i16227.length; i += 1) {
    i16226.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i16227[i + 0]));
  }
  i16218.m_MarkToBaseAdjustmentRecords = i16226
  var i16229 = i16219[4]
  var i16228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i16229.length; i += 1) {
    i16228.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i16229[i + 0]));
  }
  i16218.m_MarkToMarkAdjustmentRecords = i16228
  return i16218
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i16232 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i16233 = data
  i16232.m_TargetGlyphID = i16233[0]
  i16232.m_SubstituteGlyphIDs = i16233[1]
  return i16232
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i16236 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i16237 = data
  i16236.m_ComponentGlyphIDs = i16237[0]
  i16236.m_LigatureGlyphID = i16237[1]
  return i16236
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i16240 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i16241 = data
  i16240.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i16241[0], i16240.m_FirstAdjustmentRecord)
  i16240.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i16241[1], i16240.m_SecondAdjustmentRecord)
  i16240.m_FeatureLookupFlags = i16241[2]
  return i16240
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i16244 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i16245 = data
  i16244.m_BaseGlyphID = i16245[0]
  i16244.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i16245[1], i16244.m_BaseGlyphAnchorPoint)
  i16244.m_MarkGlyphID = i16245[2]
  i16244.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i16245[3], i16244.m_MarkPositionAdjustment)
  return i16244
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i16248 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i16249 = data
  i16248.m_BaseMarkGlyphID = i16249[0]
  i16248.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i16249[1], i16248.m_BaseMarkGlyphAnchorPoint)
  i16248.m_CombiningMarkGlyphID = i16249[2]
  i16248.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i16249[3], i16248.m_CombiningMarkPositionAdjustment)
  return i16248
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i16254 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i16255 = data
  request.r(i16255[0], i16255[1], 0, i16254, 'regularTypeface')
  request.r(i16255[2], i16255[3], 0, i16254, 'italicTypeface')
  return i16254
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i16256 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i16257 = data
  i16256.Name = i16257[0]
  i16256.PointSize = i16257[1]
  i16256.Scale = i16257[2]
  i16256.CharacterCount = i16257[3]
  i16256.LineHeight = i16257[4]
  i16256.Baseline = i16257[5]
  i16256.Ascender = i16257[6]
  i16256.CapHeight = i16257[7]
  i16256.Descender = i16257[8]
  i16256.CenterLine = i16257[9]
  i16256.SuperscriptOffset = i16257[10]
  i16256.SubscriptOffset = i16257[11]
  i16256.SubSize = i16257[12]
  i16256.Underline = i16257[13]
  i16256.UnderlineThickness = i16257[14]
  i16256.strikethrough = i16257[15]
  i16256.strikethroughThickness = i16257[16]
  i16256.TabWidth = i16257[17]
  i16256.Padding = i16257[18]
  i16256.AtlasWidth = i16257[19]
  i16256.AtlasHeight = i16257[20]
  return i16256
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i16260 = root || request.c( 'TMPro.TMP_Glyph' )
  var i16261 = data
  i16260.id = i16261[0]
  i16260.x = i16261[1]
  i16260.y = i16261[2]
  i16260.width = i16261[3]
  i16260.height = i16261[4]
  i16260.xOffset = i16261[5]
  i16260.yOffset = i16261[6]
  i16260.xAdvance = i16261[7]
  i16260.scale = i16261[8]
  return i16260
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i16262 = root || request.c( 'TMPro.KerningTable' )
  var i16263 = data
  var i16265 = i16263[0]
  var i16264 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i16265.length; i += 1) {
    i16264.add(request.d('TMPro.KerningPair', i16265[i + 0]));
  }
  i16262.kerningPairs = i16264
  return i16262
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i16268 = root || request.c( 'TMPro.KerningPair' )
  var i16269 = data
  i16268.xOffset = i16269[0]
  i16268.m_FirstGlyph = i16269[1]
  i16268.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i16269[2], i16268.m_FirstGlyphAdjustments)
  i16268.m_SecondGlyph = i16269[3]
  i16268.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i16269[4], i16268.m_SecondGlyphAdjustments)
  i16268.m_IgnoreSpacingAdjustments = !!i16269[5]
  return i16268
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i16270 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i16271 = data
  i16270.m_FaceIndex = i16271[0]
  i16270.m_FamilyName = i16271[1]
  i16270.m_StyleName = i16271[2]
  i16270.m_PointSize = i16271[3]
  i16270.m_Scale = i16271[4]
  i16270.m_UnitsPerEM = i16271[5]
  i16270.m_LineHeight = i16271[6]
  i16270.m_AscentLine = i16271[7]
  i16270.m_CapLine = i16271[8]
  i16270.m_MeanLine = i16271[9]
  i16270.m_Baseline = i16271[10]
  i16270.m_DescentLine = i16271[11]
  i16270.m_SuperscriptOffset = i16271[12]
  i16270.m_SuperscriptSize = i16271[13]
  i16270.m_SubscriptOffset = i16271[14]
  i16270.m_SubscriptSize = i16271[15]
  i16270.m_UnderlineOffset = i16271[16]
  i16270.m_UnderlineThickness = i16271[17]
  i16270.m_StrikethroughOffset = i16271[18]
  i16270.m_StrikethroughThickness = i16271[19]
  i16270.m_TabWidth = i16271[20]
  return i16270
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i16272 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i16273 = data
  var i16275 = i16273[0]
  var i16274 = []
  for(var i = 0; i < i16275.length; i += 2) {
  request.r(i16275[i + 0], i16275[i + 1], 2, i16274, '')
  }
  i16272.atlasAssets = i16274
  i16272.scale = i16273[1]
  request.r(i16273[2], i16273[3], 0, i16272, 'skeletonJSON')
  i16272.isUpgradingBlendModeMaterials = !!i16273[4]
  i16272.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i16273[5], i16272.blendModeMaterials)
  var i16277 = i16273[6]
  var i16276 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i16277.length; i += 2) {
  request.r(i16277[i + 0], i16277[i + 1], 1, i16276, '')
  }
  i16272.skeletonDataModifiers = i16276
  var i16279 = i16273[7]
  var i16278 = []
  for(var i = 0; i < i16279.length; i += 1) {
    i16278.push( i16279[i + 0] );
  }
  i16272.fromAnimation = i16278
  var i16281 = i16273[8]
  var i16280 = []
  for(var i = 0; i < i16281.length; i += 1) {
    i16280.push( i16281[i + 0] );
  }
  i16272.toAnimation = i16280
  i16272.duration = i16273[9]
  i16272.defaultMix = i16273[10]
  request.r(i16273[11], i16273[12], 0, i16272, 'controller')
  return i16272
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i16284 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i16285 = data
  i16284.applyAdditiveMaterial = !!i16285[0]
  var i16287 = i16285[1]
  var i16286 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i16287.length; i += 1) {
    i16286.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i16287[i + 0]));
  }
  i16284.additiveMaterials = i16286
  var i16289 = i16285[2]
  var i16288 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i16289.length; i += 1) {
    i16288.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i16289[i + 0]));
  }
  i16284.multiplyMaterials = i16288
  var i16291 = i16285[3]
  var i16290 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i16291.length; i += 1) {
    i16290.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i16291[i + 0]));
  }
  i16284.screenMaterials = i16290
  i16284.requiresBlendModeMaterials = !!i16285[4]
  return i16284
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i16294 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i16295 = data
  i16294.pageName = i16295[0]
  request.r(i16295[1], i16295[2], 0, i16294, 'material')
  return i16294
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i16298 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i16299 = data
  request.r(i16299[0], i16299[1], 0, i16298, 'atlasFile')
  var i16301 = i16299[2]
  var i16300 = []
  for(var i = 0; i < i16301.length; i += 2) {
  request.r(i16301[i + 0], i16301[i + 1], 2, i16300, '')
  }
  i16298.materials = i16300
  i16298.textureLoadingMode = i16299[3]
  request.r(i16299[4], i16299[5], 0, i16298, 'onDemandTextureLoader')
  return i16298
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i16302 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i16303 = data
  i16302.useSafeMode = !!i16303[0]
  i16302.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i16303[1], i16302.safeModeOptions)
  i16302.timeScale = i16303[2]
  i16302.unscaledTimeScale = i16303[3]
  i16302.useSmoothDeltaTime = !!i16303[4]
  i16302.maxSmoothUnscaledTime = i16303[5]
  i16302.rewindCallbackMode = i16303[6]
  i16302.showUnityEditorReport = !!i16303[7]
  i16302.logBehaviour = i16303[8]
  i16302.drawGizmos = !!i16303[9]
  i16302.defaultRecyclable = !!i16303[10]
  i16302.defaultAutoPlay = i16303[11]
  i16302.defaultUpdateType = i16303[12]
  i16302.defaultTimeScaleIndependent = !!i16303[13]
  i16302.defaultEaseType = i16303[14]
  i16302.defaultEaseOvershootOrAmplitude = i16303[15]
  i16302.defaultEasePeriod = i16303[16]
  i16302.defaultAutoKill = !!i16303[17]
  i16302.defaultLoopType = i16303[18]
  i16302.debugMode = !!i16303[19]
  i16302.debugStoreTargetId = !!i16303[20]
  i16302.showPreviewPanel = !!i16303[21]
  i16302.storeSettingsLocation = i16303[22]
  i16302.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i16303[23], i16302.modules)
  i16302.createASMDEF = !!i16303[24]
  i16302.showPlayingTweens = !!i16303[25]
  i16302.showPausedTweens = !!i16303[26]
  return i16302
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i16304 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i16305 = data
  i16304.logBehaviour = i16305[0]
  i16304.nestedTweenFailureBehaviour = i16305[1]
  return i16304
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i16306 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i16307 = data
  i16306.showPanel = !!i16307[0]
  i16306.audioEnabled = !!i16307[1]
  i16306.physicsEnabled = !!i16307[2]
  i16306.physics2DEnabled = !!i16307[3]
  i16306.spriteEnabled = !!i16307[4]
  i16306.uiEnabled = !!i16307[5]
  i16306.uiToolkitEnabled = !!i16307[6]
  i16306.textMeshProEnabled = !!i16307[7]
  i16306.tk2DEnabled = !!i16307[8]
  i16306.deAudioEnabled = !!i16307[9]
  i16306.deUnityExtendedEnabled = !!i16307[10]
  i16306.epoOutlineEnabled = !!i16307[11]
  return i16306
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i16308 = root || request.c( 'TMPro.TMP_Settings' )
  var i16309 = data
  i16308.assetVersion = i16309[0]
  i16308.m_TextWrappingMode = i16309[1]
  i16308.m_enableKerning = !!i16309[2]
  var i16311 = i16309[3]
  var i16310 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i16311.length; i += 1) {
    i16310.add(i16311[i + 0]);
  }
  i16308.m_ActiveFontFeatures = i16310
  i16308.m_enableExtraPadding = !!i16309[4]
  i16308.m_enableTintAllSprites = !!i16309[5]
  i16308.m_enableParseEscapeCharacters = !!i16309[6]
  i16308.m_EnableRaycastTarget = !!i16309[7]
  i16308.m_GetFontFeaturesAtRuntime = !!i16309[8]
  i16308.m_missingGlyphCharacter = i16309[9]
  i16308.m_ClearDynamicDataOnBuild = !!i16309[10]
  i16308.m_warningsDisabled = !!i16309[11]
  request.r(i16309[12], i16309[13], 0, i16308, 'm_defaultFontAsset')
  i16308.m_defaultFontAssetPath = i16309[14]
  i16308.m_defaultFontSize = i16309[15]
  i16308.m_defaultAutoSizeMinRatio = i16309[16]
  i16308.m_defaultAutoSizeMaxRatio = i16309[17]
  i16308.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i16309[18], i16309[19] )
  i16308.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i16309[20], i16309[21] )
  i16308.m_autoSizeTextContainer = !!i16309[22]
  i16308.m_IsTextObjectScaleStatic = !!i16309[23]
  var i16313 = i16309[24]
  var i16312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i16313.length; i += 2) {
  request.r(i16313[i + 0], i16313[i + 1], 1, i16312, '')
  }
  i16308.m_fallbackFontAssets = i16312
  i16308.m_matchMaterialPreset = !!i16309[25]
  i16308.m_HideSubTextObjects = !!i16309[26]
  request.r(i16309[27], i16309[28], 0, i16308, 'm_defaultSpriteAsset')
  i16308.m_defaultSpriteAssetPath = i16309[29]
  i16308.m_enableEmojiSupport = !!i16309[30]
  i16308.m_MissingCharacterSpriteUnicode = i16309[31]
  var i16315 = i16309[32]
  var i16314 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i16315.length; i += 2) {
  request.r(i16315[i + 0], i16315[i + 1], 1, i16314, '')
  }
  i16308.m_EmojiFallbackTextAssets = i16314
  i16308.m_defaultColorGradientPresetsPath = i16309[33]
  request.r(i16309[34], i16309[35], 0, i16308, 'm_defaultStyleSheet')
  i16308.m_StyleSheetsResourcePath = i16309[36]
  request.r(i16309[37], i16309[38], 0, i16308, 'm_leadingCharacters')
  request.r(i16309[39], i16309[40], 0, i16308, 'm_followingCharacters')
  i16308.m_UseModernHangulLineBreakingRules = !!i16309[41]
  return i16308
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i16318 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i16319 = data
  i16318.m_GlyphIndex = i16319[0]
  i16318.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i16319[1], i16318.m_GlyphValueRecord)
  return i16318
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i16320 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i16321 = data
  i16320.m_XPlacement = i16321[0]
  i16320.m_YPlacement = i16321[1]
  i16320.m_XAdvance = i16321[2]
  i16320.m_YAdvance = i16321[3]
  return i16320
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i16322 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i16323 = data
  request.r(i16323[0], i16323[1], 0, i16322, 'spriteSheet')
  var i16325 = i16323[2]
  var i16324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i16325.length; i += 1) {
    i16324.add(request.d('TMPro.TMP_Sprite', i16325[i + 0]));
  }
  i16322.spriteInfoList = i16324
  var i16327 = i16323[3]
  var i16326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i16327.length; i += 2) {
  request.r(i16327[i + 0], i16327[i + 1], 1, i16326, '')
  }
  i16322.fallbackSpriteAssets = i16326
  var i16329 = i16323[4]
  var i16328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i16329.length; i += 1) {
    i16328.add(request.d('TMPro.TMP_SpriteCharacter', i16329[i + 0]));
  }
  i16322.m_SpriteCharacterTable = i16328
  var i16331 = i16323[5]
  var i16330 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i16331.length; i += 1) {
    i16330.add(request.d('TMPro.TMP_SpriteGlyph', i16331[i + 0]));
  }
  i16322.m_GlyphTable = i16330
  i16322.m_Version = i16323[6]
  i16322.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i16323[7], i16322.m_FaceInfo)
  request.r(i16323[8], i16323[9], 0, i16322, 'm_Material')
  return i16322
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i16334 = root || request.c( 'TMPro.TMP_Sprite' )
  var i16335 = data
  i16334.name = i16335[0]
  i16334.hashCode = i16335[1]
  i16334.unicode = i16335[2]
  i16334.pivot = new pc.Vec2( i16335[3], i16335[4] )
  request.r(i16335[5], i16335[6], 0, i16334, 'sprite')
  i16334.id = i16335[7]
  i16334.x = i16335[8]
  i16334.y = i16335[9]
  i16334.width = i16335[10]
  i16334.height = i16335[11]
  i16334.xOffset = i16335[12]
  i16334.yOffset = i16335[13]
  i16334.xAdvance = i16335[14]
  i16334.scale = i16335[15]
  return i16334
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i16340 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i16341 = data
  i16340.m_Name = i16341[0]
  i16340.m_ElementType = i16341[1]
  i16340.m_Unicode = i16341[2]
  i16340.m_GlyphIndex = i16341[3]
  i16340.m_Scale = i16341[4]
  return i16340
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i16344 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i16345 = data
  request.r(i16345[0], i16345[1], 0, i16344, 'sprite')
  i16344.m_Index = i16345[2]
  i16344.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i16345[3], i16344.m_Metrics)
  i16344.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i16345[4], i16344.m_GlyphRect)
  i16344.m_Scale = i16345[5]
  i16344.m_AtlasIndex = i16345[6]
  i16344.m_ClassDefinitionType = i16345[7]
  return i16344
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i16346 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i16347 = data
  var i16349 = i16347[0]
  var i16348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i16349.length; i += 1) {
    i16348.add(request.d('TMPro.TMP_Style', i16349[i + 0]));
  }
  i16346.m_StyleList = i16348
  return i16346
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i16352 = root || request.c( 'TMPro.TMP_Style' )
  var i16353 = data
  i16352.m_Name = i16353[0]
  i16352.m_HashCode = i16353[1]
  i16352.m_OpeningDefinition = i16353[2]
  i16352.m_ClosingDefinition = i16353[3]
  i16352.m_OpeningTagArray = i16353[4]
  i16352.m_ClosingTagArray = i16353[5]
  return i16352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i16354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i16355 = data
  var i16357 = i16355[0]
  var i16356 = []
  for(var i = 0; i < i16357.length; i += 1) {
    i16356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i16357[i + 0]) );
  }
  i16354.files = i16356
  i16354.componentToPrefabIds = i16355[1]
  return i16354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i16360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i16361 = data
  i16360.path = i16361[0]
  request.r(i16361[1], i16361[2], 0, i16360, 'unityObject')
  return i16360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i16362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i16363 = data
  var i16365 = i16363[0]
  var i16364 = []
  for(var i = 0; i < i16365.length; i += 1) {
    i16364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i16365[i + 0]) );
  }
  i16362.scriptsExecutionOrder = i16364
  var i16367 = i16363[1]
  var i16366 = []
  for(var i = 0; i < i16367.length; i += 1) {
    i16366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i16367[i + 0]) );
  }
  i16362.sortingLayers = i16366
  var i16369 = i16363[2]
  var i16368 = []
  for(var i = 0; i < i16369.length; i += 1) {
    i16368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i16369[i + 0]) );
  }
  i16362.cullingLayers = i16368
  i16362.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i16363[3], i16362.timeSettings)
  i16362.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i16363[4], i16362.physicsSettings)
  i16362.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i16363[5], i16362.physics2DSettings)
  i16362.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i16363[6], i16362.qualitySettings)
  i16362.enableRealtimeShadows = !!i16363[7]
  i16362.enableAutoInstancing = !!i16363[8]
  i16362.enableStaticBatching = !!i16363[9]
  i16362.enableDynamicBatching = !!i16363[10]
  i16362.usePreservativeDynamicBatching = !!i16363[11]
  i16362.lightmapEncodingQuality = i16363[12]
  i16362.desiredColorSpace = i16363[13]
  var i16371 = i16363[14]
  var i16370 = []
  for(var i = 0; i < i16371.length; i += 1) {
    i16370.push( i16371[i + 0] );
  }
  i16362.allTags = i16370
  return i16362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i16374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i16375 = data
  i16374.name = i16375[0]
  i16374.value = i16375[1]
  return i16374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i16378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i16379 = data
  i16378.id = i16379[0]
  i16378.name = i16379[1]
  i16378.value = i16379[2]
  return i16378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i16382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i16383 = data
  i16382.id = i16383[0]
  i16382.name = i16383[1]
  return i16382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i16384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i16385 = data
  i16384.fixedDeltaTime = i16385[0]
  i16384.maximumDeltaTime = i16385[1]
  i16384.timeScale = i16385[2]
  i16384.maximumParticleTimestep = i16385[3]
  return i16384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i16386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i16387 = data
  i16386.gravity = new pc.Vec3( i16387[0], i16387[1], i16387[2] )
  i16386.defaultSolverIterations = i16387[3]
  i16386.bounceThreshold = i16387[4]
  i16386.autoSyncTransforms = !!i16387[5]
  i16386.autoSimulation = !!i16387[6]
  var i16389 = i16387[7]
  var i16388 = []
  for(var i = 0; i < i16389.length; i += 1) {
    i16388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i16389[i + 0]) );
  }
  i16386.collisionMatrix = i16388
  return i16386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i16392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i16393 = data
  i16392.enabled = !!i16393[0]
  i16392.layerId = i16393[1]
  i16392.otherLayerId = i16393[2]
  return i16392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i16394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i16395 = data
  request.r(i16395[0], i16395[1], 0, i16394, 'material')
  i16394.gravity = new pc.Vec2( i16395[2], i16395[3] )
  i16394.positionIterations = i16395[4]
  i16394.velocityIterations = i16395[5]
  i16394.velocityThreshold = i16395[6]
  i16394.maxLinearCorrection = i16395[7]
  i16394.maxAngularCorrection = i16395[8]
  i16394.maxTranslationSpeed = i16395[9]
  i16394.maxRotationSpeed = i16395[10]
  i16394.baumgarteScale = i16395[11]
  i16394.baumgarteTOIScale = i16395[12]
  i16394.timeToSleep = i16395[13]
  i16394.linearSleepTolerance = i16395[14]
  i16394.angularSleepTolerance = i16395[15]
  i16394.defaultContactOffset = i16395[16]
  i16394.autoSimulation = !!i16395[17]
  i16394.queriesHitTriggers = !!i16395[18]
  i16394.queriesStartInColliders = !!i16395[19]
  i16394.callbacksOnDisable = !!i16395[20]
  i16394.reuseCollisionCallbacks = !!i16395[21]
  i16394.autoSyncTransforms = !!i16395[22]
  var i16397 = i16395[23]
  var i16396 = []
  for(var i = 0; i < i16397.length; i += 1) {
    i16396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i16397[i + 0]) );
  }
  i16394.collisionMatrix = i16396
  return i16394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i16400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i16401 = data
  i16400.enabled = !!i16401[0]
  i16400.layerId = i16401[1]
  i16400.otherLayerId = i16401[2]
  return i16400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i16402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i16403 = data
  var i16405 = i16403[0]
  var i16404 = []
  for(var i = 0; i < i16405.length; i += 1) {
    i16404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i16405[i + 0]) );
  }
  i16402.qualityLevels = i16404
  var i16407 = i16403[1]
  var i16406 = []
  for(var i = 0; i < i16407.length; i += 1) {
    i16406.push( i16407[i + 0] );
  }
  i16402.names = i16406
  i16402.shadows = i16403[2]
  i16402.anisotropicFiltering = i16403[3]
  i16402.antiAliasing = i16403[4]
  i16402.lodBias = i16403[5]
  i16402.shadowCascades = i16403[6]
  i16402.shadowDistance = i16403[7]
  i16402.shadowmaskMode = i16403[8]
  i16402.shadowProjection = i16403[9]
  i16402.shadowResolution = i16403[10]
  i16402.softParticles = !!i16403[11]
  i16402.softVegetation = !!i16403[12]
  i16402.activeColorSpace = i16403[13]
  i16402.desiredColorSpace = i16403[14]
  i16402.masterTextureLimit = i16403[15]
  i16402.maxQueuedFrames = i16403[16]
  i16402.particleRaycastBudget = i16403[17]
  i16402.pixelLightCount = i16403[18]
  i16402.realtimeReflectionProbes = !!i16403[19]
  i16402.shadowCascade2Split = i16403[20]
  i16402.shadowCascade4Split = new pc.Vec3( i16403[21], i16403[22], i16403[23] )
  i16402.streamingMipmapsActive = !!i16403[24]
  i16402.vSyncCount = i16403[25]
  i16402.asyncUploadBufferSize = i16403[26]
  i16402.asyncUploadTimeSlice = i16403[27]
  i16402.billboardsFaceCameraPosition = !!i16403[28]
  i16402.shadowNearPlaneOffset = i16403[29]
  i16402.streamingMipmapsMemoryBudget = i16403[30]
  i16402.maximumLODLevel = i16403[31]
  i16402.streamingMipmapsAddAllCameras = !!i16403[32]
  i16402.streamingMipmapsMaxLevelReduction = i16403[33]
  i16402.streamingMipmapsRenderersPerFrame = i16403[34]
  i16402.resolutionScalingFixedDPIFactor = i16403[35]
  i16402.streamingMipmapsMaxFileIORequests = i16403[36]
  i16402.currentQualityLevel = i16403[37]
  return i16402
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i16410 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i16411 = data
  i16410.m_XCoordinate = i16411[0]
  i16410.m_YCoordinate = i16411[1]
  return i16410
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i16412 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i16413 = data
  i16412.m_XPositionAdjustment = i16413[0]
  i16412.m_YPositionAdjustment = i16413[1]
  return i16412
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i16414 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i16415 = data
  i16414.xPlacement = i16415[0]
  i16414.yPlacement = i16415[1]
  i16414.xAdvance = i16415[2]
  i16414.yAdvance = i16415[3]
  return i16414
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[2],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[2],"77":[78],"79":[80],"81":[80],"5":[4],"82":[83],"84":[85],"86":[78,87],"88":[27],"89":[85],"90":[91],"92":[85],"93":[85],"94":[95],"96":[95],"97":[85],"98":[99],"100":[4],"101":[15,4],"102":[78],"27":[15,4],"103":[104,78],"85":[78],"105":[78,87],"106":[56],"107":[63],"108":[99],"109":[95],"110":[111],"112":[2],"113":[114],"115":[36],"116":[5],"117":[4],"118":[78,4],"14":[4,15],"119":[4],"120":[15,4],"121":[78],"122":[15,4],"123":[4],"124":[125],"126":[125],"127":[125],"128":[4],"129":[4],"8":[5],"13":[15,4],"130":[4],"7":[5],"131":[4],"132":[4],"133":[4],"134":[4],"135":[4],"136":[4],"137":[4],"21":[4],"138":[4],"16":[15,4],"139":[4],"140":[4],"141":[4],"142":[4],"143":[15,4],"144":[4],"145":[36],"146":[36],"37":[36],"147":[36],"148":[2],"149":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.GameManager","UnityEngine.AudioClip","UnityEngine.UI.Button","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.AudioSource","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.UI.Mask","Playable.GameController","Playable.BG","Playable.Ceiling","UnityEngine.GameObject","Playable.Door","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","Playable.Bed","Playable.Bathroom","Playable.Computer","Playable.Toilet","Playable.ItemRoot","Playable.Item","Playable.AudioManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","UnityEngine.MeshFilter","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "PA_BEQ";

Deserializers.lunaInitializationTime = "07/17/2026 00:41:55";

Deserializers.lunaDaysRunning = "8.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BP_V29_NgocNDL_HuyNQ";

Deserializers.lunaAppID = "31727";

Deserializers.projectId = "cc1f2bc1088d6d648901eead39e3bfa0";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.2\ncom.unity.timeline: 1.8.9\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1918";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4508";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "d154a4f9-aaac-49ec-b992-6e3151842d80";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

