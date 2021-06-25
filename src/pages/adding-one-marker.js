import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import tileLayer from '../util/tileLayer';

const center = [52.22977, 21.01178];

const MapWrapper = () => {
  return (
    <MapContainer center={center} zoom={18} scrollWheelZoom={false}>
      <TileLayer {...tileLayer} />

      <Marker position={center}>
        <Popup>Center Warsaw</Popup>
      </Marker>

    </MapContainer>
  )
}

export default MapWrapper;