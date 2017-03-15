"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var PublishedResponse = (function () {
    function PublishedResponse(_originSessionId, _message) {
        this._originSessionId = _originSessionId;
        this._message = _message;
    }

    Object.defineProperty(PublishedResponse.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublishedResponse.prototype, "originSessionId", {
        get: function () {
            return this._originSessionId;
        },
        enumerable: true,
        configurable: true
    });
    return PublishedResponse;
}());
exports.default = PublishedResponse;
//# sourceMappingURL=PublishedResponse.js.map