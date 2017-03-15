"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractResponse_1 = require("../response/AbstractResponse");
var ResponseFactory = (function () {
    function ResponseFactory() {
    }

    ResponseFactory.create = function (message) {
        var payload = JSON.parse(message.utf8Data);
        if (!payload.name || !/^[$_a-z][$_a-z0-9.]*$/i.test(payload.name)) {
            throw new Error("Invalid payload class");
        }
        var cmdClass = require("../response/" + payload.name);
        var newclass = new cmdClass.default();
        if (!(newclass instanceof AbstractResponse_1.AbstractResponse)) {
            throw new Error("Invalid payload class");
        }
        for (var prop in payload) {
            if (payload.hasOwnProperty(prop)) {
                newclass[prop] = payload[prop];
            }
        }
        return newclass;
    };
    return ResponseFactory;
}());
exports.default = ResponseFactory;
//# sourceMappingURL=ResponseFactory.js.map