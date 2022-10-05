
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Shadow_Black_White.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b15cFSchVHjaD3Jpz4tjaj', 'Shadow_Black_White');
// Script/Shadow_Black_White.js

"use strict";

var _default_vert = require("../Shaders/ccShader_Default_Vert.js");

var _default_vert_no_mvp = require("../Shaders/ccShader_Default_Vert_noMVP.js");

var _shadow_black_white_frag = require("../Shaders/ccShader_Shadow_Black_White_Frag.js");

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    this._strength = 0.001;
    this._motion = 0;

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
      this._program.initWithVertexShaderByteArray(_default_vert, _shadow_black_white_frag);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);

      this._program.link();

      this._program.updateUniforms();
    }

    this._uniStrength = this._program.getUniformLocationForName("strength");
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
        glProgram_state.setUniformFloat(this._uniStrength, this._motion += this._strength);
      } else {
        this._program.setUniformLocationWith1f(this._uniStrength, this._motion += this._strength);

        this._program.updateUniforms();
      }

      if (1.0 < this._motion || 0.0 > this._motion) {
        this._strength *= -1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTaGFkb3dfQmxhY2tfV2hpdGUuanMiXSwibmFtZXMiOlsiX2RlZmF1bHRfdmVydCIsInJlcXVpcmUiLCJfZGVmYXVsdF92ZXJ0X25vX212cCIsIl9zaGFkb3dfYmxhY2tfd2hpdGVfZnJhZyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiX3N0cmVuZ3RoIiwiX21vdGlvbiIsIl91c2UiLCJfcHJvZ3JhbSIsIkdMUHJvZ3JhbSIsInN5cyIsImlzTmF0aXZlIiwibG9nIiwiaW5pdFdpdGhTdHJpbmciLCJfbmVnYXRpdmVfaW1hZ2VfZnJhZyIsImxpbmsiLCJ1cGRhdGVVbmlmb3JtcyIsImluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5IiwiYWRkQXR0cmlidXRlIiwibWFjcm8iLCJBVFRSSUJVVEVfTkFNRV9QT1NJVElPTiIsIlZFUlRFWF9BVFRSSUJfUE9TSVRJT04iLCJBVFRSSUJVVEVfTkFNRV9DT0xPUiIsIlZFUlRFWF9BVFRSSUJfQ09MT1IiLCJBVFRSSUJVVEVfTkFNRV9URVhfQ09PUkQiLCJWRVJURVhfQVRUUklCX1RFWF9DT09SRFMiLCJfdW5pU3RyZW5ndGgiLCJnZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lIiwic2V0UHJvZ3JhbSIsIm5vZGUiLCJfc2dOb2RlIiwicHJvZ3JhbSIsImdsUHJvZ3JhbV9zdGF0ZSIsIkdMUHJvZ3JhbVN0YXRlIiwiZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtIiwic2V0R0xQcm9ncmFtU3RhdGUiLCJzZXRTaGFkZXJQcm9ncmFtIiwiY2hpbGRyZW4iLCJpIiwibGVuZ3RoIiwidXBkYXRlIiwiZHQiLCJ1c2UiLCJzZXRVbmlmb3JtRmxvYXQiLCJzZXRVbmlmb3JtTG9jYXRpb25XaXRoMWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHQyxPQUFPLENBQUMscUNBQUQsQ0FBM0I7O0FBQ0EsSUFBSUMs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QUFHaEMsRUFBRSxDQUFDaUMsY0FBSCxDQUFrQkMsd0JBQWxCLENBQTJDLEtBQUsxQixRQUFoRCxDQUF0QjtBQUNBd0IsUUFBQUEsZUFBZSxDQUFDVyxlQUFoQixDQUFpQyxLQUFLakIsWUFBdEMsRUFBc0QsS0FBS3BCLE9BQUwsSUFBZ0IsS0FBS0QsU0FBM0U7QUFDSCxPQUhELE1BR0s7QUFDQSxhQUFLRyxRQUFMLENBQWNvQyx3QkFBZCxDQUF3QyxLQUFLbEIsWUFBN0MsRUFBNkQsS0FBS3BCLE9BQUwsSUFBZ0IsS0FBS0QsU0FBbEY7O0FBQ0QsYUFBS0csUUFBTCxDQUFjUSxjQUFkO0FBQ0g7O0FBR0QsVUFBSSxNQUFNLEtBQUtWLE9BQVgsSUFBc0IsTUFBTSxLQUFLQSxPQUFyQyxFQUE4QztBQUFFLGFBQUtELFNBQUwsSUFBa0IsQ0FBQyxDQUFuQjtBQUF1QjtBQUMxRTtBQUNKO0FBdkVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfZGVmYXVsdF92ZXJ0ID0gcmVxdWlyZShcIi4uL1NoYWRlcnMvY2NTaGFkZXJfRGVmYXVsdF9WZXJ0LmpzXCIpO1xyXG52YXIgX2RlZmF1bHRfdmVydF9ub19tdnAgPSByZXF1aXJlKFwiLi4vU2hhZGVycy9jY1NoYWRlcl9EZWZhdWx0X1ZlcnRfbm9NVlAuanNcIik7XHJcbnZhciBfc2hhZG93X2JsYWNrX3doaXRlX2ZyYWcgPSByZXF1aXJlKFwiLi4vU2hhZGVycy9jY1NoYWRlcl9TaGFkb3dfQmxhY2tfV2hpdGVfRnJhZy5qc1wiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9zdHJlbmd0aCA9IDAuMDAxO1xyXG4gICAgICAgIHRoaXMuX21vdGlvbiA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fdXNlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIF91c2U6IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9wcm9ncmFtID0gbmV3IGNjLkdMUHJvZ3JhbSgpO1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgY2MubG9nKFwidXNlIG5hdGl2ZSBHTFByb2dyYW1cIilcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5pbml0V2l0aFN0cmluZyhfZGVmYXVsdF92ZXJ0X25vX212cCwgX25lZ2F0aXZlX2ltYWdlX2ZyYWcpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmxpbmsoKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5KF9kZWZhdWx0X3ZlcnQsIF9zaGFkb3dfYmxhY2tfd2hpdGVfZnJhZyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9QT1NJVElPTiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9QT1NJVElPTik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX0NPTE9SLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX0NPTE9SKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfVEVYX0NPT1JELCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1RFWF9DT09SRFMpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmxpbmsoKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl91bmlTdHJlbmd0aCA9IHRoaXMuX3Byb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSggXCJzdHJlbmd0aFwiICk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0UHJvZ3JhbSggdGhpcy5ub2RlLl9zZ05vZGUsIHRoaXMuX3Byb2dyYW0gKTtcclxuICAgIH0sXHJcbiAgICBzZXRQcm9ncmFtOmZ1bmN0aW9uIChub2RlLCBwcm9ncmFtKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgICAgICBub2RlLnNldEdMUHJvZ3JhbVN0YXRlKGdsUHJvZ3JhbV9zdGF0ZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0U2hhZGVyUHJvZ3JhbShwcm9ncmFtKTsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB0aGlzLnNldFByb2dyYW0oY2hpbGRyZW5baV0sIHByb2dyYW0pO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uKCBkdCApXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIHRoaXMuX3Byb2dyYW0gKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0udXNlKCk7XHJcbiAgICAgICAgICAgIGlmKGNjLnN5cy5pc05hdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMuX3Byb2dyYW0pO1xyXG4gICAgICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1GbG9hdCggdGhpcy5fdW5pU3RyZW5ndGgsICggdGhpcy5fbW90aW9uICs9IHRoaXMuX3N0cmVuZ3RoICkgKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMWYoIHRoaXMuX3VuaVN0cmVuZ3RoLCAoIHRoaXMuX21vdGlvbiArPSB0aGlzLl9zdHJlbmd0aCApICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnVwZGF0ZVVuaWZvcm1zKCk7ICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiggMS4wIDwgdGhpcy5fbW90aW9uIHx8IDAuMCA+IHRoaXMuX21vdGlvbiApeyB0aGlzLl9zdHJlbmd0aCAqPSAtMTsgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==