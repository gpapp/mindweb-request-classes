export default class MapContainer {
    id: string;
    name: string;
    owner: string;
    isShareable: boolean;
    isPublic: boolean;
    viewers: (string)[];
    editors: (string)[];
    versions: (string)[];
    tags: string[];

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