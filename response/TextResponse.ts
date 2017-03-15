import {AbstractResponse} from "./AbstractResponse";
export default class TextResponse extends AbstractResponse {
    get message(): string {
        return this._message;
    }

    constructor(private  _message: string) {
        super();
    }
}