export abstract class AbstractResponse {
    fileId: string;
    result: string;
    name: string;

    constructor() {
        this.name = this.constructor.name;
    }
}
export default AbstractResponse;