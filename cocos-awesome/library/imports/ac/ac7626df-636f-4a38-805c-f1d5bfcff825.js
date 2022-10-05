"use strict";
cc._RF.push(module, 'ac762bfY29KOIBc8dW/z/gl', 'Magnifying_mirror');
// Scene/Magnifying_mirror/Magnifying_mirror.ts

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MagnifyingMirror = /** @class */ (function (_super) {
    __extends(MagnifyingMirror, _super);
    function MagnifyingMirror() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mirror = null;
        _this.mirrorCameraNode = null;
        _this.tempCameraSpriteNode = null;
        _this.viewSize = null;
        _this.touchStartPos = null;
        _this.mirrorOriginPos = null;
        return _this;
    }
    MagnifyingMirror.prototype.onLoad = function () {
        this.viewSize = cc.view.getVisibleSize();
        this.initCamera();
        this.mirrorCameraNode.setPosition(this.mirror.getPosition());
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
    };
    MagnifyingMirror.prototype.touchStartEvent = function (event) {
        this.touchStartPos = event.getLocation();
        this.mirrorOriginPos = this.mirror.getPosition();
    };
    MagnifyingMirror.prototype.touchMoveEvent = function (event) {
        var touchPos = event.getLocation();
        var pos = this.mirrorOriginPos.add(touchPos.subtract(this.touchStartPos));
        this.mirror.setPosition(pos);
        this.mirrorCameraNode.setPosition(pos);
    };
    MagnifyingMirror.prototype.initCamera = function () {
        var visibleRect = cc.view.getVisibleSize();
        var texture = new cc.RenderTexture();
        texture.initWithSize(visibleRect.width, visibleRect.height);
        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        this.mirrorCameraNode.getComponent(cc.Camera).targetTexture = texture;
        this.tempCameraSpriteNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        this.tempCameraSpriteNode.scaleY = -1;
    };
    var _b, _c, _d;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], MagnifyingMirror.prototype, "mirror", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Node) === "function" ? _c : Object)
    ], MagnifyingMirror.prototype, "mirrorCameraNode", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Node) === "function" ? _d : Object)
    ], MagnifyingMirror.prototype, "tempCameraSpriteNode", void 0);
    MagnifyingMirror = __decorate([
        ccclass
    ], MagnifyingMirror);
    return MagnifyingMirror;
}(cc.Component));
exports.default = MagnifyingMirror;

cc._RF.pop();