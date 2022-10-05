
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/DrawingBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7f6bpseMhDmIvD6lKVsAOt', 'DrawingBoard');
// DrawingBoard.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 画板：
 * 可使用任意颜色绘制矩形，三角形，圆，直线，并统计每种颜色的像素个数
 * 擦除图案时，设置画板的颜色为透明色再进行绘制即可
 */
var DrawingBoard = /** @class */ (function () {
    /**
     * 可对每个像素点绘制的画板，画板使用的坐标系原点为左下角，X轴向右为正，Y轴向上为正
     * @param width     画板宽度
     * @param height    画板高度
     * @param data      指定画板初始内容，参数为记录颜色分量的一维数组，不传入参数时，画板中全部像素为透明
     */
    function DrawingBoard(width, height, data) {
        this.init(width, height, data);
    }
    Object.defineProperty(DrawingBoard.prototype, "width", {
        /**画板宽度 */
        get: function () { return this._witdh; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawingBoard.prototype, "height", {
        /**画板高度 */
        get: function () { return this._height; },
        enumerable: false,
        configurable: true
    });
    //#region 初始化
    /**
     * 对画板进行初始化，会清空已绘制的所有内容
     * @param width     画板宽度
     * @param height    画板高度
     * @param data      指定画板初始内容，参数为记录颜色分量的一维数组，不传入参数时，画板内容为全部透明的矩形
     */
    DrawingBoard.prototype.init = function (width, height, data) {
        this.tempColor = this.tempR = this.tempG = this.tempB = this.tempA = 0;
        this.curColor = 0;
        this._witdh = Math.round(width);
        this._height = Math.round(height);
        this.initPointColor();
        this.initMaskPoint();
        this.initPixelColor();
        this.initLineData();
        if (!!data) {
            this.setData(data);
        }
    };
    DrawingBoard.prototype.initPointColor = function () {
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
    DrawingBoard.prototype.initMaskPoint = function () {
        if (!this.maskPoint) {
            this.maskPoint = [];
        }
        for (var x = 0; x < this.width; ++x) {
            if (!this.maskPoint[x]) {
                this.maskPoint[x] = [];
            }
            for (var y = 0; y < this.height; ++y) {
                this.maskPoint[x][y] = 1;
            }
        }
    };
    DrawingBoard.prototype.initPixelColor = function () {
        this.buffer = new ArrayBuffer(this.width * this.height * 4);
        this.pixelColor = new Uint8Array(this.buffer);
        this.pixelColor.fill(0);
    };
    //#endregion
    //#region 重置内容
    /**重置画板，画板的宽高不变，但会清空已绘制的所有内容，恢复至透明状态 */
    DrawingBoard.prototype.reset = function () {
        this.resetPointColor();
        this.resetMaskPoint();
        this.resetPixelColor();
    };
    DrawingBoard.prototype.resetPointColor = function () {
        for (var x = this.width - 1; x >= 0; --x) {
            for (var y = this.height - 1; y >= 0; --y) {
                this.pointColor[x][y] = 0;
            }
        }
        for (var key in this.colorCount) {
            this.colorCount[key] = 0;
        }
    };
    DrawingBoard.prototype.resetMaskPoint = function () {
        for (var x = this.width - 1; x >= 0; --x) {
            for (var y = this.height - 1; y >= 0; --y) {
                this.maskPoint[x][y] = 1;
            }
        }
    };
    DrawingBoard.prototype.resetPixelColor = function () {
        this.pixelColor.fill(0);
    };
    //#endregion
    /**
     * 传入图像的像素数据，直接设置画板的内容，图像尺寸必须与画板一致，若需要重新设置画板大小，请使用 init() 函数
     * @param data 记录各像素颜色分量的一维数组
     */
    DrawingBoard.prototype.setData = function (data) {
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
    DrawingBoard.prototype.setPixelColorByRGBA = function (data) {
        this.pixelColor.set(data);
    };
    /**
     * 按像素点的坐标记录像素点的颜色值
     * @param data 颜色分量一维数组
     */
    DrawingBoard.prototype.setPointColorByRGBA = function (data) {
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
     * 设置不能绘制图案的像素区域
     * @param data  像素坐标为索引，0表示不能绘制，1表示能绘制
     */
    DrawingBoard.prototype.setMask = function (data) {
        for (var x = this.width - 1; x >= 0; --x) {
            if (!!data[x]) {
                for (var y = this.height - 1; y >= 0; --y) {
                    if (undefined != data[x][y]) {
                        this.maskPoint[x][y] = data[x][y];
                    }
                }
            }
        }
    };
    /**
     * 设置画板为全部区域都不能绘制
     */
    DrawingBoard.prototype.setDisable = function () {
        for (var x = this.width - 1; x >= 0; --x) {
            for (var y = this.height - 1; y >= 0; --y) {
                this.maskPoint[x][y] = 0;
            }
        }
    };
    /**
     * 在现有可绘制区域的基础上添加可以绘制的像素点区域。
     * 此方法不会禁用画板当前可绘制的像素点区域，只会添加新的可绘制区域
     * @param data  像素坐标为索引，0表示不能绘制，1表示能绘制
     */
    DrawingBoard.prototype.addEnablePoints = function (data) {
        for (var x = this.width - 1; x >= 0; --x) {
            if (!!data[x]) {
                for (var y = this.height - 1; y >= 0; --y) {
                    if (!!data[x][y]) {
                        this.maskPoint[x][y] = data[x][y];
                    }
                }
            }
        }
    };
    /**
     * 获取画板中的数据
     * @param data 用于接收数据的数组
     * @returns {number[]} 返回存储各像素点颜色分量的一维数组
     */
    DrawingBoard.prototype.copyData = function (data) {
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
    DrawingBoard.prototype.getData = function () {
        return this.pixelColor;
    };
    /**获取画板内部使用的内存块，若仅需要获取像素数据，不进一步处理，使用 getData 即可 */
    DrawingBoard.prototype.getBuffer = function () {
        return this.buffer;
    };
    DrawingBoard.prototype.getPointData = function () {
        return this.pointColor;
    };
    /**
     * 获取指定颜色的像素的个数
     * @param r 颜色的r分量
     * @param g 颜色的g分量
     * @param b 颜色的b分量
     * @param a 颜色透明度，默认为255
     */
    DrawingBoard.prototype.getColorCount = function (r, g, b, a) {
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
    DrawingBoard.prototype.setColor = function (r, g, b, a) {
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
    DrawingBoard.prototype.clear = function () {
        this.reset();
    };
    DrawingBoard.prototype.initLineData = function () {
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
    DrawingBoard.prototype.moveTo = function (x, y) {
        x = Math.round(x);
        y = Math.round(y);
        this.previousLineEndPos.set(x, y);
        this.previousLineEndPosT.set(x, y);
        this.previousLineEndPosB.set(x, y);
    };
    /**
     * 设置线宽
     */
    DrawingBoard.prototype.setLineWidth = function (w) {
        this.previousLineWidth = w;
    };
    /**
     * 设置线段端点样式
     * @param b 线段端点是否为圆形
     */
    DrawingBoard.prototype.setLineCircleEnd = function (b) {
        this.previousLineCircleEnd = b;
    };
    /**
     * 绘制直线，使用默认的颜色、线宽和线段端点样式
     * @param x1        起点坐标X
     * @param y1        起点坐标Y
     * @param x2        终点坐标X
     * @param y2        终点坐标Y
     */
    DrawingBoard.prototype.line = function (x1, y1, x2, y2) {
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
    DrawingBoard.prototype.lineTo = function (x, y) {
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
    DrawingBoard.prototype._drawLine = function (p1, p2, width, offsetX, offsetY, slopeRate) {
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
    //#endregion
    //#region 绘制：矩形
    /**
     * 绘制矩形
     * @param x     矩形左下角的坐标X
     * @param y     矩形左下角的坐标Y
     * @param w     矩形宽度
     * @param h     矩形高度
     */
    DrawingBoard.prototype.rect = function (x, y, w, h) {
        x = Math.round(x);
        y = Math.round(y);
        this._drawRect(new Vec2(x, y), w, h);
    };
    /**
     * 绘制矩形
     * @param p         矩形左下顶点的坐标
     * @param w         矩形宽度
     * @param h         矩形高度
     * @param color     矩形填充的颜色
     */
    DrawingBoard.prototype._drawRect = function (p, w, h) {
        var minX = this.clampX(p.x);
        var maxX = this.clampX(p.x + w);
        var minY = this.clampY(p.y);
        var maxY = this.clampY(p.y + h);
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
    DrawingBoard.prototype._drawParallelogram = function (p1, p2, height) {
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
    //#endregion
    //#region 绘制：三角形
    /**
     * 绘制三角形
     * @param x1    顶点1坐标X
     * @param y1    顶点1坐标Y
     * @param x2    顶点2坐标X
     * @param y2    顶点2坐标Y
     * @param x3    顶点3坐标X
     * @param y3    顶点3坐标Y
     */
    DrawingBoard.prototype.triangle = function (x1, y1, x2, y2, x3, y3) {
        x1 = Math.round(x1);
        y1 = Math.round(y1);
        x2 = Math.round(x2);
        y2 = Math.round(y2);
        x3 = Math.round(x3);
        y3 = Math.round(y3);
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
    DrawingBoard.prototype._drawTriangle = function (pList) {
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
    DrawingBoard.prototype._drawVerticalTriangle = function (p1, p2, p3) {
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
        }
    };
    //#endregion
    //#region 绘制：圆
    /**
    * 绘制一个圆
    * @param x         圆心坐标x
    * @param y         圆心坐标y
    * @param radius    圆的半径
    */
    DrawingBoard.prototype.circle = function (x, y, radius) {
        x = Math.round(x);
        y = Math.round(y);
        this._drawCircle(x, y, radius);
    };
    DrawingBoard.prototype._drawCircle = function (x, y, radius) {
        radius = Math.round(radius);
        if (radius == 0)
            return;
        //三角形的斜边的平方
        var dis = radius * radius;
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
    //#endregion
    //#region 内部绘制方法
    DrawingBoard.prototype._minX = function (x) {
        return x >= 0 ? x : 0;
    };
    DrawingBoard.prototype._maxX = function (x) {
        return x < this.width ? x : this.width - 1;
    };
    DrawingBoard.prototype._minY = function (y) {
        return y >= 0 ? y : 0;
    };
    DrawingBoard.prototype._maxY = function (y) {
        return y < this.height ? y : this.height - 1;
    };
    DrawingBoard.prototype.clampX = function (x) {
        if (x < 0)
            return 0;
        if (x >= this.width)
            return this.width - 1;
        return x;
    };
    DrawingBoard.prototype.clampY = function (y) {
        if (y < 0)
            return 0;
        if (y >= this.height)
            return this.height - 1;
        return y;
    };
    /**绘制一个像素点的颜色 */
    DrawingBoard.prototype._drawPixel = function (x, y) {
        x = Math.round(x);
        y = Math.round(y);
        if (this.maskPoint[x][y] == 0)
            return;
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
    DrawingBoard.prototype._drawRowPixel = function (startX, endX, y) {
        var index = (y * this.width + startX) * 4;
        for (var x = startX; x <= endX; ++x) {
            if (this.maskPoint[x][y] != 0 && this.pointColor[x][y] != this.tempColor) {
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
    DrawingBoard.prototype._drawColPixel = function (startY, endY, x) {
        var index = (startY * this.width + x) * 4;
        for (var y = startY; y <= endY; ++y) {
            if (this.maskPoint[x][y] != 0 && this.pointColor[x][y] != this.tempColor) {
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
    DrawingBoard.prototype.convertToNumber = function (r, g, b, a) {
        if (a === void 0) { a = 255; }
        //颜色值将用于数组索引，不能为负数，故红色分量为奇数时将减1变为偶数
        return ((r & 0xfe) << 23) | (g << 16) | (b << 8) | a;
    };
    /**将十六进制的颜色转换为RGBA分量表示的颜色 */
    DrawingBoard.prototype.convertToRGBA = function (color) {
        //颜色值将用于数组索引，不能为负数，故红色分量为奇数时将减1变为偶数
        return {
            r: (color & 0xef000000) >> 23,
            g: (color & 0x00ff0000) >> 16,
            b: (color & 0x0000ff00) >> 8,
            a: (color & 0x000000ff),
        };
    };
    return DrawingBoard;
}());
exports.default = DrawingBoard;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRHJhd2luZ0JvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRztBQUNIO0lBNkJJOzs7OztPQUtHO0lBQ0gsc0JBQW1CLEtBQWEsRUFBRSxNQUFjLEVBQUUsSUFBa0I7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFsQ0Qsc0JBQVcsK0JBQUs7UUFEaEIsVUFBVTthQUNWLGNBQTZCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBR2xELHNCQUFXLGdDQUFNO1FBRGpCLFVBQVU7YUFDVixjQUE4QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQWlDcEQsYUFBYTtJQUNiOzs7OztPQUtHO0lBQ0ksMkJBQUksR0FBWCxVQUFZLEtBQWEsRUFBRSxNQUFjLEVBQUUsSUFBa0I7UUFDekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUNPLHFDQUFjLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FDeEI7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDM0I7WUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0I7U0FDSjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2xELENBQUM7SUFDTyxvQ0FBYSxHQUFyQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQzFCO1lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVCO1NBQ0o7SUFDTCxDQUFDO0lBQ08scUNBQWMsR0FBdEI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsWUFBWTtJQUVaLGNBQWM7SUFDZCx1Q0FBdUM7SUFDaEMsNEJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDTyxzQ0FBZSxHQUF2QjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdCO1NBQ0o7UUFDRCxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBQ08scUNBQWMsR0FBdEI7UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM1QjtTQUNKO0lBQ0wsQ0FBQztJQUNPLHNDQUFlLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELFlBQVk7SUFFWjs7O09BR0c7SUFDSSw4QkFBTyxHQUFkLFVBQWUsSUFBaUI7UUFDNUIsSUFBSSxTQUFTLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbEQsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNEOzs7T0FHRztJQUNLLDBDQUFtQixHQUEzQixVQUE0QixJQUFnQjtRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ssMENBQW1CLEdBQTNCLFVBQTRCLElBQWdCO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzlCO3FCQUFNO29CQUNILElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUMvQjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksOEJBQU8sR0FBZCxVQUFlLElBQWdCO1FBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO29CQUN2QyxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNyQztpQkFDSjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBQ0Q7O09BRUc7SUFDSSxpQ0FBVSxHQUFqQjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVCO1NBQ0o7SUFDTCxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNJLHNDQUFlLEdBQXRCLFVBQXVCLElBQWdCO1FBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO29CQUN2QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3JDO2lCQUNKO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksK0JBQVEsR0FBZixVQUFnQixJQUFlO1FBQzNCLElBQUksU0FBUyxLQUFLLElBQUksRUFBRTtZQUNwQixJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ2I7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRTtZQUM1RCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRDs7O09BR0c7SUFDSSw4QkFBTyxHQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFDRCxrREFBa0Q7SUFDM0MsZ0NBQVMsR0FBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUNNLG1DQUFZLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFDRDs7Ozs7O09BTUc7SUFDSSxvQ0FBYSxHQUFwQixVQUFxQixDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFlO1FBQWYsa0JBQUEsRUFBQSxPQUFlO1FBQ2pFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRDs7Ozs7O09BTUc7SUFDSSwrQkFBUSxHQUFmLFVBQWdCLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQWU7UUFBZixrQkFBQSxFQUFBLE9BQWU7UUFDNUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUNELGdCQUFnQjtJQUNULDRCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQVlPLG1DQUFZLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksNkJBQU0sR0FBYixVQUFjLENBQVMsRUFBRSxDQUFTO1FBQzlCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRDs7T0FFRztJQUNJLG1DQUFZLEdBQW5CLFVBQW9CLENBQVM7UUFDekIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksdUNBQWdCLEdBQXZCLFVBQXdCLENBQVU7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksMkJBQUksR0FBWCxVQUFZLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVU7UUFDdEQsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO1lBQUUsT0FBTztRQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDbkMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQzNDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ1YsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ3JDO2FBQU0sSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ2pCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDOUIsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3QixPQUFPLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDOUIsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLEVBQUUsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBRXpELElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxQixJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUIsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ1QsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDVixFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNWLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1YsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2RCxJQUFJLFNBQVMsRUFBRTtZQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksNkJBQU0sR0FBYixVQUFjLENBQVMsRUFBRSxDQUFTO1FBQzlCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTztRQUM3RSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDbkMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQzNDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDVCxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ1IsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNSLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQy9CLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDVixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDckM7YUFBTSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDakIsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM5QixLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztZQUM5QixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO21CQUNwRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUU7Z0JBQzVELElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7Z0JBQzVGLElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7Z0JBQzVGLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7YUFDMUQ7U0FDSjthQUFNO1lBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRW5GLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0Q7Ozs7OztPQU1HO0lBQ0ssZ0NBQVMsR0FBakIsVUFBa0IsRUFBUSxFQUFFLEVBQVEsRUFBRSxLQUFhLEVBQUUsT0FBZSxFQUFFLE9BQWUsRUFBRSxTQUFpQjtRQUNwRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNkLE1BQU07WUFDTixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDN0Y7YUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNyQixNQUFNO1lBQ04sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdGO2FBQU07WUFDSCxNQUFNO1lBQ04sSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7WUFDbkQsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztZQUNuRCxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBQ25ELElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7WUFDbkQsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNyQixJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3JCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBQzNDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUNiLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUNmLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDZCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO29CQUN2QixHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2QsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztvQkFDdkIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDN0M7cUJBQU07b0JBQ0gsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNkLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7b0JBQ3ZELEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDZCxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUM3QzthQUNKO2lCQUFNO2dCQUNILElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUNmLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDZCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO29CQUN2QixHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2QsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztvQkFDdkIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDN0M7cUJBQU07b0JBQ0gsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNkLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7b0JBQ3ZELEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDZCxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUM3QzthQUNKO1NBRUo7SUFDTCxDQUFDO0lBQ0QsWUFBWTtJQUVaLGVBQWU7SUFDZjs7Ozs7O09BTUc7SUFDSSwyQkFBSSxHQUFYLFVBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUNsRCxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNEOzs7Ozs7T0FNRztJQUNLLGdDQUFTLEdBQWpCLFVBQWtCLENBQU8sRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUMzQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUNEOzs7Ozs7T0FNRztJQUNLLHlDQUFrQixHQUExQixVQUEyQixFQUFRLEVBQUUsRUFBUSxFQUFFLE1BQWM7UUFDekQsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQUUsT0FBTztRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMvQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUM7WUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLHVDQUF1QztZQUN2Qyw2QkFBNkI7WUFDN0IsSUFBSTtTQUNQO0lBQ0wsQ0FBQztJQUNELFlBQVk7SUFFWixnQkFBZ0I7SUFDaEI7Ozs7Ozs7O09BUUc7SUFDSSwrQkFBUSxHQUFmLFVBQWdCLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVTtRQUNsRixFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixJQUFJLEtBQUssR0FBVyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0Q7Ozs7OztPQU1HO0lBQ0ssb0NBQWEsR0FBckIsVUFBc0IsS0FBYTtRQUMvQixLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDWixPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ2QsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUFFLE9BQU87WUFDekIsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2IsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZCxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pCO1lBQ0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFBRSxPQUFPO1FBQ3pCLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ2IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDMUM7YUFBTTtZQUNILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFDO0lBQ0wsQ0FBQztJQUNEOzs7Ozs7T0FNRztJQUNLLDRDQUFxQixHQUE3QixVQUE4QixFQUFRLEVBQUUsRUFBUSxFQUFFLEVBQVE7UUFDdEQsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQUUsT0FBTztRQUN6QixJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFO1lBQ2IsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNmO1FBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMvQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBQ0QsWUFBWTtJQUVaLGNBQWM7SUFDZDs7Ozs7TUFLRTtJQUNLLDZCQUFNLEdBQWIsVUFBYyxDQUFTLEVBQUUsQ0FBUyxFQUFFLE1BQWM7UUFDOUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTyxrQ0FBVyxHQUFuQixVQUFvQixDQUFTLEVBQUUsQ0FBUyxFQUFFLE1BQWM7UUFDcEQsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU87UUFDeEIsV0FBVztRQUNYLElBQUksR0FBRyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDbkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUNELFlBQVk7SUFFWixnQkFBZ0I7SUFDUiw0QkFBSyxHQUFiLFVBQWMsQ0FBUztRQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDTyw0QkFBSyxHQUFiLFVBQWMsQ0FBUztRQUNuQixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDTyw0QkFBSyxHQUFiLFVBQWMsQ0FBUztRQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDTyw0QkFBSyxHQUFiLFVBQWMsQ0FBUztRQUNuQixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDTyw2QkFBTSxHQUFkLFVBQWUsQ0FBUztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNPLDZCQUFNLEdBQWQsVUFBZSxDQUFTO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDN0MsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0QsZ0JBQWdCO0lBQ1IsaUNBQVUsR0FBbEIsVUFBbUIsQ0FBUyxFQUFFLENBQVM7UUFDbkMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQ3RDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDcEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFDRDs7Ozs7T0FLRztJQUNLLG9DQUFhLEdBQXJCLFVBQXNCLE1BQWMsRUFBRSxJQUFZLEVBQUUsQ0FBUztRQUN6RCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ2pDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUN0RSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzFDO1lBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztTQUNkO0lBQ0wsQ0FBQztJQUNEOzs7OztPQUtHO0lBQ0ssb0NBQWEsR0FBckIsVUFBc0IsTUFBYyxFQUFFLElBQVksRUFBRSxDQUFTO1FBQ3pELElBQUksS0FBSyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLEtBQUssSUFBSSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDakMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3RFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDeEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDMUM7WUFDRCxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBQ0Q7Ozs7OztPQU1HO0lBQ0ssc0NBQWUsR0FBdkIsVUFBd0IsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBZTtRQUFmLGtCQUFBLEVBQUEsT0FBZTtRQUNwRSxtQ0FBbUM7UUFDbkMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0QsNEJBQTRCO0lBQ3BCLG9DQUFhLEdBQXJCLFVBQXNCLEtBQWE7UUFDL0IsbUNBQW1DO1FBQ25DLE9BQU87WUFDSCxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRTtZQUM3QixDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRTtZQUM3QixDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztZQUM1QixDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1NBQzFCLENBQUM7SUFDTixDQUFDO0lBR0wsbUJBQUM7QUFBRCxDQTl1QkEsQUE4dUJDLElBQUE7O0FBQ0Q7SUFHSSxjQUFZLENBQWEsRUFBRSxDQUFhO1FBQTVCLGtCQUFBLEVBQUEsS0FBYTtRQUFFLGtCQUFBLEVBQUEsS0FBYTtRQUNwQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUNNLGtCQUFHLEdBQVYsVUFBVyxDQUFnQixFQUFFLENBQVU7UUFDbkMsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDdkIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNkO2FBQU07WUFDSCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBQ0wsV0FBQztBQUFELENBaEJBLEFBZ0JDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog55S75p2/77yaXHJcbiAqIOWPr+S9v+eUqOS7u+aEj+minOiJsue7mOWItuefqeW9ou+8jOS4ieinkuW9ou+8jOWchu+8jOebtOe6v++8jOW5tue7n+iuoeavj+enjeminOiJsueahOWDj+e0oOS4quaVsFxyXG4gKiDmk6bpmaTlm77moYjml7bvvIzorr7nva7nlLvmnb/nmoTpopzoibLkuLrpgI/mmI7oibLlho3ov5vooYznu5jliLbljbPlj69cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdpbmdCb2FyZCB7XHJcbiAgICBwcml2YXRlIF93aXRkaDogbnVtYmVyO1xyXG4gICAgLyoq55S75p2/5a695bqmICovXHJcbiAgICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl93aXRkaDsgfVxyXG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XHJcbiAgICAvKirnlLvmnb/pq5jluqYgKi9cclxuICAgIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9oZWlnaHQ7IH1cclxuXHJcbiAgICAvKirorrDlvZXmr4/kuKrlg4/ntKDngrnnmoTpopzoibLlgLznmoTmlbDnu4TvvIzpopzoibLlgLznlKjljYHlha3ov5vliLbooajnpLrvvIxSR0JB5qC85byPICovXHJcbiAgICBwcml2YXRlIHBvaW50Q29sb3I6IG51bWJlcltdW107XHJcbiAgICAvKirorrDlvZXmr4/kuKrlg4/ntKDngrnog73lkKbnu5jliLbvvIww6KGo56S65LiN6IO957uY5Yi277yMMeihqOekuuiDvee7mOWItiAqL1xyXG4gICAgcHJpdmF0ZSBtYXNrUG9pbnQ6IG51bWJlcltdW107XHJcbiAgICAvKirlrZjlgqjlg4/ntKDmlbDmja7nmoTlhoXlrZjlnZcgKi9cclxuICAgIHByaXZhdGUgYnVmZmVyOiBBcnJheUJ1ZmZlcjtcclxuICAgIC8qKuminOiJsuWIhumHj+S4gOe7tOaVsOe7hO+8jOS+m+a4suafk+S9v+eUqCAqL1xyXG4gICAgcHJpdmF0ZSBwaXhlbENvbG9yOiBVaW50OEFycmF5O1xyXG4gICAgLyoq6K6w5b2V5ZCE56eN6aKc6Imy55qE5YOP57Sg55qE5pWw6YePICovXHJcbiAgICBwcml2YXRlIGNvbG9yQ291bnQ6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH07XHJcblxyXG4gICAgLyoq6K6w5b2V5pyA6L+R5LiA5qyh57uY5Yi25YOP57Sg55qE6aKc6ImyKOWNgeWFrei/m+WItuminOiJsuWAvCnvvIzosIPnlKjnu5jliLblh73mlbDkuJTmnKrmjIflrprpopzoibLlgLzml7bvvIzlsIbkvb/nlKjor6XlgLwgKi9cclxuICAgIHByaXZhdGUgY3VyQ29sb3I6IG51bWJlcjtcclxuXHJcbiAgICAvKirkuLTml7blrZjlgqjnmoTpopzoibLlgLwgKi9cclxuICAgIHByaXZhdGUgdGVtcENvbG9yOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRlbXBSOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRlbXBHOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRlbXBCOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRlbXBBOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj6/lr7nmr4/kuKrlg4/ntKDngrnnu5jliLbnmoTnlLvmnb/vvIznlLvmnb/kvb/nlKjnmoTlnZDmoIfns7vljp/ngrnkuLrlt6bkuIvop5LvvIxY6L205ZCR5Y+z5Li65q2j77yMWei9tOWQkeS4iuS4uuato1xyXG4gICAgICogQHBhcmFtIHdpZHRoICAgICDnlLvmnb/lrr3luqZcclxuICAgICAqIEBwYXJhbSBoZWlnaHQgICAg55S75p2/6auY5bqmXHJcbiAgICAgKiBAcGFyYW0gZGF0YSAgICAgIOaMh+WumueUu+adv+WIneWni+WGheWuue+8jOWPguaVsOS4uuiusOW9leminOiJsuWIhumHj+eahOS4gOe7tOaVsOe7hO+8jOS4jeS8oOWFpeWPguaVsOaXtu+8jOeUu+adv+S4reWFqOmDqOWDj+e0oOS4uumAj+aYjlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGRhdGE/OiBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgIHRoaXMuaW5pdCh3aWR0aCwgaGVpZ2h0LCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyNyZWdpb24g5Yid5aeL5YyWXHJcbiAgICAvKipcclxuICAgICAqIOWvueeUu+adv+i/m+ihjOWIneWni+WMlu+8jOS8mua4heepuuW3sue7mOWItueahOaJgOacieWGheWuuVxyXG4gICAgICogQHBhcmFtIHdpZHRoICAgICDnlLvmnb/lrr3luqZcclxuICAgICAqIEBwYXJhbSBoZWlnaHQgICAg55S75p2/6auY5bqmXHJcbiAgICAgKiBAcGFyYW0gZGF0YSAgICAgIOaMh+WumueUu+adv+WIneWni+WGheWuue+8jOWPguaVsOS4uuiusOW9leminOiJsuWIhumHj+eahOS4gOe7tOaVsOe7hO+8jOS4jeS8oOWFpeWPguaVsOaXtu+8jOeUu+adv+WGheWuueS4uuWFqOmDqOmAj+aYjueahOefqeW9olxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgZGF0YT86IEFycmF5QnVmZmVyKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wQ29sb3IgPSB0aGlzLnRlbXBSID0gdGhpcy50ZW1wRyA9IHRoaXMudGVtcEIgPSB0aGlzLnRlbXBBID0gMDtcclxuICAgICAgICB0aGlzLmN1ckNvbG9yID0gMDtcclxuICAgICAgICB0aGlzLl93aXRkaCA9IE1hdGgucm91bmQod2lkdGgpO1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IE1hdGgucm91bmQoaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmluaXRQb2ludENvbG9yKCk7XHJcbiAgICAgICAgdGhpcy5pbml0TWFza1BvaW50KCk7XHJcbiAgICAgICAgdGhpcy5pbml0UGl4ZWxDb2xvcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdExpbmVEYXRhKCk7XHJcbiAgICAgICAgaWYgKCEhZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpbml0UG9pbnRDb2xvcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMucG9pbnRDb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50Q29sb3IgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyArK3gpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBvaW50Q29sb3JbeF0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRDb2xvclt4XSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7ICsreSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludENvbG9yW3hdW3ldID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbG9yQ291bnQgPSB7fTtcclxuICAgICAgICB0aGlzLmNvbG9yQ291bnRbMF0gPSB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGluaXRNYXNrUG9pbnQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1hc2tQb2ludCkge1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tQb2ludCA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7ICsreCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubWFza1BvaW50W3hdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2tQb2ludFt4XSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7ICsreSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrUG9pbnRbeF1beV0gPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpbml0UGl4ZWxDb2xvcigpIHtcclxuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih0aGlzLndpZHRoICogdGhpcy5oZWlnaHQgKiA0KTtcclxuICAgICAgICB0aGlzLnBpeGVsQ29sb3IgPSBuZXcgVWludDhBcnJheSh0aGlzLmJ1ZmZlcik7XHJcbiAgICAgICAgdGhpcy5waXhlbENvbG9yLmZpbGwoMCk7XHJcbiAgICB9XHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAvLyNyZWdpb24g6YeN572u5YaF5a65XHJcbiAgICAvKirph43nva7nlLvmnb/vvIznlLvmnb/nmoTlrr3pq5jkuI3lj5jvvIzkvYbkvJrmuIXnqbrlt7Lnu5jliLbnmoTmiYDmnInlhoXlrrnvvIzmgaLlpI3oh7PpgI/mmI7nirbmgIEgKi9cclxuICAgIHB1YmxpYyByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0UG9pbnRDb2xvcigpO1xyXG4gICAgICAgIHRoaXMucmVzZXRNYXNrUG9pbnQoKTtcclxuICAgICAgICB0aGlzLnJlc2V0UGl4ZWxDb2xvcigpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZXNldFBvaW50Q29sb3IoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHRoaXMud2lkdGggLSAxOyB4ID49IDA7IC0teCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gdGhpcy5oZWlnaHQgLSAxOyB5ID49IDA7IC0teSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludENvbG9yW3hdW3ldID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5jb2xvckNvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JDb3VudFtrZXldID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlc2V0TWFza1BvaW50KCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSB0aGlzLndpZHRoIC0gMTsgeCA+PSAwOyAtLXgpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IHRoaXMuaGVpZ2h0IC0gMTsgeSA+PSAwOyAtLXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFza1BvaW50W3hdW3ldID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVzZXRQaXhlbENvbG9yKCkge1xyXG4gICAgICAgIHRoaXMucGl4ZWxDb2xvci5maWxsKDApO1xyXG4gICAgfVxyXG4gICAgLy8jZW5kcmVnaW9uXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkvKDlhaXlm77lg4/nmoTlg4/ntKDmlbDmja7vvIznm7TmjqXorr7nva7nlLvmnb/nmoTlhoXlrrnvvIzlm77lg4/lsLrlr7jlv4XpobvkuI7nlLvmnb/kuIDoh7TvvIzoi6XpnIDopoHph43mlrDorr7nva7nlLvmnb/lpKflsI/vvIzor7fkvb/nlKggaW5pdCgpIOWHveaVsFxyXG4gICAgICogQHBhcmFtIGRhdGEg6K6w5b2V5ZCE5YOP57Sg6aKc6Imy5YiG6YeP55qE5LiA57u05pWw57uEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXREYXRhKGRhdGE6IEFycmF5QnVmZmVyKSB7XHJcbiAgICAgICAgbGV0IHBpeGVsRGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xyXG4gICAgICAgIGlmIChwaXhlbERhdGEubGVuZ3RoICE9IHRoaXMud2lkdGggKiB0aGlzLmhlaWdodCAqIDQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwi55S75p2/6K6+572u5pWw5o2u5aSx6LSl77yM5pWw5o2u6ZW/5bqm5LiO55S75p2/5aSn5bCP5LiN5LiA6Ie044CCXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0UGl4ZWxDb2xvckJ5UkdCQShwaXhlbERhdGEpO1xyXG4gICAgICAgIHRoaXMuc2V0UG9pbnRDb2xvckJ5UkdCQShwaXhlbERhdGEpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorrDlvZXlkITlg4/ntKDpopzoibLliIbph49cclxuICAgICAqIEBwYXJhbSBkYXRhIOminOiJsuWIhumHj+S4gOe7tOaVsOe7hFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNldFBpeGVsQ29sb3JCeVJHQkEoZGF0YTogVWludDhBcnJheSkge1xyXG4gICAgICAgIHRoaXMucGl4ZWxDb2xvci5zZXQoZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaMieWDj+e0oOeCueeahOWdkOagh+iusOW9leWDj+e0oOeCueeahOminOiJsuWAvFxyXG4gICAgICogQHBhcmFtIGRhdGEg6aKc6Imy5YiG6YeP5LiA57u05pWw57uEXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2V0UG9pbnRDb2xvckJ5UkdCQShkYXRhOiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgdGhpcy5jb2xvckNvdW50ID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGxldCBpID0geSAqIHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5jb252ZXJ0VG9OdW1iZXIoZGF0YVtpKytdLCBkYXRhW2krK10sIGRhdGFbaSsrXSwgZGF0YVtpKytdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRDb2xvclt4XVt5XSA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbG9yQ291bnRbY29sb3JdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvckNvdW50W2NvbG9yXSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3JDb3VudFtjb2xvcl0gKz0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruS4jeiDvee7mOWItuWbvuahiOeahOWDj+e0oOWMuuWfn1xyXG4gICAgICogQHBhcmFtIGRhdGEgIOWDj+e0oOWdkOagh+S4uue0ouW8le+8jDDooajnpLrkuI3og73nu5jliLbvvIwx6KGo56S66IO957uY5Yi2XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRNYXNrKGRhdGE6IG51bWJlcltdW10pIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy53aWR0aCAtIDE7IHggPj0gMDsgLS14KSB7XHJcbiAgICAgICAgICAgIGlmICghIWRhdGFbeF0pIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSB0aGlzLmhlaWdodCAtIDE7IHkgPj0gMDsgLS15KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVuZGVmaW5lZCAhPSBkYXRhW3hdW3ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFza1BvaW50W3hdW3ldID0gZGF0YVt4XVt5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rueUu+adv+S4uuWFqOmDqOWMuuWfn+mDveS4jeiDvee7mOWItlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0RGlzYWJsZSgpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy53aWR0aCAtIDE7IHggPj0gMDsgLS14KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSB0aGlzLmhlaWdodCAtIDE7IHkgPj0gMDsgLS15KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2tQb2ludFt4XVt5XSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWcqOeOsOacieWPr+e7mOWItuWMuuWfn+eahOWfuuehgOS4iua3u+WKoOWPr+S7pee7mOWItueahOWDj+e0oOeCueWMuuWfn+OAglxyXG4gICAgICog5q2k5pa55rOV5LiN5Lya56aB55So55S75p2/5b2T5YmN5Y+v57uY5Yi255qE5YOP57Sg54K55Yy65Z+f77yM5Y+q5Lya5re75Yqg5paw55qE5Y+v57uY5Yi25Yy65Z+fXHJcbiAgICAgKiBAcGFyYW0gZGF0YSAg5YOP57Sg5Z2Q5qCH5Li657Si5byV77yMMOihqOekuuS4jeiDvee7mOWItu+8jDHooajnpLrog73nu5jliLZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZEVuYWJsZVBvaW50cyhkYXRhOiBudW1iZXJbXVtdKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHRoaXMud2lkdGggLSAxOyB4ID49IDA7IC0teCkge1xyXG4gICAgICAgICAgICBpZiAoISFkYXRhW3hdKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gdGhpcy5oZWlnaHQgLSAxOyB5ID49IDA7IC0teSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghIWRhdGFbeF1beV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrUG9pbnRbeF1beV0gPSBkYXRhW3hdW3ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlueUu+adv+S4reeahOaVsOaNrlxyXG4gICAgICogQHBhcmFtIGRhdGEg55So5LqO5o6l5pS25pWw5o2u55qE5pWw57uEXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyW119IOi/lOWbnuWtmOWCqOWQhOWDj+e0oOeCueminOiJsuWIhumHj+eahOS4gOe7tOaVsOe7hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29weURhdGEoZGF0YT86IG51bWJlcltdKTogbnVtYmVyW10ge1xyXG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IGRhdGEpIHtcclxuICAgICAgICAgICAgZGF0YSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgY291bnQgPSB0aGlzLnBpeGVsQ29sb3IubGVuZ3RoOyBpIDwgY291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICBkYXRhW2ldID0gdGhpcy5waXhlbENvbG9yW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W55S75p2/5Lit6K6w5b2V5q+P5Liq5YOP57Sg55qE6aKc6Imy5YiG6YeP55qE5pWw5o2uXHJcbiAgICAgKiBAcmV0dXJucyDlsIbnm7TmjqXov5Tlm57nlLvmnb/lhoXpg6jnmoTmlbDnu4TvvJvms6jvvJroi6Xkvb/nlKjogIXpnIDopoHlr7nor6XmlbDmja7ov5vooYzkv67mlLnvvIzor7fkvb/nlKggY29weURhdGEg5pa55rOV6I635Y+W77yM5Lul5YWN5b2x5ZON55S75p2/55qE5YOP57Sg5Liq5pWw6K6h5pWw5Yqf6IO9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXREYXRhKCk6IFVpbnQ4QXJyYXkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpeGVsQ29sb3I7XHJcbiAgICB9XHJcbiAgICAvKirojrflj5bnlLvmnb/lhoXpg6jkvb/nlKjnmoTlhoXlrZjlnZfvvIzoi6Xku4XpnIDopoHojrflj5blg4/ntKDmlbDmja7vvIzkuI3ov5vkuIDmraXlpITnkIbvvIzkvb/nlKggZ2V0RGF0YSDljbPlj68gKi9cclxuICAgIHB1YmxpYyBnZXRCdWZmZXIoKTogQXJyYXlCdWZmZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRQb2ludERhdGEoKTogbnVtYmVyW11bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRDb2xvcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5oyH5a6a6aKc6Imy55qE5YOP57Sg55qE5Liq5pWwXHJcbiAgICAgKiBAcGFyYW0gciDpopzoibLnmoRy5YiG6YePXHJcbiAgICAgKiBAcGFyYW0gZyDpopzoibLnmoRn5YiG6YePXHJcbiAgICAgKiBAcGFyYW0gYiDpopzoibLnmoRi5YiG6YePXHJcbiAgICAgKiBAcGFyYW0gYSDpopzoibLpgI/mmI7luqbvvIzpu5jorqTkuLoyNTVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldENvbG9yQ291bnQocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYTogbnVtYmVyID0gMjU1KTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgYyA9IHRoaXMuY29udmVydFRvTnVtYmVyKHIsIGcsIGIsIGEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yQ291bnRbY107XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rueUu+adv+e7mOWItuWbvuahiOS9v+S9v+eUqOeahOminOiJslxyXG4gICAgICogQHBhcmFtIHIg5YyF5ZCrUkdCQeWIhumHj+eahOminOiJsuWvueixoe+8jOaIluiAheminOiJsueahHLliIbph49cclxuICAgICAqIEBwYXJhbSBnIOminOiJsueahGfliIbph49cclxuICAgICAqIEBwYXJhbSBiIOminOiJsueahGLliIbph49cclxuICAgICAqIEBwYXJhbSBhIOminOiJsumAj+aYjuW6pu+8jOm7mOiupOS4ujI1NVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0Q29sb3IocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYTogbnVtYmVyID0gMjU1KSB7XHJcbiAgICAgICAgdGhpcy5jdXJDb2xvciA9IHRoaXMuY29udmVydFRvTnVtYmVyKHIsIGcsIGIsIGEpO1xyXG4gICAgICAgIGlmICghdGhpcy5jb2xvckNvdW50W3RoaXMuY3VyQ29sb3JdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JDb3VudFt0aGlzLmN1ckNvbG9yXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGVtcENvbG9yID0gdGhpcy5jdXJDb2xvcjtcclxuICAgICAgICB0aGlzLnRlbXBSID0gcjtcclxuICAgICAgICB0aGlzLnRlbXBHID0gZztcclxuICAgICAgICB0aGlzLnRlbXBCID0gYjtcclxuICAgICAgICB0aGlzLnRlbXBBID0gYTtcclxuICAgIH1cclxuICAgIC8qKua4heepuuaJgOacieW3sue7mOWItueahOWGheWuuSAqL1xyXG4gICAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyNyZWdpb24g57uY5Yi277ya55u057q/XHJcbiAgICAvL+ebtOe6v1xyXG4gICAgLyoq5LiK5LiA5qyh57uY5Yi255qE55u057q/55qE57uI54K5ICovXHJcbiAgICBwcml2YXRlIHByZXZpb3VzTGluZUVuZFBvczogVmVjMjtcclxuICAgIHByaXZhdGUgcHJldmlvdXNMaW5lRW5kUG9zVDogVmVjMjtcclxuICAgIHByaXZhdGUgcHJldmlvdXNMaW5lRW5kUG9zQjogVmVjMjtcclxuICAgIC8qKuS4iuS4gOasoee7mOWItueahOebtOe6v+eahOerr+eCueagt+W8jyAqL1xyXG4gICAgcHJpdmF0ZSBwcmV2aW91c0xpbmVDaXJjbGVFbmQ6IGJvb2xlYW47XHJcbiAgICAvKirkuIrkuIDmrKHnu5jliLbnmoTnm7Tnur/nmoTlrr3luqYgKi9cclxuICAgIHByaXZhdGUgcHJldmlvdXNMaW5lV2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgaW5pdExpbmVEYXRhKCkge1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNMaW5lRW5kUG9zID0gbmV3IFZlYzIoKTtcclxuICAgICAgICB0aGlzLnByZXZpb3VzTGluZUVuZFBvc1QgPSBuZXcgVmVjMigpO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNMaW5lRW5kUG9zQiA9IG5ldyBWZWMyKCk7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0xpbmVDaXJjbGVFbmQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNMaW5lV2lkdGggPSAxO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vliqjnlLvnrJTliLDmjIflrprnmoTkvY3nva7vvIzosIPnlKggbGluZVRvIOWHveaVsOaXtuWwhuS9v+eUqOivpeeCueS9nOS4uuebtOe6v+eahOi1t+eCuVxyXG4gICAgICogQHBhcmFtIHggICAgIOWdkOagh1hcclxuICAgICAqIEBwYXJhbSB5ICAgICDlnZDmoIdZXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtb3ZlVG8oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB4ID0gTWF0aC5yb3VuZCh4KTtcclxuICAgICAgICB5ID0gTWF0aC5yb3VuZCh5KTtcclxuICAgICAgICB0aGlzLnByZXZpb3VzTGluZUVuZFBvcy5zZXQoeCwgeSk7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0xpbmVFbmRQb3NULnNldCh4LCB5KTtcclxuICAgICAgICB0aGlzLnByZXZpb3VzTGluZUVuZFBvc0Iuc2V0KHgsIHkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7nur/lrr1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldExpbmVXaWR0aCh3OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnByZXZpb3VzTGluZVdpZHRoID0gdztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u57q/5q6156uv54K55qC35byPXHJcbiAgICAgKiBAcGFyYW0gYiDnur/mrrXnq6/ngrnmmK/lkKbkuLrlnIblvaJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldExpbmVDaXJjbGVFbmQoYjogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNMaW5lQ2lyY2xlRW5kID0gYjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe7mOWItuebtOe6v++8jOS9v+eUqOm7mOiupOeahOminOiJsuOAgee6v+WuveWSjOe6v+auteerr+eCueagt+W8j1xyXG4gICAgICogQHBhcmFtIHgxICAgICAgICDotbfngrnlnZDmoIdYXHJcbiAgICAgKiBAcGFyYW0geTEgICAgICAgIOi1t+eCueWdkOagh1lcclxuICAgICAqIEBwYXJhbSB4MiAgICAgICAg57uI54K55Z2Q5qCHWFxyXG4gICAgICogQHBhcmFtIHkyICAgICAgICDnu4jngrnlnZDmoIdZXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaW5lKHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIpIHtcclxuICAgICAgICB4MSA9IE1hdGgucm91bmQoeDEpO1xyXG4gICAgICAgIHgyID0gTWF0aC5yb3VuZCh4Mik7XHJcbiAgICAgICAgeTEgPSBNYXRoLnJvdW5kKHkxKTtcclxuICAgICAgICB5MiA9IE1hdGgucm91bmQoeTIpO1xyXG4gICAgICAgIGlmICh4MSA9PSB4MiAmJiB5MSA9PSB5MikgcmV0dXJuO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMucHJldmlvdXNMaW5lV2lkdGg7XHJcbiAgICAgICAgbGV0IGNpcmNsZUVuZCA9IHRoaXMucHJldmlvdXNMaW5lQ2lyY2xlRW5kO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNMaW5lRW5kUG9zLnNldCh4MiwgeTIpO1xyXG4gICAgICAgIGxldCBvZmZzZXRYID0gMDtcclxuICAgICAgICBsZXQgb2Zmc2V0WSA9IDA7XHJcbiAgICAgICAgbGV0IHJhdGVLID0gMTtcclxuICAgICAgICBpZiAoeDEgPT0geDIpIHtcclxuICAgICAgICAgICAgb2Zmc2V0WCA9IE1hdGgucm91bmQod2lkdGggKiAwLjUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoeTEgPT0geTIpIHtcclxuICAgICAgICAgICAgb2Zmc2V0WSA9IE1hdGgucm91bmQod2lkdGggKiAwLjUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBrID0gKHkyIC0geTEpIC8gKHgyIC0geDEpO1xyXG4gICAgICAgICAgICByYXRlSyA9IE1hdGguc3FydChrICogayArIDEpO1xyXG4gICAgICAgICAgICBvZmZzZXRZID0gd2lkdGggKiAwLjUgLyByYXRlSztcclxuICAgICAgICAgICAgb2Zmc2V0WCA9IE1hdGgucm91bmQob2Zmc2V0WSAqIGspO1xyXG4gICAgICAgICAgICBvZmZzZXRZID0gTWF0aC5yb3VuZChvZmZzZXRZKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0xpbmVFbmRQb3NULnNldCh4MiAtIG9mZnNldFgsIHkyICsgb2Zmc2V0WSk7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0xpbmVFbmRQb3NCLnNldCh4MiArIG9mZnNldFgsIHkyIC0gb2Zmc2V0WSk7XHJcblxyXG4gICAgICAgIGxldCBwMSA9IG5ldyBWZWMyKHgxLCB5MSk7XHJcbiAgICAgICAgbGV0IHAyID0gbmV3IFZlYzIoeDIsIHkyKTtcclxuICAgICAgICBpZiAoeDEgPiB4Mikge1xyXG4gICAgICAgICAgICBwMS54ID0geDI7XHJcbiAgICAgICAgICAgIHAxLnkgPSB5MjtcclxuICAgICAgICAgICAgcDIueCA9IHgxO1xyXG4gICAgICAgICAgICBwMi55ID0geTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RyYXdMaW5lKHAxLCBwMiwgd2lkdGgsIG9mZnNldFgsIG9mZnNldFksIHJhdGVLKTtcclxuICAgICAgICBpZiAoY2lyY2xlRW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYXdDaXJjbGUoeDEsIHkxLCB3aWR0aCAqIDAuNSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYXdDaXJjbGUoeDIsIHkyLCB3aWR0aCAqIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5jliLbliLDmjIflrprlnZDmoIfnmoTnm7Tnur/vvIzotbfngrnkuLrkuIrkuIDmrKHnu5jliLbnmoTnm7Tnur/nmoTnu4jngrnvvIzkvb/nlKjpu5jorqTnmoTpopzoibLjgIHlrr3luqblkoznur/mrrXnq6/ngrnmoLflvI9cclxuICAgICAqIEBwYXJhbSB4ICAgICDnu4jngrnlnZDmoIdYXHJcbiAgICAgKiBAcGFyYW0geSAgICAg57uI54K55Z2Q5qCHWVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGluZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgeCA9IE1hdGgucm91bmQoeCk7XHJcbiAgICAgICAgeSA9IE1hdGgucm91bmQoeSk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNMaW5lRW5kUG9zLnggPT0geCAmJiB0aGlzLnByZXZpb3VzTGluZUVuZFBvcy55ID09IHkpIHJldHVybjtcclxuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLnByZXZpb3VzTGluZVdpZHRoO1xyXG4gICAgICAgIGxldCBjaXJjbGVFbmQgPSB0aGlzLnByZXZpb3VzTGluZUNpcmNsZUVuZDtcclxuICAgICAgICBsZXQgeDEgPSB0aGlzLnByZXZpb3VzTGluZUVuZFBvcy54O1xyXG4gICAgICAgIGxldCB5MSA9IHRoaXMucHJldmlvdXNMaW5lRW5kUG9zLnk7XHJcbiAgICAgICAgbGV0IHgyID0geDtcclxuICAgICAgICBsZXQgeTIgPSB5O1xyXG4gICAgICAgIGlmICh4MSA+IHgyKSB7XHJcbiAgICAgICAgICAgIHgxID0geDI7XHJcbiAgICAgICAgICAgIHkxID0geTI7XHJcbiAgICAgICAgICAgIHgyID0gdGhpcy5wcmV2aW91c0xpbmVFbmRQb3MueDtcclxuICAgICAgICAgICAgeTIgPSB0aGlzLnByZXZpb3VzTGluZUVuZFBvcy55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb2Zmc2V0WCA9IDA7XHJcbiAgICAgICAgbGV0IG9mZnNldFkgPSAwO1xyXG4gICAgICAgIGxldCByYXRlSyA9IDE7XHJcbiAgICAgICAgaWYgKHgxID09IHgyKSB7XHJcbiAgICAgICAgICAgIG9mZnNldFggPSBNYXRoLnJvdW5kKHdpZHRoICogMC41KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHkxID09IHkyKSB7XHJcbiAgICAgICAgICAgIG9mZnNldFkgPSBNYXRoLnJvdW5kKHdpZHRoICogMC41KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgayA9ICh5MiAtIHkxKSAvICh4MiAtIHgxKTtcclxuICAgICAgICAgICAgcmF0ZUsgPSBNYXRoLnNxcnQoayAqIGsgKyAxKTtcclxuICAgICAgICAgICAgb2Zmc2V0WSA9IHdpZHRoICogMC41IC8gcmF0ZUs7XHJcbiAgICAgICAgICAgIG9mZnNldFggPSBNYXRoLnJvdW5kKG9mZnNldFkgKiBrKTtcclxuICAgICAgICAgICAgb2Zmc2V0WSA9IE1hdGgucm91bmQob2Zmc2V0WSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY2lyY2xlRW5kKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzTGluZUVuZFBvcy54ICE9IHRoaXMucHJldmlvdXNMaW5lRW5kUG9zVC54XHJcbiAgICAgICAgICAgICAgICB8fCB0aGlzLnByZXZpb3VzTGluZUVuZFBvcy55ICE9IHRoaXMucHJldmlvdXNMaW5lRW5kUG9zVC55KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcDEgPSBuZXcgVmVjMih0aGlzLnByZXZpb3VzTGluZUVuZFBvcy54IC0gb2Zmc2V0WCwgdGhpcy5wcmV2aW91c0xpbmVFbmRQb3MueSArIG9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHAyID0gbmV3IFZlYzIodGhpcy5wcmV2aW91c0xpbmVFbmRQb3MueCArIG9mZnNldFgsIHRoaXMucHJldmlvdXNMaW5lRW5kUG9zLnkgLSBvZmZzZXRZKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdUcmlhbmdsZShbcDEsIHAyLCB0aGlzLnByZXZpb3VzTGluZUVuZFBvc1RdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdUcmlhbmdsZShbcDEsIHAyLCB0aGlzLnByZXZpb3VzTGluZUVuZFBvc0JdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYXdDaXJjbGUoeDEsIHkxLCB3aWR0aCAqIDAuNSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYXdDaXJjbGUoeDIsIHkyLCB3aWR0aCAqIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RyYXdMaW5lKG5ldyBWZWMyKHgxLCB5MSksIG5ldyBWZWMyKHgyLCB5MiksIHdpZHRoLCBvZmZzZXRYLCBvZmZzZXRZLCByYXRlSyk7XHJcblxyXG4gICAgICAgIHRoaXMucHJldmlvdXNMaW5lRW5kUG9zLnNldCh4LCB5KTtcclxuICAgICAgICB0aGlzLnByZXZpb3VzTGluZUVuZFBvc1Quc2V0KHggLSBvZmZzZXRYLCB5ICsgb2Zmc2V0WSk7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0xpbmVFbmRQb3NCLnNldCh4ICsgb2Zmc2V0WCwgeSAtIG9mZnNldFkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5jliLbnm7Tnur/vvIzkuI3ljIXlkKvnur/mrrXnq6/ngrnmoLflvI9cclxuICAgICAqIEBwYXJhbSBwMSAgICAgICAg57q/5q616LW354K55Z2Q5qCHXHJcbiAgICAgKiBAcGFyYW0gcDIgICAgICAgIOe6v+autee7iOeCueWdkOagh1xyXG4gICAgICogQHBhcmFtIHdpZHRoICAgICDnur/mrrXlrr3luqZcclxuICAgICAqIEBwYXJhbSBjb2xvciAgICAg57q/5q616aKc6ImyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2RyYXdMaW5lKHAxOiBWZWMyLCBwMjogVmVjMiwgd2lkdGg6IG51bWJlciwgb2Zmc2V0WDogbnVtYmVyLCBvZmZzZXRZOiBudW1iZXIsIHNsb3BlUmF0ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHAxLnkgPT0gcDIueSkge1xyXG4gICAgICAgICAgICAvL+awtOW5s+ebtOe6v1xyXG4gICAgICAgICAgICBsZXQgeCA9IHAxLnggPCBwMi54ID8gcDEueCA6IHAyLng7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYXdSZWN0KG5ldyBWZWMyKHgsIE1hdGgucm91bmQocDEueSAtIHdpZHRoICogMC41KSksIE1hdGguYWJzKHAxLnggLSBwMi54KSwgd2lkdGgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocDEueCA9PSBwMi54KSB7XHJcbiAgICAgICAgICAgIC8v5Z6C55u055u057q/XHJcbiAgICAgICAgICAgIGxldCB5ID0gcDEueSA8IHAyLnkgPyBwMS55IDogcDIueTtcclxuICAgICAgICAgICAgdGhpcy5fZHJhd1JlY3QobmV3IFZlYzIoTWF0aC5yb3VuZChwMS54IC0gd2lkdGggKiAwLjUpLCB5KSwgd2lkdGgsIE1hdGguYWJzKHAxLnkgLSBwMi55KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/lgL7mlpznm7Tnur9cclxuICAgICAgICAgICAgbGV0IGludmVyc2VLID0gKHAxLnggLSBwMi54KSAvIChwMS55IC0gcDIueSk7XHJcbiAgICAgICAgICAgIGxldCBwMXQgPSBuZXcgVmVjMihwMS54IC0gb2Zmc2V0WCwgcDEueSArIG9mZnNldFkpO1xyXG4gICAgICAgICAgICBsZXQgcDFiID0gbmV3IFZlYzIocDEueCArIG9mZnNldFgsIHAxLnkgLSBvZmZzZXRZKTtcclxuICAgICAgICAgICAgbGV0IHAydCA9IG5ldyBWZWMyKHAyLnggLSBvZmZzZXRYLCBwMi55ICsgb2Zmc2V0WSk7XHJcbiAgICAgICAgICAgIGxldCBwMmIgPSBuZXcgVmVjMihwMi54ICsgb2Zmc2V0WCwgcDIueSAtIG9mZnNldFkpO1xyXG4gICAgICAgICAgICBsZXQgcDFjID0gbmV3IFZlYzIoKTtcclxuICAgICAgICAgICAgbGV0IHAyYyA9IG5ldyBWZWMyKCk7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBNYXRoLnJvdW5kKHdpZHRoICogc2xvcGVSYXRlKTtcclxuICAgICAgICAgICAgaWYgKHAyLnkgPiBwMS55KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocDFiLnggPCBwMnQueCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHAxYy54ID0gcDFiLng7XHJcbiAgICAgICAgICAgICAgICAgICAgcDFjLnkgPSBwMWIueSArIGhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBwMmMueCA9IHAydC54O1xyXG4gICAgICAgICAgICAgICAgICAgIHAyYy55ID0gcDJ0LnkgLSBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDFjLCBwMWIsIHAxdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1BhcmFsbGVsb2dyYW0ocDFiLCBwMmMsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDJ0LCBwMmMsIHAyYik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHAxYy54ID0gcDFiLng7XHJcbiAgICAgICAgICAgICAgICAgICAgcDFjLnkgPSBNYXRoLnJvdW5kKHAydC55IC0gKHAxYy54IC0gcDJ0LngpICogaW52ZXJzZUspO1xyXG4gICAgICAgICAgICAgICAgICAgIHAyYy54ID0gcDJ0Lng7XHJcbiAgICAgICAgICAgICAgICAgICAgcDJjLnkgPSBNYXRoLnJvdW5kKHAxYi55ICsgKHAxYi54IC0gcDJjLngpICogaW52ZXJzZUspO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAydCwgcDJjLCBwMXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdQYXJhbGxlbG9ncmFtKHAyYywgcDFiLCBwMnQueSAtIHAyYy55KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3VmVydGljYWxUcmlhbmdsZShwMWMsIHAxYiwgcDJiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChwMXQueCA8IHAyYi54KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcDFjLnggPSBwMXQueDtcclxuICAgICAgICAgICAgICAgICAgICBwMWMueSA9IHAxdC55IC0gaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIHAyYy54ID0gcDJiLng7XHJcbiAgICAgICAgICAgICAgICAgICAgcDJjLnkgPSBwMmIueSArIGhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3VmVydGljYWxUcmlhbmdsZShwMXQsIHAxYywgcDFiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3UGFyYWxsZWxvZ3JhbShwMWMsIHAyYiwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3VmVydGljYWxUcmlhbmdsZShwMmMsIHAyYiwgcDJ0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcDFjLnggPSBwMXQueDtcclxuICAgICAgICAgICAgICAgICAgICBwMWMueSA9IE1hdGgucm91bmQocDJiLnkgLSAocDFjLnggLSBwMmIueCkgKiBpbnZlcnNlSyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcDJjLnggPSBwMmIueDtcclxuICAgICAgICAgICAgICAgICAgICBwMmMueSA9IE1hdGgucm91bmQocDF0LnkgKyAocDF0LnggLSBwMmMueCkgKiBpbnZlcnNlSyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDJjLCBwMmIsIHAxYik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhd1BhcmFsbGVsb2dyYW0ocDJiLCBwMWMsIHAxdC55IC0gcDFjLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAxdCwgcDFjLCBwMnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vI3JlZ2lvbiDnu5jliLbvvJrnn6nlvaJcclxuICAgIC8qKlxyXG4gICAgICog57uY5Yi255+p5b2iXHJcbiAgICAgKiBAcGFyYW0geCAgICAg55+p5b2i5bem5LiL6KeS55qE5Z2Q5qCHWFxyXG4gICAgICogQHBhcmFtIHkgICAgIOefqeW9ouW3puS4i+inkueahOWdkOagh1lcclxuICAgICAqIEBwYXJhbSB3ICAgICDnn6nlvaLlrr3luqZcclxuICAgICAqIEBwYXJhbSBoICAgICDnn6nlvaLpq5jluqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XHJcbiAgICAgICAgeCA9IE1hdGgucm91bmQoeCk7XHJcbiAgICAgICAgeSA9IE1hdGgucm91bmQoeSk7XHJcbiAgICAgICAgdGhpcy5fZHJhd1JlY3QobmV3IFZlYzIoeCwgeSksIHcsIGgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5jliLbnn6nlvaJcclxuICAgICAqIEBwYXJhbSBwICAgICAgICAg55+p5b2i5bem5LiL6aG254K555qE5Z2Q5qCHXHJcbiAgICAgKiBAcGFyYW0gdyAgICAgICAgIOefqeW9ouWuveW6plxyXG4gICAgICogQHBhcmFtIGggICAgICAgICDnn6nlvaLpq5jluqZcclxuICAgICAqIEBwYXJhbSBjb2xvciAgICAg55+p5b2i5aGr5YWF55qE6aKc6ImyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2RyYXdSZWN0KHA6IFZlYzIsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG1pblggPSB0aGlzLmNsYW1wWChwLngpO1xyXG4gICAgICAgIGxldCBtYXhYID0gdGhpcy5jbGFtcFgocC54ICsgdyk7XHJcbiAgICAgICAgbGV0IG1pblkgPSB0aGlzLmNsYW1wWShwLnkpO1xyXG4gICAgICAgIGxldCBtYXhZID0gdGhpcy5jbGFtcFkocC55ICsgaCk7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgKyt5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYXdSb3dQaXhlbChtaW5YLCBtYXhYLCB5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOe7mOWItuW5s+ihjOWbm+i+ueW9ou+8jOW5s+ihjOWbm+i+ueW9oueahOW3puWPs+S4pOi+ueS4jlnovbTlubPooYxcclxuICAgICAqIEBwYXJhbSBwMSAgICAgICAg5bem5LiL6aG254K55Z2Q5qCHXHJcbiAgICAgKiBAcGFyYW0gcDIgICAgICAgIOWPs+S4i+mhtueCueWdkOagh1xyXG4gICAgICogQHBhcmFtIGhlaWdodCAgICDlnoLnm7Tovrnpq5jluqZcclxuICAgICAqIEBwYXJhbSBjb2xvciAgICAg6aKc6ImyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2RyYXdQYXJhbGxlbG9ncmFtKHAxOiBWZWMyLCBwMjogVmVjMiwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAocDEueCA9PSBwMi54KSByZXR1cm47XHJcbiAgICAgICAgbGV0IGsgPSAocDIueSAtIHAxLnkpIC8gKHAyLnggLSBwMS54KTtcclxuICAgICAgICBsZXQgbWluWCA9IHRoaXMuX21pblgocDEueCk7XHJcbiAgICAgICAgbGV0IG1heFggPSB0aGlzLl9tYXhYKHAyLngpO1xyXG4gICAgICAgIGZvciAobGV0IHggPSBtaW5YOyB4IDw9IG1heFg7ICsreCkge1xyXG4gICAgICAgICAgICBsZXQgbWluWSA9IHAxLnkgKyBNYXRoLnJvdW5kKCh4IC0gcDEueCkgKiBrKTtcclxuICAgICAgICAgICAgbGV0IG1heFkgPSBtaW5ZICsgaGVpZ2h0O1xyXG4gICAgICAgICAgICBtaW5ZID0gdGhpcy5fbWluWShtaW5ZKTtcclxuICAgICAgICAgICAgbWF4WSA9IHRoaXMuX21heFkobWF4WSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYXdDb2xQaXhlbChtaW5ZLCBtYXhZLCB4KTtcclxuICAgICAgICAgICAgLy8gZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgKyt5KSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLl9kcmF3UGl4ZWwoeCwgeSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAvLyNyZWdpb24g57uY5Yi277ya5LiJ6KeS5b2iXHJcbiAgICAvKipcclxuICAgICAqIOe7mOWItuS4ieinkuW9olxyXG4gICAgICogQHBhcmFtIHgxICAgIOmhtueCuTHlnZDmoIdYXHJcbiAgICAgKiBAcGFyYW0geTEgICAg6aG254K5MeWdkOagh1lcclxuICAgICAqIEBwYXJhbSB4MiAgICDpobbngrky5Z2Q5qCHWFxyXG4gICAgICogQHBhcmFtIHkyICAgIOmhtueCuTLlnZDmoIdZXHJcbiAgICAgKiBAcGFyYW0geDMgICAg6aG254K5M+WdkOagh1hcclxuICAgICAqIEBwYXJhbSB5MyAgICDpobbngrkz5Z2Q5qCHWVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdHJpYW5nbGUoeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlciwgeDM6IG51bWJlciwgeTM6IG51bWJlcikge1xyXG4gICAgICAgIHgxID0gTWF0aC5yb3VuZCh4MSk7XHJcbiAgICAgICAgeTEgPSBNYXRoLnJvdW5kKHkxKTtcclxuICAgICAgICB4MiA9IE1hdGgucm91bmQoeDIpO1xyXG4gICAgICAgIHkyID0gTWF0aC5yb3VuZCh5Mik7XHJcbiAgICAgICAgeDMgPSBNYXRoLnJvdW5kKHgzKTtcclxuICAgICAgICB5MyA9IE1hdGgucm91bmQoeTMpO1xyXG4gICAgICAgIGxldCBwTGlzdDogVmVjMltdID0gW107XHJcbiAgICAgICAgcExpc3QucHVzaChuZXcgVmVjMih4MSwgeTEpKTtcclxuICAgICAgICBwTGlzdC5wdXNoKG5ldyBWZWMyKHgyLCB5MikpO1xyXG4gICAgICAgIHBMaXN0LnB1c2gobmV3IFZlYzIoeDMsIHkzKSk7XHJcbiAgICAgICAgdGhpcy5fZHJhd1RyaWFuZ2xlKHBMaXN0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog57uY5Yi25Lu75oSP5LiJ6KeS5b2iXHJcbiAgICAgKiBAcGFyYW0gcDEgICAg6aG254K55Z2Q5qCHXHJcbiAgICAgKiBAcGFyYW0gcDIgXHJcbiAgICAgKiBAcGFyYW0gcDMgXHJcbiAgICAgKiBAcGFyYW0gY29sb3Ig5aGr5YWF6aKc6ImyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2RyYXdUcmlhbmdsZShwTGlzdDogVmVjMltdKSB7XHJcbiAgICAgICAgcExpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS54IC0gYi54O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBwMSA9IHBMaXN0WzBdO1xyXG4gICAgICAgIGxldCBwMiA9IHBMaXN0WzFdO1xyXG4gICAgICAgIGxldCBwMyA9IHBMaXN0WzJdO1xyXG4gICAgICAgIGlmIChwMS54ID09IHAyLngpIHtcclxuICAgICAgICAgICAgaWYgKHAxLnggPT0gcDMueCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAocDEueSA8IHAyLnkpIHtcclxuICAgICAgICAgICAgICAgIHAxID0gcExpc3RbMV07XHJcbiAgICAgICAgICAgICAgICBwMiA9IHBMaXN0WzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAxLCBwMiwgcDMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBrID0gKHAzLnkgLSBwMS55KSAvIChwMy54IC0gcDEueCk7XHJcbiAgICAgICAgbGV0IHA0ID0gbmV3IFZlYzIocDIueCwgTWF0aC5yb3VuZChwMS55ICsgKHAyLnggLSBwMS54KSAqIGspKTtcclxuICAgICAgICBpZiAocDQueSA9PSBwMi55KSByZXR1cm47XHJcbiAgICAgICAgaWYgKHA0LnkgPCBwMi55KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAyLCBwNCwgcDEpO1xyXG4gICAgICAgICAgICB0aGlzLl9kcmF3VmVydGljYWxUcmlhbmdsZShwMiwgcDQsIHAzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9kcmF3VmVydGljYWxUcmlhbmdsZShwNCwgcDIsIHAxKTtcclxuICAgICAgICAgICAgdGhpcy5fZHJhd1ZlcnRpY2FsVHJpYW5nbGUocDQsIHAyLCBwMyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5jliLbkuIDmnaHovrnkuI5Z6L205bmz6KGM55qE5LiJ6KeS5b2iXHJcbiAgICAgKiBAcGFyYW0gcDEgICAg5LiJ6KeS5b2i5Z6C55u06L6555qEIOS4iiDpobbngrnlnZDmoIdcclxuICAgICAqIEBwYXJhbSBwMiAgICDkuInop5LlvaLlnoLnm7TovrnnmoQg5LiLIOmhtueCueWdkOagh1xyXG4gICAgICogQHBhcmFtIHAzICAgIOS4ieinkuW9oiDlt6bkvqfmiJblj7Pkvqcg6aG254K55Z2Q5qCHXHJcbiAgICAgKiBAcGFyYW0gY29sb3Ig6KaB57uY5Yi255qE6aKc6ImyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2RyYXdWZXJ0aWNhbFRyaWFuZ2xlKHAxOiBWZWMyLCBwMjogVmVjMiwgcDM6IFZlYzIpIHtcclxuICAgICAgICBpZiAocDMueCA9PSBwMS54KSByZXR1cm47XHJcbiAgICAgICAgbGV0IGsxID0gKHAzLnkgLSBwMS55KSAvIChwMy54IC0gcDEueCk7XHJcbiAgICAgICAgbGV0IGsyID0gKHAzLnkgLSBwMi55KSAvIChwMy54IC0gcDIueCk7XHJcbiAgICAgICAgbGV0IG1heFggPSBwMy54LCBtaW5YID0gcDEueDtcclxuICAgICAgICBpZiAobWF4WCA8IG1pblgpIHtcclxuICAgICAgICAgICAgbWF4WCA9IHAxLng7XHJcbiAgICAgICAgICAgIG1pblggPSBwMy54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBtaW5YID0gdGhpcy5fbWluWChtaW5YKTtcclxuICAgICAgICBtYXhYID0gdGhpcy5fbWF4WChtYXhYKTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gbWluWDsgeCA8PSBtYXhYOyArK3gpIHtcclxuICAgICAgICAgICAgbGV0IG1heFkgPSB0aGlzLmNsYW1wWShNYXRoLnJvdW5kKHAxLnkgKyAoeCAtIHAxLngpICogazEpKTtcclxuICAgICAgICAgICAgbGV0IG1pblkgPSB0aGlzLmNsYW1wWShNYXRoLnJvdW5kKHAyLnkgKyAoeCAtIHAyLngpICogazIpKTtcclxuICAgICAgICAgICAgdGhpcy5fZHJhd0NvbFBpeGVsKG1pblksIG1heFksIHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vI3JlZ2lvbiDnu5jliLbvvJrlnIZcclxuICAgIC8qKlxyXG4gICAgKiDnu5jliLbkuIDkuKrlnIZcclxuICAgICogQHBhcmFtIHggICAgICAgICDlnIblv4PlnZDmoId4XHJcbiAgICAqIEBwYXJhbSB5ICAgICAgICAg5ZyG5b+D5Z2Q5qCHeVxyXG4gICAgKiBAcGFyYW0gcmFkaXVzICAgIOWchueahOWNiuW+hFxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBjaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyKSB7XHJcbiAgICAgICAgeCA9IE1hdGgucm91bmQoeCk7XHJcbiAgICAgICAgeSA9IE1hdGgucm91bmQoeSk7XHJcbiAgICAgICAgdGhpcy5fZHJhd0NpcmNsZSh4LCB5LCByYWRpdXMpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfZHJhd0NpcmNsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIpIHtcclxuICAgICAgICByYWRpdXMgPSBNYXRoLnJvdW5kKHJhZGl1cyk7XHJcbiAgICAgICAgaWYgKHJhZGl1cyA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgLy/kuInop5LlvaLnmoTmlpzovrnnmoTlubPmlrlcclxuICAgICAgICBsZXQgZGlzID0gcmFkaXVzICogcmFkaXVzO1xyXG4gICAgICAgIGxldCBtaW5ZID0gdGhpcy5jbGFtcFkoeSAtIHJhZGl1cyk7XHJcbiAgICAgICAgbGV0IG1heFkgPSB0aGlzLmNsYW1wWSh5ICsgcmFkaXVzKTtcclxuICAgICAgICBmb3IgKGxldCBqID0gbWluWTsgaiA8PSBtYXhZOyArK2opIHtcclxuICAgICAgICAgICAgbGV0IHIgPSBqIC0geTtcclxuICAgICAgICAgICAgciA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KGRpcyAtIHIgKiByKSk7XHJcbiAgICAgICAgICAgIGxldCBtaW5YID0gdGhpcy5jbGFtcFgoeCAtIHIpO1xyXG4gICAgICAgICAgICBsZXQgbWF4WCA9IHRoaXMuY2xhbXBYKHggKyByKTtcclxuICAgICAgICAgICAgdGhpcy5fZHJhd1Jvd1BpeGVsKG1pblgsIG1heFgsIGopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vI3JlZ2lvbiDlhoXpg6jnu5jliLbmlrnms5VcclxuICAgIHByaXZhdGUgX21pblgoeDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4geCA+PSAwID8geCA6IDA7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9tYXhYKHg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHggPCB0aGlzLndpZHRoID8geCA6IHRoaXMud2lkdGggLSAxO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfbWluWSh5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB5ID49IDAgPyB5IDogMDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX21heFkoeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4geSA8IHRoaXMuaGVpZ2h0ID8geSA6IHRoaXMuaGVpZ2h0IC0gMTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY2xhbXBYKHg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHggPCAwKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAoeCA+PSB0aGlzLndpZHRoKSByZXR1cm4gdGhpcy53aWR0aCAtIDE7XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNsYW1wWSh5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh5IDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKHkgPj0gdGhpcy5oZWlnaHQpIHJldHVybiB0aGlzLmhlaWdodCAtIDE7XHJcbiAgICAgICAgcmV0dXJuIHk7XHJcbiAgICB9XHJcbiAgICAvKirnu5jliLbkuIDkuKrlg4/ntKDngrnnmoTpopzoibIgKi9cclxuICAgIHByaXZhdGUgX2RyYXdQaXhlbCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHggPSBNYXRoLnJvdW5kKHgpO1xyXG4gICAgICAgIHkgPSBNYXRoLnJvdW5kKHkpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hc2tQb2ludFt4XVt5XSA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMucG9pbnRDb2xvclt4XVt5XSA9PSB0aGlzLnRlbXBDb2xvcikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBpbmRleCA9ICh5ICogdGhpcy53aWR0aCArIHgpICogNDtcclxuICAgICAgICB0aGlzLnBpeGVsQ29sb3JbaW5kZXhdID0gdGhpcy50ZW1wUjtcclxuICAgICAgICB0aGlzLnBpeGVsQ29sb3JbaW5kZXggKyAxXSA9IHRoaXMudGVtcEc7XHJcbiAgICAgICAgdGhpcy5waXhlbENvbG9yW2luZGV4ICsgMl0gPSB0aGlzLnRlbXBCO1xyXG4gICAgICAgIHRoaXMucGl4ZWxDb2xvcltpbmRleCArIDNdID0gdGhpcy50ZW1wQTtcclxuICAgICAgICBsZXQgYyA9IHRoaXMucG9pbnRDb2xvclt4XVt5XTtcclxuICAgICAgICB0aGlzLmNvbG9yQ291bnRbY10tLTtcclxuICAgICAgICB0aGlzLmNvbG9yQ291bnRbdGhpcy50ZW1wQ29sb3JdKys7XHJcbiAgICAgICAgdGhpcy5wb2ludENvbG9yW3hdW3ldID0gdGhpcy50ZW1wQ29sb3I7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOi/nue7ree7mOWItuS4gOihjOS4reeahOWDj+e0oOeCuVxyXG4gICAgICogQHBhcmFtIHN0YXJ0WCAgICDotbfngrlY5Z2Q5qCHXHJcbiAgICAgKiBAcGFyYW0gZW5kWCAgICAgIOe7iOeCuVjlnZDmoIdcclxuICAgICAqIEBwYXJhbSB5ICAgICAgICAgWeWdkOagh1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9kcmF3Um93UGl4ZWwoc3RhcnRYOiBudW1iZXIsIGVuZFg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gKHkgKiB0aGlzLndpZHRoICsgc3RhcnRYKSAqIDQ7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHN0YXJ0WDsgeCA8PSBlbmRYOyArK3gpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWFza1BvaW50W3hdW3ldICE9IDAgJiYgdGhpcy5wb2ludENvbG9yW3hdW3ldICE9IHRoaXMudGVtcENvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpeGVsQ29sb3JbaW5kZXhdID0gdGhpcy50ZW1wUjtcclxuICAgICAgICAgICAgICAgIHRoaXMucGl4ZWxDb2xvcltpbmRleCArIDFdID0gdGhpcy50ZW1wRztcclxuICAgICAgICAgICAgICAgIHRoaXMucGl4ZWxDb2xvcltpbmRleCArIDJdID0gdGhpcy50ZW1wQjtcclxuICAgICAgICAgICAgICAgIHRoaXMucGl4ZWxDb2xvcltpbmRleCArIDNdID0gdGhpcy50ZW1wQTtcclxuICAgICAgICAgICAgICAgIGxldCBjID0gdGhpcy5wb2ludENvbG9yW3hdW3ldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvckNvdW50W2NdLS07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yQ291bnRbdGhpcy50ZW1wQ29sb3JdKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvaW50Q29sb3JbeF1beV0gPSB0aGlzLnRlbXBDb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbmRleCArPSA0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6L+e57ut57uY5Yi25LiA5YiX5Lit55qE5YOP57Sg54K5XHJcbiAgICAgKiBAcGFyYW0gc3RhcnRZICAgIOi1t+eCuVnlnZDmoIdcclxuICAgICAqIEBwYXJhbSBlbmRZICAgICAg57uI54K5WeWdkOagh1xyXG4gICAgICogQHBhcmFtIHggICAgICAgICBY5Z2Q5qCHXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2RyYXdDb2xQaXhlbChzdGFydFk6IG51bWJlciwgZW5kWTogbnVtYmVyLCB4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAoc3RhcnRZICogdGhpcy53aWR0aCArIHgpICogNDtcclxuICAgICAgICBmb3IgKGxldCB5ID0gc3RhcnRZOyB5IDw9IGVuZFk7ICsreSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXNrUG9pbnRbeF1beV0gIT0gMCAmJiB0aGlzLnBvaW50Q29sb3JbeF1beV0gIT0gdGhpcy50ZW1wQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGl4ZWxDb2xvcltpbmRleF0gPSB0aGlzLnRlbXBSO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waXhlbENvbG9yW2luZGV4ICsgMV0gPSB0aGlzLnRlbXBHO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waXhlbENvbG9yW2luZGV4ICsgMl0gPSB0aGlzLnRlbXBCO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waXhlbENvbG9yW2luZGV4ICsgM10gPSB0aGlzLnRlbXBBO1xyXG4gICAgICAgICAgICAgICAgbGV0IGMgPSB0aGlzLnBvaW50Q29sb3JbeF1beV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yQ291bnRbY10tLTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JDb3VudFt0aGlzLnRlbXBDb2xvcl0rKztcclxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRDb2xvclt4XVt5XSA9IHRoaXMudGVtcENvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluZGV4ICs9IHRoaXMud2lkdGggKiA0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5bCGUkdCQeminOiJsuWIhumHj+i9rOaNouS4uuS4gOS4quaVsOWAvOihqOekuueahOminOiJsu+8jOminOiJsuWIhumHj+S4ujB+MjU15LmL6Ze055qE5YC8XHJcbiAgICAgKiBAcGFyYW0gciBcclxuICAgICAqIEBwYXJhbSBnIFxyXG4gICAgICogQHBhcmFtIGIgXHJcbiAgICAgKiBAcGFyYW0gYSBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjb252ZXJ0VG9OdW1iZXIocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYTogbnVtYmVyID0gMjU1KTogbnVtYmVyIHtcclxuICAgICAgICAvL+minOiJsuWAvOWwhueUqOS6juaVsOe7hOe0ouW8le+8jOS4jeiDveS4uui0n+aVsO+8jOaVhee6ouiJsuWIhumHj+S4uuWlh+aVsOaXtuWwhuWHjzHlj5jkuLrlgbbmlbBcclxuICAgICAgICByZXR1cm4gKChyICYgMHhmZSkgPDwgMjMpIHwgKGcgPDwgMTYpIHwgKGIgPDwgOCkgfCBhO1xyXG4gICAgfVxyXG4gICAgLyoq5bCG5Y2B5YWt6L+b5Yi255qE6aKc6Imy6L2s5o2i5Li6UkdCQeWIhumHj+ihqOekuueahOminOiJsiAqL1xyXG4gICAgcHJpdmF0ZSBjb252ZXJ0VG9SR0JBKGNvbG9yOiBudW1iZXIpOiB7IHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE6IG51bWJlciB9IHtcclxuICAgICAgICAvL+minOiJsuWAvOWwhueUqOS6juaVsOe7hOe0ouW8le+8jOS4jeiDveS4uui0n+aVsO+8jOaVhee6ouiJsuWIhumHj+S4uuWlh+aVsOaXtuWwhuWHjzHlj5jkuLrlgbbmlbBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByOiAoY29sb3IgJiAweGVmMDAwMDAwKSA+PiAyMyxcclxuICAgICAgICAgICAgZzogKGNvbG9yICYgMHgwMGZmMDAwMCkgPj4gMTYsXHJcbiAgICAgICAgICAgIGI6IChjb2xvciAmIDB4MDAwMGZmMDApID4+IDgsXHJcbiAgICAgICAgICAgIGE6IChjb2xvciAmIDB4MDAwMDAwZmYpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbn1cclxuY2xhc3MgVmVjMiB7XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0KHA6IG51bWJlciB8IFZlYzIsIHk/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHAgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gcDtcclxuICAgICAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnggPSBwLng7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHAueTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19