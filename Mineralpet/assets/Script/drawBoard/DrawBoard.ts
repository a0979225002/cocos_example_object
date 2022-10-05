import DrawBoardModel from "./DrawBoardModel";

/**
 * @Author 蕭立品
 * @Description 畫板
 * @Date 2022-08-09 上午 11:44
 * @Version 1.0
 */
export default class DrawBoard {

    private model: DrawBoardModel;

    /**
     * 創建畫板
     * @param {drawBordData} drawBordData - 初始化資料
     */
    constructor(drawBordData: DrawBoardModel) {
        this.model = drawBordData;
    }


    /**
     * 移動畫筆到指定的位置,使用 lineTo() 可以將該點與中點連成一條線
     * @param {cc.Vec2} position
     */
    public moveTo(position: cc.Vec2) {
        const loc = this.model.transitionPosition(position);
        const x = Math.round(loc.x);
        const y = Math.round(loc.y);
        this.model.previousLineEndPos.set(x, y);
        this.model.previousLineEndPosT.set(x, y);
        this.model.previousLineEndPosB.set(x, y);
    }


    /**
     * 繪製到指定坐標的直線，起點為上一次繪製的直線的終點，使用默認的顏色、寬度和線段端點樣式
     * @param {cc.Vec2} position
     */
    public lineTo(position: cc.Vec2) {
        const loc = this.model.transitionPosition(position);
        const x = Math.round(loc.x);
        const y = Math.round(loc.y);
        if (this.model.previousLineEndPos.x == x && this.model.previousLineEndPos.y == y) return;
        const width = this.model.previousLineWidth;
        const circleEnd = this.model.previousLineCircleEnd;
        let beforeX = this.model.previousLineEndPos.x;
        let beforeY = this.model.previousLineEndPos.y;
        let afterX = x;
        let afterY = y;
        if (beforeX > afterX) {
            //強制轉換,讓after 永遠大於 before
            beforeX = afterX;
            beforeY = afterY;
            afterX = this.model.previousLineEndPos.x;
            afterY = this.model.previousLineEndPos.y;
        }
        let offsetX = 0;
        let offsetY = 0;
        let rateK = 1;
        if (beforeX == afterX) {
            offsetX = Math.round(width * 0.5);
        } else if (beforeY == afterY) {
            offsetY = Math.round(width * 0.5);
        } else {
            let k = (afterY - beforeY) / (afterX - beforeX);
            rateK = Math.sqrt(k * k + 1);
            offsetY = width * 0.5 / rateK;
            offsetX = Math.round(offsetY * k);
            offsetY = Math.round(offsetY);
        }
        if (!circleEnd) {
            //如果當前繪製頂點無須圓角
            if (this.model.previousLineEndPos.x != this.model.previousLineEndPosT.x
                || this.model.previousLineEndPos.y != this.model.previousLineEndPosT.y) {
                let p1 = this.model.buildMyVec2(this.model.previousLineEndPos.x - offsetX, this.model.previousLineEndPos.y + offsetY);
                let p2 = this.model.buildMyVec2(this.model.previousLineEndPos.x + offsetX, this.model.previousLineEndPos.y - offsetY);
                this.model.drawTriangle([p1, p2, this.model.previousLineEndPosT]);
                this.model.drawTriangle([p1, p2, this.model.previousLineEndPosB]);
            }
        } else {
            this.model.drawCircle(beforeX, beforeY, width * 0.5);
            this.model.drawCircle(afterX, afterY, width * 0.5);
        }
        const p1 = this.model.buildMyVec2(beforeX, beforeY);
        const p2 = this.model.buildMyVec2(afterX, afterY);
        this.model.drawLine(p1, p2, width, offsetX, offsetY, rateK);

        this.model.previousLineEndPos.set(x, y);
        this.model.previousLineEndPosT.set(x - offsetX, y + offsetY);
        this.model.previousLineEndPosB.set(x + offsetX, y - offsetY);
    }

    /**
     * 獲取當前畫板中紀錄的每個像素位置顏色的數據
     * @returns {Uint8Array}
     */
    public getPixelColorData(): Uint8Array {
        return this.model.pixelColor;
    }

    /**
     * 將畫布上玩家繪製的筆跡響應到圖片中
     */
    public updateTexture(): void {
        const pixelColor = this.getPixelColorData();
        const texture = this.model.texture;
        console.log(this.model.texture);

        const opts = texture["_getOpts"]();
        opts.image = pixelColor;
        opts.images = [opts.image];
        texture.update(opts);
    }

    /**
     * 清空畫布
     */
    public empitDrawBord() {
        this.model.reset();
    }
}
