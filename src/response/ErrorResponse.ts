import {AbstractResponse} from "./AbstractResponse";
export default class ErrorResponse extends AbstractResponse {
    errorName: string;
    errorMessage: string;

    constructor(e?: Error) {
        super();
        this.result = "error";
        if (e) {
            this.errorName = e.name;
            this.errorMessage = e.message;
        }
    }
}
