
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/scene/DataUIMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '951fe/2bjRGuJYzEde9QRhM', 'DataUIMessage');
// script/data/scene/DataUIMessage.ts

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
var DataUIMessage = /** @class */ (function (_super) {
    __extends(DataUIMessage, _super);
    function DataUIMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataUIMessage.prototype.onLoad = function () {
        this.node_main = this.node.getChildByName("main");
        this.node_backBg = this.node.getChildByName("bg");
        this.label_msg_txt = this.node_main.getChildByName("txt").getComponent(cc.Label);
        this.btn_main = this.node_main.getChildByName("btn_main");
        this.btn_cancel = this.btn_main.getChildByName("btn_cancel");
        this.btn_confirm = this.btn_main.getChildByName("btn_confirm");
        this.label_cancel = this.btn_cancel.getChildByName("txt").getComponent(cc.Label);
        this.label_confirm = this.btn_confirm.getChildByName("txt").getComponent(cc.Label);
    };
    DataUIMessage = __decorate([
        ccclass
    ], DataUIMessage);
    return DataUIMessage;
}(cc.Component));
exports.default = DataUIMessage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxzY2VuZVxcRGF0YVVJTWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUSxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUEyQyxpQ0FBWTtJQUF2RDs7SUF1QkEsQ0FBQztJQVhHLDhCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQXJCZ0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXVCakM7SUFBRCxvQkFBQztDQXZCRCxBQXVCQyxDQXZCMEMsRUFBRSxDQUFDLFNBQVMsR0F1QnREO2tCQXZCb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFVSU1lc3NhZ2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG5vZGVfbWFpbjogY2MuTm9kZTtcclxuICAgIG5vZGVfYmFja0JnOiBjYy5Ob2RlO1xyXG5cclxuICAgIGxhYmVsX21zZ190eHQ6IGNjLkxhYmVsO1xyXG4gICAgYnRuX21haW46IGNjLk5vZGU7XHJcbiAgICBidG5fY29uZmlybTogY2MuTm9kZTtcclxuICAgIGxhYmVsX2NvbmZpcm06IGNjLkxhYmVsO1xyXG4gICAgYnRuX2NhbmNlbDogY2MuTm9kZTtcclxuICAgIGxhYmVsX2NhbmNlbDogY2MuTGFiZWw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZV9tYWluID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibWFpblwiKTtcclxuICAgICAgICB0aGlzLm5vZGVfYmFja0JnID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIik7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9tc2dfdHh0ID0gdGhpcy5ub2RlX21haW4uZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmJ0bl9tYWluID0gdGhpcy5ub2RlX21haW4uZ2V0Q2hpbGRCeU5hbWUoXCJidG5fbWFpblwiKTtcclxuICAgICAgICB0aGlzLmJ0bl9jYW5jZWwgPSB0aGlzLmJ0bl9tYWluLmdldENoaWxkQnlOYW1lKFwiYnRuX2NhbmNlbFwiKTtcclxuICAgICAgICB0aGlzLmJ0bl9jb25maXJtID0gdGhpcy5idG5fbWFpbi5nZXRDaGlsZEJ5TmFtZShcImJ0bl9jb25maXJtXCIpO1xyXG4gICAgICAgIHRoaXMubGFiZWxfY2FuY2VsID0gdGhpcy5idG5fY2FuY2VsLmdldENoaWxkQnlOYW1lKFwidHh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9jb25maXJtID0gdGhpcy5idG5fY29uZmlybS5nZXRDaGlsZEJ5TmFtZShcInR4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==