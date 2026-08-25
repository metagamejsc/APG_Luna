var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2190 = root || request.c( 'UnityEngine.JointSpring' )
  var i2191 = data
  i2190.spring = i2191[0]
  i2190.damper = i2191[1]
  i2190.targetPosition = i2191[2]
  return i2190
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2192 = root || request.c( 'UnityEngine.JointMotor' )
  var i2193 = data
  i2192.m_TargetVelocity = i2193[0]
  i2192.m_Force = i2193[1]
  i2192.m_FreeSpin = i2193[2]
  return i2192
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2194 = root || request.c( 'UnityEngine.JointLimits' )
  var i2195 = data
  i2194.m_Min = i2195[0]
  i2194.m_Max = i2195[1]
  i2194.m_Bounciness = i2195[2]
  i2194.m_BounceMinVelocity = i2195[3]
  i2194.m_ContactDistance = i2195[4]
  i2194.minBounce = i2195[5]
  i2194.maxBounce = i2195[6]
  return i2194
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2196 = root || request.c( 'UnityEngine.JointDrive' )
  var i2197 = data
  i2196.m_PositionSpring = i2197[0]
  i2196.m_PositionDamper = i2197[1]
  i2196.m_MaximumForce = i2197[2]
  i2196.m_UseAcceleration = i2197[3]
  return i2196
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2198 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2199 = data
  i2198.m_Spring = i2199[0]
  i2198.m_Damper = i2199[1]
  return i2198
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2200 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2201 = data
  i2200.m_Limit = i2201[0]
  i2200.m_Bounciness = i2201[1]
  i2200.m_ContactDistance = i2201[2]
  return i2200
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2202 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2203 = data
  i2202.m_ExtremumSlip = i2203[0]
  i2202.m_ExtremumValue = i2203[1]
  i2202.m_AsymptoteSlip = i2203[2]
  i2202.m_AsymptoteValue = i2203[3]
  i2202.m_Stiffness = i2203[4]
  return i2202
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2204 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2205 = data
  i2204.m_LowerAngle = i2205[0]
  i2204.m_UpperAngle = i2205[1]
  return i2204
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2206 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2207 = data
  i2206.m_MotorSpeed = i2207[0]
  i2206.m_MaximumMotorTorque = i2207[1]
  return i2206
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2208 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2209 = data
  i2208.m_DampingRatio = i2209[0]
  i2208.m_Frequency = i2209[1]
  i2208.m_Angle = i2209[2]
  return i2208
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2210 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2211 = data
  i2210.m_LowerTranslation = i2211[0]
  i2210.m_UpperTranslation = i2211[1]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2213 = data
  i2212.name = i2213[0]
  i2212.width = i2213[1]
  i2212.height = i2213[2]
  i2212.mipmapCount = i2213[3]
  i2212.anisoLevel = i2213[4]
  i2212.filterMode = i2213[5]
  i2212.hdr = !!i2213[6]
  i2212.format = i2213[7]
  i2212.wrapMode = i2213[8]
  i2212.alphaIsTransparency = !!i2213[9]
  i2212.alphaSource = i2213[10]
  i2212.graphicsFormat = i2213[11]
  i2212.sRGBTexture = !!i2213[12]
  i2212.desiredColorSpace = i2213[13]
  i2212.wrapU = i2213[14]
  i2212.wrapV = i2213[15]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2214 = root || new pc.UnityMaterial()
  var i2215 = data
  i2214.name = i2215[0]
  request.r(i2215[1], i2215[2], 0, i2214, 'shader')
  i2214.renderQueue = i2215[3]
  i2214.enableInstancing = !!i2215[4]
  var i2217 = i2215[5]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2217[i + 0]) );
  }
  i2214.floatParameters = i2216
  var i2219 = i2215[6]
  var i2218 = []
  for(var i = 0; i < i2219.length; i += 1) {
    i2218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2219[i + 0]) );
  }
  i2214.colorParameters = i2218
  var i2221 = i2215[7]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2221[i + 0]) );
  }
  i2214.vectorParameters = i2220
  var i2223 = i2215[8]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2223[i + 0]) );
  }
  i2214.textureParameters = i2222
  var i2225 = i2215[9]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 1) {
    i2224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2225[i + 0]) );
  }
  i2214.materialFlags = i2224
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2229 = data
  i2228.name = i2229[0]
  i2228.value = i2229[1]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2233 = data
  i2232.name = i2233[0]
  i2232.value = new pc.Color(i2233[1], i2233[2], i2233[3], i2233[4])
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2237 = data
  i2236.name = i2237[0]
  i2236.value = new pc.Vec4( i2237[1], i2237[2], i2237[3], i2237[4] )
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2241 = data
  i2240.name = i2241[0]
  request.r(i2241[1], i2241[2], 0, i2240, 'value')
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2245 = data
  i2244.name = i2245[0]
  i2244.enabled = !!i2245[1]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2247 = data
  i2246.name = i2247[0]
  i2246.index = i2247[1]
  i2246.startup = !!i2247[2]
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2249 = data
  i2248.aspect = i2249[0]
  i2248.orthographic = !!i2249[1]
  i2248.orthographicSize = i2249[2]
  i2248.backgroundColor = new pc.Color(i2249[3], i2249[4], i2249[5], i2249[6])
  i2248.nearClipPlane = i2249[7]
  i2248.farClipPlane = i2249[8]
  i2248.fieldOfView = i2249[9]
  i2248.depth = i2249[10]
  i2248.clearFlags = i2249[11]
  i2248.cullingMask = i2249[12]
  i2248.rect = i2249[13]
  request.r(i2249[14], i2249[15], 0, i2248, 'targetTexture')
  i2248.usePhysicalProperties = !!i2249[16]
  i2248.focalLength = i2249[17]
  i2248.sensorSize = new pc.Vec2( i2249[18], i2249[19] )
  i2248.lensShift = new pc.Vec2( i2249[20], i2249[21] )
  i2248.gateFit = i2249[22]
  i2248.commandBufferCount = i2249[23]
  i2248.cameraType = i2249[24]
  i2248.enabled = !!i2249[25]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2251 = data
  i2250.name = i2251[0]
  i2250.tagId = i2251[1]
  i2250.enabled = !!i2251[2]
  i2250.isStatic = !!i2251[3]
  i2250.layer = i2251[4]
  return i2250
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2252 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2253 = data
  request.r(i2253[0], i2253[1], 0, i2252, 'm_FirstSelected')
  i2252.m_sendNavigationEvents = !!i2253[2]
  i2252.m_DragThreshold = i2253[3]
  return i2252
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2254 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2255 = data
  i2254.m_HorizontalAxis = i2255[0]
  i2254.m_VerticalAxis = i2255[1]
  i2254.m_SubmitButton = i2255[2]
  i2254.m_CancelButton = i2255[3]
  i2254.m_InputActionsPerSecond = i2255[4]
  i2254.m_RepeatDelay = i2255[5]
  i2254.m_ForceModuleActive = !!i2255[6]
  i2254.m_SendPointerHoverToParent = !!i2255[7]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2257 = data
  i2256.pivot = new pc.Vec2( i2257[0], i2257[1] )
  i2256.anchorMin = new pc.Vec2( i2257[2], i2257[3] )
  i2256.anchorMax = new pc.Vec2( i2257[4], i2257[5] )
  i2256.sizeDelta = new pc.Vec2( i2257[6], i2257[7] )
  i2256.anchoredPosition3D = new pc.Vec3( i2257[8], i2257[9], i2257[10] )
  i2256.rotation = new pc.Quat(i2257[11], i2257[12], i2257[13], i2257[14])
  i2256.scale = new pc.Vec3( i2257[15], i2257[16], i2257[17] )
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2259 = data
  i2258.planeDistance = i2259[0]
  i2258.referencePixelsPerUnit = i2259[1]
  i2258.isFallbackOverlay = !!i2259[2]
  i2258.renderMode = i2259[3]
  i2258.renderOrder = i2259[4]
  i2258.sortingLayerName = i2259[5]
  i2258.sortingOrder = i2259[6]
  i2258.scaleFactor = i2259[7]
  request.r(i2259[8], i2259[9], 0, i2258, 'worldCamera')
  i2258.overrideSorting = !!i2259[10]
  i2258.pixelPerfect = !!i2259[11]
  i2258.targetDisplay = i2259[12]
  i2258.overridePixelPerfect = !!i2259[13]
  i2258.enabled = !!i2259[14]
  return i2258
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2260 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2261 = data
  i2260.m_UiScaleMode = i2261[0]
  i2260.m_ReferencePixelsPerUnit = i2261[1]
  i2260.m_ScaleFactor = i2261[2]
  i2260.m_ReferenceResolution = new pc.Vec2( i2261[3], i2261[4] )
  i2260.m_ScreenMatchMode = i2261[5]
  i2260.m_MatchWidthOrHeight = i2261[6]
  i2260.m_PhysicalUnit = i2261[7]
  i2260.m_FallbackScreenDPI = i2261[8]
  i2260.m_DefaultSpriteDPI = i2261[9]
  i2260.m_DynamicPixelsPerUnit = i2261[10]
  i2260.m_PresetInfoIsWorld = !!i2261[11]
  return i2260
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2262 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2263 = data
  i2262.m_IgnoreReversedGraphics = !!i2263[0]
  i2262.m_BlockingObjects = i2263[1]
  i2262.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2263[2] )
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2265 = data
  i2264.cullTransparentMesh = !!i2265[0]
  return i2264
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2266 = root || request.c( 'UnityEngine.UI.Image' )
  var i2267 = data
  request.r(i2267[0], i2267[1], 0, i2266, 'm_Sprite')
  i2266.m_Type = i2267[2]
  i2266.m_PreserveAspect = !!i2267[3]
  i2266.m_FillCenter = !!i2267[4]
  i2266.m_FillMethod = i2267[5]
  i2266.m_FillAmount = i2267[6]
  i2266.m_FillClockwise = !!i2267[7]
  i2266.m_FillOrigin = i2267[8]
  i2266.m_UseSpriteMesh = !!i2267[9]
  i2266.m_PixelsPerUnitMultiplier = i2267[10]
  request.r(i2267[11], i2267[12], 0, i2266, 'm_Material')
  i2266.m_Maskable = !!i2267[13]
  i2266.m_Color = new pc.Color(i2267[14], i2267[15], i2267[16], i2267[17])
  i2266.m_RaycastTarget = !!i2267[18]
  i2266.m_RaycastPadding = new pc.Vec4( i2267[19], i2267[20], i2267[21], i2267[22] )
  return i2266
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.UI.Text' )
  var i2269 = data
  i2268.m_FontData = request.d('UnityEngine.UI.FontData', i2269[0], i2268.m_FontData)
  i2268.m_Text = i2269[1]
  request.r(i2269[2], i2269[3], 0, i2268, 'm_Material')
  i2268.m_Maskable = !!i2269[4]
  i2268.m_Color = new pc.Color(i2269[5], i2269[6], i2269[7], i2269[8])
  i2268.m_RaycastTarget = !!i2269[9]
  i2268.m_RaycastPadding = new pc.Vec4( i2269[10], i2269[11], i2269[12], i2269[13] )
  return i2268
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2271 = data
  request.r(i2271[0], i2271[1], 0, i2270, 'm_Font')
  i2270.m_FontSize = i2271[2]
  i2270.m_FontStyle = i2271[3]
  i2270.m_BestFit = !!i2271[4]
  i2270.m_MinSize = i2271[5]
  i2270.m_MaxSize = i2271[6]
  i2270.m_Alignment = i2271[7]
  i2270.m_AlignByGeometry = !!i2271[8]
  i2270.m_RichText = !!i2271[9]
  i2270.m_HorizontalOverflow = i2271[10]
  i2270.m_VerticalOverflow = i2271[11]
  i2270.m_LineSpacing = i2271[12]
  return i2270
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2272 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2273 = data
  request.r(i2273[0], i2273[1], 0, i2272, 'm_FillRect')
  request.r(i2273[2], i2273[3], 0, i2272, 'm_HandleRect')
  i2272.m_Direction = i2273[4]
  i2272.m_MinValue = i2273[5]
  i2272.m_MaxValue = i2273[6]
  i2272.m_WholeNumbers = !!i2273[7]
  i2272.m_Value = i2273[8]
  i2272.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2273[9], i2272.m_OnValueChanged)
  i2272.m_Navigation = request.d('UnityEngine.UI.Navigation', i2273[10], i2272.m_Navigation)
  i2272.m_Transition = i2273[11]
  i2272.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2273[12], i2272.m_Colors)
  i2272.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2273[13], i2272.m_SpriteState)
  i2272.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2273[14], i2272.m_AnimationTriggers)
  i2272.m_Interactable = !!i2273[15]
  request.r(i2273[16], i2273[17], 0, i2272, 'm_TargetGraphic')
  return i2272
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2274 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2275 = data
  i2274.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2275[0], i2274.m_PersistentCalls)
  return i2274
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2276 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2277 = data
  var i2279 = i2277[0]
  var i2278 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.add(request.d('UnityEngine.Events.PersistentCall', i2279[i + 0]));
  }
  i2276.m_Calls = i2278
  return i2276
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2283 = data
  request.r(i2283[0], i2283[1], 0, i2282, 'm_Target')
  i2282.m_TargetAssemblyTypeName = i2283[2]
  i2282.m_MethodName = i2283[3]
  i2282.m_Mode = i2283[4]
  i2282.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2283[5], i2282.m_Arguments)
  i2282.m_CallState = i2283[6]
  return i2282
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2285 = data
  i2284.m_Mode = i2285[0]
  i2284.m_WrapAround = !!i2285[1]
  request.r(i2285[2], i2285[3], 0, i2284, 'm_SelectOnUp')
  request.r(i2285[4], i2285[5], 0, i2284, 'm_SelectOnDown')
  request.r(i2285[6], i2285[7], 0, i2284, 'm_SelectOnLeft')
  request.r(i2285[8], i2285[9], 0, i2284, 'm_SelectOnRight')
  return i2284
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2287 = data
  i2286.m_NormalColor = new pc.Color(i2287[0], i2287[1], i2287[2], i2287[3])
  i2286.m_HighlightedColor = new pc.Color(i2287[4], i2287[5], i2287[6], i2287[7])
  i2286.m_PressedColor = new pc.Color(i2287[8], i2287[9], i2287[10], i2287[11])
  i2286.m_SelectedColor = new pc.Color(i2287[12], i2287[13], i2287[14], i2287[15])
  i2286.m_DisabledColor = new pc.Color(i2287[16], i2287[17], i2287[18], i2287[19])
  i2286.m_ColorMultiplier = i2287[20]
  i2286.m_FadeDuration = i2287[21]
  return i2286
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2288 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2289 = data
  request.r(i2289[0], i2289[1], 0, i2288, 'm_HighlightedSprite')
  request.r(i2289[2], i2289[3], 0, i2288, 'm_PressedSprite')
  request.r(i2289[4], i2289[5], 0, i2288, 'm_SelectedSprite')
  request.r(i2289[6], i2289[7], 0, i2288, 'm_DisabledSprite')
  return i2288
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2290 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2291 = data
  i2290.m_NormalTrigger = i2291[0]
  i2290.m_HighlightedTrigger = i2291[1]
  i2290.m_PressedTrigger = i2291[2]
  i2290.m_SelectedTrigger = i2291[3]
  i2290.m_DisabledTrigger = i2291[4]
  return i2290
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2292 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2293 = data
  i2292.m_ShowMaskGraphic = !!i2293[0]
  return i2292
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2294 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2295 = data
  request.r(i2295[0], i2295[1], 0, i2294, 'skeletonDataAsset')
  request.r(i2295[2], i2295[3], 0, i2294, 'additiveMaterial')
  request.r(i2295[4], i2295[5], 0, i2294, 'multiplyMaterial')
  request.r(i2295[6], i2295[7], 0, i2294, 'screenMaterial')
  i2294.initialSkinName = i2295[8]
  i2294.initialFlipX = !!i2295[9]
  i2294.initialFlipY = !!i2295[10]
  i2294.startingAnimation = i2295[11]
  i2294.startingLoop = !!i2295[12]
  i2294.timeScale = i2295[13]
  i2294.freeze = !!i2295[14]
  i2294.layoutScaleMode = i2295[15]
  i2294.updateWhenInvisible = i2295[16]
  i2294.allowMultipleCanvasRenderers = !!i2295[17]
  var i2297 = i2295[18]
  var i2296 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2297.length; i += 2) {
  request.r(i2297[i + 0], i2297[i + 1], 1, i2296, '')
  }
  i2294.canvasRenderers = i2296
  i2294.enableSeparatorSlots = !!i2295[19]
  i2294.updateSeparatorPartLocation = !!i2295[20]
  i2294.updateSeparatorPartScale = !!i2295[21]
  i2294.disableMeshAssignmentOnOverride = !!i2295[22]
  i2294.referenceSize = new pc.Vec2( i2295[23], i2295[24] )
  i2294.referenceScale = i2295[25]
  i2294.rectTransformSize = new pc.Vec2( i2295[26], i2295[27] )
  i2294.editReferenceRect = !!i2295[28]
  var i2299 = i2295[29]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.push( i2299[i + 0] );
  }
  i2294.separatorSlotNames = i2298
  var i2301 = i2295[30]
  var i2300 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2301.length; i += 2) {
  request.r(i2301[i + 0], i2301[i + 1], 1, i2300, '')
  }
  i2294.separatorParts = i2300
  i2294.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2295[31], i2294.meshGenerator)
  i2294.updateTiming = i2295[32]
  i2294.unscaledTime = !!i2295[33]
  request.r(i2295[34], i2295[35], 0, i2294, 'm_Material')
  i2294.m_Maskable = !!i2295[36]
  i2294.m_Color = new pc.Color(i2295[37], i2295[38], i2295[39], i2295[40])
  i2294.m_RaycastTarget = !!i2295[41]
  i2294.m_RaycastPadding = new pc.Vec4( i2295[42], i2295[43], i2295[44], i2295[45] )
  return i2294
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2308 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2309 = data
  i2308.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2309[0], i2308.settings)
  return i2308
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2310 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2311 = data
  i2310.useClipping = !!i2311[0]
  i2310.zSpacing = i2311[1]
  i2310.pmaVertexColors = !!i2311[2]
  i2310.tintBlack = !!i2311[3]
  i2310.canvasGroupTintBlack = !!i2311[4]
  i2310.calculateTangents = !!i2311[5]
  i2310.addNormals = !!i2311[6]
  i2310.immutableTriangles = !!i2311[7]
  return i2310
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i2312 = root || request.c( 'AnimationController' )
  var i2313 = data
  request.r(i2313[0], i2313[1], 0, i2312, 'skeleton')
  return i2312
}

Deserializers["CharacterSkinController"] = function (request, data, root) {
  var i2314 = root || request.c( 'CharacterSkinController' )
  var i2315 = data
  request.r(i2315[0], i2315[1], 0, i2314, 'skeletonAnimation')
  var i2317 = i2315[2]
  var i2316 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.add(request.d('Item', i2317[i + 0]));
  }
  i2314.leftItems = i2316
  var i2319 = i2315[3]
  var i2318 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.add(request.d('Item', i2319[i + 0]));
  }
  i2314.rightItems = i2318
  i2314.lastItems = request.d('Item', i2315[4], i2314.lastItems)
  return i2314
}

Deserializers["Item"] = function (request, data, root) {
  var i2322 = root || request.c( 'Item' )
  var i2323 = data
  i2322.Piece = i2323[0]
  request.r(i2323[1], i2323[2], 0, i2322, 'ActiveItem')
  i2322.ActiveSkin = i2323[3]
  request.r(i2323[4], i2323[5], 0, i2322, 'ActiveSound')
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2325 = data
  i2324.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2325[0], i2324.main)
  i2324.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2325[1], i2324.colorBySpeed)
  i2324.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2325[2], i2324.colorOverLifetime)
  i2324.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2325[3], i2324.emission)
  i2324.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2325[4], i2324.rotationBySpeed)
  i2324.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2325[5], i2324.rotationOverLifetime)
  i2324.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2325[6], i2324.shape)
  i2324.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2325[7], i2324.sizeBySpeed)
  i2324.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2325[8], i2324.sizeOverLifetime)
  i2324.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2325[9], i2324.textureSheetAnimation)
  i2324.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2325[10], i2324.velocityOverLifetime)
  i2324.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2325[11], i2324.noise)
  i2324.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2325[12], i2324.inheritVelocity)
  i2324.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2325[13], i2324.forceOverLifetime)
  i2324.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2325[14], i2324.limitVelocityOverLifetime)
  i2324.useAutoRandomSeed = !!i2325[15]
  i2324.randomSeed = i2325[16]
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2326 = root || new pc.ParticleSystemMain()
  var i2327 = data
  i2326.duration = i2327[0]
  i2326.loop = !!i2327[1]
  i2326.prewarm = !!i2327[2]
  i2326.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[3], i2326.startDelay)
  i2326.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[4], i2326.startLifetime)
  i2326.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[5], i2326.startSpeed)
  i2326.startSize3D = !!i2327[6]
  i2326.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[7], i2326.startSizeX)
  i2326.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[8], i2326.startSizeY)
  i2326.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[9], i2326.startSizeZ)
  i2326.startRotation3D = !!i2327[10]
  i2326.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[11], i2326.startRotationX)
  i2326.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[12], i2326.startRotationY)
  i2326.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[13], i2326.startRotationZ)
  i2326.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2327[14], i2326.startColor)
  i2326.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[15], i2326.gravityModifier)
  i2326.simulationSpace = i2327[16]
  request.r(i2327[17], i2327[18], 0, i2326, 'customSimulationSpace')
  i2326.simulationSpeed = i2327[19]
  i2326.useUnscaledTime = !!i2327[20]
  i2326.scalingMode = i2327[21]
  i2326.playOnAwake = !!i2327[22]
  i2326.maxParticles = i2327[23]
  i2326.emitterVelocityMode = i2327[24]
  i2326.stopAction = i2327[25]
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2328 = root || new pc.MinMaxCurve()
  var i2329 = data
  i2328.mode = i2329[0]
  i2328.curveMin = new pc.AnimationCurve( { keys_flow: i2329[1] } )
  i2328.curveMax = new pc.AnimationCurve( { keys_flow: i2329[2] } )
  i2328.curveMultiplier = i2329[3]
  i2328.constantMin = i2329[4]
  i2328.constantMax = i2329[5]
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2330 = root || new pc.MinMaxGradient()
  var i2331 = data
  i2330.mode = i2331[0]
  i2330.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2331[1], i2330.gradientMin)
  i2330.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2331[2], i2330.gradientMax)
  i2330.colorMin = new pc.Color(i2331[3], i2331[4], i2331[5], i2331[6])
  i2330.colorMax = new pc.Color(i2331[7], i2331[8], i2331[9], i2331[10])
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2333 = data
  i2332.mode = i2333[0]
  var i2335 = i2333[1]
  var i2334 = []
  for(var i = 0; i < i2335.length; i += 1) {
    i2334.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2335[i + 0]) );
  }
  i2332.colorKeys = i2334
  var i2337 = i2333[2]
  var i2336 = []
  for(var i = 0; i < i2337.length; i += 1) {
    i2336.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2337[i + 0]) );
  }
  i2332.alphaKeys = i2336
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2338 = root || new pc.ParticleSystemColorBySpeed()
  var i2339 = data
  i2338.enabled = !!i2339[0]
  i2338.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2339[1], i2338.color)
  i2338.range = new pc.Vec2( i2339[2], i2339[3] )
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2343 = data
  i2342.color = new pc.Color(i2343[0], i2343[1], i2343[2], i2343[3])
  i2342.time = i2343[4]
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2347 = data
  i2346.alpha = i2347[0]
  i2346.time = i2347[1]
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2348 = root || new pc.ParticleSystemColorOverLifetime()
  var i2349 = data
  i2348.enabled = !!i2349[0]
  i2348.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2349[1], i2348.color)
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2350 = root || new pc.ParticleSystemEmitter()
  var i2351 = data
  i2350.enabled = !!i2351[0]
  i2350.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2351[1], i2350.rateOverTime)
  i2350.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2351[2], i2350.rateOverDistance)
  var i2353 = i2351[3]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2353[i + 0]) );
  }
  i2350.bursts = i2352
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2356 = root || new pc.ParticleSystemBurst()
  var i2357 = data
  i2356.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2357[0], i2356.count)
  i2356.cycleCount = i2357[1]
  i2356.minCount = i2357[2]
  i2356.maxCount = i2357[3]
  i2356.repeatInterval = i2357[4]
  i2356.time = i2357[5]
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2358 = root || new pc.ParticleSystemRotationBySpeed()
  var i2359 = data
  i2358.enabled = !!i2359[0]
  i2358.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[1], i2358.x)
  i2358.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[2], i2358.y)
  i2358.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[3], i2358.z)
  i2358.separateAxes = !!i2359[4]
  i2358.range = new pc.Vec2( i2359[5], i2359[6] )
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2360 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2361 = data
  i2360.enabled = !!i2361[0]
  i2360.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2361[1], i2360.x)
  i2360.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2361[2], i2360.y)
  i2360.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2361[3], i2360.z)
  i2360.separateAxes = !!i2361[4]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2362 = root || new pc.ParticleSystemShape()
  var i2363 = data
  i2362.enabled = !!i2363[0]
  i2362.shapeType = i2363[1]
  i2362.randomDirectionAmount = i2363[2]
  i2362.sphericalDirectionAmount = i2363[3]
  i2362.randomPositionAmount = i2363[4]
  i2362.alignToDirection = !!i2363[5]
  i2362.radius = i2363[6]
  i2362.radiusMode = i2363[7]
  i2362.radiusSpread = i2363[8]
  i2362.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[9], i2362.radiusSpeed)
  i2362.radiusThickness = i2363[10]
  i2362.angle = i2363[11]
  i2362.length = i2363[12]
  i2362.boxThickness = new pc.Vec3( i2363[13], i2363[14], i2363[15] )
  i2362.meshShapeType = i2363[16]
  request.r(i2363[17], i2363[18], 0, i2362, 'mesh')
  request.r(i2363[19], i2363[20], 0, i2362, 'meshRenderer')
  request.r(i2363[21], i2363[22], 0, i2362, 'skinnedMeshRenderer')
  i2362.useMeshMaterialIndex = !!i2363[23]
  i2362.meshMaterialIndex = i2363[24]
  i2362.useMeshColors = !!i2363[25]
  i2362.normalOffset = i2363[26]
  i2362.arc = i2363[27]
  i2362.arcMode = i2363[28]
  i2362.arcSpread = i2363[29]
  i2362.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[30], i2362.arcSpeed)
  i2362.donutRadius = i2363[31]
  i2362.position = new pc.Vec3( i2363[32], i2363[33], i2363[34] )
  i2362.rotation = new pc.Vec3( i2363[35], i2363[36], i2363[37] )
  i2362.scale = new pc.Vec3( i2363[38], i2363[39], i2363[40] )
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2364 = root || new pc.ParticleSystemSizeBySpeed()
  var i2365 = data
  i2364.enabled = !!i2365[0]
  i2364.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2365[1], i2364.x)
  i2364.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2365[2], i2364.y)
  i2364.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2365[3], i2364.z)
  i2364.separateAxes = !!i2365[4]
  i2364.range = new pc.Vec2( i2365[5], i2365[6] )
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2366 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2367 = data
  i2366.enabled = !!i2367[0]
  i2366.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2367[1], i2366.x)
  i2366.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2367[2], i2366.y)
  i2366.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2367[3], i2366.z)
  i2366.separateAxes = !!i2367[4]
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2368 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2369 = data
  i2368.enabled = !!i2369[0]
  i2368.mode = i2369[1]
  i2368.animation = i2369[2]
  i2368.numTilesX = i2369[3]
  i2368.numTilesY = i2369[4]
  i2368.useRandomRow = !!i2369[5]
  i2368.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2369[6], i2368.frameOverTime)
  i2368.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2369[7], i2368.startFrame)
  i2368.cycleCount = i2369[8]
  i2368.rowIndex = i2369[9]
  i2368.flipU = i2369[10]
  i2368.flipV = i2369[11]
  i2368.spriteCount = i2369[12]
  var i2371 = i2369[13]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 2) {
  request.r(i2371[i + 0], i2371[i + 1], 2, i2370, '')
  }
  i2368.sprites = i2370
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2374 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2375 = data
  i2374.enabled = !!i2375[0]
  i2374.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[1], i2374.x)
  i2374.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[2], i2374.y)
  i2374.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[3], i2374.z)
  i2374.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[4], i2374.radial)
  i2374.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[5], i2374.speedModifier)
  i2374.space = i2375[6]
  i2374.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[7], i2374.orbitalX)
  i2374.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[8], i2374.orbitalY)
  i2374.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[9], i2374.orbitalZ)
  i2374.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[10], i2374.orbitalOffsetX)
  i2374.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[11], i2374.orbitalOffsetY)
  i2374.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[12], i2374.orbitalOffsetZ)
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2376 = root || new pc.ParticleSystemNoise()
  var i2377 = data
  i2376.enabled = !!i2377[0]
  i2376.separateAxes = !!i2377[1]
  i2376.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2377[2], i2376.strengthX)
  i2376.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2377[3], i2376.strengthY)
  i2376.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2377[4], i2376.strengthZ)
  i2376.frequency = i2377[5]
  i2376.damping = !!i2377[6]
  i2376.octaveCount = i2377[7]
  i2376.octaveMultiplier = i2377[8]
  i2376.octaveScale = i2377[9]
  i2376.quality = i2377[10]
  i2376.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2377[11], i2376.scrollSpeed)
  i2376.scrollSpeedMultiplier = i2377[12]
  i2376.remapEnabled = !!i2377[13]
  i2376.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2377[14], i2376.remapX)
  i2376.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2377[15], i2376.remapY)
  i2376.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2377[16], i2376.remapZ)
  i2376.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2377[17], i2376.positionAmount)
  i2376.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2377[18], i2376.rotationAmount)
  i2376.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2377[19], i2376.sizeAmount)
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2378 = root || new pc.ParticleSystemInheritVelocity()
  var i2379 = data
  i2378.enabled = !!i2379[0]
  i2378.mode = i2379[1]
  i2378.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2379[2], i2378.curve)
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2380 = root || new pc.ParticleSystemForceOverLifetime()
  var i2381 = data
  i2380.enabled = !!i2381[0]
  i2380.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2381[1], i2380.x)
  i2380.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2381[2], i2380.y)
  i2380.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2381[3], i2380.z)
  i2380.space = i2381[4]
  i2380.randomized = !!i2381[5]
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2382 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2383 = data
  i2382.enabled = !!i2383[0]
  i2382.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2383[1], i2382.limit)
  i2382.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2383[2], i2382.limitX)
  i2382.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2383[3], i2382.limitY)
  i2382.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2383[4], i2382.limitZ)
  i2382.dampen = i2383[5]
  i2382.separateAxes = !!i2383[6]
  i2382.space = i2383[7]
  i2382.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2383[8], i2382.drag)
  i2382.multiplyDragByParticleSize = !!i2383[9]
  i2382.multiplyDragByParticleVelocity = !!i2383[10]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2385 = data
  request.r(i2385[0], i2385[1], 0, i2384, 'mesh')
  i2384.meshCount = i2385[2]
  i2384.activeVertexStreamsCount = i2385[3]
  i2384.alignment = i2385[4]
  i2384.renderMode = i2385[5]
  i2384.sortMode = i2385[6]
  i2384.lengthScale = i2385[7]
  i2384.velocityScale = i2385[8]
  i2384.cameraVelocityScale = i2385[9]
  i2384.normalDirection = i2385[10]
  i2384.sortingFudge = i2385[11]
  i2384.minParticleSize = i2385[12]
  i2384.maxParticleSize = i2385[13]
  i2384.pivot = new pc.Vec3( i2385[14], i2385[15], i2385[16] )
  request.r(i2385[17], i2385[18], 0, i2384, 'trailMaterial')
  i2384.applyActiveColorSpace = !!i2385[19]
  i2384.enabled = !!i2385[20]
  request.r(i2385[21], i2385[22], 0, i2384, 'sharedMaterial')
  var i2387 = i2385[23]
  var i2386 = []
  for(var i = 0; i < i2387.length; i += 2) {
  request.r(i2387[i + 0], i2387[i + 1], 2, i2386, '')
  }
  i2384.sharedMaterials = i2386
  i2384.receiveShadows = !!i2385[24]
  i2384.shadowCastingMode = i2385[25]
  i2384.sortingLayerID = i2385[26]
  i2384.sortingOrder = i2385[27]
  i2384.lightmapIndex = i2385[28]
  i2384.lightmapSceneIndex = i2385[29]
  i2384.lightmapScaleOffset = new pc.Vec4( i2385[30], i2385[31], i2385[32], i2385[33] )
  i2384.lightProbeUsage = i2385[34]
  i2384.reflectionProbeUsage = i2385[35]
  return i2384
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2390 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2391 = data
  i2390.targetIsSelf = !!i2391[0]
  request.r(i2391[1], i2391[2], 0, i2390, 'targetGO')
  i2390.tweenTargetIsTargetGO = !!i2391[3]
  i2390.delay = i2391[4]
  i2390.duration = i2391[5]
  i2390.easeType = i2391[6]
  i2390.easeCurve = new pc.AnimationCurve( { keys_flow: i2391[7] } )
  i2390.loopType = i2391[8]
  i2390.loops = i2391[9]
  i2390.id = i2391[10]
  i2390.isRelative = !!i2391[11]
  i2390.isFrom = !!i2391[12]
  i2390.isIndependentUpdate = !!i2391[13]
  i2390.autoKill = !!i2391[14]
  i2390.autoGenerate = !!i2391[15]
  i2390.isActive = !!i2391[16]
  i2390.isValid = !!i2391[17]
  request.r(i2391[18], i2391[19], 0, i2390, 'target')
  i2390.animationType = i2391[20]
  i2390.targetType = i2391[21]
  i2390.forcedTargetType = i2391[22]
  i2390.autoPlay = !!i2391[23]
  i2390.useTargetAsV3 = !!i2391[24]
  i2390.endValueFloat = i2391[25]
  i2390.endValueV3 = new pc.Vec3( i2391[26], i2391[27], i2391[28] )
  i2390.endValueV2 = new pc.Vec2( i2391[29], i2391[30] )
  i2390.endValueColor = new pc.Color(i2391[31], i2391[32], i2391[33], i2391[34])
  i2390.endValueString = i2391[35]
  i2390.endValueRect = UnityEngine.Rect.MinMaxRect(i2391[36], i2391[37], i2391[38], i2391[39])
  request.r(i2391[40], i2391[41], 0, i2390, 'endValueTransform')
  i2390.optionalBool0 = !!i2391[42]
  i2390.optionalBool1 = !!i2391[43]
  i2390.optionalFloat0 = i2391[44]
  i2390.optionalInt0 = i2391[45]
  i2390.optionalRotationMode = i2391[46]
  i2390.optionalScrambleMode = i2391[47]
  i2390.optionalShakeRandomnessMode = i2391[48]
  i2390.optionalString = i2391[49]
  i2390.updateType = i2391[50]
  i2390.isSpeedBased = !!i2391[51]
  i2390.hasOnStart = !!i2391[52]
  i2390.hasOnPlay = !!i2391[53]
  i2390.hasOnUpdate = !!i2391[54]
  i2390.hasOnStepComplete = !!i2391[55]
  i2390.hasOnComplete = !!i2391[56]
  i2390.hasOnTweenCreated = !!i2391[57]
  i2390.hasOnRewind = !!i2391[58]
  i2390.onStart = request.d('UnityEngine.Events.UnityEvent', i2391[59], i2390.onStart)
  i2390.onPlay = request.d('UnityEngine.Events.UnityEvent', i2391[60], i2390.onPlay)
  i2390.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2391[61], i2390.onUpdate)
  i2390.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2391[62], i2390.onStepComplete)
  i2390.onComplete = request.d('UnityEngine.Events.UnityEvent', i2391[63], i2390.onComplete)
  i2390.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2391[64], i2390.onTweenCreated)
  i2390.onRewind = request.d('UnityEngine.Events.UnityEvent', i2391[65], i2390.onRewind)
  return i2390
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2392 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2393 = data
  i2392.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2393[0], i2392.m_PersistentCalls)
  return i2392
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2394 = root || request.c( 'UnityEngine.UI.Button' )
  var i2395 = data
  i2394.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2395[0], i2394.m_OnClick)
  i2394.m_Navigation = request.d('UnityEngine.UI.Navigation', i2395[1], i2394.m_Navigation)
  i2394.m_Transition = i2395[2]
  i2394.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2395[3], i2394.m_Colors)
  i2394.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2395[4], i2394.m_SpriteState)
  i2394.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2395[5], i2394.m_AnimationTriggers)
  i2394.m_Interactable = !!i2395[6]
  request.r(i2395[7], i2395[8], 0, i2394, 'm_TargetGraphic')
  return i2394
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2396 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2397 = data
  i2396.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2397[0], i2396.m_PersistentCalls)
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2399 = data
  request.r(i2399[0], i2399[1], 0, i2398, 'clip')
  request.r(i2399[2], i2399[3], 0, i2398, 'outputAudioMixerGroup')
  i2398.playOnAwake = !!i2399[4]
  i2398.loop = !!i2399[5]
  i2398.time = i2399[6]
  i2398.volume = i2399[7]
  i2398.pitch = i2399[8]
  i2398.enabled = !!i2399[9]
  return i2398
}

Deserializers["InteractController"] = function (request, data, root) {
  var i2400 = root || request.c( 'InteractController' )
  var i2401 = data
  request.r(i2401[0], i2401[1], 0, i2400, 'canvas')
  i2400.maxPos = new pc.Vec2( i2401[2], i2401[3] )
  i2400.minPos = new pc.Vec2( i2401[4], i2401[5] )
  var i2403 = i2401[6]
  var i2402 = new (System.Collections.Generic.List$1(Bridge.ns('ItemDrag')))
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.add(request.d('ItemDrag', i2403[i + 0]));
  }
  i2400.itemDrags = i2402
  var i2405 = i2401[7]
  var i2404 = new (System.Collections.Generic.List$1(Bridge.ns('ItemClick')))
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.add(request.d('ItemClick', i2405[i + 0]));
  }
  i2400.itemClicks = i2404
  i2400.currentTarget = request.d('ItemDrag', i2401[8], i2400.currentTarget)
  request.r(i2401[9], i2401[10], 0, i2400, 'pickupSound')
  request.r(i2401[11], i2401[12], 0, i2400, 'tut')
  i2400.lockPlay = !!i2401[13]
  return i2400
}

Deserializers["ItemDrag"] = function (request, data, root) {
  var i2408 = root || request.c( 'ItemDrag' )
  var i2409 = data
  request.r(i2409[0], i2409[1], 0, i2408, 'DragArea')
  request.r(i2409[2], i2409[3], 0, i2408, 'Item')
  request.r(i2409[4], i2409[5], 0, i2408, 'Sound')
  request.r(i2409[6], i2409[7], 0, i2408, 'Icon')
  return i2408
}

Deserializers["ItemClick"] = function (request, data, root) {
  var i2412 = root || request.c( 'ItemClick' )
  var i2413 = data
  request.r(i2413[0], i2413[1], 0, i2412, 'ClickArea')
  request.r(i2413[2], i2413[3], 0, i2412, 'Item')
  request.r(i2413[4], i2413[5], 0, i2412, 'Sound')
  request.r(i2413[6], i2413[7], 0, i2412, 'UnActiveObject')
  return i2412
}

Deserializers["GameController"] = function (request, data, root) {
  var i2414 = root || request.c( 'GameController' )
  var i2415 = data
  i2414.OnComplete = request.d('System.Action', i2415[0], i2414.OnComplete)
  i2414.CompleteStep = request.d('System.Action', i2415[1], i2414.CompleteStep)
  var i2417 = i2415[2]
  var i2416 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationController')))
  for(var i = 0; i < i2417.length; i += 2) {
  request.r(i2417[i + 0], i2417[i + 1], 1, i2416, '')
  }
  i2414.skeletons = i2416
  request.r(i2415[3], i2415[4], 0, i2414, 'character')
  var i2419 = i2415[5]
  var i2418 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2419.length; i += 2) {
  request.r(i2419[i + 0], i2419[i + 1], 1, i2418, '')
  }
  i2414.correctItems = i2418
  var i2421 = i2415[6]
  var i2420 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2421.length; i += 2) {
  request.r(i2421[i + 0], i2421[i + 1], 1, i2420, '')
  }
  i2414.phase = i2420
  request.r(i2415[7], i2415[8], 0, i2414, 'loss')
  request.r(i2415[9], i2415[10], 0, i2414, 'win')
  request.r(i2415[11], i2415[12], 0, i2414, 'failScene')
  request.r(i2415[13], i2415[14], 0, i2414, 'winScene')
  i2414.complete = !!i2415[15]
  i2414.end = !!i2415[16]
  i2414.currentStep = i2415[17]
  i2414.correctStep = i2415[18]
  request.r(i2415[19], i2415[20], 0, i2414, 'currentStepText')
  i2414.maxStep = i2415[21]
  request.r(i2415[22], i2415[23], 0, i2414, 'maxStepText')
  request.r(i2415[24], i2415[25], 0, i2414, 'slider')
  i2414.DelayComplete = i2415[26]
  i2414.startSub = request.d('Sub', i2415[27], i2414.startSub)
  i2414.phaseSub = request.d('Sub', i2415[28], i2414.phaseSub)
  i2414.winSub = request.d('Sub', i2415[29], i2414.winSub)
  i2414.failSub = request.d('Sub', i2415[30], i2414.failSub)
  var i2423 = i2415[31]
  var i2422 = new (System.Collections.Generic.List$1(Bridge.ns('Sub')))
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.add(request.d('Sub', i2423[i + 0]));
  }
  i2414.subs = i2422
  request.r(i2415[32], i2415[33], 0, i2414, 'sub')
  request.r(i2415[34], i2415[35], 0, i2414, 'subText')
  i2414.completeSub = !!i2415[36]
  return i2414
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2424 = root || request.c( 'System.Action' )
  var i2425 = data
  return i2424
}

Deserializers["Sub"] = function (request, data, root) {
  var i2430 = root || request.c( 'Sub' )
  var i2431 = data
  i2430.timeSub = i2431[0]
  request.r(i2431[1], i2431[2], 0, i2430, 'Item')
  i2430.SubText = i2431[3]
  request.r(i2431[4], i2431[5], 0, i2430, 'SubSound')
  return i2430
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i2434 = root || request.c( 'LayoutController' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'CTA')
  i2434.hide = !!i2435[2]
  return i2434
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2436 = root || request.c( 'AudioController' )
  var i2437 = data
  request.r(i2437[0], i2437[1], 0, i2436, 'BGM')
  request.r(i2437[2], i2437[3], 0, i2436, 'musicSource')
  request.r(i2437[4], i2437[5], 0, i2436, 'SFXPool')
  return i2436
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2438 = root || request.c( 'LunaController' )
  var i2439 = data
  i2438.TimePlay = i2439[0]
  i2438.CountPlay = i2439[1]
  i2438.BGColor = new pc.Color(i2439[2], i2439[3], i2439[4], i2439[5])
  i2438.GameBGColor = new pc.Color(i2439[6], i2439[7], i2439[8], i2439[9])
  i2438.LevelTextColor = new pc.Color(i2439[10], i2439[11], i2439[12], i2439[13])
  i2438.TitleTextColor = new pc.Color(i2439[14], i2439[15], i2439[16], i2439[17])
  i2438.SubBGColor = new pc.Color(i2439[18], i2439[19], i2439[20], i2439[21])
  request.r(i2439[22], i2439[23], 0, i2438, 'time')
  request.r(i2439[24], i2439[25], 0, i2438, 'BGImage')
  request.r(i2439[26], i2439[27], 0, i2438, 'GameBGImage')
  request.r(i2439[28], i2439[29], 0, i2438, 'levelText')
  request.r(i2439[30], i2439[31], 0, i2438, 'titleText')
  request.r(i2439[32], i2439[33], 0, i2438, 'subBG')
  request.r(i2439[34], i2439[35], 0, i2438, 'endCard')
  var i2441 = i2439[36]
  var i2440 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2441.length; i += 2) {
  request.r(i2441[i + 0], i2441[i + 1], 1, i2440, '')
  }
  i2438.CTA = i2440
  i2438.count = i2439[37]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2445 = data
  i2444.ambientIntensity = i2445[0]
  i2444.reflectionIntensity = i2445[1]
  i2444.ambientMode = i2445[2]
  i2444.ambientLight = new pc.Color(i2445[3], i2445[4], i2445[5], i2445[6])
  i2444.ambientSkyColor = new pc.Color(i2445[7], i2445[8], i2445[9], i2445[10])
  i2444.ambientGroundColor = new pc.Color(i2445[11], i2445[12], i2445[13], i2445[14])
  i2444.ambientEquatorColor = new pc.Color(i2445[15], i2445[16], i2445[17], i2445[18])
  i2444.fogColor = new pc.Color(i2445[19], i2445[20], i2445[21], i2445[22])
  i2444.fogEndDistance = i2445[23]
  i2444.fogStartDistance = i2445[24]
  i2444.fogDensity = i2445[25]
  i2444.fog = !!i2445[26]
  request.r(i2445[27], i2445[28], 0, i2444, 'skybox')
  i2444.fogMode = i2445[29]
  var i2447 = i2445[30]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2447[i + 0]) );
  }
  i2444.lightmaps = i2446
  i2444.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2445[31], i2444.lightProbes)
  i2444.lightmapsMode = i2445[32]
  i2444.mixedBakeMode = i2445[33]
  i2444.environmentLightingMode = i2445[34]
  i2444.ambientProbe = new pc.SphericalHarmonicsL2(i2445[35])
  request.r(i2445[36], i2445[37], 0, i2444, 'customReflection')
  request.r(i2445[38], i2445[39], 0, i2444, 'defaultReflection')
  i2444.defaultReflectionMode = i2445[40]
  i2444.defaultReflectionResolution = i2445[41]
  i2444.sunLightObjectId = i2445[42]
  i2444.pixelLightCount = i2445[43]
  i2444.defaultReflectionHDR = !!i2445[44]
  i2444.hasLightDataAsset = !!i2445[45]
  i2444.hasManualGenerate = !!i2445[46]
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2451 = data
  request.r(i2451[0], i2451[1], 0, i2450, 'lightmapColor')
  request.r(i2451[2], i2451[3], 0, i2450, 'lightmapDirection')
  request.r(i2451[4], i2451[5], 0, i2450, 'shadowMask')
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2452 = root || new UnityEngine.LightProbes()
  var i2453 = data
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2461 = data
  var i2463 = i2461[0]
  var i2462 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2463[i + 0]));
  }
  i2460.ShaderCompilationErrors = i2462
  i2460.name = i2461[1]
  i2460.guid = i2461[2]
  var i2465 = i2461[3]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( i2465[i + 0] );
  }
  i2460.shaderDefinedKeywords = i2464
  var i2467 = i2461[4]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2467[i + 0]) );
  }
  i2460.passes = i2466
  var i2469 = i2461[5]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2469[i + 0]) );
  }
  i2460.usePasses = i2468
  var i2471 = i2461[6]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2471[i + 0]) );
  }
  i2460.defaultParameterValues = i2470
  request.r(i2461[7], i2461[8], 0, i2460, 'unityFallbackShader')
  i2460.readDepth = !!i2461[9]
  i2460.hasDepthOnlyPass = !!i2461[10]
  i2460.isCreatedByShaderGraph = !!i2461[11]
  i2460.disableBatching = !!i2461[12]
  i2460.compiled = !!i2461[13]
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2475 = data
  i2474.shaderName = i2475[0]
  i2474.errorMessage = i2475[1]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2478 = root || new pc.UnityShaderPass()
  var i2479 = data
  i2478.id = i2479[0]
  i2478.subShaderIndex = i2479[1]
  i2478.name = i2479[2]
  i2478.passType = i2479[3]
  i2478.grabPassTextureName = i2479[4]
  i2478.usePass = !!i2479[5]
  i2478.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[6], i2478.zTest)
  i2478.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[7], i2478.zWrite)
  i2478.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[8], i2478.culling)
  i2478.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2479[9], i2478.blending)
  i2478.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2479[10], i2478.alphaBlending)
  i2478.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[11], i2478.colorWriteMask)
  i2478.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[12], i2478.offsetUnits)
  i2478.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[13], i2478.offsetFactor)
  i2478.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[14], i2478.stencilRef)
  i2478.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[15], i2478.stencilReadMask)
  i2478.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[16], i2478.stencilWriteMask)
  i2478.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2479[17], i2478.stencilOp)
  i2478.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2479[18], i2478.stencilOpFront)
  i2478.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2479[19], i2478.stencilOpBack)
  var i2481 = i2479[20]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2481[i + 0]) );
  }
  i2478.tags = i2480
  var i2483 = i2479[21]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( i2483[i + 0] );
  }
  i2478.passDefinedKeywords = i2482
  var i2485 = i2479[22]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2485[i + 0]) );
  }
  i2478.passDefinedKeywordGroups = i2484
  var i2487 = i2479[23]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 1) {
    i2486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2487[i + 0]) );
  }
  i2478.variants = i2486
  var i2489 = i2479[24]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2489[i + 0]) );
  }
  i2478.excludedVariants = i2488
  i2478.hasDepthReader = !!i2479[25]
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2491 = data
  i2490.val = i2491[0]
  i2490.name = i2491[1]
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2493 = data
  i2492.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2493[0], i2492.src)
  i2492.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2493[1], i2492.dst)
  i2492.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2493[2], i2492.op)
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2495 = data
  i2494.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2495[0], i2494.pass)
  i2494.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2495[1], i2494.fail)
  i2494.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2495[2], i2494.zFail)
  i2494.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2495[3], i2494.comp)
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2499 = data
  i2498.name = i2499[0]
  i2498.value = i2499[1]
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2503 = data
  var i2505 = i2503[0]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.push( i2505[i + 0] );
  }
  i2502.keywords = i2504
  i2502.hasDiscard = !!i2503[1]
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2509 = data
  i2508.passId = i2509[0]
  i2508.subShaderIndex = i2509[1]
  var i2511 = i2509[2]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( i2511[i + 0] );
  }
  i2508.keywords = i2510
  i2508.vertexProgram = i2509[3]
  i2508.fragmentProgram = i2509[4]
  i2508.exportedForWebGl2 = !!i2509[5]
  i2508.readDepth = !!i2509[6]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2515 = data
  request.r(i2515[0], i2515[1], 0, i2514, 'shader')
  i2514.pass = i2515[2]
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2519 = data
  i2518.name = i2519[0]
  i2518.type = i2519[1]
  i2518.value = new pc.Vec4( i2519[2], i2519[3], i2519[4], i2519[5] )
  i2518.textureValue = i2519[6]
  i2518.shaderPropertyFlag = i2519[7]
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2521 = data
  i2520.name = i2521[0]
  request.r(i2521[1], i2521[2], 0, i2520, 'texture')
  i2520.aabb = i2521[3]
  i2520.vertices = i2521[4]
  i2520.triangles = i2521[5]
  i2520.textureRect = UnityEngine.Rect.MinMaxRect(i2521[6], i2521[7], i2521[8], i2521[9])
  i2520.packedRect = UnityEngine.Rect.MinMaxRect(i2521[10], i2521[11], i2521[12], i2521[13])
  i2520.border = new pc.Vec4( i2521[14], i2521[15], i2521[16], i2521[17] )
  i2520.transparency = i2521[18]
  i2520.bounds = i2521[19]
  i2520.pixelsPerUnit = i2521[20]
  i2520.textureWidth = i2521[21]
  i2520.textureHeight = i2521[22]
  i2520.nativeSize = new pc.Vec2( i2521[23], i2521[24] )
  i2520.pivot = new pc.Vec2( i2521[25], i2521[26] )
  i2520.textureRectOffset = new pc.Vec2( i2521[27], i2521[28] )
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2523 = data
  i2522.name = i2523[0]
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2525 = data
  i2524.name = i2525[0]
  i2524.ascent = i2525[1]
  i2524.originalLineHeight = i2525[2]
  i2524.fontSize = i2525[3]
  var i2527 = i2525[4]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2527[i + 0]) );
  }
  i2524.characterInfo = i2526
  request.r(i2525[5], i2525[6], 0, i2524, 'texture')
  i2524.originalFontSize = i2525[7]
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2531 = data
  i2530.index = i2531[0]
  i2530.advance = i2531[1]
  i2530.bearing = i2531[2]
  i2530.glyphWidth = i2531[3]
  i2530.glyphHeight = i2531[4]
  i2530.minX = i2531[5]
  i2530.maxX = i2531[6]
  i2530.minY = i2531[7]
  i2530.maxY = i2531[8]
  i2530.uvBottomLeftX = i2531[9]
  i2530.uvBottomLeftY = i2531[10]
  i2530.uvBottomRightX = i2531[11]
  i2530.uvBottomRightY = i2531[12]
  i2530.uvTopLeftX = i2531[13]
  i2530.uvTopLeftY = i2531[14]
  i2530.uvTopRightX = i2531[15]
  i2530.uvTopRightY = i2531[16]
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2533 = data
  i2532.name = i2533[0]
  i2532.bytes64 = i2533[1]
  i2532.data = i2533[2]
  return i2532
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2534 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2535 = data
  var i2537 = i2535[0]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 2) {
  request.r(i2537[i + 0], i2537[i + 1], 2, i2536, '')
  }
  i2534.atlasAssets = i2536
  i2534.scale = i2535[1]
  request.r(i2535[2], i2535[3], 0, i2534, 'skeletonJSON')
  i2534.isUpgradingBlendModeMaterials = !!i2535[4]
  i2534.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2535[5], i2534.blendModeMaterials)
  var i2539 = i2535[6]
  var i2538 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2539.length; i += 2) {
  request.r(i2539[i + 0], i2539[i + 1], 1, i2538, '')
  }
  i2534.skeletonDataModifiers = i2538
  var i2541 = i2535[7]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( i2541[i + 0] );
  }
  i2534.fromAnimation = i2540
  var i2543 = i2535[8]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( i2543[i + 0] );
  }
  i2534.toAnimation = i2542
  i2534.duration = i2535[9]
  i2534.defaultMix = i2535[10]
  request.r(i2535[11], i2535[12], 0, i2534, 'controller')
  return i2534
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2546 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2547 = data
  i2546.applyAdditiveMaterial = !!i2547[0]
  var i2549 = i2547[1]
  var i2548 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2549[i + 0]));
  }
  i2546.additiveMaterials = i2548
  var i2551 = i2547[2]
  var i2550 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2551.length; i += 1) {
    i2550.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2551[i + 0]));
  }
  i2546.multiplyMaterials = i2550
  var i2553 = i2547[3]
  var i2552 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2553[i + 0]));
  }
  i2546.screenMaterials = i2552
  i2546.requiresBlendModeMaterials = !!i2547[4]
  return i2546
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2556 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2557 = data
  i2556.pageName = i2557[0]
  request.r(i2557[1], i2557[2], 0, i2556, 'material')
  return i2556
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2560 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2561 = data
  request.r(i2561[0], i2561[1], 0, i2560, 'atlasFile')
  var i2563 = i2561[2]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 2) {
  request.r(i2563[i + 0], i2563[i + 1], 2, i2562, '')
  }
  i2560.materials = i2562
  i2560.textureLoadingMode = i2561[3]
  request.r(i2561[4], i2561[5], 0, i2560, 'onDemandTextureLoader')
  return i2560
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2564 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2565 = data
  i2564.useSafeMode = !!i2565[0]
  i2564.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2565[1], i2564.safeModeOptions)
  i2564.timeScale = i2565[2]
  i2564.unscaledTimeScale = i2565[3]
  i2564.useSmoothDeltaTime = !!i2565[4]
  i2564.maxSmoothUnscaledTime = i2565[5]
  i2564.rewindCallbackMode = i2565[6]
  i2564.showUnityEditorReport = !!i2565[7]
  i2564.logBehaviour = i2565[8]
  i2564.drawGizmos = !!i2565[9]
  i2564.defaultRecyclable = !!i2565[10]
  i2564.defaultAutoPlay = i2565[11]
  i2564.defaultUpdateType = i2565[12]
  i2564.defaultTimeScaleIndependent = !!i2565[13]
  i2564.defaultEaseType = i2565[14]
  i2564.defaultEaseOvershootOrAmplitude = i2565[15]
  i2564.defaultEasePeriod = i2565[16]
  i2564.defaultAutoKill = !!i2565[17]
  i2564.defaultLoopType = i2565[18]
  i2564.debugMode = !!i2565[19]
  i2564.debugStoreTargetId = !!i2565[20]
  i2564.showPreviewPanel = !!i2565[21]
  i2564.storeSettingsLocation = i2565[22]
  i2564.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2565[23], i2564.modules)
  i2564.createASMDEF = !!i2565[24]
  i2564.showPlayingTweens = !!i2565[25]
  i2564.showPausedTweens = !!i2565[26]
  return i2564
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2566 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2567 = data
  i2566.logBehaviour = i2567[0]
  i2566.nestedTweenFailureBehaviour = i2567[1]
  return i2566
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2568 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2569 = data
  i2568.showPanel = !!i2569[0]
  i2568.audioEnabled = !!i2569[1]
  i2568.physicsEnabled = !!i2569[2]
  i2568.physics2DEnabled = !!i2569[3]
  i2568.spriteEnabled = !!i2569[4]
  i2568.uiEnabled = !!i2569[5]
  i2568.textMeshProEnabled = !!i2569[6]
  i2568.tk2DEnabled = !!i2569[7]
  i2568.deAudioEnabled = !!i2569[8]
  i2568.deUnityExtendedEnabled = !!i2569[9]
  i2568.epoOutlineEnabled = !!i2569[10]
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2571 = data
  var i2573 = i2571[0]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2573[i + 0]) );
  }
  i2570.files = i2572
  i2570.componentToPrefabIds = i2571[1]
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2577 = data
  i2576.path = i2577[0]
  request.r(i2577[1], i2577[2], 0, i2576, 'unityObject')
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2579 = data
  var i2581 = i2579[0]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2581[i + 0]) );
  }
  i2578.scriptsExecutionOrder = i2580
  var i2583 = i2579[1]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2583[i + 0]) );
  }
  i2578.sortingLayers = i2582
  var i2585 = i2579[2]
  var i2584 = []
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2585[i + 0]) );
  }
  i2578.cullingLayers = i2584
  i2578.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2579[3], i2578.timeSettings)
  i2578.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2579[4], i2578.physicsSettings)
  i2578.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2579[5], i2578.physics2DSettings)
  i2578.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2579[6], i2578.qualitySettings)
  i2578.enableRealtimeShadows = !!i2579[7]
  i2578.enableAutoInstancing = !!i2579[8]
  i2578.enableStaticBatching = !!i2579[9]
  i2578.enableDynamicBatching = !!i2579[10]
  i2578.usePreservativeDynamicBatching = !!i2579[11]
  i2578.lightmapEncodingQuality = i2579[12]
  i2578.desiredColorSpace = i2579[13]
  var i2587 = i2579[14]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( i2587[i + 0] );
  }
  i2578.allTags = i2586
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2591 = data
  i2590.name = i2591[0]
  i2590.value = i2591[1]
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2595 = data
  i2594.id = i2595[0]
  i2594.name = i2595[1]
  i2594.value = i2595[2]
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2599 = data
  i2598.id = i2599[0]
  i2598.name = i2599[1]
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2601 = data
  i2600.fixedDeltaTime = i2601[0]
  i2600.maximumDeltaTime = i2601[1]
  i2600.timeScale = i2601[2]
  i2600.maximumParticleTimestep = i2601[3]
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2603 = data
  i2602.gravity = new pc.Vec3( i2603[0], i2603[1], i2603[2] )
  i2602.defaultSolverIterations = i2603[3]
  i2602.bounceThreshold = i2603[4]
  i2602.autoSyncTransforms = !!i2603[5]
  i2602.autoSimulation = !!i2603[6]
  var i2605 = i2603[7]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2605[i + 0]) );
  }
  i2602.collisionMatrix = i2604
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2609 = data
  i2608.enabled = !!i2609[0]
  i2608.layerId = i2609[1]
  i2608.otherLayerId = i2609[2]
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2611 = data
  request.r(i2611[0], i2611[1], 0, i2610, 'material')
  i2610.gravity = new pc.Vec2( i2611[2], i2611[3] )
  i2610.positionIterations = i2611[4]
  i2610.velocityIterations = i2611[5]
  i2610.velocityThreshold = i2611[6]
  i2610.maxLinearCorrection = i2611[7]
  i2610.maxAngularCorrection = i2611[8]
  i2610.maxTranslationSpeed = i2611[9]
  i2610.maxRotationSpeed = i2611[10]
  i2610.baumgarteScale = i2611[11]
  i2610.baumgarteTOIScale = i2611[12]
  i2610.timeToSleep = i2611[13]
  i2610.linearSleepTolerance = i2611[14]
  i2610.angularSleepTolerance = i2611[15]
  i2610.defaultContactOffset = i2611[16]
  i2610.autoSimulation = !!i2611[17]
  i2610.queriesHitTriggers = !!i2611[18]
  i2610.queriesStartInColliders = !!i2611[19]
  i2610.callbacksOnDisable = !!i2611[20]
  i2610.reuseCollisionCallbacks = !!i2611[21]
  i2610.autoSyncTransforms = !!i2611[22]
  var i2613 = i2611[23]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2613[i + 0]) );
  }
  i2610.collisionMatrix = i2612
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2617 = data
  i2616.enabled = !!i2617[0]
  i2616.layerId = i2617[1]
  i2616.otherLayerId = i2617[2]
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2619 = data
  var i2621 = i2619[0]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2621[i + 0]) );
  }
  i2618.qualityLevels = i2620
  var i2623 = i2619[1]
  var i2622 = []
  for(var i = 0; i < i2623.length; i += 1) {
    i2622.push( i2623[i + 0] );
  }
  i2618.names = i2622
  i2618.shadows = i2619[2]
  i2618.anisotropicFiltering = i2619[3]
  i2618.antiAliasing = i2619[4]
  i2618.lodBias = i2619[5]
  i2618.shadowCascades = i2619[6]
  i2618.shadowDistance = i2619[7]
  i2618.shadowmaskMode = i2619[8]
  i2618.shadowProjection = i2619[9]
  i2618.shadowResolution = i2619[10]
  i2618.softParticles = !!i2619[11]
  i2618.softVegetation = !!i2619[12]
  i2618.activeColorSpace = i2619[13]
  i2618.desiredColorSpace = i2619[14]
  i2618.masterTextureLimit = i2619[15]
  i2618.maxQueuedFrames = i2619[16]
  i2618.particleRaycastBudget = i2619[17]
  i2618.pixelLightCount = i2619[18]
  i2618.realtimeReflectionProbes = !!i2619[19]
  i2618.shadowCascade2Split = i2619[20]
  i2618.shadowCascade4Split = new pc.Vec3( i2619[21], i2619[22], i2619[23] )
  i2618.streamingMipmapsActive = !!i2619[24]
  i2618.vSyncCount = i2619[25]
  i2618.asyncUploadBufferSize = i2619[26]
  i2618.asyncUploadTimeSlice = i2619[27]
  i2618.billboardsFaceCameraPosition = !!i2619[28]
  i2618.shadowNearPlaneOffset = i2619[29]
  i2618.streamingMipmapsMemoryBudget = i2619[30]
  i2618.maximumLODLevel = i2619[31]
  i2618.streamingMipmapsAddAllCameras = !!i2619[32]
  i2618.streamingMipmapsMaxLevelReduction = i2619[33]
  i2618.streamingMipmapsRenderersPerFrame = i2619[34]
  i2618.resolutionScalingFixedDPIFactor = i2619[35]
  i2618.streamingMipmapsMaxFileIORequests = i2619[36]
  i2618.currentQualityLevel = i2619[37]
  return i2618
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2626 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2627 = data
  request.r(i2627[0], i2627[1], 0, i2626, 'm_ObjectArgument')
  i2626.m_ObjectArgumentAssemblyTypeName = i2627[2]
  i2626.m_IntArgument = i2627[3]
  i2626.m_FloatArgument = i2627[4]
  i2626.m_StringArgument = i2627[5]
  i2626.m_BoolArgument = !!i2627[6]
  return i2626
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[2],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[2],"72":[73],"74":[75],"76":[75],"8":[7],"22":[18],"77":[78],"79":[7],"80":[11,7],"81":[73],"18":[11,7],"82":[83,73],"84":[73,85],"86":[73],"87":[51],"88":[58],"89":[78],"90":[91],"92":[93],"94":[2],"95":[96],"97":[7],"98":[11,7],"99":[73],"100":[11,7],"101":[7],"102":[7],"103":[73,7],"104":[7,11],"105":[106],"107":[106],"108":[106],"109":[7],"110":[7],"10":[8],"12":[11,7],"111":[7],"9":[8],"112":[7],"113":[7],"114":[7],"115":[7],"116":[7],"117":[7],"118":[7],"17":[7],"119":[7],"120":[11,7],"121":[7],"122":[7],"123":[7],"16":[7],"13":[11,7],"124":[7],"125":[5],"126":[5],"6":[5],"127":[5],"128":[2],"129":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.Slider","UnityEngine.UI.Mask","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","AnimationController","CharacterSkinController","UnityEngine.GameObject","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","UnityEngine.AudioSource","InteractController","GameController","LayoutController","AudioController","UnityEngine.Transform","LunaController","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.SkeletonRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BMTP_Luna";

Deserializers.lunaInitializationTime = "08/24/2026 10:54:14";

Deserializers.lunaDaysRunning = "0.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "TBAP_V25_NgocNDL_TamNTM";

Deserializers.lunaAppID = "33901";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1868";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4329";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "96b83519-b93c-41e9-a988-fa34aa68065c";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

