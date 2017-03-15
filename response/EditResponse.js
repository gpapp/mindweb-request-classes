"use strict";
var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array && function (d, b) {
                d.__proto__ = b;
            }) ||
            function (d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }

            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
Object.defineProperty(exports, "__esModule", {value: true});
var AbstractResponse_1 = require("./AbstractResponse");
var EditResponse = (function (_super) {
    __extends(EditResponse, _super);
    function EditResponse(_action) {
        var _this = _super.call(this) || this;
        _this._action = _action;
        return _this;
    }

    Object.defineProperty(EditResponse.prototype, "action", {
        get: function () {
            return this._action;
        },
        enumerable: true,
        configurable: true
    });
    return EditResponse;
}(AbstractResponse_1.AbstractResponse));
exports.EditResponse = EditResponse;
exports.default = EditResponse;
//# sourceMappingURL=EditResponse.js.map