var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2140 = root || request.c( 'UnityEngine.JointSpring' )
  var i2141 = data
  i2140.spring = i2141[0]
  i2140.damper = i2141[1]
  i2140.targetPosition = i2141[2]
  return i2140
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2142 = root || request.c( 'UnityEngine.JointMotor' )
  var i2143 = data
  i2142.m_TargetVelocity = i2143[0]
  i2142.m_Force = i2143[1]
  i2142.m_FreeSpin = i2143[2]
  return i2142
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2144 = root || request.c( 'UnityEngine.JointLimits' )
  var i2145 = data
  i2144.m_Min = i2145[0]
  i2144.m_Max = i2145[1]
  i2144.m_Bounciness = i2145[2]
  i2144.m_BounceMinVelocity = i2145[3]
  i2144.m_ContactDistance = i2145[4]
  i2144.minBounce = i2145[5]
  i2144.maxBounce = i2145[6]
  return i2144
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2146 = root || request.c( 'UnityEngine.JointDrive' )
  var i2147 = data
  i2146.m_PositionSpring = i2147[0]
  i2146.m_PositionDamper = i2147[1]
  i2146.m_MaximumForce = i2147[2]
  i2146.m_UseAcceleration = i2147[3]
  return i2146
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2148 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2149 = data
  i2148.m_Spring = i2149[0]
  i2148.m_Damper = i2149[1]
  return i2148
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2150 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2151 = data
  i2150.m_Limit = i2151[0]
  i2150.m_Bounciness = i2151[1]
  i2150.m_ContactDistance = i2151[2]
  return i2150
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2152 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2153 = data
  i2152.m_ExtremumSlip = i2153[0]
  i2152.m_ExtremumValue = i2153[1]
  i2152.m_AsymptoteSlip = i2153[2]
  i2152.m_AsymptoteValue = i2153[3]
  i2152.m_Stiffness = i2153[4]
  return i2152
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2154 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2155 = data
  i2154.m_LowerAngle = i2155[0]
  i2154.m_UpperAngle = i2155[1]
  return i2154
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2156 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2157 = data
  i2156.m_MotorSpeed = i2157[0]
  i2156.m_MaximumMotorTorque = i2157[1]
  return i2156
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2158 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2159 = data
  i2158.m_DampingRatio = i2159[0]
  i2158.m_Frequency = i2159[1]
  i2158.m_Angle = i2159[2]
  return i2158
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2161 = data
  i2160.m_LowerTranslation = i2161[0]
  i2160.m_UpperTranslation = i2161[1]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2163 = data
  i2162.name = i2163[0]
  i2162.width = i2163[1]
  i2162.height = i2163[2]
  i2162.mipmapCount = i2163[3]
  i2162.anisoLevel = i2163[4]
  i2162.filterMode = i2163[5]
  i2162.hdr = !!i2163[6]
  i2162.format = i2163[7]
  i2162.wrapMode = i2163[8]
  i2162.alphaIsTransparency = !!i2163[9]
  i2162.alphaSource = i2163[10]
  i2162.graphicsFormat = i2163[11]
  i2162.sRGBTexture = !!i2163[12]
  i2162.desiredColorSpace = i2163[13]
  i2162.wrapU = i2163[14]
  i2162.wrapV = i2163[15]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2164 = root || new pc.UnityMaterial()
  var i2165 = data
  i2164.name = i2165[0]
  request.r(i2165[1], i2165[2], 0, i2164, 'shader')
  i2164.renderQueue = i2165[3]
  i2164.enableInstancing = !!i2165[4]
  var i2167 = i2165[5]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2167[i + 0]) );
  }
  i2164.floatParameters = i2166
  var i2169 = i2165[6]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2169[i + 0]) );
  }
  i2164.colorParameters = i2168
  var i2171 = i2165[7]
  var i2170 = []
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2171[i + 0]) );
  }
  i2164.vectorParameters = i2170
  var i2173 = i2165[8]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2173[i + 0]) );
  }
  i2164.textureParameters = i2172
  var i2175 = i2165[9]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2175[i + 0]) );
  }
  i2164.materialFlags = i2174
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2179 = data
  i2178.name = i2179[0]
  i2178.value = i2179[1]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2183 = data
  i2182.name = i2183[0]
  i2182.value = new pc.Color(i2183[1], i2183[2], i2183[3], i2183[4])
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2187 = data
  i2186.name = i2187[0]
  i2186.value = new pc.Vec4( i2187[1], i2187[2], i2187[3], i2187[4] )
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2191 = data
  i2190.name = i2191[0]
  request.r(i2191[1], i2191[2], 0, i2190, 'value')
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2195 = data
  i2194.name = i2195[0]
  i2194.enabled = !!i2195[1]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2197 = data
  i2196.name = i2197[0]
  i2196.index = i2197[1]
  i2196.startup = !!i2197[2]
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2199 = data
  i2198.aspect = i2199[0]
  i2198.orthographic = !!i2199[1]
  i2198.orthographicSize = i2199[2]
  i2198.backgroundColor = new pc.Color(i2199[3], i2199[4], i2199[5], i2199[6])
  i2198.nearClipPlane = i2199[7]
  i2198.farClipPlane = i2199[8]
  i2198.fieldOfView = i2199[9]
  i2198.depth = i2199[10]
  i2198.clearFlags = i2199[11]
  i2198.cullingMask = i2199[12]
  i2198.rect = i2199[13]
  request.r(i2199[14], i2199[15], 0, i2198, 'targetTexture')
  i2198.usePhysicalProperties = !!i2199[16]
  i2198.focalLength = i2199[17]
  i2198.sensorSize = new pc.Vec2( i2199[18], i2199[19] )
  i2198.lensShift = new pc.Vec2( i2199[20], i2199[21] )
  i2198.gateFit = i2199[22]
  i2198.commandBufferCount = i2199[23]
  i2198.cameraType = i2199[24]
  i2198.enabled = !!i2199[25]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2201 = data
  i2200.name = i2201[0]
  i2200.tagId = i2201[1]
  i2200.enabled = !!i2201[2]
  i2200.isStatic = !!i2201[3]
  i2200.layer = i2201[4]
  return i2200
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2202 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2203 = data
  request.r(i2203[0], i2203[1], 0, i2202, 'm_FirstSelected')
  i2202.m_sendNavigationEvents = !!i2203[2]
  i2202.m_DragThreshold = i2203[3]
  return i2202
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2204 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2205 = data
  i2204.m_HorizontalAxis = i2205[0]
  i2204.m_VerticalAxis = i2205[1]
  i2204.m_SubmitButton = i2205[2]
  i2204.m_CancelButton = i2205[3]
  i2204.m_InputActionsPerSecond = i2205[4]
  i2204.m_RepeatDelay = i2205[5]
  i2204.m_ForceModuleActive = !!i2205[6]
  i2204.m_SendPointerHoverToParent = !!i2205[7]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2207 = data
  i2206.pivot = new pc.Vec2( i2207[0], i2207[1] )
  i2206.anchorMin = new pc.Vec2( i2207[2], i2207[3] )
  i2206.anchorMax = new pc.Vec2( i2207[4], i2207[5] )
  i2206.sizeDelta = new pc.Vec2( i2207[6], i2207[7] )
  i2206.anchoredPosition3D = new pc.Vec3( i2207[8], i2207[9], i2207[10] )
  i2206.rotation = new pc.Quat(i2207[11], i2207[12], i2207[13], i2207[14])
  i2206.scale = new pc.Vec3( i2207[15], i2207[16], i2207[17] )
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2209 = data
  i2208.planeDistance = i2209[0]
  i2208.referencePixelsPerUnit = i2209[1]
  i2208.isFallbackOverlay = !!i2209[2]
  i2208.renderMode = i2209[3]
  i2208.renderOrder = i2209[4]
  i2208.sortingLayerName = i2209[5]
  i2208.sortingOrder = i2209[6]
  i2208.scaleFactor = i2209[7]
  request.r(i2209[8], i2209[9], 0, i2208, 'worldCamera')
  i2208.overrideSorting = !!i2209[10]
  i2208.pixelPerfect = !!i2209[11]
  i2208.targetDisplay = i2209[12]
  i2208.overridePixelPerfect = !!i2209[13]
  i2208.enabled = !!i2209[14]
  return i2208
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2210 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2211 = data
  i2210.m_UiScaleMode = i2211[0]
  i2210.m_ReferencePixelsPerUnit = i2211[1]
  i2210.m_ScaleFactor = i2211[2]
  i2210.m_ReferenceResolution = new pc.Vec2( i2211[3], i2211[4] )
  i2210.m_ScreenMatchMode = i2211[5]
  i2210.m_MatchWidthOrHeight = i2211[6]
  i2210.m_PhysicalUnit = i2211[7]
  i2210.m_FallbackScreenDPI = i2211[8]
  i2210.m_DefaultSpriteDPI = i2211[9]
  i2210.m_DynamicPixelsPerUnit = i2211[10]
  i2210.m_PresetInfoIsWorld = !!i2211[11]
  return i2210
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2212 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2213 = data
  i2212.m_IgnoreReversedGraphics = !!i2213[0]
  i2212.m_BlockingObjects = i2213[1]
  i2212.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2213[2] )
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2215 = data
  i2214.cullTransparentMesh = !!i2215[0]
  return i2214
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2216 = root || request.c( 'UnityEngine.UI.Image' )
  var i2217 = data
  request.r(i2217[0], i2217[1], 0, i2216, 'm_Sprite')
  i2216.m_Type = i2217[2]
  i2216.m_PreserveAspect = !!i2217[3]
  i2216.m_FillCenter = !!i2217[4]
  i2216.m_FillMethod = i2217[5]
  i2216.m_FillAmount = i2217[6]
  i2216.m_FillClockwise = !!i2217[7]
  i2216.m_FillOrigin = i2217[8]
  i2216.m_UseSpriteMesh = !!i2217[9]
  i2216.m_PixelsPerUnitMultiplier = i2217[10]
  request.r(i2217[11], i2217[12], 0, i2216, 'm_Material')
  i2216.m_Maskable = !!i2217[13]
  i2216.m_Color = new pc.Color(i2217[14], i2217[15], i2217[16], i2217[17])
  i2216.m_RaycastTarget = !!i2217[18]
  i2216.m_RaycastPadding = new pc.Vec4( i2217[19], i2217[20], i2217[21], i2217[22] )
  return i2216
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2218 = root || request.c( 'UnityEngine.UI.Text' )
  var i2219 = data
  i2218.m_FontData = request.d('UnityEngine.UI.FontData', i2219[0], i2218.m_FontData)
  i2218.m_Text = i2219[1]
  request.r(i2219[2], i2219[3], 0, i2218, 'm_Material')
  i2218.m_Maskable = !!i2219[4]
  i2218.m_Color = new pc.Color(i2219[5], i2219[6], i2219[7], i2219[8])
  i2218.m_RaycastTarget = !!i2219[9]
  i2218.m_RaycastPadding = new pc.Vec4( i2219[10], i2219[11], i2219[12], i2219[13] )
  return i2218
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2220 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2221 = data
  request.r(i2221[0], i2221[1], 0, i2220, 'm_Font')
  i2220.m_FontSize = i2221[2]
  i2220.m_FontStyle = i2221[3]
  i2220.m_BestFit = !!i2221[4]
  i2220.m_MinSize = i2221[5]
  i2220.m_MaxSize = i2221[6]
  i2220.m_Alignment = i2221[7]
  i2220.m_AlignByGeometry = !!i2221[8]
  i2220.m_RichText = !!i2221[9]
  i2220.m_HorizontalOverflow = i2221[10]
  i2220.m_VerticalOverflow = i2221[11]
  i2220.m_LineSpacing = i2221[12]
  return i2220
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2222 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2223 = data
  request.r(i2223[0], i2223[1], 0, i2222, 'm_FillRect')
  request.r(i2223[2], i2223[3], 0, i2222, 'm_HandleRect')
  i2222.m_Direction = i2223[4]
  i2222.m_MinValue = i2223[5]
  i2222.m_MaxValue = i2223[6]
  i2222.m_WholeNumbers = !!i2223[7]
  i2222.m_Value = i2223[8]
  i2222.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2223[9], i2222.m_OnValueChanged)
  i2222.m_Navigation = request.d('UnityEngine.UI.Navigation', i2223[10], i2222.m_Navigation)
  i2222.m_Transition = i2223[11]
  i2222.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2223[12], i2222.m_Colors)
  i2222.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2223[13], i2222.m_SpriteState)
  i2222.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2223[14], i2222.m_AnimationTriggers)
  i2222.m_Interactable = !!i2223[15]
  request.r(i2223[16], i2223[17], 0, i2222, 'm_TargetGraphic')
  return i2222
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2224 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2225 = data
  i2224.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2225[0], i2224.m_PersistentCalls)
  return i2224
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2226 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2227 = data
  var i2229 = i2227[0]
  var i2228 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.add(request.d('UnityEngine.Events.PersistentCall', i2229[i + 0]));
  }
  i2226.m_Calls = i2228
  return i2226
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2232 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2233 = data
  request.r(i2233[0], i2233[1], 0, i2232, 'm_Target')
  i2232.m_TargetAssemblyTypeName = i2233[2]
  i2232.m_MethodName = i2233[3]
  i2232.m_Mode = i2233[4]
  i2232.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2233[5], i2232.m_Arguments)
  i2232.m_CallState = i2233[6]
  return i2232
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2234 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2235 = data
  i2234.m_Mode = i2235[0]
  i2234.m_WrapAround = !!i2235[1]
  request.r(i2235[2], i2235[3], 0, i2234, 'm_SelectOnUp')
  request.r(i2235[4], i2235[5], 0, i2234, 'm_SelectOnDown')
  request.r(i2235[6], i2235[7], 0, i2234, 'm_SelectOnLeft')
  request.r(i2235[8], i2235[9], 0, i2234, 'm_SelectOnRight')
  return i2234
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2236 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2237 = data
  i2236.m_NormalColor = new pc.Color(i2237[0], i2237[1], i2237[2], i2237[3])
  i2236.m_HighlightedColor = new pc.Color(i2237[4], i2237[5], i2237[6], i2237[7])
  i2236.m_PressedColor = new pc.Color(i2237[8], i2237[9], i2237[10], i2237[11])
  i2236.m_SelectedColor = new pc.Color(i2237[12], i2237[13], i2237[14], i2237[15])
  i2236.m_DisabledColor = new pc.Color(i2237[16], i2237[17], i2237[18], i2237[19])
  i2236.m_ColorMultiplier = i2237[20]
  i2236.m_FadeDuration = i2237[21]
  return i2236
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2238 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2239 = data
  request.r(i2239[0], i2239[1], 0, i2238, 'm_HighlightedSprite')
  request.r(i2239[2], i2239[3], 0, i2238, 'm_PressedSprite')
  request.r(i2239[4], i2239[5], 0, i2238, 'm_SelectedSprite')
  request.r(i2239[6], i2239[7], 0, i2238, 'm_DisabledSprite')
  return i2238
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2240 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2241 = data
  i2240.m_NormalTrigger = i2241[0]
  i2240.m_HighlightedTrigger = i2241[1]
  i2240.m_PressedTrigger = i2241[2]
  i2240.m_SelectedTrigger = i2241[3]
  i2240.m_DisabledTrigger = i2241[4]
  return i2240
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2242 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2243 = data
  i2242.m_ShowMaskGraphic = !!i2243[0]
  return i2242
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2244 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2245 = data
  request.r(i2245[0], i2245[1], 0, i2244, 'skeletonDataAsset')
  request.r(i2245[2], i2245[3], 0, i2244, 'additiveMaterial')
  request.r(i2245[4], i2245[5], 0, i2244, 'multiplyMaterial')
  request.r(i2245[6], i2245[7], 0, i2244, 'screenMaterial')
  i2244.initialSkinName = i2245[8]
  i2244.initialFlipX = !!i2245[9]
  i2244.initialFlipY = !!i2245[10]
  i2244.startingAnimation = i2245[11]
  i2244.startingLoop = !!i2245[12]
  i2244.timeScale = i2245[13]
  i2244.freeze = !!i2245[14]
  i2244.layoutScaleMode = i2245[15]
  i2244.updateWhenInvisible = i2245[16]
  i2244.allowMultipleCanvasRenderers = !!i2245[17]
  var i2247 = i2245[18]
  var i2246 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2247.length; i += 2) {
  request.r(i2247[i + 0], i2247[i + 1], 1, i2246, '')
  }
  i2244.canvasRenderers = i2246
  i2244.enableSeparatorSlots = !!i2245[19]
  i2244.updateSeparatorPartLocation = !!i2245[20]
  i2244.updateSeparatorPartScale = !!i2245[21]
  i2244.disableMeshAssignmentOnOverride = !!i2245[22]
  i2244.referenceSize = new pc.Vec2( i2245[23], i2245[24] )
  i2244.referenceScale = i2245[25]
  i2244.rectTransformSize = new pc.Vec2( i2245[26], i2245[27] )
  i2244.editReferenceRect = !!i2245[28]
  var i2249 = i2245[29]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( i2249[i + 0] );
  }
  i2244.separatorSlotNames = i2248
  var i2251 = i2245[30]
  var i2250 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2251.length; i += 2) {
  request.r(i2251[i + 0], i2251[i + 1], 1, i2250, '')
  }
  i2244.separatorParts = i2250
  i2244.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2245[31], i2244.meshGenerator)
  i2244.updateTiming = i2245[32]
  i2244.unscaledTime = !!i2245[33]
  request.r(i2245[34], i2245[35], 0, i2244, 'm_Material')
  i2244.m_Maskable = !!i2245[36]
  i2244.m_Color = new pc.Color(i2245[37], i2245[38], i2245[39], i2245[40])
  i2244.m_RaycastTarget = !!i2245[41]
  i2244.m_RaycastPadding = new pc.Vec4( i2245[42], i2245[43], i2245[44], i2245[45] )
  return i2244
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2258 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2259 = data
  i2258.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2259[0], i2258.settings)
  return i2258
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2260 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2261 = data
  i2260.useClipping = !!i2261[0]
  i2260.zSpacing = i2261[1]
  i2260.pmaVertexColors = !!i2261[2]
  i2260.tintBlack = !!i2261[3]
  i2260.canvasGroupTintBlack = !!i2261[4]
  i2260.calculateTangents = !!i2261[5]
  i2260.addNormals = !!i2261[6]
  i2260.immutableTriangles = !!i2261[7]
  return i2260
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i2262 = root || request.c( 'AnimationController' )
  var i2263 = data
  request.r(i2263[0], i2263[1], 0, i2262, 'skeleton')
  request.r(i2263[2], i2263[3], 0, i2262, 'item')
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2265 = data
  i2264.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2265[0], i2264.main)
  i2264.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2265[1], i2264.colorBySpeed)
  i2264.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2265[2], i2264.colorOverLifetime)
  i2264.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2265[3], i2264.emission)
  i2264.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2265[4], i2264.rotationBySpeed)
  i2264.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2265[5], i2264.rotationOverLifetime)
  i2264.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2265[6], i2264.shape)
  i2264.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2265[7], i2264.sizeBySpeed)
  i2264.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2265[8], i2264.sizeOverLifetime)
  i2264.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2265[9], i2264.textureSheetAnimation)
  i2264.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2265[10], i2264.velocityOverLifetime)
  i2264.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2265[11], i2264.noise)
  i2264.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2265[12], i2264.inheritVelocity)
  i2264.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2265[13], i2264.forceOverLifetime)
  i2264.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2265[14], i2264.limitVelocityOverLifetime)
  i2264.useAutoRandomSeed = !!i2265[15]
  i2264.randomSeed = i2265[16]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2266 = root || new pc.ParticleSystemMain()
  var i2267 = data
  i2266.duration = i2267[0]
  i2266.loop = !!i2267[1]
  i2266.prewarm = !!i2267[2]
  i2266.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[3], i2266.startDelay)
  i2266.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[4], i2266.startLifetime)
  i2266.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[5], i2266.startSpeed)
  i2266.startSize3D = !!i2267[6]
  i2266.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[7], i2266.startSizeX)
  i2266.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[8], i2266.startSizeY)
  i2266.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[9], i2266.startSizeZ)
  i2266.startRotation3D = !!i2267[10]
  i2266.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[11], i2266.startRotationX)
  i2266.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[12], i2266.startRotationY)
  i2266.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[13], i2266.startRotationZ)
  i2266.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2267[14], i2266.startColor)
  i2266.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[15], i2266.gravityModifier)
  i2266.simulationSpace = i2267[16]
  request.r(i2267[17], i2267[18], 0, i2266, 'customSimulationSpace')
  i2266.simulationSpeed = i2267[19]
  i2266.useUnscaledTime = !!i2267[20]
  i2266.scalingMode = i2267[21]
  i2266.playOnAwake = !!i2267[22]
  i2266.maxParticles = i2267[23]
  i2266.emitterVelocityMode = i2267[24]
  i2266.stopAction = i2267[25]
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2268 = root || new pc.MinMaxCurve()
  var i2269 = data
  i2268.mode = i2269[0]
  i2268.curveMin = new pc.AnimationCurve( { keys_flow: i2269[1] } )
  i2268.curveMax = new pc.AnimationCurve( { keys_flow: i2269[2] } )
  i2268.curveMultiplier = i2269[3]
  i2268.constantMin = i2269[4]
  i2268.constantMax = i2269[5]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2270 = root || new pc.MinMaxGradient()
  var i2271 = data
  i2270.mode = i2271[0]
  i2270.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2271[1], i2270.gradientMin)
  i2270.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2271[2], i2270.gradientMax)
  i2270.colorMin = new pc.Color(i2271[3], i2271[4], i2271[5], i2271[6])
  i2270.colorMax = new pc.Color(i2271[7], i2271[8], i2271[9], i2271[10])
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2273 = data
  i2272.mode = i2273[0]
  var i2275 = i2273[1]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2275[i + 0]) );
  }
  i2272.colorKeys = i2274
  var i2277 = i2273[2]
  var i2276 = []
  for(var i = 0; i < i2277.length; i += 1) {
    i2276.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2277[i + 0]) );
  }
  i2272.alphaKeys = i2276
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2278 = root || new pc.ParticleSystemColorBySpeed()
  var i2279 = data
  i2278.enabled = !!i2279[0]
  i2278.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2279[1], i2278.color)
  i2278.range = new pc.Vec2( i2279[2], i2279[3] )
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2283 = data
  i2282.color = new pc.Color(i2283[0], i2283[1], i2283[2], i2283[3])
  i2282.time = i2283[4]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2287 = data
  i2286.alpha = i2287[0]
  i2286.time = i2287[1]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2288 = root || new pc.ParticleSystemColorOverLifetime()
  var i2289 = data
  i2288.enabled = !!i2289[0]
  i2288.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2289[1], i2288.color)
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2290 = root || new pc.ParticleSystemEmitter()
  var i2291 = data
  i2290.enabled = !!i2291[0]
  i2290.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2291[1], i2290.rateOverTime)
  i2290.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2291[2], i2290.rateOverDistance)
  var i2293 = i2291[3]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2293[i + 0]) );
  }
  i2290.bursts = i2292
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2296 = root || new pc.ParticleSystemBurst()
  var i2297 = data
  i2296.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[0], i2296.count)
  i2296.cycleCount = i2297[1]
  i2296.minCount = i2297[2]
  i2296.maxCount = i2297[3]
  i2296.repeatInterval = i2297[4]
  i2296.time = i2297[5]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2298 = root || new pc.ParticleSystemRotationBySpeed()
  var i2299 = data
  i2298.enabled = !!i2299[0]
  i2298.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[1], i2298.x)
  i2298.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[2], i2298.y)
  i2298.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[3], i2298.z)
  i2298.separateAxes = !!i2299[4]
  i2298.range = new pc.Vec2( i2299[5], i2299[6] )
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2300 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2301 = data
  i2300.enabled = !!i2301[0]
  i2300.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[1], i2300.x)
  i2300.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[2], i2300.y)
  i2300.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[3], i2300.z)
  i2300.separateAxes = !!i2301[4]
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2302 = root || new pc.ParticleSystemShape()
  var i2303 = data
  i2302.enabled = !!i2303[0]
  i2302.shapeType = i2303[1]
  i2302.randomDirectionAmount = i2303[2]
  i2302.sphericalDirectionAmount = i2303[3]
  i2302.randomPositionAmount = i2303[4]
  i2302.alignToDirection = !!i2303[5]
  i2302.radius = i2303[6]
  i2302.radiusMode = i2303[7]
  i2302.radiusSpread = i2303[8]
  i2302.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[9], i2302.radiusSpeed)
  i2302.radiusThickness = i2303[10]
  i2302.angle = i2303[11]
  i2302.length = i2303[12]
  i2302.boxThickness = new pc.Vec3( i2303[13], i2303[14], i2303[15] )
  i2302.meshShapeType = i2303[16]
  request.r(i2303[17], i2303[18], 0, i2302, 'mesh')
  request.r(i2303[19], i2303[20], 0, i2302, 'meshRenderer')
  request.r(i2303[21], i2303[22], 0, i2302, 'skinnedMeshRenderer')
  i2302.useMeshMaterialIndex = !!i2303[23]
  i2302.meshMaterialIndex = i2303[24]
  i2302.useMeshColors = !!i2303[25]
  i2302.normalOffset = i2303[26]
  i2302.arc = i2303[27]
  i2302.arcMode = i2303[28]
  i2302.arcSpread = i2303[29]
  i2302.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[30], i2302.arcSpeed)
  i2302.donutRadius = i2303[31]
  i2302.position = new pc.Vec3( i2303[32], i2303[33], i2303[34] )
  i2302.rotation = new pc.Vec3( i2303[35], i2303[36], i2303[37] )
  i2302.scale = new pc.Vec3( i2303[38], i2303[39], i2303[40] )
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2304 = root || new pc.ParticleSystemSizeBySpeed()
  var i2305 = data
  i2304.enabled = !!i2305[0]
  i2304.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[1], i2304.x)
  i2304.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[2], i2304.y)
  i2304.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[3], i2304.z)
  i2304.separateAxes = !!i2305[4]
  i2304.range = new pc.Vec2( i2305[5], i2305[6] )
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2306 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2307 = data
  i2306.enabled = !!i2307[0]
  i2306.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[1], i2306.x)
  i2306.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[2], i2306.y)
  i2306.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[3], i2306.z)
  i2306.separateAxes = !!i2307[4]
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2308 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2309 = data
  i2308.enabled = !!i2309[0]
  i2308.mode = i2309[1]
  i2308.animation = i2309[2]
  i2308.numTilesX = i2309[3]
  i2308.numTilesY = i2309[4]
  i2308.useRandomRow = !!i2309[5]
  i2308.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[6], i2308.frameOverTime)
  i2308.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[7], i2308.startFrame)
  i2308.cycleCount = i2309[8]
  i2308.rowIndex = i2309[9]
  i2308.flipU = i2309[10]
  i2308.flipV = i2309[11]
  i2308.spriteCount = i2309[12]
  var i2311 = i2309[13]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 2) {
  request.r(i2311[i + 0], i2311[i + 1], 2, i2310, '')
  }
  i2308.sprites = i2310
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2314 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2315 = data
  i2314.enabled = !!i2315[0]
  i2314.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[1], i2314.x)
  i2314.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[2], i2314.y)
  i2314.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[3], i2314.z)
  i2314.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[4], i2314.radial)
  i2314.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[5], i2314.speedModifier)
  i2314.space = i2315[6]
  i2314.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[7], i2314.orbitalX)
  i2314.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[8], i2314.orbitalY)
  i2314.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[9], i2314.orbitalZ)
  i2314.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[10], i2314.orbitalOffsetX)
  i2314.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[11], i2314.orbitalOffsetY)
  i2314.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[12], i2314.orbitalOffsetZ)
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2316 = root || new pc.ParticleSystemNoise()
  var i2317 = data
  i2316.enabled = !!i2317[0]
  i2316.separateAxes = !!i2317[1]
  i2316.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[2], i2316.strengthX)
  i2316.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[3], i2316.strengthY)
  i2316.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[4], i2316.strengthZ)
  i2316.frequency = i2317[5]
  i2316.damping = !!i2317[6]
  i2316.octaveCount = i2317[7]
  i2316.octaveMultiplier = i2317[8]
  i2316.octaveScale = i2317[9]
  i2316.quality = i2317[10]
  i2316.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[11], i2316.scrollSpeed)
  i2316.scrollSpeedMultiplier = i2317[12]
  i2316.remapEnabled = !!i2317[13]
  i2316.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[14], i2316.remapX)
  i2316.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[15], i2316.remapY)
  i2316.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[16], i2316.remapZ)
  i2316.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[17], i2316.positionAmount)
  i2316.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[18], i2316.rotationAmount)
  i2316.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[19], i2316.sizeAmount)
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2318 = root || new pc.ParticleSystemInheritVelocity()
  var i2319 = data
  i2318.enabled = !!i2319[0]
  i2318.mode = i2319[1]
  i2318.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[2], i2318.curve)
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2320 = root || new pc.ParticleSystemForceOverLifetime()
  var i2321 = data
  i2320.enabled = !!i2321[0]
  i2320.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[1], i2320.x)
  i2320.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[2], i2320.y)
  i2320.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[3], i2320.z)
  i2320.space = i2321[4]
  i2320.randomized = !!i2321[5]
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2322 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2323 = data
  i2322.enabled = !!i2323[0]
  i2322.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[1], i2322.limit)
  i2322.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[2], i2322.limitX)
  i2322.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[3], i2322.limitY)
  i2322.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[4], i2322.limitZ)
  i2322.dampen = i2323[5]
  i2322.separateAxes = !!i2323[6]
  i2322.space = i2323[7]
  i2322.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[8], i2322.drag)
  i2322.multiplyDragByParticleSize = !!i2323[9]
  i2322.multiplyDragByParticleVelocity = !!i2323[10]
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2325 = data
  request.r(i2325[0], i2325[1], 0, i2324, 'mesh')
  i2324.meshCount = i2325[2]
  i2324.activeVertexStreamsCount = i2325[3]
  i2324.alignment = i2325[4]
  i2324.renderMode = i2325[5]
  i2324.sortMode = i2325[6]
  i2324.lengthScale = i2325[7]
  i2324.velocityScale = i2325[8]
  i2324.cameraVelocityScale = i2325[9]
  i2324.normalDirection = i2325[10]
  i2324.sortingFudge = i2325[11]
  i2324.minParticleSize = i2325[12]
  i2324.maxParticleSize = i2325[13]
  i2324.pivot = new pc.Vec3( i2325[14], i2325[15], i2325[16] )
  request.r(i2325[17], i2325[18], 0, i2324, 'trailMaterial')
  i2324.applyActiveColorSpace = !!i2325[19]
  i2324.enabled = !!i2325[20]
  request.r(i2325[21], i2325[22], 0, i2324, 'sharedMaterial')
  var i2327 = i2325[23]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 2) {
  request.r(i2327[i + 0], i2327[i + 1], 2, i2326, '')
  }
  i2324.sharedMaterials = i2326
  i2324.receiveShadows = !!i2325[24]
  i2324.shadowCastingMode = i2325[25]
  i2324.sortingLayerID = i2325[26]
  i2324.sortingOrder = i2325[27]
  i2324.lightmapIndex = i2325[28]
  i2324.lightmapSceneIndex = i2325[29]
  i2324.lightmapScaleOffset = new pc.Vec4( i2325[30], i2325[31], i2325[32], i2325[33] )
  i2324.lightProbeUsage = i2325[34]
  i2324.reflectionProbeUsage = i2325[35]
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2331 = data
  request.r(i2331[0], i2331[1], 0, i2330, 'clip')
  request.r(i2331[2], i2331[3], 0, i2330, 'outputAudioMixerGroup')
  i2330.playOnAwake = !!i2331[4]
  i2330.loop = !!i2331[5]
  i2330.time = i2331[6]
  i2330.volume = i2331[7]
  i2330.pitch = i2331[8]
  i2330.enabled = !!i2331[9]
  return i2330
}

Deserializers["CharacterSkinController"] = function (request, data, root) {
  var i2332 = root || request.c( 'CharacterSkinController' )
  var i2333 = data
  request.r(i2333[0], i2333[1], 0, i2332, 'skeletonAnimation')
  request.r(i2333[2], i2333[3], 0, i2332, 'thinData')
  i2332.smallFace = request.d('Item', i2333[4], i2332.smallFace)
  i2332.smallBody = request.d('Item', i2333[5], i2332.smallBody)
  i2332.accessory = request.d('Item', i2333[6], i2332.accessory)
  i2332.dress = request.d('Item', i2333[7], i2332.dress)
  i2332.glass = request.d('Item', i2333[8], i2332.glass)
  i2332.face = request.d('Item', i2333[9], i2332.face)
  i2332.hair = request.d('Item', i2333[10], i2332.hair)
  i2332.legHair = request.d('Item', i2333[11], i2332.legHair)
  i2332.smoke = request.d('Item', i2333[12], i2332.smoke)
  i2332.sock = request.d('Item', i2333[13], i2332.sock)
  return i2332
}

Deserializers["Item"] = function (request, data, root) {
  var i2334 = root || request.c( 'Item' )
  var i2335 = data
  request.r(i2335[0], i2335[1], 0, i2334, 'ActiveItem')
  request.r(i2335[2], i2335[3], 0, i2334, 'ActiveSound')
  return i2334
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2336 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2337 = data
  i2336.targetIsSelf = !!i2337[0]
  request.r(i2337[1], i2337[2], 0, i2336, 'targetGO')
  i2336.tweenTargetIsTargetGO = !!i2337[3]
  i2336.delay = i2337[4]
  i2336.duration = i2337[5]
  i2336.easeType = i2337[6]
  i2336.easeCurve = new pc.AnimationCurve( { keys_flow: i2337[7] } )
  i2336.loopType = i2337[8]
  i2336.loops = i2337[9]
  i2336.id = i2337[10]
  i2336.isRelative = !!i2337[11]
  i2336.isFrom = !!i2337[12]
  i2336.isIndependentUpdate = !!i2337[13]
  i2336.autoKill = !!i2337[14]
  i2336.autoGenerate = !!i2337[15]
  i2336.isActive = !!i2337[16]
  i2336.isValid = !!i2337[17]
  request.r(i2337[18], i2337[19], 0, i2336, 'target')
  i2336.animationType = i2337[20]
  i2336.targetType = i2337[21]
  i2336.forcedTargetType = i2337[22]
  i2336.autoPlay = !!i2337[23]
  i2336.useTargetAsV3 = !!i2337[24]
  i2336.endValueFloat = i2337[25]
  i2336.endValueV3 = new pc.Vec3( i2337[26], i2337[27], i2337[28] )
  i2336.endValueV2 = new pc.Vec2( i2337[29], i2337[30] )
  i2336.endValueColor = new pc.Color(i2337[31], i2337[32], i2337[33], i2337[34])
  i2336.endValueString = i2337[35]
  i2336.endValueRect = UnityEngine.Rect.MinMaxRect(i2337[36], i2337[37], i2337[38], i2337[39])
  request.r(i2337[40], i2337[41], 0, i2336, 'endValueTransform')
  i2336.optionalBool0 = !!i2337[42]
  i2336.optionalBool1 = !!i2337[43]
  i2336.optionalFloat0 = i2337[44]
  i2336.optionalInt0 = i2337[45]
  i2336.optionalRotationMode = i2337[46]
  i2336.optionalScrambleMode = i2337[47]
  i2336.optionalShakeRandomnessMode = i2337[48]
  i2336.optionalString = i2337[49]
  i2336.updateType = i2337[50]
  i2336.isSpeedBased = !!i2337[51]
  i2336.hasOnStart = !!i2337[52]
  i2336.hasOnPlay = !!i2337[53]
  i2336.hasOnUpdate = !!i2337[54]
  i2336.hasOnStepComplete = !!i2337[55]
  i2336.hasOnComplete = !!i2337[56]
  i2336.hasOnTweenCreated = !!i2337[57]
  i2336.hasOnRewind = !!i2337[58]
  i2336.onStart = request.d('UnityEngine.Events.UnityEvent', i2337[59], i2336.onStart)
  i2336.onPlay = request.d('UnityEngine.Events.UnityEvent', i2337[60], i2336.onPlay)
  i2336.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2337[61], i2336.onUpdate)
  i2336.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2337[62], i2336.onStepComplete)
  i2336.onComplete = request.d('UnityEngine.Events.UnityEvent', i2337[63], i2336.onComplete)
  i2336.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2337[64], i2336.onTweenCreated)
  i2336.onRewind = request.d('UnityEngine.Events.UnityEvent', i2337[65], i2336.onRewind)
  return i2336
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2338 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2339 = data
  i2338.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2339[0], i2338.m_PersistentCalls)
  return i2338
}

Deserializers["TutController"] = function (request, data, root) {
  var i2340 = root || request.c( 'TutController' )
  var i2341 = data
  request.r(i2341[0], i2341[1], 0, i2340, 'icon')
  request.r(i2341[2], i2341[3], 0, i2340, 'tutObject')
  i2340.toPos = new pc.Vec3( i2341[4], i2341[5], i2341[6] )
  i2340.timeMove = i2341[7]
  i2340.timeDelay = i2341[8]
  return i2340
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2342 = root || request.c( 'UnityEngine.UI.Button' )
  var i2343 = data
  i2342.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2343[0], i2342.m_OnClick)
  i2342.m_Navigation = request.d('UnityEngine.UI.Navigation', i2343[1], i2342.m_Navigation)
  i2342.m_Transition = i2343[2]
  i2342.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2343[3], i2342.m_Colors)
  i2342.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2343[4], i2342.m_SpriteState)
  i2342.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2343[5], i2342.m_AnimationTriggers)
  i2342.m_Interactable = !!i2343[6]
  request.r(i2343[7], i2343[8], 0, i2342, 'm_TargetGraphic')
  return i2342
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2344 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2345 = data
  i2344.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2345[0], i2344.m_PersistentCalls)
  return i2344
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2346 = root || request.c( 'LunaController' )
  var i2347 = data
  i2346.TimePlay = i2347[0]
  i2346.CountPlay = i2347[1]
  i2346.BGColor = new pc.Color(i2347[2], i2347[3], i2347[4], i2347[5])
  i2346.GameBGColor = new pc.Color(i2347[6], i2347[7], i2347[8], i2347[9])
  i2346.LevelTextColor = new pc.Color(i2347[10], i2347[11], i2347[12], i2347[13])
  i2346.TitleTextColor = new pc.Color(i2347[14], i2347[15], i2347[16], i2347[17])
  i2346.SubBGColor = new pc.Color(i2347[18], i2347[19], i2347[20], i2347[21])
  request.r(i2347[22], i2347[23], 0, i2346, 'time')
  request.r(i2347[24], i2347[25], 0, i2346, 'BGImage')
  request.r(i2347[26], i2347[27], 0, i2346, 'GameBGImage')
  request.r(i2347[28], i2347[29], 0, i2346, 'levelText')
  request.r(i2347[30], i2347[31], 0, i2346, 'titleText')
  request.r(i2347[32], i2347[33], 0, i2346, 'subBG')
  request.r(i2347[34], i2347[35], 0, i2346, 'endCard')
  var i2349 = i2347[36]
  var i2348 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2349.length; i += 2) {
  request.r(i2349[i + 0], i2349[i + 1], 1, i2348, '')
  }
  i2346.CTA = i2348
  i2346.count = i2347[37]
  return i2346
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i2352 = root || request.c( 'LayoutController' )
  var i2353 = data
  request.r(i2353[0], i2353[1], 0, i2352, 'CTA')
  i2352.hide = !!i2353[2]
  return i2352
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2354 = root || request.c( 'AudioController' )
  var i2355 = data
  request.r(i2355[0], i2355[1], 0, i2354, 'BGM')
  request.r(i2355[2], i2355[3], 0, i2354, 'musicSource')
  request.r(i2355[4], i2355[5], 0, i2354, 'SFXPool')
  return i2354
}

Deserializers["InteractController"] = function (request, data, root) {
  var i2356 = root || request.c( 'InteractController' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'canvas')
  i2356.maxPos = new pc.Vec2( i2357[2], i2357[3] )
  i2356.minPos = new pc.Vec2( i2357[4], i2357[5] )
  var i2359 = i2357[6]
  var i2358 = new (System.Collections.Generic.List$1(Bridge.ns('ItemDrag')))
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.add(request.d('ItemDrag', i2359[i + 0]));
  }
  i2356.itemDrags = i2358
  var i2361 = i2357[7]
  var i2360 = new (System.Collections.Generic.List$1(Bridge.ns('ItemClick')))
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.add(request.d('ItemClick', i2361[i + 0]));
  }
  i2356.itemClicks = i2360
  i2356.currentTarget = request.d('ItemDrag', i2357[8], i2356.currentTarget)
  request.r(i2357[9], i2357[10], 0, i2356, 'pickupSound')
  request.r(i2357[11], i2357[12], 0, i2356, 'tut')
  request.r(i2357[13], i2357[14], 0, i2356, 'tut2')
  i2356.lockPlay = !!i2357[15]
  return i2356
}

Deserializers["ItemDrag"] = function (request, data, root) {
  var i2364 = root || request.c( 'ItemDrag' )
  var i2365 = data
  request.r(i2365[0], i2365[1], 0, i2364, 'DragArea')
  request.r(i2365[2], i2365[3], 0, i2364, 'Item')
  request.r(i2365[4], i2365[5], 0, i2364, 'Icon')
  return i2364
}

Deserializers["ItemClick"] = function (request, data, root) {
  var i2368 = root || request.c( 'ItemClick' )
  var i2369 = data
  request.r(i2369[0], i2369[1], 0, i2368, 'ClickArea')
  request.r(i2369[2], i2369[3], 0, i2368, 'Item')
  request.r(i2369[4], i2369[5], 0, i2368, 'Sound')
  request.r(i2369[6], i2369[7], 0, i2368, 'ActiveObject')
  return i2368
}

Deserializers["GameController"] = function (request, data, root) {
  var i2370 = root || request.c( 'GameController' )
  var i2371 = data
  i2370.OnComplete = request.d('System.Action', i2371[0], i2370.OnComplete)
  i2370.CompleteStep = request.d('System.Action', i2371[1], i2370.CompleteStep)
  var i2373 = i2371[2]
  var i2372 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationController')))
  for(var i = 0; i < i2373.length; i += 2) {
  request.r(i2373[i + 0], i2373[i + 1], 1, i2372, '')
  }
  i2370.skeletons = i2372
  request.r(i2371[3], i2371[4], 0, i2370, 'character')
  request.r(i2371[5], i2371[6], 0, i2370, 'normal')
  request.r(i2371[7], i2371[8], 0, i2370, 'win')
  request.r(i2371[9], i2371[10], 0, i2370, 'loseScene')
  request.r(i2371[11], i2371[12], 0, i2370, 'winScene')
  i2370.complete = !!i2371[13]
  i2370.currentStep = i2371[14]
  i2370.maxStep = i2371[15]
  request.r(i2371[16], i2371[17], 0, i2370, 'currentStepText')
  request.r(i2371[18], i2371[19], 0, i2370, 'maxStepText')
  request.r(i2371[20], i2371[21], 0, i2370, 'slider')
  i2370.DelayComplete = i2371[22]
  i2370.subTime = i2371[23]
  i2370.completeSub = request.d('Sub', i2371[24], i2370.completeSub)
  var i2375 = i2371[25]
  var i2374 = new (System.Collections.Generic.List$1(Bridge.ns('Sub')))
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.add(request.d('Sub', i2375[i + 0]));
  }
  i2370.subs = i2374
  request.r(i2371[26], i2371[27], 0, i2370, 'sub')
  request.r(i2371[28], i2371[29], 0, i2370, 'subText')
  return i2370
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2376 = root || request.c( 'System.Action' )
  var i2377 = data
  return i2376
}

Deserializers["Sub"] = function (request, data, root) {
  var i2380 = root || request.c( 'Sub' )
  var i2381 = data
  request.r(i2381[0], i2381[1], 0, i2380, 'Item')
  i2380.SubText = i2381[2]
  request.r(i2381[3], i2381[4], 0, i2380, 'SubSound')
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2385 = data
  i2384.ambientIntensity = i2385[0]
  i2384.reflectionIntensity = i2385[1]
  i2384.ambientMode = i2385[2]
  i2384.ambientLight = new pc.Color(i2385[3], i2385[4], i2385[5], i2385[6])
  i2384.ambientSkyColor = new pc.Color(i2385[7], i2385[8], i2385[9], i2385[10])
  i2384.ambientGroundColor = new pc.Color(i2385[11], i2385[12], i2385[13], i2385[14])
  i2384.ambientEquatorColor = new pc.Color(i2385[15], i2385[16], i2385[17], i2385[18])
  i2384.fogColor = new pc.Color(i2385[19], i2385[20], i2385[21], i2385[22])
  i2384.fogEndDistance = i2385[23]
  i2384.fogStartDistance = i2385[24]
  i2384.fogDensity = i2385[25]
  i2384.fog = !!i2385[26]
  request.r(i2385[27], i2385[28], 0, i2384, 'skybox')
  i2384.fogMode = i2385[29]
  var i2387 = i2385[30]
  var i2386 = []
  for(var i = 0; i < i2387.length; i += 1) {
    i2386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2387[i + 0]) );
  }
  i2384.lightmaps = i2386
  i2384.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2385[31], i2384.lightProbes)
  i2384.lightmapsMode = i2385[32]
  i2384.mixedBakeMode = i2385[33]
  i2384.environmentLightingMode = i2385[34]
  i2384.ambientProbe = new pc.SphericalHarmonicsL2(i2385[35])
  request.r(i2385[36], i2385[37], 0, i2384, 'customReflection')
  request.r(i2385[38], i2385[39], 0, i2384, 'defaultReflection')
  i2384.defaultReflectionMode = i2385[40]
  i2384.defaultReflectionResolution = i2385[41]
  i2384.sunLightObjectId = i2385[42]
  i2384.pixelLightCount = i2385[43]
  i2384.defaultReflectionHDR = !!i2385[44]
  i2384.hasLightDataAsset = !!i2385[45]
  i2384.hasManualGenerate = !!i2385[46]
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2391 = data
  request.r(i2391[0], i2391[1], 0, i2390, 'lightmapColor')
  request.r(i2391[2], i2391[3], 0, i2390, 'lightmapDirection')
  request.r(i2391[4], i2391[5], 0, i2390, 'shadowMask')
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2392 = root || new UnityEngine.LightProbes()
  var i2393 = data
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2401 = data
  var i2403 = i2401[0]
  var i2402 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2403[i + 0]));
  }
  i2400.ShaderCompilationErrors = i2402
  i2400.name = i2401[1]
  i2400.guid = i2401[2]
  var i2405 = i2401[3]
  var i2404 = []
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.push( i2405[i + 0] );
  }
  i2400.shaderDefinedKeywords = i2404
  var i2407 = i2401[4]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2407[i + 0]) );
  }
  i2400.passes = i2406
  var i2409 = i2401[5]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2409[i + 0]) );
  }
  i2400.usePasses = i2408
  var i2411 = i2401[6]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2411[i + 0]) );
  }
  i2400.defaultParameterValues = i2410
  request.r(i2401[7], i2401[8], 0, i2400, 'unityFallbackShader')
  i2400.readDepth = !!i2401[9]
  i2400.hasDepthOnlyPass = !!i2401[10]
  i2400.isCreatedByShaderGraph = !!i2401[11]
  i2400.disableBatching = !!i2401[12]
  i2400.compiled = !!i2401[13]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2415 = data
  i2414.shaderName = i2415[0]
  i2414.errorMessage = i2415[1]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2418 = root || new pc.UnityShaderPass()
  var i2419 = data
  i2418.id = i2419[0]
  i2418.subShaderIndex = i2419[1]
  i2418.name = i2419[2]
  i2418.passType = i2419[3]
  i2418.grabPassTextureName = i2419[4]
  i2418.usePass = !!i2419[5]
  i2418.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2419[6], i2418.zTest)
  i2418.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2419[7], i2418.zWrite)
  i2418.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2419[8], i2418.culling)
  i2418.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2419[9], i2418.blending)
  i2418.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2419[10], i2418.alphaBlending)
  i2418.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2419[11], i2418.colorWriteMask)
  i2418.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2419[12], i2418.offsetUnits)
  i2418.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2419[13], i2418.offsetFactor)
  i2418.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2419[14], i2418.stencilRef)
  i2418.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2419[15], i2418.stencilReadMask)
  i2418.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2419[16], i2418.stencilWriteMask)
  i2418.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2419[17], i2418.stencilOp)
  i2418.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2419[18], i2418.stencilOpFront)
  i2418.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2419[19], i2418.stencilOpBack)
  var i2421 = i2419[20]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2421[i + 0]) );
  }
  i2418.tags = i2420
  var i2423 = i2419[21]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.push( i2423[i + 0] );
  }
  i2418.passDefinedKeywords = i2422
  var i2425 = i2419[22]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2425[i + 0]) );
  }
  i2418.passDefinedKeywordGroups = i2424
  var i2427 = i2419[23]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2427[i + 0]) );
  }
  i2418.variants = i2426
  var i2429 = i2419[24]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2429[i + 0]) );
  }
  i2418.excludedVariants = i2428
  i2418.hasDepthReader = !!i2419[25]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2431 = data
  i2430.val = i2431[0]
  i2430.name = i2431[1]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2433 = data
  i2432.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2433[0], i2432.src)
  i2432.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2433[1], i2432.dst)
  i2432.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2433[2], i2432.op)
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2435 = data
  i2434.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[0], i2434.pass)
  i2434.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[1], i2434.fail)
  i2434.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[2], i2434.zFail)
  i2434.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[3], i2434.comp)
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2439 = data
  i2438.name = i2439[0]
  i2438.value = i2439[1]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2443 = data
  var i2445 = i2443[0]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( i2445[i + 0] );
  }
  i2442.keywords = i2444
  i2442.hasDiscard = !!i2443[1]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2449 = data
  i2448.passId = i2449[0]
  i2448.subShaderIndex = i2449[1]
  var i2451 = i2449[2]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( i2451[i + 0] );
  }
  i2448.keywords = i2450
  i2448.vertexProgram = i2449[3]
  i2448.fragmentProgram = i2449[4]
  i2448.exportedForWebGl2 = !!i2449[5]
  i2448.readDepth = !!i2449[6]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2455 = data
  request.r(i2455[0], i2455[1], 0, i2454, 'shader')
  i2454.pass = i2455[2]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2459 = data
  i2458.name = i2459[0]
  i2458.type = i2459[1]
  i2458.value = new pc.Vec4( i2459[2], i2459[3], i2459[4], i2459[5] )
  i2458.textureValue = i2459[6]
  i2458.shaderPropertyFlag = i2459[7]
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2461 = data
  i2460.name = i2461[0]
  request.r(i2461[1], i2461[2], 0, i2460, 'texture')
  i2460.aabb = i2461[3]
  i2460.vertices = i2461[4]
  i2460.triangles = i2461[5]
  i2460.textureRect = UnityEngine.Rect.MinMaxRect(i2461[6], i2461[7], i2461[8], i2461[9])
  i2460.packedRect = UnityEngine.Rect.MinMaxRect(i2461[10], i2461[11], i2461[12], i2461[13])
  i2460.border = new pc.Vec4( i2461[14], i2461[15], i2461[16], i2461[17] )
  i2460.transparency = i2461[18]
  i2460.bounds = i2461[19]
  i2460.pixelsPerUnit = i2461[20]
  i2460.textureWidth = i2461[21]
  i2460.textureHeight = i2461[22]
  i2460.nativeSize = new pc.Vec2( i2461[23], i2461[24] )
  i2460.pivot = new pc.Vec2( i2461[25], i2461[26] )
  i2460.textureRectOffset = new pc.Vec2( i2461[27], i2461[28] )
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2463 = data
  i2462.name = i2463[0]
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2465 = data
  i2464.name = i2465[0]
  i2464.ascent = i2465[1]
  i2464.originalLineHeight = i2465[2]
  i2464.fontSize = i2465[3]
  var i2467 = i2465[4]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2467[i + 0]) );
  }
  i2464.characterInfo = i2466
  request.r(i2465[5], i2465[6], 0, i2464, 'texture')
  i2464.originalFontSize = i2465[7]
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2471 = data
  i2470.index = i2471[0]
  i2470.advance = i2471[1]
  i2470.bearing = i2471[2]
  i2470.glyphWidth = i2471[3]
  i2470.glyphHeight = i2471[4]
  i2470.minX = i2471[5]
  i2470.maxX = i2471[6]
  i2470.minY = i2471[7]
  i2470.maxY = i2471[8]
  i2470.uvBottomLeftX = i2471[9]
  i2470.uvBottomLeftY = i2471[10]
  i2470.uvBottomRightX = i2471[11]
  i2470.uvBottomRightY = i2471[12]
  i2470.uvTopLeftX = i2471[13]
  i2470.uvTopLeftY = i2471[14]
  i2470.uvTopRightX = i2471[15]
  i2470.uvTopRightY = i2471[16]
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2473 = data
  i2472.name = i2473[0]
  i2472.bytes64 = i2473[1]
  i2472.data = i2473[2]
  return i2472
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2474 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2475 = data
  var i2477 = i2475[0]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 2) {
  request.r(i2477[i + 0], i2477[i + 1], 2, i2476, '')
  }
  i2474.atlasAssets = i2476
  i2474.scale = i2475[1]
  request.r(i2475[2], i2475[3], 0, i2474, 'skeletonJSON')
  i2474.isUpgradingBlendModeMaterials = !!i2475[4]
  i2474.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2475[5], i2474.blendModeMaterials)
  var i2479 = i2475[6]
  var i2478 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2479.length; i += 2) {
  request.r(i2479[i + 0], i2479[i + 1], 1, i2478, '')
  }
  i2474.skeletonDataModifiers = i2478
  var i2481 = i2475[7]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.push( i2481[i + 0] );
  }
  i2474.fromAnimation = i2480
  var i2483 = i2475[8]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( i2483[i + 0] );
  }
  i2474.toAnimation = i2482
  i2474.duration = i2475[9]
  i2474.defaultMix = i2475[10]
  request.r(i2475[11], i2475[12], 0, i2474, 'controller')
  return i2474
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2486 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2487 = data
  i2486.applyAdditiveMaterial = !!i2487[0]
  var i2489 = i2487[1]
  var i2488 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2489[i + 0]));
  }
  i2486.additiveMaterials = i2488
  var i2491 = i2487[2]
  var i2490 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2491[i + 0]));
  }
  i2486.multiplyMaterials = i2490
  var i2493 = i2487[3]
  var i2492 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2493[i + 0]));
  }
  i2486.screenMaterials = i2492
  i2486.requiresBlendModeMaterials = !!i2487[4]
  return i2486
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2496 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2497 = data
  i2496.pageName = i2497[0]
  request.r(i2497[1], i2497[2], 0, i2496, 'material')
  return i2496
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2500 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2501 = data
  request.r(i2501[0], i2501[1], 0, i2500, 'atlasFile')
  var i2503 = i2501[2]
  var i2502 = []
  for(var i = 0; i < i2503.length; i += 2) {
  request.r(i2503[i + 0], i2503[i + 1], 2, i2502, '')
  }
  i2500.materials = i2502
  i2500.textureLoadingMode = i2501[3]
  request.r(i2501[4], i2501[5], 0, i2500, 'onDemandTextureLoader')
  return i2500
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2504 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2505 = data
  i2504.useSafeMode = !!i2505[0]
  i2504.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2505[1], i2504.safeModeOptions)
  i2504.timeScale = i2505[2]
  i2504.unscaledTimeScale = i2505[3]
  i2504.useSmoothDeltaTime = !!i2505[4]
  i2504.maxSmoothUnscaledTime = i2505[5]
  i2504.rewindCallbackMode = i2505[6]
  i2504.showUnityEditorReport = !!i2505[7]
  i2504.logBehaviour = i2505[8]
  i2504.drawGizmos = !!i2505[9]
  i2504.defaultRecyclable = !!i2505[10]
  i2504.defaultAutoPlay = i2505[11]
  i2504.defaultUpdateType = i2505[12]
  i2504.defaultTimeScaleIndependent = !!i2505[13]
  i2504.defaultEaseType = i2505[14]
  i2504.defaultEaseOvershootOrAmplitude = i2505[15]
  i2504.defaultEasePeriod = i2505[16]
  i2504.defaultAutoKill = !!i2505[17]
  i2504.defaultLoopType = i2505[18]
  i2504.debugMode = !!i2505[19]
  i2504.debugStoreTargetId = !!i2505[20]
  i2504.showPreviewPanel = !!i2505[21]
  i2504.storeSettingsLocation = i2505[22]
  i2504.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2505[23], i2504.modules)
  i2504.createASMDEF = !!i2505[24]
  i2504.showPlayingTweens = !!i2505[25]
  i2504.showPausedTweens = !!i2505[26]
  return i2504
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2506 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2507 = data
  i2506.logBehaviour = i2507[0]
  i2506.nestedTweenFailureBehaviour = i2507[1]
  return i2506
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2508 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2509 = data
  i2508.showPanel = !!i2509[0]
  i2508.audioEnabled = !!i2509[1]
  i2508.physicsEnabled = !!i2509[2]
  i2508.physics2DEnabled = !!i2509[3]
  i2508.spriteEnabled = !!i2509[4]
  i2508.uiEnabled = !!i2509[5]
  i2508.textMeshProEnabled = !!i2509[6]
  i2508.tk2DEnabled = !!i2509[7]
  i2508.deAudioEnabled = !!i2509[8]
  i2508.deUnityExtendedEnabled = !!i2509[9]
  i2508.epoOutlineEnabled = !!i2509[10]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2511 = data
  var i2513 = i2511[0]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2513[i + 0]) );
  }
  i2510.files = i2512
  i2510.componentToPrefabIds = i2511[1]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2517 = data
  i2516.path = i2517[0]
  request.r(i2517[1], i2517[2], 0, i2516, 'unityObject')
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2519 = data
  var i2521 = i2519[0]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2521[i + 0]) );
  }
  i2518.scriptsExecutionOrder = i2520
  var i2523 = i2519[1]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2523[i + 0]) );
  }
  i2518.sortingLayers = i2522
  var i2525 = i2519[2]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2525[i + 0]) );
  }
  i2518.cullingLayers = i2524
  i2518.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2519[3], i2518.timeSettings)
  i2518.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2519[4], i2518.physicsSettings)
  i2518.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2519[5], i2518.physics2DSettings)
  i2518.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2519[6], i2518.qualitySettings)
  i2518.enableRealtimeShadows = !!i2519[7]
  i2518.enableAutoInstancing = !!i2519[8]
  i2518.enableStaticBatching = !!i2519[9]
  i2518.enableDynamicBatching = !!i2519[10]
  i2518.usePreservativeDynamicBatching = !!i2519[11]
  i2518.lightmapEncodingQuality = i2519[12]
  i2518.desiredColorSpace = i2519[13]
  var i2527 = i2519[14]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( i2527[i + 0] );
  }
  i2518.allTags = i2526
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2531 = data
  i2530.name = i2531[0]
  i2530.value = i2531[1]
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2535 = data
  i2534.id = i2535[0]
  i2534.name = i2535[1]
  i2534.value = i2535[2]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2539 = data
  i2538.id = i2539[0]
  i2538.name = i2539[1]
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2541 = data
  i2540.fixedDeltaTime = i2541[0]
  i2540.maximumDeltaTime = i2541[1]
  i2540.timeScale = i2541[2]
  i2540.maximumParticleTimestep = i2541[3]
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2543 = data
  i2542.gravity = new pc.Vec3( i2543[0], i2543[1], i2543[2] )
  i2542.defaultSolverIterations = i2543[3]
  i2542.bounceThreshold = i2543[4]
  i2542.autoSyncTransforms = !!i2543[5]
  i2542.autoSimulation = !!i2543[6]
  var i2545 = i2543[7]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2545[i + 0]) );
  }
  i2542.collisionMatrix = i2544
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2549 = data
  i2548.enabled = !!i2549[0]
  i2548.layerId = i2549[1]
  i2548.otherLayerId = i2549[2]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2551 = data
  request.r(i2551[0], i2551[1], 0, i2550, 'material')
  i2550.gravity = new pc.Vec2( i2551[2], i2551[3] )
  i2550.positionIterations = i2551[4]
  i2550.velocityIterations = i2551[5]
  i2550.velocityThreshold = i2551[6]
  i2550.maxLinearCorrection = i2551[7]
  i2550.maxAngularCorrection = i2551[8]
  i2550.maxTranslationSpeed = i2551[9]
  i2550.maxRotationSpeed = i2551[10]
  i2550.baumgarteScale = i2551[11]
  i2550.baumgarteTOIScale = i2551[12]
  i2550.timeToSleep = i2551[13]
  i2550.linearSleepTolerance = i2551[14]
  i2550.angularSleepTolerance = i2551[15]
  i2550.defaultContactOffset = i2551[16]
  i2550.autoSimulation = !!i2551[17]
  i2550.queriesHitTriggers = !!i2551[18]
  i2550.queriesStartInColliders = !!i2551[19]
  i2550.callbacksOnDisable = !!i2551[20]
  i2550.reuseCollisionCallbacks = !!i2551[21]
  i2550.autoSyncTransforms = !!i2551[22]
  var i2553 = i2551[23]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2553[i + 0]) );
  }
  i2550.collisionMatrix = i2552
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2557 = data
  i2556.enabled = !!i2557[0]
  i2556.layerId = i2557[1]
  i2556.otherLayerId = i2557[2]
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2559 = data
  var i2561 = i2559[0]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2561[i + 0]) );
  }
  i2558.qualityLevels = i2560
  var i2563 = i2559[1]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( i2563[i + 0] );
  }
  i2558.names = i2562
  i2558.shadows = i2559[2]
  i2558.anisotropicFiltering = i2559[3]
  i2558.antiAliasing = i2559[4]
  i2558.lodBias = i2559[5]
  i2558.shadowCascades = i2559[6]
  i2558.shadowDistance = i2559[7]
  i2558.shadowmaskMode = i2559[8]
  i2558.shadowProjection = i2559[9]
  i2558.shadowResolution = i2559[10]
  i2558.softParticles = !!i2559[11]
  i2558.softVegetation = !!i2559[12]
  i2558.activeColorSpace = i2559[13]
  i2558.desiredColorSpace = i2559[14]
  i2558.masterTextureLimit = i2559[15]
  i2558.maxQueuedFrames = i2559[16]
  i2558.particleRaycastBudget = i2559[17]
  i2558.pixelLightCount = i2559[18]
  i2558.realtimeReflectionProbes = !!i2559[19]
  i2558.shadowCascade2Split = i2559[20]
  i2558.shadowCascade4Split = new pc.Vec3( i2559[21], i2559[22], i2559[23] )
  i2558.streamingMipmapsActive = !!i2559[24]
  i2558.vSyncCount = i2559[25]
  i2558.asyncUploadBufferSize = i2559[26]
  i2558.asyncUploadTimeSlice = i2559[27]
  i2558.billboardsFaceCameraPosition = !!i2559[28]
  i2558.shadowNearPlaneOffset = i2559[29]
  i2558.streamingMipmapsMemoryBudget = i2559[30]
  i2558.maximumLODLevel = i2559[31]
  i2558.streamingMipmapsAddAllCameras = !!i2559[32]
  i2558.streamingMipmapsMaxLevelReduction = i2559[33]
  i2558.streamingMipmapsRenderersPerFrame = i2559[34]
  i2558.resolutionScalingFixedDPIFactor = i2559[35]
  i2558.streamingMipmapsMaxFileIORequests = i2559[36]
  i2558.currentQualityLevel = i2559[37]
  return i2558
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2566 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2567 = data
  request.r(i2567[0], i2567[1], 0, i2566, 'm_ObjectArgument')
  i2566.m_ObjectArgumentAssemblyTypeName = i2567[2]
  i2566.m_IntArgument = i2567[3]
  i2566.m_FloatArgument = i2567[4]
  i2566.m_StringArgument = i2567[5]
  i2566.m_BoolArgument = !!i2567[6]
  return i2566
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[2],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[59],"67":[59],"68":[59],"69":[59],"70":[59],"71":[59],"72":[2],"73":[74],"75":[76],"77":[76],"8":[7],"22":[18],"78":[79],"80":[7],"81":[11,7],"82":[74],"18":[11,7],"83":[84,74],"85":[74,86],"87":[74],"88":[52],"89":[59],"90":[79],"91":[92],"93":[94],"95":[2],"96":[97],"98":[7],"99":[11,7],"100":[74],"101":[11,7],"102":[7],"103":[7],"104":[74,7],"105":[7,11],"106":[107],"108":[107],"109":[107],"110":[7],"111":[7],"10":[8],"12":[11,7],"112":[7],"9":[8],"113":[7],"114":[7],"115":[7],"116":[7],"117":[7],"118":[7],"119":[7],"17":[7],"120":[7],"121":[11,7],"122":[7],"123":[7],"124":[7],"16":[7],"13":[11,7],"125":[7],"126":[5],"127":[5],"6":[5],"128":[5],"129":[2],"130":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.Slider","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","UnityEngine.GameObject","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.AudioClip","CharacterSkinController","DG.Tweening.DOTweenAnimation","TutController","UnityEngine.UI.Button","LunaController","LayoutController","AudioController","UnityEngine.Transform","InteractController","GameController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "08/14/2026 06:35:56";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BP_V30_NgocNDL_TamNTM";

Deserializers.lunaAppID = "31727";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1869";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4334";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BMTP_Luna";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "f3367d5a-c06b-4da7-820d-bcb3a0c7308e";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

