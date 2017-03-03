import {AbstractRequest} from "./AbstractRequest";
export abstract class EchoRequest extends AbstractRequest {
    content: string;

    constructor(content?: string) {
        super();
        this.content = content;
    }
}
export default EchoRequest;