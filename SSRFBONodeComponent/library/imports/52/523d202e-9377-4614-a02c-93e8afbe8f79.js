"use strict";
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