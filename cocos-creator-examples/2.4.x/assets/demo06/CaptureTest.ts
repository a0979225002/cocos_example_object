import { encodeJPG } from "./EncodeJPG";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CaptureTest extends cc.Component {
    @property(cc.Label)
    lb: cc.Label = null


    private encodeJpgCapture() {
        this.lb.string = `encodeJpgCapture \n结果见控制台日志 \n${Date.now()}`

        // 此代码仅适用于 web 平台。要在 native 平台中使用这个功能，请参考 example -case 中的 capture_to_native 场景。
        let node = new cc.Node();
        node.zIndex = cc.macro.MAX_ZINDEX;
        node.parent = this.node.parent;
        let camera = node.addComponent(cc.Camera);
        camera.backgroundColor = cc.Color.TRANSPARENT
        camera.clearFlags = cc.Camera.ClearFlags.DEPTH | cc.Camera.ClearFlags.STENCIL | cc.Camera.ClearFlags.COLOR
        // 设置你想要的截图内容的 cullingMask
        camera.cullingMask = 0xffffffff;

        // 新建一个 RenderTexture，并且设置 camera 的 targetTexture 为新建的 RenderTexture，这样 camera 的内容将会渲染到新建的 RenderTexture 中。
        let texture = new cc.RenderTexture();
        //@ts-ignore
        let gl = cc.game._renderContext;
        // 如果截图内容中不包含 Mask 组件，可以不用传递第三个参数
        texture.initWithSize(this.node.parent.width, this.node.parent.height, gl.STENCIL_INDEX8);
        camera.targetTexture = texture;

        // 渲染一次摄像机，即更新一次内容到 RenderTexture 中
        camera.render();
        camera.enabled = false;

        // 这样我们就能从 RenderTexture 中获取到数据了
        let data = texture.readPixels();
        let width = texture.width;
        let height = texture.height;

        const flipYData = new Uint8Array(width * height * 4);
        let rowBytes = width * 4;
        for (let row = 0; row < height; row++) {
            let startRow = height - 1 - row;
            let start = startRow * width * 4;
            for (let i = 0; i < rowBytes; i++) {
                flipYData[row * width * 4 + i] = data[start + i];
            }
        }
   

        const rawImageData = {
            data: flipYData,
            width: width,
            height: height,
        };
        const jpegImageData = encodeJPG(rawImageData, 50);
        cc.log('jpegImageData', jpegImageData);
        function uint8ToString(buf) {
            var i, length, out = '';
            for (i = 0, length = buf.length; i < length; i += 1) {
                out += String.fromCharCode(buf[i]);
            }
            return out;
        }
        const base64 = btoa(uint8ToString(jpegImageData.data));//
        cc.warn('base64', "data:image/jpg;base64," + base64)

        this.scheduleOnce(() => {
            node.destroy()
        }, 0)
    }


    private canvasToDataURLCapture() {
        this.lb.string = `canvas toDataURL \n结果见控制台日志 \n${Date.now()}`
        // 此代码仅适用于 web 平台。要在 native 平台中使用这个功能，请参考 example-case 中的 capture_to_native 场景。
        let node = new cc.Node();
        node.parent = this.node.parent;
        let camera = node.addComponent(cc.Camera);
        camera.backgroundColor = cc.Color.TRANSPARENT
        camera.clearFlags = cc.Camera.ClearFlags.DEPTH | cc.Camera.ClearFlags.STENCIL | cc.Camera.ClearFlags.COLOR
        // 设置你想要的截图内容的 cullingMask
        camera.cullingMask = 0xffffffff;

        // 新建一个 RenderTexture，并且设置 camera 的 targetTexture 为新建的 RenderTexture，这样 camera 的内容将会渲染到新建的 RenderTexture 中。
        let texture = new cc.RenderTexture();
        let gl = cc.game._renderContext;
        // 如果截图内容中不包含 Mask 组件，可以不用传递第三个参数
        texture.initWithSize(this.node.parent.width, this.node.parent.height, gl.STENCIL_INDEX8);
        camera.targetTexture = texture;

        // 渲染一次摄像机，即更新一次内容到 RenderTexture 中
        camera.render();

        // 这样我们就能从 RenderTexture 中获取到数据了
        let data = texture.readPixels();

        // 接下来就可以对这些数据进行操作了
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        let width = canvas.width = texture.width;
        let height = canvas.height = texture.height;

        canvas.width = texture.width;
        canvas.height = texture.height;

        let rowBytes = width * 4;
        for (let row = 0; row < height; row++) {
            let startRow = height - 1 - row;
            let imageData = ctx.createImageData(width, 1);
            let start = startRow * width * 4;
            for (let i = 0; i < rowBytes; i++) {
                imageData.data[i] = data[start + i];
            }
            ctx.putImageData(imageData, 0, row);
        }

        let dataURL = canvas.toDataURL("image/jpeg");
        cc.warn('canvasToDataURLCapture', dataURL)
        // let img = document.createElement("img");
        // img.src = dataURL;

        this.scheduleOnce(() => {
            node.destroy()
        }, 0)
    }


    onLoad (){
        cc.warn(
            `
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
            `
        )
    }
}
