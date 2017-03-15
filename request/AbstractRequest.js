"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const ErrorResponse_1 = require("../response/ErrorResponse");
class AbstractRequest {
    get correlationId() {
        return this._correlationId;
    }

    set correlationId(value) {
        this._correlationId = value;
    }

    get sessionId() {
        return this._sessionId;
    }

    constructor() {
        this.name = this.constructor.name;
    }

    execute(sessionId, userId, service, callback) {
        this._sessionId = sessionId;
        try {
            this.internalExecute(userId, service, function (response) {
                callback(response);
            });
        }
        catch (e) {
            callback(new ErrorResponse_1.default(e));
        }
    }
}
exports.AbstractRequest = AbstractRequest;
exports.default = AbstractRequest;
//# sourceMappingURL=AbstractRequest.js.map