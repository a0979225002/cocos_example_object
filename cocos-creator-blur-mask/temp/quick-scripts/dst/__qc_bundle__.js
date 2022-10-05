
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
require('./assets/migration/use_v2.1-2.2.1_cc.Toggle_event');
require('./assets/scripts/BlurMask');
require('./assets/scripts/Doge');
require('./assets/scripts/Logic');

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
                    var __filename = 'preview-scripts/assets/scripts/BlurMask.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f351aoLeYRFMJ0SkjRFg/yo', 'BlurMask');
// scripts/BlurMask.ts

"use strict";
/**
 * 模糊节点控制器
 * @author wheatup
 * @version 1.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var BlurMask = /** @class */ (function (_super) {
    __extends(BlurMask, _super);
    function BlurMask() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.texture = null;
        _this.spriteFrame = null;
        _this.sprite = null;
        _this._lastSize = new cc.Size(0, 0);
        _this._cullingMask = 0x10000000;
        _this.material = null;
        _this.ignoredNodes = [];
        _this.bightness = 0.5;
        _this.blurAmount = 0.5;
        return _this;
    }
    BlurMask.prototype.start = function () {
        var _this = this;
        // 截图图像是翻转的，所以y轴镜像
        this.node.scaleY = -1;
        // 创建渲染贴图对象
        this.texture = new cc.RenderTexture();
        this.texture.initWithSize(this.node.width, this.node.height, cc.game['_renderContext']['STENCIL_INDEX8']);
        // 在node上创建摄影机
        this.camera = this.node.addComponent(cc.Camera);
        // 不渲染0x10000000的cullingMask对象
        this.camera.cullingMask = 0xffffffff ^ this._cullingMask;
        this.camera.targetTexture = this.texture;
        // 关闭摄影机，否则每一帧它会自动进行渲染
        this.camera.enabled = false;
        // 将自身与忽略对象排除渲染
        this.cull(this.node);
        this.ignoredNodes.map(function (node) { return _this.cull(node); });
        // 创建一个sprite组件，由其进行渲染
        this.spriteFrame = new cc.SpriteFrame();
        this.sprite = this.node.addComponent(cc.Sprite);
        this.sprite.spriteFrame = this.spriteFrame;
        this.material["_props"]["bightness"] = this.bightness;
        this.material["_props"]["blurAmount"] = this.blurAmount;
        this.sprite["_materials"][0] = this.material;
    };
    // 截图并模糊
    BlurMask.prototype.snapshot = function () {
        var size = this.node.getContentSize();
        if (size.width !== this._lastSize.width || size.height !== this._lastSize.height) {
            // 大小发生改变，重新设置texture大小
            this.texture.initWithSize(this.node.width, this.node.height, cc.game['_renderContext']['STENCIL_INDEX8']);
            this.camera.targetTexture = this.texture;
        }
        this._lastSize.width = size.width;
        this._lastSize.height = size.height;
        // 手动渲染摄影机，保存截图
        this.camera.render(cc.Canvas.instance.node);
        // 应用刚刚截图的贴图到sprite身上进行渲染
        this.spriteFrame.setTexture(this.texture);
    };
    BlurMask.prototype.update = function (dt) {
        // 每一帧都进行截图处理，可以换成需要的时候再调用，比较省资源
        this.snapshot();
    };
    // 排除忽略渲染对象及其子对象
    BlurMask.prototype.cull = function (node) {
        var _this = this;
        if (node) {
            node["_cullingMask"] = this._cullingMask;
            if (node.childrenCount > 0) {
                node.children.map(function (child) { return _this.cull(child); });
            }
        }
    };
    __decorate([
        property({
            // @ts-ignore
            type: cc.Material,
            displayName: "模糊材质",
            tooltip: "用于应用模糊所用的材质，如无特殊需求请保持默认"
        })
    ], BlurMask.prototype, "material", void 0);
    __decorate([
        property({
            type: [cc.Node],
            displayName: "忽略节点列表",
            tooltip: "在此列表内的节点将不会被模糊遮罩渲染"
        })
    ], BlurMask.prototype, "ignoredNodes", void 0);
    __decorate([
        property({
            type: cc.Float,
            displayName: "亮度",
            tooltip: "降低背景的亮度",
            min: 0,
            max: 1
        })
    ], BlurMask.prototype, "bightness", void 0);
    __decorate([
        property({
            type: cc.Float,
            displayName: "模糊度",
            tooltip: "背景的模糊程度",
            min: 0,
            max: 1
        })
    ], BlurMask.prototype, "blurAmount", void 0);
    BlurMask = __decorate([
        ccclass
    ], BlurMask);
    return BlurMask;
}(cc.Component));
exports.default = BlurMask;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmx1ck1hc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0dBSUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdUdDO1FBdEdBLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFDekIsYUFBTyxHQUFxQixJQUFJLENBQUM7UUFDakMsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBQ25DLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUIsa0JBQVksR0FBRyxVQUFVLENBQUM7UUFRMUIsY0FBUSxHQUFHLElBQUksQ0FBQztRQU9oQixrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQVNsQixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBU3hCLGdCQUFVLEdBQVcsR0FBRyxDQUFDOztJQStEMUIsQ0FBQztJQTdEQSx3QkFBSyxHQUFMO1FBQUEsaUJBMkJDO1FBMUJBLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV0QixXQUFXO1FBQ1gsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBRTFHLGNBQWM7UUFDZCxJQUFJLENBQUMsTUFBTSxHQUFH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RyxDQUFDLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO2FBQzdDO1NBQ0Q7SUFDRixDQUFDO0lBdkZEO1FBTkMsUUFBUSxDQUFDO1lBQ1QsYUFBYTtZQUNiLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUTtZQUNqQixXQUFXLEVBQUUsTUFBTTtZQUNuQixPQUFPLEVBQUUseUJBQXlCO1NBQ2xDLENBQUM7OENBQ2M7SUFPaEI7UUFMQyxRQUFRLENBQUM7WUFDVCxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2YsV0FBVyxFQUFFLFFBQVE7WUFDckIsT0FBTyxFQUFFLG9CQUFvQjtTQUM3QixDQUFDO2tEQUNnQjtJQVNsQjtRQVBDLFFBQVEsQ0FBQztZQUNULElBQUksRUFBRSxFQUFFLENBQUMsS0FBSztZQUNkLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLENBQUM7U0FDTixDQUFDOytDQUNzQjtJQVN4QjtRQVBDLFFBQVEsQ0FBQztZQUNULElBQUksRUFBRSxFQUFFLENBQUMsS0FBSztZQUNkLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLENBQUM7U0FDTixDQUFDO2dEQUN1QjtJQXhDTCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUc1QjtJQUFELGVBQUM7Q0F2R0QsQUF1R0MsQ0F2R3FDLEVBQUUsQ0FBQyxTQUFTLEdBdUdqRDtrQkF2R29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5qih57OK6IqC54K55o6n5Yi25ZmoXHJcbiAqIEBhdXRob3Igd2hlYXR1cFxyXG4gKiBAdmVyc2lvbiAxLjBcclxuICovXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmx1ck1hc2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cdGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuXHR0ZXh0dXJlOiBjYy5SZW5kZXJUZXh0dXJlID0gbnVsbDtcclxuXHRzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cdHNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcblx0X2xhc3RTaXplID0gbmV3IGNjLlNpemUoMCwgMCk7XHJcblx0X2N1bGxpbmdNYXNrID0gMHgxMDAwMDAwMDtcclxuXHJcblx0QHByb3BlcnR5KHtcclxuXHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdHR5cGU6IGNjLk1hdGVyaWFsLFxyXG5cdFx0ZGlzcGxheU5hbWU6IFwi5qih57OK5p2Q6LSoXCIsXHJcblx0XHR0b29sdGlwOiBcIueUqOS6juW6lOeUqOaooeeziuaJgOeUqOeahOadkOi0qO+8jOWmguaXoOeJueauiumcgOaxguivt+S/neaMgem7mOiupFwiXHJcblx0fSlcclxuXHRtYXRlcmlhbCA9IG51bGw7XHJcblxyXG5cdEBwcm9wZXJ0eSh7XHJcblx0XHR0eXBlOiBbY2MuTm9kZV0sXHJcblx0XHRkaXNwbGF5TmFtZTogXCLlv73nlaXoioLngrnliJfooahcIixcclxuXHRcdHRvb2x0aXA6IFwi5Zyo5q2k5YiX6KGo5YaF55qE6IqC54K55bCG5LiN5Lya6KKr5qih57OK6YGu572p5riy5p+TXCJcclxuXHR9KVxyXG5cdGlnbm9yZWROb2RlcyA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoe1xyXG5cdFx0dHlwZTogY2MuRmxvYXQsXHJcblx0XHRkaXNwbGF5TmFtZTogXCLkuq7luqZcIixcclxuXHRcdHRvb2x0aXA6IFwi6ZmN5L2O6IOM5pmv55qE5Lqu5bqmXCIsXHJcblx0XHRtaW46IDAsXHJcblx0XHRtYXg6IDFcclxuXHR9KVxyXG5cdGJpZ2h0bmVzczogbnVtYmVyID0gMC41O1xyXG5cclxuXHRAcHJvcGVydHkoe1xyXG5cdFx0dHlwZTogY2MuRmxvYXQsXHJcblx0XHRkaXNwbGF5TmFtZTogXCLmqKHns4rluqZcIixcclxuXHRcdHRvb2x0aXA6IFwi6IOM5pmv55qE5qih57OK56iL5bqmXCIsXHJcblx0XHRtaW46IDAsXHJcblx0XHRtYXg6IDFcclxuXHR9KVxyXG5cdGJsdXJBbW91bnQ6IG51bWJlciA9IDAuNTtcclxuXHJcblx0c3RhcnQoKSB7XHJcblx0XHQvLyDmiKrlm77lm77lg4/mmK/nv7vovaznmoTvvIzmiYDku6V56L206ZWc5YOPXHJcblx0XHR0aGlzLm5vZGUuc2NhbGVZID0gLTE7XHJcblxyXG5cdFx0Ly8g5Yib5bu65riy5p+T6LS05Zu+5a+56LGhXHJcblx0XHR0aGlzLnRleHR1cmUgPSBuZXcgY2MuUmVuZGVyVGV4dHVyZSgpO1xyXG5cdFx0dGhpcy50ZXh0dXJlLmluaXRXaXRoU2l6ZSh0aGlzLm5vZGUud2lkdGgsIHRoaXMubm9kZS5oZWlnaHQsIGNjLmdhbWVbJ19yZW5kZXJDb250ZXh0J11bJ1NURU5DSUxfSU5ERVg4J10pO1xyXG5cclxuXHRcdC8vIOWcqG5vZGXkuIrliJvlu7rmkYTlvbHmnLpcclxuXHRcdHRoaXMuY2FtZXJhID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5DYW1lcmEpO1xyXG5cdFx0Ly8g5LiN5riy5p+TMHgxMDAwMDAwMOeahGN1bGxpbmdNYXNr5a+56LGhXHJcblx0XHR0aGlzLmNhbWVyYS5jdWxsaW5nTWFzayA9IDB4ZmZmZmZmZmYgXiB0aGlzLl9jdWxsaW5nTWFzaztcclxuXHRcdHRoaXMuY2FtZXJhLnRhcmdldFRleHR1cmUgPSB0aGlzLnRleHR1cmU7XHJcblx0XHQvLyDlhbPpl63mkYTlvbHmnLrvvIzlkKbliJnmr4/kuIDluKflroPkvJroh6rliqjov5vooYzmuLLmn5NcclxuXHRcdHRoaXMuY2FtZXJhLmVuYWJsZWQgPSBmYWxzZTtcclxuXHJcblx0XHQvLyDlsIboh6rouqvkuI7lv73nlaXlr7nosaHmjpLpmaTmuLLmn5NcclxuXHRcdHRoaXMuY3VsbCh0aGlzLm5vZGUpO1xyXG5cdFx0dGhpcy5pZ25vcmVkTm9kZXMubWFwKG5vZGUgPT4gdGhpcy5jdWxsKG5vZGUpKTtcclxuXHJcblx0XHQvLyDliJvlu7rkuIDkuKpzcHJpdGXnu4Tku7bvvIznlLHlhbbov5vooYzmuLLmn5NcclxuXHRcdHRoaXMuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcclxuXHRcdHRoaXMuc3ByaXRlID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG5cdFx0dGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUZyYW1lO1xyXG5cdFx0dGhpcy5tYXRlcmlhbFtcIl9wcm9wc1wiXVtcImJpZ2h0bmVzc1wiXSA9IHRoaXMuYmlnaHRuZXNzO1xyXG5cdFx0dGhpcy5tYXRlcmlhbFtcIl9wcm9wc1wiXVtcImJsdXJBbW91bnRcIl0gPSB0aGlzLmJsdXJBbW91bnQ7XHJcblx0XHR0aGlzLnNwcml0ZVtcIl9tYXRlcmlhbHNcIl1bMF0gPSB0aGlzLm1hdGVyaWFsO1xyXG5cdH1cclxuXHJcblx0Ly8g5oiq5Zu+5bm25qih57OKXHJcblx0c25hcHNob3QoKSB7XHJcblx0XHRsZXQgc2l6ZSA9IHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpO1xyXG5cdFx0aWYgKHNpemUud2lkdGggIT09IHRoaXMuX2xhc3RTaXplLndpZHRoIHx8IHNpemUuaGVpZ2h0ICE9PSB0aGlzLl9sYXN0U2l6ZS5oZWlnaHQpIHtcclxuXHRcdFx0Ly8g5aSn5bCP5Y+R55Sf5pS55Y+Y77yM6YeN5paw6K6+572udGV4dHVyZeWkp+Wwj1xyXG5cdFx0XHR0aGlzLnRleHR1cmUuaW5pdFdpdGhTaXplKHRoaXMubm9kZS53aWR0aCwgdGhpcy5ub2RlLmhlaWdodCwgY2MuZ2FtZVsnX3JlbmRlckNvbnRleHQnXVsnU1RFTkNJTF9JTkRFWDgnXSk7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnRhcmdldFRleHR1cmUgPSB0aGlzLnRleHR1cmU7XHJcblx0XHR9XHJcblx0XHR0aGlzLl9sYXN0U2l6ZS53aWR0aCA9IHNpemUud2lkdGg7XHJcblx0XHR0aGlzLl9sYXN0U2l6ZS5oZWlnaHQgPSBzaXplLmhlaWdodDtcclxuXHJcblx0XHQvLyDmiYvliqjmuLLmn5PmkYTlvbHmnLrvvIzkv53lrZjmiKrlm75cclxuXHRcdHRoaXMuY2FtZXJhLnJlbmRlcihjYy5DYW52YXMuaW5zdGFuY2Uubm9kZSk7XHJcblxyXG5cdFx0Ly8g5bqU55So5Yia5Yia5oiq5Zu+55qE6LS05Zu+5Yiwc3ByaXRl6Lqr5LiK6L+b6KGM5riy5p+TXHJcblx0XHR0aGlzLnNwcml0ZUZyYW1lLnNldFRleHR1cmUodGhpcy50ZXh0dXJlKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShkdCkge1xyXG5cdFx0Ly8g5q+P5LiA5bin6YO96L+b6KGM5oiq5Zu+5aSE55CG77yM5Y+v5Lul5o2i5oiQ6ZyA6KaB55qE5pe25YCZ5YaN6LCD55So77yM5q+U6L6D55yB6LWE5rqQXHJcblx0XHR0aGlzLnNuYXBzaG90KCk7XHJcblx0fVxyXG5cclxuXHQvLyDmjpLpmaTlv73nlaXmuLLmn5Plr7nosaHlj4rlhbblrZDlr7nosaFcclxuXHRwcml2YXRlIGN1bGwobm9kZTogY2MuTm9kZSkge1xyXG5cdFx0aWYgKG5vZGUpIHtcclxuXHRcdFx0bm9kZVtcIl9jdWxsaW5nTWFza1wiXSA9IHRoaXMuX2N1bGxpbmdNYXNrO1xyXG5cdFx0XHRpZiAobm9kZS5jaGlsZHJlbkNvdW50ID4gMCkge1xyXG5cdFx0XHRcdG5vZGUuY2hpbGRyZW4ubWFwKGNoaWxkID0+IHRoaXMuY3VsbChjaGlsZCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.1-2.2.1_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26235SYHbNIkasmKdqcs/eb', 'use_v2.1-2.2.1_cc.Toggle_event');
// migration/use_v2.1-2.2.1_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with the v2.1.0 ～ 2.2.1 version.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 ~ 2.2.1 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether to trigger 'toggle' and 'checkEvents' events when modifying 'toggle.isChecked' in the code
  // 在代码中修改 'toggle.isChecked' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_isChecked = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMS0yLjIuMV9jYy5Ub2dnbGVfZXZlbnQuanMiXSwibmFtZXMiOlsiY2MiLCJUb2dnbGUiLCJfdHJpZ2dlckV2ZW50SW5TY3JpcHRfaXNDaGVja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQVlBLElBQUlBLEVBQUUsQ0FBQ0MsTUFBUCxFQUFlO0FBQ1g7QUFDQTtBQUNBRCxFQUFBQSxFQUFFLENBQUNDLE1BQUgsQ0FBVUMsK0JBQVYsR0FBNEMsSUFBNUM7QUFDSCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQ29jb3MgQ3JlYXRvciBhbmQgaXMgb25seSB1c2VkIGZvciBwcm9qZWN0cyBjb21wYXRpYmxlIHdpdGggdGhlIHYyLjEuMCDvvZ4gMi4yLjEgdmVyc2lvbi5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5Ub2dnbGUgaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMCB+IDIuMi4xIOeJiOacrOeahOW3peeoi++8jFxyXG4gKiDkvaDml6DpnIDlnKjku7vkvZXlhbblroPpobnnm67kuK3miYvliqjmt7vliqDmraTohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5Lit5rKh55So5YiwIFRvZ2dsZe+8jOWPr+ebtOaOpeWIoOmZpOivpeiEmuacrOOAglxyXG4gKiDlpoLmnpzkvaDnmoTpobnnm67mnInmiZjnrqHkuo4gZ2l0IOetieeJiOacrOW6k++8jOivt+WwhuatpOiEmuacrOS4gOW5tuS4iuS8oOOAglxyXG4gKi9cclxuXHJcbmlmIChjYy5Ub2dnbGUpIHtcclxuICAgIC8vIFdoZXRoZXIgdG8gdHJpZ2dlciAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgd2hlbiBtb2RpZnlpbmcgJ3RvZ2dsZS5pc0NoZWNrZWQnIGluIHRoZSBjb2RlXHJcbiAgICAvLyDlnKjku6PnoIHkuK3kv67mlLkgJ3RvZ2dsZS5pc0NoZWNrZWQnIOaXtuaYr+WQpuinpuWPkSAndG9nZ2xlJyDkuI4gJ2NoZWNrRXZlbnRzJyDkuovku7ZcclxuICAgIGNjLlRvZ2dsZS5fdHJpZ2dlckV2ZW50SW5TY3JpcHRfaXNDaGVja2VkID0gdHJ1ZTtcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Logic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af53bc0Q9tAIJfCsDhJTKrS', 'Logic');
// scripts/Logic.ts

"use strict";
/**
 * 点击面板弹出提示框行为
 * @author wheatup
 * @version 1.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var Logic = /** @class */ (function (_super) {
    __extends(Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 点击对象
        _this.tapReceiver = null;
        _this.mask = null;
        _this.panel = null;
        _this.showing = false;
        return _this;
    }
    Logic.prototype.onLoad = function () {
        var _this = this;
        this.panel.active = false;
        this.panel.opacity = 0;
        this.panel.scale = 0.2;
        this.mask.active = false;
        this.mask.opacity = 0;
        this.tapReceiver.on('touchstart', function () { return _this.showing ? _this.hide() : _this.show(); }, this);
    };
    Logic.prototype.show = function () {
        this.showing = true;
        this.mask.active = true;
        this.panel.active = true;
        Wheen.stop(this.mask);
        new Wheen(this.mask)
            .to({ opacity: 255 }, 500, Wheen.Easing.Cubic.easeOut)
            .start();
        Wheen.stop(this.panel);
        new Wheen(this.panel)
            .to({ opacity: 255, scale: 1 }, 500, Wheen.Easing.Back.easeOut)
            .start();
    };
    Logic.prototype.hide = function () {
        var _this = this;
        this.showing = false;
        this.panel.active = true;
        Wheen.stop(this.mask);
        new Wheen(this.mask)
            .to({ opacity: 0 }, 500, Wheen.Easing.Cubic.easeOut)
            .callFunc(function () { return _this.panel.active = false; })
            .start();
        Wheen.stop(this.panel);
        new Wheen(this.panel)
            .to({ opacity: 0, scale: 0 }, 500, Wheen.Easing.Back.easeIn)
            .callFunc(function () { return _this.panel.active = false; })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], Logic.prototype, "tapReceiver", void 0);
    __decorate([
        property(cc.Node)
    ], Logic.prototype, "mask", void 0);
    __decorate([
        property(cc.Node)
    ], Logic.prototype, "panel", void 0);
    Logic = __decorate([
        ccclass
    ], Logic);
    return Logic;
}(cc.Component));
exports.default = Logic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTG9naWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0dBSUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBeURDO1FBdkRBLE9BQU87UUFFUCxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsYUFBTyxHQUFZLEtBQUssQ0FBQzs7SUE2QzFCLENBQUM7SUEzQ0Esc0JBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxFQUF4QyxDQUF3QyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFRCxvQkFBSSxHQUFKO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUV6QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xCLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQ3JELEtBQUssRUFBRSxDQUFDO1FBRVYsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNuQixFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzlELEtBQUssRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVELG9CQUFJLEdBQUo7UUFBQSxpQkFlQztRQWRBLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUV6QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xCLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQ25ELFFBQVEsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUF6QixDQUF5QixDQUFDO2FBQ3pDLEtBQUssRUFBRSxDQUFDO1FBRVYsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNuQixFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQzNELFFBQVEsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUF6QixDQUF5QixDQUFDO2FBQ3pDLEtBQUssRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQXBERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dUNBQ0c7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDSTtJQVZGLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0F5RHpCO0lBQUQsWUFBQztDQXpERCxBQXlEQyxDQXpEa0MsRUFBRSxDQUFDLFNBQVMsR0F5RDlDO2tCQXpEb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDngrnlh7vpnaLmnb/lvLnlh7rmj5DnpLrmoYbooYzkuLpcclxuICogQGF1dGhvciB3aGVhdHVwXHJcbiAqIEB2ZXJzaW9uIDEuMFxyXG4gKi9cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cdC8vIOeCueWHu+WvueixoVxyXG5cdEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG5cdHRhcFJlY2VpdmVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblx0QHByb3BlcnR5KGNjLk5vZGUpXHJcblx0bWFzazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG5cdHBhbmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblx0c2hvd2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRvbkxvYWQoKSB7XHJcblx0XHR0aGlzLnBhbmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5wYW5lbC5vcGFjaXR5ID0gMDtcclxuXHRcdHRoaXMucGFuZWwuc2NhbGUgPSAwLjI7XHJcblxyXG5cdFx0dGhpcy5tYXNrLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tYXNrLm9wYWNpdHkgPSAwO1xyXG5cclxuXHRcdHRoaXMudGFwUmVjZWl2ZXIub24oJ3RvdWNoc3RhcnQnLCAoKSA9PiB0aGlzLnNob3dpbmcgPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdygpLCB0aGlzKTtcclxuXHR9XHJcblxyXG5cdHNob3coKSB7XHJcblx0XHR0aGlzLnNob3dpbmcgPSB0cnVlO1xyXG5cdFx0dGhpcy5tYXNrLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR0aGlzLnBhbmVsLmFjdGl2ZSA9IHRydWU7XHJcblxyXG5cdFx0V2hlZW4uc3RvcCh0aGlzLm1hc2spO1xyXG5cdFx0bmV3IFdoZWVuKHRoaXMubWFzaylcclxuXHRcdFx0LnRvKHsgb3BhY2l0eTogMjU1IH0sIDUwMCwgV2hlZW4uRWFzaW5nLkN1YmljLmVhc2VPdXQpXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cclxuXHRcdFdoZWVuLnN0b3AodGhpcy5wYW5lbCk7XHJcblx0XHRuZXcgV2hlZW4odGhpcy5wYW5lbClcclxuXHRcdFx0LnRvKHsgb3BhY2l0eTogMjU1LCBzY2FsZTogMSB9LCA1MDAsIFdoZWVuLkVhc2luZy5CYWNrLmVhc2VPdXQpXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdH1cclxuXHJcblx0aGlkZSgpIHtcclxuXHRcdHRoaXMuc2hvd2luZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5wYW5lbC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuXHRcdFdoZWVuLnN0b3AodGhpcy5tYXNrKTtcclxuXHRcdG5ldyBXaGVlbih0aGlzLm1hc2spXHJcblx0XHRcdC50byh7IG9wYWNpdHk6IDAgfSwgNTAwLCBXaGVlbi5FYXNpbmcuQ3ViaWMuZWFzZU91dClcclxuXHRcdFx0LmNhbGxGdW5jKCgpID0+IHRoaXMucGFuZWwuYWN0aXZlID0gZmFsc2UpXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cclxuXHRcdFdoZWVuLnN0b3AodGhpcy5wYW5lbCk7XHJcblx0XHRuZXcgV2hlZW4odGhpcy5wYW5lbClcclxuXHRcdFx0LnRvKHsgb3BhY2l0eTogMCwgc2NhbGU6IDAgfSwgNTAwLCBXaGVlbi5FYXNpbmcuQmFjay5lYXNlSW4pXHJcblx0XHRcdC5jYWxsRnVuYygoKSA9PiB0aGlzLnBhbmVsLmFjdGl2ZSA9IGZhbHNlKVxyXG5cdFx0XHQuc3RhcnQoKTtcclxuXHR9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Doge.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9db2Elhj9G0LB//IMXXrAZ', 'Doge');
// scripts/Doge.ts

"use strict";
/**
 * 背景doge
 * @author wheatup
 * @version 1.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var Doge = /** @class */ (function (_super) {
    __extends(Doge, _super);
    function Doge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xDir = 1;
        _this.yDir = 1;
        return _this;
    }
    // 让doge在屏幕上跑来跑去
    Doge.prototype.update = function (dt) {
        this.node.x += dt * 100 * this.xDir;
        this.node.y += dt * 100 * this.yDir;
        var width = (cc.Canvas.instance.node.width - this.node.width) * 0.5;
        var height = (cc.Canvas.instance.node.height - this.node.height) * 0.5;
        if (this.node.x < -width) {
            this.xDir = 1;
        }
        else if (this.node.x > width) {
            this.xDir = -1;
        }
        if (this.node.y < -height) {
            this.yDir = 1;
        }
        else if (this.node.y > height) {
            this.yDir = -1;
        }
    };
    Doge = __decorate([
        ccclass
    ], Doge);
    return Doge;
}(cc.Component));
exports.default = Doge;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRG9nZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUF5QkM7UUF2QkEsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixVQUFJLEdBQVcsQ0FBQyxDQUFDOztJQXNCbEIsQ0FBQztJQXBCQSxnQkFBZ0I7SUFDaEIscUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXBDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNwRSxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFdkUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtZQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNkO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNmO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNkO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNmO0lBQ0YsQ0FBQztJQXhCbUIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXlCeEI7SUFBRCxXQUFDO0NBekJELEFBeUJDLENBekJpQyxFQUFFLENBQUMsU0FBUyxHQXlCN0M7a0JBekJvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOiDjOaZr2RvZ2VcclxuICogQGF1dGhvciB3aGVhdHVwXHJcbiAqIEB2ZXJzaW9uIDEuMFxyXG4gKi9cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2dlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblx0eERpcjogbnVtYmVyID0gMTtcclxuXHR5RGlyOiBudW1iZXIgPSAxO1xyXG5cclxuXHQvLyDorqlkb2dl5Zyo5bGP5bmV5LiK6LeR5p2l6LeR5Y67XHJcblx0dXBkYXRlKGR0KSB7XHJcblx0XHR0aGlzLm5vZGUueCArPSBkdCAqIDEwMCAqIHRoaXMueERpcjtcclxuXHRcdHRoaXMubm9kZS55ICs9IGR0ICogMTAwICogdGhpcy55RGlyO1xyXG5cclxuXHRcdGxldCB3aWR0aCA9IChjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS53aWR0aCAtIHRoaXMubm9kZS53aWR0aCkgKiAwLjU7XHJcblx0XHRsZXQgaGVpZ2h0ID0gKGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmhlaWdodCAtIHRoaXMubm9kZS5oZWlnaHQpICogMC41O1xyXG5cclxuXHRcdGlmICh0aGlzLm5vZGUueCA8IC13aWR0aCkge1xyXG5cdFx0XHR0aGlzLnhEaXIgPSAxO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLm5vZGUueCA+IHdpZHRoKSB7XHJcblx0XHRcdHRoaXMueERpciA9IC0xO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLm5vZGUueSA8IC1oZWlnaHQpIHtcclxuXHRcdFx0dGhpcy55RGlyID0gMTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5ub2RlLnkgPiBoZWlnaHQpIHtcclxuXHRcdFx0dGhpcy55RGlyID0gLTE7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
