
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/scene/DataCollectGeneral.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxzY2VuZVxcRGF0YUNvbGxlY3RHZW5lcmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQUEsT0FBTyxHQUFJLEVBQUUsQ0FBQyxVQUFVLFFBQWpCLENBQWtCO0FBR2hDO0lBQWdELHNDQUFZO0lBQTVEOztJQStEQSxDQUFDO0lBakNHLG1DQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvRixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsbUJBQW1CLEdBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRHLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRWxGLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRTlFLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRTVFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVqRixDQUFDO0lBN0RnQixrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQStEdEM7SUFBRCx5QkFBQztDQS9ERCxBQStEQyxDQS9EK0MsRUFBRSxDQUFDLFNBQVMsR0ErRDNEO2tCQS9Eb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3N9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFDb2xsZWN0R2VuZXJhbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgbm9kZV9jb2luX3BhcnRpY2xlX2hvbGRlcjogY2MuTm9kZTtcclxuICAgIG5vZGVfbWluZV90aXBfaG9sZGVyOiBjYy5Ob2RlO1xyXG5cclxuICAgIG5vZGVfZ29sZF9jb2luX2hvbGRlcjogY2MuTm9kZTtcclxuICAgIG5vZGVfc2xpdmVyX2NvaW5faG9sZGVyOiBjYy5Ob2RlO1xyXG5cclxuICAgIG5vZGVfY29pbl9sZXZlbF9ob2xkZXI6IGNjLk5vZGU7XHJcblxyXG4gICAgbm9kZV9pY29uX21pbmVfYm94OiBjYy5Ob2RlO1xyXG4gICAgc3ByaXRlX2ljb25fbWluZTogY2MuU3ByaXRlO1xyXG5cclxuICAgIG5vZGVfaWNvbl9wYXJ0bmVyX2JveDogY2MuTm9kZTtcclxuICAgIHNwcml0ZV9pY29uX3BhcnRuZXI6IGNjLlNwcml0ZTtcclxuXHJcbiAgICBsYWJlbF90aW1lOiBjYy5MYWJlbDtcclxuICAgIGxhYmVsX2dvbGQ6IGNjLkxhYmVsO1xyXG4gICAgbGFiZWxfc2xpdmVyOiBjYy5MYWJlbDtcclxuICAgIGxhYmVsX2NvaW5fdHh0OiBjYy5MYWJlbDtcclxuXHJcbiAgICBidG5fZ2V0OiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9nZXRfbm9ybWFsOiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9nZXRfYWN0aXZlOiBjYy5Ob2RlO1xyXG5cclxuICAgIHNwaW5lX3JvYWQ6IHNwLlNrZWxldG9uO1xyXG4gICAgc3BpbmVfcGV0OiBzcC5Ta2VsZXRvbjtcclxuICAgIHNwaW5lX3BhcnRuZXI6IHNwLlNrZWxldG9uO1xyXG4gICAgc3BpbmVfY29pbjogc3AuU2tlbGV0b247XHJcblxyXG4gICAgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfbWluZV90aXBfaG9sZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibWluZV90aXBfaG9sZGVyXCIpO1xyXG4gICAgICAgIHRoaXMubGFiZWxfdGltZSA9IHRoaXMubm9kZV9taW5lX3RpcF9ob2xkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJyZW1haW5fdGltZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMubGFiZWxfY29pbl90eHQgPSB0aGlzLm5vZGVfbWluZV90aXBfaG9sZGVyLmdldENoaWxkQnlOYW1lKFwiY29pbl90eHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlX2ljb25fbWluZV9ib3ggPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX21pbmVfYm94XCIpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlX2ljb25fbWluZSA9IHRoaXMubm9kZV9pY29uX21pbmVfYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlX2ljb25fcGFydG5lcl9ib3ggPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX3BhcnRuZXJfYm94XCIpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlX2ljb25fcGFydG5lciA9ICB0aGlzLm5vZGVfaWNvbl9wYXJ0bmVyX2JveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZV9jb2luX3BhcnRpY2xlX2hvbGRlciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvaW5fcGFydGljbGVfaG9sZGVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfZ29sZF9jb2luX2hvbGRlciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImdvbGRfY29pbl9ob2xkZXJcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX3NsaXZlcl9jb2luX2hvbGRlciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNsaXZlcl9jb2luX2hvbGRlclwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlX2NvaW5fbGV2ZWxfaG9sZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29pbl9sZXZlbF9ob2xkZXJcIik7XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWxfZ29sZCA9IHRoaXMubm9kZV9nb2xkX2NvaW5faG9sZGVyLmdldENoaWxkQnlOYW1lKFwidHh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9zbGl2ZXIgPSB0aGlzLm5vZGVfc2xpdmVyX2NvaW5faG9sZGVyLmdldENoaWxkQnlOYW1lKFwidHh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuX2dldCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9nZXRcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX2dldF9ub3JtYWwgPSB0aGlzLmJ0bl9nZXQuZ2V0Q2hpbGRCeU5hbWUoXCJub3JtYWxcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX2dldF9hY3RpdmUgPSB0aGlzLmJ0bl9nZXQuZ2V0Q2hpbGRCeU5hbWUoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuc3BpbmVfcm9hZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvYWRcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICB0aGlzLnNwaW5lX3BldCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBldFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIHRoaXMuc3BpbmVfcGFydG5lciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBhcnRuZXJcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICB0aGlzLnNwaW5lX2NvaW4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb2luXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcblxyXG4gICAgfVxyXG5cclxufSJdfQ==