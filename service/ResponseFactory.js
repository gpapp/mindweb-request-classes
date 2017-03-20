"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractObjectFactory_1 = require("./AbstractObjectFactory");
const TextResponse_1 = require("../response/TextResponse");
const EditResponse_1 = require("../response/EditResponse");
const ErrorResponse_1 = require("../response/ErrorResponse");
const JoinResponse_1 = require("../response/JoinResponse");
const SubscribeResponse_1 = require("../response/SubscribeResponse");
const UnsubscribeResponse_1 = require("../response/UnsubscribeResponse");
/**
 * Created by gpapp on 2017.02.01..
 */
class ResponseFactory extends AbstractObjectFactory_1.AbstractObjectFactory {
    initialize() {
        this.registerClass("TextResponse", TextResponse_1.default);
        this.registerClass("EditResponse", EditResponse_1.default);
        this.registerClass("ErrorResponse", ErrorResponse_1.default);
        this.registerClass("JoinResponse", JoinResponse_1.default);
        this.registerClass("SubscribeResponse", SubscribeResponse_1.default);
        this.registerClass("UnsubscribeResponse", UnsubscribeResponse_1.default);
    }

    static get instance() {
        if (!ResponseFactory._instance) {
            ResponseFactory._instance = new ResponseFactory();
        }
        return ResponseFactory._instance;
    }
    static create(message) {
        return ResponseFactory.instance.create(message);
    }
}
exports.default = ResponseFactory;
//# sourceMappingURL=ResponseFactory.js.map