import {AbstractResponse} from "./AbstractResponse";
export default class JoinResponse extends AbstractResponse {
    get userId() {
        return this._userId;
    }

    constructor(_fileId: string, private _userId: string) {
        super(_fileId);
    }
}