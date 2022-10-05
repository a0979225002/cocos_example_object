
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/drawBoard/DrawBoardModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxkcmF3Qm9hcmRcXERyYXdCb2FyZE1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7Ozs7O0dBS0c7QUFDSDtJQW1JSTs7O09BR0c7SUFDSCx3QkFBWSxzQkFBK0M7UUFDdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssb0NBQVcsR0FBbkIsVUFBb0Isc0JBQStDO1FBQW5FLGlCQWFDO1FBWkcsSUFBSSxDQUFDLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQTJCLE9BQU87UUFDekYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQXlCLE9BQU87UUFDekYsSUFBSSxDQUFDLFFBQVEsR0FBRyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBcUMsaUNBQWlDO1FBQ3JILFVBQVUsQ0FBQztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRS9CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxrQkFBa0IsR0FBRyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFpQixhQUFhO1FBQ2pHLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFTLGVBQWU7UUFDbkcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUssRUFBaUIsQ0FBQyxDQUFzQyxPQUFPO1FBQzNGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxL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UUFBNUIsa0JBQUEsRUFBQSxLQUFhO1FBQUUsa0JBQUEsRUFBQSxLQUFhO1FBQ3BDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRU0sb0JBQUcsR0FBVixVQUFXLENBQWtCLEVBQUUsQ0FBVTtRQUNyQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUN2QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Q7YUFBTTtZQUNILElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJQ29sb3JDb3VudCBmcm9tIFwiLi9JQ29sb3JDb3VudFwiO1xyXG5pbXBvcnQgSURyYXdCb3JkSW5pdGlhbGl6ZURhdGEgZnJvbSBcIi4vSURyYXdCb3JkSW5pdGlhbGl6ZURhdGFcIjtcclxuaW1wb3J0IHsgSVZlYzIgfSBmcm9tIFwiLi9JVmVjMlwiO1xyXG5cclxuLyoqXHJcbiAqIEBBdXRob3Ig6JWt56uL5ZOBXHJcbiAqIEBEZXNjcmlwdGlvbiBUT0RPXHJcbiAqIEBEYXRlIDIwMjItMDgtMDkg5LiL5Y2IIDAzOjQ2XHJcbiAqIEBWZXJzaW9uIDEuMFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd0JvYXJkTW9kZWwge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog55W25YmN57aB5a6a55qE55Wr5p2/XHJcbiAgICAgKiBAdHlwZSB7Y2MuTm9kZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2JvYXJkOiBjYy5Ob2RlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog57mq5ZyW5p2/5a+s5bqmXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe5quWcluadv+mrmOW6plxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YuV5oWL5Ym15bu655qE5ZyW54mH5bCN6LGhLOWGjeacg+eJiOS4ree5quijveeahOWcluahiOaVuOaTmizlsIfmh4nnlKjliLDpgJnlgIvosrzlnJbkuK1cclxuICAgICAqIEB0eXBlIHtjYy5UZXh0dXJlMkR9XHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3RleHR1cmU6IGNjLlRleHR1cmUyRDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe0gOmMhOavj+WAi+WDj+e0oOm7nlxyXG4gICAgICogQHR5cGUge0FycmF5PEFycmF5PG51bWJlcj4+fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfcG9pbnRDb2xvcjogQXJyYXk8QXJyYXk8bnVtYmVyPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDntIDpjITmr4/lgIvlg4/ntKDpu57og73lkKbnuaroo70sZmFsc2XooajnpLrkuI3og73nuaroo70sdHJ1ZeihqOekuuiDvee5quijvVxyXG4gICAgICogQHR5cGUge0FycmF5PEFycmF5PGJvb2xlYW4+Pn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX21hc2tQb2ludDogQXJyYXk8QXJyYXk8Ym9vbGVhbj4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YSy5a2Y5YOP57Sg55So5YWn5a2Y5Y2AXHJcbiAgICAgKiBAdHlwZSB7QXJyYXlCdWZmZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9waXhlbEJ1ZmZlcjogQXJyYXlCdWZmZXJcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmhj+iJsuWIhumHj+aVuOe1hCzmj5DkvpvmuLLmn5Pkvb/nlKhcclxuICAgICAqIEB0eXBlIHtVaW50OEFycmF5fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfcGl4ZWxDb2xvcjogVWludDhBcnJheTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe0gOmMhOWQhOeorumhj+iJsuWDj+e0oOaVuOmHj1xyXG4gICAgICogQHR5cGUge0lDb2xvckNvdW50fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfY29sb3JDb3VudDogSUNvbG9yQ291bnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDntIDpjITmnIDov5HkuIDmrKHnmoTlg4/ntKDpoY/oibIs57mq6KO95pmC5pyq5oyH5a6a6aGP6Imy5pmCLOWwh+S9v+eUqOipsuWAvFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3JlY2VudENvbG9yOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoh6jmmYLlhLLlrZjnmoTpoY/oibLlgLxcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF90ZW1wb3JhcnlDb2xvcjogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Ieo5pmC5YSy5a2Y55qE6aGP6Imy5YC8IFJcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHRlbXBvcmFyeVI6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiHqOaZguWEsuWtmOeahOmhj+iJsuWAvCBHXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB0ZW1wb3JhcnlHOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoh6jmmYLlhLLlrZjnmoTpoY/oibLlgLwgQlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdGVtcG9yYXJ5QjogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Ieo5pmC5YSy5a2Y55qE6aGP6Imy5YC8IEFcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHRlbXBvcmFyeUE6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4iuS4gOasoee5quijveeahOebtOe3mueahOe1gum7nlxyXG4gICAgICogQHR5cGUge015VmVjMn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3ByZXZpb3VzTGluZUVuZFBvczogSVZlYzI7XHJcbiAgICBwcml2YXRlIF9wcmV2aW91c0xpbmVFbmRQb3NUOiBJVmVjMjtcclxuICAgIHByaXZhdGUgX3ByZXZpb3VzTGluZUVuZFBvc0I6IElWZWMyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LiK5LiA5qyh57uY5Yi255qE55u057q/55qE56uv54K55qC35byPXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3ByZXZpb3VzTGluZUNpcmNsZUVuZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4iuS4gOasoee5quijveeahOebtOe3mueahOWvrOW6plxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3ByZXZpb3VzTGluZVdpZHRoOiBudW1iZXI7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55Wr5biD6LOH5paZXHJcbiAgICAgKiBAcGFyYW0ge0lEcmF3Qm9yZEluaXRpYWxpemVEYXRhfSBkcmF3Qm9yZEluaXRpYWxpemVEYXRhIC0g5Yid5aeL6LOH5paZXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGRyYXdCb3JkSW5pdGlhbGl6ZURhdGE6IElEcmF3Qm9yZEluaXRpYWxpemVEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJbml0RGF0YShkcmF3Qm9yZEluaXRpYWxpemVEYXRhKTtcclxuICAgICAgICB0aGlzLmluaXRQYXJhbWV0ZXIoZHJhd0JvcmRJbml0aWFsaXplRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDos6bkuojliJ3lp4vljJbmlbjmk5pcclxuICAgICAqIEBwYXJhbSB7SURyYXdCb3JkSW5pdGlhbGl6ZURhdGF9IGRyYXdCb3JkSW5pdGlhbGl6ZURhdGFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZXRJbml0RGF0YShkcmF3Qm9yZEluaXRpYWxpemVEYXRhOiBJRHJhd0JvcmRJbml0aWFsaXplRGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2JvYXJkID0gZHJhd0JvcmRJbml0aWFsaXplRGF0YS5ib2FyZDtcclxuICAgICAgICB0aGlzLl93aWR0aCA9IE1hdGgucm91bmQoZHJhd0JvcmRJbml0aWFsaXplRGF0YS53aWR0aCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nuarlnJbmnb/lr6zluqZcclxuICAgICAgICB0aGlzLl9oZWlnaHQgPSBNYXRoLnJvdW5kKGRyYXdCb3JkSW5pdGlhbGl6ZURhdGEuaGVpZ2h0KTsgICAgICAgICAgICAgICAgICAgICAgICAgLy/nuarlnJbmnb/pq5jluqZcclxuICAgICAgICB0aGlzLl90ZXh0dXJlID0gZHJhd0JvcmRJbml0aWFsaXplRGF0YS50ZXh0dXJlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WLleaFi+WJteW7uueahOWclueJh+WwjeixoSzlho3mnIPniYjkuK3nuaroo73nmoTlnJbmoYjmlbjmk5os5bCH5oeJ55So5Yiw6YCZ5YCL6LK85ZyW5LitXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3RleHR1cmUpO1xyXG5cclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB0aGlzLl9wcmV2aW91c0xpbmVXaWR0aCA9IGRyYXdCb3JkSW5pdGlhbGl6ZURhdGEucHJldmlvdXNMaW5lV2lkdGg7ICAgICAgICAgICAgICAgICAvL+S4iuS4gOasoee5quijveeahOebtOe3mueahOWvrOW6plxyXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzTGluZUNpcmNsZUVuZCA9IGRyYXdCb3JkSW5pdGlhbGl6ZURhdGEucHJldmlvdXNMaW5lQ2lyY2xlRW5kOyAgICAgICAgIC8v5LiK5LiA5qyh57uY5Yi255qE55u057q/55qE56uv54K55qC35byPXHJcbiAgICAgICAgdGhpcy5fcG9pbnRDb2xvciA9IG5ldyBBcnJheTxBcnJheTxudW1iZXI+PigpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vlg4/ntKDpu55cclxuICAgICAgICB0aGlzLl9tYXNrUG9pbnQgPSBuZXcgQXJyYXk8QXJyYXk8Ym9vbGVhbj4+KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+e0gOmMhOavj+WAi+WDj+e0oOm7nuiDveWQpue5quijvSxmYWxzZeihqOekuuS4jeiDvee5quijvSx0cnVl6KGo56S66IO957mq6KO9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJblj4PmlbhcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpbml0UGFyYW1ldGVyKGRyYXdCb3JkSW5pdGlhbGl6ZURhdGE/OiBJRHJhd0JvcmRJbml0aWFsaXplRGF0YSkge1xyXG4gICAgICAgIHRoaXMuaW5pdFBvaW50Q29sb3IoKTtcclxuICAgICAgICB0aGlzLmluaXRNYXNrUG9pbnQoKTtcclxuICAgICAgICB0aGlzLmluaXRQaXhlbENvbG9yKCk7XHJcbiAgICAgICAgdGhpcy5pbml0TGluZURhdGEoKTtcclxuICAgICAgICB0aGlzLnNldENvbG9yKGRyYXdCb3JkSW5pdGlhbGl6ZURhdGEuY29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bCH5LiW55WM5bqn5qiZ6L2J5o+b54K66Kmy54mp5Lu25bqn5qiZXHJcbiAgICAgKiBAcGFyYW0ge2NjLlZlYzJ9IHBvc2l0aW9uXHJcbiAgICAgKiBAcmV0dXJucyB7Y2MuVmVjMn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHRyYW5zaXRpb25Qb3NpdGlvbihwb3NpdGlvbjogY2MuVmVjMikge1xyXG4gICAgICAgIGNvbnN0IGJvYXJkOiBjYy5Ob2RlID0gdGhpcy5fYm9hcmQ7XHJcbiAgICAgICAgY29uc3QgbG9jOiBjYy5WZWMyID0gYm9hcmQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zaXRpb24pO1xyXG4gICAgICAgIGxvYy54ICs9IHRoaXMuX3dpZHRoIC8gMjtcclxuICAgICAgICBsb2MueSArPSB0aGlzLl9oZWlnaHQgLyAyO1xyXG4gICAgICAgIHJldHVybiBsb2M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJblg4/ntKDpu55cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdFBvaW50Q29sb3IoKSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJbmiYDmnInlg4/ntKDkvY3nva5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuX3dpZHRoOyArK3gpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9wb2ludENvbG9yW3hdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wb2ludENvbG9yW3hdID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLl9oZWlnaHQ7ICsreSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9pbnRDb2xvclt4XVt5XSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29sb3JDb3VudCA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2NvbG9yQ291bnRbMF0gPSB0aGlzLl93aWR0aCAqIHRoaXMuX2hlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlumBrue9qeWNgFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpbml0TWFza1BvaW50KCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5Y+v57mq6KO955qE56+E5ZyNXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLl93aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fbWFza1BvaW50W3hdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXNrUG9pbnRbeF0gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuX2hlaWdodDsgKyt5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXNrUG9pbnRbeF1beV0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5YOP57Sg6aGP6ImyXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRQaXhlbENvbG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3BpeGVsQnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMud2lkdGggKiB0aGlzLmhlaWdodCAqIDQpO1xyXG4gICAgICAgIHRoaXMuX3BpeGVsQ29sb3IgPSBuZXcgVWludDhBcnJheSh0aGlzLl9waXhlbEJ1ZmZlcik7XHJcbiAgICAgICAgdGhpcy5waXhlbENvbG9yLmZpbGwoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vnlbbliY3nuaroo73nmoTnt5rmop1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdExpbmVEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzTGluZUVuZFBvcyA9IG5ldyBNeVZlYzIoKTtcclxuICAgICAgICB0aGlzLl9wcmV2aW91c0xpbmVFbmRQb3NUID0gbmV3IE15VmVjMigpO1xyXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzTGluZUVuZFBvc0IgPSBuZXcgTXlWZWMyKCk7XHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNMaW5lQ2lyY2xlRW5kID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4heepuuaVuOaTmlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldFBvaW50Q29sb3IoKTtcclxuICAgICAgICB0aGlzLnJlc2V0TWFza1BvaW50KCk7XHJcbiAgICAgICAgdGhpcy5yZXNldFBpeGVsQ29sb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmHjeijveeVtuWJjee0gOmMhOeahOm7nuaVuOaTmlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXNldFBvaW50Q29sb3IoKSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHggPSB0aGlzLl93aWR0aCAtIDE7IHggPj0gMDsgLS14KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSB0aGlzLl9oZWlnaHQgLSAxOyB5ID49IDA7IC0teSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9pbnRDb2xvclt4XVt5XSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuX2NvbG9yQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29sb3JDb3VudFtrZXldID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph43oo73nlbbliY3nhKHms5XnuarnlavnmoTpu57kvY3nva5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVzZXRNYXNrUG9pbnQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHRoaXMuX3dpZHRoIC0gMTsgeCA+PSAwOyAtLXgpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IHRoaXMuX2hlaWdodCAtIDE7IHkgPj0gMDsgLS15KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXNrUG9pbnRbeF1beV0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeN6KO955W25YmN5omA5pyJ6bue5L2N572u55qE6aGP6ImyXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlc2V0UGl4ZWxDb2xvcigpIHtcclxuICAgICAgICB0aGlzLl9waXhlbENvbG9yLmZpbGwoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoqK3nva7nlavmnb/kvb/nlKjnmoTpoY/oibJcclxuICAgICAqIEBwYXJhbSB7Y2MuQ29sb3J9IGNvbG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRDb2xvcihjb2xvcjogY2MuQ29sb3IpIHtcclxuICAgICAgICB0aGlzLl9yZWNlbnRDb2xvciA9IHRoaXMuY29udmVydFRvTnVtYmVyKGNvbG9yKTtcclxuICAgICAgICBjb25zdCBoZXhDb2xvciA9IHRoaXMuY29udmVydFRvTnVtYmVyKGNvbG9yKTtcclxuICAgICAgICBpZiAoIXRoaXMuX2NvbG9yQ291bnRbaGV4Q29sb3JdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yQ291bnRbaGV4Q29sb3JdID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdGVtcG9yYXJ5Q29sb3IgPSB0aGlzLl9yZWNlbnRDb2xvcjtcclxuICAgICAgICB0aGlzLnRlbXBvcmFyeVIgPSBjb2xvci5yO1xyXG4gICAgICAgIHRoaXMudGVtcG9yYXJ5RyA9IGNvbG9yLmc7XHJcbiAgICAgICAgdGhpcy50ZW1wb3JhcnlCID0gY29sb3IuYjtcclxuICAgICAgICB0aGlzLnRlbXBvcmFyeUEgPSBjb2xvci5hO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsIdSR0JB6aGP6Imy5YiG6YeP6L2J5o+b54K65LiA5YCL5pW45YC86KGo56S655qE6aGP6Imy77yM6aGP6Imy5YiG6YeP54K6MH4yNTXkuYvplpPnmoTlgLxcclxuICAgICAqIEBwYXJhbSB7Y2MuQ29sb3J9IGNvbG9yXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjb252ZXJ0VG9OdW1iZXIoY29sb3I6IGNjLkNvbG9yKTogbnVtYmVyIHtcclxuICAgICAgICAvL+mhj+iJsuWAvOWwh+eUqOaWvOaVuOe1hOe0ouW8le+8jOS4jeiDveeCuuiyoOaVuO+8jOaVhee0heiJsuWIhumHj+eCuuWlh+aVuOaZguWwh+a4mzHororngrrlgbbmlbhcclxuICAgICAgICByZXR1cm4gKChjb2xvci5yICYgMHhmZSkgPDwgMjMpIHwgKGNvbG9yLmcgPDwgMTYpIHwgKGNvbG9yLmIgPDwgOCkgfCBjb2xvci5hO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Ym15bu66Ieq6KiC576pIHYyIOaVuOaTmlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggLSB46Lu45L2N572uICjpu5joqo0gPSAwKVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgLSB56Lu45L2N572uICjpu5joqo0gPSAwKVxyXG4gICAgICogQHJldHVybnMge0lWZWMyfVxyXG4gICAgICovXHJcbiAgICBidWlsZE15VmVjMih4PzogbnVtYmVyLCB5PzogbnVtYmVyKTogSVZlYzIge1xyXG4gICAgICAgIHJldHVybiBuZXcgTXlWZWMyKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57mq6KO95Lu75oSP55+p5b2iXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZHJhd1RyaWFuZ2xlKHBvc2l0aW9uTGlzdDogSVZlYzJbXSkge1xyXG4gICAgICAgIHBvc2l0aW9uTGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLnggLSBiLng7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHAxID0gcG9zaXRpb25MaXN0WzBdO1xyXG4gICAgICAgIGxldCBwMiA9IHBvc2l0aW9uTGlzdFsxXTtcclxuICAgICAgICBsZXQgcDMgPSBwb3NpdGlvbkxpc3RbMl07XHJcbiAgICAgICAgaWYgKHAxLnggPT0gcDIueCkge1xyXG4gICAgICAgICAgICBpZiAocDEueCA9PSBwMy54KSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChwMS55IDwgcDIueSkge1xyXG4gICAgICAgICAgICAgICAgcDEgPSBwb3NpdGlvbkxpc3RbMV07XHJcbiAgICAgICAgICAgICAgICBwMiA9IHBvc2l0aW9uTGlzdFswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAxLCBwMiwgcDMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBrID0gKHAzLnkgLSBwMS55KSAvIChwMy54IC0gcDEueCk7XHJcbiAgICAgICAgbGV0IHA0ID0gbmV3IE15VmVjMihwMi54LCBNYXRoLnJvdW5kKHAxLnkgKyAocDIueCAtIHAxLngpICogaykpO1xyXG4gICAgICAgIGlmIChwNC55ID09IHAyLnkpIHJldHVybjtcclxuICAgICAgICBpZiAocDQueSA8IHAyLnkpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3VmVydGljYWxUcmlhbmdsZShwMiwgcDQsIHAxKTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3VmVydGljYWxUcmlhbmdsZShwMiwgcDQsIHAzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdWZXJ0aWNhbFRyaWFuZ2xlKHA0LCBwMiwgcDEpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdWZXJ0aWNhbFRyaWFuZ2xlKHA0LCBwMiwgcDMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe5quijveS4gOainemCiuiIh1nou7jlubPooYznmoTkuInop5LlvaJcclxuICAgICAqIEBwYXJhbSBwMSAgICDkuInop5LlvaLlnoLnm7TpgornmoQg5LiKIOmggum7nuWdkOaomVxyXG4gICAgICogQHBhcmFtIHAyICAgIOS4ieinkuW9ouWeguebtOmCiueahCDkuIsg6aCC6bue5Z2Q5qiZXHJcbiAgICAgKiBAcGFyYW0gcDMgICAg5LiJ6KeS5b2iIOW3puWBtOaIluWPs+WBtCDpoILpu57lnZDmqJlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAxOiBJVmVjMiwgcDI6IElWZWMyLCBwMzogSVZlYzIpIHtcclxuICAgICAgICBpZiAocDMueCA9PSBwMS54KSByZXR1cm47XHJcbiAgICAgICAgbGV0IGsxID0gKHAzLnkgLSBwMS55KSAvIChwMy54IC0gcDEueCk7XHJcbiAgICAgICAgbGV0IGsyID0gKHAzLnkgLSBwMi55KSAvIChwMy54IC0gcDIueCk7XHJcbiAgICAgICAgbGV0IG1heFggPSBwMy54LCBtaW5YID0gcDEueDtcclxuICAgICAgICBpZiAobWF4WCA8IG1pblgpIHtcclxuICAgICAgICAgICAgbWF4WCA9IHAxLng7XHJcbiAgICAgICAgICAgIG1pblggPSBwMy54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBtaW5YID0gdGhpcy5taW5YKG1pblgpO1xyXG4gICAgICAgIG1heFggPSB0aGlzLm1heFgobWF4WCk7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IG1pblg7IHggPD0gbWF4WDsgKyt4KSB7XHJcbiAgICAgICAgICAgIGxldCBtYXhZID0gdGhpcy5jbGFtcFkoTWF0aC5yb3VuZChwMS55ICsgKHggLSBwMS54KSAqIGsxKSk7XHJcbiAgICAgICAgICAgIGxldCBtaW5ZID0gdGhpcy5jbGFtcFkoTWF0aC5yb3VuZChwMi55ICsgKHggLSBwMi54KSAqIGsyKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0NvbFBpeGVsKG1pblksIG1heFksIHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAo+e6jOe5quijveS4gOWIl+eahOWDj+e0oOm7nlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0WSAgICDotbfpu55Z5Z2Q5qiZXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZW5kWSAgICAgIOe1gum7nlnlnZDmqJlcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4ICAgICAgICBY5Z2Q5qiZXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZHJhd0NvbFBpeGVsKHN0YXJ0WTogbnVtYmVyLCBlbmRZOiBudW1iZXIsIHg6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBpbmRleCA9IChzdGFydFkgKiB0aGlzLndpZHRoICsgeCkgKiA0O1xyXG4gICAgICAgIGZvciAobGV0IHkgPSBzdGFydFk7IHkgPD0gZW5kWTsgKyt5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTm93RHJhd0NvbG9yRGF0YShpbmRleCwgeCwgeSk7XHJcbiAgICAgICAgICAgIGluZGV4ICs9IHRoaXMud2lkdGggKiA0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOeVtuWJjee5quijveeahOaVuOaTmlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0g55W25YmN6KaB5pS56K6K55qE5YOP57Sg5YiG6YePXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCAtIOWDj+e0oCBYIOi7uOS9jee9rlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgLSDlg4/ntKAgWSDou7jkvY3nva5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlTm93RHJhd0NvbG9yRGF0YShpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLm1hc2tQb2ludFt4XVt5XSAhPSBmYWxzZSAmJiB0aGlzLnBvaW50Q29sb3JbeF1beV0gIT0gdGhpcy5fdGVtcG9yYXJ5Q29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5waXhlbENvbG9yW2luZGV4XSA9IHRoaXMudGVtcG9yYXJ5UjtcclxuICAgICAgICAgICAgdGhpcy5waXhlbENvbG9yW2luZGV4ICsgMV0gPSB0aGlzLnRlbXBvcmFyeUc7XHJcbiAgICAgICAgICAgIHRoaXMucGl4ZWxDb2xvcltpbmRleCArIDJdID0gdGhpcy50ZW1wb3JhcnlCO1xyXG4gICAgICAgICAgICB0aGlzLnBpeGVsQ29sb3JbaW5kZXggKyAzXSA9IHRoaXMudGVtcG9yYXJ5QTtcclxuICAgICAgICAgICAgbGV0IGMgPSB0aGlzLnBvaW50Q29sb3JbeF1beV07XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JDb3VudFtjXS0tO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yQ291bnRbdGhpcy5fdGVtcG9yYXJ5Q29sb3JdKys7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRDb2xvclt4XVt5XSA9IHRoaXMuX3RlbXBvcmFyeUNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe5quijveWck+W9olxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBY6Lu45L2N572uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSAtIFnou7jkvY3nva5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgLSDljYrlvpFcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkcmF3Q2lyY2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpdXM6IG51bWJlcikge1xyXG4gICAgICAgIHJhZGl1cyA9IE1hdGgucm91bmQocmFkaXVzKTtcclxuICAgICAgICBpZiAocmFkaXVzID09IDApIHJldHVybjtcclxuICAgICAgICAvL+S4ieinkuW9oueahOaWnOmCiueahOW5s+aWuVxyXG4gICAgICAgIGxldCBkaXMgPSByYWRpdXMgKiByYWRpdXM7XHJcbiAgICAgICAgbGV0IG1pblkgPSB0aGlzLmNsYW1wWSh5IC0gcmFkaXVzKTtcclxuICAgICAgICBsZXQgbWF4WSA9IHRoaXMuY2xhbXBZKHkgKyByYWRpdXMpO1xyXG4gICAgICAgIGZvciAobGV0IGogPSBtaW5ZOyBqIDw9IG1heFk7ICsraikge1xyXG4gICAgICAgICAgICBsZXQgciA9IGogLSB5O1xyXG4gICAgICAgICAgICByID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoZGlzIC0gciAqIHIpKTtcclxuICAgICAgICAgICAgbGV0IG1pblggPSB0aGlzLmNsYW1wWCh4IC0gcik7XHJcbiAgICAgICAgICAgIGxldCBtYXhYID0gdGhpcy5jbGFtcFgoeCArIHIpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdSb3dQaXhlbChtaW5YLCBtYXhYLCBqKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov57nu63nu5jliLbkuIDooYzkuK3nmoTlg4/ntKDngrlcclxuICAgICAqIEBwYXJhbSBzdGFydFggICAg6LW354K5WOWdkOagh1xyXG4gICAgICogQHBhcmFtIGVuZFggICAgICDnu4jngrlY5Z2Q5qCHXHJcbiAgICAgKiBAcGFyYW0geSAgICAgICAgIFnlnZDmoIdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkcmF3Um93UGl4ZWwoc3RhcnRYOiBudW1iZXIsIGVuZFg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gKHkgKiB0aGlzLndpZHRoICsgc3RhcnRYKSAqIDQ7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHN0YXJ0WDsgeCA8PSBlbmRYOyArK3gpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVOb3dEcmF3Q29sb3JEYXRhKGluZGV4LCB4LCB5KTtcclxuICAgICAgICAgICAgaW5kZXggKz0gNDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnuaroo73nm7Tnt5rvvIzkuI3ljIXlkKvnt5rmrrXnq6/pu57mqKPlvI9cclxuICAgICAqIEBwYXJhbSB7SVZlYzJ9IHAxIC0g57ea5q616LW36bue5Z2Q5qiZXHJcbiAgICAgKiBAcGFyYW0ge0lWZWMyfSBwMiAtIOe3muautee1gum7nuWdkOaomVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0g57ea5q615a+s5bqmXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0WCAtIFjou7jlgY/np7vkvY3nva5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRZIC0gWei7uOWBj+enu+S9jee9rlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNsb3BlUmF0ZSAtIOaWnOeOh1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRyYXdMaW5lKHAxOiBJVmVjMiwgcDI6IElWZWMyLCB3aWR0aDogbnVtYmVyLCBvZmZzZXRYOiBudW1iZXIsIG9mZnNldFk6IG51bWJlciwgc2xvcGVSYXRlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAocDEueSA9PSBwMi55KSB7XHJcbiAgICAgICAgICAgIC8v5rC05bmz55u057eaXHJcbiAgICAgICAgICAgIGxldCB4ID0gcDEueCA8IHAyLnggPyBwMS54IDogcDIueDtcclxuICAgICAgICAgICAgdGhpcy5kcmF3UmVjdChuZXcgTXlWZWMyKHgsIE1hdGgucm91bmQocDEueSAtIHdpZHRoICogMC41KSksIE1hdGguYWJzKHAxLnggLSBwMi54KSwgd2lkdGgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocDEueCA9PSBwMi54KSB7XHJcbiAgICAgICAgICAgIC8v5Z6C55u055u057eaXHJcbiAgICAgICAgICAgIGxldCB5ID0gcDEueSA8IHAyLnkgPyBwMS55IDogcDIueTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3UmVjdChuZXcgTXlWZWMyKE1hdGgucm91bmQocDEueCAtIHdpZHRoICogMC41KSwgeSksIHdpZHRoLCBNYXRoLmFicyhwMS55IC0gcDIueSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5YK+5pac55u057eaXHJcbiAgICAgICAgICAgIGxldCBpbnZlcnNlSyA9IChwMS54IC0gcDIueCkgLyAocDEueSAtIHAyLnkpO1xyXG4gICAgICAgICAgICBsZXQgcDF0ID0gbmV3IE15VmVjMihwMS54IC0gb2Zmc2V0WCwgcDEueSArIG9mZnNldFkpO1xyXG4gICAgICAgICAgICBsZXQgcDFiID0gbmV3IE15VmVjMihwMS54ICsgb2Zmc2V0WCwgcDEueSAtIG9mZnNldFkpO1xyXG4gICAgICAgICAgICBsZXQgcDJ0ID0gbmV3IE15VmVjMihwMi54IC0gb2Zmc2V0WCwgcDIueSArIG9mZnNldFkpO1xyXG4gICAgICAgICAgICBsZXQgcDJiID0gbmV3IE15VmVjMihwMi54ICsgb2Zmc2V0WCwgcDIueSAtIG9mZnNldFkpO1xyXG4gICAgICAgICAgICBsZXQgcDFjID0gbmV3IE15VmVjMigpO1xyXG4gICAgICAgICAgICBsZXQgcDJjID0gbmV3IE15VmVjMigpO1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gTWF0aC5yb3VuZCh3aWR0aCAqIHNsb3BlUmF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChwMi55ID4gcDEueSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHAxYi54IDwgcDJ0LngpIHtcclxuICAgICAgICAgICAgICAgICAgICBwMWMueCA9IHAxYi54O1xyXG4gICAgICAgICAgICAgICAgICAgIHAxYy55ID0gcDFiLnkgKyBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcDJjLnggPSBwMnQueDtcclxuICAgICAgICAgICAgICAgICAgICBwMmMueSA9IHAydC55IC0gaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDFjLCBwMWIsIHAxdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UGFyYWxsZWxvZ3JhbShwMWIsIHAyYywgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAydCwgcDJjLCBwMmIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwMWMueCA9IHAxYi54O1xyXG4gICAgICAgICAgICAgICAgICAgIHAxYy55ID0gTWF0aC5yb3VuZChwMnQueSAtIChwMWMueCAtIHAydC54KSAqIGludmVyc2VLKTtcclxuICAgICAgICAgICAgICAgICAgICBwMmMueCA9IHAydC54O1xyXG4gICAgICAgICAgICAgICAgICAgIHAyYy55ID0gTWF0aC5yb3VuZChwMWIueSArIChwMWIueCAtIHAyYy54KSAqIGludmVyc2VLKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAydCwgcDJjLCBwMXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1BhcmFsbGVsb2dyYW0ocDJjLCBwMWIsIHAydC55IC0gcDJjLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDFjLCBwMWIsIHAyYik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocDF0LnggPCBwMmIueCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHAxYy54ID0gcDF0Lng7XHJcbiAgICAgICAgICAgICAgICAgICAgcDFjLnkgPSBwMXQueSAtIGhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBwMmMueCA9IHAyYi54O1xyXG4gICAgICAgICAgICAgICAgICAgIHAyYy55ID0gcDJiLnkgKyBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3VmVydGljYWxUcmlhbmdsZShwMXQsIHAxYywgcDFiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdQYXJhbGxlbG9ncmFtKHAxYywgcDJiLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDJjLCBwMmIsIHAydCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHAxYy54ID0gcDF0Lng7XHJcbiAgICAgICAgICAgICAgICAgICAgcDFjLnkgPSBNYXRoLnJvdW5kKHAyYi55IC0gKHAxYy54IC0gcDJiLngpICogaW52ZXJzZUspO1xyXG4gICAgICAgICAgICAgICAgICAgIHAyYy54ID0gcDJiLng7XHJcbiAgICAgICAgICAgICAgICAgICAgcDJjLnkgPSBNYXRoLnJvdW5kKHAxdC55ICsgKHAxdC54IC0gcDJjLngpICogaW52ZXJzZUspO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDJjLCBwMmIsIHAxYik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UGFyYWxsZWxvZ3JhbShwMmIsIHAxYywgcDF0LnkgLSBwMWMueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3VmVydGljYWxUcmlhbmdsZShwMXQsIHAxYywgcDJ0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnuaroo73nn6nlvaJcclxuICAgICAqIEBwYXJhbSB7SVZlYzJ9IHAgLSDnn6nlvaLlt6bkuIvpoILpu57nmoTlnZDmqJlcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3IC0g55+p5b2i5a+s5bqmXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaCAtIOefqeW9oumrmOW6plxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkcmF3UmVjdChwOiBJVmVjMiwgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgbWluWCA9IHRoaXMuY2xhbXBYKHAueCk7XHJcbiAgICAgICAgbGV0IG1heFggPSB0aGlzLmNsYW1wWChwLnggKyB3KTtcclxuICAgICAgICBsZXQgbWluWSA9IHRoaXMuY2xhbXBZKHAueSk7XHJcbiAgICAgICAgbGV0IG1heFkgPSB0aGlzLmNsYW1wWShwLnkgKyBoKTtcclxuICAgICAgICBmb3IgKGxldCB5ID0gbWluWTsgeSA8PSBtYXhZOyArK3kpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3Um93UGl4ZWwobWluWCwgbWF4WCwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57mq6KO95bmz6KGM5Zub6YKK5b2i77yM5bmz6KGM5Zub6YKK5b2i55qE5bem5Y+z5YWp6YKK6IiHWei7uOW5s+ihjFxyXG4gICAgICogQHBhcmFtIHAxICAgICAgICDlt6bkuIvpoILpu57lnZDmqJlcclxuICAgICAqIEBwYXJhbSBwMiAgICAgICAg5Y+z5LiL6aCC6bue5Z2Q5qiZXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0ICAgIOWeguebtOmCiumrmOW6plxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRyYXdQYXJhbGxlbG9ncmFtKHAxOiBJVmVjMiwgcDI6IElWZWMyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChwMS54ID09IHAyLngpIHJldHVybjtcclxuICAgICAgICBsZXQgayA9IChwMi55IC0gcDEueSkgLyAocDIueCAtIHAxLngpO1xyXG4gICAgICAgIGxldCBtaW5YID0gdGhpcy5taW5YKHAxLngpO1xyXG4gICAgICAgIGxldCBtYXhYID0gdGhpcy5tYXhYKHAyLngpO1xyXG4gICAgICAgIGZvciAobGV0IHggPSBtaW5YOyB4IDw9IG1heFg7ICsreCkge1xyXG4gICAgICAgICAgICBsZXQgbWluWSA9IHAxLnkgKyBNYXRoLnJvdW5kKCh4IC0gcDEueCkgKiBrKTtcclxuICAgICAgICAgICAgbGV0IG1heFkgPSBtaW5ZICsgaGVpZ2h0O1xyXG4gICAgICAgICAgICBtaW5ZID0gdGhpcy5fbWluWShtaW5ZKTtcclxuICAgICAgICAgICAgbWF4WSA9IHRoaXMuX21heFkobWF4WSk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0NvbFBpeGVsKG1pblksIG1heFksIHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WFp+mDqOe5quijveaWueazlVxyXG4gICAgcHJpdmF0ZSBtaW5YKHg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHggPj0gMCA/IHggOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWF4WCh4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB4IDwgdGhpcy5fd2lkdGggPyB4IDogdGhpcy5fd2lkdGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX21pblkoeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4geSA+PSAwID8geSA6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbWF4WSh5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB5IDwgdGhpcy5faGVpZ2h0ID8geSA6IHRoaXMuX2hlaWdodCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGFtcFgoeDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoeCA8IDApIHJldHVybiAwO1xyXG4gICAgICAgIGlmICh4ID49IHRoaXMuX3dpZHRoKSByZXR1cm4gdGhpcy5fd2lkdGggLSAxO1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xhbXBZKHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHkgPCAwKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAoeSA+PSB0aGlzLl9oZWlnaHQpIHJldHVybiB0aGlzLl9oZWlnaHQgLSAxO1xyXG4gICAgICAgIHJldHVybiB5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRleHR1cmUoKTogY2MuVGV4dHVyZTJEIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcG9pbnRDb2xvcigpOiBBcnJheTxBcnJheTxudW1iZXI+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvaW50Q29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1hc2tQb2ludCgpOiBBcnJheTxBcnJheTxib29sZWFuPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXNrUG9pbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBpeGVsQnVmZmVyKCk6IEFycmF5QnVmZmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGl4ZWxCdWZmZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBpeGVsQ29sb3IoKTogVWludDhBcnJheSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BpeGVsQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbG9yQ291bnQoKTogSUNvbG9yQ291bnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvckNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZWNlbnRDb2xvcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZWNlbnRDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGVtcG9yYXJ5Q29sb3IoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGVtcG9yYXJ5Q29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByZXZpb3VzTGluZUVuZFBvcygpOiBNeVZlYzIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcmV2aW91c0xpbmVFbmRQb3M7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByZXZpb3VzTGluZUVuZFBvc1QoKTogTXlWZWMyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJldmlvdXNMaW5lRW5kUG9zVDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJldmlvdXNMaW5lRW5kUG9zQigpOiBNeVZlYzIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcmV2aW91c0xpbmVFbmRQb3NCO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcmV2aW91c0xpbmVDaXJjbGVFbmQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZXZpb3VzTGluZUNpcmNsZUVuZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJldmlvdXNMaW5lV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJldmlvdXNMaW5lV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJvYXJkKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ib2FyZDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOiHquiogue+qSBWZWMyXHJcbiAqL1xyXG5jbGFzcyBNeVZlYzIgaW1wbGVtZW50cyBJVmVjMiB7XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQocDogbnVtYmVyIHwgTXlWZWMyLCB5PzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHA7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gcC54O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSBwLnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==