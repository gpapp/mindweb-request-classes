"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MapNodeCore_1 = require("./MapNodeCore");
class MapNode extends MapNodeCore_1.default {
    constructor(toCopy) {
        super(toCopy.$);
        if (toCopy.open) {
            this.open = toCopy.open;
        }
        if (toCopy.nodeMarkdown) {
            this.nodeMarkdown = toCopy.nodeMarkdown;
        }
        if (toCopy.detailMarkdown) {
            this.detailMarkdown = toCopy.detailMarkdown;
        }
        if (toCopy.detailOpen) {
            this.detailOpen = toCopy.detailOpen;
        }
        if (toCopy.noteMarkdown) {
            this.noteMarkdown = toCopy.noteMarkdown;
        }
        if (toCopy.richcontent) {
            this.richcontent = toCopy.richcontent;
        }
        if (toCopy.node) {
            this.node = [];
            for (let i = 0; i < toCopy.node.length; i++) {
                this.node.push(new MapNode(toCopy.node[i]));
            }
        }
        if (toCopy.icon) {
            this.icon = [];
            for (let i = 0; i < toCopy.icon.length; i++) {
                this.icon.push(new MapNodeCore_1.default(toCopy.icon[i].$));
            }
        }
        if (toCopy.attribute) {
            this.attribute = [];
            for (let i = 0; i < toCopy.attribute.length; i++) {
                this.attribute.push(new MapNodeCore_1.default(toCopy.attribute[i].$));
            }
        }
        if (toCopy.hook) {
            this.hook = toCopy.hook;
        }
    }
    hasIcon(name) {
        if (!this.icon) {
            return false;
        }
        for (let i = 0; i < this.icon.length; i++) {
            const curItem = this.icon[i];
            if (curItem.$['BUILTIN'] === name) {
                return true;
            }
        }
        return false;
    }
    addIcon(name) {
        const newIcon = new MapNodeCore_1.default({ "BUILTIN": name });
        if (!this.icon) {
            this.icon = [];
        }
        this.icon.push(newIcon);
    }
    addAttribute(name, value) {
        if (!this.attribute) {
            this.attribute = [];
        }
        let done = false;
        for (let i = 0; i < this.attribute.length; i++) {
            if (this.attribute[i].$['NAME'] === name) {
                if (!done) {
                    this.attribute[i].$['VALUE'] = value;
                    done = true;
                }
                else {
                    this.attribute.splice(i, 1);
                }
            }
        }
        if (!done) {
            this.attribute.push(new MapNodeCore_1.default({ "NAME": name, "VALUE": value }));
        }
    }
    removeAttribute(name) {
        if (!this.attribute) {
            return false;
        }
        for (let i = 0; i < this.attribute.length; i++) {
            if (this.attribute[i].$['NAME'] === name) {
                this.attribute.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    getAttribute(name) {
        if (!this.attribute) {
            return null;
        }
        for (let i = 0; i < this.attribute.length; i++) {
            if (this.attribute[i].$['NAME'] === name) {
                return this.attribute[i].$['VALUE'];
            }
        }
        return null;
    }
    recurseNodes(f) {
        for (let i = 0; i < this.node.length; i++) {
            const curNode = this.node[i];
            const stop = f(curNode);
            if (!stop && curNode.node) {
                curNode.recurseNodes(f);
            }
            if (stop) {
                return true;
            }
        }
        return false;
    }
}
exports.default = MapNode;
//# sourceMappingURL=MapNode.js.map