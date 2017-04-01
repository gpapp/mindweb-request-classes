import MapNode from "../classes/MapNode";
import FileContent from "../classes/MapContent";
import EditAction, {ActionNames} from "../classes/EditAction";
import ServiceError from "../classes/ServiceError";

export default class MapService {
    static findNodeById(node: MapNode, nodeId: string): MapNode {
        if (node.$['ID'] === nodeId) {
            return node;
        }
        if (!node.node) {
            return null;
        }
        for (let index in node.node) {
            if (!node.node.hasOwnProperty(index)) {
                continue;
            }
            const found = MapService.findNodeById(node.node[index], nodeId);
            if (found) {
                return found;
            }
        }
        return null;
    }

    static applyAction(file: FileContent, action: EditAction, callback: (error?: ServiceError) => void) {
        const eventNode: MapNode = MapService.findNodeById(file.rootNode, action.parent);
        if (!eventNode) {
            callback(new ServiceError(403, 'Cannot find root node with id:' + action.parent, 'applyAction'));
            return;
        }
        switch (action.event) {
            case ActionNames.nodeFold:
                eventNode.open = action.payload;
                break;
            case ActionNames.nodeDetailFold:
                eventNode.detailOpen = action.payload;
                break;
            case ActionNames.nodeText:
                eventNode.nodeMarkdown = action.payload;
                break;
            case ActionNames.nodeDetail:
                eventNode.detailMarkdown = action.payload;
                break;
            case ActionNames.nodeNote:
                eventNode.noteMarkdown = action.payload;
                break;
            case ActionNames.nodeModifyIcons:
                eventNode.icon = action.payload;
                break;
            case ActionNames.nodeSetAttribute:
                eventNode.addAttribute(action.payload.name, action.payload.value);
                break;
            case ActionNames.nodeRemoveAttribute:
                eventNode.removeAttribute(action.payload.name);
                break;
            case ActionNames.newNode:
                // TODO: sanitize node, add proper ids
                if (!eventNode.node) {
                    eventNode.node = [];
                }
                eventNode.node.push(action.payload);
                break;
            case ActionNames.deleteNode:
                //TODO delete eventNode;
                for (let i = 0; i < eventNode.node.length; i++) {
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
            case ActionNames.nodeMove:
                const elementId: string = action.payload['elementId'];
                const fromIndex: number = action.payload['fromIndex'];
                const toParentId: string = action.payload['toParentId'];
                const toIndex: number = action.payload['toIndex'];
                const element: MapNode = MapService.findNodeById(eventNode, elementId);
                if (!element) {
                    return callback(new ServiceError(403, 'Cannot find element to move: ' + elementId, 'applyAction'));
                }
                const toParent: MapNode = MapService.findNodeById(file.rootNode, toParentId);
                if (!toParent) {
                    return callback(new ServiceError(403, 'Cannot find element to move to: ' + toParentId, 'applyAction'));
                }
                eventNode.node.splice(fromIndex, 1);
                if (eventNode.node.length == 0) {
                    delete eventNode.node;
                    delete eventNode.open;
                }
                toParent.node.splice(toIndex, 0, element);
                break;
            default:
                return callback(new ServiceError(403, 'Unimplemented event: ' + action.event, 'applyAction'));
        }
        callback();
    }
}
