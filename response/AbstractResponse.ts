import {AbstractMessage} from "../classes/AbstractMessage";
export abstract class AbstractResponse extends AbstractMessage {
    get correlationId(): string {
        return this._correlationId;
    }

    set correlationId(value: string) {
        this._correlationId = value;
    }

    result: string;

    private _correlationId: string;

    constructor(fileId: string) {
        super(fileId);
    }
}
export default AbstractResponse;