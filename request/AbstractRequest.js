"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorResponse_1 = require("../response/ErrorResponse");
const AbstractMessage_1 = require("../classes/AbstractMessage");
class AbstractRequest extends AbstractMessage_1.AbstractMessage {
    get correlationId() {
        return this._correlationId;
    }
    set correlationId(value) {
        this._correlationId = value;
    }
    get sessionId() {
        return this._sessionId;
    }
    constructor(fileId) {
        super(fileId);
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