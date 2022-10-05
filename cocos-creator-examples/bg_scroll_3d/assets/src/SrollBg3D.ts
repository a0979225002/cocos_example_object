// author: http://lamyoung.com/

const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode
export default class SrollBg3D extends cc.Component {
    @property(cc.Sprite)
    sp: cc.Sprite = null;


    start() {
        /**
         * 四个顶点顺序
         * 
         * 0-----1
         * |     |
         * 3-----2
         */
        this.sp.spriteFrame['vertices'] = {
            x: [480, 1440, 1440, 480],
            y: [0, 0, 480, 480],
            nu: [0.35, 0.65, 0.65, 0.35],
            nv: [0, 0, 1, 1],
            triangles: [0, 1, 2, 2, 3, 0],
        }
        this.setPercent(0.5);
    }

    /**
     * 
     * @param percent 比例 0-1
     */
    private setPercent(percent: number) {
     
        const vertices = this.sp.spriteFrame['vertices'];
        /**
         * u 范围
         * 
         * 0.25 ~ 0.75
         *   0---1
         *  /     \
         * 3-------2
         * 0.0 ~ 1.0
         * 
         * 
         */
        const nu = vertices.nu;
        nu[0] = 0.25 + 0.2 * percent;
        nu[1] = nu[0] + 0.3;
        nu[3] = percent * 0.7;
        nu[2] = nu[3] + 0.3;
        // 标记顶点数据修改过了
        this.sp['setVertsDirty']();
    }

    sliderCallback(slider: cc.Slider, customEventData: string) {
        this.setPercent(slider.progress);
    }

}

/*
https://mp.weixin.qq.com/s/fJxE-Z0BEiQgAhFoJeHjlw

*/

// 欢迎关注微信公众号[白玉无冰]

/**
█████████████████████████████████████
█████████████████████████████████████
████ ▄▄▄▄▄ █▀█ █▄██▀▄ ▄▄██ ▄▄▄▄▄ ████
████ █   █ █▀▀▀█ ▀▄▀▀▀█▄▀█ █   █ ████
████ █▄▄▄█ █▀ █▀▀▀ ▀▄▄ ▄ █ █▄▄▄█ ████
████▄▄▄▄▄▄▄█▄▀ ▀▄█ ▀▄█▄▀ █▄▄▄▄▄▄▄████
████▄▄  ▄▀▄▄ ▄▀▄▀▀▄▄▄ █ █ ▀ ▀▄█▄▀████
████▀ ▄  █▄█▀█▄█▀█  ▀▄ █ ▀ ▄▄██▀█████
████ ▄▀▄▄▀▄ █▄▄█▄ ▀▄▀ ▀ ▀ ▀▀▀▄ █▀████
████▀ ██ ▀▄ ▄██ ▄█▀▄ ██▀ ▀ █▄█▄▀█████
████   ▄██▄▀ █▀▄▀▄▀▄▄▄▄ ▀█▀ ▀▀ █▀████
████ █▄ █ ▄ █▀ █▀▄█▄▄▄▄▀▄▄█▄▄▄▄▀█████
████▄█▄█▄█▄█▀ ▄█▄   ▀▄██ ▄▄▄ ▀   ████
████ ▄▄▄▄▄ █▄██ ▄█▀  ▄   █▄█  ▄▀█████
████ █   █ █ ▄█▄ ▀  ▀▀██ ▄▄▄▄ ▄▀ ████
████ █▄▄▄█ █ ▄▄▀ ▄█▄█▄█▄ ▀▄   ▄ █████
████▄▄▄▄▄▄▄█▄██▄▄██▄▄▄█████▄▄█▄██████
█████████████████████████████████████
█████████████████████████████████████
 */