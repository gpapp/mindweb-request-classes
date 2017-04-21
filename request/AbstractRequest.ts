import {MindwebService} from "../service/MindwebService";
import {AbstractResponse} from "../response/AbstractResponse";
import ErrorResponse from "../response/ErrorResponse";
import {AbstractMessage} from "../classes/AbstractMessage";
export abstract class AbstractRequest extends AbstractMessage {
    get correlationId(): string {
        return this._correlationId;
    }

    set correlationId(value: string) {
        this._correlationId = value;
    }

    get sessionId(): string {
        return this._sessionId;
    }

    private _correlationId: string;
    private _sessionId: string;

    protected abstract internalExecute(userId: string, kafkaService: MindwebService, callback: (response: AbstractResponse) => void): void;

    constructor(fileId: string) {
        super(fileId);
    }

    public execute(sessionId: string, userId: string, service: MindwebService, callback: (response: AbstractResponse) => void): void {
        const parent: AbstractRequest = this;
        this._sessionId = sessionId;
        try {
            this.internalExecute(userId, service, function (response: AbstractResponse) {
                response.correlationId = parent.correlationId;
                callback(response);
            });
        } catch (e) {
            const response = new ErrorResponse(e);
            response.correlationId = parent.correlationId;
            callback(response);
        }
    }
}
export default AbstractRequest;
