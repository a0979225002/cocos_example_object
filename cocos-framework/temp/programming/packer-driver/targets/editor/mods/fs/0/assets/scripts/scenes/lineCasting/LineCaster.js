System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, component_camera, Input, Keys, LineCaster, _crd;

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

  _export("LineCaster", void 0);

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

      _export("LineCaster", LineCaster = class LineCaster extends es.RenderableComponent {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_lastPosition", new es.Vector2(101, 101));

          _defineProperty(this, "_collisionPosition", new es.Vector2(-1, -1));
        }

        getwidth() {
          return 1000;
        }

        getheight() {
          return 1000;
        }

        render(batcher, camera) {
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
        }

        update() {
          if ((_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).leftMouseButtonPressed) {
            this._lastPosition = this.transform.position.clone();
            let pos = this.entity.scene.findEntity('camera').getComponent(_crd && component_camera === void 0 ? (_reportPossibleCrUseOfcomponent_camera({
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
            let hit = es.Physics.linecast(this._lastPosition, this.transform.position);

            if (hit.collider != null) {
              this._collisionPosition = hit.point;
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LineCaster.js.map