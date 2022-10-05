System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Prefab, resources, Sprite, SpriteRenderer, RenderScene, sampleScene, VerletSystem, _dec, _class, _crd, VerletPhysicsScene;

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

  function _reportPossibleCrUseOfVerletSystem(extras) {
    _reporterNs.report("VerletSystem", "./VerletSystem", _context.meta, extras);
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
      VerletSystem = _unresolved_4.VerletSystem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bcb9f+lE3tOW4LuIHqH8UCe", "VerletPhysicsScene", undefined);

      _export("VerletPhysicsScene", VerletPhysicsScene = (_dec = (_crd && sampleScene === void 0 ? (_reportPossibleCrUseOfsampleScene({
        error: Error()
      }), sampleScene) : sampleScene)("Verlet Physics"), _dec(_class = /*#__PURE__*/function (_ref) {
        _inheritsLoose(VerletPhysicsScene, _ref);

        function VerletPhysicsScene() {
          return _ref.apply(this, arguments) || this;
        }

        var _proto = VerletPhysicsScene.prototype;

        _proto.initialize = function initialize() {
          var verletSystem = this.createEntity("verlet-system").addComponent(new (_crd && VerletSystem === void 0 ? (_reportPossibleCrUseOfVerletSystem({
            error: Error()
          }), VerletSystem) : VerletSystem)());
          this.createPolygons();
          this.createRope(verletSystem.world);
          verletSystem.world.addComposite(new es.Tire(new es.Vector2(175, 32), 64, 32, 0.3, 0.5));
          verletSystem.world.addComposite(new es.Tire(new es.Vector2(300, 16), 50, 4, 0.2, 0.7));
          verletSystem.world.addComposite(new es.Tire(new es.Vector2(450, 64), 64, 7, 0.1, 0.3));
          verletSystem.world.addComposite(new es.Cloth(new es.Vector2(200, 200), 200, 200, 20, 0.25, 50));
          verletSystem.world.addComposite(new es.Ragdoll(200, 20, es.RandomUtils.randint(140, 240)));
          verletSystem.world.addComposite(new es.Ragdoll(250, 20, es.RandomUtils.randint(140, 240)));
          verletSystem.world.addComposite(new es.Ragdoll(300, 20, es.RandomUtils.randint(140, 240)));
          verletSystem.world.addComposite(new es.Ball(new es.Vector2(100, 60), es.RandomUtils.randint(10, 50)));
          verletSystem.world.addComposite(new es.Ball(new es.Vector2(150, 60), es.RandomUtils.randint(10, 50)));
          verletSystem.world.addComposite(new es.Ball(new es.Vector2(200, 60), es.RandomUtils.randint(10, 50)));
        };

        _proto.createPolygons = function createPolygons() {
          // const trianglePoints: es.Vector2[] = [new es.Vector2(0, 0), new es.Vector2(128, 0), new es.Vector2(128, 128)];
          // const triangleEntity = this.createEntity("triangle");
          // resources.load('prefabs/moon_polygon', Prefab, (err, data) => {
          //     let moonTex = instantiate(data).getComponent(PolygonSprite)!;
          //     triangleEntity.setPosition(50, 150);
          //     triangleEntity.addComponent(new PolygonMesh(trianglePoints, false)).setColor(es.Color.Green).setTexture(moonTex);
          //     triangleEntity.addComponent(new es.PolygonCollider(trianglePoints));
          // });
          var circleEntity = this.createEntity("circle");
          resources.load('prefabs/moon', Prefab, function (err, data) {
            var moonTex = instantiate(data).getComponent(Sprite);
            if (moonTex) circleEntity.addComponent(new (_crd && SpriteRenderer === void 0 ? (_reportPossibleCrUseOfSpriteRenderer({
              error: Error()
            }), SpriteRenderer) : SpriteRenderer)(moonTex));
            circleEntity.setPosition(250, 60);
            circleEntity.addComponent(new es.CircleCollider(64));
          }); // const polyPoints = es.Polygon.buildSymmetricalPolygon(5, 140);
          // const polygonEntity = this.createEntity("boxCollider");
          // resources.load('prefabs/moon_polygon', Prefab, (err, data) => {
          //     let moonTex = instantiate(data).getComponent(PolygonSprite)!;
          //     polygonEntity.setPosition(230, 225);
          //     polygonEntity.addComponent(new PolygonMesh(polyPoints)).setColor(es.Color.Green).setTexture(moonTex);
          //     polygonEntity.addComponent(new es.PolygonCollider(polyPoints));
          // });
          // polygonEntity.tweenRotationDegreesTo(180, 3)
          //     .setLoops(es.LoopType.pingpong, 50)
          //     .setEaseType(es.EaseType.linear)
          //     .start();
        };

        _proto.createRope = function createRope(world) {
          var linePoints = [];

          for (var i = 0; i < 10; i++) {
            linePoints[i] = new es.Vector2(30 * i + 50, 10);
          }

          var line = new es.LineSegments(linePoints, 0.3).pinParticleAtIndex(0);
          world.addComposite(line);
        };

        _proto.update = function update() {
          _ref.prototype.update.call(this);

          es.Core.emitter.emit(es.CoreEvents.renderChanged, es.Time.deltaTime);
        };

        return VerletPhysicsScene;
      }(_crd && RenderScene === void 0 ? (_reportPossibleCrUseOfRenderScene({
        error: Error()
      }), RenderScene) : RenderScene)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=VerletPhysicsScene.js.map