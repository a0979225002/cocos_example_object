System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, component_camera, _crd, SceneEmitType, sampleList, RenderScene;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function sampleScene(buttonName) {
    return function (target) {
      sampleList.set(buttonName, target);
    };
  }

  function _reportPossibleCrUseOfcomponent_camera(extras) {
    _reporterNs.report("component_camera", "../components/component_camera", _context.meta, extras);
  }

  _export({
    sampleScene: sampleScene,
    SceneEmitType: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      component_camera = _unresolved_2.component_camera;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06f92GF3OtJpoPZQ4Yc6dxK", "RenderScene", undefined);

      (function (SceneEmitType) {
        SceneEmitType[SceneEmitType["graphics_dirty"] = 0] = "graphics_dirty";
      })(SceneEmitType || _export("SceneEmitType", SceneEmitType = {}));

      _export("sampleList", sampleList = new Map());

      _export("RenderScene", RenderScene = /*#__PURE__*/function (_es$Scene) {
        _inheritsLoose(RenderScene, _es$Scene);

        function RenderScene() {
          var _this;

          _this = _es$Scene.call(this) || this;

          var cameraEntity = _this.createEntity("camera");

          _this.camera = cameraEntity.addComponent(new (_crd && component_camera === void 0 ? (_reportPossibleCrUseOfcomponent_camera({
            error: Error()
          }), component_camera) : component_camera)());
          return _this;
        }

        return RenderScene;
      }(es.Scene));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RenderScene.js.map