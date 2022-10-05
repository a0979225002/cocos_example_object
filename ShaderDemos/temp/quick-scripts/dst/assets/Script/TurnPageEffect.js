
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/TurnPageEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '56464QjcXtOhaQBU40mS6Ne', 'TurnPageEffect');
// Script/TurnPageEffect.ts

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
var TurnPageFrag_1 = require("./TurnPageFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TurnPageEffect = /** @class */ (function (_super) {
    __extends(TurnPageEffect, _super);
    function TurnPageEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resolution = { x: 0.0, y: 0.0 };
        _this.mouse = { x: 0.0, y: 0.0 };
        return _this;
    }
    TurnPageEffect.prototype.onLoad = function () {
        this.resolution.x = (this.node.getContentSize().width);
        this.resolution.y = (this.node.getContentSize().height);
        this.mouse.x = 0.0;
        this.mouse.y = 0.0;
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
    TurnPageEffect.prototype.useShader = function () {
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(TurnPageFrag_1.default.turnpage_vert, TurnPageFrag_1.default.turnpage_frag);
        }
        else {
            this.program.initWithVertexShaderByteArray(TurnPageFrag_1.default.turnpage_vert, TurnPageFrag_1.default.turnpage_frag);
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
    TurnPageEffect.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
    };
    TurnPageEffect.prototype.changeLight = function () {
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
    TurnPageEffect = __decorate([
        ccclass
    ], TurnPageEffect);
    return TurnPageEffect;
}(cc.Component));
exports.default = TurnPageEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUdXJuUGFnZUVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFDcEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUF1RkM7UUFuRkcsZ0JBQVUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLFdBQUssR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDOztJQWtGL0IsQ0FBQztJQWhGRywrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixlQUFlO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQVUsS0FBMEI7WUFDNUUsZUFBZTtZQUNmLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hFLElBQUks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LE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7YUFDekQ7aUJBQU07Z0JBQ0gsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBRSxZQUFZLENBQUUsQ0FBQztnQkFDakUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUUsQ0FBQztnQkFDbEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4RTtTQUNKO0lBQ0wsQ0FBQztJQXRGZ0IsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXVGbEM7SUFBRCxxQkFBQztDQXZGRCxBQXVGQyxDQXZGMkMsRUFBRSxDQUFDLFNBQVMsR0F1RnZEO2tCQXZGb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUdXJuUGFnZUZyYWcgZnJvbSAnLi9UdXJuUGFnZUZyYWcnO1xyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1cm5QYWdlRWZmZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcm9ncmFtOiBjYy5HTFByb2dyYW07XHJcblxyXG4gICAgcmVzb2x1dGlvbiA9IHsgeDogMC4wLCB5OiAwLjAgfTtcclxuICAgIG1vdXNlID0geyB4OiAwLjAsIHk6IDAuMCB9O1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnJlc29sdXRpb24ueCA9ICggdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGggKTtcclxuICAgICAgICB0aGlzLnJlc29sdXRpb24ueSA9ICh0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMubW91c2UueCA9IDAuMDtcclxuICAgICAgICB0aGlzLm1vdXNlLnkgPSAwLjA7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIC8vIOa3u+WKoOinpuaRuOS6i+S7tuWMheWQq+m8oOagh+S6i+S7tlxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIC8vIOi9rOWMluS4um5vZGXnmoTlsYDpg6jlnZDmoIdcclxuICAgICAgICAgICAgbGV0IHRvdWNoUG9zID0gc2VsZi5ub2RlLmNvbnZlcnRUb3VjaFRvTm9kZVNwYWNlQVIoZXZlbnQudG91Y2gpO1xyXG4gICAgICAgICAgICBzZWxmLm1vdXNlLnggPSB0b3VjaFBvcy54O1xyXG4gICAgICAgICAgICBzZWxmLm1vdXNlLnkgPSB0b3VjaFBvcy55O1xyXG4gICAgICAgICAgICBzZWxmLmNoYW5nZUxpZ2h0KCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCBmdW5jdGlvbiAoZXZlbnQ6Y2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgICAgICBsZXQgdG91Y2hQb3MgPSBzZWxmLm5vZGUuY29udmVydFRvdWNoVG9Ob2RlU3BhY2VBUihldmVudC50b3VjaCk7XHJcbiAgICAgICAgICAgIHNlbGYubW91c2UueCA9IHRvdWNoUG9zLng7XHJcbiAgICAgICAgICAgIHNlbGYubW91c2UueSA9IHRvdWNoUG9zLnk7XHJcbiAgICAgICAgICAgIHNlbGYuY2hhbmdlTGlnaHQoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgLy8gY2MubG9nKCd0b3VjaCBlbmQnKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMudXNlU2hhZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlU2hhZGVyKCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBjYy5HTFByb2dyYW0oKTtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5pbml0V2l0aFN0cmluZyhUdXJuUGFnZUZyYWcudHVybnBhZ2VfdmVydCwgVHVyblBhZ2VGcmFnLnR1cm5wYWdlX2ZyYWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5pbml0V2l0aFZlcnRleFNoYWRlckJ5dGVBcnJheShUdXJuUGFnZUZyYWcudHVybnBhZ2VfdmVydCwgVHVyblBhZ2VGcmFnLnR1cm5wYWdlX2ZyYWcpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1BPU0lUSU9OLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1BPU0lUSU9OKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9DT0xPUiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfVEVYX0NPT1JELCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1RFWF9DT09SRFMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2dyYW0ubGluaygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51c2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtVmVjMihcInJlc29sdXRpb25cIiwgdGhpcy5yZXNvbHV0aW9uKTtcclxuICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1WZWMyKFwibW91c2VcIiwgdGhpcy5tb3VzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IHRoaXMucHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKCBcInJlc29sdXRpb25cIiApO1xyXG4gICAgICAgICAgICBsZXQgbXMgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZShcIm1vdXNlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDJmKCByZXMsIHRoaXMucmVzb2x1dGlvbi54LHRoaXMucmVzb2x1dGlvbi55ICk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMmYobXMsIHRoaXMubW91c2UueCx0aGlzLm1vdXNlLnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFByb2dyYW0odGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLl9zZ05vZGUsIHRoaXMucHJvZ3JhbSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvZ3JhbShub2RlOiBhbnksIHByb2dyYW06IGFueSkge1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdmFyIGdsUHJvZ3JhbV9zdGF0ZSA9IGNjLkdMUHJvZ3JhbVN0YXRlLmdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRHTFByb2dyYW1TdGF0ZShnbFByb2dyYW1fc3RhdGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0U2hhZGVyUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTGlnaHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbSkgeyBcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnVzZSgpO1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybVZlYzIoXCJyZXNvbHV0aW9uXCIsIHRoaXMucmVzb2x1dGlvbik7XHJcbiAgICAgICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybVZlYzIoIFwibW91c2VcIiwgdGhpcy5tb3VzZSApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IHRoaXMucHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKCBcInJlc29sdXRpb25cIiApO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1zID0gdGhpcy5wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoXCJtb3VzZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMmYoIHJlcywgdGhpcy5yZXNvbHV0aW9uLngsdGhpcy5yZXNvbHV0aW9uLnkgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMmYobXMsIHRoaXMubW91c2UueCx0aGlzLm1vdXNlLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==