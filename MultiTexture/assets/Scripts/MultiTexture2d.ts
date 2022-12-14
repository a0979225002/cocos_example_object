import {_decorator, Sprite, gfx, IAssembler, Color, __private, UI} from 'cc';

const {ccclass, property, executeInEditMode} = _decorator;

const Attribute = gfx.Attribute;

const attributes: gfx.Attribute[] = [
    new Attribute('a_position', gfx.Format.RGB32F),
    new Attribute('a_texCoord', gfx.Format.RG32F),
    new Attribute('a_color', gfx.Format.RGBA32F),
    new Attribute('a_texture_idx', gfx.Format.R32F),
];

interface IRenderData {
    x: number;
    y: number;
    z: number;
    u: number;
    v: number;
    color: Color;
}

const simple: IAssembler = {
    createData(sprite: Sprite) {
        const renderData = sprite.requestRenderData();
        renderData.dataLength = 4;
        renderData.vertexCount = 4;
        renderData.indicesCount = 6;

        renderData.vData = new Float32Array(4 * 10);

        return renderData;
    },

    updateRenderData(sprite: MultiTexture2d) {
        const frame = sprite.spriteFrame;

        const renderData = sprite.renderData;
        if (renderData && frame) {
            if (renderData.vertDirty) {
                this.updateVertexData(sprite);
            }
            if (renderData.uvDirty) {
                this.updateUvs(sprite);
            }
            if (sprite.textureIdxDirty) {
                this.updateTextureIdx(sprite);
            }
        }
    },

    updateWorldVerts(sprite: Sprite, vData: Float32Array) {
        const renderData = sprite.renderData;

        const dataList: IRenderData[] = renderData!.data;
        const node = sprite.node;

        const data0 = dataList[0];
        const data3 = dataList[3];
        const matrix = node.worldMatrix;
        const a = matrix.m00;
        const b = matrix.m01;
        const c = matrix.m04;
        const d = matrix.m05;

        const justTranslate = a === 1 && b === 0 && c === 0 && d === 1;

        const tx = matrix.m12;
        const ty = matrix.m13;
        const vl = data0.x;
        const vr = data3.x;
        const vb = data0.y;
        const vt = data3.y;

        if (justTranslate) {
            const vltx = vl + tx;
            const vrtx = vr + tx;
            const vbty = vb + ty;
            const vtty = vt + ty;

            // left bottom
            vData[0] = vltx;
            vData[1] = vbty;
            // right bottom
            vData[10] = vrtx;
            vData[11] = vbty;
            // left top
            vData[20] = vltx;
            vData[21] = vtty;
            // right top
            vData[30] = vrtx;
            vData[31] = vtty;
        } else {
            const al = a * vl;
            const ar = a * vr;
            const bl = b * vl;
            const br = b * vr;
            const cb = c * vb;
            const ct = c * vt;
            const db = d * vb;
            const dt = d * vt;

            const cbtx = cb + tx;
            const cttx = ct + tx;
            const dbty = db + ty;
            const dtty = dt + ty;

            // left bottom
            vData[0] = al + cbtx;
            vData[1] = bl + dbty;
            // right bottom
            vData[10] = ar + cbtx;
            vData[11] = br + dbty;
            // left top
            vData[20] = al + cttx;
            vData[21] = bl + dtty;
            // right top
            vData[30] = ar + cttx;
            vData[31] = br + dtty;
        }
        node._uiProps.uiTransformDirty = false;
    },

    fillBuffers(sprite: Sprite, renderer: UI) {
        if (sprite === null) {
            return;
        }

        const vData = sprite.renderData!.vData!;
        if (sprite.node._uiProps.uiTransformDirty) {
            this.updateWorldVerts(sprite, vData);
        }

        // const buffer: MeshBuffer = renderer.createBuffer(
        //     sprite.renderData!.vertexCount,
        //     sprite.renderData!.indicesCount,
        // );
        // const commitBuffer: IUIRenderData = renderer.createUIRenderData();

        let buffer = renderer.acquireBufferBatch(attributes)!;

        let vertexOffset = buffer.byteOffset >> 2;
        let indicesOffset = buffer.indicesOffset;
        let vertexId = buffer.vertexOffset;

        const bufferUnchanged = buffer.request();
        if (!bufferUnchanged) {
            buffer = renderer.currBufferBatch!;
            vertexOffset = 0;
            indicesOffset = 0;
            vertexId = 0;
        }

        // buffer data may be reallocated, need get reference after request.
        const vBuf = buffer.vData!;
        const iBuf = buffer.iData!;

        vBuf.set(vData, vertexOffset);

        const index0 = vertexId;
        const index1 = vertexId + 1;
        const index2 = vertexId + 2;
        const index3 = vertexId + 3;

        // fill index data
        iBuf[indicesOffset++] = index0;
        iBuf[indicesOffset++] = index1;
        iBuf[indicesOffset++] = index2;
        iBuf[indicesOffset++] = index2;
        iBuf[indicesOffset++] = index1;
        iBuf[indicesOffset++] = index3;
    },

    updateVertexData(sprite: Sprite) {
        const renderData: __private.cocos_2d_renderer_render_data_RenderData | null = sprite.renderData;
        if (!renderData) {
            return;
        }

        const uiTrans = sprite.node._uiProps.uiTransformComp!;
        const dataList: IRenderData[] = renderData.data;
        const cw = uiTrans.width;
        const ch = uiTrans.height;
        const appX = uiTrans.anchorX * cw;
        const appY = uiTrans.anchorY * ch;
        let l = 0;
        let b = 0;
        let r = 0;
        let t = 0;
        if (sprite.trim) {
            l = -appX;
            b = -appY;
            r = cw - appX;
            t = ch - appY;
        } else {
            const frame = sprite.spriteFrame!;
            const originSize = frame.getOriginalSize();
            const rect = frame.getRect();
            const ow = originSize.width;
            const oh = originSize.height;
            const rw = rect.width;
            const rh = rect.height;
            const offset = frame.getOffset();
            const scaleX = cw / ow;
            const scaleY = ch / oh;
            const trimLeft = offset.x + (ow - rw) / 2;
            const trimRight = offset.x - (ow - rw) / 2;
            const trimBottom = offset.y + (oh - rh) / 2;
            const trimTop = offset.y - (oh - rh) / 2;
            l = trimLeft * scaleX - appX;
            b = trimBottom * scaleY - appY;
            r = cw + trimRight * scaleX - appX;
            t = ch + trimTop * scaleY - appY;
        }

        dataList[0].x = l;
        dataList[0].y = b;

        dataList[3].x = r;
        dataList[3].y = t;

        renderData.vertDirty = false;
        this.updateWorldVerts(sprite, renderData.vData);
    },

    updateUvs(sprite: Sprite) {
        const renderData = sprite.renderData!;
        const vData = renderData.vData!;
        const uv = sprite.spriteFrame!.uv;
        vData[3] = uv[0];
        vData[4] = uv[1];
        vData[13] = uv[2];
        vData[14] = uv[3];
        vData[23] = uv[4];
        vData[24] = uv[5];
        vData[33] = uv[6];
        vData[34] = uv[7];

        renderData.uvDirty = false;
    },

    updateColor(sprite: Sprite) {
        const vData = sprite.renderData!.vData;

        let colorOffset = 5;
        const color = sprite.color;
        const colorR = color.r / 255;
        const colorG = color.g / 255;
        const colorB = color.b / 255;
        const colorA = sprite.node._uiProps.opacity;
        for (let i = 0; i < 4; i++) {
            vData![colorOffset] = colorR;
            vData![colorOffset + 1] = colorG;
            vData![colorOffset + 2] = colorB;
            vData![colorOffset + 3] = colorA;

            colorOffset += 10;
        }
    },

    updateTextureIdx(sprite: MultiTexture2d) {
        const renderData = sprite.renderData!;
        const vData = renderData.vData!;

        vData[9] = sprite.textureIdx;
        vData[19] = sprite.textureIdx;
        vData[29] = sprite.textureIdx;
        vData[39] = sprite.textureIdx;

        sprite.textureIdxDirty = false;
    }
};
//
//
@ccclass('MultiTexture2d')
@executeInEditMode
export class MultiTexture2d extends Sprite {
    @property
    textureIdx: number = 0;
    textureIdxDirty: boolean = true;

    handle: number = -1;

    start() {
        // @ts-ignore
        // ?????????????????????????????????????????????????????????????????????texture???????????????????????????dc
        this.spriteFrame._texture._textureHash = 9999;
    }

    protected _flushAssembler() {
        const assembler = simple;
        cc.log(assembler);
        if (this._assembler !== assembler) {
            this.destroyRenderData();
            this._assembler = assembler;
        }

        if (!this._renderData) {
            if (this._assembler && this._assembler.createData) {
                this._renderData = this._assembler.createData(this);
                this._renderData!.material = this.getRenderMaterial(0);
                this.markForUpdateRenderData();
                this._colorDirty = true;
                this._updateColor();
            }
        }
    }
}
