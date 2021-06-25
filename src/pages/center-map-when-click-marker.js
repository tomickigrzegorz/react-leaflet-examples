import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import tileLayer from '../util/tileLayer';

const center = [52.22977, 21.01178];
const zoom = 18;

const points = [
  {
    lat: 52.230020586193795,
    lng: 21.01083755493164,
    title: 'point 1'
  },
  {
    lat: 52.22924516170657,
    lng: 21.011320352554325,
    title: 'point 2'
  },
  {
    lat: 52.229511304688444,
    lng: 21.01270973682404,
    title: 'point 3'
  },
  {
    lat: 52.23040500771883,
    lng: 21.012146472930908,
    title: 'point 4'
  },
];

const MyMarkers = ({ map, data }) => {

  return data.map(({ lat, lng, title }, index) => (
    <Marker
      key={index}
      position={{ lat, lng }}
      eventHandlers={{
        click(e) {
          const location = e.target.getLatLng();
          map.flyToBounds([location]);
        }
      }}
    >
      <Popup>{title}</Popup>
    </Marker>
  ));
}

const MapWrapper = () => {
  const [map, setMap] = useState(null)

  return (
    <MapContainer
      whenCreated={setMap}
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
    >

      <TileLayer {...tileLayer} />

      <MyMarkers map={map} data={points} />

    </MapContainer>
  )
}

export default MapWrapper;