

const { ccclass, property } = cc._decorator;

@ccclass
export default class Sprite2dLightTest extends cc.Component {

    @property(cc.Material)
    mtl_sprite_2d_light: cc.Material = null;

    private _lightPos = new cc.Vec4(0, 0, 1, 1)

    private sliderCallback(slider: cc.Slider, customEventData: string) {
        const [key, min, max] = customEventData.split(',');
        const maxValue = Number(max)
        const minValue = Number(min)
        const value = slider.progress * (maxValue - minValue) + minValue;
        this._lightPos[key] = value;
        this.mtl_sprite_2d_light.setProperty('lightPos', this._lightPos);
    }
}
