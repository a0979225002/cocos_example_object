
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Home/BackHomeBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f673bb9HWxERKP4rUNhzg42', 'BackHomeBtn');
// Scene/Home/BackHomeBtn.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BackHomeBtn = /** @class */ (function (_super) {
    __extends(BackHomeBtn, _super);
    function BackHomeBtn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackHomeBtn_1 = BackHomeBtn;
    BackHomeBtn.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
        BackHomeBtn_1.instance = this;
        this.toggleActive(false);
    };
    BackHomeBtn.prototype.toggleActive = function (flag) {
        this.node.active = flag;
    };
    BackHomeBtn.prototype.backToHome = function () {
        this.toggleActive(false);
        cc.director.loadScene('Home');
    };
    var BackHomeBtn_1;
    BackHomeBtn.instance = null;
    BackHomeBtn = BackHomeBtn_1 = __decorate([
        ccclass
    ], BackHomeBtn);
    return BackHomeBtn;
}(cc.Component));
exports.default = BackHomeBtn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXEhvbWVcXEJhY2tIb21lQnRuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEOztJQWlCQSxDQUFDO29CQWpCb0IsV0FBVztJQUc5Qiw0QkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsYUFBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLElBQWE7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDOztJQWZNLG9CQUFRLEdBQWdCLElBQUksQ0FBQztJQURqQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBaUIvQjtJQUFELGtCQUFDO0NBakJELEFBaUJDLENBakJ3QyxFQUFFLENBQUMsU0FBUyxHQWlCcEQ7a0JBakJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tIb21lQnRuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgaW5zdGFuY2U6IEJhY2tIb21lQnRuID0gbnVsbDtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgIEJhY2tIb21lQnRuLmluc3RhbmNlID0gdGhpcztcclxuICAgIHRoaXMudG9nZ2xlQWN0aXZlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUFjdGl2ZShmbGFnOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmxhZztcclxuICB9XHJcblxyXG4gIGJhY2tUb0hvbWUoKSB7XHJcbiAgICB0aGlzLnRvZ2dsZUFjdGl2ZShmYWxzZSk7XHJcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0hvbWUnKTtcclxuICB9XHJcbn1cclxuIl19