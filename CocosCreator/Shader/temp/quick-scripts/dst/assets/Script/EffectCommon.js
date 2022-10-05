
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/EffectCommon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e579eseCxNcJ0ZlJMKwkmt', 'EffectCommon');
// Script/EffectCommon.js

"use strict";

var _default_vert = require("../Shaders/ccShader_Default_Vert.js");

var _default_vert_no_mvp = require("../Shaders/ccShader_Default_Vert_noMVP.js");

cc.Class({
  "extends": cc.Component,
  properties: {
    glassFactor: 1.0,
    flagShader: "",
    frag_glsl: {
      "default": "Effect10.fs.glsl",
      visible: false
    }
  },
  onLoad: function onLoad() {
    var self = this;
    this.parameters = {
      startTime: Date.now(),
      time: 0.0,
      mouse: {
        x: 0.0,
        y: 0.0
      },
      resolution: {
        x: 0.0,
        y: 0.0
      }
    };
    this.node.on(cc.Node.EventType.MOUSE_MOVE, function (event) {
      this.parameters.mouse.x = this.node.getContentSize().width / event.getLocationX();
      this.parameters.mouse.y = this.node.getContentSize().height / event.getLocationY();
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      this.parameters.mouse.x = this.node.getContentSize().width / event.getLocationX();
      this.parameters.mouse.y = this.node.getContentSize().height / event.getLocationY();
    }, this);
    cc.loader.loadRes(self.flagShader, function (err, txt) {
      if (err) {
        cc.log(err);
      } else {
        self.frag_glsl = txt;

        self._use();
      }
    });
  },
  update: function update(dt) {
    if (this.glassFactor >= 40) {
      this.glassFactor = 0;
    }

    this.glassFactor += dt * 3;

    if (this._program) {
      this._program.use();

      this.updateGLParameters();

      if (cc.sys.isNative) {
        var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this._program);
        glProgram_state.setUniformVec2("resolution", this.parameters.resolution);
        glProgram_state.setUniformFloat("time", this.parameters.time);
        glProgram_state.setUniformVec2("mouse", this.parameters.mouse);
      } else {
        this._program.setUniformLocationWith2f(this._resolution, this.parameters.resolution.x, this.parameters.resolution.y);

        this._program.setUniformLocationWith1f(this._time, this.parameters.time);

        this._program.setUniformLocationWith2f(this._mouse, this.parameters.mouse.x, this.parameters.mouse.x);
      }
    }
  },
  updateGLParameters: function updateGLParameters() {
    this.parameters.time = (Date.now() - this.parameters.startTime) / 1000;
    this.parameters.resolution.x = this.node.getContentSize().width;
    this.parameters.resolution.y = this.node.getContentSize().height;
  },
  _use: function _use() {
    if (cc.sys.isNative) {
      cc.log("use native GLProgram");
      this._program = new cc.GLProgram();

      this._program.initWithString(_default_vert_no_mvp, this.frag_glsl);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);

      this._program.link();

      this._program.updateUniforms();

      this.updateGLParameters();
    } else {
      this._program = new cc.GLProgram();

      this._program.initWithVertexShaderByteArray(_default_vert, this.frag_glsl);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);

      this._program.link();

      this._program.updateUniforms();

      this._program.use();

      this.updateGLParameters();

      this._program.setUniformLocationWith1f(this._program.getUniformLocationForName('time'), this.parameters.time);

      this._program.setUniformLocationWith2f(this._program.getUniformLocationForName('mouse'), this.parameters.mouse.x, this.parameters.mouse.y);

      this._program.setUniformLocationWith2f(this._program.getUniformLocationForName('resolution'), this.parameters.resolution.x, this.parameters.resolution.y);
    }

    if (cc.sys.isNative) {
      var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this._program);
      glProgram_state.setUniformVec2("resolution", this.parameters.resolution);
      glProgram_state.setUniformFloat("time", this.parameters.time);
      glProgram_state.setUniformVec2("mouse", this.parameters.mouse);
    } else {
      this._resolution = this._program.getUniformLocationForName("resolution");
      this._time = this._program.getUniformLocationForName("time");
      this._mouse = this._program.getUniformLocationForName("mouse");

      this._program.setUniformLocationWith2f(this._resolution, this.parameters.resolution.x, this.parameters.resolution.y);

      this._program.setUniformLocationWith1f(this._time, this.parameters.time);

      this._program.setUniformLocationWith2f(this._mouse, this.parameters.mouse.x, this.parameters.mouse.y);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFZmZlY3RDb21tb24uanMiXSwibmFtZXMiOlsiX2RlZmF1bHRfdmVydCIsInJlcXVpcmUiLCJfZGVmYXVsdF92ZXJ0X25vX212cCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZ2xhc3NGYWN0b3IiLCJmbGFnU2hhZGVyIiwiZnJhZ19nbHNsIiwidmlzaWJsZSIsIm9uTG9hZCIsInNlbGYiLCJwYXJhbWV0ZXJzIiwic3RhcnRUaW1lIiwiRGF0ZSIsIm5vdyIsInRpbWUiLCJtb3VzZSIsIngiLCJ5IiwicmVzb2x1dGlvbiIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9NT1ZFIiwiZXZlbnQiLCJnZXRDb250ZW50U2l6ZSIsIndpZHRoIiwiZ2V0TG9jYXRpb25YIiwiaGVpZ2h0IiwiZ2V0TG9jYXRpb25ZIiwiVE9VQ0hfTU9WRSIsImxvYWRlciIsImxvYWRSZXMiLCJlcnIiLCJ0eHQiLCJsb2ciLCJfdXNlIiwidXBkYXRlIiwiZHQiLCJfcHJvZ3JhbSIsInVzZSIsInVwZGF0ZUdMUGFyYW1ldGVycyIsInN5cyIsImlzTmF0aXZlIiwiZ2xQcm9ncmFtX3N0YXRlIiwiR0xQcm9ncmFtU3RhdGUiLCJnZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0iLCJzZXRVbmlmb3JtVmVjMiIsInNldFVuaWZvcm1GbG9hdCIsInNldFVuaWZvcm1Mb2NhdGlvbldpdGgyZiIsIl9yZXNvbHV0aW9uIiwic2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmIiwiX3RpbWUiLCJfbW91c2UiLCJHTFByb2dyYW0iLCJpbml0V2l0aFN0cmluZyIsImFkZEF0dHJpYnV0ZSIsIm1hY3JvIiwiQVRUUklCVVRFX05BTUVfUE9TSVRJT04iLCJWRVJURVhfQVRUUklCX1BPU0lUSU9OIiwiQVRUUklCVVRFX05BTUVfQ09MT1IiLCJWRVJURVhfQVRUUklCX0NPTE9SIiwiQVRUUklCVVRFX05BTUVfVEVYX0NPT1JEIiwiVkVSVEVYX0FUVFJJQl9URVhfQ09PUkRTIiwibGluayIsInVwZGF0ZVVuaWZvcm1zIiwiaW5pdFdpdGhWZXJ0ZXhTaGFkZXJCeXRlQXJyYXkiLCJnZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lIiwic2V0UHJvZ3JhbSIsIl9zZ05vZGUiLCJwcm9ncmFtIiwic2V0R0xQcm9ncmFtU3RhdGUiLCJzZXRTaGFkZXJQcm9ncmFtIiwiY2hpbGRyZW4iLCJpIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBR0MsT0FBTyxDQUFDLHFDQUFELENBQTNCOztBQUNBLElBQUlDLG9CQUFvQixHQUFHRCxPQUFPLENBQUMsMkNBQUQsQ0FBbEM7O0FBR0FFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxXQUFXLEVBQUMsR0FESjtBQUVSQyxJQUFBQSxVQUFVLEVBQUMsRUFGSDtBQUdSQyxJQUFBQSxTQUFTLEVBQUM7QUFDTixpQkFBUSxrQkFERjtBQUVOQyxNQUFBQSxPQUFPLEVBQUM7QUFGRjtBQUhGLEdBSFA7QUFZTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsU0FBS0MsVUFBTCxHQUFnQjtBQUNaQyxNQUFBQSxTQUFTLEVBQUNDLElBQUksQ0FBQ0MsR0FBTCxFQURFO0FBRVpDLE1BQUFBLElBQUksRUFBQyxHQUZPO0FBR1pDLE1BQUFBLEtBQUssRUFBQztBQUNGQyxRQUFBQSxDQUFDLEVBQUMsR0FEQTtBQUVGQyxRQUFBQSxDQUFDLEVBQUM7QUFGQSxPQUhNO0FBT1pDLE1BQUFBLFVBQVUsRUFBQztBQUNQRixRQUFBQSxDQUFDLEVBQUMsR0FESztBQUVQQyxRQUFBQSxDQUFDLEVBQUM7QUFGSztBQVBDLEtBQWhCO0FBYUEsU0FBS0UsSUFBTCxDQUFVQyxFQUFWLENBQWFwQixFQUFFLENBQUNxQixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFVBQS9CLEVBQTJDLFVBQVVDLEtBQVYsRUFBaUI7QUFDeEQsV0FBS2QsVUFBTCxDQUFnQkssS0FBaEIsQ0FBc0JDLENBQXRCLEdBQTBCLEtBQUtHLElBQUwsQ0FBVU0sY0FBVixHQUEyQkMsS0FBM0IsR0FBbUNGLEtBQUssQ0FBQ0csWUFBTixFQUE3RDtBQUNBLFdBQUtqQixVQUFMLENBQWdCSyxLQUFoQixDQUFzQkUsQ0FBdEIsR0FBMEIsS0FBS0UsSUFBTCxDQUFVTSxjQUFWLEdBQTJCRyxNQUEzQixHQUFvQ0osS0FBSyxDQUFDSyxZQUFOLEVBQTlEO0FBQ0gsS0FIRCxFQUdHLElBSEg7QUFNQSxTQUFLVixJQUFMLENBQVVDLEVBQVYsQ0FBY3BCLEVBQUUsQ0FBQ3FCLElBQUgsQ0FBUUMsU0FBUixDQUFrQlEsVUFBaEMsRUFBNEMsVUFBVU4sS0FBVixFQUFpQjtBQUN6RCxXQUFLZCxVQUFMLENBQWdCSyxLQUFoQixDQUFzQkMsQ0FBdEIsR0FBMEIsS0FBS0csSUFBTCxDQUFVTSxjQUFWLEdBQTJCQyxLQUEzQixHQUFtQ0YsS0FBSyxDQUFDRyxZQUFOLEVBQTdEO0FBQ0EsV0FBS2pCLFVBQUwsQ0FBZ0JLLEtBQWhCLENBQXNCRSxDQUF0QixHQUEwQixLQUFLRSxJQUFMLENBQVVNLGNBQVYsR0FBMkJHLE1BQTNCLEdBQW9DSixLQUFLLENBQUNLLFlBQU4sRUFBOUQ7QUFDSCxLQUhELEVBR0csSUFISDtBQUtBN0IsSUFBQUEsRUFBRSxDQUFDK0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCdkIsSUFBSSxDQUFDSixVQUF2QixFQUFrQyxVQUFTNEIsR0FBVCxFQUFhQyxHQUFiLEVBQWlCO0FBQy9DLFVBQUdELEdBQUgsRUFBTztBQUNIakMsUUFBQUEsRUFBRSxDQUFDbUMsR0FBSCxDQUFPRixHQUFQO0FBQ0gsT0FGRCxNQUVLO0FBQ0R4QixRQUFBQSxJQUFJLENBQUNILFNBQUwsR0FBaUI0QixHQUFqQjs7QUFDQXpCLFFBQUFBLElBQUksQ0FBQzJCLElBQUw7QUFDSDtBQUNKLEtBUEQ7QUFTSCxHQS9DSTtBQWdETEMsRUFBQUEsTUFBTSxFQUFDLGdCQUFTQyxFQUFULEVBQVk7QUFDZixRQUFHLEtBQUtsQyxXQUFMLElBQWtCLEVBQXJCLEVBQXdCO0FBQ3BCLFdBQUtBLFdBQUwsR0FBaUIsQ0FBakI7QUFDSDs7QUFDRCxTQUFLQSxXQUFMLElBQWtCa0MsRUFBRSxHQUFDLENBQXJCOztBQUVBLFFBQUcsS0FBS0MsUUFBUixFQUFpQjtBQUViLFdBQUtBLFFBQUwsQ0FBY0MsR0FBZDs7QUFDQSxXQUFLQyxrQkFBTDs7QUFDQSxVQUFHekMsRUFBRSxDQUFDMEMsR0FBSCxDQUFPQyxRQUFWLEVBQW1CO0FBQ2YsWUFBSUMsZUFBZSxHQUFHNUMsRUFBRSxDQUFDNkMsY0FBSCxDQUFrQkMsd0JBQWxCLENBQTJDLEtBQUtQLFFBQWhELENBQXRCO0FBQ0FLLFFBQUFBLGVBQWUsQ0FBQ0csY0FBaEIsQ0FBZ0MsWUFBaEMsRUFBOEMsS0FBS3JDLFVBQUwsQ0FBZ0JRLFVBQTlEO0FBQ0EwQixRQUFBQSxlQUFlLENBQUNJLGVBQWhCLENBQWlDLE1BQWpDLEVBQXlDLEtBQUt0QyxVQUFMLENBQWdCSSxJQUF6RDtBQUNBOEIsUUFBQUEsZUFBZSxDQUFDRyxjQUFoQixDQUFnQyxPQUFoQyxFQUEwQyxLQUFLckMsVUFBTCxDQUFnQkssS0FBMUQ7QUFDSCxPQUxELE1BS0s7QUFDRCxhQUFLd0IsUUFBTCxDQUFjVSx3QkFBZCxDQUF3QyxLQUFLQyxXQUE3QyxFQUEwRCxLQUFLeEMsVUFBTCxDQUFnQlEsVUFBaEIsQ0FBMkJGLENBQXJGLEVBQXVGLEtBQUtOLFVBQUwsQ0FBZ0JRLFVBQWhCLENBQTJCRCxDQUFsSDs7QUFDQSxhQUFLc0IsUUFBTCxDQUFjWSx3QkFBZCxDQUF3QyxLQUFLQyxLQUE3QyxFQUFvRCxLQUFLMUMsVUFBTCxDQUFnQkksSUFBcEU7O0FBQ0EsYUFBS3lCLFFBQUwsQ0FBY1Usd0JBQWQsQ0FBd0MsS0FBS0ksTUFBN0MsRUFBcUQsS0FBSzNDLFVBQUwsQ0FBZ0JLLEtBQWhCLENBQXNCQyxDQUEzRSxFQUE2RSxLQUFLTixVQUFMLENBQWdCSyxLQUFoQixDQUFzQkMsQ0FBbkc7QUFDSDtBQUNKO0FBQ0osR0FyRUk7QUFzRUx5QixFQUFBQSxrQkF0RUssZ0NBc0VlO0FBQ2hCLFNBQUsvQixVQUFMLENBQWdCSSxJQUFoQixHQUF1QixDQUFDRixJQUFJLENBQUNDLEdBQUwsS0FBYSxLQUFLSCxVQUFMLENBQWdCQyxTQUE5QixJQUF5QyxJQUFoRTtBQUNBLFNBQUtELFVBQUwsQ0FBZ0JRLFVBQWhCLENBQTJCRixDQUEzQixHQUFpQyxLQUFLRyxJQUFMLENBQVVNLGNBQVYsR0FBMkJDLEtBQTVEO0FBQ0EsU0FBS2hCLFVBQUwsQ0FBZ0JRLFVBQWhCLENBQTJCRCxDQUEzQixHQUFpQyxLQUFLRSxJQUFMLENBQVVNLGNBQVYsR0FBMkJHLE1BQTVEO0FBR0gsR0E1RUk7QUE4RUxRLEVBQUFBLElBQUksRUFBRSxnQkFDTjtBQUVJLFFBQUlwQyxFQUFFLENBQUMwQyxHQUFILENBQU9DLFFBQVgsRUFBcUI7QUFDakIzQyxNQUFBQSxFQUFFLENBQUNtQyxHQUFILENBQU8sc0JBQVA7QUFDQSxXQUFLSSxRQUFMLEdBQWdCLElBQUl2QyxFQUFFLENBQUNzRCxTQUFQLEVBQWhCOztBQUNBLFdBQUtmLFFBQUwsQ0FBY2dCLGNBQWQsQ0FBNkJ4RCxvQkFBN0IsRUFBbUQsS0FBS08sU0FBeEQ7O0FBR0EsV0FBS2lDLFFBQUwsQ0FBY2lCLFlBQWQsQ0FBMkJ4RCxFQUFFLENBQUN5RCxLQUFILENBQVNDLHVCQUFwQyxFQUE2RDFELEVBQUUsQ0FBQ3lELEtBQUgsQ0FBU0Usc0JBQXRFOztBQUNBLFdBQUtwQixRQUFMLENBQWNpQixZQUFkLENBQTJCeEQsRUFBRSxDQUFDeUQsS0FBSCxDQUFTRyxvQkFBcEMsRUFBMEQ1RCxFQUFFLENBQUN5RCxLQUFILENBQVNJLG1CQUFuRTs7QUFDQSxXQUFLdEIsUUFBTCxDQUFjaUIsWUFBZCxDQUEyQnhELEVBQUUsQ0FBQ3lELEtBQUgsQ0FBU0ssd0JBQXBDLEVBQThEOUQsRUFBRSxDQUFDeUQsS0FBSCxDQUFTTSx3QkFBdkU7O0FBRUEsV0FBS3hCLFFBQUwsQ0FBY3lCLElBQWQ7O0FBQ0EsV0FBS3pCLFFBQUwsQ0FBYzBCLGNBQWQ7O0FBQ0EsV0FBS3hCLGtCQUFMO0FBSUgsS0FoQkQsTUFnQks7QUFDRCxXQUFLRixRQUFMLEdBQWdCLElBQUl2QyxFQUFFLENBQUNzRCxTQUFQLEVBQWhCOztBQUNBLFdBQUtmLFFBQUwsQ0FBYzJCLDZCQUFkLENBQTRDckUsYUFBNUMsRUFBMkQsS0FBS1MsU0FBaEU7O0FBQ0EsV0FBS2lDLFFBQUwsQ0FBY2lCLFlBQWQsQ0FBMkJ4RCxFQUFFLENBQUN5RCxLQUFILENBQVNDLHVCQUFwQyxFQUE2RDFELEVBQUUsQ0FBQ3lELEtBQUgsQ0FBU0Usc0JBQXRFOztBQUNBLFdBQUtwQixRQUFMLENBQWNpQixZQUFkLENBQTJCeEQsRUFBRSxDQUFDeUQsS0FBSCxDQUFTRyxvQkFBcEMsRUFBMEQ1RCxFQUFFLENBQUN5RCxLQUFILENBQVNJLG1CQUFuRTs7QUFDQSxXQUFLdEIsUUFBTCxDQUFjaUIsWUFBZCxDQUEyQnhELEVBQUUsQ0FBQ3lELEtBQUgsQ0FBU0ssd0JBQXBDLEVBQThEOUQsRUFBRSxDQUFDeUQsS0FBSCxDQUFTTSx3QkFBdkU7O0FBRUEsV0FBS3hCLFFBQUwsQ0FBY3lCLElBQWQ7O0FBQ0EsV0FBS3pCLFFBQUwsQ0FBYzBCLGNBQWQ7O0FBQ0EsV0FBSzFCLFFBQUwsQ0FBY0MsR0FBZDs7QUFFQSxXQUFLQyxrQkFBTDs7QUFFQSxXQUFLRixRQUFMLENBQWNZLHdCQUFkLENBQXdDLEtBQUtaLFFBQUwsQ0FBYzRCLHlCQUFkLENBQXdDLE1BQXhDLENBQXhDLEVBQXlGLEtBQUt6RCxVQUFMLENBQWdCSSxJQUF6Rzs7QUFDQSxXQUFLeUIsUUFBTCxDQUFjVSx3QkFBZCxDQUF3QyxLQUFLVixRQUFMLENBQWM0Qix5QkFBZCxDQUF3QyxPQUF4QyxDQUF4QyxFQUEwRixLQUFLekQsVUFBTCxDQUFnQkssS0FBaEIsQ0FBc0JDLENBQWhILEVBQWtILEtBQUtOLFVBQUwsQ0FBZ0JLLEtBQWhCLENBQXNCRSxDQUF4STs7QUFDQSxXQUFLc0IsUUFBTCxDQUFjVSx3QkFBZCxDQUF1QyxLQUFLVixRQUFMLENBQWM0Qix5QkFBZCxDQUF3QyxZQUF4QyxDQUF2QyxFQUE4RixLQUFLekQsVUFBTCxDQUFnQlEsVUFBaEIsQ0FBMkJGLENBQXpILEVBQTJILEtBQUtOLFVBQUwsQ0FBZ0JRLFVBQWhCLENBQTJCRCxDQUF0SjtBQUVIOztBQUtELFFBQUlqQixFQUFFLENBQUMwQyxHQUFILENBQU9DLFFBQVgsRUFBcUI7QUFDakIsVUFBSUMsZUFBZSxHQUFHNUMsRUFBRSxDQUFDNkMsY0FBSCxDQUFrQkMsd0JBQWxCLENBQTJDLEtBQUtQLFFBQWhELENBQXRCO0FBQ0FLLE1BQUFBLGVBQWUsQ0FBQ0csY0FBaEIsQ0FBZ0MsWUFBaEMsRUFBOEMsS0FBS3JDLFVBQUwsQ0FBZ0JRLFVBQTlEO0FBQ0EwQixNQUFBQSxlQUFlLENBQUNJLGVBQWhCLENBQWlDLE1BQWpDLEVBQTBDLEtBQUt0QyxVQUFMLENBQWdCSSxJQUExRDtBQUNBOEIsTUFBQUEsZUFBZSxDQUFDRyxjQUFoQixDQUFnQyxPQUFoQyxFQUEwQyxLQUFLckMsVUFBTCxDQUFnQkssS0FBMUQ7QUFDSCxLQUxELE1BS0s7QUFHRCxXQUFLbUMsV0FBTCxHQUFtQixLQUFLWCxRQUFMLENBQWM0Qix5QkFBZCxDQUF5QyxZQUF6QyxDQUFuQjtBQUNBLFdBQUtmLEtBQUwsR0FBYSxLQUFLYixRQUFMLENBQWM0Qix5QkFBZCxDQUF5QyxNQUF6QyxDQUFiO0FBQ0EsV0FBS2QsTUFBTCxHQUFjLEtBQUtkLFFBQUwsQ0FBYzRCLHlCQUFkLENBQXlDLE9BQXpDLENBQWQ7O0FBRUEsV0FBSzVCLFFBQUwsQ0FBY1Usd0JBQWQsQ0FBd0MsS0FBS0MsV0FBN0MsRUFBMEQsS0FBS3hDLFVBQUwsQ0FBZ0JRLFVBQWhCLENBQTJCRixDQUFyRixFQUF1RixLQUFLTixVQUFMLENBQWdCUSxVQUFoQixDQUEyQkQsQ0FBbEg7O0FBQ0EsV0FBS3NCLFFBQUwsQ0FBY1ksd0JBQWQsQ0FBd0MsS0FBS0MsS0FBN0MsRUFBb0QsS0FBSzFDLFVBQUwsQ0FBZ0JJLElBQXBFOztBQUNBLFdBQUt5QixRQUFMLENBQWNVLHdCQUFkLENBQXdDLEtBQUtJLE1BQTdDLEVBQXFELEtBQUszQyxVQUFMLENBQWdCSyxLQUFoQixDQUFzQkMsQ0FBM0UsRUFBNkUsS0FBS04sVUFBTCxDQUFnQkssS0FBaEIsQ0FBc0JFLENBQW5HO0FBQ0g7O0FBRUQsU0FBS21ELFVBQUwsQ0FBaUIsS0FBS2pELElBQUwsQ0FBVWtELE9BQTNCLEVBQW9DLEtBQUs5QixRQUF6QztBQUNILEdBeklJO0FBMklMNkIsRUFBQUEsVUFBVSxFQUFDLG9CQUFVakQsSUFBVixFQUFnQm1ELE9BQWhCLEVBQXlCO0FBQ2hDLFFBQUl0RSxFQUFFLENBQUMwQyxHQUFILENBQU9DLFFBQVgsRUFBcUI7QUFDakIsVUFBSUMsZUFBZSxHQUFHNUMsRUFBRSxDQUFDNkMsY0FBSCxDQUFrQkMsd0JBQWxCLENBQTJDd0IsT0FBM0MsQ0FBdEI7QUFDQW5ELE1BQUFBLElBQUksQ0FBQ29ELGlCQUFMLENBQXVCM0IsZUFBdkI7QUFDSCxLQUhELE1BR0s7QUFDRHpCLE1BQUFBLElBQUksQ0FBQ3FELGdCQUFMLENBQXNCRixPQUF0QjtBQUNIOztBQUdELFFBQUlHLFFBQVEsR0FBR3RELElBQUksQ0FBQ3NELFFBQXBCO0FBQ0EsUUFBSSxDQUFDQSxRQUFMLEVBQ0k7O0FBRUosU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFRLENBQUNFLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDO0FBQ0ksV0FBS04sVUFBTCxDQUFnQkssUUFBUSxDQUFDQyxDQUFELENBQXhCLEVBQTZCSixPQUE3QjtBQURKO0FBRUg7QUExSkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9kZWZhdWx0X3ZlcnQgPSByZXF1aXJlKFwiLi4vU2hhZGVycy9jY1NoYWRlcl9EZWZhdWx0X1ZlcnQuanNcIik7XHJcbnZhciBfZGVmYXVsdF92ZXJ0X25vX212cCA9IHJlcXVpcmUoXCIuLi9TaGFkZXJzL2NjU2hhZGVyX0RlZmF1bHRfVmVydF9ub01WUC5qc1wiKTtcclxuXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGdsYXNzRmFjdG9yOjEuMCxcclxuICAgICAgICBmbGFnU2hhZGVyOlwiXCIsXHJcbiAgICAgICAgZnJhZ19nbHNsOntcclxuICAgICAgICAgICAgZGVmYXVsdDpcIkVmZmVjdDEwLmZzLmdsc2xcIixcclxuICAgICAgICAgICAgdmlzaWJsZTpmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICB9LCBcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzPXtcclxuICAgICAgICAgICAgc3RhcnRUaW1lOkRhdGUubm93KCksXHJcbiAgICAgICAgICAgIHRpbWU6MC4wLFxyXG4gICAgICAgICAgICBtb3VzZTp7XHJcbiAgICAgICAgICAgICAgICB4OjAuMCxcclxuICAgICAgICAgICAgICAgIHk6MC4wLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXNvbHV0aW9uOntcclxuICAgICAgICAgICAgICAgIHg6MC4wLFxyXG4gICAgICAgICAgICAgICAgeTowLjAsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1ldGVycy5tb3VzZS54ID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGggLyBldmVudC5nZXRMb2NhdGlvblgoKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLnkgPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyBldmVudC5nZXRMb2NhdGlvblkoKTsgXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlcnMubW91c2UueCA9IHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gZXZlbnQuZ2V0TG9jYXRpb25YKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1ldGVycy5tb3VzZS55ID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gZXZlbnQuZ2V0TG9jYXRpb25ZKCk7IFxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhzZWxmLmZsYWdTaGFkZXIsZnVuY3Rpb24oZXJyLHR4dCl7XHJcbiAgICAgICAgICAgIGlmKGVycil7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coZXJyKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNlbGYuZnJhZ19nbHNsID0gdHh0O1xyXG4gICAgICAgICAgICAgICAgc2VsZi5fdXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LFxyXG4gICAgdXBkYXRlOmZ1bmN0aW9uKGR0KXtcclxuICAgICAgICBpZih0aGlzLmdsYXNzRmFjdG9yPj00MCl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2xhc3NGYWN0b3I9MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nbGFzc0ZhY3Rvcis9ZHQqMztcclxuXHJcbiAgICAgICAgaWYodGhpcy5fcHJvZ3JhbSl7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnVzZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdMUGFyYW1ldGVycygpO1xyXG4gICAgICAgICAgICBpZihjYy5zeXMuaXNOYXRpdmUpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGdsUHJvZ3JhbV9zdGF0ZSA9IGNjLkdMUHJvZ3JhbVN0YXRlLmdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbSh0aGlzLl9wcm9ncmFtKTtcclxuICAgICAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtVmVjMiggXCJyZXNvbHV0aW9uXCIsIHRoaXMucGFyYW1ldGVycy5yZXNvbHV0aW9uICk7XHJcbiAgICAgICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybUZsb2F0KCBcInRpbWVcIiwgdGhpcy5wYXJhbWV0ZXJzLnRpbWUgKTsgICAgXHJcbiAgICAgICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybVZlYzIoIFwibW91c2VcIiAsIHRoaXMucGFyYW1ldGVycy5tb3VzZSApO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDJmKCB0aGlzLl9yZXNvbHV0aW9uLCB0aGlzLnBhcmFtZXRlcnMucmVzb2x1dGlvbi54LHRoaXMucGFyYW1ldGVycy5yZXNvbHV0aW9uLnkgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKCB0aGlzLl90aW1lLCB0aGlzLnBhcmFtZXRlcnMudGltZSApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMmYoIHRoaXMuX21vdXNlLCB0aGlzLnBhcmFtZXRlcnMubW91c2UueCx0aGlzLnBhcmFtZXRlcnMubW91c2UueCApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZUdMUGFyYW1ldGVycygpe1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy50aW1lID0gKERhdGUubm93KCkgLSB0aGlzLnBhcmFtZXRlcnMuc3RhcnRUaW1lKS8xMDAwO1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5yZXNvbHV0aW9uLnggPSAoIHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpLndpZHRoICk7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnJlc29sdXRpb24ueSA9ICggdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0ICk7XHJcblxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgX3VzZTogZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgY2MubG9nKFwidXNlIG5hdGl2ZSBHTFByb2dyYW1cIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0gPSBuZXcgY2MuR0xQcm9ncmFtKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uaW5pdFdpdGhTdHJpbmcoX2RlZmF1bHRfdmVydF9ub19tdnAsIHRoaXMuZnJhZ19nbHNsICk7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfUE9TSVRJT04sIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfUE9TSVRJT04pO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9DT0xPUiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1RFWF9DT09SRCwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9URVhfQ09PUkRTKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0ubGluaygpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnVwZGF0ZVVuaWZvcm1zKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlR0xQYXJhbWV0ZXJzKCk7XHJcblxyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbSA9IG5ldyBjYy5HTFByb2dyYW0oKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5pbml0V2l0aFZlcnRleFNoYWRlckJ5dGVBcnJheShfZGVmYXVsdF92ZXJ0LCB0aGlzLmZyYWdfZ2xzbCApO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9QT1NJVElPTiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9QT1NJVElPTik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX0NPTE9SLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX0NPTE9SKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfVEVYX0NPT1JELCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1RFWF9DT09SRFMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5saW5rKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0udXBkYXRlVW5pZm9ybXMoKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS51c2UoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlR0xQYXJhbWV0ZXJzKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZiggdGhpcy5fcHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKCd0aW1lJyksIHRoaXMucGFyYW1ldGVycy50aW1lICk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDJmKCB0aGlzLl9wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoJ21vdXNlJyksIHRoaXMucGFyYW1ldGVycy5tb3VzZS54LHRoaXMucGFyYW1ldGVycy5tb3VzZS55ICk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDJmKHRoaXMuX3Byb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSgncmVzb2x1dGlvbicpLCB0aGlzLnBhcmFtZXRlcnMucmVzb2x1dGlvbi54LHRoaXMucGFyYW1ldGVycy5yZXNvbHV0aW9uLnkgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMuX3Byb2dyYW0pO1xyXG4gICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybVZlYzIoIFwicmVzb2x1dGlvblwiLCB0aGlzLnBhcmFtZXRlcnMucmVzb2x1dGlvbiApO1xyXG4gICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybUZsb2F0KCBcInRpbWVcIiAsIHRoaXMucGFyYW1ldGVycy50aW1lICk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtVmVjMiggXCJtb3VzZVwiICwgdGhpcy5wYXJhbWV0ZXJzLm1vdXNlICk7XHJcbiAgICAgICAgfWVsc2V7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5fcmVzb2x1dGlvbiA9IHRoaXMuX3Byb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSggXCJyZXNvbHV0aW9uXCIgKTtcclxuICAgICAgICAgICAgdGhpcy5fdGltZSA9IHRoaXMuX3Byb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSggXCJ0aW1lXCIgKTtcclxuICAgICAgICAgICAgdGhpcy5fbW91c2UgPSB0aGlzLl9wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoIFwibW91c2VcIiApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMmYoIHRoaXMuX3Jlc29sdXRpb24sIHRoaXMucGFyYW1ldGVycy5yZXNvbHV0aW9uLngsdGhpcy5wYXJhbWV0ZXJzLnJlc29sdXRpb24ueSApO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZiggdGhpcy5fdGltZSwgdGhpcy5wYXJhbWV0ZXJzLnRpbWUgKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMmYoIHRoaXMuX21vdXNlLCB0aGlzLnBhcmFtZXRlcnMubW91c2UueCx0aGlzLnBhcmFtZXRlcnMubW91c2UueSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRQcm9ncmFtKCB0aGlzLm5vZGUuX3NnTm9kZSAsdGhpcy5fcHJvZ3JhbSApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2V0UHJvZ3JhbTpmdW5jdGlvbiAobm9kZSwgcHJvZ3JhbSkge1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdmFyIGdsUHJvZ3JhbV9zdGF0ZSA9IGNjLkdMUHJvZ3JhbVN0YXRlLmdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRHTFByb2dyYW1TdGF0ZShnbFByb2dyYW1fc3RhdGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBub2RlLnNldFNoYWRlclByb2dyYW0ocHJvZ3JhbSk7ICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgaWYgKCFjaGlsZHJlbilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmFtKGNoaWxkcmVuW2ldLCBwcm9ncmFtKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG4iXX0=