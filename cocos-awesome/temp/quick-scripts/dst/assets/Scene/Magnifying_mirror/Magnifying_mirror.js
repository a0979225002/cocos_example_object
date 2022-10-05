
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Magnifying_mirror/Magnifying_mirror.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXE1hZ25pZnlpbmdfbWlycm9yXFxNYWduaWZ5aW5nX21pcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQThDQztRQTVDRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUVqQywwQkFBb0IsR0FBWSxJQUFJLENBQUM7UUFHckMsY0FBUSxHQUFZLElBQUksQ0FBQztRQVV6QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixxQkFBZSxHQUFZLElBQUksQ0FBQzs7SUEwQnBDLENBQUM7SUFwQ0csaUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUlELDBDQUFlLEdBQWYsVUFBZ0IsS0FBSztRQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVELHlDQUFjLEdBQWQsVUFBZSxLQUFLO1FBQ2xCLElBQUksUUFBUSxHQUFZLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO1FBRXpFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFDRSxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTNDLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsSUFBSSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBRXRFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDNUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDOztJQTNDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNWLEVBQUUsb0JBQUYsRUFBRSxDQUFDLElBQUk7b0RBQVE7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDQSxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxJQUFJOzhEQUFRO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ0ksRUFBRSxvQkFBRixFQUFFLENBQUMsSUFBSTtrRUFBUTtJQU5wQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQThDcEM7SUFBRCx1QkFBQztDQTlDRCxBQThDQyxDQTlDNkMsRUFBRSxDQUFDLFNBQVMsR0E4Q3pEO2tCQTlDb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWduaWZ5aW5nTWlycm9yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWlycm9yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWlycm9yQ2FtZXJhTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRlbXBDYW1lcmFTcHJpdGVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgdmlld1NpemU6IGNjLlNpemUgPSBudWxsO1xyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgdGhpcy52aWV3U2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuICAgICAgdGhpcy5pbml0Q2FtZXJhKCk7XHJcbiAgICAgIHRoaXMubWlycm9yQ2FtZXJhTm9kZS5zZXRQb3NpdGlvbih0aGlzLm1pcnJvci5nZXRQb3NpdGlvbigpKTtcclxuXHJcbiAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0RXZlbnQsIHRoaXMpO1xyXG4gICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmVFdmVudCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hTdGFydFBvczogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBtaXJyb3JPcmlnaW5Qb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgdG91Y2hTdGFydEV2ZW50KGV2ZW50KSB7XHJcbiAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgIHRoaXMubWlycm9yT3JpZ2luUG9zID0gdGhpcy5taXJyb3IuZ2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICB0b3VjaE1vdmVFdmVudChldmVudCkge1xyXG4gICAgICBsZXQgdG91Y2hQb3M6IGNjLlZlYzIgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICBsZXQgcG9zID0gdGhpcy5taXJyb3JPcmlnaW5Qb3MuYWRkKHRvdWNoUG9zLnN1YnRyYWN0KHRoaXMudG91Y2hTdGFydFBvcykpXHJcblxyXG4gICAgICB0aGlzLm1pcnJvci5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICB0aGlzLm1pcnJvckNhbWVyYU5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0Q2FtZXJhKCkge1xyXG4gICAgICBsZXQgdmlzaWJsZVJlY3QgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XHJcblxyXG4gICAgICBsZXQgdGV4dHVyZSA9IG5ldyBjYy5SZW5kZXJUZXh0dXJlKCk7XHJcbiAgICAgIHRleHR1cmUuaW5pdFdpdGhTaXplKHZpc2libGVSZWN0LndpZHRoLCB2aXNpYmxlUmVjdC5oZWlnaHQpO1xyXG4gICAgICBsZXQgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcclxuICAgICAgc3ByaXRlRnJhbWUuc2V0VGV4dHVyZSh0ZXh0dXJlKTtcclxuICAgICAgdGhpcy5taXJyb3JDYW1lcmFOb2RlLmdldENvbXBvbmVudChjYy5DYW1lcmEpLnRhcmdldFRleHR1cmUgPSB0ZXh0dXJlO1xyXG5cclxuICAgICAgdGhpcy50ZW1wQ2FtZXJhU3ByaXRlTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICB0aGlzLnRlbXBDYW1lcmFTcHJpdGVOb2RlLnNjYWxlWSA9IC0xO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==