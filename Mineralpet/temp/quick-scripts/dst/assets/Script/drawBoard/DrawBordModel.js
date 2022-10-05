
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