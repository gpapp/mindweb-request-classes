import {EchoRequest} from "./EchoRequest";
import EditAction from "../classes/EditAction";
export abstract class EditRequest extends EchoRequest {
    get fileId(): string {
        return this._fileId;
    }

    get action(): EditAction {
        return this._action;
    }

    constructor(private _fileId: string, private _action: EditAction) {
        super();
    }
}
export default EditRequest;