import {
    assetManager, Color, director, dynamicAtlasManager,
    fragmentText, getBaselineOffset, HorizontalTextAlignment, IAssembler, js,
    Label, LabelOutline, LabelShadow, Rect, safeMeasureText, Size, SpriteFrame, Texture2D, UITransform,
    Vec2, VerticalTextAlignment, __private, BASELINE_RATIO,
} from "cc";




const Overflow = Label.Overflow;
const MAX_SIZE = 2048;
const _BASELINE_OFFSET = getBaselineOffset();

let _context: CanvasRenderingContext2D | null = null;
let _canvas: HTMLCanvasElement | null = null;
let _texture: SpriteFrame | __private.cocos_2d_assembler_label_font_utils_LetterRenderTexture | null = null;

let _fontDesc = '';
let _string = '';
let _fontSize = 0;
let _drawFontsize = 0;
let _splitStrings: string[] = [];
const _canvasSize = new Size();
let _lineHeight = 0;
let _hAlign = 0;
let _vAlign = 0;
let _color = new Color();
let _fontFamily = '';
let _overflow = Overflow.NONE;
let _isWrapText = false;

// outline
let _outlineComp: LabelOutline | null = null;
const _outlineColor = Color.BLACK.clone();

// shadow
let _shadowComp: LabelShadow | null = null;
const _shadowColor = Color.BLACK.clone();

const _canvasPadding = new Rect();
const _contentSizeExtend = Size.ZERO.clone();
const _nodeContentSize = Size.ZERO.clone();
const _startPosition = Vec2.ZERO.clone();

const _drawUnderlinePos = Vec2.ZERO.clone();
let _drawUnderlineWidth = 0;
let _underlineThickness = 0;

let _isBold = false;
let _isItalic = false;
let _isUnderline = false;

const Alignment = [
    'left', // macro.TextAlignment.LEFT
    'center', // macro.TextAlignment.CENTER
    'right', // macro.TextAlignment.RIGHT
];

export const ttfUtils = {
    getAssemblerData() {
        const sharedLabelData = Label._canvasPool.get();
        return sharedLabelData;
    },

    resetAssemblerData(assemblerData: __private.cocos_2d_assembler_label_font_utils_ISharedLabelData) {
        if (assemblerData) {
            Label._canvasPool.put(assemblerData);
        }
    },

    updateRenderData(comp: Label) {
        if (!comp.renderData || !comp.renderData.vertDirty) { return; }

        const trans = comp.node._uiProps.uiTransformComp!;
        this._updateFontFamily(comp);
        this._updateProperties(comp, trans);
        this._calculateLabelFont();
        this._updateLabelDimensions();
        this._resetDynamicAtlas(comp);
        this._updateTexture();
        this._calDynamicAtlas(comp);

        comp.actualFontSize = _fontSize;
        trans.setContentSize(_canvasSize);

        this.updateVertexData(comp);
        this.updateUvs(comp);

        comp.markForUpdateRenderData(false);

        _context = null;
        _canvas = null;
        _texture = null;
    },

    updateVertexData(comp: Label) {
    },

    updateUvs(comp: Label) {
    },

    _updateFontFamily(comp: Label) {
        if (!comp.useSystemFont) {
            if (comp.font) {
                if (comp.font._nativeAsset) {
                    _fontFamily = comp.font._nativeAsset;
                } else {
                    assetManager.postLoadNative(comp.font, (err) => {
                        if (!comp.isValid) { return; }
                        _fontFamily = comp.font!._nativeAsset || 'Arial';
                        comp.updateRenderData(true);
                    });
                    _fontFamily = 'Arial';
                }
            } else {
                _fontFamily = 'Arial';
            }
        } else {
            _fontFamily = comp.fontFamily || 'Arial';
        }
    },

    _updateProperties(comp: Label, trans: UITransform) {
        const assemblerData = comp.assemblerData;
        if (!assemblerData) {
            return;
        }

        _context = assemblerData.context;
        _canvas = assemblerData.canvas;
        _texture = comp.spriteFrame;

        _string = comp.string.toString();
        _fontSize = comp.fontSize;
        _drawFontsize = _fontSize;
        _overflow = comp.overflow;
        _nodeContentSize.width = _canvasSize.width = trans.width;
        _nodeContentSize.height = _canvasSize.height = trans.height;
        _underlineThickness = comp.underlineHeight;
        _lineHeight = comp.lineHeight;
        _hAlign = comp.horizontalAlign;
        _vAlign = comp.verticalAlign;
        _color = comp.color;
        _isBold = comp.isBold;
        _isItalic = comp.isItalic;
        _isUnderline = comp.isUnderline;

        if (_overflow === Overflow.NONE) {
            _isWrapText = false;
        } else if (_overflow === Overflow.RESIZE_HEIGHT) {
            _isWrapText = true;
        } else {
            _isWrapText = comp.enableWrapText;
        }

        // outline
        _outlineComp = LabelOutline && comp.getComponent(LabelOutline);
        _outlineComp = (_outlineComp && _outlineComp.enabled && _outlineComp.width > 0) ? _outlineComp : null;
        if (_outlineComp) {
            _outlineColor.set(_outlineComp.color);
        }

        // shadow
        _shadowComp = LabelShadow && comp.getComponent(LabelShadow);
        _shadowComp = (_shadowComp && _shadowComp.enabled) ? _shadowComp : null;
        if (_shadowComp) {
            _shadowColor.set(_shadowComp.color);
        }

        this._updatePaddingRect();
    },

    _updatePaddingRect() {
        let top = 0; let bottom = 0; let left = 0; let right = 0;
        let outlineWidth = 0;
        _contentSizeExtend.width = _contentSizeExtend.height = 0;
        if (_outlineComp) {
            outlineWidth = _outlineComp.width;
            top = bottom = left = right = outlineWidth;
            _contentSizeExtend.width = _contentSizeExtend.height = outlineWidth * 2;
        }
        if (_shadowComp) {
            const shadowWidth = _shadowComp.blur + outlineWidth;
            const offsetX = _shadowComp.offset.x;
            const offsetY = _shadowComp.offset.y;
            left = Math.max(left, -offsetX + shadowWidth);
            right = Math.max(right, offsetX + shadowWidth);
            top = Math.max(top, offsetY + shadowWidth);
            bottom = Math.max(bottom, -offsetY + shadowWidth);
        }
        if (_isItalic) {
            // 0.0174532925 = 3.141592653 / 180
            const offset = _drawFontsize * Math.tan(12 * 0.0174532925);
            right += offset;
            _contentSizeExtend.width += offset;
        }
        _canvasPadding.x = left;
        _canvasPadding.y = top;
        _canvasPadding.width = left + right;
        _canvasPadding.height = top + bottom;
    },

    _calculateFillTextStartPosition() {
        //todo 计算不同对齐模式
        const lineHeight = this._getLineHeight();
        const drawStartX = lineHeight * (_splitStrings.length - 0.5);
        _startPosition.set(drawStartX, 0)
    },

    _updateTexture() {
        if (!_context || !_canvas) {
            return;
        }

        _context.clearRect(0, 0, _canvas.width, _canvas.height);
        _context.font = _fontDesc;

        this._calculateFillTextStartPosition();
        const lineHeight = this._getLineHeight();
        // use round for line join to avoid sharp intersect point
        _context.lineJoin = 'round';
        _context.fillStyle = `rgba(${_color.r}, ${_color.g}, ${_color.b}, 1)`;

        // draw shadow and underline //todo
        // this._drawTextEffect(_startPosition, lineHeight);
        // draw text and outline
        for (let i = 0; i < _splitStrings.length; ++i) {
            let drawTextPosX = _startPosition.x - i * lineHeight;
            let drawTextPosY = _startPosition.y;
            for (let ii = 0; ii < _splitStrings[i].length; ii++) {
                const str = _splitStrings[i].slice(ii, ii + 1).toString();
                if (_outlineComp) {
                    _context.strokeText(str, drawTextPosX, drawTextPosY);
                }
                _context.fillText(str, drawTextPosX, drawTextPosY);
                drawTextPosY += this._measureSingleStrHeight(str);
            }
        }

        if (_shadowComp) {
            _context.shadowColor = 'transparent';
        }

        // _texture.handleLoadedTexture();
        if (_texture) {
            let tex: Texture2D;
            if (_texture instanceof SpriteFrame) {
                tex = (_texture.texture as Texture2D);
            } else {
                tex = _texture;
            }

            const uploadAgain = _canvas.width !== 0 && _canvas.height !== 0;

            if (uploadAgain) {
                tex.reset({
                    width: _canvas.width,
                    height: _canvas.height,
                    mipmapLevel: 1,
                });
                tex.uploadData(_canvas);
                if (_texture instanceof SpriteFrame) {
                    _texture.rect = new Rect(0, 0, _canvas.width, _canvas.height);
                    _texture._calculateUV();
                }
                if (director.root && director.root.batcher2D) {
                    //@ts-ignore
                    director.root.batcher2D._releaseDescriptorSetCache(tex.getHash());
                }
            }
        }
    },

    _resetDynamicAtlas(comp: Label) {
        if (comp.cacheMode !== Label.CacheMode.BITMAP) return;
        const frame = comp.ttfSpriteFrame!;
        dynamicAtlasManager.deleteAtlasSpriteFrame(frame);
        frame._resetDynamicAtlasFrame();
    },

    _calDynamicAtlas(comp: Label) {
        if (comp.cacheMode !== Label.CacheMode.BITMAP) return;
        const frame = comp.ttfSpriteFrame!;
        dynamicAtlasManager.packToDynamicAtlas(comp, frame);
        comp.renderData!.uvDirty = true;
    },

    _setupOutline() {
        _context!.strokeStyle = `rgba(${_outlineColor.r}, ${_outlineColor.g}, ${_outlineColor.b}, ${_outlineColor.a / 255})`;
        _context!.lineWidth = _outlineComp!.width * 2;
    },

    _setupShadow() {
        _context!.shadowColor = `rgba(${_shadowColor.r}, ${_shadowColor.g}, ${_shadowColor.b}, ${_shadowColor.a / 255})`;
        _context!.shadowBlur = _shadowComp!.blur;
        _context!.shadowOffsetX = _shadowComp!.offset.x;
        _context!.shadowOffsetY = -_shadowComp!.offset.y;
    },

    _drawTextEffect(startPosition: Vec2, lineHeight: number) {
        if (!_shadowComp && !_outlineComp && !_isUnderline) return;

        const isMultiple = _splitStrings.length > 1 && _shadowComp;
        const measureText = this._measureText(_context!, _fontDesc);
        let drawTextPosX = 0;
        let drawTextPosY = 0;

        // only one set shadow and outline
        if (_shadowComp) {
            this._setupShadow();
        }

        if (_outlineComp) {
            this._setupOutline();
        }

        // draw shadow and (outline or text)
        for (let i = 0; i < _splitStrings.length; ++i) {
            drawTextPosX = startPosition.x;
            drawTextPosY = startPosition.y + i * lineHeight;
            // multiple lines need to be drawn outline and fill text
            if (isMultiple) {
                if (_outlineComp) {
                    _context!.strokeText(_splitStrings[i], drawTextPosX, drawTextPosY);
                }
                _context!.fillText(_splitStrings[i], drawTextPosX, drawTextPosY);
            }

            // draw underline
            if (_isUnderline) {
                _drawUnderlineWidth = measureText(_splitStrings[i]);
                if (_hAlign === HorizontalTextAlignment.RIGHT) {
                    _drawUnderlinePos.x = startPosition.x - _drawUnderlineWidth;
                } else if (_hAlign === HorizontalTextAlignment.CENTER) {
                    _drawUnderlinePos.x = startPosition.x - (_drawUnderlineWidth / 2);
                } else {
                    _drawUnderlinePos.x = startPosition.x;
                }
                _drawUnderlinePos.y = drawTextPosY + _drawFontsize / 8;
                _context!.fillRect(_drawUnderlinePos.x, _drawUnderlinePos.y, _drawUnderlineWidth, _underlineThickness);
            }
        }

        if (isMultiple) {
            _context!.shadowColor = 'transparent';
        }
    },

    _updateLabelDimensions() {
        _canvasSize.width = Math.min(_canvasSize.width, MAX_SIZE);
        _canvasSize.height = Math.min(_canvasSize.height, MAX_SIZE);

        let recreate = false;
        if (_canvas!.width !== _canvasSize.width) {
            _canvas!.width = _canvasSize.width;
            recreate = true;
        }

        if (_canvas!.height !== _canvasSize.height) {
            _canvas!.height = _canvasSize.height;
            recreate = true;
        }

        if (recreate) _context!.font = _fontDesc;
        // align
        _context!.textAlign = 'center';
        _context!.textBaseline = 'top';
    },

    _getFontDesc() {
        let fontDesc = `${_fontSize.toString()}px `;
        fontDesc += _fontFamily;
        if (_isBold) {
            fontDesc = `bold ${fontDesc}`;
        }

        if (_isItalic) {
            fontDesc = `italic ${fontDesc}`;
        }

        return fontDesc;
    },

    _getLineHeight() {
        let nodeSpacingY = _lineHeight;
        if (nodeSpacingY === 0) {
            nodeSpacingY = _fontSize;
        } else {
            nodeSpacingY = nodeSpacingY * _fontSize / _drawFontsize;
        }

        return nodeSpacingY | 0;
    },

    _calculateParagraphLength(paragraphedStrings: string[], ctx: CanvasRenderingContext2D) {
        const paragraphLength: number[] = [];

        for (const para of paragraphedStrings) {
            const width: number = safeMeasureText(ctx, para, _fontDesc);
            paragraphLength.push(width);
        }

        return paragraphLength;
    },

    _measureText(ctx: CanvasRenderingContext2D, fontDesc: string) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (string: string) => safeMeasureText(ctx, string, fontDesc);
    },

    _measureSingleStrHeight(str: string): number {
        if (!_context) return 0;
        const width = this._measureText(_context, _fontDesc)(str)
        if (str === ' ') {
            return width
        }
        return width > 0 ? _fontSize : 0;
    },

    _calculateShrinkFont(paragraphedStrings: string[]) {
        if (!_context) return;
        const paragraphLength = this._calculateParagraphLength(paragraphedStrings, _context);

        let i = 0;
        let totalHeight = 0;
        let maxLength = 0;

        if (_isWrapText) {
            const canvasWidthNoMargin = _nodeContentSize.width;
            const canvasHeightNoMargin = _nodeContentSize.height;
            if (canvasWidthNoMargin < 0 || canvasHeightNoMargin < 0) {
                return;
            }
            totalHeight = canvasHeightNoMargin + 1;
            const actualFontSize = _fontSize + 1;
            let textFragment: string[] = [];
            let left = 0;
            let right = actualFontSize | 0;
            let mid = 0;

            while (left < right) {
                mid = (left + right + 1) >> 1;

                if (mid <= 0) {
                    // logID(4003);
                    break;
                }

                _fontSize = mid;
                _fontDesc = this._getFontDesc();
                _context.font = _fontDesc;
                const lineHeight = this._getLineHeight();

                totalHeight = 0;
                for (i = 0; i < paragraphedStrings.length; ++i) {
                    const allWidth = safeMeasureText(_context, paragraphedStrings[i], _fontDesc);
                    textFragment = fragmentText(paragraphedStrings[i],
                        allWidth,
                        canvasWidthNoMargin,
                        this._measureText(_context, _fontDesc));
                    totalHeight += textFragment.length * lineHeight;
                }

                if (totalHeight > canvasHeightNoMargin) {
                    right = mid - 1;
                } else {
                    left = mid;
                }
            }

            if (left === 0) {
                // logID(4003);
            } else {
                _fontSize = left;
                _fontDesc = this._getFontDesc();
                _context.font = _fontDesc;
            }
        } else {
            totalHeight = paragraphedStrings.length * this._getLineHeight();

            for (i = 0; i < paragraphedStrings.length; ++i) {
                if (maxLength < paragraphLength[i]) {
                    maxLength = paragraphLength[i];
                }
            }
            const scaleX = (_canvasSize.width - _canvasPadding.width) / maxLength;
            const scaleY = _canvasSize.height / totalHeight;

            _fontSize = (_drawFontsize * Math.min(1, scaleX, scaleY)) | 0;
            _fontDesc = this._getFontDesc();
            _context.font = _fontDesc;
        }
    },

    _calculateWrapText(paragraphedStrings: string[]) {
        if (!_isWrapText || !_context) return;

        _splitStrings = [];
        const canvasWidthNoMargin = _nodeContentSize.width;
        for (let i = 0; i < paragraphedStrings.length; ++i) {
            const allWidth = safeMeasureText(_context, paragraphedStrings[i], _fontDesc);
            const textFragment = fragmentText(paragraphedStrings[i],
                allWidth,
                canvasWidthNoMargin,
                this._measureText(_context, _fontDesc));
            _splitStrings = _splitStrings.concat(textFragment);
        }
    },

    _calculateLabelFont() {
        if (!_context) {
            return;
        }

        const paragraphedStrings = _string.split('\n');

        _splitStrings = paragraphedStrings;
        _fontDesc = this._getFontDesc();
        _context.font = _fontDesc;

        switch (_overflow) {
            case Overflow.NONE: {
                let canvasSizeX = 0;
                let canvasSizeY = 0;
                for (let i = 0; i < _splitStrings.length; ++i) {
                    let paraLength = 0
                    for (let ii = 0; ii < _splitStrings[i].length; ii++) {
                        const str = _splitStrings[i].slice(ii, ii + 1).toString();
                        paraLength += this._measureSingleStrHeight(str);
                    }
                    canvasSizeY = canvasSizeY > paraLength ? canvasSizeY : paraLength;
                }
                canvasSizeX = (_splitStrings.length + BASELINE_RATIO) * this._getLineHeight();

                const rawWidth = parseFloat(canvasSizeX.toFixed(2));
                const rawHeight = parseFloat(canvasSizeY.toFixed(2));
                _canvasSize.width = rawWidth + _canvasPadding.width;
                _canvasSize.height = rawHeight + _canvasPadding.height;
                _nodeContentSize.width = rawWidth + _contentSizeExtend.width;
                _nodeContentSize.height = rawHeight + _contentSizeExtend.height;
                break;
            }
            case Overflow.SHRINK: {
                //todo
                this._calculateShrinkFont(paragraphedStrings);
                this._calculateWrapText(paragraphedStrings);
                break;
            }
            case Overflow.CLAMP: {
                //todo
                this._calculateWrapText(paragraphedStrings);
                break;
            }
            case Overflow.RESIZE_HEIGHT: {
                //todo
                this._calculateWrapText(paragraphedStrings);
                const rawHeight = (_splitStrings.length + BASELINE_RATIO) * this._getLineHeight();
                _canvasSize.height = rawHeight + _canvasPadding.height;
                // set node height
                _nodeContentSize.height = rawHeight + _contentSizeExtend.height;
                break;
            }
            default: {
                // nop
            }
        }
    },
};

const WHITE = Color.WHITE.clone();

/**
 * ttf 组装器
 * 可通过 `UI.ttf` 获取该组装器。
 */
export const verticalttf: IAssembler = {
    createData(comp: Label) {
        const renderData = comp.requestRenderData()!;

        renderData.dataLength = 4;
        renderData.vertexCount = 4;
        renderData.indicesCount = 6;

        const vData = renderData.vData = new Float32Array(4 * 9);

        vData[3] = vData[21] = vData[22] = vData[31] = 0;
        vData[4] = vData[12] = vData[13] = vData[30] = 1;
        let offset = 5;
        for (let i = 0; i < 4; i++) {
            Color.toArray(vData, WHITE, offset);
            offset += 9;
        }
        return renderData;
    },

    fillBuffers(comp: Label, renderer: any) {
        const renderData = comp.renderData!;
        const dataList: __private.cocos_2d_renderer_render_data_IRenderData[] = renderData.data;
        const node = comp.node;

        let buffer = renderer.acquireBufferBatch()!;
        let vertexOffset = buffer.byteOffset >> 2;
        let indicesOffset = buffer.indicesOffset;
        let vertexId = buffer.vertexOffset;
        const isRecreate = buffer.request();
        if (!isRecreate) {
            buffer = renderer.currBufferBatch!;
            indicesOffset = 0;
            vertexId = 0;
            vertexOffset = 0;
        }

        // buffer data may be reallocated, need get reference after request.
        const vBuf = buffer.vData!;
        const iBuf = buffer.iData!;
        const vData = renderData.vData!;
        const data0 = dataList[0];
        const data3 = dataList[3];
        /* */
        node.updateWorldTransform();
        // @ts-expect-error private property access
        const pos = node._pos; const rot = node._rot; const scale = node._scale;
        const ax = data0.x * scale.x; const bx = data3.x * scale.x;
        const ay = data0.y * scale.y; const by = data3.y * scale.y;
        const qx = rot.x; const qy = rot.y; const qz = rot.z; const qw = rot.w;
        const qxy = qx * qy; const qzw = qz * qw;
        const qxy2 = qx * qx - qy * qy;
        const qzw2 = qw * qw - qz * qz;
        const cx1 = qzw2 + qxy2;
        const cx2 = (qxy - qzw) * 2;
        const cy1 = qzw2 - qxy2;
        const cy2 = (qxy + qzw) * 2;
        const x = pos.x; const y = pos.y;
        // left bottom
        vData[0] = cx1 * ax + cx2 * ay + x;
        vData[1] = cy1 * ay + cy2 * ax + y;
        // right bottom
        vData[9] = cx1 * bx + cx2 * ay + x;
        vData[10] = cy1 * ay + cy2 * bx + y;
        // left top
        vData[18] = cx1 * ax + cx2 * by + x;
        vData[19] = cy1 * by + cy2 * ax + y;
        // right top
        vData[27] = cx1 * bx + cx2 * by + x;
        vData[28] = cy1 * by + cy2 * bx + y;

        vBuf.set(vData, vertexOffset);

        // fill index data
        iBuf[indicesOffset++] = vertexId;
        iBuf[indicesOffset++] = vertexId + 1;
        iBuf[indicesOffset++] = vertexId + 2;
        iBuf[indicesOffset++] = vertexId + 2;
        iBuf[indicesOffset++] = vertexId + 1;
        iBuf[indicesOffset++] = vertexId + 3;
    },

    updateVertexData(comp: Label) {
        const renderData = comp.renderData;
        if (!renderData) {
            return;
        }

        const uiTrans = comp.node._uiProps.uiTransformComp!;
        const width = uiTrans.width;
        const height = uiTrans.height;
        const appX = uiTrans.anchorX * width;
        const appY = uiTrans.anchorY * height;

        const data = renderData.data;
        data[0].x = -appX;
        data[0].y = -appY;
        data[3].x = width - appX;
        data[3].y = height - appY;
    },

    updateUvs(comp: Label) {
        const renderData = comp.renderData;
        if (!renderData) {
            return;
        }
        const vData = renderData.vData!;
        if (!vData || !renderData.uvDirty) {
            return;
        }

        const uv = comp.ttfSpriteFrame!.uv;
        vData[3] = uv[0];
        vData[4] = uv[1];
        vData[12] = uv[2];
        vData[13] = uv[3];
        vData[21] = uv[4];
        vData[22] = uv[5];
        vData[30] = uv[6];
        vData[31] = uv[7];

        renderData.uvDirty = false;
    },
};

js.addon(verticalttf, ttfUtils);



/*
欢迎关注微信公众号 `白玉无冰`

导航：https://mp.weixin.qq.com/s/Ht0kIbaeBEds_wUeUlu8JQ

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

author: http://lamyoung.com/
B站视频: https://space.bilibili.com/1756070/video
github: https://github.com/baiyuwubing
gitee 同步地址： https://gitee.com/lamyoung
qq 交流群: 859642112

Cocos 论坛 ： https://forum.cocos.org/u/lamyoung/activity/topics

*/