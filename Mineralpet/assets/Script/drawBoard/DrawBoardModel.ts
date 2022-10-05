import IColorCount from "./IColorCount";
import IDrawBordInitializeData from "./IDrawBordInitializeData";
import { IVec2 } from "./IVec2";

/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2022-08-09 下午 03:46
 * @Version 1.0
 */
export default class DrawBoardModel {

    /**
     * 當前綁定的畫板
     * @type {cc.Node}
     * @private
     */
    private _board: cc.Node;

    /**
     * 繪圖板寬度
     * @type {number}
     * @private
     */
    private _width: number;

    /**
     * 繪圖板高度
     * @type {number}
     * @private
     */
    private _height: number;

    /**
     * 動態創建的圖片對象,再會版中繪製的圖案數據,將應用到這個貼圖中
     * @type {cc.Texture2D}
     * @protected
     */
    private _texture: cc.Texture2D;

    /**
     * 紀錄每個像素點
     * @type {Array<Array<number>>}
     * @private
     */
    private _pointColor: Array<Array<number>>;

    /**
     * 紀錄每個像素點能否繪製,false表示不能繪製,true表示能繪製
     * @type {Array<Array<boolean>>}
     * @private
     */
    private _maskPoint: Array<Array<boolean>>;

    /**
     * 儲存像素用內存區
     * @type {ArrayBuffer}
     * @private
     */
    private _pixelBuffer: ArrayBuffer

    /**
     * 顏色分量數組,提供渲染使用
     * @type {Uint8Array}
     * @private
     */
    private _pixelColor: Uint8Array;

    /**
     * 紀錄各種顏色像素數量
     * @type {IColorCount}
     * @private
     */
    private _colorCount: IColorCount;

    /**
     * 紀錄最近一次的像素顏色,繪製時未指定顏色時,將使用該值
     * @type {number}
     * @private
     */
    private _recentColor: number;

    /**
     * 臨時儲存的顏色值
     * @type {number}
     * @private
     */
    private _temporaryColor: number;

    /**
     * 臨時儲存的顏色值 R
     * @type {number}
     * @private
     */
    private temporaryR: number;

    /**
     * 臨時儲存的顏色值 G
     * @type {number}
     * @private
     */
    private temporaryG: number;

    /**
     * 臨時儲存的顏色值 B
     * @type {number}
     * @private
     */
    private temporaryB: number;

    /**
     * 臨時儲存的顏色值 A
     * @type {number}
     * @private
     */
    private temporaryA: number;

    /**
     * 上一次繪製的直線的終點
     * @type {MyVec2}
     * @private
     */
    private _previousLineEndPos: IVec2;
    private _previousLineEndPosT: IVec2;
    private _previousLineEndPosB: IVec2;

    /**
     * 上一次绘制的直线的端点样式
     * @type {boolean}
     * @private
     */
    private _previousLineCircleEnd: boolean;

    /**
     * 上一次繪製的直線的寬度
     * @type {number}
     * @private
     */
    private _previousLineWidth: number;


    /**
     * 畫布資料
     * @param {IDrawBordInitializeData} drawBordInitializeData - 初始資料
     */
    constructor(drawBordInitializeData: IDrawBordInitializeData) {
        this.setInitData(drawBordInitializeData);
        this.initParameter(drawBordInitializeData);
    }

    /**
     * 賦予初始化數據
     * @param {IDrawBordInitializeData} drawBordInitializeData
     */
    private setInitData(drawBordInitializeData: IDrawBordInitializeData) {
        this._board = drawBordInitializeData.board;
        this._width = Math.round(drawBordInitializeData.width);                           //繪圖板寬度
        this._height = Math.round(drawBordInitializeData.height);                         //繪圖板高度
        this._texture = drawBordInitializeData.texture;                                     //動態創建的圖片對象,再會版中繪製的圖案數據,將應用到這個貼圖中
        setTimeout(() => {
            console.log(this._texture);

        }, 1000);
        this._previousLineWidth = drawBordInitializeData.previousLineWidth;                 //上一次繪製的直線的寬度
        this._previousLineCircleEnd = drawBordInitializeData.previousLineCircleEnd;         //上一次绘制的直线的端点样式
        this._pointColor = new Array<Array<number>>();                                      //初始像素點
        this._maskPoint = new Array<Array<boolean>>();                                      //紀錄每個像素點能否繪製,false表示不能繪製,true表示能繪製
    }

    /**
     * 初始化參數
     */
    private initParameter(drawBordInitializeData?: IDrawBordInitializeData) {
        this.initPointColor();
        this.initMaskPoint();
        this.initPixelColor();
        this.initLineData();
        this.setColor(drawBordInitializeData.color);
    }

    /**
     * 將世界座標轉換為該物件座標
     * @param {cc.Vec2} position
     * @returns {cc.Vec2}
     */
    public transitionPosition(position: cc.Vec2) {
        const board: cc.Node = this._board;
        const loc: cc.Vec2 = board.convertToNodeSpaceAR(position);
        loc.x += this._width / 2;
        loc.y += this._height / 2;
        return loc;
    }

    /**
     * 初始化像素點
     * @private
     */
    private initPointColor() {
        //初始化所有像素位置
        for (let x = 0; x < this._width; ++x) {
            if (!this._pointColor[x]) {
                this._pointColor[x] = [];
            }
            for (let y = 0; y < this._height; ++y) {
                this._pointColor[x][y] = 0;
            }
        }
        this._colorCount = {};
        this._colorCount[0] = this._width * this._height;
    }

    /**
     * 初始化遮罩區
     * @private
     */
    private initMaskPoint() {
        //初始化可繪製的範圍
        for (let x = 0; x < this._width; x++) {
            if (!this._maskPoint[x]) {
                this._maskPoint[x] = [];
            }
            for (let y = 0; y < this._height; ++y) {
                this._maskPoint[x][y] = true;
            }
        }
    }

    /**
     * 初始化像素顏色
     * @private
     */
    private initPixelColor() {
        this._pixelBuffer = new ArrayBuffer(this.width * this.height * 4);
        this._pixelColor = new Uint8Array(this._pixelBuffer);
        this.pixelColor.fill(0);
    }

    /**
     * 初始當前繪製的線條
     * @private
     */
    private initLineData() {
        this._previousLineEndPos = new MyVec2();
        this._previousLineEndPosT = new MyVec2();
        this._previousLineEndPosB = new MyVec2();
        this._previousLineCircleEnd = true;
    }

    /**
     * 清空數據
     */
    public reset() {
        this.resetPointColor();
        this.resetMaskPoint();
        this.resetPixelColor();
    }

    /**
     * 重製當前紀錄的點數據
     * @private
     */
    private resetPointColor() {

        for (let x = this._width - 1; x >= 0; --x) {
            for (let y = this._height - 1; y >= 0; --y) {
                this._pointColor[x][y] = 0;
            }
        }
        for (let key in this._colorCount) {
            this._colorCount[key] = 0;
        }
    }

    /**
     * 重製當前無法繪畫的點位置
     * @private
     */
    private resetMaskPoint() {
        for (let x = this._width - 1; x >= 0; --x) {
            for (let y = this._height - 1; y >= 0; --y) {
                this._maskPoint[x][y] = true;
            }
        }
    }

    /**
     * 重製當前所有點位置的顏色
     * @private
     */
    private resetPixelColor() {
        this._pixelColor.fill(0);
    }

    /**
     * 設置畫板使用的顏色
     * @param {cc.Color} color
     */
    public setColor(color: cc.Color) {
        this._recentColor = this.convertToNumber(color);
        const hexColor = this.convertToNumber(color);
        if (!this._colorCount[hexColor]) {
            this._colorCount[hexColor] = 0;
        }
        this._temporaryColor = this._recentColor;
        this.temporaryR = color.r;
        this.temporaryG = color.g;
        this.temporaryB = color.b;
        this.temporaryA = color.a;

    }


    /**
     * 將RGBA顏色分量轉換為一個數值表示的顏色，顏色分量為0~255之間的值
     * @param {cc.Color} color
     * @returns {number}
     * @private
     */
    private convertToNumber(color: cc.Color): number {
        //顏色值將用於數組索引，不能為負數，故紅色分量為奇數時將減1變為偶數
        return ((color.r & 0xfe) << 23) | (color.g << 16) | (color.b << 8) | color.a;
    }

    /**
     * 創建自訂義 v2 數據
     * @param {number} x - x軸位置 (默認 = 0)
     * @param {number} y - y軸位置 (默認 = 0)
     * @returns {IVec2}
     */
    buildMyVec2(x?: number, y?: number): IVec2 {
        return new MyVec2(x, y);
    }

    /**
     * 繪製任意矩形
     * @private
     */
    public drawTriangle(positionList: IVec2[]) {
        positionList.sort((a, b) => {
            return a.x - b.x;
        });
        let p1 = positionList[0];
        let p2 = positionList[1];
        let p3 = positionList[2];
        if (p1.x == p2.x) {
            if (p1.x == p3.x) return;
            if (p1.y < p2.y) {
                p1 = positionList[1];
                p2 = positionList[0];
            }
            this.drawVerticalTriangle(p1, p2, p3);
            return;
        }
        let k = (p3.y - p1.y) / (p3.x - p1.x);
        let p4 = new MyVec2(p2.x, Math.round(p1.y + (p2.x - p1.x) * k));
        if (p4.y == p2.y) return;
        if (p4.y < p2.y) {
            this.drawVerticalTriangle(p2, p4, p1);
            this.drawVerticalTriangle(p2, p4, p3);
        } else {
            this.drawVerticalTriangle(p4, p2, p1);
            this.drawVerticalTriangle(p4, p2, p3);
        }
    }

    /**
     * 繪製一條邊與Y軸平行的三角形
     * @param p1    三角形垂直邊的 上 頂點坐標
     * @param p2    三角形垂直邊的 下 頂點坐標
     * @param p3    三角形 左側或右側 頂點坐標
     */
    public drawVerticalTriangle(p1: IVec2, p2: IVec2, p3: IVec2) {
        if (p3.x == p1.x) return;
        let k1 = (p3.y - p1.y) / (p3.x - p1.x);
        let k2 = (p3.y - p2.y) / (p3.x - p2.x);
        let maxX = p3.x, minX = p1.x;
        if (maxX < minX) {
            maxX = p1.x;
            minX = p3.x;
        }
        minX = this.minX(minX);
        maxX = this.maxX(maxX);
        for (let x = minX; x <= maxX; ++x) {
            let maxY = this.clampY(Math.round(p1.y + (x - p1.x) * k1));
            let minY = this.clampY(Math.round(p2.y + (x - p2.x) * k2));
            this.drawColPixel(minY, maxY, x);
        }
    }

    /**
     * 連續繪製一列的像素點
     * @param {number} startY    起點Y坐標
     * @param {number} endY      終點Y坐標
     * @param {number} x        X坐標
     */
    private drawColPixel(startY: number, endY: number, x: number) {
        let index = (startY * this.width + x) * 4;
        for (let y = startY; y <= endY; ++y) {
            this.updateNowDrawColorData(index, x, y);
            index += this.width * 4;
        }
    }

    /**
     * 更新當前繪製的數據
     * @param {number} index - 當前要改變的像素分量
     * @param {number} x - 像素 X 軸位置
     * @param {number} y - 像素 Y 軸位置
     * @private
     */
    private updateNowDrawColorData(index: number, x: number, y: number) {
        if (this.maskPoint[x][y] != false && this.pointColor[x][y] != this._temporaryColor) {
            this.pixelColor[index] = this.temporaryR;
            this.pixelColor[index + 1] = this.temporaryG;
            this.pixelColor[index + 2] = this.temporaryB;
            this.pixelColor[index + 3] = this.temporaryA;
            let c = this.pointColor[x][y];
            this.colorCount[c]--;
            this.colorCount[this._temporaryColor]++;
            this.pointColor[x][y] = this._temporaryColor;
        }
    }

    /**
     * 繪製圓形
     * @param {number} x - X軸位置
     * @param {number} y - Y軸位置
     * @param {number} radius - 半徑
     * @private
     */
    public drawCircle(x: number, y: number, radius: number) {
        radius = Math.round(radius);
        if (radius == 0) return;
        //三角形的斜邊的平方
        let dis = radius * radius;
        let minY = this.clampY(y - radius);
        let maxY = this.clampY(y + radius);
        for (let j = minY; j <= maxY; ++j) {
            let r = j - y;
            r = Math.round(Math.sqrt(dis - r * r));
            let minX = this.clampX(x - r);
            let maxX = this.clampX(x + r);
            this.drawRowPixel(minX, maxX, j);
        }
    }

    /**
     * 连续绘制一行中的像素点
     * @param startX    起点X坐标
     * @param endX      终点X坐标
     * @param y         Y坐标
     */
    private drawRowPixel(startX: number, endX: number, y: number) {
        let index = (y * this.width + startX) * 4;
        for (let x = startX; x <= endX; ++x) {
            this.updateNowDrawColorData(index, x, y);
            index += 4;
        }
    }

    /**
     * 繪製直線，不包含線段端點樣式
     * @param {IVec2} p1 - 線段起點坐標
     * @param {IVec2} p2 - 線段終點坐標
     * @param {number} width - 線段寬度
     * @param {number} offsetX - X軸偏移位置
     * @param {number} offsetY - Y軸偏移位置
     * @param {number} slopeRate - 斜率
     * @private
     */
    public drawLine(p1: IVec2, p2: IVec2, width: number, offsetX: number, offsetY: number, slopeRate: number) {
        if (p1.y == p2.y) {
            //水平直線
            let x = p1.x < p2.x ? p1.x : p2.x;
            this.drawRect(new MyVec2(x, Math.round(p1.y - width * 0.5)), Math.abs(p1.x - p2.x), width);
        } else if (p1.x == p2.x) {
            //垂直直線
            let y = p1.y < p2.y ? p1.y : p2.y;
            this.drawRect(new MyVec2(Math.round(p1.x - width * 0.5), y), width, Math.abs(p1.y - p2.y));
        } else {
            //傾斜直線
            let inverseK = (p1.x - p2.x) / (p1.y - p2.y);
            let p1t = new MyVec2(p1.x - offsetX, p1.y + offsetY);
            let p1b = new MyVec2(p1.x + offsetX, p1.y - offsetY);
            let p2t = new MyVec2(p2.x - offsetX, p2.y + offsetY);
            let p2b = new MyVec2(p2.x + offsetX, p2.y - offsetY);
            let p1c = new MyVec2();
            let p2c = new MyVec2();
            let height = Math.round(width * slopeRate);
            if (p2.y > p1.y) {
                if (p1b.x < p2t.x) {
                    p1c.x = p1b.x;
                    p1c.y = p1b.y + height;
                    p2c.x = p2t.x;
                    p2c.y = p2t.y - height;
                    this.drawVerticalTriangle(p1c, p1b, p1t);
                    this.drawParallelogram(p1b, p2c, height);
                    this.drawVerticalTriangle(p2t, p2c, p2b);
                } else {
                    p1c.x = p1b.x;
                    p1c.y = Math.round(p2t.y - (p1c.x - p2t.x) * inverseK);
                    p2c.x = p2t.x;
                    p2c.y = Math.round(p1b.y + (p1b.x - p2c.x) * inverseK);
                    this.drawVerticalTriangle(p2t, p2c, p1t);
                    this.drawParallelogram(p2c, p1b, p2t.y - p2c.y);
                    this.drawVerticalTriangle(p1c, p1b, p2b);
                }
            } else {
                if (p1t.x < p2b.x) {
                    p1c.x = p1t.x;
                    p1c.y = p1t.y - height;
                    p2c.x = p2b.x;
                    p2c.y = p2b.y + height;
                    this.drawVerticalTriangle(p1t, p1c, p1b);
                    this.drawParallelogram(p1c, p2b, height);
                    this.drawVerticalTriangle(p2c, p2b, p2t);
                } else {
                    p1c.x = p1t.x;
                    p1c.y = Math.round(p2b.y - (p1c.x - p2b.x) * inverseK);
                    p2c.x = p2b.x;
                    p2c.y = Math.round(p1t.y + (p1t.x - p2c.x) * inverseK);
                    this.drawVerticalTriangle(p2c, p2b, p1b);
                    this.drawParallelogram(p2b, p1c, p1t.y - p1c.y);
                    this.drawVerticalTriangle(p1t, p1c, p2t);
                }
            }

        }
    }

    /**
     * 繪製矩形
     * @param {IVec2} p - 矩形左下頂點的坐標
     * @param {number} w - 矩形寬度
     * @param {number} h - 矩形高度
     * @private
     */
    private drawRect(p: IVec2, w: number, h: number) {
        let minX = this.clampX(p.x);
        let maxX = this.clampX(p.x + w);
        let minY = this.clampY(p.y);
        let maxY = this.clampY(p.y + h);
        for (let y = minY; y <= maxY; ++y) {
            this.drawRowPixel(minX, maxX, y);
        }
    }

    /**
     * 繪製平行四邊形，平行四邊形的左右兩邊與Y軸平行
     * @param p1        左下頂點坐標
     * @param p2        右下頂點坐標
     * @param height    垂直邊高度
     */
    private drawParallelogram(p1: IVec2, p2: IVec2, height: number) {
        if (p1.x == p2.x) return;
        let k = (p2.y - p1.y) / (p2.x - p1.x);
        let minX = this.minX(p1.x);
        let maxX = this.maxX(p2.x);
        for (let x = minX; x <= maxX; ++x) {
            let minY = p1.y + Math.round((x - p1.x) * k);
            let maxY = minY + height;
            minY = this._minY(minY);
            maxY = this._maxY(maxY);
            this.drawColPixel(minY, maxY, x);
        }
    }

    //內部繪製方法
    private minX(x: number): number {
        return x >= 0 ? x : 0;
    }

    private maxX(x: number): number {
        return x < this._width ? x : this._width - 1;
    }

    private _minY(y: number): number {
        return y >= 0 ? y : 0;
    }

    private _maxY(y: number): number {
        return y < this._height ? y : this._height - 1;
    }

    private clampX(x: number): number {
        if (x < 0) return 0;
        if (x >= this._width) return this._width - 1;
        return x;
    }

    private clampY(y: number): number {
        if (y < 0) return 0;
        if (y >= this._height) return this._height - 1;
        return y;
    }


    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    get texture(): cc.Texture2D {
        return this._texture;
    }

    get pointColor(): Array<Array<number>> {
        return this._pointColor;
    }

    get maskPoint(): Array<Array<boolean>> {
        return this._maskPoint;
    }

    get pixelBuffer(): ArrayBuffer {
        return this._pixelBuffer;
    }

    get pixelColor(): Uint8Array {
        return this._pixelColor;
    }

    get colorCount(): IColorCount {
        return this._colorCount;
    }

    get recentColor(): number {
        return this._recentColor;
    }

    get temporaryColor(): number {
        return this._temporaryColor;
    }

    get previousLineEndPos(): MyVec2 {
        return this._previousLineEndPos;
    }

    get previousLineEndPosT(): MyVec2 {
        return this._previousLineEndPosT;
    }

    get previousLineEndPosB(): MyVec2 {
        return this._previousLineEndPosB;
    }

    get previousLineCircleEnd(): boolean {
        return this._previousLineCircleEnd;
    }

    get previousLineWidth(): number {
        return this._previousLineWidth;
    }

    get board(): cc.Node {
        return this._board;
    }
}

/**
 * 自訂義 Vec2
 */
class MyVec2 implements IVec2 {
    public x: number;
    public y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    public set(p: number | MyVec2, y?: number) {
        if (typeof p === "number") {
            this.x = p;
            this.y = y;
        } else {
            this.x = p.x;
            this.y = p.y;
        }
    }
}
