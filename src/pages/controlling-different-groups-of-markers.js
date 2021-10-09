import {
  MapContainer,
  Popup,
  FeatureGroup,
  TileLayer,
  Marker,
  LayersControl,
  useMapEvent,
} from "react-leaflet";
import L from "leaflet";
import tileLayer from "../util/tileLayer";

const pointsA = [
  { lat: 52.230020586193795, lng: 21.01083755493164, title: "point A1" },
  { lat: 52.22924516170657, lng: 21.011320352554325, title: "point A2" },
  { lat: 52.229511304688444, lng: 21.01270973682404, title: "point A3" },
  { lat: 52.23040500771883, lng: 21.012146472930908, title: "point A4" },
];

const pointsB = [
  { lat: 52.229314161892106, lng: 21.012055277824405, title: "point B1" },
  { lat: 52.22950144756943, lng: 21.01193726062775, title: "point B2" },
  { lat: 52.22966573260081, lng: 21.011829972267154, title: "point B3" },
  { lat: 52.2298333027065, lng: 21.011744141578678, title: "point B4" },
  { lat: 52.2299680154701, lng: 21.01164758205414, title: "point B5" },
  { lat: 52.23012572745442, lng: 21.011583209037784, title: "point B6" },
  { lat: 52.230276867580336, lng: 21.01143836975098, title: "point B7" },
  { lat: 52.23046414919644, lng: 21.011341810226444, title: "point B8" },
];

const center = [52.22977, 21.01178];

const ControllingGroup = () => {
  const map = useMapEvent({
    overlayadd(e) {
      let bounds = new L.LatLngBounds();

      map.eachLayer(function (layer) {
        if (layer instanceof L.FeatureGroup) {
          bounds.extend(layer.getBounds());
        }
      });

      if (bounds.isValid()) {
        map.flyToBounds(bounds);
      }
    },
  });

  return null;
};

const MapWrapper = () => {
  return (
    <MapContainer center={center} zoom={18} scrollWheelZoom={false}>
      <LayersControl position="topright" collapsed={false}>
        <TileLayer {...tileLayer} />

        <LayersControl.Overlay name="point A">
          <FeatureGroup>
            {pointsA.map(({ lat, lng, title }, index) => (
              <Marker key={index} position={[lat, lng]}>
                <Popup>{title}</Popup>
              </Marker>
            ))}
          </FeatureGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="point B">
          <FeatureGroup>
            {pointsB.map(({ lat, lng, title }, index) => (
              <Marker key={index} position={[lat, lng]}>
                <Popup>{title}</Popup>
              </Marker>
            ))}
          </FeatureGroup>
        </LayersControl.Overlay>
      </LayersControl>

      <ControllingGroup />
    </MapContainer>
  );
};

export default MapWrapper;
