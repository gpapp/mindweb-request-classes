"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceError extends Error {
    constructor(statusCode, message, name) {
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.name = name;
    }
}
exports.default = ServiceError;
//# sourceMappingURL=ServiceError.js.map