"use strict";
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