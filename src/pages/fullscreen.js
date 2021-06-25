import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';

const center = [52.22977, 21.01178];

const MapWrapper = () => {
  return (
    <MapContainer
      fullscreenControl={true}
      center={center}
      zoom={13}
      scrollWheelZoom={false}
    >

      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

    </MapContainer>
  )
}

export default MapWrapper;