"use strict";
cc._RF.push(module, 'f0a29L217FAM4rQ+9QnVoK+', 'DataMinePetSelect');
// script/data/scene/DataMinePetSelect.ts

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
var DataMinePetSelect = /** @class */ (function (_super) {
    __extends(DataMinePetSelect, _super);
    function DataMinePetSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataMinePetSelect.prototype.onLoad = function () {
        this.node_item_slider_holder = this.node.getChildByName("item_slider_holder");
        this.node_item_main = this.node_item_slider_holder.getChildByName("item_main");
        this.node_arrow_holder = this.node.getChildByName("arrow_holder");
        this.node_intro_holder = this.node.getChildByName("intro_holder");
        this.node_intro_txt_group = this.node_intro_holder.getChildByName("txt_group");
        this.label_intro_title = this.node_intro_txt_group.getChildByName("title").getComponent(cc.Label);
        this.label_intro_con = this.node_intro_txt_group.getChildByName("con").getComponent(cc.Label);
        this.btn_slider_arrow_left = this.node_arrow_holder.getChildByName("arrow_left");
        this.btn_slider_arrow_right = this.node_arrow_holder.getChildByName("arrow_right");
        this.btn_go = this.node.getChildByName("btn_go");
        this.node_btn_go_normal = this.btn_go.getChildByName("normal");
        this.node_btn_go_active = this.btn_go.getChildByName("active");
        this.page_view = this.node_item_slider_holder.getComponent(cc.PageView);
        this.layout = this.node_item_main.getComponent(cc.Layout);
        this.node_choose_tip_main = this.node.getChildByName("choose_tip_main");
        this.node_choose_tip_bg = this.node_choose_tip_main.getChildByName("bg");
        this.node_choose_img_mask = this.node_choose_tip_main.getChildByName("mask");
        this.node_choose_tip_img = this.node_choose_img_mask.getChildByName("img");
        this.sprite_choose_tip_img = this.node_choose_tip_img.getComponent(cc.Sprite);
        this.node_choose_state = this.node_choose_tip_main.getChildByName("btn_state");
        this.label_choose_tip_title = this.node_choose_tip_main.getChildByName("title").getComponent(cc.Label);
    };
    DataMinePetSelect = __decorate([
        ccclass
    ], DataMinePetSelect);
    return DataMinePetSelect;
}(cc.Component));
exports.default = DataMinePetSelect;

cc._RF.pop();