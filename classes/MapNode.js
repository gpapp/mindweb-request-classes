"use strict";
var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array && function (d, b) {
                d.__proto__ = b;
            }) ||
            function (d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }

            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
Object.defineProperty(exports, "__esModule", {value: true});
var MapNodeCore_1 = require("./MapNodeCore");
var MapNode = (function (_super) {
    __extends(MapNode, _super);
    function MapNode(toCopy) {
        var _this = _super.call(this, toCopy.$) || this;
        if (toCopy.open) {
            _this.open = toCopy.open;
        }
        if (toCopy.nodeMarkdown) {
            _this.nodeMarkdown = toCopy.nodeMarkdown;
        }
        if (toCopy.detailMarkdown) {
            _this.detailMarkdown = toCopy.detailMarkdown;
        }
        if (toCopy.detailOpen) {
            _this.detailOpen = toCopy.detailOpen;
        }
        if (toCopy.noteMarkdown) {
            _this.noteMarkdown = toCopy.noteMarkdown;
        }
        if (toCopy.richcontent) {
            _this.richcontent = toCopy.richcontent;
        }
        if (toCopy.node) {
            _this.node = [];
            for (var i = 0; i < toCopy.node.length; i++) {
                _this.node.push(new MapNode(toCopy.node[i]));
            }
        }
        if (toCopy.icon) {
            _this.icon = [];
            for (var i = 0; i < toCopy.icon.length; i++) {
                _this.icon.push(new MapNodeCore_1.default(toCopy.icon[i].$));
            }
        }
        if (toCopy.attribute) {
            _this.attribute = [];
            for (var i = 0; i < toCopy.attribute.length; i++) {
                _this.attribute.push(new MapNodeCore_1.default(toCopy.attribute[i].$));
            }
        }
        if (toCopy.hook) {
            _this.hook = toCopy.hook;
        }
        return _this;
    }

    MapNode.prototype.hasIcon = function (name) {
        if (!this.icon) {
            return false;
        }
        for (var i = 0; i < this.icon.length; i++) {
            var curItem = this.icon[i];
            if (curItem.$['BUILTIN'] === name) {
                return true;
            }
        }
        return false;
    };
    MapNode.prototype.addIcon = function (name) {
        var newIcon = new MapNodeCore_1.default({"BUILTIN": name});
        if (!this.icon) {
            this.icon = [];
        }
        this.icon.push(newIcon);
    };
    MapNode.prototype.addAttribute = function (name, value) {
        if (!this.attribute) {
            this.attribute = [];
        }
        var done = false;
        for (var i = 0; i < this.attribute.length; i++) {
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
            this.attribute.push(new MapNodeCore_1.default({"NAME": name, "VALUE": value}));
        }
    };
    MapNode.prototype.removeAttribute = function (name) {
        if (!this.attribute) {
            return false;
        }
        for (var i = 0; i < this.attribute.length; i++) {
            if (this.attribute[i].$['NAME'] === name) {
                this.attribute.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    MapNode.prototype.getAttribute = function (name) {
        if (!this.attribute) {
            return null;
        }
        for (var i = 0; i < this.attribute.length; i++) {
            if (this.attribute[i].$['NAME'] === name) {
                return this.attribute[i].$['VALUE'];
            }
        }
        return null;
    };
    MapNode.prototype.recurseNodes = function (f) {
        for (var i = 0; i < this.node.length; i++) {
            var curNode = this.node[i];
            var stop_1 = f(curNode);
            if (!stop_1 && curNode.node) {
                curNode.recurseNodes(f);
            }
            if (stop_1) {
                return true;
            }
        }
        return false;
    };
    return MapNode;
}(MapNodeCore_1.default));
exports.default = MapNode;
//# sourceMappingURL=MapNode.js.map