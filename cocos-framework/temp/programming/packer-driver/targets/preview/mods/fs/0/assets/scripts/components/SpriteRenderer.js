System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, find, UITransform, Vec2, Vec3, _crd, SpriteRenderer;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBatcher(extras) {
    _reporterNs.report("Batcher", "../graphics/Batcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcomponent_camera(extras) {
    _reporterNs.report("component_camera", "./component_camera", _context.meta, extras);
  }

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

      _export("SpriteRenderer", SpriteRenderer = /*#__PURE__*/function (_es$RenderableCompone) {
        _inheritsLoose(SpriteRenderer, _es$RenderableCompone);

        var _proto = SpriteRenderer.prototype;

        _proto.getbounds = function getbounds() {
          if (this._areBoundsDirty) {
            if (this._sprite.spriteFrame != null) {
              this._bounds.calculateBounds(this.entity.transform.position, this._localOffset, this._origin, this.entity.transform.scale, this.entity.transform.rotation, this.getwidth(), this.getheight());
            }

            this._areBoundsDirty = false;
          }

          return this._bounds;
        };

        _proto.getwidth = function getwidth() {
          var ui_transform = this._sprite.getComponent(UITransform);

          if (!ui_transform) return 0;
          return ui_transform.width;
        };

        _proto.getheight = function getheight() {
          var ui_transform = this._sprite.getComponent(UITransform);

          if (!ui_transform) return 0;
          return ui_transform.height;
        };

        _proto.setOrigin = function setOrigin(origin) {
          if (!this._origin.equals(origin)) {
            this._origin = origin;
            this._areBoundsDirty = true;
          }

          return this;
        };

        function SpriteRenderer(sprite) {
          var _this;

          _this = _es$RenderableCompone.call(this) || this;

          _defineProperty(_assertThisInitialized(_this), "_origin", new es.Vector2());

          _this.setSprite(sprite);

          return _this;
        }

        _proto.onAddedToEntity = function onAddedToEntity() {
          _es$RenderableCompone.prototype.onAddedToEntity.call(this);

          if (!this._sprite.node.parent) {
            var _find;

            (_find = find('Canvas')) === null || _find === void 0 ? void 0 : _find.addChild(this._sprite.node);
          }
        };

        _proto.onRemovedFromEntity = function onRemovedFromEntity() {
          _es$RenderableCompone.prototype.onRemovedFromEntity.call(this);

          this._sprite.node.removeFromParent();

          this._sprite.node.destroy();
        };

        _proto.setSprite = function setSprite(sprite) {
          this._sprite = sprite;

          if (this._sprite != null) {
            var uiTransform = this._sprite.getComponent(UITransform);

            if (uiTransform) {
              var originPoint = uiTransform.anchorPoint;

              if (originPoint) {
                var scale = this.entity ? this.entity.transform.scale : this._sprite.node.scale;
                var newOrigin = new es.Vector2(originPoint.x * this.getwidth() / scale.x, originPoint.y * this.getheight() / scale.y);
                this._origin = newOrigin;
              }
            }
          }

          return this;
        };

        _proto.onEntityTransformChanged = function onEntityTransformChanged(comp) {
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
        };

        _proto.render = function render(batcher, camera) {};

        _createClass(SpriteRenderer, [{
          key: "origin",
          get: function get() {
            return this._origin;
          },
          set: function set(value) {
            this.setOrigin(value);
          }
        }, {
          key: "sprite",
          get: function get() {
            return this._sprite;
          },
          set: function set(value) {
            this.setSprite(value);
          }
        }, {
          key: "originNormalized",
          get: function get() {
            return new es.Vector2(this._origin.x / this.getwidth() * this.entity.transform.scale.x, this._origin.y / this.getheight() * this.entity.transform.scale.y);
          },
          set: function set(value) {
            this.setOrigin(new es.Vector2(value.x * this.getwidth() / this.entity.transform.scale.x, value.y * this.getheight() / this.entity.transform.scale.y));

            var ui_transform = this._sprite.getComponent(UITransform);

            if (ui_transform) {
              var originNormalized = new Vec2(value.x, value.y);
              ui_transform.anchorPoint = originNormalized;
            }
          }
        }]);

        return SpriteRenderer;
      }(es.RenderableComponent));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SpriteRenderer.js.map