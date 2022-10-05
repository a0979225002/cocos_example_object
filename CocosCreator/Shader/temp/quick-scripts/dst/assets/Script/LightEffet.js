
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/LightEffet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '60a3aeK0RZJGqMkSoAzoPXI', 'LightEffet');
// Script/LightEffet.js

"use strict";

var _default_vert = require("../Shaders/ccShader_Default_Vert.js");

var _default_vert_no_mvp = require("../Shaders/ccShader_Default_Vert_noMVP.js");

var _glass_frag = require("../Shaders/ccShader_LightEffect_Frag.js");

cc.Class({
  "extends": cc.Component,
  properties: {
    glassFactor: 1.0
  },
  onLoad: function onLoad() {
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

    this._use();
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
        glProgram_state.setUniformVec2("mouse_touch", this.parameters.mouse);
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

      this._program.initWithString(_default_vert_no_mvp, _glass_frag);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);

      this._program.link();

      this._program.updateUniforms();

      this.updateGLParameters();
    } else {
      this._program = new cc.GLProgram();

      this._program.initWithVertexShaderByteArray(_default_vert, _glass_frag);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);

      this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);

      this._program.link();

      this._program.updateUniforms();

      this._program.use();

      this.updateGLParameters();

      this._program.setUniformLocationWith1f(this._program.getUniformLocationForName('time'), this.parameters.time);

      this._program.setUniformLocationWith2f(this._program.getUniformLocationForName('mouse_touch'), this.parameters.mouse.x, this.parameters.mouse.y);

      this._program.setUniformLocationWith2f(this._program.getUniformLocationForName('resolution'), this.parameters.resolution.x, this.parameters.resolution.y);
    }

    if (cc.sys.isNative) {
      var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this._program);
      glProgram_state.setUniformVec2("resolution", this.parameters.resolution);
      glProgram_state.setUniformFloat("time", this.parameters.time);
      glProgram_state.setUniformVec2("mouse_touch", this.parameters.mouse);
    } else {
      this._resolution = this._program.getUniformLocationForName("resolution");
      this._time = this._program.getUniformLocationForName("time");
      this._mouse = this._program.getUniformLocationForName("mouse_touch");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxMaWdodEVmZmV0LmpzIl0sIm5hbWVzIjpbIl9kZWZhdWx0X3ZlcnQiLCJyZXF1aXJlIiwiX2RlZmF1bHRfdmVydF9ub19tdnAiLCJfZ2xhc3NfZnJhZyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZ2xhc3NGYWN0b3IiLCJvbkxvYWQiLCJwYXJhbWV0ZXJzIiwic3RhcnRUaW1lIiwiRGF0ZSIsIm5vdyIsInRpbWUiLCJtb3VzZSIsIngiLCJ5IiwicmVzb2x1dGlvbiIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9NT1ZFIiwiZXZlbnQiLCJnZXRDb250ZW50U2l6ZSIsIndpZHRoIiwiZ2V0TG9jYXRpb25YIiwiaGVpZ2h0IiwiZ2V0TG9jYXRpb25ZIiwiVE9VQ0hfTU9WRSIsIl91c2UiLCJ1cGRhdGUiLCJkdCIsIl9wcm9ncmFtIiwidXNlIiwidXBkYXRlR0xQYXJhbWV0ZXJzIiwic3lzIiwiaXNOYXRpdmUiLCJnbFByb2dyYW1fc3RhdGUiLCJHTFByb2dyYW1TdGF0ZSIsImdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbSIsInNldFVuaWZvcm1WZWMyIiwic2V0VW5pZm9ybUZsb2F0Iiwic2V0VW5pZm9ybUxvY2F0aW9uV2l0aDJmIiwiX3Jlc29sdXRpb24iLCJzZXRVbmlmb3JtTG9jYXRpb25XaXRoMWYiLCJfdGltZSIsIl9tb3VzZSIsImxvZyIsIkdMUHJvZ3JhbSIsImluaXRXaXRoU3RyaW5nIiwiYWRkQXR0cmlidXRlIiwibWFjcm8iLCJBVFRSSUJVVEVfTkFNRV9QT1NJVElPTiIsIlZFUlRFWF9BVFRSSUJfUE9TSVRJT04iLCJBVFRSSUJVVEVfTkFNRV9DT0xPUiIsIlZFUlRFWF9BVFRSSUJfQ09MT1IiLCJBVFRSSUJVVEVfTkFNRV9URVhfQ09PUkQiLCJWRVJURVhfQVRUUklCX1RFWF9DT09SRFMiLCJsaW5rIiwidXBkYXRlVW5pZm9ybXMiLCJpbml0V2l0aFZlcnRleFNoYWRlckJ5dGVBcnJheSIsImdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUiLCJzZXRQcm9ncmFtIiwiX3NnTm9kZSIsInByb2dyYW0iLCJzZXRHTFByb2dyYW1TdGF0ZSIsInNldFNoYWRlclByb2dyYW0iLCJjaGlsZHJlbiIsImkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHQyxPQUFPLENBQUMscUNBQUQsQ0FBM0I7O0FBQ0EsSUFBSUMsb0JBQW9CLEdBQUdELE9BQU8sQ0FBQywyQ0FBRCxDQUFsQzs7QUFDQSxJQUFJRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyx5Q0FBRCxDQUF6Qjs7QUFFQUcsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBQztBQURKLEdBSFA7QUFPTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFNBQUtDLFVBQUwsR0FBZ0I7QUFDWkMsTUFBQUEsU0FBUyxFQUFDQyxJQUFJLENBQUNDLEdBQUwsRUFERTtBQUVaQyxNQUFBQSxJQUFJLEVBQUMsR0FGTztBQUdaQyxNQUFBQSxLQUFLLEVBQUM7QUFDRkMsUUFBQUEsQ0FBQyxFQUFDLEdBREE7QUFFRkMsUUFBQUEsQ0FBQyxFQUFDO0FBRkEsT0FITTtBQU9aQyxNQUFBQSxVQUFVLEVBQUM7QUFDUEYsUUFBQUEsQ0FBQyxFQUFDLEdBREs7QUFFUEMsUUFBQUEsQ0FBQyxFQUFDO0FBRks7QUFQQyxLQUFoQjtBQWFBLFNBQUtFLElBQUwsQ0FBVUMsRUFBVixDQUFhaEIsRUFBRSxDQUFDaUIsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEyQyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3hELFdBQUtkLFVBQUwsQ0FBZ0JLLEtBQWhCLENBQXNCQyxDQUF0QixHQUEwQixLQUFLRyxJQUFMLENBQVVNLGNBQVYsR0FBMkJDLEtBQTNCLEdBQW1DRixLQUFLLENBQUNHLFlBQU4sRUFBN0Q7QUFDQSxXQUFLakIsVUFBTCxDQUFnQkssS0FBaEIsQ0FBc0JFLENBQXRCLEdBQTBCLEtBQUtFLElBQUwsQ0FBVU0sY0FBVixHQUEyQkcsTUFBM0IsR0FBb0NKLEtBQUssQ0FBQ0ssWUFBTixFQUE5RDtBQUNILEtBSEQsRUFHRyxJQUhIO0FBTUEsU0FBS1YsSUFBTCxDQUFVQyxFQUFWLENBQWNoQixFQUFFLENBQUNpQixJQUFILENBQVFDLFNBQVIsQ0FBa0JRLFVBQWhDLEVBQTRDLFVBQVVOLEtBQVYsRUFBaUI7QUFDekQsV0FBS2QsVUFBTCxDQUFnQkssS0FBaEIsQ0FBc0JDLENBQXRCLEdBQTBCLEtBQUtHLElBQUwsQ0FBVU0sY0FBVixHQUEyQkMsS0FBM0IsR0FBbUNGLEtBQUssQ0FBQ0csWUFBTixFQUE3RDtBQUNBLFdBQUtqQixVQUFMLENBQWdCSyxLQUFoQixDQUFzQkUsQ0FBdEIsR0FBMEIsS0FBS0UsSUFBTCxDQUFVTSxjQUFWLEdBQTJCRyxNQUEzQixHQUFvQ0osS0FBSyxDQUFDSyxZQUFOLEVBQTlEO0FBQ0gsS0FIRCxFQUdHLElBSEg7O0FBS0EsU0FBS0UsSUFBTDtBQUNILEdBakNJO0FBa0NMQyxFQUFBQSxNQUFNLEVBQUMsZ0JBQVNDLEVBQVQsRUFBWTtBQUNmLFFBQUcsS0FBS3pCLFdBQUwsSUFBa0IsRUFBckIsRUFBd0I7QUFDcEIsV0FBS0EsV0FBTCxHQUFpQixDQUFqQjtBQUNIOztBQUNELFNBQUtBLFdBQUwsSUFBa0J5QixFQUFFLEdBQUMsQ0FBckI7O0FBRUEsUUFBRyxLQUFLQyxRQUFSLEVBQWlCO0FBRWIsV0FBS0EsUUFBTCxDQUFjQyxHQUFkOztBQUNBLFdBQUtDLGtCQUFMOztBQUNBLFVBQUdoQyxFQUFFLENBQUNpQyxHQUFILENBQU9DLFFBQVYsRUFBbUI7QUFDZixZQUFJQyxlQUFlLEdBQUduQyxFQUFFLENBQUNvQyxjQUFILENBQWtCQyx3QkFBbEIsQ0FBMkMsS0FBS1AsUUFBaEQsQ0FBdEI7QUFDQUssUUFBQUEsZUFBZSxDQUFDRyxjQUFoQixDQUFnQyxZQUFoQyxFQUE4QyxLQUFLaEMsVUFBTCxDQUFnQlEsVUFBOUQ7QUFDQXFCLFFBQUFBLGVBQWUsQ0FBQ0ksZUFBaEIsQ0FBaUMsTUFBakMsRUFBeUMsS0FBS2pDLFVBQUwsQ0FBZ0JJLElBQXpEO0FBQ0F5QixRQUFBQSxlQUFlLENBQUNHLGNBQWhCLENBQWdDLGFBQWhDLEVBQWdELEtBQUtoQyxVQUFMLENBQWdCSyxLQUFoRTtBQUNILE9BTEQsTUFLSztBQUNELGFBQUttQixRQUFMLENBQWNVLHdCQUFkLENBQXdDLEtBQUtDLFdBQTdDLEVBQTBELEtBQUtuQyxVQUFMLENBQWdCUSxVQUFoQixDQUEyQkYsQ0FBckYsRUFBdUYsS0FBS04sVUFBTCxDQUFnQlEsVUFBaEIsQ0FBMkJELENBQWxIOztBQUNBLGFBQUtpQixRQUFMLENBQWNZLHdCQUFkLENBQXdDLEtBQUtDLEtBQTdDLEVBQW9ELEtBQUtyQyxVQUFMLENBQWdCSSxJQUFwRTs7QUFDQSxhQUFLb0IsUUFBTCxDQUFjVSx3QkFBZCxDQUF3QyxLQUFLSSxNQUE3QyxFQUFxRCxLQUFLdEMsVUFBTCxDQUFnQkssS0FBaEIsQ0FBc0JDLENBQTNFLEVBQTZFLEtBQUtOLFVBQUwsQ0FBZ0JLLEtBQWhCLENBQXNCQyxDQUFuRztBQUNIO0FBQ0o7QUFDSixHQXZESTtBQXdETG9CLEVBQUFBLGtCQXhESyxnQ0F3RGU7QUFDaEIsU0FBSzFCLFVBQUwsQ0FBZ0JJLElBQWhCLEdBQXVCLENBQUNGLElBQUksQ0FBQ0MsR0FBTCxLQUFhLEtBQUtILFVBQUwsQ0FBZ0JDLFNBQTlCLElBQXlDLElBQWhFO0FBQ0EsU0FBS0QsVUFBTCxDQUFnQlEsVUFBaEIsQ0FBMkJGLENBQTNCLEdBQWlDLEtBQUtHLElBQUwsQ0FBVU0sY0FBVixHQUEyQkMsS0FBNUQ7QUFDQSxTQUFLaEIsVUFBTCxDQUFnQlEsVUFBaEIsQ0FBMkJELENBQTNCLEdBQWlDLEtBQUtFLElBQUwsQ0FBVU0sY0FBVixHQUEyQkcsTUFBNUQ7QUFHSCxHQTlESTtBQWdFTEcsRUFBQUEsSUFBSSxFQUFFLGdCQUNOO0FBRUksUUFBSTNCLEVBQUUsQ0FBQ2lDLEdBQUgsQ0FBT0MsUUFBWCxFQUFxQjtBQUNqQmxDLE1BQUFBLEVBQUUsQ0FBQzZDLEdBQUgsQ0FBTyxzQkFBUDtBQUNBLFdBQUtmLFFBQUwsR0FBZ0IsSUFBSTlCLEVBQUUsQ0FBQzhDLFNBQVAsRUFBaEI7O0FBQ0EsV0FBS2hCLFFBQUwsQ0FBY2lCLGNBQWQsQ0FBNkJqRCxvQkFBN0IsRUFBbURDLFdBQW5EOztBQUdBLFdBQUsrQixRQUFMLENBQWNrQixZQUFkLENBQTJCaEQsRUFBRSxDQUFDaUQsS0FBSCxDQUFTQyx1QkFBcEMsRUFBNkRsRCxFQUFFLENBQUNpRCxLQUFILENBQVNFLHNCQUF0RTs7QUFDQSxXQUFLckIsUUFBTCxDQUFja0IsWUFBZCxDQUEyQmhELEVBQUUsQ0FBQ2lELEtBQUgsQ0FBU0csb0JBQXBDLEVBQTBEcEQsRUFBRSxDQUFDaUQsS0FBSCxDQUFTSSxtQkFBbkU7O0FBQ0EsV0FBS3ZCLFFBQUwsQ0FBY2tCLFlBQWQsQ0FBMkJoRCxFQUFFLENBQUNpRCxLQUFILENBQVNLLHdCQUFwQyxFQUE4RHRELEVBQUUsQ0FBQ2lELEtBQUgsQ0FBU00sd0JBQXZFOztBQUVBLFdBQUt6QixRQUFMLENBQWMwQixJQUFkOztBQUNBLFdBQUsxQixRQUFMLENBQWMyQixjQUFkOztBQUNBLFdBQUt6QixrQkFBTDtBQUlILEtBaEJELE1BZ0JLO0FBQ0QsV0FBS0YsUUFBTCxHQUFnQixJQUFJOUIsRUFBRSxDQUFDOEMsU0FBUCxFQUFoQjs7QUFDQSxXQUFLaEIsUUFBTCxDQUFjNEIsNkJBQWQsQ0FBNEM5RCxhQUE1QyxFQUEyREcsV0FBM0Q7O0FBQ0EsV0FBSytCLFFBQUwsQ0FBY2tCLFlBQWQsQ0FBMkJoRCxFQUFFLENBQUNpRCxLQUFILENBQVNDLHVCQUFwQyxFQUE2RGxELEVBQUUsQ0FBQ2lELEtBQUgsQ0FBU0Usc0JBQXRFOztBQUNBLFdBQUtyQixRQUFMLENBQWNrQixZQUFkLENBQTJCaEQsRUFBRSxDQUFDaUQsS0FBSCxDQUFTRyxvQkFBcEMsRUFBMERwRCxFQUFFLENBQUNpRCxLQUFILENBQVNJLG1CQUFuRTs7QUFDQSxXQUFLdkIsUUFBTCxDQUFja0IsWUFBZCxDQUEyQmhELEVBQUUsQ0FBQ2lELEtBQUgsQ0FBU0ssd0JBQXBDLEVBQThEdEQsRUFBRSxDQUFDaUQsS0FBSCxDQUFTTSx3QkFBdkU7O0FBRUEsV0FBS3pCLFFBQUwsQ0FBYzBCLElBQWQ7O0FBQ0EsV0FBSzFCLFFBQUwsQ0FBYzJCLGNBQWQ7O0FBQ0EsV0FBSzNCLFFBQUwsQ0FBY0MsR0FBZDs7QUFFQSxXQUFLQyxrQkFBTDs7QUFFQSxXQUFLRixRQUFMLENBQWNZLHdCQUFkLENBQXdDLEtBQUtaLFFBQUwsQ0FBYzZCLHlCQUFkLENBQXdDLE1BQXhDLENBQXhDLEVBQXlGLEtBQUtyRCxVQUFMLENBQWdCSSxJQUF6Rzs7QUFDQSxXQUFLb0IsUUFBTCxDQUFjVSx3QkFBZCxDQUF3QyxLQUFLVixRQUFMLENBQWM2Qix5QkFBZCxDQUF3QyxhQUF4QyxDQUF4QyxFQUFnRyxLQUFLckQsVUFBTCxDQUFnQkssS0FBaEIsQ0FBc0JDLENBQXRILEVBQXdILEtBQUtOLFVBQUwsQ0FBZ0JLLEtBQWhCLENBQXNCRSxDQUE5STs7QUFDQSxXQUFLaUIsUUFBTCxDQUFjVSx3QkFBZCxDQUF1QyxLQUFLVixRQUFMLENBQWM2Qix5QkFBZCxDQUF3QyxZQUF4QyxDQUF2QyxFQUE4RixLQUFLckQsVUFBTCxDQUFnQlEsVUFBaEIsQ0FBMkJGLENBQXpILEVBQTJILEtBQUtOLFVBQUwsQ0FBZ0JRLFVBQWhCLENBQTJCRCxDQUF0SjtBQUVIOztBQUtELFFBQUliLEVBQUUsQ0FBQ2lDLEdBQUgsQ0FBT0MsUUFBWCxFQUFxQjtBQUNqQixVQUFJQyxlQUFlLEdBQUduQyxFQUFFLENBQUNvQyxjQUFILENBQWtCQyx3QkFBbEIsQ0FBMkMsS0FBS1AsUUFBaEQsQ0FBdEI7QUFDQUssTUFBQUEsZUFBZSxDQUFDRyxjQUFoQixDQUFnQyxZQUFoQyxFQUE4QyxLQUFLaEMsVUFBTCxDQUFnQlEsVUFBOUQ7QUFDQXFCLE1BQUFBLGVBQWUsQ0FBQ0ksZUFBaEIsQ0FBaUMsTUFBakMsRUFBMEMsS0FBS2pDLFVBQUwsQ0FBZ0JJLElBQTFEO0FBQ0F5QixNQUFBQSxlQUFlLENBQUNHLGNBQWhCLENBQWdDLGFBQWhDLEVBQWdELEtBQUtoQyxVQUFMLENBQWdCSyxLQUFoRTtBQUNILEtBTEQsTUFLSztBQUdELFdBQUs4QixXQUFMLEdBQW1CLEtBQUtYLFFBQUwsQ0FBYzZCLHlCQUFkLENBQXlDLFlBQXpDLENBQW5CO0FBQ0EsV0FBS2hCLEtBQUwsR0FBYSxLQUFLYixRQUFMLENBQWM2Qix5QkFBZCxDQUF5QyxNQUF6QyxDQUFiO0FBQ0EsV0FBS2YsTUFBTCxHQUFjLEtBQUtkLFFBQUwsQ0FBYzZCLHlCQUFkLENBQXlDLGFBQXpDLENBQWQ7O0FBRUEsV0FBSzdCLFFBQUwsQ0FBY1Usd0JBQWQsQ0FBd0MsS0FBS0MsV0FBN0MsRUFBMEQsS0FBS25DLFVBQUwsQ0FBZ0JRLFVBQWhCLENBQTJCRixDQUFyRixFQUF1RixLQUFLTixVQUFMLENBQWdCUSxVQUFoQixDQUEyQkQsQ0FBbEg7O0FBQ0EsV0FBS2lCLFFBQUwsQ0FBY1ksd0JBQWQsQ0FBd0MsS0FBS0MsS0FBN0MsRUFBb0QsS0FBS3JDLFVBQUwsQ0FBZ0JJLElBQXBFOztBQUNBLFdBQUtvQixRQUFMLENBQWNVLHdCQUFkLENBQXdDLEtBQUtJLE1BQTdDLEVBQXFELEtBQUt0QyxVQUFMLENBQWdCSyxLQUFoQixDQUFzQkMsQ0FBM0UsRUFBNkUsS0FBS04sVUFBTCxDQUFnQkssS0FBaEIsQ0FBc0JFLENBQW5HO0FBQ0g7O0FBRUQsU0FBSytDLFVBQUwsQ0FBaUIsS0FBSzdDLElBQUwsQ0FBVThDLE9BQTNCLEVBQW9DLEtBQUsvQixRQUF6QztBQUNILEdBM0hJO0FBNkhMOEIsRUFBQUEsVUFBVSxFQUFDLG9CQUFVN0MsSUFBVixFQUFnQitDLE9BQWhCLEVBQXlCO0FBQ2hDLFFBQUk5RCxFQUFFLENBQUNpQyxHQUFILENBQU9DLFFBQVgsRUFBcUI7QUFDakIsVUFBSUMsZUFBZSxHQUFHbkMsRUFBRSxDQUFDb0MsY0FBSCxDQUFrQkMsd0JBQWxCLENBQTJDeUIsT0FBM0MsQ0FBdEI7QUFDQS9DLE1BQUFBLElBQUksQ0FBQ2dELGlCQUFMLENBQXVCNUIsZUFBdkI7QUFDSCxLQUhELE1BR0s7QUFDRHBCLE1BQUFBLElBQUksQ0FBQ2lELGdCQUFMLENBQXNCRixPQUF0QjtBQUNIOztBQUdELFFBQUlHLFFBQVEsR0FBR2xELElBQUksQ0FBQ2tELFFBQXBCO0FBQ0EsUUFBSSxDQUFDQSxRQUFMLEVBQ0k7O0FBRUosU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFRLENBQUNFLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDO0FBQ0ksV0FBS04sVUFBTCxDQUFnQkssUUFBUSxDQUFDQyxDQUFELENBQXhCLEVBQTZCSixPQUE3QjtBQURKO0FBRUg7QUE1SUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9kZWZhdWx0X3ZlcnQgPSByZXF1aXJlKFwiLi4vU2hhZGVycy9jY1NoYWRlcl9EZWZhdWx0X1ZlcnQuanNcIik7XHJcbnZhciBfZGVmYXVsdF92ZXJ0X25vX212cCA9IHJlcXVpcmUoXCIuLi9TaGFkZXJzL2NjU2hhZGVyX0RlZmF1bHRfVmVydF9ub01WUC5qc1wiKTtcclxudmFyIF9nbGFzc19mcmFnID0gcmVxdWlyZShcIi4uL1NoYWRlcnMvY2NTaGFkZXJfTGlnaHRFZmZlY3RfRnJhZy5qc1wiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ2xhc3NGYWN0b3I6MS4wLFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnM9e1xyXG4gICAgICAgICAgICBzdGFydFRpbWU6RGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgdGltZTowLjAsXHJcbiAgICAgICAgICAgIG1vdXNlOntcclxuICAgICAgICAgICAgICAgIHg6MC4wLFxyXG4gICAgICAgICAgICAgICAgeTowLjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc29sdXRpb246e1xyXG4gICAgICAgICAgICAgICAgeDowLjAsXHJcbiAgICAgICAgICAgICAgICB5OjAuMCxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9NT1ZFLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLnggPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS53aWR0aCAvIGV2ZW50LmdldExvY2F0aW9uWCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlcnMubW91c2UueSA9IHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIGV2ZW50LmdldExvY2F0aW9uWSgpOyBcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbiggY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1ldGVycy5tb3VzZS54ID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGggLyBldmVudC5nZXRMb2NhdGlvblgoKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLnkgPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyBldmVudC5nZXRMb2NhdGlvblkoKTsgXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3VzZSgpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZTpmdW5jdGlvbihkdCl7XHJcbiAgICAgICAgaWYodGhpcy5nbGFzc0ZhY3Rvcj49NDApe1xyXG4gICAgICAgICAgICB0aGlzLmdsYXNzRmFjdG9yPTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2xhc3NGYWN0b3IrPWR0KjM7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuX3Byb2dyYW0pe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS51c2UoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVHTFBhcmFtZXRlcnMoKTtcclxuICAgICAgICAgICAgaWYoY2Muc3lzLmlzTmF0aXZlKXtcclxuICAgICAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5fcHJvZ3JhbSk7XHJcbiAgICAgICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybVZlYzIoIFwicmVzb2x1dGlvblwiLCB0aGlzLnBhcmFtZXRlcnMucmVzb2x1dGlvbiApO1xyXG4gICAgICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1GbG9hdCggXCJ0aW1lXCIsIHRoaXMucGFyYW1ldGVycy50aW1lICk7ICAgIFxyXG4gICAgICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1WZWMyKCBcIm1vdXNlX3RvdWNoXCIgLCB0aGlzLnBhcmFtZXRlcnMubW91c2UgKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgyZiggdGhpcy5fcmVzb2x1dGlvbiwgdGhpcy5wYXJhbWV0ZXJzLnJlc29sdXRpb24ueCx0aGlzLnBhcmFtZXRlcnMucmVzb2x1dGlvbi55ICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZiggdGhpcy5fdGltZSwgdGhpcy5wYXJhbWV0ZXJzLnRpbWUgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDJmKCB0aGlzLl9tb3VzZSwgdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLngsdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLnggKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGVHTFBhcmFtZXRlcnMoKXtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMudGltZSA9IChEYXRlLm5vdygpIC0gdGhpcy5wYXJhbWV0ZXJzLnN0YXJ0VGltZSkvMTAwMDtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMucmVzb2x1dGlvbi54ID0gKCB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS53aWR0aCApO1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5yZXNvbHV0aW9uLnkgPSAoIHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCApO1xyXG5cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIF91c2U6IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcInVzZSBuYXRpdmUgR0xQcm9ncmFtXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtID0gbmV3IGNjLkdMUHJvZ3JhbSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmluaXRXaXRoU3RyaW5nKF9kZWZhdWx0X3ZlcnRfbm9fbXZwLCBfZ2xhc3NfZnJhZyk7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfUE9TSVRJT04sIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfUE9TSVRJT04pO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9DT0xPUiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1RFWF9DT09SRCwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9URVhfQ09PUkRTKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0ubGluaygpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnVwZGF0ZVVuaWZvcm1zKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlR0xQYXJhbWV0ZXJzKCk7XHJcblxyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbSA9IG5ldyBjYy5HTFByb2dyYW0oKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5pbml0V2l0aFZlcnRleFNoYWRlckJ5dGVBcnJheShfZGVmYXVsdF92ZXJ0LCBfZ2xhc3NfZnJhZyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1BPU0lUSU9OLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1BPU0lUSU9OKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfQ09MT1IsIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfQ09MT1IpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9URVhfQ09PUkQsIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfVEVYX0NPT1JEUyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmxpbmsoKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnVzZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVHTFBhcmFtZXRlcnMoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKCB0aGlzLl9wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoJ3RpbWUnKSwgdGhpcy5wYXJhbWV0ZXJzLnRpbWUgKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMmYoIHRoaXMuX3Byb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSgnbW91c2VfdG91Y2gnKSwgdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLngsdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLnkgKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMmYodGhpcy5fcHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKCdyZXNvbHV0aW9uJyksIHRoaXMucGFyYW1ldGVycy5yZXNvbHV0aW9uLngsdGhpcy5wYXJhbWV0ZXJzLnJlc29sdXRpb24ueSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5fcHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtVmVjMiggXCJyZXNvbHV0aW9uXCIsIHRoaXMucGFyYW1ldGVycy5yZXNvbHV0aW9uICk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoIFwidGltZVwiICwgdGhpcy5wYXJhbWV0ZXJzLnRpbWUgKTtcclxuICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1WZWMyKCBcIm1vdXNlX3RvdWNoXCIgLCB0aGlzLnBhcmFtZXRlcnMubW91c2UgKTtcclxuICAgICAgICB9ZWxzZXtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLl9yZXNvbHV0aW9uID0gdGhpcy5fcHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKCBcInJlc29sdXRpb25cIiApO1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lID0gdGhpcy5fcHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKCBcInRpbWVcIiApO1xyXG4gICAgICAgICAgICB0aGlzLl9tb3VzZSA9IHRoaXMuX3Byb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSggXCJtb3VzZV90b3VjaFwiICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgyZiggdGhpcy5fcmVzb2x1dGlvbiwgdGhpcy5wYXJhbWV0ZXJzLnJlc29sdXRpb24ueCx0aGlzLnBhcmFtZXRlcnMucmVzb2x1dGlvbi55ICk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKCB0aGlzLl90aW1lLCB0aGlzLnBhcmFtZXRlcnMudGltZSApO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgyZiggdGhpcy5fbW91c2UsIHRoaXMucGFyYW1ldGVycy5tb3VzZS54LHRoaXMucGFyYW1ldGVycy5tb3VzZS55ICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFByb2dyYW0oIHRoaXMubm9kZS5fc2dOb2RlICx0aGlzLl9wcm9ncmFtICk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzZXRQcm9ncmFtOmZ1bmN0aW9uIChub2RlLCBwcm9ncmFtKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgICAgICBub2RlLnNldEdMUHJvZ3JhbVN0YXRlKGdsUHJvZ3JhbV9zdGF0ZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0U2hhZGVyUHJvZ3JhbShwcm9ncmFtKTsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB0aGlzLnNldFByb2dyYW0oY2hpbGRyZW5baV0sIHByb2dyYW0pO1xyXG4gICAgfVxyXG5cclxufSk7XHJcbiJdfQ==