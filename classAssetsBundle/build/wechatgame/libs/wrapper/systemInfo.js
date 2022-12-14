"use strict";

var systemInfo = require('../common/engine3d/globalAdapter/BaseSystemInfo');

var adapter = window.__globalAdapter;
var env = wx.getSystemInfoSync();
var adaptSysFunc = systemInfo.adaptSys;
Object.assign(systemInfo, {
  // Extend adaptSys interface
  adaptSys: function adaptSys(sys) {
    adaptSysFunc.call(this, sys); // TODO: add mac platform

    if (env.platform === 'windows') {
      sys.isMobile = false;
      sys.os = sys.OS_WINDOWS;
    } else if (env.platform === 'devtools') {
      var system = env.system.toLowerCase();

      if (system.indexOf('android') > -1) {
        sys.os = sys.OS_ANDROID;
      } else if (system.indexOf('ios') > -1) {
        sys.os = sys.OS_IOS;
      }
    }

    sys.platform = sys.WECHAT_GAME; // move to common if other platforms support

    sys.getSafeAreaRect = function () {
      var view = cc.view;
      var safeArea = adapter.getSafeArea();
      var screenSize = view.getFrameSize(); // Get leftBottom and rightTop point in UI coordinates

      var leftBottom = new cc.Vec2(safeArea.left, safeArea.bottom);
      var rightTop = new cc.Vec2(safeArea.right, safeArea.top); // Returns the real location in view.

      var relatedPos = {
        left: 0,
        top: 0,
        width: screenSize.width,
        height: screenSize.height
      };
      view.convertToLocationInView(leftBottom.x, leftBottom.y, relatedPos, leftBottom);
      view.convertToLocationInView(rightTop.x, rightTop.y, relatedPos, rightTop); // convert view point to design resolution size

      view._convertPointWithScale(rightTop); // HACK: view value on wechat have some error


      leftBottom.x = leftBottom.x / view._scaleX;
      leftBottom.y = leftBottom.y / view._scaleY;
      return cc.rect(leftBottom.x, leftBottom.y, rightTop.x - leftBottom.x, rightTop.y - leftBottom.y);
    };
  }
});
__globalAdapter.init = systemInfo.init;
__globalAdapter.adaptSys = systemInfo.adaptSys;