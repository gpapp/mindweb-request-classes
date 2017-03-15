import {MindwebService} from "../service/MindwebService";
import {AbstractResponse} from "../response/AbstractResponse";
import ErrorResponse from "../response/ErrorResponse";
export abstract class AbstractRequest {
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
    private name: string;

    protected abstract internalExecute(userId: string, kafkaService: MindwebService, callback: (response: AbstractResponse) => void): void;

    constructor() {
        this.name = this.constructor.name;
    }

    public execute(sessionId: string, userId: string, service: MindwebService, callback: (response) => void): void {
        this._sessionId = sessionId;
        try {
            this.internalExecute(userId, service, function (response: AbstractResponse) {
                callback(JSON.stringify(response));
            });
        } catch (e) {
            callback(JSON.stringify(new ErrorResponse(e)));
        }
    }
}
export default AbstractRequest;
