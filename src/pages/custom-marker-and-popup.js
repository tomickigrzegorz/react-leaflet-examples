import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import newMarker from "../data/pin.png";
import styles from "./custom-marker-and-popup.module.css";
import tileLayer from "../util/tileLayer";

const center = [52.22977, 21.01178];

const pointerIcon = new L.Icon({
  iconUrl: newMarker,
  iconSize: [50, 58], // size of the icon
  iconAnchor: [20, 58], // changed marker icon position
  popupAnchor: [0, -60], // changed popup position
});

const customPopup = (
  <iframe
    width="auto"
    title="Marek Grechuta"
    height="310"
    src="https://www.youtube.com/embed/glKDhBuoRUs"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

const MapWrapper = () => {
  return (
    <MapContainer center={center} zoom={18} scrollWheelZoom={false}>
      <TileLayer {...tileLayer} />

      <Marker icon={pointerIcon} position={center}>
        <Popup className={styles.newPopup} minWidth={300}>
          {customPopup}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapWrapper;
