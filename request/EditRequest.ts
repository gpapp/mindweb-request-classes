import EditAction from "../classes/EditAction";
import {AbstractRequest} from "./AbstractRequest";
export abstract class EditRequest extends AbstractRequest {

    get action(): EditAction {
        return this._action;
    }

    constructor(_fileId: string, private _action: EditAction) {
        super(_fileId);
    }
}
export default EditRequest;