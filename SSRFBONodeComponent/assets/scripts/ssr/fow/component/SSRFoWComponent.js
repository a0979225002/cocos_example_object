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

const ssr = require('../namespace/SSRFoWNamespace');

let RevealStyle = cc.Enum({
    SQUARE        : 1,
    DIAMOND       : 2
});

let TileStyle = cc.Enum({
    RECT          : 1,
    CIRCLE        : 2,
});

/**
 * ssr.FoW.Component 战雾组件
 * @class ssr.FoW.Component
 * @extends Component
 */
ssr.FoW.Component = cc.Class({
    extends: cc.Component,
    editor: CC_EDITOR && {
        menu: 'ssr/FoW/Component'
    },
    properties: {
        /**
         * 用于渲染的 Graphics 对象，如果没有提供，会尝试使用 cc.Node 上 cc.Mask 对象的内置 Graphics 对象
         * @property {cc.Graphics} render
         * @default null
         */
        render: cc.Graphics,
        //
        _tileSize: 32,
        tileSize: {
            get () {
                return this._tileSize;
            },
            set (val) {
                this._tileSize = val;
            },
            tooltip: "单元 tile 的大小尺寸"
        },
        _range: 2,
        range: {
            get () {
                return this._range;
            },
            set (val) {
                this._range = val;
            },
            tooltip: "每次揭开迷雾的周边单元格范围"
        },
        _revealStyle: RevealStyle.DIAMOND,
        revealStyle: {
            type: RevealStyle,
            get () {
                return this._revealStyle;
            },
            set (val) {
                this._revealStyle = val;
            },
            tooltip: "揭开周围单元格的风格，支持钻石形状和矩形"
        },
        _tileStyle: TileStyle.CIRCLE,
        tileStyle: {
            type: TileStyle,
            get () {
                return this._tileStyle;
            },
            set (val) {
                this._tileStyle = val;
            },
            tooltip: "每个单元格的渲染风格，支持圆形和矩形"
        },
    },
    onLoad () {
    },
    start () {
        if (!this.render) {
            this.mask = this.node.getComponent("cc.Mask");
            if (this.mask) {
                this.render = this.mask._graphics;        
            }
        }
        //
        this.render.fillColor = cc.color(0, 0, 0, 255);
        //
        this._init();
    },
    _init () {
        /* 
            revealed tiles record array 
            null : unrevealed
            1    : revealed as centerCoord
            2    : revealed as aroundCoord
        */
        this._revealedTileArray = {};
    },
    _isTileRevealed (tileToReveal) {
        return (tileToReveal.x in this._revealedTileArray &&
                tileToReveal.y in this._revealedTileArray[tileToReveal.x] &&
                (this._revealedTileArray[tileToReveal.x][tileToReveal.y] != ssr.TiledFogOfWarUtil.REVEAL_MARK.AROUND ||
                 this._revealedTileArray[tileToReveal.x][tileToReveal.y] != ssr.TiledFogOfWarUtil.REVEAL_MARK.CENTER));
    },
    _isTileRevealedAsCetner (tileToReveal) {
        return (tileToReveal.x in this._revealedTileArray &&
                tileToReveal.y in this._revealedTileArray[tileToReveal.x] &&
                this._revealedTileArray[tileToReveal.x][tileToReveal.y] == ssr.TiledFogOfWarUtil.REVEAL_MARK.CENTER);
    },
    _revealTile (tileToReveal) {
        if (!this._revealedTileArray[tileToReveal.x]) {
            // this._revealedTileArray[tileToReveal.x] = [];
            this._revealedTileArray[tileToReveal.x] = {};
        }
        this._revealedTileArray[tileToReveal.x][tileToReveal.y] = ssr.TiledFogOfWarUtil.REVEAL_MARK.AROUND;
    },
    _revealTileAsCenter (tileToReveal) {
        if (!this._revealedTileArray[tileToReveal.x]) {
            // this._revealedTileArray[tileToReveal.x] = [];
            this._revealedTileArray[tileToReveal.x] = {};
        }
        this._revealedTileArray[tileToReveal.x][tileToReveal.y] = ssr.TiledFogOfWarUtil.REVEAL_MARK.CENTER;
    },
    updateFog (pos) {
        let centerCoord = ssr.TiledFogOfWarUtil.coordFromPos(pos, this.tileSize);
        if (this._isTileRevealedAsCetner(centerCoord)) {
            return;
        }
        if (this.revealStyle == ssr.TiledFogOfWarUtil.STYLE.SQUARE) {
            var tilesArray = ssr.TiledFogOfWarUtil.tilesAroundSquare(
                centerCoord, 
                this.range
            );    
        }
        else {
            var tilesArray = ssr.TiledFogOfWarUtil.tilesAroundDiamond(
                centerCoord, 
                this.range
            );   
        }
        var hasTilesToReveal = false;
        for (var i = 0; i < tilesArray.length; i ++) {
            var tileToReveal = tilesArray[i];
            if (this._isTileRevealed(tileToReveal)) {
                if (centerCoord.equals(tileToReveal)) {
                    // mark as centerCoord
                    this._revealTileAsCenter(tileToReveal);
                }
                continue;
            }
            hasTilesToReveal = true;
            this._revealTile(tileToReveal);

            if (this.tileStyle == ssr.TiledFogOfWarUtil.RENDER_STYLE.RECT) {
                this.render.rect(
                    tileToReveal.x * this.tileSize,
                    tileToReveal.y * this.tileSize,
                    this.tileSize,
                    this.tileSize

                );
            }
            else if (this.tileStyle == ssr.TiledFogOfWarUtil.RENDER_STYLE.CIRCLE) {
                this.render.circle(
                    tileToReveal.x * this.tileSize,
                    tileToReveal.y * this.tileSize,
                    this.tileSize

                );
            }
        }
        if (hasTilesToReveal) {
            this.render.fill();
        }
    },
    reset () {
        this.render.clear();
        this._revealedTileArray = {};
    }
});

