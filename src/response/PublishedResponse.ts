import {AbstractResponse} from "./AbstractResponse";
export default class PublishedResponse {
    originSessionId: string;
    response: AbstractResponse;

    constructor(originSessionId: string, payload: AbstractResponse) {
        this.originSessionId = originSessionId;
        this.response = payload;
    }
}