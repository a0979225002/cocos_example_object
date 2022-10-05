/****************************************************************************
 Copyright (c) 2017-2020 SuperSuRaccoon
 
 Site: http://www.supersuraccoon-cocos2d.com
 Mail: supersuraccoon@gmail.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
 

const ssr = require("../namespace/FBONamespace");

/**
 * FBO 对象转化为图片用
 * @class FBONodeCaptureComponent
 * @extends Component
 */
ssr.FBO.Component.Capture = cc.Class({
    extends: cc.Component,
    editor: CC_EDITOR && {
        menu: 'ssr/FBO/Capture'
    },
    properties: {
    	target: cc.Node
    },
	onLoad () {
	},
    start () {
    },
    //
    capture (imageName) {
        imageName = imageName || "fbo.png";
        if (window.jsb) {
            var texture = this.target.getComponent(cc.Sprite).spriteFrame.getTexture();
            let width = texture.width;
            let height = texture.height;
            let data = texture.readPixels();
            let picData = new Uint8Array(width * height * 4);
            let rowBytes = width * 4;
            for (let row = 0; row < height; row++) {
                let srow = height - 1 - row;
                let start = srow * width * 4;
                let reStart = row * width * 4;
                for (let i = 0; i < rowBytes; i++) {
                    picData[reStart + i] = data[start + i];
                }
            }
            let filePath = jsb.fileUtils.getWritablePath() + imageName;
            let success = jsb.saveImageData(picData, width, height, filePath)
            if (success) {
                return filePath;
            }
            else {
                return null;
            }
        }
        else {
            var texture = this.target.getComponent(cc.Sprite).spriteFrame.getTexture();
            let width = texture.width;
            let height = texture.height;
            if (!this._canvas) {
                this._canvas = document.createElement('canvas');
                this._canvas.width = width;
                this._canvas.height = height;
            }
            else {
                this.clearCanvas();
            }
            let ctx = this._canvas.getContext('2d');
            let data = texture.readPixels();
            let rowBytes = width * 4; 
            for (let row = 0; row < height; row++) {
                let srow = height - 1 - row;
                let imageData = ctx.createImageData(width, 1);
                let start = srow * width * 4;
                for (let i = 0; i < rowBytes; i++) {
                    imageData.data[i] = data[start + i];
                }
                ctx.putImageData(imageData, 0, row);
            }
            var dataURL = this._canvas.toDataURL("image/png");
            this._canvas.remove();
            this._canvas = null;
            download(dataURL, imageName, "image/png");
            return imageName;
        }
    }
});
