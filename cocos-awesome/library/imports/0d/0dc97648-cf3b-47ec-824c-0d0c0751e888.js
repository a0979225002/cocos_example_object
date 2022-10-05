"use strict";
cc._RF.push(module, '0dc97ZIzztH7IJMDQwHUeiI', 'Moving_ghost');
// Scene/Moving_ghost/Moving_ghost.ts

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
var Moving_ghost = /** @class */ (function (_super) {
    __extends(Moving_ghost, _super);
    function Moving_ghost() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ghostCanvasList = [];
        _this.role = null;
        _this.roleCamera = null;
        return _this;
    }
    Moving_ghost.prototype.onLoad = function () {
        var _this = this;
        var roleZindex = 10;
        this.role.zIndex = roleZindex;
        var texture = new cc.RenderTexture();
        texture.initWithSize(this.node.width, this.node.height);
        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        this.roleCamera.targetTexture = texture;
        this.ghostCanvasList.forEach(function (ghost, idx) {
            ghost.node.scaleY = -1;
            ghost.node.zIndex = roleZindex - idx;
            ghost.node.opacity = 100 - idx * 15;
            ghost.spriteFrame = spriteFrame;
        });
        this.schedule(this.ghostFollow, 0.1, cc.macro.REPEAT_FOREVER);
        fcc.eventMgr.eventListener("SCENE", function (isUpdate) {
            cc.log(isUpdate);
            if (isUpdate) {
                _this.beforeDestroy();
            }
            else {
                var roleZindex_1 = 10;
                _this.role.zIndex = roleZindex_1;
                var texture_1 = new cc.RenderTexture();
                texture_1.initWithSize(_this.node.width, _this.node.height);
                var spriteFrame_1 = new cc.SpriteFrame();
                spriteFrame_1.setTexture(texture_1);
                _this.roleCamera.targetTexture = texture_1;
                _this.ghostCanvasList.forEach(function (ghost, idx) {
                    ghost.node.scaleY = -1;
                    ghost.node.zIndex = roleZindex_1 - idx;
                    ghost.node.opacity = 100 - idx * 15;
                    ghost.spriteFrame = spriteFrame_1;
                });
                _this.schedule(_this.ghostFollow, 0.1, cc.macro.REPEAT_FOREVER);
            }
        }, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
    };
    Moving_ghost.prototype.touchMoveEvent = function (evt) {
        this.role.x += evt.getDeltaX();
        this.role.y += evt.getDeltaY();
    };
    Moving_ghost.prototype.beforeDestroy = function () {
        this.unschedule(this.ghostFollow);
    };
    Moving_ghost.prototype.ghostFollow = function () {
        var _this = this;
        this.ghostCanvasList.forEach(function (ghost, i) {
            var dis = ghost.node.position.sub(_this.role.position).mag();
            if (dis < 0.5)
                return; // 给个误差范围，涉及到浮点数，dis的计算不可能精准，小于0.5就可以认为是静止了
            ghost.node.stopAllActions();
            ghost.node.runAction(cc.moveTo(i * 0.04 + 0.02, _this.role.x, _this.role.y));
        });
    };
    var _b, _c;
    __decorate([
        property([cc.Sprite]),
        __metadata("design:type", Array)
    ], Moving_ghost.prototype, "ghostCanvasList", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], Moving_ghost.prototype, "role", void 0);
    __decorate([
        property(cc.Camera),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Camera) === "function" ? _c : Object)
    ], Moving_ghost.prototype, "roleCamera", void 0);
    Moving_ghost = __decorate([
        ccclass
    ], Moving_ghost);
    return Moving_ghost;
}(cc.Component));
exports.default = Moving_ghost;

cc._RF.pop();