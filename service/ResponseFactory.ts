import {AbstractObjectFactory} from "./AbstractObjectFactory";
import {AbstractMessage} from "../classes/AbstractMessage";
import TextResponse from "../response/TextResponse";
import EditResponse from "../response/EditResponse";
import ErrorResponse from "../response/ErrorResponse";
import JoinResponse from "../response/JoinResponse";
import SubscribeResponse from "../response/SubscribeResponse";
import UnsubscribeResponse from "../response/UnsubscribeResponse";
/**
 * Created by gpapp on 2017.02.01..
 */
export default class ResponseFactory extends AbstractObjectFactory<AbstractMessage> {
    initialize() {
        this.registerClass("TextResponse", TextResponse);
        this.registerClass("EditResponse", EditResponse);
        this.registerClass("ErrorResponse", ErrorResponse);
        this.registerClass("JoinResponse", JoinResponse);
        this.registerClass("SubscribeResponse", SubscribeResponse);
        this.registerClass("UnsubscribeResponse", UnsubscribeResponse);
    }

    private static _instance;

    static get instance(): ResponseFactory {
        if (!ResponseFactory._instance) {
            ResponseFactory._instance = new ResponseFactory();
        }
        return ResponseFactory._instance;
    }

    static create(message: string): AbstractMessage {
        return ResponseFactory.instance.create(message);
    }
}