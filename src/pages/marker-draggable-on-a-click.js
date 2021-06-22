import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const center = [52.22977, 21.01178];

const MapWrapper = () => {
  const [draggable, setDraggable] = useState(false)

  return (
    <MapContainer center={center} zoom={18} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} draggable={draggable} eventHandlers={{
        click() {
          setDraggable(true)
        }
      }}>
        <Popup>Center Warsaw</Popup>
      </Marker>

    </MapContainer>
  )
}

export default MapWrapper;