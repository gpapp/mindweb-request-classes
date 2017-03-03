import {AbstractResponse} from "./AbstractResponse";
export default class TextResponse extends AbstractResponse {
    message: string;

    constructor(msg?: string) {
        super();
        this.message = msg;
    }
}