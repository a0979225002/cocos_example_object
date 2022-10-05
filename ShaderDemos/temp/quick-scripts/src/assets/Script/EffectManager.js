"use strict";
cc._RF.push(module, 'bd1117F/2dLHJBPHjLTzcUt', 'EffectManager');
// Script/EffectManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EffectManager = /** @class */ (function (_super) {
    __extends(EffectManager, _super);
    function EffectManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fragShader = 'lightcircle';
        _this.default_vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void main()\n    {\n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color;\n        v_texCoord = a_texCoord;\n    }\n    ";
        _this.frag_glsl = '';
        _this.startTime = Date.now();
        _this.time = 0;
        _this.resolution = { x: 0.0, y: 0.0 };
        return _this;
    }
    // 初始化
    EffectManager.prototype.onLoad = function () {
        cc.director.setDisplayStats(true);
        this.resolution.x = (this.node.getContentSize().width);
        this.resolution.y = (this.node.getContentSize().height);
        var self = this;
        cc.loader.loadRes(this.fragShader, function (err, data) {
            if (err)
                cc.log(err);
            else {
                self.frag_glsl = data;
                self.useShader();
            }
        });
    };
    EffectManager.prototype.useShader = function () {
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(this.default_vert, this.frag_glsl);
        }
        else {
            this.program.initWithVertexShaderByteArray(this.default_vert, this.frag_glsl);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        }
        this.program.link();
        this.program.updateUniforms();
        this.program.use();
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformFloat("time", this.time);
            glProgram_state.setUniformVec2("resolution", this.resolution);
        }
        else {
            var ba = this.program.getUniformLocationForName("time");
            var res = this.program.getUniformLocationForName("resolution");
            this.program.setUniformLocationWith1f(ba, this.time);
            this.program.setUniformLocationWith2f(res, this.resolution.x, this.resolution.y);
        }
        this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
    };
    EffectManager.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
    };
    EffectManager.prototype.updateParameters = function () {
        this.time = (Date.now() - this.startTime) / 1000;
    };
    // 每帧更新函数
    EffectManager.prototype.update = function (dt) {
        this.updateParameters();
        if (this.program) {
            this.program.use();
            if (cc.sys.isNative) {
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
                glProgram_state.setUniformFloat("time", this.time);
            }
            else {
                var ct = this.program.getUniformLocationForName("time");
                this.program.setUniformLocationWith1f(ct, this.time);
            }
        }
    };
    __decorate([
        property
    ], EffectManager.prototype, "fragShader", void 0);
    EffectManager = __decorate([
        ccclass
    ], EffectManager);
    return EffectManager;
}(cc.Component));
exports.default = EffectManager;

cc._RF.pop();