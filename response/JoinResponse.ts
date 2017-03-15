import {AbstractResponse} from "./AbstractResponse";
export default class JoinResponse extends AbstractResponse {
    get fileId(): string {
        return this._fileId;
    }

    get userId() {
        return this._userId;
    }

    constructor(private _userId: string, private _fileId: string) {
        super();
    }
}