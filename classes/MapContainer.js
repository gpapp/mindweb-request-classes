"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var File = (function () {
    function File(id, name, owner, viewers, editors, isShareable, isPublic, versions, tags) {
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

    File.prototype.canView = function (userId) {
        if (this.isPublic)
            return true;
        if (this.isShareable)
            return true;
        if (!userId) {
            return false;
        }
        var strUserId = userId.toString();
        if (this.canEdit(userId)) {
            return true;
        }
        if (this.viewers != null) {
            for (var i in this.viewers) {
                var strViewer = this.viewers[i].toString();
                if (strUserId === strViewer) {
                    return true;
                }
            }
        }
        return false;
    };
    File.prototype.canEdit = function (userId) {
        if (!userId) {
            return false;
        }
        var strUserId = userId.toString();
        if (this.canRemove(userId)) {
            return true;
        }
        if (this.editors != null) {
            for (var i in this.editors) {
                var strEditor = this.editors[i].toString();
                if (strUserId === strEditor) {
                    return true;
                }
            }
        }
        return false;
    };
    File.prototype.canRemove = function (userId) {
        if (!userId) {
            return false;
        }
        return this.owner.toString() === userId.toString();
    };
    return File;
}());
exports.default = File;
//# sourceMappingURL=MapContainer.js.map