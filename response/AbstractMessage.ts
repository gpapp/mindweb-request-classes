export abstract class AbstractMessage {
    private name: string;

    constructor() {
        this.name = this.constructor.name;
    }
}
export default AbstractMessage;