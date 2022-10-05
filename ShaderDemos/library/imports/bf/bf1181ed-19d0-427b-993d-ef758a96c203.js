"use strict";
cc._RF.push(module, 'bf118HtGdBCe5k973WKlsID', 'CirclePortraitEffect');
// Script/CirclePortraitEffect.ts

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
var CirclePortraitFrag_1 = require("./CirclePortraitFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cornerSlider = null;
        _this.edge = 0.05;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        this.edge = this.cornerSlider.progress / 2;
        this.makeCircle();
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.makeCircle = function () {
        if (this.program)
            return;
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(CirclePortraitFrag_1.default.circle_vert, CirclePortraitFrag_1.default.circle_frag);
        }
        else {
            this.program.initWithVertexShaderByteArray(CirclePortraitFrag_1.default.circle_vert, CirclePortraitFrag_1.default.circle_frag);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        }
        this.program.link();
        this.program.updateUniforms();
        this.program.use();
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformFloat('u_edge', this.edge);
        }
        else {
            var ed = this.program.getUniformLocationForName("u_edge");
            this.program.setUniformLocationWith1f(ed, this.edge);
        }
        this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
    };
    NewClass.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
    };
    NewClass.prototype.onSliderChange = function (slider, eventType) {
        this.edge = Number((slider.progress / 2).toFixed(2));
        if (!this.program)
            return;
        this.program.use();
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformFloat("u_edge", this.edge);
        }
        else {
            var ed = this.program.getUniformLocationForName("u_edge");
            this.program.setUniformLocationWith1f(ed, this.edge);
        }
    };
    __decorate([
        property(cc.Slider)
    ], NewClass.prototype, "cornerSlider", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();