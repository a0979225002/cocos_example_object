"use strict";
cc._RF.push(module, '65452SKn4BDMZY6E+o5EwfY', 'UIUpgradePanel');
// script/controllers/ui/UIUpgradePanel.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var GameCenter_1 = require("../../data/GameCenter");
var AssetsMng_1 = require("../../manager/AssetsMng");
var ViewZorder_1 = require("../../data/const/ViewZorder");
var UIBase_1 = require("./UIBase");
var UIUpgradePanel = /** @class */ (function (_super) {
    __extends(UIUpgradePanel, _super);
    function UIUpgradePanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIUpgradePanel.prototype.onUILoad = function () {
        this.black_bg = this.node.getChildByName("bg");
        this.spine = this.node.getChildByName("spine").getComponent(sp.Skeleton);
        this.light = this.node.getChildByName("light");
        this.node.active = false;
        this.init();
    };
    UIUpgradePanel.prototype.init = function () {
        this.node.zIndex = ViewZorder_1.ViewZorder.UI;
    };
    UIUpgradePanel.prototype.show = function (upgradeID) {
        this.setSpineData(upgradeID);
        this.node.active = true;
        this.light.active = false;
        this.black_bg.active = true;
        this.black_bg.opacity = 0;
        this.black_bg.stopAllActions();
        this.black_bg.runAction(cc.fadeTo(.15, 180));
        this.spine.node.active = true;
        this.spine.setAnimation(0, "lv_start", true);
    };
    UIUpgradePanel.prototype.hide = function (callback) {
        var _this = this;
        this.light.active = true;
        this.light.opacity = 0;
        this.light.stopAllActions();
        this.light.runAction(cc.sequence(cc.fadeIn(.15).easing(cc.easeSineIn()), cc.callFunc(function () {
            _this.spine.node.active = false;
            _this.black_bg.active = false;
            if (callback) {
                callback();
            }
        }), cc.delayTime(.1), cc.fadeOut(.2).easing(cc.easeSineOut()), cc.callFunc(function () {
            _this.node.active = false;
        })));
    };
    UIUpgradePanel.prototype.setSpineData = function (upgradeID) {
        var spineName = GameCenter_1.default.game.getPetBodyThemeName(upgradeID);
        this.spine.skeletonData = AssetsMng_1.default.getAssets(spineName + ".spine");
        this.setSkin(upgradeID);
    };
    UIUpgradePanel.prototype.setSkin = function (upgradeID) {
        this.spine.setSkin(GameCenter_1.default.game.getPetBodySkinName(upgradeID));
    };
    return UIUpgradePanel;
}(UIBase_1.default));
exports.default = UIUpgradePanel;

cc._RF.pop();