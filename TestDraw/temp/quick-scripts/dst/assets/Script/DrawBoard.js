
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/DrawBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c93381f785PmbFMvbZfLmsj', 'DrawBoard');
// Script/DrawBoard.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawBoard = void 0;
/**
 * 画板：
 * 可使用任意颜色绘制矩形，三角形，圆，直线，并统计每种颜色的像素个数;
 * 擦除图案时，设置画板的颜色为透明色再进行绘制即可;
 * 使用的坐标系为原点在左上角，X轴向右为正，Y轴向下为正。
 */
var DrawBoard = /** @class */ (function () {
    /**
     * 可对每个像素点绘制的画板，画板使用的坐标系原点为左下角，X轴向右为正，Y轴向上为正
     * @param width     画板宽度
     * @param height    画板高度
     * @param data      指定画板初始内容，参数为记录颜色分量的一维数组，不传入参数时，画板中全部像素为透明
     */
    function DrawBoard(width, height, data) {
        this.init(width, height, data);
    }
    Object.defineProperty(DrawBoard.prototype, "width", {
        /**画板宽度 */
        get: function () { return this._witdh; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoard.prototype, "height", {
        /**画板高度 */
        get: function () { return this._height; },
        enumerable: false,
        configurable: true
    });
    /**
     * 对画板进行初始化，会清空已绘制的所有内容
     * @param width     画板宽度
     * @param height    画板高度
     * @param data      指定画板初始内容，参数为记录颜色分量的一维数组，不传入参数时，画板内容为全部透明的矩形
     */
    DrawBoard.prototype.init = function (width, height, data) {
        this.tempColor = this.tempR = this.tempG = this.tempB = this.tempA = 0;
        this.curColor = 0;
        this._witdh = Math.round(width);
        this._height = Math.round(height);
        this.initPointColor();
        this.initPixelColor();
        this.initLineData();
        if (!!data) {
            this.setData(data);
        }
    };
    DrawBoard.prototype.initPointColor = function () {
        if (!this.pointColor) {
            this.pointColor = [];
        }
        for (var x = 0; x < this.width; ++x) {
            if (!this.pointColor[x]) {
                this.pointColor[x] = [];
            }
            for (var y = 0; y < this.height; ++y) {
                this.pointColor[x][y] = 0;
            }
        }
        this.colorCount = {};
        this.colorCount[0] = this.width * this.height;
    };
    DrawBoard.prototype.initPixelColor = function () {
        this.buffer = new ArrayBuffer(this.width * this.height * 4);
        this.pixelColor = new Uint8Array(this.buffer);
        this.pixelColor.fill(0);
    };
    /**重置画板，画板的宽高不变，但会清空已绘制的所有内容，恢复至透明状态 */
    DrawBoard.prototype.reset = function () {
        this.resetPointColor();
        this.resetPixelColor();
    };
    DrawBoard.prototype.resetPointColor = function () {
        for (var x = this.width - 1; x >= 0; --x) {
            for (var y = this.height - 1; y >= 0; --y) {
                this.pointColor[x][y] = 0;
            }
        }
        for (var key in this.colorCount) {
            this.colorCount[key] = 0;
        }
    };
    DrawBoard.prototype.resetPixelColor = function () {
        this.pixelColor.fill(0);
    };
    /**
     * 传入图像的像素数据，直接设置画板的内容，图像尺寸必须与画板一致，若需要重新设置画板大小，请使用 init() 函数
     * @param data 记录各像素颜色分量的一维数组
     */
    DrawBoard.prototype.setData = function (data) {
        var pixelData = new Uint8Array(data);
        if (pixelData.length != this.width * this.height * 4) {
            console.warn("画板设置数据失败，数据长度与画板大小不一致。");
            return;
        }
        this.setPixelColorByRGBA(pixelData);
        this.setPointColorByRGBA(pixelData);
    };
    /**
     * 记录各像素颜色分量
     * @param data 颜色分量一维数组
     */
    DrawBoard.prototype.setPixelColorByRGBA = function (data) {
        this.pixelColor.set(data);
    };
    /**
     * 按像素点的坐标记录像素点的颜色值
     * @param data 颜色分量一维数组
     */
    DrawBoard.prototype.setPointColorByRGBA = function (data) {
        this.colorCount = {};
        for (var y = 0; y < this.height; ++y) {
            var i = y * this.height;
            for (var x = 0; x < this.width; ++x) {
                var color = this.convertToNumber(data[i++], data[i++], data[i++], data[i++]);
                this.pointColor[x][y] = color;
                if (!this.colorCount[color]) {
                    this.colorCount[color] = 1;
                }
                else {
                    this.colorCount[color] += 1;
                }
            }
        }
    };
    /**
     * 获取画板中的数据
     * @param data 用于接收数据的数组
     * @returns {number[]} 返回存储各像素点颜色分量的一维数组
     */
    DrawBoard.prototype.copyData = function (data) {
        if (undefined === data) {
            data = [];
        }
        for (var i = 0, count = this.pixelColor.length; i < count; ++i) {
            data[i] = this.pixelColor[i];
        }
        return data;
    };
    /**
     * 获取画板中记录每个像素的颜色分量的数据
     * @returns 将直接返回画板内部的数组；注：若使用者需要对该数据进行修改，请使用 copyData 方法获取，以免影响画板的像素个数计数功能
     */
    DrawBoard.prototype.getData = function () {
        return this.pixelColor;
    };
    /**获取画板内部使用的内存块，若仅需要获取像素数据，不进一步处理，使用 getData 即可 */
    DrawBoard.prototype.getBuffer = function () {
        return this.buffer;
    };
    /**
     * 获取指定颜色的像素的个数
     * @param r 颜色的r分量
     * @param g 颜色的g分量
     * @param b 颜色的b分量
     * @param a 颜色透明度，默认为255
     */
    DrawBoard.prototype.getColorCount = function (r, g, b, a) {
        if (a === void 0) { a = 255; }
        var c = this.convertToNumber(r, g, b, a);
        return this.colorCount[c];
    };
    /**
     * 设置画板绘制图案使使用的颜色
     * @param r 包含RGBA分量的颜色对象，或者颜色的r分量
     * @param g 颜色的g分量
     * @param b 颜色的b分量
     * @param a 颜色透明度，默认为255
     */
    DrawBoard.prototype.setColor = function (r, g, b, a) {
        if (a === void 0) { a = 255; }
        this.curColor = this.convertToNumber(r, g, b, a);
        if (!this.colorCount[this.curColor]) {
            this.colorCount[this.curColor] = 0;
        }
        this.tempColor = this.curColor;
        this.tempR = r;
        this.tempG = g;
        this.tempB = b;
        this.tempA = a;
    };
    /**清空所有已绘制的内容 */
    DrawBoard.prototype.clear = function () {
        this.reset();
    };
    DrawBoard.prototype.initLineData = function () {
        this.previousLineEndPos = new Vec2();
        this.previousLineEndPosT = new Vec2();
        this.previousLineEndPosB = new Vec2();
        this.previousLineCircleEnd = true;
        this.previousLineWidth = 1;
    };
    /**
     * 移动画笔到指定的位置，调用 lineTo 函数时将使用该点作为直线的起点
     * @param x     坐标X
     * @param y     坐标Y
     */
    DrawBoard.prototype.moveTo = function (x, y) {
        x = Math.round(x);
        y = Math.round(y);
        this.previousLineEndPos.set(x, y);
        this.previousLineEndPosT.set(x, y);
        this.previousLineEndPosB.set(x, y);
    };
    /**
     * 设置线宽
     */
    DrawBoard.prototype.setLineWidth = function (w) {
        this.previousLineWidth = w;
    };
    /**
     * 设置线段端点样式
     * @param b 线段端点是否为圆形
     */
    DrawBoard.prototype.setLineCircleEnd = function (b) {
        this.previousLineCircleEnd = b;
    };
    /**
     * 绘制直线，使用默认的颜色、线宽和线段端点样式
     * @param x1        起点坐标X
     * @param y1        起点坐标Y
     * @param x2        终点坐标X
     * @param y2        终点坐标Y
     */
    DrawBoard.prototype.line = function (x1, y1, x2, y2) {
        x1 = Math.round(x1);
        x2 = Math.round(x2);
        y1 = Math.round(y1);
        y2 = Math.round(y2);
        if (x1 == x2 && y1 == y2)
            return;
        var width = this.previousLineWidth;
        var circleEnd = this.previousLineCircleEnd;
        this.previousLineEndPos.set(x2, y2);
        var offsetX = 0;
        var offsetY = 0;
        var rateK = 1;
        if (x1 == x2) {
            offsetX = Math.round(width * 0.5);
        }
        else if (y1 == y2) {
            offsetY = Math.round(width * 0.5);
        }
        else {
            var k = (y2 - y1) / (x2 - x1);
            rateK = Math.sqrt(k * k + 1);
            offsetY = width * 0.5 / rateK;
            offsetX = Math.round(offsetY * k);
            offsetY = Math.round(offsetY);
        }
        this.previousLineEndPosT.set(x2 - offsetX, y2 + offsetY);
        this.previousLineEndPosB.set(x2 + offsetX, y2 - offsetY);
        var p1 = new Vec2(x1, y1);
        var p2 = new Vec2(x2, y2);
        if (x1 > x2) {
            p1.x = x2;
            p1.y = y2;
            p2.x = x1;
            p2.y = y1;
        }
        this._drawLine(p1, p2, width, offsetX, offsetY, rateK);
        if (circleEnd) {
            this._drawCircle(x1, y1, width * 0.5);
            this._drawCircle(x2, y2, width * 0.5);
        }
    };
    /**
     * 绘制到指定坐标的直线，起点为上一次绘制的直线的终点，使用默认的颜色、宽度和线段端点样式
     * @param x     终点坐标X
     * @param y     终点坐标Y
     */
    DrawBoard.prototype.lineTo = function (x, y) {
        x = Math.round(x);
        y = Math.round(y);
        if (this.previousLineEndPos.x == x && this.previousLineEndPos.y == y)
            return;
        var width = this.previousLineWidth;
        var circleEnd = this.previousLineCircleEnd;
        var x1 = this.previousLineEndPos.x;
        var y1 = this.previousLineEndPos.y;
        var x2 = x;
        var y2 = y;
        if (x1 > x2) {
            x1 = x2;
            y1 = y2;
            x2 = this.previousLineEndPos.x;
            y2 = this.previousLineEndPos.y;
        }
        var offsetX = 0;
        var offsetY = 0;
        var rateK = 1;
        if (x1 == x2) {
            offsetX = Math.round(width * 0.5);
        }
        else if (y1 == y2) {
            offsetY = Math.round(width * 0.5);
        }
        else {
            var k = (y2 - y1) / (x2 - x1);
            rateK = Math.sqrt(k * k + 1);
            offsetY = width * 0.5 / rateK;
            offsetX = Math.round(offsetY * k);
            offsetY = Math.round(offsetY);
        }
        if (!circleEnd) {
            if (this.previousLineEndPos.x != this.previousLineEndPosT.x
                || this.previousLineEndPos.y != this.previousLineEndPosT.y) {
                var p1 = new Vec2(this.previousLineEndPos.x - offsetX, this.previousLineEndPos.y + offsetY);
                var p2 = new Vec2(this.previousLineEndPos.x + offsetX, this.previousLineEndPos.y - offsetY);
                this._drawTriangle([p1, p2, this.previousLineEndPosT]);
                this._drawTriangle([p1, p2, this.previousLineEndPosB]);
            }
        }
        else {
            this._drawCircle(x1, y1, width * 0.5);
            this._drawCircle(x2, y2, width * 0.5);
        }
        this._drawLine(new Vec2(x1, y1), new Vec2(x2, y2), width, offsetX, offsetY, rateK);
        this.previousLineEndPos.set(x, y);
        this.previousLineEndPosT.set(x - offsetX, y + offsetY);
        this.previousLineEndPosB.set(x + offsetX, y - offsetY);
    };
    /**
     * 绘制直线，不包含线段端点样式
     * @param p1        线段起点坐标
     * @param p2        线段终点坐标
     * @param width     线段宽度
     * @param color     线段颜色
     */
    DrawBoard.prototype._drawLine = function (p1, p2, width, offsetX, offsetY, slopeRate) {
        if (p1.y == p2.y) {
            //水平直线
            var x = p1.x < p2.x ? p1.x : p2.x;
            this._drawRect(new Vec2(x, Math.round(p1.y - width * 0.5)), Math.abs(p1.x - p2.x), width);
        }
        else if (p1.x == p2.x) {
            //垂直直线
            var y = p1.y < p2.y ? p1.y : p2.y;
            this._drawRect(new Vec2(Math.round(p1.x - width * 0.5), y), width, Math.abs(p1.y - p2.y));
        }
        else {
            //倾斜直线
            var inverseK = (p1.x - p2.x) / (p1.y - p2.y);
            var p1t = new Vec2(p1.x - offsetX, p1.y + offsetY);
            var p1b = new Vec2(p1.x + offsetX, p1.y - offsetY);
            var p2t = new Vec2(p2.x - offsetX, p2.y + offsetY);
            var p2b = new Vec2(p2.x + offsetX, p2.y - offsetY);
            var p1c = new Vec2();
            var p2c = new Vec2();
            var height = Math.round(width * slopeRate);
            if (p2.y > p1.y) {
                if (p1b.x < p2t.x) {
                    p1c.x = p1b.x;
                    p1c.y = p1b.y + height;
                    p2c.x = p2t.x;
                    p2c.y = p2t.y - height;
                    this._drawVerticalTriangle(p1c, p1b, p1t);
                    this._drawParallelogram(p1b, p2c, height);
                    this._drawVerticalTriangle(p2t, p2c, p2b);
                }
                else {
                    p1c.x = p1b.x;
                    p1c.y = Math.round(p2t.y - (p1c.x - p2t.x) * inverseK);
                    p2c.x = p2t.x;
                    p2c.y = Math.round(p1b.y + (p1b.x - p2c.x) * inverseK);
                    this._drawVerticalTriangle(p2t, p2c, p1t);
                    this._drawParallelogram(p2c, p1b, p2t.y - p2c.y);
                    this._drawVerticalTriangle(p1c, p1b, p2b);
                }
            }
            else {
                if (p1t.x < p2b.x) {
                    p1c.x = p1t.x;
                    p1c.y = p1t.y - height;
                    p2c.x = p2b.x;
                    p2c.y = p2b.y + height;
                    this._drawVerticalTriangle(p1t, p1c, p1b);
                    this._drawParallelogram(p1c, p2b, height);
                    this._drawVerticalTriangle(p2c, p2b, p2t);
                }
                else {
                    p1c.x = p1t.x;
                    p1c.y = Math.round(p2b.y - (p1c.x - p2b.x) * inverseK);
                    p2c.x = p2b.x;
                    p2c.y = Math.round(p1t.y + (p1t.x - p2c.x) * inverseK);
                    this._drawVerticalTriangle(p2c, p2b, p1b);
                    this._drawParallelogram(p2b, p1c, p1t.y - p1c.y);
                    this._drawVerticalTriangle(p1t, p1c, p2t);
                }
            }
        }
    };
    /**
     * 绘制矩形
     * @param x     矩形左下角的坐标X
     * @param y     矩形左下角的坐标Y
     * @param w     矩形宽度
     * @param h     矩形高度
     */
    DrawBoard.prototype.rect = function (x, y, w, h) {
        this._drawRect(new Vec2(x, y), w, h);
    };
    /**
     * 绘制矩形
     * @param p         矩形左下顶点的坐标
     * @param w         矩形宽度
     * @param h         矩形高度
     * @param color     矩形填充的颜色
     */
    DrawBoard.prototype._drawRect = function (p, w, h) {
        var minX = this.clampX(p.x);
        var maxX = this.clampX(p.x + w);
        var minY = this.clampY(p.y);
        var maxY = this.clampY(p.y + h);
        // for (let x = minX; x <= maxX; ++x) {
        //     for (let y = minY; y <= maxY; ++y) {
        //         this._drawPixel(x, y);
        //     }
        // }
        for (var y = minY; y <= maxY; ++y) {
            this._drawRowPixel(minX, maxX, y);
        }
    };
    /**
     * 绘制平行四边形，平行四边形的左右两边与Y轴平行
     * @param p1        左下顶点坐标
     * @param p2        右下顶点坐标
     * @param height    垂直边高度
     * @param color     颜色
     */
    DrawBoard.prototype._drawParallelogram = function (p1, p2, height) {
        if (p1.x == p2.x)
            return;
        var k = (p2.y - p1.y) / (p2.x - p1.x);
        var minX = this._minX(p1.x);
        var maxX = this._maxX(p2.x);
        for (var x = minX; x <= maxX; ++x) {
            var minY = p1.y + Math.round((x - p1.x) * k);
            var maxY = minY + height;
            minY = this._minY(minY);
            maxY = this._maxY(maxY);
            this._drawColPixel(minY, maxY, x);
            // for (let y = minY; y <= maxY; ++y) {
            //     this._drawPixel(x, y);
            // }
        }
    };
    /**
     * 绘制三角形
     * @param x1    顶点1坐标X
     * @param y1    顶点1坐标Y
     * @param x2    顶点2坐标X
     * @param y2    顶点2坐标Y
     * @param x3    顶点3坐标X
     * @param y3    顶点3坐标Y
     */
    DrawBoard.prototype.triangle = function (x1, y1, x2, y2, x3, y3) {
        var pList = [];
        pList.push(new Vec2(x1, y1));
        pList.push(new Vec2(x2, y2));
        pList.push(new Vec2(x3, y3));
        this._drawTriangle(pList);
    };
    /**
     * 绘制任意三角形
     * @param p1    顶点坐标
     * @param p2
     * @param p3
     * @param color 填充颜色
     */
    DrawBoard.prototype._drawTriangle = function (pList) {
        pList.sort(function (a, b) {
            return a.x - b.x;
        });
        var p1 = pList[0];
        var p2 = pList[1];
        var p3 = pList[2];
        if (p1.x == p2.x) {
            if (p1.x == p3.x)
                return;
            if (p1.y < p2.y) {
                p1 = pList[1];
                p2 = pList[0];
            }
            this._drawVerticalTriangle(p1, p2, p3);
            return;
        }
        var k = (p3.y - p1.y) / (p3.x - p1.x);
        var p4 = new Vec2(p2.x, Math.round(p1.y + (p2.x - p1.x) * k));
        if (p4.y == p2.y)
            return;
        if (p4.y < p2.y) {
            this._drawVerticalTriangle(p2, p4, p1);
            this._drawVerticalTriangle(p2, p4, p3);
        }
        else {
            this._drawVerticalTriangle(p4, p2, p1);
            this._drawVerticalTriangle(p4, p2, p3);
        }
    };
    /**
     * 绘制一条边与Y轴平行的三角形
     * @param p1    三角形垂直边的 上 顶点坐标
     * @param p2    三角形垂直边的 下 顶点坐标
     * @param p3    三角形 左侧或右侧 顶点坐标
     * @param color 要绘制的颜色
     */
    DrawBoard.prototype._drawVerticalTriangle = function (p1, p2, p3) {
        if (p3.x == p1.x)
            return;
        var k1 = (p3.y - p1.y) / (p3.x - p1.x);
        var k2 = (p3.y - p2.y) / (p3.x - p2.x);
        var maxX = p3.x, minX = p1.x;
        if (maxX < minX) {
            maxX = p1.x;
            minX = p3.x;
        }
        minX = this._minX(minX);
        maxX = this._maxX(maxX);
        for (var x = minX; x <= maxX; ++x) {
            var maxY = this.clampY(Math.round(p1.y + (x - p1.x) * k1));
            var minY = this.clampY(Math.round(p2.y + (x - p2.x) * k2));
            this._drawColPixel(minY, maxY, x);
            // for (let y = minY; y <= maxY; ++y) {
            //     this._drawPixel(x, y);
            // }
        }
    };
    /**
    * 绘制一个圆
    * @param x         圆心坐标x
    * @param y         圆心坐标y
    * @param radius    圆的半径
    */
    DrawBoard.prototype.circle = function (x, y, radius) {
        x = Math.round(x);
        y = Math.round(y);
        this._drawCircle(x, y, radius);
    };
    DrawBoard.prototype._drawCircle = function (x, y, radius) {
        radius = Math.round(radius);
        if (radius == 0)
            return;
        //三角形的斜边的平方
        var dis = radius * radius;
        // let minX = this._minX(x - radius);
        // let maxX = this._maxX(x + radius);
        // for (let i = minX; i <= maxX; ++i) {
        //     let r = x - i;
        //     r = Math.round(Math.sqrt(dis - r * r));
        //     let minY = this._minY(y - r);
        //     let maxY = this._maxY(y + r);
        //     for (let j = minY; j <= maxY; ++j) {
        //         this._drawPixel(i, j);
        //     }
        // }
        var minY = this.clampY(y - radius);
        var maxY = this.clampY(y + radius);
        for (var j = minY; j <= maxY; ++j) {
            var r = j - y;
            r = Math.round(Math.sqrt(dis - r * r));
            var minX = this.clampX(x - r);
            var maxX = this.clampX(x + r);
            this._drawRowPixel(minX, maxX, j);
        }
    };
    DrawBoard.prototype._minX = function (x) {
        return x >= 0 ? x : 0;
    };
    DrawBoard.prototype._maxX = function (x) {
        return x < this.width ? x : this.width - 1;
    };
    DrawBoard.prototype._minY = function (y) {
        return y >= 0 ? y : 0;
    };
    DrawBoard.prototype._maxY = function (y) {
        return y < this.height ? y : this.height - 1;
    };
    DrawBoard.prototype.clampX = function (x) {
        if (x < 0)
            return 0;
        if (x >= this.width)
            return this.width - 1;
        return x;
    };
    DrawBoard.prototype.clampY = function (y) {
        if (y < 0)
            return 0;
        if (y >= this.height)
            return this.height - 1;
        return y;
    };
    /**绘制一个像素点的颜色 */
    DrawBoard.prototype._drawPixel = function (x, y) {
        if (this.pointColor[x][y] == this.tempColor)
            return;
        var index = (y * this.width + x) * 4;
        this.pixelColor[index] = this.tempR;
        this.pixelColor[index + 1] = this.tempG;
        this.pixelColor[index + 2] = this.tempB;
        this.pixelColor[index + 3] = this.tempA;
        var c = this.pointColor[x][y];
        this.colorCount[c]--;
        this.colorCount[this.tempColor]++;
        this.pointColor[x][y] = this.tempColor;
    };
    /**
     * 连续绘制一行中的像素点
     * @param startX    起点X坐标
     * @param endX      终点X坐标
     * @param y         Y坐标
     */
    DrawBoard.prototype._drawRowPixel = function (startX, endX, y) {
        var index = (y * this.width + startX) * 4;
        for (var x = startX; x <= endX; ++x) {
            if (this.pointColor[x][y] != this.tempColor) {
                this.pixelColor[index] = this.tempR;
                this.pixelColor[index + 1] = this.tempG;
                this.pixelColor[index + 2] = this.tempB;
                this.pixelColor[index + 3] = this.tempA;
                var c = this.pointColor[x][y];
                this.colorCount[c]--;
                this.colorCount[this.tempColor]++;
                this.pointColor[x][y] = this.tempColor;
            }
            index += 4;
        }
    };
    /**
     * 连续绘制一列中的像素点
     * @param startY    起点Y坐标
     * @param endY      终点Y坐标
     * @param x         X坐标
     */
    DrawBoard.prototype._drawColPixel = function (startY, endY, x) {
        var index = (startY * this.width + x) * 4;
        for (var y = startY; y <= endY; ++y) {
            if (this.pointColor[x][y] != this.tempColor) {
                this.pixelColor[index] = this.tempR;
                this.pixelColor[index + 1] = this.tempG;
                this.pixelColor[index + 2] = this.tempB;
                this.pixelColor[index + 3] = this.tempA;
                var c = this.pointColor[x][y];
                this.colorCount[c]--;
                this.colorCount[this.tempColor]++;
                this.pointColor[x][y] = this.tempColor;
            }
            index += this.width * 4;
        }
    };
    /**
     * 将RGBA颜色分量转换为一个数值表示的颜色，颜色分量为0~255之间的值
     * @param r
     * @param g
     * @param b
     * @param a
     */
    DrawBoard.prototype.convertToNumber = function (r, g, b, a) {
        if (a === void 0) { a = 255; }
        return ((r & 0xfe) << 23) | (g << 16) | (b << 8) | a;
    };
    /**将十六进制的颜色转换为RGBA分量表示的颜色 */
    DrawBoard.prototype.convertToRGBA = function (color) {
        return {
            r: (color & 0xef000000) >> 23,
            g: (color & 0x00ff0000) >> 16,
            b: (color & 0x0000ff00) >> 8,
            a: (color & 0x000000ff),
        };
    };
    return DrawBoard;
}());
exports.DrawBoard = DrawBoard;
var Vec2 = /** @class */ (function () {
    function Vec2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Vec2.prototype.set = function (p, y) {
        if (typeof p === "number") {
            this.x = p;
            this.y = y;
        }
        else {
            this.x = p.x;
            this.y = p.y;
        }
    };
    return Vec2;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEcmF3Qm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7R0FLRztBQUNIO0lBMkJJOzs7OztPQUtHO0lBQ0gsbUJBQW1CLEtBQWEsRUFBRSxNQUFjLEVBQUUsSUFBa0I7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFoQ0Qsc0JBQVcsNEJBQUs7UUFEaEIsVUFBVTthQUNWLGNBQTZCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBR2xELHNCQUFXLDZCQUFNO1FBRGpCLFVBQVU7YUFDVixjQUE4QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQThCcEQ7Ozs7O09BS0c7SUFDSSx3QkFBSSxHQUFYLFVBQVksS0FBYSxFQUFFLE1BQWMsRUFBRSxJQUFrQjtRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFDTyxrQ0FBYyxHQUF0QjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQzNCO1lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdCO1NBQ0o7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNsRCxDQUFDO0lBQ08sa0NBQWMsR0FBdEI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsdUNBQXVDO0lBQ2hDLHlCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDTyxtQ0FBZSxHQUF2QjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdCO1NBQ0o7UUFDRCxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBQ08sbUNBQWUsR0FBdkI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksMkJBQU8sR0FBZCxVQUFlLElBQWlCO1FBQzVCLElBQUksU0FBUyxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN2QyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRDs7O09BR0c7SUFDSyx1Q0FBbUIsR0FBM0IsVUFBNEIsSUFBZ0I7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNEOzs7T0FHRztJQUNLLHVDQUFtQixHQUEzQixVQUE0QixJQUFnQjtRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDakMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUM5QjtxQkFBTTtvQkFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDL0I7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSw0QkFBUSxHQUFmLFVBQWdCLElBQWU7UUFDM0IsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3BCLElBQUksR0FBRyxFQUFFLENBQUM7U0FDYjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQzVELElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNEOzs7T0FHRztJQUNJLDJCQUFPLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUNELGtEQUFrRDtJQUMzQyw2QkFBUyxHQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0Q7Ozs7OztPQU1HO0lBQ0ksaUNBQWEsR0FBcEIsVUFBcUIsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBZTtRQUFmLGtCQUFBLEVBQUEsT0FBZTtRQUNqRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0Q7Ozs7OztPQU1HO0lBQ0ksNEJBQVEsR0FBZixVQUFnQixDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFlO1FBQWYsa0JBQUEsRUFBQSxPQUFlO1FBQzVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDRCxnQkFBZ0I7SUFDVCx5QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFXTyxnQ0FBWSxHQUFwQjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNJLDBCQUFNLEdBQWIsVUFBYyxDQUFTLEVBQUUsQ0FBUztRQUM5QixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0Q7O09BRUc7SUFDSSxnQ0FBWSxHQUFuQixVQUFvQixDQUFTO1FBQ3pCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNEOzs7T0FHRztJQUNJLG9DQUFnQixHQUF2QixVQUF3QixDQUFVO1FBQzlCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLHdCQUFJLEdBQVgsVUFBWSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVO1FBQ3RELEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtZQUFFLE9BQU87UUFDakMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ25DLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwQyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNWLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNqQixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNILElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0IsT0FBTyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQzlCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sRUFBRSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUV6RCxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUIsSUFBSSxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNULEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1YsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDVixFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNWLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkQsSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNJLDBCQUFNLEdBQWIsVUFBYyxDQUFTLEVBQUUsQ0FBUztRQUM5QixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU87UUFDN0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ25DLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUMzQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ1QsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNSLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDUixFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUMvQixFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ1YsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ3JDO2FBQU0sSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ2pCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDOUIsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3QixPQUFPLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDOUIsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNaLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQzttQkFDcEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFO2dCQUM1RCxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLE9BQU8sRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO2dCQUM1RixJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLE9BQU8sRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO2dCQUM1RixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2FBQzFEO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVuRixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNEOzs7Ozs7T0FNRztJQUNLLDZCQUFTLEdBQWpCLFVBQWtCLEVBQVEsRUFBRSxFQUFRLEVBQUUsS0FBYSxFQUFFLE9BQWUsRUFBRSxPQUFlLEVBQUUsU0FBaUI7UUFDcEcsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDZCxNQUFNO1lBQ04sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdGO2FBQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDckIsTUFBTTtZQUNOLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3RjthQUFNO1lBQ0gsTUFBTTtZQUNOLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE9B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QUM7SUFDRCw0QkFBNEI7SUFDcEIsaUNBQWEsR0FBckIsVUFBc0IsS0FBYTtRQUMvQixPQUFPO1lBQ0gsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDN0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDN0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDNUIsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztTQUMxQixDQUFDO0lBQ04sQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0EvcEJBLEFBK3BCQyxJQUFBO0FBL3BCWSw4QkFBUztBQWdxQnRCO0lBR0ksY0FBWSxDQUFhLEVBQUUsQ0FBYTtRQUE1QixrQkFBQSxFQUFBLEtBQWE7UUFBRSxrQkFBQSxFQUFBLEtBQWE7UUFDcEMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFDTSxrQkFBRyxHQUFWLFVBQVcsQ0FBZ0IsRUFBRSxDQUFVO1FBQ25DLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZDthQUFNO1lBQ0gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDnlLvmnb/vvJpcbiAqIOWPr+S9v+eUqOS7u+aEj+minOiJsue7mOWItuefqeW9ou+8jOS4ieinkuW9ou+8jOWchu+8jOebtOe6v++8jOW5tue7n+iuoeavj+enjeminOiJsueahOWDj+e0oOS4quaVsDtcbiAqIOaTpumZpOWbvuahiOaXtu+8jOiuvue9rueUu+adv+eahOminOiJsuS4uumAj+aYjuiJsuWGjei/m+ihjOe7mOWItuWNs+WPrztcbiAqIOS9v+eUqOeahOWdkOagh+ezu+S4uuWOn+eCueWcqOW3puS4iuinku+8jFjovbTlkJHlj7PkuLrmraPvvIxZ6L205ZCR5LiL5Li65q2j44CCXG4gKi9cbmV4cG9ydCBjbGFzcyBEcmF3Qm9hcmQge1xuICAgIHByaXZhdGUgX3dpdGRoOiBudW1iZXI7XG4gICAgLyoq55S75p2/5a695bqmICovXG4gICAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fd2l0ZGg7IH1cbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcbiAgICAvKirnlLvmnb/pq5jluqYgKi9cbiAgICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5faGVpZ2h0OyB9XG5cbiAgICAvKirorrDlvZXmr4/kuKrlg4/ntKDngrnnmoTpopzoibLlgLznmoTmlbDnu4TvvIzpopzoibLlgLznlKjljYHlha3ov5vliLbooajnpLrvvIxSR0JB5qC85byPICovXG4gICAgcHJpdmF0ZSBwb2ludENvbG9yOiBudW1iZXJbXVtdO1xuICAgIC8qKuWtmOWCqOWDj+e0oOaVsOaNrueahOWGheWtmOWdlyAqL1xuICAgIHByaXZhdGUgYnVmZmVyOiBBcnJheUJ1ZmZlcjtcbiAgICAvKirpopzoibLliIbph4/kuIDnu7TmlbDnu4TvvIzkvpvmuLLmn5Pkvb/nlKggKi9cbiAgICBwcml2YXRlIHBpeGVsQ29sb3I6IFVpbnQ4QXJyYXk7XG4gICAgLyoq6K6w5b2V5ZCE56eN6aKc6Imy55qE5YOP57Sg55qE5pWw6YePICovXG4gICAgcHJpdmF0ZSBjb2xvckNvdW50OiB7IFtrZXk6IG51bWJlcl06IG51bWJlciB9O1xuXG4gICAgLyoq6K6w5b2V5pyA6L+R5LiA5qyh57uY5Yi25YOP57Sg55qE6aKc6ImyKOWNgeWFrei/m+WItuminOiJsuWAvCnvvIzosIPnlKjnu5jliLblh73mlbDkuJTmnKrmjIflrprpopzoibLlgLzml7bvvIzlsIbkvb/nlKjor6XlgLwgKi9cbiAgICBwcml2YXRlIGN1ckNvbG9yOiBudW1iZXI7XG5cbiAgICAvKirkuLTml7blrZjlgqjnmoTpopzoibLlgLwgKi9cbiAgICBwcml2YXRlIHRlbXBDb2xvcjogbnVtYmVyO1xuICAgIHByaXZhdGUgdGVtcFI6IG51bWJlcjtcbiAgICBwcml2YXRlIHRlbXBHOiBudW1iZXI7XG4gICAgcHJpdmF0ZSB0ZW1wQjogbnVtYmVyO1xuICAgIHByaXZhdGUgdGVtcEE6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIOWPr+Wvueavj+S4quWDj+e0oOeCuee7mOWItueahOeUu+adv++8jOeUu+adv+S9v+eUqOeahOWdkOagh+ezu+WOn+eCueS4uuW3puS4i+inku+8jFjovbTlkJHlj7PkuLrmraPvvIxZ6L205ZCR5LiK5Li65q2jXG4gICAgICogQHBhcmFtIHdpZHRoICAgICDnlLvmnb/lrr3luqZcbiAgICAgKiBAcGFyYW0gaGVpZ2h0ICAgIOeUu+adv+mrmOW6plxuICAgICAqIEBwYXJhbSBkYXRhICAgICAg5oyH5a6a55S75p2/5Yid5aeL5YaF5a6577yM5Y+C5pWw5Li66K6w5b2V6aKc6Imy5YiG6YeP55qE5LiA57u05pWw57uE77yM5LiN5Lyg5YWl5Y+C5pWw5pe277yM55S75p2/5Lit5YWo6YOo5YOP57Sg5Li66YCP5piOXG4gICAgICovXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBkYXRhPzogQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgdGhpcy5pbml0KHdpZHRoLCBoZWlnaHQsIGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlr7nnlLvmnb/ov5vooYzliJ3lp4vljJbvvIzkvJrmuIXnqbrlt7Lnu5jliLbnmoTmiYDmnInlhoXlrrlcbiAgICAgKiBAcGFyYW0gd2lkdGggICAgIOeUu+adv+WuveW6plxuICAgICAqIEBwYXJhbSBoZWlnaHQgICAg55S75p2/6auY5bqmXG4gICAgICogQHBhcmFtIGRhdGEgICAgICDmjIflrprnlLvmnb/liJ3lp4vlhoXlrrnvvIzlj4LmlbDkuLrorrDlvZXpopzoibLliIbph4/nmoTkuIDnu7TmlbDnu4TvvIzkuI3kvKDlhaXlj4LmlbDml7bvvIznlLvmnb/lhoXlrrnkuLrlhajpg6jpgI/mmI7nmoTnn6nlvaJcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgZGF0YT86IEFycmF5QnVmZmVyKSB7XG4gICAgICAgIHRoaXMudGVtcENvbG9yID0gdGhpcy50ZW1wUiA9IHRoaXMudGVtcEcgPSB0aGlzLnRlbXBCID0gdGhpcy50ZW1wQSA9IDA7XG4gICAgICAgIHRoaXMuY3VyQ29sb3IgPSAwO1xuICAgICAgICB0aGlzLl93aXRkaCA9IE1hdGgucm91bmQod2lkdGgpO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBNYXRoLnJvdW5kKGhlaWdodCk7XG4gICAgICAgIHRoaXMuaW5pdFBvaW50Q29sb3IoKTtcbiAgICAgICAgdGhpcy5pbml0UGl4ZWxDb2xvcigpO1xuICAgICAgICB0aGlzLmluaXRMaW5lRGF0YSgpO1xuICAgICAgICBpZiAoISFkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBpbml0UG9pbnRDb2xvcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBvaW50Q29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMucG9pbnRDb2xvciA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy53aWR0aDsgKyt4KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucG9pbnRDb2xvclt4XSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRDb2xvclt4XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgKyt5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludENvbG9yW3hdW3ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yQ291bnQgPSB7fTtcbiAgICAgICAgdGhpcy5jb2xvckNvdW50WzBdID0gdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0O1xuICAgIH1cbiAgICBwcml2YXRlIGluaXRQaXhlbENvbG9yKCkge1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih0aGlzLndpZHRoICogdGhpcy5oZWlnaHQgKiA0KTtcbiAgICAgICAgdGhpcy5waXhlbENvbG9yID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLnBpeGVsQ29sb3IuZmlsbCgwKTtcbiAgICB9XG5cbiAgICAvKirph43nva7nlLvmnb/vvIznlLvmnb/nmoTlrr3pq5jkuI3lj5jvvIzkvYbkvJrmuIXnqbrlt7Lnu5jliLbnmoTmiYDmnInlhoXlrrnvvIzmgaLlpI3oh7PpgI/mmI7nirbmgIEgKi9cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMucmVzZXRQb2ludENvbG9yKCk7XG4gICAgICAgIHRoaXMucmVzZXRQaXhlbENvbG9yKCk7XG4gICAgfVxuICAgIHByaXZhdGUgcmVzZXRQb2ludENvbG9yKCkge1xuICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy53aWR0aCAtIDE7IHggPj0gMDsgLS14KSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gdGhpcy5oZWlnaHQgLSAxOyB5ID49IDA7IC0teSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRDb2xvclt4XVt5XSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuY29sb3JDb3VudCkge1xuICAgICAgICAgICAgdGhpcy5jb2xvckNvdW50W2tleV0gPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgcmVzZXRQaXhlbENvbG9yKCkge1xuICAgICAgICB0aGlzLnBpeGVsQ29sb3IuZmlsbCgwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkvKDlhaXlm77lg4/nmoTlg4/ntKDmlbDmja7vvIznm7TmjqXorr7nva7nlLvmnb/nmoTlhoXlrrnvvIzlm77lg4/lsLrlr7jlv4XpobvkuI7nlLvmnb/kuIDoh7TvvIzoi6XpnIDopoHph43mlrDorr7nva7nlLvmnb/lpKflsI/vvIzor7fkvb/nlKggaW5pdCgpIOWHveaVsFxuICAgICAqIEBwYXJhbSBkYXRhIOiusOW9leWQhOWDj+e0oOminOiJsuWIhumHj+eahOS4gOe7tOaVsOe7hFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXREYXRhKGRhdGE6IEFycmF5QnVmZmVyKSB7XG4gICAgICAgIGxldCBwaXhlbERhdGEgPSBuZXcgVWludDhBcnJheShkYXRhKTtcbiAgICAgICAgaWYgKHBpeGVsRGF0YS5sZW5ndGggIT0gdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0ICogNCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwi55S75p2/6K6+572u5pWw5o2u5aSx6LSl77yM5pWw5o2u6ZW/5bqm5LiO55S75p2/5aSn5bCP5LiN5LiA6Ie044CCXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0UGl4ZWxDb2xvckJ5UkdCQShwaXhlbERhdGEpO1xuICAgICAgICB0aGlzLnNldFBvaW50Q29sb3JCeVJHQkEocGl4ZWxEYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6w5b2V5ZCE5YOP57Sg6aKc6Imy5YiG6YePXG4gICAgICogQHBhcmFtIGRhdGEg6aKc6Imy5YiG6YeP5LiA57u05pWw57uEXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRQaXhlbENvbG9yQnlSR0JBKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgdGhpcy5waXhlbENvbG9yLnNldChkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5oyJ5YOP57Sg54K555qE5Z2Q5qCH6K6w5b2V5YOP57Sg54K555qE6aKc6Imy5YC8XG4gICAgICogQHBhcmFtIGRhdGEg6aKc6Imy5YiG6YeP5LiA57u05pWw57uEXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRQb2ludENvbG9yQnlSR0JBKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgdGhpcy5jb2xvckNvdW50ID0ge307XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7ICsreSkge1xuICAgICAgICAgICAgbGV0IGkgPSB5ICogdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7ICsreCkge1xuICAgICAgICAgICAgICAgIGxldCBjb2xvciA9IHRoaXMuY29udmVydFRvTnVtYmVyKGRhdGFbaSsrXSwgZGF0YVtpKytdLCBkYXRhW2krK10sIGRhdGFbaSsrXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludENvbG9yW3hdW3ldID0gY29sb3I7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbG9yQ291bnRbY29sb3JdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3JDb3VudFtjb2xvcl0gPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3JDb3VudFtjb2xvcl0gKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bnlLvmnb/kuK3nmoTmlbDmja5cbiAgICAgKiBAcGFyYW0gZGF0YSDnlKjkuo7mjqXmlLbmlbDmja7nmoTmlbDnu4RcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyW119IOi/lOWbnuWtmOWCqOWQhOWDj+e0oOeCueminOiJsuWIhumHj+eahOS4gOe7tOaVsOe7hFxuICAgICAqL1xuICAgIHB1YmxpYyBjb3B5RGF0YShkYXRhPzogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IGRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgY291bnQgPSB0aGlzLnBpeGVsQ29sb3IubGVuZ3RoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgZGF0YVtpXSA9IHRoaXMucGl4ZWxDb2xvcltpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W55S75p2/5Lit6K6w5b2V5q+P5Liq5YOP57Sg55qE6aKc6Imy5YiG6YeP55qE5pWw5o2uXG4gICAgICogQHJldHVybnMg5bCG55u05o6l6L+U5Zue55S75p2/5YaF6YOo55qE5pWw57uE77yb5rOo77ya6Iul5L2/55So6ICF6ZyA6KaB5a+56K+l5pWw5o2u6L+b6KGM5L+u5pS577yM6K+35L2/55SoIGNvcHlEYXRhIOaWueazleiOt+WPlu+8jOS7peWFjeW9seWTjeeUu+adv+eahOWDj+e0oOS4quaVsOiuoeaVsOWKn+iDvVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXREYXRhKCk6IFVpbnQ4QXJyYXkge1xuICAgICAgICByZXR1cm4gdGhpcy5waXhlbENvbG9yO1xuICAgIH1cbiAgICAvKirojrflj5bnlLvmnb/lhoXpg6jkvb/nlKjnmoTlhoXlrZjlnZfvvIzoi6Xku4XpnIDopoHojrflj5blg4/ntKDmlbDmja7vvIzkuI3ov5vkuIDmraXlpITnkIbvvIzkvb/nlKggZ2V0RGF0YSDljbPlj68gKi9cbiAgICBwdWJsaWMgZ2V0QnVmZmVyKCk6IEFycmF5QnVmZmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bmjIflrprpopzoibLnmoTlg4/ntKDnmoTkuKrmlbBcbiAgICAgKiBAcGFyYW0gciDpopzoibLnmoRy5YiG6YePXG4gICAgICogQHBhcmFtIGcg6aKc6Imy55qEZ+WIhumHj1xuICAgICAqIEBwYXJhbSBiIOminOiJsueahGLliIbph49cbiAgICAgKiBAcGFyYW0gYSDpopzoibLpgI/mmI7luqbvvIzpu5jorqTkuLoyNTVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Q29sb3JDb3VudChyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhOiBudW1iZXIgPSAyNTUpIHtcbiAgICAgICAgbGV0IGMgPSB0aGlzLmNvbnZlcnRUb051bWJlcihyLCBnLCBiLCBhKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JDb3VudFtjXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u55S75p2/57uY5Yi25Zu+5qGI5L2/5L2/55So55qE6aKc6ImyXG4gICAgICogQHBhcmFtIHIg5YyF5ZCrUkdCQeWIhumHj+eahOminOiJsuWvueixoe+8jOaIluiAheminOiJsueahHLliIbph49cbiAgICAgKiBAcGFyYW0gZyDpopzoibLnmoRn5YiG6YePXG4gICAgICogQHBhcmFtIGIg6aKc6Imy55qEYuWIhumHj1xuICAgICAqIEBwYXJhbSBhIOminOiJsumAj+aYjuW6pu+8jOm7mOiupOS4ujI1NVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRDb2xvcihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhOiBudW1iZXIgPSAyNTUpIHtcbiAgICAgICAgdGhpcy5jdXJDb2xvciA9IHRoaXMuY29udmVydFRvTnVtYmVyKHIsIGcsIGIsIGEpO1xuICAgICAgICBpZiAoIXRoaXMuY29sb3JDb3VudFt0aGlzLmN1ckNvbG9yXSkge1xuICAgICAgICAgICAgdGhpcy5jb2xvckNvdW50W3RoaXMuY3VyQ29sb3JdID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRlbXBDb2xvciA9IHRoaXMuY3VyQ29sb3I7XG4gICAgICAgIHRoaXMudGVtcFIgPSByO1xuICAgICAgICB0aGlzLnRlbXBHID0gZztcbiAgICAgICAgdGhpcy50ZW1wQiA9IGI7XG4gICAgICAgIHRoaXMudGVtcEEgPSBhO1xuICAgIH1cbiAgICAvKirmuIXnqbrmiYDmnInlt7Lnu5jliLbnmoTlhoXlrrkgKi9cbiAgICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICAvL+ebtOe6v1xuICAgIC8qKuS4iuS4gOasoee7mOWItueahOebtOe6v+eahOe7iOeCuSAqL1xuICAgIHByaXZhdGUgcHJldmlvdXNMaW5lRW5kUG9zOiBWZWMyO1xuICAgIHByaXZhdGUgcHJldmlvdXNMaW5lRW5kUG9zVDogVmVjMjtcbiAgICBwcml2YXRlIHByZXZpb3VzTGluZUVuZFBvc0I6IFZlYzI7XG4gICAgLyoq5LiK5LiA5qyh57uY5Yi255qE55u057q/55qE56uv54K55qC35byPICovXG4gICAgcHJpdmF0ZSBwcmV2aW91c0xpbmVDaXJjbGVFbmQ6IGJvb2xlYW47XG4gICAgLyoq5LiK5LiA5qyh57uY5Yi255qE55u057q/55qE5a695bqmICovXG4gICAgcHJpdmF0ZSBwcmV2aW91c0xpbmVXaWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgaW5pdExpbmVEYXRhKCkge1xuICAgICAgICB0aGlzLnByZXZpb3VzTGluZUVuZFBvcyA9IG5ldyBWZWMyKCk7XG4gICAgICAgIHRoaXMucHJldmlvdXNMaW5lRW5kUG9zVCA9IG5ldyBWZWMyKCk7XG4gICAgICAgIHRoaXMucHJldmlvdXNMaW5lRW5kUG9zQiA9IG5ldyBWZWMyKCk7XG4gICAgICAgIHRoaXMucHJldmlvdXNMaW5lQ2lyY2xlRW5kID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0xpbmVXaWR0aCA9IDE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOenu+WKqOeUu+eslOWIsOaMh+WumueahOS9jee9ru+8jOiwg+eUqCBsaW5lVG8g5Ye95pWw5pe25bCG5L2/55So6K+l54K55L2c5Li655u057q/55qE6LW354K5XG4gICAgICogQHBhcmFtIHggICAgIOWdkOagh1hcbiAgICAgKiBAcGFyYW0geSAgICAg5Z2Q5qCHWVxuICAgICAqL1xuICAgIHB1YmxpYyBtb3ZlVG8oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgeCA9IE1hdGgucm91bmQoeCk7XG4gICAgICAgIHkgPSBNYXRoLnJvdW5kKHkpO1xuICAgICAgICB0aGlzLnByZXZpb3VzTGluZUVuZFBvcy5zZXQoeCwgeSk7XG4gICAgICAgIHRoaXMucHJldmlvdXNMaW5lRW5kUG9zVC5zZXQoeCwgeSk7XG4gICAgICAgIHRoaXMucHJldmlvdXNMaW5lRW5kUG9zQi5zZXQoeCwgeSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9rue6v+WuvVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRMaW5lV2lkdGgodzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNMaW5lV2lkdGggPSB3O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDorr7nva7nur/mrrXnq6/ngrnmoLflvI9cbiAgICAgKiBAcGFyYW0gYiDnur/mrrXnq6/ngrnmmK/lkKbkuLrlnIblvaJcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0TGluZUNpcmNsZUVuZChiOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNMaW5lQ2lyY2xlRW5kID0gYjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnu5jliLbnm7Tnur/vvIzkvb/nlKjpu5jorqTnmoTpopzoibLjgIHnur/lrr3lkoznur/mrrXnq6/ngrnmoLflvI9cbiAgICAgKiBAcGFyYW0geDEgICAgICAgIOi1t+eCueWdkOagh1hcbiAgICAgKiBAcGFyYW0geTEgICAgICAgIOi1t+eCueWdkOagh1lcbiAgICAgKiBAcGFyYW0geDIgICAgICAgIOe7iOeCueWdkOagh1hcbiAgICAgKiBAcGFyYW0geTIgICAgICAgIOe7iOeCueWdkOagh1lcbiAgICAgKi9cbiAgICBwdWJsaWMgbGluZSh4MTogbnVtYmVyLCB5MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyKSB7XG4gICAgICAgIHgxID0gTWF0aC5yb3VuZCh4MSk7XG4gICAgICAgIHgyID0gTWF0aC5yb3VuZCh4Mik7XG4gICAgICAgIHkxID0gTWF0aC5yb3VuZCh5MSk7XG4gICAgICAgIHkyID0gTWF0aC5yb3VuZCh5Mik7XG4gICAgICAgIGlmICh4MSA9PSB4MiAmJiB5MSA9PSB5MikgcmV0dXJuO1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLnByZXZpb3VzTGluZVdpZHRoO1xuICAgICAgICBsZXQgY2lyY2xlRW5kID0gdGhpcy5wcmV2aW91c0xpbmVDaXJjbGVFbmQ7XG4gICAgICAgIHRoaXMucHJldmlvdXNMaW5lRW5kUG9zLnNldCh4MiwgeTIpO1xuICAgICAgICBsZXQgb2Zmc2V0WCA9IDA7XG4gICAgICAgIGxldCBvZmZzZXRZID0gMDtcbiAgICAgICAgbGV0IHJhdGVLID0gMTtcbiAgICAgICAgaWYgKHgxID09IHgyKSB7XG4gICAgICAgICAgICBvZmZzZXRYID0gTWF0aC5yb3VuZCh3aWR0aCAqIDAuNSk7XG4gICAgICAgIH0gZWxzZSBpZiAoeTEgPT0geTIpIHtcbiAgICAgICAgICAgIG9mZnNldFkgPSBNYXRoLnJvdW5kKHdpZHRoICogMC41KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBrID0gKHkyIC0geTEpIC8gKHgyIC0geDEpO1xuICAgICAgICAgICAgcmF0ZUsgPSBNYXRoLnNxcnQoayAqIGsgKyAxKTtcbiAgICAgICAgICAgIG9mZnNldFkgPSB3aWR0aCAqIDAuNSAvIHJhdGVLO1xuICAgICAgICAgICAgb2Zmc2V0WCA9IE1hdGgucm91bmQob2Zmc2V0WSAqIGspO1xuICAgICAgICAgICAgb2Zmc2V0WSA9IE1hdGgucm91bmQob2Zmc2V0WSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmV2aW91c0xpbmVFbmRQb3NULnNldCh4MiAtIG9mZnNldFgsIHkyICsgb2Zmc2V0WSk7XG4gICAgICAgIHRoaXMucHJldmlvdXNMaW5lRW5kUG9zQi5zZXQoeDIgKyBvZmZzZXRYLCB5MiAtIG9mZnNldFkpO1xuXG4gICAgICAgIGxldCBwMSA9IG5ldyBWZWMyKHgxLCB5MSk7XG4gICAgICAgIGxldCBwMiA9IG5ldyBWZWMyKHgyLCB5Mik7XG4gICAgICAgIGlmICh4MSA+IHgyKSB7XG4gICAgICAgICAgICBwMS54ID0geDI7XG4gICAgICAgICAgICBwMS55ID0geTI7XG4gICAgICAgICAgICBwMi54ID0geDE7XG4gICAgICAgICAgICBwMi55ID0geTE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZHJhd0xpbmUocDEsIHAyLCB3aWR0aCwgb2Zmc2V0WCwgb2Zmc2V0WSwgcmF0ZUspO1xuICAgICAgICBpZiAoY2lyY2xlRW5kKSB7XG4gICAgICAgICAgICB0aGlzLl9kcmF3Q2lyY2xlKHgxLCB5MSwgd2lkdGggKiAwLjUpO1xuICAgICAgICAgICAgdGhpcy5fZHJhd0NpcmNsZSh4MiwgeTIsIHdpZHRoICogMC41KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDnu5jliLbliLDmjIflrprlnZDmoIfnmoTnm7Tnur/vvIzotbfngrnkuLrkuIrkuIDmrKHnu5jliLbnmoTnm7Tnur/nmoTnu4jngrnvvIzkvb/nlKjpu5jorqTnmoTpopzoibLjgIHlrr3luqblkoznur/mrrXnq6/ngrnmoLflvI9cbiAgICAgKiBAcGFyYW0geCAgICAg57uI54K55Z2Q5qCHWFxuICAgICAqIEBwYXJhbSB5ICAgICDnu4jngrnlnZDmoIdZXG4gICAgICovXG4gICAgcHVibGljIGxpbmVUbyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB4ID0gTWF0aC5yb3VuZCh4KTtcbiAgICAgICAgeSA9IE1hdGgucm91bmQoeSk7XG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzTGluZUVuZFBvcy54ID09IHggJiYgdGhpcy5wcmV2aW91c0xpbmVFbmRQb3MueSA9PSB5KSByZXR1cm47XG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMucHJldmlvdXNMaW5lV2lkdGg7XG4gICAgICAgIGxldCBjaXJjbGVFbmQgPSB0aGlzLnByZXZpb3VzTGluZUNpcmNsZUVuZDtcbiAgICAgICAgbGV0IHgxID0gdGhpcy5wcmV2aW91c0xpbmVFbmRQb3MueDtcbiAgICAgICAgbGV0IHkxID0gdGhpcy5wcmV2aW91c0xpbmVFbmRQb3MueTtcbiAgICAgICAgbGV0IHgyID0geDtcbiAgICAgICAgbGV0IHkyID0geTtcbiAgICAgICAgaWYgKHgxID4geDIpIHtcbiAgICAgICAgICAgIHgxID0geDI7XG4gICAgICAgICAgICB5MSA9IHkyO1xuICAgICAgICAgICAgeDIgPSB0aGlzLnByZXZpb3VzTGluZUVuZFBvcy54O1xuICAgICAgICAgICAgeTIgPSB0aGlzLnByZXZpb3VzTGluZUVuZFBvcy55O1xuICAgICAgICB9XG4gICAgICAgIGxldCBvZmZzZXRYID0gMDtcbiAgICAgICAgbGV0IG9mZnNldFkgPSAwO1xuICAgICAgICBsZXQgcmF0ZUsgPSAxO1xuICAgICAgICBpZiAoeDEgPT0geDIpIHtcbiAgICAgICAgICAgIG9mZnNldFggPSBNYXRoLnJvdW5kKHdpZHRoICogMC41KTtcbiAgICAgICAgfSBlbHNlIGlmICh5MSA9PSB5Mikge1xuICAgICAgICAgICAgb2Zmc2V0WSA9IE1hdGgucm91bmQod2lkdGggKiAwLjUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGsgPSAoeTIgLSB5MSkgLyAoeDIgLSB4MSk7XG4gICAgICAgICAgICByYXRlSyA9IE1hdGguc3FydChrICogayArIDEpO1xuICAgICAgICAgICAgb2Zmc2V0WSA9IHdpZHRoICogMC41IC8gcmF0ZUs7XG4gICAgICAgICAgICBvZmZzZXRYID0gTWF0aC5yb3VuZChvZmZzZXRZICogayk7XG4gICAgICAgICAgICBvZmZzZXRZID0gTWF0aC5yb3VuZChvZmZzZXRZKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNpcmNsZUVuZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlvdXNMaW5lRW5kUG9zLnggIT0gdGhpcy5wcmV2aW91c0xpbmVFbmRQb3NULnhcbiAgICAgICAgICAgICAgICB8fCB0aGlzLnByZXZpb3VzTGluZUVuZFBvcy55ICE9IHRoaXMucHJldmlvdXNMaW5lRW5kUG9zVC55KSB7XG4gICAgICAgICAgICAgICAgbGV0IHAxID0gbmV3IFZlYzIodGhpcy5wcmV2aW91c0xpbmVFbmRQb3MueCAtIG9mZnNldFgsIHRoaXMucHJldmlvdXNMaW5lRW5kUG9zLnkgKyBvZmZzZXRZKTtcbiAgICAgICAgICAgICAgICBsZXQgcDIgPSBuZXcgVmVjMih0aGlzLnByZXZpb3VzTGluZUVuZFBvcy54ICsgb2Zmc2V0WCwgdGhpcy5wcmV2aW91c0xpbmVFbmRQb3MueSAtIG9mZnNldFkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdUcmlhbmdsZShbcDEsIHAyLCB0aGlzLnByZXZpb3VzTGluZUVuZFBvc1RdKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmF3VHJpYW5nbGUoW3AxLCBwMiwgdGhpcy5wcmV2aW91c0xpbmVFbmRQb3NCXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9kcmF3Q2lyY2xlKHgxLCB5MSwgd2lkdGggKiAwLjUpO1xuICAgICAgICAgICAgdGhpcy5fZHJhd0NpcmNsZSh4MiwgeTIsIHdpZHRoICogMC41KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kcmF3TGluZShuZXcgVmVjMih4MSwgeTEpLCBuZXcgVmVjMih4MiwgeTIpLCB3aWR0aCwgb2Zmc2V0WCwgb2Zmc2V0WSwgcmF0ZUspO1xuXG4gICAgICAgIHRoaXMucHJldmlvdXNMaW5lRW5kUG9zLnNldCh4LCB5KTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0xpbmVFbmRQb3NULnNldCh4IC0gb2Zmc2V0WCwgeSArIG9mZnNldFkpO1xuICAgICAgICB0aGlzLnByZXZpb3VzTGluZUVuZFBvc0Iuc2V0KHggKyBvZmZzZXRYLCB5IC0gb2Zmc2V0WSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOe7mOWItuebtOe6v++8jOS4jeWMheWQq+e6v+auteerr+eCueagt+W8j1xuICAgICAqIEBwYXJhbSBwMSAgICAgICAg57q/5q616LW354K55Z2Q5qCHXG4gICAgICogQHBhcmFtIHAyICAgICAgICDnur/mrrXnu4jngrnlnZDmoIdcbiAgICAgKiBAcGFyYW0gd2lkdGggICAgIOe6v+auteWuveW6plxuICAgICAqIEBwYXJhbSBjb2xvciAgICAg57q/5q616aKc6ImyXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZHJhd0xpbmUocDE6IFZlYzIsIHAyOiBWZWMyLCB3aWR0aDogbnVtYmVyLCBvZmZzZXRYOiBudW1iZXIsIG9mZnNldFk6IG51bWJlciwgc2xvcGVSYXRlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHAxLnkgPT0gcDIueSkge1xuICAgICAgICAgICAgLy/msLTlubPnm7Tnur9cbiAgICAgICAgICAgIGxldCB4ID0gcDEueCA8IHAyLnggPyBwMS54IDogcDIueDtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdSZWN0KG5ldyBWZWMyKHgsIE1hdGgucm91bmQocDEueSAtIHdpZHRoICogMC41KSksIE1hdGguYWJzKHAxLnggLSBwMi54KSwgd2lkdGgpO1xuICAgICAgICB9IGVsc2UgaWYgKHAxLnggPT0gcDIueCkge1xuICAgICAgICAgICAgLy/lnoLnm7Tnm7Tnur9cbiAgICAgICAgICAgIGxldCB5ID0gcDEueSA8IHAyLnkgPyBwMS55IDogcDIueTtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdSZWN0KG5ldyBWZWMyKE1hdGgucm91bmQocDEueCAtIHdpZHRoICogMC41KSwgeSksIHdpZHRoLCBNYXRoLmFicyhwMS55IC0gcDIueSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy/lgL7mlpznm7Tnur9cbiAgICAgICAgICAgIGxldCBpbnZlcnNlSyA9IChwMS54IC0gcDIueCkgLyAocDEueSAtIHAyLnkpO1xuICAgICAgICAgICAgbGV0IHAxdCA9IG5ldyBWZWMyKHAxLnggLSBvZmZzZXRYLCBwMS55ICsgb2Zmc2V0WSk7XG4gICAgICAgICAgICBsZXQgcDFiID0gbmV3IFZlYzIocDEueCArIG9mZnNldFgsIHAxLnkgLSBvZmZzZXRZKTtcbiAgICAgICAgICAgIGxldCBwMnQgPSBuZXcgVmVjMihwMi54IC0gb2Zmc2V0WCwgcDIueSArIG9mZnNldFkpO1xuICAgICAgICAgICAgbGV0IHAyYiA9IG5ldyBWZWMyKHAyLnggKyBvZmZzZXRYLCBwMi55IC0gb2Zmc2V0WSk7XG4gICAgICAgICAgICBsZXQgcDFjID0gbmV3IFZlYzIoKTtcbiAgICAgICAgICAgIGxldCBwMmMgPSBuZXcgVmVjMigpO1xuICAgICAgICAgICAgbGV0IGhlaWdodCA9IE1hdGgucm91bmQod2lkdGggKiBzbG9wZVJhdGUpO1xuICAgICAgICAgICAgaWYgKHAyLnkgPiBwMS55KSB7XG4gICAgICAgICAgICAgICAgaWYgKHAxYi54IDwgcDJ0LngpIHtcbiAgICAgICAgICAgICAgICAgICAgcDFjLnggPSBwMWIueDtcbiAgICAgICAgICAgICAgICAgICAgcDFjLnkgPSBwMWIueSArIGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgcDJjLnggPSBwMnQueDtcbiAgICAgICAgICAgICAgICAgICAgcDJjLnkgPSBwMnQueSAtIGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDFjLCBwMWIsIHAxdCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdQYXJhbGxlbG9ncmFtKHAxYiwgcDJjLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3VmVydGljYWxUcmlhbmdsZShwMnQsIHAyYywgcDJiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwMWMueCA9IHAxYi54O1xuICAgICAgICAgICAgICAgICAgICBwMWMueSA9IE1hdGgucm91bmQocDJ0LnkgLSAocDFjLnggLSBwMnQueCkgKiBpbnZlcnNlSyk7XG4gICAgICAgICAgICAgICAgICAgIHAyYy54ID0gcDJ0Lng7XG4gICAgICAgICAgICAgICAgICAgIHAyYy55ID0gTWF0aC5yb3VuZChwMWIueSArIChwMWIueCAtIHAyYy54KSAqIGludmVyc2VLKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDJ0LCBwMmMsIHAxdCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdQYXJhbGxlbG9ncmFtKHAyYywgcDFiLCBwMnQueSAtIHAyYy55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDFjLCBwMWIsIHAyYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocDF0LnggPCBwMmIueCkge1xuICAgICAgICAgICAgICAgICAgICBwMWMueCA9IHAxdC54O1xuICAgICAgICAgICAgICAgICAgICBwMWMueSA9IHAxdC55IC0gaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBwMmMueCA9IHAyYi54O1xuICAgICAgICAgICAgICAgICAgICBwMmMueSA9IHAyYi55ICsgaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3VmVydGljYWxUcmlhbmdsZShwMXQsIHAxYywgcDFiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1BhcmFsbGVsb2dyYW0ocDFjLCBwMmIsIGhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAyYywgcDJiLCBwMnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHAxYy54ID0gcDF0Lng7XG4gICAgICAgICAgICAgICAgICAgIHAxYy55ID0gTWF0aC5yb3VuZChwMmIueSAtIChwMWMueCAtIHAyYi54KSAqIGludmVyc2VLKTtcbiAgICAgICAgICAgICAgICAgICAgcDJjLnggPSBwMmIueDtcbiAgICAgICAgICAgICAgICAgICAgcDJjLnkgPSBNYXRoLnJvdW5kKHAxdC55ICsgKHAxdC54IC0gcDJjLngpICogaW52ZXJzZUspO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3VmVydGljYWxUcmlhbmdsZShwMmMsIHAyYiwgcDFiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1BhcmFsbGVsb2dyYW0ocDJiLCBwMWMsIHAxdC55IC0gcDFjLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3VmVydGljYWxUcmlhbmdsZShwMXQsIHAxYywgcDJ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOe7mOWItuefqeW9olxuICAgICAqIEBwYXJhbSB4ICAgICDnn6nlvaLlt6bkuIvop5LnmoTlnZDmoIdYXG4gICAgICogQHBhcmFtIHkgICAgIOefqeW9ouW3puS4i+inkueahOWdkOagh1lcbiAgICAgKiBAcGFyYW0gdyAgICAg55+p5b2i5a695bqmXG4gICAgICogQHBhcmFtIGggICAgIOefqeW9oumrmOW6plxuICAgICAqL1xuICAgIHB1YmxpYyByZWN0KHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9kcmF3UmVjdChuZXcgVmVjMih4LCB5KSwgdywgaCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOe7mOWItuefqeW9olxuICAgICAqIEBwYXJhbSBwICAgICAgICAg55+p5b2i5bem5LiL6aG254K555qE5Z2Q5qCHXG4gICAgICogQHBhcmFtIHcgICAgICAgICDnn6nlvaLlrr3luqZcbiAgICAgKiBAcGFyYW0gaCAgICAgICAgIOefqeW9oumrmOW6plxuICAgICAqIEBwYXJhbSBjb2xvciAgICAg55+p5b2i5aGr5YWF55qE6aKc6ImyXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZHJhd1JlY3QocDogVmVjMiwgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG1pblggPSB0aGlzLmNsYW1wWChwLngpO1xuICAgICAgICBsZXQgbWF4WCA9IHRoaXMuY2xhbXBYKHAueCArIHcpO1xuICAgICAgICBsZXQgbWluWSA9IHRoaXMuY2xhbXBZKHAueSk7XG4gICAgICAgIGxldCBtYXhZID0gdGhpcy5jbGFtcFkocC55ICsgaCk7XG4gICAgICAgIC8vIGZvciAobGV0IHggPSBtaW5YOyB4IDw9IG1heFg7ICsreCkge1xuICAgICAgICAvLyAgICAgZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgKyt5KSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fZHJhd1BpeGVsKHgsIHkpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIGZvciAobGV0IHkgPSBtaW5ZOyB5IDw9IG1heFk7ICsreSkge1xuICAgICAgICAgICAgdGhpcy5fZHJhd1Jvd1BpeGVsKG1pblgsIG1heFgsIHkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOe7mOWItuW5s+ihjOWbm+i+ueW9ou+8jOW5s+ihjOWbm+i+ueW9oueahOW3puWPs+S4pOi+ueS4jlnovbTlubPooYxcbiAgICAgKiBAcGFyYW0gcDEgICAgICAgIOW3puS4i+mhtueCueWdkOagh1xuICAgICAqIEBwYXJhbSBwMiAgICAgICAg5Y+z5LiL6aG254K55Z2Q5qCHXG4gICAgICogQHBhcmFtIGhlaWdodCAgICDlnoLnm7Tovrnpq5jluqZcbiAgICAgKiBAcGFyYW0gY29sb3IgICAgIOminOiJslxuICAgICAqL1xuICAgIHByaXZhdGUgX2RyYXdQYXJhbGxlbG9ncmFtKHAxOiBWZWMyLCBwMjogVmVjMiwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHAxLnggPT0gcDIueCkgcmV0dXJuO1xuICAgICAgICBsZXQgayA9IChwMi55IC0gcDEueSkgLyAocDIueCAtIHAxLngpO1xuICAgICAgICBsZXQgbWluWCA9IHRoaXMuX21pblgocDEueCk7XG4gICAgICAgIGxldCBtYXhYID0gdGhpcy5fbWF4WChwMi54KTtcbiAgICAgICAgZm9yIChsZXQgeCA9IG1pblg7IHggPD0gbWF4WDsgKyt4KSB7XG4gICAgICAgICAgICBsZXQgbWluWSA9IHAxLnkgKyBNYXRoLnJvdW5kKCh4IC0gcDEueCkgKiBrKTtcbiAgICAgICAgICAgIGxldCBtYXhZID0gbWluWSArIGhlaWdodDtcbiAgICAgICAgICAgIG1pblkgPSB0aGlzLl9taW5ZKG1pblkpO1xuICAgICAgICAgICAgbWF4WSA9IHRoaXMuX21heFkobWF4WSk7XG4gICAgICAgICAgICB0aGlzLl9kcmF3Q29sUGl4ZWwobWluWSwgbWF4WSwgeCk7XG4gICAgICAgICAgICAvLyBmb3IgKGxldCB5ID0gbWluWTsgeSA8PSBtYXhZOyArK3kpIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLl9kcmF3UGl4ZWwoeCwgeSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnu5jliLbkuInop5LlvaJcbiAgICAgKiBAcGFyYW0geDEgICAg6aG254K5MeWdkOagh1hcbiAgICAgKiBAcGFyYW0geTEgICAg6aG254K5MeWdkOagh1lcbiAgICAgKiBAcGFyYW0geDIgICAg6aG254K5MuWdkOagh1hcbiAgICAgKiBAcGFyYW0geTIgICAg6aG254K5MuWdkOagh1lcbiAgICAgKiBAcGFyYW0geDMgICAg6aG254K5M+WdkOagh1hcbiAgICAgKiBAcGFyYW0geTMgICAg6aG254K5M+WdkOagh1lcbiAgICAgKi9cbiAgICBwdWJsaWMgdHJpYW5nbGUoeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlciwgeDM6IG51bWJlciwgeTM6IG51bWJlcikge1xuICAgICAgICBsZXQgcExpc3Q6IFZlYzJbXSA9IFtdO1xuICAgICAgICBwTGlzdC5wdXNoKG5ldyBWZWMyKHgxLCB5MSkpO1xuICAgICAgICBwTGlzdC5wdXNoKG5ldyBWZWMyKHgyLCB5MikpO1xuICAgICAgICBwTGlzdC5wdXNoKG5ldyBWZWMyKHgzLCB5MykpO1xuICAgICAgICB0aGlzLl9kcmF3VHJpYW5nbGUocExpc3QpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDnu5jliLbku7vmhI/kuInop5LlvaJcbiAgICAgKiBAcGFyYW0gcDEgICAg6aG254K55Z2Q5qCHXG4gICAgICogQHBhcmFtIHAyIFxuICAgICAqIEBwYXJhbSBwMyBcbiAgICAgKiBAcGFyYW0gY29sb3Ig5aGr5YWF6aKc6ImyXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZHJhd1RyaWFuZ2xlKHBMaXN0OiBWZWMyW10pIHtcbiAgICAgICAgcExpc3Quc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEueCAtIGIueDtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBwMSA9IHBMaXN0WzBdO1xuICAgICAgICBsZXQgcDIgPSBwTGlzdFsxXTtcbiAgICAgICAgbGV0IHAzID0gcExpc3RbMl07XG4gICAgICAgIGlmIChwMS54ID09IHAyLngpIHtcbiAgICAgICAgICAgIGlmIChwMS54ID09IHAzLngpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChwMS55IDwgcDIueSkge1xuICAgICAgICAgICAgICAgIHAxID0gcExpc3RbMV07XG4gICAgICAgICAgICAgICAgcDIgPSBwTGlzdFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2RyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAxLCBwMiwgcDMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBrID0gKHAzLnkgLSBwMS55KSAvIChwMy54IC0gcDEueCk7XG4gICAgICAgIGxldCBwNCA9IG5ldyBWZWMyKHAyLngsIE1hdGgucm91bmQocDEueSArIChwMi54IC0gcDEueCkgKiBrKSk7XG4gICAgICAgIGlmIChwNC55ID09IHAyLnkpIHJldHVybjtcbiAgICAgICAgaWYgKHA0LnkgPCBwMi55KSB7XG4gICAgICAgICAgICB0aGlzLl9kcmF3VmVydGljYWxUcmlhbmdsZShwMiwgcDQsIHAxKTtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAyLCBwNCwgcDMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDQsIHAyLCBwMSk7XG4gICAgICAgICAgICB0aGlzLl9kcmF3VmVydGljYWxUcmlhbmdsZShwNCwgcDIsIHAzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDnu5jliLbkuIDmnaHovrnkuI5Z6L205bmz6KGM55qE5LiJ6KeS5b2iXG4gICAgICogQHBhcmFtIHAxICAgIOS4ieinkuW9ouWeguebtOi+ueeahCDkuIog6aG254K55Z2Q5qCHXG4gICAgICogQHBhcmFtIHAyICAgIOS4ieinkuW9ouWeguebtOi+ueeahCDkuIsg6aG254K55Z2Q5qCHXG4gICAgICogQHBhcmFtIHAzICAgIOS4ieinkuW9oiDlt6bkvqfmiJblj7Pkvqcg6aG254K55Z2Q5qCHXG4gICAgICogQHBhcmFtIGNvbG9yIOimgee7mOWItueahOminOiJslxuICAgICAqL1xuICAgIHByaXZhdGUgX2RyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAxOiBWZWMyLCBwMjogVmVjMiwgcDM6IFZlYzIpIHtcbiAgICAgICAgaWYgKHAzLnggPT0gcDEueCkgcmV0dXJuO1xuICAgICAgICBsZXQgazEgPSAocDMueSAtIHAxLnkpIC8gKHAzLnggLSBwMS54KTtcbiAgICAgICAgbGV0IGsyID0gKHAzLnkgLSBwMi55KSAvIChwMy54IC0gcDIueCk7XG4gICAgICAgIGxldCBtYXhYID0gcDMueCwgbWluWCA9IHAxLng7XG4gICAgICAgIGlmIChtYXhYIDwgbWluWCkge1xuICAgICAgICAgICAgbWF4WCA9IHAxLng7XG4gICAgICAgICAgICBtaW5YID0gcDMueDtcbiAgICAgICAgfVxuICAgICAgICBtaW5YID0gdGhpcy5fbWluWChtaW5YKTtcbiAgICAgICAgbWF4WCA9IHRoaXMuX21heFgobWF4WCk7XG4gICAgICAgIGZvciAobGV0IHggPSBtaW5YOyB4IDw9IG1heFg7ICsreCkge1xuICAgICAgICAgICAgbGV0IG1heFkgPSB0aGlzLmNsYW1wWShNYXRoLnJvdW5kKHAxLnkgKyAoeCAtIHAxLngpICogazEpKTtcbiAgICAgICAgICAgIGxldCBtaW5ZID0gdGhpcy5jbGFtcFkoTWF0aC5yb3VuZChwMi55ICsgKHggLSBwMi54KSAqIGsyKSk7XG4gICAgICAgICAgICB0aGlzLl9kcmF3Q29sUGl4ZWwobWluWSwgbWF4WSwgeCk7XG4gICAgICAgICAgICAvLyBmb3IgKGxldCB5ID0gbWluWTsgeSA8PSBtYXhZOyArK3kpIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLl9kcmF3UGl4ZWwoeCwgeSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIOe7mOWItuS4gOS4quWchlxuICAgICogQHBhcmFtIHggICAgICAgICDlnIblv4PlnZDmoId4XG4gICAgKiBAcGFyYW0geSAgICAgICAgIOWchuW/g+WdkOagh3lcbiAgICAqIEBwYXJhbSByYWRpdXMgICAg5ZyG55qE5Y2K5b6EXG4gICAgKi9cbiAgICBwdWJsaWMgY2lyY2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpdXM6IG51bWJlcikge1xuICAgICAgICB4ID0gTWF0aC5yb3VuZCh4KTtcbiAgICAgICAgeSA9IE1hdGgucm91bmQoeSk7XG4gICAgICAgIHRoaXMuX2RyYXdDaXJjbGUoeCwgeSwgcmFkaXVzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBfZHJhd0NpcmNsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIpIHtcbiAgICAgICAgcmFkaXVzID0gTWF0aC5yb3VuZChyYWRpdXMpO1xuICAgICAgICBpZiAocmFkaXVzID09IDApIHJldHVybjtcbiAgICAgICAgLy/kuInop5LlvaLnmoTmlpzovrnnmoTlubPmlrlcbiAgICAgICAgbGV0IGRpcyA9IHJhZGl1cyAqIHJhZGl1cztcbiAgICAgICAgLy8gbGV0IG1pblggPSB0aGlzLl9taW5YKHggLSByYWRpdXMpO1xuICAgICAgICAvLyBsZXQgbWF4WCA9IHRoaXMuX21heFgoeCArIHJhZGl1cyk7XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSBtaW5YOyBpIDw9IG1heFg7ICsraSkge1xuICAgICAgICAvLyAgICAgbGV0IHIgPSB4IC0gaTtcbiAgICAgICAgLy8gICAgIHIgPSBNYXRoLnJvdW5kKE1hdGguc3FydChkaXMgLSByICogcikpO1xuICAgICAgICAvLyAgICAgbGV0IG1pblkgPSB0aGlzLl9taW5ZKHkgLSByKTtcbiAgICAgICAgLy8gICAgIGxldCBtYXhZID0gdGhpcy5fbWF4WSh5ICsgcik7XG4gICAgICAgIC8vICAgICBmb3IgKGxldCBqID0gbWluWTsgaiA8PSBtYXhZOyArK2opIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9kcmF3UGl4ZWwoaSwgaik7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgbGV0IG1pblkgPSB0aGlzLmNsYW1wWSh5IC0gcmFkaXVzKTtcbiAgICAgICAgbGV0IG1heFkgPSB0aGlzLmNsYW1wWSh5ICsgcmFkaXVzKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IG1pblk7IGogPD0gbWF4WTsgKytqKSB7XG4gICAgICAgICAgICBsZXQgciA9IGogLSB5O1xuICAgICAgICAgICAgciA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KGRpcyAtIHIgKiByKSk7XG4gICAgICAgICAgICBsZXQgbWluWCA9IHRoaXMuY2xhbXBYKHggLSByKTtcbiAgICAgICAgICAgIGxldCBtYXhYID0gdGhpcy5jbGFtcFgoeCArIHIpO1xuICAgICAgICAgICAgdGhpcy5fZHJhd1Jvd1BpeGVsKG1pblgsIG1heFgsIGopO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbWluWCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4geCA+PSAwID8geCA6IDA7XG4gICAgfVxuICAgIHByaXZhdGUgX21heFgoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHggPCB0aGlzLndpZHRoID8geCA6IHRoaXMud2lkdGggLSAxO1xuICAgIH1cbiAgICBwcml2YXRlIF9taW5ZKHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB5ID49IDAgPyB5IDogMDtcbiAgICB9XG4gICAgcHJpdmF0ZSBfbWF4WSh5OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4geSA8IHRoaXMuaGVpZ2h0ID8geSA6IHRoaXMuaGVpZ2h0IC0gMTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjbGFtcFgoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHggPCAwKSByZXR1cm4gMDtcbiAgICAgICAgaWYgKHggPj0gdGhpcy53aWR0aCkgcmV0dXJuIHRoaXMud2lkdGggLSAxO1xuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgcHJpdmF0ZSBjbGFtcFkoeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHkgPCAwKSByZXR1cm4gMDtcbiAgICAgICAgaWYgKHkgPj0gdGhpcy5oZWlnaHQpIHJldHVybiB0aGlzLmhlaWdodCAtIDE7XG4gICAgICAgIHJldHVybiB5O1xuICAgIH1cbiAgICAvKirnu5jliLbkuIDkuKrlg4/ntKDngrnnmoTpopzoibIgKi9cbiAgICBwcml2YXRlIF9kcmF3UGl4ZWwoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMucG9pbnRDb2xvclt4XVt5XSA9PSB0aGlzLnRlbXBDb2xvcikgcmV0dXJuO1xuICAgICAgICBsZXQgaW5kZXggPSAoeSAqIHRoaXMud2lkdGggKyB4KSAqIDQ7XG4gICAgICAgIHRoaXMucGl4ZWxDb2xvcltpbmRleF0gPSB0aGlzLnRlbXBSO1xuICAgICAgICB0aGlzLnBpeGVsQ29sb3JbaW5kZXggKyAxXSA9IHRoaXMudGVtcEc7XG4gICAgICAgIHRoaXMucGl4ZWxDb2xvcltpbmRleCArIDJdID0gdGhpcy50ZW1wQjtcbiAgICAgICAgdGhpcy5waXhlbENvbG9yW2luZGV4ICsgM10gPSB0aGlzLnRlbXBBO1xuICAgICAgICBsZXQgYyA9IHRoaXMucG9pbnRDb2xvclt4XVt5XTtcbiAgICAgICAgdGhpcy5jb2xvckNvdW50W2NdLS07XG4gICAgICAgIHRoaXMuY29sb3JDb3VudFt0aGlzLnRlbXBDb2xvcl0rKztcbiAgICAgICAgdGhpcy5wb2ludENvbG9yW3hdW3ldID0gdGhpcy50ZW1wQ29sb3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOi/nue7ree7mOWItuS4gOihjOS4reeahOWDj+e0oOeCuVxuICAgICAqIEBwYXJhbSBzdGFydFggICAg6LW354K5WOWdkOagh1xuICAgICAqIEBwYXJhbSBlbmRYICAgICAg57uI54K5WOWdkOagh1xuICAgICAqIEBwYXJhbSB5ICAgICAgICAgWeWdkOagh1xuICAgICAqL1xuICAgIHByaXZhdGUgX2RyYXdSb3dQaXhlbChzdGFydFg6IG51bWJlciwgZW5kWDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gKHkgKiB0aGlzLndpZHRoICsgc3RhcnRYKSAqIDQ7XG4gICAgICAgIGZvciAobGV0IHggPSBzdGFydFg7IHggPD0gZW5kWDsgKyt4KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludENvbG9yW3hdW3ldICE9IHRoaXMudGVtcENvbG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5waXhlbENvbG9yW2luZGV4XSA9IHRoaXMudGVtcFI7XG4gICAgICAgICAgICAgICAgdGhpcy5waXhlbENvbG9yW2luZGV4ICsgMV0gPSB0aGlzLnRlbXBHO1xuICAgICAgICAgICAgICAgIHRoaXMucGl4ZWxDb2xvcltpbmRleCArIDJdID0gdGhpcy50ZW1wQjtcbiAgICAgICAgICAgICAgICB0aGlzLnBpeGVsQ29sb3JbaW5kZXggKyAzXSA9IHRoaXMudGVtcEE7XG4gICAgICAgICAgICAgICAgbGV0IGMgPSB0aGlzLnBvaW50Q29sb3JbeF1beV07XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvckNvdW50W2NdLS07XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvckNvdW50W3RoaXMudGVtcENvbG9yXSsrO1xuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRDb2xvclt4XVt5XSA9IHRoaXMudGVtcENvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXggKz0gNDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDov57nu63nu5jliLbkuIDliJfkuK3nmoTlg4/ntKDngrlcbiAgICAgKiBAcGFyYW0gc3RhcnRZICAgIOi1t+eCuVnlnZDmoIdcbiAgICAgKiBAcGFyYW0gZW5kWSAgICAgIOe7iOeCuVnlnZDmoIdcbiAgICAgKiBAcGFyYW0geCAgICAgICAgIFjlnZDmoIdcbiAgICAgKi9cbiAgICBwcml2YXRlIF9kcmF3Q29sUGl4ZWwoc3RhcnRZOiBudW1iZXIsIGVuZFk6IG51bWJlciwgeDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBpbmRleCA9IChzdGFydFkgKiB0aGlzLndpZHRoICsgeCkgKiA0O1xuICAgICAgICBmb3IgKGxldCB5ID0gc3RhcnRZOyB5IDw9IGVuZFk7ICsreSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRDb2xvclt4XVt5XSAhPSB0aGlzLnRlbXBDb2xvcikge1xuICAgICAgICAgICAgICAgIHRoaXMucGl4ZWxDb2xvcltpbmRleF0gPSB0aGlzLnRlbXBSO1xuICAgICAgICAgICAgICAgIHRoaXMucGl4ZWxDb2xvcltpbmRleCArIDFdID0gdGhpcy50ZW1wRztcbiAgICAgICAgICAgICAgICB0aGlzLnBpeGVsQ29sb3JbaW5kZXggKyAyXSA9IHRoaXMudGVtcEI7XG4gICAgICAgICAgICAgICAgdGhpcy5waXhlbENvbG9yW2luZGV4ICsgM10gPSB0aGlzLnRlbXBBO1xuICAgICAgICAgICAgICAgIGxldCBjID0gdGhpcy5wb2ludENvbG9yW3hdW3ldO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JDb3VudFtjXS0tO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JDb3VudFt0aGlzLnRlbXBDb2xvcl0rKztcbiAgICAgICAgICAgICAgICB0aGlzLnBvaW50Q29sb3JbeF1beV0gPSB0aGlzLnRlbXBDb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluZGV4ICs9IHRoaXMud2lkdGggKiA0O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWwhlJHQkHpopzoibLliIbph4/ovazmjaLkuLrkuIDkuKrmlbDlgLzooajnpLrnmoTpopzoibLvvIzpopzoibLliIbph4/kuLowfjI1NeS5i+mXtOeahOWAvFxuICAgICAqIEBwYXJhbSByIFxuICAgICAqIEBwYXJhbSBnIFxuICAgICAqIEBwYXJhbSBiIFxuICAgICAqIEBwYXJhbSBhIFxuICAgICAqL1xuICAgIHByaXZhdGUgY29udmVydFRvTnVtYmVyKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE6IG51bWJlciA9IDI1NSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAoKHIgJiAweGZlKSA8PCAyMykgfCAoZyA8PCAxNikgfCAoYiA8PCA4KSB8IGE7XG4gICAgfVxuICAgIC8qKuWwhuWNgeWFrei/m+WItueahOminOiJsui9rOaNouS4ulJHQkHliIbph4/ooajnpLrnmoTpopzoibIgKi9cbiAgICBwcml2YXRlIGNvbnZlcnRUb1JHQkEoY29sb3I6IG51bWJlcik6IHsgcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYTogbnVtYmVyIH0ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcjogKGNvbG9yICYgMHhlZjAwMDAwMCkgPj4gMjMsXG4gICAgICAgICAgICBnOiAoY29sb3IgJiAweDAwZmYwMDAwKSA+PiAxNixcbiAgICAgICAgICAgIGI6IChjb2xvciAmIDB4MDAwMGZmMDApID4+IDgsXG4gICAgICAgICAgICBhOiAoY29sb3IgJiAweDAwMDAwMGZmKSxcbiAgICAgICAgfTtcbiAgICB9XG59XG5jbGFzcyBWZWMyIHtcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xuICAgIHB1YmxpYyB5OiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0KHA6IG51bWJlciB8IFZlYzIsIHk/OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnggPSBwO1xuICAgICAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueCA9IHAueDtcbiAgICAgICAgICAgIHRoaXMueSA9IHAueTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==