import {AbstractResponse} from "./AbstractResponse";
export default class JoinResponse extends AbstractResponse {
    userId: string;

    constructor(userId: string) {
        super();
        this.userId = userId;
    }
}