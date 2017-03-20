export abstract class AbstractMessage extends Object {
    private name: string;

    constructor() {
        super();
        this.name = this.constructor.name;
    }
}
export default AbstractMessage;