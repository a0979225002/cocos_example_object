"use strict";
cc._RF.push(module, '87d10eQ+dlK/K0hO7FQVb4S', 'DataUIMusic');
// script/data/scene/DataUIMusic.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
var DataUIMusic = /** @class */ (function (_super) {
    __extends(DataUIMusic, _super);
    function DataUIMusic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataUIMusic.prototype.onLoad = function () {
        this.node_main = this.node.getChildByName("main");
        this.node_music = this.node_main.getChildByName("btn_music");
        this.node_effect = this.node_main.getChildByName("btn_effect");
        this.label_music = this.node_music.getChildByName("title").getComponent(cc.Label);
        this.label_effect = this.node_effect.getChildByName("title").getComponent(cc.Label);
        this.btn_music = this.node_music.getChildByName("switch_main");
        this.btn_effect = this.node_effect.getChildByName("switch_main");
        this.btn_close = this.node_main.getChildByName("btn_close");
        this.label_close = this.btn_close.getChildByName("txt").getComponent(cc.Label);
        this.node_musicBg = this.btn_music.getChildByName("bg");
        this.node_musicCircle = this.btn_music.getChildByName("circle");
        this.node_effectBg = this.btn_effect.getChildByName("bg");
        this.node_effectCircle = this.btn_effect.getChildByName("circle");
    };
    DataUIMusic = __decorate([
        ccclass
    ], DataUIMusic);
    return DataUIMusic;
}(cc.Component));
exports.default = DataUIMusic;

cc._RF.pop();