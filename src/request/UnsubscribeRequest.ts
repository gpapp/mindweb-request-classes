import {AbstractRequest} from "./AbstractRequest";
export abstract class UnsubscribeRequest extends AbstractRequest {
    fileId: string;

    constructor(fileId: string) {
        super();
        this.fileId = fileId;
    }
}
export default UnsubscribeRequest;