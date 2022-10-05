
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Emboss.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96880Mj0cdDB4XR7BWESnn1', 'Emboss');
// Script/Emboss.js

"use strict";

var _default_vert = require("../Shaders/ccShader_Default_Vert.js");

var _default_vert_no_mvp = require("../Shaders/ccShader_Default_Vert_noMVP.js");

var _emboss_frag = require("../Shaders/ccShader_Emboss_Frag.js");

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

      this._program.initWithString(_default_vert_no_mvp, _emboss_frag);

      this._program.link();

      this._program.updateUniforms();
    } else {
      this._program.initWithVertexShaderByteArray(_default_vert, _emboss_frag);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);

      this._program.link();

      this._program.updateUniforms();
    }

    this._uniWidthStep = this._program.getUniformLocationForName("widthStep");
    this._uniHeightStep = this._program.getUniformLocationForName("heightStep");

    if (cc.sys.isNative) {
      var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this._program);
      glProgram_state.setUniformFloat(this._uniWidthStep, 1.0 / this.node.getContentSize().width);
      glProgram_state.setUniformFloat(this._uniHeightStep, 1.0 / this.node.getContentSize().height);
    } else {
      this._program.setUniformLocationWith1f(this._uniWidthStep, 1.0 / this.node.getContentSize().width);

      this._program.setUniformLocationWith1f(this._uniHeightStep, 1.0 / this.node.getContentSize().height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbWJvc3MuanMiXSwibmFtZXMiOlsiX2RlZmF1bHRfdmVydCIsInJlcXVpcmUiLCJfZGVmYXVsdF92ZXJ0X25vX212cCIsIl9lbWJvc3NfZnJhZyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiX3VzZSIsIl9wcm9ncmFtIiwiR0xQcm9ncmFtIiwic3lzIiwiaXNOYXRpdmUiLCJsb2ciLCJpbml0V2l0aFN0cmluZyIsImxpbmsiLCJ1cGRhdGVVbmlmb3JtcyIsImluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5IiwiYWRkQXR0cmlidXRlIiwibWFjcm8iLCJBVFRSSUJVVEVfTkFNRV9QT1NJVElPTiIsIlZFUlRFWF9BVFRSSUJfUE9TSVRJT04iLCJBVFRSSUJVVEVfTkFNRV9DT0xPUiIsIlZFUlRFWF9BVFRSSUJfQ09MT1IiLCJBVFRSSUJVVEVfTkFNRV9URVhfQ09PUkQiLCJWRVJURVhfQVRUUklCX1RFWF9DT09SRFMiLCJfdW5pV2lkdGhTdGVwIiwiZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSIsIl91bmlIZWlnaHRTdGVwIiwiZ2xQcm9ncmFtX3N0YXRlIiwiR0xQcm9ncmFtU3RhdGUiLCJnZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0iLCJzZXRVbmlmb3JtRmxvYXQiLCJub2RlIiwiZ2V0Q29udGVudFNpemUiLCJ3aWR0aCIsImhlaWdodCIsInNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZiIsInNldFByb2dyYW0iLCJfc2dOb2RlIiwicHJvZ3JhbSIsInNldEdMUHJvZ3JhbVN0YXRlIiwic2V0U2hhZGVyUHJvZ3JhbSIsImNoaWxkcmVuIiwiaSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxxQ0FBRCxDQUEzQjs7QUFDQSxJQUFJQyxvQkFBb0IsR0FBR0QsT0FBTyxDQUFDLDJDQUFELENBQWxDOztB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O0FBQ0FQLE1BQUFBLElBQUksQ0FBQ1EsaUJBQUwsQ0FBdUJaLGVBQXZCO0FBQ0gsS0FIRCxNQUdLO0FBQ0RJLE1BQUFBLElBQUksQ0FBQ1MsZ0JBQUwsQ0FBc0JGLE9BQXRCO0FBQ0g7O0FBR0QsUUFBSUcsUUFBUSxHQUFHVixJQUFJLENBQUNVLFFBQXBCO0FBQ0EsUUFBSSxDQUFDQSxRQUFMLEVBQ0k7O0FBRUosU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFRLENBQUNFLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDO0FBQ0ksV0FBS04sVUFBTCxDQUFnQkssUUFBUSxDQUFDQyxDQUFELENBQXhCLEVBQTZCSixPQUE3QjtBQURKO0FBRUg7QUF6REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9kZWZhdWx0X3ZlcnQgPSByZXF1aXJlKFwiLi4vU2hhZGVycy9jY1NoYWRlcl9EZWZhdWx0X1ZlcnQuanNcIik7XHJcbnZhciBfZGVmYXVsdF92ZXJ0X25vX212cCA9IHJlcXVpcmUoXCIuLi9TaGFkZXJzL2NjU2hhZGVyX0RlZmF1bHRfVmVydF9ub01WUC5qc1wiKTtcclxudmFyIF9lbWJvc3NfZnJhZyA9IHJlcXVpcmUoXCIuLi9TaGFkZXJzL2NjU2hhZGVyX0VtYm9zc19GcmFnLmpzXCIpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3VzZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBfdXNlOiBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbSA9IG5ldyBjYy5HTFByb2dyYW0oKTtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcInVzZSBuYXRpdmUgR0xQcm9ncmFtXCIpXHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uaW5pdFdpdGhTdHJpbmcoX2RlZmF1bHRfdmVydF9ub19tdnAsIF9lbWJvc3NfZnJhZyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0ubGluaygpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnVwZGF0ZVVuaWZvcm1zKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uaW5pdFdpdGhWZXJ0ZXhTaGFkZXJCeXRlQXJyYXkoX2RlZmF1bHRfdmVydCwgX2VtYm9zc19mcmFnKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfUE9TSVRJT04sIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfUE9TSVRJT04pO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9DT0xPUiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1RFWF9DT09SRCwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9URVhfQ09PUkRTKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5saW5rKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0udXBkYXRlVW5pZm9ybXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fdW5pV2lkdGhTdGVwID0gdGhpcy5fcHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKCBcIndpZHRoU3RlcFwiICk7XHJcbiAgICAgICAgdGhpcy5fdW5pSGVpZ2h0U3RlcCA9IHRoaXMuX3Byb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSggXCJoZWlnaHRTdGVwXCIgKTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMuX3Byb2dyYW0pO1xyXG4gICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybUZsb2F0KCB0aGlzLl91bmlXaWR0aFN0ZXAgLCAoIDEuMCAvIHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpLndpZHRoICkgKTtcclxuICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1GbG9hdCggdGhpcy5fdW5pSGVpZ2h0U3RlcCAsICggMS4wIC8gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0ICkgKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMWYoIHRoaXMuX3VuaVdpZHRoU3RlcCwgKCAxLjAgLyB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS53aWR0aCApICk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKCB0aGlzLl91bmlIZWlnaHRTdGVwLCAoIDEuMCAvIHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCApICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFByb2dyYW0oIHRoaXMubm9kZS5fc2dOb2RlLCB0aGlzLl9wcm9ncmFtICk7XHJcbiAgICB9LFxyXG4gICAgc2V0UHJvZ3JhbTpmdW5jdGlvbiAobm9kZSwgcHJvZ3JhbSkge1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdmFyIGdsUHJvZ3JhbV9zdGF0ZSA9IGNjLkdMUHJvZ3JhbVN0YXRlLmdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRHTFByb2dyYW1TdGF0ZShnbFByb2dyYW1fc3RhdGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBub2RlLnNldFNoYWRlclByb2dyYW0ocHJvZ3JhbSk7ICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgaWYgKCFjaGlsZHJlbilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmFtKGNoaWxkcmVuW2ldLCBwcm9ncmFtKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG4iXX0=