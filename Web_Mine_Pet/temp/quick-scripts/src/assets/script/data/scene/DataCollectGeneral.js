"use strict";
cc._RF.push(module, '681860GOZRHaqZFZ7UmArby', 'DataCollectGeneral');
// script/data/scene/DataCollectGeneral.ts

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
var DataCollectGeneral = /** @class */ (function (_super) {
    __extends(DataCollectGeneral, _super);
    function DataCollectGeneral() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataCollectGeneral.prototype.onLoad = function () {
        this.node_mine_tip_holder = this.node.getChildByName("mine_tip_holder");
        this.label_time = this.node_mine_tip_holder.getChildByName("remain_time").getComponent(cc.Label);
        this.label_coin_txt = this.node_mine_tip_holder.getChildByName("coin_txt").getComponent(cc.Label);
        this.node_icon_mine_box = this.node.getChildByName("icon_mine_box");
        this.sprite_icon_mine = this.node_icon_mine_box.getChildByName("icon").getComponent(cc.Sprite);
        this.node_icon_partner_box = this.node.getChildByName("icon_partner_box");
        this.sprite_icon_partner = this.node_icon_partner_box.getChildByName("icon").getComponent(cc.Sprite);
        this.node_coin_particle_holder = this.node.getChildByName("coin_particle_holder");
        this.node_gold_coin_holder = this.node.getChildByName("gold_coin_holder");
        this.node_sliver_coin_holder = this.node.getChildByName("sliver_coin_holder");
        this.node_coin_level_holder = this.node.getChildByName("coin_level_holder");
        this.label_gold = this.node_gold_coin_holder.getChildByName("txt").getComponent(cc.Label);
        this.label_sliver = this.node_sliver_coin_holder.getChildByName("txt").getComponent(cc.Label);
        this.btn_get = this.node.getChildByName("btn_get");
        this.node_get_normal = this.btn_get.getChildByName("normal");
        this.node_get_active = this.btn_get.getChildByName("active");
        this.spine_road = this.node.getChildByName("road").getComponent(sp.Skeleton);
        this.spine_pet = this.node.getChildByName("pet").getComponent(sp.Skeleton);
        this.spine_partner = this.node.getChildByName("partner").getComponent(sp.Skeleton);
        this.spine_coin = this.node.getChildByName("coin").getComponent(sp.Skeleton);
    };
    DataCollectGeneral = __decorate([
        ccclass
    ], DataCollectGeneral);
    return DataCollectGeneral;
}(cc.Component));
exports.default = DataCollectGeneral;

cc._RF.pop();