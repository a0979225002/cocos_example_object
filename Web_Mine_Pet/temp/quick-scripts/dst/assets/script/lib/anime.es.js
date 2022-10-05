
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/lib/anime.es.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db9e2P8oX1PXYgteZk3fz/E', 'anime.es');
// script/lib/anime.es.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

/*
 * anime.js v3.0.0
 * (c) 2019 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */
// Defaults
var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};
var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};
var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective']; // Caching

var cache = {
  CSS: {},
  springs: {}
}; // Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function arr(a) {
    return Array.isArray(a);
  },
  obj: function obj(a) {
    return stringContains(Object.prototype.toString.call(a), 'Object');
  },
  pth: function pth(a) {
    return is.obj(a) && a.hasOwnProperty('totalLength');
  },
  svg: function svg(a) {
    return a instanceof SVGElement;
  },
  inp: function inp(a) {
    return a instanceof HTMLInputElement;
  },
  dom: function dom(a) {
    return a.nodeType || is.svg(a);
  },
  str: function str(a) {
    return typeof a === 'string';
  },
  fnc: function fnc(a) {
    return typeof a === 'function';
  },
  und: function und(a) {
    return typeof a === 'undefined';
  },
  hex: function hex(a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgb: function rgb(a) {
    return /^rgb/.test(a);
  },
  hsl: function hsl(a) {
    return /^hsl/.test(a);
  },
  col: function col(a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function key(a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
  }
}; // Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) {
    return parseFloat(p);
  }) : [];
} // Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js


function spring(string, duration) {
  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity = minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? duration * t / 1000 : t;

    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }

    if (t === 0 || t === 1) {
      return t;
    }

    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];

    if (cached) {
      return cached;
    }

    var frame = 1 / 6;
    var elapsed = 0;
    var rest = 0;

    while (true) {
      elapsed += frame;

      if (solver(elapsed) === 1) {
        rest++;

        if (rest >= 16) {
          break;
        }
      } else {
        rest = 0;
      }
    }

    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;
} // Elastic easing adapted from jQueryUI http://api.jqueryui.com/easings/


function elastic(amplitude, period) {
  if (amplitude === void 0) amplitude = 1;
  if (period === void 0) period = .5;
  var a = minMax(amplitude, 1, 10);
  var p = minMax(period, .1, 2);
  return function (t) {
    return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
  };
} // Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function


function steps(steps) {
  if (steps === void 0) steps = 10;
  return function (t) {
    return Math.round(t * steps) * (1 / steps);
  };
} // BezierEasing https://github.com/gre/bezier-easing


var bezier = function () {
  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) {
    return 1.0 - 3.0 * aA2 + 3.0 * aA1;
  }

  function B(aA1, aA2) {
    return 3.0 * aA2 - 6.0 * aA1;
  }

  function C(aA1) {
    return 3.0 * aA1;
  }

  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }

  function getSlope(aT, aA1, aA2) {
    return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
  }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX,
        currentT,
        i = 0;

    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;

      if (currentX > 0.0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);

    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);

      if (currentSlope === 0.0) {
        return aGuessT;
      }

      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }

    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
      return;
    }

    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {
      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;
      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) {
        return x;
      }

      if (x === 0 || x === 1) {
        return x;
      }

      return calcBezier(getTForX(x), mY1, mY2);
    };
  }

  return bezier;
}();

var penner = function () {
  var names = ['Quad', 'Cubic', 'Quart', 'Quint', 'Sine', 'Expo', 'Circ', 'Back', 'Elastic']; // Approximated Penner equations http://matthewlein.com/ceaser/

  var curves = {
    In: [[0.550, 0.085, 0.680, 0.530],
    /* inQuad */
    [0.550, 0.055, 0.675, 0.190],
    /* inCubic */
    [0.895, 0.030, 0.685, 0.220],
    /* inQuart */
    [0.755, 0.050, 0.855, 0.060],
    /* inQuint */
    [0.470, 0.000, 0.745, 0.715],
    /* inSine */
    [0.950, 0.050, 0.795, 0.035],
    /* inExpo */
    [0.600, 0.040, 0.980, 0.335],
    /* inCirc */
    [0.600, -0.280, 0.735, 0.045],
    /* inBack */
    elastic
    /* inElastic */
    ],
    Out: [[0.250, 0.460, 0.450, 0.940],
    /* outQuad */
    [0.215, 0.610, 0.355, 1.000],
    /* outCubic */
    [0.165, 0.840, 0.440, 1.000],
    /* outQuart */
    [0.230, 1.000, 0.320, 1.000],
    /* outQuint */
    [0.390, 0.575, 0.565, 1.000],
    /* outSine */
    [0.190, 1.000, 0.220, 1.000],
    /* outExpo */
    [0.075, 0.820, 0.165, 1.000],
    /* outCirc */
    [0.175, 0.885, 0.320, 1.275],
    /* outBack */
    function (a, p) {
      return function (t) {
        return 1 - elastic(a, p)(1 - t);
      };
    }
    /* outElastic */
    ],
    InOut: [[0.455, 0.030, 0.515, 0.955],
    /* inOutQuad */
    [0.645, 0.045, 0.355, 1.000],
    /* inOutCubic */
    [0.770, 0.000, 0.175, 1.000],
    /* inOutQuart */
    [0.860, 0.000, 0.070, 1.000],
    /* inOutQuint */
    [0.445, 0.050, 0.550, 0.950],
    /* inOutSine */
    [1.000, 0.000, 0.000, 1.000],
    /* inOutExpo */
    [0.785, 0.135, 0.150, 0.860],
    /* inOutCirc */
    [0.680, -0.550, 0.265, 1.550],
    /* inOutBack */
    function (a, p) {
      return function (t) {
        return t < .5 ? elastic(a, p)(t * 2) / 2 : 1 - elastic(a, p)(t * -2 + 2) / 2;
      };
    }
    /* inOutElastic */
    ]
  };
  var eases = {
    linear: [0.250, 0.250, 0.750, 0.750]
  };

  var loop = function loop(coords) {
    curves[coords].forEach(function (ease, i) {
      eases['ease' + coords + names[i]] = ease;
    });
  };

  for (var coords in curves) {
    loop(coords);
  }

  return eases;
}();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) {
    return easing;
  }

  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);

  switch (name) {
    case 'spring':
      return spring(easing, duration);

    case 'cubicBezier':
      return applyArguments(bezier, args);

    case 'steps':
      return applyArguments(steps, args);

    default:
      return is.fnc(ease) ? applyArguments(ease, args) : applyArguments(bezier, ease);
  }
} // Strings


function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
} // Arrays


function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];

  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];

      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }

  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
}

function toArray(o) {
  if (is.arr(o)) {
    return o;
  }

  if (is.str(o)) {
    o = selectString(o) || o;
  }

  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }

  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) {
    return a === val;
  });
} // Objects


function cloneObject(o) {
  var clone = {};

  for (var p in o) {
    clone[p] = o[p];
  }

  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }

  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }

  return o;
} // Colors


function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;

  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }

    if (t > 1) {
      t -= 1;
    }

    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
      return q;
    }

    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
  }

  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}

function colorToRgb(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }

  if (is.hex(val)) {
    return hexToRgba(val);
  }

  if (is.hsl(val)) {
    return hslToRgba(val);
  }
} // Units


function getUnit(val) {
  var split = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);

  if (split) {
    return split[2];
  }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') {
    return 'px';
  }

  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) {
    return 'deg';
  }
} // Values


function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }

  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);

  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) {
    return value;
  }

  var cached = cache.CSS[value + unit];

  if (!is.und(cached)) {
    return cached;
  }

  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || is.svg(el) && el[prop])) {
    return 'attribute';
  }

  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return 'transform';
  }

  if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) {
    return 'css';
  }

  if (el[prop] != null) {
    return 'object';
  }
}

function getElementTransforms(el) {
  if (!is.dom(el)) {
    return;
  }

  var str = el.style.transform || '';
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m;

  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
  }

  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;

  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }

  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform':
      return getTransformValue(target, propName, animatable, unit);

    case 'css':
      return getCSSValue(target, propName, unit);

    case 'attribute':
      return getAttribute(target, propName);

    default:
      return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);

  if (!operator) {
    return to;
  }

  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));

  switch (operator[0][0]) {
    case '+':
      return x + y + u;

    case '-':
      return x - y + u;

    case '*':
      return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }

  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  return unit && !/\s/g.test(val) ? unitLess + unit : unitLess;
} // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744


function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
}

function getLineLength(el) {
  return getDistance({
    x: getAttribute(el, 'x1'),
    y: getAttribute(el, 'y1')
  }, {
    x: getAttribute(el, 'x2'),
    y: getAttribute(el, 'y2')
  });
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;

  for (var i = 0; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);

    if (i > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }

    previousPos = currentPos;
  }

  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
} // Path animation


function getTotalLength(el) {
  if (el.getTotalLength) {
    return el.getTotalLength();
  }

  switch (el.tagName.toLowerCase()) {
    case 'circle':
      return getCircleLength(el);

    case 'rect':
      return getRectLength(el);

    case 'line':
      return getLineLength(el);

    case 'polyline':
      return getPolylineLength(el);

    case 'polygon':
      return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
} // Motion path


function getParentSvgEl(el) {
  var parentEl = el.parentNode;

  while (is.svg(parentEl)) {
    parentEl = parentEl.parentNode;

    if (!is.svg(parentEl.parentNode)) {
      break;
    }
  }

  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width / viewBox[2],
    h: height / viewBox[3]
  };
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function (property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    };
  };
}

function getPathProgress(path, progress) {
  function point(offset) {
    if (offset === void 0) offset = 0;
    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }

  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);

  switch (path.property) {
    case 'x':
      return (p.x - svg.x) * svg.w;

    case 'y':
      return (p.y - svg.y) * svg.h;

    case 'angle':
      return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
} // Decompose value


function decomposeValue(val, unit) {
  var rgx = /-?\d*\.?\d+/g;
  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
} // Animatables


function parseTargets(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function (item, pos, self) {
    return self.indexOf(item) === pos;
  });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {
      target: t,
      id: i,
      total: parsed.length,
      transforms: {
        list: getElementTransforms(t)
      }
    };
  });
} // Properties


function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings); // Override duration if easing is a spring

  if (/^spring/.test(settings.easing)) {
    settings.duration = spring(settings.easing);
  }

  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);

    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {
        value: prop
      };
    }
  }

  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : {
      value: v
    }; // Default delay value should only be applied to the first tween

    if (is.und(obj.delay)) {
      obj.delay = !i ? tweenSettings.delay : 0;
    } // Default endDelay value should only be applied to the last tween


    if (is.und(obj.endDelay)) {
      obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
    }

    return obj;
  }).map(function (k) {
    return mergeObjects(k, settings);
  });
}

function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) {
    return Object.keys(key);
  })), function (p) {
    return is.key(p);
  }).reduce(function (a, b) {
    if (a.indexOf(b) < 0) {
      a.push(b);
    }

    return a;
  }, []);
  var properties = {};

  var loop = function loop(i) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};

      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) {
            newKey.value = key[p];
          }
        } else {
          newKey[p] = key[p];
        }
      }

      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) {
    loop(i);
  }

  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;

  if (keyframes) {
    params = mergeObjects(flattenKeyframes(keyframes), params);
  }

  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }

  return properties;
} // Tweens


function normalizeTweenValues(tween, animatable) {
  var t = {};

  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);

    if (is.arr(value)) {
      value = value.map(function (v) {
        return getFunctionValue(v, animatable);
      });

      if (value.length === 1) {
        value = value[0];
      }
    }

    t[p] = value;
  }

  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;

    if (is.und(to)) {
      to = previousValue;
    }

    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isColor = is.col(tween.from.original);

    if (tween.isColor) {
      tween.round = 1;
    }

    previousTween = tween;
    return tween;
  });
} // Tween progress


var setProgressValue = {
  css: function css(t, p, v) {
    return t.style[p] = v;
  },
  attribute: function attribute(t, p, v) {
    return t.setAttribute(p, v);
  },
  object: function object(t, p, v) {
    return t[p] = v;
  },
  transform: function transform(t, p, v, transforms, manual) {
    transforms.list.set(p, v);

    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) {
        str += prop + "(" + value + ") ";
      });
      t.style.transform = str;
    }
  }
}; // Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
} // Animations


function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);

  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    };
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) {
    return !is.und(a);
  });
} // Create Instance


function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;

  var getTlOffset = function getTlOffset(anim) {
    return anim.timelineOffset ? anim.timelineOffset : 0;
  };

  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration;
  })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.delay;
  })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration - anim.endDelay;
  })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
} // Core


var activeInstances = [];
var pausedInstances = [];
var raf;

var engine = function () {
  function play() {
    raf = requestAnimationFrame(step);
  }

  function step(t) {
    var activeInstancesLength = activeInstances.length;

    if (activeInstancesLength) {
      var i = 0;

      while (i < activeInstancesLength) {
        var activeInstance = activeInstances[i];

        if (!activeInstance.paused) {
          activeInstance.tick(t);
        } else {
          var instanceIndex = activeInstances.indexOf(activeInstance);

          if (instanceIndex > -1) {
            activeInstances.splice(instanceIndex, 1);
            activeInstancesLength = activeInstances.length;
          }
        }

        i++;
      }

      play();
    } else {
      raf = cancelAnimationFrame(raf);
    }
  }

  return play;
}();

function handleVisibilityChange() {
  if (document.hidden) {
    activeInstances.forEach(function (ins) {
      return ins.pause();
    });
    pausedInstances = activeInstances.slice(0);
    activeInstances = [];
  } else {
    pausedInstances.forEach(function (ins) {
      return ins.play();
    });
  }
}

document.addEventListener('visibilitychange', handleVisibilityChange); // Public Instance

function anime(params) {
  if (params === void 0) params = {};
  var startTime = 0,
      lastTime = 0,
      now = 0;
  var children,
      childrenLength = 0;
  var resolve = null;

  function makePromise() {
    return window.Promise && new Promise(function (_resolve) {
      return resolve = _resolve;
    });
  }

  var promise = makePromise();
  var instance = createNewInstance(params);

  function toggleInstanceDirection() {
    instance.reversed = !instance.reversed;
    children.forEach(function (child) {
      return child.reversed = instance.reversed;
    });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekCild(time, child) {
    if (child) {
      child.seek(time - child.timelineOffset);
    }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) {
        seekCild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--;) {
        seekCild(time, children[i$1]);
      }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;

    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween

      if (tweenLength) {
        tween = filterArray(tweens, function (t) {
          return insTime < t.end;
        })[0] || tween;
      }

      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;

      for (var n = 0; n < toNumbersLength; n++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;

        if (!tween.isPath) {
          value = fromNumber + eased * (toNumber - fromNumber);
        } else {
          value = getPathProgress(tween.value, eased * toNumber);
        }

        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }

        numbers.push(value);
      } // Manual Array.reduce for better performances


      var stringsLength = strings.length;

      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];

        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];

          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }

      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) {
      instance[cb](instance);
    }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;

    if (children) {
      syncInstanceChildren(insTime);
    }

    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
      setCallback('loopBegin');
    }

    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }

    if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) {
      setAnimationsProgress(insDuration);
    }

    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }

      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }

    instance.currentTime = minMax(insTime, 0, insDuration);

    if (instance.began) {
      setCallback('update');
    }

    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();

      if (instance.remaining) {
        startTime = now;
        setCallback('loopComplete');
        setCallback('loopBegin');

        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      } else {
        instance.paused = true;

        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');

          if ('Promise' in window) {
            resolve();
            promise = makePromise();
          }
        }
      }
    }
  }

  instance.reset = function () {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;

    for (var i = childrenLength; i--;) {
      instance.children[i].reset();
    }

    if (instance.reversed && instance.loop !== true || direction === 'alternate' && instance.loop === 1) {
      instance.remaining++;
    }

    setAnimationsProgress(0);
  }; // Set Value helper


  instance.set = function (targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function (t) {
    now = t;

    if (!startTime) {
      startTime = now;
    }

    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function (time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function () {
    instance.paused = true;
    resetTime();
  };

  instance.play = function () {
    if (!instance.paused) {
      return;
    }

    instance.paused = false;
    activeInstances.push(instance);
    resetTime();

    if (!raf) {
      engine();
    }
  };

  instance.reverse = function () {
    toggleInstanceDirection();
    resetTime();
  };

  instance.restart = function () {
    instance.reset();
    instance.play();
  };

  instance.finished = promise;
  instance.reset();

  if (instance.autoplay) {
    instance.play();
  }

  return instance;
} // Remove targets from animation


function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargets(targets) {
  var targetsArray = parseTargets(targets);

  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    var animations = instance.animations;
    var children = instance.children;
    removeTargetsFromAnimations(targetsArray, animations);

    for (var c = children.length; c--;) {
      var child = children[c];
      var childAnimations = child.animations;
      removeTargetsFromAnimations(targetsArray, childAnimations);

      if (!childAnimations.length && !child.children.length) {
        children.splice(c, 1);
      }
    }

    if (!animations.length && !children.length) {
      instance.pause();
    }
  }
} // Stagger helpers


function stagger(val, params) {
  if (params === void 0) params = {};
  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) {
      fromIndex = 0;
    }

    if (fromCenter) {
      fromIndex = (t - 1) / 2;
    }

    if (fromLast) {
      fromIndex = t - 1;
    }

    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
          var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
          var toX = index % grid[0];
          var toY = Math.floor(index / grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

          if (axis === 'x') {
            value = -distanceX;
          }

          if (axis === 'y') {
            value = -distanceY;
          }

          values.push(value);
        }

        maxValue = Math.max.apply(Math, values);
      }

      if (easing) {
        values = values.map(function (val) {
          return easing(val / maxValue) * maxValue;
        });
      }

      if (direction === 'reverse') {
        values = values.map(function (val) {
          return axis ? val < 0 ? val * -1 : -val : Math.abs(maxValue - val);
        });
      }
    }

    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
  };
} // Timeline


function timeline(params) {
  if (params === void 0) params = {};
  var tl = anime(params);
  tl.duration = 0;

  tl.add = function (instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;

    if (tlIndex > -1) {
      activeInstances.splice(tlIndex, 1);
    }

    function passThrough(ins) {
      ins.passThrough = true;
    }

    for (var i = 0; i < children.length; i++) {
      passThrough(children[i]);
    }

    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();

    if (tl.autoplay) {
      tl.play();
    }

    return tl;
  };

  return tl;
}

anime.version = '3.0.0';
anime.speed = 1;
anime.running = activeInstances;
anime.remove = removeTargets;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;

anime.random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var _default = anime;
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsaWJcXGFuaW1lLmVzLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRJbnN0YW5jZVNldHRpbmdzIiwidXBkYXRlIiwiYmVnaW4iLCJsb29wQmVnaW4iLCJjaGFuZ2VCZWdpbiIsImNoYW5nZSIsImNoYW5nZUNvbXBsZXRlIiwibG9vcENvbXBsZXRlIiwiY29tcGxldGUiLCJsb29wIiwiZGlyZWN0aW9uIiwiYXV0b3BsYXkiLCJ0aW1lbGluZU9mZnNldCIsImRlZmF1bHRUd2VlblNldHRpbmdzIiwiZHVyYXRpb24iLCJkZWxheSIsImVuZERlbGF5IiwiZWFzaW5nIiwicm91bmQiLCJ2YWxpZFRyYW5zZm9ybXMiLCJjYWNoZSIsIkNTUyIsInNwcmluZ3MiLCJtaW5NYXgiLCJ2YWwiLCJtaW4iLCJtYXgiLCJNYXRoIiwic3RyaW5nQ29udGFpbnMiLCJzdHIiLCJ0ZXh0IiwiaW5kZXhPZiIsImFwcGx5QXJndW1lbnRzIiwiZnVuYyIsImFyZ3MiLCJhcHBseSIsImlzIiwiYXJyIiwiYSIsIkFycmF5IiwiaXNBcnJheSIsIm9iaiIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInB0aCIsImhhc093blByb3BlcnR5Iiwic3ZnIiwiU1ZHRWxlbWVudCIsImlucCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJkb20iLCJub2RlVHlwZSIsImZuYyIsInVuZCIsImhleCIsInRlc3QiLCJyZ2IiLCJoc2wiLCJjb2wiLCJrZXkiLCJwYXJzZUVhc2luZ1BhcmFtZXRlcnMiLCJzdHJpbmciLCJtYXRjaCIsImV4ZWMiLCJzcGxpdCIsIm1hcCIsInAiLCJwYXJzZUZsb2F0Iiwic3ByaW5nIiwicGFyYW1zIiwibWFzcyIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJ2ZWxvY2l0eSIsIncwIiwic3FydCIsInpldGEiLCJ3ZCIsImIiLCJzb2x2ZXIiLCJ0IiwicHJvZ3Jlc3MiLCJleHAiLCJjb3MiLCJzaW4iLCJnZXREdXJhdGlvbiIsImNhY2hlZCIsImZyYW1lIiwiZWxhcHNlZCIsInJlc3QiLCJlbGFzdGljIiwiYW1wbGl0dWRlIiwicGVyaW9kIiwicG93IiwiUEkiLCJhc2luIiwic3RlcHMiLCJiZXppZXIiLCJrU3BsaW5lVGFibGVTaXplIiwia1NhbXBsZVN0ZXBTaXplIiwiQSIsImFBMSIsImFBMiIsIkIiLCJDIiwiY2FsY0JlemllciIsImFUIiwiZ2V0U2xvcGUiLCJiaW5hcnlTdWJkaXZpZGUiLCJhWCIsImFBIiwiYUIiLCJtWDEiLCJtWDIiLCJjdXJyZW50WCIsImN1cnJlbnRUIiwiaSIsImFicyIsIm5ld3RvblJhcGhzb25JdGVyYXRlIiwiYUd1ZXNzVCIsImN1cnJlbnRTbG9wZSIsIm1ZMSIsIm1ZMiIsInNhbXBsZVZhbHVlcyIsIkZsb2F0MzJBcnJheSIsImdldFRGb3JYIiwiaW50ZXJ2YWxTdGFydCIsImN1cnJlbnRTYW1wbGUiLCJsYXN0U2FtcGxlIiwiZGlzdCIsImd1ZXNzRm9yVCIsImluaXRpYWxTbG9wZSIsIngiLCJwZW5uZXIiLCJuYW1lcyIsImN1cnZlcyIsIkluIiwiT3V0IiwiSW5PdXQiLCJlYXNlcyIsImxpbmVhciIsImNvb3JkcyIsImZvckVhY2giLCJlYXNlIiwicGFyc2VFYXNpbmdzIiwibmFtZSIsInNlbGVjdFN0cmluZyIsIm5vZGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZSIsImZpbHRlckFycmF5IiwiY2FsbGJhY2siLCJsZW4iLCJsZW5ndGgiLCJ0aGlzQXJnIiwiYXJndW1lbnRzIiwicmVzdWx0IiwicHVzaCIsImZsYXR0ZW5BcnJheSIsInJlZHVjZSIsImNvbmNhdCIsInRvQXJyYXkiLCJvIiwiTm9kZUxpc3QiLCJIVE1MQ29sbGVjdGlvbiIsInNsaWNlIiwiYXJyYXlDb250YWlucyIsInNvbWUiLCJjbG9uZU9iamVjdCIsImNsb25lIiwicmVwbGFjZU9iamVjdFByb3BzIiwibzEiLCJvMiIsIm1lcmdlT2JqZWN0cyIsInJnYlRvUmdiYSIsInJnYlZhbHVlIiwiaGV4VG9SZ2JhIiwiaGV4VmFsdWUiLCJyZ3giLCJyZXBsYWNlIiwibSIsInIiLCJnIiwicGFyc2VJbnQiLCJoc2xUb1JnYmEiLCJoc2xWYWx1ZSIsImgiLCJzIiwibCIsImh1ZTJyZ2IiLCJxIiwiY29sb3JUb1JnYiIsImdldFVuaXQiLCJnZXRUcmFuc2Zvcm1Vbml0IiwicHJvcE5hbWUiLCJnZXRGdW5jdGlvblZhbHVlIiwiYW5pbWF0YWJsZSIsInRhcmdldCIsImlkIiwidG90YWwiLCJnZXRBdHRyaWJ1dGUiLCJlbCIsInByb3AiLCJjb252ZXJ0UHhUb1VuaXQiLCJ2YWx1ZSIsInVuaXQiLCJ2YWx1ZVVuaXQiLCJiYXNlbGluZSIsInRlbXBFbCIsImNyZWF0ZUVsZW1lbnQiLCJ0YWdOYW1lIiwicGFyZW50RWwiLCJwYXJlbnROb2RlIiwiYm9keSIsImFwcGVuZENoaWxkIiwic3R5bGUiLCJwb3NpdGlvbiIsIndpZHRoIiwiZmFjdG9yIiwib2Zmc2V0V2lkdGgiLCJyZW1vdmVDaGlsZCIsImNvbnZlcnRlZFVuaXQiLCJnZXRDU1NWYWx1ZSIsInVwcGVyY2FzZVByb3BOYW1lIiwidG9Mb3dlckNhc2UiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImdldEFuaW1hdGlvblR5cGUiLCJnZXRFbGVtZW50VHJhbnNmb3JtcyIsInRyYW5zZm9ybSIsInJlZyIsInRyYW5zZm9ybXMiLCJNYXAiLCJzZXQiLCJnZXRUcmFuc2Zvcm1WYWx1ZSIsImRlZmF1bHRWYWwiLCJnZXQiLCJsaXN0IiwiZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZSIsImdldFJlbGF0aXZlVmFsdWUiLCJ0byIsImZyb20iLCJvcGVyYXRvciIsInUiLCJ5IiwidmFsaWRhdGVWYWx1ZSIsIm9yaWdpbmFsVW5pdCIsInVuaXRMZXNzIiwic3Vic3RyIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZ2V0Q2lyY2xlTGVuZ3RoIiwiZ2V0UmVjdExlbmd0aCIsImdldExpbmVMZW5ndGgiLCJnZXRQb2x5bGluZUxlbmd0aCIsInBvaW50cyIsInRvdGFsTGVuZ3RoIiwicHJldmlvdXNQb3MiLCJudW1iZXJPZkl0ZW1zIiwiY3VycmVudFBvcyIsImdldEl0ZW0iLCJnZXRQb2x5Z29uTGVuZ3RoIiwiZ2V0VG90YWxMZW5ndGgiLCJzZXREYXNob2Zmc2V0IiwicGF0aExlbmd0aCIsInNldEF0dHJpYnV0ZSIsImdldFBhcmVudFN2Z0VsIiwiZ2V0UGFyZW50U3ZnIiwicGF0aEVsIiwic3ZnRGF0YSIsInBhcmVudFN2Z0VsIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInZpZXdCb3hBdHRyIiwiaGVpZ2h0Iiwidmlld0JveCIsInciLCJnZXRQYXRoIiwicGF0aCIsInBlcmNlbnQiLCJwcm9wZXJ0eSIsImdldFBhdGhQcm9ncmVzcyIsInBvaW50Iiwib2Zmc2V0IiwiZ2V0UG9pbnRBdExlbmd0aCIsInAwIiwiYXRhbjIiLCJkZWNvbXBvc2VWYWx1ZSIsIm9yaWdpbmFsIiwibnVtYmVycyIsIk51bWJlciIsInN0cmluZ3MiLCJwYXJzZVRhcmdldHMiLCJ0YXJnZXRzIiwidGFyZ2V0c0FycmF5IiwiaXRlbSIsInBvcyIsInNlbGYiLCJnZXRBbmltYXRhYmxlcyIsInBhcnNlZCIsIm5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zIiwidHdlZW5TZXR0aW5ncyIsInNldHRpbmdzIiwiaXNGcm9tVG8iLCJwcm9wQXJyYXkiLCJ2IiwiayIsImZsYXR0ZW5LZXlmcmFtZXMiLCJrZXlmcmFtZXMiLCJwcm9wZXJ0eU5hbWVzIiwia2V5cyIsInByb3BlcnRpZXMiLCJuZXdLZXkiLCJnZXRQcm9wZXJ0aWVzIiwidHdlZW5zIiwibm9ybWFsaXplVHdlZW5WYWx1ZXMiLCJ0d2VlbiIsIm5vcm1hbGl6ZVR3ZWVucyIsInByZXZpb3VzVHdlZW4iLCJ0d2VlblZhbHVlIiwidG9Vbml0Iiwib3JpZ2luYWxWYWx1ZSIsInByZXZpb3VzVmFsdWUiLCJmcm9tVW5pdCIsInN0YXJ0IiwiZW5kIiwiaXNQYXRoIiwiaXNDb2xvciIsInNldFByb2dyZXNzVmFsdWUiLCJjc3MiLCJhdHRyaWJ1dGUiLCJvYmplY3QiLCJtYW51YWwiLCJsYXN0Iiwic2V0VGFyZ2V0c1ZhbHVlIiwiYW5pbWF0YWJsZXMiLCJhbmltVHlwZSIsImNyZWF0ZUFuaW1hdGlvbiIsImxhc3RUd2VlbiIsInR5cGUiLCJnZXRBbmltYXRpb25zIiwiZ2V0SW5zdGFuY2VUaW1pbmdzIiwiYW5pbWF0aW9ucyIsImFuaW1MZW5ndGgiLCJnZXRUbE9mZnNldCIsImFuaW0iLCJ0aW1pbmdzIiwiaW5zdGFuY2VJRCIsImNyZWF0ZU5ld0luc3RhbmNlIiwiaW5zdGFuY2VTZXR0aW5ncyIsImNoaWxkcmVuIiwiYWN0aXZlSW5zdGFuY2VzIiwicGF1c2VkSW5zdGFuY2VzIiwicmFmIiwiZW5naW5lIiwicGxheSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0ZXAiLCJhY3RpdmVJbnN0YW5jZXNMZW5ndGgiLCJhY3RpdmVJbnN0YW5jZSIsInBhdXNlZCIsInRpY2siLCJpbnN0YW5jZUluZGV4Iiwic3BsaWNlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlIiwiaGlkZGVuIiwiaW5zIiwicGF1c2UiLCJhZGRFdmVudExpc3RlbmVyIiwiYW5pbWUiLCJzdGFydFRpbWUiLCJsYXN0VGltZSIsIm5vdyIsImNoaWxkcmVuTGVuZ3RoIiwicmVzb2x2ZSIsIm1ha2VQcm9taXNlIiwid2luZG93IiwiUHJvbWlzZSIsIl9yZXNvbHZlIiwicHJvbWlzZSIsImluc3RhbmNlIiwidG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24iLCJyZXZlcnNlZCIsImNoaWxkIiwiYWRqdXN0VGltZSIsInRpbWUiLCJyZXNldFRpbWUiLCJjdXJyZW50VGltZSIsInNwZWVkIiwic2Vla0NpbGQiLCJzZWVrIiwic3luY0luc3RhbmNlQ2hpbGRyZW4iLCJyZXZlcnNlUGxheWJhY2siLCJpJDEiLCJzZXRBbmltYXRpb25zUHJvZ3Jlc3MiLCJpbnNUaW1lIiwiYW5pbWF0aW9uc0xlbmd0aCIsInR3ZWVuTGVuZ3RoIiwiZWFzZWQiLCJpc05hTiIsInRvTnVtYmVyc0xlbmd0aCIsIm4iLCJ0b051bWJlciIsImZyb21OdW1iZXIiLCJzdHJpbmdzTGVuZ3RoIiwibiQxIiwiY3VycmVudFZhbHVlIiwic2V0Q2FsbGJhY2siLCJjYiIsInBhc3NUaHJvdWdoIiwiY291bnRJdGVyYXRpb24iLCJyZW1haW5pbmciLCJzZXRJbnN0YW5jZVByb2dyZXNzIiwiZW5naW5lVGltZSIsImluc0R1cmF0aW9uIiwiaW5zRGVsYXkiLCJpbnNFbmREZWxheSIsImJlZ2FuIiwiY2hhbmdlQmVnYW4iLCJjaGFuZ2VDb21wbGV0ZWQiLCJjb21wbGV0ZWQiLCJyZXNldCIsInJldmVyc2UiLCJyZXN0YXJ0IiwiZmluaXNoZWQiLCJyZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnMiLCJyZW1vdmVUYXJnZXRzIiwiYyIsImNoaWxkQW5pbWF0aW9ucyIsInN0YWdnZXIiLCJncmlkIiwiYXhpcyIsImZyb21JbmRleCIsImZyb21GaXJzdCIsImZyb21DZW50ZXIiLCJmcm9tTGFzdCIsImlzUmFuZ2UiLCJ2YWwxIiwidmFsMiIsInZhbHVlcyIsIm1heFZhbHVlIiwiaW5kZXgiLCJmcm9tWCIsImZyb21ZIiwiZmxvb3IiLCJ0b1giLCJ0b1kiLCJkaXN0YW5jZVgiLCJkaXN0YW5jZVkiLCJzcGFjaW5nIiwidGltZWxpbmUiLCJ0bCIsImFkZCIsImluc3RhbmNlUGFyYW1zIiwidGxJbmRleCIsImluc1BhcmFtcyIsInRsRHVyYXRpb24iLCJ2ZXJzaW9uIiwicnVubmluZyIsInJlbW92ZSIsImNvbnZlcnRQeCIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQUlBLHVCQUF1QixHQUFHO0FBQzVCQyxFQUFBQSxNQUFNLEVBQUUsSUFEb0I7QUFFNUJDLEVBQUFBLEtBQUssRUFBRSxJQUZxQjtBQUc1QkMsRUFBQUEsU0FBUyxFQUFFLElBSGlCO0FBSTVCQyxFQUFBQSxXQUFXLEVB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ekJEOztBQTBCQSxTQUFPQSxFQUFQO0FBQ0Q7O0FBRURsRixLQUFLLENBQUN3RixPQUFOLEdBQWdCLE9BQWhCO0FBQ0F4RixLQUFLLENBQUNtQixLQUFOLEdBQWMsQ0FBZDtBQUNBbkIsS0FBSyxDQUFDeUYsT0FBTixHQUFnQjVHLGVBQWhCO0FBQ0FtQixLQUFLLENBQUMwRixNQUFOLEdBQWVqQyxhQUFmO0FBQ0F6RCxLQUFLLENBQUN2SSxHQUFOLEdBQVlFLHNCQUFaO0FBQ0FxSSxLQUFLLENBQUMxSSxHQUFOLEdBQVlzRyxlQUFaO0FBQ0FvQyxLQUFLLENBQUMyRixTQUFOLEdBQWtCblEsZUFBbEI7QUFDQXdLLEtBQUssQ0FBQzVGLElBQU4sR0FBYUQsT0FBYjtBQUNBNkYsS0FBSyxDQUFDM0csYUFBTixHQUFzQkEsYUFBdEI7QUFDQTJHLEtBQUssQ0FBQzRELE9BQU4sR0FBZ0JBLE9BQWhCO0FBQ0E1RCxLQUFLLENBQUNpRixRQUFOLEdBQWlCQSxRQUFqQjtBQUNBakYsS0FBSyxDQUFDclcsTUFBTixHQUFlaUksWUFBZjtBQUNBb08sS0FBSyxDQUFDL08sTUFBTixHQUFlQSxNQUFmOztBQUNBK08sS0FBSyxDQUFDNEYsTUFBTixHQUFlLFVBQVV6YixHQUFWLEVBQWVDLEdBQWYsRUFBb0I7QUFBRSxTQUFPQyxJQUFJLENBQUNzYSxLQUFMLENBQVd0YSxJQUFJLENBQUN1YixNQUFMLE1BQWlCeGIsR0FBRyxHQUFHRCxHQUFOLEdBQVksQ0FBN0IsQ0FBWCxJQUE4Q0EsR0FBckQ7QUFBMkQsQ0FBaEc7O2VBRWU2ViIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIGFuaW1lLmpzIHYzLjAuMFxuICogKGMpIDIwMTkgSnVsaWFuIEdhcm5pZXJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogYW5pbWVqcy5jb21cbiAqL1xuXG4vLyBEZWZhdWx0c1xuXG52YXIgZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MgPSB7XG4gIHVwZGF0ZTogbnVsbCxcbiAgYmVnaW46IG51bGwsXG4gIGxvb3BCZWdpbjogbnVsbCxcbiAgY2hhbmdlQmVnaW46IG51bGwsXG4gIGNoYW5nZTogbnVsbCxcbiAgY2hhbmdlQ29tcGxldGU6IG51bGwsXG4gIGxvb3BDb21wbGV0ZTogbnVsbCxcbiAgY29tcGxldGU6IG51bGwsXG4gIGxvb3A6IDEsXG4gIGRpcmVjdGlvbjogJ25vcm1hbCcsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICB0aW1lbGluZU9mZnNldDogMFxufTtcblxudmFyIGRlZmF1bHRUd2VlblNldHRpbmdzID0ge1xuICBkdXJhdGlvbjogMTAwMCxcbiAgZGVsYXk6IDAsXG4gIGVuZERlbGF5OiAwLFxuICBlYXNpbmc6ICdlYXNlT3V0RWxhc3RpYygxLCAuNSknLFxuICByb3VuZDogMFxufTtcblxudmFyIHZhbGlkVHJhbnNmb3JtcyA9IFsndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJywgJ3RyYW5zbGF0ZVonLCAncm90YXRlJywgJ3JvdGF0ZVgnLCAncm90YXRlWScsICdyb3RhdGVaJywgJ3NjYWxlJywgJ3NjYWxlWCcsICdzY2FsZVknLCAnc2NhbGVaJywgJ3NrZXcnLCAnc2tld1gnLCAnc2tld1knLCAncGVyc3BlY3RpdmUnXTtcblxuLy8gQ2FjaGluZ1xuXG52YXIgY2FjaGUgPSB7XG4gIENTUzoge30sXG4gIHNwcmluZ3M6IHt9XG59O1xuXG4vLyBVdGlsc1xuXG5mdW5jdGlvbiBtaW5NYXgodmFsLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsLCBtaW4pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdDb250YWlucyhzdHIsIHRleHQpIHtcbiAgcmV0dXJuIHN0ci5pbmRleE9mKHRleHQpID4gLTE7XG59XG5cbmZ1bmN0aW9uIGFwcGx5QXJndW1lbnRzKGZ1bmMsIGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XG59XG5cbnZhciBpcyA9IHtcbiAgYXJyOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gQXJyYXkuaXNBcnJheShhKTsgfSxcbiAgb2JqOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gc3RyaW5nQ29udGFpbnMoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpLCAnT2JqZWN0Jyk7IH0sXG4gIHB0aDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGlzLm9iaihhKSAmJiBhLmhhc093blByb3BlcnR5KCd0b3RhbExlbmd0aCcpOyB9LFxuICBzdmc6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhIGluc3RhbmNlb2YgU1ZHRWxlbWVudDsgfSxcbiAgaW5wOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQ7IH0sXG4gIGRvbTogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEubm9kZVR5cGUgfHwgaXMuc3ZnKGEpOyB9LFxuICBzdHI6IGZ1bmN0aW9uIChhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ3N0cmluZyc7IH0sXG4gIGZuYzogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHR5cGVvZiBhID09PSAnZnVuY3Rpb24nOyB9LFxuICB1bmQ6IGZ1bmN0aW9uIChhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCc7IH0sXG4gIGhleDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIC8oXiNbMC05QS1GXXs2fSQpfCheI1swLTlBLUZdezN9JCkvaS50ZXN0KGEpOyB9LFxuICByZ2I6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAvXnJnYi8udGVzdChhKTsgfSxcbiAgaHNsOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gL15oc2wvLnRlc3QoYSk7IH0sXG4gIGNvbDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIChpcy5oZXgoYSkgfHwgaXMucmdiKGEpIHx8IGlzLmhzbChhKSk7IH0sXG4gIGtleTogZnVuY3Rpb24gKGEpIHsgcmV0dXJuICFkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiAhZGVmYXVsdFR3ZWVuU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgYSAhPT0gJ3RhcmdldHMnICYmIGEgIT09ICdrZXlmcmFtZXMnOyB9XG59O1xuXG4vLyBFYXNpbmdzXG5cbmZ1bmN0aW9uIHBhcnNlRWFzaW5nUGFyYW1ldGVycyhzdHJpbmcpIHtcbiAgdmFyIG1hdGNoID0gL1xcKChbXildKylcXCkvLmV4ZWMoc3RyaW5nKTtcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0uc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKHApIHsgcmV0dXJuIHBhcnNlRmxvYXQocCk7IH0pIDogW107XG59XG5cbi8vIFNwcmluZyBzb2x2ZXIgaW5zcGlyZWQgYnkgV2Via2l0IENvcHlyaWdodCDCqSAyMDE2IEFwcGxlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gaHR0cHM6Ly93ZWJraXQub3JnL2RlbW9zL3NwcmluZy9zcHJpbmcuanNcblxuZnVuY3Rpb24gc3ByaW5nKHN0cmluZywgZHVyYXRpb24pIHtcblxuICB2YXIgcGFyYW1zID0gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKHN0cmluZyk7XG4gIHZhciBtYXNzID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMF0pID8gMSA6IHBhcmFtc1swXSwgLjEsIDEwMCk7XG4gIHZhciBzdGlmZm5lc3MgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1sxXSkgPyAxMDAgOiBwYXJhbXNbMV0sIC4xLCAxMDApO1xuICB2YXIgZGFtcGluZyA9IG1pbk1heChpcy51bmQocGFyYW1zWzJdKSA/IDEwIDogcGFyYW1zWzJdLCAuMSwgMTAwKTtcbiAgdmFyIHZlbG9jaXR5ID0gIG1pbk1heChpcy51bmQocGFyYW1zWzNdKSA/IDAgOiBwYXJhbXNbM10sIC4xLCAxMDApO1xuICB2YXIgdzAgPSBNYXRoLnNxcnQoc3RpZmZuZXNzIC8gbWFzcyk7XG4gIHZhciB6ZXRhID0gZGFtcGluZyAvICgyICogTWF0aC5zcXJ0KHN0aWZmbmVzcyAqIG1hc3MpKTtcbiAgdmFyIHdkID0gemV0YSA8IDEgPyB3MCAqIE1hdGguc3FydCgxIC0gemV0YSAqIHpldGEpIDogMDtcbiAgdmFyIGEgPSAxO1xuICB2YXIgYiA9IHpldGEgPCAxID8gKHpldGEgKiB3MCArIC12ZWxvY2l0eSkgLyB3ZCA6IC12ZWxvY2l0eSArIHcwO1xuXG4gIGZ1bmN0aW9uIHNvbHZlcih0KSB7XG4gICAgdmFyIHByb2dyZXNzID0gZHVyYXRpb24gPyAoZHVyYXRpb24gKiB0KSAvIDEwMDAgOiB0O1xuICAgIGlmICh6ZXRhIDwgMSkge1xuICAgICAgcHJvZ3Jlc3MgPSBNYXRoLmV4cCgtcHJvZ3Jlc3MgKiB6ZXRhICogdzApICogKGEgKiBNYXRoLmNvcyh3ZCAqIHByb2dyZXNzKSArIGIgKiBNYXRoLnNpbih3ZCAqIHByb2dyZXNzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2dyZXNzID0gKGEgKyBiICogcHJvZ3Jlc3MpICogTWF0aC5leHAoLXByb2dyZXNzICogdzApO1xuICAgIH1cbiAgICBpZiAodCA9PT0gMCB8fCB0ID09PSAxKSB7IHJldHVybiB0OyB9XG4gICAgcmV0dXJuIDEgLSBwcm9ncmVzcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgIHZhciBjYWNoZWQgPSBjYWNoZS5zcHJpbmdzW3N0cmluZ107XG4gICAgaWYgKGNhY2hlZCkgeyByZXR1cm4gY2FjaGVkOyB9XG4gICAgdmFyIGZyYW1lID0gMS82O1xuICAgIHZhciBlbGFwc2VkID0gMDtcbiAgICB2YXIgcmVzdCA9IDA7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgZWxhcHNlZCArPSBmcmFtZTtcbiAgICAgIGlmIChzb2x2ZXIoZWxhcHNlZCkgPT09IDEpIHtcbiAgICAgICAgcmVzdCsrO1xuICAgICAgICBpZiAocmVzdCA+PSAxNikgeyBicmVhazsgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBkdXJhdGlvbiA9IGVsYXBzZWQgKiBmcmFtZSAqIDEwMDA7XG4gICAgY2FjaGUuc3ByaW5nc1tzdHJpbmddID0gZHVyYXRpb247XG4gICAgcmV0dXJuIGR1cmF0aW9uO1xuICB9XG5cbiAgcmV0dXJuIGR1cmF0aW9uID8gc29sdmVyIDogZ2V0RHVyYXRpb247XG5cbn1cblxuLy8gRWxhc3RpYyBlYXNpbmcgYWRhcHRlZCBmcm9tIGpRdWVyeVVJIGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL2Vhc2luZ3MvXG5cbmZ1bmN0aW9uIGVsYXN0aWMoYW1wbGl0dWRlLCBwZXJpb2QpIHtcbiAgaWYgKCBhbXBsaXR1ZGUgPT09IHZvaWQgMCApIGFtcGxpdHVkZSA9IDE7XG4gIGlmICggcGVyaW9kID09PSB2b2lkIDAgKSBwZXJpb2QgPSAuNTtcblxuICB2YXIgYSA9IG1pbk1heChhbXBsaXR1ZGUsIDEsIDEwKTtcbiAgdmFyIHAgPSBtaW5NYXgocGVyaW9kLCAuMSwgMik7XG4gIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiAodCA9PT0gMCB8fCB0ID09PSAxKSA/IHQgOlxuICAgICAgLWEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpICogTWF0aC5zaW4oKCgodCAtIDEpIC0gKHAgLyAoTWF0aC5QSSAqIDIpICogTWF0aC5hc2luKDEgLyBhKSkpICogKE1hdGguUEkgKiAyKSkgLyBwKTtcbiAgfVxufVxuXG4vLyBCYXNpYyBzdGVwcyBlYXNpbmcgaW1wbGVtZW50YXRpb24gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvQ1NTL3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXG5cbmZ1bmN0aW9uIHN0ZXBzKHN0ZXBzKSB7XG4gIGlmICggc3RlcHMgPT09IHZvaWQgMCApIHN0ZXBzID0gMTA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiBNYXRoLnJvdW5kKHQgKiBzdGVwcykgKiAoMSAvIHN0ZXBzKTsgfTtcbn1cblxuLy8gQmV6aWVyRWFzaW5nIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZ1xuXG52YXIgYmV6aWVyID0gKGZ1bmN0aW9uICgpIHtcblxuICB2YXIga1NwbGluZVRhYmxlU2l6ZSA9IDExO1xuICB2YXIga1NhbXBsZVN0ZXBTaXplID0gMS4wIC8gKGtTcGxpbmVUYWJsZVNpemUgLSAxLjApO1xuXG4gIGZ1bmN0aW9uIEEoYUExLCBhQTIpIHsgcmV0dXJuIDEuMCAtIDMuMCAqIGFBMiArIDMuMCAqIGFBMSB9XG4gIGZ1bmN0aW9uIEIoYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIGFBMiAtIDYuMCAqIGFBMSB9XG4gIGZ1bmN0aW9uIEMoYUExKSAgICAgIHsgcmV0dXJuIDMuMCAqIGFBMSB9XG5cbiAgZnVuY3Rpb24gY2FsY0JlemllcihhVCwgYUExLCBhQTIpIHsgcmV0dXJuICgoQShhQTEsIGFBMikgKiBhVCArIEIoYUExLCBhQTIpKSAqIGFUICsgQyhhQTEpKSAqIGFUIH1cbiAgZnVuY3Rpb24gZ2V0U2xvcGUoYVQsIGFBMSwgYUEyKSB7IHJldHVybiAzLjAgKiBBKGFBMSwgYUEyKSAqIGFUICogYVQgKyAyLjAgKiBCKGFBMSwgYUEyKSAqIGFUICsgQyhhQTEpIH1cblxuICBmdW5jdGlvbiBiaW5hcnlTdWJkaXZpZGUoYVgsIGFBLCBhQiwgbVgxLCBtWDIpIHtcbiAgICB2YXIgY3VycmVudFgsIGN1cnJlbnRULCBpID0gMDtcbiAgICBkbyB7XG4gICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkgeyBhQiA9IGN1cnJlbnRUOyB9IGVsc2UgeyBhQSA9IGN1cnJlbnRUOyB9XG4gICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gMC4wMDAwMDAxICYmICsraSA8IDEwKTtcbiAgICByZXR1cm4gY3VycmVudFQ7XG4gIH1cblxuICBmdW5jdGlvbiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgYUd1ZXNzVCwgbVgxLCBtWDIpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7ICsraSkge1xuICAgICAgdmFyIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkgeyByZXR1cm4gYUd1ZXNzVDsgfVxuICAgICAgdmFyIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgfVxuICAgIHJldHVybiBhR3Vlc3NUO1xuICB9XG5cbiAgZnVuY3Rpb24gYmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuXG4gICAgaWYgKCEoMCA8PSBtWDEgJiYgbVgxIDw9IDEgJiYgMCA8PSBtWDIgJiYgbVgyIDw9IDEpKSB7IHJldHVybjsgfVxuICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KGtTcGxpbmVUYWJsZVNpemUpO1xuXG4gICAgaWYgKG1YMSAhPT0gbVkxIHx8IG1YMiAhPT0gbVkyKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtTcGxpbmVUYWJsZVNpemU7ICsraSkge1xuICAgICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRURm9yWChhWCkge1xuXG4gICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDA7XG4gICAgICB2YXIgY3VycmVudFNhbXBsZSA9IDE7XG4gICAgICB2YXIgbGFzdFNhbXBsZSA9IGtTcGxpbmVUYWJsZVNpemUgLSAxO1xuXG4gICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IGtTYW1wbGVTdGVwU2l6ZTtcbiAgICAgIH1cblxuICAgICAgLS1jdXJyZW50U2FtcGxlO1xuXG4gICAgICB2YXIgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgICB2YXIgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBrU2FtcGxlU3RlcFNpemU7XG4gICAgICB2YXIgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG5cbiAgICAgIGlmIChpbml0aWFsU2xvcGUgPj0gMC4wMDEpIHtcbiAgICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7IHJldHVybiB4OyB9XG4gICAgICBpZiAoeCA9PT0gMCB8fCB4ID09PSAxKSB7IHJldHVybiB4OyB9XG4gICAgICByZXR1cm4gY2FsY0JlemllcihnZXRURm9yWCh4KSwgbVkxLCBtWTIpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIGJlemllcjtcblxufSkoKTtcblxudmFyIHBlbm5lciA9IChmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIG5hbWVzID0gWydRdWFkJywgJ0N1YmljJywgJ1F1YXJ0JywgJ1F1aW50JywgJ1NpbmUnLCAnRXhwbycsICdDaXJjJywgJ0JhY2snLCAnRWxhc3RpYyddO1xuXG4gIC8vIEFwcHJveGltYXRlZCBQZW5uZXIgZXF1YXRpb25zIGh0dHA6Ly9tYXR0aGV3bGVpbi5jb20vY2Vhc2VyL1xuXG4gIHZhciBjdXJ2ZXMgPSB7XG4gICAgSW46IFtcbiAgICAgIFswLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMF0sIC8qIGluUXVhZCAqL1xuICAgICAgWzAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwXSwgLyogaW5DdWJpYyAqL1xuICAgICAgWzAuODk1LCAwLjAzMCwgMC42ODUsIDAuMjIwXSwgLyogaW5RdWFydCAqL1xuICAgICAgWzAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwXSwgLyogaW5RdWludCAqL1xuICAgICAgWzAuNDcwLCAwLjAwMCwgMC43NDUsIDAuNzE1XSwgLyogaW5TaW5lICovXG4gICAgICBbMC45NTAsIDAuMDUwLCAwLjc5NSwgMC4wMzVdLCAvKiBpbkV4cG8gKi9cbiAgICAgIFswLjYwMCwgMC4wNDAsIDAuOTgwLCAwLjMzNV0sIC8qIGluQ2lyYyAqL1xuICAgICAgWzAuNjAwLC0wLjI4MCwgMC43MzUsIDAuMDQ1XSwgLyogaW5CYWNrICovXG4gICAgICBlbGFzdGljIC8qIGluRWxhc3RpYyAqL1xuICAgIF0sXG4gICAgT3V0OiBbXG4gICAgICBbMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDBdLCAvKiBvdXRRdWFkICovXG4gICAgICBbMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDBdLCAvKiBvdXRDdWJpYyAqL1xuICAgICAgWzAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwXSwgLyogb3V0UXVhcnQgKi9cbiAgICAgIFswLjIzMCwgMS4wMDAsIDAuMzIwLCAxLjAwMF0sIC8qIG91dFF1aW50ICovXG4gICAgICBbMC4zOTAsIDAuNTc1LCAwLjU2NSwgMS4wMDBdLCAvKiBvdXRTaW5lICovXG4gICAgICBbMC4xOTAsIDEuMDAwLCAwLjIyMCwgMS4wMDBdLCAvKiBvdXRFeHBvICovXG4gICAgICBbMC4wNzUsIDAuODIwLCAwLjE2NSwgMS4wMDBdLCAvKiBvdXRDaXJjICovXG4gICAgICBbMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4yNzVdLCAvKiBvdXRCYWNrICovXG4gICAgICBmdW5jdGlvbiAoYSwgcCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIDEgLSBlbGFzdGljKGEsIHApKDEgLSB0KTsgfTsgfSAvKiBvdXRFbGFzdGljICovXG4gICAgXSxcbiAgICBJbk91dDogW1xuICAgICAgWzAuNDU1LCAwLjAzMCwgMC41MTUsIDAuOTU1XSwgLyogaW5PdXRRdWFkICovXG4gICAgICBbMC42NDUsIDAuMDQ1LCAwLjM1NSwgMS4wMDBdLCAvKiBpbk91dEN1YmljICovXG4gICAgICBbMC43NzAsIDAuMDAwLCAwLjE3NSwgMS4wMDBdLCAvKiBpbk91dFF1YXJ0ICovXG4gICAgICBbMC44NjAsIDAuMDAwLCAwLjA3MCwgMS4wMDBdLCAvKiBpbk91dFF1aW50ICovXG4gICAgICBbMC40NDUsIDAuMDUwLCAwLjU1MCwgMC45NTBdLCAvKiBpbk91dFNpbmUgKi9cbiAgICAgIFsxLjAwMCwgMC4wMDAsIDAuMDAwLCAxLjAwMF0sIC8qIGluT3V0RXhwbyAqL1xuICAgICAgWzAuNzg1LCAwLjEzNSwgMC4xNTAsIDAuODYwXSwgLyogaW5PdXRDaXJjICovXG4gICAgICBbMC42ODAsLTAuNTUwLCAwLjI2NSwgMS41NTBdLCAvKiBpbk91dEJhY2sgKi9cbiAgICAgIGZ1bmN0aW9uIChhLCBwKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdCA8IC41ID8gZWxhc3RpYyhhLCBwKSh0ICogMikgLyAyIDogMSAtIGVsYXN0aWMoYSwgcCkodCAqIC0yICsgMikgLyAyOyB9OyB9IC8qIGluT3V0RWxhc3RpYyAqL1xuICAgIF1cbiAgfTtcblxuICB2YXIgZWFzZXMgPSB7XG4gICAgbGluZWFyOiBbMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTBdXG4gIH07XG5cbiAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGNvb3JkcyApIHtcbiAgICBjdXJ2ZXNbY29vcmRzXS5mb3JFYWNoKGZ1bmN0aW9uIChlYXNlLCBpKSB7XG4gICAgICBlYXNlc1snZWFzZScrY29vcmRzK25hbWVzW2ldXSA9IGVhc2U7XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgY29vcmRzIGluIGN1cnZlcykgbG9vcCggY29vcmRzICk7XG5cbiAgcmV0dXJuIGVhc2VzO1xuXG59KSgpO1xuXG5mdW5jdGlvbiBwYXJzZUVhc2luZ3MoZWFzaW5nLCBkdXJhdGlvbikge1xuICBpZiAoaXMuZm5jKGVhc2luZykpIHsgcmV0dXJuIGVhc2luZzsgfVxuICB2YXIgbmFtZSA9IGVhc2luZy5zcGxpdCgnKCcpWzBdO1xuICB2YXIgZWFzZSA9IHBlbm5lcltuYW1lXTtcbiAgdmFyIGFyZ3MgPSBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoZWFzaW5nKTtcbiAgc3dpdGNoIChuYW1lKSB7XG4gICAgY2FzZSAnc3ByaW5nJyA6IHJldHVybiBzcHJpbmcoZWFzaW5nLCBkdXJhdGlvbik7XG4gICAgY2FzZSAnY3ViaWNCZXppZXInIDogcmV0dXJuIGFwcGx5QXJndW1lbnRzKGJlemllciwgYXJncyk7XG4gICAgY2FzZSAnc3RlcHMnIDogcmV0dXJuIGFwcGx5QXJndW1lbnRzKHN0ZXBzLCBhcmdzKTtcbiAgICBkZWZhdWx0IDogcmV0dXJuIGlzLmZuYyhlYXNlKSA/IGFwcGx5QXJndW1lbnRzKGVhc2UsIGFyZ3MpIDogYXBwbHlBcmd1bWVudHMoYmV6aWVyLCBlYXNlKTtcbiAgfVxufVxuXG4vLyBTdHJpbmdzXG5cbmZ1bmN0aW9uIHNlbGVjdFN0cmluZyhzdHIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHN0cik7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9IGNhdGNoKGUpIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLy8gQXJyYXlzXG5cbmZ1bmN0aW9uIGZpbHRlckFycmF5KGFyciwgY2FsbGJhY2spIHtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA+PSAyID8gYXJndW1lbnRzWzFdIDogdm9pZCAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoaSBpbiBhcnIpIHtcbiAgICAgIHZhciB2YWwgPSBhcnJbaV07XG4gICAgICBpZiAoY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWwsIGksIGFycikpIHtcbiAgICAgICAgcmVzdWx0LnB1c2godmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbkFycmF5KGFycikge1xuICByZXR1cm4gYXJyLnJlZHVjZShmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5jb25jYXQoaXMuYXJyKGIpID8gZmxhdHRlbkFycmF5KGIpIDogYik7IH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheShvKSB7XG4gIGlmIChpcy5hcnIobykpIHsgcmV0dXJuIG87IH1cbiAgaWYgKGlzLnN0cihvKSkgeyBvID0gc2VsZWN0U3RyaW5nKG8pIHx8IG87IH1cbiAgaWYgKG8gaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBvIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pIHsgcmV0dXJuIFtdLnNsaWNlLmNhbGwobyk7IH1cbiAgcmV0dXJuIFtvXTtcbn1cblxuZnVuY3Rpb24gYXJyYXlDb250YWlucyhhcnIsIHZhbCkge1xuICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgPT09IHZhbDsgfSk7XG59XG5cbi8vIE9iamVjdHNcblxuZnVuY3Rpb24gY2xvbmVPYmplY3Qobykge1xuICB2YXIgY2xvbmUgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBvKSB7IGNsb25lW3BdID0gb1twXTsgfVxuICByZXR1cm4gY2xvbmU7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VPYmplY3RQcm9wcyhvMSwgbzIpIHtcbiAgdmFyIG8gPSBjbG9uZU9iamVjdChvMSk7XG4gIGZvciAodmFyIHAgaW4gbzEpIHsgb1twXSA9IG8yLmhhc093blByb3BlcnR5KHApID8gbzJbcF0gOiBvMVtwXTsgfVxuICByZXR1cm4gbztcbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3RzKG8xLCBvMikge1xuICB2YXIgbyA9IGNsb25lT2JqZWN0KG8xKTtcbiAgZm9yICh2YXIgcCBpbiBvMikgeyBvW3BdID0gaXMudW5kKG8xW3BdKSA/IG8yW3BdIDogbzFbcF07IH1cbiAgcmV0dXJuIG87XG59XG5cbi8vIENvbG9yc1xuXG5mdW5jdGlvbiByZ2JUb1JnYmEocmdiVmFsdWUpIHtcbiAgdmFyIHJnYiA9IC9yZ2JcXCgoXFxkKyxcXHMqW1xcZF0rLFxccypbXFxkXSspXFwpL2cuZXhlYyhyZ2JWYWx1ZSk7XG4gIHJldHVybiByZ2IgPyAoXCJyZ2JhKFwiICsgKHJnYlsxXSkgKyBcIiwxKVwiKSA6IHJnYlZhbHVlO1xufVxuXG5mdW5jdGlvbiBoZXhUb1JnYmEoaGV4VmFsdWUpIHtcbiAgdmFyIHJneCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XG4gIHZhciBoZXggPSBoZXhWYWx1ZS5yZXBsYWNlKHJneCwgZnVuY3Rpb24gKG0sIHIsIGcsIGIpIHsgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjsgfSApO1xuICB2YXIgcmdiID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIHZhciByID0gcGFyc2VJbnQocmdiWzFdLCAxNik7XG4gIHZhciBnID0gcGFyc2VJbnQocmdiWzJdLCAxNik7XG4gIHZhciBiID0gcGFyc2VJbnQocmdiWzNdLCAxNik7XG4gIHJldHVybiAoXCJyZ2JhKFwiICsgciArIFwiLFwiICsgZyArIFwiLFwiICsgYiArIFwiLDEpXCIpO1xufVxuXG5mdW5jdGlvbiBoc2xUb1JnYmEoaHNsVmFsdWUpIHtcbiAgdmFyIGhzbCA9IC9oc2xcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSVcXCkvZy5leGVjKGhzbFZhbHVlKSB8fCAvaHNsYVxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspXFwpL2cuZXhlYyhoc2xWYWx1ZSk7XG4gIHZhciBoID0gcGFyc2VJbnQoaHNsWzFdLCAxMCkgLyAzNjA7XG4gIHZhciBzID0gcGFyc2VJbnQoaHNsWzJdLCAxMCkgLyAxMDA7XG4gIHZhciBsID0gcGFyc2VJbnQoaHNsWzNdLCAxMCkgLyAxMDA7XG4gIHZhciBhID0gaHNsWzRdIHx8IDE7XG4gIGZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xuICAgIGlmICh0IDwgMCkgeyB0ICs9IDE7IH1cbiAgICBpZiAodCA+IDEpIHsgdCAtPSAxOyB9XG4gICAgaWYgKHQgPCAxLzYpIHsgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7IH1cbiAgICBpZiAodCA8IDEvMikgeyByZXR1cm4gcTsgfVxuICAgIGlmICh0IDwgMi8zKSB7IHJldHVybiBwICsgKHEgLSBwKSAqICgyLzMgLSB0KSAqIDY7IH1cbiAgICByZXR1cm4gcDtcbiAgfVxuICB2YXIgciwgZywgYjtcbiAgaWYgKHMgPT0gMCkge1xuICAgIHIgPSBnID0gYiA9IGw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgIHZhciBwID0gMiAqIGwgLSBxO1xuICAgIHIgPSBodWUycmdiKHAsIHEsIGggKyAxLzMpO1xuICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xuICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxLzMpO1xuICB9XG4gIHJldHVybiAoXCJyZ2JhKFwiICsgKHIgKiAyNTUpICsgXCIsXCIgKyAoZyAqIDI1NSkgKyBcIixcIiArIChiICogMjU1KSArIFwiLFwiICsgYSArIFwiKVwiKTtcbn1cblxuZnVuY3Rpb24gY29sb3JUb1JnYih2YWwpIHtcbiAgaWYgKGlzLnJnYih2YWwpKSB7IHJldHVybiByZ2JUb1JnYmEodmFsKTsgfVxuICBpZiAoaXMuaGV4KHZhbCkpIHsgcmV0dXJuIGhleFRvUmdiYSh2YWwpOyB9XG4gIGlmIChpcy5oc2wodmFsKSkgeyByZXR1cm4gaHNsVG9SZ2JhKHZhbCk7IH1cbn1cblxuLy8gVW5pdHNcblxuZnVuY3Rpb24gZ2V0VW5pdCh2YWwpIHtcbiAgdmFyIHNwbGl0ID0gLyhbXFwrXFwtXT9bMC05I1xcLl0rKSglfHB4fHB0fGVtfHJlbXxpbnxjbXxtbXxleHxjaHxwY3x2d3x2aHx2bWlufHZtYXh8ZGVnfHJhZHx0dXJuKT8kLy5leGVjKHZhbCk7XG4gIGlmIChzcGxpdCkgeyByZXR1cm4gc3BsaXRbMl07IH1cbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSkge1xuICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICd0cmFuc2xhdGUnKSB8fCBwcm9wTmFtZSA9PT0gJ3BlcnNwZWN0aXZlJykgeyByZXR1cm4gJ3B4JzsgfVxuICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdyb3RhdGUnKSB8fCBzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3NrZXcnKSkgeyByZXR1cm4gJ2RlZyc7IH1cbn1cblxuLy8gVmFsdWVzXG5cbmZ1bmN0aW9uIGdldEZ1bmN0aW9uVmFsdWUodmFsLCBhbmltYXRhYmxlKSB7XG4gIGlmICghaXMuZm5jKHZhbCkpIHsgcmV0dXJuIHZhbDsgfVxuICByZXR1cm4gdmFsKGFuaW1hdGFibGUudGFyZ2V0LCBhbmltYXRhYmxlLmlkLCBhbmltYXRhYmxlLnRvdGFsKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKGVsLCBwcm9wKSB7XG4gIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUocHJvcCk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIHtcbiAgdmFyIHZhbHVlVW5pdCA9IGdldFVuaXQodmFsdWUpO1xuICBpZiAoYXJyYXlDb250YWlucyhbdW5pdCwgJ2RlZycsICdyYWQnLCAndHVybiddLCB2YWx1ZVVuaXQpKSB7IHJldHVybiB2YWx1ZTsgfVxuICB2YXIgY2FjaGVkID0gY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF07XG4gIGlmICghaXMudW5kKGNhY2hlZCkpIHsgcmV0dXJuIGNhY2hlZDsgfVxuICB2YXIgYmFzZWxpbmUgPSAxMDA7XG4gIHZhciB0ZW1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsLnRhZ05hbWUpO1xuICB2YXIgcGFyZW50RWwgPSAoZWwucGFyZW50Tm9kZSAmJiAoZWwucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQpKSA/IGVsLnBhcmVudE5vZGUgOiBkb2N1bWVudC5ib2R5O1xuICBwYXJlbnRFbC5hcHBlbmRDaGlsZCh0ZW1wRWwpO1xuICB0ZW1wRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICB0ZW1wRWwuc3R5bGUud2lkdGggPSBiYXNlbGluZSArIHVuaXQ7XG4gIHZhciBmYWN0b3IgPSBiYXNlbGluZSAvIHRlbXBFbC5vZmZzZXRXaWR0aDtcbiAgcGFyZW50RWwucmVtb3ZlQ2hpbGQodGVtcEVsKTtcbiAgdmFyIGNvbnZlcnRlZFVuaXQgPSBmYWN0b3IgKiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF0gPSBjb252ZXJ0ZWRVbml0O1xuICByZXR1cm4gY29udmVydGVkVW5pdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q1NTVmFsdWUoZWwsIHByb3AsIHVuaXQpIHtcbiAgaWYgKHByb3AgaW4gZWwuc3R5bGUpIHtcbiAgICB2YXIgdXBwZXJjYXNlUHJvcE5hbWUgPSBwcm9wLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIHZhbHVlID0gZWwuc3R5bGVbcHJvcF0gfHwgZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSh1cHBlcmNhc2VQcm9wTmFtZSkgfHwgJzAnO1xuICAgIHJldHVybiB1bml0ID8gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkgOiB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbmltYXRpb25UeXBlKGVsLCBwcm9wKSB7XG4gIGlmIChpcy5kb20oZWwpICYmICFpcy5pbnAoZWwpICYmIChnZXRBdHRyaWJ1dGUoZWwsIHByb3ApIHx8IChpcy5zdmcoZWwpICYmIGVsW3Byb3BdKSkpIHsgcmV0dXJuICdhdHRyaWJ1dGUnOyB9XG4gIGlmIChpcy5kb20oZWwpICYmIGFycmF5Q29udGFpbnModmFsaWRUcmFuc2Zvcm1zLCBwcm9wKSkgeyByZXR1cm4gJ3RyYW5zZm9ybSc7IH1cbiAgaWYgKGlzLmRvbShlbCkgJiYgKHByb3AgIT09ICd0cmFuc2Zvcm0nICYmIGdldENTU1ZhbHVlKGVsLCBwcm9wKSkpIHsgcmV0dXJuICdjc3MnOyB9XG4gIGlmIChlbFtwcm9wXSAhPSBudWxsKSB7IHJldHVybiAnb2JqZWN0JzsgfVxufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50VHJhbnNmb3JtcyhlbCkge1xuICBpZiAoIWlzLmRvbShlbCkpIHsgcmV0dXJuOyB9XG4gIHZhciBzdHIgPSBlbC5zdHlsZS50cmFuc2Zvcm0gfHwgJyc7XG4gIHZhciByZWcgID0gLyhcXHcrKVxcKChbXildKilcXCkvZztcbiAgdmFyIHRyYW5zZm9ybXMgPSBuZXcgTWFwKCk7XG4gIHZhciBtOyB3aGlsZSAobSA9IHJlZy5leGVjKHN0cikpIHsgdHJhbnNmb3Jtcy5zZXQobVsxXSwgbVsyXSk7IH1cbiAgcmV0dXJuIHRyYW5zZm9ybXM7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVZhbHVlKGVsLCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCkge1xuICB2YXIgZGVmYXVsdFZhbCA9IHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAnc2NhbGUnKSA/IDEgOiAwICsgZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSk7XG4gIHZhciB2YWx1ZSA9IGdldEVsZW1lbnRUcmFuc2Zvcm1zKGVsKS5nZXQocHJvcE5hbWUpIHx8IGRlZmF1bHRWYWw7XG4gIGlmIChhbmltYXRhYmxlKSB7XG4gICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLmxpc3Quc2V0KHByb3BOYW1lLCB2YWx1ZSk7XG4gICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zWydsYXN0J10gPSBwcm9wTmFtZTtcbiAgfVxuICByZXR1cm4gdW5pdCA/IGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdW5pdCwgYW5pbWF0YWJsZSkge1xuICBzd2l0Y2ggKGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wTmFtZSkpIHtcbiAgICBjYXNlICd0cmFuc2Zvcm0nOiByZXR1cm4gZ2V0VHJhbnNmb3JtVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCk7XG4gICAgY2FzZSAnY3NzJzogcmV0dXJuIGdldENTU1ZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHVuaXQpO1xuICAgIGNhc2UgJ2F0dHJpYnV0ZSc6IHJldHVybiBnZXRBdHRyaWJ1dGUodGFyZ2V0LCBwcm9wTmFtZSk7XG4gICAgZGVmYXVsdDogcmV0dXJuIHRhcmdldFtwcm9wTmFtZV0gfHwgMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSB7XG4gIHZhciBvcGVyYXRvciA9IC9eKFxcKj18XFwrPXwtPSkvLmV4ZWModG8pO1xuICBpZiAoIW9wZXJhdG9yKSB7IHJldHVybiB0bzsgfVxuICB2YXIgdSA9IGdldFVuaXQodG8pIHx8IDA7XG4gIHZhciB4ID0gcGFyc2VGbG9hdChmcm9tKTtcbiAgdmFyIHkgPSBwYXJzZUZsb2F0KHRvLnJlcGxhY2Uob3BlcmF0b3JbMF0sICcnKSk7XG4gIHN3aXRjaCAob3BlcmF0b3JbMF1bMF0pIHtcbiAgICBjYXNlICcrJzogcmV0dXJuIHggKyB5ICsgdTtcbiAgICBjYXNlICctJzogcmV0dXJuIHggLSB5ICsgdTtcbiAgICBjYXNlICcqJzogcmV0dXJuIHggKiB5ICsgdTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVZhbHVlKHZhbCwgdW5pdCkge1xuICBpZiAoaXMuY29sKHZhbCkpIHsgcmV0dXJuIGNvbG9yVG9SZ2IodmFsKTsgfVxuICB2YXIgb3JpZ2luYWxVbml0ID0gZ2V0VW5pdCh2YWwpO1xuICB2YXIgdW5pdExlc3MgPSBvcmlnaW5hbFVuaXQgPyB2YWwuc3Vic3RyKDAsIHZhbC5sZW5ndGggLSBvcmlnaW5hbFVuaXQubGVuZ3RoKSA6IHZhbDtcbiAgcmV0dXJuIHVuaXQgJiYgIS9cXHMvZy50ZXN0KHZhbCkgPyB1bml0TGVzcyArIHVuaXQgOiB1bml0TGVzcztcbn1cblxuLy8gZ2V0VG90YWxMZW5ndGgoKSBlcXVpdmFsZW50IGZvciBjaXJjbGUsIHJlY3QsIHBvbHlsaW5lLCBwb2x5Z29uIGFuZCBsaW5lIHNoYXBlc1xuLy8gYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1NlYkxhbWJsYS8zZTA1NTBjNDk2YzIzNjcwOTc0NFxuXG5mdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xufVxuXG5mdW5jdGlvbiBnZXRDaXJjbGVMZW5ndGgoZWwpIHtcbiAgcmV0dXJuIE1hdGguUEkgKiAyICogZ2V0QXR0cmlidXRlKGVsLCAncicpO1xufVxuXG5mdW5jdGlvbiBnZXRSZWN0TGVuZ3RoKGVsKSB7XG4gIHJldHVybiAoZ2V0QXR0cmlidXRlKGVsLCAnd2lkdGgnKSAqIDIpICsgKGdldEF0dHJpYnV0ZShlbCwgJ2hlaWdodCcpICogMik7XG59XG5cbmZ1bmN0aW9uIGdldExpbmVMZW5ndGgoZWwpIHtcbiAgcmV0dXJuIGdldERpc3RhbmNlKFxuICAgIHt4OiBnZXRBdHRyaWJ1dGUoZWwsICd4MScpLCB5OiBnZXRBdHRyaWJ1dGUoZWwsICd5MScpfSxcbiAgICB7eDogZ2V0QXR0cmlidXRlKGVsLCAneDInKSwgeTogZ2V0QXR0cmlidXRlKGVsLCAneTInKX1cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9seWxpbmVMZW5ndGgoZWwpIHtcbiAgdmFyIHBvaW50cyA9IGVsLnBvaW50cztcbiAgdmFyIHRvdGFsTGVuZ3RoID0gMDtcbiAgdmFyIHByZXZpb3VzUG9zO1xuICBmb3IgKHZhciBpID0gMCA7IGkgPCBwb2ludHMubnVtYmVyT2ZJdGVtczsgaSsrKSB7XG4gICAgdmFyIGN1cnJlbnRQb3MgPSBwb2ludHMuZ2V0SXRlbShpKTtcbiAgICBpZiAoaSA+IDApIHsgdG90YWxMZW5ndGggKz0gZ2V0RGlzdGFuY2UocHJldmlvdXNQb3MsIGN1cnJlbnRQb3MpOyB9XG4gICAgcHJldmlvdXNQb3MgPSBjdXJyZW50UG9zO1xuICB9XG4gIHJldHVybiB0b3RhbExlbmd0aDtcbn1cblxuZnVuY3Rpb24gZ2V0UG9seWdvbkxlbmd0aChlbCkge1xuICB2YXIgcG9pbnRzID0gZWwucG9pbnRzO1xuICByZXR1cm4gZ2V0UG9seWxpbmVMZW5ndGgoZWwpICsgZ2V0RGlzdGFuY2UocG9pbnRzLmdldEl0ZW0ocG9pbnRzLm51bWJlck9mSXRlbXMgLSAxKSwgcG9pbnRzLmdldEl0ZW0oMCkpO1xufVxuXG4vLyBQYXRoIGFuaW1hdGlvblxuXG5mdW5jdGlvbiBnZXRUb3RhbExlbmd0aChlbCkge1xuICBpZiAoZWwuZ2V0VG90YWxMZW5ndGgpIHsgcmV0dXJuIGVsLmdldFRvdGFsTGVuZ3RoKCk7IH1cbiAgc3dpdGNoKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2NpcmNsZSc6IHJldHVybiBnZXRDaXJjbGVMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ3JlY3QnOiByZXR1cm4gZ2V0UmVjdExlbmd0aChlbCk7XG4gICAgY2FzZSAnbGluZSc6IHJldHVybiBnZXRMaW5lTGVuZ3RoKGVsKTtcbiAgICBjYXNlICdwb2x5bGluZSc6IHJldHVybiBnZXRQb2x5bGluZUxlbmd0aChlbCk7XG4gICAgY2FzZSAncG9seWdvbic6IHJldHVybiBnZXRQb2x5Z29uTGVuZ3RoKGVsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXREYXNob2Zmc2V0KGVsKSB7XG4gIHZhciBwYXRoTGVuZ3RoID0gZ2V0VG90YWxMZW5ndGgoZWwpO1xuICBlbC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBwYXRoTGVuZ3RoKTtcbiAgcmV0dXJuIHBhdGhMZW5ndGg7XG59XG5cbi8vIE1vdGlvbiBwYXRoXG5cbmZ1bmN0aW9uIGdldFBhcmVudFN2Z0VsKGVsKSB7XG4gIHZhciBwYXJlbnRFbCA9IGVsLnBhcmVudE5vZGU7XG4gIHdoaWxlIChpcy5zdmcocGFyZW50RWwpKSB7XG4gICAgcGFyZW50RWwgPSBwYXJlbnRFbC5wYXJlbnROb2RlO1xuICAgIGlmICghaXMuc3ZnKHBhcmVudEVsLnBhcmVudE5vZGUpKSB7IGJyZWFrOyB9XG4gIH1cbiAgcmV0dXJuIHBhcmVudEVsO1xufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnRTdmcocGF0aEVsLCBzdmdEYXRhKSB7XG4gIHZhciBzdmcgPSBzdmdEYXRhIHx8IHt9O1xuICB2YXIgcGFyZW50U3ZnRWwgPSBzdmcuZWwgfHwgZ2V0UGFyZW50U3ZnRWwocGF0aEVsKTtcbiAgdmFyIHJlY3QgPSBwYXJlbnRTdmdFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHZpZXdCb3hBdHRyID0gZ2V0QXR0cmlidXRlKHBhcmVudFN2Z0VsLCAndmlld0JveCcpO1xuICB2YXIgd2lkdGggPSByZWN0LndpZHRoO1xuICB2YXIgaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gIHZhciB2aWV3Qm94ID0gc3ZnLnZpZXdCb3ggfHwgKHZpZXdCb3hBdHRyID8gdmlld0JveEF0dHIuc3BsaXQoJyAnKSA6IFswLCAwLCB3aWR0aCwgaGVpZ2h0XSk7XG4gIHJldHVybiB7XG4gICAgZWw6IHBhcmVudFN2Z0VsLFxuICAgIHZpZXdCb3g6IHZpZXdCb3gsXG4gICAgeDogdmlld0JveFswXSAvIDEsXG4gICAgeTogdmlld0JveFsxXSAvIDEsXG4gICAgdzogd2lkdGggLyB2aWV3Qm94WzJdLFxuICAgIGg6IGhlaWdodCAvIHZpZXdCb3hbM11cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYXRoKHBhdGgsIHBlcmNlbnQpIHtcbiAgdmFyIHBhdGhFbCA9IGlzLnN0cihwYXRoKSA/IHNlbGVjdFN0cmluZyhwYXRoKVswXSA6IHBhdGg7XG4gIHZhciBwID0gcGVyY2VudCB8fCAxMDA7XG4gIHJldHVybiBmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wZXJ0eTogcHJvcGVydHksXG4gICAgICBlbDogcGF0aEVsLFxuICAgICAgc3ZnOiBnZXRQYXJlbnRTdmcocGF0aEVsKSxcbiAgICAgIHRvdGFsTGVuZ3RoOiBnZXRUb3RhbExlbmd0aChwYXRoRWwpICogKHAgLyAxMDApXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhdGhQcm9ncmVzcyhwYXRoLCBwcm9ncmVzcykge1xuICBmdW5jdGlvbiBwb2ludChvZmZzZXQpIHtcbiAgICBpZiAoIG9mZnNldCA9PT0gdm9pZCAwICkgb2Zmc2V0ID0gMDtcblxuICAgIHZhciBsID0gcHJvZ3Jlc3MgKyBvZmZzZXQgPj0gMSA/IHByb2dyZXNzICsgb2Zmc2V0IDogMDtcbiAgICByZXR1cm4gcGF0aC5lbC5nZXRQb2ludEF0TGVuZ3RoKGwpO1xuICB9XG4gIHZhciBzdmcgPSBnZXRQYXJlbnRTdmcocGF0aC5lbCwgcGF0aC5zdmcpO1xuICB2YXIgcCA9IHBvaW50KCk7XG4gIHZhciBwMCA9IHBvaW50KC0xKTtcbiAgdmFyIHAxID0gcG9pbnQoKzEpO1xuICBzd2l0Y2ggKHBhdGgucHJvcGVydHkpIHtcbiAgICBjYXNlICd4JzogcmV0dXJuIChwLnggLSBzdmcueCkgKiBzdmcudztcbiAgICBjYXNlICd5JzogcmV0dXJuIChwLnkgLSBzdmcueSkgKiBzdmcuaDtcbiAgICBjYXNlICdhbmdsZSc6IHJldHVybiBNYXRoLmF0YW4yKHAxLnkgLSBwMC55LCBwMS54IC0gcDAueCkgKiAxODAgLyBNYXRoLlBJO1xuICB9XG59XG5cbi8vIERlY29tcG9zZSB2YWx1ZVxuXG5mdW5jdGlvbiBkZWNvbXBvc2VWYWx1ZSh2YWwsIHVuaXQpIHtcbiAgdmFyIHJneCA9IC8tP1xcZCpcXC4/XFxkKy9nO1xuICB2YXIgdmFsdWUgPSB2YWxpZGF0ZVZhbHVlKChpcy5wdGgodmFsKSA/IHZhbC50b3RhbExlbmd0aCA6IHZhbCksIHVuaXQpICsgJyc7XG4gIHJldHVybiB7XG4gICAgb3JpZ2luYWw6IHZhbHVlLFxuICAgIG51bWJlcnM6IHZhbHVlLm1hdGNoKHJneCkgPyB2YWx1ZS5tYXRjaChyZ3gpLm1hcChOdW1iZXIpIDogWzBdLFxuICAgIHN0cmluZ3M6IChpcy5zdHIodmFsKSB8fCB1bml0KSA/IHZhbHVlLnNwbGl0KHJneCkgOiBbXVxuICB9XG59XG5cbi8vIEFuaW1hdGFibGVzXG5cbmZ1bmN0aW9uIHBhcnNlVGFyZ2V0cyh0YXJnZXRzKSB7XG4gIHZhciB0YXJnZXRzQXJyYXkgPSB0YXJnZXRzID8gKGZsYXR0ZW5BcnJheShpcy5hcnIodGFyZ2V0cykgPyB0YXJnZXRzLm1hcCh0b0FycmF5KSA6IHRvQXJyYXkodGFyZ2V0cykpKSA6IFtdO1xuICByZXR1cm4gZmlsdGVyQXJyYXkodGFyZ2V0c0FycmF5LCBmdW5jdGlvbiAoaXRlbSwgcG9zLCBzZWxmKSB7IHJldHVybiBzZWxmLmluZGV4T2YoaXRlbSkgPT09IHBvczsgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEFuaW1hdGFibGVzKHRhcmdldHMpIHtcbiAgdmFyIHBhcnNlZCA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcbiAgcmV0dXJuIHBhcnNlZC5tYXAoZnVuY3Rpb24gKHQsIGkpIHtcbiAgICByZXR1cm4ge3RhcmdldDogdCwgaWQ6IGksIHRvdGFsOiBwYXJzZWQubGVuZ3RoLCB0cmFuc2Zvcm1zOiB7IGxpc3Q6IGdldEVsZW1lbnRUcmFuc2Zvcm1zKHQpIH0gfTtcbiAgfSk7XG59XG5cbi8vIFByb3BlcnRpZXNcblxuZnVuY3Rpb24gbm9ybWFsaXplUHJvcGVydHlUd2VlbnMocHJvcCwgdHdlZW5TZXR0aW5ncykge1xuICB2YXIgc2V0dGluZ3MgPSBjbG9uZU9iamVjdCh0d2VlblNldHRpbmdzKTtcbiAgLy8gT3ZlcnJpZGUgZHVyYXRpb24gaWYgZWFzaW5nIGlzIGEgc3ByaW5nXG4gIGlmICgvXnNwcmluZy8udGVzdChzZXR0aW5ncy5lYXNpbmcpKSB7IHNldHRpbmdzLmR1cmF0aW9uID0gc3ByaW5nKHNldHRpbmdzLmVhc2luZyk7IH1cbiAgaWYgKGlzLmFycihwcm9wKSkge1xuICAgIHZhciBsID0gcHJvcC5sZW5ndGg7XG4gICAgdmFyIGlzRnJvbVRvID0gKGwgPT09IDIgJiYgIWlzLm9iaihwcm9wWzBdKSk7XG4gICAgaWYgKCFpc0Zyb21Ubykge1xuICAgICAgLy8gRHVyYXRpb24gZGl2aWRlZCBieSB0aGUgbnVtYmVyIG9mIHR3ZWVuc1xuICAgICAgaWYgKCFpcy5mbmModHdlZW5TZXR0aW5ncy5kdXJhdGlvbikpIHsgc2V0dGluZ3MuZHVyYXRpb24gPSB0d2VlblNldHRpbmdzLmR1cmF0aW9uIC8gbDsgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUcmFuc2Zvcm0gW2Zyb20sIHRvXSB2YWx1ZXMgc2hvcnRoYW5kIHRvIGEgdmFsaWQgdHdlZW4gdmFsdWVcbiAgICAgIHByb3AgPSB7dmFsdWU6IHByb3B9O1xuICAgIH1cbiAgfVxuICB2YXIgcHJvcEFycmF5ID0gaXMuYXJyKHByb3ApID8gcHJvcCA6IFtwcm9wXTtcbiAgcmV0dXJuIHByb3BBcnJheS5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICB2YXIgb2JqID0gKGlzLm9iaih2KSAmJiAhaXMucHRoKHYpKSA/IHYgOiB7dmFsdWU6IHZ9O1xuICAgIC8vIERlZmF1bHQgZGVsYXkgdmFsdWUgc2hvdWxkIG9ubHkgYmUgYXBwbGllZCB0byB0aGUgZmlyc3QgdHdlZW5cbiAgICBpZiAoaXMudW5kKG9iai5kZWxheSkpIHsgb2JqLmRlbGF5ID0gIWkgPyB0d2VlblNldHRpbmdzLmRlbGF5IDogMDsgfVxuICAgIC8vIERlZmF1bHQgZW5kRGVsYXkgdmFsdWUgc2hvdWxkIG9ubHkgYmUgYXBwbGllZCB0byB0aGUgbGFzdCB0d2VlblxuICAgIGlmIChpcy51bmQob2JqLmVuZERlbGF5KSkgeyBvYmouZW5kRGVsYXkgPSBpID09PSBwcm9wQXJyYXkubGVuZ3RoIC0gMSA/IHR3ZWVuU2V0dGluZ3MuZW5kRGVsYXkgOiAwOyB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSkubWFwKGZ1bmN0aW9uIChrKSB7IHJldHVybiBtZXJnZU9iamVjdHMoaywgc2V0dGluZ3MpOyB9KTtcbn1cblxuXG5mdW5jdGlvbiBmbGF0dGVuS2V5ZnJhbWVzKGtleWZyYW1lcykge1xuICB2YXIgcHJvcGVydHlOYW1lcyA9IGZpbHRlckFycmF5KGZsYXR0ZW5BcnJheShrZXlmcmFtZXMubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIE9iamVjdC5rZXlzKGtleSk7IH0pKSwgZnVuY3Rpb24gKHApIHsgcmV0dXJuIGlzLmtleShwKTsgfSlcbiAgLnJlZHVjZShmdW5jdGlvbiAoYSxiKSB7IGlmIChhLmluZGV4T2YoYikgPCAwKSB7IGEucHVzaChiKTsgfSByZXR1cm4gYTsgfSwgW10pO1xuICB2YXIgcHJvcGVydGllcyA9IHt9O1xuICB2YXIgbG9vcCA9IGZ1bmN0aW9uICggaSApIHtcbiAgICB2YXIgcHJvcE5hbWUgPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgIHByb3BlcnRpZXNbcHJvcE5hbWVdID0ga2V5ZnJhbWVzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbmV3S2V5ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGtleSkge1xuICAgICAgICBpZiAoaXMua2V5KHApKSB7XG4gICAgICAgICAgaWYgKHAgPT0gcHJvcE5hbWUpIHsgbmV3S2V5LnZhbHVlID0ga2V5W3BdOyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3S2V5W3BdID0ga2V5W3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3S2V5O1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydHlOYW1lcy5sZW5ndGg7IGkrKykgbG9vcCggaSApO1xuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydGllcyh0d2VlblNldHRpbmdzLCBwYXJhbXMpIHtcbiAgdmFyIHByb3BlcnRpZXMgPSBbXTtcbiAgdmFyIGtleWZyYW1lcyA9IHBhcmFtcy5rZXlmcmFtZXM7XG4gIGlmIChrZXlmcmFtZXMpIHsgcGFyYW1zID0gbWVyZ2VPYmplY3RzKGZsYXR0ZW5LZXlmcmFtZXMoa2V5ZnJhbWVzKSwgcGFyYW1zKTsgfVxuICBmb3IgKHZhciBwIGluIHBhcmFtcykge1xuICAgIGlmIChpcy5rZXkocCkpIHtcbiAgICAgIHByb3BlcnRpZXMucHVzaCh7XG4gICAgICAgIG5hbWU6IHAsXG4gICAgICAgIHR3ZWVuczogbm9ybWFsaXplUHJvcGVydHlUd2VlbnMocGFyYW1zW3BdLCB0d2VlblNldHRpbmdzKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG4vLyBUd2VlbnNcblxuZnVuY3Rpb24gbm9ybWFsaXplVHdlZW5WYWx1ZXModHdlZW4sIGFuaW1hdGFibGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiB0d2Vlbikge1xuICAgIHZhciB2YWx1ZSA9IGdldEZ1bmN0aW9uVmFsdWUodHdlZW5bcF0sIGFuaW1hdGFibGUpO1xuICAgIGlmIChpcy5hcnIodmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gZ2V0RnVuY3Rpb25WYWx1ZSh2LCBhbmltYXRhYmxlKTsgfSk7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAxKSB7IHZhbHVlID0gdmFsdWVbMF07IH1cbiAgICB9XG4gICAgdFtwXSA9IHZhbHVlO1xuICB9XG4gIHQuZHVyYXRpb24gPSBwYXJzZUZsb2F0KHQuZHVyYXRpb24pO1xuICB0LmRlbGF5ID0gcGFyc2VGbG9hdCh0LmRlbGF5KTtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVR3ZWVucyhwcm9wLCBhbmltYXRhYmxlKSB7XG4gIHZhciBwcmV2aW91c1R3ZWVuO1xuICByZXR1cm4gcHJvcC50d2VlbnMubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIHR3ZWVuID0gbm9ybWFsaXplVHdlZW5WYWx1ZXModCwgYW5pbWF0YWJsZSk7XG4gICAgdmFyIHR3ZWVuVmFsdWUgPSB0d2Vlbi52YWx1ZTtcbiAgICB2YXIgdG8gPSBpcy5hcnIodHdlZW5WYWx1ZSkgPyB0d2VlblZhbHVlWzFdIDogdHdlZW5WYWx1ZTtcbiAgICB2YXIgdG9Vbml0ID0gZ2V0VW5pdCh0byk7XG4gICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKGFuaW1hdGFibGUudGFyZ2V0LCBwcm9wLm5hbWUsIHRvVW5pdCwgYW5pbWF0YWJsZSk7XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSBwcmV2aW91c1R3ZWVuID8gcHJldmlvdXNUd2Vlbi50by5vcmlnaW5hbCA6IG9yaWdpbmFsVmFsdWU7XG4gICAgdmFyIGZyb20gPSBpcy5hcnIodHdlZW5WYWx1ZSkgPyB0d2VlblZhbHVlWzBdIDogcHJldmlvdXNWYWx1ZTtcbiAgICB2YXIgZnJvbVVuaXQgPSBnZXRVbml0KGZyb20pIHx8IGdldFVuaXQob3JpZ2luYWxWYWx1ZSk7XG4gICAgdmFyIHVuaXQgPSB0b1VuaXQgfHwgZnJvbVVuaXQ7XG4gICAgaWYgKGlzLnVuZCh0bykpIHsgdG8gPSBwcmV2aW91c1ZhbHVlOyB9XG4gICAgdHdlZW4uZnJvbSA9IGRlY29tcG9zZVZhbHVlKGZyb20sIHVuaXQpO1xuICAgIHR3ZWVuLnRvID0gZGVjb21wb3NlVmFsdWUoZ2V0UmVsYXRpdmVWYWx1ZSh0bywgZnJvbSksIHVuaXQpO1xuICAgIHR3ZWVuLnN0YXJ0ID0gcHJldmlvdXNUd2VlbiA/IHByZXZpb3VzVHdlZW4uZW5kIDogMDtcbiAgICB0d2Vlbi5lbmQgPSB0d2Vlbi5zdGFydCArIHR3ZWVuLmRlbGF5ICsgdHdlZW4uZHVyYXRpb24gKyB0d2Vlbi5lbmREZWxheTtcbiAgICB0d2Vlbi5lYXNpbmcgPSBwYXJzZUVhc2luZ3ModHdlZW4uZWFzaW5nLCB0d2Vlbi5kdXJhdGlvbik7XG4gICAgdHdlZW4uaXNQYXRoID0gaXMucHRoKHR3ZWVuVmFsdWUpO1xuICAgIHR3ZWVuLmlzQ29sb3IgPSBpcy5jb2wodHdlZW4uZnJvbS5vcmlnaW5hbCk7XG4gICAgaWYgKHR3ZWVuLmlzQ29sb3IpIHsgdHdlZW4ucm91bmQgPSAxOyB9XG4gICAgcHJldmlvdXNUd2VlbiA9IHR3ZWVuO1xuICAgIHJldHVybiB0d2VlbjtcbiAgfSk7XG59XG5cbi8vIFR3ZWVuIHByb2dyZXNzXG5cbnZhciBzZXRQcm9ncmVzc1ZhbHVlID0ge1xuICBjc3M6IGZ1bmN0aW9uICh0LCBwLCB2KSB7IHJldHVybiB0LnN0eWxlW3BdID0gdjsgfSxcbiAgYXR0cmlidXRlOiBmdW5jdGlvbiAodCwgcCwgdikgeyByZXR1cm4gdC5zZXRBdHRyaWJ1dGUocCwgdik7IH0sXG4gIG9iamVjdDogZnVuY3Rpb24gKHQsIHAsIHYpIHsgcmV0dXJuIHRbcF0gPSB2OyB9LFxuICB0cmFuc2Zvcm06IGZ1bmN0aW9uICh0LCBwLCB2LCB0cmFuc2Zvcm1zLCBtYW51YWwpIHtcbiAgICB0cmFuc2Zvcm1zLmxpc3Quc2V0KHAsIHYpO1xuICAgIGlmIChwID09PSB0cmFuc2Zvcm1zLmxhc3QgfHwgbWFudWFsKSB7XG4gICAgICB2YXIgc3RyID0gJyc7XG4gICAgICB0cmFuc2Zvcm1zLmxpc3QuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIHByb3ApIHsgc3RyICs9IHByb3AgKyBcIihcIiArIHZhbHVlICsgXCIpIFwiOyB9KTtcbiAgICAgIHQuc3R5bGUudHJhbnNmb3JtID0gc3RyO1xuICAgIH1cbiAgfVxufTtcblxuLy8gU2V0IFZhbHVlIGhlbHBlclxuXG5mdW5jdGlvbiBzZXRUYXJnZXRzVmFsdWUodGFyZ2V0cywgcHJvcGVydGllcykge1xuICB2YXIgYW5pbWF0YWJsZXMgPSBnZXRBbmltYXRhYmxlcyh0YXJnZXRzKTtcbiAgYW5pbWF0YWJsZXMuZm9yRWFjaChmdW5jdGlvbiAoYW5pbWF0YWJsZSkge1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldEZ1bmN0aW9uVmFsdWUocHJvcGVydGllc1twcm9wZXJ0eV0sIGFuaW1hdGFibGUpO1xuICAgICAgdmFyIHRhcmdldCA9IGFuaW1hdGFibGUudGFyZ2V0O1xuICAgICAgdmFyIHZhbHVlVW5pdCA9IGdldFVuaXQodmFsdWUpO1xuICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlVW5pdCwgYW5pbWF0YWJsZSk7XG4gICAgICB2YXIgdW5pdCA9IHZhbHVlVW5pdCB8fCBnZXRVbml0KG9yaWdpbmFsVmFsdWUpO1xuICAgICAgdmFyIHRvID0gZ2V0UmVsYXRpdmVWYWx1ZSh2YWxpZGF0ZVZhbHVlKHZhbHVlLCB1bml0KSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgICB2YXIgYW5pbVR5cGUgPSBnZXRBbmltYXRpb25UeXBlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgc2V0UHJvZ3Jlc3NWYWx1ZVthbmltVHlwZV0odGFyZ2V0LCBwcm9wZXJ0eSwgdG8sIGFuaW1hdGFibGUudHJhbnNmb3JtcywgdHJ1ZSk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gQW5pbWF0aW9uc1xuXG5mdW5jdGlvbiBjcmVhdGVBbmltYXRpb24oYW5pbWF0YWJsZSwgcHJvcCkge1xuICB2YXIgYW5pbVR5cGUgPSBnZXRBbmltYXRpb25UeXBlKGFuaW1hdGFibGUudGFyZ2V0LCBwcm9wLm5hbWUpO1xuICBpZiAoYW5pbVR5cGUpIHtcbiAgICB2YXIgdHdlZW5zID0gbm9ybWFsaXplVHdlZW5zKHByb3AsIGFuaW1hdGFibGUpO1xuICAgIHZhciBsYXN0VHdlZW4gPSB0d2VlbnNbdHdlZW5zLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBhbmltVHlwZSxcbiAgICAgIHByb3BlcnR5OiBwcm9wLm5hbWUsXG4gICAgICBhbmltYXRhYmxlOiBhbmltYXRhYmxlLFxuICAgICAgdHdlZW5zOiB0d2VlbnMsXG4gICAgICBkdXJhdGlvbjogbGFzdFR3ZWVuLmVuZCxcbiAgICAgIGRlbGF5OiB0d2VlbnNbMF0uZGVsYXksXG4gICAgICBlbmREZWxheTogbGFzdFR3ZWVuLmVuZERlbGF5XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFuaW1hdGlvbnMoYW5pbWF0YWJsZXMsIHByb3BlcnRpZXMpIHtcbiAgcmV0dXJuIGZpbHRlckFycmF5KGZsYXR0ZW5BcnJheShhbmltYXRhYmxlcy5tYXAoZnVuY3Rpb24gKGFuaW1hdGFibGUpIHtcbiAgICByZXR1cm4gcHJvcGVydGllcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHJldHVybiBjcmVhdGVBbmltYXRpb24oYW5pbWF0YWJsZSwgcHJvcCk7XG4gICAgfSk7XG4gIH0pKSwgZnVuY3Rpb24gKGEpIHsgcmV0dXJuICFpcy51bmQoYSk7IH0pO1xufVxuXG4vLyBDcmVhdGUgSW5zdGFuY2VcblxuZnVuY3Rpb24gZ2V0SW5zdGFuY2VUaW1pbmdzKGFuaW1hdGlvbnMsIHR3ZWVuU2V0dGluZ3MpIHtcbiAgdmFyIGFuaW1MZW5ndGggPSBhbmltYXRpb25zLmxlbmd0aDtcbiAgdmFyIGdldFRsT2Zmc2V0ID0gZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGFuaW0udGltZWxpbmVPZmZzZXQgPyBhbmltLnRpbWVsaW5lT2Zmc2V0IDogMDsgfTtcbiAgdmFyIHRpbWluZ3MgPSB7fTtcbiAgdGltaW5ncy5kdXJhdGlvbiA9IGFuaW1MZW5ndGggPyBNYXRoLm1heC5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbiAoYW5pbSkgeyByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmR1cmF0aW9uOyB9KSkgOiB0d2VlblNldHRpbmdzLmR1cmF0aW9uO1xuICB0aW1pbmdzLmRlbGF5ID0gYW5pbUxlbmd0aCA/IE1hdGgubWluLmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZGVsYXk7IH0pKSA6IHR3ZWVuU2V0dGluZ3MuZGVsYXk7XG4gIHRpbWluZ3MuZW5kRGVsYXkgPSBhbmltTGVuZ3RoID8gdGltaW5ncy5kdXJhdGlvbiAtIE1hdGgubWF4LmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZHVyYXRpb24gLSBhbmltLmVuZERlbGF5OyB9KSkgOiB0d2VlblNldHRpbmdzLmVuZERlbGF5O1xuICByZXR1cm4gdGltaW5ncztcbn1cblxudmFyIGluc3RhbmNlSUQgPSAwO1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdJbnN0YW5jZShwYXJhbXMpIHtcbiAgdmFyIGluc3RhbmNlU2V0dGluZ3MgPSByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MsIHBhcmFtcyk7XG4gIHZhciB0d2VlblNldHRpbmdzID0gcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRUd2VlblNldHRpbmdzLCBwYXJhbXMpO1xuICB2YXIgcHJvcGVydGllcyA9IGdldFByb3BlcnRpZXModHdlZW5TZXR0aW5ncywgcGFyYW1zKTtcbiAgdmFyIGFuaW1hdGFibGVzID0gZ2V0QW5pbWF0YWJsZXMocGFyYW1zLnRhcmdldHMpO1xuICB2YXIgYW5pbWF0aW9ucyA9IGdldEFuaW1hdGlvbnMoYW5pbWF0YWJsZXMsIHByb3BlcnRpZXMpO1xuICB2YXIgdGltaW5ncyA9IGdldEluc3RhbmNlVGltaW5ncyhhbmltYXRpb25zLCB0d2VlblNldHRpbmdzKTtcbiAgdmFyIGlkID0gaW5zdGFuY2VJRDtcbiAgaW5zdGFuY2VJRCsrO1xuICByZXR1cm4gbWVyZ2VPYmplY3RzKGluc3RhbmNlU2V0dGluZ3MsIHtcbiAgICBpZDogaWQsXG4gICAgY2hpbGRyZW46IFtdLFxuICAgIGFuaW1hdGFibGVzOiBhbmltYXRhYmxlcyxcbiAgICBhbmltYXRpb25zOiBhbmltYXRpb25zLFxuICAgIGR1cmF0aW9uOiB0aW1pbmdzLmR1cmF0aW9uLFxuICAgIGRlbGF5OiB0aW1pbmdzLmRlbGF5LFxuICAgIGVuZERlbGF5OiB0aW1pbmdzLmVuZERlbGF5XG4gIH0pO1xufVxuXG4vLyBDb3JlXG5cbnZhciBhY3RpdmVJbnN0YW5jZXMgPSBbXTtcbnZhciBwYXVzZWRJbnN0YW5jZXMgPSBbXTtcbnZhciByYWY7XG5cbnZhciBlbmdpbmUgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBwbGF5KCkge1xuICAgIHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgfVxuICBmdW5jdGlvbiBzdGVwKHQpIHtcbiAgICB2YXIgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDtcbiAgICBpZiAoYWN0aXZlSW5zdGFuY2VzTGVuZ3RoKSB7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IGFjdGl2ZUluc3RhbmNlc0xlbmd0aCkge1xuICAgICAgICB2YXIgYWN0aXZlSW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZXNbaV07XG4gICAgICAgIGlmICghYWN0aXZlSW5zdGFuY2UucGF1c2VkKSB7XG4gICAgICAgICAgYWN0aXZlSW5zdGFuY2UudGljayh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaW5zdGFuY2VJbmRleCA9IGFjdGl2ZUluc3RhbmNlcy5pbmRleE9mKGFjdGl2ZUluc3RhbmNlKTtcbiAgICAgICAgICBpZiAoaW5zdGFuY2VJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBhY3RpdmVJbnN0YW5jZXMuc3BsaWNlKGluc3RhbmNlSW5kZXgsIDEpO1xuICAgICAgICAgICAgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgcGxheSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByYWYgPSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGxheTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICBhY3RpdmVJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5zKSB7IHJldHVybiBpbnMucGF1c2UoKTsgfSk7XG4gICAgcGF1c2VkSW5zdGFuY2VzID0gYWN0aXZlSW5zdGFuY2VzLnNsaWNlKDApO1xuICAgIGFjdGl2ZUluc3RhbmNlcyA9IFtdO1xuICB9IGVsc2Uge1xuICAgIHBhdXNlZEluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbnMpIHsgcmV0dXJuIGlucy5wbGF5KCk7IH0pO1xuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKTtcblxuLy8gUHVibGljIEluc3RhbmNlXG5cbmZ1bmN0aW9uIGFuaW1lKHBhcmFtcykge1xuICBpZiAoIHBhcmFtcyA9PT0gdm9pZCAwICkgcGFyYW1zID0ge307XG5cblxuICB2YXIgc3RhcnRUaW1lID0gMCwgbGFzdFRpbWUgPSAwLCBub3cgPSAwO1xuICB2YXIgY2hpbGRyZW4sIGNoaWxkcmVuTGVuZ3RoID0gMDtcbiAgdmFyIHJlc29sdmUgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIG1ha2VQcm9taXNlKCkge1xuICAgIHJldHVybiB3aW5kb3cuUHJvbWlzZSAmJiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoX3Jlc29sdmUpIHsgcmV0dXJuIHJlc29sdmUgPSBfcmVzb2x2ZTsgfSk7XG4gIH1cblxuICB2YXIgcHJvbWlzZSA9IG1ha2VQcm9taXNlKCk7XG5cbiAgdmFyIGluc3RhbmNlID0gY3JlYXRlTmV3SW5zdGFuY2UocGFyYW1zKTtcblxuICBmdW5jdGlvbiB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpIHtcbiAgICBpbnN0YW5jZS5yZXZlcnNlZCA9ICFpbnN0YW5jZS5yZXZlcnNlZDtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQucmV2ZXJzZWQgPSBpbnN0YW5jZS5yZXZlcnNlZDsgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGp1c3RUaW1lKHRpbWUpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UucmV2ZXJzZWQgPyBpbnN0YW5jZS5kdXJhdGlvbiAtIHRpbWUgOiB0aW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUaW1lKCkge1xuICAgIHN0YXJ0VGltZSA9IDA7XG4gICAgbGFzdFRpbWUgPSBhZGp1c3RUaW1lKGluc3RhbmNlLmN1cnJlbnRUaW1lKSAqICgxIC8gYW5pbWUuc3BlZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Vla0NpbGQodGltZSwgY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQpIHsgY2hpbGQuc2Vlayh0aW1lIC0gY2hpbGQudGltZWxpbmVPZmZzZXQpOyB9XG4gIH1cblxuICBmdW5jdGlvbiBzeW5jSW5zdGFuY2VDaGlsZHJlbih0aW1lKSB7XG4gICAgaWYgKCFpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykgeyBzZWVrQ2lsZCh0aW1lLCBjaGlsZHJlbltpXSk7IH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSQxID0gY2hpbGRyZW5MZW5ndGg7IGkkMS0tOykgeyBzZWVrQ2lsZCh0aW1lLCBjaGlsZHJlbltpJDFdKTsgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNUaW1lKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBhbmltYXRpb25zID0gaW5zdGFuY2UuYW5pbWF0aW9ucztcbiAgICB2YXIgYW5pbWF0aW9uc0xlbmd0aCA9IGFuaW1hdGlvbnMubGVuZ3RoO1xuICAgIHdoaWxlIChpIDwgYW5pbWF0aW9uc0xlbmd0aCkge1xuICAgICAgdmFyIGFuaW0gPSBhbmltYXRpb25zW2ldO1xuICAgICAgdmFyIGFuaW1hdGFibGUgPSBhbmltLmFuaW1hdGFibGU7XG4gICAgICB2YXIgdHdlZW5zID0gYW5pbS50d2VlbnM7XG4gICAgICB2YXIgdHdlZW5MZW5ndGggPSB0d2VlbnMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciB0d2VlbiA9IHR3ZWVuc1t0d2Vlbkxlbmd0aF07XG4gICAgICAvLyBPbmx5IGNoZWNrIGZvciBrZXlmcmFtZXMgaWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSB0d2VlblxuICAgICAgaWYgKHR3ZWVuTGVuZ3RoKSB7IHR3ZWVuID0gZmlsdGVyQXJyYXkodHdlZW5zLCBmdW5jdGlvbiAodCkgeyByZXR1cm4gKGluc1RpbWUgPCB0LmVuZCk7IH0pWzBdIHx8IHR3ZWVuOyB9XG4gICAgICB2YXIgZWxhcHNlZCA9IG1pbk1heChpbnNUaW1lIC0gdHdlZW4uc3RhcnQgLSB0d2Vlbi5kZWxheSwgMCwgdHdlZW4uZHVyYXRpb24pIC8gdHdlZW4uZHVyYXRpb247XG4gICAgICB2YXIgZWFzZWQgPSBpc05hTihlbGFwc2VkKSA/IDEgOiB0d2Vlbi5lYXNpbmcoZWxhcHNlZCk7XG4gICAgICB2YXIgc3RyaW5ncyA9IHR3ZWVuLnRvLnN0cmluZ3M7XG4gICAgICB2YXIgcm91bmQgPSB0d2Vlbi5yb3VuZDtcbiAgICAgIHZhciBudW1iZXJzID0gW107XG4gICAgICB2YXIgdG9OdW1iZXJzTGVuZ3RoID0gdHdlZW4udG8ubnVtYmVycy5sZW5ndGg7XG4gICAgICB2YXIgcHJvZ3Jlc3MgPSAodm9pZCAwKTtcbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdG9OdW1iZXJzTGVuZ3RoOyBuKyspIHtcbiAgICAgICAgdmFyIHZhbHVlID0gKHZvaWQgMCk7XG4gICAgICAgIHZhciB0b051bWJlciA9IHR3ZWVuLnRvLm51bWJlcnNbbl07XG4gICAgICAgIHZhciBmcm9tTnVtYmVyID0gdHdlZW4uZnJvbS5udW1iZXJzW25dIHx8IDA7XG4gICAgICAgIGlmICghdHdlZW4uaXNQYXRoKSB7XG4gICAgICAgICAgdmFsdWUgPSBmcm9tTnVtYmVyICsgKGVhc2VkICogKHRvTnVtYmVyIC0gZnJvbU51bWJlcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gZ2V0UGF0aFByb2dyZXNzKHR3ZWVuLnZhbHVlLCBlYXNlZCAqIHRvTnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91bmQpIHtcbiAgICAgICAgICBpZiAoISh0d2Vlbi5pc0NvbG9yICYmIG4gPiAyKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlICogcm91bmQpIC8gcm91bmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG51bWJlcnMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICAvLyBNYW51YWwgQXJyYXkucmVkdWNlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VzXG4gICAgICB2YXIgc3RyaW5nc0xlbmd0aCA9IHN0cmluZ3MubGVuZ3RoO1xuICAgICAgaWYgKCFzdHJpbmdzTGVuZ3RoKSB7XG4gICAgICAgIHByb2dyZXNzID0gbnVtYmVyc1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2dyZXNzID0gc3RyaW5nc1swXTtcbiAgICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCBzdHJpbmdzTGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICB2YXIgYSA9IHN0cmluZ3Nbc107XG4gICAgICAgICAgdmFyIGIgPSBzdHJpbmdzW3MgKyAxXTtcbiAgICAgICAgICB2YXIgbiQxID0gbnVtYmVyc1tzXTtcbiAgICAgICAgICBpZiAoIWlzTmFOKG4kMSkpIHtcbiAgICAgICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgICBwcm9ncmVzcyArPSBuJDEgKyAnICc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcm9ncmVzcyArPSBuJDEgKyBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2V0UHJvZ3Jlc3NWYWx1ZVthbmltLnR5cGVdKGFuaW1hdGFibGUudGFyZ2V0LCBhbmltLnByb3BlcnR5LCBwcm9ncmVzcywgYW5pbWF0YWJsZS50cmFuc2Zvcm1zKTtcbiAgICAgIGFuaW0uY3VycmVudFZhbHVlID0gcHJvZ3Jlc3M7XG4gICAgICBpKys7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q2FsbGJhY2soY2IpIHtcbiAgICBpZiAoaW5zdGFuY2VbY2JdICYmICFpbnN0YW5jZS5wYXNzVGhyb3VnaCkgeyBpbnN0YW5jZVtjYl0oaW5zdGFuY2UpOyB9XG4gIH1cblxuICBmdW5jdGlvbiBjb3VudEl0ZXJhdGlvbigpIHtcbiAgICBpZiAoaW5zdGFuY2UucmVtYWluaW5nICYmIGluc3RhbmNlLnJlbWFpbmluZyAhPT0gdHJ1ZSkge1xuICAgICAgaW5zdGFuY2UucmVtYWluaW5nLS07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0SW5zdGFuY2VQcm9ncmVzcyhlbmdpbmVUaW1lKSB7XG4gICAgdmFyIGluc0R1cmF0aW9uID0gaW5zdGFuY2UuZHVyYXRpb247XG4gICAgdmFyIGluc0RlbGF5ID0gaW5zdGFuY2UuZGVsYXk7XG4gICAgdmFyIGluc0VuZERlbGF5ID0gaW5zRHVyYXRpb24gLSBpbnN0YW5jZS5lbmREZWxheTtcbiAgICB2YXIgaW5zVGltZSA9IGFkanVzdFRpbWUoZW5naW5lVGltZSk7XG4gICAgaW5zdGFuY2UucHJvZ3Jlc3MgPSBtaW5NYXgoKGluc1RpbWUgLyBpbnNEdXJhdGlvbikgKiAxMDAsIDAsIDEwMCk7XG4gICAgaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrID0gaW5zVGltZSA8IGluc3RhbmNlLmN1cnJlbnRUaW1lO1xuICAgIGlmIChjaGlsZHJlbikgeyBzeW5jSW5zdGFuY2VDaGlsZHJlbihpbnNUaW1lKTsgfVxuICAgIGlmICghaW5zdGFuY2UuYmVnYW4gJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgPiAwKSB7XG4gICAgICBpbnN0YW5jZS5iZWdhbiA9IHRydWU7XG4gICAgICBzZXRDYWxsYmFjaygnYmVnaW4nKTtcbiAgICAgIHNldENhbGxiYWNrKCdsb29wQmVnaW4nKTtcbiAgICB9XG4gICAgaWYgKGluc1RpbWUgPD0gaW5zRGVsYXkgJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgIT09IDApIHtcbiAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcygwKTtcbiAgICB9XG4gICAgaWYgKChpbnNUaW1lID49IGluc0VuZERlbGF5ICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lICE9PSBpbnNEdXJhdGlvbikgfHwgIWluc0R1cmF0aW9uKSB7XG4gICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zRHVyYXRpb24pO1xuICAgIH1cbiAgICBpZiAoaW5zVGltZSA+IGluc0RlbGF5ICYmIGluc1RpbWUgPCBpbnNFbmREZWxheSkge1xuICAgICAgaWYgKCFpbnN0YW5jZS5jaGFuZ2VCZWdhbikge1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IHRydWU7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBzZXRDYWxsYmFjaygnY2hhbmdlQmVnaW4nKTtcbiAgICAgIH1cbiAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2UnKTtcbiAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNUaW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGluc3RhbmNlLmNoYW5nZUJlZ2FuKSB7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gZmFsc2U7XG4gICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2VDb21wbGV0ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IG1pbk1heChpbnNUaW1lLCAwLCBpbnNEdXJhdGlvbik7XG4gICAgaWYgKGluc3RhbmNlLmJlZ2FuKSB7IHNldENhbGxiYWNrKCd1cGRhdGUnKTsgfVxuICAgIGlmIChlbmdpbmVUaW1lID49IGluc0R1cmF0aW9uKSB7XG4gICAgICBsYXN0VGltZSA9IDA7XG4gICAgICBjb3VudEl0ZXJhdGlvbigpO1xuICAgICAgaWYgKGluc3RhbmNlLnJlbWFpbmluZykge1xuICAgICAgICBzdGFydFRpbWUgPSBub3c7XG4gICAgICAgIHNldENhbGxiYWNrKCdsb29wQ29tcGxldGUnKTtcbiAgICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BCZWdpbicpO1xuICAgICAgICBpZiAoaW5zdGFuY2UuZGlyZWN0aW9uID09PSAnYWx0ZXJuYXRlJykgeyB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xuICAgICAgICBpZiAoIWluc3RhbmNlLmNvbXBsZXRlZCkge1xuICAgICAgICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BDb21wbGV0ZScpO1xuICAgICAgICAgIHNldENhbGxiYWNrKCdjb21wbGV0ZScpO1xuICAgICAgICAgIGlmICgnUHJvbWlzZScgaW4gd2luZG93KSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICBwcm9taXNlID0gbWFrZVByb21pc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnN0YW5jZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkaXJlY3Rpb24gPSBpbnN0YW5jZS5kaXJlY3Rpb247XG4gICAgaW5zdGFuY2UucGFzc1Rocm91Z2ggPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IDA7XG4gICAgaW5zdGFuY2UucHJvZ3Jlc3MgPSAwO1xuICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XG4gICAgaW5zdGFuY2UuYmVnYW4gPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGluc3RhbmNlLnJldmVyc2VQbGF5YmFjayA9IGZhbHNlO1xuICAgIGluc3RhbmNlLnJldmVyc2VkID0gZGlyZWN0aW9uID09PSAncmV2ZXJzZSc7XG4gICAgaW5zdGFuY2UucmVtYWluaW5nID0gaW5zdGFuY2UubG9vcDtcbiAgICBjaGlsZHJlbiA9IGluc3RhbmNlLmNoaWxkcmVuO1xuICAgIGNoaWxkcmVuTGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSBjaGlsZHJlbkxlbmd0aDsgaS0tOykgeyBpbnN0YW5jZS5jaGlsZHJlbltpXS5yZXNldCgpOyB9XG4gICAgaWYgKGluc3RhbmNlLnJldmVyc2VkICYmIGluc3RhbmNlLmxvb3AgIT09IHRydWUgfHwgKGRpcmVjdGlvbiA9PT0gJ2FsdGVybmF0ZScgJiYgaW5zdGFuY2UubG9vcCA9PT0gMSkpIHsgaW5zdGFuY2UucmVtYWluaW5nKys7IH1cbiAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoMCk7XG4gIH07XG5cbiAgLy8gU2V0IFZhbHVlIGhlbHBlclxuXG4gIGluc3RhbmNlLnNldCA9IGZ1bmN0aW9uKHRhcmdldHMsIHByb3BlcnRpZXMpIHtcbiAgICBzZXRUYXJnZXRzVmFsdWUodGFyZ2V0cywgcHJvcGVydGllcyk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xuXG4gIGluc3RhbmNlLnRpY2sgPSBmdW5jdGlvbih0KSB7XG4gICAgbm93ID0gdDtcbiAgICBpZiAoIXN0YXJ0VGltZSkgeyBzdGFydFRpbWUgPSBub3c7IH1cbiAgICBzZXRJbnN0YW5jZVByb2dyZXNzKChub3cgKyAobGFzdFRpbWUgLSBzdGFydFRpbWUpKSAqIGFuaW1lLnNwZWVkKTtcbiAgfTtcblxuICBpbnN0YW5jZS5zZWVrID0gZnVuY3Rpb24odGltZSkge1xuICAgIHNldEluc3RhbmNlUHJvZ3Jlc3MoYWRqdXN0VGltZSh0aW1lKSk7XG4gIH07XG5cbiAgaW5zdGFuY2UucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xuICAgIHJlc2V0VGltZSgpO1xuICB9O1xuXG4gIGluc3RhbmNlLnBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWluc3RhbmNlLnBhdXNlZCkgeyByZXR1cm47IH1cbiAgICBpbnN0YW5jZS5wYXVzZWQgPSBmYWxzZTtcbiAgICBhY3RpdmVJbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgcmVzZXRUaW1lKCk7XG4gICAgaWYgKCFyYWYpIHsgZW5naW5lKCk7IH1cbiAgfTtcblxuICBpbnN0YW5jZS5yZXZlcnNlID0gZnVuY3Rpb24oKSB7XG4gICAgdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKTtcbiAgICByZXNldFRpbWUoKTtcbiAgfTtcblxuICBpbnN0YW5jZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgaW5zdGFuY2UucmVzZXQoKTtcbiAgICBpbnN0YW5jZS5wbGF5KCk7XG4gIH07XG5cbiAgaW5zdGFuY2UuZmluaXNoZWQgPSBwcm9taXNlO1xuICBpbnN0YW5jZS5yZXNldCgpO1xuXG4gIGlmIChpbnN0YW5jZS5hdXRvcGxheSkgeyBpbnN0YW5jZS5wbGF5KCk7IH1cblxuICByZXR1cm4gaW5zdGFuY2U7XG5cbn1cblxuLy8gUmVtb3ZlIHRhcmdldHMgZnJvbSBhbmltYXRpb25cblxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9ucykge1xuICBmb3IgKHZhciBhID0gYW5pbWF0aW9ucy5sZW5ndGg7IGEtLTspIHtcbiAgICBpZiAoYXJyYXlDb250YWlucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnNbYV0uYW5pbWF0YWJsZS50YXJnZXQpKSB7XG4gICAgICBhbmltYXRpb25zLnNwbGljZShhLCAxKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0cyh0YXJnZXRzKSB7XG4gIHZhciB0YXJnZXRzQXJyYXkgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XG4gIGZvciAodmFyIGkgPSBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgdmFyIGluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2VzW2ldO1xuICAgIHZhciBhbmltYXRpb25zID0gaW5zdGFuY2UuYW5pbWF0aW9ucztcbiAgICB2YXIgY2hpbGRyZW4gPSBpbnN0YW5jZS5jaGlsZHJlbjtcbiAgICByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zKTtcbiAgICBmb3IgKHZhciBjID0gY2hpbGRyZW4ubGVuZ3RoOyBjLS07KSB7XG4gICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltjXTtcbiAgICAgIHZhciBjaGlsZEFuaW1hdGlvbnMgPSBjaGlsZC5hbmltYXRpb25zO1xuICAgICAgcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgY2hpbGRBbmltYXRpb25zKTtcbiAgICAgIGlmICghY2hpbGRBbmltYXRpb25zLmxlbmd0aCAmJiAhY2hpbGQuY2hpbGRyZW4ubGVuZ3RoKSB7IGNoaWxkcmVuLnNwbGljZShjLCAxKTsgfVxuICAgIH1cbiAgICBpZiAoIWFuaW1hdGlvbnMubGVuZ3RoICYmICFjaGlsZHJlbi5sZW5ndGgpIHsgaW5zdGFuY2UucGF1c2UoKTsgfVxuICB9XG59XG5cbi8vIFN0YWdnZXIgaGVscGVyc1xuXG5mdW5jdGlvbiBzdGFnZ2VyKHZhbCwgcGFyYW1zKSB7XG4gIGlmICggcGFyYW1zID09PSB2b2lkIDAgKSBwYXJhbXMgPSB7fTtcblxuICB2YXIgZGlyZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvbiB8fCAnbm9ybWFsJztcbiAgdmFyIGVhc2luZyA9IHBhcmFtcy5lYXNpbmcgPyBwYXJzZUVhc2luZ3MocGFyYW1zLmVhc2luZykgOiBudWxsO1xuICB2YXIgZ3JpZCA9IHBhcmFtcy5ncmlkO1xuICB2YXIgYXhpcyA9IHBhcmFtcy5heGlzO1xuICB2YXIgZnJvbUluZGV4ID0gcGFyYW1zLmZyb20gfHwgMDtcbiAgdmFyIGZyb21GaXJzdCA9IGZyb21JbmRleCA9PT0gJ2ZpcnN0JztcbiAgdmFyIGZyb21DZW50ZXIgPSBmcm9tSW5kZXggPT09ICdjZW50ZXInO1xuICB2YXIgZnJvbUxhc3QgPSBmcm9tSW5kZXggPT09ICdsYXN0JztcbiAgdmFyIGlzUmFuZ2UgPSBpcy5hcnIodmFsKTtcbiAgdmFyIHZhbDEgPSBpc1JhbmdlID8gcGFyc2VGbG9hdCh2YWxbMF0pIDogcGFyc2VGbG9hdCh2YWwpO1xuICB2YXIgdmFsMiA9IGlzUmFuZ2UgPyBwYXJzZUZsb2F0KHZhbFsxXSkgOiAwO1xuICB2YXIgdW5pdCA9IGdldFVuaXQoaXNSYW5nZSA/IHZhbFsxXSA6IHZhbCkgfHwgMDtcbiAgdmFyIHN0YXJ0ID0gcGFyYW1zLnN0YXJ0IHx8IDAgKyAoaXNSYW5nZSA/IHZhbDEgOiAwKTtcbiAgdmFyIHZhbHVlcyA9IFtdO1xuICB2YXIgbWF4VmFsdWUgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKGVsLCBpLCB0KSB7XG4gICAgaWYgKGZyb21GaXJzdCkgeyBmcm9tSW5kZXggPSAwOyB9XG4gICAgaWYgKGZyb21DZW50ZXIpIHsgZnJvbUluZGV4ID0gKHQgLSAxKSAvIDI7IH1cbiAgICBpZiAoZnJvbUxhc3QpIHsgZnJvbUluZGV4ID0gdCAtIDE7IH1cbiAgICBpZiAoIXZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0OyBpbmRleCsrKSB7XG4gICAgICAgIGlmICghZ3JpZCkge1xuICAgICAgICAgIHZhbHVlcy5wdXNoKE1hdGguYWJzKGZyb21JbmRleCAtIGluZGV4KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGZyb21YID0gIWZyb21DZW50ZXIgPyBmcm9tSW5kZXglZ3JpZFswXSA6IChncmlkWzBdLTEpLzI7XG4gICAgICAgICAgdmFyIGZyb21ZID0gIWZyb21DZW50ZXIgPyBNYXRoLmZsb29yKGZyb21JbmRleC9ncmlkWzBdKSA6IChncmlkWzFdLTEpLzI7XG4gICAgICAgICAgdmFyIHRvWCA9IGluZGV4JWdyaWRbMF07XG4gICAgICAgICAgdmFyIHRvWSA9IE1hdGguZmxvb3IoaW5kZXgvZ3JpZFswXSk7XG4gICAgICAgICAgdmFyIGRpc3RhbmNlWCA9IGZyb21YIC0gdG9YO1xuICAgICAgICAgIHZhciBkaXN0YW5jZVkgPSBmcm9tWSAtIHRvWTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBNYXRoLnNxcnQoZGlzdGFuY2VYICogZGlzdGFuY2VYICsgZGlzdGFuY2VZICogZGlzdGFuY2VZKTtcbiAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7IHZhbHVlID0gLWRpc3RhbmNlWDsgfVxuICAgICAgICAgIGlmIChheGlzID09PSAneScpIHsgdmFsdWUgPSAtZGlzdGFuY2VZOyB9XG4gICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIG1heFZhbHVlID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgdmFsdWVzKTtcbiAgICAgIH1cbiAgICAgIGlmIChlYXNpbmcpIHsgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiBlYXNpbmcodmFsIC8gbWF4VmFsdWUpICogbWF4VmFsdWU7IH0pOyB9XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAncmV2ZXJzZScpIHsgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiBheGlzID8gKHZhbCA8IDApID8gdmFsICogLTEgOiAtdmFsIDogTWF0aC5hYnMobWF4VmFsdWUgLSB2YWwpOyB9KTsgfVxuICAgIH1cbiAgICB2YXIgc3BhY2luZyA9IGlzUmFuZ2UgPyAodmFsMiAtIHZhbDEpIC8gbWF4VmFsdWUgOiB2YWwxO1xuICAgIHJldHVybiBzdGFydCArIChzcGFjaW5nICogKE1hdGgucm91bmQodmFsdWVzW2ldICogMTAwKSAvIDEwMCkpICsgdW5pdDtcbiAgfVxufVxuXG4vLyBUaW1lbGluZVxuXG5mdW5jdGlvbiB0aW1lbGluZShwYXJhbXMpIHtcbiAgaWYgKCBwYXJhbXMgPT09IHZvaWQgMCApIHBhcmFtcyA9IHt9O1xuXG4gIHZhciB0bCA9IGFuaW1lKHBhcmFtcyk7XG4gIHRsLmR1cmF0aW9uID0gMDtcbiAgdGwuYWRkID0gZnVuY3Rpb24oaW5zdGFuY2VQYXJhbXMsIHRpbWVsaW5lT2Zmc2V0KSB7XG4gICAgdmFyIHRsSW5kZXggPSBhY3RpdmVJbnN0YW5jZXMuaW5kZXhPZih0bCk7XG4gICAgdmFyIGNoaWxkcmVuID0gdGwuY2hpbGRyZW47XG4gICAgaWYgKHRsSW5kZXggPiAtMSkgeyBhY3RpdmVJbnN0YW5jZXMuc3BsaWNlKHRsSW5kZXgsIDEpOyB9XG4gICAgZnVuY3Rpb24gcGFzc1Rocm91Z2goaW5zKSB7IGlucy5wYXNzVGhyb3VnaCA9IHRydWU7IH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7IHBhc3NUaHJvdWdoKGNoaWxkcmVuW2ldKTsgfVxuICAgIHZhciBpbnNQYXJhbXMgPSBtZXJnZU9iamVjdHMoaW5zdGFuY2VQYXJhbXMsIHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0VHdlZW5TZXR0aW5ncywgcGFyYW1zKSk7XG4gICAgaW5zUGFyYW1zLnRhcmdldHMgPSBpbnNQYXJhbXMudGFyZ2V0cyB8fCBwYXJhbXMudGFyZ2V0cztcbiAgICB2YXIgdGxEdXJhdGlvbiA9IHRsLmR1cmF0aW9uO1xuICAgIGluc1BhcmFtcy5hdXRvcGxheSA9IGZhbHNlO1xuICAgIGluc1BhcmFtcy5kaXJlY3Rpb24gPSB0bC5kaXJlY3Rpb247XG4gICAgaW5zUGFyYW1zLnRpbWVsaW5lT2Zmc2V0ID0gaXMudW5kKHRpbWVsaW5lT2Zmc2V0KSA/IHRsRHVyYXRpb24gOiBnZXRSZWxhdGl2ZVZhbHVlKHRpbWVsaW5lT2Zmc2V0LCB0bER1cmF0aW9uKTtcbiAgICBwYXNzVGhyb3VnaCh0bCk7XG4gICAgdGwuc2VlayhpbnNQYXJhbXMudGltZWxpbmVPZmZzZXQpO1xuICAgIHZhciBpbnMgPSBhbmltZShpbnNQYXJhbXMpO1xuICAgIHBhc3NUaHJvdWdoKGlucyk7XG4gICAgY2hpbGRyZW4ucHVzaChpbnMpO1xuICAgIHZhciB0aW1pbmdzID0gZ2V0SW5zdGFuY2VUaW1pbmdzKGNoaWxkcmVuLCBwYXJhbXMpO1xuICAgIHRsLmRlbGF5ID0gdGltaW5ncy5kZWxheTtcbiAgICB0bC5lbmREZWxheSA9IHRpbWluZ3MuZW5kRGVsYXk7XG4gICAgdGwuZHVyYXRpb24gPSB0aW1pbmdzLmR1cmF0aW9uO1xuICAgIHRsLnNlZWsoMCk7XG4gICAgdGwucmVzZXQoKTtcbiAgICBpZiAodGwuYXV0b3BsYXkpIHsgdGwucGxheSgpOyB9XG4gICAgcmV0dXJuIHRsO1xuICB9O1xuICByZXR1cm4gdGw7XG59XG5cbmFuaW1lLnZlcnNpb24gPSAnMy4wLjAnO1xuYW5pbWUuc3BlZWQgPSAxO1xuYW5pbWUucnVubmluZyA9IGFjdGl2ZUluc3RhbmNlcztcbmFuaW1lLnJlbW92ZSA9IHJlbW92ZVRhcmdldHM7XG5hbmltZS5nZXQgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlO1xuYW5pbWUuc2V0ID0gc2V0VGFyZ2V0c1ZhbHVlO1xuYW5pbWUuY29udmVydFB4ID0gY29udmVydFB4VG9Vbml0O1xuYW5pbWUucGF0aCA9IGdldFBhdGg7XG5hbmltZS5zZXREYXNob2Zmc2V0ID0gc2V0RGFzaG9mZnNldDtcbmFuaW1lLnN0YWdnZXIgPSBzdGFnZ2VyO1xuYW5pbWUudGltZWxpbmUgPSB0aW1lbGluZTtcbmFuaW1lLmVhc2luZyA9IHBhcnNlRWFzaW5ncztcbmFuaW1lLnBlbm5lciA9IHBlbm5lcjtcbmFuaW1lLnJhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkgeyByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjsgfTtcblxuZXhwb3J0IGRlZmF1bHQgYW5pbWU7XG4iXX0=