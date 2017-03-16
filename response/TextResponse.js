"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractResponse_1 = require("./AbstractResponse");
class TextResponse extends AbstractResponse_1.AbstractResponse {
    constructor(_message) {
        super();
        this._message = _message;
    }
    get message() {
        return this._message;
    }
}
exports.default = TextResponse;
//# sourceMappingURL=TextResponse.js.map