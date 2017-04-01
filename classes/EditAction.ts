export enum ActionNames{
    nodeFold,
    nodeDetailFold,
    nodeText,
    nodeDetail,
    nodeNote,
    nodeModifyIcons,
    nodeSetAttribute,
    nodeRemoveAttribute,
    newNode,
    deleteNode,
    nodeMove
}

export default class EditAction {
    event: ActionNames;
    parent: string;
    payload: any;
}