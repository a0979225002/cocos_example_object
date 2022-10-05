System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Sprite, gfx, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, executeInEditMode, Attribute, attributes, simple, MultiTexture2d;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Sprite = _cc.Sprite;
      gfx = _cc.gfx;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7ee44RqygNHlIzlNYmX443K", "MultiTexture2d", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      executeInEditMode = _decorator.executeInEditMode;
      Attribute = gfx.Attribute;
      attributes = [new Attribute('a_position', gfx.Format.RGB32F), new Attribute('a_texCoord', gfx.Format.RG32F), new Attribute('a_color', gfx.Format.RGBA32F), new Attribute('a_texture_idx', gfx.Format.R32F)];
      simple = {
        createData: function createData(sprite) {
          var renderData = sprite.requestRenderData();
          renderData.dataLength = 4;
          renderData.vertexCount = 4;
          renderData.indicesCount = 6;
          renderData.vData = new Float32Array(4 * 10);
          return renderData;
        },
        updateRenderData: function updateRenderData(sprite) {
          var frame = sprite.spriteFrame;
          var renderData = sprite.renderData;

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
        updateWorldVerts: function updateWorldVerts(sprite, vData) {
          var renderData = sprite.renderData;
          var dataList = renderData.data;
          var node = sprite.node;
          var data0 = dataList[0];
          var data3 = dataList[3];
          var matrix = node.worldMatrix;
          var a = matrix.m00;
          var b = matrix.m01;
          var c = matrix.m04;
          var d = matrix.m05;
          var justTranslate = a === 1 && b === 0 && c === 0 && d === 1;
          var tx = matrix.m12;
          var ty = matrix.m13;
          var vl = data0.x;
          var vr = data3.x;
          var vb = data0.y;
          var vt = data3.y;

          if (justTranslate) {
            var vltx = vl + tx;
            var vrtx = vr + tx;
            var vbty = vb + ty;
            var vtty = vt + ty; // left bottom

            vData[0] = vltx;
            vData[1] = vbty; // right bottom

            vData[10] = vrtx;
            vData[11] = vbty; // left top

            vData[20] = vltx;
            vData[21] = vtty; // right top

            vData[30] = vrtx;
            vData[31] = vtty;
          } else {
            var al = a * vl;
            var ar = a * vr;
            var bl = b * vl;
            var br = b * vr;
            var cb = c * vb;
            var ct = c * vt;
            var db = d * vb;
            var dt = d * vt;
            var cbtx = cb + tx;
            var cttx = ct + tx;
            var dbty = db + ty;
            var dtty = dt + ty; // left bottom

            vData[0] = al + cbtx;
            vData[1] = bl + dbty; // right bottom

            vData[10] = ar + cbtx;
            vData[11] = br + dbty; // left top

            vData[20] = al + cttx;
            vData[21] = bl + dtty; // right top

            vData[30] = ar + cttx;
            vData[31] = br + dtty;
          }

          node._uiProps.uiTransformDirty = false;
        },
        fillBuffers: function fillBuffers(sprite, renderer) {
          if (sprite === null) {
            return;
          }

          var vData = sprite.renderData.vData;

          if (sprite.node._uiProps.uiTransformDirty) {
            this.updateWorldVerts(sprite, vData);
          } // const buffer: MeshBuffer = renderer.createBuffer(
          //     sprite.renderData!.vertexCount,
          //     sprite.renderData!.indicesCount,
          // );
          // const commitBuffer: IUIRenderData = renderer.createUIRenderData();


          var buffer = renderer.acquireBufferBatch(attributes);
          var vertexOffset = buffer.byteOffset >> 2;
          var indicesOffset = buffer.indicesOffset;
          var vertexId = buffer.vertexOffset;
          var bufferUnchanged = buffer.request();

          if (!bufferUnchanged) {
            buffer = renderer.currBufferBatch;
            vertexOffset = 0;
            indicesOffset = 0;
            vertexId = 0;
          } // buffer data may be reallocated, need get reference after request.


          var vBuf = buffer.vData;
          var iBuf = buffer.iData;
          vBuf.set(vData, vertexOffset);
          var index0 = vertexId;
          var index1 = vertexId + 1;
          var index2 = vertexId + 2;
          var index3 = vertexId + 3; // fill index data

          iBuf[indicesOffset++] = index0;
          iBuf[indicesOffset++] = index1;
          iBuf[indicesOffset++] = index2;
          iBuf[indicesOffset++] = index2;
          iBuf[indicesOffset++] = index1;
          iBuf[indicesOffset++] = index3;
        },
        updateVertexData: function updateVertexData(sprite) {
          var renderData = sprite.renderData;

          if (!renderData) {
            return;
          }

          var uiTrans = sprite.node._uiProps.uiTransformComp;
          var dataList = renderData.data;
          var cw = uiTrans.width;
          var ch = uiTrans.height;
          var appX = uiTrans.anchorX * cw;
          var appY = uiTrans.anchorY * ch;
          var l = 0;
          var b = 0;
          var r = 0;
          var t = 0;

          if (sprite.trim) {
            l = -appX;
            b = -appY;
            r = cw - appX;
            t = ch - appY;
          } else {
            var frame = sprite.spriteFrame;
            var originSize = frame.getOriginalSize();
            var rect = frame.getRect();
            var ow = originSize.width;
            var oh = originSize.height;
            var rw = rect.width;
            var rh = rect.height;
            var offset = frame.getOffset();
            var scaleX = cw / ow;
            var scaleY = ch / oh;
            var trimLeft = offset.x + (ow - rw) / 2;
            var trimRight = offset.x - (ow - rw) / 2;
            var trimBottom = offset.y + (oh - rh) / 2;
            var trimTop = offset.y - (oh - rh) / 2;
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
        updateUvs: function updateUvs(sprite) {
          var renderData = sprite.renderData;
          var vData = renderData.vData;
          var uv = sprite.spriteFrame.uv;
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
        updateColor: function updateColor(sprite) {
          var vData = sprite.renderData.vData;
          var colorOffset = 5;
          var color = sprite.color;
          var colorR = color.r / 255;
          var colorG = color.g / 255;
          var colorB = color.b / 255;
          var colorA = sprite.node._uiProps.opacity;

          for (var i = 0; i < 4; i++) {
            vData[colorOffset] = colorR;
            vData[colorOffset + 1] = colorG;
            vData[colorOffset + 2] = colorB;
            vData[colorOffset + 3] = colorA;
            colorOffset += 10;
          }
        },
        updateTextureIdx: function updateTextureIdx(sprite) {
          var renderData = sprite.renderData;
          var vData = renderData.vData;
          vData[9] = sprite.textureIdx;
          vData[19] = sprite.textureIdx;
          vData[29] = sprite.textureIdx;
          vData[39] = sprite.textureIdx;
          sprite.textureIdxDirty = false;
        }
      }; //
      //

      _export("MultiTexture2d", MultiTexture2d = (_dec = ccclass('MultiTexture2d'), _dec(_class = executeInEditMode(_class = (_class2 = (_temp = /*#__PURE__*/function (_Sprite) {
        _inheritsLoose(MultiTexture2d, _Sprite);

        function MultiTexture2d() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Sprite.call.apply(_Sprite, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "textureIdx", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "textureIdxDirty", true);

          _defineProperty(_assertThisInitialized(_this), "handle", -1);

          return _this;
        }

        var _proto = MultiTexture2d.prototype;

        _proto.start = function start() {
          // @ts-ignore
          // 因为已经批量上传了纹理，所以就不需要引擎计算的texture哈希值，不然会打断dc
          this.spriteFrame._texture._textureHash = 9999;
        };

        _proto._flushAssembler = function _flushAssembler() {
          var assembler = simple;
          cc.log(assembler);

          if (this._assembler !== assembler) {
            this.destroyRenderData();
            this._assembler = assembler;
          }

          if (!this._renderData) {
            if (this._assembler && this._assembler.createData) {
              this._renderData = this._assembler.createData(this);
              this._renderData.material = this.getRenderMaterial(0);
              this.markForUpdateRenderData();
              this._colorDirty = true;

              this._updateColor();
            }
          }
        };

        return MultiTexture2d;
      }(Sprite), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "textureIdx", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MultiTexture2d.js.map