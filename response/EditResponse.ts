import {AbstractResponse} from "./AbstractResponse";
import EditAction from "../classes/EditAction";
export default class EditResponse extends AbstractResponse {
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