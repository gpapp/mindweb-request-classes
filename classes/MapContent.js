"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var MapNode_1 = require("./MapNode");
var FileContent = (function () {
    function FileContent(data) {
        if (!data) {
            return;
        }
        if (data instanceof Object) {
            this.$ = data.$;
            this.rootNode = new MapNode_1.default(data.rootNode);
        }
        else {
            var parsed = JSON.parse(data);
            this.$ = parsed.$;
            this.rootNode = new MapNode_1.default(parsed.rootNode);
        }
    }

    FileContent.prototype.recurseNodes = function (f) {
        return this.rootNode.recurseNodes(f);
    };
    FileContent.prototype.findNodeById = function (id) {
        var retval = null;
        this.recurseNodes(function (node) {
            if (node.$['ID'] === id) {
                retval = node;
                return true;
            }
        });
        return retval;
    };
    return FileContent;
}());
exports.default = FileContent;
//# sourceMappingURL=MapContent.js.map