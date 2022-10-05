const { ccclass, property, executeInEditMode, requireComponent } = cc._decorator;

@ccclass
@executeInEditMode
@requireComponent(cc.Sprite)
export default class BrightSaturaContrastUniform extends cc.Component {

    _sprite: cc.Sprite = null;

    @property
    _brightness: number = 1.0;
    @property({ type: cc.Float, range: [0, 3], slide: true })
    set brightness(b) {
        this._brightness = b;
        this.updateProperties();
    }
    get brightness() {
        return this._brightness;
    }

    @property
    _saturation: number = 1.0;
    @property({ type: cc.Float, range: [0, 3], slide: true })
    set saturation(b) {
        this._saturation = b;
        this.updateProperties();
    }
    get saturation() {
        return this._saturation;
    }

    @property
    _constrast: number = 1.0;
    @property({ type: cc.Float, range: [0, 3], slide: true })
    set constrast(b) {
        this._constrast = b;
        this.updateProperties();
    }
    get constrast() {
        return this._constrast;
    }


    onEnable() {
        if (!this._sprite) {
            this._sprite = this.getComponent(cc.Sprite);
        }
        this.updateProperties();
    }

    updateProperties() {
        if (!this._sprite) return;
        this._sprite.getMaterial(0).setProperty('brightness', this._brightness);
        this._sprite.getMaterial(0).setProperty('saturation', this._saturation);
        this._sprite.getMaterial(0).setProperty('constrast', this._constrast);
    }
}
