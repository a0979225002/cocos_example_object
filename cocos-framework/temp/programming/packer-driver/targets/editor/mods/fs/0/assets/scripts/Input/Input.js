System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventMouse, EventTouch, SystemEvent, systemEvent, KeyboardUtils, ButtonState, MouseState, TouchState, Input, _crd;

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

  _export({
    TouchState: void 0,
    Input: void 0
  });

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

      _export("TouchState", TouchState = class TouchState {
        constructor() {
          _defineProperty(this, "x", 0);

          _defineProperty(this, "y", 0);

          _defineProperty(this, "touchPoint", -1);

          _defineProperty(this, "touchDown", false);
        }

        get position() {
          return new es.Vector2(this.x, this.y);
        }

        reset() {
          this.x = 0;
          this.y = 0;
          this.touchDown = false;
          this.touchPoint = -1;
        }

      });

      _export("Input", Input = class Input {
        /**
         * 触摸列表 存放最大个数量触摸点信息
         * 可通过判断touchPoint是否为-1 来确定是否为有触摸
         * 通过判断touchDown 判断触摸点是否有按下
         */
        static get gameTouchs() {
          return this._gameTouchs;
        }

        /** 获取缩放值 默认为1 */
        static get resolutionScale() {
          return this._resolutionScale;
        }

        /** 当前触摸点数量 */
        static get totalTouchCount() {
          return this._totalTouchCount;
        }
        /** 返回第一个触摸点的坐标 */


        static get touchPosition() {
          if (!this._gameTouchs[0]) return es.Vector2.zero;
          return this._gameTouchs[0].position;
        }

        static get mousePosition() {
          return this._mousePosition;
        }

        /** 获取最大触摸数 */
        static get maxSupportedTouch() {
          return EventTouch.MAX_TOUCHES;
        }
        /** 获取第一个触摸点距离上次距离的增量 */


        static get touchPositionDelta() {
          let delta = this.touchPosition.sub(this._previousTouchState.position);

          if (delta.magnitude() > 0) {
            this.setpreviousTouchState(this._gameTouchs[0]);
          }

          return delta;
        }

        static initialize() {
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
        }

        static update() {
          (_crd && KeyboardUtils === void 0 ? (_reportPossibleCrUseOfKeyboardUtils({
            error: Error()
          }), KeyboardUtils) : KeyboardUtils).update();

          for (let i = 0; i < this._virtualInputs.length; i++) this._virtualInputs[i].update();

          this._previousMouseState = this._currentMouseState.clone();
        }

        static scaledPosition(position) {
          let scaledPos = new es.Vector2(position.x - this._resolutionOffset.x, position.y - this._resolutionOffset.y);
          return scaledPos.multiply(this.resolutionScale);
        }
        /**
         * 只有在当前帧按下并且在上一帧没有按下时才算press
         * @param key
         */


        static isKeyPressed(key) {
          return new es.List((_crd && KeyboardUtils === void 0 ? (_reportPossibleCrUseOfKeyboardUtils({
            error: Error()
          }), KeyboardUtils) : KeyboardUtils).currentKeys).contains(key) && !new es.List((_crd && KeyboardUtils === void 0 ? (_reportPossibleCrUseOfKeyboardUtils({
            error: Error()
          }), KeyboardUtils) : KeyboardUtils).previousKeys).contains(key);
        }

        static isKeyPressedBoth(keyA, keyB) {
          return this.isKeyPressed(keyA) || this.isKeyPressed(keyB);
        }

        static isKeyDown(key) {
          return new es.List((_crd && KeyboardUtils === void 0 ? (_reportPossibleCrUseOfKeyboardUtils({
            error: Error()
          }), KeyboardUtils) : KeyboardUtils).currentKeys).contains(key);
        }

        static isKeyDownBoth(keyA, keyB) {
          return this.isKeyDown(keyA) || this.isKeyDown(keyB);
        }

        static isKeyReleased(key) {
          return !new es.List((_crd && KeyboardUtils === void 0 ? (_reportPossibleCrUseOfKeyboardUtils({
            error: Error()
          }), KeyboardUtils) : KeyboardUtils).currentKeys).contains(key) && new es.List((_crd && KeyboardUtils === void 0 ? (_reportPossibleCrUseOfKeyboardUtils({
            error: Error()
          }), KeyboardUtils) : KeyboardUtils).previousKeys).contains(key);
        }

        static isKeyReleasedBoth(keyA, keyB) {
          return this.isKeyReleased(keyA) || this.isKeyReleased(keyB);
        }

        static get leftMouseButtonPressed() {
          return this._currentMouseState.leftButton == (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
            error: Error()
          }), ButtonState) : ButtonState).pressed && this._previousMouseState.leftButton == (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
            error: Error()
          }), ButtonState) : ButtonState).released;
        }

        static get rightMouseButtonPressed() {
          return this._currentMouseState.rightButton == (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
            error: Error()
          }), ButtonState) : ButtonState).pressed && this._previousMouseState.rightButton == (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
            error: Error()
          }), ButtonState) : ButtonState).released;
        }

        static get leftMouseButtonDown() {
          return this._currentMouseState.leftButton == (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
            error: Error()
          }), ButtonState) : ButtonState).pressed;
        }

        static get leftMouseButtonRelease() {
          return this._currentMouseState.leftButton == (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
            error: Error()
          }), ButtonState) : ButtonState).released;
        }

        static get rightMouseButtonDown() {
          return this._currentMouseState.rightButton == (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
            error: Error()
          }), ButtonState) : ButtonState).pressed;
        }

        static get rightMouseButtonRelease() {
          return this._currentMouseState.rightButton == (_crd && ButtonState === void 0 ? (_reportPossibleCrUseOfButtonState({
            error: Error()
          }), ButtonState) : ButtonState).released;
        }

        static initTouchCache() {
          this._totalTouchCount = 0;
          this._touchIndex = 0;
          this._gameTouchs.length = 0;

          for (let i = 0; i < this.maxSupportedTouch; i++) {
            this._gameTouchs.push(new TouchState());
          }
        }

        static touchBegin(touch, event) {
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
        }

        static touchMove(touch, event) {
          if (touch.getID() == this._gameTouchs[0].touchPoint) {
            this.setpreviousTouchState(this._gameTouchs[0]);
          }

          let touchIndex = this._gameTouchs.findIndex(t => t.touchPoint == touch.getID());

          if (touchIndex != -1) {
            let touchData = this._gameTouchs[touchIndex];
            touchData.x = touch.getLocationX();
            touchData.y = touch.getLocationY();
          }
        }

        static touchEnd(touch, event) {
          let touchIndex = this._gameTouchs.findIndex(t => t.touchPoint == touch.getID());

          if (touchIndex != -1) {
            let touchData = this._gameTouchs[touchIndex];
            touchData.reset();
            if (touchIndex == 0) this._previousTouchState.reset();
            this._totalTouchCount--;

            if (this.totalTouchCount == 0) {
              this._touchIndex = 0;
            }
          }
        }

        static mouseDown(event) {
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
        }

        static mouseUp(event) {
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
        }

        static mouseMove(event) {
          this._mousePosition = new es.Vector2(event.getLocationX(), event.getLocationY());
        }

        static mouseLeave(event) {
          this._mousePosition = new es.Vector2(-1, -1);
          this._currentMouseState = new (_crd && MouseState === void 0 ? (_reportPossibleCrUseOfMouseState({
            error: Error()
          }), MouseState) : MouseState)();
        }

        static setpreviousTouchState(touchState) {
          this._previousTouchState = new TouchState();
          this._previousTouchState.x = touchState.position.x;
          this._previousTouchState.y = touchState.position.y;
          this._previousTouchState.touchPoint = touchState.touchPoint;
          this._previousTouchState.touchDown = touchState.touchDown;
        }

      });

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