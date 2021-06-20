import React, { useState } from 'react';
import { MapContainer, useMapEvents, Rectangle, TileLayer } from 'react-leaflet';

const center = [52.22977, 21.01178];

function Place({ text }) {
  return <div className="marker-position">{text}</div>
}

function Location() {
  const [position, setPosition] = useState(null)

  const map = useMapEvents({
    dragend: (e) => {
      setPosition(e.target.getBounds());
    },
    zoomend: (e) => {
      setPosition(e.target.getBounds());
    }
  })
  return position === null
    ? <Place text={JSON.stringify(map.getBounds(), null, 2)} />
    : (
      <div>
        <Place text={JSON.stringify(position, null, 2)} />
        <Rectangle bounds={position} color={'salmon'} weight={20} fillOpacity={0.1} />
      </div>
    );
}

// TODO: potrzebny dodanie koloru i rectangle dynamicznie
const MapWrapper = () => {
  return (
    <MapContainer center={center} zoom={18} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Location />
    </MapContainer>
  )
}

export default MapWrapper;