System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, component_camera, Input, Keys, _crd, VerletSystem;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfcomponent_camera(extras) {
    _reporterNs.report("component_camera", "../../components/component_camera", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInput(extras) {
    _reporterNs.report("Input", "../../Input/Input", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeys(extras) {
    _reporterNs.report("Keys", "../../Input/Keys", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      component_camera = _unresolved_2.component_camera;
    }, function (_unresolved_3) {
      Input = _unresolved_3.Input;
    }, function (_unresolved_4) {
      Keys = _unresolved_4.Keys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48ad3grAeRIIpQcbK/QVZaQ", "VerletSystem", undefined);

      _export("VerletSystem", VerletSystem = /*#__PURE__*/function (_es$RenderableCompone) {
        _inheritsLoose(VerletSystem, _es$RenderableCompone);

        var _proto = VerletSystem.prototype;

        _proto.getwidth = function getwidth() {
          return 960;
        };

        _proto.getheight = function getheight() {
          return 640;
        };

        function VerletSystem() {
          var _this;

          _this = _es$RenderableCompone.call(this) || this;

          _defineProperty(_assertThisInitialized(_this), "world", void 0);

          _this.world = new es.VerletWorld(new es.Rectangle(-_this.getwidth() / 2, -_this.getheight() / 2, _this.getwidth() / 2, _this.getheight() / 2));
          _this.world.onHandleDrag = _this.handleDragging.bind(_assertThisInitialized(_this));
          return _this;
        }

        _proto.handleDragging = function handleDragging() {
          var pos = this.entity.scene.findEntity('camera').getComponent(_crd && component_camera === void 0 ? (_reportPossibleCrUseOfcomponent_camera({
            error: Error()
          }), component_camera) : component_camera).mouseToWorldPoint();

          if ((_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).leftMouseButtonPressed) {
            this.world._draggedParticle = this.world.getNearestParticle(pos);
          } else if ((_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).leftMouseButtonDown) {
            if (this.world._draggedParticle != null) {
              this.world._draggedParticle.position = pos;
            }
          } else if ((_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).leftMouseButtonRelease) {
            if (this.world._draggedParticle != null) this.world._draggedParticle.position = pos;
            this.world._draggedParticle = null;
          }
        };

        _proto.toggleZeroGravity = function toggleZeroGravity() {
          if (this.world.gravity.y == 0) {
            this.world.gravity.y = -980;
          } else {
            this.world.gravity.y = 0;
          }
        };

        _proto.update = function update() {
          if ((_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).isKeyPressed((_crd && Keys === void 0 ? (_reportPossibleCrUseOfKeys({
            error: Error()
          }), Keys) : Keys).z)) this.toggleZeroGravity();
          this.world.update();
        };

        _proto.render = function render(batcher, camera) {
          this.world.debugRender(batcher);
        };

        return VerletSystem;
      }(es.RenderableComponent));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=VerletSystem.js.map