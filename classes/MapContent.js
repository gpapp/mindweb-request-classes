"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const MapNode_1 = require("./MapNode");
class FileContent {
    constructor(data) {
        if (!data) {
            return;
        }
        if (data instanceof Object) {
            this.$ = data.$;
            this.rootNode = new MapNode_1.default(data.rootNode);
        }
        else {
            const parsed = JSON.parse(data);
            this.$ = parsed.$;
            this.rootNode = new MapNode_1.default(parsed.rootNode);
        }
    }

    recurseNodes(f) {
        return this.rootNode.recurseNodes(f);
    }

    findNodeById(id) {
        let retval = null;
        this.recurseNodes(function (node) {
            if (node.$['ID'] === id) {
                retval = node;
                return true;
            }
        });
        return retval;
    }
}
exports.default = FileContent;
//# sourceMappingURL=MapContent.js.map