var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1898 = root || request.c( 'UnityEngine.JointSpring' )
  var i1899 = data
  i1898.spring = i1899[0]
  i1898.damper = i1899[1]
  i1898.targetPosition = i1899[2]
  return i1898
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1900 = root || request.c( 'UnityEngine.JointMotor' )
  var i1901 = data
  i1900.m_TargetVelocity = i1901[0]
  i1900.m_Force = i1901[1]
  i1900.m_FreeSpin = i1901[2]
  return i1900
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1902 = root || request.c( 'UnityEngine.JointLimits' )
  var i1903 = data
  i1902.m_Min = i1903[0]
  i1902.m_Max = i1903[1]
  i1902.m_Bounciness = i1903[2]
  i1902.m_BounceMinVelocity = i1903[3]
  i1902.m_ContactDistance = i1903[4]
  i1902.minBounce = i1903[5]
  i1902.maxBounce = i1903[6]
  return i1902
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1904 = root || request.c( 'UnityEngine.JointDrive' )
  var i1905 = data
  i1904.m_PositionSpring = i1905[0]
  i1904.m_PositionDamper = i1905[1]
  i1904.m_MaximumForce = i1905[2]
  i1904.m_UseAcceleration = i1905[3]
  return i1904
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1906 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1907 = data
  i1906.m_Spring = i1907[0]
  i1906.m_Damper = i1907[1]
  return i1906
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1908 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1909 = data
  i1908.m_Limit = i1909[0]
  i1908.m_Bounciness = i1909[1]
  i1908.m_ContactDistance = i1909[2]
  return i1908
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1910 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1911 = data
  i1910.m_ExtremumSlip = i1911[0]
  i1910.m_ExtremumValue = i1911[1]
  i1910.m_AsymptoteSlip = i1911[2]
  i1910.m_AsymptoteValue = i1911[3]
  i1910.m_Stiffness = i1911[4]
  return i1910
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1912 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1913 = data
  i1912.m_LowerAngle = i1913[0]
  i1912.m_UpperAngle = i1913[1]
  return i1912
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1914 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1915 = data
  i1914.m_MotorSpeed = i1915[0]
  i1914.m_MaximumMotorTorque = i1915[1]
  return i1914
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1916 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1917 = data
  i1916.m_DampingRatio = i1917[0]
  i1916.m_Frequency = i1917[1]
  i1916.m_Angle = i1917[2]
  return i1916
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1918 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1919 = data
  i1918.m_LowerTranslation = i1919[0]
  i1918.m_UpperTranslation = i1919[1]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1921 = data
  i1920.name = i1921[0]
  i1920.width = i1921[1]
  i1920.height = i1921[2]
  i1920.mipmapCount = i1921[3]
  i1920.anisoLevel = i1921[4]
  i1920.filterMode = i1921[5]
  i1920.hdr = !!i1921[6]
  i1920.format = i1921[7]
  i1920.wrapMode = i1921[8]
  i1920.alphaIsTransparency = !!i1921[9]
  i1920.alphaSource = i1921[10]
  i1920.graphicsFormat = i1921[11]
  i1920.sRGBTexture = !!i1921[12]
  i1920.desiredColorSpace = i1921[13]
  i1920.wrapU = i1921[14]
  i1920.wrapV = i1921[15]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1922 = root || new pc.UnityMaterial()
  var i1923 = data
  i1922.name = i1923[0]
  request.r(i1923[1], i1923[2], 0, i1922, 'shader')
  i1922.renderQueue = i1923[3]
  i1922.enableInstancing = !!i1923[4]
  var i1925 = i1923[5]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1925[i + 0]) );
  }
  i1922.floatParameters = i1924
  var i1927 = i1923[6]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1927[i + 0]) );
  }
  i1922.colorParameters = i1926
  var i1929 = i1923[7]
  var i1928 = []
  for(var i = 0; i < i1929.length; i += 1) {
    i1928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1929[i + 0]) );
  }
  i1922.vectorParameters = i1928
  var i1931 = i1923[8]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1931[i + 0]) );
  }
  i1922.textureParameters = i1930
  var i1933 = i1923[9]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1933[i + 0]) );
  }
  i1922.materialFlags = i1932
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1937 = data
  i1936.name = i1937[0]
  i1936.value = i1937[1]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1941 = data
  i1940.name = i1941[0]
  i1940.value = new pc.Color(i1941[1], i1941[2], i1941[3], i1941[4])
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1945 = data
  i1944.name = i1945[0]
  i1944.value = new pc.Vec4( i1945[1], i1945[2], i1945[3], i1945[4] )
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1949 = data
  i1948.name = i1949[0]
  request.r(i1949[1], i1949[2], 0, i1948, 'value')
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1953 = data
  i1952.name = i1953[0]
  i1952.enabled = !!i1953[1]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1955 = data
  i1954.pivot = new pc.Vec2( i1955[0], i1955[1] )
  i1954.anchorMin = new pc.Vec2( i1955[2], i1955[3] )
  i1954.anchorMax = new pc.Vec2( i1955[4], i1955[5] )
  i1954.sizeDelta = new pc.Vec2( i1955[6], i1955[7] )
  i1954.anchoredPosition3D = new pc.Vec3( i1955[8], i1955[9], i1955[10] )
  i1954.rotation = new pc.Quat(i1955[11], i1955[12], i1955[13], i1955[14])
  i1954.scale = new pc.Vec3( i1955[15], i1955[16], i1955[17] )
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1957 = data
  i1956.cullTransparentMesh = !!i1957[0]
  return i1956
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.UI.Image' )
  var i1959 = data
  request.r(i1959[0], i1959[1], 0, i1958, 'm_Sprite')
  i1958.m_Type = i1959[2]
  i1958.m_PreserveAspect = !!i1959[3]
  i1958.m_FillCenter = !!i1959[4]
  i1958.m_FillMethod = i1959[5]
  i1958.m_FillAmount = i1959[6]
  i1958.m_FillClockwise = !!i1959[7]
  i1958.m_FillOrigin = i1959[8]
  i1958.m_UseSpriteMesh = !!i1959[9]
  i1958.m_PixelsPerUnitMultiplier = i1959[10]
  request.r(i1959[11], i1959[12], 0, i1958, 'm_Material')
  i1958.m_Maskable = !!i1959[13]
  i1958.m_Color = new pc.Color(i1959[14], i1959[15], i1959[16], i1959[17])
  i1958.m_RaycastTarget = !!i1959[18]
  i1958.m_RaycastPadding = new pc.Vec4( i1959[19], i1959[20], i1959[21], i1959[22] )
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1961 = data
  i1960.name = i1961[0]
  i1960.tagId = i1961[1]
  i1960.enabled = !!i1961[2]
  i1960.isStatic = !!i1961[3]
  i1960.layer = i1961[4]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1963 = data
  i1962.name = i1963[0]
  i1962.index = i1963[1]
  i1962.startup = !!i1963[2]
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1965 = data
  i1964.aspect = i1965[0]
  i1964.orthographic = !!i1965[1]
  i1964.orthographicSize = i1965[2]
  i1964.backgroundColor = new pc.Color(i1965[3], i1965[4], i1965[5], i1965[6])
  i1964.nearClipPlane = i1965[7]
  i1964.farClipPlane = i1965[8]
  i1964.fieldOfView = i1965[9]
  i1964.depth = i1965[10]
  i1964.clearFlags = i1965[11]
  i1964.cullingMask = i1965[12]
  i1964.rect = i1965[13]
  request.r(i1965[14], i1965[15], 0, i1964, 'targetTexture')
  i1964.usePhysicalProperties = !!i1965[16]
  i1964.focalLength = i1965[17]
  i1964.sensorSize = new pc.Vec2( i1965[18], i1965[19] )
  i1964.lensShift = new pc.Vec2( i1965[20], i1965[21] )
  i1964.gateFit = i1965[22]
  i1964.commandBufferCount = i1965[23]
  i1964.cameraType = i1965[24]
  i1964.enabled = !!i1965[25]
  return i1964
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1966 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1967 = data
  request.r(i1967[0], i1967[1], 0, i1966, 'm_FirstSelected')
  i1966.m_sendNavigationEvents = !!i1967[2]
  i1966.m_DragThreshold = i1967[3]
  return i1966
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1968 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1969 = data
  i1968.m_HorizontalAxis = i1969[0]
  i1968.m_VerticalAxis = i1969[1]
  i1968.m_SubmitButton = i1969[2]
  i1968.m_CancelButton = i1969[3]
  i1968.m_InputActionsPerSecond = i1969[4]
  i1968.m_RepeatDelay = i1969[5]
  i1968.m_ForceModuleActive = !!i1969[6]
  i1968.m_SendPointerHoverToParent = !!i1969[7]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1971 = data
  i1970.planeDistance = i1971[0]
  i1970.referencePixelsPerUnit = i1971[1]
  i1970.isFallbackOverlay = !!i1971[2]
  i1970.renderMode = i1971[3]
  i1970.renderOrder = i1971[4]
  i1970.sortingLayerName = i1971[5]
  i1970.sortingOrder = i1971[6]
  i1970.scaleFactor = i1971[7]
  request.r(i1971[8], i1971[9], 0, i1970, 'worldCamera')
  i1970.overrideSorting = !!i1971[10]
  i1970.pixelPerfect = !!i1971[11]
  i1970.targetDisplay = i1971[12]
  i1970.overridePixelPerfect = !!i1971[13]
  i1970.enabled = !!i1971[14]
  return i1970
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1972 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1973 = data
  i1972.m_UiScaleMode = i1973[0]
  i1972.m_ReferencePixelsPerUnit = i1973[1]
  i1972.m_ScaleFactor = i1973[2]
  i1972.m_ReferenceResolution = new pc.Vec2( i1973[3], i1973[4] )
  i1972.m_ScreenMatchMode = i1973[5]
  i1972.m_MatchWidthOrHeight = i1973[6]
  i1972.m_PhysicalUnit = i1973[7]
  i1972.m_FallbackScreenDPI = i1973[8]
  i1972.m_DefaultSpriteDPI = i1973[9]
  i1972.m_DynamicPixelsPerUnit = i1973[10]
  i1972.m_PresetInfoIsWorld = !!i1973[11]
  return i1972
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1974 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1975 = data
  i1974.m_IgnoreReversedGraphics = !!i1975[0]
  i1974.m_BlockingObjects = i1975[1]
  i1974.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1975[2] )
  return i1974
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1976 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1977 = data
  i1976.m_ShowMaskGraphic = !!i1977[0]
  return i1976
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1978 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1979 = data
  request.r(i1979[0], i1979[1], 0, i1978, 'skeletonDataAsset')
  request.r(i1979[2], i1979[3], 0, i1978, 'additiveMaterial')
  request.r(i1979[4], i1979[5], 0, i1978, 'multiplyMaterial')
  request.r(i1979[6], i1979[7], 0, i1978, 'screenMaterial')
  i1978.initialSkinName = i1979[8]
  i1978.initialFlipX = !!i1979[9]
  i1978.initialFlipY = !!i1979[10]
  i1978.startingAnimation = i1979[11]
  i1978.startingLoop = !!i1979[12]
  i1978.timeScale = i1979[13]
  i1978.freeze = !!i1979[14]
  i1978.layoutScaleMode = i1979[15]
  i1978.updateWhenInvisible = i1979[16]
  i1978.allowMultipleCanvasRenderers = !!i1979[17]
  var i1981 = i1979[18]
  var i1980 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1981.length; i += 2) {
  request.r(i1981[i + 0], i1981[i + 1], 1, i1980, '')
  }
  i1978.canvasRenderers = i1980
  i1978.enableSeparatorSlots = !!i1979[19]
  i1978.updateSeparatorPartLocation = !!i1979[20]
  i1978.updateSeparatorPartScale = !!i1979[21]
  i1978.disableMeshAssignmentOnOverride = !!i1979[22]
  i1978.referenceSize = new pc.Vec2( i1979[23], i1979[24] )
  i1978.referenceScale = i1979[25]
  i1978.rectTransformSize = new pc.Vec2( i1979[26], i1979[27] )
  i1978.editReferenceRect = !!i1979[28]
  var i1983 = i1979[29]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( i1983[i + 0] );
  }
  i1978.separatorSlotNames = i1982
  var i1985 = i1979[30]
  var i1984 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1985.length; i += 2) {
  request.r(i1985[i + 0], i1985[i + 1], 1, i1984, '')
  }
  i1978.separatorParts = i1984
  i1978.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1979[31], i1978.meshGenerator)
  i1978.updateTiming = i1979[32]
  i1978.unscaledTime = !!i1979[33]
  request.r(i1979[34], i1979[35], 0, i1978, 'm_Material')
  i1978.m_Maskable = !!i1979[36]
  i1978.m_Color = new pc.Color(i1979[37], i1979[38], i1979[39], i1979[40])
  i1978.m_RaycastTarget = !!i1979[41]
  i1978.m_RaycastPadding = new pc.Vec4( i1979[42], i1979[43], i1979[44], i1979[45] )
  return i1978
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1992 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1993 = data
  i1992.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1993[0], i1992.settings)
  return i1992
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1994 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1995 = data
  i1994.useClipping = !!i1995[0]
  i1994.zSpacing = i1995[1]
  i1994.pmaVertexColors = !!i1995[2]
  i1994.tintBlack = !!i1995[3]
  i1994.canvasGroupTintBlack = !!i1995[4]
  i1994.calculateTangents = !!i1995[5]
  i1994.addNormals = !!i1995[6]
  i1994.immutableTriangles = !!i1995[7]
  return i1994
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i1996 = root || request.c( 'AnimationController' )
  var i1997 = data
  var i1999 = i1997[0]
  var i1998 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.add(request.d('Anim', i1999[i + 0]));
  }
  i1996.anims = i1998
  return i1996
}

Deserializers["Anim"] = function (request, data, root) {
  var i2002 = root || request.c( 'Anim' )
  var i2003 = data
  i2002.Key = i2003[0]
  i2002.NextKey = i2003[1]
  request.r(i2003[2], i2003[3], 0, i2002, 'Trigger')
  var i2005 = i2003[4]
  var i2004 = new (System.Collections.Generic.List$1(Bridge.ns('Sound')))
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.add(request.d('Sound', i2005[i + 0]));
  }
  i2002.Sounds = i2004
  i2002.Loop = !!i2003[5]
  i2002.Next = !!i2003[6]
  return i2002
}

Deserializers["Sound"] = function (request, data, root) {
  var i2008 = root || request.c( 'Sound' )
  var i2009 = data
  i2008.TimeDelay = i2009[0]
  request.r(i2009[1], i2009[2], 0, i2008, 'Clip')
  return i2008
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2010 = root || request.c( 'UnityEngine.UI.Text' )
  var i2011 = data
  i2010.m_FontData = request.d('UnityEngine.UI.FontData', i2011[0], i2010.m_FontData)
  i2010.m_Text = i2011[1]
  request.r(i2011[2], i2011[3], 0, i2010, 'm_Material')
  i2010.m_Maskable = !!i2011[4]
  i2010.m_Color = new pc.Color(i2011[5], i2011[6], i2011[7], i2011[8])
  i2010.m_RaycastTarget = !!i2011[9]
  i2010.m_RaycastPadding = new pc.Vec4( i2011[10], i2011[11], i2011[12], i2011[13] )
  return i2010
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2012 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2013 = data
  request.r(i2013[0], i2013[1], 0, i2012, 'm_Font')
  i2012.m_FontSize = i2013[2]
  i2012.m_FontStyle = i2013[3]
  i2012.m_BestFit = !!i2013[4]
  i2012.m_MinSize = i2013[5]
  i2012.m_MaxSize = i2013[6]
  i2012.m_Alignment = i2013[7]
  i2012.m_AlignByGeometry = !!i2013[8]
  i2012.m_RichText = !!i2013[9]
  i2012.m_HorizontalOverflow = i2013[10]
  i2012.m_VerticalOverflow = i2013[11]
  i2012.m_LineSpacing = i2013[12]
  return i2012
}

Deserializers["HeartController"] = function (request, data, root) {
  var i2014 = root || request.c( 'HeartController' )
  var i2015 = data
  request.r(i2015[0], i2015[1], 0, i2014, 'parent')
  request.r(i2015[2], i2015[3], 0, i2014, 'heartPrefab')
  return i2014
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2016 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2017 = data
  i2016.m_Spacing = i2017[0]
  i2016.m_ChildForceExpandWidth = !!i2017[1]
  i2016.m_ChildForceExpandHeight = !!i2017[2]
  i2016.m_ChildControlWidth = !!i2017[3]
  i2016.m_ChildControlHeight = !!i2017[4]
  i2016.m_ChildScaleWidth = !!i2017[5]
  i2016.m_ChildScaleHeight = !!i2017[6]
  i2016.m_ReverseArrangement = !!i2017[7]
  i2016.m_Padding = UnityEngine.RectOffset.FromPaddings(i2017[8], i2017[9], i2017[10], i2017[11])
  i2016.m_ChildAlignment = i2017[12]
  return i2016
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2018 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2019 = data
  request.r(i2019[0], i2019[1], 0, i2018, 'm_FillRect')
  request.r(i2019[2], i2019[3], 0, i2018, 'm_HandleRect')
  i2018.m_Direction = i2019[4]
  i2018.m_MinValue = i2019[5]
  i2018.m_MaxValue = i2019[6]
  i2018.m_WholeNumbers = !!i2019[7]
  i2018.m_Value = i2019[8]
  i2018.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2019[9], i2018.m_OnValueChanged)
  i2018.m_Navigation = request.d('UnityEngine.UI.Navigation', i2019[10], i2018.m_Navigation)
  i2018.m_Transition = i2019[11]
  i2018.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2019[12], i2018.m_Colors)
  i2018.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2019[13], i2018.m_SpriteState)
  i2018.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2019[14], i2018.m_AnimationTriggers)
  i2018.m_Interactable = !!i2019[15]
  request.r(i2019[16], i2019[17], 0, i2018, 'm_TargetGraphic')
  return i2018
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2020 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2021 = data
  i2020.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2021[0], i2020.m_PersistentCalls)
  return i2020
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2022 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2023 = data
  var i2025 = i2023[0]
  var i2024 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.add(request.d('UnityEngine.Events.PersistentCall', i2025[i + 0]));
  }
  i2022.m_Calls = i2024
  return i2022
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2028 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2029 = data
  request.r(i2029[0], i2029[1], 0, i2028, 'm_Target')
  i2028.m_TargetAssemblyTypeName = i2029[2]
  i2028.m_MethodName = i2029[3]
  i2028.m_Mode = i2029[4]
  i2028.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2029[5], i2028.m_Arguments)
  i2028.m_CallState = i2029[6]
  return i2028
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2030 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2031 = data
  i2030.m_Mode = i2031[0]
  i2030.m_WrapAround = !!i2031[1]
  request.r(i2031[2], i2031[3], 0, i2030, 'm_SelectOnUp')
  request.r(i2031[4], i2031[5], 0, i2030, 'm_SelectOnDown')
  request.r(i2031[6], i2031[7], 0, i2030, 'm_SelectOnLeft')
  request.r(i2031[8], i2031[9], 0, i2030, 'm_SelectOnRight')
  return i2030
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2032 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2033 = data
  i2032.m_NormalColor = new pc.Color(i2033[0], i2033[1], i2033[2], i2033[3])
  i2032.m_HighlightedColor = new pc.Color(i2033[4], i2033[5], i2033[6], i2033[7])
  i2032.m_PressedColor = new pc.Color(i2033[8], i2033[9], i2033[10], i2033[11])
  i2032.m_SelectedColor = new pc.Color(i2033[12], i2033[13], i2033[14], i2033[15])
  i2032.m_DisabledColor = new pc.Color(i2033[16], i2033[17], i2033[18], i2033[19])
  i2032.m_ColorMultiplier = i2033[20]
  i2032.m_FadeDuration = i2033[21]
  return i2032
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2034 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2035 = data
  request.r(i2035[0], i2035[1], 0, i2034, 'm_HighlightedSprite')
  request.r(i2035[2], i2035[3], 0, i2034, 'm_PressedSprite')
  request.r(i2035[4], i2035[5], 0, i2034, 'm_SelectedSprite')
  request.r(i2035[6], i2035[7], 0, i2034, 'm_DisabledSprite')
  return i2034
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2036 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2037 = data
  i2036.m_NormalTrigger = i2037[0]
  i2036.m_HighlightedTrigger = i2037[1]
  i2036.m_PressedTrigger = i2037[2]
  i2036.m_SelectedTrigger = i2037[3]
  i2036.m_DisabledTrigger = i2037[4]
  return i2036
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2038 = root || request.c( 'UnityEngine.UI.Button' )
  var i2039 = data
  i2038.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2039[0], i2038.m_OnClick)
  i2038.m_Navigation = request.d('UnityEngine.UI.Navigation', i2039[1], i2038.m_Navigation)
  i2038.m_Transition = i2039[2]
  i2038.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2039[3], i2038.m_Colors)
  i2038.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2039[4], i2038.m_SpriteState)
  i2038.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2039[5], i2038.m_AnimationTriggers)
  i2038.m_Interactable = !!i2039[6]
  request.r(i2039[7], i2039[8], 0, i2038, 'm_TargetGraphic')
  return i2038
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2040 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2041 = data
  i2040.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2041[0], i2040.m_PersistentCalls)
  return i2040
}

Deserializers["PhaseController"] = function (request, data, root) {
  var i2042 = root || request.c( 'PhaseController' )
  var i2043 = data
  request.r(i2043[0], i2043[1], 0, i2042, 'character')
  i2042.key = i2043[2]
  request.r(i2043[3], i2043[4], 0, i2042, 'legHair')
  return i2042
}

Deserializers["TutController"] = function (request, data, root) {
  var i2044 = root || request.c( 'TutController' )
  var i2045 = data
  request.r(i2045[0], i2045[1], 0, i2044, 'icon')
  request.r(i2045[2], i2045[3], 0, i2044, 'tutObject')
  i2044.toPos = new pc.Vec3( i2045[4], i2045[5], i2045[6] )
  i2044.timeMove = i2045[7]
  i2044.timeDelay = i2045[8]
  return i2044
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2046 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2047 = data
  i2046.targetIsSelf = !!i2047[0]
  request.r(i2047[1], i2047[2], 0, i2046, 'targetGO')
  i2046.tweenTargetIsTargetGO = !!i2047[3]
  i2046.delay = i2047[4]
  i2046.duration = i2047[5]
  i2046.easeType = i2047[6]
  i2046.easeCurve = new pc.AnimationCurve( { keys_flow: i2047[7] } )
  i2046.loopType = i2047[8]
  i2046.loops = i2047[9]
  i2046.id = i2047[10]
  i2046.isRelative = !!i2047[11]
  i2046.isFrom = !!i2047[12]
  i2046.isIndependentUpdate = !!i2047[13]
  i2046.autoKill = !!i2047[14]
  i2046.autoGenerate = !!i2047[15]
  i2046.isActive = !!i2047[16]
  i2046.isValid = !!i2047[17]
  request.r(i2047[18], i2047[19], 0, i2046, 'target')
  i2046.animationType = i2047[20]
  i2046.targetType = i2047[21]
  i2046.forcedTargetType = i2047[22]
  i2046.autoPlay = !!i2047[23]
  i2046.useTargetAsV3 = !!i2047[24]
  i2046.endValueFloat = i2047[25]
  i2046.endValueV3 = new pc.Vec3( i2047[26], i2047[27], i2047[28] )
  i2046.endValueV2 = new pc.Vec2( i2047[29], i2047[30] )
  i2046.endValueColor = new pc.Color(i2047[31], i2047[32], i2047[33], i2047[34])
  i2046.endValueString = i2047[35]
  i2046.endValueRect = UnityEngine.Rect.MinMaxRect(i2047[36], i2047[37], i2047[38], i2047[39])
  request.r(i2047[40], i2047[41], 0, i2046, 'endValueTransform')
  i2046.optionalBool0 = !!i2047[42]
  i2046.optionalBool1 = !!i2047[43]
  i2046.optionalFloat0 = i2047[44]
  i2046.optionalInt0 = i2047[45]
  i2046.optionalRotationMode = i2047[46]
  i2046.optionalScrambleMode = i2047[47]
  i2046.optionalShakeRandomnessMode = i2047[48]
  i2046.optionalString = i2047[49]
  i2046.updateType = i2047[50]
  i2046.isSpeedBased = !!i2047[51]
  i2046.hasOnStart = !!i2047[52]
  i2046.hasOnPlay = !!i2047[53]
  i2046.hasOnUpdate = !!i2047[54]
  i2046.hasOnStepComplete = !!i2047[55]
  i2046.hasOnComplete = !!i2047[56]
  i2046.hasOnTweenCreated = !!i2047[57]
  i2046.hasOnRewind = !!i2047[58]
  i2046.onStart = request.d('UnityEngine.Events.UnityEvent', i2047[59], i2046.onStart)
  i2046.onPlay = request.d('UnityEngine.Events.UnityEvent', i2047[60], i2046.onPlay)
  i2046.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2047[61], i2046.onUpdate)
  i2046.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2047[62], i2046.onStepComplete)
  i2046.onComplete = request.d('UnityEngine.Events.UnityEvent', i2047[63], i2046.onComplete)
  i2046.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2047[64], i2046.onTweenCreated)
  i2046.onRewind = request.d('UnityEngine.Events.UnityEvent', i2047[65], i2046.onRewind)
  return i2046
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2048 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2049 = data
  i2048.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2049[0], i2048.m_PersistentCalls)
  return i2048
}

Deserializers["TweenController"] = function (request, data, root) {
  var i2050 = root || request.c( 'TweenController' )
  var i2051 = data
  i2050.startScale = i2051[0]
  i2050.endScale = i2051[1]
  i2050.time = i2051[2]
  return i2050
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2052 = root || request.c( 'LunaController' )
  var i2053 = data
  i2052.TimePlay = i2053[0]
  i2052.CountPlay = i2053[1]
  i2052.MaxHeart = i2053[2]
  i2052.BGColor = new pc.Color(i2053[3], i2053[4], i2053[5], i2053[6])
  i2052.GameBGColor = new pc.Color(i2053[7], i2053[8], i2053[9], i2053[10])
  i2052.LevelTextColor = new pc.Color(i2053[11], i2053[12], i2053[13], i2053[14])
  i2052.TitleTextColor = new pc.Color(i2053[15], i2053[16], i2053[17], i2053[18])
  request.r(i2053[19], i2053[20], 0, i2052, 'time')
  request.r(i2053[21], i2053[22], 0, i2052, 'BGImage')
  request.r(i2053[23], i2053[24], 0, i2052, 'GameBGImage')
  request.r(i2053[25], i2053[26], 0, i2052, 'levelText')
  request.r(i2053[27], i2053[28], 0, i2052, 'titleText')
  request.r(i2053[29], i2053[30], 0, i2052, 'endCard')
  var i2055 = i2053[31]
  var i2054 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2055.length; i += 2) {
  request.r(i2055[i + 0], i2055[i + 1], 1, i2054, '')
  }
  i2052.CTA = i2054
  i2052.count = i2053[32]
  return i2052
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i2058 = root || request.c( 'LayoutController' )
  var i2059 = data
  request.r(i2059[0], i2059[1], 0, i2058, 'CTA')
  i2058.hide = !!i2059[2]
  return i2058
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2060 = root || request.c( 'AudioController' )
  var i2061 = data
  request.r(i2061[0], i2061[1], 0, i2060, 'BGM')
  request.r(i2061[2], i2061[3], 0, i2060, 'musicSource')
  request.r(i2061[4], i2061[5], 0, i2060, 'SFXPool')
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2063 = data
  request.r(i2063[0], i2063[1], 0, i2062, 'clip')
  request.r(i2063[2], i2063[3], 0, i2062, 'outputAudioMixerGroup')
  i2062.playOnAwake = !!i2063[4]
  i2062.loop = !!i2063[5]
  i2062.time = i2063[6]
  i2062.volume = i2063[7]
  i2062.pitch = i2063[8]
  i2062.enabled = !!i2063[9]
  return i2062
}

Deserializers["DragController"] = function (request, data, root) {
  var i2064 = root || request.c( 'DragController' )
  var i2065 = data
  request.r(i2065[0], i2065[1], 0, i2064, 'currentTarget')
  request.r(i2065[2], i2065[3], 0, i2064, 'canvas')
  request.r(i2065[4], i2065[5], 0, i2064, 'tut')
  request.r(i2065[6], i2065[7], 0, i2064, 'tut2')
  request.r(i2065[8], i2065[9], 0, i2064, 'tut3')
  var i2067 = i2065[10]
  var i2066 = new (System.Collections.Generic.List$1(Bridge.ns('ItemMap')))
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.add(request.d('ItemMap', i2067[i + 0]));
  }
  i2064.items = i2066
  return i2064
}

Deserializers["ItemMap"] = function (request, data, root) {
  var i2070 = root || request.c( 'ItemMap' )
  var i2071 = data
  request.r(i2071[0], i2071[1], 0, i2070, 'Item')
  request.r(i2071[2], i2071[3], 0, i2070, 'Target')
  request.r(i2071[4], i2071[5], 0, i2070, 'ItemVisual')
  request.r(i2071[6], i2071[7], 0, i2070, 'DestroyItem1')
  request.r(i2071[8], i2071[9], 0, i2070, 'DestroyItem2')
  request.r(i2071[10], i2071[11], 0, i2070, 'ActiveItem')
  return i2070
}

Deserializers["GameController"] = function (request, data, root) {
  var i2072 = root || request.c( 'GameController' )
  var i2073 = data
  i2072.CompleteStep = request.d('System.Action', i2073[0], i2072.CompleteStep)
  i2072.OnGameOver = request.d('System.Action', i2073[1], i2072.OnGameOver)
  request.r(i2073[2], i2073[3], 0, i2072, 'character')
  i2072.maxHeart = i2073[4]
  request.r(i2073[5], i2073[6], 0, i2072, 'heart')
  request.r(i2073[7], i2073[8], 0, i2072, 'completeSound')
  request.r(i2073[9], i2073[10], 0, i2072, 'failSound')
  request.r(i2073[11], i2073[12], 0, i2072, 'failScene')
  var i2075 = i2073[13]
  var i2074 = new (System.Collections.Generic.List$1(Bridge.ns('Phase')))
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.add(request.d('Phase', i2075[i + 0]));
  }
  i2072.phase = i2074
  request.r(i2073[14], i2073[15], 0, i2072, 'lockScene')
  i2072.end = !!i2073[16]
  i2072.complete = !!i2073[17]
  i2072.currentStep = i2073[18]
  i2072.maxStep = i2073[19]
  request.r(i2073[20], i2073[21], 0, i2072, 'currentStepText')
  request.r(i2073[22], i2073[23], 0, i2072, 'maxStepText')
  request.r(i2073[24], i2073[25], 0, i2072, 'slider')
  return i2072
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2076 = root || request.c( 'System.Action' )
  var i2077 = data
  return i2076
}

Deserializers["Phase"] = function (request, data, root) {
  var i2080 = root || request.c( 'Phase' )
  var i2081 = data
  request.r(i2081[0], i2081[1], 0, i2080, 'Voice')
  i2080.VoiceDelay = i2081[2]
  request.r(i2081[3], i2081[4], 0, i2080, 'PhasePuzzle')
  i2080.EndDelay = i2081[5]
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2083 = data
  i2082.ambientIntensity = i2083[0]
  i2082.reflectionIntensity = i2083[1]
  i2082.ambientMode = i2083[2]
  i2082.ambientLight = new pc.Color(i2083[3], i2083[4], i2083[5], i2083[6])
  i2082.ambientSkyColor = new pc.Color(i2083[7], i2083[8], i2083[9], i2083[10])
  i2082.ambientGroundColor = new pc.Color(i2083[11], i2083[12], i2083[13], i2083[14])
  i2082.ambientEquatorColor = new pc.Color(i2083[15], i2083[16], i2083[17], i2083[18])
  i2082.fogColor = new pc.Color(i2083[19], i2083[20], i2083[21], i2083[22])
  i2082.fogEndDistance = i2083[23]
  i2082.fogStartDistance = i2083[24]
  i2082.fogDensity = i2083[25]
  i2082.fog = !!i2083[26]
  request.r(i2083[27], i2083[28], 0, i2082, 'skybox')
  i2082.fogMode = i2083[29]
  var i2085 = i2083[30]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2085[i + 0]) );
  }
  i2082.lightmaps = i2084
  i2082.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2083[31], i2082.lightProbes)
  i2082.lightmapsMode = i2083[32]
  i2082.mixedBakeMode = i2083[33]
  i2082.environmentLightingMode = i2083[34]
  i2082.ambientProbe = new pc.SphericalHarmonicsL2(i2083[35])
  request.r(i2083[36], i2083[37], 0, i2082, 'customReflection')
  request.r(i2083[38], i2083[39], 0, i2082, 'defaultReflection')
  i2082.defaultReflectionMode = i2083[40]
  i2082.defaultReflectionResolution = i2083[41]
  i2082.sunLightObjectId = i2083[42]
  i2082.pixelLightCount = i2083[43]
  i2082.defaultReflectionHDR = !!i2083[44]
  i2082.hasLightDataAsset = !!i2083[45]
  i2082.hasManualGenerate = !!i2083[46]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2089 = data
  request.r(i2089[0], i2089[1], 0, i2088, 'lightmapColor')
  request.r(i2089[2], i2089[3], 0, i2088, 'lightmapDirection')
  request.r(i2089[4], i2089[5], 0, i2088, 'shadowMask')
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2090 = root || new UnityEngine.LightProbes()
  var i2091 = data
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2099 = data
  var i2101 = i2099[0]
  var i2100 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2101[i + 0]));
  }
  i2098.ShaderCompilationErrors = i2100
  i2098.name = i2099[1]
  i2098.guid = i2099[2]
  var i2103 = i2099[3]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( i2103[i + 0] );
  }
  i2098.shaderDefinedKeywords = i2102
  var i2105 = i2099[4]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2105[i + 0]) );
  }
  i2098.passes = i2104
  var i2107 = i2099[5]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2107[i + 0]) );
  }
  i2098.usePasses = i2106
  var i2109 = i2099[6]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2109[i + 0]) );
  }
  i2098.defaultParameterValues = i2108
  request.r(i2099[7], i2099[8], 0, i2098, 'unityFallbackShader')
  i2098.readDepth = !!i2099[9]
  i2098.hasDepthOnlyPass = !!i2099[10]
  i2098.isCreatedByShaderGraph = !!i2099[11]
  i2098.disableBatching = !!i2099[12]
  i2098.compiled = !!i2099[13]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2113 = data
  i2112.shaderName = i2113[0]
  i2112.errorMessage = i2113[1]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2116 = root || new pc.UnityShaderPass()
  var i2117 = data
  i2116.id = i2117[0]
  i2116.subShaderIndex = i2117[1]
  i2116.name = i2117[2]
  i2116.passType = i2117[3]
  i2116.grabPassTextureName = i2117[4]
  i2116.usePass = !!i2117[5]
  i2116.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[6], i2116.zTest)
  i2116.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[7], i2116.zWrite)
  i2116.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[8], i2116.culling)
  i2116.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2117[9], i2116.blending)
  i2116.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2117[10], i2116.alphaBlending)
  i2116.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[11], i2116.colorWriteMask)
  i2116.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[12], i2116.offsetUnits)
  i2116.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[13], i2116.offsetFactor)
  i2116.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[14], i2116.stencilRef)
  i2116.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[15], i2116.stencilReadMask)
  i2116.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[16], i2116.stencilWriteMask)
  i2116.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2117[17], i2116.stencilOp)
  i2116.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2117[18], i2116.stencilOpFront)
  i2116.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2117[19], i2116.stencilOpBack)
  var i2119 = i2117[20]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2119[i + 0]) );
  }
  i2116.tags = i2118
  var i2121 = i2117[21]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 1) {
    i2120.push( i2121[i + 0] );
  }
  i2116.passDefinedKeywords = i2120
  var i2123 = i2117[22]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 1) {
    i2122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2123[i + 0]) );
  }
  i2116.passDefinedKeywordGroups = i2122
  var i2125 = i2117[23]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2125[i + 0]) );
  }
  i2116.variants = i2124
  var i2127 = i2117[24]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2127[i + 0]) );
  }
  i2116.excludedVariants = i2126
  i2116.hasDepthReader = !!i2117[25]
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2129 = data
  i2128.val = i2129[0]
  i2128.name = i2129[1]
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2131 = data
  i2130.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2131[0], i2130.src)
  i2130.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2131[1], i2130.dst)
  i2130.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2131[2], i2130.op)
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2133 = data
  i2132.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2133[0], i2132.pass)
  i2132.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2133[1], i2132.fail)
  i2132.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2133[2], i2132.zFail)
  i2132.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2133[3], i2132.comp)
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2137 = data
  i2136.name = i2137[0]
  i2136.value = i2137[1]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2141 = data
  var i2143 = i2141[0]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.push( i2143[i + 0] );
  }
  i2140.keywords = i2142
  i2140.hasDiscard = !!i2141[1]
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2147 = data
  i2146.passId = i2147[0]
  i2146.subShaderIndex = i2147[1]
  var i2149 = i2147[2]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( i2149[i + 0] );
  }
  i2146.keywords = i2148
  i2146.vertexProgram = i2147[3]
  i2146.fragmentProgram = i2147[4]
  i2146.exportedForWebGl2 = !!i2147[5]
  i2146.readDepth = !!i2147[6]
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2153 = data
  request.r(i2153[0], i2153[1], 0, i2152, 'shader')
  i2152.pass = i2153[2]
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2157 = data
  i2156.name = i2157[0]
  i2156.type = i2157[1]
  i2156.value = new pc.Vec4( i2157[2], i2157[3], i2157[4], i2157[5] )
  i2156.textureValue = i2157[6]
  i2156.shaderPropertyFlag = i2157[7]
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2159 = data
  i2158.name = i2159[0]
  request.r(i2159[1], i2159[2], 0, i2158, 'texture')
  i2158.aabb = i2159[3]
  i2158.vertices = i2159[4]
  i2158.triangles = i2159[5]
  i2158.textureRect = UnityEngine.Rect.MinMaxRect(i2159[6], i2159[7], i2159[8], i2159[9])
  i2158.packedRect = UnityEngine.Rect.MinMaxRect(i2159[10], i2159[11], i2159[12], i2159[13])
  i2158.border = new pc.Vec4( i2159[14], i2159[15], i2159[16], i2159[17] )
  i2158.transparency = i2159[18]
  i2158.bounds = i2159[19]
  i2158.pixelsPerUnit = i2159[20]
  i2158.textureWidth = i2159[21]
  i2158.textureHeight = i2159[22]
  i2158.nativeSize = new pc.Vec2( i2159[23], i2159[24] )
  i2158.pivot = new pc.Vec2( i2159[25], i2159[26] )
  i2158.textureRectOffset = new pc.Vec2( i2159[27], i2159[28] )
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2161 = data
  i2160.name = i2161[0]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2163 = data
  i2162.name = i2163[0]
  i2162.ascent = i2163[1]
  i2162.originalLineHeight = i2163[2]
  i2162.fontSize = i2163[3]
  var i2165 = i2163[4]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2165[i + 0]) );
  }
  i2162.characterInfo = i2164
  request.r(i2163[5], i2163[6], 0, i2162, 'texture')
  i2162.originalFontSize = i2163[7]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2169 = data
  i2168.index = i2169[0]
  i2168.advance = i2169[1]
  i2168.bearing = i2169[2]
  i2168.glyphWidth = i2169[3]
  i2168.glyphHeight = i2169[4]
  i2168.minX = i2169[5]
  i2168.maxX = i2169[6]
  i2168.minY = i2169[7]
  i2168.maxY = i2169[8]
  i2168.uvBottomLeftX = i2169[9]
  i2168.uvBottomLeftY = i2169[10]
  i2168.uvBottomRightX = i2169[11]
  i2168.uvBottomRightY = i2169[12]
  i2168.uvTopLeftX = i2169[13]
  i2168.uvTopLeftY = i2169[14]
  i2168.uvTopRightX = i2169[15]
  i2168.uvTopRightY = i2169[16]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2171 = data
  i2170.name = i2171[0]
  i2170.bytes64 = i2171[1]
  i2170.data = i2171[2]
  return i2170
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2172 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2173 = data
  var i2175 = i2173[0]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 2) {
  request.r(i2175[i + 0], i2175[i + 1], 2, i2174, '')
  }
  i2172.atlasAssets = i2174
  i2172.scale = i2173[1]
  request.r(i2173[2], i2173[3], 0, i2172, 'skeletonJSON')
  i2172.isUpgradingBlendModeMaterials = !!i2173[4]
  i2172.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2173[5], i2172.blendModeMaterials)
  var i2177 = i2173[6]
  var i2176 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2177.length; i += 2) {
  request.r(i2177[i + 0], i2177[i + 1], 1, i2176, '')
  }
  i2172.skeletonDataModifiers = i2176
  var i2179 = i2173[7]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( i2179[i + 0] );
  }
  i2172.fromAnimation = i2178
  var i2181 = i2173[8]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 1) {
    i2180.push( i2181[i + 0] );
  }
  i2172.toAnimation = i2180
  i2172.duration = i2173[9]
  i2172.defaultMix = i2173[10]
  request.r(i2173[11], i2173[12], 0, i2172, 'controller')
  return i2172
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2184 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2185 = data
  i2184.applyAdditiveMaterial = !!i2185[0]
  var i2187 = i2185[1]
  var i2186 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2187[i + 0]));
  }
  i2184.additiveMaterials = i2186
  var i2189 = i2185[2]
  var i2188 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2189.length; i += 1) {
    i2188.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2189[i + 0]));
  }
  i2184.multiplyMaterials = i2188
  var i2191 = i2185[3]
  var i2190 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2191[i + 0]));
  }
  i2184.screenMaterials = i2190
  i2184.requiresBlendModeMaterials = !!i2185[4]
  return i2184
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2194 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2195 = data
  i2194.pageName = i2195[0]
  request.r(i2195[1], i2195[2], 0, i2194, 'material')
  return i2194
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2198 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, 'atlasFile')
  var i2201 = i2199[2]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 2) {
  request.r(i2201[i + 0], i2201[i + 1], 2, i2200, '')
  }
  i2198.materials = i2200
  i2198.textureLoadingMode = i2199[3]
  request.r(i2199[4], i2199[5], 0, i2198, 'onDemandTextureLoader')
  return i2198
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2204 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2205 = data
  i2204.useSafeMode = !!i2205[0]
  i2204.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2205[1], i2204.safeModeOptions)
  i2204.timeScale = i2205[2]
  i2204.unscaledTimeScale = i2205[3]
  i2204.useSmoothDeltaTime = !!i2205[4]
  i2204.maxSmoothUnscaledTime = i2205[5]
  i2204.rewindCallbackMode = i2205[6]
  i2204.showUnityEditorReport = !!i2205[7]
  i2204.logBehaviour = i2205[8]
  i2204.drawGizmos = !!i2205[9]
  i2204.defaultRecyclable = !!i2205[10]
  i2204.defaultAutoPlay = i2205[11]
  i2204.defaultUpdateType = i2205[12]
  i2204.defaultTimeScaleIndependent = !!i2205[13]
  i2204.defaultEaseType = i2205[14]
  i2204.defaultEaseOvershootOrAmplitude = i2205[15]
  i2204.defaultEasePeriod = i2205[16]
  i2204.defaultAutoKill = !!i2205[17]
  i2204.defaultLoopType = i2205[18]
  i2204.debugMode = !!i2205[19]
  i2204.debugStoreTargetId = !!i2205[20]
  i2204.showPreviewPanel = !!i2205[21]
  i2204.storeSettingsLocation = i2205[22]
  i2204.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2205[23], i2204.modules)
  i2204.createASMDEF = !!i2205[24]
  i2204.showPlayingTweens = !!i2205[25]
  i2204.showPausedTweens = !!i2205[26]
  return i2204
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2206 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2207 = data
  i2206.logBehaviour = i2207[0]
  i2206.nestedTweenFailureBehaviour = i2207[1]
  return i2206
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2208 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2209 = data
  i2208.showPanel = !!i2209[0]
  i2208.audioEnabled = !!i2209[1]
  i2208.physicsEnabled = !!i2209[2]
  i2208.physics2DEnabled = !!i2209[3]
  i2208.spriteEnabled = !!i2209[4]
  i2208.uiEnabled = !!i2209[5]
  i2208.textMeshProEnabled = !!i2209[6]
  i2208.tk2DEnabled = !!i2209[7]
  i2208.deAudioEnabled = !!i2209[8]
  i2208.deUnityExtendedEnabled = !!i2209[9]
  i2208.epoOutlineEnabled = !!i2209[10]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2211 = data
  var i2213 = i2211[0]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2213[i + 0]) );
  }
  i2210.files = i2212
  i2210.componentToPrefabIds = i2211[1]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2217 = data
  i2216.path = i2217[0]
  request.r(i2217[1], i2217[2], 0, i2216, 'unityObject')
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2219 = data
  var i2221 = i2219[0]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2221[i + 0]) );
  }
  i2218.scriptsExecutionOrder = i2220
  var i2223 = i2219[1]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2223[i + 0]) );
  }
  i2218.sortingLayers = i2222
  var i2225 = i2219[2]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 1) {
    i2224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2225[i + 0]) );
  }
  i2218.cullingLayers = i2224
  i2218.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2219[3], i2218.timeSettings)
  i2218.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2219[4], i2218.physicsSettings)
  i2218.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2219[5], i2218.physics2DSettings)
  i2218.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2219[6], i2218.qualitySettings)
  i2218.enableRealtimeShadows = !!i2219[7]
  i2218.enableAutoInstancing = !!i2219[8]
  i2218.enableStaticBatching = !!i2219[9]
  i2218.enableDynamicBatching = !!i2219[10]
  i2218.usePreservativeDynamicBatching = !!i2219[11]
  i2218.lightmapEncodingQuality = i2219[12]
  i2218.desiredColorSpace = i2219[13]
  var i2227 = i2219[14]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.push( i2227[i + 0] );
  }
  i2218.allTags = i2226
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2231 = data
  i2230.name = i2231[0]
  i2230.value = i2231[1]
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2235 = data
  i2234.id = i2235[0]
  i2234.name = i2235[1]
  i2234.value = i2235[2]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2239 = data
  i2238.id = i2239[0]
  i2238.name = i2239[1]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2241 = data
  i2240.fixedDeltaTime = i2241[0]
  i2240.maximumDeltaTime = i2241[1]
  i2240.timeScale = i2241[2]
  i2240.maximumParticleTimestep = i2241[3]
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2243 = data
  i2242.gravity = new pc.Vec3( i2243[0], i2243[1], i2243[2] )
  i2242.defaultSolverIterations = i2243[3]
  i2242.bounceThreshold = i2243[4]
  i2242.autoSyncTransforms = !!i2243[5]
  i2242.autoSimulation = !!i2243[6]
  var i2245 = i2243[7]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2245[i + 0]) );
  }
  i2242.collisionMatrix = i2244
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2249 = data
  i2248.enabled = !!i2249[0]
  i2248.layerId = i2249[1]
  i2248.otherLayerId = i2249[2]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2251 = data
  request.r(i2251[0], i2251[1], 0, i2250, 'material')
  i2250.gravity = new pc.Vec2( i2251[2], i2251[3] )
  i2250.positionIterations = i2251[4]
  i2250.velocityIterations = i2251[5]
  i2250.velocityThreshold = i2251[6]
  i2250.maxLinearCorrection = i2251[7]
  i2250.maxAngularCorrection = i2251[8]
  i2250.maxTranslationSpeed = i2251[9]
  i2250.maxRotationSpeed = i2251[10]
  i2250.baumgarteScale = i2251[11]
  i2250.baumgarteTOIScale = i2251[12]
  i2250.timeToSleep = i2251[13]
  i2250.linearSleepTolerance = i2251[14]
  i2250.angularSleepTolerance = i2251[15]
  i2250.defaultContactOffset = i2251[16]
  i2250.autoSimulation = !!i2251[17]
  i2250.queriesHitTriggers = !!i2251[18]
  i2250.queriesStartInColliders = !!i2251[19]
  i2250.callbacksOnDisable = !!i2251[20]
  i2250.reuseCollisionCallbacks = !!i2251[21]
  i2250.autoSyncTransforms = !!i2251[22]
  var i2253 = i2251[23]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 1) {
    i2252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2253[i + 0]) );
  }
  i2250.collisionMatrix = i2252
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2257 = data
  i2256.enabled = !!i2257[0]
  i2256.layerId = i2257[1]
  i2256.otherLayerId = i2257[2]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2259 = data
  var i2261 = i2259[0]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2261[i + 0]) );
  }
  i2258.qualityLevels = i2260
  var i2263 = i2259[1]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( i2263[i + 0] );
  }
  i2258.names = i2262
  i2258.shadows = i2259[2]
  i2258.anisotropicFiltering = i2259[3]
  i2258.antiAliasing = i2259[4]
  i2258.lodBias = i2259[5]
  i2258.shadowCascades = i2259[6]
  i2258.shadowDistance = i2259[7]
  i2258.shadowmaskMode = i2259[8]
  i2258.shadowProjection = i2259[9]
  i2258.shadowResolution = i2259[10]
  i2258.softParticles = !!i2259[11]
  i2258.softVegetation = !!i2259[12]
  i2258.activeColorSpace = i2259[13]
  i2258.desiredColorSpace = i2259[14]
  i2258.masterTextureLimit = i2259[15]
  i2258.maxQueuedFrames = i2259[16]
  i2258.particleRaycastBudget = i2259[17]
  i2258.pixelLightCount = i2259[18]
  i2258.realtimeReflectionProbes = !!i2259[19]
  i2258.shadowCascade2Split = i2259[20]
  i2258.shadowCascade4Split = new pc.Vec3( i2259[21], i2259[22], i2259[23] )
  i2258.streamingMipmapsActive = !!i2259[24]
  i2258.vSyncCount = i2259[25]
  i2258.asyncUploadBufferSize = i2259[26]
  i2258.asyncUploadTimeSlice = i2259[27]
  i2258.billboardsFaceCameraPosition = !!i2259[28]
  i2258.shadowNearPlaneOffset = i2259[29]
  i2258.streamingMipmapsMemoryBudget = i2259[30]
  i2258.maximumLODLevel = i2259[31]
  i2258.streamingMipmapsAddAllCameras = !!i2259[32]
  i2258.streamingMipmapsMaxLevelReduction = i2259[33]
  i2258.streamingMipmapsRenderersPerFrame = i2259[34]
  i2258.resolutionScalingFixedDPIFactor = i2259[35]
  i2258.streamingMipmapsMaxFileIORequests = i2259[36]
  i2258.currentQualityLevel = i2259[37]
  return i2258
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2266 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2267 = data
  request.r(i2267[0], i2267[1], 0, i2266, 'm_ObjectArgument')
  i2266.m_ObjectArgumentAssemblyTypeName = i2267[2]
  i2266.m_IntArgument = i2267[3]
  i2266.m_FloatArgument = i2267[4]
  i2266.m_StringArgument = i2267[5]
  i2266.m_BoolArgument = !!i2267[6]
  return i2266
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[7],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[7],"74":[75],"76":[77],"78":[77],"11":[2],"19":[15],"79":[80],"81":[2],"82":[3,2],"83":[75],"15":[3,2],"84":[85,75],"86":[75,87],"88":[75],"89":[53],"90":[60],"91":[80],"92":[93],"94":[95],"96":[7],"97":[98],"99":[2],"100":[3,2],"101":[75],"102":[3,2],"103":[2],"104":[2],"105":[75,2],"106":[2,3],"107":[108],"109":[108],"110":[108],"111":[2],"112":[2],"13":[11],"5":[3,2],"113":[2],"12":[11],"114":[2],"115":[2],"25":[2],"116":[2],"117":[2],"118":[2],"119":[2],"14":[2],"120":[2],"121":[3,2],"122":[2],"123":[2],"124":[2],"26":[2],"22":[3,2],"125":[2],"126":[9],"127":[9],"10":[9],"128":[9],"129":[7],"130":[7]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","UnityEngine.GameObject","UnityEngine.AudioClip","UnityEngine.UI.Text","UnityEngine.Font","HeartController","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Slider","UnityEngine.UI.Button","PhaseController","TutController","DG.Tweening.DOTweenAnimation","TweenController","LunaController","LayoutController","AudioController","UnityEngine.AudioSource","UnityEngine.Transform","DragController","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "07/06/2026 10:52:52";

Deserializers.lunaDaysRunning = "1.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BEQ_V28_NgocNDL_TamNTM";

Deserializers.lunaAppID = "29138";

Deserializers.projectId = "5b44dfd2230fe054ca8da1b65d37e310";

Deserializers.packagesInfo = "com.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1886";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4266";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BMTP_Luna";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "e7d03ad2-e05e-4514-b64c-03ab7314a58d";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

