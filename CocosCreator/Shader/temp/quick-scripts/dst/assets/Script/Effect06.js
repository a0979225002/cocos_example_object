
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Effect06.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5e56b8BKmdKM7oODuKkTyWe', 'Effect06');
// Script/Effect06.js

"use strict";

var _default_vert = require("../Shaders/ccShader_Default_Vert.js");

var _default_vert_no_mvp = require("../Shaders/ccShader_Default_Vert_noMVP.js");

var _glass_frag = require("../Shaders/ccShader_Effect06_Frag.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFZmZlY3QwNi5qcyJdLCJuYW1lcyI6WyJfZGVmYXVsdF92ZXJ0IiwicmVxdWlyZSIsIl9kZWZhdWx0X3ZlcnRfbm9fbXZwIiwiX2dsYXNzX2ZyYWciLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImdsYXNzRmFjdG9yIiwib25Mb2FkIiwicGFyYW1ldGVycyIsInN0YXJ0VGltZSIsIkRhdGUiLCJub3ciLCJ0aW1lIiwibW91c2UiLCJ4IiwieSIsInJlc29sdXRpb24iLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfTU9WRSIsImV2ZW50IiwiZ2V0Q29udGVudFNpemUiLCJ3aWR0aCIsImdldExvY2F0aW9uWCIsImhlaWdodCIsImdldExvY2F0aW9uWSIsIlRPVUNIX01PVkUiLCJfdXNlIiwidXBkYXRlIiwiZHQiLCJfcHJvZ3JhbSIsInVzZSIsInVwZGF0ZUdMUGFyYW1ldGVycyIsInN5cyIsImlzTmF0aXZlIiwiZ2xQcm9ncmFtX3N0YXRlIiwiR0xQcm9ncmFtU3RhdGUiLCJnZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0iLCJzZXRVbmlmb3JtVmVjMiIsInNldFVuaWZvcm1GbG9hdCIsInNldFVuaWZvcm1Mb2NhdGlvbldpdGgyZiIsIl9yZXNvbHV0aW9uIiwic2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmIiwiX3RpbWUiLCJfbW91c2UiLCJsb2ciLCJHTFByb2dyYW0iLCJpbml0V2l0aFN0cmluZyIsImFkZEF0dHJpYnV0ZSIsIm1hY3JvIiwiQVRUUklCVVRFX05BTUVfUE9TSVRJT04iLCJWRVJURVhfQVRUUklCX1BPU0lUSU9OIiwiQVRUUklCVVRFX05BTUVfQ09MT1IiLCJWRVJURVhfQVRUUklCX0NPTE9SIiwiQVRUUklCVVRFX05BTUVfVEVYX0NPT1JEIiwiVkVSVEVYX0FUVFJJQl9URVhfQ09PUkRTIiwibGluayIsInVwZGF0ZVVuaWZvcm1zIiwiaW5pdFdpdGhWZXJ0ZXhTaGFkZXJCeXRlQXJyYXkiLCJnZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lIiwic2V0UHJvZ3JhbSIsIl9zZ05vZGUiLCJwcm9ncmFtIiwic2V0R0xQcm9ncmFtU3RhdGUiLCJzZXRTaGFkZXJQcm9ncmFtIiwiY2hpbGRyZW4iLCJpIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBR0MsT0FBTyxDQUFDLHFDQUFELENBQTNCOztBQUNBLElBQUlDLG9CQUFvQixHQUFHRCxPQUFPLENBQUMsMkNBQUQsQ0FBbEM7O0FBQ0EsSUFBSUUsV0FBVyxHQUFHRixPQUFPLENBQUMsc0NBQUQsQ0FBekI7O0FBRUFHLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxXQUFXLEVBQUM7QUFESixHQUhQO0FBT0xDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQixTQUFLQyxVQUFMLEdBQWdCO0FBQ1pDLE1BQUFBLFNBQVMsRUFBQ0MsSUFBSSxDQUFDQyxHQUFMLEVBREU7QUFFWkMsTUFBQUEsSUFBSSxFQUFDLEdBRk87QUFHWkMsTUFBQUEsS0FBSyxFQUFDO0FBQ0ZDLFFBQUFBLENBQUMsRUFBQyxHQURBO0FBRUZDLFFBQUFBLENBQUMsRUFBQztBQUZBLE9BSE07QUFPWkMsTUFBQUEsVUFBVSxFQUFDO0FBQ1BGLFFBQUFBLENBQUMsRUFBQyxHQURLO0FBRVBDLFFBQUFBLENBQUMsRUFBQztBQUZLO0FBUEMsS0FBaEI7QUFhQSxTQUFLRSxJQUFMLENBQVVDLEVBQVYsQ0FBYWhCLEVBQUUsQ0FBQ2lCLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsVUFBL0IsRUFBMkMsVUFBVUMsS0FBVixFQUFpQjtBQUN4RCxXQUFLZCxVQUFMLENBQWdCSyxLQUFoQixDQUFzQkMsQ0FBdEIsR0FBMEIsS0FBS0csSUFBTCxDQUFVTSxjQUFWLEdBQTJCQyxLQUEzQixHQUFtQ0YsS0FBSyxDQUFD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R0FBR25DLEVBQUUsQ0FBQ29DLGNBQUgsQ0FBa0JDLHdCQUFsQixDQUEyQ3lCLE9BQTNDLENBQXRCO0FBQ0EvQyxNQUFBQSxJQUFJLENBQUNnRCxpQkFBTCxDQUF1QjVCLGVBQXZCO0FBQ0gsS0FIRCxNQUdLO0FBQ0RwQixNQUFBQSxJQUFJLENBQUNpRCxnQkFBTCxDQUFzQkYsT0FBdEI7QUFDSDs7QUFHRCxRQUFJRyxRQUFRLEdBQUdsRCxJQUFJLENBQUNrRCxRQUFwQjtBQUNBLFFBQUksQ0FBQ0EsUUFBTCxFQUNJOztBQUVKLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBUSxDQUFDRSxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QztBQUNJLFdBQUtOLFVBQUwsQ0FBZ0JLLFFBQVEsQ0FBQ0MsQ0FBRCxDQUF4QixFQUE2QkosT0FBN0I7QUFESjtBQUVIO0FBNUlJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfZGVmYXVsdF92ZXJ0ID0gcmVxdWlyZShcIi4uL1NoYWRlcnMvY2NTaGFkZXJfRGVmYXVsdF9WZXJ0LmpzXCIpO1xyXG52YXIgX2RlZmF1bHRfdmVydF9ub19tdnAgPSByZXF1aXJlKFwiLi4vU2hhZGVycy9jY1NoYWRlcl9EZWZhdWx0X1ZlcnRfbm9NVlAuanNcIik7XHJcbnZhciBfZ2xhc3NfZnJhZyA9IHJlcXVpcmUoXCIuLi9TaGFkZXJzL2NjU2hhZGVyX0VmZmVjdDA2X0ZyYWcuanNcIik7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGdsYXNzRmFjdG9yOjEuMCxcclxuICAgIH0sIFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycz17XHJcbiAgICAgICAgICAgIHN0YXJ0VGltZTpEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICB0aW1lOjAuMCxcclxuICAgICAgICAgICAgbW91c2U6e1xyXG4gICAgICAgICAgICAgICAgeDowLjAsXHJcbiAgICAgICAgICAgICAgICB5OjAuMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVzb2x1dGlvbjp7XHJcbiAgICAgICAgICAgICAgICB4OjAuMCxcclxuICAgICAgICAgICAgICAgIHk6MC4wLFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX01PVkUsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlcnMubW91c2UueCA9IHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gZXZlbnQuZ2V0TG9jYXRpb25YKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1ldGVycy5tb3VzZS55ID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gZXZlbnQuZ2V0TG9jYXRpb25ZKCk7IFxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLnggPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS53aWR0aCAvIGV2ZW50LmdldExvY2F0aW9uWCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlcnMubW91c2UueSA9IHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIGV2ZW50LmdldExvY2F0aW9uWSgpOyBcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdXNlKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlOmZ1bmN0aW9uKGR0KXtcclxuICAgICAgICBpZih0aGlzLmdsYXNzRmFjdG9yPj00MCl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2xhc3NGYWN0b3I9MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nbGFzc0ZhY3Rvcis9ZHQqMztcclxuXHJcbiAgICAgICAgaWYodGhpcy5fcHJvZ3JhbSl7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnVzZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdMUGFyYW1ldGVycygpO1xyXG4gICAgICAgICAgICBpZihjYy5zeXMuaXNOYXRpdmUpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGdsUHJvZ3JhbV9zdGF0ZSA9IGNjLkdMUHJvZ3JhbVN0YXRlLmdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbSh0aGlzLl9wcm9ncmFtKTtcclxuICAgICAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtVmVjMiggXCJyZXNvbHV0aW9uXCIsIHRoaXMucGFyYW1ldGVycy5yZXNvbHV0aW9uICk7XHJcbiAgICAgICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybUZsb2F0KCBcInRpbWVcIiwgdGhpcy5wYXJhbWV0ZXJzLnRpbWUgKTsgICAgXHJcbiAgICAgICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybVZlYzIoIFwibW91c2VcIiAsIHRoaXMucGFyYW1ldGVycy5tb3VzZSApO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDJmKCB0aGlzLl9yZXNvbHV0aW9uLCB0aGlzLnBhcmFtZXRlcnMucmVzb2x1dGlvbi54LHRoaXMucGFyYW1ldGVycy5yZXNvbHV0aW9uLnkgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKCB0aGlzLl90aW1lLCB0aGlzLnBhcmFtZXRlcnMudGltZSApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMmYoIHRoaXMuX21vdXNlLCB0aGlzLnBhcmFtZXRlcnMubW91c2UueCx0aGlzLnBhcmFtZXRlcnMubW91c2UueCApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZUdMUGFyYW1ldGVycygpe1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy50aW1lID0gKERhdGUubm93KCkgLSB0aGlzLnBhcmFtZXRlcnMuc3RhcnRUaW1lKS8xMDAwO1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5yZXNvbHV0aW9uLnggPSAoIHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpLndpZHRoICk7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnJlc29sdXRpb24ueSA9ICggdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0ICk7XHJcblxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgX3VzZTogZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgY2MubG9nKFwidXNlIG5hdGl2ZSBHTFByb2dyYW1cIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0gPSBuZXcgY2MuR0xQcm9ncmFtKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uaW5pdFdpdGhTdHJpbmcoX2RlZmF1bHRfdmVydF9ub19tdnAsIF9nbGFzc19mcmFnKTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9QT1NJVElPTiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9QT1NJVElPTik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX0NPTE9SLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX0NPTE9SKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfVEVYX0NPT1JELCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1RFWF9DT09SRFMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5saW5rKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0udXBkYXRlVW5pZm9ybXMoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVHTFBhcmFtZXRlcnMoKTtcclxuXHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtID0gbmV3IGNjLkdMUHJvZ3JhbSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5KF9kZWZhdWx0X3ZlcnQsIF9nbGFzc19mcmFnKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfUE9TSVRJT04sIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfUE9TSVRJT04pO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9DT0xPUiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1RFWF9DT09SRCwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9URVhfQ09PUkRTKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0ubGluaygpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnVwZGF0ZVVuaWZvcm1zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0udXNlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdMUGFyYW1ldGVycygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMWYoIHRoaXMuX3Byb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSgndGltZScpLCB0aGlzLnBhcmFtZXRlcnMudGltZSApO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgyZiggdGhpcy5fcHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKCdtb3VzZScpLCB0aGlzLnBhcmFtZXRlcnMubW91c2UueCx0aGlzLnBhcmFtZXRlcnMubW91c2UueSApO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgyZih0aGlzLl9wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoJ3Jlc29sdXRpb24nKSwgdGhpcy5wYXJhbWV0ZXJzLnJlc29sdXRpb24ueCx0aGlzLnBhcmFtZXRlcnMucmVzb2x1dGlvbi55ICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdmFyIGdsUHJvZ3JhbV9zdGF0ZSA9IGNjLkdMUHJvZ3JhbVN0YXRlLmdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbSh0aGlzLl9wcm9ncmFtKTtcclxuICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1WZWMyKCBcInJlc29sdXRpb25cIiwgdGhpcy5wYXJhbWV0ZXJzLnJlc29sdXRpb24gKTtcclxuICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1GbG9hdCggXCJ0aW1lXCIgLCB0aGlzLnBhcmFtZXRlcnMudGltZSApO1xyXG4gICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybVZlYzIoIFwibW91c2VcIiAsIHRoaXMucGFyYW1ldGVycy5tb3VzZSApO1xyXG4gICAgICAgIH1lbHNle1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdXRpb24gPSB0aGlzLl9wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoIFwicmVzb2x1dGlvblwiICk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWUgPSB0aGlzLl9wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoIFwidGltZVwiICk7XHJcbiAgICAgICAgICAgIHRoaXMuX21vdXNlID0gdGhpcy5fcHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKCBcIm1vdXNlXCIgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDJmKCB0aGlzLl9yZXNvbHV0aW9uLCB0aGlzLnBhcmFtZXRlcnMucmVzb2x1dGlvbi54LHRoaXMucGFyYW1ldGVycy5yZXNvbHV0aW9uLnkgKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMWYoIHRoaXMuX3RpbWUsIHRoaXMucGFyYW1ldGVycy50aW1lICk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDJmKCB0aGlzLl9tb3VzZSwgdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLngsdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLnkgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0UHJvZ3JhbSggdGhpcy5ub2RlLl9zZ05vZGUgLHRoaXMuX3Byb2dyYW0gKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNldFByb2dyYW06ZnVuY3Rpb24gKG5vZGUsIHByb2dyYW0pIHtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0R0xQcm9ncmFtU3RhdGUoZ2xQcm9ncmFtX3N0YXRlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbm9kZS5zZXRTaGFkZXJQcm9ncmFtKHByb2dyYW0pOyAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIGlmICghY2hpbGRyZW4pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZ3JhbShjaGlsZHJlbltpXSwgcHJvZ3JhbSk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19