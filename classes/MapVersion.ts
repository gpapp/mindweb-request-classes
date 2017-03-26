import MapContent from "./MapContent";
import MapContainer from "./MapContainer";
export default class MapVersion {
    version: number;
    content: MapContent;
    file: MapContainer;

    constructor(version: number, content: MapContent) {
        this.version = version;
        this.content = content;
    }
}