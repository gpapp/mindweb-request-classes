"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServiceError_1 = require("../classes/ServiceError");
var MapService = (function () {
    function MapService() {
    }

    MapService.findNodeById = function (node, nodeId) {
        if (node.$['ID'] === nodeId) {
            return node;
        }
        if (!node.node) {
            return null;
        }
        for (var index in node.node) {
            if (!node.node.hasOwnProperty(index)) {
                continue;
            }
            var found = MapService.findNodeById(node.node[index], nodeId);
            if (found) {
                return found;
            }
        }
        return null;
    };
    MapService.applyAction = function (file, action, callback) {
        var eventNode = MapService.findNodeById(file.rootNode, action.parent);
        if (!eventNode) {
            callback(new ServiceError_1.default(403, 'Cannot find root node with id:' + action.parent, 'applyAction'));
            return;
        }
        switch (action.event) {
            case 'nodeFold':
                eventNode.open = action.payload;
                break;
            case 'nodeDetailFold':
                eventNode.detailOpen = action.payload;
                break;
            case 'nodeText':
                eventNode.nodeMarkdown = action.payload;
                break;
            case 'nodeDetail':
                eventNode.detailMarkdown = action.payload;
                break;
            case 'nodeNote':
                eventNode.noteMarkdown = action.payload;
                break;
            case 'nodeModifyIcons':
                eventNode.icon = action.payload;
                break;
            case 'nodeSetAttribute':
                eventNode.addAttribute(action.payload.name, action.payload.value);
                break;
            case 'nodeRemoveAttribute':
                eventNode.removeAttribute(action.payload.name);
                break;
            case 'newNode':
                // TODO: sanitize node, add proper ids
                if (!eventNode.node) {
                    eventNode.node = [];
                }
                eventNode.node.push(action.payload);
                break;
            case 'deleteNode':
                //TODO delete eventNode;
                for (var i = 0; i < eventNode.node.length; i++) {
                    if (eventNode.node[i].$['ID'] === action.payload) {
                        eventNode.node.splice(i, 1);
                        break;
                    }
                }
                if (eventNode.node.length == 0) {
                    delete eventNode.node;
                    delete eventNode.open;
                }
                break;
            case 'nodeMove':
                var elementId = action.payload['elementId'];
                var fromIndex = action.payload['fromIndex'];
                var toParentId = action.payload['toParentId'];
                var toIndex = action.payload['toIndex'];
                var element = MapService.findNodeById(eventNode, elementId);
                if (!element) {
                    return callback(new ServiceError_1.default(403, 'Cannot find element to move: ' + elementId, 'applyAction'));
                }
                var toParent = MapService.findNodeById(file.rootNode, toParentId);
                if (!toParent) {
                    return callback(new ServiceError_1.default(403, 'Cannot find element to move to: ' + toParentId, 'applyAction'));
                }
                eventNode.node.splice(fromIndex, 1);
                if (eventNode.node.length == 0) {
                    delete eventNode.node;
                    delete eventNode.open;
                }
                toParent.node.splice(toIndex, 0, element);
                break;
            default:
                return callback(new ServiceError_1.default(403, 'Unimplemented event: ' + action.event, 'applyAction'));
        }
        callback();
    };
    return MapService;
}());
exports.default = MapService;
//# sourceMappingURL=MapService.js.map