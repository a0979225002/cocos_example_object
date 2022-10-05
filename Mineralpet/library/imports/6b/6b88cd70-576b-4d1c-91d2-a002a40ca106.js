"use strict";
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