"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class File {
    constructor(id, name, owner, viewers, editors, isShareable, isPublic, versions, tags) {
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.viewers = viewers;
        this.editors = editors;
        this.isShareable = isShareable;
        this.isPublic = isPublic;
        this.versions = versions;
        this.tags = tags;
    }
    canView(userId) {
        if (this.isPublic)
            return true;
        if (this.isShareable)
            return true;
        if (!userId) {
            return false;
        }
        const strUserId = userId.toString();
        if (this.canEdit(userId)) {
            return true;
        }
        if (this.viewers != null) {
            for (let i in this.viewers) {
                const strViewer = this.viewers[i].toString();
                if (strUserId === strViewer) {
                    return true;
                }
            }
        }
        return false;
    }
    canEdit(userId) {
        if (!userId) {
            return false;
        }
        const strUserId = userId.toString();
        if (this.canRemove(userId)) {
            return true;
        }
        if (this.editors != null) {
            for (let i in this.editors) {
                const strEditor = this.editors[i].toString();
                if (strUserId === strEditor) {
                    return true;
                }
            }
        }
        return false;
    }
    canRemove(userId) {
        if (!userId) {
            return false;
        }
        return this.owner.toString() === userId.toString();
    }
}
exports.default = File;
//# sourceMappingURL=MapContainer.js.map