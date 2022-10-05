"use strict";
cc._RF.push(module, 'e8aabh4tllDR7kMBCxz7hqp', 'FluxayEffect');
// Script/FluxayEffect.ts

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
// Feofox Game
// Author:Lerry
// https://github.com/fylz1125/ShaderDemos
var FluxayFrag_1 = require("./FluxayFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FluxayEffect = /** @class */ (function (_super) {
    __extends(FluxayEffect, _super);
    function FluxayEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mode = 0;
        _this.fragStr = null;
        _this.startTime = Date.now();
        _this.time = 0;
        return _this;
    }
    FluxayEffect.prototype.onLoad = function () {
        if (this.mode == 0) {
            this.fragStr = FluxayFrag_1.default.fluxay_frag;
        }
        else {
            this.fragStr = FluxayFrag_1.default.fluxay_frag_super;
        }
        this.useWater();
    };
    FluxayEffect.prototype.start = function () {
    };
    FluxayEffect.prototype.useWater = function () {
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(FluxayFrag_1.default.fluxay_vert, this.fragStr);
        }
        else {
            this.program.initWithVertexShaderByteArray(FluxayFrag_1.default.fluxay_vert, this.fragStr);
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
        }
        else {
            var ba = this.program.getUniformLocationForName("time");
            this.program.setUniformLocationWith1f(ba, this.time);
        }
        this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
    };
    FluxayEffect.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
    };
    FluxayEffect.prototype.update = function (dt) {
        this.time = (Date.now() - this.startTime) / 1000;
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
    ], FluxayEffect.prototype, "mode", void 0);
    FluxayEffect = __decorate([
        ccclass
    ], FluxayEffect);
    return FluxayEffect;
}(cc.Component));
exports.default = FluxayEffect;

cc._RF.pop();