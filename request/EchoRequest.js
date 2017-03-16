"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractRequest_1 = require("./AbstractRequest");
class EchoRequest extends AbstractRequest_1.AbstractRequest {
    constructor(_content) {
        super();
        this._content = _content;
    }
    get content() {
        return this._content;
    }
}
exports.EchoRequest = EchoRequest;
exports.default = EchoRequest;
//# sourceMappingURL=EchoRequest.js.map