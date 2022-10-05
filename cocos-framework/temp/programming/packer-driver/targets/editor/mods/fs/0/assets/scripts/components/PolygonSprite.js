System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Color, Sprite, UITransform, Vec3, _decorator, _dec, _class, _temp, _crd, ccclass, property, vec3_temp, polygonAssembler, PolygonSprite;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Color = _cc.Color;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e4f6mWLJ5O/oK8xHFNYnf8", "PolygonSprite", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      vec3_temp = new Vec3();
      polygonAssembler = {
        createData(sprite) {
          const renderData = sprite.requestRenderData();
          return renderData;
        },

        updateRenderData(sprite) {
          const renderData = sprite.renderData;

          if (renderData) {
            const vertices = sprite.vertices;

            if (vertices) {
              if (renderData.vertexCount !== vertices.x.length) {
                renderData.vertexCount = vertices.x.length; // 1 for world vertices, 2 for local vertices

                renderData.dataLength = renderData.vertexCount * 2;
                renderData.uvDirty = renderData.vertDirty = true;
              }

              renderData.indicesCount = vertices.triangles.length;

              if (renderData.uvDirty) {
                this.updateUvs(sprite);
              }

              if (renderData.vertDirty) {
                this.updateVertices(sprite);
                this.updateWorldVertices(sprite);
              }
            }
          }
        },

        fillBuffers(sprite, renderer) {
          if (sprite === null) {
            return;
          }

          const vertices = sprite.vertices;

          if (!vertices) {
            return;
          } // update world vertices


          this.updateWorldVertices(sprite); // buffer

          const buffer = renderer.acquireBufferBatch();
          let indicesOffset = buffer.indicesOffset;
          const vertexId = buffer.vertexOffset;
          const node = sprite.node;
          this.fillVerticesWithoutCalc3D(node, renderer, sprite.renderData, sprite.color); // buffer data may be realloc, need get reference after request.

          const iBuf = buffer.iData;
          const triangles = vertices.triangles;

          for (let i = 0, l = triangles.length; i < l; i++) {
            iBuf[indicesOffset++] = vertexId + triangles[i];
          }
        },

        fillVerticesWithoutCalc3D(node, renderer, renderData, color) {
          const dataList = renderData.data;
          let buffer = renderer.acquireBufferBatch();
          let vertexOffset = buffer.byteOffset >> 2; // buffer

          let vertexCount = renderData.vertexCount;
          let indicesOffset = buffer.indicesOffset;
          let vertexId = buffer.vertexOffset;
          const isRecreate = buffer.request(vertexCount, renderData.indicesCount);

          if (!isRecreate) {
            buffer = renderer.currBufferBatch;
            vertexCount = 0;
            indicesOffset = 0;
            vertexId = 0;
          } // buffer data may be realloc, need get reference after request.


          const vBuf = buffer.vData;

          for (let i = 0; i < vertexCount; i++) {
            const vert = dataList[i];
            vBuf[vertexOffset++] = vert.x;
            vBuf[vertexOffset++] = vert.y;
            vBuf[vertexOffset++] = vert.z;
            vBuf[vertexOffset++] = vert.u;
            vBuf[vertexOffset++] = vert.v;
            Color.toArray(vBuf, color, vertexOffset);
            vertexOffset += 4;
          } // buffer data may be realloc, need get reference after request.


          const iBuf = buffer.iData;
          iBuf[indicesOffset++] = vertexId;
          iBuf[indicesOffset++] = vertexId + 1;
          iBuf[indicesOffset++] = vertexId + 2;
          iBuf[indicesOffset++] = vertexId + 1;
          iBuf[indicesOffset++] = vertexId + 3;
          iBuf[indicesOffset++] = vertexId + 2;
        },

        updateVertices(sprite) {
          const node = sprite.node;
          const uiTransform = node.getComponent(UITransform);
          const contentWidth = Math.abs(uiTransform.width);
          const contentHeight = Math.abs(uiTransform.height);
          const appX = uiTransform.anchorX * contentWidth;
          const appY = uiTransform.anchorY * contentHeight;
          const frame = sprite.spriteFrame;
          const vertices = sprite.vertices;
          const x = vertices.x;
          const y = vertices.y;
          const originalWidth = frame.originalSize.width;
          const originalHeight = frame.originalSize.height;
          const rectWidth = frame.rect.width;
          const rectHeight = frame.rect.height;
          const offsetX = frame.offset.x;
          const offsetY = frame.offset.y;
          const trimX = offsetX + (originalWidth - rectWidth) / 2;
          const trimY = offsetY + (originalHeight - rectHeight) / 2;
          const scaleX = contentWidth / (sprite.trim ? rectWidth : originalWidth);
          const scaleY = contentHeight / (sprite.trim ? rectHeight : originalHeight);
          const renderData = sprite.renderData;
          const data = renderData.data;

          if (!sprite.trim) {
            for (let i = 0, l = x.length; i < l; i++) {
              const vertex = data[i + l];
              vertex.x = x[i] * scaleX - appX;
              vertex.y = (originalHeight - y[i]) * scaleY - appY;
            }
          } else {
            for (let i = 0, l = x.length; i < l; i++) {
              const vertex = data[i + l];
              vertex.x = (x[i] - trimX) * scaleX - appX;
              vertex.y = (originalHeight - y[i] - trimY) * scaleY - appY;
            }
          }

          renderData.vertDirty = false;
        },

        updateWorldVertices(sprite) {
          const node = sprite.node;
          const renderData = sprite.renderData;
          const data = renderData.data;
          node.updateWorldTransform();
          const matrix = node.worldMatrix;

          for (let i = 0, l = renderData.vertexCount; i < l; i++) {
            const local = data[i + l];
            const world = data[i];
            Vec3.set(vec3_temp, local.x, local.y, 0);
            Vec3.transformMat4(world, vec3_temp, matrix);
          }
        },

        updateUvs(sprite) {
          const vertices = sprite.vertices;
          const u = vertices.nu;
          const v = vertices.nv;
          const renderData = sprite.renderData;
          const data = renderData.data;

          for (let i = 0, l = u.length; i < l; i++) {
            const vertex = data[i];
            vertex.u = u[i];
            vertex.v = v[i];
          }

          renderData.uvDirty = false;
        }

      };

      _export("PolygonSprite", PolygonSprite = (_dec = ccclass('PolygonSprite'), _dec(_class = (_temp = class PolygonSprite extends Sprite {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_vertices", null);
        }

        get vertices() {
          return this._vertices;
        }

        set vertices(value) {
          this._vertices = value;
          this.markForUpdateRenderData();
        }

        _flushAssembler() {
          let assembler = polygonAssembler;

          if (this._assembler !== assembler) {
            this.destroyRenderData();
            this._assembler = assembler;
          }

          if (!this._renderData) {
            if (this._assembler && this._assembler.createData) {
              this._renderData = this._assembler.createData(this);
              this._renderData.material = this.getRenderMaterial(0);
              this.markForUpdateRenderData();

              this._updateColor();
            }
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PolygonSprite.js.map