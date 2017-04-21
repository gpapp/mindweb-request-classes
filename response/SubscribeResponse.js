"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractResponse_1 = require("./AbstractResponse");
class SubscribeResponse extends AbstractResponse_1.AbstractResponse {
    constructor(_mapVersion) {
        super(_mapVersion ? _mapVersion.container.id : null);
        this._mapVersion = _mapVersion;
    }
    get mapVersion() {
        return this._mapVersion;
    }
}
exports.default = SubscribeResponse;
//# sourceMappingURL=SubscribeResponse.js.map