
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Change_clothes/Change_clothes.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXENoYW5nZV9jbG90aGVzXFxDaGFuZ2VfY2xvdGhlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQStCQztRQTdCQyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUdoQyxVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQWMsSUFBSSxDQUFDOztJQW9CekIsQ0FBQztJQWxCQyxzQ0FBYSxHQUFiLFVBQWMsR0FBRyxFQUFFLElBQVk7UUFDN0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQztRQUN0RCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDO1FBQy9ELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxRQUFRLENBQUM7UUFFdEQsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNyRixNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDakcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM5RixNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDckYsTUFBTTtTQUNUO0lBQ0gsQ0FBQzs7SUE1QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztzREFDZixFQUFFLG9CQUFGLEVBQUUsQ0FBQyxXQUFXO29EQUFRO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ2QsRUFBRSxvQkFBRixFQUFFLENBQUMsTUFBTTtnREFBUTtJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNYLEVBQUUsb0JBQUYsRUFBRSxDQUFDLE1BQU07bURBQVE7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDWixFQUFFLG9CQUFGLEVBQUUsQ0FBQyxNQUFNO2tEQUFRO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ2QsRUFBRSxvQkFBRixFQUFFLENBQUMsTUFBTTtnREFBUTtJQVhKLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0ErQmxDO0lBQUQscUJBQUM7Q0EvQkQsQUErQkMsQ0EvQjJDLEVBQUUsQ0FBQyxTQUFTLEdBK0J2RDtrQkEvQm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlX2Nsb3RoZXMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVBdGxhcylcclxuICBucGNBdGxhczogY2MuU3ByaXRlQXRsYXMgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gIGhhaXI6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICBjbG90aGVzOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgc2xlZXZlOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgc2hvZTogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgY2hhbmdlQ2xvdGhlcyhldm4sIHR5cGU6IHN0cmluZykge1xyXG4gICAgbGV0IGhhaXJUeXBlID0gdGhpcy5oYWlyLnNwcml0ZUZyYW1lLm5hbWUgPT0gJ2hhaXJfMSc7XHJcbiAgICBsZXQgY2xvdGhlc1R5cGUgPSB0aGlzLmNsb3RoZXMuc3ByaXRlRnJhbWUubmFtZSA9PSAnY2xvdGhlc18xJztcclxuICAgIGxldCBzaG9lVHlwZSA9IHRoaXMuc2hvZS5zcHJpdGVGcmFtZS5uYW1lID09ICdzaG9lXzEnO1xyXG5cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdoYWlyJzpcclxuICAgICAgICB0aGlzLmhhaXIuc3ByaXRlRnJhbWUgPSB0aGlzLm5wY0F0bGFzLmdldFNwcml0ZUZyYW1lKGhhaXJUeXBlID8gJ2hhaXJfMicgOiAnaGFpcl8xJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2Nsb3RoZXMnOlxyXG4gICAgICAgIHRoaXMuY2xvdGhlcy5zcHJpdGVGcmFtZSA9IHRoaXMubnBjQXRsYXMuZ2V0U3ByaXRlRnJhbWUoY2xvdGhlc1R5cGUgPyAnY2xvdGhlc18yJyA6ICdjbG90aGVzXzEnKTtcclxuICAgICAgICB0aGlzLnNsZWV2ZS5zcHJpdGVGcmFtZSA9IHRoaXMubnBjQXRsYXMuZ2V0U3ByaXRlRnJhbWUoY2xvdGhlc1R5cGUgPyAnc2xlZXZlXzInIDogJ3NsZWV2ZV8xJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3Nob2UnOlxyXG4gICAgICAgIHRoaXMuc2hvZS5zcHJpdGVGcmFtZSA9IHRoaXMubnBjQXRsYXMuZ2V0U3ByaXRlRnJhbWUoc2hvZVR5cGUgPyAnc2hvZV8yJyA6ICdzaG9lXzEnKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19