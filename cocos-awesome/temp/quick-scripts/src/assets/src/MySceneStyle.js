"use strict";
cc._RF.push(module, 'e22d2mwyNxFi7eAIHuJFVvs', 'MySceneStyle');
// src/MySceneStyle.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-09-13 下午 12:58
 * @Version 1.0
 */
/**
 * @Author XIAO-LI-PIN
 * @Description 橫式樣式更新
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
var MySceneStyle = /** @class */ (function () {
    function MySceneStyle() {
    }
    MySceneStyle.prototype.executionStyle = function (width, height) {
        var cvs = cc.find('Canvas').getComponent(cc.Canvas);
        //保存原始設計分辨率，供屏幕大小變化時使用
        if (!this.curDR) {
            this.curDR = cc.size(width, height);
        }
        var dr = this.curDR;
        var s = cc.view.getFrameSize();
        var rw = s.width;
        var rh = s.height;
        var finalW = rw;
        var finalH = rh;
        if ((rw / rh) > (dr.width / dr.height)) {
            //橫向
            //!#zh: 是否優先將設計分辨率高度撐滿視圖高度 。 */
            //如果更長，則用定高
            finalH = dr.height;
            finalW = finalH * rw / rh;
        }
        else {
            //直向
            /*!#zh: 是否優先將設計分辨率寬度撐滿視圖寬度 。 */
            //如果更短，則用定寬
            finalW = dr.width;
            finalH = rh / rw * finalW;
        }
        cvs.designResolution = cc.size(finalW, finalH);
        cvs.node.width = finalW;
        cvs.node.height = finalH;
    };
    return MySceneStyle;
}());
exports.default = MySceneStyle;

cc._RF.pop();