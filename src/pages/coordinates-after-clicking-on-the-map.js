import React, { useState } from 'react';
import { MapContainer, useMapEvents, TileLayer, } from 'react-leaflet';

function Location() {
  const [position, setPosition] = useState(null)

  useMapEvents({
    click: (e) => {
      setPosition(e.latlng);
    },
  })

  return position === null ? <div className="marker-position">Click on map</div> : (
    <div className="marker-position">{JSON.stringify(position, null, 2)}</div>
  );
}

const MapWrapper = () => {

  const position = [52.22977, 21.01178];
  return (
    <MapContainer center={position} zoom={18} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Location />
    </MapContainer>
  )
}

export default MapWrapper;