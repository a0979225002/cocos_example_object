System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, component_camera, Input, Keys, _crd, LineCaster;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfcomponent_camera(extras) {
    _reporterNs.report("component_camera", "../../components/component_camera", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBatcher(extras) {
    _reporterNs.report("Batcher", "../../graphics/Batcher", _context.meta, extras);
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

      _cclegacy._RF.push({}, "a22e2Ij8VVNA4ZAQxr5qYL0", "LineCaster", undefined);

      _export("LineCaster", LineCaster = /*#__PURE__*/function (_es$RenderableCompone) {
        _inheritsLoose(LineCaster, _es$RenderableCompone);

        function LineCaster() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _es$RenderableCompone.call.apply(_es$RenderableCompone, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_lastPosition", new es.Vector2(101, 101));

          _defineProperty(_assertThisInitialized(_this), "_collisionPosition", new es.Vector2(-1, -1));

          return _this;
        }

        var _proto = LineCaster.prototype;

        _proto.getwidth = function getwidth() {
          return 1000;
        };

        _proto.getheight = function getheight() {
          return 1000;
        };

        _proto.render = function render(batcher, camera) {
          batcher.drawPixel(this._lastPosition, new es.Color(255, 255, 0), 4);
          batcher.end();
          batcher.drawPixel(this.transform.position, new es.Color(255, 255, 255), 4);
          batcher.end();
          batcher.drawLine(this._lastPosition, this.transform.position, new es.Color(255, 255, 255), 2);
          batcher.end();

          if (this._collisionPosition.x > 0 && this._collisionPosition.y > 0) {
            batcher.drawPixel(this._collisionPosition, new es.Color(255, 0, 0), 10);
            batcher.end();
          }
        };

        _proto.update = function update() {
          if ((_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).leftMouseButtonPressed) {
            this._lastPosition = this.transform.position.clone();
            var pos = this.entity.scene.findEntity('camera').getComponent(_crd && component_camera === void 0 ? (_reportPossibleCrUseOfcomponent_camera({
              error: Error()
            }), component_camera) : component_camera).mouseToWorldPoint();
            this.transform.position = pos.clone();
            this._collisionPosition = new es.Vector2(-1, -1);
          }

          if ((_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).rightMouseButtonPressed || (_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).isKeyPressed((_crd && Keys === void 0 ? (_reportPossibleCrUseOfKeys({
            error: Error()
          }), Keys) : Keys).space)) {
            var hit = es.Physics.linecast(this._lastPosition, this.transform.position);

            if (hit.collider != null) {
              this._collisionPosition = hit.point;
            }
          }
        };

        return LineCaster;
      }(es.RenderableComponent));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LineCaster.js.map