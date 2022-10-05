
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/scene/DataMineMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'adeeazM4dRK1rn5CeMn8Sqb', 'DataMineMng');
// script/data/scene/DataMineMng.ts

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
var DataMineMng = /** @class */ (function (_super) {
    __extends(DataMineMng, _super);
    function DataMineMng() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataMineMng.prototype.onLoad = function () {
        this.tab_nav_holder = this.node.getChildByName("tab_holder");
        this.con_holder = this.node.getChildByName("con_holder");
    };
    DataMineMng = __decorate([
        ccclass
    ], DataMineMng);
    return DataMineMng;
}(cc.Component));
exports.default = DataMineMng;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxzY2VuZVxcRGF0YU1pbmVNbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBQSxPQUFPLEdBQUksRUFBRSxDQUFDLFVBQVUsUUFBakIsQ0FBa0I7QUFHaEM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBVUEsQ0FBQztJQUxHLDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQVJnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBVS9CO0lBQUQsa0JBQUM7Q0FWRCxBQVVDLENBVndDLEVBQUUsQ0FBQyxTQUFTLEdBVXBEO2tCQVZvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3N9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFNaW5lTW5nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICB0YWJfbmF2X2hvbGRlcjrjgIBjYy5Ob2RlO1xyXG4gICAgY29uX2hvbGRlcjrjgIBjYy5Ob2RlO1xyXG5cclxuICAgIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRhYl9uYXZfaG9sZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGFiX2hvbGRlclwiKTtcclxuICAgICAgICB0aGlzLmNvbl9ob2xkZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb25faG9sZGVyXCIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==