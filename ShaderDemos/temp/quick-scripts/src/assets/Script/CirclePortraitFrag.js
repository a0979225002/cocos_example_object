"use strict";
cc._RF.push(module, '19c76ks9PBILogq3fvEqG5h', 'CirclePortraitFrag');
// Script/CirclePortraitFrag.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Feofox Game
// Author:Lerry
// https://github.com/fylz1125/ShaderDemos
var CircleFrag = /** @class */ (function () {
    function CircleFrag() {
    }
    CircleFrag.circle_vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void main()\n    {\n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color;\n        v_texCoord = a_texCoord;\n    }\n    ";
    CircleFrag.circle_frag = "\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n\n    varying vec4 v_fragmentColor;\n    varying vec2 v_texCoord;\n\n    uniform float u_edge;\n    uniform float u_offset; \n\n    void main()\n    {\n        float edge = u_edge;\n        float dis = 0.0;\n        vec2 texCoord = v_texCoord;\n        if ( texCoord.x < edge )\n        {\n            if ( texCoord.y < edge )\n            {\n                dis = distance( texCoord, vec2(edge, edge) );\n            }\n            if ( texCoord.y > (1.0 - edge) )\n            {\n                dis = distance( texCoord, vec2(edge, (1.0 - edge)) );\n            }\n        }\n        else if ( texCoord.x > (1.0 - edge) )\n        {\n            if ( texCoord.y < edge )\n            {\n                dis = distance( texCoord, vec2((1.0 - edge), edge ) );\n            }\n            if ( texCoord.y > (1.0 - edge) )\n            {\n                dis = distance( texCoord, vec2((1.0 - edge), (1.0 - edge) ) );\n            }\n        }\n  \n        if(dis > 0.001)\n        {\n            // \u5916\u5708\u6C9F\n            float gap = edge * 0.02;\n            if(dis <= edge - gap)\n            {\n                gl_FragColor = texture2D( CC_Texture0,texCoord);\n            }\n            else if(dis <= edge)\n            {\n                // \u5E73\u6ED1\u8FC7\u6E21\n                float t = smoothstep(0.,gap,edge-dis);\n                vec4 color = texture2D( CC_Texture0,texCoord);\n                gl_FragColor = vec4(color.rgb,t);\n            }else{\n                gl_FragColor = vec4(0.,0.,0.,0.);\n            }\n        }\n        else\n        {\n            gl_FragColor = texture2D( CC_Texture0,texCoord);\n        }\n    }\n\n    ";
    return CircleFrag;
}());
exports.default = CircleFrag;

cc._RF.pop();