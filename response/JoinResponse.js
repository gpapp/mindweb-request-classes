"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractResponse_1 = require("./AbstractResponse");
class JoinResponse extends AbstractResponse_1.AbstractResponse {
    constructor(_userId, _fileId) {
        super();
        this._userId = _userId;
        this._fileId = _fileId;
    }

    get fileId() {
        return this._fileId;
    }

    get userId() {
        return this._userId;
    }
}
exports.default = JoinResponse;
//# sourceMappingURL=JoinResponse.js.map