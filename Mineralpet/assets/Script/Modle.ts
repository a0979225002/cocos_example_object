import DrawBord from "./drawBoard/DrawBoard";
import DrawBoardBuilder from "./drawBoard/DrawBoardBuilder";

/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2022-09-15 下午 02:46
 * @Version 1.0
 */
export default class ChequeModel {

    private drawBoard: DrawBord;

    /**
     * 創建畫板
     * @param {cc.Node} drawBoardNode - 要成為話版的物件(需規範該物件寬高,它將成為該畫板大小)
     * @param {cc.Color} color - 畫圖的顏色
     * @param {number} lineWidth - 畫圖的線寬
     * @private
     */
    public initDrawBoardData(drawBoardNode: cc.Node, color: cc.Color, lineWidth: number) {
        if (this.drawBoard) return cc.error("當前已經有存活的畫布,無法再次創建");
        this.drawBoard = new DrawBoardBuilder()
            .setColor(color)
            .setLineCircleEnd(true)
            .setLineWidth(lineWidth)
            .setBoardSize(drawBoardNode.width, drawBoardNode.height)
            .build(drawBoardNode)
    }


    touchStartAction(position: cc.Vec2) {
        // cc.log(position.x,position.y)
        this.drawBoard.moveTo(position);
    }

    touchMoveToAction(position: cc.Vec2) {
        cc.log(position.x, position.y)
        this.drawBoard.lineTo(position);
        this.drawBoard.updateTexture();
    }
}