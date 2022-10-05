
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/shader/MaterialManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzaGFkZXJcXE1hdGVyaWFsTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixzQ0FBc0M7QUFDdEMsbUJBQW1CO0FBQ25CLGVBQWU7OztBQUVmLHVDQUF1QztBQUN2Qyx5Q0FBb0M7QUFDcEMseURBQW9EO0FBQ3BEOztHQUVHO0FBQ0gsSUFBWSxVQVVYO0FBVkQsV0FBWSxVQUFVO0lBQ2xCLE9BQU87SUFDUCxnREFBVyxDQUFBO0lBQ1gsT0FBTztJQUNQLDRDQUFJLENBQUE7SUFDSixRQUFRO0lBQ1IseURBQVcsQ0FBQTtJQUNYLHFEQUFTLENBQUE7SUFDVCw2REFBYSxDQUFBO0lBQ2IscURBQVMsQ0FBQTtBQUNiLENBQUMsRUFWVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQVVyQjtBQUVEOzs7R0FHRztBQUNRLFFBQUEsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDL0IsRUFBRSxFQUFDLENBQUMsQ0FBQztJQUNMLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDTixHQUFHLEVBQUUsQ0FBQztJQUNOLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLENBQUM7SUFDTCxJQUFJLEVBQUMsQ0FBQztDQUNULENBQUMsQ0FBQTtBQUVGO0lBQUE7SUFxQ0EsQ0FBQztJQXBDRzs7OztPQUlHO0lBQ0ksMkJBQVcsR0FBbEIsVUFBbUIsTUFBaUIsRUFBRSxNQUFrQjtRQUNwRCxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDbkQsRUFBRSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQzFDLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1lBQ2hDLE9BQU87U0FDVjtRQUNELElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDMUIsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLElBQUksR0FBRyxHQUFHLG1CQUFTLENBQUMsTUFBZ0IsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDekMsT0FBTzthQUNWO1lBQ0QsRUFBRSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDdkMsSUFBSSxRQUFRLEdBQUcsMkJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25ELElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDOUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDdEIsSUFBSSxFQUFFLEdBQUcsTUFBYSxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQ3hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUNwQyxFQUFFLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNuQixPQUFPLFFBQVEsQ0FBQztTQUNuQjthQUNJO1lBQ0Qsa0JBQWtCO1lBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEF1dGhvcu+8mmxlcnJ577yI5aSn5o6M5pWZ77yJXHJcbi8vIOivpue7huaVmeeoi+ivt+WFs+azqOWNmuWuouWSjOW+ruS/oeWFrOS8l+WPt1xyXG4vLyBjc2Ru77yaaHR0cHM6Ly9kYXJrcGFsbS5ibG9nLmNzZG4ubmV0XHJcbi8vIOW+ruS/oeWFrOS8l+WPt0lE77yaZGFya3BhbG1cclxuLy8gUee+pO+8mjcwNDM5MTc3MlxyXG5cclxuLy8gaW1wb3J0IFNoYWRlckxhYiBmcm9tIFwiLi9TaGFkZXJMYWJcIjtcclxuaW1wb3J0IFNoYWRlckZTSCBmcm9tIFwiLi9TaGFkZXJGU0hcIjtcclxuaW1wb3J0IE1hdGVyaWFsU2luZ2xldG9uIGZyb20gXCIuL01hdGVyaWFsU2luZ2xldG9uXCI7XHJcbi8qKlxyXG4gKiDlrprkuYnmnZDotKjnsbvlnotcclxuICovXHJcbmV4cG9ydCBlbnVtIFNoYWRlclR5cGUge1xyXG4gICAgLy8g57O757uf6Ieq5bimXHJcbiAgICBOb3JtYWwgPSAtMixcclxuICAgIC8vIOezu+e7n+iHquW4plxyXG4gICAgR3JheSxcclxuICAgIC8vIOiHquWumuS5ieW8gOWni1xyXG4gICAgR3JheVNjYWxpbmcsXHJcbiAgICBXYXRlcldhdmUsXHJcbiAgICBTdGFydExpZ2h0aW5nLFxyXG4gICAgQmxhY2tob2xlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlrprkuYnkuKrkuK3mlofnmoTvvIznnIvotbfmnaXoiJLniL3kuIDngrlcclxuICog5Lik5Liq5p6a5Li+6KaB6YWN5aWX5L2/55SoXHJcbiAqL1xyXG5leHBvcnQgbGV0IFNoYWRlckVmZmVjdHMgPSBjYy5FbnVtKHtcclxuICAgIOato+W4uDotMixcclxuICAgIOeBsOiJsjogLTEsXHJcbiAgICDngbDluqblm746IDAsXHJcbiAgICDmsLTms6I6IDEsXHJcbiAgICDpl6rnlLU6IDIsXHJcbiAgICDpu5HmtJ7nhafniYc6M1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0ZXJpYWxNYW5hZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5LiA5Liq5p2Q6LSoXHJcbiAgICAgKiBAcGFyYW0gc3ByaXRlIOeyvueBtSBcclxuICAgICAqIEBwYXJhbSBzaGFkZXIgc2hhZGVy57G75Z6LXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRNYXRlcmlhbChzcHJpdGU6IGNjLlNwcml0ZSwgc2hhZGVyOiBTaGFkZXJUeXBlKTogTWF0ZXJpYWxTaW5nbGV0b24ge1xyXG4gICAgICAgIGlmIChjYy5nYW1lLnJlbmRlclR5cGUgPT09IGNjLmdhbWUuUkVOREVSX1RZUEVfQ0FOVkFTKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJTaGFkZXIgbm90IHN1cnBwb3J0IGZvciBjYW52YXNcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzcHJpdGUgfHwgIXNwcml0ZS5zcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaGFkZXIgPiBTaGFkZXJUeXBlLkdyYXkpIHtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSBTaGFkZXJUeXBlW3NoYWRlcl07XHJcbiAgICAgICAgICAgIGxldCBsYWIgPSBTaGFkZXJGU0hbc2hhZGVyIGFzIG51bWJlcl07XHJcbiAgICAgICAgICAgIGlmICghbGFiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1NoYWRlciBub3QgZGVmaW5lZCcsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmR5bmFtaWNBdGxhc01hbmFnZXIuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgbWF0ZXJpYWwgPSBNYXRlcmlhbFNpbmdsZXRvbi5nZXRJbnN0YW5jZShuYW1lKTtcclxuICAgICAgICAgICAgbGV0IHRleHR1cmUgPSBzcHJpdGUuc3ByaXRlRnJhbWUuZ2V0VGV4dHVyZSgpO1xyXG4gICAgICAgICAgICBtYXRlcmlhbC5zZXRUZXh0dXJlKHRleHR1cmUpO1xyXG4gICAgICAgICAgICBtYXRlcmlhbC51cGRhdGVIYXNoKCk7XHJcbiAgICAgICAgICAgIGxldCBzcCA9IHNwcml0ZSBhcyBhbnk7XHJcbiAgICAgICAgICAgIHNwLl9tYXRlcmlhbCA9IG1hdGVyaWFsO1xyXG4gICAgICAgICAgICBzcC5fcmVuZGVyRGF0YS5fbWF0ZXJpYWwgPSBtYXRlcmlhbDtcclxuICAgICAgICAgICAgc3AuX3N0YXRlID0gc2hhZGVyO1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0ZXJpYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDns7vnu5/oh6rluKZub3JtYWzlkoxncmF5XHJcbiAgICAgICAgICAgIHNwcml0ZS5zZXRTdGF0ZShzaGFkZXIrMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19