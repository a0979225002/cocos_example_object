
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Negative_Image.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1223bWIWhFParPR7jg0vHan', 'Negative_Image');
// Script/Negative_Image.js

"use strict";

var _default_vert = require("../Shaders/ccShader_Default_Vert.js");

var _default_vert_no_mvp = require("../Shaders/ccShader_Default_Vert_noMVP.js");

var _negative_image_frag = require("../Shaders/ccShader_Negative_Image_Frag.js");

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

      this._program.initWithString(_default_vert_no_mvp, _negative_image_frag);

      this._program.link();

      this._program.updateUniforms();
    } else {
      this._program.initWithVertexShaderByteArray(_default_vert, _negative_image_frag);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOZWdhdGl2ZV9JbWFnZS5qcyJdLCJuYW1lcyI6WyJfZGVmYXVsdF92ZXJ0IiwicmVxdWlyZSIsIl9kZWZhdWx0X3ZlcnRfbm9fbXZwIiwiX25lZ2F0aXZlX2ltYWdlX2ZyYWciLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIl91c2UiLCJfcHJvZ3JhbSIsIkdMUHJvZ3JhbSIsInN5cyIsImlzTmF0aXZlIiwibG9nIiwiaW5pdFdpdGhTdHJpbmciLCJsaW5rIiwidXBkYXRlVW5pZm9ybXMiLCJpbml0V2l0aFZlcnRleFNoYWRlckJ5dGVBcnJheSIsImFkZEF0dHJpYnV0ZSIsIm1hY3JvIiwiQVRUUklCVVRFX05BTUVfUE9TSVRJT04iLCJWRVJURVhfQVRUUklCX1BPU0lUSU9OIiwiQVRUUklCVVRFX05BTUVfQ09MT1IiLCJWRVJURVhfQVRUUklCX0NPTE9SIiwiQVRUUklCVVRFX05BTUVfVEVYX0NPT1JEIiwiVkVSVEVYX0FUVFJJQl9URVhfQ09PUkRTIiwic2V0UHJvZ3JhbSIsIm5vZGUiLCJfc2dOb2RlIiwicHJvZ3JhbSIsImdsUHJvZ3JhbV9zdGF0ZSIsIkdMUHJvZ3JhbVN0YXRlIiwiZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtIiwic2V0R0xQcm9ncmFtU3RhdGUiLCJzZXRTaGFkZXJQcm9ncmFtIiwiY2hpbGRyZW4iLCJpIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBR0MsT0FBTyxDQUFDLHFDQUFELENBQTNCOztBQUNBLElBQUlDLG9CQUFvQixHQUFHRCxPQUFPLENBQUMsMkNBQUQsQ0FBbEM7O0FBQ0EsSUFBSUUsb0JBQW9CLEdBQUdGLE9BQU8sQ0FBQyw0Q0FBRCxDQUFsQzs7QUFFQUcsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFNBQUtDLElBQUw7QUFDSCxHQVRJO0FBV0xBLEVBQUFBLElBQUksRUFBRSxnQkFDTjtBQUNJLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSU4sRUFBRSxDQUFDTyxTQUFQLEVBQWhCOztBQUVBLFFBQUlQLEVBQUUsQ0FBQ1EsR0FBSCxDQUFPQyxRQUFYLEVBQXFCO0FBQ2pCVCxNQUFBQSxFQUFFLENBQUNVLEdBQUgsQ0FBTyxzQkFBUDs7QUFDQSxXQUFLSixRQUFMLENBQWNLLGNBQWQsQ0FBNkJiLG9CQUE3QixFQUFtREMsb0JBQW5EOztBQUNBLFdBQUtPLFFBQUwsQ0FBY00sSUFBZDs7QUFDQSxXQUFLTixRQUFMLENBQWNPLGNBQWQ7QUFDSCxLQUxELE1BS0s7QUFDRCxXQUFLUCxRQUFMLENBQWNRLDZCQUFkLENBQTRDbEIsYUFBNUMsRUFBMkRHLG9CQUEzRDs7QUFDQSxXQUFLTyxRQUFMLENBQWNTLFlBQWQsQ0FBMkJmLEVBQUUsQ0FBQ2dCLEtBQUgsQ0FBU0MsdUJBQXBDLEVBQTZEakIsRUFBRSxDQUFDZ0IsS0FBSCxDQUFTRSxzQkFBdEU7O0FBQ0EsV0FBS1osUUFBTCxDQUFjUyxZQUFkLENBQTJCZixFQUFFLENBQUNnQixLQUFILENBQVNHLG9CQUFwQyxFQUEwRG5CLEVBQUUsQ0FBQ2dCLEtBQUgsQ0FBU0ksbUJBQW5FOztBQUNBLFdBQUtkLFFBQUwsQ0FBY1MsWUFBZCxDQUEyQmYsRUFBRSxDQUFDZ0IsS0FBSCxDQUFTSyx3QkFBcEMsRUFBOERyQixFQUFFLENBQUNnQixLQUFILENBQVNNLHdCQUF2RTs7QUFDQSxXQUFLaEIsUUFBTCxDQUFjTSxJQUFkOztBQUNBLFdBQUtOLFFBQUwsQ0FBY08sY0FBZDtBQUNIOztBQUVELFNBQUtVLFVBQUwsQ0FBaUIsS0FBS0MsSUFBTCxDQUFVQyxPQUEzQixFQUFvQyxLQUFLbkIsUUFBekM7QUFDSCxHQTlCSTtBQStCTGlCLEVBQUFBLFVBQVUsRUFBQyxvQkFBVUMsSUFBVixFQUFnQkUsT0FBaEIsRUFBeUI7QUFDaEMsUUFBSTFCLEVBQUUsQ0FBQ1EsR0FBSCxDQUFPQyxRQUFYLEVBQXFCO0FBQ2pCLFVBQUlrQixlQUFlLEdBQUczQixFQUFFLENBQUM0QixjQUFILENBQWtCQyx3QkFBbEIsQ0FBMkNILE9BQTNDLENBQXRCO0FBQ0FGLE1BQUFBLElBQUksQ0FBQ00saUJBQUwsQ0FBdUJILGVBQXZCO0FBQ0gsS0FIRCxNQUdLO0FBQ0RILE1BQUFBLElBQUksQ0FBQ08sZ0JBQUwsQ0FBc0JMLE9BQXRCO0FBQ0g7O0FBR0QsUUFBSU0sUUFBUSxHQUFHUixJQUFJLENBQUNRLFFBQXBCO0FBQ0EsUUFBSSxDQUFDQSxRQUFMLEVBQ0k7O0FBRUosU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFRLENBQUNFLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDO0FBQ0ksV0FBS1YsVUFBTCxDQUFnQlMsUUFBUSxDQUFDQyxDQUFELENBQXhCLEVBQTZCUCxPQUE3QjtBQURKO0FBRUg7QUE5Q0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9kZWZhdWx0X3ZlcnQgPSByZXF1aXJlKFwiLi4vU2hhZGVycy9jY1NoYWRlcl9EZWZhdWx0X1ZlcnQuanNcIik7XHJcbnZhciBfZGVmYXVsdF92ZXJ0X25vX212cCA9IHJlcXVpcmUoXCIuLi9TaGFkZXJzL2NjU2hhZGVyX0RlZmF1bHRfVmVydF9ub01WUC5qc1wiKTtcclxudmFyIF9uZWdhdGl2ZV9pbWFnZV9mcmFnID0gcmVxdWlyZShcIi4uL1NoYWRlcnMvY2NTaGFkZXJfTmVnYXRpdmVfSW1hZ2VfRnJhZy5qc1wiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl91c2UoKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3VzZTogZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0gPSBuZXcgY2MuR0xQcm9ncmFtKCk7XHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgY2MubG9nKFwidXNlIG5hdGl2ZSBHTFByb2dyYW1cIilcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5pbml0V2l0aFN0cmluZyhfZGVmYXVsdF92ZXJ0X25vX212cCwgX25lZ2F0aXZlX2ltYWdlX2ZyYWcpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmxpbmsoKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5KF9kZWZhdWx0X3ZlcnQsIF9uZWdhdGl2ZV9pbWFnZV9mcmFnKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfUE9TSVRJT04sIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfUE9TSVRJT04pO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9DT0xPUiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1RFWF9DT09SRCwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9URVhfQ09PUkRTKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5saW5rKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0udXBkYXRlVW5pZm9ybXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0UHJvZ3JhbSggdGhpcy5ub2RlLl9zZ05vZGUsIHRoaXMuX3Byb2dyYW0gKTtcclxuICAgIH0sXHJcbiAgICBzZXRQcm9ncmFtOmZ1bmN0aW9uIChub2RlLCBwcm9ncmFtKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgICAgICBub2RlLnNldEdMUHJvZ3JhbVN0YXRlKGdsUHJvZ3JhbV9zdGF0ZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0U2hhZGVyUHJvZ3JhbShwcm9ncmFtKTsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB0aGlzLnNldFByb2dyYW0oY2hpbGRyZW5baV0sIHByb2dyYW0pO1xyXG4gICAgfVxyXG5cclxufSk7XHJcbiJdfQ==