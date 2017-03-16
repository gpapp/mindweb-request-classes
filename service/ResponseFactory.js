"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractResponse_1 = require("../response/AbstractResponse");
class ResponseFactory {
    static create(message) {
        const payload = JSON.parse(message);
        if (!payload.name || !/^[$_a-z][$_a-z0-9.]*$/i.test(payload.name)) {
            throw new Error("Invalid payload class");
        }
        const cmdClass = require("../response/" + payload.name);
        const newclass = new cmdClass.default();
        if (!(newclass instanceof AbstractResponse_1.AbstractResponse)) {
            throw new Error("Invalid payload class");
        }
        for (let prop in payload) {
            if (payload.hasOwnProperty(prop)) {
                newclass[prop] = payload[prop];
            }
        }
        return newclass;
    }
}
exports.default = ResponseFactory;
//# sourceMappingURL=ResponseFactory.js.map