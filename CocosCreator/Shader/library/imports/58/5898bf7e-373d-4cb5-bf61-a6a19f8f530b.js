"use strict";
cc._RF.push(module, '5898b9+Nz1Mtb9hpqGfj1ML', 'Negative_Black_White');
// Script/Negative_Black_White.js

"use strict";

var _default_vert = require("../Shaders/ccShader_Default_Vert.js");

var _default_vert_no_mvp = require("../Shaders/ccShader_Default_Vert_noMVP.js");

var _negative_black_white_frag = require("../Shaders/ccShader_Negative_Black_White_Frag.js");

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

      this._program.initWithString(_default_vert_no_mvp, _negative_black_white_frag);

      this._program.link();

      this._program.updateUniforms();
    } else {
      this._program.initWithVertexShaderByteArray(_default_vert, _negative_black_white_frag);

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

cc._RF.pop();