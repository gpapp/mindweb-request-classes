export abstract class AbstractMessage extends Object {
    private name: string;

    get fileId(): string {
        return this._fileId;
    }

    constructor(private _fileId: string) {
        super();
        this.name = this.constructor.name;
    }
}
export default AbstractMessage;