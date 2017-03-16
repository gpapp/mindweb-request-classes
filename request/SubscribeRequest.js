"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractRequest_1 = require("./AbstractRequest");
class SubscribeRequest extends AbstractRequest_1.AbstractRequest {
    constructor(_fileId) {
        super();
        this._fileId = _fileId;
    }
    get fileId() {
        return this._fileId;
    }
}
exports.SubscribeRequest = SubscribeRequest;
exports.default = SubscribeRequest;
//# sourceMappingURL=SubscribeRequest.js.map