export default class File {
    id: string;
    name: string;
    owner: string;
    isShareable: boolean;
    isPublic: boolean;
    viewers: (string)[];
    editors: (string)[];
    versions: (string)[];
    tags: string[];

    public constructor(id: string,
                       name: string, owner: string,
                       viewers: (string)[],
                       editors: (string)[],
                       isShareable: boolean,
                       isPublic: boolean,
                       versions: (string)[],
                       tags: string[]) {
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

    public canView(userId: string): boolean {
        if (this.isPublic) return true;
        if (this.isShareable) return true;
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

    public canEdit(userId: string): boolean {
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

    public canRemove(userId: string): boolean {
        if (!userId) {
            return false;
        }
        return this.owner.toString() === userId.toString();
    }
}