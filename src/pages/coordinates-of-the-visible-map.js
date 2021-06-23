import React, { useEffect, useState } from 'react';
import { MapContainer, Rectangle, useMap, TileLayer } from 'react-leaflet';
import L from 'leaflet';

const center = [52.22977, 21.01178];

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`.toString();
}

function setRentacle(bounds) {
  return bounds.map((bound, index) => (
    <Rectangle
      key={index}
      bounds={bound}
      color={getRandomColor()}
      weight={10}
      fillOpacity={0.1} />
  ));
}

function contentText(getBounds) {
  const { _northEast, _southWest } = getBounds;
  return `SouthWest: ${_southWest}, NorthEast: ${_northEast}`;
}

function Location() {
  const map = useMap();
  const [bounds, setBounds] = useState([])

  useEffect(() => {
    if (map) {
      const info = L.DomUtil.create('div', 'legend');

      const positon = L.Control.extend({
        options: {
          position: 'bottomleft'
        },

        onAdd: function () {
          info.innerHTML = contentText(map.getBounds());
          return info;
        }
      })

      map.addControl(new positon());

      map.on('moveend zoomend', () => {
        const bounds = map.getBounds();
        info.textContent = contentText(bounds);
        setBounds(b => [...b, bounds])
      });
    }
  }, [map])

  return bounds?.length <= 0 ? null : setRentacle(bounds);
}

const MapWrapper = () => {
  return (
    <MapContainer center={center} zoom={18} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Location />
    </MapContainer>
  )
}

export default MapWrapper;