"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractResponse_1 = require("./AbstractResponse");
class SubscribeResponse extends AbstractResponse_1.AbstractResponse {
    constructor(_mapContainer, _mapContent) {
        super();
        this._mapContainer = _mapContainer;
        this._mapContent = _mapContent;
    }
    get mapContainer() {
        return this._mapContainer;
    }
    get mapContent() {
        return this._mapContent;
    }
}
exports.default = SubscribeResponse;
//# sourceMappingURL=SubscribeResponse.js.map