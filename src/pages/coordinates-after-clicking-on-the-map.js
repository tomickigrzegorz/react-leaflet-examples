import React, { useEffect } from 'react';
import { MapContainer, useMap, TileLayer, } from 'react-leaflet';
import L from 'leaflet';

const center = [52.22977, 21.01178];

function GetCoordinates() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const info = L.DomUtil.create('div', 'legend');

    const positon = L.Control.extend({
      options: {
        position: 'bottomleft'
      },

      onAdd: function () {
        info.textContent = 'Click on map';
        return info;
      }
    })

    map.on('click', (e) => {
      info.textContent = e.latlng;
    })

    map.addControl(new positon());

  }, [map])


  return null

}

const MapWrapper = () => {
  return (
    <MapContainer center={center} zoom={18} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <GetCoordinates />

    </MapContainer>
  )
}

export default MapWrapper;