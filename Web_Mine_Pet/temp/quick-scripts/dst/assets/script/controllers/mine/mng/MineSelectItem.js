
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/mng/MineSelectItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53216EY6MZCD467i9KzmUsg', 'MineSelectItem');
// script/controllers/mine/mng/MineSelectItem.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MineSelectItem = void 0;
var GameCenter_1 = require("../../../data/GameCenter");
var MineSelectItem = /** @class */ (function () {
    function MineSelectItem(node, type, itemID, itemLevel, config) {
        if (type === void 0) { type = 0; }
        if (itemID === void 0) { itemID = 0; }
        if (itemLevel === void 0) { itemLevel = 0; }
        this.id = 0;
        this.skinID = 0;
        this.level = 0;
        this.size = {
            w: 666,
            h: 600
        };
        this.floorName = "empty";
        this.node = node;
        this.node_spine_box = this.node.getChildByName("spine");
        this.spine_body = this.node_spine_box.getChildByName("body").getComponent(sp.Skeleton);
        this.spine_floor = this.node_spine_box.getChildByName("floor").getComponent(sp.Skeleton);
        this.id = itemID;
        this.type = type;
        this.level = itemLevel;
        if (config) {
            if (config.floorName) {
                this.floorName = config.floorName;
            }
            if (config.bodyAssets) {
                this.setBodySpineAssets(config.bodyAssets);
            }
        }
        this.init();
    }
    MineSelectItem.prototype.init = function () {
        this.setSkin();
        this.play("IDLE");
    };
    MineSelectItem.prototype.play = function (aniName) {
        this.bodyPlay(aniName);
        this.floorPlay(aniName);
    };
    MineSelectItem.prototype.bodyPlay = function (aniName) {
        if (aniName == "IDLE") {
            this.spine_body.setAnimation(0, "select_idle", true);
        }
        else if (aniName == "ACTION") {
            this.spine_body.setAnimation(0, "select_act", true);
        }
    };
    MineSelectItem.prototype.floorPlay = function (aniName) {
        if (!this.spine_floor) {
            return;
        }
        if (aniName == "IDLE") {
            this.spine_floor.setAnimation(0, "" + this.floorName, true);
        }
        else if (aniName == "ACTION") {
            var actionAniName = this.floorName == "empty" ? this.floorName + "_act" : this.floorName;
            this.spine_floor.setAnimation(0, actionAniName, true);
        }
    };
    MineSelectItem.prototype.setSkin = function (id) {
        if (this.type > 0) {
            return;
        }
        this.spine_body.setSkin(GameCenter_1.default.game.getPetBodySkinName(id));
    };
    MineSelectItem.prototype.upgradeSuccess = function (id, level) {
        this.setLevel(id, level);
        var spine = this.spine_body;
        spine.setAnimation(0, "lv_success", false);
        spine.addAnimation(0, "idle", true);
    };
    MineSelectItem.prototype.upgradeFail = function () {
        var spine = this.spine_body;
        spine.setAnimation(0, "lv_fail", false);
        spine.addAnimation(0, "idle", true);
    };
    MineSelectItem.prototype.setLevel = function (id, val) {
        this.level = val;
        this.setSkin(id);
    };
    MineSelectItem.prototype.setSpineNodePosition = function (pos) {
        this.node_spine_box.setPosition(pos);
    };
    MineSelectItem.prototype.setBodySpineAssets = function (assets) {
        this.spine_body.skeletonData = assets;
    };
    return MineSelectItem;
}());
exports.MineSelectItem = MineSelectItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcbW5nXFxNaW5lU2VsZWN0SXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFFbEQ7SUFtQkksd0JBQVksSUFBYSxFQUFFLElBQWdCLEVBQUUsTUFBa0IsRUFBRSxTQUFxQixFQUFFLE1BQU87UUFBcEUscUJBQUEsRUFBQSxRQUFnQjtRQUFFLHVCQUFBLEVBQUEsVUFBa0I7UUFBRSwwQkFBQSxFQUFBLGFBQXFCO1FBWHRGLE9BQUUsR0FBVyxDQUFDLENBQUM7UUFFZixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsU0FBSSxHQUFXO1lBQ1gsQ0FBQyxFQUFHLEdBQUc7WUFDUCxDQUFDLEVBQUUsR0FBRztTQUNULENBQUM7UUFFRixjQUFTLEdBQVcsT0FBTyxDQUFDO1FBSXhCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV6RixJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUV2QixJQUFJLE1BQU0sRUFBRTtZQUVSLElBQUksTUFB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Q0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCw2Q0FBb0IsR0FBcEIsVUFBcUIsR0FBWTtRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsMkNBQWtCLEdBQWxCLFVBQW1CLE1BQU07UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO0lBQzFDLENBQUM7SUFFTCxxQkFBQztBQUFELENBakhBLEFBaUhDLElBQUE7QUFqSFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUNlbnRlciBmcm9tIFwiLi4vLi4vLi4vZGF0YS9HYW1lQ2VudGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWluZVNlbGVjdEl0ZW0ge1xyXG5cclxuICAgIG5vZGU6IGNjLk5vZGU7XHJcbiAgICBub2RlX3NwaW5lX2JveDogY2MuTm9kZTtcclxuXHJcbiAgICBzcGluZV9ib2R5OiBzcC5Ta2VsZXRvbjtcclxuICAgIHNwaW5lX2Zsb29yOiBzcC5Ta2VsZXRvbjtcclxuXHJcbiAgICBpZDogbnVtYmVyID0gMDtcclxuICAgIHR5cGU6IG51bWJlcjtcclxuICAgIHNraW5JRDogbnVtYmVyID0gMDtcclxuICAgIGxldmVsOiBudW1iZXIgPSAwO1xyXG4gICAgc2l6ZTogb2JqZWN0ID0ge1xyXG4gICAgICAgIHc6ICA2NjYsXHJcbiAgICAgICAgaDogNjAwXHJcbiAgICB9O1xyXG5cclxuICAgIGZsb29yTmFtZTogc3RyaW5nID0gXCJlbXB0eVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IGNjLk5vZGUsIHR5cGU6IG51bWJlciA9IDAsIGl0ZW1JRDogbnVtYmVyID0gMCwgaXRlbUxldmVsOiBudW1iZXIgPSAwLCBjb25maWc/KSB7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy5ub2RlX3NwaW5lX2JveCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lXCIpO1xyXG4gICAgICAgIHRoaXMuc3BpbmVfYm9keSA9IHRoaXMubm9kZV9zcGluZV9ib3guZ2V0Q2hpbGRCeU5hbWUoXCJib2R5XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgdGhpcy5zcGluZV9mbG9vciA9IHRoaXMubm9kZV9zcGluZV9ib3guZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG5cclxuICAgICAgICB0aGlzLmlkID0gaXRlbUlEO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IGl0ZW1MZXZlbDtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZykge1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5mbG9vck5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxvb3JOYW1lID0gY29uZmlnLmZsb29yTmFtZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5ib2R5QXNzZXRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJvZHlTcGluZUFzc2V0cyhjb25maWcuYm9keUFzc2V0cyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFNraW4oKTtcclxuICAgICAgICB0aGlzLnBsYXkoXCJJRExFXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwbGF5KGFuaU5hbWU6U3RyaW5nKSA6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYm9keVBsYXkoYW5pTmFtZSk7XHJcbiAgICAgICAgdGhpcy5mbG9vclBsYXkoYW5pTmFtZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGJvZHlQbGF5KGFuaU5hbWUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoYW5pTmFtZSA9PSBcIklETEVcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNwaW5lX2JvZHkuc2V0QW5pbWF0aW9uKDAsIGBzZWxlY3RfaWRsZWAsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYW5pTmFtZSA9PSBcIkFDVElPTlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BpbmVfYm9keS5zZXRBbmltYXRpb24oMCwgYHNlbGVjdF9hY3RgLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmxvb3JQbGF5KGFuaU5hbWUpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNwaW5lX2Zsb29yKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBpZiAoYW5pTmFtZSA9PSBcIklETEVcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNwaW5lX2Zsb29yLnNldEFuaW1hdGlvbigwLCBgJHt0aGlzLmZsb29yTmFtZX1gLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFuaU5hbWUgPT0gXCJBQ1RJT05cIikge1xyXG4gICAgICAgICAgICBsZXQgYWN0aW9uQW5pTmFtZSA9IHRoaXMuZmxvb3JOYW1lID09IFwiZW1wdHlcIiA/IGAke3RoaXMuZmxvb3JOYW1lfV9hY3RgIDogdGhpcy5mbG9vck5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BpbmVfZmxvb3Iuc2V0QW5pbWF0aW9uKDAsIGFjdGlvbkFuaU5hbWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2tpbihpZD8pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zcGluZV9ib2R5LnNldFNraW4oR2FtZUNlbnRlci5nYW1lLmdldFBldEJvZHlTa2luTmFtZShpZCkpO1xyXG5cclxuICAgIH1cclxuICAgIHVwZ3JhZGVTdWNjZXNzKGlkOiBudW1iZXIsIGxldmVsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldExldmVsKGlkLCBsZXZlbCk7XHJcbiAgICAgICAgbGV0IHNwaW5lID0gIHRoaXMuc3BpbmVfYm9keTtcclxuICAgICAgICBzcGluZS5zZXRBbmltYXRpb24oMCwgYGx2X3N1Y2Nlc3NgLCBmYWxzZSk7XHJcbiAgICAgICAgc3BpbmUuYWRkQW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlRmFpbCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc3BpbmUgPSAgdGhpcy5zcGluZV9ib2R5O1xyXG4gICAgICAgIHNwaW5lLnNldEFuaW1hdGlvbigwLCBgbHZfZmFpbGAsIGZhbHNlKTtcclxuICAgICAgICBzcGluZS5hZGRBbmltYXRpb24oMCwgYGlkbGVgLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHNldExldmVsKGlkLCB2YWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGluZU5vZGVQb3NpdGlvbihwb3M6IGNjLlZlYzIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGVfc3BpbmVfYm94LnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Qm9keVNwaW5lQXNzZXRzKGFzc2V0cyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3BpbmVfYm9keS5za2VsZXRvbkRhdGEgPSBhc3NldHM7XHJcbiAgICB9XHJcblxyXG59Il19