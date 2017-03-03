import {AbstractResponse} from "./AbstractResponse";
import EditAction from "../classes/EditAction";
export class EditResponse extends AbstractResponse {
    action: EditAction;

    constructor(action: EditAction) {
        super();
        this.action = action;
    }
}
export default EditResponse;