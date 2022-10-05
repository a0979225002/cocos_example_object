
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Draw.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '29c04YUG5VOupGjzxfxy5hb', 'Draw');
// Script/Draw.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var DrawManager_1 = require("./DrawManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.board = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        fcc.configMgr.build();
        fcc.sceneMgr
            .setDesignWidth(1280)
            .setDesignHeight(720)
            .updateSize(fcc.type.SceneStyleType.HORIZONTAL)
            .startListener(500);
    };
    NewClass.prototype.start = function () {
        this.drawManager = new DrawManager_1.DrawManager();
        this.drawManager.init(this.board);
        this.onPen();
        this.node.addChild(this.drawManager.drawNode);
    };
    NewClass.prototype.onEraser = function () {
        this.drawManager.setLineWidth(40);
        this.drawManager.setStrokeColor(new cc.Color(0, 0, 0, 0));
    };
    NewClass.prototype.onPen = function () {
        this.drawManager.setLineWidth(10);
        this.drawManager.setStrokeColor(new cc.Color(0, 200, 200, 255));
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "board", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEcmF3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOztBQUVuRyw2Q0FBb0Q7QUFFOUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFnREM7UUE3Q0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR3ZCLFdBQUssR0FBWSxJQUFJLENBQUM7O1FBc0N0QixpQkFBaUI7SUFDckIsQ0FBQztJQWxDRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFdEIsR0FBRyxDQUFDLFFBQVE7YUFDUCxjQUFjLENBQUMsSUFBSSxDQUFDO2FBQ3BCLGVBQWUsQ0FBQyxHQUFHLENBQUM7YUFDcEIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQzthQUM5QyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFNUIsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFJRCwyQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBekNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFUTCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0Q1QjtJQUFELGVBQUM7Q0FoREQsQUFnREMsQ0FoRHFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0RqRDtrQkFoRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBEcmF3TWFuYWdlcixQZW5UeXBlIH0gZnJvbSBcIi4vRHJhd01hbmFnZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib2FyZDogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIHByaXZhdGUgZHJhd01hbmFnZXI6IERyYXdNYW5hZ2VyO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBmY2MuY29uZmlnTWdyLmJ1aWxkKCk7XG5cbiAgICAgICAgZmNjLnNjZW5lTWdyXG4gICAgICAgICAgICAuc2V0RGVzaWduV2lkdGgoMTI4MClcbiAgICAgICAgICAgIC5zZXREZXNpZ25IZWlnaHQoNzIwKVxuICAgICAgICAgICAgLnVwZGF0ZVNpemUoZmNjLnR5cGUuU2NlbmVTdHlsZVR5cGUuSE9SSVpPTlRBTClcbiAgICAgICAgICAgIC5zdGFydExpc3RlbmVyKDUwMCk7XG5cbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuZHJhd01hbmFnZXIgPSBuZXcgRHJhd01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5kcmF3TWFuYWdlci5pbml0KHRoaXMuYm9hcmQpO1xuICAgICAgICB0aGlzLm9uUGVuKCk7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLmRyYXdNYW5hZ2VyLmRyYXdOb2RlKTtcbiAgICB9XG5cblxuXG4gICAgb25FcmFzZXIoKSB7XG4gICAgICAgIHRoaXMuZHJhd01hbmFnZXIuc2V0TGluZVdpZHRoKDQwKTtcbiAgICAgICAgdGhpcy5kcmF3TWFuYWdlci5zZXRTdHJva2VDb2xvcihuZXcgY2MuQ29sb3IoMCwgMCwgMCwgMCkpO1xuICAgIH1cblxuICAgIG9uUGVuKCkge1xuICAgICAgICB0aGlzLmRyYXdNYW5hZ2VyLnNldExpbmVXaWR0aCgxMCk7XG4gICAgICAgIHRoaXMuZHJhd01hbmFnZXIuc2V0U3Ryb2tlQ29sb3IobmV3IGNjLkNvbG9yKDAsIDIwMCwgMjAwLCAyNTUpKTtcbiAgICB9XG5cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=