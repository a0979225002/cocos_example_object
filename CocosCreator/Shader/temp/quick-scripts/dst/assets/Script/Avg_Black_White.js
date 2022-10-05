
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Avg_Black_White.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '414458STphLF75+aFmYFzfh', 'Avg_Black_White');
// Script/Avg_Black_White.js

"use strict";

var _default_vert = require("../Shaders/ccShader_Default_Vert.js");

var _default_vert_no_mvp = require("../Shaders/ccShader_Default_Vert_noMVP.js");

var _black_white_frag = require("../Shaders/ccShader_Avg_Black_White_Frag.js");

var EffectBlackWhite = cc.Class({
  "extends": cc.Component,
  properties: {
    isAllChildrenUser: false
  },
  onLoad: function onLoad() {
    this._use();
  },
  _use: function _use() {
    this._program = new cc.GLProgram();

    if (cc.sys.isNative) {
      cc.log("use native GLProgram");

      this._program.initWithString(_default_vert_no_mvp, _black_white_frag);

      this._program.link();

      this._program.updateUniforms();
    } else {
      this._program.initWithVertexShaderByteArray(_default_vert, _black_white_frag);

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
cc.BlackWhite = module.exports = EffectBlackWhite;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBdmdfQmxhY2tfV2hpdGUuanMiXSwibmFtZXMiOlsiX2RlZmF1bHRfdmVydCIsInJlcXVpcmUiLCJfZGVmYXVsdF92ZXJ0X25vX212cCIsIl9ibGFja193aGl0ZV9mcmFnIiwiRWZmZWN0QmxhY2tXaGl0ZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaXNBbGxDaGlsZHJlblVzZXIiLCJvbkxvYWQiLCJfdXNlIiwiX3Byb2dyYW0iLCJHTFByb2dyYW0iLCJzeXMiLCJpc05hdGl2ZSIsImxvZyIsImluaXRXaXRoU3RyaW5nIiwibGluayIsInVwZGF0ZVVuaWZvcm1zIiwiaW5pdFdpdGhWZXJ0ZXhTaGFkZXJCeXRlQXJyYXkiLCJhZGRBdHRyaWJ1dGUiLCJtYWNybyIsIkFUVFJJQlVURV9OQU1FX1BPU0lUSU9OIiwiVkVSVEVYX0FUVFJJQl9QT1NJVElPTiIsIkFUVFJJQlVURV9OQU1FX0NPTE9SIiwiVkVSVEVYX0FUVFJJQl9DT0xPUiIsIkFUVFJJQlVURV9OQU1FX1RFWF9DT09SRCIsIlZFUlRFWF9BVFRSSUJfVEVYX0NPT1JEUyIsInNldFByb2dyYW0iLCJub2RlIiwiX3NnTm9kZSIsInByb2dyYW0iLCJnbFByb2dyYW1fc3RhdGUiLCJHTFByb2dyYW1TdGF0ZSIsImdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbSIsInNldEdMUHJvZ3JhbVN0YXRlIiwic2V0U2hhZGVyUHJvZ3JhbSIsImNoaWxkcmVuIiwiaSIsImxlbmd0aCIsIkJsYWNrV2hpdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBR0MsT0FBTyxDQUFDLHFDQUFELENBQTNCOztBQUNBLElBQUlDLG9CQUFvQixHQUFHRCxPQUFPLENBQUMsMkNBQUQsQ0FBbEM7O0FBQ0EsSUFBSUUsaUJBQWlCLEdBQUdGLE9BQU8sQ0FBQyw2Q0FBRCxDQUEvQjs7QUFFQSxJQUFJRyxnQkFBZ0IsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDNUIsYUFBU0QsRUFBRSxDQUFDRSxTQURnQjtBQUc1QkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLGlCQUFpQixFQUFDO0FBRFYsR0FIZ0I7QUFPNUJDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQixTQUFLQyxJQUFMO0FBQ0gsR0FUMkI7QUFXNUJBLEVBQUFBLElBQUksRUFBRSxnQkFDTjtBQUNJLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSVAsRUFBRSxDQUFDUSxTQUFQLEVBQWhCOztBQUNBLFFBQUlSLEVBQUUsQ0FBQ1MsR0FBSCxDQUFPQyxRQUFYLEVBQXFCO0FBQ2pCVixNQUFBQSxFQUFFLENBQUNXLEdBQUgsQ0FBTyxzQkFBUDs7QUFDQSxXQUFLSixRQUFMLENBQWNLLGNBQWQsQ0FBNkJmLG9CQUE3QixFQUFtREMsaUJBQW5EOztBQUNBLFdBQUtTLFFBQUwsQ0FBY00sSUFBZDs7QUFDQSxXQUFLTixRQUFMLENBQWNPLGNBQWQ7QUFDSCxLQUxELE1BS0s7QUFDRCxXQUFLUCxRQUFMLENBQWNRLDZCQUFkLENBQTRDcEIsYUFBNUMsRUFBMkRHLGlCQUEzRDs7QUFDQSxXQUFLUyxRQUFMLENBQWNTLFlBQWQsQ0FBMkJoQixFQUFFLENBQUNpQixLQUFILENBQVNDLHVCQUFwQyxFQUE2RGxCLEVBQUUsQ0FBQ2lCLEtBQUgsQ0FBU0Usc0JBQXRFOztBQUNBLFdBQUtaLFFBQUwsQ0FBY1MsWUFBZCxDQUEyQmhCLEVBQUUsQ0FBQ2lCLEtBQUgsQ0FBU0csb0JBQXBDLEVBQTBEcEIsRUFBRSxDQUFDaUIsS0FBSCxDQUFTSSxtQkFBbkU7O0FBQ0EsV0FBS2QsUUFBTCxDQUFjUyxZQUFkLENBQTJCaEIsRUFBRSxDQUFDaUIsS0FBSCxDQUFTSyx3QkFBcEMsRUFBOER0QixFQUFFLENBQUNpQixLQUFILENBQVNNLHdCQUF2RTs7QUFDQSxXQUFLaEIsUUFBTCxDQUFjTSxJQUFkOztBQUNBLFdBQUtOLFFBQUwsQ0FBY08sY0FBZDtBQUNIOztBQUNELFNBQUtVLFVBQUwsQ0FBaUIsS0FBS0MsSUFBTCxDQUFVQyxPQUEzQixFQUFvQyxLQUFLbkIsUUFBekM7QUFFSCxHQTdCMkI7QUE4QjVCaUIsRUFBQUEsVUFBVSxFQUFDLG9CQUFVQyxJQUFWLEVBQWdCRSxPQUFoQixFQUF5QjtBQUVoQyxRQUFJM0IsRUFBRSxDQUFDUyxHQUFILENBQU9DLFFBQVgsRUFBcUI7QUFDakIsVUFBSWtCLGVBQWUsR0FBRzVCLEVBQUUsQ0FBQzZCLGNBQUgsQ0FBa0JDLHdCQUFsQixDQUEyQ0gsT0FBM0MsQ0FBdEI7QUFDQUYsTUFBQUEsSUFBSSxDQUFDTSxpQkFBTCxDQUF1QkgsZUFBdkI7QUFDSCxLQUhELE1BR0s7QUFDREgsTUFBQUEsSUFBSSxDQUFDTyxnQkFBTCxDQUFzQkwsT0FBdEI7QUFDSDs7QUFFRCxRQUFJTSxRQUFRLEdBQUdSLElBQUksQ0FBQ1EsUUFBcEI7QUFDQSxRQUFJLENBQUNBLFFBQUwsRUFDSTs7QUFFSixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQVEsQ0FBQ0UsTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFDQTtBQUNJLFdBQUtWLFVBQUwsQ0FBZ0JTLFFBQVEsQ0FBQ0MsQ0FBRCxDQUF4QixFQUE2QlAsT0FBN0I7QUFDSDtBQUNKO0FBL0MyQixDQUFULENBQXZCO0FBd0RBM0IsRUFBRSxDQUFDb0MsVUFBSCxHQUFnQkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdkMsZ0JBQWpDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX2RlZmF1bHRfdmVydCA9IHJlcXVpcmUoXCIuLi9TaGFkZXJzL2NjU2hhZGVyX0RlZmF1bHRfVmVydC5qc1wiKTtcclxudmFyIF9kZWZhdWx0X3ZlcnRfbm9fbXZwID0gcmVxdWlyZShcIi4uL1NoYWRlcnMvY2NTaGFkZXJfRGVmYXVsdF9WZXJ0X25vTVZQLmpzXCIpO1xyXG52YXIgX2JsYWNrX3doaXRlX2ZyYWcgPSByZXF1aXJlKFwiLi4vU2hhZGVycy9jY1NoYWRlcl9BdmdfQmxhY2tfV2hpdGVfRnJhZy5qc1wiKTtcclxuXHJcbnZhciBFZmZlY3RCbGFja1doaXRlID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBpc0FsbENoaWxkcmVuVXNlcjpmYWxzZSxcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIF91c2U6IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9wcm9ncmFtID0gbmV3IGNjLkdMUHJvZ3JhbSgpO1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgY2MubG9nKFwidXNlIG5hdGl2ZSBHTFByb2dyYW1cIilcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5pbml0V2l0aFN0cmluZyhfZGVmYXVsdF92ZXJ0X25vX212cCwgX2JsYWNrX3doaXRlX2ZyYWcpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmxpbmsoKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5KF9kZWZhdWx0X3ZlcnQsIF9ibGFja193aGl0ZV9mcmFnKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfUE9TSVRJT04sIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfUE9TSVRJT04pO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9DT0xPUiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1RFWF9DT09SRCwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9URVhfQ09PUkRTKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5saW5rKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0udXBkYXRlVW5pZm9ybXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRQcm9ncmFtKCB0aGlzLm5vZGUuX3NnTm9kZSwgdGhpcy5fcHJvZ3JhbSApO1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIHNldFByb2dyYW06ZnVuY3Rpb24gKG5vZGUsIHByb2dyYW0pIHtcclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgICAgICBub2RlLnNldEdMUHJvZ3JhbVN0YXRlKGdsUHJvZ3JhbV9zdGF0ZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0U2hhZGVyUHJvZ3JhbShwcm9ncmFtKTsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgaWYgKCFjaGlsZHJlbilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZ3JhbShjaGlsZHJlbltpXSwgcHJvZ3JhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuY2MuQmxhY2tXaGl0ZSA9IG1vZHVsZS5leHBvcnRzID0gRWZmZWN0QmxhY2tXaGl0ZTtcclxuXHJcblxyXG5cclxuIl19