"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractRequest_1 = require("./AbstractRequest");
class EditRequest extends AbstractRequest_1.AbstractRequest {
    constructor(_fileId, _action) {
        super(_fileId);
        this._action = _action;
    }
    get action() {
        return this._action;
    }
}
exports.EditRequest = EditRequest;
exports.default = EditRequest;
//# sourceMappingURL=EditRequest.js.map