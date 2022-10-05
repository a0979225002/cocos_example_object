System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Color, Sprite, UITransform, Vec3, _decorator, _dec, _class, _temp, _crd, ccclass, property, vec3_temp, polygonAssembler, PolygonSprite;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      vec3_temp = new Vec3();
      polygonAssembler = {
        createData: function createData(sprite) {
          var renderData = sprite.requestRenderData();
          return renderData;
        },
        updateRenderData: function updateRenderData(sprite) {
          var renderData = sprite.renderData;

          if (renderData) {
            var vertices = sprite.vertices;

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
        fillBuffers: function fillBuffers(sprite, renderer) {
          if (sprite === null) {
            return;
          }

          var vertices = sprite.vertices;

          if (!vertices) {
            return;
          } // update world vertices


          this.updateWorldVertices(sprite); // buffer

          var buffer = renderer.acquireBufferBatch();
          var indicesOffset = buffer.indicesOffset;
          var vertexId = buffer.vertexOffset;
          var node = sprite.node;
          this.fillVerticesWithoutCalc3D(node, renderer, sprite.renderData, sprite.color); // buffer data may be realloc, need get reference after request.

          var iBuf = buffer.iData;
          var triangles = vertices.triangles;

          for (var i = 0, l = triangles.length; i < l; i++) {
            iBuf[indicesOffset++] = vertexId + triangles[i];
          }
        },
        fillVerticesWithoutCalc3D: function fillVerticesWithoutCalc3D(node, renderer, renderData, color) {
          var dataList = renderData.data;
          var buffer = renderer.acquireBufferBatch();
          var vertexOffset = buffer.byteOffset >> 2; // buffer

          var vertexCount = renderData.vertexCount;
          var indicesOffset = buffer.indicesOffset;
          var vertexId = buffer.vertexOffset;
          var isRecreate = buffer.request(vertexCount, renderData.indicesCount);

          if (!isRecreate) {
            buffer = renderer.currBufferBatch;
            vertexCount = 0;
            indicesOffset = 0;
            vertexId = 0;
          } // buffer data may be realloc, need get reference after request.


          var vBuf = buffer.vData;

          for (var i = 0; i < vertexCount; i++) {
            var vert = dataList[i];
            vBuf[vertexOffset++] = vert.x;
            vBuf[vertexOffset++] = vert.y;
            vBuf[vertexOffset++] = vert.z;
            vBuf[vertexOffset++] = vert.u;
            vBuf[vertexOffset++] = vert.v;
            Color.toArray(vBuf, color, vertexOffset);
            vertexOffset += 4;
          } // buffer data may be realloc, need get reference after request.


          var iBuf = buffer.iData;
          iBuf[indicesOffset++] = vertexId;
          iBuf[indicesOffset++] = vertexId + 1;
          iBuf[indicesOffset++] = vertexId + 2;
          iBuf[indicesOffset++] = vertexId + 1;
          iBuf[indicesOffset++] = vertexId + 3;
          iBuf[indicesOffset++] = vertexId + 2;
        },
        updateVertices: function updateVertices(sprite) {
          var node = sprite.node;
          var uiTransform = node.getComponent(UITransform);
          var contentWidth = Math.abs(uiTransform.width);
          var contentHeight = Math.abs(uiTransform.height);
          var appX = uiTransform.anchorX * contentWidth;
          var appY = uiTransform.anchorY * contentHeight;
          var frame = sprite.spriteFrame;
          var vertices = sprite.vertices;
          var x = vertices.x;
          var y = vertices.y;
          var originalWidth = frame.originalSize.width;
          var originalHeight = frame.originalSize.height;
          var rectWidth = frame.rect.width;
          var rectHeight = frame.rect.height;
          var offsetX = frame.offset.x;
          var offsetY = frame.offset.y;
          var trimX = offsetX + (originalWidth - rectWidth) / 2;
          var trimY = offsetY + (originalHeight - rectHeight) / 2;
          var scaleX = contentWidth / (sprite.trim ? rectWidth : originalWidth);
          var scaleY = contentHeight / (sprite.trim ? rectHeight : originalHeight);
          var renderData = sprite.renderData;
          var data = renderData.data;

          if (!sprite.trim) {
            for (var i = 0, l = x.length; i < l; i++) {
              var vertex = data[i + l];
              vertex.x = x[i] * scaleX - appX;
              vertex.y = (originalHeight - y[i]) * scaleY - appY;
            }
          } else {
            for (var _i = 0, _l = x.length; _i < _l; _i++) {
              var _vertex = data[_i + _l];
              _vertex.x = (x[_i] - trimX) * scaleX - appX;
              _vertex.y = (originalHeight - y[_i] - trimY) * scaleY - appY;
            }
          }

          renderData.vertDirty = false;
        },
        updateWorldVertices: function updateWorldVertices(sprite) {
          var node = sprite.node;
          var renderData = sprite.renderData;
          var data = renderData.data;
          node.updateWorldTransform();
          var matrix = node.worldMatrix;

          for (var i = 0, l = renderData.vertexCount; i < l; i++) {
            var local = data[i + l];
            var world = data[i];
            Vec3.set(vec3_temp, local.x, local.y, 0);
            Vec3.transformMat4(world, vec3_temp, matrix);
          }
        },
        updateUvs: function updateUvs(sprite) {
          var vertices = sprite.vertices;
          var u = vertices.nu;
          var v = vertices.nv;
          var renderData = sprite.renderData;
          var data = renderData.data;

          for (var i = 0, l = u.length; i < l; i++) {
            var vertex = data[i];
            vertex.u = u[i];
            vertex.v = v[i];
          }

          renderData.uvDirty = false;
        }
      };

      _export("PolygonSprite", PolygonSprite = (_dec = ccclass('PolygonSprite'), _dec(_class = (_temp = /*#__PURE__*/function (_Sprite) {
        _inheritsLoose(PolygonSprite, _Sprite);

        function PolygonSprite() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Sprite.call.apply(_Sprite, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_vertices", null);

          return _this;
        }

        var _proto = PolygonSprite.prototype;

        _proto._flushAssembler = function _flushAssembler() {
          var assembler = polygonAssembler;

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
        };

        _createClass(PolygonSprite, [{
          key: "vertices",
          get: function get() {
            return this._vertices;
          },
          set: function set(value) {
            this._vertices = value;
            this.markForUpdateRenderData();
          }
        }]);

        return PolygonSprite;
      }(Sprite), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PolygonSprite.js.map