"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var ErrorResponse_1 = require("../response/ErrorResponse");
var AbstractRequest = (function () {
    function AbstractRequest() {
        this.name = this.constructor.name;
    }

    Object.defineProperty(AbstractRequest.prototype, "correlationId", {
        get: function () {
            return this._correlationId;
        },
        set: function (value) {
            this._correlationId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractRequest.prototype, "sessionId", {
        get: function () {
            return this._sessionId;
        },
        enumerable: true,
        configurable: true
    });
    AbstractRequest.prototype.execute = function (sessionId, userId, service, callback) {
        this._sessionId = sessionId;
        try {
            this.internalExecute(userId, service, function (response) {
                callback(response);
            });
        }
        catch (e) {
            callback(new ErrorResponse_1.default(e));
        }
    };
    return AbstractRequest;
}());
exports.AbstractRequest = AbstractRequest;
exports.default = AbstractRequest;
//# sourceMappingURL=AbstractRequest.js.map