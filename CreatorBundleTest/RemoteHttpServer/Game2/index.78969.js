window.__require = function t(o, e, n) {
    function r(c, a) {
        if (!e[c]) {
            if (!o[c]) {
                var u = c.split("/");
                if (u = u[u.length - 1], !o[u]) {
                    var p = "function" == typeof __require && __require;
                    if (!a && p) return p(u, !0);
                    if (i) return i(u, !0);
                    throw new Error("Cannot find module '" + c + "'")
                }
                c = u
            }
            var s = e[c] = {exports: {}};
            o[c][0].call(s.exports, function (t) {
                return r(o[c][1][t] || t)
            }, s, s.exports, t, o, e, n)
        }
        return e[c].exports
    }

    for (var i = "function" == typeof __require && __require, c = 0; c < n.length; c++) r(n[c]);
    return r
}({
    Game2Logic: [function (t, o, e) {
        "use strict";
        cc._RF.push(o, "ce446vSyOxEs4gg/hzB28EP", "Game2Logic");
        var n, r = this && this.__extends || (n = function (t, o) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, o) {
                t.__proto__ = o
            } || function (t, o) {
                for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e])
            })(t, o)
        }, function (t, o) {
            function e() {
                this.constructor = t
            }

            n(t, o), t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e)
        }), i = this && this.__decorate || function (t, o, e, n) {
            var r, i = arguments.length, c = i < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, o, e, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(o, e, c) : r(o, e)) || c);
            return i > 3 && c && Object.defineProperty(o, e, c), c
        };
        Object.defineProperty(e, "__esModule", {value: !0});
        var c = cc._decorator, a = c.ccclass, u = c.property, p = function (t) {
            function o() {
                var o = null !== t && t.apply(this, arguments) || this;
                return o.actor = null, o.index = 0, o
            }

            return r(o, t), o.prototype.start = function () {
                this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on("ActorAnimationPlay", this.onActorAnimationPlay, this)
            }, o.prototype.onDestroy = function () {
                this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off("ActorAnimationPlay", this.onActorAnimationPlay, this)
            }, o.prototype.onActorAnimationPlay = function (t) {
                this.actor.playAnimation(t, -1)
            }, o.prototype.onTouchEnd = function () {
                var t = this.actor.getAnimationNames("ubbie"), o = t[this.index % t.length];
                this.actor.playAnimation(o, -1), this.index += 1;
                var e = cc.director.getScene().getComponentInChildren("MainControllerScript");
                e || (e = window.debugMainCtrl), e.outString(o)
            }, i([u(dragonBones.ArmatureDisplay)], o.prototype, "actor", void 0), i([a], o)
        }(cc.Component);
        e.default = p, cc._RF.pop()
    }, {}]
}, {}, ["Game2Logic"]);
