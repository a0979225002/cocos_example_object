(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/enemy-manager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '09ddf+1UthOJqlpZy+ajb5j', 'enemy-manager', __filename);
// src/enemy-manager.js

'use strict';

var Primitive = require('./primitive/primitive');

cc.Class({
    extends: cc.Component,

    properties: {
        enemyCount: 10,
        enemyColor: cc.color().fromHEX('0xf25346'),
        rotateSpeed: 360
    },

    _initMesh: function _initMesh() {
        var data = cc.primitive.polyhedron ? cc.primitive.polyhedron(4, 8) : cc.primitive.box(8, 8, 8);
        var mesh = Primitive.createMesh(data, this.enemyColor);
        this._mesh = mesh;
    },
    start: function start() {
        this._initMesh();

        this.enemies = [];
        var enemyPool = this.enemyPool = [];
        for (var i = 0; i < this.enemyCount; i++) {
            var node = this.createEnemy();
            enemyPool.push(node);
        }

        this.spawnEnemy();

        window.game.node.on('level-upgrade', this.spawnEnemy, this);
        window.game.node.on('collide-enemy', this.onCollider, this);
    },
    createEnemy: function createEnemy() {
        return window.game.createMeshNode('enemy', this._mesh, true);
    },
    spawnEnemy: function spawnEnemy() {
        var nEnemies = window.game.level;
        var pool = this.enemyPool;
        var enemies = this.enemies;
        for (var i = 0; i < nEnemies; i++) {
            var enemy = pool.pop();
            if (!enemy) {
                enemy = this.createEnemy();
            }
            var angle = -window.game.angles.z - i * 0.1;
            var distance = game.seaHeight + game.playerDefaultY + (-1 + Math.random() * 2) * (game.playerYRange - 20);
            enemy.x = Math.cos(angle) * distance;
            enemy.y = Math.sin(angle) * distance;

            enemy.parent = this.node;
            enemies.push(enemy);
        }
    },
    onCollider: function onCollider(_ref) {
        var enemy = _ref.enemy;

        this.enemies.splice(this.enemies.indexOf(enemy), 1);
        this.enemyPool.push(enemy);
        enemy.parent = null;
    },
    update: function update(dt) {
        var enemies = this.enemies;
        for (var i = 0; i < enemies.length; i++) {
            var enemy = enemies[i];
            enemy._eulerAngles.x += Math.random();
            enemy._eulerAngles.y += Math.random();
            enemy.eulerAngles = enemy._eulerAngles;
        }
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
        //# sourceMappingURL=enemy-manager.js.map
        