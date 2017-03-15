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
var SubscribeResponse = (function (_super) {
    __extends(SubscribeResponse, _super);
    function SubscribeResponse(_mapContainer) {
        var _this = _super.call(this) || this;
        _this._mapContainer = _mapContainer;
        return _this;
    }

    Object.defineProperty(SubscribeResponse.prototype, "mapContainer", {
        get: function () {
            return this._mapContainer;
        },
        enumerable: true,
        configurable: true
    });
    return SubscribeResponse;
}(AbstractResponse_1.AbstractResponse));
exports.default = SubscribeResponse;
//# sourceMappingURL=SubscribeResponse.js.map