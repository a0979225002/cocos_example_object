(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/player-control.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd53b1LPmLJOtL/2J/ZOSrA7', 'player-control', __filename);
// src/player-control.js

'use strict';

function normalize(v, vmin, vmax, tmin, tmax) {
    var nv = Math.max(Math.min(v, vmax), vmin);
    var dv = vmax - vmin;
    var pc = (nv - vmin) / dv;
    var dt = tmax - tmin;
    var tv = tmin + pc * dt;
    return tv;
}

cc.Class({
    extends: cc.Component,

    properties: {
        moveSensivity: 5,
        rotXSensivity: 0.8,
        rotZSensivity: 0.4,

        camera: cc.Camera,
        cameraSensivity: 2
    },

    onLoad: function onLoad() {
        this.reset();
    },
    reset: function reset() {
        this.angles = cc.v3();
        this.node.position = cc.v3(0, game.playerDefaultY, 0);
        this.touchPos = cc.v2();

        this.planeCollisionDisplacementX = 0;
        this.planeCollisionSpeedX = 0;
        this.planeCollisionDisplacementY = 0;
        this.planeCollisionSpeedY = 0;
    },
    start: function start() {
        var canvas = cc.find('Canvas');
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        canvas.on(cc.Node.EventType.MOUSE_MOVE, this.onMoseMove, this);

        window.game.node.on('collide-enemy', this.onCollider, this);
    },
    onTouchMove: function onTouchMove(event) {
        var touches = event.getTouches();
        this._setTouchPos(touches[0].getLocation());
    },
    onMoseMove: function onMoseMove(event) {
        this._setTouchPos(event.getLocation());
    },
    onCollider: function onCollider(_ref) {
        var dif = _ref.dif,
            distance = _ref.distance;

        this.planeCollisionSpeedX = 150 * dif.x / distance;
        this.planeCollisionSpeedY = 150 * dif.y / distance;
    },
    _setTouchPos: function _setTouchPos(pos) {
        // the value range is -1 - 1
        this.touchPos.x = -1 + pos.x / cc.visibleRect.width * 2;
        this.touchPos.y = -1 + pos.y / cc.visibleRect.height * 2;
    },
    update: function update(dt) {
        var touchPos = this.touchPos;

        var targetY = normalize(touchPos.y, -.75, .75, game.playerDefaultY - game.playerYRange, game.playerDefaultY + game.playerYRange);
        var targetX = normalize(touchPos.x, -1, 1, -game.playerXRange * 0.7, -game.playerXRange);

        this.planeCollisionDisplacementX += this.planeCollisionSpeedX;
        targetX += this.planeCollisionDisplacementX;

        this.planeCollisionDisplacementY += this.planeCollisionSpeedY;
        targetY += this.planeCollisionDisplacementY;

        this.node.y += (targetY - this.node.y) * dt * this.moveSensivity;
        this.node.x += (targetX - this.node.x) * dt * this.moveSensivity;

        this.angles.z = (targetY - this.node.y) * dt * this.rotZSensivity;
        this.angles.x = (this.node.y - targetY) * dt * this.rotXSensivity;
        this.node.eulerAngles = this.angles;

        this.planeCollisionSpeedX += (0 - this.planeCollisionSpeedX) * dt * 30;
        this.planeCollisionDisplacementX += (0 - this.planeCollisionDisplacementX) * dt * 10;
        this.planeCollisionSpeedY += (0 - this.planeCollisionSpeedY) * dt * 30;
        this.planeCollisionDisplacementY += (0 - this.planeCollisionDisplacementY) * dt * 10;

        var camera = this.camera;
        camera.fov = normalize(touchPos.x, -1, 1, 40, 80);
        camera.node.y += (this.node.y - camera.node.y) * dt * this.cameraSensivity;
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
        //# sourceMappingURL=player-control.js.map
        