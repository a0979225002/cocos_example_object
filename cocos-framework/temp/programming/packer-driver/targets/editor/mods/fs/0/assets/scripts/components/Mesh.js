System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, find, Material, resources, UITransform, Mesh, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPolygonSprite(extras) {
    _reporterNs.report("PolygonSprite", "./PolygonSprite", _context.meta, extras);
  }

  _export("Mesh", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      find = _cc.find;
      Material = _cc.Material;
      resources = _cc.resources;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eb8e7mW2SdIC5ffna/p40bS", "Mesh", undefined);

      _export("Mesh", Mesh = class Mesh extends es.RenderableComponent {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_vertexColorEnabled", true);

          _defineProperty(this, "_texture", null);

          _defineProperty(this, "_primitiveCount", 0);

          _defineProperty(this, "_width", 0);

          _defineProperty(this, "_height", 0);

          _defineProperty(this, "_triangles", []);

          _defineProperty(this, "_verts", []);

          _defineProperty(this, "_nu", []);

          _defineProperty(this, "_nv", []);

          _defineProperty(this, "_x", []);

          _defineProperty(this, "_y", []);

          _defineProperty(this, "_material", null);
        }

        getbounds() {
          if (this._areBoundsDirty) {
            this._bounds.calculateBounds(this.entity.transform.position, es.Vector2.zero, es.Vector2.zero, this.entity.transform.scale, this.entity.transform.rotation, this._width, this._height);

            this._areBoundsDirty = false;
          }

          return this._bounds;
        }

        recalculateBounds(recalculateUVs) {
          const max = new es.Vector2(Number.MIN_VALUE, Number.MIN_VALUE);

          for (let i = 0; i < this._verts.length; i++) {
            max.x = Math.max(max.x, this._verts[i].position.x);
            max.y = Math.max(max.y, this._verts[i].position.y);
          }

          this._width = max.x;
          this._height = max.y;
          this._areBoundsDirty = true;

          if (recalculateUVs) {
            var _this$_texture;

            const uiTransform = (_this$_texture = this._texture) === null || _this$_texture === void 0 ? void 0 : _this$_texture.getComponent(UITransform);
            if (uiTransform) for (let i = 0; i < this._verts.length; i++) {
              this._x[i] = this._verts[i].position.x;
              this._y[i] = this._verts[i].position.y;
              this._nu[i] = this._verts[i].position.x / uiTransform.width;
              this._nv[i] = this._verts[i].position.y / uiTransform.height;
            }
          }

          return this;
        }

        setTexture(texture) {
          this._texture = texture;
          this.recalculateBounds(true);
          return this;
        }

        setVertexColorEnabled(shouldEnableVertexColors) {
          if (this._material != null) {
            this._material.recompileShaders({
              "USE_VERTEX_COLOR": this._vertexColorEnabled
            });
          } else {
            this._vertexColorEnabled = shouldEnableVertexColors;
          }
        }

        setVertPositions(positions) {
          const createVerts = this._verts == null || this._verts.length != positions.length;

          if (createVerts) {
            for (let i = 0; i < positions.length; i++) {
              this._verts[i] = {
                position: positions[i],
                color: this.color
              };
            }
          }

          this.recalculateBounds(true);
          return this;
        }

        setTriangles(triangles) {
          es.Insist.isTrue(triangles.length % 3 == 0, "triangles must be a multiple of 3");
          this._primitiveCount = triangles.length / 3;
          this._triangles = triangles;
          return this;
        }

        setColor(color) {
          this.color = color;
          this.setColorForAllVerts(color);
          return this;
        }

        setColorForAllVerts(color) {
          for (let i = 0; i < this._verts.length; i++) this._verts[i].color = color;

          return this;
        }

        onAddedToEntity() {
          resources.load("materials/Basic", Material, (err, data) => {
            if (this._texture != null) {
              var _find;

              // this._texture.material = data;
              // this._material = this._texture?.node.getComponent(MeshRenderer)?.getMaterialInstance(0)!;
              (_find = find('Canvas')) === null || _find === void 0 ? void 0 : _find.addChild(this._texture.node); // this._material?.recompileShaders({ "USE_VERTEX_COLOR": this._vertexColorEnabled });
            }
          });
        }

        onRemovedFromEntity() {
          var _this$_texture2;

          (_this$_texture2 = this._texture) === null || _this$_texture2 === void 0 ? void 0 : _this$_texture2.node.removeFromParent();
          this._texture = null;
        }

        render(batcher, camera) {
          if (this._texture && this._texture.node.parent) {
            this._texture.vertices = {
              x: this._x,
              y: this._y,
              triangles: this._triangles,
              nu: this._nu,
              nv: this._nv,
              u: [],
              v: []
            };
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Mesh.js.map