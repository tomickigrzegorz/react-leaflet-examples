import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import tileLayer from '../util/tileLayer';

const center = [52.22977, 21.01178];

const MapWrapper = () => {
  return (
    <MapContainer zoomControl={false} center={center} zoom={18} scrollWheelZoom={false}>

      <ZoomControl position={'topright'} />

      <TileLayer {...tileLayer} />
    </MapContainer>
  )
}

export default MapWrapper;