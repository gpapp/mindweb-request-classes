import {AbstractResponse} from "./AbstractResponse";
export default class PublishedResponse {
    get response(): AbstractResponse {
        return this._response;
    }

    get originSessionId(): string {
        return this._originSessionId;
    }


    constructor(private _originSessionId: string, private _response: AbstractResponse) {
    }
}