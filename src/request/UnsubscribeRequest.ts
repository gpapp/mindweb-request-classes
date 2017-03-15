import {AbstractRequest} from "./AbstractRequest";
export abstract class UnsubscribeRequest extends AbstractRequest {
    get fileId(): string {
        return this._fileId;
    }

    constructor(private _fileId: string) {
        super();
    }
}
export default UnsubscribeRequest;