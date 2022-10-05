
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/EffectForShaderToy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec0bddz0EhL45aBJr4t9QLx', 'EffectForShaderToy');
// Script/EffectForShaderToy.js

"use strict";

var _default_vert = require("../Shaders/ccShader_Default_Vert.js");

var _default_vert_no_mvp = require("../Shaders/ccShader_Default_Vert_noMVP.js");
/*

Shader Inputs
uniform vec3      iResolution;           // viewport resolution (in pixels)
uniform float     iGlobalTime;           // shader playback time (in seconds)
uniform float     iTimeDelta;            // render time (in seconds)
uniform int       iFrame;                // shader playback frame
uniform float     iChannelTime[4];       // channel playback time (in seconds)
uniform vec3      iChannelResolution[4]; // channel resolution (in pixels)
uniform vec4      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click
uniform samplerXX iChannel0..3;          // input channel. XX = 2D/Cube
uniform vec4      iDate;                 // (year, month, day, time in seconds)
uniform float     iSampleRate;           // sound sample rate (i.e., 44100)

*/


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
    var now = new Date();
    this.parameters = {
      startTime: Date.now(),
      time: 0.0,
      mouse: {
        x: 0.0,
        y: 0.0,
        z: 0.0,
        w: 0.0
      },
      resolution: {
        x: 0.0,
        y: 0.0,
        z: 1.0
      },
      date: {
        x: now.getYear(),
        //year
        y: now.getMonth(),
        //month
        z: now.getDate(),
        //day
        w: now.getTime() + now.getMilliseconds() / 1000 //time seconds

      },
      isMouseDown: false
    };
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      this.parameters.isMouseDown = true;
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_UP, function (event) {
      this.parameters.isMouseDown = false;
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, function (event) {
      this.parameters.isMouseDown = false;
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
      this.parameters.isMouseDown = true;
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
      this.parameters.isMouseDown = false;
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
      this.parameters.isMouseDown = false;
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_MOVE, function (event) {
      if (this.parameters.isMouseDown) {
        this.parameters.mouse.x = event.getLocationX();
        this.parameters.mouse.y = event.getLocationY();
      }
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      if (this.parameters.isMouseDown) {
        this.parameters.mouse.x = event.getLocationX();
        this.parameters.mouse.y = event.getLocationY();
      }
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
        glProgram_state.setUniformVec3("iResolution", this.parameters.resolution);
        glProgram_state.setUniformFloat("iGlobalTime", this.parameters.time);
        glProgram_state.setUniformVec4("iMouse", this.parameters.mouse);
        glProgram_state.setUniformVec4("iDate", this.parameters.date);
      } else {
        this._program.setUniformLocationWith3f(this._resolution, this.parameters.resolution.x, this.parameters.resolution.y, this.parameters.resolution.z);

        this._program.setUniformLocationWith1f(this._time, this.parameters.time);

        this._program.setUniformLocationWith4f(this._mouse, this.parameters.mouse.x, this.parameters.mouse.y, this.parameters.mouse.z, this.parameters.mouse.w);

        this._program.setUniformLocationWith4f(this._date, this.parameters.date.x, this.parameters.date.y, this.parameters.date.z, this.parameters.date.w);
      }
    }
  },
  updateGLParameters: function updateGLParameters() {
    this.parameters.time = (Date.now() - this.parameters.startTime) / 1000;
    this.parameters.resolution.x = this.node.getContentSize().width;
    this.parameters.resolution.y = this.node.getContentSize().height;
    var now = new Date();
    this.parameters.date = {
      x: now.getYear(),
      //year
      y: now.getMonth(),
      //month
      z: now.getDate(),
      //day
      w: now.getTime() + now.getMilliseconds() / 1000 //time seconds

    };
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

      this._program.setUniformLocationWith3f(this._program.getUniformLocationForName('iResolution'), this.parameters.resolution.x, this.parameters.resolution.y, this.parameters.resolution.z);

      this._program.setUniformLocationWith1f(this._program.getUniformLocationForName('iGlobalTime'), this.parameters.time);

      this._program.setUniformLocationWith4f(this._program.getUniformLocationForName('iMouse'), this.parameters.mouse.x, this.parameters.mouse.y, this.parameters.mouse.z, this.parameters.mouse.w);

      this._program.setUniformLocationWith4f(this._program.getUniformLocationForName('iDate'), this.parameters.date.x, this.parameters.date.y, this.parameters.date.z, this.parameters.date.w);
    }

    if (cc.sys.isNative) {
      var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this._program);
      glProgram_state.setUniformVec3("iResolution", this.parameters.resolution);
      glProgram_state.setUniformFloat("iGlobalTime", this.parameters.time);
      glProgram_state.setUniformVec4("iMouse", this.parameters.mouse);
    } else {
      this._resolution = this._program.getUniformLocationForName("iResolution");
      this._time = this._program.getUniformLocationForName("iGlobalTime");
      this._mouse = this._program.getUniformLocationForName("iMouse");

      this._program.setUniformLocationWith3f(this._resolution, this.parameters.resolution.x, this.parameters.resolution.y, this.parameters.resolution.z);

      this._program.setUniformLocationWith1f(this._time, this.parameters.time);

      this._program.setUniformLocationWith4f(this._mouse, this.parameters.mouse.x, this.parameters.mouse.y, this.parameters.mouse.z, this.parameters.mouse.w);

      this._program.setUniformLocationWith4f(this._date, this.parameters.date.x, this.parameters.date.y, this.parameters.date.z, this.parameters.date.w);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFZmZlY3RGb3JTaGFkZXJUb3kuanMiXSwibmFtZXMiOlsiX2RlZmF1bHRfdmVydCIsInJlcXVpcmUiLCJfZGVmYXVsdF92ZXJ0X25vX212cCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZ2xhc3NGYWN0b3IiLCJmbGFnU2hhZGVyIiwiZnJhZ19nbHNsIiwidmlzaWJsZSIsIm9uTG9hZCIsInNlbGYiLCJub3ciLCJEYXRlIiwicGFyYW1ldGVycyIsInN0YXJ0VGltZSIsInRpbWUiLCJtb3VzZSIsIngiLCJ5IiwieiIsInciLCJyZXNvbHV0aW9uIiwiZGF0ZSIsImdldFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRUaW1lIiwiZ2V0TWlsbGlzZWNvbmRzIiwiaXNNb3VzZURvd24iLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsImV2ZW50IiwiTU9VU0VfVVAiLCJNT1VTRV9MRUFWRSIsIlRPVUNIX1NUQVJUIiwiVE9VQ0hfRU5EIiwiVE9VQ0hfQ0FOQ0VMIiwiTU9VU0VfTU9WRSIsImdldExvY2F0aW9uWCIsImdldExvY2F0aW9uWSIsIlRPVUNIX01PVkUiLCJsb2FkZXIiLCJsb2FkUmVzIiwiZXJyIiwidHh0IiwibG9nIiwiX3VzZSIsInVwZGF0ZSIsImR0IiwiX3Byb2dyYW0iLCJ1c2UiLCJ1cGRhdGVHTFBhcmFtZXRlcnMiLCJzeXMiLCJpc05hdGl2ZSIsImdsUHJvZ3JhbV9zdGF0ZSIsIkdMUHJvZ3JhbVN0YXRlIiwiZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtIiwic2V0VW5pZm9ybVZlYzMiLCJzZXRVbmlmb3JtRmxvYXQiLCJzZXRVbmlmb3JtVmVjNCIsInNldFVuaWZvcm1Mb2NhdGlvbldpdGgzZiIsIl9yZXNvbHV0aW9uIiwic2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmIiwiX3RpbWUiLCJzZXRVbmlmb3JtTG9jYXRpb25XaXRoNGYiLCJfbW91c2UiLCJfZGF0ZSIsImdldENvbnRlbnRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJHTFByb2dyYW0iLCJpbml0V2l0aFN0cmluZyIsImFkZEF0dHJpYnV0ZSIsIm1hY3JvIiwiQVRUUklCVVRFX05BTUVfUE9TSVRJT04iLCJWRVJURVhfQVRUUklCX1BPU0lUSU9OIiwiQVRUUklCVVRFX05BTUVfQ09MT1IiLCJWRVJURVhfQVRUUklCX0NPTE9SIiwiQVRUUklCVVRFX05BTUVfVEVYX0NPT1JEIiwiVkVSVEVYX0FUVFJJQl9URVhfQ09PUkRTIiwibGluayIsInVwZGF0ZVVuaWZvcm1zIiwiaW5pdFdpdGhWZXJ0ZXhTaGFkZXJCeXRlQXJyYXkiLCJnZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lIiwic2V0UHJvZ3JhbSIsIl9zZ05vZGUiLCJwcm9ncmFtIiwic2V0R0xQcm9ncmFtU3RhdGUiLCJzZXRTaGFkZXJQcm9ncmFtIiwiY2hpbGRyZW4iLCJpIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBR0MsT0FBTyxDQUFDLHFDQUFELENBQTNCOztBQUNBLElBQUlDLG9CQUFvQixHQUFHRCxPQUFPLENBQUMsMkNBQUQsQ0FBbEM7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkFFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxXQUFXLEVBQUMsR0FESjtBQUVSQyxJQUFBQSxVQUFVLEVBQUMsRUFGSDtBQUdSQyxJQUFBQSxTQUFTLEVBQUM7QUFDTixpQkFBUSxrQkFERjtBQUVOQyxNQUFBQSxPQUFPLEVBQUM7QUFGRjtBQUhGLEdBSFA7QUFZTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsUUFBSUMsR0FBRyxHQUFHLElBQUlDLElBQUosRUFBVjtBQUNBLFNBQUtDLFVBQUwsR0FBZ0I7QUFDWkMsTUFBQUEs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dEI7QUFDSDs7QUFHRCxRQUFJRyxRQUFRLEdBQUcvRCxJQUFJLENBQUMrRCxRQUFwQjtBQUNBLFFBQUksQ0FBQ0EsUUFBTCxFQUNJOztBQUVKLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBUSxDQUFDRSxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QztBQUNJLFdBQUtOLFVBQUwsQ0FBZ0JLLFFBQVEsQ0FBQ0MsQ0FBRCxDQUF4QixFQUE2QkosT0FBN0I7QUFESjtBQUVIO0FBaE5JLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfZGVmYXVsdF92ZXJ0ID0gcmVxdWlyZShcIi4uL1NoYWRlcnMvY2NTaGFkZXJfRGVmYXVsdF9WZXJ0LmpzXCIpO1xyXG52YXIgX2RlZmF1bHRfdmVydF9ub19tdnAgPSByZXF1aXJlKFwiLi4vU2hhZGVycy9jY1NoYWRlcl9EZWZhdWx0X1ZlcnRfbm9NVlAuanNcIik7XHJcblxyXG5cclxuXHJcbi8qXHJcblxyXG5TaGFkZXIgSW5wdXRzXHJcbnVuaWZvcm0gdmVjMyAgICAgIGlSZXNvbHV0aW9uOyAgICAgICAgICAgLy8gdmlld3BvcnQgcmVzb2x1dGlvbiAoaW4gcGl4ZWxzKVxyXG51bmlmb3JtIGZsb2F0ICAgICBpR2xvYmFsVGltZTsgICAgICAgICAgIC8vIHNoYWRlciBwbGF5YmFjayB0aW1lIChpbiBzZWNvbmRzKVxyXG51bmlmb3JtIGZsb2F0ICAgICBpVGltZURlbHRhOyAgICAgICAgICAgIC8vIHJlbmRlciB0aW1lIChpbiBzZWNvbmRzKVxyXG51bmlmb3JtIGludCAgICAgICBpRnJhbWU7ICAgICAgICAgICAgICAgIC8vIHNoYWRlciBwbGF5YmFjayBmcmFtZVxyXG51bmlmb3JtIGZsb2F0ICAgICBpQ2hhbm5lbFRpbWVbNF07ICAgICAgIC8vIGNoYW5uZWwgcGxheWJhY2sgdGltZSAoaW4gc2Vjb25kcylcclxudW5pZm9ybSB2ZWMzICAgICAgaUNoYW5uZWxSZXNvbHV0aW9uWzRdOyAvLyBjaGFubmVsIHJlc29sdXRpb24gKGluIHBpeGVscylcclxudW5pZm9ybSB2ZWM0ICAgICAgaU1vdXNlOyAgICAgICAgICAgICAgICAvLyBtb3VzZSBwaXhlbCBjb29yZHMuIHh5OiBjdXJyZW50IChpZiBNTEIgZG93biksIHp3OiBjbGlja1xyXG51bmlmb3JtIHNhbXBsZXJYWCBpQ2hhbm5lbDAuLjM7ICAgICAgICAgIC8vIGlucHV0IGNoYW5uZWwuIFhYID0gMkQvQ3ViZVxyXG51bmlmb3JtIHZlYzQgICAgICBpRGF0ZTsgICAgICAgICAgICAgICAgIC8vICh5ZWFyLCBtb250aCwgZGF5LCB0aW1lIGluIHNlY29uZHMpXHJcbnVuaWZvcm0gZmxvYXQgICAgIGlTYW1wbGVSYXRlOyAgICAgICAgICAgLy8gc291bmQgc2FtcGxlIHJhdGUgKGkuZS4sIDQ0MTAwKVxyXG5cclxuKi9cclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ2xhc3NGYWN0b3I6MS4wLFxyXG4gICAgICAgIGZsYWdTaGFkZXI6XCJcIixcclxuICAgICAgICBmcmFnX2dsc2w6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OlwiRWZmZWN0MTAuZnMuZ2xzbFwiLFxyXG4gICAgICAgICAgICB2aXNpYmxlOmZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgIH0sIFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnM9e1xyXG4gICAgICAgICAgICBzdGFydFRpbWU6RGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgdGltZTowLjAsXHJcbiAgICAgICAgICAgIG1vdXNlOntcclxuICAgICAgICAgICAgICAgIHg6MC4wLFxyXG4gICAgICAgICAgICAgICAgeTowLjAsXHJcbiAgICAgICAgICAgICAgICB6OjAuMCxcclxuICAgICAgICAgICAgICAgIHc6MC4wLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXNvbHV0aW9uOntcclxuICAgICAgICAgICAgICAgIHg6MC4wLFxyXG4gICAgICAgICAgICAgICAgeTowLjAsXHJcbiAgICAgICAgICAgICAgICB6OjEuMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0ZTp7XHJcbiAgICAgICAgICAgICAgICB4Om5vdy5nZXRZZWFyKCksLy95ZWFyXHJcbiAgICAgICAgICAgICAgICB5Om5vdy5nZXRNb250aCgpLC8vbW9udGhcclxuICAgICAgICAgICAgICAgIHo6bm93LmdldERhdGUoKSwvL2RheVxyXG4gICAgICAgICAgICAgICAgdzpub3cuZ2V0VGltZSgpK25vdy5nZXRNaWxsaXNlY29uZHMoKS8xMDAwLC8vdGltZSBzZWNvbmRzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGlzTW91c2VEb3duOmZhbHNlLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLmlzTW91c2VEb3duPXRydWU7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfVVAsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlcnMuaXNNb3VzZURvd249ZmFsc2U7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1ldGVycy5pc01vdXNlRG93bj1mYWxzZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1ldGVycy5pc01vdXNlRG93bj10cnVlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1ldGVycy5pc01vdXNlRG93bj1mYWxzZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1ldGVycy5pc01vdXNlRG93bj1mYWxzZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX01PVkUsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBpZih0aGlzLnBhcmFtZXRlcnMuaXNNb3VzZURvd24pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLnggPSBldmVudC5nZXRMb2NhdGlvblgoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1ldGVycy5tb3VzZS55ID0gZXZlbnQuZ2V0TG9jYXRpb25ZKCk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBpZih0aGlzLnBhcmFtZXRlcnMuaXNNb3VzZURvd24pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLnggPSBldmVudC5nZXRMb2NhdGlvblgoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1ldGVycy5tb3VzZS55ID0gZXZlbnQuZ2V0TG9jYXRpb25ZKCk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHNlbGYuZmxhZ1NoYWRlcixmdW5jdGlvbihlcnIsdHh0KXtcclxuICAgICAgICAgICAgaWYoZXJyKXtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2VsZi5mcmFnX2dsc2wgPSB0eHQ7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl91c2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sXHJcbiAgICB1cGRhdGU6ZnVuY3Rpb24oZHQpe1xyXG4gICAgICAgIGlmKHRoaXMuZ2xhc3NGYWN0b3I+PTQwKXtcclxuICAgICAgICAgICAgdGhpcy5nbGFzc0ZhY3Rvcj0wO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdsYXNzRmFjdG9yKz1kdCozO1xyXG5cclxuICAgICAgICBpZih0aGlzLl9wcm9ncmFtKXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0udXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlR0xQYXJhbWV0ZXJzKCk7XHJcbiAgICAgICAgICAgIGlmKGNjLnN5cy5pc05hdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMuX3Byb2dyYW0pO1xyXG4gICAgICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1WZWMzKCBcImlSZXNvbHV0aW9uXCIsIHRoaXMucGFyYW1ldGVycy5yZXNvbHV0aW9uICk7XHJcbiAgICAgICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybUZsb2F0KCBcImlHbG9iYWxUaW1lXCIsIHRoaXMucGFyYW1ldGVycy50aW1lICk7ICAgIFxyXG4gICAgICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1WZWM0KCBcImlNb3VzZVwiICwgdGhpcy5wYXJhbWV0ZXJzLm1vdXNlICk7XHJcbiAgICAgICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybVZlYzQoIFwiaURhdGVcIiAsIHRoaXMucGFyYW1ldGVycy5kYXRlICk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoM2YoIHRoaXMuX3Jlc29sdXRpb24sIHRoaXMucGFyYW1ldGVycy5yZXNvbHV0aW9uLngsdGhpcy5wYXJhbWV0ZXJzLnJlc29sdXRpb24ueSx0aGlzLnBhcmFtZXRlcnMucmVzb2x1dGlvbi56ICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZiggdGhpcy5fdGltZSwgdGhpcy5wYXJhbWV0ZXJzLnRpbWUgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDRmKCB0aGlzLl9tb3VzZSwgdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLngsdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLnksdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLnosdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLncgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDRmKCB0aGlzLl9kYXRlLCB0aGlzLnBhcmFtZXRlcnMuZGF0ZS54LHRoaXMucGFyYW1ldGVycy5kYXRlLnksdGhpcy5wYXJhbWV0ZXJzLmRhdGUueix0aGlzLnBhcmFtZXRlcnMuZGF0ZS53ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlR0xQYXJhbWV0ZXJzOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnRpbWUgPSAoRGF0ZS5ub3coKSAtIHRoaXMucGFyYW1ldGVycy5zdGFydFRpbWUpLzEwMDA7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnJlc29sdXRpb24ueCA9ICggdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGggKTtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMucmVzb2x1dGlvbi55ID0gKCB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgKTtcclxuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLmRhdGU9e1xyXG4gICAgICAgICAgICAgICAgeDpub3cuZ2V0WWVhcigpLC8veWVhclxyXG4gICAgICAgICAgICAgICAgeTpub3cuZ2V0TW9udGgoKSwvL21vbnRoXHJcbiAgICAgICAgICAgICAgICB6Om5vdy5nZXREYXRlKCksLy9kYXlcclxuICAgICAgICAgICAgICAgIHc6bm93LmdldFRpbWUoKStub3cuZ2V0TWlsbGlzZWNvbmRzKCkvMTAwMCwvL3RpbWUgc2Vjb25kc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICBfdXNlOiBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJ1c2UgbmF0aXZlIEdMUHJvZ3JhbVwiKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbSA9IG5ldyBjYy5HTFByb2dyYW0oKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5pbml0V2l0aFN0cmluZyhfZGVmYXVsdF92ZXJ0X25vX212cCwgdGhpcy5mcmFnX2dsc2wgKTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9QT1NJVElPTiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9QT1NJVElPTik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX0NPTE9SLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX0NPTE9SKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfVEVYX0NPT1JELCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1RFWF9DT09SRFMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5saW5rKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0udXBkYXRlVW5pZm9ybXMoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVHTFBhcmFtZXRlcnMoKTtcclxuXHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtID0gbmV3IGNjLkdMUHJvZ3JhbSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5KF9kZWZhdWx0X3ZlcnQsIHRoaXMuZnJhZ19nbHNsICk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1BPU0lUSU9OLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1BPU0lUSU9OKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfQ09MT1IsIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfQ09MT1IpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9URVhfQ09PUkQsIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfVEVYX0NPT1JEUyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLmxpbmsoKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnVzZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVHTFBhcmFtZXRlcnMoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDNmKHRoaXMuX3Byb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSgnaVJlc29sdXRpb24nKSwgdGhpcy5wYXJhbWV0ZXJzLnJlc29sdXRpb24ueCx0aGlzLnBhcmFtZXRlcnMucmVzb2x1dGlvbi55LHRoaXMucGFyYW1ldGVycy5yZXNvbHV0aW9uLnogKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMWYoIHRoaXMuX3Byb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSgnaUdsb2JhbFRpbWUnKSwgdGhpcy5wYXJhbWV0ZXJzLnRpbWUgKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoNGYoIHRoaXMuX3Byb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSgnaU1vdXNlJyksIHRoaXMucGFyYW1ldGVycy5tb3VzZS54LHRoaXMucGFyYW1ldGVycy5tb3VzZS55ICwgdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLnosdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLncpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGg0ZiggdGhpcy5fcHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKCdpRGF0ZScpLCB0aGlzLnBhcmFtZXRlcnMuZGF0ZS54LHRoaXMucGFyYW1ldGVycy5kYXRlLnksdGhpcy5wYXJhbWV0ZXJzLmRhdGUueix0aGlzLnBhcmFtZXRlcnMuZGF0ZS53ICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdmFyIGdsUHJvZ3JhbV9zdGF0ZSA9IGNjLkdMUHJvZ3JhbVN0YXRlLmdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbSh0aGlzLl9wcm9ncmFtKTtcclxuICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1WZWMzKCBcImlSZXNvbHV0aW9uXCIsIHRoaXMucGFyYW1ldGVycy5yZXNvbHV0aW9uICk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoIFwiaUdsb2JhbFRpbWVcIiAsIHRoaXMucGFyYW1ldGVycy50aW1lICk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtVmVjNCggXCJpTW91c2VcIiAsIHRoaXMucGFyYW1ldGVycy5tb3VzZSApO1xyXG4gICAgICAgIH1lbHNle1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdXRpb24gPSB0aGlzLl9wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoIFwiaVJlc29sdXRpb25cIiApO1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lID0gdGhpcy5fcHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKCBcImlHbG9iYWxUaW1lXCIgKTtcclxuICAgICAgICAgICAgdGhpcy5fbW91c2UgPSB0aGlzLl9wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoIFwiaU1vdXNlXCIgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDNmKCB0aGlzLl9yZXNvbHV0aW9uLCB0aGlzLnBhcmFtZXRlcnMucmVzb2x1dGlvbi54LHRoaXMucGFyYW1ldGVycy5yZXNvbHV0aW9uLnksdGhpcy5wYXJhbWV0ZXJzLnJlc29sdXRpb24ueiApO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZiggdGhpcy5fdGltZSwgdGhpcy5wYXJhbWV0ZXJzLnRpbWUgKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoNGYoIHRoaXMuX21vdXNlLCB0aGlzLnBhcmFtZXRlcnMubW91c2UueCx0aGlzLnBhcmFtZXRlcnMubW91c2UueSAsdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLnosdGhpcy5wYXJhbWV0ZXJzLm1vdXNlLncpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGg0ZiggdGhpcy5fZGF0ZSwgdGhpcy5wYXJhbWV0ZXJzLmRhdGUueCx0aGlzLnBhcmFtZXRlcnMuZGF0ZS55LHRoaXMucGFyYW1ldGVycy5kYXRlLnosdGhpcy5wYXJhbWV0ZXJzLmRhdGUudyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRQcm9ncmFtKCB0aGlzLm5vZGUuX3NnTm9kZSAsdGhpcy5fcHJvZ3JhbSApO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2V0UHJvZ3JhbTpmdW5jdGlvbiAobm9kZSwgcHJvZ3JhbSkge1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdmFyIGdsUHJvZ3JhbV9zdGF0ZSA9IGNjLkdMUHJvZ3JhbVN0YXRlLmdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRHTFByb2dyYW1TdGF0ZShnbFByb2dyYW1fc3RhdGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBub2RlLnNldFNoYWRlclByb2dyYW0ocHJvZ3JhbSk7ICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgaWYgKCFjaGlsZHJlbilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmFtKGNoaWxkcmVuW2ldLCBwcm9ncmFtKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG4iXX0=