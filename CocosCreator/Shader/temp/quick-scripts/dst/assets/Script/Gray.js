
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Gray.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'beb6duloztFW7GMx6d9gIya', 'Gray');
// Script/Gray.js

"use strict";

var _default_vert = require("../Shaders/ccShader_Default_Vert.js");

var _default_vert_no_mvp = require("../Shaders/ccShader_Default_Vert_noMVP.js");

var _gray_frag = require("../Shaders/ccShader_Gray_Frag.js");

cc.Class({
  "extends": cc.Component,
  properties: {
    grayFactor: 1
  },
  onLoad: function onLoad() {
    this._use();
  },
  _use: function _use() {
    this._program = new cc.GLProgram();

    if (cc.sys.isNative) {
      cc.log("use native GLProgram");

      this._program.initWithString(_default_vert_no_mvp, _gray_frag);

      this._program.link();

      this._program.updateUniforms();
    } else {
      this._program.initWithVertexShaderByteArray(_default_vert, _gray_frag);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);

      this._program.link();

      this._program.updateUniforms();
    }

    this.setProgram(this.node._sgNode, this._program);
  },
  setProgram: function setProgram(node, program) {
    if (cc.sys.isNative) {
      var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
      node.setGLProgramState(glProgram_state);
    } else {
      node.setShaderProgram(program);
    }

    var children = node.children;
    if (!children) return;

    for (var i = 0; i < children.length; i++) {
      this.setProgram(children[i], program);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHcmF5LmpzIl0sIm5hbWVzIjpbIl9kZWZhdWx0X3ZlcnQiLCJyZXF1aXJlIiwiX2RlZmF1bHRfdmVydF9ub19tdnAiLCJfZ3JheV9mcmFnIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmF5RmFjdG9yIiwib25Mb2FkIiwiX3VzZSIsIl9wcm9ncmFtIiwiR0xQcm9ncmFtIiwic3lzIiwiaXNOYXRpdmUiLCJsb2ciLCJpbml0V2l0aFN0cmluZyIsImxpbmsiLCJ1cGRhdGVVbmlmb3JtcyIsImluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5IiwiYWRkQXR0cmlidXRlIiwibWFjcm8iLCJBVFRSSUJVVEVfTkFNRV9QT1NJVElPTiIsIlZFUlRFWF9BVFRSSUJfUE9TSVRJT04iLCJBVFRSSUJVVEVfTkFNRV9DT0xPUiIsIlZFUlRFWF9BVFRSSUJfQ09MT1IiLCJBVFRSSUJVVEVfTkFNRV9URVhfQ09PUkQiLCJWRVJURVhfQVRUUklCX1RFWF9DT09SRFMiLCJzZXRQcm9ncmFtIiwibm9kZSIsIl9zZ05vZGUiLCJwcm9ncmFtIiwiZ2xQcm9ncmFtX3N0YXRlIiwiR0xQcm9ncmFtU3RhdGUiLCJnZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0iLCJzZXRHTFByb2dyYW1TdGF0ZSIsInNldFNoYWRlclByb2dyYW0iLCJjaGlsZHJlbiIsImkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHQyxPQUFPLENBQUMscUNBQUQsQ0FBM0I7O0FBQ0EsSUFBSUMsb0JBQW9CLEdBQUdELE9BQU8sQ0FBQywyQ0FBRCxDQUFsQzs7QUFDQSxJQUFJRSxVQUFVLEdBQUdGLE9BQU8sQ0FBQyxrQ0FBRCxDQUF4Qjs7QUFFQUcsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ05DLElBQUFBLFVBQVUsRUFBQztBQURMLEdBSFA7QUFPTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFNBQUtDLElBQUw7QUFDSCxHQVRJO0FBV0xBLEVBQUFBLElBQUksRUFBRSxnQkFDTjtBQUNJLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSVAsRUFBRSxDQUFDUSxTQUFQLEVBQWhCOztBQUVBLFFBQUlSLEVBQUUsQ0FBQ1MsR0FBSCxDQUFPQyxRQUFYLEVBQXFCO0FBQ2pCVixNQUFBQSxFQUFFLENBQUNXLEdBQUgsQ0FBTyxzQkFBUDs7QUFDQSxXQUFLSixRQUFMLENBQWNLLGNBQWQsQ0FBNkJkLG9CQUE3QixFQUFtREMsVUFBbkQ7O0FBQ0EsV0FBS1EsUUFBTCxDQUFjTSxJQUFkOztBQUNBLFdBQUtOLFFBQUwsQ0FBY08sY0FBZDtBQUNILEtBTEQsTUFLSztBQUNELFdBQUtQLFFBQUwsQ0FBY1EsNkJBQWQsQ0FBNENuQixhQUE1QyxFQUEyREcsVUFBM0Q7O0FBQ0EsV0FBS1EsUUFBTCxDQUFjUyxZQUFkLENBQTJCaEIsRUFBRSxDQUFDaUIsS0FBSCxDQUFTQyx1QkFBcEMsRUFBNkRsQixFQUFFLENBQUNpQixLQUFILENBQVNFLHNCQUF0RTs7QUFDQSxXQUFLWixRQUFMLENBQWNTLFlBQWQsQ0FBMkJoQixFQUFFLENBQUNpQixLQUFILENBQVNHLG9CQUFwQyxFQUEwRHBCLEVBQUUsQ0FBQ2lCLEtBQUgsQ0FBU0ksbUJBQW5FOztBQUNBLFdBQUtkLFFBQUwsQ0FBY1MsWUFBZCxDQUEyQmhCLEVBQUUsQ0FBQ2lCLEtBQUgsQ0FBU0ssd0JBQXBDLEVBQThEdEIsRUFBRSxDQUFDaUIsS0FBSCxDQUFTTSx3QkFBdkU7O0FBQ0EsV0FBS2hCLFFBQUwsQ0FBY00sSUFBZDs7QUFDQSxXQUFLTixRQUFMLENBQWNPLGNBQWQ7QUFDSDs7QUFDRCxTQUFLVSxVQUFMLENBQWlCLEtBQUtDLElBQUwsQ0FBVUMsT0FBM0IsRUFBb0MsS0FBS25CLFFBQXpDO0FBQ0gsR0E3Qkk7QUE4QkxpQixFQUFBQSxVQUFVLEVBQUMsb0JBQVVDLElBQVYsRUFBZ0JFLE9BQWhCLEVBQXlCO0FBQ2hDLFFBQUkzQixFQUFFLENBQUNTLEdBQUgsQ0FBT0MsUUFBWCxFQUFxQjtBQUNqQixVQUFJa0IsZUFBZSxHQUFHNUIsRUFBRSxDQUFDNkIsY0FBSCxDQUFrQkMsd0JBQWxCLENBQTJDSCxPQUEzQyxDQUF0QjtBQUNBRixNQUFBQSxJQUFJLENBQUNNLGlCQUFMLENBQXVCSCxlQUF2QjtBQUNILEtBSEQsTUFHSztBQUNESCxNQUFBQSxJQUFJLENBQUNPLGdCQUFMLENBQXNCTCxPQUF0QjtBQUNIOztBQUVELFFBQUlNLFFBQVEsR0FBR1IsSUFBSSxDQUFDUSxRQUFwQjtBQUNBLFFBQUksQ0FBQ0EsUUFBTCxFQUNJOztBQUNKLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBUSxDQUFDRSxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QztBQUNJLFdBQUtWLFVBQUwsQ0FBZ0JTLFFBQVEsQ0FBQ0MsQ0FBRCxDQUF4QixFQUE2QlAsT0FBN0I7QUFESjtBQUVIO0FBM0NJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfZGVmYXVsdF92ZXJ0ID0gcmVxdWlyZShcIi4uL1NoYWRlcnMvY2NTaGFkZXJfRGVmYXVsdF9WZXJ0LmpzXCIpO1xyXG52YXIgX2RlZmF1bHRfdmVydF9ub19tdnAgPSByZXF1aXJlKFwiLi4vU2hhZGVycy9jY1NoYWRlcl9EZWZhdWx0X1ZlcnRfbm9NVlAuanNcIik7XHJcbnZhciBfZ3JheV9mcmFnID0gcmVxdWlyZShcIi4uL1NoYWRlcnMvY2NTaGFkZXJfR3JheV9GcmFnLmpzXCIpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgIGdyYXlGYWN0b3I6MSwgIFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl91c2UoKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3VzZTogZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0gPSBuZXcgY2MuR0xQcm9ncmFtKCk7XHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgY2MubG9nKFwidXNlIG5hdGl2ZSBHTFByb2dyYW1cIilcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5pbml0V2l0aFN0cmluZyhfZGVmYXVsdF92ZXJ0X25vX212cCwgX2dyYXlfZnJhZyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0ubGluaygpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnVwZGF0ZVVuaWZvcm1zKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uaW5pdFdpdGhWZXJ0ZXhTaGFkZXJCeXRlQXJyYXkoX2RlZmF1bHRfdmVydCwgX2dyYXlfZnJhZyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1BPU0lUSU9OLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1BPU0lUSU9OKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfQ09MT1IsIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfQ09MT1IpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9URVhfQ09PUkQsIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfVEVYX0NPT1JEUyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0ubGluaygpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnVwZGF0ZVVuaWZvcm1zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0UHJvZ3JhbSggdGhpcy5ub2RlLl9zZ05vZGUsIHRoaXMuX3Byb2dyYW0gKTtcclxuICAgIH0sXHJcbiAgICBzZXRQcm9ncmFtOmZ1bmN0aW9uIChub2RlLCBwcm9ncmFtKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgICAgICBub2RlLnNldEdMUHJvZ3JhbVN0YXRlKGdsUHJvZ3JhbV9zdGF0ZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0U2hhZGVyUHJvZ3JhbShwcm9ncmFtKTsgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIGlmICghY2hpbGRyZW4pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB0aGlzLnNldFByb2dyYW0oY2hpbGRyZW5baV0sIHByb2dyYW0pO1xyXG4gICAgfSAgICBcclxufSk7XHJcbiJdfQ==