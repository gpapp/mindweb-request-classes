import {AbstractRequest} from "./AbstractRequest";
export abstract class UnsubscribeRequest extends AbstractRequest {

    constructor(_fileId: string) {
        super(_fileId);
    }
}
export default UnsubscribeRequest;