System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, find, UITransform, Vec2, Vec3, SpriteRenderer, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBatcher(extras) {
    _reporterNs.report("Batcher", "../graphics/Batcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcomponent_camera(extras) {
    _reporterNs.report("component_camera", "./component_camera", _context.meta, extras);
  }

  _export("SpriteRenderer", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      find = _cc.find;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0fa9JJAw9PCaVMVHRs6Y+d", "SpriteRenderer", undefined);

      _export("SpriteRenderer", SpriteRenderer = class SpriteRenderer extends es.RenderableComponent {
        getbounds() {
          if (this._areBoundsDirty) {
            if (this._sprite.spriteFrame != null) {
              this._bounds.calculateBounds(this.entity.transform.position, this._localOffset, this._origin, this.entity.transform.scale, this.entity.transform.rotation, this.getwidth(), this.getheight());
            }

            this._areBoundsDirty = false;
          }

          return this._bounds;
        }

        getwidth() {
          const ui_transform = this._sprite.getComponent(UITransform);

          if (!ui_transform) return 0;
          return ui_transform.width;
        }

        getheight() {
          const ui_transform = this._sprite.getComponent(UITransform);

          if (!ui_transform) return 0;
          return ui_transform.height;
        }

        get origin() {
          return this._origin;
        }

        set origin(value) {
          this.setOrigin(value);
        }

        setOrigin(origin) {
          if (!this._origin.equals(origin)) {
            this._origin = origin;
            this._areBoundsDirty = true;
          }

          return this;
        }

        get sprite() {
          return this._sprite;
        }

        set sprite(value) {
          this.setSprite(value);
        }

        get originNormalized() {
          return new es.Vector2(this._origin.x / this.getwidth() * this.entity.transform.scale.x, this._origin.y / this.getheight() * this.entity.transform.scale.y);
        }

        set originNormalized(value) {
          this.setOrigin(new es.Vector2(value.x * this.getwidth() / this.entity.transform.scale.x, value.y * this.getheight() / this.entity.transform.scale.y));

          const ui_transform = this._sprite.getComponent(UITransform);

          if (ui_transform) {
            const originNormalized = new Vec2(value.x, value.y);
            ui_transform.anchorPoint = originNormalized;
          }
        }

        constructor(sprite) {
          super();

          _defineProperty(this, "_origin", new es.Vector2());

          this.setSprite(sprite);
        }

        onAddedToEntity() {
          super.onAddedToEntity();

          if (!this._sprite.node.parent) {
            var _find;

            (_find = find('Canvas')) === null || _find === void 0 ? void 0 : _find.addChild(this._sprite.node);
          }
        }

        onRemovedFromEntity() {
          super.onRemovedFromEntity();

          this._sprite.node.removeFromParent();

          this._sprite.node.destroy();
        }

        setSprite(sprite) {
          this._sprite = sprite;

          if (this._sprite != null) {
            const uiTransform = this._sprite.getComponent(UITransform);

            if (uiTransform) {
              const originPoint = uiTransform.anchorPoint;

              if (originPoint) {
                const scale = this.entity ? this.entity.transform.scale : this._sprite.node.scale;
                const newOrigin = new es.Vector2(originPoint.x * this.getwidth() / scale.x, originPoint.y * this.getheight() / scale.y);
                this._origin = newOrigin;
              }
            }
          }

          return this;
        }

        onEntityTransformChanged(comp) {
          if (!this._sprite) return;

          switch (comp) {
            case es.ComponentTransform.position:
              this._sprite.node.setPosition(this.entity.position.x, this.entity.position.y, 0);

              break;

            case es.ComponentTransform.rotation:
              this._sprite.node.setRotationFromEuler(0, 0, this.entity.rotationDegrees);

              break;

            case es.ComponentTransform.scale:
              this._sprite.node.setScale(new Vec3(this.entity.scale.x, this.entity.scale.y, 1));

              break;
          }
        }

        render(batcher, camera) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SpriteRenderer.js.map