
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Wave_H.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bdf19y2pc1PVoqxb0sbsYvb', 'Wave_H');
// Script/Wave_H.js

"use strict";

var _default_vert = require("../Shaders/ccShader_Default_Vert.js");

var _default_vert_no_mvp = require("../Shaders/ccShader_Default_Vert_noMVP.js");

var _wave_h_frag = require("../Shaders/ccShader_Wave_H_Frag.js");

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

      this._program.initWithString(_default_vert_no_mvp, _wave_h_frag);

      this._program.link();

      this._program.updateUniforms();
    } else {
      this._program.initWithVertexShaderByteArray(_default_vert, _wave_h_frag);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXYXZlX0guanMiXSwibmFtZXMiOlsiX2RlZmF1bHRfdmVydCIsInJlcXVpcmUiLCJfZGVmYXVsdF92ZXJ0X25vX212cCIsIl93YXZlX2hfZnJhZyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiX2FuZ2xlIiwiX21vdGlvbiIsIl91c2UiLCJfcHJvZ3JhbSIsIkdMUHJvZ3JhbSIsInN5cyIsImlzTmF0aXZlIiwibG9nIiwiaW5pdFdpdGhTdHJpbmciLCJsaW5rIiwidXBkYXRlVW5pZm9ybXMiLCJpbml0V2l0aFZlcnRleFNoYWRlckJ5dGVBcnJheSIsImFkZEF0dHJpYnV0ZSIsIm1hY3JvIiwiQVRUUklCVVRFX05BTUVfUE9TSVRJT04iLCJWRVJURVhfQVRUUklCX1BPU0lUSU9OIiwiQVRUUklCVVRFX05BTUVfQ09MT1IiLCJWRVJURVhfQVRUUklCX0NPTE9SIiwiQVRUUklCVVRFX05BTUVfVEVYX0NPT1JEIiwiVkVSVEVYX0FUVFJJQl9URVhfQ09PUkRTIiwiX3VuaU1vdGlvbiIsImdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUiLCJfdW5pQW5nbGUiLCJnbFByb2dyYW1fc3RhdGUiLCJHTFByb2dyYW1TdGF0ZSIsImdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbSIsInNldFVuaWZvcm1GbG9hdCIsInNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZiIsInNldFByb2dyYW0iLCJub2RlIiwiX3NnTm9kZSIsInByb2dyYW0iLCJzZXRHTFByb2dyYW1TdGF0ZSIsInNldFNoYWRlclByb2dyYW0iLCJjaGlsZHJlbiIsImkiLCJsZW5ndGgiLCJ1cGRhdGUiLCJkdCIsInVzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxxQ0FBRCxDQUEzQjs7QUFDQSxJQUFJQyxvQkFBb0IsR0FBR0QsT0FBTyxDQUFDLDJDQUFELENBQWxDOztBQUNB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QUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFRLENBQUNFLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDO0FBQ0ksV0FBS1AsVUFBTCxDQUFnQk0sUUFBUSxDQUFDQyxDQUFELENBQXhCLEVBQTZCSixPQUE3QjtBQURKO0FBRUgsR0E5REk7QUErRExNLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUNSO0FBQ0ksUUFBSSxLQUFLbkMsUUFBVCxFQUNBO0FBRUksV0FBS0EsUUFBTCxDQUFjb0MsR0FBZDs7QUFDQSxVQUFHNUMsRUFBRSxDQUFDVSxHQUFILENBQU9DLFFBQVYsRUFBbUI7QUFDZixZQUFJaUIsZUFBZSxHQUFHNUIsRUFBRSxDQUFDNkIsY0FBSCxDQUFrQkMsd0JBQWxCLENBQTJDLEtBQUt0QixRQUFoRCxDQUF0QjtBQUNBb0IsUUFBQUEsZUFBZSxDQUFDRyxlQUFoQixDQUFpQyxLQUFLTixVQUF0QyxFQUFvRCxLQUFLbkIsT0FBTCxJQUFnQixJQUFwRTtBQUNILE9BSEQsTUFHSztBQUNELGFBQUtFLFFBQUwsQ0FBY3dCLHdCQUFkLENBQXdDLEtBQUtQLFVBQTdDLEVBQTJELEtBQUtuQixPQUFMLElBQWdCLElBQTNFOztBQUNBLGFBQUtFLFFBQUwsQ0FBY08sY0FBZDtBQUNIOztBQUVELFVBQUksU0FBUyxLQUFLVCxPQUFsQixFQUEyQjtBQUFFLGFBQUtBLE9BQUwsR0FBZSxDQUFmO0FBQW1CO0FBQ25EO0FBQ0o7QUEvRUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9kZWZhdWx0X3ZlcnQgPSByZXF1aXJlKFwiLi4vU2hhZGVycy9jY1NoYWRlcl9EZWZhdWx0X1ZlcnQuanNcIik7XHJcbnZhciBfZGVmYXVsdF92ZXJ0X25vX212cCA9IHJlcXVpcmUoXCIuLi9TaGFkZXJzL2NjU2hhZGVyX0RlZmF1bHRfVmVydF9ub01WUC5qc1wiKTtcclxudmFyIF93YXZlX2hfZnJhZyA9IHJlcXVpcmUoXCIuLi9TaGFkZXJzL2NjU2hhZGVyX1dhdmVfSF9GcmFnLmpzXCIpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2FuZ2xlID0gMTU7XHJcbiAgICAgICAgdGhpcy5fbW90aW9uID0gMDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl91c2UoKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3VzZTogZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3Byb2dyYW0gPSBuZXcgY2MuR0xQcm9ncmFtKCk7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJ1c2UgbmF0aXZlIEdMUHJvZ3JhbVwiKVxyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmluaXRXaXRoU3RyaW5nKF9kZWZhdWx0X3ZlcnRfbm9fbXZwLCBfd2F2ZV9oX2ZyYWcpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmxpbmsoKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5KF9kZWZhdWx0X3ZlcnQsIF93YXZlX2hfZnJhZyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9QT1NJVElPTiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9QT1NJVElPTik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX0NPTE9SLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX0NPTE9SKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfVEVYX0NPT1JELCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1RFWF9DT09SRFMpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmxpbmsoKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl91bmlNb3Rpb24gPSB0aGlzLl9wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoIFwibW90aW9uXCIgKTtcclxuICAgICAgICB0aGlzLl91bmlBbmdsZSA9IHRoaXMuX3Byb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSggXCJhbmdsZVwiICk7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5fcHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoIHRoaXMuX3VuaUFuZ2xlLCB0aGlzLl9hbmdsZSApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZiggdGhpcy5fdW5pQW5nbGUsIHRoaXMuX2FuZ2xlICk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zZXRQcm9ncmFtKCB0aGlzLm5vZGUuX3NnTm9kZSwgdGhpcy5fcHJvZ3JhbSApO1xyXG4gICAgfSxcclxuICAgIHNldFByb2dyYW06ZnVuY3Rpb24gKG5vZGUsIHByb2dyYW0pIHtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0R0xQcm9ncmFtU3RhdGUoZ2xQcm9ncmFtX3N0YXRlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbm9kZS5zZXRTaGFkZXJQcm9ncmFtKHByb2dyYW0pOyAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIGlmICghY2hpbGRyZW4pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZ3JhbShjaGlsZHJlbltpXSwgcHJvZ3JhbSk7XHJcbiAgICB9LCAgICBcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24oIGR0IClcclxuICAgIHtcclxuICAgICAgICBpZiggdGhpcy5fcHJvZ3JhbSApXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS51c2UoKTtcclxuICAgICAgICAgICAgaWYoY2Muc3lzLmlzTmF0aXZlKXtcclxuICAgICAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5fcHJvZ3JhbSk7XHJcbiAgICAgICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybUZsb2F0KCB0aGlzLl91bmlNb3Rpb24sICggdGhpcy5fbW90aW9uICs9IDAuMDUgKSApO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKCB0aGlzLl91bmlNb3Rpb24sICggdGhpcy5fbW90aW9uICs9IDAuMDUgKSApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiggMS4wZTIwIDwgdGhpcy5fbW90aW9uICl7IHRoaXMuX21vdGlvbiA9IDA7IH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=