System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Camera, clamp, find, Node, Vec3, view, Input, CameraInset, component_camera, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfInput(extras) {
    _reporterNs.report("Input", "../Input/Input", _context.meta, extras);
  }

  _export("component_camera", void 0);

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

      CameraInset = class CameraInset {
        constructor() {
          _defineProperty(this, "left", 0);

          _defineProperty(this, "right", 0);

          _defineProperty(this, "top", 0);

          _defineProperty(this, "bottom", 0);
        }

      };

      _export("component_camera", component_camera = class component_camera extends es.Component {
        get position() {
          return this.entity.transform.position;
        }

        get rotation() {
          return this.entity.transform.rotation;
        }

        get bounds() {
          if (this._areMatrixesDirty) this.updateMatrixes();

          if (this._areBoundsDirty) {
            let viewport = view.getViewportRect();
            let topLeft = this.screenToWorldPoint(new es.Vector2(this._inset.left, this._inset.top));
            let bottomRight = this.screenToWorldPoint(new es.Vector2(viewport.width - this._inset.right, viewport.height - this._inset.bottom));

            if (this.entity.transform.rotation != 0) {
              let topRight = this.screenToWorldPoint(new es.Vector2(viewport.width - this._inset.right, this._inset.top));
              let bottomLeft = this.screenToWorldPoint(new es.Vector2(this._inset.left, viewport.height - this._inset.bottom));
              let minX = Math.min(topLeft.x, bottomRight.x, topRight.x, bottomLeft.x);
              let maxX = Math.max(topLeft.x, bottomRight.x, topRight.x, bottomLeft.x);
              let minY = Math.min(topLeft.y, bottomRight.y, topRight.y, bottomLeft.y);
              let maxY = Math.max(topLeft.x, bottomRight.y, topRight.y, bottomLeft.y);
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

        get transformMatrix() {
          if (this._areBoundsDirty) this.updateMatrixes();
          return this._transformMatrix;
        }

        get inverseTransformMatrix() {
          if (this._areBoundsDirty) this.updateMatrixes();
          return this._inverseTransformMatrix;
        }

        get origin() {
          return this._origin;
        }

        set origin(value) {
          if (!this._origin.equals(value)) {
            this._origin = value;
            this._areMatrixesDirty = true;
          }
        }

        get zoom() {
          if (this._zoom == 0) return 1;
          if (this._zoom < 1) return es.MathHelper.map(this._zoom, this._minimumZoom, 1, -1, 0);
          return es.MathHelper.map(this._zoom, 1, this._maxmumZoom, 0, 1);
        }

        set zoom(value) {
          this.setZoom(value);
        }

        get rawZoom() {
          return this._zoom;
        }

        set rawZoom(value) {
          if (value != this._zoom) {
            this._zoom = value;
            this._areMatrixesDirty = true;
          }
        }

        get minimumZoom() {
          return this._minimumZoom;
        }

        set minimumZoom(value) {
          this.setMinimumZoom(value);
        }

        get maximumZoom() {
          return this._maxmumZoom;
        }

        set maximumZoom(value) {
          this.setMaximumZoom(value);
        }

        get ratio() {
          return this._ratio;
        }

        set ratio(value) {
          this.setRatio(value);
        }

        constructor() {
          var _find;

          super();

          _defineProperty(this, "_transformMatrix", es.Matrix2D.identity);

          _defineProperty(this, "_inverseTransformMatrix", es.Matrix2D.identity);

          _defineProperty(this, "_bounds", new es.Rectangle());

          _defineProperty(this, "_inset", new CameraInset());

          _defineProperty(this, "_zoom", 0);

          _defineProperty(this, "_minimumZoom", 0.3);

          _defineProperty(this, "_maxmumZoom", 3);

          _defineProperty(this, "_origin", es.Vector2.zero);

          _defineProperty(this, "_ratio", es.Vector2.one);

          _defineProperty(this, "_areMatrixesDirty", true);

          _defineProperty(this, "_areBoundsDirty", true);

          _defineProperty(this, "camera", void 0);

          this.setZoom(0);
          let camera = (_find = find('Canvas/Camera')) === null || _find === void 0 ? void 0 : _find.getComponent(Camera);

          if (camera) {
            this.camera = camera;
          } else {
            var _find2;

            let cameraNode = new Node('Camera');
            this.camera = cameraNode.addComponent(Camera);
            (_find2 = find('Canvas')) === null || _find2 === void 0 ? void 0 : _find2.addChild(cameraNode);
          }

          const visibleSize = view.getVisibleSize();
          this.origin = new es.Vector2(visibleSize.width / 2, visibleSize.height / 2);
          const canvasSize = view.getCanvasSize();
          this.ratio = new es.Vector2(visibleSize.width / canvasSize.width, visibleSize.height / canvasSize.height);
        }

        updateMatrixes() {
          if (!this._areBoundsDirty) return;
          let tempMat = new es.Matrix2D();
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
        }

        setZoom(zoom) {
          let newZoom = clamp(zoom, -1, 1);
          if (newZoom == 0) this._zoom = 1;else if (newZoom < 0) this._zoom = es.MathHelper.map(newZoom, -1, 0, this._minimumZoom, 1);else this._zoom = es.MathHelper.map(newZoom, 0, 1, 1, this._maxmumZoom);
          this._areMatrixesDirty = true;
          return this;
        }

        setMinimumZoom(minZoom) {
          es.Insist.isTrue(minZoom > 0, "minimumZoom必须大于零");
          if (this._zoom < minZoom) this._zoom = this.minimumZoom;
          this._minimumZoom = minZoom;
          return this;
        }

        setMaximumZoom(maxZoom) {
          es.Insist.isTrue(maxZoom > 0, "MaximumZoom必须大于零");
          if (this._zoom > maxZoom) this._zoom = maxZoom;
          this._maxmumZoom = maxZoom;
          return this;
        }

        setRatio(value) {
          if (!this._ratio.equals(value)) {
            this._ratio = value;
            this._areBoundsDirty = true;
          }

          return this;
        }

        setInset(left, right, top, bottom) {
          this._inset = new CameraInset();
          this._inset.left = left;
          this._inset.right = right;
          this._inset.top = top;
          this._inset.bottom = bottom;
          this._areBoundsDirty = true;
          return this;
        }

        zoomIn(deltaZoom) {
          this.zoom += deltaZoom;
        }

        zoomOut(deltaZoom) {
          this.zoom -= deltaZoom;
        }

        screenToWorldPoint(screenPosition) {
          this.updateMatrixes();
          es.Vector2Ext.transformR(screenPosition.multiply(this.ratio), this._inverseTransformMatrix, screenPosition);
          return screenPosition;
        }

        worldToScreenPoint(worldPosition) {
          this.updateMatrixes();
          es.Vector2Ext.transformR(worldPosition.multiply(this.ratio), this._transformMatrix, worldPosition);
          return worldPosition;
        }

        forceMatrixUpdate() {
          this._areMatrixesDirty = true;
        }

        onEntityTransformChanged(comp) {
          this._areMatrixesDirty = true;
        }

        touchToWorldPoint() {
          return this.screenToWorldPoint((_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).scaledPosition((_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).touchPosition));
        }

        mouseToWorldPoint() {
          return this.screenToWorldPoint((_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).scaledPosition((_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).mousePosition));
        }

        update() {
          this.camera.node.setPosition(new Vec3(this.position.x, this.position.y, 1000)); // let camera = this.camera.getComponent(Camera);
          // if (camera) camera.orthoHeight = 320 + 320 * this.zoom;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=component_camera.js.map