
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Moving_ghost/Moving_ghost.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0dc97ZIzztH7IJMDQwHUeiI', 'Moving_ghost');
// Scene/Moving_ghost/Moving_ghost.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Moving_ghost = /** @class */ (function (_super) {
    __extends(Moving_ghost, _super);
    function Moving_ghost() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ghostCanvasList = [];
        _this.role = null;
        _this.roleCamera = null;
        return _this;
    }
    Moving_ghost.prototype.onLoad = function () {
        var _this = this;
        var roleZindex = 10;
        this.role.zIndex = roleZindex;
        var texture = new cc.RenderTexture();
        texture.initWithSize(this.node.width, this.node.height);
        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        this.roleCamera.targetTexture = texture;
        this.ghostCanvasList.forEach(function (ghost, idx) {
            ghost.node.scaleY = -1;
            ghost.node.zIndex = roleZindex - idx;
            ghost.node.opacity = 100 - idx * 15;
            ghost.spriteFrame = spriteFrame;
        });
        this.schedule(this.ghostFollow, 0.1, cc.macro.REPEAT_FOREVER);
        fcc.eventMgr.eventListener("SCENE", function (isUpdate) {
            cc.log(isUpdate);
            if (isUpdate) {
                _this.beforeDestroy();
            }
            else {
                var roleZindex_1 = 10;
                _this.role.zIndex = roleZindex_1;
                var texture_1 = new cc.RenderTexture();
                texture_1.initWithSize(_this.node.width, _this.node.height);
                var spriteFrame_1 = new cc.SpriteFrame();
                spriteFrame_1.setTexture(texture_1);
                _this.roleCamera.targetTexture = texture_1;
                _this.ghostCanvasList.forEach(function (ghost, idx) {
                    ghost.node.scaleY = -1;
                    ghost.node.zIndex = roleZindex_1 - idx;
                    ghost.node.opacity = 100 - idx * 15;
                    ghost.spriteFrame = spriteFrame_1;
                });
                _this.schedule(_this.ghostFollow, 0.1, cc.macro.REPEAT_FOREVER);
            }
        }, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
    };
    Moving_ghost.prototype.touchMoveEvent = function (evt) {
        this.role.x += evt.getDeltaX();
        this.role.y += evt.getDeltaY();
    };
    Moving_ghost.prototype.beforeDestroy = function () {
        this.unschedule(this.ghostFollow);
    };
    Moving_ghost.prototype.ghostFollow = function () {
        var _this = this;
        this.ghostCanvasList.forEach(function (ghost, i) {
            var dis = ghost.node.position.sub(_this.role.position).mag();
            if (dis < 0.5)
                return; // 给个误差范围，涉及到浮点数，dis的计算不可能精准，小于0.5就可以认为是静止了
            ghost.node.stopAllActions();
            ghost.node.runAction(cc.moveTo(i * 0.04 + 0.02, _this.role.x, _this.role.y));
        });
    };
    var _b, _c;
    __decorate([
        property([cc.Sprite]),
        __metadata("design:type", Array)
    ], Moving_ghost.prototype, "ghostCanvasList", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], Moving_ghost.prototype, "role", void 0);
    __decorate([
        property(cc.Camera),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Camera) === "function" ? _c : Object)
    ], Moving_ghost.prototype, "roleCamera", void 0);
    Moving_ghost = __decorate([
        ccclass
    ], Moving_ghost);
    return Moving_ghost;
}(cc.Component));
exports.default = Moving_ghost;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXE1vdmluZ19naG9zdFxcTW92aW5nX2dob3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBb0VDO1FBbEVDLHFCQUFlLEdBQWdCLEVBQUUsQ0FBQztRQUVsQyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGdCQUFVLEdBQWMsSUFBSSxDQUFDOztJQThEL0IsQ0FBQztJQTVEQyw2QkFBTSxHQUFOO1FBQUEsaUJBeUNDO1FBeENDLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFFOUIsSUFBTSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELElBQU0sV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLEdBQUc7WUFDdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUNyQyxLQUFLLENBQUMsSUFB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LENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7SUFqRUQ7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7O3lEQUNZO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1osRUFBRSxvQkFBRixFQUFFLENBQUMsSUFBSTs4Q0FBUTtJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNSLEVBQUUsb0JBQUYsRUFBRSxDQUFDLE1BQU07b0RBQVE7SUFOVixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBb0VoQztJQUFELG1CQUFDO0NBcEVELEFBb0VDLENBcEV5QyxFQUFFLENBQUMsU0FBUyxHQW9FckQ7a0JBcEVvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ19naG9zdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShbY2MuU3ByaXRlXSlcbiAgZ2hvc3RDYW52YXNMaXN0OiBjYy5TcHJpdGVbXSA9IFtdO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgcm9sZTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gIHJvbGVDYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XG5cbiAgb25Mb2FkKCkge1xuICAgIGNvbnN0IHJvbGVaaW5kZXggPSAxMDtcbiAgICB0aGlzLnJvbGUuekluZGV4ID0gcm9sZVppbmRleDtcblxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgY2MuUmVuZGVyVGV4dHVyZSgpO1xuICAgIHRleHR1cmUuaW5pdFdpdGhTaXplKHRoaXMubm9kZS53aWR0aCwgdGhpcy5ub2RlLmhlaWdodCk7XG4gICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcbiAgICBzcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHRleHR1cmUpO1xuICAgIHRoaXMucm9sZUNhbWVyYS50YXJnZXRUZXh0dXJlID0gdGV4dHVyZTtcbiAgICB0aGlzLmdob3N0Q2FudmFzTGlzdC5mb3JFYWNoKChnaG9zdCwgaWR4KSA9PiB7XG4gICAgICBnaG9zdC5ub2RlLnNjYWxlWSA9IC0xO1xuICAgICAgZ2hvc3Qubm9kZS56SW5kZXggPSByb2xlWmluZGV4IC0gaWR4O1xuICAgICAgZ2hvc3Qubm9kZS5vcGFjaXR5ID0gMTAwIC0gaWR4ICogMTU7XG4gICAgICBnaG9zdC5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zY2hlZHVsZSh0aGlzLmdob3N0Rm9sbG93LCAwLjEsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSKTtcblxuICAgIGZjYy5ldmVudE1nci5ldmVudExpc3RlbmVyKFwiU0NFTkVcIiwoaXNVcGRhdGU6Ym9vbGVhbik9PntcbiAgICAgICAgY2MubG9nKGlzVXBkYXRlKVxuICAgICAgICBpZihpc1VwZGF0ZSl7XG4gICAgICAgICAgICB0aGlzLmJlZm9yZURlc3Ryb3koKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgIGNvbnN0IHJvbGVaaW5kZXggPSAxMDtcbiAgICAgICAgICB0aGlzLnJvbGUuekluZGV4ID0gcm9sZVppbmRleDtcbiAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcbiAgICAgICAgICB0ZXh0dXJlLmluaXRXaXRoU2l6ZSh0aGlzLm5vZGUud2lkdGgsIHRoaXMubm9kZS5oZWlnaHQpO1xuICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKCk7XG4gICAgICAgICAgc3ByaXRlRnJhbWUuc2V0VGV4dHVyZSh0ZXh0dXJlKTtcbiAgICAgICAgICB0aGlzLnJvbGVDYW1lcmEudGFyZ2V0VGV4dHVyZSA9IHRleHR1cmU7XG4gICAgICAgICAgdGhpcy5naG9zdENhbnZhc0xpc3QuZm9yRWFjaCgoZ2hvc3QsIGlkeCkgPT4ge1xuICAgICAgICAgICAgZ2hvc3Qubm9kZS5zY2FsZVkgPSAtMTtcbiAgICAgICAgICAgIGdob3N0Lm5vZGUuekluZGV4ID0gcm9sZVppbmRleCAtIGlkeDtcbiAgICAgICAgICAgIGdob3N0Lm5vZGUub3BhY2l0eSA9IDEwMCAtIGlkeCAqIDE1O1xuICAgICAgICAgICAgZ2hvc3Quc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZ2hvc3RGb2xsb3csIDAuMSwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIpO1xuICAgICAgICB9XG4gICAgfSx0cnVlKVxuXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlRXZlbnQsIHRoaXMpO1xuICB9XG5cbiAgdG91Y2hNb3ZlRXZlbnQoZXZ0OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgdGhpcy5yb2xlLnggKz0gZXZ0LmdldERlbHRhWCgpO1xuICAgIHRoaXMucm9sZS55ICs9IGV2dC5nZXREZWx0YVkoKTtcbiAgfVxuXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ2hvc3RGb2xsb3cpO1xuICB9XG5cbiAgZ2hvc3RGb2xsb3coKSB7XG4gICAgdGhpcy5naG9zdENhbnZhc0xpc3QuZm9yRWFjaCgoZ2hvc3QsIGkpID0+IHtcbiAgICAgIGNvbnN0IGRpcyA9IChnaG9zdC5ub2RlLnBvc2l0aW9uIGFzIGFueSkuc3ViKHRoaXMucm9sZS5wb3NpdGlvbikubWFnKCk7XG4gICAgICBpZiAoZGlzIDwgMC41KSByZXR1cm47IC8vIOe7meS4quivr+W3ruiMg+WbtO+8jOa2ieWPiuWIsOa1rueCueaVsO+8jGRpc+eahOiuoeeul+S4jeWPr+iDveeyvuWHhu+8jOWwj+S6jjAuNeWwseWPr+S7peiupOS4uuaYr+mdmeatouS6hlxuICAgICAgZ2hvc3Qubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgZ2hvc3Qubm9kZS5ydW5BY3Rpb24oY2MubW92ZVRvKGkgKiAwLjA0ICsgMC4wMiwgdGhpcy5yb2xlLngsIHRoaXMucm9sZS55KSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==