"use strict";
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