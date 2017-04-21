import {AbstractMessage} from "../classes/AbstractMessage";
export abstract class AbstractBroadcast extends AbstractMessage {
    constructor(fileId: string) {
        super(fileId);
    }
}
export default AbstractBroadcast;