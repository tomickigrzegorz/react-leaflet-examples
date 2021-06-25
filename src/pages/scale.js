import { MapContainer, TileLayer, ScaleControl } from 'react-leaflet';

const center = [52.22977, 21.01178];

const MapWrapper = () => {
  return (
    <MapContainer
      center={center}
      zoom={18}
      scrollWheelZoom={true}
    >

      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ScaleControl imperial={false} />

    </MapContainer>
  )
}

export default MapWrapper;