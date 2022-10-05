
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/scene/DataMineToolBox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c9ebgvRsVFL4K6mEvb/+vq', 'DataMineToolBox');
// script/data/scene/DataMineToolBox.ts

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
var DataMineToolBox = /** @class */ (function (_super) {
    __extends(DataMineToolBox, _super);
    function DataMineToolBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataMineToolBox.prototype.onLoad = function () {
        this.node_item_slider_holder = this.node.getChildByName("item_slider_holder");
        this.node_item_main = this.node_item_slider_holder.getChildByName("item_main");
        this.node_arrow_holder = this.node.getChildByName("arrow_holder");
        this.node_props_holder = this.node.getChildByName("props_holder");
        this.node_pet_dialog_holder = this.node.getChildByName("pet_dialog_holder");
        this.label_pet_dialog_txt = this.node_pet_dialog_holder.getChildByName("txt").getComponent(cc.Label);
        this.node_level_holder = this.node.getChildByName("level_holder");
        this.node_level_bar = this.node_level_holder.getChildByName("level_bar");
        this.ani_level_bar = this.node_level_bar.getChildByName("mask").getComponent(cc.Animation);
        this.label_level_num = this.node_level_holder.getChildByName("level_num").getComponent(cc.Label);
        this.node_intro_holder = this.node.getChildByName("intro_holder");
        this.label_msg_tip = this.node_intro_holder.getChildByName("msg_tip").getComponent(cc.Label);
        this.label_item_name = this.node.getChildByName("item_name").getComponent(cc.Label);
        this.node_intro_con_1 = this.node_intro_holder.getChildByName("con_1");
        this.node_intro_con_2 = this.node_intro_holder.getChildByName("con_2");
        this.node_intro_con_3 = this.node_intro_holder.getChildByName("con_3");
        this.btn_confirm = this.node.getChildByName("btn_confirm");
        this.node_confirm_active = this.btn_confirm.getChildByName("active");
        this.node_state_tip = this.node.getChildByName("state_tip");
        this.btn_slider_arrow_left = this.node_arrow_holder.getChildByName("arrow_left");
        this.btn_slider_arrow_right = this.node_arrow_holder.getChildByName("arrow_right");
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
    DataMineToolBox = __decorate([
        ccclass
    ], DataMineToolBox);
    return DataMineToolBox;
}(cc.Component));
exports.default = DataMineToolBox;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxzY2VuZVxcRGF0YU1pbmVUb29sQm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFRLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQTZDLG1DQUFZO0lBQXpEOztJQTBGQSxDQUFDO0lBL0NHLGdDQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxD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LGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0EwRm5DO0lBQUQsc0JBQUM7Q0ExRkQsQUEwRkMsQ0ExRjRDLEVBQUUsQ0FBQyxTQUFTLEdBMEZ4RDtrQkExRm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhTWluZVRvb2xCb3ggZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG5vZGVfY2hvb3NlX3RpcF9tYWluOiAgY2MuTm9kZTtcclxuICAgIG5vZGVfY2hvb3NlX3RpcF9iZzogY2MuTm9kZTtcclxuICAgIG5vZGVfY2hvb3NlX2ltZ19tYXNrOiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9jaG9vc2VfdGlwX2ltZzogY2MuTm9kZTtcclxuICAgIHNwcml0ZV9jaG9vc2VfdGlwX2ltZzogY2MuU3ByaXRlO1xyXG4gICAgbm9kZV9jaG9vc2Vfc3RhdGU6IGNjLk5vZGU7XHJcblxyXG4gICAgbGFiZWxfY2hvb3NlX3RpcF90aXRsZTogY2MuTGFiZWw7XHJcbiAgICBsYWJlbF9pdGVtX25hbWU6IGNjLkxhYmVsO1xyXG5cclxuICAgIG5vZGVfcGV0X2RpYWxvZ19ob2xkZXI6IGNjLk5vZGU7XHJcbiAgICBsYWJlbF9wZXRfZGlhbG9nX3R4dDogY2MuTGFiZWw7XHJcblxyXG4gICAgbm9kZV9pdGVtX3NsaWRlcl9ob2xkZXI6IGNjLk5vZGU7XHJcbiAgICBub2RlX2l0ZW1fbWFpbjogY2MuTm9kZTtcclxuICAgIG5vZGVfYXJyb3dfaG9sZGVyOiBjYy5Ob2RlO1xyXG5cclxuICAgIG5vZGVfcHJvcHNfaG9sZGVyOiBjYy5Ob2RlO1xyXG5cclxuICAgIG5vZGVfbGV2ZWxfaG9sZGVyOiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9sZXZlbF9iYXI6IGNjLk5vZGU7XHJcbiAgICBhbmlfbGV2ZWxfYmFyOiBjYy5BbmltYXRpb247XHJcbiAgICBsYWJlbF9sZXZlbF9udW06IGNjLkxhYmVsO1xyXG5cclxuICAgIG5vZGVfaW50cm9faG9sZGVyOiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9pbnRyb19jb25fMTogY2MuTm9kZTtcclxuICAgIG5vZGVfaW50cm9fY29uXzI6IGNjLk5vZGU7XHJcbiAgICBub2RlX2ludHJvX2Nvbl8zOiBjYy5Ob2RlO1xyXG4gICAgbGFiZWxfbXNnX3RpcDogY2MuTGFiZWw7XHJcblxyXG4gICAgYnRuX3NsaWRlcl9hcnJvd19sZWZ0OiBjYy5Ob2RlO1xyXG4gICAgYnRuX3NsaWRlcl9hcnJvd19yaWdodDogY2MuTm9kZTtcclxuXHJcbiAgICBidG5fY29uZmlybTogY2MuTm9kZTtcclxuICAgIG5vZGVfY29uZmlybV9hY3RpdmU6IGNjLk5vZGU7XHJcblxyXG4gICAgbm9kZV9zdGF0ZV90aXA6IGNjLk5vZGU7XHJcblxyXG4gICAgcGFnZV92aWV3OiBjYy5QYWdlVmlldztcclxuICAgIGxheW91dDogY2MuTGF5b3V0O1xyXG5cclxuICAgIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlX2l0ZW1fc2xpZGVyX2hvbGRlciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fc2xpZGVyX2hvbGRlclwiKTtcclxuICAgICAgICB0aGlzLm5vZGVfaXRlbV9tYWluID0gdGhpcy5ub2RlX2l0ZW1fc2xpZGVyX2hvbGRlci5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fbWFpblwiKTtcclxuICAgICAgICB0aGlzLm5vZGVfYXJyb3dfaG9sZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYXJyb3dfaG9sZGVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfcHJvcHNfaG9sZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvcHNfaG9sZGVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfcGV0X2RpYWxvZ19ob2xkZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwZXRfZGlhbG9nX2hvbGRlclwiKTtcclxuICAgICAgICB0aGlzLmxhYmVsX3BldF9kaWFsb2dfdHh0ID0gdGhpcy5ub2RlX3BldF9kaWFsb2dfaG9sZGVyLmdldENoaWxkQnlOYW1lKFwidHh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZV9sZXZlbF9ob2xkZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsZXZlbF9ob2xkZXJcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX2xldmVsX2JhciA9IHRoaXMubm9kZV9sZXZlbF9ob2xkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJsZXZlbF9iYXJcIik7XHJcbiAgICAgICAgdGhpcy5hbmlfbGV2ZWxfYmFyID0gdGhpcy5ub2RlX2xldmVsX2Jhci5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWxfbGV2ZWxfbnVtID0gdGhpcy5ub2RlX2xldmVsX2hvbGRlci5nZXRDaGlsZEJ5TmFtZShcImxldmVsX251bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfaW50cm9faG9sZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaW50cm9faG9sZGVyXCIpO1xyXG4gICAgICAgIHRoaXMubGFiZWxfbXNnX3RpcCA9IHRoaXMubm9kZV9pbnRyb19ob2xkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJtc2dfdGlwXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWxfaXRlbV9uYW1lID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaXRlbV9uYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZV9pbnRyb19jb25fMSA9IHRoaXMubm9kZV9pbnRyb19ob2xkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJjb25fMVwiKTtcclxuICAgICAgICB0aGlzLm5vZGVfaW50cm9fY29uXzIgPSB0aGlzLm5vZGVfaW50cm9faG9sZGVyLmdldENoaWxkQnlOYW1lKFwiY29uXzJcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX2ludHJvX2Nvbl8zID0gdGhpcy5ub2RlX2ludHJvX2hvbGRlci5nZXRDaGlsZEJ5TmFtZShcImNvbl8zXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bl9jb25maXJtID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuX2NvbmZpcm1cIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX2NvbmZpcm1fYWN0aXZlID0gdGhpcy5idG5fY29uZmlybS5nZXRDaGlsZEJ5TmFtZShcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlX3N0YXRlX3RpcCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXRlX3RpcFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5idG5fc2xpZGVyX2Fycm93X2xlZnQgPSB0aGlzLm5vZGVfYXJyb3dfaG9sZGVyLmdldENoaWxkQnlOYW1lKFwiYXJyb3dfbGVmdFwiKTtcclxuICAgICAgICB0aGlzLmJ0bl9zbGlkZXJfYXJyb3dfcmlnaHQgPSB0aGlzLm5vZGVfYXJyb3dfaG9sZGVyLmdldENoaWxkQnlOYW1lKFwiYXJyb3dfcmlnaHRcIik7XHJcblxyXG4gICAgICAgIHRoaXMucGFnZV92aWV3ID0gdGhpcy5ub2RlX2l0ZW1fc2xpZGVyX2hvbGRlci5nZXRDb21wb25lbnQoY2MuUGFnZVZpZXcpO1xyXG4gICAgICAgIHRoaXMubGF5b3V0ID0gdGhpcy5ub2RlX2l0ZW1fbWFpbi5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlX2Nob29zZV90aXBfbWFpbiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNob29zZV90aXBfbWFpblwiKTtcclxuICAgICAgICB0aGlzLm5vZGVfY2hvb3NlX3RpcF9iZyA9IHRoaXMubm9kZV9jaG9vc2VfdGlwX21haW4uZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKTtcclxuICAgICAgICB0aGlzLm5vZGVfY2hvb3NlX2ltZ19tYXNrID0gdGhpcy5ub2RlX2Nob29zZV90aXBfbWFpbi5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX2Nob29zZV90aXBfaW1nID0gdGhpcy5ub2RlX2Nob29zZV9pbWdfbWFzay5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKTtcclxuICAgICAgICB0aGlzLnNwcml0ZV9jaG9vc2VfdGlwX2ltZyA9IHRoaXMubm9kZV9jaG9vc2VfdGlwX2ltZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB0aGlzLm5vZGVfY2hvb3NlX3N0YXRlID0gdGhpcy5ub2RlX2Nob29zZV90aXBfbWFpbi5nZXRDaGlsZEJ5TmFtZShcImJ0bl9zdGF0ZVwiKTtcclxuICAgICAgICB0aGlzLmxhYmVsX2Nob29zZV90aXBfdGl0bGUgPSB0aGlzLm5vZGVfY2hvb3NlX3RpcF9tYWluLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICB9XHJcblxyXG59Il19