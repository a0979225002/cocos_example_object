
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/ActionTransition.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXEFjdGlvblRyYW5zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQTJEQSxDQUFDO0lBekRpQiwyQkFBVSxHQUF4QixVQUF5QixJQUFhLEVBQUUsUUFBd0IsRUFBRSxRQUFtQjtRQUE3Qyx5QkFBQSxFQUFBLGVBQXdCO1FBRTVELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRW5CLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUN0QixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixFQUFFLENBQUMsS0FBSyxDQUNKLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsRUFDNUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FDaEIsRUFDRCxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1IsSUFBSSxRQUFRO2dCQUFFLFFBQVEsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUNMLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFYSw0QkFBVyxHQUF6QixVQUEwQixJQUFhLEVBQUUsUUFBd0IsRUFBRSxRQUFtQjtRQUE3Qyx5QkFBQSxFQUFBLGVBQXdCO1FBRTdELElBQUksUUFBUSxFQUFFO1lBRVYsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFFaEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDdEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUN6QyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLFFBQVE7b0JBQUUsUUFBUSxFQUFFLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQ0wsQ0FBQyxDQUFDO1lBRUgsT0FBTztTQUVWO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFFeEIsQ0FBQztJQUVhLDBCQUFTLEdBQXZCLFVBQXdCLElBQWEsRUFBRSxRQUFtQjtRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQ3RCLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNwQixFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDakIsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNSLElBQUksUUFBUTtnQkFBRSxRQUFRLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FDTCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUwsdUJBQUM7QUFBRCxDQTNEQSxBQTJEQyxJQUFBO0FBM0RZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBY3Rpb25UcmFuc2l0aW9uIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhZ2VGYWRlSW4obm9kZTogY2MuTm9kZSwgYW5pU3RhdGU6IGJvb2xlYW4gPSB0cnVlLCBjYWxsQmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7XHJcblxyXG4gICAgICAgIG5vZGUuekluZGV4ID0gOTtcclxuICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICghYW5pU3RhdGUpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIG5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgbm9kZS5zZXRTY2FsZSgxLjIpO1xyXG4gICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSguMTYpLFxyXG4gICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjMsIDEpLmVhc2luZyhjYy5lYXNlQmFja0luT3V0KCkpLFxyXG4gICAgICAgICAgICAgICAgY2MuZmFkZUluKC4xKVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbEJhY2spIGNhbGxCYWNrKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFnZUZhZGVPdXQobm9kZTogY2MuTm9kZSwgYW5pU3RhdGU6IGJvb2xlYW4gPSB0cnVlLCBjYWxsQmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmIChhbmlTdGF0ZSkge1xyXG5cclxuICAgICAgICAgICAgbm9kZS56SW5kZXggPSAxO1xyXG5cclxuICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjMsIDApLmVhc2luZyhjYy5lYXNlQmFja0luKCkpLFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxCYWNrKSBjYWxsQmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBidG5Cb3VuY2Uobm9kZTogY2MuTm9kZSwgY2FsbEJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy5zY2FsZVRvKC4xMywgMS4xKSxcclxuICAgICAgICAgICAgY2Muc2NhbGVUbyguMSwgMSksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsQmFjaykgY2FsbEJhY2soKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbn0iXX0=