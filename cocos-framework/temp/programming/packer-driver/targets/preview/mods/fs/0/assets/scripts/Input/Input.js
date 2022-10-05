System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventMouse, EventTouch, SystemEvent, systemEvent, KeyboardUtils, ButtonState, MouseState, _crd, TouchState, Input;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfKeyboardUtils(extras) {
    _reporterNs.report("KeyboardUtils", "./KeyboardUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeys(extras) {
    _reporterNs.report("Keys", "./Keys", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonState(extras) {
    _reporterNs.report("ButtonState", "./MouseState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMouseState(extras) {
    _reporterNs.report("MouseState", "./MouseState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualInput(extras) {
    _reporterNs.report("VirtualInput", "./VirtualInput", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      EventMouse = _cc.EventMouse;
      EventTouch = _cc.EventTouch;
      SystemEvent = _cc.SystemEvent;
      systemEvent = _cc.systemEvent;
    }, function (_unresolved_2) {
      KeyboardUtils = _unresolved_2.KeyboardUtils;
    }, function (_unresolved_3) {
      ButtonState = _unresolved_3.ButtonState;
      MouseState = _unresolved_3.MouseState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2434dbU6vFHNKlkcnJuC7Su", "Input", undefined);

      _export("TouchState", TouchState = /*#__PURE__*/function () {
        function TouchState() {
          _defineProperty(this, "x", 0);

          _defineProperty(this, "y", 0);

          _defineProperty(this, "touchPoint", -1);

          _defineProperty(this, "touchDown", false);
        }

        var _proto = TouchState.prototype;

        _proto.reset = function reset() {
          this.x = 0;
          this.y = 0;
          this.touchDown = false;
          this.touchPoint = -1;
        };

        _createClass(TouchState, [{
          key: "position",
          get: function get() {
            return new es.Vector2(this.x, this.y);
          }
        }]);

        return TouchState;
      }());

      _export("Input", Input = /*#__PURE__*/function () {
        function Input() {}

        Input.initialize = function initialize() {
          if (this._init) return;
          this._init = true;
          systemEvent.on(SystemEvent.EventType.TOUCH_START, this.touchBegin, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.touchMove, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_END, this.touchEnd, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_CANCEL, this.touchEnd, this);
          systemEvent.on(SystemEvent.EventType.MOUSE_DOWN, this.mouseDown, this);
          systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.mouseUp, this);
          systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this.mouseMove, this);
          systemEvent.on(SystemEvent.EventType.MOUSE_LEAVE, this.mouseLeave, this);
          this.initTouchCache();
        };

        Input.update = function update() {
          (_crd && KeyboardUtils === void 0 ? (_reportPossibleCrUseOfKeyboardUtils({
            error: Error()
          }), KeyboardUtils) : KeyboardUtils).update();

          for (var i = 0; i < this._virtualInputs.length; i++) {
            this._virtualInputs[i].update();
          }

          this._previousMouseState = this._currentMouseState.clone();
        };

        Input.scaledPosition = function scaledPosition(position) {
          var scaledPos = new es.Vector2(position.x - this._resolutionOffset.x, position.y - this._resolutionOffset.y);
          return scaledPos.multiply(this.resolutionScale);
        }
        /**
         * 只有在当前帧按下并且在上一帧没有按下时才算press
         * @param key
         */
        ;

        Input.isKeyPressed = function isKeyPressed(key) {
          return new es.List((_crd && KeyboardUtils === void 0 ? (_reportPossibleCrUseOfKeyboardUtils({
            error: Error()
          }), KeyboardUtils) : KeyboardUtils).currentKeys).contains(key) && !new es.List((_crd && KeyboardUtils === void 0 ? (_reportPossibleCrUseOfKeyboardUtils({
            error: Error()
          }), KeyboardUtils) : KeyboardUtils).previousKeys).contains(key);
        };

        Input.isKeyPressedBoth = function isKeyPressedBoth(keyA, keyB) {
          return this.isKeyPressed(keyA) || this.isKeyPressed(keyB);
        };

        Input.isKeyDown = function isKeyDown(key) {
          return new es.List((_crd && KeyboardUtils === void 0 ? (_reportPossibleCrUseOfKeyboardUtils({
            error: Error()
          }), KeyboardUtils) : KeyboardUtils).currentKeys).contains(key);
        };

        Input.isKeyDownBoth = function isKeyDownBoth(keyA, keyB) {
          return this.isKeyDown(keyA) || this.isKeyDown(keyB);
        };

        Input.isKeyReleased = function isKeyReleased(key) {
          return !new es.List((_crd && KeyboardUtils === void 0 ? (_reportPossibleCrUseOfKeyboardUtils({
            error: Error()
          }), KeyboardUtils) : KeyboardUtils).currentKeys).contains(key) && new es.List((_crd && KeyboardUtils === void 0 ? (_reportPossibleCrUseOfKeyboardUtils({
            error: Error()
          }), KeyboardUtils) : KeyboardUtils).previousKeys).contains(key);
        };

        Input.isKeyReleasedBoth = function isKeyReleasedBoth(keyA, keyB) {
          return this.isKeyReleased(keyA) || this.isKeyReleased(keyB);
        };

        Input.initTouchCache = function initTouchCache() {
          this._totalTouchCount = 0;
          this._touchIndex = 0;
          this._gameTouchs.length = 0;

          for (var i = 0; i < this.maxSupportedTouch; i++) {
            this._gameTouchs.push(new TouchState());
          }
        };

        Input.touchBegin = function touchBegin(touch, event) {
          if (this._touchIndex < this.maxSupportedTouch) {
            this._gameTouchs[this._touchIndex].touchPoint = touch.getID();
            this._gameTouchs[this._touchIndex].touchDown = true;
            this._gameTouchs[this._touchIndex].x = touch.getLocationX();
            this._gameTouchs[this._touchIndex].y = touch.getLocationY();

            if (this._touchIndex == 0) {
              this.setpreviousTouchState(this._gameTouchs[0]);
            }

            this._touchIndex++;
            this._totalTouchCount++;
          }
        };

        Input.touchMove = function touchMove(touch, event) {
          if (touch.getID() == this._gameTouchs[0].touchPoint) {
            this.setpreviousTouchState(this._gameTouchs[0]);
          }

          var touchIndex = this._gameTouchs.findIndex(function (t) {
            return t.touchPoint == touch.getID();
          });

          if (touchIndex != -1) {
            var touchData = this._gameTouchs[touchIndex];
            touchData.x = touch.getLocationX();
            touchData.y = touch.getLocationY();
          }
        };

        Input.touchEnd = function touchEnd(touch, event) {
          var touchIndex = this._gameTouchs.findIndex(function (t) {
            return t.touchPoint == touch.getID();
          });

          if (touchIndex != -1) {
            var touchData = this._gameTouchs[touchIndex];
            touchData.reset();
            if (touchIndex == 0) this._previousTouchState.reset();
            this._totalTouchCount--;

            if (this.totalTouchCount == 0) {
              this._touchIndex = 0;
            }
          }
        };

        Input.mouseDown = function mouseDown(event) {
          if (event.getButton() == EventMouse.BUTTON_LEFT) {
            this._currentMouseState.leftButton = (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
              error: Error()
            }), ButtonState) : ButtonState).pressed;
          }

          if (event.getButton() == EventMouse.BUTTON_RIGHT) {
            this._currentMouseState.rightButton = (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
              error: Error()
            }), ButtonState) : ButtonState).pressed;
          }
        };

        Input.mouseUp = function mouseUp(event) {
          if (event.getButton() == EventMouse.BUTTON_LEFT) {
            this._currentMouseState.leftButton = (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
              error: Error()
            }), ButtonState) : ButtonState).released;
          }

          if (event.getButton() == EventMouse.BUTTON_RIGHT) {
            this._currentMouseState.rightButton = (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
              error: Error()
            }), ButtonState) : ButtonState).released;
          }
        };

        Input.mouseMove = function mouseMove(event) {
          this._mousePosition = new es.Vector2(event.getLocationX(), event.getLocationY());
        };

        Input.mouseLeave = function mouseLeave(event) {
          this._mousePosition = new es.Vector2(-1, -1);
          this._currentMouseState = new (_crd && MouseState === void 0 ? (_reportPossibleCrUseOfMouseState({
            error: Error()
          }), MouseState) : MouseState)();
        };

        Input.setpreviousTouchState = function setpreviousTouchState(touchState) {
          this._previousTouchState = new TouchState();
          this._previousTouchState.x = touchState.position.x;
          this._previousTouchState.y = touchState.position.y;
          this._previousTouchState.touchPoint = touchState.touchPoint;
          this._previousTouchState.touchDown = touchState.touchDown;
        };

        _createClass(Input, null, [{
          key: "gameTouchs",
          get:
          /**
           * 触摸列表 存放最大个数量触摸点信息
           * 可通过判断touchPoint是否为-1 来确定是否为有触摸
           * 通过判断touchDown 判断触摸点是否有按下
           */
          function get() {
            return this._gameTouchs;
          }
        }, {
          key: "resolutionScale",
          get:
          /** 获取缩放值 默认为1 */
          function get() {
            return this._resolutionScale;
          }
        }, {
          key: "totalTouchCount",
          get:
          /** 当前触摸点数量 */
          function get() {
            return this._totalTouchCount;
          }
          /** 返回第一个触摸点的坐标 */

        }, {
          key: "touchPosition",
          get: function get() {
            if (!this._gameTouchs[0]) return es.Vector2.zero;
            return this._gameTouchs[0].position;
          }
        }, {
          key: "mousePosition",
          get: function get() {
            return this._mousePosition;
          }
        }, {
          key: "maxSupportedTouch",
          get:
          /** 获取最大触摸数 */
          function get() {
            return EventTouch.MAX_TOUCHES;
          }
          /** 获取第一个触摸点距离上次距离的增量 */

        }, {
          key: "touchPositionDelta",
          get: function get() {
            var delta = this.touchPosition.sub(this._previousTouchState.position);

            if (delta.magnitude() > 0) {
              this.setpreviousTouchState(this._gameTouchs[0]);
            }

            return delta;
          }
        }, {
          key: "leftMouseButtonPressed",
          get: function get() {
            return this._currentMouseState.leftButton == (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
              error: Error()
            }), ButtonState) : ButtonState).pressed && this._previousMouseState.leftButton == (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
              error: Error()
            }), ButtonState) : ButtonState).released;
          }
        }, {
          key: "rightMouseButtonPressed",
          get: function get() {
            return this._currentMouseState.rightButton == (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
              error: Error()
            }), ButtonState) : ButtonState).pressed && this._previousMouseState.rightButton == (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
              error: Error()
            }), ButtonState) : ButtonState).released;
          }
        }, {
          key: "leftMouseButtonDown",
          get: function get() {
            return this._currentMouseState.leftButton == (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
              error: Error()
            }), ButtonState) : ButtonState).pressed;
          }
        }, {
          key: "leftMouseButtonRelease",
          get: function get() {
            return this._currentMouseState.leftButton == (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
              error: Error()
            }), ButtonState) : ButtonState).released;
          }
        }, {
          key: "rightMouseButtonDown",
          get: function get() {
            return this._currentMouseState.rightButton == (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
              error: Error()
            }), ButtonState) : ButtonState).pressed;
          }
        }, {
          key: "rightMouseButtonRelease",
          get: function get() {
            return this._currentMouseState.rightButton == (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
              error: Error()
            }), ButtonState) : ButtonState).released;
          }
        }]);

        return Input;
      }());

      _defineProperty(Input, "_init", false);

      _defineProperty(Input, "_previousTouchState", new TouchState());

      _defineProperty(Input, "_resolutionOffset", es.Vector2.zero);

      _defineProperty(Input, "_touchIndex", 0);

      _defineProperty(Input, "_gameTouchs", []);

      _defineProperty(Input, "_mousePosition", new es.Vector2(-1, -1));

      _defineProperty(Input, "_resolutionScale", es.Vector2.one);

      _defineProperty(Input, "_totalTouchCount", 0);

      _defineProperty(Input, "_virtualInputs", []);

      _defineProperty(Input, "_previousMouseState", new (_crd && MouseState === void 0 ? (_reportPossibleCrUseOfMouseState({
        error: Error()
      }), MouseState) : MouseState)());

      _defineProperty(Input, "_currentMouseState", new (_crd && MouseState === void 0 ? (_reportPossibleCrUseOfMouseState({
        error: Error()
      }), MouseState) : MouseState)());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Input.js.map