import React from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';

const MapWrapper = () => {
  const position = [52.22977, 21.01178];
  return (
    <MapContainer zoomControl={false} center={position} zoom={18} scrollWheelZoom={false}>
      <ZoomControl position={'topright'} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}

export default MapWrapper;