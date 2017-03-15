"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var Friend = (function () {
    function Friend(id, owner, alias, linkedUser, tags, created, modified) {
        this.id = id;
        this.owner = owner;
        this.alias = alias;
        this.linkedUser = linkedUser;
        this.tags = tags;
        this.created = created;
        this.modified = modified;
    }

    return Friend;
}());
exports.default = Friend;
//# sourceMappingURL=Friend.js.map