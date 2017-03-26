import {AbstractResponse} from "./AbstractResponse";
import MapContainer from "../classes/MapContainer";
import MapContent from "../classes/MapContent";
export default class SubscribeResponse extends AbstractResponse {
    get mapContainer(): MapContainer {
        return this._mapContainer;
    }

    get mapContent(): MapContent {
        return this._mapContent;
    }

    constructor(private _mapContainer: MapContainer, private _mapContent: MapContent) {
        super();
    }
}