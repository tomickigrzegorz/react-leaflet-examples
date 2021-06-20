import React, { useState } from 'react';
import { MapContainer, useMap, FeatureGroup, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [52.2295, 21.01];

const points = [
  {
    id: '1',
    lat: 52.228785157729114,
    lng: 21.006867885589603,
    title: 'Marker 1'
  },
  {
    id: '2',
    lat: 52.22923201880194,
    lng: 21.00897073745728,
    title: 'Marker 2'
  },
  {
    id: '3',
    lat: 52.22963944703663,
    lng: 21.01091265678406,
    title: 'Marker 3'
  },
  {
    id: '4',
    lat: 52.229928587386496,
    lng: 21.01218938827515,
    title: 'Marker 4'
  },
]

function MyComponent({ latLng }) {
  const map = useMap();

  if (latLng) {
    // TODO: jak otworzyć popup
    map.flyToBounds([latLng]);
  }

  return null
}

const MapWrapper = () => {
  const [latLng, setlatLng] = useState()

  return (
    <>
      <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FeatureGroup>
          {points.map(({ lat, lng, title, id }, index) => (
            <Marker key={index} position={[lat, lng]} title={id}>
              <Popup>{title}</Popup>
            </Marker>
          ))}
        </FeatureGroup>

        <MyComponent latLng={latLng} />
      </MapContainer>

      <div className="container space-between">
        {points.map(({ lat, lng, title, id }, index) => (
          <a key={index} href={'#' + id} className="marker-click" onClick={(e) => {
            e.preventDefault();
            setlatLng([lat, lng]);
          }}>{title}</a>
        ))}
      </div>

    </>
  )
}

export default MapWrapper;