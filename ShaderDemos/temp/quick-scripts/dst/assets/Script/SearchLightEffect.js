
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SearchLightEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTZWFyY2hMaWdodEVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxjQUFjO0FBQ2QsZUFBZTtBQUNmLDBDQUEwQztBQUMxQyxxREFBNEM7QUFFdEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUEyRkM7UUF4RkcsZUFBUyxHQUFVLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM5QixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBRWpCLGdCQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNoQyxXQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7UUFtRjNCLGlCQUFpQjtJQUNyQixDQUFDO0lBbEZHLGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQWU7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsVUFBVSxLQUEwQjtZQUM1RSxlQUFlO1lBQ2YsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxLQUF5QjtZQUMxRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFVLEtBQUs7WUFDckQsdUJBQXVCO1FBQzNCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUdULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyx5QkFBVyxDQUFDLGlCQUFpQixFQUFFLHlCQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUM3RjthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyx5QkFBVyxDQUFDLGlCQUFpQixFQUFFLHlCQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUN6RyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM3RixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN2RixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUNuRztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRW5CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0UsZUFBZSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzlELGVBQWUsQ0FBQyxjQUFjLENBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztTQUN6RDthQUFNO1lBQ0gsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBRSxZQUFZLENBQUUsQ0FBQztZQUNqRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFFLENBQUM7WUFDbEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4RTtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELHNDQUFVLEdBQVYsVUFBVyxJQUFTLEVBQUUsT0FBWTtRQUM5QixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbkIsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9FLGVBQWUsQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDOUQsZUFBZSxDQUFDLGNBQWMsQ0FBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNILElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUUsWUFBWSxDQUFFLENBQUM7Z0JBQ2pFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFFLENBQUM7Z0JBQ2xGLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEU7U0FDSjtJQUNMLENBQUM7SUF4RmdCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBMkZyQztJQUFELHdCQUFDO0NBM0ZELEFBMkZDLENBM0Y4QyxFQUFFLENBQUMsU0FBUyxHQTJGMUQ7a0JBM0ZvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGZW9mb3ggR2FtZVxyXG4vLyBBdXRob3I6TGVycnlcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Z5bHoxMTI1L1NoYWRlckRlbW9zXHJcbmltcG9ydCBTZWFyY2hMaWdodCBmcm9tICcuL1NlYXJjaExpZ2h0RnJhZyc7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaExpZ2h0RWZmZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcm9ncmFtOiBjYy5HTFByb2dyYW07XHJcbiAgICBzdGFydFRpbWU6bnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgIHRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcmVzb2x1dGlvbiA9IHsgeDogMC4wLCB5OiAwLjAgfTtcclxuICAgIG1vdXNlID0geyB4OiAwLjAsIHk6IDAuMCB9O1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnJlc29sdXRpb24ueCA9ICggdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGggKTtcclxuICAgICAgICB0aGlzLnJlc29sdXRpb24ueSA9ICh0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMubW91c2UueCA9IDUwLjtcclxuICAgICAgICB0aGlzLm1vdXNlLnkgPSA0MC47XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIC8vIOa3u+WKoOinpuaRuOS6i+S7tuWMheWQq+m8oOagh+S6i+S7tlxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIC8vIOi9rOWMluS4um5vZGXnmoTlsYDpg6jlnZDmoIdcclxuICAgICAgICAgICAgbGV0IHRvdWNoUG9zID0gc2VsZi5ub2RlLmNvbnZlcnRUb3VjaFRvTm9kZVNwYWNlQVIoZXZlbnQudG91Y2gpO1xyXG4gICAgICAgICAgICBzZWxmLm1vdXNlLnggPSB0b3VjaFBvcy54O1xyXG4gICAgICAgICAgICBzZWxmLm1vdXNlLnkgPSB0b3VjaFBvcy55O1xyXG4gICAgICAgICAgICBzZWxmLmNoYW5nZUxpZ2h0KCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCBmdW5jdGlvbiAoZXZlbnQ6Y2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgICAgICBsZXQgdG91Y2hQb3MgPSBzZWxmLm5vZGUuY29udmVydFRvdWNoVG9Ob2RlU3BhY2VBUihldmVudC50b3VjaCk7XHJcbiAgICAgICAgICAgIHNlbGYubW91c2UueCA9IHRvdWNoUG9zLng7XHJcbiAgICAgICAgICAgIHNlbGYubW91c2UueSA9IHRvdWNoUG9zLnk7XHJcbiAgICAgICAgICAgIHNlbGYuY2hhbmdlTGlnaHQoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgLy8gY2MubG9nKCd0b3VjaCBlbmQnKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMudXNlU2hhZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlU2hhZGVyKCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBjYy5HTFByb2dyYW0oKTtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5pbml0V2l0aFN0cmluZyhTZWFyY2hMaWdodC5zZWFyY2hfbGlnaHRfdmVydCwgU2VhcmNoTGlnaHQuc2VhcmNoX2xpZ2h0X2ZyYWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5pbml0V2l0aFZlcnRleFNoYWRlckJ5dGVBcnJheShTZWFyY2hMaWdodC5zZWFyY2hfbGlnaHRfdmVydCwgU2VhcmNoTGlnaHQuc2VhcmNoX2xpZ2h0X2ZyYWcpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1BPU0lUSU9OLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1BPU0lUSU9OKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9DT0xPUiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfVEVYX0NPT1JELCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1RFWF9DT09SRFMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2dyYW0ubGluaygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51c2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtVmVjMihcInJlc29sdXRpb25cIiwgdGhpcy5yZXNvbHV0aW9uKTtcclxuICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1WZWMyKCBcIm1vdXNlXCIsIHRoaXMubW91c2UgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gdGhpcy5wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoIFwicmVzb2x1dGlvblwiICk7XHJcbiAgICAgICAgICAgIGxldCBtcyA9IHRoaXMucHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKFwibW91c2VcIik7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMmYoIHJlcywgdGhpcy5yZXNvbHV0aW9uLngsdGhpcy5yZXNvbHV0aW9uLnkgKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgyZihtcywgdGhpcy5tb3VzZS54LHRoaXMubW91c2UueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0UHJvZ3JhbSh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuX3NnTm9kZSwgdGhpcy5wcm9ncmFtKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9ncmFtKG5vZGU6IGFueSwgcHJvZ3JhbTogYW55KSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgICAgICBub2RlLnNldEdMUHJvZ3JhbVN0YXRlKGdsUHJvZ3JhbV9zdGF0ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm9kZS5zZXRTaGFkZXJQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VMaWdodCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9ncmFtKSB7IFxyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0udXNlKCk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuICAgICAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtVmVjMihcInJlc29sdXRpb25cIiwgdGhpcy5yZXNvbHV0aW9uKTtcclxuICAgICAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtVmVjMiggXCJtb3VzZVwiLCB0aGlzLm1vdXNlICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gdGhpcy5wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoIFwicmVzb2x1dGlvblwiICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbXMgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZShcIm1vdXNlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgyZiggcmVzLCB0aGlzLnJlc29sdXRpb24ueCx0aGlzLnJlc29sdXRpb24ueSApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgyZihtcywgdGhpcy5tb3VzZS54LHRoaXMubW91c2UueSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=