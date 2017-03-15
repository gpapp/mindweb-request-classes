import {AbstractRequest} from "./AbstractRequest";
export abstract class SubscribeRequest extends AbstractRequest {
    get fileId(): string {
        return this._fileId;
    }

    constructor(private _fileId: string) {
        super();
    }
}
export default SubscribeRequest;