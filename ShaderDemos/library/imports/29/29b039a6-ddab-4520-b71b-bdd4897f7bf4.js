"use strict";
cc._RF.push(module, '29b03mm3atFILcbvdSJf3v0', 'ShaderFSH');
// Script/shader/ShaderFSH.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MVP = "\nuniform mat4 viewProj;\nuniform mat4 model;\nattribute vec3 a_position;\nattribute vec2 a_uv0;\nvarying vec2 uv0;\nvoid main () {\n    mat4 mvp;\n    mvp = viewProj * model;\n    vec4 pos = mvp * vec4(a_position, 1);\n    gl_Position = pos;\n    uv0 = a_uv0;\n}\n";
var ShaderFSH = [
    {
        name: "GrayScaling",
        vert: MVP,
        defines: [],
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 c = color * texture2D(texture, uv0);\n    float gray = dot(c.rgb, vec3(0.299 * 0.5, 0.587 * 0.5, 0.114 * 0.5));\n    gl_FragColor = vec4(gray, gray, gray, c.a * 0.5);\n}\n"
    },
    {
        name: "WaterWave",
        vert: MVP,
        defines: [],
        frag: "\n#define F cos(x-y)*cos(y),sin(x+y)*sin(y)\n\nuniform sampler2D texture;\nuniform float iTime;\nuniform vec3 resolution;\nvarying vec2 uv0;\n\nvec2 s(vec2 p)\n{\n    float d=iTime*0.2,x=8.*(p.x+d),y=8.*(p.y+d);\n    return vec2(F);\n}\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n    // \u6362\u6210resolution\n    vec2 rs = resolution.xy;\n    // \u6362\u6210\u7EB9\u7406\u5750\u6807 uv0\n    vec2 uv = uv0.xy;\n    vec2 q = uv+2./resolution.x*(s(uv)-s(uv+rs));\n    //\u53CD\u8F6Cy\n    // q.y=1.-q.y;\n    fragColor = texture2D(texture,q);\n}\nvoid main()\n{\n    mainImage(gl_FragColor, gl_FragCoord.xy);\n}\n"
    },
    {
        name: "StartLighting",
        vert: MVP,
        defines: [],
        frag: "\nuniform float iTime;\nuniform vec3 resolution;\nvarying vec2 uv0;\n\nvec2 hash(in vec2 p)\n{\n  p=vec2(dot(p,vec2(127.1,311.7)),\n  dot(p,vec2(269.5,183.3)));\n  \n  return-1.+2.*fract(sin(p)*43758.5453123);\n}\n\nfloat noise(in vec2 p)\n{\n  const float K1=.366025404;\n  const float K2=.211324865;\n  \n  vec2 i=floor(p+(p.x+p.y)*K1);\n  \n  vec2 a=p-i+(i.x+i.y)*K2;\n  vec2 o=step(a.yx,a.xy);\n  vec2 b=a-o+K2;\n  vec2 c=a-1.+2.*K2;\n  \n  vec3 h=max(.5-vec3(dot(a,a),dot(b,b),dot(c,c)),.0);\n  \n  vec3 n=h*h*h*h*vec3(dot(a,hash(i+.0)),\n  dot(b,hash(i+o)),\n  dot(c,hash(i+1.)));\n  \n  return dot(n,vec3(70.));\n}\n\nfloat fbm(in vec2 p,float time)\n{\n  float c=cos(time/sqrt(3.));\n  float d=noise(p);\n  d+=.5*noise(p+vec2(+c,+0.));\n  d+=.25*noise(p+vec2(+0.,+c));\n  d+=.125*noise(p+vec2(-c,+0.));\n  d+=.0625*noise(p+vec2(+0.,-c));\n  d/=(1.+.5+.25+.125+.0625);\n  return.5+.5*d;\n}\n\nvec2 toPolar(in vec2 p)\n{\n  float r=length(p);\n  float a=atan(p.y,p.x);\n  return vec2(r,a);\n}\n\nvec2 toRect(in vec2 p)\n{\n  float x=p.x*cos(p.y);\n  float y=p.x*sin(p.y);\n  return vec2(x,y);\n}\n\n\n\nvec3 electric(in vec2 uv)\n{\n  const float thickness=.25;\n  const float haze=2.5;\n  const float size=.075;\n  const int count=3;\n  \n  vec2 p=uv;\n  \n  vec2 pp=toPolar(p);\n  pp.y+=.2*p.x;\n  p=toRect(pp);\n  \n  vec3 col=vec3(0.);\n  \n  float a1=smoothstep(.05,1.,length(p-vec2(-.6,0.)));\n  float a2=smoothstep(.05,1.,length(p-vec2(.6,0.)));\n  float s1=1./(a1+.1)*1.1;\n  float s2=1./(a2+.1)*1.1;\n  \n  float e1=1.6+.4*sin(iTime*sqrt(2.));\n  float e2=e1;\n  \n  for(int i=0;i<count;++i)\n  {\n    float fi=float(i);\n    float time=iTime+fi;\n    float fe1=(pow(fi+1.,.2))*e1;\n    float fe2=fe1;\n    vec2 o1=1.5*time*vec2(0,-1);\n    vec2 o2=o1;\n    float d1=abs((p.y*haze)*thickness/(p.y-fe1*fbm(p+o1,time*.11)*a1))*s1;\n    float d2=abs((p.y*haze)*thickness/(p.y-fe2*fbm(p+o2,time*.09)*a2))*s2;\n    col+=d1*size*vec3(.1,.8,2.);\n    col+=d2*size*vec3(2.,.1,.8);\n  }\n  \n  col/=float(count-1);\n  return col;\n}\n\nvoid mainImage(out vec4 fragColor,in vec2 fragCoord)\n{\n  vec2 uv=uv0.xy;\n  uv.x=2.*uv.x-1.;\n  uv.y=1.-2.*uv.y;\n  uv.x*=resolution.x/resolution.y;\n\n  vec3 col=electric(uv*2.);\n\n  fragColor=vec4(col,1.);\n}\nvoid main()\n{\n    mainImage(gl_FragColor, gl_FragCoord.xy);\n}\n        "
    },
    {
        name: "Blackhole",
        vert: MVP,
        defines: [],
        frag: "\nuniform vec3 resolution;\nvarying vec2 uv0;\n#define f(a) exp(-10.*pow(length(U-.52*cos(a+vec2(0.0,33.0))), 2.))\n\nvoid mainImage(out vec4 fragColor, in vec2 fragCoord)\n{\n    vec2 rs = resolution.xy;\n    vec2 U = (2.*uv0*rs-rs)/rs.y;\n    // \u7FFB\u8F6CY\n    U.y=-U.y;\n    \n    fragColor = (.5-.5*cos(min(6.*length(U),6.3)))*(.7*vec4(1.,.25,0.0,.0)\n    +(f(.65)+f(1.6)+f(2.8))*vec4(.8,.8,.5,0.))\n    +vec4(vec3(.0),1.);//\u9ED1\u8272\u80CC\u666F\n}\nvoid main()\n{\n    mainImage(gl_FragColor, gl_FragCoord.xy);\n}\n    "
    }
];
cc.game.once(cc.game.EVENT_ENGINE_INITED, function () {
    ShaderFSH.forEach(function (val) {
        // shader模板定义 名字，顶点着色器，片段着色器，宏定义列表，引擎初始化完成即定义
        // @ts-ignore
        cc.renderer._forward._programLib.define(val.name, val.vert, val.frag, val.defines || []);
    });
});
exports.default = ShaderFSH;

cc._RF.pop();