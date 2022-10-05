
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Glass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b2b93dv2tMPYO54MTCHTfp', 'Glass');
// Script/Glass.js

"use strict";

var _default_vert = require("../Shaders/ccShader_Default_Vert.js");

var _default_vert_no_mvp = require("../Shaders/ccShader_Default_Vert_noMVP.js");

var _glass_frag = require("../Shaders/ccShader_Glass_Frag.js");

cc.Class({
  "extends": cc.Component,
  properties: {
    glassFactor: 1.0
  },
  onLoad: function onLoad() {
    this._use();
  },
  update: function update(dt) {
    if (this.glassFactor >= 40) {
      this.glassFactor = 0;
    }

    this.glassFactor += dt * 3;

    if (this._program) {
      this._program.use();

      if (cc.sys.isNative) {
        var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this._program);
        glProgram_state.setUniformFloat("blurRadiusScale", this.glassFactor);
      } else {
        this._program.setUniformLocationWith1f(this._uniBlurRadiusScale, this.glassFactor);
      }
    }
  },
  _use: function _use() {
    this._program = new cc.GLProgram();

    if (cc.sys.isNative) {
      this._program.initWithString(_default_vert_no_mvp, _glass_frag);

      this._program.link();

      this._program.updateUniforms();
    } else {
      this._program.initWithVertexShaderByteArray(_default_vert, _glass_frag);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);

      this._program.link();

      this._program.updateUniforms();

      this._program.use();
    }

    if (cc.sys.isNative) {
      var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this._program);
      glProgram_state.setUniformFloat("widthStep", 1.0 / this.node.getContentSize().width);
      glProgram_state.setUniformFloat("heightStep", 1.0 / this.node.getContentSize().height);
      glProgram_state.setUniformFloat("blurRadiusScale", this.glassFactor);
    } else {
      this._uniWidthStep = this._program.getUniformLocationForName("widthStep");
      this._uniHeightStep = this._program.getUniformLocationForName("heightStep");
      this._uniBlurRadiusScale = this._program.getUniformLocationForName("blurRadiusScale");

      this._program.setUniformLocationWith1f(this._uniWidthStep, 1.0 / this.node.getContentSize().width);

      this._program.setUniformLocationWith1f(this._uniHeightStep, 1.0 / this.node.getContentSize().height);

      this._program.setUniformLocationWith1f(this._uniBlurRadiusScale, this.glassFactor);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHbGFzcy5qcyJdLCJuYW1lcyI6WyJfZGVmYXVsdF92ZXJ0IiwicmVxdWlyZSIsIl9kZWZhdWx0X3ZlcnRfbm9fbXZwIiwiX2dsYXNzX2ZyYWciLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImdsYXNzRmFjdG9yIiwib25Mb2FkIiwiX3VzZSIsInVwZGF0ZSIsImR0IiwiX3Byb2dyYW0iLCJ1c2UiLCJzeXMiLCJpc05hdGl2ZSIsImdsUHJvZ3JhbV9zdGF0ZSIsIkdMUHJvZ3JhbVN0YXRlIiwiZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtIiwic2V0VW5pZm9ybUZsb2F0Iiwic2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmIiwiX3VuaUJsdXJSYWRpdXNTY2FsZSIsIkdMUHJvZ3JhbSIsImluaXRXaXRoU3RyaW5nIiwibGluayIsInVwZGF0ZVVuaWZvcm1zIiwiaW5pdFdpdGhWZXJ0ZXhTaGFkZXJCeXRlQXJyYXkiLCJhZGRBdHRyaWJ1dGUiLCJtYWNybyIsIkFUVFJJQlVURV9OQU1FX1BPU0lUSU9OIiwiVkVSVEVYX0FUVFJJQl9QT1NJVElPTiIsIkFUVFJJQlVURV9OQU1FX0NPTE9SIiwiVkVSVEVYX0FUVFJJQl9DT0xPUiIsIkFUVFJJQlVURV9OQU1FX1RFWF9DT09SRCIsIlZFUlRFWF9BVFRSSUJfVEVYX0NPT1JEUyIsIm5vZGUiLCJnZXRDb250ZW50U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiX3VuaVdpZHRoU3RlcCIsImdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUiLCJfdW5pSGVpZ2h0U3RlcCIsInNldFByb2dyYW0iLCJfc2dOb2RlIiwicHJvZ3JhbSIsInNldEdMUHJvZ3JhbVN0YXRlIiwic2V0U2hhZGVyUHJvZ3JhbSIsImNoaWxkcmVuIiwiaSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxxQ0FBRCxDQUEzQjs7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QUNBLFFBQUwsRUFDSTs7QUFFSixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQVEsQ0FBQ0UsTUFBN0IsRUFBcUNELENBQUMsRUFBdEM7QUFDSSxXQUFLTixVQUFMLENBQWdCSyxRQUFRLENBQUNDLENBQUQsQ0FBeEIsRUFBNkJKLE9BQTdCO0FBREo7QUFFSDtBQXRGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX2RlZmF1bHRfdmVydCA9IHJlcXVpcmUoXCIuLi9TaGFkZXJzL2NjU2hhZGVyX0RlZmF1bHRfVmVydC5qc1wiKTtcclxudmFyIF9kZWZhdWx0X3ZlcnRfbm9fbXZwID0gcmVxdWlyZShcIi4uL1NoYWRlcnMvY2NTaGFkZXJfRGVmYXVsdF9WZXJ0X25vTVZQLmpzXCIpO1xyXG52YXIgX2dsYXNzX2ZyYWcgPSByZXF1aXJlKFwiLi4vU2hhZGVycy9jY1NoYWRlcl9HbGFzc19GcmFnLmpzXCIpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBnbGFzc0ZhY3RvcjoxLjAsXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3VzZSgpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZTpmdW5jdGlvbihkdCl7XHJcbiAgICAgICAgaWYodGhpcy5nbGFzc0ZhY3Rvcj49NDApe1xyXG4gICAgICAgICAgICB0aGlzLmdsYXNzRmFjdG9yPTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2xhc3NGYWN0b3IrPWR0KjM7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuX3Byb2dyYW0pe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS51c2UoKTtcclxuICAgICAgICAgICAgaWYoY2Muc3lzLmlzTmF0aXZlKXtcclxuICAgICAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5fcHJvZ3JhbSk7XHJcbiAgICAgICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybUZsb2F0KCBcImJsdXJSYWRpdXNTY2FsZVwiICx0aGlzLmdsYXNzRmFjdG9yKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZiggdGhpcy5fdW5pQmx1clJhZGl1c1NjYWxlLCB0aGlzLmdsYXNzRmFjdG9yICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIF91c2U6IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9wcm9ncmFtID0gbmV3IGNjLkdMUHJvZ3JhbSgpO1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5pbml0V2l0aFN0cmluZyhfZGVmYXVsdF92ZXJ0X25vX212cCwgX2dsYXNzX2ZyYWcpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmxpbmsoKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5pbml0V2l0aFZlcnRleFNoYWRlckJ5dGVBcnJheShfZGVmYXVsdF92ZXJ0LCBfZ2xhc3NfZnJhZyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9QT1NJVElPTiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9QT1NJVElPTik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX0NPTE9SLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX0NPTE9SKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfVEVYX0NPT1JELCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1RFWF9DT09SRFMpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmxpbmsoKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5fcHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoIFwid2lkdGhTdGVwXCIgLCAoIDEuMCAvIHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpLndpZHRoICkgKTtcclxuICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1GbG9hdCggXCJoZWlnaHRTdGVwXCIgLCAoIDEuMCAvIHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCApICk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoIFwiYmx1clJhZGl1c1NjYWxlXCIgLHRoaXMuZ2xhc3NGYWN0b3IpO1xyXG4gICAgICAgIH1lbHNle1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3VuaVdpZHRoU3RlcCA9IHRoaXMuX3Byb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSggXCJ3aWR0aFN0ZXBcIiApO1xyXG4gICAgICAgICAgICB0aGlzLl91bmlIZWlnaHRTdGVwID0gdGhpcy5fcHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKCBcImhlaWdodFN0ZXBcIiApO1xyXG4gICAgICAgICAgICB0aGlzLl91bmlCbHVyUmFkaXVzU2NhbGUgPSB0aGlzLl9wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoIFwiYmx1clJhZGl1c1NjYWxlXCIgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKCB0aGlzLl91bmlXaWR0aFN0ZXAsICggMS4wIC8gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGggKSApO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZiggdGhpcy5fdW5pSGVpZ2h0U3RlcCwgKCAxLjAgLyB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgKSApO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZiggdGhpcy5fdW5pQmx1clJhZGl1c1NjYWxlLCB0aGlzLmdsYXNzRmFjdG9yICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFByb2dyYW0oIHRoaXMubm9kZS5fc2dOb2RlICx0aGlzLl9wcm9ncmFtICk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzZXRQcm9ncmFtOmZ1bmN0aW9uIChub2RlLCBwcm9ncmFtKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgICAgICBub2RlLnNldEdMUHJvZ3JhbVN0YXRlKGdsUHJvZ3JhbV9zdGF0ZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0U2hhZGVyUHJvZ3JhbShwcm9ncmFtKTsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB0aGlzLnNldFByb2dyYW0oY2hpbGRyZW5baV0sIHByb2dyYW0pO1xyXG4gICAgfVxyXG5cclxufSk7XHJcbiJdfQ==