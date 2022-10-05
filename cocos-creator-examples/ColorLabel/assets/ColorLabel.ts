
import { _decorator, Component, Node, Label, Color } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ColorLabel')
export class ColorLabel extends Label {
    @property({ type: [Color] })
    private _colors: Color[] = [];
    @property({ type: [Color] })
    public get colors(): Color[] {
        return this._colors;
    }
    public set colors(value: Color[]) {
        this._colors = value;
        this._colorDirty = true;
    }

    protected _updateColor() {
        const colorDirty = this._colorDirty;
        super._updateColor();
        if (colorDirty) {
            const vData = this.renderData!.vData;
            let colorOffset = 5;
            for (let i = 0; i < 4; i++) {
                const color = this.colors[i] || this.color;
                const colorR = color.r / 255;
                const colorG = color.g / 255;
                const colorB = color.b / 255;
                const colorA = this.node._uiProps.opacity;
                vData![colorOffset] = colorR;
                vData![colorOffset + 1] = colorG;
                vData![colorOffset + 2] = colorB;
                vData![colorOffset + 3] = colorA;
                colorOffset += 9;
            }
        }
    }
}

/*

欢迎关注微信公众号 `白玉无冰`  

导航：https://mp.weixin.qq.com/s/Ht0kIbaeBEds_wUeUlu8JQ
qq 交流群: 859642112  

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