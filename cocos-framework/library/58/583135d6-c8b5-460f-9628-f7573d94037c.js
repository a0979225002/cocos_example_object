(function (root) {
  var exports = undefined,
      module = undefined,
      require = undefined;
  var define = undefined;
  var self = root,
      window = root,
      global = root,
      globalThis = root;
  (function () {
    window.es = {};

    var __awaiter = this && this.__awaiter || function (t, e, n, i) {
      return new (n || (n = Promise))(function (r, o) {
        function s(t) {
          try {
            c(i.next(t));
          } catch (t) {
            o(t);
          }
        }

        function a(t) {
          try {
            c(i.throw(t));
          } catch (t) {
            o(t);
          }
        }

        function c(t) {
          t.done ? r(t.value) : new n(function (e) {
            e(t.value);
          }).then(s, a);
        }

        c((i = i.apply(t, e || [])).next());
      });
    },
        __generator = this && this.__generator || function (t, e) {
      var n,
          i,
          r,
          o,
          s = {
        label: 0,
        sent: function () {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: []
      };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;

      function a(o) {
        return function (a) {
          return function (o) {
            if (n) throw new TypeError("Generator is already executing.");

            for (; s;) try {
              if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;

              switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                case 0:
                case 1:
                  r = o;
                  break;

                case 4:
                  return s.label++, {
                    value: o[1],
                    done: !1
                  };

                case 5:
                  s.label++, i = o[1], o = [0];
                  continue;

                case 7:
                  o = s.ops.pop(), s.trys.pop();
                  continue;

                default:
                  if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                    s = 0;
                    continue;
                  }

                  if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                    s.label = o[1];
                    break;
                  }

                  if (6 === o[0] && s.label < r[1]) {
                    s.label = r[1], r = o;
                    break;
                  }

                  if (r && s.label < r[2]) {
                    s.label = r[2], s.ops.push(o);
                    break;
                  }

                  r[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }

              o = e.call(t, s);
            } catch (t) {
              o = [6, t], i = 0;
            } finally {
              n = r = 0;
            }

            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            };
          }([o, a]);
        };
      }
    },
        __read = this && this.__read || function (t, e) {
      var n = "function" == typeof Symbol && t[Symbol.iterator];
      if (!n) return t;
      var i,
          r,
          o = n.call(t),
          s = [];

      try {
        for (; (void 0 === e || e-- > 0) && !(i = o.next()).done;) s.push(i.value);
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          i && !i.done && (n = o.return) && n.call(o);
        } finally {
          if (r) throw r.error;
        }
      }

      return s;
    },
        __spread = this && this.__spread || function () {
      for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(__read(arguments[e]));

      return t;
    };

    window.__extends = this && this.__extends || function () {
      var t = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      };

      return function (e, n) {
        function i() {
          this.constructor = e;
        }

        t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
      };
    }();

    var __values = this && this.__values || function (t) {
      var e = "function" == typeof Symbol && t[Symbol.iterator],
          n = 0;
      return e ? e.call(t) : {
        next: function () {
          return t && n >= t.length && (t = void 0), {
            value: t && t[n++],
            done: !t
          };
        }
      };
    };

    !function (t) {
      var e = function () {
        function e(n, i) {
          void 0 === n && (n = !0), void 0 === i && (i = !0), this._globalManagers = [], this._coroutineManager = new t.CoroutineManager(), this._timerManager = new t.TimerManager(), this._frameCounterElapsedTime = 0, this._frameCounter = 0, this._totalMemory = 0, e._instance = this, e.emitter = new t.Emitter(), e.emitter.addObserver(t.CoreEvents.frameUpdated, this.update, this), e.registerGlobalManager(this._coroutineManager), e.registerGlobalManager(new t.TweenManager()), e.registerGlobalManager(this._timerManager), e.entitySystemsEnabled = i, this.debug = n, this.initialize();
        }

        return Object.defineProperty(e, "Instance", {
          get: function () {
            return this._instance;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "scene", {
          get: function () {
            return this._instance ? this._instance._scene : null;
          },
          set: function (e) {
            t.Insist.isNotNull(e, "??????????????????"), null == this._instance._scene ? (this._instance._scene = e, this._instance.onSceneChanged(), this._instance._scene.begin()) : this._instance._nextScene = e;
          },
          enumerable: !0,
          configurable: !0
        }), e.create = function (e) {
          return void 0 === e && (e = !0), null == this._instance && (this._instance = new t.Core(e)), this._instance;
        }, e.registerGlobalManager = function (t) {
          this._instance._globalManagers.push(t), t.enabled = !0;
        }, e.unregisterGlobalManager = function (e) {
          new t.List(this._instance._globalManagers).remove(e), e.enabled = !1;
        }, e.getGlobalManager = function (t) {
          for (var n = 0, i = e._instance._globalManagers.length; n < i; ++n) {
            var r = e._instance._globalManagers[n];
            if (r instanceof t) return r;
          }

          return null;
        }, e.startCoroutine = function (t) {
          return this._instance._coroutineManager.startCoroutine(t);
        }, e.schedule = function (t, e, n, i) {
          return void 0 === e && (e = !1), void 0 === n && (n = null), this._instance._timerManager.schedule(t, e, n, i);
        }, e.prototype.startDebugDraw = function () {
          if (this.debug && (this._frameCounter++, this._frameCounterElapsedTime += t.Time.deltaTime, this._frameCounterElapsedTime >= 1)) {
            var e = window.performance.memory;
            null != e && (this._totalMemory = Number((e.totalJSHeapSize / 1048576).toFixed(2))), this._titleMemory && this._titleMemory(this._totalMemory, this._frameCounter), this._frameCounter = 0, this._frameCounterElapsedTime -= 1;
          }
        }, e.prototype.onSceneChanged = function () {
          t.Time.sceneChanged();
        }, e.prototype.initialize = function () {}, e.prototype.update = function (n) {
          return void 0 === n && (n = -1), __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (r) {
              if (e.paused) return [2];

              if (t.Time.update(n, -1 != n), null != this._scene) {
                for (i = this._globalManagers.length - 1; i >= 0; i--) this._globalManagers[i].enabled && this._globalManagers[i].update();

                this._scene.update(), null != this._nextScene && (this._scene.end(), this._scene = this._nextScene, this._nextScene = null, this.onSceneChanged(), this._scene.begin());
              }

              return this.startDebugDraw(), [2];
            });
          });
        }, e.paused = !1, e.debugRenderEndabled = !1, e;
      }();

      t.Core = e;
    }(es || (es = {})), function (t) {
      var e;
      !function (t) {
        t[t.error = 0] = "error", t[t.warn = 1] = "warn", t[t.log = 2] = "log", t[t.info = 3] = "info", t[t.trace = 4] = "trace";
      }(e = t.LogType || (t.LogType = {}));

      var n = function () {
        function t() {}

        return t.warnIf = function (t, n) {
          for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];

          t && this.log(e.warn, n, i);
        }, t.warn = function (t) {
          for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];

          this.log(e.warn, t, n);
        }, t.error = function (t) {
          for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];

          this.log(e.error, t, n);
        }, t.log = function (t, n) {
          for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];

          switch (t) {
            case e.error:
              console.error(t + ": " + StringUtils.format(n, i));
              break;

            case e.warn:
              console.warn(t + ": " + StringUtils.format(n, i));
              break;

            case e.log:
              console.log(t + ": " + StringUtils.format(n, i));
              break;

            case e.info:
              console.info(t + ": " + StringUtils.format(n, i));
              break;

            case e.trace:
              console.trace(t + ": " + StringUtils.format(n, i));
              break;

            default:
              throw new Error("argument out of range");
          }
        }, t;
      }();

      t.Debug = n;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {}

        return t.debugText = 16777215, t.colliderBounds = 5033164.5, t.colliderEdge = 9109504, t.colliderPosition = 16776960, t.colliderCenter = 16711680, t.renderableBounds = 16776960, t.renderableCenter = 10040012, t.verletParticle = 14431326, t.verletConstraintEdge = 4406838, t;
      }();

      t.DebugDefault = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {}

        return t.fail = function (t) {
          void 0 === t && (t = null);

          for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];

          null == t ? console.assert(!1) : console.assert(!1, StringUtils.format(t, e));
        }, t.isTrue = function (t, e) {
          void 0 === e && (e = null);

          for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];

          t || (null == e ? this.fail() : this.fail(e, n));
        }, t.isFalse = function (t, e) {
          void 0 === e && (e = null);

          for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];

          null == e ? this.isTrue(!t) : this.isTrue(!t, e, n);
        }, t.isNull = function (t, e) {
          void 0 === e && (e = null);

          for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];

          null == e ? this.isTrue(null == t) : this.isTrue(null == t, e, n);
        }, t.isNotNull = function (t, e) {
          void 0 === e && (e = null);

          for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];

          null == e ? this.isTrue(null != t) : this.isTrue(null != t, e, n);
        }, t.areEqual = function (t, e, n) {
          for (var i = [], r = 3; r < arguments.length; r++) i[r - 3] = arguments[r];

          t != e && this.fail(n, i);
        }, t.areNotEqual = function (t, e, n) {
          for (var i = [], r = 3; r < arguments.length; r++) i[r - 3] = arguments[r];

          t == e && this.fail(n, i);
        }, t;
      }();

      t.Insist = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {
          this._enabled = !0, this._updateOrder = 0, this.id = t._idGenerator++;
        }

        return Object.defineProperty(t.prototype, "transform", {
          get: function () {
            return this.entity.transform;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "enabled", {
          get: function () {
            return this.entity ? this.entity.enabled && this._enabled : this._enabled;
          },
          set: function (t) {
            this.setEnabled(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "updateOrder", {
          get: function () {
            return this._updateOrder;
          },
          set: function (t) {
            this.setUpdateOrder(t);
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.initialize = function () {}, t.prototype.onAddedToEntity = function () {}, t.prototype.onRemovedFromEntity = function () {}, t.prototype.onEntityTransformChanged = function (t) {}, t.prototype.debugRender = function (t) {}, t.prototype.onEnabled = function () {}, t.prototype.onDisabled = function () {}, t.prototype.setEnabled = function (t) {
          return this._enabled != t && (this._enabled = t, this._enabled ? this.onEnabled() : this.onDisabled()), this;
        }, t.prototype.setUpdateOrder = function (t) {
          return this._updateOrder != t && (this._updateOrder = t), this;
        }, t._idGenerator = 0, t;
      }();

      t.Component = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e(t, n) {
          this.index_ = 0, this.index_ = void 0 !== n ? e.INDEX++ : n, this.type_ = t;
        }

        return e.prototype.getName = function () {
          return t.getClassName(this.type_);
        }, e.prototype.getIndex = function () {
          return this.index_;
        }, e.prototype.toString = function () {
          return "ComponentType[" + t.getClassName(e) + "] (" + this.index_ + ")";
        }, e.INDEX = 0, e;
      }();

      t.ComponentType = e;
    }(es || (es = {})), function (t) {
      !function (t) {
        t[t.sceneChanged = 0] = "sceneChanged", t[t.frameUpdated = 1] = "frameUpdated", t[t.renderChanged = 2] = "renderChanged";
      }(t.CoreEvents || (t.CoreEvents = {}));
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {}

        return t.prototype.compare = function (t, e) {
          var n = t.updateOrder - e.updateOrder;
          return 0 == n && (n = t.id - e.id), n;
        }, t;
      }();

      t.EntityComparer = e;

      var n = function () {
        function n(e, n) {
          this.updateInterval = 1, this._tag = 0, this._enabled = !0, this._updateOrder = 0, this.components = new t.ComponentList(this), this.transform = new t.Transform(this), this.componentBits = new t.Bits(), this.name = e, this.id = n;
        }

        return Object.defineProperty(n.prototype, "isDestroyed", {
          get: function () {
            return this._isDestroyed;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "tag", {
          get: function () {
            return this._tag;
          },
          set: function (t) {
            this.setTag(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "enabled", {
          get: function () {
            return this._enabled;
          },
          set: function (t) {
            this.setEnabled(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "updateOrder", {
          get: function () {
            return this._updateOrder;
          },
          set: function (t) {
            this.setUpdateOrder(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "parent", {
          get: function () {
            return this.transform.parent;
          },
          set: function (t) {
            this.transform.setParent(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "childCount", {
          get: function () {
            return this.transform.childCount;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "position", {
          get: function () {
            return this.transform.position;
          },
          set: function (t) {
            this.transform.setPosition(t.x, t.y);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "localPosition", {
          get: function () {
            return this.transform.localPosition;
          },
          set: function (t) {
            this.transform.setLocalPosition(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "rotation", {
          get: function () {
            return this.transform.rotation;
          },
          set: function (t) {
            this.transform.setRotation(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "rotationDegrees", {
          get: function () {
            return this.transform.rotationDegrees;
          },
          set: function (t) {
            this.transform.setRotationDegrees(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "localRotation", {
          get: function () {
            return this.transform.localRotation;
          },
          set: function (t) {
            this.transform.setLocalRotation(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "localRotationDegrees", {
          get: function () {
            return this.transform.localRotationDegrees;
          },
          set: function (t) {
            this.transform.setLocalRotationDegrees(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "scale", {
          get: function () {
            return this.transform.scale;
          },
          set: function (t) {
            this.transform.setScale(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "localScale", {
          get: function () {
            return this.transform.localScale;
          },
          set: function (t) {
            this.transform.setLocalScale(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "worldInverseTransform", {
          get: function () {
            return this.transform.worldInverseTransform;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "localToWorldTransform", {
          get: function () {
            return this.transform.localToWorldTransform;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "worldToLocalTransform", {
          get: function () {
            return this.transform.worldToLocalTransform;
          },
          enumerable: !0,
          configurable: !0
        }), n.prototype.onTransformChanged = function (t) {
          this.components.onEntityTransformChanged(t);
        }, n.prototype.setParent = function (e) {
          return e instanceof t.Transform ? this.transform.setParent(e) : e instanceof n && this.transform.setParent(e.transform), this;
        }, n.prototype.setPosition = function (t, e) {
          return this.transform.setPosition(t, e), this;
        }, n.prototype.setLocalPosition = function (t) {
          return this.transform.setLocalPosition(t), this;
        }, n.prototype.setRotation = function (t) {
          return this.transform.setRotation(t), this;
        }, n.prototype.setRotationDegrees = function (t) {
          return this.transform.setRotationDegrees(t), this;
        }, n.prototype.setLocalRotation = function (t) {
          return this.transform.setLocalRotation(t), this;
        }, n.prototype.setLocalRotationDegrees = function (t) {
          return this.transform.setLocalRotationDegrees(t), this;
        }, n.prototype.setScale = function (e) {
          return e instanceof t.Vector2 ? this.transform.setScale(e) : this.transform.setScale(new t.Vector2(e, e)), this;
        }, n.prototype.setLocalScale = function (e) {
          return e instanceof t.Vector2 ? this.transform.setLocalScale(e) : this.transform.setLocalScale(new t.Vector2(e, e)), this;
        }, n.prototype.setTag = function (t) {
          return this._tag != t && (this.scene && this.scene.entities.removeFromTagList(this), this._tag = t, this.scene && this.scene.entities.addToTagList(this)), this;
        }, n.prototype.setEnabled = function (t) {
          return this._enabled != t && (this._enabled = t, this._enabled ? this.components.onEntityEnabled() : this.components.onEntityDisabled()), this;
        }, n.prototype.setUpdateOrder = function (t) {
          if (this._updateOrder != t) return this._updateOrder = t, this.scene && (this.scene.entities.markEntityListUnsorted(), this.scene.entities.markTagUnsorted(this.tag)), this;
        }, n.prototype.destroy = function () {
          this._isDestroyed = !0, this.scene.identifierPool.checkIn(this.id), this.scene.entities.remove(this), this.transform.parent = null;

          for (var t = this.transform.childCount - 1; t >= 0; t--) {
            this.transform.getChild(t).entity.destroy();
          }
        }, n.prototype.detachFromScene = function () {
          this.scene.entities.remove(this), this.components.deregisterAllComponents();

          for (var t = 0; t < this.transform.childCount; t++) this.transform.getChild(t).entity.detachFromScene();
        }, n.prototype.attachToScene = function (t) {
          this.scene = t, t.entities.add(this), this.components.registerAllComponents();

          for (var e = 0; e < this.transform.childCount; e++) this.transform.getChild(e).entity.attachToScene(t);
        }, n.prototype.onAddedToScene = function () {}, n.prototype.onRemovedFromScene = function () {
          this._isDestroyed && this.components.removeAllComponents();
        }, n.prototype.update = function () {
          this.components.update();
        }, n.prototype.debugRender = function (t) {
          t && this.components.debugRender(t);
        }, n.prototype.createComponent = function (t) {
          var e = new t();
          return this.addComponent(e), e;
        }, n.prototype.addComponent = function (t) {
          return t.entity = this, this.components.add(t), t.initialize(), t;
        }, n.prototype.getComponent = function (t) {
          return this.components.getComponent(t, !1);
        }, n.prototype.getComponentInScene = function (t) {
          return this.components.getComponent(t, !0);
        }, n.prototype.tryGetComponent = function (t, e) {
          return e.value = this.components.getComponent(t, !1), null != e.value;
        }, n.prototype.hasComponent = function (t) {
          return null != this.components.getComponent(t, !1);
        }, n.prototype.getOrCreateComponent = function (t) {
          var e = this.components.getComponent(t, !0);
          return e || (e = this.addComponent(new t())), e;
        }, n.prototype.getComponents = function (t, e) {
          return this.components.getComponents(t, e);
        }, n.prototype.removeComponent = function (t) {
          this.components.remove(t);
        }, n.prototype.removeComponentForType = function (t) {
          var e = this.getComponent(t);
          return !!e && (this.removeComponent(e), !0);
        }, n.prototype.removeAllComponents = function () {
          for (var t = 0; t < this.components.count; t++) this.removeComponent(this.components.buffer[t]);
        }, n.prototype.tweenPositionTo = function (e, n) {
          void 0 === n && (n = .3);
          var i = t.Pool.obtain(t.TransformVector2Tween);
          return i.setTargetAndType(this.transform, t.TransformTargetType.position), i.initialize(i, e, n), i;
        }, n.prototype.tweenLocalPositionTo = function (e, n) {
          void 0 === n && (n = .3);
          var i = t.Pool.obtain(t.TransformVector2Tween);
          return i.setTargetAndType(this.transform, t.TransformTargetType.localPosition), i.initialize(i, e, n), i;
        }, n.prototype.tweenScaleTo = function (e, n) {
          if (void 0 === n && (n = .3), "number" == typeof e) return this.tweenScaleTo(new t.Vector2(e, e), n);
          var i = t.Pool.obtain(t.TransformVector2Tween);
          return i.setTargetAndType(this.transform, t.TransformTargetType.scale), i.initialize(i, e, n), i;
        }, n.prototype.tweenLocalScaleTo = function (e, n) {
          if (void 0 === n && (n = .3), "number" == typeof e) return this.tweenLocalScaleTo(new t.Vector2(e, e), n);
          var i = t.Pool.obtain(t.TransformVector2Tween);
          return i.setTargetAndType(this.transform, t.TransformTargetType.localScale), i.initialize(i, e, n), i;
        }, n.prototype.tweenRotationDegreesTo = function (e, n) {
          void 0 === n && (n = .3);
          var i = t.Pool.obtain(t.TransformVector2Tween);
          return i.setTargetAndType(this.transform, t.TransformTargetType.rotationDegrees), i.initialize(i, new t.Vector2(e, e), n), i;
        }, n.prototype.tweenLocalRotationDegreesTo = function (e, n) {
          void 0 === n && (n = .3);
          var i = t.Pool.obtain(t.TransformVector2Tween);
          return i.setTargetAndType(this.transform, t.TransformTargetType.localRotationDegrees), i.initialize(i, new t.Vector2(e, e), n), i;
        }, n.prototype.compareTo = function (t) {
          var e = this._updateOrder - t._updateOrder;
          return 0 == e && (e = this.id - t.id), e;
        }, n.prototype.equals = function (t) {
          return 0 == this.compareTo(t);
        }, n.prototype.toString = function () {
          return "[Entity: name: " + this.name + ", tag: " + this.tag + ", enabled: " + this.enabled + ", depth: " + this.updateOrder + "]";
        }, n.entityComparer = new e(), n;
      }();

      t.Entity = n;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e(t, e) {
          void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = 0, this.y = 0, this.x = t, this.y = e;
        }

        return Object.defineProperty(e, "zero", {
          get: function () {
            return new e(0, 0);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "one", {
          get: function () {
            return new e(1, 1);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "unitX", {
          get: function () {
            return new e(1, 0);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "unitY", {
          get: function () {
            return new e(0, 1);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "up", {
          get: function () {
            return new e(0, -1);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "down", {
          get: function () {
            return new e(0, 1);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "left", {
          get: function () {
            return new e(-1, 0);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "right", {
          get: function () {
            return new e(1, 0);
          },
          enumerable: !0,
          configurable: !0
        }), e.add = function (t, n) {
          var i = e.zero;
          return i.x = t.x + n.x, i.y = t.y + n.y, i;
        }, e.divide = function (t, n) {
          var i = e.zero;
          return i.x = t.x / n.x, i.y = t.y / n.y, i;
        }, e.divideScaler = function (t, n) {
          var i = e.zero;
          return i.x = t.x / n, i.y = t.y / n, i;
        }, e.sqrDistance = function (t, e) {
          return Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2);
        }, e.clamp = function (n, i, r) {
          return new e(t.MathHelper.clamp(n.x, i.x, r.x), t.MathHelper.clamp(n.y, i.y, r.y));
        }, e.lerp = function (n, i, r) {
          return new e(t.MathHelper.lerp(n.x, i.x, r), t.MathHelper.lerp(n.y, i.y, r));
        }, e.lerpPrecise = function (n, i, r) {
          return new e(t.MathHelper.lerpPrecise(n.x, i.x, r), t.MathHelper.lerpPrecise(n.y, i.y, r));
        }, e.transform = function (t, n) {
          return new e(t.x * n.m11 + t.y * n.m21 + n.m31, t.x * n.m12 + t.y * n.m22 + n.m32);
        }, e.transformNormal = function (t, n) {
          return new e(t.x * n.m11 + t.y * n.m21, t.x * n.m12 + t.y * n.m22);
        }, e.distance = function (t, e) {
          return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
        }, e.angle = function (e, n) {
          return e = e.normalize(), n = n.normalize(), Math.acos(t.MathHelper.clamp(e.dot(n), -1, 1)) * t.MathHelper.Rad2Deg;
        }, e.negate = function (t) {
          return t.x = -t.x, t.y = -t.y, t;
        }, e.reflect = function (e, n) {
          var i = t.Vector2.zero,
              r = 2 * (e.x * n.x + e.y * n.y);
          return i.x = e.x - n.x * r, i.y = e.y - n.y * r, i;
        }, e.smoothStep = function (n, i, r) {
          return new e(t.MathHelper.smoothStep(n.x, i.x, r), t.MathHelper.smoothStep(n.y, i.y, r));
        }, e.prototype.setTo = function (t, e) {
          this.x = t, this.y = e;
        }, e.prototype.negate = function () {
          return this.scale(-1);
        }, e.prototype.add = function (t) {
          return new e(this.x + t.x, this.y + t.y);
        }, e.prototype.addEqual = function (t) {
          return this.x += t.x, this.y += t.y, this;
        }, e.prototype.divide = function (t) {
          return new e(this.x / t.x, this.y / t.y);
        }, e.prototype.divideScaler = function (t) {
          return new e(this.x / t, this.y / t);
        }, e.prototype.multiply = function (t) {
          return new e(t.x * this.x, t.y * this.y);
        }, e.prototype.multiplyScaler = function (t) {
          return this.x *= t, this.y *= t, this;
        }, e.prototype.sub = function (t) {
          return new e(this.x - t.x, this.y - t.y);
        }, e.prototype.subEqual = function (t) {
          return this.x -= t.x, this.y -= t.y, this;
        }, e.prototype.dot = function (t) {
          return this.x * t.x + this.y * t.y;
        }, e.prototype.scale = function (t) {
          return new e(this.x * t, this.y * t);
        }, e.prototype.scaleEqual = function (t) {
          return this.x *= t, this.y *= t, this;
        }, e.prototype.transform = function (t) {
          return new e(this.x * t.m11 + this.y * t.m21 + t.m31, this.x * t.m12 + this.y * t.m22 + t.m32);
        }, e.prototype.normalize = function () {
          var t = this.distance();
          return t > 0 ? new e(this.x / t, this.y / t) : new e(0, 1);
        }, e.prototype.normalizeEqual = function () {
          var t = this.distance();
          return t > 0 ? (this.setTo(this.x / t, this.y / t), this) : (this.setTo(0, 1), this);
        }, e.prototype.magnitude = function () {
          return this.distance();
        }, e.prototype.distance = function (t) {
          return t || (t = e.zero), Math.sqrt(Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2));
        }, e.prototype.lengthSquared = function () {
          return this.x * this.x + this.y * this.y;
        }, e.prototype.round = function () {
          return new e(Math.round(this.x), Math.round(this.y));
        }, e.prototype.angleBetween = function (e, n) {
          var i = e.sub(this),
              r = n.sub(this);
          return t.Vector2Ext.angle(i, r);
        }, e.prototype.equals = function (t, e) {
          return void 0 === e && (e = .001), Math.abs(this.x - t.x) <= e && Math.abs(this.y - t.y) <= e;
        }, e.prototype.isValid = function () {
          return t.MathHelper.isValid(this.x) && t.MathHelper.isValid(this.y);
        }, e.min = function (t, n) {
          return new e(t.x < n.x ? t.x : n.x, t.y < n.y ? t.y : n.y);
        }, e.max = function (t, n) {
          return new e(t.x > n.x ? t.x : n.x, t.y > n.y ? t.y : n.y);
        }, e.hermite = function (n, i, r, o, s) {
          return new e(t.MathHelper.hermite(n.x, i.x, r.x, o.x, s), t.MathHelper.hermite(n.y, i.y, r.y, o.y, s));
        }, e.unsignedAngle = function (e, n, i) {
          void 0 === i && (i = !0), e.normalizeEqual(), n.normalizeEqual();
          var r = Math.acos(t.MathHelper.clamp(e.dot(n), -1, 1)) * t.MathHelper.Rad2Deg;
          return i ? Math.round(r) : r;
        }, e.prototype.clone = function () {
          return new e(this.x, this.y);
        }, e;
      }();

      t.Vector2 = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {
          this._sceneComponents = [], this._renderers = [], this.entities = new t.EntityList(this), this.renderableComponents = new t.RenderableComponentList(), this.entityProcessors = new t.EntityProcessorList(), this.identifierPool = new t.IdentifierPool(), this.initialize();
        }

        return e.prototype.initialize = function () {}, e.prototype.onStart = function () {}, e.prototype.unload = function () {}, e.prototype.begin = function () {
          0 == this._renderers.length && this.addRenderer(new t.DefaultRenderer()), t.Physics.reset(), null != this.entityProcessors && this.entityProcessors.begin(), this._didSceneBegin = !0, this.onStart();
        }, e.prototype.end = function () {
          this._didSceneBegin = !1;

          for (var e = 0; e < this._renderers.length; e++) this._renderers[e].unload();

          this.entities.removeAllEntities();

          for (e = 0; e < this._sceneComponents.length; e++) this._sceneComponents[e].onRemovedFromScene();

          this._sceneComponents.length = 0, this.camera = null, t.Physics.clear(), this.entityProcessors && this.entityProcessors.end(), this.unload();
        }, e.prototype.update = function () {
          this.entities.updateLists();

          for (var t = this._sceneComponents.length - 1; t >= 0; t--) this._sceneComponents[t].enabled && this._sceneComponents[t].update();

          null != this.entityProcessors && this.entityProcessors.update(), this.entities.update(), null != this.entityProcessors && this.entityProcessors.lateUpdate(), this.renderableComponents.updateLists(), this.render();
        }, e.prototype.render = function () {
          for (var t = 0; t < this._renderers.length; t++) this._renderers[t].render(this);
        }, e.prototype.addRenderer = function (t) {
          return this._renderers.push(t), this._renderers.sort(function (t, e) {
            return t.renderOrder - e.renderOrder;
          }), t.onAddedToScene(this), t;
        }, e.prototype.getRenderer = function (t) {
          for (var e = 0; e < this._renderers.length; e++) if (this._renderers[e] instanceof t) return this._renderers[e];

          return null;
        }, e.prototype.removeRenderer = function (e) {
          new t.List(this._renderers).remove(e), e.unload();
        }, e.prototype.addSceneComponent = function (t) {
          return t.scene = this, t.onEnabled(), this._sceneComponents.push(t), this._sceneComponents.sort(t.compare), t;
        }, e.prototype.getSceneComponent = function (t) {
          for (var e = 0; e < this._sceneComponents.length; e++) {
            var n = this._sceneComponents[e];
            if (n instanceof t) return n;
          }

          return null;
        }, e.prototype.getOrCreateSceneComponent = function (t) {
          var e = this.getSceneComponent(t);
          return null == e && (e = this.addSceneComponent(new t())), e;
        }, e.prototype.removeSceneComponent = function (e) {
          var n = new t.List(this._sceneComponents);
          t.Insist.isTrue(n.contains(e), "SceneComponent" + e + "??????SceneComponents?????????!"), n.remove(e), e.onRemovedFromScene();
        }, e.prototype.createEntity = function (e) {
          var n = new t.Entity(e, this.identifierPool.checkOut());
          return this.addEntity(n);
        }, e.prototype.addEntity = function (e) {
          t.Insist.isFalse(new t.List(this.entities.buffer).contains(e), "?????????????????????????????????????????????: " + e), this.entities.add(e), e.scene = this;

          for (var n = 0; n < e.transform.childCount; n++) this.addEntity(e.transform.getChild(n).entity);

          return e;
        }, e.prototype.destroyAllEntities = function () {
          for (var t = 0; t < this.entities.count; t++) this.entities.buffer[t].destroy();
        }, e.prototype.findEntity = function (t) {
          return this.entities.findEntity(t);
        }, e.prototype.findEntityById = function (t) {
          return this.entities.findEntityById(t);
        }, e.prototype.findEntitiesWithTag = function (t) {
          return this.entities.entitiesWithTag(t);
        }, e.prototype.findEntityWithTag = function (t) {
          return this.entities.entityWithTag(t);
        }, e.prototype.findComponentOfType = function (t) {
          return this.entities.findComponentOfType(t);
        }, e.prototype.findComponentsOfType = function (t) {
          return this.entities.findComponentsOfType(t);
        }, e.prototype.findEntitiesOfComponent = function () {
          for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];

          return (t = this.entities).findEntitesOfComponent.apply(t, __spread(e));
        }, e.prototype.addEntityProcessor = function (t) {
          return t.scene = this, this.entityProcessors.add(t), t;
        }, e.prototype.removeEntityProcessor = function (t) {
          this.entityProcessors.remove(t);
        }, e.prototype.getEntityProcessor = function (t) {
          return this.entityProcessors.getProcessor(t);
        }, e;
      }();

      t.Scene = e;
    }(es || (es = {})), function (t) {
      var e, n;
      !function (t) {
        t[t.position = 0] = "position", t[t.scale = 1] = "scale", t[t.rotation = 2] = "rotation";
      }(e = t.ComponentTransform || (t.ComponentTransform = {})), function (t) {
        t[t.clean = 0] = "clean", t[t.positionDirty = 1] = "positionDirty", t[t.scaleDirty = 2] = "scaleDirty", t[t.rotationDirty = 4] = "rotationDirty";
      }(n = t.DirtyType || (t.DirtyType = {}));

      var i = function () {
        function i(e) {
          this._localTransform = t.Matrix2D.identity, this._worldTransform = t.Matrix2D.identity, this._rotationMatrix = t.Matrix2D.identity, this._translationMatrix = t.Matrix2D.identity, this._scaleMatrix = t.Matrix2D.identity, this._children = [], this._worldToLocalTransform = t.Matrix2D.identity, this._worldInverseTransform = t.Matrix2D.identity, this._position = t.Vector2.zero, this._scale = t.Vector2.one, this._rotation = 0, this._localPosition = t.Vector2.zero, this._localScale = t.Vector2.one, this._localRotation = 0, this.entity = e, this.scale = this._localScale = t.Vector2.one;
        }

        return Object.defineProperty(i.prototype, "childCount", {
          get: function () {
            return this._children.length;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(i.prototype, "rotationDegrees", {
          get: function () {
            return t.MathHelper.toDegrees(this._rotation);
          },
          set: function (e) {
            this.setRotation(t.MathHelper.toRadians(e));
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(i.prototype, "localRotationDegrees", {
          get: function () {
            return t.MathHelper.toDegrees(this._localRotation);
          },
          set: function (e) {
            this.localRotation = t.MathHelper.toRadians(e);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(i.prototype, "localToWorldTransform", {
          get: function () {
            return this.updateTransform(), this._worldTransform;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(i.prototype, "parent", {
          get: function () {
            return this._parent;
          },
          set: function (t) {
            this.setParent(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(i.prototype, "worldToLocalTransform", {
          get: function () {
            return this._worldToLocalDirty && (null == this.parent ? this._worldToLocalTransform = t.Matrix2D.identity : (this.parent.updateTransform(), this._worldToLocalTransform = t.Matrix2D.invert(this.parent._worldTransform)), this._worldToLocalDirty = !1), this._worldToLocalTransform;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(i.prototype, "worldInverseTransform", {
          get: function () {
            return this.updateTransform(), this._worldInverseDirty && (this._worldInverseTransform = t.Matrix2D.invert(this._worldTransform), this._worldInverseDirty = !1), this._worldInverseTransform;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(i.prototype, "position", {
          get: function () {
            return this.updateTransform(), this._positionDirty && (null == this.parent ? this._position = this._localPosition : (this.parent.updateTransform(), t.Vector2Ext.transformR(this._localPosition, this.parent._worldTransform, this._position)), this._positionDirty = !1), this._position;
          },
          set: function (t) {
            this.setPosition(t.x, t.y);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(i.prototype, "scale", {
          get: function () {
            return this.updateTransform(), this._scale;
          },
          set: function (t) {
            this.setScale(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(i.prototype, "rotation", {
          get: function () {
            return this.updateTransform(), this._rotation;
          },
          set: function (t) {
            this.setRotation(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(i.prototype, "localPosition", {
          get: function () {
            return this.updateTransform(), this._localPosition;
          },
          set: function (t) {
            this.setLocalPosition(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(i.prototype, "localScale", {
          get: function () {
            return this.updateTransform(), this._localScale;
          },
          set: function (t) {
            this.setLocalScale(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(i.prototype, "localRotation", {
          get: function () {
            return this.updateTransform(), this._localRotation;
          },
          set: function (t) {
            this.setLocalRotation(t);
          },
          enumerable: !0,
          configurable: !0
        }), i.prototype.getChild = function (t) {
          return this._children[t];
        }, i.prototype.setParent = function (t) {
          var e = this;
          if (this._parent == t) return this;

          if (null != this._parent) {
            var i = this._parent._children.findIndex(function (t) {
              return t == e;
            });

            -1 != i && this._parent._children.splice(i, 1);
          }

          return null != t && t._children.push(this), this._parent = t, this.setDirty(n.positionDirty), this;
        }, i.prototype.setPosition = function (e, n) {
          var i = new t.Vector2(e, n);
          return i.equals(this._position) ? this : (this._position = i, null != this.parent ? this.localPosition = t.Vector2.transform(this._position, this.worldToLocalTransform) : this.localPosition = i, this._positionDirty = !1, this);
        }, i.prototype.setLocalPosition = function (t) {
          return t.equals(this._localPosition) ? this : (this._localPosition = t, this._localDirty = this._positionDirty = this._localPositionDirty = this._localRotationDirty = this._localScaleDirty = !0, this.setDirty(n.positionDirty), this);
        }, i.prototype.setRotation = function (t) {
          return this._rotation = t, null != this.parent ? this.localRotation = this.parent.rotation + t : this.localRotation = t, this;
        }, i.prototype.setRotationDegrees = function (e) {
          return this.setRotation(t.MathHelper.toRadians(e));
        }, i.prototype.lookAt = function (e) {
          var n = this.position.x > e.x ? -1 : 1,
              i = this.position.sub(e).normalize();
          this.rotation = n * Math.acos(i.dot(t.Vector2.unitY));
        }, i.prototype.setLocalRotation = function (t) {
          return this._localRotation = t, this._localDirty = this._positionDirty = this._localPositionDirty = this._localRotationDirty = this._localScaleDirty = !0, this.setDirty(n.rotationDirty), this;
        }, i.prototype.setLocalRotationDegrees = function (e) {
          return this.setLocalRotation(t.MathHelper.toRadians(e));
        }, i.prototype.setScale = function (e) {
          return this._scale = e, null != this.parent ? this.localScale = t.Vector2.divide(e, this.parent._scale) : this.localScale = e, this;
        }, i.prototype.setLocalScale = function (t) {
          return this._localScale = t, this._localDirty = this._positionDirty = this._localScaleDirty = !0, this.setDirty(n.scaleDirty), this;
        }, i.prototype.roundPosition = function () {
          this.position = t.Vector2Ext.round(this._position);
        }, i.prototype.updateTransform = function () {
          this.hierarchyDirty != n.clean && (null != this.parent && this.parent.updateTransform(), this._localDirty && (this._localPositionDirty && (t.Matrix2D.createTranslation(this._localPosition.x, this._localPosition.y, this._translationMatrix), this._localPositionDirty = !1), this._localRotationDirty && (t.Matrix2D.createRotation(this._localRotation, this._rotationMatrix), this._localRotationDirty = !1), this._localScaleDirty && (t.Matrix2D.createScale(this._localScale.x, this._localScale.y, this._scaleMatrix), this._localScaleDirty = !1), t.Matrix2D.multiply(this._scaleMatrix, this._rotationMatrix, this._localTransform), t.Matrix2D.multiply(this._localTransform, this._translationMatrix, this._localTransform), null == this.parent && (this._worldTransform = this._localTransform, this._rotation = this._localRotation, this._scale = this._localScale, this._worldInverseDirty = !0), this._localDirty = !1), null != this.parent && (t.Matrix2D.multiply(this._localTransform, this.parent._worldTransform, this._worldTransform), this._rotation = this._localRotation + this.parent._rotation, this._scale = this.parent._scale.multiply(this._localScale), this._worldInverseDirty = !0), this._worldToLocalDirty = !0, this._positionDirty = !0, this.hierarchyDirty = n.clean);
        }, i.prototype.setDirty = function (t) {
          if (0 == (this.hierarchyDirty & t)) {
            switch (this.hierarchyDirty |= t, t) {
              case n.positionDirty:
                this.entity.onTransformChanged(e.position);
                break;

              case n.rotationDirty:
                this.entity.onTransformChanged(e.rotation);
                break;

              case n.scaleDirty:
                this.entity.onTransformChanged(e.scale);
            }

            for (var i = 0; i < this._children.length; i++) this._children[i].setDirty(t);
          }
        }, i.prototype.copyFrom = function (t) {
          this._position = t.position.clone(), this._localPosition = t._localPosition.clone(), this._rotation = t._rotation, this._localRotation = t._localRotation, this._scale = t._scale, this._localScale = t._localScale, this.setDirty(n.positionDirty), this.setDirty(n.rotationDirty), this.setDirty(n.scaleDirty);
        }, i.prototype.toString = function () {
          return "[Transform: parent: " + this.parent + ", position: " + this.position + ", rotation: " + this.rotation + ",\n                scale: " + this.scale + ", localPosition: " + this._localPosition + ", localRotation: " + this._localRotation + ",\n                localScale: " + this._localScale + "]";
        }, i;
      }();

      t.Transform = i;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {}

        return t.prototype.compare = function (t, e) {
          return t.updateOrder - e.updateOrder;
        }, t;
      }();

      t.IUpdatableComparer = e, t.isIUpdatable = function (t) {
        return void 0 !== t.update;
      };
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {
          this.updateOrder = 0, this._enabled = !0;
        }

        return Object.defineProperty(t.prototype, "enabled", {
          get: function () {
            return this._enabled;
          },
          set: function (t) {
            this.setEnabled(t);
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.onEnabled = function () {}, t.prototype.onDisabled = function () {}, t.prototype.onRemovedFromScene = function () {}, t.prototype.update = function () {}, t.prototype.setEnabled = function (t) {
          return this._enabled != t && (this._enabled = t, this._enabled ? this.onEnabled() : this.onDisabled()), this;
        }, t.prototype.setUpdateOrder = function (t) {
          return this.updateOrder != t && (this.updateOrder = t), this;
        }, t.prototype.compare = function (t) {
          return this.updateOrder - t.updateOrder;
        }, t;
      }();

      t.SceneComponent = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n() {
          var n = e.call(this) || this;
          return n.shouldUseGravity = !0, n.velocity = t.Vector2.zero, n._mass = 10, n._elasticity = .5, n._friction = .5, n._glue = .01, n._inverseMass = 0, n._inverseMass = 1 / n._mass, n;
        }

        return __extends(n, e), Object.defineProperty(n.prototype, "mass", {
          get: function () {
            return this._mass;
          },
          set: function (t) {
            this.setMass(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "elasticity", {
          get: function () {
            return this._elasticity;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "elasticiy", {
          set: function (t) {
            this.setElasticity(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "friction", {
          get: function () {
            return this._friction;
          },
          set: function (t) {
            this.setFriction(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "glue", {
          get: function () {
            return this._glue;
          },
          set: function (t) {
            this.setGlue(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "isImmovable", {
          get: function () {
            return this._mass < 1e-4;
          },
          enumerable: !0,
          configurable: !0
        }), n.prototype.setMass = function (e) {
          return this._mass = t.MathHelper.clamp(e, 0, Number.MAX_VALUE), this._mass > 1e-4 ? this._inverseMass = 1 / this._mass : this._inverseMass = 0, this;
        }, n.prototype.setElasticity = function (e) {
          return this._elasticity = t.MathHelper.clamp01(e), this;
        }, n.prototype.setFriction = function (e) {
          return this._friction = t.MathHelper.clamp01(e), this;
        }, n.prototype.setGlue = function (e) {
          return this._glue = t.MathHelper.clamp(e, 0, 10), this;
        }, n.prototype.setVelocity = function (t) {
          return this.velocity = t, this;
        }, n.prototype.addImpulse = function (e) {
          this.isImmovable || this.velocity.addEqual(e.scale(this._inverseMass * (t.Time.deltaTime * t.Time.deltaTime) * 1e5));
        }, n.prototype.onAddedToEntity = function () {
          this._collider = null;

          for (var e = 0; e < this.entity.components.buffer.length; e++) {
            var n = this.entity.components.buffer[e];

            if (n instanceof t.Collider) {
              this._collider = n;
              break;
            }
          }

          t.Debug.warnIf(null == this._collider, "ArcadeRigidbody ?????? Collider???ArcadeRigidbody????????????Collider!");
        }, n.prototype.update = function () {
          var e, i;
          if (this.isImmovable || null == this._collider) this.velocity = t.Vector2.zero;else {
            this.shouldUseGravity && this.velocity.addEqual(t.Physics.gravity.scale(t.Time.deltaTime)), this.entity.position = this.entity.position.add(this.velocity.scale(t.Time.deltaTime));
            var r = new t.CollisionResult(),
                o = t.Physics.boxcastBroadphaseExcludingSelf(this._collider, this._collider.bounds, this._collider.collidesWithLayers.value);

            try {
              for (var s = __values(o), a = s.next(); !a.done; a = s.next()) {
                var c = a.value;

                if (c && !c.entity.equals(this.entity) && this._collider.collidesWithNonMotion(c, r)) {
                  var h = c.entity.getComponent(n);
                  if (null != h) this.processOverlap(h, r.minimumTranslationVector), this.processCollision(h, r.minimumTranslationVector);else {
                    this.entity.position = this.entity.position.sub(r.minimumTranslationVector);
                    var u = this.calculateResponseVelocity(this.velocity, r.minimumTranslationVector);
                    this.velocity.addEqual(u);
                  }
                }
              }
            } catch (t) {
              e = {
                error: t
              };
            } finally {
              try {
                a && !a.done && (i = s.return) && i.call(s);
              } finally {
                if (e) throw e.error;
              }
            }
          }
        }, n.prototype.processOverlap = function (t, e) {
          this.isImmovable ? t.entity.position = t.entity.position.add(e) : t.isImmovable ? this.entity.position = this.entity.position.sub(e) : (this.entity.position = this.entity.position.sub(e.scale(.5)), t.entity.position = t.entity.position.add(e.scale(.5)));
        }, n.prototype.processCollision = function (t, e) {
          var n = this.velocity.sub(t.velocity);
          n = this.calculateResponseVelocity(n, e);
          var i = this._inverseMass + t._inverseMass,
              r = this._inverseMass / i,
              o = t._inverseMass / i;
          this.velocity = this.velocity.add(n.scale(r)), t.velocity = t.velocity.sub(n.scale(o));
        }, n.prototype.calculateResponseVelocity = function (e, n) {
          var i = n.scale(-1).normalize(),
              r = e.dot(i),
              o = i.scale(r),
              s = e.sub(o);
          r > 0 && (o = t.Vector2.zero);
          var a = this._friction;
          return s.lengthSquared() < this._glue && (a = 1.01), o.scale(1 + this._elasticity).sub(s.scale(a)).scale(-1);
        }, n;
      }(t.Component);

      t.ArcadeRigidbody = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        return function () {
          this.topLeft = t.Vector2.zero, this.bottomRight = t.Vector2.zero, this.bottomLeft = t.Vector2.zero;
        };
      }(),
          n = function () {
        function t() {
          this.right = !1, this.left = !1, this.above = !1, this.below = !1, this.becameGroundedThisFrame = !1, this.wasGroundedLastFrame = !1, this.movingDownSlope = !1, this.slopeAngle = 0;
        }

        return t.prototype.hasCollision = function () {
          return this.below || this.right || this.left || this.above;
        }, t.prototype.reset = function () {
          this.right = this.left = !1, this.above = this.below = !1, this.becameGroundedThisFrame = this.movingDownSlope = !1, this.slopeAngle = 0;
        }, t.prototype.toString = function () {
          return "[CharacterCollisionState2D] r: " + this.right + ", l: " + this.left + ", a: " + this.above + ", b: " + this.below + ", movingDownSlope: " + this.movingDownSlope + ", angle: " + this.slopeAngle + ", wasGroundedLastFrame: " + this.wasGroundedLastFrame + ", becameGroundedThisFrame: " + this.becameGroundedThisFrame;
        }, t;
      }(),
          i = function () {
        function i(i, r, o, s, a) {
          void 0 === o && (o = -1), void 0 === s && (s = -1), void 0 === a && (a = -1), this.ignoredColliders = new Set(), this.slopeLimit = 30, this.jumpingThreshold = -7, this.totalHorizontalRays = 5, this.totalVerticalRays = 3, this.collisionState = new n(), this.velocity = new t.Vector2(0, 0), this._skinWidth = .02, this.kSkinWidthFloatFudgeFactor = .001, this._raycastOrigins = new e(), this._raycastHit = new t.RaycastHit(), this._isGoingUpSlope = !1, this._isWarpingToGround = !0, this.platformMask = -1, this.triggerMask = -1, this.oneWayPlatformMask = -1, this.rayOriginSkinMutiplier = 4, this.onTriggerEnterEvent = new t.ObservableT(), this.onTriggerExitEvent = new t.ObservableT(), this.onControllerCollidedEvent = new t.ObservableT(), this.platformMask = o, this.oneWayPlatformMask = s, this.triggerMask = a, this.platformMask |= this.oneWayPlatformMask, this._player = i;

          for (var c = null, h = 0; h < this._player.components.buffer.length; h++) {
            var u = this._player.components.buffer[h];

            if (u instanceof t.Collider) {
              c = u;
              break;
            }
          }

          if (c.isTrigger = !1, !(c instanceof t.BoxCollider)) throw new Error("player collider must be box");
          this._collider = c, this.skinWidth = r || .05 * c.width, this._slopeLimitTangent = Math.tan(75 * t.MathHelper.Deg2Rad), this._triggerHelper = new t.ColliderTriggerHelper(this._player);

          for (h = 0; h < 32; h++) 0 == (this.triggerMask & 1 << h) && t.Flags.unsetFlag(this._collider.collidesWithLayers, h);
        }

        return Object.defineProperty(i.prototype, "skinWidth", {
          get: function () {
            return this._skinWidth;
          },
          set: function (t) {
            this._skinWidth = t, this.recalculateDistanceBetweenRays();
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(i.prototype, "isGrounded", {
          get: function () {
            return this.collisionState.below;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(i.prototype, "raycastHitsThisFrame", {
          get: function () {
            return this._raycastHitsThisFrame;
          },
          enumerable: !0,
          configurable: !0
        }), i.prototype.onTriggerEnter = function (t, e) {
          this.onTriggerEnterEvent.notify(t);
        }, i.prototype.onTriggerExit = function (t, e) {
          this.onTriggerExitEvent.notify(t);
        }, i.prototype.move = function (t, e) {
          this.collisionState.wasGroundedLastFrame = this.collisionState.below, this.collisionState.reset(), this._raycastHitsThisFrame = [], this._isGoingUpSlope = !1, this.primeRaycastOrigins(), t.y > 0 && this.collisionState.wasGroundedLastFrame && (t = this.handleVerticalSlope(t)), 0 !== t.x && (t = this.moveHorizontally(t)), 0 !== t.y && (t = this.moveVertically(t)), this._player.setPosition(this._player.position.x + t.x, this._player.position.y + t.y), e > 0 && (this.velocity.x = t.x / e, this.velocity.y = t.y / e), !this.collisionState.wasGroundedLastFrame && this.collisionState.below && (this.collisionState.becameGroundedThisFrame = !0), this._isGoingUpSlope && (this.velocity.y = 0), this._isWarpingToGround || this._triggerHelper.update();

          for (var n = 0; n < this._raycastHitsThisFrame.length; n++) this.onControllerCollidedEvent.notify(this._raycastHitsThisFrame[n]);

          this.ignoreOneWayPlatformsTime > 0 && (this.ignoreOneWayPlatformsTime -= e);
        }, i.prototype.warpToGrounded = function (e) {
          void 0 === e && (e = 1e3), this.ignoreOneWayPlatformsTime = 0, this._isWarpingToGround = !0;
          var n = 0;

          do {
            if (n += 1, this.move(new t.Vector2(0, 1), .02), n > e) break;
          } while (!this.isGrounded);

          this._isWarpingToGround = !1;
        }, i.prototype.recalculateDistanceBetweenRays = function () {
          var t = this._collider.height * Math.abs(this._player.scale.y) - 2 * this._skinWidth;

          this._verticalDistanceBetweenRays = t / (this.totalHorizontalRays - 1);

          var e = this._collider.width * Math.abs(this._player.scale.x) - 2 * this._skinWidth;

          this._horizontalDistanceBetweenRays = e / (this.totalVerticalRays - 1);
        }, i.prototype.primeRaycastOrigins = function () {
          var e = this._collider.bounds;
          this._raycastOrigins.topLeft = new t.Vector2(e.x + this._skinWidth, e.y + this._skinWidth), this._raycastOrigins.bottomRight = new t.Vector2(e.right - this._skinWidth, e.bottom - this._skinWidth), this._raycastOrigins.bottomLeft = new t.Vector2(e.x + this._skinWidth, e.bottom - this._skinWidth);
        }, i.prototype.moveHorizontally = function (e) {
          for (var n = e.x > 0, i = Math.abs(e.x) + this._skinWidth * this.rayOriginSkinMutiplier, r = n ? t.Vector2.right : t.Vector2.left, o = this._raycastOrigins.bottomLeft.y, s = n ? this._raycastOrigins.bottomRight.x - this._skinWidth * (this.rayOriginSkinMutiplier - 1) : this._raycastOrigins.bottomLeft.x + this._skinWidth * (this.rayOriginSkinMutiplier - 1), a = 0; a < this.totalHorizontalRays; a++) {
            var c = new t.Vector2(s, o - a * this._verticalDistanceBetweenRays);

            if (0 === a && this.supportSlopedOneWayPlatforms && this.collisionState.wasGroundedLastFrame ? this._raycastHit = t.Physics.linecast(c, c.add(r.scaleEqual(i)), this.platformMask, this.ignoredColliders) : this._raycastHit = t.Physics.linecast(c, c.add(r.scaleEqual(i)), this.platformMask & ~this.oneWayPlatformMask, this.ignoredColliders), this._raycastHit.collider) {
              if (0 === a && this.handleHorizontalSlope(e, t.Vector2.unsignedAngle(this._raycastHit.normal, t.Vector2.up))) {
                this._raycastHitsThisFrame.push(this._raycastHit);

                break;
              }

              if (e.x = this._raycastHit.point.x - c.x, i = Math.abs(e.x), n ? (e.x -= this._skinWidth * this.rayOriginSkinMutiplier, this.collisionState.right = !0) : (e.x += this._skinWidth * this.rayOriginSkinMutiplier, this.collisionState.left = !0), this._raycastHitsThisFrame.push(this._raycastHit), i < this._skinWidth * this.rayOriginSkinMutiplier + this.kSkinWidthFloatFudgeFactor) break;
            }
          }

          return e;
        }, i.prototype.moveVertically = function (e) {
          var n = e.y < 0,
              i = Math.abs(e.y) + this._skinWidth * this.rayOriginSkinMutiplier,
              r = n ? t.Vector2.up : t.Vector2.down,
              o = this._raycastOrigins.topLeft.x,
              s = n ? this._raycastOrigins.topLeft.y + this._skinWidth * (this.rayOriginSkinMutiplier - 1) : this._raycastOrigins.bottomLeft.y - this._skinWidth * (this.rayOriginSkinMutiplier - 1);
          o += e.x;
          var a = this.platformMask;
          (n || this.ignoreOneWayPlatformsTime > 0) && (a &= ~this.oneWayPlatformMask);

          for (var c = 0; c < this.totalVerticalRays; c++) {
            var h = new t.Vector2(o + c * this._horizontalDistanceBetweenRays, s);
            if (this._raycastHit = t.Physics.linecast(h, h.add(r.scaleEqual(i)), a, this.ignoredColliders), this._raycastHit.collider && (e.y = this._raycastHit.point.y - h.y, i = Math.abs(e.y), n ? (e.y += this._skinWidth * this.rayOriginSkinMutiplier, this.collisionState.above = !0) : (e.y -= this._skinWidth * this.rayOriginSkinMutiplier, this.collisionState.below = !0), this._raycastHitsThisFrame.push(this._raycastHit), !n && e.y < -1e-5 && (this._isGoingUpSlope = !0), i < this._skinWidth * this.rayOriginSkinMutiplier + this.kSkinWidthFloatFudgeFactor)) break;
          }

          return e;
        }, i.prototype.handleVerticalSlope = function (e) {
          var n = .5 * (this._raycastOrigins.bottomLeft.x + this._raycastOrigins.bottomRight.x),
              i = t.Vector2.down,
              r = this._slopeLimitTangent * (this._raycastOrigins.bottomRight.x - n),
              o = new t.Vector2(n, this._raycastOrigins.bottomLeft.y);

          if (this._raycastHit = t.Physics.linecast(o, o.add(i.scaleEqual(r)), this.platformMask, this.ignoredColliders), this._raycastHit.collider) {
            var s = t.Vector2.unsignedAngle(this._raycastHit.normal, t.Vector2.up);
            if (0 === s) return e;

            if (Math.sign(this._raycastHit.normal.x) === Math.sign(e.x)) {
              var a = this.slopeSpeedMultiplier ? this.slopeSpeedMultiplier.lerp(-s) : 1;
              e.y += this._raycastHit.point.y - o.y - this.skinWidth, e.x *= a, this.collisionState.movingDownSlope = !0, this.collisionState.slopeAngle = s;
            }
          }

          return e;
        }, i.prototype.handleHorizontalSlope = function (e, n) {
          if (90 === Math.round(n)) return !1;

          if (n < this.slopeLimit) {
            if (e.y > this.jumpingThreshold) {
              var i = this.slopeSpeedMultiplier ? this.slopeSpeedMultiplier.lerp(n) : 1;
              e.x *= i, e.y = Math.abs(Math.tan(n * t.MathHelper.Deg2Rad) * e.x);
              var r = e.x > 0,
                  o = r ? this._raycastOrigins.bottomRight : this._raycastOrigins.bottomLeft,
                  s = null;
              (s = this.supportSlopedOneWayPlatforms && this.collisionState.wasGroundedLastFrame ? t.Physics.linecast(o, o.add(e), this.platformMask, this.ignoredColliders) : t.Physics.linecast(o, o.add(e), this.platformMask & ~this.oneWayPlatformMask, this.ignoredColliders)).collider && (e.x = s.point.x - o.x, e.y = s.point.y - o.y, r ? e.x -= this._skinWidth : e.x += this._skinWidth), this._isGoingUpSlope = !0, this.collisionState.below = !0;
            }
          } else e.x = 0;

          return !0;
        }, i;
      }();

      t.CharacterController = i;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return e.getITriggerListener = function (e, n) {
          var i, r;

          try {
            for (var o = __values(e.components._components), s = o.next(); !s.done; s = o.next()) {
              var a = s.value;
              t.isITriggerListener(a) && n.push(a);
            }
          } catch (t) {
            i = {
              error: t
            };
          } finally {
            try {
              s && !s.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }

          for (var c in e.components._componentsToAdd) {
            a = e.components._componentsToAdd[c];
            t.isITriggerListener(a) && n.push(a);
          }

          return n;
        }, e;
      }();

      t.TriggerListenerHelper = e, t.isITriggerListener = function (t) {
        return void 0 !== t.onTriggerEnter;
      };
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return __extends(n, e), n.prototype.onAddedToEntity = function () {
          this._triggerHelper = new t.ColliderTriggerHelper(this.entity);
        }, n.prototype.calculateMovement = function (e, n) {
          for (var i, r, o = null, s = 0; s < this.entity.components.buffer.length; s++) {
            if ((c = this.entity.components.buffer[s]) instanceof t.Collider) {
              o = c;
              break;
            }
          }

          if (null == o || null == this._triggerHelper) return !1;
          var a = [];

          for (s = 0; s < this.entity.components.buffer.length; s++) {
            var c;
            (c = this.entity.components.buffer[s]) instanceof t.Collider && a.push(c);
          }

          for (s = 0; s < a.length; s++) {
            var h = a[s];

            if (!h.isTrigger) {
              var u = h.bounds.clone();
              u.x += e.x, u.y += e.y;
              var l = t.Physics.boxcastBroadphaseExcludingSelf(h, u, h.collidesWithLayers.value);

              try {
                for (var p = __values(l), f = p.next(); !f.done; f = p.next()) {
                  var d = f.value;
                  if (d.isTrigger) return;
                  var m = new t.CollisionResult();
                  h.collidesWith(d, e, m) && (e.sub(m.minimumTranslationVector), null != m.collider && (n.collider = m.collider, n.minimumTranslationVector = m.minimumTranslationVector, n.normal = m.normal, n.point = m.point));
                }
              } catch (t) {
                i = {
                  error: t
                };
              } finally {
                try {
                  f && !f.done && (r = p.return) && r.call(p);
                } finally {
                  if (i) throw i.error;
                }
              }
            }
          }

          return t.ListPool.free(t.Collider, a), null != n.collider;
        }, n.prototype.applyMovement = function (e) {
          this.entity.position = t.Vector2.add(this.entity.position, e), this._triggerHelper && this._triggerHelper.update();
        }, n.prototype.move = function (t, e) {
          return this.calculateMovement(t, e), this.applyMovement(t), null != e.collider;
        }, n;
      }(t.Component);

      t.Mover = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t._tempTriggerList = [], t;
        }

        return __extends(n, e), n.prototype.onAddedToEntity = function () {
          for (var e = null, n = 0; n < this.entity.components.buffer.length; n++) {
            var i = this.entity.components.buffer[n];

            if (i instanceof t.Collider) {
              e = i;
              break;
            }
          }

          this._collider = e, t.Debug.warnIf(null == this._collider, "ProjectileMover??????Collider???ProjectilMover????????????Collider!");
        }, n.prototype.move = function (e) {
          var n, i;
          if (null == this._collider) return !1;
          var r = !1;
          this.entity.position = t.Vector2.add(this.entity.position, e);
          var o = t.Physics.boxcastBroadphase(this._collider.bounds, this._collider.collidesWithLayers.value);

          try {
            for (var s = __values(o), a = s.next(); !a.done; a = s.next()) {
              var c = a.value;
              this._collider.overlaps(c) && c.enabled && (r = !0, this.notifyTriggerListeners(this._collider, c));
            }
          } catch (t) {
            n = {
              error: t
            };
          } finally {
            try {
              a && !a.done && (i = s.return) && i.call(s);
            } finally {
              if (n) throw n.error;
            }
          }

          return r;
        }, n.prototype.notifyTriggerListeners = function (e, n) {
          t.TriggerListenerHelper.getITriggerListener(n.entity, this._tempTriggerList);

          for (var i = 0; i < this._tempTriggerList.length; i++) this._tempTriggerList[i].onTriggerEnter(e, n);

          this._tempTriggerList.length = 0, t.TriggerListenerHelper.getITriggerListener(this.entity, this._tempTriggerList);

          for (i = 0; i < this._tempTriggerList.length; i++) this._tempTriggerList[i].onTriggerEnter(n, e);

          this._tempTriggerList.length = 0;
        }, n;
      }(t.Component);

      t.ProjectileMover = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n() {
          var n = null !== e && e.apply(this, arguments) || this;
          return n.castSortOrder = 0, n.isTrigger = !1, n.physicsLayer = new t.Ref(1), n.collidesWithLayers = new t.Ref(t.Physics.allLayers), n.shouldColliderScaleAndRotateWithTransform = !0, n.registeredPhysicsBounds = new t.Rectangle(), n._isPositionDirty = !0, n._isRotationDirty = !0, n._localOffset = t.Vector2.zero, n;
        }

        return __extends(n, e), Object.defineProperty(n.prototype, "absolutePosition", {
          get: function () {
            return t.Vector2.add(this.entity.transform.position, this._localOffset);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "rotation", {
          get: function () {
            return this.shouldColliderScaleAndRotateWithTransform && null != this.entity ? this.entity.transform.rotation : 0;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "bounds", {
          get: function () {
            return (this._isPositionDirty || this._isRotationDirty) && (this.shape.recalculateBounds(this), this._isPositionDirty = this._isRotationDirty = !1), this.shape.bounds;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "localOffset", {
          get: function () {
            return this._localOffset;
          },
          set: function (t) {
            this.setLocalOffset(t);
          },
          enumerable: !0,
          configurable: !0
        }), n.prototype.setLocalOffset = function (t) {
          return this._localOffset.equals(t) || (this.unregisterColliderWithPhysicsSystem(), this._localOffset.setTo(t.x, t.y), this._localOffsetLength = this._localOffset.magnitude(), this._isPositionDirty = !0, this.registerColliderWithPhysicsSystem()), this;
        }, n.prototype.setShouldColliderScaleAndRotateWithTransform = function (t) {
          return this.shouldColliderScaleAndRotateWithTransform = t, this._isPositionDirty = this._isRotationDirty = !0, this;
        }, n.prototype.onAddedToEntity = function () {
          if (this._colliderRequiresAutoSizing) {
            for (var e = null, n = 0; n < this.entity.components.buffer.length; n++) {
              var i = this.entity.components.buffer[n];

              if (i instanceof t.RenderableComponent) {
                e = i;
                break;
              }
            }

            if (null != e) {
              var r = e.bounds.clone(),
                  o = r.width / this.entity.transform.scale.x,
                  s = r.height / this.entity.transform.scale.y;
              this instanceof t.CircleCollider ? (this.radius = .5 * Math.max(o, s), this.localOffset = r.center.sub(this.entity.transform.position)) : this instanceof t.BoxCollider && (this.width = o, this.height = s, this.localOffset = r.center.sub(this.entity.transform.position));
            }
          }

          this._isParentEntityAddedToScene = !0, this.registerColliderWithPhysicsSystem();
        }, n.prototype.onRemovedFromEntity = function () {
          this.unregisterColliderWithPhysicsSystem(), this._isParentEntityAddedToScene = !1;
        }, n.prototype.onEntityTransformChanged = function (e) {
          switch (e) {
            case t.ComponentTransform.position:
            case t.ComponentTransform.scale:
              this._isPositionDirty = !0;
              break;

            case t.ComponentTransform.rotation:
              this._isRotationDirty = !0;
          }

          this._isColliderRegistered && t.Physics.updateCollider(this);
        }, n.prototype.onEnabled = function () {
          this.registerColliderWithPhysicsSystem(), this._isPositionDirty = this._isRotationDirty = !0;
        }, n.prototype.onDisabled = function () {
          this.unregisterColliderWithPhysicsSystem();
        }, n.prototype.registerColliderWithPhysicsSystem = function () {
          this._isParentEntityAddedToScene && !this._isColliderRegistered && (t.Physics.addCollider(this), this._isColliderRegistered = !0);
        }, n.prototype.unregisterColliderWithPhysicsSystem = function () {
          this._isParentEntityAddedToScene && this._isColliderRegistered && t.Physics.removeCollider(this), this._isColliderRegistered = !1;
        }, n.prototype.overlaps = function (t) {
          return this.shape.overlaps(t.shape);
        }, n.prototype.collidesWith = function (e, n, i) {
          void 0 === i && (i = new t.CollisionResult());
          var r = this.entity.position;
          this.entity.position = this.entity.position.add(n);
          var o = this.shape.collidesWithShape(e.shape, i);
          return o && (i.collider = e), this.entity.position = r, o;
        }, n.prototype.collidesWithNonMotion = function (e, n) {
          return void 0 === n && (n = new t.CollisionResult()), this.shape.collidesWithShape(e.shape, n) ? (n.collider = e, !0) : (n.collider = null, !1);
        }, n.prototype.collidesWithAny = function (e, n) {
          var i,
              r,
              o = this.bounds.clone();
          o.x += e.x, o.y += e.y;
          var s = t.Physics.boxcastBroadphaseExcludingSelf(this, o, this.collidesWithLayers.value),
              a = this.shape.position.clone();
          this.shape.position = t.Vector2.add(this.shape.position, e);
          var c = !1;

          try {
            for (var h = __values(s), u = h.next(); !u.done; u = h.next()) {
              var l = u.value;
              l.isTrigger || this.collidesWithNonMotion(l, n) && (e = e.sub(n.minimumTranslationVector), this.shape.position = this.shape.position.sub(n.minimumTranslationVector), c = !0);
            }
          } catch (t) {
            i = {
              error: t
            };
          } finally {
            try {
              u && !u.done && (r = h.return) && r.call(h);
            } finally {
              if (i) throw i.error;
            }
          }

          return this.shape.position = a.clone(), c;
        }, n.prototype.collidesWithAnyNonMotion = function (e) {
          var n, i;
          void 0 === e && (e = new t.CollisionResult());
          var r = t.Physics.boxcastBroadphaseExcludingSelfNonRect(this, this.collidesWithLayers.value);

          try {
            for (var o = __values(r), s = o.next(); !s.done; s = o.next()) {
              var a = s.value;
              if (!a.isTrigger && this.collidesWithNonMotion(a, e)) return !0;
            }
          } catch (t) {
            n = {
              error: t
            };
          } finally {
            try {
              s && !s.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }

          return !1;
        }, n.lateSortOrder = 999, n;
      }(t.Component);

      t.Collider = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n(n, i, r, o) {
          void 0 === n && (n = 0), void 0 === i && (i = 0), void 0 === r && (r = 1), void 0 === o && (o = 1);
          var s = e.call(this) || this;
          return 1 == r && 1 == o ? s._colliderRequiresAutoSizing = !0 : s._localOffset = new t.Vector2(n + r / 2, i + o / 2), s.shape = new t.Box(r, o), s;
        }

        return __extends(n, e), Object.defineProperty(n.prototype, "width", {
          get: function () {
            return this.shape.width;
          },
          set: function (t) {
            this.setWidth(t);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "height", {
          get: function () {
            return this.shape.height;
          },
          set: function (t) {
            this.setHeight(t);
          },
          enumerable: !0,
          configurable: !0
        }), n.prototype.setSize = function (e, n) {
          this._colliderRequiresAutoSizing = !1;
          var i = this.shape;
          return e == i.width && n == i.height || (i.updateBox(e, n), this._isPositionDirty = !0, this.entity && this._isParentEntityAddedToScene && t.Physics.updateCollider(this)), this;
        }, n.prototype.setWidth = function (e) {
          this._colliderRequiresAutoSizing = !1;
          var n = this.shape;
          return e != n.width && (n.updateBox(e, n.height), this._isPositionDirty = !0, null != this.entity && this._isParentEntityAddedToScene && t.Physics.updateCollider(this)), this;
        }, n.prototype.setHeight = function (e) {
          this._colliderRequiresAutoSizing = !1;
          var n = this.shape;
          e != n.height && (n.updateBox(n.width, e), this._isPositionDirty = !0, this.entity && this._isParentEntityAddedToScene && t.Physics.updateCollider(this));
        }, n.prototype.debugRender = function (e) {
          var n = this.shape;
          e.drawHollowRect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height, new t.Color(76, 76, 76, 76), 2), e.end(), e.drawPolygon(this.shape.position, n.points, new t.Color(139, 0, 0, 255), !0, 2), e.end(), e.drawPixel(this.entity.position, new t.Color(255, 255, 0), 4), e.end(), e.drawPixel(t.Vector2.add(this.transform.position, this.shape.center), new t.Color(255, 0, 0), 2), e.end();
        }, n.prototype.toString = function () {
          return "[BoxCollider: bounds: " + this.bounds + "]";
        }, n;
      }(t.Collider);

      t.BoxCollider = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n(n) {
          void 0 === n && (n = 1);
          var i = e.call(this) || this;
          return i.shape = new t.Circle(n), 1 == n && (i._colliderRequiresAutoSizing = !0), i;
        }

        return __extends(n, e), Object.defineProperty(n.prototype, "radius", {
          get: function () {
            return this.shape.radius;
          },
          set: function (t) {
            this.setRadius(t);
          },
          enumerable: !0,
          configurable: !0
        }), n.prototype.setRadius = function (e) {
          this._colliderRequiresAutoSizing = !1;
          var n = this.shape;
          return e != n.radius && (n.radius = e, n._originalRadius = e, this._isPositionDirty = !0, null != this.entity && this._isParentEntityAddedToScene && t.Physics.updateCollider(this)), this;
        }, n.prototype.debugRender = function (e) {
          e.drawHollowRect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height, new t.Color(76, 76, 76, 76), 2), e.end(), e.drawCircle(this.shape.position, this.radius, new t.Color(139, 0, 0), 2), e.end(), e.drawPixel(this.entity.transform.position, new t.Color(255, 255, 0), 4), e.end(), e.drawPixel(this.shape.position, new t.Color(255, 0, 0), 2), e.end();
        }, n.prototype.toString = function () {
          return "[CircleCollider: bounds: " + this.bounds + ", radius: " + this.shape.radius + "]";
        }, n;
      }(t.Collider);

      t.CircleCollider = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n(n) {
          var i = e.call(this) || this;
          n[0] == n[n.length - 1] && (n = n.slice(0, n.length - 1));
          var r = t.Polygon.findPolygonCenter(n);
          return i.setLocalOffset(r), t.Polygon.recenterPolygonVerts(n), i.shape = new t.Polygon(n), i;
        }

        return __extends(n, e), n;
      }(t.Collider);

      t.PolygonCollider = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n() {
          var n = null !== e && e.apply(this, arguments) || this;
          return n._bounds = new t.Rectangle(), n._areBoundsDirty = !0, n.color = t.Color.White, n._renderLayer = 0, n.debugRenderEnabled = !0, n._isVisible = !1, n._localOffset = new t.Vector2(), n;
        }

        return __extends(n, e), n.prototype.getwidth = function () {
          return this.bounds.width;
        }, n.prototype.getheight = function () {
          return this.bounds.height;
        }, n.prototype.getbounds = function () {
          return this._areBoundsDirty && (this._bounds.calculateBounds(this.entity.transform.position, this._localOffset, new t.Vector2(this.getwidth() / 2, this.getheight() / 2), this.entity.transform.scale, this.entity.transform.rotation, this.getwidth(), this.getheight()), this._areBoundsDirty = !1), this._bounds;
        }, Object.defineProperty(n.prototype, "bounds", {
          get: function () {
            return this.getbounds();
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(n.prototype, "renderLayer", {
          get: function () {
            return this._renderLayer;
          },
          set: function (t) {
            this.setRenderLayer(t);
          },
          enumerable: !0,
          configurable: !0
        }), n.prototype.onEntityTransformChanged = function (t) {
          this._areBoundsDirty = !0;
        }, Object.defineProperty(n.prototype, "localOffset", {
          get: function () {
            return this._localOffset;
          },
          set: function (t) {
            this.setLocalOffset(t);
          },
          enumerable: !0,
          configurable: !0
        }), n.prototype.setLocalOffset = function (t) {
          return this._localOffset.equals(t) || (this._localOffset = t, this._areBoundsDirty = !0), this;
        }, Object.defineProperty(n.prototype, "isVisible", {
          get: function () {
            return this._isVisible;
          },
          set: function (t) {
            this._isVisible != t && (this._isVisible = t, this._isVisible ? this.onBecameVisible() : this.onBecameInvisible());
          },
          enumerable: !0,
          configurable: !0
        }), n.prototype.onBecameVisible = function () {}, n.prototype.onBecameInvisible = function () {}, n.prototype.setRenderLayer = function (e) {
          if (e != this._renderLayer) {
            var n = this._renderLayer;
            this._renderLayer = e, null != this.entity && null != this.entity.scene && t.Core.scene.renderableComponents.updateRenderableRenderLayer(this, n, this._renderLayer);
          }

          return this;
        }, n.prototype.isVisibleFromCamera = function (t) {
          return this.isVisible = t.bounds.intersects(this.bounds), this.isVisible;
        }, n.prototype.debugRender = function (e) {
          if (this.debugRenderEnabled) {
            for (var n = null, i = 0; i < this.entity.components.buffer.length; i++) {
              var r = this.entity.components.buffer[i];

              if (r instanceof t.Collider) {
                n = r;
                break;
              }
            }

            null == n && (e.drawHollowRect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height, new t.Color(255, 255, 0)), e.end()), e.drawPixel(t.Vector2.add(this.entity.transform.position, this._localOffset), new t.Color(153, 50, 204), 4), e.end();
          }
        }, n.prototype.tweenColorTo = function (e, n) {
          var i = t.Pool.obtain(t.RenderableColorTween);
          return i.setTarget(this), i.initialize(i, e, n), i;
        }, n;
      }(t.Component);

      t.RenderableComponent = e;
    }(es || (es = {})), function (t) {
      function e(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "string":
            return "" + e;

          case "function":
            return t.getClassName(e);

          default:
            return e.uuid = e.uuid ? e.uuid : t.UUID.randomUUID(), e.uuid;
        }
      }

      var n = function () {
        function t() {
          this.clear();
        }

        return t.prototype.clear = function () {
          this.map_ = {}, this.keys_ = {};
        }, t.prototype.values = function () {
          var t = [],
              e = this.map_;

          for (var n in e) t.push(e[n]);

          return t;
        }, t.prototype.contains = function (t) {
          var e = this.map_;

          for (var n in e) if (t === e[n]) return !0;

          return !1;
        }, t.prototype.containsKey = function (t) {
          return e(t) in this.map_;
        }, t.prototype.containsValue = function (t) {
          var e = this.map_;

          for (var n in e) if (t === e[n]) return !0;

          return !1;
        }, t.prototype.get = function (t) {
          return this.map_[e(t)];
        }, t.prototype.isEmpty = function () {
          return 0 === Object.keys(this.map_).length;
        }, t.prototype.keys = function () {
          var t = this.map_,
              e = [];

          for (var n in t) e.push(t[n]);

          return e;
        }, t.prototype.put = function (t, n) {
          var i = e(t);
          this.map_[i] = n, this.keys_[i] = t;
        }, t.prototype.remove = function (t) {
          var n = this.map_,
              i = e(t),
              r = n[i];
          return delete n[i], delete this.keys_[i], r;
        }, t.prototype.size = function () {
          return Object.keys(this.map_).length;
        }, t;
      }();

      t.HashMap = n;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e(e) {
          this._entities = [], this._startTime = 0, this._endTime = 0, this._useTime = 0, this._matcher = e || t.Matcher.empty(), this.initialize();
        }

        return Object.defineProperty(e.prototype, "scene", {
          get: function () {
            return this._scene;
          },
          set: function (t) {
            this._scene = t, this._entities = [];
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "matcher", {
          get: function () {
            return this._matcher;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "useTime", {
          get: function () {
            return this._useTime;
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.initialize = function () {}, e.prototype.onChanged = function (t) {
          var e = !!this._entities.find(function (e) {
            return e.id == t.id;
          }),
              n = this._matcher.isInterestedEntity(t);

          n && !e ? this.add(t) : !n && e && this.remove(t);
        }, e.prototype.add = function (t) {
          this._entities.find(function (e) {
            return e.id == t.id;
          }) || this._entities.push(t), this.onAdded(t);
        }, e.prototype.onAdded = function (t) {}, e.prototype.remove = function (e) {
          new t.List(this._entities).remove(e), this.onRemoved(e);
        }, e.prototype.onRemoved = function (t) {}, e.prototype.update = function () {
          this.checkProcessing() && (this.begin(), this.process(this._entities));
        }, e.prototype.lateUpdate = function () {
          this.checkProcessing() && (this.lateProcess(this._entities), this.end());
        }, e.prototype.begin = function () {
          t.Core.Instance.debug && (this._startTime = Date.now());
        }, e.prototype.process = function (t) {}, e.prototype.lateProcess = function (t) {}, e.prototype.end = function () {
          t.Core.Instance.debug && (this._endTime = Date.now(), this._useTime = this._endTime - this._startTime);
        }, e.prototype.checkProcessing = function () {
          return !0;
        }, e;
      }();

      t.EntitySystem = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n(t) {
          var n = e.call(this, t) || this;
          return n.delay = 0, n.running = !1, n.acc = 0, n;
        }

        return __extends(n, e), n.prototype.process = function (t) {
          var e = t.length;

          if (0 != e) {
            this.delay = Number.MAX_VALUE;

            for (var n = 0; e > n; n++) {
              var i = t[n];
              this.processDelta(i, this.acc);
              var r = this.getRemainingDelay(i);
              r <= 0 ? this.processExpired(i) : this.offerDelay(r);
            }

            this.acc = 0;
          } else this.stop();
        }, n.prototype.checkProcessing = function () {
          return !!this.running && (this.acc += t.Time.deltaTime, this.acc >= this.delay);
        }, n.prototype.offerDelay = function (t) {
          this.running ? this.delay = Math.min(this.delay, t) : (this.running = !0, this.delay = t);
        }, n.prototype.getInitialTimeDelay = function () {
          return this.delay;
        }, n.prototype.getRemainingTimeUntilProcessing = function () {
          return this.running ? this.delay - this.acc : 0;
        }, n.prototype.isRunning = function () {
          return this.running;
        }, n.prototype.stop = function () {
          this.running = !1, this.acc = 0;
        }, n;
      }(t.EntitySystem);

      t.DelayedIteratingSystem = e;
    }(es || (es = {})), function (t) {
      var e = function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }

        return __extends(e, t), e.prototype.lateProcessEntity = function (t) {}, e.prototype.process = function (t) {
          if (0 != t.length) for (var e = 0, n = t.length; e < n; ++e) {
            var i = t[e];
            this.processEntity(i);
          }
        }, e.prototype.lateProcess = function (t) {
          if (0 != t.length) for (var e = 0, n = t.length; e < n; ++e) {
            var i = t[e];
            this.lateProcessEntity(i);
          }
        }, e;
      }(t.EntitySystem);

      t.EntityProcessingSystem = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n(t, n) {
          var i = e.call(this, t) || this;
          return i.acc = 0, i.interval = 0, i.intervalDelta = 0, i.interval = n, i;
        }

        return __extends(n, e), n.prototype.checkProcessing = function () {
          return this.acc += t.Time.deltaTime, this.acc >= this.interval && (this.acc -= this.interval, this.intervalDelta = this.acc - this.intervalDelta, !0);
        }, n.prototype.getIntervalDelta = function () {
          return this.interval + this.intervalDelta;
        }, n;
      }(t.EntitySystem);

      t.IntervalSystem = e;
    }(es || (es = {})), function (t) {
      var e = function (t) {
        function e(e, n) {
          return t.call(this, e, n) || this;
        }

        return __extends(e, t), e.prototype.process = function (t) {
          var e = this;
          t.forEach(function (t) {
            return e.processEntity(t);
          });
        }, e;
      }(t.IntervalSystem);

      t.IntervalIteratingSystem = e;
    }(es || (es = {})), function (es) {
      var JobSystem = function (_super) {
        function JobSystem(t, e) {
          var n = _super.call(this, t) || this;
          n._threads = e, n._jobs = new Array(e);

          for (var i = 0; i < n._jobs.length; i++) n._jobs[i] = new Job();

          return n._executeStr = JSON.stringify(n.execute, function (t, e) {
            return "function" == typeof e ? e + "" : e;
          }), n;
        }

        return __extends(JobSystem, _super), JobSystem.prototype.process = function (t) {
          for (var e = this, n = t.length & this._threads, i = t.length / this._threads + (0 == n ? 0 : 1), r = function (n) {
            var r = n * i,
                s = r + i;
            s > t.length && (s = t.length);
            var a = o._jobs[n];

            if (a.set(t, r, s, o._executeStr, o), r != s) {
              var c = es.WorkerUtils.makeWorker(o.queueOnThread);
              es.WorkerUtils.workerMessage(c)(a).then(function (t) {
                var n = t;
                e.resetJob(n), c.terminate();
              }).catch(function (t) {
                a.err = t, c.terminate();
              });
            }
          }, o = this, s = 0; s < this._threads; s++) r(s);
        }, JobSystem.prototype.queueOnThread = function () {
          onmessage = function (_a) {
            for (var _b = _a.data, jobId = _b.jobId, message = _b.message, job = message[0], executeFunc = JSON.parse(job.execute, function (k, v) {
              return v.indexOf && v.indexOf("function") > -1 ? eval("(function(){return " + v + " })()") : v;
            }), i = job.from; i < job.to; i++) executeFunc.call(job.context, job.entities[i]);

            postMessage({
              jobId: jobId,
              result: message
            }, null);
          };
        }, JobSystem;
      }(es.EntitySystem);

      es.JobSystem = JobSystem;

      var Job = function () {
        function t() {}

        return t.prototype.set = function (t, e, n, i, r) {
          this.entities = t, this.from = e, this.to = n, this.execute = i, this.context = r;
        }, t;
      }();
    }(es || (es = {})), function (t) {
      var e = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }

        return __extends(e, t), e.prototype.onChanged = function (t) {}, e.prototype.process = function (t) {
          this.begin(), this.end();
        }, e;
      }(t.EntitySystem);

      t.PassiveSystem = e;
    }(es || (es = {})), function (t) {
      var e = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }

        return __extends(e, t), e.prototype.onChanged = function (t) {}, e.prototype.process = function (t) {
          this.begin(), this.processSystem(), this.end();
        }, e;
      }(t.EntitySystem);

      t.ProcessingSystem = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {
          this._bit = {};
        }

        return t.prototype.set = function (t, e) {
          this._bit[t] = e;
        }, t.prototype.get = function (t) {
          var e = this._bit[t];
          return null == e ? 0 : e;
        }, t;
      }();

      t.Bits = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e(t) {
          this._components = [], this._updatableComponents = [], this._componentsToAdd = {}, this._componentsToRemove = {}, this._componentsToAddList = [], this._componentsToRemoveList = [], this._tempBufferList = [], this.componentsByType = new Map(), this.componentsToAddByType = new Map(), this._entity = t;
        }

        return Object.defineProperty(e.prototype, "count", {
          get: function () {
            return this._components.length;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "buffer", {
          get: function () {
            return this._components;
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.markEntityListUnsorted = function () {
          this._isComponentListUnsorted = !0;
        }, e.prototype.add = function (t) {
          this._componentsToAdd[t.id] = t, this._componentsToAddList.push(t), this.addComponentsToAddByType(t);
        }, e.prototype.remove = function (t) {
          if (this._componentsToAdd[t.id]) {
            var e = this._componentsToAddList.findIndex(function (e) {
              return e.id == t.id;
            });

            return -1 != e && this._componentsToAddList.splice(e, 1), delete this._componentsToAdd[t.id], void this.removeComponentsToAddByType(t);
          }

          this._componentsToRemove[t.id] = t, this._componentsToRemoveList.push(t);
        }, e.prototype.removeAllComponents = function () {
          if (this._components.length > 0) for (var t = 0, e = this._components.length; t < e; ++t) this.handleRemove(this._components[t]);
          this.componentsByType.clear(), this.componentsToAddByType.clear(), this._components.length = 0, this._updatableComponents.length = 0, this._componentsToAdd = {}, this._componentsToRemove = {}, this._componentsToAddList.length = 0, this._componentsToRemoveList.length = 0;
        }, e.prototype.deregisterAllComponents = function () {
          if (this._components.length > 0) for (var e = 0, n = this._components.length; e < n; ++e) {
            var i = this._components[e];
            i && (i instanceof t.RenderableComponent && this._entity.scene.renderableComponents.remove(i), t.isIUpdatable(i) && new t.List(this._updatableComponents).remove(i), this.decreaseBits(i), this._entity.scene.entityProcessors.onComponentRemoved(this._entity));
          }
        }, e.prototype.registerAllComponents = function () {
          if (this._components.length > 0) for (var e = 0, n = this._components.length; e < n; ++e) {
            var i = this._components[e];
            i instanceof t.RenderableComponent && this._entity.scene.renderableComponents.remove(i), t.isIUpdatable(i) && this._updatableComponents.push(i), this.addBits(i), this._entity.scene.entityProcessors.onComponentAdded(this._entity);
          }
        }, e.prototype.decreaseBits = function (e) {
          var n = this._entity.componentBits,
              i = t.ComponentTypeManager.getIndexFor(t.TypeUtils.getType(e));
          n.set(i, n.get(i) - 1);
        }, e.prototype.addBits = function (e) {
          var n = this._entity.componentBits,
              i = t.ComponentTypeManager.getIndexFor(t.TypeUtils.getType(e));
          n.set(i, n.get(i) + 1);
        }, e.prototype.updateLists = function () {
          if (this._componentsToRemoveList.length > 0) {
            for (var e = function (t, e) {
              var i = n._componentsToRemoveList[t];
              n.handleRemove(i);

              var r = n._components.findIndex(function (t) {
                return t.id == i.id;
              });

              -1 != r && n._components.splice(r, 1), n.removeComponentsByType(i);
            }, n = this, i = 0, r = this._componentsToRemoveList.length; i < r; ++i) e(i);

            this._componentsToRemove = {}, this._componentsToRemoveList.length = 0;
          }

          if (this._componentsToAddList.length > 0) {
            for (i = 0, r = this._componentsToAddList.length; i < r; ++i) {
              (o = this._componentsToAddList[i]) instanceof t.RenderableComponent && this._entity.scene.renderableComponents.add(o), t.isIUpdatable(o) && this._updatableComponents.push(o), this.addBits(o), this._entity.scene.entityProcessors.onComponentAdded(this._entity), this.addComponentsByType(o), this._components.push(o), this._tempBufferList.push(o);
            }

            this._componentsToAdd = {}, this._componentsToAddList.length = 0, this.componentsToAddByType.clear(), this._isComponentListUnsorted = !0;
          }

          if (this._tempBufferList.length > 0) {
            for (i = 0, r = this._tempBufferList.length; i < r; ++i) {
              var o;
              (o = this._tempBufferList[i]).onAddedToEntity(), o.enabled && o.onEnabled();
            }

            this._tempBufferList.length = 0;
          }
        }, e.prototype.handleRemove = function (e) {
          if (e instanceof t.RenderableComponent && this._entity.scene.renderableComponents.remove(e), t.isIUpdatable(e) && this._updatableComponents.length > 0) {
            var n = this._updatableComponents.findIndex(function (t) {
              return t.id == e.id;
            });

            -1 != n && this._updatableComponents.splice(n, 1);
          }

          this.decreaseBits(e), this._entity.scene.entityProcessors.onComponentRemoved(this._entity), e.onRemovedFromEntity(), e.entity = null;
        }, e.prototype.removeComponentsByType = function (e) {
          var n = this.componentsByType.get(t.TypeUtils.getType(e)),
              i = n.findIndex(function (t) {
            return t.id == e.id;
          });
          -1 != i && n.splice(i, 1);
        }, e.prototype.addComponentsByType = function (e) {
          var n = this.componentsByType.get(t.TypeUtils.getType(e));
          n || (n = []), n.push(e), this.componentsByType.set(t.TypeUtils.getType(e), n);
        }, e.prototype.removeComponentsToAddByType = function (e) {
          var n = this.componentsToAddByType.get(t.TypeUtils.getType(e)),
              i = n.findIndex(function (t) {
            return t.id == e.id;
          });
          -1 != i && n.splice(i, 1);
        }, e.prototype.addComponentsToAddByType = function (e) {
          var n = this.componentsToAddByType.get(t.TypeUtils.getType(e));
          n || (n = []), n.push(e), this.componentsToAddByType.set(t.TypeUtils.getType(e), n);
        }, e.prototype.getComponent = function (t, e) {
          var n = this.componentsByType.get(t);
          if (n && n.length > 0) return n[0];

          if (!e) {
            var i = this.componentsToAddByType.get(t);
            if (i && i.length > 0) return i[0];
          }

          return null;
        }, e.prototype.getComponents = function (t, e) {
          e || (e = []);
          var n = this.componentsByType.get(t);
          n && (e = e.concat(n));
          var i = this.componentsToAddByType.get(t);
          return i && (e = e.concat(i)), e;
        }, e.prototype.update = function () {
          if (this.updateLists(), this._updatableComponents.length > 0) for (var t = 0, e = this._updatableComponents.length; t < e; ++t) {
            var n = this._updatableComponents[t];
            n.enabled && n.update();
          }
        }, e.prototype.onEntityTransformChanged = function (t) {
          if (this._components.length > 0) for (var e = 0, n = this._components.length; e < n; ++e) {
            (i = this._components[e]).enabled && i.onEntityTransformChanged(t);
          }
          if (this._componentsToAddList.length > 0) for (e = 0, n = this._componentsToAddList.length; e < n; ++e) {
            var i;
            (i = this._componentsToAddList[e]).enabled && i.onEntityTransformChanged(t);
          }
        }, e.prototype.onEntityEnabled = function () {
          if (this._components.length > 0) for (var t = 0, e = this._components.length; t < e; t++) this._components[t].onEnabled();
        }, e.prototype.onEntityDisabled = function () {
          if (this._components.length > 0) for (var t = 0, e = this._components.length; t < e; t++) this._components[t].onDisabled();
        }, e.prototype.debugRender = function (t) {
          if (t) for (var e = 0; e < this._components.length; e++) this._components[e].enabled && this._components[e].debugRender(t);
        }, e.compareUpdatableOrder = new t.IUpdatableComparer(), e;
      }();

      t.ComponentList = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {
          this.componentTypeCount_ = 0, this.componentTypes_ = {}, this.types = new t.Bag();
        }

        return e.prototype.getTypeFor = function (e) {
          if ("number" == typeof e) return this.types.get(e);
          var n = this.componentTypes_[t.getClassName(e)];

          if (null == n) {
            var i = this.componentTypeCount_++;
            n = new t.ComponentType(e, i), this.componentTypes_[t.getClassName(e)] = n, this.types.set(i, n);
          }

          return n;
        }, e.prototype.getIndexFor = function (t) {
          return this.getTypeFor(t).getIndex();
        }, e;
      }();

      t.ComponentTypeFactory = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {}

        return t.add = function (t) {
          this._componentTypesMask.has(t) || this._componentTypesMask.set(t, this._componentTypesMask.size);
        }, t.getIndexFor = function (t) {
          var e = -1;
          return this._componentTypesMask.has(t) ? e = this._componentTypesMask.get(t) : (this.add(t), e = this._componentTypesMask.get(t)), e;
        }, t._componentTypesMask = new Map(), t;
      }();

      t.ComponentTypeManager = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e(t) {
          this._entities = [], this._entitiesToAdded = {}, this._entitiesToRemove = {}, this._entitiesToAddedList = [], this._entitiesToRemoveList = [], this._entityDict = new Map(), this._unsortedTags = new Set(), this.scene = t;
        }

        return Object.defineProperty(e.prototype, "count", {
          get: function () {
            return this._entities.length;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "buffer", {
          get: function () {
            return this._entities;
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.markEntityListUnsorted = function () {
          this._isEntityListUnsorted = !0;
        }, e.prototype.markTagUnsorted = function (t) {
          this._unsortedTags.add(t);
        }, e.prototype.add = function (t) {
          this._entitiesToAdded[t.id] = t, this._entitiesToAddedList.push(t);
        }, e.prototype.remove = function (t) {
          if (this._entitiesToAdded[t.id]) {
            var e = this._entitiesToAddedList.findIndex(function (e) {
              return e.id == t.id;
            });

            return -1 != e && this._entitiesToAddedList.splice(e, 1), void delete this._entitiesToAdded[t.id];
          }

          this._entitiesToRemoveList.push(t), this._entitiesToRemove[t.id] || (this._entitiesToRemove[t.id] = t);
        }, e.prototype.removeAllEntities = function () {
          this._unsortedTags.clear(), this._entitiesToAdded = {}, this._entitiesToAddedList.length = 0, this._isEntityListUnsorted = !1, this.updateLists();

          for (var t = 0; t < this._entities.length; t++) this._entities[t]._isDestroyed = !0, this._entities[t].onRemovedFromScene(), this._entities[t].scene = null;

          this._entities.length = 0, this._entityDict.clear();
        }, e.prototype.contains = function (t) {
          return !!this._entitiesToAdded[t.id];
        }, e.prototype.getTagList = function (t) {
          var e = this._entityDict.get(t);

          return e || (e = new Set(), this._entityDict.set(t, e)), e;
        }, e.prototype.addToTagList = function (t) {
          this.getTagList(t.tag).add(t), this._unsortedTags.add(t.tag);
        }, e.prototype.removeFromTagList = function (t) {
          var e = this._entityDict.get(t.tag);

          e && e.delete(t);
        }, e.prototype.update = function () {
          for (var e = 0, n = this._entities.length; e < n; ++e) {
            var i = this._entities[e];
            !i.enabled || 1 != i.updateInterval && t.Time.frameCount % i.updateInterval != 0 || i.update();
          }
        }, e.prototype.updateLists = function () {
          if (this._entitiesToRemoveList.length > 0) {
            for (var t = function (t, n) {
              var i = e._entitiesToRemoveList[t];
              e.removeFromTagList(i);

              var r = e._entities.findIndex(function (t) {
                return t.id == i.id;
              });

              -1 != r && e._entities.splice(r, 1), i.onRemovedFromScene(), i.scene = null, e.scene.entityProcessors.onEntityRemoved(i);
            }, e = this, n = 0, i = this._entitiesToRemoveList.length; n < i; ++n) t(n);

            this._entitiesToRemove = {}, this._entitiesToRemoveList.length = 0;
          }

          if (this._entitiesToAddedList.length > 0) {
            for (n = 0, i = this._entitiesToAddedList.length; n < i; ++n) {
              var r = this._entitiesToAddedList[n];
              this._entities.push(r), r.scene = this.scene, this.addToTagList(r), this.scene.entityProcessors.onEntityAdded(r);
            }

            for (n = 0, i = this._entitiesToAddedList.length; n < i; ++n) {
              (r = this._entitiesToAddedList[n]).onAddedToScene();
            }

            this._entitiesToAdded = {}, this._entitiesToAddedList.length = 0;
          }
        }, e.prototype.findEntity = function (t) {
          if (this._entities.length > 0) for (var e = 0, n = this._entities.length; e < n; ++e) {
            if ((i = this._entities[e]).name == t) return i;
          }
          if (this._entitiesToAddedList.length > 0) for (e = 0, n = this._entitiesToAddedList.length; e < n; ++e) {
            var i;
            if ((i = this._entitiesToAddedList[e]).name == t) return i;
          }
          return null;
        }, e.prototype.findEntityById = function (t) {
          if (this._entities.length > 0) for (var e = 0, n = this._entities.length; e < n; ++e) {
            var i = this._entities[e];
            if (i.id == t) return i;
          }
          return this._entitiesToAdded[t];
        }, e.prototype.entitiesWithTag = function (e) {
          var n,
              i,
              r = this.getTagList(e),
              o = t.ListPool.obtain(t.Entity);
          if (r.size > 0) try {
            for (var s = __values(r), a = s.next(); !a.done; a = s.next()) {
              var c = a.value;
              o.push(c);
            }
          } catch (t) {
            n = {
              error: t
            };
          } finally {
            try {
              a && !a.done && (i = s.return) && i.call(s);
            } finally {
              if (n) throw n.error;
            }
          }
          return o;
        }, e.prototype.entityWithTag = function (t) {
          var e,
              n,
              i = this.getTagList(t);
          if (i.size > 0) try {
            for (var r = __values(i), o = r.next(); !o.done; o = r.next()) {
              return o.value;
            }
          } catch (t) {
            e = {
              error: t
            };
          } finally {
            try {
              o && !o.done && (n = r.return) && n.call(r);
            } finally {
              if (e) throw e.error;
            }
          }
          return null;
        }, e.prototype.findComponentOfType = function (t) {
          if (this._entities.length > 0) for (var e = 0, n = this._entities.length; e < n; e++) {
            if ((i = this._entities[e]).enabled) if (r = i.getComponent(t)) return r;
          }
          if (this._entitiesToAddedList.length > 0) for (e = 0; e < this._entitiesToAddedList.length; e++) {
            var i, r;
            if ((i = this._entitiesToAddedList[e]).enabled) if (r = i.getComponent(t)) return r;
          }
          return null;
        }, e.prototype.findComponentsOfType = function (e) {
          var n = t.ListPool.obtain(e);
          if (this._entities.length > 0) for (var i = 0, r = this._entities.length; i < r; i++) {
            (o = this._entities[i]).enabled && o.getComponents(e, n);
          }
          if (this._entitiesToAddedList.length > 0) for (i = 0, r = this._entitiesToAddedList.length; i < r; i++) {
            var o;
            (o = this._entitiesToAddedList[i]).enabled && o.getComponents(e, n);
          }
          return n;
        }, e.prototype.findEntitesOfComponent = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

          var n = [];
          if (this._entities.length > 0) for (var i = 0, r = this._entities.length; i < r; i++) if (this._entities[i].enabled) {
            var o = !0;
            if (t.length > 0) for (var s = 0, a = t.length; s < a; s++) {
              var c = t[s];

              if (!this._entities[i].hasComponent(c)) {
                o = !1;
                break;
              }
            }
            o && n.push(this._entities[i]);
          }
          if (this._entitiesToAddedList.length > 0) for (i = 0, r = this._entitiesToAddedList.length; i < r; i++) {
            var h = this._entitiesToAddedList[i];

            if (h.enabled) {
              o = !0;
              if (t.length > 0) for (s = 0, a = t.length; s < a; s++) {
                c = t[s];

                if (!h.hasComponent(c)) {
                  o = !1;
                  break;
                }
              }
              o && n.push(h);
            }
          }
          return n;
        }, e;
      }();

      t.EntityList = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {
          this._processors = [];
        }

        return e.prototype.add = function (t) {
          this._processors.push(t);
        }, e.prototype.remove = function (e) {
          new t.List(this._processors).remove(e);
        }, e.prototype.onComponentAdded = function (t) {
          this.notifyEntityChanged(t);
        }, e.prototype.onComponentRemoved = function (t) {
          this.notifyEntityChanged(t);
        }, e.prototype.onEntityAdded = function (t) {
          this.notifyEntityChanged(t);
        }, e.prototype.onEntityRemoved = function (t) {
          this.removeFromProcessors(t);
        }, e.prototype.begin = function () {}, e.prototype.update = function () {
          if (0 != this._processors.length) for (var t = 0, e = this._processors.length; t < e; ++t) this._processors[t].update();
        }, e.prototype.lateUpdate = function () {
          if (0 != this._processors.length) for (var t = 0, e = this._processors.length; t < e; ++t) this._processors[t].lateUpdate();
        }, e.prototype.end = function () {}, e.prototype.getProcessor = function (t) {
          if (0 == this._processors.length) return null;

          for (var e = 0, n = this._processors.length; e < n; ++e) {
            var i = this._processors[e];
            if (i instanceof t) return i;
          }

          return null;
        }, e.prototype.notifyEntityChanged = function (t) {
          if (0 != this._processors.length) for (var e = 0, n = this._processors.length; e < n; ++e) this._processors[e].onChanged(t);
        }, e.prototype.removeFromProcessors = function (t) {
          if (0 != this._processors.length) for (var e = 0, n = this._processors.length; e < n; ++e) this._processors[e].remove(t);
        }, e;
      }();

      t.EntityProcessorList = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {}

        return t.isPrime = function (t) {
          if (0 != (1 & t)) {
            for (var e = Math.sqrt(t), n = 3; n <= e; n += 2) if (0 == (t & n)) return !1;

            return !0;
          }

          return 2 == t;
        }, t.getPrime = function (t) {
          if (t < 0) throw new Error("???????????? min????????????0");

          for (var e = 0; e < this.primes.length; e++) {
            var n = this.primes[e];
            if (n >= t) return n;
          }

          for (e = 1 | t; e < Number.MAX_VALUE; e += 2) if (this.isPrime(e) && (e - 1) % this.hashPrime != 0) return e;

          return t;
        }, t.expandPrime = function (t) {
          var e = 2 * t;
          return e > this.maxPrimeArrayLength && this.maxPrimeArrayLength > t ? this.maxPrimeArrayLength : this.getPrime(e);
        }, t.getHashCode = function (t) {
          var e,
              n = 0;
          if (0 == (e = "object" == typeof t ? JSON.stringify(t) : t.toString()).length) return n;

          for (var i = 0; i < e.length; i++) {
            n = (n << 5) - n + e.charCodeAt(i), n &= n;
          }

          return n;
        }, t.hashCollisionThreshold = 100, t.hashPrime = 101, t.primes = [3, 7, 11, 17, 23, 29, 37, 47, 59, 71, 89, 107, 131, 163, 197, 239, 293, 353, 431, 521, 631, 761, 919, 1103, 1327, 1597, 1931, 2333, 2801, 3371, 4049, 4861, 5839, 7013, 8419, 10103, 12143, 14591, 17519, 21023, 25229, 30293, 36353, 43627, 52361, 62851, 75431, 90523, 108631, 130363, 156437, 187751, 225307, 270371, 324449, 389357, 467237, 560689, 672827, 807403, 968897, 1162687, 1395263, 1674319, 2009191, 2411033, 2893249, 3471899, 4166287, 4999559, 5999471, 7199369], t.maxPrimeArrayLength = 2146435069, t;
      }();

      t.HashHelpers = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {
          this.nextAvailableId_ = 0, this.ids = new t.Bag();
        }

        return e.prototype.checkOut = function () {
          return this.ids.size() > 0 ? this.ids.removeLast() : this.nextAvailableId_++;
        }, e.prototype.checkIn = function (t) {
          this.ids.add(t);
        }, e;
      }();

      t.IdentifierPool = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {
          this.allSet = [], this.exclusionSet = [], this.oneSet = [];
        }

        return e.empty = function () {
          return new e();
        }, e.prototype.getAllSet = function () {
          return this.allSet;
        }, e.prototype.getExclusionSet = function () {
          return this.exclusionSet;
        }, e.prototype.getOneSet = function () {
          return this.oneSet;
        }, e.prototype.isInterestedEntity = function (t) {
          return this.isInterested(t.componentBits);
        }, e.prototype.isInterested = function (e) {
          if (0 != this.allSet.length) for (var n = 0, i = this.allSet.length; n < i; ++n) {
            var r = this.allSet[n];
            if (!e.get(t.ComponentTypeManager.getIndexFor(r))) return !1;
          }
          if (0 != this.exclusionSet.length) for (n = 0, i = this.exclusionSet.length; n < i; ++n) {
            r = this.exclusionSet[n];
            if (e.get(t.ComponentTypeManager.getIndexFor(r))) return !1;
          }
          if (0 != this.oneSet.length) for (n = 0, i = this.oneSet.length; n < i; ++n) {
            r = this.oneSet[n];
            if (e.get(t.ComponentTypeManager.getIndexFor(r))) return !0;
          }
          return !0;
        }, e.prototype.all = function () {
          for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];

          for (var i = 0, r = e.length; i < r; ++i) t = e[i], this.allSet.push(t);

          return this;
        }, e.prototype.exclude = function () {
          for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];

          for (var i = 0, r = e.length; i < r; ++i) t = e[i], this.exclusionSet.push(t);

          return this;
        }, e.prototype.one = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

          for (var n = 0, i = t.length; n < i; ++n) {
            var r = t[n];
            this.oneSet.push(r);
          }

          return this;
        }, e;
      }();

      t.Matcher = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {
          this._components = [], this._componentsByRenderLayer = new Map(), this._unsortedRenderLayers = [], this._componentsNeedSort = !0;
        }

        return Object.defineProperty(e.prototype, "count", {
          get: function () {
            return this._components.length;
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.get = function (t) {
          return this._components[t];
        }, e.prototype.add = function (t) {
          this._components.push(t), this.addToRenderLayerList(t, t.renderLayer);
        }, e.prototype.remove = function (e) {
          new t.List(this._components).remove(e), new t.List(this._componentsByRenderLayer.get(e.renderLayer)).remove(e);
        }, e.prototype.updateRenderableRenderLayer = function (e, n, i) {
          this._componentsByRenderLayer.has(n) && new t.List(this._componentsByRenderLayer.get(n)).contains(e) && (new t.List(this._componentsByRenderLayer.get(n)).remove(e), this.addToRenderLayerList(e, i));
        }, e.prototype.setRenderLayerNeedsComponentSort = function (e) {
          var n = new t.List(this._unsortedRenderLayers);
          n.contains(e) || n.add(e), this._componentsNeedSort = !0;
        }, e.prototype.setNeedsComponentSort = function () {
          this._componentsNeedSort = !0;
        }, e.prototype.addToRenderLayerList = function (e, n) {
          var i = this.componentsWithRenderLayer(n);
          t.Insist.isFalse(!!i.find(function (t) {
            return t == e;
          }), "??????renderLayer????????????????????????"), i.push(e);
          var r = new t.List(this._unsortedRenderLayers);
          r.contains(n) || r.add(n), this._componentsNeedSort = !0;
        }, e.prototype.componentsWithRenderLayer = function (t) {
          return this._componentsByRenderLayer.get(t) || this._componentsByRenderLayer.set(t, []), this._componentsByRenderLayer.get(t);
        }, e.prototype.updateLists = function () {
          if (this._componentsNeedSort && (this._components.sort(function (t, e) {
            return e.renderLayer - t.renderLayer;
          }), this._componentsNeedSort = !1), this._unsortedRenderLayers.length > 0) for (var t = 0, e = this._unsortedRenderLayers.length; t < e; t++) {
            var n = this._componentsByRenderLayer.get(this._unsortedRenderLayers[t]);

            n && n.sort(function (t, e) {
              return e.renderLayer - t.renderLayer;
            }), this._unsortedRenderLayers.length = 0;
          }
        }, e;
      }();

      t.RenderableComponentList = e;
    }(es || (es = {}));

    var StringUtils = function () {
      function t() {}

      return t.matchChineseWord = function (t) {
        return t.match(/[\u4E00-\u9FA5]+/gim);
      }, t.lTrim = function (t) {
        for (var e = 0; this.isWhiteSpace(t.charAt(e));) e++;

        return t.slice(e, t.length);
      }, t.rTrim = function (t) {
        for (var e = t.length - 1; this.isWhiteSpace(t.charAt(e));) e--;

        return t.slice(0, e + 1);
      }, t.trim = function (t) {
        return null == t ? null : this.rTrim(this.lTrim(t));
      }, t.isWhiteSpace = function (t) {
        return " " == t || "\t" == t || "\r" == t || "\n" == t;
      }, t.replaceMatch = function (t, e, n, i) {
        void 0 === i && (i = !1);

        for (var r = t.length, o = "", s = !1, a = 1 == i ? e.toLowerCase() : e, c = 0; c < r; c++) s = !1, t.charAt(c) == a.charAt(0) && t.substr(c, a.length) == a && (s = !0), s ? (o += n, c = c + a.length - 1) : o += t.charAt(c);

        return o;
      }, t.htmlSpecialChars = function (t, e) {
        void 0 === e && (e = !1);

        for (var n = this.specialSigns.length, i = 0; i < n; i += 2) {
          var r = void 0,
              o = void 0;

          if (r = this.specialSigns[i], o = this.specialSigns[i + 1], e) {
            var s = r;
            r = o, o = s;
          }

          t = this.replaceMatch(t, r, o);
        }

        return t;
      }, t.zfill = function (t, e) {
        if (void 0 === e && (e = 2), !t) return t;
        e = Math.floor(e);
        var n = t.length;
        if (n >= e) return t;
        var i = !1;
        "-" == t.substr(0, 1) && (i = !0, t = t.substr(1));

        for (var r = e - n, o = 0; o < r; o++) t = "0" + t;

        return i && (t = "-" + t), t;
      }, t.reverse = function (t) {
        return t.length > 1 ? this.reverse(t.substring(1)) + t.substring(0, 1) : t;
      }, t.cutOff = function (t, e, n, i) {
        void 0 === i && (i = !0), e = Math.floor(e), n = Math.floor(n);
        var r = t.length;
        e > r && (e = r);
        var o,
            s = e,
            a = e + n;
        return i ? o = t.substring(0, s) + t.substr(a, r) : (a = (s = r - 1 - e - n) + n, o = t.substring(0, s + 1) + t.substr(a + 1, r)), o;
      }, t.strReplace = function (t, e) {
        for (var n = 0, i = e.length; n < i; n++) null != e[n] && "" != e[n] || (e[n] = "???"), t = t.replace("{" + n + "}", e[n]);

        return t;
      }, t.format = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];

        for (var i = 0; i < e.length - 1; i++) {
          var r = new RegExp("\\{" + i + "\\}", "gm");
          t = t.replace(r, e[i + 1]);
        }

        return t;
      }, t.specialSigns = ["&", "&amp;", "<", "&lt;", ">", "&gt;", '"', "&quot;", "'", "&apos;", "??", "&reg;", "??", "&copy;", "???", "&trade;"], t;
    }();

    !function (t) {
      var e = function () {
        function t() {}

        return t.update = function (t, e) {
          var n = 0;
          e ? n = t : (-1 == t && (t = Date.now()), -1 == this._lastTime && (this._lastTime = t), n = (t - this._lastTime) / 1e3), n > this.maxDeltaTime && (n = this.maxDeltaTime), this.totalTime += n, this.deltaTime = n * this.timeScale, this.unscaledDeltaTime = n, this.timeSinceSceneLoad += n, this.frameCount++, this._lastTime = t;
        }, t.sceneChanged = function () {
          this.timeSinceSceneLoad = 0;
        }, t.checkEvery = function (t) {
          return this.timeSinceSceneLoad / t > (this.timeSinceSceneLoad - this.deltaTime) / t;
        }, t.totalTime = 0, t.unscaledDeltaTime = 0, t.deltaTime = 0, t.timeScale = 1, t.maxDeltaTime = Number.MAX_VALUE, t.frameCount = 0, t.timeSinceSceneLoad = 0, t._lastTime = -1, t;
      }();

      t.Time = e;
    }(es || (es = {}));

    var TimeUtils = function () {
      function t() {}

      return t.monthId = function (t) {
        void 0 === t && (t = null);
        var e = (t = t || new Date()).getFullYear(),
            n = t.getMonth() + 1;
        return parseInt(e + (n < 10 ? "0" : "") + n);
      }, t.dateId = function (t) {
        void 0 === t && (t = null);
        var e = (t = t || new Date()).getMonth() + 1,
            n = e < 10 ? "0" : "",
            i = t.getDate(),
            r = i < 10 ? "0" : "";
        return parseInt(t.getFullYear() + n + e + r + i);
      }, t.weekId = function (t, e) {
        void 0 === t && (t = null), void 0 === e && (e = !0), t = t || new Date();
        var n = new Date();
        n.setTime(t.getTime()), n.setDate(1), n.setMonth(0);
        var i = n.getFullYear(),
            r = n.getDay();
        0 == r && (r = 7);
        var o = !1;
        r <= 4 ? (o = r > 1, n.setDate(n.getDate() - (r - 1))) : n.setDate(n.getDate() + 7 - r + 1);
        var s = this.diffDay(t, n, !1);
        if (s < 0) return n.setDate(1), n.setMonth(0), n.setDate(n.getDate() - 1), this.weekId(n, !1);
        var a = s / 7,
            c = Math.floor(a) + 1;

        if (53 == c) {
          n.setTime(t.getTime()), n.setDate(n.getDate() - 1);
          var h = n.getDay();
          if (0 == h && (h = 7), e && (!o || h < 4)) return n.setFullYear(n.getFullYear() + 1), n.setDate(1), n.setMonth(0), this.weekId(n, !1);
        }

        return parseInt(i + "00" + (c > 9 ? "" : "0") + c);
      }, t.diffDay = function (t, e, n) {
        void 0 === n && (n = !1);
        var i = (t.getTime() - e.getTime()) / 864e5;
        return n ? Math.ceil(i) : Math.floor(i);
      }, t.getFirstDayOfWeek = function (t) {
        var e = (t = t || new Date()).getDay() || 7;
        return new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1 - e, 0, 0, 0, 0);
      }, t.getFirstOfDay = function (t) {
        return (t = t || new Date()).setHours(0, 0, 0, 0), t;
      }, t.getNextFirstOfDay = function (t) {
        return new Date(this.getFirstOfDay(t).getTime() + 864e5);
      }, t.formatDate = function (t) {
        var e = t.getFullYear(),
            n = t.getMonth() + 1;
        n = n < 10 ? "0" + n : n;
        var i = t.getDate();
        return e + "-" + n + "-" + (i = i < 10 ? "0" + i : i);
      }, t.formatDateTime = function (t) {
        var e = t.getFullYear(),
            n = t.getMonth() + 1;
        n = n < 10 ? "0" + n : n;
        var i = t.getDate();
        i = i < 10 ? "0" + i : i;
        var r = t.getHours(),
            o = t.getMinutes();
        o = o < 10 ? "0" + o : o;
        var s = t.getSeconds();
        return e + "-" + n + "-" + i + " " + r + ":" + o + ":" + (s = s < 10 ? "0" + s : s);
      }, t.parseDate = function (t) {
        var e = Date.parse(t);
        return isNaN(e) ? new Date() : new Date(Date.parse(t.replace(/-/g, "/")));
      }, t.secondToTime = function (t, e, n) {
        void 0 === t && (t = 0), void 0 === e && (e = ":"), void 0 === n && (n = !0);
        var i = Math.floor(t / 3600),
            r = Math.floor(t % 3600 / 60),
            o = Math.floor(t % 3600 % 60),
            s = i.toString(),
            a = r.toString(),
            c = o.toString();
        return i < 10 && (s = "0" + s), r < 10 && (a = "0" + a), o < 10 && (c = "0" + c), n ? s + e + a + e + c : a + e + c;
      }, t.timeToMillisecond = function (t, e) {
        void 0 === e && (e = ":");

        for (var n = t.split(e), i = 0, r = n.length, o = 0; o < r; o++) {
          i += n[o] * Math.pow(60, r - 1 - o);
        }

        return (i *= 1e3).toString();
      }, t;
    }();

    !function (t) {
      var e = function () {
        function t() {}

        return t.makeWorker = function (t) {
          return new Worker(URL.createObjectURL(new Blob(["(" + t.toString() + ")()"])));
        }, t.workerMessage = function (t) {
          var e = this;
          return t.onmessage = function (t) {
            var n = t.data,
                i = n.result,
                r = n.jobId;
            "function" == typeof e.pendingJobs[r] && e.pendingJobs[r](i), delete e.pendingJobs[r];
          }, function () {
            for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];

            return new Promise(function (i) {
              var r = e.jobIdGen++;
              e.pendingJobs[r] = i, t.postMessage({
                jobId: r,
                message: n
              });
            });
          };
        }, t.pendingJobs = {}, t.jobIdGen = 0, t;
      }();

      t.WorkerUtils = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        return function (t) {
          this.batcher = t;
        };
      }();

      t.Graphics = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t(t, e, n, i) {
          this.r = t, this.g = e, this.b = n, this.a = null != i ? i : 1;
        }

        return t.fromRGB = function (e, n, i, r) {
          return new t(e, n, i, r);
        }, t.createFromHex = function (e) {
          var n = new t(1, 1, 1);
          return n.fromHex(e), n;
        }, t.fromHSL = function (t, e, i, r) {
          return void 0 === r && (r = 1), new n(t, e, i, r).toRGBA();
        }, t.prototype.lighten = function (t) {
          void 0 === t && (t = .1);
          var e = n.fromRGBA(this.r, this.g, this.b, this.a);
          return e.l += e.l * t, e.toRGBA();
        }, t.prototype.darken = function (t) {
          void 0 === t && (t = .1);
          var e = n.fromRGBA(this.r, this.g, this.b, this.a);
          return e.l -= e.l * t, e.toRGBA();
        }, t.prototype.saturate = function (t) {
          void 0 === t && (t = .1);
          var e = n.fromRGBA(this.r, this.g, this.b, this.a);
          return e.s += e.s * t, e.toRGBA();
        }, t.prototype.desaturate = function (t) {
          void 0 === t && (t = .1);
          var e = n.fromRGBA(this.r, this.g, this.b, this.a);
          return e.s -= e.s * t, e.toRGBA();
        }, t.prototype.mulitiply = function (e) {
          return new t(e.r / 255 * this.r / 255 * 255, e.g / 255 * this.g / 255 * 255, e.b / 255 * this.b / 255 * 255, e.a * this.a);
        }, t.prototype.screen = function (t) {
          var e = t.invert(),
              n = t.invert();
          return e.mulitiply(n).invert();
        }, t.prototype.invert = function () {
          return new t(255 - this.r, 255 - this.g, 255 - this.b, 1 - this.a);
        }, t.prototype.average = function (e) {
          return new t((e.r + this.r) / 2, (e.g + this.g) / 2, (e.b + this.b) / 2, (e.a + this.a) / 2);
        }, t.prototype.toString = function (t) {
          switch (void 0 === t && (t = "rgb"), t) {
            case "rgb":
              return this.toRGBA();

            case "hsl":
              return this.toHSLA();

            case "hex":
              return this.toHex();

            default:
              throw new Error("Invalid Color format");
          }
        }, t.prototype._componentToHex = function (t) {
          var e = t.toString(16);
          return 1 === e.length ? "0" + e : e;
        }, t.prototype.toHex = function () {
          return "#" + this._componentToHex(this.r) + this._componentToHex(this.g) + this._componentToHex(this.b) + this._componentToHex(this.a);
        }, t.prototype.fromHex = function (t) {
          var e = t.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i);
          if (!e) throw new Error("Invalid hex string: " + t);
          var n = parseInt(e[1], 16),
              i = parseInt(e[2], 16),
              r = parseInt(e[3], 16),
              o = 1;
          e[4] && (o = parseInt(e[4], 16) / 255), this.r = n, this.g = i, this.b = r, this.a = o;
        }, t.prototype.toRGBA = function () {
          var t = String(this.r.toFixed(0)) + ", " + String(this.g.toFixed(0)) + ", " + String(this.b.toFixed(0));
          return void 0 !== this.a || null != this.a ? "rgba(" + t + ", " + String(this.a) + ")" : "rgb(" + t + ")";
        }, t.prototype.toHSLA = function () {
          return n.fromRGBA(this.r, this.g, this.b, this.a).toString();
        }, t.prototype.fillStyle = function () {
          return this.toString();
        }, t.prototype.clone = function () {
          return new t(this.r, this.g, this.b, this.a);
        }, t.Black = t.createFromHex("#000000"), t.White = t.createFromHex("#FFFFFF"), t.Gray = t.createFromHex("#808080"), t.LightGray = t.createFromHex("#D3D3D3"), t.DarkGray = t.createFromHex("#A9A9A9"), t.Yellow = t.createFromHex("#FFFF00"), t.Orange = t.createFromHex("#FFA500"), t.Red = t.createFromHex("#FF0000"), t.Vermillion = t.createFromHex("#FF5B31"), t.Rose = t.createFromHex("#FF007F"), t.Magenta = t.createFromHex("#FF00FF"), t.Violet = t.createFromHex("#7F00FF"), t.Blue = t.createFromHex("#0000FF"), t.Azure = t.createFromHex("#007FFF"), t.Cyan = t.createFromHex("#00FFFF"), t.Viridian = t.createFromHex("#59978F"), t.Green = t.createFromHex("#00FF00"), t.Chartreuse = t.createFromHex("#7FFF00"), t.Transparent = t.createFromHex("#FFFFFF00"), t;
      }();

      t.Color = e;

      var n = function () {
        function t(t, e, n, i) {
          this.h = t, this.s = e, this.l = n, this.a = i;
        }

        return t.hue2rgb = function (t, e, n) {
          return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
        }, t.fromRGBA = function (e, n, i, r) {
          e /= 255, n /= 255, i /= 255;
          var o = Math.max(e, n, i),
              s = Math.min(e, n, i),
              a = (o + s) / 2,
              c = a,
              h = a;
          if (o === s) a = c = 0;else {
            var u = o - s;

            switch (c = h > .5 ? u / (2 - o - s) : u / (o + s), o) {
              case e:
                a = (n - i) / u + (n < i ? 6 : 0);
                break;

              case n:
                a = (i - e) / u + 2;
                break;

              case i:
                a = (e - n) / u + 4;
            }

            a /= 6;
          }
          return new t(a, c, h, r);
        }, t.prototype.toRGBA = function () {
          var n, i, r;
          if (0 === this.s) n = i = r = this.l;else {
            var o = this.l < .5 ? this.l * (1 + this.s) : this.l + this.s - this.l * this.s,
                s = 2 * this.l - o;
            n = t.hue2rgb(s, o, this.h + 1 / 3), i = t.hue2rgb(s, o, this.h), r = t.hue2rgb(s, o, this.h - 1 / 3);
          }
          return new e(255 * n, 255 * i, 255 * r, this.a);
        }, t.prototype.toString = function () {
          return "hsla(" + this.h.toFixed(0) + ", " + this.s.toFixed(0) + ", " + this.l.toFixed(0) + ", " + this.a.toFixed(0) + ")";
        }, t;
      }();
    }(es || (es = {})), function (t) {
      var e = function () {
        function e(e, n) {
          this.renderOrder = 0, this.shouldDebugRender = !0, this.renderDirty = !0, this.renderOrder = e, this.camera = n, t.Core.emitter.addObserver(t.CoreEvents.renderChanged, this.onRenderChanged, this);
        }

        return e.prototype.onAddedToScene = function (t) {}, e.prototype.unload = function () {}, e.prototype.beginRender = function (e) {
          t.Graphics.instance && t.Graphics.instance.batcher.begin(e);
        }, e.prototype.endRender = function () {
          t.Graphics.instance && t.Graphics.instance.batcher.end();
        }, e.prototype.onRenderChanged = function () {
          this.renderDirty = !0;
        }, e.prototype.renderAfterStateCheck = function (e, n) {
          t.Graphics.instance && e.render(t.Graphics.instance.batcher, n);
        }, e.prototype.debugRender = function (e) {
          if (t.Graphics.instance) {
            t.Physics.debugDraw(2);

            for (var n = 0; n < e.entities.count; n++) {
              var i = e.entities.buffer[n];
              i.enabled && i.debugRender(t.Graphics.instance.batcher);
            }
          }
        }, e;
      }();

      t.Renderer = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n(t, n) {
          return void 0 === t && (t = 0), void 0 === n && (n = null), e.call(this, t, n) || this;
        }

        return __extends(n, e), n.prototype.render = function (e) {
          if (this.renderDirty) {
            this.renderDirty = !1;
            var n = this.camera ? this.camera : e.camera;
            this.beginRender(n);

            for (var i = 0; i < e.renderableComponents.count; i++) {
              var r = e.renderableComponents.get(i);
              r.enabled && r.isVisibleFromCamera(e.camera) && this.renderAfterStateCheck(r, n);
            }

            this.shouldDebugRender && t.Core.debugRenderEndabled && this.debugRender(e), this.endRender();
          }
        }, n;
      }(t.Renderer);

      t.DefaultRenderer = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return e.getPoint = function (e, n, i, r) {
          var o = 1 - (r = t.MathHelper.clamp01(r));
          return e.scale(o * o).addEqual(n.scale(2 * o * r)).addEqual(i.scale(r * r));
        }, e.getPointThree = function (e, n, i, r, o) {
          var s = 1 - (o = t.MathHelper.clamp01(o));
          return e.scale(s * s * s).addEqual(n.scale(3 * s * s * o)).addEqual(i.scale(3 * s * o * o)).addEqual(r.scale(o * o * o));
        }, e.getFirstDerivative = function (t, e, n, i) {
          return e.sub(t).scale(2 * (1 - i)).addEqual(n.sub(e).scale(2 * i));
        }, e.getFirstDerivativeThree = function (e, n, i, r, o) {
          var s = 1 - (o = t.MathHelper.clamp01(o));
          return n.sub(e).scale(3 * s * s).addEqual(i.sub(n).scale(6 * s * o)).addEqual(r.sub(i).scale(3 * o * o));
        }, e.getOptimizedDrawingPoints = function (e, n, i, r, o) {
          void 0 === o && (o = 1);
          var s = t.ListPool.obtain(t.Vector2);
          return s.push(e), this.recursiveGetOptimizedDrawingPoints(e, n, i, r, s, o), s.push(r), s;
        }, e.recursiveGetOptimizedDrawingPoints = function (e, n, i, r, o, s) {
          var a = t.Vector2.divideScaler(e.add(n), 2),
              c = t.Vector2.divideScaler(n.add(i), 2),
              h = t.Vector2.divideScaler(i.add(r), 2),
              u = t.Vector2.divideScaler(a.add(c), 2),
              l = t.Vector2.divideScaler(c.add(h), 2),
              p = t.Vector2.divideScaler(u.add(l), 2),
              f = r.sub(e),
              d = Math.abs((n.x, r.x * f.y - (n.y - r.y) * f.x)),
              m = Math.abs((i.x - r.x) * f.y - (i.y - r.y) * f.x);
          (d + m) * (d + m) < s * (f.x * f.x + f.y * f.y) ? o.push(p) : (this.recursiveGetOptimizedDrawingPoints(e, a, u, p, o, s), this.recursiveGetOptimizedDrawingPoints(p, l, h, r, o, s));
        }, e;
      }();

      t.Bezier = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {
          this._points = [], this._curveCount = 0;
        }

        return e.prototype.pointIndexAtTime = function (e) {
          var n = {
            time: 0,
            range: 0
          };
          return e >= 1 ? (e = 1, n.range = this._points.length - 4) : (e = t.MathHelper.clamp01(e) * this._curveCount, n.range = Math.floor(e), e -= n.range, n.range *= 3), n.time = e, n;
        }, e.prototype.setControlPoint = function (t, e) {
          if (t % 3 == 0) {
            var n = e.sub(this._points[t]);
            t > 0 && this._points[t - 1].addEqual(n), t + 1 < this._points.length && this._points[t + 1].addEqual(n);
          }

          this._points[t] = e;
        }, e.prototype.getPointAtTime = function (e) {
          var n = this.pointIndexAtTime(e).range;
          return t.Bezier.getPointThree(this._points[n], this._points[n + 1], this._points[n + 2], this._points[n + 3], e);
        }, e.prototype.getVelocityAtTime = function (e) {
          var n = this.pointIndexAtTime(e).range;
          return t.Bezier.getFirstDerivativeThree(this._points[n], this._points[n + 1], this._points[n + 2], this._points[n + 3], e);
        }, e.prototype.getDirectionAtTime = function (t) {
          return this.getVelocityAtTime(t).normalize();
        }, e.prototype.addCurve = function (t, e, n, i) {
          0 == this._points.length && this._points.push(t), this._points.push(e), this._points.push(n), this._points.push(i), this._curveCount = (this._points.length - 1) / 3;
        }, e.prototype.reset = function () {
          this._points.length = 0;
        }, e.prototype.getDrawingPoints = function (t) {
          for (var e = [], n = 0; n < t; n++) {
            var i = n / t;
            e[n] = this.getPointAtTime(i);
          }

          return e;
        }, e;
      }();

      t.BezierSpline = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {}

        return t.isFlagSet = function (t, e) {
          return 0 != (t & e);
        }, t.isUnshiftedFlagSet = function (t, e) {
          return 0 != (t & (e = 1 << e));
        }, t.setFlagExclusive = function (t, e) {
          t.value = 1 << e;
        }, t.setFlag = function (t, e) {
          t.value = t.value | 1 << e;
        }, t.unsetFlag = function (t, e) {
          e = 1 << e, t.value = t.value & ~e;
        }, t.invertFlags = function (t) {
          t.value = ~t.value;
        }, t.binaryStringRepresentation = function (t, e) {
          void 0 === e && (e = 10);

          for (var n = t.toString(2); n.length < (e || 2);) n = "0" + n;

          return n;
        }, t;
      }();

      t.Flags = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return e.toDegrees = function (t) {
          return 57.29577951308232 * t;
        }, e.toRadians = function (t) {
          return .017453292519943295 * t;
        }, e.barycentric = function (t, e, n, i, r) {
          return t + (e - t) * i + (n - t) * r;
        }, e.catmullRom = function (t, e, n, i, r) {
          var o = r * r;
          return .5 * (2 * e + (n - t) * r + (2 * t - 5 * e + 4 * n - i) * o + (3 * e - t - 3 * n + i) * (o * r));
        }, e.map = function (t, e, n, i, r) {
          return i + (t - e) * (r - i) / (n - e);
        }, e.map01 = function (t, e, n) {
          return 1 * (t - e) / (n - e);
        }, e.map10 = function (t, e, n) {
          return 1 - this.map01(t, e, n);
        }, e.smoothStep = function (t, n, i) {
          var r = this.clamp(i, 0, 1);
          return r = e.hermite(t, 0, n, 0, r);
        }, e.wrapAngle = function (t) {
          return t > -Math.PI && t <= Math.PI ? t : (t %= 2 * Math.PI) <= -Math.PI ? t + 2 * Math.PI : t > Math.PI ? t - 2 * Math.PI : t;
        }, e.isPowerOfTwo = function (t) {
          return t > 0 && t % (t - 1) == 0;
        }, e.lerp = function (t, e, n) {
          return t + (e - t) * this.clamp01(n);
        }, e.betterLerp = function (t, n, i, r) {
          return Math.abs(t - n) < r ? n : e.lerp(t, n, i);
        }, e.lerpAngle = function (t, e, n) {
          var i = this.repeat(e - t, 360);
          return i > 180 && (i -= 360), t + i * this.clamp01(n);
        }, e.lerpAngleRadians = function (t, e, n) {
          var i = this.repeat(e - t, 2 * Math.PI);
          return i > Math.PI && (i -= 2 * Math.PI), t + i * this.clamp01(n);
        }, e.pingPong = function (t, e) {
          return t = this.repeat(t, 2 * e), e - Math.abs(t - e);
        }, e.signThreshold = function (t, e) {
          return Math.abs(t) >= e ? Math.sign(t) : 0;
        }, e.inverseLerp = function (t, e, n) {
          if (t < e) {
            if (n < t) return 0;
            if (n > e) return 1;
          } else {
            if (n < e) return 1;
            if (n > t) return 0;
          }

          return (n - t) / (e - t);
        }, e.lerpPrecise = function (t, e, n) {
          return (1 - n) * t + e * n;
        }, e.clamp = function (t, e, n) {
          return t < e ? e : t > n ? n : t;
        }, e.snap = function (t, e) {
          return Math.round(t / e) * e;
        }, e.pointOnCirlce = function (n, i, r) {
          var o = e.toRadians(r);
          return new t.Vector2(Math.cos(o) * o + n.x, Math.sin(o) * o + n.y);
        }, e.isEven = function (t) {
          return t % 2 == 0;
        }, e.isOdd = function (t) {
          return t % 2 != 0;
        }, e.roundWithRoundedAmount = function (t, e) {
          var n = Math.round(t);
          return e.value = t - n * Math.round(t / n), n;
        }, e.clamp01 = function (t) {
          return t < 0 ? 0 : t > 1 ? 1 : t;
        }, e.angleBetweenVectors = function (t, e) {
          return Math.atan2(e.y - t.y, e.x - t.x);
        }, e.angleToVector = function (e, n) {
          return new t.Vector2(Math.cos(e) * n, Math.sin(e) * n);
        }, e.incrementWithWrap = function (t, e) {
          return ++t == e ? 0 : t;
        }, e.decrementWithWrap = function (t, e) {
          return --t < 0 ? e - 1 : t;
        }, e.hypotenuse = function (t, e) {
          return Math.sqrt(t * t + e * e);
        }, e.closestPowerOfTwoGreaterThan = function (t) {
          return t--, t |= t >> 1, t |= t >> 2, t |= t >> 4, t |= t >> 8, (t |= t >> 16) + 1;
        }, e.roundToNearest = function (t, e) {
          return Math.round(t / e) * e;
        }, e.withinEpsilon = function (t, e) {
          return void 0 === e && (e = this.Epsilon), Math.abs(t) < e;
        }, e.approach = function (t, e, n) {
          return t < e ? Math.min(t + n, e) : Math.max(t - n, e);
        }, e.approachAngle = function (t, e, n) {
          var i = this.deltaAngle(t, e);
          return -n < i && i < n ? e : this.repeat(this.approach(t, t + i, n), 360);
        }, e.project = function (t, e) {
          var n = t.dot(e) / e.lengthSquared();
          return e.scale(n);
        }, e.approachAngleRadians = function (t, e, n) {
          var i = this.deltaAngleRadians(t, e);
          return -n < i && i < n ? e : this.repeat(this.approach(t, t + i, n), 2 * Math.PI);
        }, e.approximately = function (t, e, n) {
          return void 0 === n && (n = this.Epsilon), Math.abs(t - e) <= n;
        }, e.deltaAngle = function (t, e) {
          var n = this.repeat(e - t, 360);
          return n > 180 && (n -= 360), n;
        }, e.between = function (t, e, n) {
          return t >= e && t <= n;
        }, e.deltaAngleRadians = function (t, e) {
          var n = this.repeat(e - t, 2 * Math.PI);
          return n > Math.PI && (n -= 2 * Math.PI), n;
        }, e.repeat = function (t, e) {
          return t - Math.floor(t / e) * e;
        }, e.floorToInt = function (t) {
          return Math.trunc(Math.floor(t));
        }, e.rotateAround = function (e, n) {
          var i = t.Time.totalTime * n,
              r = Math.cos(i),
              o = Math.sin(i);
          return new t.Vector2(e.x + r, e.y + o);
        }, e.rotateAround2 = function (e, n, i) {
          i = this.toRadians(i);
          var r = Math.cos(i),
              o = Math.sin(i),
              s = r * (e.x - n.x) - o * (e.y - n.y) + n.x,
              a = o * (e.x - n.x) + r * (e.y - n.y) + n.y;
          return new t.Vector2(s, a);
        }, e.pointOnCircle = function (e, n, i) {
          var r = this.toRadians(i);
          return new t.Vector2(Math.cos(r) * n + e.x, Math.sin(r) * n + e.y);
        }, e.pointOnCircleRadians = function (e, n, i) {
          return new t.Vector2(Math.cos(i) * n + e.x, Math.sin(i) * n + e.y);
        }, e.lissajou = function (e, n, i, r, o) {
          void 0 === e && (e = 2), void 0 === n && (n = 3), void 0 === i && (i = 1), void 0 === r && (r = 1), void 0 === o && (o = 0);
          var s = Math.sin(t.Time.totalTime * e + o) * i,
              a = Math.cos(t.Time.totalTime * n) * r;
          return new t.Vector2(s, a);
        }, e.lissajouDamped = function (e, n, i, r, o, s, a) {
          void 0 === e && (e = 2), void 0 === n && (n = 3), void 0 === i && (i = 1), void 0 === r && (r = 1), void 0 === o && (o = .5), void 0 === s && (s = 0), void 0 === a && (a = 5);
          var c = this.pingPong(t.Time.totalTime, a),
              h = Math.pow(Math.E, -s * c),
              u = h * Math.sin(t.Time.totalTime * e + o) * i,
              l = h * Math.cos(t.Time.totalTime * n) * r;
          return new t.Vector2(u, l);
        }, e.hermite = function (t, e, n, i, r) {
          return 0 == r ? t : 1 == r ? n : (2 * t - 2 * n + i + e) * (r * r * r) + (3 * n - 3 * t - 2 * e - i) * (r * r) + e * r + t;
        }, e.isValid = function (t) {
          return !Number.isNaN(t) && t !== 1 / 0;
        }, e.smoothDamp = function (t, e, n, i, r, o) {
          var s = 2 / (i = Math.max(1e-4, i)),
              a = s * o,
              c = 1 / (1 + (a + (a * a * .48 + a * (a * a) * .235))),
              h = t - e,
              u = e,
              l = r * i,
              p = (n + s * (h = this.clamp(h, -1 * l, l))) * o;
          n = (n - s * p) * c;
          var f = (e = t - h) + (h + p) * c;
          return u - t > 0 == f > u && (n = ((f = u) - u) / o), {
            value: f,
            currentVelocity: n
          };
        }, e.smoothDampVector = function (e, n, i, r, o, s) {
          var a = t.Vector2.zero,
              c = this.smoothDamp(e.x, n.x, i.x, r, o, s);
          a.x = c.value, i.x = c.currentVelocity;
          var h = this.smoothDamp(e.y, n.y, i.y, r, o, s);
          return a.y = h.value, i.y = h.currentVelocity, a;
        }, e.mapMinMax = function (t, n, i, r, o) {
          return r + (e.clamp(t, n, i) - n) * (o - r) / (i - n);
        }, e.fromAngle = function (e) {
          return new t.Vector2(Math.cos(e), Math.sin(e)).normalizeEqual();
        }, e.Epsilon = 1e-5, e.Rad2Deg = 57.29578, e.Deg2Rad = .0174532924, e.PiOver2 = Math.PI / 2, e;
      }();

      t.MathHelper = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t(t, e, n, i, r, o, s, a, c, h, u, l, p, f, d, m) {
          this.m11 = t, this.m12 = e, this.m13 = n, this.m14 = i, this.m21 = r, this.m22 = o, this.m23 = s, this.m24 = a, this.m31 = c, this.m32 = h, this.m33 = u, this.m34 = l, this.m41 = p, this.m42 = f, this.m43 = d, this.m44 = m;
        }

        return Object.defineProperty(t, "Identity", {
          get: function () {
            return this.identity;
          },
          enumerable: !0,
          configurable: !0
        }), t.createOrthographicOffCenter = function (e, n, i, r, o, s, a) {
          void 0 === a && (a = new t()), a.m11 = 2 / (n - e), a.m12 = 0, a.m13 = 0, a.m14 = 0, a.m21 = 0, a.m22 = 2 / (r - i), a.m23 = 0, a.m24 = 0, a.m31 = 0, a.m32 = 0, a.m33 = 1 / (o - s), a.m34 = 0, a.m41 = (e + n) / (e - n), a.m42 = (r + i) / (i - r), a.m43 = o / (o - s), a.m44 = 1;
        }, t.createTranslation = function (t, e) {
          e.m11 = 1, e.m12 = 0, e.m13 = 0, e.m14 = 0, e.m21 = 0, e.m22 = 1, e.m23 = 0, e.m24 = 0, e.m31 = 0, e.m32 = 0, e.m33 = 1, e.m34 = 0, e.m41 = t.x, e.m42 = t.y, e.m43 = 0, e.m44 = 1;
        }, t.createRotationZ = function (e, n) {
          n = t.Identity;
          var i = Math.cos(e),
              r = Math.sin(e);
          n.m11 = i, n.m12 = r, n.m21 = -r, n.m22 = i;
        }, t.multiply = function (e, n, i) {
          void 0 === i && (i = new t());

          var r = e.m11 * n.m11 + e.m12 * n.m21 + e.m13 * n.m31 + e.m14 * n.m41,
              o = e.m11 * n.m12 + e.m12 * n.m22 + e.m13 * n.m32 + e.m14 * n.m42,
              s = e.m11 * n.m13 + e.m12 * n.m23 + e.m13 * n.m33 + e.m14 * n.m43,
              a = e.m11 * n.m14 + e.m12 * n.m24 + e.m13 * n.m34 + e.m14 * n.m44,
              c = e.m21 * n.m11 + e.m22 * n.m21 + e.m23 * n.m31 + e.m24 * n.m41,
              h = e.m21 * n.m12 + e.m22 * n.m22 + e.m23 * n.m32 + e.m24 * n.m42,
              u = e.m21 * n.m13 + e.m22 * n.m23 + e.m23 * n.m33 + e.m24 * n.m43,
              l = e.m21 * n.m14 + e.m22 * n.m24 + e.m23 * n.m34 + e.m24 * n.m44,
              p = e.m31 * n.m11 + e.m32 * n.m21 + e.m33 * n.m31 + e.m34 * n.m41,
              f = e.m31 * n.m12 + e.m32 * n.m22 + e.m33 * n.m32 + e.m34 * n.m42,
              d = e.m31 * n.m13 + e.m32 * n.m23 + e.m33 * n.m33 + e.m34 * n.m43,
              m = e.m31 * n.m14 + e.m32 * n.m24 + e.m33 * n.m34 + e.m34 * n.m44,
              y = e.m41 * n.m11 + e.m42 * n.m21 + e.m43 * n.m31 + e.m44 * n.m41,
              g = e.m41 * n.m12 + e.m42 * n.m22 + e.m43 * n.m32 + e.m44 * n.m42,
              _ = e.m41 * n.m13 + e.m42 * n.m23 + e.m43 * n.m33 + e.m44 * n.m43,
              v = e.m41 * n.m14 + e.m42 * n.m24 + e.m43 * n.m34 + e.m44 * n.m44;

          i.m11 = r, i.m12 = o, i.m13 = s, i.m14 = a, i.m21 = c, i.m22 = h, i.m23 = u, i.m24 = l, i.m31 = p, i.m32 = f, i.m33 = d, i.m34 = m, i.m41 = y, i.m42 = g, i.m43 = _, i.m44 = v;
        }, t.identity = new t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), t;
      }();

      t.Matrix = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {
          this.m11 = 0, this.m12 = 0, this.m21 = 0, this.m22 = 0, this.m31 = 0, this.m32 = 0;
        }

        return Object.defineProperty(e, "identity", {
          get: function () {
            return new e().setIdentity();
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.setIdentity = function () {
          return this.setValues(1, 0, 0, 1, 0, 0);
        }, e.prototype.setValues = function (t, e, n, i, r, o) {
          return this.m11 = t, this.m12 = e, this.m21 = n, this.m22 = i, this.m31 = r, this.m32 = o, this;
        }, Object.defineProperty(e.prototype, "translation", {
          get: function () {
            return new t.Vector2(this.m31, this.m32);
          },
          set: function (t) {
            this.m31 = t.x, this.m32 = t.y;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "rotation", {
          get: function () {
            return Math.atan2(this.m21, this.m11);
          },
          set: function (t) {
            var e = Math.cos(t),
                n = Math.sin(t);
            this.m11 = e, this.m12 = n, this.m21 = -n, this.m22 = e;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "rotationDegrees", {
          get: function () {
            return t.MathHelper.toDegrees(this.rotation);
          },
          set: function (e) {
            this.rotation = t.MathHelper.toRadians(e);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "scale", {
          get: function () {
            return new t.Vector2(this.m11, this.m22);
          },
          set: function (t) {
            this.m11 = t.x, this.m22 = t.y;
          },
          enumerable: !0,
          configurable: !0
        }), e.createRotation = function (t, e) {
          e.setIdentity();
          var n = Math.cos(t),
              i = Math.sin(t);
          e.m11 = n, e.m12 = i, e.m21 = -1 * i, e.m22 = n;
        }, e.createRotationOut = function (t, e) {
          var n = Math.cos(t),
              i = Math.sin(t);
          e.m11 = n, e.m12 = i, e.m21 = -i, e.m22 = n;
        }, e.createScale = function (t, e, n) {
          n.m11 = t, n.m12 = 0, n.m21 = 0, n.m22 = e, n.m31 = 0, n.m32 = 0;
        }, e.createScaleOut = function (t, e, n) {
          n.m11 = t, n.m12 = 0, n.m21 = 0, n.m22 = e, n.m31 = 0, n.m32 = 0;
        }, e.createTranslation = function (t, e, n) {
          return n.m11 = 1, n.m12 = 0, n.m21 = 0, n.m22 = 1, n.m31 = t, n.m32 = e, n;
        }, e.createTranslationOut = function (t, e) {
          e.m11 = 1, e.m12 = 0, e.m21 = 0, e.m22 = 1, e.m31 = t.x, e.m32 = t.y;
        }, e.invert = function (t) {
          var e = 1 / t.determinant(),
              n = this.identity;
          return n.m11 = t.m22 * e, n.m12 = -t.m12 * e, n.m21 = -t.m21 * e, n.m22 = t.m11 * e, n.m31 = (t.m32 * t.m21 - t.m31 * t.m22) * e, n.m32 = -(t.m32 * t.m11 - t.m31 * t.m12) * e, n;
        }, e.prototype.add = function (t) {
          return this.m11 += t.m11, this.m12 += t.m12, this.m21 += t.m21, this.m22 += t.m22, this.m31 += t.m31, this.m32 += t.m32, this;
        }, e.prototype.substract = function (t) {
          return this.m11 -= t.m11, this.m12 -= t.m12, this.m21 -= t.m21, this.m22 -= t.m22, this.m31 -= t.m31, this.m32 -= t.m32, this;
        }, e.prototype.divide = function (t) {
          return this.m11 /= t.m11, this.m12 /= t.m12, this.m21 /= t.m21, this.m22 /= t.m22, this.m31 /= t.m31, this.m32 /= t.m32, this;
        }, e.prototype.multiply = function (t) {
          var e = this.m11 * t.m11 + this.m12 * t.m21,
              n = this.m11 * t.m12 + this.m12 * t.m22,
              i = this.m21 * t.m11 + this.m22 * t.m21,
              r = this.m21 * t.m12 + this.m22 * t.m22,
              o = this.m31 * t.m11 + this.m32 * t.m21 + t.m31,
              s = this.m31 * t.m12 + this.m32 * t.m22 + t.m32;
          return this.m11 = e, this.m12 = n, this.m21 = i, this.m22 = r, this.m31 = o, this.m32 = s, this;
        }, e.multiply = function (t, e, n) {
          var i = t.m11 * e.m11 + t.m12 * e.m21,
              r = t.m11 * e.m12 + t.m12 * e.m22,
              o = t.m21 * e.m11 + t.m22 * e.m21,
              s = t.m21 * e.m12 + t.m22 * e.m22,
              a = t.m31 * e.m11 + t.m32 * e.m21 + e.m31,
              c = t.m31 * e.m12 + t.m32 * e.m22 + e.m32;
          n.m11 = i, n.m12 = r, n.m21 = o, n.m22 = s, n.m31 = a, n.m32 = c;
        }, e.prototype.determinant = function () {
          return this.m11 * this.m22 - this.m12 * this.m21;
        }, e.lerp = function (t, e, n) {
          return t.m11 = t.m11 + (e.m11 - t.m11) * n, t.m12 = t.m12 + (e.m12 - t.m12) * n, t.m21 = t.m21 + (e.m21 - t.m21) * n, t.m22 = t.m22 + (e.m22 - t.m22) * n, t.m31 = t.m31 + (e.m31 - t.m31) * n, t.m32 = t.m32 + (e.m32 - t.m32) * n, t;
        }, e.transpose = function (t) {
          var e = this.identity;
          return e.m11 = t.m11, e.m12 = t.m21, e.m21 = t.m12, e.m22 = t.m22, e.m31 = 0, e.m32 = 0, e;
        }, e.prototype.mutiplyTranslation = function (n, i) {
          var r = new e();
          return e.createTranslation(n, i, r), t.MatrixHelper.mutiply(this, r);
        }, e.prototype.equals = function (t) {
          return this == t;
        }, e.toMatrix = function (e) {
          var n = new t.Matrix();
          return n.m11 = e.m11, n.m12 = e.m12, n.m13 = 0, n.m14 = 0, n.m21 = e.m21, n.m22 = e.m22, n.m23 = 0, n.m24 = 0, n.m31 = 0, n.m32 = 0, n.m33 = 1, n.m34 = 0, n.m41 = e.m31, n.m42 = e.m32, n.m43 = 0, n.m44 = 1, n;
        }, e.prototype.toString = function () {
          return "{m11:" + this.m11 + " m12:" + this.m12 + " m21:" + this.m21 + " m22:" + this.m22 + " m31:" + this.m31 + " m32:" + this.m32 + "}";
        }, e;
      }();

      t.Matrix2D = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return e.add = function (e, n) {
          var i = t.Matrix2D.identity;
          return i.m11 = e.m11 + n.m11, i.m12 = e.m12 + n.m12, i.m21 = e.m21 + n.m21, i.m22 = e.m22 + n.m22, i.m31 = e.m31 + n.m31, i.m32 = e.m32 + n.m32, i;
        }, e.divide = function (e, n) {
          var i = t.Matrix2D.identity;
          return i.m11 = e.m11 / n.m11, i.m12 = e.m12 / n.m12, i.m21 = e.m21 / n.m21, i.m22 = e.m22 / n.m22, i.m31 = e.m31 / n.m31, i.m32 = e.m32 / n.m32, i;
        }, e.mutiply = function (e, n) {
          var i = t.Matrix2D.identity;

          if (n instanceof t.Matrix2D) {
            var r = e.m11 * n.m11 + e.m12 * n.m21,
                o = n.m11 * n.m12 + e.m12 * n.m22,
                s = e.m21 * n.m11 + e.m22 * n.m21,
                a = e.m21 * n.m12 + e.m22 * n.m22,
                c = e.m31 * n.m11 + e.m32 * n.m21 + n.m31,
                h = e.m31 * n.m12 + e.m32 * n.m22 + n.m32;
            i.m11 = r, i.m12 = o, i.m21 = s, i.m22 = a, i.m31 = c, i.m32 = h;
          } else "number" == typeof n && (i.m11 = e.m11 * n, i.m12 = e.m12 * n, i.m21 = e.m21 * n, i.m22 = e.m22 * n, i.m31 = e.m31 * n, i.m32 = e.m32 * n);

          return i;
        }, e.subtract = function (e, n) {
          var i = t.Matrix2D.identity;
          return i.m11 = e.m11 - n.m11, i.m12 = e.m12 - n.m12, i.m21 = e.m21 - n.m21, i.m22 = e.m22 - n.m22, i.m31 = e.m31 - n.m31, i.m32 = e.m32 - n.m32, i;
        }, e;
      }();

      t.MatrixHelper = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e(e, n, i, r) {
          void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), this.x = 0, this.y = 0, this.width = 0, this.height = 0, this._tempMat = new t.Matrix2D(), this._transformMat = new t.Matrix2D(), this.x = e, this.y = n, this.width = i, this.height = r;
        }

        return Object.defineProperty(e, "empty", {
          get: function () {
            return new e();
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "maxRect", {
          get: function () {
            return new e(Number.MIN_VALUE / 2, Number.MIN_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "left", {
          get: function () {
            return this.x;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "right", {
          get: function () {
            return this.x + this.width;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "top", {
          get: function () {
            return this.y;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "bottom", {
          get: function () {
            return this.y + this.height;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "max", {
          get: function () {
            return new t.Vector2(this.right, this.bottom);
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.isEmpty = function () {
          return 0 == this.width && 0 == this.height && 0 == this.x && 0 == this.y;
        }, Object.defineProperty(e.prototype, "location", {
          get: function () {
            return new t.Vector2(this.x, this.y);
          },
          set: function (t) {
            this.x = t.x, this.y = t.y;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "size", {
          get: function () {
            return new t.Vector2(this.width, this.height);
          },
          set: function (t) {
            this.width = t.x, this.height = t.y;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "center", {
          get: function () {
            return new t.Vector2(this.x + this.width / 2, this.y + this.height / 2);
          },
          enumerable: !0,
          configurable: !0
        }), e.fromMinMax = function (t, n, i, r) {
          return new e(t, n, i - t, r - n);
        }, e.rectEncompassingPoints = function (t) {
          for (var e = Number.POSITIVE_INFINITY, n = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY, r = Number.NEGATIVE_INFINITY, o = 0; o < t.length; o++) {
            var s = t[o];
            s.x < e && (e = s.x), s.x > i && (i = s.x), s.y < n && (n = s.y), s.y > r && (r = s.y);
          }

          return this.fromMinMax(e, n, i, r);
        }, e.prototype.getSide = function (e) {
          switch (e) {
            case t.Edge.top:
              return this.top;

            case t.Edge.bottom:
              return this.bottom;

            case t.Edge.left:
              return this.left;

            case t.Edge.right:
              return this.right;

            default:
              throw new Error("Argument Out Of Range");
          }
        }, e.prototype.contains = function (t, e) {
          return this.x <= t && t < this.x + this.width && this.y <= e && e < this.y + this.height;
        }, e.prototype.inflate = function (t, e) {
          this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e;
        }, e.prototype.intersects = function (t) {
          return t.left < this.right && this.left < t.right && t.top < this.bottom && this.top < t.bottom;
        }, e.prototype.rayIntersects = function (t) {
          var e = {
            intersected: !1,
            distance: 0
          },
              n = Number.MAX_VALUE;

          if (Math.abs(t.direction.x) < 1e-6) {
            if (t.start.x < this.x || t.start.x > this.x + this.width) return e;
          } else {
            var i = 1 / t.direction.x,
                r = (this.x - t.start.x) * i,
                o = (this.x + this.width - t.start.x) * i;

            if (r > o) {
              var s = r;
              r = o, o = s;
            }

            if (e.distance = Math.max(r, e.distance), n = Math.min(o, n), e.distance > n) return e;
          }

          if (Math.abs(t.direction.y) < 1e-6) {
            if (t.start.y < this.y || t.start.y > this.y + this.height) return e;
          } else {
            var a = 1 / t.direction.y,
                c = (this.y - t.start.y) * a,
                h = (this.y + this.height - t.start.y) * a;

            if (c > h) {
              var u = c;
              c = h, h = u;
            }

            if (e.distance = Math.max(c, e.distance), n = Math.max(h, n), e.distance > n) return e;
          }

          return e.intersected = !0, e;
        }, e.prototype.containsRect = function (t) {
          return this.x <= t.x && t.x < this.x + this.width && this.y <= t.y && t.y < this.y + this.height;
        }, e.prototype.getHalfSize = function () {
          return new t.Vector2(.5 * this.width, .5 * this.height);
        }, e.prototype.getClosestPointOnBoundsToOrigin = function () {
          var e = this.max,
              n = Math.abs(this.location.x),
              i = new t.Vector2(this.location.x, 0);
          return Math.abs(e.x) < n && (n = Math.abs(e.x), i.x = e.x, i.y = 0), Math.abs(e.y) < n && (n = Math.abs(e.y), i.x = 0, i.y = e.y), Math.abs(this.location.y) < n && (n = Math.abs(this.location.y), i.x = 0, i.y = this.location.y), i;
        }, e.prototype.getClosestPointOnRectangleToPoint = function (e) {
          var n = t.Vector2.zero;
          return n.x = t.MathHelper.clamp(e.x, this.left, this.right), n.y = t.MathHelper.clamp(e.y, this.top, this.bottom), n;
        }, e.prototype.getClosestPointOnRectangleBorderToPoint = function (e, n) {
          var i = t.Vector2.zero;

          if (i.x = t.MathHelper.clamp(e.x, this.left, this.right), i.y = t.MathHelper.clamp(e.y, this.top, this.bottom), this.contains(i.x, i.y)) {
            var r = i.x - this.left,
                o = this.right - i.x,
                s = i.y - this.top,
                a = this.bottom - i.y,
                c = Math.min(r, o, s, a);
            c == s ? (i.y = this.top, n.y = -1) : c == a ? (i.y = this.bottom, n.y = 1) : c == r ? (i.x = this.left, n.x = -1) : (i.x = this.right, n.x = 1);
          } else i.x == this.left && (n.x = -1), i.x == this.right && (n.x = 1), i.y == this.top && (n.y = -1), i.y == this.bottom && (n.y = 1);

          return i;
        }, e.intersect = function (t, n) {
          if (t.intersects(n)) {
            var i = Math.min(t.x + t.width, n.x + n.width),
                r = Math.max(t.x, n.x),
                o = Math.max(t.y, n.y);
            return new e(r, o, i - r, Math.min(t.y + t.height, n.y + n.height) - o);
          }

          return new e(0, 0, 0, 0);
        }, e.prototype.offset = function (t, e) {
          this.x += t, this.y += e;
        }, e.union = function (t, n) {
          var i = Math.min(t.x, n.x),
              r = Math.min(t.y, n.y);
          return new e(i, r, Math.max(t.right, n.right) - i, Math.max(t.bottom, n.bottom) - r);
        }, e.overlap = function (t, n) {
          var i = Math.max(t.x, n.x, 0),
              r = Math.max(t.y, n.y, 0);
          return new e(i, r, Math.max(Math.min(t.right, n.right) - i, 0), Math.max(Math.min(t.bottom, n.bottom) - r, 0));
        }, e.prototype.calculateBounds = function (e, n, i, r, o, s, a) {
          if (0 == o) this.x = Math.trunc(e.x + n.x - i.x * r.x), this.y = Math.trunc(e.y + n.y - i.y * r.y), this.width = Math.trunc(s * r.x), this.height = Math.trunc(a * r.y);else {
            var c = e.x + n.x,
                h = e.y + n.y;
            t.Matrix2D.createTranslation(-c - i.x, -h - i.y, this._transformMat), t.Matrix2D.createScale(r.x, r.y, this._tempMat), this._transformMat = this._transformMat.multiply(this._tempMat), t.Matrix2D.createRotation(o, this._tempMat), this._transformMat = this._transformMat.multiply(this._tempMat), t.Matrix2D.createTranslation(c, h, this._tempMat), this._transformMat = this._transformMat.multiply(this._tempMat);
            var u = new t.Vector2(c, h),
                l = new t.Vector2(c + s, h),
                p = new t.Vector2(c, h + a),
                f = new t.Vector2(c + s, h + a);
            t.Vector2Ext.transformR(u, this._transformMat, u), t.Vector2Ext.transformR(l, this._transformMat, l), t.Vector2Ext.transformR(p, this._transformMat, p), t.Vector2Ext.transformR(f, this._transformMat, f);
            var d = Math.trunc(Math.min(u.x, f.x, l.x, p.x)),
                m = Math.trunc(Math.max(u.x, f.x, l.x, p.x)),
                y = Math.trunc(Math.min(u.y, f.y, l.y, p.y)),
                g = Math.trunc(Math.max(u.y, f.y, l.y, p.y));
            this.location = new t.Vector2(d, y), this.width = Math.trunc(m - d), this.height = Math.trunc(g - y);
          }
        }, e.prototype.getSweptBroadphaseBounds = function (t, n) {
          var i = e.empty;
          return i.x = t > 0 ? this.x : this.x + t, i.y = n > 0 ? this.y : this.y + n, i.width = t > 0 ? t + this.width : this.width - t, i.height = n > 0 ? n + this.height : this.height - n, i;
        }, e.prototype.collisionCheck = function (t, e, n) {
          e.value = n.value = 0;
          var i = t.x - (this.x + this.width),
              r = t.x + t.width - this.x,
              o = t.y - (this.y + this.height),
              s = t.y + t.height - this.y;
          return !(i > 0 || r < 0 || o > 0 || s < 0) && (e.value = Math.abs(i) < r ? i : r, n.value = Math.abs(o) < s ? o : s, Math.abs(e.value) < Math.abs(n.value) ? n.value = 0 : e.value = 0, !0);
        }, e.getIntersectionDepth = function (e, n) {
          var i = e.width / 2,
              r = e.height / 2,
              o = n.width / 2,
              s = n.height / 2,
              a = new t.Vector2(e.left + i, e.top + r),
              c = new t.Vector2(n.left + o, n.top + s),
              h = a.x - c.x,
              u = a.y - c.y,
              l = i + o,
              p = r + s;
          if (Math.abs(h) >= l || Math.abs(u) >= p) return t.Vector2.zero;
          var f = h > 0 ? l - h : -l - h,
              d = u > 0 ? p - u : -p - u;
          return new t.Vector2(f, d);
        }, e.prototype.equals = function (t) {
          return this === t;
        }, e.prototype.getHashCode = function () {
          return Math.trunc(this.x) ^ Math.trunc(this.y) ^ Math.trunc(this.width) ^ Math.trunc(this.height);
        }, e.prototype.clone = function () {
          return new e(this.x, this.y, this.width, this.height);
        }, e;
      }();

      t.Rectangle = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {
          this.remainder = 0;
        }

        return t.prototype.update = function (t) {
          this.remainder += t;
          var e = Math.trunc(this.remainder);
          return this.remainder -= e, t = e;
        }, t.prototype.reset = function () {
          this.remainder = 0;
        }, t;
      }();

      t.SubpixelFloat = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {
          this._x = new t.SubpixelFloat(), this._y = new t.SubpixelFloat();
        }

        return e.prototype.update = function (t) {
          t.x = this._x.update(t.x), t.y = this._y.update(t.y);
        }, e.prototype.reset = function () {
          this._x.reset(), this._y.reset();
        }, e;
      }();

      t.SubpixelVector2 = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e(e) {
          this._activeTriggerIntersections = new t.PairSet(), this._previousTriggerIntersections = new t.PairSet(), this._tempTriggerList = [], this._entity = e;
        }

        return e.prototype.update = function () {
          for (var e, n, i = [], r = this.getColliders(), o = 0; o < r.length; o++) for (var s = r[o], a = t.Physics.boxcastBroadphaseExcludingSelf(s, s.bounds, s.collidesWithLayers.value), c = 0; c < a.length; c++) {
            var h = a[c];

            if ((s.isTrigger || h.isTrigger) && s.overlaps(h)) {
              var u = new t.Pair(s, h);
              !this._activeTriggerIntersections.has(u) && !this._previousTriggerIntersections.has(u) && (h.castSortOrder >= t.Collider.lateSortOrder ? i.push(u) : this.notifyTriggerListeners(u, !0)), this._activeTriggerIntersections.add(u);
            }
          }

          try {
            for (var l = __values(i), p = l.next(); !p.done; p = l.next()) {
              u = p.value;
              this.notifyTriggerListeners(u, !0);
            }
          } catch (t) {
            e = {
              error: t
            };
          } finally {
            try {
              p && !p.done && (n = l.return) && n.call(l);
            } finally {
              if (e) throw e.error;
            }
          }

          this.checkForExitedColliders();
        }, e.prototype.getColliders = function () {
          for (var e = [], n = 0; n < this._entity.components.buffer.length; n++) {
            var i = this._entity.components.buffer[n];
            i instanceof t.Collider && e.push(i);
          }

          return e;
        }, e.prototype.checkForExitedColliders = function () {
          var t = this;
          this._previousTriggerIntersections.except(this._activeTriggerIntersections), this._previousTriggerIntersections.all.forEach(function (e) {
            t.notifyTriggerListeners(e, !1);
          }), this._previousTriggerIntersections.clear(), this._previousTriggerIntersections.union(this._activeTriggerIntersections), this._activeTriggerIntersections.clear();
        }, e.prototype.notifyTriggerListeners = function (e, n) {
          t.TriggerListenerHelper.getITriggerListener(e.first.entity, this._tempTriggerList);

          for (var i = 0; i < this._tempTriggerList.length; i++) if (n ? this._tempTriggerList[i].onTriggerEnter(e.second, e.first) : this._tempTriggerList[i].onTriggerExit(e.second, e.first), this._tempTriggerList.length = 0, e.second.entity) {
            t.TriggerListenerHelper.getITriggerListener(e.second.entity, this._tempTriggerList);

            for (var r = 0; r < this._tempTriggerList.length; r++) n ? this._tempTriggerList[r].onTriggerEnter(e.first, e.second) : this._tempTriggerList[r].onTriggerExit(e.first, e.second);

            this._tempTriggerList.length = 0;
          }
        }, e;
      }();

      t.ColliderTriggerHelper = e;
    }(es || (es = {})), function (t) {
      var e;
      !function (t) {
        t[t.center = 0] = "center", t[t.top = 1] = "top", t[t.bottom = 2] = "bottom", t[t.topLeft = 9] = "topLeft", t[t.topRight = 5] = "topRight", t[t.left = 8] = "left", t[t.right = 4] = "right", t[t.bottomLeft = 10] = "bottomLeft", t[t.bottomRight = 6] = "bottomRight";
      }(e = t.PointSectors || (t.PointSectors = {}));

      var n = function () {
        function n() {}

        return n.lineToLine = function (t, e, n, i) {
          var r = e.sub(t),
              o = i.sub(n),
              s = r.x * o.y - r.y * o.x;
          if (0 == s) return !1;
          var a = n.sub(t),
              c = (a.x * o.y - a.y * o.x) / s;
          if (c < 0 || c > 1) return !1;
          var h = (a.x * r.y - a.y * r.x) / s;
          return !(h < 0 || h > 1);
        }, n.lineToLineIntersection = function (e, n, i, r, o) {
          void 0 === o && (o = t.Vector2.zero), o.x = 0, o.y = 0;
          var s = n.sub(e),
              a = r.sub(i),
              c = s.x * a.y - s.y * a.x;
          if (0 == c) return !1;
          var h = i.sub(e),
              u = (h.x * a.y - h.y * a.x) / c;
          if (u < 0 || u > 1) return !1;
          var l = (h.x * s.y - h.y * s.x) / c;
          if (l < 0 || l > 1) return !1;
          var p = e.add(s.scale(u));
          return o.x = p.x, o.y = p.y, !0;
        }, n.closestPointOnLine = function (e, n, i) {
          var r = n.sub(e),
              o = i.sub(e).dot(r) / r.dot(r);
          return o = t.MathHelper.clamp(o, 0, 1), e.add(r.scale(o));
        }, n.circleToCircle = function (e, n, i, r) {
          return t.Vector2.sqrDistance(e, i) < (n + r) * (n + r);
        }, n.circleToLine = function (e, n, i, r) {
          return t.Vector2.sqrDistance(e, this.closestPointOnLine(i, r, e)) < n * n;
        }, n.circleToPoint = function (e, n, i) {
          return t.Vector2.sqrDistance(e, i) < n * n;
        }, n.rectToCircle = function (n, i, r) {
          if (this.rectToPoint(n.x, n.y, n.width, n.height, i)) return !0;
          var o,
              s,
              a = this.getSector(n.x, n.y, n.width, n.height, i);
          return !(0 == (a & e.top) || (o = new t.Vector2(n.x, n.y), s = new t.Vector2(n.x + n.width, n.y), !this.circleToLine(i, r, o, s))) || !(0 == (a & e.bottom) || (o = new t.Vector2(n.x, n.y + n.width), s = new t.Vector2(n.x + n.width, n.y + n.height), !this.circleToLine(i, r, o, s))) || !(0 == (a & e.left) || (o = new t.Vector2(n.x, n.y), s = new t.Vector2(n.x, n.y + n.height), !this.circleToLine(i, r, o, s))) || !(0 == (a & e.right) || (o = new t.Vector2(n.x + n.width, n.y), s = new t.Vector2(n.x + n.width, n.y + n.height), !this.circleToLine(i, r, o, s)));
        }, n.rectToLine = function (n, i, r) {
          var o = this.getSector(n.x, n.y, n.width, n.height, i),
              s = this.getSector(n.x, n.y, n.width, n.height, r);
          if (o == e.center || s == e.center) return !0;
          if (0 != (o & s)) return !1;
          var a = o | s,
              c = void 0,
              h = void 0;
          return !(0 == (a & e.top) || (c = new t.Vector2(n.x, n.y), h = new t.Vector2(n.x + n.width, n.y), !this.lineToLine(c, h, i, r))) || !(0 == (a & e.bottom) || (c = new t.Vector2(n.x, n.y + n.height), h = new t.Vector2(n.x + n.width, n.y + n.height), !this.lineToLine(c, h, i, r))) || !(0 == (a & e.left) || (c = new t.Vector2(n.x, n.y), h = new t.Vector2(n.x, n.y + n.height), !this.lineToLine(c, h, i, r))) || !(0 == (a & e.right) || (c = new t.Vector2(n.x + n.width, n.y), h = new t.Vector2(n.x + n.width, n.y + n.height), !this.lineToLine(c, h, i, r)));
        }, n.rectToPoint = function (t, e, n, i, r) {
          return r.x >= t && r.y >= e && r.x < t + n && r.y < e + i;
        }, n.getSector = function (t, n, i, r, o) {
          var s = e.center;
          return o.x < t ? s |= e.left : o.x >= t + i && (s |= e.right), o.y < n ? s |= e.top : o.y >= n + r && (s |= e.bottom), s;
        }, n;
      }();

      t.Collisions = n;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e(e, n, i, r, o) {
          this.fraction = 0, this.distance = 0, this.point = t.Vector2.zero, this.normal = t.Vector2.zero, this.collider = e, this.fraction = n, this.distance = i, this.point = r, this.centroid = t.Vector2.zero;
        }

        return e.prototype.setAllValues = function (t, e, n, i, r) {
          this.collider = t, this.fraction = e, this.distance = n, this.point = i, this.normal = r;
        }, e.prototype.setValues = function (t, e, n, i) {
          this.fraction = t, this.distance = e, this.point = n, this.normal = i;
        }, e.prototype.reset = function () {
          this.collider = null, this.fraction = this.distance = 0;
        }, e.prototype.clone = function () {
          var t = new e();
          return t.setAllValues(this.collider, this.fraction, this.distance, this.point, this.normal), t;
        }, e.prototype.toString = function () {
          return "[RaycastHit] fraction: " + this.fraction + ", distance: " + this.distance + ", normal: " + this.normal + ", centroid: " + this.centroid + ", point: " + this.point;
        }, e;
      }();

      t.RaycastHit = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return e.reset = function () {
          this._spatialHash = new t.SpatialHash(this.spatialHashCellSize), this._hitArray[0].reset(), this._colliderArray[0] = null;
        }, e.clear = function () {
          this._spatialHash.clear();
        }, e.debugDraw = function (t) {
          this.debugRender && this._spatialHash.debugDraw(t);
        }, e.overlapCircle = function (t, n, i) {
          return void 0 === i && (i = e.allLayers), this._colliderArray[0] = null, this._spatialHash.overlapCircle(t, n, this._colliderArray, i), this._colliderArray[0];
        }, e.overlapCircleAll = function (t, e, n, i) {
          return void 0 === i && (i = this.allLayers), this._spatialHash.overlapCircle(t, e, n, i);
        }, e.boxcastBroadphase = function (t, e) {
          return void 0 === e && (e = this.allLayers), this._spatialHash.aabbBroadphase(t, null, e);
        }, e.boxcastBroadphaseExcludingSelf = function (t, e, n) {
          return void 0 === n && (n = this.allLayers), this._spatialHash.aabbBroadphase(e, t, n);
        }, e.boxcastBroadphaseExcludingSelfNonRect = function (t, e) {
          void 0 === e && (e = this.allLayers);
          var n = t.bounds;
          return this._spatialHash.aabbBroadphase(n, t, e);
        }, e.boxcastBroadphaseExcludingSelfDelta = function (t, n, i, r) {
          void 0 === r && (r = e.allLayers);
          var o = t.bounds.getSweptBroadphaseBounds(n, i);
          return this._spatialHash.aabbBroadphase(o, t, r);
        }, e.addCollider = function (t) {
          e._spatialHash.register(t);
        }, e.removeCollider = function (t) {
          e._spatialHash.remove(t);
        }, e.updateCollider = function (t) {
          this._spatialHash.remove(t), this._spatialHash.register(t);
        }, e.linecast = function (t, n, i, r) {
          return void 0 === i && (i = this.allLayers), void 0 === r && (r = null), this._hitArray[0].reset(), this.linecastAll(t, n, this._hitArray, i), this._hitArray[0].reset(), e.linecastAll(t, n, this._hitArray, i, r), this._hitArray[0].clone();
        }, e.linecastAll = function (t, e, n, i, r) {
          return void 0 === i && (i = this.allLayers), void 0 === r && (r = null), this._spatialHash.linecast(t, e, n, i, r);
        }, e.overlapRectangle = function (t, n) {
          return void 0 === n && (n = e.allLayers), this._colliderArray[0] = null, this._spatialHash.overlapRectangle(t, this._colliderArray, n), this._colliderArray[0];
        }, e.overlapRectangleAll = function (t, n, i) {
          return void 0 === i && (i = e.allLayers), 0 == n.length ? (console.warn("????????????????????????????????????????????????????????????"), 0) : this._spatialHash.overlapRectangle(t, n, i);
        }, e.gravity = new t.Vector2(0, -300), e.spatialHashCellSize = 100, e.allLayers = -1, e.raycastsHitTriggers = !1, e.raycastsStartInColliders = !1, e.debugRender = !1, e._hitArray = [new t.RaycastHit()], e._colliderArray = [null], e;
      }();

      t.Physics = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t(t, e) {
          this._start = t.clone(), this._end = e.clone(), this._direction = this._end.sub(this._start);
        }

        return Object.defineProperty(t.prototype, "start", {
          get: function () {
            return this._start;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "direction", {
          get: function () {
            return this._direction;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "end", {
          get: function () {
            return this._end;
          },
          enumerable: !0,
          configurable: !0
        }), t;
      }();

      t.Ray2D = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e(e) {
          void 0 === e && (e = 100), this.gridBounds = new t.Rectangle(), this._overlapTestBox = new t.Box(0, 0), this._overlapTestCircle = new t.Circle(0), this._cellDict = new n(), this._tempHashSet = new Set(), this._cellSize = e, this._inverseCellSize = 1 / this._cellSize, this._raycastParser = new i();
        }

        return e.prototype.register = function (e) {
          var n = e.bounds.clone();
          e.registeredPhysicsBounds = n;
          var i = this.cellCoords(n.x, n.y),
              r = this.cellCoords(n.right, n.bottom);
          this.gridBounds.contains(i.x, i.y) || (this.gridBounds = t.RectangleExt.union(this.gridBounds, i)), this.gridBounds.contains(r.x, r.y) || (this.gridBounds = t.RectangleExt.union(this.gridBounds, r));

          for (var o = i.x; o <= r.x; o++) for (var s = i.y; s <= r.y; s++) {
            this.cellAtPosition(o, s, !0).push(e);
          }
        }, e.prototype.remove = function (e) {
          for (var n = e.registeredPhysicsBounds.clone(), i = this.cellCoords(n.x, n.y), r = this.cellCoords(n.right, n.bottom), o = i.x; o <= r.x; o++) for (var s = i.y; s <= r.y; s++) {
            var a = this.cellAtPosition(o, s);
            t.Insist.isNotNull(a, "???????????????????????????????????????????????????: [" + e + "]"), null != a && new t.List(a).remove(e);
          }
        }, e.prototype.removeWithBruteForce = function (t) {
          this._cellDict.remove(t);
        }, e.prototype.clear = function () {
          this._cellDict.clear();
        }, e.prototype.debugDraw = function (t) {
          for (var e = this.gridBounds.x; e <= this.gridBounds.right; e++) for (var n = this.gridBounds.y; n <= this.gridBounds.bottom; n++) {
            var i = this.cellAtPosition(e, n);
            null != i && i.length > 0 && this.debugDrawCellDetails(e, n, t);
          }
        }, e.prototype.debugDrawCellDetails = function (e, n, i) {
          void 0 === i && (i = .5), t.Graphics.instance.batcher.drawHollowRect(e * this._cellSize, n * this._cellSize, this._cellSize, this._cellSize, new t.Color(255, 0, 0), i), t.Graphics.instance.batcher.end();
        }, e.prototype.aabbBroadphase = function (e, n, i) {
          this._tempHashSet.clear();

          for (var r = this.cellCoords(e.x, e.y), o = this.cellCoords(e.right, e.bottom), s = r.x; s <= o.x; s++) for (var a = r.y; a <= o.y; a++) {
            var c = this.cellAtPosition(s, a);
            if (c) for (var h = 0; h < c.length; h++) {
              var u = c[h];
              u != n && t.Flags.isFlagSet(i, u.physicsLayer.value) && e.intersects(u.bounds) && this._tempHashSet.add(u);
            }
          }

          return Array.from(this._tempHashSet);
        }, e.prototype.linecast = function (e, n, i, r, o) {
          var s = new t.Ray2D(e, n);

          this._raycastParser.start(s, i, r, o);

          var a = this.cellCoords(e.x, e.y),
              c = this.cellCoords(n.x, n.y),
              h = Math.sign(s.direction.x),
              u = Math.sign(s.direction.y);
          a.x == c.x && (h = 0), a.y == c.y && (u = 0);

          var l = h < 0 ? 0 : h,
              p = u < 0 ? 0 : u,
              f = (a.x + l) * this._cellSize,
              d = (a.y + p) * this._cellSize,
              m = 0 != s.direction.x ? (f - s.start.x) / s.direction.x : Number.MAX_VALUE,
              y = 0 != s.direction.y ? (d - s.start.y) / s.direction.y : Number.MAX_VALUE,
              g = 0 != s.direction.x ? this._cellSize / (s.direction.x * h) : Number.MAX_VALUE,
              _ = 0 != s.direction.y ? this._cellSize / (s.direction.y * u) : Number.MAX_VALUE,
              v = this.cellAtPosition(a.x, a.y);

          if (null != v && this._raycastParser.checkRayIntersection(a.x, a.y, v)) return this._raycastParser.reset(), this._raycastParser.hitCounter;

          for (; a.x != c.x || a.y != c.y;) if (m < y ? (a.x = t.MathHelper.approach(a.x, c.x, Math.abs(h)), m += g) : (a.y = t.MathHelper.approach(a.y, c.y, Math.abs(u)), y += _), (v = this.cellAtPosition(a.x, a.y)) && this._raycastParser.checkRayIntersection(a.x, a.y, v)) return this._raycastParser.reset(), this._raycastParser.hitCounter;

          return this._raycastParser.reset(), this._raycastParser.hitCounter;
        }, e.prototype.overlapRectangle = function (e, n, i) {
          var r, o;
          this._overlapTestBox.updateBox(e.width, e.height), this._overlapTestBox.position = e.location.clone();
          var s = 0,
              a = this.aabbBroadphase(e, null, i);

          try {
            for (var c = __values(a), h = c.next(); !h.done; h = c.next()) {
              var u = h.value;
              if (u instanceof t.BoxCollider) n[s] = u, s++;else if (u instanceof t.CircleCollider) t.Collisions.rectToCircle(e, u.bounds.center, .5 * u.bounds.width) && (n[s] = u, s++);else {
                if (!(u instanceof t.PolygonCollider)) throw new Error("overlapRectangle???????????????????????????!");
                u.shape.overlaps(this._overlapTestBox) && (n[s] = u, s++);
              }
              if (s == n.length) return s;
            }
          } catch (t) {
            r = {
              error: t
            };
          } finally {
            try {
              h && !h.done && (o = c.return) && o.call(c);
            } finally {
              if (r) throw r.error;
            }
          }

          return s;
        }, e.prototype.overlapCircle = function (e, n, i, r) {
          var o,
              s,
              a = new t.Rectangle(e.x - n, e.y - n, 2 * n, 2 * n);
          this._overlapTestCircle.radius = n, this._overlapTestCircle.position = e;
          var c = 0,
              h = this.aabbBroadphase(a, null, r);

          try {
            for (var u = __values(h), l = u.next(); !l.done; l = u.next()) {
              var p = l.value;
              if (p instanceof t.BoxCollider) p.shape.overlaps(this._overlapTestCircle) && (i[c] = p, c++);else if (p instanceof t.CircleCollider) p.shape.overlaps(this._overlapTestCircle) && (i[c] = p, c++);else {
                if (!(p instanceof t.PolygonCollider)) throw new Error("???????????????????????????overlapCircle????????????!");
                p.shape.overlaps(this._overlapTestCircle) && (i[c] = p, c++);
              }
              if (c === i.length) return c;
            }
          } catch (t) {
            o = {
              error: t
            };
          } finally {
            try {
              l && !l.done && (s = u.return) && s.call(u);
            } finally {
              if (o) throw o.error;
            }
          }

          return c;
        }, e.prototype.cellCoords = function (e, n) {
          return new t.Vector2(Math.floor(e * this._inverseCellSize), Math.floor(n * this._inverseCellSize));
        }, e.prototype.cellAtPosition = function (t, e, n) {
          void 0 === n && (n = !1);

          var i = this._cellDict.tryGetValue(t, e);

          return i || n && (i = [], this._cellDict.add(t, e, i)), i;
        }, e;
      }();

      t.SpatialHash = e;

      var n = function () {
        function e() {
          this._store = new Map();
        }

        return e.prototype.add = function (t, e, n) {
          this._store.set(this.getKey(t, e), n);
        }, e.prototype.remove = function (e) {
          this._store.forEach(function (n) {
            var i = new t.List(n);
            i.contains(e) && i.remove(e);
          });
        }, e.prototype.tryGetValue = function (t, e) {
          return this._store.get(this.getKey(t, e));
        }, e.prototype.getKey = function (t, e) {
          return t + "_" + e;
        }, e.prototype.clear = function () {
          this._store.clear();
        }, e;
      }();

      t.NumberDictionary = n;

      var i = function () {
        function e() {
          this._tempHit = new t.RaycastHit(), this._checkedColliders = [], this._cellHits = [];
        }

        return e.prototype.start = function (t, e, n, i) {
          this._ray = t, this._hits = e, this._layerMask = n, this._ignoredColliders = i, this.hitCounter = 0;
        }, e.prototype.checkRayIntersection = function (n, i, r) {
          for (var o = 0; o < r.length; o++) {
            var s = r[o];

            if (!new t.List(this._checkedColliders).contains(s) && (this._checkedColliders.push(s), (!s.isTrigger || t.Physics.raycastsHitTriggers) && t.Flags.isFlagSet(this._layerMask, s.physicsLayer.value) && (!this._ignoredColliders || !this._ignoredColliders.has(s)))) {
              var a = s.bounds.rayIntersects(this._ray);

              if (a.intersected && a.distance <= 1 && s.shape.collidesWithLine(this._ray.start, this._ray.end, this._tempHit)) {
                if (!t.Physics.raycastsStartInColliders && s.shape.containsPoint(this._ray.start)) continue;
                this._tempHit.collider = s, this._cellHits.push(this._tempHit);
              }
            }
          }

          if (0 === this._cellHits.length) return !1;

          this._cellHits.sort(e.compareRaycastHits);

          for (o = 0; o < this._cellHits.length; o++) if (this._hits[this.hitCounter] = this._cellHits[o], this.hitCounter++, this.hitCounter === this._hits.length) return !0;

          return !1;
        }, e.prototype.reset = function () {
          this._hits = null, this._checkedColliders.length = 0, this._cellHits.length = 0, this._ignoredColliders = null;
        }, e.compareRaycastHits = function (t, e) {
          return t.distance !== e.distance ? t.distance - e.distance : t.collider.castSortOrder - e.collider.castSortOrder;
        }, e;
      }();

      t.RaycastResultParser = i;
    }(es || (es = {})), function (t) {
      var e = function () {
        return function () {};
      }();

      t.Shape = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n(t, n) {
          var i = e.call(this) || this;
          return i._areEdgeNormalsDirty = !0, i.isUnrotated = !0, i.setPoints(t), i.isBox = n, i;
        }

        return __extends(n, e), n.prototype.create = function (t, e) {
          n.buildSymmetricalPolygon(t, e);
        }, Object.defineProperty(n.prototype, "edgeNormals", {
          get: function () {
            return this._areEdgeNormalsDirty && this.buildEdgeNormals(), this._edgeNormals;
          },
          enumerable: !0,
          configurable: !0
        }), n.prototype.setPoints = function (t) {
          var e = this;
          this.points = t, this.recalculateCenterAndEdgeNormals(), this._originalPoints = [], this.points.forEach(function (t) {
            e._originalPoints.push(t.clone());
          });
        }, n.prototype.recalculateCenterAndEdgeNormals = function () {
          this._polygonCenter = n.findPolygonCenter(this.points), this._areEdgeNormalsDirty = !0;
        }, n.prototype.buildEdgeNormals = function () {
          var e,
              n = this.isBox ? 2 : this.points.length;
          null != this._edgeNormals && this._edgeNormals.length == n || (this._edgeNormals = new Array(n));

          for (var i = 0; i < n; i++) {
            var r = this.points[i];
            e = i + 1 >= this.points.length ? this.points[0] : this.points[i + 1];
            var o = t.Vector2Ext.perpendicular(r, e);
            t.Vector2Ext.normalize(o), this._edgeNormals[i] = o;
          }
        }, n.buildSymmetricalPolygon = function (e, n) {
          for (var i = new Array(e), r = 0; r < e; r++) {
            var o = 2 * Math.PI * (r / e);
            i[r] = new t.Vector2(Math.cos(o) * n, Math.sin(o) * n);
          }

          return i;
        }, n.recenterPolygonVerts = function (t) {
          for (var e = this.findPolygonCenter(t), n = 0; n < t.length; n++) t[n] = t[n].sub(e);
        }, n.findPolygonCenter = function (e) {
          for (var n = 0, i = 0, r = 0; r < e.length; r++) n += e[r].x, i += e[r].y;

          return new t.Vector2(n / e.length, i / e.length);
        }, n.getFarthestPointInDirection = function (t, e) {
          for (var n = 0, i = t[n].dot(e), r = 1; r < t.length; r++) {
            var o = t[r].dot(e);
            o > i && (i = o, n = r);
          }

          return t[n];
        }, n.getClosestPointOnPolygonToPoint = function (e, n) {
          for (var i = {
            distanceSquared: Number.MAX_VALUE,
            edgeNormal: t.Vector2.zero,
            closestPoint: t.Vector2.zero
          }, r = 0, o = 0; o < e.length; o++) {
            var s = o + 1;
            s === e.length && (s = 0);
            var a = t.ShapeCollisionsCircle.closestPointOnLine(e[o], e[s], n);

            if ((r = t.Vector2.sqrDistance(n, a)) < i.distanceSquared) {
              i.distanceSquared = r, i.closestPoint = a;
              var c = e[s].sub(e[o]);
              i.edgeNormal.x = c.y, i.edgeNormal.y = -c.x;
            }
          }

          return i.edgeNormal = i.edgeNormal.normalize(), i;
        }, n.rotatePolygonVerts = function (e, n, i) {
          for (var r = Math.cos(e), o = Math.sin(e), s = 0; s < n.length; s++) {
            var a = n[s];
            i[s] = new t.Vector2(a.x * r + a.y * -o, a.x * o + a.y * r);
          }
        }, n.prototype.recalculateBounds = function (e) {
          var n = this;

          if (this.center = e.localOffset, e.shouldColliderScaleAndRotateWithTransform) {
            var i = !0,
                r = new t.Matrix2D(),
                o = new t.Matrix2D();

            if (t.Matrix2D.createTranslation(-1 * this._polygonCenter.x, -1 * this._polygonCenter.y, o), !e.entity.transform.scale.equals(t.Vector2.one)) {
              t.Matrix2D.createScale(e.entity.scale.x, e.entity.scale.y, r), t.Matrix2D.multiply(o, r, o), i = !1;
              var s = new t.Vector2(e.localOffset.x * e.entity.scale.x, e.localOffset.y * e.entity.scale.y);
              this.center = s;
            }

            if (0 != e.entity.transform.rotation) {
              t.Matrix2D.createRotation(t.MathHelper.Deg2Rad * e.entity.rotation, r), t.Matrix2D.multiply(o, r, o);
              var a = Math.atan2(e.localOffset.y * e.entity.transform.scale.y, e.localOffset.x * e.entity.transform.scale.x) * t.MathHelper.Rad2Deg,
                  c = i ? e._localOffsetLength : e.localOffset.multiply(e.entity.transform.scale).magnitude();
              this.center = t.MathHelper.pointOnCirlce(t.Vector2.zero, c, e.entity.transform.rotationDegrees + a);
            }

            t.Matrix2D.createTranslation(this._polygonCenter.x, this._polygonCenter.y, r), t.Matrix2D.multiply(o, r, o), this.points = [], this._originalPoints.forEach(function (t) {
              n.points.push(t.transform(o));
            }), this.isUnrotated = 0 == e.entity.transform.rotation, e._isRotationDirty && (this._areEdgeNormalsDirty = !0);
          }

          this.position = e.transform.position.add(this.center), this.bounds = t.Rectangle.rectEncompassingPoints(this.points), this.bounds.location = this.bounds.location.add(this.position);
        }, n.prototype.overlaps = function (e) {
          var i = new t.CollisionResult();
          if (e instanceof n) return t.ShapeCollisionsPolygon.polygonToPolygon(this, e, i);
          if (e instanceof t.Circle) return !!t.ShapeCollisionsCircle.circleToPolygon(e, this, i) && (i.invertResult(), !0);
          throw new Error("overlaps of Pologon to " + e + " are not supported");
        }, n.prototype.collidesWithShape = function (e, i) {
          if (e instanceof n) return t.ShapeCollisionsPolygon.polygonToPolygon(this, e, i);
          if (e instanceof t.Circle) return !!t.ShapeCollisionsCircle.circleToPolygon(e, this, i) && (i.invertResult(), !0);
          throw new Error("overlaps of Polygon to " + e + " are not supported");
        }, n.prototype.collidesWithLine = function (e, n, i) {
          return t.ShapeCollisionsLine.lineToPoly(e, n, this, i);
        }, n.prototype.containsPoint = function (t) {
          t = t.sub(this.position);

          for (var e = !1, n = 0, i = this.points.length - 1; n < this.points.length; i = n++) this.points[n].y > t.y != this.points[i].y > t.y && t.x < (this.points[i].x - this.points[n].x) * (t.y - this.points[n].y) / (this.points[i].y - this.points[n].y) + this.points[n].x && (e = !e);

          return e;
        }, n.prototype.pointCollidesWithShape = function (e, n) {
          return t.ShapeCollisionsPoint.pointToPoly(e, this, n);
        }, n;
      }(t.Shape);

      t.Polygon = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n(t, i) {
          var r = e.call(this, n.buildBox(t, i), !0) || this;
          return r.width = t, r.height = i, r;
        }

        return __extends(n, e), n.buildBox = function (e, n) {
          var i = e / 2,
              r = n / 2,
              o = new Array(4);
          return o[0] = new t.Vector2(-i, -r), o[1] = new t.Vector2(i, -r), o[2] = new t.Vector2(i, r), o[3] = new t.Vector2(-i, r), o;
        }, n.prototype.updateBox = function (e, n) {
          this.width = e, this.height = n;
          var i = e / 2,
              r = n / 2;
          this.points[0] = new t.Vector2(-i, -r), this.points[1] = new t.Vector2(i, -r), this.points[2] = new t.Vector2(i, r), this.points[3] = new t.Vector2(-i, r);

          for (var o = 0; o < this.points.length; o++) this._originalPoints[o] = this.points[o];
        }, n.prototype.overlaps = function (i) {
          if (this.isUnrotated) {
            if (i instanceof n && i.isUnrotated) return this.bounds.intersects(i.bounds);
            if (i instanceof t.Circle) return t.Collisions.rectToCircle(this.bounds, i.position, i.radius);
          }

          return e.prototype.overlaps.call(this, i);
        }, n.prototype.collidesWithShape = function (i, r) {
          return i instanceof n && i.isUnrotated ? t.ShapeCollisionsBox.boxToBox(this, i, r) : e.prototype.collidesWithShape.call(this, i, r);
        }, n.prototype.containsPoint = function (t) {
          return this.isUnrotated ? this.bounds.contains(t.x, t.y) : e.prototype.containsPoint.call(this, t);
        }, n.prototype.pointCollidesWithShape = function (n, i) {
          return this.isUnrotated ? t.ShapeCollisionsPoint.pointToBox(n, this, i) : e.prototype.pointCollidesWithShape.call(this, n, i);
        }, n;
      }(t.Polygon);

      t.Box = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n(t) {
          var n = e.call(this) || this;
          return n.radius = t, n._originalRadius = t, n;
        }

        return __extends(n, e), n.prototype.recalculateBounds = function (e) {
          if (this.center = e.localOffset, e.shouldColliderScaleAndRotateWithTransform) {
            var n = e.entity.transform.scale,
                i = 1 === n.x && 1 === n.y,
                r = Math.max(n.x, n.y);

            if (this.radius = this._originalRadius * r, 0 !== e.entity.transform.rotation) {
              var o = Math.atan2(e.localOffset.y, e.localOffset.x) * t.MathHelper.Rad2Deg,
                  s = i ? e._localOffsetLength : e.localOffset.multiply(e.entity.transform.scale).magnitude();
              this.center = t.MathHelper.pointOnCirlce(t.Vector2.zero, s, e.entity.transform.rotation + o);
            }
          }

          this.position = e.transform.position.add(this.center), this.bounds = new t.Rectangle(this.position.x - this.radius, this.position.y - this.radius, 2 * this.radius, 2 * this.radius);
        }, n.prototype.overlaps = function (e) {
          var i = new t.CollisionResult();
          if (e instanceof t.Box && e.isUnrotated) return t.Collisions.rectToCircle(e.bounds, this.position, this.radius);
          if (e instanceof n) return t.Collisions.circleToCircle(this.position, this.radius, e.position, e.radius);
          if (e instanceof t.Polygon) return t.ShapeCollisionsCircle.circleToPolygon(this, e, i);
          throw new Error("overlaps of circle to " + e + " are not supported");
        }, n.prototype.collidesWithShape = function (e, i) {
          if (e instanceof t.Box && e.isUnrotated) return t.ShapeCollisionsCircle.circleToBox(this, e, i);
          if (e instanceof n) return t.ShapeCollisionsCircle.circleToCircle(this, e, i);
          if (e instanceof t.Polygon) return t.ShapeCollisionsCircle.circleToPolygon(this, e, i);
          throw new Error("Collisions of Circle to " + e + " are not supported");
        }, n.prototype.collidesWithLine = function (e, n, i) {
          return t.ShapeCollisionsLine.lineToCircle(e, n, this, i);
        }, n.prototype.getPointAlongEdge = function (e) {
          return new t.Vector2(this.position.x + this.radius * Math.cos(e), this.position.y + this.radius * Math.sin(e));
        }, n.prototype.containsPoint = function (t) {
          return t.sub(this.position).lengthSquared() <= this.radius * this.radius;
        }, n.prototype.pointCollidesWithShape = function (e, n) {
          return t.ShapeCollisionsPoint.pointToCircle(e, this, n);
        }, n;
      }(t.Shape);

      t.Circle = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {
          this.normal = t.Vector2.zero, this.minimumTranslationVector = t.Vector2.zero, this.point = t.Vector2.zero;
        }

        return e.prototype.reset = function () {
          this.collider = null, this.normal.setTo(0, 0), this.minimumTranslationVector.setTo(0, 0), this.point && this.point.setTo(0, 0);
        }, e.prototype.cloneTo = function (e) {
          e.collider = this.collider, e.normal.setTo(this.normal.x, this.normal.y), e.minimumTranslationVector.setTo(this.minimumTranslationVector.x, this.minimumTranslationVector.y), this.point && (e.point || (e.point = new t.Vector2(0, 0)), e.point.setTo(this.point.x, this.point.y));
        }, e.prototype.removeHorizontalTranslation = function (e) {
          if (Math.sign(this.normal.x) !== Math.sign(e.x) || 0 === e.x && 0 !== this.normal.x) {
            var n = this.minimumTranslationVector.magnitude() / this.normal.y;
            1 != Math.abs(this.normal.x) && Math.abs(n) < Math.abs(3 * e.y) && (this.minimumTranslationVector = new t.Vector2(0, -n));
          }
        }, e.prototype.invertResult = function () {
          this.minimumTranslationVector = this.minimumTranslationVector.negate(), this.normal = this.normal.negate();
        }, e.prototype.toString = function () {
          return "[CollisionResult] normal: " + this.normal + ", minimumTranslationVector: " + this.minimumTranslationVector;
        }, e;
      }();

      t.CollisionResult = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return e.intersectMovingCircleBox = function (e, n, i, r) {
          var o = n.bounds;
          o.inflate(e.radius, e.radius);
          var s = new t.Ray2D(e.position.sub(i), e.position),
              a = o.rayIntersects(s);
          if (!a.intersected && a.distance > 1) return !1;
          var c,
              h = s.start.add(s.direction.scale(r)),
              u = 0;
          h.x < n.bounds.left && (c |= 1), h.x > n.bounds.right && (u |= 1), h.y < n.bounds.top && (c |= 2), h.y > n.bounds.bottom && (u |= 2);
          var l = c + u;
          return 3 == l && console.log("m == 3. corner " + t.Time.frameCount), !0;
        }, e.corner = function (e, n) {
          var i = t.Vector2.zero;
          return i.x = 0 == (1 & n) ? e.right : e.left, i.y = 0 == (1 & n) ? e.bottom : e.top, i;
        }, e.testCircleBox = function (t, e, n) {
          var i = e.bounds.getClosestPointOnRectangleToPoint(t.position).sub(t.position);
          return i.dot(i) <= t.radius * t.radius;
        }, e;
      }();

      t.RealtimeCollisions = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return e.boxToBox = function (e, n, i) {
          var r = this.minkowskiDifference(e, n);
          return !!r.contains(0, 0) && (i.minimumTranslationVector = r.getClosestPointOnBoundsToOrigin(), !i.minimumTranslationVector.equals(t.Vector2.zero) && (i.normal = i.minimumTranslationVector.scale(-1), i.normal = i.normal.normalize(), !0));
        }, e.boxToBoxCast = function (e, n, i, r) {
          var o = this.minkowskiDifference(e, n);

          if (o.contains(0, 0)) {
            var s = o.getClosestPointOnBoundsToOrigin();
            return !s.equals(t.Vector2.zero) && (r.normal = new t.Vector2(-s.x, -s.y), r.normal = r.normal.normalize(), r.distance = 0, r.fraction = 0, !0);
          }

          var a = new t.Ray2D(t.Vector2.zero, i.scale(-1)),
              c = o.rayIntersects(a);
          return !!(c.intersected && c.distance <= 1) && (r.fraction = c.distance, r.distance = i.magnitude() * c.distance, r.normal = i.scale(-1), r.normal = r.normal.normalize(), r.centroid = e.bounds.center.add(i.scale(c.distance)), !0);
        }, e.minkowskiDifference = function (e, n) {
          var i = e.position.sub(e.bounds.center),
              r = e.bounds.location.add(i.sub(n.bounds.max)),
              o = e.bounds.size.add(n.bounds.size);
          return new t.Rectangle(r.x, r.y, o.x, o.y);
        }, e;
      }();

      t.ShapeCollisionsBox = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return e.circleToCircleCast = function (e, n, i, r) {
          var o = e.position.add(i),
              s = this.closestPointOnLine(e.position, o, n.position),
              a = t.Vector2.sqrDistance(n.position, s),
              c = (e.radius + n.radius) * (e.radius + n.radius);

          if (a <= c) {
            var h = i.normalize();
            s === o && (o = e.position.add(i.add(h.scale(n.radius))), s = this.closestPointOnLine(e.position, o, n.position), a = t.Vector2.sqrDistance(n.position, s));
            var u = Math.sqrt(c - a);
            return r.centroid = s.sub(h.scale(u)), r.normal = r.centroid.sub(n.position).normalize(), r.fraction = (r.centroid.x - e.position.x) / i.x, r.distance = t.Vector2.distance(e.position, r.centroid), r.point = n.position.add(r.normal.scale(n.radius)), !0;
          }

          return !1;
        }, e.circleToCircle = function (e, n, i) {
          void 0 === i && (i = new t.CollisionResult());
          var r = t.Vector2.sqrDistance(e.position, n.position),
              o = e.radius + n.radius;

          if (r < o * o) {
            i.normal = e.position.sub(n.position).normalize();
            var s = o - Math.sqrt(r);
            return i.minimumTranslationVector = i.normal.scale(-s), i.point = n.position.add(i.normal.scale(n.radius)), !0;
          }

          return !1;
        }, e.circleToBox = function (e, n, i) {
          void 0 === i && (i = new t.CollisionResult());
          var r = n.bounds.getClosestPointOnRectangleBorderToPoint(e.position, i.normal);

          if (n.containsPoint(e.position)) {
            i.point = r;
            var o = r.add(i.normal.scale(e.radius));
            return i.minimumTranslationVector = e.position.sub(o), !0;
          }

          var s = t.Vector2.sqrDistance(r, e.position);
          if (0 == s) i.minimumTranslationVector = i.normal.scale(e.radius);else if (s <= e.radius * e.radius) {
            i.normal = e.position.sub(r);
            var a = i.normal.magnitude() - e.radius;
            return i.point = r, i.normal = i.normal.normalize(), i.minimumTranslationVector = i.normal.scale(a), !0;
          }
          return !1;
        }, e.circleToPolygon = function (e, n, i) {
          void 0 === i && (i = new t.CollisionResult());
          var r = e.position.sub(n.position),
              o = t.Polygon.getClosestPointOnPolygonToPoint(n.points, r);
          i.normal = o.edgeNormal;
          var s,
              a = n.containsPoint(e.position);
          if (o.distanceSquared > e.radius * e.radius && !a) return !1;
          if (a) s = i.normal.scale(Math.sqrt(o.distanceSquared) - e.radius);else if (0 === o.distanceSquared) s = i.normal.scale(e.radius);else {
            var c = Math.sqrt(o.distanceSquared);
            s = r.sub(o.closestPoint).scale((e.radius - c) / c * -1);
          }
          return i.minimumTranslationVector = s, i.point = o.closestPoint.add(n.position), !0;
        }, e.closestPointOnLine = function (e, n, i) {
          var r = n.sub(e),
              o = i.sub(e).dot(r) / r.dot(r);
          return o = t.MathHelper.clamp(o, 0, 1), e.add(r.scaleEqual(o));
        }, e;
      }();

      t.ShapeCollisionsCircle = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return e.lineToPoly = function (n, i, r, o) {
          void 0 === o && (o = new t.RaycastHit());

          for (var s = t.Vector2.zero, a = t.Vector2.zero, c = Number.MAX_VALUE, h = !1, u = r.points.length - 1, l = 0; l < r.points.length; u = l, l++) {
            var p = t.Vector2.add(r.position, r.points[u]),
                f = t.Vector2.add(r.position, r.points[l]),
                d = t.Vector2.zero;

            if (e.lineToLine(p, f, n, i, d)) {
              h = !0;
              var m = (d.x - n.x) / (i.x - n.x);

              if ((Number.isNaN(m) || Math.abs(m) == 1 / 0) && (m = (d.y - n.y) / (i.y - n.y)), m < c) {
                var y = f.sub(p);
                s = new t.Vector2(y.y, -y.x), c = m, a = d;
              }
            }
          }

          if (h) {
            s = s.normalize();
            var g = t.Vector2.distance(n, a);
            return o.setValues(c, g, a, s), !0;
          }

          return !1;
        }, e.lineToLine = function (t, e, n, i, r) {
          var o = e.sub(t),
              s = i.sub(n),
              a = o.x * s.y - o.y * s.x;
          if (0 == a) return !1;
          var c = n.sub(t),
              h = (c.x * s.y - c.y * s.x) / a;
          if (h < 0 || h > 1) return !1;
          var u = (c.x * o.y - c.y * o.x) / a;
          if (u < 0 || u > 1) return !1;
          var l = t.add(o.scale(h));
          return r.x = l.x, r.y = l.y, !0;
        }, e.lineToCircle = function (e, n, i, r) {
          var o = t.Vector2.distance(e, n),
              s = t.Vector2.divideScaler(n.sub(e), o),
              a = e.sub(i.position),
              c = a.dot(s),
              h = a.dot(a) - i.radius * i.radius;
          if (h > 0 && c > 0) return !1;
          var u = c * c - h;
          return !(u < 0) && (r.fraction = -c - Math.sqrt(u), r.fraction < 0 && (r.fraction = 0), r.point = e.add(s.scale(r.fraction)), r.distance = t.Vector2.distance(e, r.point), r.normal = r.point.sub(i.position).normalize(), r.fraction = r.distance / o, !0);
        }, e;
      }();

      t.ShapeCollisionsLine = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return e.pointToCircle = function (e, n, i) {
          var r = t.Vector2.sqrDistance(e, n.position),
              o = 1 + n.radius;

          if (r < o * o) {
            i.normal = e.sub(n.position).normalize();
            var s = o - Math.sqrt(r);
            return i.minimumTranslationVector = i.normal.scale(-s), i.point = n.position.add(i.normal.scale(n.radius)), !0;
          }

          return !1;
        }, e.pointToBox = function (e, n, i) {
          return void 0 === i && (i = new t.CollisionResult()), !!n.containsPoint(e) && (i.point = n.bounds.getClosestPointOnRectangleBorderToPoint(e, i.normal), i.minimumTranslationVector = e.sub(i.point), !0);
        }, e.pointToPoly = function (e, n, i) {
          if (void 0 === i && (i = new t.CollisionResult()), n.containsPoint(e)) {
            var r = t.Polygon.getClosestPointOnPolygonToPoint(n.points, e.sub(n.position));
            return i.normal = r.edgeNormal, i.minimumTranslationVector = i.normal.scale(Math.sqrt(r.distanceSquared)), i.point = r.closestPoint.sub(n.position), !0;
          }

          return !1;
        }, e;
      }();

      t.ShapeCollisionsPoint = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return e.polygonToPolygon = function (e, n, i) {
          for (var r, o = !0, s = e.edgeNormals, a = n.edgeNormals, c = Number.POSITIVE_INFINITY, h = t.Vector2.zero, u = e.position.sub(n.position), l = 0; l < s.length + a.length; l++) {
            r = l < s.length ? s[l] : a[l - s.length];
            var p = 0,
                f = this.getInterval(r, e),
                d = f.min,
                m = f.max,
                y = this.getInterval(r, n),
                g = y.min,
                _ = y.max,
                v = u.dot(r);
            if (d += v, m += v, (p = this.intervalDistance(d, m, g, _)) > 0 && (o = !1), !o) return !1;
            (p = Math.abs(p)) < c && (c = p, h.setTo(r.x, r.y), h.dot(u) < 0 && (h = h.scale(-1)));
          }

          return i.normal = h, i.minimumTranslationVector = h.scale(-c), !0;
        }, e.getInterval = function (t, e) {
          var n,
              i = {
            min: 0,
            max: 0
          };
          n = e.points[0].dot(t), i.max = n, i.min = n;

          for (var r = 1; r < e.points.length; r++) (n = e.points[r].dot(t)) < i.min ? i.min = n : n > i.max && (i.max = n);

          return i;
        }, e.intervalDistance = function (t, e, n, i) {
          return t < n ? n - e : t - i;
        }, e;
      }();

      t.ShapeCollisionsPolygon = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e(e) {
          this.position = t.Vector2.zero, this.lastPosition = t.Vector2.zero, this.mass = 1, this.radius = 0, this.collidesWithColliders = !0, this.isPinned = !1, this.acceleration = t.Vector2.zero, this.pinnedPosition = t.Vector2.zero, this.position = new t.Vector2(e.x, e.y), this.lastPosition = new t.Vector2(e.x, e.y);
        }

        return e.prototype.applyForce = function (t) {
          this.acceleration = this.acceleration.add(t.divideScaler(this.mass));
        }, e.prototype.pin = function () {
          return this.isPinned = !0, this.pinnedPosition = this.position, this;
        }, e.prototype.pinTo = function (t) {
          return this.isPinned = !0, this.pinnedPosition = t, this.position = this.pinnedPosition, this;
        }, e.prototype.unpin = function () {
          return this.isPinned = !1, this;
        }, e;
      }();

      t.Particle = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e(e) {
          void 0 === e && (e = null), this.gravity = new t.Vector2(0, -980), this.constraintIterations = 3, this.maximumStepIterations = 5, this.allowDragging = !0, this.selectionRadiusSquared = 400, this._composites = [], this._tempCircle = new t.Circle(1), this._leftOverTime = 0, this._fixedDeltaTime = 1 / 60, this._iterationSteps = 0, this._fixedDeltaTimeSq = 0, this.simulationBounds = e, this._fixedDeltaTimeSq = Math.pow(this._fixedDeltaTime, 2);
        }

        return e.prototype.update = function () {
          this.updateTiming(), this.allowDragging && this.handleDragging();

          for (var t = 1; t <= this._iterationSteps; t++) for (var e = this._composites.length - 1; e >= 0; e--) {
            for (var n = this._composites[e], i = 0; i < this.constraintIterations; i++) n.solveConstraints();

            n.updateParticles(this._fixedDeltaTimeSq, this.gravity), n.handleConstraintCollisions();

            for (var r = 0; r < n.particles.length; r++) {
              var o = n.particles[r];
              this.simulationBounds && this.constrainParticleToBounds(o), o.collidesWithColliders && this.handleCollisions(o, n.collidesWithLayers);
            }
          }
        }, e.prototype.constrainParticleToBounds = function (t) {
          var e = t.position,
              n = this.simulationBounds;
          0 == t.radius ? (e.y > n.height ? e.y = n.height : e.y < n.y && (e.y = n.y), e.x < n.x ? e.x = n.x : e.x > n.width && (e.x = n.width)) : (e.y < n.y + t.radius && (e.y = 2 * (n.y + t.radius) - e.y), e.y > n.height - t.radius && (e.y = 2 * (n.height - t.radius) - e.y), e.x > n.width - t.radius && (e.x = 2 * (n.width - t.radius) - e.x), e.x < n.x + t.radius && (e.x = 2 * (n.x + t.radius) - e.x)), t.position = e;
        }, e.prototype.handleCollisions = function (n, i) {
          for (var r = t.Physics.overlapCircleAll(n.position, n.radius, e._colliders, i), o = 0; o < r; o++) {
            var s = e._colliders[o];

            if (!s.isTrigger) {
              var a = new t.CollisionResult();
              n.radius < 2 ? s.shape.pointCollidesWithShape(n.position, a) && (n.position = n.position.sub(a.minimumTranslationVector)) : (this._tempCircle.radius = n.radius, this._tempCircle.position = n.position, this._tempCircle.collidesWithShape(s.shape, a) && (n.position = n.position.sub(a.minimumTranslationVector)));
            }
          }
        }, e.prototype.updateTiming = function () {
          this._leftOverTime += t.Time.deltaTime, this._iterationSteps = Math.trunc(this._leftOverTime / this._fixedDeltaTime), this._leftOverTime -= this._iterationSteps * this._fixedDeltaTime, this._iterationSteps = Math.min(this._iterationSteps, this.maximumStepIterations);
        }, e.prototype.addComposite = function (t) {
          return this._composites.push(t), t;
        }, e.prototype.removeComposite = function (t) {
          var e = this._composites.indexOf(t);

          this._composites.splice(e, 1);
        }, e.prototype.handleDragging = function () {
          this.onHandleDrag && this.onHandleDrag();
        }, e.prototype.getNearestParticle = function (e) {
          for (var n = this.selectionRadiusSquared, i = null, r = 0; r < this._composites.length; r++) for (var o = this._composites[r].particles, s = 0; s < o.length; s++) {
            var a = o[s],
                c = t.Vector2.sqrDistance(a.position, e);
            c <= this.selectionRadiusSquared && (null == i || c < n) && (i = a, n = c);
          }

          return i;
        }, e.prototype.debugRender = function (e) {
          for (var n = 0; n < this._composites.length; n++) this._composites[n].debugRender(e);

          this.allowDragging && null != this._draggedParticle && e.drawCircle(this._draggedParticle.position, 8, t.Color.White);
        }, e._colliders = [], e;
      }();

      t.VerletWorld = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {
          this.friction = new t.Vector2(.98, 1), this.drawParticles = !0, this.drawConstraints = !0, this.collidesWithLayers = t.Physics.allLayers, this.particles = [], this._constraints = [];
        }

        return e.prototype.addParticle = function (t) {
          return this.particles.push(t), t;
        }, e.prototype.removeParticle = function (t) {
          var e = this.particles.indexOf(t);
          this.particles.splice(e, 1);
        }, e.prototype.removeAll = function () {
          this.particles.length = 0, this._constraints.length = 0;
        }, e.prototype.addConstraint = function (t) {
          return this._constraints.push(t), t.composite = this, t;
        }, e.prototype.removeConstraint = function (t) {
          var e = this._constraints.indexOf(t);

          this._constraints.splice(e, 1);
        }, e.prototype.applyForce = function (t) {
          for (var e = 0; e < this.particles.length; e++) this.particles[e].applyForce(t);
        }, e.prototype.solveConstraints = function () {
          for (var t = this._constraints.length - 1; t >= 0; t--) this._constraints[t].solve();
        }, e.prototype.updateParticles = function (t, e) {
          for (var n = 0; n < this.particles.length; n++) {
            var i = this.particles[n];
            if (i.isPinned) i.position = i.pinnedPosition;else {
              i.applyForce(e.scale(i.mass));
              var r = i.position.sub(i.lastPosition).multiply(this.friction),
                  o = i.position.add(r).add(i.acceleration.scale(.5 * t));
              i.lastPosition = i.position, i.position = o, i.acceleration.x = i.acceleration.y = 0;
            }
          }
        }, e.prototype.handleConstraintCollisions = function () {
          for (var t = this._constraints.length - 1; t >= 0; t--) this._constraints[t].collidesWithColliders && this._constraints[t].handleCollisions(this.collidesWithLayers);
        }, e.prototype.debugRender = function (e) {
          if (this.drawConstraints) for (var n = 0; n < this._constraints.length; n++) this._constraints[n].debugRender(e);
          if (this.drawParticles) for (n = 0; n < this.particles.length; n++) 0 == this.particles[n].radius ? e.drawPixel(this.particles[n].position, new t.Color(220, 52, 94), 4) : e.drawCircleLow(this.particles[n].position, this.particles[n].radius, new t.Color(220, 52, 94), 1, 4);
        }, e;
      }();

      t.Composite = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n(n, i) {
          void 0 === i && (i = 10);
          var r = e.call(this) || this;
          return r.addParticle(new t.Particle(n)).radius = i, r;
        }

        return __extends(n, e), n;
      }(t.Composite);

      t.Ball = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n(n, i, r, o, s) {
          void 0 === o && (o = .2), void 0 === s && (s = .5);
          var a = e.call(this) || this,
              c = a.addParticle(new t.Particle(n.add(new t.Vector2(-i / 2, -r / 2)))),
              h = a.addParticle(new t.Particle(n.add(new t.Vector2(i / 2, -r / 2)))),
              u = a.addParticle(new t.Particle(n.add(new t.Vector2(i / 2, r / 2)))),
              l = a.addParticle(new t.Particle(n.add(new t.Vector2(-i / 2, r / 2))));
          return a.addConstraint(new t.DistanceConstraint(c, h, o)), a.addConstraint(new t.DistanceConstraint(h, u, o)), a.addConstraint(new t.DistanceConstraint(u, l, o)), a.addConstraint(new t.DistanceConstraint(l, c, o)), a.addConstraint(new t.DistanceConstraint(c, u, s)).setCollidesWithColliders(!1), a.addConstraint(new t.DistanceConstraint(l, h, s)).setCollidesWithColliders(!1), a;
        }

        return __extends(n, e), n;
      }(t.Composite);

      t.VerletBox = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n(n, i, r, o, s, a, c) {
          void 0 === o && (o = 20), void 0 === s && (s = .25), void 0 === a && (a = 5), void 0 === c && (c = !0);

          for (var h = e.call(this) || this, u = i / o, l = r / o, p = 0; p < o; p++) for (var f = 0; f < o; f++) {
            var d = n.x + f * u,
                m = n.y + p + l,
                y = h.addParticle(new t.Particle(new t.Vector2(d, m)));
            c && f > 0 && h.addConstraint(new t.DistanceConstraint(h.particles[p * o + f], h.particles[p * o + f - 1], s)).setTearSensitivity(a).setCollidesWithColliders(!1), p > 0 && h.addConstraint(new t.DistanceConstraint(h.particles[p * o + f], h.particles[(p - 1) * o + f], s)).setTearSensitivity(a).setCollidesWithColliders(!1), 0 == p && y.pin();
          }

          return h;
        }

        return __extends(n, e), n;
      }(t.Composite);

      t.Cloth = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n(n, i) {
          for (var r = e.call(this) || this, o = 0; o < n.length; o++) {
            var s = new t.Particle(n[o]);
            r.addParticle(s), o > 0 && r.addConstraint(new t.DistanceConstraint(r.particles[o], r.particles[o - 1], i));
          }

          return r;
        }

        return __extends(n, e), n.prototype.pinParticleAtIndex = function (t) {
          return this.particles[t].pin(), this;
        }, n;
      }(t.Composite);

      t.LineSegments = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n(n, i, r) {
          var o = e.call(this) || this,
              s = r / 7.5,
              a = o.addParticle(new t.Particle({
            x: n + t.RandomUtils.randint(-5, 5),
            y: i + t.RandomUtils.randint(-5, 5)
          }));
          a.radius = .75 * s, a.mass = 4;
          var c = o.addParticle(new t.Particle({
            x: n + t.RandomUtils.randint(-5, 5),
            y: i + t.RandomUtils.randint(-5, 5)
          }));
          c.mass = 26, o.addConstraint(new t.DistanceConstraint(a, c, 1, 5 / 4 * s));
          var h = o.addParticle(new t.Particle({
            x: n + t.RandomUtils.randint(-5, 5),
            y: i + t.RandomUtils.randint(-5, 5)
          })),
              u = o.addParticle(new t.Particle({
            x: n + t.RandomUtils.randint(-5, 5),
            y: i + t.RandomUtils.randint(-5, 5)
          }));
          h.mass = 2, u.mass = 2, o.addConstraint(new t.DistanceConstraint(h, c, 1, 3 * s / 2)), o.addConstraint(new t.DistanceConstraint(u, c, 1, 3 * s / 2));
          var l = o.addParticle(new t.Particle({
            x: n + t.RandomUtils.randint(-5, 5),
            y: i + t.RandomUtils.randint(-5, 5)
          })),
              p = o.addParticle(new t.Particle({
            x: n + t.RandomUtils.randint(-5, 5),
            y: i + t.RandomUtils.randint(-5, 5)
          }));
          l.mass = 2, p.mass = 2, o.addConstraint(new t.DistanceConstraint(l, h, 1, 2 * s)), o.addConstraint(new t.DistanceConstraint(p, u, 1, 2 * s));
          var f = o.addParticle(new t.Particle({
            x: n + t.RandomUtils.randint(-5, 5),
            y: i + t.RandomUtils.randint(-5, 5)
          }));
          f.mass = 15, o.addConstraint(new t.DistanceConstraint(f, c, .8, 3.5 * s)), o.addConstraint(new t.DistanceConstraint(f, a, .02, 2 * r)).setCollidesWithColliders(!1);
          var d = o.addParticle(new t.Particle({
            x: n + t.RandomUtils.randint(-5, 5),
            y: i + t.RandomUtils.randint(-5, 5)
          })),
              m = o.addParticle(new t.Particle({
            x: n + t.RandomUtils.randint(-5, 5),
            y: i + t.RandomUtils.randint(-5, 5)
          }));
          d.mass = 10, m.mass = 10, o.addConstraint(new t.DistanceConstraint(d, f, 1, 2 * s)), o.addConstraint(new t.DistanceConstraint(m, f, 1, 2 * s));
          var y = o.addParticle(new t.Particle({
            x: n + t.RandomUtils.randint(-5, 5),
            y: i + t.RandomUtils.randint(-5, 5)
          })),
              g = o.addParticle(new t.Particle({
            x: n + t.RandomUtils.randint(-5, 5),
            y: i + t.RandomUtils.randint(-5, 5)
          }));
          return y.mass = 5, g.mass = 5, o.addConstraint(new t.DistanceConstraint(y, d, 1, 2 * s)), o.addConstraint(new t.DistanceConstraint(g, m, 1, 2 * s)), o.addConstraint(new t.DistanceConstraint(y, c, .001, 2 * r)).setCollidesWithColliders(!1), o.addConstraint(new t.DistanceConstraint(y, c, .001, 2 * r)).setCollidesWithColliders(!1), o;
        }

        return __extends(n, e), n;
      }(t.Composite);

      t.Ragdoll = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n(n, i, r, o, s) {
          void 0 === o && (o = 1), void 0 === s && (s = 1);

          for (var a = e.call(this) || this, c = 2 * Math.PI / r, h = 0; h < r; h++) {
            var u = h * c;
            a.addParticle(new t.Particle(new t.Vector2(n.x + Math.cos(u) * i, n.y + Math.sin(u) * i)));
          }

          var l = a.addParticle(new t.Particle(n));

          for (h = 0; h < r; h++) a.addConstraint(new t.DistanceConstraint(a.particles[h], a.particles[(h + 1) % r], s)), a.addConstraint(new t.DistanceConstraint(a.particles[h], l, o)).setCollidesWithColliders(!1), a.addConstraint(new t.DistanceConstraint(a.particles[h], a.particles[(h + 5) % r], s));

          return a;
        }

        return __extends(n, e), n;
      }(t.Composite);

      t.Tire = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {
          this.collidesWithColliders = !0;
        }

        return t.prototype.handleCollisions = function (t) {}, t.prototype.debugRender = function (t) {}, t;
      }();

      t.Constraint = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n(t, n, i, r) {
          var o = e.call(this) || this;
          return o.stiffness = 0, o.angleInRadius = 0, o._particleA = t, o._centerParticle = n, o._particleC = i, o.stiffness = r, o.collidesWithColliders = !1, o.angleInRadius = o.angleBetweenParticles(), o;
        }

        return __extends(n, e), n.prototype.angleBetweenParticles = function () {
          var t = this._particleA.position.sub(this._centerParticle.position),
              e = this._particleC.position.sub(this._centerParticle.position);

          return Math.atan2(t.x * e.y - t.y * e.x, t.x * e.x + t.y * e.y);
        }, n.prototype.solve = function () {
          var e = this.angleBetweenParticles() - this.angleInRadius;
          e <= -Math.PI ? e += 2 * Math.PI : e >= Math.PI && (e -= 2 * Math.PI), e *= this.stiffness, this._particleA.position = t.MathHelper.rotateAround2(this._particleA.position, this._centerParticle.position, e), this._particleC.position = t.MathHelper.rotateAround2(this._particleC.position, this._centerParticle.position, -e), this._centerParticle.position = t.MathHelper.rotateAround2(this._centerParticle.position, this._particleA.position, e), this._centerParticle.position = t.MathHelper.rotateAround2(this._centerParticle.position, this._particleC.position, -e);
        }, n;
      }(t.Constraint);

      t.AngleConstraint = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n(t, i, r, o) {
          void 0 === o && (o = -1);
          var s = e.call(this) || this;
          return s.stiffness = 0, s.restingDistance = 0, s.tearSensitivity = Number.POSITIVE_INFINITY, s.shouldApproximateCollisionsWithPoints = !1, s.totalPointsToApproximateCollisionsWith = 5, n._polygon.create(2, 1), s._particleOne = t, s._particleTwo = i, s.stiffness = r, s.restingDistance = o > -1 ? o : t.position.distance(i.position), s;
        }

        return __extends(n, e), n.create = function (e, i, r, o, s) {
          var a = e.position.distance(i.position),
              c = r.position.distance(i.position);
          return new n(e, r, o, Math.sqrt(a * a + c * c - 2 * a * c * Math.cos(s * t.MathHelper.Deg2Rad)));
        }, n.prototype.setTearSensitivity = function (t) {
          return this.tearSensitivity = t, this;
        }, n.prototype.setCollidesWithColliders = function (t) {
          return this.collidesWithColliders = t, this;
        }, n.prototype.setShouldApproximateCollisionsWithPoints = function (t) {
          return this.shouldApproximateCollisionsWithPoints = t, this;
        }, n.prototype.solve = function () {
          var t = this._particleOne.position.sub(this._particleTwo.position),
              e = t.distance(),
              n = (this.restingDistance - e) / e;

          if (e / this.restingDistance > this.tearSensitivity) this.composite.removeConstraint(this);else {
            var i = 1 / this._particleOne.mass,
                r = i / (i + 1 / this._particleTwo.mass) * this.stiffness,
                o = this.stiffness - r;
            this._particleOne.position = this._particleOne.position.add(t.scale(r * n)), this._particleTwo.position = this._particleTwo.position.sub(t.scale(o * n));
          }
        }, n.prototype.handleCollisions = function (e) {
          if (this.shouldApproximateCollisionsWithPoints) this.approximateCollisionsWithPoints(e);else {
            var i = Math.min(this._particleOne.position.x, this._particleTwo.position.x),
                r = Math.max(this._particleOne.position.x, this._particleTwo.position.x),
                o = Math.min(this._particleOne.position.y, this._particleTwo.position.y),
                s = Math.max(this._particleOne.position.y, this._particleTwo.position.y);
            n._polygon.bounds = t.Rectangle.fromMinMax(i, o, r, s);
            var a = t.Vector2.zero;
            this.preparePolygonForCollisionChecks(a);

            for (var c = t.Physics.boxcastBroadphase(n._polygon.bounds, e), h = 0; h < c.length; h++) {
              var u = c[h],
                  l = new t.CollisionResult();
              n._polygon.collidesWithShape(u.shape, l) && (this._particleOne.position = this._particleOne.position.sub(l.minimumTranslationVector), this._particleTwo.position = this._particleTwo.position.sub(l.minimumTranslationVector));
            }
          }
        }, n.prototype.approximateCollisionsWithPoints = function (e) {
          for (var n, i = 0; i < this.totalPointsToApproximateCollisionsWith - 1; i++) {
            n = t.Vector2.lerp(this._particleOne.position, this._particleTwo.position, (i + 1) / this.totalPointsToApproximateCollisionsWith);

            for (var r = t.Physics.overlapCircleAll(n, 3, t.VerletWorld._colliders, e), o = 0; o < r; o++) {
              var s = t.VerletWorld._colliders[o],
                  a = new t.CollisionResult();
              s.shape.pointCollidesWithShape(n, a) && (this._particleOne.position = this._particleOne.position.sub(a.minimumTranslationVector), this._particleTwo.position = this._particleTwo.position.sub(a.minimumTranslationVector));
            }
          }
        }, n.prototype.preparePolygonForCollisionChecks = function (e) {
          var i = t.Vector2.lerp(this._particleOne.position, this._particleTwo.position, .5);
          e.setTo(i.x, i.y), n._polygon.position = e, n._polygon.points[0] = this._particleOne.position.sub(n._polygon.position), n._polygon.points[1] = this._particleTwo.position.sub(n._polygon.position), n._polygon.recalculateCenterAndEdgeNormals();
        }, n.prototype.debugRender = function (e) {
          e.drawLine(this._particleOne.position, this._particleTwo.position, new t.Color(67, 62, 54), 1);
        }, n._polygon = new t.Polygon([]), n;
      }(t.Constraint);

      t.DistanceConstraint = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return e.prototype.recycleSelf = function () {}, e.prototype.isRunning = function () {
          return this._isCurrentlyManagedByTweenManager && !this._isPaused;
        }, e.prototype.start = function () {
          this._isCurrentlyManagedByTweenManager ? this._isPaused = !1 : (t.TweenManager.addTween(this), this._isCurrentlyManagedByTweenManager = !0, this._isPaused = !1);
        }, e.prototype.pause = function () {
          this._isPaused = !0;
        }, e.prototype.resume = function () {
          this._isPaused = !1;
        }, e.prototype.stop = function (e) {
          void 0 === e && (e = !1), t.TweenManager.removeTween(this), this._isCurrentlyManagedByTweenManager = !1, this._isPaused = !0;
        }, e;
      }();

      t.AbstractTweenable = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t(t, e) {
          this._target = t, this._propertyName = e;
        }

        return t.prototype.getTargetObject = function () {
          return this._target;
        }, t.prototype.setTweenedValue = function (t) {
          this._target[this._propertyName] = t;
        }, t.prototype.getTweenedValue = function () {
          return this._target[this._propertyName];
        }, t;
      }(),
          n = function () {
        function n() {}

        return n.NumberPropertyTo = function (n, i, r, o) {
          var s = new e(n, i),
              a = t.TweenManager.cacheNumberTweens ? t.Pool.obtain(t.NumberTween) : new t.NumberTween();
          return a.initialize(s, r, o), a;
        }, n.Vector2PropertyTo = function (n, i, r, o) {
          var s = new e(n, i),
              a = t.TweenManager.cacheVector2Tweens ? t.Pool.obtain(t.Vector2Tween) : new t.Vector2Tween();
          return a.initialize(s, r, o), a;
        }, n;
      }();

      t.PropertyTweens = n;
    }(es || (es = {})), function (t) {
      var e, n;
      !function (t) {
        t[t.none = 0] = "none", t[t.restartFromBeginning = 1] = "restartFromBeginning", t[t.pingpong = 2] = "pingpong";
      }(e = t.LoopType || (t.LoopType = {})), function (t) {
        t[t.running = 0] = "running", t[t.paused = 1] = "paused", t[t.complete = 2] = "complete";
      }(n = t.TweenState || (t.TweenState = {}));

      var i = function () {
        function i() {
          this._shouldRecycleTween = !0, this._tweenState = n.complete, this._timeScale = 1;
        }

        return i.prototype.setEaseType = function (t) {
          return this._easeType = t, this;
        }, i.prototype.setDelay = function (t) {
          return this._delay = t, this._elapsedTime = -this._delay, this;
        }, i.prototype.setDuration = function (t) {
          return this._duration = t, this;
        }, i.prototype.setTimeScale = function (t) {
          return this._timeScale = t, this;
        }, i.prototype.setIsTimeScaleIndependent = function () {
          return this._isTimeScaleIndependent = !0, this;
        }, i.prototype.setCompletionHandler = function (t) {
          return this._completionHandler = t, this;
        }, i.prototype.setLoops = function (t, n, i) {
          return void 0 === n && (n = 1), void 0 === i && (i = 0), this._loopType = t, this._delayBetweenLoops = i, n < 0 && (n = -1), t == e.pingpong && (n *= 2), this._loops = n, this;
        }, i.prototype.setLoopCompletionHanlder = function (t) {
          return this._loopCompleteHandler = t, this;
        }, i.prototype.setFrom = function (t) {
          return this._isFromValueOverridden = !0, this._fromValue = t, this;
        }, i.prototype.prepareForReuse = function (t, e, n) {
          return this.initialize(this._target, e, n), this;
        }, i.prototype.setRecycleTween = function (t) {
          return this._shouldRecycleTween = t, this;
        }, i.prototype.setContext = function (t) {
          return this.context = t, this;
        }, i.prototype.setNextTween = function (t) {
          return this._nextTween = t, this;
        }, i.prototype.tick = function () {
          if (this._tweenState == n.paused) return !1;
          var i = 0;
          !this._isRunningInReverse && this._elapsedTime >= this._duration ? (i = this._elapsedTime - this._duration, this._elapsedTime = this._duration, this._tweenState = n.complete) : this._isRunningInReverse && this._elapsedTime <= 0 && (i = 0 - this._elapsedTime, this._elapsedTime = 0, this._tweenState = n.complete), this._elapsedTime >= 0 && this._elapsedTime <= this._duration && this.updateValue(), this._loopType != e.none && this._tweenState == n.complete && 0 != this._loops && this.handleLooping(i);
          var r = this._isTimeScaleIndependent ? t.Time.unscaledDeltaTime : t.Time.deltaTime;
          return r *= this._timeScale, this._isRunningInReverse ? this._elapsedTime -= r : this._elapsedTime += r, this._tweenState == n.complete && (this._completionHandler && this._completionHandler(this), null != this._nextTween && (this._nextTween.start(), this._nextTween = null), !0);
        }, i.prototype.recycleSelf = function () {
          this._shouldRecycleTween && (this._target = null, this._nextTween = null);
        }, i.prototype.isRunning = function () {
          return this._tweenState == n.running;
        }, i.prototype.start = function () {
          this._isFromValueOverridden || (this._fromValue = this._target.getTweenedValue()), this._tweenState == n.complete && (this._tweenState = n.running, t.TweenManager.addTween(this));
        }, i.prototype.pause = function () {
          this._tweenState = n.paused;
        }, i.prototype.resume = function () {
          this._tweenState = n.running;
        }, i.prototype.stop = function (i) {
          void 0 === i && (i = !1), this._tweenState = n.complete, i ? (this._elapsedTime = this._isRunningInReverse ? 0 : this._duration, this._loopType = e.none, this._loops = 0) : t.TweenManager.removeTween(this);
        }, i.prototype.jumpToElapsedTime = function (e) {
          this._elapsedTime = t.MathHelper.clamp(e, 0, this._duration), this.updateValue();
        }, i.prototype.reverseTween = function () {
          this._isRunningInReverse = !this._isRunningInReverse;
        }, i.prototype.waitForCompletion = function () {
          return __generator(this, function (t) {
            switch (t.label) {
              case 0:
                return this._tweenState == n.complete ? [3, 2] : [4, null];

              case 1:
                return t.sent(), [3, 0];

              case 2:
                return [2];
            }
          });
        }, i.prototype.getTargetObject = function () {
          return this._target.getTargetObject();
        }, i.prototype.resetState = function () {
          this.context = null, this._completionHandler = this._loopCompleteHandler = null, this._isFromValueOverridden = !1, this._isTimeScaleIndependent = !1, this._tweenState = n.complete, this._isRelative = !1, this._easeType = t.TweenManager.defaultEaseType, null != this._nextTween && (this._nextTween.recycleSelf(), this._nextTween = null), this._delay = 0, this._duration = 0, this._timeScale = 1, this._elapsedTime = 0, this._loopType = e.none, this._delayBetweenLoops = 0, this._loops = 0, this._isRunningInReverse = !1;
        }, i.prototype.initialize = function (t, e, n) {
          this.resetState(), this._target = t, this._toValue = e, this._duration = n;
        }, i.prototype.handleLooping = function (t) {
          this._loops--, this._loopType == e.pingpong && this.reverseTween(), this._loopType != e.restartFromBeginning && this._loops % 2 != 0 || this._loopCompleteHandler && this._completionHandler(this), 0 != this._loops && (this._tweenState = n.running, this._loopType == e.restartFromBeginning ? this._elapsedTime = t - this._delayBetweenLoops : this._isRunningInReverse ? this._elapsedTime += this._delayBetweenLoops - t : this._elapsedTime = t - this._delayBetweenLoops, 0 == this._delayBetweenLoops && t > 0 && this.updateValue());
        }, i;
      }();

      t.Tween = i;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n(t, n, i) {
          var r = e.call(this) || this;
          return r.initialize(t, n, i), r;
        }

        return __extends(n, e), n.create = function () {
          return t.TweenManager.cacheNumberTweens ? t.Pool.obtain(n) : new n();
        }, n.prototype.setIsRelative = function () {
          return this._isRelative = !0, this._toValue += this._fromValue, this;
        }, n.prototype.updateValue = function () {
          this._target.setTweenedValue(t.Lerps.ease(this._easeType, this._fromValue, this._toValue, this._elapsedTime, this._duration));
        }, n.prototype.recycleSelf = function () {
          e.prototype.recycleSelf.call(this), this._shouldRecycleTween && t.TweenManager.cacheNumberTweens && t.Pool.free(n, this);
        }, n;
      }(t.Tween);

      t.NumberTween = e;

      var n = function (e) {
        function n(t, n, i) {
          var r = e.call(this) || this;
          return r.initialize(t, n, i), r;
        }

        return __extends(n, e), n.create = function () {
          return t.TweenManager.cacheVector2Tweens ? t.Pool.obtain(n) : new n();
        }, n.prototype.setIsRelative = function () {
          return this._isRelative = !0, this._toValue.add(this._fromValue), this;
        }, n.prototype.updateValue = function () {
          this._target.setTweenedValue(t.Lerps.ease(this._easeType, this._fromValue, this._toValue, this._elapsedTime, this._duration));
        }, n.prototype.recycleSelf = function () {
          e.prototype.recycleSelf.call(this), this._shouldRecycleTween && t.TweenManager.cacheVector2Tweens && t.Pool.free(n, this);
        }, n;
      }(t.Tween);

      t.Vector2Tween = n;

      var i = function (e) {
        function n(t, n, i) {
          var r = e.call(this) || this;
          return r.initialize(t, n, i), r;
        }

        return __extends(n, e), n.create = function () {
          return t.TweenManager.cacheRectTweens ? t.Pool.obtain(n) : new n();
        }, n.prototype.setIsRelative = function () {
          return this._isRelative = !0, this._toValue = new t.Rectangle(this._toValue.x + this._fromValue.x, this._toValue.y + this._fromValue.y, this._toValue.width + this._fromValue.width, this._toValue.height + this._fromValue.height), this;
        }, n.prototype.updateValue = function () {
          this._target.setTweenedValue(t.Lerps.ease(this._easeType, this._fromValue, this._toValue, this._elapsedTime, this._duration));
        }, n.prototype.recycleSelf = function () {
          e.prototype.recycleSelf.call(this), this._shouldRecycleTween && t.TweenManager.cacheRectTweens && t.Pool.free(n, this);
        }, n;
      }(t.Tween);

      t.RectangleTween = i;

      var r = function (e) {
        function n(t, n, i) {
          var r = e.call(this) || this;
          return r.initialize(t, n, i), r;
        }

        return __extends(n, e), n.create = function () {
          return t.TweenManager.cacheColorTweens ? t.Pool.obtain(n) : new n();
        }, n.prototype.setIsRelative = function () {
          return this._isRelative = !0, this._toValue.r += this._fromValue.r, this._toValue.g += this._fromValue.g, this._toValue.b += this._fromValue.b, this._toValue.a += this._fromValue.a, this;
        }, n.prototype.updateValue = function () {
          this._target.setTweenedValue(t.Lerps.ease(this._easeType, this._fromValue, this._toValue, this._elapsedTime, this._duration));
        }, n;
      }(t.Tween);

      t.ColorTween = r;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return __extends(n, e), n.prototype.setTweenedValue = function (t) {
          this._renderable.color = t;
        }, n.prototype.getTweenedValue = function () {
          return this._renderable.color;
        }, n.prototype.getTargetObject = function () {
          return this._renderable;
        }, n.prototype.updateValue = function () {
          this.setTweenedValue(t.Lerps.ease(this._easeType, this._fromValue, this._toValue, this._elapsedTime, this._duration));
        }, n.prototype.setTarget = function (t) {
          this._renderable = t;
        }, n.prototype.recycleSelf = function () {
          this._shouldRecycleTween && (this._renderable = null, this._target = null, this._nextTween = null), this._shouldRecycleTween && t.TweenManager.cacheColorTweens && t.Pool.free(t.ColorTween, this);
        }, n;
      }(t.ColorTween);

      t.RenderableColorTween = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n(t, n, i) {
          var r = e.call(this) || this;
          return r.dampingRatio = .23, r.angularFrequency = 25, r._transform = t, r._targetType = n, r.setTargetValue(i), r;
        }

        return __extends(n, e), Object.defineProperty(n.prototype, "targetType", {
          get: function () {
            return this._targetType;
          },
          enumerable: !0,
          configurable: !0
        }), n.prototype.setTargetValue = function (e) {
          this._velocity = t.Vector2.zero, this._targetValue = e, this._isCurrentlyManagedByTweenManager || this.start();
        }, n.prototype.updateDampingRatioWithHalfLife = function (t) {
          this.dampingRatio = -t / this.angularFrequency * Math.log(.5);
        }, n.prototype.tick = function () {
          return this._isPaused || this.setTweenedValue(t.Lerps.fastSpring(this.getCurrentValueOfTweenedTargetType(), this._targetValue, this._velocity, this.dampingRatio, this.angularFrequency)), !1;
        }, n.prototype.setTweenedValue = function (e) {
          switch (this._targetType) {
            case t.TransformTargetType.position:
              this._transform.position = e;
              break;

            case t.TransformTargetType.localPosition:
              this._transform.localPosition = e;
              break;

            case t.TransformTargetType.scale:
              this._transform.scale = e;
              break;

            case t.TransformTargetType.localScale:
              this._transform.localScale = e;
              break;

            case t.TransformTargetType.rotationDegrees:
              this._transform.rotationDegrees = e.x;

            case t.TransformTargetType.localRotationDegrees:
              this._transform.localRotationDegrees = e.x;
          }
        }, n.prototype.getCurrentValueOfTweenedTargetType = function () {
          switch (this._targetType) {
            case t.TransformTargetType.position:
              return this._transform.position;

            case t.TransformTargetType.localPosition:
              return this._transform.localPosition;

            case t.TransformTargetType.scale:
              return this._transform.scale;

            case t.TransformTargetType.localScale:
              return this._transform.localScale;

            case t.TransformTargetType.rotationDegrees:
              return new t.Vector2(this._transform.rotationDegrees);

            case t.TransformTargetType.localRotationDegrees:
              return new t.Vector2(this._transform.localRotationDegrees, 0);

            default:
              return t.Vector2.zero;
          }
        }, n;
      }(t.AbstractTweenable);

      t.TransformSpringTween = e;
    }(es || (es = {})), function (t) {
      var e;
      !function (t) {
        t[t.position = 0] = "position", t[t.localPosition = 1] = "localPosition", t[t.scale = 2] = "scale", t[t.localScale = 3] = "localScale", t[t.rotationDegrees = 4] = "rotationDegrees", t[t.localRotationDegrees = 5] = "localRotationDegrees";
      }(e = t.TransformTargetType || (t.TransformTargetType = {}));

      var n = function (n) {
        function i() {
          return null !== n && n.apply(this, arguments) || this;
        }

        return __extends(i, n), i.prototype.setTweenedValue = function (t) {
          switch (this._targetType) {
            case e.position:
              this._transform.position = t;
              break;

            case e.localPosition:
              this._transform.localPosition = t;
              break;

            case e.scale:
              this._transform.scale = t;
              break;

            case e.localScale:
              this._transform.localScale = t;
              break;

            case e.rotationDegrees:
              this._transform.rotationDegrees = t.x;

            case e.localRotationDegrees:
              this._transform.localRotationDegrees = t.x;
          }
        }, i.prototype.getTweenedValue = function () {
          switch (this._targetType) {
            case e.position:
              return this._transform.position;

            case e.localPosition:
              return this._transform.localPosition;

            case e.scale:
              return this._transform.scale;

            case e.localScale:
              return this._transform.localScale;

            case e.rotationDegrees:
              return new t.Vector2(this._transform.rotationDegrees, this._transform.rotationDegrees);

            case e.localRotationDegrees:
              return new t.Vector2(this._transform.localRotationDegrees, 0);
          }
        }, i.prototype.getTargetObject = function () {
          return this._transform;
        }, i.prototype.setTargetAndType = function (t, e) {
          this._transform = t, this._targetType = e;
        }, i.prototype.updateValue = function () {
          this._targetType != e.rotationDegrees && this._targetType != e.localRotationDegrees || this._isRelative ? this.setTweenedValue(t.Lerps.ease(this._easeType, this._fromValue, this._toValue, this._elapsedTime, this._duration)) : this.setTweenedValue(t.Lerps.easeAngle(this._easeType, this._fromValue, this._toValue, this._elapsedTime, this._duration));
        }, i.prototype.recycleSelf = function () {
          this._shouldRecycleTween && (this._target = null, this._nextTween = null, this._transform = null, t.Pool.free(t.Vector2Tween, this));
        }, i;
      }(t.Vector2Tween);

      t.TransformVector2Tween = n;
    }(es || (es = {})), function (t) {
      var e;
      !function (t) {
        t[t.linear = 0] = "linear", t[t.sineIn = 1] = "sineIn", t[t.sineOut = 2] = "sineOut", t[t.sineInOut = 3] = "sineInOut", t[t.quadIn = 4] = "quadIn", t[t.quadOut = 5] = "quadOut", t[t.quadInOut = 6] = "quadInOut", t[t.quintIn = 7] = "quintIn", t[t.quintOut = 8] = "quintOut", t[t.quintInOut = 9] = "quintInOut", t[t.cubicIn = 10] = "cubicIn", t[t.cubicOut = 11] = "cubicOut", t[t.cubicInOut = 12] = "cubicInOut", t[t.quartIn = 13] = "quartIn", t[t.quartOut = 14] = "quartOut", t[t.quartInOut = 15] = "quartInOut", t[t.expoIn = 16] = "expoIn", t[t.expoOut = 17] = "expoOut", t[t.expoInOut = 18] = "expoInOut", t[t.circleIn = 19] = "circleIn", t[t.circleOut = 20] = "circleOut", t[t.circleInOut = 21] = "circleInOut", t[t.elasticIn = 22] = "elasticIn", t[t.elasticOut = 23] = "elasticOut", t[t.elasticInOut = 24] = "elasticInOut", t[t.punch = 25] = "punch", t[t.backIn = 26] = "backIn", t[t.backOut = 27] = "backOut", t[t.backInOut = 28] = "backInOut", t[t.bounceIn = 29] = "bounceIn", t[t.bounceOut = 30] = "bounceOut", t[t.bounceInOut = 31] = "bounceInOut";
      }(e = t.EaseType || (t.EaseType = {}));

      var n = function () {
        function n() {}

        return n.oppositeEaseType = function (t) {
          switch (t) {
            case e.linear:
              return t;

            case e.backIn:
              return e.backOut;

            case e.backOut:
              return e.backIn;

            case e.backInOut:
              return t;

            case e.bounceIn:
              return e.bounceOut;

            case e.bounceOut:
              return e.bounceIn;

            case e.bounceInOut:
              return t;

            case e.circleIn:
              return e.circleOut;

            case e.circleOut:
              return e.circleIn;

            case e.circleInOut:
              return t;

            case e.cubicIn:
              return e.cubicOut;

            case e.cubicOut:
              return e.cubicIn;

            case e.circleInOut:
            case e.punch:
              return t;

            case e.expoIn:
              return e.expoOut;

            case e.expoOut:
              return e.expoIn;

            case e.expoInOut:
              return t;

            case e.quadIn:
              return e.quadOut;

            case e.quadOut:
              return e.quadIn;

            case e.quadInOut:
              return t;

            case e.quartIn:
              return e.quadOut;

            case e.quartOut:
              return e.quartIn;

            case e.quadInOut:
              return t;

            case e.sineIn:
              return e.sineOut;

            case e.sineOut:
              return e.sineIn;

            case e.sineInOut:
            default:
              return t;
          }
        }, n.ease = function (n, i, r) {
          switch (n) {
            case e.linear:
              return t.Easing.Linear.easeNone(i, r);

            case e.backIn:
              return t.Easing.Back.easeIn(i, r);

            case e.backOut:
              return t.Easing.Back.easeOut(i, r);

            case e.backInOut:
              return t.Easing.Back.easeInOut(i, r);

            case e.bounceIn:
              return t.Easing.Bounce.easeIn(i, r);

            case e.bounceOut:
              return t.Easing.Bounce.easeOut(i, r);

            case e.bounceInOut:
              return t.Easing.Bounce.easeInOut(i, r);

            case e.circleIn:
              return t.Easing.Circular.easeIn(i, r);

            case e.circleOut:
              return t.Easing.Circular.easeOut(i, r);

            case e.circleInOut:
              return t.Easing.Circular.easeInOut(i, r);

            case e.cubicIn:
              return t.Easing.Cubic.easeIn(i, r);

            case e.cubicOut:
              return t.Easing.Cubic.easeOut(i, r);

            case e.cubicInOut:
              return t.Easing.Cubic.easeInOut(i, r);

            case e.elasticIn:
              return t.Easing.Elastic.easeIn(i, r);

            case e.elasticOut:
              return t.Easing.Elastic.easeOut(i, r);

            case e.elasticInOut:
              return t.Easing.Elastic.easeInOut(i, r);

            case e.punch:
              return t.Easing.Elastic.punch(i, r);

            case e.expoIn:
              return t.Easing.Exponential.easeIn(i, r);

            case e.expoOut:
              return t.Easing.Exponential.easeOut(i, r);

            case e.expoInOut:
              return t.Easing.Exponential.easeInOut(i, r);

            case e.quadIn:
              return t.Easing.Quadratic.easeIn(i, r);

            case e.quadOut:
              return t.Easing.Quadratic.easeOut(i, r);

            case e.quadInOut:
              return t.Easing.Quadratic.easeInOut(i, r);

            case e.quadIn:
              return t.Easing.Quadratic.easeIn(i, r);

            case e.quadOut:
              return t.Easing.Quadratic.easeOut(i, r);

            case e.quadInOut:
              return t.Easing.Quadratic.easeInOut(i, r);

            case e.quintIn:
              return t.Easing.Quintic.easeIn(i, r);

            case e.quintOut:
              return t.Easing.Quintic.easeOut(i, r);

            case e.quintInOut:
              return t.Easing.Quintic.easeInOut(i, r);

            case e.sineIn:
              return t.Easing.Sinusoidal.easeIn(i, r);

            case e.sineOut:
              return t.Easing.Sinusoidal.easeOut(i, r);

            case e.sineInOut:
              return t.Easing.Sinusoidal.easeInOut(i, r);

            default:
              return t.Easing.Linear.easeNone(i, r);
          }
        }, n;
      }();

      t.EaseHelper = n;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {}

        return Object.defineProperty(t.prototype, "enabled", {
          get: function () {
            return this._enabled;
          },
          set: function (t) {
            this.setEnabled(t);
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.setEnabled = function (t) {
          this._enabled != t && (this._enabled = t, this._enabled ? this.onEnabled() : this.onDisabled());
        }, t.prototype.onEnabled = function () {}, t.prototype.onDisabled = function () {}, t.prototype.update = function () {}, t;
      }();

      t.GlobalManager = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n() {
          var t = e.call(this) || this;
          return t._activeTweens = [], t._tempTweens = [], n._instance = t, t;
        }

        return __extends(n, e), n.prototype.update = function () {
          this._isUpdating = !0;

          for (var e = this._activeTweens.length - 1; e >= 0; --e) {
            var n = this._activeTweens[e];
            n.tick() && this._tempTweens.push(n);
          }

          this._isUpdating = !1;

          for (e = 0; e < this._tempTweens.length; e++) this._tempTweens[e].recycleSelf(), new t.List(this._activeTweens).remove(this._tempTweens[e]);

          this._tempTweens.length = 0;
        }, n.addTween = function (t) {
          n._instance._activeTweens.push(t);
        }, n.removeTween = function (e) {
          n._instance._isUpdating ? n._instance._tempTweens.push(e) : (e.recycleSelf(), new t.List(n._instance._activeTweens).remove(e));
        }, n.stopAllTweens = function (t) {
          void 0 === t && (t = !1);

          for (var e = n._instance._activeTweens.length - 1; e >= 0; --e) n._instance._activeTweens[e].stop(t);
        }, n.allTweensWithContext = function (t) {
          for (var e = [], i = 0; i < n._instance._activeTweens.length; i++) n._instance._activeTweens[i].context == t && e.push(n._instance._activeTweens[i]);

          return e;
        }, n.stopAllTweensWithContext = function (t, e) {
          void 0 === e && (e = !1);

          for (var i = n._instance._activeTweens.length - 1; i >= 0; --i) n._instance._activeTweens[i].context == t && n._instance._activeTweens[i].stop(e);
        }, n.allTweenWithTarget = function (t) {
          for (var e = [], i = 0; i < n._instance._activeTweens.length; i++) {
            if (n._instance._activeTweens[i]) n._instance._activeTweens[i].getTargetObject() == t && e.push(n._instance._activeTweens[i]);
          }

          return e;
        }, n.stopAllTweensWithTarget = function (t, e) {
          void 0 === e && (e = !1);

          for (var i = n._instance._activeTweens.length - 1; i >= 0; --i) if (n._instance._activeTweens[i]) {
            var r = n._instance._activeTweens[i];
            r.getTargetObject() == t && r.stop(e);
          }
        }, n.defaultEaseType = t.EaseType.quartIn, n.removeAllTweensOnLevelLoad = !1, n.cacheNumberTweens = !0, n.cacheVector2Tweens = !0, n.cacheColorTweens = !0, n.cacheRectTweens = !1, n;
      }(t.GlobalManager);

      t.TweenManager = e;
    }(es || (es = {})), function (t) {
      !function (t) {
        var e = function () {
          function t() {}

          return t.easeNone = function (t, e) {
            return t / e;
          }, t;
        }();

        t.Linear = e;

        var n = function () {
          function t() {}

          return t.easeIn = function (t, e) {
            return (t /= e) * t;
          }, t.easeOut = function (t, e) {
            return -1 * (t /= e) * (t - 2);
          }, t.easeInOut = function (t, e) {
            return (t /= e / 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
          }, t;
        }();

        t.Quadratic = n;

        var i = function () {
          function t() {}

          return t.easeIn = function (t, e) {
            return (t /= e) * t * (2.70158 * t - 1.70158);
          }, t.easeOut = function (t, e) {
            return (t = t / e - 1) * t * (2.70158 * t + 1.70158) + 1;
          }, t.easeInOut = function (t, e) {
            var n = 1.70158;
            return (t /= e / 2) < 1 ? t * t * ((1 + (n *= 1.525)) * t - n) * .5 : .5 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2);
          }, t;
        }();

        t.Back = i;

        var r = function () {
          function t() {}

          return t.easeOut = function (t, e) {
            return (t /= e) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
          }, t.easeIn = function (t, e) {
            return 1 - this.easeOut(e - t, e);
          }, t.easeInOut = function (t, e) {
            return t < e / 2 ? .5 * this.easeIn(2 * t, e) : .5 * this.easeOut(2 * t - e, e) + .5;
          }, t;
        }();

        t.Bounce = r;

        var o = function () {
          function t() {}

          return t.easeIn = function (t, e) {
            return -(Math.sqrt(1 - (t /= e) * t) - 1);
          }, t.easeOut = function (t, e) {
            return Math.sqrt(1 - (t = t / e - 1) * t);
          }, t.easeInOut = function (t, e) {
            return (t /= e / 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
          }, t;
        }();

        t.Circular = o;

        var s = function () {
          function t() {}

          return t.easeIn = function (t, e) {
            return (t /= e) * t * t;
          }, t.easeOut = function (t, e) {
            return (t = t / e - 1) * t * t + 1;
          }, t.easeInOut = function (t, e) {
            return (t /= e / 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
          }, t;
        }();

        t.Cubic = s;

        var a = function () {
          function t() {}

          return t.easeIn = function (t, e) {
            if (0 == t) return 0;
            if (1 == (t /= e)) return 1;
            var n = .3 * e,
                i = n / 4;
            return -1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * e - i) * (2 * Math.PI) / n);
          }, t.easeOut = function (t, e) {
            if (0 == t) return 0;
            if (1 == (t /= e)) return 1;
            var n = .3 * e,
                i = n / 4;
            return 1 * Math.pow(2, -10 * t) * Math.sin((t * e - i) * (2 * Math.PI) / n) + 1;
          }, t.easeInOut = function (t, e) {
            if (0 == t) return 0;
            if (2 == (t /= e / 2)) return 1;
            var n = e * (.3 * 1.5),
                i = n / 4;
            return t < 1 ? Math.pow(2, 10 * (t -= 1)) * Math.sin(t * e - i) * (2 * Math.PI) / n * -.5 : Math.pow(2, -10 * (t -= 1)) * Math.sin((t * e - i) * (2 * Math.PI) / n) * .5 + 1;
          }, t.punch = function (t, e) {
            if (0 == t) return 0;
            if (1 == (t /= e)) return 0;
            return Math.pow(2, -10 * t) * Math.sin(t * (2 * Math.PI) / .3);
          }, t;
        }();

        t.Elastic = a;

        var c = function () {
          function t() {}

          return t.easeIn = function (t, e) {
            return 0 == t ? 0 : Math.pow(2, 10 * (t / e - 1));
          }, t.easeOut = function (t, e) {
            return t == e ? 1 : 1 - Math.pow(2, -10 * t / e);
          }, t.easeInOut = function (t, e) {
            return 0 == t ? 0 : t == e ? 1 : (t /= e / 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
          }, t;
        }();

        t.Exponential = c;

        var h = function () {
          function t() {}

          return t.easeIn = function (t, e) {
            return (t /= e) * t * t * t;
          }, t.easeOut = function (t, e) {
            return -1 * ((t = t / e - 1) * t * t * t - 1);
          }, t.easeInOut = function (t, e) {
            return (t /= e / 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
          }, t;
        }();

        t.Quartic = h;

        var u = function () {
          function t() {}

          return t.easeIn = function (t, e) {
            return (t /= e) * t * t * t * t;
          }, t.easeOut = function (t, e) {
            return (t = t / e - 1) * t * t * t * t + 1;
          }, t.easeInOut = function (t, e) {
            return (t /= e / 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
          }, t;
        }();

        t.Quintic = u;

        var l = function () {
          function t() {}

          return t.easeIn = function (t, e) {
            return -1 * Math.cos(t / e * (Math.PI / 2)) + 1;
          }, t.easeOut = function (t, e) {
            return Math.sin(t / e * (Math.PI / 2));
          }, t.easeInOut = function (t, e) {
            return -.5 * (Math.cos(Math.PI * t / e) - 1);
          }, t;
        }();

        t.Sinusoidal = l;
      }(t.Easing || (t.Easing = {}));
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return e.lerp = function (e, n, i) {
          if ("number" == typeof e && "number" == typeof n) return e + (n - e) * i;

          if (e instanceof t.Color && n instanceof t.Color) {
            var r = 255 * i;
            return new t.Color(e.r + (n.r - e.r) * r / 255, e.g + (n.g - e.g) * r / 255, e.b + (n.b - e.b) * r / 255, e.a + (n.a - e.a) * r / 255);
          }

          return e instanceof t.Rectangle && n instanceof t.Rectangle ? new t.Rectangle(e.x + (n.x - e.x) * i, e.y + (n.x - e.y) * i, e.width + (n.width - e.width) * i, e.height + (n.height - e.height) * i) : e instanceof t.Vector2 && n instanceof t.Vector2 ? new t.Vector2(e.x + (n.x - e.x) * i, e.y + (n.y - e.y) * i) : void 0;
        }, e.angleLerp = function (e, n, i) {
          var r = new t.Vector2(t.MathHelper.deltaAngle(e.x, n.x), t.MathHelper.deltaAngle(e.y, n.y));
          return new t.Vector2(e.x + r.x * i, e.y + r.y * i);
        }, e.ease = function (e, n, i, r, o) {
          return "number" == typeof n && "number" == typeof i ? this.lerp(n, i, t.EaseHelper.ease(e, r, o)) : n instanceof t.Vector2 && i instanceof t.Vector2 ? this.lerp(n, i, t.EaseHelper.ease(e, r, o)) : n instanceof t.Rectangle && i instanceof t.Rectangle ? this.lerp(n, i, t.EaseHelper.ease(e, r, o)) : n instanceof t.Color && i instanceof t.Color ? this.lerp(n, i, t.EaseHelper.ease(e, r, o)) : void 0;
        }, e.easeAngle = function (e, n, i, r, o) {
          return this.angleLerp(n, i, t.EaseHelper.ease(e, r, o));
        }, e.fastSpring = function (e, n, i, r, o) {
          return i.add(i.scale(-2 * t.Time.deltaTime * r * o).add(n.sub(e).scale(t.Time.deltaTime * o * o))), e.add(i.scale(t.Time.deltaTime)), e;
        }, e;
      }();

      t.Lerps = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e(t) {
          if (t.length < 2) throw new Error("curve length must be >= 2");
          if (t.sort(function (t, e) {
            return t.t - e.t;
          }), 0 !== t[0].t) throw new Error("curve must start with 0");
          if (1 !== t[t.length - 1].t) throw new Error("curve must end with 1");
          this._points = t;
        }

        return Object.defineProperty(e.prototype, "points", {
          get: function () {
            return this._points;
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.lerp = function (e) {
          for (var n = 1; n < this._points.length; n++) if (e <= this._points[n].t) {
            var i = t.MathHelper.map01(e, this._points[n - 1].t, this._points[n].t);
            return t.MathHelper.lerp(this._points[n - 1].value, this._points[n].value, i);
          }

          throw new Error("should never be here");
        }, e;
      }();

      t.AnimCurve = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        return function (t, e) {
          this.func = t, this.context = e;
        };
      }();

      t.FuncPack = e;

      var n = function () {
        function n() {
          this._messageTable = new Map();
        }

        return n.prototype.addObserver = function (n, i, r) {
          var o = this._messageTable.get(n);

          o || (o = [], this._messageTable.set(n, o)), t.Insist.isFalse(-1 != o.findIndex(function (t) {
            return t.func == i;
          }), "???????????????????????????????????????"), o.push(new e(i, r));
        }, n.prototype.removeObserver = function (t, e) {
          var n = this._messageTable.get(t),
              i = n.findIndex(function (t) {
            return t.func == e;
          });

          -1 != i && n.splice(i, 1);
        }, n.prototype.emit = function (t) {
          for (var e, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];

          var r = this._messageTable.get(t);

          if (r) for (var o = r.length - 1; o >= 0; o--) (e = r[o].func).call.apply(e, __spread([r[o].context], n));
        }, n;
      }();

      t.Emitter = n;
    }(es || (es = {})), function (t) {
      !function (t) {
        t[t.top = 0] = "top", t[t.bottom = 1] = "bottom", t[t.left = 2] = "left", t[t.right = 3] = "right";
      }(t.Edge || (t.Edge = {}));
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {}

        return t.default = function () {
          return new t();
        }, t.prototype.equals = function (t, e) {
          return "function" == typeof t.equals ? t.equals(e) : t === e;
        }, t.prototype.getHashCode = function (t) {
          var e = this;
          if ("number" == typeof t) return this._getHashCodeForNumber(t);
          if ("string" == typeof t) return this._getHashCodeForString(t);
          var n = 385229220;
          return this.forOwn(t, function (t) {
            "number" == typeof t ? n += e._getHashCodeForNumber(t) : "string" == typeof t ? n += e._getHashCodeForString(t) : "object" == typeof t && e.forOwn(t, function () {
              n += e.getHashCode(t);
            });
          }), n;
        }, t.prototype._getHashCodeForNumber = function (t) {
          return t;
        }, t.prototype._getHashCodeForString = function (t) {
          for (var e = 385229220, n = 0; n < t.length; n++) e = -1521134295 * e ^ t.charCodeAt(n);

          return e;
        }, t.prototype.forOwn = function (t, e) {
          t = Object(t), Object.keys(t).forEach(function (n) {
            return e(t[n], n, t);
          });
        }, t;
      }();

      t.EqualityComparer = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {}

        return t.computeHash = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

          for (var n = 2166136261, i = 0; i < t.length; i++) n = 16777619 * (n ^ t[i]);

          return n += n << 13, n ^= n >> 7, n += n << 3, n ^= n >> 17, n += n << 5;
        }, t;
      }();

      t.Hash = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {
          this._listeners = [];
        }

        return t.prototype.addListener = function (t, e) {
          -1 === this._listeners.findIndex(function (n) {
            return n.callback === e && n.caller === t;
          }) && this._listeners.push({
            caller: t,
            callback: e
          });
        }, t.prototype.removeListener = function (t, e) {
          var n = this._listeners.findIndex(function (n) {
            return n.callback === e && n.caller === t;
          });

          n >= 0 && this._listeners.splice(n, 1);
        }, t.prototype.clearListener = function () {
          this._listeners = [];
        }, t.prototype.clearListenerWithCaller = function (t) {
          for (var e = this._listeners.length - 1; e >= 0; e--) {
            this._listeners[e].caller === t && this._listeners.splice(e, 1);
          }
        }, t.prototype.notify = function () {
          for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];

          for (var i = this._listeners.length - 1; i >= 0; i--) {
            var r = this._listeners[i];
            r.caller ? (t = r.callback).call.apply(t, __spread([r.caller], e)) : r.callback.apply(r, __spread(e));
          }
        }, t;
      }();

      t.Observable = e;

      var n = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }

        return __extends(e, t), e.prototype.addListener = function (e, n) {
          t.prototype.addListener.call(this, e, n);
        }, e.prototype.removeListener = function (e, n) {
          t.prototype.removeListener.call(this, e, n);
        }, e.prototype.notify = function (e) {
          t.prototype.notify.call(this, e);
        }, e;
      }(e);

      t.ObservableT = n;

      var i = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }

        return __extends(e, t), e.prototype.addListener = function (e, n) {
          t.prototype.addListener.call(this, e, n);
        }, e.prototype.removeListener = function (e, n) {
          t.prototype.removeListener.call(this, e, n);
        }, e.prototype.notify = function (e, n) {
          t.prototype.notify.call(this, e, n);
        }, e;
      }(e);

      t.ObservableTT = i;

      var r = function () {
        function t(t, n) {
          this.bindAction(t, n), this._onExec = new e();
        }

        return t.prototype.bindAction = function (t, e) {
          this._caller = t, this._action = e;
        }, t.prototype.dispatch = function () {
          for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];

          this._action ? (this._caller ? (t = this._action).call.apply(t, __spread([this._caller], e)) : this._action.apply(this, __spread(e)), this._onExec.notify()) : console.warn("command not bind with an action");
        }, t.prototype.addListener = function (t, e) {
          this._onExec.addListener(t, e);
        }, t.prototype.removeListener = function (t, e) {
          this._onExec.removeListener(t, e);
        }, t.prototype.clearListener = function () {
          this._onExec.clearListener();
        }, t.prototype.clearListenerWithCaller = function (t) {
          this._onExec.clearListenerWithCaller(t);
        }, t;
      }();

      t.Command = r;

      var o = function () {
        function t(t) {
          this._onValueChange = new e(), this._value = t;
        }

        return Object.defineProperty(t.prototype, "onValueChange", {
          get: function () {
            return this._onValueChange;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "value", {
          get: function () {
            return this._value;
          },
          set: function (t) {
            this._value = t;
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.dispatch = function (t) {
          if (t !== this._value) {
            var e = this._value;
            this._value = t, this._onValueChange.notify(this._value, e);
          }
        }, t.prototype.addListener = function (t, e) {
          this._onValueChange.addListener(t, e);
        }, t.prototype.removeListener = function (t, e) {
          this._onValueChange.removeListener(t, e);
        }, t.prototype.clearListener = function () {
          this._onValueChange.clearListener();
        }, t.prototype.clearListenerWithCaller = function (t) {
          this._onValueChange.clearListenerWithCaller(t);
        }, t;
      }();

      t.ValueChangeCommand = o;
    }(es || (es = {})), function (t) {
      var e = function () {
        return function (t) {
          this.value = t;
        };
      }();

      t.Ref = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return Object.defineProperty(e, "size", {
          get: function () {
            return new t.Vector2(this.width, this.height);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e, "center", {
          get: function () {
            return new t.Vector2(this.width / 2, this.height / 2);
          },
          enumerable: !0,
          configurable: !0
        }), e;
      }();

      t.Screen = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {}

        return t.prototype.update = function (t) {
          this.remainder += t;
          var e = Math.trunc(this.remainder);
          return this.remainder -= e, e;
        }, t.prototype.reset = function () {
          this.remainder = 0;
        }, t;
      }();

      t.SubpixelNumber = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {
          this.triangleIndices = [], this._triPrev = new Array(12), this._triNext = new Array(12);
        }

        return e.testPointTriangle = function (e, n, i, r) {
          return !(t.Vector2Ext.cross(e.sub(n), i.sub(n)) < 0) && !(t.Vector2Ext.cross(e.sub(i), r.sub(i)) < 0) && !(t.Vector2Ext.cross(e.sub(r), n.sub(r)) < 0);
        }, e.prototype.triangulate = function (n, i) {
          void 0 === i && (i = !0);
          var r = n.length;
          this.initialize(r);

          for (var o = 0, s = 0; r > 3 && o < 500;) {
            o++;
            var a = !0,
                c = n[this._triPrev[s]],
                h = n[s],
                u = n[this._triNext[s]];

            if (t.Vector2Ext.isTriangleCCW(c, h, u)) {
              var l = this._triNext[this._triNext[s]];

              do {
                if (e.testPointTriangle(n[l], c, h, u)) {
                  a = !1;
                  break;
                }

                l = this._triNext[l];
              } while (l != this._triPrev[s]);
            } else a = !1;

            a ? (this.triangleIndices.push(this._triPrev[s]), this.triangleIndices.push(s), this.triangleIndices.push(this._triNext[s]), this._triNext[this._triPrev[s]] = this._triNext[s], this._triPrev[this._triNext[s]] = this._triPrev[s], r--, s = this._triPrev[s]) : s = this._triNext[s];
          }

          this.triangleIndices.push(this._triPrev[s]), this.triangleIndices.push(s), this.triangleIndices.push(this._triNext[s]), i || this.triangleIndices.reverse();
        }, e.prototype.initialize = function (t) {
          this.triangleIndices.length = 0, this._triNext.length < t && (this._triNext.reverse(), this._triNext.length = Math.max(2 * this._triNext.length, t)), this._triPrev.length < t && (this._triPrev.reverse(), this._triPrev.length = Math.max(2 * this._triPrev.length, t));

          for (var e = 0; e < t; e++) this._triPrev[e] = e - 1, this._triNext[e] = e + 1;

          this._triPrev[0] = t - 1, this._triNext[t - 1] = 0;
        }, e;
      }();

      t.Triangulator = e;
    }(es || (es = {})), function (t) {
      var e = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"],
          n = function () {
        function t() {}

        return t.randomUUID = function () {
          var t = 4294967295 * Math.random() | 0,
              n = 4294967295 * Math.random() | 0,
              i = 4294967295 * Math.random() | 0,
              r = 4294967295 * Math.random() | 0;
          return e[255 & t] + e[t >> 8 & 255] + e[t >> 16 & 255] + e[t >> 24 & 255] + "-" + e[255 & n] + e[n >> 8 & 255] + "-" + e[n >> 16 & 15 | 64] + e[n >> 24 & 255] + "-" + e[63 & i | 128] + e[i >> 8 & 255] + "-" + e[i >> 16 & 255] + e[i >> 24 & 255] + e[255 & r] + e[r >> 8 & 255] + e[r >> 16 & 255] + e[r >> 24 & 255];
        }, t;
      }();

      t.UUID = n;
    }(es || (es = {})), function (t) {
      t.getClassName = function (t) {
        return t.className || t.name;
      };
    }(es || (es = {})), function (t) {
      var e,
          n = function () {
        function t(t) {
          void 0 === t && (t = i), this.getSystemTime = t, this._stopDuration = 0, this._completeSlices = [];
        }

        return t.prototype.getState = function () {
          return void 0 === this._startSystemTime ? e.IDLE : void 0 === this._stopSystemTime ? e.RUNNING : e.STOPPED;
        }, t.prototype.isIdle = function () {
          return this.getState() === e.IDLE;
        }, t.prototype.isRunning = function () {
          return this.getState() === e.RUNNING;
        }, t.prototype.isStopped = function () {
          return this.getState() === e.STOPPED;
        }, t.prototype.slice = function () {
          return this.recordPendingSlice();
        }, t.prototype.getCompletedSlices = function () {
          return Array.from(this._completeSlices);
        }, t.prototype.getCompletedAndPendingSlices = function () {
          return __spread(this._completeSlices, [this.getPendingSlice()]);
        }, t.prototype.getPendingSlice = function () {
          return this.calculatePendingSlice();
        }, t.prototype.getTime = function () {
          return this.caculateStopwatchTime();
        }, t.prototype.reset = function () {
          this._startSystemTime = this._pendingSliceStartStopwatchTime = this._stopSystemTime = void 0, this._stopDuration = 0, this._completeSlices = [];
        }, t.prototype.start = function (t) {
          if (void 0 === t && (t = !1), t && this.reset(), void 0 !== this._stopSystemTime) {
            var e = (n = this.getSystemTime()) - this._stopSystemTime;

            this._stopDuration += e, this._stopSystemTime = void 0;
          } else if (void 0 === this._startSystemTime) {
            var n = this.getSystemTime();
            this._startSystemTime = n, this._pendingSliceStartStopwatchTime = 0;
          }
        }, t.prototype.stop = function (t) {
          if (void 0 === t && (t = !1), void 0 === this._startSystemTime) return 0;
          var e = this.getSystemTimeOfCurrentStopwatchTime();
          return t && this.recordPendingSlice(this.caculateStopwatchTime(e)), this._stopSystemTime = e, this.getTime();
        }, t.prototype.calculatePendingSlice = function (t) {
          return void 0 === this._pendingSliceStartStopwatchTime ? Object.freeze({
            startTime: 0,
            endTime: 0,
            duration: 0
          }) : (void 0 === t && (t = this.getTime()), Object.freeze({
            startTime: this._pendingSliceStartStopwatchTime,
            endTime: t,
            duration: t - this._pendingSliceStartStopwatchTime
          }));
        }, t.prototype.caculateStopwatchTime = function (t) {
          return void 0 === this._startSystemTime ? 0 : (void 0 === t && (t = this.getSystemTimeOfCurrentStopwatchTime()), t - this._startSystemTime - this._stopDuration);
        }, t.prototype.getSystemTimeOfCurrentStopwatchTime = function () {
          return void 0 === this._stopSystemTime ? this.getSystemTime() : this._stopSystemTime;
        }, t.prototype.recordPendingSlice = function (t) {
          if (void 0 !== this._pendingSliceStartStopwatchTime) {
            void 0 === t && (t = this.getTime());
            var e = this.calculatePendingSlice(t);
            return this._pendingSliceStartStopwatchTime = e.endTime, this._completeSlices.push(e), e;
          }

          return this.calculatePendingSlice();
        }, t;
      }();

      t.Stopwatch = n, function (t) {
        t.IDLE = "IDLE", t.RUNNING = "RUNNING", t.STOPPED = "STOPPED";
      }(e || (e = {})), t.setDefaultSystemTimeGetter = function (t) {
        void 0 === t && (t = Date.now), i = t;
      };
      var i = Date.now;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t(t) {
          void 0 === t && (t = 64), this.size_ = 0, this.length = 0, this.array = [], this.length = t;
        }

        return t.prototype.removeAt = function (t) {
          var e = this.array[t];
          return this.array[t] = this.array[--this.size_], this.array[this.size_] = null, e;
        }, t.prototype.remove = function (t) {
          var e,
              n = this.size_;

          for (e = 0; e < n; e++) if (t == this.array[e]) return this.array[e] = this.array[--this.size_], this.array[this.size_] = null, !0;

          return !1;
        }, t.prototype.removeLast = function () {
          if (this.size_ > 0) {
            var t = this.array[--this.size_];
            return this.array[this.size_] = null, t;
          }

          return null;
        }, t.prototype.contains = function (t) {
          var e, n;

          for (e = 0, n = this.size_; n > e; e++) if (t === this.array[e]) return !0;

          return !1;
        }, t.prototype.removeAll = function (t) {
          var e,
              n,
              i,
              r,
              o = !1;

          for (e = 0, i = t.size(); e < i; e++) for (r = t[e], n = 0; n < this.size_; n++) if (r === this.array[n]) {
            this.removeAt(n), n--, o = !0;
            break;
          }

          return o;
        }, t.prototype.get = function (t) {
          if (t >= this.length) throw new Error("ArrayIndexOutOfBoundsException");
          return this.array[t];
        }, t.prototype.safeGet = function (t) {
          return t >= this.length && this.grow(7 * t / 4 + 1), this.array[t];
        }, t.prototype.size = function () {
          return this.size_;
        }, t.prototype.getCapacity = function () {
          return this.length;
        }, t.prototype.isIndexWithinBounds = function (t) {
          return t < this.getCapacity();
        }, t.prototype.isEmpty = function () {
          return 0 == this.size_;
        }, t.prototype.add = function (t) {
          this.size_ === this.length && this.grow(), this.array[this.size_++] = t;
        }, t.prototype.set = function (t, e) {
          t >= this.length && this.grow(2 * t), this.size_ = t + 1, this.array[t] = e;
        }, t.prototype.grow = function (t) {
          void 0 === t && (t = 1 + ~~(3 * this.length / 2)), this.length = ~~t;
        }, t.prototype.ensureCapacity = function (t) {
          t >= this.length && this.grow(2 * t);
        }, t.prototype.clear = function () {
          var t, e;

          for (t = 0, e = this.size_; t < e; t++) this.array[t] = null;

          this.size_ = 0;
        }, t.prototype.addAll = function (t) {
          var e;

          for (e = 0; t.size() > e; e++) this.add(t.get(e));
        }, t;
      }();

      t.Bag = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e(e) {
          void 0 === e && (e = 1), this._freeValueCellIndex = 0, this._collisions = 0, this._valuesInfo = new Array(e), this._values = new Array(e), this._buckets = new Array(t.HashHelpers.getPrime(e));
        }

        return e.prototype.getValuesArray = function (t) {
          return t.value = this._freeValueCellIndex, this._values;
        }, Object.defineProperty(e.prototype, "valuesArray", {
          get: function () {
            return this._values;
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "count", {
          get: function () {
            return this._freeValueCellIndex;
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.add = function (t, e) {
          if (!this.addValue(t, e, {
            value: 0
          })) throw new Error("key ????????????");
        }, e.prototype.addValue = function (i, r, o) {
          var s = t.HashHelpers.getHashCode(i),
              a = e.reduce(s, this._buckets.length);

          if (this._freeValueCellIndex == this._values.length) {
            var c = t.HashHelpers.expandPrime(this._freeValueCellIndex);
            this._values.length = c, this._valuesInfo.length = c;
          }

          var h = t.NumberExtension.toNumber(this._buckets[a]) - 1;
          if (-1 == h) this._valuesInfo[this._freeValueCellIndex] = new n(i, s);else {
            var u = h;

            do {
              if (this._valuesInfo[u].hashcode == s && this._valuesInfo[u].key == i) return this._values[u] = r, o.value = u, !1;
              u = this._valuesInfo[u].previous;
            } while (-1 != u);

            this._collisions++, this._valuesInfo[this._freeValueCellIndex] = new n(i, s, h), this._valuesInfo[h].next = this._freeValueCellIndex;
          }

          if (this._buckets[a] = this._freeValueCellIndex + 1, this._values[this._freeValueCellIndex] = r, o.value = this._freeValueCellIndex, this._freeValueCellIndex++, this._collisions > this._buckets.length) {
            this._buckets = new Array(t.HashHelpers.expandPrime(this._collisions)), this._collisions = 0;

            for (var l = 0; l < this._freeValueCellIndex; l++) {
              a = e.reduce(this._valuesInfo[l].hashcode, this._buckets.length);
              var p = t.NumberExtension.toNumber(this._buckets[a]) - 1;
              this._buckets[a] = l + 1, -1 != p ? (this._collisions++, this._valuesInfo[l].previous = p, this._valuesInfo[l].next = -1, this._valuesInfo[p].next = l) : (this._valuesInfo[l].next = -1, this._valuesInfo[l].previous = -1);
            }
          }

          return !0;
        }, e.prototype.remove = function (n) {
          for (var i = e.hash(n), r = e.reduce(i, this._buckets.length), o = t.NumberExtension.toNumber(this._buckets[r]) - 1; -1 != o;) {
            if (this._valuesInfo[o].hashcode == i && this._valuesInfo[o].key == n) {
              if (this._buckets[r] - 1 == o) {
                if (-1 != this._valuesInfo[o].next) throw new Error("?????? bucket ???????????????????????? next ??????????????????");
                var s = this._valuesInfo[o].previous;
                this._buckets[r] = s + 1;
              } else if (-1 == this._valuesInfo[o].next) throw new Error("?????? bucket ?????????????????????????????? NEXT ????????????");

              e.updateLinkedList(o, this._valuesInfo);
              break;
            }

            o = this._valuesInfo[o].previous;
          }

          if (-1 == o) return !1;

          if (this._freeValueCellIndex--, o != this._freeValueCellIndex) {
            var a = e.reduce(this._valuesInfo[this._freeValueCellIndex].hashcode, this._buckets.length);
            this._buckets[a] - 1 == this._freeValueCellIndex && (this._buckets[a] = o + 1);
            var c = this._valuesInfo[this._freeValueCellIndex].next,
                h = this._valuesInfo[this._freeValueCellIndex].previous;
            -1 != c && (this._valuesInfo[c].previous = o), -1 != h && (this._valuesInfo[h].next = o), this._valuesInfo[o] = this._valuesInfo[this._freeValueCellIndex], this._values[o] = this._values[this._freeValueCellIndex];
          }

          return !0;
        }, e.prototype.trim = function () {
          var e = t.HashHelpers.expandPrime(this._freeValueCellIndex);
          e < this._valuesInfo.length && (this._values.length = e, this._valuesInfo.length = e);
        }, e.prototype.clear = function () {
          0 != this._freeValueCellIndex && (this._freeValueCellIndex = 0, this._buckets.length = 0, this._values.length = 0, this._valuesInfo.length = 0);
        }, e.prototype.fastClear = function () {
          0 != this._freeValueCellIndex && (this._freeValueCellIndex = 0, this._buckets.length = 0, this._valuesInfo.length = 0);
        }, e.prototype.containsKey = function (t) {
          return !!this.tryFindIndex(t, {
            value: 0
          });
        }, e.prototype.tryGetValue = function (t) {
          var e = {
            value: 0
          };
          return this.tryFindIndex(t, e) ? this._values[e.value] : null;
        }, e.prototype.tryFindIndex = function (n, i) {
          for (var r = e.hash(n), o = e.reduce(r, this._buckets.length), s = t.NumberExtension.toNumber(this._buckets[o]) - 1; -1 != s;) {
            if (this._valuesInfo[s].hashcode == r && this._valuesInfo[s].key == n) return i.value = s, !0;
            s = this._valuesInfo[s].previous;
          }

          return i.value = 0, !1;
        }, e.prototype.getDirectValue = function (t) {
          return this._values[t];
        }, e.prototype.getIndex = function (t) {
          var e = {
            value: 0
          };
          if (this.tryFindIndex(t, e)) return e.value;
          throw new Error("?????????key");
        }, e.updateLinkedList = function (t, e) {
          var n = e[t].next,
              i = e[t].previous;
          -1 != n && (e[n].previous = i), -1 != i && (e[i].next = n);
        }, e.hash = function (e) {
          return t.HashHelpers.getHashCode(e);
        }, e.reduce = function (t, e) {
          return t >= e ? t % e : t;
        }, e;
      }();

      t.FasterDictionary = e;

      var n = function () {
        return function (t, e, n) {
          void 0 === n && (n = -1), this.key = t, this.hashcode = e, this.previous = n, this.next = -1;
        };
      }();

      t.FastNode = n;
    }(es || (es = {})), function (t) {
      var e = function () {
        return function (t, e) {
          this.element = t, this.next = e;
        };
      }();

      function n(t, e) {
        return t === e;
      }

      t.Node = e, t.defaultEquals = n;

      var i = function () {
        function t(t) {
          void 0 === t && (t = n), this.count = 0, this.next = void 0, this.equalsFn = t, this.head = null;
        }

        return t.prototype.push = function (t) {
          var n,
              i = new e(t);
          if (null == this.head) this.head = i;else {
            for (n = this.head; null != n.next;) n = n.next;

            n.next = i;
          }
          this.count++;
        }, t.prototype.removeAt = function (t) {
          if (t >= 0 && t < this.count) {
            var e = this.head;
            if (0 === t) this.head = e.next;else {
              var n = this.getElementAt(t - 1);
              e = n.next, n.next = e.next;
            }
            return this.count--, e.element;
          }
        }, t.prototype.getElementAt = function (t) {
          if (t >= 0 && t <= this.count) {
            for (var e = this.head, n = 0; n < t && null != e; n++) e = e.next;

            return e;
          }
        }, t.prototype.insert = function (t, n) {
          if (n >= 0 && n <= this.count) {
            var i = new e(t);
            if (0 === n) i.next = this.head, this.head = i;else {
              var r = this.getElementAt(n - 1);
              i.next = r.next, r.next = i;
            }
            return this.count++, !0;
          }

          return !1;
        }, t.prototype.indexOf = function (t) {
          for (var e = this.head, n = 0; n < this.count && null != e; n++) {
            if (this.equalsFn(t, e.element)) return n;
            e = e.next;
          }

          return -1;
        }, t.prototype.remove = function (t) {
          this.removeAt(this.indexOf(t));
        }, t.prototype.clear = function () {
          this.head = void 0, this.count = 0;
        }, t.prototype.size = function () {
          return this.count;
        }, t.prototype.isEmpty = function () {
          return 0 === this.size();
        }, t.prototype.getHead = function () {
          return this.head;
        }, t.prototype.toString = function () {
          if (null == this.head) return "";

          for (var t = "" + this.head.element, e = this.head.next, n = 1; n < this.size() && null != e; n++) t = t + ", " + e.element, e = e.next;

          return t;
        }, t;
      }();

      t.LinkedList = i;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {}

        return t.warmCache = function (t, e) {
          if (this.checkCreate(t), (e -= this._objectQueue.get(t).length) > 0) for (var n = 0; n < e; n++) this._objectQueue.get(t).unshift([]);
        }, t.trimCache = function (t, e) {
          for (this.checkCreate(t); e > this._objectQueue.get(t).length;) this._objectQueue.get(t).shift();
        }, t.clearCache = function (t) {
          this.checkCreate(t), this._objectQueue.get(t).length = 0;
        }, t.obtain = function (t) {
          return this.checkCreate(t), this._objectQueue.get(t).length > 0 ? this._objectQueue.get(t).shift() : [];
        }, t.free = function (t, e) {
          this.checkCreate(t), this._objectQueue.get(t).unshift(e), e.length = 0;
        }, t.checkCreate = function (t) {
          this._objectQueue.get(t) || this._objectQueue.set(t, []);
        }, t._objectQueue = new Map(), t;
      }();

      t.ListPool = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t(t, e) {
          this.first = t, this.second = e;
        }

        return t.prototype.clear = function () {
          this.first = this.second = null;
        }, t.prototype.equals = function (t) {
          return this.first === t.first && this.second === t.second;
        }, t;
      }();

      t.Pair = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {
          this._all = new Array();
        }

        return Object.defineProperty(t.prototype, "all", {
          get: function () {
            return this._all;
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.has = function (t) {
          return this._all.findIndex(function (e) {
            return e.equals(t);
          }) > -1;
        }, t.prototype.add = function (t) {
          this.has(t) || this._all.push(t);
        }, t.prototype.remove = function (t) {
          var e = this._all.findIndex(function (e) {
            return e.equals(t);
          });

          if (e > -1) {
            var n = this._all[e];
            this._all[e] = this._all[this._all.length - 1], this._all[this._all.length - 1] = n, this._all = this._all.slice(0, this._all.length - 1);
          }
        }, t.prototype.clear = function () {
          this._all = [];
        }, t.prototype.union = function (t) {
          var e,
              n,
              i = t.all;

          try {
            for (var r = __values(i), o = r.next(); !o.done; o = r.next()) {
              var s = o.value;
              this.add(s);
            }
          } catch (t) {
            e = {
              error: t
            };
          } finally {
            try {
              o && !o.done && (n = r.return) && n.call(r);
            } finally {
              if (e) throw e.error;
            }
          }
        }, t.prototype.except = function (t) {
          var e,
              n,
              i = t.all;

          try {
            for (var r = __values(i), o = r.next(); !o.done; o = r.next()) {
              var s = o.value;
              this.remove(s);
            }
          } catch (t) {
            e = {
              error: t
            };
          } finally {
            try {
              o && !o.done && (n = r.return) && n.call(r);
            } finally {
              if (e) throw e.error;
            }
          }
        }, t;
      }();

      t.PairSet = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return e.warmCache = function (t, e) {
          if (this.checkCreate(t), (e -= this._objectQueue.get(t).length) > 0) for (var n = 0; n < e; n++) this._objectQueue.get(t).unshift(new t());
        }, e.trimCache = function (t, e) {
          for (this.checkCreate(t); e > this._objectQueue.get(t).length;) this._objectQueue.get(t).shift();
        }, e.clearCache = function (t) {
          this.checkCreate(t), this._objectQueue.get(t).length = 0;
        }, e.obtain = function (t) {
          return this.checkCreate(t), this._objectQueue.get(t).length > 0 ? this._objectQueue.get(t).shift() : new t();
        }, e.free = function (e, n) {
          this.checkCreate(e), this._objectQueue.get(e).unshift(n), t.isIPoolable(n) && n.reset();
        }, e.checkCreate = function (t) {
          this._objectQueue.get(t) || this._objectQueue.set(t, []);
        }, e._objectQueue = new Map(), e;
      }();

      t.Pool = e, t.isIPoolable = function (t) {
        return void 0 !== t.reset;
      };
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {}

        return t.waitForSeconds = function (t) {
          return n.waiter.wait(t);
        }, t;
      }();

      t.Coroutine = e;

      var n = function () {
        function t() {
          this.waitTime = 0;
        }

        return t.prototype.wait = function (e) {
          return t.waiter.waitTime = e, t.waiter;
        }, t.waiter = new t(), t;
      }();

      t.WaitForSeconds = n;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {
          this.waitTimer = 0, this.useUnscaledDeltaTime = !1;
        }

        return t.prototype.stop = function () {
          this.isDone = !0;
        }, t.prototype.setUseUnscaledDeltaTime = function (t) {
          return this.useUnscaledDeltaTime = t, this;
        }, t.prototype.prepareForUse = function () {
          this.isDone = !1;
        }, t.prototype.reset = function () {
          this.isDone = !0, this.waitTimer = 0, this.waitForCoroutine = null, this.enumerator = null, this.useUnscaledDeltaTime = !1;
        }, t;
      }();

      t.CoroutineImpl = e;

      var n = function (n) {
        function i() {
          var t = null !== n && n.apply(this, arguments) || this;
          return t._unblockedCoroutines = [], t._shouldRunNextFrame = [], t;
        }

        return __extends(i, n), i.prototype.startCoroutine = function (n) {
          var i = t.Pool.obtain(e);
          return i.prepareForUse(), i.enumerator = n, this.tickCoroutine(i) ? (this._isInUpdate ? this._shouldRunNextFrame.push(i) : this._unblockedCoroutines.push(i), i) : null;
        }, i.prototype.update = function () {
          this._isInUpdate = !0;

          for (var n = 0; n < this._unblockedCoroutines.length; n++) {
            var i = this._unblockedCoroutines[n];
            if (i.isDone) t.Pool.free(e, i);else {
              if (null != i.waitForCoroutine) {
                if (!i.waitForCoroutine.isDone) {
                  this._shouldRunNextFrame.push(i);

                  continue;
                }

                i.waitForCoroutine = null;
              }

              i.waitTimer > 0 ? (i.waitTimer -= i.useUnscaledDeltaTime ? t.Time.unscaledDeltaTime : t.Time.deltaTime, this._shouldRunNextFrame.push(i)) : this.tickCoroutine(i) && this._shouldRunNextFrame.push(i);
            }
          }

          var r = new t.List(this._unblockedCoroutines);
          r.clear(), r.addRange(this._shouldRunNextFrame), this._shouldRunNextFrame.length = 0, this._isInUpdate = !1;
        }, i.prototype.tickCoroutine = function (n) {
          var i = n.enumerator.next();
          return i.done || n.isDone ? (t.Pool.free(e, n), !1) : null == i.value || (i.value instanceof t.WaitForSeconds ? (n.waitTimer = i.value.waitTime, !0) : "number" == typeof i.value ? (n.waitTimer = i.value, !0) : "string" == typeof i.value ? "break" != i.value || (t.Pool.free(e, n), !1) : !(i.value instanceof e) || (n.waitForCoroutine = i.value, !0));
        }, i;
      }(t.GlobalManager);

      t.CoroutineManager = n;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e(t, e, n) {
          void 0 === n && (n = !0), this.binWidth = 0, this.binHeight = 0, this.usedRectangles = [], this.freeRectangles = [], this.init(t, e, n);
        }

        return e.prototype.init = function (e, n, i) {
          void 0 === i && (i = !0), this.binWidth = e, this.binHeight = n, this.allowRotations = i;
          var r = new t.Rectangle();
          r.x = 0, r.y = 0, r.width = e, r.height = n, this.usedRectangles.length = 0, this.freeRectangles.length = 0, this.freeRectangles.push(r);
        }, e.prototype.insert = function (e, n) {
          var i = new t.Rectangle(),
              r = new t.Ref(0),
              o = new t.Ref(0);
          if (0 == (i = this.findPositionForNewNodeBestAreaFit(e, n, r, o)).height) return i;

          for (var s = this.freeRectangles.length, a = 0; a < s; ++a) this.splitFreeNode(this.freeRectangles[a], i) && (new t.List(this.freeRectangles).removeAt(a), --a, --s);

          return this.pruneFreeList(), this.usedRectangles.push(i), i;
        }, e.prototype.findPositionForNewNodeBestAreaFit = function (e, n, i, r) {
          var o = new t.Rectangle();
          i.value = Number.MAX_VALUE;

          for (var s = 0; s < this.freeRectangles.length; ++s) {
            var a = this.freeRectangles[s].width * this.freeRectangles[s].height - e * n;

            if (this.freeRectangles[s].width >= e && this.freeRectangles[s].height >= n) {
              var c = Math.abs(this.freeRectangles[s].width - e),
                  h = Math.abs(this.freeRectangles[s].height - n),
                  u = Math.min(c, h);
              (a < i.value || a == i.value && u < r.value) && (o.x = this.freeRectangles[s].x, o.y = this.freeRectangles[s].y, o.width = e, o.height = n, r.value = u, i.value = a);
            }

            if (this.allowRotations && this.freeRectangles[s].width >= n && this.freeRectangles[s].height >= e) {
              c = Math.abs(this.freeRectangles[s].width - n), h = Math.abs(this.freeRectangles[s].height - e), u = Math.min(c, h);
              (a < i.value || a == i.value && u < r.value) && (o.x = this.freeRectangles[s].x, o.y = this.freeRectangles[s].y, o.width = n, o.height = e, r.value = u, i.value = a);
            }

            return o;
          }
        }, e.prototype.splitFreeNode = function (t, e) {
          if (e.x >= t.x + t.width || e.x + e.width <= t.x || e.y >= t.y + t.height || e.y + e.height <= t.y) return !1;

          if (e.x < t.x + t.width && e.x + e.width > t.x) {
            if (e.y > t.y && e.y < t.y + t.height) (n = t).height = e.y - n.y, this.freeRectangles.push(n);
            if (e.y + e.height < t.y + t.height) (n = t).y = e.y + e.height, n.height = t.y + t.height - (e.y + e.height), this.freeRectangles.push(n);
          }

          if (e.y < t.y + t.height && e.y + e.height > t.y) {
            var n;
            if (e.x > t.x && e.x < t.x + t.width) (n = t).width = e.x - n.x, this.freeRectangles.push(n);
            if (e.x + e.width < t.x + t.width) (n = t).x = e.x + e.width, n.width = t.x + t.width - (e.x + e.width), this.freeRectangles.push(n);
          }

          return !0;
        }, e.prototype.pruneFreeList = function () {
          for (var e = 0; e < this.freeRectangles.length; ++e) for (var n = e + 1; n < this.freeRectangles.length; ++n) {
            if (this.isContainedIn(this.freeRectangles[e], this.freeRectangles[n])) {
              new t.List(this.freeRectangles).removeAt(e), --e;
              break;
            }

            this.isContainedIn(this.freeRectangles[n], this.freeRectangles[e]) && (new t.List(this.freeRectangles).removeAt(n), --n);
          }
        }, e.prototype.isContainedIn = function (t, e) {
          return t.x >= e.x && t.y >= e.y && t.x + t.width <= e.x + e.width && t.y + t.height <= e.y + e.height;
        }, e;
      }();

      t.MaxRectsBinPack = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return e.bubbleSort = function (t) {
          for (var e = !1, n = 0; n < t.length; n++) {
            e = !1;

            for (var i = t.length - 1; i > n; i--) if (t[i] < t[i - 1]) {
              var r = t[i];
              t[i] = t[i - 1], t[i - 1] = r, e = !0;
            }

            if (!e) break;
          }
        }, e.insertionSort = function (t) {
          for (var e = t.length, n = 1; n < e; n++) {
            for (var i = t[n], r = n; r > 0 && t[r - 1] > i; r--) t[r] = t[r - 1];

            t[r] = i;
          }
        }, e.binarySearch = function (t, e) {
          for (var n = 0, i = t.length, r = n + i >> 1; n < i;) e <= t[r] ? i = r : e >= t[r] && (n = r + 1), r = n + i >> 1;

          return t[n] == e ? n : -1;
        }, e.findElementIndex = function (t, e) {
          for (var n = t.length, i = 0; i < n; ++i) if (t[i] == e) return i;

          return null;
        }, e.getMaxElementIndex = function (t) {
          for (var e = 0, n = t.length, i = 1; i < n; i++) t[i] > t[e] && (e = i);

          return e;
        }, e.getMinElementIndex = function (t) {
          for (var e = 0, n = t.length, i = 1; i < n; i++) t[i] < t[e] && (e = i);

          return e;
        }, e.getUniqueAry = function (t) {
          for (var e = [], n = [], i = t.length, r = 0; r < i; ++r) {
            var o = t[r];
            -1 == e.indexOf(o) && e.push(o);
          }

          for (r = (i = e.length) - 1; r >= 0; --r) n.unshift(e[r]);

          return n;
        }, e.getDifferAry = function (t, e) {
          t = this.getUniqueAry(t), e = this.getUniqueAry(e);

          for (var n = t.concat(e), i = {}, r = [], o = n.length, s = 0; s < o; ++s) i[n[s]] ? i[n[s]] instanceof Object && i[n[s]].count++ : (i[n[s]] = {}, i[n[s]].count = 0, i[n[s]].key = n[s], i[n[s]].count++);

          for (var a in i) 2 != i[a].count && r.unshift(i[a].key);

          return r;
        }, e.swap = function (t, e, n) {
          var i = t[e];
          t[e] = t[n], t[n] = i;
        }, e.clearList = function (t) {
          if (t) for (var e = t.length - 1; e >= 0; e -= 1) t.splice(e, 1);
        }, e.cloneList = function (t) {
          return t ? t.slice(0, t.length) : null;
        }, e.equals = function (t, e) {
          if (t == e) return !0;
          var n = t.length;
          if (n != e.length) return !1;

          for (; n--;) if (t[n] != e[n]) return !1;

          return !0;
        }, e.insert = function (t, e, n) {
          if (!t) return null;
          var i = t.length;
          if (e > i && (e = i), e < 0 && (e = 0), e == i) t.push(n);else if (0 == e) t.unshift(n);else {
            for (var r = i - 1; r >= e; r -= 1) t[r + 1] = t[r];

            t[e] = n;
          }
          return n;
        }, e.shuffle = function (e) {
          for (var n = e.length; n > 1;) {
            n--;
            var i = t.RandomUtils.randint(0, n + 1),
                r = e[i];
            e[i] = e[n], e[n] = r;
          }
        }, e.addIfNotPresent = function (e, n) {
          return !new t.List(e).contains(n) && (e.push(n), !0);
        }, e.lastItem = function (t) {
          return t[t.length - 1];
        }, e.randomItem = function (e) {
          return e[t.RandomUtils.randint(0, e.length - 1)];
        }, e.randomItems = function (e, n, i) {
          for (var r = new Set(); r.size != i;) {
            var o = this.randomItem(n);
            r.has(o) || r.add(o);
          }

          var s = t.ListPool.obtain(e);
          return r.forEach(function (t) {
            return s.push(t);
          }), s;
        }, e;
      }();

      t.ArrayUtils = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {}

        return Object.defineProperty(t, "nativeBase64", {
          get: function () {
            return "function" == typeof window.atob;
          },
          enumerable: !0,
          configurable: !0
        }), t.decode = function (t) {
          if (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""), this.nativeBase64) return window.atob(t);

          for (var e, n, i, r, o, s, a = [], c = 0; c < t.length;) e = this._keyStr.indexOf(t.charAt(c++)) << 2 | (r = this._keyStr.indexOf(t.charAt(c++))) >> 4, n = (15 & r) << 4 | (o = this._keyStr.indexOf(t.charAt(c++))) >> 2, i = (3 & o) << 6 | (s = this._keyStr.indexOf(t.charAt(c++))), a.push(String.fromCharCode(e)), 64 !== o && a.push(String.fromCharCode(n)), 64 !== s && a.push(String.fromCharCode(i));

          return a = a.join("");
        }, t.encode = function (t) {
          if (t = t.replace(/\r\n/g, "\n"), !this.nativeBase64) {
            for (var e, n, i, r, o, s, a, c = [], h = 0; h < t.length;) r = (e = t.charCodeAt(h++)) >> 2, o = (3 & e) << 4 | (n = t.charCodeAt(h++)) >> 4, s = (15 & n) << 2 | (i = t.charCodeAt(h++)) >> 6, a = 63 & i, isNaN(n) ? s = a = 64 : isNaN(i) && (a = 64), c.push(this._keyStr.charAt(r)), c.push(this._keyStr.charAt(o)), c.push(this._keyStr.charAt(s)), c.push(this._keyStr.charAt(a));

            return c = c.join("");
          }

          window.btoa(t);
        }, t.decodeBase64AsArray = function (e, n) {
          n = n || 1;
          var i,
              r,
              o,
              s = t.decode(e),
              a = new Uint32Array(s.length / n);

          for (i = 0, o = s.length / n; i < o; i++) for (a[i] = 0, r = n - 1; r >= 0; --r) a[i] += s.charCodeAt(i * n + r) << (r << 3);

          return a;
        }, t.decompress = function (t, e, n) {
          throw new Error("GZIP/ZLIB compressed TMX Tile Map not supported!");
        }, t.decodeCSV = function (t) {
          for (var e = t.replace("\n", "").trim().split(","), n = [], i = 0; i < e.length; i++) n.push(+e[i]);

          return n;
        }, t._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", t;
      }();

      t.Base64Utils = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return e.oppositeEdge = function (e) {
          switch (e) {
            case t.Edge.bottom:
              return t.Edge.top;

            case t.Edge.top:
              return t.Edge.bottom;

            case t.Edge.left:
              return t.Edge.right;

            case t.Edge.right:
              return t.Edge.left;
          }
        }, e.isHorizontal = function (e) {
          return e == t.Edge.right || e == t.Edge.left;
        }, e.isVertical = function (e) {
          return e == t.Edge.top || e == t.Edge.bottom;
        }, e;
      }();

      t.EdgeExt = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {}

        return t.toNumber = function (t) {
          return null == t ? 0 : Number(t);
        }, t;
      }();

      t.NumberExtension = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {}

        return t.randrange = function (t, e, n) {
          if (void 0 === n && (n = 1), 0 == n) throw new Error("step ????????? 0");
          var i = e - t;
          if (0 == i) throw new Error("?????????????????????(" + t + "," + e + ")");
          i < 0 && (i = t - e);
          var r = Math.floor((i + n - 1) / n);
          return Math.floor(this.random() * r) * n + Math.min(t, e);
        }, t.randint = function (t, e) {
          return (t = Math.floor(t)) > (e = Math.floor(e)) ? t++ : e++, this.randrange(t, e);
        }, t.randnum = function (t, e) {
          return this.random() * (e - t) + t;
        }, t.shuffle = function (t) {
          return t.sort(this._randomCompare), t;
        }, t.choice = function (t) {
          if (!t.hasOwnProperty("length")) throw new Error("?????????????????????????????????");
          var e = Math.floor(this.random() * t.length);
          return t instanceof String ? String(t).charAt(e) : t[e];
        }, t.sample = function (t, e) {
          var n = t.length;
          if (e <= 0 || n < e) throw new Error("??????????????????");

          for (var i = [], r = [], o = 0; o < e; o++) {
            for (var s = Math.floor(this.random() * n); r.indexOf(s) >= 0;) s = Math.floor(this.random() * n);

            i.push(t[s]), r.push(s);
          }

          return i;
        }, t.random = function () {
          return Math.random();
        }, t.boolean = function (t) {
          return void 0 === t && (t = .5), this.random() < t;
        }, t._randomCompare = function (t, e) {
          return this.random() > .5 ? 1 : -1;
        }, t;
      }();

      t.RandomUtils = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return e.getSide = function (e, n) {
          switch (n) {
            case t.Edge.top:
              return e.top;

            case t.Edge.bottom:
              return e.bottom;

            case t.Edge.left:
              return e.left;

            case t.Edge.right:
              return e.right;
          }
        }, e.union = function (e, n) {
          var i = new t.Rectangle(n.x, n.y, 0, 0),
              r = new t.Rectangle();
          return r.x = Math.min(e.x, i.x), r.y = Math.min(e.y, i.y), r.width = Math.max(e.right, i.right) - r.x, r.height = Math.max(e.bottom, i.bottom) - r.y, r;
        }, e.getHalfRect = function (e, n) {
          switch (n) {
            case t.Edge.top:
              return new t.Rectangle(e.x, e.y, e.width, e.height / 2);

            case t.Edge.bottom:
              return new t.Rectangle(e.x, e.y + e.height / 2, e.width, e.height / 2);

            case t.Edge.left:
              return new t.Rectangle(e.x, e.y, e.width / 2, e.height);

            case t.Edge.right:
              return new t.Rectangle(e.x + e.width / 2, e.y, e.width / 2, e.height);
          }
        }, e.getRectEdgePortion = function (e, n, i) {
          switch (void 0 === i && (i = 1), n) {
            case t.Edge.top:
              return new t.Rectangle(e.x, e.y, e.width, i);

            case t.Edge.bottom:
              return new t.Rectangle(e.x, e.y + e.height - i, e.width, i);

            case t.Edge.left:
              return new t.Rectangle(e.x, e.y, i, e.height);

            case t.Edge.right:
              return new t.Rectangle(e.x + e.width - i, e.y, i, e.height);
          }
        }, e.expandSide = function (e, n, i) {
          switch (i = Math.abs(i), n) {
            case t.Edge.top:
              e.y -= i, e.height += i;
              break;

            case t.Edge.bottom:
              e.height += i;
              break;

            case t.Edge.left:
              e.x -= i, e.width += i;
              break;

            case t.Edge.right:
              e.width += i;
          }
        }, e.contract = function (t, e, n) {
          t.x += e, t.y += n, t.width -= 2 * e, t.height -= 2 * n;
        }, e.boundsFromPolygonVector = function (e) {
          for (var n = Number.POSITIVE_INFINITY, i = Number.POSITIVE_INFINITY, r = Number.NEGATIVE_INFINITY, o = Number.NEGATIVE_INFINITY, s = 0; s < e.length; s++) {
            var a = e[s];
            a.x < n && (n = a.x), a.x > r && (r = a.x), a.y < i && (i = a.y), a.y > o && (o = a.y);
          }

          return this.fromMinMaxVector(new t.Vector2(n, i), new t.Vector2(r, o));
        }, e.fromMinMaxVector = function (e, n) {
          return new t.Rectangle(e.x, e.y, n.x - e.x, n.y - e.y);
        }, e.getSweptBroadphaseBounds = function (e, n, i) {
          var r = t.Rectangle.empty;
          return r.x = n > 0 ? e.x : e.x + n, r.y = i > 0 ? e.y : e.y + i, r.width = n > 0 ? n + e.width : e.width - n, r.height = i > 0 ? i + e.height : e.height - i, r;
        }, e.prototype.collisionCheck = function (t, e, n, i) {
          n.value = i.value = 0;
          var r = e.x - (t.x + t.width),
              o = e.x + e.width - t.x,
              s = e.y - (t.y + t.height),
              a = e.y + e.height - t.y;
          return !(r > 0 || o < 0 || s > 0 || a < 0) && (n.value = Math.abs(r) < o ? r : o, i.value = Math.abs(s) < a ? s : a, Math.abs(n.value) < Math.abs(i.value) ? i.value = 0 : n.value = 0, !0);
        }, e.getIntersectionDepth = function (e, n) {
          var i = e.width / 2,
              r = e.height / 2,
              o = n.width / 2,
              s = n.height / 2,
              a = new t.Vector2(e.left + i, e.top + r),
              c = new t.Vector2(n.left + o, n.top + s),
              h = a.x - c.x,
              u = a.y - c.y,
              l = i + o,
              p = r + s;
          if (Math.abs(h) >= l || Math.abs(u) >= p) return t.Vector2.zero;
          var f = h > 0 ? l - h : -l - h,
              d = u > 0 ? p - u : -p - u;
          return new t.Vector2(f, d);
        }, e.getClosestPointOnBoundsToOrigin = function (e) {
          var n = this.getMax(e),
              i = Math.abs(e.location.x),
              r = new t.Vector2(e.location.x, 0);
          return Math.abs(n.x) < i && (i = Math.abs(n.x), r.x = n.x, r.y = 0), Math.abs(n.y) < i && (i = Math.abs(n.y), r.x = 0, r.y = n.y), Math.abs(e.location.y) < i && (i = Math.abs(e.location.y), r.x = 0, r.y = e.location.y), r;
        }, e.getClosestPointOnRectangleToPoint = function (e, n) {
          var i = t.Vector2.zero;
          return i.x = t.MathHelper.clamp(n.x, e.left, e.right), i.y = t.MathHelper.clamp(n.y, e.top, e.bottom), i;
        }, e.getClosestPointOnRectangleBorderToPoint = function (e, n) {
          var i = t.Vector2.zero;

          if (i.x = t.MathHelper.clamp(Math.trunc(n.x), e.left, e.right), i.y = t.MathHelper.clamp(Math.trunc(n.y), e.top, e.bottom), e.contains(i.x, i.y)) {
            var r = e.x - e.left,
                o = e.right - i.x,
                s = i.y - e.top,
                a = e.bottom - i.y,
                c = Math.min(r, o, s, a);
            c == s ? i.y = e.top : c == a ? i.y = e.bottom : c == r ? (i.x, e.left) : i.x = e.right;
          }

          return i;
        }, e.getMax = function (e) {
          return new t.Vector2(e.right, e.bottom);
        }, e.getCenter = function (e) {
          return new t.Vector2(e.x + e.width / 2, e.y + e.height / 2);
        }, e.boundsFromPolygonPoints = function (e) {
          for (var n = Number.POSITIVE_INFINITY, i = Number.POSITIVE_INFINITY, r = Number.NEGATIVE_INFINITY, o = Number.NEGATIVE_INFINITY, s = 0; s < e.length; s++) {
            var a = e[s];
            a.x < n && (n = a.x), a.x > r && (r = a.x), a.y < i && (i = a.y), a.y > o && (o = a.y);
          }

          return this.fromMinMaxVector(new t.Vector2(Math.trunc(n), Math.trunc(i)), new t.Vector2(Math.trunc(r), Math.trunc(o)));
        }, e.calculateBounds = function (e, n, i, r, o, s, a, c) {
          if (0 == s) e.x = Math.trunc(n.x + i.x - r.x * o.x), e.y = Math.trunc(n.y + i.y - r.y * o.y), e.width = Math.trunc(a * o.x), e.height = Math.trunc(c * o.y);else {
            var h = n.x + i.x,
                u = n.y + i.y,
                l = new t.Matrix2D();
            t.Matrix2D.createTranslation(-h - r.x, -u - r.y, l), t.Matrix2D.createScale(o.x, o.y, void 0), l = l.multiply(void 0), t.Matrix2D.createRotation(s, void 0), l = l.multiply(void 0), t.Matrix2D.createTranslation(h, u, void 0), l = l.multiply(void 0);
            var p = new t.Vector2(h, u),
                f = new t.Vector2(h + a, u),
                d = new t.Vector2(h, u + c),
                m = new t.Vector2(h + a, u + c);
            t.Vector2Ext.transformR(p, l, p), t.Vector2Ext.transformR(f, l, f), t.Vector2Ext.transformR(d, l, d), t.Vector2Ext.transformR(m, l, m);

            var y = Math.trunc(Math.min(p.x, m.x, f.x, d.x)),
                g = Math.trunc(Math.max(p.x, m.x, f.x, d.x)),
                _ = Math.trunc(Math.min(p.y, m.y, f.y, d.y)),
                v = Math.trunc(Math.max(p.y, m.y, f.y, d.y));

            e.location = new t.Vector2(y, _), e.width = Math.trunc(g - y), e.height = Math.trunc(v - _);
          }
        }, e.scale = function (t, e) {
          t.x = Math.trunc(t.x * e.x), t.y = Math.trunc(t.y * e.y), t.width = Math.trunc(t.width * e.x), t.height = Math.trunc(t.height * e.y);
        }, e.translate = function (t, e) {
          t.location.addEqual(e);
        }, e;
      }();

      t.RectangleExt = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {}

        return t.premultiplyAlpha = function (t) {
          for (var e = t[0], n = 0; n < t.length; n += 4) if (255 != e[n + 3]) {
            var i = e[n + 3] / 255;
            e[n + 0] = e[n + 0] * i, e[n + 1] = e[n + 1] * i, e[n + 2] = e[n + 2] * i;
          }
        }, t;
      }();

      t.TextureUtils = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function t() {}

        return t.getType = function (t) {
          return t.constructor;
        }, t;
      }();

      t.TypeUtils = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return e.isTriangleCCW = function (t, e, n) {
          return this.cross(e.sub(t), n.sub(e)) < 0;
        }, e.halfVector = function () {
          return new t.Vector2(.5, .5);
        }, e.cross = function (t, e) {
          return t.y * e.x - t.x * e.y;
        }, e.perpendicular = function (e, n) {
          return new t.Vector2(-1 * (n.y - e.y), n.x - e.x);
        }, e.perpendicularFlip = function (e) {
          return new t.Vector2(-e.y, e.x);
        }, e.angle = function (e, n) {
          return this.normalize(e), this.normalize(n), Math.acos(t.MathHelper.clamp(e.dot(n), -1, 1)) * t.MathHelper.Rad2Deg;
        }, e.angleBetween = function (t, e, n) {
          var i = e.sub(t),
              r = n.sub(t);
          return this.angle(i, r);
        }, e.getRayIntersection = function (e, n, i, r, o) {
          void 0 === o && (o = t.Vector2.zero);
          var s = n.y - e.y,
              a = n.x - e.x,
              c = r.y - i.y,
              h = r.x - i.x;
          if (s * h == c * a) return o.x = Number.NaN, o.y = Number.NaN, !1;
          var u = ((i.y - e.y) * a * h + s * h * e.x - c * a * i.x) / (s * h - c * a),
              l = e.y + s / a * (u - e.x);
          return o.x = u, o.y = l, !0;
        }, e.normalize = function (e) {
          var n = Math.sqrt(e.x * e.x + e.y * e.y);
          n > t.MathHelper.Epsilon ? e.divideScaler(n) : e.x = e.y = 0;
        }, e.transformA = function (t, e, n, i, r, o) {
          for (var s = 0; s < o; s++) {
            var a = t[e + s],
                c = i[r + s];
            c.x = a.x * n.m11 + a.y * n.m21 + n.m31, c.y = a.x * n.m12 + a.y * n.m22 + n.m32, i[r + s] = c;
          }
        }, e.transformR = function (e, n, i) {
          void 0 === i && (i = t.Vector2.zero);
          var r = e.x * n.m11 + e.y * n.m21 + n.m31,
              o = e.x * n.m12 + e.y * n.m22 + n.m32;
          i.x = r, i.y = o;
        }, e.transform = function (t, e, n) {
          this.transformA(t, 0, e, n, 0, t.length);
        }, e.round = function (e) {
          return new t.Vector2(Math.round(e.x), Math.round(e.y));
        }, e;
      }();

      t.Vector2Ext = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {}

        return e.range = function (e, n) {
          for (var i = new t.List(); n--;) i.add(e++);

          return i;
        }, e.repeat = function (e, n) {
          for (var i = new t.List(); n--;) i.add(e);

          return i;
        }, e;
      }();

      t.Enumerable = e;
    }(es || (es = {})), function (t) {
      t.isObj = function (t) {
        return !!t && "object" == typeof t;
      }, t.negate = function (t) {
        return function () {
          for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];

          return !t.apply(void 0, __spread(e));
        };
      }, t.composeComparers = function (t, e) {
        return function (n, i) {
          return t(n, i) || e(n, i);
        };
      }, t.keyComparer = function (t, e) {
        return function (n, i) {
          var r = t(n),
              o = t(i);
          return r > o ? e ? -1 : 1 : r < o ? e ? 1 : -1 : 0;
        };
      };
    }(es || (es = {})), function (t) {
      var e = function () {
        function e(t) {
          void 0 === t && (t = []), this._elements = t;
        }

        return e.prototype.add = function (t) {
          this._elements.push(t);
        }, e.prototype.append = function (t) {
          this.add(t);
        }, e.prototype.prepend = function (t) {
          this._elements.unshift(t);
        }, e.prototype.addRange = function (t) {
          var e;

          (e = this._elements).push.apply(e, __spread(t));
        }, e.prototype.aggregate = function (t, e) {
          return this._elements.reduce(t, e);
        }, e.prototype.all = function (t) {
          return this._elements.every(t);
        }, e.prototype.any = function (t) {
          return t ? this._elements.some(t) : this._elements.length > 0;
        }, e.prototype.average = function (t) {
          return this.sum(t) / this.count(t);
        }, e.prototype.cast = function () {
          return new e(this._elements);
        }, e.prototype.clear = function () {
          this._elements.length = 0;
        }, e.prototype.concat = function (t) {
          return new e(this._elements.concat(t.toArray()));
        }, e.prototype.contains = function (t) {
          return this.any(function (e) {
            return e === t;
          });
        }, e.prototype.count = function (t) {
          return t ? this.where(t).count() : this._elements.length;
        }, e.prototype.defaultIfEmpty = function (t) {
          return this.count() ? this : new e([t]);
        }, e.prototype.distinctBy = function (t) {
          var n = this.groupBy(t);
          return Object.keys(n).reduce(function (t, e) {
            return t.add(n[e][0]), t;
          }, new e());
        }, e.prototype.elementAt = function (t) {
          if (t < this.count() && t >= 0) return this._elements[t];
          throw new Error("ArgumentOutOfRangeException: index is less than 0 or greater than or equal to the number of elements in source.");
        }, e.prototype.elementAtOrDefault = function (t) {
          return t < this.count() && t >= 0 ? this._elements[t] : void 0;
        }, e.prototype.except = function (t) {
          return this.where(function (e) {
            return !t.contains(e);
          });
        }, e.prototype.first = function (t) {
          if (this.count()) return t ? this.where(t).first() : this._elements[0];
          throw new Error("InvalidOperationException: The source sequence is empty.");
        }, e.prototype.firstOrDefault = function (t) {
          return this.count(t) ? this.first(t) : void 0;
        }, e.prototype.forEach = function (t) {
          return this._elements.forEach(t);
        }, e.prototype.groupBy = function (t, e) {
          void 0 === e && (e = function (t) {
            return t;
          });
          return this.aggregate(function (n, i) {
            var r = t(i),
                o = n[r],
                s = e(i);
            return o ? o.push(s) : n[r] = [s], n;
          }, {});
        }, e.prototype.groupJoin = function (t, e, n, i) {
          return this.select(function (r) {
            return i(r, t.where(function (t) {
              return e(r) === n(t);
            }));
          });
        }, e.prototype.indexOf = function (t) {
          return this._elements.indexOf(t);
        }, e.prototype.insert = function (t, e) {
          if (t < 0 || t > this._elements.length) throw new Error("Index is out of range.");

          this._elements.splice(t, 0, e);
        }, e.prototype.intersect = function (t) {
          return this.where(function (e) {
            return t.contains(e);
          });
        }, e.prototype.join = function (t, e, n, i) {
          return this.selectMany(function (r) {
            return t.where(function (t) {
              return n(t) === e(r);
            }).select(function (t) {
              return i(r, t);
            });
          });
        }, e.prototype.last = function (t) {
          if (this.count()) return t ? this.where(t).last() : this._elements[this.count() - 1];
          throw Error("InvalidOperationException: The source sequence is empty.");
        }, e.prototype.lastOrDefault = function (t) {
          return this.count(t) ? this.last(t) : void 0;
        }, e.prototype.max = function (t) {
          return Math.max.apply(Math, __spread(this._elements.map(t || function (t) {
            return t;
          })));
        }, e.prototype.min = function (t) {
          return Math.min.apply(Math, __spread(this._elements.map(t || function (t) {
            return t;
          })));
        }, e.prototype.ofType = function (t) {
          var e;

          switch (t) {
            case Number:
              e = "number";
              break;

            case String:
              e = "string";
              break;

            case Boolean:
              e = typeof !0;
              break;

            case Function:
              e = "function";
              break;

            default:
              e = null;
          }

          return null === e ? this.where(function (e) {
            return e instanceof t;
          }).cast() : this.where(function (t) {
            return typeof t === e;
          }).cast();
        }, e.prototype.orderBy = function (e, i) {
          return void 0 === i && (i = t.keyComparer(e, !1)), new n(this._elements, i);
        }, e.prototype.orderByDescending = function (e, i) {
          return void 0 === i && (i = t.keyComparer(e, !0)), new n(this._elements, i);
        }, e.prototype.thenBy = function (t) {
          return this.orderBy(t);
        }, e.prototype.thenByDescending = function (t) {
          return this.orderByDescending(t);
        }, e.prototype.remove = function (t) {
          return -1 !== this.indexOf(t) && (this.removeAt(this.indexOf(t)), !0);
        }, e.prototype.removeAll = function (e) {
          return this.where(t.negate(e));
        }, e.prototype.removeAt = function (t) {
          this._elements.splice(t, 1);
        }, e.prototype.reverse = function () {
          return new e(this._elements.reverse());
        }, e.prototype.select = function (t) {
          return new e(this._elements.map(t));
        }, e.prototype.selectMany = function (t) {
          var n = this;
          return this.aggregate(function (e, i, r) {
            return e.addRange(n.select(t).elementAt(r).toArray()), e;
          }, new e());
        }, e.prototype.sequenceEqual = function (t) {
          return this.all(function (e) {
            return t.contains(e);
          });
        }, e.prototype.single = function (t) {
          if (1 !== this.count(t)) throw new Error("The collection does not contain exactly one element.");
          return this.first(t);
        }, e.prototype.singleOrDefault = function (t) {
          return this.count(t) ? this.single(t) : void 0;
        }, e.prototype.skip = function (t) {
          return new e(this._elements.slice(Math.max(0, t)));
        }, e.prototype.skipLast = function (t) {
          return new e(this._elements.slice(0, -Math.max(0, t)));
        }, e.prototype.skipWhile = function (t) {
          var e = this;
          return this.skip(this.aggregate(function (n) {
            return t(e.elementAt(n)) ? ++n : n;
          }, 0));
        }, e.prototype.sum = function (t) {
          return t ? this.select(t).sum() : this.aggregate(function (t, e) {
            return t + +e;
          }, 0);
        }, e.prototype.take = function (t) {
          return new e(this._elements.slice(0, Math.max(0, t)));
        }, e.prototype.takeLast = function (t) {
          return new e(this._elements.slice(-Math.max(0, t)));
        }, e.prototype.takeWhile = function (t) {
          var e = this;
          return this.take(this.aggregate(function (n) {
            return t(e.elementAt(n)) ? ++n : n;
          }, 0));
        }, e.prototype.toArray = function () {
          return this._elements;
        }, e.prototype.toDictionary = function (t, n) {
          var i = this;
          return this.aggregate(function (e, r, o) {
            return e[i.select(t).elementAt(o).toString()] = n ? i.select(n).elementAt(o) : r, e.add({
              Key: i.select(t).elementAt(o),
              Value: n ? i.select(n).elementAt(o) : r
            }), e;
          }, new e());
        }, e.prototype.toSet = function () {
          var t,
              e,
              n = new Set();

          try {
            for (var i = __values(this._elements), r = i.next(); !r.done; r = i.next()) {
              var o = r.value;
              n.add(o);
            }
          } catch (e) {
            t = {
              error: e
            };
          } finally {
            try {
              r && !r.done && (e = i.return) && e.call(i);
            } finally {
              if (t) throw t.error;
            }
          }

          return n;
        }, e.prototype.toList = function () {
          return this;
        }, e.prototype.toLookup = function (t, e) {
          return this.groupBy(t, e);
        }, e.prototype.where = function (t) {
          return new e(this._elements.filter(t));
        }, e.prototype.zip = function (t, e) {
          var n = this;
          return t.count() < this.count() ? t.select(function (t, i) {
            return e(n.elementAt(i), t);
          }) : this.select(function (n, i) {
            return e(n, t.elementAt(i));
          });
        }, e;
      }();

      t.List = e;

      var n = function (e) {
        function n(t, n) {
          var i = e.call(this, t) || this;
          return i._comparer = n, i._elements.sort(i._comparer), i;
        }

        return __extends(n, e), n.prototype.thenBy = function (e) {
          return new n(this._elements, t.composeComparers(this._comparer, t.keyComparer(e, !1)));
        }, n.prototype.thenByDescending = function (e) {
          return new n(this._elements, t.composeComparers(this._comparer, t.keyComparer(e, !0)));
        }, n;
      }(e);

      t.OrderedList = n;
    }(es || (es = {})), function (t) {
      var e = function () {
        return function () {
          this.position = t.Vector2.zero, this.begin = !1, this.segment = null, this.angle = 0;
        };
      }();

      t.EndPoint = e;

      var n = function () {
        function t() {}

        return t.prototype.compare = function (t, e) {
          return t.angle > e.angle ? 1 : t.angle < e.angle ? -1 : !t.begin && e.begin ? 1 : t.begin && !e.begin ? -1 : 0;
        }, t;
      }();

      t.EndPointComparer = n;
    }(es || (es = {})), function (t) {
      var e = function () {
        return function () {
          this.p1 = null, this.p2 = null;
        };
      }();

      t.Segment = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e(e, n) {
          this.lineCountForCircleApproximation = 10, this._radius = 0, this._origin = t.Vector2.zero, this._isSpotLight = !1, this._spotStartAngle = 0, this._spotEndAngle = 0, this._endPoints = [], this._segments = [], this._origin = e, this._radius = n, this._radialComparer = new t.EndPointComparer();
        }

        return e.prototype.addColliderOccluder = function (e) {
          if (e instanceof t.BoxCollider && 0 == e.rotation) this.addSquareOccluder(e.bounds);else if (e instanceof t.PolygonCollider) for (var n = e.shape, i = 0; i < n.points.length; i++) {
            var r = i - 1;
            0 == i && (r += n.points.length), this.addLineOccluder(t.Vector2.add(n.points[r], n.position), t.Vector2.add(n.points[i], n.position));
          } else e instanceof t.CircleCollider && this.addCircleOccluder(e.absolutePosition, e.radius);
        }, e.prototype.addCircleOccluder = function (e, n) {
          for (var i = e.sub(this._origin), r = Math.atan2(i.y, i.x), o = Math.PI / this.lineCountForCircleApproximation, s = r + t.MathHelper.PiOver2, a = t.MathHelper.angleToVector(s, n).addEqual(e), c = 1; c < this.lineCountForCircleApproximation; c++) {
            var h = t.MathHelper.angleToVector(s + c * o, n).addEqual(e);
            this.addLineOccluder(a, h), a = h;
          }
        }, e.prototype.addLineOccluder = function (t, e) {
          this.addSegment(t, e);
        }, e.prototype.addSquareOccluder = function (e) {
          var n = new t.Vector2(e.right, e.top),
              i = new t.Vector2(e.left, e.bottom),
              r = new t.Vector2(e.right, e.bottom);
          this.addSegment(e.location, n), this.addSegment(n, r), this.addSegment(r, i), this.addSegment(i, e.location);
        }, e.prototype.addSegment = function (e, n) {
          var i = new t.Segment(),
              r = new t.EndPoint(),
              o = new t.EndPoint();
          r.position = e, r.segment = i, o.position = n, o.segment = i, i.p1 = r, i.p2 = o, this._segments.push(i), this._endPoints.push(r), this._endPoints.push(o);
        }, e.prototype.clearOccluders = function () {
          this._segments.length = 0, this._endPoints.length = 0;
        }, e.prototype.begin = function (t, e) {
          this._origin = t, this._radius = e, this._isSpotLight = !1;
        }, e.prototype.end = function () {
          var n,
              i,
              r = t.ListPool.obtain(t.Vector2);
          this.updateSegments(), this._endPoints.sort(this._radialComparer.compare);

          for (var o = 0, s = 0; s < 2; s++) try {
            for (var a = __values(this._endPoints), c = a.next(); !c.done; c = a.next()) {
              var h = c.value,
                  u = 0 == e._openSegments.size() ? null : e._openSegments.getHead().element;

              if (h.begin) {
                for (var l = e._openSegments.getHead(); null != l && this.isSegmentInFrontOf(h.segment, l.element, this._origin);) l = l.next;

                null == l ? e._openSegments.push(h.segment) : e._openSegments.insert(h.segment, e._openSegments.indexOf(l.element));
              } else e._openSegments.remove(h.segment);

              var p = null;
              0 != e._openSegments.size() && (p = e._openSegments.getHead().element), u != p && (1 == s && (!this._isSpotLight || e.between(o, this._spotStartAngle, this._spotEndAngle) && e.between(h.angle, this._spotStartAngle, this._spotEndAngle)) && this.addTriangle(r, o, h.angle, u), o = h.angle);
            }
          } catch (t) {
            n = {
              error: t
            };
          } finally {
            try {
              c && !c.done && (i = a.return) && i.call(a);
            } finally {
              if (n) throw n.error;
            }
          }

          return e._openSegments.clear(), this.clearOccluders(), r;
        }, e.prototype.addTriangle = function (n, i, r, o) {
          var s = this._origin.clone(),
              a = new t.Vector2(this._origin.x + Math.cos(i), this._origin.y + Math.sin(i)),
              c = t.Vector2.zero,
              h = t.Vector2.zero;

          null != o ? (c.x = o.p1.position.x, c.y = o.p1.position.y, h.x = o.p2.position.x, h.y = o.p2.position.y) : (c.x = this._origin.x + Math.cos(i) * this._radius * 2, c.y = this._origin.y + Math.sin(i) * this._radius * 2, h.x = this._origin.x + Math.cos(r) * this._radius * 2, h.y = this._origin.y + Math.sin(r) * this._radius * 2);
          var u = e.lineLineIntersection(c, h, s, a);
          a.x = this._origin.x + Math.cos(r), a.y = this._origin.y + Math.sin(r);
          var l = e.lineLineIntersection(c, h, s, a);
          n.push(u), n.push(l);
        }, e.lineLineIntersection = function (e, n, i, r) {
          var o = ((r.x - i.x) * (e.y - i.y) - (r.y - i.y) * (e.x - i.x)) / ((r.y - i.y) * (n.x - e.x) - (r.x - i.x) * (n.y - e.y));
          return new t.Vector2(e.x + o * (n.x - e.x), e.y + o * (n.y - e.y));
        }, e.between = function (t, e, n) {
          return t = (360 + t % 360) % 360, (e = (36e5 + e) % 360) < (n = (36e5 + n) % 360) ? e <= t && t <= n : e <= t || t <= n;
        }, e.prototype.loadRectangleBoundaries = function () {
          this.addSegment(new t.Vector2(this._origin.x - this._radius, this._origin.y - this._radius), new t.Vector2(this._origin.x + this._radius, this._origin.y - this._radius)), this.addSegment(new t.Vector2(this._origin.x - this._radius, this._origin.y + this._radius), new t.Vector2(this._origin.x + this._radius, this._origin.y + this._radius)), this.addSegment(new t.Vector2(this._origin.x - this._radius, this._origin.y - this._radius), new t.Vector2(this._origin.x - this._radius, this._origin.y + this._radius)), this.addSegment(new t.Vector2(this._origin.x + this._radius, this._origin.y - this._radius), new t.Vector2(this._origin.x + this._radius, this._origin.y + this._radius));
        }, e.prototype.isSegmentInFrontOf = function (t, n, i) {
          var r = e.isLeftOf(t.p2.position, t.p1.position, e.interpolate(n.p1.position, n.p2.position, .01)),
              o = e.isLeftOf(t.p2.position, t.p1.position, e.interpolate(n.p2.position, n.p1.position, .01)),
              s = e.isLeftOf(t.p2.position, t.p1.position, i),
              a = e.isLeftOf(n.p2.position, n.p1.position, e.interpolate(t.p1.position, t.p2.position, .01)),
              c = e.isLeftOf(n.p2.position, n.p1.position, e.interpolate(t.p2.position, t.p1.position, .01)),
              h = e.isLeftOf(n.p2.position, n.p1.position, i);
          return a == c && c != h || r == o && o == s;
        }, e.interpolate = function (e, n, i) {
          return new t.Vector2(e.x * (1 - i) + n.x * i, e.y * (1 - i) + n.y * i);
        }, e.isLeftOf = function (t, e, n) {
          return (e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x) < 0;
        }, e.prototype.updateSegments = function () {
          var t, e;

          try {
            for (var n = __values(this._segments), i = n.next(); !i.done; i = n.next()) {
              var r = i.value;
              r.p1.angle = Math.atan2(r.p1.position.y - this._origin.y, r.p1.position.x - this._origin.x), r.p2.angle = Math.atan2(r.p2.position.y - this._origin.y, r.p2.position.x - this._origin.x);
              var o = r.p2.angle - r.p1.angle;
              o <= -Math.PI && (o += 2 * Math.PI), o > Math.PI && (o -= 2 * Math.PI), r.p1.begin = o > 0, r.p2.begin = !r.p1.begin;
            }
          } catch (e) {
            t = {
              error: e
            };
          } finally {
            try {
              i && !i.done && (e = n.return) && e.call(n);
            } finally {
              if (t) throw t.error;
            }
          }

          this._isSpotLight && (this._spotStartAngle = this._segments[0].p2.angle, this._spotEndAngle = this._segments[1].p2.angle);
        }, e._cornerCache = [], e._openSegments = new t.LinkedList(), e;
      }();

      t.VisibilityComputer = e;
    }(es || (es = {})), function (t) {
      var e = function () {
        function e() {
          this._timeInSeconds = 0, this._repeats = !1, this._isDone = !1, this._elapsedTime = 0;
        }

        return e.prototype.getContext = function () {
          return this.context;
        }, e.prototype.reset = function () {
          this._elapsedTime = 0;
        }, e.prototype.stop = function () {
          this._isDone = !0;
        }, e.prototype.tick = function () {
          return !this._isDone && this._elapsedTime > this._timeInSeconds && (this._elapsedTime -= this._timeInSeconds, this._onTime(this), this._isDone || this._repeats || (this._isDone = !0)), this._elapsedTime += t.Time.deltaTime, this._isDone;
        }, e.prototype.initialize = function (t, e, n, i) {
          this._timeInSeconds = t, this._repeats = e, this.context = n, this._onTime = i;
        }, e.prototype.unload = function () {
          this.context = null, this._onTime = null;
        }, e;
      }();

      t.Timer = e;
    }(es || (es = {})), function (t) {
      var e = function (e) {
        function n() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t._timers = [], t;
        }

        return __extends(n, e), n.prototype.update = function () {
          for (var e = this._timers.length - 1; e >= 0; e--) this._timers[e].tick() && (this._timers[e].unload(), new t.List(this._timers).removeAt(e));
        }, n.prototype.schedule = function (e, n, i, r) {
          var o = new t.Timer();
          return o.initialize(e, n, i, r), this._timers.push(o), o;
        }, n;
      }(t.GlobalManager);

      t.TimerManager = e;
    }(es || (es = {}));
  }).call(root);
})( // The environment-specific global.
function () {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  if (typeof this !== 'undefined') return this;
  return {};
}.call(this));