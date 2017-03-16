"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractResponse_1 = require("./AbstractResponse");
class SubscribeResponse extends AbstractResponse_1.AbstractResponse {
    constructor(_mapContainer) {
        super();
        this._mapContainer = _mapContainer;
    }

    get mapContainer() {
        return this._mapContainer;
    }
}
exports.default = SubscribeResponse;
//# sourceMappingURL=SubscribeResponse.js.map