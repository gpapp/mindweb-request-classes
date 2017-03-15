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
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractResponse_1 = require("./AbstractResponse");
var TextResponse = (function (_super) {
    __extends(TextResponse, _super);
    function TextResponse(_message) {
        var _this = _super.call(this) || this;
        _this._message = _message;
        return _this;
    }

    Object.defineProperty(TextResponse.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    return TextResponse;
}(AbstractResponse_1.AbstractResponse));
exports.default = TextResponse;
//# sourceMappingURL=TextResponse.js.map