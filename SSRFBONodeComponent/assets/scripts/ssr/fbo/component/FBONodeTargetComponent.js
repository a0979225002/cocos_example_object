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
 * 指定[目标纹理] 的FBO 专用类
 * @class FBONodeTargetComponent
 * @extends FBONodeComponent
 */
ssr.FBO.Component.Target = cc.Class({
    extends: ssr.FBO.Component.Core,
    editor: CC_EDITOR && {
        menu: 'ssr/FBO/Target',
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
		    },
		    tooltip: "FBO 目标节点"
		},
		_syncAngle: false,
		syncAngle: {
			get () {
				return this._syncAngle;
			},
			set (val) {
				this._syncAngle = val;
			},
			tooltip: "是否需要动态监测目标旋转角度"
		},
		_syncScale: false,
		syncScale: {
			get () {
				return this._syncScale;
			},
			set (val) {
				this._syncScale = val;
			},
			tooltip: "是否需要动态监测目标缩放大小"
		},
		_syncSize: false,
		syncSize: {
			get () {
				return this._syncSize;
			},
			set (val) {
				this._syncSize = val;
			},
			tooltip: "是否需要动态监测目标大小"
		},
		_syncAnchor: false,
		syncAnchor: {
			get () {
				return this._syncAnchor;
			},
			set (val) {
				this._syncAnchor = val;
			},
			tooltip: "是否需要动态监测目标锚点"
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
		},
		_inflateW: 0,
		inflateW: {
			type: cc.Float,
			get () {
				return this._inflateW;
			},
			set (val) {
				this._inflateW = val;
		        this.updateTarget();
			},
			tooltip: "FBO 渲染区域 宽度扩展范围"
		},
		_inflateH: 0,
		inflateH: {
			type: cc.Float,
			get () {
				return this._inflateH;
			},
			set (val) {
				this._inflateH = val;
		        this.updateTarget();
			},
			tooltip: "FBO 渲染区域 高度扩展范围"
		}
    },
    /**
     * 重写初始化 RenderTexture 对象，纹理大小为目标对象尺寸
     * @method _initFBORenderTexture
     * @private
     */
    _initFBORenderTexture () {
		this._super();
		if (this.target) {
			this._renderTexture.initWithSize(this.target.width + this.inflateW, this.target.height + this.inflateH, cc.gfx.RB_FMT_S8);	
		}
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
		if (this.target) {
			this._fboCamera.orthoSize = (this.target.height + this.inflateH) / 2;
		}
	},
	/**
     * 重写update 生命周期函数，渲染前后更新节点的坐标
     * @method update
     */
	updateFBO () {
		if (!this.target) {
			return;
		}
		let oldPosition = this.node.position;
		if (this.syncAngle && this._targetAngleOld != this.target.angle) {
			this._targetAngleOld = this.target.angle;
			this.node.angle = this.target.angle = 0;
		}
		if (this.syncScale) {
			if (this._targetScaleXOld != this.target.scaleX) {
				this._targetScaleXOld = this.target.scaleX;
			}
			if (this._targetScaleYOld != this.target.scaleY) {
				this._targetScaleYOld = this.target.scaleY;
			}
			this.node.scaleX = this.target.scaleX = 1;
			this.node.scaleY = this.target.scaleY = 1;
		}
		if (this.syncAnchor) {
			if (this._targetAnchorXOld != this.target.anchorX) {
				this._targetAnchorXOld = this.target.anchorX;
			}
			if (this._targetAnchorYOld != this.target.anchorY) {
				this._targetAnchorYOld = this.target.anchorY;
			}
			this.node.anchorX = this.target.anchorX = 0.5;
			this.node.anchorY = this.target.anchorY = 0.5;
		}
		if (this.syncSize) {
			if (this._targetWidthOld != this.target.width ||
				this._targetHeightOld != this.target.height) {
				this._targetWidthOld = this.target.width;
				this._targetHeightOld = this.target.height;
				this.node.width = this.target.width + this.inflateW;
		    	this.node.height = this.target.height + this.inflateH;
		    	this._updateRenderTextureSize(this.target.width + this.inflateW, this.target.height + this.inflateH);
		    	if (this._fboCamera) {
		    		this._fboCamera.targetTexture = this._renderTexture;
		        	this._fboCamera.orthoSize = (this.target.height + this.inflateH) / 2;
		    	}
			}
		}
		this.node.position = cc.v3(this.target.position.x - this.offsetX, this.target.position.y - this.offsetY, 1);
		this.target.group = this.group;
		this._super();
		this.target.group = this._targetGroupOld;
		if (this.syncAngle) {
			this.node.angle = this.target.angle = this._targetAngleOld;
		}
		if (this.syncAnchor) {
			this.node.anchorX = this.target.anchorX = this._targetAnchorXOld;
			this.node.anchorY = this.target.anchorY = this._targetAnchorYOld;
			// if (this.flipY) {
			// 	this.node.anchorY = 1 - this.node.anchorY;
			// }
		}
		if (this.syncScale) {
			this.node.scaleX = this.target.scaleX = this._targetScaleXOld;
			this.node.scaleY = this.target.scaleY = this._targetScaleYOld;	
			// this.node.scaleY *= (this.flipY ? -1 : 1);
		}
		this.node.position = cc.v3(oldPosition.x, oldPosition.y, 1);
	},
	/**
     * _resetTarget 函数，重置目标
     * @method _resetTarget
     */
	_resetTarget () {
		this.node.group = "default";
		this.node.width = 100;
    	this.node.height = 100;
    	if (this._renderTexture) {
        	this._renderTexture.initWithSize(this.node.width, this.node.height, cc.gfx.RB_FMT_S8);
        }
        if (this._fboCamera) {
        	this._fboCamera.targetTexture = this._renderTexture;
        	this._fboCamera.orthoSize = (this.target.height + this.inflateH) / 2;
        }
        if (this._fboSprite) {
        	var fboSpriteFrame = new cc.SpriteFrame();
        	this._fboSprite.spriteFrame = fboSpriteFrame;
        }
	},
	/**
     * updateTarget 函数，更新当前 FBO 的对象
     * @param {cc.Node} target
     * @method updateTarget
     */
	updateTarget () {
		if (!this.target) {
			this._resetTarget();
        	return;	
		}
        this.node.width = this.target.width + this.inflateW;
    	this.node.height = this.target.height + this.inflateH;
        if (this._renderTexture) {
        	this._renderTexture.initWithSize(this.target.width + this.inflateW, this.target.height + this.inflateH, cc.gfx.RB_FMT_S8);	
        }
        if (this._fboCamera) {
        	this._fboCamera.targetTexture = this._renderTexture;
        	this._fboCamera.orthoSize = (this.target.height + this.inflateH) / 2;
        }
        //
        this._targetGroupOld = this.target.group;
    	this._targetAngleOld = 0;
		this._targetScaleXOld = 0;
		this._targetScaleYOld = 0;
		this._targetWidthOld = 0;
		this._targetHeightOld = 0;
		this._targetAnchorXOld = 0;
		this._targetAnchorYOld = 0;
    },
	/**
     * __preload 函数，编辑器用，锁定部分属性
     * @method __preload
     */
	__preload () {
        if (CC_EDITOR) {
            var Flags = cc.Object.Flags;
            // this._objFlags |= (Flags.IsAnchorLocked | Flags.IsSizeLocked | Flags.IsRotationLocked | Flags.IsScaleLocked);
		}
    },
	onLoad () {
		this._super();
		//
		this.node.group = "default";
		this.updateTarget();
	}
});
