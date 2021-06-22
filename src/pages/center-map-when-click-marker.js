import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

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

function MyMarkers(props) {
  const map = useMap();
  const { data } = props;

  return data.map((item, index) => (
    <Marker
      key={index}
      position={{ lat: item.lat, lng: item.lng }}
      eventHandlers={{
        click(e) {
          const location = e.target.getLatLng();
          setTimeout(() => {
            map.flyToBounds([location]);
          }, 100);
        }
      }}
    >
      <Popup>{item.title}</Popup>
    </Marker>
  ));
}

const MapWrapper = () => {

  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MyMarkers data={points} />
    </MapContainer>
  )
}

export default MapWrapper;