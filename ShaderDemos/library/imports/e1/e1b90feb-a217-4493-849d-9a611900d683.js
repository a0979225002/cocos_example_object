"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'TransferEffect');
// Script/TransferEffect.ts

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
var TransferFrag_1 = require("./TransferFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TransferEffect = /** @class */ (function (_super) {
    __extends(TransferEffect, _super);
    function TransferEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAllChildrenUse = false;
        _this.time = 0;
        return _this;
    }
    TransferEffect.prototype.start = function () {
        // init logic
        this.enabled = false;
    };
    TransferEffect.prototype.useShader = function () {
        var bgSp = this.node.getComponent(cc.Sprite);
        this.program = new cc.GLProgram();
        if (!cc.sys.isNative) {
            this.program.initWithVertexShaderByteArray(TransferFrag_1.default.vert, TransferFrag_1.default.frag);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        }
        else {
            this.program.initWithString(TransferFrag_1.default.vert, TransferFrag_1.default.frag);
        }
        this.program.link();
        this.program.updateUniforms();
        this.program.use();
        if (!cc.sys.isNative) {
            var time = this.program.getUniformLocationForName("time");
            this.program.setUniformLocationWith1f(time, this.time);
        }
        else {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformFloat("time", this.time);
        }
        // bgSp._sgNode.setShaderProgram(this.program);
        // this.enabled = true;
        if (this.isAllChildrenUse) {
            this.setProgram(this.node._sgNode, this.program);
        }
        else {
            this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
        }
        this.enabled = true;
    };
    TransferEffect.prototype.setProgram = function (node, program) {
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
    TransferEffect.prototype.update = function (dt) {
        this.time += 0.02;
        if (this.program) {
            this.program.use();
            if (!cc.sys.isNative) {
                var time = this.program.getUniformLocationForName("time");
                this.program.setUniformLocationWith1f(time, this.time);
            }
            else {
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
                glProgram_state.setUniformFloat("time", this.time);
            }
        }
    };
    __decorate([
        property
    ], TransferEffect.prototype, "isAllChildrenUse", void 0);
    TransferEffect = __decorate([
        ccclass
    ], TransferEffect);
    return TransferEffect;
}(cc.Component));
exports.default = TransferEffect;

cc._RF.pop();