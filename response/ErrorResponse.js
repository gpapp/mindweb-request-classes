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
var ErrorResponse = (function (_super) {
    __extends(ErrorResponse, _super);
    function ErrorResponse(e) {
        var _this = _super.call(this) || this;
        _this.result = "error";
        if (e) {
            _this.errorName = e.name;
            _this.errorMessage = e.message;
        }
        return _this;
    }

    return ErrorResponse;
}(AbstractResponse_1.AbstractResponse));
exports.default = ErrorResponse;
//# sourceMappingURL=ErrorResponse.js.map