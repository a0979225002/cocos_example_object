System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, find, Material, resources, UITransform, _crd, Mesh;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPolygonSprite(extras) {
    _reporterNs.report("PolygonSprite", "./PolygonSprite", _context.meta, extras);
  }

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

      _export("Mesh", Mesh = /*#__PURE__*/function (_es$RenderableCompone) {
        _inheritsLoose(Mesh, _es$RenderableCompone);

        function Mesh() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _es$RenderableCompone.call.apply(_es$RenderableCompone, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_vertexColorEnabled", true);

          _defineProperty(_assertThisInitialized(_this), "_texture", null);

          _defineProperty(_assertThisInitialized(_this), "_primitiveCount", 0);

          _defineProperty(_assertThisInitialized(_this), "_width", 0);

          _defineProperty(_assertThisInitialized(_this), "_height", 0);

          _defineProperty(_assertThisInitialized(_this), "_triangles", []);

          _defineProperty(_assertThisInitialized(_this), "_verts", []);

          _defineProperty(_assertThisInitialized(_this), "_nu", []);

          _defineProperty(_assertThisInitialized(_this), "_nv", []);

          _defineProperty(_assertThisInitialized(_this), "_x", []);

          _defineProperty(_assertThisInitialized(_this), "_y", []);

          _defineProperty(_assertThisInitialized(_this), "_material", null);

          return _this;
        }

        var _proto = Mesh.prototype;

        _proto.getbounds = function getbounds() {
          if (this._areBoundsDirty) {
            this._bounds.calculateBounds(this.entity.transform.position, es.Vector2.zero, es.Vector2.zero, this.entity.transform.scale, this.entity.transform.rotation, this._width, this._height);

            this._areBoundsDirty = false;
          }

          return this._bounds;
        };

        _proto.recalculateBounds = function recalculateBounds(recalculateUVs) {
          var max = new es.Vector2(Number.MIN_VALUE, Number.MIN_VALUE);

          for (var i = 0; i < this._verts.length; i++) {
            max.x = Math.max(max.x, this._verts[i].position.x);
            max.y = Math.max(max.y, this._verts[i].position.y);
          }

          this._width = max.x;
          this._height = max.y;
          this._areBoundsDirty = true;

          if (recalculateUVs) {
            var _this$_texture;

            var uiTransform = (_this$_texture = this._texture) === null || _this$_texture === void 0 ? void 0 : _this$_texture.getComponent(UITransform);
            if (uiTransform) for (var _i = 0; _i < this._verts.length; _i++) {
              this._x[_i] = this._verts[_i].position.x;
              this._y[_i] = this._verts[_i].position.y;
              this._nu[_i] = this._verts[_i].position.x / uiTransform.width;
              this._nv[_i] = this._verts[_i].position.y / uiTransform.height;
            }
          }

          return this;
        };

        _proto.setTexture = function setTexture(texture) {
          this._texture = texture;
          this.recalculateBounds(true);
          return this;
        };

        _proto.setVertexColorEnabled = function setVertexColorEnabled(shouldEnableVertexColors) {
          if (this._material != null) {
            this._material.recompileShaders({
              "USE_VERTEX_COLOR": this._vertexColorEnabled
            });
          } else {
            this._vertexColorEnabled = shouldEnableVertexColors;
          }
        };

        _proto.setVertPositions = function setVertPositions(positions) {
          var createVerts = this._verts == null || this._verts.length != positions.length;

          if (createVerts) {
            for (var i = 0; i < positions.length; i++) {
              this._verts[i] = {
                position: positions[i],
                color: this.color
              };
            }
          }

          this.recalculateBounds(true);
          return this;
        };

        _proto.setTriangles = function setTriangles(triangles) {
          es.Insist.isTrue(triangles.length % 3 == 0, "triangles must be a multiple of 3");
          this._primitiveCount = triangles.length / 3;
          this._triangles = triangles;
          return this;
        };

        _proto.setColor = function setColor(color) {
          this.color = color;
          this.setColorForAllVerts(color);
          return this;
        };

        _proto.setColorForAllVerts = function setColorForAllVerts(color) {
          for (var i = 0; i < this._verts.length; i++) {
            this._verts[i].color = color;
          }

          return this;
        };

        _proto.onAddedToEntity = function onAddedToEntity() {
          var _this2 = this;

          resources.load("materials/Basic", Material, function (err, data) {
            if (_this2._texture != null) {
              var _find;

              // this._texture.material = data;
              // this._material = this._texture?.node.getComponent(MeshRenderer)?.getMaterialInstance(0)!;
              (_find = find('Canvas')) === null || _find === void 0 ? void 0 : _find.addChild(_this2._texture.node); // this._material?.recompileShaders({ "USE_VERTEX_COLOR": this._vertexColorEnabled });
            }
          });
        };

        _proto.onRemovedFromEntity = function onRemovedFromEntity() {
          var _this$_texture2;

          (_this$_texture2 = this._texture) === null || _this$_texture2 === void 0 ? void 0 : _this$_texture2.node.removeFromParent();
          this._texture = null;
        };

        _proto.render = function render(batcher, camera) {
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
        };

        return Mesh;
      }(es.RenderableComponent));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Mesh.js.map