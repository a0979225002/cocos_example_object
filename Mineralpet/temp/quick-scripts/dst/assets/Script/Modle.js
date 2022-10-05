
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Modle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b88c1wV2tNHJHSoAKkDKEG', 'Modle');
// Script/Modle.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DrawBoardBuilder_1 = require("./drawBoard/DrawBoardBuilder");
/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2022-09-15 下午 02:46
 * @Version 1.0
 */
var ChequeModel = /** @class */ (function () {
    function ChequeModel() {
    }
    /**
     * 創建畫板
     * @param {cc.Node} drawBoardNode - 要成為話版的物件(需規範該物件寬高,它將成為該畫板大小)
     * @param {cc.Color} color - 畫圖的顏色
     * @param {number} lineWidth - 畫圖的線寬
     * @private
     */
    ChequeModel.prototype.initDrawBoardData = function (drawBoardNode, color, lineWidth) {
        if (this.drawBoard)
            return cc.error("當前已經有存活的畫布,無法再次創建");
        this.drawBoard = new DrawBoardBuilder_1.default()
            .setColor(color)
            .setLineCircleEnd(true)
            .setLineWidth(lineWidth)
            .setBoardSize(drawBoardNode.width, drawBoardNode.height)
            .build(drawBoardNode);
    };
    ChequeModel.prototype.touchStartAction = function (position) {
        // cc.log(position.x,position.y)
        this.drawBoard.moveTo(position);
    };
    ChequeModel.prototype.touchMoveToAction = function (position) {
        cc.log(position.x, position.y);
        this.drawBoard.lineTo(position);
        this.drawBoard.updateTexture();
    };
    return ChequeModel;
}());
exports.default = ChequeModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNb2RsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlFQUE0RDtBQUU1RDs7Ozs7R0FLRztBQUNIO0lBQUE7SUFnQ0EsQ0FBQztJQTVCRzs7Ozs7O09BTUc7SUFDSSx1Q0FBaUIsR0FBeEIsVUFBeUIsYUFBc0IsRUFBRSxLQUFlLEVBQUUsU0FBaUI7UUFDL0UsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSwwQkFBZ0IsRUFBRTthQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO2FBQ2YsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQ3RCLFlBQVksQ0FBQyxTQUFTLENBQUM7YUFDdkIsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQzthQUN2RCxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUdELHNDQUFnQixHQUFoQixVQUFpQixRQUFpQjtRQUM5QixnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHVDQUFpQixHQUFqQixVQUFrQixRQUFpQjtRQUMvQixFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FoQ0EsQUFnQ0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEcmF3Qm9yZCBmcm9tIFwiLi9kcmF3Qm9hcmQvRHJhd0JvYXJkXCI7XHJcbmltcG9ydCBEcmF3Qm9hcmRCdWlsZGVyIGZyb20gXCIuL2RyYXdCb2FyZC9EcmF3Qm9hcmRCdWlsZGVyXCI7XHJcblxyXG4vKipcclxuICogQEF1dGhvciDola3nq4vlk4FcclxuICogQERlc2NyaXB0aW9uIFRPRE9cclxuICogQERhdGUgMjAyMi0wOS0xNSDkuIvljYggMDI6NDZcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVxdWVNb2RlbCB7XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3Qm9hcmQ6IERyYXdCb3JkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Ym15bu655Wr5p2/XHJcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGRyYXdCb2FyZE5vZGUgLSDopoHmiJDngrroqbHniYjnmoTnianku7Yo6ZyA6KaP56+E6Kmy54mp5Lu25a+s6auYLOWug+Wwh+aIkOeCuuipsueVq+adv+Wkp+WwjylcclxuICAgICAqIEBwYXJhbSB7Y2MuQ29sb3J9IGNvbG9yIC0g55Wr5ZyW55qE6aGP6ImyXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGluZVdpZHRoIC0g55Wr5ZyW55qE57ea5a+sXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdERyYXdCb2FyZERhdGEoZHJhd0JvYXJkTm9kZTogY2MuTm9kZSwgY29sb3I6IGNjLkNvbG9yLCBsaW5lV2lkdGg6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmRyYXdCb2FyZCkgcmV0dXJuIGNjLmVycm9yKFwi55W25YmN5bey57aT5pyJ5a2Y5rS755qE55Wr5biDLOeEoeazleWGjeasoeWJteW7ulwiKTtcclxuICAgICAgICB0aGlzLmRyYXdCb2FyZCA9IG5ldyBEcmF3Qm9hcmRCdWlsZGVyKClcclxuICAgICAgICAgICAgLnNldENvbG9yKGNvbG9yKVxyXG4gICAgICAgICAgICAuc2V0TGluZUNpcmNsZUVuZCh0cnVlKVxyXG4gICAgICAgICAgICAuc2V0TGluZVdpZHRoKGxpbmVXaWR0aClcclxuICAgICAgICAgICAgLnNldEJvYXJkU2l6ZShkcmF3Qm9hcmROb2RlLndpZHRoLCBkcmF3Qm9hcmROb2RlLmhlaWdodClcclxuICAgICAgICAgICAgLmJ1aWxkKGRyYXdCb2FyZE5vZGUpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRvdWNoU3RhcnRBY3Rpb24ocG9zaXRpb246IGNjLlZlYzIpIHtcclxuICAgICAgICAvLyBjYy5sb2cocG9zaXRpb24ueCxwb3NpdGlvbi55KVxyXG4gICAgICAgIHRoaXMuZHJhd0JvYXJkLm1vdmVUbyhwb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hNb3ZlVG9BY3Rpb24ocG9zaXRpb246IGNjLlZlYzIpIHtcclxuICAgICAgICBjYy5sb2cocG9zaXRpb24ueCwgcG9zaXRpb24ueSlcclxuICAgICAgICB0aGlzLmRyYXdCb2FyZC5saW5lVG8ocG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMuZHJhd0JvYXJkLnVwZGF0ZVRleHR1cmUoKTtcclxuICAgIH1cclxufSJdfQ==