import MapNode from "./MapNode";
export default class MapContent {
    public rootNode: MapNode;
    public $;

    public constructor(data?: string|any) {
        if (!data) {
            return;
        }
        if (data instanceof Object) {
            this.$ = data.$;
            this.rootNode = new MapNode(data.rootNode);
        } else {
            const parsed = JSON.parse(data);
            this.$ = parsed.$;
            this.rootNode = new MapNode(parsed.rootNode);
        }
    }

    public recurseNodes(f: (node: MapNode) => boolean): boolean {
        return this.rootNode.recurseNodes(f);
    }

    public findNodeById(id: string): MapNode {
        let retval = null;
        this.recurseNodes(function (node: MapNode): boolean {
            if (node.$['ID'] === id) {
                retval = node;
                return true;
            }
        });
        return retval;
    }
}