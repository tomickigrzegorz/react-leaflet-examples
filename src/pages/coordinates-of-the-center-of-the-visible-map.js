import React, { useEffect } from 'react';
import { MapContainer, useMapEvents, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';

const center = [52.22977, 21.01178];

function Legend() {
  const map = useMap();
  const div = L.DomUtil.create("div", "center-of-map-description");


  useMapEvents({
    dragend() {
      const { lat, lng } = map.getCenter();
      const zoom = map.getZoom();
      div.innerHTML = `center: ${lat.toFixed(5)}, ${lng.toFixed(5)} | zoom: ${zoom}`;
    },
    zoomend() {
      const { lat, lng } = map.getCenter();
      const zoom = map.getZoom();
      div.innerHTML = `center: ${lat.toFixed(5)}, ${lng.toFixed(5)} | zoom: ${zoom}`;
    }
  })

  useEffect(() => {
    if (map) {
      const legend = L.control({ position: "bottomleft" });

      legend.onAdd = () => {
        const { lat, lng } = map.getCenter();
        const zoom = map.getZoom();

        L.DomEvent.disableClickPropagation(div);

        div.innerHTML = `center: ${lat.toFixed(5)}, ${lng.toFixed(5)} | zoom: ${zoom}`;

        return div;
      };

      legend.addTo(map);
    }
  }, [map, div]);

  return null;
}

const MapWrapper = () => {
  return (
    <MapContainer className={'center-of-map'} center={center} zoom={18} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Legend />

    </MapContainer>
  )
}

export default MapWrapper;