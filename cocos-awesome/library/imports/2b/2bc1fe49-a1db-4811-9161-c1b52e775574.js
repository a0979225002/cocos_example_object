"use strict";
cc._RF.push(module, '2bc1f5JodtIEZFhwbUud1V0', 'Change_clothes');
// Scene/Change_clothes/Change_clothes.ts

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
var Change_clothes = /** @class */ (function (_super) {
    __extends(Change_clothes, _super);
    function Change_clothes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.npcAtlas = null;
        _this.hair = null;
        _this.clothes = null;
        _this.sleeve = null;
        _this.shoe = null;
        return _this;
    }
    Change_clothes.prototype.changeClothes = function (evn, type) {
        var hairType = this.hair.spriteFrame.name == 'hair_1';
        var clothesType = this.clothes.spriteFrame.name == 'clothes_1';
        var shoeType = this.shoe.spriteFrame.name == 'shoe_1';
        switch (type) {
            case 'hair':
                this.hair.spriteFrame = this.npcAtlas.getSpriteFrame(hairType ? 'hair_2' : 'hair_1');
                break;
            case 'clothes':
                this.clothes.spriteFrame = this.npcAtlas.getSpriteFrame(clothesType ? 'clothes_2' : 'clothes_1');
                this.sleeve.spriteFrame = this.npcAtlas.getSpriteFrame(clothesType ? 'sleeve_2' : 'sleeve_1');
                break;
            case 'shoe':
                this.shoe.spriteFrame = this.npcAtlas.getSpriteFrame(shoeType ? 'shoe_2' : 'shoe_1');
                break;
        }
    };
    var _b, _c, _d, _e, _f;
    __decorate([
        property(cc.SpriteAtlas),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.SpriteAtlas) === "function" ? _b : Object)
    ], Change_clothes.prototype, "npcAtlas", void 0);
    __decorate([
        property(cc.Sprite),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Sprite) === "function" ? _c : Object)
    ], Change_clothes.prototype, "hair", void 0);
    __decorate([
        property(cc.Sprite),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Sprite) === "function" ? _d : Object)
    ], Change_clothes.prototype, "clothes", void 0);
    __decorate([
        property(cc.Sprite),
        __metadata("design:type", typeof (_e = typeof cc !== "undefined" && cc.Sprite) === "function" ? _e : Object)
    ], Change_clothes.prototype, "sleeve", void 0);
    __decorate([
        property(cc.Sprite),
        __metadata("design:type", typeof (_f = typeof cc !== "undefined" && cc.Sprite) === "function" ? _f : Object)
    ], Change_clothes.prototype, "shoe", void 0);
    Change_clothes = __decorate([
        ccclass
    ], Change_clothes);
    return Change_clothes;
}(cc.Component));
exports.default = Change_clothes;

cc._RF.pop();