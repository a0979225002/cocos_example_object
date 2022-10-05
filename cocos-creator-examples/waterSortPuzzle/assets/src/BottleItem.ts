
import { _decorator, Component, Node, CCInteger, Graphics, Color } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('BottleItem')
@executeInEditMode
export class BottleItem extends Component {
    @property({ type: [CCInteger] })
    private _waterHeights: number[] = []
    @property({ type: [CCInteger] })
    get waterHeights() {
        return this._waterHeights;
    }
    set waterHeights(heights) {
        this._waterHeights = heights;
        this.drawWater();
    }

    @property({ type: [Color] })
    private _waterClolors: Color[] = []
    @property({ type: [Color] })
    get waterClolors() {
        return this._waterClolors;
    }
    set waterClolors(colors) {
        this._waterClolors = colors;
        this.drawWater();
    }



    @property(CCInteger)
    bottleWidth: number = 132;

    @property(CCInteger)
    bottleHeight: number = 470;


    @property(CCInteger)
    _bottleAngle: number = 0;
    @property(CCInteger)
    get bottleAngle() {
        return this._bottleAngle;
    }
    set bottleAngle(angle) {
        this._bottleAngle = angle;
        this.node.angle = angle;
        this.drawWater();
    }

    @property(Graphics)
    drawGraphics: Graphics = null!;


    onLoad() {
        console.warn(`
        欢迎关注微信公众号  白玉无冰 

        导航：https://mp.weixin.qq.com/s/Ht0kIbaeBEds_wUeUlu8JQ
        `)
        console.info(
            `
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
            `
        )
    }

    start() {
        this.drawWater();
    }

    private drawWater() {
        if (!this.drawGraphics) return
        this.drawGraphics.clear();
        for (let index = 0; index < this.waterHeights.length; index++) {
            const height = this.waterHeights[index];
            this.drawOneWater(height, this.waterClolors[index] || Color.WHITE);
        }

    }

    private drawOneWater(height: number, color: Color) {
        const radiansA = this.bottleAngle / 180 * Math.PI;
        const radiansM = Math.atan(2 * height / this.bottleWidth);
        const tempWTan = this.bottleWidth * Math.tan(radiansA);
        this.drawGraphics.fillColor = color;
        if (radiansA <= radiansM) {
            if (radiansA < -radiansM) {
                let hL = Math.sqrt(2 * height * -tempWTan);
                hL = hL > this.bottleHeight ? this.bottleHeight : hL;
                const bW = hL / Math.tan(-radiansA);
                this.drawGraphics.moveTo(this.bottleWidth, 0);
                this.drawGraphics.lineTo(this.bottleWidth, hL);
                this.drawGraphics.lineTo(this.bottleWidth - bW, 0);
                this.drawGraphics.lineTo(this.bottleWidth, 0);
            } else {
                this.drawGraphics.moveTo(0, 0);
                let hL = height + tempWTan / 2;
                let cutOffset = 0;
                if (hL > this.bottleHeight) {
                    cutOffset += hL - this.bottleHeight
                }
                let hR = height - tempWTan / 2;
                if (hR > this.bottleHeight) {
                    cutOffset += hR - this.bottleHeight
                }

                this.drawGraphics.lineTo(this.bottleWidth, 0);
                this.drawGraphics.lineTo(this.bottleWidth, hR - cutOffset);
                this.drawGraphics.lineTo(0, hL - cutOffset);
                this.drawGraphics.lineTo(0, 0);
            }
        } else {
            let hL = Math.sqrt(2 * height * tempWTan);
            hL = hL > this.bottleHeight ? this.bottleHeight : hL;
            const bW = hL / Math.tan(radiansA);
            this.drawGraphics.moveTo(0, 0);
            this.drawGraphics.lineTo(bW, 0);
            this.drawGraphics.lineTo(0, hL);
            this.drawGraphics.lineTo(0, 0);
        }

        this.drawGraphics.fill();
    }


}
