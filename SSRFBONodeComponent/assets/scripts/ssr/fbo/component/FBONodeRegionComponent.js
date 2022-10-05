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
 * 指定[区域纹理] 的FBO 专用类
 * @class FBONodeRegionComponent
 * @extends FBONodeComponent
 */
ssr.FBO.Component.Region = cc.Class({
    extends: ssr.FBO.Component.Core,
    editor: CC_EDITOR && {
        menu: 'ssr/FBO/Region',
        executeInEditMode: true,
    },
    properties: {
        _zoom: 1.0,
        zoom: {
            type: cc.Float,
            get () {
                return this._zoom;
            },
            set (val) {
                this._zoom = val;
                this._fboCamera.orthoSize = this.node.height / 2 / this._zoom;
            },
            tooltip: "纹理缩放比率"
        },
    },
    onEnable () {
        this._registerNodeEvent();
    },
    onDisable () {
        this._unregisterNodeEvent();
    },
    _registerNodeEvent () {
        this.node.on('size-changed', this._updateSize, this);
    },

    _unregisterNodeEvent () {
        this.node.off('size-changed', this._updateSize, this);
    },
    _updateSize () {
        this._updateRenderTextureSize(this.node.width, this.node.height);
        this._fboCamera.targetTexture = this._renderTexture;
        this._fboCamera.orthoSize = this.node.height / 2 / this.zoom;
    },
    /**
     * 重写初始化 RenderTexture 对象，纹理大小为指定尺寸大小
     * @method _initFBORenderTexture
     * @private
     */
    _initFBORenderTexture () {
		this._super();
		this._renderTexture.initWithSize(this.node.width, this.node.height, cc.gfx.RB_FMT_S8);
	},
    /**
     * 重写初始化 FBO 专用 cc.Camera , 设置 cullingMask，开启自定义大小模式
     * @method _initFBOCamera
     * @private
     */
	_initFBOCamera () {
		this._super();
        this._fboCamera.cullingMask = 0xffffffff;
        this._fboCamera.cullingMask &= ~(1 << this.node.groupIndex);
		this._fboCamera.alignWithScreen = false;
		this._fboCamera.orthoSize = this.node.height / 2 / this.zoom;
	},
    /**
     * 重写update 生命周期函数，渲染前后更新节点的坐标
     * @method update
     */
	updateFBO () {
        //
        this.node.position = cc.v3(this.node.x, this.node.y, 1);
		this._super();
	},
    __preload () {
        if (CC_EDITOR) {
            var Flags = cc.Object.Flags;
            this._objFlags |= (Flags.IsScaleLocked | Flags.IsAnchorLocked);
        }
    }
});
