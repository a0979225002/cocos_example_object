
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/EffectManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10b8cNnro5N0qUG75gHt193', 'EffectManager');
// Script/UI/EffectManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    lastSceneName: "Shader",
    nextSceneName: "Effect01"
  },
  // use this for initialization
  onLoad: function onLoad() {
    if (!window.curLevelId) {
      window.curLevelId = 1;
    }
  },
  getCurLevelName: function getCurLevelName() {
    var levelName = "Effect";
    levelName += window.curLevelId < 10 ? "0" + window.curLevelId : window.curLevelId;
    return levelName;
  },
  onClickNext: function onClickNext() {
    window.curLevelId++;

    if (window.curLevelId > 150) {
      window.curLevelId = 1;
    }

    cc.director.loadScene(this.getCurLevelName());
  },
  onClickLast: function onClickLast() {
    window.curLevelId--;

    if (window.curLevelId <= 1) {
      window.curLevelId = 0;
    }

    cc.director.loadScene(this.getCurLevelName());
  },
  onClickToGitHub: function onClickToGitHub() {
    window.open("http://forum.cocos.com/t/creator-shader/36388");
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVSVxcRWZmZWN0TWFuYWdlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxhc3RTY2VuZU5hbWUiLCJuZXh0U2NlbmVOYW1lIiwib25Mb2FkIiwid2luZG93IiwiY3VyTGV2ZWxJZCIsImdldEN1ckxldmVsTmFtZSIsImxldmVsTmFtZSIsIm9uQ2xpY2tOZXh0IiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJvbkNsaWNrTGFzdCIsIm9uQ2xpY2tUb0dpdEh1YiIsIm9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxhQUFhLEVBQUMsUUFETjtBQUVSQyxJQUFBQSxhQUFhLEVBQUM7QUFGTixHQUhQO0FBU0w7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFFBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxVQUFYLEVBQXNCO0FBQ2xCRCxNQUFBQSxNQUFNLENBQUNDLFVBQVAsR0FBa0IsQ0FBbEI7QUFDSDtBQUNKLEdBZEk7QUFlTEMsRUFBQUEsZUFBZSxFQUFDLDJCQUFVO0FBQ3RCLFFBQUlDLFNBQVMsR0FBRyxRQUFoQjtBQUNBQSxJQUFBQSxTQUFTLElBQUVILE1BQU0sQ0FBQ0MsVUFBUCxHQUFrQixFQUFsQixHQUFxQixNQUFJRCxNQUFNLENBQUNDLFVBQWhDLEdBQTJDRCxNQUFNLENBQUNDLFVBQTdEO0FBQ0EsV0FBT0UsU0FBUDtBQUNILEdBbkJJO0FBb0JMQyxFQUFBQSxXQUFXLEVBQUMsdUJBQVU7QUFDbEJKLElBQUFBLE1BQU0sQ0FBQ0MsVUFBUDs7QUFDQSxRQUFHRCxNQUFNLENBQUNDLFVBQVAsR0FBa0IsR0FBckIsRUFBeUI7QUFDckJELE1BQUFBLE1BQU0sQ0FBQ0MsVUFBUCxHQUFrQixDQUFsQjtBQUNIOztBQUNEUixJQUFBQSxFQUFFLENBQUNZLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixLQUFLSixlQUFMLEVBQXRCO0FBQ0gsR0ExQkk7QUEyQkxLLEVBQUFBLFdBQVcsRUFBQyx1QkFBVTtBQUNsQlAsSUFBQUEsTUFBTSxDQUFDQyxVQUFQOztBQUNBLFFBQUdELE1BQU0sQ0FBQ0MsVUFBUCxJQUFtQixDQUF0QixFQUF3QjtBQUNwQkQsTUFBQUEsTUFBTSxDQUFDQyxVQUFQLEdBQWtCLENBQWxCO0FBQ0g7O0FBRURSLElBQUFBLEVBQUUsQ0FBQ1ksUUFBSCxDQUFZQyxTQUFaLENBQXNCLEtBQUtKLGVBQUwsRUFBdEI7QUFDSCxHQWxDSTtBQW1DTE0sRUFBQUEsZUFBZSxFQUFDLDJCQUFVO0FBQ3ZCUixJQUFBQSxNQUFNLENBQUNTLElBQVAsQ0FBWSwrQ0FBWjtBQUNGO0FBckNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGFzdFNjZW5lTmFtZTpcIlNoYWRlclwiLFxyXG4gICAgICAgIG5leHRTY2VuZU5hbWU6XCJFZmZlY3QwMVwiLFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKCF3aW5kb3cuY3VyTGV2ZWxJZCl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jdXJMZXZlbElkPTE7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldEN1ckxldmVsTmFtZTpmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBsZXZlbE5hbWUgPSBcIkVmZmVjdFwiO1xyXG4gICAgICAgIGxldmVsTmFtZSs9d2luZG93LmN1ckxldmVsSWQ8MTA/XCIwXCIrd2luZG93LmN1ckxldmVsSWQ6d2luZG93LmN1ckxldmVsSWQ7XHJcbiAgICAgICAgcmV0dXJuIGxldmVsTmFtZTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrTmV4dDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHdpbmRvdy5jdXJMZXZlbElkKys7XHJcbiAgICAgICAgaWYod2luZG93LmN1ckxldmVsSWQ+MTUwKXtcclxuICAgICAgICAgICAgd2luZG93LmN1ckxldmVsSWQ9MTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMuZ2V0Q3VyTGV2ZWxOYW1lKCkpO1xyXG4gICAgfSxcclxuICAgIG9uQ2xpY2tMYXN0OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgd2luZG93LmN1ckxldmVsSWQtLTtcclxuICAgICAgICBpZih3aW5kb3cuY3VyTGV2ZWxJZDw9MSl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jdXJMZXZlbElkPTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0aGlzLmdldEN1ckxldmVsTmFtZSgpKTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrVG9HaXRIdWI6ZnVuY3Rpb24oKXtcclxuICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cDovL2ZvcnVtLmNvY29zLmNvbS90L2NyZWF0b3Itc2hhZGVyLzM2Mzg4XCIpO1xyXG4gICAgfVxyXG59KTtcclxuIl19