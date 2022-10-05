
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/scene/DataGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0fdd3GZQGJGxqJ+FslCjHX8', 'DataGame');
// script/data/scene/DataGame.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var ccclass = cc._decorator.ccclass;
var DataGame = /** @class */ (function (_super) {
    __extends(DataGame, _super);
    function DataGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataGame.prototype.onLoad = function () {
        var parent = this.node.getParent();
        this.Canvas = parent.getChildByName("Canvas");
        this.mine_mng_holder = this.Canvas.getChildByName("mine_mng_holder");
        this.mine_holder = this.Canvas.getChildByName("mine_holder");
        this.info_pop_holder = this.Canvas.getChildByName("info_pop_holder");
        this.skin_pop_holder = this.Canvas.getChildByName("skin_pop_holder");
        this.upgrade_holder = this.Canvas.getChildByName("upgrade_holder");
        this.load_tip = this.Canvas.getChildByName("load_tip");
        this.btn_close = this.Canvas.getChildByName("btn_close");
        this.btn_info = this.Canvas.getChildByName("btn_info");
        this.ver_str = this.Canvas.getChildByName("ver_str").getComponent(cc.Label);
    };
    DataGame = __decorate([
        ccclass
    ], DataGame);
    return DataGame;
}(cc.Component));
exports.default = DataGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxzY2VuZVxcRGF0YUdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFHbEM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBNEJBLENBQUM7SUFkRyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUExQmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0QjVCO0lBQUQsZUFBQztDQTVCRCxBQTRCQyxDQTVCcUMsRUFBRSxDQUFDLFNBQVMsR0E0QmpEO2tCQTVCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBDYW52YXM6IGNjLk5vZGU7XHJcbiAgICBtaW5lX21uZ19ob2xkZXI6IGNjLk5vZGU7XHJcbiAgICBtaW5lX2hvbGRlcjogY2MuTm9kZTtcclxuICAgIGluZm9fcG9wX2hvbGRlcjogY2MuTm9kZTtcclxuICAgIHNraW5fcG9wX2hvbGRlcjogY2MuTm9kZTtcclxuICAgIHVwZ3JhZGVfaG9sZGVyOiBjYy5Ob2RlO1xyXG4gICAgbG9hZF90aXA6IGNjLk5vZGU7XHJcbiAgICBidG5fY2xvc2U6IGNjLk5vZGU7XHJcbiAgICBidG5faW5mbzogY2MuTm9kZTtcclxuXHJcbiAgICB2ZXJfc3RyOiBjYy5MYWJlbDtcclxuXHJcbiAgICBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMubm9kZS5nZXRQYXJlbnQoKTtcclxuICAgICAgICB0aGlzLkNhbnZhcyA9IHBhcmVudC5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLm1pbmVfbW5nX2hvbGRlciA9IHRoaXMuQ2FudmFzLmdldENoaWxkQnlOYW1lKFwibWluZV9tbmdfaG9sZGVyXCIpO1xyXG4gICAgICAgIHRoaXMubWluZV9ob2xkZXIgPSB0aGlzLkNhbnZhcy5nZXRDaGlsZEJ5TmFtZShcIm1pbmVfaG9sZGVyXCIpO1xyXG4gICAgICAgIHRoaXMuaW5mb19wb3BfaG9sZGVyID0gdGhpcy5DYW52YXMuZ2V0Q2hpbGRCeU5hbWUoXCJpbmZvX3BvcF9ob2xkZXJcIik7XHJcbiAgICAgICAgdGhpcy5za2luX3BvcF9ob2xkZXIgPSB0aGlzLkNhbnZhcy5nZXRDaGlsZEJ5TmFtZShcInNraW5fcG9wX2hvbGRlclwiKTtcclxuICAgICAgICB0aGlzLnVwZ3JhZGVfaG9sZGVyID0gdGhpcy5DYW52YXMuZ2V0Q2hpbGRCeU5hbWUoXCJ1cGdyYWRlX2hvbGRlclwiKTtcclxuICAgICAgICB0aGlzLmxvYWRfdGlwID0gdGhpcy5DYW52YXMuZ2V0Q2hpbGRCeU5hbWUoXCJsb2FkX3RpcFwiKTtcclxuICAgICAgICB0aGlzLmJ0bl9jbG9zZSA9IHRoaXMuQ2FudmFzLmdldENoaWxkQnlOYW1lKFwiYnRuX2Nsb3NlXCIpO1xyXG4gICAgICAgIHRoaXMuYnRuX2luZm8gPSB0aGlzLkNhbnZhcy5nZXRDaGlsZEJ5TmFtZShcImJ0bl9pbmZvXCIpO1xyXG4gICAgICAgIHRoaXMudmVyX3N0ciA9IHRoaXMuQ2FudmFzLmdldENoaWxkQnlOYW1lKFwidmVyX3N0clwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==