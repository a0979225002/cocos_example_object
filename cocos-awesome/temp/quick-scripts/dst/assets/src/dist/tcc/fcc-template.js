
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/dist/tcc/fcc-template.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c87a2kBUCBLkaFR6P7PQOjT', 'fcc-template');
// src/dist/tcc/fcc-template.js

"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var fcc = globalThis.fcc;

function _defineProperty(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = i, t;
}

var OverrideComponent = /*#__PURE__*/function (_cc$Component) {
  _inheritsLoose(OverrideComponent, _cc$Component);

  function OverrideComponent() {
    var _this;

    _this = _cc$Component.call(this) || this, _defineProperty(_assertThisInitialized(_this), "scheduleTag", void 0), _this.scheduleTag = new Array();
    return _this;
  }

  var _proto = OverrideComponent.prototype;

  _proto.getScheduleTag = function getScheduleTag() {
    return this.scheduleTag;
  };

  _proto.getScheduleAmount = function getScheduleAmount() {
    return this.scheduleTag.length;
  };

  _proto.schedule = function schedule(t, e, i, n) {
    _cc$Component.prototype.schedule.call(this, this.checkScheduleRepeat(t, i), e, i, n), this.scheduleTag.push(t);
  };

  _proto.checkScheduleRepeat = function checkScheduleRepeat(t, e) {
    var _this2 = this;

    return 0 < e ? (t.prototype = function () {
      --e < 0 && _this2.unschedule(t), t.apply(_this2);
    }, t.prototype) : t;
  };

  _proto.scheduleOnce = function scheduleOnce(t, e) {
    var _this3 = this;

    t.prototype = function () {
      _this3.unschedule(t.prototype), t.apply(_this3);
    }, this.schedule(t.prototype, 0, 0, e);
  };

  _proto.unschedule = function unschedule(t) {
    _cc$Component.prototype.unschedule.call(this, this.checkScheduleTag(t));

    t = this.checkScheduleCallFunIndex(t);
    -1 < t && this.scheduleTag.splice(t, 1);
  };

  _proto.checkScheduleCallFunIndex = function checkScheduleCallFunIndex(t) {
    var e;
    if (-1 != this.getScheduleTag().indexOf(t)) e = this.scheduleTag.indexOf(t);else {
      if (-1 == this.getScheduleTag().indexOf(t.prototype)) return -1;
      e = this.scheduleTag.indexOf(t.prototype);
    }
    return e;
  };

  _proto.checkScheduleTag = function checkScheduleTag(t) {
    var e = void 0,
        t = this.checkScheduleCallFunIndex(t);
    return e = -1 < t ? this.scheduleTag[t] : e;
  };

  _proto.unscheduleAllCallbacks = function unscheduleAllCallbacks() {
    _cc$Component.prototype.unscheduleAllCallbacks.call(this), this.scheduleTag.length = 0;
  };

  return OverrideComponent;
}(cc.Component);

var AGenericTemplate = /*#__PURE__*/function (_OverrideComponent) {
  _inheritsLoose(AGenericTemplate, _OverrideComponent);

  function AGenericTemplate() {
    return _OverrideComponent.apply(this, arguments) || this;
  }

  var _proto2 = AGenericTemplate.prototype;

  _proto2.languageSetting = function languageSetting() {};

  _proto2.onLoad = function onLoad() {
    this.onCreate();
  };

  _proto2.start = function start() {
    this.languageSetting();
  };

  return AGenericTemplate;
}(OverrideComponent);

var ACenterTemplate = /*#__PURE__*/function (_AGenericTemplate) {
  _inheritsLoose(ACenterTemplate, _AGenericTemplate);

  function ACenterTemplate() {
    return _AGenericTemplate.apply(this, arguments) || this;
  }

  var _proto3 = ACenterTemplate.prototype;

  _proto3.onLoad = function onLoad() {
    this.initClient(), this.configSetting(), this.audioSetting(), this.processCreate(), this.notificationSetting(), _AGenericTemplate.prototype.onLoad.call(this);
  };

  return ACenterTemplate;
}(AGenericTemplate);

function _createForOfIteratorHelper(t, e) {
  var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

  if (!i) {
    if (Array.isArray(t) || (i = _unsupportedIterableToArray(t)) || e && t && "number" == typeof t.length) {
      i && (t = i);

      var _n = 0,
          e = function e() {};

      return {
        s: e,
        n: function n() {
          return _n >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[_n++]
          };
        },
        e: function e(t) {
          throw t;
        },
        f: e
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var r,
      o = !0,
      s = !1;
  return {
    s: function s() {
      i = i.call(t);
    },
    n: function n() {
      var t = i.next();
      return o = t.done, t;
    },
    e: function e(t) {
      s = !0, r = t;
    },
    f: function f() {
      try {
        o || null == i["return"] || i["return"]();
      } finally {
        if (s) throw r;
      }
    }
  };
}

function _unsupportedIterableToArray(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray(t, e);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    return "Map" === (i = "Object" === i && t.constructor ? t.constructor.name : i) || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray(t, e) : void 0;
  }
}

function _arrayLikeToArray(t, e) {
  (null == e || e > t.length) && (e = t.length);

  for (var i = 0, n = new Array(e); i < e; i++) {
    n[i] = t[i];
  }

  return n;
}

var AutoStateChangeNotification = /*#__PURE__*/function (_fcc$ABS$ABaseNotific) {
  _inheritsLoose(AutoStateChangeNotification, _fcc$ABS$ABaseNotific);

  function AutoStateChangeNotification() {
    var _this4;

    _this4 = _fcc$ABS$ABaseNotific.call(this) || this, _defineProperty(_assertThisInitialized(_this4), "TAG_NAME", void 0), _this4.TAG_NAME = fcc.type.NotificationType.AUTO_CHANGE;
    return _this4;
  }

  var _proto4 = AutoStateChangeNotification.prototype;

  _proto4.subscribe = function subscribe(t, e) {
    _fcc$ABS$ABaseNotific.prototype.subscribe.call(this, t, e);
  };

  _proto4.notify = function notify(t, e, i) {
    if (0 < this.observer.size) {
      var n,
          r = _createForOfIteratorHelper(this.observer);

      try {
        for (r.s(); !(n = r.n()).done;) {
          var o = n.value;
          o.pushNotification(t, e, i), o.isPermanent || this.unsubscribe(o);
        }
      } catch (t) {
        r.e(t);
      } finally {
        r.f();
      }
    }
  };

  return AutoStateChangeNotification;
}(fcc.ABS.ABaseNotification);

function _createForOfIteratorHelper$1(t, e) {
  var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

  if (!i) {
    if (Array.isArray(t) || (i = _unsupportedIterableToArray$1(t)) || e && t && "number" == typeof t.length) {
      i && (t = i);

      var _n2 = 0,
          e = function e() {};

      return {
        s: e,
        n: function n() {
          return _n2 >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[_n2++]
          };
        },
        e: function e(t) {
          throw t;
        },
        f: e
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var r,
      o = !0,
      s = !1;
  return {
    s: function s() {
      i = i.call(t);
    },
    n: function n() {
      var t = i.next();
      return o = t.done, t;
    },
    e: function e(t) {
      s = !0, r = t;
    },
    f: function f() {
      try {
        o || null == i["return"] || i["return"]();
      } finally {
        if (s) throw r;
      }
    }
  };
}

function _unsupportedIterableToArray$1(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray$1(t, e);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    return "Map" === (i = "Object" === i && t.constructor ? t.constructor.name : i) || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray$1(t, e) : void 0;
  }
}

function _arrayLikeToArray$1(t, e) {
  (null == e || e > t.length) && (e = t.length);

  for (var i = 0, n = new Array(e); i < e; i++) {
    n[i] = t[i];
  }

  return n;
}

var ScrollFocusStateNotification = /*#__PURE__*/function (_fcc$ABS$ABaseNotific2) {
  _inheritsLoose(ScrollFocusStateNotification, _fcc$ABS$ABaseNotific2);

  function ScrollFocusStateNotification() {
    var _this5;

    _this5 = _fcc$ABS$ABaseNotific2.call(this) || this, _defineProperty(_assertThisInitialized(_this5), "TAG_NAME", void 0), _this5.TAG_NAME = fcc.type.NotificationType.SCROLL_FOCUS_STATE;
    return _this5;
  }

  var _proto5 = ScrollFocusStateNotification.prototype;

  _proto5.subscribe = function subscribe(t, e) {
    _fcc$ABS$ABaseNotific2.prototype.subscribe.call(this, t, e);
  };

  _proto5.notify = function notify(t, e) {
    if (0 < this.observer.size) {
      var i,
          n = _createForOfIteratorHelper$1(this.observer);

      try {
        for (n.s(); !(i = n.n()).done;) {
          var r = i.value;
          r.pushNotification(t, e), r.isPermanent || this.unsubscribe(r);
        }
      } catch (t) {
        n.e(t);
      } finally {
        n.f();
      }
    }
  };

  return ScrollFocusStateNotification;
}(fcc.ABS.ABaseNotification);

function _createForOfIteratorHelper$2(t, e) {
  var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

  if (!i) {
    if (Array.isArray(t) || (i = _unsupportedIterableToArray$2(t)) || e && t && "number" == typeof t.length) {
      i && (t = i);

      var _n3 = 0,
          e = function e() {};

      return {
        s: e,
        n: function n() {
          return _n3 >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[_n3++]
          };
        },
        e: function e(t) {
          throw t;
        },
        f: e
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var r,
      o = !0,
      s = !1;
  return {
    s: function s() {
      i = i.call(t);
    },
    n: function n() {
      var t = i.next();
      return o = t.done, t;
    },
    e: function e(t) {
      s = !0, r = t;
    },
    f: function f() {
      try {
        o || null == i["return"] || i["return"]();
      } finally {
        if (s) throw r;
      }
    }
  };
}

function _unsupportedIterableToArray$2(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray$2(t, e);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    return "Map" === (i = "Object" === i && t.constructor ? t.constructor.name : i) || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray$2(t, e) : void 0;
  }
}

function _arrayLikeToArray$2(t, e) {
  (null == e || e > t.length) && (e = t.length);

  for (var i = 0, n = new Array(e); i < e; i++) {
    n[i] = t[i];
  }

  return n;
}

var SpeedStateChangeNotification = /*#__PURE__*/function (_fcc$ABS$ABaseNotific3) {
  _inheritsLoose(SpeedStateChangeNotification, _fcc$ABS$ABaseNotific3);

  function SpeedStateChangeNotification() {
    var _this6;

    _this6 = _fcc$ABS$ABaseNotific3.call(this) || this, _defineProperty(_assertThisInitialized(_this6), "TAG_NAME", void 0), _this6.TAG_NAME = fcc.type.NotificationType.SPEED_CHANGE;
    return _this6;
  }

  var _proto6 = SpeedStateChangeNotification.prototype;

  _proto6.subscribe = function subscribe(t, e) {
    _fcc$ABS$ABaseNotific3.prototype.subscribe.call(this, t, e);
  };

  _proto6.notify = function notify(t) {
    if (0 < this.observer.size) {
      var e,
          i = _createForOfIteratorHelper$2(this.observer);

      try {
        for (i.s(); !(e = i.n()).done;) {
          var n = e.value;
          n.pushNotification(t), n.isPermanent || this.unsubscribe(n);
        }
      } catch (t) {
        i.e(t);
      } finally {
        i.f();
      }
    }
  };

  return SpeedStateChangeNotification;
}(fcc.ABS.ABaseNotification);

function _createForOfIteratorHelper$3(t, e) {
  var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

  if (!i) {
    if (Array.isArray(t) || (i = _unsupportedIterableToArray$3(t)) || e && t && "number" == typeof t.length) {
      i && (t = i);

      var _n4 = 0,
          e = function e() {};

      return {
        s: e,
        n: function n() {
          return _n4 >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[_n4++]
          };
        },
        e: function e(t) {
          throw t;
        },
        f: e
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var r,
      o = !0,
      s = !1;
  return {
    s: function s() {
      i = i.call(t);
    },
    n: function n() {
      var t = i.next();
      return o = t.done, t;
    },
    e: function e(t) {
      s = !0, r = t;
    },
    f: function f() {
      try {
        o || null == i["return"] || i["return"]();
      } finally {
        if (s) throw r;
      }
    }
  };
}

function _unsupportedIterableToArray$3(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray$3(t, e);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    return "Map" === (i = "Object" === i && t.constructor ? t.constructor.name : i) || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray$3(t, e) : void 0;
  }
}

function _arrayLikeToArray$3(t, e) {
  (null == e || e > t.length) && (e = t.length);

  for (var i = 0, n = new Array(e); i < e; i++) {
    n[i] = t[i];
  }

  return n;
}

var StopNowStateNotification = /*#__PURE__*/function (_fcc$ABS$ABaseNotific4) {
  _inheritsLoose(StopNowStateNotification, _fcc$ABS$ABaseNotific4);

  function StopNowStateNotification() {
    var _this7;

    _this7 = _fcc$ABS$ABaseNotific4.call(this) || this, _defineProperty(_assertThisInitialized(_this7), "TAG_NAME", void 0), _this7.TAG_NAME = fcc.type.NotificationType.STOP_NOW;
    return _this7;
  }

  var _proto7 = StopNowStateNotification.prototype;

  _proto7.subscribe = function subscribe(t, e) {
    _fcc$ABS$ABaseNotific4.prototype.subscribe.call(this, t, e);
  };

  _proto7.notify = function notify() {
    if (0 < this.observer.size) {
      var t,
          e = _createForOfIteratorHelper$3(this.observer);

      try {
        for (e.s(); !(t = e.n()).done;) {
          var i = t.value;
          i.pushNotification(), i.isPermanent || this.unsubscribe(i);
        }
      } catch (t) {
        e.e(t);
      } finally {
        e.f();
      }
    }
  };

  return StopNowStateNotification;
}(fcc.ABS.ABaseNotification);

function _createForOfIteratorHelper$4(t, e) {
  var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

  if (!i) {
    if (Array.isArray(t) || (i = _unsupportedIterableToArray$4(t)) || e && t && "number" == typeof t.length) {
      i && (t = i);

      var _n5 = 0,
          e = function e() {};

      return {
        s: e,
        n: function n() {
          return _n5 >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[_n5++]
          };
        },
        e: function e(t) {
          throw t;
        },
        f: e
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var r,
      o = !0,
      s = !1;
  return {
    s: function s() {
      i = i.call(t);
    },
    n: function n() {
      var t = i.next();
      return o = t.done, t;
    },
    e: function e(t) {
      s = !0, r = t;
    },
    f: function f() {
      try {
        o || null == i["return"] || i["return"]();
      } finally {
        if (s) throw r;
      }
    }
  };
}

function _unsupportedIterableToArray$4(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray$4(t, e);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    return "Map" === (i = "Object" === i && t.constructor ? t.constructor.name : i) || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray$4(t, e) : void 0;
  }
}

function _arrayLikeToArray$4(t, e) {
  (null == e || e > t.length) && (e = t.length);

  for (var i = 0, n = new Array(e); i < e; i++) {
    n[i] = t[i];
  }

  return n;
}

var UserMoneyChangeNotification = /*#__PURE__*/function (_fcc$ABS$ABaseNotific5) {
  _inheritsLoose(UserMoneyChangeNotification, _fcc$ABS$ABaseNotific5);

  function UserMoneyChangeNotification() {
    var _this8;

    _this8 = _fcc$ABS$ABaseNotific5.call(this) || this, _defineProperty(_assertThisInitialized(_this8), "TAG_NAME", void 0), _this8.TAG_NAME = fcc.type.NotificationType.USER_MONEY_CHANGE;
    return _this8;
  }

  var _proto8 = UserMoneyChangeNotification.prototype;

  _proto8.subscribe = function subscribe(t, e) {
    _fcc$ABS$ABaseNotific5.prototype.subscribe.call(this, t, e);
  };

  _proto8.notify = function notify(t) {
    if (0 < this.observer.size) {
      var e,
          i = _createForOfIteratorHelper$4(this.observer);

      try {
        for (i.s(); !(e = i.n()).done;) {
          var n = e.value;
          n.pushNotification(t), n.isPermanent || this.unsubscribe(n);
        }
      } catch (t) {
        i.e(t);
      } finally {
        i.f();
      }
    }
  };

  return UserMoneyChangeNotification;
}(fcc.ABS.ABaseNotification);

function _createForOfIteratorHelper$5(t, e) {
  var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

  if (!i) {
    if (Array.isArray(t) || (i = _unsupportedIterableToArray$5(t)) || e && t && "number" == typeof t.length) {
      i && (t = i);

      var _n6 = 0,
          e = function e() {};

      return {
        s: e,
        n: function n() {
          return _n6 >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[_n6++]
          };
        },
        e: function e(t) {
          throw t;
        },
        f: e
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var r,
      o = !0,
      s = !1;
  return {
    s: function s() {
      i = i.call(t);
    },
    n: function n() {
      var t = i.next();
      return o = t.done, t;
    },
    e: function e(t) {
      s = !0, r = t;
    },
    f: function f() {
      try {
        o || null == i["return"] || i["return"]();
      } finally {
        if (s) throw r;
      }
    }
  };
}

function _unsupportedIterableToArray$5(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray$5(t, e);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    return "Map" === (i = "Object" === i && t.constructor ? t.constructor.name : i) || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray$5(t, e) : void 0;
  }
}

function _arrayLikeToArray$5(t, e) {
  (null == e || e > t.length) && (e = t.length);

  for (var i = 0, n = new Array(e); i < e; i++) {
    n[i] = t[i];
  }

  return n;
}

var UserTotalBetChangeNotification = /*#__PURE__*/function (_fcc$ABS$ABaseNotific6) {
  _inheritsLoose(UserTotalBetChangeNotification, _fcc$ABS$ABaseNotific6);

  function UserTotalBetChangeNotification() {
    var _this9;

    _this9 = _fcc$ABS$ABaseNotific6.call(this) || this, _defineProperty(_assertThisInitialized(_this9), "TAG_NAME", void 0), _this9.TAG_NAME = fcc.type.NotificationType.USER_BET_CHANGE;
    return _this9;
  }

  var _proto9 = UserTotalBetChangeNotification.prototype;

  _proto9.subscribe = function subscribe(t, e) {
    _fcc$ABS$ABaseNotific6.prototype.subscribe.call(this, t, e);
  };

  _proto9.notify = function notify(t, e) {
    if (0 < this.observer.size) {
      var i,
          n = _createForOfIteratorHelper$5(this.observer);

      try {
        for (n.s(); !(i = n.n()).done;) {
          var r = i.value;
          r.pushNotification(t, e), r.isPermanent || this.unsubscribe(r);
        }
      } catch (t) {
        n.e(t);
      } finally {
        n.f();
      }
    }
  };

  return UserTotalBetChangeNotification;
}(fcc.ABS.ABaseNotification);

function _createForOfIteratorHelper$6(t, e) {
  var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

  if (!i) {
    if (Array.isArray(t) || (i = _unsupportedIterableToArray$6(t)) || e && t && "number" == typeof t.length) {
      i && (t = i);

      var _n7 = 0,
          e = function e() {};

      return {
        s: e,
        n: function n() {
          return _n7 >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[_n7++]
          };
        },
        e: function e(t) {
          throw t;
        },
        f: e
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var r,
      o = !0,
      s = !1;
  return {
    s: function s() {
      i = i.call(t);
    },
    n: function n() {
      var t = i.next();
      return o = t.done, t;
    },
    e: function e(t) {
      s = !0, r = t;
    },
    f: function f() {
      try {
        o || null == i["return"] || i["return"]();
      } finally {
        if (s) throw r;
      }
    }
  };
}

function _unsupportedIterableToArray$6(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray$6(t, e);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    return "Map" === (i = "Object" === i && t.constructor ? t.constructor.name : i) || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray$6(t, e) : void 0;
  }
}

function _arrayLikeToArray$6(t, e) {
  (null == e || e > t.length) && (e = t.length);

  for (var i = 0, n = new Array(e); i < e; i++) {
    n[i] = t[i];
  }

  return n;
}

var UserWinPointStateNotification = /*#__PURE__*/function (_fcc$ABS$ABaseNotific7) {
  _inheritsLoose(UserWinPointStateNotification, _fcc$ABS$ABaseNotific7);

  function UserWinPointStateNotification() {
    var _this10;

    _this10 = _fcc$ABS$ABaseNotific7.call(this) || this, _defineProperty(_assertThisInitialized(_this10), "TAG_NAME", void 0), _this10.TAG_NAME = fcc.type.NotificationType.USER_GET_WIN;
    return _this10;
  }

  var _proto10 = UserWinPointStateNotification.prototype;

  _proto10.subscribe = function subscribe(t, e) {
    _fcc$ABS$ABaseNotific7.prototype.subscribe.call(this, t, e);
  };

  _proto10.notify = function notify(t, e) {
    if (0 < this.observer.size) {
      var i,
          n = _createForOfIteratorHelper$6(this.observer);

      try {
        for (n.s(); !(i = n.n()).done;) {
          var r = i.value;
          r.pushNotification(t, e), r.isPermanent || this.unsubscribe(r);
        }
      } catch (t) {
        n.e(t);
      } finally {
        n.f();
      }
    }
  };

  return UserWinPointStateNotification;
}(fcc.ABS.ABaseNotification);

function _createForOfIteratorHelper$7(t, e) {
  var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

  if (!i) {
    if (Array.isArray(t) || (i = _unsupportedIterableToArray$7(t)) || e && t && "number" == typeof t.length) {
      i && (t = i);

      var _n8 = 0,
          e = function e() {};

      return {
        s: e,
        n: function n() {
          return _n8 >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[_n8++]
          };
        },
        e: function e(t) {
          throw t;
        },
        f: e
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var r,
      o = !0,
      s = !1;
  return {
    s: function s() {
      i = i.call(t);
    },
    n: function n() {
      var t = i.next();
      return o = t.done, t;
    },
    e: function e(t) {
      s = !0, r = t;
    },
    f: function f() {
      try {
        o || null == i["return"] || i["return"]();
      } finally {
        if (s) throw r;
      }
    }
  };
}

function _unsupportedIterableToArray$7(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray$7(t, e);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    return "Map" === (i = "Object" === i && t.constructor ? t.constructor.name : i) || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray$7(t, e) : void 0;
  }
}

function _arrayLikeToArray$7(t, e) {
  (null == e || e > t.length) && (e = t.length);

  for (var i = 0, n = new Array(e); i < e; i++) {
    n[i] = t[i];
  }

  return n;
}

var ResponseResultNotification = /*#__PURE__*/function (_fcc$ABS$ABaseNotific8) {
  _inheritsLoose(ResponseResultNotification, _fcc$ABS$ABaseNotific8);

  function ResponseResultNotification() {
    var _this11;

    _this11 = _fcc$ABS$ABaseNotific8.call(this) || this, _defineProperty(_assertThisInitialized(_this11), "TAG_NAME", void 0), _this11.TAG_NAME = fcc.type.NotificationType.RESPONSE_RESULT;
    return _this11;
  }

  var _proto11 = ResponseResultNotification.prototype;

  _proto11.subscribe = function subscribe(t, e) {
    _fcc$ABS$ABaseNotific8.prototype.subscribe.call(this, t, e);
  };

  _proto11.notify = function notify(t) {
    if (0 < this.observer.size) {
      var e,
          i = _createForOfIteratorHelper$7(this.observer);

      try {
        for (i.s(); !(e = i.n()).done;) {
          var n = e.value;
          n.pushNotification(t), n.isPermanent || this.unsubscribe(n);
        }
      } catch (t) {
        i.e(t);
      } finally {
        i.f();
      }
    }
  };

  return ResponseResultNotification;
}(fcc.ABS.ABaseNotification);

function _createForOfIteratorHelper$8(t, e) {
  var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

  if (!i) {
    if (Array.isArray(t) || (i = _unsupportedIterableToArray$8(t)) || e && t && "number" == typeof t.length) {
      i && (t = i);

      var _n9 = 0,
          e = function e() {};

      return {
        s: e,
        n: function n() {
          return _n9 >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[_n9++]
          };
        },
        e: function e(t) {
          throw t;
        },
        f: e
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var r,
      o = !0,
      s = !1;
  return {
    s: function s() {
      i = i.call(t);
    },
    n: function n() {
      var t = i.next();
      return o = t.done, t;
    },
    e: function e(t) {
      s = !0, r = t;
    },
    f: function f() {
      try {
        o || null == i["return"] || i["return"]();
      } finally {
        if (s) throw r;
      }
    }
  };
}

function _unsupportedIterableToArray$8(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray$8(t, e);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    return "Map" === (i = "Object" === i && t.constructor ? t.constructor.name : i) || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray$8(t, e) : void 0;
  }
}

function _arrayLikeToArray$8(t, e) {
  (null == e || e > t.length) && (e = t.length);

  for (var i = 0, n = new Array(e); i < e; i++) {
    n[i] = t[i];
  }

  return n;
}

var SlotRowEndNotification = /*#__PURE__*/function (_fcc$ABS$ABaseNotific9) {
  _inheritsLoose(SlotRowEndNotification, _fcc$ABS$ABaseNotific9);

  function SlotRowEndNotification() {
    var _this12;

    _this12 = _fcc$ABS$ABaseNotific9.call(this) || this, _defineProperty(_assertThisInitialized(_this12), "TAG_NAME", void 0), _this12.TAG_NAME = fcc.type.NotificationType.SLOT_ROW_END;
    return _this12;
  }

  var _proto12 = SlotRowEndNotification.prototype;

  _proto12.subscribe = function subscribe(t, e) {
    _fcc$ABS$ABaseNotific9.prototype.subscribe.call(this, t, e);
  };

  _proto12.notify = function notify(t, e) {
    if (0 < this.observer.size) {
      var i,
          n = _createForOfIteratorHelper$8(this.observer);

      try {
        for (n.s(); !(i = n.n()).done;) {
          var r = i.value;
          r.pushNotification(t, e), r.isPermanent || this.unsubscribe(r);
        }
      } catch (t) {
        n.e(t);
      } finally {
        n.f();
      }
    }
  };

  return SlotRowEndNotification;
}(fcc.ABS.ABaseNotification);

var AutoStateChangeObserver = /*#__PURE__*/function (_fcc$ABS$ABaseObserve) {
  _inheritsLoose(AutoStateChangeObserver, _fcc$ABS$ABaseObserve);

  function AutoStateChangeObserver(t, e) {
    return _fcc$ABS$ABaseObserve.call(this, t, e) || this;
  }

  var _proto13 = AutoStateChangeObserver.prototype;

  _proto13.pushNotification = function pushNotification(t, e, i) {
    _fcc$ABS$ABaseObserve.prototype.pushNotification.call(this, t, e, i);
  };

  return AutoStateChangeObserver;
}(fcc.ABS.ABaseObserver);

var ScrollFocusStateObserver = /*#__PURE__*/function (_fcc$ABS$ABaseObserve2) {
  _inheritsLoose(ScrollFocusStateObserver, _fcc$ABS$ABaseObserve2);

  function ScrollFocusStateObserver(t, e) {
    return _fcc$ABS$ABaseObserve2.call(this, t, e) || this;
  }

  var _proto14 = ScrollFocusStateObserver.prototype;

  _proto14.pushNotification = function pushNotification(t, e) {
    _fcc$ABS$ABaseObserve2.prototype.pushNotification.call(this, t, e);
  };

  return ScrollFocusStateObserver;
}(fcc.ABS.ABaseObserver);

var SpeedStateChangeObserver = /*#__PURE__*/function (_fcc$ABS$ABaseObserve3) {
  _inheritsLoose(SpeedStateChangeObserver, _fcc$ABS$ABaseObserve3);

  function SpeedStateChangeObserver(t, e) {
    return _fcc$ABS$ABaseObserve3.call(this, t, e) || this;
  }

  var _proto15 = SpeedStateChangeObserver.prototype;

  _proto15.pushNotification = function pushNotification(t) {
    _fcc$ABS$ABaseObserve3.prototype.pushNotification.call(this, t);
  };

  return SpeedStateChangeObserver;
}(fcc.ABS.ABaseObserver);

var StopNowStateObserver = /*#__PURE__*/function (_fcc$ABS$ABaseObserve4) {
  _inheritsLoose(StopNowStateObserver, _fcc$ABS$ABaseObserve4);

  function StopNowStateObserver(t, e) {
    return _fcc$ABS$ABaseObserve4.call(this, t, e) || this;
  }

  var _proto16 = StopNowStateObserver.prototype;

  _proto16.pushNotification = function pushNotification() {
    _fcc$ABS$ABaseObserve4.prototype.pushNotification.call(this);
  };

  return StopNowStateObserver;
}(fcc.ABS.ABaseObserver);

var UserMoneyChangeObserver = /*#__PURE__*/function (_fcc$ABS$ABaseObserve5) {
  _inheritsLoose(UserMoneyChangeObserver, _fcc$ABS$ABaseObserve5);

  function UserMoneyChangeObserver(t, e) {
    return _fcc$ABS$ABaseObserve5.call(this, t, e) || this;
  }

  var _proto17 = UserMoneyChangeObserver.prototype;

  _proto17.pushNotification = function pushNotification(t) {
    _fcc$ABS$ABaseObserve5.prototype.pushNotification.call(this, t);
  };

  return UserMoneyChangeObserver;
}(fcc.ABS.ABaseObserver);

var UserTotalBetChangeObserver = /*#__PURE__*/function (_fcc$ABS$ABaseObserve6) {
  _inheritsLoose(UserTotalBetChangeObserver, _fcc$ABS$ABaseObserve6);

  function UserTotalBetChangeObserver(t, e) {
    return _fcc$ABS$ABaseObserve6.call(this, t, e) || this;
  }

  var _proto18 = UserTotalBetChangeObserver.prototype;

  _proto18.pushNotification = function pushNotification(t, e) {
    _fcc$ABS$ABaseObserve6.prototype.pushNotification.call(this, t, e);
  };

  return UserTotalBetChangeObserver;
}(fcc.ABS.ABaseObserver);

var UserWinPointStateObserver = /*#__PURE__*/function (_fcc$ABS$ABaseObserve7) {
  _inheritsLoose(UserWinPointStateObserver, _fcc$ABS$ABaseObserve7);

  function UserWinPointStateObserver(t, e) {
    return _fcc$ABS$ABaseObserve7.call(this, t, e) || this;
  }

  var _proto19 = UserWinPointStateObserver.prototype;

  _proto19.pushNotification = function pushNotification(t, e) {
    _fcc$ABS$ABaseObserve7.prototype.pushNotification.call(this, t, e);
  };

  return UserWinPointStateObserver;
}(fcc.ABS.ABaseObserver);

var ResponseResultObserver = /*#__PURE__*/function (_fcc$ABS$ABaseObserve8) {
  _inheritsLoose(ResponseResultObserver, _fcc$ABS$ABaseObserve8);

  function ResponseResultObserver(t, e) {
    return _fcc$ABS$ABaseObserve8.call(this, t, e) || this;
  }

  var _proto20 = ResponseResultObserver.prototype;

  _proto20.pushNotification = function pushNotification(t) {
    _fcc$ABS$ABaseObserve8.prototype.pushNotification.call(this, t);
  };

  return ResponseResultObserver;
}(fcc.ABS.ABaseObserver);

var SlotRowEndObserver = /*#__PURE__*/function (_fcc$ABS$ABaseObserve9) {
  _inheritsLoose(SlotRowEndObserver, _fcc$ABS$ABaseObserve9);

  function SlotRowEndObserver(t, e) {
    return _fcc$ABS$ABaseObserve9.call(this, t, e) || this;
  }

  var _proto21 = SlotRowEndObserver.prototype;

  _proto21.pushNotification = function pushNotification(t, e) {
    _fcc$ABS$ABaseObserve9.prototype.pushNotification.call(this, t, e);
  };

  return SlotRowEndObserver;
}(fcc.ABS.ABaseObserver);

function asyncGeneratorStep(t, e, i, n, r, o, s) {
  try {
    var a = t[o](s),
        u = a.value;
  } catch (t) {
    return void i(t);
  }

  a.done ? e(u) : Promise.resolve(u).then(n, r);
}

function _asyncToGenerator(a) {
  return function () {
    var t = this,
        s = arguments;
    return new Promise(function (e, i) {
      var n = a.apply(t, s);

      function r(t) {
        asyncGeneratorStep(n, e, i, r, o, "next", t);
      }

      function o(t) {
        asyncGeneratorStep(n, e, i, r, o, "throw", t);
      }

      r(void 0);
    });
  };
}

var undefined$1,
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

function wrap(t, e, i, n) {
  e = e && e.prototype instanceof Generator ? e : Generator, e = Object.create(e.prototype), n = new Context(n || []);
  return e._invoke = makeInvokeMethod(t, i, n), e;
}

function tryCatch(t, e, i) {
  try {
    return {
      type: "normal",
      arg: t.call(e, i)
    };
  } catch (t) {
    return {
      type: "throw",
      arg: t
    };
  }
}

var GenStateSuspendedStart = "suspendedStart",
    GenStateSuspendedYield = "suspendedYield",
    GenStateExecuting = "executing",
    GenStateCompleted = "completed",
    ContinueSentinel = {};

function Generator() {}

function GeneratorFunction() {}

function GeneratorFunctionPrototype() {}

var IteratorPrototype = {};

IteratorPrototype[iteratorSymbol] = function () {
  return this;
};

var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

function defineIteratorMethods(t) {
  ["next", "throw", "return"].forEach(function (e) {
    t[e] = function (t) {
      return this._invoke(e, t);
    };
  });
}

function isGeneratorFunction(t) {
  t = "function" == typeof t && t.constructor;
  return !!t && (t === GeneratorFunction || "GeneratorFunction" === (t.displayName || t.name));
}

function mark(t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, toStringTagSymbol in t || (t[toStringTagSymbol] = "GeneratorFunction")), t.prototype = Object.create(Gp), t;
}

function awrap(t) {
  return {
    __await: t
  };
}

function AsyncIterator(s, a) {
  var e;

  this._invoke = function (i, n) {
    function t() {
      return new a(function (t, e) {
        !function e(t, i, n, r) {
          t = tryCatch(s[t], s, i);

          if ("throw" !== t.type) {
            var o = t.arg;
            return (i = o.value) && "object" == typeof i && hasOwn.call(i, "__await") ? a.resolve(i.__await).then(function (t) {
              e("next", t, n, r);
            }, function (t) {
              e("throw", t, n, r);
            }) : a.resolve(i).then(function (t) {
              o.value = t, n(o);
            }, function (t) {
              return e("throw", t, n, r);
            });
          }

          r(t.arg);
        }(i, n, t, e);
      });
    }

    return e = e ? e.then(t, t) : t();
  };
}

function async(t, e, i, n, r) {
  void 0 === r && (r = Promise);
  var o = new AsyncIterator(wrap(t, e, i, n), r);
  return isGeneratorFunction(e) ? o : o.next().then(function (t) {
    return t.done ? t.value : o.next();
  });
}

function makeInvokeMethod(r, o, s) {
  var a = GenStateSuspendedStart;
  return function (t, e) {
    if (a === GenStateExecuting) throw new Error("Generator is already running");

    if (a === GenStateCompleted) {
      if ("throw" === t) throw e;
      return doneResult();
    }

    for (s.method = t, s.arg = e;;) {
      var i = s.delegate;

      if (i) {
        var n = maybeInvokeDelegate(i, s);

        if (n) {
          if (n === ContinueSentinel) continue;
          return n;
        }
      }

      if ("next" === s.method) s.sent = s._sent = s.arg;else if ("throw" === s.method) {
        if (a === GenStateSuspendedStart) throw a = GenStateCompleted, s.arg;
        s.dispatchException(s.arg);
      } else "return" === s.method && s.abrupt("return", s.arg);
      a = GenStateExecuting;
      n = tryCatch(r, o, s);

      if ("normal" === n.type) {
        if (a = s.done ? GenStateCompleted : GenStateSuspendedYield, n.arg !== ContinueSentinel) return {
          value: n.arg,
          done: s.done
        };
      } else "throw" === n.type && (a = GenStateCompleted, s.method = "throw", s.arg = n.arg);
    }
  };
}

function maybeInvokeDelegate(t, e) {
  var i = t.iterator[e.method];

  if (i === undefined$1) {
    if (e.delegate = null, "throw" === e.method) {
      if (t.iterator["return"] && (e.method = "return", e.arg = undefined$1, maybeInvokeDelegate(t, e), "throw" === e.method)) return ContinueSentinel;
      e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
    }

    return ContinueSentinel;
  }

  i = tryCatch(i, t.iterator, e.arg);
  if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, ContinueSentinel;
  i = i.arg;
  return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = undefined$1), e.delegate = null, ContinueSentinel) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, ContinueSentinel);
}

function pushTryEntry(t) {
  var e = {
    tryLoc: t[0]
  };
  1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
}

function resetTryEntry(t) {
  var e = t.completion || {};
  e.type = "normal", delete e.arg, t.completion = e;
}

function Context(t) {
  this.tryEntries = [{
    tryLoc: "root"
  }], t.forEach(pushTryEntry, this), this.reset(!0);
}

function keys(i) {
  var t,
      n = [];

  for (t in i) {
    n.push(t);
  }

  return n.reverse(), function t() {
    for (; n.length;) {
      var e = n.pop();
      if (e in i) return t.value = e, t.done = !1, t;
    }

    return t.done = !0, t;
  };
}

function values(e) {
  if (e) {
    var t = e[iteratorSymbol];
    if (t) return t.call(e);
    if ("function" == typeof e.next) return e;

    if (!isNaN(e.length)) {
      var i = -1,
          t = function t() {
        for (; ++i < e.length;) {
          if (hasOwn.call(e, i)) return t.value = e[i], t.done = !1, t;
        }

        return t.value = undefined$1, t.done = !0, t;
      };

      return t.next = t;
    }
  }

  return {
    next: doneResult
  };
}

function doneResult() {
  return {
    value: undefined$1,
    done: !0
  };
}

(GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype).constructor = GeneratorFunction, GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction", defineIteratorMethods(AsyncIterator.prototype), AsyncIterator.prototype[asyncIteratorSymbol] = function () {
  return this;
}, defineIteratorMethods(Gp), Gp[toStringTagSymbol] = "Generator", Gp[iteratorSymbol] = function () {
  return this;
}, Gp.toString = function () {
  return "[object Generator]";
}, Context.prototype = {
  constructor: Context,
  reset: function reset(t) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined$1, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined$1, this.tryEntries.forEach(resetTryEntry), !t) for (var e in this) {
      "t" === e.charAt(0) && hasOwn.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = undefined$1);
    }
  },
  stop: function stop() {
    this.done = !0;
    var t = this.tryEntries[0].completion;
    if ("throw" === t.type) throw t.arg;
    return this.rval;
  },
  dispatchException: function dispatchException(i) {
    if (this.done) throw i;
    var n = this;

    function t(t, e) {
      return o.type = "throw", o.arg = i, n.next = t, e && (n.method = "next", n.arg = undefined$1), !!e;
    }

    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
      var r = this.tryEntries[e],
          o = r.completion;
      if ("root" === r.tryLoc) return t("end");

      if (r.tryLoc <= this.prev) {
        var s = hasOwn.call(r, "catchLoc"),
            a = hasOwn.call(r, "finallyLoc");

        if (s && a) {
          if (this.prev < r.catchLoc) return t(r.catchLoc, !0);
          if (this.prev < r.finallyLoc) return t(r.finallyLoc);
        } else if (s) {
          if (this.prev < r.catchLoc) return t(r.catchLoc, !0);
        } else {
          if (!a) throw new Error("try statement without catch or finally");
          if (this.prev < r.finallyLoc) return t(r.finallyLoc);
        }
      }
    }
  },
  abrupt: function abrupt(t, e) {
    for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
      var n = this.tryEntries[i];

      if (n.tryLoc <= this.prev && hasOwn.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
        var r = n;
        break;
      }
    }

    var o = (r = r && ("break" === t || "continue" === t) && r.tryLoc <= e && e <= r.finallyLoc ? null : r) ? r.completion : {};
    return o.type = t, o.arg = e, r ? (this.method = "next", this.next = r.finallyLoc, ContinueSentinel) : this.complete(o);
  },
  complete: function complete(t, e) {
    if ("throw" === t.type) throw t.arg;
    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), ContinueSentinel;
  },
  finish: function finish(t) {
    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
      var i = this.tryEntries[e];
      if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), resetTryEntry(i), ContinueSentinel;
    }
  },
  "catch": function _catch(t) {
    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
      var i = this.tryEntries[e];

      if (i.tryLoc === t) {
        var n,
            r = i.completion;
        return "throw" === r.type && (n = r.arg, resetTryEntry(i)), n;
      }
    }

    throw new Error("illegal catch attempt");
  },
  delegateYield: function delegateYield(t, e, i) {
    return this.delegate = {
      iterator: values(t),
      resultName: e,
      nextLoc: i
    }, "next" === this.method && (this.arg = undefined$1), ContinueSentinel;
  }
};
var PageChangeType,
    DayType,
    _regeneratorRuntime = {
  wrap: wrap,
  isGeneratorFunction: isGeneratorFunction,
  AsyncIterator: AsyncIterator,
  mark: mark,
  awrap: awrap,
  async: async,
  keys: keys,
  values: values
};

var AMainGameButtonTemplate = /*#__PURE__*/function (_AGenericTemplate2) {
  _inheritsLoose(AMainGameButtonTemplate, _AGenericTemplate2);

  function AMainGameButtonTemplate() {
    var _this13;

    _this13 = _AGenericTemplate2.apply(this, arguments) || this, _defineProperty(_assertThisInitialized(_this13), "isShowTotalBetFrame", void 0), _defineProperty(_assertThisInitialized(_this13), "keyboardListener", void 0), _defineProperty(_assertThisInitialized(_this13), "_autoStateChangeObserver", void 0), _defineProperty(_assertThisInitialized(_this13), "nowSpeed", void 0), _defineProperty(_assertThisInitialized(_this13), "isAutoState", void 0), _defineProperty(_assertThisInitialized(_this13), "nowAutoType", void 0), _defineProperty(_assertThisInitialized(_this13), "longTouchTime", void 0), _defineProperty(_assertThisInitialized(_this13), "userMoney", void 0), _defineProperty(_assertThisInitialized(_this13), "_userMoneyChangeObserver", void 0);
    return _this13;
  }

  var _proto22 = AMainGameButtonTemplate.prototype;

  _proto22.onLoad = function onLoad() {
    this.isShowTotalBetFrame = !1, this.keyboardListener = !1, this.nowAutoType = fcc.configMgr.autoCount, this.longTouchTime = .5, this.nowSpeed = fcc.configMgr.isSpeedUp, this.addNotification(), _AGenericTemplate2.prototype.onLoad.call(this);
  };

  _proto22.addNotification = function addNotification() {
    fcc.notificationMgr().getNotification(fcc.type.NotificationType.AUTO_CHANGE).subscribe(this.getAutoStateChangeObserver(), !0), fcc.notificationMgr().getNotification(fcc.type.NotificationType.USER_MONEY_CHANGE).subscribe(this.getUserMoneyChangeObserver(), !0);
  };

  _proto22.startButtonOnTouchStart = function startButtonOnTouchStart() {
    this.unschedule(this.longTouchTimer), this.isAutoState ? this.autoNotify(!1, this.nowAutoType) : this.scheduleOnce(this.longTouchTimer, this.longTouchTime);
  };

  _proto22.longTouchTimer = function longTouchTimer() {
    var e = this;
    return _asyncToGenerator(_regeneratorRuntime.mark(function t() {
      return _regeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (e.autoNotify(!0, e.nowAutoType), fcc.processMgr.gameState == fcc.type.GameStateType.STANDBY) return t.next = 4, e.startButtonEvent();
              t.next = 4;
              break;

            case 4:
            case "end":
              return t.stop();
          }
        }
      }, t);
    }))();
  };

  _proto22.autoNotify = function autoNotify(t, e) {
    fcc.notificationMgr().getNotification(fcc.type.NotificationType.AUTO_CHANGE).notify(t, e, e);
  };

  _proto22.startButtonOnTouchEnd = function startButtonOnTouchEnd() {
    var e = this;
    return _asyncToGenerator(_regeneratorRuntime.mark(function t() {
      return _regeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (e.unschedule(e.longTouchTimer), e.isAutoState) return t.abrupt("return");
              t.next = 3;
              break;

            case 3:
              return t.next = 5, e.startButtonEvent();

            case 5:
            case "end":
              return t.stop();
          }
        }
      }, t);
    }))();
  };

  _proto22.keyboardSpaceTouchStart = function keyboardSpaceTouchStart(t) {
    t.keyCode === cc.macro.KEY.space && (this.keyboardListener || (this.keyboardListener = !0, this.startButtonOnTouchStart()));
  };

  _proto22.keyboardSpaceTouchEnd = function keyboardSpaceTouchEnd(e) {
    var i = this;
    return _asyncToGenerator(_regeneratorRuntime.mark(function t() {
      return _regeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              t.t0 = e.keyCode, t.next = t.t0 === cc.macro.KEY.space ? 3 : 7;
              break;

            case 3:
              return t.next = 5, i.startButtonOnTouchEnd();

            case 5:
              return i.keyboardListener = !1, t.abrupt("break", 7);

            case 7:
            case "end":
              return t.stop();
          }
        }
      }, t);
    }))();
  };

  _proto22.getAutoStateChangeObserver = function getAutoStateChangeObserver() {
    var r = this;
    return this._autoStateChangeObserver || (this._autoStateChangeObserver = new AutoStateChangeObserver(function () {
      var n = _asyncToGenerator(_regeneratorRuntime.mark(function t(e, i, n) {
        return _regeneratorRuntime.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                if (r.nowAutoType = n, r.isAutoState = e, r.autoEvent(e, n), e && fcc.processMgr.gameState == fcc.type.GameStateType.STANDBY) return t.next = 6, r.startButtonEvent();
                t.next = 6;
                break;

              case 6:
              case "end":
                return t.stop();
            }
          }
        }, t);
      }));

      return function (t, e, i) {
        return n.apply(this, arguments);
      };
    }(), this)), this._autoStateChangeObserver;
  };

  _proto22.getUserMoneyChangeObserver = function getUserMoneyChangeObserver() {
    var _this14 = this;

    return this._userMoneyChangeObserver || (this._userMoneyChangeObserver = new UserMoneyChangeObserver(function (t) {
      _this14.userMoney = t;
    }, this)), this._userMoneyChangeObserver;
  };

  _proto22.startButtonEvent = function startButtonEvent() {
    var e = this;
    return _asyncToGenerator(_regeneratorRuntime.mark(function t() {
      return _regeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (e.isShowTotalBetFrame) return e.isShowTotalBetFrame = !e.isShowTotalBetFrame, e.totalBetFrameTouchEvent(!1), t.abrupt("return");
              t.next = 4;
              break;

            case 4:
              if (fcc.processMgr.gameState != fcc.type.GameStateType.STANDBY && fcc.processMgr.gameState != fcc.type.GameStateType.FREEING) return fcc.notificationMgr().getNotification(fcc.type.NotificationType.STOP_NOW).notify(), t.abrupt("return");
              t.next = 7;
              break;

            case 7:
              if (e.checkUserPointCanPlayGame()) {
                t.next = 9;
                break;
              }

              return t.abrupt("return");

            case 9:
              return e.startEvent(), t.next = 12, fcc.processMgr.play();

            case 12:
              e.endEvent();

            case 13:
              if (e.isAutoState || fcc.processMgr.gameState === fcc.type.GameStateType.FREEING) {
                t.next = 0;
                break;
              }

            case 14:
            case "end":
              return t.stop();
          }
        }
      }, t);
    }))();
  };

  _proto22.autoButtonEventListener = function autoButtonEventListener() {
    if (this.unschedule(this.longTouchTimer), this.isShowTotalBetFrame) return this.isShowTotalBetFrame = !this.isShowTotalBetFrame, void this.totalBetFrameTouchEvent(!1);
    this.isAutoState = !this.isAutoState, this.autoNotify(this.isAutoState, this.nowAutoType);
  };

  _proto22.speedUpButtonEventListener = function speedUpButtonEventListener() {
    this.nowSpeed = !this.nowSpeed, fcc.notificationMgr().getNotification(fcc.type.NotificationType.SPEED_CHANGE).notify(this.nowSpeed), this.speedUpEvent(this.nowSpeed);
  };

  _proto22.totalBetFrameTouchEventListener = function totalBetFrameTouchEventListener() {
    fcc.processMgr.gameState == fcc.type.GameStateType.STANDBY ? (this.isShowTotalBetFrame = !this.isShowTotalBetFrame, this.totalBetFrameTouchEvent(this.isShowTotalBetFrame)) : this.warningEvent();
  };

  _proto22.menuButtonEventListener = function menuButtonEventListener() {
    this.unschedule(this.longTouchTimer), fcc.processMgr.gameState == fcc.type.GameStateType.STANDBY ? this.menuEvent() : this.warningEvent();
  };

  return AMainGameButtonTemplate;
}(AGenericTemplate);

var AMainGameOnlyButtonTemplate = /*#__PURE__*/function (_AMainGameButtonTempl) {
  _inheritsLoose(AMainGameOnlyButtonTemplate, _AMainGameButtonTempl);

  function AMainGameOnlyButtonTemplate() {
    return _AMainGameButtonTempl.apply(this, arguments) || this;
  }

  var _proto23 = AMainGameOnlyButtonTemplate.prototype;

  _proto23.onLoad = function onLoad() {
    fcc.global.Button.addButtonEvent(this.autoButton, "autoButtonEventListener", this), fcc.global.Button.addButtonEvent(this.speedUpButton, "speedUpButtonEventListener", this), fcc.global.Button.addButtonEvent(this.betSelectionButton, "totalBetFrameTouchEventListener", this), fcc.global.Button.addButtonEvent(this.menuButton, "menuButtonEventListener", this), _AMainGameButtonTempl.prototype.onLoad.call(this);
  };

  _proto23.startButtonOnEnable = function startButtonOnEnable() {
    this.unschedule(this.longTouchTimer), this.startButton.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this), this.startButton.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
  };

  _proto23.startButtonDisable = function startButtonDisable() {
    this.unschedule(this.longTouchTimer), this.startButton.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this), this.startButton.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
  };

  return AMainGameOnlyButtonTemplate;
}(AMainGameButtonTemplate);

var AMainGameDoubleButtonTemplate = /*#__PURE__*/function (_AMainGameButtonTempl2) {
  _inheritsLoose(AMainGameDoubleButtonTemplate, _AMainGameButtonTempl2);

  function AMainGameDoubleButtonTemplate() {
    return _AMainGameButtonTempl2.apply(this, arguments) || this;
  }

  var _proto24 = AMainGameDoubleButtonTemplate.prototype;

  _proto24.onLoad = function onLoad() {
    fcc.global.Button.addButtonEvent(this.autoButtonH, "autoButtonEventListener", this), fcc.global.Button.addButtonEvent(this.autoButtonV, "autoButtonEventListener", this), fcc.global.Button.addButtonEvent(this.speedUpButtonH, "speedUpButtonEventListener", this), fcc.global.Button.addButtonEvent(this.speedUpButtonV, "speedUpButtonEventListener", this), fcc.global.Button.addButtonEvent(this.betSelectionButtonH, "totalBetFrameTouchEventListener", this), fcc.global.Button.addButtonEvent(this.betSelectionButtonV, "totalBetFrameTouchEventListener", this), fcc.global.Button.addButtonEvent(this.menuButtonH, "menuButtonEventListener", this), fcc.global.Button.addButtonEvent(this.menuButtonV, "menuButtonEventListener", this), _AMainGameButtonTempl2.prototype.onLoad.call(this);
  };

  _proto24.startButtonOnEnable = function startButtonOnEnable() {
    this.unschedule(this.longTouchTimer), this.startButtonH.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this), this.startButtonV.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this), this.startButtonH.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this), this.startButtonV.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
  };

  _proto24.startButtonDisable = function startButtonDisable() {
    this.unschedule(this.longTouchTimer), this.startButtonH.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this), this.startButtonV.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this), this.startButtonH.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this), this.startButtonV.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
  };

  return AMainGameDoubleButtonTemplate;
}(AMainGameButtonTemplate);

var AMenuButtonTemplate = /*#__PURE__*/function (_AGenericTemplate3) {
  _inheritsLoose(AMenuButtonTemplate, _AGenericTemplate3);

  function AMenuButtonTemplate() {
    var _this15;

    _this15 = _AGenericTemplate3.apply(this, arguments) || this, _defineProperty(_assertThisInitialized(_this15), "userTotalBetChangeObserver", void 0), _defineProperty(_assertThisInitialized(_this15), "autoStateChangeObserver", void 0), _defineProperty(_assertThisInitialized(_this15), "nowAutoType", void 0);
    return _this15;
  }

  var _proto25 = AMenuButtonTemplate.prototype;

  _proto25.onLoad = function onLoad() {
    this.nowAutoType = fcc.configMgr.autoCount, this.addNotification(), _AGenericTemplate3.prototype.onLoad.call(this);
  };

  _proto25.addNotification = function addNotification() {
    fcc.notificationMgr().getNotification(fcc.type.NotificationType.USER_BET_CHANGE).subscribe(this.getUserTotalBetChangeObserver(), !0);
  };

  _proto25.musicEventListener = function musicEventListener() {
    var t = fcc.audioMgr.updateMusicOnMute();
    this.musicEvent(t);
  };

  _proto25.effectEventListener = function effectEventListener() {
    var t = fcc.audioMgr.updateEffectOnMute();
    this.effectEvent(t);
  };

  _proto25.betUpEventListener = function betUpEventListener() {
    var t = this.nowBetIndex + 1;
    t > this.tableInfo.LineBet.length - 1 && (t = 0), fcc.notificationMgr().getNotification(fcc.type.NotificationType.USER_BET_CHANGE).notify(this.nowBetIndex, t);
  };

  _proto25.betDownEventListener = function betDownEventListener() {
    var t = this.nowBetIndex - 1;
    t < 0 && (t = this.tableInfo.LineBet.length - 1), fcc.notificationMgr().getNotification(fcc.type.NotificationType.USER_BET_CHANGE).notify(this.nowBetIndex, t);
  };

  _proto25.getUserTotalBetChangeObserver = function getUserTotalBetChangeObserver() {
    var _this16 = this;

    return this.userTotalBetChangeObserver || (this.userTotalBetChangeObserver = new UserTotalBetChangeObserver(function (t, e) {
      _this16.nowBetIndex = e, _this16.totalBetChangeEvent(t, e);
    }, this)), this.userTotalBetChangeObserver;
  };

  _proto25.autoButtonEventListener = function autoButtonEventListener(t, e) {
    this.autoEvent(this.nowAutoType, e), fcc.notificationMgr().getNotification(fcc.type.NotificationType.AUTO_CHANGE).notify(!0, this.nowAutoType, e), this.nowAutoType = e;
  };

  return AMenuButtonTemplate;
}(AGenericTemplate);

var AMenuDoubleButtonTemplate = /*#__PURE__*/function (_AMenuButtonTemplate) {
  _inheritsLoose(AMenuDoubleButtonTemplate, _AMenuButtonTemplate);

  function AMenuDoubleButtonTemplate() {
    return _AMenuButtonTemplate.apply(this, arguments) || this;
  }

  var _proto26 = AMenuDoubleButtonTemplate.prototype;

  _proto26.onLoad = function onLoad() {
    fcc.global.Button.addButtonEvent(this.musicButtonH, "musicEventListener", this), fcc.global.Button.addButtonEvent(this.musicButtonV, "musicEventListener", this), fcc.global.Button.addButtonEvent(this.effectButtonH, "effectEventListener", this), fcc.global.Button.addButtonEvent(this.effectButtonV, "effectEventListener", this), fcc.global.Button.addButtonEvent(this.betUpButtonH, "betUpEventListener", this), fcc.global.Button.addButtonEvent(this.betUpButtonV, "betUpEventListener", this), fcc.global.Button.addButtonEvent(this.betDownButtonH, "betDownEventListener", this), fcc.global.Button.addButtonEvent(this.betDownButtonV, "betDownEventListener", this), fcc.global.Button.addButtonEvent(this.auto50ButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_50), fcc.global.Button.addButtonEvent(this.auto50ButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_50), fcc.global.Button.addButtonEvent(this.auto100ButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_100), fcc.global.Button.addButtonEvent(this.auto100ButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_100), fcc.global.Button.addButtonEvent(this.auto500ButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_500), fcc.global.Button.addButtonEvent(this.auto500ButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_500), fcc.global.Button.addButtonEvent(this.auto1000ButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_1000), fcc.global.Button.addButtonEvent(this.auto1000ButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_1000), fcc.global.Button.addButtonEvent(this.autoFreeEndButtonH, "autoButtonEventListener", this, fcc.type.AutoType.FREE_END), fcc.global.Button.addButtonEvent(this.autoFreeEndButtonV, "autoButtonEventListener", this, fcc.type.AutoType.FREE_END), fcc.global.Button.addButtonEvent(this.autoButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO), fcc.global.Button.addButtonEvent(this.autoButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO), fcc.global.Button.addButtonEvent(this.goBackButtonH, "goBackTouchEvent", this), fcc.global.Button.addButtonEvent(this.goBackButtonV, "goBackTouchEvent", this), fcc.global.Button.addButtonEvent(this.goHomeButtonH, "goHomeTouchEvent", this), fcc.global.Button.addButtonEvent(this.goHomeButtonV, "goHomeTouchEvent", this), fcc.global.Button.addButtonEvent(this.recordButtonH, "recordPageTouchEvent", this), fcc.global.Button.addButtonEvent(this.recordButtonV, "recordPageTouchEvent", this), fcc.global.Button.addButtonEvent(this.settingButtonH, "settingPageTouchEvent", this), fcc.global.Button.addButtonEvent(this.settingButtonV, "settingPageTouchEvent", this), fcc.global.Button.addButtonEvent(this.descriptionPageButtonH, "descriptionPageEvent", this), fcc.global.Button.addButtonEvent(this.descriptionPageButtonV, "descriptionPageEvent", this), _AMenuButtonTemplate.prototype.onLoad.call(this);
  };

  return AMenuDoubleButtonTemplate;
}(AMenuButtonTemplate);

var AMenuOnlyButtonTemplate = /*#__PURE__*/function (_AMenuButtonTemplate2) {
  _inheritsLoose(AMenuOnlyButtonTemplate, _AMenuButtonTemplate2);

  function AMenuOnlyButtonTemplate() {
    return _AMenuButtonTemplate2.apply(this, arguments) || this;
  }

  var _proto27 = AMenuOnlyButtonTemplate.prototype;

  _proto27.onLoad = function onLoad() {
    fcc.global.Button.addButtonEvent(this.musicButton, "musicEventListener", this), fcc.global.Button.addButtonEvent(this.effectButton, "effectEventListener", this), fcc.global.Button.addButtonEvent(this.betUpButton, "betUpEventListener", this), fcc.global.Button.addButtonEvent(this.betDownButton, "betDownEventListener", this), fcc.global.Button.addButtonEvent(this.auto50Button, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_50), fcc.global.Button.addButtonEvent(this.auto100Button, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_100), fcc.global.Button.addButtonEvent(this.auto500Button, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_500), fcc.global.Button.addButtonEvent(this.auto1000Button, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_1000), fcc.global.Button.addButtonEvent(this.autoFreeEndButton, "autoButtonEventListener", this, fcc.type.AutoType.FREE_END), fcc.global.Button.addButtonEvent(this.autoButton, "autoButtonEventListener", this, fcc.type.AutoType.AUTO), fcc.global.Button.addButtonEvent(this.goBackButton, "goBackTouchEvent", this), fcc.global.Button.addButtonEvent(this.goHomeButton, "goHomeTouchEvent", this), fcc.global.Button.addButtonEvent(this.recordButton, "recordPageTouchEvent", this), fcc.global.Button.addButtonEvent(this.settingButton, "settingPageTouchEvent", this), fcc.global.Button.addButtonEvent(this.descriptionPageButton, "descriptionPageEvent", this), _AMenuButtonTemplate2.prototype.onLoad.call(this);
  };

  return AMenuOnlyButtonTemplate;
}(AMenuButtonTemplate);

!function (t) {
  t.NEXT = "NEXT", t.PREVIOUS = "PREVIOUS";
}(PageChangeType = PageChangeType || {}), function (t) {
  t.ONE_DAY = "ONE_DAY", t.FIVE_DAY = "FIVE_DAY", t.TEN_DAY = "TEN_DAY";
}(DayType = DayType || {});

var ARecordButtonTemplate = /*#__PURE__*/function (_AGenericTemplate4) {
  _inheritsLoose(ARecordButtonTemplate, _AGenericTemplate4);

  function ARecordButtonTemplate() {
    return _AGenericTemplate4.apply(this, arguments) || this;
  }

  var _proto28 = ARecordButtonTemplate.prototype;

  _proto28.onLoad = function onLoad() {
    _AGenericTemplate4.prototype.onLoad.call(this);
  };

  return ARecordButtonTemplate;
}(AGenericTemplate);

var ARecordDoubleButtonTemplate = /*#__PURE__*/function (_ARecordButtonTemplat) {
  _inheritsLoose(ARecordDoubleButtonTemplate, _ARecordButtonTemplat);

  function ARecordDoubleButtonTemplate() {
    return _ARecordButtonTemplat.apply(this, arguments) || this;
  }

  var _proto29 = ARecordDoubleButtonTemplate.prototype;

  _proto29.onLoad = function onLoad() {
    fcc.global.Button.addButtonEvent(this.goBackButtonH, "goBackTouchEvent", this), fcc.global.Button.addButtonEvent(this.goBackButtonV, "goBackTouchEvent", this), fcc.global.Button.addButtonEvent(this.oneDayRecordButtonH, "daysRecordTouchEventH", this, DayType.ONE_DAY), fcc.global.Button.addButtonEvent(this.oneDayRecordButtonV, "daysRecordTouchEventV", this, DayType.ONE_DAY), fcc.global.Button.addButtonEvent(this.fiveDayRecordButtonH, "daysRecordTouchEventH", this, DayType.FIVE_DAY), fcc.global.Button.addButtonEvent(this.fiveDayRecordButtonV, "daysRecordTouchEventV", this, DayType.FIVE_DAY), fcc.global.Button.addButtonEvent(this.tenDayRecordButtonH, "daysRecordTouchEventH", this, DayType.TEN_DAY), fcc.global.Button.addButtonEvent(this.tenDayRecordButtonV, "daysRecordTouchEventV", this, DayType.TEN_DAY), fcc.global.Button.addButtonEvent(this.nextRecordButtonH, "nextAndLastButtonTouchEvent", this, PageChangeType.NEXT), fcc.global.Button.addButtonEvent(this.nextRecordButtonV, "nextAndLastButtonTouchEvent", this, PageChangeType.NEXT), fcc.global.Button.addButtonEvent(this.previousRecordButtonH, "nextAndLastButtonTouchEvent", this, PageChangeType.PREVIOUS), fcc.global.Button.addButtonEvent(this.previousRecordButtonV, "nextAndLastButtonTouchEvent", this, PageChangeType.PREVIOUS), _ARecordButtonTemplat.prototype.onLoad.call(this);
  };

  return ARecordDoubleButtonTemplate;
}(ARecordButtonTemplate);

var ARecordOnlyButtonTemplate = /*#__PURE__*/function (_ARecordButtonTemplat2) {
  _inheritsLoose(ARecordOnlyButtonTemplate, _ARecordButtonTemplat2);

  function ARecordOnlyButtonTemplate() {
    return _ARecordButtonTemplat2.apply(this, arguments) || this;
  }

  var _proto30 = ARecordOnlyButtonTemplate.prototype;

  _proto30.onLoad = function onLoad() {
    fcc.global.Button.addButtonEvent(this.goBackButton, "goBackTouchEvent", this), fcc.global.Button.addButtonEvent(this.oneDayRecordButton, "daysRecordTouchEventH", this, DayType.ONE_DAY), fcc.global.Button.addButtonEvent(this.fiveDayRecordButton, "daysRecordTouchEventH", this, DayType.FIVE_DAY), fcc.global.Button.addButtonEvent(this.tenDayRecordButton, "daysRecordTouchEventH", this, DayType.TEN_DAY), fcc.global.Button.addButtonEvent(this.nextRecordButton, "nextAndLastButtonTouchEvent", this, PageChangeType.NEXT), fcc.global.Button.addButtonEvent(this.previousRecordButton, "nextAndLastButtonTouchEvent", this, PageChangeType.PREVIOUS), _ARecordButtonTemplat2.prototype.onLoad.call(this);
  };

  return ARecordOnlyButtonTemplate;
}(ARecordButtonTemplate);

var AErrorFrameTemplate = /*#__PURE__*/function (_AGenericTemplate5) {
  _inheritsLoose(AErrorFrameTemplate, _AGenericTemplate5);

  function AErrorFrameTemplate() {
    return _AGenericTemplate5.apply(this, arguments) || this;
  }

  var _proto31 = AErrorFrameTemplate.prototype;

  _proto31.onLoad = function onLoad() {
    fcc.global.Button.addButtonEvent(this.errorButton, "errorButtonTouchEvent", this), _AGenericTemplate5.prototype.onLoad.call(this);
  };

  return AErrorFrameTemplate;
}(AGenericTemplate);

var ALoadingTemplate = /*#__PURE__*/function (_AGenericTemplate6) {
  _inheritsLoose(ALoadingTemplate, _AGenericTemplate6);

  function ALoadingTemplate() {
    var _this17;

    _this17 = _AGenericTemplate6.call(this) || this, _defineProperty(_assertThisInitialized(_this17), "_isGetTableInfoResponse", void 0), _this17._isGetTableInfoResponse = !1;
    return _this17;
  }

  var _proto32 = ALoadingTemplate.prototype;

  _proto32.onLoad = function onLoad() {
    this.responseNotification(), fcc.global.Button.addButtonEvent(this.intoMainGameButton, "intoMainGameButtonEvent", this), _AGenericTemplate6.prototype.onLoad.call(this);
  };

  _proto32.start = function start() {
    _AGenericTemplate6.prototype.start.call(this), this.sceneStyle(), this.loadExternalScript(), this.loadResources(), this.loadAssetBundle(), this.updateProgressTextAnimation();
  };

  _proto32.responseNotification = function responseNotification() {
    var _this18 = this;

    fcc.notificationMgr().getNotification(fcc.type.NotificationType.RESPONSE_RESULT).subscribe(new ResponseResultObserver(function (t) {
      t == fcc.type.ServerEventType.TABLE_INFO && (_this18._isGetTableInfoResponse = !0);
    }, this), !1);
  };

  _createClass(ALoadingTemplate, [{
    key: "isGetTableInfoResponse",
    get: function get() {
      return this._isGetTableInfoResponse;
    }
  }]);

  return ALoadingTemplate;
}(AGenericTemplate);

var ALoadingFrameTemplate = /*#__PURE__*/function (_AGenericTemplate7) {
  _inheritsLoose(ALoadingFrameTemplate, _AGenericTemplate7);

  function ALoadingFrameTemplate() {
    var _this19;

    _this19 = _AGenericTemplate7.apply(this, arguments) || this, _defineProperty(_assertThisInitialized(_this19), "progressValue", void 0), _defineProperty(_assertThisInitialized(_this19), "timeOut", void 0), _defineProperty(_assertThisInitialized(_this19), "addProgressValue", void 0), _defineProperty(_assertThisInitialized(_this19), "timer", void 0);
    return _this19;
  }

  var _proto33 = ALoadingFrameTemplate.prototype;

  _proto33.onLoad = function onLoad() {
    this.loadingInitialize(), _AGenericTemplate7.prototype.onLoad.call(this);
  };

  _proto33.loadingInitialize = function loadingInitialize() {
    this.loadingDialogNode.active = !0, this.loadingDialogNode.opacity = 255, this.timer = null, this.progressText.string = "", this.progressValue = 0, this.timeOut = 50, this.addProgressValue = .005;
  };

  _proto33.runProgress = function runProgress(e) {
    var _this20 = this;

    return this.loadingInitialize(), new Promise(function (t) {
      _this20.checkHasRes(e, t) && _this20.progressTimer("", e, t);
    });
  };

  _proto33.progressTimer = function progressTimer(t, e, i) {
    var _this21 = this;

    this.timer = window.setInterval(function () {
      1 < _this21.progressValue && (_this21.progressValue = 0), 3 < t.length && (t = ""), _this21.progressText.string = t, _this21.progressBar.progress = _this21.progressValue, _this21.progressValue = _this21.progressValue + _this21.progressValue, t += ".", 1 == fcc.loadMgr.secondaryLoadState.get(e) && (1 <= _this21.progressValue && _this21.closeLoadingDiaLog(i), .1 != _this21.addProgressValue && (_this21.addProgressValue = .05));
    }, this.timeOut);
  };

  _proto33.closeLoadingDiaLog = function closeLoadingDiaLog(t) {
    var _this22 = this;

    cc.tween(this.loadingDialogNode).to(.2, {
      opacity: 0
    }).call(function () {
      _this22.loadingDialogNode.active = !1, t();
    });
  };

  _proto33.checkHasRes = function checkHasRes(t, e) {
    return fcc.loadMgr.secondaryLoadState.has(t) ? 1 != fcc.loadMgr.secondaryLoadState.get(t) || (this.loadingDialogNode.active = !1, e(), !1) : (fcc.errorMgr.executeError(fcc.type.ErrorType.UNDEFINED_FW, "".concat(t, "???????????????")), this.loadingDialogNode.active = !1, e(), !1);
  };

  return ALoadingFrameTemplate;
}(AGenericTemplate);

var ALookAtTemplate = /*#__PURE__*/function (_AGenericTemplate8) {
  _inheritsLoose(ALookAtTemplate, _AGenericTemplate8);

  function ALookAtTemplate() {
    var _this23;

    _this23 = _AGenericTemplate8.apply(this, arguments) || this, _defineProperty(_assertThisInitialized(_this23), "_scrollFocusStateObserver", void 0);
    return _this23;
  }

  var _proto34 = ALookAtTemplate.prototype;

  _proto34.onLoad = function onLoad() {
    this.addNotification(), _AGenericTemplate8.prototype.onLoad.call(this);
  };

  _proto34.addNotification = function addNotification() {
    fcc.notificationMgr().getNotification(fcc.type.NotificationType.SCROLL_FOCUS_STATE).subscribe(this.getScrollFocusStateObserver(), !0);
  };

  _proto34.getScrollFocusStateObserver = function getScrollFocusStateObserver() {
    var _this24 = this;

    return this._scrollFocusStateObserver || (this._scrollFocusStateObserver = new ScrollFocusStateObserver(function (t, e) {
      e ? _this24.allLookAtEffect[t].node.active || _this24.showLookAtEffect(t) : _this24.allLookAtEffect[t].node.active && _this24.removeLookAtEffect(t);
    }, this)), this._scrollFocusStateObserver;
  };

  return ALookAtTemplate;
}(AGenericTemplate);

function __decorate(t, e, i, n) {
  var r,
      o = arguments.length,
      s = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);else for (var a = t.length - 1; 0 <= a; a--) {
    (r = t[a]) && (s = (o < 3 ? r(s) : 3 < o ? r(e, i, s) : r(e, i)) || s);
  }
  return 3 < o && s && Object.defineProperty(e, i, s), s;
}

function __metadata(t, e) {
  if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
}

function _createForOfIteratorHelper$9(t, e) {
  var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

  if (!i) {
    if (Array.isArray(t) || (i = _unsupportedIterableToArray$9(t)) || e && t && "number" == typeof t.length) {
      i && (t = i);

      var _n10 = 0,
          e = function e() {};

      return {
        s: e,
        n: function n() {
          return _n10 >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[_n10++]
          };
        },
        e: function e(t) {
          throw t;
        },
        f: e
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var r,
      o = !0,
      s = !1;
  return {
    s: function s() {
      i = i.call(t);
    },
    n: function n() {
      var t = i.next();
      return o = t.done, t;
    },
    e: function e(t) {
      s = !0, r = t;
    },
    f: function f() {
      try {
        o || null == i["return"] || i["return"]();
      } finally {
        if (s) throw r;
      }
    }
  };
}

function _unsupportedIterableToArray$9(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray$9(t, e);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    return "Map" === (i = "Object" === i && t.constructor ? t.constructor.name : i) || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray$9(t, e) : void 0;
  }
}

function _arrayLikeToArray$9(t, e) {
  (null == e || e > t.length) && (e = t.length);

  for (var i = 0, n = new Array(e); i < e; i++) {
    n[i] = t[i];
  }

  return n;
}

var ccclass = cc._decorator.ccclass,
    LINE_CONTAINER = "LINE_CONTAINER",
    PARTICLE_CONTAINER = "PARTICLE_CONTAINER",
    AWinLinTemplate = /*#__PURE__*/function (_AGenericTemplate9) {
  _inheritsLoose(AWinLinTemplate, _AGenericTemplate9);

  function AWinLinTemplate() {
    var _this25;

    _this25 = _AGenericTemplate9.apply(this, arguments) || this, _defineProperty(_assertThisInitialized(_this25), "allGridPosition", void 0), _defineProperty(_assertThisInitialized(_this25), "allWinLine", void 0), _defineProperty(_assertThisInitialized(_this25), "allParticle", void 0), _defineProperty(_assertThisInitialized(_this25), "isStop", void 0), _defineProperty(_assertThisInitialized(_this25), "lineVector", void 0), _defineProperty(_assertThisInitialized(_this25), "particleVector", void 0), _defineProperty(_assertThisInitialized(_this25), "angle", void 0), _defineProperty(_assertThisInitialized(_this25), "runLineSpeed", void 0), _defineProperty(_assertThisInitialized(_this25), "runParticleSpeed", void 0), _defineProperty(_assertThisInitialized(_this25), "runParticleIntervalTime", void 0), _defineProperty(_assertThisInitialized(_this25), "lineContainerIndex", void 0), _defineProperty(_assertThisInitialized(_this25), "particleContainerIndex", void 0), _defineProperty(_assertThisInitialized(_this25), "_lineContainer", void 0), _defineProperty(_assertThisInitialized(_this25), "_particleContainer", void 0);
    return _this25;
  }

  var _proto35 = AWinLinTemplate.prototype;

  _proto35.onCreate = function onCreate() {
    this.lineContainerIndex = cc.macro.MAX_ZINDEX - 1, this.particleContainerIndex = cc.macro.MAX_ZINDEX, this.runLineSpeed = .2, this.runParticleSpeed = .2, this.runParticleIntervalTime = .05, this.angle = -90, this.lineVector = cc.Vec2.UP, this.particleVector = cc.Vec2.RIGHT, this.isStop = !1;
  };

  _proto35.start = function start() {
    _AGenericTemplate9.prototype.start.call(this), this.buildWinLineContainer(), this.buildParticleContainer(), this._lineContainer = this.lineSprite.node.parent.getChildByName(LINE_CONTAINER), this._particleContainer = this.lineSprite.node.parent.getChildByName(PARTICLE_CONTAINER), this.allGridPosition = this.initWinLinPosition(), this.allWinLine = new Array(), this.allParticle = new Map();
  };

  _proto35.restoreNode = function restoreNode(t) {
    if (t) {
      this.allParticle.get(t).active = !1, this.allParticle.get(t).x = this.allWinLine[t].get(0).x;

      var e,
          i = _createForOfIteratorHelper$9(this.allWinLine[t].values());

      try {
        for (i.s(); !(e = i.n()).done;) {
          var n = e.value;
          n.active = !1, n.height = 0;
        }
      } catch (t) {
        i.e(t);
      } finally {
        i.f();
      }
    } else {
      var r,
          o = _createForOfIteratorHelper$9(this._particleContainer.children);

      try {
        for (o.s(); !(r = o.n()).done;) {
          r.value.active = !1;
        }
      } catch (t) {
        o.e(t);
      } finally {
        o.f();
      }

      var s,
          a = _createForOfIteratorHelper$9(this._lineContainer.children);

      try {
        for (a.s(); !(s = a.n()).done;) {
          var u = s.value;
          u.active = !1, u.height = 0;
        }
      } catch (t) {
        a.e(t);
      } finally {
        a.f();
      }
    }
  };

  _proto35.buildWinLineContainer = function buildWinLineContainer() {
    var t = this.lineSprite.node.parent,
        e = new cc.Node();
    e.name = LINE_CONTAINER, t.addChild(e, this.lineContainerIndex, LINE_CONTAINER);
  };

  _proto35.buildParticleContainer = function buildParticleContainer() {
    var t = this.lineSprite.node.parent,
        e = new cc.Node();
    e.name = LINE_CONTAINER, t.addChild(e, this.particleContainerIndex, PARTICLE_CONTAINER);
  };

  _proto35.play = function play(e) {
    var i = this;
    return _asyncToGenerator(_regeneratorRuntime.mark(function t() {
      return _regeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              return t.next = 2, i.runLine(e);

            case 2:
            case "end":
              return t.stop();
          }
        }
      }, t);
    }))();
  };

  _proto35.runLine = function runLine(s) {
    var a = this;
    return _asyncToGenerator(_regeneratorRuntime.mark(function t() {
      var e, i, n, r, o;
      return _regeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              e = s.length, i = 0;

            case 2:
              for (i == e && (i = 0), a.showWinPoint(i), n = s[i], r = 0; r < n.length + 1; r++) {
                o = null !== (o = n[r - 1]) && void 0 !== o ? o : n[0], a.initLinePosition(i, r, o);
              }

              return a.initParticlePosition(i, n[0]), t.next = 9, a.runLineToAsync(i, n);

            case 9:
              return t.next = 11, a.runParticleToAsync(i, n);

            case 11:
              return t.next = 13, a.hideNode(i);

            case 13:
              i++;

            case 14:
              if (!a.isStop) {
                t.next = 2;
                break;
              }

            case 15:
            case "end":
              return t.stop();
          }
        }
      }, t);
    }))();
  };

  _proto35.playAll = function playAll(e) {
    var i = this;
    return _asyncToGenerator(_regeneratorRuntime.mark(function t() {
      return _regeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              return i.showWinPoint(), t.next = 3, i.runAllLine(e);

            case 3:
            case "end":
              return t.stop();
          }
        }
      }, t);
    }))();
  };

  _proto35.runAllLine = function runAllLine(o) {
    var s = this;
    return _asyncToGenerator(_regeneratorRuntime.mark(function t() {
      var e, i;
      return _regeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              e = _regeneratorRuntime.mark(function t(e) {
                var i, n, r;
                return _regeneratorRuntime.wrap(function (t) {
                  for (;;) {
                    switch (t.prev = t.next) {
                      case 0:
                        for (i = o[e], n = 0; n < i.length + 1; n++) {
                          r = null !== (r = i[n - 1]) && void 0 !== r ? r : i[0], s.initLinePosition(e, n, r);
                        }

                        if (s.initParticlePosition(e, i[0]), e == o.length - 1) return t.next = 6, s.runLineToAsync(e, i).then();
                        t.next = 10;
                        break;

                      case 6:
                        return t.next = 8, s.runParticleToAsync(e, i);

                      case 8:
                        t.next = 11;
                        break;

                      case 10:
                        s.runLineToAsync(e, i).then(function () {
                          s.runParticleToAsync(e, i);
                        });

                      case 11:
                      case "end":
                        return t.stop();
                    }
                  }
                }, t);
              }), i = 0;

            case 2:
              if (i < o.length) return t.delegateYield(e(i), "t0", 4);
              t.next = 7;
              break;

            case 4:
              i++, t.next = 2;
              break;

            case 7:
              return t.next = 9, s.hideNode();

            case 9:
            case "end":
              return t.stop();
          }
        }
      }, t);
    }))();
  };

  _proto35.initLinePosition = function initLinePosition(t, e, i) {
    var n = 0 == e ? this.gridRow[0].x - this.gridRow[0].width : this.allGridPosition[i].keys().next().value,
        i = this.allGridPosition[i].values().next().value;
    this.allWinLine[t].get(e).x = n, this.allWinLine[t].get(e).y = i;
  };

  _proto35.initParticlePosition = function initParticlePosition(t, e) {
    var i = this.gridRow[0].x - this.gridRow[0].width,
        e = this.allGridPosition[e].values().next().value;
    this.allParticle.get(t).x = i, this.allParticle.get(t).y = e;
  };

  _proto35.getPosition = function getPosition(t, e, i) {
    var n,
        r = this.allGridPosition[i].values().next().value;
    return 0 == e ? (n = this.gridRow[0].x - this.gridRow[0].width, cc.v2(n, r)) : e == this.gridRow.length + 1 ? (e = this.gridRow[this.gridRow.length - 1].x + this.gridRow[this.gridRow.length - 1].width, cc.v2(e, r)) : cc.v2(this.allGridPosition[i].keys().next().value, r);
  };

  _proto35.runLineToAsync = function runLineToAsync(e, i) {
    var n = this;
    return _asyncToGenerator(_regeneratorRuntime.mark(function t() {
      return _regeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", new Promise(function (t) {
                n.lineToGridAnimationLoop(e, i, t);
              }));

            case 1:
            case "end":
              return t.stop();
          }
        }
      }, t);
    }))();
  };

  _proto35.lineToGridAnimationLoop = function lineToGridAnimationLoop(t, e, i) {
    var _this26 = this;

    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0,
        r = null !== (o = e[n - 1]) && void 0 !== o ? o : e[0],
        o = null !== (o = e[n]) && void 0 !== o ? o : e[e.length - 1],
        r = this.getPosition(t, n, r),
        o = this.getPosition(t, n + 1, o);
    this.allWinLine[t].get(n).angle = this.getAngleBetweenTwoPoints(r, o, this.lineVector);
    o = this.getDistanceBetweenTwoPoints(r, o);
    this.allWinLine[t].get(n).active = !0, cc.tween(this.allWinLine[t].get(n)).to(this.runLineSpeed, {
      height: o
    }).call(function () {
      _this26.isStop || n == _this26.gridRow.length ? i() : (_this26.showWinGrid(e[n], t), n++, _this26.lineToGridAnimationLoop(t, e, i, n));
    }).start();
  };

  _proto35.runParticleToAsync = function runParticleToAsync(e, i) {
    var n = this;
    return _asyncToGenerator(_regeneratorRuntime.mark(function t() {
      return _regeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", new Promise(function (t) {
                n.particleToGridAnimationLoop(e, i, t);
              }));

            case 1:
            case "end":
              return t.stop();
          }
        }
      }, t);
    }))();
  };

  _proto35.particleToGridAnimationLoop = function particleToGridAnimationLoop(t, e, i) {
    var _this27 = this;

    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0,
        r = null !== (o = e[n - 1]) && void 0 !== o ? o : e[0],
        o = null !== (o = e[n]) && void 0 !== o ? o : e[e.length - 1],
        r = this.getPosition(t, n, r),
        o = this.getPosition(t, n + 1, o);
    this.allParticle.get(t).angle = this.getAngleBetweenTwoPoints(r, o, this.particleVector), this.allParticle.get(t).active = !0, cc.tween(this.allParticle.get(t)).to(this.runParticleSpeed, {
      x: o.x,
      y: o.y
    }).call(function () {
      _this27.isStop || n == _this27.gridRow.length ? i() : (n++, _this27.particleToGridAnimationLoop(t, e, i, n));
    }).start();
  };

  _proto35.copyWinLineNode = function copyWinLineNode(t) {
    this.copyParticleToContainer(t), this.copyWinLineToContainer(t);
  };

  _proto35.copyParticleToContainer = function copyParticleToContainer(t) {
    for (var e = 0; e < t; e++) {
      var i = cc.instantiate(this.particlePrefab);
      i.active = !1, this._particleContainer.addChild(i, e, "".concat("PARTICLE").concat(e)), this.allParticle.set(e, i);
    }

    return this;
  };

  _proto35.copyWinLineToContainer = function copyWinLineToContainer(t) {
    for (var e = 0; e < t; e++) {
      for (var i = new Map(), n = 0; n < this.gridRow.length + 1; n++) {
        var r = cc.instantiate(this.lineSprite.node);
        r.active = !1, this._lineContainer.addChild(r, e, "".concat("LINE").concat(e, "_").concat(n)), i.set(n, r);
      }

      this.allWinLine.push(i);
    }

    return this;
  };

  _proto35.initWinLinPosition = function initWinLinPosition() {
    var t,
        e = new Array(),
        i = _createForOfIteratorHelper$9(this.gridRow);

    try {
      for (i.s(); !(t = i.n()).done;) {
        for (var n = t.value, r = n.x, o = n.y + this.gridHeight, s = 0; s < this.gridCont; s++) {
          var a = new Map();
          a.set(r, o), e.push(a), o -= this.gridHeight;
        }
      }
    } catch (t) {
      i.e(t);
    } finally {
      i.f();
    }

    return e;
  };

  _proto35.getDistanceBetweenTwoPoints = function getDistanceBetweenTwoPoints(t, e) {
    var i = Math.pow(e.x - t.x, 2),
        t = Math.pow(e.y - t.y, 2);
    return Math.sqrt(i + t) + 1;
  };

  _proto35.getAngleBetweenTwoPoints = function getAngleBetweenTwoPoints(t, e, i) {
    var n = e.x - t.x,
        t = e.y - t.y;
    return cc.v2(n, t).signAngle(i) * (180 / Math.PI) * -1;
  };

  _proto35.clear = function clear() {
    cc.Tween.stopAllByTarget(this._lineContainer), cc.Tween.stopAllByTarget(this._particleContainer), this.allWinLine.length = 0, this.allParticle.clear(), this._lineContainer.destroyAllChildren(), this._particleContainer.destroyAllChildren();
  };

  _createClass(AWinLinTemplate, [{
    key: "particleContainer",
    get: function get() {
      return this._particleContainer;
    }
  }, {
    key: "lineContainer",
    get: function get() {
      return this._lineContainer;
    }
  }]);

  return AWinLinTemplate;
}(AGenericTemplate),
    AWinLinTemplate$1 = AWinLinTemplate = __decorate([ccclass], AWinLinTemplate);

var AMainInitTemplate = /*#__PURE__*/function (_AGenericTemplate10) {
  _inheritsLoose(AMainInitTemplate, _AGenericTemplate10);

  function AMainInitTemplate() {
    return _AGenericTemplate10.apply(this, arguments) || this;
  }

  var _proto36 = AMainInitTemplate.prototype;

  _proto36.onLoad = function onLoad() {
    this.setHistoryDetail(), this.prefabInstantiate(), _AGenericTemplate10.prototype.onLoad.call(this);
  };

  return AMainInitTemplate;
}(AGenericTemplate);

var ASlotTemplate = /*#__PURE__*/function () {
  function ASlotTemplate(t, e) {
    _defineProperty(this, "styleData", void 0), _defineProperty(this, "isSlotImmediateStop", void 0), _defineProperty(this, "isSpeedUp", void 0), _defineProperty(this, "speedRatio", void 0), _defineProperty(this, "stopNowStateObserver", void 0), _defineProperty(this, "speedStateChangeObserver", void 0), _defineProperty(this, "responseResultObserver", void 0), _defineProperty(this, "isResultOK", void 0), this.isSpeedUp = e.isSpeedUp, this.styleData = t, this.speedRatio = this.isSpeedUp ? t.speedUpMultiple : 1, this.isResultOK = !1, this.addNotification();
  }

  var _proto37 = ASlotTemplate.prototype;

  _proto37.addNotification = function addNotification() {
    fcc.notificationMgr().getNotification(fcc.type.NotificationType.STOP_NOW).subscribe(this.getStopNowStateObserver(), !0), fcc.notificationMgr().getNotification(fcc.type.NotificationType.SPEED_CHANGE).subscribe(this.getSpeedStateChangeObserver(), !0), fcc.notificationMgr().getNotification(fcc.type.NotificationType.RESPONSE_RESULT).subscribe(this.getResponseResultObserver(), !0);
  };

  _proto37.getStopNowStateObserver = function getStopNowStateObserver() {
    var _this28 = this;

    return this.isSlotImmediateStop || (this.stopNowStateObserver = new StopNowStateObserver(function () {
      _this28.isSlotImmediateStop = !0;
    }, this)), this.stopNowStateObserver;
  };

  _proto37.getSpeedStateChangeObserver = function getSpeedStateChangeObserver() {
    var _this29 = this;

    return this.speedStateChangeObserver || (this.speedStateChangeObserver = new SpeedStateChangeObserver(function (t) {
      _this29.speedRatio = t ? _this29.styleData.speedUpMultiple : 1;
    }, this)), this.speedStateChangeObserver;
  };

  _proto37.getResponseResultObserver = function getResponseResultObserver() {
    var _this30 = this;

    return this.responseResultObserver || (this.responseResultObserver = new ResponseResultObserver(function (t) {
      t != fcc.type.ServerEventType.BET_RESULT && t != fcc.type.ServerEventType.FREE_SPIN_RESULT || (_this30.isResultOK = !0);
    }, this)), this.responseResultObserver;
  };

  return ASlotTemplate;
}();

function _createForOfIteratorHelper$a(t, e) {
  var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

  if (!i) {
    if (Array.isArray(t) || (i = _unsupportedIterableToArray$a(t)) || e && t && "number" == typeof t.length) {
      i && (t = i);

      var _n11 = 0,
          e = function e() {};

      return {
        s: e,
        n: function n() {
          return _n11 >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[_n11++]
          };
        },
        e: function e(t) {
          throw t;
        },
        f: e
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var r,
      o = !0,
      s = !1;
  return {
    s: function s() {
      i = i.call(t);
    },
    n: function n() {
      var t = i.next();
      return o = t.done, t;
    },
    e: function e(t) {
      s = !0, r = t;
    },
    f: function f() {
      try {
        o || null == i["return"] || i["return"]();
      } finally {
        if (s) throw r;
      }
    }
  };
}

function _unsupportedIterableToArray$a(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray$a(t, e);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    return "Map" === (i = "Object" === i && t.constructor ? t.constructor.name : i) || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray$a(t, e) : void 0;
  }
}

function _arrayLikeToArray$a(t, e) {
  (null == e || e > t.length) && (e = t.length);

  for (var i = 0, n = new Array(e); i < e; i++) {
    n[i] = t[i];
  }

  return n;
}

var NormalSlotTemplate = /*#__PURE__*/function (_ASlotTemplate) {
  _inheritsLoose(NormalSlotTemplate, _ASlotTemplate);

  function NormalSlotTemplate(t, e) {
    var _this31;

    _this31 = _ASlotTemplate.call(this, t, e) || this, _defineProperty(_assertThisInitialized(_this31), "slotTurnCount", void 0), _defineProperty(_assertThisInitialized(_this31), "slotGirdSpeed", void 0), _defineProperty(_assertThisInitialized(_this31), "slotRowGridCount", void 0), _defineProperty(_assertThisInitialized(_this31), "slotGridHeight", void 0), _defineProperty(_assertThisInitialized(_this31), "freeIconCount", void 0), _defineProperty(_assertThisInitialized(_this31), "speedUpMultiple", void 0), _defineProperty(_assertThisInitialized(_this31), "slotColumnToTween", void 0), _defineProperty(_assertThisInitialized(_this31), "gridNodeToMap", void 0), _defineProperty(_assertThisInitialized(_this31), "gridSpriteToMap", void 0), _defineProperty(_assertThisInitialized(_this31), "gridImg", void 0), _defineProperty(_assertThisInitialized(_this31), "sineInEasing", void 0), _defineProperty(_assertThisInitialized(_this31), "sineOutEasing", void 0), _defineProperty(_assertThisInitialized(_this31), "isSlotEnd", void 0), _defineProperty(_assertThisInitialized(_this31), "isRowCheckLookAt", void 0), _defineProperty(_assertThisInitialized(_this31), "rowData", void 0), _defineProperty(_assertThisInitialized(_this31), "resultModel", void 0), _defineProperty(_assertThisInitialized(_this31), "lookAtCount", void 0), _defineProperty(_assertThisInitialized(_this31), "rowTurnCount", void 0), t && (_this31.styleData = t, _this31.slotTurnCount = t.slotTurnCount, _this31.slotGirdSpeed = t.slotGirdSpeed, _this31.slotRowGridCount = t.slotRowGridCount, _this31.slotGridHeight = t.slotGridHeight, _this31.speedUpMultiple = t.speedUpMultiple, _this31.slotColumnToTween = t.slotColumnToTween, _this31.gridNodeToMap = t.gridNodeToMap, _this31.gridSpriteToMap = t.gridSpriteToMap, _this31.gridImg = t.gridImg, _this31.sineInEasing = t.sineInEasing, _this31.sineOutEasing = t.sineOutEasing, _this31.resultModel = t.resultModule, _this31.rowData = new Array(), _this31.lookAtCount = t.lookAtCount, _this31.isSlotEnd = [], _this31.rowData.push(_this31.slotRowGridCount, _this31.getCalculateSlotHeight()), _this31.rowTurnCount = new Array(), _this31.isRowCheckLookAt = new Map(), _this31.initializeState());
    return _this31;
  }

  var _proto38 = NormalSlotTemplate.prototype;

  _proto38.getCalculateSlotHeight = function getCalculateSlotHeight() {
    return this.slotRowGridCount * this.slotGridHeight;
  };

  _proto38.sineInSlot = function sineInSlot() {
    var _this32 = this;

    var s = Math.floor(this.styleData.slotGridHeight / 2);
    return new Promise(function (t) {
      var e,
          i = 0,
          n = _this32.slotGirdSpeed,
          r = _createForOfIteratorHelper$a(_this32.slotColumnToTween);

      try {
        for (r.s(); !(e = r.n()).done;) {
          var o = e.value;
          cc.tween(o).to(1.5 * n, {
            y: o.y + s
          }, {
            easing: _this32.sineInEasing
          }).by(n, {
            y: -s
          }).call(function () {
            ++i === _this32.slotColumnToTween.length && t();
          }).start();
        }
      } catch (t) {
        r.e(t);
      } finally {
        r.f();
      }
    });
  };

  _proto38.runSlotAnimation = function runSlotAnimation() {
    var _this33 = this;

    return new Promise(function (t) {
      var e = _this33.slotColumnToTween.length;
      fcc.audioMgr.effectPlay("SlotTurn");

      for (var i = 0; i < e; i++) {
        if (i == e - 1) return void _this33.executeSlotAnimation(i, t);

        _this33.executeSlotAnimation(i);
      }
    });
  };

  _proto38.executeSlotAnimation = function executeSlotAnimation(t, e) {
    var _this34 = this;

    var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
        n = this.slotGirdSpeed * this.slotRowGridCount / this.speedRatio,
        r = this.slotColumnToTween[t];
    cc.tween(r).to(n, {
      y: r.y - this.rowData[1]
    }).call(function () {
      (0 != t && _this34.checkLookAt(t) && _this34.isSlotEnd[t - 1] && !_this34.isSpeedUp || 0 == t && _this34.checkLookAt(t) && !_this34.isSpeedUp) && _this34.notifyLookAtEvent(!0, t), _this34.updateGridPositionAndRandomImg(_this34.gridNodeToMap.get(t), t), _this34.isResultOK ? _this34.isCanStop(t, e) || (i++, 0 == t && i == _this34.getSlotTurnCount(t) ? (1 == _this34.resultModel.LookAt[t] && (_this34.isSpeedUp || _this34.notifyLookAtEvent(!1, t)), _this34.showAnswer(t), _this34.isSlotEnd[t] = !0) : 0 != t && _this34.isSlotEnd[t - 1] && i == _this34.getSlotTurnCount(t) ? (_this34.showAnswer(t, e), _this34.isSlotEnd[t] = !0, _this34.checkLookAt(t) && (_this34.isSpeedUp || _this34.notifyLookAtEvent(!1, t))) : _this34.executeSlotAnimation(t, e, i)) : _this34.executeSlotAnimation(t, e, i);
    }).start();
  };

  _proto38.getSlotTurnCount = function getSlotTurnCount(t) {
    var e = this.isSpeedUp ? this.slotTurnCount : this.checkLookAt(t) ? ((e = 0) != t && (e = this.rowTurnCount[t - 1]), this.lookAtCount + e) : this.slotTurnCount + t;
    return this.rowTurnCount[t] || (this.rowTurnCount[t] = e), e;
  };

  _proto38.notifyLookAtEvent = function notifyLookAtEvent(t, e) {
    fcc.notificationMgr().getNotification(fcc.type.NotificationType.SCROLL_FOCUS_STATE).notify(e, t);
  };

  _proto38.isCanStop = function isCanStop(t, e) {
    return !!this.isSlotImmediateStop && (t == this.slotColumnToTween.length - 1 ? this.showAnswer(t, e) : this.showAnswer(t), this.isSlotEnd[t] = !0, this.checkLookAt(t) && this.notifyLookAtEvent(!1, t), !0);
  };

  _proto38.updateGridPositionAndRandomImg = function updateGridPositionAndRandomImg(t, e) {
    for (var i, n = t.length - 1, r = 0; r < this.rowData[0]; r++) {
      i = this.gridSpriteToMap.get(e)[n], this.gridSpriteToMap.get(e).unshift(i), this.gridSpriteToMap.get(e).pop(), i = Math.floor(Math.random() * this.gridImg.size), this.gridSpriteToMap.get(e)[0].spriteFrame = this.gridImg.get(String(i)), t[n].y = t[0].y + this.slotGridHeight, t.unshift(t[n]), t.pop();
    }
  };

  _proto38.showAnswer = function showAnswer(t, e) {
    var _this35 = this;

    this.updateGridAnswer(t);
    var i = this.slotGirdSpeed * this.rowData[0] / this.speedRatio,
        n = this.slotColumnToTween[t];
    cc.tween(n).to(i, {
      y: n.y - this.rowData[1]
    }).call(function () {
      _this35.updateGridPositionAndRandomImg(_this35.gridNodeToMap.get(t), t), _this35.sineOutAnimation(t, e);
    }).start();
  };

  _proto38.checkLookAt = function checkLookAt(t) {
    var e = !1;
    return this.isRowCheckLookAt.get(t) || (this.isRowCheckLookAt.set(t, !0), e = !!this.resultModel.LookAt[t]), e;
  };

  _proto38.sineOutAnimation = function sineOutAnimation(t, e) {
    var _this36 = this;

    (this.isSpeedUp || this.isSlotImmediateStop) && t != this.slotColumnToTween.length - 1 || fcc.audioMgr.effectPlay("SlotStop"), t === this.slotColumnToTween.length - 1 && fcc.audioMgr.effectStop("SlotTurn");
    var i = Math.floor(this.styleData.slotGridHeight / 2),
        n = this.slotColumnToTween[t],
        r = !1;
    (this.isSlotImmediateStop || this.isSpeedUp) && (r = !0), fcc.notificationMgr().getNotification(fcc.type.NotificationType.SLOT_ROW_END).notify(t, r);
    r = this.slotGirdSpeed;
    cc.tween(n).to(r, {
      y: n.y - i
    }).by(6 * r, {
      y: +i
    }, {
      easing: this.sineOutEasing
    }).call(function () {
      t === _this36.slotColumnToTween.length - 1 && e();
    }).start();
  };

  _proto38.updateGridAnswer = function updateGridAnswer(t) {
    for (var e = t * this.slotRowGridCount, i = e + this.slotRowGridCount, n = 0; e < i; e++) {
      var r = String(this.resultModel.Grid[e]);
      this.gridSpriteToMap.get(t)[n].spriteFrame = this.gridImg.get(r), n++;
    }
  };

  _proto38.initializeState = function initializeState() {
    if (this.isSlotImmediateStop = !1, this.isSpeedUp = 1 < this.speedRatio, this.freeIconCount = 0, this.isResultOK = !1, this.rowTurnCount.length = 0, this.isRowCheckLookAt.clear(), 0 == this.isSlotEnd.length) for (var t = 0; t < this.slotColumnToTween.length; t++) {
      this.isSlotEnd.push(!1);
    } else for (var e = 0; e < this.slotColumnToTween.length; e++) {
      this.isSlotEnd[e] = !1;
    }
  };

  return NormalSlotTemplate;
}(ASlotTemplate);

function _createForOfIteratorHelper$b(t, e) {
  var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

  if (!i) {
    if (Array.isArray(t) || (i = _unsupportedIterableToArray$b(t)) || e && t && "number" == typeof t.length) {
      i && (t = i);

      var _n12 = 0,
          e = function e() {};

      return {
        s: e,
        n: function n() {
          return _n12 >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[_n12++]
          };
        },
        e: function e(t) {
          throw t;
        },
        f: e
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var r,
      o = !0,
      s = !1;
  return {
    s: function s() {
      i = i.call(t);
    },
    n: function n() {
      var t = i.next();
      return o = t.done, t;
    },
    e: function e(t) {
      s = !0, r = t;
    },
    f: function f() {
      try {
        o || null == i["return"] || i["return"]();
      } finally {
        if (s) throw r;
      }
    }
  };
}

function _unsupportedIterableToArray$b(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray$b(t, e);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    return "Map" === (i = "Object" === i && t.constructor ? t.constructor.name : i) || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray$b(t, e) : void 0;
  }
}

function _arrayLikeToArray$b(t, e) {
  (null == e || e > t.length) && (e = t.length);

  for (var i = 0, n = new Array(e); i < e; i++) {
    n[i] = t[i];
  }

  return n;
}

var NormalSlotSpecialTemplate = /*#__PURE__*/function (_ASlotTemplate2) {
  _inheritsLoose(NormalSlotSpecialTemplate, _ASlotTemplate2);

  function NormalSlotSpecialTemplate(t, e) {
    var _this37;

    _this37 = _ASlotTemplate2.call(this, t, e) || this, _defineProperty(_assertThisInitialized(_this37), "slotTurnCount", void 0), _defineProperty(_assertThisInitialized(_this37), "slotRowTime", void 0), _defineProperty(_assertThisInitialized(_this37), "slotGirdSpeed", void 0), _defineProperty(_assertThisInitialized(_this37), "slotRowGridCount", void 0), _defineProperty(_assertThisInitialized(_this37), "slotGridHeight", void 0), _defineProperty(_assertThisInitialized(_this37), "speedUpMultiple", void 0), _defineProperty(_assertThisInitialized(_this37), "slotColumnToTween", void 0), _defineProperty(_assertThisInitialized(_this37), "lookAtTime", void 0), _defineProperty(_assertThisInitialized(_this37), "gridNodeToMap", void 0), _defineProperty(_assertThisInitialized(_this37), "gridSpriteToMap", void 0), _defineProperty(_assertThisInitialized(_this37), "gridImg", void 0), _defineProperty(_assertThisInitialized(_this37), "sineInEasing", void 0), _defineProperty(_assertThisInitialized(_this37), "sineOutEasing", void 0), _defineProperty(_assertThisInitialized(_this37), "isSlotEnd", void 0), _defineProperty(_assertThisInitialized(_this37), "isTimeEndListener", void 0), _defineProperty(_assertThisInitialized(_this37), "isRowCheckLookAt", void 0), _defineProperty(_assertThisInitialized(_this37), "resultModel", void 0), _defineProperty(_assertThisInitialized(_this37), "nowTimer", void 0), t && (_this37.styleData = t, _this37.slotRowTime = t.slotRowTime, _this37.slotTurnCount = t.slotTurnCount, _this37.slotGirdSpeed = t.slotGirdSpeed, _this37.slotRowGridCount = t.slotRowGridCount, _this37.slotGridHeight = t.slotGridHeight, _this37.speedUpMultiple = t.speedUpMultiple, _this37.slotColumnToTween = t.slotColumnToTween, _this37.gridNodeToMap = t.gridNodeToMap, _this37.gridSpriteToMap = t.gridSpriteToMap, _this37.gridImg = t.gridImg, _this37.sineInEasing = t.sineInEasing, _this37.sineOutEasing = t.sineOutEasing, _this37.resultModel = t.resultModule, _this37.lookAtTime = t.lookAtTime, _this37.isSlotEnd = new Array(), _this37.isTimeEndListener = new Array(), _this37.isRowCheckLookAt = new Map(), _this37.initializeState());
    return _this37;
  }

  var _proto39 = NormalSlotSpecialTemplate.prototype;

  _proto39.sineInSlot = function sineInSlot() {
    var _this38 = this;

    var s = Math.floor(this.styleData.slotGridHeight / 2);
    return new Promise(function (t) {
      var e,
          i = 0,
          n = _this38.slotGirdSpeed,
          r = _createForOfIteratorHelper$b(_this38.slotColumnToTween);

      try {
        for (r.s(); !(e = r.n()).done;) {
          var o = e.value;
          cc.tween(o).to(1.5 * n, {
            y: o.y + s
          }, {
            easing: _this38.sineInEasing
          }).by(n, {
            y: -s
          }).call(function () {
            ++i === _this38.slotColumnToTween.length && t();
          }).start();
        }
      } catch (t) {
        r.e(t);
      } finally {
        r.f();
      }
    });
  };

  _proto39.runSlotAnimation = function runSlotAnimation() {
    var _this39 = this;

    return new Promise(function (t) {
      for (var e = _this39.slotColumnToTween.length, i = 0; i < e; i++) {
        if (i == e - 1) return void _this39.executeSlotAnimation(i, t);

        _this39.executeSlotAnimation(i);
      }
    });
  };

  _proto39.executeSlotAnimation = function executeSlotAnimation(t, e) {
    var _this40 = this;

    var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
        n = this.slotGirdSpeed / this.speedRatio,
        r = this.slotColumnToTween[t],
        o = this.slotTurnCount * this.slotRowGridCount;
    cc.tween(r).to(n, {
      y: r.y - this.slotGridHeight
    }).call(function () {
      0 != t && _this40.isSlotEnd[t - 1] && !_this40.isSpeedUp ? _this40.checkLookAt(t) && _this40.notifyLookAtEvent(!0, t) : 0 == t && _this40.checkLookAt(t) && !_this40.isSpeedUp && _this40.notifyLookAtEvent(!0, t), _this40.updateOnlyGridPositionAndRandomImg(_this40.gridNodeToMap.get(t), t), _this40.isResultOK ? _this40.checkImmediateStopState(t, e) || (i < o && i++, 0 == t && i == o ? (1 == _this40.resultModel.LookAt[t] && (_this40.isSpeedUp || _this40.notifyLookAtEvent(!1, t)), _this40.isSlotEnd[t] = !0, _this40.isTimeEndListener[t] = !0, _this40.showAnswerAnimation(t), _this40.isSpeedUp || _this40.startRowTimeListener(t + 1)) : 0 != t && i == o && _this40.isSpeedUp ? (_this40.isSlotEnd[t] = !0, _this40.showAnswerAnimation(t, e)) : 0 != t && _this40.isSlotEnd[t] && !_this40.isSpeedUp ? (t != _this40.slotColumnToTween.length - 1 && _this40.startRowTimeListener(t + 1), 1 == _this40.resultModel.LookAt[t] && (_this40.isSpeedUp || _this40.notifyLookAtEvent(!1, t)), _this40.showAnswerAnimation(t, e)) : _this40.executeSlotAnimation(t, e, i)) : _this40.executeSlotAnimation(t, e, i);
    }).start();
  };

  _proto39.startRowTimeListener = function startRowTimeListener(t) {
    var _this41 = this;

    var e;
    this.isTimeEndListener[t] || (this.isTimeEndListener[t] = !0, e = this.resultModel.LookAt[t] ? this.lookAtTime : this.slotRowTime, this.nowTimer = window.setTimeout(function () {
      _this41.isSlotEnd[t] = !0;
    }, e));
  };

  _proto39.updateOnlyGridPositionAndRandomImg = function updateOnlyGridPositionAndRandomImg(t, e) {
    var i = t.length - 1,
        n = this.gridSpriteToMap.get(e)[i];
    this.gridSpriteToMap.get(e).unshift(n), this.gridSpriteToMap.get(e).pop(), n = Math.floor(Math.random() * this.gridImg.size), this.gridSpriteToMap.get(e)[0].spriteFrame = this.gridImg.get(String(n)), t[i].y = t[0].y + this.slotGridHeight, t.unshift(t[i]), t.pop();
  };

  _proto39.notifyLookAtEvent = function notifyLookAtEvent(t, e) {
    fcc.notificationMgr().getNotification(fcc.type.NotificationType.SCROLL_FOCUS_STATE).notify(e, t);
  };

  _proto39.checkImmediateStopState = function checkImmediateStopState(t, e) {
    return !!this.isSlotImmediateStop && (this.nowTimer && (window.clearTimeout(this.nowTimer), this.nowTimer = null), t == this.slotColumnToTween.length - 1 ? this.showAnswerAnimation(t, e) : this.showAnswerAnimation(t), this.isSlotEnd[t] = !0, 1 == this.resultModel.LookAt[t] && this.notifyLookAtEvent(!1, t), !0);
  };

  _proto39.showAnswerAnimation = function showAnswerAnimation(e, i) {
    var _this42 = this;

    this.updateGridAnswer(e);
    var t = this.slotGirdSpeed * this.slotRowGridCount / this.speedRatio,
        n = this.slotColumnToTween[e],
        r = this.slotRowGridCount * this.slotGridHeight;
    cc.tween(n).to(t, {
      y: n.y - r
    }).call(function () {
      for (var t = 0; t < _this42.slotRowGridCount; t++) {
        _this42.updateOnlyGridPositionAndRandomImg(_this42.gridNodeToMap.get(e), e);
      }

      _this42.sineOutAnimation(e, i);
    }).start();
  };

  _proto39.checkLookAt = function checkLookAt(t) {
    var e = !1;
    return this.isRowCheckLookAt.get(t) || (this.isRowCheckLookAt.set(t, !0), e = !!this.resultModel.LookAt[t]), e;
  };

  _proto39.sineOutAnimation = function sineOutAnimation(t, e) {
    var _this43 = this;

    (this.isSpeedUp || this.isSlotImmediateStop) && t != this.slotColumnToTween.length - 1 || fcc.audioMgr.effectPlay("SlotStop"), t === this.slotColumnToTween.length - 1 && fcc.audioMgr.effectStop("SlotTurn");
    var i = Math.floor(this.styleData.slotGridHeight / 2),
        n = this.slotColumnToTween[t],
        r = !1;
    (this.isSlotImmediateStop || this.isSpeedUp) && (r = !0), fcc.notificationMgr().getNotification(fcc.type.NotificationType.SLOT_ROW_END).notify(t, r);
    r = this.slotGirdSpeed;
    cc.tween(n).to(r, {
      y: n.y - i
    }).by(6 * r, {
      y: +i
    }, {
      easing: this.sineOutEasing
    }).call(function () {
      t === _this43.slotColumnToTween.length - 1 && e();
    }).start();
  };

  _proto39.updateGridAnswer = function updateGridAnswer(t) {
    for (var e = t * this.slotRowGridCount, i = e + this.slotRowGridCount, n = 0; e < i; e++) {
      var r = String(this.resultModel.Grid[e]);
      this.gridSpriteToMap.get(t)[n].spriteFrame = this.gridImg.get(r), n++;
    }
  };

  _proto39.initializeState = function initializeState() {
    if (this.isSlotImmediateStop = !1, this.isSpeedUp = 1 < this.speedRatio, this.isResultOK = !1, this.nowTimer = null, this.isRowCheckLookAt.clear(), 0 == this.isTimeEndListener.length) for (var t = 0; t < this.slotColumnToTween.length; t++) {
      this.isTimeEndListener.push(!1);
    } else for (var e = 0; e < this.slotColumnToTween.length; e++) {
      this.isTimeEndListener[e] = !1;
    }
    if (0 == this.isSlotEnd.length) for (var i = 0; i < this.slotColumnToTween.length; i++) {
      this.isSlotEnd.push(!1);
    } else for (var n = 0; n < this.slotColumnToTween.length; n++) {
      this.isSlotEnd[n] = !1;
    }
  };

  return NormalSlotSpecialTemplate;
}(ASlotTemplate);

__decorate([fcc.Effect("SlotTurn"), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Promise)], NormalSlotSpecialTemplate.prototype, "runSlotAnimation", null);

var SlotBurredImgTemplate = /*#__PURE__*/function (_NormalSlotTemplate) {
  _inheritsLoose(SlotBurredImgTemplate, _NormalSlotTemplate);

  function SlotBurredImgTemplate(t, e) {
    var _this44;

    _this44 = _NormalSlotTemplate.call(this, t, e) || this, _defineProperty(_assertThisInitialized(_this44), "gridBurredImg", void 0), _this44.gridBurredImg = t.gridBurredImg;
    return _this44;
  }

  var _proto40 = SlotBurredImgTemplate.prototype;

  _proto40.updateGridPositionAndRandomImg = function updateGridPositionAndRandomImg(t, e) {
    for (var i, n = t.length - 1, r = 0; r < this.rowData[0]; r++) {
      i = this.gridSpriteToMap.get(e)[n], this.gridSpriteToMap.get(e).unshift(i), this.gridSpriteToMap.get(e).pop(), i = Math.floor(Math.random() * this.gridBurredImg.size), this.gridSpriteToMap.get(e)[0].spriteFrame = this.gridBurredImg.get(String(i)), t[n].y = t[0].y + this.slotGridHeight, t.unshift(t[n]), t.pop();
    }
  };

  return SlotBurredImgTemplate;
}(NormalSlotTemplate);

var SlotBurredImgSpecialTemplate = /*#__PURE__*/function (_NormalSlotSpecialTem) {
  _inheritsLoose(SlotBurredImgSpecialTemplate, _NormalSlotSpecialTem);

  function SlotBurredImgSpecialTemplate(t, e) {
    var _this45;

    _this45 = _NormalSlotSpecialTem.call(this, t, e) || this, _defineProperty(_assertThisInitialized(_this45), "gridBurredImg", void 0), _this45.gridBurredImg = t.gridBurredImg;
    return _this45;
  }

  var _proto41 = SlotBurredImgSpecialTemplate.prototype;

  _proto41.updateOnlyGridPositionAndRandomImg = function updateOnlyGridPositionAndRandomImg(t, e) {
    var i = t.length - 1,
        n = this.gridSpriteToMap.get(e)[i];
    this.gridSpriteToMap.get(e).unshift(n), this.gridSpriteToMap.get(e).pop(), n = Math.floor(Math.random() * this.gridImg.size), this.gridSpriteToMap.get(e)[0].spriteFrame = this.gridBurredImg.get(String(n)), t[i].y = t[0].y + this.slotGridHeight, t.unshift(t[i]), t.pop();
  };

  return SlotBurredImgSpecialTemplate;
}(NormalSlotSpecialTemplate);

var ASlotInitializeTemplate = /*#__PURE__*/function (_AGenericTemplate11) {
  _inheritsLoose(ASlotInitializeTemplate, _AGenericTemplate11);

  function ASlotInitializeTemplate() {
    return _AGenericTemplate11.apply(this, arguments) || this;
  }

  var _proto42 = ASlotInitializeTemplate.prototype;

  _proto42.onLoad = function onLoad() {
    _AGenericTemplate11.prototype.onLoad.call(this);
  };

  _proto42.start = function start() {
    _AGenericTemplate11.prototype.start.call(this), this.slotStyleSetting();
  };

  return ASlotInitializeTemplate;
}(AGenericTemplate);

var ExtendHasLineFreeResult = /*#__PURE__*/function () {
  function ExtendHasLineFreeResult() {
    _defineProperty(this, "_State", void 0), _defineProperty(this, "_Grid", void 0), _defineProperty(this, "_StickySymbol", void 0), _defineProperty(this, "_StickyChange", void 0), _defineProperty(this, "_LineWin", void 0), _defineProperty(this, "_LineGrid", void 0), _defineProperty(this, "_TotalWinPoint", void 0), _defineProperty(this, "_UserPointAfter", void 0), _defineProperty(this, "_GameState", void 0), _defineProperty(this, "_Count", void 0), _defineProperty(this, "_FreeSpinWin", void 0), _defineProperty(this, "_LookAt", void 0), _defineProperty(this, "_FreeToFree", void 0), _defineProperty(this, "_BaseLevelWin", void 0), _defineProperty(this, "_FreeLevelWin", void 0), this._State = 0, this._Grid = new Array(), this._StickySymbol = 0, this._StickyChange = new Array(), this._LineWin = new Array(), this._LineGrid = new Array(), this._TotalWinPoint = 0, this._UserPointAfter = 0, this._GameState = 0, this._Count = 0, this._FreeSpinWin = 0, this._LookAt = new Array(), this._FreeToFree = 0, this._BaseLevelWin = 0, this._FreeLevelWin = 0;
  }

  _createClass(ExtendHasLineFreeResult, [{
    key: "State",
    get: function get() {
      return this._State;
    },
    set: function set(t) {
      this._State = t;
    }
  }, {
    key: "Grid",
    get: function get() {
      return this._Grid;
    },
    set: function set(t) {
      this._Grid = t;
    }
  }, {
    key: "StickySymbol",
    get: function get() {
      return this._StickySymbol;
    },
    set: function set(t) {
      this._StickySymbol = t;
    }
  }, {
    key: "StickyChange",
    get: function get() {
      return this._StickyChange;
    },
    set: function set(t) {
      this._StickyChange = t;
    }
  }, {
    key: "LineWin",
    get: function get() {
      return this._LineWin;
    },
    set: function set(t) {
      this._LineWin = t;
    }
  }, {
    key: "LineGrid",
    get: function get() {
      return this._LineGrid;
    },
    set: function set(t) {
      this._LineGrid = t;
    }
  }, {
    key: "TotalWinPoint",
    get: function get() {
      return this._TotalWinPoint;
    },
    set: function set(t) {
      this._TotalWinPoint = t;
    }
  }, {
    key: "UserPointAfter",
    get: function get() {
      return this._UserPointAfter;
    },
    set: function set(t) {
      this._UserPointAfter = t;
    }
  }, {
    key: "GameState",
    get: function get() {
      return this._GameState;
    },
    set: function set(t) {
      this._GameState = t;
    }
  }, {
    key: "Count",
    get: function get() {
      return this._Count;
    },
    set: function set(t) {
      this._Count = t;
    }
  }, {
    key: "FreeSpinWin",
    get: function get() {
      return this._FreeSpinWin;
    },
    set: function set(t) {
      this._FreeSpinWin = t;
    }
  }, {
    key: "LookAt",
    get: function get() {
      return this._LookAt;
    },
    set: function set(t) {
      this._LookAt = t;
    }
  }, {
    key: "FreeToFree",
    get: function get() {
      return this._FreeToFree;
    },
    set: function set(t) {
      this._FreeToFree = t;
    }
  }, {
    key: "BaseLevelWin",
    get: function get() {
      return this._BaseLevelWin;
    },
    set: function set(t) {
      this._BaseLevelWin = t;
    }
  }, {
    key: "FreeLevelWin",
    get: function get() {
      return this._FreeLevelWin;
    },
    set: function set(t) {
      this._FreeLevelWin = t;
    }
  }]);

  return ExtendHasLineFreeResult;
}();

var HasLineFreeResult = /*#__PURE__*/function () {
  function HasLineFreeResult() {
    _defineProperty(this, "_State", void 0), _defineProperty(this, "_Grid", void 0), _defineProperty(this, "_ChangeState", void 0), _defineProperty(this, "_Change", void 0), _defineProperty(this, "_LineWin", void 0), _defineProperty(this, "_LineGrid", void 0), _defineProperty(this, "_TotalWinPoint", void 0), _defineProperty(this, "_UserPointAfter", void 0), _defineProperty(this, "_GameState", void 0), _defineProperty(this, "_Count", void 0), _defineProperty(this, "_FreeSpinWin", void 0), _defineProperty(this, "_LookAt", void 0), _defineProperty(this, "_LevelWin", void 0), _defineProperty(this, "_FreeToFree", void 0), _defineProperty(this, "_BaseLevelWin", void 0), _defineProperty(this, "_FreeLevelWin", void 0), this._State = 0, this._Grid = new Array(), this._ChangeState = 0, this._Change = new Array(), this._LineWin = new Array(), this._LineGrid = new Array(), this._TotalWinPoint = 0, this._UserPointAfter = 0, this._GameState = 0, this._Count = 0, this._FreeSpinWin = 0, this._LookAt = new Array(), this._LevelWin = 0, this._FreeToFree = 0, this._BaseLevelWin = 0, this._FreeLevelWin = 0;
  }

  _createClass(HasLineFreeResult, [{
    key: "State",
    get: function get() {
      return this._State;
    },
    set: function set(t) {
      this._State = t;
    }
  }, {
    key: "Grid",
    get: function get() {
      return this._Grid;
    },
    set: function set(t) {
      this._Grid = t;
    }
  }, {
    key: "ChangeState",
    get: function get() {
      return this._ChangeState;
    },
    set: function set(t) {
      this._ChangeState = t;
    }
  }, {
    key: "Change",
    get: function get() {
      return this._Change;
    },
    set: function set(t) {
      this._Change = t;
    }
  }, {
    key: "LineWin",
    get: function get() {
      return this._LineWin;
    },
    set: function set(t) {
      this._LineWin = t;
    }
  }, {
    key: "LineGrid",
    get: function get() {
      return this._LineGrid;
    },
    set: function set(t) {
      this._LineGrid = t;
    }
  }, {
    key: "TotalWinPoint",
    get: function get() {
      return this._TotalWinPoint;
    },
    set: function set(t) {
      this._TotalWinPoint = t;
    }
  }, {
    key: "UserPointAfter",
    get: function get() {
      return this._UserPointAfter;
    },
    set: function set(t) {
      this._UserPointAfter = t;
    }
  }, {
    key: "GameState",
    get: function get() {
      return this._GameState;
    },
    set: function set(t) {
      this._GameState = t;
    }
  }, {
    key: "Count",
    get: function get() {
      return this._Count;
    },
    set: function set(t) {
      this._Count = t;
    }
  }, {
    key: "FreeSpinWin",
    get: function get() {
      return this._FreeSpinWin;
    },
    set: function set(t) {
      this._FreeSpinWin = t;
    }
  }, {
    key: "LookAt",
    get: function get() {
      return this._LookAt;
    },
    set: function set(t) {
      this._LookAt = t;
    }
  }, {
    key: "LevelWin",
    get: function get() {
      return this._LevelWin;
    },
    set: function set(t) {
      this._LevelWin = t;
    }
  }, {
    key: "FreeToFree",
    get: function get() {
      return this._FreeToFree;
    },
    set: function set(t) {
      this._FreeToFree = t;
    }
  }, {
    key: "BaseLevelWin",
    get: function get() {
      return this._BaseLevelWin;
    },
    set: function set(t) {
      this._BaseLevelWin = t;
    }
  }, {
    key: "FreeLevelWin",
    get: function get() {
      return this._FreeLevelWin;
    },
    set: function set(t) {
      this._FreeLevelWin = t;
    }
  }]);

  return HasLineFreeResult;
}();

var NoLineFreeResult = /*#__PURE__*/function () {
  function NoLineFreeResult() {
    _defineProperty(this, "_State", void 0), _defineProperty(this, "_Grid", void 0), _defineProperty(this, "_ChangeState", void 0), _defineProperty(this, "_Change", void 0), _defineProperty(this, "_GridWin", void 0), _defineProperty(this, "_TotalWinPoint", void 0), _defineProperty(this, "_UserPointAfter", void 0), _defineProperty(this, "_GameState", void 0), _defineProperty(this, "_Count", void 0), _defineProperty(this, "_FreeSpinWin", void 0), _defineProperty(this, "_LookAt", void 0), _defineProperty(this, "_LevelWin", void 0), _defineProperty(this, "_FreeToFree", void 0), _defineProperty(this, "_BaseLevelWin", void 0), _defineProperty(this, "_FreeLevelWin", void 0), this._State = 0, this._Grid = new Array(), this._ChangeState = 0, this._Change = new Array(), this._GridWin = new Array(), this._TotalWinPoint = 0, this._UserPointAfter = 0, this._GameState = 0, this._Count = 0, this._FreeSpinWin = 0, this._LookAt = new Array(), this._LevelWin = 0, this._FreeToFree = 0, this._BaseLevelWin = 0, this._FreeLevelWin = 0;
  }

  _createClass(NoLineFreeResult, [{
    key: "State",
    get: function get() {
      return this._State;
    },
    set: function set(t) {
      this._State = t;
    }
  }, {
    key: "Grid",
    get: function get() {
      return this._Grid;
    },
    set: function set(t) {
      this._Grid = t;
    }
  }, {
    key: "ChangeState",
    get: function get() {
      return this._ChangeState;
    },
    set: function set(t) {
      this._ChangeState = t;
    }
  }, {
    key: "Change",
    get: function get() {
      return this._Change;
    },
    set: function set(t) {
      this._Change = t;
    }
  }, {
    key: "GridWin",
    get: function get() {
      return this._GridWin;
    },
    set: function set(t) {
      this._GridWin = t;
    }
  }, {
    key: "TotalWinPoint",
    get: function get() {
      return this._TotalWinPoint;
    },
    set: function set(t) {
      this._TotalWinPoint = t;
    }
  }, {
    key: "UserPointAfter",
    get: function get() {
      return this._UserPointAfter;
    },
    set: function set(t) {
      this._UserPointAfter = t;
    }
  }, {
    key: "GameState",
    get: function get() {
      return this._GameState;
    },
    set: function set(t) {
      this._GameState = t;
    }
  }, {
    key: "Count",
    get: function get() {
      return this._Count;
    },
    set: function set(t) {
      this._Count = t;
    }
  }, {
    key: "FreeSpinWin",
    get: function get() {
      return this._FreeSpinWin;
    },
    set: function set(t) {
      this._FreeSpinWin = t;
    }
  }, {
    key: "LookAt",
    get: function get() {
      return this._LookAt;
    },
    set: function set(t) {
      this._LookAt = t;
    }
  }, {
    key: "LevelWin",
    get: function get() {
      return this._LevelWin;
    },
    set: function set(t) {
      this._LevelWin = t;
    }
  }, {
    key: "FreeToFree",
    get: function get() {
      return this._FreeToFree;
    },
    set: function set(t) {
      this._FreeToFree = t;
    }
  }, {
    key: "BaseLevelWin",
    get: function get() {
      return this._BaseLevelWin;
    },
    set: function set(t) {
      this._BaseLevelWin = t;
    }
  }, {
    key: "FreeLevelWin",
    get: function get() {
      return this._FreeLevelWin;
    },
    set: function set(t) {
      this._FreeLevelWin = t;
    }
  }]);

  return NoLineFreeResult;
}();

var ExtendHasLineResult = /*#__PURE__*/function () {
  function ExtendHasLineResult() {
    _defineProperty(this, "_State", void 0), _defineProperty(this, "_Grid", void 0), _defineProperty(this, "_SecretState", void 0), _defineProperty(this, "_SecretChange", void 0), _defineProperty(this, "_SecretSymbol", void 0), _defineProperty(this, "_LineWin", void 0), _defineProperty(this, "_LineGrid", void 0), _defineProperty(this, "_TotalWinPoint", void 0), _defineProperty(this, "_UserPointAfter", void 0), _defineProperty(this, "_GameState", void 0), _defineProperty(this, "_FreeSpinCount", void 0), _defineProperty(this, "_LookAt", void 0), _defineProperty(this, "_UserPointBefore", void 0), _defineProperty(this, "_BaseLevelWin", void 0), _defineProperty(this, "_BonusEventCount", void 0), this._State = 0, this._Grid = new Array(), this._SecretState = 0, this._SecretChange = new Array(), this._SecretSymbol = 0, this._LineWin = new Array(), this._LineGrid = new Array(), this._TotalWinPoint = 0, this._UserPointAfter = 0, this._GameState = 0, this._FreeSpinCount = 0, this._LookAt = new Array(), this._UserPointBefore = 0, this._BaseLevelWin = 0, this._BonusEventCount = 0;
  }

  _createClass(ExtendHasLineResult, [{
    key: "State",
    get: function get() {
      return this._State;
    },
    set: function set(t) {
      this._State = t;
    }
  }, {
    key: "Grid",
    get: function get() {
      return this._Grid;
    },
    set: function set(t) {
      this._Grid = t;
    }
  }, {
    key: "SecretState",
    get: function get() {
      return this._SecretState;
    },
    set: function set(t) {
      this._SecretState = t;
    }
  }, {
    key: "SecretChange",
    get: function get() {
      return this._SecretChange;
    },
    set: function set(t) {
      this._SecretChange = t;
    }
  }, {
    key: "SecretSymbol",
    get: function get() {
      return this._SecretSymbol;
    },
    set: function set(t) {
      this._SecretSymbol = t;
    }
  }, {
    key: "LineWin",
    get: function get() {
      return this._LineWin;
    },
    set: function set(t) {
      this._LineWin = t;
    }
  }, {
    key: "LineGrid",
    get: function get() {
      return this._LineGrid;
    },
    set: function set(t) {
      this._LineGrid = t;
    }
  }, {
    key: "TotalWinPoint",
    get: function get() {
      return this._TotalWinPoint;
    },
    set: function set(t) {
      this._TotalWinPoint = t;
    }
  }, {
    key: "UserPointAfter",
    get: function get() {
      return this._UserPointAfter;
    },
    set: function set(t) {
      this._UserPointAfter = t;
    }
  }, {
    key: "GameState",
    get: function get() {
      return this._GameState;
    },
    set: function set(t) {
      this._GameState = t;
    }
  }, {
    key: "FreeSpinCount",
    get: function get() {
      return this._FreeSpinCount;
    },
    set: function set(t) {
      this._FreeSpinCount = t;
    }
  }, {
    key: "LookAt",
    get: function get() {
      return this._LookAt;
    },
    set: function set(t) {
      this._LookAt = t;
    }
  }, {
    key: "UserPointBefore",
    get: function get() {
      return this._UserPointBefore;
    },
    set: function set(t) {
      this._UserPointBefore = t;
    }
  }, {
    key: "BaseLevelWin",
    get: function get() {
      return this._BaseLevelWin;
    },
    set: function set(t) {
      this._BaseLevelWin = t;
    }
  }, {
    key: "BonusEventCount",
    get: function get() {
      return this._BonusEventCount;
    },
    set: function set(t) {
      this._BonusEventCount = t;
    }
  }]);

  return ExtendHasLineResult;
}();

var HasLineResult = /*#__PURE__*/function () {
  function HasLineResult() {
    _defineProperty(this, "_State", void 0), _defineProperty(this, "_Grid", void 0), _defineProperty(this, "_Change", void 0), _defineProperty(this, "_ChangeState", void 0), _defineProperty(this, "_LineWin", void 0), _defineProperty(this, "_LineGrid", void 0), _defineProperty(this, "_TotalWinPoint", void 0), _defineProperty(this, "_UserPointAfter", void 0), _defineProperty(this, "_GameState", void 0), _defineProperty(this, "_FreeSpinCount", void 0), _defineProperty(this, "_LookAt", void 0), _defineProperty(this, "_UserPointBefore", void 0), _defineProperty(this, "_BaseLevelWin", void 0), this._State = 0, this._Grid = new Array(), this._Change = new Array(), this._ChangeState = 0, this._LineWin = new Array(), this._LineGrid = new Array(), this._TotalWinPoint = 0, this._UserPointAfter = 0, this._GameState = 0, this._FreeSpinCount = 0, this._LookAt = new Array(), this._UserPointBefore = 0, this._BaseLevelWin = 0;
  }

  _createClass(HasLineResult, [{
    key: "State",
    get: function get() {
      return this._State;
    },
    set: function set(t) {
      this._State = t;
    }
  }, {
    key: "Grid",
    get: function get() {
      return this._Grid;
    },
    set: function set(t) {
      this._Grid = t;
    }
  }, {
    key: "Change",
    get: function get() {
      return this._Change;
    },
    set: function set(t) {
      this._Change = t;
    }
  }, {
    key: "ChangeState",
    get: function get() {
      return this._ChangeState;
    },
    set: function set(t) {
      this._ChangeState = t;
    }
  }, {
    key: "LineWin",
    get: function get() {
      return this._LineWin;
    },
    set: function set(t) {
      this._LineWin = t;
    }
  }, {
    key: "LineGrid",
    get: function get() {
      return this._LineGrid;
    },
    set: function set(t) {
      this._LineGrid = t;
    }
  }, {
    key: "TotalWinPoint",
    get: function get() {
      return this._TotalWinPoint;
    },
    set: function set(t) {
      this._TotalWinPoint = t;
    }
  }, {
    key: "UserPointAfter",
    get: function get() {
      return this._UserPointAfter;
    },
    set: function set(t) {
      this._UserPointAfter = t;
    }
  }, {
    key: "GameState",
    get: function get() {
      return this._GameState;
    },
    set: function set(t) {
      this._GameState = t;
    }
  }, {
    key: "FreeSpinCount",
    get: function get() {
      return this._FreeSpinCount;
    },
    set: function set(t) {
      this._FreeSpinCount = t;
    }
  }, {
    key: "LookAt",
    get: function get() {
      return this._LookAt;
    },
    set: function set(t) {
      this._LookAt = t;
    }
  }, {
    key: "UserPointBefore",
    get: function get() {
      return this._UserPointBefore;
    },
    set: function set(t) {
      this._UserPointBefore = t;
    }
  }, {
    key: "BaseLevelWin",
    get: function get() {
      return this._BaseLevelWin;
    },
    set: function set(t) {
      this._BaseLevelWin = t;
    }
  }]);

  return HasLineResult;
}();

var NoLineResult = /*#__PURE__*/function () {
  function NoLineResult() {
    _defineProperty(this, "_State", void 0), _defineProperty(this, "_Grid", void 0), _defineProperty(this, "_ChangeState", void 0), _defineProperty(this, "_Change", void 0), _defineProperty(this, "_GridWin", void 0), _defineProperty(this, "_TotalWinPoint", void 0), _defineProperty(this, "_UserPointAfter", void 0), _defineProperty(this, "_GameState", void 0), _defineProperty(this, "_FreeSpinCount", void 0), _defineProperty(this, "_LookAt", void 0), _defineProperty(this, "_UserPointBefore", void 0), _defineProperty(this, "_LevelWin", void 0), _defineProperty(this, "_BaseLevelWin", void 0), _defineProperty(this, "_BonusEventCount", void 0), this._State = 0, this._Grid = new Array(), this._ChangeState = 0, this._Change = new Array(), this._GridWin = new Array(), this._TotalWinPoint = 0, this._UserPointAfter = 0, this._GameState = 0, this._FreeSpinCount = 0, this._LookAt = new Array(), this._UserPointBefore = 0, this._LevelWin = 0, this._BaseLevelWin = 0, this._BonusEventCount = 0;
  }

  _createClass(NoLineResult, [{
    key: "State",
    get: function get() {
      return this._State;
    },
    set: function set(t) {
      this._State = t;
    }
  }, {
    key: "Grid",
    get: function get() {
      return this._Grid;
    },
    set: function set(t) {
      this._Grid = t;
    }
  }, {
    key: "ChangeState",
    get: function get() {
      return this._ChangeState;
    },
    set: function set(t) {
      this._ChangeState = t;
    }
  }, {
    key: "Change",
    get: function get() {
      return this._Change;
    },
    set: function set(t) {
      this._Change = t;
    }
  }, {
    key: "GridWin",
    get: function get() {
      return this._GridWin;
    },
    set: function set(t) {
      this._GridWin = t;
    }
  }, {
    key: "TotalWinPoint",
    get: function get() {
      return this._TotalWinPoint;
    },
    set: function set(t) {
      this._TotalWinPoint = t;
    }
  }, {
    key: "UserPointAfter",
    get: function get() {
      return this._UserPointAfter;
    },
    set: function set(t) {
      this._UserPointAfter = t;
    }
  }, {
    key: "GameState",
    get: function get() {
      return this._GameState;
    },
    set: function set(t) {
      this._GameState = t;
    }
  }, {
    key: "FreeSpinCount",
    get: function get() {
      return this._FreeSpinCount;
    },
    set: function set(t) {
      this._FreeSpinCount = t;
    }
  }, {
    key: "LookAt",
    get: function get() {
      return this._LookAt;
    },
    set: function set(t) {
      this._LookAt = t;
    }
  }, {
    key: "UserPointBefore",
    get: function get() {
      return this._UserPointBefore;
    },
    set: function set(t) {
      this._UserPointBefore = t;
    }
  }, {
    key: "LevelWin",
    get: function get() {
      return this._LevelWin;
    },
    set: function set(t) {
      this._LevelWin = t;
    }
  }, {
    key: "BaseLevelWin",
    get: function get() {
      return this._BaseLevelWin;
    },
    set: function set(t) {
      this._BaseLevelWin = t;
    }
  }, {
    key: "BonusEventCount",
    get: function get() {
      return this._BonusEventCount;
    },
    set: function set(t) {
      this._BonusEventCount = t;
    }
  }]);

  return NoLineResult;
}();

var HasLineTableInfo = /*#__PURE__*/function () {
  function HasLineTableInfo() {
    _defineProperty(this, "_IsLines", void 0), _defineProperty(this, "_BetTimes", void 0), _defineProperty(this, "_Line", void 0), _defineProperty(this, "_PayTable", void 0), _defineProperty(this, "_LineGridPos", void 0), _defineProperty(this, "_LineBet", void 0), _defineProperty(this, "_LineTotalBet", void 0), _defineProperty(this, "_Grid", void 0), _defineProperty(this, "_UserPoint", void 0), _defineProperty(this, "_LevelWinPoint", void 0), _defineProperty(this, "_EventMode", void 0), _defineProperty(this, "_EventRequire", void 0), _defineProperty(this, "_DefaultBetIndex", void 0), this._IsLines = 0, this._BetTimes = 0, this._Line = "", this._PayTable = {}, this._LineGridPos = {}, this._LineBet = new Array(), this._LineTotalBet = new Array(), this._Grid = new Array(), this._UserPoint = 0, this._LevelWinPoint = new Array(), this._EventMode = 0, this._EventRequire = 0, this._DefaultBetIndex = 0;
  }

  _createClass(HasLineTableInfo, [{
    key: "IsLines",
    get: function get() {
      return this._IsLines;
    },
    set: function set(t) {
      this._IsLines = t;
    }
  }, {
    key: "BetTimes",
    get: function get() {
      return this._BetTimes;
    },
    set: function set(t) {
      this._BetTimes = t;
    }
  }, {
    key: "Line",
    get: function get() {
      return this._Line;
    },
    set: function set(t) {
      this._Line = t;
    }
  }, {
    key: "PayTable",
    get: function get() {
      return this._PayTable;
    },
    set: function set(t) {
      this._PayTable = t;
    }
  }, {
    key: "LineGridPos",
    get: function get() {
      return this._LineGridPos;
    },
    set: function set(t) {
      this._LineGridPos = t;
    }
  }, {
    key: "LineBet",
    get: function get() {
      return this._LineBet;
    },
    set: function set(t) {
      this._LineBet = t;
    }
  }, {
    key: "LineTotalBet",
    get: function get() {
      return this._LineTotalBet;
    },
    set: function set(t) {
      this._LineTotalBet = t;
    }
  }, {
    key: "Grid",
    get: function get() {
      return this._Grid;
    },
    set: function set(t) {
      this._Grid = t;
    }
  }, {
    key: "UserPoint",
    get: function get() {
      return this._UserPoint;
    },
    set: function set(t) {
      this._UserPoint = t;
    }
  }, {
    key: "LevelWinPoint",
    get: function get() {
      return this._LevelWinPoint;
    },
    set: function set(t) {
      this._LevelWinPoint = t;
    }
  }, {
    key: "DefaultBetIndex",
    get: function get() {
      return this._DefaultBetIndex;
    },
    set: function set(t) {
      this._DefaultBetIndex = t;
    }
  }, {
    key: "EventMode",
    get: function get() {
      return this._EventMode;
    },
    set: function set(t) {
      this._EventMode = t;
    }
  }, {
    key: "EventRequire",
    get: function get() {
      return this._EventRequire;
    },
    set: function set(t) {
      this._EventRequire = t;
    }
  }]);

  return HasLineTableInfo;
}();

var NoLineTableInfo = /*#__PURE__*/function () {
  function NoLineTableInfo() {
    _defineProperty(this, "_IsLines", void 0), _defineProperty(this, "_BetTimes", void 0), _defineProperty(this, "_Line", void 0), _defineProperty(this, "_PayTable", void 0), _defineProperty(this, "_LineBet", void 0), _defineProperty(this, "_LineTotalBet", void 0), _defineProperty(this, "_Grid", void 0), _defineProperty(this, "_UserPoint", void 0), _defineProperty(this, "_LevelWinPoint", void 0), _defineProperty(this, "_EventMode", void 0), _defineProperty(this, "_EventRequire", void 0), _defineProperty(this, "DefaultBetIndex", void 0), this._IsLines = 0, this._BetTimes = 0, this._Line = "", this._PayTable = {}, this._LineBet = new Array(), this._LineTotalBet = new Array(), this._Grid = new Array(), this._UserPoint = 0, this._LevelWinPoint = new Array(), this._EventMode = 0, this._EventRequire = 0, this.DefaultBetIndex = 0;
  }

  _createClass(NoLineTableInfo, [{
    key: "IsLines",
    get: function get() {
      return this._IsLines;
    },
    set: function set(t) {
      this._IsLines = t;
    }
  }, {
    key: "BetTimes",
    get: function get() {
      return this._BetTimes;
    },
    set: function set(t) {
      this._BetTimes = t;
    }
  }, {
    key: "Line",
    get: function get() {
      return this._Line;
    },
    set: function set(t) {
      this._Line = t;
    }
  }, {
    key: "PayTable",
    get: function get() {
      return this._PayTable;
    },
    set: function set(t) {
      this._PayTable = t;
    }
  }, {
    key: "LineBet",
    get: function get() {
      return this._LineBet;
    },
    set: function set(t) {
      this._LineBet = t;
    }
  }, {
    key: "LineTotalBet",
    get: function get() {
      return this._LineTotalBet;
    },
    set: function set(t) {
      this._LineTotalBet = t;
    }
  }, {
    key: "Grid",
    get: function get() {
      return this._Grid;
    },
    set: function set(t) {
      this._Grid = t;
    }
  }, {
    key: "UserPoint",
    get: function get() {
      return this._UserPoint;
    },
    set: function set(t) {
      this._UserPoint = t;
    }
  }, {
    key: "LevelWinPoint",
    get: function get() {
      return this._LevelWinPoint;
    },
    set: function set(t) {
      this._LevelWinPoint = t;
    }
  }, {
    key: "EventMode",
    get: function get() {
      return this._EventMode;
    },
    set: function set(t) {
      this._EventMode = t;
    }
  }, {
    key: "EventRequire",
    get: function get() {
      return this._EventRequire;
    },
    set: function set(t) {
      this._EventRequire = t;
    }
  }]);

  return NoLineTableInfo;
}();

var VERSION = "0.04";
globalThis.TCC_VERSION = VERSION, exports.ACenterTemplate = ACenterTemplate, exports.AErrorFrameTemplate = AErrorFrameTemplate, exports.AGenericTemplate = AGenericTemplate, exports.ALoadingFrameTemplate = ALoadingFrameTemplate, exports.ALoadingTemplate = ALoadingTemplate, exports.ALookAtTemplate = ALookAtTemplate, exports.AMainGameButtonTemplate = AMainGameButtonTemplate, exports.AMainGameDoubleButtonTemplate = AMainGameDoubleButtonTemplate, exports.AMainGameOnlyButtonTemplate = AMainGameOnlyButtonTemplate, exports.AMainInitTemplate = AMainInitTemplate, exports.AMenuButtonTemplate = AMenuButtonTemplate, exports.AMenuDoubleButtonTemplate = AMenuDoubleButtonTemplate, exports.AMenuOnlyButtonTemplate = AMenuOnlyButtonTemplate, exports.ARecordButtonTemplate = ARecordButtonTemplate, exports.ARecordDoubleButtonTemplate = ARecordDoubleButtonTemplate, exports.ARecordOnlyButtonTemplate = ARecordOnlyButtonTemplate, exports.ASlotInitializeTemplate = ASlotInitializeTemplate, exports.ASlotTemplate = ASlotTemplate, exports.AWinLinTemplate = AWinLinTemplate$1, exports.AutoStateChangeNotification = AutoStateChangeNotification, exports.AutoStateChangeObserver = AutoStateChangeObserver, exports.ExtendHasLineFreeResult = ExtendHasLineFreeResult, exports.ExtendHasLineResult = ExtendHasLineResult, exports.HasLineFreeResult = HasLineFreeResult, exports.HasLineResult = HasLineResult, exports.HasLineTableInfo = HasLineTableInfo, exports.NoLineFreeResult = NoLineFreeResult, exports.NoLineResult = NoLineResult, exports.NoLineTableInfo = NoLineTableInfo, exports.NormalSlotSpecialTemplate = NormalSlotSpecialTemplate, exports.NormalSlotTemplate = NormalSlotTemplate, exports.OverrideComponent = OverrideComponent, exports.ResponseResultNotification = ResponseResultNotification, exports.ResponseResultObserver = ResponseResultObserver, exports.ScrollFocusStateNotification = ScrollFocusStateNotification, exports.ScrollFocusStateObserver = ScrollFocusStateObserver, exports.SlotBurredImgSpecialTemplate = SlotBurredImgSpecialTemplate, exports.SlotBurredImgTemplate = SlotBurredImgTemplate, exports.SlotRowEndNotification = SlotRowEndNotification, exports.SlotRowEndObserver = SlotRowEndObserver, exports.SpeedStateChangeNotification = SpeedStateChangeNotification, exports.SpeedStateChangeObserver = SpeedStateChangeObserver, exports.StopNowStateNotification = StopNowStateNotification, exports.StopNowStateObserver = StopNowStateObserver, exports.UserMoneyChangeNotification = UserMoneyChangeNotification, exports.UserMoneyChangeObserver = UserMoneyChangeObserver, exports.UserTotalBetChangeNotification = UserTotalBetChangeNotification, exports.UserTotalBetChangeObserver = UserTotalBetChangeObserver, exports.UserWinPointStateNotification = UserWinPointStateNotification, exports.UserWinPointStateObserver = UserWinPointStateObserver, exports.fcc = fcc;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxkaXN0XFx0Y2NcXGZjYy10ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImZjYyIsImdsb2JhbFRoaXMiLCJfZGVmaW5lUHJvcGVydHkiLCJ0IiwiZSIsImkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPdmVycmlkZUNvbXBvbmVudCIsInNjaGVkdWxlVGFnIiwiQXJyYXkiLCJnZXRTY2hlZHVsZVRhZyIsImdldFNjaGVkdWxlQW1vdW50IiwibGVuZ3RoIiwic2NoZWR1bGUiLCJuIiwiY2hlY2tTY2hlZHVsZVJlcGVhdCIsInB1c2giLCJwcm90b3R5cGUiLCJ1bnNjaGVkdWxlIiwiYXBwbHkiLCJzY2hlZHVsZU9uY2UiLCJjaGVja1NjaGVkdWxlVGFnIiwiY2hlY2tTY2hlZHVsZUNhbGxGdW5JbmRleCIsInNwbGljZSIsImluZGV4T2YiLCJ1bnNjaGVkdWxlQWxsQ2FsbGJhY2tzIiwiY2MiLCJDb21wb25lbnQiLCJBR2VuZXJpY1RlbXBsYXRlIiwibGFuZ3VhZ2VTZXR0aW5nIiwib25Mb2FkIiwib25DcmVhdGUiLCJzdGFydCIsIkFDZW50ZXJUZW1wbGF0ZSIsImluaXRDbGllbnQiLCJjb25maWdTZXR0aW5nIiwiYXVkaW9TZXR0aW5nIiwicHJvY2Vzc0NyZWF0ZSIsIm5vdGlmaWNhdGlvblNldHRpbmciLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiaXNBcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsInMiLCJkb25lIiwiZiIsIlR5cGVFcnJvciIsInIiLCJvIiwiY2FsbCIsIm5leHQiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJmcm9tIiwidGVzdCIsIkF1dG9TdGF0ZUNoYW5nZU5vdGlmaWNhdGlvbiIsIlRBR19OQU1FIiwidHlwZSIsIk5vdGlmaWNhdGlvblR5cGUiLCJBVVRPX0NIQU5HRSIsInN1YnNjcmliZSIsIm5vdGlmeSIsIm9ic2VydmVyIiwic2l6ZSIsInB1c2hOb3RpZmljYXRpb24iLCJpc1Blcm1hbmVudCIsInVuc3Vic2NyaWJlIiwiQUJTIiwiQUJhc2VOb3RpZmljYXRpb24iLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQxIiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JDEiLCJfYXJyYXlMaWtlVG9BcnJheSQxIiwiU2Nyb2xsRm9jdXNTdGF0ZU5vdGlmaWNhdGlvbiIsIlNDUk9MTF9GT0NVU19TVEFURSIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyJDIiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkkMiIsIl9hcnJheUxpa2VUb0FycmF5JDIiLCJTcGVlZFN0YXRlQ2hhbmdlTm90aWZpY2F0aW9uIiwiU1BFRURfQ0hBTkdFIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkMyIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQzIiwiX2FycmF5TGlrZVRvQXJyYXkkMyIsIlN0b3BOb3dTdGF0ZU5vdGlmaWNhdGlvbiIsIlNUT1BfTk9XIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkNCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQ0IiwiX2FycmF5TGlrZVRvQXJyYXkkNCIsIlVzZXJNb25leUNoYW5nZU5vdGlmaWNhdGlvbiIsIlVTRVJfTU9ORVlfQ0hBTkdFIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkNSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQ1IiwiX2FycmF5TGlrZVRvQXJyYXkkNSIsIlVzZXJUb3RhbEJldENoYW5nZU5vdGlmaWNhdGlvbiIsIlVTRVJfQkVUX0NIQU5HRSIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyJDYiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkkNiIsIl9hcnJheUxpa2VUb0FycmF5JDYiLCJVc2VyV2luUG9pbnRTdGF0ZU5vdGlmaWNhdGlvbiIsIlVTRVJfR0VUX1dJTiIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyJDciLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkkNyIsIl9hcnJheUxpa2VUb0FycmF5JDciLCJSZXNwb25zZVJlc3VsdE5vdGlmaWNhdGlvbiIsIlJFU1BPTlNFX1JFU1VMVCIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyJDgiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkkOCIsIl9hcnJheUxpa2VUb0FycmF5JDgiLCJTbG90Um93RW5kTm90aWZpY2F0aW9uIiwiU0xPVF9ST1dfRU5EIiwiQXV0b1N0YXRlQ2hhbmdlT2JzZXJ2ZXIiLCJBQmFzZU9ic2VydmVyIiwiU2Nyb2xsRm9jdXNTdGF0ZU9ic2VydmVyIiwiU3BlZWRTdGF0ZUNoYW5nZU9ic2VydmVyIiwiU3RvcE5vd1N0YXRlT2JzZXJ2ZXIiLCJVc2VyTW9uZXlDaGFuZ2VPYnNlcnZlciIsIlVzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyIiwiVXNlcldpblBvaW50U3RhdGVPYnNlcnZlciIsIlJlc3BvbnNlUmVzdWx0T2JzZXJ2ZXIiLCJTbG90Um93RW5kT2JzZXJ2ZXIiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJhIiwidSIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkJDEiLCJPcCIsImhhc093biIsImhhc093blByb3BlcnR5IiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJfaW52b2tlIiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiYXJnIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJkaXNwbGF5TmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiX19hd2FpdCIsIkFzeW5jSXRlcmF0b3IiLCJhc3luYyIsIkVycm9yIiwiZG9uZVJlc3VsdCIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJpc05hTiIsInByZXYiLCJjaGFyQXQiLCJzdG9wIiwicnZhbCIsImNvbXBsZXRlIiwiZmluaXNoIiwiZGVsZWdhdGVZaWVsZCIsIlBhZ2VDaGFuZ2VUeXBlIiwiRGF5VHlwZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJBTWFpbkdhbWVCdXR0b25UZW1wbGF0ZSIsImlzU2hvd1RvdGFsQmV0RnJhbWUiLCJrZXlib2FyZExpc3RlbmVyIiwibm93QXV0b1R5cGUiLCJjb25maWdNZ3IiLCJhdXRvQ291bnQiLCJsb25nVG91Y2hUaW1lIiwibm93U3BlZWQiLCJpc1NwZWVkVXAiLCJhZGROb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25NZ3IiLCJnZXROb3RpZmljYXRpb24iLCJnZXRBdXRvU3RhdGVDaGFuZ2VPYnNlcnZlciIsImdldFVzZXJNb25leUNoYW5nZU9ic2VydmVyIiwic3RhcnRCdXR0b25PblRvdWNoU3RhcnQiLCJsb25nVG91Y2hUaW1lciIsImlzQXV0b1N0YXRlIiwiYXV0b05vdGlmeSIsInByb2Nlc3NNZ3IiLCJnYW1lU3RhdGUiLCJHYW1lU3RhdGVUeXBlIiwiU1RBTkRCWSIsInN0YXJ0QnV0dG9uRXZlbnQiLCJzdGFydEJ1dHRvbk9uVG91Y2hFbmQiLCJrZXlib2FyZFNwYWNlVG91Y2hTdGFydCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInNwYWNlIiwia2V5Ym9hcmRTcGFjZVRvdWNoRW5kIiwidDAiLCJfYXV0b1N0YXRlQ2hhbmdlT2JzZXJ2ZXIiLCJhdXRvRXZlbnQiLCJfdXNlck1vbmV5Q2hhbmdlT2JzZXJ2ZXIiLCJ1c2VyTW9uZXkiLCJ0b3RhbEJldEZyYW1lVG91Y2hFdmVudCIsIkZSRUVJTkciLCJjaGVja1VzZXJQb2ludENhblBsYXlHYW1lIiwic3RhcnRFdmVudCIsInBsYXkiLCJlbmRFdmVudCIsImF1dG9CdXR0b25FdmVudExpc3RlbmVyIiwic3BlZWRVcEJ1dHRvbkV2ZW50TGlzdGVuZXIiLCJzcGVlZFVwRXZlbnQiLCJ0b3RhbEJldEZyYW1lVG91Y2hFdmVudExpc3RlbmVyIiwid2FybmluZ0V2ZW50IiwibWVudUJ1dHRvbkV2ZW50TGlzdGVuZXIiLCJtZW51RXZlbnQiLCJBTWFpbkdhbWVPbmx5QnV0dG9uVGVtcGxhdGUiLCJnbG9iYWwiLCJCdXR0b24iLCJhZGRCdXR0b25FdmVudCIsImF1dG9CdXR0b24iLCJzcGVlZFVwQnV0dG9uIiwiYmV0U2VsZWN0aW9uQnV0dG9uIiwibWVudUJ1dHRvbiIsInN0YXJ0QnV0dG9uT25FbmFibGUiLCJzdGFydEJ1dHRvbiIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIlRPVUNIX0VORCIsInN5c3RlbUV2ZW50IiwiU3lzdGVtRXZlbnQiLCJLRVlfRE9XTiIsIktFWV9VUCIsInN0YXJ0QnV0dG9uRGlzYWJsZSIsIm9mZiIsIkFNYWluR2FtZURvdWJsZUJ1dHRvblRlbXBsYXRlIiwiYXV0b0J1dHRvbkgiLCJhdXRvQnV0dG9uViIsInNwZWVkVXBCdXR0b25IIiwic3BlZWRVcEJ1dHRvblYiLCJiZXRTZWxlY3Rpb25CdXR0b25IIiwiYmV0U2VsZWN0aW9uQnV0dG9uViIsIm1lbnVCdXR0b25IIiwibWVudUJ1dHRvblYiLCJzdGFydEJ1dHRvbkgiLCJzdGFydEJ1dHRvblYiLCJBTWVudUJ1dHRvblRlbXBsYXRlIiwiZ2V0VXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXIiLCJtdXNpY0V2ZW50TGlzdGVuZXIiLCJhdWRpb01nciIsInVwZGF0ZU11c2ljT25NdXRlIiwibXVzaWNFdmVudCIsImVmZmVjdEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVFZmZlY3RPbk11dGUiLCJlZmZlY3RFdmVudCIsImJldFVwRXZlbnRMaXN0ZW5lciIsIm5vd0JldEluZGV4IiwidGFibGVJbmZvIiwiTGluZUJldCIsImJldERvd25FdmVudExpc3RlbmVyIiwidXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXIiLCJ0b3RhbEJldENoYW5nZUV2ZW50IiwiQU1lbnVEb3VibGVCdXR0b25UZW1wbGF0ZSIsIm11c2ljQnV0dG9uSCIsIm11c2ljQnV0dG9uViIsImVmZmVjdEJ1dHRvbkgiLCJlZmZlY3RCdXR0b25WIiwiYmV0VXBCdXR0b25IIiwiYmV0VXBCdXR0b25WIiwiYmV0RG93bkJ1dHRvbkgiLCJiZXREb3duQnV0dG9uViIsImF1dG81MEJ1dHRvbkgiLCJBdXRvVHlwZSIsIkFVVE9fNTAiLCJhdXRvNTBCdXR0b25WIiwiYXV0bzEwMEJ1dHRvbkgiLCJBVVRPXzEwMCIsImF1dG8xMDBCdXR0b25WIiwiYXV0bzUwMEJ1dHRvbkgiLCJBVVRPXzUwMCIsImF1dG81MDBCdXR0b25WIiwiYXV0bzEwMDBCdXR0b25IIiwiQVVUT18xMDAwIiwiYXV0bzEwMDBCdXR0b25WIiwiYXV0b0ZyZWVFbmRCdXR0b25IIiwiRlJFRV9FTkQiLCJhdXRvRnJlZUVuZEJ1dHRvblYiLCJBVVRPIiwiZ29CYWNrQnV0dG9uSCIsImdvQmFja0J1dHRvblYiLCJnb0hvbWVCdXR0b25IIiwiZ29Ib21lQnV0dG9uViIsInJlY29yZEJ1dHRvbkgiLCJyZWNvcmRCdXR0b25WIiwic2V0dGluZ0J1dHRvbkgiLCJzZXR0aW5nQnV0dG9uViIsImRlc2NyaXB0aW9uUGFnZUJ1dHRvbkgiLCJkZXNjcmlwdGlvblBhZ2VCdXR0b25WIiwiQU1lbnVPbmx5QnV0dG9uVGVtcGxhdGUiLCJtdXNpY0J1dHRvbiIsImVmZmVjdEJ1dHRvbiIsImJldFVwQnV0dG9uIiwiYmV0RG93bkJ1dHRvbiIsImF1dG81MEJ1dHRvbiIsImF1dG8xMDBCdXR0b24iLCJhdXRvNTAwQnV0dG9uIiwiYXV0bzEwMDBCdXR0b24iLCJhdXRvRnJlZUVuZEJ1dHRvbiIsImdvQmFja0J1dHRvbiIsImdvSG9tZUJ1dHRvbiIsInJlY29yZEJ1dHRvbiIsInNldHRpbmdCdXR0b24iLCJkZXNjcmlwdGlvblBhZ2VCdXR0b24iLCJORVhUIiwiUFJFVklPVVMiLCJPTkVfREFZIiwiRklWRV9EQVkiLCJURU5fREFZIiwiQVJlY29yZEJ1dHRvblRlbXBsYXRlIiwiQVJlY29yZERvdWJsZUJ1dHRvblRlbXBsYXRlIiwib25lRGF5UmVjb3JkQnV0dG9uSCIsIm9uZURheVJlY29yZEJ1dHRvblYiLCJmaXZlRGF5UmVjb3JkQnV0dG9uSCIsImZpdmVEYXlSZWNvcmRCdXR0b25WIiwidGVuRGF5UmVjb3JkQnV0dG9uSCIsInRlbkRheVJlY29yZEJ1dHRvblYiLCJuZXh0UmVjb3JkQnV0dG9uSCIsIm5leHRSZWNvcmRCdXR0b25WIiwicHJldmlvdXNSZWNvcmRCdXR0b25IIiwicHJldmlvdXNSZWNvcmRCdXR0b25WIiwiQVJlY29yZE9ubHlCdXR0b25UZW1wbGF0ZSIsIm9uZURheVJlY29yZEJ1dHRvbiIsImZpdmVEYXlSZWNvcmRCdXR0b24iLCJ0ZW5EYXlSZWNvcmRCdXR0b24iLCJuZXh0UmVjb3JkQnV0dG9uIiwicHJldmlvdXNSZWNvcmRCdXR0b24iLCJBRXJyb3JGcmFtZVRlbXBsYXRlIiwiZXJyb3JCdXR0b24iLCJBTG9hZGluZ1RlbXBsYXRlIiwiX2lzR2V0VGFibGVJbmZvUmVzcG9uc2UiLCJyZXNwb25zZU5vdGlmaWNhdGlvbiIsImludG9NYWluR2FtZUJ1dHRvbiIsInNjZW5lU3R5bGUiLCJsb2FkRXh0ZXJuYWxTY3JpcHQiLCJsb2FkUmVzb3VyY2VzIiwibG9hZEFzc2V0QnVuZGxlIiwidXBkYXRlUHJvZ3Jlc3NUZXh0QW5pbWF0aW9uIiwiU2VydmVyRXZlbnRUeXBlIiwiVEFCTEVfSU5GTyIsIkFMb2FkaW5nRnJhbWVUZW1wbGF0ZSIsImxvYWRpbmdJbml0aWFsaXplIiwibG9hZGluZ0RpYWxvZ05vZGUiLCJhY3RpdmUiLCJvcGFjaXR5IiwidGltZXIiLCJwcm9ncmVzc1RleHQiLCJzdHJpbmciLCJwcm9ncmVzc1ZhbHVlIiwidGltZU91dCIsImFkZFByb2dyZXNzVmFsdWUiLCJydW5Qcm9ncmVzcyIsImNoZWNrSGFzUmVzIiwicHJvZ3Jlc3NUaW1lciIsIndpbmRvdyIsInNldEludGVydmFsIiwicHJvZ3Jlc3NCYXIiLCJwcm9ncmVzcyIsImxvYWRNZ3IiLCJzZWNvbmRhcnlMb2FkU3RhdGUiLCJnZXQiLCJjbG9zZUxvYWRpbmdEaWFMb2ciLCJ0d2VlbiIsInRvIiwiaGFzIiwiZXJyb3JNZ3IiLCJleGVjdXRlRXJyb3IiLCJFcnJvclR5cGUiLCJVTkRFRklORURfRlciLCJjb25jYXQiLCJBTG9va0F0VGVtcGxhdGUiLCJnZXRTY3JvbGxGb2N1c1N0YXRlT2JzZXJ2ZXIiLCJfc2Nyb2xsRm9jdXNTdGF0ZU9ic2VydmVyIiwiYWxsTG9va0F0RWZmZWN0Iiwic2hvd0xvb2tBdEVmZmVjdCIsInJlbW92ZUxvb2tBdEVmZmVjdCIsIl9fZGVjb3JhdGUiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJfX21ldGFkYXRhIiwibWV0YWRhdGEiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQ5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JDkiLCJfYXJyYXlMaWtlVG9BcnJheSQ5IiwiY2NjbGFzcyIsIl9kZWNvcmF0b3IiLCJMSU5FX0NPTlRBSU5FUiIsIlBBUlRJQ0xFX0NPTlRBSU5FUiIsIkFXaW5MaW5UZW1wbGF0ZSIsImxpbmVDb250YWluZXJJbmRleCIsIk1BWF9aSU5ERVgiLCJwYXJ0aWNsZUNvbnRhaW5lckluZGV4IiwicnVuTGluZVNwZWVkIiwicnVuUGFydGljbGVTcGVlZCIsInJ1blBhcnRpY2xlSW50ZXJ2YWxUaW1lIiwiYW5nbGUiLCJsaW5lVmVjdG9yIiwiVmVjMiIsIlVQIiwicGFydGljbGVWZWN0b3IiLCJSSUdIVCIsImlzU3RvcCIsImJ1aWxkV2luTGluZUNvbnRhaW5lciIsImJ1aWxkUGFydGljbGVDb250YWluZXIiLCJfbGluZUNvbnRhaW5lciIsImxpbmVTcHJpdGUiLCJwYXJlbnQiLCJnZXRDaGlsZEJ5TmFtZSIsIl9wYXJ0aWNsZUNvbnRhaW5lciIsImFsbEdyaWRQb3NpdGlvbiIsImluaXRXaW5MaW5Qb3NpdGlvbiIsImFsbFdpbkxpbmUiLCJhbGxQYXJ0aWNsZSIsIk1hcCIsInJlc3RvcmVOb2RlIiwieCIsImhlaWdodCIsImNoaWxkcmVuIiwiYWRkQ2hpbGQiLCJydW5MaW5lIiwic2hvd1dpblBvaW50IiwiaW5pdExpbmVQb3NpdGlvbiIsImluaXRQYXJ0aWNsZVBvc2l0aW9uIiwicnVuTGluZVRvQXN5bmMiLCJydW5QYXJ0aWNsZVRvQXN5bmMiLCJoaWRlTm9kZSIsInBsYXlBbGwiLCJydW5BbGxMaW5lIiwiZ3JpZFJvdyIsIndpZHRoIiwieSIsImdldFBvc2l0aW9uIiwidjIiLCJsaW5lVG9HcmlkQW5pbWF0aW9uTG9vcCIsImdldEFuZ2xlQmV0d2VlblR3b1BvaW50cyIsImdldERpc3RhbmNlQmV0d2VlblR3b1BvaW50cyIsInNob3dXaW5HcmlkIiwicGFydGljbGVUb0dyaWRBbmltYXRpb25Mb29wIiwiY29weVdpbkxpbmVOb2RlIiwiY29weVBhcnRpY2xlVG9Db250YWluZXIiLCJjb3B5V2luTGluZVRvQ29udGFpbmVyIiwiaW5zdGFudGlhdGUiLCJwYXJ0aWNsZVByZWZhYiIsInNldCIsImdyaWRIZWlnaHQiLCJncmlkQ29udCIsIk1hdGgiLCJwb3ciLCJzcXJ0Iiwic2lnbkFuZ2xlIiwiUEkiLCJjbGVhciIsIlR3ZWVuIiwic3RvcEFsbEJ5VGFyZ2V0IiwiZGVzdHJveUFsbENoaWxkcmVuIiwiQVdpbkxpblRlbXBsYXRlJDEiLCJBTWFpbkluaXRUZW1wbGF0ZSIsInNldEhpc3RvcnlEZXRhaWwiLCJwcmVmYWJJbnN0YW50aWF0ZSIsIkFTbG90VGVtcGxhdGUiLCJzdHlsZURhdGEiLCJzcGVlZFJhdGlvIiwic3BlZWRVcE11bHRpcGxlIiwiaXNSZXN1bHRPSyIsImdldFN0b3BOb3dTdGF0ZU9ic2VydmVyIiwiZ2V0U3BlZWRTdGF0ZUNoYW5nZU9ic2VydmVyIiwiZ2V0UmVzcG9uc2VSZXN1bHRPYnNlcnZlciIsImlzU2xvdEltbWVkaWF0ZVN0b3AiLCJzdG9wTm93U3RhdGVPYnNlcnZlciIsInNwZWVkU3RhdGVDaGFuZ2VPYnNlcnZlciIsInJlc3BvbnNlUmVzdWx0T2JzZXJ2ZXIiLCJCRVRfUkVTVUxUIiwiRlJFRV9TUElOX1JFU1VMVCIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyJGEiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkkYSIsIl9hcnJheUxpa2VUb0FycmF5JGEiLCJOb3JtYWxTbG90VGVtcGxhdGUiLCJzbG90VHVybkNvdW50Iiwic2xvdEdpcmRTcGVlZCIsInNsb3RSb3dHcmlkQ291bnQiLCJzbG90R3JpZEhlaWdodCIsInNsb3RDb2x1bW5Ub1R3ZWVuIiwiZ3JpZE5vZGVUb01hcCIsImdyaWRTcHJpdGVUb01hcCIsImdyaWRJbWciLCJzaW5lSW5FYXNpbmciLCJzaW5lT3V0RWFzaW5nIiwicmVzdWx0TW9kZWwiLCJyZXN1bHRNb2R1bGUiLCJyb3dEYXRhIiwibG9va0F0Q291bnQiLCJpc1Nsb3RFbmQiLCJnZXRDYWxjdWxhdGVTbG90SGVpZ2h0Iiwicm93VHVybkNvdW50IiwiaXNSb3dDaGVja0xvb2tBdCIsImluaXRpYWxpemVTdGF0ZSIsInNpbmVJblNsb3QiLCJmbG9vciIsImVhc2luZyIsImJ5IiwicnVuU2xvdEFuaW1hdGlvbiIsImVmZmVjdFBsYXkiLCJleGVjdXRlU2xvdEFuaW1hdGlvbiIsImNoZWNrTG9va0F0Iiwibm90aWZ5TG9va0F0RXZlbnQiLCJ1cGRhdGVHcmlkUG9zaXRpb25BbmRSYW5kb21JbWciLCJpc0NhblN0b3AiLCJnZXRTbG90VHVybkNvdW50IiwiTG9va0F0Iiwic2hvd0Fuc3dlciIsInVuc2hpZnQiLCJyYW5kb20iLCJzcHJpdGVGcmFtZSIsIlN0cmluZyIsInVwZGF0ZUdyaWRBbnN3ZXIiLCJzaW5lT3V0QW5pbWF0aW9uIiwiZWZmZWN0U3RvcCIsIkdyaWQiLCJmcmVlSWNvbkNvdW50IiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkYiIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSRiIiwiX2FycmF5TGlrZVRvQXJyYXkkYiIsIk5vcm1hbFNsb3RTcGVjaWFsVGVtcGxhdGUiLCJzbG90Um93VGltZSIsImxvb2tBdFRpbWUiLCJpc1RpbWVFbmRMaXN0ZW5lciIsInVwZGF0ZU9ubHlHcmlkUG9zaXRpb25BbmRSYW5kb21JbWciLCJjaGVja0ltbWVkaWF0ZVN0b3BTdGF0ZSIsInNob3dBbnN3ZXJBbmltYXRpb24iLCJzdGFydFJvd1RpbWVMaXN0ZW5lciIsIm5vd1RpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIkVmZmVjdCIsIkZ1bmN0aW9uIiwiU2xvdEJ1cnJlZEltZ1RlbXBsYXRlIiwiZ3JpZEJ1cnJlZEltZyIsIlNsb3RCdXJyZWRJbWdTcGVjaWFsVGVtcGxhdGUiLCJBU2xvdEluaXRpYWxpemVUZW1wbGF0ZSIsInNsb3RTdHlsZVNldHRpbmciLCJFeHRlbmRIYXNMaW5lRnJlZVJlc3VsdCIsIl9TdGF0ZSIsIl9HcmlkIiwiX1N0aWNreVN5bWJvbCIsIl9TdGlja3lDaGFuZ2UiLCJfTGluZVdpbiIsIl9MaW5lR3JpZCIsIl9Ub3RhbFdpblBvaW50IiwiX1VzZXJQb2ludEFmdGVyIiwiX0dhbWVTdGF0ZSIsIl9Db3VudCIsIl9GcmVlU3BpbldpbiIsIl9Mb29rQXQiLCJfRnJlZVRvRnJlZSIsIl9CYXNlTGV2ZWxXaW4iLCJfRnJlZUxldmVsV2luIiwiSGFzTGluZUZyZWVSZXN1bHQiLCJfQ2hhbmdlU3RhdGUiLCJfQ2hhbmdlIiwiX0xldmVsV2luIiwiTm9MaW5lRnJlZVJlc3VsdCIsIl9HcmlkV2luIiwiRXh0ZW5kSGFzTGluZVJlc3VsdCIsIl9TZWNyZXRTdGF0ZSIsIl9TZWNyZXRDaGFuZ2UiLCJfU2VjcmV0U3ltYm9sIiwiX0ZyZWVTcGluQ291bnQiLCJfVXNlclBvaW50QmVmb3JlIiwiX0JvbnVzRXZlbnRDb3VudCIsIkhhc0xpbmVSZXN1bHQiLCJOb0xpbmVSZXN1bHQiLCJIYXNMaW5lVGFibGVJbmZvIiwiX0lzTGluZXMiLCJfQmV0VGltZXMiLCJfTGluZSIsIl9QYXlUYWJsZSIsIl9MaW5lR3JpZFBvcyIsIl9MaW5lQmV0IiwiX0xpbmVUb3RhbEJldCIsIl9Vc2VyUG9pbnQiLCJfTGV2ZWxXaW5Qb2ludCIsIl9FdmVudE1vZGUiLCJfRXZlbnRSZXF1aXJlIiwiX0RlZmF1bHRCZXRJbmRleCIsIk5vTGluZVRhYmxlSW5mbyIsIkRlZmF1bHRCZXRJbmRleCIsIlZFUlNJT04iLCJUQ0NfVkVSU0lPTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUFBYUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUE4QixZQUE5QixFQUEyQztBQUFDQyxFQUFBQSxLQUFLLEVBQUMsQ0FBQztBQUFSLENBQTNDO0FBQXVELElBQUlDLEdBQUcsR0FBQ0MsVUFBVSxD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QUNnRiw0QkFBUixHQUFxQ0EsNEJBQXR1RCxFQUFtd0RoRixPQUFPLENBQUN1SCx3QkFBUixHQUFpQ0Esd0JBQXB5RCxFQUE2ekR2SCxPQUFPLENBQUNpbEIsNEJBQVIsR0FBcUNBLDRCQUFsMkQsRUFBKzNEamxCLE9BQU8sQ0FBQytrQixxQkFBUixHQUE4QkEscUJBQTc1RCxFQUFtN0Qva0IsT0FBTyxDQUFDbUgsc0JBQVIsR0FBK0JBLHNCQUFsOUQsRUFBeStEbkgsT0FBTyxDQUFDOEgsa0JBQVIsR0FBMkJBLGtCQUFwZ0UsRUFBdWhFOUgsT0FBTyxDQUFDcUYsNEJBQVIsR0FBcUNBLDRCQUE1akUsRUFBeWxFckYsT0FBTyxDQUFDd0gsd0JBQVIsR0FBaUNBLHdCQUExbkUsRUFBbXBFeEgsT0FBTyxDQUFDMEYsd0JBQVIsR0FBaUNBLHdCQUFwckUsRUFBNnNFMUYsT0FBTyxDQUFDeUgsb0JBQVIsR0FBNkJBLG9CQUExdUUsRUFBK3ZFekgsT0FBTyxDQUFDK0YsMkJBQVIsR0FBb0NBLDJCQUFueUUsRUFBK3pFL0YsT0FBTyxDQUFDMEgsdUJBQVIsR0FBZ0NBLHVCQUEvMUUsRUFBdTNFMUgsT0FBTyxDQUFDb0csOEJBQVIsR0FBdUNBLDhCQUE5NUUsRUFBNjdFcEcsT0FBTyxDQUFDMkgsMEJBQVIsR0FBbUNBLDBCQUFoK0UsRUFBMi9FM0gsT0FBTyxDQUFDeUcsNkJBQVIsR0FBc0NBLDZCQUFqaUYsRUFBK2pGekcsT0FBTyxDQUFDNEgseUJBQVIsR0FBa0NBLHlCQUFqbUYsRUFBMm5GNUgsT0FBTyxDQUFDRSxHQUFSLEdBQVlBLEdBQXZvRiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGZjYz1nbG9iYWxUaGlzLmZjYztmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkodCxlLGkpe3JldHVybiBlIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7dmFsdWU6aSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbZV09aSx0fWNsYXNzIE92ZXJyaWRlQ29tcG9uZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50e2NvbnN0cnVjdG9yKCl7c3VwZXIoKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcInNjaGVkdWxlVGFnXCIsdm9pZCAwKSx0aGlzLnNjaGVkdWxlVGFnPW5ldyBBcnJheX1nZXRTY2hlZHVsZVRhZygpe3JldHVybiB0aGlzLnNjaGVkdWxlVGFnfWdldFNjaGVkdWxlQW1vdW50KCl7cmV0dXJuIHRoaXMuc2NoZWR1bGVUYWcubGVuZ3RofXNjaGVkdWxlKHQsZSxpLG4pe3N1cGVyLnNjaGVkdWxlKHRoaXMuY2hlY2tTY2hlZHVsZVJlcGVhdCh0LGkpLGUsaSxuKSx0aGlzLnNjaGVkdWxlVGFnLnB1c2godCl9Y2hlY2tTY2hlZHVsZVJlcGVhdCh0LGUpe3JldHVybiAwPGU/KHQucHJvdG90eXBlPSgpPT57LS1lPDAmJnRoaXMudW5zY2hlZHVsZSh0KSx0LmFwcGx5KHRoaXMpfSx0LnByb3RvdHlwZSk6dH1zY2hlZHVsZU9uY2UodCxlKXt0LnByb3RvdHlwZT0oKT0+e3RoaXMudW5zY2hlZHVsZSh0LnByb3RvdHlwZSksdC5hcHBseSh0aGlzKX0sdGhpcy5zY2hlZHVsZSh0LnByb3RvdHlwZSwwLDAsZSl9dW5zY2hlZHVsZSh0KXtzdXBlci51bnNjaGVkdWxlKHRoaXMuY2hlY2tTY2hlZHVsZVRhZyh0KSk7dD10aGlzLmNoZWNrU2NoZWR1bGVDYWxsRnVuSW5kZXgodCk7LTE8dCYmdGhpcy5zY2hlZHVsZVRhZy5zcGxpY2UodCwxKX1jaGVja1NjaGVkdWxlQ2FsbEZ1bkluZGV4KHQpe3ZhciBlO2lmKC0xIT10aGlzLmdldFNjaGVkdWxlVGFnKCkuaW5kZXhPZih0KSllPXRoaXMuc2NoZWR1bGVUYWcuaW5kZXhPZih0KTtlbHNle2lmKC0xPT10aGlzLmdldFNjaGVkdWxlVGFnKCkuaW5kZXhPZih0LnByb3RvdHlwZSkpcmV0dXJuLTE7ZT10aGlzLnNjaGVkdWxlVGFnLmluZGV4T2YodC5wcm90b3R5cGUpfXJldHVybiBlfWNoZWNrU2NoZWR1bGVUYWcodCl7dmFyIGU9dm9pZCAwLHQ9dGhpcy5jaGVja1NjaGVkdWxlQ2FsbEZ1bkluZGV4KHQpO3JldHVybiBlPS0xPHQ/dGhpcy5zY2hlZHVsZVRhZ1t0XTplfXVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKXtzdXBlci51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCksdGhpcy5zY2hlZHVsZVRhZy5sZW5ndGg9MH19Y2xhc3MgQUdlbmVyaWNUZW1wbGF0ZSBleHRlbmRzIE92ZXJyaWRlQ29tcG9uZW50e2xhbmd1YWdlU2V0dGluZygpe31vbkxvYWQoKXt0aGlzLm9uQ3JlYXRlKCl9c3RhcnQoKXt0aGlzLmxhbmd1YWdlU2V0dGluZygpfX1jbGFzcyBBQ2VudGVyVGVtcGxhdGUgZXh0ZW5kcyBBR2VuZXJpY1RlbXBsYXRle29uTG9hZCgpe3RoaXMuaW5pdENsaWVudCgpLHRoaXMuY29uZmlnU2V0dGluZygpLHRoaXMuYXVkaW9TZXR0aW5nKCksdGhpcy5wcm9jZXNzQ3JlYXRlKCksdGhpcy5ub3RpZmljYXRpb25TZXR0aW5nKCksc3VwZXIub25Mb2FkKCl9fWZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHQsZSl7dmFyIGk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmdFtTeW1ib2wuaXRlcmF0b3JdfHx0W1wiQEBpdGVyYXRvclwiXTtpZighaSl7aWYoQXJyYXkuaXNBcnJheSh0KXx8KGk9X3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHQpKXx8ZSYmdCYmXCJudW1iZXJcIj09dHlwZW9mIHQubGVuZ3RoKXtpJiYodD1pKTt2YXIgbj0wLGU9ZnVuY3Rpb24oKXt9O3JldHVybntzOmUsbjpmdW5jdGlvbigpe3JldHVybiBuPj10Lmxlbmd0aD97ZG9uZTohMH06e2RvbmU6ITEsdmFsdWU6dFtuKytdfX0sZTpmdW5jdGlvbih0KXt0aHJvdyB0fSxmOmV9fXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX12YXIgcixvPSEwLHM9ITE7cmV0dXJue3M6ZnVuY3Rpb24oKXtpPWkuY2FsbCh0KX0sbjpmdW5jdGlvbigpe3ZhciB0PWkubmV4dCgpO3JldHVybiBvPXQuZG9uZSx0fSxlOmZ1bmN0aW9uKHQpe3M9ITAscj10fSxmOmZ1bmN0aW9uKCl7dHJ5e298fG51bGw9PWkucmV0dXJufHxpLnJldHVybigpfWZpbmFsbHl7aWYocyl0aHJvdyByfX19fWZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSh0LGUpe2lmKHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXJldHVybiBfYXJyYXlMaWtlVG9BcnJheSh0LGUpO3ZhciBpPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KS5zbGljZSg4LC0xKTtyZXR1cm5cIk1hcFwiPT09KGk9XCJPYmplY3RcIj09PWkmJnQuY29uc3RydWN0b3I/dC5jb25zdHJ1Y3Rvci5uYW1lOmkpfHxcIlNldFwiPT09aT9BcnJheS5mcm9tKHQpOlwiQXJndW1lbnRzXCI9PT1pfHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChpKT9fYXJyYXlMaWtlVG9BcnJheSh0LGUpOnZvaWQgMH19ZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkodCxlKXsobnVsbD09ZXx8ZT50Lmxlbmd0aCkmJihlPXQubGVuZ3RoKTtmb3IodmFyIGk9MCxuPW5ldyBBcnJheShlKTtpPGU7aSsrKW5baV09dFtpXTtyZXR1cm4gbn1jbGFzcyBBdXRvU3RhdGVDaGFuZ2VOb3RpZmljYXRpb24gZXh0ZW5kcyBmY2MuQUJTLkFCYXNlTm90aWZpY2F0aW9ue2NvbnN0cnVjdG9yKCl7c3VwZXIoKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIlRBR19OQU1FXCIsdm9pZCAwKSx0aGlzLlRBR19OQU1FPWZjYy50eXBlLk5vdGlmaWNhdGlvblR5cGUuQVVUT19DSEFOR0V9c3Vic2NyaWJlKHQsZSl7c3VwZXIuc3Vic2NyaWJlKHQsZSl9bm90aWZ5KHQsZSxpKXtpZigwPHRoaXMub2JzZXJ2ZXIuc2l6ZSl7dmFyIG4scj1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcih0aGlzLm9ic2VydmVyKTt0cnl7Zm9yKHIucygpOyEobj1yLm4oKSkuZG9uZTspe3ZhciBvPW4udmFsdWU7by5wdXNoTm90aWZpY2F0aW9uKHQsZSxpKSxvLmlzUGVybWFuZW50fHx0aGlzLnVuc3Vic2NyaWJlKG8pfX1jYXRjaCh0KXtyLmUodCl9ZmluYWxseXtyLmYoKX19fX1mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQxKHQsZSl7dmFyIGk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmdFtTeW1ib2wuaXRlcmF0b3JdfHx0W1wiQEBpdGVyYXRvclwiXTtpZighaSl7aWYoQXJyYXkuaXNBcnJheSh0KXx8KGk9X3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JDEodCkpfHxlJiZ0JiZcIm51bWJlclwiPT10eXBlb2YgdC5sZW5ndGgpe2kmJih0PWkpO3ZhciBuPTAsZT1mdW5jdGlvbigpe307cmV0dXJue3M6ZSxuOmZ1bmN0aW9uKCl7cmV0dXJuIG4+PXQubGVuZ3RoP3tkb25lOiEwfTp7ZG9uZTohMSx2YWx1ZTp0W24rK119fSxlOmZ1bmN0aW9uKHQpe3Rocm93IHR9LGY6ZX19dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfXZhciByLG89ITAscz0hMTtyZXR1cm57czpmdW5jdGlvbigpe2k9aS5jYWxsKHQpfSxuOmZ1bmN0aW9uKCl7dmFyIHQ9aS5uZXh0KCk7cmV0dXJuIG89dC5kb25lLHR9LGU6ZnVuY3Rpb24odCl7cz0hMCxyPXR9LGY6ZnVuY3Rpb24oKXt0cnl7b3x8bnVsbD09aS5yZXR1cm58fGkucmV0dXJuKCl9ZmluYWxseXtpZihzKXRocm93IHJ9fX19ZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JDEodCxlKXtpZih0KXtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkkMSh0LGUpO3ZhciBpPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KS5zbGljZSg4LC0xKTtyZXR1cm5cIk1hcFwiPT09KGk9XCJPYmplY3RcIj09PWkmJnQuY29uc3RydWN0b3I/dC5jb25zdHJ1Y3Rvci5uYW1lOmkpfHxcIlNldFwiPT09aT9BcnJheS5mcm9tKHQpOlwiQXJndW1lbnRzXCI9PT1pfHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChpKT9fYXJyYXlMaWtlVG9BcnJheSQxKHQsZSk6dm9pZCAwfX1mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheSQxKHQsZSl7KG51bGw9PWV8fGU+dC5sZW5ndGgpJiYoZT10Lmxlbmd0aCk7Zm9yKHZhciBpPTAsbj1uZXcgQXJyYXkoZSk7aTxlO2krKyluW2ldPXRbaV07cmV0dXJuIG59Y2xhc3MgU2Nyb2xsRm9jdXNTdGF0ZU5vdGlmaWNhdGlvbiBleHRlbmRzIGZjYy5BQlMuQUJhc2VOb3RpZmljYXRpb257Y29uc3RydWN0b3IoKXtzdXBlcigpLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiVEFHX05BTUVcIix2b2lkIDApLHRoaXMuVEFHX05BTUU9ZmNjLnR5cGUuTm90aWZpY2F0aW9uVHlwZS5TQ1JPTExfRk9DVVNfU1RBVEV9c3Vic2NyaWJlKHQsZSl7c3VwZXIuc3Vic2NyaWJlKHQsZSl9bm90aWZ5KHQsZSl7aWYoMDx0aGlzLm9ic2VydmVyLnNpemUpe3ZhciBpLG49X2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkMSh0aGlzLm9ic2VydmVyKTt0cnl7Zm9yKG4ucygpOyEoaT1uLm4oKSkuZG9uZTspe3ZhciByPWkudmFsdWU7ci5wdXNoTm90aWZpY2F0aW9uKHQsZSksci5pc1Blcm1hbmVudHx8dGhpcy51bnN1YnNjcmliZShyKX19Y2F0Y2godCl7bi5lKHQpfWZpbmFsbHl7bi5mKCl9fX19ZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkMih0LGUpe3ZhciBpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJnRbU3ltYm9sLml0ZXJhdG9yXXx8dFtcIkBAaXRlcmF0b3JcIl07aWYoIWkpe2lmKEFycmF5LmlzQXJyYXkodCl8fChpPV91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQyKHQpKXx8ZSYmdCYmXCJudW1iZXJcIj09dHlwZW9mIHQubGVuZ3RoKXtpJiYodD1pKTt2YXIgbj0wLGU9ZnVuY3Rpb24oKXt9O3JldHVybntzOmUsbjpmdW5jdGlvbigpe3JldHVybiBuPj10Lmxlbmd0aD97ZG9uZTohMH06e2RvbmU6ITEsdmFsdWU6dFtuKytdfX0sZTpmdW5jdGlvbih0KXt0aHJvdyB0fSxmOmV9fXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX12YXIgcixvPSEwLHM9ITE7cmV0dXJue3M6ZnVuY3Rpb24oKXtpPWkuY2FsbCh0KX0sbjpmdW5jdGlvbigpe3ZhciB0PWkubmV4dCgpO3JldHVybiBvPXQuZG9uZSx0fSxlOmZ1bmN0aW9uKHQpe3M9ITAscj10fSxmOmZ1bmN0aW9uKCl7dHJ5e298fG51bGw9PWkucmV0dXJufHxpLnJldHVybigpfWZpbmFsbHl7aWYocyl0aHJvdyByfX19fWZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQyKHQsZSl7aWYodCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5JDIodCxlKTt2YXIgaT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc2xpY2UoOCwtMSk7cmV0dXJuXCJNYXBcIj09PShpPVwiT2JqZWN0XCI9PT1pJiZ0LmNvbnN0cnVjdG9yP3QuY29uc3RydWN0b3IubmFtZTppKXx8XCJTZXRcIj09PWk/QXJyYXkuZnJvbSh0KTpcIkFyZ3VtZW50c1wiPT09aXx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QoaSk/X2FycmF5TGlrZVRvQXJyYXkkMih0LGUpOnZvaWQgMH19ZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkkMih0LGUpeyhudWxsPT1lfHxlPnQubGVuZ3RoKSYmKGU9dC5sZW5ndGgpO2Zvcih2YXIgaT0wLG49bmV3IEFycmF5KGUpO2k8ZTtpKyspbltpXT10W2ldO3JldHVybiBufWNsYXNzIFNwZWVkU3RhdGVDaGFuZ2VOb3RpZmljYXRpb24gZXh0ZW5kcyBmY2MuQUJTLkFCYXNlTm90aWZpY2F0aW9ue2NvbnN0cnVjdG9yKCl7c3VwZXIoKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIlRBR19OQU1FXCIsdm9pZCAwKSx0aGlzLlRBR19OQU1FPWZjYy50eXBlLk5vdGlmaWNhdGlvblR5cGUuU1BFRURfQ0hBTkdFfXN1YnNjcmliZSh0LGUpe3N1cGVyLnN1YnNjcmliZSh0LGUpfW5vdGlmeSh0KXtpZigwPHRoaXMub2JzZXJ2ZXIuc2l6ZSl7dmFyIGUsaT1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQyKHRoaXMub2JzZXJ2ZXIpO3RyeXtmb3IoaS5zKCk7IShlPWkubigpKS5kb25lOyl7dmFyIG49ZS52YWx1ZTtuLnB1c2hOb3RpZmljYXRpb24odCksbi5pc1Blcm1hbmVudHx8dGhpcy51bnN1YnNjcmliZShuKX19Y2F0Y2godCl7aS5lKHQpfWZpbmFsbHl7aS5mKCl9fX19ZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkMyh0LGUpe3ZhciBpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJnRbU3ltYm9sLml0ZXJhdG9yXXx8dFtcIkBAaXRlcmF0b3JcIl07aWYoIWkpe2lmKEFycmF5LmlzQXJyYXkodCl8fChpPV91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQzKHQpKXx8ZSYmdCYmXCJudW1iZXJcIj09dHlwZW9mIHQubGVuZ3RoKXtpJiYodD1pKTt2YXIgbj0wLGU9ZnVuY3Rpb24oKXt9O3JldHVybntzOmUsbjpmdW5jdGlvbigpe3JldHVybiBuPj10Lmxlbmd0aD97ZG9uZTohMH06e2RvbmU6ITEsdmFsdWU6dFtuKytdfX0sZTpmdW5jdGlvbih0KXt0aHJvdyB0fSxmOmV9fXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX12YXIgcixvPSEwLHM9ITE7cmV0dXJue3M6ZnVuY3Rpb24oKXtpPWkuY2FsbCh0KX0sbjpmdW5jdGlvbigpe3ZhciB0PWkubmV4dCgpO3JldHVybiBvPXQuZG9uZSx0fSxlOmZ1bmN0aW9uKHQpe3M9ITAscj10fSxmOmZ1bmN0aW9uKCl7dHJ5e298fG51bGw9PWkucmV0dXJufHxpLnJldHVybigpfWZpbmFsbHl7aWYocyl0aHJvdyByfX19fWZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQzKHQsZSl7aWYodCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5JDModCxlKTt2YXIgaT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc2xpY2UoOCwtMSk7cmV0dXJuXCJNYXBcIj09PShpPVwiT2JqZWN0XCI9PT1pJiZ0LmNvbnN0cnVjdG9yP3QuY29uc3RydWN0b3IubmFtZTppKXx8XCJTZXRcIj09PWk/QXJyYXkuZnJvbSh0KTpcIkFyZ3VtZW50c1wiPT09aXx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QoaSk/X2FycmF5TGlrZVRvQXJyYXkkMyh0LGUpOnZvaWQgMH19ZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkkMyh0LGUpeyhudWxsPT1lfHxlPnQubGVuZ3RoKSYmKGU9dC5sZW5ndGgpO2Zvcih2YXIgaT0wLG49bmV3IEFycmF5KGUpO2k8ZTtpKyspbltpXT10W2ldO3JldHVybiBufWNsYXNzIFN0b3BOb3dTdGF0ZU5vdGlmaWNhdGlvbiBleHRlbmRzIGZjYy5BQlMuQUJhc2VOb3RpZmljYXRpb257Y29uc3RydWN0b3IoKXtzdXBlcigpLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiVEFHX05BTUVcIix2b2lkIDApLHRoaXMuVEFHX05BTUU9ZmNjLnR5cGUuTm90aWZpY2F0aW9uVHlwZS5TVE9QX05PV31zdWJzY3JpYmUodCxlKXtzdXBlci5zdWJzY3JpYmUodCxlKX1ub3RpZnkoKXtpZigwPHRoaXMub2JzZXJ2ZXIuc2l6ZSl7dmFyIHQsZT1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQzKHRoaXMub2JzZXJ2ZXIpO3RyeXtmb3IoZS5zKCk7ISh0PWUubigpKS5kb25lOyl7dmFyIGk9dC52YWx1ZTtpLnB1c2hOb3RpZmljYXRpb24oKSxpLmlzUGVybWFuZW50fHx0aGlzLnVuc3Vic2NyaWJlKGkpfX1jYXRjaCh0KXtlLmUodCl9ZmluYWxseXtlLmYoKX19fX1mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQ0KHQsZSl7dmFyIGk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmdFtTeW1ib2wuaXRlcmF0b3JdfHx0W1wiQEBpdGVyYXRvclwiXTtpZighaSl7aWYoQXJyYXkuaXNBcnJheSh0KXx8KGk9X3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JDQodCkpfHxlJiZ0JiZcIm51bWJlclwiPT10eXBlb2YgdC5sZW5ndGgpe2kmJih0PWkpO3ZhciBuPTAsZT1mdW5jdGlvbigpe307cmV0dXJue3M6ZSxuOmZ1bmN0aW9uKCl7cmV0dXJuIG4+PXQubGVuZ3RoP3tkb25lOiEwfTp7ZG9uZTohMSx2YWx1ZTp0W24rK119fSxlOmZ1bmN0aW9uKHQpe3Rocm93IHR9LGY6ZX19dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfXZhciByLG89ITAscz0hMTtyZXR1cm57czpmdW5jdGlvbigpe2k9aS5jYWxsKHQpfSxuOmZ1bmN0aW9uKCl7dmFyIHQ9aS5uZXh0KCk7cmV0dXJuIG89dC5kb25lLHR9LGU6ZnVuY3Rpb24odCl7cz0hMCxyPXR9LGY6ZnVuY3Rpb24oKXt0cnl7b3x8bnVsbD09aS5yZXR1cm58fGkucmV0dXJuKCl9ZmluYWxseXtpZihzKXRocm93IHJ9fX19ZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JDQodCxlKXtpZih0KXtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkkNCh0LGUpO3ZhciBpPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KS5zbGljZSg4LC0xKTtyZXR1cm5cIk1hcFwiPT09KGk9XCJPYmplY3RcIj09PWkmJnQuY29uc3RydWN0b3I/dC5jb25zdHJ1Y3Rvci5uYW1lOmkpfHxcIlNldFwiPT09aT9BcnJheS5mcm9tKHQpOlwiQXJndW1lbnRzXCI9PT1pfHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChpKT9fYXJyYXlMaWtlVG9BcnJheSQ0KHQsZSk6dm9pZCAwfX1mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheSQ0KHQsZSl7KG51bGw9PWV8fGU+dC5sZW5ndGgpJiYoZT10Lmxlbmd0aCk7Zm9yKHZhciBpPTAsbj1uZXcgQXJyYXkoZSk7aTxlO2krKyluW2ldPXRbaV07cmV0dXJuIG59Y2xhc3MgVXNlck1vbmV5Q2hhbmdlTm90aWZpY2F0aW9uIGV4dGVuZHMgZmNjLkFCUy5BQmFzZU5vdGlmaWNhdGlvbntjb25zdHJ1Y3Rvcigpe3N1cGVyKCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJUQUdfTkFNRVwiLHZvaWQgMCksdGhpcy5UQUdfTkFNRT1mY2MudHlwZS5Ob3RpZmljYXRpb25UeXBlLlVTRVJfTU9ORVlfQ0hBTkdFfXN1YnNjcmliZSh0LGUpe3N1cGVyLnN1YnNjcmliZSh0LGUpfW5vdGlmeSh0KXtpZigwPHRoaXMub2JzZXJ2ZXIuc2l6ZSl7dmFyIGUsaT1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQ0KHRoaXMub2JzZXJ2ZXIpO3RyeXtmb3IoaS5zKCk7IShlPWkubigpKS5kb25lOyl7dmFyIG49ZS52YWx1ZTtuLnB1c2hOb3RpZmljYXRpb24odCksbi5pc1Blcm1hbmVudHx8dGhpcy51bnN1YnNjcmliZShuKX19Y2F0Y2godCl7aS5lKHQpfWZpbmFsbHl7aS5mKCl9fX19ZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkNSh0LGUpe3ZhciBpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJnRbU3ltYm9sLml0ZXJhdG9yXXx8dFtcIkBAaXRlcmF0b3JcIl07aWYoIWkpe2lmKEFycmF5LmlzQXJyYXkodCl8fChpPV91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQ1KHQpKXx8ZSYmdCYmXCJudW1iZXJcIj09dHlwZW9mIHQubGVuZ3RoKXtpJiYodD1pKTt2YXIgbj0wLGU9ZnVuY3Rpb24oKXt9O3JldHVybntzOmUsbjpmdW5jdGlvbigpe3JldHVybiBuPj10Lmxlbmd0aD97ZG9uZTohMH06e2RvbmU6ITEsdmFsdWU6dFtuKytdfX0sZTpmdW5jdGlvbih0KXt0aHJvdyB0fSxmOmV9fXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX12YXIgcixvPSEwLHM9ITE7cmV0dXJue3M6ZnVuY3Rpb24oKXtpPWkuY2FsbCh0KX0sbjpmdW5jdGlvbigpe3ZhciB0PWkubmV4dCgpO3JldHVybiBvPXQuZG9uZSx0fSxlOmZ1bmN0aW9uKHQpe3M9ITAscj10fSxmOmZ1bmN0aW9uKCl7dHJ5e298fG51bGw9PWkucmV0dXJufHxpLnJldHVybigpfWZpbmFsbHl7aWYocyl0aHJvdyByfX19fWZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQ1KHQsZSl7aWYodCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5JDUodCxlKTt2YXIgaT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc2xpY2UoOCwtMSk7cmV0dXJuXCJNYXBcIj09PShpPVwiT2JqZWN0XCI9PT1pJiZ0LmNvbnN0cnVjdG9yP3QuY29uc3RydWN0b3IubmFtZTppKXx8XCJTZXRcIj09PWk/QXJyYXkuZnJvbSh0KTpcIkFyZ3VtZW50c1wiPT09aXx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QoaSk/X2FycmF5TGlrZVRvQXJyYXkkNSh0LGUpOnZvaWQgMH19ZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkkNSh0LGUpeyhudWxsPT1lfHxlPnQubGVuZ3RoKSYmKGU9dC5sZW5ndGgpO2Zvcih2YXIgaT0wLG49bmV3IEFycmF5KGUpO2k8ZTtpKyspbltpXT10W2ldO3JldHVybiBufWNsYXNzIFVzZXJUb3RhbEJldENoYW5nZU5vdGlmaWNhdGlvbiBleHRlbmRzIGZjYy5BQlMuQUJhc2VOb3RpZmljYXRpb257Y29uc3RydWN0b3IoKXtzdXBlcigpLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiVEFHX05BTUVcIix2b2lkIDApLHRoaXMuVEFHX05BTUU9ZmNjLnR5cGUuTm90aWZpY2F0aW9uVHlwZS5VU0VSX0JFVF9DSEFOR0V9c3Vic2NyaWJlKHQsZSl7c3VwZXIuc3Vic2NyaWJlKHQsZSl9bm90aWZ5KHQsZSl7aWYoMDx0aGlzLm9ic2VydmVyLnNpemUpe3ZhciBpLG49X2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkNSh0aGlzLm9ic2VydmVyKTt0cnl7Zm9yKG4ucygpOyEoaT1uLm4oKSkuZG9uZTspe3ZhciByPWkudmFsdWU7ci5wdXNoTm90aWZpY2F0aW9uKHQsZSksci5pc1Blcm1hbmVudHx8dGhpcy51bnN1YnNjcmliZShyKX19Y2F0Y2godCl7bi5lKHQpfWZpbmFsbHl7bi5mKCl9fX19ZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkNih0LGUpe3ZhciBpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJnRbU3ltYm9sLml0ZXJhdG9yXXx8dFtcIkBAaXRlcmF0b3JcIl07aWYoIWkpe2lmKEFycmF5LmlzQXJyYXkodCl8fChpPV91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQ2KHQpKXx8ZSYmdCYmXCJudW1iZXJcIj09dHlwZW9mIHQubGVuZ3RoKXtpJiYodD1pKTt2YXIgbj0wLGU9ZnVuY3Rpb24oKXt9O3JldHVybntzOmUsbjpmdW5jdGlvbigpe3JldHVybiBuPj10Lmxlbmd0aD97ZG9uZTohMH06e2RvbmU6ITEsdmFsdWU6dFtuKytdfX0sZTpmdW5jdGlvbih0KXt0aHJvdyB0fSxmOmV9fXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX12YXIgcixvPSEwLHM9ITE7cmV0dXJue3M6ZnVuY3Rpb24oKXtpPWkuY2FsbCh0KX0sbjpmdW5jdGlvbigpe3ZhciB0PWkubmV4dCgpO3JldHVybiBvPXQuZG9uZSx0fSxlOmZ1bmN0aW9uKHQpe3M9ITAscj10fSxmOmZ1bmN0aW9uKCl7dHJ5e298fG51bGw9PWkucmV0dXJufHxpLnJldHVybigpfWZpbmFsbHl7aWYocyl0aHJvdyByfX19fWZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQ2KHQsZSl7aWYodCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5JDYodCxlKTt2YXIgaT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc2xpY2UoOCwtMSk7cmV0dXJuXCJNYXBcIj09PShpPVwiT2JqZWN0XCI9PT1pJiZ0LmNvbnN0cnVjdG9yP3QuY29uc3RydWN0b3IubmFtZTppKXx8XCJTZXRcIj09PWk/QXJyYXkuZnJvbSh0KTpcIkFyZ3VtZW50c1wiPT09aXx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QoaSk/X2FycmF5TGlrZVRvQXJyYXkkNih0LGUpOnZvaWQgMH19ZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkkNih0LGUpeyhudWxsPT1lfHxlPnQubGVuZ3RoKSYmKGU9dC5sZW5ndGgpO2Zvcih2YXIgaT0wLG49bmV3IEFycmF5KGUpO2k8ZTtpKyspbltpXT10W2ldO3JldHVybiBufWNsYXNzIFVzZXJXaW5Qb2ludFN0YXRlTm90aWZpY2F0aW9uIGV4dGVuZHMgZmNjLkFCUy5BQmFzZU5vdGlmaWNhdGlvbntjb25zdHJ1Y3Rvcigpe3N1cGVyKCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJUQUdfTkFNRVwiLHZvaWQgMCksdGhpcy5UQUdfTkFNRT1mY2MudHlwZS5Ob3RpZmljYXRpb25UeXBlLlVTRVJfR0VUX1dJTn1zdWJzY3JpYmUodCxlKXtzdXBlci5zdWJzY3JpYmUodCxlKX1ub3RpZnkodCxlKXtpZigwPHRoaXMub2JzZXJ2ZXIuc2l6ZSl7dmFyIGksbj1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQ2KHRoaXMub2JzZXJ2ZXIpO3RyeXtmb3Iobi5zKCk7IShpPW4ubigpKS5kb25lOyl7dmFyIHI9aS52YWx1ZTtyLnB1c2hOb3RpZmljYXRpb24odCxlKSxyLmlzUGVybWFuZW50fHx0aGlzLnVuc3Vic2NyaWJlKHIpfX1jYXRjaCh0KXtuLmUodCl9ZmluYWxseXtuLmYoKX19fX1mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQ3KHQsZSl7dmFyIGk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmdFtTeW1ib2wuaXRlcmF0b3JdfHx0W1wiQEBpdGVyYXRvclwiXTtpZighaSl7aWYoQXJyYXkuaXNBcnJheSh0KXx8KGk9X3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JDcodCkpfHxlJiZ0JiZcIm51bWJlclwiPT10eXBlb2YgdC5sZW5ndGgpe2kmJih0PWkpO3ZhciBuPTAsZT1mdW5jdGlvbigpe307cmV0dXJue3M6ZSxuOmZ1bmN0aW9uKCl7cmV0dXJuIG4+PXQubGVuZ3RoP3tkb25lOiEwfTp7ZG9uZTohMSx2YWx1ZTp0W24rK119fSxlOmZ1bmN0aW9uKHQpe3Rocm93IHR9LGY6ZX19dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfXZhciByLG89ITAscz0hMTtyZXR1cm57czpmdW5jdGlvbigpe2k9aS5jYWxsKHQpfSxuOmZ1bmN0aW9uKCl7dmFyIHQ9aS5uZXh0KCk7cmV0dXJuIG89dC5kb25lLHR9LGU6ZnVuY3Rpb24odCl7cz0hMCxyPXR9LGY6ZnVuY3Rpb24oKXt0cnl7b3x8bnVsbD09aS5yZXR1cm58fGkucmV0dXJuKCl9ZmluYWxseXtpZihzKXRocm93IHJ9fX19ZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JDcodCxlKXtpZih0KXtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkkNyh0LGUpO3ZhciBpPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KS5zbGljZSg4LC0xKTtyZXR1cm5cIk1hcFwiPT09KGk9XCJPYmplY3RcIj09PWkmJnQuY29uc3RydWN0b3I/dC5jb25zdHJ1Y3Rvci5uYW1lOmkpfHxcIlNldFwiPT09aT9BcnJheS5mcm9tKHQpOlwiQXJndW1lbnRzXCI9PT1pfHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChpKT9fYXJyYXlMaWtlVG9BcnJheSQ3KHQsZSk6dm9pZCAwfX1mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheSQ3KHQsZSl7KG51bGw9PWV8fGU+dC5sZW5ndGgpJiYoZT10Lmxlbmd0aCk7Zm9yKHZhciBpPTAsbj1uZXcgQXJyYXkoZSk7aTxlO2krKyluW2ldPXRbaV07cmV0dXJuIG59Y2xhc3MgUmVzcG9uc2VSZXN1bHROb3RpZmljYXRpb24gZXh0ZW5kcyBmY2MuQUJTLkFCYXNlTm90aWZpY2F0aW9ue2NvbnN0cnVjdG9yKCl7c3VwZXIoKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIlRBR19OQU1FXCIsdm9pZCAwKSx0aGlzLlRBR19OQU1FPWZjYy50eXBlLk5vdGlmaWNhdGlvblR5cGUuUkVTUE9OU0VfUkVTVUxUfXN1YnNjcmliZSh0LGUpe3N1cGVyLnN1YnNjcmliZSh0LGUpfW5vdGlmeSh0KXtpZigwPHRoaXMub2JzZXJ2ZXIuc2l6ZSl7dmFyIGUsaT1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQ3KHRoaXMub2JzZXJ2ZXIpO3RyeXtmb3IoaS5zKCk7IShlPWkubigpKS5kb25lOyl7dmFyIG49ZS52YWx1ZTtuLnB1c2hOb3RpZmljYXRpb24odCksbi5pc1Blcm1hbmVudHx8dGhpcy51bnN1YnNjcmliZShuKX19Y2F0Y2godCl7aS5lKHQpfWZpbmFsbHl7aS5mKCl9fX19ZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkOCh0LGUpe3ZhciBpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJnRbU3ltYm9sLml0ZXJhdG9yXXx8dFtcIkBAaXRlcmF0b3JcIl07aWYoIWkpe2lmKEFycmF5LmlzQXJyYXkodCl8fChpPV91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQ4KHQpKXx8ZSYmdCYmXCJudW1iZXJcIj09dHlwZW9mIHQubGVuZ3RoKXtpJiYodD1pKTt2YXIgbj0wLGU9ZnVuY3Rpb24oKXt9O3JldHVybntzOmUsbjpmdW5jdGlvbigpe3JldHVybiBuPj10Lmxlbmd0aD97ZG9uZTohMH06e2RvbmU6ITEsdmFsdWU6dFtuKytdfX0sZTpmdW5jdGlvbih0KXt0aHJvdyB0fSxmOmV9fXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX12YXIgcixvPSEwLHM9ITE7cmV0dXJue3M6ZnVuY3Rpb24oKXtpPWkuY2FsbCh0KX0sbjpmdW5jdGlvbigpe3ZhciB0PWkubmV4dCgpO3JldHVybiBvPXQuZG9uZSx0fSxlOmZ1bmN0aW9uKHQpe3M9ITAscj10fSxmOmZ1bmN0aW9uKCl7dHJ5e298fG51bGw9PWkucmV0dXJufHxpLnJldHVybigpfWZpbmFsbHl7aWYocyl0aHJvdyByfX19fWZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQ4KHQsZSl7aWYodCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5JDgodCxlKTt2YXIgaT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc2xpY2UoOCwtMSk7cmV0dXJuXCJNYXBcIj09PShpPVwiT2JqZWN0XCI9PT1pJiZ0LmNvbnN0cnVjdG9yP3QuY29uc3RydWN0b3IubmFtZTppKXx8XCJTZXRcIj09PWk/QXJyYXkuZnJvbSh0KTpcIkFyZ3VtZW50c1wiPT09aXx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QoaSk/X2FycmF5TGlrZVRvQXJyYXkkOCh0LGUpOnZvaWQgMH19ZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkkOCh0LGUpeyhudWxsPT1lfHxlPnQubGVuZ3RoKSYmKGU9dC5sZW5ndGgpO2Zvcih2YXIgaT0wLG49bmV3IEFycmF5KGUpO2k8ZTtpKyspbltpXT10W2ldO3JldHVybiBufWNsYXNzIFNsb3RSb3dFbmROb3RpZmljYXRpb24gZXh0ZW5kcyBmY2MuQUJTLkFCYXNlTm90aWZpY2F0aW9ue2NvbnN0cnVjdG9yKCl7c3VwZXIoKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIlRBR19OQU1FXCIsdm9pZCAwKSx0aGlzLlRBR19OQU1FPWZjYy50eXBlLk5vdGlmaWNhdGlvblR5cGUuU0xPVF9ST1dfRU5EfXN1YnNjcmliZSh0LGUpe3N1cGVyLnN1YnNjcmliZSh0LGUpfW5vdGlmeSh0LGUpe2lmKDA8dGhpcy5vYnNlcnZlci5zaXplKXt2YXIgaSxuPV9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyJDgodGhpcy5vYnNlcnZlcik7dHJ5e2ZvcihuLnMoKTshKGk9bi5uKCkpLmRvbmU7KXt2YXIgcj1pLnZhbHVlO3IucHVzaE5vdGlmaWNhdGlvbih0LGUpLHIuaXNQZXJtYW5lbnR8fHRoaXMudW5zdWJzY3JpYmUocil9fWNhdGNoKHQpe24uZSh0KX1maW5hbGx5e24uZigpfX19fWNsYXNzIEF1dG9TdGF0ZUNoYW5nZU9ic2VydmVyIGV4dGVuZHMgZmNjLkFCUy5BQmFzZU9ic2VydmVye2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIodCxlKX1wdXNoTm90aWZpY2F0aW9uKHQsZSxpKXtzdXBlci5wdXNoTm90aWZpY2F0aW9uKHQsZSxpKX19Y2xhc3MgU2Nyb2xsRm9jdXNTdGF0ZU9ic2VydmVyIGV4dGVuZHMgZmNjLkFCUy5BQmFzZU9ic2VydmVye2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIodCxlKX1wdXNoTm90aWZpY2F0aW9uKHQsZSl7c3VwZXIucHVzaE5vdGlmaWNhdGlvbih0LGUpfX1jbGFzcyBTcGVlZFN0YXRlQ2hhbmdlT2JzZXJ2ZXIgZXh0ZW5kcyBmY2MuQUJTLkFCYXNlT2JzZXJ2ZXJ7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpfXB1c2hOb3RpZmljYXRpb24odCl7c3VwZXIucHVzaE5vdGlmaWNhdGlvbih0KX19Y2xhc3MgU3RvcE5vd1N0YXRlT2JzZXJ2ZXIgZXh0ZW5kcyBmY2MuQUJTLkFCYXNlT2JzZXJ2ZXJ7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpfXB1c2hOb3RpZmljYXRpb24oKXtzdXBlci5wdXNoTm90aWZpY2F0aW9uKCl9fWNsYXNzIFVzZXJNb25leUNoYW5nZU9ic2VydmVyIGV4dGVuZHMgZmNjLkFCUy5BQmFzZU9ic2VydmVye2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIodCxlKX1wdXNoTm90aWZpY2F0aW9uKHQpe3N1cGVyLnB1c2hOb3RpZmljYXRpb24odCl9fWNsYXNzIFVzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyIGV4dGVuZHMgZmNjLkFCUy5BQmFzZU9ic2VydmVye2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIodCxlKX1wdXNoTm90aWZpY2F0aW9uKHQsZSl7c3VwZXIucHVzaE5vdGlmaWNhdGlvbih0LGUpfX1jbGFzcyBVc2VyV2luUG9pbnRTdGF0ZU9ic2VydmVyIGV4dGVuZHMgZmNjLkFCUy5BQmFzZU9ic2VydmVye2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIodCxlKX1wdXNoTm90aWZpY2F0aW9uKHQsZSl7c3VwZXIucHVzaE5vdGlmaWNhdGlvbih0LGUpfX1jbGFzcyBSZXNwb25zZVJlc3VsdE9ic2VydmVyIGV4dGVuZHMgZmNjLkFCUy5BQmFzZU9ic2VydmVye2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIodCxlKX1wdXNoTm90aWZpY2F0aW9uKHQpe3N1cGVyLnB1c2hOb3RpZmljYXRpb24odCl9fWNsYXNzIFNsb3RSb3dFbmRPYnNlcnZlciBleHRlbmRzIGZjYy5BQlMuQUJhc2VPYnNlcnZlcntjb25zdHJ1Y3Rvcih0LGUpe3N1cGVyKHQsZSl9cHVzaE5vdGlmaWNhdGlvbih0LGUpe3N1cGVyLnB1c2hOb3RpZmljYXRpb24odCxlKX19ZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKHQsZSxpLG4scixvLHMpe3RyeXt2YXIgYT10W29dKHMpLHU9YS52YWx1ZX1jYXRjaCh0KXtyZXR1cm4gdm9pZCBpKHQpfWEuZG9uZT9lKHUpOlByb21pc2UucmVzb2x2ZSh1KS50aGVuKG4scil9ZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoYSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxzPWFyZ3VtZW50cztyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZSxpKXt2YXIgbj1hLmFwcGx5KHQscyk7ZnVuY3Rpb24gcih0KXthc3luY0dlbmVyYXRvclN0ZXAobixlLGkscixvLFwibmV4dFwiLHQpfWZ1bmN0aW9uIG8odCl7YXN5bmNHZW5lcmF0b3JTdGVwKG4sZSxpLHIsbyxcInRocm93XCIsdCl9cih2b2lkIDApfSl9fXZhciB1bmRlZmluZWQkMSxPcD1PYmplY3QucHJvdG90eXBlLGhhc093bj1PcC5oYXNPd25Qcm9wZXJ0eSwkU3ltYm9sPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbD9TeW1ib2w6e30saXRlcmF0b3JTeW1ib2w9JFN5bWJvbC5pdGVyYXRvcnx8XCJAQGl0ZXJhdG9yXCIsYXN5bmNJdGVyYXRvclN5bWJvbD0kU3ltYm9sLmFzeW5jSXRlcmF0b3J8fFwiQEBhc3luY0l0ZXJhdG9yXCIsdG9TdHJpbmdUYWdTeW1ib2w9JFN5bWJvbC50b1N0cmluZ1RhZ3x8XCJAQHRvU3RyaW5nVGFnXCI7ZnVuY3Rpb24gd3JhcCh0LGUsaSxuKXtlPWUmJmUucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yP2U6R2VuZXJhdG9yLGU9T2JqZWN0LmNyZWF0ZShlLnByb3RvdHlwZSksbj1uZXcgQ29udGV4dChufHxbXSk7cmV0dXJuIGUuX2ludm9rZT1tYWtlSW52b2tlTWV0aG9kKHQsaSxuKSxlfWZ1bmN0aW9uIHRyeUNhdGNoKHQsZSxpKXt0cnl7cmV0dXJue3R5cGU6XCJub3JtYWxcIixhcmc6dC5jYWxsKGUsaSl9fWNhdGNoKHQpe3JldHVybnt0eXBlOlwidGhyb3dcIixhcmc6dH19fXZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0PVwic3VzcGVuZGVkU3RhcnRcIixHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkPVwic3VzcGVuZGVkWWllbGRcIixHZW5TdGF0ZUV4ZWN1dGluZz1cImV4ZWN1dGluZ1wiLEdlblN0YXRlQ29tcGxldGVkPVwiY29tcGxldGVkXCIsQ29udGludWVTZW50aW5lbD17fTtmdW5jdGlvbiBHZW5lcmF0b3IoKXt9ZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKXt9ZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKXt9dmFyIEl0ZXJhdG9yUHJvdG90eXBlPXt9O0l0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfTt2YXIgZ2V0UHJvdG89T2JqZWN0LmdldFByb3RvdHlwZU9mLE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlPWdldFByb3RvJiZnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7TmF0aXZlSXRlcmF0b3JQcm90b3R5cGUmJk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIT09T3AmJmhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLGl0ZXJhdG9yU3ltYm9sKSYmKEl0ZXJhdG9yUHJvdG90eXBlPU5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlKTt2YXIgR3A9R2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlPUdlbmVyYXRvci5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7ZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHQpe1tcIm5leHRcIixcInRocm93XCIsXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihlKXt0W2VdPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9pbnZva2UoZSx0KX19KX1mdW5jdGlvbiBpc0dlbmVyYXRvckZ1bmN0aW9uKHQpe3Q9XCJmdW5jdGlvblwiPT10eXBlb2YgdCYmdC5jb25zdHJ1Y3RvcjtyZXR1cm4hIXQmJih0PT09R2VuZXJhdG9yRnVuY3Rpb258fFwiR2VuZXJhdG9yRnVuY3Rpb25cIj09PSh0LmRpc3BsYXlOYW1lfHx0Lm5hbWUpKX1mdW5jdGlvbiBtYXJrKHQpe3JldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKHQsR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpOih0Ll9fcHJvdG9fXz1HZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSx0b1N0cmluZ1RhZ1N5bWJvbCBpbiB0fHwodFt0b1N0cmluZ1RhZ1N5bWJvbF09XCJHZW5lcmF0b3JGdW5jdGlvblwiKSksdC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShHcCksdH1mdW5jdGlvbiBhd3JhcCh0KXtyZXR1cm57X19hd2FpdDp0fX1mdW5jdGlvbiBBc3luY0l0ZXJhdG9yKHMsYSl7dmFyIGU7dGhpcy5faW52b2tlPWZ1bmN0aW9uKGksbil7ZnVuY3Rpb24gdCgpe3JldHVybiBuZXcgYShmdW5jdGlvbih0LGUpeyFmdW5jdGlvbiBlKHQsaSxuLHIpe3Q9dHJ5Q2F0Y2goc1t0XSxzLGkpO2lmKFwidGhyb3dcIiE9PXQudHlwZSl7dmFyIG89dC5hcmc7cmV0dXJuKGk9by52YWx1ZSkmJlwib2JqZWN0XCI9PXR5cGVvZiBpJiZoYXNPd24uY2FsbChpLFwiX19hd2FpdFwiKT9hLnJlc29sdmUoaS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHQpe2UoXCJuZXh0XCIsdCxuLHIpfSxmdW5jdGlvbih0KXtlKFwidGhyb3dcIix0LG4scil9KTphLnJlc29sdmUoaSkudGhlbihmdW5jdGlvbih0KXtvLnZhbHVlPXQsbihvKX0sZnVuY3Rpb24odCl7cmV0dXJuIGUoXCJ0aHJvd1wiLHQsbixyKX0pfXIodC5hcmcpfShpLG4sdCxlKX0pfXJldHVybiBlPWU/ZS50aGVuKHQsdCk6dCgpfX1mdW5jdGlvbiBhc3luYyh0LGUsaSxuLHIpe3ZvaWQgMD09PXImJihyPVByb21pc2UpO3ZhciBvPW5ldyBBc3luY0l0ZXJhdG9yKHdyYXAodCxlLGksbikscik7cmV0dXJuIGlzR2VuZXJhdG9yRnVuY3Rpb24oZSk/bzpvLm5leHQoKS50aGVuKGZ1bmN0aW9uKHQpe3JldHVybiB0LmRvbmU/dC52YWx1ZTpvLm5leHQoKX0pfWZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QocixvLHMpe3ZhciBhPUdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7cmV0dXJuIGZ1bmN0aW9uKHQsZSl7aWYoYT09PUdlblN0YXRlRXhlY3V0aW5nKXRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7aWYoYT09PUdlblN0YXRlQ29tcGxldGVkKXtpZihcInRocm93XCI9PT10KXRocm93IGU7cmV0dXJuIGRvbmVSZXN1bHQoKX1mb3Iocy5tZXRob2Q9dCxzLmFyZz1lOzspe3ZhciBpPXMuZGVsZWdhdGU7aWYoaSl7dmFyIG49bWF5YmVJbnZva2VEZWxlZ2F0ZShpLHMpO2lmKG4pe2lmKG49PT1Db250aW51ZVNlbnRpbmVsKWNvbnRpbnVlO3JldHVybiBufX1pZihcIm5leHRcIj09PXMubWV0aG9kKXMuc2VudD1zLl9zZW50PXMuYXJnO2Vsc2UgaWYoXCJ0aHJvd1wiPT09cy5tZXRob2Qpe2lmKGE9PT1HZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KXRocm93IGE9R2VuU3RhdGVDb21wbGV0ZWQscy5hcmc7cy5kaXNwYXRjaEV4Y2VwdGlvbihzLmFyZyl9ZWxzZVwicmV0dXJuXCI9PT1zLm1ldGhvZCYmcy5hYnJ1cHQoXCJyZXR1cm5cIixzLmFyZyk7YT1HZW5TdGF0ZUV4ZWN1dGluZztuPXRyeUNhdGNoKHIsbyxzKTtpZihcIm5vcm1hbFwiPT09bi50eXBlKXtpZihhPXMuZG9uZT9HZW5TdGF0ZUNvbXBsZXRlZDpHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkLG4uYXJnIT09Q29udGludWVTZW50aW5lbClyZXR1cm57dmFsdWU6bi5hcmcsZG9uZTpzLmRvbmV9fWVsc2VcInRocm93XCI9PT1uLnR5cGUmJihhPUdlblN0YXRlQ29tcGxldGVkLHMubWV0aG9kPVwidGhyb3dcIixzLmFyZz1uLmFyZyl9fX1mdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKHQsZSl7dmFyIGk9dC5pdGVyYXRvcltlLm1ldGhvZF07aWYoaT09PXVuZGVmaW5lZCQxKXtpZihlLmRlbGVnYXRlPW51bGwsXCJ0aHJvd1wiPT09ZS5tZXRob2Qpe2lmKHQuaXRlcmF0b3IucmV0dXJuJiYoZS5tZXRob2Q9XCJyZXR1cm5cIixlLmFyZz11bmRlZmluZWQkMSxtYXliZUludm9rZURlbGVnYXRlKHQsZSksXCJ0aHJvd1wiPT09ZS5tZXRob2QpKXJldHVybiBDb250aW51ZVNlbnRpbmVsO2UubWV0aG9kPVwidGhyb3dcIixlLmFyZz1uZXcgVHlwZUVycm9yKFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKX1yZXR1cm4gQ29udGludWVTZW50aW5lbH1pPXRyeUNhdGNoKGksdC5pdGVyYXRvcixlLmFyZyk7aWYoXCJ0aHJvd1wiPT09aS50eXBlKXJldHVybiBlLm1ldGhvZD1cInRocm93XCIsZS5hcmc9aS5hcmcsZS5kZWxlZ2F0ZT1udWxsLENvbnRpbnVlU2VudGluZWw7aT1pLmFyZztyZXR1cm4gaT9pLmRvbmU/KGVbdC5yZXN1bHROYW1lXT1pLnZhbHVlLGUubmV4dD10Lm5leHRMb2MsXCJyZXR1cm5cIiE9PWUubWV0aG9kJiYoZS5tZXRob2Q9XCJuZXh0XCIsZS5hcmc9dW5kZWZpbmVkJDEpLGUuZGVsZWdhdGU9bnVsbCxDb250aW51ZVNlbnRpbmVsKTppOihlLm1ldGhvZD1cInRocm93XCIsZS5hcmc9bmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpLGUuZGVsZWdhdGU9bnVsbCxDb250aW51ZVNlbnRpbmVsKX1mdW5jdGlvbiBwdXNoVHJ5RW50cnkodCl7dmFyIGU9e3RyeUxvYzp0WzBdfTsxIGluIHQmJihlLmNhdGNoTG9jPXRbMV0pLDIgaW4gdCYmKGUuZmluYWxseUxvYz10WzJdLGUuYWZ0ZXJMb2M9dFszXSksdGhpcy50cnlFbnRyaWVzLnB1c2goZSl9ZnVuY3Rpb24gcmVzZXRUcnlFbnRyeSh0KXt2YXIgZT10LmNvbXBsZXRpb258fHt9O2UudHlwZT1cIm5vcm1hbFwiLGRlbGV0ZSBlLmFyZyx0LmNvbXBsZXRpb249ZX1mdW5jdGlvbiBDb250ZXh0KHQpe3RoaXMudHJ5RW50cmllcz1be3RyeUxvYzpcInJvb3RcIn1dLHQuZm9yRWFjaChwdXNoVHJ5RW50cnksdGhpcyksdGhpcy5yZXNldCghMCl9ZnVuY3Rpb24ga2V5cyhpKXt2YXIgdCxuPVtdO2Zvcih0IGluIGkpbi5wdXNoKHQpO3JldHVybiBuLnJldmVyc2UoKSxmdW5jdGlvbiB0KCl7Zm9yKDtuLmxlbmd0aDspe3ZhciBlPW4ucG9wKCk7aWYoZSBpbiBpKXJldHVybiB0LnZhbHVlPWUsdC5kb25lPSExLHR9cmV0dXJuIHQuZG9uZT0hMCx0fX1mdW5jdGlvbiB2YWx1ZXMoZSl7aWYoZSl7dmFyIHQ9ZVtpdGVyYXRvclN5bWJvbF07aWYodClyZXR1cm4gdC5jYWxsKGUpO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUubmV4dClyZXR1cm4gZTtpZighaXNOYU4oZS5sZW5ndGgpKXt2YXIgaT0tMSx0PWZ1bmN0aW9uIHQoKXtmb3IoOysraTxlLmxlbmd0aDspaWYoaGFzT3duLmNhbGwoZSxpKSlyZXR1cm4gdC52YWx1ZT1lW2ldLHQuZG9uZT0hMSx0O3JldHVybiB0LnZhbHVlPXVuZGVmaW5lZCQxLHQuZG9uZT0hMCx0fTtyZXR1cm4gdC5uZXh0PXR9fXJldHVybntuZXh0OmRvbmVSZXN1bHR9fWZ1bmN0aW9uIGRvbmVSZXN1bHQoKXtyZXR1cm57dmFsdWU6dW5kZWZpbmVkJDEsZG9uZTohMH19KEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZT1HcC5jb25zdHJ1Y3Rvcj1HZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSkuY29uc3RydWN0b3I9R2VuZXJhdG9yRnVuY3Rpb24sR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdPUdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lPVwiR2VuZXJhdG9yRnVuY3Rpb25cIixkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpLEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCksR3BbdG9TdHJpbmdUYWdTeW1ib2xdPVwiR2VuZXJhdG9yXCIsR3BbaXRlcmF0b3JTeW1ib2xdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LEdwLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJbb2JqZWN0IEdlbmVyYXRvcl1cIn0sQ29udGV4dC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOkNvbnRleHQscmVzZXQ6ZnVuY3Rpb24odCl7aWYodGhpcy5wcmV2PTAsdGhpcy5uZXh0PTAsdGhpcy5zZW50PXRoaXMuX3NlbnQ9dW5kZWZpbmVkJDEsdGhpcy5kb25lPSExLHRoaXMuZGVsZWdhdGU9bnVsbCx0aGlzLm1ldGhvZD1cIm5leHRcIix0aGlzLmFyZz11bmRlZmluZWQkMSx0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KSwhdClmb3IodmFyIGUgaW4gdGhpcylcInRcIj09PWUuY2hhckF0KDApJiZoYXNPd24uY2FsbCh0aGlzLGUpJiYhaXNOYU4oK2Uuc2xpY2UoMSkpJiYodGhpc1tlXT11bmRlZmluZWQkMSl9LHN0b3A6ZnVuY3Rpb24oKXt0aGlzLmRvbmU9ITA7dmFyIHQ9dGhpcy50cnlFbnRyaWVzWzBdLmNvbXBsZXRpb247aWYoXCJ0aHJvd1wiPT09dC50eXBlKXRocm93IHQuYXJnO3JldHVybiB0aGlzLnJ2YWx9LGRpc3BhdGNoRXhjZXB0aW9uOmZ1bmN0aW9uKGkpe2lmKHRoaXMuZG9uZSl0aHJvdyBpO3ZhciBuPXRoaXM7ZnVuY3Rpb24gdCh0LGUpe3JldHVybiBvLnR5cGU9XCJ0aHJvd1wiLG8uYXJnPWksbi5uZXh0PXQsZSYmKG4ubWV0aG9kPVwibmV4dFwiLG4uYXJnPXVuZGVmaW5lZCQxKSwhIWV9Zm9yKHZhciBlPXRoaXMudHJ5RW50cmllcy5sZW5ndGgtMTswPD1lOy0tZSl7dmFyIHI9dGhpcy50cnlFbnRyaWVzW2VdLG89ci5jb21wbGV0aW9uO2lmKFwicm9vdFwiPT09ci50cnlMb2MpcmV0dXJuIHQoXCJlbmRcIik7aWYoci50cnlMb2M8PXRoaXMucHJldil7dmFyIHM9aGFzT3duLmNhbGwocixcImNhdGNoTG9jXCIpLGE9aGFzT3duLmNhbGwocixcImZpbmFsbHlMb2NcIik7aWYocyYmYSl7aWYodGhpcy5wcmV2PHIuY2F0Y2hMb2MpcmV0dXJuIHQoci5jYXRjaExvYywhMCk7aWYodGhpcy5wcmV2PHIuZmluYWxseUxvYylyZXR1cm4gdChyLmZpbmFsbHlMb2MpfWVsc2UgaWYocyl7aWYodGhpcy5wcmV2PHIuY2F0Y2hMb2MpcmV0dXJuIHQoci5jYXRjaExvYywhMCl9ZWxzZXtpZighYSl0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtpZih0aGlzLnByZXY8ci5maW5hbGx5TG9jKXJldHVybiB0KHIuZmluYWxseUxvYyl9fX19LGFicnVwdDpmdW5jdGlvbih0LGUpe2Zvcih2YXIgaT10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7MDw9aTstLWkpe3ZhciBuPXRoaXMudHJ5RW50cmllc1tpXTtpZihuLnRyeUxvYzw9dGhpcy5wcmV2JiZoYXNPd24uY2FsbChuLFwiZmluYWxseUxvY1wiKSYmdGhpcy5wcmV2PG4uZmluYWxseUxvYyl7dmFyIHI9bjticmVha319dmFyIG89KHI9ciYmKFwiYnJlYWtcIj09PXR8fFwiY29udGludWVcIj09PXQpJiZyLnRyeUxvYzw9ZSYmZTw9ci5maW5hbGx5TG9jP251bGw6cik/ci5jb21wbGV0aW9uOnt9O3JldHVybiBvLnR5cGU9dCxvLmFyZz1lLHI/KHRoaXMubWV0aG9kPVwibmV4dFwiLHRoaXMubmV4dD1yLmZpbmFsbHlMb2MsQ29udGludWVTZW50aW5lbCk6dGhpcy5jb21wbGV0ZShvKX0sY29tcGxldGU6ZnVuY3Rpb24odCxlKXtpZihcInRocm93XCI9PT10LnR5cGUpdGhyb3cgdC5hcmc7cmV0dXJuXCJicmVha1wiPT09dC50eXBlfHxcImNvbnRpbnVlXCI9PT10LnR5cGU/dGhpcy5uZXh0PXQuYXJnOlwicmV0dXJuXCI9PT10LnR5cGU/KHRoaXMucnZhbD10aGlzLmFyZz10LmFyZyx0aGlzLm1ldGhvZD1cInJldHVyblwiLHRoaXMubmV4dD1cImVuZFwiKTpcIm5vcm1hbFwiPT09dC50eXBlJiZlJiYodGhpcy5uZXh0PWUpLENvbnRpbnVlU2VudGluZWx9LGZpbmlzaDpmdW5jdGlvbih0KXtmb3IodmFyIGU9dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xOzA8PWU7LS1lKXt2YXIgaT10aGlzLnRyeUVudHJpZXNbZV07aWYoaS5maW5hbGx5TG9jPT09dClyZXR1cm4gdGhpcy5jb21wbGV0ZShpLmNvbXBsZXRpb24saS5hZnRlckxvYykscmVzZXRUcnlFbnRyeShpKSxDb250aW51ZVNlbnRpbmVsfX0sY2F0Y2g6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXRoaXMudHJ5RW50cmllcy5sZW5ndGgtMTswPD1lOy0tZSl7dmFyIGk9dGhpcy50cnlFbnRyaWVzW2VdO2lmKGkudHJ5TG9jPT09dCl7dmFyIG4scj1pLmNvbXBsZXRpb247cmV0dXJuXCJ0aHJvd1wiPT09ci50eXBlJiYobj1yLmFyZyxyZXNldFRyeUVudHJ5KGkpKSxufX10aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIil9LGRlbGVnYXRlWWllbGQ6ZnVuY3Rpb24odCxlLGkpe3JldHVybiB0aGlzLmRlbGVnYXRlPXtpdGVyYXRvcjp2YWx1ZXModCkscmVzdWx0TmFtZTplLG5leHRMb2M6aX0sXCJuZXh0XCI9PT10aGlzLm1ldGhvZCYmKHRoaXMuYXJnPXVuZGVmaW5lZCQxKSxDb250aW51ZVNlbnRpbmVsfX07dmFyIFBhZ2VDaGFuZ2VUeXBlLERheVR5cGUsX3JlZ2VuZXJhdG9yUnVudGltZT17d3JhcDp3cmFwLGlzR2VuZXJhdG9yRnVuY3Rpb246aXNHZW5lcmF0b3JGdW5jdGlvbixBc3luY0l0ZXJhdG9yOkFzeW5jSXRlcmF0b3IsbWFyazptYXJrLGF3cmFwOmF3cmFwLGFzeW5jOmFzeW5jLGtleXM6a2V5cyx2YWx1ZXM6dmFsdWVzfTtjbGFzcyBBTWFpbkdhbWVCdXR0b25UZW1wbGF0ZSBleHRlbmRzIEFHZW5lcmljVGVtcGxhdGV7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiaXNTaG93VG90YWxCZXRGcmFtZVwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJrZXlib2FyZExpc3RlbmVyXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9hdXRvU3RhdGVDaGFuZ2VPYnNlcnZlclwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJub3dTcGVlZFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJpc0F1dG9TdGF0ZVwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJub3dBdXRvVHlwZVwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJsb25nVG91Y2hUaW1lXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcInVzZXJNb25leVwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfdXNlck1vbmV5Q2hhbmdlT2JzZXJ2ZXJcIix2b2lkIDApfW9uTG9hZCgpe3RoaXMuaXNTaG93VG90YWxCZXRGcmFtZT0hMSx0aGlzLmtleWJvYXJkTGlzdGVuZXI9ITEsdGhpcy5ub3dBdXRvVHlwZT1mY2MuY29uZmlnTWdyLmF1dG9Db3VudCx0aGlzLmxvbmdUb3VjaFRpbWU9LjUsdGhpcy5ub3dTcGVlZD1mY2MuY29uZmlnTWdyLmlzU3BlZWRVcCx0aGlzLmFkZE5vdGlmaWNhdGlvbigpLHN1cGVyLm9uTG9hZCgpfWFkZE5vdGlmaWNhdGlvbigpe2ZjYy5ub3RpZmljYXRpb25NZ3IoKS5nZXROb3RpZmljYXRpb24oZmNjLnR5cGUuTm90aWZpY2F0aW9uVHlwZS5BVVRPX0NIQU5HRSkuc3Vic2NyaWJlKHRoaXMuZ2V0QXV0b1N0YXRlQ2hhbmdlT2JzZXJ2ZXIoKSwhMCksZmNjLm5vdGlmaWNhdGlvbk1ncigpLmdldE5vdGlmaWNhdGlvbihmY2MudHlwZS5Ob3RpZmljYXRpb25UeXBlLlVTRVJfTU9ORVlfQ0hBTkdFKS5zdWJzY3JpYmUodGhpcy5nZXRVc2VyTW9uZXlDaGFuZ2VPYnNlcnZlcigpLCEwKX1zdGFydEJ1dHRvbk9uVG91Y2hTdGFydCgpe3RoaXMudW5zY2hlZHVsZSh0aGlzLmxvbmdUb3VjaFRpbWVyKSx0aGlzLmlzQXV0b1N0YXRlP3RoaXMuYXV0b05vdGlmeSghMSx0aGlzLm5vd0F1dG9UeXBlKTp0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmxvbmdUb3VjaFRpbWVyLHRoaXMubG9uZ1RvdWNoVGltZSl9bG9uZ1RvdWNoVGltZXIoKXt2YXIgZT10aGlzO3JldHVybiBfYXN5bmNUb0dlbmVyYXRvcihfcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gdCgpe3JldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24odCl7Zm9yKDs7KXN3aXRjaCh0LnByZXY9dC5uZXh0KXtjYXNlIDA6aWYoZS5hdXRvTm90aWZ5KCEwLGUubm93QXV0b1R5cGUpLGZjYy5wcm9jZXNzTWdyLmdhbWVTdGF0ZT09ZmNjLnR5cGUuR2FtZVN0YXRlVHlwZS5TVEFOREJZKXJldHVybiB0Lm5leHQ9NCxlLnN0YXJ0QnV0dG9uRXZlbnQoKTt0Lm5leHQ9NDticmVhaztjYXNlIDQ6Y2FzZVwiZW5kXCI6cmV0dXJuIHQuc3RvcCgpfX0sdCl9KSkoKX1hdXRvTm90aWZ5KHQsZSl7ZmNjLm5vdGlmaWNhdGlvbk1ncigpLmdldE5vdGlmaWNhdGlvbihmY2MudHlwZS5Ob3RpZmljYXRpb25UeXBlLkFVVE9fQ0hBTkdFKS5ub3RpZnkodCxlLGUpfXN0YXJ0QnV0dG9uT25Ub3VjaEVuZCgpe3ZhciBlPXRoaXM7cmV0dXJuIF9hc3luY1RvR2VuZXJhdG9yKF9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiB0KCl7cmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbih0KXtmb3IoOzspc3dpdGNoKHQucHJldj10Lm5leHQpe2Nhc2UgMDppZihlLnVuc2NoZWR1bGUoZS5sb25nVG91Y2hUaW1lciksZS5pc0F1dG9TdGF0ZSlyZXR1cm4gdC5hYnJ1cHQoXCJyZXR1cm5cIik7dC5uZXh0PTM7YnJlYWs7Y2FzZSAzOnJldHVybiB0Lm5leHQ9NSxlLnN0YXJ0QnV0dG9uRXZlbnQoKTtjYXNlIDU6Y2FzZVwiZW5kXCI6cmV0dXJuIHQuc3RvcCgpfX0sdCl9KSkoKX1rZXlib2FyZFNwYWNlVG91Y2hTdGFydCh0KXt0LmtleUNvZGU9PT1jYy5tYWNyby5LRVkuc3BhY2UmJih0aGlzLmtleWJvYXJkTGlzdGVuZXJ8fCh0aGlzLmtleWJvYXJkTGlzdGVuZXI9ITAsdGhpcy5zdGFydEJ1dHRvbk9uVG91Y2hTdGFydCgpKSl9a2V5Ym9hcmRTcGFjZVRvdWNoRW5kKGUpe3ZhciBpPXRoaXM7cmV0dXJuIF9hc3luY1RvR2VuZXJhdG9yKF9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiB0KCl7cmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbih0KXtmb3IoOzspc3dpdGNoKHQucHJldj10Lm5leHQpe2Nhc2UgMDp0LnQwPWUua2V5Q29kZSx0Lm5leHQ9dC50MD09PWNjLm1hY3JvLktFWS5zcGFjZT8zOjc7YnJlYWs7Y2FzZSAzOnJldHVybiB0Lm5leHQ9NSxpLnN0YXJ0QnV0dG9uT25Ub3VjaEVuZCgpO2Nhc2UgNTpyZXR1cm4gaS5rZXlib2FyZExpc3RlbmVyPSExLHQuYWJydXB0KFwiYnJlYWtcIiw3KTtjYXNlIDc6Y2FzZVwiZW5kXCI6cmV0dXJuIHQuc3RvcCgpfX0sdCl9KSkoKX1nZXRBdXRvU3RhdGVDaGFuZ2VPYnNlcnZlcigpe3ZhciByPXRoaXM7cmV0dXJuIHRoaXMuX2F1dG9TdGF0ZUNoYW5nZU9ic2VydmVyfHwodGhpcy5fYXV0b1N0YXRlQ2hhbmdlT2JzZXJ2ZXI9bmV3IEF1dG9TdGF0ZUNoYW5nZU9ic2VydmVyKGZ1bmN0aW9uKCl7dmFyIG49X2FzeW5jVG9HZW5lcmF0b3IoX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIHQoZSxpLG4pe3JldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24odCl7Zm9yKDs7KXN3aXRjaCh0LnByZXY9dC5uZXh0KXtjYXNlIDA6aWYoci5ub3dBdXRvVHlwZT1uLHIuaXNBdXRvU3RhdGU9ZSxyLmF1dG9FdmVudChlLG4pLGUmJmZjYy5wcm9jZXNzTWdyLmdhbWVTdGF0ZT09ZmNjLnR5cGUuR2FtZVN0YXRlVHlwZS5TVEFOREJZKXJldHVybiB0Lm5leHQ9NixyLnN0YXJ0QnV0dG9uRXZlbnQoKTt0Lm5leHQ9NjticmVhaztjYXNlIDY6Y2FzZVwiZW5kXCI6cmV0dXJuIHQuc3RvcCgpfX0sdCl9KSk7cmV0dXJuIGZ1bmN0aW9uKHQsZSxpKXtyZXR1cm4gbi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSgpLHRoaXMpKSx0aGlzLl9hdXRvU3RhdGVDaGFuZ2VPYnNlcnZlcn1nZXRVc2VyTW9uZXlDaGFuZ2VPYnNlcnZlcigpe3JldHVybiB0aGlzLl91c2VyTW9uZXlDaGFuZ2VPYnNlcnZlcnx8KHRoaXMuX3VzZXJNb25leUNoYW5nZU9ic2VydmVyPW5ldyBVc2VyTW9uZXlDaGFuZ2VPYnNlcnZlcih0PT57dGhpcy51c2VyTW9uZXk9dH0sdGhpcykpLHRoaXMuX3VzZXJNb25leUNoYW5nZU9ic2VydmVyfXN0YXJ0QnV0dG9uRXZlbnQoKXt2YXIgZT10aGlzO3JldHVybiBfYXN5bmNUb0dlbmVyYXRvcihfcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gdCgpe3JldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24odCl7Zm9yKDs7KXN3aXRjaCh0LnByZXY9dC5uZXh0KXtjYXNlIDA6aWYoZS5pc1Nob3dUb3RhbEJldEZyYW1lKXJldHVybiBlLmlzU2hvd1RvdGFsQmV0RnJhbWU9IWUuaXNTaG93VG90YWxCZXRGcmFtZSxlLnRvdGFsQmV0RnJhbWVUb3VjaEV2ZW50KCExKSx0LmFicnVwdChcInJldHVyblwiKTt0Lm5leHQ9NDticmVhaztjYXNlIDQ6aWYoZmNjLnByb2Nlc3NNZ3IuZ2FtZVN0YXRlIT1mY2MudHlwZS5HYW1lU3RhdGVUeXBlLlNUQU5EQlkmJmZjYy5wcm9jZXNzTWdyLmdhbWVTdGF0ZSE9ZmNjLnR5cGUuR2FtZVN0YXRlVHlwZS5GUkVFSU5HKXJldHVybiBmY2Mubm90aWZpY2F0aW9uTWdyKCkuZ2V0Tm90aWZpY2F0aW9uKGZjYy50eXBlLk5vdGlmaWNhdGlvblR5cGUuU1RPUF9OT1cpLm5vdGlmeSgpLHQuYWJydXB0KFwicmV0dXJuXCIpO3QubmV4dD03O2JyZWFrO2Nhc2UgNzppZihlLmNoZWNrVXNlclBvaW50Q2FuUGxheUdhbWUoKSl7dC5uZXh0PTk7YnJlYWt9cmV0dXJuIHQuYWJydXB0KFwicmV0dXJuXCIpO2Nhc2UgOTpyZXR1cm4gZS5zdGFydEV2ZW50KCksdC5uZXh0PTEyLGZjYy5wcm9jZXNzTWdyLnBsYXkoKTtjYXNlIDEyOmUuZW5kRXZlbnQoKTtjYXNlIDEzOmlmKGUuaXNBdXRvU3RhdGV8fGZjYy5wcm9jZXNzTWdyLmdhbWVTdGF0ZT09PWZjYy50eXBlLkdhbWVTdGF0ZVR5cGUuRlJFRUlORyl7dC5uZXh0PTA7YnJlYWt9Y2FzZSAxNDpjYXNlXCJlbmRcIjpyZXR1cm4gdC5zdG9wKCl9fSx0KX0pKSgpfWF1dG9CdXR0b25FdmVudExpc3RlbmVyKCl7aWYodGhpcy51bnNjaGVkdWxlKHRoaXMubG9uZ1RvdWNoVGltZXIpLHRoaXMuaXNTaG93VG90YWxCZXRGcmFtZSlyZXR1cm4gdGhpcy5pc1Nob3dUb3RhbEJldEZyYW1lPSF0aGlzLmlzU2hvd1RvdGFsQmV0RnJhbWUsdm9pZCB0aGlzLnRvdGFsQmV0RnJhbWVUb3VjaEV2ZW50KCExKTt0aGlzLmlzQXV0b1N0YXRlPSF0aGlzLmlzQXV0b1N0YXRlLHRoaXMuYXV0b05vdGlmeSh0aGlzLmlzQXV0b1N0YXRlLHRoaXMubm93QXV0b1R5cGUpfXNwZWVkVXBCdXR0b25FdmVudExpc3RlbmVyKCl7dGhpcy5ub3dTcGVlZD0hdGhpcy5ub3dTcGVlZCxmY2Mubm90aWZpY2F0aW9uTWdyKCkuZ2V0Tm90aWZpY2F0aW9uKGZjYy50eXBlLk5vdGlmaWNhdGlvblR5cGUuU1BFRURfQ0hBTkdFKS5ub3RpZnkodGhpcy5ub3dTcGVlZCksdGhpcy5zcGVlZFVwRXZlbnQodGhpcy5ub3dTcGVlZCl9dG90YWxCZXRGcmFtZVRvdWNoRXZlbnRMaXN0ZW5lcigpe2ZjYy5wcm9jZXNzTWdyLmdhbWVTdGF0ZT09ZmNjLnR5cGUuR2FtZVN0YXRlVHlwZS5TVEFOREJZPyh0aGlzLmlzU2hvd1RvdGFsQmV0RnJhbWU9IXRoaXMuaXNTaG93VG90YWxCZXRGcmFtZSx0aGlzLnRvdGFsQmV0RnJhbWVUb3VjaEV2ZW50KHRoaXMuaXNTaG93VG90YWxCZXRGcmFtZSkpOnRoaXMud2FybmluZ0V2ZW50KCl9bWVudUJ1dHRvbkV2ZW50TGlzdGVuZXIoKXt0aGlzLnVuc2NoZWR1bGUodGhpcy5sb25nVG91Y2hUaW1lciksZmNjLnByb2Nlc3NNZ3IuZ2FtZVN0YXRlPT1mY2MudHlwZS5HYW1lU3RhdGVUeXBlLlNUQU5EQlk/dGhpcy5tZW51RXZlbnQoKTp0aGlzLndhcm5pbmdFdmVudCgpfX1jbGFzcyBBTWFpbkdhbWVPbmx5QnV0dG9uVGVtcGxhdGUgZXh0ZW5kcyBBTWFpbkdhbWVCdXR0b25UZW1wbGF0ZXtvbkxvYWQoKXtmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLmF1dG9CdXR0b24sXCJhdXRvQnV0dG9uRXZlbnRMaXN0ZW5lclwiLHRoaXMpLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMuc3BlZWRVcEJ1dHRvbixcInNwZWVkVXBCdXR0b25FdmVudExpc3RlbmVyXCIsdGhpcyksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5iZXRTZWxlY3Rpb25CdXR0b24sXCJ0b3RhbEJldEZyYW1lVG91Y2hFdmVudExpc3RlbmVyXCIsdGhpcyksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5tZW51QnV0dG9uLFwibWVudUJ1dHRvbkV2ZW50TGlzdGVuZXJcIix0aGlzKSxzdXBlci5vbkxvYWQoKX1zdGFydEJ1dHRvbk9uRW5hYmxlKCl7dGhpcy51bnNjaGVkdWxlKHRoaXMubG9uZ1RvdWNoVGltZXIpLHRoaXMuc3RhcnRCdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLnN0YXJ0QnV0dG9uT25Ub3VjaFN0YXJ0LHRoaXMpLHRoaXMuc3RhcnRCdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpcy5zdGFydEJ1dHRvbk9uVG91Y2hFbmQsdGhpcyksY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLHRoaXMua2V5Ym9hcmRTcGFjZVRvdWNoU3RhcnQsdGhpcyksY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCx0aGlzLmtleWJvYXJkU3BhY2VUb3VjaEVuZCx0aGlzKX1zdGFydEJ1dHRvbkRpc2FibGUoKXt0aGlzLnVuc2NoZWR1bGUodGhpcy5sb25nVG91Y2hUaW1lciksdGhpcy5zdGFydEJ1dHRvbi5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLnN0YXJ0QnV0dG9uT25Ub3VjaFN0YXJ0LHRoaXMpLHRoaXMuc3RhcnRCdXR0b24ubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMuc3RhcnRCdXR0b25PblRvdWNoRW5kLHRoaXMpLGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sdGhpcy5rZXlib2FyZFNwYWNlVG91Y2hTdGFydCx0aGlzKSxjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCx0aGlzLmtleWJvYXJkU3BhY2VUb3VjaEVuZCx0aGlzKX19Y2xhc3MgQU1haW5HYW1lRG91YmxlQnV0dG9uVGVtcGxhdGUgZXh0ZW5kcyBBTWFpbkdhbWVCdXR0b25UZW1wbGF0ZXtvbkxvYWQoKXtmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLmF1dG9CdXR0b25ILFwiYXV0b0J1dHRvbkV2ZW50TGlzdGVuZXJcIix0aGlzKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLmF1dG9CdXR0b25WLFwiYXV0b0J1dHRvbkV2ZW50TGlzdGVuZXJcIix0aGlzKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLnNwZWVkVXBCdXR0b25ILFwic3BlZWRVcEJ1dHRvbkV2ZW50TGlzdGVuZXJcIix0aGlzKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLnNwZWVkVXBCdXR0b25WLFwic3BlZWRVcEJ1dHRvbkV2ZW50TGlzdGVuZXJcIix0aGlzKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLmJldFNlbGVjdGlvbkJ1dHRvbkgsXCJ0b3RhbEJldEZyYW1lVG91Y2hFdmVudExpc3RlbmVyXCIsdGhpcyksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5iZXRTZWxlY3Rpb25CdXR0b25WLFwidG90YWxCZXRGcmFtZVRvdWNoRXZlbnRMaXN0ZW5lclwiLHRoaXMpLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMubWVudUJ1dHRvbkgsXCJtZW51QnV0dG9uRXZlbnRMaXN0ZW5lclwiLHRoaXMpLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMubWVudUJ1dHRvblYsXCJtZW51QnV0dG9uRXZlbnRMaXN0ZW5lclwiLHRoaXMpLHN1cGVyLm9uTG9hZCgpfXN0YXJ0QnV0dG9uT25FbmFibGUoKXt0aGlzLnVuc2NoZWR1bGUodGhpcy5sb25nVG91Y2hUaW1lciksdGhpcy5zdGFydEJ1dHRvbkgubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLnN0YXJ0QnV0dG9uT25Ub3VjaFN0YXJ0LHRoaXMpLHRoaXMuc3RhcnRCdXR0b25WLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsdGhpcy5zdGFydEJ1dHRvbk9uVG91Y2hTdGFydCx0aGlzKSx0aGlzLnN0YXJ0QnV0dG9uSC5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCx0aGlzLnN0YXJ0QnV0dG9uT25Ub3VjaEVuZCx0aGlzKSx0aGlzLnN0YXJ0QnV0dG9uVi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCx0aGlzLnN0YXJ0QnV0dG9uT25Ub3VjaEVuZCx0aGlzKSxjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sdGhpcy5rZXlib2FyZFNwYWNlVG91Y2hTdGFydCx0aGlzKSxjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLHRoaXMua2V5Ym9hcmRTcGFjZVRvdWNoRW5kLHRoaXMpfXN0YXJ0QnV0dG9uRGlzYWJsZSgpe3RoaXMudW5zY2hlZHVsZSh0aGlzLmxvbmdUb3VjaFRpbWVyKSx0aGlzLnN0YXJ0QnV0dG9uSC5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLnN0YXJ0QnV0dG9uT25Ub3VjaFN0YXJ0LHRoaXMpLHRoaXMuc3RhcnRCdXR0b25WLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULHRoaXMuc3RhcnRCdXR0b25PblRvdWNoU3RhcnQsdGhpcyksdGhpcy5zdGFydEJ1dHRvbkgubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMuc3RhcnRCdXR0b25PblRvdWNoRW5kLHRoaXMpLHRoaXMuc3RhcnRCdXR0b25WLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCx0aGlzLnN0YXJ0QnV0dG9uT25Ub3VjaEVuZCx0aGlzKSxjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLHRoaXMua2V5Ym9hcmRTcGFjZVRvdWNoU3RhcnQsdGhpcyksY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsdGhpcy5rZXlib2FyZFNwYWNlVG91Y2hFbmQsdGhpcyl9fWNsYXNzIEFNZW51QnV0dG9uVGVtcGxhdGUgZXh0ZW5kcyBBR2VuZXJpY1RlbXBsYXRle2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcInVzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcImF1dG9TdGF0ZUNoYW5nZU9ic2VydmVyXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIm5vd0F1dG9UeXBlXCIsdm9pZCAwKX1vbkxvYWQoKXt0aGlzLm5vd0F1dG9UeXBlPWZjYy5jb25maWdNZ3IuYXV0b0NvdW50LHRoaXMuYWRkTm90aWZpY2F0aW9uKCksc3VwZXIub25Mb2FkKCl9YWRkTm90aWZpY2F0aW9uKCl7ZmNjLm5vdGlmaWNhdGlvbk1ncigpLmdldE5vdGlmaWNhdGlvbihmY2MudHlwZS5Ob3RpZmljYXRpb25UeXBlLlVTRVJfQkVUX0NIQU5HRSkuc3Vic2NyaWJlKHRoaXMuZ2V0VXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXIoKSwhMCl9bXVzaWNFdmVudExpc3RlbmVyKCl7dmFyIHQ9ZmNjLmF1ZGlvTWdyLnVwZGF0ZU11c2ljT25NdXRlKCk7dGhpcy5tdXNpY0V2ZW50KHQpfWVmZmVjdEV2ZW50TGlzdGVuZXIoKXt2YXIgdD1mY2MuYXVkaW9NZ3IudXBkYXRlRWZmZWN0T25NdXRlKCk7dGhpcy5lZmZlY3RFdmVudCh0KX1iZXRVcEV2ZW50TGlzdGVuZXIoKXt2YXIgdD10aGlzLm5vd0JldEluZGV4KzE7dD50aGlzLnRhYmxlSW5mby5MaW5lQmV0Lmxlbmd0aC0xJiYodD0wKSxmY2Mubm90aWZpY2F0aW9uTWdyKCkuZ2V0Tm90aWZpY2F0aW9uKGZjYy50eXBlLk5vdGlmaWNhdGlvblR5cGUuVVNFUl9CRVRfQ0hBTkdFKS5ub3RpZnkodGhpcy5ub3dCZXRJbmRleCx0KX1iZXREb3duRXZlbnRMaXN0ZW5lcigpe3ZhciB0PXRoaXMubm93QmV0SW5kZXgtMTt0PDAmJih0PXRoaXMudGFibGVJbmZvLkxpbmVCZXQubGVuZ3RoLTEpLGZjYy5ub3RpZmljYXRpb25NZ3IoKS5nZXROb3RpZmljYXRpb24oZmNjLnR5cGUuTm90aWZpY2F0aW9uVHlwZS5VU0VSX0JFVF9DSEFOR0UpLm5vdGlmeSh0aGlzLm5vd0JldEluZGV4LHQpfWdldFVzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyKCl7cmV0dXJuIHRoaXMudXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXJ8fCh0aGlzLnVzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyPW5ldyBVc2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlcigodCxlKT0+e3RoaXMubm93QmV0SW5kZXg9ZSx0aGlzLnRvdGFsQmV0Q2hhbmdlRXZlbnQodCxlKX0sdGhpcykpLHRoaXMudXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXJ9YXV0b0J1dHRvbkV2ZW50TGlzdGVuZXIodCxlKXt0aGlzLmF1dG9FdmVudCh0aGlzLm5vd0F1dG9UeXBlLGUpLGZjYy5ub3RpZmljYXRpb25NZ3IoKS5nZXROb3RpZmljYXRpb24oZmNjLnR5cGUuTm90aWZpY2F0aW9uVHlwZS5BVVRPX0NIQU5HRSkubm90aWZ5KCEwLHRoaXMubm93QXV0b1R5cGUsZSksdGhpcy5ub3dBdXRvVHlwZT1lfX1jbGFzcyBBTWVudURvdWJsZUJ1dHRvblRlbXBsYXRlIGV4dGVuZHMgQU1lbnVCdXR0b25UZW1wbGF0ZXtvbkxvYWQoKXtmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLm11c2ljQnV0dG9uSCxcIm11c2ljRXZlbnRMaXN0ZW5lclwiLHRoaXMpLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMubXVzaWNCdXR0b25WLFwibXVzaWNFdmVudExpc3RlbmVyXCIsdGhpcyksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5lZmZlY3RCdXR0b25ILFwiZWZmZWN0RXZlbnRMaXN0ZW5lclwiLHRoaXMpLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMuZWZmZWN0QnV0dG9uVixcImVmZmVjdEV2ZW50TGlzdGVuZXJcIix0aGlzKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLmJldFVwQnV0dG9uSCxcImJldFVwRXZlbnRMaXN0ZW5lclwiLHRoaXMpLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMuYmV0VXBCdXR0b25WLFwiYmV0VXBFdmVudExpc3RlbmVyXCIsdGhpcyksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5iZXREb3duQnV0dG9uSCxcImJldERvd25FdmVudExpc3RlbmVyXCIsdGhpcyksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5iZXREb3duQnV0dG9uVixcImJldERvd25FdmVudExpc3RlbmVyXCIsdGhpcyksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5hdXRvNTBCdXR0b25ILFwiYXV0b0J1dHRvbkV2ZW50TGlzdGVuZXJcIix0aGlzLGZjYy50eXBlLkF1dG9UeXBlLkFVVE9fNTApLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMuYXV0bzUwQnV0dG9uVixcImF1dG9CdXR0b25FdmVudExpc3RlbmVyXCIsdGhpcyxmY2MudHlwZS5BdXRvVHlwZS5BVVRPXzUwKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLmF1dG8xMDBCdXR0b25ILFwiYXV0b0J1dHRvbkV2ZW50TGlzdGVuZXJcIix0aGlzLGZjYy50eXBlLkF1dG9UeXBlLkFVVE9fMTAwKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLmF1dG8xMDBCdXR0b25WLFwiYXV0b0J1dHRvbkV2ZW50TGlzdGVuZXJcIix0aGlzLGZjYy50eXBlLkF1dG9UeXBlLkFVVE9fMTAwKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLmF1dG81MDBCdXR0b25ILFwiYXV0b0J1dHRvbkV2ZW50TGlzdGVuZXJcIix0aGlzLGZjYy50eXBlLkF1dG9UeXBlLkFVVE9fNTAwKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLmF1dG81MDBCdXR0b25WLFwiYXV0b0J1dHRvbkV2ZW50TGlzdGVuZXJcIix0aGlzLGZjYy50eXBlLkF1dG9UeXBlLkFVVE9fNTAwKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLmF1dG8xMDAwQnV0dG9uSCxcImF1dG9CdXR0b25FdmVudExpc3RlbmVyXCIsdGhpcyxmY2MudHlwZS5BdXRvVHlwZS5BVVRPXzEwMDApLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMuYXV0bzEwMDBCdXR0b25WLFwiYXV0b0J1dHRvbkV2ZW50TGlzdGVuZXJcIix0aGlzLGZjYy50eXBlLkF1dG9UeXBlLkFVVE9fMTAwMCksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5hdXRvRnJlZUVuZEJ1dHRvbkgsXCJhdXRvQnV0dG9uRXZlbnRMaXN0ZW5lclwiLHRoaXMsZmNjLnR5cGUuQXV0b1R5cGUuRlJFRV9FTkQpLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMuYXV0b0ZyZWVFbmRCdXR0b25WLFwiYXV0b0J1dHRvbkV2ZW50TGlzdGVuZXJcIix0aGlzLGZjYy50eXBlLkF1dG9UeXBlLkZSRUVfRU5EKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLmF1dG9CdXR0b25ILFwiYXV0b0J1dHRvbkV2ZW50TGlzdGVuZXJcIix0aGlzLGZjYy50eXBlLkF1dG9UeXBlLkFVVE8pLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMuYXV0b0J1dHRvblYsXCJhdXRvQnV0dG9uRXZlbnRMaXN0ZW5lclwiLHRoaXMsZmNjLnR5cGUuQXV0b1R5cGUuQVVUTyksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5nb0JhY2tCdXR0b25ILFwiZ29CYWNrVG91Y2hFdmVudFwiLHRoaXMpLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMuZ29CYWNrQnV0dG9uVixcImdvQmFja1RvdWNoRXZlbnRcIix0aGlzKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLmdvSG9tZUJ1dHRvbkgsXCJnb0hvbWVUb3VjaEV2ZW50XCIsdGhpcyksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5nb0hvbWVCdXR0b25WLFwiZ29Ib21lVG91Y2hFdmVudFwiLHRoaXMpLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMucmVjb3JkQnV0dG9uSCxcInJlY29yZFBhZ2VUb3VjaEV2ZW50XCIsdGhpcyksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5yZWNvcmRCdXR0b25WLFwicmVjb3JkUGFnZVRvdWNoRXZlbnRcIix0aGlzKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLnNldHRpbmdCdXR0b25ILFwic2V0dGluZ1BhZ2VUb3VjaEV2ZW50XCIsdGhpcyksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5zZXR0aW5nQnV0dG9uVixcInNldHRpbmdQYWdlVG91Y2hFdmVudFwiLHRoaXMpLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMuZGVzY3JpcHRpb25QYWdlQnV0dG9uSCxcImRlc2NyaXB0aW9uUGFnZUV2ZW50XCIsdGhpcyksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5kZXNjcmlwdGlvblBhZ2VCdXR0b25WLFwiZGVzY3JpcHRpb25QYWdlRXZlbnRcIix0aGlzKSxzdXBlci5vbkxvYWQoKX19Y2xhc3MgQU1lbnVPbmx5QnV0dG9uVGVtcGxhdGUgZXh0ZW5kcyBBTWVudUJ1dHRvblRlbXBsYXRle29uTG9hZCgpe2ZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMubXVzaWNCdXR0b24sXCJtdXNpY0V2ZW50TGlzdGVuZXJcIix0aGlzKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLmVmZmVjdEJ1dHRvbixcImVmZmVjdEV2ZW50TGlzdGVuZXJcIix0aGlzKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLmJldFVwQnV0dG9uLFwiYmV0VXBFdmVudExpc3RlbmVyXCIsdGhpcyksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5iZXREb3duQnV0dG9uLFwiYmV0RG93bkV2ZW50TGlzdGVuZXJcIix0aGlzKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLmF1dG81MEJ1dHRvbixcImF1dG9CdXR0b25FdmVudExpc3RlbmVyXCIsdGhpcyxmY2MudHlwZS5BdXRvVHlwZS5BVVRPXzUwKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLmF1dG8xMDBCdXR0b24sXCJhdXRvQnV0dG9uRXZlbnRMaXN0ZW5lclwiLHRoaXMsZmNjLnR5cGUuQXV0b1R5cGUuQVVUT18xMDApLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMuYXV0bzUwMEJ1dHRvbixcImF1dG9CdXR0b25FdmVudExpc3RlbmVyXCIsdGhpcyxmY2MudHlwZS5BdXRvVHlwZS5BVVRPXzUwMCksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5hdXRvMTAwMEJ1dHRvbixcImF1dG9CdXR0b25FdmVudExpc3RlbmVyXCIsdGhpcyxmY2MudHlwZS5BdXRvVHlwZS5BVVRPXzEwMDApLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMuYXV0b0ZyZWVFbmRCdXR0b24sXCJhdXRvQnV0dG9uRXZlbnRMaXN0ZW5lclwiLHRoaXMsZmNjLnR5cGUuQXV0b1R5cGUuRlJFRV9FTkQpLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMuYXV0b0J1dHRvbixcImF1dG9CdXR0b25FdmVudExpc3RlbmVyXCIsdGhpcyxmY2MudHlwZS5BdXRvVHlwZS5BVVRPKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLmdvQmFja0J1dHRvbixcImdvQmFja1RvdWNoRXZlbnRcIix0aGlzKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLmdvSG9tZUJ1dHRvbixcImdvSG9tZVRvdWNoRXZlbnRcIix0aGlzKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLnJlY29yZEJ1dHRvbixcInJlY29yZFBhZ2VUb3VjaEV2ZW50XCIsdGhpcyksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5zZXR0aW5nQnV0dG9uLFwic2V0dGluZ1BhZ2VUb3VjaEV2ZW50XCIsdGhpcyksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5kZXNjcmlwdGlvblBhZ2VCdXR0b24sXCJkZXNjcmlwdGlvblBhZ2VFdmVudFwiLHRoaXMpLHN1cGVyLm9uTG9hZCgpfX0hZnVuY3Rpb24odCl7dC5ORVhUPVwiTkVYVFwiLHQuUFJFVklPVVM9XCJQUkVWSU9VU1wifShQYWdlQ2hhbmdlVHlwZT1QYWdlQ2hhbmdlVHlwZXx8e30pLGZ1bmN0aW9uKHQpe3QuT05FX0RBWT1cIk9ORV9EQVlcIix0LkZJVkVfREFZPVwiRklWRV9EQVlcIix0LlRFTl9EQVk9XCJURU5fREFZXCJ9KERheVR5cGU9RGF5VHlwZXx8e30pO2NsYXNzIEFSZWNvcmRCdXR0b25UZW1wbGF0ZSBleHRlbmRzIEFHZW5lcmljVGVtcGxhdGV7b25Mb2FkKCl7c3VwZXIub25Mb2FkKCl9fWNsYXNzIEFSZWNvcmREb3VibGVCdXR0b25UZW1wbGF0ZSBleHRlbmRzIEFSZWNvcmRCdXR0b25UZW1wbGF0ZXtvbkxvYWQoKXtmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLmdvQmFja0J1dHRvbkgsXCJnb0JhY2tUb3VjaEV2ZW50XCIsdGhpcyksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5nb0JhY2tCdXR0b25WLFwiZ29CYWNrVG91Y2hFdmVudFwiLHRoaXMpLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMub25lRGF5UmVjb3JkQnV0dG9uSCxcImRheXNSZWNvcmRUb3VjaEV2ZW50SFwiLHRoaXMsRGF5VHlwZS5PTkVfREFZKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLm9uZURheVJlY29yZEJ1dHRvblYsXCJkYXlzUmVjb3JkVG91Y2hFdmVudFZcIix0aGlzLERheVR5cGUuT05FX0RBWSksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5maXZlRGF5UmVjb3JkQnV0dG9uSCxcImRheXNSZWNvcmRUb3VjaEV2ZW50SFwiLHRoaXMsRGF5VHlwZS5GSVZFX0RBWSksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5maXZlRGF5UmVjb3JkQnV0dG9uVixcImRheXNSZWNvcmRUb3VjaEV2ZW50VlwiLHRoaXMsRGF5VHlwZS5GSVZFX0RBWSksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy50ZW5EYXlSZWNvcmRCdXR0b25ILFwiZGF5c1JlY29yZFRvdWNoRXZlbnRIXCIsdGhpcyxEYXlUeXBlLlRFTl9EQVkpLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMudGVuRGF5UmVjb3JkQnV0dG9uVixcImRheXNSZWNvcmRUb3VjaEV2ZW50VlwiLHRoaXMsRGF5VHlwZS5URU5fREFZKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLm5leHRSZWNvcmRCdXR0b25ILFwibmV4dEFuZExhc3RCdXR0b25Ub3VjaEV2ZW50XCIsdGhpcyxQYWdlQ2hhbmdlVHlwZS5ORVhUKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLm5leHRSZWNvcmRCdXR0b25WLFwibmV4dEFuZExhc3RCdXR0b25Ub3VjaEV2ZW50XCIsdGhpcyxQYWdlQ2hhbmdlVHlwZS5ORVhUKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLnByZXZpb3VzUmVjb3JkQnV0dG9uSCxcIm5leHRBbmRMYXN0QnV0dG9uVG91Y2hFdmVudFwiLHRoaXMsUGFnZUNoYW5nZVR5cGUuUFJFVklPVVMpLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMucHJldmlvdXNSZWNvcmRCdXR0b25WLFwibmV4dEFuZExhc3RCdXR0b25Ub3VjaEV2ZW50XCIsdGhpcyxQYWdlQ2hhbmdlVHlwZS5QUkVWSU9VUyksc3VwZXIub25Mb2FkKCl9fWNsYXNzIEFSZWNvcmRPbmx5QnV0dG9uVGVtcGxhdGUgZXh0ZW5kcyBBUmVjb3JkQnV0dG9uVGVtcGxhdGV7b25Mb2FkKCl7ZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5nb0JhY2tCdXR0b24sXCJnb0JhY2tUb3VjaEV2ZW50XCIsdGhpcyksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5vbmVEYXlSZWNvcmRCdXR0b24sXCJkYXlzUmVjb3JkVG91Y2hFdmVudEhcIix0aGlzLERheVR5cGUuT05FX0RBWSksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5maXZlRGF5UmVjb3JkQnV0dG9uLFwiZGF5c1JlY29yZFRvdWNoRXZlbnRIXCIsdGhpcyxEYXlUeXBlLkZJVkVfREFZKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLnRlbkRheVJlY29yZEJ1dHRvbixcImRheXNSZWNvcmRUb3VjaEV2ZW50SFwiLHRoaXMsRGF5VHlwZS5URU5fREFZKSxmY2MuZ2xvYmFsLkJ1dHRvbi5hZGRCdXR0b25FdmVudCh0aGlzLm5leHRSZWNvcmRCdXR0b24sXCJuZXh0QW5kTGFzdEJ1dHRvblRvdWNoRXZlbnRcIix0aGlzLFBhZ2VDaGFuZ2VUeXBlLk5FWFQpLGZjYy5nbG9iYWwuQnV0dG9uLmFkZEJ1dHRvbkV2ZW50KHRoaXMucHJldmlvdXNSZWNvcmRCdXR0b24sXCJuZXh0QW5kTGFzdEJ1dHRvblRvdWNoRXZlbnRcIix0aGlzLFBhZ2VDaGFuZ2VUeXBlLlBSRVZJT1VTKSxzdXBlci5vbkxvYWQoKX19Y2xhc3MgQUVycm9yRnJhbWVUZW1wbGF0ZSBleHRlbmRzIEFHZW5lcmljVGVtcGxhdGV7b25Mb2FkKCl7ZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5lcnJvckJ1dHRvbixcImVycm9yQnV0dG9uVG91Y2hFdmVudFwiLHRoaXMpLHN1cGVyLm9uTG9hZCgpfX1jbGFzcyBBTG9hZGluZ1RlbXBsYXRlIGV4dGVuZHMgQUdlbmVyaWNUZW1wbGF0ZXtjb25zdHJ1Y3Rvcigpe3N1cGVyKCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfaXNHZXRUYWJsZUluZm9SZXNwb25zZVwiLHZvaWQgMCksdGhpcy5faXNHZXRUYWJsZUluZm9SZXNwb25zZT0hMX1vbkxvYWQoKXt0aGlzLnJlc3BvbnNlTm90aWZpY2F0aW9uKCksZmNjLmdsb2JhbC5CdXR0b24uYWRkQnV0dG9uRXZlbnQodGhpcy5pbnRvTWFpbkdhbWVCdXR0b24sXCJpbnRvTWFpbkdhbWVCdXR0b25FdmVudFwiLHRoaXMpLHN1cGVyLm9uTG9hZCgpfXN0YXJ0KCl7c3VwZXIuc3RhcnQoKSx0aGlzLnNjZW5lU3R5bGUoKSx0aGlzLmxvYWRFeHRlcm5hbFNjcmlwdCgpLHRoaXMubG9hZFJlc291cmNlcygpLHRoaXMubG9hZEFzc2V0QnVuZGxlKCksdGhpcy51cGRhdGVQcm9ncmVzc1RleHRBbmltYXRpb24oKX1yZXNwb25zZU5vdGlmaWNhdGlvbigpe2ZjYy5ub3RpZmljYXRpb25NZ3IoKS5nZXROb3RpZmljYXRpb24oZmNjLnR5cGUuTm90aWZpY2F0aW9uVHlwZS5SRVNQT05TRV9SRVNVTFQpLnN1YnNjcmliZShuZXcgUmVzcG9uc2VSZXN1bHRPYnNlcnZlcih0PT57dD09ZmNjLnR5cGUuU2VydmVyRXZlbnRUeXBlLlRBQkxFX0lORk8mJih0aGlzLl9pc0dldFRhYmxlSW5mb1Jlc3BvbnNlPSEwKX0sdGhpcyksITEpfWdldCBpc0dldFRhYmxlSW5mb1Jlc3BvbnNlKCl7cmV0dXJuIHRoaXMuX2lzR2V0VGFibGVJbmZvUmVzcG9uc2V9fWNsYXNzIEFMb2FkaW5nRnJhbWVUZW1wbGF0ZSBleHRlbmRzIEFHZW5lcmljVGVtcGxhdGV7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicHJvZ3Jlc3NWYWx1ZVwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJ0aW1lT3V0XCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcImFkZFByb2dyZXNzVmFsdWVcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwidGltZXJcIix2b2lkIDApfW9uTG9hZCgpe3RoaXMubG9hZGluZ0luaXRpYWxpemUoKSxzdXBlci5vbkxvYWQoKX1sb2FkaW5nSW5pdGlhbGl6ZSgpe3RoaXMubG9hZGluZ0RpYWxvZ05vZGUuYWN0aXZlPSEwLHRoaXMubG9hZGluZ0RpYWxvZ05vZGUub3BhY2l0eT0yNTUsdGhpcy50aW1lcj1udWxsLHRoaXMucHJvZ3Jlc3NUZXh0LnN0cmluZz1cIlwiLHRoaXMucHJvZ3Jlc3NWYWx1ZT0wLHRoaXMudGltZU91dD01MCx0aGlzLmFkZFByb2dyZXNzVmFsdWU9LjAwNX1ydW5Qcm9ncmVzcyhlKXtyZXR1cm4gdGhpcy5sb2FkaW5nSW5pdGlhbGl6ZSgpLG5ldyBQcm9taXNlKHQ9Pnt0aGlzLmNoZWNrSGFzUmVzKGUsdCkmJnRoaXMucHJvZ3Jlc3NUaW1lcihcIlwiLGUsdCl9KX1wcm9ncmVzc1RpbWVyKHQsZSxpKXt0aGlzLnRpbWVyPXdpbmRvdy5zZXRJbnRlcnZhbCgoKT0+ezE8dGhpcy5wcm9ncmVzc1ZhbHVlJiYodGhpcy5wcm9ncmVzc1ZhbHVlPTApLDM8dC5sZW5ndGgmJih0PVwiXCIpLHRoaXMucHJvZ3Jlc3NUZXh0LnN0cmluZz10LHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3M9dGhpcy5wcm9ncmVzc1ZhbHVlLHRoaXMucHJvZ3Jlc3NWYWx1ZT10aGlzLnByb2dyZXNzVmFsdWUrdGhpcy5wcm9ncmVzc1ZhbHVlLHQrPVwiLlwiLDE9PWZjYy5sb2FkTWdyLnNlY29uZGFyeUxvYWRTdGF0ZS5nZXQoZSkmJigxPD10aGlzLnByb2dyZXNzVmFsdWUmJnRoaXMuY2xvc2VMb2FkaW5nRGlhTG9nKGkpLC4xIT10aGlzLmFkZFByb2dyZXNzVmFsdWUmJih0aGlzLmFkZFByb2dyZXNzVmFsdWU9LjA1KSl9LHRoaXMudGltZU91dCl9Y2xvc2VMb2FkaW5nRGlhTG9nKHQpe2NjLnR3ZWVuKHRoaXMubG9hZGluZ0RpYWxvZ05vZGUpLnRvKC4yLHtvcGFjaXR5OjB9KS5jYWxsKCgpPT57dGhpcy5sb2FkaW5nRGlhbG9nTm9kZS5hY3RpdmU9ITEsdCgpfSl9Y2hlY2tIYXNSZXModCxlKXtyZXR1cm4gZmNjLmxvYWRNZ3Iuc2Vjb25kYXJ5TG9hZFN0YXRlLmhhcyh0KT8xIT1mY2MubG9hZE1nci5zZWNvbmRhcnlMb2FkU3RhdGUuZ2V0KHQpfHwodGhpcy5sb2FkaW5nRGlhbG9nTm9kZS5hY3RpdmU9ITEsZSgpLCExKTooZmNjLmVycm9yTWdyLmV4ZWN1dGVFcnJvcihmY2MudHlwZS5FcnJvclR5cGUuVU5ERUZJTkVEX0ZXLFwiXCIuY29uY2F0KHQsXCLoqbLnhKHoqbLos4fmupBcIikpLHRoaXMubG9hZGluZ0RpYWxvZ05vZGUuYWN0aXZlPSExLGUoKSwhMSl9fWNsYXNzIEFMb29rQXRUZW1wbGF0ZSBleHRlbmRzIEFHZW5lcmljVGVtcGxhdGV7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX3Njcm9sbEZvY3VzU3RhdGVPYnNlcnZlclwiLHZvaWQgMCl9b25Mb2FkKCl7dGhpcy5hZGROb3RpZmljYXRpb24oKSxzdXBlci5vbkxvYWQoKX1hZGROb3RpZmljYXRpb24oKXtmY2Mubm90aWZpY2F0aW9uTWdyKCkuZ2V0Tm90aWZpY2F0aW9uKGZjYy50eXBlLk5vdGlmaWNhdGlvblR5cGUuU0NST0xMX0ZPQ1VTX1NUQVRFKS5zdWJzY3JpYmUodGhpcy5nZXRTY3JvbGxGb2N1c1N0YXRlT2JzZXJ2ZXIoKSwhMCl9Z2V0U2Nyb2xsRm9jdXNTdGF0ZU9ic2VydmVyKCl7cmV0dXJuIHRoaXMuX3Njcm9sbEZvY3VzU3RhdGVPYnNlcnZlcnx8KHRoaXMuX3Njcm9sbEZvY3VzU3RhdGVPYnNlcnZlcj1uZXcgU2Nyb2xsRm9jdXNTdGF0ZU9ic2VydmVyKCh0LGUpPT57ZT90aGlzLmFsbExvb2tBdEVmZmVjdFt0XS5ub2RlLmFjdGl2ZXx8dGhpcy5zaG93TG9va0F0RWZmZWN0KHQpOnRoaXMuYWxsTG9va0F0RWZmZWN0W3RdLm5vZGUuYWN0aXZlJiZ0aGlzLnJlbW92ZUxvb2tBdEVmZmVjdCh0KX0sdGhpcykpLHRoaXMuX3Njcm9sbEZvY3VzU3RhdGVPYnNlcnZlcn19ZnVuY3Rpb24gX19kZWNvcmF0ZSh0LGUsaSxuKXt2YXIgcixvPWFyZ3VtZW50cy5sZW5ndGgscz1vPDM/ZTpudWxsPT09bj9uPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSxpKTpuO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBSZWZsZWN0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBSZWZsZWN0LmRlY29yYXRlKXM9UmVmbGVjdC5kZWNvcmF0ZSh0LGUsaSxuKTtlbHNlIGZvcih2YXIgYT10Lmxlbmd0aC0xOzA8PWE7YS0tKShyPXRbYV0pJiYocz0obzwzP3Iocyk6MzxvP3IoZSxpLHMpOnIoZSxpKSl8fHMpO3JldHVybiAzPG8mJnMmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGkscyksc31mdW5jdGlvbiBfX21ldGFkYXRhKHQsZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIFJlZmxlY3QmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFJlZmxlY3QubWV0YWRhdGEpcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEodCxlKX1mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQ5KHQsZSl7dmFyIGk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmdFtTeW1ib2wuaXRlcmF0b3JdfHx0W1wiQEBpdGVyYXRvclwiXTtpZighaSl7aWYoQXJyYXkuaXNBcnJheSh0KXx8KGk9X3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JDkodCkpfHxlJiZ0JiZcIm51bWJlclwiPT10eXBlb2YgdC5sZW5ndGgpe2kmJih0PWkpO3ZhciBuPTAsZT1mdW5jdGlvbigpe307cmV0dXJue3M6ZSxuOmZ1bmN0aW9uKCl7cmV0dXJuIG4+PXQubGVuZ3RoP3tkb25lOiEwfTp7ZG9uZTohMSx2YWx1ZTp0W24rK119fSxlOmZ1bmN0aW9uKHQpe3Rocm93IHR9LGY6ZX19dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfXZhciByLG89ITAscz0hMTtyZXR1cm57czpmdW5jdGlvbigpe2k9aS5jYWxsKHQpfSxuOmZ1bmN0aW9uKCl7dmFyIHQ9aS5uZXh0KCk7cmV0dXJuIG89dC5kb25lLHR9LGU6ZnVuY3Rpb24odCl7cz0hMCxyPXR9LGY6ZnVuY3Rpb24oKXt0cnl7b3x8bnVsbD09aS5yZXR1cm58fGkucmV0dXJuKCl9ZmluYWxseXtpZihzKXRocm93IHJ9fX19ZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JDkodCxlKXtpZih0KXtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkkOSh0LGUpO3ZhciBpPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KS5zbGljZSg4LC0xKTtyZXR1cm5cIk1hcFwiPT09KGk9XCJPYmplY3RcIj09PWkmJnQuY29uc3RydWN0b3I/dC5jb25zdHJ1Y3Rvci5uYW1lOmkpfHxcIlNldFwiPT09aT9BcnJheS5mcm9tKHQpOlwiQXJndW1lbnRzXCI9PT1pfHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChpKT9fYXJyYXlMaWtlVG9BcnJheSQ5KHQsZSk6dm9pZCAwfX1mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheSQ5KHQsZSl7KG51bGw9PWV8fGU+dC5sZW5ndGgpJiYoZT10Lmxlbmd0aCk7Zm9yKHZhciBpPTAsbj1uZXcgQXJyYXkoZSk7aTxlO2krKyluW2ldPXRbaV07cmV0dXJuIG59dmFyIGNjY2xhc3M9Y2MuX2RlY29yYXRvci5jY2NsYXNzLExJTkVfQ09OVEFJTkVSPVwiTElORV9DT05UQUlORVJcIixQQVJUSUNMRV9DT05UQUlORVI9XCJQQVJUSUNMRV9DT05UQUlORVJcIixBV2luTGluVGVtcGxhdGU9Y2xhc3MgZXh0ZW5kcyBBR2VuZXJpY1RlbXBsYXRle2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcImFsbEdyaWRQb3NpdGlvblwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJhbGxXaW5MaW5lXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcImFsbFBhcnRpY2xlXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcImlzU3RvcFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJsaW5lVmVjdG9yXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcInBhcnRpY2xlVmVjdG9yXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcImFuZ2xlXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcInJ1bkxpbmVTcGVlZFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJydW5QYXJ0aWNsZVNwZWVkXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcInJ1blBhcnRpY2xlSW50ZXJ2YWxUaW1lXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcImxpbmVDb250YWluZXJJbmRleFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJwYXJ0aWNsZUNvbnRhaW5lckluZGV4XCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9saW5lQ29udGFpbmVyXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9wYXJ0aWNsZUNvbnRhaW5lclwiLHZvaWQgMCl9b25DcmVhdGUoKXt0aGlzLmxpbmVDb250YWluZXJJbmRleD1jYy5tYWNyby5NQVhfWklOREVYLTEsdGhpcy5wYXJ0aWNsZUNvbnRhaW5lckluZGV4PWNjLm1hY3JvLk1BWF9aSU5ERVgsdGhpcy5ydW5MaW5lU3BlZWQ9LjIsdGhpcy5ydW5QYXJ0aWNsZVNwZWVkPS4yLHRoaXMucnVuUGFydGljbGVJbnRlcnZhbFRpbWU9LjA1LHRoaXMuYW5nbGU9LTkwLHRoaXMubGluZVZlY3Rvcj1jYy5WZWMyLlVQLHRoaXMucGFydGljbGVWZWN0b3I9Y2MuVmVjMi5SSUdIVCx0aGlzLmlzU3RvcD0hMX1zdGFydCgpe3N1cGVyLnN0YXJ0KCksdGhpcy5idWlsZFdpbkxpbmVDb250YWluZXIoKSx0aGlzLmJ1aWxkUGFydGljbGVDb250YWluZXIoKSx0aGlzLl9saW5lQ29udGFpbmVyPXRoaXMubGluZVNwcml0ZS5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShMSU5FX0NPTlRBSU5FUiksdGhpcy5fcGFydGljbGVDb250YWluZXI9dGhpcy5saW5lU3ByaXRlLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFBBUlRJQ0xFX0NPTlRBSU5FUiksdGhpcy5hbGxHcmlkUG9zaXRpb249dGhpcy5pbml0V2luTGluUG9zaXRpb24oKSx0aGlzLmFsbFdpbkxpbmU9bmV3IEFycmF5LHRoaXMuYWxsUGFydGljbGU9bmV3IE1hcH1yZXN0b3JlTm9kZSh0KXtpZih0KXt0aGlzLmFsbFBhcnRpY2xlLmdldCh0KS5hY3RpdmU9ITEsdGhpcy5hbGxQYXJ0aWNsZS5nZXQodCkueD10aGlzLmFsbFdpbkxpbmVbdF0uZ2V0KDApLng7dmFyIGUsaT1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQ5KHRoaXMuYWxsV2luTGluZVt0XS52YWx1ZXMoKSk7dHJ5e2ZvcihpLnMoKTshKGU9aS5uKCkpLmRvbmU7KXt2YXIgbj1lLnZhbHVlO24uYWN0aXZlPSExLG4uaGVpZ2h0PTB9fWNhdGNoKHQpe2kuZSh0KX1maW5hbGx5e2kuZigpfX1lbHNle3ZhciByLG89X2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkOSh0aGlzLl9wYXJ0aWNsZUNvbnRhaW5lci5jaGlsZHJlbik7dHJ5e2ZvcihvLnMoKTshKHI9by5uKCkpLmRvbmU7KXIudmFsdWUuYWN0aXZlPSExfWNhdGNoKHQpe28uZSh0KX1maW5hbGx5e28uZigpfXZhciBzLGE9X2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkOSh0aGlzLl9saW5lQ29udGFpbmVyLmNoaWxkcmVuKTt0cnl7Zm9yKGEucygpOyEocz1hLm4oKSkuZG9uZTspe3ZhciB1PXMudmFsdWU7dS5hY3RpdmU9ITEsdS5oZWlnaHQ9MH19Y2F0Y2godCl7YS5lKHQpfWZpbmFsbHl7YS5mKCl9fX1idWlsZFdpbkxpbmVDb250YWluZXIoKXt2YXIgdD10aGlzLmxpbmVTcHJpdGUubm9kZS5wYXJlbnQsZT1uZXcgY2MuTm9kZTtlLm5hbWU9TElORV9DT05UQUlORVIsdC5hZGRDaGlsZChlLHRoaXMubGluZUNvbnRhaW5lckluZGV4LExJTkVfQ09OVEFJTkVSKX1idWlsZFBhcnRpY2xlQ29udGFpbmVyKCl7dmFyIHQ9dGhpcy5saW5lU3ByaXRlLm5vZGUucGFyZW50LGU9bmV3IGNjLk5vZGU7ZS5uYW1lPUxJTkVfQ09OVEFJTkVSLHQuYWRkQ2hpbGQoZSx0aGlzLnBhcnRpY2xlQ29udGFpbmVySW5kZXgsUEFSVElDTEVfQ09OVEFJTkVSKX1wbGF5KGUpe3ZhciBpPXRoaXM7cmV0dXJuIF9hc3luY1RvR2VuZXJhdG9yKF9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiB0KCl7cmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbih0KXtmb3IoOzspc3dpdGNoKHQucHJldj10Lm5leHQpe2Nhc2UgMDpyZXR1cm4gdC5uZXh0PTIsaS5ydW5MaW5lKGUpO2Nhc2UgMjpjYXNlXCJlbmRcIjpyZXR1cm4gdC5zdG9wKCl9fSx0KX0pKSgpfXJ1bkxpbmUocyl7dmFyIGE9dGhpcztyZXR1cm4gX2FzeW5jVG9HZW5lcmF0b3IoX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIHQoKXt2YXIgZSxpLG4scixvO3JldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24odCl7Zm9yKDs7KXN3aXRjaCh0LnByZXY9dC5uZXh0KXtjYXNlIDA6ZT1zLmxlbmd0aCxpPTA7Y2FzZSAyOmZvcihpPT1lJiYoaT0wKSxhLnNob3dXaW5Qb2ludChpKSxuPXNbaV0scj0wO3I8bi5sZW5ndGgrMTtyKyspbz1udWxsIT09KG89bltyLTFdKSYmdm9pZCAwIT09bz9vOm5bMF0sYS5pbml0TGluZVBvc2l0aW9uKGkscixvKTtyZXR1cm4gYS5pbml0UGFydGljbGVQb3NpdGlvbihpLG5bMF0pLHQubmV4dD05LGEucnVuTGluZVRvQXN5bmMoaSxuKTtjYXNlIDk6cmV0dXJuIHQubmV4dD0xMSxhLnJ1blBhcnRpY2xlVG9Bc3luYyhpLG4pO2Nhc2UgMTE6cmV0dXJuIHQubmV4dD0xMyxhLmhpZGVOb2RlKGkpO2Nhc2UgMTM6aSsrO2Nhc2UgMTQ6aWYoIWEuaXNTdG9wKXt0Lm5leHQ9MjticmVha31jYXNlIDE1OmNhc2VcImVuZFwiOnJldHVybiB0LnN0b3AoKX19LHQpfSkpKCl9cGxheUFsbChlKXt2YXIgaT10aGlzO3JldHVybiBfYXN5bmNUb0dlbmVyYXRvcihfcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gdCgpe3JldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24odCl7Zm9yKDs7KXN3aXRjaCh0LnByZXY9dC5uZXh0KXtjYXNlIDA6cmV0dXJuIGkuc2hvd1dpblBvaW50KCksdC5uZXh0PTMsaS5ydW5BbGxMaW5lKGUpO2Nhc2UgMzpjYXNlXCJlbmRcIjpyZXR1cm4gdC5zdG9wKCl9fSx0KX0pKSgpfXJ1bkFsbExpbmUobyl7dmFyIHM9dGhpcztyZXR1cm4gX2FzeW5jVG9HZW5lcmF0b3IoX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIHQoKXt2YXIgZSxpO3JldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24odCl7Zm9yKDs7KXN3aXRjaCh0LnByZXY9dC5uZXh0KXtjYXNlIDA6ZT1fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gdChlKXt2YXIgaSxuLHI7cmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbih0KXtmb3IoOzspc3dpdGNoKHQucHJldj10Lm5leHQpe2Nhc2UgMDpmb3IoaT1vW2VdLG49MDtuPGkubGVuZ3RoKzE7bisrKXI9bnVsbCE9PShyPWlbbi0xXSkmJnZvaWQgMCE9PXI/cjppWzBdLHMuaW5pdExpbmVQb3NpdGlvbihlLG4scik7aWYocy5pbml0UGFydGljbGVQb3NpdGlvbihlLGlbMF0pLGU9PW8ubGVuZ3RoLTEpcmV0dXJuIHQubmV4dD02LHMucnVuTGluZVRvQXN5bmMoZSxpKS50aGVuKCk7dC5uZXh0PTEwO2JyZWFrO2Nhc2UgNjpyZXR1cm4gdC5uZXh0PTgscy5ydW5QYXJ0aWNsZVRvQXN5bmMoZSxpKTtjYXNlIDg6dC5uZXh0PTExO2JyZWFrO2Nhc2UgMTA6cy5ydW5MaW5lVG9Bc3luYyhlLGkpLnRoZW4oKCk9PntzLnJ1blBhcnRpY2xlVG9Bc3luYyhlLGkpfSk7Y2FzZSAxMTpjYXNlXCJlbmRcIjpyZXR1cm4gdC5zdG9wKCl9fSx0KX0pLGk9MDtjYXNlIDI6aWYoaTxvLmxlbmd0aClyZXR1cm4gdC5kZWxlZ2F0ZVlpZWxkKGUoaSksXCJ0MFwiLDQpO3QubmV4dD03O2JyZWFrO2Nhc2UgNDppKyssdC5uZXh0PTI7YnJlYWs7Y2FzZSA3OnJldHVybiB0Lm5leHQ9OSxzLmhpZGVOb2RlKCk7Y2FzZSA5OmNhc2VcImVuZFwiOnJldHVybiB0LnN0b3AoKX19LHQpfSkpKCl9aW5pdExpbmVQb3NpdGlvbih0LGUsaSl7dmFyIG49MD09ZT90aGlzLmdyaWRSb3dbMF0ueC10aGlzLmdyaWRSb3dbMF0ud2lkdGg6dGhpcy5hbGxHcmlkUG9zaXRpb25baV0ua2V5cygpLm5leHQoKS52YWx1ZSxpPXRoaXMuYWxsR3JpZFBvc2l0aW9uW2ldLnZhbHVlcygpLm5leHQoKS52YWx1ZTt0aGlzLmFsbFdpbkxpbmVbdF0uZ2V0KGUpLng9bix0aGlzLmFsbFdpbkxpbmVbdF0uZ2V0KGUpLnk9aX1pbml0UGFydGljbGVQb3NpdGlvbih0LGUpe3ZhciBpPXRoaXMuZ3JpZFJvd1swXS54LXRoaXMuZ3JpZFJvd1swXS53aWR0aCxlPXRoaXMuYWxsR3JpZFBvc2l0aW9uW2VdLnZhbHVlcygpLm5leHQoKS52YWx1ZTt0aGlzLmFsbFBhcnRpY2xlLmdldCh0KS54PWksdGhpcy5hbGxQYXJ0aWNsZS5nZXQodCkueT1lfWdldFBvc2l0aW9uKHQsZSxpKXt2YXIgbixyPXRoaXMuYWxsR3JpZFBvc2l0aW9uW2ldLnZhbHVlcygpLm5leHQoKS52YWx1ZTtyZXR1cm4gMD09ZT8obj10aGlzLmdyaWRSb3dbMF0ueC10aGlzLmdyaWRSb3dbMF0ud2lkdGgsY2MudjIobixyKSk6ZT09dGhpcy5ncmlkUm93Lmxlbmd0aCsxPyhlPXRoaXMuZ3JpZFJvd1t0aGlzLmdyaWRSb3cubGVuZ3RoLTFdLngrdGhpcy5ncmlkUm93W3RoaXMuZ3JpZFJvdy5sZW5ndGgtMV0ud2lkdGgsY2MudjIoZSxyKSk6Y2MudjIodGhpcy5hbGxHcmlkUG9zaXRpb25baV0ua2V5cygpLm5leHQoKS52YWx1ZSxyKX1ydW5MaW5lVG9Bc3luYyhlLGkpe3ZhciBuPXRoaXM7cmV0dXJuIF9hc3luY1RvR2VuZXJhdG9yKF9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiB0KCl7cmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbih0KXtmb3IoOzspc3dpdGNoKHQucHJldj10Lm5leHQpe2Nhc2UgMDpyZXR1cm4gdC5hYnJ1cHQoXCJyZXR1cm5cIixuZXcgUHJvbWlzZSh0PT57bi5saW5lVG9HcmlkQW5pbWF0aW9uTG9vcChlLGksdCl9KSk7Y2FzZSAxOmNhc2VcImVuZFwiOnJldHVybiB0LnN0b3AoKX19LHQpfSkpKCl9bGluZVRvR3JpZEFuaW1hdGlvbkxvb3AodCxlLGkpe3ZhciBuPTM8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTowLHI9bnVsbCE9PShvPWVbbi0xXSkmJnZvaWQgMCE9PW8/bzplWzBdLG89bnVsbCE9PShvPWVbbl0pJiZ2b2lkIDAhPT1vP286ZVtlLmxlbmd0aC0xXSxyPXRoaXMuZ2V0UG9zaXRpb24odCxuLHIpLG89dGhpcy5nZXRQb3NpdGlvbih0LG4rMSxvKTt0aGlzLmFsbFdpbkxpbmVbdF0uZ2V0KG4pLmFuZ2xlPXRoaXMuZ2V0QW5nbGVCZXR3ZWVuVHdvUG9pbnRzKHIsbyx0aGlzLmxpbmVWZWN0b3IpO289dGhpcy5nZXREaXN0YW5jZUJldHdlZW5Ud29Qb2ludHMocixvKTt0aGlzLmFsbFdpbkxpbmVbdF0uZ2V0KG4pLmFjdGl2ZT0hMCxjYy50d2Vlbih0aGlzLmFsbFdpbkxpbmVbdF0uZ2V0KG4pKS50byh0aGlzLnJ1bkxpbmVTcGVlZCx7aGVpZ2h0Om99KS5jYWxsKCgpPT57dGhpcy5pc1N0b3B8fG49PXRoaXMuZ3JpZFJvdy5sZW5ndGg/aSgpOih0aGlzLnNob3dXaW5HcmlkKGVbbl0sdCksbisrLHRoaXMubGluZVRvR3JpZEFuaW1hdGlvbkxvb3AodCxlLGksbikpfSkuc3RhcnQoKX1ydW5QYXJ0aWNsZVRvQXN5bmMoZSxpKXt2YXIgbj10aGlzO3JldHVybiBfYXN5bmNUb0dlbmVyYXRvcihfcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gdCgpe3JldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24odCl7Zm9yKDs7KXN3aXRjaCh0LnByZXY9dC5uZXh0KXtjYXNlIDA6cmV0dXJuIHQuYWJydXB0KFwicmV0dXJuXCIsbmV3IFByb21pc2UodD0+e24ucGFydGljbGVUb0dyaWRBbmltYXRpb25Mb29wKGUsaSx0KX0pKTtjYXNlIDE6Y2FzZVwiZW5kXCI6cmV0dXJuIHQuc3RvcCgpfX0sdCl9KSkoKX1wYXJ0aWNsZVRvR3JpZEFuaW1hdGlvbkxvb3AodCxlLGkpe3ZhciBuPTM8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTowLHI9bnVsbCE9PShvPWVbbi0xXSkmJnZvaWQgMCE9PW8/bzplWzBdLG89bnVsbCE9PShvPWVbbl0pJiZ2b2lkIDAhPT1vP286ZVtlLmxlbmd0aC0xXSxyPXRoaXMuZ2V0UG9zaXRpb24odCxuLHIpLG89dGhpcy5nZXRQb3NpdGlvbih0LG4rMSxvKTt0aGlzLmFsbFBhcnRpY2xlLmdldCh0KS5hbmdsZT10aGlzLmdldEFuZ2xlQmV0d2VlblR3b1BvaW50cyhyLG8sdGhpcy5wYXJ0aWNsZVZlY3RvciksdGhpcy5hbGxQYXJ0aWNsZS5nZXQodCkuYWN0aXZlPSEwLGNjLnR3ZWVuKHRoaXMuYWxsUGFydGljbGUuZ2V0KHQpKS50byh0aGlzLnJ1blBhcnRpY2xlU3BlZWQse3g6by54LHk6by55fSkuY2FsbCgoKT0+e3RoaXMuaXNTdG9wfHxuPT10aGlzLmdyaWRSb3cubGVuZ3RoP2koKToobisrLHRoaXMucGFydGljbGVUb0dyaWRBbmltYXRpb25Mb29wKHQsZSxpLG4pKX0pLnN0YXJ0KCl9Y29weVdpbkxpbmVOb2RlKHQpe3RoaXMuY29weVBhcnRpY2xlVG9Db250YWluZXIodCksdGhpcy5jb3B5V2luTGluZVRvQ29udGFpbmVyKHQpfWNvcHlQYXJ0aWNsZVRvQ29udGFpbmVyKHQpe2Zvcih2YXIgZT0wO2U8dDtlKyspe3ZhciBpPWNjLmluc3RhbnRpYXRlKHRoaXMucGFydGljbGVQcmVmYWIpO2kuYWN0aXZlPSExLHRoaXMuX3BhcnRpY2xlQ29udGFpbmVyLmFkZENoaWxkKGksZSxcIlwiLmNvbmNhdChcIlBBUlRJQ0xFXCIpLmNvbmNhdChlKSksdGhpcy5hbGxQYXJ0aWNsZS5zZXQoZSxpKX1yZXR1cm4gdGhpc31jb3B5V2luTGluZVRvQ29udGFpbmVyKHQpe2Zvcih2YXIgZT0wO2U8dDtlKyspe2Zvcih2YXIgaT1uZXcgTWFwLG49MDtuPHRoaXMuZ3JpZFJvdy5sZW5ndGgrMTtuKyspe3ZhciByPWNjLmluc3RhbnRpYXRlKHRoaXMubGluZVNwcml0ZS5ub2RlKTtyLmFjdGl2ZT0hMSx0aGlzLl9saW5lQ29udGFpbmVyLmFkZENoaWxkKHIsZSxcIlwiLmNvbmNhdChcIkxJTkVcIikuY29uY2F0KGUsXCJfXCIpLmNvbmNhdChuKSksaS5zZXQobixyKX10aGlzLmFsbFdpbkxpbmUucHVzaChpKX1yZXR1cm4gdGhpc31pbml0V2luTGluUG9zaXRpb24oKXt2YXIgdCxlPW5ldyBBcnJheSxpPV9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyJDkodGhpcy5ncmlkUm93KTt0cnl7Zm9yKGkucygpOyEodD1pLm4oKSkuZG9uZTspZm9yKHZhciBuPXQudmFsdWUscj1uLngsbz1uLnkrdGhpcy5ncmlkSGVpZ2h0LHM9MDtzPHRoaXMuZ3JpZENvbnQ7cysrKXt2YXIgYT1uZXcgTWFwO2Euc2V0KHIsbyksZS5wdXNoKGEpLG8tPXRoaXMuZ3JpZEhlaWdodH19Y2F0Y2godCl7aS5lKHQpfWZpbmFsbHl7aS5mKCl9cmV0dXJuIGV9Z2V0RGlzdGFuY2VCZXR3ZWVuVHdvUG9pbnRzKHQsZSl7dmFyIGk9TWF0aC5wb3coZS54LXQueCwyKSx0PU1hdGgucG93KGUueS10LnksMik7cmV0dXJuIE1hdGguc3FydChpK3QpKzF9Z2V0QW5nbGVCZXR3ZWVuVHdvUG9pbnRzKHQsZSxpKXt2YXIgbj1lLngtdC54LHQ9ZS55LXQueTtyZXR1cm4gY2MudjIobix0KS5zaWduQW5nbGUoaSkqKDE4MC9NYXRoLlBJKSotMX1jbGVhcigpe2NjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLl9saW5lQ29udGFpbmVyKSxjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5fcGFydGljbGVDb250YWluZXIpLHRoaXMuYWxsV2luTGluZS5sZW5ndGg9MCx0aGlzLmFsbFBhcnRpY2xlLmNsZWFyKCksdGhpcy5fbGluZUNvbnRhaW5lci5kZXN0cm95QWxsQ2hpbGRyZW4oKSx0aGlzLl9wYXJ0aWNsZUNvbnRhaW5lci5kZXN0cm95QWxsQ2hpbGRyZW4oKX1nZXQgcGFydGljbGVDb250YWluZXIoKXtyZXR1cm4gdGhpcy5fcGFydGljbGVDb250YWluZXJ9Z2V0IGxpbmVDb250YWluZXIoKXtyZXR1cm4gdGhpcy5fbGluZUNvbnRhaW5lcn19LEFXaW5MaW5UZW1wbGF0ZSQxPUFXaW5MaW5UZW1wbGF0ZT1fX2RlY29yYXRlKFtjY2NsYXNzXSxBV2luTGluVGVtcGxhdGUpO2NsYXNzIEFNYWluSW5pdFRlbXBsYXRlIGV4dGVuZHMgQUdlbmVyaWNUZW1wbGF0ZXtvbkxvYWQoKXt0aGlzLnNldEhpc3RvcnlEZXRhaWwoKSx0aGlzLnByZWZhYkluc3RhbnRpYXRlKCksc3VwZXIub25Mb2FkKCl9fWNsYXNzIEFTbG90VGVtcGxhdGV7Y29uc3RydWN0b3IodCxlKXtfZGVmaW5lUHJvcGVydHkodGhpcyxcInN0eWxlRGF0YVwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJpc1Nsb3RJbW1lZGlhdGVTdG9wXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcImlzU3BlZWRVcFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJzcGVlZFJhdGlvXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcInN0b3BOb3dTdGF0ZU9ic2VydmVyXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcInNwZWVkU3RhdGVDaGFuZ2VPYnNlcnZlclwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJyZXNwb25zZVJlc3VsdE9ic2VydmVyXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcImlzUmVzdWx0T0tcIix2b2lkIDApLHRoaXMuaXNTcGVlZFVwPWUuaXNTcGVlZFVwLHRoaXMuc3R5bGVEYXRhPXQsdGhpcy5zcGVlZFJhdGlvPXRoaXMuaXNTcGVlZFVwP3Quc3BlZWRVcE11bHRpcGxlOjEsdGhpcy5pc1Jlc3VsdE9LPSExLHRoaXMuYWRkTm90aWZpY2F0aW9uKCl9YWRkTm90aWZpY2F0aW9uKCl7ZmNjLm5vdGlmaWNhdGlvbk1ncigpLmdldE5vdGlmaWNhdGlvbihmY2MudHlwZS5Ob3RpZmljYXRpb25UeXBlLlNUT1BfTk9XKS5zdWJzY3JpYmUodGhpcy5nZXRTdG9wTm93U3RhdGVPYnNlcnZlcigpLCEwKSxmY2Mubm90aWZpY2F0aW9uTWdyKCkuZ2V0Tm90aWZpY2F0aW9uKGZjYy50eXBlLk5vdGlmaWNhdGlvblR5cGUuU1BFRURfQ0hBTkdFKS5zdWJzY3JpYmUodGhpcy5nZXRTcGVlZFN0YXRlQ2hhbmdlT2JzZXJ2ZXIoKSwhMCksZmNjLm5vdGlmaWNhdGlvbk1ncigpLmdldE5vdGlmaWNhdGlvbihmY2MudHlwZS5Ob3RpZmljYXRpb25UeXBlLlJFU1BPTlNFX1JFU1VMVCkuc3Vic2NyaWJlKHRoaXMuZ2V0UmVzcG9uc2VSZXN1bHRPYnNlcnZlcigpLCEwKX1nZXRTdG9wTm93U3RhdGVPYnNlcnZlcigpe3JldHVybiB0aGlzLmlzU2xvdEltbWVkaWF0ZVN0b3B8fCh0aGlzLnN0b3BOb3dTdGF0ZU9ic2VydmVyPW5ldyBTdG9wTm93U3RhdGVPYnNlcnZlcigoKT0+e3RoaXMuaXNTbG90SW1tZWRpYXRlU3RvcD0hMH0sdGhpcykpLHRoaXMuc3RvcE5vd1N0YXRlT2JzZXJ2ZXJ9Z2V0U3BlZWRTdGF0ZUNoYW5nZU9ic2VydmVyKCl7cmV0dXJuIHRoaXMuc3BlZWRTdGF0ZUNoYW5nZU9ic2VydmVyfHwodGhpcy5zcGVlZFN0YXRlQ2hhbmdlT2JzZXJ2ZXI9bmV3IFNwZWVkU3RhdGVDaGFuZ2VPYnNlcnZlcih0PT57dGhpcy5zcGVlZFJhdGlvPXQ/dGhpcy5zdHlsZURhdGEuc3BlZWRVcE11bHRpcGxlOjF9LHRoaXMpKSx0aGlzLnNwZWVkU3RhdGVDaGFuZ2VPYnNlcnZlcn1nZXRSZXNwb25zZVJlc3VsdE9ic2VydmVyKCl7cmV0dXJuIHRoaXMucmVzcG9uc2VSZXN1bHRPYnNlcnZlcnx8KHRoaXMucmVzcG9uc2VSZXN1bHRPYnNlcnZlcj1uZXcgUmVzcG9uc2VSZXN1bHRPYnNlcnZlcih0PT57dCE9ZmNjLnR5cGUuU2VydmVyRXZlbnRUeXBlLkJFVF9SRVNVTFQmJnQhPWZjYy50eXBlLlNlcnZlckV2ZW50VHlwZS5GUkVFX1NQSU5fUkVTVUxUfHwodGhpcy5pc1Jlc3VsdE9LPSEwKX0sdGhpcykpLHRoaXMucmVzcG9uc2VSZXN1bHRPYnNlcnZlcn19ZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkYSh0LGUpe3ZhciBpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJnRbU3ltYm9sLml0ZXJhdG9yXXx8dFtcIkBAaXRlcmF0b3JcIl07aWYoIWkpe2lmKEFycmF5LmlzQXJyYXkodCl8fChpPV91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSRhKHQpKXx8ZSYmdCYmXCJudW1iZXJcIj09dHlwZW9mIHQubGVuZ3RoKXtpJiYodD1pKTt2YXIgbj0wLGU9ZnVuY3Rpb24oKXt9O3JldHVybntzOmUsbjpmdW5jdGlvbigpe3JldHVybiBuPj10Lmxlbmd0aD97ZG9uZTohMH06e2RvbmU6ITEsdmFsdWU6dFtuKytdfX0sZTpmdW5jdGlvbih0KXt0aHJvdyB0fSxmOmV9fXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX12YXIgcixvPSEwLHM9ITE7cmV0dXJue3M6ZnVuY3Rpb24oKXtpPWkuY2FsbCh0KX0sbjpmdW5jdGlvbigpe3ZhciB0PWkubmV4dCgpO3JldHVybiBvPXQuZG9uZSx0fSxlOmZ1bmN0aW9uKHQpe3M9ITAscj10fSxmOmZ1bmN0aW9uKCl7dHJ5e298fG51bGw9PWkucmV0dXJufHxpLnJldHVybigpfWZpbmFsbHl7aWYocyl0aHJvdyByfX19fWZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSRhKHQsZSl7aWYodCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5JGEodCxlKTt2YXIgaT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc2xpY2UoOCwtMSk7cmV0dXJuXCJNYXBcIj09PShpPVwiT2JqZWN0XCI9PT1pJiZ0LmNvbnN0cnVjdG9yP3QuY29uc3RydWN0b3IubmFtZTppKXx8XCJTZXRcIj09PWk/QXJyYXkuZnJvbSh0KTpcIkFyZ3VtZW50c1wiPT09aXx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QoaSk/X2FycmF5TGlrZVRvQXJyYXkkYSh0LGUpOnZvaWQgMH19ZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkkYSh0LGUpeyhudWxsPT1lfHxlPnQubGVuZ3RoKSYmKGU9dC5sZW5ndGgpO2Zvcih2YXIgaT0wLG49bmV3IEFycmF5KGUpO2k8ZTtpKyspbltpXT10W2ldO3JldHVybiBufWNsYXNzIE5vcm1hbFNsb3RUZW1wbGF0ZSBleHRlbmRzIEFTbG90VGVtcGxhdGV7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwic2xvdFR1cm5Db3VudFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJzbG90R2lyZFNwZWVkXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcInNsb3RSb3dHcmlkQ291bnRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwic2xvdEdyaWRIZWlnaHRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiZnJlZUljb25Db3VudFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJzcGVlZFVwTXVsdGlwbGVcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwic2xvdENvbHVtblRvVHdlZW5cIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiZ3JpZE5vZGVUb01hcFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJncmlkU3ByaXRlVG9NYXBcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiZ3JpZEltZ1wiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJzaW5lSW5FYXNpbmdcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwic2luZU91dEVhc2luZ1wiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJpc1Nsb3RFbmRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiaXNSb3dDaGVja0xvb2tBdFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJyb3dEYXRhXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcInJlc3VsdE1vZGVsXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcImxvb2tBdENvdW50XCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcInJvd1R1cm5Db3VudFwiLHZvaWQgMCksdCYmKHRoaXMuc3R5bGVEYXRhPXQsdGhpcy5zbG90VHVybkNvdW50PXQuc2xvdFR1cm5Db3VudCx0aGlzLnNsb3RHaXJkU3BlZWQ9dC5zbG90R2lyZFNwZWVkLHRoaXMuc2xvdFJvd0dyaWRDb3VudD10LnNsb3RSb3dHcmlkQ291bnQsdGhpcy5zbG90R3JpZEhlaWdodD10LnNsb3RHcmlkSGVpZ2h0LHRoaXMuc3BlZWRVcE11bHRpcGxlPXQuc3BlZWRVcE11bHRpcGxlLHRoaXMuc2xvdENvbHVtblRvVHdlZW49dC5zbG90Q29sdW1uVG9Ud2Vlbix0aGlzLmdyaWROb2RlVG9NYXA9dC5ncmlkTm9kZVRvTWFwLHRoaXMuZ3JpZFNwcml0ZVRvTWFwPXQuZ3JpZFNwcml0ZVRvTWFwLHRoaXMuZ3JpZEltZz10LmdyaWRJbWcsdGhpcy5zaW5lSW5FYXNpbmc9dC5zaW5lSW5FYXNpbmcsdGhpcy5zaW5lT3V0RWFzaW5nPXQuc2luZU91dEVhc2luZyx0aGlzLnJlc3VsdE1vZGVsPXQucmVzdWx0TW9kdWxlLHRoaXMucm93RGF0YT1uZXcgQXJyYXksdGhpcy5sb29rQXRDb3VudD10Lmxvb2tBdENvdW50LHRoaXMuaXNTbG90RW5kPVtdLHRoaXMucm93RGF0YS5wdXNoKHRoaXMuc2xvdFJvd0dyaWRDb3VudCx0aGlzLmdldENhbGN1bGF0ZVNsb3RIZWlnaHQoKSksdGhpcy5yb3dUdXJuQ291bnQ9bmV3IEFycmF5LHRoaXMuaXNSb3dDaGVja0xvb2tBdD1uZXcgTWFwLHRoaXMuaW5pdGlhbGl6ZVN0YXRlKCkpfWdldENhbGN1bGF0ZVNsb3RIZWlnaHQoKXtyZXR1cm4gdGhpcy5zbG90Um93R3JpZENvdW50KnRoaXMuc2xvdEdyaWRIZWlnaHR9c2luZUluU2xvdCgpe3ZhciBzPU1hdGguZmxvb3IodGhpcy5zdHlsZURhdGEuc2xvdEdyaWRIZWlnaHQvMik7cmV0dXJuIG5ldyBQcm9taXNlKHQ9Pnt2YXIgZSxpPTAsbj10aGlzLnNsb3RHaXJkU3BlZWQscj1fY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciRhKHRoaXMuc2xvdENvbHVtblRvVHdlZW4pO3RyeXtmb3Ioci5zKCk7IShlPXIubigpKS5kb25lOyl7dmFyIG89ZS52YWx1ZTtjYy50d2VlbihvKS50bygxLjUqbix7eTpvLnkrc30se2Vhc2luZzp0aGlzLnNpbmVJbkVhc2luZ30pLmJ5KG4se3k6LXN9KS5jYWxsKCgpPT57KytpPT09dGhpcy5zbG90Q29sdW1uVG9Ud2Vlbi5sZW5ndGgmJnQoKX0pLnN0YXJ0KCl9fWNhdGNoKHQpe3IuZSh0KX1maW5hbGx5e3IuZigpfX0pfXJ1blNsb3RBbmltYXRpb24oKXtyZXR1cm4gbmV3IFByb21pc2UodD0+e3ZhciBlPXRoaXMuc2xvdENvbHVtblRvVHdlZW4ubGVuZ3RoO2ZjYy5hdWRpb01nci5lZmZlY3RQbGF5KFwiU2xvdFR1cm5cIik7Zm9yKHZhciBpPTA7aTxlO2krKyl7aWYoaT09ZS0xKXJldHVybiB2b2lkIHRoaXMuZXhlY3V0ZVNsb3RBbmltYXRpb24oaSx0KTt0aGlzLmV4ZWN1dGVTbG90QW5pbWF0aW9uKGkpfX0pfWV4ZWN1dGVTbG90QW5pbWF0aW9uKHQsZSl7dmFyIGk9Mjxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOjAsbj10aGlzLnNsb3RHaXJkU3BlZWQqdGhpcy5zbG90Um93R3JpZENvdW50L3RoaXMuc3BlZWRSYXRpbyxyPXRoaXMuc2xvdENvbHVtblRvVHdlZW5bdF07Y2MudHdlZW4ocikudG8obix7eTpyLnktdGhpcy5yb3dEYXRhWzFdfSkuY2FsbCgoKT0+eygwIT10JiZ0aGlzLmNoZWNrTG9va0F0KHQpJiZ0aGlzLmlzU2xvdEVuZFt0LTFdJiYhdGhpcy5pc1NwZWVkVXB8fDA9PXQmJnRoaXMuY2hlY2tMb29rQXQodCkmJiF0aGlzLmlzU3BlZWRVcCkmJnRoaXMubm90aWZ5TG9va0F0RXZlbnQoITAsdCksdGhpcy51cGRhdGVHcmlkUG9zaXRpb25BbmRSYW5kb21JbWcodGhpcy5ncmlkTm9kZVRvTWFwLmdldCh0KSx0KSx0aGlzLmlzUmVzdWx0T0s/dGhpcy5pc0NhblN0b3AodCxlKXx8KGkrKywwPT10JiZpPT10aGlzLmdldFNsb3RUdXJuQ291bnQodCk/KDE9PXRoaXMucmVzdWx0TW9kZWwuTG9va0F0W3RdJiYodGhpcy5pc1NwZWVkVXB8fHRoaXMubm90aWZ5TG9va0F0RXZlbnQoITEsdCkpLHRoaXMuc2hvd0Fuc3dlcih0KSx0aGlzLmlzU2xvdEVuZFt0XT0hMCk6MCE9dCYmdGhpcy5pc1Nsb3RFbmRbdC0xXSYmaT09dGhpcy5nZXRTbG90VHVybkNvdW50KHQpPyh0aGlzLnNob3dBbnN3ZXIodCxlKSx0aGlzLmlzU2xvdEVuZFt0XT0hMCx0aGlzLmNoZWNrTG9va0F0KHQpJiYodGhpcy5pc1NwZWVkVXB8fHRoaXMubm90aWZ5TG9va0F0RXZlbnQoITEsdCkpKTp0aGlzLmV4ZWN1dGVTbG90QW5pbWF0aW9uKHQsZSxpKSk6dGhpcy5leGVjdXRlU2xvdEFuaW1hdGlvbih0LGUsaSl9KS5zdGFydCgpfWdldFNsb3RUdXJuQ291bnQodCl7dmFyIGU9dGhpcy5pc1NwZWVkVXA/dGhpcy5zbG90VHVybkNvdW50OnRoaXMuY2hlY2tMb29rQXQodCk/KChlPTApIT10JiYoZT10aGlzLnJvd1R1cm5Db3VudFt0LTFdKSx0aGlzLmxvb2tBdENvdW50K2UpOnRoaXMuc2xvdFR1cm5Db3VudCt0O3JldHVybiB0aGlzLnJvd1R1cm5Db3VudFt0XXx8KHRoaXMucm93VHVybkNvdW50W3RdPWUpLGV9bm90aWZ5TG9va0F0RXZlbnQodCxlKXtmY2Mubm90aWZpY2F0aW9uTWdyKCkuZ2V0Tm90aWZpY2F0aW9uKGZjYy50eXBlLk5vdGlmaWNhdGlvblR5cGUuU0NST0xMX0ZPQ1VTX1NUQVRFKS5ub3RpZnkoZSx0KX1pc0NhblN0b3AodCxlKXtyZXR1cm4hIXRoaXMuaXNTbG90SW1tZWRpYXRlU3RvcCYmKHQ9PXRoaXMuc2xvdENvbHVtblRvVHdlZW4ubGVuZ3RoLTE/dGhpcy5zaG93QW5zd2VyKHQsZSk6dGhpcy5zaG93QW5zd2VyKHQpLHRoaXMuaXNTbG90RW5kW3RdPSEwLHRoaXMuY2hlY2tMb29rQXQodCkmJnRoaXMubm90aWZ5TG9va0F0RXZlbnQoITEsdCksITApfXVwZGF0ZUdyaWRQb3NpdGlvbkFuZFJhbmRvbUltZyh0LGUpe2Zvcih2YXIgaSxuPXQubGVuZ3RoLTEscj0wO3I8dGhpcy5yb3dEYXRhWzBdO3IrKylpPXRoaXMuZ3JpZFNwcml0ZVRvTWFwLmdldChlKVtuXSx0aGlzLmdyaWRTcHJpdGVUb01hcC5nZXQoZSkudW5zaGlmdChpKSx0aGlzLmdyaWRTcHJpdGVUb01hcC5nZXQoZSkucG9wKCksaT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqdGhpcy5ncmlkSW1nLnNpemUpLHRoaXMuZ3JpZFNwcml0ZVRvTWFwLmdldChlKVswXS5zcHJpdGVGcmFtZT10aGlzLmdyaWRJbWcuZ2V0KFN0cmluZyhpKSksdFtuXS55PXRbMF0ueSt0aGlzLnNsb3RHcmlkSGVpZ2h0LHQudW5zaGlmdCh0W25dKSx0LnBvcCgpfXNob3dBbnN3ZXIodCxlKXt0aGlzLnVwZGF0ZUdyaWRBbnN3ZXIodCk7dmFyIGk9dGhpcy5zbG90R2lyZFNwZWVkKnRoaXMucm93RGF0YVswXS90aGlzLnNwZWVkUmF0aW8sbj10aGlzLnNsb3RDb2x1bW5Ub1R3ZWVuW3RdO2NjLnR3ZWVuKG4pLnRvKGkse3k6bi55LXRoaXMucm93RGF0YVsxXX0pLmNhbGwoKCk9Pnt0aGlzLnVwZGF0ZUdyaWRQb3NpdGlvbkFuZFJhbmRvbUltZyh0aGlzLmdyaWROb2RlVG9NYXAuZ2V0KHQpLHQpLHRoaXMuc2luZU91dEFuaW1hdGlvbih0LGUpfSkuc3RhcnQoKX1jaGVja0xvb2tBdCh0KXt2YXIgZT0hMTtyZXR1cm4gdGhpcy5pc1Jvd0NoZWNrTG9va0F0LmdldCh0KXx8KHRoaXMuaXNSb3dDaGVja0xvb2tBdC5zZXQodCwhMCksZT0hIXRoaXMucmVzdWx0TW9kZWwuTG9va0F0W3RdKSxlfXNpbmVPdXRBbmltYXRpb24odCxlKXsodGhpcy5pc1NwZWVkVXB8fHRoaXMuaXNTbG90SW1tZWRpYXRlU3RvcCkmJnQhPXRoaXMuc2xvdENvbHVtblRvVHdlZW4ubGVuZ3RoLTF8fGZjYy5hdWRpb01nci5lZmZlY3RQbGF5KFwiU2xvdFN0b3BcIiksdD09PXRoaXMuc2xvdENvbHVtblRvVHdlZW4ubGVuZ3RoLTEmJmZjYy5hdWRpb01nci5lZmZlY3RTdG9wKFwiU2xvdFR1cm5cIik7dmFyIGk9TWF0aC5mbG9vcih0aGlzLnN0eWxlRGF0YS5zbG90R3JpZEhlaWdodC8yKSxuPXRoaXMuc2xvdENvbHVtblRvVHdlZW5bdF0scj0hMTsodGhpcy5pc1Nsb3RJbW1lZGlhdGVTdG9wfHx0aGlzLmlzU3BlZWRVcCkmJihyPSEwKSxmY2Mubm90aWZpY2F0aW9uTWdyKCkuZ2V0Tm90aWZpY2F0aW9uKGZjYy50eXBlLk5vdGlmaWNhdGlvblR5cGUuU0xPVF9ST1dfRU5EKS5ub3RpZnkodCxyKTtyPXRoaXMuc2xvdEdpcmRTcGVlZDtjYy50d2VlbihuKS50byhyLHt5Om4ueS1pfSkuYnkoNipyLHt5OitpfSx7ZWFzaW5nOnRoaXMuc2luZU91dEVhc2luZ30pLmNhbGwoKCk9Pnt0PT09dGhpcy5zbG90Q29sdW1uVG9Ud2Vlbi5sZW5ndGgtMSYmZSgpfSkuc3RhcnQoKX11cGRhdGVHcmlkQW5zd2VyKHQpe2Zvcih2YXIgZT10KnRoaXMuc2xvdFJvd0dyaWRDb3VudCxpPWUrdGhpcy5zbG90Um93R3JpZENvdW50LG49MDtlPGk7ZSsrKXt2YXIgcj1TdHJpbmcodGhpcy5yZXN1bHRNb2RlbC5HcmlkW2VdKTt0aGlzLmdyaWRTcHJpdGVUb01hcC5nZXQodClbbl0uc3ByaXRlRnJhbWU9dGhpcy5ncmlkSW1nLmdldChyKSxuKyt9fWluaXRpYWxpemVTdGF0ZSgpe2lmKHRoaXMuaXNTbG90SW1tZWRpYXRlU3RvcD0hMSx0aGlzLmlzU3BlZWRVcD0xPHRoaXMuc3BlZWRSYXRpbyx0aGlzLmZyZWVJY29uQ291bnQ9MCx0aGlzLmlzUmVzdWx0T0s9ITEsdGhpcy5yb3dUdXJuQ291bnQubGVuZ3RoPTAsdGhpcy5pc1Jvd0NoZWNrTG9va0F0LmNsZWFyKCksMD09dGhpcy5pc1Nsb3RFbmQubGVuZ3RoKWZvcih2YXIgdD0wO3Q8dGhpcy5zbG90Q29sdW1uVG9Ud2Vlbi5sZW5ndGg7dCsrKXRoaXMuaXNTbG90RW5kLnB1c2goITEpO2Vsc2UgZm9yKHZhciBlPTA7ZTx0aGlzLnNsb3RDb2x1bW5Ub1R3ZWVuLmxlbmd0aDtlKyspdGhpcy5pc1Nsb3RFbmRbZV09ITF9fWZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyJGIodCxlKXt2YXIgaT1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZ0W1N5bWJvbC5pdGVyYXRvcl18fHRbXCJAQGl0ZXJhdG9yXCJdO2lmKCFpKXtpZihBcnJheS5pc0FycmF5KHQpfHwoaT1fdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkkYih0KSl8fGUmJnQmJlwibnVtYmVyXCI9PXR5cGVvZiB0Lmxlbmd0aCl7aSYmKHQ9aSk7dmFyIG49MCxlPWZ1bmN0aW9uKCl7fTtyZXR1cm57czplLG46ZnVuY3Rpb24oKXtyZXR1cm4gbj49dC5sZW5ndGg/e2RvbmU6ITB9Ontkb25lOiExLHZhbHVlOnRbbisrXX19LGU6ZnVuY3Rpb24odCl7dGhyb3cgdH0sZjplfX10aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9dmFyIHIsbz0hMCxzPSExO3JldHVybntzOmZ1bmN0aW9uKCl7aT1pLmNhbGwodCl9LG46ZnVuY3Rpb24oKXt2YXIgdD1pLm5leHQoKTtyZXR1cm4gbz10LmRvbmUsdH0sZTpmdW5jdGlvbih0KXtzPSEwLHI9dH0sZjpmdW5jdGlvbigpe3RyeXtvfHxudWxsPT1pLnJldHVybnx8aS5yZXR1cm4oKX1maW5hbGx5e2lmKHMpdGhyb3cgcn19fX1mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkkYih0LGUpe2lmKHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXJldHVybiBfYXJyYXlMaWtlVG9BcnJheSRiKHQsZSk7dmFyIGk9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpLnNsaWNlKDgsLTEpO3JldHVyblwiTWFwXCI9PT0oaT1cIk9iamVjdFwiPT09aSYmdC5jb25zdHJ1Y3Rvcj90LmNvbnN0cnVjdG9yLm5hbWU6aSl8fFwiU2V0XCI9PT1pP0FycmF5LmZyb20odCk6XCJBcmd1bWVudHNcIj09PWl8fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KGkpP19hcnJheUxpa2VUb0FycmF5JGIodCxlKTp2b2lkIDB9fWZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5JGIodCxlKXsobnVsbD09ZXx8ZT50Lmxlbmd0aCkmJihlPXQubGVuZ3RoKTtmb3IodmFyIGk9MCxuPW5ldyBBcnJheShlKTtpPGU7aSsrKW5baV09dFtpXTtyZXR1cm4gbn1jbGFzcyBOb3JtYWxTbG90U3BlY2lhbFRlbXBsYXRlIGV4dGVuZHMgQVNsb3RUZW1wbGF0ZXtjb25zdHJ1Y3Rvcih0LGUpe3N1cGVyKHQsZSksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJzbG90VHVybkNvdW50XCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcInNsb3RSb3dUaW1lXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcInNsb3RHaXJkU3BlZWRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwic2xvdFJvd0dyaWRDb3VudFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJzbG90R3JpZEhlaWdodFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJzcGVlZFVwTXVsdGlwbGVcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwic2xvdENvbHVtblRvVHdlZW5cIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwibG9va0F0VGltZVwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJncmlkTm9kZVRvTWFwXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcImdyaWRTcHJpdGVUb01hcFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJncmlkSW1nXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcInNpbmVJbkVhc2luZ1wiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJzaW5lT3V0RWFzaW5nXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcImlzU2xvdEVuZFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJpc1RpbWVFbmRMaXN0ZW5lclwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJpc1Jvd0NoZWNrTG9va0F0XCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcInJlc3VsdE1vZGVsXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIm5vd1RpbWVyXCIsdm9pZCAwKSx0JiYodGhpcy5zdHlsZURhdGE9dCx0aGlzLnNsb3RSb3dUaW1lPXQuc2xvdFJvd1RpbWUsdGhpcy5zbG90VHVybkNvdW50PXQuc2xvdFR1cm5Db3VudCx0aGlzLnNsb3RHaXJkU3BlZWQ9dC5zbG90R2lyZFNwZWVkLHRoaXMuc2xvdFJvd0dyaWRDb3VudD10LnNsb3RSb3dHcmlkQ291bnQsdGhpcy5zbG90R3JpZEhlaWdodD10LnNsb3RHcmlkSGVpZ2h0LHRoaXMuc3BlZWRVcE11bHRpcGxlPXQuc3BlZWRVcE11bHRpcGxlLHRoaXMuc2xvdENvbHVtblRvVHdlZW49dC5zbG90Q29sdW1uVG9Ud2Vlbix0aGlzLmdyaWROb2RlVG9NYXA9dC5ncmlkTm9kZVRvTWFwLHRoaXMuZ3JpZFNwcml0ZVRvTWFwPXQuZ3JpZFNwcml0ZVRvTWFwLHRoaXMuZ3JpZEltZz10LmdyaWRJbWcsdGhpcy5zaW5lSW5FYXNpbmc9dC5zaW5lSW5FYXNpbmcsdGhpcy5zaW5lT3V0RWFzaW5nPXQuc2luZU91dEVhc2luZyx0aGlzLnJlc3VsdE1vZGVsPXQucmVzdWx0TW9kdWxlLHRoaXMubG9va0F0VGltZT10Lmxvb2tBdFRpbWUsdGhpcy5pc1Nsb3RFbmQ9bmV3IEFycmF5LHRoaXMuaXNUaW1lRW5kTGlzdGVuZXI9bmV3IEFycmF5LHRoaXMuaXNSb3dDaGVja0xvb2tBdD1uZXcgTWFwLHRoaXMuaW5pdGlhbGl6ZVN0YXRlKCkpfXNpbmVJblNsb3QoKXt2YXIgcz1NYXRoLmZsb29yKHRoaXMuc3R5bGVEYXRhLnNsb3RHcmlkSGVpZ2h0LzIpO3JldHVybiBuZXcgUHJvbWlzZSh0PT57dmFyIGUsaT0wLG49dGhpcy5zbG90R2lyZFNwZWVkLHI9X2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkYih0aGlzLnNsb3RDb2x1bW5Ub1R3ZWVuKTt0cnl7Zm9yKHIucygpOyEoZT1yLm4oKSkuZG9uZTspe3ZhciBvPWUudmFsdWU7Y2MudHdlZW4obykudG8oMS41Km4se3k6by55K3N9LHtlYXNpbmc6dGhpcy5zaW5lSW5FYXNpbmd9KS5ieShuLHt5Oi1zfSkuY2FsbCgoKT0+eysraT09PXRoaXMuc2xvdENvbHVtblRvVHdlZW4ubGVuZ3RoJiZ0KCl9KS5zdGFydCgpfX1jYXRjaCh0KXtyLmUodCl9ZmluYWxseXtyLmYoKX19KX1ydW5TbG90QW5pbWF0aW9uKCl7cmV0dXJuIG5ldyBQcm9taXNlKHQ9Pntmb3IodmFyIGU9dGhpcy5zbG90Q29sdW1uVG9Ud2Vlbi5sZW5ndGgsaT0wO2k8ZTtpKyspe2lmKGk9PWUtMSlyZXR1cm4gdm9pZCB0aGlzLmV4ZWN1dGVTbG90QW5pbWF0aW9uKGksdCk7dGhpcy5leGVjdXRlU2xvdEFuaW1hdGlvbihpKX19KX1leGVjdXRlU2xvdEFuaW1hdGlvbih0LGUpe3ZhciBpPTI8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTowLG49dGhpcy5zbG90R2lyZFNwZWVkL3RoaXMuc3BlZWRSYXRpbyxyPXRoaXMuc2xvdENvbHVtblRvVHdlZW5bdF0sbz10aGlzLnNsb3RUdXJuQ291bnQqdGhpcy5zbG90Um93R3JpZENvdW50O2NjLnR3ZWVuKHIpLnRvKG4se3k6ci55LXRoaXMuc2xvdEdyaWRIZWlnaHR9KS5jYWxsKCgpPT57MCE9dCYmdGhpcy5pc1Nsb3RFbmRbdC0xXSYmIXRoaXMuaXNTcGVlZFVwP3RoaXMuY2hlY2tMb29rQXQodCkmJnRoaXMubm90aWZ5TG9va0F0RXZlbnQoITAsdCk6MD09dCYmdGhpcy5jaGVja0xvb2tBdCh0KSYmIXRoaXMuaXNTcGVlZFVwJiZ0aGlzLm5vdGlmeUxvb2tBdEV2ZW50KCEwLHQpLHRoaXMudXBkYXRlT25seUdyaWRQb3NpdGlvbkFuZFJhbmRvbUltZyh0aGlzLmdyaWROb2RlVG9NYXAuZ2V0KHQpLHQpLHRoaXMuaXNSZXN1bHRPSz90aGlzLmNoZWNrSW1tZWRpYXRlU3RvcFN0YXRlKHQsZSl8fChpPG8mJmkrKywwPT10JiZpPT1vPygxPT10aGlzLnJlc3VsdE1vZGVsLkxvb2tBdFt0XSYmKHRoaXMuaXNTcGVlZFVwfHx0aGlzLm5vdGlmeUxvb2tBdEV2ZW50KCExLHQpKSx0aGlzLmlzU2xvdEVuZFt0XT0hMCx0aGlzLmlzVGltZUVuZExpc3RlbmVyW3RdPSEwLHRoaXMuc2hvd0Fuc3dlckFuaW1hdGlvbih0KSx0aGlzLmlzU3BlZWRVcHx8dGhpcy5zdGFydFJvd1RpbWVMaXN0ZW5lcih0KzEpKTowIT10JiZpPT1vJiZ0aGlzLmlzU3BlZWRVcD8odGhpcy5pc1Nsb3RFbmRbdF09ITAsdGhpcy5zaG93QW5zd2VyQW5pbWF0aW9uKHQsZSkpOjAhPXQmJnRoaXMuaXNTbG90RW5kW3RdJiYhdGhpcy5pc1NwZWVkVXA/KHQhPXRoaXMuc2xvdENvbHVtblRvVHdlZW4ubGVuZ3RoLTEmJnRoaXMuc3RhcnRSb3dUaW1lTGlzdGVuZXIodCsxKSwxPT10aGlzLnJlc3VsdE1vZGVsLkxvb2tBdFt0XSYmKHRoaXMuaXNTcGVlZFVwfHx0aGlzLm5vdGlmeUxvb2tBdEV2ZW50KCExLHQpKSx0aGlzLnNob3dBbnN3ZXJBbmltYXRpb24odCxlKSk6dGhpcy5leGVjdXRlU2xvdEFuaW1hdGlvbih0LGUsaSkpOnRoaXMuZXhlY3V0ZVNsb3RBbmltYXRpb24odCxlLGkpfSkuc3RhcnQoKX1zdGFydFJvd1RpbWVMaXN0ZW5lcih0KXt2YXIgZTt0aGlzLmlzVGltZUVuZExpc3RlbmVyW3RdfHwodGhpcy5pc1RpbWVFbmRMaXN0ZW5lclt0XT0hMCxlPXRoaXMucmVzdWx0TW9kZWwuTG9va0F0W3RdP3RoaXMubG9va0F0VGltZTp0aGlzLnNsb3RSb3dUaW1lLHRoaXMubm93VGltZXI9d2luZG93LnNldFRpbWVvdXQoKCk9Pnt0aGlzLmlzU2xvdEVuZFt0XT0hMH0sZSkpfXVwZGF0ZU9ubHlHcmlkUG9zaXRpb25BbmRSYW5kb21JbWcodCxlKXt2YXIgaT10Lmxlbmd0aC0xLG49dGhpcy5ncmlkU3ByaXRlVG9NYXAuZ2V0KGUpW2ldO3RoaXMuZ3JpZFNwcml0ZVRvTWFwLmdldChlKS51bnNoaWZ0KG4pLHRoaXMuZ3JpZFNwcml0ZVRvTWFwLmdldChlKS5wb3AoKSxuPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLmdyaWRJbWcuc2l6ZSksdGhpcy5ncmlkU3ByaXRlVG9NYXAuZ2V0KGUpWzBdLnNwcml0ZUZyYW1lPXRoaXMuZ3JpZEltZy5nZXQoU3RyaW5nKG4pKSx0W2ldLnk9dFswXS55K3RoaXMuc2xvdEdyaWRIZWlnaHQsdC51bnNoaWZ0KHRbaV0pLHQucG9wKCl9bm90aWZ5TG9va0F0RXZlbnQodCxlKXtmY2Mubm90aWZpY2F0aW9uTWdyKCkuZ2V0Tm90aWZpY2F0aW9uKGZjYy50eXBlLk5vdGlmaWNhdGlvblR5cGUuU0NST0xMX0ZPQ1VTX1NUQVRFKS5ub3RpZnkoZSx0KX1jaGVja0ltbWVkaWF0ZVN0b3BTdGF0ZSh0LGUpe3JldHVybiEhdGhpcy5pc1Nsb3RJbW1lZGlhdGVTdG9wJiYodGhpcy5ub3dUaW1lciYmKHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5ub3dUaW1lciksdGhpcy5ub3dUaW1lcj1udWxsKSx0PT10aGlzLnNsb3RDb2x1bW5Ub1R3ZWVuLmxlbmd0aC0xP3RoaXMuc2hvd0Fuc3dlckFuaW1hdGlvbih0LGUpOnRoaXMuc2hvd0Fuc3dlckFuaW1hdGlvbih0KSx0aGlzLmlzU2xvdEVuZFt0XT0hMCwxPT10aGlzLnJlc3VsdE1vZGVsLkxvb2tBdFt0XSYmdGhpcy5ub3RpZnlMb29rQXRFdmVudCghMSx0KSwhMCl9c2hvd0Fuc3dlckFuaW1hdGlvbihlLGkpe3RoaXMudXBkYXRlR3JpZEFuc3dlcihlKTt2YXIgdD10aGlzLnNsb3RHaXJkU3BlZWQqdGhpcy5zbG90Um93R3JpZENvdW50L3RoaXMuc3BlZWRSYXRpbyxuPXRoaXMuc2xvdENvbHVtblRvVHdlZW5bZV0scj10aGlzLnNsb3RSb3dHcmlkQ291bnQqdGhpcy5zbG90R3JpZEhlaWdodDtjYy50d2VlbihuKS50byh0LHt5Om4ueS1yfSkuY2FsbCgoKT0+e2Zvcih2YXIgdD0wO3Q8dGhpcy5zbG90Um93R3JpZENvdW50O3QrKyl0aGlzLnVwZGF0ZU9ubHlHcmlkUG9zaXRpb25BbmRSYW5kb21JbWcodGhpcy5ncmlkTm9kZVRvTWFwLmdldChlKSxlKTt0aGlzLnNpbmVPdXRBbmltYXRpb24oZSxpKX0pLnN0YXJ0KCl9Y2hlY2tMb29rQXQodCl7dmFyIGU9ITE7cmV0dXJuIHRoaXMuaXNSb3dDaGVja0xvb2tBdC5nZXQodCl8fCh0aGlzLmlzUm93Q2hlY2tMb29rQXQuc2V0KHQsITApLGU9ISF0aGlzLnJlc3VsdE1vZGVsLkxvb2tBdFt0XSksZX1zaW5lT3V0QW5pbWF0aW9uKHQsZSl7KHRoaXMuaXNTcGVlZFVwfHx0aGlzLmlzU2xvdEltbWVkaWF0ZVN0b3ApJiZ0IT10aGlzLnNsb3RDb2x1bW5Ub1R3ZWVuLmxlbmd0aC0xfHxmY2MuYXVkaW9NZ3IuZWZmZWN0UGxheShcIlNsb3RTdG9wXCIpLHQ9PT10aGlzLnNsb3RDb2x1bW5Ub1R3ZWVuLmxlbmd0aC0xJiZmY2MuYXVkaW9NZ3IuZWZmZWN0U3RvcChcIlNsb3RUdXJuXCIpO3ZhciBpPU1hdGguZmxvb3IodGhpcy5zdHlsZURhdGEuc2xvdEdyaWRIZWlnaHQvMiksbj10aGlzLnNsb3RDb2x1bW5Ub1R3ZWVuW3RdLHI9ITE7KHRoaXMuaXNTbG90SW1tZWRpYXRlU3RvcHx8dGhpcy5pc1NwZWVkVXApJiYocj0hMCksZmNjLm5vdGlmaWNhdGlvbk1ncigpLmdldE5vdGlmaWNhdGlvbihmY2MudHlwZS5Ob3RpZmljYXRpb25UeXBlLlNMT1RfUk9XX0VORCkubm90aWZ5KHQscik7cj10aGlzLnNsb3RHaXJkU3BlZWQ7Y2MudHdlZW4obikudG8ocix7eTpuLnktaX0pLmJ5KDYqcix7eToraX0se2Vhc2luZzp0aGlzLnNpbmVPdXRFYXNpbmd9KS5jYWxsKCgpPT57dD09PXRoaXMuc2xvdENvbHVtblRvVHdlZW4ubGVuZ3RoLTEmJmUoKX0pLnN0YXJ0KCl9dXBkYXRlR3JpZEFuc3dlcih0KXtmb3IodmFyIGU9dCp0aGlzLnNsb3RSb3dHcmlkQ291bnQsaT1lK3RoaXMuc2xvdFJvd0dyaWRDb3VudCxuPTA7ZTxpO2UrKyl7dmFyIHI9U3RyaW5nKHRoaXMucmVzdWx0TW9kZWwuR3JpZFtlXSk7dGhpcy5ncmlkU3ByaXRlVG9NYXAuZ2V0KHQpW25dLnNwcml0ZUZyYW1lPXRoaXMuZ3JpZEltZy5nZXQociksbisrfX1pbml0aWFsaXplU3RhdGUoKXtpZih0aGlzLmlzU2xvdEltbWVkaWF0ZVN0b3A9ITEsdGhpcy5pc1NwZWVkVXA9MTx0aGlzLnNwZWVkUmF0aW8sdGhpcy5pc1Jlc3VsdE9LPSExLHRoaXMubm93VGltZXI9bnVsbCx0aGlzLmlzUm93Q2hlY2tMb29rQXQuY2xlYXIoKSwwPT10aGlzLmlzVGltZUVuZExpc3RlbmVyLmxlbmd0aClmb3IodmFyIHQ9MDt0PHRoaXMuc2xvdENvbHVtblRvVHdlZW4ubGVuZ3RoO3QrKyl0aGlzLmlzVGltZUVuZExpc3RlbmVyLnB1c2goITEpO2Vsc2UgZm9yKHZhciBlPTA7ZTx0aGlzLnNsb3RDb2x1bW5Ub1R3ZWVuLmxlbmd0aDtlKyspdGhpcy5pc1RpbWVFbmRMaXN0ZW5lcltlXT0hMTtpZigwPT10aGlzLmlzU2xvdEVuZC5sZW5ndGgpZm9yKHZhciBpPTA7aTx0aGlzLnNsb3RDb2x1bW5Ub1R3ZWVuLmxlbmd0aDtpKyspdGhpcy5pc1Nsb3RFbmQucHVzaCghMSk7ZWxzZSBmb3IodmFyIG49MDtuPHRoaXMuc2xvdENvbHVtblRvVHdlZW4ubGVuZ3RoO24rKyl0aGlzLmlzU2xvdEVuZFtuXT0hMX19X19kZWNvcmF0ZShbZmNjLkVmZmVjdChcIlNsb3RUdXJuXCIpLF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLEZ1bmN0aW9uKSxfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIixbXSksX19tZXRhZGF0YShcImRlc2lnbjpyZXR1cm50eXBlXCIsUHJvbWlzZSldLE5vcm1hbFNsb3RTcGVjaWFsVGVtcGxhdGUucHJvdG90eXBlLFwicnVuU2xvdEFuaW1hdGlvblwiLG51bGwpO2NsYXNzIFNsb3RCdXJyZWRJbWdUZW1wbGF0ZSBleHRlbmRzIE5vcm1hbFNsb3RUZW1wbGF0ZXtjb25zdHJ1Y3Rvcih0LGUpe3N1cGVyKHQsZSksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJncmlkQnVycmVkSW1nXCIsdm9pZCAwKSx0aGlzLmdyaWRCdXJyZWRJbWc9dC5ncmlkQnVycmVkSW1nfXVwZGF0ZUdyaWRQb3NpdGlvbkFuZFJhbmRvbUltZyh0LGUpe2Zvcih2YXIgaSxuPXQubGVuZ3RoLTEscj0wO3I8dGhpcy5yb3dEYXRhWzBdO3IrKylpPXRoaXMuZ3JpZFNwcml0ZVRvTWFwLmdldChlKVtuXSx0aGlzLmdyaWRTcHJpdGVUb01hcC5nZXQoZSkudW5zaGlmdChpKSx0aGlzLmdyaWRTcHJpdGVUb01hcC5nZXQoZSkucG9wKCksaT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqdGhpcy5ncmlkQnVycmVkSW1nLnNpemUpLHRoaXMuZ3JpZFNwcml0ZVRvTWFwLmdldChlKVswXS5zcHJpdGVGcmFtZT10aGlzLmdyaWRCdXJyZWRJbWcuZ2V0KFN0cmluZyhpKSksdFtuXS55PXRbMF0ueSt0aGlzLnNsb3RHcmlkSGVpZ2h0LHQudW5zaGlmdCh0W25dKSx0LnBvcCgpfX1jbGFzcyBTbG90QnVycmVkSW1nU3BlY2lhbFRlbXBsYXRlIGV4dGVuZHMgTm9ybWFsU2xvdFNwZWNpYWxUZW1wbGF0ZXtjb25zdHJ1Y3Rvcih0LGUpe3N1cGVyKHQsZSksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJncmlkQnVycmVkSW1nXCIsdm9pZCAwKSx0aGlzLmdyaWRCdXJyZWRJbWc9dC5ncmlkQnVycmVkSW1nfXVwZGF0ZU9ubHlHcmlkUG9zaXRpb25BbmRSYW5kb21JbWcodCxlKXt2YXIgaT10Lmxlbmd0aC0xLG49dGhpcy5ncmlkU3ByaXRlVG9NYXAuZ2V0KGUpW2ldO3RoaXMuZ3JpZFNwcml0ZVRvTWFwLmdldChlKS51bnNoaWZ0KG4pLHRoaXMuZ3JpZFNwcml0ZVRvTWFwLmdldChlKS5wb3AoKSxuPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLmdyaWRJbWcuc2l6ZSksdGhpcy5ncmlkU3ByaXRlVG9NYXAuZ2V0KGUpWzBdLnNwcml0ZUZyYW1lPXRoaXMuZ3JpZEJ1cnJlZEltZy5nZXQoU3RyaW5nKG4pKSx0W2ldLnk9dFswXS55K3RoaXMuc2xvdEdyaWRIZWlnaHQsdC51bnNoaWZ0KHRbaV0pLHQucG9wKCl9fWNsYXNzIEFTbG90SW5pdGlhbGl6ZVRlbXBsYXRlIGV4dGVuZHMgQUdlbmVyaWNUZW1wbGF0ZXtvbkxvYWQoKXtzdXBlci5vbkxvYWQoKX1zdGFydCgpe3N1cGVyLnN0YXJ0KCksdGhpcy5zbG90U3R5bGVTZXR0aW5nKCl9fWNsYXNzIEV4dGVuZEhhc0xpbmVGcmVlUmVzdWx0e2NvbnN0cnVjdG9yKCl7X2RlZmluZVByb3BlcnR5KHRoaXMsXCJfU3RhdGVcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0dyaWRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX1N0aWNreVN5bWJvbFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfU3RpY2t5Q2hhbmdlXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9MaW5lV2luXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9MaW5lR3JpZFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfVG90YWxXaW5Qb2ludFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfVXNlclBvaW50QWZ0ZXJcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0dhbWVTdGF0ZVwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfQ291bnRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0ZyZWVTcGluV2luXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9Mb29rQXRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0ZyZWVUb0ZyZWVcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0Jhc2VMZXZlbFdpblwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfRnJlZUxldmVsV2luXCIsdm9pZCAwKSx0aGlzLl9TdGF0ZT0wLHRoaXMuX0dyaWQ9bmV3IEFycmF5LHRoaXMuX1N0aWNreVN5bWJvbD0wLHRoaXMuX1N0aWNreUNoYW5nZT1uZXcgQXJyYXksdGhpcy5fTGluZVdpbj1uZXcgQXJyYXksdGhpcy5fTGluZUdyaWQ9bmV3IEFycmF5LHRoaXMuX1RvdGFsV2luUG9pbnQ9MCx0aGlzLl9Vc2VyUG9pbnRBZnRlcj0wLHRoaXMuX0dhbWVTdGF0ZT0wLHRoaXMuX0NvdW50PTAsdGhpcy5fRnJlZVNwaW5XaW49MCx0aGlzLl9Mb29rQXQ9bmV3IEFycmF5LHRoaXMuX0ZyZWVUb0ZyZWU9MCx0aGlzLl9CYXNlTGV2ZWxXaW49MCx0aGlzLl9GcmVlTGV2ZWxXaW49MH1nZXQgU3RhdGUoKXtyZXR1cm4gdGhpcy5fU3RhdGV9c2V0IFN0YXRlKHQpe3RoaXMuX1N0YXRlPXR9Z2V0IEdyaWQoKXtyZXR1cm4gdGhpcy5fR3JpZH1zZXQgR3JpZCh0KXt0aGlzLl9HcmlkPXR9Z2V0IFN0aWNreVN5bWJvbCgpe3JldHVybiB0aGlzLl9TdGlja3lTeW1ib2x9c2V0IFN0aWNreVN5bWJvbCh0KXt0aGlzLl9TdGlja3lTeW1ib2w9dH1nZXQgU3RpY2t5Q2hhbmdlKCl7cmV0dXJuIHRoaXMuX1N0aWNreUNoYW5nZX1zZXQgU3RpY2t5Q2hhbmdlKHQpe3RoaXMuX1N0aWNreUNoYW5nZT10fWdldCBMaW5lV2luKCl7cmV0dXJuIHRoaXMuX0xpbmVXaW59c2V0IExpbmVXaW4odCl7dGhpcy5fTGluZVdpbj10fWdldCBMaW5lR3JpZCgpe3JldHVybiB0aGlzLl9MaW5lR3JpZH1zZXQgTGluZUdyaWQodCl7dGhpcy5fTGluZUdyaWQ9dH1nZXQgVG90YWxXaW5Qb2ludCgpe3JldHVybiB0aGlzLl9Ub3RhbFdpblBvaW50fXNldCBUb3RhbFdpblBvaW50KHQpe3RoaXMuX1RvdGFsV2luUG9pbnQ9dH1nZXQgVXNlclBvaW50QWZ0ZXIoKXtyZXR1cm4gdGhpcy5fVXNlclBvaW50QWZ0ZXJ9c2V0IFVzZXJQb2ludEFmdGVyKHQpe3RoaXMuX1VzZXJQb2ludEFmdGVyPXR9Z2V0IEdhbWVTdGF0ZSgpe3JldHVybiB0aGlzLl9HYW1lU3RhdGV9c2V0IEdhbWVTdGF0ZSh0KXt0aGlzLl9HYW1lU3RhdGU9dH1nZXQgQ291bnQoKXtyZXR1cm4gdGhpcy5fQ291bnR9c2V0IENvdW50KHQpe3RoaXMuX0NvdW50PXR9Z2V0IEZyZWVTcGluV2luKCl7cmV0dXJuIHRoaXMuX0ZyZWVTcGluV2lufXNldCBGcmVlU3Bpbldpbih0KXt0aGlzLl9GcmVlU3Bpbldpbj10fWdldCBMb29rQXQoKXtyZXR1cm4gdGhpcy5fTG9va0F0fXNldCBMb29rQXQodCl7dGhpcy5fTG9va0F0PXR9Z2V0IEZyZWVUb0ZyZWUoKXtyZXR1cm4gdGhpcy5fRnJlZVRvRnJlZX1zZXQgRnJlZVRvRnJlZSh0KXt0aGlzLl9GcmVlVG9GcmVlPXR9Z2V0IEJhc2VMZXZlbFdpbigpe3JldHVybiB0aGlzLl9CYXNlTGV2ZWxXaW59c2V0IEJhc2VMZXZlbFdpbih0KXt0aGlzLl9CYXNlTGV2ZWxXaW49dH1nZXQgRnJlZUxldmVsV2luKCl7cmV0dXJuIHRoaXMuX0ZyZWVMZXZlbFdpbn1zZXQgRnJlZUxldmVsV2luKHQpe3RoaXMuX0ZyZWVMZXZlbFdpbj10fX1jbGFzcyBIYXNMaW5lRnJlZVJlc3VsdHtjb25zdHJ1Y3Rvcigpe19kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX1N0YXRlXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9HcmlkXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9DaGFuZ2VTdGF0ZVwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfQ2hhbmdlXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9MaW5lV2luXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9MaW5lR3JpZFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfVG90YWxXaW5Qb2ludFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfVXNlclBvaW50QWZ0ZXJcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0dhbWVTdGF0ZVwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfQ291bnRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0ZyZWVTcGluV2luXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9Mb29rQXRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0xldmVsV2luXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9GcmVlVG9GcmVlXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9CYXNlTGV2ZWxXaW5cIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0ZyZWVMZXZlbFdpblwiLHZvaWQgMCksdGhpcy5fU3RhdGU9MCx0aGlzLl9HcmlkPW5ldyBBcnJheSx0aGlzLl9DaGFuZ2VTdGF0ZT0wLHRoaXMuX0NoYW5nZT1uZXcgQXJyYXksdGhpcy5fTGluZVdpbj1uZXcgQXJyYXksdGhpcy5fTGluZUdyaWQ9bmV3IEFycmF5LHRoaXMuX1RvdGFsV2luUG9pbnQ9MCx0aGlzLl9Vc2VyUG9pbnRBZnRlcj0wLHRoaXMuX0dhbWVTdGF0ZT0wLHRoaXMuX0NvdW50PTAsdGhpcy5fRnJlZVNwaW5XaW49MCx0aGlzLl9Mb29rQXQ9bmV3IEFycmF5LHRoaXMuX0xldmVsV2luPTAsdGhpcy5fRnJlZVRvRnJlZT0wLHRoaXMuX0Jhc2VMZXZlbFdpbj0wLHRoaXMuX0ZyZWVMZXZlbFdpbj0wfWdldCBTdGF0ZSgpe3JldHVybiB0aGlzLl9TdGF0ZX1zZXQgU3RhdGUodCl7dGhpcy5fU3RhdGU9dH1nZXQgR3JpZCgpe3JldHVybiB0aGlzLl9HcmlkfXNldCBHcmlkKHQpe3RoaXMuX0dyaWQ9dH1nZXQgQ2hhbmdlU3RhdGUoKXtyZXR1cm4gdGhpcy5fQ2hhbmdlU3RhdGV9c2V0IENoYW5nZVN0YXRlKHQpe3RoaXMuX0NoYW5nZVN0YXRlPXR9Z2V0IENoYW5nZSgpe3JldHVybiB0aGlzLl9DaGFuZ2V9c2V0IENoYW5nZSh0KXt0aGlzLl9DaGFuZ2U9dH1nZXQgTGluZVdpbigpe3JldHVybiB0aGlzLl9MaW5lV2lufXNldCBMaW5lV2luKHQpe3RoaXMuX0xpbmVXaW49dH1nZXQgTGluZUdyaWQoKXtyZXR1cm4gdGhpcy5fTGluZUdyaWR9c2V0IExpbmVHcmlkKHQpe3RoaXMuX0xpbmVHcmlkPXR9Z2V0IFRvdGFsV2luUG9pbnQoKXtyZXR1cm4gdGhpcy5fVG90YWxXaW5Qb2ludH1zZXQgVG90YWxXaW5Qb2ludCh0KXt0aGlzLl9Ub3RhbFdpblBvaW50PXR9Z2V0IFVzZXJQb2ludEFmdGVyKCl7cmV0dXJuIHRoaXMuX1VzZXJQb2ludEFmdGVyfXNldCBVc2VyUG9pbnRBZnRlcih0KXt0aGlzLl9Vc2VyUG9pbnRBZnRlcj10fWdldCBHYW1lU3RhdGUoKXtyZXR1cm4gdGhpcy5fR2FtZVN0YXRlfXNldCBHYW1lU3RhdGUodCl7dGhpcy5fR2FtZVN0YXRlPXR9Z2V0IENvdW50KCl7cmV0dXJuIHRoaXMuX0NvdW50fXNldCBDb3VudCh0KXt0aGlzLl9Db3VudD10fWdldCBGcmVlU3Bpbldpbigpe3JldHVybiB0aGlzLl9GcmVlU3Bpbldpbn1zZXQgRnJlZVNwaW5XaW4odCl7dGhpcy5fRnJlZVNwaW5XaW49dH1nZXQgTG9va0F0KCl7cmV0dXJuIHRoaXMuX0xvb2tBdH1zZXQgTG9va0F0KHQpe3RoaXMuX0xvb2tBdD10fWdldCBMZXZlbFdpbigpe3JldHVybiB0aGlzLl9MZXZlbFdpbn1zZXQgTGV2ZWxXaW4odCl7dGhpcy5fTGV2ZWxXaW49dH1nZXQgRnJlZVRvRnJlZSgpe3JldHVybiB0aGlzLl9GcmVlVG9GcmVlfXNldCBGcmVlVG9GcmVlKHQpe3RoaXMuX0ZyZWVUb0ZyZWU9dH1nZXQgQmFzZUxldmVsV2luKCl7cmV0dXJuIHRoaXMuX0Jhc2VMZXZlbFdpbn1zZXQgQmFzZUxldmVsV2luKHQpe3RoaXMuX0Jhc2VMZXZlbFdpbj10fWdldCBGcmVlTGV2ZWxXaW4oKXtyZXR1cm4gdGhpcy5fRnJlZUxldmVsV2lufXNldCBGcmVlTGV2ZWxXaW4odCl7dGhpcy5fRnJlZUxldmVsV2luPXR9fWNsYXNzIE5vTGluZUZyZWVSZXN1bHR7Y29uc3RydWN0b3IoKXtfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9TdGF0ZVwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfR3JpZFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfQ2hhbmdlU3RhdGVcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0NoYW5nZVwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfR3JpZFdpblwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfVG90YWxXaW5Qb2ludFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfVXNlclBvaW50QWZ0ZXJcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0dhbWVTdGF0ZVwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfQ291bnRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0ZyZWVTcGluV2luXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9Mb29rQXRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0xldmVsV2luXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9GcmVlVG9GcmVlXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9CYXNlTGV2ZWxXaW5cIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0ZyZWVMZXZlbFdpblwiLHZvaWQgMCksdGhpcy5fU3RhdGU9MCx0aGlzLl9HcmlkPW5ldyBBcnJheSx0aGlzLl9DaGFuZ2VTdGF0ZT0wLHRoaXMuX0NoYW5nZT1uZXcgQXJyYXksdGhpcy5fR3JpZFdpbj1uZXcgQXJyYXksdGhpcy5fVG90YWxXaW5Qb2ludD0wLHRoaXMuX1VzZXJQb2ludEFmdGVyPTAsdGhpcy5fR2FtZVN0YXRlPTAsdGhpcy5fQ291bnQ9MCx0aGlzLl9GcmVlU3Bpbldpbj0wLHRoaXMuX0xvb2tBdD1uZXcgQXJyYXksdGhpcy5fTGV2ZWxXaW49MCx0aGlzLl9GcmVlVG9GcmVlPTAsdGhpcy5fQmFzZUxldmVsV2luPTAsdGhpcy5fRnJlZUxldmVsV2luPTB9Z2V0IFN0YXRlKCl7cmV0dXJuIHRoaXMuX1N0YXRlfXNldCBTdGF0ZSh0KXt0aGlzLl9TdGF0ZT10fWdldCBHcmlkKCl7cmV0dXJuIHRoaXMuX0dyaWR9c2V0IEdyaWQodCl7dGhpcy5fR3JpZD10fWdldCBDaGFuZ2VTdGF0ZSgpe3JldHVybiB0aGlzLl9DaGFuZ2VTdGF0ZX1zZXQgQ2hhbmdlU3RhdGUodCl7dGhpcy5fQ2hhbmdlU3RhdGU9dH1nZXQgQ2hhbmdlKCl7cmV0dXJuIHRoaXMuX0NoYW5nZX1zZXQgQ2hhbmdlKHQpe3RoaXMuX0NoYW5nZT10fWdldCBHcmlkV2luKCl7cmV0dXJuIHRoaXMuX0dyaWRXaW59c2V0IEdyaWRXaW4odCl7dGhpcy5fR3JpZFdpbj10fWdldCBUb3RhbFdpblBvaW50KCl7cmV0dXJuIHRoaXMuX1RvdGFsV2luUG9pbnR9c2V0IFRvdGFsV2luUG9pbnQodCl7dGhpcy5fVG90YWxXaW5Qb2ludD10fWdldCBVc2VyUG9pbnRBZnRlcigpe3JldHVybiB0aGlzLl9Vc2VyUG9pbnRBZnRlcn1zZXQgVXNlclBvaW50QWZ0ZXIodCl7dGhpcy5fVXNlclBvaW50QWZ0ZXI9dH1nZXQgR2FtZVN0YXRlKCl7cmV0dXJuIHRoaXMuX0dhbWVTdGF0ZX1zZXQgR2FtZVN0YXRlKHQpe3RoaXMuX0dhbWVTdGF0ZT10fWdldCBDb3VudCgpe3JldHVybiB0aGlzLl9Db3VudH1zZXQgQ291bnQodCl7dGhpcy5fQ291bnQ9dH1nZXQgRnJlZVNwaW5XaW4oKXtyZXR1cm4gdGhpcy5fRnJlZVNwaW5XaW59c2V0IEZyZWVTcGluV2luKHQpe3RoaXMuX0ZyZWVTcGluV2luPXR9Z2V0IExvb2tBdCgpe3JldHVybiB0aGlzLl9Mb29rQXR9c2V0IExvb2tBdCh0KXt0aGlzLl9Mb29rQXQ9dH1nZXQgTGV2ZWxXaW4oKXtyZXR1cm4gdGhpcy5fTGV2ZWxXaW59c2V0IExldmVsV2luKHQpe3RoaXMuX0xldmVsV2luPXR9Z2V0IEZyZWVUb0ZyZWUoKXtyZXR1cm4gdGhpcy5fRnJlZVRvRnJlZX1zZXQgRnJlZVRvRnJlZSh0KXt0aGlzLl9GcmVlVG9GcmVlPXR9Z2V0IEJhc2VMZXZlbFdpbigpe3JldHVybiB0aGlzLl9CYXNlTGV2ZWxXaW59c2V0IEJhc2VMZXZlbFdpbih0KXt0aGlzLl9CYXNlTGV2ZWxXaW49dH1nZXQgRnJlZUxldmVsV2luKCl7cmV0dXJuIHRoaXMuX0ZyZWVMZXZlbFdpbn1zZXQgRnJlZUxldmVsV2luKHQpe3RoaXMuX0ZyZWVMZXZlbFdpbj10fX1jbGFzcyBFeHRlbmRIYXNMaW5lUmVzdWx0e2NvbnN0cnVjdG9yKCl7X2RlZmluZVByb3BlcnR5KHRoaXMsXCJfU3RhdGVcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0dyaWRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX1NlY3JldFN0YXRlXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9TZWNyZXRDaGFuZ2VcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX1NlY3JldFN5bWJvbFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfTGluZVdpblwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfTGluZUdyaWRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX1RvdGFsV2luUG9pbnRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX1VzZXJQb2ludEFmdGVyXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9HYW1lU3RhdGVcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0ZyZWVTcGluQ291bnRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0xvb2tBdFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfVXNlclBvaW50QmVmb3JlXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9CYXNlTGV2ZWxXaW5cIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0JvbnVzRXZlbnRDb3VudFwiLHZvaWQgMCksdGhpcy5fU3RhdGU9MCx0aGlzLl9HcmlkPW5ldyBBcnJheSx0aGlzLl9TZWNyZXRTdGF0ZT0wLHRoaXMuX1NlY3JldENoYW5nZT1uZXcgQXJyYXksdGhpcy5fU2VjcmV0U3ltYm9sPTAsdGhpcy5fTGluZVdpbj1uZXcgQXJyYXksdGhpcy5fTGluZUdyaWQ9bmV3IEFycmF5LHRoaXMuX1RvdGFsV2luUG9pbnQ9MCx0aGlzLl9Vc2VyUG9pbnRBZnRlcj0wLHRoaXMuX0dhbWVTdGF0ZT0wLHRoaXMuX0ZyZWVTcGluQ291bnQ9MCx0aGlzLl9Mb29rQXQ9bmV3IEFycmF5LHRoaXMuX1VzZXJQb2ludEJlZm9yZT0wLHRoaXMuX0Jhc2VMZXZlbFdpbj0wLHRoaXMuX0JvbnVzRXZlbnRDb3VudD0wfWdldCBTdGF0ZSgpe3JldHVybiB0aGlzLl9TdGF0ZX1zZXQgU3RhdGUodCl7dGhpcy5fU3RhdGU9dH1nZXQgR3JpZCgpe3JldHVybiB0aGlzLl9HcmlkfXNldCBHcmlkKHQpe3RoaXMuX0dyaWQ9dH1nZXQgU2VjcmV0U3RhdGUoKXtyZXR1cm4gdGhpcy5fU2VjcmV0U3RhdGV9c2V0IFNlY3JldFN0YXRlKHQpe3RoaXMuX1NlY3JldFN0YXRlPXR9Z2V0IFNlY3JldENoYW5nZSgpe3JldHVybiB0aGlzLl9TZWNyZXRDaGFuZ2V9c2V0IFNlY3JldENoYW5nZSh0KXt0aGlzLl9TZWNyZXRDaGFuZ2U9dH1nZXQgU2VjcmV0U3ltYm9sKCl7cmV0dXJuIHRoaXMuX1NlY3JldFN5bWJvbH1zZXQgU2VjcmV0U3ltYm9sKHQpe3RoaXMuX1NlY3JldFN5bWJvbD10fWdldCBMaW5lV2luKCl7cmV0dXJuIHRoaXMuX0xpbmVXaW59c2V0IExpbmVXaW4odCl7dGhpcy5fTGluZVdpbj10fWdldCBMaW5lR3JpZCgpe3JldHVybiB0aGlzLl9MaW5lR3JpZH1zZXQgTGluZUdyaWQodCl7dGhpcy5fTGluZUdyaWQ9dH1nZXQgVG90YWxXaW5Qb2ludCgpe3JldHVybiB0aGlzLl9Ub3RhbFdpblBvaW50fXNldCBUb3RhbFdpblBvaW50KHQpe3RoaXMuX1RvdGFsV2luUG9pbnQ9dH1nZXQgVXNlclBvaW50QWZ0ZXIoKXtyZXR1cm4gdGhpcy5fVXNlclBvaW50QWZ0ZXJ9c2V0IFVzZXJQb2ludEFmdGVyKHQpe3RoaXMuX1VzZXJQb2ludEFmdGVyPXR9Z2V0IEdhbWVTdGF0ZSgpe3JldHVybiB0aGlzLl9HYW1lU3RhdGV9c2V0IEdhbWVTdGF0ZSh0KXt0aGlzLl9HYW1lU3RhdGU9dH1nZXQgRnJlZVNwaW5Db3VudCgpe3JldHVybiB0aGlzLl9GcmVlU3BpbkNvdW50fXNldCBGcmVlU3BpbkNvdW50KHQpe3RoaXMuX0ZyZWVTcGluQ291bnQ9dH1nZXQgTG9va0F0KCl7cmV0dXJuIHRoaXMuX0xvb2tBdH1zZXQgTG9va0F0KHQpe3RoaXMuX0xvb2tBdD10fWdldCBVc2VyUG9pbnRCZWZvcmUoKXtyZXR1cm4gdGhpcy5fVXNlclBvaW50QmVmb3JlfXNldCBVc2VyUG9pbnRCZWZvcmUodCl7dGhpcy5fVXNlclBvaW50QmVmb3JlPXR9Z2V0IEJhc2VMZXZlbFdpbigpe3JldHVybiB0aGlzLl9CYXNlTGV2ZWxXaW59c2V0IEJhc2VMZXZlbFdpbih0KXt0aGlzLl9CYXNlTGV2ZWxXaW49dH1nZXQgQm9udXNFdmVudENvdW50KCl7cmV0dXJuIHRoaXMuX0JvbnVzRXZlbnRDb3VudH1zZXQgQm9udXNFdmVudENvdW50KHQpe3RoaXMuX0JvbnVzRXZlbnRDb3VudD10fX1jbGFzcyBIYXNMaW5lUmVzdWx0e2NvbnN0cnVjdG9yKCl7X2RlZmluZVByb3BlcnR5KHRoaXMsXCJfU3RhdGVcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0dyaWRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0NoYW5nZVwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfQ2hhbmdlU3RhdGVcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0xpbmVXaW5cIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0xpbmVHcmlkXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9Ub3RhbFdpblBvaW50XCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9Vc2VyUG9pbnRBZnRlclwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfR2FtZVN0YXRlXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9GcmVlU3BpbkNvdW50XCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9Mb29rQXRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX1VzZXJQb2ludEJlZm9yZVwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfQmFzZUxldmVsV2luXCIsdm9pZCAwKSx0aGlzLl9TdGF0ZT0wLHRoaXMuX0dyaWQ9bmV3IEFycmF5LHRoaXMuX0NoYW5nZT1uZXcgQXJyYXksdGhpcy5fQ2hhbmdlU3RhdGU9MCx0aGlzLl9MaW5lV2luPW5ldyBBcnJheSx0aGlzLl9MaW5lR3JpZD1uZXcgQXJyYXksdGhpcy5fVG90YWxXaW5Qb2ludD0wLHRoaXMuX1VzZXJQb2ludEFmdGVyPTAsdGhpcy5fR2FtZVN0YXRlPTAsdGhpcy5fRnJlZVNwaW5Db3VudD0wLHRoaXMuX0xvb2tBdD1uZXcgQXJyYXksdGhpcy5fVXNlclBvaW50QmVmb3JlPTAsdGhpcy5fQmFzZUxldmVsV2luPTB9Z2V0IFN0YXRlKCl7cmV0dXJuIHRoaXMuX1N0YXRlfXNldCBTdGF0ZSh0KXt0aGlzLl9TdGF0ZT10fWdldCBHcmlkKCl7cmV0dXJuIHRoaXMuX0dyaWR9c2V0IEdyaWQodCl7dGhpcy5fR3JpZD10fWdldCBDaGFuZ2UoKXtyZXR1cm4gdGhpcy5fQ2hhbmdlfXNldCBDaGFuZ2UodCl7dGhpcy5fQ2hhbmdlPXR9Z2V0IENoYW5nZVN0YXRlKCl7cmV0dXJuIHRoaXMuX0NoYW5nZVN0YXRlfXNldCBDaGFuZ2VTdGF0ZSh0KXt0aGlzLl9DaGFuZ2VTdGF0ZT10fWdldCBMaW5lV2luKCl7cmV0dXJuIHRoaXMuX0xpbmVXaW59c2V0IExpbmVXaW4odCl7dGhpcy5fTGluZVdpbj10fWdldCBMaW5lR3JpZCgpe3JldHVybiB0aGlzLl9MaW5lR3JpZH1zZXQgTGluZUdyaWQodCl7dGhpcy5fTGluZUdyaWQ9dH1nZXQgVG90YWxXaW5Qb2ludCgpe3JldHVybiB0aGlzLl9Ub3RhbFdpblBvaW50fXNldCBUb3RhbFdpblBvaW50KHQpe3RoaXMuX1RvdGFsV2luUG9pbnQ9dH1nZXQgVXNlclBvaW50QWZ0ZXIoKXtyZXR1cm4gdGhpcy5fVXNlclBvaW50QWZ0ZXJ9c2V0IFVzZXJQb2ludEFmdGVyKHQpe3RoaXMuX1VzZXJQb2ludEFmdGVyPXR9Z2V0IEdhbWVTdGF0ZSgpe3JldHVybiB0aGlzLl9HYW1lU3RhdGV9c2V0IEdhbWVTdGF0ZSh0KXt0aGlzLl9HYW1lU3RhdGU9dH1nZXQgRnJlZVNwaW5Db3VudCgpe3JldHVybiB0aGlzLl9GcmVlU3BpbkNvdW50fXNldCBGcmVlU3BpbkNvdW50KHQpe3RoaXMuX0ZyZWVTcGluQ291bnQ9dH1nZXQgTG9va0F0KCl7cmV0dXJuIHRoaXMuX0xvb2tBdH1zZXQgTG9va0F0KHQpe3RoaXMuX0xvb2tBdD10fWdldCBVc2VyUG9pbnRCZWZvcmUoKXtyZXR1cm4gdGhpcy5fVXNlclBvaW50QmVmb3JlfXNldCBVc2VyUG9pbnRCZWZvcmUodCl7dGhpcy5fVXNlclBvaW50QmVmb3JlPXR9Z2V0IEJhc2VMZXZlbFdpbigpe3JldHVybiB0aGlzLl9CYXNlTGV2ZWxXaW59c2V0IEJhc2VMZXZlbFdpbih0KXt0aGlzLl9CYXNlTGV2ZWxXaW49dH19Y2xhc3MgTm9MaW5lUmVzdWx0e2NvbnN0cnVjdG9yKCl7X2RlZmluZVByb3BlcnR5KHRoaXMsXCJfU3RhdGVcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0dyaWRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0NoYW5nZVN0YXRlXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9DaGFuZ2VcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0dyaWRXaW5cIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX1RvdGFsV2luUG9pbnRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX1VzZXJQb2ludEFmdGVyXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9HYW1lU3RhdGVcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0ZyZWVTcGluQ291bnRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0xvb2tBdFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfVXNlclBvaW50QmVmb3JlXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9MZXZlbFdpblwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfQmFzZUxldmVsV2luXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9Cb251c0V2ZW50Q291bnRcIix2b2lkIDApLHRoaXMuX1N0YXRlPTAsdGhpcy5fR3JpZD1uZXcgQXJyYXksdGhpcy5fQ2hhbmdlU3RhdGU9MCx0aGlzLl9DaGFuZ2U9bmV3IEFycmF5LHRoaXMuX0dyaWRXaW49bmV3IEFycmF5LHRoaXMuX1RvdGFsV2luUG9pbnQ9MCx0aGlzLl9Vc2VyUG9pbnRBZnRlcj0wLHRoaXMuX0dhbWVTdGF0ZT0wLHRoaXMuX0ZyZWVTcGluQ291bnQ9MCx0aGlzLl9Mb29rQXQ9bmV3IEFycmF5LHRoaXMuX1VzZXJQb2ludEJlZm9yZT0wLHRoaXMuX0xldmVsV2luPTAsdGhpcy5fQmFzZUxldmVsV2luPTAsdGhpcy5fQm9udXNFdmVudENvdW50PTB9Z2V0IFN0YXRlKCl7cmV0dXJuIHRoaXMuX1N0YXRlfXNldCBTdGF0ZSh0KXt0aGlzLl9TdGF0ZT10fWdldCBHcmlkKCl7cmV0dXJuIHRoaXMuX0dyaWR9c2V0IEdyaWQodCl7dGhpcy5fR3JpZD10fWdldCBDaGFuZ2VTdGF0ZSgpe3JldHVybiB0aGlzLl9DaGFuZ2VTdGF0ZX1zZXQgQ2hhbmdlU3RhdGUodCl7dGhpcy5fQ2hhbmdlU3RhdGU9dH1nZXQgQ2hhbmdlKCl7cmV0dXJuIHRoaXMuX0NoYW5nZX1zZXQgQ2hhbmdlKHQpe3RoaXMuX0NoYW5nZT10fWdldCBHcmlkV2luKCl7cmV0dXJuIHRoaXMuX0dyaWRXaW59c2V0IEdyaWRXaW4odCl7dGhpcy5fR3JpZFdpbj10fWdldCBUb3RhbFdpblBvaW50KCl7cmV0dXJuIHRoaXMuX1RvdGFsV2luUG9pbnR9c2V0IFRvdGFsV2luUG9pbnQodCl7dGhpcy5fVG90YWxXaW5Qb2ludD10fWdldCBVc2VyUG9pbnRBZnRlcigpe3JldHVybiB0aGlzLl9Vc2VyUG9pbnRBZnRlcn1zZXQgVXNlclBvaW50QWZ0ZXIodCl7dGhpcy5fVXNlclBvaW50QWZ0ZXI9dH1nZXQgR2FtZVN0YXRlKCl7cmV0dXJuIHRoaXMuX0dhbWVTdGF0ZX1zZXQgR2FtZVN0YXRlKHQpe3RoaXMuX0dhbWVTdGF0ZT10fWdldCBGcmVlU3BpbkNvdW50KCl7cmV0dXJuIHRoaXMuX0ZyZWVTcGluQ291bnR9c2V0IEZyZWVTcGluQ291bnQodCl7dGhpcy5fRnJlZVNwaW5Db3VudD10fWdldCBMb29rQXQoKXtyZXR1cm4gdGhpcy5fTG9va0F0fXNldCBMb29rQXQodCl7dGhpcy5fTG9va0F0PXR9Z2V0IFVzZXJQb2ludEJlZm9yZSgpe3JldHVybiB0aGlzLl9Vc2VyUG9pbnRCZWZvcmV9c2V0IFVzZXJQb2ludEJlZm9yZSh0KXt0aGlzLl9Vc2VyUG9pbnRCZWZvcmU9dH1nZXQgTGV2ZWxXaW4oKXtyZXR1cm4gdGhpcy5fTGV2ZWxXaW59c2V0IExldmVsV2luKHQpe3RoaXMuX0xldmVsV2luPXR9Z2V0IEJhc2VMZXZlbFdpbigpe3JldHVybiB0aGlzLl9CYXNlTGV2ZWxXaW59c2V0IEJhc2VMZXZlbFdpbih0KXt0aGlzLl9CYXNlTGV2ZWxXaW49dH1nZXQgQm9udXNFdmVudENvdW50KCl7cmV0dXJuIHRoaXMuX0JvbnVzRXZlbnRDb3VudH1zZXQgQm9udXNFdmVudENvdW50KHQpe3RoaXMuX0JvbnVzRXZlbnRDb3VudD10fX1jbGFzcyBIYXNMaW5lVGFibGVJbmZve2NvbnN0cnVjdG9yKCl7X2RlZmluZVByb3BlcnR5KHRoaXMsXCJfSXNMaW5lc1wiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfQmV0VGltZXNcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0xpbmVcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX1BheVRhYmxlXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9MaW5lR3JpZFBvc1wiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfTGluZUJldFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfTGluZVRvdGFsQmV0XCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9HcmlkXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9Vc2VyUG9pbnRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0xldmVsV2luUG9pbnRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0V2ZW50TW9kZVwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfRXZlbnRSZXF1aXJlXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9EZWZhdWx0QmV0SW5kZXhcIix2b2lkIDApLHRoaXMuX0lzTGluZXM9MCx0aGlzLl9CZXRUaW1lcz0wLHRoaXMuX0xpbmU9XCJcIix0aGlzLl9QYXlUYWJsZT17fSx0aGlzLl9MaW5lR3JpZFBvcz17fSx0aGlzLl9MaW5lQmV0PW5ldyBBcnJheSx0aGlzLl9MaW5lVG90YWxCZXQ9bmV3IEFycmF5LHRoaXMuX0dyaWQ9bmV3IEFycmF5LHRoaXMuX1VzZXJQb2ludD0wLHRoaXMuX0xldmVsV2luUG9pbnQ9bmV3IEFycmF5LHRoaXMuX0V2ZW50TW9kZT0wLHRoaXMuX0V2ZW50UmVxdWlyZT0wLHRoaXMuX0RlZmF1bHRCZXRJbmRleD0wfWdldCBJc0xpbmVzKCl7cmV0dXJuIHRoaXMuX0lzTGluZXN9c2V0IElzTGluZXModCl7dGhpcy5fSXNMaW5lcz10fWdldCBCZXRUaW1lcygpe3JldHVybiB0aGlzLl9CZXRUaW1lc31zZXQgQmV0VGltZXModCl7dGhpcy5fQmV0VGltZXM9dH1nZXQgTGluZSgpe3JldHVybiB0aGlzLl9MaW5lfXNldCBMaW5lKHQpe3RoaXMuX0xpbmU9dH1nZXQgUGF5VGFibGUoKXtyZXR1cm4gdGhpcy5fUGF5VGFibGV9c2V0IFBheVRhYmxlKHQpe3RoaXMuX1BheVRhYmxlPXR9Z2V0IExpbmVHcmlkUG9zKCl7cmV0dXJuIHRoaXMuX0xpbmVHcmlkUG9zfXNldCBMaW5lR3JpZFBvcyh0KXt0aGlzLl9MaW5lR3JpZFBvcz10fWdldCBMaW5lQmV0KCl7cmV0dXJuIHRoaXMuX0xpbmVCZXR9c2V0IExpbmVCZXQodCl7dGhpcy5fTGluZUJldD10fWdldCBMaW5lVG90YWxCZXQoKXtyZXR1cm4gdGhpcy5fTGluZVRvdGFsQmV0fXNldCBMaW5lVG90YWxCZXQodCl7dGhpcy5fTGluZVRvdGFsQmV0PXR9Z2V0IEdyaWQoKXtyZXR1cm4gdGhpcy5fR3JpZH1zZXQgR3JpZCh0KXt0aGlzLl9HcmlkPXR9Z2V0IFVzZXJQb2ludCgpe3JldHVybiB0aGlzLl9Vc2VyUG9pbnR9c2V0IFVzZXJQb2ludCh0KXt0aGlzLl9Vc2VyUG9pbnQ9dH1nZXQgTGV2ZWxXaW5Qb2ludCgpe3JldHVybiB0aGlzLl9MZXZlbFdpblBvaW50fXNldCBMZXZlbFdpblBvaW50KHQpe3RoaXMuX0xldmVsV2luUG9pbnQ9dH1nZXQgRGVmYXVsdEJldEluZGV4KCl7cmV0dXJuIHRoaXMuX0RlZmF1bHRCZXRJbmRleH1zZXQgRGVmYXVsdEJldEluZGV4KHQpe3RoaXMuX0RlZmF1bHRCZXRJbmRleD10fWdldCBFdmVudE1vZGUoKXtyZXR1cm4gdGhpcy5fRXZlbnRNb2RlfXNldCBFdmVudE1vZGUodCl7dGhpcy5fRXZlbnRNb2RlPXR9Z2V0IEV2ZW50UmVxdWlyZSgpe3JldHVybiB0aGlzLl9FdmVudFJlcXVpcmV9c2V0IEV2ZW50UmVxdWlyZSh0KXt0aGlzLl9FdmVudFJlcXVpcmU9dH19Y2xhc3MgTm9MaW5lVGFibGVJbmZve2NvbnN0cnVjdG9yKCl7X2RlZmluZVByb3BlcnR5KHRoaXMsXCJfSXNMaW5lc1wiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfQmV0VGltZXNcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0xpbmVcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX1BheVRhYmxlXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9MaW5lQmV0XCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9MaW5lVG90YWxCZXRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX0dyaWRcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiX1VzZXJQb2ludFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfTGV2ZWxXaW5Qb2ludFwiLHZvaWQgMCksX2RlZmluZVByb3BlcnR5KHRoaXMsXCJfRXZlbnRNb2RlXCIsdm9pZCAwKSxfZGVmaW5lUHJvcGVydHkodGhpcyxcIl9FdmVudFJlcXVpcmVcIix2b2lkIDApLF9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiRGVmYXVsdEJldEluZGV4XCIsdm9pZCAwKSx0aGlzLl9Jc0xpbmVzPTAsdGhpcy5fQmV0VGltZXM9MCx0aGlzLl9MaW5lPVwiXCIsdGhpcy5fUGF5VGFibGU9e30sdGhpcy5fTGluZUJldD1uZXcgQXJyYXksdGhpcy5fTGluZVRvdGFsQmV0PW5ldyBBcnJheSx0aGlzLl9HcmlkPW5ldyBBcnJheSx0aGlzLl9Vc2VyUG9pbnQ9MCx0aGlzLl9MZXZlbFdpblBvaW50PW5ldyBBcnJheSx0aGlzLl9FdmVudE1vZGU9MCx0aGlzLl9FdmVudFJlcXVpcmU9MCx0aGlzLkRlZmF1bHRCZXRJbmRleD0wfWdldCBJc0xpbmVzKCl7cmV0dXJuIHRoaXMuX0lzTGluZXN9c2V0IElzTGluZXModCl7dGhpcy5fSXNMaW5lcz10fWdldCBCZXRUaW1lcygpe3JldHVybiB0aGlzLl9CZXRUaW1lc31zZXQgQmV0VGltZXModCl7dGhpcy5fQmV0VGltZXM9dH1nZXQgTGluZSgpe3JldHVybiB0aGlzLl9MaW5lfXNldCBMaW5lKHQpe3RoaXMuX0xpbmU9dH1nZXQgUGF5VGFibGUoKXtyZXR1cm4gdGhpcy5fUGF5VGFibGV9c2V0IFBheVRhYmxlKHQpe3RoaXMuX1BheVRhYmxlPXR9Z2V0IExpbmVCZXQoKXtyZXR1cm4gdGhpcy5fTGluZUJldH1zZXQgTGluZUJldCh0KXt0aGlzLl9MaW5lQmV0PXR9Z2V0IExpbmVUb3RhbEJldCgpe3JldHVybiB0aGlzLl9MaW5lVG90YWxCZXR9c2V0IExpbmVUb3RhbEJldCh0KXt0aGlzLl9MaW5lVG90YWxCZXQ9dH1nZXQgR3JpZCgpe3JldHVybiB0aGlzLl9HcmlkfXNldCBHcmlkKHQpe3RoaXMuX0dyaWQ9dH1nZXQgVXNlclBvaW50KCl7cmV0dXJuIHRoaXMuX1VzZXJQb2ludH1zZXQgVXNlclBvaW50KHQpe3RoaXMuX1VzZXJQb2ludD10fWdldCBMZXZlbFdpblBvaW50KCl7cmV0dXJuIHRoaXMuX0xldmVsV2luUG9pbnR9c2V0IExldmVsV2luUG9pbnQodCl7dGhpcy5fTGV2ZWxXaW5Qb2ludD10fWdldCBFdmVudE1vZGUoKXtyZXR1cm4gdGhpcy5fRXZlbnRNb2RlfXNldCBFdmVudE1vZGUodCl7dGhpcy5fRXZlbnRNb2RlPXR9Z2V0IEV2ZW50UmVxdWlyZSgpe3JldHVybiB0aGlzLl9FdmVudFJlcXVpcmV9c2V0IEV2ZW50UmVxdWlyZSh0KXt0aGlzLl9FdmVudFJlcXVpcmU9dH19dmFyIFZFUlNJT049XCIwLjA0XCI7Z2xvYmFsVGhpcy5UQ0NfVkVSU0lPTj1WRVJTSU9OLGV4cG9ydHMuQUNlbnRlclRlbXBsYXRlPUFDZW50ZXJUZW1wbGF0ZSxleHBvcnRzLkFFcnJvckZyYW1lVGVtcGxhdGU9QUVycm9yRnJhbWVUZW1wbGF0ZSxleHBvcnRzLkFHZW5lcmljVGVtcGxhdGU9QUdlbmVyaWNUZW1wbGF0ZSxleHBvcnRzLkFMb2FkaW5nRnJhbWVUZW1wbGF0ZT1BTG9hZGluZ0ZyYW1lVGVtcGxhdGUsZXhwb3J0cy5BTG9hZGluZ1RlbXBsYXRlPUFMb2FkaW5nVGVtcGxhdGUsZXhwb3J0cy5BTG9va0F0VGVtcGxhdGU9QUxvb2tBdFRlbXBsYXRlLGV4cG9ydHMuQU1haW5HYW1lQnV0dG9uVGVtcGxhdGU9QU1haW5HYW1lQnV0dG9uVGVtcGxhdGUsZXhwb3J0cy5BTWFpbkdhbWVEb3VibGVCdXR0b25UZW1wbGF0ZT1BTWFpbkdhbWVEb3VibGVCdXR0b25UZW1wbGF0ZSxleHBvcnRzLkFNYWluR2FtZU9ubHlCdXR0b25UZW1wbGF0ZT1BTWFpbkdhbWVPbmx5QnV0dG9uVGVtcGxhdGUsZXhwb3J0cy5BTWFpbkluaXRUZW1wbGF0ZT1BTWFpbkluaXRUZW1wbGF0ZSxleHBvcnRzLkFNZW51QnV0dG9uVGVtcGxhdGU9QU1lbnVCdXR0b25UZW1wbGF0ZSxleHBvcnRzLkFNZW51RG91YmxlQnV0dG9uVGVtcGxhdGU9QU1lbnVEb3VibGVCdXR0b25UZW1wbGF0ZSxleHBvcnRzLkFNZW51T25seUJ1dHRvblRlbXBsYXRlPUFNZW51T25seUJ1dHRvblRlbXBsYXRlLGV4cG9ydHMuQVJlY29yZEJ1dHRvblRlbXBsYXRlPUFSZWNvcmRCdXR0b25UZW1wbGF0ZSxleHBvcnRzLkFSZWNvcmREb3VibGVCdXR0b25UZW1wbGF0ZT1BUmVjb3JkRG91YmxlQnV0dG9uVGVtcGxhdGUsZXhwb3J0cy5BUmVjb3JkT25seUJ1dHRvblRlbXBsYXRlPUFSZWNvcmRPbmx5QnV0dG9uVGVtcGxhdGUsZXhwb3J0cy5BU2xvdEluaXRpYWxpemVUZW1wbGF0ZT1BU2xvdEluaXRpYWxpemVUZW1wbGF0ZSxleHBvcnRzLkFTbG90VGVtcGxhdGU9QVNsb3RUZW1wbGF0ZSxleHBvcnRzLkFXaW5MaW5UZW1wbGF0ZT1BV2luTGluVGVtcGxhdGUkMSxleHBvcnRzLkF1dG9TdGF0ZUNoYW5nZU5vdGlmaWNhdGlvbj1BdXRvU3RhdGVDaGFuZ2VOb3RpZmljYXRpb24sZXhwb3J0cy5BdXRvU3RhdGVDaGFuZ2VPYnNlcnZlcj1BdXRvU3RhdGVDaGFuZ2VPYnNlcnZlcixleHBvcnRzLkV4dGVuZEhhc0xpbmVGcmVlUmVzdWx0PUV4dGVuZEhhc0xpbmVGcmVlUmVzdWx0LGV4cG9ydHMuRXh0ZW5kSGFzTGluZVJlc3VsdD1FeHRlbmRIYXNMaW5lUmVzdWx0LGV4cG9ydHMuSGFzTGluZUZyZWVSZXN1bHQ9SGFzTGluZUZyZWVSZXN1bHQsZXhwb3J0cy5IYXNMaW5lUmVzdWx0PUhhc0xpbmVSZXN1bHQsZXhwb3J0cy5IYXNMaW5lVGFibGVJbmZvPUhhc0xpbmVUYWJsZUluZm8sZXhwb3J0cy5Ob0xpbmVGcmVlUmVzdWx0PU5vTGluZUZyZWVSZXN1bHQsZXhwb3J0cy5Ob0xpbmVSZXN1bHQ9Tm9MaW5lUmVzdWx0LGV4cG9ydHMuTm9MaW5lVGFibGVJbmZvPU5vTGluZVRhYmxlSW5mbyxleHBvcnRzLk5vcm1hbFNsb3RTcGVjaWFsVGVtcGxhdGU9Tm9ybWFsU2xvdFNwZWNpYWxUZW1wbGF0ZSxleHBvcnRzLk5vcm1hbFNsb3RUZW1wbGF0ZT1Ob3JtYWxTbG90VGVtcGxhdGUsZXhwb3J0cy5PdmVycmlkZUNvbXBvbmVudD1PdmVycmlkZUNvbXBvbmVudCxleHBvcnRzLlJlc3BvbnNlUmVzdWx0Tm90aWZpY2F0aW9uPVJlc3BvbnNlUmVzdWx0Tm90aWZpY2F0aW9uLGV4cG9ydHMuUmVzcG9uc2VSZXN1bHRPYnNlcnZlcj1SZXNwb25zZVJlc3VsdE9ic2VydmVyLGV4cG9ydHMuU2Nyb2xsRm9jdXNTdGF0ZU5vdGlmaWNhdGlvbj1TY3JvbGxGb2N1c1N0YXRlTm90aWZpY2F0aW9uLGV4cG9ydHMuU2Nyb2xsRm9jdXNTdGF0ZU9ic2VydmVyPVNjcm9sbEZvY3VzU3RhdGVPYnNlcnZlcixleHBvcnRzLlNsb3RCdXJyZWRJbWdTcGVjaWFsVGVtcGxhdGU9U2xvdEJ1cnJlZEltZ1NwZWNpYWxUZW1wbGF0ZSxleHBvcnRzLlNsb3RCdXJyZWRJbWdUZW1wbGF0ZT1TbG90QnVycmVkSW1nVGVtcGxhdGUsZXhwb3J0cy5TbG90Um93RW5kTm90aWZpY2F0aW9uPVNsb3RSb3dFbmROb3RpZmljYXRpb24sZXhwb3J0cy5TbG90Um93RW5kT2JzZXJ2ZXI9U2xvdFJvd0VuZE9ic2VydmVyLGV4cG9ydHMuU3BlZWRTdGF0ZUNoYW5nZU5vdGlmaWNhdGlvbj1TcGVlZFN0YXRlQ2hhbmdlTm90aWZpY2F0aW9uLGV4cG9ydHMuU3BlZWRTdGF0ZUNoYW5nZU9ic2VydmVyPVNwZWVkU3RhdGVDaGFuZ2VPYnNlcnZlcixleHBvcnRzLlN0b3BOb3dTdGF0ZU5vdGlmaWNhdGlvbj1TdG9wTm93U3RhdGVOb3RpZmljYXRpb24sZXhwb3J0cy5TdG9wTm93U3RhdGVPYnNlcnZlcj1TdG9wTm93U3RhdGVPYnNlcnZlcixleHBvcnRzLlVzZXJNb25leUNoYW5nZU5vdGlmaWNhdGlvbj1Vc2VyTW9uZXlDaGFuZ2VOb3RpZmljYXRpb24sZXhwb3J0cy5Vc2VyTW9uZXlDaGFuZ2VPYnNlcnZlcj1Vc2VyTW9uZXlDaGFuZ2VPYnNlcnZlcixleHBvcnRzLlVzZXJUb3RhbEJldENoYW5nZU5vdGlmaWNhdGlvbj1Vc2VyVG90YWxCZXRDaGFuZ2VOb3RpZmljYXRpb24sZXhwb3J0cy5Vc2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlcj1Vc2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlcixleHBvcnRzLlVzZXJXaW5Qb2ludFN0YXRlTm90aWZpY2F0aW9uPVVzZXJXaW5Qb2ludFN0YXRlTm90aWZpY2F0aW9uLGV4cG9ydHMuVXNlcldpblBvaW50U3RhdGVPYnNlcnZlcj1Vc2VyV2luUG9pbnRTdGF0ZU9ic2VydmVyLGV4cG9ydHMuZmNjPWZjYztcbiJdfQ==