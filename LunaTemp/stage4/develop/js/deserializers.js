var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1872 = root || request.c( 'UnityEngine.JointSpring' )
  var i1873 = data
  i1872.spring = i1873[0]
  i1872.damper = i1873[1]
  i1872.targetPosition = i1873[2]
  return i1872
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1874 = root || request.c( 'UnityEngine.JointMotor' )
  var i1875 = data
  i1874.m_TargetVelocity = i1875[0]
  i1874.m_Force = i1875[1]
  i1874.m_FreeSpin = i1875[2]
  return i1874
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1876 = root || request.c( 'UnityEngine.JointLimits' )
  var i1877 = data
  i1876.m_Min = i1877[0]
  i1876.m_Max = i1877[1]
  i1876.m_Bounciness = i1877[2]
  i1876.m_BounceMinVelocity = i1877[3]
  i1876.m_ContactDistance = i1877[4]
  i1876.minBounce = i1877[5]
  i1876.maxBounce = i1877[6]
  return i1876
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1878 = root || request.c( 'UnityEngine.JointDrive' )
  var i1879 = data
  i1878.m_PositionSpring = i1879[0]
  i1878.m_PositionDamper = i1879[1]
  i1878.m_MaximumForce = i1879[2]
  i1878.m_UseAcceleration = i1879[3]
  return i1878
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1880 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1881 = data
  i1880.m_Spring = i1881[0]
  i1880.m_Damper = i1881[1]
  return i1880
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1882 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1883 = data
  i1882.m_Limit = i1883[0]
  i1882.m_Bounciness = i1883[1]
  i1882.m_ContactDistance = i1883[2]
  return i1882
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1884 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1885 = data
  i1884.m_ExtremumSlip = i1885[0]
  i1884.m_ExtremumValue = i1885[1]
  i1884.m_AsymptoteSlip = i1885[2]
  i1884.m_AsymptoteValue = i1885[3]
  i1884.m_Stiffness = i1885[4]
  return i1884
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1886 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1887 = data
  i1886.m_LowerAngle = i1887[0]
  i1886.m_UpperAngle = i1887[1]
  return i1886
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1888 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1889 = data
  i1888.m_MotorSpeed = i1889[0]
  i1888.m_MaximumMotorTorque = i1889[1]
  return i1888
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1890 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1891 = data
  i1890.m_DampingRatio = i1891[0]
  i1890.m_Frequency = i1891[1]
  i1890.m_Angle = i1891[2]
  return i1890
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1892 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1893 = data
  i1892.m_LowerTranslation = i1893[0]
  i1892.m_UpperTranslation = i1893[1]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1895 = data
  i1894.name = i1895[0]
  i1894.width = i1895[1]
  i1894.height = i1895[2]
  i1894.mipmapCount = i1895[3]
  i1894.anisoLevel = i1895[4]
  i1894.filterMode = i1895[5]
  i1894.hdr = !!i1895[6]
  i1894.format = i1895[7]
  i1894.wrapMode = i1895[8]
  i1894.alphaIsTransparency = !!i1895[9]
  i1894.alphaSource = i1895[10]
  i1894.graphicsFormat = i1895[11]
  i1894.sRGBTexture = !!i1895[12]
  i1894.desiredColorSpace = i1895[13]
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1896 = root || new pc.UnityMaterial()
  var i1897 = data
  i1896.name = i1897[0]
  request.r(i1897[1], i1897[2], 0, i1896, 'shader')
  i1896.renderQueue = i1897[3]
  i1896.enableInstancing = !!i1897[4]
  var i1899 = i1897[5]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1899[i + 0]) );
  }
  i1896.floatParameters = i1898
  var i1901 = i1897[6]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1901[i + 0]) );
  }
  i1896.colorParameters = i1900
  var i1903 = i1897[7]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1903[i + 0]) );
  }
  i1896.vectorParameters = i1902
  var i1905 = i1897[8]
  var i1904 = []
  for(var i = 0; i < i1905.length; i += 1) {
    i1904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1905[i + 0]) );
  }
  i1896.textureParameters = i1904
  var i1907 = i1897[9]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 1) {
    i1906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1907[i + 0]) );
  }
  i1896.materialFlags = i1906
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1911 = data
  i1910.name = i1911[0]
  i1910.value = i1911[1]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1915 = data
  i1914.name = i1915[0]
  i1914.value = new pc.Color(i1915[1], i1915[2], i1915[3], i1915[4])
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1919 = data
  i1918.name = i1919[0]
  i1918.value = new pc.Vec4( i1919[1], i1919[2], i1919[3], i1919[4] )
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1923 = data
  i1922.name = i1923[0]
  request.r(i1923[1], i1923[2], 0, i1922, 'value')
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1927 = data
  i1926.name = i1927[0]
  i1926.enabled = !!i1927[1]
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1929 = data
  i1928.pivot = new pc.Vec2( i1929[0], i1929[1] )
  i1928.anchorMin = new pc.Vec2( i1929[2], i1929[3] )
  i1928.anchorMax = new pc.Vec2( i1929[4], i1929[5] )
  i1928.sizeDelta = new pc.Vec2( i1929[6], i1929[7] )
  i1928.anchoredPosition3D = new pc.Vec3( i1929[8], i1929[9], i1929[10] )
  i1928.rotation = new pc.Quat(i1929[11], i1929[12], i1929[13], i1929[14])
  i1928.scale = new pc.Vec3( i1929[15], i1929[16], i1929[17] )
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1931 = data
  i1930.cullTransparentMesh = !!i1931[0]
  return i1930
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1932 = root || request.c( 'UnityEngine.UI.Image' )
  var i1933 = data
  request.r(i1933[0], i1933[1], 0, i1932, 'm_Sprite')
  i1932.m_Type = i1933[2]
  i1932.m_PreserveAspect = !!i1933[3]
  i1932.m_FillCenter = !!i1933[4]
  i1932.m_FillMethod = i1933[5]
  i1932.m_FillAmount = i1933[6]
  i1932.m_FillClockwise = !!i1933[7]
  i1932.m_FillOrigin = i1933[8]
  i1932.m_UseSpriteMesh = !!i1933[9]
  i1932.m_PixelsPerUnitMultiplier = i1933[10]
  request.r(i1933[11], i1933[12], 0, i1932, 'm_Material')
  i1932.m_Maskable = !!i1933[13]
  i1932.m_Color = new pc.Color(i1933[14], i1933[15], i1933[16], i1933[17])
  i1932.m_RaycastTarget = !!i1933[18]
  i1932.m_RaycastPadding = new pc.Vec4( i1933[19], i1933[20], i1933[21], i1933[22] )
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1935 = data
  request.r(i1935[0], i1935[1], 0, i1934, 'clip')
  request.r(i1935[2], i1935[3], 0, i1934, 'outputAudioMixerGroup')
  i1934.playOnAwake = !!i1935[4]
  i1934.loop = !!i1935[5]
  i1934.time = i1935[6]
  i1934.volume = i1935[7]
  i1934.pitch = i1935[8]
  i1934.enabled = !!i1935[9]
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1937 = data
  i1936.name = i1937[0]
  i1936.tagId = i1937[1]
  i1936.enabled = !!i1937[2]
  i1936.isStatic = !!i1937[3]
  i1936.layer = i1937[4]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1939 = data
  i1938.name = i1939[0]
  i1938.index = i1939[1]
  i1938.startup = !!i1939[2]
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1941 = data
  i1940.position = new pc.Vec3( i1941[0], i1941[1], i1941[2] )
  i1940.scale = new pc.Vec3( i1941[3], i1941[4], i1941[5] )
  i1940.rotation = new pc.Quat(i1941[6], i1941[7], i1941[8], i1941[9])
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1943 = data
  i1942.enabled = !!i1943[0]
  i1942.aspect = i1943[1]
  i1942.orthographic = !!i1943[2]
  i1942.orthographicSize = i1943[3]
  i1942.backgroundColor = new pc.Color(i1943[4], i1943[5], i1943[6], i1943[7])
  i1942.nearClipPlane = i1943[8]
  i1942.farClipPlane = i1943[9]
  i1942.fieldOfView = i1943[10]
  i1942.depth = i1943[11]
  i1942.clearFlags = i1943[12]
  i1942.cullingMask = i1943[13]
  i1942.rect = i1943[14]
  request.r(i1943[15], i1943[16], 0, i1942, 'targetTexture')
  i1942.usePhysicalProperties = !!i1943[17]
  i1942.focalLength = i1943[18]
  i1942.sensorSize = new pc.Vec2( i1943[19], i1943[20] )
  i1942.lensShift = new pc.Vec2( i1943[21], i1943[22] )
  i1942.gateFit = i1943[23]
  return i1942
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1944 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1945 = data
  request.r(i1945[0], i1945[1], 0, i1944, 'm_FirstSelected')
  i1944.m_sendNavigationEvents = !!i1945[2]
  i1944.m_DragThreshold = i1945[3]
  return i1944
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1946 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1947 = data
  i1946.m_HorizontalAxis = i1947[0]
  i1946.m_VerticalAxis = i1947[1]
  i1946.m_SubmitButton = i1947[2]
  i1946.m_CancelButton = i1947[3]
  i1946.m_InputActionsPerSecond = i1947[4]
  i1946.m_RepeatDelay = i1947[5]
  i1946.m_ForceModuleActive = !!i1947[6]
  i1946.m_SendPointerHoverToParent = !!i1947[7]
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1949 = data
  i1948.enabled = !!i1949[0]
  i1948.planeDistance = i1949[1]
  i1948.referencePixelsPerUnit = i1949[2]
  i1948.isFallbackOverlay = !!i1949[3]
  i1948.renderMode = i1949[4]
  i1948.renderOrder = i1949[5]
  i1948.sortingLayerName = i1949[6]
  i1948.sortingOrder = i1949[7]
  i1948.scaleFactor = i1949[8]
  request.r(i1949[9], i1949[10], 0, i1948, 'worldCamera')
  i1948.overrideSorting = !!i1949[11]
  i1948.pixelPerfect = !!i1949[12]
  i1948.targetDisplay = i1949[13]
  i1948.overridePixelPerfect = !!i1949[14]
  return i1948
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1950 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1951 = data
  i1950.m_UiScaleMode = i1951[0]
  i1950.m_ReferencePixelsPerUnit = i1951[1]
  i1950.m_ScaleFactor = i1951[2]
  i1950.m_ReferenceResolution = new pc.Vec2( i1951[3], i1951[4] )
  i1950.m_ScreenMatchMode = i1951[5]
  i1950.m_MatchWidthOrHeight = i1951[6]
  i1950.m_PhysicalUnit = i1951[7]
  i1950.m_FallbackScreenDPI = i1951[8]
  i1950.m_DefaultSpriteDPI = i1951[9]
  i1950.m_DynamicPixelsPerUnit = i1951[10]
  i1950.m_PresetInfoIsWorld = !!i1951[11]
  return i1950
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1952 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1953 = data
  i1952.m_IgnoreReversedGraphics = !!i1953[0]
  i1952.m_BlockingObjects = i1953[1]
  i1952.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1953[2] )
  return i1952
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1954 = root || request.c( 'LunaManager' )
  var i1955 = data
  var i1957 = i1955[0]
  var i1956 = []
  for(var i = 0; i < i1957.length; i += 2) {
  request.r(i1957[i + 0], i1957[i + 1], 2, i1956, '')
  }
  i1954.lstBtnInstall = i1956
  request.r(i1955[1], i1955[2], 0, i1954, 'EndCard')
  i1954.countPlay = i1955[3]
  i1954.countPlayFinal = i1955[4]
  i1954.timeDropFinal = i1955[5]
  i1954.colorBG = new pc.Color(i1955[6], i1955[7], i1955[8], i1955[9])
  request.r(i1955[10], i1955[11], 0, i1954, 'texture2D')
  request.r(i1955[12], i1955[13], 0, i1954, 'rawImageBG')
  return i1954
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1960 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1961 = data
  request.r(i1961[0], i1961[1], 0, i1960, 'm_Texture')
  i1960.m_UVRect = UnityEngine.Rect.MinMaxRect(i1961[2], i1961[3], i1961[4], i1961[5])
  request.r(i1961[6], i1961[7], 0, i1960, 'm_Material')
  i1960.m_Maskable = !!i1961[8]
  i1960.m_Color = new pc.Color(i1961[9], i1961[10], i1961[11], i1961[12])
  i1960.m_RaycastTarget = !!i1961[13]
  i1960.m_RaycastPadding = new pc.Vec4( i1961[14], i1961[15], i1961[16], i1961[17] )
  return i1960
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1962 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1963 = data
  request.r(i1963[0], i1963[1], 0, i1962, 'skeletonDataAsset')
  request.r(i1963[2], i1963[3], 0, i1962, 'additiveMaterial')
  request.r(i1963[4], i1963[5], 0, i1962, 'multiplyMaterial')
  request.r(i1963[6], i1963[7], 0, i1962, 'screenMaterial')
  i1962.initialSkinName = i1963[8]
  i1962.initialFlipX = !!i1963[9]
  i1962.initialFlipY = !!i1963[10]
  i1962.startingAnimation = i1963[11]
  i1962.startingLoop = !!i1963[12]
  i1962.timeScale = i1963[13]
  i1962.freeze = !!i1963[14]
  i1962.layoutScaleMode = i1963[15]
  i1962.updateWhenInvisible = i1963[16]
  i1962.allowMultipleCanvasRenderers = !!i1963[17]
  var i1965 = i1963[18]
  var i1964 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1965.length; i += 2) {
  request.r(i1965[i + 0], i1965[i + 1], 1, i1964, '')
  }
  i1962.canvasRenderers = i1964
  i1962.enableSeparatorSlots = !!i1963[19]
  i1962.updateSeparatorPartLocation = !!i1963[20]
  i1962.updateSeparatorPartScale = !!i1963[21]
  i1962.disableMeshAssignmentOnOverride = !!i1963[22]
  i1962.referenceSize = new pc.Vec2( i1963[23], i1963[24] )
  i1962.referenceScale = i1963[25]
  i1962.rectTransformSize = new pc.Vec2( i1963[26], i1963[27] )
  i1962.editReferenceRect = !!i1963[28]
  var i1967 = i1963[29]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( i1967[i + 0] );
  }
  i1962.separatorSlotNames = i1966
  var i1969 = i1963[30]
  var i1968 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1969.length; i += 2) {
  request.r(i1969[i + 0], i1969[i + 1], 1, i1968, '')
  }
  i1962.separatorParts = i1968
  i1962.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1963[31], i1962.meshGenerator)
  i1962.updateTiming = i1963[32]
  i1962.unscaledTime = !!i1963[33]
  request.r(i1963[34], i1963[35], 0, i1962, 'm_Material')
  i1962.m_Maskable = !!i1963[36]
  i1962.m_Color = new pc.Color(i1963[37], i1963[38], i1963[39], i1963[40])
  i1962.m_RaycastTarget = !!i1963[41]
  i1962.m_RaycastPadding = new pc.Vec4( i1963[42], i1963[43], i1963[44], i1963[45] )
  return i1962
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1976 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1977 = data
  i1976.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1977[0], i1976.settings)
  return i1976
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1978 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1979 = data
  i1978.useClipping = !!i1979[0]
  i1978.zSpacing = i1979[1]
  i1978.pmaVertexColors = !!i1979[2]
  i1978.tintBlack = !!i1979[3]
  i1978.canvasGroupTintBlack = !!i1979[4]
  i1978.calculateTangents = !!i1979[5]
  i1978.addNormals = !!i1979[6]
  i1978.immutableTriangles = !!i1979[7]
  return i1978
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1980 = root || request.c( 'UnityEngine.UI.Button' )
  var i1981 = data
  i1980.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1981[0], i1980.m_OnClick)
  i1980.m_Navigation = request.d('UnityEngine.UI.Navigation', i1981[1], i1980.m_Navigation)
  i1980.m_Transition = i1981[2]
  i1980.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1981[3], i1980.m_Colors)
  i1980.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1981[4], i1980.m_SpriteState)
  i1980.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1981[5], i1980.m_AnimationTriggers)
  i1980.m_Interactable = !!i1981[6]
  request.r(i1981[7], i1981[8], 0, i1980, 'm_TargetGraphic')
  return i1980
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1982 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1983 = data
  i1982.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1983[0], i1982.m_PersistentCalls)
  return i1982
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1984 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1985 = data
  var i1987 = i1985[0]
  var i1986 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.add(request.d('UnityEngine.Events.PersistentCall', i1987[i + 0]));
  }
  i1984.m_Calls = i1986
  return i1984
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1990 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1991 = data
  request.r(i1991[0], i1991[1], 0, i1990, 'm_Target')
  i1990.m_TargetAssemblyTypeName = i1991[2]
  i1990.m_MethodName = i1991[3]
  i1990.m_Mode = i1991[4]
  i1990.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1991[5], i1990.m_Arguments)
  i1990.m_CallState = i1991[6]
  return i1990
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1992 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1993 = data
  request.r(i1993[0], i1993[1], 0, i1992, 'm_ObjectArgument')
  i1992.m_ObjectArgumentAssemblyTypeName = i1993[2]
  i1992.m_IntArgument = i1993[3]
  i1992.m_FloatArgument = i1993[4]
  i1992.m_StringArgument = i1993[5]
  i1992.m_BoolArgument = !!i1993[6]
  return i1992
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1994 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1995 = data
  i1994.m_Mode = i1995[0]
  i1994.m_WrapAround = !!i1995[1]
  request.r(i1995[2], i1995[3], 0, i1994, 'm_SelectOnUp')
  request.r(i1995[4], i1995[5], 0, i1994, 'm_SelectOnDown')
  request.r(i1995[6], i1995[7], 0, i1994, 'm_SelectOnLeft')
  request.r(i1995[8], i1995[9], 0, i1994, 'm_SelectOnRight')
  return i1994
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1996 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1997 = data
  i1996.m_NormalColor = new pc.Color(i1997[0], i1997[1], i1997[2], i1997[3])
  i1996.m_HighlightedColor = new pc.Color(i1997[4], i1997[5], i1997[6], i1997[7])
  i1996.m_PressedColor = new pc.Color(i1997[8], i1997[9], i1997[10], i1997[11])
  i1996.m_SelectedColor = new pc.Color(i1997[12], i1997[13], i1997[14], i1997[15])
  i1996.m_DisabledColor = new pc.Color(i1997[16], i1997[17], i1997[18], i1997[19])
  i1996.m_ColorMultiplier = i1997[20]
  i1996.m_FadeDuration = i1997[21]
  return i1996
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1998 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1999 = data
  request.r(i1999[0], i1999[1], 0, i1998, 'm_HighlightedSprite')
  request.r(i1999[2], i1999[3], 0, i1998, 'm_PressedSprite')
  request.r(i1999[4], i1999[5], 0, i1998, 'm_SelectedSprite')
  request.r(i1999[6], i1999[7], 0, i1998, 'm_DisabledSprite')
  return i1998
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2000 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2001 = data
  i2000.m_NormalTrigger = i2001[0]
  i2000.m_HighlightedTrigger = i2001[1]
  i2000.m_PressedTrigger = i2001[2]
  i2000.m_SelectedTrigger = i2001[3]
  i2000.m_DisabledTrigger = i2001[4]
  return i2000
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i2002 = root || request.c( 'ClickItem' )
  var i2003 = data
  i2002.isDoor = !!i2003[0]
  var i2005 = i2003[1]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 2) {
  request.r(i2005[i + 0], i2005[i + 1], 2, i2004, '')
  }
  i2002.steps = i2004
  return i2002
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i2008 = root || request.c( 'DraggableItem' )
  var i2009 = data
  i2008.itemID = i2009[0]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2011 = data
  i2010.m_Alpha = i2011[0]
  i2010.m_Interactable = !!i2011[1]
  i2010.m_BlocksRaycasts = !!i2011[2]
  i2010.m_IgnoreParentGroups = !!i2011[3]
  i2010.enabled = !!i2011[4]
  return i2010
}

Deserializers["DropZone"] = function (request, data, root) {
  var i2012 = root || request.c( 'DropZone' )
  var i2013 = data
  request.r(i2013[0], i2013[1], 0, i2012, 'humman')
  var i2015 = i2013[2]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 2) {
  request.r(i2015[i + 0], i2015[i + 1], 2, i2014, '')
  }
  i2012.stairPrefabs = i2014
  request.r(i2013[3], i2013[4], 0, i2012, 'tranHoder')
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2017 = data
  i2016.enabled = !!i2017[0]
  i2016.isTrigger = !!i2017[1]
  i2016.usedByEffector = !!i2017[2]
  i2016.density = i2017[3]
  i2016.offset = new pc.Vec2( i2017[4], i2017[5] )
  request.r(i2017[6], i2017[7], 0, i2016, 'material')
  i2016.usedByComposite = !!i2017[8]
  i2016.autoTiling = !!i2017[9]
  var i2019 = i2017[10]
  var i2018 = []
  for(var i = 0; i < i2019.length; i += 1) {
  var i2021 = i2019[i + 0]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 2) {
    i2020.push( new pc.Vec2( i2021[i + 0], i2021[i + 1] ) );
  }
    i2018.push( i2020 );
  }
  i2016.points = i2018
  return i2016
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i2028 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i2029 = data
  i2028.m_StartCorner = i2029[0]
  i2028.m_StartAxis = i2029[1]
  i2028.m_CellSize = new pc.Vec2( i2029[2], i2029[3] )
  i2028.m_Spacing = new pc.Vec2( i2029[4], i2029[5] )
  i2028.m_Constraint = i2029[6]
  i2028.m_ConstraintCount = i2029[7]
  i2028.m_Padding = UnityEngine.RectOffset.FromPaddings(i2029[8], i2029[9], i2029[10], i2029[11])
  i2028.m_ChildAlignment = i2029[12]
  return i2028
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2030 = root || request.c( 'UnityEngine.UI.Text' )
  var i2031 = data
  i2030.m_FontData = request.d('UnityEngine.UI.FontData', i2031[0], i2030.m_FontData)
  i2030.m_Text = i2031[1]
  request.r(i2031[2], i2031[3], 0, i2030, 'm_Material')
  i2030.m_Maskable = !!i2031[4]
  i2030.m_Color = new pc.Color(i2031[5], i2031[6], i2031[7], i2031[8])
  i2030.m_RaycastTarget = !!i2031[9]
  i2030.m_RaycastPadding = new pc.Vec4( i2031[10], i2031[11], i2031[12], i2031[13] )
  return i2030
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2032 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2033 = data
  request.r(i2033[0], i2033[1], 0, i2032, 'm_Font')
  i2032.m_FontSize = i2033[2]
  i2032.m_FontStyle = i2033[3]
  i2032.m_BestFit = !!i2033[4]
  i2032.m_MinSize = i2033[5]
  i2032.m_MaxSize = i2033[6]
  i2032.m_Alignment = i2033[7]
  i2032.m_AlignByGeometry = !!i2033[8]
  i2032.m_RichText = !!i2033[9]
  i2032.m_HorizontalOverflow = i2033[10]
  i2032.m_VerticalOverflow = i2033[11]
  i2032.m_LineSpacing = i2033[12]
  return i2032
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2034 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2035 = data
  i2034.targetIsSelf = !!i2035[0]
  request.r(i2035[1], i2035[2], 0, i2034, 'targetGO')
  i2034.tweenTargetIsTargetGO = !!i2035[3]
  i2034.delay = i2035[4]
  i2034.duration = i2035[5]
  i2034.easeType = i2035[6]
  i2034.easeCurve = new pc.AnimationCurve( { keys_flow: i2035[7] } )
  i2034.loopType = i2035[8]
  i2034.loops = i2035[9]
  i2034.id = i2035[10]
  i2034.isRelative = !!i2035[11]
  i2034.isFrom = !!i2035[12]
  i2034.isIndependentUpdate = !!i2035[13]
  i2034.autoKill = !!i2035[14]
  i2034.autoGenerate = !!i2035[15]
  i2034.isActive = !!i2035[16]
  i2034.isValid = !!i2035[17]
  request.r(i2035[18], i2035[19], 0, i2034, 'target')
  i2034.animationType = i2035[20]
  i2034.targetType = i2035[21]
  i2034.forcedTargetType = i2035[22]
  i2034.autoPlay = !!i2035[23]
  i2034.useTargetAsV3 = !!i2035[24]
  i2034.endValueFloat = i2035[25]
  i2034.endValueV3 = new pc.Vec3( i2035[26], i2035[27], i2035[28] )
  i2034.endValueV2 = new pc.Vec2( i2035[29], i2035[30] )
  i2034.endValueColor = new pc.Color(i2035[31], i2035[32], i2035[33], i2035[34])
  i2034.endValueString = i2035[35]
  i2034.endValueRect = UnityEngine.Rect.MinMaxRect(i2035[36], i2035[37], i2035[38], i2035[39])
  request.r(i2035[40], i2035[41], 0, i2034, 'endValueTransform')
  i2034.optionalBool0 = !!i2035[42]
  i2034.optionalBool1 = !!i2035[43]
  i2034.optionalFloat0 = i2035[44]
  i2034.optionalInt0 = i2035[45]
  i2034.optionalRotationMode = i2035[46]
  i2034.optionalScrambleMode = i2035[47]
  i2034.optionalShakeRandomnessMode = i2035[48]
  i2034.optionalString = i2035[49]
  i2034.updateType = i2035[50]
  i2034.isSpeedBased = !!i2035[51]
  i2034.hasOnStart = !!i2035[52]
  i2034.hasOnPlay = !!i2035[53]
  i2034.hasOnUpdate = !!i2035[54]
  i2034.hasOnStepComplete = !!i2035[55]
  i2034.hasOnComplete = !!i2035[56]
  i2034.hasOnTweenCreated = !!i2035[57]
  i2034.hasOnRewind = !!i2035[58]
  i2034.onStart = request.d('UnityEngine.Events.UnityEvent', i2035[59], i2034.onStart)
  i2034.onPlay = request.d('UnityEngine.Events.UnityEvent', i2035[60], i2034.onPlay)
  i2034.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2035[61], i2034.onUpdate)
  i2034.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2035[62], i2034.onStepComplete)
  i2034.onComplete = request.d('UnityEngine.Events.UnityEvent', i2035[63], i2034.onComplete)
  i2034.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2035[64], i2034.onTweenCreated)
  i2034.onRewind = request.d('UnityEngine.Events.UnityEvent', i2035[65], i2034.onRewind)
  return i2034
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2036 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2037 = data
  i2036.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2037[0], i2036.m_PersistentCalls)
  return i2036
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2038 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2039 = data
  i2038.m_ShowMaskGraphic = !!i2039[0]
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2041 = data
  i2040.ambientIntensity = i2041[0]
  i2040.reflectionIntensity = i2041[1]
  i2040.ambientMode = i2041[2]
  i2040.ambientLight = new pc.Color(i2041[3], i2041[4], i2041[5], i2041[6])
  i2040.ambientSkyColor = new pc.Color(i2041[7], i2041[8], i2041[9], i2041[10])
  i2040.ambientGroundColor = new pc.Color(i2041[11], i2041[12], i2041[13], i2041[14])
  i2040.ambientEquatorColor = new pc.Color(i2041[15], i2041[16], i2041[17], i2041[18])
  i2040.fogColor = new pc.Color(i2041[19], i2041[20], i2041[21], i2041[22])
  i2040.fogEndDistance = i2041[23]
  i2040.fogStartDistance = i2041[24]
  i2040.fogDensity = i2041[25]
  i2040.fog = !!i2041[26]
  request.r(i2041[27], i2041[28], 0, i2040, 'skybox')
  i2040.fogMode = i2041[29]
  var i2043 = i2041[30]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2043[i + 0]) );
  }
  i2040.lightmaps = i2042
  i2040.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2041[31], i2040.lightProbes)
  i2040.lightmapsMode = i2041[32]
  i2040.mixedBakeMode = i2041[33]
  i2040.environmentLightingMode = i2041[34]
  i2040.ambientProbe = new pc.SphericalHarmonicsL2(i2041[35])
  i2040.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2041[36])
  i2040.useReferenceAmbientProbe = !!i2041[37]
  request.r(i2041[38], i2041[39], 0, i2040, 'customReflection')
  request.r(i2041[40], i2041[41], 0, i2040, 'defaultReflection')
  i2040.defaultReflectionMode = i2041[42]
  i2040.defaultReflectionResolution = i2041[43]
  i2040.sunLightObjectId = i2041[44]
  i2040.pixelLightCount = i2041[45]
  i2040.defaultReflectionHDR = !!i2041[46]
  i2040.hasLightDataAsset = !!i2041[47]
  i2040.hasManualGenerate = !!i2041[48]
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2047 = data
  request.r(i2047[0], i2047[1], 0, i2046, 'lightmapColor')
  request.r(i2047[2], i2047[3], 0, i2046, 'lightmapDirection')
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2048 = root || new UnityEngine.LightProbes()
  var i2049 = data
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2057 = data
  var i2059 = i2057[0]
  var i2058 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2059[i + 0]));
  }
  i2056.ShaderCompilationErrors = i2058
  i2056.name = i2057[1]
  i2056.guid = i2057[2]
  var i2061 = i2057[3]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( i2061[i + 0] );
  }
  i2056.shaderDefinedKeywords = i2060
  var i2063 = i2057[4]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2063[i + 0]) );
  }
  i2056.passes = i2062
  var i2065 = i2057[5]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2065[i + 0]) );
  }
  i2056.usePasses = i2064
  var i2067 = i2057[6]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2067[i + 0]) );
  }
  i2056.defaultParameterValues = i2066
  request.r(i2057[7], i2057[8], 0, i2056, 'unityFallbackShader')
  i2056.readDepth = !!i2057[9]
  i2056.isCreatedByShaderGraph = !!i2057[10]
  i2056.usedBatchUniforms = i2057[11]
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2071 = data
  i2070.shaderName = i2071[0]
  i2070.errorMessage = i2071[1]
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2074 = root || new pc.UnityShaderPass()
  var i2075 = data
  i2074.id = i2075[0]
  i2074.subShaderIndex = i2075[1]
  i2074.name = i2075[2]
  i2074.passType = i2075[3]
  i2074.grabPassTextureName = i2075[4]
  i2074.usePass = !!i2075[5]
  i2074.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[6], i2074.zTest)
  i2074.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[7], i2074.zWrite)
  i2074.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[8], i2074.culling)
  i2074.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2075[9], i2074.blending)
  i2074.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2075[10], i2074.alphaBlending)
  i2074.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[11], i2074.colorWriteMask)
  i2074.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[12], i2074.offsetUnits)
  i2074.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[13], i2074.offsetFactor)
  i2074.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[14], i2074.stencilRef)
  i2074.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[15], i2074.stencilReadMask)
  i2074.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[16], i2074.stencilWriteMask)
  i2074.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2075[17], i2074.stencilOp)
  i2074.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2075[18], i2074.stencilOpFront)
  i2074.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2075[19], i2074.stencilOpBack)
  var i2077 = i2075[20]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2077[i + 0]) );
  }
  i2074.tags = i2076
  var i2079 = i2075[21]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( i2079[i + 0] );
  }
  i2074.passDefinedKeywords = i2078
  var i2081 = i2075[22]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2081[i + 0]) );
  }
  i2074.passDefinedKeywordGroups = i2080
  var i2083 = i2075[23]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2083[i + 0]) );
  }
  i2074.variants = i2082
  var i2085 = i2075[24]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2085[i + 0]) );
  }
  i2074.excludedVariants = i2084
  i2074.hasDepthReader = !!i2075[25]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2087 = data
  i2086.val = i2087[0]
  i2086.name = i2087[1]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2089 = data
  i2088.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2089[0], i2088.src)
  i2088.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2089[1], i2088.dst)
  i2088.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2089[2], i2088.op)
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2091 = data
  i2090.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2091[0], i2090.pass)
  i2090.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2091[1], i2090.fail)
  i2090.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2091[2], i2090.zFail)
  i2090.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2091[3], i2090.comp)
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2095 = data
  i2094.name = i2095[0]
  i2094.value = i2095[1]
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2099 = data
  var i2101 = i2099[0]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( i2101[i + 0] );
  }
  i2098.keywords = i2100
  i2098.hasDiscard = !!i2099[1]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2105 = data
  i2104.passId = i2105[0]
  i2104.subShaderIndex = i2105[1]
  var i2107 = i2105[2]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( i2107[i + 0] );
  }
  i2104.keywords = i2106
  i2104.vertexProgram = i2105[3]
  i2104.fragmentProgram = i2105[4]
  i2104.compiledForWebGL2 = !!i2105[5]
  i2104.readDepth = !!i2105[6]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2111 = data
  request.r(i2111[0], i2111[1], 0, i2110, 'shader')
  i2110.pass = i2111[2]
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2115 = data
  i2114.name = i2115[0]
  i2114.type = i2115[1]
  i2114.value = new pc.Vec4( i2115[2], i2115[3], i2115[4], i2115[5] )
  i2114.textureValue = i2115[6]
  i2114.shaderPropertyFlag = i2115[7]
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2117 = data
  i2116.name = i2117[0]
  request.r(i2117[1], i2117[2], 0, i2116, 'texture')
  i2116.aabb = i2117[3]
  i2116.vertices = i2117[4]
  i2116.triangles = i2117[5]
  i2116.textureRect = UnityEngine.Rect.MinMaxRect(i2117[6], i2117[7], i2117[8], i2117[9])
  i2116.packedRect = UnityEngine.Rect.MinMaxRect(i2117[10], i2117[11], i2117[12], i2117[13])
  i2116.border = new pc.Vec4( i2117[14], i2117[15], i2117[16], i2117[17] )
  i2116.transparency = i2117[18]
  i2116.bounds = i2117[19]
  i2116.pixelsPerUnit = i2117[20]
  i2116.textureWidth = i2117[21]
  i2116.textureHeight = i2117[22]
  i2116.nativeSize = new pc.Vec2( i2117[23], i2117[24] )
  i2116.pivot = new pc.Vec2( i2117[25], i2117[26] )
  i2116.textureRectOffset = new pc.Vec2( i2117[27], i2117[28] )
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2119 = data
  i2118.name = i2119[0]
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2121 = data
  i2120.name = i2121[0]
  i2120.ascent = i2121[1]
  i2120.originalLineHeight = i2121[2]
  i2120.fontSize = i2121[3]
  var i2123 = i2121[4]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 1) {
    i2122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2123[i + 0]) );
  }
  i2120.characterInfo = i2122
  request.r(i2121[5], i2121[6], 0, i2120, 'texture')
  i2120.originalFontSize = i2121[7]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2127 = data
  i2126.index = i2127[0]
  i2126.advance = i2127[1]
  i2126.bearing = i2127[2]
  i2126.glyphWidth = i2127[3]
  i2126.glyphHeight = i2127[4]
  i2126.minX = i2127[5]
  i2126.maxX = i2127[6]
  i2126.minY = i2127[7]
  i2126.maxY = i2127[8]
  i2126.uvBottomLeftX = i2127[9]
  i2126.uvBottomLeftY = i2127[10]
  i2126.uvBottomRightX = i2127[11]
  i2126.uvBottomRightY = i2127[12]
  i2126.uvTopLeftX = i2127[13]
  i2126.uvTopLeftY = i2127[14]
  i2126.uvTopRightX = i2127[15]
  i2126.uvTopRightY = i2127[16]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2129 = data
  i2128.name = i2129[0]
  i2128.bytes64 = i2129[1]
  i2128.data = i2129[2]
  return i2128
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2130 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2131 = data
  var i2133 = i2131[0]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 2) {
  request.r(i2133[i + 0], i2133[i + 1], 2, i2132, '')
  }
  i2130.atlasAssets = i2132
  i2130.scale = i2131[1]
  request.r(i2131[2], i2131[3], 0, i2130, 'skeletonJSON')
  i2130.isUpgradingBlendModeMaterials = !!i2131[4]
  i2130.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2131[5], i2130.blendModeMaterials)
  var i2135 = i2131[6]
  var i2134 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2135.length; i += 2) {
  request.r(i2135[i + 0], i2135[i + 1], 1, i2134, '')
  }
  i2130.skeletonDataModifiers = i2134
  var i2137 = i2131[7]
  var i2136 = []
  for(var i = 0; i < i2137.length; i += 1) {
    i2136.push( i2137[i + 0] );
  }
  i2130.fromAnimation = i2136
  var i2139 = i2131[8]
  var i2138 = []
  for(var i = 0; i < i2139.length; i += 1) {
    i2138.push( i2139[i + 0] );
  }
  i2130.toAnimation = i2138
  i2130.duration = i2131[9]
  i2130.defaultMix = i2131[10]
  request.r(i2131[11], i2131[12], 0, i2130, 'controller')
  return i2130
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2142 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2143 = data
  i2142.applyAdditiveMaterial = !!i2143[0]
  var i2145 = i2143[1]
  var i2144 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2145.length; i += 1) {
    i2144.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2145[i + 0]));
  }
  i2142.additiveMaterials = i2144
  var i2147 = i2143[2]
  var i2146 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2147.length; i += 1) {
    i2146.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2147[i + 0]));
  }
  i2142.multiplyMaterials = i2146
  var i2149 = i2143[3]
  var i2148 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2149[i + 0]));
  }
  i2142.screenMaterials = i2148
  i2142.requiresBlendModeMaterials = !!i2143[4]
  return i2142
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2152 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2153 = data
  i2152.pageName = i2153[0]
  request.r(i2153[1], i2153[2], 0, i2152, 'material')
  return i2152
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2156 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2157 = data
  request.r(i2157[0], i2157[1], 0, i2156, 'atlasFile')
  var i2159 = i2157[2]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 2) {
  request.r(i2159[i + 0], i2159[i + 1], 2, i2158, '')
  }
  i2156.materials = i2158
  i2156.textureLoadingMode = i2157[3]
  request.r(i2157[4], i2157[5], 0, i2156, 'onDemandTextureLoader')
  return i2156
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2162 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2163 = data
  i2162.useSafeMode = !!i2163[0]
  i2162.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2163[1], i2162.safeModeOptions)
  i2162.timeScale = i2163[2]
  i2162.unscaledTimeScale = i2163[3]
  i2162.useSmoothDeltaTime = !!i2163[4]
  i2162.maxSmoothUnscaledTime = i2163[5]
  i2162.rewindCallbackMode = i2163[6]
  i2162.showUnityEditorReport = !!i2163[7]
  i2162.logBehaviour = i2163[8]
  i2162.drawGizmos = !!i2163[9]
  i2162.defaultRecyclable = !!i2163[10]
  i2162.defaultAutoPlay = i2163[11]
  i2162.defaultUpdateType = i2163[12]
  i2162.defaultTimeScaleIndependent = !!i2163[13]
  i2162.defaultEaseType = i2163[14]
  i2162.defaultEaseOvershootOrAmplitude = i2163[15]
  i2162.defaultEasePeriod = i2163[16]
  i2162.defaultAutoKill = !!i2163[17]
  i2162.defaultLoopType = i2163[18]
  i2162.debugMode = !!i2163[19]
  i2162.debugStoreTargetId = !!i2163[20]
  i2162.showPreviewPanel = !!i2163[21]
  i2162.storeSettingsLocation = i2163[22]
  i2162.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2163[23], i2162.modules)
  i2162.createASMDEF = !!i2163[24]
  i2162.showPlayingTweens = !!i2163[25]
  i2162.showPausedTweens = !!i2163[26]
  return i2162
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2164 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2165 = data
  i2164.logBehaviour = i2165[0]
  i2164.nestedTweenFailureBehaviour = i2165[1]
  return i2164
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2166 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2167 = data
  i2166.showPanel = !!i2167[0]
  i2166.audioEnabled = !!i2167[1]
  i2166.physicsEnabled = !!i2167[2]
  i2166.physics2DEnabled = !!i2167[3]
  i2166.spriteEnabled = !!i2167[4]
  i2166.uiEnabled = !!i2167[5]
  i2166.textMeshProEnabled = !!i2167[6]
  i2166.tk2DEnabled = !!i2167[7]
  i2166.deAudioEnabled = !!i2167[8]
  i2166.deUnityExtendedEnabled = !!i2167[9]
  i2166.epoOutlineEnabled = !!i2167[10]
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2169 = data
  var i2171 = i2169[0]
  var i2170 = []
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2171[i + 0]) );
  }
  i2168.files = i2170
  i2168.componentToPrefabIds = i2169[1]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2175 = data
  i2174.path = i2175[0]
  request.r(i2175[1], i2175[2], 0, i2174, 'unityObject')
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2177 = data
  var i2179 = i2177[0]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2179[i + 0]) );
  }
  i2176.scriptsExecutionOrder = i2178
  var i2181 = i2177[1]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 1) {
    i2180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2181[i + 0]) );
  }
  i2176.sortingLayers = i2180
  var i2183 = i2177[2]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2183[i + 0]) );
  }
  i2176.cullingLayers = i2182
  i2176.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2177[3], i2176.timeSettings)
  i2176.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2177[4], i2176.physicsSettings)
  i2176.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2177[5], i2176.physics2DSettings)
  i2176.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2177[6], i2176.qualitySettings)
  i2176.enableRealtimeShadows = !!i2177[7]
  i2176.enableAutoInstancing = !!i2177[8]
  i2176.enableDynamicBatching = !!i2177[9]
  i2176.lightmapEncodingQuality = i2177[10]
  i2176.desiredColorSpace = i2177[11]
  var i2185 = i2177[12]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.push( i2185[i + 0] );
  }
  i2176.allTags = i2184
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2189 = data
  i2188.name = i2189[0]
  i2188.value = i2189[1]
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2193 = data
  i2192.id = i2193[0]
  i2192.name = i2193[1]
  i2192.value = i2193[2]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2197 = data
  i2196.id = i2197[0]
  i2196.name = i2197[1]
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2199 = data
  i2198.fixedDeltaTime = i2199[0]
  i2198.maximumDeltaTime = i2199[1]
  i2198.timeScale = i2199[2]
  i2198.maximumParticleTimestep = i2199[3]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2201 = data
  i2200.gravity = new pc.Vec3( i2201[0], i2201[1], i2201[2] )
  i2200.defaultSolverIterations = i2201[3]
  i2200.bounceThreshold = i2201[4]
  i2200.autoSyncTransforms = !!i2201[5]
  i2200.autoSimulation = !!i2201[6]
  var i2203 = i2201[7]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2203[i + 0]) );
  }
  i2200.collisionMatrix = i2202
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2207 = data
  i2206.enabled = !!i2207[0]
  i2206.layerId = i2207[1]
  i2206.otherLayerId = i2207[2]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2209 = data
  request.r(i2209[0], i2209[1], 0, i2208, 'material')
  i2208.gravity = new pc.Vec2( i2209[2], i2209[3] )
  i2208.positionIterations = i2209[4]
  i2208.velocityIterations = i2209[5]
  i2208.velocityThreshold = i2209[6]
  i2208.maxLinearCorrection = i2209[7]
  i2208.maxAngularCorrection = i2209[8]
  i2208.maxTranslationSpeed = i2209[9]
  i2208.maxRotationSpeed = i2209[10]
  i2208.baumgarteScale = i2209[11]
  i2208.baumgarteTOIScale = i2209[12]
  i2208.timeToSleep = i2209[13]
  i2208.linearSleepTolerance = i2209[14]
  i2208.angularSleepTolerance = i2209[15]
  i2208.defaultContactOffset = i2209[16]
  i2208.autoSimulation = !!i2209[17]
  i2208.queriesHitTriggers = !!i2209[18]
  i2208.queriesStartInColliders = !!i2209[19]
  i2208.callbacksOnDisable = !!i2209[20]
  i2208.reuseCollisionCallbacks = !!i2209[21]
  i2208.autoSyncTransforms = !!i2209[22]
  var i2211 = i2209[23]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2211[i + 0]) );
  }
  i2208.collisionMatrix = i2210
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2215 = data
  i2214.enabled = !!i2215[0]
  i2214.layerId = i2215[1]
  i2214.otherLayerId = i2215[2]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2217 = data
  var i2219 = i2217[0]
  var i2218 = []
  for(var i = 0; i < i2219.length; i += 1) {
    i2218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2219[i + 0]) );
  }
  i2216.qualityLevels = i2218
  var i2221 = i2217[1]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( i2221[i + 0] );
  }
  i2216.names = i2220
  i2216.shadows = i2217[2]
  i2216.anisotropicFiltering = i2217[3]
  i2216.antiAliasing = i2217[4]
  i2216.lodBias = i2217[5]
  i2216.shadowCascades = i2217[6]
  i2216.shadowDistance = i2217[7]
  i2216.shadowmaskMode = i2217[8]
  i2216.shadowProjection = i2217[9]
  i2216.shadowResolution = i2217[10]
  i2216.softParticles = !!i2217[11]
  i2216.softVegetation = !!i2217[12]
  i2216.activeColorSpace = i2217[13]
  i2216.desiredColorSpace = i2217[14]
  i2216.masterTextureLimit = i2217[15]
  i2216.maxQueuedFrames = i2217[16]
  i2216.particleRaycastBudget = i2217[17]
  i2216.pixelLightCount = i2217[18]
  i2216.realtimeReflectionProbes = !!i2217[19]
  i2216.shadowCascade2Split = i2217[20]
  i2216.shadowCascade4Split = new pc.Vec3( i2217[21], i2217[22], i2217[23] )
  i2216.streamingMipmapsActive = !!i2217[24]
  i2216.vSyncCount = i2217[25]
  i2216.asyncUploadBufferSize = i2217[26]
  i2216.asyncUploadTimeSlice = i2217[27]
  i2216.billboardsFaceCameraPosition = !!i2217[28]
  i2216.shadowNearPlaneOffset = i2217[29]
  i2216.streamingMipmapsMemoryBudget = i2217[30]
  i2216.maximumLODLevel = i2217[31]
  i2216.streamingMipmapsAddAllCameras = !!i2217[32]
  i2216.streamingMipmapsMaxLevelReduction = i2217[33]
  i2216.streamingMipmapsRenderersPerFrame = i2217[34]
  i2216.resolutionScalingFixedDPIFactor = i2217[35]
  i2216.streamingMipmapsMaxFileIORequests = i2217[36]
  i2216.currentQualityLevel = i2217[37]
  return i2216
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[10],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[10],"71":[72],"73":[74],"75":[74],"14":[2],"76":[77],"78":[79],"80":[77],"81":[2],"82":[2],"16":[14],"5":[3,2],"83":[2],"15":[14],"84":[2],"30":[2],"85":[2],"86":[2],"87":[2],"88":[2],"89":[2],"34":[2],"90":[2],"21":[3,2],"91":[2],"92":[2],"93":[2],"94":[2],"31":[3,2],"95":[2],"96":[12],"97":[12],"13":[12],"98":[12],"99":[10],"100":[10],"101":[102],"103":[10],"104":[105],"106":[2],"107":[3,2],"108":[72],"22":[3,2],"109":[110,72],"111":[72],"112":[72,113],"114":[49],"115":[57],"116":[105],"117":[118],"119":[2],"120":[72,2],"121":[2,3],"122":[2],"123":[3,2],"124":[72],"125":[3,2],"126":[2],"127":[77]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","ClickItem","DraggableItem","UnityEngine.CanvasGroup","DropZone","UnityEngine.PolygonCollider2D","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "04/15/2025 07:07:05";

Deserializers.lunaDaysRunning = "9.1";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "APG_V01_TrangHT_AnhPD_v2";

Deserializers.lunaAppID = "0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1778";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4232";

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

Deserializers.buildID = "4c66f798-4b5a-45b2-b76b-8878cc902a6a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

