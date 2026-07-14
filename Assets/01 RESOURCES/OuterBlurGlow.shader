Shader "Custom/UI/OuterBlurGlowFixed"
{
    Properties
    {
        [PerRendererData]
        _MainTex ("Sprite Texture", 2D) = "white" {}

        _Color ("Tint", Color) = (1,1,1,1)

        [HDR]
        _GlowColor ("Glow Color", Color) = (0,1,1,1)

        _GlowRadius ("Glow Radius", Range(0,40)) = 10
        _GlowIntensity ("Glow Intensity", Range(0,10)) = 2
        _GlowFalloff ("Glow Falloff", Range(0.2,4)) = 1.2

        _Padding ("Mesh Padding", Range(0,100)) = 20

        _StencilComp ("Stencil Comparison", Float) = 8
        _Stencil ("Stencil ID", Float) = 0
        _StencilOp ("Stencil Operation", Float) = 0
        _StencilWriteMask ("Stencil Write Mask", Float) = 255
        _StencilReadMask ("Stencil Read Mask", Float) = 255
        _ColorMask ("Color Mask", Float) = 15

        [Toggle(UNITY_UI_ALPHACLIP)]
        _UseUIAlphaClip ("Use Alpha Clip", Float) = 0
    }

    SubShader
    {
        Tags
        {
            "Queue" = "Transparent"
            "IgnoreProjector" = "True"
            "RenderType" = "Transparent"
            "PreviewType" = "Plane"
            "CanUseSpriteAtlas" = "True"
        }

        Stencil
        {
            Ref [_Stencil]
            Comp [_StencilComp]
            Pass [_StencilOp]
            ReadMask [_StencilReadMask]
            WriteMask [_StencilWriteMask]
        }

        Cull Off
        Lighting Off
        ZWrite Off
        ZTest [unity_GUIZTestMode]

        Blend SrcAlpha OneMinusSrcAlpha
        ColorMask [_ColorMask]

        Pass
        {
            CGPROGRAM

            #pragma vertex vert
            #pragma fragment frag

            #pragma multi_compile_local _ UNITY_UI_CLIP_RECT
            #pragma multi_compile_local _ UNITY_UI_ALPHACLIP

            #include "UnityCG.cginc"
            #include "UnityUI.cginc"

            struct appdata_t
            {
                float4 vertex : POSITION;
                float4 color : COLOR;
                float2 uv0 : TEXCOORD0;
                float2 uv1 : TEXCOORD1;

                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            struct v2f
            {
                float4 vertex : SV_POSITION;
                fixed4 color : COLOR;
                float2 spriteUV : TEXCOORD0;
                float2 quadUV : TEXCOORD1;
                float4 localPosition : TEXCOORD2;

                UNITY_VERTEX_OUTPUT_STEREO
            };

            sampler2D _MainTex;
            float4 _MainTex_TexelSize;

            fixed4 _Color;
            fixed4 _GlowColor;

            float _GlowRadius;
            float _GlowIntensity;
            float _GlowFalloff;
            float _Padding;

            float4 _ClipRect;

            v2f vert(appdata_t input)
            {
                v2f output;

                UNITY_SETUP_INSTANCE_ID(input);
                UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(output);

                output.localPosition = input.vertex;
                output.vertex = UnityObjectToClipPos(input.vertex);

                output.spriteUV = input.uv0;
                output.quadUV = input.uv1;
                output.color = input.color * _Color;

                return output;
            }

            float Inside01(float2 uv)
            {
                return
                    step(0.0, uv.x) *
                    step(uv.x, 1.0) *
                    step(0.0, uv.y) *
                    step(uv.y, 1.0);
            }

            fixed4 SampleSprite(float2 spriteUV, float2 quadUV)
            {
                float inside = Inside01(quadUV);

                return tex2D(_MainTex, spriteUV) * inside;
            }

            fixed4 frag(v2f input) : SV_Target
            {
                /*
                    Chuyển quad UV mở rộng về UV của vùng sprite gốc.

                    padding càng lớn thì vùng sprite thật càng nằm sâu
                    bên trong quad mở rộng.
                */
                float padding = max(_Padding, 0.0001);
                float radius = min(_GlowRadius, padding);

                float2 texel = _MainTex_TexelSize.xy;
                float2 quadUV = input.quadUV;

                /*
                    uv1 ban đầu vẫn là 0..1 trên mesh gốc.
                    Sau khi mesh được mở rộng, cần suy ra vùng UV
                    tương ứng với sprite.
                */
                float2 expansion =
                    texel * padding;

                float2 sourceQuadUV =
                    lerp(
                        -expansion,
                        1.0 + expansion,
                        quadUV
                    );

                float2 spriteUV =
                    input.spriteUV +
                    (sourceQuadUV - quadUV);

                float originalAlpha =
                    SampleSprite(spriteUV, sourceQuadUV).a;

                float2 offset1 =
                    texel * radius * 0.25;

                float2 offset2 =
                    texel * radius * 0.55;

                float2 offset3 =
                    texel * radius;

                float blurredAlpha = 0.0;
                float totalWeight = 0.0;

                #define ADD_SAMPLE(OFFSET, WEIGHT) \
                    blurredAlpha += SampleSprite( \
                        spriteUV + OFFSET, \
                        sourceQuadUV + OFFSET \
                    ).a * WEIGHT; \
                    totalWeight += WEIGHT;

                ADD_SAMPLE(float2(0, 0), 0.12)

                ADD_SAMPLE(float2( offset1.x, 0), 0.07)
                ADD_SAMPLE(float2(-offset1.x, 0), 0.07)
                ADD_SAMPLE(float2(0,  offset1.y), 0.07)
                ADD_SAMPLE(float2(0, -offset1.y), 0.07)

                ADD_SAMPLE(float2( offset1.x,  offset1.y), 0.045)
                ADD_SAMPLE(float2(-offset1.x,  offset1.y), 0.045)
                ADD_SAMPLE(float2( offset1.x, -offset1.y), 0.045)
                ADD_SAMPLE(float2(-offset1.x, -offset1.y), 0.045)

                ADD_SAMPLE(float2( offset2.x, 0), 0.04)
                ADD_SAMPLE(float2(-offset2.x, 0), 0.04)
                ADD_SAMPLE(float2(0,  offset2.y), 0.04)
                ADD_SAMPLE(float2(0, -offset2.y), 0.04)

                ADD_SAMPLE(float2( offset2.x,  offset2.y), 0.025)
                ADD_SAMPLE(float2(-offset2.x,  offset2.y), 0.025)
                ADD_SAMPLE(float2( offset2.x, -offset2.y), 0.025)
                ADD_SAMPLE(float2(-offset2.x, -offset2.y), 0.025)

                ADD_SAMPLE(float2( offset3.x, 0), 0.02)
                ADD_SAMPLE(float2(-offset3.x, 0), 0.02)
                ADD_SAMPLE(float2(0,  offset3.y), 0.02)
                ADD_SAMPLE(float2(0, -offset3.y), 0.02)

                #undef ADD_SAMPLE

                blurredAlpha /=
                    max(totalWeight, 0.0001);

                float outerGlow =
                    saturate(blurredAlpha - originalAlpha);

                outerGlow =
                    pow(
                        saturate(outerGlow),
                        _GlowFalloff
                    );

                fixed4 sprite =
                    SampleSprite(spriteUV, sourceQuadUV) *
                    input.color;

                fixed glowAlpha =
                    outerGlow *
                    _GlowColor.a *
                    _GlowIntensity;

                fixed3 glowRGB =
                    _GlowColor.rgb *
                    _GlowIntensity;

                fixed finalAlpha =
                    sprite.a +
                    glowAlpha * (1.0 - sprite.a);

                fixed3 finalRGB =
                    lerp(
                        glowRGB,
                        sprite.rgb,
                        sprite.a
                    );

                #ifdef UNITY_UI_CLIP_RECT
                    finalAlpha *= UnityGet2DClipping(
                        input.localPosition.xy,
                        _ClipRect
                    );
                #endif

                #ifdef UNITY_UI_ALPHACLIP
                    clip(finalAlpha - 0.001);
                #endif

                return fixed4(finalRGB, finalAlpha);
            }

            ENDCG
        }
    }

    FallBack Off
}