"use strict";
cc._RF.push(module, 'd97daHlXyRMC7SfPeNmozga', 'SearchLightFrag');
// Script/SearchLightFrag.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SearchLightFrag = /** @class */ (function () {
    function SearchLightFrag() {
    }
    SearchLightFrag.search_light_vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void main()\n    {\n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color;\n        v_texCoord = a_texCoord;\n    }\n    ";
    SearchLightFrag.search_light_frag = "\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n    uniform vec2 resolution;\n    uniform vec2 mouse;\n    varying vec2 v_texCoord;\n\n    void mainImage( out vec4 fragColor, in vec2 fragCoord )\n    {\n        // y\u5750\u6807\u7FFB\u8F6C\n        vec2 imouse = vec2(mouse.x, resolution.y - mouse.y);\n        // \u7EB9\u7406\u5750\u6807\n        vec2 uv = v_texCoord.xy ;\n        // \u7EB9\u7406\u91C7\u6837\n        vec4 tex = texture2D(CC_Texture0, uv);\n        // \u7247\u5143\u5230\u9F20\u6807\u70B9\u7684\u5DEE\u5411\u91CF\n        vec2 d = uv*resolution.xy -imouse.xy ;\n        // \u5149\u7167\u534A\u5F84\n        vec2 s = 0.15 * resolution.xy;\n        // \u70B9\u79EF\u53D6\u6BD4\u4F8B\n        float r = dot(d, d)/dot(s,s);\n        fragColor =  tex * (1.08 - r);   \n    }\n    void main()\n    {\n        mainImage(gl_FragColor, gl_FragCoord.xy);\n    }\n    ";
    return SearchLightFrag;
}());
exports.default = SearchLightFrag;

cc._RF.pop();