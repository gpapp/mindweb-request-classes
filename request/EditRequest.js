"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const EchoRequest_1 = require("./EchoRequest");
class EditRequest extends EchoRequest_1.EchoRequest {
    constructor(_fileId, _action) {
        super();
        this._fileId = _fileId;
        this._action = _action;
    }
    get fileId() {
        return this._fileId;
    }
    get action() {
        return this._action;
    }
}
exports.EditRequest = EditRequest;
exports.default = EditRequest;
//# sourceMappingURL=EditRequest.js.map