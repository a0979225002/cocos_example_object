"use strict";
cc._RF.push(module, '60d02YpoG5BlpHIzjewzE0W', 'ShaderLab');
// Script/shader/ShaderLab.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MVP = "\nuniform mat4 viewProj;\nuniform mat4 model;\nattribute vec3 a_position;\nattribute vec2 a_uv0;\nvarying vec2 uv0;\nvoid main () {\n    mat4 mvp;\n    mvp = viewProj * model;\n    vec4 pos = mvp * vec4(a_position, 1);\n    gl_Position = pos;\n    uv0 = a_uv0;\n}\n";
var ShaderLab = {
    GrayScaling: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 c = texture2D(texture, uv0);\n    float gray = dot(c.rgb, vec3(0.299 * 0.5, 0.587 * 0.5, 0.114 * 0.5));\n    gl_FragColor = vec4(gray, gray, gray, c.a * 0.5);\n}\n"
    },
    Stone: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 c = color * texture2D(texture, uv0);\n    float clrbright = (c.r + c.g + c.b) * (1. / 3.);\n    float gray = (0.6) * clrbright;\n    gl_FragColor = vec4(gray, gray, gray, c.a);\n}\n"
    },
    Ice: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 clrx = color * texture2D(texture, uv0);\n    float brightness = (clrx.r + clrx.g + clrx.b) * (1. / 3.);\n\tfloat gray = (1.5)*brightness;\n\tclrx = vec4(gray, gray, gray, clrx.a)*vec4(0.8,1.2,1.5,1);\n    gl_FragColor =clrx;\n}\n"
    },
    Frozen: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 c = color * texture2D(texture, uv0);\n    c *= vec4(0.8, 1, 0.8, 1);\n\tc.b += c.a * 0.2;\n    gl_FragColor = c;\n}\n"
    },
    Mirror: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 c = color * texture2D(texture, uv0);\n    c.r *= 0.5;\n    c.g *= 0.8;\n    c.b += c.a * 0.2;\n    gl_FragColor = c;\n}\n"
    },
    Poison: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 c = color * texture2D(texture, uv0);\n    c.r *= 0.8;\n\tc.r += 0.08 * c.a;\n\tc.g *= 0.8;\n    c.g += 0.2 * c.a;\n\tc.b *= 0.8;\n    gl_FragColor = c;\n}\n"
    },
    Banish: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 c = color * texture2D(texture, uv0);\n    float gg = (c.r + c.g + c.b) * (1.0 / 3.0);\n    c.r = gg * 0.9;\n    c.g = gg * 1.2;\n    c.b = gg * 0.8;\n    c.a *= (gg + 0.1);\n    gl_FragColor = c;\n}\n"
    },
    Vanish: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 c = color * texture2D(texture, uv0);\n    float gray = (c.r + c.g + c.b) * (1. / 3.);\n    float rgb = gray * 0.8;\n    gl_FragColor = vec4(rgb, rgb, rgb, c.a * (gray + 0.1));\n}\n"
    },
    Invisible: {
        vert: MVP,
        frag: "\nvoid main () {\n    gl_FragColor = vec4(0,0,0,0);\n}\n"
    },
    Blur: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nuniform float num;\nvarying vec2 uv0;\nvoid main () {\n    vec4 sum = vec4(0.0);\n    vec2 size = vec2(num,num);\n    sum += texture2D(texture, uv0 - 0.4 * size) * 0.05;\n\tsum += texture2D(texture, uv0 - 0.3 * size) * 0.09;\n\tsum += texture2D(texture, uv0 - 0.2 * size) * 0.12;\n\tsum += texture2D(texture, uv0 - 0.1 * size) * 0.15;\n\tsum += texture2D(texture, uv0             ) * 0.16;\n\tsum += texture2D(texture, uv0 + 0.1 * size) * 0.15;\n\tsum += texture2D(texture, uv0 + 0.2 * size) * 0.12;\n\tsum += texture2D(texture, uv0 + 0.3 * size) * 0.09;\n    sum += texture2D(texture, uv0 + 0.4 * size) * 0.05;\n    \n    vec4 vectemp = vec4(0,0,0,0);\n    vec4 substract = vec4(0,0,0,0);\n    vectemp = (sum - substract) * color;\n\n    float alpha = texture2D(texture, uv0).a;\n    if(alpha < 0.05) { gl_FragColor = vec4(0 , 0 , 0 , 0); }\n\telse { gl_FragColor = vectemp; }\n}\n"
    },
    GaussBlur: {
        vert: MVP,
        frag: "\n#define repeats 5.\nuniform sampler2D texture;\nuniform vec4 color;\nuniform float num;\nvarying vec2 uv0;\n\nvec4 draw(vec2 uv) {\n    return color * texture2D(texture,uv).rgba; \n}\nfloat grid(float var, float size) {\n    return floor(var*size)/size;\n}\nfloat rand(vec2 co){\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\nvoid main()\n{\n    vec4 blurred_image = vec4(0.);\n    for (float i = 0.; i < repeats; i++) { \n        vec2 q = vec2(cos(degrees((i/repeats)*360.)),sin(degrees((i/repeats)*360.))) * (rand(vec2(i,uv0.x+uv0.y))+num); \n        vec2 uv2 = uv0+(q*num);\n        blurred_image += draw(uv2)/2.;\n        q = vec2(cos(degrees((i/repeats)*360.)),sin(degrees((i/repeats)*360.))) * (rand(vec2(i+2.,uv0.x+uv0.y+24.))+num); \n        uv2 = uv0+(q*num);\n        blurred_image += draw(uv2)/2.;\n    }\n    blurred_image /= repeats;\n    gl_FragColor = vec4(blurred_image);\n}\n"
    },
    Dissolve: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nuniform float time;\nvarying vec2 uv0;\n\nvoid main()\n{\n    vec4 c = color * texture2D(texture,uv0);\n    float height = c.r;\n    if(height < time)\n    {\n        discard;\n    }\n    if(height < time+0.04)\n    {\n        // \u6EB6\u89E3\u989C\u8272\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\n        c = vec4(.9,.6,0.3,c.a);\n    }\n    gl_FragColor = c;\n}\n"
    },
    Fluxay: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nuniform float time;\nvarying vec2 uv0;\n\nvoid main()\n{\n    vec4 src_color = color * texture2D(texture, uv0).rgba;\n\n    float width = 0.08;       //\u6D41\u5149\u7684\u5BBD\u5EA6\u8303\u56F4 (\u8C03\u6574\u8BE5\u503C\u6539\u53D8\u6D41\u5149\u7684\u5BBD\u5EA6)\n    float start = tan(time/1.414);  //\u6D41\u5149\u7684\u8D77\u59CBx\u5750\u6807\n    float strength = 0.008;   //\u6D41\u5149\u589E\u4EAE\u5F3A\u5EA6   (\u8C03\u6574\u8BE5\u503C\u6539\u53D8\u6D41\u5149\u7684\u589E\u4EAE\u5F3A\u5EA6)\n    float offset = 0.5;      //\u504F\u79FB\u503C         (\u8C03\u6574\u8BE5\u503C\u6539\u53D8\u6D41\u5149\u7684\u503E\u659C\u7A0B\u5EA6)\n    if(uv0.x < (start - offset * uv0.y) &&  uv0.x > (start - offset * uv0.y - width))\n    {\n        vec3 improve = strength * vec3(255, 255, 255);\n        vec3 result = improve * vec3( src_color.r, src_color.g, src_color.b);\n        gl_FragColor = vec4(result, src_color.a);\n\n    }else{\n        gl_FragColor = src_color;\n    }\n}\n"
    },
    FluxaySuper: {
        vert: MVP,
        frag: "\n#define TAU 6.12\n#define MAX_ITER 5\nuniform sampler2D texture;\nuniform vec4 color;\nuniform float time;\nvarying vec2 uv0;\n\nvoid main()\n{\n    float time = time * .5+5.;\n    // uv should be the 0-1 uv of texture...\n    vec2 uv = uv0.xy;//fragCoord.xy / iResolution.xy;\n    \n    vec2 p = mod(uv*TAU, TAU)-250.0;\n\n    vec2 i = vec2(p);\n    float c = 1.0;\n    float inten = .0045;\n\n    for (int n = 0; n < MAX_ITER; n++) \n    {\n        float t =  time * (1.0 - (3.5 / float(n+1)));\n        i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(1.5*t + i.x));\n        c += 1.0/length(vec2(p.x / (cos(i.x+t)/inten),p.y / (cos(i.y+t)/inten)));\n    }\n    c /= float(MAX_ITER);\n    c = 1.17-pow(c, 1.4);\n    vec4 tex = texture2D(texture,uv);\n    vec3 colour = vec3(pow(abs(c), 20.0));\n    colour = clamp(colour + vec3(0.0, 0.0, .0), 0.0, tex.a);\n\n    // \u6DF7\u5408\u6CE2\u5149\n    float alpha = c*tex[3];  \n    tex[0] = tex[0] + colour[0]*alpha; \n    tex[1] = tex[1] + colour[1]*alpha; \n    tex[2] = tex[2] + colour[2]*alpha; \n    gl_FragColor = color * tex;\n}\n"
    },
    Pure: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 c = color * texture2D(texture, uv0);\n    gl_FragColor = vec4(color.rgb, c.a);\n}\n"
    },
    WaterWave: {
        vert: MVP,
        frag: "\n#define F cos(x-y)*cos(y),sin(x+y)*sin(y)\n\nuniform sampler2D texture;\nuniform float time;\nuniform vec3 resolution;\nvarying vec2 uv0;\n\nvec2 s(vec2 p)\n{\n    float d=time*0.2,x=8.*(p.x+d),y=8.*(p.y+d);\n    return vec2(F);\n}\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n    // \u6362\u6210resolution\n    vec2 rs = resolution.xy;\n    // \u6362\u6210\u7EB9\u7406\u5750\u6807v_texCoord.xy\n    vec2 uv = uv0.xy;\n    vec2 q = uv+2./resolution.x*(s(uv)-s(uv+rs));\n    //\u53CD\u8F6Cy\n    // q.y=1.-q.y;\n    fragColor = texture2D(texture,q);\n}\nvoid main()\n{\n    mainImage(gl_FragColor, gl_FragCoord.xy);\n}\n"
    }
};
exports.default = ShaderLab;

cc._RF.pop();