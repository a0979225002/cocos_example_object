System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Prefab, resources, Sprite, SpriteRenderer, RenderScene, sampleScene, _dec, _class, _crd, RigidBodyScene;

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
      }), sampleScene) : sampleScene)("RigidBody"), _dec(_class = class RigidBodyScene extends (_crd && RenderScene === void 0 ? (_reportPossibleCrUseOfRenderScene({
        error: Error()
      }), RenderScene) : RenderScene) {
        onStart() {
          // let camera = this.findEntity('camera')?.getComponent(component_camera);
          // if (camera) {
          //     camera.zoom = 2;
          // }
          this.camera.position.add(new es.Vector2(200, 0));
          resources.load('prefabs/moon', Prefab, (err, data) => {
            this.initAfter(data);
          });
        }

        initAfter(moonTex) {
          let friction = 0.3;
          let elasticity = 0.4;
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
        }

        createBody(position, mass, friction, elasticity, velocity, texture) {
          let rigidBody = new es.ArcadeRigidbody().setMass(mass).setFriction(friction).setElasticity(elasticity).setVelocity(velocity);
          let entity = this.createEntity(es.UUID.randomUUID());
          let sprite = instantiate(texture).getComponent(Sprite);
          if (sprite) entity.addComponent(new (_crd && SpriteRenderer === void 0 ? (_reportPossibleCrUseOfSpriteRenderer({
            error: Error()
          }), SpriteRenderer) : SpriteRenderer)(sprite));
          entity.setPosition(position.x, position.y);
          entity.addComponent(rigidBody);
          entity.addComponent(new es.CircleCollider());
          return rigidBody;
        }

        update() {
          super.update();
          es.Core.emitter.emit(es.CoreEvents.renderChanged, es.Time.deltaTime);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RigidBodyScene.js.map