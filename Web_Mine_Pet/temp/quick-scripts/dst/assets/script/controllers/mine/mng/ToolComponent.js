
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/mng/ToolComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '296d8BDkOlGEIbDuK7/FYDQ', 'ToolComponent');
// script/controllers/mine/mng/ToolComponent.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolIntroCon = exports.ToolBtn = void 0;
var ToolBtn = /** @class */ (function () {
    function ToolBtn(node, id, clickCallback) {
        this.id = -1;
        this.clickCallback = null;
        this.color_red = null;
        this.color_black = null;
        this.id = id;
        this.node = node;
        this.count_box = this.node.getChildByName("count_box");
        this.count_bg = this.count_box.getChildByName("bg");
        this.label_count = this.count_box.getChildByName("number").getComponent(cc.Label);
        this.bg_active = this.node.getChildByName("bg_active");
        this.title_main = this.node.getChildByName("title");
        this.label_title = this.title_main.getChildByName("txt").getComponent(cc.Label);
        this.color_red = new cc.Color(255, 59, 59);
        this.color_black = new cc.Color(0, 0, 0);
        if (clickCallback) {
            this.clickCallback = clickCallback;
        }
    }
    ToolBtn.prototype.active = function (state) {
        this.bg_active.active = state;
        this.title_main.active = state;
        this.count_bg.color = state ? this.color_red : this.color_black;
    };
    ToolBtn.prototype.setCount = function (val) {
        this.label_count.string = val;
    };
    ToolBtn.prototype.setTitleTxt = function (str) {
        this.label_title.string = str;
    };
    ToolBtn.prototype.bindOn = function () {
        this.node.on("touchend", this.onClick, this);
    };
    ToolBtn.prototype.bindOff = function () {
        this.node.off("touchend", this.onClick, this);
    };
    ToolBtn.prototype.onClick = function () {
        if (this.clickCallback)
            this.clickCallback(this.id);
    };
    return ToolBtn;
}());
exports.ToolBtn = ToolBtn;
var ToolIntroCon = /** @class */ (function () {
    function ToolIntroCon(node, id, updateIntro) {
        this.id = -1;
        this.updateIntro = null;
        this.node = node;
        this.id = id;
        if (updateIntro) {
            this.updateIntro = updateIntro;
        }
    }
    ToolIntroCon.prototype.show = function () {
        this.node.active = true;
        if (this.updateIntro) {
            this.updateIntro();
        }
    };
    ToolIntroCon.prototype.hide = function () {
        if (!this.node.active) {
            return;
        }
        this.node.active = false;
    };
    return ToolIntroCon;
}());
exports.ToolIntroCon = ToolIntroCon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcbW5nXFxUb29sQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBcUJJLGlCQUFZLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYztRQW5CcEMsT0FBRSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBY2hCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBRXJCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFJZixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFekMsSUFBSSxhQUFhLEVBQUU7WUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztTQUN0QztJQUVMLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQU8sS0FBYztRQUVqQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRS9CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUVwRSxDQUFDO0lBRUQsMEJBQVEsR0FBUixVQUFTLEdBQUc7UUFDUixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDbEMsQ0FBQztJQUVELDZCQUFXLEdBQVgsVUFBWSxHQUFHO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ2xDLENBQUM7SUFFRCx3QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHlCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQseUJBQU8sR0FBUDtRQUNJLElBQUksSUFBSSxDQUFDLGFBQWE7WUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUwsY0FBQztBQUFELENBMUVBLEFBMEVDLElBQUE7QUExRVksMEJBQU87QUE0RXBCO0lBT0ksc0JBQVksSUFBSSxFQUFFLEVBQUUsRUFBRSxXQUFZO1FBTGxDLE9BQUUsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUdoQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUlmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBRWIsSUFBSSxXQUFXLEVBQUU7WUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztTQUNsQztJQUVMLENBQUM7SUFFRCwyQkFBSSxHQUFKO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFFTCxDQUFDO0lBRUQsMkJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLE9BQU87U0FBRTtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtBQWpDWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUb29sQnRuIHtcclxuXHJcbiAgICBpZDogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgbm9kZTogY2MuTm9kZTtcclxuXHJcbiAgICBjb3VudF9iZzogY2MuTm9kZTtcclxuICAgIGNvdW50X2JveDogY2MuTm9kZTtcclxuXHJcbiAgICBiZ19hY3RpdmU6IGNjLk5vZGU7XHJcbiAgICB0aXRsZV9tYWluOiBjYy5Ob2RlO1xyXG5cclxuXHJcbiAgICBsYWJlbF9jb3VudDogY2MuTGFiZWw7XHJcbiAgICBsYWJlbF90aXRsZTogY2MuTGFiZWw7XHJcblxyXG4gICAgY2xpY2tDYWxsYmFjayA9IG51bGw7XHJcblxyXG4gICAgY29sb3JfcmVkID0gbnVsbDtcclxuICAgIGNvbG9yX2JsYWNrID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlLCBpZCwgY2xpY2tDYWxsYmFjaz8pIHtcclxuXHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuY291bnRfYm94ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY291bnRfYm94XCIpXHJcbiAgICAgICAgdGhpcy5jb3VudF9iZyA9IHRoaXMuY291bnRfYm94LmdldENoaWxkQnlOYW1lKFwiYmdcIik7XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWxfY291bnQgPSB0aGlzLmNvdW50X2JveC5nZXRDaGlsZEJ5TmFtZShcIm51bWJlclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICB0aGlzLmJnX2FjdGl2ZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnX2FjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy50aXRsZV9tYWluID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIik7XHJcbiAgICAgICAgdGhpcy5sYWJlbF90aXRsZSA9IHRoaXMudGl0bGVfbWFpbi5nZXRDaGlsZEJ5TmFtZShcInR4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbG9yX3JlZCA9IG5ldyBjYy5Db2xvcigyNTUsIDU5LCA1OSk7XHJcbiAgICAgICAgdGhpcy5jb2xvcl9ibGFjayA9IG5ldyBjYy5Db2xvcigwLCAwLCAwKTtcclxuXHJcbiAgICAgICAgaWYgKGNsaWNrQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5jbGlja0NhbGxiYWNrID0gY2xpY2tDYWxsYmFjaztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmJnX2FjdGl2ZS5hY3RpdmUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLnRpdGxlX21haW4uYWN0aXZlID0gc3RhdGU7XHJcblxyXG4gICAgICAgIHRoaXMuY291bnRfYmcuY29sb3IgPSBzdGF0ZSA/IHRoaXMuY29sb3JfcmVkIDogdGhpcy5jb2xvcl9ibGFjaztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q291bnQodmFsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9jb3VudC5zdHJpbmcgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGl0bGVUeHQoc3RyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYWJlbF90aXRsZS5zdHJpbmcgPSBzdHI7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZE9uKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInRvdWNoZW5kXCIsIHRoaXMub25DbGljaywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZE9mZigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKFwidG91Y2hlbmRcIiwgdGhpcy5vbkNsaWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmNsaWNrQ2FsbGJhY2spIHRoaXMuY2xpY2tDYWxsYmFjayh0aGlzLmlkKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb29sSW50cm9Db24ge1xyXG5cclxuICAgIGlkOiBudW1iZXIgPSAtMTtcclxuICAgIG5vZGU6IGNjLk5vZGU7XHJcblxyXG4gICAgdXBkYXRlSW50cm8gPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5vZGUsIGlkLCB1cGRhdGVJbnRybz8pIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcblxyXG4gICAgICAgIGlmICh1cGRhdGVJbnRybykge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUludHJvID0gdXBkYXRlSW50cm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlSW50cm8pIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVJbnRybygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=