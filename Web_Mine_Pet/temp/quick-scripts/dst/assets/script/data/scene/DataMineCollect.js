
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/scene/DataMineCollect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3ba5jlSARHnasx6WtisttO', 'DataMineCollect');
// script/data/scene/DataMineCollect.ts

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
var DataMineCollect = /** @class */ (function (_super) {
    __extends(DataMineCollect, _super);
    function DataMineCollect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataMineCollect.prototype.onLoad = function () {
        this.node_con_holder = this.node.getChildByName("con_holder");
        this.node_view_holder = this.node_con_holder.getChildByName("view_holder");
        this.node_con_1 = this.node_view_holder.getChildByName("con_1");
        this.btn_home = this.node.getChildByName("btn_home");
        this.btn_vip = this.node.getChildByName("btn_vip");
    };
    DataMineCollect = __decorate([
        ccclass
    ], DataMineCollect);
    return DataMineCollect;
}(cc.Component));
exports.default = DataMineCollect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxzY2VuZVxcRGF0YU1pbmVDb2xsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQUEsT0FBTyxHQUFJLEVBQUUsQ0FBQyxVQUFVLFFBQWpCLENBQWtCO0FBR2hDO0lBQTZDLG1DQUFZO0lBQXpEOztJQW1CQSxDQUFDO0lBVkcsZ0NBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFdkQsQ0FBQztJQWpCZ0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQW1CbkM7SUFBRCxzQkFBQztDQW5CRCxBQW1CQyxDQW5CNEMsRUFBRSxDQUFDLFNBQVMsR0FtQnhEO2tCQW5Cb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhTWluZUNvbGxlY3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG5vZGVfY29uX2hvbGRlcjogY2MuTm9kZTtcclxuICAgIG5vZGVfdmlld19ob2xkZXI6IGNjLk5vZGU7XHJcbiAgICBub2RlX2Nvbl8xOiBjYy5Ob2RlO1xyXG5cclxuICAgIGJ0bl9ob21lOiBjYy5Ob2RlO1xyXG4gICAgYnRuX3ZpcDogY2MuTm9kZTtcclxuXHJcbiAgICBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZV9jb25faG9sZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uX2hvbGRlclwiKTtcclxuICAgICAgICB0aGlzLm5vZGVfdmlld19ob2xkZXIgPSB0aGlzLm5vZGVfY29uX2hvbGRlci5nZXRDaGlsZEJ5TmFtZShcInZpZXdfaG9sZGVyXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZV9jb25fMSA9IHRoaXMubm9kZV92aWV3X2hvbGRlci5nZXRDaGlsZEJ5TmFtZShcImNvbl8xXCIpO1xyXG4gICAgICAgIHRoaXMuYnRuX2hvbWUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5faG9tZVwiKTtcclxuICAgICAgICB0aGlzLmJ0bl92aXAgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fdmlwXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbn0iXX0=