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
 * 附身 的FBO 专用类
 * @class FBONodeGhostComponent
 * @extends FBONodeComponent
 * 主相机      everything &= ~(1 << fbo);
 * 目标对象    fbo
 * fbo相机     nothing |= ~(1 << fbo);
 * fbo对象     ghost
 */
ssr.FBO.Component.Ghost = cc.Class({
    extends: require("./FBONodeComponent.js"),
    editor: CC_EDITOR && {
        menu: 'ssr/FBO/Ghost',
        executeInEditMode: true,
    },
    properties: {
        _target: null,
        target: {
            type: cc.Node,
            get () {
                return this._target;
            },
            set (val) {
                this._target = val;
                this.updateTarget();
                this.node.width = this._target.width;
                this.node.height = this._target.height;
            },
            tooltip: "FBO 目标节点"
        },
        _offsetX: 0,
        offsetX: {
            type: cc.Float,
            get () {
                return this._offsetX;
            },
            set (val) {
                this._offsetX = val;
                this.updateTarget();
            },
            tooltip: "FBO 渲染区域 X轴方向偏移量"
        },
        _offsetY: 0,
        offsetY: {
            type: cc.Float,
            get () {
                return this._offsetY;
            },
            set (val) {
                this._offsetY = val;
                this.updateTarget();
            }
        }
    },
    onEnable () {
        this._registerNodeEvent();
    },
    _registerNodeEvent () {
        this.node.on('size-changed', this._updateSize, this);
    },

    _unregisterNodeEvent () {
        this.node.off('size-changed', this._updateSize, this);
    },
    _updateSize () {
        this._updateRenderTextureSize(this.node.width, this.node.height);
        if (this._fboCamera) {
            this._fboCamera.targetTexture = this._renderTexture;
            this._fboCamera.orthoSize = this.node.height / 2;
        }
    },
    updateTarget () {
        if (!this.target) {
            return;
        }
        this._targetGroupOld = this.target.group;
        this.target.group = this.group;
        this.node.position = cc.v3(this.offsetX, this.offsetY, 1);
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
        this._fboCamera.cullingMask = 0x00000000;
        this._fboCamera.cullingMask |= ~(1 << this.node.groupIndex);

        this._fboCamera.alignWithScreen = false;
        this._fboCamera.orthoSize = this.node.height / 2;
    },
    /**
     * 重写update 生命周期函数，渲染前后更新节点的坐标
     * @method update
     */
    updateFBO () {
        if (!this.target) {
            return;
        }
        this.node.position = cc.v3(this.offsetX, this.offsetY, 1);
        this._fboCamera.orthoSize = this.node.height / 2 * this.target.scaleX;
        this._super();
        this._fboCamera.orthoSize = this.node.height / 2;
        cc.Camera.main.cullingMask &= ~(1 << this.target.groupIndex);
    },
    __preload () {
        if (CC_EDITOR) {
            var Flags = cc.Object.Flags;
            this._objFlags |= (Flags.IsScaleLocked | Flags.IsAnchorLocked | Flags.IsPositionLocked);
        }
    },
    onLoad () {
        this._super();
        //
        this.node.group = "ghost";
        this.updateTarget();
    },
    onDisable() {
        this._unregisterNodeEvent();
        this.target.group = this._targetGroupOld;
        this.target.group = "default";
    }
});
