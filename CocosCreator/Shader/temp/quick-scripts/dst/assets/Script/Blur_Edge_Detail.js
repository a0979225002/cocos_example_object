
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Blur_Edge_Detail.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dd0cfUZNt1BMqcicmcIieWs', 'Blur_Edge_Detail');
// Script/Blur_Edge_Detail.js

"use strict";

var _default_vert = require("../Shaders/ccShader_Default_Vert.js");

var _default_vert_no_mvp = require("../Shaders/ccShader_Default_Vert_noMVP.js");

var _blur_edge_detail_frag = require("../Shaders/ccShader_Blur_Edge_Detail_Frag.js");

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    this._use();
  },
  _use: function _use() {
    this._program = new cc.GLProgram();

    if (cc.sys.isNative) {
      cc.log("use native GLProgram");

      this._program.initWithString(_default_vert_no_mvp, _blur_edge_detail_frag);

      this._program.link();

      this._program.updateUniforms();
    } else {
      this._program.initWithVertexShaderByteArray(_default_vert, _blur_edge_detail_frag);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);

      this._program.link();

      this._program.updateUniforms();
    }

    this._uniWidthStep = this._program.getUniformLocationForName("widthStep");
    this._uniHeightStep = this._program.getUniformLocationForName("heightStep");
    this._uniStrength = this._program.getUniformLocationForName("strength");

    if (cc.sys.isNative) {
      var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this._program);
      glProgram_state.setUniformFloat(this._uniWidthStep, 1.0 / this.node.getContentSize().width);
      glProgram_state.setUniformFloat(this._uniHeightStep, 1.0 / this.node.getContentSize().height);
      glProgram_state.setUniformFloat(this._uniStrength, 1.0);
    } else {
      this._program.setUniformLocationWith1f(this._uniWidthStep, 1.0 / this.node.getContentSize().width);

      this._program.setUniformLocationWith1f(this._uniHeightStep, 1.0 / this.node.getContentSize().height);
      /* 模糊 0.5     */

      /* 模糊 1.0     */

      /* 细节 -2.0    */

      /* 细节 -5.0    */

      /* 细节 -10.0   */

      /* 边缘 2.0     */

      /* 边缘 5.0     */

      /* 边缘 10.0    */


      this._program.setUniformLocationWith1f(this._uniStrength, 1.0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCbHVyX0VkZ2VfRGV0YWlsLmpzIl0sIm5hbWVzIjpbIl9kZWZhdWx0X3ZlcnQiLCJyZXF1aXJlIiwiX2RlZmF1bHRfdmVydF9ub19tdnAiLCJfYmx1cl9lZGdlX2RldGFpbF9mcmFnIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJfdXNlIiwiX3Byb2dyYW0iLCJHTFByb2dyYW0iLCJzeXMiLCJpc05hdGl2ZSIsImxvZyIsImluaXRXaXRoU3RyaW5nIiwibGluayIsInVwZGF0ZVVuaWZvcm1zIiwiaW5pdFdpdGhWZXJ0ZXhTaGFkZXJCeXRlQXJyYXkiLCJhZGRBdHRyaWJ1dGUiLCJtYWNybyIsIkFUVFJJQlVURV9OQU1FX1BPU0lUSU9OIiwiVkVSVEVYX0FUVFJJQl9QT1NJVElPTiIsIkFUVFJJQlVURV9OQU1FX0NPTE9SIiwiVkVSVEVYX0FUVFJJQl9DT0xPUiIsIkFUVFJJQlVURV9OQU1FX1RFWF9DT09SRCIsIlZFUlRFWF9BVFRSSUJfVEVYX0NPT1JEUyIsIl91bmlXaWR0aFN0ZXAiLCJnZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lIiwiX3VuaUhlaWdodFN0ZXAiLCJfdW5pU3RyZW5ndGgiLCJnbFByb2dyYW1fc3RhdGUiLCJHTFByb2dyYW1TdGF0ZSIsImdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbSIsInNldFVuaWZvcm1GbG9hdCIsIm5vZGUiLCJnZXRDb250ZW50U2l6ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmIiwic2V0UHJvZ3JhbSIsIl9zZ05vZGUiLCJwcm9ncmFtIiwic2V0R0xQcm9ncmFtU3RhdGUiLCJzZXRTaGFkZXJQcm9ncmFtIiwiY2hpbGRyZW4iLCJpIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBR0MsT0FBTyxDQUFDLHFDQUFELENBQTNCOztBQUNBLElBQUlDLG9C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QTdDLEVBQTJELEdBQTNEO0FBQ0g7O0FBRUQsU0FBS1UsVUFBTCxDQUFpQixLQUFLTCxJQUFMLENBQVVNLE9BQTNCLEVBQW9DLEtBQUsvQixRQUF6QztBQUNILEdBdERJO0FBdURMOEIsRUFBQUEsVUFBVSxFQUFDLG9CQUFVTCxJQUFWLEVBQWdCTyxPQUFoQixFQUF5QjtBQUNoQyxRQUFJdEMsRUFBRSxDQUFDUSxHQUFILENBQU9DLFFBQVgsRUFBcUI7QUFDakIsVUFBSWtCLGVBQWUsR0FBRzNCLEVBQUUsQ0FBQzRCLGNBQUgsQ0FBa0JDLHdCQUFsQixDQUEyQ1MsT0FBM0MsQ0FBdEI7QUFDQVAsTUFBQUEsSUFBSSxDQUFDUSxpQkFBTCxDQUF1QlosZUFBdkI7QUFDSCxLQUhELE1BR0s7QUFDREksTUFBQUEsSUFBSSxDQUFDUyxnQkFBTCxDQUFzQkYsT0FBdEI7QUFDSDs7QUFHRCxRQUFJRyxRQUFRLEdBQUdWLElBQUksQ0FBQ1UsUUFBcEI7QUFDQSxRQUFJLENBQUNBLFFBQUwsRUFDSTs7QUFFSixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQVEsQ0FBQ0UsTUFBN0IsRUFBcUNELENBQUMsRUFBdEM7QUFDSSxXQUFLTixVQUFMLENBQWdCSyxRQUFRLENBQUNDLENBQUQsQ0FBeEIsRUFBNkJKLE9BQTdCO0FBREo7QUFFSDtBQXRFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX2RlZmF1bHRfdmVydCA9IHJlcXVpcmUoXCIuLi9TaGFkZXJzL2NjU2hhZGVyX0RlZmF1bHRfVmVydC5qc1wiKTtcclxudmFyIF9kZWZhdWx0X3ZlcnRfbm9fbXZwID0gcmVxdWlyZShcIi4uL1NoYWRlcnMvY2NTaGFkZXJfRGVmYXVsdF9WZXJ0X25vTVZQLmpzXCIpO1xyXG52YXIgX2JsdXJfZWRnZV9kZXRhaWxfZnJhZyA9IHJlcXVpcmUoXCIuLi9TaGFkZXJzL2NjU2hhZGVyX0JsdXJfRWRnZV9EZXRhaWxfRnJhZy5qc1wiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl91c2UoKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3VzZTogZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0gPSBuZXcgY2MuR0xQcm9ncmFtKCk7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJ1c2UgbmF0aXZlIEdMUHJvZ3JhbVwiKVxyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmluaXRXaXRoU3RyaW5nKF9kZWZhdWx0X3ZlcnRfbm9fbXZwLCBfYmx1cl9lZGdlX2RldGFpbF9mcmFnKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5saW5rKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0udXBkYXRlVW5pZm9ybXMoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5pbml0V2l0aFZlcnRleFNoYWRlckJ5dGVBcnJheShfZGVmYXVsdF92ZXJ0LCBfYmx1cl9lZGdlX2RldGFpbF9mcmFnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1BPU0lUSU9OLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1BPU0lUSU9OKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfQ09MT1IsIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfQ09MT1IpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9URVhfQ09PUkQsIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfVEVYX0NPT1JEUyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0ubGluaygpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnVwZGF0ZVVuaWZvcm1zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX3VuaVdpZHRoU3RlcCA9IHRoaXMuX3Byb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSggXCJ3aWR0aFN0ZXBcIiApO1xyXG4gICAgICAgIHRoaXMuX3VuaUhlaWdodFN0ZXAgPSB0aGlzLl9wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoIFwiaGVpZ2h0U3RlcFwiICk7XHJcbiAgICAgICAgdGhpcy5fdW5pU3RyZW5ndGggPSB0aGlzLl9wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoIFwic3RyZW5ndGhcIiApO1xyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5fcHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoIHRoaXMuX3VuaVdpZHRoU3RlcCAsICggMS4wIC8gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGggKSApO1xyXG4gICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybUZsb2F0KCB0aGlzLl91bmlIZWlnaHRTdGVwICwgKCAxLjAgLyB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgKSApO1xyXG4gICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybUZsb2F0KCAgdGhpcy5fdW5pU3RyZW5ndGgsIDEuMCApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZiggdGhpcy5fdW5pV2lkdGhTdGVwLCAoIDEuMCAvIHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpLndpZHRoICkgKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMWYoIHRoaXMuX3VuaUhlaWdodFN0ZXAsICggMS4wIC8gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0ICkgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8qIOaooeeziiAwLjUgICAgICovXHJcbiAgICAgICAgICAgIC8qIOaooeeziiAxLjAgICAgICovXHJcbiAgICAgICAgICAgIC8qIOe7huiKgiAtMi4wICAgICovXHJcbiAgICAgICAgICAgIC8qIOe7huiKgiAtNS4wICAgICovXHJcbiAgICAgICAgICAgIC8qIOe7huiKgiAtMTAuMCAgICovXHJcbiAgICAgICAgICAgIC8qIOi+uee8mCAyLjAgICAgICovXHJcbiAgICAgICAgICAgIC8qIOi+uee8mCA1LjAgICAgICovXHJcbiAgICAgICAgICAgIC8qIOi+uee8mCAxMC4wICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKCB0aGlzLl91bmlTdHJlbmd0aCwgMS4wICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0UHJvZ3JhbSggdGhpcy5ub2RlLl9zZ05vZGUsIHRoaXMuX3Byb2dyYW0gKTtcclxuICAgIH0sXHJcbiAgICBzZXRQcm9ncmFtOmZ1bmN0aW9uIChub2RlLCBwcm9ncmFtKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgICAgICBub2RlLnNldEdMUHJvZ3JhbVN0YXRlKGdsUHJvZ3JhbV9zdGF0ZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0U2hhZGVyUHJvZ3JhbShwcm9ncmFtKTsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB0aGlzLnNldFByb2dyYW0oY2hpbGRyZW5baV0sIHByb2dyYW0pO1xyXG4gICAgfVxyXG5cclxufSk7XHJcbiJdfQ==