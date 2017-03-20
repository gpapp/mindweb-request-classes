"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMessage_1 = require("../classes/AbstractMessage");
class AbstractResponse extends AbstractMessage_1.AbstractMessage {
    get correlationId() {
        return this._correlationId;
    }
    set correlationId(value) {
        this._correlationId = value;
    }
    constructor() {
        super();
    }
}
exports.AbstractResponse = AbstractResponse;
exports.default = AbstractResponse;
//# sourceMappingURL=AbstractResponse.js.map