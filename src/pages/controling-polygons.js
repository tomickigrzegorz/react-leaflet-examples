import {
  MapContainer,
  Polygon,
  FeatureGroup,
  TileLayer,
  LayersControl,
  useMapEvent,
} from "react-leaflet";
import L from "leaflet";
import tileLayer from "../util/tileLayer";

const center = [52.22977, 21.01178];

const River = [
  [52.261433597272294, 21.01272583007813],
  [52.259857564663236, 21.008262634277347],
  [52.2485084763669, 21.019763946533207],
  [52.24377883252849, 21.026287078857425],
  [52.240835688576325, 21.032123565673828],
  [52.235474460511696, 21.037960052490238],
  [52.22800971166361, 21.04465484619141],
  [52.2249603686772, 21.047916412353516],
  [52.23600009974023, 21.042766571044925],
  [52.24966453484508, 21.023368835449222],
  [52.26132853017426, 21.01272583007813],
];

const Place = [
  [52.23295130556395, 20.998821258544925],
  [52.230007443518716, 20.98474502563477],
  [52.224750061441355, 20.98920822143555],
  [52.22769427210073, 21.002597808837894],
];

const ControllingGroup = () => {
  const map = useMapEvent({
    layeradd() {
      let bounds = new L.LatLngBounds();
      map.eachLayer(function (layer) {
        if (layer instanceof L.FeatureGroup) {
          bounds.extend(layer.getBounds());
        }
      });

      if (bounds.isValid()) {
        map.flyToBounds([bounds]);
      }
    },
  });

  return null;
};

const riverColor = { color: "red" };
const placeColor = { color: "blue" };

const MapWrapper = () => {
  return (
    <MapContainer center={center} zoom={18} scrollWheelZoom={false}>
      <TileLayer {...tileLayer} />

      <LayersControl position="topright" collapsed={false}>
        <LayersControl.Overlay name="River">
          <FeatureGroup>
            <Polygon pathOptions={riverColor} positions={River} />
          </FeatureGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Place">
          <FeatureGroup>
            <Polygon pathOptions={placeColor} positions={Place} />
          </FeatureGroup>
        </LayersControl.Overlay>
      </LayersControl>

      <ControllingGroup />
    </MapContainer>
  );
};

export default MapWrapper;
