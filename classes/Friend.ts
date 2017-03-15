export default class Friend {
    public id: string;
    public owner: string;
    public alias: string;
    public linkedUser: string;
    public tags: string[];
    public created: string;
    public modified: string;

    constructor(id: string,
                owner: string,
                alias: string,
                linkedUser: string,
                tags: string[],
                created: string,
                modified: string) {
        this.id = id;
        this.owner = owner;
        this.alias = alias;
        this.linkedUser = linkedUser;
        this.tags = tags;
        this.created = created;
        this.modified = modified;
    }
}