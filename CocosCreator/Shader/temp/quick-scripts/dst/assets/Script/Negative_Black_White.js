
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Negative_Black_White.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5898b9+Nz1Mtb9hpqGfj1ML', 'Negative_Black_White');
// Script/Negative_Black_White.js

"use strict";

var _default_vert = require("../Shaders/ccShader_Default_Vert.js");

var _default_vert_no_mvp = require("../Shaders/ccShader_Default_Vert_noMVP.js");

var _negative_black_white_frag = require("../Shaders/ccShader_Negative_Black_White_Frag.js");

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

      this._program.initWithString(_default_vert_no_mvp, _negative_black_white_frag);

      this._program.link();

      this._program.updateUniforms();
    } else {
      this._program.initWithVertexShaderByteArray(_default_vert, _negative_black_white_frag);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOZWdhdGl2ZV9CbGFja19XaGl0ZS5qcyJdLCJuYW1lcyI6WyJfZGVmYXVsdF92ZXJ0IiwicmVxdWlyZSIsIl9kZWZhdWx0X3ZlcnRfbm9fbXZwIiwiX25lZ2F0aXZlX2JsYWNrX3doaXRlX2ZyYWciLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIl91c2UiLCJfcHJvZ3JhbSIsIkdMUHJvZ3JhbSIsInN5cyIsImlzTmF0aXZlIiwibG9nIiwiaW5pdFdpdGhTdHJpbmciLCJsaW5rIiwidXBkYXRlVW5pZm9ybXMiLCJpbml0V2l0aFZlcnRleFNoYWRlckJ5dGVBcnJheSIsImFkZEF0dHJpYnV0ZSIsIm1hY3JvIiwiQVRUUklCVVRFX05BTUVfUE9TSVRJT04iLCJWRVJURVhfQVRUUklCX1BPU0lUSU9OIiwiQVRUUklCVVRFX05BTUVfQ09MT1IiLCJWRVJURVhfQVRUUklCX0NPTE9SIiwiQVRUUklCVVRFX05BTUVfVEVYX0NPT1JEIiwiVkVSVEVYX0FUVFJJQl9URVhfQ09PUkRTIiwic2V0UHJvZ3JhbSIsIm5vZGUiLCJfc2dOb2RlIiwicHJvZ3JhbSIsImdsUHJvZ3JhbV9zdGF0ZSIsIkdMUHJvZ3JhbVN0YXRlIiwiZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtIiwic2V0R0xQcm9ncmFtU3RhdGUiLCJzZXRTaGFkZXJQcm9ncmFtIiwiY2hpbGRyZW4iLCJpIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBR0MsT0FBTyxDQUFDLHFDQUFELENBQTNCOztBQUNBLElBQUlDLG9CQUFvQixHQUFHRCxPQUFPLENBQUMsMkNBQUQsQ0FBbEM7O0FBQ0EsSUFBSUUsMEJBQTBCLEdBQUdGLE9BQU8sQ0FBQyxrREFBRCxDQUF4Qzs7QUFFQUcsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFNBQUtDLElBQUw7QUFDSCxHQVRJO0FBV0xBLEVBQUFBLElBQUksRUFBRSxnQkFDTjtBQUNJLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSU4sRUFBRSxDQUFDTyxTQUFQLEVBQWhCOztBQUVBLFFBQUlQLEVBQUUsQ0FBQ1EsR0FBSCxDQUFPQyxRQUFYLEVBQXFCO0FBQ2pCVCxNQUFBQSxFQUFFLENBQUNVLEdBQUgsQ0FBTyxzQkFBUDs7QUFDQSxXQUFLSixRQUFMLENBQWNLLGNBQWQsQ0FBNkJiLG9CQUE3QixFQUFtREMsMEJBQW5EOztBQUNBLFdBQUtPLFFBQUwsQ0FBY00sSUFBZDs7QUFDQSxXQUFLTixRQUFMLENBQWNPLGNBQWQ7QUFDSCxLQUxELE1BS0s7QUFFRCxXQUFLUCxRQUFMLENBQWNRLDZCQUFkLENBQTRDbEIsYUFBNUMsRUFBMkRHLDBCQUEzRDs7QUFFQSxXQUFLTyxRQUFMLENBQWNTLFlBQWQsQ0FBMkJmLEVBQUUsQ0FBQ2dCLEtBQUgsQ0FBU0MsdUJBQXBDLEVBQTZEakIsRUFBRSxDQUFDZ0IsS0FBSCxDQUFTRSxzQkFBdEU7O0FBQ0EsV0FBS1osUUFBTCxDQUFjUyxZQUFkLENBQTJCZixFQUFFLENBQUNnQixLQUFILENBQVNHLG9CQUFwQyxFQUEwRG5CLEVBQUUsQ0FBQ2dCLEtBQUgsQ0FBU0ksbUJBQW5FOztBQUNBLFdBQUtkLFFBQUwsQ0FBY1MsWUFBZCxDQUEyQmYsRUFBRSxDQUFDZ0IsS0FBSCxDQUFTSyx3QkFBcEMsRUFBOERyQixFQUFFLENBQUNnQixLQUFILENBQVNNLHdCQUF2RTs7QUFDQSxXQUFLaEIsUUFBTCxDQUFjTSxJQUFkOztBQUNBLFdBQUtOLFFBQUwsQ0FBY08sY0FBZDtBQUNIOztBQUVELFNBQUtVLFVBQUwsQ0FBaUIsS0FBS0MsSUFBTCxDQUFVQyxPQUEzQixFQUFvQyxLQUFLbkIsUUFBekM7QUFDSCxHQWhDSTtBQWlDTGlCLEVBQUFBLFVBQVUsRUFBQyxvQkFBVUMsSUFBVixFQUFnQkUsT0FBaEIsRUFBeUI7QUFDaEMsUUFBSTFCLEVBQUUsQ0FBQ1EsR0FBSCxDQUFPQyxRQUFYLEVBQXFCO0FBQ2pCLFVBQUlrQixlQUFlLEdBQUczQixFQUFFLENBQUM0QixjQUFILENBQWtCQyx3QkFBbEIsQ0FBMkNILE9BQTNDLENBQXRCO0FBQ0FGLE1BQUFBLElBQUksQ0FBQ00saUJBQUwsQ0FBdUJILGVBQXZCO0FBQ0gsS0FIRCxNQUdLO0FBQ0RILE1BQUFBLElBQUksQ0FBQ08sZ0JBQUwsQ0FBc0JMLE9BQXRCO0FBQ0g7O0FBR0QsUUFBSU0sUUFBUSxHQUFHUixJQUFJLENBQUNRLFFBQXBCO0FBQ0EsUUFBSSxDQUFDQSxRQUFMLEVBQ0k7O0FBRUosU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFRLENBQUNFLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDO0FBQ0ksV0FBS1YsVUFBTCxDQUFnQlMsUUFBUSxDQUFDQyxDQUFELENBQXhCLEVBQTZCUCxPQUE3QjtBQURKO0FBRUg7QUFoREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9kZWZhdWx0X3ZlcnQgPSByZXF1aXJlKFwiLi4vU2hhZGVycy9jY1NoYWRlcl9EZWZhdWx0X1ZlcnQuanNcIik7XHJcbnZhciBfZGVmYXVsdF92ZXJ0X25vX212cCA9IHJlcXVpcmUoXCIuLi9TaGFkZXJzL2NjU2hhZGVyX0RlZmF1bHRfVmVydF9ub01WUC5qc1wiKTtcclxudmFyIF9uZWdhdGl2ZV9ibGFja193aGl0ZV9mcmFnID0gcmVxdWlyZShcIi4uL1NoYWRlcnMvY2NTaGFkZXJfTmVnYXRpdmVfQmxhY2tfV2hpdGVfRnJhZy5qc1wiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl91c2UoKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3VzZTogZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0gPSBuZXcgY2MuR0xQcm9ncmFtKCk7XHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgY2MubG9nKFwidXNlIG5hdGl2ZSBHTFByb2dyYW1cIilcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5pbml0V2l0aFN0cmluZyhfZGVmYXVsdF92ZXJ0X25vX212cCwgX25lZ2F0aXZlX2JsYWNrX3doaXRlX2ZyYWcpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmxpbmsoKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5pbml0V2l0aFZlcnRleFNoYWRlckJ5dGVBcnJheShfZGVmYXVsdF92ZXJ0LCBfbmVnYXRpdmVfYmxhY2tfd2hpdGVfZnJhZyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9QT1NJVElPTiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9QT1NJVElPTik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX0NPTE9SLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX0NPTE9SKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfVEVYX0NPT1JELCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1RFWF9DT09SRFMpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmxpbmsoKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRQcm9ncmFtKCB0aGlzLm5vZGUuX3NnTm9kZSwgdGhpcy5fcHJvZ3JhbSApO1xyXG4gICAgfSxcclxuICAgIHNldFByb2dyYW06ZnVuY3Rpb24gKG5vZGUsIHByb2dyYW0pIHtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0R0xQcm9ncmFtU3RhdGUoZ2xQcm9ncmFtX3N0YXRlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbm9kZS5zZXRTaGFkZXJQcm9ncmFtKHByb2dyYW0pOyAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIGlmICghY2hpbGRyZW4pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZ3JhbShjaGlsZHJlbltpXSwgcHJvZ3JhbSk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19