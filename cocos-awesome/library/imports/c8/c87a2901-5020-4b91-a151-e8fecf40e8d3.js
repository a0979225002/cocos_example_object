"use strict";
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
    return fcc.loadMgr.secondaryLoadState.has(t) ? 1 != fcc.loadMgr.secondaryLoadState.get(t) || (this.loadingDialogNode.active = !1, e(), !1) : (fcc.errorMgr.executeError(fcc.type.ErrorType.UNDEFINED_FW, "".concat(t, "該無該資源")), this.loadingDialogNode.active = !1, e(), !1);
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