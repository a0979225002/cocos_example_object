window.__require = function t(e, o, r) {
function i(s, a) {
if (!o[s]) {
if (!e[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!e[c]) {
var u = "function" == typeof __require && __require;
if (!a && u) return u(c, !0);
if (n) return n(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var h = o[s] = {
exports: {}
};
e[s][0].call(h.exports, function(t) {
return i(e[s][1][t] || t);
}, h, h.exports, t, e, o, r);
}
return o[s].exports;
}
for (var n = "function" == typeof __require && __require, s = 0; s < r.length; s++) i(r[s]);
return i;
}({
Controll: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8e4b00XT51O46mCkdkAdil3", "Controll");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), n = this && this.__decorate || function(t, e, o, r) {
var i, n = arguments.length, s = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (n < 3 ? i(s) : n > 3 ? i(e, o, s) : i(e, o)) || s);
return n > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator.ccclass, a = cc._decorator.property, c = t("./Modle"), u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.chequePrefab = null;
e.drawBoardNode = null;
return e;
}
e.prototype.onLoad = function() {
fcc.configMgr.build();
fcc.sceneMgr.setDesignHeight(640).setDesignWidth(960).updateSize(fcc.type.SceneStyleType.HORIZONTAL).startListener(500);
this.chequeModel = new c.default();
this.chequeModel.initDrawBoardData(this.drawBoardNode, cc.color().fromHEX("#ff8600"), 5);
this.initialTouchEvent();
};
e.prototype.initialTouchEvent = function() {
this.drawBoardNode.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
this.drawBoardNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
this.drawBoardNode.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
};
e.prototype.start = function() {};
e.prototype.test = function(t) {
console.log(t);
};
e.prototype.touchStartEvent = function(t) {
console.log(t);
var e = t.getLocation();
console.log("?????position.y：" + e.y);
var o = cc.Vec2.ZERO;
cc.Camera.main.getScreenToWorldPoint(e, o);
console.log(o);
var r = this.drawBoardNode.height / cc.view.getDesignResolutionSize().height, i = Math.floor(o.x / r), n = Math.floor(o.y / r);
console.log(i);
console.log(n);
var s = cc.v2(e.x, this.drawBoardNode.height - e.y);
this.chequeModel.touchStartAction(s);
};
e.prototype.touchMoveEvent = function(t) {
var e = t.getLocation(), o = this.drawBoardNode.height / cc.view.getDesignResolutionSize().height, r = cc.v2(e.x, (this.drawBoardNode.height - e.y) * o);
this.chequeModel.touchMoveToAction(r);
};
e.prototype.touchEndEvent = function(t) {
t.getLocation();
};
e.prototype.buttonInit = function(t, e, o, r, i) {
var n = new cc.Component.EventHandler();
n.target = t;
n.component = e;
n.handler = o;
i && (n.customEventData = i);
console.log(r);
r.clickEvents.push(n);
};
n([ a(cc.Prefab) ], e.prototype, "chequePrefab", void 0);
n([ a(cc.Node) ], e.prototype, "drawBoardNode", void 0);
return n([ s ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./Modle": "Modle"
} ],
DrawBoardBuilder: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a51e4UlxktM1oQQBIVV4BlY", "DrawBoardBuilder");
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./DrawBord"), i = t("./DrawBordModel"), n = function() {
function t() {}
t.prototype.setBoardSize = function(t, e) {
this._width = t;
this._height = e;
return this;
};
t.prototype.setColor = function(t) {
this._recentColor = t;
return this;
};
t.prototype.setLineWidth = function(t) {
this._lineWidth = t;
return this;
};
t.prototype.setLineCircleEnd = function(t) {
this._previousLineCircleEnd = t;
return this;
};
t.prototype.setTexture = function(t) {
var e = new cc.RenderTexture();
e.initWithSize(this._width, this._height);
var o = new cc.SpriteFrame(e), r = new cc.Node();
r.width = this._width;
r.height = this._height;
t.addChild(r);
r.addComponent(cc.Sprite).spriteFrame = o;
this._texture = e;
};
t.prototype.build = function(t) {
this.setTexture(t);
var e = new i.default(this);
return new r.default(e);
};
Object.defineProperty(t.prototype, "width", {
get: function() {
return this._width;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "height", {
get: function() {
return this._height;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "texture", {
get: function() {
return this._texture;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "color", {
get: function() {
return this._recentColor;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "previousLineWidth", {
get: function() {
return this._lineWidth;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "previousLineCircleEnd", {
get: function() {
return this._previousLineCircleEnd;
},
enumerable: !1,
configurable: !0
});
return t;
}();
o.default = n;
cc._RF.pop();
}, {
"./DrawBord": "DrawBord",
"./DrawBordModel": "DrawBordModel"
} ],
DrawBordModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "aa038tiyVlOpKZjfgfXiwOz", "DrawBordModel");
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = function() {
function t(t) {
this.setInitData(t);
this.initParameter(t);
}
t.prototype.setInitData = function(t) {
this._width = Math.round(t.width);
this._height = Math.round(t.height);
this._texture = t.texture;
this._previousLineWidth = t.previousLineWidth;
this._previousLineCircleEnd = t.previousLineCircleEnd;
this._pointColor = new Array();
this._maskPoint = new Array();
};
t.prototype.initParameter = function(t) {
this.initPointColor();
this.initMaskPoint();
this.initPixelColor();
this.initLineData();
this.setColor(t.color);
};
t.prototype.initPointColor = function() {
for (var t = 0; t < this._width; ++t) {
this._pointColor[t] || (this._pointColor[t] = []);
for (var e = 0; e < this._height; ++e) this._pointColor[t][e] = 0;
}
this._colorCount = {};
this._colorCount[0] = this._width * this._height;
};
t.prototype.initMaskPoint = function() {
for (var t = 0; t < this._width; t++) {
this._maskPoint[t] || (this._maskPoint[t] = []);
for (var e = 0; e < this._height; ++e) this._maskPoint[t][e] = !0;
}
};
t.prototype.initPixelColor = function() {
this._pixelBuffer = new ArrayBuffer(this.width * this.height * 4);
this._pixelColor = new Uint8Array(this._pixelBuffer);
this.pixelColor.fill(0);
};
t.prototype.initLineData = function() {
this._previousLineEndPos = new i();
this._previousLineEndPosT = new i();
this._previousLineEndPosB = new i();
this._previousLineCircleEnd = !0;
this._previousLineWidth = 1;
};
t.prototype.reset = function() {
this.resetPointColor();
this.resetMaskPoint();
this.resetPixelColor();
};
t.prototype.resetPointColor = function() {
for (var t = this._width - 1; t >= 0; --t) for (var e = this._height - 1; e >= 0; --e) this._pointColor[t][e] = 0;
for (var o in this._colorCount) this._colorCount[o] = 0;
};
t.prototype.resetMaskPoint = function() {
for (var t = this._width - 1; t >= 0; --t) for (var e = this._height - 1; e >= 0; --e) this._maskPoint[t][e] = !0;
};
t.prototype.resetPixelColor = function() {
this._pixelColor.fill(0);
};
t.prototype.setColor = function(t) {
this._recentColor = this.convertToNumber(t);
var e = this.convertToNumber(t);
this._colorCount[e] || (this._colorCount[e] = 0);
this._temporaryColor = this._recentColor;
this.temporaryR = t.r;
this.temporaryG = t.g;
this.temporaryB = t.b;
this.temporaryA = t.a;
};
t.prototype.convertToNumber = function(t) {
return (254 & t.r) << 23 | t.g << 16 | t.b << 8 | t.a;
};
t.prototype.buildMyVec2 = function(t, e) {
return new i(t, e);
};
t.prototype.drawTriangle = function(t) {
t.sort(function(t, e) {
return t.x - e.x;
});
var e = t[0], o = t[1], r = t[2];
if (e.x != o.x) {
var n = (r.y - e.y) / (r.x - e.x), s = new i(o.x, Math.round(e.y + (o.x - e.x) * n));
if (s.y != o.y) if (s.y < o.y) {
this.drawVerticalTriangle(o, s, e);
this.drawVerticalTriangle(o, s, r);
} else {
this.drawVerticalTriangle(s, o, e);
this.drawVerticalTriangle(s, o, r);
}
} else {
if (e.x == r.x) return;
if (e.y < o.y) {
e = t[1];
o = t[0];
}
this.drawVerticalTriangle(e, o, r);
}
};
t.prototype.drawVerticalTriangle = function(t, e, o) {
if (o.x != t.x) {
var r = (o.y - t.y) / (o.x - t.x), i = (o.y - e.y) / (o.x - e.x), n = o.x, s = t.x;
if (n < s) {
n = t.x;
s = o.x;
}
s = this.minX(s);
n = this.maxX(n);
for (var a = s; a <= n; ++a) {
var c = this.clampY(Math.round(t.y + (a - t.x) * r)), u = this.clampY(Math.round(e.y + (a - e.x) * i));
this.drawColPixel(u, c, a);
}
}
};
t.prototype.drawColPixel = function(t, e, o) {
for (var r = 4 * (t * this.width + o), i = t; i <= e; ++i) {
this.updateNowDrawColorData(r, o, i);
r += 4 * this.width;
}
};
t.prototype.updateNowDrawColorData = function(t, e, o) {
if (0 != this.maskPoint[e][o] && this.pointColor[e][o] != this._temporaryColor) {
this.pixelColor[t] = this.temporaryR;
this.pixelColor[t + 1] = this.temporaryG;
this.pixelColor[t + 2] = this.temporaryB;
this.pixelColor[t + 3] = this.temporaryA;
var r = this.pointColor[e][o];
this.colorCount[r]--;
this.colorCount[this._temporaryColor]++;
this.pointColor[e][o] = this._temporaryColor;
}
};
t.prototype.drawCircle = function(t, e, o) {
if (0 != (o = Math.round(o))) for (var r = o * o, i = this.clampY(e - o), n = this.clampY(e + o), s = i; s <= n; ++s) {
var a = s - e;
a = Math.round(Math.sqrt(r - a * a));
var c = this.clampX(t - a), u = this.clampX(t + a);
this.drawRowPixel(c, u, s);
}
};
t.prototype.drawRowPixel = function(t, e, o) {
for (var r = 4 * (o * this.width + t), i = t; i <= e; ++i) {
this.updateNowDrawColorData(r, i, o);
r += 4;
}
};
t.prototype.drawLine = function(t, e, o, r, n, s) {
if (t.y == e.y) {
var a = t.x < e.x ? t.x : e.x;
this.drawRect(new i(a, Math.round(t.y - .5 * o)), Math.abs(t.x - e.x), o);
} else if (t.x == e.x) {
var c = t.y < e.y ? t.y : e.y;
this.drawRect(new i(Math.round(t.x - .5 * o), c), o, Math.abs(t.y - e.y));
} else {
var u = (t.x - e.x) / (t.y - e.y), h = new i(t.x - r, t.y + n), l = new i(t.x + r, t.y - n), p = new i(e.x - r, e.y + n), d = new i(e.x + r, e.y - n), f = new i(), y = new i(), _ = Math.round(o * s);
if (e.y > t.y) if (l.x < p.x) {
f.x = l.x;
f.y = l.y + _;
y.x = p.x;
y.y = p.y - _;
this.drawVerticalTriangle(f, l, h);
this.drawParallelogram(l, y, _);
this.drawVerticalTriangle(p, y, d);
} else {
f.x = l.x;
f.y = Math.round(p.y - (f.x - p.x) * u);
y.x = p.x;
y.y = Math.round(l.y + (l.x - y.x) * u);
this.drawVerticalTriangle(p, y, h);
this.drawParallelogram(y, l, p.y - y.y);
this.drawVerticalTriangle(f, l, d);
} else if (h.x < d.x) {
f.x = h.x;
f.y = h.y - _;
y.x = d.x;
y.y = d.y + _;
this.drawVerticalTriangle(h, f, l);
this.drawParallelogram(f, d, _);
this.drawVerticalTriangle(y, d, p);
} else {
f.x = h.x;
f.y = Math.round(d.y - (f.x - d.x) * u);
y.x = d.x;
y.y = Math.round(h.y + (h.x - y.x) * u);
this.drawVerticalTriangle(y, d, l);
this.drawParallelogram(d, f, h.y - f.y);
this.drawVerticalTriangle(h, f, p);
}
}
};
t.prototype.drawRect = function(t, e, o) {
for (var r = this.clampX(t.x), i = this.clampX(t.x + e), n = this.clampY(t.y), s = this.clampY(t.y + o), a = n; a <= s; ++a) this.drawRowPixel(r, i, a);
};
t.prototype.drawParallelogram = function(t, e, o) {
if (t.x != e.x) for (var r = (e.y - t.y) / (e.x - t.x), i = this.minX(t.x), n = this.maxX(e.x), s = i; s <= n; ++s) {
var a = t.y + Math.round((s - t.x) * r), c = a + o;
a = this._minY(a);
c = this._maxY(c);
this.drawColPixel(a, c, s);
}
};
t.prototype.minX = function(t) {
return t >= 0 ? t : 0;
};
t.prototype.maxX = function(t) {
return t < this._width ? t : this._width - 1;
};
t.prototype._minY = function(t) {
return t >= 0 ? t : 0;
};
t.prototype._maxY = function(t) {
return t < this._height ? t : this._height - 1;
};
t.prototype.clampX = function(t) {
return t < 0 ? 0 : t >= this._width ? this._width - 1 : t;
};
t.prototype.clampY = function(t) {
return t < 0 ? 0 : t >= this._height ? this._height - 1 : t;
};
Object.defineProperty(t.prototype, "width", {
get: function() {
return this._width;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "height", {
get: function() {
return this._height;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "texture", {
get: function() {
return this._texture;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "pointColor", {
get: function() {
return this._pointColor;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "maskPoint", {
get: function() {
return this._maskPoint;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "pixelBuffer", {
get: function() {
return this._pixelBuffer;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "pixelColor", {
get: function() {
return this._pixelColor;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "colorCount", {
get: function() {
return this._colorCount;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "recentColor", {
get: function() {
return this._recentColor;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "temporaryColor", {
get: function() {
return this._temporaryColor;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "previousLineEndPos", {
get: function() {
return this._previousLineEndPos;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "previousLineEndPosT", {
get: function() {
return this._previousLineEndPosT;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "previousLineEndPosB", {
get: function() {
return this._previousLineEndPosB;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "previousLineCircleEnd", {
get: function() {
return this._previousLineCircleEnd;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "previousLineWidth", {
get: function() {
return this._previousLineWidth;
},
enumerable: !1,
configurable: !0
});
return t;
}();
o.default = r;
var i = function() {
function t(t, e) {
void 0 === t && (t = 0);
void 0 === e && (e = 0);
this.x = t;
this.y = e;
}
t.prototype.set = function(t, e) {
if ("number" == typeof t) {
this.x = t;
this.y = e;
} else {
this.x = t.x;
this.y = t.y;
}
};
return t;
}();
cc._RF.pop();
}, {} ],
DrawBord: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5dc8amnf3pI7akMMcY37wB7", "DrawBord");
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = function() {
function t(t) {
this.model = t;
}
t.prototype.moveTo = function(t) {
var e = Math.round(t.x), o = Math.round(t.y);
this.model.previousLineEndPos.set(e, o);
this.model.previousLineEndPosT.set(e, o);
this.model.previousLineEndPosB.set(e, o);
};
t.prototype.lineTo = function(t) {
var e = Math.round(t.x), o = Math.round(t.y);
if (this.model.previousLineEndPos.x != e || this.model.previousLineEndPos.y != o) {
var r = this.model.previousLineWidth, i = this.model.previousLineCircleEnd, n = this.model.previousLineEndPos.x, s = this.model.previousLineEndPos.y, a = e, c = o;
if (n > a) {
n = a;
s = c;
a = this.model.previousLineEndPos.x;
c = this.model.previousLineEndPos.y;
}
var u = 0, h = 0, l = 1;
if (n == a) u = Math.round(.5 * r); else if (s == c) h = Math.round(.5 * r); else {
var p = (c - s) / (a - n);
h = .5 * r / (l = Math.sqrt(p * p + 1));
u = Math.round(h * p);
h = Math.round(h);
}
if (i) {
this.model.drawCircle(n, s, .5 * r);
this.model.drawCircle(a, c, .5 * r);
} else if (this.model.previousLineEndPos.x != this.model.previousLineEndPosT.x || this.model.previousLineEndPos.y != this.model.previousLineEndPosT.y) {
var d = this.model.buildMyVec2(this.model.previousLineEndPos.x - u, this.model.previousLineEndPos.y + h), f = this.model.buildMyVec2(this.model.previousLineEndPos.x + u, this.model.previousLineEndPos.y - h);
this.model.drawTriangle([ d, f, this.model.previousLineEndPosT ]);
this.model.drawTriangle([ d, f, this.model.previousLineEndPosB ]);
}
var y = this.model.buildMyVec2(n, s), _ = this.model.buildMyVec2(a, c);
this.model.drawLine(y, _, r, u, h, l);
this.model.previousLineEndPos.set(e, o);
this.model.previousLineEndPosT.set(e - u, o + h);
this.model.previousLineEndPosB.set(e + u, o - h);
}
};
t.prototype.getPixelColorData = function() {
return this.model.pixelColor;
};
t.prototype.updateTexture = function() {
var t = this.getPixelColorData();
this.model.texture.initWithData(t, cc.Texture2D.PixelFormat.RGBA8888, this.model.width, this.model.height);
};
t.prototype.empitDrawBord = function() {
this.model.reset();
};
return t;
}();
o.default = r;
cc._RF.pop();
}, {} ],
IColorCount: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3ff0fcw1vdINrwGbNfC2awV", "IColorCount");
Object.defineProperty(o, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
IDrawBordInitializeData: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6f2a4JpikVEYJWXat2lVoaT", "IDrawBordInitializeData");
Object.defineProperty(o, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
IVec2: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1d275RTiIVFWqGK/XPBYGbL", "IVec2");
Object.defineProperty(o, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
Modle: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6b88c1wV2tNHJHSoAKkDKEG", "Modle");
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./drawBoard/DrawBoardBuilder"), i = function() {
function t() {}
t.prototype.initDrawBoardData = function(t, e, o) {
if (this.drawBoard) return cc.error("當前已經有存活的畫布,無法再次創建");
this.drawBoard = new r.default().setColor(e).setLineCircleEnd(!0).setLineWidth(o).setBoardSize(t.width, t.height).build(t);
};
t.prototype.touchStartAction = function(t) {
this.drawBoard.moveTo(t);
};
t.prototype.touchMoveToAction = function(t) {
cc.log(t.x, t.y);
this.drawBoard.lineTo(t);
this.drawBoard.updateTexture();
};
return t;
}();
o.default = i;
cc._RF.pop();
}, {
"./drawBoard/DrawBoardBuilder": "DrawBoardBuilder"
} ],
test: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1484ebWK2pJpLb4brP/XlwY", "test");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), n = this && this.__decorate || function(t, e, o, r) {
var i, n = arguments.length, s = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (n < 3 ? i(s) : n > 3 ? i(e, o, s) : i(e, o)) || s);
return n > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = (s.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.setTime = 432e5;
e.showTime = 0;
return e;
}
e.prototype.start = function() {
var t = this;
setInterval(function() {
t.showTime += 1e3;
console.log(t.updateTime(t.showTime, t.setTime));
}, 1e3);
};
e.prototype.updateTime = function(t, e) {
var o = Math.floor(t / 3600);
Math.floor((t - 3600 * o) / 60);
return t / e;
};
return n([ a ], e);
}(cc.Component));
o.default = c;
cc._RF.pop();
}, {} ]
}, {}, [ "Controll", "Modle", "DrawBoardBuilder", "DrawBord", "DrawBordModel", "IColorCount", "IDrawBordInitializeData", "IVec2", "test" ]);