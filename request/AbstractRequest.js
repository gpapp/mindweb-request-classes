"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        const parent = this;
        this._sessionId = sessionId;
        try {
            this.internalExecute(userId, service, function (response) {
                response.correlationId = parent.correlationId;
                callback(response);
            });
        }
        catch (e) {
            const response = new ErrorResponse_1.default(e);
            response.correlationId = parent.correlationId;
            callback(response);
        }
    }
}
exports.AbstractRequest = AbstractRequest;
exports.default = AbstractRequest;
//# sourceMappingURL=AbstractRequest.js.map