import {IMessage} from "websocket";
import {AbstractResponse} from "../response/AbstractResponse";
import {AbstractMessage} from "../response/AbstractMessage";

export default class ResponseFactory {

    static create(message: IMessage): AbstractMessage {
        const payload = JSON.parse(message.utf8Data);

        if (!payload.name || !/^[$_a-z][$_a-z0-9.]*$/i.test(payload.name)) {
            throw new Error("Invalid payload class");
        }
        const cmdClass = require("../response/" + payload.name);
        const newclass = new cmdClass.default();
        if (!(newclass instanceof AbstractResponse)) {
            throw new Error("Invalid payload class");
        }
        for (let prop  in payload) {
            if (payload.hasOwnProperty(prop)) {
                newclass[prop] = payload[prop];
            }
        }
        return newclass;
    }
}