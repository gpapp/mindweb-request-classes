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
var AbstractRequest_1 = require("./AbstractRequest");
var UnsubscribeRequest = (function (_super) {
    __extends(UnsubscribeRequest, _super);
    function UnsubscribeRequest(_fileId) {
        var _this = _super.call(this) || this;
        _this._fileId = _fileId;
        return _this;
    }

    Object.defineProperty(UnsubscribeRequest.prototype, "fileId", {
        get: function () {
            return this._fileId;
        },
        enumerable: true,
        configurable: true
    });
    return UnsubscribeRequest;
}(AbstractRequest_1.AbstractRequest));
exports.UnsubscribeRequest = UnsubscribeRequest;
exports.default = UnsubscribeRequest;
//# sourceMappingURL=UnsubscribeRequest.js.map