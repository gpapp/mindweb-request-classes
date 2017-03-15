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
var AbstractMessage_1 = require("./AbstractMessage");
var AbstractResponse = (function (_super) {
    __extends(AbstractResponse, _super);
    function AbstractResponse() {
        return _super.call(this) || this;
    }

    Object.defineProperty(AbstractResponse.prototype, "correlationId", {
        get: function () {
            return this._correlationId;
        },
        set: function (value) {
            this._correlationId = value;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractResponse;
}(AbstractMessage_1.AbstractMessage));
exports.AbstractResponse = AbstractResponse;
exports.default = AbstractResponse;
//# sourceMappingURL=AbstractResponse.js.map