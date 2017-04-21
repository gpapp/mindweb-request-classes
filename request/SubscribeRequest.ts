import {AbstractRequest} from "./AbstractRequest";
export abstract class SubscribeRequest extends AbstractRequest {
    constructor(_fileId: string) {
        super(_fileId);
    }
}
export default SubscribeRequest;