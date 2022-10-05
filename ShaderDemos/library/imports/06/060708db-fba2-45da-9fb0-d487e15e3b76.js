"use strict";
cc._RF.push(module, '06070jb+6JF2p+w1IfhXjt2', 'SearchLightEffect');
// Script/SearchLightEffect.ts

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
var SearchLightFrag_1 = require("./SearchLightFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SearchLightEffect = /** @class */ (function (_super) {
    __extends(SearchLightEffect, _super);
    function SearchLightEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startTime = Date.now();
        _this.time = 0;
        _this.resolution = { x: 0.0, y: 0.0 };
        _this.mouse = { x: 0.0, y: 0.0 };
        return _this;
        // update (dt) {}
    }
    SearchLightEffect.prototype.onLoad = function () {
        this.resolution.x = (this.node.getContentSize().width);
        this.resolution.y = (this.node.getContentSize().height);
        this.mouse.x = 50.;
        this.mouse.y = 40.;
        var self = this;
        // 添加触摸事件包含鼠标事件
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            // 转化为node的局部坐标
            var touchPos = self.node.convertTouchToNodeSpaceAR(event.touch);
            self.mouse.x = touchPos.x;
            self.mouse.y = touchPos.y;
            self.changeLight();
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var touchPos = self.node.convertTouchToNodeSpaceAR(event.touch);
            self.mouse.x = touchPos.x;
            self.mouse.y = touchPos.y;
            self.changeLight();
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            // cc.log('touch end');
        }, this);
        this.useShader();
    };
    SearchLightEffect.prototype.useShader = function () {
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(SearchLightFrag_1.default.search_light_vert, SearchLightFrag_1.default.search_light_frag);
        }
        else {
            this.program.initWithVertexShaderByteArray(SearchLightFrag_1.default.search_light_vert, SearchLightFrag_1.default.search_light_frag);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        }
        this.program.link();
        this.program.updateUniforms();
        this.program.use();
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformVec2("resolution", this.resolution);
            glProgram_state.setUniformVec2("mouse", this.mouse);
        }
        else {
            var res = this.program.getUniformLocationForName("resolution");
            var ms = this.program.getUniformLocationForName("mouse");
            this.program.setUniformLocationWith2f(res, this.resolution.x, this.resolution.y);
            this.program.setUniformLocationWith2f(ms, this.mouse.x, this.mouse.y);
        }
        this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
    };
    SearchLightEffect.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
    };
    SearchLightEffect.prototype.changeLight = function () {
        if (this.program) {
            this.program.use();
            if (cc.sys.isNative) {
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
                glProgram_state.setUniformVec2("resolution", this.resolution);
                glProgram_state.setUniformVec2("mouse", this.mouse);
            }
            else {
                var res = this.program.getUniformLocationForName("resolution");
                var ms = this.program.getUniformLocationForName("mouse");
                this.program.setUniformLocationWith2f(res, this.resolution.x, this.resolution.y);
                this.program.setUniformLocationWith2f(ms, this.mouse.x, this.mouse.y);
            }
        }
    };
    SearchLightEffect = __decorate([
        ccclass
    ], SearchLightEffect);
    return SearchLightEffect;
}(cc.Component));
exports.default = SearchLightEffect;

cc._RF.pop();