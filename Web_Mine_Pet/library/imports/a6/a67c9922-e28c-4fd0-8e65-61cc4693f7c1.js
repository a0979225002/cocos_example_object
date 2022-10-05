"use strict";
cc._RF.push(module, 'a67c9ki4oxP0I5lYcxGk/fB', 'System');
// script/data/model/System.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var IDataModel_1 = require("../IDataModel");
var System = /** @class */ (function (_super) {
    __extends(System, _super);
    function System() {
        var _this = _super.call(this, "System") || this;
        _this.developMode = 0;
        _this.language = "NTD";
        return _this;
    }
    return System;
}(IDataModel_1.default));
exports.default = System;

cc._RF.pop();