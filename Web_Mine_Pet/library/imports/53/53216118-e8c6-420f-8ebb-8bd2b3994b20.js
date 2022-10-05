"use strict";
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