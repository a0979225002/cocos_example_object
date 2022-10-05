System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Prefab, resources, Sprite, SpriteRenderer, RenderScene, sampleScene, ColliderTrigger, _dec, _class, _crd, ColliderScene;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfSpriteRenderer(extras) {
    _reporterNs.report("SpriteRenderer", "../../components/SpriteRenderer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRenderScene(extras) {
    _reporterNs.report("RenderScene", "../RenderScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsampleScene(extras) {
    _reporterNs.report("sampleScene", "../RenderScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfColliderTrigger(extras) {
    _reporterNs.report("ColliderTrigger", "./ColliderTrigger", _context.meta, extras);
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
    }, function (_unresolved_4) {
      ColliderTrigger = _unresolved_4.ColliderTrigger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61919p4KWdLdYe1gCiYYrQL", "ColliderScene", undefined);

      _export("ColliderScene", ColliderScene = (_dec = (_crd && sampleScene === void 0 ? (_reportPossibleCrUseOfsampleScene({
        error: Error()
      }), sampleScene) : sampleScene)("collider"), _dec(_class = /*#__PURE__*/function (_ref) {
        _inheritsLoose(ColliderScene, _ref);

        function ColliderScene() {
          return _ref.apply(this, arguments) || this;
        }

        var _proto = ColliderScene.prototype;

        _proto.initialize = function initialize() {
          var box1 = this.createEntity("box1");
          resources.load('prefabs/moon', Prefab, function (err, data) {
            var moonTex = instantiate(data).getComponent(Sprite);

            if (moonTex) {
              box1.addComponent(new (_crd && ColliderTrigger === void 0 ? (_reportPossibleCrUseOfColliderTrigger({
                error: Error()
              }), ColliderTrigger) : ColliderTrigger)());
              box1.addComponent(new es.Mover());
              box1.addComponent(new (_crd && SpriteRenderer === void 0 ? (_reportPossibleCrUseOfSpriteRenderer({
                error: Error()
              }), SpriteRenderer) : SpriteRenderer)(moonTex));
              if (moonTex.spriteFrame) box1.addComponent(new es.BoxCollider()).isTrigger = true;
            }

            box1.setPosition(200, 100);
          });
          var box2 = this.createEntity("box2");
          resources.load('prefabs/moon', Prefab, function (err, data) {
            var moonTex = instantiate(data).getComponent(Sprite);

            if (moonTex) {
              box2.addComponent(new (_crd && ColliderTrigger === void 0 ? (_reportPossibleCrUseOfColliderTrigger({
                error: Error()
              }), ColliderTrigger) : ColliderTrigger)());
              box2.addComponent(new (_crd && SpriteRenderer === void 0 ? (_reportPossibleCrUseOfSpriteRenderer({
                error: Error()
              }), SpriteRenderer) : SpriteRenderer)(moonTex));
              if (moonTex.spriteFrame) box2.addComponent(new es.BoxCollider());
            }

            box2.setPosition(100, 200);
          });
          es.Core.schedule(0, true, this, function () {
            var _box1$getComponent;

            var collisionResult = new es.CollisionResult();
            (_box1$getComponent = box1.getComponent(es.Mover)) === null || _box1$getComponent === void 0 ? void 0 : _box1$getComponent.move(es.Vector2.up, collisionResult);
          });
        };

        return ColliderScene;
      }(_crd && RenderScene === void 0 ? (_reportPossibleCrUseOfRenderScene({
        error: Error()
      }), RenderScene) : RenderScene)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ColliderScene.js.map