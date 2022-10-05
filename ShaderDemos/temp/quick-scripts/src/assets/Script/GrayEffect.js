"use strict";
cc._RF.push(module, '25ea7qT3A5DTrk6mpTAwlYf', 'GrayEffect');
// Script/GrayEffect.ts

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
var GrayFrag_1 = require("./GrayFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GrayEffect = /** @class */ (function (_super) {
    __extends(GrayEffect, _super);
    function GrayEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAllChildrenUse = false;
        return _this;
    }
    GrayEffect.prototype.onLoad = function () {
        this.grayShader();
    };
    // 变灰shader
    GrayEffect.prototype.grayShader = function () {
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(GrayFrag_1.default.default_vert, GrayFrag_1.default.gray_frag);
            this.program.link();
            this.program.updateUniforms();
        }
        else {
            this.program.initWithVertexShaderByteArray(GrayFrag_1.default.default_vert, GrayFrag_1.default.gray_frag);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
            this.program.link();
            this.program.updateUniforms();
        }
        if (this.isAllChildrenUse) {
            this.setProgram(this.node._sgNode, this.program);
        }
        else {
            this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
        }
    };
    GrayEffect.prototype.setProgram = function (node, program) {
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
    // 恢复默认shader
    GrayEffect.prototype.resetProgram = function (node) {
        node.getComponent(cc.Sprite)._sgNode.setState(0);
        var children = node.children;
        if (!children)
            return;
        for (var i = 0; i < children.length; i++) {
            this.resetProgram(children[i]);
        }
    };
    GrayEffect.prototype.resetShader = function () {
        if (this.isAllChildrenUse) {
            this.resetProgram(this.node);
        }
        else {
            this.node.getComponent(cc.Sprite)._sgNode.setState(0);
        }
    };
    __decorate([
        property
    ], GrayEffect.prototype, "isAllChildrenUse", void 0);
    GrayEffect = __decorate([
        ccclass
    ], GrayEffect);
    return GrayEffect;
}(cc.Component));
exports.default = GrayEffect;

cc._RF.pop();