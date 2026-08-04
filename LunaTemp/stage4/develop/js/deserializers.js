var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1770 = root || request.c( 'UnityEngine.JointSpring' )
  var i1771 = data
  i1770.spring = i1771[0]
  i1770.damper = i1771[1]
  i1770.targetPosition = i1771[2]
  return i1770
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1772 = root || request.c( 'UnityEngine.JointMotor' )
  var i1773 = data
  i1772.m_TargetVelocity = i1773[0]
  i1772.m_Force = i1773[1]
  i1772.m_FreeSpin = i1773[2]
  return i1772
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1774 = root || request.c( 'UnityEngine.JointLimits' )
  var i1775 = data
  i1774.m_Min = i1775[0]
  i1774.m_Max = i1775[1]
  i1774.m_Bounciness = i1775[2]
  i1774.m_BounceMinVelocity = i1775[3]
  i1774.m_ContactDistance = i1775[4]
  i1774.minBounce = i1775[5]
  i1774.maxBounce = i1775[6]
  return i1774
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1776 = root || request.c( 'UnityEngine.JointDrive' )
  var i1777 = data
  i1776.m_PositionSpring = i1777[0]
  i1776.m_PositionDamper = i1777[1]
  i1776.m_MaximumForce = i1777[2]
  i1776.m_UseAcceleration = i1777[3]
  return i1776
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1778 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1779 = data
  i1778.m_Spring = i1779[0]
  i1778.m_Damper = i1779[1]
  return i1778
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1780 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1781 = data
  i1780.m_Limit = i1781[0]
  i1780.m_Bounciness = i1781[1]
  i1780.m_ContactDistance = i1781[2]
  return i1780
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1782 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1783 = data
  i1782.m_ExtremumSlip = i1783[0]
  i1782.m_ExtremumValue = i1783[1]
  i1782.m_AsymptoteSlip = i1783[2]
  i1782.m_AsymptoteValue = i1783[3]
  i1782.m_Stiffness = i1783[4]
  return i1782
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1784 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1785 = data
  i1784.m_LowerAngle = i1785[0]
  i1784.m_UpperAngle = i1785[1]
  return i1784
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1786 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1787 = data
  i1786.m_MotorSpeed = i1787[0]
  i1786.m_MaximumMotorTorque = i1787[1]
  return i1786
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1788 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1789 = data
  i1788.m_DampingRatio = i1789[0]
  i1788.m_Frequency = i1789[1]
  i1788.m_Angle = i1789[2]
  return i1788
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1790 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1791 = data
  i1790.m_LowerTranslation = i1791[0]
  i1790.m_UpperTranslation = i1791[1]
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1793 = data
  i1792.name = i1793[0]
  i1792.width = i1793[1]
  i1792.height = i1793[2]
  i1792.mipmapCount = i1793[3]
  i1792.anisoLevel = i1793[4]
  i1792.filterMode = i1793[5]
  i1792.hdr = !!i1793[6]
  i1792.format = i1793[7]
  i1792.wrapMode = i1793[8]
  i1792.alphaIsTransparency = !!i1793[9]
  i1792.alphaSource = i1793[10]
  i1792.graphicsFormat = i1793[11]
  i1792.sRGBTexture = !!i1793[12]
  i1792.desiredColorSpace = i1793[13]
  i1792.wrapU = i1793[14]
  i1792.wrapV = i1793[15]
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1794 = root || new pc.UnityMaterial()
  var i1795 = data
  i1794.name = i1795[0]
  request.r(i1795[1], i1795[2], 0, i1794, 'shader')
  i1794.renderQueue = i1795[3]
  i1794.enableInstancing = !!i1795[4]
  var i1797 = i1795[5]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1797[i + 0]) );
  }
  i1794.floatParameters = i1796
  var i1799 = i1795[6]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1799[i + 0]) );
  }
  i1794.colorParameters = i1798
  var i1801 = i1795[7]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1801[i + 0]) );
  }
  i1794.vectorParameters = i1800
  var i1803 = i1795[8]
  var i1802 = []
  for(var i = 0; i < i1803.length; i += 1) {
    i1802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1803[i + 0]) );
  }
  i1794.textureParameters = i1802
  var i1805 = i1795[9]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1805[i + 0]) );
  }
  i1794.materialFlags = i1804
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1809 = data
  i1808.name = i1809[0]
  i1808.value = i1809[1]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1813 = data
  i1812.name = i1813[0]
  i1812.value = new pc.Color(i1813[1], i1813[2], i1813[3], i1813[4])
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1817 = data
  i1816.name = i1817[0]
  i1816.value = new pc.Vec4( i1817[1], i1817[2], i1817[3], i1817[4] )
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1821 = data
  i1820.name = i1821[0]
  request.r(i1821[1], i1821[2], 0, i1820, 'value')
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1825 = data
  i1824.name = i1825[0]
  i1824.enabled = !!i1825[1]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1827 = data
  i1826.name = i1827[0]
  i1826.index = i1827[1]
  i1826.startup = !!i1827[2]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1829 = data
  i1828.aspect = i1829[0]
  i1828.orthographic = !!i1829[1]
  i1828.orthographicSize = i1829[2]
  i1828.backgroundColor = new pc.Color(i1829[3], i1829[4], i1829[5], i1829[6])
  i1828.nearClipPlane = i1829[7]
  i1828.farClipPlane = i1829[8]
  i1828.fieldOfView = i1829[9]
  i1828.depth = i1829[10]
  i1828.clearFlags = i1829[11]
  i1828.cullingMask = i1829[12]
  i1828.rect = i1829[13]
  request.r(i1829[14], i1829[15], 0, i1828, 'targetTexture')
  i1828.usePhysicalProperties = !!i1829[16]
  i1828.focalLength = i1829[17]
  i1828.sensorSize = new pc.Vec2( i1829[18], i1829[19] )
  i1828.lensShift = new pc.Vec2( i1829[20], i1829[21] )
  i1828.gateFit = i1829[22]
  i1828.commandBufferCount = i1829[23]
  i1828.cameraType = i1829[24]
  i1828.enabled = !!i1829[25]
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1831 = data
  i1830.name = i1831[0]
  i1830.tagId = i1831[1]
  i1830.enabled = !!i1831[2]
  i1830.isStatic = !!i1831[3]
  i1830.layer = i1831[4]
  return i1830
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1832 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1833 = data
  request.r(i1833[0], i1833[1], 0, i1832, 'm_FirstSelected')
  i1832.m_sendNavigationEvents = !!i1833[2]
  i1832.m_DragThreshold = i1833[3]
  return i1832
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1834 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1835 = data
  i1834.m_HorizontalAxis = i1835[0]
  i1834.m_VerticalAxis = i1835[1]
  i1834.m_SubmitButton = i1835[2]
  i1834.m_CancelButton = i1835[3]
  i1834.m_InputActionsPerSecond = i1835[4]
  i1834.m_RepeatDelay = i1835[5]
  i1834.m_ForceModuleActive = !!i1835[6]
  i1834.m_SendPointerHoverToParent = !!i1835[7]
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1837 = data
  i1836.pivot = new pc.Vec2( i1837[0], i1837[1] )
  i1836.anchorMin = new pc.Vec2( i1837[2], i1837[3] )
  i1836.anchorMax = new pc.Vec2( i1837[4], i1837[5] )
  i1836.sizeDelta = new pc.Vec2( i1837[6], i1837[7] )
  i1836.anchoredPosition3D = new pc.Vec3( i1837[8], i1837[9], i1837[10] )
  i1836.rotation = new pc.Quat(i1837[11], i1837[12], i1837[13], i1837[14])
  i1836.scale = new pc.Vec3( i1837[15], i1837[16], i1837[17] )
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1839 = data
  i1838.planeDistance = i1839[0]
  i1838.referencePixelsPerUnit = i1839[1]
  i1838.isFallbackOverlay = !!i1839[2]
  i1838.renderMode = i1839[3]
  i1838.renderOrder = i1839[4]
  i1838.sortingLayerName = i1839[5]
  i1838.sortingOrder = i1839[6]
  i1838.scaleFactor = i1839[7]
  request.r(i1839[8], i1839[9], 0, i1838, 'worldCamera')
  i1838.overrideSorting = !!i1839[10]
  i1838.pixelPerfect = !!i1839[11]
  i1838.targetDisplay = i1839[12]
  i1838.overridePixelPerfect = !!i1839[13]
  i1838.enabled = !!i1839[14]
  return i1838
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1840 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1841 = data
  i1840.m_UiScaleMode = i1841[0]
  i1840.m_ReferencePixelsPerUnit = i1841[1]
  i1840.m_ScaleFactor = i1841[2]
  i1840.m_ReferenceResolution = new pc.Vec2( i1841[3], i1841[4] )
  i1840.m_ScreenMatchMode = i1841[5]
  i1840.m_MatchWidthOrHeight = i1841[6]
  i1840.m_PhysicalUnit = i1841[7]
  i1840.m_FallbackScreenDPI = i1841[8]
  i1840.m_DefaultSpriteDPI = i1841[9]
  i1840.m_DynamicPixelsPerUnit = i1841[10]
  i1840.m_PresetInfoIsWorld = !!i1841[11]
  return i1840
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1842 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1843 = data
  i1842.m_IgnoreReversedGraphics = !!i1843[0]
  i1842.m_BlockingObjects = i1843[1]
  i1842.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1843[2] )
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1845 = data
  i1844.cullTransparentMesh = !!i1845[0]
  return i1844
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1846 = root || request.c( 'UnityEngine.UI.Image' )
  var i1847 = data
  request.r(i1847[0], i1847[1], 0, i1846, 'm_Sprite')
  i1846.m_Type = i1847[2]
  i1846.m_PreserveAspect = !!i1847[3]
  i1846.m_FillCenter = !!i1847[4]
  i1846.m_FillMethod = i1847[5]
  i1846.m_FillAmount = i1847[6]
  i1846.m_FillClockwise = !!i1847[7]
  i1846.m_FillOrigin = i1847[8]
  i1846.m_UseSpriteMesh = !!i1847[9]
  i1846.m_PixelsPerUnitMultiplier = i1847[10]
  request.r(i1847[11], i1847[12], 0, i1846, 'm_Material')
  i1846.m_Maskable = !!i1847[13]
  i1846.m_Color = new pc.Color(i1847[14], i1847[15], i1847[16], i1847[17])
  i1846.m_RaycastTarget = !!i1847[18]
  i1846.m_RaycastPadding = new pc.Vec4( i1847[19], i1847[20], i1847[21], i1847[22] )
  return i1846
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1848 = root || request.c( 'UnityEngine.UI.Text' )
  var i1849 = data
  i1848.m_FontData = request.d('UnityEngine.UI.FontData', i1849[0], i1848.m_FontData)
  i1848.m_Text = i1849[1]
  request.r(i1849[2], i1849[3], 0, i1848, 'm_Material')
  i1848.m_Maskable = !!i1849[4]
  i1848.m_Color = new pc.Color(i1849[5], i1849[6], i1849[7], i1849[8])
  i1848.m_RaycastTarget = !!i1849[9]
  i1848.m_RaycastPadding = new pc.Vec4( i1849[10], i1849[11], i1849[12], i1849[13] )
  return i1848
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1850 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1851 = data
  request.r(i1851[0], i1851[1], 0, i1850, 'm_Font')
  i1850.m_FontSize = i1851[2]
  i1850.m_FontStyle = i1851[3]
  i1850.m_BestFit = !!i1851[4]
  i1850.m_MinSize = i1851[5]
  i1850.m_MaxSize = i1851[6]
  i1850.m_Alignment = i1851[7]
  i1850.m_AlignByGeometry = !!i1851[8]
  i1850.m_RichText = !!i1851[9]
  i1850.m_HorizontalOverflow = i1851[10]
  i1850.m_VerticalOverflow = i1851[11]
  i1850.m_LineSpacing = i1851[12]
  return i1850
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1852 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1853 = data
  request.r(i1853[0], i1853[1], 0, i1852, 'm_FillRect')
  request.r(i1853[2], i1853[3], 0, i1852, 'm_HandleRect')
  i1852.m_Direction = i1853[4]
  i1852.m_MinValue = i1853[5]
  i1852.m_MaxValue = i1853[6]
  i1852.m_WholeNumbers = !!i1853[7]
  i1852.m_Value = i1853[8]
  i1852.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1853[9], i1852.m_OnValueChanged)
  i1852.m_Navigation = request.d('UnityEngine.UI.Navigation', i1853[10], i1852.m_Navigation)
  i1852.m_Transition = i1853[11]
  i1852.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1853[12], i1852.m_Colors)
  i1852.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1853[13], i1852.m_SpriteState)
  i1852.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1853[14], i1852.m_AnimationTriggers)
  i1852.m_Interactable = !!i1853[15]
  request.r(i1853[16], i1853[17], 0, i1852, 'm_TargetGraphic')
  return i1852
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1854 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1855 = data
  i1854.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1855[0], i1854.m_PersistentCalls)
  return i1854
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1857 = data
  var i1859 = i1857[0]
  var i1858 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.add(request.d('UnityEngine.Events.PersistentCall', i1859[i + 0]));
  }
  i1856.m_Calls = i1858
  return i1856
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1862 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1863 = data
  request.r(i1863[0], i1863[1], 0, i1862, 'm_Target')
  i1862.m_TargetAssemblyTypeName = i1863[2]
  i1862.m_MethodName = i1863[3]
  i1862.m_Mode = i1863[4]
  i1862.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1863[5], i1862.m_Arguments)
  i1862.m_CallState = i1863[6]
  return i1862
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1864 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1865 = data
  i1864.m_Mode = i1865[0]
  i1864.m_WrapAround = !!i1865[1]
  request.r(i1865[2], i1865[3], 0, i1864, 'm_SelectOnUp')
  request.r(i1865[4], i1865[5], 0, i1864, 'm_SelectOnDown')
  request.r(i1865[6], i1865[7], 0, i1864, 'm_SelectOnLeft')
  request.r(i1865[8], i1865[9], 0, i1864, 'm_SelectOnRight')
  return i1864
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1866 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1867 = data
  i1866.m_NormalColor = new pc.Color(i1867[0], i1867[1], i1867[2], i1867[3])
  i1866.m_HighlightedColor = new pc.Color(i1867[4], i1867[5], i1867[6], i1867[7])
  i1866.m_PressedColor = new pc.Color(i1867[8], i1867[9], i1867[10], i1867[11])
  i1866.m_SelectedColor = new pc.Color(i1867[12], i1867[13], i1867[14], i1867[15])
  i1866.m_DisabledColor = new pc.Color(i1867[16], i1867[17], i1867[18], i1867[19])
  i1866.m_ColorMultiplier = i1867[20]
  i1866.m_FadeDuration = i1867[21]
  return i1866
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1868 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1869 = data
  request.r(i1869[0], i1869[1], 0, i1868, 'm_HighlightedSprite')
  request.r(i1869[2], i1869[3], 0, i1868, 'm_PressedSprite')
  request.r(i1869[4], i1869[5], 0, i1868, 'm_SelectedSprite')
  request.r(i1869[6], i1869[7], 0, i1868, 'm_DisabledSprite')
  return i1868
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1870 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1871 = data
  i1870.m_NormalTrigger = i1871[0]
  i1870.m_HighlightedTrigger = i1871[1]
  i1870.m_PressedTrigger = i1871[2]
  i1870.m_SelectedTrigger = i1871[3]
  i1870.m_DisabledTrigger = i1871[4]
  return i1870
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1872 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1873 = data
  i1872.m_ShowMaskGraphic = !!i1873[0]
  return i1872
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1874 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1875 = data
  request.r(i1875[0], i1875[1], 0, i1874, 'skeletonDataAsset')
  request.r(i1875[2], i1875[3], 0, i1874, 'additiveMaterial')
  request.r(i1875[4], i1875[5], 0, i1874, 'multiplyMaterial')
  request.r(i1875[6], i1875[7], 0, i1874, 'screenMaterial')
  i1874.forceAdditiveMaterial = !!i1875[8]
  i1874.initialSkinName = i1875[9]
  i1874.initialFlipX = !!i1875[10]
  i1874.initialFlipY = !!i1875[11]
  i1874.startingAnimation = i1875[12]
  i1874.startingLoop = !!i1875[13]
  i1874.timeScale = i1875[14]
  i1874.freeze = !!i1875[15]
  i1874.layoutScaleMode = i1875[16]
  i1874.updateWhenInvisible = i1875[17]
  i1874.allowMultipleCanvasRenderers = !!i1875[18]
  var i1877 = i1875[19]
  var i1876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1877.length; i += 2) {
  request.r(i1877[i + 0], i1877[i + 1], 1, i1876, '')
  }
  i1874.canvasRenderers = i1876
  i1874.enableSeparatorSlots = !!i1875[20]
  i1874.updateSeparatorPartLocation = !!i1875[21]
  i1874.updateSeparatorPartScale = !!i1875[22]
  i1874.disableMeshAssignmentOnOverride = !!i1875[23]
  i1874.m_SkeletonColor = new pc.Color(i1875[24], i1875[25], i1875[26], i1875[27])
  i1874.referenceSize = new pc.Vec2( i1875[28], i1875[29] )
  i1874.pivotOffset = new pc.Vec2( i1875[30], i1875[31] )
  i1874.referenceScale = i1875[32]
  i1874.layoutScale = i1875[33]
  i1874.rectTransformSize = new pc.Vec2( i1875[34], i1875[35] )
  i1874.editReferenceRect = !!i1875[36]
  var i1879 = i1875[37]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( i1879[i + 0] );
  }
  i1874.separatorSlotNames = i1878
  var i1881 = i1875[38]
  var i1880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1881.length; i += 2) {
  request.r(i1881[i + 0], i1881[i + 1], 1, i1880, '')
  }
  i1874.separatorParts = i1880
  i1874.physicsPositionInheritanceFactor = new pc.Vec2( i1875[39], i1875[40] )
  i1874.physicsRotationInheritanceFactor = i1875[41]
  request.r(i1875[42], i1875[43], 0, i1874, 'physicsMovementRelativeTo')
  i1874.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1875[44], i1874.meshGenerator)
  i1874.updateTiming = i1875[45]
  i1874.unscaledTime = !!i1875[46]
  request.r(i1875[47], i1875[48], 0, i1874, 'm_Material')
  i1874.m_Maskable = !!i1875[49]
  i1874.m_Color = new pc.Color(i1875[50], i1875[51], i1875[52], i1875[53])
  i1874.m_RaycastTarget = !!i1875[54]
  i1874.m_RaycastPadding = new pc.Vec4( i1875[55], i1875[56], i1875[57], i1875[58] )
  return i1874
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1888 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1889 = data
  i1888.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1889[0], i1888.settings)
  return i1888
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1890 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1891 = data
  i1890.useClipping = !!i1891[0]
  i1890.zSpacing = i1891[1]
  i1890.tintBlack = !!i1891[2]
  i1890.canvasGroupCompatible = !!i1891[3]
  i1890.pmaVertexColors = !!i1891[4]
  i1890.addNormals = !!i1891[5]
  i1890.calculateTangents = !!i1891[6]
  i1890.immutableTriangles = !!i1891[7]
  return i1890
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i1892 = root || request.c( 'AnimationController' )
  var i1893 = data
  request.r(i1893[0], i1893[1], 0, i1892, 'skeleton')
  var i1895 = i1893[2]
  var i1894 = new (System.Collections.Generic.List$1(Bridge.ns('Anim')))
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.add(request.d('Anim', i1895[i + 0]));
  }
  i1892.anims = i1894
  return i1892
}

Deserializers["Anim"] = function (request, data, root) {
  var i1898 = root || request.c( 'Anim' )
  var i1899 = data
  i1898.Key = i1899[0]
  var i1901 = i1899[1]
  var i1900 = new (System.Collections.Generic.List$1(Bridge.ns('Sound')))
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.add(request.d('Sound', i1901[i + 0]));
  }
  i1898.Sounds = i1900
  i1898.Loop = !!i1899[2]
  i1898.Next = !!i1899[3]
  i1898.NextTime = i1899[4]
  i1898.DestroyOnComplete = !!i1899[5]
  return i1898
}

Deserializers["Sound"] = function (request, data, root) {
  var i1904 = root || request.c( 'Sound' )
  var i1905 = data
  i1904.TimeDelay = i1905[0]
  request.r(i1905[1], i1905[2], 0, i1904, 'Clip')
  return i1904
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1906 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1907 = data
  i1906.targetIsSelf = !!i1907[0]
  request.r(i1907[1], i1907[2], 0, i1906, 'targetGO')
  i1906.tweenTargetIsTargetGO = !!i1907[3]
  i1906.delay = i1907[4]
  i1906.duration = i1907[5]
  i1906.easeType = i1907[6]
  i1906.easeCurve = new pc.AnimationCurve( { keys_flow: i1907[7] } )
  i1906.loopType = i1907[8]
  i1906.loops = i1907[9]
  i1906.id = i1907[10]
  i1906.isRelative = !!i1907[11]
  i1906.isFrom = !!i1907[12]
  i1906.isIndependentUpdate = !!i1907[13]
  i1906.autoKill = !!i1907[14]
  i1906.autoGenerate = !!i1907[15]
  i1906.isActive = !!i1907[16]
  i1906.isValid = !!i1907[17]
  request.r(i1907[18], i1907[19], 0, i1906, 'target')
  i1906.animationType = i1907[20]
  i1906.targetType = i1907[21]
  i1906.forcedTargetType = i1907[22]
  i1906.autoPlay = !!i1907[23]
  i1906.useTargetAsV3 = !!i1907[24]
  i1906.endValueFloat = i1907[25]
  i1906.endValueV3 = new pc.Vec3( i1907[26], i1907[27], i1907[28] )
  i1906.endValueV2 = new pc.Vec2( i1907[29], i1907[30] )
  i1906.endValueColor = new pc.Color(i1907[31], i1907[32], i1907[33], i1907[34])
  i1906.endValueString = i1907[35]
  i1906.endValueRect = UnityEngine.Rect.MinMaxRect(i1907[36], i1907[37], i1907[38], i1907[39])
  request.r(i1907[40], i1907[41], 0, i1906, 'endValueTransform')
  i1906.optionalBool0 = !!i1907[42]
  i1906.optionalBool1 = !!i1907[43]
  i1906.optionalFloat0 = i1907[44]
  i1906.optionalInt0 = i1907[45]
  i1906.optionalRotationMode = i1907[46]
  i1906.optionalScrambleMode = i1907[47]
  i1906.optionalShakeRandomnessMode = i1907[48]
  i1906.optionalString = i1907[49]
  i1906.updateType = i1907[50]
  i1906.isSpeedBased = !!i1907[51]
  i1906.hasOnStart = !!i1907[52]
  i1906.hasOnPlay = !!i1907[53]
  i1906.hasOnUpdate = !!i1907[54]
  i1906.hasOnStepComplete = !!i1907[55]
  i1906.hasOnComplete = !!i1907[56]
  i1906.hasOnTweenCreated = !!i1907[57]
  i1906.hasOnRewind = !!i1907[58]
  i1906.onStart = request.d('UnityEngine.Events.UnityEvent', i1907[59], i1906.onStart)
  i1906.onPlay = request.d('UnityEngine.Events.UnityEvent', i1907[60], i1906.onPlay)
  i1906.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1907[61], i1906.onUpdate)
  i1906.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1907[62], i1906.onStepComplete)
  i1906.onComplete = request.d('UnityEngine.Events.UnityEvent', i1907[63], i1906.onComplete)
  i1906.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1907[64], i1906.onTweenCreated)
  i1906.onRewind = request.d('UnityEngine.Events.UnityEvent', i1907[65], i1906.onRewind)
  return i1906
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1908 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1909 = data
  i1908.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1909[0], i1908.m_PersistentCalls)
  return i1908
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1910 = root || request.c( 'UnityEngine.UI.Button' )
  var i1911 = data
  i1910.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1911[0], i1910.m_OnClick)
  i1910.m_Navigation = request.d('UnityEngine.UI.Navigation', i1911[1], i1910.m_Navigation)
  i1910.m_Transition = i1911[2]
  i1910.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1911[3], i1910.m_Colors)
  i1910.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1911[4], i1910.m_SpriteState)
  i1910.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1911[5], i1910.m_AnimationTriggers)
  i1910.m_Interactable = !!i1911[6]
  request.r(i1911[7], i1911[8], 0, i1910, 'm_TargetGraphic')
  return i1910
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1912 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1913 = data
  i1912.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1913[0], i1912.m_PersistentCalls)
  return i1912
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1914 = root || request.c( 'LunaController' )
  var i1915 = data
  i1914.TimePlay = i1915[0]
  i1914.CountPlay = i1915[1]
  i1914.BGColor = new pc.Color(i1915[2], i1915[3], i1915[4], i1915[5])
  i1914.GameBGColor = new pc.Color(i1915[6], i1915[7], i1915[8], i1915[9])
  i1914.LevelTextColor = new pc.Color(i1915[10], i1915[11], i1915[12], i1915[13])
  i1914.TitleTextColor = new pc.Color(i1915[14], i1915[15], i1915[16], i1915[17])
  request.r(i1915[18], i1915[19], 0, i1914, 'time')
  request.r(i1915[20], i1915[21], 0, i1914, 'BGImage')
  request.r(i1915[22], i1915[23], 0, i1914, 'GameBGImage')
  request.r(i1915[24], i1915[25], 0, i1914, 'levelText')
  request.r(i1915[26], i1915[27], 0, i1914, 'titleText')
  request.r(i1915[28], i1915[29], 0, i1914, 'subBG')
  request.r(i1915[30], i1915[31], 0, i1914, 'endCard')
  var i1917 = i1915[32]
  var i1916 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1917.length; i += 2) {
  request.r(i1917[i + 0], i1917[i + 1], 1, i1916, '')
  }
  i1914.CTA = i1916
  i1914.count = i1915[33]
  return i1914
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1920 = root || request.c( 'LayoutController' )
  var i1921 = data
  request.r(i1921[0], i1921[1], 0, i1920, 'CTA')
  i1920.hide = !!i1921[2]
  return i1920
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1922 = root || request.c( 'AudioController' )
  var i1923 = data
  request.r(i1923[0], i1923[1], 0, i1922, 'BGM')
  request.r(i1923[2], i1923[3], 0, i1922, 'musicSource')
  request.r(i1923[4], i1923[5], 0, i1922, 'SFXPool')
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1925 = data
  request.r(i1925[0], i1925[1], 0, i1924, 'clip')
  request.r(i1925[2], i1925[3], 0, i1924, 'outputAudioMixerGroup')
  i1924.playOnAwake = !!i1925[4]
  i1924.loop = !!i1925[5]
  i1924.time = i1925[6]
  i1924.volume = i1925[7]
  i1924.pitch = i1925[8]
  i1924.enabled = !!i1925[9]
  return i1924
}

Deserializers["InteractController"] = function (request, data, root) {
  var i1926 = root || request.c( 'InteractController' )
  var i1927 = data
  request.r(i1927[0], i1927[1], 0, i1926, 'canvas')
  request.r(i1927[2], i1927[3], 0, i1926, 'tut')
  return i1926
}

Deserializers["GameController"] = function (request, data, root) {
  var i1928 = root || request.c( 'GameController' )
  var i1929 = data
  i1928.OnComplete = request.d('System.Action', i1929[0], i1928.OnComplete)
  i1928.CompleteStep = request.d('System.Action', i1929[1], i1928.CompleteStep)
  var i1931 = i1929[2]
  var i1930 = new (System.Collections.Generic.List$1(Bridge.ns('SkeletonAnim')))
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.add(request.d('SkeletonAnim', i1931[i + 0]));
  }
  i1928.skeletons = i1930
  i1928.complete = !!i1929[3]
  i1928.currentStep = i1929[4]
  i1928.maxStep = i1929[5]
  request.r(i1929[6], i1929[7], 0, i1928, 'currentStepText')
  request.r(i1929[8], i1929[9], 0, i1928, 'maxStepText')
  request.r(i1929[10], i1929[11], 0, i1928, 'slider')
  i1928.DelayComplete = i1929[12]
  return i1928
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1932 = root || request.c( 'System.Action' )
  var i1933 = data
  return i1932
}

Deserializers["SkeletonAnim"] = function (request, data, root) {
  var i1936 = root || request.c( 'SkeletonAnim' )
  var i1937 = data
  request.r(i1937[0], i1937[1], 0, i1936, 'Area')
  request.r(i1937[2], i1937[3], 0, i1936, 'Anim')
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1939 = data
  i1938.ambientIntensity = i1939[0]
  i1938.reflectionIntensity = i1939[1]
  i1938.ambientMode = i1939[2]
  i1938.ambientLight = new pc.Color(i1939[3], i1939[4], i1939[5], i1939[6])
  i1938.ambientSkyColor = new pc.Color(i1939[7], i1939[8], i1939[9], i1939[10])
  i1938.ambientGroundColor = new pc.Color(i1939[11], i1939[12], i1939[13], i1939[14])
  i1938.ambientEquatorColor = new pc.Color(i1939[15], i1939[16], i1939[17], i1939[18])
  i1938.fogColor = new pc.Color(i1939[19], i1939[20], i1939[21], i1939[22])
  i1938.fogEndDistance = i1939[23]
  i1938.fogStartDistance = i1939[24]
  i1938.fogDensity = i1939[25]
  i1938.fog = !!i1939[26]
  request.r(i1939[27], i1939[28], 0, i1938, 'skybox')
  i1938.fogMode = i1939[29]
  var i1941 = i1939[30]
  var i1940 = []
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1941[i + 0]) );
  }
  i1938.lightmaps = i1940
  i1938.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1939[31], i1938.lightProbes)
  i1938.lightmapsMode = i1939[32]
  i1938.mixedBakeMode = i1939[33]
  i1938.environmentLightingMode = i1939[34]
  i1938.ambientProbe = new pc.SphericalHarmonicsL2(i1939[35])
  request.r(i1939[36], i1939[37], 0, i1938, 'customReflection')
  request.r(i1939[38], i1939[39], 0, i1938, 'defaultReflection')
  i1938.defaultReflectionMode = i1939[40]
  i1938.defaultReflectionResolution = i1939[41]
  i1938.sunLightObjectId = i1939[42]
  i1938.pixelLightCount = i1939[43]
  i1938.defaultReflectionHDR = !!i1939[44]
  i1938.hasLightDataAsset = !!i1939[45]
  i1938.hasManualGenerate = !!i1939[46]
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1945 = data
  request.r(i1945[0], i1945[1], 0, i1944, 'lightmapColor')
  request.r(i1945[2], i1945[3], 0, i1944, 'lightmapDirection')
  request.r(i1945[4], i1945[5], 0, i1944, 'shadowMask')
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1946 = root || new UnityEngine.LightProbes()
  var i1947 = data
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1955 = data
  var i1957 = i1955[0]
  var i1956 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1957[i + 0]));
  }
  i1954.ShaderCompilationErrors = i1956
  i1954.name = i1955[1]
  i1954.guid = i1955[2]
  var i1959 = i1955[3]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.push( i1959[i + 0] );
  }
  i1954.shaderDefinedKeywords = i1958
  var i1961 = i1955[4]
  var i1960 = []
  for(var i = 0; i < i1961.length; i += 1) {
    i1960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1961[i + 0]) );
  }
  i1954.passes = i1960
  var i1963 = i1955[5]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1963[i + 0]) );
  }
  i1954.usePasses = i1962
  var i1965 = i1955[6]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1965[i + 0]) );
  }
  i1954.defaultParameterValues = i1964
  request.r(i1955[7], i1955[8], 0, i1954, 'unityFallbackShader')
  i1954.readDepth = !!i1955[9]
  i1954.hasDepthOnlyPass = !!i1955[10]
  i1954.isCreatedByShaderGraph = !!i1955[11]
  i1954.disableBatching = !!i1955[12]
  i1954.compiled = !!i1955[13]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1969 = data
  i1968.shaderName = i1969[0]
  i1968.errorMessage = i1969[1]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1972 = root || new pc.UnityShaderPass()
  var i1973 = data
  i1972.id = i1973[0]
  i1972.subShaderIndex = i1973[1]
  i1972.name = i1973[2]
  i1972.passType = i1973[3]
  i1972.grabPassTextureName = i1973[4]
  i1972.usePass = !!i1973[5]
  i1972.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[6], i1972.zTest)
  i1972.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[7], i1972.zWrite)
  i1972.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[8], i1972.culling)
  i1972.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1973[9], i1972.blending)
  i1972.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1973[10], i1972.alphaBlending)
  i1972.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[11], i1972.colorWriteMask)
  i1972.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[12], i1972.offsetUnits)
  i1972.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[13], i1972.offsetFactor)
  i1972.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[14], i1972.stencilRef)
  i1972.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[15], i1972.stencilReadMask)
  i1972.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1973[16], i1972.stencilWriteMask)
  i1972.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1973[17], i1972.stencilOp)
  i1972.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1973[18], i1972.stencilOpFront)
  i1972.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1973[19], i1972.stencilOpBack)
  var i1975 = i1973[20]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1975[i + 0]) );
  }
  i1972.tags = i1974
  var i1977 = i1973[21]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.push( i1977[i + 0] );
  }
  i1972.passDefinedKeywords = i1976
  var i1979 = i1973[22]
  var i1978 = []
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1979[i + 0]) );
  }
  i1972.passDefinedKeywordGroups = i1978
  var i1981 = i1973[23]
  var i1980 = []
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1981[i + 0]) );
  }
  i1972.variants = i1980
  var i1983 = i1973[24]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1983[i + 0]) );
  }
  i1972.excludedVariants = i1982
  i1972.hasDepthReader = !!i1973[25]
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1985 = data
  i1984.val = i1985[0]
  i1984.name = i1985[1]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1987 = data
  i1986.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1987[0], i1986.src)
  i1986.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1987[1], i1986.dst)
  i1986.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1987[2], i1986.op)
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1989 = data
  i1988.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[0], i1988.pass)
  i1988.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[1], i1988.fail)
  i1988.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[2], i1988.zFail)
  i1988.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[3], i1988.comp)
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1993 = data
  i1992.name = i1993[0]
  i1992.value = i1993[1]
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1997 = data
  var i1999 = i1997[0]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( i1999[i + 0] );
  }
  i1996.keywords = i1998
  i1996.hasDiscard = !!i1997[1]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2003 = data
  i2002.passId = i2003[0]
  i2002.subShaderIndex = i2003[1]
  var i2005 = i2003[2]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( i2005[i + 0] );
  }
  i2002.keywords = i2004
  i2002.vertexProgram = i2003[3]
  i2002.fragmentProgram = i2003[4]
  i2002.exportedForWebGl2 = !!i2003[5]
  i2002.readDepth = !!i2003[6]
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2009 = data
  request.r(i2009[0], i2009[1], 0, i2008, 'shader')
  i2008.pass = i2009[2]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2013 = data
  i2012.name = i2013[0]
  i2012.type = i2013[1]
  i2012.value = new pc.Vec4( i2013[2], i2013[3], i2013[4], i2013[5] )
  i2012.textureValue = i2013[6]
  i2012.shaderPropertyFlag = i2013[7]
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2015 = data
  i2014.name = i2015[0]
  request.r(i2015[1], i2015[2], 0, i2014, 'texture')
  i2014.aabb = i2015[3]
  i2014.vertices = i2015[4]
  i2014.triangles = i2015[5]
  i2014.textureRect = UnityEngine.Rect.MinMaxRect(i2015[6], i2015[7], i2015[8], i2015[9])
  i2014.packedRect = UnityEngine.Rect.MinMaxRect(i2015[10], i2015[11], i2015[12], i2015[13])
  i2014.border = new pc.Vec4( i2015[14], i2015[15], i2015[16], i2015[17] )
  i2014.transparency = i2015[18]
  i2014.bounds = i2015[19]
  i2014.pixelsPerUnit = i2015[20]
  i2014.textureWidth = i2015[21]
  i2014.textureHeight = i2015[22]
  i2014.nativeSize = new pc.Vec2( i2015[23], i2015[24] )
  i2014.pivot = new pc.Vec2( i2015[25], i2015[26] )
  i2014.textureRectOffset = new pc.Vec2( i2015[27], i2015[28] )
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2017 = data
  i2016.name = i2017[0]
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2019 = data
  i2018.name = i2019[0]
  i2018.ascent = i2019[1]
  i2018.originalLineHeight = i2019[2]
  i2018.fontSize = i2019[3]
  var i2021 = i2019[4]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2021[i + 0]) );
  }
  i2018.characterInfo = i2020
  request.r(i2019[5], i2019[6], 0, i2018, 'texture')
  i2018.originalFontSize = i2019[7]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2025 = data
  i2024.index = i2025[0]
  i2024.advance = i2025[1]
  i2024.bearing = i2025[2]
  i2024.glyphWidth = i2025[3]
  i2024.glyphHeight = i2025[4]
  i2024.minX = i2025[5]
  i2024.maxX = i2025[6]
  i2024.minY = i2025[7]
  i2024.maxY = i2025[8]
  i2024.uvBottomLeftX = i2025[9]
  i2024.uvBottomLeftY = i2025[10]
  i2024.uvBottomRightX = i2025[11]
  i2024.uvBottomRightY = i2025[12]
  i2024.uvTopLeftX = i2025[13]
  i2024.uvTopLeftY = i2025[14]
  i2024.uvTopRightX = i2025[15]
  i2024.uvTopRightY = i2025[16]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2027 = data
  i2026.name = i2027[0]
  i2026.bytes64 = i2027[1]
  i2026.data = i2027[2]
  return i2026
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2028 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2029 = data
  var i2031 = i2029[0]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 2) {
  request.r(i2031[i + 0], i2031[i + 1], 2, i2030, '')
  }
  i2028.atlasAssets = i2030
  i2028.scale = i2029[1]
  request.r(i2029[2], i2029[3], 0, i2028, 'skeletonJSON')
  i2028.isUpgradingBlendModeMaterials = !!i2029[4]
  i2028.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2029[5], i2028.blendModeMaterials)
  var i2033 = i2029[6]
  var i2032 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2033.length; i += 2) {
  request.r(i2033[i + 0], i2033[i + 1], 1, i2032, '')
  }
  i2028.skeletonDataModifiers = i2032
  var i2035 = i2029[7]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.push( i2035[i + 0] );
  }
  i2028.fromAnimation = i2034
  var i2037 = i2029[8]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.push( i2037[i + 0] );
  }
  i2028.toAnimation = i2036
  i2028.duration = i2029[9]
  i2028.defaultMix = i2029[10]
  request.r(i2029[11], i2029[12], 0, i2028, 'controller')
  return i2028
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2040 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2041 = data
  i2040.applyAdditiveMaterial = !!i2041[0]
  var i2043 = i2041[1]
  var i2042 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2043[i + 0]));
  }
  i2040.additiveMaterials = i2042
  var i2045 = i2041[2]
  var i2044 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2045[i + 0]));
  }
  i2040.multiplyMaterials = i2044
  var i2047 = i2041[3]
  var i2046 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2047[i + 0]));
  }
  i2040.screenMaterials = i2046
  i2040.requiresBlendModeMaterials = !!i2041[4]
  return i2040
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2050 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2051 = data
  i2050.pageName = i2051[0]
  request.r(i2051[1], i2051[2], 0, i2050, 'material')
  return i2050
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2054 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2055 = data
  request.r(i2055[0], i2055[1], 0, i2054, 'atlasFile')
  var i2057 = i2055[2]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 2) {
  request.r(i2057[i + 0], i2057[i + 1], 2, i2056, '')
  }
  i2054.materials = i2056
  i2054.textureLoadingMode = i2055[3]
  request.r(i2055[4], i2055[5], 0, i2054, 'onDemandTextureLoader')
  return i2054
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2060 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2061 = data
  i2060.useSafeMode = !!i2061[0]
  i2060.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2061[1], i2060.safeModeOptions)
  i2060.timeScale = i2061[2]
  i2060.unscaledTimeScale = i2061[3]
  i2060.useSmoothDeltaTime = !!i2061[4]
  i2060.maxSmoothUnscaledTime = i2061[5]
  i2060.rewindCallbackMode = i2061[6]
  i2060.showUnityEditorReport = !!i2061[7]
  i2060.logBehaviour = i2061[8]
  i2060.drawGizmos = !!i2061[9]
  i2060.defaultRecyclable = !!i2061[10]
  i2060.defaultAutoPlay = i2061[11]
  i2060.defaultUpdateType = i2061[12]
  i2060.defaultTimeScaleIndependent = !!i2061[13]
  i2060.defaultEaseType = i2061[14]
  i2060.defaultEaseOvershootOrAmplitude = i2061[15]
  i2060.defaultEasePeriod = i2061[16]
  i2060.defaultAutoKill = !!i2061[17]
  i2060.defaultLoopType = i2061[18]
  i2060.debugMode = !!i2061[19]
  i2060.debugStoreTargetId = !!i2061[20]
  i2060.showPreviewPanel = !!i2061[21]
  i2060.storeSettingsLocation = i2061[22]
  i2060.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2061[23], i2060.modules)
  i2060.createASMDEF = !!i2061[24]
  i2060.showPlayingTweens = !!i2061[25]
  i2060.showPausedTweens = !!i2061[26]
  return i2060
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2062 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2063 = data
  i2062.logBehaviour = i2063[0]
  i2062.nestedTweenFailureBehaviour = i2063[1]
  return i2062
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2064 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2065 = data
  i2064.showPanel = !!i2065[0]
  i2064.audioEnabled = !!i2065[1]
  i2064.physicsEnabled = !!i2065[2]
  i2064.physics2DEnabled = !!i2065[3]
  i2064.spriteEnabled = !!i2065[4]
  i2064.uiEnabled = !!i2065[5]
  i2064.textMeshProEnabled = !!i2065[6]
  i2064.tk2DEnabled = !!i2065[7]
  i2064.deAudioEnabled = !!i2065[8]
  i2064.deUnityExtendedEnabled = !!i2065[9]
  i2064.epoOutlineEnabled = !!i2065[10]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2067 = data
  var i2069 = i2067[0]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2069[i + 0]) );
  }
  i2066.files = i2068
  i2066.componentToPrefabIds = i2067[1]
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2073 = data
  i2072.path = i2073[0]
  request.r(i2073[1], i2073[2], 0, i2072, 'unityObject')
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2075 = data
  var i2077 = i2075[0]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2077[i + 0]) );
  }
  i2074.scriptsExecutionOrder = i2076
  var i2079 = i2075[1]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2079[i + 0]) );
  }
  i2074.sortingLayers = i2078
  var i2081 = i2075[2]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2081[i + 0]) );
  }
  i2074.cullingLayers = i2080
  i2074.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2075[3], i2074.timeSettings)
  i2074.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2075[4], i2074.physicsSettings)
  i2074.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2075[5], i2074.physics2DSettings)
  i2074.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2075[6], i2074.qualitySettings)
  i2074.enableRealtimeShadows = !!i2075[7]
  i2074.enableAutoInstancing = !!i2075[8]
  i2074.enableStaticBatching = !!i2075[9]
  i2074.enableDynamicBatching = !!i2075[10]
  i2074.usePreservativeDynamicBatching = !!i2075[11]
  i2074.lightmapEncodingQuality = i2075[12]
  i2074.desiredColorSpace = i2075[13]
  var i2083 = i2075[14]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( i2083[i + 0] );
  }
  i2074.allTags = i2082
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2087 = data
  i2086.name = i2087[0]
  i2086.value = i2087[1]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2091 = data
  i2090.id = i2091[0]
  i2090.name = i2091[1]
  i2090.value = i2091[2]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2095 = data
  i2094.id = i2095[0]
  i2094.name = i2095[1]
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2097 = data
  i2096.fixedDeltaTime = i2097[0]
  i2096.maximumDeltaTime = i2097[1]
  i2096.timeScale = i2097[2]
  i2096.maximumParticleTimestep = i2097[3]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2099 = data
  i2098.gravity = new pc.Vec3( i2099[0], i2099[1], i2099[2] )
  i2098.defaultSolverIterations = i2099[3]
  i2098.bounceThreshold = i2099[4]
  i2098.autoSyncTransforms = !!i2099[5]
  i2098.autoSimulation = !!i2099[6]
  var i2101 = i2099[7]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2101[i + 0]) );
  }
  i2098.collisionMatrix = i2100
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2105 = data
  i2104.enabled = !!i2105[0]
  i2104.layerId = i2105[1]
  i2104.otherLayerId = i2105[2]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2107 = data
  request.r(i2107[0], i2107[1], 0, i2106, 'material')
  i2106.gravity = new pc.Vec2( i2107[2], i2107[3] )
  i2106.positionIterations = i2107[4]
  i2106.velocityIterations = i2107[5]
  i2106.velocityThreshold = i2107[6]
  i2106.maxLinearCorrection = i2107[7]
  i2106.maxAngularCorrection = i2107[8]
  i2106.maxTranslationSpeed = i2107[9]
  i2106.maxRotationSpeed = i2107[10]
  i2106.baumgarteScale = i2107[11]
  i2106.baumgarteTOIScale = i2107[12]
  i2106.timeToSleep = i2107[13]
  i2106.linearSleepTolerance = i2107[14]
  i2106.angularSleepTolerance = i2107[15]
  i2106.defaultContactOffset = i2107[16]
  i2106.autoSimulation = !!i2107[17]
  i2106.queriesHitTriggers = !!i2107[18]
  i2106.queriesStartInColliders = !!i2107[19]
  i2106.callbacksOnDisable = !!i2107[20]
  i2106.reuseCollisionCallbacks = !!i2107[21]
  i2106.autoSyncTransforms = !!i2107[22]
  var i2109 = i2107[23]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2109[i + 0]) );
  }
  i2106.collisionMatrix = i2108
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2113 = data
  i2112.enabled = !!i2113[0]
  i2112.layerId = i2113[1]
  i2112.otherLayerId = i2113[2]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2115 = data
  var i2117 = i2115[0]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2117[i + 0]) );
  }
  i2114.qualityLevels = i2116
  var i2119 = i2115[1]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.push( i2119[i + 0] );
  }
  i2114.names = i2118
  i2114.shadows = i2115[2]
  i2114.anisotropicFiltering = i2115[3]
  i2114.antiAliasing = i2115[4]
  i2114.lodBias = i2115[5]
  i2114.shadowCascades = i2115[6]
  i2114.shadowDistance = i2115[7]
  i2114.shadowmaskMode = i2115[8]
  i2114.shadowProjection = i2115[9]
  i2114.shadowResolution = i2115[10]
  i2114.softParticles = !!i2115[11]
  i2114.softVegetation = !!i2115[12]
  i2114.activeColorSpace = i2115[13]
  i2114.desiredColorSpace = i2115[14]
  i2114.masterTextureLimit = i2115[15]
  i2114.maxQueuedFrames = i2115[16]
  i2114.particleRaycastBudget = i2115[17]
  i2114.pixelLightCount = i2115[18]
  i2114.realtimeReflectionProbes = !!i2115[19]
  i2114.shadowCascade2Split = i2115[20]
  i2114.shadowCascade4Split = new pc.Vec3( i2115[21], i2115[22], i2115[23] )
  i2114.streamingMipmapsActive = !!i2115[24]
  i2114.vSyncCount = i2115[25]
  i2114.asyncUploadBufferSize = i2115[26]
  i2114.asyncUploadTimeSlice = i2115[27]
  i2114.billboardsFaceCameraPosition = !!i2115[28]
  i2114.shadowNearPlaneOffset = i2115[29]
  i2114.streamingMipmapsMemoryBudget = i2115[30]
  i2114.maximumLODLevel = i2115[31]
  i2114.streamingMipmapsAddAllCameras = !!i2115[32]
  i2114.streamingMipmapsMaxLevelReduction = i2115[33]
  i2114.streamingMipmapsRenderersPerFrame = i2115[34]
  i2114.resolutionScalingFixedDPIFactor = i2115[35]
  i2114.streamingMipmapsMaxFileIORequests = i2115[36]
  i2114.currentQualityLevel = i2115[37]
  return i2114
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2122 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2123 = data
  request.r(i2123[0], i2123[1], 0, i2122, 'm_ObjectArgument')
  i2122.m_ObjectArgumentAssemblyTypeName = i2123[2]
  i2122.m_IntArgument = i2123[3]
  i2122.m_FloatArgument = i2123[4]
  i2122.m_StringArgument = i2123[5]
  i2122.m_BoolArgument = !!i2123[6]
  return i2122
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"37":[38],"39":[38],"40":[38],"41":[38],"42":[38],"43":[38],"44":[45],"46":[2],"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[55],"63":[55],"64":[55],"65":[55],"66":[55],"67":[55],"68":[2],"69":[70],"71":[72],"73":[72],"8":[7],"22":[18],"74":[75],"76":[7],"77":[11,7],"78":[70],"18":[11,7],"79":[80,70],"81":[70,82],"83":[70],"84":[48],"85":[55],"86":[75],"87":[88],"89":[90],"91":[2],"92":[93],"94":[7],"95":[11,7],"96":[70],"97":[11,7],"98":[7],"99":[7],"100":[70,7],"101":[7,11],"102":[103],"104":[103],"105":[103],"106":[7],"107":[7],"10":[8],"12":[11,7],"108":[7],"9":[8],"109":[7],"110":[7],"111":[7],"112":[7],"113":[7],"114":[7],"115":[7],"17":[7],"116":[7],"117":[11,7],"118":[7],"119":[7],"120":[7],"16":[7],"13":[11,7],"121":[7],"122":[5],"123":[5],"6":[5],"124":[5],"125":[2],"126":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.Slider","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","UnityEngine.AudioClip","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","LunaController","LayoutController","UnityEngine.GameObject","AudioController","UnityEngine.AudioSource","UnityEngine.Transform","InteractController","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "08/04/2026 07:03:05";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BM_V23_NgocBTU_TamNTM";

Deserializers.lunaAppID = "34530";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1935";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4829";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BMTP_Luna";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "ea42bb12-2f1b-477b-8eb0-14fce1d3d802";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

