System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Camera, clamp, find, Node, Vec3, view, Input, _crd, CameraInset, component_camera;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfInput(extras) {
    _reporterNs.report("Input", "../Input/Input", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Camera = _cc.Camera;
      clamp = _cc.clamp;
      find = _cc.find;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      view = _cc.view;
    }, function (_unresolved_2) {
      Input = _unresolved_2.Input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dae37GqTOVDVL3cd7zfm8xF", "component_camera", undefined);

      CameraInset = function CameraInset() {
        _defineProperty(this, "left", 0);

        _defineProperty(this, "right", 0);

        _defineProperty(this, "top", 0);

        _defineProperty(this, "bottom", 0);
      };

      _export("component_camera", component_camera = /*#__PURE__*/function (_es$Component) {
        _inheritsLoose(component_camera, _es$Component);

        function component_camera() {
          var _find;

          var _this;

          _this = _es$Component.call(this) || this;

          _defineProperty(_assertThisInitialized(_this), "_transformMatrix", es.Matrix2D.identity);

          _defineProperty(_assertThisInitialized(_this), "_inverseTransformMatrix", es.Matrix2D.identity);

          _defineProperty(_assertThisInitialized(_this), "_bounds", new es.Rectangle());

          _defineProperty(_assertThisInitialized(_this), "_inset", new CameraInset());

          _defineProperty(_assertThisInitialized(_this), "_zoom", 0);

          _defineProperty(_assertThisInitialized(_this), "_minimumZoom", 0.3);

          _defineProperty(_assertThisInitialized(_this), "_maxmumZoom", 3);

          _defineProperty(_assertThisInitialized(_this), "_origin", es.Vector2.zero);

          _defineProperty(_assertThisInitialized(_this), "_ratio", es.Vector2.one);

          _defineProperty(_assertThisInitialized(_this), "_areMatrixesDirty", true);

          _defineProperty(_assertThisInitialized(_this), "_areBoundsDirty", true);

          _defineProperty(_assertThisInitialized(_this), "camera", void 0);

          _this.setZoom(0);

          var camera = (_find = find('Canvas/Camera')) === null || _find === void 0 ? void 0 : _find.getComponent(Camera);

          if (camera) {
            _this.camera = camera;
          } else {
            var _find2;

            var cameraNode = new Node('Camera');
            _this.camera = cameraNode.addComponent(Camera);
            (_find2 = find('Canvas')) === null || _find2 === void 0 ? void 0 : _find2.addChild(cameraNode);
          }

          var visibleSize = view.getVisibleSize();
          _this.origin = new es.Vector2(visibleSize.width / 2, visibleSize.height / 2);
          var canvasSize = view.getCanvasSize();
          _this.ratio = new es.Vector2(visibleSize.width / canvasSize.width, visibleSize.height / canvasSize.height);
          return _this;
        }

        var _proto = component_camera.prototype;

        _proto.updateMatrixes = function updateMatrixes() {
          if (!this._areBoundsDirty) return;
          var tempMat = new es.Matrix2D();
          es.Matrix2D.createTranslation(-this.entity.transform.position.x, -this.entity.transform.position.y, this._transformMatrix);

          if (this._zoom != 1) {
            es.Matrix2D.createScale(this._zoom, this._zoom, tempMat);
            this._transformMatrix = this._transformMatrix.multiply(tempMat);
          }

          if (this.entity.transform.rotation != 0) {
            es.Matrix2D.createRotation(this.entity.transform.rotation, tempMat);
            this._transformMatrix = this._transformMatrix.multiply(tempMat);
          }

          es.Matrix2D.createTranslation(Math.trunc(this._origin.x), Math.trunc(this._origin.y), tempMat);
          this._transformMatrix = this._transformMatrix.multiply(tempMat);
          this._inverseTransformMatrix = es.Matrix2D.invert(this._transformMatrix);
          this._areBoundsDirty = true;
          this._areMatrixesDirty = false;
        };

        _proto.setZoom = function setZoom(zoom) {
          var newZoom = clamp(zoom, -1, 1);
          if (newZoom == 0) this._zoom = 1;else if (newZoom < 0) this._zoom = es.MathHelper.map(newZoom, -1, 0, this._minimumZoom, 1);else this._zoom = es.MathHelper.map(newZoom, 0, 1, 1, this._maxmumZoom);
          this._areMatrixesDirty = true;
          return this;
        };

        _proto.setMinimumZoom = function setMinimumZoom(minZoom) {
          es.Insist.isTrue(minZoom > 0, "minimumZoom必须大于零");
          if (this._zoom < minZoom) this._zoom = this.minimumZoom;
          this._minimumZoom = minZoom;
          return this;
        };

        _proto.setMaximumZoom = function setMaximumZoom(maxZoom) {
          es.Insist.isTrue(maxZoom > 0, "MaximumZoom必须大于零");
          if (this._zoom > maxZoom) this._zoom = maxZoom;
          this._maxmumZoom = maxZoom;
          return this;
        };

        _proto.setRatio = function setRatio(value) {
          if (!this._ratio.equals(value)) {
            this._ratio = value;
            this._areBoundsDirty = true;
          }

          return this;
        };

        _proto.setInset = function setInset(left, right, top, bottom) {
          this._inset = new CameraInset();
          this._inset.left = left;
          this._inset.right = right;
          this._inset.top = top;
          this._inset.bottom = bottom;
          this._areBoundsDirty = true;
          return this;
        };

        _proto.zoomIn = function zoomIn(deltaZoom) {
          this.zoom += deltaZoom;
        };

        _proto.zoomOut = function zoomOut(deltaZoom) {
          this.zoom -= deltaZoom;
        };

        _proto.screenToWorldPoint = function screenToWorldPoint(screenPosition) {
          this.updateMatrixes();
          es.Vector2Ext.transformR(screenPosition.multiply(this.ratio), this._inverseTransformMatrix, screenPosition);
          return screenPosition;
        };

        _proto.worldToScreenPoint = function worldToScreenPoint(worldPosition) {
          this.updateMatrixes();
          es.Vector2Ext.transformR(worldPosition.multiply(this.ratio), this._transformMatrix, worldPosition);
          return worldPosition;
        };

        _proto.forceMatrixUpdate = function forceMatrixUpdate() {
          this._areMatrixesDirty = true;
        };

        _proto.onEntityTransformChanged = function onEntityTransformChanged(comp) {
          this._areMatrixesDirty = true;
        };

        _proto.touchToWorldPoint = function touchToWorldPoint() {
          return this.screenToWorldPoint((_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).scaledPosition((_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).touchPosition));
        };

        _proto.mouseToWorldPoint = function mouseToWorldPoint() {
          return this.screenToWorldPoint((_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).scaledPosition((_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).mousePosition));
        };

        _proto.update = function update() {
          this.camera.node.setPosition(new Vec3(this.position.x, this.position.y, 1000)); // let camera = this.camera.getComponent(Camera);
          // if (camera) camera.orthoHeight = 320 + 320 * this.zoom;
        };

        _createClass(component_camera, [{
          key: "position",
          get: function get() {
            return this.entity.transform.position;
          }
        }, {
          key: "rotation",
          get: function get() {
            return this.entity.transform.rotation;
          }
        }, {
          key: "bounds",
          get: function get() {
            if (this._areMatrixesDirty) this.updateMatrixes();

            if (this._areBoundsDirty) {
              var viewport = view.getViewportRect();
              var topLeft = this.screenToWorldPoint(new es.Vector2(this._inset.left, this._inset.top));
              var bottomRight = this.screenToWorldPoint(new es.Vector2(viewport.width - this._inset.right, viewport.height - this._inset.bottom));

              if (this.entity.transform.rotation != 0) {
                var topRight = this.screenToWorldPoint(new es.Vector2(viewport.width - this._inset.right, this._inset.top));
                var bottomLeft = this.screenToWorldPoint(new es.Vector2(this._inset.left, viewport.height - this._inset.bottom));
                var minX = Math.min(topLeft.x, bottomRight.x, topRight.x, bottomLeft.x);
                var maxX = Math.max(topLeft.x, bottomRight.x, topRight.x, bottomLeft.x);
                var minY = Math.min(topLeft.y, bottomRight.y, topRight.y, bottomLeft.y);
                var maxY = Math.max(topLeft.x, bottomRight.y, topRight.y, bottomLeft.y);
                this._bounds.location = new es.Vector2(minX, minY);
                this._bounds.width = maxX - minX;
                this._bounds.height = maxY - minY;
              } else {
                this._bounds.location = topLeft;
                this._bounds.width = bottomRight.x - topLeft.x;
                this._bounds.height = bottomRight.y - topLeft.y;
              }

              this._areBoundsDirty = false;
            }

            return this._bounds;
          }
        }, {
          key: "transformMatrix",
          get: function get() {
            if (this._areBoundsDirty) this.updateMatrixes();
            return this._transformMatrix;
          }
        }, {
          key: "inverseTransformMatrix",
          get: function get() {
            if (this._areBoundsDirty) this.updateMatrixes();
            return this._inverseTransformMatrix;
          }
        }, {
          key: "origin",
          get: function get() {
            return this._origin;
          },
          set: function set(value) {
            if (!this._origin.equals(value)) {
              this._origin = value;
              this._areMatrixesDirty = true;
            }
          }
        }, {
          key: "zoom",
          get: function get() {
            if (this._zoom == 0) return 1;
            if (this._zoom < 1) return es.MathHelper.map(this._zoom, this._minimumZoom, 1, -1, 0);
            return es.MathHelper.map(this._zoom, 1, this._maxmumZoom, 0, 1);
          },
          set: function set(value) {
            this.setZoom(value);
          }
        }, {
          key: "rawZoom",
          get: function get() {
            return this._zoom;
          },
          set: function set(value) {
            if (value != this._zoom) {
              this._zoom = value;
              this._areMatrixesDirty = true;
            }
          }
        }, {
          key: "minimumZoom",
          get: function get() {
            return this._minimumZoom;
          },
          set: function set(value) {
            this.setMinimumZoom(value);
          }
        }, {
          key: "maximumZoom",
          get: function get() {
            return this._maxmumZoom;
          },
          set: function set(value) {
            this.setMaximumZoom(value);
          }
        }, {
          key: "ratio",
          get: function get() {
            return this._ratio;
          },
          set: function set(value) {
            this.setRatio(value);
          }
        }]);

        return component_camera;
      }(es.Component));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=component_camera.js.map