var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1790 = root || request.c( 'UnityEngine.JointSpring' )
  var i1791 = data
  i1790.spring = i1791[0]
  i1790.damper = i1791[1]
  i1790.targetPosition = i1791[2]
  return i1790
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1792 = root || request.c( 'UnityEngine.JointMotor' )
  var i1793 = data
  i1792.m_TargetVelocity = i1793[0]
  i1792.m_Force = i1793[1]
  i1792.m_FreeSpin = i1793[2]
  return i1792
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnityEngine.JointLimits' )
  var i1795 = data
  i1794.m_Min = i1795[0]
  i1794.m_Max = i1795[1]
  i1794.m_Bounciness = i1795[2]
  i1794.m_BounceMinVelocity = i1795[3]
  i1794.m_ContactDistance = i1795[4]
  i1794.minBounce = i1795[5]
  i1794.maxBounce = i1795[6]
  return i1794
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.JointDrive' )
  var i1797 = data
  i1796.m_PositionSpring = i1797[0]
  i1796.m_PositionDamper = i1797[1]
  i1796.m_MaximumForce = i1797[2]
  i1796.m_UseAcceleration = i1797[3]
  return i1796
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1798 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1799 = data
  i1798.m_Spring = i1799[0]
  i1798.m_Damper = i1799[1]
  return i1798
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1801 = data
  i1800.m_Limit = i1801[0]
  i1800.m_Bounciness = i1801[1]
  i1800.m_ContactDistance = i1801[2]
  return i1800
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1803 = data
  i1802.m_ExtremumSlip = i1803[0]
  i1802.m_ExtremumValue = i1803[1]
  i1802.m_AsymptoteSlip = i1803[2]
  i1802.m_AsymptoteValue = i1803[3]
  i1802.m_Stiffness = i1803[4]
  return i1802
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1805 = data
  i1804.m_LowerAngle = i1805[0]
  i1804.m_UpperAngle = i1805[1]
  return i1804
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1807 = data
  i1806.m_MotorSpeed = i1807[0]
  i1806.m_MaximumMotorTorque = i1807[1]
  return i1806
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1809 = data
  i1808.m_DampingRatio = i1809[0]
  i1808.m_Frequency = i1809[1]
  i1808.m_Angle = i1809[2]
  return i1808
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1810 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1811 = data
  i1810.m_LowerTranslation = i1811[0]
  i1810.m_UpperTranslation = i1811[1]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1812 = root || new pc.UnityMaterial()
  var i1813 = data
  i1812.name = i1813[0]
  request.r(i1813[1], i1813[2], 0, i1812, 'shader')
  i1812.renderQueue = i1813[3]
  i1812.enableInstancing = !!i1813[4]
  var i1815 = i1813[5]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1815[i + 0]) );
  }
  i1812.floatParameters = i1814
  var i1817 = i1813[6]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1817[i + 0]) );
  }
  i1812.colorParameters = i1816
  var i1819 = i1813[7]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1819[i + 0]) );
  }
  i1812.vectorParameters = i1818
  var i1821 = i1813[8]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1821[i + 0]) );
  }
  i1812.textureParameters = i1820
  var i1823 = i1813[9]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1823[i + 0]) );
  }
  i1812.materialFlags = i1822
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1827 = data
  i1826.name = i1827[0]
  i1826.value = i1827[1]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1831 = data
  i1830.name = i1831[0]
  i1830.value = new pc.Color(i1831[1], i1831[2], i1831[3], i1831[4])
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1835 = data
  i1834.name = i1835[0]
  i1834.value = new pc.Vec4( i1835[1], i1835[2], i1835[3], i1835[4] )
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1839 = data
  i1838.name = i1839[0]
  request.r(i1839[1], i1839[2], 0, i1838, 'value')
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1843 = data
  i1842.name = i1843[0]
  i1842.enabled = !!i1843[1]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1845 = data
  i1844.name = i1845[0]
  i1844.width = i1845[1]
  i1844.height = i1845[2]
  i1844.mipmapCount = i1845[3]
  i1844.anisoLevel = i1845[4]
  i1844.filterMode = i1845[5]
  i1844.hdr = !!i1845[6]
  i1844.format = i1845[7]
  i1844.wrapMode = i1845[8]
  i1844.alphaIsTransparency = !!i1845[9]
  i1844.alphaSource = i1845[10]
  i1844.graphicsFormat = i1845[11]
  i1844.sRGBTexture = !!i1845[12]
  i1844.desiredColorSpace = i1845[13]
  i1844.wrapU = i1845[14]
  i1844.wrapV = i1845[15]
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1847 = data
  i1846.name = i1847[0]
  i1846.index = i1847[1]
  i1846.startup = !!i1847[2]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1849 = data
  i1848.position = new pc.Vec3( i1849[0], i1849[1], i1849[2] )
  i1848.scale = new pc.Vec3( i1849[3], i1849[4], i1849[5] )
  i1848.rotation = new pc.Quat(i1849[6], i1849[7], i1849[8], i1849[9])
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1851 = data
  i1850.aspect = i1851[0]
  i1850.orthographic = !!i1851[1]
  i1850.orthographicSize = i1851[2]
  i1850.backgroundColor = new pc.Color(i1851[3], i1851[4], i1851[5], i1851[6])
  i1850.nearClipPlane = i1851[7]
  i1850.farClipPlane = i1851[8]
  i1850.fieldOfView = i1851[9]
  i1850.depth = i1851[10]
  i1850.clearFlags = i1851[11]
  i1850.cullingMask = i1851[12]
  i1850.rect = i1851[13]
  request.r(i1851[14], i1851[15], 0, i1850, 'targetTexture')
  i1850.usePhysicalProperties = !!i1851[16]
  i1850.focalLength = i1851[17]
  i1850.sensorSize = new pc.Vec2( i1851[18], i1851[19] )
  i1850.lensShift = new pc.Vec2( i1851[20], i1851[21] )
  i1850.gateFit = i1851[22]
  i1850.commandBufferCount = i1851[23]
  i1850.cameraType = i1851[24]
  i1850.enabled = !!i1851[25]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1853 = data
  i1852.name = i1853[0]
  i1852.tagId = i1853[1]
  i1852.enabled = !!i1853[2]
  i1852.isStatic = !!i1853[3]
  i1852.layer = i1853[4]
  return i1852
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1854 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1855 = data
  request.r(i1855[0], i1855[1], 0, i1854, 'm_FirstSelected')
  i1854.m_sendNavigationEvents = !!i1855[2]
  i1854.m_DragThreshold = i1855[3]
  return i1854
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1857 = data
  i1856.m_HorizontalAxis = i1857[0]
  i1856.m_VerticalAxis = i1857[1]
  i1856.m_SubmitButton = i1857[2]
  i1856.m_CancelButton = i1857[3]
  i1856.m_InputActionsPerSecond = i1857[4]
  i1856.m_RepeatDelay = i1857[5]
  i1856.m_ForceModuleActive = !!i1857[6]
  i1856.m_SendPointerHoverToParent = !!i1857[7]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1859 = data
  i1858.pivot = new pc.Vec2( i1859[0], i1859[1] )
  i1858.anchorMin = new pc.Vec2( i1859[2], i1859[3] )
  i1858.anchorMax = new pc.Vec2( i1859[4], i1859[5] )
  i1858.sizeDelta = new pc.Vec2( i1859[6], i1859[7] )
  i1858.anchoredPosition3D = new pc.Vec3( i1859[8], i1859[9], i1859[10] )
  i1858.rotation = new pc.Quat(i1859[11], i1859[12], i1859[13], i1859[14])
  i1858.scale = new pc.Vec3( i1859[15], i1859[16], i1859[17] )
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1861 = data
  i1860.planeDistance = i1861[0]
  i1860.referencePixelsPerUnit = i1861[1]
  i1860.isFallbackOverlay = !!i1861[2]
  i1860.renderMode = i1861[3]
  i1860.renderOrder = i1861[4]
  i1860.sortingLayerName = i1861[5]
  i1860.sortingOrder = i1861[6]
  i1860.scaleFactor = i1861[7]
  request.r(i1861[8], i1861[9], 0, i1860, 'worldCamera')
  i1860.overrideSorting = !!i1861[10]
  i1860.pixelPerfect = !!i1861[11]
  i1860.targetDisplay = i1861[12]
  i1860.overridePixelPerfect = !!i1861[13]
  i1860.enabled = !!i1861[14]
  return i1860
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1862 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1863 = data
  i1862.m_UiScaleMode = i1863[0]
  i1862.m_ReferencePixelsPerUnit = i1863[1]
  i1862.m_ScaleFactor = i1863[2]
  i1862.m_ReferenceResolution = new pc.Vec2( i1863[3], i1863[4] )
  i1862.m_ScreenMatchMode = i1863[5]
  i1862.m_MatchWidthOrHeight = i1863[6]
  i1862.m_PhysicalUnit = i1863[7]
  i1862.m_FallbackScreenDPI = i1863[8]
  i1862.m_DefaultSpriteDPI = i1863[9]
  i1862.m_DynamicPixelsPerUnit = i1863[10]
  i1862.m_PresetInfoIsWorld = !!i1863[11]
  return i1862
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1864 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1865 = data
  i1864.m_IgnoreReversedGraphics = !!i1865[0]
  i1864.m_BlockingObjects = i1865[1]
  i1864.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1865[2] )
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1867 = data
  i1866.cullTransparentMesh = !!i1867[0]
  return i1866
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1868 = root || request.c( 'UnityEngine.UI.Image' )
  var i1869 = data
  request.r(i1869[0], i1869[1], 0, i1868, 'm_Sprite')
  i1868.m_Type = i1869[2]
  i1868.m_PreserveAspect = !!i1869[3]
  i1868.m_FillCenter = !!i1869[4]
  i1868.m_FillMethod = i1869[5]
  i1868.m_FillAmount = i1869[6]
  i1868.m_FillClockwise = !!i1869[7]
  i1868.m_FillOrigin = i1869[8]
  i1868.m_UseSpriteMesh = !!i1869[9]
  i1868.m_PixelsPerUnitMultiplier = i1869[10]
  i1868.m_Maskable = !!i1869[11]
  request.r(i1869[12], i1869[13], 0, i1868, 'm_Material')
  i1868.m_Color = new pc.Color(i1869[14], i1869[15], i1869[16], i1869[17])
  i1868.m_RaycastTarget = !!i1869[18]
  i1868.m_RaycastPadding = new pc.Vec4( i1869[19], i1869[20], i1869[21], i1869[22] )
  return i1868
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1870 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1871 = data
  request.r(i1871[0], i1871[1], 0, i1870, 'skeletonDataAsset')
  request.r(i1871[2], i1871[3], 0, i1870, 'additiveMaterial')
  request.r(i1871[4], i1871[5], 0, i1870, 'multiplyMaterial')
  request.r(i1871[6], i1871[7], 0, i1870, 'screenMaterial')
  i1870.forceAdditiveMaterial = !!i1871[8]
  i1870.initialSkinName = i1871[9]
  i1870.initialFlipX = !!i1871[10]
  i1870.initialFlipY = !!i1871[11]
  i1870.startingAnimation = i1871[12]
  i1870.startingLoop = !!i1871[13]
  i1870.timeScale = i1871[14]
  i1870.freeze = !!i1871[15]
  i1870.layoutScaleMode = i1871[16]
  i1870.updateWhenInvisible = i1871[17]
  i1870.allowMultipleCanvasRenderers = !!i1871[18]
  var i1873 = i1871[19]
  var i1872 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1873.length; i += 2) {
  request.r(i1873[i + 0], i1873[i + 1], 1, i1872, '')
  }
  i1870.canvasRenderers = i1872
  i1870.enableSeparatorSlots = !!i1871[20]
  i1870.updateSeparatorPartLocation = !!i1871[21]
  i1870.updateSeparatorPartScale = !!i1871[22]
  i1870.disableMeshAssignmentOnOverride = !!i1871[23]
  i1870.m_SkeletonColor = new pc.Color(i1871[24], i1871[25], i1871[26], i1871[27])
  i1870.referenceSize = new pc.Vec2( i1871[28], i1871[29] )
  i1870.pivotOffset = new pc.Vec2( i1871[30], i1871[31] )
  i1870.referenceScale = i1871[32]
  i1870.layoutScale = i1871[33]
  i1870.rectTransformSize = new pc.Vec2( i1871[34], i1871[35] )
  i1870.editReferenceRect = !!i1871[36]
  var i1875 = i1871[37]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( i1875[i + 0] );
  }
  i1870.separatorSlotNames = i1874
  var i1877 = i1871[38]
  var i1876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1877.length; i += 2) {
  request.r(i1877[i + 0], i1877[i + 1], 1, i1876, '')
  }
  i1870.separatorParts = i1876
  i1870.physicsPositionInheritanceFactor = new pc.Vec2( i1871[39], i1871[40] )
  i1870.physicsRotationInheritanceFactor = i1871[41]
  request.r(i1871[42], i1871[43], 0, i1870, 'physicsMovementRelativeTo')
  i1870.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1871[44], i1870.meshGenerator)
  i1870.updateTiming = i1871[45]
  i1870.unscaledTime = !!i1871[46]
  i1870.m_Maskable = !!i1871[47]
  request.r(i1871[48], i1871[49], 0, i1870, 'm_Material')
  i1870.m_Color = new pc.Color(i1871[50], i1871[51], i1871[52], i1871[53])
  i1870.m_RaycastTarget = !!i1871[54]
  i1870.m_RaycastPadding = new pc.Vec4( i1871[55], i1871[56], i1871[57], i1871[58] )
  return i1870
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1884 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1885 = data
  i1884.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1885[0], i1884.settings)
  return i1884
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1886 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1887 = data
  i1886.useClipping = !!i1887[0]
  i1886.zSpacing = i1887[1]
  i1886.tintBlack = !!i1887[2]
  i1886.canvasGroupCompatible = !!i1887[3]
  i1886.pmaVertexColors = !!i1887[4]
  i1886.addNormals = !!i1887[5]
  i1886.calculateTangents = !!i1887[6]
  i1886.immutableTriangles = !!i1887[7]
  return i1886
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i1888 = root || request.c( 'AnimationController' )
  var i1889 = data
  var i1891 = i1889[0]
  var i1890 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.add(request.d('Anim', i1891[i + 0]));
  }
  i1888.anims = i1890
  i1888.currentIndex = i1889[1]
  return i1888
}

Deserializers["Anim"] = function (request, data, root) {
  var i1894 = root || request.c( 'Anim' )
  var i1895 = data
  i1894.Key = i1895[0]
  var i1897 = i1895[1]
  var i1896 = new (System.Collections.Generic.List$1(Bridge.ns('Sound')))
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.add(request.d('Sound', i1897[i + 0]));
  }
  i1894.Sound = i1896
  i1894.Loop = !!i1895[2]
  i1894.Next = !!i1895[3]
  return i1894
}

Deserializers["Sound"] = function (request, data, root) {
  var i1900 = root || request.c( 'Sound' )
  var i1901 = data
  request.r(i1901[0], i1901[1], 0, i1900, 'Clip')
  i1900.Delay = i1901[2]
  return i1900
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1902 = root || request.c( 'UnityEngine.UI.Text' )
  var i1903 = data
  i1902.m_FontData = request.d('UnityEngine.UI.FontData', i1903[0], i1902.m_FontData)
  i1902.m_Text = i1903[1]
  i1902.m_Maskable = !!i1903[2]
  request.r(i1903[3], i1903[4], 0, i1902, 'm_Material')
  i1902.m_Color = new pc.Color(i1903[5], i1903[6], i1903[7], i1903[8])
  i1902.m_RaycastTarget = !!i1903[9]
  i1902.m_RaycastPadding = new pc.Vec4( i1903[10], i1903[11], i1903[12], i1903[13] )
  return i1902
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1904 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1905 = data
  request.r(i1905[0], i1905[1], 0, i1904, 'm_Font')
  i1904.m_FontSize = i1905[2]
  i1904.m_FontStyle = i1905[3]
  i1904.m_BestFit = !!i1905[4]
  i1904.m_MinSize = i1905[5]
  i1904.m_MaxSize = i1905[6]
  i1904.m_Alignment = i1905[7]
  i1904.m_AlignByGeometry = !!i1905[8]
  i1904.m_RichText = !!i1905[9]
  i1904.m_HorizontalOverflow = i1905[10]
  i1904.m_VerticalOverflow = i1905[11]
  i1904.m_LineSpacing = i1905[12]
  return i1904
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1906 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1907 = data
  request.r(i1907[0], i1907[1], 0, i1906, 'm_FillRect')
  request.r(i1907[2], i1907[3], 0, i1906, 'm_HandleRect')
  i1906.m_Direction = i1907[4]
  i1906.m_MinValue = i1907[5]
  i1906.m_MaxValue = i1907[6]
  i1906.m_WholeNumbers = !!i1907[7]
  i1906.m_Value = i1907[8]
  i1906.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1907[9], i1906.m_OnValueChanged)
  i1906.m_Navigation = request.d('UnityEngine.UI.Navigation', i1907[10], i1906.m_Navigation)
  i1906.m_Transition = i1907[11]
  i1906.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1907[12], i1906.m_Colors)
  i1906.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1907[13], i1906.m_SpriteState)
  i1906.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1907[14], i1906.m_AnimationTriggers)
  i1906.m_Interactable = !!i1907[15]
  request.r(i1907[16], i1907[17], 0, i1906, 'm_TargetGraphic')
  return i1906
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1908 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1909 = data
  i1908.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1909[0], i1908.m_PersistentCalls)
  return i1908
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1910 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1911 = data
  var i1913 = i1911[0]
  var i1912 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.add(request.d('UnityEngine.Events.PersistentCall', i1913[i + 0]));
  }
  i1910.m_Calls = i1912
  return i1910
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1916 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1917 = data
  request.r(i1917[0], i1917[1], 0, i1916, 'm_Target')
  i1916.m_TargetAssemblyTypeName = i1917[2]
  i1916.m_MethodName = i1917[3]
  i1916.m_Mode = i1917[4]
  i1916.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1917[5], i1916.m_Arguments)
  i1916.m_CallState = i1917[6]
  return i1916
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1918 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1919 = data
  i1918.m_Mode = i1919[0]
  i1918.m_WrapAround = !!i1919[1]
  request.r(i1919[2], i1919[3], 0, i1918, 'm_SelectOnUp')
  request.r(i1919[4], i1919[5], 0, i1918, 'm_SelectOnDown')
  request.r(i1919[6], i1919[7], 0, i1918, 'm_SelectOnLeft')
  request.r(i1919[8], i1919[9], 0, i1918, 'm_SelectOnRight')
  return i1918
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1920 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1921 = data
  i1920.m_NormalColor = new pc.Color(i1921[0], i1921[1], i1921[2], i1921[3])
  i1920.m_HighlightedColor = new pc.Color(i1921[4], i1921[5], i1921[6], i1921[7])
  i1920.m_PressedColor = new pc.Color(i1921[8], i1921[9], i1921[10], i1921[11])
  i1920.m_SelectedColor = new pc.Color(i1921[12], i1921[13], i1921[14], i1921[15])
  i1920.m_DisabledColor = new pc.Color(i1921[16], i1921[17], i1921[18], i1921[19])
  i1920.m_ColorMultiplier = i1921[20]
  i1920.m_FadeDuration = i1921[21]
  return i1920
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1922 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1923 = data
  request.r(i1923[0], i1923[1], 0, i1922, 'm_HighlightedSprite')
  request.r(i1923[2], i1923[3], 0, i1922, 'm_PressedSprite')
  request.r(i1923[4], i1923[5], 0, i1922, 'm_SelectedSprite')
  request.r(i1923[6], i1923[7], 0, i1922, 'm_DisabledSprite')
  return i1922
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1924 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1925 = data
  i1924.m_NormalTrigger = i1925[0]
  i1924.m_HighlightedTrigger = i1925[1]
  i1924.m_PressedTrigger = i1925[2]
  i1924.m_SelectedTrigger = i1925[3]
  i1924.m_DisabledTrigger = i1925[4]
  return i1924
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1926 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1927 = data
  i1926.m_ShowMaskGraphic = !!i1927[0]
  return i1926
}

Deserializers["TutController"] = function (request, data, root) {
  var i1928 = root || request.c( 'TutController' )
  var i1929 = data
  request.r(i1929[0], i1929[1], 0, i1928, 'icon')
  request.r(i1929[2], i1929[3], 0, i1928, 'tutObject')
  i1928.toPos = new pc.Vec3( i1929[4], i1929[5], i1929[6] )
  i1928.timeMove = i1929[7]
  i1928.timeDelay = i1929[8]
  i1928.scale = i1929[9]
  return i1928
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1930 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1931 = data
  i1930.targetIsSelf = !!i1931[0]
  request.r(i1931[1], i1931[2], 0, i1930, 'targetGO')
  i1930.tweenTargetIsTargetGO = !!i1931[3]
  i1930.delay = i1931[4]
  i1930.duration = i1931[5]
  i1930.easeType = i1931[6]
  i1930.easeCurve = new pc.AnimationCurve( { keys_flow: i1931[7] } )
  i1930.loopType = i1931[8]
  i1930.loops = i1931[9]
  i1930.id = i1931[10]
  i1930.isRelative = !!i1931[11]
  i1930.isFrom = !!i1931[12]
  i1930.isIndependentUpdate = !!i1931[13]
  i1930.autoKill = !!i1931[14]
  i1930.autoGenerate = !!i1931[15]
  i1930.isActive = !!i1931[16]
  i1930.isValid = !!i1931[17]
  request.r(i1931[18], i1931[19], 0, i1930, 'target')
  i1930.animationType = i1931[20]
  i1930.targetType = i1931[21]
  i1930.forcedTargetType = i1931[22]
  i1930.autoPlay = !!i1931[23]
  i1930.useTargetAsV3 = !!i1931[24]
  i1930.endValueFloat = i1931[25]
  i1930.endValueV3 = new pc.Vec3( i1931[26], i1931[27], i1931[28] )
  i1930.endValueV2 = new pc.Vec2( i1931[29], i1931[30] )
  i1930.endValueColor = new pc.Color(i1931[31], i1931[32], i1931[33], i1931[34])
  i1930.endValueString = i1931[35]
  i1930.endValueRect = UnityEngine.Rect.MinMaxRect(i1931[36], i1931[37], i1931[38], i1931[39])
  request.r(i1931[40], i1931[41], 0, i1930, 'endValueTransform')
  i1930.optionalBool0 = !!i1931[42]
  i1930.optionalBool1 = !!i1931[43]
  i1930.optionalFloat0 = i1931[44]
  i1930.optionalInt0 = i1931[45]
  i1930.optionalRotationMode = i1931[46]
  i1930.optionalScrambleMode = i1931[47]
  i1930.optionalShakeRandomnessMode = i1931[48]
  i1930.optionalString = i1931[49]
  i1930.updateType = i1931[50]
  i1930.isSpeedBased = !!i1931[51]
  i1930.hasOnStart = !!i1931[52]
  i1930.hasOnPlay = !!i1931[53]
  i1930.hasOnUpdate = !!i1931[54]
  i1930.hasOnStepComplete = !!i1931[55]
  i1930.hasOnComplete = !!i1931[56]
  i1930.hasOnTweenCreated = !!i1931[57]
  i1930.hasOnRewind = !!i1931[58]
  i1930.onStart = request.d('UnityEngine.Events.UnityEvent', i1931[59], i1930.onStart)
  i1930.onPlay = request.d('UnityEngine.Events.UnityEvent', i1931[60], i1930.onPlay)
  i1930.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1931[61], i1930.onUpdate)
  i1930.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1931[62], i1930.onStepComplete)
  i1930.onComplete = request.d('UnityEngine.Events.UnityEvent', i1931[63], i1930.onComplete)
  i1930.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1931[64], i1930.onTweenCreated)
  i1930.onRewind = request.d('UnityEngine.Events.UnityEvent', i1931[65], i1930.onRewind)
  return i1930
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1932 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1933 = data
  i1932.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1933[0], i1932.m_PersistentCalls)
  return i1932
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1934 = root || request.c( 'UnityEngine.UI.Button' )
  var i1935 = data
  i1934.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1935[0], i1934.m_OnClick)
  i1934.m_Navigation = request.d('UnityEngine.UI.Navigation', i1935[1], i1934.m_Navigation)
  i1934.m_Transition = i1935[2]
  i1934.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1935[3], i1934.m_Colors)
  i1934.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1935[4], i1934.m_SpriteState)
  i1934.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1935[5], i1934.m_AnimationTriggers)
  i1934.m_Interactable = !!i1935[6]
  request.r(i1935[7], i1935[8], 0, i1934, 'm_TargetGraphic')
  return i1934
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1936 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1937 = data
  i1936.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1937[0], i1936.m_PersistentCalls)
  return i1936
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1938 = root || request.c( 'LunaController' )
  var i1939 = data
  i1938.TimePlay = i1939[0]
  i1938.CountPlay = i1939[1]
  i1938.BGColor = new pc.Color(i1939[2], i1939[3], i1939[4], i1939[5])
  i1938.GameBGColor = new pc.Color(i1939[6], i1939[7], i1939[8], i1939[9])
  i1938.LevelTextColor = new pc.Color(i1939[10], i1939[11], i1939[12], i1939[13])
  i1938.TitleTextColor = new pc.Color(i1939[14], i1939[15], i1939[16], i1939[17])
  request.r(i1939[18], i1939[19], 0, i1938, 'time')
  request.r(i1939[20], i1939[21], 0, i1938, 'BGImage')
  request.r(i1939[22], i1939[23], 0, i1938, 'GameBGImage')
  request.r(i1939[24], i1939[25], 0, i1938, 'levelText')
  request.r(i1939[26], i1939[27], 0, i1938, 'titleText')
  request.r(i1939[28], i1939[29], 0, i1938, 'endCard')
  var i1941 = i1939[30]
  var i1940 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1941.length; i += 2) {
  request.r(i1941[i + 0], i1941[i + 1], 1, i1940, '')
  }
  i1938.CTA = i1940
  i1938.count = i1939[31]
  return i1938
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1944 = root || request.c( 'LayoutController' )
  var i1945 = data
  request.r(i1945[0], i1945[1], 0, i1944, 'CTA')
  i1944.hide = !!i1945[2]
  return i1944
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1946 = root || request.c( 'AudioController' )
  var i1947 = data
  request.r(i1947[0], i1947[1], 0, i1946, 'musicSound')
  request.r(i1947[2], i1947[3], 0, i1946, 'musicSource')
  i1946.delayMusic = i1947[4]
  request.r(i1947[5], i1947[6], 0, i1946, 'introSound')
  request.r(i1947[7], i1947[8], 0, i1946, 'introSource')
  i1946.delayIntro = i1947[9]
  request.r(i1947[10], i1947[11], 0, i1946, 'SFXPool')
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1949 = data
  request.r(i1949[0], i1949[1], 0, i1948, 'clip')
  request.r(i1949[2], i1949[3], 0, i1948, 'outputAudioMixerGroup')
  i1948.playOnAwake = !!i1949[4]
  i1948.loop = !!i1949[5]
  i1948.time = i1949[6]
  i1948.volume = i1949[7]
  i1948.pitch = i1949[8]
  i1948.enabled = !!i1949[9]
  return i1948
}

Deserializers["DragController"] = function (request, data, root) {
  var i1950 = root || request.c( 'DragController' )
  var i1951 = data
  request.r(i1951[0], i1951[1], 0, i1950, 'currentTarget')
  request.r(i1951[2], i1951[3], 0, i1950, 'pickupSound')
  request.r(i1951[4], i1951[5], 0, i1950, 'iconItem')
  request.r(i1951[6], i1951[7], 0, i1950, 'canvas')
  request.r(i1951[8], i1951[9], 0, i1950, 'tut')
  return i1950
}

Deserializers["GameController"] = function (request, data, root) {
  var i1952 = root || request.c( 'GameController' )
  var i1953 = data
  i1952.CompleteStep = request.d('System.Action', i1953[0], i1952.CompleteStep)
  var i1955 = i1953[1]
  var i1954 = new (System.Collections.Generic.List$1(Bridge.ns('Seq')))
  for(var i = 0; i < i1955.length; i += 1) {
    i1954.add(request.d('Seq', i1955[i + 0]));
  }
  i1952.skeletons = i1954
  request.r(i1953[2], i1953[3], 0, i1952, 'demon')
  request.r(i1953[4], i1953[5], 0, i1952, 'mainAnimation')
  request.r(i1953[6], i1953[7], 0, i1952, 'correctSound')
  i1952.end = !!i1953[8]
  i1952.complete = !!i1953[9]
  i1952.currentStep = i1953[10]
  i1952.maxStep = i1953[11]
  request.r(i1953[12], i1953[13], 0, i1952, 'currentStepText')
  request.r(i1953[14], i1953[15], 0, i1952, 'maxStepText')
  request.r(i1953[16], i1953[17], 0, i1952, 'slider')
  return i1952
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1956 = root || request.c( 'System.Action' )
  var i1957 = data
  return i1956
}

Deserializers["Seq"] = function (request, data, root) {
  var i1960 = root || request.c( 'Seq' )
  var i1961 = data
  request.r(i1961[0], i1961[1], 0, i1960, 'Area')
  request.r(i1961[2], i1961[3], 0, i1960, 'Animation')
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1963 = data
  i1962.ambientIntensity = i1963[0]
  i1962.reflectionIntensity = i1963[1]
  i1962.ambientMode = i1963[2]
  i1962.ambientLight = new pc.Color(i1963[3], i1963[4], i1963[5], i1963[6])
  i1962.ambientSkyColor = new pc.Color(i1963[7], i1963[8], i1963[9], i1963[10])
  i1962.ambientGroundColor = new pc.Color(i1963[11], i1963[12], i1963[13], i1963[14])
  i1962.ambientEquatorColor = new pc.Color(i1963[15], i1963[16], i1963[17], i1963[18])
  i1962.fogColor = new pc.Color(i1963[19], i1963[20], i1963[21], i1963[22])
  i1962.fogEndDistance = i1963[23]
  i1962.fogStartDistance = i1963[24]
  i1962.fogDensity = i1963[25]
  i1962.fog = !!i1963[26]
  request.r(i1963[27], i1963[28], 0, i1962, 'skybox')
  i1962.fogMode = i1963[29]
  var i1965 = i1963[30]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1965[i + 0]) );
  }
  i1962.lightmaps = i1964
  i1962.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1963[31], i1962.lightProbes)
  i1962.lightmapsMode = i1963[32]
  i1962.mixedBakeMode = i1963[33]
  i1962.environmentLightingMode = i1963[34]
  i1962.ambientProbe = new pc.SphericalHarmonicsL2(i1963[35])
  i1962.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1963[36])
  i1962.useReferenceAmbientProbe = !!i1963[37]
  request.r(i1963[38], i1963[39], 0, i1962, 'customReflection')
  request.r(i1963[40], i1963[41], 0, i1962, 'defaultReflection')
  i1962.defaultReflectionMode = i1963[42]
  i1962.defaultReflectionResolution = i1963[43]
  i1962.sunLightObjectId = i1963[44]
  i1962.pixelLightCount = i1963[45]
  i1962.defaultReflectionHDR = !!i1963[46]
  i1962.hasLightDataAsset = !!i1963[47]
  i1962.hasManualGenerate = !!i1963[48]
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1969 = data
  request.r(i1969[0], i1969[1], 0, i1968, 'lightmapColor')
  request.r(i1969[2], i1969[3], 0, i1968, 'lightmapDirection')
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1970 = root || new UnityEngine.LightProbes()
  var i1971 = data
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1979 = data
  var i1981 = i1979[0]
  var i1980 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1981[i + 0]));
  }
  i1978.ShaderCompilationErrors = i1980
  i1978.name = i1979[1]
  i1978.guid = i1979[2]
  var i1983 = i1979[3]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( i1983[i + 0] );
  }
  i1978.shaderDefinedKeywords = i1982
  var i1985 = i1979[4]
  var i1984 = []
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1985[i + 0]) );
  }
  i1978.passes = i1984
  var i1987 = i1979[5]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1987[i + 0]) );
  }
  i1978.usePasses = i1986
  var i1989 = i1979[6]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1989[i + 0]) );
  }
  i1978.defaultParameterValues = i1988
  request.r(i1979[7], i1979[8], 0, i1978, 'unityFallbackShader')
  i1978.readDepth = !!i1979[9]
  i1978.isCreatedByShaderGraph = !!i1979[10]
  i1978.disableBatching = !!i1979[11]
  i1978.compiled = !!i1979[12]
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1993 = data
  i1992.shaderName = i1993[0]
  i1992.errorMessage = i1993[1]
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1996 = root || new pc.UnityShaderPass()
  var i1997 = data
  i1996.id = i1997[0]
  i1996.subShaderIndex = i1997[1]
  i1996.name = i1997[2]
  i1996.passType = i1997[3]
  i1996.grabPassTextureName = i1997[4]
  i1996.usePass = !!i1997[5]
  i1996.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[6], i1996.zTest)
  i1996.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[7], i1996.zWrite)
  i1996.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[8], i1996.culling)
  i1996.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1997[9], i1996.blending)
  i1996.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1997[10], i1996.alphaBlending)
  i1996.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[11], i1996.colorWriteMask)
  i1996.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[12], i1996.offsetUnits)
  i1996.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[13], i1996.offsetFactor)
  i1996.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[14], i1996.stencilRef)
  i1996.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[15], i1996.stencilReadMask)
  i1996.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[16], i1996.stencilWriteMask)
  i1996.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1997[17], i1996.stencilOp)
  i1996.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1997[18], i1996.stencilOpFront)
  i1996.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1997[19], i1996.stencilOpBack)
  var i1999 = i1997[20]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1999[i + 0]) );
  }
  i1996.tags = i1998
  var i2001 = i1997[21]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( i2001[i + 0] );
  }
  i1996.passDefinedKeywords = i2000
  var i2003 = i1997[22]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2003[i + 0]) );
  }
  i1996.passDefinedKeywordGroups = i2002
  var i2005 = i1997[23]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2005[i + 0]) );
  }
  i1996.variants = i2004
  var i2007 = i1997[24]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2007[i + 0]) );
  }
  i1996.excludedVariants = i2006
  i1996.hasDepthReader = !!i1997[25]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2009 = data
  i2008.val = i2009[0]
  i2008.name = i2009[1]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2011 = data
  i2010.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2011[0], i2010.src)
  i2010.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2011[1], i2010.dst)
  i2010.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2011[2], i2010.op)
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2013 = data
  i2012.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[0], i2012.pass)
  i2012.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[1], i2012.fail)
  i2012.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[2], i2012.zFail)
  i2012.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[3], i2012.comp)
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2017 = data
  i2016.name = i2017[0]
  i2016.value = i2017[1]
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2021 = data
  var i2023 = i2021[0]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( i2023[i + 0] );
  }
  i2020.keywords = i2022
  i2020.hasDiscard = !!i2021[1]
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2027 = data
  i2026.passId = i2027[0]
  i2026.subShaderIndex = i2027[1]
  var i2029 = i2027[2]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( i2029[i + 0] );
  }
  i2026.keywords = i2028
  i2026.vertexProgram = i2027[3]
  i2026.fragmentProgram = i2027[4]
  i2026.exportedForWebGl2 = !!i2027[5]
  i2026.readDepth = !!i2027[6]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2033 = data
  request.r(i2033[0], i2033[1], 0, i2032, 'shader')
  i2032.pass = i2033[2]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2037 = data
  i2036.name = i2037[0]
  i2036.type = i2037[1]
  i2036.value = new pc.Vec4( i2037[2], i2037[3], i2037[4], i2037[5] )
  i2036.textureValue = i2037[6]
  i2036.shaderPropertyFlag = i2037[7]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2039 = data
  i2038.name = i2039[0]
  request.r(i2039[1], i2039[2], 0, i2038, 'texture')
  i2038.aabb = i2039[3]
  i2038.vertices = i2039[4]
  i2038.triangles = i2039[5]
  i2038.textureRect = UnityEngine.Rect.MinMaxRect(i2039[6], i2039[7], i2039[8], i2039[9])
  i2038.packedRect = UnityEngine.Rect.MinMaxRect(i2039[10], i2039[11], i2039[12], i2039[13])
  i2038.border = new pc.Vec4( i2039[14], i2039[15], i2039[16], i2039[17] )
  i2038.transparency = i2039[18]
  i2038.bounds = i2039[19]
  i2038.pixelsPerUnit = i2039[20]
  i2038.textureWidth = i2039[21]
  i2038.textureHeight = i2039[22]
  i2038.nativeSize = new pc.Vec2( i2039[23], i2039[24] )
  i2038.pivot = new pc.Vec2( i2039[25], i2039[26] )
  i2038.textureRectOffset = new pc.Vec2( i2039[27], i2039[28] )
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2041 = data
  i2040.name = i2041[0]
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2043 = data
  i2042.name = i2043[0]
  i2042.ascent = i2043[1]
  i2042.originalLineHeight = i2043[2]
  i2042.fontSize = i2043[3]
  var i2045 = i2043[4]
  var i2044 = []
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2045[i + 0]) );
  }
  i2042.characterInfo = i2044
  request.r(i2043[5], i2043[6], 0, i2042, 'texture')
  i2042.originalFontSize = i2043[7]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2049 = data
  i2048.index = i2049[0]
  i2048.advance = i2049[1]
  i2048.bearing = i2049[2]
  i2048.glyphWidth = i2049[3]
  i2048.glyphHeight = i2049[4]
  i2048.minX = i2049[5]
  i2048.maxX = i2049[6]
  i2048.minY = i2049[7]
  i2048.maxY = i2049[8]
  i2048.uvBottomLeftX = i2049[9]
  i2048.uvBottomLeftY = i2049[10]
  i2048.uvBottomRightX = i2049[11]
  i2048.uvBottomRightY = i2049[12]
  i2048.uvTopLeftX = i2049[13]
  i2048.uvTopLeftY = i2049[14]
  i2048.uvTopRightX = i2049[15]
  i2048.uvTopRightY = i2049[16]
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2051 = data
  i2050.name = i2051[0]
  i2050.bytes64 = i2051[1]
  i2050.data = i2051[2]
  return i2050
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2052 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2053 = data
  var i2055 = i2053[0]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 2) {
  request.r(i2055[i + 0], i2055[i + 1], 2, i2054, '')
  }
  i2052.atlasAssets = i2054
  i2052.scale = i2053[1]
  request.r(i2053[2], i2053[3], 0, i2052, 'skeletonJSON')
  i2052.isUpgradingBlendModeMaterials = !!i2053[4]
  i2052.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2053[5], i2052.blendModeMaterials)
  var i2057 = i2053[6]
  var i2056 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2057.length; i += 2) {
  request.r(i2057[i + 0], i2057[i + 1], 1, i2056, '')
  }
  i2052.skeletonDataModifiers = i2056
  var i2059 = i2053[7]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( i2059[i + 0] );
  }
  i2052.fromAnimation = i2058
  var i2061 = i2053[8]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( i2061[i + 0] );
  }
  i2052.toAnimation = i2060
  i2052.duration = i2053[9]
  i2052.defaultMix = i2053[10]
  request.r(i2053[11], i2053[12], 0, i2052, 'controller')
  return i2052
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2064 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2065 = data
  i2064.applyAdditiveMaterial = !!i2065[0]
  var i2067 = i2065[1]
  var i2066 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2067[i + 0]));
  }
  i2064.additiveMaterials = i2066
  var i2069 = i2065[2]
  var i2068 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2069[i + 0]));
  }
  i2064.multiplyMaterials = i2068
  var i2071 = i2065[3]
  var i2070 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2071[i + 0]));
  }
  i2064.screenMaterials = i2070
  i2064.requiresBlendModeMaterials = !!i2065[4]
  return i2064
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2074 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2075 = data
  i2074.pageName = i2075[0]
  request.r(i2075[1], i2075[2], 0, i2074, 'material')
  return i2074
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2078 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2079 = data
  request.r(i2079[0], i2079[1], 0, i2078, 'atlasFile')
  var i2081 = i2079[2]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 2) {
  request.r(i2081[i + 0], i2081[i + 1], 2, i2080, '')
  }
  i2078.materials = i2080
  i2078.textureLoadingMode = i2079[3]
  request.r(i2079[4], i2079[5], 0, i2078, 'onDemandTextureLoader')
  return i2078
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2084 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2085 = data
  i2084.useSafeMode = !!i2085[0]
  i2084.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2085[1], i2084.safeModeOptions)
  i2084.timeScale = i2085[2]
  i2084.unscaledTimeScale = i2085[3]
  i2084.useSmoothDeltaTime = !!i2085[4]
  i2084.maxSmoothUnscaledTime = i2085[5]
  i2084.rewindCallbackMode = i2085[6]
  i2084.showUnityEditorReport = !!i2085[7]
  i2084.logBehaviour = i2085[8]
  i2084.drawGizmos = !!i2085[9]
  i2084.defaultRecyclable = !!i2085[10]
  i2084.defaultAutoPlay = i2085[11]
  i2084.defaultUpdateType = i2085[12]
  i2084.defaultTimeScaleIndependent = !!i2085[13]
  i2084.defaultEaseType = i2085[14]
  i2084.defaultEaseOvershootOrAmplitude = i2085[15]
  i2084.defaultEasePeriod = i2085[16]
  i2084.defaultAutoKill = !!i2085[17]
  i2084.defaultLoopType = i2085[18]
  i2084.debugMode = !!i2085[19]
  i2084.debugStoreTargetId = !!i2085[20]
  i2084.showPreviewPanel = !!i2085[21]
  i2084.storeSettingsLocation = i2085[22]
  i2084.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2085[23], i2084.modules)
  i2084.createASMDEF = !!i2085[24]
  i2084.showPlayingTweens = !!i2085[25]
  i2084.showPausedTweens = !!i2085[26]
  return i2084
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2086 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2087 = data
  i2086.logBehaviour = i2087[0]
  i2086.nestedTweenFailureBehaviour = i2087[1]
  return i2086
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2088 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2089 = data
  i2088.showPanel = !!i2089[0]
  i2088.audioEnabled = !!i2089[1]
  i2088.physicsEnabled = !!i2089[2]
  i2088.physics2DEnabled = !!i2089[3]
  i2088.spriteEnabled = !!i2089[4]
  i2088.uiEnabled = !!i2089[5]
  i2088.textMeshProEnabled = !!i2089[6]
  i2088.tk2DEnabled = !!i2089[7]
  i2088.deAudioEnabled = !!i2089[8]
  i2088.deUnityExtendedEnabled = !!i2089[9]
  i2088.epoOutlineEnabled = !!i2089[10]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2091 = data
  var i2093 = i2091[0]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2093[i + 0]) );
  }
  i2090.files = i2092
  i2090.componentToPrefabIds = i2091[1]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2097 = data
  i2096.path = i2097[0]
  request.r(i2097[1], i2097[2], 0, i2096, 'unityObject')
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2099 = data
  var i2101 = i2099[0]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2101[i + 0]) );
  }
  i2098.scriptsExecutionOrder = i2100
  var i2103 = i2099[1]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2103[i + 0]) );
  }
  i2098.sortingLayers = i2102
  var i2105 = i2099[2]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2105[i + 0]) );
  }
  i2098.cullingLayers = i2104
  i2098.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2099[3], i2098.timeSettings)
  i2098.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2099[4], i2098.physicsSettings)
  i2098.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2099[5], i2098.physics2DSettings)
  i2098.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2099[6], i2098.qualitySettings)
  i2098.enableRealtimeShadows = !!i2099[7]
  i2098.enableAutoInstancing = !!i2099[8]
  i2098.enableStaticBatching = !!i2099[9]
  i2098.enableDynamicBatching = !!i2099[10]
  i2098.lightmapEncodingQuality = i2099[11]
  i2098.desiredColorSpace = i2099[12]
  var i2107 = i2099[13]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( i2107[i + 0] );
  }
  i2098.allTags = i2106
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2111 = data
  i2110.name = i2111[0]
  i2110.value = i2111[1]
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2115 = data
  i2114.id = i2115[0]
  i2114.name = i2115[1]
  i2114.value = i2115[2]
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2119 = data
  i2118.id = i2119[0]
  i2118.name = i2119[1]
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2121 = data
  i2120.fixedDeltaTime = i2121[0]
  i2120.maximumDeltaTime = i2121[1]
  i2120.timeScale = i2121[2]
  i2120.maximumParticleTimestep = i2121[3]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2123 = data
  i2122.gravity = new pc.Vec3( i2123[0], i2123[1], i2123[2] )
  i2122.defaultSolverIterations = i2123[3]
  i2122.bounceThreshold = i2123[4]
  i2122.autoSyncTransforms = !!i2123[5]
  i2122.autoSimulation = !!i2123[6]
  var i2125 = i2123[7]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2125[i + 0]) );
  }
  i2122.collisionMatrix = i2124
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2129 = data
  i2128.enabled = !!i2129[0]
  i2128.layerId = i2129[1]
  i2128.otherLayerId = i2129[2]
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2131 = data
  request.r(i2131[0], i2131[1], 0, i2130, 'material')
  i2130.gravity = new pc.Vec2( i2131[2], i2131[3] )
  i2130.positionIterations = i2131[4]
  i2130.velocityIterations = i2131[5]
  i2130.velocityThreshold = i2131[6]
  i2130.maxLinearCorrection = i2131[7]
  i2130.maxAngularCorrection = i2131[8]
  i2130.maxTranslationSpeed = i2131[9]
  i2130.maxRotationSpeed = i2131[10]
  i2130.baumgarteScale = i2131[11]
  i2130.baumgarteTOIScale = i2131[12]
  i2130.timeToSleep = i2131[13]
  i2130.linearSleepTolerance = i2131[14]
  i2130.angularSleepTolerance = i2131[15]
  i2130.defaultContactOffset = i2131[16]
  i2130.autoSimulation = !!i2131[17]
  i2130.queriesHitTriggers = !!i2131[18]
  i2130.queriesStartInColliders = !!i2131[19]
  i2130.callbacksOnDisable = !!i2131[20]
  i2130.reuseCollisionCallbacks = !!i2131[21]
  i2130.autoSyncTransforms = !!i2131[22]
  var i2133 = i2131[23]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2133[i + 0]) );
  }
  i2130.collisionMatrix = i2132
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2137 = data
  i2136.enabled = !!i2137[0]
  i2136.layerId = i2137[1]
  i2136.otherLayerId = i2137[2]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2139 = data
  var i2141 = i2139[0]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2141[i + 0]) );
  }
  i2138.qualityLevels = i2140
  var i2143 = i2139[1]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.push( i2143[i + 0] );
  }
  i2138.names = i2142
  i2138.shadows = i2139[2]
  i2138.anisotropicFiltering = i2139[3]
  i2138.antiAliasing = i2139[4]
  i2138.lodBias = i2139[5]
  i2138.shadowCascades = i2139[6]
  i2138.shadowDistance = i2139[7]
  i2138.shadowmaskMode = i2139[8]
  i2138.shadowProjection = i2139[9]
  i2138.shadowResolution = i2139[10]
  i2138.softParticles = !!i2139[11]
  i2138.softVegetation = !!i2139[12]
  i2138.activeColorSpace = i2139[13]
  i2138.desiredColorSpace = i2139[14]
  i2138.masterTextureLimit = i2139[15]
  i2138.maxQueuedFrames = i2139[16]
  i2138.particleRaycastBudget = i2139[17]
  i2138.pixelLightCount = i2139[18]
  i2138.realtimeReflectionProbes = !!i2139[19]
  i2138.shadowCascade2Split = i2139[20]
  i2138.shadowCascade4Split = new pc.Vec3( i2139[21], i2139[22], i2139[23] )
  i2138.streamingMipmapsActive = !!i2139[24]
  i2138.vSyncCount = i2139[25]
  i2138.asyncUploadBufferSize = i2139[26]
  i2138.asyncUploadTimeSlice = i2139[27]
  i2138.billboardsFaceCameraPosition = !!i2139[28]
  i2138.shadowNearPlaneOffset = i2139[29]
  i2138.streamingMipmapsMemoryBudget = i2139[30]
  i2138.maximumLODLevel = i2139[31]
  i2138.streamingMipmapsAddAllCameras = !!i2139[32]
  i2138.streamingMipmapsMaxLevelReduction = i2139[33]
  i2138.streamingMipmapsRenderersPerFrame = i2139[34]
  i2138.resolutionScalingFixedDPIFactor = i2139[35]
  i2138.streamingMipmapsMaxFileIORequests = i2139[36]
  i2138.currentQualityLevel = i2139[37]
  return i2138
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2146 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2147 = data
  request.r(i2147[0], i2147[1], 0, i2146, 'm_ObjectArgument')
  i2146.m_ObjectArgumentAssemblyTypeName = i2147[2]
  i2146.m_IntArgument = i2147[3]
  i2146.m_FloatArgument = i2147[4]
  i2146.m_StringArgument = i2147[5]
  i2146.m_BoolArgument = !!i2147[6]
  return i2146
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[3],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[3],"71":[72],"73":[74],"75":[74],"9":[8],"18":[14],"76":[77],"78":[79],"80":[77],"81":[8],"82":[8],"11":[9],"13":[12,8],"83":[8],"10":[9],"84":[8],"85":[8],"86":[8],"87":[8],"88":[8],"89":[8],"90":[8],"24":[8],"91":[8],"92":[12,8],"93":[8],"94":[8],"95":[8],"23":[8],"21":[12,8],"96":[8],"97":[6],"98":[6],"7":[6],"99":[6],"100":[3],"101":[3],"102":[103],"104":[3],"105":[106],"107":[8],"108":[12,8],"109":[72],"14":[12,8],"110":[111,72],"112":[72],"113":[72,114],"115":[49],"116":[57],"117":[106],"118":[119],"120":[77]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Slider","UnityEngine.UI.Mask","TutController","UnityEngine.GameObject","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","LunaController","LayoutController","AudioController","UnityEngine.AudioSource","DragController","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.47f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "06/29/2026 07:28:58";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BM_V20_NgocBTU_TamNTM";

Deserializers.lunaAppID = "34530";

Deserializers.projectId = "5b44dfd2230fe054ca8da1b65d37e310";

Deserializers.packagesInfo = "com.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1803";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4367";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BMTP_Luna";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "99c99ea6-80d6-4355-a578-047800ad42bf";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

