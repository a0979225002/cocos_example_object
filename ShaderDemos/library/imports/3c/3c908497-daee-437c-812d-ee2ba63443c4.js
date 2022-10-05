"use strict";
cc._RF.push(module, '3c908SX2u5DfIEt7iumNEPE', 'GaussBlurEffect');
// Script/GaussBlurEffect.ts

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
var GaussBlursFrag_1 = require("./GaussBlursFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GaussBlurEffect = /** @class */ (function (_super) {
    __extends(GaussBlurEffect, _super);
    function GaussBlurEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAllChildrenUse = false;
        _this.slider = null;
        _this.blurText = null;
        _this.bluramount = 0.10;
        return _this;
    }
    GaussBlurEffect.prototype.onLoad = function () {
        this.bluramount = this.slider.progress / 10;
        this.blurText.string = (this.slider.progress * 100).toString();
        this.useBlur();
    };
    GaussBlurEffect.prototype.start = function () {
    };
    GaussBlurEffect.prototype.useBlur = function () {
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(GaussBlursFrag_1.default.blurs_vert, GaussBlursFrag_1.default.blurs_frag);
        }
        else {
            this.program.initWithVertexShaderByteArray(GaussBlursFrag_1.default.blurs_vert, GaussBlursFrag_1.default.blurs_frag);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        }
        this.program.link();
        this.program.updateUniforms();
        this.program.use();
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformFloat("bluramount", this.bluramount);
        }
        else {
            var ba = this.program.getUniformLocationForName("bluramount");
            this.program.setUniformLocationWith1f(ba, this.bluramount);
        }
        if (this.isAllChildrenUse) {
            this.setProgram(this.node._sgNode, this.program);
        }
        else {
            this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
        }
    };
    GaussBlurEffect.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
        var children = node.children;
        if (!children)
            return;
        for (var i = 0; i < children.length; i++) {
            this.setProgram(children[i], program);
        }
    };
    GaussBlurEffect.prototype.onSliderBlurAmount = function (slider, eventType) {
        this.bluramount = Number((this.slider.progress / 10).toFixed(3));
        this.blurText.string = (this.bluramount * 1000).toString();
        this.changeBlurAmount(this.bluramount);
    };
    GaussBlurEffect.prototype.changeBlurAmount = function (amount) {
        if (this.program) {
            this.program.use();
            if (cc.sys.isNative) {
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
                glProgram_state.setUniformFloat("bluramount", this.bluramount);
            }
            else {
                var ba = this.program.getUniformLocationForName("bluramount");
                this.program.setUniformLocationWith1f(ba, this.bluramount);
            }
        }
    };
    __decorate([
        property
    ], GaussBlurEffect.prototype, "isAllChildrenUse", void 0);
    __decorate([
        property(cc.Slider)
    ], GaussBlurEffect.prototype, "slider", void 0);
    __decorate([
        property(cc.Label)
    ], GaussBlurEffect.prototype, "blurText", void 0);
    GaussBlurEffect = __decorate([
        ccclass
    ], GaussBlurEffect);
    return GaussBlurEffect;
}(cc.Component));
exports.default = GaussBlurEffect;

cc._RF.pop();