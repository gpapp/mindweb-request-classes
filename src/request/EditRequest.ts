import {EchoRequest} from "./EchoRequest";
import EditAction from "../classes/EditAction";
export abstract class EditRequest extends EchoRequest {

    fileId: string;
    action: EditAction;

    constructor(fileId: string, action: EditAction) {
        super();
        this.fileId = fileId;
        this.action = action;
    }
}
export default EditRequest;