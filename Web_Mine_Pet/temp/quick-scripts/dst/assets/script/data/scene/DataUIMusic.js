
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/scene/DataUIMusic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87d10eQ+dlK/K0hO7FQVb4S', 'DataUIMusic');
// script/data/scene/DataUIMusic.ts

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
var DataUIMusic = /** @class */ (function (_super) {
    __extends(DataUIMusic, _super);
    function DataUIMusic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataUIMusic.prototype.onLoad = function () {
        this.node_main = this.node.getChildByName("main");
        this.node_music = this.node_main.getChildByName("btn_music");
        this.node_effect = this.node_main.getChildByName("btn_effect");
        this.label_music = this.node_music.getChildByName("title").getComponent(cc.Label);
        this.label_effect = this.node_effect.getChildByName("title").getComponent(cc.Label);
        this.btn_music = this.node_music.getChildByName("switch_main");
        this.btn_effect = this.node_effect.getChildByName("switch_main");
        this.btn_close = this.node_main.getChildByName("btn_close");
        this.label_close = this.btn_close.getChildByName("txt").getComponent(cc.Label);
        this.node_musicBg = this.btn_music.getChildByName("bg");
        this.node_musicCircle = this.btn_music.getChildByName("circle");
        this.node_effectBg = this.btn_effect.getChildByName("bg");
        this.node_effectCircle = this.btn_effect.getChildByName("circle");
    };
    DataUIMusic = __decorate([
        ccclass
    ], DataUIMusic);
    return DataUIMusic;
}(cc.Component));
exports.default = DataUIMusic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxzY2VuZVxcRGF0YVVJTXVzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFHbEM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBeUNBLENBQUM7SUF4QkcsNEJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxTQUFTLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRS9FLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXRFLENBQUM7SUF2Q2dCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F5Qy9CO0lBQUQsa0JBQUM7Q0F6Q0QsQUF5Q0MsQ0F6Q3dDLEVBQUUsQ0FBQyxTQUFTLEdBeUNwRDtrQkF6Q29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhVUlNdXNpYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgbm9kZV9tYWluOiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9tdXNpYzogY2MuTm9kZTtcclxuICAgIG5vZGVfZWZmZWN0OiBjYy5Ob2RlO1xyXG4gICAgbGFiZWxfbXVzaWM6IGNjLkxhYmVsO1xyXG4gICAgbGFiZWxfZWZmZWN0OiBjYy5MYWJlbDtcclxuICAgIGJ0bl9tdXNpYzogY2MuTm9kZTtcclxuICAgIGJ0bl9lZmZlY3Q6IGNjLk5vZGU7XHJcbiAgICBidG5fY2xvc2U6IGNjLk5vZGU7XHJcbiAgICBsYWJlbF9jbG9zZTogY2MuTGFiZWw7XHJcblxyXG4gICAgbm9kZV9tdXNpY0JnOiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9lZmZlY3RCZzogY2MuTm9kZTtcclxuICAgIG5vZGVfbXVzaWNDaXJjbGU6IGNjLk5vZGU7XHJcbiAgICBub2RlX2VmZmVjdENpcmNsZTogY2MuTm9kZTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZV9tYWluID0gIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm1haW5cIik7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZV9tdXNpYyA9IHRoaXMubm9kZV9tYWluLmdldENoaWxkQnlOYW1lKFwiYnRuX211c2ljXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZV9lZmZlY3QgPSB0aGlzLm5vZGVfbWFpbi5nZXRDaGlsZEJ5TmFtZShcImJ0bl9lZmZlY3RcIik7XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWxfbXVzaWMgPSB0aGlzLm5vZGVfbXVzaWMuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMubGFiZWxfZWZmZWN0ID0gdGhpcy5ub2RlX2VmZmVjdC5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuX211c2ljID0gdGhpcy5ub2RlX211c2ljLmdldENoaWxkQnlOYW1lKFwic3dpdGNoX21haW5cIik7XHJcbiAgICAgICAgdGhpcy5idG5fZWZmZWN0ID0gdGhpcy5ub2RlX2VmZmVjdC5nZXRDaGlsZEJ5TmFtZShcInN3aXRjaF9tYWluXCIpO1xyXG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlID0gdGhpcy5ub2RlX21haW4uZ2V0Q2hpbGRCeU5hbWUoXCJidG5fY2xvc2VcIik7XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWxfY2xvc2UgPSB0aGlzLmJ0bl9jbG9zZS5nZXRDaGlsZEJ5TmFtZShcInR4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfbXVzaWNCZyA9IHRoaXMuYnRuX211c2ljLmdldENoaWxkQnlOYW1lKFwiYmdcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX211c2ljQ2lyY2xlID0gdGhpcy5idG5fbXVzaWMuZ2V0Q2hpbGRCeU5hbWUoXCJjaXJjbGVcIik7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZV9lZmZlY3RCZyA9IHRoaXMuYnRuX2VmZmVjdC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZV9lZmZlY3RDaXJjbGUgPSB0aGlzLmJ0bl9lZmZlY3QuZ2V0Q2hpbGRCeU5hbWUoXCJjaXJjbGVcIik7XHJcblxyXG4gICAgfVxyXG5cclxufSJdfQ==