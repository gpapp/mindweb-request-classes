import {AbstractResponse} from "./AbstractResponse";
export default class JoinResponse extends AbstractResponse {
    get userId() {
        return this._userId;
    }

    constructor(private _userId: string) {
        super();
    }
}