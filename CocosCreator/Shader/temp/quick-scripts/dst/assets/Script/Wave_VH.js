
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Wave_VH.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b991cBdgAFF47TvkDiskWLs', 'Wave_VH');
// Script/Wave_VH.js

"use strict";

var _default_vert = require("../Shaders/ccShader_Default_Vert.js");

var _default_vert_no_mvp = require("../Shaders/ccShader_Default_Vert_noMVP.js");

var _wave_vh_frag = require("../Shaders/ccShader_Wave_VH_Frag.js");

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    this._angle = 15;
    this._motion = 0;

    this._use();
  },
  _use: function _use() {
    this._program = new cc.GLProgram();

    if (cc.sys.isNative) {
      cc.log("use native GLProgram");

      this._program.initWithString(_default_vert_no_mvp, _wave_vh_frag);

      this._program.link();

      this._program.updateUniforms();
    } else {
      this._program.initWithVertexShaderByteArray(_default_vert, _wave_vh_frag);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);

      this._program.link();

      this._program.updateUniforms();
    }

    this._uniMotion = this._program.getUniformLocationForName("motion");
    this._uniAngle = this._program.getUniformLocationForName("angle");

    if (cc.sys.isNative) {
      var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this._program);
      glProgram_state.setUniformFloat(this._uniAngle, this._angle);
    } else {
      this._program.setUniformLocationWith1f(this._uniAngle, this._angle);
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
  },
  update: function update(dt) {
    if (this._program) {
      this._program.use();

      if (cc.sys.isNative) {
        var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this._program);
        glProgram_state.setUniformFloat(this._uniMotion, this._motion += 0.05);
      } else {
        this._program.setUniformLocationWith1f(this._uniMotion, this._motion += 0.05);

        this._program.updateUniforms();
      }

      if (1.0e20 < this._motion) {
        this._motion = 0;
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXYXZlX1ZILmpzIl0sIm5hbWVzIjpbIl9kZWZhdWx0X3ZlcnQiLCJyZXF1aXJlIiwiX2RlZmF1bHRfdmVydF9ub19tdnAiLCJfd2F2ZV92aF9mcmFnIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJfYW5nbGUiLCJfbW90aW9uIiwiX3VzZSIsIl9wcm9ncmFtIiwiR0xQcm9ncmFtIiwic3lzIiwiaXNOYXRpdmUiLCJsb2ciLCJpbml0V2l0aFN0cmluZyIsImxpbmsiLCJ1cGRhdGVVbmlmb3JtcyIsImluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5IiwiYWRkQXR0cmlidXRlIiwibWFjcm8iLCJBVFRSSUJVVEVfTkFNRV9QT1NJVElPTiIsIlZFUlRFWF9BVFRSSUJfUE9TSVRJT04iLCJBVFRSSUJVVEVfTkFNRV9DT0xPUiIsIlZFUlRFWF9BVFRSSUJfQ09MT1IiLCJBVFRSSUJVVEVfTkFNRV9URVhfQ09PUkQiLCJWRVJURVhfQVRUUklCX1RFWF9DT09SRFMiLCJfdW5pTW90aW9uIiwiZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSIsIl91bmlBbmdsZSIsImdsUHJvZ3JhbV9zdGF0ZSIsIkdMUHJvZ3JhbVN0YXRlIiwiZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtIiwic2V0VW5pZm9ybUZsb2F0Iiwic2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmIiwic2V0UHJvZ3JhbSIsIm5vZGUiLCJfc2dOb2RlIiwicHJvZ3JhbSIsInNldEdMUHJvZ3JhbVN0YXRlIiwic2V0U2hhZGVyUHJvZ3JhbSIsImNoaWxkcmVuIiwiaSIsImxlbmd0aCIsInVwZGF0ZSIsImR0IiwidXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBR0MsT0FBTyxDQUFDLHFDQUFELENBQTNCOztBQUNBLElBQUlDLG9CQUFvQixHQUFHRCxPQUFPLENBQUMsMkNBQUQsQ0FBbEM7O0FB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LENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQVEsQ0FBQ0UsTUFBN0IsRUFBcUNELENBQUMsRUFBdEM7QUFDSSxXQUFLUCxVQUFMLENBQWdCTSxRQUFRLENBQUNDLENBQUQsQ0FBeEIsRUFBNkJKLE9BQTdCO0FBREo7QUFFSCxHQTdESTtBQWdFTE0sRUFBQUEsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQ1I7QUFDSSxRQUFJLEtBQUtuQyxRQUFULEVBQ0E7QUFFSSxXQUFLQSxRQUFMLENBQWNvQyxHQUFkOztBQUNDLFVBQUc1QyxFQUFFLENBQUNVLEdBQUgsQ0FBT0MsUUFBVixFQUFtQjtBQUNoQixZQUFJaUIsZUFBZSxHQUFHNUIsRUFBRSxDQUFDNkIsY0FBSCxDQUFrQkMsd0JBQWxCLENBQTJDLEtBQUt0QixRQUFoRCxDQUF0QjtBQUNBb0IsUUFBQUEsZUFBZSxDQUFDRyxlQUFoQixDQUFpQyxLQUFLTixVQUF0QyxFQUFvRCxLQUFLbkIsT0FBTCxJQUFnQixJQUFwRTtBQUNILE9BSEEsTUFHSTtBQUNELGFBQUtFLFFBQUwsQ0FBY3dCLHdCQUFkLENBQXdDLEtBQUtQLFVBQTdDLEVBQTJELEtBQUtuQixPQUFMLElBQWdCLElBQTNFOztBQUNBLGFBQUtFLFFBQUwsQ0FBY08sY0FBZDtBQUNIOztBQUNELFVBQUksU0FBUyxLQUFLVCxPQUFsQixFQUEyQjtBQUFFLGFBQUtBLE9BQUwsR0FBZSxDQUFmO0FBQW1CO0FBQ25EO0FBQ0o7QUEvRUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9kZWZhdWx0X3ZlcnQgPSByZXF1aXJlKFwiLi4vU2hhZGVycy9jY1NoYWRlcl9EZWZhdWx0X1ZlcnQuanNcIik7XHJcbnZhciBfZGVmYXVsdF92ZXJ0X25vX212cCA9IHJlcXVpcmUoXCIuLi9TaGFkZXJzL2NjU2hhZGVyX0RlZmF1bHRfVmVydF9ub01WUC5qc1wiKTtcclxudmFyIF93YXZlX3ZoX2ZyYWcgPSByZXF1aXJlKFwiLi4vU2hhZGVycy9jY1NoYWRlcl9XYXZlX1ZIX0ZyYWcuanNcIik7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fYW5nbGUgPSAxNTtcclxuICAgICAgICB0aGlzLl9tb3Rpb24gPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX3VzZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBfdXNlOiBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbSA9IG5ldyBjYy5HTFByb2dyYW0oKTtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcInVzZSBuYXRpdmUgR0xQcm9ncmFtXCIpXHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uaW5pdFdpdGhTdHJpbmcoX2RlZmF1bHRfdmVydF9ub19tdnAsIF93YXZlX3ZoX2ZyYWcpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmxpbmsoKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5KF9kZWZhdWx0X3ZlcnQsIF93YXZlX3ZoX2ZyYWcpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfUE9TSVRJT04sIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfUE9TSVRJT04pO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9DT0xPUiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1RFWF9DT09SRCwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9URVhfQ09PUkRTKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5saW5rKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0udXBkYXRlVW5pZm9ybXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fdW5pTW90aW9uID0gdGhpcy5fcHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKCBcIm1vdGlvblwiICk7XHJcbiAgICAgICAgdGhpcy5fdW5pQW5nbGUgPSB0aGlzLl9wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoIFwiYW5nbGVcIiApO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMuX3Byb2dyYW0pO1xyXG4gICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybUZsb2F0KCB0aGlzLl91bmlBbmdsZSwgdGhpcy5fYW5nbGUgKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMWYoIHRoaXMuX3VuaUFuZ2xlLCB0aGlzLl9hbmdsZSApO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2V0UHJvZ3JhbSggdGhpcy5ub2RlLl9zZ05vZGUsIHRoaXMuX3Byb2dyYW0gKTtcclxuICAgIH0sXHJcbiAgICBzZXRQcm9ncmFtOmZ1bmN0aW9uIChub2RlLCBwcm9ncmFtKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgICAgICBub2RlLnNldEdMUHJvZ3JhbVN0YXRlKGdsUHJvZ3JhbV9zdGF0ZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0U2hhZGVyUHJvZ3JhbShwcm9ncmFtKTsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB0aGlzLnNldFByb2dyYW0oY2hpbGRyZW5baV0sIHByb2dyYW0pO1xyXG4gICAgfSwgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24oIGR0IClcclxuICAgIHtcclxuICAgICAgICBpZiggdGhpcy5fcHJvZ3JhbSApXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS51c2UoKTtcclxuICAgICAgICAgICAgIGlmKGNjLnN5cy5pc05hdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMuX3Byb2dyYW0pO1xyXG4gICAgICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1GbG9hdCggdGhpcy5fdW5pTW90aW9uLCAoIHRoaXMuX21vdGlvbiArPSAwLjA1ICkgKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZiggdGhpcy5fdW5pTW90aW9uLCAoIHRoaXMuX21vdGlvbiArPSAwLjA1ICkgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0udXBkYXRlVW5pZm9ybXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiggMS4wZTIwIDwgdGhpcy5fbW90aW9uICl7IHRoaXMuX21vdGlvbiA9IDA7IH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=