System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Prefab, resources, Sprite, SpriteRenderer, RenderScene, sampleScene, _dec, _class, _crd, BasicScene;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfSpriteRenderer(extras) {
    _reporterNs.report("SpriteRenderer", "../components/SpriteRenderer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRenderScene(extras) {
    _reporterNs.report("RenderScene", "./RenderScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsampleScene(extras) {
    _reporterNs.report("sampleScene", "./RenderScene", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      resources = _cc.resources;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      SpriteRenderer = _unresolved_2.SpriteRenderer;
    }, function (_unresolved_3) {
      RenderScene = _unresolved_3.RenderScene;
      sampleScene = _unresolved_3.sampleScene;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "802e6AV6qBHgYUxcr4nBf3P", "BasicScene", undefined);

      _export("BasicScene", BasicScene = (_dec = (_crd && sampleScene === void 0 ? (_reportPossibleCrUseOfsampleScene({
        error: Error()
      }), sampleScene) : sampleScene)("基础场景"), _dec(_class = /*#__PURE__*/function (_ref) {
        _inheritsLoose(BasicScene, _ref);

        function BasicScene() {
          return _ref.apply(this, arguments) || this;
        }

        var _proto = BasicScene.prototype;

        _proto.initialize = function initialize() {
          var _this = this;

          resources.load('prefabs/moon', Prefab, function (err, data) {
            var moonTex = instantiate(data).getComponent(Sprite);

            var playerEntity = _this.createEntity("player");

            if (moonTex) playerEntity.addComponent(new (_crd && SpriteRenderer === void 0 ? (_reportPossibleCrUseOfSpriteRenderer({
              error: Error()
            }), SpriteRenderer) : SpriteRenderer)(moonTex));
          });
        };

        return BasicScene;
      }(_crd && RenderScene === void 0 ? (_reportPossibleCrUseOfRenderScene({
        error: Error()
      }), RenderScene) : RenderScene)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BasicScene.js.map