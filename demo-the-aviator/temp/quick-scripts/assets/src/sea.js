(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/sea.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '786dftT62NLJKOjBpXgOP5B', 'sea', __filename);
// src/sea.js

'use strict';

function calcFaceNormals(positions, indices, normals) {
    normals = normals || new Array(positions.length);
    for (var i = 0, l = normals.length; i < l; i++) {
        normals[i] = 0;
    }

    var vA = void 0,
        vB = void 0,
        vC = void 0;
    var pA = cc.v3(),
        pB = cc.v3(),
        pC = cc.v3();
    var cb = cc.v3(),
        ab = cc.v3();
    var vec3 = cc.vmath.vec3;

    function fromArray(out, a, offset) {
        out.x = a[offset];
        out.y = a[offset + 1];
        out.z = a[offset + 2];
    }

    for (var _i = 0, il = indices.length; _i < il; _i += 3) {

        vA = indices[_i + 0] * 3;
        vB = indices[_i + 1] * 3;
        vC = indices[_i + 2] * 3;

        fromArray(pA, positions, vA);
        fromArray(pB, positions, vB);
        fromArray(pC, positions, vC);

        vec3.sub(cb, pC, pB);
        vec3.sub(ab, pA, pB);
        vec3.cross(cb, cb, ab);

        normals[vA] += cb.x;
        normals[vA + 1] += cb.y;
        normals[vA + 2] += cb.z;

        normals[vB] += cb.x;
        normals[vB + 1] += cb.y;
        normals[vB + 2] += cb.z;

        normals[vC] += cb.x;
        normals[vC + 1] += cb.y;
        normals[vC + 2] += cb.z;
    }

    var tempNormal = cc.v3();
    for (var _i2 = 0, _l = normals.length; _i2 < _l; _i2 += 3) {
        tempNormal.x = normals[_i2];
        tempNormal.y = normals[_i2 + 1];
        tempNormal.z = normals[_i2 + 2];

        tempNormal.normalizeSelf();

        normals[_i2] = tempNormal.x;
        normals[_i2 + 1] = tempNormal.y;
        normals[_i2 + 2] = tempNormal.z;
    }

    return normals;
}

function calcVertexNormals(positions, indices, normals) {
    normals = normals || new Array(positions.length);
    for (var i = 0, l = normals.length; i < l; i++) {
        normals[i] = 0;
    }

    var vA = void 0,
        vB = void 0,
        vC = void 0;
    var pA = cc.v3(),
        pB = cc.v3(),
        pC = cc.v3();
    var cb = cc.v3(),
        ab = cc.v3();
    var vec3 = cc.vmath.vec3;

    function fromArray(out, a, offset) {
        out.x = a[offset];
        out.y = a[offset + 1];
        out.z = a[offset + 2];
    }

    for (var _i3 = 0, il = indices.length; _i3 < il; _i3 += 3) {

        vA = indices[_i3 + 0] * 3;
        vB = indices[_i3 + 1] * 3;
        vC = indices[_i3 + 2] * 3;

        fromArray(pA, positions, vA);
        fromArray(pB, positions, vB);
        fromArray(pC, positions, vC);

        vec3.sub(cb, pC, pB);
        vec3.sub(ab, pA, pB);
        vec3.cross(cb, cb, ab);

        normals[vA] += cb.x;
        normals[vA + 1] += cb.y;
        normals[vA + 2] += cb.z;

        normals[vB] += cb.x;
        normals[vB + 1] += cb.y;
        normals[vB + 2] += cb.z;

        normals[vC] += cb.x;
        normals[vC + 1] += cb.y;
        normals[vC + 2] += cb.z;
    }

    var tempNormal = cc.v3();
    for (var _i4 = 0, _l2 = normals.length; _i4 < _l2; _i4 += 3) {
        tempNormal.x = normals[_i4];
        tempNormal.y = normals[_i4 + 1];
        tempNormal.z = normals[_i4 + 2];

        tempNormal.normalizeSelf();

        normals[_i4] = tempNormal.x;
        normals[_i4 + 1] = tempNormal.y;
        normals[_i4 + 2] = tempNormal.z;
    }

    return normals;
}

cc.Class({
    extends: cc.Component,

    properties: {
        rotateSpeed: 360,
        wavesMinAmp: 5,
        wavesMaxAmp: 20,
        wavesMinSpeed: 0.001,
        wavesMaxSpeed: 0.003
    },

    start: function start() {
        this.node._eulerAngles = cc.v3(-90, 0, 0);
        var data = this.data = this.getComponent('cylinder').data;
        this.mesh = this.getComponent(cc.MeshRenderer).mesh;

        this.waves = [];
        var positions = data.positions;
        for (var i = 0, l = data.positions.length; i < l; i += 3) {
            this.waves.push({
                x: positions[i], y: positions[i + 1], z: positions[i + 2],
                ang: Math.random() * Math.PI * 2,
                amp: this.wavesMinAmp + Math.random() * (this.wavesMaxAmp - this.wavesMinAmp),
                speed: this.wavesMinSpeed + Math.random() * (this.wavesMaxSpeed - this.wavesMinSpeed)
            });
        };

        this.loopCylinder();
    },
    loopCylinder: function loopCylinder() {
        var cylinder = this.getComponent('cylinder');
        var heightSegments = cylinder.heightSegments;
        var radialSegments = cylinder.radialSegments;

        var indices = cylinder.data.indices;
        var indexOffset = indices.length;
        var row = radialSegments + 1;
        for (var y = 0; y < heightSegments; ++y) {
            var i1 = y * row + radialSegments;
            var i2 = (y + 1) * row + radialSegments;
            var i3 = (y + 1) * row;
            var i4 = y * row;

            // face one
            indices[indexOffset] = i1;++indexOffset;
            indices[indexOffset] = i4;++indexOffset;
            indices[indexOffset] = i2;++indexOffset;

            // face two
            indices[indexOffset] = i4;++indexOffset;
            indices[indexOffset] = i3;++indexOffset;
            indices[indexOffset] = i2;++indexOffset;
        }

        this.mesh.setIndices(indices);
    },
    update: function update(dt) {
        var positions = this.data.positions;
        for (var i = 0, l = positions.length; i < l; i += 3) {
            var vprops = this.waves[i / 3];
            positions[i] = vprops.x + Math.cos(vprops.ang) * vprops.amp;
            positions[i + 1] = vprops.y + Math.sin(vprops.ang) * vprops.amp;
            vprops.ang += vprops.speed * dt;
        }
        this.mesh.setVertices(cc.gfx.ATTR_POSITION, positions);

        // let normals = calcVertexNormals(positions, this.data.indices, this.data.normals);
        // this.mesh.setVertices(cc.gfx.ATTR_NORMAL, normals);
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=sea.js.map
        