import {AbstractResponse} from "./AbstractResponse";
import MapContainer from "../classes/MapContainer";
export default class UnsubscribeResponse extends AbstractResponse {
    get mapContainer(): MapContainer {
        return this._mapContainer;
    }

    constructor(private _mapContainer: MapContainer) {
        super(_mapContainer ? _mapContainer.id : null);
    }
}