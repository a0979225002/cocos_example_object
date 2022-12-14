"use strict";
cc._RF.push(module, '17327Iro65DFIL3lynXAorV', 'primitive');
// src/primitive/primitive.js

"use strict";

var Primitive = cc.Class({
    extends: cc.Component,

    editor: {
        executeInEditMode: true,
        requireComponent: cc.MeshRenderer
    },

    properties: {
        color: {
            default: cc.Color.WHITE,
            notify: function notify() {
                this.delayInit();
            }
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.init();
    },
    init: function init() {
        var data = this._createData();
        var mesh = Primitive.createMesh(data, this.color);

        var renderer = this.getComponent(cc.MeshRenderer);
        renderer.mesh = mesh;

        this.data = data;
        this._delatIniting = false;
    },
    delayInit: function delayInit() {
        if (CC_EDITOR) {
            this.init();
            return;
        }

        if (this._delatIniting) return;
        this._delatIniting = true;
        this.scheduleOnce(this.init);
    },
    _createData: function _createData() {
        return {};
    }
});

Primitive.createMesh = function (data, color) {
    var gfx = cc.gfx;
    var vfmt = new gfx.VertexFormat([{ name: gfx.ATTR_POSITION, type: gfx.ATTR_TYPE_FLOAT32, num: 3 }, { name: gfx.ATTR_NORMAL, type: gfx.ATTR_TYPE_FLOAT32, num: 3 }, { name: gfx.ATTR_COLOR, type: gfx.ATTR_TYPE_UINT8, num: 4, normalize: true }]);

    var colors = [];
    for (var i = 0; i < data.positions.length; i++) {
        colors.push(color);
    }

    var mesh = new cc.Mesh();
    mesh.init(vfmt, data.positions.length);
    mesh.setVertices(gfx.ATTR_POSITION, data.positions);
    mesh.setVertices(gfx.ATTR_NORMAL, data.normals);
    mesh.setVertices(gfx.ATTR_COLOR, colors);
    mesh.setIndices(data.indices);
    mesh.setBoundingBox(data.minPos, data.maxPos);

    return mesh;
};

module.exports = Primitive;

cc._RF.pop();