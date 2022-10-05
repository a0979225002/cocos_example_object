
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ssr/fow/util/SSRTiledFogOfWarUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '523d2Auk3dGFKAsk+ivvo95', 'SSRTiledFogOfWarUtil');
// scripts/ssr/fow/util/SSRTiledFogOfWarUtil.js

"use strict";

/****************************************************************************
 Copyright (c) 2017-2020 SuperSuRaccoon
 
 Site: http://www.supersuraccoon-cocos2d.com
 Mail: supersuraccoon@gmail.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
var ssr = require('../namespace/SSRFoWNamespace');

ssr.TiledFogOfWarUtil = function () {};

ssr.TiledFogOfWarUtil.STYLE = {
  "SQUARE": 1,
  "DIAMOND": 2
};
ssr.TiledFogOfWarUtil.RENDER_STYLE = {
  "RECT": 1,
  "CIRCLE": 2
};
ssr.TiledFogOfWarUtil.REVEAL_MARK = {
  "CENTER": 1,
  "AROUND": 2
}; // from top to bottom, left to right

ssr.TiledFogOfWarUtil.tilesAroundSquare = function (centerCoord, aroundCount) {
  var tilesArray = [];
  var offsetX = -aroundCount;
  var offsetY = -aroundCount;

  for (var i = 2 * aroundCount; i >= 0; i--) {
    for (var j = 0; j < 2 * aroundCount + 1; j++) {
      var coord = centerCoord.add(cc.v2(offsetX + j, offsetY + i));
      tilesArray.push(coord);
    }
  }

  return tilesArray;
}; //


ssr.TiledFogOfWarUtil.tilesAroundDiamond = function (centerCoord, aroundCount) {
  var tilesArray = [];
  var offsetX = -aroundCount;
  var offsetY = -aroundCount;

  for (var i = 2 * aroundCount; i >= 0; i--) {
    var countInARow = aroundCount - Math.abs(offsetY + i);

    for (var j = 0; j < 2 * aroundCount + 1; j++) {
      if (offsetX + j < -countInARow || offsetX + j > countInARow) {
        continue;
      }

      var coord = centerCoord.add(cc.v2(offsetX + j, offsetY + i));
      tilesArray.push(coord);
    }
  }

  return tilesArray;
};

ssr.TiledFogOfWarUtil.coordFromPos = function (position, tileSize) {
  var x = position.x / tileSize;
  var y = position.y / tileSize;
  return cc.v2(parseInt(x), parseInt(y));
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3NyXFxmb3dcXHV0aWxcXFNTUlRpbGVkRm9nT2ZXYXJVdGlsLmpzIl0sIm5hbWVzIjpbInNzciIsInJlcXVpcmUiLCJUaWxlZEZvZ09mV2FyVXRpbCIsIlNUWUxFIiwiUkVOREVSX1NUWUxFIiwiUkVWRUFMX01BUksiLCJ0aWxlc0Fyb3VuZFNxdWFyZSIsImNlbnRlckNvb3JkIiwiYXJvdW5kQ291bnQiLCJ0aWxlc0FycmF5Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJpIiwiaiIsImNvb3JkIiwiYWRkIiwiY2MiLCJ2MiIsInB1c2giLCJ0aWxlc0Fyb3VuZERpYW1vbmQiLCJjb3VudEluQVJvdyIsIk1hdGgiLCJhYnMiLCJjb29yZEZyb21Qb3MiLCJwb3NpdGlvbiIsInRpbGVTaXplIiwieCIsInkiLCJwYXJzZUludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLE9BQU8sQ0FBQyw4QkFBRCxDQUFuQjs7QUFFQUQsR0FBRyxDQUFDRSxpQkFBSixHQUF3QixZQUFXLENBQUUsQ0FBckM7O0FBRUFGLEdBQUcsQ0FBQ0UsaUJBQUosQ0FBc0JDLEtBQXRCLEdBQThCO0FBQzFCLFlBQWMsQ0FEWTtBQUUxQixhQUFjO0FBRlksQ0FBOUI7QUFJQUgsR0FBRyxDQUFDRSxpQkFBSixDQUFzQkUsWUFBdEIsR0FBcUM7QUFDakMsVUFBa0IsQ0FEZTtBQUVqQyxZQUFrQjtBQUZlLENBQXJDO0FBSUFKLEdBQUcsQ0FBQ0UsaUJBQUosQ0FBc0JHLFdBQXRCLEdBQW9DO0FBQ2hDLFlBQWMsQ0FEa0I7QUFFaEMsWUFBYztBQUZrQixDQUFwQyxFQUtBOztBQUNBTCxHQUFHLENBQUNFLGlCQUFKLENBQXNCSSxpQkFBdEIsR0FBMEMsVUFBU0MsV0FBVCxFQUFzQkMsV0FBdEIsRUFBbUM7QUFDekUsTUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLENBQUNGLFdBQWY7QUFDQSxNQUFJRyxPQUFPLEdBQUcsQ0FBQ0gsV0FBZjs7QUFDQSxPQUFLLElBQUlJLENBQUMsR0FBRyxJQUFJSixXQUFqQixFQUE4QkksQ0FBQyxJQUFJLENBQW5DLEVBQXNDQSxDQUFDLEVBQXZDLEVBQTRDO0FBQ3hDLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxJQUFJTCxXQUFKLEdBQWtCLENBQXRDLEVBQXlDSyxDQUFDLEVBQTFDLEVBQStDO0FBQzNDLFVBQUlDLEtBQUssR0FBR1AsV0FBVyxDQUFDUSxHQUFaLENBQWdCQyxFQUFFLENBQUNDLEVBQUgsQ0FBTVAsT0FBTyxHQUFHRyxDQUFoQixFQUFtQkYsT0FBTyxHQUFHQyxDQUE3QixDQUFoQixDQUFaO0FBQ0FILE1BQUFBLFVBQVUsQ0FBQ1MsSUFBWCxDQUFnQkosS0FBaEI7QUFDSDtBQUNKOztBQUNELFNBQU9MLFVBQVA7QUFDSCxDQVhELEVBYUE7OztBQUNBVCxHQUFHLENBQUNFLGlCQUFKLENBQXNCaUIsa0JBQXRCLEdBQTJDLFVBQVNaLFdBQVQsRUFBc0JDLFdBQXRCLEVBQW1DO0FBQzFFLE1BQUlDLFVBQVUsR0FBRyxFQUFqQjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxDQUFDRixXQUFmO0FBQ0EsTUFBSUcsT0FBTyxHQUFHLENBQUNILFdBQWY7O0FBQ0EsT0FBSyxJQUFJSSxDQUFDLEdBQUcsSUFBSUosV0FBakIsRUFBOEJJLENBQUMsSUFBSSxDQUFuQyxFQUFzQ0EsQ0FBQyxFQUF2QyxFQUE0QztBQUN4QyxRQUFJUSxXQUFXLEdBQUdaLFdBQVcsR0FBR2EsSUFBSSxDQUFDQyxHQUFMLENBQVNYLE9BQU8sR0FBR0MsQ0FBbkIsQ0FBaEM7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLElBQUlMLFdBQUosR0FBa0IsQ0FBdEMsRUFBeUNLLENBQUMsRUFBMUMsRUFBK0M7QUFDM0MsVUFBSUgsT0FBTyxHQUFHRyxDQUFWLEdBQWMsQ0FBQ08sV0FBZixJQUE4QlYsT0FBTyxHQUFHRyxDQUFWLEdBQWNPLFdBQWhELEVBQTZEO0FBQ3pEO0FBQ0g7O0FBQ0QsVUFBSU4sS0FBSyxHQUFHUCxXQUFXLENBQUNRLEdBQVosQ0FBZ0JDLEVBQUUsQ0FBQ0MsRUFBSCxDQUFNUCxPQUFPLEdBQUdHLENBQWhCLEVBQW1CRixPQUFPLEdBQUdDLENBQTdCLENBQWhCLENBQVo7QUFDQUgsTUFBQUEsVUFBVSxDQUFDUyxJQUFYLENBQWdCSixLQUFoQjtBQUNIO0FBQ0o7O0FBQ0QsU0FBT0wsVUFBUDtBQUNILENBZkQ7O0FBaUJBVCxHQUFHLENBQUNFLGlCQUFKLENBQXNCcUIsWUFBdEIsR0FBcUMsVUFBU0MsUUFBVCxFQUFtQkMsUUFBbkIsRUFBNkI7QUFDOUQsTUFBSUMsQ0FBQyxHQUFHRixRQUFRLENBQUNFLENBQVQsR0FBYUQsUUFBckI7QUFDQSxNQUFJRSxDQUFDLEdBQUdILFFBQVEsQ0FBQ0csQ0FBVCxHQUFhRixRQUFyQjtBQUNBLFNBQU9ULEVBQUUsQ0FBQ0MsRUFBSCxDQUFNVyxRQUFRLENBQUNGLENBQUQsQ0FBZCxFQUFtQkUsUUFBUSxDQUFDRCxDQUFELENBQTNCLENBQVA7QUFDSCxDQUpEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDIwIFN1cGVyU3VSYWNjb29uXG4gXG4gU2l0ZTogaHR0cDovL3d3dy5zdXBlcnN1cmFjY29vbi1jb2NvczJkLmNvbVxuIE1haWw6IHN1cGVyc3VyYWNjb29uQGdtYWlsLmNvbVxuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3Qgc3NyID0gcmVxdWlyZSgnLi4vbmFtZXNwYWNlL1NTUkZvV05hbWVzcGFjZScpO1xuXG5zc3IuVGlsZWRGb2dPZldhclV0aWwgPSBmdW5jdGlvbigpIHt9O1xuXG5zc3IuVGlsZWRGb2dPZldhclV0aWwuU1RZTEUgPSB7XG4gICAgXCJTUVVBUkVcIiAgICA6IDEsXG4gICAgXCJESUFNT05EXCIgICA6IDJcbn07XG5zc3IuVGlsZWRGb2dPZldhclV0aWwuUkVOREVSX1NUWUxFID0ge1xuICAgIFwiUkVDVFwiICAgICAgICAgIDogMSxcbiAgICBcIkNJUkNMRVwiICAgICAgICA6IDJcbn07XG5zc3IuVGlsZWRGb2dPZldhclV0aWwuUkVWRUFMX01BUksgPSB7XG4gICAgXCJDRU5URVJcIiAgICA6IDEsXG4gICAgXCJBUk9VTkRcIiAgICA6IDJcbn07XG5cbi8vIGZyb20gdG9wIHRvIGJvdHRvbSwgbGVmdCB0byByaWdodFxuc3NyLlRpbGVkRm9nT2ZXYXJVdGlsLnRpbGVzQXJvdW5kU3F1YXJlID0gZnVuY3Rpb24oY2VudGVyQ29vcmQsIGFyb3VuZENvdW50KSB7XG4gICAgdmFyIHRpbGVzQXJyYXkgPSBbXTtcbiAgICB2YXIgb2Zmc2V0WCA9IC1hcm91bmRDb3VudDtcbiAgICB2YXIgb2Zmc2V0WSA9IC1hcm91bmRDb3VudDtcbiAgICBmb3IgKHZhciBpID0gMiAqIGFyb3VuZENvdW50OyBpID49IDA7IGkgLS0pIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCAyICogYXJvdW5kQ291bnQgKyAxOyBqICsrKSB7XG4gICAgICAgICAgICB2YXIgY29vcmQgPSBjZW50ZXJDb29yZC5hZGQoY2MudjIob2Zmc2V0WCArIGosIG9mZnNldFkgKyBpKSk7XG4gICAgICAgICAgICB0aWxlc0FycmF5LnB1c2goY29vcmQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aWxlc0FycmF5O1xufTtcblxuLy9cbnNzci5UaWxlZEZvZ09mV2FyVXRpbC50aWxlc0Fyb3VuZERpYW1vbmQgPSBmdW5jdGlvbihjZW50ZXJDb29yZCwgYXJvdW5kQ291bnQpIHtcbiAgICB2YXIgdGlsZXNBcnJheSA9IFtdO1xuICAgIHZhciBvZmZzZXRYID0gLWFyb3VuZENvdW50O1xuICAgIHZhciBvZmZzZXRZID0gLWFyb3VuZENvdW50O1xuICAgIGZvciAodmFyIGkgPSAyICogYXJvdW5kQ291bnQ7IGkgPj0gMDsgaSAtLSkge1xuICAgICAgICB2YXIgY291bnRJbkFSb3cgPSBhcm91bmRDb3VudCAtIE1hdGguYWJzKG9mZnNldFkgKyBpKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCAyICogYXJvdW5kQ291bnQgKyAxOyBqICsrKSB7XG4gICAgICAgICAgICBpZiAob2Zmc2V0WCArIGogPCAtY291bnRJbkFSb3cgfHwgb2Zmc2V0WCArIGogPiBjb3VudEluQVJvdykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNvb3JkID0gY2VudGVyQ29vcmQuYWRkKGNjLnYyKG9mZnNldFggKyBqLCBvZmZzZXRZICsgaSkpO1xuICAgICAgICAgICAgdGlsZXNBcnJheS5wdXNoKGNvb3JkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGlsZXNBcnJheTtcbn07XG5cbnNzci5UaWxlZEZvZ09mV2FyVXRpbC5jb29yZEZyb21Qb3MgPSBmdW5jdGlvbihwb3NpdGlvbiwgdGlsZVNpemUpIHtcbiAgICB2YXIgeCA9IHBvc2l0aW9uLnggLyB0aWxlU2l6ZTtcbiAgICB2YXIgeSA9IHBvc2l0aW9uLnkgLyB0aWxlU2l6ZTtcbiAgICByZXR1cm4gY2MudjIocGFyc2VJbnQoeCksIHBhcnNlSW50KHkpKTtcbn07XG4iXX0=