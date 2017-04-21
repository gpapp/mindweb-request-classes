"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractResponse_1 = require("./AbstractResponse");
class EditResponse extends AbstractResponse_1.AbstractResponse {
    constructor(_fileId, _action) {
        super(_fileId);
        this._action = _action;
    }
    get action() {
        return this._action;
    }
}
exports.default = EditResponse;
//# sourceMappingURL=EditResponse.js.map