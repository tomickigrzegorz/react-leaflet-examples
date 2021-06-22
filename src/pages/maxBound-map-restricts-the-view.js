import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';

const center = [52.22977, 21.01178];

const MapWrapper = () => {
  const [map, setMap] = useState(null)
  useEffect(() => {
    if (map) {
      const southWest = new L.LatLng(52.228509, 21.008348);
      const northEast = new L.LatLng(52.231029, 21.01521);
      const bounds = new L.LatLngBounds(southWest, northEast);

      map.setMaxBounds(map.getBounds());

      map.fitBounds(bounds, { reset: true });
    }

  }, [map])

  return (

    <MapContainer whenCreated={setMap} center={center} zoom={18} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}

export default MapWrapper;