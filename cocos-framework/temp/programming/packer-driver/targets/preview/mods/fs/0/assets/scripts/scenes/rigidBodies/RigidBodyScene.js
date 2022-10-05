System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Prefab, resources, Sprite, SpriteRenderer, RenderScene, sampleScene, _dec, _class, _crd, RigidBodyScene;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfcomponent_camera(extras) {
    _reporterNs.report("component_camera", "../../components/component_camera", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteRenderer(extras) {
    _reporterNs.report("SpriteRenderer", "../../components/SpriteRenderer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRenderScene(extras) {
    _reporterNs.report("RenderScene", "../RenderScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsampleScene(extras) {
    _reporterNs.report("sampleScene", "../RenderScene", _context.meta, extras);
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

      _cclegacy._RF.push({}, "156631MBiJFVajQSIB9EbLx", "RigidBodyScene", undefined);

      _export("RigidBodyScene", RigidBodyScene = (_dec = (_crd && sampleScene === void 0 ? (_reportPossibleCrUseOfsampleScene({
        error: Error()
      }), sampleScene) : sampleScene)("RigidBody"), _dec(_class = /*#__PURE__*/function (_ref) {
        _inheritsLoose(RigidBodyScene, _ref);

        function RigidBodyScene() {
          return _ref.apply(this, arguments) || this;
        }

        var _proto = RigidBodyScene.prototype;

        _proto.onStart = function onStart() {
          var _this = this;

          // let camera = this.findEntity('camera')?.getComponent(component_camera);
          // if (camera) {
          //     camera.zoom = 2;
          // }
          this.camera.position.add(new es.Vector2(200, 0));
          resources.load('prefabs/moon', Prefab, function (err, data) {
            _this.initAfter(data);
          });
        };

        _proto.initAfter = function initAfter(moonTex) {
          var friction = 0.3;
          var elasticity = 0.4;
          this.createBody(new es.Vector2(50, 200), 50, friction, elasticity, new es.Vector2(150, 0), moonTex).addImpulse(new es.Vector2(10, 0));
          this.createBody(new es.Vector2(800, 260), 5, friction, elasticity, new es.Vector2(-180, 0), moonTex);
          this.createBody(new es.Vector2(50, 400), 50, friction, elasticity, new es.Vector2(150, -40), moonTex);
          this.createBody(new es.Vector2(800, 460), 5, friction, elasticity, new es.Vector2(-180, -40), moonTex);
          this.createBody(new es.Vector2(400, 0), 60, friction, elasticity, new es.Vector2(10, 90), moonTex);
          this.createBody(new es.Vector2(500, 400), 4, friction, elasticity, new es.Vector2(0, -270), moonTex);
          this.createBody(new es.Vector2(-200, 250), 0, friction, elasticity, new es.Vector2(0, -270), moonTex);
          this.createBody(new es.Vector2(200, 700), 15, friction, elasticity, new es.Vector2(150, -150), moonTex);
          this.createBody(new es.Vector2(800, 760), 15, friction, elasticity, new es.Vector2(-180, -150), moonTex);
          this.createBody(new es.Vector2(1200, 700), 1, friction, elasticity, new es.Vector2(0, 0), moonTex).addImpulse(new es.Vector2(-5, -20));
          this.createBody(new es.Vector2(100, 100), 1, friction, elasticity, new es.Vector2(100, 90), moonTex).addImpulse(new es.Vector2(40, -10));
          this.createBody(new es.Vector2(100, 700), 100, friction, elasticity, new es.Vector2(200, -270), moonTex);
        };

        _proto.createBody = function createBody(position, mass, friction, elasticity, velocity, texture) {
          var rigidBody = new es.ArcadeRigidbody().setMass(mass).setFriction(friction).setElasticity(elasticity).setVelocity(velocity);
          var entity = this.createEntity(es.UUID.randomUUID());
          var sprite = instantiate(texture).getComponent(Sprite);
          if (sprite) entity.addComponent(new (_crd && SpriteRenderer === void 0 ? (_reportPossibleCrUseOfSpriteRenderer({
            error: Error()
          }), SpriteRenderer) : SpriteRenderer)(sprite));
          entity.setPosition(position.x, position.y);
          entity.addComponent(rigidBody);
          entity.addComponent(new es.CircleCollider());
          return rigidBody;
        };

        _proto.update = function update() {
          _ref.prototype.update.call(this);

          es.Core.emitter.emit(es.CoreEvents.renderChanged, es.Time.deltaTime);
        };

        return RigidBodyScene;
      }(_crd && RenderScene === void 0 ? (_reportPossibleCrUseOfRenderScene({
        error: Error()
      }), RenderScene) : RenderScene)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RigidBodyScene.js.map