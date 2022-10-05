
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/LightningBolt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3345cIPKg9M5L+BmNFPyEYk', 'LightningBolt');
// Script/LightningBolt.js

"use strict";

var _default_vert = require("../Shaders/ccShader_lightningBolt_Vert.js");

var _default_vert_no_mvp = require("../Shaders/ccShader_Default_Vert_noMVP.js");

var _lightningBolt_frag = require("../Shaders/ccShader_lightningBolt_Frag.js");

cc.Class({
  "extends": cc.Component,
  properties: {
    glassFactor: 1.0
  },
  onLoad: function onLoad() {
    this._use();
  },
  update: function update(dt) {// if(this.glassFactor>=40){
    //     this.glassFactor=0;
    // }
    // this.glassFactor+=dt*3;
    // if(this._program){
    //     if(cc.sys.isNative){
    //         var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this._program);
    //         glProgram_state.setUniformFloat( this._uniBlurRadiusScale ,this.glassFactor);
    //     }else{
    //         this._program.setUniformLocationWith1f( this._uniBlurRadiusScale, this.glassFactor );    
    //     }
    // }
  },
  _use: function _use() {
    if (cc.sys.isNative) {
      cc.log("use native GLProgram");
      this._program = new cc.GLProgram();

      this._program.initWithString(_default_vert_no_mvp, _lightningBolt_frag);

      this._program.link();

      this._program.updateUniforms();
    } else {
      this._program = new cc.GLProgram();

      this._program.initWithVertexShaderByteArray(_default_vert, _lightningBolt_frag);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);

      this._program.link();

      this._program.updateUniforms();
    }

    this._u_opacity = this._program.getUniformLocationForName("u_opacity");
    cc.log(this._u_opacity);
    this._uniWidthStep = this._program.getUniformLocationForName("widthStep");
    this._uniHeightStep = this._program.getUniformLocationForName("heightStep");
    this._uniBlurRadiusScale = this._program.getUniformLocationForName("blurRadiusScale");

    if (cc.sys.isNative) {
      var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this._program); // glProgram_state.setUniformFloat( this._uniWidthStep , ( 1.0 / this.node.getContentSize().width ) );
      // glProgram_state.setUniformFloat( this._uniHeightStep , ( 1.0 / this.node.getContentSize().height ) );
      // glProgram_state.setUniformFloat( this._uniBlurRadiusScale ,this.glassFactor);
    } else {// this._program.setUniformLocationWith1f( this._uniWidthStep, ( 1.0 / this.node.getContentSize().width ) );
        // this._program.setUniformLocationWith1f( this._uniHeightStep, ( 1.0 / this.node.getContentSize().height ) );
        // this._program.setUniformLocationWith1f( this._uniBlurRadiusScale, this.glassFactor );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxMaWdodG5pbmdCb2x0LmpzIl0sIm5hbWVzIjpbIl9kZWZhdWx0X3ZlcnQiLCJyZXF1aXJlIiwiX2RlZmF1bHRfdmVydF9ub19tdnAiLCJfbGlnaHRuaW5nQm9sdF9mcmFnIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJnbGFzc0ZhY3RvciIsIm9uTG9hZCIsIl91c2UiLCJ1cGRhdGUiLCJkdCIsInN5cyIsImlzTmF0aXZlIiwibG9nIiwiX3Byb2dyYW0iLCJHTFByb2dyYW0iLCJpbml0V2l0aFN0cmluZyIsImxpbmsiLCJ1cGRhdGVVbmlmb3JtcyIsImluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5IiwiYWRkQXR0cmlidXRlIiwibWFjcm8iLCJBVFRSSUJVVEVfTkFNRV9QT1NJVElPTiIsIlZFUlRFWF9BVFRSSUJfUE9TSVRJT04iLCJBVFRSSUJVVEVfTkFNRV9DT0xPUiIsIlZFUlRFWF9BVFRSSUJfQ09MT1IiLCJBVFRSSUJVVEVfTkFNRV9URVhfQ09PUkQiLCJWRVJURVhfQVRUUklCX1RFWF9DT09SRFMiLCJfdV9vcGFjaXR5IiwiZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSIsIl91bmlXaWR0aFN0ZXAiLCJfdW5pSGVpZ2h0U3RlcCIsIl91bmlCbHVyUmFkaXVzU2NhbGUiLCJnbFByb2dyYW1fc3RhdGUiLCJHTFByb2dyYW1TdGF0ZSIsImdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbSIsInNldFByb2dyYW0iLCJub2RlIiwiX3NnTm9kZSIsInByb2dyYW0iLCJzZXRHTFByb2dyYW1TdGF0ZSIsInNldFNoYWRlclByb2dyYW0iLCJjaGlsZHJlbiIsImkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHQyxPQUFPLENBQUMsMkNBQUQsQ0FBM0I7O0FBQ0EsSUFBSUMsb0JBQW9CLEdBQUdELE9BQU8sQ0FBQywyQ0FBRCxDQUFsQzs7QUFD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Qyx3QkFBbEIsQ0FBMkNJLE9BQTNDLENBQXRCO0FBQ0FGLE1BQUFBLElBQUksQ0FBQ0csaUJBQUwsQ0FBdUJQLGVBQXZCO0FBQ0gsS0FIRCxNQUdLO0FBQ0RJLE1BQUFBLElBQUksQ0FBQ0ksZ0JBQUwsQ0FBc0JGLE9BQXRCO0FBQ0g7O0FBR0QsUUFBSUcsUUFBUSxHQUFHTCxJQUFJLENBQUNLLFFBQXBCO0FBQ0EsUUFBSSxDQUFDQSxRQUFMLEVBQ0k7O0FBRUosU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFRLENBQUNFLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDO0FBQ0ksV0FBS1AsVUFBTCxDQUFnQk0sUUFBUSxDQUFDQyxDQUFELENBQXhCLEVBQTZCSixPQUE3QjtBQURKO0FBRUg7QUF0RkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9kZWZhdWx0X3ZlcnQgPSByZXF1aXJlKFwiLi4vU2hhZGVycy9jY1NoYWRlcl9saWdodG5pbmdCb2x0X1ZlcnQuanNcIik7XHJcbnZhciBfZGVmYXVsdF92ZXJ0X25vX212cCA9IHJlcXVpcmUoXCIuLi9TaGFkZXJzL2NjU2hhZGVyX0RlZmF1bHRfVmVydF9ub01WUC5qc1wiKTtcclxudmFyIF9saWdodG5pbmdCb2x0X2ZyYWcgPSByZXF1aXJlKFwiLi4vU2hhZGVycy9jY1NoYWRlcl9saWdodG5pbmdCb2x0X0ZyYWcuanNcIik7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGdsYXNzRmFjdG9yOjEuMCxcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlOmZ1bmN0aW9uKGR0KXtcclxuICAgICAgICAvLyBpZih0aGlzLmdsYXNzRmFjdG9yPj00MCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2xhc3NGYWN0b3I9MDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5nbGFzc0ZhY3Rvcis9ZHQqMztcclxuXHJcblxyXG4gICAgICAgIC8vIGlmKHRoaXMuX3Byb2dyYW0pe1xyXG4gICAgICAgIC8vICAgICBpZihjYy5zeXMuaXNOYXRpdmUpe1xyXG4gICAgICAgIC8vICAgICAgICAgdmFyIGdsUHJvZ3JhbV9zdGF0ZSA9IGNjLkdMUHJvZ3JhbVN0YXRlLmdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbSh0aGlzLl9wcm9ncmFtKTtcclxuICAgICAgICAvLyAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoIHRoaXMuX3VuaUJsdXJSYWRpdXNTY2FsZSAsdGhpcy5nbGFzc0ZhY3Rvcik7XHJcbiAgICAgICAgLy8gICAgIH1lbHNle1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMWYoIHRoaXMuX3VuaUJsdXJSYWRpdXNTY2FsZSwgdGhpcy5nbGFzc0ZhY3RvciApOyAgICBcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH0sXHJcblxyXG4gICAgX3VzZTogZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgY2MubG9nKFwidXNlIG5hdGl2ZSBHTFByb2dyYW1cIilcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbSA9IG5ldyBjYy5HTFByb2dyYW0oKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5pbml0V2l0aFN0cmluZyhfZGVmYXVsdF92ZXJ0X25vX212cCwgX2xpZ2h0bmluZ0JvbHRfZnJhZyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0ubGluaygpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnVwZGF0ZVVuaWZvcm1zKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtID0gbmV3IGNjLkdMUHJvZ3JhbSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5KF9kZWZhdWx0X3ZlcnQsIF9saWdodG5pbmdCb2x0X2ZyYWcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfUE9TSVRJT04sIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfUE9TSVRJT04pO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9DT0xPUiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1RFWF9DT09SRCwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9URVhfQ09PUkRTKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5saW5rKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0udXBkYXRlVW5pZm9ybXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3Vfb3BhY2l0eSA9IHRoaXMuX3Byb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZShcInVfb3BhY2l0eVwiKTtcclxuICAgICAgICBcclxuICAgICAgICBjYy5sb2codGhpcy5fdV9vcGFjaXR5KTtcclxuXHJcbiAgICAgICAgdGhpcy5fdW5pV2lkdGhTdGVwID0gdGhpcy5fcHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKCBcIndpZHRoU3RlcFwiICk7XHJcbiAgICAgICAgdGhpcy5fdW5pSGVpZ2h0U3RlcCA9IHRoaXMuX3Byb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSggXCJoZWlnaHRTdGVwXCIgKTtcclxuICAgICAgICB0aGlzLl91bmlCbHVyUmFkaXVzU2NhbGUgPSB0aGlzLl9wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoIFwiYmx1clJhZGl1c1NjYWxlXCIgKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5fcHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIC8vIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoIHRoaXMuX3VuaVdpZHRoU3RlcCAsICggMS4wIC8gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGggKSApO1xyXG4gICAgICAgICAgICAvLyBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybUZsb2F0KCB0aGlzLl91bmlIZWlnaHRTdGVwICwgKCAxLjAgLyB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgKSApO1xyXG4gICAgICAgICAgICAvLyBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybUZsb2F0KCB0aGlzLl91bmlCbHVyUmFkaXVzU2NhbGUgLHRoaXMuZ2xhc3NGYWN0b3IpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvLyB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZiggdGhpcy5fdW5pV2lkdGhTdGVwLCAoIDEuMCAvIHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpLndpZHRoICkgKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMWYoIHRoaXMuX3VuaUhlaWdodFN0ZXAsICggMS4wIC8gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0ICkgKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMWYoIHRoaXMuX3VuaUJsdXJSYWRpdXNTY2FsZSwgdGhpcy5nbGFzc0ZhY3RvciApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNldFByb2dyYW0oIHRoaXMubm9kZS5fc2dOb2RlICx0aGlzLl9wcm9ncmFtICk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzZXRQcm9ncmFtOmZ1bmN0aW9uIChub2RlLCBwcm9ncmFtKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgICAgICBub2RlLnNldEdMUHJvZ3JhbVN0YXRlKGdsUHJvZ3JhbV9zdGF0ZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0U2hhZGVyUHJvZ3JhbShwcm9ncmFtKTsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB0aGlzLnNldFByb2dyYW0oY2hpbGRyZW5baV0sIHByb2dyYW0pO1xyXG4gICAgfVxyXG5cclxufSk7XHJcbiJdfQ==