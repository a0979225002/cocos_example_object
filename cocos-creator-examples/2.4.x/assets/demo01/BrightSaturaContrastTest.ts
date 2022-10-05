// author: http://lamyoung.com/

import BrightSaturaContrastAssemblerSprite from "./BrightSaturaContrastAssembler/BrightSaturaContrastAssemblerSprite";
import BrightSaturaContrastUniform from "./BrightSaturaContrastUniform/BrightSaturaContrastUniform";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BrightSaturaContrastTest extends cc.Component {

    @property(BrightSaturaContrastAssemblerSprite)
    bscAS: BrightSaturaContrastAssemblerSprite = null;

    @property(BrightSaturaContrastUniform)
    bscU: BrightSaturaContrastUniform = null;

    sliderCallback(slider: cc.Slider, customEventData: string) {
        const value = slider.progress * 3;
        switch (customEventData) {
            case 'b': {
                this.bscU.brightness = this.bscAS.brightness = value;
                break;
            }
            case 's': {
                this.bscU.saturation = this.bscAS.saturation = value;
                break;
            }
            case 'c': {
                this.bscU.constrast = this.bscAS.constrast = value;
                break;
            }
        }
    }
}


/*
https://mp.weixin.qq.com/s/Ht0kIbaeBEds_wUeUlu8JQ

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