System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, resources, Prefab, instantiate, Sprite, SpriteRenderer, RenderScene, sampleScene, LineCaster, _dec, _class, _crd, LineCastingScene;

  function _reportPossibleCrUseOfSpriteRenderer(extras) {
    _reporterNs.report("SpriteRenderer", "../../components/SpriteRenderer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRenderScene(extras) {
    _reporterNs.report("RenderScene", "../RenderScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsampleScene(extras) {
    _reporterNs.report("sampleScene", "../RenderScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLineCaster(extras) {
    _reporterNs.report("LineCaster", "./LineCaster", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      resources = _cc.resources;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      SpriteRenderer = _unresolved_2.SpriteRenderer;
    }, function (_unresolved_3) {
      RenderScene = _unresolved_3.RenderScene;
      sampleScene = _unresolved_3.sampleScene;
    }, function (_unresolved_4) {
      LineCaster = _unresolved_4.LineCaster;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68b57u/bzNGi5FA+jZV4zsE", "LineCastingScene", undefined);

      _export("LineCastingScene", LineCastingScene = (_dec = (_crd && sampleScene === void 0 ? (_reportPossibleCrUseOfsampleScene({
        error: Error()
      }), sampleScene) : sampleScene)("lineCasting"), _dec(_class = class LineCastingScene extends (_crd && RenderScene === void 0 ? (_reportPossibleCrUseOfRenderScene({
        error: Error()
      }), RenderScene) : RenderScene) {
        initialize() {
          let playerEntity = this.createEntity("player");
          resources.load('prefabs/moon', Prefab, (err, data) => {
            let moonTex = instantiate(data).getComponent(Sprite);

            if (moonTex) {
              playerEntity.addComponent(new (_crd && SpriteRenderer === void 0 ? (_reportPossibleCrUseOfSpriteRenderer({
                error: Error()
              }), SpriteRenderer) : SpriteRenderer)(moonTex));
              if (moonTex.spriteFrame) playerEntity.addComponent(new es.BoxCollider());
            }

            playerEntity.setPosition(200, 100);
          });
          let lineCaster = this.createEntity("linecaster").addComponent(new (_crd && LineCaster === void 0 ? (_reportPossibleCrUseOfLineCaster({
            error: Error()
          }), LineCaster) : LineCaster)());
          lineCaster.transform.position = new es.Vector2(300, 100);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LineCastingScene.js.map