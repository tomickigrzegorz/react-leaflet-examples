import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';

const center = [52.22977, 21.01178];

const MapWrapper = () => {
  const [map, setMap] = useState(null)

  useEffect(() => {
    if (map) {

      const info = L.DomUtil.create('div', 'legend');

      const positon = L.Control.extend({
        options: {
          position: 'bottomleft'
        },

        onAdd: function () {
          info.textContent = 'move the map';
          return info;
        }
      })

      map.addControl(new positon());

      const bounds = map.getBounds();

      map.setMaxBounds(bounds);
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