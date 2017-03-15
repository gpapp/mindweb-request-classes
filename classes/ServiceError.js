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
var ServiceError = (function (_super) {
    __extends(ServiceError, _super);
    function ServiceError(statusCode, message, name) {
        var _this = _super.call(this) || this;
        _this.statusCode = statusCode;
        _this.message = message;
        _this.name = name;
        return _this;
    }

    return ServiceError;
}(Error));
exports.default = ServiceError;
//# sourceMappingURL=ServiceError.js.map