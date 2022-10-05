"use strict";
cc._RF.push(module, '164cfakMGRJPLW/2RrDe4fy', 'MaterialManager');
// Script/shader/MaterialManager.ts

"use strict";
// Author：lerry（大掌教）
// 详细教程请关注博客和微信公众号
// csdn：https://darkpalm.blog.csdn.net
// 微信公众号ID：darkpalm
// Q群：704391772
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShaderEffects = exports.ShaderType = void 0;
// import ShaderLab from "./ShaderLab";
var ShaderFSH_1 = require("./ShaderFSH");
var MaterialSingleton_1 = require("./MaterialSingleton");
/**
 * 定义材质类型
 */
var ShaderType;
(function (ShaderType) {
    // 系统自带
    ShaderType[ShaderType["Normal"] = -2] = "Normal";
    // 系统自带
    ShaderType[ShaderType["Gray"] = -1] = "Gray";
    // 自定义开始
    ShaderType[ShaderType["GrayScaling"] = 0] = "GrayScaling";
    ShaderType[ShaderType["WaterWave"] = 1] = "WaterWave";
    ShaderType[ShaderType["StartLighting"] = 2] = "StartLighting";
    ShaderType[ShaderType["Blackhole"] = 3] = "Blackhole";
})(ShaderType = exports.ShaderType || (exports.ShaderType = {}));
/**
 * 定义个中文的，看起来舒爽一点
 * 两个枚举要配套使用
 */
exports.ShaderEffects = cc.Enum({
    正常: -2,
    灰色: -1,
    灰度图: 0,
    水波: 1,
    闪电: 2,
    黑洞照片: 3
});
var MaterialManager = /** @class */ (function () {
    function MaterialManager() {
    }
    /**
     * 获取一个材质
     * @param sprite 精灵
     * @param shader shader类型
     */
    MaterialManager.getMaterial = function (sprite, shader) {
        if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) {
            cc.warn("Shader not surpport for canvas");
            return;
        }
        if (!sprite || !sprite.spriteFrame) {
            return;
        }
        if (shader > ShaderType.Gray) {
            var name = ShaderType[shader];
            var lab = ShaderFSH_1.default[shader];
            if (!lab) {
                console.warn('Shader not defined', name);
                return;
            }
            cc.dynamicAtlasManager.enabled = false;
            var material = MaterialSingleton_1.default.getInstance(name);
            var texture = sprite.spriteFrame.getTexture();
            material.setTexture(texture);
            material.updateHash();
            var sp = sprite;
            sp._material = material;
            sp._renderData._material = material;
            sp._state = shader;
            return material;
        }
        else {
            // 系统自带normal和gray
            sprite.setState(shader + 2);
        }
    };
    return MaterialManager;
}());
exports.default = MaterialManager;

cc._RF.pop();