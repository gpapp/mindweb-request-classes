import {AbstractRequest} from "./AbstractRequest";
export abstract class SubscribeRequest extends AbstractRequest {
    fileId: string;

    constructor(fileId: string) {
        super();
        this.fileId = fileId;
    }
}
export default SubscribeRequest;