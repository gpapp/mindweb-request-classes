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
var JoinResponse = (function (_super) {
    __extends(JoinResponse, _super);
    function JoinResponse(_userId, _fileId) {
        var _this = _super.call(this) || this;
        _this._userId = _userId;
        _this._fileId = _fileId;
        return _this;
    }

    Object.defineProperty(JoinResponse.prototype, "fileId", {
        get: function () {
            return this._fileId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JoinResponse.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        enumerable: true,
        configurable: true
    });
    return JoinResponse;
}(AbstractResponse_1.AbstractResponse));
exports.default = JoinResponse;
//# sourceMappingURL=JoinResponse.js.map