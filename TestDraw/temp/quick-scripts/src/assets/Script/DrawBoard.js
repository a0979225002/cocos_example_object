"use strict";
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