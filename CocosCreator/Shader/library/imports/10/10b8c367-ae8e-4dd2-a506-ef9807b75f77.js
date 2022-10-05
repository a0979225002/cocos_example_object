"use strict";
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