"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const AbstractResponse_1 = require("./AbstractResponse");
class ErrorResponse extends AbstractResponse_1.AbstractResponse {
    constructor(e) {
        super();
        this.result = "error";
        if (e) {
            this.errorName = e.name;
            this.errorMessage = e.message;
        }
    }
}
exports.default = ErrorResponse;
//# sourceMappingURL=ErrorResponse.js.map