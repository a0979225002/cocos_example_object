
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Photo_gallery/Photo_gallery.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26442Io+xpOVYLjZDK0EwlV', 'Photo_gallery');
// Scene/Photo_gallery/Photo_gallery.ts

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
var Scene_transition = /** @class */ (function (_super) {
    __extends(Scene_transition, _super);
    function Scene_transition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.switchNodeList = [];
        _this.fadeRadius = 0.1;
        _this.isTransforming = false;
        return _this;
    }
    Scene_transition.prototype.onLoad = function () {
        var _this = this;
        this.switchNodeList.forEach(function (node, idx) {
            node.zIndex = _this.switchNodeList.length - idx;
        });
    };
    Scene_transition.prototype.bgTramsform = function () {
        var _this = this;
        if (this.isTransforming)
            return;
        this.isTransforming = true;
        var time = 0.0;
        var node = this.switchNodeList[0];
        var material = node.getComponent(cc.Sprite).getMaterial(0);
        material.setProperty('u_fade_radius', this.fadeRadius);
        material.setProperty('u_time', time);
        material.define('USE_TRAMSFORM', true, 0, true);
        var timer = setInterval(function () {
            time += 0.03;
            material.setProperty('u_time', time);
            if (time > 1.0 + _this.fadeRadius) {
                _this.switchNodeList.shift();
                _this.switchNodeList.push(node);
                _this.switchNodeList.forEach(function (node, idx) {
                    node.zIndex = _this.switchNodeList.length - idx;
                });
                material.define('USE_TRAMSFORM', false, 0, true);
                _this.isTransforming = false;
                timer && clearInterval(timer);
            }
        }, 30);
    };
    __decorate([
        property([cc.Node]),
        __metadata("design:type", Array)
    ], Scene_transition.prototype, "switchNodeList", void 0);
    Scene_transition = __decorate([
        ccclass
    ], Scene_transition);
    return Scene_transition;
}(cc.Component));
exports.default = Scene_transition;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXFBob3RvX2dhbGxlcnlcXFBob3RvX2dhbGxlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUFzQ0M7UUFwQ0Msb0JBQWMsR0FBYyxFQUFFLENBQUM7UUFDL0IsZ0JBQVUsR0FBVyxHQUFHLENBQUM7UUFRekIsb0JBQWMsR0FBWSxLQUFLLENBQUM7O0lBMkJsQyxDQUFDO0lBakNDLGlDQUFNLEdBQU47UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEdBQUc7WUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBR0Qsc0NBQVcsR0FBWDtRQUFBLGlCQXlCQztRQXhCQyxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQUUsT0FBTztRQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUUzQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVoRCxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUM7WUFDdEIsSUFBSSxJQUFJLElBQUksQ0FBQztZQUNiLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JDLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNoQyxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM1QixLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsR0FBRztvQkFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ2pELENBQUMsQ0FBQyxDQUFBO2dCQUNGLFFBQVEsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2pELEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixLQUFLLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1FBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQW5DRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7NERBQ1c7SUFGWixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXNDcEM7SUFBRCx1QkFBQztDQXRDRCxBQXNDQyxDQXRDNkMsRUFBRSxDQUFDLFNBQVMsR0FzQ3pEO2tCQXRDb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lX3RyYW5zaXRpb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgc3dpdGNoTm9kZUxpc3Q6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIGZhZGVSYWRpdXM6IG51bWJlciA9IDAuMTtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5zd2l0Y2hOb2RlTGlzdC5mb3JFYWNoKChub2RlLCBpZHgpID0+IHtcclxuICAgICAgbm9kZS56SW5kZXggPSB0aGlzLnN3aXRjaE5vZGVMaXN0Lmxlbmd0aCAtIGlkeDtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBpc1RyYW5zZm9ybWluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGJnVHJhbXNmb3JtKCkge1xyXG4gICAgaWYgKHRoaXMuaXNUcmFuc2Zvcm1pbmcpIHJldHVybjtcclxuICAgIHRoaXMuaXNUcmFuc2Zvcm1pbmcgPSB0cnVlO1xyXG5cclxuICAgIGxldCB0aW1lID0gMC4wO1xyXG4gICAgbGV0IG5vZGUgPSB0aGlzLnN3aXRjaE5vZGVMaXN0WzBdO1xyXG4gICAgbGV0IG1hdGVyaWFsID0gbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5nZXRNYXRlcmlhbCgwKTtcclxuICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KCd1X2ZhZGVfcmFkaXVzJywgdGhpcy5mYWRlUmFkaXVzKTtcclxuICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KCd1X3RpbWUnLCB0aW1lKTtcclxuICAgIG1hdGVyaWFsLmRlZmluZSgnVVNFX1RSQU1TRk9STScsIHRydWUsIDAsIHRydWUpO1xyXG5cclxuICAgIGxldCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgdGltZSArPSAwLjAzO1xyXG4gICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eSgndV90aW1lJywgdGltZSk7XHJcbiAgICAgIGlmICh0aW1lID4gMS4wICsgdGhpcy5mYWRlUmFkaXVzKSB7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hOb2RlTGlzdC5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoTm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgICAgICB0aGlzLnN3aXRjaE5vZGVMaXN0LmZvckVhY2goKG5vZGUsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgbm9kZS56SW5kZXggPSB0aGlzLnN3aXRjaE5vZGVMaXN0Lmxlbmd0aCAtIGlkeDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIG1hdGVyaWFsLmRlZmluZSgnVVNFX1RSQU1TRk9STScsIGZhbHNlLCAwLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmlzVHJhbnNmb3JtaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGltZXIgJiYgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICAgIH1cclxuICAgIH0sIDMwKTtcclxuICB9XHJcbn1cclxuIl19