var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1848 = root || request.c( 'UnityEngine.JointSpring' )
  var i1849 = data
  i1848.spring = i1849[0]
  i1848.damper = i1849[1]
  i1848.targetPosition = i1849[2]
  return i1848
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1850 = root || request.c( 'UnityEngine.JointMotor' )
  var i1851 = data
  i1850.m_TargetVelocity = i1851[0]
  i1850.m_Force = i1851[1]
  i1850.m_FreeSpin = i1851[2]
  return i1850
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1852 = root || request.c( 'UnityEngine.JointLimits' )
  var i1853 = data
  i1852.m_Min = i1853[0]
  i1852.m_Max = i1853[1]
  i1852.m_Bounciness = i1853[2]
  i1852.m_BounceMinVelocity = i1853[3]
  i1852.m_ContactDistance = i1853[4]
  i1852.minBounce = i1853[5]
  i1852.maxBounce = i1853[6]
  return i1852
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1854 = root || request.c( 'UnityEngine.JointDrive' )
  var i1855 = data
  i1854.m_PositionSpring = i1855[0]
  i1854.m_PositionDamper = i1855[1]
  i1854.m_MaximumForce = i1855[2]
  i1854.m_UseAcceleration = i1855[3]
  return i1854
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1857 = data
  i1856.m_Spring = i1857[0]
  i1856.m_Damper = i1857[1]
  return i1856
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1858 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1859 = data
  i1858.m_Limit = i1859[0]
  i1858.m_Bounciness = i1859[1]
  i1858.m_ContactDistance = i1859[2]
  return i1858
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1860 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1861 = data
  i1860.m_ExtremumSlip = i1861[0]
  i1860.m_ExtremumValue = i1861[1]
  i1860.m_AsymptoteSlip = i1861[2]
  i1860.m_AsymptoteValue = i1861[3]
  i1860.m_Stiffness = i1861[4]
  return i1860
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1862 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1863 = data
  i1862.m_LowerAngle = i1863[0]
  i1862.m_UpperAngle = i1863[1]
  return i1862
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1864 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1865 = data
  i1864.m_MotorSpeed = i1865[0]
  i1864.m_MaximumMotorTorque = i1865[1]
  return i1864
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1866 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1867 = data
  i1866.m_DampingRatio = i1867[0]
  i1866.m_Frequency = i1867[1]
  i1866.m_Angle = i1867[2]
  return i1866
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1868 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1869 = data
  i1868.m_LowerTranslation = i1869[0]
  i1868.m_UpperTranslation = i1869[1]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1871 = data
  i1870.name = i1871[0]
  i1870.width = i1871[1]
  i1870.height = i1871[2]
  i1870.mipmapCount = i1871[3]
  i1870.anisoLevel = i1871[4]
  i1870.filterMode = i1871[5]
  i1870.hdr = !!i1871[6]
  i1870.format = i1871[7]
  i1870.wrapMode = i1871[8]
  i1870.alphaIsTransparency = !!i1871[9]
  i1870.alphaSource = i1871[10]
  i1870.graphicsFormat = i1871[11]
  i1870.sRGBTexture = !!i1871[12]
  i1870.desiredColorSpace = i1871[13]
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1872 = root || new pc.UnityMaterial()
  var i1873 = data
  i1872.name = i1873[0]
  request.r(i1873[1], i1873[2], 0, i1872, 'shader')
  i1872.renderQueue = i1873[3]
  i1872.enableInstancing = !!i1873[4]
  var i1875 = i1873[5]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1875[i + 0]) );
  }
  i1872.floatParameters = i1874
  var i1877 = i1873[6]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1877[i + 0]) );
  }
  i1872.colorParameters = i1876
  var i1879 = i1873[7]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1879[i + 0]) );
  }
  i1872.vectorParameters = i1878
  var i1881 = i1873[8]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1881[i + 0]) );
  }
  i1872.textureParameters = i1880
  var i1883 = i1873[9]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1883[i + 0]) );
  }
  i1872.materialFlags = i1882
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1887 = data
  i1886.name = i1887[0]
  i1886.value = i1887[1]
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1891 = data
  i1890.name = i1891[0]
  i1890.value = new pc.Color(i1891[1], i1891[2], i1891[3], i1891[4])
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1895 = data
  i1894.name = i1895[0]
  i1894.value = new pc.Vec4( i1895[1], i1895[2], i1895[3], i1895[4] )
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1899 = data
  i1898.name = i1899[0]
  request.r(i1899[1], i1899[2], 0, i1898, 'value')
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1903 = data
  i1902.name = i1903[0]
  i1902.enabled = !!i1903[1]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1905 = data
  i1904.name = i1905[0]
  i1904.index = i1905[1]
  i1904.startup = !!i1905[2]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1907 = data
  i1906.position = new pc.Vec3( i1907[0], i1907[1], i1907[2] )
  i1906.scale = new pc.Vec3( i1907[3], i1907[4], i1907[5] )
  i1906.rotation = new pc.Quat(i1907[6], i1907[7], i1907[8], i1907[9])
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1909 = data
  i1908.enabled = !!i1909[0]
  i1908.aspect = i1909[1]
  i1908.orthographic = !!i1909[2]
  i1908.orthographicSize = i1909[3]
  i1908.backgroundColor = new pc.Color(i1909[4], i1909[5], i1909[6], i1909[7])
  i1908.nearClipPlane = i1909[8]
  i1908.farClipPlane = i1909[9]
  i1908.fieldOfView = i1909[10]
  i1908.depth = i1909[11]
  i1908.clearFlags = i1909[12]
  i1908.cullingMask = i1909[13]
  i1908.rect = i1909[14]
  request.r(i1909[15], i1909[16], 0, i1908, 'targetTexture')
  i1908.usePhysicalProperties = !!i1909[17]
  i1908.focalLength = i1909[18]
  i1908.sensorSize = new pc.Vec2( i1909[19], i1909[20] )
  i1908.lensShift = new pc.Vec2( i1909[21], i1909[22] )
  i1908.gateFit = i1909[23]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1911 = data
  i1910.name = i1911[0]
  i1910.tagId = i1911[1]
  i1910.enabled = !!i1911[2]
  i1910.isStatic = !!i1911[3]
  i1910.layer = i1911[4]
  return i1910
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1912 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1913 = data
  request.r(i1913[0], i1913[1], 0, i1912, 'm_FirstSelected')
  i1912.m_sendNavigationEvents = !!i1913[2]
  i1912.m_DragThreshold = i1913[3]
  return i1912
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1914 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1915 = data
  i1914.m_HorizontalAxis = i1915[0]
  i1914.m_VerticalAxis = i1915[1]
  i1914.m_SubmitButton = i1915[2]
  i1914.m_CancelButton = i1915[3]
  i1914.m_InputActionsPerSecond = i1915[4]
  i1914.m_RepeatDelay = i1915[5]
  i1914.m_ForceModuleActive = !!i1915[6]
  i1914.m_SendPointerHoverToParent = !!i1915[7]
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1917 = data
  i1916.pivot = new pc.Vec2( i1917[0], i1917[1] )
  i1916.anchorMin = new pc.Vec2( i1917[2], i1917[3] )
  i1916.anchorMax = new pc.Vec2( i1917[4], i1917[5] )
  i1916.sizeDelta = new pc.Vec2( i1917[6], i1917[7] )
  i1916.anchoredPosition3D = new pc.Vec3( i1917[8], i1917[9], i1917[10] )
  i1916.rotation = new pc.Quat(i1917[11], i1917[12], i1917[13], i1917[14])
  i1916.scale = new pc.Vec3( i1917[15], i1917[16], i1917[17] )
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1919 = data
  i1918.enabled = !!i1919[0]
  i1918.planeDistance = i1919[1]
  i1918.referencePixelsPerUnit = i1919[2]
  i1918.isFallbackOverlay = !!i1919[3]
  i1918.renderMode = i1919[4]
  i1918.renderOrder = i1919[5]
  i1918.sortingLayerName = i1919[6]
  i1918.sortingOrder = i1919[7]
  i1918.scaleFactor = i1919[8]
  request.r(i1919[9], i1919[10], 0, i1918, 'worldCamera')
  i1918.overrideSorting = !!i1919[11]
  i1918.pixelPerfect = !!i1919[12]
  i1918.targetDisplay = i1919[13]
  i1918.overridePixelPerfect = !!i1919[14]
  return i1918
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1920 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1921 = data
  i1920.m_UiScaleMode = i1921[0]
  i1920.m_ReferencePixelsPerUnit = i1921[1]
  i1920.m_ScaleFactor = i1921[2]
  i1920.m_ReferenceResolution = new pc.Vec2( i1921[3], i1921[4] )
  i1920.m_ScreenMatchMode = i1921[5]
  i1920.m_MatchWidthOrHeight = i1921[6]
  i1920.m_PhysicalUnit = i1921[7]
  i1920.m_FallbackScreenDPI = i1921[8]
  i1920.m_DefaultSpriteDPI = i1921[9]
  i1920.m_DynamicPixelsPerUnit = i1921[10]
  i1920.m_PresetInfoIsWorld = !!i1921[11]
  return i1920
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1922 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1923 = data
  i1922.m_IgnoreReversedGraphics = !!i1923[0]
  i1922.m_BlockingObjects = i1923[1]
  i1922.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1923[2] )
  return i1922
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1924 = root || request.c( 'LunaManager' )
  var i1925 = data
  var i1927 = i1925[0]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 2) {
  request.r(i1927[i + 0], i1927[i + 1], 2, i1926, '')
  }
  i1924.lstBtnInstall = i1926
  request.r(i1925[1], i1925[2], 0, i1924, 'EndCard')
  i1924.countPlay = i1925[3]
  i1924.countPlayFinal = i1925[4]
  i1924.timeDropFinal = i1925[5]
  i1924.colorBG = new pc.Color(i1925[6], i1925[7], i1925[8], i1925[9])
  request.r(i1925[10], i1925[11], 0, i1924, 'texture2D')
  request.r(i1925[12], i1925[13], 0, i1924, 'rawImageBG')
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1931 = data
  i1930.cullTransparentMesh = !!i1931[0]
  return i1930
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1932 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1933 = data
  request.r(i1933[0], i1933[1], 0, i1932, 'm_Texture')
  i1932.m_UVRect = UnityEngine.Rect.MinMaxRect(i1933[2], i1933[3], i1933[4], i1933[5])
  request.r(i1933[6], i1933[7], 0, i1932, 'm_Material')
  i1932.m_Maskable = !!i1933[8]
  i1932.m_Color = new pc.Color(i1933[9], i1933[10], i1933[11], i1933[12])
  i1932.m_RaycastTarget = !!i1933[13]
  i1932.m_RaycastPadding = new pc.Vec4( i1933[14], i1933[15], i1933[16], i1933[17] )
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

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1936 = root || request.c( 'UnityEngine.UI.Image' )
  var i1937 = data
  request.r(i1937[0], i1937[1], 0, i1936, 'm_Sprite')
  i1936.m_Type = i1937[2]
  i1936.m_PreserveAspect = !!i1937[3]
  i1936.m_FillCenter = !!i1937[4]
  i1936.m_FillMethod = i1937[5]
  i1936.m_FillAmount = i1937[6]
  i1936.m_FillClockwise = !!i1937[7]
  i1936.m_FillOrigin = i1937[8]
  i1936.m_UseSpriteMesh = !!i1937[9]
  i1936.m_PixelsPerUnitMultiplier = i1937[10]
  request.r(i1937[11], i1937[12], 0, i1936, 'm_Material')
  i1936.m_Maskable = !!i1937[13]
  i1936.m_Color = new pc.Color(i1937[14], i1937[15], i1937[16], i1937[17])
  i1936.m_RaycastTarget = !!i1937[18]
  i1936.m_RaycastPadding = new pc.Vec4( i1937[19], i1937[20], i1937[21], i1937[22] )
  return i1936
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1938 = root || request.c( 'DropZone' )
  var i1939 = data
  i1938.idDrop = i1939[0]
  var i1941 = i1939[1]
  var i1940 = []
  for(var i = 0; i < i1941.length; i += 2) {
  request.r(i1941[i + 0], i1941[i + 1], 2, i1940, '')
  }
  i1938.steps = i1940
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1945 = data
  i1944.usedByComposite = !!i1945[0]
  i1944.autoTiling = !!i1945[1]
  i1944.size = new pc.Vec2( i1945[2], i1945[3] )
  i1944.edgeRadius = i1945[4]
  i1944.enabled = !!i1945[5]
  i1944.isTrigger = !!i1945[6]
  i1944.usedByEffector = !!i1945[7]
  i1944.density = i1945[8]
  i1944.offset = new pc.Vec2( i1945[9], i1945[10] )
  request.r(i1945[11], i1945[12], 0, i1944, 'material')
  return i1944
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1946 = root || request.c( 'UnityEngine.UI.Button' )
  var i1947 = data
  i1946.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1947[0], i1946.m_OnClick)
  i1946.m_Navigation = request.d('UnityEngine.UI.Navigation', i1947[1], i1946.m_Navigation)
  i1946.m_Transition = i1947[2]
  i1946.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1947[3], i1946.m_Colors)
  i1946.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1947[4], i1946.m_SpriteState)
  i1946.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1947[5], i1946.m_AnimationTriggers)
  i1946.m_Interactable = !!i1947[6]
  request.r(i1947[7], i1947[8], 0, i1946, 'm_TargetGraphic')
  return i1946
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1948 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1949 = data
  i1948.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1949[0], i1948.m_PersistentCalls)
  return i1948
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1950 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1951 = data
  var i1953 = i1951[0]
  var i1952 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.add(request.d('UnityEngine.Events.PersistentCall', i1953[i + 0]));
  }
  i1950.m_Calls = i1952
  return i1950
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1957 = data
  request.r(i1957[0], i1957[1], 0, i1956, 'm_Target')
  i1956.m_TargetAssemblyTypeName = i1957[2]
  i1956.m_MethodName = i1957[3]
  i1956.m_Mode = i1957[4]
  i1956.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1957[5], i1956.m_Arguments)
  i1956.m_CallState = i1957[6]
  return i1956
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1959 = data
  request.r(i1959[0], i1959[1], 0, i1958, 'm_ObjectArgument')
  i1958.m_ObjectArgumentAssemblyTypeName = i1959[2]
  i1958.m_IntArgument = i1959[3]
  i1958.m_FloatArgument = i1959[4]
  i1958.m_StringArgument = i1959[5]
  i1958.m_BoolArgument = !!i1959[6]
  return i1958
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1960 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1961 = data
  i1960.m_Mode = i1961[0]
  i1960.m_WrapAround = !!i1961[1]
  request.r(i1961[2], i1961[3], 0, i1960, 'm_SelectOnUp')
  request.r(i1961[4], i1961[5], 0, i1960, 'm_SelectOnDown')
  request.r(i1961[6], i1961[7], 0, i1960, 'm_SelectOnLeft')
  request.r(i1961[8], i1961[9], 0, i1960, 'm_SelectOnRight')
  return i1960
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1962 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1963 = data
  i1962.m_NormalColor = new pc.Color(i1963[0], i1963[1], i1963[2], i1963[3])
  i1962.m_HighlightedColor = new pc.Color(i1963[4], i1963[5], i1963[6], i1963[7])
  i1962.m_PressedColor = new pc.Color(i1963[8], i1963[9], i1963[10], i1963[11])
  i1962.m_SelectedColor = new pc.Color(i1963[12], i1963[13], i1963[14], i1963[15])
  i1962.m_DisabledColor = new pc.Color(i1963[16], i1963[17], i1963[18], i1963[19])
  i1962.m_ColorMultiplier = i1963[20]
  i1962.m_FadeDuration = i1963[21]
  return i1962
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1964 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1965 = data
  request.r(i1965[0], i1965[1], 0, i1964, 'm_HighlightedSprite')
  request.r(i1965[2], i1965[3], 0, i1964, 'm_PressedSprite')
  request.r(i1965[4], i1965[5], 0, i1964, 'm_SelectedSprite')
  request.r(i1965[6], i1965[7], 0, i1964, 'm_DisabledSprite')
  return i1964
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1966 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1967 = data
  i1966.m_NormalTrigger = i1967[0]
  i1966.m_HighlightedTrigger = i1967[1]
  i1966.m_PressedTrigger = i1967[2]
  i1966.m_SelectedTrigger = i1967[3]
  i1966.m_DisabledTrigger = i1967[4]
  return i1966
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i1968 = root || request.c( 'ClickItem' )
  var i1969 = data
  i1968.isPhone = !!i1969[0]
  var i1971 = i1969[1]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 2) {
  request.r(i1971[i + 0], i1971[i + 1], 2, i1970, '')
  }
  i1968.steps = i1970
  i1968.currentStep = i1969[2]
  return i1968
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1972 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1973 = data
  request.r(i1973[0], i1973[1], 0, i1972, 'skeletonDataAsset')
  request.r(i1973[2], i1973[3], 0, i1972, 'additiveMaterial')
  request.r(i1973[4], i1973[5], 0, i1972, 'multiplyMaterial')
  request.r(i1973[6], i1973[7], 0, i1972, 'screenMaterial')
  i1972.initialSkinName = i1973[8]
  i1972.initialFlipX = !!i1973[9]
  i1972.initialFlipY = !!i1973[10]
  i1972.startingAnimation = i1973[11]
  i1972.startingLoop = !!i1973[12]
  i1972.timeScale = i1973[13]
  i1972.freeze = !!i1973[14]
  i1972.layoutScaleMode = i1973[15]
  i1972.updateWhenInvisible = i1973[16]
  i1972.allowMultipleCanvasRenderers = !!i1973[17]
  var i1975 = i1973[18]
  var i1974 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1975.length; i += 2) {
  request.r(i1975[i + 0], i1975[i + 1], 1, i1974, '')
  }
  i1972.canvasRenderers = i1974
  i1972.enableSeparatorSlots = !!i1973[19]
  i1972.updateSeparatorPartLocation = !!i1973[20]
  i1972.updateSeparatorPartScale = !!i1973[21]
  i1972.disableMeshAssignmentOnOverride = !!i1973[22]
  i1972.referenceSize = new pc.Vec2( i1973[23], i1973[24] )
  i1972.referenceScale = i1973[25]
  i1972.rectTransformSize = new pc.Vec2( i1973[26], i1973[27] )
  i1972.editReferenceRect = !!i1973[28]
  var i1977 = i1973[29]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.push( i1977[i + 0] );
  }
  i1972.separatorSlotNames = i1976
  var i1979 = i1973[30]
  var i1978 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1979.length; i += 2) {
  request.r(i1979[i + 0], i1979[i + 1], 1, i1978, '')
  }
  i1972.separatorParts = i1978
  i1972.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1973[31], i1972.meshGenerator)
  i1972.updateTiming = i1973[32]
  i1972.unscaledTime = !!i1973[33]
  request.r(i1973[34], i1973[35], 0, i1972, 'm_Material')
  i1972.m_Maskable = !!i1973[36]
  i1972.m_Color = new pc.Color(i1973[37], i1973[38], i1973[39], i1973[40])
  i1972.m_RaycastTarget = !!i1973[41]
  i1972.m_RaycastPadding = new pc.Vec4( i1973[42], i1973[43], i1973[44], i1973[45] )
  return i1972
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1986 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1987 = data
  i1986.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1987[0], i1986.settings)
  return i1986
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1988 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1989 = data
  i1988.useClipping = !!i1989[0]
  i1988.zSpacing = i1989[1]
  i1988.pmaVertexColors = !!i1989[2]
  i1988.tintBlack = !!i1989[3]
  i1988.canvasGroupTintBlack = !!i1989[4]
  i1988.calculateTangents = !!i1989[5]
  i1988.addNormals = !!i1989[6]
  i1988.immutableTriangles = !!i1989[7]
  return i1988
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1990 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1991 = data
  i1990.targetIsSelf = !!i1991[0]
  request.r(i1991[1], i1991[2], 0, i1990, 'targetGO')
  i1990.tweenTargetIsTargetGO = !!i1991[3]
  i1990.delay = i1991[4]
  i1990.duration = i1991[5]
  i1990.easeType = i1991[6]
  i1990.easeCurve = new pc.AnimationCurve( { keys_flow: i1991[7] } )
  i1990.loopType = i1991[8]
  i1990.loops = i1991[9]
  i1990.id = i1991[10]
  i1990.isRelative = !!i1991[11]
  i1990.isFrom = !!i1991[12]
  i1990.isIndependentUpdate = !!i1991[13]
  i1990.autoKill = !!i1991[14]
  i1990.autoGenerate = !!i1991[15]
  i1990.isActive = !!i1991[16]
  i1990.isValid = !!i1991[17]
  request.r(i1991[18], i1991[19], 0, i1990, 'target')
  i1990.animationType = i1991[20]
  i1990.targetType = i1991[21]
  i1990.forcedTargetType = i1991[22]
  i1990.autoPlay = !!i1991[23]
  i1990.useTargetAsV3 = !!i1991[24]
  i1990.endValueFloat = i1991[25]
  i1990.endValueV3 = new pc.Vec3( i1991[26], i1991[27], i1991[28] )
  i1990.endValueV2 = new pc.Vec2( i1991[29], i1991[30] )
  i1990.endValueColor = new pc.Color(i1991[31], i1991[32], i1991[33], i1991[34])
  i1990.endValueString = i1991[35]
  i1990.endValueRect = UnityEngine.Rect.MinMaxRect(i1991[36], i1991[37], i1991[38], i1991[39])
  request.r(i1991[40], i1991[41], 0, i1990, 'endValueTransform')
  i1990.optionalBool0 = !!i1991[42]
  i1990.optionalBool1 = !!i1991[43]
  i1990.optionalFloat0 = i1991[44]
  i1990.optionalInt0 = i1991[45]
  i1990.optionalRotationMode = i1991[46]
  i1990.optionalScrambleMode = i1991[47]
  i1990.optionalShakeRandomnessMode = i1991[48]
  i1990.optionalString = i1991[49]
  i1990.updateType = i1991[50]
  i1990.isSpeedBased = !!i1991[51]
  i1990.hasOnStart = !!i1991[52]
  i1990.hasOnPlay = !!i1991[53]
  i1990.hasOnUpdate = !!i1991[54]
  i1990.hasOnStepComplete = !!i1991[55]
  i1990.hasOnComplete = !!i1991[56]
  i1990.hasOnTweenCreated = !!i1991[57]
  i1990.hasOnRewind = !!i1991[58]
  i1990.onStart = request.d('UnityEngine.Events.UnityEvent', i1991[59], i1990.onStart)
  i1990.onPlay = request.d('UnityEngine.Events.UnityEvent', i1991[60], i1990.onPlay)
  i1990.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1991[61], i1990.onUpdate)
  i1990.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1991[62], i1990.onStepComplete)
  i1990.onComplete = request.d('UnityEngine.Events.UnityEvent', i1991[63], i1990.onComplete)
  i1990.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1991[64], i1990.onTweenCreated)
  i1990.onRewind = request.d('UnityEngine.Events.UnityEvent', i1991[65], i1990.onRewind)
  return i1990
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1992 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1993 = data
  i1992.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1993[0], i1992.m_PersistentCalls)
  return i1992
}

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1994 = root || request.c( 'DraggableItem' )
  var i1995 = data
  i1994.idDrag = i1995[0]
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1997 = data
  i1996.m_Alpha = i1997[0]
  i1996.m_Interactable = !!i1997[1]
  i1996.m_BlocksRaycasts = !!i1997[2]
  i1996.m_IgnoreParentGroups = !!i1997[3]
  i1996.enabled = !!i1997[4]
  return i1996
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1998 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1999 = data
  i1998.m_Spacing = i1999[0]
  i1998.m_ChildForceExpandWidth = !!i1999[1]
  i1998.m_ChildForceExpandHeight = !!i1999[2]
  i1998.m_ChildControlWidth = !!i1999[3]
  i1998.m_ChildControlHeight = !!i1999[4]
  i1998.m_ChildScaleWidth = !!i1999[5]
  i1998.m_ChildScaleHeight = !!i1999[6]
  i1998.m_ReverseArrangement = !!i1999[7]
  i1998.m_Padding = UnityEngine.RectOffset.FromPaddings(i1999[8], i1999[9], i1999[10], i1999[11])
  i1998.m_ChildAlignment = i1999[12]
  return i1998
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2000 = root || request.c( 'UnityEngine.UI.Text' )
  var i2001 = data
  i2000.m_FontData = request.d('UnityEngine.UI.FontData', i2001[0], i2000.m_FontData)
  i2000.m_Text = i2001[1]
  request.r(i2001[2], i2001[3], 0, i2000, 'm_Material')
  i2000.m_Maskable = !!i2001[4]
  i2000.m_Color = new pc.Color(i2001[5], i2001[6], i2001[7], i2001[8])
  i2000.m_RaycastTarget = !!i2001[9]
  i2000.m_RaycastPadding = new pc.Vec4( i2001[10], i2001[11], i2001[12], i2001[13] )
  return i2000
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2002 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2003 = data
  request.r(i2003[0], i2003[1], 0, i2002, 'm_Font')
  i2002.m_FontSize = i2003[2]
  i2002.m_FontStyle = i2003[3]
  i2002.m_BestFit = !!i2003[4]
  i2002.m_MinSize = i2003[5]
  i2002.m_MaxSize = i2003[6]
  i2002.m_Alignment = i2003[7]
  i2002.m_AlignByGeometry = !!i2003[8]
  i2002.m_RichText = !!i2003[9]
  i2002.m_HorizontalOverflow = i2003[10]
  i2002.m_VerticalOverflow = i2003[11]
  i2002.m_LineSpacing = i2003[12]
  return i2002
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2004 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2005 = data
  i2004.m_ShowMaskGraphic = !!i2005[0]
  return i2004
}

Deserializers["IQFill"] = function (request, data, root) {
  var i2006 = root || request.c( 'IQFill' )
  var i2007 = data
  request.r(i2007[0], i2007[1], 0, i2006, 'fillImage')
  i2006.maxFillAmount = i2007[2]
  i2006.fillDuration = i2007[3]
  i2006.maxValue = i2007[4]
  i2006.addValue = i2007[5]
  i2006.fillEase = i2007[6]
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2009 = data
  i2008.ambientIntensity = i2009[0]
  i2008.reflectionIntensity = i2009[1]
  i2008.ambientMode = i2009[2]
  i2008.ambientLight = new pc.Color(i2009[3], i2009[4], i2009[5], i2009[6])
  i2008.ambientSkyColor = new pc.Color(i2009[7], i2009[8], i2009[9], i2009[10])
  i2008.ambientGroundColor = new pc.Color(i2009[11], i2009[12], i2009[13], i2009[14])
  i2008.ambientEquatorColor = new pc.Color(i2009[15], i2009[16], i2009[17], i2009[18])
  i2008.fogColor = new pc.Color(i2009[19], i2009[20], i2009[21], i2009[22])
  i2008.fogEndDistance = i2009[23]
  i2008.fogStartDistance = i2009[24]
  i2008.fogDensity = i2009[25]
  i2008.fog = !!i2009[26]
  request.r(i2009[27], i2009[28], 0, i2008, 'skybox')
  i2008.fogMode = i2009[29]
  var i2011 = i2009[30]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2011[i + 0]) );
  }
  i2008.lightmaps = i2010
  i2008.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2009[31], i2008.lightProbes)
  i2008.lightmapsMode = i2009[32]
  i2008.mixedBakeMode = i2009[33]
  i2008.environmentLightingMode = i2009[34]
  i2008.ambientProbe = new pc.SphericalHarmonicsL2(i2009[35])
  i2008.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2009[36])
  i2008.useReferenceAmbientProbe = !!i2009[37]
  request.r(i2009[38], i2009[39], 0, i2008, 'customReflection')
  request.r(i2009[40], i2009[41], 0, i2008, 'defaultReflection')
  i2008.defaultReflectionMode = i2009[42]
  i2008.defaultReflectionResolution = i2009[43]
  i2008.sunLightObjectId = i2009[44]
  i2008.pixelLightCount = i2009[45]
  i2008.defaultReflectionHDR = !!i2009[46]
  i2008.hasLightDataAsset = !!i2009[47]
  i2008.hasManualGenerate = !!i2009[48]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2015 = data
  request.r(i2015[0], i2015[1], 0, i2014, 'lightmapColor')
  request.r(i2015[2], i2015[3], 0, i2014, 'lightmapDirection')
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2016 = root || new UnityEngine.LightProbes()
  var i2017 = data
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2025 = data
  var i2027 = i2025[0]
  var i2026 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2027.length; i += 1) {
    i2026.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2027[i + 0]));
  }
  i2024.ShaderCompilationErrors = i2026
  i2024.name = i2025[1]
  i2024.guid = i2025[2]
  var i2029 = i2025[3]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( i2029[i + 0] );
  }
  i2024.shaderDefinedKeywords = i2028
  var i2031 = i2025[4]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2031[i + 0]) );
  }
  i2024.passes = i2030
  var i2033 = i2025[5]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 1) {
    i2032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2033[i + 0]) );
  }
  i2024.usePasses = i2032
  var i2035 = i2025[6]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2035[i + 0]) );
  }
  i2024.defaultParameterValues = i2034
  request.r(i2025[7], i2025[8], 0, i2024, 'unityFallbackShader')
  i2024.readDepth = !!i2025[9]
  i2024.isCreatedByShaderGraph = !!i2025[10]
  i2024.usedBatchUniforms = i2025[11]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2039 = data
  i2038.shaderName = i2039[0]
  i2038.errorMessage = i2039[1]
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2042 = root || new pc.UnityShaderPass()
  var i2043 = data
  i2042.id = i2043[0]
  i2042.subShaderIndex = i2043[1]
  i2042.name = i2043[2]
  i2042.passType = i2043[3]
  i2042.grabPassTextureName = i2043[4]
  i2042.usePass = !!i2043[5]
  i2042.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2043[6], i2042.zTest)
  i2042.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2043[7], i2042.zWrite)
  i2042.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2043[8], i2042.culling)
  i2042.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2043[9], i2042.blending)
  i2042.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2043[10], i2042.alphaBlending)
  i2042.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2043[11], i2042.colorWriteMask)
  i2042.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2043[12], i2042.offsetUnits)
  i2042.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2043[13], i2042.offsetFactor)
  i2042.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2043[14], i2042.stencilRef)
  i2042.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2043[15], i2042.stencilReadMask)
  i2042.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2043[16], i2042.stencilWriteMask)
  i2042.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2043[17], i2042.stencilOp)
  i2042.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2043[18], i2042.stencilOpFront)
  i2042.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2043[19], i2042.stencilOpBack)
  var i2045 = i2043[20]
  var i2044 = []
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2045[i + 0]) );
  }
  i2042.tags = i2044
  var i2047 = i2043[21]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.push( i2047[i + 0] );
  }
  i2042.passDefinedKeywords = i2046
  var i2049 = i2043[22]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2049[i + 0]) );
  }
  i2042.passDefinedKeywordGroups = i2048
  var i2051 = i2043[23]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2051[i + 0]) );
  }
  i2042.variants = i2050
  var i2053 = i2043[24]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2053[i + 0]) );
  }
  i2042.excludedVariants = i2052
  i2042.hasDepthReader = !!i2043[25]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2055 = data
  i2054.val = i2055[0]
  i2054.name = i2055[1]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2057 = data
  i2056.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2057[0], i2056.src)
  i2056.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2057[1], i2056.dst)
  i2056.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2057[2], i2056.op)
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2059 = data
  i2058.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2059[0], i2058.pass)
  i2058.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2059[1], i2058.fail)
  i2058.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2059[2], i2058.zFail)
  i2058.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2059[3], i2058.comp)
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2063 = data
  i2062.name = i2063[0]
  i2062.value = i2063[1]
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2067 = data
  var i2069 = i2067[0]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.push( i2069[i + 0] );
  }
  i2066.keywords = i2068
  i2066.hasDiscard = !!i2067[1]
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2073 = data
  i2072.passId = i2073[0]
  i2072.subShaderIndex = i2073[1]
  var i2075 = i2073[2]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.push( i2075[i + 0] );
  }
  i2072.keywords = i2074
  i2072.vertexProgram = i2073[3]
  i2072.fragmentProgram = i2073[4]
  i2072.compiledForWebGL2 = !!i2073[5]
  i2072.readDepth = !!i2073[6]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2079 = data
  request.r(i2079[0], i2079[1], 0, i2078, 'shader')
  i2078.pass = i2079[2]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2083 = data
  i2082.name = i2083[0]
  i2082.type = i2083[1]
  i2082.value = new pc.Vec4( i2083[2], i2083[3], i2083[4], i2083[5] )
  i2082.textureValue = i2083[6]
  i2082.shaderPropertyFlag = i2083[7]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2085 = data
  i2084.name = i2085[0]
  request.r(i2085[1], i2085[2], 0, i2084, 'texture')
  i2084.aabb = i2085[3]
  i2084.vertices = i2085[4]
  i2084.triangles = i2085[5]
  i2084.textureRect = UnityEngine.Rect.MinMaxRect(i2085[6], i2085[7], i2085[8], i2085[9])
  i2084.packedRect = UnityEngine.Rect.MinMaxRect(i2085[10], i2085[11], i2085[12], i2085[13])
  i2084.border = new pc.Vec4( i2085[14], i2085[15], i2085[16], i2085[17] )
  i2084.transparency = i2085[18]
  i2084.bounds = i2085[19]
  i2084.pixelsPerUnit = i2085[20]
  i2084.textureWidth = i2085[21]
  i2084.textureHeight = i2085[22]
  i2084.nativeSize = new pc.Vec2( i2085[23], i2085[24] )
  i2084.pivot = new pc.Vec2( i2085[25], i2085[26] )
  i2084.textureRectOffset = new pc.Vec2( i2085[27], i2085[28] )
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2087 = data
  i2086.name = i2087[0]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2089 = data
  i2088.name = i2089[0]
  i2088.ascent = i2089[1]
  i2088.originalLineHeight = i2089[2]
  i2088.fontSize = i2089[3]
  var i2091 = i2089[4]
  var i2090 = []
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2091[i + 0]) );
  }
  i2088.characterInfo = i2090
  request.r(i2089[5], i2089[6], 0, i2088, 'texture')
  i2088.originalFontSize = i2089[7]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2095 = data
  i2094.index = i2095[0]
  i2094.advance = i2095[1]
  i2094.bearing = i2095[2]
  i2094.glyphWidth = i2095[3]
  i2094.glyphHeight = i2095[4]
  i2094.minX = i2095[5]
  i2094.maxX = i2095[6]
  i2094.minY = i2095[7]
  i2094.maxY = i2095[8]
  i2094.uvBottomLeftX = i2095[9]
  i2094.uvBottomLeftY = i2095[10]
  i2094.uvBottomRightX = i2095[11]
  i2094.uvBottomRightY = i2095[12]
  i2094.uvTopLeftX = i2095[13]
  i2094.uvTopLeftY = i2095[14]
  i2094.uvTopRightX = i2095[15]
  i2094.uvTopRightY = i2095[16]
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2097 = data
  i2096.name = i2097[0]
  i2096.bytes64 = i2097[1]
  i2096.data = i2097[2]
  return i2096
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2098 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2099 = data
  var i2101 = i2099[0]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 2) {
  request.r(i2101[i + 0], i2101[i + 1], 2, i2100, '')
  }
  i2098.atlasAssets = i2100
  i2098.scale = i2099[1]
  request.r(i2099[2], i2099[3], 0, i2098, 'skeletonJSON')
  i2098.isUpgradingBlendModeMaterials = !!i2099[4]
  i2098.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2099[5], i2098.blendModeMaterials)
  var i2103 = i2099[6]
  var i2102 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2103.length; i += 2) {
  request.r(i2103[i + 0], i2103[i + 1], 1, i2102, '')
  }
  i2098.skeletonDataModifiers = i2102
  var i2105 = i2099[7]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.push( i2105[i + 0] );
  }
  i2098.fromAnimation = i2104
  var i2107 = i2099[8]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( i2107[i + 0] );
  }
  i2098.toAnimation = i2106
  i2098.duration = i2099[9]
  i2098.defaultMix = i2099[10]
  request.r(i2099[11], i2099[12], 0, i2098, 'controller')
  return i2098
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2110 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2111 = data
  i2110.applyAdditiveMaterial = !!i2111[0]
  var i2113 = i2111[1]
  var i2112 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2113[i + 0]));
  }
  i2110.additiveMaterials = i2112
  var i2115 = i2111[2]
  var i2114 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2115[i + 0]));
  }
  i2110.multiplyMaterials = i2114
  var i2117 = i2111[3]
  var i2116 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2117[i + 0]));
  }
  i2110.screenMaterials = i2116
  i2110.requiresBlendModeMaterials = !!i2111[4]
  return i2110
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2120 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2121 = data
  i2120.pageName = i2121[0]
  request.r(i2121[1], i2121[2], 0, i2120, 'material')
  return i2120
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2124 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2125 = data
  request.r(i2125[0], i2125[1], 0, i2124, 'atlasFile')
  var i2127 = i2125[2]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 2) {
  request.r(i2127[i + 0], i2127[i + 1], 2, i2126, '')
  }
  i2124.materials = i2126
  i2124.textureLoadingMode = i2125[3]
  request.r(i2125[4], i2125[5], 0, i2124, 'onDemandTextureLoader')
  return i2124
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2130 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2131 = data
  i2130.useSafeMode = !!i2131[0]
  i2130.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2131[1], i2130.safeModeOptions)
  i2130.timeScale = i2131[2]
  i2130.unscaledTimeScale = i2131[3]
  i2130.useSmoothDeltaTime = !!i2131[4]
  i2130.maxSmoothUnscaledTime = i2131[5]
  i2130.rewindCallbackMode = i2131[6]
  i2130.showUnityEditorReport = !!i2131[7]
  i2130.logBehaviour = i2131[8]
  i2130.drawGizmos = !!i2131[9]
  i2130.defaultRecyclable = !!i2131[10]
  i2130.defaultAutoPlay = i2131[11]
  i2130.defaultUpdateType = i2131[12]
  i2130.defaultTimeScaleIndependent = !!i2131[13]
  i2130.defaultEaseType = i2131[14]
  i2130.defaultEaseOvershootOrAmplitude = i2131[15]
  i2130.defaultEasePeriod = i2131[16]
  i2130.defaultAutoKill = !!i2131[17]
  i2130.defaultLoopType = i2131[18]
  i2130.debugMode = !!i2131[19]
  i2130.debugStoreTargetId = !!i2131[20]
  i2130.showPreviewPanel = !!i2131[21]
  i2130.storeSettingsLocation = i2131[22]
  i2130.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2131[23], i2130.modules)
  i2130.createASMDEF = !!i2131[24]
  i2130.showPlayingTweens = !!i2131[25]
  i2130.showPausedTweens = !!i2131[26]
  return i2130
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2132 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2133 = data
  i2132.logBehaviour = i2133[0]
  i2132.nestedTweenFailureBehaviour = i2133[1]
  return i2132
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2134 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2135 = data
  i2134.showPanel = !!i2135[0]
  i2134.audioEnabled = !!i2135[1]
  i2134.physicsEnabled = !!i2135[2]
  i2134.physics2DEnabled = !!i2135[3]
  i2134.spriteEnabled = !!i2135[4]
  i2134.uiEnabled = !!i2135[5]
  i2134.textMeshProEnabled = !!i2135[6]
  i2134.tk2DEnabled = !!i2135[7]
  i2134.deAudioEnabled = !!i2135[8]
  i2134.deUnityExtendedEnabled = !!i2135[9]
  i2134.epoOutlineEnabled = !!i2135[10]
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2137 = data
  var i2139 = i2137[0]
  var i2138 = []
  for(var i = 0; i < i2139.length; i += 1) {
    i2138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2139[i + 0]) );
  }
  i2136.files = i2138
  i2136.componentToPrefabIds = i2137[1]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2143 = data
  i2142.path = i2143[0]
  request.r(i2143[1], i2143[2], 0, i2142, 'unityObject')
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2145 = data
  var i2147 = i2145[0]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 1) {
    i2146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2147[i + 0]) );
  }
  i2144.scriptsExecutionOrder = i2146
  var i2149 = i2145[1]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2149[i + 0]) );
  }
  i2144.sortingLayers = i2148
  var i2151 = i2145[2]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2151[i + 0]) );
  }
  i2144.cullingLayers = i2150
  i2144.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2145[3], i2144.timeSettings)
  i2144.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2145[4], i2144.physicsSettings)
  i2144.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2145[5], i2144.physics2DSettings)
  i2144.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2145[6], i2144.qualitySettings)
  i2144.enableRealtimeShadows = !!i2145[7]
  i2144.enableAutoInstancing = !!i2145[8]
  i2144.enableDynamicBatching = !!i2145[9]
  i2144.lightmapEncodingQuality = i2145[10]
  i2144.desiredColorSpace = i2145[11]
  var i2153 = i2145[12]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( i2153[i + 0] );
  }
  i2144.allTags = i2152
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2157 = data
  i2156.name = i2157[0]
  i2156.value = i2157[1]
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2161 = data
  i2160.id = i2161[0]
  i2160.name = i2161[1]
  i2160.value = i2161[2]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2165 = data
  i2164.id = i2165[0]
  i2164.name = i2165[1]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2167 = data
  i2166.fixedDeltaTime = i2167[0]
  i2166.maximumDeltaTime = i2167[1]
  i2166.timeScale = i2167[2]
  i2166.maximumParticleTimestep = i2167[3]
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2169 = data
  i2168.gravity = new pc.Vec3( i2169[0], i2169[1], i2169[2] )
  i2168.defaultSolverIterations = i2169[3]
  i2168.bounceThreshold = i2169[4]
  i2168.autoSyncTransforms = !!i2169[5]
  i2168.autoSimulation = !!i2169[6]
  var i2171 = i2169[7]
  var i2170 = []
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2171[i + 0]) );
  }
  i2168.collisionMatrix = i2170
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2175 = data
  i2174.enabled = !!i2175[0]
  i2174.layerId = i2175[1]
  i2174.otherLayerId = i2175[2]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2177 = data
  request.r(i2177[0], i2177[1], 0, i2176, 'material')
  i2176.gravity = new pc.Vec2( i2177[2], i2177[3] )
  i2176.positionIterations = i2177[4]
  i2176.velocityIterations = i2177[5]
  i2176.velocityThreshold = i2177[6]
  i2176.maxLinearCorrection = i2177[7]
  i2176.maxAngularCorrection = i2177[8]
  i2176.maxTranslationSpeed = i2177[9]
  i2176.maxRotationSpeed = i2177[10]
  i2176.baumgarteScale = i2177[11]
  i2176.baumgarteTOIScale = i2177[12]
  i2176.timeToSleep = i2177[13]
  i2176.linearSleepTolerance = i2177[14]
  i2176.angularSleepTolerance = i2177[15]
  i2176.defaultContactOffset = i2177[16]
  i2176.autoSimulation = !!i2177[17]
  i2176.queriesHitTriggers = !!i2177[18]
  i2176.queriesStartInColliders = !!i2177[19]
  i2176.callbacksOnDisable = !!i2177[20]
  i2176.reuseCollisionCallbacks = !!i2177[21]
  i2176.autoSyncTransforms = !!i2177[22]
  var i2179 = i2177[23]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2179[i + 0]) );
  }
  i2176.collisionMatrix = i2178
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2183 = data
  i2182.enabled = !!i2183[0]
  i2182.layerId = i2183[1]
  i2182.otherLayerId = i2183[2]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2185 = data
  var i2187 = i2185[0]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2187[i + 0]) );
  }
  i2184.qualityLevels = i2186
  var i2189 = i2185[1]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 1) {
    i2188.push( i2189[i + 0] );
  }
  i2184.names = i2188
  i2184.shadows = i2185[2]
  i2184.anisotropicFiltering = i2185[3]
  i2184.antiAliasing = i2185[4]
  i2184.lodBias = i2185[5]
  i2184.shadowCascades = i2185[6]
  i2184.shadowDistance = i2185[7]
  i2184.shadowmaskMode = i2185[8]
  i2184.shadowProjection = i2185[9]
  i2184.shadowResolution = i2185[10]
  i2184.softParticles = !!i2185[11]
  i2184.softVegetation = !!i2185[12]
  i2184.activeColorSpace = i2185[13]
  i2184.desiredColorSpace = i2185[14]
  i2184.masterTextureLimit = i2185[15]
  i2184.maxQueuedFrames = i2185[16]
  i2184.particleRaycastBudget = i2185[17]
  i2184.pixelLightCount = i2185[18]
  i2184.realtimeReflectionProbes = !!i2185[19]
  i2184.shadowCascade2Split = i2185[20]
  i2184.shadowCascade4Split = new pc.Vec3( i2185[21], i2185[22], i2185[23] )
  i2184.streamingMipmapsActive = !!i2185[24]
  i2184.vSyncCount = i2185[25]
  i2184.asyncUploadBufferSize = i2185[26]
  i2184.asyncUploadTimeSlice = i2185[27]
  i2184.billboardsFaceCameraPosition = !!i2185[28]
  i2184.shadowNearPlaneOffset = i2185[29]
  i2184.streamingMipmapsMemoryBudget = i2185[30]
  i2184.maximumLODLevel = i2185[31]
  i2184.streamingMipmapsAddAllCameras = !!i2185[32]
  i2184.streamingMipmapsMaxLevelReduction = i2185[33]
  i2184.streamingMipmapsRenderersPerFrame = i2185[34]
  i2184.resolutionScalingFixedDPIFactor = i2185[35]
  i2184.streamingMipmapsMaxFileIORequests = i2185[36]
  i2184.currentQualityLevel = i2185[37]
  return i2184
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[47],"48":[3],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[3],"72":[73],"74":[75],"76":[75],"9":[8],"77":[78],"79":[80],"81":[78],"82":[8],"83":[8],"11":[9],"20":[17,8],"84":[8],"10":[9],"85":[8],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"31":[8],"34":[8],"91":[8],"16":[17,8],"92":[8],"93":[8],"94":[8],"95":[8],"32":[17,8],"96":[8],"97":[6],"98":[6],"7":[6],"99":[6],"100":[3],"101":[3],"102":[103],"104":[3],"105":[106],"107":[8],"108":[17,8],"109":[73],"25":[17,8],"110":[111,73],"112":[73],"113":[73,114],"115":[50],"116":[58],"117":[106],"118":[119],"120":[8],"121":[73,8],"122":[8,17],"123":[8],"124":[17,8],"125":[73],"126":[17,8],"127":[8],"128":[78]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.UI.Image","UnityEngine.Sprite","DropZone","UnityEngine.BoxCollider2D","ClickItem","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","DG.Tweening.DOTweenAnimation","DraggableItem","UnityEngine.CanvasGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Mask","IQFill","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "04/15/2025 07:07:05";

Deserializers.lunaDaysRunning = "13.0";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "APG_V03_TrangHT_AnhPD";

Deserializers.lunaAppID = "29138";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1782";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4279";

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

Deserializers.buildID = "7d431934-9ef3-4596-ac1a-7eeaafdbdc7a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

