
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/scene/DataMinePetSelect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxzY2VuZVxcRGF0YU1pbmVQZXRTZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFHbEM7SUFBK0MscUNBQVk7SUFBM0Q7O0lBNkRBLENBQUM7SUEvQkcsa0NBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFbEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUYsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFM0csQ0FBQztJQTNEZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0E2RHJDO0lBQUQsd0JBQUM7Q0E3REQsQUE2REMsQ0E3RDhDLEVBQUUsQ0FBQyxTQUFTLEdBNkQxRDtrQkE3RG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFNaW5lUGV0U2VsZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBub2RlX2Nob29zZV90aXBfbWFpbjogIGNjLk5vZGU7XHJcbiAgICBub2RlX2Nob29zZV90aXBfYmc6IGNjLk5vZGU7XHJcbiAgICBub2RlX2Nob29zZV9pbWdfbWFzazogY2MuTm9kZTtcclxuICAgIG5vZGVfY2hvb3NlX3RpcF9pbWc6IGNjLk5vZGU7XHJcbiAgICBzcHJpdGVfY2hvb3NlX3RpcF9pbWc6IGNjLlNwcml0ZTtcclxuICAgIG5vZGVfY2hvb3NlX3N0YXRlOiBjYy5Ob2RlO1xyXG4gICAgbGFiZWxfY2hvb3NlX3RpcF90aXRsZTogY2MuTGFiZWw7XHJcblxyXG4gICAgbm9kZV9pdGVtX3NsaWRlcl9ob2xkZXI6IGNjLk5vZGU7XHJcbiAgICBub2RlX2l0ZW1fbWFpbjogY2MuTm9kZTtcclxuICAgIG5vZGVfYXJyb3dfaG9sZGVyOiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9pbnRyb19ob2xkZXI6IGNjLk5vZGU7XHJcbiAgICBub2RlX2ludHJvX3R4dF9ncm91cDogY2MuTm9kZTtcclxuXHJcbiAgICBsYWJlbF9pbnRyb190aXRsZTogY2MuTGFiZWw7XHJcbiAgICBsYWJlbF9pbnRyb19jb246IGNjLkxhYmVsO1xyXG5cclxuICAgIGJ0bl9zbGlkZXJfYXJyb3dfbGVmdDogY2MuTm9kZTtcclxuICAgIGJ0bl9zbGlkZXJfYXJyb3dfcmlnaHQ6IGNjLk5vZGU7XHJcbiAgICBidG5fZ286IGNjLk5vZGU7XHJcblxyXG4gICAgbm9kZV9idG5fZ29fbm9ybWFsOiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9idG5fZ29fYWN0aXZlOiBjYy5Ob2RlO1xyXG5cclxuICAgIHBhZ2VfdmlldzogY2MuUGFnZVZpZXc7XHJcbiAgICBsYXlvdXQ6IGNjLkxheW91dDtcclxuXHJcblxyXG4gICAgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfaXRlbV9zbGlkZXJfaG9sZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaXRlbV9zbGlkZXJfaG9sZGVyXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZV9pdGVtX21haW4gPSB0aGlzLm5vZGVfaXRlbV9zbGlkZXJfaG9sZGVyLmdldENoaWxkQnlOYW1lKFwiaXRlbV9tYWluXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZV9hcnJvd19ob2xkZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd19ob2xkZXJcIik7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZV9pbnRyb19ob2xkZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbnRyb19ob2xkZXJcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX2ludHJvX3R4dF9ncm91cCA9IHRoaXMubm9kZV9pbnRyb19ob2xkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRfZ3JvdXBcIik7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9pbnRyb190aXRsZSA9IHRoaXMubm9kZV9pbnRyb190eHRfZ3JvdXAuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMubGFiZWxfaW50cm9fY29uID0gdGhpcy5ub2RlX2ludHJvX3R4dF9ncm91cC5nZXRDaGlsZEJ5TmFtZShcImNvblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bl9zbGlkZXJfYXJyb3dfbGVmdCA9IHRoaXMubm9kZV9hcnJvd19ob2xkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd19sZWZ0XCIpO1xyXG4gICAgICAgIHRoaXMuYnRuX3NsaWRlcl9hcnJvd19yaWdodCA9IHRoaXMubm9kZV9hcnJvd19ob2xkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd19yaWdodFwiKTtcclxuICAgICAgICB0aGlzLmJ0bl9nbyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9nb1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlX2J0bl9nb19ub3JtYWwgPSB0aGlzLmJ0bl9nby5nZXRDaGlsZEJ5TmFtZShcIm5vcm1hbFwiKTtcclxuICAgICAgICB0aGlzLm5vZGVfYnRuX2dvX2FjdGl2ZSA9IHRoaXMuYnRuX2dvLmdldENoaWxkQnlOYW1lKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnBhZ2VfdmlldyA9IHRoaXMubm9kZV9pdGVtX3NsaWRlcl9ob2xkZXIuZ2V0Q29tcG9uZW50KGNjLlBhZ2VWaWV3KTtcclxuICAgICAgICB0aGlzLmxheW91dCA9IHRoaXMubm9kZV9pdGVtX21haW4uZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZV9jaG9vc2VfdGlwX21haW4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjaG9vc2VfdGlwX21haW5cIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX2Nob29zZV90aXBfYmcgPSB0aGlzLm5vZGVfY2hvb3NlX3RpcF9tYWluLmdldENoaWxkQnlOYW1lKFwiYmdcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX2Nob29zZV9pbWdfbWFzayA9IHRoaXMubm9kZV9jaG9vc2VfdGlwX21haW4uZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZV9jaG9vc2VfdGlwX2ltZyA9IHRoaXMubm9kZV9jaG9vc2VfaW1nX21hc2suZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIik7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVfY2hvb3NlX3RpcF9pbWcgPSB0aGlzLm5vZGVfY2hvb3NlX3RpcF9pbWcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlX2Nob29zZV9zdGF0ZSA9IHRoaXMubm9kZV9jaG9vc2VfdGlwX21haW4uZ2V0Q2hpbGRCeU5hbWUoXCJidG5fc3RhdGVcIik7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9jaG9vc2VfdGlwX3RpdGxlID0gdGhpcy5ub2RlX2Nob29zZV90aXBfbWFpbi5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgfVxyXG5cclxufSJdfQ==