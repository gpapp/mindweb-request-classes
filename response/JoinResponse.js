"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractResponse_1 = require("./AbstractResponse");
class JoinResponse extends AbstractResponse_1.AbstractResponse {
    constructor(_fileId, _userId) {
        super(_fileId);
        this._userId = _userId;
    }
    get userId() {
        return this._userId;
    }
}
exports.default = JoinResponse;
//# sourceMappingURL=JoinResponse.js.map