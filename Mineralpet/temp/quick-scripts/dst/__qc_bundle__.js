
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Controll');
require('./assets/Script/Modle');
require('./assets/Script/drawBoard/DrawBoard');
require('./assets/Script/drawBoard/DrawBoardBuilder');
require('./assets/Script/drawBoard/DrawBoardModel');
require('./assets/Script/drawBoard/DrawBordModel');
require('./assets/Script/drawBoard/IColorCount');
require('./assets/Script/drawBoard/IDrawBordInitializeData');
require('./assets/Script/drawBoard/IVec2');
require('./assets/Script/test');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/drawBoard/DrawBordModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa038tiyVlOpKZjfgfXiwOz', 'DrawBordModel');
// Script/drawBoard/DrawBordModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2022-08-09 下午 03:46
 * @Version 1.0
 */
var DrawBordModel = /** @class */ (function () {
    /**
     * 畫布資料
     * @param {IDrawBordInitializeData} drawBordInitializeData - 初始資料
     */
    function DrawBordModel(drawBordInitializeData) {
        this.setInitData(drawBordInitializeData);
        this.initParameter(drawBordInitializeData);
    }
    /**
     * 賦予初始化數據
     * @param {IDrawBordInitializeData} drawBordInitializeData
     */
    DrawBordModel.prototype.setInitData = function (drawBordInitializeData) {
        this._width = Math.round(drawBordInitializeData.width); //繪圖板寬度
        this._height = Math.round(drawBordInitializeData.height); //繪圖板高度
        this._texture = drawBordInitializeData.texture; //動態創建的圖片對象,再會版中繪製的圖案數據,將應用到這個貼圖中
        this._previousLineWidth = drawBordInitializeData.previousLineWidth; //上一次繪製的直線的寬度
        this._previousLineCircleEnd = drawBordInitializeData.previousLineCircleEnd; //上一次绘制的直线的端点样式
        this._pointColor = new Array(); //初始像素點
        this._maskPoint = new Array(); //紀錄每個像素點能否繪製,false表示不能繪製,true表示能繪製
    };
    /**
     * 初始化參數
     */
    DrawBordModel.prototype.initParameter = function (drawBordInitializeData) {
        this.initPointColor();
        this.initMaskPoint();
        this.initPixelColor();
        this.initLineData();
        this.setColor(drawBordInitializeData.color);
    };
    /**
     * 初始化像素點
     * @private
     */
    DrawBordModel.prototype.initPointColor = function () {
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
    DrawBordModel.prototype.initMaskPoint = function () {
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
    DrawBordModel.prototype.initPixelColor = function () {
        this._pixelBuffer = new ArrayBuffer(this.width * this.height * 4);
        this._pixelColor = new Uint8Array(this._pixelBuffer);
        this.pixelColor.fill(0);
    };
    /**
     * 初始當前繪製的線條
     * @private
     */
    DrawBordModel.prototype.initLineData = function () {
        this._previousLineEndPos = new MyVec2();
        this._previousLineEndPosT = new MyVec2();
        this._previousLineEndPosB = new MyVec2();
        this._previousLineCircleEnd = true;
        this._previousLineWidth = 1;
    };
    /**
     * 清空數據
     */
    DrawBordModel.prototype.reset = function () {
        this.resetPointColor();
        this.resetMaskPoint();
        this.resetPixelColor();
    };
    /**
     * 重製當前紀錄的點數據
     * @private
     */
    DrawBordModel.prototype.resetPointColor = function () {
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
    DrawBordModel.prototype.resetMaskPoint = function () {
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
    DrawBordModel.prototype.resetPixelColor = function () {
        this._pixelColor.fill(0);
    };
    /**
     * 設置畫板使用的顏色
     * @param {cc.Color} color
     */
    DrawBordModel.prototype.setColor = function (color) {
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
    DrawBordModel.prototype.convertToNumber = function (color) {
        //顏色值將用於數組索引，不能為負數，故紅色分量為奇數時將減1變為偶數
        return ((color.r & 0xfe) << 23) | (color.g << 16) | (color.b << 8) | color.a;
    };
    /**
     * 創建自訂義 v2 數據
     * @param {number} x - x軸位置 (默認 = 0)
     * @param {number} y - y軸位置 (默認 = 0)
     * @returns {IVec2}
     */
    DrawBordModel.prototype.buildMyVec2 = function (x, y) {
        return new MyVec2(x, y);
    };
    /**
     * 繪製任意矩形
     * @private
     */
    DrawBordModel.prototype.drawTriangle = function (positionList) {
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
    DrawBordModel.prototype.drawVerticalTriangle = function (p1, p2, p3) {
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
    DrawBordModel.prototype.drawColPixel = function (startY, endY, x) {
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
    DrawBordModel.prototype.updateNowDrawColorData = function (index, x, y) {
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
    DrawBordModel.prototype.drawCircle = function (x, y, radius) {
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
    DrawBordModel.prototype.drawRowPixel = function (startX, endX, y) {
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
    DrawBordModel.prototype.drawLine = function (p1, p2, width, offsetX, offsetY, slopeRate) {
        if (p1.y == p2.y) {
            //水平直线
            var x = p1.x < p2.x ? p1.x : p2.x;
            this.drawRect(new MyVec2(x, Math.round(p1.y - width * 0.5)), Math.abs(p1.x - p2.x), width);
        }
        else if (p1.x == p2.x) {
            //垂直直线
            var y = p1.y < p2.y ? p1.y : p2.y;
            this.drawRect(new MyVec2(Math.round(p1.x - width * 0.5), y), width, Math.abs(p1.y - p2.y));
        }
        else {
            //倾斜直线
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
    DrawBordModel.prototype.drawRect = function (p, w, h) {
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
    DrawBordModel.prototype.drawParallelogram = function (p1, p2, height) {
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
    DrawBordModel.prototype.minX = function (x) {
        return x >= 0 ? x : 0;
    };
    DrawBordModel.prototype.maxX = function (x) {
        return x < this._width ? x : this._width - 1;
    };
    DrawBordModel.prototype._minY = function (y) {
        return y >= 0 ? y : 0;
    };
    DrawBordModel.prototype._maxY = function (y) {
        return y < this._height ? y : this._height - 1;
    };
    DrawBordModel.prototype.clampX = function (x) {
        if (x < 0)
            return 0;
        if (x >= this._width)
            return this._width - 1;
        return x;
    };
    DrawBordModel.prototype.clampY = function (y) {
        if (y < 0)
            return 0;
        if (y >= this._height)
            return this._height - 1;
        return y;
    };
    Object.defineProperty(DrawBordModel.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBordModel.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBordModel.prototype, "texture", {
        get: function () {
            return this._texture;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBordModel.prototype, "pointColor", {
        get: function () {
            return this._pointColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBordModel.prototype, "maskPoint", {
        get: function () {
            return this._maskPoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBordModel.prototype, "pixelBuffer", {
        get: function () {
            return this._pixelBuffer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBordModel.prototype, "pixelColor", {
        get: function () {
            return this._pixelColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBordModel.prototype, "colorCount", {
        get: function () {
            return this._colorCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBordModel.prototype, "recentColor", {
        get: function () {
            return this._recentColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBordModel.prototype, "temporaryColor", {
        get: function () {
            return this._temporaryColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBordModel.prototype, "previousLineEndPos", {
        get: function () {
            return this._previousLineEndPos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBordModel.prototype, "previousLineEndPosT", {
        get: function () {
            return this._previousLineEndPosT;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBordModel.prototype, "previousLineEndPosB", {
        get: function () {
            return this._previousLineEndPosB;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBordModel.prototype, "previousLineCircleEnd", {
        get: function () {
            return this._previousLineCircleEnd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBordModel.prototype, "previousLineWidth", {
        get: function () {
            return this._previousLineWidth;
        },
        enumerable: false,
        configurable: true
    });
    return DrawBordModel;
}());
exports.default = DrawBordModel;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxkcmF3Qm9hcmRcXERyYXdCb3JkTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7Ozs7R0FLRztBQUNIO0lBNEhJOzs7T0FHRztJQUNILHVCQUFZLHNCQUErQztRQUN2RCxJQUFJLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7O09BR0c7SUFDSyxtQ0FBVyxHQUFuQixVQUFvQixzQkFBK0M7UUFDL0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQTJCLE9BQU87UUFDekYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQXlCLE9BQU87UUFDekYsSUFBSSxDQUFDLFFBQVEsR0FBRyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBcUMsaUNBQWlDO1FBQ3JILElBQUksQ0FBQyxrQkFBa0IsR0FBRyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFpQixhQUFhO1FBQ2pHLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFTLGVBQWU7UUFDbkcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUssRUFBaUIsQ0FBQyxDQUFzQyxPQUFPO1FBQzNGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxLQUFLLEVBQWtCLENBQUMsQ0FBc0MsbUNBQW1DO0lBQzNILENBQUM7SUFFRDs7T0FFRztJQUNLLHFDQUFhLEdBQXJCLFVBQXNCLHNCQUErQztRQUNqRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FB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bG9yQ291bnQgZnJvbSBcIi4vSUNvbG9yQ291bnRcIjtcclxuaW1wb3J0IElEcmF3Qm9yZEluaXRpYWxpemVEYXRhIGZyb20gXCIuL0lEcmF3Qm9yZEluaXRpYWxpemVEYXRhXCI7XHJcbmltcG9ydCB7SVZlYzJ9IGZyb20gXCIuL0lWZWMyXCI7XHJcblxyXG4vKipcclxuICogQEF1dGhvciDola3nq4vlk4FcclxuICogQERlc2NyaXB0aW9uIFRPRE9cclxuICogQERhdGUgMjAyMi0wOC0wOSDkuIvljYggMDM6NDZcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3Qm9yZE1vZGVsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe5quWcluadv+WvrOW6plxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnuarlnJbmnb/pq5jluqZcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWLleaFi+WJteW7uueahOWclueJh+WwjeixoSzlho3mnIPniYjkuK3nuaroo73nmoTlnJbmoYjmlbjmk5os5bCH5oeJ55So5Yiw6YCZ5YCL6LK85ZyW5LitXHJcbiAgICAgKiBAdHlwZSB7Y2MuUmVuZGVyVGV4dHVyZX1cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfdGV4dHVyZTogY2MuUmVuZGVyVGV4dHVyZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe0gOmMhOavj+WAi+WDj+e0oOm7nlxyXG4gICAgICogQHR5cGUge0FycmF5PEFycmF5PG51bWJlcj4+fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfcG9pbnRDb2xvcjogQXJyYXk8QXJyYXk8bnVtYmVyPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDntIDpjITmr4/lgIvlg4/ntKDpu57og73lkKbnuaroo70sZmFsc2XooajnpLrkuI3og73nuaroo70sdHJ1ZeihqOekuuiDvee5quijvVxyXG4gICAgICogQHR5cGUge0FycmF5PEFycmF5PGJvb2xlYW4+Pn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX21hc2tQb2ludDogQXJyYXk8QXJyYXk8Ym9vbGVhbj4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YSy5a2Y5YOP57Sg55So5YWn5a2Y5Y2AXHJcbiAgICAgKiBAdHlwZSB7QXJyYXlCdWZmZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9waXhlbEJ1ZmZlcjogQXJyYXlCdWZmZXJcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmhj+iJsuWIhumHj+aVuOe1hCzmj5DkvpvmuLLmn5Pkvb/nlKhcclxuICAgICAqIEB0eXBlIHtVaW50OEFycmF5fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfcGl4ZWxDb2xvcjogVWludDhBcnJheTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe0gOmMhOWQhOeorumhj+iJsuWDj+e0oOaVuOmHj1xyXG4gICAgICogQHR5cGUge0lDb2xvckNvdW50fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfY29sb3JDb3VudDogSUNvbG9yQ291bnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDntIDpjITmnIDov5HkuIDmrKHnmoTlg4/ntKDpoY/oibIs57mq6KO95pmC5pyq5oyH5a6a6aGP6Imy5pmCLOWwh+S9v+eUqOipsuWAvFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3JlY2VudENvbG9yOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoh6jmmYLlhLLlrZjnmoTpoY/oibLlgLxcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF90ZW1wb3JhcnlDb2xvcjogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Ieo5pmC5YSy5a2Y55qE6aGP6Imy5YC8IFJcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHRlbXBvcmFyeVI6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiHqOaZguWEsuWtmOeahOmhj+iJsuWAvCBHXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB0ZW1wb3JhcnlHOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoh6jmmYLlhLLlrZjnmoTpoY/oibLlgLwgQlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdGVtcG9yYXJ5QjogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Ieo5pmC5YSy5a2Y55qE6aGP6Imy5YC8IEFcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHRlbXBvcmFyeUE6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4iuS4gOasoee5quijveeahOebtOe3mueahOe1gum7nlxyXG4gICAgICogQHR5cGUge015VmVjMn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3ByZXZpb3VzTGluZUVuZFBvczogSVZlYzI7XHJcbiAgICBwcml2YXRlIF9wcmV2aW91c0xpbmVFbmRQb3NUOiBJVmVjMjtcclxuICAgIHByaXZhdGUgX3ByZXZpb3VzTGluZUVuZFBvc0I6IElWZWMyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LiK5LiA5qyh57uY5Yi255qE55u057q/55qE56uv54K55qC35byPXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3ByZXZpb3VzTGluZUNpcmNsZUVuZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4iuS4gOasoee5quijveeahOebtOe3mueahOWvrOW6plxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3ByZXZpb3VzTGluZVdpZHRoOiBudW1iZXI7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55Wr5biD6LOH5paZXHJcbiAgICAgKiBAcGFyYW0ge0lEcmF3Qm9yZEluaXRpYWxpemVEYXRhfSBkcmF3Qm9yZEluaXRpYWxpemVEYXRhIC0g5Yid5aeL6LOH5paZXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGRyYXdCb3JkSW5pdGlhbGl6ZURhdGE6IElEcmF3Qm9yZEluaXRpYWxpemVEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJbml0RGF0YShkcmF3Qm9yZEluaXRpYWxpemVEYXRhKTtcclxuICAgICAgICB0aGlzLmluaXRQYXJhbWV0ZXIoZHJhd0JvcmRJbml0aWFsaXplRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDos6bkuojliJ3lp4vljJbmlbjmk5pcclxuICAgICAqIEBwYXJhbSB7SURyYXdCb3JkSW5pdGlhbGl6ZURhdGF9IGRyYXdCb3JkSW5pdGlhbGl6ZURhdGFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZXRJbml0RGF0YShkcmF3Qm9yZEluaXRpYWxpemVEYXRhOiBJRHJhd0JvcmRJbml0aWFsaXplRGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gTWF0aC5yb3VuZChkcmF3Qm9yZEluaXRpYWxpemVEYXRhLndpZHRoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+e5quWcluadv+WvrOW6plxyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IE1hdGgucm91bmQoZHJhd0JvcmRJbml0aWFsaXplRGF0YS5oZWlnaHQpOyAgICAgICAgICAgICAgICAgICAgICAgICAvL+e5quWcluadv+mrmOW6plxyXG4gICAgICAgIHRoaXMuX3RleHR1cmUgPSBkcmF3Qm9yZEluaXRpYWxpemVEYXRhLnRleHR1cmU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5YuV5oWL5Ym15bu655qE5ZyW54mH5bCN6LGhLOWGjeacg+eJiOS4ree5quijveeahOWcluahiOaVuOaTmizlsIfmh4nnlKjliLDpgJnlgIvosrzlnJbkuK1cclxuICAgICAgICB0aGlzLl9wcmV2aW91c0xpbmVXaWR0aCA9IGRyYXdCb3JkSW5pdGlhbGl6ZURhdGEucHJldmlvdXNMaW5lV2lkdGg7ICAgICAgICAgICAgICAgICAvL+S4iuS4gOasoee5quijveeahOebtOe3mueahOWvrOW6plxyXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzTGluZUNpcmNsZUVuZCA9IGRyYXdCb3JkSW5pdGlhbGl6ZURhdGEucHJldmlvdXNMaW5lQ2lyY2xlRW5kOyAgICAgICAgIC8v5LiK5LiA5qyh57uY5Yi255qE55u057q/55qE56uv54K55qC35byPXHJcbiAgICAgICAgdGhpcy5fcG9pbnRDb2xvciA9IG5ldyBBcnJheTxBcnJheTxudW1iZXI+PigpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vlg4/ntKDpu55cclxuICAgICAgICB0aGlzLl9tYXNrUG9pbnQgPSBuZXcgQXJyYXk8QXJyYXk8Ym9vbGVhbj4+KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+e0gOmMhOavj+WAi+WDj+e0oOm7nuiDveWQpue5quijvSxmYWxzZeihqOekuuS4jeiDvee5quijvSx0cnVl6KGo56S66IO957mq6KO9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJblj4PmlbhcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpbml0UGFyYW1ldGVyKGRyYXdCb3JkSW5pdGlhbGl6ZURhdGE6IElEcmF3Qm9yZEluaXRpYWxpemVEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5pbml0UG9pbnRDb2xvcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdE1hc2tQb2ludCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBpeGVsQ29sb3IoKTtcclxuICAgICAgICB0aGlzLmluaXRMaW5lRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuc2V0Q29sb3IoZHJhd0JvcmRJbml0aWFsaXplRGF0YS5jb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJblg4/ntKDpu55cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdFBvaW50Q29sb3IoKSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJbmiYDmnInlg4/ntKDkvY3nva5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuX3dpZHRoOyArK3gpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9wb2ludENvbG9yW3hdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wb2ludENvbG9yW3hdID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLl9oZWlnaHQ7ICsreSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9pbnRDb2xvclt4XVt5XSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29sb3JDb3VudCA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2NvbG9yQ291bnRbMF0gPSB0aGlzLl93aWR0aCAqIHRoaXMuX2hlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlumBrue9qeWNgFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpbml0TWFza1BvaW50KCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5Y+v57mq6KO955qE56+E5ZyNXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLl93aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fbWFza1BvaW50W3hdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXNrUG9pbnRbeF0gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuX2hlaWdodDsgKyt5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXNrUG9pbnRbeF1beV0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5YOP57Sg6aGP6ImyXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRQaXhlbENvbG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3BpeGVsQnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMud2lkdGggKiB0aGlzLmhlaWdodCAqIDQpO1xyXG4gICAgICAgIHRoaXMuX3BpeGVsQ29sb3IgPSBuZXcgVWludDhBcnJheSh0aGlzLl9waXhlbEJ1ZmZlcik7XHJcbiAgICAgICAgdGhpcy5waXhlbENvbG9yLmZpbGwoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vnlbbliY3nuaroo73nmoTnt5rmop1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdExpbmVEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzTGluZUVuZFBvcyA9IG5ldyBNeVZlYzIoKTtcclxuICAgICAgICB0aGlzLl9wcmV2aW91c0xpbmVFbmRQb3NUID0gbmV3IE15VmVjMigpO1xyXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzTGluZUVuZFBvc0IgPSBuZXcgTXlWZWMyKCk7XHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNMaW5lQ2lyY2xlRW5kID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9wcmV2aW91c0xpbmVXaWR0aCA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnqbrmlbjmk5pcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMucmVzZXRQb2ludENvbG9yKCk7XHJcbiAgICAgICAgdGhpcy5yZXNldE1hc2tQb2ludCgpO1xyXG4gICAgICAgIHRoaXMucmVzZXRQaXhlbENvbG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph43oo73nlbbliY3ntIDpjITnmoTpu57mlbjmk5pcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVzZXRQb2ludENvbG9yKCkge1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy5fd2lkdGggLSAxOyB4ID49IDA7IC0teCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gdGhpcy5faGVpZ2h0IC0gMTsgeSA+PSAwOyAtLXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BvaW50Q29sb3JbeF1beV0gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9jb2xvckNvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yQ291bnRba2V5XSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeN6KO955W25YmN54Sh5rOV57mq55Wr55qE6bue5L2N572uXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlc2V0TWFza1BvaW50KCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSB0aGlzLl93aWR0aCAtIDE7IHggPj0gMDsgLS14KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSB0aGlzLl9oZWlnaHQgLSAxOyB5ID49IDA7IC0teSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFza1BvaW50W3hdW3ldID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmHjeijveeVtuWJjeaJgOaciem7nuS9jee9rueahOmhj+iJslxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXNldFBpeGVsQ29sb3IoKSB7XHJcbiAgICAgICAgdGhpcy5fcGl4ZWxDb2xvci5maWxsKDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Kit572u55Wr5p2/5L2/55So55qE6aGP6ImyXHJcbiAgICAgKiBAcGFyYW0ge2NjLkNvbG9yfSBjb2xvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0Q29sb3IoY29sb3I6IGNjLkNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5fcmVjZW50Q29sb3IgPSB0aGlzLmNvbnZlcnRUb051bWJlcihjb2xvcik7XHJcbiAgICAgICAgY29uc3QgaGV4Q29sb3IgPSB0aGlzLmNvbnZlcnRUb051bWJlcihjb2xvcik7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jb2xvckNvdW50W2hleENvbG9yXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xvckNvdW50W2hleENvbG9yXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3RlbXBvcmFyeUNvbG9yID0gdGhpcy5fcmVjZW50Q29sb3I7XHJcbiAgICAgICAgdGhpcy50ZW1wb3JhcnlSID0gY29sb3IucjtcclxuICAgICAgICB0aGlzLnRlbXBvcmFyeUcgPSBjb2xvci5nO1xyXG4gICAgICAgIHRoaXMudGVtcG9yYXJ5QiA9IGNvbG9yLmI7XHJcbiAgICAgICAgdGhpcy50ZW1wb3JhcnlBID0gY29sb3IuYTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bCHUkdCQemhj+iJsuWIhumHj+i9ieaPm+eCuuS4gOWAi+aVuOWAvOihqOekuueahOmhj+iJsu+8jOmhj+iJsuWIhumHj+eCujB+MjU15LmL6ZaT55qE5YC8XHJcbiAgICAgKiBAcGFyYW0ge2NjLkNvbG9yfSBjb2xvclxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY29udmVydFRvTnVtYmVyKGNvbG9yOiBjYy5Db2xvcik6IG51bWJlciB7XHJcbiAgICAgICAgLy/poY/oibLlgLzlsIfnlKjmlrzmlbjntYTntKLlvJXvvIzkuI3og73ngrrosqDmlbjvvIzmlYXntIXoibLliIbph4/ngrrlpYfmlbjmmYLlsIfmuJsx6K6K54K65YG25pW4XHJcbiAgICAgICAgcmV0dXJuICgoY29sb3IuciAmIDB4ZmUpIDw8IDIzKSB8IChjb2xvci5nIDw8IDE2KSB8IChjb2xvci5iIDw8IDgpIHwgY29sb3IuYTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWJteW7uuiHquiogue+qSB2MiDmlbjmk5pcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0geOi7uOS9jee9riAo6buY6KqNID0gMClcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0geei7uOS9jee9riAo6buY6KqNID0gMClcclxuICAgICAqIEByZXR1cm5zIHtJVmVjMn1cclxuICAgICAqL1xyXG4gICAgYnVpbGRNeVZlYzIoeD86IG51bWJlciwgeT86IG51bWJlcik6IElWZWMyIHtcclxuICAgICAgICByZXR1cm4gbmV3IE15VmVjMih4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe5quijveS7u+aEj+efqeW9olxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRyYXdUcmlhbmdsZShwb3NpdGlvbkxpc3Q6IElWZWMyW10pIHtcclxuICAgICAgICBwb3NpdGlvbkxpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS54IC0gYi54O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBwMSA9IHBvc2l0aW9uTGlzdFswXTtcclxuICAgICAgICBsZXQgcDIgPSBwb3NpdGlvbkxpc3RbMV07XHJcbiAgICAgICAgbGV0IHAzID0gcG9zaXRpb25MaXN0WzJdO1xyXG4gICAgICAgIGlmIChwMS54ID09IHAyLngpIHtcclxuICAgICAgICAgICAgaWYgKHAxLnggPT0gcDMueCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAocDEueSA8IHAyLnkpIHtcclxuICAgICAgICAgICAgICAgIHAxID0gcG9zaXRpb25MaXN0WzFdO1xyXG4gICAgICAgICAgICAgICAgcDIgPSBwb3NpdGlvbkxpc3RbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kcmF3VmVydGljYWxUcmlhbmdsZShwMSwgcDIsIHAzKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgayA9IChwMy55IC0gcDEueSkgLyAocDMueCAtIHAxLngpO1xyXG4gICAgICAgIGxldCBwNCA9IG5ldyBNeVZlYzIocDIueCwgTWF0aC5yb3VuZChwMS55ICsgKHAyLnggLSBwMS54KSAqIGspKTtcclxuICAgICAgICBpZiAocDQueSA9PSBwMi55KSByZXR1cm47XHJcbiAgICAgICAgaWYgKHA0LnkgPCBwMi55KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDIsIHA0LCBwMSk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDIsIHA0LCBwMyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3VmVydGljYWxUcmlhbmdsZShwNCwgcDIsIHAxKTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3VmVydGljYWxUcmlhbmdsZShwNCwgcDIsIHAzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnuaroo73kuIDmop3pgoroiIdZ6Lu45bmz6KGM55qE5LiJ6KeS5b2iXHJcbiAgICAgKiBAcGFyYW0gcDEgICAg5LiJ6KeS5b2i5Z6C55u06YKK55qEIOS4iiDpoILpu57lnZDmqJlcclxuICAgICAqIEBwYXJhbSBwMiAgICDkuInop5LlvaLlnoLnm7TpgornmoQg5LiLIOmggum7nuWdkOaomVxyXG4gICAgICogQHBhcmFtIHAzICAgIOS4ieinkuW9oiDlt6blgbTmiJblj7PlgbQg6aCC6bue5Z2Q5qiZXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkcmF3VmVydGljYWxUcmlhbmdsZShwMTogSVZlYzIsIHAyOiBJVmVjMiwgcDM6IElWZWMyKSB7XHJcbiAgICAgICAgaWYgKHAzLnggPT0gcDEueCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBrMSA9IChwMy55IC0gcDEueSkgLyAocDMueCAtIHAxLngpO1xyXG4gICAgICAgIGxldCBrMiA9IChwMy55IC0gcDIueSkgLyAocDMueCAtIHAyLngpO1xyXG4gICAgICAgIGxldCBtYXhYID0gcDMueCwgbWluWCA9IHAxLng7XHJcbiAgICAgICAgaWYgKG1heFggPCBtaW5YKSB7XHJcbiAgICAgICAgICAgIG1heFggPSBwMS54O1xyXG4gICAgICAgICAgICBtaW5YID0gcDMueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWluWCA9IHRoaXMubWluWChtaW5YKTtcclxuICAgICAgICBtYXhYID0gdGhpcy5tYXhYKG1heFgpO1xyXG4gICAgICAgIGZvciAobGV0IHggPSBtaW5YOyB4IDw9IG1heFg7ICsreCkge1xyXG4gICAgICAgICAgICBsZXQgbWF4WSA9IHRoaXMuY2xhbXBZKE1hdGgucm91bmQocDEueSArICh4IC0gcDEueCkgKiBrMSkpO1xyXG4gICAgICAgICAgICBsZXQgbWluWSA9IHRoaXMuY2xhbXBZKE1hdGgucm91bmQocDIueSArICh4IC0gcDIueCkgKiBrMikpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdDb2xQaXhlbChtaW5ZLCBtYXhZLCB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgKPnuoznuaroo73kuIDliJfnmoTlg4/ntKDpu55cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFkgICAg6LW36bueWeWdkOaomVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGVuZFkgICAgICDntYLpu55Z5Z2Q5qiZXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCAgICAgICAgWOWdkOaomVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRyYXdDb2xQaXhlbChzdGFydFk6IG51bWJlciwgZW5kWTogbnVtYmVyLCB4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAoc3RhcnRZICogdGhpcy53aWR0aCArIHgpICogNDtcclxuICAgICAgICBmb3IgKGxldCB5ID0gc3RhcnRZOyB5IDw9IGVuZFk7ICsreSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5vd0RyYXdDb2xvckRhdGEoaW5kZXgsIHgsIHkpO1xyXG4gICAgICAgICAgICBpbmRleCArPSB0aGlzLndpZHRoICogNDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDnlbbliY3nuaroo73nmoTmlbjmk5pcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIOeVtuWJjeimgeaUueiuiueahOWDj+e0oOWIhumHj1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggLSDlg4/ntKAgWCDou7jkvY3nva5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0g5YOP57SgIFkg6Lu45L2N572uXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZU5vd0RyYXdDb2xvckRhdGEoaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5tYXNrUG9pbnRbeF1beV0gIT0gZmFsc2UgJiYgdGhpcy5wb2ludENvbG9yW3hdW3ldICE9IHRoaXMuX3RlbXBvcmFyeUNvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGl4ZWxDb2xvcltpbmRleF0gPSB0aGlzLnRlbXBvcmFyeVI7XHJcbiAgICAgICAgICAgIHRoaXMucGl4ZWxDb2xvcltpbmRleCArIDFdID0gdGhpcy50ZW1wb3JhcnlHO1xyXG4gICAgICAgICAgICB0aGlzLnBpeGVsQ29sb3JbaW5kZXggKyAyXSA9IHRoaXMudGVtcG9yYXJ5QjtcclxuICAgICAgICAgICAgdGhpcy5waXhlbENvbG9yW2luZGV4ICsgM10gPSB0aGlzLnRlbXBvcmFyeUE7XHJcbiAgICAgICAgICAgIGxldCBjID0gdGhpcy5wb2ludENvbG9yW3hdW3ldO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yQ291bnRbY10tLTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvckNvdW50W3RoaXMuX3RlbXBvcmFyeUNvbG9yXSsrO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50Q29sb3JbeF1beV0gPSB0aGlzLl90ZW1wb3JhcnlDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnuaroo73lnJPlvaJcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gWOi7uOS9jee9rlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgLSBZ6Lu45L2N572uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIC0g5Y2K5b6RXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZHJhd0NpcmNsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIpIHtcclxuICAgICAgICByYWRpdXMgPSBNYXRoLnJvdW5kKHJhZGl1cyk7XHJcbiAgICAgICAgaWYgKHJhZGl1cyA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgLy/kuInop5LlvaLnmoTmlpzpgornmoTlubPmlrlcclxuICAgICAgICBsZXQgZGlzID0gcmFkaXVzICogcmFkaXVzO1xyXG4gICAgICAgIGxldCBtaW5ZID0gdGhpcy5jbGFtcFkoeSAtIHJhZGl1cyk7XHJcbiAgICAgICAgbGV0IG1heFkgPSB0aGlzLmNsYW1wWSh5ICsgcmFkaXVzKTtcclxuICAgICAgICBmb3IgKGxldCBqID0gbWluWTsgaiA8PSBtYXhZOyArK2opIHtcclxuICAgICAgICAgICAgbGV0IHIgPSBqIC0geTtcclxuICAgICAgICAgICAgciA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KGRpcyAtIHIgKiByKSk7XHJcbiAgICAgICAgICAgIGxldCBtaW5YID0gdGhpcy5jbGFtcFgoeCAtIHIpO1xyXG4gICAgICAgICAgICBsZXQgbWF4WCA9IHRoaXMuY2xhbXBYKHggKyByKTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3Um93UGl4ZWwobWluWCwgbWF4WCwgaik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+e57ut57uY5Yi25LiA6KGM5Lit55qE5YOP57Sg54K5XHJcbiAgICAgKiBAcGFyYW0gc3RhcnRYICAgIOi1t+eCuVjlnZDmoIdcclxuICAgICAqIEBwYXJhbSBlbmRYICAgICAg57uI54K5WOWdkOagh1xyXG4gICAgICogQHBhcmFtIHkgICAgICAgICBZ5Z2Q5qCHXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZHJhd1Jvd1BpeGVsKHN0YXJ0WDogbnVtYmVyLCBlbmRYOiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBpbmRleCA9ICh5ICogdGhpcy53aWR0aCArIHN0YXJ0WCkgKiA0O1xyXG4gICAgICAgIGZvciAobGV0IHggPSBzdGFydFg7IHggPD0gZW5kWDsgKyt4KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTm93RHJhd0NvbG9yRGF0YShpbmRleCwgeCwgeSk7XHJcbiAgICAgICAgICAgIGluZGV4ICs9IDQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57mq6KO955u057ea77yM5LiN5YyF5ZCr57ea5q6156uv6bue5qij5byPXHJcbiAgICAgKiBAcGFyYW0ge0lWZWMyfSBwMSAtIOe3muautei1t+m7nuWdkOaomVxyXG4gICAgICogQHBhcmFtIHtJVmVjMn0gcDIgLSDnt5rmrrXntYLpu57lnZDmqJlcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIOe3muauteWvrOW6plxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFggLSBY6Lu45YGP56e75L2N572uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0WSAtIFnou7jlgY/np7vkvY3nva5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzbG9wZVJhdGUgLSDmlpznjodcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkcmF3TGluZShwMTogSVZlYzIsIHAyOiBJVmVjMiwgd2lkdGg6IG51bWJlciwgb2Zmc2V0WDogbnVtYmVyLCBvZmZzZXRZOiBudW1iZXIsIHNsb3BlUmF0ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHAxLnkgPT0gcDIueSkge1xyXG4gICAgICAgICAgICAvL+awtOW5s+ebtOe6v1xyXG4gICAgICAgICAgICBsZXQgeCA9IHAxLnggPCBwMi54ID8gcDEueCA6IHAyLng7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1JlY3QobmV3IE15VmVjMih4LCBNYXRoLnJvdW5kKHAxLnkgLSB3aWR0aCAqIDAuNSkpLCBNYXRoLmFicyhwMS54IC0gcDIueCksIHdpZHRoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHAxLnggPT0gcDIueCkge1xyXG4gICAgICAgICAgICAvL+WeguebtOebtOe6v1xyXG4gICAgICAgICAgICBsZXQgeSA9IHAxLnkgPCBwMi55ID8gcDEueSA6IHAyLnk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1JlY3QobmV3IE15VmVjMihNYXRoLnJvdW5kKHAxLnggLSB3aWR0aCAqIDAuNSksIHkpLCB3aWR0aCwgTWF0aC5hYnMocDEueSAtIHAyLnkpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+WAvuaWnOebtOe6v1xyXG4gICAgICAgICAgICBsZXQgaW52ZXJzZUsgPSAocDEueCAtIHAyLngpIC8gKHAxLnkgLSBwMi55KTtcclxuICAgICAgICAgICAgbGV0IHAxdCA9IG5ldyBNeVZlYzIocDEueCAtIG9mZnNldFgsIHAxLnkgKyBvZmZzZXRZKTtcclxuICAgICAgICAgICAgbGV0IHAxYiA9IG5ldyBNeVZlYzIocDEueCArIG9mZnNldFgsIHAxLnkgLSBvZmZzZXRZKTtcclxuICAgICAgICAgICAgbGV0IHAydCA9IG5ldyBNeVZlYzIocDIueCAtIG9mZnNldFgsIHAyLnkgKyBvZmZzZXRZKTtcclxuICAgICAgICAgICAgbGV0IHAyYiA9IG5ldyBNeVZlYzIocDIueCArIG9mZnNldFgsIHAyLnkgLSBvZmZzZXRZKTtcclxuICAgICAgICAgICAgbGV0IHAxYyA9IG5ldyBNeVZlYzIoKTtcclxuICAgICAgICAgICAgbGV0IHAyYyA9IG5ldyBNeVZlYzIoKTtcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IE1hdGgucm91bmQod2lkdGggKiBzbG9wZVJhdGUpO1xyXG4gICAgICAgICAgICBpZiAocDIueSA+IHAxLnkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwMWIueCA8IHAydC54KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcDFjLnggPSBwMWIueDtcclxuICAgICAgICAgICAgICAgICAgICBwMWMueSA9IHAxYi55ICsgaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIHAyYy54ID0gcDJ0Lng7XHJcbiAgICAgICAgICAgICAgICAgICAgcDJjLnkgPSBwMnQueSAtIGhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAxYywgcDFiLCBwMXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1BhcmFsbGVsb2dyYW0ocDFiLCBwMmMsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3VmVydGljYWxUcmlhbmdsZShwMnQsIHAyYywgcDJiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcDFjLnggPSBwMWIueDtcclxuICAgICAgICAgICAgICAgICAgICBwMWMueSA9IE1hdGgucm91bmQocDJ0LnkgLSAocDFjLnggLSBwMnQueCkgKiBpbnZlcnNlSyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcDJjLnggPSBwMnQueDtcclxuICAgICAgICAgICAgICAgICAgICBwMmMueSA9IE1hdGgucm91bmQocDFiLnkgKyAocDFiLnggLSBwMmMueCkgKiBpbnZlcnNlSyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3VmVydGljYWxUcmlhbmdsZShwMnQsIHAyYywgcDF0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdQYXJhbGxlbG9ncmFtKHAyYywgcDFiLCBwMnQueSAtIHAyYy55KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAxYywgcDFiLCBwMmIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHAxdC54IDwgcDJiLngpIHtcclxuICAgICAgICAgICAgICAgICAgICBwMWMueCA9IHAxdC54O1xyXG4gICAgICAgICAgICAgICAgICAgIHAxYy55ID0gcDF0LnkgLSBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcDJjLnggPSBwMmIueDtcclxuICAgICAgICAgICAgICAgICAgICBwMmMueSA9IHAyYi55ICsgaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDF0LCBwMWMsIHAxYik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UGFyYWxsZWxvZ3JhbShwMWMsIHAyYiwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAyYywgcDJiLCBwMnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwMWMueCA9IHAxdC54O1xyXG4gICAgICAgICAgICAgICAgICAgIHAxYy55ID0gTWF0aC5yb3VuZChwMmIueSAtIChwMWMueCAtIHAyYi54KSAqIGludmVyc2VLKTtcclxuICAgICAgICAgICAgICAgICAgICBwMmMueCA9IHAyYi54O1xyXG4gICAgICAgICAgICAgICAgICAgIHAyYy55ID0gTWF0aC5yb3VuZChwMXQueSArIChwMXQueCAtIHAyYy54KSAqIGludmVyc2VLKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAyYywgcDJiLCBwMWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1BhcmFsbGVsb2dyYW0ocDJiLCBwMWMsIHAxdC55IC0gcDFjLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDF0LCBwMWMsIHAydCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57mq6KO955+p5b2iXHJcbiAgICAgKiBAcGFyYW0ge0lWZWMyfSBwIC0g55+p5b2i5bem5LiL6aCC6bue55qE5Z2Q5qiZXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdyAtIOefqeW9ouWvrOW6plxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGggLSDnn6nlvaLpq5jluqZcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZHJhd1JlY3QocDogSVZlYzIsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG1pblggPSB0aGlzLmNsYW1wWChwLngpO1xyXG4gICAgICAgIGxldCBtYXhYID0gdGhpcy5jbGFtcFgocC54ICsgdyk7XHJcbiAgICAgICAgbGV0IG1pblkgPSB0aGlzLmNsYW1wWShwLnkpO1xyXG4gICAgICAgIGxldCBtYXhZID0gdGhpcy5jbGFtcFkocC55ICsgaCk7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgKyt5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1Jvd1BpeGVsKG1pblgsIG1heFgsIHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe5quijveW5s+ihjOWbm+mCiuW9ou+8jOW5s+ihjOWbm+mCiuW9oueahOW3puWPs+WFqemCiuiIh1nou7jlubPooYxcclxuICAgICAqIEBwYXJhbSBwMSAgICAgICAg5bem5LiL6aCC6bue5Z2Q5qiZXHJcbiAgICAgKiBAcGFyYW0gcDIgICAgICAgIOWPs+S4i+mggum7nuWdkOaomVxyXG4gICAgICogQHBhcmFtIGhlaWdodCAgICDlnoLnm7Tpgorpq5jluqZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkcmF3UGFyYWxsZWxvZ3JhbShwMTogSVZlYzIsIHAyOiBJVmVjMiwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAocDEueCA9PSBwMi54KSByZXR1cm47XHJcbiAgICAgICAgbGV0IGsgPSAocDIueSAtIHAxLnkpIC8gKHAyLnggLSBwMS54KTtcclxuICAgICAgICBsZXQgbWluWCA9IHRoaXMubWluWChwMS54KTtcclxuICAgICAgICBsZXQgbWF4WCA9IHRoaXMubWF4WChwMi54KTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gbWluWDsgeCA8PSBtYXhYOyArK3gpIHtcclxuICAgICAgICAgICAgbGV0IG1pblkgPSBwMS55ICsgTWF0aC5yb3VuZCgoeCAtIHAxLngpICogayk7XHJcbiAgICAgICAgICAgIGxldCBtYXhZID0gbWluWSArIGhlaWdodDtcclxuICAgICAgICAgICAgbWluWSA9IHRoaXMuX21pblkobWluWSk7XHJcbiAgICAgICAgICAgIG1heFkgPSB0aGlzLl9tYXhZKG1heFkpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdDb2xQaXhlbChtaW5ZLCBtYXhZLCB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/lhafpg6jnuaroo73mlrnms5VcclxuICAgIHByaXZhdGUgbWluWCh4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB4ID49IDAgPyB4IDogMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1heFgoeDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4geCA8IHRoaXMuX3dpZHRoID8geCA6IHRoaXMuX3dpZHRoIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9taW5ZKHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHkgPj0gMCA/IHkgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX21heFkoeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4geSA8IHRoaXMuX2hlaWdodCA/IHkgOiB0aGlzLl9oZWlnaHQgLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xhbXBYKHg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHggPCAwKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAoeCA+PSB0aGlzLl93aWR0aCkgcmV0dXJuIHRoaXMuX3dpZHRoIC0gMTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsYW1wWSh5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh5IDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKHkgPj0gdGhpcy5faGVpZ2h0KSByZXR1cm4gdGhpcy5faGVpZ2h0IC0gMTtcclxuICAgICAgICByZXR1cm4geTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0ZXh0dXJlKCk6IGNjLlJlbmRlclRleHR1cmUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwb2ludENvbG9yKCk6IEFycmF5PEFycmF5PG51bWJlcj4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9pbnRDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWFza1BvaW50KCk6IEFycmF5PEFycmF5PGJvb2xlYW4+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hc2tQb2ludDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGl4ZWxCdWZmZXIoKTogQXJyYXlCdWZmZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9waXhlbEJ1ZmZlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGl4ZWxDb2xvcigpOiBVaW50OEFycmF5IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGl4ZWxDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29sb3JDb3VudCgpOiBJQ29sb3JDb3VudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yQ291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJlY2VudENvbG9yKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlY2VudENvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0ZW1wb3JhcnlDb2xvcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wb3JhcnlDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJldmlvdXNMaW5lRW5kUG9zKCk6IE15VmVjMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZXZpb3VzTGluZUVuZFBvcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJldmlvdXNMaW5lRW5kUG9zVCgpOiBNeVZlYzIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcmV2aW91c0xpbmVFbmRQb3NUO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcmV2aW91c0xpbmVFbmRQb3NCKCk6IE15VmVjMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZXZpb3VzTGluZUVuZFBvc0I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByZXZpb3VzTGluZUNpcmNsZUVuZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJldmlvdXNMaW5lQ2lyY2xlRW5kO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcmV2aW91c0xpbmVXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcmV2aW91c0xpbmVXaWR0aDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOiHquiogue+qSBWZWMyXHJcbiAqL1xyXG5jbGFzcyBNeVZlYzIgaW1wbGVtZW50cyBJVmVjMiB7XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQocDogbnVtYmVyIHwgTXlWZWMyLCB5PzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHA7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gcC54O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSBwLnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/test.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1484ebWK2pJpLb4brP/XlwY', 'test');
// Script/test.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var test = /** @class */ (function (_super) {
    __extends(test, _super);
    function test() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setTime = 43200000;
        _this.showTime = 0;
        return _this;
    }
    test.prototype.start = function () {
        var _this = this;
        setInterval(function () {
            _this.showTime += 1000;
            console.log(_this.updateTime(_this.showTime, _this.setTime));
        }, 1000);
    };
    test.prototype.updateTime = function (time, countTime) {
        var hr = Math.floor(time / 3600);
        var min = Math.floor((time - (hr * 3600)) / 60);
        var sec = time - (hr * 3600) - (min * 60);
        var returnPercent = time / countTime;
        return returnPercent;
    };
    test = __decorate([
        ccclass
    ], test);
    return test;
}(cc.Component));
exports.default = test;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx0ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBbUJDO1FBbEJHLGFBQU8sR0FBVyxRQUFRLENBQUM7UUFDM0IsY0FBUSxHQUFXLENBQUMsQ0FBQzs7SUFpQnpCLENBQUM7SUFmRyxvQkFBSyxHQUFMO1FBQUEsaUJBTUM7UUFMRyxXQUFXLENBQUM7WUFDUixLQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUU5RCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0QseUJBQVUsR0FBVixVQUFXLElBQVksRUFBRSxTQUFpQjtRQUN0QyxJQUFJLEVBQUUsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLEdBQUcsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxHQUFHLEdBQVcsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELElBQUksYUFBYSxHQUFHLElBQUksR0FBRyxTQUFTLENBQUM7UUFDckMsT0FBTyxhQUFhLENBQUE7SUFFeEIsQ0FBQztJQWxCZ0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQW1CeEI7SUFBRCxXQUFDO0NBbkJELEFBbUJDLENBbkJpQyxFQUFFLENBQUMsU0FBUyxHQW1CN0M7a0JBbkJvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgc2V0VGltZTogbnVtYmVyID0gNDMyMDAwMDA7XHJcbiAgICBzaG93VGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpbWUgKz0gMTAwMDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51cGRhdGVUaW1lKHRoaXMuc2hvd1RpbWUsIHRoaXMuc2V0VGltZSkpO1xyXG5cclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVRpbWUodGltZTogbnVtYmVyLCBjb3VudFRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIHZhciBocjogbnVtYmVyID0gTWF0aC5mbG9vcih0aW1lIC8gMzYwMCk7XHJcbiAgICAgICAgdmFyIG1pbjogbnVtYmVyID0gTWF0aC5mbG9vcigodGltZSAtIChociAqIDM2MDApKSAvIDYwKTtcclxuICAgICAgICB2YXIgc2VjOiBudW1iZXIgPSB0aW1lIC0gKGhyICogMzYwMCkgLSAobWluICogNjApO1xyXG4gICAgICAgIHZhciByZXR1cm5QZXJjZW50ID0gdGltZSAvIGNvdW50VGltZTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuUGVyY2VudFxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/drawBoard/IColorCount.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ff0fcw1vdINrwGbNfC2awV', 'IColorCount');
// Script/drawBoard/IColorCount.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxkcmF3Qm9hcmRcXElDb2xvckNvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6aGP6Imy5YOP57Sg5pW46YePXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgSUNvbG9yQ291bnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDnlbbliY1pbmRleCDlg4/ntKDmlbjph49cclxuICAgICAqL1xyXG4gICAgW2tleTogbnVtYmVyXTogbnVtYmVyO1xyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/drawBoard/DrawBoardBuilder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a51e4UlxktM1oQQBIVV4BlY', 'DrawBoardBuilder');
// Script/drawBoard/DrawBoardBuilder.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DrawBoard_1 = require("./DrawBoard");
var DrawBoardModel_1 = require("./DrawBoardModel");
/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2022-08-09 下午 03:45
 * @Version 1.0
 */
var DrawBoardBuilder = /** @class */ (function () {
    function DrawBoardBuilder() {
    }
    /**
     * 設置畫板大小
     * @param {number} width - 畫板寬度
     * @param {number} height - 畫板高度
     * @returns {this}
     */
    DrawBoardBuilder.prototype.setBoardSize = function (width, height) {
        this._width = width;
        this._height = height;
        return this;
    };
    /**
     * 設置畫板繪製時使用的顏色
     * @param {cc.Color} color
     */
    DrawBoardBuilder.prototype.setColor = function (color) {
        this._recentColor = color;
        return this;
    };
    /**
     * 設置線條寬度
     * @param {number} width
     * @returns {this}
     */
    DrawBoardBuilder.prototype.setLineWidth = function (width) {
        this._lineWidth = width;
        return this;
    };
    /**
     * 線段結尾是否為圓角
     * @param {boolean} canCircleEnd
     */
    DrawBoardBuilder.prototype.setLineCircleEnd = function (canCircleEnd) {
        this._previousLineCircleEnd = canCircleEnd;
        return this;
    };
    /**
     * 動態創建的圖片對象,繪製的圖案數據,將應用到這個貼圖中
     * @param {cc.Node} targetNode - 當作顯示圖案的容器
     * @private
     */
    DrawBoardBuilder.prototype.setDraw = function (targetNode) {
        this._drawNode = new cc.Node();
        this._drawNode.width = this._width;
        this._drawNode.height = this._height;
        this._drawSprite = this._drawNode.addComponent(cc.Sprite);
        this._drawSprite.spriteFrame = new cc.SpriteFrame();
        targetNode.addChild(this._drawNode);
    };
    /**
     * 初始化 Texture
     * @private
     */
    DrawBoardBuilder.prototype.initTexture = function (drawBoardModel) {
        // console.log(this._texture);
        var pixelColor = drawBoardModel.pixelColor;
        this._texture.initWithData(pixelColor, cc.Texture2D.PixelFormat.RGBA8888, this._width, this._height);
        this._texture.setFlipY(true);
        this._drawSprite.spriteFrame.setTexture(this.texture);
    };
    /**
     * 建構畫布
     * @param {cc.Node} targetNode
     * @returns {DrawBoard}
     */
    DrawBoardBuilder.prototype.build = function (targetNode) {
        this._board = targetNode;
        this._texture = new cc.Texture2D();
        this.setDraw(targetNode);
        var drawBoardModel = new DrawBoardModel_1.default(this);
        this.initTexture(drawBoardModel);
        return new DrawBoard_1.default(drawBoardModel);
    };
    Object.defineProperty(DrawBoardBuilder.prototype, "width", {
        /**
         * 繪圖板寬度
         * @returns {number}
         */
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardBuilder.prototype, "height", {
        /**
         * 繪圖板高度
         * @returns {number}
         */
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardBuilder.prototype, "texture", {
        /**
         * 動態創建的圖片對象,再會版中繪製的圖案數據,將應用到這個貼圖中
         * @returns {cc.RenderTexture}
         */
        get: function () {
            return this._texture;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardBuilder.prototype, "color", {
        /**
         * 紀錄最近一次的像素顏色(十六進制顏色值),繪製時未指定顏色時,將使用該值
         * @returns {cc.Color}
         */
        get: function () {
            return this._recentColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardBuilder.prototype, "previousLineWidth", {
        /**
         * 線條寬度
         * @returns {number}
         */
        get: function () {
            return this._lineWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardBuilder.prototype, "previousLineCircleEnd", {
        /**
         * 線段結尾是否是圓角
         * @returns {boolean}
         */
        get: function () {
            return this._previousLineCircleEnd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardBuilder.prototype, "drawNode", {
        /**
         * 當前繪圖板顯示物件
         * @returns {cc.Node}
         */
        get: function () {
            return this._drawNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardBuilder.prototype, "drawSprite", {
        /**
         * 當前繪圖的圖片
         * @returns {cc.Sprite}
         */
        get: function () {
            return this._drawSprite;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardBuilder.prototype, "board", {
        /**
         * 當前綁定的畫板
         * @returns {cc.Node}
         */
        get: function () {
            return this._board;
        },
        enumerable: false,
        configurable: true
    });
    return DrawBoardBuilder;
}());
exports.default = DrawBoardBuilder;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxkcmF3Qm9hcmRcXERyYXdCb2FyZEJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFFcEMsbURBQThDO0FBRTlDOzs7OztHQUtHO0FBRUg7SUFBQTtJQXlOQSxDQUFDO0lBOUpHOzs7OztPQUtHO0lBQ0ksdUNBQVksR0FBbkIsVUFBb0IsS0FBYSxFQUFFLE1BQWM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG1DQUFRLEdBQWYsVUFBZ0IsS0FBZTtRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHVDQUFZLEdBQW5CLFVBQW9CLEtBQWE7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBR0Q7OztPQUdHO0lBQ0ksMkNBQWdCLEdBQXZCLFVBQXdCLFlBQXFCO1FBQ3pDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxZQUFZLENBQUM7UUFDM0MsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxrQ0FBTyxHQUFmLFVBQWdCLFVBQW1CO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7O09BR0c7SUFDSyxzQ0FBVyxHQUFuQixVQUFvQixjQUE4QjtRQUM5Qyw4QkFBOEI7UUFFOUIsSUFBTSxVQUFVLEdBQWUsY0FBYyxDQUFDLFVBQVUsQ0FBQTtRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FDdEIsVUFBVSxFQUNWLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFDakMsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsT0FBTyxDQUNmLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksZ0NBQUssR0FBWixVQUFhLFVBQW1CO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QixJQUFNLGNBQWMsR0FBRyxJQUFJLHdCQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqQyxPQUFPLElBQUksbUJBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBTUQsc0JBQUksbUNBQUs7UUFKVDs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLG9DQUFNO1FBSlY7OztXQUdHO2FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxxQ0FBTztRQUpYOzs7V0FHRzthQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBTUQsc0JBQUksbUNBQUs7UUFKVDs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLCtDQUFpQjtRQUpyQjs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLG1EQUFxQjtRQUp6Qjs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBTUQsc0JBQUksc0NBQVE7UUFKWjs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLHdDQUFVO1FBSmQ7OztXQUdHO2FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxtQ0FBSztRQUpUOzs7V0FHRzthQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ0wsdUJBQUM7QUFBRCxDQXpOQSxBQXlOQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyYXdCb2FyZCBmcm9tIFwiLi9EcmF3Qm9hcmRcIjtcclxuaW1wb3J0IElEcmF3Qm9yZEluaXRpYWxpemVEYXRhIGZyb20gXCIuL0lEcmF3Qm9yZEluaXRpYWxpemVEYXRhXCI7XHJcbmltcG9ydCBEcmF3Qm9hcmRNb2RlbCBmcm9tIFwiLi9EcmF3Qm9hcmRNb2RlbFwiO1xyXG5cclxuLyoqXHJcbiAqIEBBdXRob3Ig6JWt56uL5ZOBXHJcbiAqIEBEZXNjcmlwdGlvbiBUT0RPXHJcbiAqIEBEYXRlIDIwMjItMDgtMDkg5LiL5Y2IIDAzOjQ1XHJcbiAqIEBWZXJzaW9uIDEuMFxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdCb2FyZEJ1aWxkZXIgaW1wbGVtZW50cyBJRHJhd0JvcmRJbml0aWFsaXplRGF0YSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnuarlnJbmnb/lr6zluqZcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog57mq5ZyW5p2/6auY5bqmXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDli5XmhYvlibXlu7rnmoTlnJbniYflsI3osaEs5YaN5pyD54mI5Lit57mq6KO955qE5ZyW5qGI5pW45pOaLOWwh+aHieeUqOWIsOmAmeWAi+iyvOWcluS4rVxyXG4gICAgICogQHR5cGUge2NjLlRleHR1cmUyRH1cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfdGV4dHVyZTogY2MuVGV4dHVyZTJEO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog57SA6YyE5pyA6L+R5LiA5qyh55qE5YOP57Sg6aGP6ImyKOWNgeWFremAsuWItumhj+iJsuWAvCks57mq6KO95pmC5pyq5oyH5a6a6aGP6Imy5pmCLOWwh+S9v+eUqOipsuWAvFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3JlY2VudENvbG9yOiBjYy5Db2xvcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe3muaineWvrOW6plxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2xpbmVXaWR0aDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog57ea5q6157WQ5bC+5piv5ZCm5piv5ZyT6KeSXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3ByZXZpb3VzTGluZUNpcmNsZUVuZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeVtuWJjee5quWcluadv+mhr+ekuueJqeS7tlxyXG4gICAgICogQHR5cGUge2NjLk5vZGV9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9kcmF3Tm9kZTogY2MuTm9kZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeVtuWJjee5quWclueahOWclueJh1xyXG4gICAgICogQHR5cGUge2NjLlNwcml0ZX1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZHJhd1Nwcml0ZTogY2MuU3ByaXRlO1xyXG4gICAgcHJpdmF0ZSBfYm9hcmQ6IGNjLk5vZGU7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Kit572u55Wr5p2/5aSn5bCPXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggLSDnlavmnb/lr6zluqZcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSDnlavmnb/pq5jluqZcclxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0Qm9hcmRTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoqK3nva7nlavmnb/nuaroo73mmYLkvb/nlKjnmoTpoY/oibJcclxuICAgICAqIEBwYXJhbSB7Y2MuQ29sb3J9IGNvbG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRDb2xvcihjb2xvcjogY2MuQ29sb3IpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9yZWNlbnRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Kit572u57ea5qKd5a+s5bqmXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0TGluZVdpZHRoKHdpZHRoOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9saW5lV2lkdGggPSB3aWR0aDtcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe3muautee1kOWwvuaYr+WQpueCuuWck+inklxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjYW5DaXJjbGVFbmRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldExpbmVDaXJjbGVFbmQoY2FuQ2lyY2xlRW5kOiBib29sZWFuKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNMaW5lQ2lyY2xlRW5kID0gY2FuQ2lyY2xlRW5kO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YuV5oWL5Ym15bu655qE5ZyW54mH5bCN6LGhLOe5quijveeahOWcluahiOaVuOaTmizlsIfmh4nnlKjliLDpgJnlgIvosrzlnJbkuK1cclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gdGFyZ2V0Tm9kZSAtIOeVtuS9nOmhr+ekuuWcluahiOeahOWuueWZqFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZXREcmF3KHRhcmdldE5vZGU6IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9kcmF3Tm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgdGhpcy5fZHJhd05vZGUud2lkdGggPSB0aGlzLl93aWR0aDtcclxuICAgICAgICB0aGlzLl9kcmF3Tm9kZS5oZWlnaHQgPSB0aGlzLl9oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5fZHJhd1Nwcml0ZSA9IHRoaXMuX2RyYXdOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHRoaXMuX2RyYXdTcHJpdGUuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcclxuICAgICAgICB0YXJnZXROb2RlLmFkZENoaWxkKHRoaXMuX2RyYXdOb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMliBUZXh0dXJlXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRUZXh0dXJlKGRyYXdCb2FyZE1vZGVsOiBEcmF3Qm9hcmRNb2RlbCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX3RleHR1cmUpO1xyXG5cclxuICAgICAgICBjb25zdCBwaXhlbENvbG9yOiBVaW50OEFycmF5ID0gZHJhd0JvYXJkTW9kZWwucGl4ZWxDb2xvclxyXG4gICAgICAgIHRoaXMuX3RleHR1cmUuaW5pdFdpdGhEYXRhKFxyXG4gICAgICAgICAgICBwaXhlbENvbG9yLFxyXG4gICAgICAgICAgICBjYy5UZXh0dXJlMkQuUGl4ZWxGb3JtYXQuUkdCQTg4ODgsXHJcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLl9oZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuX3RleHR1cmUuc2V0RmxpcFkodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fZHJhd1Nwcml0ZS5zcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHRoaXMudGV4dHVyZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlu7rmp4vnlavluINcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gdGFyZ2V0Tm9kZVxyXG4gICAgICogQHJldHVybnMge0RyYXdCb2FyZH1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGJ1aWxkKHRhcmdldE5vZGU6IGNjLk5vZGUpOiBEcmF3Qm9hcmQge1xyXG4gICAgICAgIHRoaXMuX2JvYXJkID0gdGFyZ2V0Tm9kZTtcclxuICAgICAgICB0aGlzLl90ZXh0dXJlID0gbmV3IGNjLlRleHR1cmUyRCgpO1xyXG4gICAgICAgIHRoaXMuc2V0RHJhdyh0YXJnZXROb2RlKTtcclxuICAgICAgICBjb25zdCBkcmF3Qm9hcmRNb2RlbCA9IG5ldyBEcmF3Qm9hcmRNb2RlbCh0aGlzKTtcclxuICAgICAgICB0aGlzLmluaXRUZXh0dXJlKGRyYXdCb2FyZE1vZGVsKTtcclxuICAgICAgICByZXR1cm4gbmV3IERyYXdCb2FyZChkcmF3Qm9hcmRNb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnuarlnJbmnb/lr6zluqZcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe5quWcluadv+mrmOW6plxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDli5XmhYvlibXlu7rnmoTlnJbniYflsI3osaEs5YaN5pyD54mI5Lit57mq6KO955qE5ZyW5qGI5pW45pOaLOWwh+aHieeUqOWIsOmAmeWAi+iyvOWcluS4rVxyXG4gICAgICogQHJldHVybnMge2NjLlJlbmRlclRleHR1cmV9XHJcbiAgICAgKi9cclxuICAgIGdldCB0ZXh0dXJlKCk6IGNjLlRleHR1cmUyRCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDntIDpjITmnIDov5HkuIDmrKHnmoTlg4/ntKDpoY/oibIo5Y2B5YWt6YCy5Yi26aGP6Imy5YC8KSznuaroo73mmYLmnKrmjIflrprpoY/oibLmmYIs5bCH5L2/55So6Kmy5YC8XHJcbiAgICAgKiBAcmV0dXJucyB7Y2MuQ29sb3J9XHJcbiAgICAgKi9cclxuICAgIGdldCBjb2xvcigpOiBjYy5Db2xvciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlY2VudENvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57ea5qKd5a+s5bqmXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXQgcHJldmlvdXNMaW5lV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGluZVdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57ea5q6157WQ5bC+5piv5ZCm5piv5ZyT6KeSXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgZ2V0IHByZXZpb3VzTGluZUNpcmNsZUVuZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJldmlvdXNMaW5lQ2lyY2xlRW5kO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55W25YmN57mq5ZyW5p2/6aGv56S654mp5Lu2XHJcbiAgICAgKiBAcmV0dXJucyB7Y2MuTm9kZX1cclxuICAgICAqL1xyXG4gICAgZ2V0IGRyYXdOb2RlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kcmF3Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeVtuWJjee5quWclueahOWclueJh1xyXG4gICAgICogQHJldHVybnMge2NjLlNwcml0ZX1cclxuICAgICAqL1xyXG4gICAgZ2V0IGRyYXdTcHJpdGUoKTogY2MuU3ByaXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd1Nwcml0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeVtuWJjee2geWumueahOeVq+adv1xyXG4gICAgICogQHJldHVybnMge2NjLk5vZGV9XHJcbiAgICAgKi9cclxuICAgIGdldCBib2FyZCgpOiBjYy5Ob2RlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYm9hcmQ7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8e4b00XT51O46mCkdkAdil3', 'Controll');
// Script/Controll.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
var property = cc._decorator.property;
var Modle_1 = require("./Modle");
/**
 * @Author 蕭立品
 * @Description 支票物件控制器
 * @Date 2022-08-08 下午 02:46
 * @Version 1.0
 */
var ChequeController = /** @class */ (function (_super) {
    __extends(ChequeController, _super);
    function ChequeController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chequePrefab = null;
        _this.drawBoardNode = null;
        return _this;
    }
    ChequeController.prototype.onLoad = function () {
        fcc.configMgr.build();
        fcc.sceneMgr
            .setDesignHeight(720)
            .setDesignWidth(1280)
            .updateSize(fcc.type.SceneStyleType.HORIZONTAL)
            .startListener(500);
        this.chequeModel = new Modle_1.default();
        this.chequeModel.initDrawBoardData(this.drawBoardNode, cc.color().fromHEX("#ff8600"), 5);
        this.initialTouchEvent();
    };
    ChequeController.prototype.initialTouchEvent = function () {
        this.drawBoardNode.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.drawBoardNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.drawBoardNode.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
    };
    ChequeController.prototype.start = function () {
    };
    ChequeController.prototype.test = function (e) {
        console.log(e);
    };
    ChequeController.prototype.touchStartEvent = function (eventTouch) {
        var position = eventTouch.getLocation();
        // const nowPosition: cc.Vec2 = cc.v2(position.x, this.drawBoardNode.height - position.y);
        this.chequeModel.touchStartAction(position);
    };
    ChequeController.prototype.touchMoveEvent = function (eventTouch) {
        var position = eventTouch.getLocation();
        // const nowPosition: cc.Vec2 = cc.v2(position.x, this.drawBoardNode.height - position.y);
        this.chequeModel.touchMoveToAction(position);
    };
    ChequeController.prototype.touchEndEvent = function (eventTouch) {
        var nowPosition = eventTouch.getLocation();
    };
    ChequeController.prototype.buttonInit = function (componentTrget, component, callBack, buttonTarget, callbackValue) {
        var event = new cc.Component.EventHandler();
        event.target = componentTrget;
        event.component = component;
        event.handler = callBack;
        if (callbackValue)
            event.customEventData = callbackValue;
        console.log(buttonTarget);
        buttonTarget.clickEvents.push(event);
    };
    __decorate([
        property(cc.Prefab)
    ], ChequeController.prototype, "chequePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], ChequeController.prototype, "drawBoardNode", void 0);
    ChequeController = __decorate([
        ccclass
    ], ChequeController);
    return ChequeController;
}(cc.Component));
exports.default = ChequeController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFPLE9BQU8sR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztBQUN2QyxJQUFPLFFBQVEsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztBQUN6QyxpQ0FBa0M7QUFHbEM7Ozs7O0dBS0c7QUFFSDtJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQWlFQztRQTlEVyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixtQkFBYSxHQUFZLElBQUksQ0FBQzs7SUEyRDFDLENBQUM7SUF0RGEsaUNBQU0sR0FBaEI7UUFDSSxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRO2FBQ1AsZUFBZSxDQUFDLEdBQUcsQ0FBQzthQUNwQixjQUFjLENBQUMsSUFBSSxDQUFDO2FBQ3BCLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7YUFDOUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxlQUFXLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUM5QixJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELDRDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFUyxnQ0FBSyxHQUFmO0lBRUEsQ0FBQztJQUNELCtCQUFJLEdBQUosVUFBSyxDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsMENBQWUsR0FBZixVQUFnQixVQUErQjtRQUMzQyxJQUFNLFFBQVEsR0FBWSxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkQsMEZBQTBGO1FBQzFGLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELHlDQUFjLEdBQWQsVUFBZSxVQUErQjtRQUMxQyxJQUFNLFFBQVEsR0FBWSxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkQsMEZBQTBGO1FBQzFGLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHdDQUFhLEdBQWIsVUFBYyxVQUErQjtRQUN6QyxJQUFNLFdBQVcsR0FBWSxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUNELHFDQUFVLEdBQVYsVUFBVyxjQUF1QixFQUFFLFNBQWlCLEVBQUUsUUFBZ0IsRUFBRSxZQUF1QixFQUFFLGFBQXNCO1FBQ3BILElBQUksS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QyxLQUFLLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztRQUM5QixLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUM1QixLQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLGFBQWE7WUFDYixLQUFLLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQTtRQUV6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTFCLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUE3REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswREFDbUI7SUFHdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyREFDb0I7SUFOckIsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0FpRXBDO0lBQUQsdUJBQUM7Q0FqRUQsQUFpRUMsQ0FqRTZDLEVBQUUsQ0FBQyxTQUFTLEdBaUV6RDtrQkFqRW9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjY2NsYXNzID0gY2MuX2RlY29yYXRvci5jY2NsYXNzO1xyXG5pbXBvcnQgcHJvcGVydHkgPSBjYy5fZGVjb3JhdG9yLnByb3BlcnR5O1xyXG5pbXBvcnQgQ2hlcXVlTW9kZWwgZnJvbSBcIi4vTW9kbGVcIjtcclxuXHJcblxyXG4vKipcclxuICogQEF1dGhvciDola3nq4vlk4FcclxuICogQERlc2NyaXB0aW9uIOaUr+elqOeJqeS7tuaOp+WItuWZqFxyXG4gKiBARGF0ZSAyMDIyLTA4LTA4IOS4i+WNiCAwMjo0NlxyXG4gKiBAVmVyc2lvbiAxLjBcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZXF1ZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIGNoZXF1ZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgZHJhd0JvYXJkTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVxdWVNb2RlbDogQ2hlcXVlTW9kZWw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgZmNjLmNvbmZpZ01nci5idWlsZCgpXHJcbiAgICAgICAgZmNjLnNjZW5lTWdyXHJcbiAgICAgICAgICAgIC5zZXREZXNpZ25IZWlnaHQoNzIwKVxyXG4gICAgICAgICAgICAuc2V0RGVzaWduV2lkdGgoMTI4MClcclxuICAgICAgICAgICAgLnVwZGF0ZVNpemUoZmNjLnR5cGUuU2NlbmVTdHlsZVR5cGUuSE9SSVpPTlRBTClcclxuICAgICAgICAgICAgLnN0YXJ0TGlzdGVuZXIoNTAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVxdWVNb2RlbCA9IG5ldyBDaGVxdWVNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMuY2hlcXVlTW9kZWwuaW5pdERyYXdCb2FyZERhdGEoXHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0JvYXJkTm9kZSwgY2MuY29sb3IoKS5mcm9tSEVYKFwiI2ZmODYwMFwiKSwgNSk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsVG91Y2hFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxUb3VjaEV2ZW50KCkge1xyXG4gICAgICAgIHRoaXMuZHJhd0JvYXJkTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0RXZlbnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZHJhd0JvYXJkTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZUV2ZW50LCB0aGlzKTtcclxuICAgICAgICB0aGlzLmRyYXdCb2FyZE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kRXZlbnQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICB0ZXN0KGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuXHJcbiAgICB0b3VjaFN0YXJ0RXZlbnQoZXZlbnRUb3VjaDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uOiBjYy5WZWMyID0gZXZlbnRUb3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIC8vIGNvbnN0IG5vd1Bvc2l0aW9uOiBjYy5WZWMyID0gY2MudjIocG9zaXRpb24ueCwgdGhpcy5kcmF3Qm9hcmROb2RlLmhlaWdodCAtIHBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHRoaXMuY2hlcXVlTW9kZWwudG91Y2hTdGFydEFjdGlvbihwb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hNb3ZlRXZlbnQoZXZlbnRUb3VjaDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uOiBjYy5WZWMyID0gZXZlbnRUb3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIC8vIGNvbnN0IG5vd1Bvc2l0aW9uOiBjYy5WZWMyID0gY2MudjIocG9zaXRpb24ueCwgdGhpcy5kcmF3Qm9hcmROb2RlLmhlaWdodCAtIHBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHRoaXMuY2hlcXVlTW9kZWwudG91Y2hNb3ZlVG9BY3Rpb24ocG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoRW5kRXZlbnQoZXZlbnRUb3VjaDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGNvbnN0IG5vd1Bvc2l0aW9uOiBjYy5WZWMyID0gZXZlbnRUb3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uSW5pdChjb21wb25lbnRUcmdldDogY2MuTm9kZSwgY29tcG9uZW50OiBzdHJpbmcsIGNhbGxCYWNrOiBzdHJpbmcsIGJ1dHRvblRhcmdldDogY2MuQnV0dG9uLCBjYWxsYmFja1ZhbHVlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGV2ZW50ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBldmVudC50YXJnZXQgPSBjb21wb25lbnRUcmdldDtcclxuICAgICAgICBldmVudC5jb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgZXZlbnQuaGFuZGxlciA9IGNhbGxCYWNrO1xyXG4gICAgICAgIGlmIChjYWxsYmFja1ZhbHVlKVxyXG4gICAgICAgICAgICBldmVudC5jdXN0b21FdmVudERhdGEgPSBjYWxsYmFja1ZhbHVlXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvblRhcmdldCk7XHJcblxyXG4gICAgICAgIGJ1dHRvblRhcmdldC5jbGlja0V2ZW50cy5wdXNoKGV2ZW50KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/drawBoard/IDrawBordInitializeData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f2a4JpikVEYJWXat2lVoaT', 'IDrawBordInitializeData');
// Script/drawBoard/IDrawBordInitializeData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxkcmF3Qm9hcmRcXElEcmF3Qm9yZEluaXRpYWxpemVEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQEF1dGhvciDola3nq4vlk4FcclxuICogQERlc2NyaXB0aW9uIFRPRE9cclxuICogQERhdGUgMjAyMi0wOC0xMCDkuIvljYggMDU6MzRcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgSURyYXdCb3JkSW5pdGlhbGl6ZURhdGEge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog55W25YmN57aB5a6a55qE55Wr5p2/XHJcbiAgICAgKiBAdHlwZSB7Y2MuTm9kZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGJvYXJkOiBjYy5Ob2RlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog57mq5ZyW5p2/5a+s5bqmXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe5quWcluadv+mrmOW6plxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YuV5oWL5Ym15bu655qE5ZyW54mH5bCN6LGhLOWGjeacg+eJiOS4ree5quijveeahOWcluahiOaVuOaTmizlsIfmh4nnlKjliLDpgJnlgIvosrzlnJbkuK1cclxuICAgICAqIEB0eXBlIHtjYy5UZXh0dXJlMkR9XHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHRleHR1cmU6IGNjLlRleHR1cmUyRDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+eVq+ethumhj+iJslxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGNvbG9yOiBjYy5Db2xvcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe3muaineWvrOW6plxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByZXZpb3VzTGluZVdpZHRoOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnt5rmrrXntZDlsL7mmK/lkKbkuovlnJPop5JcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJldmlvdXNMaW5lQ2lyY2xlRW5kOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog55W25YmN57mq5ZyW5p2/6aGv56S654mp5Lu2XHJcbiAgICAgKi9cclxuICAgIGRyYXdOb2RlOiBjYy5Ob2RlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog55W25YmN57mq5ZyW55qE5ZyW54mHXHJcbiAgICAgKi9cclxuICAgIGRyYXdTcHJpdGU6IGNjLlNwcml0ZTtcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/drawBoard/DrawBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '068dbrO1ORCbbFCAfDtZ4uX', 'DrawBoard');
// Script/drawBoard/DrawBoard.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author 蕭立品
 * @Description 畫板
 * @Date 2022-08-09 上午 11:44
 * @Version 1.0
 */
var DrawBoard = /** @class */ (function () {
    /**
     * 創建畫板
     * @param {drawBordData} drawBordData - 初始化資料
     */
    function DrawBoard(drawBordData) {
        this.model = drawBordData;
    }
    /**
     * 移動畫筆到指定的位置,使用 lineTo() 可以將該點與中點連成一條線
     * @param {cc.Vec2} position
     */
    DrawBoard.prototype.moveTo = function (position) {
        var loc = this.model.transitionPosition(position);
        var x = Math.round(loc.x);
        var y = Math.round(loc.y);
        this.model.previousLineEndPos.set(x, y);
        this.model.previousLineEndPosT.set(x, y);
        this.model.previousLineEndPosB.set(x, y);
    };
    /**
     * 繪製到指定坐標的直線，起點為上一次繪製的直線的終點，使用默認的顏色、寬度和線段端點樣式
     * @param {cc.Vec2} position
     */
    DrawBoard.prototype.lineTo = function (position) {
        var loc = this.model.transitionPosition(position);
        var x = Math.round(loc.x);
        var y = Math.round(loc.y);
        if (this.model.previousLineEndPos.x == x && this.model.previousLineEndPos.y == y)
            return;
        var width = this.model.previousLineWidth;
        var circleEnd = this.model.previousLineCircleEnd;
        var beforeX = this.model.previousLineEndPos.x;
        var beforeY = this.model.previousLineEndPos.y;
        var afterX = x;
        var afterY = y;
        if (beforeX > afterX) {
            //強制轉換,讓after 永遠大於 before
            beforeX = afterX;
            beforeY = afterY;
            afterX = this.model.previousLineEndPos.x;
            afterY = this.model.previousLineEndPos.y;
        }
        var offsetX = 0;
        var offsetY = 0;
        var rateK = 1;
        if (beforeX == afterX) {
            offsetX = Math.round(width * 0.5);
        }
        else if (beforeY == afterY) {
            offsetY = Math.round(width * 0.5);
        }
        else {
            var k = (afterY - beforeY) / (afterX - beforeX);
            rateK = Math.sqrt(k * k + 1);
            offsetY = width * 0.5 / rateK;
            offsetX = Math.round(offsetY * k);
            offsetY = Math.round(offsetY);
        }
        if (!circleEnd) {
            //如果當前繪製頂點無須圓角
            if (this.model.previousLineEndPos.x != this.model.previousLineEndPosT.x
                || this.model.previousLineEndPos.y != this.model.previousLineEndPosT.y) {
                var p1_1 = this.model.buildMyVec2(this.model.previousLineEndPos.x - offsetX, this.model.previousLineEndPos.y + offsetY);
                var p2_1 = this.model.buildMyVec2(this.model.previousLineEndPos.x + offsetX, this.model.previousLineEndPos.y - offsetY);
                this.model.drawTriangle([p1_1, p2_1, this.model.previousLineEndPosT]);
                this.model.drawTriangle([p1_1, p2_1, this.model.previousLineEndPosB]);
            }
        }
        else {
            this.model.drawCircle(beforeX, beforeY, width * 0.5);
            this.model.drawCircle(afterX, afterY, width * 0.5);
        }
        var p1 = this.model.buildMyVec2(beforeX, beforeY);
        var p2 = this.model.buildMyVec2(afterX, afterY);
        this.model.drawLine(p1, p2, width, offsetX, offsetY, rateK);
        this.model.previousLineEndPos.set(x, y);
        this.model.previousLineEndPosT.set(x - offsetX, y + offsetY);
        this.model.previousLineEndPosB.set(x + offsetX, y - offsetY);
    };
    /**
     * 獲取當前畫板中紀錄的每個像素位置顏色的數據
     * @returns {Uint8Array}
     */
    DrawBoard.prototype.getPixelColorData = function () {
        return this.model.pixelColor;
    };
    /**
     * 將畫布上玩家繪製的筆跡響應到圖片中
     */
    DrawBoard.prototype.updateTexture = function () {
        var pixelColor = this.getPixelColorData();
        var texture = this.model.texture;
        console.log(this.model.texture);
        var opts = texture["_getOpts"]();
        opts.image = pixelColor;
        opts.images = [opts.image];
        texture.update(opts);
    };
    /**
     * 清空畫布
     */
    DrawBoard.prototype.empitDrawBord = function () {
        this.model.reset();
    };
    return DrawBoard;
}());
exports.default = DrawBoard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxkcmF3Qm9hcmRcXERyYXdCb2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7OztHQUtHO0FBQ0g7SUFJSTs7O09BR0c7SUFDSCxtQkFBWSxZQUE0QjtRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztJQUM5QixDQUFDO0lBR0Q7OztPQUdHO0lBQ0ksMEJBQU0sR0FBYixVQUFjLFFBQWlCO1FBQzNCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUdEOzs7T0FHRztJQUNJLDBCQUFNLEdBQWIsVUFBYyxRQUFpQjtRQUMzQixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMs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Ozs7T0FHRztJQUNJLHFDQUFpQixHQUF4QjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksaUNBQWEsR0FBcEI7UUFDSSxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM1QyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFaEMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNJLGlDQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQWpIQSxBQWlIQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyYXdCb2FyZE1vZGVsIGZyb20gXCIuL0RyYXdCb2FyZE1vZGVsXCI7XHJcblxyXG4vKipcclxuICogQEF1dGhvciDola3nq4vlk4FcclxuICogQERlc2NyaXB0aW9uIOeVq+adv1xyXG4gKiBARGF0ZSAyMDIyLTA4LTA5IOS4iuWNiCAxMTo0NFxyXG4gKiBAVmVyc2lvbiAxLjBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdCb2FyZCB7XHJcblxyXG4gICAgcHJpdmF0ZSBtb2RlbDogRHJhd0JvYXJkTW9kZWw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlibXlu7rnlavmnb9cclxuICAgICAqIEBwYXJhbSB7ZHJhd0JvcmREYXRhfSBkcmF3Qm9yZERhdGEgLSDliJ3lp4vljJbos4fmlplcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZHJhd0JvcmREYXRhOiBEcmF3Qm9hcmRNb2RlbCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBkcmF3Qm9yZERhdGE7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog56e75YuV55Wr562G5Yiw5oyH5a6a55qE5L2N572uLOS9v+eUqCBsaW5lVG8oKSDlj6/ku6XlsIfoqbLpu57oiIfkuK3pu57pgKPmiJDkuIDmop3nt5pcclxuICAgICAqIEBwYXJhbSB7Y2MuVmVjMn0gcG9zaXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIG1vdmVUbyhwb3NpdGlvbjogY2MuVmVjMikge1xyXG4gICAgICAgIGNvbnN0IGxvYyA9IHRoaXMubW9kZWwudHJhbnNpdGlvblBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCB4ID0gTWF0aC5yb3VuZChsb2MueCk7XHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGgucm91bmQobG9jLnkpO1xyXG4gICAgICAgIHRoaXMubW9kZWwucHJldmlvdXNMaW5lRW5kUG9zLnNldCh4LCB5KTtcclxuICAgICAgICB0aGlzLm1vZGVsLnByZXZpb3VzTGluZUVuZFBvc1Quc2V0KHgsIHkpO1xyXG4gICAgICAgIHRoaXMubW9kZWwucHJldmlvdXNMaW5lRW5kUG9zQi5zZXQoeCwgeSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57mq6KO95Yiw5oyH5a6a5Z2Q5qiZ55qE55u057ea77yM6LW36bue54K65LiK5LiA5qyh57mq6KO955qE55u057ea55qE57WC6bue77yM5L2/55So6buY6KqN55qE6aGP6Imy44CB5a+s5bqm5ZKM57ea5q6156uv6bue5qij5byPXHJcbiAgICAgKiBAcGFyYW0ge2NjLlZlYzJ9IHBvc2l0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaW5lVG8ocG9zaXRpb246IGNjLlZlYzIpIHtcclxuICAgICAgICBjb25zdCBsb2MgPSB0aGlzLm1vZGVsLnRyYW5zaXRpb25Qb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgeCA9IE1hdGgucm91bmQobG9jLngpO1xyXG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKGxvYy55KTtcclxuICAgICAgICBpZiAodGhpcy5tb2RlbC5wcmV2aW91c0xpbmVFbmRQb3MueCA9PSB4ICYmIHRoaXMubW9kZWwucHJldmlvdXNMaW5lRW5kUG9zLnkgPT0geSkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5tb2RlbC5wcmV2aW91c0xpbmVXaWR0aDtcclxuICAgICAgICBjb25zdCBjaXJjbGVFbmQgPSB0aGlzLm1vZGVsLnByZXZpb3VzTGluZUNpcmNsZUVuZDtcclxuICAgICAgICBsZXQgYmVmb3JlWCA9IHRoaXMubW9kZWwucHJldmlvdXNMaW5lRW5kUG9zLng7XHJcbiAgICAgICAgbGV0IGJlZm9yZVkgPSB0aGlzLm1vZGVsLnByZXZpb3VzTGluZUVuZFBvcy55O1xyXG4gICAgICAgIGxldCBhZnRlclggPSB4O1xyXG4gICAgICAgIGxldCBhZnRlclkgPSB5O1xyXG4gICAgICAgIGlmIChiZWZvcmVYID4gYWZ0ZXJYKSB7XHJcbiAgICAgICAgICAgIC8v5by35Yi26L2J5o+bLOiuk2FmdGVyIOawuOmBoOWkp+aWvCBiZWZvcmVcclxuICAgICAgICAgICAgYmVmb3JlWCA9IGFmdGVyWDtcclxuICAgICAgICAgICAgYmVmb3JlWSA9IGFmdGVyWTtcclxuICAgICAgICAgICAgYWZ0ZXJYID0gdGhpcy5tb2RlbC5wcmV2aW91c0xpbmVFbmRQb3MueDtcclxuICAgICAgICAgICAgYWZ0ZXJZID0gdGhpcy5tb2RlbC5wcmV2aW91c0xpbmVFbmRQb3MueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG9mZnNldFggPSAwO1xyXG4gICAgICAgIGxldCBvZmZzZXRZID0gMDtcclxuICAgICAgICBsZXQgcmF0ZUsgPSAxO1xyXG4gICAgICAgIGlmIChiZWZvcmVYID09IGFmdGVyWCkge1xyXG4gICAgICAgICAgICBvZmZzZXRYID0gTWF0aC5yb3VuZCh3aWR0aCAqIDAuNSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChiZWZvcmVZID09IGFmdGVyWSkge1xyXG4gICAgICAgICAgICBvZmZzZXRZID0gTWF0aC5yb3VuZCh3aWR0aCAqIDAuNSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGsgPSAoYWZ0ZXJZIC0gYmVmb3JlWSkgLyAoYWZ0ZXJYIC0gYmVmb3JlWCk7XHJcbiAgICAgICAgICAgIHJhdGVLID0gTWF0aC5zcXJ0KGsgKiBrICsgMSk7XHJcbiAgICAgICAgICAgIG9mZnNldFkgPSB3aWR0aCAqIDAuNSAvIHJhdGVLO1xyXG4gICAgICAgICAgICBvZmZzZXRYID0gTWF0aC5yb3VuZChvZmZzZXRZICogayk7XHJcbiAgICAgICAgICAgIG9mZnNldFkgPSBNYXRoLnJvdW5kKG9mZnNldFkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNpcmNsZUVuZCkge1xyXG4gICAgICAgICAgICAvL+WmguaenOeVtuWJjee5quijvemggum7nueEoemgiOWck+inklxyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbC5wcmV2aW91c0xpbmVFbmRQb3MueCAhPSB0aGlzLm1vZGVsLnByZXZpb3VzTGluZUVuZFBvc1QueFxyXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5tb2RlbC5wcmV2aW91c0xpbmVFbmRQb3MueSAhPSB0aGlzLm1vZGVsLnByZXZpb3VzTGluZUVuZFBvc1QueSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHAxID0gdGhpcy5tb2RlbC5idWlsZE15VmVjMih0aGlzLm1vZGVsLnByZXZpb3VzTGluZUVuZFBvcy54IC0gb2Zmc2V0WCwgdGhpcy5tb2RlbC5wcmV2aW91c0xpbmVFbmRQb3MueSArIG9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHAyID0gdGhpcy5tb2RlbC5idWlsZE15VmVjMih0aGlzLm1vZGVsLnByZXZpb3VzTGluZUVuZFBvcy54ICsgb2Zmc2V0WCwgdGhpcy5tb2RlbC5wcmV2aW91c0xpbmVFbmRQb3MueSAtIG9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5kcmF3VHJpYW5nbGUoW3AxLCBwMiwgdGhpcy5tb2RlbC5wcmV2aW91c0xpbmVFbmRQb3NUXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmRyYXdUcmlhbmdsZShbcDEsIHAyLCB0aGlzLm1vZGVsLnByZXZpb3VzTGluZUVuZFBvc0JdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZHJhd0NpcmNsZShiZWZvcmVYLCBiZWZvcmVZLCB3aWR0aCAqIDAuNSk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZHJhd0NpcmNsZShhZnRlclgsIGFmdGVyWSwgd2lkdGggKiAwLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwMSA9IHRoaXMubW9kZWwuYnVpbGRNeVZlYzIoYmVmb3JlWCwgYmVmb3JlWSk7XHJcbiAgICAgICAgY29uc3QgcDIgPSB0aGlzLm1vZGVsLmJ1aWxkTXlWZWMyKGFmdGVyWCwgYWZ0ZXJZKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmRyYXdMaW5lKHAxLCBwMiwgd2lkdGgsIG9mZnNldFgsIG9mZnNldFksIHJhdGVLKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RlbC5wcmV2aW91c0xpbmVFbmRQb3Muc2V0KHgsIHkpO1xyXG4gICAgICAgIHRoaXMubW9kZWwucHJldmlvdXNMaW5lRW5kUG9zVC5zZXQoeCAtIG9mZnNldFgsIHkgKyBvZmZzZXRZKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnByZXZpb3VzTGluZUVuZFBvc0Iuc2V0KHggKyBvZmZzZXRYLCB5IC0gb2Zmc2V0WSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnjbLlj5bnlbbliY3nlavmnb/kuK3ntIDpjITnmoTmr4/lgIvlg4/ntKDkvY3nva7poY/oibLnmoTmlbjmk5pcclxuICAgICAqIEByZXR1cm5zIHtVaW50OEFycmF5fVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UGl4ZWxDb2xvckRhdGEoKTogVWludDhBcnJheSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwucGl4ZWxDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWwh+eVq+W4g+S4iueOqeWutue5quijveeahOethui3oemfv+aHieWIsOWclueJh+S4rVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlVGV4dHVyZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBwaXhlbENvbG9yID0gdGhpcy5nZXRQaXhlbENvbG9yRGF0YSgpO1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSB0aGlzLm1vZGVsLnRleHR1cmU7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tb2RlbC50ZXh0dXJlKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0cyA9IHRleHR1cmVbXCJfZ2V0T3B0c1wiXSgpO1xyXG4gICAgICAgIG9wdHMuaW1hZ2UgPSBwaXhlbENvbG9yO1xyXG4gICAgICAgIG9wdHMuaW1hZ2VzID0gW29wdHMuaW1hZ2VdO1xyXG4gICAgICAgIHRleHR1cmUudXBkYXRlKG9wdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF56m655Wr5biDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbXBpdERyYXdCb3JkKCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwucmVzZXQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/drawBoard/IVec2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d275RTiIVFWqGK/XPBYGbL', 'IVec2');
// Script/drawBoard/IVec2.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxkcmF3Qm9hcmRcXElWZWMyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQEF1dGhvciDola3nq4vlk4FcclxuICogQERlc2NyaXB0aW9uIFRPRE9cclxuICogQERhdGUgMjAyMi0wOS0xNSDkuIvljYggMDQ6NDVcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElWZWMyIHtcclxuICAgIC8qKlxyXG4gICAgICogWOi7uOS9jee9rlxyXG4gICAgICovXHJcbiAgICB4OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBZ6Lu45L2N572uXHJcbiAgICAgKi9cclxuICAgIHk6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOeVtuWJjeS9jee9rlxyXG4gICAgICogQHBhcmFtIHtudW1iZXIgfCBJVmVjMn0gcFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICAgICAqL1xyXG4gICAgc2V0KHA6IG51bWJlciB8IElWZWMyLCB5PzogbnVtYmVyKVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
