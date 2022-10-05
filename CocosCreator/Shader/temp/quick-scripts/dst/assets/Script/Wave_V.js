
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Wave_V.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63a8cDVi8RNc78rJD126ks9', 'Wave_V');
// Script/Wave_V.js

"use strict";

var _default_vert = require("../Shaders/ccShader_Default_Vert.js");

var _default_vert_no_mvp = require("../Shaders/ccShader_Default_Vert_noMVP.js");

var _wave_v_frag = require("../Shaders/ccShader_Wave_V_Frag.js");

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

      this._program.initWithString(_default_vert_no_mvp, _wave_v_frag);

      this._program.link();

      this._program.updateUniforms();
    } else {
      this._program.initWithVertexShaderByteArray(_default_vert, _wave_v_frag);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXYXZlX1YuanMiXSwibmFtZXMiOlsiX2RlZmF1bHRfdmVydCIsInJlcXVpcmUiLCJfZGVmYXVsdF92ZXJ0X25vX212cCIsIl93YXZlX3ZfZnJhZyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiX2FuZ2xlIiwiX21vdGlvbiIsIl91c2UiLCJfcHJvZ3JhbSIsIkdMUHJvZ3JhbSIsInN5cyIsImlzTmF0aXZlIiwibG9nIiwiaW5pdFdpdGhTdHJpbmciLCJsaW5rIiwidXBkYXRlVW5pZm9ybXMiLCJpbml0V2l0aFZlcnRleFNoYWRlckJ5dGVBcnJheSIsImFkZEF0dHJpYnV0ZSIsIm1hY3JvIiwiQVRUUklCVVRFX05BTUVfUE9TSVRJT04iLCJWRVJURVhfQVRUUklCX1BPU0lUSU9OIiwiQVRUUklCVVRFX05BTUVfQ09MT1IiLCJWRVJURVhfQVRUUklCX0NPTE9SIiwiQVRUUklCVVRFX05BTUVfVEVYX0NPT1JEIiwiVkVSVEVYX0FUVFJJQl9URVhfQ09PUkRTIiwiX3VuaU1vdGlvbiIsImdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUiLCJfdW5pQW5nbGUiLCJnbFByb2dyYW1fc3RhdGUiLCJHTFByb2dyYW1TdGF0ZSIsImdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbSIsInNldFVuaWZvcm1GbG9hdCIsInNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZiIsInNldFByb2dyYW0iLCJub2RlIiwiX3NnTm9kZSIsInByb2dyYW0iLCJzZXRHTFByb2dyYW1TdGF0ZSIsInNldFNoYWRlclByb2dyYW0iLCJjaGlsZHJlbiIsImkiLCJsZW5ndGgiLCJ1cGRhdGUiLCJkdCIsInVzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxxQ0FBRCxDQUEzQjs7QUFDQSxJQUFJQyxvQkFBb0IsR0FBR0QsT0FBTyxDQUFDLDJDQUFELENBQWxDOztBQUNB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QUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFRLENBQUNFLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDO0FBQ0ksV0FBS1AsVUFBTCxDQUFnQk0sUUFBUSxDQUFDQyxDQUFELENBQXhCLEVBQTZCSixPQUE3QjtBQURKO0FBRUgsR0E3REk7QUFnRUxNLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUNSO0FBQ0ksUUFBSSxLQUFLbkMsUUFBVCxFQUNBO0FBRUksV0FBS0EsUUFBTCxDQUFjb0MsR0FBZDs7QUFDQSxVQUFHNUMsRUFBRSxDQUFDVSxHQUFILENBQU9DLFFBQVYsRUFBbUI7QUFDZixZQUFJaUIsZUFBZSxHQUFHNUIsRUFBRSxDQUFDNkIsY0FBSCxDQUFrQkMsd0JBQWxCLENBQTJDLEtBQUt0QixRQUFoRCxDQUF0QjtBQUNBb0IsUUFBQUEsZUFBZSxDQUFDRyxlQUFoQixDQUFpQyxLQUFLTixVQUF0QyxFQUFvRCxLQUFLbkIsT0FBTCxJQUFnQixJQUFwRTtBQUNILE9BSEQsTUFHSztBQUNELGFBQUtFLFFBQUwsQ0FBY3dCLHdCQUFkLENBQXdDLEtBQUtQLFVBQTdDLEVBQTJELEtBQUtuQixPQUFMLElBQWdCLElBQTNFOztBQUNBLGFBQUtFLFFBQUwsQ0FBY08sY0FBZDtBQUNIOztBQUVELFVBQUksU0FBUyxLQUFLVCxPQUFsQixFQUEyQjtBQUFFLGFBQUtBLE9BQUwsR0FBZSxDQUFmO0FBQW1CO0FBQ25EO0FBQ0o7QUFoRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9kZWZhdWx0X3ZlcnQgPSByZXF1aXJlKFwiLi4vU2hhZGVycy9jY1NoYWRlcl9EZWZhdWx0X1ZlcnQuanNcIik7XHJcbnZhciBfZGVmYXVsdF92ZXJ0X25vX212cCA9IHJlcXVpcmUoXCIuLi9TaGFkZXJzL2NjU2hhZGVyX0RlZmF1bHRfVmVydF9ub01WUC5qc1wiKTtcclxudmFyIF93YXZlX3ZfZnJhZyA9IHJlcXVpcmUoXCIuLi9TaGFkZXJzL2NjU2hhZGVyX1dhdmVfVl9GcmFnLmpzXCIpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2FuZ2xlID0gMTU7XHJcbiAgICAgICAgdGhpcy5fbW90aW9uID0gMDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl91c2UoKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3VzZTogZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0gPSBuZXcgY2MuR0xQcm9ncmFtKCk7XHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgY2MubG9nKFwidXNlIG5hdGl2ZSBHTFByb2dyYW1cIilcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5pbml0V2l0aFN0cmluZyhfZGVmYXVsdF92ZXJ0X25vX212cCwgX3dhdmVfdl9mcmFnKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5saW5rKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0udXBkYXRlVW5pZm9ybXMoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5pbml0V2l0aFZlcnRleFNoYWRlckJ5dGVBcnJheShfZGVmYXVsdF92ZXJ0LCBfd2F2ZV92X2ZyYWcpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfUE9TSVRJT04sIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfUE9TSVRJT04pO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9DT0xPUiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1RFWF9DT09SRCwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9URVhfQ09PUkRTKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5saW5rKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0udXBkYXRlVW5pZm9ybXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fdW5pTW90aW9uID0gdGhpcy5fcHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKCBcIm1vdGlvblwiICk7XHJcbiAgICAgICAgdGhpcy5fdW5pQW5nbGUgPSB0aGlzLl9wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoIFwiYW5nbGVcIiApO1xyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5fcHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoIHRoaXMuX3VuaUFuZ2xlLCB0aGlzLl9hbmdsZSApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZiggdGhpcy5fdW5pQW5nbGUsIHRoaXMuX2FuZ2xlICk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zZXRQcm9ncmFtKCB0aGlzLm5vZGUuX3NnTm9kZSwgdGhpcy5fcHJvZ3JhbSApO1xyXG4gICAgfSxcclxuICAgIHNldFByb2dyYW06ZnVuY3Rpb24gKG5vZGUsIHByb2dyYW0pIHtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0R0xQcm9ncmFtU3RhdGUoZ2xQcm9ncmFtX3N0YXRlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbm9kZS5zZXRTaGFkZXJQcm9ncmFtKHByb2dyYW0pOyAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIGlmICghY2hpbGRyZW4pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZ3JhbShjaGlsZHJlbltpXSwgcHJvZ3JhbSk7XHJcbiAgICB9LCAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiggZHQgKVxyXG4gICAge1xyXG4gICAgICAgIGlmKCB0aGlzLl9wcm9ncmFtIClcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnVzZSgpO1xyXG4gICAgICAgICAgICBpZihjYy5zeXMuaXNOYXRpdmUpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGdsUHJvZ3JhbV9zdGF0ZSA9IGNjLkdMUHJvZ3JhbVN0YXRlLmdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbSh0aGlzLl9wcm9ncmFtKTtcclxuICAgICAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoIHRoaXMuX3VuaU1vdGlvbiwgKCB0aGlzLl9tb3Rpb24gKz0gMC4wNSApICk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMWYoIHRoaXMuX3VuaU1vdGlvbiwgKCB0aGlzLl9tb3Rpb24gKz0gMC4wNSApICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnVwZGF0ZVVuaWZvcm1zKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCAxLjBlMjAgPCB0aGlzLl9tb3Rpb24gKXsgdGhpcy5fbW90aW9uID0gMDsgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==