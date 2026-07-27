var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i13896 = root || request.c( 'UnityEngine.JointSpring' )
  var i13897 = data
  i13896.spring = i13897[0]
  i13896.damper = i13897[1]
  i13896.targetPosition = i13897[2]
  return i13896
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i13898 = root || request.c( 'UnityEngine.JointMotor' )
  var i13899 = data
  i13898.m_TargetVelocity = i13899[0]
  i13898.m_Force = i13899[1]
  i13898.m_FreeSpin = i13899[2]
  return i13898
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i13900 = root || request.c( 'UnityEngine.JointLimits' )
  var i13901 = data
  i13900.m_Min = i13901[0]
  i13900.m_Max = i13901[1]
  i13900.m_Bounciness = i13901[2]
  i13900.m_BounceMinVelocity = i13901[3]
  i13900.m_ContactDistance = i13901[4]
  i13900.minBounce = i13901[5]
  i13900.maxBounce = i13901[6]
  return i13900
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i13902 = root || request.c( 'UnityEngine.JointDrive' )
  var i13903 = data
  i13902.m_PositionSpring = i13903[0]
  i13902.m_PositionDamper = i13903[1]
  i13902.m_MaximumForce = i13903[2]
  i13902.m_UseAcceleration = i13903[3]
  return i13902
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i13904 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i13905 = data
  i13904.m_Spring = i13905[0]
  i13904.m_Damper = i13905[1]
  return i13904
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i13906 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i13907 = data
  i13906.m_Limit = i13907[0]
  i13906.m_Bounciness = i13907[1]
  i13906.m_ContactDistance = i13907[2]
  return i13906
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i13908 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i13909 = data
  i13908.m_ExtremumSlip = i13909[0]
  i13908.m_ExtremumValue = i13909[1]
  i13908.m_AsymptoteSlip = i13909[2]
  i13908.m_AsymptoteValue = i13909[3]
  i13908.m_Stiffness = i13909[4]
  return i13908
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i13910 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i13911 = data
  i13910.m_LowerAngle = i13911[0]
  i13910.m_UpperAngle = i13911[1]
  return i13910
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i13912 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i13913 = data
  i13912.m_MotorSpeed = i13913[0]
  i13912.m_MaximumMotorTorque = i13913[1]
  return i13912
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i13914 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i13915 = data
  i13914.m_DampingRatio = i13915[0]
  i13914.m_Frequency = i13915[1]
  i13914.m_Angle = i13915[2]
  return i13914
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i13916 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i13917 = data
  i13916.m_LowerTranslation = i13917[0]
  i13916.m_UpperTranslation = i13917[1]
  return i13916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i13918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i13919 = data
  i13918.name = i13919[0]
  i13918.width = i13919[1]
  i13918.height = i13919[2]
  i13918.mipmapCount = i13919[3]
  i13918.anisoLevel = i13919[4]
  i13918.filterMode = i13919[5]
  i13918.hdr = !!i13919[6]
  i13918.format = i13919[7]
  i13918.wrapMode = i13919[8]
  i13918.alphaIsTransparency = !!i13919[9]
  i13918.alphaSource = i13919[10]
  i13918.graphicsFormat = i13919[11]
  i13918.sRGBTexture = !!i13919[12]
  i13918.desiredColorSpace = i13919[13]
  i13918.wrapU = i13919[14]
  i13918.wrapV = i13919[15]
  return i13918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i13920 = root || new pc.UnityMaterial()
  var i13921 = data
  i13920.name = i13921[0]
  request.r(i13921[1], i13921[2], 0, i13920, 'shader')
  i13920.renderQueue = i13921[3]
  i13920.enableInstancing = !!i13921[4]
  var i13923 = i13921[5]
  var i13922 = []
  for(var i = 0; i < i13923.length; i += 1) {
    i13922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i13923[i + 0]) );
  }
  i13920.floatParameters = i13922
  var i13925 = i13921[6]
  var i13924 = []
  for(var i = 0; i < i13925.length; i += 1) {
    i13924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i13925[i + 0]) );
  }
  i13920.colorParameters = i13924
  var i13927 = i13921[7]
  var i13926 = []
  for(var i = 0; i < i13927.length; i += 1) {
    i13926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i13927[i + 0]) );
  }
  i13920.vectorParameters = i13926
  var i13929 = i13921[8]
  var i13928 = []
  for(var i = 0; i < i13929.length; i += 1) {
    i13928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i13929[i + 0]) );
  }
  i13920.textureParameters = i13928
  var i13931 = i13921[9]
  var i13930 = []
  for(var i = 0; i < i13931.length; i += 1) {
    i13930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i13931[i + 0]) );
  }
  i13920.materialFlags = i13930
  return i13920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i13934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i13935 = data
  i13934.name = i13935[0]
  i13934.value = i13935[1]
  return i13934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i13938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i13939 = data
  i13938.name = i13939[0]
  i13938.value = new pc.Color(i13939[1], i13939[2], i13939[3], i13939[4])
  return i13938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i13942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i13943 = data
  i13942.name = i13943[0]
  i13942.value = new pc.Vec4( i13943[1], i13943[2], i13943[3], i13943[4] )
  return i13942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i13946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i13947 = data
  i13946.name = i13947[0]
  request.r(i13947[1], i13947[2], 0, i13946, 'value')
  return i13946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i13950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i13951 = data
  i13950.name = i13951[0]
  i13950.enabled = !!i13951[1]
  return i13950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i13952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i13953 = data
  i13952.name = i13953[0]
  i13952.index = i13953[1]
  i13952.startup = !!i13953[2]
  return i13952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i13954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i13955 = data
  i13954.aspect = i13955[0]
  i13954.orthographic = !!i13955[1]
  i13954.orthographicSize = i13955[2]
  i13954.backgroundColor = new pc.Color(i13955[3], i13955[4], i13955[5], i13955[6])
  i13954.nearClipPlane = i13955[7]
  i13954.farClipPlane = i13955[8]
  i13954.fieldOfView = i13955[9]
  i13954.depth = i13955[10]
  i13954.clearFlags = i13955[11]
  i13954.cullingMask = i13955[12]
  i13954.rect = i13955[13]
  request.r(i13955[14], i13955[15], 0, i13954, 'targetTexture')
  i13954.usePhysicalProperties = !!i13955[16]
  i13954.focalLength = i13955[17]
  i13954.sensorSize = new pc.Vec2( i13955[18], i13955[19] )
  i13954.lensShift = new pc.Vec2( i13955[20], i13955[21] )
  i13954.gateFit = i13955[22]
  i13954.commandBufferCount = i13955[23]
  i13954.cameraType = i13955[24]
  i13954.enabled = !!i13955[25]
  return i13954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i13956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i13957 = data
  i13956.name = i13957[0]
  i13956.tagId = i13957[1]
  i13956.enabled = !!i13957[2]
  i13956.isStatic = !!i13957[3]
  i13956.layer = i13957[4]
  return i13956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i13958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i13959 = data
  i13958.pivot = new pc.Vec2( i13959[0], i13959[1] )
  i13958.anchorMin = new pc.Vec2( i13959[2], i13959[3] )
  i13958.anchorMax = new pc.Vec2( i13959[4], i13959[5] )
  i13958.sizeDelta = new pc.Vec2( i13959[6], i13959[7] )
  i13958.anchoredPosition3D = new pc.Vec3( i13959[8], i13959[9], i13959[10] )
  i13958.rotation = new pc.Quat(i13959[11], i13959[12], i13959[13], i13959[14])
  i13958.scale = new pc.Vec3( i13959[15], i13959[16], i13959[17] )
  return i13958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i13960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i13961 = data
  i13960.planeDistance = i13961[0]
  i13960.referencePixelsPerUnit = i13961[1]
  i13960.isFallbackOverlay = !!i13961[2]
  i13960.renderMode = i13961[3]
  i13960.renderOrder = i13961[4]
  i13960.sortingLayerName = i13961[5]
  i13960.sortingOrder = i13961[6]
  i13960.scaleFactor = i13961[7]
  request.r(i13961[8], i13961[9], 0, i13960, 'worldCamera')
  i13960.overrideSorting = !!i13961[10]
  i13960.pixelPerfect = !!i13961[11]
  i13960.targetDisplay = i13961[12]
  i13960.overridePixelPerfect = !!i13961[13]
  i13960.enabled = !!i13961[14]
  return i13960
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i13962 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i13963 = data
  i13962.m_UiScaleMode = i13963[0]
  i13962.m_ReferencePixelsPerUnit = i13963[1]
  i13962.m_ScaleFactor = i13963[2]
  i13962.m_ReferenceResolution = new pc.Vec2( i13963[3], i13963[4] )
  i13962.m_ScreenMatchMode = i13963[5]
  i13962.m_MatchWidthOrHeight = i13963[6]
  i13962.m_PhysicalUnit = i13963[7]
  i13962.m_FallbackScreenDPI = i13963[8]
  i13962.m_DefaultSpriteDPI = i13963[9]
  i13962.m_DynamicPixelsPerUnit = i13963[10]
  i13962.m_PresetInfoIsWorld = !!i13963[11]
  return i13962
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i13964 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i13965 = data
  i13964.m_IgnoreReversedGraphics = !!i13965[0]
  i13964.m_BlockingObjects = i13965[1]
  i13964.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i13965[2] )
  return i13964
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i13966 = root || request.c( 'Playable.GameManager' )
  var i13967 = data
  i13966.EventCountdownEndGame = request.d('System.Action', i13967[0], i13966.EventCountdownEndGame)
  i13966._totalEvent = i13967[1]
  i13966._endTime = i13967[2]
  request.r(i13967[3], i13967[4], 0, i13966, '_backgroundMusic')
  request.r(i13967[5], i13967[6], 0, i13966, '_backgroundTexture')
  request.r(i13967[7], i13967[8], 0, i13966, '_btnBlock')
  request.r(i13967[9], i13967[10], 0, i13966, '_background')
  request.r(i13967[11], i13967[12], 0, i13966, '_progressFillImage')
  request.r(i13967[13], i13967[14], 0, i13966, '_progressText')
  i13966._progressTweenDuration = i13967[15]
  request.r(i13967[16], i13967[17], 0, i13966, '_timerFillImage')
  request.r(i13967[18], i13967[19], 0, i13966, '_timerText')
  i13966._timerPunchScale = i13967[20]
  return i13966
}

Deserializers["System.Action"] = function (request, data, root) {
  var i13968 = root || request.c( 'System.Action' )
  var i13969 = data
  return i13968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i13970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i13971 = data
  i13970.cullTransparentMesh = !!i13971[0]
  return i13970
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i13972 = root || request.c( 'UnityEngine.UI.Image' )
  var i13973 = data
  request.r(i13973[0], i13973[1], 0, i13972, 'm_Sprite')
  i13972.m_Type = i13973[2]
  i13972.m_PreserveAspect = !!i13973[3]
  i13972.m_FillCenter = !!i13973[4]
  i13972.m_FillMethod = i13973[5]
  i13972.m_FillAmount = i13973[6]
  i13972.m_FillClockwise = !!i13973[7]
  i13972.m_FillOrigin = i13973[8]
  i13972.m_UseSpriteMesh = !!i13973[9]
  i13972.m_PixelsPerUnitMultiplier = i13973[10]
  request.r(i13973[11], i13973[12], 0, i13972, 'm_Material')
  i13972.m_Maskable = !!i13973[13]
  i13972.m_Color = new pc.Color(i13973[14], i13973[15], i13973[16], i13973[17])
  i13972.m_RaycastTarget = !!i13973[18]
  i13972.m_RaycastPadding = new pc.Vec4( i13973[19], i13973[20], i13973[21], i13973[22] )
  return i13972
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i13974 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i13975 = data
  request.r(i13975[0], i13975[1], 0, i13974, 'm_Texture')
  i13974.m_UVRect = UnityEngine.Rect.MinMaxRect(i13975[2], i13975[3], i13975[4], i13975[5])
  request.r(i13975[6], i13975[7], 0, i13974, 'm_Material')
  i13974.m_Maskable = !!i13975[8]
  i13974.m_Color = new pc.Color(i13975[9], i13975[10], i13975[11], i13975[12])
  i13974.m_RaycastTarget = !!i13975[13]
  i13974.m_RaycastPadding = new pc.Vec4( i13975[14], i13975[15], i13975[16], i13975[17] )
  return i13974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i13976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i13977 = data
  request.r(i13977[0], i13977[1], 0, i13976, 'clip')
  request.r(i13977[2], i13977[3], 0, i13976, 'outputAudioMixerGroup')
  i13976.playOnAwake = !!i13977[4]
  i13976.loop = !!i13977[5]
  i13976.time = i13977[6]
  i13976.volume = i13977[7]
  i13976.pitch = i13977[8]
  i13976.enabled = !!i13977[9]
  return i13976
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i13978 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i13979 = data
  i13978.m_hasFontAssetChanged = !!i13979[0]
  request.r(i13979[1], i13979[2], 0, i13978, 'm_baseMaterial')
  i13978.m_maskOffset = new pc.Vec4( i13979[3], i13979[4], i13979[5], i13979[6] )
  i13978.m_text = i13979[7]
  i13978.m_isRightToLeft = !!i13979[8]
  request.r(i13979[9], i13979[10], 0, i13978, 'm_fontAsset')
  request.r(i13979[11], i13979[12], 0, i13978, 'm_sharedMaterial')
  var i13981 = i13979[13]
  var i13980 = []
  for(var i = 0; i < i13981.length; i += 2) {
  request.r(i13981[i + 0], i13981[i + 1], 2, i13980, '')
  }
  i13978.m_fontSharedMaterials = i13980
  request.r(i13979[14], i13979[15], 0, i13978, 'm_fontMaterial')
  var i13983 = i13979[16]
  var i13982 = []
  for(var i = 0; i < i13983.length; i += 2) {
  request.r(i13983[i + 0], i13983[i + 1], 2, i13982, '')
  }
  i13978.m_fontMaterials = i13982
  i13978.m_fontColor32 = UnityEngine.Color32.ConstructColor(i13979[17], i13979[18], i13979[19], i13979[20])
  i13978.m_fontColor = new pc.Color(i13979[21], i13979[22], i13979[23], i13979[24])
  i13978.m_enableVertexGradient = !!i13979[25]
  i13978.m_colorMode = i13979[26]
  i13978.m_fontColorGradient = request.d('TMPro.VertexGradient', i13979[27], i13978.m_fontColorGradient)
  request.r(i13979[28], i13979[29], 0, i13978, 'm_fontColorGradientPreset')
  request.r(i13979[30], i13979[31], 0, i13978, 'm_spriteAsset')
  i13978.m_tintAllSprites = !!i13979[32]
  request.r(i13979[33], i13979[34], 0, i13978, 'm_StyleSheet')
  i13978.m_TextStyleHashCode = i13979[35]
  i13978.m_overrideHtmlColors = !!i13979[36]
  i13978.m_faceColor = UnityEngine.Color32.ConstructColor(i13979[37], i13979[38], i13979[39], i13979[40])
  i13978.m_fontSize = i13979[41]
  i13978.m_fontSizeBase = i13979[42]
  i13978.m_fontWeight = i13979[43]
  i13978.m_enableAutoSizing = !!i13979[44]
  i13978.m_fontSizeMin = i13979[45]
  i13978.m_fontSizeMax = i13979[46]
  i13978.m_fontStyle = i13979[47]
  i13978.m_HorizontalAlignment = i13979[48]
  i13978.m_VerticalAlignment = i13979[49]
  i13978.m_textAlignment = i13979[50]
  i13978.m_characterSpacing = i13979[51]
  i13978.m_wordSpacing = i13979[52]
  i13978.m_lineSpacing = i13979[53]
  i13978.m_lineSpacingMax = i13979[54]
  i13978.m_paragraphSpacing = i13979[55]
  i13978.m_charWidthMaxAdj = i13979[56]
  i13978.m_TextWrappingMode = i13979[57]
  i13978.m_wordWrappingRatios = i13979[58]
  i13978.m_overflowMode = i13979[59]
  request.r(i13979[60], i13979[61], 0, i13978, 'm_linkedTextComponent')
  request.r(i13979[62], i13979[63], 0, i13978, 'parentLinkedComponent')
  i13978.m_enableKerning = !!i13979[64]
  var i13985 = i13979[65]
  var i13984 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i13985.length; i += 1) {
    i13984.add(i13985[i + 0]);
  }
  i13978.m_ActiveFontFeatures = i13984
  i13978.m_enableExtraPadding = !!i13979[66]
  i13978.checkPaddingRequired = !!i13979[67]
  i13978.m_isRichText = !!i13979[68]
  i13978.m_parseCtrlCharacters = !!i13979[69]
  i13978.m_isOrthographic = !!i13979[70]
  i13978.m_isCullingEnabled = !!i13979[71]
  i13978.m_horizontalMapping = i13979[72]
  i13978.m_verticalMapping = i13979[73]
  i13978.m_uvLineOffset = i13979[74]
  i13978.m_geometrySortingOrder = i13979[75]
  i13978.m_IsTextObjectScaleStatic = !!i13979[76]
  i13978.m_VertexBufferAutoSizeReduction = !!i13979[77]
  i13978.m_useMaxVisibleDescender = !!i13979[78]
  i13978.m_pageToDisplay = i13979[79]
  i13978.m_margin = new pc.Vec4( i13979[80], i13979[81], i13979[82], i13979[83] )
  i13978.m_isUsingLegacyAnimationComponent = !!i13979[84]
  i13978.m_isVolumetricText = !!i13979[85]
  request.r(i13979[86], i13979[87], 0, i13978, 'm_Material')
  i13978.m_EmojiFallbackSupport = !!i13979[88]
  i13978.m_Maskable = !!i13979[89]
  i13978.m_Color = new pc.Color(i13979[90], i13979[91], i13979[92], i13979[93])
  i13978.m_RaycastTarget = !!i13979[94]
  i13978.m_RaycastPadding = new pc.Vec4( i13979[95], i13979[96], i13979[97], i13979[98] )
  return i13978
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i13988 = root || request.c( 'TMPro.VertexGradient' )
  var i13989 = data
  i13988.topLeft = new pc.Color(i13989[0], i13989[1], i13989[2], i13989[3])
  i13988.topRight = new pc.Color(i13989[4], i13989[5], i13989[6], i13989[7])
  i13988.bottomLeft = new pc.Color(i13989[8], i13989[9], i13989[10], i13989[11])
  i13988.bottomRight = new pc.Color(i13989[12], i13989[13], i13989[14], i13989[15])
  return i13988
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i13992 = root || request.c( 'UnityEngine.UI.Button' )
  var i13993 = data
  i13992.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i13993[0], i13992.m_OnClick)
  i13992.m_Navigation = request.d('UnityEngine.UI.Navigation', i13993[1], i13992.m_Navigation)
  i13992.m_Transition = i13993[2]
  i13992.m_Colors = request.d('UnityEngine.UI.ColorBlock', i13993[3], i13992.m_Colors)
  i13992.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i13993[4], i13992.m_SpriteState)
  i13992.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i13993[5], i13992.m_AnimationTriggers)
  i13992.m_Interactable = !!i13993[6]
  request.r(i13993[7], i13993[8], 0, i13992, 'm_TargetGraphic')
  return i13992
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i13994 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i13995 = data
  i13994.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i13995[0], i13994.m_PersistentCalls)
  return i13994
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i13996 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i13997 = data
  var i13999 = i13997[0]
  var i13998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i13999.length; i += 1) {
    i13998.add(request.d('UnityEngine.Events.PersistentCall', i13999[i + 0]));
  }
  i13996.m_Calls = i13998
  return i13996
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i14002 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i14003 = data
  request.r(i14003[0], i14003[1], 0, i14002, 'm_Target')
  i14002.m_TargetAssemblyTypeName = i14003[2]
  i14002.m_MethodName = i14003[3]
  i14002.m_Mode = i14003[4]
  i14002.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i14003[5], i14002.m_Arguments)
  i14002.m_CallState = i14003[6]
  return i14002
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i14004 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i14005 = data
  i14004.m_Mode = i14005[0]
  i14004.m_WrapAround = !!i14005[1]
  request.r(i14005[2], i14005[3], 0, i14004, 'm_SelectOnUp')
  request.r(i14005[4], i14005[5], 0, i14004, 'm_SelectOnDown')
  request.r(i14005[6], i14005[7], 0, i14004, 'm_SelectOnLeft')
  request.r(i14005[8], i14005[9], 0, i14004, 'm_SelectOnRight')
  return i14004
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i14006 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i14007 = data
  i14006.m_NormalColor = new pc.Color(i14007[0], i14007[1], i14007[2], i14007[3])
  i14006.m_HighlightedColor = new pc.Color(i14007[4], i14007[5], i14007[6], i14007[7])
  i14006.m_PressedColor = new pc.Color(i14007[8], i14007[9], i14007[10], i14007[11])
  i14006.m_SelectedColor = new pc.Color(i14007[12], i14007[13], i14007[14], i14007[15])
  i14006.m_DisabledColor = new pc.Color(i14007[16], i14007[17], i14007[18], i14007[19])
  i14006.m_ColorMultiplier = i14007[20]
  i14006.m_FadeDuration = i14007[21]
  return i14006
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i14008 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i14009 = data
  request.r(i14009[0], i14009[1], 0, i14008, 'm_HighlightedSprite')
  request.r(i14009[2], i14009[3], 0, i14008, 'm_PressedSprite')
  request.r(i14009[4], i14009[5], 0, i14008, 'm_SelectedSprite')
  request.r(i14009[6], i14009[7], 0, i14008, 'm_DisabledSprite')
  return i14008
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i14010 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i14011 = data
  i14010.m_NormalTrigger = i14011[0]
  i14010.m_HighlightedTrigger = i14011[1]
  i14010.m_PressedTrigger = i14011[2]
  i14010.m_SelectedTrigger = i14011[3]
  i14010.m_DisabledTrigger = i14011[4]
  return i14010
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i14012 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i14013 = data
  request.r(i14013[0], i14013[1], 0, i14012, 'm_ObjectArgument')
  i14012.m_ObjectArgumentAssemblyTypeName = i14013[2]
  i14012.m_IntArgument = i14013[3]
  i14012.m_FloatArgument = i14013[4]
  i14012.m_StringArgument = i14013[5]
  i14012.m_BoolArgument = !!i14013[6]
  return i14012
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i14014 = root || request.c( 'UnityEngine.UI.Mask' )
  var i14015 = data
  i14014.m_ShowMaskGraphic = !!i14015[0]
  return i14014
}

Deserializers["Playable.GameController"] = function (request, data, root) {
  var i14016 = root || request.c( 'Playable.GameController' )
  var i14017 = data
  return i14016
}

Deserializers["Playable.BG"] = function (request, data, root) {
  var i14018 = root || request.c( 'Playable.BG' )
  var i14019 = data
  request.r(i14019[0], i14019[1], 0, i14018, '_bg')
  request.r(i14019[2], i14019[3], 0, i14018, '_sprite')
  i14018._onPlay = request.d('UnityEngine.Events.UnityEvent', i14019[4], i14018._onPlay)
  request.r(i14019[5], i14019[6], 0, i14018, '_source')
  return i14018
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i14020 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i14021 = data
  i14020.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i14021[0], i14020.m_PersistentCalls)
  return i14020
}

Deserializers["Playable.Ceiling"] = function (request, data, root) {
  var i14022 = root || request.c( 'Playable.Ceiling' )
  var i14023 = data
  request.r(i14023[0], i14023[1], 0, i14022, '_fan')
  request.r(i14023[2], i14023[3], 0, i14022, '_airCondition')
  request.r(i14023[4], i14023[5], 0, i14022, '_clip')
  i14022._onPlay = request.d('UnityEngine.Events.UnityEvent', i14023[6], i14022._onPlay)
  request.r(i14023[7], i14023[8], 0, i14022, '_source')
  return i14022
}

Deserializers["Playable.Door"] = function (request, data, root) {
  var i14024 = root || request.c( 'Playable.Door' )
  var i14025 = data
  request.r(i14025[0], i14025[1], 0, i14024, '_skeleton')
  i14024._animName = i14025[2]
  request.r(i14025[3], i14025[4], 0, i14024, '_door')
  i14024._onPlay = request.d('UnityEngine.Events.UnityEvent', i14025[5], i14024._onPlay)
  request.r(i14025[6], i14025[7], 0, i14024, '_source')
  return i14024
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i14026 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i14027 = data
  request.r(i14027[0], i14027[1], 0, i14026, 'skeletonDataAsset')
  request.r(i14027[2], i14027[3], 0, i14026, 'additiveMaterial')
  request.r(i14027[4], i14027[5], 0, i14026, 'multiplyMaterial')
  request.r(i14027[6], i14027[7], 0, i14026, 'screenMaterial')
  i14026.initialSkinName = i14027[8]
  i14026.initialFlipX = !!i14027[9]
  i14026.initialFlipY = !!i14027[10]
  i14026.startingAnimation = i14027[11]
  i14026.startingLoop = !!i14027[12]
  i14026.timeScale = i14027[13]
  i14026.freeze = !!i14027[14]
  i14026.layoutScaleMode = i14027[15]
  i14026.updateWhenInvisible = i14027[16]
  i14026.allowMultipleCanvasRenderers = !!i14027[17]
  var i14029 = i14027[18]
  var i14028 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i14029.length; i += 2) {
  request.r(i14029[i + 0], i14029[i + 1], 1, i14028, '')
  }
  i14026.canvasRenderers = i14028
  i14026.enableSeparatorSlots = !!i14027[19]
  i14026.updateSeparatorPartLocation = !!i14027[20]
  i14026.updateSeparatorPartScale = !!i14027[21]
  i14026.disableMeshAssignmentOnOverride = !!i14027[22]
  i14026.referenceSize = new pc.Vec2( i14027[23], i14027[24] )
  i14026.referenceScale = i14027[25]
  i14026.rectTransformSize = new pc.Vec2( i14027[26], i14027[27] )
  i14026.editReferenceRect = !!i14027[28]
  var i14031 = i14027[29]
  var i14030 = []
  for(var i = 0; i < i14031.length; i += 1) {
    i14030.push( i14031[i + 0] );
  }
  i14026.separatorSlotNames = i14030
  var i14033 = i14027[30]
  var i14032 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i14033.length; i += 2) {
  request.r(i14033[i + 0], i14033[i + 1], 1, i14032, '')
  }
  i14026.separatorParts = i14032
  i14026.meshGenerator = request.d('Spine.Unity.MeshGenerator', i14027[31], i14026.meshGenerator)
  i14026.updateTiming = i14027[32]
  i14026.unscaledTime = !!i14027[33]
  request.r(i14027[34], i14027[35], 0, i14026, 'm_Material')
  i14026.m_Maskable = !!i14027[36]
  i14026.m_Color = new pc.Color(i14027[37], i14027[38], i14027[39], i14027[40])
  i14026.m_RaycastTarget = !!i14027[41]
  i14026.m_RaycastPadding = new pc.Vec4( i14027[42], i14027[43], i14027[44], i14027[45] )
  return i14026
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i14040 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i14041 = data
  i14040.settings = request.d('Spine.Unity.MeshGenerator+Settings', i14041[0], i14040.settings)
  return i14040
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i14042 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i14043 = data
  i14042.useClipping = !!i14043[0]
  i14042.zSpacing = i14043[1]
  i14042.pmaVertexColors = !!i14043[2]
  i14042.tintBlack = !!i14043[3]
  i14042.canvasGroupTintBlack = !!i14043[4]
  i14042.calculateTangents = !!i14043[5]
  i14042.addNormals = !!i14043[6]
  i14042.immutableTriangles = !!i14043[7]
  return i14042
}

Deserializers["Playable.Bed"] = function (request, data, root) {
  var i14044 = root || request.c( 'Playable.Bed' )
  var i14045 = data
  request.r(i14045[0], i14045[1], 0, i14044, '_skeleton')
  i14044._animName = i14045[2]
  request.r(i14045[3], i14045[4], 0, i14044, '_bed')
  request.r(i14045[5], i14045[6], 0, i14044, '_clip')
  i14044._onPlay = request.d('UnityEngine.Events.UnityEvent', i14045[7], i14044._onPlay)
  request.r(i14045[8], i14045[9], 0, i14044, '_source')
  return i14044
}

Deserializers["Playable.Bathroom"] = function (request, data, root) {
  var i14046 = root || request.c( 'Playable.Bathroom' )
  var i14047 = data
  request.r(i14047[0], i14047[1], 0, i14046, '_skeleton')
  i14046._animName = i14047[2]
  request.r(i14047[3], i14047[4], 0, i14046, '_mirror')
  request.r(i14047[5], i14047[6], 0, i14046, '_bathroom')
  request.r(i14047[7], i14047[8], 0, i14046, '_clip')
  i14046._onPlay = request.d('UnityEngine.Events.UnityEvent', i14047[9], i14046._onPlay)
  request.r(i14047[10], i14047[11], 0, i14046, '_source')
  return i14046
}

Deserializers["Playable.Computer"] = function (request, data, root) {
  var i14048 = root || request.c( 'Playable.Computer' )
  var i14049 = data
  request.r(i14049[0], i14049[1], 0, i14048, '_skeleton')
  i14048._animName = i14049[2]
  request.r(i14049[3], i14049[4], 0, i14048, '_computerOld')
  request.r(i14049[5], i14049[6], 0, i14048, '_computer')
  i14048._onPlay = request.d('UnityEngine.Events.UnityEvent', i14049[7], i14048._onPlay)
  request.r(i14049[8], i14049[9], 0, i14048, '_source')
  return i14048
}

Deserializers["Playable.Toilet"] = function (request, data, root) {
  var i14050 = root || request.c( 'Playable.Toilet' )
  var i14051 = data
  request.r(i14051[0], i14051[1], 0, i14050, '_skeleton')
  i14050._animName = i14051[2]
  request.r(i14051[3], i14051[4], 0, i14050, '_toilet')
  request.r(i14051[5], i14051[6], 0, i14050, '_clip')
  i14050._onPlay = request.d('UnityEngine.Events.UnityEvent', i14051[7], i14050._onPlay)
  request.r(i14051[8], i14051[9], 0, i14050, '_source')
  return i14050
}

Deserializers["Playable.ItemRoot"] = function (request, data, root) {
  var i14052 = root || request.c( 'Playable.ItemRoot' )
  var i14053 = data
  var i14055 = i14053[0]
  var i14054 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.Item')))
  for(var i = 0; i < i14055.length; i += 2) {
  request.r(i14055[i + 0], i14055[i + 1], 1, i14054, '')
  }
  i14052._itemList = i14054
  request.r(i14053[1], i14053[2], 0, i14052, '_canvas')
  request.r(i14053[3], i14053[4], 0, i14052, '_camera')
  return i14052
}

Deserializers["Playable.Item"] = function (request, data, root) {
  var i14058 = root || request.c( 'Playable.Item' )
  var i14059 = data
  return i14058
}

Deserializers["Playable.AudioManager"] = function (request, data, root) {
  var i14060 = root || request.c( 'Playable.AudioManager' )
  var i14061 = data
  var i14063 = i14061[0]
  var i14062 = new (System.Collections.Generic.List$1(Bridge.ns('Playable.SoundData')))
  for(var i = 0; i < i14063.length; i += 1) {
    i14062.add(request.d('Playable.SoundData', i14063[i + 0]));
  }
  i14060._sounds = i14062
  request.r(i14061[1], i14061[2], 0, i14060, '_audioMusic')
  request.r(i14061[3], i14061[4], 0, i14060, '_audioSound')
  return i14060
}

Deserializers["Playable.SoundData"] = function (request, data, root) {
  var i14066 = root || request.c( 'Playable.SoundData' )
  var i14067 = data
  i14066.Type = i14067[0]
  request.r(i14067[1], i14067[2], 0, i14066, 'Clip')
  return i14066
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i14068 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i14069 = data
  request.r(i14069[0], i14069[1], 0, i14068, 'm_FirstSelected')
  i14068.m_sendNavigationEvents = !!i14069[2]
  i14068.m_DragThreshold = i14069[3]
  return i14068
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i14070 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i14071 = data
  i14070.m_HorizontalAxis = i14071[0]
  i14070.m_VerticalAxis = i14071[1]
  i14070.m_SubmitButton = i14071[2]
  i14070.m_CancelButton = i14071[3]
  i14070.m_InputActionsPerSecond = i14071[4]
  i14070.m_RepeatDelay = i14071[5]
  i14070.m_ForceModuleActive = !!i14071[6]
  i14070.m_SendPointerHoverToParent = !!i14071[7]
  return i14070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i14072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i14073 = data
  i14072.ambientIntensity = i14073[0]
  i14072.reflectionIntensity = i14073[1]
  i14072.ambientMode = i14073[2]
  i14072.ambientLight = new pc.Color(i14073[3], i14073[4], i14073[5], i14073[6])
  i14072.ambientSkyColor = new pc.Color(i14073[7], i14073[8], i14073[9], i14073[10])
  i14072.ambientGroundColor = new pc.Color(i14073[11], i14073[12], i14073[13], i14073[14])
  i14072.ambientEquatorColor = new pc.Color(i14073[15], i14073[16], i14073[17], i14073[18])
  i14072.fogColor = new pc.Color(i14073[19], i14073[20], i14073[21], i14073[22])
  i14072.fogEndDistance = i14073[23]
  i14072.fogStartDistance = i14073[24]
  i14072.fogDensity = i14073[25]
  i14072.fog = !!i14073[26]
  request.r(i14073[27], i14073[28], 0, i14072, 'skybox')
  i14072.fogMode = i14073[29]
  var i14075 = i14073[30]
  var i14074 = []
  for(var i = 0; i < i14075.length; i += 1) {
    i14074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i14075[i + 0]) );
  }
  i14072.lightmaps = i14074
  i14072.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i14073[31], i14072.lightProbes)
  i14072.lightmapsMode = i14073[32]
  i14072.mixedBakeMode = i14073[33]
  i14072.environmentLightingMode = i14073[34]
  i14072.ambientProbe = new pc.SphericalHarmonicsL2(i14073[35])
  request.r(i14073[36], i14073[37], 0, i14072, 'customReflection')
  request.r(i14073[38], i14073[39], 0, i14072, 'defaultReflection')
  i14072.defaultReflectionMode = i14073[40]
  i14072.defaultReflectionResolution = i14073[41]
  i14072.sunLightObjectId = i14073[42]
  i14072.pixelLightCount = i14073[43]
  i14072.defaultReflectionHDR = !!i14073[44]
  i14072.hasLightDataAsset = !!i14073[45]
  i14072.hasManualGenerate = !!i14073[46]
  return i14072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i14078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i14079 = data
  request.r(i14079[0], i14079[1], 0, i14078, 'lightmapColor')
  request.r(i14079[2], i14079[3], 0, i14078, 'lightmapDirection')
  request.r(i14079[4], i14079[5], 0, i14078, 'shadowMask')
  return i14078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i14080 = root || new UnityEngine.LightProbes()
  var i14081 = data
  return i14080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i14088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i14089 = data
  var i14091 = i14089[0]
  var i14090 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i14091.length; i += 1) {
    i14090.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i14091[i + 0]));
  }
  i14088.ShaderCompilationErrors = i14090
  i14088.name = i14089[1]
  i14088.guid = i14089[2]
  var i14093 = i14089[3]
  var i14092 = []
  for(var i = 0; i < i14093.length; i += 1) {
    i14092.push( i14093[i + 0] );
  }
  i14088.shaderDefinedKeywords = i14092
  var i14095 = i14089[4]
  var i14094 = []
  for(var i = 0; i < i14095.length; i += 1) {
    i14094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i14095[i + 0]) );
  }
  i14088.passes = i14094
  var i14097 = i14089[5]
  var i14096 = []
  for(var i = 0; i < i14097.length; i += 1) {
    i14096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i14097[i + 0]) );
  }
  i14088.usePasses = i14096
  var i14099 = i14089[6]
  var i14098 = []
  for(var i = 0; i < i14099.length; i += 1) {
    i14098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i14099[i + 0]) );
  }
  i14088.defaultParameterValues = i14098
  request.r(i14089[7], i14089[8], 0, i14088, 'unityFallbackShader')
  i14088.readDepth = !!i14089[9]
  i14088.hasDepthOnlyPass = !!i14089[10]
  i14088.isCreatedByShaderGraph = !!i14089[11]
  i14088.disableBatching = !!i14089[12]
  i14088.compiled = !!i14089[13]
  return i14088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i14102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i14103 = data
  i14102.shaderName = i14103[0]
  i14102.errorMessage = i14103[1]
  return i14102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i14106 = root || new pc.UnityShaderPass()
  var i14107 = data
  i14106.id = i14107[0]
  i14106.subShaderIndex = i14107[1]
  i14106.name = i14107[2]
  i14106.passType = i14107[3]
  i14106.grabPassTextureName = i14107[4]
  i14106.usePass = !!i14107[5]
  i14106.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14107[6], i14106.zTest)
  i14106.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14107[7], i14106.zWrite)
  i14106.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14107[8], i14106.culling)
  i14106.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i14107[9], i14106.blending)
  i14106.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i14107[10], i14106.alphaBlending)
  i14106.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14107[11], i14106.colorWriteMask)
  i14106.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14107[12], i14106.offsetUnits)
  i14106.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14107[13], i14106.offsetFactor)
  i14106.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14107[14], i14106.stencilRef)
  i14106.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14107[15], i14106.stencilReadMask)
  i14106.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14107[16], i14106.stencilWriteMask)
  i14106.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i14107[17], i14106.stencilOp)
  i14106.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i14107[18], i14106.stencilOpFront)
  i14106.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i14107[19], i14106.stencilOpBack)
  var i14109 = i14107[20]
  var i14108 = []
  for(var i = 0; i < i14109.length; i += 1) {
    i14108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i14109[i + 0]) );
  }
  i14106.tags = i14108
  var i14111 = i14107[21]
  var i14110 = []
  for(var i = 0; i < i14111.length; i += 1) {
    i14110.push( i14111[i + 0] );
  }
  i14106.passDefinedKeywords = i14110
  var i14113 = i14107[22]
  var i14112 = []
  for(var i = 0; i < i14113.length; i += 1) {
    i14112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i14113[i + 0]) );
  }
  i14106.passDefinedKeywordGroups = i14112
  var i14115 = i14107[23]
  var i14114 = []
  for(var i = 0; i < i14115.length; i += 1) {
    i14114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i14115[i + 0]) );
  }
  i14106.variants = i14114
  var i14117 = i14107[24]
  var i14116 = []
  for(var i = 0; i < i14117.length; i += 1) {
    i14116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i14117[i + 0]) );
  }
  i14106.excludedVariants = i14116
  i14106.hasDepthReader = !!i14107[25]
  return i14106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i14118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i14119 = data
  i14118.val = i14119[0]
  i14118.name = i14119[1]
  return i14118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i14120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i14121 = data
  i14120.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14121[0], i14120.src)
  i14120.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14121[1], i14120.dst)
  i14120.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14121[2], i14120.op)
  return i14120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i14122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i14123 = data
  i14122.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14123[0], i14122.pass)
  i14122.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14123[1], i14122.fail)
  i14122.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14123[2], i14122.zFail)
  i14122.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14123[3], i14122.comp)
  return i14122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i14126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i14127 = data
  i14126.name = i14127[0]
  i14126.value = i14127[1]
  return i14126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i14130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i14131 = data
  var i14133 = i14131[0]
  var i14132 = []
  for(var i = 0; i < i14133.length; i += 1) {
    i14132.push( i14133[i + 0] );
  }
  i14130.keywords = i14132
  i14130.hasDiscard = !!i14131[1]
  return i14130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i14136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i14137 = data
  i14136.passId = i14137[0]
  i14136.subShaderIndex = i14137[1]
  var i14139 = i14137[2]
  var i14138 = []
  for(var i = 0; i < i14139.length; i += 1) {
    i14138.push( i14139[i + 0] );
  }
  i14136.keywords = i14138
  i14136.vertexProgram = i14137[3]
  i14136.fragmentProgram = i14137[4]
  i14136.exportedForWebGl2 = !!i14137[5]
  i14136.readDepth = !!i14137[6]
  return i14136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i14142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i14143 = data
  request.r(i14143[0], i14143[1], 0, i14142, 'shader')
  i14142.pass = i14143[2]
  return i14142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i14146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i14147 = data
  i14146.name = i14147[0]
  i14146.type = i14147[1]
  i14146.value = new pc.Vec4( i14147[2], i14147[3], i14147[4], i14147[5] )
  i14146.textureValue = i14147[6]
  i14146.shaderPropertyFlag = i14147[7]
  return i14146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i14148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i14149 = data
  i14148.name = i14149[0]
  request.r(i14149[1], i14149[2], 0, i14148, 'texture')
  i14148.aabb = i14149[3]
  i14148.vertices = i14149[4]
  i14148.triangles = i14149[5]
  i14148.textureRect = UnityEngine.Rect.MinMaxRect(i14149[6], i14149[7], i14149[8], i14149[9])
  i14148.packedRect = UnityEngine.Rect.MinMaxRect(i14149[10], i14149[11], i14149[12], i14149[13])
  i14148.border = new pc.Vec4( i14149[14], i14149[15], i14149[16], i14149[17] )
  i14148.transparency = i14149[18]
  i14148.bounds = i14149[19]
  i14148.pixelsPerUnit = i14149[20]
  i14148.textureWidth = i14149[21]
  i14148.textureHeight = i14149[22]
  i14148.nativeSize = new pc.Vec2( i14149[23], i14149[24] )
  i14148.pivot = new pc.Vec2( i14149[25], i14149[26] )
  i14148.textureRectOffset = new pc.Vec2( i14149[27], i14149[28] )
  return i14148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i14150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i14151 = data
  i14150.name = i14151[0]
  return i14150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i14152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i14153 = data
  i14152.name = i14153[0]
  i14152.ascent = i14153[1]
  i14152.originalLineHeight = i14153[2]
  i14152.fontSize = i14153[3]
  var i14155 = i14153[4]
  var i14154 = []
  for(var i = 0; i < i14155.length; i += 1) {
    i14154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i14155[i + 0]) );
  }
  i14152.characterInfo = i14154
  request.r(i14153[5], i14153[6], 0, i14152, 'texture')
  i14152.originalFontSize = i14153[7]
  return i14152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i14158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i14159 = data
  i14158.index = i14159[0]
  i14158.advance = i14159[1]
  i14158.bearing = i14159[2]
  i14158.glyphWidth = i14159[3]
  i14158.glyphHeight = i14159[4]
  i14158.minX = i14159[5]
  i14158.maxX = i14159[6]
  i14158.minY = i14159[7]
  i14158.maxY = i14159[8]
  i14158.uvBottomLeftX = i14159[9]
  i14158.uvBottomLeftY = i14159[10]
  i14158.uvBottomRightX = i14159[11]
  i14158.uvBottomRightY = i14159[12]
  i14158.uvTopLeftX = i14159[13]
  i14158.uvTopLeftY = i14159[14]
  i14158.uvTopRightX = i14159[15]
  i14158.uvTopRightY = i14159[16]
  return i14158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i14160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i14161 = data
  i14160.name = i14161[0]
  i14160.bytes64 = i14161[1]
  i14160.data = i14161[2]
  return i14160
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i14162 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i14163 = data
  i14162.normalStyle = i14163[0]
  i14162.normalSpacingOffset = i14163[1]
  i14162.boldStyle = i14163[2]
  i14162.boldSpacing = i14163[3]
  i14162.italicStyle = i14163[4]
  i14162.tabSize = i14163[5]
  request.r(i14163[6], i14163[7], 0, i14162, 'atlas')
  i14162.m_SourceFontFileGUID = i14163[8]
  i14162.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i14163[9], i14162.m_CreationSettings)
  request.r(i14163[10], i14163[11], 0, i14162, 'm_SourceFontFile')
  i14162.m_SourceFontFilePath = i14163[12]
  i14162.m_AtlasPopulationMode = i14163[13]
  i14162.InternalDynamicOS = !!i14163[14]
  var i14165 = i14163[15]
  var i14164 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i14165.length; i += 1) {
    i14164.add(request.d('UnityEngine.TextCore.Glyph', i14165[i + 0]));
  }
  i14162.m_GlyphTable = i14164
  var i14167 = i14163[16]
  var i14166 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i14167.length; i += 1) {
    i14166.add(request.d('TMPro.TMP_Character', i14167[i + 0]));
  }
  i14162.m_CharacterTable = i14166
  var i14169 = i14163[17]
  var i14168 = []
  for(var i = 0; i < i14169.length; i += 2) {
  request.r(i14169[i + 0], i14169[i + 1], 2, i14168, '')
  }
  i14162.m_AtlasTextures = i14168
  i14162.m_AtlasTextureIndex = i14163[18]
  i14162.m_IsMultiAtlasTexturesEnabled = !!i14163[19]
  i14162.m_GetFontFeatures = !!i14163[20]
  i14162.m_ClearDynamicDataOnBuild = !!i14163[21]
  i14162.m_AtlasWidth = i14163[22]
  i14162.m_AtlasHeight = i14163[23]
  i14162.m_AtlasPadding = i14163[24]
  i14162.m_AtlasRenderMode = i14163[25]
  var i14171 = i14163[26]
  var i14170 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i14171.length; i += 1) {
    i14170.add(request.d('UnityEngine.TextCore.GlyphRect', i14171[i + 0]));
  }
  i14162.m_UsedGlyphRects = i14170
  var i14173 = i14163[27]
  var i14172 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i14173.length; i += 1) {
    i14172.add(request.d('UnityEngine.TextCore.GlyphRect', i14173[i + 0]));
  }
  i14162.m_FreeGlyphRects = i14172
  i14162.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i14163[28], i14162.m_FontFeatureTable)
  i14162.m_ShouldReimportFontFeatures = !!i14163[29]
  var i14175 = i14163[30]
  var i14174 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i14175.length; i += 2) {
  request.r(i14175[i + 0], i14175[i + 1], 1, i14174, '')
  }
  i14162.m_FallbackFontAssetTable = i14174
  var i14177 = i14163[31]
  var i14176 = []
  for(var i = 0; i < i14177.length; i += 1) {
    i14176.push( request.d('TMPro.TMP_FontWeightPair', i14177[i + 0]) );
  }
  i14162.m_FontWeightTable = i14176
  var i14179 = i14163[32]
  var i14178 = []
  for(var i = 0; i < i14179.length; i += 1) {
    i14178.push( request.d('TMPro.TMP_FontWeightPair', i14179[i + 0]) );
  }
  i14162.fontWeights = i14178
  i14162.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i14163[33], i14162.m_fontInfo)
  var i14181 = i14163[34]
  var i14180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i14181.length; i += 1) {
    i14180.add(request.d('TMPro.TMP_Glyph', i14181[i + 0]));
  }
  i14162.m_glyphInfoList = i14180
  i14162.m_KerningTable = request.d('TMPro.KerningTable', i14163[35], i14162.m_KerningTable)
  var i14183 = i14163[36]
  var i14182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i14183.length; i += 2) {
  request.r(i14183[i + 0], i14183[i + 1], 1, i14182, '')
  }
  i14162.fallbackFontAssets = i14182
  i14162.m_Version = i14163[37]
  i14162.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i14163[38], i14162.m_FaceInfo)
  request.r(i14163[39], i14163[40], 0, i14162, 'm_Material')
  return i14162
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i14184 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i14185 = data
  i14184.sourceFontFileName = i14185[0]
  i14184.sourceFontFileGUID = i14185[1]
  i14184.faceIndex = i14185[2]
  i14184.pointSizeSamplingMode = i14185[3]
  i14184.pointSize = i14185[4]
  i14184.padding = i14185[5]
  i14184.paddingMode = i14185[6]
  i14184.packingMode = i14185[7]
  i14184.atlasWidth = i14185[8]
  i14184.atlasHeight = i14185[9]
  i14184.characterSetSelectionMode = i14185[10]
  i14184.characterSequence = i14185[11]
  i14184.referencedFontAssetGUID = i14185[12]
  i14184.referencedTextAssetGUID = i14185[13]
  i14184.fontStyle = i14185[14]
  i14184.fontStyleModifier = i14185[15]
  i14184.renderMode = i14185[16]
  i14184.includeFontFeatures = !!i14185[17]
  return i14184
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i14188 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i14189 = data
  i14188.m_Index = i14189[0]
  i14188.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i14189[1], i14188.m_Metrics)
  i14188.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i14189[2], i14188.m_GlyphRect)
  i14188.m_Scale = i14189[3]
  i14188.m_AtlasIndex = i14189[4]
  i14188.m_ClassDefinitionType = i14189[5]
  return i14188
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i14190 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i14191 = data
  i14190.m_Width = i14191[0]
  i14190.m_Height = i14191[1]
  i14190.m_HorizontalBearingX = i14191[2]
  i14190.m_HorizontalBearingY = i14191[3]
  i14190.m_HorizontalAdvance = i14191[4]
  return i14190
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i14192 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i14193 = data
  i14192.m_X = i14193[0]
  i14192.m_Y = i14193[1]
  i14192.m_Width = i14193[2]
  i14192.m_Height = i14193[3]
  return i14192
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i14196 = root || request.c( 'TMPro.TMP_Character' )
  var i14197 = data
  i14196.m_ElementType = i14197[0]
  i14196.m_Unicode = i14197[1]
  i14196.m_GlyphIndex = i14197[2]
  i14196.m_Scale = i14197[3]
  return i14196
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i14202 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i14203 = data
  var i14205 = i14203[0]
  var i14204 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i14205.length; i += 1) {
    i14204.add(request.d('TMPro.MultipleSubstitutionRecord', i14205[i + 0]));
  }
  i14202.m_MultipleSubstitutionRecords = i14204
  var i14207 = i14203[1]
  var i14206 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i14207.length; i += 1) {
    i14206.add(request.d('TMPro.LigatureSubstitutionRecord', i14207[i + 0]));
  }
  i14202.m_LigatureSubstitutionRecords = i14206
  var i14209 = i14203[2]
  var i14208 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i14209.length; i += 1) {
    i14208.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i14209[i + 0]));
  }
  i14202.m_GlyphPairAdjustmentRecords = i14208
  var i14211 = i14203[3]
  var i14210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i14211.length; i += 1) {
    i14210.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i14211[i + 0]));
  }
  i14202.m_MarkToBaseAdjustmentRecords = i14210
  var i14213 = i14203[4]
  var i14212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i14213.length; i += 1) {
    i14212.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i14213[i + 0]));
  }
  i14202.m_MarkToMarkAdjustmentRecords = i14212
  return i14202
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i14216 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i14217 = data
  i14216.m_TargetGlyphID = i14217[0]
  i14216.m_SubstituteGlyphIDs = i14217[1]
  return i14216
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i14220 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i14221 = data
  i14220.m_ComponentGlyphIDs = i14221[0]
  i14220.m_LigatureGlyphID = i14221[1]
  return i14220
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i14224 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i14225 = data
  i14224.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i14225[0], i14224.m_FirstAdjustmentRecord)
  i14224.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i14225[1], i14224.m_SecondAdjustmentRecord)
  i14224.m_FeatureLookupFlags = i14225[2]
  return i14224
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i14228 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i14229 = data
  i14228.m_BaseGlyphID = i14229[0]
  i14228.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i14229[1], i14228.m_BaseGlyphAnchorPoint)
  i14228.m_MarkGlyphID = i14229[2]
  i14228.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i14229[3], i14228.m_MarkPositionAdjustment)
  return i14228
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i14232 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i14233 = data
  i14232.m_BaseMarkGlyphID = i14233[0]
  i14232.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i14233[1], i14232.m_BaseMarkGlyphAnchorPoint)
  i14232.m_CombiningMarkGlyphID = i14233[2]
  i14232.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i14233[3], i14232.m_CombiningMarkPositionAdjustment)
  return i14232
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i14238 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i14239 = data
  request.r(i14239[0], i14239[1], 0, i14238, 'regularTypeface')
  request.r(i14239[2], i14239[3], 0, i14238, 'italicTypeface')
  return i14238
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i14240 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i14241 = data
  i14240.Name = i14241[0]
  i14240.PointSize = i14241[1]
  i14240.Scale = i14241[2]
  i14240.CharacterCount = i14241[3]
  i14240.LineHeight = i14241[4]
  i14240.Baseline = i14241[5]
  i14240.Ascender = i14241[6]
  i14240.CapHeight = i14241[7]
  i14240.Descender = i14241[8]
  i14240.CenterLine = i14241[9]
  i14240.SuperscriptOffset = i14241[10]
  i14240.SubscriptOffset = i14241[11]
  i14240.SubSize = i14241[12]
  i14240.Underline = i14241[13]
  i14240.UnderlineThickness = i14241[14]
  i14240.strikethrough = i14241[15]
  i14240.strikethroughThickness = i14241[16]
  i14240.TabWidth = i14241[17]
  i14240.Padding = i14241[18]
  i14240.AtlasWidth = i14241[19]
  i14240.AtlasHeight = i14241[20]
  return i14240
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i14244 = root || request.c( 'TMPro.TMP_Glyph' )
  var i14245 = data
  i14244.id = i14245[0]
  i14244.x = i14245[1]
  i14244.y = i14245[2]
  i14244.width = i14245[3]
  i14244.height = i14245[4]
  i14244.xOffset = i14245[5]
  i14244.yOffset = i14245[6]
  i14244.xAdvance = i14245[7]
  i14244.scale = i14245[8]
  return i14244
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i14246 = root || request.c( 'TMPro.KerningTable' )
  var i14247 = data
  var i14249 = i14247[0]
  var i14248 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i14249.length; i += 1) {
    i14248.add(request.d('TMPro.KerningPair', i14249[i + 0]));
  }
  i14246.kerningPairs = i14248
  return i14246
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i14252 = root || request.c( 'TMPro.KerningPair' )
  var i14253 = data
  i14252.xOffset = i14253[0]
  i14252.m_FirstGlyph = i14253[1]
  i14252.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i14253[2], i14252.m_FirstGlyphAdjustments)
  i14252.m_SecondGlyph = i14253[3]
  i14252.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i14253[4], i14252.m_SecondGlyphAdjustments)
  i14252.m_IgnoreSpacingAdjustments = !!i14253[5]
  return i14252
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i14254 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i14255 = data
  i14254.m_FaceIndex = i14255[0]
  i14254.m_FamilyName = i14255[1]
  i14254.m_StyleName = i14255[2]
  i14254.m_PointSize = i14255[3]
  i14254.m_Scale = i14255[4]
  i14254.m_UnitsPerEM = i14255[5]
  i14254.m_LineHeight = i14255[6]
  i14254.m_AscentLine = i14255[7]
  i14254.m_CapLine = i14255[8]
  i14254.m_MeanLine = i14255[9]
  i14254.m_Baseline = i14255[10]
  i14254.m_DescentLine = i14255[11]
  i14254.m_SuperscriptOffset = i14255[12]
  i14254.m_SuperscriptSize = i14255[13]
  i14254.m_SubscriptOffset = i14255[14]
  i14254.m_SubscriptSize = i14255[15]
  i14254.m_UnderlineOffset = i14255[16]
  i14254.m_UnderlineThickness = i14255[17]
  i14254.m_StrikethroughOffset = i14255[18]
  i14254.m_StrikethroughThickness = i14255[19]
  i14254.m_TabWidth = i14255[20]
  return i14254
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i14256 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i14257 = data
  var i14259 = i14257[0]
  var i14258 = []
  for(var i = 0; i < i14259.length; i += 2) {
  request.r(i14259[i + 0], i14259[i + 1], 2, i14258, '')
  }
  i14256.atlasAssets = i14258
  i14256.scale = i14257[1]
  request.r(i14257[2], i14257[3], 0, i14256, 'skeletonJSON')
  i14256.isUpgradingBlendModeMaterials = !!i14257[4]
  i14256.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i14257[5], i14256.blendModeMaterials)
  var i14261 = i14257[6]
  var i14260 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i14261.length; i += 2) {
  request.r(i14261[i + 0], i14261[i + 1], 1, i14260, '')
  }
  i14256.skeletonDataModifiers = i14260
  var i14263 = i14257[7]
  var i14262 = []
  for(var i = 0; i < i14263.length; i += 1) {
    i14262.push( i14263[i + 0] );
  }
  i14256.fromAnimation = i14262
  var i14265 = i14257[8]
  var i14264 = []
  for(var i = 0; i < i14265.length; i += 1) {
    i14264.push( i14265[i + 0] );
  }
  i14256.toAnimation = i14264
  i14256.duration = i14257[9]
  i14256.defaultMix = i14257[10]
  request.r(i14257[11], i14257[12], 0, i14256, 'controller')
  return i14256
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i14268 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i14269 = data
  i14268.applyAdditiveMaterial = !!i14269[0]
  var i14271 = i14269[1]
  var i14270 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i14271.length; i += 1) {
    i14270.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i14271[i + 0]));
  }
  i14268.additiveMaterials = i14270
  var i14273 = i14269[2]
  var i14272 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i14273.length; i += 1) {
    i14272.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i14273[i + 0]));
  }
  i14268.multiplyMaterials = i14272
  var i14275 = i14269[3]
  var i14274 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i14275.length; i += 1) {
    i14274.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i14275[i + 0]));
  }
  i14268.screenMaterials = i14274
  i14268.requiresBlendModeMaterials = !!i14269[4]
  return i14268
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i14278 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i14279 = data
  i14278.pageName = i14279[0]
  request.r(i14279[1], i14279[2], 0, i14278, 'material')
  return i14278
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i14282 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i14283 = data
  request.r(i14283[0], i14283[1], 0, i14282, 'atlasFile')
  var i14285 = i14283[2]
  var i14284 = []
  for(var i = 0; i < i14285.length; i += 2) {
  request.r(i14285[i + 0], i14285[i + 1], 2, i14284, '')
  }
  i14282.materials = i14284
  i14282.textureLoadingMode = i14283[3]
  request.r(i14283[4], i14283[5], 0, i14282, 'onDemandTextureLoader')
  return i14282
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i14286 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i14287 = data
  i14286.useSafeMode = !!i14287[0]
  i14286.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i14287[1], i14286.safeModeOptions)
  i14286.timeScale = i14287[2]
  i14286.unscaledTimeScale = i14287[3]
  i14286.useSmoothDeltaTime = !!i14287[4]
  i14286.maxSmoothUnscaledTime = i14287[5]
  i14286.rewindCallbackMode = i14287[6]
  i14286.showUnityEditorReport = !!i14287[7]
  i14286.logBehaviour = i14287[8]
  i14286.drawGizmos = !!i14287[9]
  i14286.defaultRecyclable = !!i14287[10]
  i14286.defaultAutoPlay = i14287[11]
  i14286.defaultUpdateType = i14287[12]
  i14286.defaultTimeScaleIndependent = !!i14287[13]
  i14286.defaultEaseType = i14287[14]
  i14286.defaultEaseOvershootOrAmplitude = i14287[15]
  i14286.defaultEasePeriod = i14287[16]
  i14286.defaultAutoKill = !!i14287[17]
  i14286.defaultLoopType = i14287[18]
  i14286.debugMode = !!i14287[19]
  i14286.debugStoreTargetId = !!i14287[20]
  i14286.showPreviewPanel = !!i14287[21]
  i14286.storeSettingsLocation = i14287[22]
  i14286.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i14287[23], i14286.modules)
  i14286.createASMDEF = !!i14287[24]
  i14286.showPlayingTweens = !!i14287[25]
  i14286.showPausedTweens = !!i14287[26]
  return i14286
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i14288 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i14289 = data
  i14288.logBehaviour = i14289[0]
  i14288.nestedTweenFailureBehaviour = i14289[1]
  return i14288
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i14290 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i14291 = data
  i14290.showPanel = !!i14291[0]
  i14290.audioEnabled = !!i14291[1]
  i14290.physicsEnabled = !!i14291[2]
  i14290.physics2DEnabled = !!i14291[3]
  i14290.spriteEnabled = !!i14291[4]
  i14290.uiEnabled = !!i14291[5]
  i14290.uiToolkitEnabled = !!i14291[6]
  i14290.textMeshProEnabled = !!i14291[7]
  i14290.tk2DEnabled = !!i14291[8]
  i14290.deAudioEnabled = !!i14291[9]
  i14290.deUnityExtendedEnabled = !!i14291[10]
  i14290.epoOutlineEnabled = !!i14291[11]
  return i14290
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i14292 = root || request.c( 'TMPro.TMP_Settings' )
  var i14293 = data
  i14292.assetVersion = i14293[0]
  i14292.m_TextWrappingMode = i14293[1]
  i14292.m_enableKerning = !!i14293[2]
  var i14295 = i14293[3]
  var i14294 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i14295.length; i += 1) {
    i14294.add(i14295[i + 0]);
  }
  i14292.m_ActiveFontFeatures = i14294
  i14292.m_enableExtraPadding = !!i14293[4]
  i14292.m_enableTintAllSprites = !!i14293[5]
  i14292.m_enableParseEscapeCharacters = !!i14293[6]
  i14292.m_EnableRaycastTarget = !!i14293[7]
  i14292.m_GetFontFeaturesAtRuntime = !!i14293[8]
  i14292.m_missingGlyphCharacter = i14293[9]
  i14292.m_ClearDynamicDataOnBuild = !!i14293[10]
  i14292.m_warningsDisabled = !!i14293[11]
  request.r(i14293[12], i14293[13], 0, i14292, 'm_defaultFontAsset')
  i14292.m_defaultFontAssetPath = i14293[14]
  i14292.m_defaultFontSize = i14293[15]
  i14292.m_defaultAutoSizeMinRatio = i14293[16]
  i14292.m_defaultAutoSizeMaxRatio = i14293[17]
  i14292.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i14293[18], i14293[19] )
  i14292.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i14293[20], i14293[21] )
  i14292.m_autoSizeTextContainer = !!i14293[22]
  i14292.m_IsTextObjectScaleStatic = !!i14293[23]
  var i14297 = i14293[24]
  var i14296 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i14297.length; i += 2) {
  request.r(i14297[i + 0], i14297[i + 1], 1, i14296, '')
  }
  i14292.m_fallbackFontAssets = i14296
  i14292.m_matchMaterialPreset = !!i14293[25]
  i14292.m_HideSubTextObjects = !!i14293[26]
  request.r(i14293[27], i14293[28], 0, i14292, 'm_defaultSpriteAsset')
  i14292.m_defaultSpriteAssetPath = i14293[29]
  i14292.m_enableEmojiSupport = !!i14293[30]
  i14292.m_MissingCharacterSpriteUnicode = i14293[31]
  var i14299 = i14293[32]
  var i14298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i14299.length; i += 2) {
  request.r(i14299[i + 0], i14299[i + 1], 1, i14298, '')
  }
  i14292.m_EmojiFallbackTextAssets = i14298
  i14292.m_defaultColorGradientPresetsPath = i14293[33]
  request.r(i14293[34], i14293[35], 0, i14292, 'm_defaultStyleSheet')
  i14292.m_StyleSheetsResourcePath = i14293[36]
  request.r(i14293[37], i14293[38], 0, i14292, 'm_leadingCharacters')
  request.r(i14293[39], i14293[40], 0, i14292, 'm_followingCharacters')
  i14292.m_UseModernHangulLineBreakingRules = !!i14293[41]
  return i14292
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i14302 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i14303 = data
  i14302.m_GlyphIndex = i14303[0]
  i14302.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i14303[1], i14302.m_GlyphValueRecord)
  return i14302
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i14304 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i14305 = data
  i14304.m_XPlacement = i14305[0]
  i14304.m_YPlacement = i14305[1]
  i14304.m_XAdvance = i14305[2]
  i14304.m_YAdvance = i14305[3]
  return i14304
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i14306 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i14307 = data
  request.r(i14307[0], i14307[1], 0, i14306, 'spriteSheet')
  var i14309 = i14307[2]
  var i14308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i14309.length; i += 1) {
    i14308.add(request.d('TMPro.TMP_Sprite', i14309[i + 0]));
  }
  i14306.spriteInfoList = i14308
  var i14311 = i14307[3]
  var i14310 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i14311.length; i += 2) {
  request.r(i14311[i + 0], i14311[i + 1], 1, i14310, '')
  }
  i14306.fallbackSpriteAssets = i14310
  var i14313 = i14307[4]
  var i14312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i14313.length; i += 1) {
    i14312.add(request.d('TMPro.TMP_SpriteCharacter', i14313[i + 0]));
  }
  i14306.m_SpriteCharacterTable = i14312
  var i14315 = i14307[5]
  var i14314 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i14315.length; i += 1) {
    i14314.add(request.d('TMPro.TMP_SpriteGlyph', i14315[i + 0]));
  }
  i14306.m_GlyphTable = i14314
  i14306.m_Version = i14307[6]
  i14306.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i14307[7], i14306.m_FaceInfo)
  request.r(i14307[8], i14307[9], 0, i14306, 'm_Material')
  return i14306
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i14318 = root || request.c( 'TMPro.TMP_Sprite' )
  var i14319 = data
  i14318.name = i14319[0]
  i14318.hashCode = i14319[1]
  i14318.unicode = i14319[2]
  i14318.pivot = new pc.Vec2( i14319[3], i14319[4] )
  request.r(i14319[5], i14319[6], 0, i14318, 'sprite')
  i14318.id = i14319[7]
  i14318.x = i14319[8]
  i14318.y = i14319[9]
  i14318.width = i14319[10]
  i14318.height = i14319[11]
  i14318.xOffset = i14319[12]
  i14318.yOffset = i14319[13]
  i14318.xAdvance = i14319[14]
  i14318.scale = i14319[15]
  return i14318
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i14324 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i14325 = data
  i14324.m_Name = i14325[0]
  i14324.m_ElementType = i14325[1]
  i14324.m_Unicode = i14325[2]
  i14324.m_GlyphIndex = i14325[3]
  i14324.m_Scale = i14325[4]
  return i14324
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i14328 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i14329 = data
  request.r(i14329[0], i14329[1], 0, i14328, 'sprite')
  i14328.m_Index = i14329[2]
  i14328.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i14329[3], i14328.m_Metrics)
  i14328.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i14329[4], i14328.m_GlyphRect)
  i14328.m_Scale = i14329[5]
  i14328.m_AtlasIndex = i14329[6]
  i14328.m_ClassDefinitionType = i14329[7]
  return i14328
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i14330 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i14331 = data
  var i14333 = i14331[0]
  var i14332 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i14333.length; i += 1) {
    i14332.add(request.d('TMPro.TMP_Style', i14333[i + 0]));
  }
  i14330.m_StyleList = i14332
  return i14330
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i14336 = root || request.c( 'TMPro.TMP_Style' )
  var i14337 = data
  i14336.m_Name = i14337[0]
  i14336.m_HashCode = i14337[1]
  i14336.m_OpeningDefinition = i14337[2]
  i14336.m_ClosingDefinition = i14337[3]
  i14336.m_OpeningTagArray = i14337[4]
  i14336.m_ClosingTagArray = i14337[5]
  return i14336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i14338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i14339 = data
  var i14341 = i14339[0]
  var i14340 = []
  for(var i = 0; i < i14341.length; i += 1) {
    i14340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i14341[i + 0]) );
  }
  i14338.files = i14340
  i14338.componentToPrefabIds = i14339[1]
  return i14338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i14344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i14345 = data
  i14344.path = i14345[0]
  request.r(i14345[1], i14345[2], 0, i14344, 'unityObject')
  return i14344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i14346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i14347 = data
  var i14349 = i14347[0]
  var i14348 = []
  for(var i = 0; i < i14349.length; i += 1) {
    i14348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i14349[i + 0]) );
  }
  i14346.scriptsExecutionOrder = i14348
  var i14351 = i14347[1]
  var i14350 = []
  for(var i = 0; i < i14351.length; i += 1) {
    i14350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i14351[i + 0]) );
  }
  i14346.sortingLayers = i14350
  var i14353 = i14347[2]
  var i14352 = []
  for(var i = 0; i < i14353.length; i += 1) {
    i14352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i14353[i + 0]) );
  }
  i14346.cullingLayers = i14352
  i14346.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i14347[3], i14346.timeSettings)
  i14346.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i14347[4], i14346.physicsSettings)
  i14346.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i14347[5], i14346.physics2DSettings)
  i14346.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i14347[6], i14346.qualitySettings)
  i14346.enableRealtimeShadows = !!i14347[7]
  i14346.enableAutoInstancing = !!i14347[8]
  i14346.enableStaticBatching = !!i14347[9]
  i14346.enableDynamicBatching = !!i14347[10]
  i14346.usePreservativeDynamicBatching = !!i14347[11]
  i14346.lightmapEncodingQuality = i14347[12]
  i14346.desiredColorSpace = i14347[13]
  var i14355 = i14347[14]
  var i14354 = []
  for(var i = 0; i < i14355.length; i += 1) {
    i14354.push( i14355[i + 0] );
  }
  i14346.allTags = i14354
  return i14346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i14358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i14359 = data
  i14358.name = i14359[0]
  i14358.value = i14359[1]
  return i14358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i14362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i14363 = data
  i14362.id = i14363[0]
  i14362.name = i14363[1]
  i14362.value = i14363[2]
  return i14362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i14366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i14367 = data
  i14366.id = i14367[0]
  i14366.name = i14367[1]
  return i14366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i14368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i14369 = data
  i14368.fixedDeltaTime = i14369[0]
  i14368.maximumDeltaTime = i14369[1]
  i14368.timeScale = i14369[2]
  i14368.maximumParticleTimestep = i14369[3]
  return i14368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i14370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i14371 = data
  i14370.gravity = new pc.Vec3( i14371[0], i14371[1], i14371[2] )
  i14370.defaultSolverIterations = i14371[3]
  i14370.bounceThreshold = i14371[4]
  i14370.autoSyncTransforms = !!i14371[5]
  i14370.autoSimulation = !!i14371[6]
  var i14373 = i14371[7]
  var i14372 = []
  for(var i = 0; i < i14373.length; i += 1) {
    i14372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i14373[i + 0]) );
  }
  i14370.collisionMatrix = i14372
  return i14370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i14376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i14377 = data
  i14376.enabled = !!i14377[0]
  i14376.layerId = i14377[1]
  i14376.otherLayerId = i14377[2]
  return i14376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i14378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i14379 = data
  request.r(i14379[0], i14379[1], 0, i14378, 'material')
  i14378.gravity = new pc.Vec2( i14379[2], i14379[3] )
  i14378.positionIterations = i14379[4]
  i14378.velocityIterations = i14379[5]
  i14378.velocityThreshold = i14379[6]
  i14378.maxLinearCorrection = i14379[7]
  i14378.maxAngularCorrection = i14379[8]
  i14378.maxTranslationSpeed = i14379[9]
  i14378.maxRotationSpeed = i14379[10]
  i14378.baumgarteScale = i14379[11]
  i14378.baumgarteTOIScale = i14379[12]
  i14378.timeToSleep = i14379[13]
  i14378.linearSleepTolerance = i14379[14]
  i14378.angularSleepTolerance = i14379[15]
  i14378.defaultContactOffset = i14379[16]
  i14378.autoSimulation = !!i14379[17]
  i14378.queriesHitTriggers = !!i14379[18]
  i14378.queriesStartInColliders = !!i14379[19]
  i14378.callbacksOnDisable = !!i14379[20]
  i14378.reuseCollisionCallbacks = !!i14379[21]
  i14378.autoSyncTransforms = !!i14379[22]
  var i14381 = i14379[23]
  var i14380 = []
  for(var i = 0; i < i14381.length; i += 1) {
    i14380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i14381[i + 0]) );
  }
  i14378.collisionMatrix = i14380
  return i14378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i14384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i14385 = data
  i14384.enabled = !!i14385[0]
  i14384.layerId = i14385[1]
  i14384.otherLayerId = i14385[2]
  return i14384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i14386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i14387 = data
  var i14389 = i14387[0]
  var i14388 = []
  for(var i = 0; i < i14389.length; i += 1) {
    i14388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i14389[i + 0]) );
  }
  i14386.qualityLevels = i14388
  var i14391 = i14387[1]
  var i14390 = []
  for(var i = 0; i < i14391.length; i += 1) {
    i14390.push( i14391[i + 0] );
  }
  i14386.names = i14390
  i14386.shadows = i14387[2]
  i14386.anisotropicFiltering = i14387[3]
  i14386.antiAliasing = i14387[4]
  i14386.lodBias = i14387[5]
  i14386.shadowCascades = i14387[6]
  i14386.shadowDistance = i14387[7]
  i14386.shadowmaskMode = i14387[8]
  i14386.shadowProjection = i14387[9]
  i14386.shadowResolution = i14387[10]
  i14386.softParticles = !!i14387[11]
  i14386.softVegetation = !!i14387[12]
  i14386.activeColorSpace = i14387[13]
  i14386.desiredColorSpace = i14387[14]
  i14386.masterTextureLimit = i14387[15]
  i14386.maxQueuedFrames = i14387[16]
  i14386.particleRaycastBudget = i14387[17]
  i14386.pixelLightCount = i14387[18]
  i14386.realtimeReflectionProbes = !!i14387[19]
  i14386.shadowCascade2Split = i14387[20]
  i14386.shadowCascade4Split = new pc.Vec3( i14387[21], i14387[22], i14387[23] )
  i14386.streamingMipmapsActive = !!i14387[24]
  i14386.vSyncCount = i14387[25]
  i14386.asyncUploadBufferSize = i14387[26]
  i14386.asyncUploadTimeSlice = i14387[27]
  i14386.billboardsFaceCameraPosition = !!i14387[28]
  i14386.shadowNearPlaneOffset = i14387[29]
  i14386.streamingMipmapsMemoryBudget = i14387[30]
  i14386.maximumLODLevel = i14387[31]
  i14386.streamingMipmapsAddAllCameras = !!i14387[32]
  i14386.streamingMipmapsMaxLevelReduction = i14387[33]
  i14386.streamingMipmapsRenderersPerFrame = i14387[34]
  i14386.resolutionScalingFixedDPIFactor = i14387[35]
  i14386.streamingMipmapsMaxFileIORequests = i14387[36]
  i14386.currentQualityLevel = i14387[37]
  return i14386
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i14394 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i14395 = data
  i14394.m_XCoordinate = i14395[0]
  i14394.m_YCoordinate = i14395[1]
  return i14394
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i14396 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i14397 = data
  i14396.m_XPositionAdjustment = i14397[0]
  i14396.m_YPositionAdjustment = i14397[1]
  return i14396
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i14398 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i14399 = data
  i14398.xPlacement = i14399[0]
  i14398.yPlacement = i14399[1]
  i14398.xAdvance = i14399[2]
  i14398.yAdvance = i14399[3]
  return i14398
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

Deserializers.creativeName = "TBAP_V23_NgocNDL_HuyNQ";

Deserializers.lunaAppID = "33901";

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

Deserializers.buildID = "a234abcf-d37b-4203-891e-04b869aca073";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

