"use strict";
cc._RF.push(module, '0fdd3GZQGJGxqJ+FslCjHX8', 'DataGame');
// script/data/scene/DataGame.ts

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
var DataGame = /** @class */ (function (_super) {
    __extends(DataGame, _super);
    function DataGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataGame.prototype.onLoad = function () {
        var parent = this.node.getParent();
        this.Canvas = parent.getChildByName("Canvas");
        this.mine_mng_holder = this.Canvas.getChildByName("mine_mng_holder");
        this.mine_holder = this.Canvas.getChildByName("mine_holder");
        this.info_pop_holder = this.Canvas.getChildByName("info_pop_holder");
        this.skin_pop_holder = this.Canvas.getChildByName("skin_pop_holder");
        this.upgrade_holder = this.Canvas.getChildByName("upgrade_holder");
        this.load_tip = this.Canvas.getChildByName("load_tip");
        this.btn_close = this.Canvas.getChildByName("btn_close");
        this.btn_info = this.Canvas.getChildByName("btn_info");
        this.ver_str = this.Canvas.getChildByName("ver_str").getComponent(cc.Label);
    };
    DataGame = __decorate([
        ccclass
    ], DataGame);
    return DataGame;
}(cc.Component));
exports.default = DataGame;

cc._RF.pop();