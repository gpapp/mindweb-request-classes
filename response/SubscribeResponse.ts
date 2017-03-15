import {AbstractResponse} from "./AbstractResponse";
import MapContainer from "../classes/MapContainer";
export default class SubscribeResponse extends AbstractResponse {
    get mapContainter(): MapContainer {
        return this._mapContainer;
    }

    constructor(private _mapContainer: MapContainer) {
        super();
    }
}