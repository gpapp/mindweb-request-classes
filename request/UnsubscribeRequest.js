"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractRequest_1 = require("./AbstractRequest");
class UnsubscribeRequest extends AbstractRequest_1.AbstractRequest {
    constructor(_fileId) {
        super();
        this._fileId = _fileId;
    }
    get fileId() {
        return this._fileId;
    }
}
exports.UnsubscribeRequest = UnsubscribeRequest;
exports.default = UnsubscribeRequest;
//# sourceMappingURL=UnsubscribeRequest.js.map