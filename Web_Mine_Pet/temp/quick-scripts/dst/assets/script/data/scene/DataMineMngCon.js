
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/scene/DataMineMngCon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79162YREBtFPLtdy43/hcZX', 'DataMineMngCon');
// script/data/scene/DataMineMngCon.ts

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
var DataMineMngCon = /** @class */ (function (_super) {
    __extends(DataMineMngCon, _super);
    function DataMineMngCon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataMineMngCon.prototype.onLoad = function () {
        this.node_view_holder = this.node.getChildByName("view_holder");
        this.node_page_1 = this.node_view_holder.getChildByName("con_1");
        this.node_page_2 = this.node_view_holder.getChildByName("con_2");
        this.node_page_3 = this.node_view_holder.getChildByName("con_3");
    };
    DataMineMngCon = __decorate([
        ccclass
    ], DataMineMngCon);
    return DataMineMngCon;
}(cc.Component));
exports.default = DataMineMngCon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxzY2VuZVxcRGF0YU1pbmVNbmdDb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFHbEM7SUFBNEMsa0NBQVk7SUFBeEQ7O0lBY0EsQ0FBQztJQVBHLCtCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQVpnQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBY2xDO0lBQUQscUJBQUM7Q0FkRCxBQWNDLENBZDJDLEVBQUUsQ0FBQyxTQUFTLEdBY3ZEO2tCQWRvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1pbmVNbmdDb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG5vZGVfdmlld19ob2xkZXI6IGNjLk5vZGU7XHJcbiAgICBub2RlX3BhZ2VfMTogY2MuTm9kZTtcclxuICAgIG5vZGVfcGFnZV8yOiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9wYWdlXzM6IGNjLk5vZGU7XHJcblxyXG4gICAgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZV92aWV3X2hvbGRlciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZpZXdfaG9sZGVyXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZV9wYWdlXzEgPSB0aGlzLm5vZGVfdmlld19ob2xkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJjb25fMVwiKTtcclxuICAgICAgICB0aGlzLm5vZGVfcGFnZV8yID0gdGhpcy5ub2RlX3ZpZXdfaG9sZGVyLmdldENoaWxkQnlOYW1lKFwiY29uXzJcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX3BhZ2VfMyA9IHRoaXMubm9kZV92aWV3X2hvbGRlci5nZXRDaGlsZEJ5TmFtZShcImNvbl8zXCIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==