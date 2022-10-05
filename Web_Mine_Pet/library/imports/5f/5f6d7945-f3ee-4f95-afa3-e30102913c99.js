"use strict";
cc._RF.push(module, '5f6d7lF8+5Pla+j4wECkTyZ', 'ActionTransition');
// script/common/ActionTransition.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionTransition = void 0;
var ActionTransition = /** @class */ (function () {
    function ActionTransition() {
    }
    ActionTransition.pageFadeIn = function (node, aniState, callBack) {
        if (aniState === void 0) { aniState = true; }
        node.zIndex = 9;
        node.active = true;
        if (!aniState) {
            return;
        }
        node.opacity = 0;
        node.setScale(1.2);
        node.active = true;
        node.stopAllActions();
        node.runAction(cc.sequence(cc.delayTime(.16), cc.spawn(cc.scaleTo(.3, 1).easing(cc.easeBackInOut()), cc.fadeIn(.1)), cc.callFunc(function () {
            if (callBack)
                callBack();
        })));
    };
    ActionTransition.pageFadeOut = function (node, aniState, callBack) {
        if (aniState === void 0) { aniState = true; }
        if (aniState) {
            node.zIndex = 1;
            node.stopAllActions();
            node.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeBackIn()), cc.callFunc(function () {
                node.active = false;
                if (callBack)
                    callBack();
            })));
            return;
        }
        node.active = false;
    };
    ActionTransition.btnBounce = function (node, callBack) {
        node.runAction(cc.sequence(cc.scaleTo(.13, 1.1), cc.scaleTo(.1, 1), cc.callFunc(function () {
            if (callBack)
                callBack();
        })));
    };
    return ActionTransition;
}());
exports.ActionTransition = ActionTransition;

cc._RF.pop();