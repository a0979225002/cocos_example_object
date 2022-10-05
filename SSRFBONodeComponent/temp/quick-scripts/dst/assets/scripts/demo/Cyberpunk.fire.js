
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/demo/Cyberpunk.fire.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0fa78akxHxAb70buEI+3Q20', 'Cyberpunk.fire');
// scripts/demo/Cyberpunk.fire.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    fbo: cc.Node
  },
  onLoad: function onLoad() {
    cc.debug.setDisplayStats(true);
  },
  start: function start() {
    cc.tween(this.fbo).by(25, {
      position: cc.v2(-900, 0)
    }).start();
  },
  update: function update(dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZGVtb1xcQ3liZXJwdW5rLmZpcmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJmYm8iLCJOb2RlIiwib25Mb2FkIiwiZGVidWciLCJzZXREaXNwbGF5U3RhdHMiLCJzdGFydCIsInR3ZWVuIiwiYnkiLCJwb3NpdGlvbiIsInYyIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUVKLEVBQUUsQ0FBQ0s7QUFEQSxHQUhQO0FBTUxDLEVBQUFBLE1BTkssb0JBTUs7QUFDTk4sSUFBQUEsRUFBRSxDQUFDTyxLQUFILENBQVNDLGVBQVQsQ0FBeUIsSUFBekI7QUFDSCxHQVJJO0FBVUxDLEVBQUFBLEtBVkssbUJBVUk7QUFDTFQsSUFBQUEsRUFBRSxDQUFDVSxLQUFILENBQVMsS0FBS04sR0FBZCxFQUNLTyxFQURMLENBQ1EsRUFEUixFQUNZO0FBQUVDLE1BQUFBLFFBQVEsRUFBRVosRUFBRSxDQUFDYSxFQUFILENBQU0sQ0FBQyxHQUFQLEVBQVksQ0FBWjtBQUFaLEtBRFosRUFFS0osS0FGTDtBQUdILEdBZEk7QUFlTEssRUFBQUEsTUFmSyxrQkFlR0MsRUFmSCxFQWVPLENBQ1g7QUFoQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZmJvOiBjYy5Ob2RlLFxuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKHRydWUpO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZmJvKVxuICAgICAgICAgICAgLmJ5KDI1LCB7IHBvc2l0aW9uOiBjYy52MigtOTAwLCAwKSB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfSxcbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgfSxcbn0pO1xuIl19