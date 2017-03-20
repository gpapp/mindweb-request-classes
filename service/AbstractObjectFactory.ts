import {AbstractMessage} from "../classes/AbstractMessage";

export abstract class AbstractObjectFactory<T extends AbstractMessage> {
    private registry: Map<string, {new(...args: any[]): T;}> = new Map();


    constructor() {
        this.initialize();
    }

    protected registerClass(name: string, c: {new(...args: any[]): T ;}) {
        this.registry.set(name, c);
    }


    create(message: string): T {
        const payload = JSON.parse(message, (key: any, value: any): any => {
            if (/[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-2][0-9]:[0-5][0-9]:[0-5][0-9].[0-9]{0,4}Z/.test(value)) {
                return new Date(Date.parse(value));
            } else {
                return value;
            }
        });

        if (!payload.name || !/^[$_a-z][$_a-z0-9.]*$/i.test(payload.name)) {
            throw new Error("Invalid payload class");
        }
        if (!this.registry.has(payload.name)) {
            throw new Error("Unregistered payload class");
        }
        const objectConstructor = this.registry.get(payload.name);

        const newclass: AbstractMessage = new objectConstructor();


        for (let prop  in payload) {
            if (payload.hasOwnProperty(prop)) {
                if (newclass[prop] instanceof Date) {
                    newclass[prop] = Date.parse(payload[prop]);
                } else {
                    newclass[prop] = payload[prop];
                }
            }
        }
        return newclass as T;
    }

    abstract initialize(): void;
}
export default AbstractObjectFactory;