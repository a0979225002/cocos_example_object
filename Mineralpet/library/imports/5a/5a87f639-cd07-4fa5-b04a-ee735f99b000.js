"use strict";
cc._RF.push(module, '5a87fY5zQdPpbBK7nNfmbAA', 'DrawBoardModel');
// Script/drawBoard/DrawBoardModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2022-08-09 下午 03:46
 * @Version 1.0
 */
var DrawBoardModel = /** @class */ (function () {
    /**
     * 畫布資料
     * @param {IDrawBordInitializeData} drawBordInitializeData - 初始資料
     */
    function DrawBoardModel(drawBordInitializeData) {
        this.setInitData(drawBordInitializeData);
        this.initParameter(drawBordInitializeData);
    }
    /**
     * 賦予初始化數據
     * @param {IDrawBordInitializeData} drawBordInitializeData
     */
    DrawBoardModel.prototype.setInitData = function (drawBordInitializeData) {
        var _this = this;
        this._board = drawBordInitializeData.board;
        this._width = Math.round(drawBordInitializeData.width); //繪圖板寬度
        this._height = Math.round(drawBordInitializeData.height); //繪圖板高度
        this._texture = drawBordInitializeData.texture; //動態創建的圖片對象,再會版中繪製的圖案數據,將應用到這個貼圖中
        setTimeout(function () {
            console.log(_this._texture);
        }, 1000);
        this._previousLineWidth = drawBordInitializeData.previousLineWidth; //上一次繪製的直線的寬度
        this._previousLineCircleEnd = drawBordInitializeData.previousLineCircleEnd; //上一次绘制的直线的端点样式
        this._pointColor = new Array(); //初始像素點
        this._maskPoint = new Array(); //紀錄每個像素點能否繪製,false表示不能繪製,true表示能繪製
    };
    /**
     * 初始化參數
     */
    DrawBoardModel.prototype.initParameter = function (drawBordInitializeData) {
        this.initPointColor();
        this.initMaskPoint();
        this.initPixelColor();
        this.initLineData();
        this.setColor(drawBordInitializeData.color);
    };
    /**
     * 將世界座標轉換為該物件座標
     * @param {cc.Vec2} position
     * @returns {cc.Vec2}
     */
    DrawBoardModel.prototype.transitionPosition = function (position) {
        var board = this._board;
        var loc = board.convertToNodeSpaceAR(position);
        loc.x += this._width / 2;
        loc.y += this._height / 2;
        return loc;
    };
    /**
     * 初始化像素點
     * @private
     */
    DrawBoardModel.prototype.initPointColor = function () {
        //初始化所有像素位置
        for (var x = 0; x < this._width; ++x) {
            if (!this._pointColor[x]) {
                this._pointColor[x] = [];
            }
            for (var y = 0; y < this._height; ++y) {
                this._pointColor[x][y] = 0;
            }
        }
        this._colorCount = {};
        this._colorCount[0] = this._width * this._height;
    };
    /**
     * 初始化遮罩區
     * @private
     */
    DrawBoardModel.prototype.initMaskPoint = function () {
        //初始化可繪製的範圍
        for (var x = 0; x < this._width; x++) {
            if (!this._maskPoint[x]) {
                this._maskPoint[x] = [];
            }
            for (var y = 0; y < this._height; ++y) {
                this._maskPoint[x][y] = true;
            }
        }
    };
    /**
     * 初始化像素顏色
     * @private
     */
    DrawBoardModel.prototype.initPixelColor = function () {
        this._pixelBuffer = new ArrayBuffer(this.width * this.height * 4);
        this._pixelColor = new Uint8Array(this._pixelBuffer);
        this.pixelColor.fill(0);
    };
    /**
     * 初始當前繪製的線條
     * @private
     */
    DrawBoardModel.prototype.initLineData = function () {
        this._previousLineEndPos = new MyVec2();
        this._previousLineEndPosT = new MyVec2();
        this._previousLineEndPosB = new MyVec2();
        this._previousLineCircleEnd = true;
    };
    /**
     * 清空數據
     */
    DrawBoardModel.prototype.reset = function () {
        this.resetPointColor();
        this.resetMaskPoint();
        this.resetPixelColor();
    };
    /**
     * 重製當前紀錄的點數據
     * @private
     */
    DrawBoardModel.prototype.resetPointColor = function () {
        for (var x = this._width - 1; x >= 0; --x) {
            for (var y = this._height - 1; y >= 0; --y) {
                this._pointColor[x][y] = 0;
            }
        }
        for (var key in this._colorCount) {
            this._colorCount[key] = 0;
        }
    };
    /**
     * 重製當前無法繪畫的點位置
     * @private
     */
    DrawBoardModel.prototype.resetMaskPoint = function () {
        for (var x = this._width - 1; x >= 0; --x) {
            for (var y = this._height - 1; y >= 0; --y) {
                this._maskPoint[x][y] = true;
            }
        }
    };
    /**
     * 重製當前所有點位置的顏色
     * @private
     */
    DrawBoardModel.prototype.resetPixelColor = function () {
        this._pixelColor.fill(0);
    };
    /**
     * 設置畫板使用的顏色
     * @param {cc.Color} color
     */
    DrawBoardModel.prototype.setColor = function (color) {
        this._recentColor = this.convertToNumber(color);
        var hexColor = this.convertToNumber(color);
        if (!this._colorCount[hexColor]) {
            this._colorCount[hexColor] = 0;
        }
        this._temporaryColor = this._recentColor;
        this.temporaryR = color.r;
        this.temporaryG = color.g;
        this.temporaryB = color.b;
        this.temporaryA = color.a;
    };
    /**
     * 將RGBA顏色分量轉換為一個數值表示的顏色，顏色分量為0~255之間的值
     * @param {cc.Color} color
     * @returns {number}
     * @private
     */
    DrawBoardModel.prototype.convertToNumber = function (color) {
        //顏色值將用於數組索引，不能為負數，故紅色分量為奇數時將減1變為偶數
        return ((color.r & 0xfe) << 23) | (color.g << 16) | (color.b << 8) | color.a;
    };
    /**
     * 創建自訂義 v2 數據
     * @param {number} x - x軸位置 (默認 = 0)
     * @param {number} y - y軸位置 (默認 = 0)
     * @returns {IVec2}
     */
    DrawBoardModel.prototype.buildMyVec2 = function (x, y) {
        return new MyVec2(x, y);
    };
    /**
     * 繪製任意矩形
     * @private
     */
    DrawBoardModel.prototype.drawTriangle = function (positionList) {
        positionList.sort(function (a, b) {
            return a.x - b.x;
        });
        var p1 = positionList[0];
        var p2 = positionList[1];
        var p3 = positionList[2];
        if (p1.x == p2.x) {
            if (p1.x == p3.x)
                return;
            if (p1.y < p2.y) {
                p1 = positionList[1];
                p2 = positionList[0];
            }
            this.drawVerticalTriangle(p1, p2, p3);
            return;
        }
        var k = (p3.y - p1.y) / (p3.x - p1.x);
        var p4 = new MyVec2(p2.x, Math.round(p1.y + (p2.x - p1.x) * k));
        if (p4.y == p2.y)
            return;
        if (p4.y < p2.y) {
            this.drawVerticalTriangle(p2, p4, p1);
            this.drawVerticalTriangle(p2, p4, p3);
        }
        else {
            this.drawVerticalTriangle(p4, p2, p1);
            this.drawVerticalTriangle(p4, p2, p3);
        }
    };
    /**
     * 繪製一條邊與Y軸平行的三角形
     * @param p1    三角形垂直邊的 上 頂點坐標
     * @param p2    三角形垂直邊的 下 頂點坐標
     * @param p3    三角形 左側或右側 頂點坐標
     */
    DrawBoardModel.prototype.drawVerticalTriangle = function (p1, p2, p3) {
        if (p3.x == p1.x)
            return;
        var k1 = (p3.y - p1.y) / (p3.x - p1.x);
        var k2 = (p3.y - p2.y) / (p3.x - p2.x);
        var maxX = p3.x, minX = p1.x;
        if (maxX < minX) {
            maxX = p1.x;
            minX = p3.x;
        }
        minX = this.minX(minX);
        maxX = this.maxX(maxX);
        for (var x = minX; x <= maxX; ++x) {
            var maxY = this.clampY(Math.round(p1.y + (x - p1.x) * k1));
            var minY = this.clampY(Math.round(p2.y + (x - p2.x) * k2));
            this.drawColPixel(minY, maxY, x);
        }
    };
    /**
     * 連續繪製一列的像素點
     * @param {number} startY    起點Y坐標
     * @param {number} endY      終點Y坐標
     * @param {number} x        X坐標
     */
    DrawBoardModel.prototype.drawColPixel = function (startY, endY, x) {
        var index = (startY * this.width + x) * 4;
        for (var y = startY; y <= endY; ++y) {
            this.updateNowDrawColorData(index, x, y);
            index += this.width * 4;
        }
    };
    /**
     * 更新當前繪製的數據
     * @param {number} index - 當前要改變的像素分量
     * @param {number} x - 像素 X 軸位置
     * @param {number} y - 像素 Y 軸位置
     * @private
     */
    DrawBoardModel.prototype.updateNowDrawColorData = function (index, x, y) {
        if (this.maskPoint[x][y] != false && this.pointColor[x][y] != this._temporaryColor) {
            this.pixelColor[index] = this.temporaryR;
            this.pixelColor[index + 1] = this.temporaryG;
            this.pixelColor[index + 2] = this.temporaryB;
            this.pixelColor[index + 3] = this.temporaryA;
            var c = this.pointColor[x][y];
            this.colorCount[c]--;
            this.colorCount[this._temporaryColor]++;
            this.pointColor[x][y] = this._temporaryColor;
        }
    };
    /**
     * 繪製圓形
     * @param {number} x - X軸位置
     * @param {number} y - Y軸位置
     * @param {number} radius - 半徑
     * @private
     */
    DrawBoardModel.prototype.drawCircle = function (x, y, radius) {
        radius = Math.round(radius);
        if (radius == 0)
            return;
        //三角形的斜邊的平方
        var dis = radius * radius;
        var minY = this.clampY(y - radius);
        var maxY = this.clampY(y + radius);
        for (var j = minY; j <= maxY; ++j) {
            var r = j - y;
            r = Math.round(Math.sqrt(dis - r * r));
            var minX = this.clampX(x - r);
            var maxX = this.clampX(x + r);
            this.drawRowPixel(minX, maxX, j);
        }
    };
    /**
     * 连续绘制一行中的像素点
     * @param startX    起点X坐标
     * @param endX      终点X坐标
     * @param y         Y坐标
     */
    DrawBoardModel.prototype.drawRowPixel = function (startX, endX, y) {
        var index = (y * this.width + startX) * 4;
        for (var x = startX; x <= endX; ++x) {
            this.updateNowDrawColorData(index, x, y);
            index += 4;
        }
    };
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
    DrawBoardModel.prototype.drawLine = function (p1, p2, width, offsetX, offsetY, slopeRate) {
        if (p1.y == p2.y) {
            //水平直線
            var x = p1.x < p2.x ? p1.x : p2.x;
            this.drawRect(new MyVec2(x, Math.round(p1.y - width * 0.5)), Math.abs(p1.x - p2.x), width);
        }
        else if (p1.x == p2.x) {
            //垂直直線
            var y = p1.y < p2.y ? p1.y : p2.y;
            this.drawRect(new MyVec2(Math.round(p1.x - width * 0.5), y), width, Math.abs(p1.y - p2.y));
        }
        else {
            //傾斜直線
            var inverseK = (p1.x - p2.x) / (p1.y - p2.y);
            var p1t = new MyVec2(p1.x - offsetX, p1.y + offsetY);
            var p1b = new MyVec2(p1.x + offsetX, p1.y - offsetY);
            var p2t = new MyVec2(p2.x - offsetX, p2.y + offsetY);
            var p2b = new MyVec2(p2.x + offsetX, p2.y - offsetY);
            var p1c = new MyVec2();
            var p2c = new MyVec2();
            var height = Math.round(width * slopeRate);
            if (p2.y > p1.y) {
                if (p1b.x < p2t.x) {
                    p1c.x = p1b.x;
                    p1c.y = p1b.y + height;
                    p2c.x = p2t.x;
                    p2c.y = p2t.y - height;
                    this.drawVerticalTriangle(p1c, p1b, p1t);
                    this.drawParallelogram(p1b, p2c, height);
                    this.drawVerticalTriangle(p2t, p2c, p2b);
                }
                else {
                    p1c.x = p1b.x;
                    p1c.y = Math.round(p2t.y - (p1c.x - p2t.x) * inverseK);
                    p2c.x = p2t.x;
                    p2c.y = Math.round(p1b.y + (p1b.x - p2c.x) * inverseK);
                    this.drawVerticalTriangle(p2t, p2c, p1t);
                    this.drawParallelogram(p2c, p1b, p2t.y - p2c.y);
                    this.drawVerticalTriangle(p1c, p1b, p2b);
                }
            }
            else {
                if (p1t.x < p2b.x) {
                    p1c.x = p1t.x;
                    p1c.y = p1t.y - height;
                    p2c.x = p2b.x;
                    p2c.y = p2b.y + height;
                    this.drawVerticalTriangle(p1t, p1c, p1b);
                    this.drawParallelogram(p1c, p2b, height);
                    this.drawVerticalTriangle(p2c, p2b, p2t);
                }
                else {
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
    };
    /**
     * 繪製矩形
     * @param {IVec2} p - 矩形左下頂點的坐標
     * @param {number} w - 矩形寬度
     * @param {number} h - 矩形高度
     * @private
     */
    DrawBoardModel.prototype.drawRect = function (p, w, h) {
        var minX = this.clampX(p.x);
        var maxX = this.clampX(p.x + w);
        var minY = this.clampY(p.y);
        var maxY = this.clampY(p.y + h);
        for (var y = minY; y <= maxY; ++y) {
            this.drawRowPixel(minX, maxX, y);
        }
    };
    /**
     * 繪製平行四邊形，平行四邊形的左右兩邊與Y軸平行
     * @param p1        左下頂點坐標
     * @param p2        右下頂點坐標
     * @param height    垂直邊高度
     */
    DrawBoardModel.prototype.drawParallelogram = function (p1, p2, height) {
        if (p1.x == p2.x)
            return;
        var k = (p2.y - p1.y) / (p2.x - p1.x);
        var minX = this.minX(p1.x);
        var maxX = this.maxX(p2.x);
        for (var x = minX; x <= maxX; ++x) {
            var minY = p1.y + Math.round((x - p1.x) * k);
            var maxY = minY + height;
            minY = this._minY(minY);
            maxY = this._maxY(maxY);
            this.drawColPixel(minY, maxY, x);
        }
    };
    //內部繪製方法
    DrawBoardModel.prototype.minX = function (x) {
        return x >= 0 ? x : 0;
    };
    DrawBoardModel.prototype.maxX = function (x) {
        return x < this._width ? x : this._width - 1;
    };
    DrawBoardModel.prototype._minY = function (y) {
        return y >= 0 ? y : 0;
    };
    DrawBoardModel.prototype._maxY = function (y) {
        return y < this._height ? y : this._height - 1;
    };
    DrawBoardModel.prototype.clampX = function (x) {
        if (x < 0)
            return 0;
        if (x >= this._width)
            return this._width - 1;
        return x;
    };
    DrawBoardModel.prototype.clampY = function (y) {
        if (y < 0)
            return 0;
        if (y >= this._height)
            return this._height - 1;
        return y;
    };
    Object.defineProperty(DrawBoardModel.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardModel.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardModel.prototype, "texture", {
        get: function () {
            return this._texture;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardModel.prototype, "pointColor", {
        get: function () {
            return this._pointColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardModel.prototype, "maskPoint", {
        get: function () {
            return this._maskPoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardModel.prototype, "pixelBuffer", {
        get: function () {
            return this._pixelBuffer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardModel.prototype, "pixelColor", {
        get: function () {
            return this._pixelColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardModel.prototype, "colorCount", {
        get: function () {
            return this._colorCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardModel.prototype, "recentColor", {
        get: function () {
            return this._recentColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardModel.prototype, "temporaryColor", {
        get: function () {
            return this._temporaryColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardModel.prototype, "previousLineEndPos", {
        get: function () {
            return this._previousLineEndPos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardModel.prototype, "previousLineEndPosT", {
        get: function () {
            return this._previousLineEndPosT;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardModel.prototype, "previousLineEndPosB", {
        get: function () {
            return this._previousLineEndPosB;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardModel.prototype, "previousLineCircleEnd", {
        get: function () {
            return this._previousLineCircleEnd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardModel.prototype, "previousLineWidth", {
        get: function () {
            return this._previousLineWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardModel.prototype, "board", {
        get: function () {
            return this._board;
        },
        enumerable: false,
        configurable: true
    });
    return DrawBoardModel;
}());
exports.default = DrawBoardModel;
/**
 * 自訂義 Vec2
 */
var MyVec2 = /** @class */ (function () {
    function MyVec2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    MyVec2.prototype.set = function (p, y) {
        if (typeof p === "number") {
            this.x = p;
            this.y = y;
        }
        else {
            this.x = p.x;
            this.y = p.y;
        }
    };
    return MyVec2;
}());

cc._RF.pop();