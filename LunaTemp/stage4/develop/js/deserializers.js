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
  request.r(i1925[1], i1925[2], 0, i1924, 'StartCard')
  request.r(i1925[3], i1925[4], 0, i1924, 'EndCard')
  i1924.countPlay = i1925[5]
  i1924.countPlayFinal = i1925[6]
  i1924.countPlayMax = i1925[7]
  i1924.timeDropFinal = i1925[8]
  i1924.colorBG = new pc.Color(i1925[9], i1925[10], i1925[11], i1925[12])
  request.r(i1925[13], i1925[14], 0, i1924, 'texture2D')
  request.r(i1925[15], i1925[16], 0, i1924, 'rawImageBG')
  request.r(i1925[17], i1925[18], 0, i1924, 'textProgess')
  request.r(i1925[19], i1925[20], 0, i1924, 'imgProgess')
  request.r(i1925[21], i1925[22], 0, i1924, 'timeText')
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

Deserializers["DraggableItem"] = function (request, data, root) {
  var i1938 = root || request.c( 'DraggableItem' )
  var i1939 = data
  i1938.idDrag = i1939[0]
  i1938.isProcess = !!i1939[1]
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1941 = data
  i1940.m_Alpha = i1941[0]
  i1940.m_Interactable = !!i1941[1]
  i1940.m_BlocksRaycasts = !!i1941[2]
  i1940.m_IgnoreParentGroups = !!i1941[3]
  i1940.enabled = !!i1941[4]
  return i1940
}

Deserializers["DropZone"] = function (request, data, root) {
  var i1942 = root || request.c( 'DropZone' )
  var i1943 = data
  i1942.idDrop = i1943[0]
  var i1945 = i1943[1]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 2) {
  request.r(i1945[i + 0], i1945[i + 1], 2, i1944, '')
  }
  i1942.steps = i1944
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1949 = data
  i1948.enabled = !!i1949[0]
  i1948.isTrigger = !!i1949[1]
  i1948.usedByEffector = !!i1949[2]
  i1948.density = i1949[3]
  i1948.offset = new pc.Vec2( i1949[4], i1949[5] )
  request.r(i1949[6], i1949[7], 0, i1948, 'material')
  i1948.usedByComposite = !!i1949[8]
  i1948.autoTiling = !!i1949[9]
  var i1951 = i1949[10]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
  var i1953 = i1951[i + 0]
  var i1952 = []
  for(var i = 0; i < i1953.length; i += 2) {
    i1952.push( new pc.Vec2( i1953[i + 0], i1953[i + 1] ) );
  }
    i1950.push( i1952 );
  }
  i1948.points = i1950
  return i1948
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1960 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1961 = data
  request.r(i1961[0], i1961[1], 0, i1960, 'skeletonDataAsset')
  request.r(i1961[2], i1961[3], 0, i1960, 'additiveMaterial')
  request.r(i1961[4], i1961[5], 0, i1960, 'multiplyMaterial')
  request.r(i1961[6], i1961[7], 0, i1960, 'screenMaterial')
  i1960.initialSkinName = i1961[8]
  i1960.initialFlipX = !!i1961[9]
  i1960.initialFlipY = !!i1961[10]
  i1960.startingAnimation = i1961[11]
  i1960.startingLoop = !!i1961[12]
  i1960.timeScale = i1961[13]
  i1960.freeze = !!i1961[14]
  i1960.layoutScaleMode = i1961[15]
  i1960.updateWhenInvisible = i1961[16]
  i1960.allowMultipleCanvasRenderers = !!i1961[17]
  var i1963 = i1961[18]
  var i1962 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1963.length; i += 2) {
  request.r(i1963[i + 0], i1963[i + 1], 1, i1962, '')
  }
  i1960.canvasRenderers = i1962
  i1960.enableSeparatorSlots = !!i1961[19]
  i1960.updateSeparatorPartLocation = !!i1961[20]
  i1960.updateSeparatorPartScale = !!i1961[21]
  i1960.disableMeshAssignmentOnOverride = !!i1961[22]
  i1960.referenceSize = new pc.Vec2( i1961[23], i1961[24] )
  i1960.referenceScale = i1961[25]
  i1960.rectTransformSize = new pc.Vec2( i1961[26], i1961[27] )
  i1960.editReferenceRect = !!i1961[28]
  var i1965 = i1961[29]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( i1965[i + 0] );
  }
  i1960.separatorSlotNames = i1964
  var i1967 = i1961[30]
  var i1966 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1967.length; i += 2) {
  request.r(i1967[i + 0], i1967[i + 1], 1, i1966, '')
  }
  i1960.separatorParts = i1966
  i1960.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1961[31], i1960.meshGenerator)
  i1960.updateTiming = i1961[32]
  i1960.unscaledTime = !!i1961[33]
  request.r(i1961[34], i1961[35], 0, i1960, 'm_Material')
  i1960.m_Maskable = !!i1961[36]
  i1960.m_Color = new pc.Color(i1961[37], i1961[38], i1961[39], i1961[40])
  i1960.m_RaycastTarget = !!i1961[41]
  i1960.m_RaycastPadding = new pc.Vec4( i1961[42], i1961[43], i1961[44], i1961[45] )
  return i1960
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1974 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1975 = data
  i1974.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1975[0], i1974.settings)
  return i1974
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1976 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1977 = data
  i1976.useClipping = !!i1977[0]
  i1976.zSpacing = i1977[1]
  i1976.pmaVertexColors = !!i1977[2]
  i1976.tintBlack = !!i1977[3]
  i1976.canvasGroupTintBlack = !!i1977[4]
  i1976.calculateTangents = !!i1977[5]
  i1976.addNormals = !!i1977[6]
  i1976.immutableTriangles = !!i1977[7]
  return i1976
}

Deserializers["ClickItem"] = function (request, data, root) {
  var i1978 = root || request.c( 'ClickItem' )
  var i1979 = data
  var i1981 = i1979[0]
  var i1980 = []
  for(var i = 0; i < i1981.length; i += 2) {
  request.r(i1981[i + 0], i1981[i + 1], 2, i1980, '')
  }
  i1978.steps = i1980
  i1978.currentStep = i1979[1]
  i1978.isProcess = !!i1979[2]
  return i1978
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1982 = root || request.c( 'UnityEngine.UI.Button' )
  var i1983 = data
  i1982.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1983[0], i1982.m_OnClick)
  i1982.m_Navigation = request.d('UnityEngine.UI.Navigation', i1983[1], i1982.m_Navigation)
  i1982.m_Transition = i1983[2]
  i1982.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1983[3], i1982.m_Colors)
  i1982.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1983[4], i1982.m_SpriteState)
  i1982.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1983[5], i1982.m_AnimationTriggers)
  i1982.m_Interactable = !!i1983[6]
  request.r(i1983[7], i1983[8], 0, i1982, 'm_TargetGraphic')
  return i1982
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1984 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1985 = data
  i1984.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1985[0], i1984.m_PersistentCalls)
  return i1984
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1986 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1987 = data
  var i1989 = i1987[0]
  var i1988 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.add(request.d('UnityEngine.Events.PersistentCall', i1989[i + 0]));
  }
  i1986.m_Calls = i1988
  return i1986
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1992 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1993 = data
  request.r(i1993[0], i1993[1], 0, i1992, 'm_Target')
  i1992.m_TargetAssemblyTypeName = i1993[2]
  i1992.m_MethodName = i1993[3]
  i1992.m_Mode = i1993[4]
  i1992.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1993[5], i1992.m_Arguments)
  i1992.m_CallState = i1993[6]
  return i1992
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1994 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1995 = data
  request.r(i1995[0], i1995[1], 0, i1994, 'm_ObjectArgument')
  i1994.m_ObjectArgumentAssemblyTypeName = i1995[2]
  i1994.m_IntArgument = i1995[3]
  i1994.m_FloatArgument = i1995[4]
  i1994.m_StringArgument = i1995[5]
  i1994.m_BoolArgument = !!i1995[6]
  return i1994
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1996 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1997 = data
  i1996.m_Mode = i1997[0]
  i1996.m_WrapAround = !!i1997[1]
  request.r(i1997[2], i1997[3], 0, i1996, 'm_SelectOnUp')
  request.r(i1997[4], i1997[5], 0, i1996, 'm_SelectOnDown')
  request.r(i1997[6], i1997[7], 0, i1996, 'm_SelectOnLeft')
  request.r(i1997[8], i1997[9], 0, i1996, 'm_SelectOnRight')
  return i1996
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1998 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1999 = data
  i1998.m_NormalColor = new pc.Color(i1999[0], i1999[1], i1999[2], i1999[3])
  i1998.m_HighlightedColor = new pc.Color(i1999[4], i1999[5], i1999[6], i1999[7])
  i1998.m_PressedColor = new pc.Color(i1999[8], i1999[9], i1999[10], i1999[11])
  i1998.m_SelectedColor = new pc.Color(i1999[12], i1999[13], i1999[14], i1999[15])
  i1998.m_DisabledColor = new pc.Color(i1999[16], i1999[17], i1999[18], i1999[19])
  i1998.m_ColorMultiplier = i1999[20]
  i1998.m_FadeDuration = i1999[21]
  return i1998
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2000 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2001 = data
  request.r(i2001[0], i2001[1], 0, i2000, 'm_HighlightedSprite')
  request.r(i2001[2], i2001[3], 0, i2000, 'm_PressedSprite')
  request.r(i2001[4], i2001[5], 0, i2000, 'm_SelectedSprite')
  request.r(i2001[6], i2001[7], 0, i2000, 'm_DisabledSprite')
  return i2000
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2002 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2003 = data
  i2002.m_NormalTrigger = i2003[0]
  i2002.m_HighlightedTrigger = i2003[1]
  i2002.m_PressedTrigger = i2003[2]
  i2002.m_SelectedTrigger = i2003[3]
  i2002.m_DisabledTrigger = i2003[4]
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2005 = data
  i2004.usedByComposite = !!i2005[0]
  i2004.autoTiling = !!i2005[1]
  i2004.size = new pc.Vec2( i2005[2], i2005[3] )
  i2004.edgeRadius = i2005[4]
  i2004.enabled = !!i2005[5]
  i2004.isTrigger = !!i2005[6]
  i2004.usedByEffector = !!i2005[7]
  i2004.density = i2005[8]
  i2004.offset = new pc.Vec2( i2005[9], i2005[10] )
  request.r(i2005[11], i2005[12], 0, i2004, 'material')
  return i2004
}

Deserializers["MixSkeletonSkin"] = function (request, data, root) {
  var i2006 = root || request.c( 'MixSkeletonSkin' )
  var i2007 = data
  request.r(i2007[0], i2007[1], 0, i2006, 'skeletonAnimation')
  var i2009 = i2007[2]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.push( i2009[i + 0] );
  }
  i2006.skinNames = i2008
  return i2006
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2010 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2011 = data
  i2010.m_hasFontAssetChanged = !!i2011[0]
  request.r(i2011[1], i2011[2], 0, i2010, 'm_baseMaterial')
  i2010.m_maskOffset = new pc.Vec4( i2011[3], i2011[4], i2011[5], i2011[6] )
  i2010.m_text = i2011[7]
  i2010.m_isRightToLeft = !!i2011[8]
  request.r(i2011[9], i2011[10], 0, i2010, 'm_fontAsset')
  request.r(i2011[11], i2011[12], 0, i2010, 'm_sharedMaterial')
  var i2013 = i2011[13]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 2) {
  request.r(i2013[i + 0], i2013[i + 1], 2, i2012, '')
  }
  i2010.m_fontSharedMaterials = i2012
  request.r(i2011[14], i2011[15], 0, i2010, 'm_fontMaterial')
  var i2015 = i2011[16]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 2) {
  request.r(i2015[i + 0], i2015[i + 1], 2, i2014, '')
  }
  i2010.m_fontMaterials = i2014
  i2010.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2011[17], i2011[18], i2011[19], i2011[20])
  i2010.m_fontColor = new pc.Color(i2011[21], i2011[22], i2011[23], i2011[24])
  i2010.m_enableVertexGradient = !!i2011[25]
  i2010.m_colorMode = i2011[26]
  i2010.m_fontColorGradient = request.d('TMPro.VertexGradient', i2011[27], i2010.m_fontColorGradient)
  request.r(i2011[28], i2011[29], 0, i2010, 'm_fontColorGradientPreset')
  request.r(i2011[30], i2011[31], 0, i2010, 'm_spriteAsset')
  i2010.m_tintAllSprites = !!i2011[32]
  request.r(i2011[33], i2011[34], 0, i2010, 'm_StyleSheet')
  i2010.m_TextStyleHashCode = i2011[35]
  i2010.m_overrideHtmlColors = !!i2011[36]
  i2010.m_faceColor = UnityEngine.Color32.ConstructColor(i2011[37], i2011[38], i2011[39], i2011[40])
  i2010.m_fontSize = i2011[41]
  i2010.m_fontSizeBase = i2011[42]
  i2010.m_fontWeight = i2011[43]
  i2010.m_enableAutoSizing = !!i2011[44]
  i2010.m_fontSizeMin = i2011[45]
  i2010.m_fontSizeMax = i2011[46]
  i2010.m_fontStyle = i2011[47]
  i2010.m_HorizontalAlignment = i2011[48]
  i2010.m_VerticalAlignment = i2011[49]
  i2010.m_textAlignment = i2011[50]
  i2010.m_characterSpacing = i2011[51]
  i2010.m_wordSpacing = i2011[52]
  i2010.m_lineSpacing = i2011[53]
  i2010.m_lineSpacingMax = i2011[54]
  i2010.m_paragraphSpacing = i2011[55]
  i2010.m_charWidthMaxAdj = i2011[56]
  i2010.m_enableWordWrapping = !!i2011[57]
  i2010.m_wordWrappingRatios = i2011[58]
  i2010.m_overflowMode = i2011[59]
  request.r(i2011[60], i2011[61], 0, i2010, 'm_linkedTextComponent')
  request.r(i2011[62], i2011[63], 0, i2010, 'parentLinkedComponent')
  i2010.m_enableKerning = !!i2011[64]
  i2010.m_enableExtraPadding = !!i2011[65]
  i2010.checkPaddingRequired = !!i2011[66]
  i2010.m_isRichText = !!i2011[67]
  i2010.m_parseCtrlCharacters = !!i2011[68]
  i2010.m_isOrthographic = !!i2011[69]
  i2010.m_isCullingEnabled = !!i2011[70]
  i2010.m_horizontalMapping = i2011[71]
  i2010.m_verticalMapping = i2011[72]
  i2010.m_uvLineOffset = i2011[73]
  i2010.m_geometrySortingOrder = i2011[74]
  i2010.m_IsTextObjectScaleStatic = !!i2011[75]
  i2010.m_VertexBufferAutoSizeReduction = !!i2011[76]
  i2010.m_useMaxVisibleDescender = !!i2011[77]
  i2010.m_pageToDisplay = i2011[78]
  i2010.m_margin = new pc.Vec4( i2011[79], i2011[80], i2011[81], i2011[82] )
  i2010.m_isUsingLegacyAnimationComponent = !!i2011[83]
  i2010.m_isVolumetricText = !!i2011[84]
  request.r(i2011[85], i2011[86], 0, i2010, 'm_Material')
  i2010.m_Maskable = !!i2011[87]
  i2010.m_Color = new pc.Color(i2011[88], i2011[89], i2011[90], i2011[91])
  i2010.m_RaycastTarget = !!i2011[92]
  i2010.m_RaycastPadding = new pc.Vec4( i2011[93], i2011[94], i2011[95], i2011[96] )
  return i2010
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2018 = root || request.c( 'TMPro.VertexGradient' )
  var i2019 = data
  i2018.topLeft = new pc.Color(i2019[0], i2019[1], i2019[2], i2019[3])
  i2018.topRight = new pc.Color(i2019[4], i2019[5], i2019[6], i2019[7])
  i2018.bottomLeft = new pc.Color(i2019[8], i2019[9], i2019[10], i2019[11])
  i2018.bottomRight = new pc.Color(i2019[12], i2019[13], i2019[14], i2019[15])
  return i2018
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2020 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2021 = data
  i2020.targetIsSelf = !!i2021[0]
  request.r(i2021[1], i2021[2], 0, i2020, 'targetGO')
  i2020.tweenTargetIsTargetGO = !!i2021[3]
  i2020.delay = i2021[4]
  i2020.duration = i2021[5]
  i2020.easeType = i2021[6]
  i2020.easeCurve = new pc.AnimationCurve( { keys_flow: i2021[7] } )
  i2020.loopType = i2021[8]
  i2020.loops = i2021[9]
  i2020.id = i2021[10]
  i2020.isRelative = !!i2021[11]
  i2020.isFrom = !!i2021[12]
  i2020.isIndependentUpdate = !!i2021[13]
  i2020.autoKill = !!i2021[14]
  i2020.autoGenerate = !!i2021[15]
  i2020.isActive = !!i2021[16]
  i2020.isValid = !!i2021[17]
  request.r(i2021[18], i2021[19], 0, i2020, 'target')
  i2020.animationType = i2021[20]
  i2020.targetType = i2021[21]
  i2020.forcedTargetType = i2021[22]
  i2020.autoPlay = !!i2021[23]
  i2020.useTargetAsV3 = !!i2021[24]
  i2020.endValueFloat = i2021[25]
  i2020.endValueV3 = new pc.Vec3( i2021[26], i2021[27], i2021[28] )
  i2020.endValueV2 = new pc.Vec2( i2021[29], i2021[30] )
  i2020.endValueColor = new pc.Color(i2021[31], i2021[32], i2021[33], i2021[34])
  i2020.endValueString = i2021[35]
  i2020.endValueRect = UnityEngine.Rect.MinMaxRect(i2021[36], i2021[37], i2021[38], i2021[39])
  request.r(i2021[40], i2021[41], 0, i2020, 'endValueTransform')
  i2020.optionalBool0 = !!i2021[42]
  i2020.optionalBool1 = !!i2021[43]
  i2020.optionalFloat0 = i2021[44]
  i2020.optionalInt0 = i2021[45]
  i2020.optionalRotationMode = i2021[46]
  i2020.optionalScrambleMode = i2021[47]
  i2020.optionalShakeRandomnessMode = i2021[48]
  i2020.optionalString = i2021[49]
  i2020.updateType = i2021[50]
  i2020.isSpeedBased = !!i2021[51]
  i2020.hasOnStart = !!i2021[52]
  i2020.hasOnPlay = !!i2021[53]
  i2020.hasOnUpdate = !!i2021[54]
  i2020.hasOnStepComplete = !!i2021[55]
  i2020.hasOnComplete = !!i2021[56]
  i2020.hasOnTweenCreated = !!i2021[57]
  i2020.hasOnRewind = !!i2021[58]
  i2020.onStart = request.d('UnityEngine.Events.UnityEvent', i2021[59], i2020.onStart)
  i2020.onPlay = request.d('UnityEngine.Events.UnityEvent', i2021[60], i2020.onPlay)
  i2020.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2021[61], i2020.onUpdate)
  i2020.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2021[62], i2020.onStepComplete)
  i2020.onComplete = request.d('UnityEngine.Events.UnityEvent', i2021[63], i2020.onComplete)
  i2020.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2021[64], i2020.onTweenCreated)
  i2020.onRewind = request.d('UnityEngine.Events.UnityEvent', i2021[65], i2020.onRewind)
  return i2020
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2022 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2023 = data
  i2022.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2023[0], i2022.m_PersistentCalls)
  return i2022
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2024 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2025 = data
  i2024.m_ShowMaskGraphic = !!i2025[0]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2027 = data
  i2026.ambientIntensity = i2027[0]
  i2026.reflectionIntensity = i2027[1]
  i2026.ambientMode = i2027[2]
  i2026.ambientLight = new pc.Color(i2027[3], i2027[4], i2027[5], i2027[6])
  i2026.ambientSkyColor = new pc.Color(i2027[7], i2027[8], i2027[9], i2027[10])
  i2026.ambientGroundColor = new pc.Color(i2027[11], i2027[12], i2027[13], i2027[14])
  i2026.ambientEquatorColor = new pc.Color(i2027[15], i2027[16], i2027[17], i2027[18])
  i2026.fogColor = new pc.Color(i2027[19], i2027[20], i2027[21], i2027[22])
  i2026.fogEndDistance = i2027[23]
  i2026.fogStartDistance = i2027[24]
  i2026.fogDensity = i2027[25]
  i2026.fog = !!i2027[26]
  request.r(i2027[27], i2027[28], 0, i2026, 'skybox')
  i2026.fogMode = i2027[29]
  var i2029 = i2027[30]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2029[i + 0]) );
  }
  i2026.lightmaps = i2028
  i2026.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2027[31], i2026.lightProbes)
  i2026.lightmapsMode = i2027[32]
  i2026.mixedBakeMode = i2027[33]
  i2026.environmentLightingMode = i2027[34]
  i2026.ambientProbe = new pc.SphericalHarmonicsL2(i2027[35])
  i2026.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2027[36])
  i2026.useReferenceAmbientProbe = !!i2027[37]
  request.r(i2027[38], i2027[39], 0, i2026, 'customReflection')
  request.r(i2027[40], i2027[41], 0, i2026, 'defaultReflection')
  i2026.defaultReflectionMode = i2027[42]
  i2026.defaultReflectionResolution = i2027[43]
  i2026.sunLightObjectId = i2027[44]
  i2026.pixelLightCount = i2027[45]
  i2026.defaultReflectionHDR = !!i2027[46]
  i2026.hasLightDataAsset = !!i2027[47]
  i2026.hasManualGenerate = !!i2027[48]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2033 = data
  request.r(i2033[0], i2033[1], 0, i2032, 'lightmapColor')
  request.r(i2033[2], i2033[3], 0, i2032, 'lightmapDirection')
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2034 = root || new UnityEngine.LightProbes()
  var i2035 = data
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2043 = data
  var i2045 = i2043[0]
  var i2044 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2045[i + 0]));
  }
  i2042.ShaderCompilationErrors = i2044
  i2042.name = i2043[1]
  i2042.guid = i2043[2]
  var i2047 = i2043[3]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.push( i2047[i + 0] );
  }
  i2042.shaderDefinedKeywords = i2046
  var i2049 = i2043[4]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2049[i + 0]) );
  }
  i2042.passes = i2048
  var i2051 = i2043[5]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2051[i + 0]) );
  }
  i2042.usePasses = i2050
  var i2053 = i2043[6]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2053[i + 0]) );
  }
  i2042.defaultParameterValues = i2052
  request.r(i2043[7], i2043[8], 0, i2042, 'unityFallbackShader')
  i2042.readDepth = !!i2043[9]
  i2042.isCreatedByShaderGraph = !!i2043[10]
  i2042.usedBatchUniforms = i2043[11]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2057 = data
  i2056.shaderName = i2057[0]
  i2056.errorMessage = i2057[1]
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2060 = root || new pc.UnityShaderPass()
  var i2061 = data
  i2060.id = i2061[0]
  i2060.subShaderIndex = i2061[1]
  i2060.name = i2061[2]
  i2060.passType = i2061[3]
  i2060.grabPassTextureName = i2061[4]
  i2060.usePass = !!i2061[5]
  i2060.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2061[6], i2060.zTest)
  i2060.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2061[7], i2060.zWrite)
  i2060.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2061[8], i2060.culling)
  i2060.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2061[9], i2060.blending)
  i2060.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2061[10], i2060.alphaBlending)
  i2060.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2061[11], i2060.colorWriteMask)
  i2060.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2061[12], i2060.offsetUnits)
  i2060.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2061[13], i2060.offsetFactor)
  i2060.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2061[14], i2060.stencilRef)
  i2060.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2061[15], i2060.stencilReadMask)
  i2060.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2061[16], i2060.stencilWriteMask)
  i2060.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2061[17], i2060.stencilOp)
  i2060.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2061[18], i2060.stencilOpFront)
  i2060.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2061[19], i2060.stencilOpBack)
  var i2063 = i2061[20]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2063[i + 0]) );
  }
  i2060.tags = i2062
  var i2065 = i2061[21]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.push( i2065[i + 0] );
  }
  i2060.passDefinedKeywords = i2064
  var i2067 = i2061[22]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2067[i + 0]) );
  }
  i2060.passDefinedKeywordGroups = i2066
  var i2069 = i2061[23]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2069[i + 0]) );
  }
  i2060.variants = i2068
  var i2071 = i2061[24]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2071[i + 0]) );
  }
  i2060.excludedVariants = i2070
  i2060.hasDepthReader = !!i2061[25]
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2073 = data
  i2072.val = i2073[0]
  i2072.name = i2073[1]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2075 = data
  i2074.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[0], i2074.src)
  i2074.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[1], i2074.dst)
  i2074.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2075[2], i2074.op)
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2077 = data
  i2076.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2077[0], i2076.pass)
  i2076.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2077[1], i2076.fail)
  i2076.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2077[2], i2076.zFail)
  i2076.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2077[3], i2076.comp)
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2081 = data
  i2080.name = i2081[0]
  i2080.value = i2081[1]
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2085 = data
  var i2087 = i2085[0]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( i2087[i + 0] );
  }
  i2084.keywords = i2086
  i2084.hasDiscard = !!i2085[1]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2091 = data
  i2090.passId = i2091[0]
  i2090.subShaderIndex = i2091[1]
  var i2093 = i2091[2]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.push( i2093[i + 0] );
  }
  i2090.keywords = i2092
  i2090.vertexProgram = i2091[3]
  i2090.fragmentProgram = i2091[4]
  i2090.compiledForWebGL2 = !!i2091[5]
  i2090.readDepth = !!i2091[6]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2097 = data
  request.r(i2097[0], i2097[1], 0, i2096, 'shader')
  i2096.pass = i2097[2]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2101 = data
  i2100.name = i2101[0]
  i2100.type = i2101[1]
  i2100.value = new pc.Vec4( i2101[2], i2101[3], i2101[4], i2101[5] )
  i2100.textureValue = i2101[6]
  i2100.shaderPropertyFlag = i2101[7]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2103 = data
  i2102.name = i2103[0]
  request.r(i2103[1], i2103[2], 0, i2102, 'texture')
  i2102.aabb = i2103[3]
  i2102.vertices = i2103[4]
  i2102.triangles = i2103[5]
  i2102.textureRect = UnityEngine.Rect.MinMaxRect(i2103[6], i2103[7], i2103[8], i2103[9])
  i2102.packedRect = UnityEngine.Rect.MinMaxRect(i2103[10], i2103[11], i2103[12], i2103[13])
  i2102.border = new pc.Vec4( i2103[14], i2103[15], i2103[16], i2103[17] )
  i2102.transparency = i2103[18]
  i2102.bounds = i2103[19]
  i2102.pixelsPerUnit = i2103[20]
  i2102.textureWidth = i2103[21]
  i2102.textureHeight = i2103[22]
  i2102.nativeSize = new pc.Vec2( i2103[23], i2103[24] )
  i2102.pivot = new pc.Vec2( i2103[25], i2103[26] )
  i2102.textureRectOffset = new pc.Vec2( i2103[27], i2103[28] )
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2105 = data
  i2104.name = i2105[0]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2107 = data
  i2106.name = i2107[0]
  i2106.ascent = i2107[1]
  i2106.originalLineHeight = i2107[2]
  i2106.fontSize = i2107[3]
  var i2109 = i2107[4]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2109[i + 0]) );
  }
  i2106.characterInfo = i2108
  request.r(i2107[5], i2107[6], 0, i2106, 'texture')
  i2106.originalFontSize = i2107[7]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2113 = data
  i2112.index = i2113[0]
  i2112.advance = i2113[1]
  i2112.bearing = i2113[2]
  i2112.glyphWidth = i2113[3]
  i2112.glyphHeight = i2113[4]
  i2112.minX = i2113[5]
  i2112.maxX = i2113[6]
  i2112.minY = i2113[7]
  i2112.maxY = i2113[8]
  i2112.uvBottomLeftX = i2113[9]
  i2112.uvBottomLeftY = i2113[10]
  i2112.uvBottomRightX = i2113[11]
  i2112.uvBottomRightY = i2113[12]
  i2112.uvTopLeftX = i2113[13]
  i2112.uvTopLeftY = i2113[14]
  i2112.uvTopRightX = i2113[15]
  i2112.uvTopRightY = i2113[16]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2115 = data
  i2114.name = i2115[0]
  i2114.bytes64 = i2115[1]
  i2114.data = i2115[2]
  return i2114
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2116 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2117 = data
  var i2119 = i2117[0]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 2) {
  request.r(i2119[i + 0], i2119[i + 1], 2, i2118, '')
  }
  i2116.atlasAssets = i2118
  i2116.scale = i2117[1]
  request.r(i2117[2], i2117[3], 0, i2116, 'skeletonJSON')
  i2116.isUpgradingBlendModeMaterials = !!i2117[4]
  i2116.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2117[5], i2116.blendModeMaterials)
  var i2121 = i2117[6]
  var i2120 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2121.length; i += 2) {
  request.r(i2121[i + 0], i2121[i + 1], 1, i2120, '')
  }
  i2116.skeletonDataModifiers = i2120
  var i2123 = i2117[7]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 1) {
    i2122.push( i2123[i + 0] );
  }
  i2116.fromAnimation = i2122
  var i2125 = i2117[8]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( i2125[i + 0] );
  }
  i2116.toAnimation = i2124
  i2116.duration = i2117[9]
  i2116.defaultMix = i2117[10]
  request.r(i2117[11], i2117[12], 0, i2116, 'controller')
  return i2116
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2128 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2129 = data
  i2128.applyAdditiveMaterial = !!i2129[0]
  var i2131 = i2129[1]
  var i2130 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2131[i + 0]));
  }
  i2128.additiveMaterials = i2130
  var i2133 = i2129[2]
  var i2132 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2133[i + 0]));
  }
  i2128.multiplyMaterials = i2132
  var i2135 = i2129[3]
  var i2134 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2135[i + 0]));
  }
  i2128.screenMaterials = i2134
  i2128.requiresBlendModeMaterials = !!i2129[4]
  return i2128
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2138 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2139 = data
  i2138.pageName = i2139[0]
  request.r(i2139[1], i2139[2], 0, i2138, 'material')
  return i2138
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2142 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2143 = data
  request.r(i2143[0], i2143[1], 0, i2142, 'atlasFile')
  var i2145 = i2143[2]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 2) {
  request.r(i2145[i + 0], i2145[i + 1], 2, i2144, '')
  }
  i2142.materials = i2144
  i2142.textureLoadingMode = i2143[3]
  request.r(i2143[4], i2143[5], 0, i2142, 'onDemandTextureLoader')
  return i2142
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2146 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2147 = data
  i2146.hashCode = i2147[0]
  request.r(i2147[1], i2147[2], 0, i2146, 'material')
  i2146.materialHashCode = i2147[3]
  request.r(i2147[4], i2147[5], 0, i2146, 'atlas')
  i2146.normalStyle = i2147[6]
  i2146.normalSpacingOffset = i2147[7]
  i2146.boldStyle = i2147[8]
  i2146.boldSpacing = i2147[9]
  i2146.italicStyle = i2147[10]
  i2146.tabSize = i2147[11]
  i2146.m_Version = i2147[12]
  i2146.m_SourceFontFileGUID = i2147[13]
  request.r(i2147[14], i2147[15], 0, i2146, 'm_SourceFontFile_EditorRef')
  request.r(i2147[16], i2147[17], 0, i2146, 'm_SourceFontFile')
  i2146.m_AtlasPopulationMode = i2147[18]
  i2146.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2147[19], i2146.m_FaceInfo)
  var i2149 = i2147[20]
  var i2148 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.add(request.d('UnityEngine.TextCore.Glyph', i2149[i + 0]));
  }
  i2146.m_GlyphTable = i2148
  var i2151 = i2147[21]
  var i2150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.add(request.d('TMPro.TMP_Character', i2151[i + 0]));
  }
  i2146.m_CharacterTable = i2150
  var i2153 = i2147[22]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 2) {
  request.r(i2153[i + 0], i2153[i + 1], 2, i2152, '')
  }
  i2146.m_AtlasTextures = i2152
  i2146.m_AtlasTextureIndex = i2147[23]
  i2146.m_IsMultiAtlasTexturesEnabled = !!i2147[24]
  i2146.m_ClearDynamicDataOnBuild = !!i2147[25]
  var i2155 = i2147[26]
  var i2154 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.add(request.d('UnityEngine.TextCore.GlyphRect', i2155[i + 0]));
  }
  i2146.m_UsedGlyphRects = i2154
  var i2157 = i2147[27]
  var i2156 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.add(request.d('UnityEngine.TextCore.GlyphRect', i2157[i + 0]));
  }
  i2146.m_FreeGlyphRects = i2156
  i2146.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2147[28], i2146.m_fontInfo)
  i2146.m_AtlasWidth = i2147[29]
  i2146.m_AtlasHeight = i2147[30]
  i2146.m_AtlasPadding = i2147[31]
  i2146.m_AtlasRenderMode = i2147[32]
  var i2159 = i2147[33]
  var i2158 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.add(request.d('TMPro.TMP_Glyph', i2159[i + 0]));
  }
  i2146.m_glyphInfoList = i2158
  i2146.m_KerningTable = request.d('TMPro.KerningTable', i2147[34], i2146.m_KerningTable)
  i2146.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2147[35], i2146.m_FontFeatureTable)
  var i2161 = i2147[36]
  var i2160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2161.length; i += 2) {
  request.r(i2161[i + 0], i2161[i + 1], 1, i2160, '')
  }
  i2146.fallbackFontAssets = i2160
  var i2163 = i2147[37]
  var i2162 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2163.length; i += 2) {
  request.r(i2163[i + 0], i2163[i + 1], 1, i2162, '')
  }
  i2146.m_FallbackFontAssetTable = i2162
  i2146.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2147[38], i2146.m_CreationSettings)
  var i2165 = i2147[39]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.push( request.d('TMPro.TMP_FontWeightPair', i2165[i + 0]) );
  }
  i2146.m_FontWeightTable = i2164
  var i2167 = i2147[40]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.push( request.d('TMPro.TMP_FontWeightPair', i2167[i + 0]) );
  }
  i2146.fontWeights = i2166
  return i2146
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2168 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2169 = data
  i2168.m_FaceIndex = i2169[0]
  i2168.m_FamilyName = i2169[1]
  i2168.m_StyleName = i2169[2]
  i2168.m_PointSize = i2169[3]
  i2168.m_Scale = i2169[4]
  i2168.m_UnitsPerEM = i2169[5]
  i2168.m_LineHeight = i2169[6]
  i2168.m_AscentLine = i2169[7]
  i2168.m_CapLine = i2169[8]
  i2168.m_MeanLine = i2169[9]
  i2168.m_Baseline = i2169[10]
  i2168.m_DescentLine = i2169[11]
  i2168.m_SuperscriptOffset = i2169[12]
  i2168.m_SuperscriptSize = i2169[13]
  i2168.m_SubscriptOffset = i2169[14]
  i2168.m_SubscriptSize = i2169[15]
  i2168.m_UnderlineOffset = i2169[16]
  i2168.m_UnderlineThickness = i2169[17]
  i2168.m_StrikethroughOffset = i2169[18]
  i2168.m_StrikethroughThickness = i2169[19]
  i2168.m_TabWidth = i2169[20]
  return i2168
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2173 = data
  i2172.m_Index = i2173[0]
  i2172.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2173[1], i2172.m_Metrics)
  i2172.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2173[2], i2172.m_GlyphRect)
  i2172.m_Scale = i2173[3]
  i2172.m_AtlasIndex = i2173[4]
  i2172.m_ClassDefinitionType = i2173[5]
  return i2172
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2175 = data
  i2174.m_Width = i2175[0]
  i2174.m_Height = i2175[1]
  i2174.m_HorizontalBearingX = i2175[2]
  i2174.m_HorizontalBearingY = i2175[3]
  i2174.m_HorizontalAdvance = i2175[4]
  return i2174
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2176 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2177 = data
  i2176.m_X = i2177[0]
  i2176.m_Y = i2177[1]
  i2176.m_Width = i2177[2]
  i2176.m_Height = i2177[3]
  return i2176
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2180 = root || request.c( 'TMPro.TMP_Character' )
  var i2181 = data
  i2180.m_ElementType = i2181[0]
  i2180.m_Unicode = i2181[1]
  i2180.m_GlyphIndex = i2181[2]
  i2180.m_Scale = i2181[3]
  return i2180
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2186 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2187 = data
  i2186.Name = i2187[0]
  i2186.PointSize = i2187[1]
  i2186.Scale = i2187[2]
  i2186.CharacterCount = i2187[3]
  i2186.LineHeight = i2187[4]
  i2186.Baseline = i2187[5]
  i2186.Ascender = i2187[6]
  i2186.CapHeight = i2187[7]
  i2186.Descender = i2187[8]
  i2186.CenterLine = i2187[9]
  i2186.SuperscriptOffset = i2187[10]
  i2186.SubscriptOffset = i2187[11]
  i2186.SubSize = i2187[12]
  i2186.Underline = i2187[13]
  i2186.UnderlineThickness = i2187[14]
  i2186.strikethrough = i2187[15]
  i2186.strikethroughThickness = i2187[16]
  i2186.TabWidth = i2187[17]
  i2186.Padding = i2187[18]
  i2186.AtlasWidth = i2187[19]
  i2186.AtlasHeight = i2187[20]
  return i2186
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2190 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2191 = data
  i2190.id = i2191[0]
  i2190.x = i2191[1]
  i2190.y = i2191[2]
  i2190.width = i2191[3]
  i2190.height = i2191[4]
  i2190.xOffset = i2191[5]
  i2190.yOffset = i2191[6]
  i2190.xAdvance = i2191[7]
  i2190.scale = i2191[8]
  return i2190
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2192 = root || request.c( 'TMPro.KerningTable' )
  var i2193 = data
  var i2195 = i2193[0]
  var i2194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2195.length; i += 1) {
    i2194.add(request.d('TMPro.KerningPair', i2195[i + 0]));
  }
  i2192.kerningPairs = i2194
  return i2192
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2198 = root || request.c( 'TMPro.KerningPair' )
  var i2199 = data
  i2198.xOffset = i2199[0]
  i2198.m_FirstGlyph = i2199[1]
  i2198.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2199[2], i2198.m_FirstGlyphAdjustments)
  i2198.m_SecondGlyph = i2199[3]
  i2198.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2199[4], i2198.m_SecondGlyphAdjustments)
  i2198.m_IgnoreSpacingAdjustments = !!i2199[5]
  return i2198
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2200 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2201 = data
  var i2203 = i2201[0]
  var i2202 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2203[i + 0]));
  }
  i2200.m_GlyphPairAdjustmentRecords = i2202
  return i2200
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2206 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2207 = data
  i2206.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2207[0], i2206.m_FirstAdjustmentRecord)
  i2206.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2207[1], i2206.m_SecondAdjustmentRecord)
  i2206.m_FeatureLookupFlags = i2207[2]
  return i2206
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2210 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2211 = data
  i2210.sourceFontFileName = i2211[0]
  i2210.sourceFontFileGUID = i2211[1]
  i2210.pointSizeSamplingMode = i2211[2]
  i2210.pointSize = i2211[3]
  i2210.padding = i2211[4]
  i2210.packingMode = i2211[5]
  i2210.atlasWidth = i2211[6]
  i2210.atlasHeight = i2211[7]
  i2210.characterSetSelectionMode = i2211[8]
  i2210.characterSequence = i2211[9]
  i2210.referencedFontAssetGUID = i2211[10]
  i2210.referencedTextAssetGUID = i2211[11]
  i2210.fontStyle = i2211[12]
  i2210.fontStyleModifier = i2211[13]
  i2210.renderMode = i2211[14]
  i2210.includeFontFeatures = !!i2211[15]
  return i2210
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2214 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2215 = data
  request.r(i2215[0], i2215[1], 0, i2214, 'regularTypeface')
  request.r(i2215[2], i2215[3], 0, i2214, 'italicTypeface')
  return i2214
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2216 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2217 = data
  i2216.useSafeMode = !!i2217[0]
  i2216.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2217[1], i2216.safeModeOptions)
  i2216.timeScale = i2217[2]
  i2216.unscaledTimeScale = i2217[3]
  i2216.useSmoothDeltaTime = !!i2217[4]
  i2216.maxSmoothUnscaledTime = i2217[5]
  i2216.rewindCallbackMode = i2217[6]
  i2216.showUnityEditorReport = !!i2217[7]
  i2216.logBehaviour = i2217[8]
  i2216.drawGizmos = !!i2217[9]
  i2216.defaultRecyclable = !!i2217[10]
  i2216.defaultAutoPlay = i2217[11]
  i2216.defaultUpdateType = i2217[12]
  i2216.defaultTimeScaleIndependent = !!i2217[13]
  i2216.defaultEaseType = i2217[14]
  i2216.defaultEaseOvershootOrAmplitude = i2217[15]
  i2216.defaultEasePeriod = i2217[16]
  i2216.defaultAutoKill = !!i2217[17]
  i2216.defaultLoopType = i2217[18]
  i2216.debugMode = !!i2217[19]
  i2216.debugStoreTargetId = !!i2217[20]
  i2216.showPreviewPanel = !!i2217[21]
  i2216.storeSettingsLocation = i2217[22]
  i2216.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2217[23], i2216.modules)
  i2216.createASMDEF = !!i2217[24]
  i2216.showPlayingTweens = !!i2217[25]
  i2216.showPausedTweens = !!i2217[26]
  return i2216
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2218 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2219 = data
  i2218.logBehaviour = i2219[0]
  i2218.nestedTweenFailureBehaviour = i2219[1]
  return i2218
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2220 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2221 = data
  i2220.showPanel = !!i2221[0]
  i2220.audioEnabled = !!i2221[1]
  i2220.physicsEnabled = !!i2221[2]
  i2220.physics2DEnabled = !!i2221[3]
  i2220.spriteEnabled = !!i2221[4]
  i2220.uiEnabled = !!i2221[5]
  i2220.textMeshProEnabled = !!i2221[6]
  i2220.tk2DEnabled = !!i2221[7]
  i2220.deAudioEnabled = !!i2221[8]
  i2220.deUnityExtendedEnabled = !!i2221[9]
  i2220.epoOutlineEnabled = !!i2221[10]
  return i2220
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2222 = root || request.c( 'TMPro.TMP_Settings' )
  var i2223 = data
  i2222.m_enableWordWrapping = !!i2223[0]
  i2222.m_enableKerning = !!i2223[1]
  i2222.m_enableExtraPadding = !!i2223[2]
  i2222.m_enableTintAllSprites = !!i2223[3]
  i2222.m_enableParseEscapeCharacters = !!i2223[4]
  i2222.m_EnableRaycastTarget = !!i2223[5]
  i2222.m_GetFontFeaturesAtRuntime = !!i2223[6]
  i2222.m_missingGlyphCharacter = i2223[7]
  i2222.m_warningsDisabled = !!i2223[8]
  request.r(i2223[9], i2223[10], 0, i2222, 'm_defaultFontAsset')
  i2222.m_defaultFontAssetPath = i2223[11]
  i2222.m_defaultFontSize = i2223[12]
  i2222.m_defaultAutoSizeMinRatio = i2223[13]
  i2222.m_defaultAutoSizeMaxRatio = i2223[14]
  i2222.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2223[15], i2223[16] )
  i2222.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2223[17], i2223[18] )
  i2222.m_autoSizeTextContainer = !!i2223[19]
  i2222.m_IsTextObjectScaleStatic = !!i2223[20]
  var i2225 = i2223[21]
  var i2224 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2225.length; i += 2) {
  request.r(i2225[i + 0], i2225[i + 1], 1, i2224, '')
  }
  i2222.m_fallbackFontAssets = i2224
  i2222.m_matchMaterialPreset = !!i2223[22]
  request.r(i2223[23], i2223[24], 0, i2222, 'm_defaultSpriteAsset')
  i2222.m_defaultSpriteAssetPath = i2223[25]
  i2222.m_enableEmojiSupport = !!i2223[26]
  i2222.m_MissingCharacterSpriteUnicode = i2223[27]
  i2222.m_defaultColorGradientPresetsPath = i2223[28]
  request.r(i2223[29], i2223[30], 0, i2222, 'm_defaultStyleSheet')
  i2222.m_StyleSheetsResourcePath = i2223[31]
  request.r(i2223[32], i2223[33], 0, i2222, 'm_leadingCharacters')
  request.r(i2223[34], i2223[35], 0, i2222, 'm_followingCharacters')
  i2222.m_UseModernHangulLineBreakingRules = !!i2223[36]
  return i2222
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2226 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2227 = data
  i2226.hashCode = i2227[0]
  request.r(i2227[1], i2227[2], 0, i2226, 'material')
  i2226.materialHashCode = i2227[3]
  request.r(i2227[4], i2227[5], 0, i2226, 'spriteSheet')
  var i2229 = i2227[6]
  var i2228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.add(request.d('TMPro.TMP_Sprite', i2229[i + 0]));
  }
  i2226.spriteInfoList = i2228
  var i2231 = i2227[7]
  var i2230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2231.length; i += 2) {
  request.r(i2231[i + 0], i2231[i + 1], 1, i2230, '')
  }
  i2226.fallbackSpriteAssets = i2230
  i2226.m_Version = i2227[8]
  i2226.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2227[9], i2226.m_FaceInfo)
  var i2233 = i2227[10]
  var i2232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2233.length; i += 1) {
    i2232.add(request.d('TMPro.TMP_SpriteCharacter', i2233[i + 0]));
  }
  i2226.m_SpriteCharacterTable = i2232
  var i2235 = i2227[11]
  var i2234 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2235.length; i += 1) {
    i2234.add(request.d('TMPro.TMP_SpriteGlyph', i2235[i + 0]));
  }
  i2226.m_SpriteGlyphTable = i2234
  return i2226
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2238 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2239 = data
  i2238.name = i2239[0]
  i2238.hashCode = i2239[1]
  i2238.unicode = i2239[2]
  i2238.pivot = new pc.Vec2( i2239[3], i2239[4] )
  request.r(i2239[5], i2239[6], 0, i2238, 'sprite')
  i2238.id = i2239[7]
  i2238.x = i2239[8]
  i2238.y = i2239[9]
  i2238.width = i2239[10]
  i2238.height = i2239[11]
  i2238.xOffset = i2239[12]
  i2238.yOffset = i2239[13]
  i2238.xAdvance = i2239[14]
  i2238.scale = i2239[15]
  return i2238
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2244 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2245 = data
  i2244.m_Name = i2245[0]
  i2244.m_HashCode = i2245[1]
  i2244.m_ElementType = i2245[2]
  i2244.m_Unicode = i2245[3]
  i2244.m_GlyphIndex = i2245[4]
  i2244.m_Scale = i2245[5]
  return i2244
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2248 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2249 = data
  request.r(i2249[0], i2249[1], 0, i2248, 'sprite')
  i2248.m_Index = i2249[2]
  i2248.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2249[3], i2248.m_Metrics)
  i2248.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2249[4], i2248.m_GlyphRect)
  i2248.m_Scale = i2249[5]
  i2248.m_AtlasIndex = i2249[6]
  i2248.m_ClassDefinitionType = i2249[7]
  return i2248
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2250 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2251 = data
  var i2253 = i2251[0]
  var i2252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2253.length; i += 1) {
    i2252.add(request.d('TMPro.TMP_Style', i2253[i + 0]));
  }
  i2250.m_StyleList = i2252
  return i2250
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2256 = root || request.c( 'TMPro.TMP_Style' )
  var i2257 = data
  i2256.m_Name = i2257[0]
  i2256.m_HashCode = i2257[1]
  i2256.m_OpeningDefinition = i2257[2]
  i2256.m_ClosingDefinition = i2257[3]
  i2256.m_OpeningTagArray = i2257[4]
  i2256.m_ClosingTagArray = i2257[5]
  i2256.m_OpeningTagUnicodeArray = i2257[6]
  i2256.m_ClosingTagUnicodeArray = i2257[7]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2259 = data
  var i2261 = i2259[0]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2261[i + 0]) );
  }
  i2258.files = i2260
  i2258.componentToPrefabIds = i2259[1]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2265 = data
  i2264.path = i2265[0]
  request.r(i2265[1], i2265[2], 0, i2264, 'unityObject')
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2267 = data
  var i2269 = i2267[0]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 1) {
    i2268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2269[i + 0]) );
  }
  i2266.scriptsExecutionOrder = i2268
  var i2271 = i2267[1]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2271[i + 0]) );
  }
  i2266.sortingLayers = i2270
  var i2273 = i2267[2]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2273[i + 0]) );
  }
  i2266.cullingLayers = i2272
  i2266.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2267[3], i2266.timeSettings)
  i2266.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2267[4], i2266.physicsSettings)
  i2266.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2267[5], i2266.physics2DSettings)
  i2266.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2267[6], i2266.qualitySettings)
  i2266.enableRealtimeShadows = !!i2267[7]
  i2266.enableAutoInstancing = !!i2267[8]
  i2266.enableDynamicBatching = !!i2267[9]
  i2266.lightmapEncodingQuality = i2267[10]
  i2266.desiredColorSpace = i2267[11]
  var i2275 = i2267[12]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.push( i2275[i + 0] );
  }
  i2266.allTags = i2274
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2279 = data
  i2278.name = i2279[0]
  i2278.value = i2279[1]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2283 = data
  i2282.id = i2283[0]
  i2282.name = i2283[1]
  i2282.value = i2283[2]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2287 = data
  i2286.id = i2287[0]
  i2286.name = i2287[1]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2289 = data
  i2288.fixedDeltaTime = i2289[0]
  i2288.maximumDeltaTime = i2289[1]
  i2288.timeScale = i2289[2]
  i2288.maximumParticleTimestep = i2289[3]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2291 = data
  i2290.gravity = new pc.Vec3( i2291[0], i2291[1], i2291[2] )
  i2290.defaultSolverIterations = i2291[3]
  i2290.bounceThreshold = i2291[4]
  i2290.autoSyncTransforms = !!i2291[5]
  i2290.autoSimulation = !!i2291[6]
  var i2293 = i2291[7]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2293[i + 0]) );
  }
  i2290.collisionMatrix = i2292
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2297 = data
  i2296.enabled = !!i2297[0]
  i2296.layerId = i2297[1]
  i2296.otherLayerId = i2297[2]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2299 = data
  request.r(i2299[0], i2299[1], 0, i2298, 'material')
  i2298.gravity = new pc.Vec2( i2299[2], i2299[3] )
  i2298.positionIterations = i2299[4]
  i2298.velocityIterations = i2299[5]
  i2298.velocityThreshold = i2299[6]
  i2298.maxLinearCorrection = i2299[7]
  i2298.maxAngularCorrection = i2299[8]
  i2298.maxTranslationSpeed = i2299[9]
  i2298.maxRotationSpeed = i2299[10]
  i2298.baumgarteScale = i2299[11]
  i2298.baumgarteTOIScale = i2299[12]
  i2298.timeToSleep = i2299[13]
  i2298.linearSleepTolerance = i2299[14]
  i2298.angularSleepTolerance = i2299[15]
  i2298.defaultContactOffset = i2299[16]
  i2298.autoSimulation = !!i2299[17]
  i2298.queriesHitTriggers = !!i2299[18]
  i2298.queriesStartInColliders = !!i2299[19]
  i2298.callbacksOnDisable = !!i2299[20]
  i2298.reuseCollisionCallbacks = !!i2299[21]
  i2298.autoSyncTransforms = !!i2299[22]
  var i2301 = i2299[23]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2301[i + 0]) );
  }
  i2298.collisionMatrix = i2300
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2305 = data
  i2304.enabled = !!i2305[0]
  i2304.layerId = i2305[1]
  i2304.otherLayerId = i2305[2]
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2307 = data
  var i2309 = i2307[0]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2309[i + 0]) );
  }
  i2306.qualityLevels = i2308
  var i2311 = i2307[1]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( i2311[i + 0] );
  }
  i2306.names = i2310
  i2306.shadows = i2307[2]
  i2306.anisotropicFiltering = i2307[3]
  i2306.antiAliasing = i2307[4]
  i2306.lodBias = i2307[5]
  i2306.shadowCascades = i2307[6]
  i2306.shadowDistance = i2307[7]
  i2306.shadowmaskMode = i2307[8]
  i2306.shadowProjection = i2307[9]
  i2306.shadowResolution = i2307[10]
  i2306.softParticles = !!i2307[11]
  i2306.softVegetation = !!i2307[12]
  i2306.activeColorSpace = i2307[13]
  i2306.desiredColorSpace = i2307[14]
  i2306.masterTextureLimit = i2307[15]
  i2306.maxQueuedFrames = i2307[16]
  i2306.particleRaycastBudget = i2307[17]
  i2306.pixelLightCount = i2307[18]
  i2306.realtimeReflectionProbes = !!i2307[19]
  i2306.shadowCascade2Split = i2307[20]
  i2306.shadowCascade4Split = new pc.Vec3( i2307[21], i2307[22], i2307[23] )
  i2306.streamingMipmapsActive = !!i2307[24]
  i2306.vSyncCount = i2307[25]
  i2306.asyncUploadBufferSize = i2307[26]
  i2306.asyncUploadTimeSlice = i2307[27]
  i2306.billboardsFaceCameraPosition = !!i2307[28]
  i2306.shadowNearPlaneOffset = i2307[29]
  i2306.streamingMipmapsMemoryBudget = i2307[30]
  i2306.maximumLODLevel = i2307[31]
  i2306.streamingMipmapsAddAllCameras = !!i2307[32]
  i2306.streamingMipmapsMaxLevelReduction = i2307[33]
  i2306.streamingMipmapsRenderersPerFrame = i2307[34]
  i2306.resolutionScalingFixedDPIFactor = i2307[35]
  i2306.streamingMipmapsMaxFileIORequests = i2307[36]
  i2306.currentQualityLevel = i2307[37]
  return i2306
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2314 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2315 = data
  i2314.xPlacement = i2315[0]
  i2314.yPlacement = i2315[1]
  i2314.xAdvance = i2315[2]
  i2314.yAdvance = i2315[3]
  return i2314
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2316 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2317 = data
  i2316.m_GlyphIndex = i2317[0]
  i2316.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2317[1], i2316.m_GlyphValueRecord)
  return i2316
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2318 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2319 = data
  i2318.m_XPlacement = i2319[0]
  i2318.m_YPlacement = i2319[1]
  i2318.m_XAdvance = i2319[2]
  i2318.m_YAdvance = i2319[3]
  return i2318
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[3],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[3],"76":[77],"78":[79],"80":[79],"9":[8],"81":[82],"83":[84],"85":[82],"86":[8],"87":[8],"11":[9],"18":[19,8],"88":[8],"10":[9],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"35":[8],"96":[8],"16":[19,8],"97":[8],"98":[8],"99":[8],"100":[8],"101":[19,8],"102":[8],"103":[6],"104":[6],"7":[6],"105":[6],"106":[3],"107":[3],"108":[109],"110":[3],"111":[112],"113":[8],"114":[19,8],"115":[77],"27":[19,8],"116":[117,77],"118":[77],"119":[77,120],"121":[54],"122":[62],"123":[112],"124":[125],"126":[8],"127":[77,8],"17":[8,19],"128":[8],"129":[19,8],"130":[77],"131":[19,8],"132":[8],"133":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","LunaManager","UnityEngine.UI.Button","UnityEngine.GameObject","UnityEngine.UI.RawImage","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","DraggableItem","UnityEngine.CanvasGroup","DropZone","UnityEngine.PolygonCollider2D","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","ClickItem","UnityEngine.BoxCollider2D","MixSkeletonSkin","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Mask","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "07/08/2025 01:59:59";

Deserializers.lunaDaysRunning = "154.3";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "BEQ_V16_NgocNDL_AnhPD";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1717";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4657";

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

Deserializers.buildID = "39a50c33-b299-4c58-b4c1-5f20dd490536";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

