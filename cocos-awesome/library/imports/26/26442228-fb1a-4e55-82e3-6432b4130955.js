"use strict";
cc._RF.push(module, '26442Io+xpOVYLjZDK0EwlV', 'Photo_gallery');
// Scene/Photo_gallery/Photo_gallery.ts

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
var Scene_transition = /** @class */ (function (_super) {
    __extends(Scene_transition, _super);
    function Scene_transition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.switchNodeList = [];
        _this.fadeRadius = 0.1;
        _this.isTransforming = false;
        return _this;
    }
    Scene_transition.prototype.onLoad = function () {
        var _this = this;
        this.switchNodeList.forEach(function (node, idx) {
            node.zIndex = _this.switchNodeList.length - idx;
        });
    };
    Scene_transition.prototype.bgTramsform = function () {
        var _this = this;
        if (this.isTransforming)
            return;
        this.isTransforming = true;
        var time = 0.0;
        var node = this.switchNodeList[0];
        var material = node.getComponent(cc.Sprite).getMaterial(0);
        material.setProperty('u_fade_radius', this.fadeRadius);
        material.setProperty('u_time', time);
        material.define('USE_TRAMSFORM', true, 0, true);
        var timer = setInterval(function () {
            time += 0.03;
            material.setProperty('u_time', time);
            if (time > 1.0 + _this.fadeRadius) {
                _this.switchNodeList.shift();
                _this.switchNodeList.push(node);
                _this.switchNodeList.forEach(function (node, idx) {
                    node.zIndex = _this.switchNodeList.length - idx;
                });
                material.define('USE_TRAMSFORM', false, 0, true);
                _this.isTransforming = false;
                timer && clearInterval(timer);
            }
        }, 30);
    };
    __decorate([
        property([cc.Node]),
        __metadata("design:type", Array)
    ], Scene_transition.prototype, "switchNodeList", void 0);
    Scene_transition = __decorate([
        ccclass
    ], Scene_transition);
    return Scene_transition;
}(cc.Component));
exports.default = Scene_transition;

cc._RF.pop();