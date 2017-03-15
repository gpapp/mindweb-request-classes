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
var EchoRequest_1 = require("./EchoRequest");
var EditRequest = (function (_super) {
    __extends(EditRequest, _super);
    function EditRequest(_fileId, _action) {
        var _this = _super.call(this) || this;
        _this._fileId = _fileId;
        _this._action = _action;
        return _this;
    }

    Object.defineProperty(EditRequest.prototype, "fileId", {
        get: function () {
            return this._fileId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditRequest.prototype, "action", {
        get: function () {
            return this._action;
        },
        enumerable: true,
        configurable: true
    });
    return EditRequest;
}(EchoRequest_1.EchoRequest));
exports.EditRequest = EditRequest;
exports.default = EditRequest;
//# sourceMappingURL=EditRequest.js.map