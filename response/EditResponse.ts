import {AbstractResponse} from "./AbstractResponse";
import EditAction from "../classes/EditAction";
export default class EditResponse extends AbstractResponse {

    get action(): EditAction {
        return this._action;
    }

    constructor(_fileId: string, private _action: EditAction) {
        super(_fileId);
    }
}