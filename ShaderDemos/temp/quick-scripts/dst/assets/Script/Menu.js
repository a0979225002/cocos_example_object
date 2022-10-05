
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59162ZNomNLqJejBaIkOivx', 'Menu');
// Script/Menu.ts

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
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = null;
        _this.author = "大掌教";
        _this.authorLb = null;
        _this.wechatLb = null;
        return _this;
        // 每帧更新函数
        // update(dt) {}
    }
    // 初始化
    Menu.prototype.onLoad = function () {
        cc.debug.setDisplayStats(true);
        cc.game.addPersistRootNode(this.node);
        cc.audioEngine.playMusic(this.bgm, true);
        this.authorLb.string = this.author;
        var lbAction = cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.1), cc.scaleTo(1, 1.0), cc.scaleTo(1, 0.9), cc.scaleTo(1, 1.0)));
        var finished = cc.callFunc(function () {
            this.authorLb.node.runAction(lbAction);
            this.wechatLb.node.runAction(cc.spawn(cc.scaleTo(1, 1.0), cc.rotateBy(1, 720)));
        }, this);
        var lbSpawn = cc.spawn(cc.scaleTo(1.5, 1.0).easing(cc.easeSineIn()), cc.fadeTo(1.5, 255).easing(cc.easeSineIn()));
        var lbSequence = cc.sequence(lbSpawn, finished);
        this.authorLb.node.runAction(lbSequence);
    };
    Menu.prototype.goGlackhole = function () {
        cc.director.loadScene("Blackhole");
    };
    __decorate([
        property({
            type: cc.AudioClip,
            displayName: "背景音乐"
        })
    ], Menu.prototype, "bgm", void 0);
    __decorate([
        property({
            displayName: "作者",
            visible: false
        })
    ], Menu.prototype, "author", void 0);
    __decorate([
        property({
            type: cc.Label,
            displayName: "作者"
        })
    ], Menu.prototype, "authorLb", void 0);
    __decorate([
        property({
            type: cc.Label,
            displayName: "公众号ID"
        })
    ], Menu.prototype, "wechatLb", void 0);
    Menu = __decorate([
        ccclass
    ], Menu);
    return Menu;
}(cc.Component));
exports.default = Menu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBeURDO1FBbkRHLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBTXpCLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFNZixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBTTFCLGNBQVEsR0FBYSxJQUFJLENBQUM7O1FBK0IxQixTQUFTO1FBQ1QsZ0JBQWdCO0lBQ3BCLENBQUM7SUE5QkcsTUFBTTtJQUNOLHFCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFbkMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FDM0IsRUFBRSxDQUFDLFFBQVEsQ0FDUCxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFDbEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQ2xCLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUNsQixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FDckIsQ0FDSixDQUFDO1FBQ0YsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xILElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsMEJBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUE5Q0Q7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVM7WUFDbEIsV0FBVyxFQUFFLE1BQU07U0FDdEIsQ0FBQztxQ0FDdUI7SUFNekI7UUFKQyxRQUFRLENBQUM7WUFDTixXQUFXLEVBQUUsSUFBSTtZQUNqQixPQUFPLEVBQUUsS0FBSztTQUNqQixDQUFDO3dDQUNhO0lBTWY7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUs7WUFDZCxXQUFXLEVBQUUsSUFBSTtTQUNwQixDQUFDOzBDQUN3QjtJQU0xQjtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSztZQUNkLFdBQVcsRUFBRSxPQUFPO1NBQ3ZCLENBQUM7MENBQ3dCO0lBeEJULElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0F5RHhCO0lBQUQsV0FBQztDQXpERCxBQXlEQyxDQXpEaUMsRUFBRSxDQUFDLFNBQVMsR0F5RDdDO2tCQXpEb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLog4zmma/pn7PkuZBcIlxyXG4gICAgfSlcclxuICAgIGJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuS9nOiAhVwiLFxyXG4gICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICB9KVxyXG4gICAgYXV0aG9yID0gXCLlpKfmjozmlZlcIjtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuS9nOiAhVwiXHJcbiAgICB9KVxyXG4gICAgYXV0aG9yTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuWFrOS8l+WPt0lEXCJcclxuICAgIH0pXHJcbiAgICB3ZWNoYXRMYjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyDliJ3lp4vljJZcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHModHJ1ZSk7XHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG4gICAgICAgIHRoaXMuYXV0aG9yTGIuc3RyaW5nID0gdGhpcy5hdXRob3I7XHJcblxyXG4gICAgICAgIGxldCBsYkFjdGlvbiA9IGNjLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygxLCAxLjEpLFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygxLCAxLjApLFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygxLCAwLjkpLFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygxLCAxLjApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBmaW5pc2hlZCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHsgXHJcbiAgICAgICAgICAgIHRoaXMuYXV0aG9yTGIubm9kZS5ydW5BY3Rpb24obGJBY3Rpb24pXHJcbiAgICAgICAgICAgIHRoaXMud2VjaGF0TGIubm9kZS5ydW5BY3Rpb24oY2Muc3Bhd24oY2Muc2NhbGVUbygxLDEuMCksY2Mucm90YXRlQnkoMSw3MjApKSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgbGV0IGxiU3Bhd24gPSBjYy5zcGF3bihjYy5zY2FsZVRvKDEuNSwgMS4wKS5lYXNpbmcoY2MuZWFzZVNpbmVJbigpKSwgY2MuZmFkZVRvKDEuNSwgMjU1KS5lYXNpbmcoY2MuZWFzZVNpbmVJbigpKSk7XHJcbiAgICAgICAgbGV0IGxiU2VxdWVuY2UgPSBjYy5zZXF1ZW5jZShsYlNwYXduLCBmaW5pc2hlZCwpO1xyXG4gICAgICAgIHRoaXMuYXV0aG9yTGIubm9kZS5ydW5BY3Rpb24obGJTZXF1ZW5jZSk7XHJcbiAgICB9XHJcbiAgICBnb0dsYWNraG9sZSgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJCbGFja2hvbGVcIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIOavj+W4p+abtOaWsOWHveaVsFxyXG4gICAgLy8gdXBkYXRlKGR0KSB7fVxyXG59XHJcbiJdfQ==