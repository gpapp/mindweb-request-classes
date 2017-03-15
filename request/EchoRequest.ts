import {AbstractRequest} from "./AbstractRequest";
export abstract class EchoRequest extends AbstractRequest {
    get content(): string {
        return this._content;
    }

    constructor(private _content?: string) {
        super();
    }
}
export default EchoRequest;