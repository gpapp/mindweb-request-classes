import {AbstractResponse} from "./AbstractResponse";
import MapVersion from "../classes/MapVersion";
export default class SubscribeResponse extends AbstractResponse {
    get mapVersion(): MapVersion {
        return this._mapVersion;
    }


    constructor(private _mapVersion: MapVersion) {
        super(_mapVersion ? _mapVersion.container.id : null);
    }
}