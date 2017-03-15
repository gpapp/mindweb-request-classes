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
var EchoRequest = (function (_super) {
    __extends(EchoRequest, _super);
    function EchoRequest(_content) {
        var _this = _super.call(this) || this;
        _this._content = _content;
        return _this;
    }

    Object.defineProperty(EchoRequest.prototype, "content", {
        get: function () {
            return this._content;
        },
        enumerable: true,
        configurable: true
    });
    return EchoRequest;
}(AbstractRequest_1.AbstractRequest));
exports.EchoRequest = EchoRequest;
exports.default = EchoRequest;
//# sourceMappingURL=EchoRequest.js.map