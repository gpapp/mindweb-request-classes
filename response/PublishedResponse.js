"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
class PublishedResponse {
    constructor(_originSessionId, _message) {
        this._originSessionId = _originSessionId;
        this._message = _message;
    }
    get message() {
        return this._message;
    }
    get originSessionId() {
        return this._originSessionId;
    }
}
exports.default = PublishedResponse;
//# sourceMappingURL=PublishedResponse.js.map